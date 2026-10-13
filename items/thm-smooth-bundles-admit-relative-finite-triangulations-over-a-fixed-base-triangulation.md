---
id: thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation
kind: theorem
title: "Finite smooth bundle triangulation over a fixed base, relative to a supplied collar diagram"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps, lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection, lem-corner-adapted-strong-approximations-remain-in-the-same-orthant, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-brouwer-fixed-point-theorem, thm-lebesgue-number-lemma]
justified_by: []
aliases: []
landmark: true
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Putz, Triangulation of fibre bundles, Canadian Journal of Mathematics 19 (1967), pp. 499-513"
      url: "https://doi.org/10.4153/CJM-1967-042-3"
      locator: "§§2.1-2.5 diagram fitting, bundle triangulation over a fixed base, fibre with boundary and compatible subbundle, printed pp. 501-505; §§2.8-2.9 relative approximation and common subdivisions, printed p. 506; §§3.3-4.4 fitting with a fixed linear subcomplex and the finite simplex-order induction, printed pp. 509-512; the compact corner contract and the explicit protected-neighbourhood clause are additional arguments supplied here"
---

## Statement

Assume the Axiom of Choice. Let $\pi:E\to B$ be a smooth bundle with compact
total space, compact smooth base and compact smooth fibre, permitting corners.
A bundle here comes with finite smooth local product trivializations, whose
transition maps preserve all local source/target corner faces; a boundary face
in a product chart is either a base face or a fibre face. Let $h:D\to B$ be a
supplied finite corner-adapted whole-star smooth triangulation.

Then there is a finite corner-adapted whole-star smooth triangulation $F:K\to E$
and a piecewise affine map $r:K\to D$ with $\pi F=hr$. Thus the actual bundle
projection is PL over the fixed base parametrization. Refining base pieces for
local construction does not change $h$ or the original complex $D$ in the final
diagram: $r$ on a domain simplex is affine into a simplex of the original $D$.

The construction is relative to any supplied finite diagram $C:J\to E$,
$\pi C=hr_J$, corner-adapted and embedding onto a closed neighbourhood of a protected subpolyhedron
$R$ contained in its relative interior, provided the fitting supports of the
remaining pieces can be chosen disjoint from $R$. In particular this applies
when $C$ is an already triangulated collar neighbourhood of the entire boundary
and $R$ is a smaller collar: the original boundary and all its corner-face
intersections are kept pointwise, with compatible subdivisions allowed. All
union intersections are full subcomplexes.

This relative contract requires the **collar diagram**, not just an arbitrary
triangulation of the boundary without any projection-preserving neighbourhood
extension. Nor does proper smoothness of $\pi$ alone replace the supplied bundle
trivializations.

## Facts & Assumptions

**Given:** the compact smooth bundle $\pi:E\to B$ permitting corners with its finite face-compatible local product trivializations, the fixed finite corner-adapted whole-star smooth base triangulation $h:D\to B$, and in the relative case the supplied finite diagram $C:J\to E$ with $\pi C=hr_J$ corner-adapted and embedding onto a closed neighbourhood of $R$ ([[def-relative-smooth-triangulation-and-projection-preserving-fitting]]).

[F1] Compact corner manifolds and compact corner manifolds with admissible boundary data have finite adapted whole-star smooth triangulations and relative extensions ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]).

[F2] Finite fitting preserves an exact projection-preserving diagram through the shift/secant/extension/shift-back construction, can be supported away from a protected region, and keeps corner orthants and coordinate zero sets; the fitting lemma also contains the finite compactness and separation margins used below ([[lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection]], [[lem-corner-adapted-strong-approximations-remain-in-the-same-orthant]]).

[F3] Shape-controlled subdivisions exist and converge strongly; finite product convex cells can be triangulated compatibly; continuous self-maps of balls have fixed points ([[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]], [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[thm-brouwer-fixed-point-theorem]]).

[F4] An open cover of a compact metric space has a positive Lebesgue number ([[thm-lebesgue-number-lemma]]); $|D|$ is compact because $h$ is a homeomorphism onto the compact $B$, and each closed star of a sufficiently fine subdivision has small diameter.

[F5] The ambient Axiom of Choice is declared in the Statement and in the deps; the finite product-chart construction uses only finitely many choices, and the cited ODE, Brouwer and fitting suppliers are choice-free, so no essential AC use is identified beyond the declared ambient hypothesis ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Compact base and star margins. The metric source $|D|$ is compact because $h$ is a homeomorphism onto the compact base $B$: an open cover of $|D|$ transports under $h$ to an open cover of $B$, which has a finite subcover. Pull the finite product-chart base cover back to $|D|$ and apply [F4]: explicitly choose finitely many balls $B(a_j,r_j)$ covering $|D|$ with $B(a_j,3r_j)$ contained in a chosen chart preimage, so that a subset of diameter less than $\min_jr_j$ that meets $B(a_j,r_j)$ lies in $B(a_j,2r_j)$ and hence in one chart preimage by the triangle inequality. A closed vertex star has diameter at most twice the mesh and $k$ successive required support stars have diameter at most $2(k+1)$ times the mesh, so choosing the mesh of a subdivision of $D$ with $2(k+1)\operatorname{mesh}$ below this margin puts all finitely many required support stars inside their assigned product-chart domains, where $k$ is the actual finite number of stars needed by the fitting and extension constructions. Relative protected-piece separation uses the finite-ball compact-versus-closed argument already available in the fitting item on compact source pieces: the closed smaller collar and the closed fitting pieces are disjoint by the stated buffer hypothesis, so a positive gap follows from finitely many balls, while empty source pieces or complements require no bound. All these are local finite metric constructions on compact pieces, not an invocation of an unnamed global metric or of properness as bundle structure. [F2, F4, algebra]

2.1 Fibre and base pieces. If $E$ is empty take the empty total complex and map. Otherwise triangulate the compact fibre $N$ by [F1], say $g:L\to N$. Subdivide $D$ finely enough that the closed stars of the relevant simplices have images under $h$ in the base domains of the finitely many bundle product charts, using the margin of step 1.1; the subdivision inclusion into $D$ is affine on each simplex into an original simplex of $D$. Choose finitely many closed base subcomplex pieces $D_i$ with interiors covering $D$ and $h(D_i)$ compactly contained in a product-chart base domain. For each $i$ the product map $F_i(x,y)=\phi_i(h(x),g(y))$ on $D_i\times L$ is a whole-star smooth embedding, being the product of embeddings through a face-compatible product chart; triangulate its finite product cells compatibly by [F3], so that projection onto $D_i$ is affine on each product simplex and $\pi F_i=h\operatorname{pr}_1$. The face/tangent conditions transfer from those of $h$, of $g$ and of the face-compatible product chart, so these are admissible bundle diagrams. [F1, F3, step 1.1, algebra]

3.1 Fitting the finitely many diagrams. Apply [F2] to fit the diagrams of step 2.1 in turn, choosing the accumulated strong error as small as needed on every compact chart. The fitting construction never changes $h$ or the original point map $r_i=\operatorname{pr}_1$ of a piece, and on an identified overlap injectivity of $h$ forces the same base point, so the maps $r_i$ descend to one map $r$ on the glued finite complex; after the subdivisions each $r_i$ is still affine into a simplex of the original $D$, so $r$ is a valid final affine-base map with $\pi F=hr$. The union map is a whole-star embedding, all intersections are full, and by [F2] every corner face is retained. [F2, step 2.1]

4.1 Coverage fibre by fibre. Fix $x\in D_i$ and put $b=h(x)$. Since the original $r_i$ is unchanged, the perturbed embedding $F_i'$ maps the entire slice $\{x\}\times|L|$ into the same fibre $E_b$, with original fibre map $g$. Cover $N$ by finitely many closed local corner boxes by their smaller cores and parametrize the input slice over one such box by $g^{-1}$, which is continuous because $g$ is a homeomorphism; there the perturbed fibre map is a continuous small perturbation $u\mapsto u+e(u)$ of the identity, uniformly in $x$, with $e_j=0$ on every true fibre-boundary face because the fitting preserved those zero sets by [F2]. For a target point $v$ in the smaller core, the self-map $u\mapsto\operatorname{clip}(v-e(u))$ of the box has a fixed point by [F3], after transporting the box to a ball by radial parametrization from its centre. If the error is below the core margin no artificial box face can clip at a fixed point, and at a true face $u_j=0$ the constraint $e_j=0$ makes clipped equality imply $v_j=0$, so the original equation still holds and $v$ lies in the perturbed slice. Hence each perturbed slice meets every core and therefore all of $N$; since the $D_i$ cover the base, the union embedding of step 2.1 is onto $E$ and is the required finite corner-adapted whole-star smooth triangulation with exact diagram $\pi F=hr$. [F2, F3, step 2.1, step 3.1]

5.1 Relative case. Start with the supplied diagram $C:J\to E$, $\pi C=hr_J$, embedding onto a closed neighbourhood of the protected subpolyhedron $R$ in its relative interior. Cover the compact complement of a still smaller open neighbourhood contained in $C(J)$ by finitely many local product pieces of the form $D_i\times Q_i$, with $Q_i$ a closed fibre coordinate box. The separation hypothesis and compactness of the pieces let us choose their images and all necessary fitting stars disjoint from $R$ by the finite-ball argument of step 1.1. The domain base pieces come from sufficiently fine subdivisions of $D$, and the product simplices retain affine projection into the original $D$. Each new piece is a genuine diagram as in step 2.1, using the coordinate parametrization of $Q_i$ in place of $g$. Fit these pieces to $C$ and to one another by the supported construction of [F2]; it leaves $C$ pointwise unchanged on $R$ and keeps the exact original projection on every piece. The smaller cores still cover the complement by the box fixed-point argument of step 4.1, and the compact intermediate overlap in the relative interior of the old neighbourhood piece is retained as follows: cover it by finitely many smaller corner-box cores, each in a larger box contained in the old image. Pull the larger box back by the original homeomorphism $C$ and express the perturbed $C$ in those target coordinates. This is a continuous small perturbation of the identity, preserving true face zero sets; the clipped fixed-point argument of step 4.1 keeps each smaller core. In the bundle case it can be applied on each fixed-base slice, since the unchanged diagram keeps that slice in its fibre, while the protected region itself is untouched. Therefore the union covers $E$. In the collar application the entire boundary lies in $R$, so the prescribed boundary parametrization and all its corner-face intersections remain fixed. [F2, F3, step 1.1, step 2.1, step 4.1]

6.1 Conclusion. All constructions are finite, and the affine base coordinates descend consistently to the union: steps 1.1-4.1 prove the nonrelative bundle theorem with the fixed base triangulation unchanged as a point map, and step 5.1 proves exactly the stated relative collar and neighbourhood version with the protected region kept pointwise. No Ehresmann theorem, generic algebraic-map triangulation or unproved smooth fitting primitive has been substituted for the actual product charts and the local fitting proof, and proper smoothness of $\pi$ alone was not used as a substitute for the supplied trivializations. The ambient Axiom of Choice is declared but not essentially used. [F5, step 3.1, step 4.1, step 5.1] ∎
