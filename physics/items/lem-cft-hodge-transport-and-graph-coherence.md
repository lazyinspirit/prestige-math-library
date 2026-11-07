---
id: lem-cft-hodge-transport-and-graph-coherence
kind: lemma
title: Hodge transport and coherent surface sewing from stable coinvariants
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- lem-cft-stable-coinvariant-descent-and-formal-sewing
- lem-cft-hodge-atiyah-action-and-sewing-compatibility
- lem-cft-rational-top-balance-and-nodal-normalization
- lem-cft-cylinder-sewing-coefficient-inverse
- lem-nondegenerate-local-holder-beltrami-coordinates
- thm-inverse-function-theorem-for-banach-spaces
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
- thm-symplectic-homology-basis-compact-riemann-surface
- thm-riemann-bilinear-relations
- def-cft-modular-functor-and-sewing
- thm-cft-segal-sewing-convergence
- thm-projective-embedding-compact-riemann-surface
- thm-qftx-projective-gaga-for-monad-data
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Damiolini and Woike, Modular Functors from Conformal Blocks of Rational
      Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: Sections3.2–3.4 and4.1–4.5; a concrete Hodge-transport extension and
      the coefficient-level graph compatibilities are specified below.
dependency_roles:
  lem-cft-stable-coinvariant-descent-and-formal-sewing: mathematical-premise
  lem-cft-hodge-atiyah-action-and-sewing-compatibility: mathematical-premise
  lem-cft-rational-top-balance-and-nodal-normalization: mathematical-premise
  lem-cft-cylinder-sewing-coefficient-inverse: mathematical-premise
  lem-nondegenerate-local-holder-beltrami-coordinates: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface: mathematical-premise
  thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface: mathematical-premise
  thm-symplectic-homology-basis-compact-riemann-surface: mathematical-premise
  thm-riemann-bilinear-relations: mathematical-premise
  def-cft-modular-functor-and-sewing: mathematical-premise
  thm-cft-segal-sewing-convergence: mathematical-premise
  thm-projective-embedding-compact-riemann-surface: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
dependency_level: 12
---

## Statement

For the stable coinvariant sheaves and logarithmic Atiyah action constructed in the preceding two lemmas, lifted parallel transport gives a modular $\mathsf{Surf}_{c/2}$-algebra, in the Hodge-extension convention of the modular-functor definition. Its homotopy fibers over the surface groupoids are nonempty and connected, its genus-zero restriction has the canonical Hodge section, and vacuum insertion supplies its capping maps. The graph maps are the actual top-coevaluation/formal-sewing maps, not additional coherence assumptions. This assertion uses no genus-one character transformation, tensor-category reconstruction or RT comparison.

## Facts & Assumptions

**Given:** The preceding actual stable coinvariant construction, with its finite semisimple label category and coefficient-level normalized sewing.

[F1] [[lem-cft-stable-coinvariant-descent-and-formal-sewing]] supplies finite bundles with base change, the auxiliary-vacuum construction, and the explicit formal sewing isomorphisms.

[F2] [[lem-cft-hodge-atiyah-action-and-sewing-compatibility]] supplies the global $(c/2)A_\Lambda$ action, its logarithmic extension, its vacuum compatibility, and the exact normal-direction residue $-h_i$ for normalized sewing.

[F3] [[lem-cft-rational-top-balance-and-nodal-normalization]] supplies the finite simple list, exact contragredient duality and the top-coevaluation factorization. [[lem-cft-cylinder-sewing-coefficient-inverse]] supplies the actual identity-cylinder inverse; [[thm-cft-segal-sewing-convergence]] supplies the analytic representative of the identical sewing coefficients.

[F4] [[lem-nondegenerate-local-holder-beltrami-coordinates]] supplies smooth local integration of every smooth two-dimensional Beltrami structure; uniqueness of two such coordinates follows from the chain rule, since their composition has vanishing antiholomorphic derivative. [[thm-inverse-function-theorem-for-banach-spaces]] supplies the local slice argument below. [[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]] and [[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]] supply its finite-dimensional obstruction and bounded elliptic inverse.

[F5] [[thm-symplectic-homology-basis-compact-riemann-surface]] and [[thm-riemann-bilinear-relations]] give a symplectic homology basis, positivity and the normalized periods used below. [[def-cft-modular-functor-and-sewing]] specifies the operadic structure to be constructed.

## Proof

1.1 Fix an oriented closed differentiable surface of genus g, with distinct marked points and nonzero real tangent vectors at them. The space J of its compatible smooth complex structures is contractible. Relative to one such structure its members are smooth Beltrami tensors with pointwise norm less than one; this is a convex open set of the Fréchet space of smooth tensors, and multiplication by a scalar in [0,1] contracts it. F4 makes every member integrable, so this is the actual space of Riemann-surface structures, not a replacement by nonintegrable almost-complex data. These compact surfaces are algebraic: [[thm-projective-embedding-compact-riemann-surface]] embeds one in projective space. A generic projection embeds it in projective three-space; the bad projection matrices are parametrized by two curve points and a point on their secant line, a real six-dimensional set imposing eight real linear conditions, and the tangent cases have smaller dimension. Countably many compact parameter charts show that these bad matrices have measure zero, by covering a Lipschitz lower-dimensional image with cubes of side epsilon and summing their volumes. The embedded analytic curve has a coherent ideal, by local submanifold coordinates. [[thm-qftx-projective-gaga-for-monad-data]] algebraizes that ideal and its inclusion into the structure sheaf, hence gives the required projective algebraic curve. Thus the stable algebraic charts in F1 do cover these objects. Removing small holomorphic disks around the marked points gives the parametrized-boundary surface. The choices of disk germs with fixed nonzero first derivative are contractible: for a germ rho its higher coefficients contract by $\rho_t(z)=t^{-1}\rho(tz)$, with limit its linear term, and disk radii may then be shrunk in a positive interval. Thus those choices introduce no new fundamental-groupoid ambiguity. [F4, construct]

1.2 We check the graph operations at the coefficient level. For disjoint internal edges the insertion tensors occupy different marked factors. Modulo any fixed total degree in their smoothing variables, every tensor contraction is finite, every simple-label sum is finite, and the two possible orders are therefore literally equal on tensor representatives. Passing to the actual quotient and its completed sheaf preserves that equality by F1. Vacuum insertion commutes with every such tensor and with the external coordinate action, and multiple vacuum insertions commute by their creation formula. The identity-cylinder contraction is the evaluation-coevaluation triangle in the finite semisimple label category; its realization on blocks is also the actual inverse in F3, so no cylinder relation has been assumed from a dimension formula. Thus all generating graph relations, including permutations of edges and interchange with capping, hold for the constructed maps. [F1, F3, algebra]

2.1 We justify using J to compute the smooth-curve stack's path groupoid. On Sobolev spaces of order s sufficiently large for first-jet evaluation, linearization of pullback by a diffeomorphism is the elliptic operator $\bar\partial$ on vector fields, with the finite conditions fixing the marked points and their tangent vectors. Its kernel is the space of holomorphic vector fields vanishing to order two at those marks, zero in the stable range. F4's Green estimate gives a bounded inverse on the complement of its finite cokernel. The cokernel is the marked-curve deformation space: this follows by taking the difference of local coordinate trivializations of a first-order deformation, whose Čech class is exactly that dbar obstruction. A smooth stable-curve chart has those tangent directions and no higher obstruction, as computed in F1's formal-chart proof. Its finite family therefore complements the image of dbar. The map from a Sobolev diffeomorphism near the identity and that finite family to the pulled-back complex structure has invertible derivative. It is C1 from order s+1 to order s: the family coefficients are smooth, and its first derivative is a finite sum of their compositions with the diffeomorphism and first derivatives of that diffeomorphism. F4's inverse-function theorem gives a local slice. For smooth structures its coordinate diffeomorphisms are smooth by the local Beltrami regularity in F4, repeated at every order. Hence these slices identify the analytic stack locally with the quotient by diffeomorphisms fixing the marked tangent data. In particular paths and their homotopies can be computed in this quotient. Fixing a boundary parametrization has the same isotopy classes: the derivative stabilizer of a nonzero real tangent vector is contractible, and a germ can be linearized by the displayed rescaling and extended to a local isotopy with a cutoff vector field. Thus the induced fundamental groupoid is the surface mapping-class groupoid of F5. No contractibility theorem for the identity component of the diffeomorphism group is needed. [F1, F4, step 1.1, algebra]

2.2 The pullback of the Hodge line to J has a specific nonzero section. Choose the symplectic cycles $a_j,b_j$ of F5 and the basis of holomorphic differentials normalized by $\int_{a_j}\omega_i=\delta_{ij}$. This exists because the A-period map is invertible: an element in its kernel has zero norm by the bilinear relation $i\int\omega\wedge\bar\omega>0$ and is therefore zero; both spaces have dimension g. Their wedge gives the section lambda, with the empty wedge one in genus zero. It depends smoothly on J by the finite-kernel Green construction, and holomorphically in every finite holomorphic family, since the periods of a relative holomorphic differential are holomorphic and the normalization matrix is invertible. Diffeomorphisms isotopic to the identity preserve its periods, so lambda is invariant under that identity component. [F4, F5, step 1.1, construct]

3.1 For a mapping class f write $f^*\lambda=j_f(J)\lambda$ at its transformed complex structure. The function $j_f:J\to\mathbb C^*$ is well defined on the mapping class, not on a chosen representative: the normalized-period formula depends only on its symplectic homology action and on the period matrix, both invariant under an isotopy. Since J is contractible, $j_f$ has a continuous logarithm $\ell_f$, unique up to $2\pi i\mathbb Z$. Pairs $(f,\ell_f)$ compose by addition of the logarithms with pullback of their arguments; the identity $j_{fg}=j_f\circ g\,j_g$ proves associativity. This is the integral central Hodge extension. For a scalar alpha push its central subgroup $2\pi i\mathbb Z$ out to $\mathbb C^*$ by $2\pi i n\mapsto e^{-2\pi i\alpha n}$. The sign agrees with subtracting the frame-change one-form from an alpha-Atiyah connection. This is a concrete model of the Hodge extension $\mathsf{Surf}_\alpha$ in F5. Every mapping class has such lifts and the fiber groupoid is a one-object central groupoid, hence nonempty and connected. In genus zero lambda is identically one, so the logarithm zero gives a canonical section. [F2, F5, step 2.2, construct]

4.1 Pull a coinvariant bundle to J and use lambda to split its alpha-Hodge Atiyah action, with $\alpha=c/2$. This gives a flat connection by F2. Finite matrix Picard iteration transports along chart paths; its commutator identity makes transport unchanged under a small rectangular homotopy, by differentiating the two ordered transport products. Subdivision gives homotopy invariance for arbitrary path homotopies. J is contractible, so these maps identify all fibers with one reference fiber. A mapping class isomorphism in this trivialization has scalar connection variation $\alpha\,d\log j_f$. Multiplying it by $e^{-\alpha\ell_f}$ gives a constant map. The logarithm composition rule of step 3.1 proves that these constant maps form an honest action of $\mathsf{Surf}_\alpha$, with the prescribed action of its central pushout. Without this lift the action is projective. This proves the transport assertion without importing a Riemann–Hilbert equivalence. [F1, F2, step 2.1, step 3.1, algebra]

5.1 These equalities also hold for lifted transport. The normal-direction formula of F2 includes the residual scalar $-h_i$; equivalently the conformal horizontal sector is $q^{h_i}$ times its normalized integer-degree sector. Thus its meridian transport is the actual $e^{2\pi i h_i}$, with the corresponding dual label convention, rather than an artificially trivial residue. The tangential actions agree by F2. The Hodge determinant normalization at a node is the exact-sequence determinant of the normalizing Hodge spaces and the residue-cycle space of its dual graph. Exact-sequence exterior powers commute under refinement of a filtration: checking on an ordered split basis proves this, and triangular changes do not alter it. Hence the lifted Hodge lines and their logarithms satisfy the same multiple-edge relations as in step 1.2, including the determinant signs under permutations. A formal sewing map intertwining these logarithmic actions gives the induced boundary-specialization transport: in a sector trivialization solve the regular singular normal equation, factor its $q^{h_i}$ as just computed, and take its constant coefficient. Uniqueness of this operation and the finite coefficient equalities make successive specializations commute. On a chosen small nonzero smoothing the map agrees with the analytic sewing by the identical convergent coefficients of the already proved ordinary sewing theorem. This yields exactly the graph-operation maps on surface transport. [F1, F2, F3, step 4.1, step 1.2, algebra]

6.1 To include arities not in the stable range, cap or add vacuum boundaries. F2's connection-preserving propagation identifies the results independently of the number and position of those auxiliary boundaries, by step 1.2. The disk value is the vacuum object: two-point sphere Ward identities identify its pairing with the simple unit V and give zero on every other simple label; self-contragredience gives its dual V. The annulus identity is the triangle already proved. The resulting extension and functors therefore have insertion of vacua. Each label functor takes values in finite-dimensional vector spaces by F1 and is right exact because the finite semisimple label category has split exact sequences. All maps are natural in label homomorphisms by their tensor and residue definitions. The extension and graph constructions above supply the extension and coherent sewing, and step 4.1 supplies its mapping-class actions. These are exactly the modular-algebra axioms of F5, proving the Statement. [F1, F2, F3, F5, step 1.2, step 5.1, algebra] ∎
