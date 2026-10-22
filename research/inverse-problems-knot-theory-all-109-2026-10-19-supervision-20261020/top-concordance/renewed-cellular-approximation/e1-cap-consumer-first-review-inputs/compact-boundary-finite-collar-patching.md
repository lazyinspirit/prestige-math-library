# Finite collar patching for a compact boundary in a noncompact space

New source-backed prerequisite for E1's actual sphere bicollar. It does not extend the existing compact-M collar provider by assertion. The source is RobertConnelly, *A new proof of Brown's collaring theorem*, ProceedingsAMS27(1971),180–182, DOI https://doi.org/10.1090/S0002-9939-1971-0267588-7 . The complete three-page primary was obtained from the public archived publisher PDF as `annular-primary/connelly1971-collaring.{pdf,txt}`; all three printed pages were visually read. No OCR or accepted-provider proof inspection was used.

## Exact statement

Let B be a compact closed subspace of a Hausdorff space X. Suppose every point of B has a local closed collar: for an open U⊂B with compact closure, an embedding h:ClU×[0,1]→X satisfies h(x,0)=x, h⁻¹(B)=ClU×{0}, and h(U×[0,1)) is open in X. Then B has an actual collar c:B×[0,1]→X, with c(x,0)=x and c(B×[0,1)) open in X. In particular X itself need not be compact. Only finite choices are used.

## 1. Finite data and enlarged space

Take finitely many such U_i covering B and open V_i still covering B with ClV_i⊂U_i. Since compact Hausdorff B is normal, choose continuous λ_i:B→[0,1], equal to1 on ClV_i and zero outside U_i. Its support may be taken in U_i. Form X⁺=X∪_B(B×[−1,0]) by identifying (x,0) with x∈B. Extend each local chart to H_i:ClU_i×[−1,1]→X⁺, using h_i for t≥0 and the actual attached collar for t≤0. These are embeddings: the two closed halves paste on their common base, and injectivity follows from the disjointness of the attached collar interior and X. Restricting to U_i gives the needed local open product. No collar has been assumed on all of B.

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

For a locally flat S⁴ in a5-manifold, its local two flanks form a two-sheeted normal-side covering of S⁴. Since S⁴ is simply connected that covering is trivial. If the sphere separates into two complementary domains, each chosen flank lies in the corresponding closure, giving the local collars required above; apply the finite theorem on each closed side and paste the two actual collars. Separation and the side homotopy equivalences are separate E1 consumer calculations, not claimed by this finite patching theorem.

This is new prerequisite mathematics awaiting root disposition/review. It confers no endpoint-flatness, meridional cap or original E1 closure by itself.
