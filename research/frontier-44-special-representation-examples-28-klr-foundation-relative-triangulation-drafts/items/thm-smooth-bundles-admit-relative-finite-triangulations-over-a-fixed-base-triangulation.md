---
id: thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation
kind: theorem
title: "Finite smooth bundle triangulation over a fixed base, relative to a supplied collar diagram"
status: draft
origin: session
deps: [def-axiom-of-choice, def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps, lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection, lem-corner-adapted-strong-approximations-remain-in-the-same-orthant, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-brouwer-fixed-point-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. Putz, Triangulation of fibre bundles (1967)"
      url: https://doi.org/10.4153/CJM-1967-042-3
      locator: "§2.1–2.4,3.3–4.4, printed501–504,509–512; compact finite construction and explicit relative-neighbourhood contract below"
---

## Statement

Assume the Axiom of Choice. Let $\pi:E\to B$ be a smooth bundle with compact total space, compact smooth base and compact smooth fibre, permitting corners. A bundle here comes with finite smooth local product trivializations, whose transition maps preserve all local source/target corner faces; a boundary face in a product chart is either a base face or a fibre face. Let $h:D\to B$ be a supplied finite corner-adapted whole-star smooth triangulation.

Then there is a finite corner-adapted whole-star smooth triangulation $F:K\to E$ and a piecewise affine map $r:K\to D$ with
$$\pi F=hr.$$
Thus the actual bundle projection is PL over the fixed base parametrization. Refining base pieces for local construction does not change $h$ or the original complex $D$ in the final diagram: $r$ on a domain simplex is affine into a simplex of the original $D$.

The construction is relative to any supplied finite diagram $C:J\to E$, $\pi C=hr_J$, embedding onto a closed neighbourhood of a protected subpolyhedron $R$ contained in its relative interior, provided the fitting supports of the remaining pieces can be chosen disjoint from $R$. In particular this applies when $C$ is an already triangulated collar neighbourhood of the entire boundary and $R$ is a smaller collar: the original boundary and all its corner-face intersections are kept pointwise, with compatible subdivisions allowed. All union intersections are full subcomplexes.

This relative contract requires the **collar diagram**, not just an arbitrary triangulation of the boundary without any projection-preserving neighbourhood extension. Nor does proper smoothness of $\pi$ alone replace the supplied bundle trivializations.

## Facts & Assumptions

**Given:** compact smooth bundle with the actual face-compatible product charts and the fixed base triangulation, and the supplied neighbourhood diagram in the relative case.

[F1] Compact corner manifolds have finite adapted smooth triangulations, including admissible relative boundary extensions ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]).

[F2] Finite fitting preserves the bundle projection exactly through shift/secant/extension/shift-back; it can be supported away from a protected region. The orthant lemma retains the correct corner sides ([[lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection]], [[lem-corner-adapted-strong-approximations-remain-in-the-same-orthant]]).

[F3] There are arbitrarily fine face-consistent subdivisions; finite product convex cells can be triangulated compatibly; ball fixed points imply box fixed points by radial parametrization ([[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]], [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[thm-brouwer-fixed-point-theorem]]).

## Proof

1.1 If $E$ is empty, take the empty total complex and map. Otherwise triangulate the compact fibre $N$ by [F1], say $g:L\to N$. Subdivide $D$ finely enough that the closed stars of its relevant small simplices have images under $h$ in the base domains of bundle product charts: continuity of $h$ and the finite product-chart cover give a positive Lebesgue margin on the compact realization, and the mesh in [F3] tends to zero. Choose finitely many closed base subcomplex pieces $D_i$ in that subdivision, with interiors covering $D$ and $h(D_i)$ compactly contained in a product-chart base domain. The subdivision inclusion $D_i\to D$ is affine on each of its simplices into an original simplex. For each $i$, the product map $F_i(x,y)=\phi_i(h(x),g(y))$ on $D_i\times L$ is a whole-star smooth embedding. Triangulate its finite product cells compatibly by [F3]. Projection onto $D_i$ is affine on each product simplex, and $\pi F_i=h\operatorname{pr}_1$. The face/tangent conditions follow from those of $h,g$ and the face-compatible product chart, so these are actual admissible bundle diagrams. [F1, F3, algebra]

2.1 Apply [F2] to fit these finitely many diagrams in turn, choosing the accumulated strong error as small as needed on every compact chart. The fitting construction never changes $h$ or the original point map $r_i=\operatorname{pr}_1$ on a piece, and on an identified overlap injectivity of $h$ forces the same base point. Thus the maps $r_i$ descend to one map $r$ on the glued finite complex. After the subdivisions, each is still affine into a simplex of the original $D$, so $r$ is a valid final affine-base map. The union map is a whole-star embedding, all intersections are full, and the orthant argument retains every corner face. [F2, step 1.1]

3.1 Verify coverage fibre by fibre. Fix $x\in D_i$ and $b=h(x)$. Since the original $r_i$ is unchanged, the perturbed embedding $F_i'$ maps the entire slice $\{x\}\times|L|$ into the same fibre $E_b$. In product coordinates its original fibre map is $g$. For a finite collection of closed local corner boxes covering $N$ by their smaller cores, parametrize the input slice over one such box using $g^{-1}$; this is continuous because $g$ is a homeomorphism. In that box the perturbed fibre map is a continuous small perturbation $u\mapsto u+e(u)$ of the identity, uniformly in $x$, and $e_j=0$ on every true fibre-boundary face because [F2] preserved those zero sets. For a target point $v$ in the smaller core, the self-map $u\mapsto\operatorname{clip}(v-e(u))$ of the box has a fixed point by [F3]. No artificial box face can clip at a fixed point if the error is below its core margin; at a true face $u_j=0$ the constraint $e_j=0$ makes clipped equality imply $v_j=0$, so the original equation still holds. Thus the perturbed slice hits every such core and hence the whole fibre. Compactness of the finite pieces and local boxes makes the necessary error bounds uniform. Since the $D_i$ cover the base, the union embedding of step 2.1 is onto $E$, so it is the required triangulation. [F2, F3, step 1.1, step 2.1]

4.1 For the relative case, start with the supplied diagram $C$ on the closed neighbourhood piece and protect the smaller $R$. Cover the compact complement of a still smaller open neighbourhood contained in $C(J)$ by finitely many local product pieces of the form $D_i\times Q_i$, with $Q_i$ a closed fibre coordinate box. Choose their images and all necessary fitting stars disjoint from $R$; the separation hypothesis and compactness supply positive support margins. The domain base pieces come from sufficiently fine subdivisions of $D$ and the product simplices retain affine projection into the original $D$. Each new piece is a genuine diagram as in step 1.1, using a coordinate parametrization of $Q_i$ instead of $g$. Fit these pieces to $C$ and to one another by the supported construction of [F2]. It leaves $C$ pointwise unchanged on $R$ and retains the exact original projection on every piece. The smaller cores still cover the complement by the box fixed-point argument of step 3.1, and the intermediate compact overlap in the old neighbourhood piece is likewise retained under a sufficiently small approximation; the protected region itself is unchanged. Therefore the union covers $E$. In the collar application the entire boundary lies in $R$, so the prescribed boundary parametrization and all its corner-face intersections remain fixed. [F2, F3, step 1.1, step 3.1]

5.1 All constructions are finite, and affine base coordinates descend consistently to the union. Steps 2.1–3.1 prove the nonrelative bundle theorem, and step 4.1 proves precisely the stated relative collar/neighbourhood version. No Ehresmann theorem, generic algebraic map triangulation or unproved smooth fitting primitive has been substituted for the actual product charts and local fitting proof. [step 2.1, step 3.1, step 4.1] ∎
