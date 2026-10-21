---
id: thm-finite-class-sample-complexity
kind: theorem
title: "Finite-class realizable and agnostic sample complexity"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-realizable-and-agnostic-pac
  - thm-finite-class-agnostic-erm-bound
  - thm-finite-class-realizable-pac-bound
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 Theorems 2.5 and 2.13"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 2 Corollary 2.3 and Chapter 4 Corollary 4.6"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

Let $\mathcal H$ be a finite nonempty class of measurable binary classifiers, put $N=|\mathcal H|$, and let $0<\epsilon,\delta<1$. For IID samples, the finite-list exact ERM is realizable $(\epsilon,\delta)$-PAC whenever the law is realizable by $\mathcal H$ and

$$m\ge\frac{\log N+\log(1/\delta)}{\epsilon}.$$

For arbitrary laws, a finite-list $\eta$-approximate ERM with fixed $0\le\eta<\epsilon$ is agnostic $(\epsilon,\delta)$-PAC whenever

$$m\ge\frac{2\bigl(\log N+\log(2/\delta)\bigr)}{(\epsilon-\eta)^2}.$$

Here $m$ is a positive integer and logarithms are natural. In particular, exact agnostic ERM ($\eta=0$) has the sufficient sample size $m\ge2(\log N+\log(2/\delta))/\epsilon^2$. These are sufficient upper bounds; they do not assert optimality or computational efficiency.

## Statement references

[[def-realizable-and-agnostic-pac]]: defines the two PAC criteria and includes learner randomness in their probability statements when present.

[[thm-finite-class-realizable-pac-bound]]: proves the realizable finite-class sample-size condition.

[[thm-finite-class-agnostic-erm-bound]]: proves the agnostic ERM excess-risk bound used to obtain the agnostic sample size.

[[def-natural-logarithm]]: defines the natural logarithm used in the sample-size formulas.

[[thm-natural-logarithm-laws]]: supplies the monotonicity and product law used in the sample-size comparison.

## Facts & Assumptions

**Given:** A finite nonempty class of measurable binary classifiers, $N=|\mathcal H|$, $0<\epsilon,\delta<1$, and fixed $0\le\eta<\epsilon$ for the approximate-ERM clause.

[A1] No choice axiom is added; the two supplier bounds use finite classes and finite-list selectors.

[F1] In the realizable case, a finite-class exact ERM has risk at most $\epsilon$ with probability at least $1-\delta$ if $m\ge(\log|\mathcal H|+\log(1/\delta))/\epsilon$. [[thm-finite-class-realizable-pac-bound]]

[F2] For arbitrary $P$, with probability at least $1-\delta$, a finite-list $\eta$-ERM has excess at most $2\sqrt{(\log|\mathcal H|+\log(2/\delta))/(2m)}+\eta$. [[thm-finite-class-agnostic-erm-bound]]

[F3] For deterministic measurable $A:\mathcal Z^m\to\mathcal H$, realizable $(\epsilon,\delta)$-PAC means $\mathbb P_S\{R_P(A(S))\le\epsilon\}\ge1-\delta$ for every law admitting a zero-risk member; agnostic PAC means $\mathbb P_S\{R_P(A(S))-\inf_{h\in\mathcal H}R_P(h)\le\epsilon\}\ge1-\delta$ for every law. [[def-realizable-and-agnostic-pac]]

[F4] The natural logarithm is increasing, $\log 1=0$, and has the product law. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Under the stated realizability assumption, the first sample-size condition is exactly the hypothesis of [F1], so the exact finite-list ERM meets the realizable PAC criterion in [F3]. [given, F1, F3]

1.2 Put $a=\sqrt{(\log N+\log(2/\delta))/(2m)}$. Since $N\ge1$ and $0<\delta<1$, [F4] makes the numerator positive; also $\epsilon-\eta>0$. The sample-size condition gives $a^2\le(\epsilon-\eta)^2/4$, so $a\le(\epsilon-\eta)/2$ by nonnegativity. [given, F4, algebra]

2.1 By [F2], with probability at least $1-\delta$ the agnostic excess is at most $2a+\eta\le\epsilon$. This is the agnostic PAC criterion in [F3], and setting $\eta=0$ gives the exact-ERM formula. [F2, F3, step 1.2, algebra] ∎
