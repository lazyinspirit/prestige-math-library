# Horned sphere: an explicit geometric pillbox and the remaining realization gap

Date: 2026-09-12 (Australia/Sydney).

Scope: the batch-5 escalation
`cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls`.
This new isolated support document changes no items, manifests, contracts,
receipts, prior support files, engine state, or processes. It is not an
acceptance, certification, completed item, or workflow transition.

**Disposition: the escalation must remain held.** A concrete finite geometric
pair model is proved below, improving the earlier abstract-block support.
The compatible recursive shrinking and limiting-ball realization required
for the actual counterexample is still not proved. Consequently this package
does not justify an automatic or mathematically cleared reopen. An explicit
authoring assignment to finish the remaining work is a different decision.

## 1. What this adds, and what it deliberately does not repeat

[The earlier horned-sphere support](support-phase-2-next-17-horned-sphere.md)
already proves a conditional controlled-limit criterion, the punctured-torus
group calculation, the free-group inclusions, compactness of loop/homotopy
images, and the Euclidean-to-spherical exterior step. None of those abstract
consequences is re-proved here.

The new step is an explicit embedded **cap-marked pillbox** C, containing two
disjoint solid tori T₋ and T₊, with an actual pair homeomorphism

    (C \ (T₋∪T₊), ∂C \ (T₋∪T₊))
        ≅ (F×(-1,1), ∂F×(-1,1)),

where F is a torus with one open disk removed. The cap disks on ∂C are also
identified. This is stronger than asserting that an unspecified block has
free fundamental group, and does not use a diagrammatic graph-complement
identification or a general Schoenflies theorem.

The construction below chooses one particular correct template. It does not
prove that every pair described informally as “linked tori” has this marked
complement; linking alone cannot establish a homeomorphism of pairs.

## 2. Current contract and source checks

The batch-5 manifest still promises an embedding S²→S³ with an exterior
component that is not simply connected, under AC for its Jordan–Brouwer
supplier. Its existing strategy invokes finite-stage linking number. That
strategy is unsuitable: the parent meridian becomes a commutator, so its
abelianized image at the next stage is zero. It is the nonabelian word that
must survive. The exact claim need not be weakened; the proof strategy needs
replacement by a genuine geometric block plus nonabelian argument.

The group-D author report, at the original horned-sphere escalation entry,
records two proposed but unminted suppliers:

- `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball`;
- `lem-horn-replacement-block-has-injective-commutator-meridian`.

The current counterexample and both proposed supplier files were absent at
this read-only inspection. The report expressly forbids treating the cited
existence assertion as the missing proof. That remains the controlling
mathematical boundary of this support task.

[Hatcher, *Algebraic Topology*, Example 2B.2, pp.170–172](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)
was revisited, including visual inspection of the existing p.171 image.
Hatcher identifies the two-punctured-handle complement and its annular
commutator; he also describes the limit parametrization, but does not give
the quantitative inverse-control data required in the earlier package.
The explicit model in §3 is a local reconstruction of the finite geometry,
not a claim that Hatcher supplied its coordinates.

The successful local copy of
[Powell–Ray seminar notes, §§5.2.1–5.2.3](https://www.maths.gla.ac.uk/~mpowell/Topological-manifolds-lecture-notes-after-seminar.pdf)
was reused. The construction/homeomorphism text was reread; the existing
images of printed pp.35, 37–39, including Figures 5.12, 5.13 and 5.15–5.17,
were visually inspected. These clarify the cap-marked pillbox interface.
Their geometric graph assertion and alternative transversality/loop-theorem
argument are not imported as missing repository suppliers. Their informal
noncollision reasoning is not a substitute for quantitative limit control.

Alexander's original scan was not needed for the proof below. A fresh request
to the previously successful Copenhagen mirror timed out; no new claim of
reading the original paper is made. Existing successful Hatcher and
Powell–Ray files were reused rather than repeatedly retrieving them.

## 3. An actual cap-marked geometric block

### 3.1 Statement

There are a standard topological closed 3-ball C⊂S³ and disjoint closed
solid tori T₋,T₊⊂C with these properties:

1. Each T± meets ∂C in precisely one closed disk D±; these disks are
   disjoint, and ∂C\(D₋∪D₊) is an open annulus A.
2. The pair (Z,A), where Z=C\(T₋∪T₊), is homeomorphic to
   (F×(-1,1), ∂F×(-1,1)), where F is a once-punctured torus.
3. The two standard generators of π₁(F) can be represented by meridians
   of T₋ and T₊, respectively, pushed into Z. The generator of the
   attaching annulus is the boundary loop of F, with its actual marking.
4. The annulus has a supplied two-sided product neighborhood in S³, away
   from the cap disks. Thus an insertion into a standard collared pillbox
   supplies the open-cover interface needed by van Kampen.

In particular this is an embedded realization of the pair computed in §4
of the earlier support, not merely a group with the same abstract rank.

### 3.2 Coordinates in the standard three-sphere

Write

    S³ = {(z,w)∈C² : |z|²+|w|²=1}.

For angular coordinates θ,φ modulo 2π and -1<t<1, put

    Φ(θ,φ,t) = (sqrt((1+t)/2) e^{iθ},
                 sqrt((1-t)/2) e^{iφ}).

For 0<r<1, Φ is a homeomorphism from T²×[-r,r] onto its image;
its inverse recovers the two phases and t=|z|²-|w|². Both phases are
defined there because neither complex coordinate vanishes. Define

    V₋ = {|z|² ≤ (1-r)/2},
    V₊ = {|w|² ≤ (1-r)/2}.

These are disjoint solid tori. For V₋ the explicit parametrization is

    (z,u) ↦ (z, u sqrt(1-|z|²)),
    |z|≤sqrt((1-r)/2), u∈S¹;

for V₊ interchange z and w. They meet the collar along t=-r and t=r,
respectively, and their union with the collar is all of S³.

Let D⊂T² be the image of the closed angular square [-r,r]², taking r
also less than π/4. This is a closed disk contained in a single angular
chart. Put

    Q = Φ(D×[-r,r]),
    C = S³ \ int(Q),
    T₋ = V₋,  T₊ = V₊.

All subsequent statements use r sufficiently small for §3.3. The parameter
square is a disk with corners; no smoothing of its boundary is necessary.

### 3.3 Why the complementary C really is a ball

It is not enough that Q itself is homeomorphic to a ball: an arbitrary
embedded ball is exactly where wild-boundary issues can arise. Here Q is
a *particular small coordinate box*, and an explicit ambient change of
coordinates reduces it to a straight box. The following elementary argument
supplies that reduction without Schoenflies or an isotopy-extension theorem.

Take stereographic coordinates around Φ(0,0,0) and postcompose with an
invertible affine map so that the resulting local map g from (θ,φ,t)
coordinates to R³ satisfies g(0)=0 and Dg(0)=I. This is possible directly:
the θ,φ,t derivatives of Φ at zero are linearly independent tangent
vectors, and the stereographic derivative is invertible. The displayed
formula makes g continuously differentiable on a neighborhood of zero.

For small r, on the cube [-2r,2r]³ let h(x)=g(x)-x. Continuity of the
derivative and the line-segment mean-value bound give

    Lip(h) ≤ ε,  |h(x)| ≤ ε|x| ≤ 2 sqrt(3) ε r,

where ε can be made as small as desired by reducing r. Define the explicit
cutoff

    χ_r(x)=1                                  if ||x||∞≤r,
           2-||x||∞/r                         if r≤||x||∞≤2r,
           0                                  if ||x||∞≥2r.

On the cube let k(x)=χ_r(x)h(x), and put k(x)=0 outside it. Since h is
bounded there and Lip(χ_r)≤1/r, the product estimate gives

    Lip(k) ≤ (1+2 sqrt(3)) ε.

For one point outside the cube, apply the inside estimate up to the first
boundary point of the segment; k vanishes at that point. Thus the bound
holds globally, not only inside the cube. Choose r so that this bound is
q<1/2, and put H(x)=x+k(x).

For all x,y,

    |H(x)-H(y)| ≥ (1-q)|x-y|.

So H is injective and its inverse on its image is Lipschitz. For any b∈R³,
the map x↦b-k(x) is a contraction of complete R³; its iterates converge
to a fixed point, giving H(x)=b. Hence H is a homeomorphism R³→R³,
equal to the identity outside a compact cube. It extends by fixing infinity
to a homeomorphism of S³. On [-r,r]³ it equals g, so it carries that
straight cube exactly to Q in the chosen stereographic coordinates.

Finally the exterior of a straight cube, with infinity included, is a
closed ball by an explicit radial map. Along each direction u∈S² the
cube boundary has radius ρ(u)=r/||u||∞. The map su↦(s/ρ(u))u sends
the cube onto the unit ball and extends continuously at zero and infinity.
On its exterior, inversion x↦x/|x|², sending infinity to zero, identifies
the exterior plus infinity with the closed unit ball. Transport through H
and the chosen chart. This proves C≅D³.

The analytic ingredients here are only the elementary derivative bound,
Euclidean completeness, and the contraction iteration. They are not
three-manifold classification assumptions. The corresponding existing
item IDs are recorded in §7; alternatively the short iteration argument
can be included directly in the eventual local supplier.

### 3.4 Exact pair identification and cap marking

The interior of Q is Φ(int(D)×(-r,r)). Therefore T₋ and T₊ are both
subsets of C, and

    T₋∩∂C = Φ(D×{-r}) = D₋,
    T₊∩∂C = Φ(D×{ r}) = D₊.

Their intersection is empty. The rest of ∂C is exactly

    A = Φ(∂D×(-r,r)).

Removing T₋ and T₊ removes all points with t≤-r or t≥r; removing
int(Q) removes exactly the collar points with (θ,φ)∈int(D). Consequently

    Z = Φ((T²\int(D))×(-r,r)).

The inverse of Φ already displayed in §3.2 proves the asserted homeomorphism
of pairs, with F=T²\int(D). There is no unstated deformation of linked
tubes in this equality.

The cap-marked boundary of C is the boundary of Q, with the opposite side
designated as the interior. The inverse product coordinates identify it
with the boundary of D×[-r,r], preserving its two cap disks and side
annulus. Since C is a ball by §3.3, this prescribed boundary homeomorphism
extends to a homeomorphism of C onto a standard pillbox: start with any
already supplied ball parametrization of C, take the resulting boundary
self-homeomorphism of S², and extend it by u↦|u| b(u/|u|), with zero
sent to zero. This radial extension is continuous, bijective, and has the
same radial formula for its inverse. This use of radial extension is not
the false assertion that an arbitrary embedded sphere bounds a standard
ball; that fact for this C was proved first.

### 3.5 The annulus and the two meridians

Choose angular representative circles avoiding int(D). In V₋, varying θ
with φ fixed traverses the boundary of the z-disk in the solid-torus
parametrization; it is a meridian. In V₊, varying φ with θ fixed is a
meridian by the other parametrization. Push these loops a little into
-r<t<r. With paths to a common basepoint in F, these are precisely the
usual two generators a,b of its square model. The side-annulus generator
is the boundary circle ∂D, not an unspecified simple closed curve.

The punctured-torus calculation in the earlier support therefore applies
to these *geometrically identified* loops. It sends the annular generator
to [a,b], up to the explicitly permitted orientation inversion and
basepoint conjugation. No assertion about the linking number of the two
solid-torus cores is used to obtain this marking.

An angular collar of the boundary of the square D is explicit: along each
radial ray from its center use the square-radius ||(θ,φ)||∞ as normal
coordinate. Together with t this gives a two-sided product neighborhood
of A in S³. One side lies in int(Q), the other in Z. The parameter
t∈(-r,r) keeps this collar disjoint from both closed cap disks. Its
corners are harmless: a product collar is a topological statement, and
the square-radius maps and their inverses are continuous at the corners.

This finishes the finite geometric block proof.

## 4. An actual open-cover interface after insertion

This subsection removes the closed-gluing ambiguity of the earlier block
specification. It remains conditional only on the stated *insertion data*,
not on an unidentified local complement.

Suppose a standard embedded collared pillbox C has cap disks D± and the
template of §3 transported into it by the cap-marked homeomorphism. Let Y
be closed, meeting C in precisely D₋∪D₊. Define

    E_old = S³ \ (Y∪C),
    E_new = S³ \ (Y∪T₋∪T₊).

Suppose E_old is path connected. Require as part of the insertion data
that the supplied two-sided collar of A lies in E_new. Give it coordinates
(s,t,u), with (s,t)∈A and -ε<u<ε; take u<0 outside C and u>0 inside
it. Widths may vary near the cap ends before reparametrizing to this fixed
interval. This is a condition to check in the actual finite placement,
not an invocation of a collaring theorem for an arbitrary wild set Y.
The local model of §3 supplies its own product collar; compatibility with
the already constructed exterior is part of the global insertion work.

Use the open cover

    U = E_old ∪ {collar points u<ε/3},
    V = (int(C)\(T₋∪T₊)) ∪ {collar points u>-ε/3}.

Here collar inequalities refer only to the displayed collar domain. These
sets cover E_new and their intersection is A×(-ε/3,ε/3). Both are
path connected, since the collar joins each relevant side to its connected
piece. V deformation retracts onto Z=C\(T₋∪T₊) by replacing negative
u with zero and leaving Z fixed. The intersection retracts to A.

Inclusion E_old→U is a homotopy equivalence, not a retraction onto a
nonclosed subspace. To see it, push the added collar into its negative
side. For u≥-ε/2 set

    h(u) = -ε/2 + (2/5)(u+ε/2),

and let h(u)=u below -ε/2; keep all points outside this portion of the
collar fixed. On U the largest allowed u is ε/3, so h(u)<-ε/6.
The straight interpolation between u and h(u) stays in U; if u<0 it
stays negative. Thus the push supplies both homotopy-inverse identities.

These identifications track the overlap generator: in V it is the actual
∂F generator of §3; in U it is the pushed side circle of the old pillbox.
The latter is the parent meridian **when the global construction actually
places this pillbox across the declared parent handle**. That last global
marking cannot be inferred just from the local pair model.

The supplied open cover now meets the exact hypotheses of
`thm-seifert-van-kampen`. The already proved algebra in the earlier support
can be applied without a loop theorem or transversality. Distinct insertions
also need disjoint global supports and compatible basepoint paths; §3 alone
does not create those data at infinitely many stages.

## 5. Why this does not yet produce the horned sphere

The finite construction can be copied into any cap-marked standard pillbox.
Each solid torus has a product parametrization, so a meridional slice away
from its marked cap disk can be removed to leave a ball. In the coordinates
above, choose the core-angle slice outside the small angular interval of
that cap. This describes the finite cutting operation; it does not control
the diameter of infinitely many future slices or the inverse parametrization
of the growing balls.

The earlier controlled-limit criterion still requires one compatible system
of data, not a succession of uncoordinated finite examples. Specifically,
the repair author must construct:

1. Nested compact handle sets X_n and embeddings f_n:D³→X_n with
   B_n=f_n(D³), implementing this cap-marked template at every terminal
   handle; the meridian marking in §4 must be retained.
2. Explicit nested source terminal cells of diameter tending to zero, with
   persistent intersection on ∂D³, and stabilization of f_n off their union.
3. Pairwise disjoint compact target cells at each stage, shrinking to zero
   in diameter and containing *all future images* of the corresponding
   source cells. Their disjointness must include closure disjointness.
4. Separation of the stabilized image from those target cells, and uniform
   approximation of X_n by B_n, as required by the earlier criterion.

Producing a tiny copy of the whole finite pillbox inside a Euclidean ball
does not automatically give item 1: its caps must meet the correct parent
handle disks. Nor does shrinking the chosen target pillboxes automatically
give item 2: two distinct domain points can otherwise collapse in a uniform
limit. Relative ball parametrizations must arrange source and target
control simultaneously, while preserving the cap/gluing and collar data.

This package does not prove that inductive parametrization lemma. The
cut-and-copy observations in the preceding paragraph are not offered as a
proof of it. Consequently the first proposed supplier remains an unproved
existence theorem, and the second still needs its global insertion/marking
clauses authored, although its previously missing local pair now has a
concrete proof available.

There is no need to re-open the already proved abstract group calculations
to address these points. Once these geometric data are established, the
earlier support supplies the rest: injective stage maps, compact nullhomotopy
reduction to a finite stage, a ball embedding with sphere boundary, and the
nontrivial spherical exterior group.

## 6. Explicit rejection of shortcuts

- **Linking number:** a parent commutator has zero image in the abelianized
  child group. Nonzero ordinary linking numbers cannot certify its survival
  through the construction. A Hopf-like drawing is not a computation of
  the attaching-annulus map either.
- **Only finite embeddings:** an arbitrary uniform limit of embeddings
  need not be injective. Both inverse/source control and target separation
  must be proved for this recursion.
- **Decreasing tame balls:** if the compact X_n themselves were standard
  tame balls with simply connected increasing exteriors, compactness would
  force their union exterior to be simply connected. The X_n in this
  argument retain terminal handles; the B_n are the balls.
- **Abstract F₂:** identifying only π₁(Z) with F₂ does not locate the
  annulus or its word. Section 3 identifies the full marked pair instead.
- **Closed gluing:** a decomposition along a closed annulus is not the
  published open-cover van Kampen hypothesis. Section 4 provides the cover.
- **Adding infinity:** the one-point compactification is not generally
  harmless for π₁. Use the proved open-three-manifold puncturing argument
  in §7 of the earlier support, not a general assertion about compactification.

For a homological consistency check, once Σ≅S² is actually established,
the available Alexander-duality theorem gives H₁(S³\Σ;Z)=0. Thus the
required nontrivial exterior π₁ must evade abelian homology detection. This
check is not used to manufacture the missing embedding or a nontrivial loop.

## 7. Referenced-ID validation and author handoff

The following was checked against actual `items/ID.md` files, not only
against names in the earlier support. “Present” and the current frontmatter
status are file observations, not independent mathematical audits.

| ID | Observed state | Role |
|---|---|---|
| `cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls` | Absent; original ID present in batch-5 manifest | Held consumer |
| `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball` | Absent; proposal in group report | Still-required recursive existence supplier |
| `lem-horn-replacement-block-has-injective-commutator-meridian` | Absent; proposal in group report | Local geometric proof in §§3–4 is usable input, not a minted supplier |
| `thm-jordan-brouwer-separation` | Present, draft | Two complementary components, with inherited AC |
| `thm-invariance-of-domain` | Present, draft | Interior/boundary identification for the eventual ball embedding |
| `thm-seifert-van-kampen` | Present, published | The open cover in §4 |
| `thm-fundamental-group-of-finite-wedge-of-circles` | Present, published | Existing punctured-torus calculation |
| `thm-reduced-words-form-the-free-group` | Present, published | Existing nonabelian survival argument |
| `thm-compact-subset-of-a-hausdorff-space-is-closed` | Present, published | Existing compact limit criterion |
| `prop-fundamental-groups-of-punctured-euclidean-spaces` | Present, published | Existing puncturing-at-infinity step |
| `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere` | Present, draft | Optional abelian-homology consistency check |
| `def-axiom-of-choice` | Present, published | Preserve the original inherited assumption |
| `thm-banach-fixed-point` | Present, published; statement/proof read | Small-coordinate-box straightening in §3.3 |
| `thm-euclidean-space-complete` | Present, published; statement/proof read | Completeness input to §3.3 |
| `thm-mean-value-inequality-for-total-derivatives` | Present, published; statement/proof read | Derivative-to-Lipschitz estimate in §3.3 |

The last two statements/proofs were read and match their uses here (apply
the derivative estimate on a slightly larger convex open cube). This support
does not claim a full transitive audit. The displayed §3.3 argument also
spells out the exact elementary facts needed for deciding the minimal
dependency list.
No nonexistent Schoenflies, loop-theorem, graph-Wirtinger, or collaring item
is cited as available.

Recommended next authoring action: prove a **relative, cap-marked recursive
placement and parametrization lemma** that supplies all four data groups in
§5 for the explicit template of §3. Its statement must include quantitative
source and target control, not merely existence of successive finite balls.
Then combine that lemma with the earlier controlled-limit proof and author
the two proposed suppliers before the unchanged counterexample. The repair
author, not this support pass, must reconcile the exact dependency list,
manifest strategy, proof contract and any permitted local supplier registration.

Until that inductive geometric lemma is fully proved, **retain the existing
hold**. The new finite geometric model narrows the gap; it does not remove
the limit-realization obligation and cannot by itself authorize clearing it.
