---
id: lem-gr-galerkin-time-derivative-bound
kind: lemma
title: "Uniform time-derivative bounds for Galerkin solutions in every H^j, j at most s minus one"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, lem-gr-galerkin-ode-local-solution, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$ be an integer, fix a compact interval $I_0$ inside the coefficient time domain, and assume $J\subseteq I_0$. Let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$
([[def-gr-periodic-symmetric-hyperbolic-system]]), let $K\subseteq O$ be compact
and $R\ge0$, and let $u_N:J\to X_N$ be a Galerkin solution of
[[lem-gr-galerkin-ode-local-solution]] for some $N\ge0$. Suppose that
$u_N(t)$ takes values in $K$ and satisfies $\|u_N(t)\|_{H^s}\le R$ for every
$t\in J$. Then there is $C=C(A^\mu,B,K,R,s,I_0)$ such that for every integer
$0\le j\le s-1$ and every $t\in J$
$$\|\partial_tu_N(t)\|_{H^j}\le C\,\bigl(1+\|u_N(t)\|_{H^s}\bigr).$$

## Facts & Assumptions

**Given:** Countable Choice, integer $s\ge5$, the coefficient family on $O$, the compact $K$, the bound $R$, a Galerkin solution $u_N$ on $J$ with values in $K$ and $\|u_N\|_{H^s}\le R$.

[L1] $P_N$ is linear and self-adjoint on $L^2$, commutes with every spatial derivative $D^\alpha$, and is the identity on $X_N$ ([[lem-gr-galerkin-projection-properties]], [[def-gr-galerkin-fourier-projection]]).

[L2] The Galerkin solution satisfies, at every $t\in J$, $P_N[A^0(t,\cdot,u_N)\partial_tu_N+A^i(t,\cdot,u_N)\partial_iu_N+B(t,\cdot,u_N)]=0$ in $L^2$, $\partial_tu_N(t)\in X_N$, and $u_N\in C^1(J;X_N)$ ([[lem-gr-galerkin-ode-local-solution]], [[def-gr-periodic-symmetric-hyperbolic-system]]).

[L3] Uniform positivity of $A^0$ on the coefficient set: there is $a>0$ with $z^{\mathsf T}A^0(t,x,u)z\ge a|z|^2$ for all $(t,x,u)\in J\times\mathbb T^3_{2\pi}\times K$ ([[lem-gr-positive-definite-symmetric-matrix-bounds]] clause (c)).

[L4] Composition, product and commutator estimates: for the stated coefficient maps and the bound $\|u_N\|_{H^s}\le R$ and values in $K$, $\|F(t,\cdot,u_N)w\|_{H^j}\le C_R\|w\|_{H^j}$ for $0\le j\le s-1$, and $\|[D^\alpha,A(t,\cdot,u_N)]w\|_2\le C_R\|w\|_{H^{|\alpha|-1}}$ for $1\le|\alpha|\le s-1$ ([[lem-gr-smooth-composition-and-commutator-estimates]] clauses (c),(d)); and composition into $H^j$ is bounded by $C_R(1+\|u_N\|_{H^s})$ for $0\le j\le s$ (clause (a)).

[L5] Multi-index Leibniz expansion $D^\alpha(Fw)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^{\alpha-\beta}F\,D^\beta w$ and the fact that $D^\alpha u_N\in X_N$ for $u_N\in X_N$ ([[def-ck-and-multi-index-notation-in-several-variables]], [[lem-gr-galerkin-projection-properties]] clause (b)).

## Proof

**Proof technique:** direct.

1.1 (Order zero.) Pair the Galerkin equation [L2] with $\partial_tu_N$: since $\partial_tu_N\in X_N$, self-adjointness [L1] gives $\int(\partial_tu_N)^{\mathsf T}P_N[A^0\partial_tu_N]=\int(\partial_tu_N)^{\mathsf T}A^0\partial_tu_N\ge a\|\partial_tu_N\|_2^2$ by [L3]; the right-hand side is $-\int(\partial_tu_N)^{\mathsf T}P_N[A^i\partial_iu_N+B]\le\|\partial_tu_N\|_2\|A^i\partial_iu_N+B\|_2$, and $\|A^i\partial_iu_N+B\|_{L^2}\le C_R(1+\|u_N\|_{H^s})$ by [L4] (the composition $A^i(t,\cdot,u_N)$ lies in $H^s\subseteq C^0$, so its sup norm is at most $C_R$, and $\|\partial_iu_N\|_2\le\|u_N\|_{H^s}$; the term $B$ is similar). Hence $a\|\partial_tu_N\|_2\le C_R(1+\|u_N\|_{H^s})$. [L1, L2, L3, L4, algebra]

2.1 (Induction on the order: the estimate at order $j$.) Fix an integer $j$ with $1\le j\le s-1$ and suppose the bound holds for all orders below $j$; fix $|\alpha|=j$. Applying $P_ND^\alpha$ to the Galerkin equation [L2] (legitimate by commutation [L1]) and pairing with $D^\alpha\partial_tu_N\in X_N$ gives, after moving the leading term and using self-adjointness [L1], $a\|D^\alpha\partial_tu_N\|_2\le\bigl\|[D^\alpha,A^0(t,\cdot,u_N)]\partial_tu_N\bigr\|_2+\bigl\|D^\alpha(A^i(t,\cdot,u_N)\partial_iu_N+B(t,\cdot,u_N))\bigr\|_2$: indeed $D^\alpha(A^0\partial_tu_N)=A^0D^\alpha\partial_tu_N+[D^\alpha,A^0]\partial_tu_N$ by [L5], and the pairing of $P_ND^\alpha(A^0\partial_tu_N)$ with $D^\alpha\partial_tu_N$ removes $P_N$. The first term is at most $C_R\|\partial_tu_N\|_{H^{j-1}}$ by [L4], hence at most $C_R'(1+\|u_N\|_{H^s})$ by the induction hypothesis; the second is at most $C_R(1+\|u_N\|_{H^s})$ by [L4] applied to the compositions $A^i(t,\cdot,u_N)$ and the product bound, since $\|\partial_iu_N\|_{H^{j}}\le\|u_N\|_{H^s}$. Summing over the finitely many $|\alpha|\le j$ gives the estimate at order $j$. [step 1.1, L1, L2, L3, L4, L5, algebra]

3.1 (Conclusion.) The induction of step 2.1, starting from step 1.1, gives the stated bound for every $0\le j\le s-1$ after enlarging the constant to be independent of $j$. [step 1.1, step 2.1, discharge-induction] ∎

## Remarks

- **Role.** The bound at order $s-1$ controls the time commutator in [[lem-gr-galerkin-energy-inequality]] and gives the equicontinuity of the Galerkin family in [[lem-gr-galerkin-compactness]]; all constants are independent of $N$.
