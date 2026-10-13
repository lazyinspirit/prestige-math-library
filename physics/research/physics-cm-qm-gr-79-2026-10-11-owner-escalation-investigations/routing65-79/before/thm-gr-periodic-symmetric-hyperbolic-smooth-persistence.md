---
id: thm-gr-periodic-symmetric-hyperbolic-smooth-persistence
kind: theorem
title: "Smooth data give smooth solutions of a periodic symmetric hyperbolic
  system on the existence interval"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: induction
deps:
  [
    def-gr-periodic-torus-and-sobolev-spaces,
    def-gr-periodic-symmetric-hyperbolic-system,
    lem-gr-smooth-composition-and-commutator-estimates,
    lem-gr-positive-definite-symmetric-matrix-bounds,
    thm-gr-periodic-symmetric-hyperbolic-existence,
    thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability,
    thm-gronwall-integral-inequality,
    def-c-r-and-smooth-maps-between-smooth-manifolds,
    def-countable-choice,
    lem-gr-galerkin-energy-inequality,
    lem-gr-galerkin-time-derivative-bound,
    lem-gr-galerkin-ode-local-solution,
    lem-gr-galerkin-projection-properties,
    lem-gr-galerkin-limit-is-classical-solution,
    lem-gr-periodic-sobolev-embedding
  ]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-galerkin-energy-inequality: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-galerkin-limit-is-classical-solution: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein
        Equations, Living Reviews in Relativity 3 (2000), article 1
        (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the
        definition of a quasilinear symmetric hyperbolic system, the
        finite-dimensional mollifier approximation (3.1) solved by ODE theory,
        the energy and Moser product/composition estimates, the higher-order
        energy inequality, uniqueness, the Rellich/Ascoli compactness step and
        the passage to a classical solution, with Remarks 1-6 on smooth
        persistence, the continuation criterion, Cauchy stability and the
        non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$ be an integer, let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$, let
$K\subseteq\operatorname{int}K'\subseteq O$ be compact, let $R\ge0$, and let
$T>0$ and $C$ be as in [[thm-gr-periodic-symmetric-hyperbolic-existence]] for
the data class $\mathcal S(K,R)$. Let $u_0\in C^\infty(\mathbb T^3_{2\pi};\mathbb R^m)$
take values in $K$ and satisfy $\|u_0\|_{H^s}\le R$. Then the solution $u\in L^\infty((-T,T);H^s)\cap C^0H^{s-1}$
of that theorem with $u(0)=u_0$ satisfies $u\in L^\infty((-T,T);H^q)$ and
$\partial_tu\in L^\infty((-T,T);H^{q-1})$ for every integer $q\ge s$, with bounds
depending only on $q$, $T$, $R$, the coefficient family, $K'$ and the $H^j$ bounds
of $u_0$ for $j\le q$; consequently $u\in C^\infty((-T,T)\times\mathbb T^3_{2\pi})$
and solves $(\star)$ classically.

## Facts & Assumptions

**Given:** Countable Choice; integer $s\ge5$; coefficient family; compact $K\subseteq\operatorname{int}K'$; smooth datum $u_0\in\mathcal S(K,R)$; and the original common interval $(-T,T)$ from the existence construction.

[L1] That construction gives a cofinal Galerkin family with values in a fixed compact $Q\subseteq K'$ and uniform $H^s$ and $H^{s-1}$ time derivative bounds, converging along a subsequence to $u$ ([[thm-gr-periodic-symmetric-hyperbolic-existence]]).

[L2] Composition, homogeneous commutators and the lower-norm-controlled high refinement are proved in [[lem-gr-smooth-composition-and-commutator-estimates]]; matrix positivity gives energy equivalence ([[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[L3] Projections contract in every $H^m$, and finite Fourier-sum limits preserve uniform higher bounds for the convergent solution and its derivative subsequence ([[lem-gr-galerkin-projection-properties]], [[lem-gr-galerkin-limit-is-classical-solution]]).

[L4] Gronwall controls both time directions when the absolute energy derivative is bounded ([[thm-gronwall-integral-inequality]]).

[L5] The Galerkin equation and its exact weighted energy identity are valid for smooth finite-dimensional solutions, and the lower-order time-derivative bound is uniform in $N$ ([[lem-gr-galerkin-ode-local-solution]], [[lem-gr-galerkin-time-derivative-bound]], [[lem-gr-galerkin-energy-inequality]]).

[L6] Sobolev embedding and uniqueness are established locally ([[lem-gr-periodic-sobolev-embedding]], [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]).

## Proof

**Proof technique:** induction.

1.1 (Projected time derivative at one higher order.) Fix $n\ge6$ and a smooth Galerkin field $z$ with $\|z\|_{H^{n-1}}\le\rho$ and values in $Q$. Set $g=\partial_tz$. The lower-order time derivative lemma [L5], used at base order $n-1$, gives $\|g\|_{H^{n-2}}\le C_\rho$. For $|\alpha|\le n-1$ differentiate $P_N(A^0(z)g)=-P_N(A^i(z)\partial_i z+B(z))$ and pair with $D^\alpha g$. Coercivity gives $a\|D^\alpha g\|_2\le\|D^\alpha(A^i\partial_i z+B)\|_2+\|[D^\alpha,A^0]g\|_2$. In the source, coefficient derivatives of order at most $n-3$ are $L^\infty$ bounded by $\rho$, and the remaining derivative of $\partial_i z$ has order at most $n-1$, hence $L^2$ bound $\|z\|_{H^n}$. For coefficient derivatives of order $n-2$ or $n-1$, at most one derivative lands on $\partial_i z$, which is $L^\infty$ bounded by $H^{n-1}$ since $n\ge6$; coefficient derivatives have bounded $L^2$ norms. The commutator has coefficient derivatives at most $n-3$ times $L^2$ derivatives of $g$ of order at most $n-2$, or coefficient derivatives of order at least $n-2$ times at most one $L^\infty$ derivative of $g$, controlled by $H^{n-2}$. Thus $\|g\|_{H^{n-1}}\le C_\rho(1+\|z\|_{H^n})$. [L2, L5, algebra]

1.2 (Base approximation bounds.) Let $\rho_s$ be the uniform $H^s$ bound for the Galerkin family of [L1]. These approximations exist on the original $(-T,T)$ independently of their higher norms and have values in $Q$. At every higher order $m$, their initial norms are at most $\|u_0\|_{H^m}$ by projection contraction. [L1, L3, base]


1.3 (Induction hypothesis.) Fix $M\ge s$ and assume the same cofinal Galerkin family has a uniform $H^M$ bound $\rho_M$ on $(-T,T)$. [ih]

2.1 (Higher energy controlled by the lower norm.) Define $E_n=\sum_{|\alpha|\le n}\int(D^\alpha z)^{\mathsf T}A^0(z)D^\alpha z$. The energy identity of [L5] applies at order $n$: its derivation uses only smoothness, symmetry, projection commutation and integration by parts. The errors are commutators with $g$ and $\partial_i z$, the $H^n$ composition of $B$, and quadratic terms with $\dot A^0$ and $\partial_i A^i$. By [L2](e), step 1.1 and the lower $H^{n-2}$ bounds, each commutator and the $B$ term has $L^2$ norm at most $C_\rho(1+\|z\|_{H^n})$. Total coefficient derivatives have bounded $L^\infty$ norms by the lower bounds for $z,g$. Pairing with $D^\alpha z$, summing and using $2xy\le x^2+y^2$ gives $|E_n'|\le C_\rho(1+E_n)$ and $a\|z\|_{H^n}^2\le E_n\le b\|z\|_{H^n}^2$, uniformly in $N$. This establishes the high-order refinement before applying induction to the limit. [step 1.1, L2, L5, algebra]

3.1 (Gain one derivative.) Apply step 2.1 with $n=M+1\ge6$ and $\rho=\rho_M$. The approximations are smooth ODE solutions, so their order-$(M+1)$ energies exist before any higher-regularity assertion about the limit. Step 2.1 gives $|E_{M+1}'|\le C_M(1+E_{M+1})$ uniformly in $N$, with $E_{M+1}(0)\le b\|u_0\|_{H^{M+1}}^2$. Gronwall gives $1+E_{M+1}(t)\le(1+b\|u_0\|_{H^{M+1}}^2)e^{C_MT}$. Energy equivalence yields a uniform $H^{M+1}$ bound $\rho_{M+1}$ on the original whole interval. Step 1.1 also bounds $\partial_tu_N$ in $H^M$. This proves the step from $M$ to $M+1$. [step 1.3, step 1.1, step 2.1, L3, L4]

4.1 (Higher bounds for the same solution.) Induction supplies these approximation bounds at every order. Finite Fourier-sum limits along the original convergent solution subsequence and its convergent time-derivative subsequence give $u\in L^\infty H^m$ and $\partial_tu\in L^\infty H^{m-1}$ at every order, with the recursively obtained bounds. The time $T$ is unchanged. Uniqueness [L6] identifies any alternative construction with this $u$. [step 1.2, step 3.1, L3, L6, discharge-induction]

5.1 (Joint smoothness.) At every integer $q\ge0$, the uniform $H^q$ derivative bound and coefficientwise fundamental theorem give $\|u(t)-u(t')\|_{H^q}\le C_q|t-t'|$: apply the bound first to finite Fourier sums and take their supremum. Thus $u$ is continuous into every $H^q$. The PDE writes $\partial_tu=-(A^0(t,x,u))^{-1}(A^i(t,x,u)\partial_i u+B(t,x,u))$; smooth composition and products, using one extra spatial order, make this right side continuous in every $H^q$. Integrating the coefficientwise identity gives $u\in C^1((-T,T);H^q)$. Repeated differentiation of this smooth coefficient formula in time, with the chain and Leibniz rules and arbitrarily high spatial norms, inductively gives $u\in C^k((-T,T);H^q)$ for all $k,q$. Sobolev embedding makes all mixed spacetime derivatives continuous, proving joint smoothness. [step 4.1, L2, L3, L6, discharge-induction, algebra] ∎
