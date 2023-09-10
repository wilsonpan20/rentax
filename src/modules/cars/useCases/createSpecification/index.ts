import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUsecase';

const specificationsRepositoryRepository = SpecificationsRepository.getInstace();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepositoryRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { specificationsRepositoryRepository, createSpecificationUseCase, createSpecificationController };
