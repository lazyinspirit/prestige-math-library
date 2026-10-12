---
id: lem-gr-galerkin-compactness
kind: lemma
title: "Compactness of H^r-bounded families in H^{r-1} and locally uniform H^{s-1} subsequences of Galerkin solutions"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, lem-gr-periodic-sobolev-completeness, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-galerkin-time-derivative-bound, lem-gr-rational-diagonal-extraction, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  lem-gr-periodic-sobolev-completeness: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  lem-gr-rational-diagonal-extraction: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 3 (Sobolev Spaces), Sections 3.1 (weak derivatives), 3.4 (properties of weak derivatives), 3.5 (Sobolev spaces), 3.7-3.8 (Sobolev embedding) and 3.10 (compactness results)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]).

**(a)** For every integer $r\ge1$, every $R\ge0$ and every sequence $(v_j)$
in $H^r(\mathbb T^3_{2\pi};\mathbb R^m)$ with $\|v_j\|_{H^r}\le R$ there is a
subsequence converging in $H^{r-1}(\mathbb T^3_{2\pi};\mathbb R^m)$.

**(b)** Let $s\ge5$, $R\ge0$, $T>0$, let $K\subseteq O$ be compact, and let
$u_N:(-T,T)\to X_N$ ($N=0,1,2,\dots$) be a family of Galerkin solutions with
$u_N(t)$ taking values in $K$ and $\|u_N(t)\|_{H^s}\le R$ for all $t$. Then the
family is equicontinuous in the $H^{s-1}$ metric: there is
$C_0=C_0(A^\mu,B,K,R,s)$ with
$$\|u_N(t)-u_N(t')\|_{H^{s-1}}\le C_0\,|t-t'|\qquad(t,t'\in(-T,T),\ N\ge0).$$

**(c)** Under the hypotheses of (b) there are a strictly increasing sequence
$N_j\to\infty$ and $u\in C^0((-T,T);H^{s-1}(\mathbb T^3_{2\pi};\mathbb R^m))$
with $u_{N_j}\to u$ uniformly on every compact subinterval of $(-T,T)$ in the
$H^{s-1}$ norm.

## Facts & Assumptions
**Given:** Countable Choice, and in (a) the integer $r\ge1$ and the bound $R$, in (b), (c) the data $s\ge5$, $R\ge0$, $T>0$, the compact $K$ and the Galerkin family.

[L1] Norm equivalence and the symbol bounds: for every integer $r\ge1$ and
$v\in H^r$, $\|v\|_{H^r}^2=\sum_kq^r_k|\widehat v(k)|^2$ with
$2^{-(r+1)}(1+|k|^2)^r\le q^r_k\le(r+1)^3(1+|k|^2)^r$; in particular
$\|(I-P_M)v\|_{H^{r-1}}\le C_r(1+M^2)^{-1/2}\|v\|_{H^r}$ and
$\|v\|_{H^{r-1}}\le\|v\|_{H^r}$ ([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], [[lem-gr-galerkin-projection-properties]] clause (e), [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L2] Projections: $P_M$ is linear and self-adjoint, commutes with derivatives
and is the identity on $X_M$; $X_M$ is finite dimensional, so its closed
bounded subsets are compact ([[lem-gr-galerkin-projection-properties]],
[[def-gr-galerkin-fourier-projection]]).

[L3] Time derivatives: $\|\partial_tu_N(t)\|_{H^{s-1}}\le C_R(1+\|u_N(t)\|_{H^s})\le C_R(1+R)$ under the hypothesis of (b) ([[lem-gr-galerkin-time-derivative-bound]]).

[L4] The fundamental theorem of calculus for continuous normed-space-valued
curves: if $v:J\to E$ is $C^1$ into a normed space, then
$v(t)-v(t')=\int_{t'}^tv'(s)\,ds$ and
$\|v(t)-v(t')\|_E\le\bigl|\int_{t'}^t\|v'(s)\|_E\,ds\bigr|$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[L5] Completeness of the periodic Sobolev spaces: for every integer $r\ge1$
the space $H^{r-1}(\mathbb T^3_{2\pi};\mathbb R^m)$ with its norm is complete,
so every Cauchy sequence in it converges ([[lem-gr-periodic-sobolev-completeness]]).

[L6] Countable choice selects one element from each of countably many nonempty
sets ([[def-countable-choice]]).

[L7] Locally uniform extraction ([[lem-gr-rational-diagonal-extraction]]): if
$X_0$ is a complete normed space, $X_1\subseteq X_0$ is a linear subspace with
a norm $\|\cdot\|_1$ such that $\|x\|_0\le\kappa\|x\|_1$ on $X_1$ and every
$\|\cdot\|_1$-bounded sequence in $X_1$ has an $X_0$-convergent subsequence,
and if $f_j:(-T,T)\to X_1$ satisfy $\|f_j(t)\|_1\le R$ and
$\|f_j(t)-f_j(t')\|_0\le C|t-t'|$, then a strictly increasing subsequence
$(f_{j_n})$ converges uniformly on every compact subinterval of $(-T,T)$ to a
continuous limit, which is itself Lipschitz with constant $C$.

## Proof

**Proof technique:** direct.

1.1 (Compact embedding (a).) Let $(v_j)$ be bounded by $R$ in $H^{r}$. For fixed $M$, the projections $P_Mv_j$ lie in the bounded subset $\{w\in X_M:\|w\|_{H^{r}}\le R\}$ of the finite-dimensional space $X_M$, hence are relatively compact in $X_M$; recursively extract, for each $M$, a subsequence of the previous one whose $P_M$-projections converge in $X_M$ (countably many selections, permitted by [L6]). The diagonal subsequence $(w_j)$ satisfies: for $\varepsilon>0$ choose $M$ with $2RC_r(1+M^2)^{-1/2}<\varepsilon/2$ [L1], then $j,l$ large so that $\|P_M(w_j-w_l)\|_{H^{r-1}}<\varepsilon/2$; then $\|w_j-w_l\|_{H^{r-1}}\le\|P_M(w_j-w_l)\|_{H^{r-1}}+\|(I-P_M)(w_j-w_l)\|_{H^{r-1}}<\varepsilon$, because $I-P_M$ is bounded with norm $C_r(1+M^2)^{-1/2}$ from $H^{r}$ to $H^{r-1}$ by [L1]. Hence the diagonal subsequence is Cauchy in $H^{r-1}$ and converges there by [L5]. This is (a). [L1, L2, L5, L6, choose, algebra]

1.2 (Equicontinuity (b).) For $t,t'\in(-T,T)$ the curve $s\mapsto u_N(s)$ is $C^1$ into the normed space $H^{s-1}$, so by [L4] $\|u_N(t)-u_N(t')\|_{H^{s-1}}\le\bigl|\int_{t'}^t\|\partial_tu_N(s)\|_{H^{s-1}}ds\bigr|\le C_R(1+R)|t-t'|$ by [L3]. This proves (b) with $C_0=C_R(1+R)$, a constant depending only on $A^\mu,B,K,R,s$. [L3, L4, algebra]

2.1 (Locally uniform subsequence (c).) Apply [L7] with $X_0:=H^{s-1}(\mathbb T^3_{2\pi};\mathbb R^m)$ and $X_1:=H^s(\mathbb T^3_{2\pi};\mathbb R^m)$: $X_0$ is complete by [L5], the inclusion bound $\|x\|_{X_0}\le\|x\|_{X_1}$ holds by [L1], property (ii) of [L7] is clause (a) with $r=s$ (legitimate since $s\ge5\ge1$), and the family $u_N$ satisfies the two bounds of [L7] by the hypothesis and step 1.2. The extraction lemma therefore yields a strictly increasing sequence $N_j\to\infty$ and a continuous $u:(-T,T)\to H^{s-1}$ with $u_{N_j}\to u$ uniformly on every compact subinterval of $(-T,T)$. This is (c). [step 1.1, step 1.2, L1, L5, L7] ∎

## Remarks

- **Role.** This is the compactness input to [[lem-gr-galerkin-limit-is-classical-solution]]: clause (a) is used there at orders $s$ and $s-1$, and clauses (b), (c) provide the locally uniform $H^{s-1}$ convergence of the approximate solutions.
- **Choice.** The only selection is countable: the diagonal extraction in step 1.1, the countable family of subsequences inside [[lem-gr-rational-diagonal-extraction]], and the extraction there over the rationals. No Ascoli theorem and no uncountable family of time points is used; completeness of $H^{r-1}$ is supplied by [[lem-gr-periodic-sobolev-completeness]].
