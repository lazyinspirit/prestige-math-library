---
id: lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology
kind: lemma
title: "Whitney sum defines the connected coalgebra on stable Thom cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - lem-kification-compact-tests-and-finite-constructions
  - lem-compact-cw-images-have-finite-cell-support-without-choice
  - def-axiom-of-choice
  - def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - def-smash-product-of-based-spaces
  - lem-relative-singular-product-chain-equivalence-for-cw-pairs
  - lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses
  - thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§12, printed pp. 22–24: Whitney sum, Thom cohomology, and the coalgebra formula; the complete inverse-limit verification is local."
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 16: Thom classes, external products, and the Whitney formula; finite-rank continuity and coalgebra axioms are proved locally."
verification:
  precheck: pass
---

## Statement

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. Assume the displayed identification M=F₂[w₁,w₂,…]U and the formulas of [[def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology]]. Then Δ_M:M→M⊗M is a degree-preserving coassociative coproduct, ε_M is a counit, and η(1)=U is a coaugmentation. M is connected and nonnegatively graded. For each p,q, the rankwise Thom pullback induced by γ_p⊕γ_q agrees with Δ_M under the Thom isomorphisms, commutes with the fixed-coordinate stabilization in each factor, and therefore induces the stated map on the degreewise inverse-limit invariant.

## Facts & Assumptions

**Given:** AC; the finite-rank Thom spaces $T_p=\mathrm{Th}(\gamma_p)$ with mod-two Thom classes $u_p$; the external direct sum classifying maps $\mu_{p,q}:BO(p)\times BO(q)\to BO(p+q)$; and the coproduct formulas $\Delta_P(w_k)=\sum_{i+j=k}w_i\otimes w_j$, $\Delta_M(fU)=\Delta_P(f)(U\otimes U)$ of [[def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology]].

[F1] The stable Grassmannian classification supplies the classifying map of an external direct sum and its bundle isomorphism, uniquely up to homotopy; the mod-two orientation of every real bundle and the external Thom-product formula identify the Thom class of a sum with the external product of the Thom classes, and the Whitney formula computes the Stiefel–Whitney classes of a sum ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-r-oriented-vector-bundle-and-orientation-local-system]], [[thm-external-product-and-whitney-sum-formulas-for-thom-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F2] The Thom CW structure has finite-dimensional mod-two homology in each degree, so the relative field Künneth theorem applies to the based smash with finitely many summands ([[lem-relative-singular-product-chain-equivalence-for-cw-pairs]], [[lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses]], [[def-smash-product-of-based-spaces]]); the prespectrum definition and its degreewise constancy lemma identify the inverse limit and its transition maps ([[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]], [[def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum]], [[lem-stable-thom-cohomology-is-degreewise-eventually-constant]]).

[F3] Compact CW images have finite cell support, kification preserves compact test maps and cubical homotopies, and field evaluation is an isomorphism; the same evaluation assertion for relative singular chains follows from the cohomological UCT over a field, whose Ext term vanishes; good-pair quotient homology is the reduced quotient homology ([[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]]), so field evaluation transfers it to cohomology ([[lem-compact-cw-images-have-finite-cell-support-without-choice]], [[lem-kification-compact-tests-and-finite-constructions]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

## Proof

**Proof technique:** direct.

1.1 Embed the first ambient coordinate space in the odd coordinates and the second in the even coordinates. Their orthogonal sum defines $\mu_{p,q}:BO(p)\times_k BO(q)\to BO(p+q)$, with the fiber isometry $(v,w)\mapsto J_{\rm odd}v+J_{\rm even}w$. On every pair of finite Grassmannian stages these are continuous frame and bundle maps. Every compact Hausdorff test into the product projects into finite base subcomplexes, hence finite Grassmannian stages; the compactly generated map-out test proves continuity globally. The fiber isometry and the radial product-disk homeomorphism from the prespectrum construction give a continuous based map $T_p\wedge T_q\to T_{p+q}$. No additional product-base paracompactness or CW-type assertion is needed. To apply the Whitney and external Thom-class formulas within their stated scope, first restrict to finite Grassmannian stages, whose product is a finite compact Hausdorff CW complex by the characteristic-product-disk attachment test. There both formulas apply to the actual bundles with their canonical mod-two orientations. These finite-stage identities determine the global cohomology identity: every singular cycle in the base product, or in the relative product used for the Thom smash, projects into finite stage subcomplexes by compact support. The natural field evaluation isomorphism (also for relative free singular chains, by cohomological UCT over the field) detects equality on these cycles. Kification leaves the compact singular simplices and their homotopies unchanged. Thus the finite-stage normalized Thom and Whitney identities hold globally and the computation is independent of the classifying choices. At finite ranks, all mod-two cohomology groups in a fixed degree are finite-dimensional: the Thom isomorphism identifies them with homogeneous pieces of F₂[w₁,…,w_p], and the Schubert CW model has finitely many cells in each degree. The Thom CW structure therefore has finite-dimensional cellular chains in each degree, so its mod-two homology is finite-dimensional and free in each degree. The passage from relative product to smash also has an explicit good-pair check. On each positive-rank Thom space let $\lambda=1-\|v\|$ off the basepoint and $\lambda(*)=0$, a continuous quotient function; at rank zero $T_0=S^0$ use values zero and one. Choose a continuous cutoff $c:[0,1]\to[0,1]$ equal to one on $[0,1/4]$ and zero on $[1/2,1]$. In the product, the open neighborhood $\delta=\min(\lambda(x),\lambda(y))<1/4$ of the closed wedge retracts onto the wedge by the homotopy that replaces each deficiency $\lambda_j$ by $\lambda_j-t\delta c(\lambda_j)$, retaining its base and fiber direction. This increases the fiber norm without exceeding one, collapses a coordinate of minimum deficiency at time one, and fixes the wedge since there $\delta=0$. At a zero vector the cutoff is zero, so the formula is continuous there; the disk/sphere quotient and compact tests establish continuity everywhere, including the collapsed basepoint. The rank-zero case is fixed throughout. The good-pair quotient theorem and field UCT therefore identify relative product cohomology with reduced smash cohomology; kification leaves the singular complexes unchanged. Now the relative field Künneth theorem for the CW pairs (T_p,*) and (T_q,*) gives H̃^{p+q+d}(T_p∧T_q;F₂) ≅ ⊕_{a+b=d} H̃^{p+a}(T_p;F₂)⊗H̃^{q+b}(T_q;F₂). Only finitely many summands occur, since M has no negative degrees. [given, F1, F2, F3]

2.1 w_k U ↦ Σ_{i+j=k}(w_iU)⊗(w_jU), U ↦ U⊗U. Indeed, the base class pulls back by w_k(E⊕F)=Σw_i(E)w_j(F), and the Thom class pulls back to the external product of the two normalized Thom classes. This formula is independent of the chosen classifying maps. In the following square, μ_{p,q} also denotes the induced based Thom multiplication T_p∧T_q→T_{p+q}; its cohomology pullback is the rankwise map just computed. Compatibility with rank transitions is the cohomological commutativity of this square for stabilization of the first factor: H̃^{p+q+1+d}(T_{p+q+1}) --μ_{p+1,q}^*--> H̃^{p+q+1+d}(T_{p+1}∧T_q) | ρ_{p+q}(d) | ρ_p(a)⊗id v v H̃^{p+q+d}(T_{p+q}) --μ_{p,q}^*----> H̃^{p+q+d}(T_p∧T_q), where on a Künneth summand a+b=d, the right vertical map applies ρ_p(a) to the first factor and the identity to the second. On bundles, the two composites classify respectively (ε¹⊕γ_p)⊕γ_q and ε¹⊕(γ_p⊕γ_q); associativity and the coordinate permutation of the ordered direct sum give the bundle isomorphism over fixed-coordinate stabilization. It preserves mod-two Thom normalization, and the Whitney formula leaves each w_i unchanged under adjoining the trivial line (with indices above a finite rank truncated to zero). Naturality and homotopy uniqueness of the classifying maps therefore make the square commute. The same argument stabilizes the second factor. Consequently the rankwise pullbacks define a map Δ_M:M^d→⊕_{a+b=d}M^a⊗M^b. [step 1.1, F1, F2]

3.1 Coassociativity follows from coassociativity of Δ_P and Δ_M(U)=U⊗U: on w_k both iterates of Δ_P are the sum over i+j+l=k, and equality on polynomial generators extends multiplicatively to P. Define ε_M(fU)=f(0), the constant term of f. The two counit identities follow from the terms with i=0 or j=0. The degree-zero part is F₂U, so M is a connected nonnegatively graded coaugmented counital coalgebra. This constructs the coalgebra on the specified prespectrum invariant; it does not identify M with represented spectrum cohomology. [step 2.1, F1] ∎
