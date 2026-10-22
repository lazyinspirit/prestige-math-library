# Finite collar patching for a compact boundary in a noncompact space

New source-backed prerequisite for E1's actual sphere bicollar. It does not extend the existing compact-M collar provider by assertion. The source is RobertConnelly, *A new proof of Brown's collaring theorem*, ProceedingsAMS27(1971),180–182, DOI https://doi.org/10.1090/S0002-9939-1971-0267588-7 . The complete three-page primary was obtained from the public archived publisher PDF as `annular-primary/connelly1971-collaring.{pdf,txt}`; all three printed pages were visually read. No OCR or accepted-provider proof inspection was used.

## Exact statement

Let B be a compact closed subspace of a Hausdorff space X. Supply finitely many local closed collars h_i:ClU_i×[0,1]→X satisfying h_i(x,0)=x, h_i⁻¹(B)=ClU_i×{0}, and h_i(U_i×[0,1)) open in X. Supply continuous λ_i:B→[0,1] with support contained in U_i and open V_i covering B such that λ_i=1 on ClV_i. Then B has an actual collar c:B×[0,1]→X, with c(x,0)=x and c(B×[0,1)) open in X. In particular X itself need not be compact. This finite-data version makes no assertion that normality alone supplies real-valued cutoffs without a further principle.

If B has a supplied compatible metric and every point has such a local closed collar, the required finite data exist using only finite choices and the explicit distance formula below. This includes the entire E1 application, where B is the disjoint union of two parametrized S⁴ boundaries. The arbitrary compact-Hausdorff version is retained with the cutoffs supplied as hypotheses; no DC or Urysohn lemma is used.

## 1. Finite data and enlarged space

For the metric version, take local collar domains U and concentric metric balls V,W about their base points with ClV⊂W and ClW⊂U. Such balls exist by openness; their closures are compact because B is compact. The collection of all these smaller V covers B, so compactness selects finitely many V_i, with their corresponding W_i,U_i and collars. This is a finite selection, not a countable sequence of choices.

Put F_i=ClV_i and G_i=B\W_i. If both are nonempty, define

    λ_i(x)=d(x,G_i)/(d(x,F_i)+d(x,G_i)).

The two closed sets are disjoint, so the denominator is positive at every x. Distances to nonempty sets are continuous. The formula equals1 on F_i and0 outside W_i, and its support lies in ClW_i⊂U_i. If F_i is empty use λ_i=0; if G_i is empty and F_i is nonempty use λ_i=1 (then W_i=B and ClW_i⊂U_i forces U_i=B). Thus the supplied metric gives all needed cutoffs explicitly. For general compact-Hausdorff B start instead with the finite data in the statement.

Form X⁺=X∪_B(B×[−1,0]) by identifying (x,0) with x∈B. Extend each local chart to H_i:ClU_i×[−1,1]→X⁺, using h_i for t≥0 and the actual attached collar for t≤0. These are embeddings: the two closed halves paste on their common base, and injectivity follows from the disjointness of the attached collar interior and X. Restricting to U_i gives the needed local open product. No collar has been assumed on all of B.

We construct continuous f_i:B→[−1,0] and embeddings g_i:X→X⁺ satisfying

    g_i(x)=(x,f_i(x)) for x∈B,
    g_i(X)=X∪{(x,t)∈B×[−1,0]: t≥f_i(x)},
    f_i(x)=−1 on V₁∪...∪V_i.

Initially f₀=0 and g₀ is the inclusion of X.

## 2. One exact fiber push

Assume f=f_(i−1) and g=g_(i−1) given. Put

    f_new(x)=(1−λ_i(x))f(x)−λ_i(x).

For x∈ClU_i define s_x:[f(x),1]→[f_new(x),1] by

    s_x(t)=f_new(x)+(1−f_new(x))(t−f(x))/(1−f(x)).

The denominator is at least1, and both endpoint intervals have positive length. Thus s_x is a strictly increasing affine homeomorphism, continuous jointly with x; its inverse has the analogous formula. If λ_i(x)=0 it is the identity. It always fixes the ceiling t=1.

By the inductive image identity, H_i⁻¹(g(X)) consists exactly of those (x,t) with t≥f(x). On this part define Φ_i=H_i∘(x,t↦(x,s_x(t)))∘H_i⁻¹, and define Φ_i=id on the remainder of g(X). The maps agree on the ceiling and on the lateral boundary, since λ_i vanishes there; the inverse formulas agree on the corresponding target boundaries. Thus the pasted map is an actual homeomorphism from g(X) onto the new graph region, rather than an unsupported ambient extension. Its injectivity and surjectivity can also be read directly on each H_i-fiber: it replaces [f(x),1] by [f_new(x),1] and does nothing outside those fibers.

Set g_i=Φ_i g and f_i=f_new. The three invariants follow immediately. In particular on ClV_i, λ_i=1 and f_i=−1. If f was already−1 at an earlier point, the same formula retains−1 there, so the previously covered sets remain covered.

## 3. Actual global collar

After finitely many steps every x∈B belongs to some V_i, hence f_n≡−1. The image identity gives g_n(X)=X⁺. Since g_n is an embedding onto all of X⁺, it is a homeomorphism. Define

    c(x,s)=g_n⁻¹(x,−1+s),       0≤s≤1.

On s=0, g_n(x)=(x,−1), so c(x,0)=x. The map is an embedding of B×[0,1] by the displayed inverse. Its half-open portion is open in X because B×[−1,0) is open in X⁺. This proves the stated collar at the exact compact-B/noncompact-X scope.

If local collars have to retain a supplied smaller collar on a compact part of B, this proof has not asserted that relative refinement. E1 below only needs a newly constructed whole sphere collar, so no unsupported relative collar uniqueness is being imported.

## Application interface for the E1 sphere

For a locally flat parametrized S⁴ in a5-manifold, its local two flanks form a two-sheeted normal-side covering of S⁴. Since S⁴ is simply connected that covering is trivial. Cut along the sphere using these labeled local flanks. Its boundary B=S₊⊔S₋ has the supplied sphere parameters. Transfer the standard bounded sphere metric to each copy, and set the distance between distinct copies equal to a constant larger than either diameter. This supplies a compatible metric on the compact B. Apply the metric finite theorem to the cut space and this disjoint boundary; projecting back and pasting gives the actual bicollar before separation is assumed. Separation and the side homotopy equivalences are separate E1 consumer calculations, not claimed by this finite patching theorem.

This is new prerequisite mathematics awaiting root disposition/review. It confers no endpoint-flatness, meridional cap or original E1 closure by itself.
