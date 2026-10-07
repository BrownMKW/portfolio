export type TechnicalStudy = {
  slug: string;
  title: string;
  category: string;
  context: string;

  summary: string;
  overview: string[];
  problem: string;

  contribution: string[];
  methods: string[];

  tools: string[];
  toolsAndSkills?: string[];

  results: string[];
  discussion?: string[];

  evidence: string[];
  limitations: string[];

  tags: string[];
  visuals?: string[];

  sourceCodeGuidance?: string;
};

export const technicalStudies: TechnicalStudy[] = [
  {
    slug: "exam-timetabling",

    title: "Exam Timetabling with Greedy Graph Coloring",

    category: "Algorithms · Graph Theory · Optimization",

    context:
      "Graduate coursework in Data Science and Analytics at Kennesaw State University.",

    summary:
      "This study modeled exam timetabling as a graph-coloring problem using 33,997 enrollment records covering 7,896 students and 800 exams. Student enrollment relationships were transformed into an exam-conflict graph containing 10,113 edges, and a largest-first greedy coloring heuristic produced a feasible 18-timeslot schedule with zero same-timeslot conflicts.",

    overview: [
      "Each exam was represented as a vertex in a graph, with an edge connecting two exams whenever at least one student was enrolled in both. This transformed the enrollment data into a direct representation of the scheduling constraints: adjacent vertices could not receive the same timeslot.",
      "After constructing the conflict graph, exams were ordered by decreasing vertex degree and colored using a largest-first greedy heuristic. Each color represented a timeslot, allowing the scheduling problem to be treated as a graph-coloring problem while explicitly checking the final assignment for remaining conflicts.",
    ],

    problem:
      "The objective was to assign 800 exams to no more than 24 available timeslots while ensuring that no student was scheduled to take two exams at the same time. Because conflicts are determined by overlapping student enrollments, the scheduling problem required identifying those relationships across the full dataset and finding a feasible assignment that respected every conflict.",

    contribution: [
      "I processed the enrollment data and transformed student-exam relationships into an exam-conflict graph, analyzed the resulting graph structure, implemented the largest-first greedy coloring procedure, and verified the feasibility of the final schedule. I also produced the supporting analysis, visualizations, report, and presentation used to communicate the results.",
    ],

    methods: [
      "Enrollment-data processing and validation",
      "Exam-conflict graph construction",
      "Vertex-degree and graph-structure analysis",
      "Largest-first vertex ordering",
      "Greedy graph coloring",
      "Timeslot assignment",
      "Schedule-feasibility verification",
      "Conflict validation",
    ],

    tools: [
      "Python",
      "pandas",
      "NumPy",
      "NetworkX",
      "Matplotlib",
    ],

    toolsAndSkills: [
      "Python",
      "pandas",
      "NumPy",
      "NetworkX",
      "Matplotlib",
      "Data Processing",
      "Data Validation",
      "Graph Theory",
      "Graph Modeling",
      "Graph Analysis",
      "Graph Coloring",
      "Greedy Algorithms",
      "Heuristic Optimization",
      "Scheduling Optimization",
      "Algorithmic Problem Solving",
      "Data Visualization",
    ],

    results: [
      "7,896 students",
      "800 exams",
      "33,997 student-exam enrollment records",
      "10,113 exam-conflict edges",
      "18-timeslot feasible schedule",
      "Zero same-timeslot conflicts",
    ],

    discussion: [
      "The conflict graph provides a direct representation of the scheduling constraint: exams connected by an edge cannot share the same period. With 800 exams and 10,113 conflict relationships, the graph captures a scheduling problem that would be difficult to reason about consistently through manual assignment alone.",
      "The largest-first strategy gives priority to exams with the greatest number of conflicts. Assigning these more constrained exams earlier reduces the risk of leaving highly connected vertices until late in the coloring process, when fewer feasible timeslots may remain.",
      "The resulting coloring used 18 of the 24 available timeslots and produced no same-timeslot conflicts. This establishes that an 18-timeslot schedule is feasible for the modeled constraints, but it does not establish that 18 is the minimum possible number of timeslots.",
    ],

    evidence: [
      "Original project report",
      "Original project presentation",
      "Original Python implementation",
      "Reproducible implementation",
      "Aggregate analysis outputs",
      "Portfolio visualizations",
    ],

    limitations: [
      "The 18-timeslot result is a feasible solution produced by the greedy heuristic; it is not a proof that 18 timeslots is the global minimum.",
      "The model considers student enrollment conflicts but does not incorporate room capacity, exam duration, faculty availability, or other operational scheduling constraints.",
      "The benchmark dataset is not included among the public project materials.",
    ],

    tags: [
      "Graph Theory",
      "Graph Coloring",
      "Algorithms",
      "Scheduling",
      "NetworkX",
      "Python",
    ],

    visuals: [
      "Exam-conflict graph diagram",
      "Degree-distribution visualization",
      "Exams-per-timeslot chart",
      "Study facts panel",
    ],
  },

  {
    slug: "hierarchical-longitudinal-modeling",

    title: "Hierarchical and Longitudinal Modeling in R",

    category: "Statistical Modeling · Longitudinal Analysis",

    context:
      "Graduate coursework in Data Science and Analytics at Kennesaw State University.",

    summary:
      "Applied two- and three-level mixed-effects models to educational and longitudinal datasets in R. The work included intraclass correlation, random intercepts and slopes, cross-level interactions, growth modeling, and decomposition of variation across repeated measurements, individuals, and schools.",

    overview: [
      "This combined study examines how hierarchical and longitudinal models separate variation across multiple levels of structured data.",
      "Three analyses considered mathematics achievement across schools, repeated antisocial-behavior measurements, and reading development with observations nested within children and children nested within schools.",
    ],

    problem:
      "Quantify variation across repeated observations, individuals, and schools; estimate change over time; and examine individual- and group-level predictors with mixed-effects models.",

    contribution: [
      "Prepared and transformed data for hierarchical and longitudinal analysis, including restructuring repeated-measures data from wide to long format.",
      "Specified and fitted two- and three-level mixed-effects models in R.",
      "Estimated and interpreted intraclass correlations, random effects, fixed effects, and variance components.",
      "Examined random slopes, growth trajectories, contextual predictors, and cross-level interactions.",
      "Compared progressively expanded models and interpreted changes in variance across modeling levels.",
    ],

    methods: [
      "Random-effects ANOVA",
      "Intraclass correlation",
      "Random-intercept models",
      "Random-slope models",
      "Cross-level interactions",
      "Longitudinal growth models",
      "Three-level hierarchical models",
      "Likelihood-ratio comparison",
    ],

    tools: [
      "R",
      "lme4",
      "lmerTest",
      "nlme",
      "ggplot2",
      "dplyr",
      "readxl",
      "car",
    ],

    results: [
      "Mathematics-achievement ICC: 0.1804",
      "Student SES and gender reduced within-school variance by 7.14%",
      "Sector and mean school SES reduced school-intercept variance by 67.67%",
      "Antisocial-behavior ICC: 0.4787",
      "Reported antisocial age slope: 0.07425 per year",
      "Three-level reading model attributed 81.34% of variation within children, 8.91% between children within schools, and 9.75% between schools",
    ],

    evidence: [
      "Three original statistical-analysis reports",
      "R analysis scripts for each included study",
      "Model output and calculations preserved with the coursework",
      "Original plots and interpretations",
    ],

    limitations: [
      "The analyses are associational and should not be interpreted as causal effects.",
      "The original analyses included limited residual, convergence, and singular-fit diagnostics.",
      "Participant-level and raw coursework datasets should not be published.",
    ],

    tags: [
      "Multilevel Modeling",
      "Longitudinal Analysis",
      "Mixed Effects",
      "Hierarchical Models",
      "R",
      "lme4",
    ],

    visuals: [
      "Hierarchical-data diagram",
      "Variance-decomposition chart",
      "Model-implied longitudinal trajectories",
      "ICC and variance-reduction comparison",
    ],

    sourceCodeGuidance:
      "The R analyses should be cleaned and rerun with project-relative data loading, programmatically generated tables, and additional model diagnostics before a public source repository is linked.",
  },

  {
    slug: "bayesian-probit-mixture-modeling",

    title: "Bayesian Probit and Finite-Mixture Modeling",

    category: "Bayesian Statistics · Statistical Computing",

    context:
      "Graduate coursework in Data Science and Analytics at Kennesaw State University.",

    summary:
      "Applied MCMC-based latent-variable and finite-mixture models to simulated and survey data, including binary probit, ordered probit, and mixture regression. The work covered posterior estimation, credible intervals, latent class assignment, and component comparison.",

    overview: [
      "This study explored Bayesian computation through Monte Carlo estimation, latent-variable probit models, and finite-mixture regression.",
      "The analyses sampled latent variables and model parameters, summarized posterior distributions, and compared alternative mixture specifications using BIC and log marginal likelihood.",
    ],

    problem:
      "Estimate latent-variable classification and heterogeneous regression models with Bayesian computation, then compare alternative finite-mixture specifications.",

    contribution: [
      "Completed Bayesian derivations and Monte Carlo experiments.",
      "Adapted instructor-provided sampling implementations for binary probit, ordered probit, and finite-mixture modeling.",
      "Designed and ran simulation experiments and applied the models to coursework data.",
      "Summarized posterior estimates and credible intervals.",
      "Compared alternative mixture specifications using model-selection criteria.",
      "Explored extensions to the supplied finite-mixture framework.",
    ],

    methods: [
      "Monte Carlo estimation",
      "Conditional-posterior derivation",
      "Gibbs sampling",
      "Data augmentation",
      "Binary probit regression",
      "Ordered probit regression",
      "Finite-mixture regression",
      "BIC and log marginal likelihood",
    ],

    tools: [
      "Python",
      "NumPy",
      "pandas",
      "SciPy",
      "scikit-learn",
      "statsmodels",
      "Matplotlib",
      "Jupyter",
    ],

    results: [
      "Monte Carlo product estimate: 10.0035 with reported standard error 0.00350",
      "Synthetic mixture BIC values: 4598.28, 4342.80, 4329.20, and 4383.79 for one through four components",
      "The synthetic BIC comparison selected three components",
    ],

    evidence: [
      "Three original coursework reports",
      "Saved Python experiment scripts",
      "Simulation code",
      "Model-comparison results",
      "Posterior summaries and original analytical work",
    ],

    limitations: [
      "Core probit and finite-mixture samplers were adapted from instructor-provided code rather than implemented entirely from scratch.",
      "The unsuccessful early Gibbs-sampling exercise should not be presented as a successful result.",
      "The archived implementation had limited convergence diagnostics and numerical-stability safeguards.",
    ],

    tags: [
      "Bayesian Statistics",
      "MCMC",
      "Probit Regression",
      "Mixture Models",
      "Latent Variables",
      "Python",
    ],

    visuals: [
      "Probit data-augmentation diagram",
      "Trace and posterior-density plots",
      "BIC versus component-count chart",
      "Mixture-membership diagram",
    ],

    sourceCodeGuidance:
      "A public implementation should be created independently from the instructor-provided sampler scaffolding and should include modern sampling practices, convergence diagnostics, and reproducible synthetic experiments.",
  },

  {
    slug: "insurance-frequency-severity",

    title: "Two-Part Modeling of Insurance Claim Frequency and Severity",

    category: "Predictive Modeling · Applied Statistics",

    context:
      "Graduate coursework in Data Science and Analytics at Kennesaw State University.",

    summary:
      "Developed a two-part insurance modeling workflow that separates claim occurrence from claim severity. Class-weighted logistic regression addressed the imbalanced claim indicator, while linear and Gamma regression were compared for positive claim costs.",

    overview: [
      "This study framed insurance claim-cost prediction as two related problems: estimating whether a policy would generate a claim and estimating the cost conditional on a positive claim.",
      "The labeled dataset contained 22,610 policies, with claims representing 6.78% of observations. Classification used stratified model evaluation and class-weight tuning, while severity modeling compared linear and Gamma regression.",
    ],

    problem:
      "Estimate the probability that a policyholder submits a claim and the expected cost of a claim when one occurs.",

    contribution: [
      "Performed exploratory analysis and categorical feature preparation.",
      "Designed a two-part modeling strategy separating claim occurrence from claim severity.",
      "Addressed severe class imbalance using class-weighted logistic regression.",
      "Searched alternative class-weight settings using stratified cross-validation.",
      "Compared linear and Gamma regression for positive claim severity.",
      "Produced the original analysis, figures, and project presentation.",
    ],

    methods: [
      "Exploratory data analysis",
      "Categorical feature preparation",
      "Rare-category consolidation",
      "One-hot encoding",
      "Class-weighted logistic regression",
      "Five-fold stratified class-weight search",
      "Linear severity regression",
      "Gamma regression with log link",
    ],

    tools: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "LightGBM",
      "Seaborn",
      "Matplotlib",
    ],

    results: [
      "22,610 labeled policies",
      "1,534 claims",
      "Claim rate: 6.78%",
      "Reported weighted-logistic F1: 0.84603",
      "Reported weighted-logistic accuracy: 74.17%",
      "Reported OLS severity MSE: 13,577,186.81",
      "Reported Gamma severity MSE: 13,312,845.78",
    ],

    evidence: [
      "Original project report and presentation",
      "Python exploratory-analysis code",
      "Classification code",
      "Severity-modeling code",
      "Saved model-evaluation results",
    ],

    limitations: [
      "The external validation stage from the archived coursework is excluded because its target construction was incorrect.",
      "The reported performance values describe the labeled coursework experiment rather than independently validated external performance.",
      "The original workflow should be rebuilt with a unified preprocessing pipeline and stricter separation of training, validation, and test data.",
      "Raw policy records and unidentified source data should not be published.",
    ],

    tags: [
      "Insurance Analytics",
      "Imbalanced Classification",
      "Logistic Regression",
      "Gamma Regression",
      "Two-Part Models",
      "Python",
    ],

    visuals: [
      "Frequency/severity workflow diagram",
      "Class-imbalance chart",
      "Cross-validated F1 curve",
      "OLS versus Gamma comparison",
    ],

    sourceCodeGuidance:
      "The study should be rebuilt using reproducible preprocessing, correct train-validation-test separation, and synthetic or clearly licensed demonstration data before a public implementation is linked.",
  },

  {
    slug: "regularization-model-selection",

    title: "Regularization and Model Selection",

    category: "Machine Learning · Statistical Learning",

    context:
      "Graduate coursework in Data Science and Analytics at Kennesaw State University.",

    summary:
      "Compared Ridge and Lasso regression alongside L1- and L2-regularized logistic regression, examining coefficient shrinkage, sparsity, feature transformations, and predictive error.",

    overview: [
      "This study investigated how L1 and L2 penalties affect regression and classification models.",
      "The analysis evaluated regularization grids, coefficient paths, feature transformations, cross-validation, and sparsity across regression and spam-classification exercises.",
    ],

    problem:
      "Compare L1 and L2 regularization for continuous prediction and classification, including their effects on coefficient shrinkage, sparsity, and prediction error.",

    contribution: [
      "Implemented experimental loops across multiple regularization strengths.",
      "Compared Ridge and Lasso behavior through prediction error and coefficient paths.",
      "Evaluated L1- and L2-regularized logistic regression for spam classification.",
      "Compared standard, logarithmic, and binary feature transformations.",
      "Analyzed coefficient shrinkage, sparsity, and model-selection behavior.",
    ],

    methods: [
      "Ridge regression",
      "Lasso regression",
      "L1-regularized logistic regression",
      "L2-regularized logistic regression",
      "Coefficient paths",
      "Five-fold cross-validation",
      "Polynomial features",
      "Feature transformations",
    ],

    tools: [
      "Python",
      "NumPy",
      "pandas",
      "scikit-learn",
      "SciPy",
      "Matplotlib",
      "Jupyter",
    ],

    results: [
      "Reported housing Ridge RMSE: 5.6283 at alpha = 10",
      "Reported housing Lasso RMSE: 5.2263 at alpha = 0.07",
      "Reported spam L2/log-feature accuracy: 0.9388 at alpha = 0.03",
      "Reported spam L1/log-feature accuracy: 0.9447 at alpha = 1",
    ],

    evidence: [
      "Original coursework report",
      "Submitted Python analysis code",
      "Student exploration notebook",
      "Coefficient-path experiments",
      "Saved model-comparison results",
    ],

    limitations: [
      "Preprocessing occurred before the original housing cross-validation, creating leakage across folds.",
      "Feature transformation and regularization choices in the spam exercise were influenced by the test set.",
      "The original Boston Housing dataset should not be reused in a modern public rebuild.",
      "Instructor-supplied utilities and solution notebooks are not part of the original-work evidence.",
    ],

    tags: [
      "Regularization",
      "Ridge Regression",
      "Lasso",
      "Logistic Regression",
      "Feature Selection",
      "Cross-Validation",
      "Python",
    ],

    visuals: [
      "Ridge and Lasso coefficient paths",
      "Cross-validated error curves",
      "Nonzero-coefficient comparison",
      "Nested-validation workflow diagram",
    ],

    sourceCodeGuidance:
      "The study should be rebuilt with a modern licensed dataset, scikit-learn pipelines, leakage-free preprocessing, reproducible seeds, and an untouched final test set before public source code is linked.",
  },
];

export const featuredTechnicalStudies = technicalStudies.slice(0, 3);