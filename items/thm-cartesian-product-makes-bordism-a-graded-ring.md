---
id: thm-cartesian-product-makes-bordism-a-graded-ring
kind: theorem
title: Cartesian product makes bordism a graded ring
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - lem-cylinders-give-reflexivity-of-cobordism
  - lem-collar-gluing-and-corner-smoothing-give-transitivity
  - thm-smooth-cobordism-is-an-equivalence-relation
  - def-null-cobordant-closed-manifold
  - def-unoriented-and-oriented-bordism-groups
  - thm-disjoint-union-makes-bordism-classes-abelian-groups
  - lem-product-boundary-formula-for-oriented-manifolds
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds
  - prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth
  - def-product-orientation
  - def-induced-boundary-orientation
  - def-compact-space
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-graded-ring-and-graded-module
  - def-commutative-ring
  - def-ring-homomorphism
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "amended_repair"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a adjudication; evidence: research/frontier-38-owner-30-alpha-batch-13-5a.md; immutable carrier: research/frontier-38-owner-30-step5-hash-13-post-5a.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 5a-batch-13 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Cartesian product and the ring structure, Definition 1.33 and (1.35), printed pp.12-14"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Theorem 8.2.11 and the products paragraph, printed pp.247-248"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Section 17, graded ring structure and graded commutativity, printed p.202"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Definitions 6.22 and 6.24, electronic pp.117-118"
---

## Statement

For both theories set $[M]\cdot[N]=[M\times N]$. This is a well-defined
biadditive associative product $\Omega_m\times\Omega_n\to\Omega_{m+n}$
distributing over disjoint union, and the class of a one-point manifold (positively oriented in the oriented theory) is a
two-sided unit. Hence $\Omega_*^{O}=\bigoplus_n\Omega_n^{O}$ is a nonnegatively
graded commutative ring ([[def-graded-ring-and-graded-module]],
[[def-commutative-ring]]) with unit $[\mathrm{pt}]$, and
$\Omega_*^{SO}=\bigoplus_n\Omega_n^{SO}$ carries an associative, biadditive,
unital product with the same unit
([[def-unoriented-and-oriented-bordism-groups]],
[[thm-disjoint-union-makes-bordism-classes-abelian-groups]]).

In the oriented theory the product is graded-commutative: the canonical
transposition diffeomorphism $M\times N\to N\times M$ has orientation sign
$(-1)^{mn}$ for $m=\dim M$, $n=\dim N$, so
$$[M][N]=(-1)^{mn}[N][M],$$
the Koszul sign rule; in the unoriented theory the product is commutative. The
forgetful map $\Omega_*^{SO}\to\Omega_*^{O}$ is a ring homomorphism. No choice
principle is used.

## Facts & Assumptions

**Given:** Closed smooth manifolds $M,N,P$ of dimensions $m,n,p$, closed oriented manifolds $(M,o),(N,p')$ in the oriented theory, and their bordism classes.

[F1] If $W_1$ is a bordism from $M_0$ to $M_1$ and $W_2$ a bordism from $M_1$ to $M_2$, the collar gluing yields a bordism from $M_0$ to $M_2$, and in the oriented case the orientations glue when the induced orientations on the common component are opposite ([[lem-collar-gluing-and-corner-smoothing-give-transitivity]]).

[F2] Products of smooth manifolds carry the product smooth structure and the product orientation; if one factor is closed the boundary of the product is the product of the other factor's boundary with that closed factor, with the corner-free signs of the product-boundary formula ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-product-orientation]], [[lem-product-boundary-formula-for-oriented-manifolds]], [[def-induced-boundary-orientation]]).

[F3] The cylinder $M\times[0,1]$ with its product collars is a bordism from $M$ to $M$, and the product orientation $(-1)^m(o\otimes dt)$ makes it an oriented bordism from $(M,o)$ to $(M,o)$ ([[lem-cylinders-give-reflexivity-of-cobordism]]).

[F4] Disjoint union makes the bordism classes abelian groups with $[M]+[N]=[M\sqcup N]$; canonical bijections of finite disjoint unions that fix or permute summands are diffeomorphisms preserving the disjoint-union orientations, and diffeomorphic closed manifolds have equal unoriented classes, while orientation-preserving diffeomorphic closed oriented manifolds have equal oriented classes ([[thm-disjoint-union-makes-bordism-classes-abelian-groups]], [[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]], [[prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth]], [[def-unoriented-and-oriented-bordism-groups]], [[def-null-cobordant-closed-manifold]]).

[F5] A nonnegatively graded ring is a commutative ring $S=\bigoplus_{n\ge0}S_n$ with $S_mS_n\subseteq S_{m+n}$; a ring homomorphism preserves addition, multiplication and unit ([[def-graded-ring-and-graded-module]], [[def-commutative-ring]], [[def-ring-homomorphism]]).

## Proof

1.1 (The product is well defined.) Let $W_1$ be a bordism from $M_0$ to $M_1$ of dimension $m+1$ and $W_2$ a bordism from $N_0$ to $N_1$ of dimension $n+1$. By [F2] the products $W_1\times N_0$ and $M_1\times W_2$ are compact smooth manifolds with boundary, with boundary decompositions $(M_0\times N_0)\sqcup(M_1\times N_0)$ and $(M_1\times N_0)\sqcup(M_1\times N_1)$, and with the collars $\theta_i\times\operatorname{id}_{N_0}$ and $\operatorname{id}_{M_1}\times\theta'_j$ onto the corresponding parts. In the oriented case orient $W_1\times N_0$ by its product orientation and $M_1\times W_2$ by $(-1)^m$ times its product orientation. The first piece has incoming orientation $-o_{M_0}\otimes o_{N_0}$ and outgoing orientation $o_{M_1}\otimes o_{N_0}$. The product-boundary formula [F2] contributes a further $(-1)^m$ to both faces of the second piece, cancelling its selected orientation factor; thus those faces carry $-o_{M_1}\otimes o_{N_0}$ and $o_{M_1}\otimes o_{N_1}$. In particular the two induced orientations at the common component $M_1\times N_0$ are opposite, and the outer faces have the required incoming and outgoing product orientations. Gluing along the common collars by [F1] gives a bordism from $M_0\times N_0$ to $M_1\times N_1$, oriented when both given bordisms are. Hence cobordant representatives give cobordant products: the product is well defined on $\Omega_m\times\Omega_n$ in both theories. [F1, F2]

1.2 (Diffeomorphisms give cobordisms.) If $\varphi:M\to M'$ is a diffeomorphism of closed smooth $m$-manifolds, then $W=M\times[0,1]$ with the collars $\theta_0(s,x)=(x,s)$ and $\theta_1(s,y)=(\varphi^{-1}(y),1+s)$ is a bordism from $M$ to $M'$; if $\varphi$ is orientation-preserving between $(M,o)$ and $(M',o')$, the orientation $(-1)^m(o\otimes dt)$ of [F3] makes it an oriented bordism. Thus diffeomorphic closed manifolds represent the same class, and orientation-preserving diffeomorphic closed oriented manifolds represent the same oriented class. [F3, F4]

2.1 (Biadditivity, associativity, distributivity, unit.) Let $M,M'$ be closed $m$-manifolds and $N$ a closed $n$-manifold. The canonical diffeomorphism $(M\sqcup M')\times N\to(M\times N)\sqcup(M'\times N)$ is orientation-preserving in the oriented theory, so by step 1.2 and [F4] $([M]+[M'])\cdot[N]=[M][N]+[M'][N]$; the same argument in the second variable gives biadditivity (distributivity over disjoint union). The canonical diffeomorphism $(M\times N)\times P\to M\times(N\times P)$ is orientation-preserving for the iterated product orientations and gives $([M][N])[P]=[M]([N][P])$. Let $\mathrm{pt}$ carry the positive sign in the oriented theory. Then $\mathrm{pt}\times M=M$ and $M\times\mathrm{pt}=M$ as smooth (oriented) manifolds, so $[\mathrm{pt}][M]=[M]=[M][\mathrm{pt}]$; the product is graded in the sense $[M][N]\in\Omega_{m+n}$. [F2, F4, step 1.2]

2.2 (Graded commutativity; the unoriented commutative case.) Let $\tau:M\times N\to N\times M$, $\tau(x,y)=(y,x)$, be the transposition. Its differential interchanges the $m$ tangent directions of the first block with the $n$ of the second, so it multiplies the ordered determinant by the sign of that permutation, which is $(-1)^{mn}$: $\tau$ is orientation-preserving from $(M\times N,(-1)^{mn}(o_M\otimes o_N))$ to $(N\times M,o_N\otimes o_M)$. By step 1.2 the two oriented classes agree, so $[M][N]=[(M\times N,o_M\otimes o_N)]=(-1)^{mn}[(N\times M,o_N\otimes o_M)]=(-1)^{mn}[N][M]$ in $\Omega_{m+n}^{SO}$. In the unoriented theory $\tau$ is a diffeomorphism, so $[M\times N]=[N\times M]$ and the product is commutative on the nose. [F2, step 1.2]

3.1 (Ring structure and the forgetful map.) By steps 2.1 and 2.2 the direct sum $\Omega_*^{O}$ is a nonnegatively graded commutative ring with unit $[\mathrm{pt}]$ in the sense of [F5], and $\Omega_*^{SO}$ is a graded-commutative ring with the same unit and the Koszul sign rule; associativity, biadditivity, distributivity over the group operation, the grading and the unit are the assertions proved in step 2.1, and the commutativity statements are step 2.2. The forgetful map sends $[M,o]+[N,p']$ to $[M\sqcup N]$ and $[M,o]\cdot[N,p']$ to the underlying class of $(M\times N,o\otimes p')$, which is $[M\times N]=[M]\cdot[N]$, and it preserves the unit; hence it is a ring homomorphism by [F5]. Everything is built from products of manifolds and supplied collars, so no choice principle is used. [F5, step 1.1, step 2.1, step 2.2] ∎
