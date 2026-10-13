---
id: lem-gr-galerkin-second-time-derivative-bound
kind: lemma
title: "Uniform H^{s-2} Lipschitz bound for the time derivative of a Galerkin solution"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, lem-gr-periodic-sobolev-algebra, lem-gr-galerkin-ode-local-solution, lem-gr-galerkin-time-derivative-bound, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-bochner-integral-norm-inequality, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the higher-order energy and Moser-type estimates for the finite-dimensional approximation, and the compactness step that consumes uniform time-continuity of the approximate time derivatives"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 7 (Hyperbolic Equations): energy estimates and passage to the limit for approximations of symmetric hyperbolic systems"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $s\ge5$, let $I_0$ be a compact interval inside the coefficient time domain, and let $K\subseteq O$ be compact. Let $u_N:J\to X_N$ be a Galerkin solution, with $J\subseteq I_0$, values in $K$ and $\|u_N\|_{H^s}\le R$. Then, uniformly in $N$,
$$\|\partial_t^2u_N(t)\|_{H^{s-2}}\le C(A^\mu,B,K,R,s,I_0),$$
and consequently
$$\|\partial_tu_N(t)-\partial_tu_N(t')\|_{H^{s-2}}\le C(A^\mu,B,K,R,s,I_0)|t-t'|.$$
No convexity of $K$ is required.

## Facts & Assumptions

**Given:** The coefficient family, compact time/value sets, Countable Choice, and the stated Galerkin bounds.

[L1] The Galerkin ODE is smooth and $P_N$ commutes with derivatives and is self-adjoint ([[lem-gr-galerkin-ode-local-solution]], [[lem-gr-galerkin-projection-properties]]).

[L2] $\|g\|_{H^{s-1}}\le C_R$ for $g=\partial_tu_N$ ([[lem-gr-galerkin-time-derivative-bound]]).

[L3] Coefficients and their derivatives have bounded compositions and multiplier norms, and homogeneous commutator bounds ([[lem-gr-smooth-composition-and-commutator-estimates]]).

[L4] $A^0\ge aI$ on the compact time/value set ([[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[L5] The norm-valued fundamental theorem of calculus holds for the finite-dimensional smooth curve ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

## Proof

**Proof technique:** direct.

1.1 (Uniform projected inverse.) Let $M=P_NA^0(u_N)P_N$ on $X_N$. Positivity gives $\|M^{-1}h\|_2\le a^{-1}\|h\|_2$. For $v=M^{-1}h$ and $|\alpha|=j\le s-2$, differentiate $P_N(A^0v)=h$ and pair with $D^\alpha v\in X_N$ to obtain $a\|D^\alpha v\|_2\le\|D^\alpha h\|_2+\|[D^\alpha,A^0]v\|_2\le\|D^\alpha h\|_2+C_R\|v\|_{H^{j-1}}$. Induction and summation give $\|M^{-1}h\|_{H^{s-2}}\le C_R\|h\|_{H^{s-2}}$, uniformly in $N$. [L1, L3, L4, algebra]

1.2 (Differentiate the mass equation.) Smoothness of the finite-dimensional ODE permits time differentiation. Set $z=u_N$ and $g=\partial_tz$. The differentiated Galerkin identity is $M\partial_t g=-P_N(\dot A^0g+\dot A^i\partial_i z+A^i\partial_i g+\dot B)$, where $\dot F=F_t+F_u g$ for each coefficient. The compositions $F_t,F_u$ have bounded $H^{s-1}$ norm by [L3], and $g,\partial_i z$ have bounded $H^{s-1}$ norm by [L2]. Since $s-1\ge4$, the algebra bound makes $\dot A^0g$, $\dot A^i\partial_i z$ and $\dot B$ bounded in $H^{s-1}$; $A^i\partial_i g$ is bounded in $H^{s-2}$ by the multiplier bound. Thus the whole projected source is bounded in $H^{s-2}$ by a constant depending on $R$, without any universal polynomial growth assumption. [L1, L2, L3, algebra]

2.1 (Second derivative and Lipschitz conclusion.) Apply step 1.1 to step 1.2 to obtain $\|\partial_tg\|_{H^{s-2}}\le C_R$. Integrate on the segment between $t,t'$ using [L5] to get $\|g(t)-g(t')\|_{H^{s-2}}\le C_R|t-t'|$. This proves both claims. [step 1.1, step 1.2, L5, algebra] ∎
