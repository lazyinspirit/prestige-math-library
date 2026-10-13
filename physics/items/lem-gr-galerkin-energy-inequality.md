---
id: lem-gr-galerkin-energy-inequality
kind: lemma
title: "Equivalence of the weighted Galerkin energy with the H^s norm and its Gronwall inequality"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, lem-gr-galerkin-ode-local-solution, lem-gr-galerkin-time-derivative-bound, thm-gronwall-integral-inequality, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
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
([[def-countable-choice]]). Let $s\ge5$ be an integer, fix a compact interval $I_0$ inside the coefficient time domain, and let $J\subseteq I_0$ be an interval on which the Galerkin solution is defined. Let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$, let
$K\subseteq O$ be compact and $R\ge0$, and let $u_N:J\to X_N$ be a Galerkin
solution ([[lem-gr-galerkin-ode-local-solution]]) with $u_N(t)$ taking values
in $K$ and $\|u_N(t)\|_{H^s}\le R$ for all $t\in J$. Define the **weighted
energy**
$$e(t):=\sum_{|\alpha|\le s}\int_{\mathbb T^3_{2\pi}}\bigl(D^\alpha u_N(t)\bigr)^{\mathsf T}A^0\bigl(t,x,u_N(t)\bigr)\bigl(D^\alpha u_N(t)\bigr)\,d\mu(x).$$
Then:

**(a)** there are $0<a\le b$, depending on $A^0$, $K$, $s$ and $I_0$, with
$a\|u_N(t)\|_{H^s}^2\le e(t)\le b\|u_N(t)\|_{H^s}^2$ for all $t\in J$;

**(b)** $e$ is $C^1$ on $J$ and there is $C=C(A^\mu,B,K,R,s,I_0)$ with
$$|e'(t)|\le C\,\bigl(1+e(t)\bigr)\qquad(t\in J).$$
Consequently $e(t)\le(1+e(t_0))e^{C|t-t_0|}$ for $t,t_0\in J$ by Gronwall's inequality.

## Facts & Assumptions
**Given:** Countable Choice, $s\ge5$, the coefficient family on $O$, the compact $K$, the bound $R$, a Galerkin solution $u_N$ on $J$ with values in $K$ and $\|u_N\|_{H^s}\le R$.

[L1] Uniform bounds for $A^0$: there are $0<a\le b$ with $a|z|^2\le z^{\mathsf T}A^0(t,x,u)z\le b|z|^2$ for all $(t,x,u)\in J\times\mathbb T^3_{2\pi}\times K$ ([[lem-gr-positive-definite-symmetric-matrix-bounds]] clause (c)).

[L2] The Galerkin equation $P_N[A^0(t,\cdot,u_N)\partial_tu_N+A^i(t,\cdot,u_N)\partial_iu_N+B(t,\cdot,u_N)]=0$ holds in $L^2$; $P_N$ is self-adjoint, commutes with $D^\alpha$ and acts as the identity on $X_N$ ([[lem-gr-galerkin-ode-local-solution]], [[lem-gr-galerkin-projection-properties]]).

[L3] The homogeneous order-$s$ commutator bounds give $\|[D^\alpha,A^\mu(u_N)]w\|_2\le C_R\|w\|_{H^{s-1}}$ for $|\alpha|\le s$; the time derivative estimate gives $\|\partial_tu_N\|_{H^{s-1}}\le C_R(1+\|u_N\|_{H^s})$, and composition gives $\|B(u_N)\|_{H^s}\le C_R(1+\|u_N\|_{H^s})$ ([[lem-gr-smooth-composition-and-commutator-estimates]], [[lem-gr-galerkin-time-derivative-bound]]). The leading $A^i\partial_iD^\alpha u_N$ term is integrated by parts, not bounded separately in $L^2$.

[L4] Write $\dot A^0=\partial_t A^0(t,x,u_N)+\partial_u A^0(t,x,u_N)[\partial_tu_N]$, the total coefficient derivative. It is uniformly bounded in $L^\infty$ by the time derivative bound and embedding. The spatial coefficient derivatives have the same boundedness. Moreover $e$ is continuously differentiable: $u_N\in C^1(J;X_N)$, the coefficients are smooth and $t\mapsto A^0(t,x,u_N(t))$ is $C^1$ uniformly on the compact torus, so differentiation under the finite sum and the integral is legitimate, giving $e'(t)=\sum_{|\alpha|\le s}\int\bigl[2(D^\alpha\partial_tu_N)^{\mathsf T}A^0D^\alpha u_N+(D^\alpha u_N)^{\mathsf T}(\dot A^0)D^\alpha u_N\bigr]d\mu$ ([[lem-gr-galerkin-ode-local-solution]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L5] Young's inequality $2|ab|\le|a|^2+|b|^2$ and the elementary estimate $(1+\|u_N\|_{H^s})^2\le2(1+\|u_N\|_{H^s}^2)$; and $\|u_N\|_{H^s}^2\le e/a$ by [L1].



## Proof

**Proof technique:** direct.

1.1 (Equivalence (a).) For each $|\alpha|\le s$ the integrand $(D^\alpha u_N)^{\mathsf T}A^0D^\alpha u_N$ lies between $a|D^\alpha u_N|^2$ and $b|D^\alpha u_N|^2$ pointwise by [L1]; integrating and summing over $\alpha$ gives $a\|u_N\|_{H^s}^2\le e\le b\|u_N\|_{H^s}^2$. [L1, algebra]

1.2 (Substituting the Galerkin equation into $e'$.) For each $|\alpha|\le s$ use $D^\alpha u_N\in X_N$ and self-adjoint commutativity [L2]: $\int(D^\alpha u_N)^{\mathsf T}A^0D^\alpha\partial_tu_N=\int(D^\alpha u_N)^{\mathsf T}D^\alpha(A^0\partial_tu_N)-\int(D^\alpha u_N)^{\mathsf T}[D^\alpha,A^0]\partial_tu_N$ and $\int(D^\alpha u_N)^{\mathsf T}P_ND^\alpha(A^0\partial_tu_N)=-\int(D^\alpha u_N)^{\mathsf T}D^\alpha(A^i\partial_iu_N+B)$ by the Galerkin equation and self-adjointness. Substituting into [L4] and splitting $D^\alpha(A^i\partial_iu_N)=A^iD^\alpha\partial_iu_N+[D^\alpha,A^i]\partial_iu_N$, the symmetric term integrates by parts on the torus: $\int(D^\alpha u_N)^{\mathsf T}A^iD^\alpha\partial_iu_N=-\tfrac12\int(D^\alpha u_N)^{\mathsf T}(\partial_iA^i)(D^\alpha u_N)$. Hence $e'(t)=\sum_{|\alpha|\le s}\bigl[-2\int(D^\alpha u_N)^{\mathsf T}[D^\alpha,A^0]\partial_tu_N-2\int(D^\alpha u_N)^{\mathsf T}[D^\alpha,A^i]\partial_iu_N+\int(D^\alpha u_N)^{\mathsf T}(\partial_iA^i)D^\alpha u_N-2\int(D^\alpha u_N)^{\mathsf T}D^\alpha B+\int(D^\alpha u_N)^{\mathsf T}(\dot A^0)D^\alpha u_N\bigr]$. [L2, L4, algebra]

2.1 (Bounding the terms by $1+e$.) Each of the five sums is bounded using Cauchy--Schwarz and [L3]: $\bigl|\int(D^\alpha u_N)^{\mathsf T}[D^\alpha,A^0]\partial_tu_N\bigr|\le\|D^\alpha u_N\|_2\,C_R\|\partial_tu_N\|_{H^{s-1}}\le C_R(1+\|u_N\|_{H^s})\|D^\alpha u_N\|_2$; similarly for the spatial commutators with $\|\partial_iu_N\|_{H^{s-1}}\le\|u_N\|_{H^s}$; the $\partial_iA^i$ and $\dot A^0$ terms are bounded by a constant times $\|D^\alpha u_N\|_2^2$; and $\bigl|\int(D^\alpha u_N)^{\mathsf T}D^\alpha B\bigr|\le C_R(1+\|u_N\|_{H^s})\|D^\alpha u_N\|_2$. Summing over $|\alpha|\le s$, using Young's inequality [L5] and $\|u_N\|^2_{H^s}\le a^{-1}e$ from step 1.1, gives $|e'|\le C(1+e)$ with $C=C(A^\mu,B,K,R,s,I_0)$. [step 1.1, step 1.2, L3, L5, algebra]

3.1 (Gronwall consequence.) By step 1.1 and step 2.1, $e(t)\le(1+e(t_0))e^{C|t-t_0|}$ on every interval where the bounds hold, by Gronwall's integral inequality ([[thm-gronwall-integral-inequality]]); this uses only $|e'|\le C(1+e)$ and the differentiability of $e$ from [L4]. [step 2.1, L4] ∎



## Remarks

- **Role.** The equivalence (a) turns the a priori bound on $e$ into the $H^s$ bound assumed in [[lem-gr-galerkin-compactness]] and in the uniform-existence clause of [[thm-gr-periodic-symmetric-hyperbolic-existence]].
