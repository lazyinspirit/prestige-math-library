---
id: lem-gr-smooth-composition-and-commutator-estimates
kind: lemma
title: "Smooth composition, difference, coefficient product and commutator estimates on bounded H^s data"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, lem-gr-periodic-sobolev-embedding, lem-gr-periodic-sobolev-algebra, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, lem-gr-galerkin-projection-properties]
dependency_roles:
  lem-gr-galerkin-projection-properties: mathematical-premise
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

Assume Countable Choice ([[def-countable-choice]]). Let $s\ge5$, let $O\subseteq\mathbb R^m$ be open, let $I$ be an open time interval, let $I_0\subseteq I$ be a compact interval, and let $F:I\times\mathbb T^3\times O\to\mathbb R^{m'}$ and $A:I\times\mathbb T^3\times O\to M_{m'}(\mathbb R)$ be smooth. Fix compact $K\subseteq O$ and $R\ge0$. Constants below depend on these data and are uniform in $t\in I_0$. For $u,v\in H^s$ with values in $K$ and norms at most $R$:

**(a)** $\|F(t,\cdot,u)\|_{H^j}\le C(1+\|u\|_{H^s})$ for $0\le j\le s$.

**(b)** $\|F(t,\cdot,u)-F(t,\cdot,v)\|_{H^{s-1}}\le C\|u-v\|_{H^{s-1}}$. The same bound holds at order zero.

**(c)** For $1\le j=|\alpha|\le s-1$, $\|[D^\alpha,A(t,\cdot,u)]w\|_2\le C\|w\|_{H^{j-1}}$. For $|\alpha|=s$, $\|[D^\alpha,A(t,\cdot,u)]w\|_2\le C\|w\|_{H^{s-1}}$. Commutators are interpreted distributionally by their Leibniz expansion, even if the two individual order-$j$ terms are not separately in $L^2$.

**(d)** For $0\le j\le s-1$, $\|A(t,\cdot,u)w\|_{H^j}\le C\|w\|_{H^j}$.

**(e)** Let $n\ge6$, $\rho\ge0$ and $z\in H^n$ with values in $K$ and $\|z\|_{H^{n-1}}\le\rho$. Then $\|F(t,\cdot,z)\|_{H^n}\le C_\rho(1+\|z\|_{H^n})$. Moreover for $w\in H^{n-1}$ and $|\alpha|\le n$,
$$\|[D^\alpha,A(t,\cdot,z)]w\|_2\le C_\rho\bigl(\|w\|_{H^{n-1}}+(1+\|z\|_{H^n})\|w\|_{H^{n-2}}\bigr).$$
The same estimates apply to any smooth coefficient obtained from $F,A$ by differentiation or by a smooth matrix inverse where that inverse exists on a neighborhood of $I_0\times\mathbb T^3\times K$.

## Facts & Assumptions

**Given:** Countable Choice, the smooth coefficient maps, compact time and value sets, and the stated norm bounds.

[L1] $H^q$ controls $C^{q-2}$ for integers $q\ge2$ ([[lem-gr-periodic-sobolev-embedding]]).

[L2] $H^k$ is an algebra for $k\ge4$ ([[lem-gr-periodic-sobolev-algebra]]).

[L3] Fourier truncation gives smooth density in every $H^q$ ([[lem-gr-galerkin-projection-properties]]); chain and Leibniz rules hold for smooth maps ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 (Localize coefficients without convexity.) Cover $K$ by finitely many balls whose doubled closed balls lie in $O$. In each doubled ball choose a smooth bump equal to $1$ on the inner ball and zero outside the doubled ball; such a radial bump is constructed from $\eta(r)=e^{-1/r}$ for $r>0$ and $0$ otherwise, whose derivatives at zero vanish since exponential decay dominates every polynomial. If these bumps are $\phi_l$, put $\chi=1-\prod_l(1-\phi_l)$. Then $\chi=1$ on a neighborhood of $K$ and has compact support in $O$. Extend $\chi F$ and $\chi A$ by zero in the value variable outside $O$. They are smooth and equal to the original coefficients near $K$. On $I_0$ times the torus times the compact convex hull of any fixed compact neighborhood of $K$, all their required derivatives are bounded. This permits line-segment arguments even when $O$ is nonconvex. [given, construct]

2.1 (Composition (a).) For a smooth $u$, the order-$j$ chain expansion consists of bounded coefficient derivatives times products $\prod_l D^{\beta_l}u$ with total order at most $j\le s$. At most one factor has order at least $s-1$, since $2(s-1)>s$; all others have order at most $s-2$ and are bounded in $L^\infty$ by [L1]. The possible exceptional factor has $L^2$ norm bounded by $\|u\|_{H^s}$; if there is no exceptional factor, use finite volume. Thus each term is at most $C_R(1+\|u\|_{H^s})$, proving the asserted bound. For a general Sobolev field, Fourier truncations have bounded $H^s$ norms and converge uniformly to $u$, with values eventually in a fixed compact neighborhood of $K$. Apply the smooth bound to the extension of step 1.1. Fourier coefficients of the compositions converge by uniform convergence; finite weighted Fourier sums give the same $H^s$ bound for the limit. This also identifies the weak derivative expansion by testing the smooth approximations. [step 1.1, L1, L3, algebra]

3.1 (Differences (b).) With the extended coefficient and $u_\theta=v+\theta(u-v)$, the pointwise identity $F(u)-F(v)=\int_0^1 F_u(u_\theta)(u-v)\,d\theta$ holds. The maps $u_\theta$ have $H^s$ norm at most $R$ and take values in the compact convex hull of $K$. Step 2.1 applied to the extended derivative bounds $F_u(u_\theta)$ in $H^{s-1}$ uniformly. The algebra estimate [L2] gives the $H^{s-1}$ difference bound after integration. At order zero bounded $F_u$ gives the pointwise Lipschitz estimate and hence its $L^2$ version. [step 1.1, step 2.1, L2, algebra]

3.2 (Homogeneous commutators (c).) Expand $[D^\alpha,A(u)]w=\sum_{0<\gamma\le\alpha}\binom\alpha\gamma D^\gamma(A(u))D^{\alpha-\gamma}w$. For $|\gamma|\le s-2$, step 2.1 and [L1] bound the first factor in $L^\infty$; the second has at most $j-1$ derivatives. For $j\le s-1$ the only remaining case is $j=|\gamma|=s-1$, where the first factor is $L^2$ bounded and $w$ is $L^\infty$ bounded by its $H^{s-2}$ norm. For $j=s$ and $|\gamma|\ge s-1$, at most one derivative falls on $w$, which is $L^\infty$ bounded by its $H^{s-1}$ norm. These cases give precisely (c), without an additive constant. Density gives the distributional identity and bounds for general $w$. [step 2.1, L1, L3, algebra]

3.3 (Multipliers (d).) In the Leibniz expansion at order $j\le s-1$, coefficient derivatives at most $s-2$ are $L^\infty$ bounded. The only remaining case is a coefficient derivative of order $s-1$, with no derivative on $w$ and $j=s-1$; its $L^2$ norm is bounded and $w$ has the required $L^\infty$ bound. Summation gives (d). Smooth approximation proves the claimed product membership for general Sobolev $w$. [step 2.1, L1, L3, algebra]

4.1 (Lower-norm-controlled high estimates (e).) With $\|z\|_{H^{n-1}}\le\rho$, derivatives of $z$ of order at most $n-3$ are $L^\infty$ bounded. In the order-$n$ chain expansion at most one factor has order at least $n-2$, since $2(n-2)>n$. Its $L^2$ norm is bounded by $\rho$ unless its order is $n$, in which case it is bounded by $\|z\|_{H^n}$. This proves the high composition bound. In a commutator with $|\alpha|\le n$, a coefficient derivative of order at most $n-3$ is bounded in $L^\infty$, and the remaining derivative of $w$ has order at most $n-1$. A coefficient derivative of order at least $n-2$ has $L^2$ bound $C_\rho(1+\|z\|_{H^n})$, and at most two derivatives land on $w$; their $L^\infty$ bound follows from $w\in H^{n-2}$, since $n-4\ge2$. Sum the finite expansion. Density extends the bound as in step 2.1. All smooth derived coefficients are covered by the same argument. This proves (e). [step 1.1, L1, L3, algebra] ∎
