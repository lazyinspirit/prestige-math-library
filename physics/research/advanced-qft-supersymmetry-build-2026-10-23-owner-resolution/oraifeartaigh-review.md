# O'Raifeartaigh tree-level minimum: supplier repair and consumer review

Run `advanced-qft-supersymmetry-build-2026-10-23`, 2026-10-23, round 1.
Research repair only; no item acceptance, publication, workflow transition or
native gate is asserted. The exact before-image is
`oraifeartaigh-before/research-supersymmetry.md` in this directory.

## Confirmed defect and source match

The former specialist passage inferred V>=|k|^2 from the absence of a simultaneous
F-zero for nonzero k,m and arbitrary y. That inference is false. On noncompact
field space, absence of zeros does not even generally imply a strictly positive
infimum. For this particular polynomial the infimum is positive and attained,
but it can be smaller than |k|^2.

I inspected the existing `/tmp/susy-primer.pdf` directly with PyMuPDF, verified its
title page identifies Martin, *A Supersymmetry Primer*, arXiv:hep-ph/9709356v7,
January 2016, and read PDF/printed pp. 75–77. In §7.3 eqs. (7.3.1)–(7.3.3) it
has exactly W=-k Phi1+m Phi2 Phi3+(y/2)Phi1 Phi3^2, the canonical sum of three
F-squares, and F_i=-conjugate(W_i). It takes k,m,y real positive by field phase
rotations and explicitly says: “If m² > yk (which we assume from now on)” before
stating the minimum at phi2=phi3=0. Thus the source does not support the old
unrestricted bound. The repair keeps complex parameters and treats y=0 directly;
it does not require phase rotations to divide by a vanishing coupling.

The source's one-loop discussion is for its assumed branch and does not establish
the unrestricted quantum minimum. I read that qualification, not a complete
Coleman–Weinberg calculation. No fresh network retrieval or full-paper audit is
claimed. The broader historical source ledger remains its author's record.

## Complete mathematical argument

For k,m nonzero complex, y arbitrary complex, and x,w,z in C, set

`V(x,w,z)=|k-(y/2)z²|²+|m|²|z|²+|mw+yxz|²`.

Write a=|k|>0, b=|m|²>0, c=|y|. With t=|z|², expand the first square and use
Re(conj(k) y z²)<=a c t. Therefore

`V >= a²+(b-ac)t+(c²/4)t²`.

Every t>=0 attains this lower bound: if c t>0 choose z²=(c t/y)(k/a), which
has modulus t, using a complex square root; choose any x and w=-yxz/m.
When c t=0 the same conclusion follows with z=0 if t=0, or any z of modulus
sqrt(t) if c=0. These choices set the final square to zero and align y z²
with k when it is nonzero. The square-root existence needed here has a specific
already pinned mathematical supplier, listed below.

If c=0, minimize a²+bt at t=0. If c>0 and b>=ac, the polynomial minus a² is
`(b-ac)t+(c²/4)t²`, nonnegative and zero only at t=0, even when b=ac.
If 0<b<ac, completing its square gives

`a²-(ac-b)²/c²+(c²/4)(t-2(ac-b)/c²)²`.

Thus the exact attained minimum is a² for c=0 or b>=ac, and
`a²-(ac-b)²/c²=(b/c)(2a-b/c)>0` for c>0 and 0<b<ac.
The full minimizer set in the first branch is z=w=0 with arbitrary x. In the
second branch it is
`z²=(2k/y)(1-b/(ac))`, `w=-yxz/m`, with arbitrary x and either of the two
nonzero roots z. Necessity follows because both inequalities in the lower bound
must be equalities: the final square vanishes and, for nonzero z, phase alignment
saturates the real-part bound. The one-variable polynomial must also attain its
unique constrained minimum. This proves the complete minimizer classification,
including the y=0 and b=ac boundaries.

The former stronger inequality V>=|k|² holds for all field values exactly when
b>=ac (which includes c=0). In the other branch the displayed minimizer has a
strictly smaller value. A numerical counterexample with exact values is
k=y=1, m=1/2, x=w=0, z=sqrt(3/2): V=1/16+3/8=7/16<1.
Here a=1,b=1/4,c=1 and the exact formula also gives 7/16.

The physical F-values follow from differentiating the same W:
F1=conj(k)-(conj(y)/2)conj(z)², F2=-conj(m)conj(z),
F3=-conj(m)conj(w)-conj(y)conj(x)conj(z). Thus F2=0 forces z=0 and then
F1=conj(k) is nonzero. With canonical metric, no D-term, and the adopted
three-field global SUSY model, the minimizing constant-field configurations
therefore have nonzero F-values and positive classical potential. The parameters
have dimensions [k]=mass²,[m]=mass,[y]=1,[fields]=mass in hbar=c=1, so both
branches have dimension mass^4. The result proves global classical potential
minimality with flat x directions. It does not prove a strict isolated minimum,
quantum vacuum existence, quantum stability, radiative lifting, a goldstino
Ward identity or a realized cosmological phase.

## Exact proposed mathematical helper and physical interface

Add `lem-qftx-three-complex-variable-f-term-polynomial-minimum`, kind lemma,
domain mathematics, on the existing A page `aqft-susy-math-foundations`.
Its Statement should be the complete polynomial minimum and all minimizers
above for k,m nonzero and y arbitrary; no F-field, vacuum, symmetry or model
premise is part of that mathematical assertion. Its concise local proof is the
real-part bound, cancellation, completing square and equality analysis above.
No new pair is warranted for this elementary lemma.

Exact proposed mathematical dependencies, read in their current pinned carriers:

- `thm-complex-numbers-form-a-field`: coordinate arithmetic and division by
nonzero m or y; published/audited 2026-08-13.
- `def-complex-conjugate-real-imaginary-part-and-modulus`: modulus and conjugation;
published/audited 2026-08-13.
- `lem-complex-conjugation-and-modulus-laws`: definiteness, product and triangle
inequalities; published/audited 2026-08-13. The real-part inequality also follows
by Re(u)<=|u| from the coordinate modulus definition.
- `thm-every-complex-number-has-a-square-root`: explicit Cartesian square-root
construction for the phase-aligned z; published/audited 2026-08-13.

These four files are currently present and pinned in `math-imports.json` with
matching bytes, unlike the unrelated missing superalgebra interfaces. I read
their complete local arguments where present; their transitive supplier proofs
are not newly audited here. No original mathematical supplier was changed.
Root should check their page-home/prerequisite closure when inserting the new
local helper, preserving ordinary pin and dependency requirements.

The proposed physical consumer retains ID
`pthm-qftx-oraifeartaigh-f-term-breaking` on
`qftx-susy-breaking-and-phenomenology`, with dependencies:

1. `post-qftx-n1-wess-zumino-model`, as the explicit three-field canonical
O'Raifeartaigh instance (the currently earlier single-field illustration alone
would not define this model instance).
2. `pthm-qftx-n1-f-term-potential`, the exact canonical F-elimination result.
3. `lem-qftx-three-complex-variable-f-term-polynomial-minimum`, the purely
mathematical attained-minimum calculation.

Its repaired contract states the full parameter range and exact two-branch
minimum, retains V>=|k|² in its valid b>=ac regime, proves classical F-term
breaking at global minimizers and distinguishes all quantum claims. This
preserves the broad approved theory instead of restricting the model to hide the
defect. Root owns the corresponding inventory/dependency insertion; I edited
only the authorized specialist passage and its candidate-contract row.

## Direct and indirect consumer dispositions

Inspected the complete proposed row for this physical theorem, all incoming
and outgoing `item_dependency_edges`, the inventory `consumers` fields, the
relevant track/source text, native batches 34 and 46, and searched current
`items/*.md` for the theorem ID. At observation time the model postulate,
F-potential theorem, O'Raifeartaigh theorem and proposed helper have no authored
item carriers. No current item source mentions the O'Raifeartaigh theorem ID.
The inventory gives the theorem two incoming edges (model and F-potential),
`consumers: []`, and no outgoing edges; its direct and transitive proposed
item-consumer closure is empty. Incoming suppliers are not downstream consumers.

The defining specialist passage directly supplies the theorem's candidate row;
both were repaired in the same change. The inventory's copied candidate string
still contains the former assertion and needs root synchronization; it was left
untouched by this scoped repair. The track merely lists the future item and
points to the specialist/inventory contracts; it states no false numerical bound.
The preview likewise lists the item and general page scope without the bound.

The page dependency graph additionally reaches
`qftx-susy-breaking-and-phenomenology-examples`,
`aqft-eft-experimental-inference`, and its B companion. The B pages are currently
empty native inventories; future worked examples must use the repaired regimes.
The EFT experimental-inference page consumes collider/statistical interfaces,
not this polynomial theorem: a shared prerequisite page is not an item-level
use. No change to its source-qualified likelihood claims follows from this
repair. `pthm-qftx-global-susy-vacuum-energy` is a sibling, not a consumer of
this example; its general unitary-algebra proof and own domain assumptions
remain independent. No other direct or indirect item consumer was found in
this bounded source/inventory review. Future authored edges must be checked
against the final actual graph.

## Verification and limits

The symbolic proof above and repaired source were checked independently after
editing. As a supplemental arithmetic check, 500 deterministic complex-parameter
cases attained the predicted formula at constructed minimizers and 5000 sampled
field points obeyed the bound (seed 729, tolerance 1e-10). This finite floating
check is not the proof or a native gate. The exact rational counterexample and
all boundary branches are established algebraically. JSON evidence binds the
before/current source, report, input carriers and source PDF identity. Root must
refresh prior evidence hashes affected by the authorized specialist edit and
integrate the helper/contract before ordinary authoring and review gates.
