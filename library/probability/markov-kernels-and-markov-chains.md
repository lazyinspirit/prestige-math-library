---
page: markov-kernels-and-markov-chains
title: "Markov Kernels and Markov Chains"
status: draft
items: [def-time-homogeneous-markov-chain-with-transition-kernel, lem-bounded-function-form-of-the-markov-property, def-conditional-independence-given-a-sigma-algebra, lem-conditional-independence-equivalences-and-preservation, lem-conditional-independence-splicing-over-a-standard-borel-variable, def-initial-distribution-of-a-markov-chain, def-iterated-transition-kernels, thm-chapman-kolmogorov-equations, thm-finite-dimensional-laws-of-a-markov-chain, thm-ionescu-tulcea-construction-of-a-markov-chain, cor-canonical-markov-chain-on-path-space, thm-markov-chain-law-is-determined-by-initial-law-and-kernel, def-shift-operator-and-future-coordinate-sigma-algebra, thm-markov-property-for-bounded-future-path-functionals, thm-markov-property-as-past-future-conditional-independence, thm-discrete-strong-markov-property, cor-post-hitting-chain-restarts-from-the-hit-state, def-killed-and-absorbed-transition-kernels, lem-killed-and-absorbed-kernels-are-probability-kernels, def-discrete-generator-of-a-countable-state-transition-matrix, thm-countable-state-martingale-problem-characterization, cor-bounded-harmonic-functions-yield-markov-chain-martingales]
examples: []
---

A transition kernel records one-step dynamics on an arbitrary measurable state
space. The indicator definition is first extended to bounded state functions;
kernel composition then gives the Chapman--Kolmogorov equations and the full
finite-dimensional law. Ionescu--Tulcea is proved from its finite-prefix laws:
the decreasing-cylinder argument supplies the nontrivial premeasure step before
Caratheodory extension. No standard-Borel hypothesis is imposed on that
construction.

Conditional independence is developed separately, including its
conditional-law equivalence and the unique standard-Borel splice. After the
canonical path law and bounded future-functional theorem are available, the
past/future characterization is proved with the precise qualification needed to
identify one fixed time-homogeneous kernel.

The strong Markov property is stated eventwise. Explicit slice sums vanish when
the stopping time is infinite, so no undefined value $X_\infty$ occurs. Hitting
times, absorbed and killed kernels, the countable-state generator, and the
martingale-problem characterization complete the page.

Choice is declared wherever conditional-expectation versions,
standard-Borel disintegration, or infinite-path construction is consumed. The
kernel algebra and killed/absorbed kernel checks remain choice-free.

