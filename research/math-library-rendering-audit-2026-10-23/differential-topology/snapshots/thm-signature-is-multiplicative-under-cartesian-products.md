---
id: thm-signature-is-multiplicative-under-cartesian-products
kind: theorem
title: "The signature is multiplicative under Cartesian products"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 8
deps:
  - lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia
  - def-middle-dimensional-intersection-form
  - lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-a-half-dimensional-isotropic-subspace-forces-zero-signature
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - lem-closed-oriented-pid-manifolds-have-finitely-generated-homology
  - lem-kronecker-pairing-is-multiplicative-under-cross-products
  - lem-fundamental-class-of-a-product-of-closed-manifolds
  - thm-canonical-tangent-and-cotangent-splittings-for-products
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - def-product-orientation
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Lemma 19.3(2), original p. 224: multiplicativity of the signature via the Kunneth isomorphism"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.25, printed p. 95: product multiplicativity of the signature"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, property (2), printed p. 34: multiplicativity of the signature under products"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For closed oriented smooth manifolds $M^{4a}$ and $N^{4b}$, with
$M\times N$ carrying the product orientation ([[def-product-orientation]],
[[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]),
$$\sigma(M\times N)=\sigma(M)\,\sigma(N).$$

## Facts & Assumptions

**Given:** AC; closed oriented smooth $M^{4a}$, $N^{4b}$, $k=a+b$, and the product orientation on $M\times N$.

[F1] $\sigma$ is the inertia difference of the nondegenerate middle form $Q_M$ ([[def-signature-of-a-closed-oriented-four-k-manifold]], [[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]]), and $Q_P(u,v)=\langle u\smile v,[P]\rangle$ ([[def-middle-dimensional-intersection-form]]).

[F2] Since $M,N$ are closed, their (co)homology is finitely generated, in particular finite free over the field $\mathbb R$; the cross product is a ring isomorphism $H^*(M;\mathbb R)\mathbin{\widehat\otimes}H^*(N;\mathbb R)\to H^*(M\times N;\mathbb R)$ for the graded tensor multiplication $(\alpha\otimes\beta)(\alpha'\otimes\beta')=(-1)^{|\beta||\alpha'|}(\alpha\smile\alpha')\otimes(\beta\smile\beta')$ ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]], [[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]).

[F3] The Kronecker pairing is multiplicative under cross products: $\langle\alpha\times\beta,c\times d\rangle=\langle\alpha,c\rangle\langle\beta,d\rangle$, and the fundamental class of a product is $[M\times N]=[M]\times[N]$ ([[lem-kronecker-pairing-is-multiplicative-under-cross-products]], [[lem-fundamental-class-of-a-product-of-closed-manifolds]]).

[F4] Over the field $\mathbb R$, Poincare duality gives $\dim_{\mathbb R}H^i(M;\mathbb R)=\dim_{\mathbb R}H^{4a-i}(M;\mathbb R)$ and similarly for $N$, and the pairings $H^i(M)\times H^{4a-i}(M)\to\mathbb R$ and $H^j(N)\times H^{4b-j}(N)\to\mathbb R$ are perfect for every $i,j$ ([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]).

[F5] A nondegenerate symmetric form with a totally isotropic subspace of exactly half the dimension has signature zero ([[lem-a-half-dimensional-isotropic-subspace-forces-zero-signature]]), and the tensor product of nondegenerate symmetric forms has multiplicative inertia ([[lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia]]).

[F6] The tangent bundle of a product splits canonically as $T(M\times N)\cong TM\boxplus TN$ for the product smooth structure ([[thm-canonical-tangent-and-cotangent-splittings-for-products]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

## Proof

**Proof technique:** direct; split the middle cohomology of the product by Kunneth and kill the off-middle blocks by the isotropic lemma.

1.1 Kunneth decomposition: by [F2], $H^{2k}(M\times N;\mathbb R)=\bigoplus_{i=0}^{2k}V_i$ with $V_i=H^i(M;\mathbb R)\otimes H^{2k-i}(N;\mathbb R)$, and the ring structure is the graded tensor product. [given, F2]

1.2 For $x\otimes y\in V_i$ and $x\prime\otimes y\prime\in V_j$ with $i+j=4a$, the ring formula [F2] and the matching-degree evaluation [F3] give $Q_{M\times N}(x\otimes y,x\prime\otimes y\prime)=(-1)^{(2k-i)j}\langle x\smile x\prime,[M]\rangle\langle y\smile y\prime,[N]\rangle$. If $i+j\ne4a$, one factor cup class has degree greater than the dimension of its manifold, so vanishes by [F2]. Thus $V_i$ pairs only with $V_{4a-i}$; the factors in the displayed formula are complementary-degree cup pairings, rather than middle forms unless $i=j=2a$. [given, F1, F2, F3]

2.1 Middle block: taking $i=j=2a$ in step 1.2, the sign is $(-1)^{|y||x'|}=(-1)^{2b\cdot2a}=+1$, so $Q_{M\times N}$ restricted to $V_{2a}=H^{2a}(M)\otimes H^{2b}(N)$ is exactly $Q_M\otimes Q_N$. [step 1.2, F1]

2.2 Off-middle part is nondegenerate: by [F4] $\dim V_i=\dim V_{4a-i}$ for every $i$, and the pairing of $V_i$ with $V_{4a-i}$ induced by $Q_{M\times N}$ is the tensor product of the perfect pairings $H^i(M)\times H^{4a-i}(M)\to\mathbb R$ and $H^{2k-i}(N)\times H^{4b-2k+i}(N)\to\mathbb R$, hence perfect: in dual bases the tensor pairing matrix is a nonzero scalar times an identity matrix, the scalar being the fixed Koszul sign. Set $V_i=0$ when $i$ is outside $0,\dots,2k$; if a block has no complementary index in that range it is zero by the dimension bounds in [F2]. Therefore $Z=\bigoplus_{i\ne2a}V_i$ is nondegenerate: a class in $Z$ pairing to zero with all of $Z$ must have every block component zero, testing against the complementary block. [given, F2, F4, step 1.2]

2.3 Half-dimensional isotropic subspace: $W=\bigoplus_{i<2a}V_i\subseteq Z$ is totally isotropic by step 1.2, since $i,j<2a$ give $i+j<4a$ and hence vanishing pairing; and $2\dim W=\dim Z$ because $Z$ is the direct sum of the pairs $V_i\oplus V_{4a-i}$ with $i<2a$ and $\dim V_i=\dim V_{4a-i}$ by [F4]. [step 1.2, F4]

3.1 The off-middle blocks contribute nothing: by steps 2.2 and 2.3, $Z$ carries a nondegenerate symmetric form with the half-dimensional totally isotropic subspace $W$, so $\operatorname{sign}(Q_{M\times N}|_Z)=0$ by [F5]. Moreover $Z\perp V_{2a}$ by step 1.2, and $V_{2a}$ is nondegenerate because $Q_{M\times N}$ is nondegenerate and $Z$ is nondegenerate with $H^{2k}(M\times N;\mathbb R)=Z\oplus V_{2a}$; hence the inertia data of $Q_{M\times N}$ are the sums of those of $Q|_{Z}$ and $Q|_{V_{2a}}$. [step 1.2, step 2.1, step 2.2, step 2.3, F1, F5]

4.1 Therefore $\sigma(M\times N)=\operatorname{sign}(Q|_{Z})+\operatorname{sign}(Q|_{V_{2a}})=0+\operatorname{sign}(Q_M\otimes Q_N)=\sigma(M)\sigma(N)$, using step 3.1, step 2.1 and the multiplicativity of inertia under tensor products [F5]; the product smooth structure and orientation used are those of [F6] and the statement. [step 2.1, step 3.1, F5, F6] ∎
