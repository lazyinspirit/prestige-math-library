---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-minimum-intensity-tau-leap-level-variance.json
  precheck: pass
id: thm-minimum-intensity-tau-leap-level-variance
kind: theorem
title: "Order-one correction variance for coupled Poisson tau-leap levels"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-reaction-network-propensity-system-and-generator
  - alg-explicit-poisson-tau-leaping
  - lem-poisson-tau-leap-moment-and-covariance-identities
  - lem-poisson-count-law-normalization-and-moments
  - lem-shared-minimum-poisson-count-coupling
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David F. Anderson and Desmond J. Higham, Multilevel Monte Carlo for continuous time Markov chains, with applications in biochemical kinetics"
      url: "https://strathprints.strath.ac.uk/36279/1/8509181.pdf"
      locator: "§§4 and 6, tau-leap and minimum-intensity pair coupling, PDF pp. 8 and 11–13 (journal pp. 153–155, 156–158)."
    - title: "David F. Anderson, Desmond J. Higham, and Yu Sun, Complexity of multilevel Monte Carlo tau-leaping"
      url: "https://strathprints.strath.ac.uk/51740/1/Anderson_etal_SIAM_2014_Complexity_of_multilevel_monte_carlo_tau_leaping.pdf"
      locator: "§2 coupled tau-leap construction and §3.1, Theorem 1 and Corollary 1, PDF pp. 3–9 (journal pp. 3108–3114)."
---

## Statement

Assume the finite-state reaction system of
[[def-reaction-network-propensity-system-and-generator]] has propensities
bounded on $E$ and extended by zero to states outside $E$. Let
$T>0$, $h_\ell=T2^{-\ell}$ for $\ell\ge0$, and let both levels start at the
same fixed state $x_0\in E$. For each $\ell\ge1$, couple a fine step
$h=h_\ell$ to a coarse step $2h=h_{\ell-1}$ as follows. On each of the two half intervals, with fine
state $x$ and coarse state $z$, use for channel $j$ a shared
$\operatorname{Pois}(h\min(a_j(x),a_j(z)))$ count and independent residual
counts of means $h(a_j(x)-a_j(z))^+$ and $h(a_j(z)-a_j(x))^+$ for the fine
and coarse paths, as in
[[lem-shared-minimum-poisson-count-coupling]]. Use independent copies across
channels and fresh copies on the two half intervals. Update the fine state
after each half interval. Accumulate the two coarse count vectors into one
coarse leap, evaluating both at the coarse state at the start of the full
interval. Then, for every bounded $g:\mathbb Z^d\to\mathbb R$,
$$\operatorname{Var}\!\left(g(Y_{h_\ell}(T))-g(Y_{h_{\ell-1}}(T))\right) \le C h_\ell,$$
where $C$ depends on $T$, the finite network, and $\|g\|_\infty$, but not
on $\ell$. This is a variance bound for the stated coupled Poisson leap;
independent levels are not covered.

## Facts & Assumptions

**Given:** The finite reaction network, common initial state, bounded propensities, the Poisson tau-leap rule, and the half-step coupling just specified.

[F1] [[def-reaction-network-propensity-system-and-generator]]: the states and reaction increments are integer vectors, there are finitely many channels, and a positive-rate firing has destination in $E$.

[F2] [[lem-poisson-tau-leap-moment-and-covariance-identities]]: for a
one-step increment $R=\sum_j\nu_jK_j$ at state $x$,
$$\mathbb E[R\mid x]=h\sum_j a_j(x)\nu_j,\qquad \mathbb E[\|R\|^2\mid x]=h\sum_j a_j(x)\|\nu_j\|^2+ h^2\left\|\sum_j a_j(x)\nu_j\right\|^2.$$

[F3] [[alg-explicit-poisson-tau-leaping]]: each marginal leap uses conditionally independent channel counts with means $h a_j(x)$ at its frozen state and freezes after an invalid state.

[F4] [[lem-poisson-count-law-normalization-and-moments]]: a $\operatorname{Pois}(\theta)$ count has mean and variance $\theta$.

[F5] [[lem-shared-minimum-poisson-count-coupling]]: per channel, the coupled counts have the prescribed Poisson marginals, their difference has mean $h(a_j(x)-a_j(z))$, and its variance is $h|a_j(x)-a_j(z)|$.

[A1] Count constructions are independent across channels conditional on their starting states, and the fresh second-half random inputs are independent of the complete first-half history.

## Proof

**Given:** The common initial state $x_0$ and facts [F1]–[F5], with $G=\|g\|_\infty$.

For a level with $h>1$, the variance bound follows directly from $\operatorname{Var}(\cdot)\le4G^2\le4G^2h$. It remains to prove the recurrence below for $0<h\le1$.

1.1 For lattice states $x,z$, write $e=x-z$ and $\delta_j=a_j(x)-a_j(z)$. Bounded rates and the integer lattice's minimum nonzero distance one imply $|\delta_j|\le L\|e\|$ for a constant $L$; this also holds when one state is outside $E$, where the extended rate is zero. In one half interval, shared counts cancel from the increment difference $\eta$. The independent residual Poisson counts and [F5] give $$m:=\mathbb E[\eta\mid x,z]=h\sum_j\nu_j\delta_j,\qquad \mathbb E[\|\eta-m\|^2\mid x,z]=h\sum_j|\delta_j|\|\nu_j\|^2.$$ Thus $\|m\|\le Ch\|e\|$ and the centered second moment is at most $Ch\|e\|$. If $e=0$, then $\eta=0$. Otherwise $\|e\|\ge1$, so $h\|e\|\le h\|e\|^2$. For $h\le1$ this proves $$\mathbb E[\|\eta\|^2\mid x,z]\le Ch\|e\|^2.$$ [F1, F5, A1, given, algebra]

1.2 If $x\notin E$, the invalid-state convention freezes the fine path, so its increment $R$ is zero and the estimates below are immediate. Suppose $x\in E$, and let $R$ be its fine-path increment on the first half interval. By [F3], [F4], and the triangle inequality, $$\mathbb E\|R\|\le\sum_j\|\nu_j\|\,h a_j(x)\le Ch.$$ By [F2] and bounded propensities, $\mathbb E\|R\|^2\le Ch$ for $h\le1$. If $x'=x+R$, then $$\mathbb E\|x'-z\|\le\|e\|+Ch,\qquad \mathbb E\|x'-z\|^2\le C(\|e\|^2+h).$$ For the second inequality, expand $\|e+R\|^2$ and use $\|\mathbb ER\|\le Ch$ and $\mathbb E\|R\|^2\le Ch$; the cross term is bounded by $Ch\|e\|\le Ch\|e\|^2$ when $e\ne0$, and is zero when $e=0$. [F2, F3, F4, algebra]

2.1 Write the two half-interval differences as $\eta_i=m_i+\xi_i$, where $m_i$ is the conditional mean and $\xi_i$ is centered given the starting states of that half interval. Step 1.1 gives $$\|m_1\|\le Ch\|e\|,\qquad \mathbb E\|\xi_1\|^2\le Ch\|e\|^2.$$ The second half starts at $x'$ and $z$, so $\|m_2\|\le Ch\|x'-z\|$. Steps 1.1 and 1.2 therefore give $$\mathbb E\|m_2\|^2\le Ch^2(\|e\|^2+h),\qquad \mathbb E\|\xi_2\|^2\le Ch(\|e\|+h)\le Ch\|e\|^2+Ch^2.$$ For the latter inequality, use $\mathbb E\|x'-z\|\le\|e\|+Ch$ and $\|e\|\le\|e\|^2$ when $e\ne0$. Let $\mathcal H_1$ be the complete first-half history. The fresh second-half copies are independent of that history, so $\mathbb E[\xi_2\mid\mathcal H_1]=0$ and $\mathbb E[\xi_1\cdot\xi_2]=0$. [F3, F4, A1, step 1.1, step 1.2, algebra]

3.1 Fix the starting pair $(x,z)$ during this expansion; the estimates are uniform in the pair and depend on it only through $e=x-z$. The endpoint error is $e'=e+m_1+\xi_1+m_2+\xi_2$. First, $$\mathbb E\|e+\eta_1\|^2 =\|e+m_1\|^2+\mathbb E\|\xi_1\|^2 \le(1+Ch)\|e\|^2.$$ The vector $e+m_1+\xi_1+m_2$ is $\mathcal H_1$-measurable, so $\mathbb E[\xi_2\mid\mathcal H_1]=0$ makes its expected inner product with $\xi_2$ zero. The remaining cross terms satisfy $$2|\mathbb E(\xi_1\cdot m_2)| \le2(\mathbb E\|\xi_1\|^2)^{1/2}(\mathbb E\|m_2\|^2)^{1/2} \le Ch^{3/2}\|e\|\sqrt{\|e\|^2+h}\le Ch\|e\|^2,$$ with value zero if $e=0$, and $$2|\mathbb E((e+m_1)\cdot m_2)| \le h\|e+m_1\|^2+h^{-1}\mathbb E\|m_2\|^2 \le Ch\|e\|^2+Ch^2.$$ The additional terms satisfy $\mathbb E\|m_2\|^2\le Ch\|e\|^2+Ch^2$ and $\mathbb E\|\xi_2\|^2\le Ch\|e\|^2+Ch^2$ by step 2.1. Combining these expansion terms proves the recurrence conditional on $(x,z)$; averaging over starting pairs with difference $e$ gives $$\mathbb E[\|e'\|^2\mid e]\le(1+Ch)\|e\|^2+Ch^2.$$ [step 2.1, algebra]

4.1 Let $u_n=\mathbb E\|e_n\|^2$ at coarse endpoints. Since $u_0=0$, step 3.1 gives $u_{n+1}\le(1+Ch)u_n+Ch^2$. There are $N=T/(2h)$ coarse intervals, so iteration yields $$u_N\le Ch^2\sum_{r=0}^{N-1}(1+Ch)^r \le Ch^2N e^{ChN}\le C_T h.$$ [step 3.1, algebra]

5.1 If $e_N\ne0$, its integer coordinates imply $\|e_N\|^2\ge1$, hence $\mathbb P(e_N\ne0)\le\mathbb E\|e_N\|^2\le C_T h$. The payoff difference is zero when $e_N=0$ and is at most $2G$ in absolute value otherwise. Its variance is at most its second moment, hence at most $4G^2\mathbb P(e_N\ne0)\le Ch$. For $h>1$ the same conclusion follows directly from $\operatorname{Var}\le4G^2\le4G^2h$. [step 4.1, algebra] ∎

## Notes

The T16 [[alg-minimum-intensity-coupling-for-reaction-networks]] is an exact event-time coupling built by dominating Poisson thinning. The present theorem uses the separately proved frozen-rate count coupling [[lem-shared-minimum-poisson-count-coupling]] on each tau-leap half-step; it does not identify the two path procedures.

## Remarks

The diagram shows one coarse interval $[t,t+2h]$. Write $x_1=x$,
$x_2=x'$, and $x_3=x''$ for the fine states, and let $z$ be the coarse
state frozen throughout count generation. For half $i\in\{1,2\}$ and
channel $j$, draw conditionally independent shared and residual counts
$$C_{ij}\sim\operatorname{Pois}(h\min(a_j(x_i),a_j(z))),\qquad F_{ij}\sim\operatorname{Pois}(h(a_j(x_i)-a_j(z))^+),\qquad B_{ij}\sim\operatorname{Pois}(h(a_j(z)-a_j(x_i))^+).$$
Set $K^f_{ij}=C_{ij}+F_{ij}$ and $K^c_{ij}=C_{ij}+B_{ij}$, and define
$R_i=\sum_j\nu_jK^f_{ij}$ and $S_i=\sum_j\nu_jK^c_{ij}$.
The second half uses fresh random inputs conditional on the first-half
history, with rates evaluated at $(x',z)$.

```tikz
\begin{tikzpicture}[>=stealth, scale=1.4, transform shape, every node/.style={font=\small}]
\node at (0,1) {$t$};
\node at (3.6,1) {$t+h$};
\node at (7.2,1) {$t+2h$};
\node (f0) at (0,0) {$x$};
\node (f1) at (3.6,0) {$x'=x+R_1$};
\node (f2) at (7.2,0) {$x''=x'+R_2$};
\draw[->] (f0) -- node[above] {$R_1$} (f1);
\draw[->] (f1) -- node[above] {$R_2$} (f2);
\node (c0) at (0,-1.6) {$z$};
\node (c1) at (3.6,-1.6) {$z$};
\node (c2) at (7.2,-1.6) {$z'=z+S_1+S_2$};
\draw[->,dashed] (c0) -- node[above] {hold $z$; store $S_1$} (c1);
\draw[->] (c1) -- node[above] {apply $S_1+S_2$} (c2);
\node[align=center] at (1.8,-2.8) {$K^f_{1j}=C_{1j}+F_{1j}$\\ $K^c_{1j}=C_{1j}+B_{1j}$};
\node[align=center] at (5.4,-2.8) {$K^f_{2j}=C_{2j}+F_{2j}$\\ $K^c_{2j}=C_{2j}+B_{2j}$};
\end{tikzpicture}
```

The dashed segment records storage rather than a coarse state update.
Each shared count $C_{ij}$ contributes to both paths; only the residual
counts differ. Thus $x''-z'=(x-z)+(R_1-S_1)+(R_2-S_2)$, the endpoint
error decomposed in proof step 3.1. The proof above is independent of the figure.
