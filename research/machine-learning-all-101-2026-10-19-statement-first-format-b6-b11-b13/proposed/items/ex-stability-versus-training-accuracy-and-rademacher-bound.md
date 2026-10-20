---
id: ex-stability-versus-training-accuracy-and-rademacher-bound
kind: example
title: "Training accuracy, algorithmic stability, and class-wide Rademacher bounds"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-uniform-algorithmic-stability
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-rademacher-complexity
  - thm-rademacher-uniform-generalization
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $\mathsf X=\{1,\ldots,N\}$ with $N\ge2$ and its discrete sigma-algebra, let $\mathsf Y=\{0,1\}$ with its discrete sigma-algebra, and let $P(X=j,Y=0)=1/N$ for every $j\in\mathsf X$. Use the zero-one loss and the hypothesis class $\mathcal H=\{h:\mathsf X\to\{0,1\}\}$. Define a constant learner $A^0$ that always outputs $h_0\equiv0$. Define a memorizing learner $A^{\mathrm{mem}}$ by predicting the majority label among sample observations at the queried feature, resolving a tie by predicting $0$, and predicting $1$ at any feature absent from the sample; on the empty sample it predicts $1$ everywhere. Both learners are permutation-invariant. For every one-point sample $S=((j,0))$, the constant learner has zero training and population risk and deletion-stability coefficient $0$. The memorizing learner also has zero training risk, but has population risk $(N-1)/N$ and deletion-stability coefficient $1$. For the full finite loss class $\mathcal G=\{(x,y)\mapsto\mathbf1\{h(x)\ne y\}:h\in\mathcal H\}$, define $\widehat{\mathfrak R}_S(\mathcal G)=\frac12\bigl(\sup_{g\in\mathcal G}g(Z_1)+\sup_{g\in\mathcal G}[-g(Z_1)]\bigr)$ for a one-point sample and $\mathfrak R_1(\mathcal G)=\mathbb E_{S\sim P}\widehat{\mathfrak R}_S(\mathcal G)$. Both values are $1/2$. Under AC, the two-sided Rademacher uniform-deviation bound is $\sup_{g\in\mathcal G}|Pg-P_1g|\le2\mathfrak R_1(\mathcal G)+\sqrt{\log(2/\delta)/2}$ for $\delta\in(0,1)$, with probability at least $1-\delta$; the natural logarithm makes its right-hand side at least $1$, the trivial zero-one loss range.

## Example references

Uniform deletion stability is defined by [[def-uniform-algorithmic-stability]].

Population and empirical risk use the integral and finite-average conventions in [[def-population-and-empirical-risk]].

The one-sided $1/m$ complexity normalization is fixed by [[def-rademacher-complexity]].

The two-sided uniform-deviation bound and its AC hypothesis are stated in [[thm-rademacher-uniform-generalization]].

Confidence terms use the natural logarithm [[def-natural-logarithm]].

Its strict monotonicity and value at $1$ follow from [[thm-natural-logarithm-laws]].

The IID and choice assumptions are specified by [[def-identically-distributed-and-iid-random-variables]]

and [[def-axiom-of-choice]].

## Facts & Assumptions

**Given:** The finite supervised domain, law $P$, binary hypothesis class, two learning rules, and Axiom of Choice stated in the Example.

[A1] Assume AC only for applying the Rademacher concentration theorem; the explicit learner risks, stability coefficients, and finite sign average below are choice-free. [[def-axiom-of-choice]]

[F1] The supervised loss on $(x,y)$ is the prediction loss evaluated at $h(x)$ and $y$. [[def-supervised-learning-problem]]

[F2] Population risk is the expectation of the loss under $P$, and training risk is its sample average. [[def-population-and-empirical-risk]]

[F3] Uniform deletion stability is the supremum loss change between the full output and the output after deleting one indexed observation. [[def-uniform-algorithmic-stability]]

[F4] The empirical one-sided Rademacher complexity is the sign average of $\sup_g m^{-1}\sum_i\sigma_i g(Z_i)$, and expected complexity averages this quantity over an IID sample. [[def-rademacher-complexity]]

[F5] For a nonempty measurable $[0,1]$ loss class with measurable suprema and AC, the two-sided expected-complexity bound is $\sup_g|Pg-P_mg|\le2\mathfrak R_m(\mathcal G)+\sqrt{\log(2/\delta)/(2m)}$ with probability at least $1-\delta$. [[thm-rademacher-uniform-generalization]]

[F6] IID means mutually independent observations with the same law. [[def-identically-distributed-and-iid-random-variables]]

[F7] For $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$. [[def-natural-logarithm]]

[F8] $\log$ is strictly increasing and $\log1=0$, so $2/\delta>1$ implies $\log(2/\delta)>0$. [[thm-natural-logarithm-laws]]

[A2] The finite discrete domain makes every loss measurable and every supremum over the nonempty finite class $\mathcal G$ measurable.

## Verification

1.1 Both rules depend only on the sample multiset, so they are permutation-invariant. Under $P$, $h_0\equiv0$ has zero loss at every feature, so its population and empirical risks are both $0$. For $S=((j,0))$, the memorizing learner predicts $0$ at $j$ and $1$ at the other $N-1$ features. Thus its empirical risk is $0$ and its population risk is $(N-1)/N$. [A2, F1, F2, given, algebra]

1.2 Fix any $z=(j,y)$ and one-point sample $S=(z)$. Since $\mathcal H$ contains every binary labeling, some $h$ has loss $g_h(z)=0$ and some has $g_h(z)=1$. For sign $\sigma=+1$, $\sup_{g\in\mathcal G}\sigma g(z)=1$; for sign $\sigma=-1$, the supremum is $0$. The two equiprobable signs therefore give $\widehat{\mathfrak R}_S(\mathcal G)=1/2$ for every $S$, and averaging over $S\sim P$ gives $\mathfrak R_1(\mathcal G)=1/2$. [A2, F4, F6, given, algebra]

2.1 The constant learner returns $h_0$ on both $S$ and its deletion, so its size-one stability coefficient is $0$. The empty-sample memorizer predicts $1$ at $j$, whereas the full-sample memorizer predicts $0$ there; at test point $(j,0)$ the loss changes by $1$. Every zero-one loss difference is at most $1$, hence the memorizer's coefficient is exactly $1$. [F1, F3, step 1.1, algebra]

3.1 With $m=1$, [F5] has complexity term $2\mathfrak R_1(\mathcal G)=1$, and [F7]–[F8] make its confidence term positive for every $\delta\in(0,1)$. Every zero-one loss deviation is at most $1$, so this class-wide upper bound is no sharper than the trivial range, while step 1.1 gives the constant learner an exact zero gap and the memorizer zero training risk with a large population risk. [A1, A2, F2, F5, F7, F8, step 1.1, step 1.2, algebra] ∎
