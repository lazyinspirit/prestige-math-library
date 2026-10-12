---
id: pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement
aliases: [nrqm-composites-schmidt-reduction-and-pure-entanglement]
kind: physics-theorem
domain: physics
title: "Schmidt reduction of a pure composite preparation, purity of the subsystems, and the product criterion"
status: draft
origin: session
dependency_level: 11
deps: [def-countable-choice, def-nrqm-composites-framework-composite-systems-and-local-readouts, def-nrqm-composites-framework-reduced-preparations, def-nrqm-composites-separable-and-entangled-states, def-nrqm-state-geometry-framework-state-space, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-separable-partial-trace, lem-nrqm-state-geometry-purity-criterion, thm-nrqm-composites-infinite-schmidt-decomposition, thm-trace-class-is-a-two-sided-banach-operator-ideal]
dependency_roles:
  def-countable-choice: mathematical-premise
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The pure preparations of a declared composite of two distinguishable subsystems: the Schmidt expansion of the composite vector, the reduced preparations of the factors, the purity criterion for the reduced states, and the product-vector characterization. The statement is conditional on the framework's composition reading and the cited mathematics; it asserts no dynamics, no measurement, no interaction, no apparatus realization and no empirical fact, and it makes no claim about mixed states beyond what is stated."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1 printed pages 105-111 (PDF pages 113-119): entanglement, product states and the reduced density operator; Section 6.3.1 printed pages 125-127 (PDF pages 133-135): the reduced density operator of an entangled pair and purity loss"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 2, chapter pages 8-9: product and entangled vectors of a two-particle space and the reduced description of one factor"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.4 printed pages 45-47 (PDF pages 57-59): the tensor construction, product bases and the polarization of tensor vectors"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition and state readings for a declared composite
of two distinguishable subsystems $A,B$ with assigned spaces $H,K$
([[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-composites-framework-reduced-preparations]]), and assume the Axiom
of Countable Choice ([[def-countable-choice]]), the hypothesis of the cited
mathematical suppliers. Let $\Psi\in H\widehat\otimes K$ satisfy
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
$\|u\|=\|v\|=1$; (v) $\rho=\rho_{A}\otimes\rho_{B}$. In that case
$s_{r_{0}}=1$ at the unique nonzero index and $\Psi=\kappa(v_{r_{0}}\otimes u_{r_{0}})$,
$\rho_{A}=T_{u,u}$, $\rho_{B}=T_{v,v}$ for $u=v_{r_{0}}$, $v=u_{r_{0}}$.

**(c) Non-product pure preparations.** If $\Psi$ is not a product vector, then
at least two coefficients $s_{r}$ are nonzero, $\rho_{A}$ and $\rho_{B}$ are
mixed, $\operatorname{tr}\rho_{A}^{2}<1$, and $\rho\ne\rho_{A}\otimes\rho_{B}$;
in the vocabulary of [[def-nrqm-composites-separable-and-entangled-states]]
clause (a), the pure preparation is not a pure product state. The statement
does not decide whether such a $\rho$ belongs to the general separable class
of clause (b) of that definition.

**(d) Scope.** The statement concerns the declared composite, its pure
preparations and the reduced preparations of the factors. It asserts no
dynamics, no interaction, no measurement, no apparatus realization and no
empirical fact; and it concerns pure composite preparations only, mixed-state
separability being outside its scope.

## Facts & Assumptions

**Given:** The declared composite with assigned spaces $H,K$; a unit vector $\Psi\in H\widehat\otimes K$; the preparations $\rho,\rho_{A},\rho_{B}$; the Axiom of Countable Choice.

[F1] **Schmidt expansion.** For $\Psi\in H\widehat\otimes K$ there are an at most countable $J$, orthonormal families $(v_{r})\subseteq H$, $(u_{r})\subseteq K$ and $s_{r}>0$ with $\Psi=\sum_{r}s_{r}\kappa(v_{r}\otimes u_{r})$ in norm, $\|\Psi\|^{2}=\sum_{r}s_{r}^{2}$; the $s_{r}$ are the positive square roots of the nonzero eigenvalues of the coefficient operator on countable factor supports; and for $\|\Psi\|=1$ the reduced density $\rho=\operatorname{Tr}_{K}T_{\Psi,\Psi}$ satisfies $\operatorname{tr}\rho^{2}=\sum_{r}s_{r}^{4}$, with $\operatorname{tr}\rho^{2}=1$ exactly when exactly one $s_{r}$ is nonzero, i.e. exactly when $\Psi$ is a product vector ([[thm-nrqm-composites-infinite-schmidt-decomposition]]; the completed tensor product and the embedding $\kappa$ are those of [[lem-nrqm-composites-hilbert-tensor-construction]]). For bounded $X\in\mathcal B(H)$ and $x,y\in H$ the tensor identity $(X\otimes I_{K})\kappa(x\otimes y)=\kappa(Xx\otimes y)$ holds ([[lem-nrqm-composites-bounded-tensor-maps]] clause (a)).

[F2] **Partial trace.** There is a linear positive trace-preserving map $\operatorname{Tr}_{K}$ on trace-class operators with $\operatorname{tr}((\operatorname{Tr}_{K}T)X)=\operatorname{tr}(T(X\otimes I_{K}))$ for every trace-class $T$ and every bounded $X\in\mathcal B(H)$ and $\|\operatorname{Tr}_{K}T\|_{1}\le\|T\|_{1}$; it maps density operators to density operators ([[lem-nrqm-composites-separable-partial-trace]] clauses (a), (b)); on rank-one operators $\operatorname{Tr}_{K}T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$ (clause (c)).

[F3] **Rank-one trace pairing.** For trace-class $S$ and $x,y\in H$ one has $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$, and $T_{x,x}\ge0$ with $\operatorname{tr}T_{x,x}=\|x\|^{2}$, $T_{x,y}$ being bounded with $\|T_{x,y}\|=\|x\|\,\|y\|$; the map $(x,y)\mapsto T_{x,y}$ is trace-norm continuous ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a), (b), (c), (e), (f), [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F4] **Purity criterion.** A state is pure exactly when its purity $\operatorname{tr}\rho^{2}$ equals one ([[lem-nrqm-state-geometry-purity-criterion]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

[F5] **Reduced preparations and product preparations.** $\rho_{A}=\operatorname{Tr}_{K}\rho$ and $\rho_{B}=\operatorname{Tr}_{H}\rho$ are the reduced preparations of the declared composite, and for a product preparation $T_{\kappa(u\otimes v),\kappa(u\otimes v)}=T_{u,u}\otimes T_{v,v}$, so that $\rho_{A}=T_{u,u}$ and $\rho_{B}=T_{v,v}$ ([[def-nrqm-composites-framework-reduced-preparations]] clauses (a), (c), [[def-nrqm-composites-framework-composite-systems-and-local-readouts]] clause (b)).

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

3.1 [Purity and product criterion] By [F1] and step 2.1, $\operatorname{tr}\rho_{A}^{2}=\sum_{r}s_{r}^{4}=\operatorname{tr}\rho_{B}^{2}$ and $\operatorname{tr}\rho_{A}^{2}=1$ holds exactly when exactly one $s_{r}$ is nonzero and exactly when $\Psi$ is a product vector; purity of $\rho_{A}$ is equivalent to $\operatorname{tr}\rho_{A}^{2}=1$ by [F4], and likewise for $\rho_{B}$. If exactly one $s_{r_{0}}$ is nonzero, then $s_{r_{0}}^{2}=1$ and $\Psi=\kappa(v_{r_{0}}\otimes u_{r_{0}})$ is a product vector, so $\rho=\rho_{A}\otimes\rho_{B}$ by [F5]; conversely for a product vector [F5] gives $\rho_{A}=T_{u,u}$, $\rho_{B}=T_{v,v}$, which are pure by [F3] and [F4]. This is (b); its failure case, in which at least two $s_{r}$ are nonzero and both reduced preparations are mixed with $\operatorname{tr}\rho_{A}^{2}<1$ and $\rho\ne\rho_{A}\otimes\rho_{B}$, is (c). [given, F1, F4, F5, step 2.1, algebra]

4.1 [Assembly and scope] Step 1.1 gives the expansion of (a) and step 2.1 its reduction formulae; step 3.1 establishes (b) and (c); only the declared composite, its pure preparations and the cited mathematics were used, which is the scope statement (d). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Where the mixed case stops.** Clause (c) deliberately does not claim that
  a non-product pure preparation fails to be separable in the general sense
  of the trace-norm closed convex hull; the general separability theory of
  mixed states is not developed in this pair.
- **Choice.** Only the Axiom of Countable Choice is used, through the tensor
  construction and the Schmidt theorem; no spectral theorem for unbounded
  operators enters this item.
