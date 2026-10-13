---
id: lem-gr-periodic-sobolev-algebra
kind: lemma
title: "The periodic Sobolev space H^k of the three-torus is a Banach algebra
  for k at least four"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-periodic-torus-and-sobolev-spaces,
    lem-gr-periodic-fourier-differentiation-and-norm-equivalence,
    lem-gr-periodic-sobolev-embedding,
    lem-gr-periodic-sobolev-completeness,
    def-ck-and-multi-index-notation-in-several-variables,
    def-countable-choice,
    lem-gr-galerkin-projection-properties
  ]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-periodic-sobolev-completeness: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations
        (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of
        the Sobolev spaces H^s(T^3), the continuous embedding H^s(T^3) into
        L-infinity and the Banach-algebra property for s>3/2) and Section 4.3
        (Agmon's inequality)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NS\
        EEmilFinished.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture
        notes), Chapter 3 (Sobolev Spaces), Sections 3.1 (weak derivatives), 3.4
        (properties of weak derivatives), 3.5 (Sobolev spaces), 3.7-3.8 (Sobolev
        embedding) and 3.10 (compactness results)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
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
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $k\ge4$ be an integer and let
$u,v\in H^k(\mathbb T^3_{2\pi};\mathbb R)$ with the objects and notation of
[[def-gr-periodic-torus-and-sobolev-spaces]]. Then:

**(a)** For every $|\gamma|\le k-2$ the weak derivative $D^\gamma u$ has a
continuous representative and
$$\sup_{x\in\mathbb T^3_{2\pi}}|D^\gamma u(x)|\le C_k\|u\|_{H^k},$$
with $C_k$ depending only on $k$;

**(b)** the pointwise product $uv$ of the continuous representatives lies in
$H^k$ and
$$\|uv\|_{H^k}\le C_k\,\|u\|_{H^k}\,\|v\|_{H^k};$$

**(c)** if $\varphi\in C^k(\mathbb T^3_{2\pi};\mathbb R)$ and
$w\in H^k(\mathbb T^3_{2\pi};\mathbb R)$, then $\varphi w\in H^k$ and
$$\|\varphi w\|_{H^k}\le C_k\,\|\varphi\|_{C^k}\,\|w\|_{H^k}.$$

## Facts & Assumptions
**Given:** Countable Choice, an integer $k\ge4$, and $u,v\in H^k(\mathbb T^3_{2\pi};\mathbb R)$.

[L1] Sobolev embedding: for integers $s\ge m\ge0$ with $s-m>3/2$, every $H^s$ class has a unique continuous representative which is $C^m$, with $\|u\|_{C^m}\le C(s,m)\|u\|_{H^s}$, and the derivative series converges uniformly ([[lem-gr-periodic-sobolev-embedding]]).

[L2] $\|D^\alpha w\|_2\le\|w\|_{H^k}$ for $|\alpha|\le k$, and $C^m$ functions on the torus have finite sup norm; the $L^\infty$ norm of the constant function $1$ on the probability space is $1$, so $\|g\|_2\le\|g\|_\infty$ ([[def-gr-periodic-torus-and-sobolev-spaces]]).

[L3] For $C^k$ functions $\varphi,\psi$ on the torus and $|\alpha|\le k$, the classical multi-index Leibniz rule is $D^\alpha(\varphi\psi)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta\varphi\,D^{\alpha-\beta}\psi$, a finite sum over $\beta\le\alpha$; it follows by induction on $|\alpha|$ from the one-variable product rule ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-gr-periodic-torus-and-sobolev-spaces]]). For smooth factors this also gives the weak-derivative identity.

[L4] $\binom{\alpha}{\beta}\ge1$ is an integer and the number of multi-indices $\beta\le\alpha$ is at most $(k+1)^3$ ([[def-ck-and-multi-index-notation-in-several-variables]]).



[L5] Fourier truncations are smooth and converge in every stated $H^k$ norm ([[lem-gr-galerkin-projection-properties]]). The periodic space $H^k$ is complete: every $H^k$-Cauchy sequence converges in $H^k$; this follows from completeness of the weighted Fourier coefficient space and the Fourier characterization of $H^k$ ([[lem-gr-periodic-sobolev-completeness]]).

[L6] If $f$ is $C^k$ and periodic, its classical derivatives through order $k$ are its weak derivatives: for $C^1$ periodic $G$, integrating $\partial_iG$ over one period gives zero by the fundamental theorem of calculus and equality of endpoint values; applying this coordinatewise to $G=(D^\beta f)\eta$ for smooth periodic tests $\eta$ proves the weak identities. The same periodic integration-by-parts argument is used in [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], proof step 1.1.

## Proof

**Proof technique:** direct.

1.1 (Embedding control (a).) Since $k-(k-2)=2>3/2$, [L1] with $(s,m)=(k,k-2)$ gives a $C^{k-2}$ representative of $u$ and the bound $\sup|D^\gamma u|\le\|u\|_{C^{k-2}}\le C_k\|u\|_{H^k}$ for every $|\gamma|\le k-2$. [L1]

2.1 (Each Leibniz term for smooth factors is bounded by $\|u\|_{H^k}\|v\|_{H^k}$.) First take smooth $u,v$ and fix $|\alpha|\le k$. Expand by [L3]. In a term $D^\beta u\,D^{\alpha-\beta}v$ two cases occur. If $|\beta|\ge k-1$, then $|\alpha-\beta|\le1\le k-2$, so step 1.1 bounds the second factor in $L^\infty$ and [L2] bounds the first in $L^2$. If $|\beta|\le k-2$, step 1.1 bounds the first factor in $L^\infty$, while [L2] bounds the second in $L^2$. Both cases give an $L^2$ bound $C_k\|u\|_{H^k}\|v\|_{H^k}$. They exhaust the possibilities because both orders cannot be at least $k-1$ when $|\alpha|\le k$ and $k\ge4$. [step 1.1, L2, L3, algebra]

3.1 (Conclusion of (b).) Summing the finitely many terms of [L3] and using [L4] gives the stated product bound for smooth $u,v$. For general $u,v\in H^k$, put $u_N=P_Nu$ and $v_N=P_Nv$. By [L5], these converge in $H^k$ and, by [L1], uniformly. The smooth estimate applied to $u_Nv_N-u_Mv_M=(u_N-u_M)v_N+u_M(v_N-v_M)$ shows that $(u_Nv_N)$ is Cauchy in $H^k$. Completeness [L5] gives a limit, and uniform convergence identifies it with $uv$. For every smooth test function $\eta$, pass to the limit in $\int u_Nv_N D^\alpha\eta=(-1)^{|\alpha|}\int D^\alpha(u_Nv_N)\eta$; uniform convergence on the left and $L^2$ convergence of the derivatives on the right show that the limits are the weak derivatives of $uv$. The product estimate passes to the limit by norm continuity and $\|P_Nw\|_{H^k}\le\|w\|_{H^k}$. [step 2.1, L1, L3, L5, algebra]

4.1 ((c): smoothing by a classical factor.) First take $w_N=P_Nw$, which is smooth. The $C^k$ Leibniz rule [L3] and [L6] give its weak derivatives by the displayed finite sum. Since $|D^\beta\varphi|\le\|\varphi\|_{C^k}$ and $\|D^{\alpha-\beta}w_N\|_2\le\|w_N\|_{H^k}$, summing the binomial coefficients gives $\|\varphi w_N\|_{H^k}\le C_k\|\varphi\|_{C^k}\|w_N\|_{H^k}$. Applying this estimate to $w_N-w_M$ and using completeness [L5] shows that $\varphi w_N$ converges in $H^k$; uniform convergence identifies its limit as $\varphi w$. Passing the weak derivative identities against smooth test functions gives $\varphi w\in H^k$, and the bound follows from $\|w_N\|_{H^k}\le\|w\|_{H^k}$. [L2, L3, L5, L6, algebra] ∎



## Remarks

- **Role.** Item (b) is the algebra property that makes the nonlinear coefficients of a symmetric hyperbolic system controllable in $H^{s-1}$ when the unknown lies in $H^s$; (c) is used for coefficient functions evaluated at a fixed smooth background. [[lem-gr-smooth-composition-and-commutator-estimates]] is the composition-strength refinement.
