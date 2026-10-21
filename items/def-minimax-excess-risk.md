---
id: def-minimax-excess-risk
kind: definition
title: "Binary learning minimax excess risk"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-shattering-and-vc-dimension
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, 2014, Chapters 2–3"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Definition

Let $(\mathcal X,\Sigma)$ be a measurable instance space and let $\mathcal H$ be a nonempty class of measurable functions $h:\mathcal X\to\{0,1\}$. Give $\{0,1\}$ its full power-set sigma-algebra; all joint and sample spaces below carry the corresponding product sigma-algebras. For a finite set of distinct points $T=\{x_1,\ldots,x_n\}$, its indexed trace family is
$$\mathcal F_{\mathcal H,T}:=\left\{\{j\in[n]:h(x_j)=1\}:h\in\mathcal H\right\}\subseteq\mathcal P([n]).$$
The set $T$ is shattered by $\mathcal H$ when $\mathcal F_{\mathcal H,T}=\mathcal P([n])$, and $\operatorname{VCdim}(\mathcal H)$ is the supremum of the integers $n\ge0$ for which some $n$ distinct points are shattered; the value is $+\infty$ if these integers are unbounded. This definition is independent of the chosen ordering of $T$, since a reordering bijects the index sets and all their subsets.

For a probability law $D$ on $\mathcal X\times\{0,1\}$, the zero-one risk of a measurable binary predictor $g$ is $R_D(g):=D\{(x,y):g(x)\ne y\}\in[0,1]$, and the class benchmark is $R_D^*(\mathcal H):=\inf_{h\in\mathcal H}R_D(h)\in[0,1]$. The class excess risk of $g\in\mathcal H$ is $\Delta_D(g):=R_D(g)-R_D^*(\mathcal H)\in[0,1]$; no attainment of the infimum is asserted. A law $D$ is realizable by $\mathcal H$ when there is an $f\in\mathcal H$ with $D\{(x,y):y=f(x)\}=1$. For such a pair $(D,f)$, define its target risk by $R_D(g,f):=D_X\{x:g(x)\ne f(x)\}$, where $D_X:=D\circ\pi_X^{-1}$ is the instance marginal under the projection $\pi_X(x,y)=x$. On the probability-one event $Y=f(X)$, the indicators of $g(X)\ne Y$ and $g(X)\ne f(X)$ agree; hence $R_D(g)=R_D(g,f)$ for every measurable binary $g$, and $R_D^*(\mathcal H)=0$.

Let $\mathcal D$ be the class of all probability laws on $\mathcal X\times\{0,1\}$, and let $\mathcal D_{\rm real}(\mathcal H):=\{D\in\mathcal D:\text{there is }f\in\mathcal H\text{ with }D\{(x,y):y=f(x)\}=1\}$. For integer $m\ge1$, an admissible possibly randomized learner $A$ is a rule that depends on $\mathcal H$ and $m$, not on $D$. Its seed space and law are fixed as part of $A$, independently of $D$: a probability space $(\Omega_A,\mathscr F_A,\nu_A)$ and a seed $U\sim\nu_A$ independent of the sample. Given an ordered sample $S\in(\mathcal X\times\{0,1\})^m$, $A(S,U)$ outputs a measurable member of $\mathcal H$. For every fixed $x\in\mathcal X$, the evaluation $(S,U)\mapsto A(S,U)(x)$ must be measurable on $\big((\mathcal X\times\{0,1\})^m\times\Omega_A,(\Sigma\otimes2^{\{0,1\}})^{\otimes m}\otimes\mathscr F_A\big)$, and for every $D\in\mathcal D$ the risk $R_D(A(S,U))$ must be measurable as a function of the sample and seed. The sample law $D^m$ is the $m$-fold product law, so its coordinates are independent and each has law $D$. Probabilities and expectations involving $A$ use the product law $D^m\otimes\nu_A$. Let $\mathcal A_m(\mathcal H)$ denote this class of learners, and write $A(S)$ for $A(S,U)$ when the random seed is suppressed. These measurability conditions make each displayed expectation and probability well defined. Define the expected minimax excess risks by
$$\mathfrak M_{\rm real}(m,\mathcal H):=\inf_{A\in\mathcal A_m(\mathcal H)}\sup_{D\in\mathcal D_{\rm real}(\mathcal H)}\mathbb E_{S\sim D^m,A}R_D(A(S)),$$
$$\mathfrak M_{\rm agn}(m,\mathcal H):=\inf_{A\in\mathcal A_m(\mathcal H)}\sup_{D\in\mathcal D}\mathbb E_{S\sim D^m,A}\left[R_D(A(S))-R_D^*(\mathcal H)\right].$$
For a tolerance $\eta\ge0$, their high-probability tail versions are
$$\mathfrak T_{\rm real}(m,\mathcal H,\eta):=\inf_{A\in\mathcal A_m(\mathcal H)}\sup_{D\in\mathcal D_{\rm real}(\mathcal H)}\Pr_{S\sim D^m,A}\{R_D(A(S))>\eta\},$$
$$\mathfrak T_{\rm agn}(m,\mathcal H,\eta):=\inf_{A\in\mathcal A_m(\mathcal H)}\sup_{D\in\mathcal D}\Pr_{S\sim D^m,A}\{R_D(A(S))-R_D^*(\mathcal H)>\eta\}.$$
The lower bounds below are high-probability statements; their expectation consequences follow by integrating the nonnegative excess risk.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable instance space, label space, and measurable predictors; this definition specializes its labels and actions to $\{0,1\}$.

[[def-population-and-empirical-risk]]: defines population risk as the integral of the loss under the joint law; for zero-one loss this is $D\{g(X)\ne Y\}$.

[[lem-population-and-empirical-risk-are-measurable]]: composition with a fixed measurable predictor makes its loss measurable, so the zero-one risk above is a defined probability; measurability of a random learner's risk is separately required in this definition.

[[def-shattering-and-vc-dimension]]: a family $\mathcal F\subseteq\mathcal P([n])$ shatters $T\subseteq[n]$ exactly when its trace family $\mathcal F|_T$ equals $\mathcal P(T)$; here the trace family is formed only after indexing distinct points of the finite set.

## Remarks

The disagreement and realizability events above are measurable: for measurable binary predictors $g,f$, their disagreement set in $\mathcal X\times\{0,1\}$ is a union of the measurable rectangles $g^{-1}(\{0\})\times\{1\}$ and $g^{-1}(\{1\})\times\{0\}$; the agreement event is the corresponding opposite union. The definitions and lower-bound constructions use finite binary labels and finite support; they require no conditional-label kernel, measurable selector, or Axiom of Choice. No Sauer–Shelah trace count is used.
