---
id: thm-scaffold-convex-and-nonconvex-rates
kind: theorem
title: SCAFFOLD rates for strongly convex, convex and nonconvex objectives
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-scaffold
  - def-federated-objective-and-client-sampling
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-convex-round-progress
  - lem-scaffold-nonconvex-round-progress
  - lem-scaffold-control-tracking-identity
  - lem-federated-recursion-averaging
  - lem-smooth-convex-gradient-difference
  - lem-finite-sum-gradient-is-average
  - lem-l-smoothness-descent-inequality
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Theorem III and Appendix E"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $N,d,K\ge1$, let $1\le S\le N$, and let
$f_i:\mathbb R^d\to\mathbb R$ have $\beta$-Lipschitz gradients. Put
$f=N^{-1}\sum_{i=1}^Nf_i$, and suppose $f$ is bounded below by $f^\star$.
Run Option II SCAFFOLD with a uniform size-$S$ client sample in every round,
fresh conditionally unbiased local stochastic gradients whose variance on
each client is at most $\sigma^2$, and gradient-consistent initialization
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$. Set
$D=\|x_0-x^\star\|_2$ and $F=f(x_0)-f^\star$ when a minimizer $x^\star$
exists.

1. **Strongly convex case.** Suppose every $f_i$ is $\mu$-strongly convex
for $0<\mu\le\beta$ and $f$ attains its minimum at $x^\star$. Set
$\eta_g=\sqrt S$ and choose
$$ \eta_l\le\min\left\{\frac1{81\beta K\eta_g}, \frac{S}{15\mu NK\eta_g}\right\}, \qquad \widetilde\eta=K\eta_l\eta_g. $$
For $R\ge1$, choose $J\in\{0,\ldots,R-1\}$ with probabilities
proportional to $(1-\mu\widetilde\eta/2)^{-(J+1)}$ and return
$\bar x_R=x_J$. Then
$$ \mathbb E[f(\bar x_R)-f^\star] \le\frac{V_0}{\widetilde\eta W_R} +\frac{19\widetilde\eta\sigma^2}{KS}, \quad V_0=D^2+\frac{14N\widetilde\eta^2}{S}C_0, \quad W_R=\sum_{r=1}^R(1-\mu\widetilde\eta/2)^{-r}, $$
where $C_0=N^{-1}\sum_i\|\nabla f_i(x_0)-\nabla f_i(x^\star)\|_2^2$.
Consequently, a suitable $\widetilde\eta$ and
$$ R=\widetilde O\left( \frac{\sigma^2}{\mu KS\epsilon} +\frac\beta\mu+\frac NS \right) $$
communication rounds suffice for expected objective error at most
$\epsilon>0$.

2. **General convex case.** Suppose every $f_i$ is convex and differentiable,
and $f$ attains its minimum at $x^\star$. Set $\eta_g=\sqrt S$ and choose
$0<\widetilde\eta=K\eta_l\eta_g\le1/(81\beta)$. For uniform
$J\in\{0,\ldots,R-1\}$ and $\bar x_R=x_J$,
$$ \frac1R\sum_{r=0}^{R-1}\mathbb E[f(x_r)-f^\star] \le\frac{D^2+28\beta N\widetilde\eta^2F/S} {\widetilde\eta R} +\frac{19\widetilde\eta\sigma^2}{KS}. $$
In particular, for $\epsilon>0$, choosing
$$ \widetilde\eta\le\min\left\{\frac1{81\beta}, \frac{\epsilon KS}{57\sigma^2}\right\} $$
with the variance restriction omitted when $\sigma=0$, and taking
$$ R=O\left( \frac{\sigma^2D^2}{KS\epsilon^2} +\frac{\beta D^2}{\epsilon} +\frac{NF}{S} \right) $$
suffice for expected objective error at most $\epsilon$.

3. **Nonconvex case.** Suppose only that $f$ is $\beta$-smooth and bounded
below by $f^\star$. Set $\eta_g=\sqrt S$ and choose
$$ 0<\widetilde\eta=K\eta_l\eta_g \le\frac1{24\beta}\left(\frac SN\right)^{2/3}. $$
For uniform $J\in\{0,\ldots,R-1\}$ and $\bar x_R=x_J$,
$$ \mathbb E\|\nabla f(\bar x_R)\|_2^2 \le\frac{14F}{\widetilde\eta R} +\frac{140\beta\widetilde\eta\sigma^2}{KS}. $$
Thus a choice of $\widetilde\eta$ and
$$ R=O\left( \frac{\beta\sigma^2F}{KS\epsilon^2} +\left(\frac NS\right)^{2/3}\frac{\beta F}{\epsilon} \right) $$
rounds suffice to make the expected squared gradient norm at the returned
iterate at most $\epsilon>0$.

The convex rates concern the equal-client objective and their stated
server-iterate outputs. They do not assert a rate for the count-weighted
deployment objective. No gradient-dissimilarity condition is used for
SCAFFOLD, and the quadratic-only Hessian-dissimilarity improvement is not
claimed for general smooth losses.

## Statement references

[Karimireddy et al., SCAFFOLD, Theorem III and complete Appendix E](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The equal-client objective, SCAFFOLD algorithm and case-specific convexity, smoothness and stochastic-gradient hypotheses in the Statement.

[F1] [[lem-scaffold-convex-round-progress]]: in convex cases the distance and control potential contracts and pays for the objective gap and variance.

[F3] [[lem-federated-recursion-averaging]]: summing a convex descent recurrence gives a uniform-index average; geometrically weighted summation gives the strongly convex output bound.

[F4] [[lem-smooth-convex-gradient-difference]] and [[lem-finite-sum-gradient-is-average]]: for convex clients, $C_0\le2\beta F$ and the average client gradient equals $\nabla f$.

[F5] [[def-federated-objective-and-client-sampling]] and [[alg-scaffold]]: the objective is $N^{-1}\sum_i f_i$; each round samples clients uniformly without replacement and updates the server model and control by the SCAFFOLD rules.

[F6] [[def-scaffold-analysis-trajectory-and-errors]]: $C_r$ and $\Xi_r$ are the convex control-lag and nonconvex anchor-tracking errors used in the one-round bounds.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: roundwise conditional expectations can be iterated and the stated integrable inequalities averaged.

[A1] Every client stochastic gradient is conditionally unbiased with within-client variance at most $\sigma^2$ at every query; client samples are uniform fixed-size subsets; initialization is gradient-consistent.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 In the strongly convex case, put $\widetilde\eta=K\eta_l\sqrt S$ and [given]
apply [F1]. Since $\eta_g^2=S$, the variance term in [F1] is at most
$19\widetilde\eta^2\sigma^2/(KS)$. The geometric recurrence lemma [F3]
with gap coefficient one and weights
$w_r=(1-\mu\widetilde\eta/2)^{-r}$ gives
$$ \mathbb E[f(\bar x_R)-f^\star] \le\frac{V_0}{\widetilde\eta W_R} +\frac{19\widetilde\eta\sigma^2}{KS}, \qquad V_0=\mathbb E\|x_0-x^\star\|_2^2 +\frac{14N\widetilde\eta^2}{S}C_0. $$
This is the strongly convex bound in the Statement. [F1, F3, F5, F6, F8,
A1, A2, given, algebra]

1.2 By convex smoothness, [F4] gives $C_0\le2\beta F$, hence [given]
$V_0\le D^2+28\beta N\widetilde\eta^2F/S$. Also
$$ W_R=\frac{(1-\mu\widetilde\eta/2)^{-R}-1} {\mu\widetilde\eta/2}. $$
Thus $V_0/(\widetilde\eta W_R)\le\epsilon/2$ whenever
$$ R\ge\frac{2}{\mu\widetilde\eta} \log\left(1+\frac{\mu V_0}{\epsilon}\right), $$
and the variance term is at most $\epsilon/2$ if
$\widetilde\eta\le\epsilon KS/(38\sigma^2)$. The reciprocal
admissible step is bounded by a constant times
$\beta+\mu N/S+\sigma^2/(KS\epsilon)$; dividing by $\mu$ gives
the stated communication rate, up to the displayed logarithmic factor.
[F3, F4, step 1.1, given, algebra]

1.3 In the general convex case, apply [F1] with $\mu=0$ and [given]
$\eta_g=\sqrt S$. It gives
$V_r\le V_{r-1}-\widetilde\eta\mathbb E[f(x_{r-1})-f^\star]
+19\widetilde\eta^2\sigma^2/(KS)$. Sum over $r=1,\ldots,R$ and
drop the nonnegative terminal potential. For uniform $J$ this yields
$$ \frac1R\sum_{r=0}^{R-1}\mathbb E[f(x_r)-f^\star] \le\frac{V_0}{\widetilde\eta R} +\frac{19\widetilde\eta\sigma^2}{KS}, \qquad V_0=D^2+\frac{14N\widetilde\eta^2}{S}C_0. $$
Substitution of $C_0\le2\beta F$ proves the exact bound in the Statement.
[F1, F3, F4, F6, F8, A1, A2, given, algebra]

1.4 Choose $\widetilde\eta\le\min\{1/(81\beta), [given]
\epsilon KS/(57\sigma^2)\}$, omitting the variance restriction if
$\sigma=0$. The variance term in step 1.3 is then at most
$\epsilon/3$. Taking $R\ge3V_0/(\widetilde\eta\epsilon)$ makes the
initial term at most $\epsilon/3$. Since
$C_0\le2\beta F$ and $\widetilde\eta\le1/(81\beta)$,
$$ \frac{3V_0}{\widetilde\eta\epsilon} \le\frac{3D^2}{\widetilde\eta\epsilon} +\frac{84NF}{81S\epsilon}. $$
The chosen reciprocal step is at most a constant times
$\beta+\sigma^2/(KS\epsilon)$. Thus this potential estimate yields the
sufficient round term $NF/(S\epsilon)$, and does not establish the retained
plan/source term $NF/S$ for arbitrary $\epsilon$ and objective scale.
[F1, F4, F8, step 1.3, given, algebra]

## Unresolved proof obligation

The general-convex round-complexity claim in the Statement retains the
plan/source term $NF/S$, but the displayed local potential argument only
gives $NF/(S\epsilon)$. An additional argument under the stated hypotheses,
or owner reconciliation of the plan/source claim, is required. The nonconvex
branch also remains unproved: the exact supplier
[[lem-scaffold-nonconvex-round-progress]] has not completed the potential
absorption from the current server-moment, control-lag and query-point drift
suppliers. This theorem is escalated and no conclusion for those unresolved
claims is asserted here.

## Remarks

The nonconvex statement is retained because it is part of the controlling plan, but its proof is not discharged here. The exact in-run supplier [[lem-scaffold-nonconvex-round-progress]] has not completed the potential absorption using the current local server-moment and query-point drift suppliers. The combined theorem remains escalated until that round-progress proof and its output summation are complete; see the batch-30 notes and item-level records.
