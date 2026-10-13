---
id: pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement
aliases:
  - nrqm-composites-schmidt-reduction-and-pure-entanglement
kind: physics-theorem
domain: physics
title: Schmidt reduction of a pure composite preparation, purity of the
  subsystems, and the product criterion
status: draft
origin: session
dependency_level: 12
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - def-nrqm-composites-framework-composite-systems-and-local-readouts
  - def-nrqm-composites-framework-reduced-preparations
  - def-nrqm-composites-separable-and-entangled-states
  - def-nrqm-state-geometry-framework-state-space
  - lem-nrqm-composites-bounded-tensor-maps
  - lem-nrqm-composites-density-and-scalar-spectral-probability
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-rank-one-operator-calculus
  - lem-nrqm-composites-separable-partial-trace
  - lem-nrqm-state-geometry-purity-criterion
  - thm-nrqm-composites-infinite-schmidt-decomposition
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - lem-nrqm-composites-pure-state-separability-criterion
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-composites-separable-and-entangled-states: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-state-geometry-purity-criterion: mathematical-premise
  thm-nrqm-composites-infinite-schmidt-decomposition: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  lem-nrqm-composites-pure-state-separability-criterion: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: 'The pure preparations of a declared composite of two
  distinguishable subsystems: the Schmidt expansion of the composite vector, the
  reduced preparations of the factors, the purity criterion for the reduced
  states, and the product-vector characterization, including pure-state
  separability equivalence for the trace-norm closed convex hull. The statement
  is conditional on the framework''s composition reading and the cited
  mathematics; it asserts no dynamics, no measurement, no interaction, no
  apparatus realization and no empirical fact, and it makes no claim about mixed
  states beyond what is stated.'
sources:
  references:
    - title: 'J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1
        printed pages 105-111 (PDF pages 113-119): entanglement, product states;
        Section 6.3.1 printed pages 125-127
        (PDF pages 133-135): the reduced density operator of an entangled pair
        and purity loss'
      url: https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf
    - title: 'B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        ''Multiparticle States and Tensor Products'', Section 2, chapter pages
        8-9: product and entangled vectors of a two-particle space and the
        two-dimensional determinant criterion'
      url: https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf
    - title: 'G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 1.4 printed pages 45-47 (PDF pages 57-59): the tensor
        construction, product bases and the polarization of tensor vectors'
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition and state readings for a declared composite
of two distinguishable subsystems $A,B$ with assigned spaces $H,K$
([[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-composites-framework-reduced-preparations]]), and assume the Axiom
of Countable Choice ([[def-countable-choice]]). The adopted composite
reading also carries the Axiom of Choice ([[def-axiom-of-choice]]) for its
local spectral readouts; the Schmidt and partial-trace deductions below use
only Countable Choice. Let $\Psi\in H\widehat\otimes K$ satisfy
$\|\Psi\|=1$, let
$$\rho=T_{\Psi,\Psi}\in D(H\widehat\otimes K),\qquad \rho_{A}=\operatorname{Tr}_{K}\rho\in D(H),\qquad \rho_{B}=\operatorname{Tr}_{H}\rho\in D(K)$$
be the pure preparation of the declared composite and its two reduced
preparations. Then:

**(a) Schmidt expansion and reductions.** There are an at most countable index
set $J$, orthonormal families $(v_{r})_{r\in J}\subseteq H$,
$(u_{r})_{r\in J}\subseteq K$ and numbers $s_{r}>0$ with
$$\Psi=\sum_{r\in J}s_{r}\,\kappa(v_{r}\otimes u_{r})\quad\text{(norm convergence)},\qquad \sum_{r\in J}s_{r}^{2}=1,$$
and the reduced preparations are given by the trace-norm convergent series
$$\rho_{A}=\sum_{r\in J}s_{r}^{2}\,T_{v_{r},v_{r}},\qquad \rho_{B}=\sum_{r\in J}s_{r}^{2}\,T_{u_{r},u_{r}} .$$
Moreover $\operatorname{tr}\rho_{A}^{2}=\operatorname{tr}\rho_{B}^{2}=\sum_{r\in J}s_{r}^{4}$.

**(b) Purity and product criterion.** The following are equivalent:
(i) exactly one $s_{r}$ is nonzero; (ii) $\rho_{A}$ is pure, that is
$\operatorname{tr}\rho_{A}^{2}=1$; (iii) $\rho_{B}$ is pure;
(iv) $\Psi$ is a product vector, $\Psi=\kappa(u\otimes v)$ with
$\|u\|=\|v\|=1$; (v) $\rho=\rho_{A}\otimes\rho_{B}$; (vi) $\rho$ is separable in the trace-norm closed-convex-hull sense of [[def-nrqm-composites-separable-and-entangled-states]] clause (b). In that case
$s_{r_{0}}=1$ at the unique nonzero index and $\Psi=\kappa(v_{r_{0}}\otimes u_{r_{0}})$,
$\rho_{A}=T_{u,u}$, $\rho_{B}=T_{v,v}$ for $u=v_{r_{0}}$, $v=u_{r_{0}}$.

**(c) Non-product pure preparations.** If $\Psi$ is not a product vector, then
at least two coefficients $s_{r}$ are nonzero, $\rho_{A}$ and $\rho_{B}$ are
mixed, $\operatorname{tr}\rho_{A}^{2}<1$, and $\rho\ne\rho_{A}\otimes\rho_{B}$;
the pure preparation is entangled in the full trace-norm closed-convex-hull sense of [[def-nrqm-composites-separable-and-entangled-states]] clause (b). More precisely, if $m=\max_rs_r^2<1$, every separable $\sigma$ satisfies $\operatorname{tr}(\sigma\rho)\le m$ and $\|\rho-\sigma\|_1\ge1-m>0$.

**(d) Scope.** The statement concerns the declared composite, its pure
preparations and the reduced preparations of the factors. It asserts no
dynamics, no interaction, no measurement, no apparatus realization and no
empirical fact; and it concerns pure composite preparations only, mixed-state
separability being outside its scope.

## Facts & Assumptions

**Given:** The declared composite with assigned spaces $H,K$; a unit vector $\Psi\in H\widehat\otimes K$; the preparations $\rho,\rho_{A},\rho_{B}$; the Axiom of Countable Choice and the inherited Axiom of Choice.

[F1] **Schmidt expansion.** For $\Psi\in H\widehat\otimes K$ there are an at most countable $J$, orthonormal families $(v_{r})\subseteq H$, $(u_{r})\subseteq K$ and $s_{r}>0$ with $\Psi=\sum_{r}s_{r}\kappa(v_{r}\otimes u_{r})$ in norm, $\|\Psi\|^{2}=\sum_{r}s_{r}^{2}$; the $s_{r}$ are the positive square roots of the nonzero eigenvalues of the positive operator $CC^*:H_0\to H_0$, where $C:\overline{K_0}\to H_0$ is the linear coefficient map on countable closed factor supports of $\Psi$ from the cited Schmidt theorem (for an orthonormal basis $(f_j)$ of $K_0$ and $\Psi=\sum_jh_j\otimes f_j$, it is defined by $C\bar f_j=h_j$ and continuous linear extension); and for $\|\Psi\|=1$ the reduced density $\rho=\operatorname{Tr}_{K}T_{\Psi,\Psi}$ satisfies $\operatorname{tr}\rho^{2}=\sum_{r}s_{r}^{4}$, with $\operatorname{tr}\rho^{2}=1$ exactly when exactly one $s_{r}$ is nonzero, i.e. exactly when $\Psi$ is a product vector ([[thm-nrqm-composites-infinite-schmidt-decomposition]]; the completed tensor product and the embedding $\kappa$ are those of [[lem-nrqm-composites-hilbert-tensor-construction]]). For bounded $X\in\mathcal B(H)$, $x\in H$ and $y\in K$ the tensor identity $(X\otimes I_{K})\kappa(x\otimes y)=\kappa(Xx\otimes y)$ holds ([[lem-nrqm-composites-bounded-tensor-maps]] clause (a)).

[F2] **Partial trace.** There is a linear positive trace-preserving map $\operatorname{Tr}_{K}$ on trace-class operators with $\operatorname{tr}((\operatorname{Tr}_{K}T)X)=\operatorname{tr}(T(X\otimes I_{K}))$ for every trace-class $T$ and every bounded $X\in\mathcal B(H)$ and $\|\operatorname{Tr}_{K}T\|_{1}\le\|T\|_{1}$; it maps density operators to density operators ([[lem-nrqm-composites-separable-partial-trace]] clauses (a), (b)); on rank-one operators $\operatorname{Tr}_{K}T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$ (clause (c)).

[F3] **Rank-one trace pairing.** For trace-class $S$ and $x,y\in H$ one has $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$, and $T_{x,x}\ge0$ with $\operatorname{tr}T_{x,x}=\|x\|^{2}$, $T_{x,y}$ being bounded with $\|T_{x,y}\|=\|x\|\,\|y\|$; the map $(x,y)\mapsto T_{x,y}$ is trace-norm continuous ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a), (b), (c), (d), (e), (f), [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]). For every bounded $X$, clauses (d) and (b) of that rank-one supplier give $T_{x,y}X=T_{x,X^*y}$ and $\operatorname{tr}(T_{x,y}X)=\langle x,X^*y\rangle=\langle Xx,y\rangle$; thus the bounded pairings used below do not require $X$ to be trace class.

[F4] **Purity criterion.** A state is pure exactly when its purity $\operatorname{tr}\rho^{2}$ equals one ([[lem-nrqm-state-geometry-purity-criterion]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

[F5] **Reduced preparations and product preparations.** $\rho_{A}=\operatorname{Tr}_{K}\rho$ and $\rho_{B}=\operatorname{Tr}_{H}\rho$ are the reduced preparations of the declared composite, and for a product preparation $T_{\kappa(u\otimes v),\kappa(u\otimes v)}=T_{u,u}\otimes T_{v,v}$, so that $\rho_{A}=T_{u,u}$ and $\rho_{B}=T_{v,v}$ ([[def-nrqm-composites-framework-reduced-preparations]] clauses (a), (c), [[def-nrqm-composites-framework-composite-systems-and-local-readouts]] clause (b)).

[F6] The mathematical equivalence of a pure projector being separable with its vector being product, and the strict Schmidt-overlap/trace-norm witness for non-product vectors, are [[lem-nrqm-composites-pure-state-separability-criterion]]. Its closed convex hull is exactly the one declared in the definition.

## Proof

**Proof technique:** direct; obtain the Schmidt expansion from the infinite
Schmidt theorem, pass the partial trace identity to the trace-norm limit
through finite truncations to identify the two reduced preparations, and read
off the purity and product criteria from the supplier's purity statement and
the purity criterion for states.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Expansion and normalization] By [F1] there are $J$, $(v_{r})$, $(u_{r})$ and $s_{r}>0$ with $\Psi=\sum_{r}s_{r}\kappa(v_{r}\otimes u_{r})$ in norm and $\sum_{r}s_{r}^{2}=\|\Psi\|^{2}=1$; this is the expansion of (a). [given, F1]

1.2 [Finite truncations] Put $\Psi_{N}:=\sum_{r\in J_{N}}s_{r}\kappa(v_{r}\otimes u_{r})$ for an increasing sequence of finite subsets $J_{N}\uparrow J$. For bounded $X\in\mathcal B(H)$ and $N$ one has, using the tensor identity of [F1] on elementary tensors, $\langle(X\otimes I_{K})\Psi_{N},\Psi_{N}\rangle=\sum_{r,r'\in J_{N}}s_{r}s_{r'}\langle Xv_{r},v_{r'}\rangle\langle u_{r},u_{r'}\rangle=\sum_{r\in J_{N}}s_{r}^{2}\langle Xv_{r},v_{r}\rangle$ by orthonormality of $(u_{r})$; since $\Psi_{N}\to\Psi$, $\|X\otimes I_{K}\|\le\|X\|$ and $\sum_{r}s_{r}^{2}<\infty$, the sesquilinear form is continuous and the series converges absolutely, so $\operatorname{tr}(\rho(X\otimes I_{K}))=\langle(X\otimes I_{K})\Psi,\Psi\rangle=\sum_{r}s_{r}^{2}\langle Xv_{r},v_{r}\rangle$. [given, F1, F3, algebra]

2.1 [Reduction identity] Let $S:=\sum_{r}s_{r}^{2}T_{v_{r},v_{r}}$, a trace-class operator with $S\ge0$ and $\operatorname{tr}S=1$ by [F3] and absolute convergence. For bounded $X$, step 1.2 and [F2] give $\operatorname{tr}(\rho_{A}X)=\operatorname{tr}(\rho(X\otimes I_{K}))=\sum_{r}s_{r}^{2}\langle Xv_{r},v_{r}\rangle$; taking $X=T_{w,w'}$ and using [F3] twice, $\langle\rho_{A}w,w'\rangle=\operatorname{tr}(\rho_{A}T_{w,w'})=\sum_{r}s_{r}^{2}\langle T_{w,w'}v_{r},v_{r}\rangle=\sum_{r}s_{r}^{2}\langle v_{r},w'\rangle\langle w,v_{r}\rangle=\langle Sw,w'\rangle$ for all $w,w'\in H$, so $\rho_{A}=S$ by taking $w'=(\rho_{A}-S)w$ and using $\|(\rho_{A}-S)w\|^{2}=0$; interchanging the factors gives $\rho_{B}=\sum_{r}s_{r}^{2}T_{u_{r},u_{r}}$ with the same argument. [given, F2, F3, step 1.2, algebra]

3.1 [Purity and product criterion] By [F1] and step 2.1, $\operatorname{tr}\rho_{A}^{2}=\sum_{r}s_{r}^{4}=\operatorname{tr}\rho_{B}^{2}$ and $\operatorname{tr}\rho_{A}^{2}=1$ holds exactly when exactly one $s_{r}$ is nonzero and exactly when $\Psi$ is a product vector; purity of $\rho_{A}$ is equivalent to $\operatorname{tr}\rho_{A}^{2}=1$ by [F4], and likewise for $\rho_{B}$. If exactly one $s_{r_{0}}$ is nonzero, then $s_{r_{0}}^{2}=1$ and $\Psi=\kappa(v_{r_{0}}\otimes u_{r_{0}})$ is a product vector, so $\rho=\rho_{A}\otimes\rho_{B}$ by [F5]; conversely for a product vector [F5] gives $\rho_{A}=T_{u,u}$, $\rho_{B}=T_{v,v}$, which are pure by [F3] and [F4]. This is (b); its failure case, in which at least two $s_{r}$ are nonzero and both reduced preparations are mixed with $\operatorname{tr}\rho_{A}^{2}<1$ and $\rho\ne\rho_{A}\otimes\rho_{B}$, is (c). Conversely, if $\rho=\rho_A\otimes\rho_B$, pair both operators with the unit product vector $q_r=\kappa(v_r\otimes u_r)$. The expansion gives $\langle\rho q_r,q_r\rangle=s_r^2$, while step 2.1 and the tensor action in [F1] give $\langle(\rho_A\otimes\rho_B)q_r,q_r\rangle=s_r^4$. Thus every positive $s_r^2$ equals its square and is one; their sum one forces exactly one coefficient. Finally [F6] identifies this product case exactly with separability, proving (vi); in the non-product case it gives entanglement and the stated strict trace-norm witness. [given, F1, F4, F5, F6, step 2.1, algebra]

4.1 [Assembly and scope] Step 1.1 gives the expansion of (a) and step 2.1 its reduction formulae; step 3.1 establishes (b) and (c); only the declared composite, its pure preparations and the cited mathematics were used, which is the scope statement (d). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Pure versus mixed scope.** Clause (c) proves non-product pure preparations entangled for the full trace-norm closed convex hull. A general classification or criterion for mixed-state separability is not claimed.
- **Choice.** The adopted composite interface carries the Axiom of Choice
  for local spectral readouts. The deductions in this proof use only
  Countable Choice through the tensor construction and Schmidt theorem;
  no spectral theorem for unbounded operators enters the deduction.
