---
id: lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences
kind: lemma
title: "Standard rational quiver vanishing cycles realize the critical coefficient package"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
- def-axiom-of-choice
- def-quiver-potential-and-monodromic-vanishing-cycle-data
- thm-normalized-rational-vanishing-cycles-have-coherent-operations
- def-intrinsic-quotient-stack-borel-moore-grading
- lem-quiver-parabolic-levi-borel-model-comparisons
- thm-quiver-quotient-stack-borel-moore-operation-package
- lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
- def-quiver-representation-stacks-and-exact-sequence-correspondences
- lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
- lem-quiver-potential-trace-is-additive-on-extensions
- thm-constructible-six-functors-proper-base-change-and-verdier-duality
- thm-generic-smoothness-characteristic-zero
- lem-zero-dimensional-classical-variety-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "David Massey, The Sebastiani-Thom Isomorphism in the Derived Category"
    url: "https://arxiv.org/pdf/math/9908101"
    locator: "Entire proof, including naturality and monodromy; expanded in the local normalized-vanishing-cycle supplier."
  - title: "Ben Davison, The critical CoHA of a quiver with potential"
    url: "https://arxiv.org/pdf/1311.7172v5"
    locator: "Sections 2.2, 2.5, 2.7 and 3.1–3.2, full relevant arguments; proper coefficient morphism and multiplication, not a closed-restriction isomorphism."
---

## Statement

Assume AC. For any finite complex quiver $Q$ and finite potential $W$, put $X_{\mathbf d}=\operatorname{Rep}_Q(\mathbf d)$, $g_{\mathbf d}=\dim G_{\mathbf d}$ and $f_{\mathbf d}=\operatorname{Tr}(W)_{\mathbf d}$. Let $V$ be the normalized rational functor of [[thm-normalized-rational-vanishing-cycles-have-coherent-operations]]. Its coefficients
$$\Phi_{\mathbf d,z}=V_{f_{\mathbf d}-z}\mathbb Q_{X_{\mathbf d}},\qquad K_{\mathbf d,z}=D^{G_{\mathbf d}}_{X_{\mathbf d}}\Phi_{\mathbf d,z}[-2g_{\mathbf d}]$$
are equivariant bounded constructible complexes; $D^G$ has the variety dualizing normalization. With positive monodromy $T$ on $\Phi$, put contragredient transport $D(T^{-1})$ on $K$.

These $K$ give a standard realized instance of the complete generic coefficient datum in [[def-quiver-potential-and-monodromic-vanishing-cycle-data]]. On an extension stack, the proper coefficient map is the dual of
$$\Phi_{\mathbf a+\mathbf b,z}\longrightarrow Rp_*\Psi_{\mathbf a,\mathbf b,z},\qquad \Psi_{\mathbf a,\mathbf b,z}=V_{f_{\mathbf a+\mathbf b}\circ p-z}\mathbb Q.$$
Thom–Sebastiani identifies $\Psi$ on each value-pair summand with $q^*(\Phi_{\mathbf a,z_1}\boxtimes\Phi_{\mathbf b,z_2})$, where $z=z_1+z_2$. It is not an asserted isomorphism to $p^*\Phi_{\mathbf a+\mathbf b,z}$. The realized operations have proper degree zero and smooth degree $-2\chi_Q(\mathbf b,\mathbf a)$, and obey composition, external-product, monodromy, proper/smooth base-change and flag-pasting coherence. This includes loops, multiple arrows, zero coordinates, arbitrary critical values and the empty quiver. For $W=0$ it is precisely the ordinary intrinsic rational Borel–Moore operation package.

## Facts & Assumptions

**Given:** $Q,W$, the dimension vectors, the representation and extension stacks, and the subobject-first order.

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]], [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]] and [[lem-quiver-potential-trace-is-additive-on-extensions]] give smooth block atlases, proper invariant-flag forgetting, relative dimension $r=e-u=-\chi_Q(\mathbf b,\mathbf a)$ and equality of the restricted potential with the sum of the diagonal potentials.

[F2] [[thm-normalized-rational-vanishing-cycles-have-coherent-operations]] proves standard-coefficient constructibility, normalized duality, smooth commutation, actual coherent TS, angular monodromy and the proper coefficient map obtained from the constant-sheaf unit.

[F3] [[def-intrinsic-quotient-stack-borel-moore-grading]], [[lem-quiver-parabolic-levi-borel-model-comparisons]] and [[thm-quiver-quotient-stack-borel-moore-operation-package]] give actual induced varieties for parabolics, their Levi comparisons, the intrinsic finite-stage index and the smooth map as a vector-bundle pullback followed by inverse affine-fibration pullback. They give the flag Cartesian diagrams and positive orientations, not critical coefficients.

[F4] [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] gives faithful bounded-Hom comparison for fixed bounded equivariant coefficients on sufficiently acyclic frames, with common-product and triple-product cocycles.

[F5] [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] gives normalized fixed-group duality, proper trace and the coherent ordinary operations used on those frame varieties.

[F6] [[thm-generic-smoothness-characteristic-zero]] and [[lem-zero-dimensional-classical-variety-finite]] imply that a regular function on a smooth finite-type complex variety has only finitely many critical values: outside a nonempty open of the affine line its differential is onto, and the proper closed complement is finite. Apply componentwise, treating constant components directly.

[A1] [[def-axiom-of-choice]] is inherited through [F1]–[F6]. [[def-quiver-potential-and-monodromic-vanishing-cycle-data]] defines the generic interface but is not used as an assumption that the standard instance already exists.

## Proof

**Proof technique:** direct.

1.1 The action and projection maps $G_{\mathbf d}\times X_{\mathbf d}\to X_{\mathbf d}$ are smooth and pull back $f_{\mathbf d}$ to the same function. Smooth commutation [F2] therefore identifies their pullbacks of $\Phi_{\mathbf d,z}$. The identity and cocycle equations are the equations of the inverse-image maps of the same support triangles, so these are actual Cartesian action-nerve coefficients, not unrelated equivariance isomorphisms. Constructibility and boundedness follow from [F2], and normalized equivariant duality [F5] gives $K$ as stated. Angular continuation commutes with every descent map, hence induces the specified monodromy on both coefficients. [F1, F2, F5, given, construct]

2.1 Let a free frame $U$ have dimension $t$, put $X_U=X\times_GU$, and let $\Phi_U=V_{f_U}\mathbb Q_{X_U}$. Pulling back to $X\times U$ identifies this with the pullback of $\Phi$ by smooth commutation; the locally split descent of [F3]–[F4] identifies the coefficients downstairs. The representative of the intrinsic $K$ is $D_{X_U}\Phi_U[-2t]$: normalized equivariant duality removes $2(t-g)$ and the further intrinsic shift removes $2g$. Its degree-$(-n)$ cohomology is therefore $H^{-n-2t}(X_U,D\Phi_U)$. This is the critical analogue of the intrinsic index $n+2t$, and for standard coefficients it equals $H_{n+2g}^{\mathrm{BM},G}(X;\Phi)$ in the original variety-normalized convention. [F2, F3, F4, F5, step 1.1, algebra]

3.1 The unshifted coefficient $\Phi$ on the fixed presentation has bounded amplitude by [F2]. Its pullbacks to frame factors have the same amplitude. On a local product frame chart the unit comparison is the fixed coefficient complex tensored with the fibre cochain complex; [F4]'s Stiefel gap tends to infinity, so its unit cone has lower bound tending to infinity after that fixed finite width. Thus every fixed-degree Hom and group comparison stabilizes. The normalized dual representative in step 2.1 has the same fixed downstairs bounds after removing the stated auxiliary shift; no bound on the unnormalized dual of growing-dimensional varieties is presumed. On a common product frame bundle both coefficient identifications are the identity on the same pullback from $X$, so they preserve morphisms, operations, monodromy and the triple-product cocycle. This checks the actual hypotheses for [F4] on these vanishing-cycle coefficients. [F2, F3, F4, F5, step 1.1, step 2.1]

4.1 On $\mathfrak E_{\mathbf a,\mathbf b}$, [F1] identifies the function with $f_{\mathbf a}\boxplus f_{\mathbf b}$. Smooth commutation and the actual TS isomorphism [F2] therefore identify its intrinsic coefficient $\Psi_E$ with $q^*(\Phi_{\mathbf a,z_1}\boxtimes\Phi_{\mathbf b,z_2})$ on the indicated value-pair summand. In the induced smooth variety presentation of [F3], invariant-flag forgetting is proper. Apply $V$ to its unit $\mathbb Q\to Rp_*\mathbb Q$ and use proper commutation [F2]; this constructs $\Phi_{\mathbf a+\mathbf b,z}\to Rp_*\Psi_E$. Its dual is $Rp_*D\Psi_E\to D\Phi_{\mathbf a+\mathbf b,z}$. All fixed-group and auxiliary shifts are the same on the two corners of this proper map, so it has intrinsic degree zero. No closed-restriction isomorphism or integral-identity inverse is used. [F1, F2, F3, F5, step 2.1, step 3.1, construct]

5.1 For the smooth map use exactly the factorization of [F3]: $[Y/L]\xrightarrow{r}[Y/P]\xrightarrow{q}[Z/L]$, with $r$ an affine fibration of rank $u$ and $qr=v$ a vector-bundle projection of rank $e$. The intrinsic vanishing-cycle coefficient upstairs is the pullback along each such smooth map by [F2]. Duality and positive orientation give the ordinary smooth shifts $2u$ and $2e$, and homotopy invariance [F2] makes $r^!$ an isomorphism. Define $q^!=(r^!)^{-1}v^!$. Its shift is $2(e-u)=-2\chi_Q(\mathbf b,\mathbf a)$, and the dual coefficient on the extension stack is exactly $q^*(K_{\mathbf a,z_1}\boxtimes K_{\mathbf b,z_2})[2r]$. This is the required generic smooth identification. [F1, F2, F3, F5, step 2.1, step 4.1, construct]

5.2 By [F6] only finitely many critical values occur in each dimension. At a point where $df\ne0$, the holomorphic submersion product has zero half-space relative complex, so $V_{f-z}\mathbb Q$ is supported on $\operatorname{Crit}(f)\cap f^{-1}(z)$. For a sum of two smooth functions, its critical locus is the product of their critical loci. The total-value-$z$ support therefore splits into finitely many disjoint closed pieces with values $(z_1,z_2)$ and $z_1+z_2=z$; each piece is also open relative to that support. Closed-support localization gives the canonical direct-sum decomposition. Translating each function by its value and applying TS [F2] on every piece proves exactly the all-values identification of step 4.1. Thus nonzero critical values and nonhomogeneous potentials introduce no omitted summand or completion. [F1, F2, F6, step 4.1, construct]

6.1 Proper coefficient maps compose because the unit of a composite is the composite of units; smooth base change sends that unit to the unit in the pulled-back diagram. The proper/smooth comparisons of [F2] consequently identify the two resulting coefficient maps. The parent flag construction [F3] realizes the relevant Cartesian diagrams on common finite models, and [F2]'s support-product naturality gives their TS and external-product compatibility. On a three-step flag both TS composites are the coefficient map for the same sum of three diagonal trace functions; positive complex orientations concatenate without a sign because their real degrees are even. The affine-fibration inverse comparisons have the same identities since they invert actual natural isomorphisms. Faithfulness [F4] and step 3.1 reflect these identities from a sufficiently large common model. This proves all composition, base-change, flag-pasting and monodromy coherence demanded by the generic datum. [F1, F2, F3, F4, F5, step 3.1, step 4.1, step 5.1]

7.1 In dimension zero $f=0$ and $V_0\mathbb Q=\mathbb Q$ by [F2]; the endpoint correspondences are identities, so their coefficient maps and orientations are identities. More generally if $W=0$, then $\Phi=\mathbb Q$, $K$ is the intrinsic dualizing coefficient and the dual of $\mathbb Q\to Rp_*\mathbb Q$ is the ordinary proper trace. The smooth operation of step 5.1 is then exactly that of [F3]. Every argument uses the same finite block matrices and counts every arrow, including loops and repetitions. Rank-zero blocks and the empty quiver are point or zero-rank instances. The preceding construction and these unit comparisons realize the full generic package, with AC exactly through [A1]. [A1, F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, step 5.2] ∎
