---
id: lem-gr-periodic-sobolev-algebra
kind: lemma
title: "The periodic Sobolev space H^k of the three-torus is a Banach algebra for k at least four"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, lem-gr-periodic-sobolev-embedding, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, lem-gr-galerkin-projection-properties]
dependency_roles:
  lem-gr-galerkin-projection-properties: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of the Sobolev spaces H^s(T^3), the continuous embedding H^s(T^3) into L-infinity and the Banach-algebra property for s>3/2) and Section 4.3 (Agmon's inequality)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 3 (Sobolev Spaces), Sections 3.1 (weak derivatives), 3.4 (properties of weak derivatives), 3.5 (Sobolev spaces), 3.7-3.8 (Sobolev embedding) and 3.10 (compactness results)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
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

[L3] The multi-index Leibniz rule: for $|\alpha|\le k$, $D^\alpha(\varphi\psi)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta\varphi\,D^{\alpha-\beta}\psi$, a finite sum over the multi-indices $\beta\le\alpha$; it follows by induction on $|\alpha|$ from the one-variable product rule and the definition of the weak derivatives, all functions involved being smooth on the torus ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-gr-periodic-torus-and-sobolev-spaces]]).

[L4] $\binom{\alpha}{\beta}\ge1$ is an integer and the number of multi-indices $\beta\le\alpha$ is at most $(k+1)^3$ ([[def-ck-and-multi-index-notation-in-several-variables]]).



[L5] Fourier truncations converge in every stated $H^k$ norm and are smooth ([[lem-gr-galerkin-projection-properties]]).

## Proof

**Proof technique:** direct.

1.1 (Embedding control (a).) Since $k-(k-2)=2>3/2$, [L1] with $(s,m)=(k,k-2)$ gives a $C^{k-2}$ representative of $u$ and the bound $\sup|D^\gamma u|\le\|u\|_{C^{k-2}}\le C_k\|u\|_{H^k}$ for every $|\gamma|\le k-2$. [L1]

2.1 (Each Leibniz term is bounded by $\|u\|_{H^k}\|v\|_{H^k}$.) Fix $|\alpha|\le k$ and expand by [L3]. In a term $D^\beta u\,D^{\alpha-\beta}v$ two cases occur. First case, $|\beta|\ge k-1$: then $|\alpha-\beta|=|\alpha|-|\beta|\le1\le k-2$ because $k\ge3$, so by step 1.1 the second factor has $L^\infty$ norm at most $C_k\|v\|_{H^k}$ and the first has $L^2$ norm at most $\|u\|_{H^k}$; the product has $L^2$ norm at most $C_k\|u\|_{H^k}\|v\|_{H^k}$ by [L2]. Second case, $|\beta|\le k-2$: then $|\alpha-\beta|\le k$, so the first factor has $L^\infty$ norm at most $C_k\|u\|_{H^k}$ and the second $L^2$ norm at most $\|v\|_{H^k}$, with the same product bound. The two cases exhaust the possibilities, because $|\beta|\ge k-1$ and $|\alpha-\beta|\ge k-1$ simultaneously would give $|\alpha|\ge2k-2>k$ for $k\ge3$. [step 1.1, L3, L4, algebra]

3.1 (Conclusion of (b).) Summing the at most $(k+1)^3$ terms of [L3] and using [L4], $\|D^\alpha(uv)\|_2\le(k+1)^3\max_\beta\binom{\alpha}{\beta}C_k\|u\|_{H^k}\|v\|_{H^k}$; taking the sum over $|\alpha|\le k$ and absorbing the finite combinatorial factor into a new $C_k$ gives (b). For general $u,v$, approximate by their Fourier truncations from [L5]. The smooth bilinear estimate makes the products Cauchy in $H^k$; completeness follows directly from the weighted Fourier norm, and uniform convergence of the factors identifies their limit with the pointwise product. Testing against smooth functions passes the Leibniz derivative formula to this limit. Thus $uv\in H^k$ and the same estimate holds. [step 2.1, L3, L4, L5, algebra]

4.1 ((c): smoothing by a classical factor.) For $\varphi\in C^k$ and $w\in H^k$, Leibniz [L3] gives $D^\alpha(\varphi w)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}D^\beta\varphi\,D^{\alpha-\beta}w$; here $|D^\beta\varphi|\le\|\varphi\|_{C^k}$ pointwise and $\|D^{\alpha-\beta}w\|_2\le\|w\|_{H^k}$, so $\|D^\alpha(\varphi w)\|_2\le(k+1)^3\|\varphi\|_{C^k}\|w\|_{H^k}$; summing over $|\alpha|\le k$ gives (c). For general $w$, first apply this estimate to smooth Fourier truncations of $w$: multiplication by the fixed $C^k$ function maps their Cauchy sequence to a Cauchy sequence in $H^k$, and uniform convergence identifies the limit with $\varphi w$. The classical $C^k$ Leibniz rule for each truncation passes to weak derivatives by testing, so the same estimate holds. [L2, L3, L4, algebra] ∎



## Remarks

- **Role.** Item (b) is the algebra property that makes the nonlinear coefficients of a symmetric hyperbolic system controllable in $H^{s-1}$ when the unknown lies in $H^s$; (c) is used for coefficient functions evaluated at a fixed smooth background. [[lem-gr-smooth-composition-and-commutator-estimates]] is the composition-strength refinement.
