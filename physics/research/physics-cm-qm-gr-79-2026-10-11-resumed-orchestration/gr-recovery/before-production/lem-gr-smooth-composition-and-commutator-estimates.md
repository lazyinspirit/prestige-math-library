---
id: lem-gr-smooth-composition-and-commutator-estimates
kind: lemma
title: "Smooth composition, difference, coefficient product and commutator estimates on bounded H^s data"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, lem-gr-periodic-sobolev-embedding, lem-gr-periodic-sobolev-algebra, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
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
([[def-countable-choice]]). Let $s\ge5$, $k:=s-1\ge4$, let
$O\subseteq\mathbb R^m$ be open, let $I\subseteq\mathbb R$ be an interval, let
$F:I\times\mathbb T^3_{2\pi}\times O\to\mathbb R^{m'}$ and
$A:I\times\mathbb T^3_{2\pi}\times O\to M_{m'}(\mathbb R)$ be smooth, let
$K\subseteq O$ be compact and let $R\ge0$. Then there is
$C=C(F,A,s,m,m',K,R)$ such that for every $u:I\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$
with $u(t)(x)\in K$ and $\|u(t)\|_{H^s}\le R$ for all $t$, the following hold,
where compositions use the continuous representatives of
[[lem-gr-periodic-sobolev-embedding]]:

**(a)** for every integer $0\le r\le s$, $\|F(t,\cdot,u(t))\|_{H^r}\le C\,(1+\|u(t)\|_{H^s})$;

**(b)** if $C_1\subseteq O$ is compact and convex, $u,v$ take values in $C_1$
and $\|v(t)\|_{H^s}\le R$, then
$$\|F(t,\cdot,u(t))-F(t,\cdot,v(t))\|_{H^k}\le C\,\|u(t)-v(t)\|_{H^k};$$

**(c)** for every $1\le|\alpha|\le k$ and every $w\in H^{|\alpha|-1}$,
$$\bigl\|D^\alpha\bigl(A(t,\cdot,u(t))\,w\bigr)-A(t,\cdot,u(t))\,D^\alpha w\bigr\|_2\le C\,\bigl(1+\|w\|_{H^{|\alpha|-1}}\bigr);$$

**(d)** for every $0\le j\le k$ and every $w\in H^j$, $\|A(t,\cdot,u(t))\,w\|_{H^j}\le C\,\|w\|_{H^j}$.

## Facts & Assumptions
**Given:** Countable Choice, $s\ge5$, $k=s-1$, the smooth maps $F$ and $A$, the compact $K$ (and where stated the compact convex $C_1$), the bound $R$, and $u$ (and where stated $v$) with values in $K$ and $H^s$ norms at most $R$.

[L1] Embedding: for $|\gamma|\le s-2$ the continuous representative satisfies $\sup|D^\gamma u|\le C_s\|u\|_{H^s}$; for $|\gamma|\le s-1$ one has $\|D^\gamma u\|_2\le\|u\|_{H^s}$ ([[lem-gr-periodic-sobolev-embedding]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L2] Algebra: for $k\ge4$, $\|gh\|_{H^k}\le C_k\|g\|_{H^k}\|h\|_{H^k}$, and $\|\varphi h\|_{H^k}\le C_k\|\varphi\|_{C^k}\|h\|_{H^k}$ for classical $\varphi$ ([[lem-gr-periodic-sobolev-algebra]]).

[L3] Chain and product rules: for a smooth $G$ and a $C^{|\alpha|}$ map $u$, $D^\alpha(G(t,x,u(x)))$ is a finite sum of terms $\Phi(t,x,u(x))\prod_{i}D^{\beta_i}u(x)$ with multi-indices $\beta_i\ne0$, $\sum_i|\beta_i|=|\alpha|$ and coefficients $\Phi$ built from partial derivatives of $G$; the coefficients are bounded by a constant $M$ on $I\times\mathbb T^3\times K$ (they are continuous and $K$ is compact), and the assertion follows by induction on $|\alpha|$ from the multivariable chain rule and the product rule ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-gr-periodic-torus-and-sobolev-spaces]]). The same expansion applies to $D^\alpha(A(t,\cdot,u)w)$ with the extra Leibniz factor.

[L4] If $\sum_i|\beta_i|=|\alpha|\le r\le s$, then at most one index has $|\beta_i|\ge r-1$: two would give $2(r-1)>r$ for $r\ge3$; for $r\le2$ every $|\beta_i|\le2\le s-3$ because $s\ge5$. Every factor with $|\beta_i|\le s-2$ is controlled by [L1] ($L^\infty$ bound $C_sR$), and a factor with $|\beta_i|\le s$ by its $L^2$ norm; on the probability space the $L^2$ norm of a bounded factor is at most its sup norm, and products of bounded factors have $L^2$ bound $C_s(1+R)^{r}$, which is at most $C_{s,R}(1+R)$ ([[def-gr-periodic-torus-and-sobolev-spaces]]).



## Proof

**Proof technique:** direct.

1.1 (Composition bound (a).) Fix $|\alpha|\le r\le s$ and expand $D^\alpha(F(t,\cdot,u))$ by [L3]. In each term of the expansion, by [L4] at most one factor has order $\ge r-1$; every factor of order $\le s-2$ has $L^\infty$ norm at most $C_sR$ by [L1] and the exceptional factor, of order at most $r\le s$, has $L^2$ norm at most $\|u\|_{H^s}$ by [L1]; coefficients are bounded by $M$. Hence each term has $L^2$ norm at most $M C_s^{r}(1+R)^{r}\|u\|_{H^s}^{\varepsilon}$ with $\varepsilon\in\{0,1\}$, which is at most $C_{s,R}(1+\|u\|_{H^s})$; the finitely many terms of the expansion for all $|\alpha|\le r$ give (a) after enlarging the constant. [L1, L3, L4, algebra]

2.1 (Difference bound (b).) For $u(t),v(t)$ with values in the convex compact $C_1$ put $u_\vartheta:=v(t)+\vartheta(u(t)-v(t))$ for $\vartheta\in[0,1]$; its values lie in $C_1\subseteq O$ and $\|u_\vartheta\|_{H^s}\le(1-\vartheta)\|v(t)\|_{H^s}+\vartheta\|u(t)\|_{H^s}\le R$. The mean-value formula $F(u)-F(v)=\int_0^1DF(t,\cdot,u_\vartheta)(u-v)\,d\vartheta$ holds pointwise and hence in $L^2$; by step 1.1 applied to the smooth coefficient $DF$, $\|DF(t,\cdot,u_\vartheta)\|_{H^{k}}\le C_R$, and by [L2] applied with the finite-measure $L^2$ bound, $\|DF(u_\vartheta)(u-v)\|_{H^{k}}\le C_R\|u-v\|_{H^{k}}$; integrating in $\vartheta$ gives (b). [step 1.1, L1, L2, algebra]

2.2 (Commutator bound (c).) By the Leibniz-rule part of [L3], $[D^\alpha,A(u)]w=\sum_{0<\gamma\le\alpha}c_\gamma\,D^\gamma(A(t,\cdot,u))\,D^{\alpha-\gamma}w$. For each $\gamma\ne0$: the expansion of $D^\gamma(A(u))$ has terms with total order $|\gamma|\le k\le s$, so by [L4] each term has at most one factor of order $\ge s-1$ and the remaining factors have $L^\infty$ bounds $C_sR$; hence $\|D^\gamma(A(u))\|_2\le C_R$. Two cases exhaust the possibilities: if $|\gamma|\le s-2$, then $\sup|D^\gamma(A(t,\cdot,u))|\le C_R$ by [L1] (applied to the composition, whose $H^s$ norm is bounded by step 1.1 with $r=s$), while $\|D^{\alpha-\gamma}w\|_2\le\|w\|_{H^{|\alpha|-1}}$ because $|\alpha-\gamma|\le|\alpha|-1$; if $|\gamma|\ge s-1$, then $|\gamma|\le k=s-1$ forces $|\gamma|=s-1$ and $|\alpha-\gamma|\le k-(s-1)=0$, so $\|D^\gamma(A(u))\|_2\le C_R$ as just computed and $\|w\|_\infty\le C\|w\|_{H^{k}}$ with $k=s-1=j$ in the notation of the previous paragraph, hence at most $C\|w\|_{H^{|\alpha|-1}}$ because $|\alpha|=s-1$ in this case. Summing the finitely many terms gives (c). [step 1.1, L1, L3, L4, algebra]

3.1 (Coefficient product (d).) Fix $|\gamma|\le j\le k$ and expand $D^\gamma(A(u)w)=\sum_{\delta\le\gamma}\binom{\gamma}{\delta}D^\delta(A(u))\,D^{\gamma-\delta}w$ by [L3]. If $|\delta|\ge s-1$, then $|\delta|=s-1=k=j$ and $\delta=\gamma$, $|\gamma-\delta|=0$, so $\|D^\delta(A(u))\|_2\le C_R$ by step 1.1 with $r=k$ and $\|w\|_\infty\le\|w\|_{H^{j}}$ by [L1] with $(s,m)=(j,0)$; if $|\delta|\le s-2$ then $\sup|D^\delta(A(u))|\le C_R$ by [L1] applied to the $H^s$ class $A(u)$ (whose $H^s$ norm is bounded by step 1.1 with $r=s$) and $\|D^{\gamma-\delta}w\|_2\le\|w\|_{H^j}$. Summing the finitely many terms gives (d). [step 1.1, L1, L3, L4, algebra] ∎



## Remarks

- **Role.** These four estimates are exactly the nonlinear bounds consumed by the energy and time-derivative estimates of [[lem-gr-galerkin-energy-inequality]] and [[lem-gr-galerkin-time-derivative-bound]]: (a) bounds the coefficients, (c) the commutators, and (b), (d) the zeroth-order difference systems used for uniqueness and continuous dependence.
- **Constants.** The constant depends on $R$ through the sup-norm bounds; no uniformity in $R$ is asserted.
