---
id: thm-ip-lm-local-discrepancy-stopping
kind: theorem
title: Local regularized LM discrepancy stopping has logarithmic iteration count
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-ip-regularized-levenberg-marquardt
  - def-ip-nonlinear-forward-map
  - def-hilbert-space
  - def-frechet-derivative-between-banach-spaces
  - def-operator-norm
  - def-ip-product-tangential-cone-condition
  - lem-ip-lm-product-condition-implies-range-approximation
  - lem-ip-lm-fejer-decrease-and-parameter-bound
  - lem-ip-lm-step-existence-and-residual-forcing
  - def-countable-choice
  - cor-inner-product-induces-a-norm
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-cauchy-reals-archimedean
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Assumption 11.10 and Theorem 11.11 with complete proof"
      url: "https://arxiv.org/pdf/2001.00617v2"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$
be open, and let $F:U\to Y$ be Fréchet differentiable everywhere with
$x\mapsto F'(x)$ continuous in operator norm. For $s>0$, write
$$B_s(x_0):=\{x\in X:\|x-x_0\|_X<s\}.$$
Suppose $B_{2r}(x_0)\subseteq U$ for some $r>0$, $x^\dagger\in B_r(x_0)$,
and $F(x^\dagger)=y$. Assume there are constants $M,c>0$ such that, for every
$x,\tilde x\in B_{2r}(x_0)$,
$$\|F'(x)\|\le M,$$
$$\|F(x)-F(\tilde x)-F'(x)(x-\tilde x)\|_Y\le c\|x-\tilde x\|_X\|F(x)-F(\tilde x)\|_Y.$$
Fix $\sigma\in(0,1)$ and $\tau>1/\sigma$. Put
$$e_0:=\|x_0-x^\dagger\|_X$$
and assume
$$e_0<\min\left\{r,\frac{\sigma\tau-1}{c(1+\tau)},\frac{1-\sigma}{2c}\right\}.$$
Set
$$\gamma:=\frac{\sigma\tau}{1+ce_0(1+\tau)};$$
the hypotheses give $\gamma>1$. For each exact iteration, use this $\gamma$ in
the range-approximation margin of the regularized LM procedure and select any
positive parameter satisfying its residual-forcing equality.
For every $\delta>0$ and $y^\delta\in Y$ satisfying
$\|y^\delta-y\|_Y\le\delta$, start at $x_0^\delta=x_0$ and, at each state
before stopping, let $h_n$ minimize
$$h\longmapsto\frac12\|F'(x_n^\delta)h+F(x_n^\delta)-y^\delta\|_Y^2+\frac{\alpha_n}{2}\|h\|_X^2$$
for a selected $\alpha_n>0$ satisfying
$$\|F'(x_n^\delta)h_n+F(x_n^\delta)-y^\delta\|_Y=\sigma\|F(x_n^\delta)-y^\delta\|_Y,$$
and set $x_{n+1}^\delta=x_n^\delta+h_n$. Let $N_\delta$ be the first
$n\in\mathbb N_0:=\{0,1,2,\ldots\}$ such that
$$\|F(x_n^\delta)-y^\delta\|_Y\le\tau\delta.$$
Then this exact iteration is well-defined up to a finite first discrepancy
index $N_\delta$. Set
$$q:=\frac{\sigma+ce_0}{1-ce_0},\qquad K:=1+\|F(x_0)-y\|_Y,\qquad \delta_0:=\min\left\{1,\frac K\tau\right\}.$$
Here $q\in(0,1)$ and $\log$ denotes the natural logarithm. For
$0<\delta\le\delta_0$,
$$N_\delta\le1+\frac{\log(K/(\tau\delta))}{-\log q}.$$
Consequently $N_\delta=O(1+|\log\delta|)$ as $\delta\downarrow0$, with
constants depending only on the fixed problem and displayed parameters. A
finite run with update budget at least $N_\delta$ and successful exact calls
returns this first crossing; a shorter budget may return
`budget-exhausted`. No convergence rate for $x_{N_\delta}^\delta$ is asserted.

## Statement references

[[alg-ip-regularized-levenberg-marquardt|Exact residual-forcing regularized LM iteration and finite statuses]]

[[def-ip-nonlinear-forward-map|Nonlinear forward map and exact-solution convention]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-frechet-derivative-between-banach-spaces|Fréchet derivative and derivative operator norm]]

[[def-operator-norm|Operator norm]]

[[def-ip-product-tangential-cone-condition|Product-type tangential cone condition]]

[[lem-ip-lm-product-condition-implies-range-approximation|Range approximation from the product condition]]

[[lem-ip-lm-fejer-decrease-and-parameter-bound|Fejér decrease and upper bound for the regularization parameter]]

[[def-countable-choice|Axiom of Countable Choice]]

[[cor-inner-product-induces-a-norm|Triangle inequality for the real Hilbert norm]]

[[def-natural-logarithm|Natural logarithm]]

[[thm-natural-logarithm-laws|Order and quotient laws for the logarithm]]

[[lem-cauchy-reals-archimedean|Natural numbers are unbounded in the real field]]

[Christian Clason, *Regularization of Inverse Problems*, Assumption 11.10 and Theorem 11.11 with complete proof](https://arxiv.org/pdf/2001.00617v2)

## Facts & Assumptions

**Given:** Countable Choice; real Hilbert spaces $X,Y$; an open domain $U$; a continuously Fréchet differentiable map $F:U\to Y$; $B_{2r}(x_0)\subseteq U$; an exact solution $x^\dagger\in B_r(x_0)$ with $F(x^\dagger)=y$; constants $M,c>0$; $\sigma\in(0,1)$; $\tau>1/\sigma$; the stated smallness bound on $e_0$; and positive noise $\delta$ with $\|y^\delta-y\|\le\delta$.

[A1] Countable Choice is the sole choice axiom assumed for Hilbert adjoints and the shifted normal equations ([[def-countable-choice]]).

[F1] On the local ball, the product remainder is bounded by $c\|x-\tilde x\|\|F(x)-F(\tilde x)\|$ ([[def-ip-product-tangential-cone-condition]]).

[F2] If $\|x-x^\dagger\|\le e_0$ and $\|F(x)-y^\delta\|>\tau\delta$, then the linearized residual at $x^\dagger$ is at most $[1+ce_0(1+\tau)]/\tau$ times the current residual; when $\gamma=\sigma\tau/[1+ce_0(1+\tau)]>1$, this is at most $\sigma/\gamma$ times the current residual ([[lem-ip-lm-product-condition-implies-range-approximation]]).

[F3] The algorithm checks discrepancy before updates, uses the exact regularized linearized minimizer and the residual-forcing equality, and returns the first crossing when exact calls and its finite cap permit ([[alg-ip-regularized-levenberg-marquardt]]).

[F4] Under the range-approximation condition, the exact step obeys
$$\|e_n\|^2-\|e_n+h_n\|^2\ge\|h_n\|^2+\frac{2(\gamma-1)\sigma^2}{\gamma\alpha_n}\|F(x_n)-y^\delta\|^2,$$
and if $\|F'(x_n)\|\le M$, then $\alpha_n\le\sigma M^2/(1-\sigma)$ ([[lem-ip-lm-fejer-decrease-and-parameter-bound]]).

[F5] The natural logarithm is strictly increasing, satisfies the quotient law, and is negative on $(0,1)$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[F6] For every real bound $b$, some natural number exceeds $b$ ([[lem-cauchy-reals-archimedean]]).

[F7] The real Hilbert norm satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

[F8] A Fréchet derivative is a bounded linear map, and its norm is the operator norm defined on bounded linear maps ([[def-frechet-derivative-between-banach-spaces]], [[def-operator-norm]]).

[F9] For a nonzero residual and a vector meeting the range-approximation margin, the regularized linearized least-squares problem has a unique minimizer and some positive parameter attains the residual-forcing equality ([[lem-ip-lm-step-existence-and-residual-forcing]]).

## Proof


1.1 Define $\gamma:=\sigma\tau/[1+ce_0(1+\tau)]$. The bound $e_0<(\sigma\tau-1)/(c(1+\tau))$ gives $1+ce_0(1+\tau)<\sigma\tau$, so $\gamma>1$. Since $e_0=\|x_0-x^\dagger\|_X\ge0$ and $c>0$, the other smallness bound gives $0\le ce_0<(1-\sigma)/2$. Hence $1-ce_0>0$; also $\sigma+ce_0>0$ because $\sigma>0$, and $2ce_0<1-\sigma$ gives $\sigma+ce_0<1-ce_0$. Thus $q=(\sigma+ce_0)/(1-ce_0)$ lies in $(0,1)$. [given, algebra]

1.2 For each pre-stop index, the given derivative bound and [F8] give $\|F'(x_n^\delta)\|\le M$. Thus [F4] and $\alpha_n\le\sigma M^2/(1-\sigma)$ give $e_n^2-e_{n+1}^2\ge D\,R_n^2,\qquad D:=\frac{2(\gamma-1)\sigma(1-\sigma)}{\gamma M^2}>0,$ where $R_n:=\|F(x_n^\delta)-y^\delta\|_Y$. [F4, F8, given, algebra]

2.1 We construct the exact path up to its first crossing by finite induction. Initially $x_0^\delta=x_0\in B_{2r}(x_0)$ and $e_0=\|x_0-x^\dagger\|$. Suppose $x_n^\delta\in B_{2r}(x_0)$ and $e_n:=\|x_n^\delta-x^\dagger\|\le e_0$. If its residual is at most $\tau\delta$, the path stops. Otherwise [F2] with $e=e_0$ gives the range-approximation hypothesis with the $\gamma$ of step 1.1. Since $R_n>\tau\delta>0$, [F9] supplies the positive forcing parameter and unique minimizer. Applying [F4] shows $e_{n+1}\le e_n$ and $\|h_n\|\le e_n$. Hence $e_{n+1}\le e_0$ and $\|x_{n+1}^\delta-x_0\|_X\le\|x_{n+1}^\delta-x^\dagger\|_X+e_0\le2e_0<2r,$ so the next state remains in the local ball and the induction continues. [A1, F2, F3, F4, F7, F9, given, induction]

3.1 If no crossing has occurred in the first $m$ updates, then $R_n>\tau\delta$ for $0\le n<m$. Summing step 1.2 telescopes and yields $m\tau^2\delta^2< D\sum_{n=0}^{m-1}R_n^2\le e_0^2.$ By [F6], choose a natural $m>e_0^2/(D\tau^2\delta^2)$. The displayed inequality is impossible for that $m$, so a crossing occurs at a finite index $N_\delta$. Summing step 1.2 through $N_\delta-1$ also gives $N_\delta\le e_0^2/(D\tau^2\delta^2)$. [F6, step 2.1, step 1.2, given, choose, algebra]

3.2 Fix $n<N_\delta$ and set $T_n:=F'(x_n^\delta)$, $h_n:=x_{n+1}^\delta-x_n^\delta$, $q_n:=y^\delta-F(x_n^\delta)-T_nh_n$, and $\Delta_n:=F(x_{n+1}^\delta)-F(x_n^\delta)-T_nh_n.$ Both iterates lie in $B_{2r}(x_0)$ by step 2.1. Applying [F1] to the ordered pair $(x_n^\delta,x_{n+1}^\delta)$ gives $\|\Delta_n\|_Y\le c\|h_n\|_X\|F(x_{n+1}^\delta)-F(x_n^\delta)\|_Y$. The forcing rule gives $\|q_n\|_Y=\sigma R_n$, while $F(x_{n+1}^\delta)-y^\delta=-q_n+\Delta_n.$ Therefore, with $R_{n+1}:=\|F(x_{n+1}^\delta)-y^\delta\|_Y$, $R_{n+1}\le\sigma R_n+c\|h_n\|_X(R_{n+1}+R_n).$ Using $\|h_n\|\le e_n\le e_0$ from [F4] and $1-ce_0>0$ from step 1.1 yields $R_{n+1}\le\frac{\sigma+ce_0}{1-ce_0}R_n=qR_n.$ [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Let $K:=1+\|F(x_0)-y\|_Y$ and $\delta_0:=\min\{1,K/\tau\}$. By [F7] and the data-noise bound, $R_0\le K$ for $0<\delta\le\delta_0$. If $N_\delta\ge2$, the first-crossing definition gives $\tau\delta<R_{N_\delta-1}$, while repeated application of step 3.2 gives $R_{N_\delta-1}\le q^{N_\delta-1}R_0\le q^{N_\delta-1}K$. Since $\log$ is strictly increasing, $\log(\tau\delta/K)<(N_\delta-1)\log q$; by [F5], $\log q<0$, so division reverses the inequality and gives $N_\delta\le1+\frac{\log(K/(\tau\delta))}{-\log q}.$ The same bound holds for $N_\delta=0$ or $1$, since $\delta\le K/\tau$ makes its right side at least $1$. Finally, for $\delta\le\delta_0\le1$, [F5] gives $\log\frac{K}{\tau\delta}\le\left|\log\frac K\tau\right|+|\log\delta|,$ so, with $C:=1+[1+|\log(K/\tau)|]/(-\log q)$, the displayed bound is at most $C(1+|\log\delta|)$, with $C$ independent of $y^\delta$ and $\delta$. By [F3], a finite run with cap at least $N_\delta$ and successful exact calls returns this crossing. The proof asserts no convergence rate for the stopped iterate. [F3, F5, F7, step 3.2, given, algebra] ∎
## Remarks

The source's logarithmic count uses the product-type remainder condition and a sufficiently small start. Positive noise is essential for finite discrepancy stopping; the B-page zero-noise counterexample verifies this boundary. This theorem proves an index bound only, not convergence of the stopped solution or an error rate.
