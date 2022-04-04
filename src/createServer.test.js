const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

const _figureCalculator = new FigureCalculator(MathBasic);
const { server } = require('@hapi/hapi');
const { multiply } = require('./MathBasic');

describe('A HTTP Server', () => {
	describe('when GET /add', () => {
		it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
			// Arrange
			const a = 10;
			const b = 20;
			const spyAdd = jest.spyOn(MathBasic, 'add');
			const server = createServer({ mathBasic: MathBasic });

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/add/${a}/${b}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(30);
			expect(spyAdd).toBeCalledWith(a, b);

		});
	});

	describe('when GET /subtract', () => {
		it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
			// Arrange
			const a = 12;
			const b = 8;
			const spySubtract = jest.spyOn(MathBasic, 'subtract');
			const server = createServer({ mathBasic: MathBasic });

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/subtract/${a}/${b}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(4);
			expect(spySubtract).toBeCalledWith(a, b);
		});
	});

	describe('When GET /multiply', () => {
		it('should respond with a status code of 200 and the payload value is a product of a and b correctly', async () => {
			// Arrange
			const a = 10;
			const b = 5;
			const spyMultiply = jest.spyOn(MathBasic, 'multiply');
			const server = createServer({ mathBasic: MathBasic });

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/multiply/${a}/${b}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(50);
			expect(spyMultiply).toBeCalledWith(a, b);
		});
	});

	describe('When GET /divide', () => {
		it('should respond with a status code of 200 and the payload value is a quotient of a and b correctly', async () => {
			// Arrange
			const a = 27;
			const b = 9;
			const spyDivide = jest.spyOn(MathBasic, 'divide');
			const server = createServer({ mathBasic: MathBasic });

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/divide/${a}/${b}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(3);
			expect(spyDivide).toBeCalledWith(a, b);
		});
	});

	describe('When GET /rectangle/perimeter', () => {
		it('should respond with a status code of 200 and the payload value is correct rectangle perimeter', async () => {
			// Arrange
			const length = 20;
			const width = 5;
			const spyAdd = jest.spyOn(MathBasic, 'add');
			const spyMultiply = jest.spyOn(MathBasic, 'multiply');
			const spyRectanglePerimeter = jest.spyOn(_figureCalculator, 'calculateRectanglePerimeter');
			const server = createServer({ mathBasic: MathBasic, figureCalculator: _figureCalculator});

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/rectangle/perimeter/${length}/${width}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(50);
			expect(spyAdd).toBeCalledWith(length, width);
			expect(spyMultiply).toBeCalledWith(2, length+width);
			expect(spyRectanglePerimeter).toBeCalledWith(length, width);
		});
	});

	describe('When GET /rectangle/area', () => {
		it('should respond with a status code of 200 and the payload value is correct rectangle area', async () => {
			// Arrange
			const length = 7;
			const width = 4;
			const spyMultiply = jest.spyOn(MathBasic, 'multiply');
			const spyRectangleArea = jest.spyOn(_figureCalculator, 'calculateRectangleArea');
			const server = createServer({ mathBasic: MathBasic, figureCalculator: _figureCalculator });

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/rectangle/area/${length}/${width}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(28);
			expect(spyMultiply).toBeCalledWith(length, width);
			expect(spyRectangleArea).toBeCalledWith(length, width);

		});
	});

	describe('When GET /triangle/perimeter', () => {
		it('should respond with a status code of 200 and the payload value is correct triangle perimeter', async () => {
			// Arrange
			const a = 4;
			const b = 5;
			const c = 7;
			const spyAdd = jest.spyOn(MathBasic, 'add');
			const spyTrianglePerimeter = jest.spyOn(_figureCalculator, 'calculateTrianglePerimeter');
			const server = createServer({ mathBasic: Math, figureCalculator: _figureCalculator });

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/triangle/perimeter/${a}/${b}/${c}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(16);
			expect(spyAdd).toBeCalledWith(a,b);
			expect(spyAdd).toBeCalledWith(a+b,c);
			expect(spyTrianglePerimeter).toBeCalledWith(a,b,c);

		});
	});

	describe('When GET /triangle/area', () => {
		it('should respond with a status code of 200 and the payload value is correct triangle area', async () => {
			// Arrange
			const base = 12;
			const height = 7;
			const spyMultiply = jest.spyOn(MathBasic, 'multiply');
			const spyDivide = jest.spyOn(MathBasic, 'divide');
			const spyTriangleArea = jest.spyOn(_figureCalculator, 'calculateTriangleArea');
			const server = createServer({mathBasic: MathBasic, figureCalculator: _figureCalculator});

			// Action
			const response = await server.inject({
				method: 'GET',
				url: `/triangle/area/${base}/${height}`,
			});

			// Assert
			const responseJson = JSON.parse(response.payload);
			expect(response.statusCode).toEqual(200);
			expect(responseJson.value).toEqual(42);
			expect(spyMultiply).toBeCalledWith(base, height);
			expect(spyDivide).toBeCalledWith(base * height, 2);
			expect(spyTriangleArea).toBeCalledWith(base, height);
		})
	})
});