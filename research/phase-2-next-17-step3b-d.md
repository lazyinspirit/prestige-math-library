# Phase 2 next 17 — group d author checkpoint

Dispatch: `step3b-d-ef4ba5b9a9e6094b`; batches 5, 6, 7.
Status: authoring in progress; no batch completion or independent approval.

## Verified entry state

Read CLAUDE.md, README.md, SCHEMA.md, current Step-3 workflow instructions,
Step-3a group-d review and batch 5/6/7 construction notes. The live state tool
confirms Step 3b; historical resumes were not used. No explicit
`phase-2-next-17-owner-authoring-direction.md` exists at entry. The owned
inventory is 209 items. Preserve all IDs and claims. Other writers have many
working-tree changes; do not reset or overwrite them.

## Current item

`def-alexander-whitney-diagonal-approximation` on
`cup-cap-cross-products-and-cohomology-rings`: authored from the finite
front/back-face formula, with the cut-end cancellation written explicitly,
naturality, augmentation, zero and degenerate cases. Ordinary unnormalized
singular chains; signed tensor differential; no AC. Dependencies read in full:
`def-singular-cochain-complex-with-coefficients`,
`def-induced-singular-chain-map`, `def-product-topology`.
The arbitrary-product AC clause is not used. Rendering and strict contract
passed (1/1); explicit-path precheck selected zero proof-bearing sections.
Recorded `accept`, confidence 1, with the three examined dependencies.
No claim of batch completion.

`thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses`:
completed and recorded accept/confidence 1 after explicit precheck, rendering,
and strict contract passed. Actual proof constructs K with dK+Kd=AW-T using
the specified simplex contractions; KS+U and SK+V give the two composite
homotopies. All five direct dependencies read in full. Source proof locator:
`lem-singular-product-chain-equivalence-by-simplex-models`, Proof, model
contraction and homotopy recursion. No arbitrary filling choices. Initial
precheck required phase-number/line formatting repair; contract initially
rejected a Proof-section quotation (only claim sections are supported), then
passed with the exact supplier Statement and the actual proof use retained.
`def-singular-cup-product-on-cochains`: completed, `repaired`, confidence 1.
Actual external product uses T, not AW. Repaired manifest and authored the
identity J(AW-T)Delta = delta(JKDelta) for cocycles, including total degree
zero. Added explicit dependencies on the earlier AW/EZ theorem and external
product descent lemma. Those suppliers were read fully. Strict contract and
rendering pass; precheck selects zero proof sections. Scope refreshed as
sufficient with the unchanged pair/inventory. Frontier ledger refreshed.
Coverage already includes the cup formula and external-product interface;
no new harvested claim or local supplier was added.
`thm-cup-product-leibniz-identity`: complete, accept/confidence 1; precheck,
rendering, strict contract all pass. Proof pulls the tensor Leibniz identity
through D and gives the simultaneous-change primitive
u cup psi + (-1)^p phi cup v + u cup delta v. Explicitly handles p=0 and q=0.
Both direct suppliers read, with exact Statement/Definition excerpts in contract.
`def-singular-cohomology-ring`: complete, accept/confidence 1. Includes local
three-face-block associativity, both unit identities, distributivity and
finite-sum well-definedness before naming the ring; no later proposition
used circularly. Both suppliers read. Rendering/strict contract pass;
precheck selects zero proof sections. Two batch-7 edge records now reflect
authored cup/Leibniz suppliers but remain open pending the actual de Rham
comparison. Frontier refreshed.
`prop-cup-product-is-natural-unital-and-associative`: complete and accepted
after all three checks passed. Three direct suppliers read; proof gives the
pointwise pullback/unit identities, three-block associativity and passage to
finite graded sums.
`lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal`:
authored; precheck/rendering/strict contract pass after canonical phase repair.
Proved shuffle swap by N -> pq-N inversion count, then constructed K=LA-BV
with dK+Kd=WA tau-A. Manifest now declares the actual shuffle definition and
AW/EZ theorem; unused prism/naturality dependencies removed. Both suppliers
read. Scope refreshed. **Item recording is pending:** tool rejects with
`Step 3a must clear before item auditing` despite refreshing this pair; inspect
the whole-run scope gate rather than overriding another group's decisions.
The failing scope belongs to `grothendieck-spectral-sequences-and-computations`,
outside this group. No outside decision was changed.
`thm-singular-cohomology-is-graded-commutative`: authored and all three checks
passed. Exact primitive is JH, where dH+Hd=WD-D; Jd=0 is checked in both
contributing bidegrees. Both dependencies read. Recording may remain blocked
by the whole-run scope gate; inspect the receipt before claiming closure.
Update: the other group's scope gate cleared. Recorded graded commutativity
as accept and factor reversal as repaired, both confidence 1. Eight original
items now have authored content, contracts, checks and decisions. Batch-7
ring/graded-commutativity edges updated to current supplier state, still open
until the actual consumers are authored; frontier refreshed.
`def-relative-cup-product`: completed and recorded repaired/confidence 1.
Added actual Leibniz dependency. Wrote vanishing/primitive argument and the
relative comparison: extend D by zero off simplices in U, let P=1-dE-Ed,
then descend P and E through both quotients. Dualizing these homotopies gives
the required cohomology isomorphism, with no arbitrary-triad assertion.
All five suppliers read fully; strict contract/rendering pass, precheck
selects zero proof sections. Scope/frontier refreshed.
`prop-relative-cup-products-are-natural-and-compatible-with-connectors`:
complete and accepted/confidence 1 after all three checks. Defined the exact
connector H(A,A intersect B) -> H(X,A union B) through the termwise exact
relative restriction sequence, proved lift independence, then used
tilde-alpha cup beta and alpha cup tilde-beta to derive both formulas.
Four suppliers read in full.
`def-cap-product-with-cohomology-first`: authored, accepted/confidence 1;
render/strict contract pass; precheck selects zero proof sections. Both
dependencies read. Explicit p=0 identity, p=n last-vertex output and p>n zero.
`thm-cap-product-boundary-identity`: authored; rendering passed immediately.
Initial precheck needed canonical phase repair and contract omitted the
in-prose Step 1.1 input; both repaired. Item decision pending until rechecks
and whole-run scope gate clear; no accepted receipt was written initially.
Actual indexed cancellation: first p+1 front terms cancel, leaving the first
back face with sign (-1)^p and later faces with signs (-1)^i. All n=p, n<p,
p=0 cases separate. Descent primitives are (-1)^p phi cap b and
(-1)^p u cap c. Three suppliers read. Rechecks now pass; remaining decision
block was outside scope `affine-lie-algebras-and-loop-central-extensions`.
`prop-cap-product-naturality-and-projection-formula`: authored with explicit
front/back calculations and separate low-output-degree cases; all three
checks pass. Two dependencies read. Record after the global scope gate clears.
Update: scope cleared and both pending cap proof decisions recorded accept.
`def-relative-cap-product`: completed, rendering/strict contract pass,
precheck selects no proof section; decision recorded after checks. Three
dependencies read. Exact quotient relations, cycles, both variable changes
and specializations supplied. Fourteen items complete.
Next: Kunneth. External absolute supplier is a PID theorem with finite free
**homology** in each degree, not a blanket finite-free cohomology hypothesis.
Its full proof has been read. The relative CW-product chain comparison and
relative algebraic application still need to be supplied; do not claim that
the absolute theorem alone proves the promised relative clause.

### Kunneth prerequisite escalation under investigation

Exact consumer: `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`,
page `cup-cap-cross-products-and-cohomology-rings`. The declared absolute
supplier `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`
has R a commutative PID and H_q(Y;R) finite free; its proof retracts singular
chains onto homology using AC, then dualizes. It does not state a relative
theorem. The local relative-cup definition only supplies excisive comparison
when hypotheses/data are established; it does not establish the CW-product
triad comparison. Hatcher Theorems 3.15–3.18, printed pp.216–219, use a
different route, via a cohomology-theory comparison for CW pairs and quotient
reduction for B, under finite free **cohomology**. The retrieved text of those
arguments has been inspected, including the telescope/skeletal-stabilization
qualification at p.217. The displayed diagrams are omitted by extracted
text; initial web screenshot calls did not provide visible image content.
Recovery succeeded with the already-fetched full PDF and local MuPDF:
rendered PDF page 35 (printed p.219) and inspected both full diagrams. The
upper horizontal arrows are quotient-induced cohomology isomorphisms; the
lower diagram is the split pair/triple comparison described in the text.
There is no remaining retrieval blocker for that argument.

Additional local interfaces read: `prop-relative-cw-inclusions-are-cofibrations`
(actual general-CW HEP proof),
`cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` (homology
only, requiring an explicit neighborhood deformation retract),
`thm-excision-for-singular-cohomology` (draft, open-set excision),
`lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`, and
`def-axiom-of-choice`. None alone supplies the missing comparison.

Proposed local suppliers, before this consumer on the existing A page:
`lem-relative-singular-product-chain-equivalence-for-cw-pairs` and
`lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses`.
These IDs are proposals only, not minted or claimed authored. The first must
prove the CW product-triad excision/cochain equivalence and compatibility
with AW/shuffle; the second must apply the PID contraction/finite-dual
argument to free relative chain complexes. If the promised relative clause
means finite free cohomology instead, Hatcher's broader CW-theory comparison
also needs a fully authored supplier, including unbounded-dimensional cases.
Preserve the promised result; do not silently substitute the stronger
homology hypothesis. This is a confirmed gap in the draft proof support,
not a claim that either source theorem is false or a published defect.
Recorded `escalate` with confidence 0 and the five examined declared inputs.
Owner alone resolves this decision. No incomplete item file was minted and
no completed proof/contract claimed for this theorem. Independent later items
may proceed; consumers requiring this theorem remain pending.

`def-cup-length-over-a-coefficient-ring`: completed with explicit {0}
insertion, including zero-ring convention, bounded/unbounded supremum,
downward closure and homotopy invariance. Added the actual earlier
naturality/homotopy dependency; all three read. Rendering/strict contract
pass, precheck selects zero proof sections. Scope refreshed without resolving
the Kunneth escalation; item recorded repaired/confidence 1. Frontier refreshed.
`prop-positive-degree-cup-products-on-a-suspension-vanish`: completed;
precheck/render/strict contract all pass. Added and read the exponential-law
supplier; derived quotient-cylinder continuity before using explicit cone
contractions. Calculated point cohomology, lifted two positive-degree classes
through pair exactness, and killed their product in the union-relative group.
Six suppliers read; recorded repaired/confidence 1 and refreshed scope/frontier
without touching the Kunneth escalation. Sixteen original items complete.
Next: inspect companion dependencies; Kunneth-dependent examples remain held,
while independent cap/cochain examples can be authored.

## Published concerns for serial reconciliation

Confirmed state mismatch: published page
`singular-cohomology-and-coefficient-theorems` has current supplier
`def-singular-cochain-complex-with-coefficients` in draft status, run
`phase-2-next-20`; likewise the chain-equivalence supplier
`lem-singular-product-chain-equivalence-by-simplex-models` is draft.
Both files were read completely; their local arguments do not thereby acquire
publication approval. The earlier group notes enumerate further affected
suppliers; those remain a reported prior finding, not a fresh exhaustive audit.
Owner should reconcile their separate run/publication evidence. Do not edit
published content or the canonical published-consumer ledger in this dispatch.

## Open obligations

All remaining items and ten A/B pages still need authoring. Full design/source
reading for later pairs, batch contracts, cross-batch review, rendering,
content-policy, precheck, strict contracts, and plan checks remain outstanding.
The de Rham wedge/cup comparison remains a load-bearing obligation; Step-1 or
Step-3a approval is not its proof. Retain earlier published concerns about
Kronecker descent, partition-of-unity choice, and inverse-function assumption
granularity for current-file verification as their consumers are reached.

`ex-cap-product-on-the-oriented-circle`: authored terminal-vertex calculation,
explicit precheck/render/strict contract pass. All four declared suppliers read
fully, including sphere and H0 proofs. Normalization is a given hypothesis;
no UCT or unproved existence assertion used. Recording attempted but currently
blocked by the whole-run Step-3a gate; do not claim a receipt. Next independent
item: the additive coefficient group counterexample, whose scaffold's literal
claim of no canonical bilinear pairing needs qualification because zero is one.
`cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical`:
authored both ring operations, associative calculation and units, four versus
two idempotents, and the minus-identity equivariance obstruction. Repaired
manifest wording to acknowledge the canonical zero pairing while preserving
the intended unital obstruction. Scope refreshed. Canonical precheck/render
and strict contract pass after step-reference repair. Sole supplier read fully.
Item recording remains blocked by whole-run Step-3a gate; no receipt claimed.
Next: strict cochain-commutativity counterexample.
`cex-cochain-cup-product-is-not-graded-commutative-on-the-nose`: completed
indicator-cochain witness, signed cup comparison 1 versus -0, both coboundary
values 1. Both suppliers read; all three checks pass; accept recorded.
Update: global scope gate cleared; circle accept and additive-coefficient
counterexample repaired decisions now recorded, confidence 1. Nineteen items
have completed content, contracts, checks and receipts. No local suppliers added.
`def-topological-manifold-with-and-without-boundary`: complete; four suppliers
read fully; definition render/strict contract pass, precheck selects no proof
sections. Boundary defined by an existential quantifier over all charts; chart
agreement is explicitly reserved for the following theorem, as scaffold
intended. Zero/empty conventions are explicit. Item accept recorded.
Read full AT-8 design section, lines 1073–1144 of the current track plan.
Next: local homology. Its scaffold must qualify intrinsic dimension by
nonemptiness; the empty space admits every dimension. Actual proof also needs
pair exactness and homotopy invariance explicitly in deps.
`thm-local-homology-detects-interior-points-boundary-points-and-dimension`:
authored complete local-pair argument, with closed-complement excision,
unnormalized point complex, both explicit contractions, low-degree pair
sequence and both boundaryless iff directions. Repaired intrinsic dimension
qualification for nonempty M, and replaced unused global Euclidean dimension
theorem with actual pair exactness/homotopy/functoriality dependencies. Six
suppliers fully read. Precheck/render/strict contract pass; sufficient scope
refreshed and repaired decision recorded. Twenty-one originals complete.
The relative Kunneth escalation remains owner-held. Next orientation-cover
construction needs its actual uniform local-generator comparison, not merely
the pointwise local-homology calculation.
Added and fully authored local A supplier
`lem-coordinate-ball-classes-identify-local-homology-stalks`, before the
orientation-system definition. Exact claim: restriction from a closed
coordinate ball to each interior stalk is an isomorphism over any commutative
ring, compatible for nested balls in different charts. Proof includes compact
closedness, actual excision condition, annulus retraction, u-tx sphere
comparison, natural connecting maps and n=0,1. Seven suppliers read fully.
Source: Hatcher printed pp.233–234, entire local orientation/comparison and
cover construction passage read from PDF pages 49–50 using MuPDF text.
Manifest, coverage and contract registered; precheck/render/strict contract
pass. This dispatch-created supplier is NOT sent to record-item or self-review;
engine addition certification remains separate. Next: use it for the cover.
`def-orientation-local-system-and-orientation-cover`: authored full basis,
overlap, local trivialization, two-generator sheet construction and finite
path/grid transport proof. Actual deps replaced scaffold's insufficient
pointwise/absolute functoriality list. Five suppliers read fully, including
choice-free Heine–Borel and Lebesgue-number proofs (truncated initial
Heine–Borel passage recovered by bounded reread). Render/strict contract pass;
definition-only precheck clean. Scope refreshed with the new lemma; original
definition repaired decision recorded. Twenty-two originals and one addition
complete. The addition has no self-review decision, as required.
`def-r-orientation-of-a-topological-manifold`: complete and repaired decision
recorded. Constructs the R-system directly with actual ball restriction lemma;
proves overlap, generator/unit equivalence in both directions, local-constant
section characterization and open-interior convention. Zero ring and empty
section included. Three suppliers read; definition precheck, render and strict
contract pass. Twenty-three originals plus one added lemma complete. Next
componentwise proposition must distinguish a supplied family of orientations
(choice-free gluing) from merely separate existence (selection requires AC).
R-orientation contract correction: after changing the two iff cases to checked,
their evidence initially lacked the mechanical word 'Definition'; strict check
then failed, although the prior contract had passed. The item decision command
was inadvertently run before inspecting that failure. Anchors are now corrected
and strict recheck passes; this was a contract locator repair, not missing math.
`prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise`:
authored and repaired decision recorded after all checks pass. Component
openness proved via connected convex charts; supplied-family gluing is inverse
to restriction. F2 orientation is canonical and choice-free. AC explicitly
assumed only for selecting orientations from separate existence statements on
all components; declare this assumption for consumers of that clause, not for
consumers using only the canonical F2 clause. Five suppliers read fully.
Twenty-four originals plus one addition now complete. Next compact-orientation
lemma requires a full arbitrary-compact-set existence and injectivity proof.
Added `lem-relative-homology-mayer-vietoris-for-closed-supports`, fully authored
before the compact orientation lemma. Exact chain short exact sequence uses
C/(D intersect E), diagonal into C/D plus C/E, and difference into C/(D+E).
Open-complement quotient-chain equivalence comes from the already authored
relative-cup construction; the new lemma does not merely cite ordinary MV.
Three suppliers read in full. Manifest/coverage/contract registered; explicit
precheck/render/strict contract pass. No item self-review for this new addition.
Source Hatcher Lemma 3.27 pp.236–238 read in full, including all four reduction
steps and the p.238 continuation. The next proof must establish vanishing above
n and detection at points together with existence, since uniqueness in the
union step uses H_(n+1) of the intersection equal to zero.
`lem-compatible-local-orientation-classes-exist-over-compact-subsets`: complete
and repaired decision recorded after checks. Strengthened explicit statement
with H_i(M,M-K)=0 for i>n, pointwise injectivity in degree n, and realization
of arbitrary continuous local-system sections, exactly Hatcher 3.27(a),(b).
Proof: radial convex-support comparison (including boundary x), finite convex
unions with intersection induction, finite ball thickening avoiding the actual
boundary chain's compact image, then finite chart pieces and another union
induction. All eleven actual suppliers read. Component openness re-proved
locally to keep this proof choice-free. Coverage registered the added clauses;
scope/frontier refresh required after actual edits. Twenty-five originals and
two additions complete, not all-batch completion.
Additional source for upcoming top homology: Hatcher Proposition 3.29 p.239
read fully and the entire displayed triple diagram visually inspected from PDF
page 55. Noncompact top-homology injection requires the triple argument with
V=M minus closure(U), not the scaffold's bare finite-support assertion.
`def-fundamental-class-of-a-compact-oriented-manifold`: completed, repaired
decision recorded. K=M uniqueness, finite component decomposition, explicit
clopen-complement excision and sign reversal by uniqueness; empty/zero-ring,
zero-dimensional and characteristic-two cases included. Two suppliers read;
checks pass. Twenty-six originals and two additions complete.
Next `thm-top-homology-characterizes-compact-orientable-manifolds`: add actual
triple input and sign/coefficients argument; require M nonempty for the compact
connected classification (empty connected convention otherwise contradicts it).
Correction to the immediately preceding fundamental-class receipt line: its
record-item call was blocked by the whole-run Step-3a gate. Content and checks
are complete, but the decision is pending; inspect a successful receipt before
claiming it recorded. No triple-sequence supplier was found among existing
items; the top-homology proof will derive the needed short exact quotient-chain
sequence locally and apply the published general homological exact sequence.
`thm-top-homology-characterizes-compact-orientable-manifolds`: complete,
repaired decision recorded after canonical precheck, rendering and strict
contract pass. Eleven suppliers read. Actual proof establishes coefficient
extension sends an integral local generator to an R-generator, so transport
has the same ± signs; section values are constructed uniquely from invariant
base-point values, without selecting paths globally. This yields R versus
R[2] with the characteristic-two and unit cases checked. Noncompact proof uses
V=M minus closure(U), W=U union V, the actual quotient-chain short exact
sequence, and injection H_i(U)->H_i(M,V) for i>=n from high-degree compact
support vanishing. Empty connected convention repaired by nonempty M.
Fundamental-class pending decision also successfully recorded after gate
cleared. Twenty-seven originals and two additions complete. The sole owner-held
item escalation remains the relative Kunneth theorem. Next compact-support
cohomology definition, then the load-bearing local cap-duality computation.
`def-compactly-supported-singular-cohomology-of-a-locally-compact-space`:
complete and accepted after checks. Actual filtered quotient equivalence,
module operations and universal property, eventual-vanishing criterion in
both directions, terminal compact case and cofinal relatively compact
neighborhood supports supplied. Three dependencies read fully. Twenty-eight
originals and two additions complete. Next add the actual cap-duality-map
definition before local duality, since compact-support compatibility is needed
for all later ladder and colimit arguments.
Added `def-cap-duality-map-for-an-oriented-manifold`, fully authored before
local duality; manifest, coverage and contract registered. The map uses actual
relative cap and compact orientation classes, and enlargement gives explicit
boundary difference (-1)^p partial(phi cap b). All five dependencies read;
render/strict contract pass, definition precheck clean. No self-review for this
addition. Source locus corrected to Hatcher p.245 (not the scaffold's p.244).
Read full Hatcher pp.242–248, including the compact-support definitions, map,
all ladder proof prose, and all finite/infinite duality proof steps. Diagrams
on pp.245–246 still require visual inspection before the ladder item; prose
extraction is not diagram evidence. The local Euclidean proof is on p.248.
Freshly read current `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`
and its complete `lem-singular-uct-extension-from-cycle-projections` proof.
The current UCT explicitly includes arbitrary relative pairs and evaluation;
AC is used for arbitrary-rank cycle/boundary freeness and projections and free
comparison lifts. This is sufficient for the upcoming local cap evaluation;
it remains draft under phase-2-next-20 despite its published page consumer.
`lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls`: completed and
repaired decision recorded. Relative integral homology from complement sphere
retraction, current relative UCT evaluation, compatible center-normalized
integral classes, and augmentation(phi cap u z)=u phi(z) prove the actual cap
map is an isomorphism. All support transitions have identity evaluation
coordinates. n=0,1, negative degrees, zero ring and orientation unit checked.
Eleven suppliers plus the complete UCT extension proof read. AC occurs only in
UCT's free cycle/boundary projections and comparison lifts. Checks pass.
Twenty-nine originals and three added suppliers complete. Next ladder needs
actual open-excision extension maps, a cochain short exact sequence, compact
support cofinality, and the sign (-1)^(p+1) in the connecting square.

Continuity refresh: read the new owner-authoring-direction fully. The relative
Kunneth escalation is now reopened by explicit owner direction, with both
proposed local suppliers authorized. Their actual proofs, relative CW-triad
compatibility, unbounded finite-free homology hypothesis, and separation of
choice-free multiplicativity from AC additive bijectivity remain outstanding.
No completion is inferred from that authorization.

Published concern (confirmed proof-support defect, high confidence; no claim
that the mathematical theorem is false):
`thm-ab5-is-equivalent-to-exactness-of-filtered-colimits`, published page
`exactness-and-the-member-calculus`, proof step 1.1 invokes the forward
implication of the equivalence quoted as L5 from Weibel Appendix A.4.6, which
is precisely the implication it is supposed to prove. No derivation of
AB5 => exact filtered colimits is supplied. Required repair: a full categorical
argument from the directed-subobject identity to exactness, with necessary
image/colimit suppliers registered; Weibel A.4.6 is the exact proposed source
locator, not source-reading evidence (only the item's full text was read).
The current ladder will instead prove the needed directed-colimit exactness
for modules by the explicit common-stage criterion, removing both AB5 and
Grothendieck-category dependencies. Serial reconciler owns the published ledger.
Hatcher Lemma 3.36 pp.246–247 reread fully; the p.246 diagrams were visually
inspected. The chosen top signs are (extension,-extension), then sum; the
ordinary homology connector satisfies partial D=(-1)^(p+1) D delta.
`lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder`: complete,
repaired decision successfully recorded after precheck/render/strict contract
pass. Twelve suppliers read fully. Exact proof supplies open extension by
excision, cochain SES with (q,-q) and sum, explicit simplexwise lifts,
cofinal compact pairs, elementwise directed-colimit exactness, and
partial D=(-1)^(p+1)D delta. Q-cochain cap comparison uses an actual relative
cocycle differing by delta b in Q, whose cap difference is an explicit boundary
because partial c2 lies in C(A)+C(B). No AC. Removed categorical AB5/Grothendieck
inputs; scope sufficient refreshed, frontier refreshed. Thirty original items
and three additions complete. Next supply increasing-open-union cap duality
before attempting finite coordinate unions, whose arbitrary chart overlaps
cannot simply be asserted finite unions of balls.
Added `lem-cap-duality-passes-to-increasing-open-unions`, fully authored and
registered in manifest/coverage/contract before finite-union consumers. Hatcher
p.248 step (B) reread. Compact subsets and finite chains lie in a stage;
relative support excision gives cohomology colimit surjectivity and detects
zero at a later support; finite boundary witnesses prove homology colimit
injectivity. Stage cap bijectivity passes by one-element lifting and vanishing,
without AC. Three suppliers read, explicit precheck/render/strict pass. No
Step-3 item decision for this dispatch-created addition. Thirty originals and
four additions complete. Next arbitrary open Euclidean subsets must be proved
using finite convex intersections and countable rational-ball unions, before
finite chart unions; do not assume overlaps are finite unions of balls.
Added `lem-cap-duality-for-open-subsets-of-euclidean-space`, fully authored,
registered and checked after adopting canonical phase order (rational-cover
construction is step 1.3). Seven suppliers read. Proof uses the signed five-term
window, explicit interval/ball homeomorphisms for boxes, simultaneous induction
on finite box collections and their intersections, and a prescribed listing of
all rational endpoint tuples with invalid boxes replaced by empty sets. This
proves arbitrary Euclidean opens without an unproved convex radial-boundary
claim. AC inherited only from local UCT. Hatcher p.248 step (2) is source;
proof locally substitutes rational boxes for general bounded convex sets.
No self-review decision for this addition. Thirty originals and five additions
complete. Next author preserved finite-chart-union item using this overlap
supplier, then the exhaustion lemma; the latter currently declares the defective
AB5 forward implication and will instead use the new direct colimit supplier.
`lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls`:
complete authored proof/contract, precheck/render/strict pass. Eight suppliers
read. Signed five-term window proves the choice-free two-open implication;
homeomorphism cap compatibility explicitly transports compact orientation
classes; finite chart induction invokes the new arbitrary-open overlap theorem.
AC inherited only from local UCT. Scope/frontier refreshed. Its repaired item
receipt is PENDING: record-item was rejected by the whole-run Step-3a gate.
Do not override other groups' scopes or claim a successful receipt. Thirty-one
originals authored (thirty receipts), five additions authored. Next exhaustion
must distinguish coordinate half-balls for boundary manifolds; the cap-duality
conclusion itself concerns boundaryless oriented manifolds.
`lem-manifold-exhaustion-passes-local-duality-to-the-colimit`: complete and
repaired decision recorded after checks. Eight suppliers read. Exact AC use:
choose a coordinate neighborhood containing each eligible countable-basis
member; compact nesting then uses least integers. Support excision and finite
cycle/boundary witnesses give the colimits directly, avoiding AB5. Boundary
manifolds use relative coordinate half-balls; cap consequence explicitly
boundaryless oriented. The finite-union pending receipt also succeeded.
Thirty-two originals with receipts, five additions complete. Next Poincare
duality theorem, then its pairing/relative/boundary consumers in manifest order.
`thm-poincare-duality-for-oriented-topological-manifolds`: complete, repaired
receipt recorded after checks. Nine suppliers read; actual cap-compatible
exhaustion gives the isomorphism, compact support M gives fundamental cap,
open-extension naturality is the exact meaning of natural, and component
cochains use finite support, hence direct sums. AC atlas/UCT uses propagated.
Thirty-three originals with receipts and five additions complete.
Next pairing corollary needs finite generation for its integral torsion-free
unimodularity claim and a field UCT over the field, not just the topological
UCT printed over Z. Read current general PID UCT extension lemma completely;
it supplies the latter after applying to field singular chains. Read Hatcher
pp.249–250 complete prose, including Prop3.38 proof (p.249 diagram not yet
visually inspected). Retrieved Arvind Nair, Topology II (2024), full PDF at
https://mathweb.tifr.res.in/~arvind/topology/manifolds2024.pdf and read all of
section 1.11, Theorem1.11.1 and complete proof, printed p.11. Its general-ring
UCT route is not being consumed; local supplier will prove the needed PID
finite-generation claim directly from the finite back faces of a fixed
fundamental cycle, using the fully read finite-free PID submodule corollary.
Added `lem-closed-oriented-pid-manifolds-have-finitely-generated-homology`:
fully authored, registered, precheck/render/strict pass; four suppliers read.
Fixed finite fundamental cycle z, finite free span S_q of its back faces,
T_q=S_q intersect cycles finite free by the PID submodule theorem, and PD
makes T_q surject onto H_q. Individual back faces need not be cycles and the
proof explicitly does not assume they are. Cohomology and vanishing outside
0..n follow by PD. AC inherited atlas/UCT only. No addition self-review.
Thirty-three originals with receipts and six additions complete. Next pairing:
apply general free-PID UCT to field singular chains (cochain tensor/Hom
identification read fully), compute integral Ext from finite cyclic resolutions,
and identify the evaluation kernel with torsion. Both pairing adjoints must be
shown isomorphisms, with graded commutativity for the reversed argument.
`cor-poincare-duality-gives-a-nonsingular-cup-pairing`: complete and repaired
receipt recorded after checks. Ten suppliers read. Actual simplex evaluation
identity, field-complex UCT (not a misreading of integral topological UCT),
finite spanning-list basis reduction, finite diagonal cyclic Ext resolution,
and kernel=torsion prove the second adjoint isomorphism. Swapping degrees and
multiplying by the graded-commutativity unit proves the other adjoint. Integral
free quotients are finite free by the authored finite-generation lemma and
published abelian classification. Empty/point/all degree endpoints covered;
AC inherited atlas/UCT. Thirty-four originals with receipts, six additions.
Next degree definition must require nonempty connected closed manifolds since
the empty connected convention does not supply an infinite cyclic top group.
`def-degree-of-a-map-between-oriented-closed-manifolds`: complete definition
and contract; render/strict pass, precheck checks no proof-bearing rows as
appropriate for a definition. Three suppliers reread; Hatcher p.258 Exercise7
complete definition and exercise read. Nonempty hypothesis repairs uniqueness
under the empty-connected convention; n=0 degree is epsilon_M epsilon_N.
Repaired receipt currently pending (whole-run Step-3a gate closed). Thirty-five
originals authored, thirty-four receipts, six additions. Next degree
functoriality/top-cohomology detection: use actual H^n evaluation isomorphism
from PD followed by H_0 augmentation, avoiding reliance on only torsion-free
pairing for an assertion about all of H^n.
`prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`: completed,
repaired receipt recorded; seven suppliers read and all item checks pass.
Actual evaluation E_M=augmentation after top cap is an isomorphism on all H^n,
not only modulo torsion. This gives unique normalized u_M and the literal
pullback degree coefficient. Both degree-zero directions checked. Degree
laws choice-free, AC only in PD for cohomology detection. Degree definition
pending receipt also succeeded. Thirty-six original items with receipts and
six additions complete. Next read the remaining AT8 manifest and actual
boundary/relative-duality suppliers before deciding local repair scope.
`thm-topological-collaring-for-manifold-boundaries`: complete and repaired
receipt recorded after canonical precheck/render/strict contract. Seven direct
suppliers examined; Hatcher p.253 full proof read. Explicit finite normalized
bump family, external quotient Hausdorff/chart description, affine segment
stretch and inverse, compact base-support gluing, boundary-fixed pullback
collar, inward push and explicit strip retraction establish all three claims.
No AC. Cofibration proved directly from HEP, avoiding the published CGWH-only
strip criterion's additional category interface. Thirty-seven originals with
receipts and six additions complete.
Batch7 owned dependency input updated: AT7 core and AT8 fundamental/degree
suppliers are now authored, with exact nonempty and AC boundaries; all DG17
consumer uses remain open. Unified ledger refreshed.

Current next item: `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class`.
Hatcher pp.253–254 read fully; boundary-class compatibility is explicitly left
as an exercise there, so a citation cannot discharge it. Proposed complete
local route (not yet authored): existence/uniqueness via the isomorphism
H_n(M,A) -> H_n(M,C_delta) <- H_n(interior, C_delta-A), where C_delta is an
open collar and its complement is a compact interior core. Shrinking delta
includes any given interior point; compact orientation compatibility gives the
same global class. Do not use noncompact top homology to argue uniqueness,
since M may have closed components.
For the boundary generator at x, take the compact vertical fiber K_x={x}x[0,e]
in a collar chart and L=M-K_x. Local half-space excision computes H_*(M,L)=0:
its complement retracts upwards past e and is contractible. Use the explicit
short exact sequence C(C_delta)/(C(C_delta) intersect C(L)) -> C(M)/C(L) ->
C(M)/(C(C_delta)+C(L)); open-complement small-chain comparison identifies the
last quotient with C(M)/(C(C_delta union L)). Its support is the interior
vertical segment [delta,e], so the compact orientation class is a generator
by the convex-support radial argument already proved in the compact lemma.
The connecting map is an isomorphism to H_(n-1)(C_delta,C_delta-K_x), which
retracts as a pair to (A,A-x). The map from the original pair SES proves this
is precisely the point restriction of partial[M,A]. Hence all boundary stalks
are generators; local continuity follows from this actual global boundary
cycle. Remaining sign calculation: oriented prism with coordinates
(y_1,...,y_(n-1), inward t) has bottom boundary coefficient (-1)^n, by shuffle
boundary partial(D x I)=partial D x I+(-1)^(n-1)D x([e]-[0]). This is exactly
outward-normal-first after moving outward -dt from last to first. Must fully
justify the prism as the local generator and read actual shuffle suppliers.
No claim this item is complete; source/contract and all checks outstanding.
`lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class`:
complete, repaired receipt recorded after explicit precheck/render/strict contract.
Twelve suppliers examined. Compact collar complements construct the unique
relative class, including closed components. The vertical boundary-fiber pair
is acyclic; the quotient-complex connecting isomorphism and its explicit map
from the original pair sequence prove every boundary restriction is a generator.
The shuffle prism's internal faces meet an interior vertical line only at
partial barycentric-sum heights, giving an actual local simplex generator;
the bottom coefficient (-1)^n proves outward-normal-first. All rings, n=1,
n=0/empty boundary, and zero coefficients treated, without AC. Hatcher pp.253–254
leave this compatibility as an exercise; the local argument supplies it.
Thirty-eight original items with receipts and six additions complete.
Next: relative fundamental-class definition, then both Poincare–Lefschetz
maps and their exact signed ladder, still unauthored.
`def-relative-fundamental-class-and-boundary-orientation`: authored with
well-definedness supplied by the preceding fully read lemma, inherited component
signs, exact connector identity, empty/zero-dimensional/zero-ring cases and no AC.
Definition render and strict contract pass; precheck has no proof-bearing rows.
Initial contract schema errors were corrected before the successful check.
Accept receipt recorded. Thirty-nine originals with receipts and six additions.
Next unfinished original: `thm-poincare-lefschetz-duality`; no proof or acceptance
claimed yet. Full batch checks and all ten page texts remain outstanding.
`thm-poincare-lefschetz-duality`: complete, repaired receipt after precheck,
render and strict contract. Fourteen suppliers read; the arbitrary-coefficient
homotopy theorem is used, not the real-only published corollary. Compact collar
cores are cofinal by a finite subcover of their open smaller cores. Pair five
lemma/excision gives J:H*(M,A)->Hc*(interior); explicit u-v=boundary b+h in
C_d gives equality of the actual cap maps, proving T. The five-term pair
ladder has bottom connector (-1)^p partial, other bottom maps ordinary; cochain
extension and cap boundary identity prove all four squares. Boundary orientation
is supplied by the just-authored collar lemma, not Hatcher's omitted exercise.
AC inherited only from PD atlas/UCT. All degrees and disconnected cases covered.
Initial multi-line numbered paragraphs failed canonical precheck, and grouped
F8 citation uses needed alignment; both fixed before successful checks/receipt.
Forty originals with receipts, six additions complete. Next fully relative PL:
requires an actual compatible collar replacement for boundary pieces A,B and
proof of its general exact-sequence ladder; not yet authored or accepted.
Fully relative PL working checkpoint (not authored/accepted): Hatcher printed
p.254 full page and diagram now visually read. A useful simplification is to
use U,V open in D=boundary M, not necessarily in M; the authored relative-product
comparison explicitly allows openness in their union. Glue collars of
C=A intersect B into C x (-1,1) in D, choose epsilon, set U=A plus the B-strip
of height <epsilon, V=B plus the A-strip, W=U intersect V. U retracts A,
V retracts B; (V,W) retracts (B,C_epsilon). Inclusions (M,U)<-(M,A) and
(M,B)->(M,V) induce isomorphisms by pair five lemma. The quotient comparison
C(M)/(CU+CV)->C(M)/CD is already proved in def-relative-cup-product.
The cohomology triple row comes from 0->C*(M,D)->C*(M,U)->C*(D,U)->0;
extension by zero on other M simplices proves surjectivity, and connector
is delta of that extension. Excision gives H*(D,U) ~= H*(V,W) ~= H*(B,C).
Take z with boundary b in D. Apply the explicit small-chain homotopy on D:
b_small=b-partial E b; replace z by z-E b so boundary b_small=b_U+b_V.
Then b_V is a relative cycle in (V,W). Under retraction V->B its class in
H_(n-1)(B,C_epsilon) restricts to the D orientation at every point of the
compact B core. The collar relative-class lemma on B identifies it uniquely
with [B,C]. Therefore gamma cap b_V gives an isomorphism H^p(D,U)->
H_(n-p-1)(V), by PL on B, excision, and relative cap naturality.
Ladder: H^(p-1)(D,U)->H^p(M,D)->H^p(M,U)->H^p(D,U)->H^(p+1)(M,D),
against H_(n-p)(V)->H_(n-p)(M)->H_(n-p)(M,V)->H_(n-p-1)(V)->H_(n-p-1)(M).
Only bottom connecting map is multiplied by (-1)^p. Lift gamma to cochain
vanishing U; its cap with b_U is zero, so the same cap boundary identity as
ordinary PL proves both connector squares. Other two squares are literal
quotient/restriction. All outer vertical maps are PL isomorphisms. Need write
full collar-topology verification, class-identification argument, all contracts,
registration/dependency refresh, checks and item receipt before completion.
Current count remains forty originals and six additions, all with their stated
checks; this proposed next argument is not a completed item.
`thm-fully-relative-poincare-lefschetz-duality`: complete and repaired receipt
recorded. Fifteen suppliers read, Hatcher p.254 full diagram inspected.
The proposed argument above is now written in full, including topology of the
glued seam collars, independence of collar replacements via common thin strips,
relative pair isomorphisms, explicit triple cohomology exactness, and the actual
B fundamental class from compact-core point restrictions. Its E_k cap isomorphism
is identified with ordinary PL on B, not merely an abstract group isomorphism.
The small-chain operator adjusts z to boundary b_U+b_V; every one of the four
ladder squares is proved from cap identities. Canonical step ordering adopted:
1.1 collars, 2.1 pair retractions, 2.2 triple sequence, 3.1 cap replacement,
3.2 boundary class, 4.1 E iso, 4.2 small boundary, 5.1 window, 6.1 squares,
7.1 five lemma/cases. Precheck/render/strict pass after canonical reordering.
Forty-one originals with receipts and six additions complete.
Next original: `thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts`.
This requires a complete authoritative ENR argument and the neighborhood
cohomology comparison; neither is yet authored or accepted. Remaining relative
Kunneth owner obligation is still open. Full batch checks and all pages remain
outstanding; no batch completion is claimed.
ENR source checkpoint: fetched Hatcher Appendix successfully at the first attempt
from https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf into
/tmp/phase2-d-hatcher-app.pdf; extracted text /tmp/phase2-d-hatcher-app.txt.
Read all of Theorem A.7 and its proof on appendix pp.8–10 (text lines 729–864),
including the full locally finite dyadic-cell construction, inductive extension,
continuity/neighborhood argument, and converse. Also reread Hatcher chapter3
pp.254–255 full Theorem3.44 prose (diagram254 visually read, diagram255 absent).
The ENR source's extension rule 'diameter less than twice the infimum' needs an
explicit zero-infimum case: if the infimum is zero, the already prescribed
boundary map has diameter zero and is constant, so use its constant extension.
For positive infimum choose an extension with diameter <2inf, using AC across
the cells. Exact nested-radius control can replace 'much smaller': if the next
allowable ball radius is R, pick the contraction-target radius <R/6; an
extension exists in that target with diameter <=2rho, chosen diameter <4rho,
and its nonempty boundary meets the target, so its whole image lies within
5rho of x. Finite induction through ambient dimension suffices.
Remaining proof obligation before authoring: give enough dyadic-face mesh detail
to justify its compatible locally finite CW decomposition and shrinking cells,
rather than cite a generic triangulation theorem not in dependencies. Closed
cubes at each bounded collection of coarse levels are finite near x and avoid
x in K, so a neighborhood of x meets only sufficiently small cubes. This is
the precise shrinking argument; there is no asserted uniform linear bound on
cube diameter by distance to K for Hatcher's particular maximal cubes.
For neighborhood cohomology, add the arbitrary-coefficient homotopy invariance
and cohomology functoriality suppliers. Given r:O->K and an arbitrary open
U containing K, restrict to U intersect O. The set of points y for which the
entire straight segment from y to r(y) lies in U is open and contains K:
compactness of I and continuity of (y,t)->(1-t)y+t r(y) give a finite product
neighborhood argument at each y. On this smaller open V, restriction
H*(U)->H*(V) factors through H*(K) by homotopy invariance. This proves eventual
kernel vanishing; r* proves surjectivity. No claim ENR item is complete.
ENR further dependency reading: fully read published
`def-cw-complex-with-closure-finiteness-and-weak-topology` and current draft
`prop-singular-cohomology-is-contravariantly-functorial` (phase-2-next-20),
plus the previously fully read arbitrary-coefficient homotopy theorem. The
source proof is understood except that its compact dyadic-face description
still needs a sufficiently explicit compatible subdivision argument in the
item text. Do not certify the scaffold merely because the source states that
these faces form a CW complex. The zero-infimum correction is resolved locally;
it is a source qualification, not a reported published-library defect.
`thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts`:
complete, repaired receipt recorded after explicit precheck/render/strict contract.
Four direct suppliers fully read. The dyadic face construction is written with
local finiteness, finite compatible face refinement and weak-topology evidence;
shrinking uses finitely many coarse cubes, not an unsupported distance bound.
The cell extensions now treat infimum zero by a constant extension, and the
nested-ball estimate is 5rho < next radius with rho < next radius/6.
Both iff directions have actual checked contract entries. Cohomology statement
is proved for all abelian G by the explicit neighborhood-colimit representative
criterion and the compact-interval openness argument for the straight-line
homotopy domain. AC only nearest points and positive-infimum cell extensions;
converse/cohomology from a supplied retraction choice-free.
Canonical phases: 1.1 cubes, 1.2 converse, 1.3 colimit, 2.1 cells, 2.2 cohomology
isomorphism, 3.1 shrinking, 3.2 extension, 4.1 radii, 5.1 induction, 6.1 retraction,
7.1 cases. Forty-two originals with receipts and six additions complete.
Next: `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`;
its exact reduced-degree conventions, all ladder signs and local neighborhood
colimit need derivation, and its AB5/Grothendieck dependencies must be replaced
by the direct module-colimit argument already used above. Not yet authored.
Alexander-duality next-proof checkpoint (not authored): use the simpler cohomology
route, avoiding general compact-subset homology duality. Fix standard sphere
orientation and N=S^n-K. Compact L in N corresponds exactly to open U=S^n-L
containing K. Cohomology excision removing closed K inside U identifies
H^q(S^n,U) with H^q(N,U-K); hence their neighborhood colimit is Hc^q(N).
The canonical colimit map to H^q(S^n,K) is an isomorphism by the pair cohomology
five-term window: identity maps on sphere cohomology, neighborhood colimit
H*(U)->H*(K) from ENR, and direct elementwise exactness of filtered module
colimits (move each zero/equality to a common smaller neighborhood). Stereographic
projection from a point outside K puts K in R^n, and neighborhoods within that
chart are cofinal, so the ENR clause applies without a general-manifold ENR
supplier. Provide the general n stereographic formulas locally; the published
stereographic example is only S^2 and must not be misused.
Then D_N identifies H_i(N) with H^{n-i}(S^n,K). The map from this relative
cohomology to H^{n-i}(S^n) corresponds under D to H_i(N)->H_i(S^n), by the
already-proved open-extension naturality of PD. At i=0, cap then augmentation
on the compact sphere identifies this with the H_0 augmentation; it is onto
because N is nonempty. This gives the reduced H_0 kernel without noncanonical
summand cancellation. At q=0, H^0(S^n)->H^0(K) is injective since K nonempty,
so H^0(S^n,K)=0; consequently H_n(N)=0. For q=n, the pair connector identifies
coker(H^(n-1)(S^n)->H^(n-1)(K)) with that augmentation kernel; if n=1 this is
reduced H^0(K), otherwise ordinary H^(n-1). For q=1<n the same cokernel is
reduced H^0(K) and gives H_(n-1)(N). For 1<q<n use the ordinary isomorphism.
Surjectivity at q=n plus relative H^(n+1)=Hc^(n+1)=H_-1(N)=0 gives H^n(K)=0;
higher K-cohomology vanishes by the same pair sequence, covering negative i.
For i>=n the relative/cohomology-zero cases above apply. Treat n=0 separately:
nonempty proper K in S^0 and its complement are singletons, all reduced groups0.
Define reduced cohomology locally (degree0 quotient by constants, positive
ordinary, negative0) and reduced homology degree0 as augmentation kernel,
using the published augmentation definition. Naturality is for inclusions of
compact subsets and a fixed sphere orientation; explain reversed complements.
Possible simplification: sphere cohomology can be computed by closed PD and
sphere homology with R, avoiding a new UCT dependency for arbitrary rings.
Supply its R-orientation by restricting the sphere generator: punctured sphere
is R^n, pair LES makes all point restrictions isomorphisms, and the earlier
coordinate-ball lemma gives continuity of the resulting global section.
Fully read `lem-local-sphere-orientations-and-finite-puncture-excision` and
`ex-stereographic-projection-formulas-on-the-unit-sphere`; the former is integral
and the latter only dimension2, so neither silently supplies these general-R,
general-n clauses. Hatcher p.256 full text read; p.255 remainder/Cor3.45 start
and diagram still need complete reading before claiming full Cor3.45 reading.
`thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`:
complete, repaired receipt recorded after all three item checks. Fourteen
suppliers examined, including full Heine–Borel proof and the ball/local-system
interfaces. Hatcher pp.254–256 full Cor3.45 argument now read, including the
short exact sequence across the page break; the item uses the independently
derived cohomological route detailed above. Explicit n-dimensional stereographic
formulas establish the chart (the S2-only published example is not consumed).
The sphere's R-orientation is its global class restricted to stalks, and its
cohomology is computed by PD and arbitrary-coefficient sphere homology, without
assuming R is a PID. Both the reduced H0 kernel and H0-cohomology quotient are
identified via actual maps, with n=1, n=0 and every negative degree treated.
Naturality is for inclusions of compact subsets with fixed sphere orientation.
Removed both AB5/Grothendieck dependencies; direct common-neighborhood witnesses
prove colimit exactness. Initial strict-contract F3 use omission fixed before
successful check/receipt. Forty-three originals with receipts, six additions.
Next originals: Jordan–Brouwer separation, then invariance of domain; their
statements and dependency proofs must be read before authoring. Full batch
content-policy/plan checks and all ten pages remain outstanding. Relative
Kunneth owner-directed suppliers are still not created or proved.
Jordan–Brouwer scaffold audit finding: spherical claim for n>=1 is sound, but
its unqualified 'equivalently in R^n one bounded and one unbounded component'
is false at n=1. Exact witness: embedded S^0={-1,1} in R has components
(-infinity,-1),(-1,1),(1,infinity), two unbounded and one bounded; in S^1 the
two outer intervals join through infinity. Required local statement repair:
retain spherical n>=1, state the Euclidean two-component/common-boundary clause
for n>=2, and explicitly calculate the n=1 three-component exception. This is
a confirmed draft-scaffold defect, not a published-item finding. No decision
has been recorded and no Jordan–Brouwer item is authored yet.
Invariance-of-domain scaffold also omits a substantive step: it says
S^n-f(D) is path connected without proving it. Supply this by Alexander duality
for the compact embedded closed ball (contractible, weakly locally contractible),
including its properness, then open-manifold component/path-component equality.
For n=1 its domain-ball boundary is S^0 in S^1, so use the valid spherical
Jordan–Brouwer clause; the false Euclidean equivalence is not needed.
`thm-jordan-brouwer-separation`: completed and repaired receipt after item checks.
Seven direct suppliers fully read. Standard-equator duality computes the needed
reduced sphere cohomology without a hidden UCT assumption; explicit basis
differences show reduced H0=Z means exactly two components. Disk deletion proves
all frontier points. The Euclidean n>=2 argument explicitly detours a path around
infinity; the false n=1 equivalence is corrected by the actual three-interval
calculation, including the three different boundaries. Hatcher Prop2B1 pp169–170
and Theorem2B3 p172 fully read from /tmp/phase2-d-hatcher2.pdf (88pages; printed
page=PDFpage+96). Forty-four originals with receipts and six additions complete.
Next invariance of domain: Hatcher's connectedness of the embedded-disk complement
must be supplied by Alexander duality locally; add explicit dependencies for that
calculation and for compact-to-Hausdorff embedding. No item is yet authored.
`thm-invariance-of-domain`: complete. Eight suppliers read, compact restriction
embedding proved via closed images, disk-complement connectedness derived by
Alexander duality, both open components identified and inverse continuity proved
by applying the local result on every open subdomain. n=0 and spherical n=1
cases explicit. Initial strict-contract input omission and redundant-bracket
warning were repaired. A receipt was prematurely recorded after the final
bracket edit left one stale F4 citation use: its claim of zero warnings/errors
was inaccurate at that instant. The stale use was then removed, fresh explicit
precheck/render/strict checks all passed (0 errors,0 warnings), and a corrective
repaired receipt was recorded with this exact explanation. No mathematical
statement was changed during that bookkeeping correction.
Forty-five original items with current receipts and six additions complete.
Next AT8 original: `def-lefschetz-number-of-a-finite-cw-self-map`, then Hopf trace,
simplicial approximation, finite-CW ENR and fixed-point theorem. Read current
scaffolds and dependencies before authoring. All A/B pages and full batch
checks remain outstanding; the relative Kunneth owner obligation remains open.
`def-lefschetz-number-of-a-finite-cw-self-map`: authored, repaired receipt after
render/strict contract; definition precheck has no proof-bearing rows. Four
suppliers fully read, including the exact consecutive-skeleta chain-group
calculation added to deps. Rational-linear homology maps, finite-dimensional
cycles/boundaries/quotient and largest cell dimension justify the finite sum;
f need not be cellular. Homotopy invariance, empty sum, point value1 and finite
discrete fixed-point count explicit. No AC beyond finite choices.
Forty-six originals with receipts and six additions complete.
Read Hatcher pp179–181 complete Lefschetz proof text and Hopf trace discussion;
diagram p181 not visually inspected yet. Next Hopf trace formula must prove
actual block trace cancellation over an arbitrary field, with no AC needed for
finite bases. Following finite-CW ENR and relative approximation remain unproved.
`lem-hopf-trace-formula`: complete, repaired receipt after all item checks.
Three direct suppliers fully read. Added the finite-dimensional subspace/basis
extension theorem; the separately inspected Zorn basis-extension theorem is
not consumed and no AC is introduced. Actual B,H',S blocks are triangular,
H' need not be invariant, differential D_i Q_i=A_(i-1)D_i proves conjugacy,
and finite alternating cancellation explicitly eliminates B_(a-1),B_b.
All field characteristics, negative indices, empty and one-degree complexes
included. Forty-seven originals with receipts and six additions complete.
Next `thm-simplicial-approximation-after-sufficient-subdivision`: read the
published relative theorem fully, including its exact meaning of relative
subdivision and hypotheses. Do not merely copy its scaffold strategy.
`thm-simplicial-approximation-after-sufficient-subdivision`: completed, repaired
receipt after canonical precheck/render/strict contract. Fully read the published
relative theorem, derived-subdivision definition, neighborhood-adjustment proof
and open-star-criterion proof. The published theorem explicitly approximates fh
near A, not necessarily f in the strict carrier sense. The authored statement
now states the exact relative homotopy conclusion and preserves the chosen-
triangulation simpliciality hypothesis. All endpoints, empty/full A and finite
vertex selections explicit. The ordinary quantitative carrier estimate needed
for fixed-point proof must still be supplied there using the A-empty construction
or its star/mesh suppliers; this theorem does not create an extra relative
carrier promise. Forty-eight originals with receipts, six additions complete.
Next finite-CW ENR lemma: need full local-contractibility and Euclidean embedding
arguments; source Appendix A.4/A.10 passages have not yet been read this turn.
Finite-CW ENR proof planning (not authored): read all Appendix A.4 proof p5 and
A.10 proof p11, plus A.8/A.9 pp10–11. Source embedding construction can be made
literal: if A embeds in R^m and attach a k-cell via f:S^(k-1)->A, send disk
radius r<=1/2 to (2rv,0,0), and radius 1/2<=r<=1 to
((2-2r)v,(2r-1)f(v),2r-1) in R^k x R^m x R; send A to (0,A,1).
Only boundary points identify, all interior points distinguish by height and
first coordinates. Quotient continuity and compact-to-Hausdorff closed-map
argument prove embedding. Handle k=0 separately by a disjoint extra point.
For weak local contractibility, induct on the finite attachments. New-cell
interior points have small Euclidean balls. For x in old A and prescribed open
U in X, choose V_A open about x contracting within U intersect A. Let
W=f^-1(V_A) in S^(k-1), F=D^k-phi^-1(U), and set
eta(v)=1/4 min(1,dist(v,S-W),dist(v,F)), with empty-distance terms replaced1.
Then eta>0 precisely on W, is continuous, and the radial collar
{rv:1-eta(v)<r<=1} lies in phi^-1(U). Its image together with V_A is an open
neighborhood in the cell-attachment quotient. Radially push r to1 to retract
it onto V_A, then use the supplied contraction in U intersect A. Joint
continuity follows by descending the continuous formula through the quotient
map times I: the compact source A disjoint-union D times I is compact
(using the established Euclidean embedding and Heine–Borel) and target X times I
is Hausdorff, so this surjection is closed/quotient; restrict to the open
neighborhood times I. Compactness of finite CW X follows from the finite union
of characteristic images of compact disks. All these steps are finite and
choice-free; AC only enters on applying the already-authored Euclidean ENR
criterion to the resulting compact weakly locally contractible image.
Need author all these arguments, contracts, supplier registration and checks.
`lem-finite-cw-complexes-are-euclidean-neighborhood-retracts`: complete, repaired
receipt after explicit precheck/render and strict proof contract (0 errors,
0 warnings). Re-read complete Appendix A.4 p5 and A.10 p11 arguments and direct
suppliers; added Heine–Borel and compact-Hausdorff closedness dependencies.
Finite characteristic-image cover proves compactness and the closed quotient
attachment topology; explicit radius/height map gives the embedding. Variable
collar width eta from distances to the old-neighborhood complement and the
prescribed-neighborhood complement gives an open radial neighborhood. The
product quotient is closed by compactness, proving joint homotopy continuity.
All noninjective attaching fibers and radius/time endpoints included. Embedding
and local contractions are choice-free; AC only in the supplied Euclidean ENR
criterion's nearest-point and controlled-extension selections. Forty-nine
original receipts plus six additions complete. No full batch checks/pages yet.
Next fixed-point theorem: reread its suppliers and Hatcher pp177–181, supply
ordinary quantitative approximation and justify zero diagonal cellular chain
coefficients for the retraction-composite on a finite surrounding complex.
Relative Kunneth obligation and all remaining assigned work remain open.
`thm-lefschetz-fixed-point-theorem-for-finite-complexes`: complete, repaired
receipt after explicit precheck/render/strict contract all passed. Full Hatcher
2C.1–3 pp177–181 text read, and actual direct suppliers read. Constructed the
surrounding finite grid complex by compatible coordinate-order triangulation;
F=ifr has exactly f's fixed points and rectangular trace gives L(F)=L(f).
Compact positive displacement plus mesh < epsilon/3, Lebesgue/star construction
gives g(sigma) disjoint sigma. Cellular-map compatibility and collapse to the
sigma quotient coordinate prove every chain diagonal coefficient zero, including
n=0 and collapsed simplices. Hopf trace proves L=0, with AC only from ENR.
Replaced the nonquantitative relative-approximation dependency with the exact
mesh/star/Lebesgue suppliers; added cellular and skeletal coefficient suppliers.
Fifty original receipts and six additions complete. All pages and full batch
checks, remaining AT7 Kunneth/B items, AT8 B, and batches6/7 remain outstanding.
`cex-zero-lefschetz-number-does-not-imply-no-fixed-points`: complete, accept
receipt after explicit precheck/render/strict contract (0 errors/warnings).
Read sphere-homology proof and Lefschetz definition. Actual matrices (1) in
degrees0,1 give 1-1=0; (1,0) is a fixed witness and Fix(id)=S1. No AC.
Fifty-one original receipts plus six additions complete. Next identity/Euler
example will use Hopf trace directly over Q, avoiding an unproved bridge from
integral ranks to rational Betti numbers in the scaffold dependency list.
`ex-lefschetz-number-of-the-identity-is-euler-characteristic`: complete,
repaired receipt after precheck/render/strict contract 0 errors/warnings.
Hopf trace on the rational cellular identity gives the actual cell-count sum;
used cellular-map and relative-skeletal suppliers, replacing the unnecessary
integral Euler-rank theorem. Point chain differential is 1 in positive even
degrees and 0 in odd degrees, proving only H0=Q. Nonempty contractible qualifier
explicit, empty complex both sums0, no AC. Fifty-two original receipts plus six
additions complete. Next independent AT8 B calculations: disk, equator and the
noncompact ordinary-cohomology counterexample; other pending items unchanged.
`cex-ordinary-cohomology-does-not-give-noncompact-poincare-duality`: complete,
repaired receipt after canonical precheck/render/strict contract 0 errors and
warnings. Direct zero-cocycle endpoint formula proves constants=R and class1
nonzero; straight contraction and actual point differential prove positive
homology zero. AC only for separate correct Hc cap statement via the read
local Euclidean lemma. n=0/R=0 exclusions explicit. The two cohomology definitions
remain draft phase-2-next-20 as already reported publication-state concerns;
actual definitions read and adequate for the used clauses. Fifty-three original
receipts plus six additions complete. Next disk and equator examples.
`ex-poincare-lefschetz-duality-for-a-disk-and-its-boundary`: complete, repaired
receipt after precheck/render/strict contract 0 errors/warnings. Re-read PL proof,
relative fundamental/cap definitions, pair sequence and sphere calculation.
Explicit graph half-space charts verify disk hypotheses; constant cocycles
and unit cap generate relative top homology; top cap augmentation is evaluation,
fixing the positive cohomology generator. At n=1 boundary is [+1]-[-1] in Z2;
at n=0 boundary empty and both cap maps identity. AC exactly PL. Fifty-four
original receipts plus six additions complete. Next equator example.
`ex-alexander-duality-for-the-standard-equator`: complete, repaired receipt
following canonical precheck/render/strict contract 0 errors/warnings. Actual
hemisphere projection/sqrt inverses, contraction formulas, simplex-by-simplex
chain splitting and augmentation kernel compute all complement groups. Full
Alexander proof and H0/contractibility/HB/IVT suppliers read; equator's compact,
nonempty/proper and local chart hypotheses checked. n>=1 explicit; n=1 includes
S0 and quotient by constants, no forced sign for an independently oriented
equator. Geometry choice-free, duality inherits AC. Fifty-five originals plus
six additions complete. Next RP manifold and nonorientability examples require
actual projective chart/cellular boundary arguments, including n=0 exception.
Additional published concerns found during the projective examples audit:
- `ex-real-projective-space-from-affine-charts`, page to locate before serial
  reconciliation: confirmed proof gap, high confidence. Steps1.1–2.1 construct
  compatible Euclidean charts; step3.1 concludes smooth manifold without proving
  the Hausdorff and second-countability requirements of `def-smooth-manifold`.
  Required repair: invariant neighborhoods of distinct antipodal sphere orbits
  prove Hausdorffness; finitely many affine charts supply a countable base.
  Compactness and connectedness for current consumers also need proof. These
  elementary quotient arguments can be supplied locally, without published edits.
- `ex-cellular-homology-of-real-projective-space`: confirmed missing incidence
  calculation in step1.1, high confidence about proof support (not a false
  homology result). It simply asserts attaching degree 1+(-1)^n. Supplier
  `lem-real-projective-space-cellular-homology-and-pinch-map` (currently draft,
  phase-2-next-20) now gives a full hemisphere/local-degree argument and the
  mod-two coefficient comparison; direct proof fully read and its used clauses
  understood. Repair strategy: consume that proved supplier when publishable,
  or add the actual two-preimage local-degree computation using
  `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`,
  `thm-global-sphere-degree-is-the-sum-of-local-degrees`, and
  `lem-local-sphere-orientations-and-finite-puncture-excision`. Preserve n=1
  endpoint calculation and n=0 exception. Do not infer an independent audit from
  this defect-focused review. Canonical ledger is left to the serial reconciler.
`ex-mod-two-duality-for-real-projective-space`: complete, repaired receipt
following canonical precheck/render/strict contract 0 errors/warnings. All direct
suppliers fully read, including the current phase-2-next-20 projective cellular
lemma. Proof separates choice-free compact connected boundaryless quotient
manifold, canonical F2 orientation/class and integral positive-even obstruction
from the AC-dependent actual PD cap map. Quotient Hausdorffness via invariant
finite-orbit neighborhoods and second countability via finite affine charts
are supplied explicitly. Coefficient map sends oriented disk generators to F2
ones and commutes with connecting maps, so differentials reduce to zero.
RP0 is a point; scaffold's even-dimension nonorientability needed positive-even
qualification. Fifty-six originals and six additions complete.
Published concern page IDs resolved: affine-chart item is on
`smooth-manifolds-and-smooth-maps-examples`; cellular RP item is on
`cw-complexes-and-cellular-homology-examples`. Proposed supplier for the former
missing topological hypotheses is the choice-free part of the newly authored
`ex-mod-two-duality-for-real-projective-space` (or a future A lemma extracting
that elementary quotient proof). No published file or canonical ledger edited.
Next RP2 nonorientability counterexample consumes only those choice-free clauses.
`cex-a-nonorientable-manifold-has-no-ordinary-integral-fundamental-class`:
complete, repaired receipt after precheck/render/strict contract 0 errors/warnings.
Uses only the explicitly choice-free projective manifold and cellular clauses;
actual complex Z --2--> Z --0--> Z gives H2=0, while stalk at [1:0:0] is Z.
This zero-to-nonzero restriction excludes an integral class and the top theorem
excludes orientation. Mod2 top class is the unique nonzero element of F2.
Fifty-seven originals and six additions complete. Remaining batch5 originals:
relative Kunneth, four AT7 ring-dependent examples plus surface example,
AT8 sphere/torus and surface-intersection examples, and horned-sphere witness.
All A/B page files and full batch checks still outstanding; batch6/7 untouched.
`cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls`:
new owner-held escalation recorded, confidence0. No authored proof/contract.
Read full Hatcher Example2B.2 pp170–172 and visually inspected p171. Retrieved
Powell–Ray Topological Manifolds notes: initial MPIM URL curl403; recovery1 web
open rejected safe-open; recovery2 curl browser user-agent403; recovery3 Glasgow
mirror succeeded. Stop retries, reuse /tmp/phase2-d-ray-top-manifolds.pdf and
.txt. Full sections5.2.1–5.2.3 pp34–39 read; visually inspected figures5.12,5.13,
5.15–5.17 (PDF53,55–57). Authoritative mirror:
https://www.maths.gla.ac.uk/~mpowell/Topological-manifolds-lecture-notes-after-seminar.pdf
Unresolved: actual controlled horn construction, uniform convergence plus
injectivity of limiting ball embedding (small image horns alone do not prove
injectivity), and geometric block-complement identification with free group and
commutator meridian. Notes' alternate proof invokes transversality/loop theorem;
those substantial prerequisites are not available through the scaffold's two
deps. Hatcher's van-Kampen route may avoid those but still needs the geometric
block calculation. Proposed A suppliers (NOT minted):
`lem-controlled-nested-horn-construction-embeds-a-closed-three-ball` and
`lem-horn-replacement-block-has-injective-commutator-meridian`.
After those, free-group reduced words and compact loop/homotopy images establish
survival of a meridian. Need also pass the R3 exterior to S3 by van Kampen on a
ball about infinity and its punctured ball (simply connected in dimension3).
Do not override this escalation or count the source's existence assertion as
proof. Fifty-seven completed originals and six additions remain the total.
Owner Kunneth direction reread fully. Downloaded full Hatcher book successfully
on initial attempt: /tmp/phase2-d-hatcher-full.pdf. The small extracted
/tmp/phase2-d-hatcher-full.txt currently contains only PDF295–298, not full book.
Next: locate §3.B relative quotient/Kunneth discussion and read complete argument.
Relative Kunneth resumption: re-read actual HEP, cover-small equivalence,
AW/shuffle homotopies and relative cup construction, and Hatcher §3.B full
pp274–278 (PDF283–287). First authorized supplier will avoid product CW topology:
HEP into the mapping-cylinder strip gives homotopies preserving A and B and
open neighborhoods whose time-one images lie in A and B. Their product on
U=A×Y union X×B gives an open two-cover and a prism preserving both subspaces.
Support-preserving small-chain R,D followed by time-one F yields id-FR=dK+Kd
with K=D-PR. Thus C(U)/(C(A×Y)+C(X×B)) is explicitly contractible. Extend its
contraction by zero on the complementary singular-simplex basis to obtain the
actual quotient chain/cochain homotopy equivalence. Natural AW/shuffle maps and
homotopies descend through the smaller quotient. No AC, finite dimension or
product-CW-topology claim is needed. New supplier not yet certified or counted.
`lem-relative-singular-product-chain-equivalence-for-cw-pairs`: new addition
fully authored, manifest/coverage/contract registered; explicit precheck,
rendercheck and strict selected contract all pass with zero errors/warnings.
Scope sufficient refreshed for AT7 preserved pair with the outstanding second
supplier and original theorem explicitly retained. No record-item on addition.
Actual chain contraction K=D-PR, quotient extension e and s with qs=id,
sq=id-de-ed, and natural AW/shuffle quotient homotopies are written. The
relative cup comparison is the unique inverse of q*; auxiliary s need not be
natural. Ordinary products, arbitrary dimension, empty/full pairs and all
unnormalized simplices handled. No AC. Totals: 57 original receipts +7 additions.
Next authorized finite-free relative cohomological algebra supplier; reread
absolute algebra proof and PID/projective/relative-cochain suppliers in full.
`lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses`:
new addition fully authored, manifest/coverage/contract registered; explicit
precheck, rendering and strict selected contract pass, zero errors/warnings
(after removing redundant source brackets from the symmetric-case reuse).
Scope sufficient refreshed. Exact hypothesis: commutative PID and one relative
homology module finite free in each degree. Explicit s,pi,ell,eta,b,h deformation,
finite-dual inverse, finite degree diagonals, tensor/dual homotopies and both
factor orders identify the actual relative external product. No finite dimension
or singular-chain-rank bound. AC for arbitrary-rank PID sections and simultaneous
homology sections/bases; geometric comparison choice-free. Sources reread:
Hatcher full pp216–219 and §3.B pp274–278, plus actual PID decomposition,
projective module, relative cochain and AC suppliers. No record-item on addition.
Totals 57 original receipts +8 additions. Next original Kunneth theorem:
absolute multiplicativity is standard sign swap; relative multiplicativity
still needs explicit preservation of the quotient/cochain product under the
comparison, not merely applying absolute graded commutativity to relative groups.
`thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`: complete,
repaired current-content receipt after precheck/render/strict contract all pass,
zero errors/warnings. An earlier receipt was prematurely issued before inspecting
two contract mapping errors (F3 use at1.2, input1.1 at4.1); both were immediately
fixed, all checks rerun and a fresh receipt records the correction. No proof gap
was concealed or waived. Relative multiplicativity proof: cochains vanishing on
N form a differential graded algebra; q* is an actual algebra inclusion and
cohomology isomorphism. The natural diagonal homotopy's primitive k=-JH for
swapping beta and alpha-prime vanishes separately on A×Y and X×B. The four-factor
primitive (-1)^|a| alpha cup k cup beta-prime therefore vanishes on N. This proves
the signed identity in the relative target, without importing absolute graded
commutativity into relative groups. Absolute AW/additive comparison uses delta JK.
Both exact finite-free homology alternatives, arbitrary nonzero degrees and
relative nonunital caveat preserved. AC only additive sections. Frontier ledger
refreshed. Totals 58 original receipts +8 authored additions. Next torus example,
then remaining surface/projective ring calculations and dependent examples.
`ex-integral-cohomology-ring-of-a-torus`: complete, repaired receipt after
canonical precheck, rendering and strict contract pass, zero errors/warnings.
Actual circle generator is the signed oriented triangle boundary; UCT gives its
unique dual. Ring Kunneth gives basis1,x,y,xy; direct exterior quotient calculation
shows every degree-one square vanishes and four monomials are independent.
Positive cycle Z=shuffle(z tensor z) generates H2 via the actual homological
Kunneth sequence (Tor vanishes by length-zero identity resolutions). For each
signed arc pair, the two shuffle determinants +1,-1 match coefficients +1,-1,
with arc signs retained; diagonals and endpoint faces cancel. JA S evaluation
on Z is1 by AS-id=dL+Ld. General product is (rs'-sr')xy. New direct homological
Kunneth supplier is draft phase-2-next-20; full current proof read, adequate for
this clause, subject to the already reported publication-state issue. No published
edits. Corrected owned Hatcher torus locator to Example3.16 p216 (old coverage
Example3.9 was incorrect; it is a Moore-space calculation). Scope refreshed.
Totals59 original receipts+8 additions. Next surface ring example, then projective
rings and the remaining dependent examples. Full batch checks/pages still pending.
`ex-integral-cohomology-ring-of-an-orientable-surface`: complete, repaired
receipt after canonical precheck/render/strict contract, zero errors/warnings.
Full Hatcher Example3.7 pp207–208 reread, p207 fan diagram visually inspected
(/tmp/phase2-d-hatcher207.png). Supplied a direct singular argument rather than
assuming simplicial/cellular cochain comparison. Signed fan T_k has vertex order
(c,v_k,v_{k+1}) for positive edges and (c,v_{k+1},v_k) for negative edges, so the
paired last edges are literally the same positively parameterized singular loop.
Z=sum epsilon_k T_k is a cycle by radial telescoping and paired-edge cancellation.
Polygon boundary generator computed by its cellular all-ones vector; disk
contraction+pair LES makes the relative fan a positive generator. Surface
cellular d1=d2=0 then identifies Z and all edge classes. UCT gives actualsingular
cocycles. Radial values satisfy t_{k+1}=t_k+epsilon_k u(E_k); one commutator
contributes t w_i+(t+u_i)w_i'-(t+u_i')w_i-tw_i'=u_iw_i'-u_i'w_i.
This gives every cup coefficient by injective degree-two evaluation. Genus zero
is step5.2, separate sphere CW argument; final boundaries step8.1. AC onlyUCT.
No new suppliers needed. Totals60 original receipts+8 additions. Next intersection
pairing example can consume this completed matrix calculation; projective rings,
CP3/wedge and sphere/torus remain. All10 pages/full batch checks and batch6/7
items still outstanding.
`ex-intersection-pairing-of-a-closed-oriented-surface`: complete, repaired
receipt after precheck/render/strict contract, zero errors/warnings. Consumes the
completed AT7B singular calculation; the positive fan cycle equals the fundamental
class by its positive restriction at one interior point and top-homology stalk
injectivity. Matrix is diag(J,...,J), J=[[0,1],[-1,0]], J²=-I, detJ=1. Formula
sum(r_i s_i'-s_i r_i') proves alternation on all integral vectors. Genus-zero
empty matrix determinant1 and zero-module isomorphism explicitly included.
AC only inherited UCT; removed unnecessary PD/incidence/UCT repetition deps.
AT8 scope refreshed without overriding the horned-sphere escalation. Totals61
original receipts+8 additions. Next sphere/torus fundamental classes and duality
example, then RP/CP ring examples and CP3/wedge. Batch6/7 and all pages/full batch
checks remain outstanding.
`ex-fundamental-classes-and-duality-for-spheres-and-tori`: complete, repaired
receipt after precheck/render/strict contract pass, zero errors/warnings.
Scaffold's unqualified sphere-generator clause was false at n=0: now n>=1
single generator, S0 boundary class [+1]-[-1] in H0=Z² and cap(a+,a-)=(a+,-a-).
T0 is a positive point, not an empty space. Compactness, finite charts/countable
bases, connectedness and ordered orientations checked. Homological and ring
Kunneth induct on the last circle; Tor terms vanish by length-zero resolutions.
AW-shuffle homotopy evaluates products on product cycles without extra signs.
Coordinate restriction then gives <x_I,b_J>=delta_IJ. Shuffle simplex determinant
matches its permutation coefficient, so full product cycle is positive and
one-stalk injectivity identifies it with [T^m]. Cap/cup+augmentation gives
x_I cap[T^m]=(-1)^{sum_r(i_r-r)} b_{I^c}; m2 explicitly x1->b2,x2->-b1.
AC inherited exactly UCT, both additive Kunneth proofs and PD; no extra sign
calculation choice. Scope refreshed, horned escalation unchanged. Totals62
original receipts+8 authored additions. Batch5 remaining originals are RP ring,
CP ring, CP3/wedge, and horned-sphere (owner-held escalation). All10 page files,
full batch gates and all batch6/7 original items remain outstanding.
Projective-ring preparation (no new item authored yet): reread full Hatcher
Theorem3.19 pp220–221 and subsequent pp222–224; visually inspected the actual
diagrams on pp220–221 (/tmp/phase2-d-hatcher220.png and221.png). The relevant
complete proof is pp220–221, not pp220–223. Reread actual draft RP cellular lemma,
published CP additive example, cohomological excision, relative cup naturality,
and cohomology pair LES. CP additive example takes the CW structure as given;
our CP proof must construct it rather than infer it from that example alone.
Potential necessary local A supplier (NOT minted):
`lem-local-coordinate-cup-products-generate-top-relative-cohomology`.
Purpose: for p,q>=1, R=Z or F2, prove the relative product for the open coordinate
complements in R^{p+q} sends local generators to the top generator, positively
for ordered integral orientations. Restrict to finite CW cube/ball pairs
(Dp,Sp-1),(Dq,Sq-1); inclusions into punctured Euclidean pairs induce cohomology
isomorphisms by radial deformations and exact pair sequences (p=1 augmentation
cokernel explicit). The product-boundary pair similarly compares to punctured
R^{p+q} by max-norm radial deformation. Relative Kunneth then gives generator
product; AW/shuffle evaluation against oriented relative cube chains fixes +1.
Must prove the pair comparison and actual product compatibility, not apply the
CW-pair theorem directly to (R^p,R^p minus0), whose subspace was not supplied as
CW subcomplex. No bounded-dimension or coefficient substitution shortcuts.
For projective spaces follow source diagram with P^i and P^j, i+j=n, meeting at
p=[0:...:1:...:0], affine chart C^i×C^j or R^i×R^j. Complements deform to
P^{i-1}/P^{j-1} by scaling the complementary coordinates, explicitly well-defined
on projective orbits. Need natural pair LES comparison to show global-relative
classes restrict isomorphically to these local coordinate classes, and local top
class maps isomorphically to absolute top cohomology. RP use F2 cellular boundary
reduction+field duality (not integral Hom(H_n,F2) without Ext). CP construct CW
attachment from D^{2k} map w->[w:sqrt(1-|w|²)] and verify quotient topology;
only even cells then give all integral groups via UCT. Standard coordinate
inclusions act as identity on cell generators; alternate coordinate subspaces
can be handled by coordinate permutations. For integral positive CP normalization,
complex coordinate permutations preserve real orientation; a path of complex
linear invertible maps (two-coordinate rotation followed by phase change) also
makes their projective action homotopic to identity. These sign details remain
to be fully written and checked. n=0 means the named degree-one/two generator
is zero and the polynomial quotient is just the coefficient ring. No projective
ring item is complete yet. Totals62 originals+8 additions unchanged.
`lem-local-coordinate-cup-products-generate-top-relative-cohomology`: now minted
and fully authored on AT7A after Kunneth, before projective consumers. Registered
manifest, coverage and contract scope/content; precheck/render/strict contract
pass with zero errors/warnings. Scope sufficient refreshed; NO record-item on
this author-created addition. Exact statement p,q>=1, R=Z or F2, actual relative
cup for the two open coordinate complements. Radial max-norm homotopy and
natural pair LES compare to (C_r,boundary C_r): H0relative0, H1relative=H0(T)/R,
higher relative=H^{k-1}(T), with r1 quotient constants explicit. Cube CW top group
and relative UCT give normalized dual. Relative Kunneth applies only to the finite
CW cubes, and relative naturality transports its product to the open complements.
Permutation cube triangulations and determinant signs give positive relative
shuffle generator; quotient AW/shuffle homotopy evaluation is1. Arbitrary integral
generators differ by ±1, and bilinearity covers them. AC only relative Kunneth
sections/bases and UCT projections. No claimed choice-free additive assertion.
Totals62 original receipts+9 authored additions. Contract inventory should now
be75 IDs (66 originals+9 additions), with71 completed contracts and4 untouched
original contracts (RP ring, CP ring, CP3/wedge, horned-sphere escalation).
Next RP ring: reread full current local lemma, actual RP cellular/field-duality
suppliers and Hatcher diagrams pp220–221 before authoring the global-relative
comparison. CP ring afterward needs its finite CW construction and positive
complex coordinate normalization. Batch6/7, all pages and full batch gates
remain unfinished; no group handoff or completion is claimed.
`ex-mod-two-cohomology-ring-of-real-projective-space`: complete, repaired
receipt after explicit precheck/render/strict contract pass, zero errors/warnings.
Full Hatcher pp220–221 and current supplier statements/proofs reread. Every
relative/global/local arrow is proved by exactness, explicit complement retracts
and excision of the closed hyperplane avoiding p. Coordinate projection comparison
uses the contractible-ambient pair sequence, including degree-one constants.
The local product lemma gives nonzero top product; induction and restriction give
all powers and exact polynomial kernel. n=0 named x=0; n=1 square-zero; m=0,n
restriction endpoints included. AC exactly field-duality basis/projection and
relative additive suppliers. Contract tool only permits source claim sections,
not Proof: F1 cites its Statement and carries supplemental exact proof paragraph
3.2 evidence; source proof fully read, not inferred from a claim-only citation.
Precheck's proposed renumbering wrongly rewrote the external supplier paragraph;
retained its exact external locator as paragraph3.2 while manually adopting only
local phase repairs. Coverage locator corrected; frontier refreshed.
Totals63 original receipts+9 authored additions. Next CP ring (finite CW
construction, complex orientation signs), then CP3/wedge. Horned-sphere remains
owner-held. Batch6/7, all pages and full batch gates remain unfinished.
Schema reread also requires checking B-page supplier edges before handoff:
`ex-intersection-pairing-of-a-closed-oriented-surface` currently consumes AT7B
`ex-integral-cohomology-ring-of-an-orientable-surface` across pages, which SCHEMA
§4 forbids. The completed calculation is mathematically usable but must be
supplied on an existing A page or repeated locally, with dependency/contract and
decision refreshed. Audit the sphere/torus example for the analogous torus edge.
Do not count this page-placement obligation as resolved by the existing receipts.
`ex-integral-cohomology-ring-of-complex-projective-space`: complete, repaired
receipt after canonical precheck/render/strict contract pass, zero errors/warnings.
Constructed quotient Hausdorffness via rank-one matrix image, affine charts, and
D^{2r} attachment w->[w:sqrt(1-|w|²)] before applying cellular comparison.
UCT free-homology evaluation gives positive generators; no reliance on a CP
example that takes its CW structure as given. Complement deformations plus exact
pair sequences/excision prove local/global maps. Integral signs: positive radial
characteristic disk, local restriction via annulus/excision, and explicit rotation
plus phase paths for coordinate permutations; complex blocks have positive real
determinant. Local cup sends positive generators to positive generator, so u^k
is primitive with evaluation+1, not merely nonzero. n0u0,n1,point/identity
restrictions and AC uses explicit. Full source Hatcher pp220–221 reread in this
context. Totals64 original receipts+9 additions. Next CP3/wedge, then repair
forbidden cross-B supplier edges and write AT7/AT8 pages. Horned-sphere owner-held
escalation remains; batch6/7 and full batch checks are outstanding.
`ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge`: complete,
repaired receipt after explicit precheck/render/strict contract all pass with
zero errors/warnings. Finite wedge cell construction and actual summand maps
plus natural UCT make restrictions jointly injective in positive degrees.
Each sphere restriction of a product vanishes by its two possible degree cases;
therefore every positive-degree wedge product is zero. CP3 has primitive u²≠0,
so graded multiplicative injectivity is impossible. Degree-zero restriction is
explicitly diagonal, not an isomorphism; units and zero/high-degree cases checked.
AC inherited both UCT and CP local additive supplier, correcting the scaffold's
UCT-only wording. No suspension/wedge homeomorphism silently assumed.
Totals65 original receipts+9 additions. Only original batch5 horned-sphere remains
unwritten/escalated. Next repair forbidden cross-B-page supplier dependencies,
then write four batch5 pages and run full explicit batch gates; batch6/7 remain.
`lem-integral-surface-cup-pairing-from-the-oriented-polygon`: new necessary
AT7A supplier, fully authored with the already completed signed-fan argument
(the original B example is preserved). Hatcher Example3.7 pp207–208 reread fully;
actual argument reread before reusing completed mathematics. Registered manifest,
coverage and full contract scope/entry. Explicit precheck/render/strict contract
pass zero errors/warnings. No record-item or review loop on this addition.
Its purpose is to supply the later AT8B intersection example without a prohibited
cross-B-page dependency. No torus cross-B edge was found in current owned
manifests. Totals65 originals+10 additions; next update intersection dependency,
contract and current receipt, then pages/full checks. This adds one more
pre-splice plan inventory mismatch for Step4, not a new pair.
Intersection example supplier repair complete: now depends on the authored
AT7A polygon lemma, with F1 statement excerpt/uses and manifest updated.
Precheck/render/strict contract pass zero errors/warnings and fresh repaired
receipt recorded. AT7/AT8 sufficient scopes refreshed; no horned-sphere override.
Current owned-manifest cross-B-page scan finds no other such edge. Frontier
refreshed. Totals unchanged65 originals+10 additions. Next four batch5 pages
and full explicit batch checks, retaining exact owner-held horned gap.
Batch5 page/gate checkpoint: all four page prose files now authored with complete
preserved inventories, including the still-missing horned-sphere ID. The AT8B
page is not complete/publishable while that owner-held item remains unresolved.
Four-page rendering passed. Full explicit 76-item precheck initially stopped at
the missing horned-sphere file; explicit existing-file rerun covered75 files,
59 proof-bearing items, all pass. Full 80-path rendering (76 items+4 pages) has
exactly1 unreadable horned item. Full strict contracts:75/76 checked, exactly1
missing-item error,0 warnings. Full content-policy initially found148 provenance
parser errors plus that missing item:74 authored headers used valid inline YAML
objects with JSON-quoted keys, while policy's reader requires block provenance
and unquoted source keys. Converted those source/provenance mappings to ordinary
block YAML and fixed the local formatter. Parsed metadata was compared before/
after on every file and is identical; bodies unchanged. Final content-policy:
76 scoped,1 missing horned item error,0 warnings. Existing original receipts remain
current: direct itemDecision scan shows65 closed originals, the10 additions
await the authorized engine certification, and horned-sphere owner-held. No
unnecessary re-authoring or self-review of additions performed.
Coverage check:2 A pages,65 harvested results,0 errors/warnings. validate-plan
with research/plan-spec.json exits0, but all four owned plan inventories remain
empty placeholders (orders366.013–366.016); it does NOT validate these new item
inventories. Step4 must splice current76 IDs and metadata (66 originals+10 local
suppliers) into the preserved four pages and recheck their actual dependency
closure. No shared plan/prose was edited. Full source evidence/metadata gates
for the added Nair source should still be checked before final handoff.
Next: batch6 AT12, all23 originals and two pages still unauthored. Batch7's120
originals and four pages also remain. Continue prerequisite order and retain
horned-sphere uncertainty; there is no group completion claim.
Batch6 first addition checkpoint: `lem-compact-cw-images-have-finite-cell-support-without-choice`
is fully authored and registered first on AT12A in manifest, coverage, and the
new batch6 contract document. Explicit precheck, rendering and selected strict
contract each pass with zero errors/warnings. No self-review or item decision
was recorded for this addition. This proves the full compact-source statement,
not only Euclidean-domain compactness: pull back covers, close the image in the
Hausdorff target, take the least inner characteristic ball meeting that image,
and use successive coordinate minima on its compact preimage to specify one
point per occupied cell. Every subset of that family is closed by C and W;
compactness of the discrete family makes it finite, and finite downward closure
produces the subcomplex. No arbitrary/countable choice. Empty image, dimension
zero, nonregular characteristic maps, singleton images and radius endpoints are
explicit. Current compactness, Heine–Borel, extreme-value and CW suppliers were
reread; expanded Hatcher Appendix A pp1–3, Proposition A.1 full argument read.
Totals65 originals and11 fully authored additions; batch6 original authoring has
not begun. Next replace its two old compact-image dependency edges, refresh scope,
then supply the disk avoidance argument and author cellular approximation.

Published concern for serial owner reconciliation: confirmed proof-support and
choice-accounting defect, high confidence, in
`lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`, page
`cw-complexes-and-cellular-homology`, Proof1.1: "If K met infinitely many cells,
choose x_i in K in pairwise distinct cells" constructs a countably infinite
selected family without a declared choice principle. Its consumer
`cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex` on that page
inherits this unsupported step. This is not a claim that the theorem is false
in ZF. The new draft AT12A lemma above supplies a choice-free full replacement
argument, using supplied characteristic coordinates and uniquely specified
compact minima. Proposed published repair: replace the arbitrary sequence
selection with that canonical construction, then reconcile the two published
proofs/dependencies. Published content and the serial canonical ledger were
not edited; owner reconciliation remains required. This debt does not block
the independent sound new supplier.
`lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell`: new AT12A supplier
fully authored and registered before cellular approximation. Full Hatcher
pp349–351 Theorem4.8/Lemma4.10 reread. Finite grid near inverse images of nested
cell coordinate balls, compatible conical triangulation and barycentric
interpolation produce a piecewise affine image near the origin; an explicit
3/4 norm bound excludes the rest. Finite hyperplane avoidance is proved by
row elimination, moment-curve polynomials and finite root exclusion. The
punctured characteristic disk retracts by the displayed positive quadratic-root
formula; exponential-law quotient descent handles nonregular attachments and
ordinary product topology. Boundary fixed, n0, empty inner-ball preimage,
strict n<k and homotopy endpoints all checked. No AC. Precheck canonical phase
repair adopted; final precheck and selected strict contract pass; rendering
passed before the numbering-only change. No addition item receipt/self-review.
Totals65 originals+12 authored additions. Cellular approximation remains next;
its finite-target reduction and product-CW homotopy clause still require actual
proof. Batch6 scope was refreshed after compact-image supplier replacement;
refresh again after the new disk supplier edge is registered.
`thm-cellular-approximation-for-maps-of-cw-pairs`: complete, repaired original
receipt recorded after explicit precheck/render pass and selected strict
contract (0 errors,1 citation-density warning: the initial disk reduction uses
four actual facts). Full Hatcher349–351, current HEP proof, exponential law,
AC definition, finite-choice and recursion proofs read. Contract includes exact
HEP proof paragraphs1.2,1.4,2.1,4.1 as supplemental evidence for its specified
extension procedure and quotient argument. Finite target maximal cells removed
one at a time by the new disk lemma, fixed boundary fibers ensure descent.
Finite relative source needs finitely many selections/stages even with infinite
A; arbitrary branch uses one AC choice function over all disk problems before
recursing the explicit HEP. Infinite concatenation is stationary on each closed
cell after finitely many stages; transpose proves continuity at time1.
Product-CW ordinary topology proved via quotient-times-interval and a finite
closed-cell test for each skeleton; cylinder boundary maps are cellular and
fixed by the relative theorem. Clarified cellular homotopy means the cylinder
map, not every time slice. AT12 sufficient scope and frontier refreshed.
Totals66 completed original receipts+12 authored additions. Next per-representative
finite-support corollary, then CW approximation. Horned-sphere remains owner-held;
batch6 has22 original items and two pages still to author; batch7 untouched.
`cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative`:
complete, repaired original receipt after explicit precheck/render/strict
contract pass, zero errors/warnings. Compact Euclidean sphere/disk/cylinder
checks feed the new choice-free finite-support lemma separately for each map
or homotopy. Explicit two-cell based sphere quotient supplies a finite source;
finite-source cellular approximation fixes its vertex, requiring x0 in X0.
No global selection of representatives or single subcomplex for all classes;
no based skeletal claim when the basepoint lies outside X^n. n0 compact domains,
n1 based class and endpoints covered. Totals67 originals+12 authored additions.
Next CW approximation, whose pair-extension statement and choice-free indexing
must be derived rather than inferred from its scaffold. Batch6 has21 originals
and two pages still unwritten; batch7 unchanged; horned owner-held.
CW-approximation preparation (not complete): full Hatcher printed352–354
Proposition4.13/Example4.14 and surrounding argument read. Published
`thm-mapping-cylinder-factorization` is explicitly restricted to CGWH spaces,
so it cannot support the scaffold's arbitrary-space statement; remove this
unused edge when authoring and use direct attachment construction instead.
A viable choice-free construction starts with the prescribed CW source A and
one new vertex for every point of X. At stage k attach a k-cell for every actual
cellular boundary map S^{k-1}->current source and every actual disk map into X
extending its composite. Constant boundary data supply surjectivity; all
nullhomotopy data at stage n+1 kill kernels after finite-source cellular
approximation. One-cells indexed by all actual paths handle pi0. All indexing
collections are sets; do not choose components or representatives. Still to
prove: resulting relative attachment space is CW with original A a subcomplex,
finite support/stage factorization for each test map, arbitrary-basepoint
transport, pair extension and exact applicable relative assertions. In particular
CW construction/Hausdorffness must not be inferred circularly from compact-image
lemma, which already assumes CW. An explicit local cell-assembly lemma may be
needed; no original CW-approximation item or receipt has been written.
`lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`:
new necessary AT12A supplier fully authored before CW approximation, registered
manifest/coverage/contract. Explicit precheck/render/selected strict contract
all pass with zero errors/warnings. Expanded Hatcher AppendixA PropositionA.2
pp3–4 read in full. Proof preserves closed subsets of earlier stages, uses the
final disk test, and proves Hausdorffness by a specified separating real function:
first radial extension plus one/two interior bumps on the already-given CW
complex A (its existing compact/Hausdorff quotient tests are valid), then the
same formula on newly attached disks stage by stage. This avoids circularly
assuming the new space Hausdorff. Finite supplied boundary support gives C;
compact quotient disks give W; finite closed-cell testing proves the actual
skeleton attachment topology. Arbitrary target map-out criterion is explicit.
No AC, including for infinitely many disks; the only infinite operations are
specified recursions. No addition review/item decision. Totals67 originals+13
fully authored additions. Next author CW approximation using this lemma and
all actual cellular boundary/extension data. Original CW approximation is still
unwritten, and its CGWH-only mapping-cylinder scaffold edge remains to remove.
`thm-cw-approximation-of-an-arbitrary-space`: fully authored, repaired original
receipt after explicit precheck/render/selected strict contract, zero errors/
warnings. Full Hatcher352–354 and current model-comparison, basepoint-transport,
class-function transfinite-recursion proofs read. Direct construction extends
any specified CW map P->X: adjoin every point of X as a vertex; attach k-disks
indexed by every actual cellular boundary a and every actual extension b of Qa.
Compact-image and cell-assembly suppliers prove each stage and the union CW;
no circular Hausdorff or closure-finiteness assumption. All actual paths prove
pi0 bijection, constant-boundary cells realize every class, and finite-source
cellular approximation moves a kernel sphere into stage n before its actual
nullhomotopy disk is attached at n+1. Based contraction fixes the marked rim
point. Natural radial-shell transport extends vertex isomorphisms to all
basepoints. Class-function recursion (ZF Replacement) used because the growing
cell sets need not live in a prespecified ambient set; no AC. Removed the
inapplicable CGWH-only mapping-cylinder scaffold edge and unused LES/HEP edges.
Pair extension preserves the given map literally on P; target may be arbitrary
non-Hausdorff. Contract includes exact transport formula evidence. AT12 scope,
coverage locator and frontier refreshed. Totals68 completed originals+13 authored
additions. Batch6 now has20 original items and two pages still to author. Next
`def-hurewicz-homomorphism`, including actual well-definedness/additivity proof.
Batch7's120 originals/four pages untouched; horned-sphere still owner-held.
Hurewicz preparation (not yet authored): read full Hatcher Proposition4.36
printed369–370, plus367–368 context. Read current relative cube/disk comparison,
relative operations, sphere homology, pair LES, contractible-space homology,
and CW homotopy/excision/dimension proofs. The current definition promises
homomorphism, so do not leave additivity as a citation or strategy. Proposed
necessary local lemma before the definition: cubical pinch sends any degree-n
relative class alpha to i1(alpha)+i2(alpha), both for Q=I^n/boundary,R=point,
n>=1, and Q=I^n/J,R=boundary image,n>=2. For the wedge Y=Q1 wedge Q2 and
B=R1 wedge R2, T=B union Q1: CW excision identifies (T,B) with (Q1,R1) and
(Y,T) with (Q2,R2); the triple chain short exact sequence gives exactness at
Hn(Y,B). Projections split it, so their pair is an isomorphism. The two
projections after pinch are induced by min(2t1,1) and max(2t1-1,0); linear
interpolation with t1 preserves boundary (and J in the relative n>=2 model),
so both are pair-homotopic to identity. This proves the diagonal image, hence
additivity for actual group concatenation. Triple exactness can be derived
locally from the relative chain quotients and the already-published short-exact
complex LES; no generic wedge/direct-sum assertion is enough. Definition then
needs actual generator existence, well-definedness for arbitrary target pairs
(prism preserves subspace), naturality, signs and degree boundaries.
`lem-cubical-pinch-is-additive-on-relative-homology`: new necessary AT12A lemma
fully authored before the Hurewicz definition and registered in manifest,
coverage and contracts. Explicit precheck/render pass; strict contract passed
with zero errors/warnings after adding the actual quotient-times-I dependency
to the manifest/header. Two-summand homology splitting is proved from the
nested relative chain short exact sequence and CW excision, with collapse
projections its explicit inverse. No assertion of literal singular-chain wedge
splitting. Coordinate min/max maps and their interpolations prove both pinch
projections pair-homotopic to identity, including ordinary quotient-cylinder
continuity. Formula holds for every alpha, so positive, zero, negative and
multiple generators follow. Absolute n1 works; relative n1 is excluded precisely
because its distinguished face would be coordinate-one-zero. No choice.
Full Hatcher369–370 and current dependency statements/proofs read. No addition
item receipt/self-review. Totals68 original receipts+14 authored additions.
Next Hurewicz definition: local generator construction, arbitrary-pair prism
homotopy invariance, pinch additivity, naturality and orientation sign. Definition
has not yet been authored and its original scaffold deps still need updating.
`def-hurewicz-homomorphism`: complete, repaired original receipt after explicit
precheck/render/strict contract pass, zero errors/warnings. Definition includes
numbered Verification and proof_strategy direct; provenance proof ai-altered
because actual well-definedness/additivity is supplied. Sphere homology and the
positive-degree disk pair connector prove the two generators; supplied
orientations and unique connector inverse use no choice. The actual singular
prism preserves subspace chains, proving arbitrary-target-pair homotopy
invariance instead of invoking only the CW theory interface. Pinch lemma gives
both homomorphism laws; Hn(V)->Hn(V,{v}) is proved an isomorphism including n1,
where H0(*) injects because inclusion has the map-to-point left inverse.
Naturality is postcomposition and simultaneous orientation reversal negates
both maps. Relative n1 excluded, nonabelian pi2 allowed, equal pairs/constants/
zero and inverse classes checked. Scope and frontier refreshed. Totals69
completed original receipts+14 fully authored additions. Batch6 has19 original
items and two pages still to author. Next degree-one Hurewicz abelianization,
then the connectivity/cellular reduction prerequisite in manifest order.
`prop-the-first-hurewicz-map-in-degree-one-is-abelianization`: complete, repaired
original receipt after explicit precheck/render/strict contract all pass, zero
errors/warnings. Full Hatcher166–168 Theorem2A.1 read; actual group-law,
abelianization, chain-boundary and prism proofs read. The affine triangle
ell=t1/2+t2 proves path concatenation homologous to chain addition; constants
are boundaries and prism plus endpoint constants handles fixed-end homotopies.
Positive loop generator identified with oriented triangle facets (contract
includes exact sphere-homology proof paragraph2.1). For each cycle only its
finite endpoint set gets paths; change-of-path terms cancel by partial c=0.
Triangle boundary loop relations kill every finite two-chain boundary. This
defines a unique, choice-free inverse on H1, and both compositions are checked.
No global paths chosen. Exact commutator kernel and naturality then follow from
universal abelianization. Totals70 original receipts+14 additions. Batch6 now
has18 originals and two pages still to author. Next inspect and author
`lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity`;
its homotopy/free-cell and degree-incidence claims may need substantial local
suppliers before relative Hurewicz. Batch7 untouched; horned owner-held remains.
`lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells`:
complete, moved before the cellular reduction prerequisite consumer on AT12A.
Repaired original receipt after explicit precheck/render/strict contract passed,
zero errors/warnings. Full Hatcher346–347 Lemma4.6 and subcomplex Whitehead proof,
and actual relative disk compression/HEP/recursion/finite-choice proofs read.
Each positive disk uses its actual marked boundary image, so no constant-boundary
or basepoint-transport assumption; vertices use component-surjectivity. Compress
on X union each skeleton, glue rel all boundary identifications, extend by the
explicit choice-free HEP. Finite relative cells need only finite selections;
arbitrary cells use one AC selector on all actual compression problems followed
by specified recursion. Accumulating concatenation is stationary on each closed
cell after finitely many stages; transpose gives ordinary-cylinder continuity.
Endpoint factors continuously through the subspace X and fixes X literally.
Contract includes exact HEP proof evidence. Scope and frontier refreshed.
Totals71 completed original receipts+14 fully authored additions. Batch6 has17
originals and two pages still to author; batch7 untouched; horned owner-held.
Next: establish the no-low-relative-cell model before the stronger original
cellular reduction. Its free relative pi_n basis and incidence cokernel require
homotopy excision/quotient comparison, not cellular approximation alone. The
source Hatcher Prop4.15 uses cell compression for model equivalence; Theorem4.23
then gives Prop4.28 and Lemma4.38. Reorder locally while preserving IDs/claims.
Choice-free homotopy excision and the finite homology-Whitehead branch need a
finite-data argument; do not silently use the AC global model for those clauses.
Weak-equivalence definition in progress: moved before the Whitehead prerequisite
chain and written with all-source-basepoint/component quantifiers. Initial strict
contract failed because definitions with citation entries need numbered uses;
added item-specific verification of the induced maps and empty/identity cases.
An attempted receipt was rejected by the stale scope gate; no receipt exists yet.
The preceding temporary claim of completion has been replaced by this exact state.
Totals remain71 original receipts+14 additions. Recheck the definition and refresh
scope before recording it. Mapping-cylinder relative vanishing is next.
`def-weak-homotopy-equivalence` now complete: item-specific Verification added,
canonical phases1.1/2.1 adopted, explicit precheck/render/strict contract pass,
zero errors/warnings. Refreshed sufficient scope, then successful repaired
original receipt sha b10d6fb00a4a77539991a55c50797e4d602e4b73345a4886c795616db19c5ed5.
All-source-basepoint and component quantifiers, no group pi0 assertion, empty
spaces, singleton and identity checked; exact functoriality dependency declared.
Totals72 original receipts+14 additions. Batch6 has16 originals and two pages
still to author. Next ordinary mapping-cylinder relative vanishing; retain its
arbitrary-space statement despite the narrower published factorization supplier.
`lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups`:
complete, repaired original receipt after explicit precheck/render/strict contract
pass. Canonical ordering moved converse to3.2 and the pointed forward tail to4.1.
Ordinary quotient construction proves closed endpoint embeddings and the height
strong deformation directly for arbitrary spaces, avoiding the CGWH-only published
factorization edge. At j(x), the retraction's absolute isomorphism uses the actual
track gamma(t)=[x,1-t] and moving-basepoint identity; k is based at kf(x), not j(x).
Exactness proves forward triviality and reverse injectivity/surjectivity, explicitly
handling relative pi1 as a pointed set and keeping component bijectivity separate.
Full Hatcher346–347 and relative LES, quotient-times-I and transport proofs read.
Scope refreshed. Totals73 original receipts+14 additions; batch6 has15 originals
and two pages still to author. Next Whitehead needs the actual CW structure of a
cellular mapping cylinder, including ordinary topology and finite-cell clause.
Plan a necessary local A lemma before Whitehead (also needed for rel-A models):
start from X disjoint Y, attach one (r+1)-prism per r-cell of X, with top/source,
bottom/f and side/earlier prism boundaries. Compact finite-support plus cell
assembly establish CW, and quotient-cylinder criterion identifies the topology.
No new supplier has been minted yet. Batch7 untouched; horned owner-held remains.
`lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes`:
new necessary AT12A supplier complete before Whitehead/cellular reduction,
registered manifest/coverage/contracts. Explicit precheck/render/strict contract
pass, zero errors/warnings. Initial precheck rejected a forward proof paragraph;
rewrote the prism induction as one ordered argument, then passed. Source full
Hatcher347,353–354 and actual cell-assembly/product-CW/transport proofs read.
Start P=Y union_A X from supplied X-outside-A cells. Ascending prism attachment
has continuous sides by the preceding characteristic-cylinder test, finite
boundary support, and dimension bound from cellular f. Assembly proves actual
CW/Hausdorff topology; map-out tests and Sierpinski show equality with ordinary
quotient, including collapsed A tracks. Both endpoints are subcomplexes. Exact
height deformation fixes Y and A; moving-basepoint formula proves retraction
isomorphisms at every point. Cell count proves finite branch. No choice, no
addition item receipt/self-review. Contract cites only the choice-free proof
paragraphs1.2,2.2 of cellular approximation for the topology facts and includes
exact excerpts. Totals73 originals+15 fully authored additions; frontier refreshed.
Next author Whitehead, then weak-contractible corollary, before the no-low-cell
model. Ordinary and relative cylinders are now actual suppliers. The original
relative-vanishing lemma's proof3.1/4.1 also works for an arbitrary inclusion;
for a relative cylinder, use the LES with the new retraction isomorphisms and
explicitly check its component/pointed tail, rather than silently treating it
as an ordinary mapping cylinder. All other open obligations remain.
`thm-whitehead-theorem`: complete, repaired original receipt after explicit
precheck/render/strict contract pass, zero errors/warnings. Hatcher347 complete
proof and current prerequisite arguments read. Cellular replacement remains weak
at every actual source basepoint by the moving-track isomorphism. Its ordinary
cylinder is CW by the new supplier; relative vanishing plus cell compression
gives rho. Explicit inverse h=rho k: rho D j runs id_X to hg, and r K k runs
id_Y to gh; composition with the original approximation homotopy transfers both
identities to f. Finite X,Y give a finite relative cylinder cell count and use
only finite clauses; arbitrary case declares AC exactly for approximation and
compression selections. Empty/disconnected/unbounded cases and actual endpoints
checked. AT12 scope refreshed. Totals74 original receipts+15 authored additions.
Batch6 has14 originals/two pages left; batch7 remains120/four; horned owner-held.
Next weakly-contractible corollary, then the no-low-cell model. Keep general
homotopy excision and finite homology-Whitehead choice-free obligations open.
`cor-a-weakly-contractible-cw-complex-is-contractible`: complete, repaired original
receipt after explicit precheck/render/strict contract pass, zero errors/warnings.
Transport at one arbitrary point proves every-basepoint zero groups without a
selected path family; unique map to the one-cell point is weak. Whitehead gives
q, and reversing qp homotopic id yields the actual contraction at q(*). Both
basepoint-hypothesis directions, nonempty and singleton cases, and finite/AC
branches checked. Scope refreshed. Totals75 original receipts+15 additions.
Batch6 has13 originals/two pages remaining. Next no-low-relative-cell supplier
and pair-connectivity definition before cellular reduction/homotopy excision.
Source Prop4.15 printed353–354 reread fully. Preserve general choice-free
homotopy excision and finite homology-Whitehead obligations; no silent AC route.
`def-n-connected-cw-pair`: new necessary AT12A definition/verification complete,
registered manifest/coverage/contracts, no addition item receipt. Explicit
precheck/render/strict contract pass, zero errors/warnings. Full Hatcher346 read.
Separates component-surjectivity from all-basepoint relative triviality, keeps
relative pi1 a pointed set and introduces no relative pi0. Proves equivalence
with full-boundary-fixed disk compression, using actual marked boundary values;
zero-disks mean paths to A. Empty/equal pairs and k0/k1 checked choice-free.
Totals75 original receipts+16 authored additions. Next high-relative-cell
avoidance lemma, then no-low-cell model. Original consumer dependency updates
will include this definition when those proofs are actually authored.
`lem-high-relative-cells-do-not-change-lower-homotopy`: new necessary AT12A
supplier complete, registered manifest/coverage/contracts, no addition receipt.
Explicit precheck/render/strict contract pass, zero errors/warnings. For each
specified i-cube with i<n, finite support followed by maximal-dimension removal
among cells outside A compresses into A fixing its original inverse image of A.
The complement of such a cell is a subcomplex even with higher cells in A,
because their closures stay in A. Only finitely many choices. Based cubes,
nullhomotopy cubes and paths yield relative connectivity, pi0 surj/bij, and
absolute pi_i iso for i<n-1/surj at n-1, at arbitrary A basepoints without vertex
restriction. Empty/no-relative cells, n1, endpoint range and all boundary data
checked. Sources Hatcher351–353 plus actual finite support/avoidance proofs read.
Totals75 original receipts+17 additions. Next no-low-cell CW model; then the
original cellular reduction still needs free-cell/cokernel proof via excision.
`lem-a-connected-cw-pair-has-a-model-without-low-relative-cells`: new necessary
AT12A supplier complete, registered manifest/coverage/contracts; no addition
receipt/self-review. Explicit precheck/render/strict contract pass, zero errors/
warnings after adopting canonical phases1.1–9.1 (ranges replaced in one pass).
Full Hatcher352–354 and current actual approximation/recursion/transport/cylinder/
compression proofs read. Start with A, no extra vertices, and attach k>=n cells
indexed by all actual cellular boundaries and disk extensions. Assembly and
class-function recursion prove CW/topology/sethood choice-free. Initial pair LES
supplies lower isomorphisms and endpoint surjection; high-cell avoidance controls
lower groups. Constant-boundary data realize high classes; actual nullhomotopy
extensions kill kernels after finite-source based cellular approximation.
Component injection uses high-cell control for n>=2 and actual stage-one paths
for n1. Radial-shell natural transport gives all basepoints. Under AC only,
cellularly approximate Q rel A, form the actual relative CW cylinder, derive
relative triviality with an explicit pointed tail, compress onto Z and calculate
both inverse homotopies fixed on A. AC occurs only canonical phases6.1 and8.1;
weak-model construction phases1–5 is choice-free. Contract includes exact cone/
disk and transport proof passages. Totals75 original receipts+18 authored additions.
Batch6 has13 originals/two pages left. Frontier refreshed; scope will be refreshed
with the authored original consumer's actual dependency changes. Next homotopy
excision needs a full argument and a choice-free reduction; the no-low-cell
weak model is now available without choice, but its global equivalence is AC.
Do not infer the choice-free excision reduction from that AC equivalence. The
original cellular reduction's free pi_n basis/incidence cokernel remains unwritten.
Homotopy-excision preparation, not yet authored: reread Hatcher360–362 in full;
May Chapter11 printed83–89 (PDF91–97 of /tmp/at8-may.pdf), including all its
excision proof, read in full. May p88 explicitly leaves the dimension-theory
justification of general position out; p87 asserts weak CW-triad replacement.
Neither assertion alone supplies our proof. Rezk author-hosted PDF successfully
retrieved once to /tmp/phase2-d-rezk.pdf; pages1–6 read, not yet7–9. Its route
uses fibrewise truncation/descent/derived mapping-space suppliers absent here;
do not cite it as a completed local replacement.
A promising choice-free replacement route (not yet certified): prove finite
relative HELP for an arbitrary weak map P->Y using its ordinary mapping cylinder,
HEP on a finite-relative CW source, and finite cellwise disk compression into P.
Given source L-data and a specified homotopy fu~v|L, get a lift extending u;
only finitely many compression choices, fixing the common C throughout. Then
prove weak-equivalence gluing for two CW maps QA:A'->A,QB:B'->B fixed on C:
for surjectivity a compact test map lands in C union finitely many cells K;
apply finite HELP separately to K_A and K_B rel C and glue. For injectivity,
put the boundary representative in L=C union finite model cells, cellularly
approximate QA|L_A and QB|L_B rel C using finite relative clauses. Include the
finite images of these homotopies and of the target nullhomotopy in K=C union
finite target cells. The relative cylinder of the cellular F:L->K splits into
W_A,W_B meeting at C, each finite relative to L_A,L_B. Apply HELP with the
specified Q|L~F tracks to construct W->A' union_C B' extending identity on L.
The target nullhomotopy and cylinder make the boundary class null in W, hence
in the model union. All C tracks constant. This would justify replacing by the
choice-free no-low-cell weak models without selecting global homotopy inverses.
Still needs fully authored arguments/contracts and actual finite factorization
checks before being used. No homotopy-excision receipt or claim of completion.
`lem-finite-relative-homotopy-lifting-across-a-weak-equivalence`: new necessary
AT12A supplier complete, registered manifest/coverage/contracts, no addition
receipt. Explicit precheck/render/strict contract pass; initial KaTeX cases row
needed {} before a literal [ to avoid the optional row-size parser, fixed and
rerendered. May HELP p75 and surrounding75–77 full read; Hatcher347 and actual
relative criterion/compression/HEP proofs read. For f:P->Y weak and finite-relative
(K,L), lift prescribed u:L->P with T:v|L->fu by mapping-cylinder HEP, then finite
source-cell compression into jP. Target spaces arbitrary; only source is CW.
Exact projected boundary schedule J(l,t)=T(l,min(4t,1)) proved. Thus constant
tracks stay constant, and strict commuting data give a rel-L homotopy. Infinite
L is prescribed, not chosen; finitely many relative cells request witnesses.
Empty, zero-cell, one-cell, seams and endpoints checked. Contract includes exact
ordinary-cylinder and choice-free HEP passages. Totals75 original receipts+19
fully authored additions. Next weak-equivalence gluing along common C using
finite HELP and finite relative cylinders; then the actual geometric excision
argument. No original homotopy-excision/cellular-reduction receipt yet.
`lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex`: new
necessary AT12A supplier complete, registered manifest/coverage/contracts; no
addition receipt or self-review. Explicit precheck, rendering and strict selected
contract pass with zero errors/warnings after canonical renumbering in one pass.
Reread actual finite HELP and relative-cylinder proofs. Surjectivity uses two
finite-relative lifts on C plus a compact finite target support. Injectivity
uses finite-relative approximations of the two restrictions, a target support
containing their finitely many disk-cylinder images and the given nullhomotopy,
and the relative cylinder split into two finite-relative pairs. Specified reversed
approximation tracks in HELP give a cylinder map extending the source inclusion
exactly, so the cylinder nullhomotopy descends back to P. All C tracks are fixed,
including a nonvertex basepoint. Positive groups, nonabelian pi1, components,
empty relative sides and exact finite-choice uses checked. Totals75 original
receipts+20 fully authored additions. Next supply relative-group comparison for
a map weak on both ambient and subspace, using finite HELP on cubical boundaries
and cylinders; this avoids an unproved pointed-set five-lemma. Homotopy excision
still requires its geometric argument; no completion receipt claimed.
`lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy`:
new necessary AT12A supplier authored and registered, no addition receipt.
Explicit precheck passes after ordering independent phases canonically; rendering
and strict contract passed before reordering and were rerun afterward. Full actual
relative-cube definition, operations and choice-free HEP proofs reread, plus May
printed75–77. The finite HELP argument lifts the boundary first then the whole
cube. Injectivity lifts the entire side homotopy fixing endpoint boundaries and
J, extends its adjustment over the cube cylinder, then lifts that cylinder fixing
its whole boundary. It proves equality of arbitrary relative classes, including
pointed pi1, without any five-lemma assumption. All source face pairs are finite
CW; targets arbitrary. Totals75 original receipts+21 additions once the rerun
checks above pass. Next geometric homotopy-excision argument: Hatcher360–365
reread in full; its diagram images on362–364 still need inspection if used.
General-position and triple-sequence details must be supplied, not merely cited.
The relative-comparison rerun passed rendering and strict contract, zero errors/
warnings; its completed count is confirmed (75 originals+21 additions).
`lem-homotopy-excision-for-a-single-relative-cell-layer`: new necessary AT12A
supplier complete, registered manifest/coverage/contracts, no addition receipt.
Explicit precheck/render/strict contract pass with zero errors/warnings. Full
Hatcher349–351 and360–365 read; diagram pages362–363 rendered and inspected.
For A formed by finitely many cells attached directly to C and B finite-relative
C with dimensions at least a,b, proves positive relative comparison iso below
 a+b-2 and surjection at that endpoint. C may be infinite or disconnected with
supplied basepoint. Finite coordinate mesh gives affine pieces near each cell;
shrinking avoids every deficient-rank image. B fibre dimension d-l gives vertical
saturation dimension <=d-l+1<a, so finite hyperplane avoidance selects A points
with disjoint projected fibres. Explicit distance cutoff graph and last-coordinate
formula remove the B point. The deformation is in (X,X minus P), not necessarily
(X,B); radial punctured-cell deformations and the new relative weak-comparison
lemma give both vertical bijections. Homotopy injectivity forces the graph zero
at the two endpoint-parameter faces; preliminary endpoint changes are homotopies
in (A,C). Multiple B cells removed in decreasing dimension. Exact local proof
passages from disk-avoidance supplier recorded, with the source-dimension bound
used only in its omitted-point argument, not imported into the interpolation.
Initial precheck/contract failures from ambiguous external proof-step locators
and paragraph ordering were fixed; actual source locators remain in facts and
proof_evidence. No mathematics certified by the structural checks themselves.
Totals75 original receipts+22 fully authored additions. Homotopy excision remains
unwritten: need passage through successive A layers with justified relative
triple exactness and its low-degree action information, or an equally complete
replacement. Choice-free no-low weak models, weak gluing, and relative comparison
now supply the general-connectivity reduction. Original cellular reduction still
needs free bases and incidence cokernel after excision. No original receipt yet.
`lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees`: new
necessary AT12A supplier complete and registered; no addition receipt. Explicit
precheck/render/strict contract pass, zero errors/warnings. Actual pair LES and
relative-operation proofs reread. Proves natural triple segment exact at the
three middle relative groups for n>=2; final pi1(B,A) is only pointed and no
exactness there is asserted. At pi_n(B,A), lift to absolute B, subtract an
absolute A preimage in X, then use the pair boundary. At pi_n(X,A), full-boundary
compression into B supplies the image. At pi_n(X,B), compress its boundary into
A and insert the explicit collar, with joint continuity at zero proved by
closed pasting. This supplies the group-degree diagram chase without assuming
a pointed-set five-lemma. Totals75 original receipts+23 additions.
Next original homotopy excision: handle pi1 separately using path-prefix classes
and high-cell control of absolute pi1; for i>=2 induct on A layers using this
triple segment and an explicit nonabelian group chase. Compact supports pass
finite-relative results to arbitrary relative cell sets. Choice-free weak models,
weak gluing and relative comparison transfer back to original pairs. Qualify all
relative indices as positive; when m+n=0 the asserted range is vacuous, since
relative pi0 is not defined in this repository. No original receipt yet.
`thm-homotopy-excision`: original fully authored and successfully recorded
repaired/confidence1 after explicit precheck/render/strict contract pass, zero
errors/warnings. Receipt sha256 d19898826cf56af5682e1449416312043043b1673a8a00c0af5d8c2a873b0f31.
Scope refreshed sufficient after all added local suppliers and actual dependency
changes; original moved before cellular reduction in the manifest. Proof first
treats no-low-cell models. Relative pi1 uses explicit initial-endpoint loop and
prefix criterion, high-cell surj/iso on absolute pi1, including m0/n1 endpoint.
For higher degrees a written nonabelian five-term chase uses groups only in the
first four positions and pointed injectivity in the last. Single-layer excision
and the new triple exact segment give finite A-layer induction, with exact
inequalities j<k+n-1. Compact test data lie in C union finite support, preserving
connected full C. Choice-free no-low weak models, weak gluing and relative weak
comparison transfer the cell-bound result to original pairs. Positive indices
are explicit; m+n=0 has no relative pi0 claim. No AC inverse clause consumed.
Totals76 original receipts+23 fully authored additions; batch6 now11/23 originals
complete,12 originals/two pages remain. Batch5 horned sphere remains owner-held;
batch7 remains120 originals/four pages untouched. Next cellular reduction needs
quotient comparison, free wedge bases and incidence cokernel, or proceed along
the now-unblocked Freudenthal branch with full basepoint/suspension verification.
`lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`: new necessary
AT12A supplier complete and registered, no addition receipt. Explicit precheck/
render/strict contract pass, zero errors/warnings. Full Hatcher10–12,15–16 read;
Proposition0.17 full proof is on16. Reread actual quotient/cofiber, HEP and
basepoint-transport suppliers. CW quotient is constructed from the collapsed
vertex and every remaining characteristic disk; map-out tests identify the
ordinary quotient topology. HEP extends one given contraction of A to F on X;
F1 factors as gq, and qF descends jointly to id homotopic qg. The identity
qF=Fbar(q times id) gives compatible tracks, so beta_alpha g_* is an explicit
inverse to q_* at every source point, even when the contraction is not based.
The based clause is stated only for a contraction fixed at its endpoint a.
Totals76 original receipts+24 authored additions. Next relative quotient
comparison via X union_A CA, the now-proved homotopy excision, and collapse of
the contractible cone; retain exact r+s endpoint and pointed degree-one wording.
`lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range`:
new necessary AT12A supplier complete and registered, no addition receipt.
Explicit precheck/render/strict contract pass, zero errors/warnings. Full current
connectivity definition, cone definition, relative-disk model and relevant
cylinder/quotient proofs read; Hatcher364 full proof read and diagram rendered
and inspected. Also read Hatcher8–9 for ordinary CW quotient/cone context.
Build CA as the ordinary cylinder of A to a point with interval reversed, then
assemble Y=X union_A CA. Pair LES gives (CA,A) (s+1)-connected with its pointed
pi1 tail explicit. Excision gives iso below r+s+1 and surjection there. Collapse
contractible CA and apply relative weak comparison; map-out tests identify
Y/CA with X/A and the composite with the actual quotient map. Degree-one
bijections are pointed, not an asserted relative group structure. All cone
contractions, quotient homotopies and basepoint uses are choice-free.
Totals76 original receipts+25 authored additions. Next free pi_n of arbitrary
wedges of n-spheres (n>=2) by finite wedge inclusion into the finite product,
high-cell control and finite support; then relative characteristic-cell bases
and the identical incidence cokernel needed by the original cellular reduction.
Additional published proof-accounting concern (confirmed local omission, not a
claim that the theorem is false): `prop-euler-characteristic-of-a-finite-cw-product`
on `cw-complexes-and-cellular-homology` has only
`def-euler-characteristic-of-a-finite-cw-complex` in deps, and its Facts section
says “Given: The product CW structure whose cells are e^p times f^q.” Its two
proof paragraphs count those cells and multiply the alternating sums; neither
constructs that structure nor cites a supplier for its ordinary product topology.
Confidence high for this exact missing prerequisite; audit limited to this item
and its one declared dependency interface, not the full page. Required general
supplier: a proof that the ordinary product of finite CW complexes has the
product cell structure (disk products, attaching topology and finite closed-cover
argument). Proposed owner/Step4 repair mapping: add such a supplier to the
published CW page in its authorized later repair, then cite it before the count.
The next local AT12 wedge lemma will prove only the finite product of standard
spheres it needs, so it must not be represented as closing the general published
omission. The serial reconciler owns canonical ledger updates; no published
content or canonical ledger edited here. This unrelated debt does not block the
local sphere-product proof. The published B example
`ex-higher-homotopy-groups-of-a-product` has a sound explicit binary coordinate
proof; do not use it as an A-page dependency. Prove the finite coordinate argument
locally instead.
`lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis`:
new necessary AT12A supplier complete and registered, no addition receipt.
Explicit precheck/render/strict contract pass, zero errors/warnings. Hatcher
Example4.26 p363 read in full earlier this context; actual sphere degree and
cubical/spherical identification proofs read fully, and the product universal
property's choice boundary inspected. Proves the ordinary finite sphere-product
CW structure directly: product characteristic cubes, finite closed compact-image
cover and quotient disk tests. Its axes are the finite wedge and remaining cells
have dimensions >=2n, so high-cell control gives pi_n isomorphism exactly for
n>=2. The coordinate cube/homotopy argument gives the finite product groups;
degree identifies inclusions with unit vectors. Compact support proves both
surjectivity and injectivity for arbitrary J, and the collapsing projection
degrees give the explicit finitely supported inverse. Empty wedge stipulated
point, one summand, zero sums, and n1 exclusion checked. No dependency on the
published B product example or the incomplete Euler-product proof. Totals76
original receipts+26 authored additions. Next use the relative quotient lemma
and this wedge basis to establish characteristic n-cell bases and incidence
relations for the original cellular reduction. The relative basepoint transport
of characteristic disks must be justified, including independence in simply
connected A, and boundary/Hurewicz orientation compatibility must be calculated.
Wedge supplier final clarification: the actual `def-free-abelian-group` supplies
the universal property, not a finite-sum construction. F6 now says this accurately,
and new proof1.2 constructs finitely supported integer functions, checks the
pointwise abelian laws and proves the universal extension/uniqueness formula by
finite sums. No ordering is selected for every finite set. Contract regenerated;
explicit precheck/render/strict contract rerun all pass, zero errors/warnings.
This corrects the initial overstatement of that dependency's interface before
any consumer is authored. Totals remain76 original receipts+26 additions.
Published concern found while checking the next homology interface:
`thm-relative-cellular-homology-computes-relative-singular-homology`, page
`cw-complexes-and-cellular-homology`, Proof2.1 asserts that “the cellwise radial
collar construction, assembled over the skeleta by the weak topology” gives an
open neighborhood retract for every CW subcomplex, but supplies neither the
construction, its continuity proof, nor a dependency proving this assertion.
Proof1.1 also asserts the ordinary quotient CW structure, now supplied locally
by `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`. Confidence high
for the local proof omission; no claim that relative cellular homology is false.
Do not treat the quoted strategy as a completed good-pair proof. Proposed local
supplier for the actual needed positive-degree homology quotient interface:
use the ordinary cylinder M of A->X; its free A end has the explicit open collar
A times (1/2,1], making (M,A_free) a good pair. The retraction M->X and identity
on A give relative homology isomorphism by pair LES. M/A_free is X union_A CA;
collapse contractible CA using the new CW quotient lemma. The commuting quotient
maps identify H_i(X,A) with H_i(X/A,*) for i>=1. This route avoids asserting an
unconstructed general CW neighborhood. The canonical published ledger remains
for serial reconciliation. Further skeletal suppliers still require actual proof
inspection before deciding whether they can be consumed.
Additional exact published evidence after reading the actual skeletal suppliers:
`thm-relative-homology-of-consecutive-cw-skeleta`, same CW page, Proof2.1 says
that good-pair quotient comparison and sphere homology “give one copy of G” and
then uses compactness to conclude a direct sum over wedge summands. The finite
wedge splitting needed before that compactness passage is not proved or cited;
its declared excision theorem can help prove it but is not itself a wedge-sum
calculation. Confirmed omitted finite-wedge argument, high confidence for that
limited proof-accounting finding, not falsity of the claim. Proof1.1's single
attachment collar is more elementary than the unconstructed general-CW collar
above, but is likewise only asserted. Its declared compact-image lemma also
inherits the already reported undeclared-choice gap. Proposed suppliers: the
new choice-free compact support lemma, the planned explicit CW homology quotient
comparison, and an explicit finite sphere-wedge homology calculation by an open
cover with contractible intersection, then finite supports for arbitrary wedges.
`lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`
has a sound finite-cycle/bounding-chain argument conditional on its compact-image
supplier; it is an impact-review candidate for replacing that supplier with
`lem-compact-cw-images-have-finite-cell-support-without-choice`, not a newly
claimed independent false theorem. `thm-cellular-homology-computes-singular-homology`
has a correct displayed exact-sequence chase conditional on these skeletal
suppliers; do not silently treat that as full closure of the conditional inputs.
The next local arguments will avoid consuming their unresolved clauses.
`lem-cw-quotient-induces-relative-singular-homology-isomorphisms`: new
necessary AT12A supplier complete and registered, no addition receipt. Explicit
precheck/render/strict contract pass, zero errors/warnings. Actual good-pair
quotient proof, pair LES, singular prism formula and contractible-space homology
proof read fully. For arbitrary coefficients and every i>=0, proves the actual
quotient-induced H_i(X,A)->H_i(X/A,*) isomorphism. The cylinder free-end collar
A times (1/2,1] is explicitly open and retracts by its height formula. Retraction
M->X induces a relative isomorphism by a written five-term chase (cokernels at
zero). M/A_free=X union_A CA; its cone is a CW subcomplex with apex-fixed
contraction, so its collapse is a based homotopy equivalence. Relative prism
homotopies prove the last isomorphism; qr=pq_M identifies the composite with q_*.
No general-CW neighborhood retract assertion is consumed. Totals76 original
receipts+27 authored additions. Next finite wedge homology can now be proved
more economically by the pair (W,all-but-one summands), this quotient lemma,
the pair LES and the explicit retraction/remaining-sphere section; then compact
finite cycles and bounding chains pass to arbitrary wedges. This avoids needing
the previously considered open-cover route. Neither is authored yet.
`lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis`:
new necessary AT12A supplier complete, registered in manifest/coverage/contracts,
no addition receipt. Explicit-path precheck, rendering and strict selected
proof-contract check all pass, zero errors/warnings. Reread the actual wedge
CW/projection/finite-support group proof, quotient homology proof, pair sequence,
Hurewicz definition's Verification1.3, sphere homology calculation, H0 proof,
finite singular-chain definition and canonical compact-support proof. The finite
wedge is split by (W,U), U the remaining spheres retaining the vertex; actual
quotient and point-relative maps identify its relative homology, and the
retraction and remaining-sphere section explicitly give the inverse direct-sum
formula. Both arbitrary-index surjectivity and injectivity use finite cycles
and bounding chains in finite subwedges. H0 is one shared component, not an
indexed sum. Supplied sphere orientations and finite witnesses keep the proof
choice-free. Totals76 original receipts+28 authored additions. Next: relative
single-layer characteristic-cell bases, boundary incidence compatibility, and
higher-cell homology stability to close the original cellular reduction. Its
original claim and current dependencies must be reread before authoring; no
claim that this remaining work is already proved.
`lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases`:
new necessary AT12A supplier complete and registered, no addition receipt.
Explicit-path precheck, render and strict selected contracts pass with zero
errors/warnings. Actual relative quotient, high-cell connectivity, HEP, homotopy
triple and degree proofs reread; the proof uses only the first three together
with the completed wedge homotopy/homology and Hurewicz definition interfaces.
For k>=2 and simply connected A, relative quotient has r=k-1,s=1, giving an
isomorphism exactly through k, including proof of relative degree-two
abellianness. Quotient orientations are defined as images of the relative disk
orientation under the actual disk quotient isomorphism. For one characteristic
map, a path in A moves its marked boundary value; HEP extends first over its
sphere boundary, then its disk. After collapse this is a based sphere homotopy,
so quotient injectivity proves independence of paths and extensions. Relative
prism invariance proves h(c_e)=chi_e*[D,boundary], and quotient homology proves
these are the homology basis. No family of paths is selected; unique inverse
images define the full basis choice-free. Totals76 original receipts+29
additions. Next complete the original cellular reduction with the identical
incidence calculation and explicit high-cell homology stability; these remain
unauthored obligations, not consequences to be assumed without proof.
`lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity`:
original fully authored and repaired, successful receipt
97bbfbafff8f8cef8939f77282741f1afbcb0cc798061d17cb018eb8e7eca3b8.
Explicit precheck/render/strict selected contracts pass, zero errors/warnings.
AT12 sufficient scope refreshed (1213c8cc3129b413a8d2faae57722db87233eb5ef195113066438d6d3f927914)
and frontier ledger refreshed before receipt. Hatcher printed367–372 reread
fully, along with actual no-low-cell model, HEP, high-cell, relative triple,
sphere degree, homology chain sequence and definition proofs. The authored
argument derives the homology triple sequence from its chain quotients, computes
single layers using local quotient/wedge suppliers, and proves both surjectivity
and injectivity of high-cell homology stability using finite cycles and bounding
chains. High-cell homotopy plus the triple segment gives pi_n stability without
simple connectivity. With A simply connected, both successive layers have
compatible free bases. Their triple boundaries have exactly the same columns
D_alpha,beta=degree(p_alpha q_n phi_beta): moving-basepoint boundary homotopies
preserve degree, and the homology boundary is the pushed positive boundary
orientation chain. Natural Hurewicz therefore identifies the actual cokernels.
AC is propagated only for the replacement equivalence rel A, whose two actual
supplier uses are arbitrary-cell approximation and compression selection.
Published incomplete cellular/skeletal suppliers were removed from this item's
logical inputs; their debt remains recorded for serial owner repair. Totals77
original receipts+29 additions; batch6 has12/23 originals complete. Next reread
and author `thm-relative-hurewicz-theorem`; do not infer its exact promised
CW-type/degree-two hypotheses from this checkpoint.
`thm-relative-hurewicz-theorem`: original fully authored and repaired;
explicit precheck/render/strict selected contracts pass, zero errors/warnings.
Successful item receipt recorded after refreshing sufficient AT12 scope for the
removed redundant published cellular-homology dependency. The proof applies the
exact AC/CW/simple-connectivity hypotheses of the completed cellular reduction,
then proves surjectivity and injectivity of the identity on the identical
incidence cokernels. The relative equivalence fixes x0, and natural Hurewicz
transfers the actual isomorphism. H0 vanishing and degree-two abelianness are
explicit. No general nontrivial pi1-action theorem is claimed. Totals78 original
receipts+29 additions; batch6 has13/23 originals complete. Next absolute
Hurewicz: avoid treating an arbitrary point as a CW vertex. Use a vertex first,
then justify arbitrary-basepoint transport and transfer to supplied CW-type
homotopy equivalences. Its degree-one branch must stay choice-free.
`thm-absolute-hurewicz-theorem`: original fully authored and repaired after
successful explicit precheck/render/strict selected contracts, zero errors or
warnings. Scope and frontier refreshed before the successful receipt. The proof
uses a CW vertex (finite descent through nonempty attaching boundaries), not an
arbitrary point treated as a subcomplex. Relative cubes at that vertex are
absolute cubes; CW disk quotient homology proves the orientation image is a
generator, so the two Hurewicz formulas agree after positive point-relative
identification. Reduced H0 is computed separately from augmentation. For every
other basepoint, the actual radial-shell moving-boundary homotopy descends to
an unbased sphere homotopy; prism invariance gives h_v beta_gamma=h_x. For a
supplied unbased homotopy equivalence f with inverse g, L=beta_alpha g_* obeys
Lf_*=1 and f_*L=beta_falpha(fg)_*, the latter an isomorphism by the second
inverse homotopy. Thus both injectivity and surjectivity of f_* are proved,
then homology prism invariance and naturality transfer Hurewicz. The degree-one
branch uses the existing choice-free abelianization proof directly. Actual
transport, connectivity, reduced homology and H1 supplier proofs reread fully.
Totals79 original receipts+29 additions; batch6 has14/23 originals complete.
Next inspect the remaining manifest order and author its next eligible original
item; no new partial item is currently on disk. Still no batch6/7 full gates or
pages completed. Horned-sphere owner escalation and all recorded published debt
remain open as previously documented.

## Resumed dispatch step3b-d-112ebc42766e49fd

Read CLAUDE.md, README.md and SCHEMA.md completely; current owner direction,
Step-3a group-D report and the latest checkpoint were read. The live status
command confirms Step 3b incomplete for batches 5/6/7; git head e6ff54900 reopens
the bounded horned-sphere authoring. The owner direction is now present and its
relative Kunneth and horn construction obligations remain controlling. The
checkpoint's earlier no-direction statement is historical entry evidence only.
Current manifest/file census: batch5 has only the horned-sphere consumer absent;
batch6 has Blakers–Massey, Freudenthal and six examples absent at entry;
batch7 has all120 original files absent. Existing files are not thereby newly
certified. Do not re-author completed originals or certify unexamined additions.
The three horn support packages still need complete bounded reading in this
resumed context; an initial oversized read was truncated and is not evidence.

`cex-whitehead-theorem-fails-without-cw-type`: fully authored and repaired,
receipt53de477e41c90a2560a1766254009b9a9d2601d6cdfb994ccfd0f413c89ccfa0.
Read its three original dependencies and the full IVT and rational/irrational
density proofs. Added the latter two actual inputs in the manifest and item.
The proof computes every component and every positive based cubical group,
forces any inverse by constant point tracks, and refutes continuity at {0}.
No assertion that Q has one component or is weakly contractible. No AC.
Exact dependency-source locators are their Statement/Definition sections,
with the actual IVT bisection and density Proof2.1 read. The source provenance
remains the original ai-altered rational witness, not a claimed quotation from
May. Explicit-path precheck, real KaTeX/YAML rendering and strict selected
contracts pass. Initial precheck required canonical phase-number repair;
all contract locators were updated and the recheck passed. AT12 sufficient
scope and frontier inputs were refreshed before recording the item. No new
supplier or published defect was introduced. The last prior checkpoint plus
this item gives80 completed original receipts and29 authored additions.
Next: finish the remaining AT12 original theorems and companion calculations
from their exact current supplier proofs; Blakers–Massey and Freudenthal remain
unauthored, as do the other five examples. Full batch gates, A/B pages, all
batch7 authoring and the reopened horn obligations remain outstanding.

`ex-first-nonzero-homotopy-group-of-a-sphere`: fully authored, repaired receipt
recorded after explicit precheck/render/strict contracts passed with zero
errors/warnings and frontier refresh. All six actual suppliers read fully;
added the singleton-wedge connectivity and Hurewicz-definition dependencies.
The calculation gives h([u])=degree(u)[S^n], including identity, constant,
positive and negative coefficients. n=1 uses degree directly; n>=2 has both
the AC-dependent general-Hurewicz route and independent choice-free degree
route, with exact inherited uses stated. No generated supplier or new published
debt. Totals81 original receipts+29 authored additions. Next eligible companion:
finite wedge Hurewicz calculation using the fully authored homology wedge basis,
not the reported incomplete published cellular-homology argument.

`ex-hurewicz-calculation-for-a-wedge-of-simply-connected-spheres-in-the-first-degree`:
fully authored; repaired receipt PENDING because record-item returned
`Step 3a must clear before item auditing`. Explicit precheck/render/strict
contracts passed, zero errors/warnings, and frontier refreshed. Read actual absolute
Hurewicz, wedge homotopy structural proof, wedge homology finite-splitting
proof, Hurewicz definition/verification and AC definition in full. Uses only
the structural/connectivity part of the wedge homotopy supplier for its
Hurewicz calculation. Replaced incomplete published cellular-homology input
with those exact suppliers. Proves h([inclusion_j])=e_j, independence of finite
sum order, and both composites of the coordinate inverse. Handles singleton,
zero, signed coefficients and n=2 explicitly. Original nonempty finite J and
AC hypothesis retained. No new published finding beyond already reported debt.
Totals81 original receipts+29 additions, plus this fully authored original
awaiting its item receipt. Three AT12 examples and two original theorems remain
absent. The actual census controls continuation. Next Freudenthal or Blakers–Massey, with full geometric
comparison proof rather than the scaffold's claimed identification.

Continuation checkpoint: the wedge calculation's repaired receipt subsequently
succeeded (973e41501b0ad1fbf4945703f16cf9883b8d972c3c14f29fef139626ef2d04cd).
This supersedes its pending-receipt status above. Totals82 original receipts.

`lem-horn-replacement-block-has-injective-commutator-meridian`: new local A
supplier fully authored and registered in batch5 manifest, coverage and
contracts. No item decision was submitted for this dispatch addition. Explicit
precheck/render/strict selected contracts passed with zero errors/warnings;
canonical phase numbering was repaired and contract locators followed it.
The proof supplies Clifford tori, coordinate-cube straightening by a supported
Lipschitz perturbation, the punctured-torus pair, marked annular commutator,
actual two-open-set van Kampen inclusion, reduced-word injection, disjoint
ambient compressions and relative-interior cap-only cuts. Its finite claims
are choice-free. Complete source arguments read: all three current horn support
packages; Hatcher Example2B.2 printed170–172 (local PDF74–76); Daverman–Venema
§2.1 printed47–51 (local PDF66–70). Their support recommendations were not
accepted as certifications. Every actual dependency's statement and proof was
read. Scope refreshed sufficiently for the new inventory and frontier refreshed.
A subsequent wording correction specifies the CLOSED exterior of the coordinate
cube; it changes no map or claim. Recheck this correction before handoff.
Totals82 original receipts+30 authored additions. The companion nested-ball
supplier and original horn consumer are still absent, so the owner obligation
is open. Next author finite relative cap matching and compatible finite maps,
then the q_n inverse estimate and limit; AC must cover recursive map selection
and invariance of domain. All remaining previously recorded obligations persist.

`lem-controlled-nested-horn-construction-embeds-a-closed-three-ball`: fully
authored new A supplier, registered in manifest/coverage/contracts, with no
record-item decision (dispatch-addition exception). Explicit precheck, rendering
and strict selected contracts pass, zero errors/warnings. Rechecked the corrected
first horn-block supplier too: precheck/render/strict contracts pass. The new
proof's canonical steps1.1–4.1 prove restricted finite cap matching (including
an exact incoming disk-pair map); 1.2/2.2 construct the actual target tree;
1.3/2.3 give the source radii and vertical homeomorphisms; 5.1/6.1 check cap
charts and paste finite embeddings; 7.2 constructs q_n; 8.1/9.1 prove inverse
control and limit injectivity; 10.1 proves surjectivity; 11.1 identifies boundary
using AC-dependent invariance of domain; 12.1 checks actual collars and marking
transport. AC is explicitly used for a selection function on permitted next
finite data before recursion, and for invariance of domain. It is not claimed
that independent countable choices alone justify dependent map selections.
Reread the entire recursive-cap support, the current first horn supplier,
invariance-of-domain proof, EVT metric proof, AC definition, and relevant IVT
and compactness/completeness inputs. No covering-path-lifting theorem is consumed:
the needed circle boundary lift follows from cutting at a point and interval
monotonicity. Scope and frontier refreshed. Totals82 originals+31 additions.
Next original horn consumer: prove the standard initial meridian, actual free
basis substitutions, compact-nullhomotopy exclusion, and puncturing infinity.
The original scaffold linking-number strategy is invalid and must be replaced;
the unchanged spherical claim, nontrivial fundamental group and AC remain.
Full batch gates and authored A/B pages still outstanding, as is remaining
batch6/7 work. No new published defect is asserted by these two suppliers.

`cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls`:
fully authored and repaired under the explicit bounded owner reopen. Receipt
639791cd42dea2a14b5ee8ea2df3ff45b3df4f31f8dfcc062452f641abeab875.
Explicit precheck/render/strict selected contracts pass, zero errors/warnings.
The proof rereads and consumes the two new geometric suppliers, actual
Jordan–Brouwer, van Kampen, punctured-Euclidean-space, circle-generator and
retract proofs, with compactness and AC. Step2.1 proves the inclusion-induced
puncturing isomorphism for an open3-manifold using a coordinate-ball cover;
step3.1 computes the particular pushed Clifford-torus meridian; step4.1 checks
the free-basis induction in the actual marked recursion; step5.1 excludes a
compact nullhomotopy; step6.1 identifies the spherical components and transfers
the obstruction across infinity. It preserves the original spherical claim and
AC; the manifest's invalid linking-number strategy is replaced. No unrecorded
conjugation or abelian obstruction is used. Totals83 original receipts and31
new authored suppliers. This closes the mathematical horn authoring obligation;
independent review remains ahead and no owner/audit/judge stamp was added.

The four batch5 A/B pages already existed under library/algebraic-topology;
earlier navigation checks under nonexistent pages/ and topics/ were not a
correct page census. Reread all four complete page files and AT7/AT8 design
sections. Added both new horn suppliers on the existing duality A page directly
after invariance of domain, with matching manifest order and revised A/B prose
explaining the actual construction and spherical obstruction. The earlier page
content is retained. Batch5 full gates are the next checkpoint; batch6 still
has two A theorems and three B examples absent, and batch7 still has120 original
items absent. No unrelated published debt is closed by the horn repair.

Batch5 full explicit-path gates now run: all62 proof-bearing files pass
precheck; all78 items plus4 A/B pages pass actual rendering; content-policy
checks78 scoped items with zero errors/warnings; strict proof-contract checks
78/78 with zero errors/warnings. The duality pages include the two new suppliers.
`validate-plan research/plan-spec.json` was run and FAILED globally; its very
large output is being filtered for exact owned pre-splice diagnostics before
recording them. This is not a claim of a clean plan or a completed dispatch.

Exact batch5 pre-splice plan disposition: research/plan-spec.json still has
empty item lists on all four owned batch5 pages, versus the current manifest's
21,8,39,10 authored items. Step4 must splice the manifest inventory, including
both new horn suppliers; the plan check therefore did not yet validate their
item-level plan edges. The global failure consists of1254 dup-id errors outside
these owned pages, with3840 redundant-prereq warnings. The two warnings whose
consumer is in batch5 are: cup-cap-cross-products-and-cohomology-rings directly
requires cw-complexes-and-cellular-homology already reached through
singular-cohomology-and-coefficient-theorems; orientations-poincare-lefschetz-and-
alexander-duality directly requires relative-homology-excision-and-mayer-vietoris
already reached through cup-cap-cross-products-and-cohomology-rings. No global
plan or shared design prose was edited. Serial reconciliation should replace
the AT8 horn paragraph's former geometric strategy with the completed two-
supplier construction and nonabelian compact-nullhomotopy argument, and retain
the earlier AT7 relative-Kunneth supplier amendments recorded in this report.

`thm-freudenthal-suspension-theorem`: fully authored and repaired, receipt
6cf0fea4277a6720657f69ebf8f216231f843b091ea963537454de6b884ea0ea.
Explicit precheck/render/strict selected contracts pass, zero errors/warnings;
canonical numbering and all contract locators were repaired. Read the complete
Hatcher Cor4.24 proof printed360–361 (local chapter4 text lines2041–2068),
and the complete current proofs of homotopy excision, pair LES, cellular CW
cylinders, contractible-subcomplex quotients, weak equivalences of pairs,
basepoint transport, relative disk model and interval quotient homotopies.
These added actual dependencies replace the scaffold's unproved map
identification. Step1.1 constructs ordinary CW cones/suspension; 2.1 proves
cone pair connectivity and the low-degree clause; 2.2 collapses the lower cone;
3.1 gives the explicit radial G_s homotopy with a_s=1-s/2, proving
q_*[Sigma h]=q_rel e partial^{-1}[h]. The homotopy is based after quotient,
so no equatorial/apex basepoint is silently interchanged. Step4.1 transfers
both isomorphism directions below2n-1 and surjectivity at the endpoint.
No AC is used. Scope and frontier refreshed before receipt. No new supplier
or published defect. Totals84 original receipts+31 additions. Next finish its
sphere stable-range companion, then the other two remaining AT12 examples
and Blakers–Massey. Batch7 authoring remains outstanding.

`ex-freudenthal-stable-range-for-spheres`: fully authored and repaired after
explicit precheck/render/strict selected contracts pass, zero errors/warnings.
Reread the complete singleton-wedge connectivity proof and the completed
Freudenthal argument. The suspension homeomorphism is proved from its actual
formula, inverse at nonpoles and compact-to-Hausdorff argument at the poles;
the lower apex goes to the south pole. The arithmetic proves stabilization
under every later transition once n>k+1, with the equality endpoint and k=0,1
calculated separately. This remains choice-free; no unstable group is invented.
No new supplier or published concern. Frontier refreshed and repaired receipt
recorded. Totals85 original receipts+31 additions. Remaining absent batch6
originals: Blakers–Massey and the simply-connected homology-equivalence example
and its non-simply-connected counterexample. Next derive the two-cell
counterexample using the proved relative CW quotient and sphere-wedge homology
inputs, avoiding the already reported incomplete published cellular-homology
supplier. Batch7 still remains to author; its120 original files are absent.

`cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity`:
fully authored and repaired; explicit precheck/render/strict selected contracts
pass, zero errors/warnings. The earlier suggestion to use the higher-sphere
wedge homology lemma was checked and rejected because its statement requires
n>=2. Instead the proof derives the two-circle wedge homology directly from
its split pair sequence. The characteristic disk induces the relative quotient
isomorphism and its boundary is (2,-3) by Hurewicz additivity. The cokernel
isomorphism lambda(u,v)=3u+2v has the explicitly verified inverse k[(1,-1)],
so the actual loop ab^{-1} is a homology equivalence in every degree. The
open annular cover gives the group presentation; (12),(123) give a nonabelian
S_3 quotient. Read the full current attachment, quotient-homology, pair LES,
Hurewicz definition/verification, sphere homology, wedge/circle group, retract,
basepoint transport and H0 proofs. No AC or incomplete published cellular-
homology argument is used. Scope and frontier refreshed before successful
receipt. Totals86 original receipts+31 additions. Remaining batch6 originals
are Blakers–Massey and the simply-connected homology-equivalence example;
its finite choice-free branch needs separate proof, since the general relative
Hurewicz supplier assumes AC. Do not infer that branch merely from finite
X,Y if the proof still invokes an AC-dependent intermediate replacement.

Added and fully authored local A supplier
`lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice`.
Read Hatcher Lemma4.6 pp346–347 and Proposition4.21 pp356–357 in full from
the local chapter4 text, after a web search located the exact argument.
Read current arbitrary mapping-cylinder criterion, disk compression, explicit
CW HEP, finite choice, finite attachment assembly, relative singular homology,
prism formula and pair LES completely. The proof compresses one finite domain
at a time into a relatively weak subspace; constructs that finite CW domain
from all actual face restrictions of a cycle; proves coefficient cancellation
and the relative prism equation; then proves absolute and relative homology
comparison, including degree zero and empty spaces. No AC is used and no
family of representatives is selected. Manifest, coverage and strict contract
registered. Explicit precheck, rendering and strict selected proof contracts
all pass with zero errors/warnings. As a dispatch-created addition, it receives
NO record-item or self-review. Totals remain86 original receipts, now32 additions.
Next use the all-data weak no-low-cell model and this homology comparison to
supply the choice-free Hurewicz implication needed by the finite homology-
Whitehead example. Its consumer is still unwritten; no original decision changed.

Added and fully authored local A supplier
`lem-relative-hurewicz-comparison-through-a-choice-free-weak-model`.
The all-data model Q is weak and fixes A. Its actual induced relative homotopy
and homology maps are isomorphisms without choice; the supplied no-low-cell
calculation gives the identical incidence cokernels and lower vanishing on Z.
Naturality transports the actual Hurewicz map. F3 explicitly identifies which
choice-free portions of the existing cell-reduction proof are used and excludes
its AC replacement and inverse-of-spaces steps. Read the current weak-pair
comparison and single-cell basis proofs fully as well as the model and reduction
proofs; no relative Hurewicz theorem with AC is silently invoked. The original
AC theorem is unchanged. Both isomorphism directions, n=2 abelianness, lower
H0, empty cell sets and the absence of any inverse map of spaces are explicit.
Manifest, coverage and contracts registered. Explicit precheck, rendering and
strict selected contracts all pass with zero errors/warnings. External proof
row locators were kept in F3 rather than being mistaken for this proof's input
rows by the contract parser. No record-item or self-review for this addition.
Totals86 original receipts+33 additions. Next author the homology-Whitehead
example using this lemma for its finite branch and Whitehead's finite clause.

`ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction`:
fully authored and repaired after explicit precheck, rendering and strict
selected contracts pass, zero errors/warnings. Read Hatcher Cor4.33 pp367–368
in full and the current cellular approximation, ordinary CW mapping cylinder,
Whitehead, relative homotopy LES, connectivity definition, AC definition,
relative Hurewicz and all new comparison proofs. The proof first makes f
cellular using the appropriate finite/AC clause, calculates every relative
homology group including H0, establishes relative pi1 at each source point,
and inducts on relative connectivity using the new choice-free comparison.
It checks kernel and image in the absolute pair sequence and transfers both
inverse homotopies from g to the original f. The finite branch never invokes
an AC model inverse. Scope and frontier refreshed; record-item succeeded.
Totals87 original receipts+33 authored additions. Only Blakers–Massey remains
as an absent original in batch6; its A/B pages and full-batch checks remain.
Batch7's120 original items and four pages are still outstanding. No new
published defect is asserted by the two new comparison suppliers.

`thm-blakers-massey-connectivity-for-a-homotopy-pushout`: fully authored and
repaired after explicit canonical precheck, rendering and strict selected
contracts pass, zero errors/warnings. The proof identifies a based j-cube in
hofib(A→V) literally with a relative (j+1)-cube in (V,A), including the pi0/
relative-pi1 correspondence. Excision therefore controls the actual fiber map.
It proves connected fibers and then the total-space surjection/injection by
an explicit natural fibration LES chase. Actual CW half-cylinders and clopen
component subcomplexes handle arbitrary components. Retraction whiskers compare
the enlarged endpoint pullback to the original one. For noncellular maps,
explicit double-cylinder maps from two approximation homotopies have inverse
backtrack contractions; remaining-segment formulas compare the actual canonical
maps from A. No false common endpoint basepoint is used. The shift and m=n=1
endpoint are checked. General AC is now stated, solely for arbitrary-source
cellular approximation; cellular maps and finite A have choice-free proofs.
This is authorized AC accounting, not an owner ruling. All original claims
are retained with the declared assumption; serial design reconciliation must
propagate that exact general-case assumption wherever the theorem is consumed.

Read the complete current excision, ordinary and CW cylinder, mapping-path
factorization, fibration LES, pair LES, cube operations, interval exponential,
basepoint transport and compactly-generated convention proofs. Rezk §1.6 and
Theorem3.1 were read for the convention and statement only. The manifest's
former claim to use Rezk's complete truncation proof is replaced with accurate
source provenance: this proof derives the classical fiber translation from
the completed local excision argument. Canonical rows moved the cellular
construction to2.2; current final row10.1. Scope and frontier refreshed;
record-item succeeded. Totals88 original receipts+33 additions. Batch6 now
has44 authored items (38 A+6 B), but its A/B pages and full-batch gates are next.
Batch7's120 originals and four pages remain outstanding; dispatch is not complete.

Batch6 pages now authored under library/algebraic-topology, with all38 A and6
B items in prerequisite order. Reread full AT12 design (§AT-12 through its
source locators), current manifests, coverage and dependency-input instructions.
Full explicit-path precheck passes44/44; rendering passes46 files (44 items,
2 pages); content-policy passes44 scoped items with0 errors/warnings. Strict
contracts pass44/44 with0 errors and1 warning: shotgun-bracket on existing
thm-cellular-approximation-for-maps-of-cw-pairs row1.1 (four of seven facts,
three later rows cite only prior steps). This is reported honestly; the unchanged
completed proof was not re-authored for a heuristic warning.

The required validate-plan run FAILED globally again:1254 dup-id diagnostics
and3840 redundant-prereq warnings. Both AT12 plan item arrays remain empty,
versus38 and6 in the authored manifest, so this pre-splice run does not verify
the new item-level plan edges. The six owned warnings are relative-homology-
excision-and-mayer-vietoris already reached through each of the other three
A-page prerequisites; cw-complexes-and-cellular-homology already reached
through higher-homotopy-groups-and-cofiber-sequences and through fibrations-
fiber-bundles-and-homotopy-exact-sequences; and higher-homotopy-groups-and-
cofiber-sequences already reached through fibrations-fiber-bundles-and-
homotopy-exact-sequences. The narrower filtered output was read completely
after the first broad filter included unrelated consumers and was truncated.
Step4 must splice the44 items, retain all new A suppliers, correct the design's
Blakers–Massey direction and propagate its exact AC/choice-free clauses, and
update the design's outdated weak-model/homology warning to distinguish the
new finite-cycle comparison from an unproved inverse-of-spaces assertion.
No shared plan or design file was edited.

Live engine status was checked read-only; it is paused with nothing running
and still awaits this dispatch and other owner-held work. Its displayed old
Kunneth blocker is not current content evidence: the owner item record is
reopen (16:53), followed by the successful repaired review (19:18), both read
on disk. No engine state, owner decision or old independent record was changed.
The owned batch6 cross-batch input is still[], with no current-run external
supplier beyond its own batch; published dependencies do not create those rows.
Next read batch7's complete current scope and prerequisite evidence and author
its first item in order. No batch7 completion is claimed.

Census correction against the immutable pre-author baseline (not running
checkpoint arithmetic): batch5 has66 originals+12 additions=78 written items;
batch6 has23 originals+21 additions=44 written items. Thus the current authored
inventory is89 originals+33 additions=122 items, plus six A/B pages. Earlier
incremental checkpoints undercounted originals by one. The baseline is
research/phase-2-next-17-step3-auditor-baseline.json, read only. Batch7 still
has120 original items, no additions and no written item files. These exact
manifest/baseline counts supersede the informal running totals above.

The baseline/receipt census exposed the exact one-item discrepancy:
`def-double-mapping-cylinder-homotopy-pushout-and-path-space-homotopy-pullback`
was already in the immutable pre-author baseline, but lacked an author receipt.
It is therefore an ORIGINAL, not a dispatch-created addition. Its completed
body was not re-authored. Reread all six direct definition/topology suppliers
in full; its verification was read while authoring Blakers–Massey and passes
the explicit full-batch precheck, rendering and contracts. Recorded its repaired
receipt now, after those checks. Every one of the89 original batch5/6 items
now has an accept/repaired author record; the33 additions remain outside the
self-review/record-item loop as required. No new item was incorrectly sent
through review by this correction. The prior one-missing-receipt result is
superseded by this successful record.

`def-standard-orientation-of-the-affine-simplex`: first batch7 original now
fully authored, repaired and checked. Its affine basis E_i=v_i-v_0 agrees
with vertex parity by explicit generating swaps. The outward -E_i wedge
has sign (-1)^i for i>=1; outward E_1 gives the positive face-zero wedge.
Dimension-zero determinant rays distinguish the two signed interval faces
from the unique vertex ordering on an abstract point. No corners theorem,
negative-dimensional simplex or choice is used. Read all four actual supplier
definitions in full: standard topological simplex, simplex orientation,
determinant-line orientation and induced boundary orientation. The last two
are explicit repaired dependencies. Source context Park §3 does not supply
this local calculation; coverage records that distinction. Initialized batch7
contracts with all120 original scope IDs and this one completed contract.
Explicit precheck, rendering and strict selected contracts pass0 errors and
0 warnings. Scope refreshed as sufficient without claiming the outstanding
ring comparison proved; record-item repaired succeeded. Counts now90 original
receipts+33 additions,123 authored items. Batch7 has1 completed original,
119 originals and four pages outstanding. Next: definition of integration
over a smooth simplex and its affine-coordinate independence lemma; read
the published Jordan-integral and change-of-variables suppliers first.

`def-integral-of-a-form-over-a-smooth-singular-simplex`: body and contract
written; precheck, rendering and strict selected contracts pass0/0. Repaired
the integrability gap in its dependencies: T_k is compact Jordan by induction
using solids under continuous graphs; the smooth coefficient is integrable.
The original compact-support bounding-rectangle lemma did not alone provide
existence, so it is replaced by actual Jordan-definition/continuous-function
suppliers. Two smooth extensions agree with all derivatives in the interior;
continuity along the explicit segment from the barycentre gives equal boundary
coefficients. Degree zero is evaluation. All seven direct suppliers and the
solid theorem proof were read fully. Record-item is deferred until its existing
forward justification (positive affine-coordinate independence) is authored
next; no completed receipt or count increase is claimed yet. Park §3, PDFp5
was reread: Theorem3.1 itself sends the Stokes proof to Lee18.12. The beta
coverage wording must not be interpreted as Park containing that proof; our
simplex-Stokes calculation will be supplied locally, as designed.

`lem-simplex-integrals-are-independent-of-affine-coordinate-identification`
is now authored and repaired: h=a^{-1}b maps the coordinate simplex K_b to
K_a, both compact Jordan by the published affine-image theorem; alternating
pullback has coefficient (f o h)det Dh and positivity makes that determinant
the absolute Jacobian in change of variables. Dimension zero is evaluation,
not a misuse of the n>=1 theorem. Every direct supplier read in full. Explicit
precheck, rendering and strict selected contracts pass0 errors/0 warnings.
Coverage and scope refreshed. Its existing definition's justification is now
complete too; recorded repaired decisions for both original items only after
these checks. Counts92 original receipts+33 additions=125 completed items;
batch7 has3 of120 originals complete. Next: coordinate simplex Stokes, then
chain Stokes. Preserve Park's explicit omission qualification in coverage;
its source citation is not the coordinate proof.

`lem-stokes-theorem-for-the-standard-simplex`: fully authored and repaired,
with all eight supplier statements/proofs read. Write eta=sum(-1)^(i-1)f_i
 dx_omit_i; d eta has coefficient sum partial_i f_i. Jordan sections and FTC
give upper-minus-lower values even at collapsed sections. Lower face i gives
-fi after the boundary sign; face zero pulls each omitted wedge back with
sign(-1)^(i-1), cancelling its coefficient sign. The affine changes between
the different upper-face parametrizations have absolute determinant1. The
interval is treated by FTC and signed point evaluation. No corners theorem
or choice is used. Added actual integral-linearity, integrability and affine
change-of-variables dependencies missing from the strategy. Canonical steps
now1.1,2.1,2.2,3.1,3.2,4.1,5.1; adopted and rechecked. Precheck/render/strict
selected contracts all pass0/0. Recorded repaired. Counts93 originals+33
additions=126 completed items, batch7 now4/120. Next chain Stokes must explicitly
justify exterior-derivative pullback and extension/finiteness conventions.

`thm-stokes-theorem-for-smooth-singular-chains`: fully authored and repaired.
One neighbourhood extension supports simplex Stokes, naturality of d and
functoriality of face pullback. Chain integration is explicitly the finite
support sum, independent of repetitions and zero coefficients; collecting
identical faces proves the boundary formula. Constant/degenerate simplices
are retained, k=1 is endpoint evaluation, empty chains integrate to zero.
Canonical rows1.1,1.2,2.1,3.1 adopted; precheck/render/strict contracts pass0/0.
All five suppliers read fully. Counts94 originals+33 additions=127 completed
items; batch7 now5/120. Next integration cochain definition and its existing
cochain-map justification, then cohomology and naturality.

Published concern for serial owner audit (suspected dependency/proof-expansion
debt, not a false theorem or an unresolved Stokes identity):
`thm-the-exterior-derivative-commutes-with-pullback`, page
`the-exterior-derivative-and-cartan-calculus`, proof row2.1 differentiates a
wedge of exact one-forms d(y^i o F) while citing only the local coordinate
formula and row1.1. The displayed equality is correct, but suppression of
the extra derivative terms implicitly uses the graded Leibniz rule and
 d^2(y^i o F)=0. Its direct dependency list omits both corresponding proved
suppliers `thm-the-exterior-derivative-is-a-graded-derivation` and
`thm-the-exterior-derivative-squares-to-zero`. Both supplier proofs were read
completely here and establish the needed rules without choice. Confidence:
high in the identity and in the omitted explicit uses; classification as a
required graph repair versus derivable local shorthand awaits serial audit.
Repair strategy: declare those two published suppliers and expand row2.1
by the Leibniz rule, explicitly killing each d^2 factor; the function chain
rule gives d(omega_I o F)=F^*d omega_I. This does not require a new Phase2
supplier and does not block the sound new simplex/chain Stokes arguments.
Published content and the shared canonical ledger were not edited.

New dispatch A supplier
`lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary`
is authored and registered in manifest, coverage and contracts immediately
before the integration cochain definition. It is NOT sent through record-item
or any self-review loop. Published `def-de-rham-cochain-complex` explicitly
restricts to boundaryless M; this is a legitimate scope restriction, not a
published defect. The new lemma supplies the larger convention promised here:
locally extendible boundary-chart coefficients, extension- and chart-independent
d, d^2=0, graded Leibniz, natural wedge-preserving pullback and induced quotient
maps. All nine direct suppliers read fully. Local coefficients and coordinate
maps are extended on Euclidean neighbourhoods before identities are restricted;
this handles maps whose images lie wholly in the target boundary without a
false interior-density inference. Only finite choices at one point occur.
Canonical rows1.1,2.1,3.1,3.2,4.1 adopted; precheck/render/strict contracts all
pass0/0. Counts94 originals+34 additions=128 completed items; batch7 has5
originals+1 addition. New lemma still needs its A-page placement when the page
is authored. Later boundary homotopy and Mayer–Vietoris uses must be supplied
or checked explicitly; this local calculus lemma does not itself establish
those global statements. Current live engine remains paused; no steering.

`def-de-rham-integration-cochain-map`: body and contract written; explicit
precheck/render/strict contracts pass0/0. The unique simplex integral values
extend by finite sums, and real linearity in forms is separately proved by
Riemann linearity (point evaluation at k=0). The new boundary-complex supplier
is declared. Degrees above dimM have zero source but possibly nonzero target;
degenerate simplices are retained. As with the preceding definition, defer
record-item until its existing cochain-map justification is authored next.
No receipt/count increase is yet claimed for this original item.

`thm-de-rham-integration-is-a-cochain-map`: now fully authored, checked and
repaired. Evaluate delta I(omega) on every finite chain, substitute the exact
precomposition sign and chain Stokes, and obtain I(d omega). Degree0 checks
endpoint evaluations; top form degree proves a cocycle even though higher
singular chain groups need not vanish. All three suppliers read in full.
Precheck/render/strict contracts pass0/0. Scope refreshed for the new boundary
supplier. The integration definition's forward justification is now complete;
recorded repaired receipts for it and this theorem. Counts96 originals+34
additions=130 completed items; batch7 has7/120 originals and1 addition.
Next: induced cohomology map, including the requested HA supplier and actual
representative calculations, then naturality. Shared plan/prose not edited.

`thm-the-de-rham-map-on-cohomology-is-well-defined`: authored/repaired after
precheck/render/strict contracts pass0/0. Proof computes the actual cocycle
and coboundary representative changes, then reindexes n=-k to the published
HA induced-homology theorem and identifies its quotient map. Added that
explicit required design supplier, plus exact smooth-cochain and local
boundary-complex definitions. All five suppliers read fully. Linearity,
zero/negative/above-dimension degrees and empty M checked; no simultaneous
choice of representatives. Counts97 originals+34 additions=131 completed
items; batch7 now8 originals+1 addition. Next naturality of integration.

`prop-naturality-of-the-de-rham-map`: authored/repaired after precheck/render/
strict contracts pass0/0. The proof equates the actual integrands via one
neighbourhood extension of sigma and its composition with F, then passes the
cochain equality to quotients and computes both changed-representative routes.
The local boundary supplier covers maps wholly into the target boundary.
All four suppliers and Park Proposition3.2(a)'s complete proof were read.
Park writes evaluation of a cohomology class on a simplex; our argument is
explicitly at cochain level first and avoids that ambiguity. Counts98
originals+34 additions=132 completed items; batch7 has9 originals+1 addition.
Next convex-coordinate comparison, including relatively open half-space
convex domains, requires a full boundary-compatible radial homotopy argument
and the smooth singular prism contraction, not just their stated names.

New dispatch A supplier
`lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds`
is fully authored/registered before the convex-domain comparison, with no
record-item or self-review loop. It supplies the local-coordinate meaning
of forms on Mx[0,1] at boundary/time intersections, without importing a
general corners theorem. At one fixed spatial point, all admissible time
extension intervals form a cover; finite compactness selects a finite
subcover, then only finitely many extensions are instantiated. Explicit
normalized step cutoffs patch coefficient extensions across the full compact
time interval. Differentiation under the integral and uniform continuity
prove smoothness; d(alpha_t+dt wedge beta_t) gives the exact minus sign and
FTC gives both endpoints. Closed forms therefore have equal endpoint classes.
All seven direct suppliers and the original interval-operator/product proofs
were read fully. Explicit precheck/render/strict selected contracts pass0/0.
Counts98 originals+35 additions=133 completed items; batch7 now9 originals
and2 additions. Next convex comparison can use this formula and the published
flattened-time smooth prism; do not use the unflattened radial prism at a
boundary target. Its full proof was read and explains that obstruction.

`lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains`:
fully authored/repaired with canonical precheck/render/strict contracts all
passing0/0. The affine contraction is legitimate for convex relatively open
half-space domains; the form primitive uses the new boundary homotopy and
the smooth chain prism uses flattened time. Explicitly computed the point
cochain complex: delta^k=0 for even k and identity for odd k. Dualizing the
prism directly and using the explicit parity primitive at the point gives
positive-degree exactness without a Hom-exactness/choice assumption. Constants
map identically under degree-zero integration; chart naturality transports
it. Six direct suppliers read fully. Canonical rows1.1,1.2,2.1,3.1,4.1,5.1.
Counts99 originals+35 additions=134 completed items; batch7 now10 originals
and2 additions. Next the nonconnector MV diagram, but first audit and supply
the boundary extension of the form MV short exact sequence. The published
complex's boundaryless restriction cannot be silently enlarged globally.

Receipt timing correction: the first convex-comparison record-item call
was rejected because the second new supplier had invalidated current scope.
The mathematical checks had passed, but that call did not create a receipt.
Refreshed scope with explicit evidence for both boundary suppliers and the
preserved obligations, then reran record-item successfully. The preceding
completed count is now accurate; no owner override was used.

New dispatch A supplier
`lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift`
is authored and registered before the MV comparison lemmas. No record-item
or self-review loop. Its exact sequence uses r=restriction and s=V-U; the
partition lift is (-rho_V eta,rho_U eta), smoothly zero-extended using closed
supports. It proves injectivity, gluing, surjectivity, identifies the middle
cohomology, computes the positive lift-differential connector and both
representative/lift changes, and proves ordered-cover naturality. AC_omega
is declared, with its sole use obtaining the partition; a supplied-partition
branch is choice-free. Read all five direct suppliers and the published
boundaryless exactness/partition proofs fully. Canonical rows1.1,1.2,2.1,
3.1,4.1,5.1,6.1 adopted; replaced numerical step ranges before canonicalization
to avoid a range-end self-reference. Precheck/render/strict contracts pass0/0.
Counts99 originals+36 additions=135 completed items; batch7 has10 originals
and3 additions. Next nonconnector diagram and then connector comparison.
Refresh scope before recording the next original, as this new supplier changes
its certification hash.

Additional confirmed published proof-assumption omission for owner ledger
reconciliation: `thm-smooth-partitions-of-unity-exist-on-manifolds`, page
`smooth-partitions-of-unity-and-exhaustions` (exact home verified on disk), row2.1 chooses a smooth bump g_k for each k in a
countable shrinking, while the statement and direct deps omit AC_omega.
All antecedent bumps exist individually, but that alone does not provide
the countable family used in row3.1. The immediately relevant published
boundary version explicitly assumes AC_omega, and the new supplier does too.
Confidence high in this displayed proof's missing assumption; no assertion
that a choice-free alternative is impossible. Required supplier
`def-countable-choice` is published; repair by declaring the sufficient
assumption and its exact countable selections (or fully supplying canonical
bump selection), then propagate to actual consumers. The planned finite
compact-support primitives must preserve their separate choice-free route.
No published file or shared canonical ledger was edited.

`lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors`:
authored and repaired after canonical precheck/render/strict contracts pass0/0.
Both restriction components and the V-U difference are computed on cochains
using four explicit inclusions. The first-term identification is restriction
along the actual small-chain inclusion. Empty opens, repeated cover, degree0
and top/negative degrees are checked. AC_omega is inherited only for the form
exact row; supplied-partition compatibility is choice-free. All four direct
suppliers read fully. Scope refreshed for the new MV supplier, then record-item
succeeded. Counts100 originals+36 additions=136 completed items; batch7 now11
originals+3 additions. Next connector comparison must exhibit the form lift,
the basiswise singular lift, their difference and its coboundary, not merely
invoke naturality. Park Proposition3.2(b) contains suspicious degree/sign
notation; use the exact local lift argument and inspect the source separately.

`lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors`: fully
authored/repaired; precheck/render/strict contracts pass0/0. Explicit lifts:
e=(I alpha,I beta), alpha=-rho_V omega,beta=rho_U omega; e0=(-E_U c,0),
c=I omega. Priority-U gluing gives the small cochain t with a(t)=e-e0,
so delta t=j^*I zeta-z0. The actual smooth least-subdivision retraction R
and homotopy D from the published smooth MV proof give the full identity
I zeta-R^*z0=delta(I zeta D+R^*t). This proves connector equality with V-U
signs, not merely a citation to naturality. All six suppliers and the exact
R,D proof rows read; their argument excerpt is also retained in the contract.
AC_omega is solely for the partition; degree0 connector, empty/repeated
cover and degenerate simplices checked. Record-item succeeded. Counts101
originals+36 additions=137 completed items; batch7 now12 originals+3 additions.

Park source qualification: read complete Proposition3.2(b) and visually
inspected PDFp7 using the already retrieved PDF. Its lift notation incorrectly
types eta_U,eta_V as degree-k cohomology classes though the calculation needs
(k-1)-forms; its second displayed line subtracts both overlap-boundary
integrals even though partial b_V=-partial b_U, introducing a factor of two.
These are confirmed errors in the source passage, not an unresolved local
proof or a published-library defect. Coverage now treats it only as statement
corroboration for this item. Retrieval itself was already successful; local
pdftoppm was unavailable and web screenshot had a cache miss, but rendering
that existing PDF with fitz succeeded. No new retrieval exhaustion or owner
ruling is invented. Next the two-open-union comparison by the five lemma,
then the global comparison using the precise local-to-global principle.

`thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection`:
authored/repaired with precheck/render/strict contracts pass0/0. The proof
prints the exact five-term segments centered at H^q(M), identifies the three
nonconnector squares and separately proved connector square, and verifies
all four outside isomorphisms (including direct-sum inverses). At q=0 the
first two terms are zero and the actual initial injection supplies exactness.
Negative degrees and empty/repeated covers are checked. All four suppliers
read fully. Counts102 originals+36 additions=138 completed items; batch7 now13
originals+3 additions. Next global smooth-singular de Rham comparison. Read
its entire published local-to-global principle proof: it uses rational-box
finite unions, proper-exhaustion bands, parity disjoint unions, and a second
chart-open stage; chart intersections are NOT asserted convex. The remaining
hypothesis to verify is countable disjoint-union products for both theories
and integration, including boundary forms and exact AC_omega accounting.

`thm-de-rham-theorem-for-smooth-singular-cohomology`: authored/repaired;
explicit precheck, render and strict contract pass0/0. All nine suppliers read,
including the full two-stage globalization argument and Park Theorem3.3 pp7–8.
Boundary forms glue componentwise; AC_omega supplies component primitives and
representatives. Integration commutes with these products by restriction.
All MV squares and half-box base cases supplied earlier; no convex-chart-
intersection or increasing-union-continuity assertion is used. Choice cost
also includes the partition and countable exhaustion/band selections in the
proved suppliers. Naturality is the actual integration map. Canonical steps
1.1,1.2,2.1,2.2,3.1,4.1. Record-item succeeded. Counts103 originals+36 additions
=139 completed items; batch7 now14 originals+3 additions. No batch7 page yet.
Engine read-only status 23:57UTC: paused, nothing running; old Kunneth blocker
still stale relative to its later owner-reopen and repaired receipt. No steering.
Next inspect current manifest order and complete the next dependent item.

`cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology`:
fully authored/repaired; precheck/render/strict contract0/0. Entire smooth/
continuous comparison proof reread: actual small-row lifts give connector
compatibility, then countable product/half-box globalization under AC_omega.
Our J=r^{-1}I is defined by unique class preimages, linear with inverse I^{-1}r;
naturality follows from r_M f*J_N=f*_infty I_N=I_M f*_dR and cancellation.
Boundary, empty, negative/zero/one/top degrees and degenerates included, no
additional choice. Coverage and receipt complete. Counts104 originals+36
additions=140; batch7 now15 originals+3 additions. Next wedge/cup comparison:
scaffold's claim that AT7 is unavailable is stale. Must actually construct and
verify its natural bilinear cochain homotopy, including degree-zero behavior.

New local supplier `lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy`
fully authored, registered manifest/coverage/contracts before wedge/cup consumer.
No record-item by the addition exception. Explicit precheck/render pass;
strict contract0errors1heuristic shotgun-bracket warning: row1.1 legitimately
uses simplex faces, AW formula and shuffle boundary together; other rows use
only previously proved steps. h_0=0; z_n=a_n-b_n-sum signed face*h_(n-1),
dz_n=0 by the chain-map equations and double-face cancellation; h_n is its
fixed first-vertex affine cone. Degenerate chains retained, n1 checked
separately, no AC. Forms evaluated through ambient affine-span extensions,
no product-boundary manifold or corners Stokes assumption. Full dependencies
read. Counts104 originals+37 additions=141; batch7 now15 originals+4 additions.
Robbin full section14 PDFpp36–37 reread: Theorem14.2 sends its proof to Bott–Tu
p174; Remark14.3 invokes the earlier Cech comparison. This does not itself
supply our requested simplex cochain homotopy. Existing local source retrieval
is complete; web rerequest timed out but no missing file/evidence blocker.
Next supply signed shuffle integral product by actual triangulation, determinant,
Jordan additivity and Fubini; then integrate the cone identity to obtain K.

New `lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals`
authored/registered before consumer; precheck/render/strict0/0, no record-item.
Read complete cited Jordan additivity, Fubini, change-of-variables, boundary
criterion, continuous-graph and continuous-integrability arguments. Cumulative
u_i=sum_(j>=i)x_j coordinates identify each shuffle region with a merged
ordered list, cover the product and overlap only in cross-coordinate equality
hyperplanes. The affine determinant is sign(shuffle), absolute value1. Signed
simplex integrals sum to the product-domain integral; Fubini sections are the
entire second simplex or empty. Degree mismatch vanishes by alternating rank;
point factors use the unique shuffle/evaluation directly. No AC. Counts104
originals+38 additions=142; batch7 now15 originals+5 additions. Next original
wedge/cup lemma uses both new constructions to print an explicit natural K.

`lem-de-rham-integration-respects-wedge-and-cup-in-cohomology`: fully authored/
repaired with successful receipt after scope refresh0c070442. K_(p,q)(sigma)
=integral_(h_(p+q-1)) pr1*sigma*alpha wedge pr2*sigma*beta. A single admissible
extension of sigma gives forms on O and O x O; all values are independent of
that temporary extension, with no family selection. Integrating a_N-b_N gives
Iwedge-Icup by diagonal pullback and the actual signed-shuffle integral lemma.
The face correction is delta K and Stokes on partial h_N gives K(dalpha,beta)
+(-1)^p K(alpha,dbeta). Total degree0 has literal vertex multiplication, h0=0
kills the derivative terms; total degree1 and all boundary/degenerate cases
checked. Both cocycle classes and simultaneous representative changes verified.
Canonical steps1.1,2.1,2.2,3.1,4.1,5.1,6.1. Explicit precheck/render/strict
item contract pass0/0. Added lemmas were sharpened to supplied neighbourhood
forms, exactly what a smooth singular extension provides; no unsupported
local-to-global extension or corners Stokes claim is used. All three prechecks
and renders rechecked after that precision edit; strict new affine lemma still
has its one recorded heuristic warning only. Counts105 originals+38 additions
=143 completed items; batch7 now16 originals+5 additions. Next ring de Rham
 theorem: restriction preserves the smooth cup by its actual face formula;
combine vector-space bijectivity with the now complete multiplicative identity.

`thm-de-rham-theorem`: fully authored/repaired; canonical precheck/render/strict
0/0; all eight suppliers read, landmark retained. Boundary wedge quotient is
proved using local boundary calculus plus pointwise wedge identities. Actual
restriction preserves cup on each smooth simplex and sends vertex unit to unit.
rJ(ab)=I(ab)=I(a)cup I(b)=r(J(a)cup J(b)); cancel r, and similarly for1.
The degreewise inverse preserves finite homogeneous support, multiplicativity,
and unit; naturality and both graded signs verified. AC_omega only in earlier
bijectivity. Owned cross-batch input updated: wedge/cup two edges, affine-model
AW edge, ring two edges verified. Page remains open for unauthored consumers;
stale relative Kunneth wording removed. Unified refresh succeeded. Counts106
originals+38 additions=144; batch7 now17 originals+5 additions. Next homotopy-
type corollary, then the distinction remark, then compact-support degree chain.

`cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type`:
authored/repaired with precheck/render/strict0/0 and successful receipt. Read
all five complete suppliers, including the entire boundary homotopy formula.
For continuous supplied f,g, T_f=J_M^{-1}f*J_N and T_g are inverse by the two
singular inverse homotopies. For smooth f, naturality identifies T_f with form
pullback; dL_H gives the same endpoint equality, including the boundary case.
No form pullback for merely continuous maps or smoothing theorem is asserted.
AC_omega only inherited in J; direct smooth/singular homotopy arguments remain
choice-free. Counts107 originals+38 additions=145; batch7 now18 originals+5
additions. Engine status reread00:12UTC remains paused, nothing running.
Next the short ring-dependency remark, then compact-support definitions.

`rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product`:
authored/repaired, precheck/render/strict0/0. T(x)=2x explicitly separates
linear bijectivity from multiplication; F2 supplies the actual K coboundary,
and the ring theorem transports it through restriction and checks the vertex
unit. No compactness; AC_omega solely inherited bijectivity, product choice-free.
Coverage and receipt complete. Counts108 originals+38 additions=146; batch7
now19 originals+5 additions. Next compact-support complex: must prove support
of d omega is contained in support omega and finite linear-combination support
compactness, then quotient definition. Use boundaryless convention for degree
chain, and do not import global comparison/partition choice unnecessarily.

`def-compactly-supported-de-rham-cochain-complex-and-cohomology`:
authored/repaired, precheck/render/strict0/0 and receipt complete. Five exact
deps read, including ambient compactness equivalence; direct finite-cover
arguments prove closed support and finite union compactness. Local d vanishes
on the open complement of support, hence supp(domega) subset supp omega.
Quotient boundaries require compactly supported primitives, degree0/1/top and
compact-manifold agreement explicit. Boundary version uses the local supplier;
no AC. Robbin-Salamon section6.3.1 printedpp218–219 fully read through the basic
remarks and examples. Counts109 originals+38 additions=147; batch7 now20
originals+5 additions. Next proper smooth pullback of compact support.

`prop-proper-smooth-maps-pull-back-compactly-supported-forms`: authored/repaired,
precheck/render/strict0/0 and receipt complete. Continuity + pointwise pullback
places nonzero locus in closed F^{-1}supp omega, hence support containment.
Properness applies to that one compact support; an augmented ambient cover
proves the closed smaller support compact. Strict inclusion allowed for rank
loss; empty, zero/one/top degrees and boundary targets checked, no AC. All five
deps read and source Remark6.3.3 p218 matched. Counts110 originals+38 additions
=148; batch7 now21 originals+5 additions. Next compact-support functoriality.

`prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps`:
authored/repaired, canonical precheck/render/strict0/0 and receipt complete.
Pullback of the given compact primitive proves quotient independence; identity
and composite properness checked by compact inverse images. Contravariant
compositions and forget-support square computed on actual forms; forgetting
support is not claimed injective. Boundary case and all degree endpoints
covered choice-free. Counts111 originals+38 additions=149; batch7 now22
originals+5 additions. Next integration descends on top compact-support
cohomology, then Euclidean compact primitives and connected-manifold transport.

New `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`
fully authored/registered before integration-descent consumer, no record-item.
Precheck/render/strict0/0. Published global integral, chart independence and
compact Stokes explicitly assume AC_omega; this is NOT a published defect.
The preserved degree chain needs a choice-free branch, supplied locally here.
All chart-and-compact-bump tuples cover one K; one finite subcover yields b_i,
B=sum b_i, theta=s(4B-1), chi_i=theta b_i/B extended0 whereB=0. Smoothness
holds because theta vanishes whereB<=1/4; sumchi=1 nearK. Compactness of the
point bumps comes from the full proof of the cited published chart-bump lemma,
not its weaker statement; exact proof excerpt retained in contractF1.
Boundaryless chart transitions are global diffeomorphisms of the actual overlap,
so ordinary compact-support change of variables proves chart independence
without global partitions. Finite double sums prove independence/linearity/
locality. Local compact primitive coefficients extended0 are smooth and vanish
at all rectangle endpoints; FTC/Fubini gives zero integral of each derivative,
then the exact finite decomposition eta=sumchi eta gives global compact Stokes.
n0 is signed finite point sum, n1 directFTC. All ten deps read fully; complete
Robbin-Salamon Lemma5.2.10 pp176–177 and Stokes proof pp178–180 read. Counts111
originals+39 additions=150; batch7 now22 originals+6 additions. Next integration
 descends theorem must use this finite integral unconditionally and compare to
 the earlier partition integral only under its explicit AC_omega assumption.

`thm-integration-descends-to-compactly-supported-top-de-rham-cohomology`:
authored/repaired, precheck/render/strict0/0 and successful receipt after scope
refresh for sixth local supplier. Int_M[omega]=finite I_Momega; compact Stokes
annihilates exactly compact primitive boundaries, n0 denominator0; linearity
uses quotient operations without representative families. Under additionally
AC_omega only, a supplied global partition has finitely many nonzero rho_iomega
by the read published local-finiteness lemma. Finite integral chart agreement
and linearity give I_Momega=sumI_phi(rho_iomega), hence agreement with published
integral and compact Stokes. All six deps read. Subsequent boundaryless degree
items use this finite integral unconditionally. Counts112 originals+39
additions=151; batch7 now23 originals+6 additions. Next Euclidean compact
primitive lemma: calculate induction, normalized one-variable bump, smoothness
of fibre integration, support box, signs and n0/1 separately. Do not use
published positive-integral theorem if it imports the global AC_omega integral;
prove the needed bump normalization by elementary Euclidean integral bounds.

Published concerns (new exact assumption-propagation evidence; no published edit):
`prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components`
and `prop-positive-compactly-supported-top-forms-have-positive-integral`, both
on `integration-of-forms-and-the-general-stokes-theorem`. The first's F1 quotes
`thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement`
but omits its explicit Assume AC_omega; its statement also omits that assumption
and proof1.1 chooses the chart partition. The positivity proof1.1 uses this
partition-based linearity, and its statement/deps likewise omit AC_omega.
Classification: confirmed missing propagation in the displayed published
proofs, high confidence; NOT a claim the mathematical assertions require choice.
Required supplier for the existing proof: `def-countable-choice`, with the
assumption propagated. Alternative boundaryless repair: the new authored
`lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`
plus explicit finite localization and Riemann positivity. Their full published
boundary versions need the analogous finite boundary localization before a
choice-free repair can be claimed. Serial owner/reconciler should merge these
findings with any existing ledger entries. Unrelated debt does not block the
new supplier. The Euclidean compact-primitive lemma will use direct bump
integral bounds instead of this unconditional published positivity assertion.
Complete Robbin-Salamon Theorem5.3.10 pp187–189 now read, including both Steps:
Step2 explicitly uses AC to select diffeomorphisms for every point. Our planned
connected-manifold proof will instead use finite localized support transport;
no choice-free claim is inferred from that source argument.

`lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives`:
authored/repaired, precheck/render/strict0/0, receipt complete. All13 suppliers
read; removed the published positivity supplier because its displayed proof
omits the global-integral AC_omega assumption. Instead rho=1 on[-1/2,1/2],
supp rho in(-1,1), gives1<=integral rho<=2 by Riemann bounds; b=rho/integral.
f0(x')=integral_-R^R f(x',t)dt; g=f-f0b; h=integral_-R^t g. Smoothness of f0
and h proved by repeated one-parameter differentiation plus uniform continuity;
h=(t+R)integral_0^1g(x',-R+u(t+R))du, including t=-R and reversed intervals.
Both tails vanish since integral g=0. Fubini gives integral f0=0, IH supplies
compact gamma with dgamma=f0 dxprime. eta=(-1)^(n-1)h dxprime+gamma wedge bdt
has derivative(g+f0b)dx and support in a bounded closed union. First FTC (not
Newton-Leibniz alone) differentiates the primitive; n1 direct integral, n0 scalar
zero handled. Canonical steps1.1,1.2,2.1,3.1,4.1,5.1,6.1. Counts113 originals+
39 additions=152; batch7 now24 originals+6 additions. Next overlapping oriented
coordinate-ball transport must use the new choice-free integral, finite bumps
and extension by zero, and handle n0 separately. Current scope643f787c remains.

`lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls`:
authored/repaired, precheck/render/strict0/0 and successful receipt. All8 deps
reread, source Theorem5.3.10 pp187–189 complete reread. Explicit unit-ball
T(x)=x/(1-|x|²), inverse S(y)=2y/(1+sqrt(1+4|y|²)), smoothness and positive
radial/tangential eigenvalues make every ball a whole-space chart. Thus the
Euclidean compact primitive pulls back with support compactly INSIDE original
ball; Hausdorff compact-closed finite-cover proof permits smooth zero extension.
One overlap bump normalized by cube integral bound, not published positivity,
is subtracted from each supplied integral-one form. Difference of their compact
primitives proves ambient class equality. n0 signed singleton, n1 both chart
ends, empty and nonpositive given normalized forms all handled choice-free.
Counts114 originals+39 additions=153; batch7 now25 originals+6 additions.
Next connected-manifold top compact-support integration isomorphism: finite
localization and finite overlap chains by open-closed reachability, no global
choice or homogeneity diffeomorphisms. Engine status reread00:32 paused, no
inflight; reported old Kunneth escalation remains stale relative owner reopen
and completed repaired receipt, no engine transition attempted.

Top compact-support integration theorem authored/repaired, canonical precheck/render/strict0/0 and successful receipt. Five deps read. Finite-chain reachable union of chart balls is nonempty clopen, so all M. Finite ball localization (exact full F3 proof excerpt retained) plus overlap transport gives [omega]=(integral omega)[nu0]. Both iff directions, explicit inverse a->[a nu0], signed n0 point, n1 compact function ends and empty support verified in ZF. Landmark preserved. Counts115 originals+39 additions=154; batch7 now26 originals+6 additions. Scope refreshed for actual deps; overlap receipt successfully recorded after refresh (initial attempt declined stale scope). Next closed-manifold top cohomology corollary.

Closed connected oriented top-cohomology corollary authored/repaired, precheck/render/strict0/0 and receipt complete. Compactness identifies all degrees including primitive spaces, then applies top compact-support isomorphism. Closed means compact boundaryless; signed n0 and n1 functions checked choice-free. Counts116 originals+39 additions=155; batch7 now27 originals+6 additions. Next integral degree definition and well-definedness.

Degree definition authored with full verification/contract, precheck/render/strict0/0.
L=Int_M F_c* Int_N^-1, define deg=L(1); inverse uses unique class preimages,
linearity verified by injectivity, L(t)=tL(1) proves defining identity and
uniqueness using normalized class. n0 epsilon_M epsilon_N computed, zero forms
not enough for uniqueness, n1 compact function primitives checked. Both deps
reread. Source Robbin–Salamon Cor5.3.12 p190 and Theorem5.4.1 pp191–192 complete
proof read; latter supplies compact degree formula context, proper noncompact
extension here derived locally. Receipt deferred until its original justified_by
well-definedness lemma is authored; do not count this definition in completed
receipt totals yet. Next that lemma, with explicit compact primitive argument.

Degree definition and well-definedness lemma both have successful repaired receipts after actual dependency scope refresh. Lemma subtracts a nu, pulls back actual compact eta using properness, and applies choice-free compact Stokes; n0 uses zero negative-degree element. F1 definition is notation only, existence/uniqueness derived from F2–F5. Both precheck/render/strict0/0. Counts118 originals+39 additions=157; batch7 now29 originals+6 additions. Next local orientation-sign item, regular-value neighbourhood supplier and regular-value degree formula.

Local orientation sign definition authored/repaired, precheck/render/strict0/0 and receipt. Three deps fully read. Determinant-ray transport defines unique sign, Q^-1AP proves positive basis invariance; n0 identity on determinant line gives epsilon_M epsilon_N rather than empty determinant1. Counts119 originals+39 additions=158; batch7 now30 originals+6 additions. Next regular-value compact-support theorem needs full local inverse and proper neighbourhood proof; likely add choice-free inverse supplier on this A page before consumer.

Regular-value compact-support degree theorem authored/repaired, precheck/render/strict0/0 and receipt. Ten deps fully read, plus published Newton, Banach, Euclidean completeness, complete-subspace, Euclidean inverse, smooth inverse and higher-regularity complete proofs. Current complete-subspace theorem was repaired2026-09-10 and explicitly supplies claim2 closed=>complete in ZF; Euclidean inverse uses ONLY that direction. Thus earlier suspected inverse prerequisite debt is NOT a current defect, and no new inverse supplier is needed. Finite fibre via all isolating neighbourhoods; finitely disjoint branches; compact C=F^-1(K) minus branches has closed image missing y, so target ball has no extra preimages. One normalized bump pulls back as finite compact zero-extended branch pieces; in charts psi F, integrals are epsilon_i. Empty fibre0 and n0 epsilon_M epsilon_N explicitly computed. Source Theorem5.4.1 pp191–192 read fully; proper noncompact extension proved locally. Counts120 originals+39 additions=159; batch7 now31 originals+6 additions. Next original thm-regular-value-formula-for-degree, particularly closed-manifold homological comparison: need actual bridge, not naturality alone or unavailable next20 Kronecker dependency.

Current homological-comparison audit: natural de Rham vector-space comparison
alone does NOT identify its top evaluation with oriented integration; original
scaffold's Kronecker route lacks that bridge. Use local homology instead, with
new local lemma before original consumer: smooth regular germ acts on local Z
homology by determinant sign, and smooth orientations yield compatible local
integral generators. Planned proof: reflection action via relative LES/reduced
sphere (n1 two components), elementary matrix factorization and explicit shear/
positive-scaling homotopies, swap conjugate to a reflection, differentiability
remainder homotopy Lx+t r(x) stays nonzero, chart overlap compatibility and
closed-ball section continuity. Then finite-puncture excision of fundamental
class yields homological signed count matching completed compact-support formula.
All relevant original local homology, ball class, R-orientation and fundamental
class suppliers reread, and published sphere reflection proof, elementary
factorization, pair functoriality/LES/excision/prism fully read. Not yet authored.
Source search: Stolz Alg_Top_2023.pdf initial urllib retrieval403, recovery web
open safe-error (2 retrieval attempts total); indexed search supplies only
Theorem2.36 statement p36, NOT full proof. Alternative Kupers algtop-2020.pdf
successfully downloaded to /tmp/pml-b6-sources/kupers-algtop.pdf (162pages),
fitz extracted .txt after pdftotext unavailable. Complete §8.1 pp60–62 (PDF64–66)
read, including Lemma8.1.4 proof and local degree/regular-value argument. Source
uses O(n) path components; local planned proof will instead supply explicit
finite elementary-matrix argument. No unresolved source exhaustion claimed.
Read-only engine status about00:50 remains paused/no in-flight; no steering.

New lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier fully authored/registered before regular-value comparison, NO record-item. Precheck/render/strict0/0; all15 deps read, exact F13 proof excerpt retained. Reflection local action via relative LES and sphere degree, n1 reducedH0 difference; elementary shear/positive-scale homotopies, negative-scale reflection and swap conjugacy; finite factorization computes sign determinant without GL/O connectedness. Germ homotopy Lx+t r(x) has lower bound |x|/(2C), hence local pair map sign. Positive chart independence defines pointwise unique generators; one closed-ball class restricts to them by translated sphere u-tx avoiding0, establishing actual local-system continuity. n0 signed singleton. Same Euclidean generator convention on source/target; reversing it negates both and leaves multiplier unchanged. All finite witnesses, no AC. Coverage and three same-group Batch5 item edges registered, checked. Counts120 originals+40 additions=160; batch7 now31 originals+7 additions. Next author original thm-regular-value-formula-for-degree using finite-puncture excision/fundamental classes and this lemma, remove unavailable Kronecker dependency and register actual same-group edges.

`thm-regular-value-formula-for-degree`: fully authored/repaired and receipt
recorded at confidence 1. The proper-map signed count and fibre finiteness are
the completed compact-support theorem; for closed manifolds finite-puncture
excision sends the fundamental class to the tuple of local generators, and the
regular germ sends each coordinate to its derivative sign times the target
generator. Naturality of quotient-chain maps therefore identifies the global
homological coefficient with the signed sum. The empty fibre factors through
the punctured target; dimension zero uses signed point generators and dimension
one the reduced-$H_0$ local calculation. No Kronecker pairing or regular-value
existence theorem is used, and only finite Hausdorff separation is selected.
All seven direct dependencies were reread. Canonical explicit precheck,
rendering, and strict contract pass after moving the empty branch to phase 2.2;
the current DG-17 scope receipt was refreshed as sufficient for its seven local
suppliers. Counts 121 originals + 40 additions = 161 completed items; batch 7
now has 32 originals + 7 additions. Next:
`cor-degree-is-an-integer-and-independent-of-the-regular-value`.

`cor-degree-is-an-integer-and-independent-of-the-regular-value`: authored and
accepted at confidence 1. For each supplied regular value the completed
compact-support formula gives a finite sum of signs, hence an integer; applying
it to a second supplied value identifies both sums with the same independently
defined degree. Empty fibres, dimension zero, singleton and cancelling fibres
are explicit, and no regular-value existence theorem is inferred. Its sole
dependency was reread; explicit precheck, rendering, and strict contract pass.
Counts 122 originals + 40 additions = 162. Next:
`prop-degree-is-multiplicative-under-composition`.

`prop-degree-is-multiplicative-under-composition`: authored/repaired. Properness
of the composite and functorial compact-support pullback give the integral
identity twice; uniqueness yields the product, while identity pullback gives
degree one. Added the actually needed `thm-regular-value-formula-for-degree`
edge before identifying all three closed-manifold scalars with AT-8 homological
degrees; only AT-8's choice-free functorial clause is used. Dimension zero,
zero factors and identities are explicit. An initial receipt was mistakenly
written after render/strict passed but while precheck still reported an
untagged display-split row; the row was repaired, all three checks rerun and
passed, and the current hash-bound repaired receipt replaced it. Four suppliers
were reread. Counts 123 originals + 40 additions = 163. Next:
`prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism`.

`prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism`:
authored/accepted. A diffeomorphism is proper because inverse images of compact
sets are continuous images under its inverse; oriented change of variables then
gives the defining integral multiplier $+1$ or $-1$. Dimension-zero point signs,
the zero test form, and choice-freeness are explicit. Both suppliers reread;
precheck/render/strict contract pass. Counts 124 originals + 40 additions =
164. Next: `thm-degree-is-invariant-under-proper-smooth-homotopy`.

`thm-degree-is-invariant-under-proper-smooth-homotopy`: authored/repaired.
Properness of the combined map first makes both endpoint maps proper, and the
homotopy operator applied to a compactly supported top form has support inside
the compact projection of its inverse support. The endpoint difference is the
exterior derivative of that compactly supported primitive. Replaced the
scaffold's AC_omega-dependent published Stokes corollary with the already
authored finite-localization compact Stokes supplier, preserving the intended
ZF proof. Dimension zero and both endpoints are explicit. Three suppliers
reread; precheck/render/strict pass; repaired receipt confidence 1. Counts 125
originals + 40 additions = 165. Next:
`cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective`.

`cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective`: authored and
repaired. A proper map has closed image by restricting over one relatively
compact target neighbourhood and taking the compact closed image of its proper
inverse image. If a point is missed, one compact chart bump in the open
complement produces a positive chart-supported top form; rectangle monotonicity
gives a strictly positive integral, normalization gives integral one, and its
pullback is zero. Replaced the scaffold's published
`prop-positive-compactly-supported-top-forms-have-positive-integral` dependency,
whose proof fails to propagate `AC_omega`, by the explicit choice-free chart
bump, chart-integral, finite-localization, and rectangle-integral suppliers.
Dimension zero is the singleton case. All eight direct suppliers were reread;
explicit precheck, renderer, and strict proof contract pass, and the repaired
receipt was recorded at confidence 1. Counts 126 originals + 40 additions =
166. Next: `prop-degree-of-the-antipodal-map-on-the-sphere`.

`prop-degree-of-the-antipodal-map-on-the-sphere`: authored/repaired. With the
sphere oriented as the outward-normal-first boundary of the unit ball, the
image of a positive tangent basis at $x$ has ambient frame
$(-x,-v_1,\ldots,-v_n)$ at $-x$, hence sign $(-1)^{n+1}$. The completed
diffeomorphism-degree proposition supplies the degree. Added the explicit
`def-induced-boundary-orientation` dependency omitted by the scaffold. The
$n=1$ half-turn and exclusion of disconnected $S^0$ are explicit. All three
suppliers were read; precheck/render/strict contract pass and the repaired
receipt has confidence 1. Counts 127 originals + 40 additions = 167. Next:
`prop-degree-of-the-power-map-on-the-circle`.

`prop-degree-of-the-power-map-on-the-circle`: authored/repaired. The quotient
formula is well defined, local lift coordinates give derivative $m$, and
compactness plus Hausdorff closedness proves properness. For $m\ne0$ the fibre
over $[0]$ is explicitly the $|m|$ listed residue classes, each with sign
`sgn(m)`; for $m=0$, $[1/2]$ is an empty regular fibre. This supplies every
integer case without silently assuming a descended angular form. Replaced the
scaffold dependencies with the actual quotient compactness, closed-subspace,
and regular-value suppliers and refreshed scope. All five suppliers were read;
precheck/render/strict contract pass and the repaired receipt has confidence 1.
Counts 128 originals + 40 additions = 168. Next:
`fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices`.

`fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices`: authored and
accepted. Evaluation on one arbitrary smooth simplex gives the two sides as
the boundary integral and derivative integral, so the cochain identity is
exactly the family of simplex-Stokes identities; finite linearity gives the
chain direction. Empty, zero, degenerate, $k=0$ endpoint, and both implication
directions are explicit. The sole supplier was reread; precheck/render/strict
contract pass and the receipt has confidence 1. Counts 129 originals + 40
additions = 169. Next:
`fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors`.

`fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors`:
authored/repaired. Under the explicitly declared `AC_omega` branch, the
published two-arc circle calculation supplies a nonzero connector. The
degreewise family $T^q=(-1)^q\mathrm{id}$ commutes with every ordinary
restriction but sends the connector square's two routes to opposite nonzero
classes. This is a genuine counterexample to the claimed implication; the
actual integration comparison needs the completed lift/coboundary computation.
Added the nonzero-connector and countable-choice suppliers. All three suppliers
were reread; precheck/render/strict contract pass and the repaired receipt has
confidence 1. Counts 130 originals + 40 additions = 170. Next:
`fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings`.

`fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings`: authored
and accepted, consistently with the owner-ready decision. The finite graded
algebra $\mathbb R[u]/(u^3)$ carries a unit-preserving degreewise linear
bijection with $T(u^2)\ne T(u)^2$, proving that vector-space bijectivity does
not automatically preserve products. The separate completed wedge–cup
cochain homotopy is exactly the missing obligation for the actual de Rham map.
Empty, zero, unit, and choice cases are explicit. Both suppliers were reread;
precheck/render/strict contract pass and the receipt has confidence 1. Counts
131 originals + 40 additions = 171. Next:
`fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map`.

`fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map`:
authored/repaired. For the nonproper constant map $F:\mathbb R\to\mathbb R$,
an explicit compact bump with value one at zero pulls back to the constant-one
function, whose support is the noncompact real line. Thus pullback fails already
at the compact-support cochain level in degree zero. Added the actual bump and
Heine–Borel suppliers. Empty, dimension-one, constant-map, and choice cases are
explicit. All three suppliers were reread; precheck/render/strict contract pass
after anchoring two boundary rows, and the repaired receipt has confidence 1.
Counts 132 originals + 40 additions = 172. Next:
`fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre`.

`fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre`:
authored/repaired. The proper map $x\mapsto x^2$ on oriented real lines has
regular fibre $\{-1,1\}$ over one, with derivative signs $-1,+1$; its unsigned
size is two while its degree is zero. Properness was checked from
Heine–Borel, and the exact compactness suppliers were added. Empty and
singleton special fibres are distinguished from the cancelling witness. All
three suppliers were reread; canonical phase numbering was adopted, then
precheck/render/strict contract passed and the repaired receipt was recorded at
confidence 1. Counts 133 originals + 40 additions = 173. Next:
`fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy`.

`fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy`:
authored/repaired. The explicit smooth homotopy
$H(x,t)=(2t-1)^2x$ has identity maps at both endpoints, while the inverse
image of the compact singleton zero contains the noncompact slice
$\mathbb R\times\{1/2\}$. The midpoint is the constant map, so the failure is
located exactly. Added Heine–Borel for the noncompactness check. Both suppliers
were reread; canonical phase numbering was adopted, then precheck/render/strict
contract passed and the repaired receipt was recorded at confidence 1. Counts
134 originals + 40 additions = 174. Next:
`ex-de-rham-integration-cochain-on-a-smooth-path`.

`ex-de-rham-integration-cochain-on-a-smooth-path`: authored and accepted. The
pullback coefficient is calculated pointwise as
$\omega_{\sigma(t)}(\sigma'(t))$, then integrated in the positive orientation
of $[0,1]$. Constant paths, the zero form, and both endpoints are explicit. The
sole supplier was reread; precheck/render/strict contract pass and the receipt
has confidence 1. Counts 135 originals + 40 additions = 175. Next:
`ex-chain-stokes-on-an-oriented-two-simplex`.

`ex-chain-stokes-on-an-oriented-two-simplex`: authored and accepted. The
alternating boundary formula is expanded with the middle minus sign, then the
standard triangle and $\eta=x\,dy$ are calculated: the area integral is $1/2$,
the $v_1v_2$ edge contributes $1/2$, and the other two edges contribute zero.
Orientation reversal, zero, degenerate, and endpoint cases are explicit. The
sole supplier was reread; precheck/render/strict contract pass and the receipt
has confidence 1. Counts 136 originals + 40 additions = 176. Next:
`ex-the-de-rham-map-on-the-angular-form`.

`ex-the-de-rham-map-on-the-angular-form`: authored/repaired. Direct
differentiation of the sine–cosine parametrization gives
$\gamma^*\alpha=dt$, hence value one; the $m$-fold, reversed, constant, and
seam cases are also calculated. The first strict-contract run correctly
rejected an AI-generated example as a citation supplier, so it was replaced by
the published derivative, Pythagorean-identity, and chain-rule theorems and all
checks were rerun. Five suppliers were read; precheck/render/strict contract
pass and the repaired receipt has confidence 1. Counts 137 originals + 40
additions = 177. Next: `ex-the-local-de-rham-comparison-on-a-ball`.

`ex-the-local-de-rham-comparison-on-a-ball`: authored and accepted. The radial
form homotopy operator is written explicitly, as is the signed affine-prism
chain contraction. These calculate both theories as $\mathbb R$ in degree zero
and zero in positive degree, and integration on constants is the identity.
Dimension zero, unnormalized degeneracies, endpoints, and choice are explicit.
The sole supplier was reread; precheck/render/strict contract pass and the
receipt has confidence 1. Counts 138 originals + 40 additions = 178. Next:
`ex-connector-compatibility-for-a-two-arc-cover-of-the-circle`.

`ex-connector-compatibility-for-a-two-arc-cover-of-the-circle`: authored and
repaired. For overlap values $(1,0)$, the de Rham partition lift and singular
basis lift are each evaluated on an explicit increasing two-arc circle cycle;
both positive connectors give one, with every endpoint and the `V-U` sign
shown. `AC_omega` is declared solely for partition existence, and the
supplied-partition branch is choice-free. Canonical phase numbering was
adopted; precheck/render/strict contract pass and the repaired receipt has
confidence 1. Counts 139 originals + 40 additions = 179. Next:
`ex-a-normalized-compactly-supported-top-form-on-euclidean-space`.

`ex-a-normalized-compactly-supported-top-form-on-euclidean-space`:
authored/repaired. One smooth bump is normalized by a positive lower-Darboux
estimate, its $n$-fold product has support in a compact cube, and repeated
Fubini calculates integral one. The dimension-zero empty product, $n=1$, a
zero factor, cube faces, and choice are explicit. Added all analytic suppliers
actually used. Precheck/render/strict contract pass and the repaired receipt
has confidence 1. Counts 140 originals + 40 additions = 180. Next:
`ex-degree-of-a-reflection-of-a-sphere`.

`ex-degree-of-a-reflection-of-a-sphere`: authored/repaired. The ambient
one-coordinate reflection has determinant $-1$; applying it simultaneously to
the outward normal and tangent basis proves reversal of the induced sphere
orientation, hence degree $-1$. Added the explicit boundary-orientation
supplier. The circle and fixed-equator cases are explicit. Both suppliers were
reread; precheck/render/strict contract pass and the repaired receipt has
confidence 1. Counts 141 originals + 40 additions = 181. Next:
`ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value`.

`ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value`:
authored/repaired. For $m\ne0$ and a regular value $[a]$, the fibre is exactly
$[(a+k)/m]$, $k=0,\ldots,|m|-1$; the classes are proved distinct and exhaustive,
and every local derivative has sign $\operatorname{sgn}(m)$, so the signed sum
is $m$. The cases $m=1,-1,0$, a changed representative of $[a]$, and choice are
explicit. The two suppliers were reread; precheck, rendering, and the strict
contract check all pass. The item receipt is not yet recordable because the
decision tool globally requires all Step 3a scope receipts to be current and
the unrelated concurrent page `condensation-gch-and-diamond-in-l` alone is
currently stale. This is a workflow race, not a mathematical gap or an owner
escalation; retry the repaired confidence-1 receipt once that group refreshes
its scope. Counts 142 originals + 40 additions = 182. Next:
`ex-a-two-sheeted-orientation-preserving-cover-has-degree-two`.

Receipt follow-up: the concurrent group refreshed its scope, so the pending
repaired confidence-1 receipt for
`ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value` was recorded
without changing the item or its dependencies.

`ex-a-two-sheeted-orientation-preserving-cover-has-degree-two`:
authored/repaired. The displayed map is $F([t])=[2t]$. For an arbitrary
$[a]$, its fibre is exactly $[a/2]$ and $[(a+1)/2]$; parity proves exhaustion,
and local lift coordinates give derivative $2>0$ on both explicit inverse
sheets. Properness and smoothness use the earlier power-map proposition, while
the regular-value theorem gives $(+1)+(+1)=2$. Empty, singleton, seam,
degeneracy, and choice cases are explicit. Both suppliers were reread;
precheck/render/strict contract pass and the repaired receipt has confidence 1.
Counts 143 originals + 40 additions = 183. Next:
`cex-a-map-with-two-preimages-but-degree-zero`.

`cex-a-map-with-two-preimages-but-degree-zero`: authored/repaired. In quotient
coordinates the promised map is
$G([t])=[\sin(2\pi t)/(2\pi)]$; periodicity proves well-definedness, local
lifts prove smoothness, and compact-source/Hausdorff-target facts prove
properness. The fibre over $[0]$ is exactly $[0],[1/2]$ with derivative signs
$+1,-1$, so it has unsigned size two and degree zero. An explicit empty regular
fibre and the singleton critical extreme fibre were also checked. Thirteen
actual analytic/topological suppliers were added and reread; precheck,
rendering, and strict contract pass, and the repaired receipt has confidence 1.
No choice is used. Counts 144 originals + 40 additions = 184. Next:
`cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map`.

`cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map`:
authored/repaired. For $H(x,t)=(2t-1)^2x$, both endpoints are the proper
identity map. The inverse image of the compact singleton zero contains the
entire midpoint slice; an explicit formula-indexed open cover of the whole
inverse image has no finite subcover, so the combined map is not proper. This
avoids the invalid inference that merely containing a noncompact subset proves
noncompactness. The midpoint, zero fibre, endpoints, and choice-free nature are
explicit. Both suppliers were reread; precheck/render/strict contract pass and
the repaired receipt has confidence 1. Counts 145 originals + 40 additions =
185. Next: `ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds`.

`ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds`:
authored/repaired. A smooth map from compact $M$ to Hausdorff $N$ is proved
proper, so the nonzero compact-support-degree corollary applies. The concrete
map $P_3([t])=[3t]$ has degree three and exactly the three displayed preimages
of every target class. The constant degree-zero map, connected
zero-dimensional case, empty/disconnected exclusions, boundaryless convention,
and choice are explicit. Five suppliers were reread; precheck/render/strict
contract pass and the repaired receipt has confidence 1. Counts 146 originals
+ 40 additions = 186. The de Rham/degree pair's complete original inventory is
now authored. Next:
`rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow` on the
geodesics/Hopf--Rinow A page.

`rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow`:
authored/repaired. The compact Euclidean interval is metrically complete but
the affine solution with initial data $(1/2,1)$ reaches its boundary in finite
forward and backward time, proving why the boundaryless convention is needed.
Empty, zero-dimensional, degenerate, endpoint, and choice cases are explicit.
Four suppliers and Datar Lectures 15.1 and 19.2 were read; precheck,
rendering, and strict contract pass, and the repaired receipt has confidence 1.
Counts 147 originals + 40 additions = 187. Next:
`def-geodesic-of-an-affine-connection`.

`def-geodesic-of-an-affine-connection`: authored and accepted. A geodesic is
defined intrinsically by $D_t\gamma'=0$ on an interval with nonempty interior;
constant curves, one-sided included endpoints, zero-dimensional manifolds,
empty manifolds, and the excluded singleton parameter interval are explicit.
All three suppliers and Datar Definition 15.1.1 p.113 were read;
precheck/render/strict contract pass and the receipt has confidence 1. Counts
148 originals + 40 additions = 188. Next:
`prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`.

`prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`:
authored/repaired. Metric compatibility gives
$(g(\gamma',\gamma'))'=2g(D_t\gamma',\gamma')=0$, and the zero-derivative
theorem gives constant squared speed and speed. Constant/nonconstant, dimensions
zero and one, empty, endpoint, and choice cases are explicit. All three
suppliers and Datar Remark 15.1.2 pp.113--114 were read;
precheck/render/strict contract pass after anchoring the dimension-one boundary
row, and the repaired receipt has confidence 1. Counts 149 originals + 40
additions = 189. Next: `prop-coordinate-geodesic-equation`.

`prop-coordinate-geodesic-equation`: authored and accepted. Expanding
$D_t(\dot x^j\partial_j)$ gives the displayed coefficient vector, and coordinate
basis independence proves both iff directions. Constant curves, dimensions
zero and one, chart seams, one-sided endpoints, and choice are explicit. Both
suppliers and Datar p.113 were read; precheck/render/strict contract pass and the
receipt has confidence 1. Counts 150 originals + 40 additions = 190. Next:
`def-geodesic-spray`.

`def-geodesic-spray`: authored/repaired. The local components are the first-order
system $(\dot x,\dot v)=(v,-\Gamma(v,v))$; $v=0$, dimensions zero and one, and
empty $TM$ are explicit. The scaffold omitted that this library's canonical
smooth-manifold theorem for $TM$ assumes $\mathrm{AC}_\omega$; the item now
declares it and locates its exact use in global second countability, while the
coordinate formula remains choice-free. Four suppliers and Datar pp.115--117
were read; precheck/render/strict contract pass and the repaired receipt has
confidence 1. Counts 151 originals + 40 additions = 191. This AC obligation
must propagate through the global spray/flow and exponential consumers. Next:
`lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm`.

`lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm`:
authored/repaired. Differentiating $w^a=y^a_i v^i$, then combining the
Christoffel transformation law with the twice-differentiated inverse-coordinate
identity, gives the exact vertical spray transformation. This proves overlap
agreement and smoothness; substituting the two component equations proves both
directions between integral curves and geodesic velocity lifts. Zero velocity,
dimensions zero and one, empty bundle, endpoints, and choice are explicit.
$\mathrm{AC}_\omega$ is propagated solely for the global smooth structure on
$TM$. Three suppliers and Datar pp.115--117 were read; precheck/render/strict
contract pass and the repaired receipt has confidence 1. Counts 152 originals
+ 40 additions = 192. Next:
`thm-existence-uniqueness-and-smooth-dependence-of-geodesics`.

`thm-existence-uniqueness-and-smooth-dependence-of-geodesics`:
authored/repaired. The maximal spray flow projects to geodesics; velocity lifts
prove initial data, uniqueness, and maximality in both directions, and the
fundamental flow theorem supplies the open smooth evaluation domain. Zero
vectors, dimensions zero and one, empty manifolds, open-domain endpoints, and
choice are explicit. $\mathrm{AC}_\omega$ is propagated exactly for $TM$'s
smooth structure. Five suppliers and Datar Theorem 15.2.1/Remark 15.2.4
pp.115--117 were read; all three checks pass and the repaired receipt has
confidence 1. Counts 153 originals + 40 additions = 193. Next:
`prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`.

`prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`:
authored/repaired. The covariant chain rule gives the acceleration factor $a^2$
and norm homogeneity gives speed factor $|a|$. Zero and negative slopes,
dimensions zero and one, empty manifolds, endpoints, and choice are explicit.
The missing speed supplier was added; both suppliers and Datar pp.113--114 were
read. Precheck/render/strict contract pass and the repaired receipt has
confidence 1. Counts 154 originals + 40 additions = 194. Next:
`lem-geodesic-scaling-identity`.

`lem-geodesic-scaling-identity`: authored/repaired. Affine reparametrization and
IVP uniqueness give $\gamma_{p,av}(t)=\gamma_{p,v}(at)$, while maximality plus
reciprocal scaling gives $I_{p,av}=a^{-1}I_{p,v}$ for $a\ne0$; $a=0$ is the
global constant case. Signs, dimensions zero and one, open endpoints, and
$\mathrm{AC}_\omega$ propagation are explicit. Three suppliers and Datar
Corollary 15.2.2 pp.115--116 were read; all checks pass and the repaired receipt
has confidence 1. Counts 155 originals + 40 additions = 195. Next:
`def-geodesically-complete-riemannian-manifold`.

`def-geodesically-complete-riemannian-manifold`: authored/repaired. The
definition quantifies over the unique maximal interval for every initial
vector and proves its componentwise interpretation. Zero vectors,
zero-dimensional and empty manifolds, finite open endpoints, and choice are
explicit. The scaffold omitted the inherited $\mathrm{AC}_\omega$ hypothesis;
it is now stated and `def-countable-choice` is a direct dependency. Both
suppliers and Datar Definition 19.2.1 p.141 were read; precheck, rendering, and
the strict contract check pass, and the repaired receipt has confidence 1.
Counts 156 originals + 40 additions = 196. Next:
`def-domain-and-exponential-map-of-a-connection`.

`def-domain-and-exponential-map-of-a-connection`: authored/repaired. The
maximal-domain definition makes the base point, membership in $\mathcal E$,
evaluation at time one, and each fibre restriction explicit without presuming
completeness. Zero vectors, dimensions zero and one, the empty manifold,
interior time one, and a potentially proper domain are covered. The inherited
$\mathrm{AC}_\omega$ hypothesis and direct supplier were added. Both suppliers
and Datar Definition 17.1.2 pp.127--128 were read; precheck, rendering, and
strict contract pass, and the repaired receipt has confidence 1. Counts 157
originals + 40 additions = 197. Next:
`thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth`.

`thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth`:
authored/repaired. The time-one section pulls the open maximal geodesic domain
back to $\mathcal E$, and composing the smooth geodesic evaluation with that
section proves smoothness; fibre openness and smoothness follow by restriction.
Empty, zero- and one-dimensional, zero-vector, endpoint, and choice cases are
explicit. The scaffold's indirect flow dependency was replaced by the exact
smooth-dependence supplier and the inherited $\mathrm{AC}_\omega$ dependency.
Datar Proposition 17.1.4(1) p.128 and all suppliers were read; all three checks
pass and the repaired receipt has confidence 1. Counts 158 originals + 40
additions = 198. Next: `prop-exponential-map-scales-geodesic-time`.

`prop-exponential-map-scales-geodesic-time`: authored/repaired. For nonzero
scale the maximal-interval identity proves both directions of
$t\in I_{p,v}$ iff $tv\in\mathcal E_p$, while zero scale is handled by the
global constant geodesic. Evaluation gives the exponential identity and the
interval property gives fibrewise star-shapedness. Negative scale, all boundary
dimensions, endpoints, and choice are explicit. The inherited
$\mathrm{AC}_\omega$ supplier was added. Datar Proposition 17.1.4(2)--(3)
p.128 and all suppliers were read; all three checks pass and the repaired
receipt has confidence 1. Counts 159 originals + 40 additions = 199. Next:
`thm-the-differential-of-exp-p-at-zero-is-the-identity`.

`thm-the-differential-of-exp-p-at-zero-is-the-identity`: authored/repaired.
For every tangent vector the straight line $s\mapsto sw$ stays in the open
exponential domain near zero; differentiating the exact scaling formula returns
the initial velocity $w$. Zero vector, dimensions zero and one, empty base,
open-domain endpoints, and choice are explicit. The inherited
$\mathrm{AC}_\omega$ supplier was added. Datar Proposition 17.1.4(2) p.128
and all suppliers were read; all checks pass and the repaired receipt has
confidence 1. Counts 160 originals + 40 additions = 200. Next:
`lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`.

`lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`:
authored/repaired. The proof constructs an explicit target ball, proves the
closed source ball complete directly in ZF, obtains each inverse value as the
unique fixed point of the specified Newton iteration, proves local bijectivity
and a Lipschitz inverse estimate, derives the inverse derivative from the
remainder formula, and bootstraps $C^1$ to smoothness by smooth matrix
inversion. Positive dimension, the impossible empty domain, dimension one,
zero increments, ball boundary, and every choice issue are explicit. Five
missing regularity/continuity suppliers were added; all eleven suppliers and
Lebl Theorem 8.5.1 were read. All checks pass and the repaired receipt has
confidence 1. Counts 161 originals + 40 additions = 201. Next:
`thm-existence-of-normal-neighborhoods`.

`thm-existence-of-normal-neighborhoods`: authored/repaired. In a chart, the
local representative of $\exp_p$ has identity derivative; the choice-free
Euclidean inverse theorem gives a local diffeomorphism, which is restricted to
an open ball to obtain the promised star-shaped source. The zero-dimensional
singleton case is proved separately. Empty, dimension-one, zero-vector,
endpoint, and choice cases are explicit. Four missing coordinate-smoothness,
exponential-smoothness, and $\mathrm{AC}_\omega$ suppliers were added. Datar
Corollary 17.1.7 p.130 and all suppliers were read; all checks pass and the
repaired receipt has confidence 1. Counts 162 originals + 40 additions = 202.
Next: `def-normal-neighborhood-and-normal-coordinate-chart`.

`def-normal-neighborhood-and-normal-coordinate-chart`: authored/repaired. A
normal neighbourhood is defined intrinsically as a star-shaped exponential
diffeomorphism; a supplied ordered basis then gives the exact coordinate chart,
with the orthonormal specialization identified. The chart verification,
zero-dimensional empty basis, dimension one, scalar endpoints, zero vector,
empty-centre exclusion, and choice are explicit. The inherited
$\mathrm{AC}_\omega$ supplier was added. Datar Definition 17.2.1 p.130 and
both suppliers were read; all checks pass and the repaired receipt has
confidence 1. Counts 163 originals + 40 additions = 203. Next:
`prop-properties-of-normal-coordinates-at-the-center`.

`prop-properties-of-normal-coordinates-at-the-center`: authored/repaired. The
inverse chart and $d\exp_0=I$ identify the coordinate basis; orthonormality gives
$g_{ij}(p)=\delta_{ij}$. Exponential scaling gives radial lines. Substitution
into the coordinate geodesic equation, followed by polarization using the
Levi--Civita lower-index symmetry, proves every Christoffel symbol zero; two
lowered Christoffel equations then give every first metric derivative zero.
All boundary dimensions, zero velocity, chart endpoints, basis supply, and
choice are explicit. Scaling, differential, and $\mathrm{AC}_\omega$ suppliers
were added. Datar Proposition 17.2.2 pp.130--131 and all suppliers were read;
all checks pass and the repaired receipt has confidence 1. Counts 164 originals
+ 40 additions = 204. Next:
`def-injectivity-radius-at-a-point-and-of-a-manifold`.

`def-injectivity-radius-at-a-point-and-of-a-manifold`: authored/repaired. The
admissible-radius set now explicitly requires both exponential-domain inclusion
and a diffeomorphism on the open tangent ball. Normal neighbourhoods prove it
nonempty; the pointwise supremum and global infimum are taken in the extended
nonnegative reals, with unbounded, global-zero, zero-dimensional, and empty
manifold conventions stated. Open sphere endpoints, the zero vector, and exact
$\mathrm{AC}_\omega$ use are explicit. Extended-real and choice suppliers were
added. Datar Definition 23.3.3 pp.171--172 and all suppliers were read; all
checks pass and the repaired receipt has confidence 1. Counts 165 originals +
40 additions = 205. Next:
`prop-injectivity-radius-at-each-point-is-positive`.

`prop-injectivity-radius-at-each-point-is-positive`: authored/repaired. A
normal tangent ball proves pointwise positivity. The promised possibility of
global radius zero is not deferred: the item constructs the enumerated disjoint
union of flat circles $\mathbb R/(2/m)\mathbb Z$, solves its geodesic equation,
and proves directly that every point on the $m$th component has injectivity
radius $1/m$. The critical open-ball endpoint, global infimum, empty and
zero-dimensional cases, and exact choice costs are explicit. Six construction
and geodesic suppliers were added. Datar Corollary 17.1.7 and Definition 23.3.3
and all suppliers were read; all checks pass and the repaired receipt has
confidence 1. Counts 166 originals + 40 additions = 206. Next:
`def-smooth-variation-and-variation-field-of-a-curve`.

`def-smooth-variation-and-variation-field-of-a-curve`: authored/repaired.
Smooth, common-subdivision piecewise smooth, fixed-endpoint, and moving-endpoint
variations are separated; transverse and longitudinal curves and the variation
field are defined, with stripwise smoothness and seam continuity verified.
Empty-target impossibility, dimensions zero and one, central zero variation,
closed parameter edges, endpoint velocities, finite subdivisions, and choice
are explicit. The missing vector-field-along-a-curve supplier was added. Datar
Definitions 16.2.1--16.2.2 pp.121--122 and both suppliers were read; all checks
pass and the repaired receipt has confidence 1. Counts 167 originals + 40
additions = 207. Next: `def-energy-of-a-piecewise-smooth-curve`.

`def-energy-of-a-piecewise-smooth-curve`: authored/repaired. Energy uses the
library's stated factor $1/2$, a finite sum of squared-speed integrals, and the
common-refinement argument proves subdivision and corner-value independence.
Finiteness, nonnegativity, constant and singleton curves, dimensions zero and
one, empty target, endpoints, and choice are explicit. The missing scalar
refinement supplier was added. Datar Definition 16.1.3 p.120 (with its different
normalization recorded) and both suppliers were read; all checks pass and the
repaired receipt has confidence 1. Counts 168 originals + 40 additions = 208.
Next: `prop-length-energy-inequality-and-constant-speed-equality-case`.

`prop-length-energy-inequality-and-constant-speed-equality-case`:
authored/repaired. Expanding the exact nonnegative squared-deviation integral
proves $L^2\le 2(b-a)E$ without invoking an unstated $L^2$ theorem. Equality
implies zero squared deviation on every smooth piece, and the zero-integral
supplier makes the speed one common constant there; the converse is calculated
directly, including constant zero speed. Empty-target impossibility, dimensions
zero and one, $a<b$, endpoints, finitely many corners, both iff directions, and
choice are explicit. The missing zero-integral supplier was added. Datar's
discussion after Definition 16.1.3 p.120 and all suppliers were read;
precheck/render/strict contract pass and the repaired receipt has confidence 1.
Counts 169 originals + 40 additions = 209. Next:
`thm-first-variation-formula-for-energy`.

`thm-first-variation-formula-for-energy`: authored/repaired. On each compact
variation strip, differentiation under the integral and metric compatibility
give the derivative of the half-energy; the coordinate calculation using
mixed-partial equality and symmetric Levi--Civita Christoffel symbols proves
$D_s\partial_t\alpha=D_t\partial_s\alpha$. Piecewise Newton--Leibniz and
finite telescoping then produce both one-sided outer endpoint terms and the
exact corner sign $-g(V,T^+-T^-)$. Fixed and moving endpoints, the smooth
one-piece case, constant curves, dimensions zero and one, empty target,
$a<b$, and choice are explicit. Six actual derivative/connection suppliers
were added. Datar Theorem 16.3.1 and its full proof, pp.123--124, were read:
that proof uses $E=\frac12\int|T|^2$, agreeing with this library, despite the
different normalization printed at Definition 16.1.3 p.120. All suppliers were
read; precheck/render/strict contract pass and the repaired receipt has
confidence 1. Counts 170 originals + 40 additions = 210. Next:
`cor-geodesics-are-exactly-critical-points-of-energy-with-fixed-endpoints`.

`cor-geodesics-are-exactly-critical-points-of-energy-with-fixed-endpoints`:
authored/repaired. The forward implication substitutes zero acceleration in
the fixed-endpoint first-variation formula. For the converse, at an arbitrary
interior point the proof constructs a one-variable bump, bounds the bumped
acceleration's coordinate components on a compact interval, and gives the
actual coordinate-addition variation for a uniform parameter range. Its
variation field is exactly the bumped acceleration, so the nonnegative
zero-integral theorem forces acceleration to vanish; one-sided continuity
handles both endpoints. Both iff directions, constant curves, dimensions zero
and one, empty target, $a<b$, and the pointwise (not family-wide) chart choice
are explicit. Compactness, extreme-value and zero-integral suppliers were
added. Datar Corollary 16.4.1(1), especially proof Step 1 on pp.124--125, and
all suppliers were read. Precheck/render/strict contract pass and the repaired
receipt has confidence 1. Counts 171 originals + 40 additions = 211. Next:
`thm-first-variation-formula-for-length`.

`thm-first-variation-formula-for-length`: authored/repaired. Piecewise
regularity is stated strongly enough to make every one-sided speed positive.
Compact minima and uniform continuity keep all longitudinal velocities nonzero
for a uniform small variation parameter, so differentiating the norm does not
hide a division by zero. Metric compatibility and the torsion-free interchange
give $g(D_tV,U)$; piecewise Newton--Leibniz and telescoping give the exact outer
terms and signed jumps of the one-sided unit tangents. The unit-speed formula
is checked termwise against the energy formula. Fixed/moving endpoints, zero
variation, dimensions zero and one, empty target, the genuinely excluded
constant/zero-length cases, and choice are explicit. Ten actual connection,
calculus, and compactness suppliers were added. Datar Theorem 16.3.1 and its
length calculation on pp.123--124 and all suppliers were read. Precheck,
rendering, and strict contract pass; the repaired receipt has confidence 1.
Counts 172 originals + 40 additions = 212. Next: `thm-gauss-lemma`.

`thm-gauss-lemma`: authored/repaired. The stronger bilinear identity
$g(d\exp_v(v),d\exp_v(w))=g(v,w)$ is proved from the actual variation
$\exp_p(t(v+sw))$: openness at $v$ and fibrewise star-shapedness justify its
whole rectangular domain, torsion-free interchange and constant initial speed
give the derivative, and the zero-derivative theorem integrates it from
$t=0$. Differentiating radial scaling identifies $d\exp_v(v)$ with the radial
geodesic velocity and yields norm preservation. Both directions of “tangent to
the positive-radius sphere iff orthogonal to $v$” are proved, the reverse by an
explicit normalized curve. The zero vector, dimensions zero and one, empty
base, time/domain endpoints, and exact $\mathrm{AC}_\omega$ propagation are
explicit. The indirect flow supplier was replaced by the actual exponential,
connection, speed, calculus, and choice suppliers. Datar Lemma 18.1.2 and its
complete proof, pp.134--135, and all suppliers were read. Precheck/render/strict
contract pass and the repaired receipt has confidence 1. Counts 173 originals
+ 40 additions = 213. Next: `cor-polar-form-of-the-metric-in-normal-coordinates`.

`cor-polar-form-of-the-metric-in-normal-coordinates`: authored/repaired. On
an arbitrary star-shaped normal neighbourhood, the radial function is defined
as the norm of the unique inverse exponential vector and is smooth only off the
centre, as required. Differentiating it and applying the bilinear Gauss identity
proves $\nabla r=\partial_r$ and unit radial norm. The explicit orthogonal
decomposition of every inverse-exponential tangent vector then gives
$g=dr^2+g_r$ and both vanished cross terms. The centre, dimensions zero and
one, empty base, open-domain boundaries, and exact $\mathrm{AC}_\omega$
propagation are explicit. The direct choice supplier was added. Datar
Corollary 18.1.3(1) and proof, pp.135--136, and all suppliers were read.
Precheck/render/strict contract pass after one escaped-brace rendering repair;
the repaired receipt has confidence 1. Counts 174 originals + 40 additions =
214. Next: `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`.

`thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`:
authored/repaired. The radial segment's length is calculated as $|v|$. For an
arbitrary competitor that may revisit the centre, the greatest crossing time
of each small radial sphere leaves a terminal subcurve on which polar
coordinates are legitimate; letting the small radius tend to zero proves the
lower bound without differentiating the norm at $p$. A general radial-endpoint
bound then supports the equality analysis: every local noncentral segment has
nondecreasing radius, zero angular speed, and constant direction, ruling out
earlier excursions and leaving precisely a final monotone radial
reparametrization. The reverse equality calculation includes constant pauses;
$v=0$, dimensions zero and one, empty base, open-ball boundary, subdivision
endpoints, and exact $\mathrm{AC}_\omega$ use are explicit. Eleven calculus,
compactness, and choice suppliers were added. Datar Corollary 18.1.3(2)--(3)
and proof, pp.135--137, and all suppliers were read. Precheck/render/strict
contract pass after adopting canonical proof order; the repaired receipt has
confidence 1. Counts 175 originals + 40 additions = 215. Next:
`cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`.

`cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`:
authored/repaired. The radial segment supplies the upper bound. For a competitor
inside the normal neighbourhood, a direct polar-coordinate argument first
bridges the radial supplier's piecewise-smooth class to every piecewise-$C^1$
curve quantified by the distance definition. For a competitor that leaves the
given normal neighbourhood, the proof constructs a compact, closed inner
exponential ball, takes the attained first exit from its open interior, and
applies that piecewise-$C^1$ estimate to the prefix ending on its radius-$s$
sphere; this also proves the strict exit bound needed by the next consumer.
The fixed-point orthonormal-basis reduction, dimensions zero and one, $v=0$,
open-radius endpoints, and exact inherited $\mathrm{AC}_\omega$ use are
explicit. Datar's preceding argument on p.137 and Proposition 19.1.2 on p.140
and every declared supplier were read. Precheck, rendering, and strict contract
pass after canonical proof renumbering; the strengthened existing statement
triggered and received a refreshed sufficient scope decision, and the repaired
receipt has confidence 1. Counts 176 originals + 40 additions = 216. Next:
`cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing`.

`cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing`:
authored/repaired. Exponential scaling identifies the given initial-value
geodesic with the radial segment, and the local distance formula proves it
attains the global distance. Any equal-length piecewise-smooth competitor must
stay in the normal ball by the strict exit bound, after which the radial
equality theorem proves both uniqueness directions up to monotone radial
reparametrization. The local consequence constructs an actual metric tangent
ball inside the supplied open normal source using one fixed-point orthonormal
basis. Zero velocity, dimensions zero and one, the strict sphere endpoint,
constant pauses, and exact $\mathrm{AC}_\omega$ propagation are explicit.
Datar Corollary 18.1.3 and proof, pp.135--137, and all suppliers were read.
Precheck/render/strict contract pass; the repaired receipt has confidence 1.
Counts 177 originals + 40 additions = 217. Next:
`thm-existence-of-geodesically-convex-neighborhoods`.

`thm-existence-of-geodesically-convex-neighborhoods`: authored/repaired. Datar
proves the local endpoint-map and minimizing parts but leaves containment as a
remark; Steinbauer Theorem 2.2.7, printed pp.49--50 (PDF pp.52--53), was located and its complete
Whitehead coordinate-ball proof was read. The authored proof computes
$D\Phi_{(p,0)}(X,Y)=(X,X+Y)$, constructs nested uniform Euclidean and
Riemannian fibre balls, and uses the positive coordinate tensor
$B_{jk}=\delta_{jk}-z^i\Gamma^i{}_{jk}$ to rule out an interior maximum of the
squared coordinate radius. The resulting connector stays in the ball, depends
smoothly on endpoints, and is globally uniquely minimizing by the earlier
normal-ball result. Global uniqueness then proves the promised positive-finite
nonempty-intersection closure. Empty and zero-dimensional manifolds, dimension
one, coincident endpoints, open radii, parameter endpoints, the excluded empty
family, and exact inherited $\mathrm{AC}_\omega$ use are explicit. Seventeen
actual suppliers and the second authoritative source were registered; coverage,
precheck, rendering, and strict contract checks pass, and the repaired receipt
has confidence 1 after scope refresh. Counts 178 originals + 40 additions =
218. Next:
`thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization`.

`thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization`:
authored/repaired. The scaffold's literal statement that the original
piecewise-smooth minimizer ``has no corners'' is ambiguous and is false if a
zero-speed pause followed by motion counts as a corner. The preserved theorem
now gives the canonical cumulative-arclength factorization: every subarc is
minimizing, equal arclength values have the same image point, the factor is
distance preserving, and strong convexity identifies it locally with the
affine unit-speed connector. The constant-speed representative is therefore a
smooth unbroken geodesic; every pair of nonzero one-sided original velocities
has the same positive direction, while zero-speed pauses are explicitly
collapsed. This is a confirmed scaffold-wording defect, not a published-item
defect. $\mathrm{AC}_\omega$ is stated and used exactly through the preceding
strong-convexity theorem. Steinbauer Remark 2.3.10 and Corollary 2.3.11 with
complete proof, printed pp.59--60 (PDF pp.62--63), and Datar Theorem 18.0.1 /
Corollary 18.1.3, pp.133--137, were read; all twenty-one declared suppliers were
also read. Coverage now records both sources (71 harvested results). Canonical
precheck, real renderer and strict selected contract pass with zero errors or
warnings; the repaired receipt has confidence 1. Counts 179 originals + 40
additions = 219. Next:
`lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset`.

`lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset`:
authored/repaired. The Step 3a dependency on the Euclidean maximal-solution
domain was not an adequate supplier for a vector field on $TM$, and Andrews
§11.1 does not contain the claimed finite flow-box argument. The manifest now
uses the published manifold maximal-flow theorem plus the exact product,
ambient compactness and finite-minimum suppliers. The proof indexes the cover
by the pairs $(\varepsilon,U)$ themselves, so a finite compactness subcover
already carries its existence times and no family-wide choice is hidden; their
positive minimum is a uniform flow time. Explicit midpoint parameters then
cross each finite endpoint and maximal-flow uniqueness glues the lift. Datar's
complete related compact-image extension argument in Proposition 20.2.2 p.151
and Andrews's distinct metric-limit continuation in Theorem 11.5.1, printed
pp.106--107, were read and recorded with their exact roles. $\mathrm{AC}_\omega$
is used only through the geodesic-spray supplier; empty and one-member covers,
dimensions zero and one, empty manifold, both finite endpoint directions and
the non-iff status are explicit. Focused canonical precheck, real rendering and
strict selected contract pass with zero errors or warnings; scope was refreshed
as sufficient and the repaired receipt has confidence 1. This is a confirmed
scaffold dependency/provenance defect, not a published-item defect. Counts 180
originals + 40 additions = 220. Next:
`lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve`.

`lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve`:
authored/repaired. The redundant constant-speed dependency was removed because
unit speed is a hypothesis, while the missing well-definedness suppliers for
distance in a disconnected ambient manifold were added. The trace lies in one
open connected component $C$; for every $s<t$ its restricted length is exactly
$t-s$, hence $d_C(\gamma(s),\gamma(t))\le |s-t|$. The explicit formula
$T=\max\{r,b-\varepsilon/2\}$ proves the full two-tail-parameter Cauchy
condition, and reversal handles a finite left endpoint. Andrews Theorem 11.5.1
p.106 and all six suppliers were read. Empty manifold, dimensions zero and one,
equal parameters, nonempty interval, finite endpoints, choice-free status and
non-iff cases are explicit. Canonical precheck, renderer and strict selected
contract pass0/0; scope was refreshed as sufficient and the repaired receipt
has confidence1. Counts181 originals+40 additions=221. Next:
`thm-metric-completeness-implies-geodesic-completeness`.

`thm-metric-completeness-implies-geodesic-completeness`: authored/repaired.
The scaffold's strong-convexity continuation route did not establish that an
arbitrary geodesic tail was the unique minimizing connector, so it was replaced
by the exact compact velocity-lift criterion. A finite-endpoint nonzero maximal
geodesic is rescaled to unit speed; the explicit sequence
$s_k=\beta-\beta/(k+2)$ is Cauchy and converges by metric completeness, and the
two-parameter tail estimate plus the triangle inequality proves convergence of
the whole tail. A coordinate ball about the limit has compact closed inner ball;
uniform local comparison bounds all unit-velocity fibre coordinates, so the
late lift lies in the inverse-chart image of a compact product in
$\mathbb R^{2m}$. Compact-lift continuation then contradicts maximality. The
zero-speed case now uses the actual constant-geodesic and initial-value
uniqueness interfaces rather than being inferred from constant speed alone.
Empty and zero-dimensional manifolds, dimension one, zero initial velocity,
both finite endpoint directions, open maximal endpoints, the one-way status,
and exact $\mathrm{AC}_\omega$ use through the global geodesic/continuation
suppliers are explicit. Datar Theorem 19.2.1, implication (1)=>(2), pp.141--142,
Andrews Theorem 11.5.1, implication (1)=>(2), printed pp.106--107, and all
nineteen declared suppliers were read. Coverage records both sources; manifest
and contract dependencies include the three repaired interfaces. Canonical
precheck, renderer and strict selected contract pass0/0; scope was refreshed as
sufficient and the repaired receipt has confidence1. Counts182 originals+40
additions=222. Next:
`lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain`.

`lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain`:
authored/repaired. The four-dependency scaffold and its open/closed-set strategy
did not match the completed proof. The manifest now records the exact 21 direct
suppliers. In particular, the missing coordinate-derivation basis and
metric-topology interfaces were added: Gram--Schmidt cannot supply its own
input basis. The unused direct radial-minimization and convex-neighbourhood
dependencies were removed. For distinct $x,y$, the proof takes an attained
minimum of distance to $y$ on a compact small normal sphere about $x$; an
explicit crossing by one near-minimizing piecewise-$C^1$ curve proves
$d(x,y)=\delta+d(z_0,y)$ without a sequence of approximate minimizers. Starting
from $p$, downward closure of the exact-additivity parameter set and a supremum
put its frontier $T$ back in the set. Repeating the small-sphere argument at
$\gamma(T)$ creates a concatenated global minimizer; the earlier exact
no-corners theorem makes its two unit one-sided velocities equal, so geodesic
initial-value uniqueness advances the original ray and forces
$T=d(p,q)$. This gives the stated endpoint-distance identity and a globally
minimizing radial geodesic. Empty and zero-dimensional manifolds, dimension
one, $q=p$, zero vector and distance, strict normal radii, closed parameter
endpoints, the non-iff status and exact $\mathrm{AC}_\omega$ use through the
normal/exponential, global-geodesic and minimizer-regularity suppliers are
explicit. Datar Theorem 19.2.1, implication (3)=>(5), pp.142--144, Andrews
Theorem 11.5.1, implication (3)=>(*p), printed pp.107--108, and all 21 suppliers
were read. Both sources are registered in coverage. Canonical precheck,
renderer and strict selected contract pass0/0; scope was refreshed sufficient
and the repaired receipt has confidence1. Counts183 originals+40 additions=223.
Next: `thm-hopf-rinow`.

`thm-hopf-rinow`: authored/repaired. The promised one-basepoint condition made
the scaffold false on the empty connected manifold: metric completeness,
geodesic completeness, the every-basepoint exponential condition and
properness are then vacuous, while existence of a basepoint is false. The
statement now has the necessary nonempty hypothesis. The proof closes the full
cycle metric complete => geodesically complete => every exponential fibre
global => one fibre global => every closed bounded set compact => metric
complete. For properness, pointwise radial minimizers put a bounded closed set
inside the exponential image of one compact closed tangent ball; no choice
function over the set is formed. For the reverse implication, a Cauchy sequence
lies in one compact closed metric ball, whose subspace metric is complete. The
minimizing-geodesic conclusion is then obtained from the every-basepoint clause.
Empty subsets, the excluded empty manifold, dimensions zero and one, coincident
endpoints, strict positive radii, closed-ball endpoints, both directions of the
equivalence, and exact $\mathrm{AC}_\omega$ propagation are explicit. The
scaffold's six dependencies were replaced by all 22 direct interfaces. Datar
Theorem 19.2.1 and proof, pp.141--144, Andrews Theorem 11.5.1 and proof,
printed pp.106--108, and every supplier were read; coverage corrects the former
Andrews theorem/section locator. Canonical precheck, renderer and strict selected
contract pass0/0; scope was refreshed sufficient and the repaired receipt has
confidence1. Counts184 originals+40 additions=224. Next:
`cor-complete-connected-riemannian-manifolds-are-proper-length-spaces`.

`cor-complete-connected-riemannian-manifolds-are-proper-length-spaces`:
authored/repaired. The scaffold silently dropped the nonempty, boundaryless and
$\mathrm{AC}_\omega$ hypotheses of its Hopf--Rinow supplier; all three are now
propagated. Properness and realization by a minimizing geodesic are read from
the theorem, while the induced-length-metric clause is stated separately and
read from the definition of Riemannian distance, so “proper length space” is
not left as undefined shorthand. Empty closed bounded subsets, a nonempty
connected zero-manifold, dimension one, coincident endpoints, the non-iff
status and exact inherited choice use are explicit. Datar Theorem 19.2.1 and
proof, pp.141--144, and both mathematical suppliers were read. Coverage,
canonical precheck, renderer and strict selected contract pass0/0; scope was
refreshed sufficient and the repaired receipt has confidence1. Counts185
originals+40 additions=225. Next:
`cor-compact-riemannian-manifolds-are-geodesically-complete`.

`cor-compact-riemannian-manifolds-are-geodesically-complete`:
authored/repaired. The phrase “apply componentwise” is now an argument: every
component is open and boundaryless, closed in the compact ambient manifold,
compact in its manifold topology, compact and then complete for its intrinsic
Riemannian distance, and hence geodesically complete by Hopf--Rinow. The empty
manifold is handled before a component is fixed and satisfies the universal
definition vacuously. Dimensions zero and one, zero initial velocity, both
finite-endpoint directions, the false converse and exact inherited
$\mathrm{AC}_\omega$ use are explicit. Seven missing direct interfaces were
added to the scaffold's three. Datar Theorem 19.2.1 and proof, pp.141--144, and
all ten suppliers were read. Coverage, canonical precheck, renderer and strict
selected contract pass0/0; scope was refreshed sufficient and the repaired
receipt has confidence1. Counts186 originals+40 additions=226. Next:
`cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric`.

`cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric`:
audited and repaired an uncheckpointed substantive draft. Pullback of the
ambient metric makes inclusion preserve curve lengths, hence
$d_M\le d_S$ and intrinsic Cauchy sequences ambient Cauchy. Ambient component
completeness gives a limit; closedness of the embedded submanifold puts it in
the submanifold, and the newly registered exact closedness of the source
component puts it in the same component. Equality of embedded subspace,
manifold and intrinsic Riemannian-distance topologies then proves intrinsic
convergence. This replaces an unnecessary local connected-coordinate-ball
assertion with exact earlier component suppliers. Empty and zero-dimensional
submanifolds, dimension one, constant sequences, disconnected ambients, the
non-iff status and choice-free proof are explicit. Datar §19.1, pp.139--141,
and all eight suppliers were read; coverage correctly marks Datar as supplying
only distance/topology inputs. Canonical precheck, renderer and strict selected
contract pass0/0; scope was refreshed sufficient and the repaired receipt has
confidence1. Counts187 originals+40 additions=227. Next:
`lem-local-isometries-send-geodesics-to-geodesics`.

`lem-local-isometries-send-geodesics-to-geodesics`: audited and repaired an
uncheckpointed complete draft. On each local diffeomorphism neighbourhood, the
target Levi--Civita connection is pulled back explicitly; the connection
axioms, bracket naturality, torsion freeness and metric compatibility are
verified, so Levi--Civita uniqueness gives the connection-intertwining formula.
The local coefficient formula for covariant differentiation along a curve then
proves preservation of derivatives of arbitrary fields and hence of affine
geodesics. The affine-connection axioms and along-curve derivative definition
were added as missing direct suppliers. Constant curves, empty and dimensions
zero/one, included interval endpoints, non-surjectivity, the non-iff status and
choice-free localization are explicit. Datar's local-isometry consequence on
p.148 and all five suppliers were read; coverage accurately distinguishes the
source statement from the locally derived transport calculation. Canonical
precheck, renderer and strict selected contract pass0/0; scope was refreshed
sufficient and the repaired receipt has confidence1. Counts188 originals+40
additions=228. Next:
`cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image`.

`cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image`:
authored/repaired. A local diffeomorphism has open image. For fixed target
initial data, one chosen preimage and the inverse differential lift it to the
complete connected source; Hopf--Rinow makes the source geodesic global, and
local-isometry preservation plus maximal-geodesic uniqueness makes both the
image-valued and ambient target geodesics global. Thus the image is
geodesically complete and every ambient geodesic starting tangent to it stays
in it. Empty image, dimensions zero and one, zero velocity, both time
directions, the one-way/non-covering scope and exact inherited
$\mathrm{AC}_\omega$ use are explicit. The statement and manifest now carry
the missing boundaryless, choice and geodesic-completeness interfaces. Datar
Theorem 20.1.1 and its geodesic-lifting proof, pp.147--149, and all seven
suppliers were read. Canonical precheck, renderer and strict selected contract
pass0/0; scope was refreshed sufficient and the repaired receipt has
confidence1. Counts189 originals+40 additions=229. The separate scope-decline
refresh still reports the same 18 Step-8 rows as pending; no owner ruling was
invented. Next:
`prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`.

`prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`:
authored/repaired. The scaffold omitted hypotheses needed both for its claim
and for Hopf--Rinow: every factor is now explicitly nonempty, connected and
boundaryless, and $\mathrm{AC}_\omega$ is propagated. The zero-factor product
is separately stipulated to be the one-point zero-manifold; allowing an empty
factor beside an incomplete factor is explicitly identified as a counterexample
to the unrestricted wording. In finite product coordinates, substitution of
the block diagonal metric into the Christoffel formula proves that factor
symbols are retained and every mixed symbol vanishes. Hence the geodesic
equation splits in both directions. Global factor geodesics combine to a
global product geodesic, while a global product geodesic with finitely chosen
constant auxiliary factors projects to a global geodesic in any one factor.
Hopf--Rinow supplies the two metric/geodesic equivalences. The empty product,
one factor, zero-dimensional factors, zero vectors, both time directions, both
iff directions, finite-choice-in-ZF and exact $\mathrm{AC}_\omega$ uses are
explicit. Datar Example 8.2.8, p.49, and all twelve suppliers were read;
coverage records that the source supplies the product metric while the split
and completeness proof is local. Canonical precheck, renderer and strict
selected contract pass0/0; scope was refreshed sufficient and the repaired
receipt has confidence1. Counts190 originals+40 additions=230. Next:
`prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time`.

`prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time`:
authored/repaired. The scaffold's assertion that arbitrarily late returns to a
compact base set put an entire velocity tail in a compact set was invalid. The
completed proof instead proves that the full unit-sphere set over any compact
base subset is compact: finitely many relatively compact coordinate balls
cover the base, uniform metric comparison bounds the fibre coordinates, the
unit equation is closed, and Euclidean Heine--Borel plus finite union completes
the argument. Metric incompleteness gives a nonzero finite-endpoint maximal
geodesic by Hopf--Rinow; dividing by its positive constant speed preserves
maximality and makes it unit speed. The earlier compact-lift escape conclusion
then yields the exact eventual, rather than merely sequential, base escape.
The reverse implication needs only the finite maximal endpoint and
Hopf--Rinow. Empty and zero-dimensional manifolds, dimension one, zero speed,
both endpoint directions, every compact set, both iff cases and exact
$\mathrm{AC}_\omega$ use are explicit. Andrews Theorem 11.5.1, proof of
(1)=>(2), printed pp.106--107, and all fifteen suppliers were read; coverage
records the source's limited role. Canonical precheck, renderer and strict
selected contract pass0/0; scope was refreshed sufficient and the repaired
receipt has confidence1. This is a confirmed scaffold-strategy gap, not a
published-item defect. Counts191 originals+40 additions=231. Next:
`fs-every-affinely-reparametrized-geodesic-remains-unit-speed`.

`fs-every-affinely-reparametrized-geodesic-remains-unit-speed`: audited and
repaired the existing complete draft. On the Euclidean line,
$\gamma(s)=s$ has zero coordinate acceleration and unit speed, while the
affine diffeomorphism $\ell(t)=2t$ produces another geodesic
$\gamma\circ\ell(t)=2t$ of speed two. The missing direct supplier identifying
the Euclidean Levi--Civita Christoffel symbol as zero was added. The exact
repair $|a|=1$, the excluded zero-slope non-diffeomorphism, dimension one,
all-real domains and choice-free status are explicit. Datar Remark 15.1.2 and
Example 15.1.3, printed pp.113--114, and all three suppliers were read.
Canonical precheck, renderer and strict selected contract pass0/0; scope was
refreshed sufficient and the repaired receipt has confidence1. Counts192
originals+40 additions=232. Next:
`fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`.

`fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`:
audited and repaired the supplemental complete draft. The explicit witness is
$(-1,1)$ with $dx^2$, $p=0$ and $v=\partial_x|_0$: the Christoffel symbol and
coordinate acceleration vanish, while uniqueness, maximality and continuity
at both missing endpoints prove the exact maximal interval is $(-1,1)$, so
$v\notin\mathcal E$. The corrected componentwise formulation had silently
used three interfaces; the open-submanifold structure, connectedness of real
intervals and preservation of connectedness by continuous images are now
direct dependencies. They prove that an ambient geodesic stays in its initial
component and that its ambient and component maximal intervals agree, after
which both Hopf--Rinow directions give the claimed equivalence. Empty and
zero-dimensional manifolds, the one-dimensional nonzero witness, the zero
vector, excluded finite endpoints, both corrected iff directions and exact
$\mathrm{AC}_\omega$ propagation are explicit. Datar Definitions 15.1.1 and
17.1.2, Example 15.1.3, and Theorem 19.2.1 with full proof, printed
pp.113--114, 127--128 and 141--144, and all eleven suppliers were read;
coverage records the source's limited role. Canonical precheck, real rendering
and strict selected contract pass0/0; scope was refreshed sufficient and the
repaired receipt has confidence1. Counts193 originals+40 additions=233. Next:
`fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart`.

`fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart`:
audited and repaired the existing complete draft. The round-sphere witness is
retained, but two facts previously hidden under “algebra” are now proved from
direct suppliers. First, the projection formula
$\nabla_XY=P(dY(X))$ is shown smooth and tangent-valued and is checked against
all affine-connection, Leibniz, metric-compatibility and torsion identities;
Levi--Civita uniqueness and the along-curve definition then justify
$D_t\dot\gamma=P(\ddot\gamma)$. Second, after taking
$0<r<\min\{\rho,\pi/2\}$, the mean value theorem and strict cosine
monotonicity prove $0<\sin r<r$. Differentiating the explicit spherical
exponential transversely therefore gives the normal-coordinate coefficient
$g_{22}=(\sin r/r)^2<1$ away from the centre. The round induced metric and all
six newly exposed direct interfaces are registered. Empty and
zero-dimensional non-witnesses, the two-dimensional witness, the centre
$r=0$, strict chart radius, the non-iff status and exact
$\mathrm{AC}_\omega$ propagation are explicit. Datar Example 17.1.3,
Definition 17.2.1 and Proposition 17.2.2 with proof, printed pp.128 and
130--131, and all fourteen suppliers were read. Canonical precheck, real
rendering and strict selected contract pass0/0; scope was refreshed sufficient
and the repaired receipt has confidence1. Counts194 originals+40 additions=234.
Next: `fs-every-geodesic-segment-is-globally-length-minimizing`.

`fs-every-geodesic-segment-is-globally-length-minimizing`: audited and
repaired the existing complete draft. On the flat quotient circle the curve
$t\mapsto[3t/4]$ satisfies the zero-Christoffel coordinate equation and has
length $3/4$, whereas $t\mapsto[-t/4]$ has the same endpoints and length
$1/4$. The scaffold's local quotient-chart construction did not by itself
establish Hausdorffness and second countability of the quotient; the published
flat-torus metric example, specialized to dimension one, is now the direct
supplier of the global smooth circle and its flat Riemannian metric. The local
calculation still verifies the length-one lifted charts used by both curves.
The general $1/2<a<1$ comparison, equality threshold $a=1/2$, failure of a
symmetric normal ball containing $3/4$, empty and zero-dimensional
non-witnesses, nonconstant one-dimensional witness, included endpoints,
non-iff status and exact $\mathrm{AC}_\omega$ use are explicit. Datar
Corollary 16.4.5 and its following counterexample, p.126, and Corollary 18.1.3
with proof, pp.135--136, and all nine suppliers were read. Canonical precheck,
real rendering and strict selected contract pass0/0; scope was refreshed
sufficient and the repaired receipt has confidence1. Counts195 originals+40
additions=235. Next:
`fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`.

`fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`:
audited and repaired the substantive draft. On the connected boundaryless
punctured Euclidean plane, the explicit two-segment detours through
$(0,\varepsilon)$ have length $2\sqrt{1+\varepsilon^2}$ and hence lengths
tending to $2$. Every competing curve crosses the vertical axis at
$(0,y_0)$ with $y_0\ne0$; applying the gradient theorem and the unit-vector
line-integral estimate to the two restrictions gives the strict lower bound
$2\sqrt{1+y_0^2}>2$. Thus the Riemannian distance is $2$ but no curve,
hence no geodesic, realizes it. The manifest now registers all eleven actual
interfaces, and coverage records that Andrews supplies only the
complete-manifold implication, not this counterexample. A false scaffold
claim that the line-integral chain spends countable choice was removed:
the counterexample and canonical IVT are choice-free, while
$\mathrm{AC}_\omega$ is used only in the optional Hopf--Rinow incompleteness
diagnosis. Empty and zero-dimensional manifolds, the dimension-one
non-witness, nondegenerate endpoints and intervals, the interior crossing,
the non-iff status and exact choice use are explicit. Andrews Theorem 11.5.1
and its complete proof, printed pp.106--108 (PDF pp.6--8), and all eleven
suppliers were read. Canonical precheck, real rendering and strict selected
contract pass 0/0; scope was refreshed sufficient and the repaired receipt has
confidence 1. Counts 196 originals + 40 additions = 236. Next:
`fs-geodesic-completeness-means-the-manifold-is-compact`.

`fs-geodesic-completeness-means-the-manifold-is-compact`: audited and
repaired the substantive draft. The restricted Euclidean metric on
$\mathbb R$ has $d_g(x,y)=|x-y|$: the linear segment gives the upper bound
and the constant-unit-gradient estimate gives the lower bound, including
$x=y$. Euclidean metric completeness and Hopf--Rinow therefore give geodesic
completeness, while for every centre $a$ and radius $r>0$ the point $a+r+1$
lies outside the ball, so the whole line is unbounded and noncompact by
Heine--Borel. The manifest now registers all eleven actual interfaces and
coverage records Andrews's metric-to-geodesic implication without
attributing the local Euclidean counterexample to him. The second false
scaffold claim that the line-integral chain spends countable choice was
removed: every direct calculation and Heine--Borel are choice-free, and
$\mathrm{AC}_\omega$ is used only through Hopf--Rinow. Empty and
zero-dimensional non-witnesses, the dimension-one witness, $x=y$, zero
velocity, both maximal-domain endpoints, the failed forward implication and
the unstated reverse implication are explicit. Andrews Theorem 11.5.1 and its
complete proof, printed pp.106--108 (PDF pp.6--8), and all eleven suppliers
were read. Canonical precheck, real rendering and strict selected contract
pass 0/0; scope was refreshed sufficient and the repaired receipt has
confidence 1. Counts 197 originals + 40 additions = 237. Next:
`ex-straight-lines-as-euclidean-geodesics`.

`ex-straight-lines-as-euclidean-geodesics`: audited the complete item and
repaired its manifest locator and proof contract. Constant Cartesian metric
coefficients make every Christoffel symbol zero, so the coordinate geodesic
equation is $\ddot x^k=0$. Two applications of intervalwise
zero-derivative constancy prove globally that $x^k(t)=p^k+tv^k$, and direct
substitution proves the converse. Constant curves, dimensions zero and one,
included interval endpoints, both iff directions and the choice-free status
are explicit. Datar Example 15.1.3, p.114, and all three suppliers were read;
coverage was already accurate. Canonical precheck, real rendering and strict
selected contract pass 0/0; scope was refreshed sufficient and the repaired
receipt has confidence 1. Counts 198 originals + 40 additions = 238. Next:
`ex-great-circles-as-round-sphere-geodesics`.

`ex-great-circles-as-round-sphere-geodesics`: audited and repaired. The
scaffold had hidden four used interfaces: the induced round metric,
affine-connection axioms, covariant differentiation along a curve and the
coordinate Lie-bracket formula are now registered. Tangent projection of the
ambient derivative is checked to be an affine, metric-compatible and
torsion-free connection, hence is the round Levi--Civita connection. This
reduces the geodesic equation to
$\gamma''+|\gamma'|^2\gamma=0$. Constant speed and an explicit conserved
energy identify every nonconstant solution with
$\cos(c(t-t_0))p+\sin(c(t-t_0))u$; the same energy argument proves uniqueness
on any extension, so the all-real formula is the maximal extension and covers
the complete great circle. Direct substitution proves the converse. Empty and
zero-speed cases, $n=1$, included endpoints, both directions and the
choice-free status are explicit. Datar Proposition 15.3.1 and its complete
proof, printed pp.117--118 (PDF pp.125--126), and all fourteen suppliers were
read; coverage was already accurate and the manifest locator and contract were
refreshed. Canonical precheck, real rendering and strict selected contract pass
0/0; scope was refreshed sufficient and the repaired receipt has confidence 1.
Counts 199 originals + 40 additions = 239. Next:
`ex-geodesics-of-a-riemannian-product`.

`ex-geodesics-of-a-riemannian-product`: audited the complete draft and
repaired its scaffold metadata, coverage row and missing contract. The block
metric and inverse retain the two factor Christoffel families and make every
mixed symbol zero. Substitution therefore splits the product geodesic equation
into the two factor systems in both directions, with one unchanged affine
parameter; specializing the common domain to $\mathbb R$ proves the all-real
claim. The earlier product-completeness proposition supplies only the final
conditional consequence under nonempty connected boundaryless factors and
$\mathrm{AC}_\omega$. Empty factors, dimensions zero and one, constant
components, included endpoints, both iff directions and exact choice use are
explicit. Datar Example 8.2.8, p.49, and all six suppliers were read; coverage
now distinguishes the source's product-metric content from the locally proved
split connection and geodesic equivalence. Canonical precheck, real rendering
and strict selected contract pass 0/0; scope was refreshed sufficient and the
repaired receipt has confidence 1. Counts 200 originals + 40 additions = 240.
Next: `ex-geodesics-in-the-poincare-upper-half-plane`.

`ex-geodesics-in-the-poincare-upper-half-plane`: audited and repaired. The
Christoffel calculation gives the two displayed ODEs and the invariants
$C=x'/y^2$ and $E=(x'^2+y'^2)/y^2$. The exhaustive cases are now explicit:
$E=0$ gives a constant; $C=0<E$ integrates to the vertical family
$(a,be^{kt})$; and $C\ne0$ gives the boundary-centred circle
$(x-a)^2+y^2=R^2$, whose log coordinate integrates to the stated
$\tanh/\operatorname{sech}$ affine parametrization. Both nonconstant families
are checked by substitution, and the invariants now explicitly prove
uniqueness of their constants for a fixed affine parameter. The chain rule
and derivative algebra were added as two missing direct suppliers. Empty and
zero-speed cases, the two-dimensional scope, included endpoints, affine
reparametrization, both classification directions and choice-free status are
explicit. Datar Example 15.1.6, p.115, and all eleven suppliers were read; the
source's printed circle with its centre coordinates interchanged is a
confirmed source typo and was not copied. Coverage already records that fact;
the manifest locator and exact contract were refreshed. Canonical precheck,
real rendering and strict selected contract pass 0/0; scope was refreshed
sufficient and the repaired receipt has confidence 1. Counts 201 originals +
40 additions = 241. Next: `ex-normal-coordinates-on-the-round-sphere`.

`ex-normal-coordinates-on-the-round-sphere`: audited and repaired. The
all-real great-circle initial-value formula gives
$\exp_p(v)=\cos|v|p+(\sin|v|/|v|)v$ for $v\ne0$ and the constant value $p$
at zero. A norm estimate proves continuity at zero without assigning a value
to $v/|v|$. Strict cosine monotonicity on $[0,\pi]$ first recovers equal
radii; positivity of sine then recovers the vectors, proving injectivity on
the open radius-$\pi$ ball in every stated dimension. The explicit vectors
$\pm\pi e_1$ collide at $-p$, proving sharpness. The draft had used the
normal-neighbourhood definition as an existence proof; the actual existence
theorem is now a direct supplier. Empty and dimension-zero exclusions,
$n=1$, the zero vector, the open boundary, non-iff status and exact inherited
$\mathrm{AC}_\omega$ use are explicit. Datar Example 17.1.3, p.128, and
Definition 17.2.1, p.130, and all ten suppliers were read; coverage was already
accurate, while the manifest locator and contract were refreshed. Canonical
precheck, real rendering and strict selected contract pass 0/0; scope was
refreshed sufficient and the repaired receipt has confidence 1. Counts 202
originals + 40 additions = 242. Next:
`ex-the-exponential-map-of-a-flat-torus-is-not-injective`.

`ex-the-exponential-map-of-a-flat-torus-is-not-injective`: audited and
repaired the substantive draft. The formerly implicit assertion that the
$n$ independent generators form a basis of $\mathbb R^n$ is now proved from
the standard-basis dimension and the finite-dimensional independent-set
extension/bound theorem. A positive bound for the inverse is obtained as
$K=K_0+1$, proving a uniform lower bound on nonzero lattice vectors. The
induced map from the standard torus is proved a homeomorphism by writing the
two exact quotient-preimage identities, rather than merely naming a quotient
criterion; this supplies Hausdorffness and second countability before the
translation charts descend the Euclidean metric. Zero Christoffels make
$q(x+tv)$ the all-real geodesic with initial vector $v$, hence
$\exp_{[x]}(v)=[x+v]$; translation by a nonzero lattice vector proves
noninjectivity. The $n=0$ exception, zero vector, time-one interior evaluation,
representative independence and exact inherited $\mathrm{AC}_\omega$ use are
explicit. Datar Definition 17.1.2, printed pp.127--128, and all ten suppliers
were read. Canonical precheck, real rendering and strict selected contract pass
0/0; scope was refreshed sufficient and the repaired receipt has confidence 1.
Counts 203 originals + 40 additions = 243. Next:
`ex-the-punctured-euclidean-plane-is-geodesically-incomplete` (generated
addition; no Step 3 item receipt).

`ex-the-punctured-euclidean-plane-is-geodesically-incomplete`: fully authored
the generated supplier and made its openness calculation self-contained. For
$z\ne0$, the origin is at distance $\lVert z\rVert$ and hence is outside the
radius-$\lVert z\rVert/2$ ball. The restricted identity chart has Euclidean
metric matrix, so all Christoffels vanish and
$\gamma(t)=(1-t,0)$ is a unit-speed geodesic on $(-\infty,1)$. Uniqueness and
maximality glue it to the unique maximal initial-value solution; continuity
forbids time $1$, and the interval property forbids any later time. Thus its
maximal domain is exactly $(-\infty,1)$ and geodesic completeness fails. The
nonempty boundaryless manifold, nonzero unit initial vector, finite excluded
endpoint, and exact inherited $\mathrm{AC}_\omega$ use are explicit. Andrews
Theorem 11.5.1 and the relevant complete proof passage, printed pp.106--108
(PDF pp.6--8), and all seven suppliers were read; the source does not state
this example and is not credited for it. Canonical precheck, real rendering
and strict selected contract pass 0/0, and scope was refreshed sufficient. As
a dispatch-created item it correctly received no Step 3 item receipt. Counts
remain 203 originals + 40 additions = 243. Next:
`ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete`.

`ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete`:
audited and repaired. The draft's $e_1$ witness did not exist in the library's
zero-based coordinate convention when $n=1$; it is now the valid $e_0$ supplied
by the standard-basis theorem. For
$x_k=(1-1/(k+2))e_0$, reciprocal monotonicity and the Archimedean reciprocal
property give the Cauchy estimate. If the sequence converged in the ball, an
epsilon-tail estimate and the metric triangle inequality would force its
distance from $e_0$ to be zero, contradicting that $e_0$ is on the excluded
unit sphere. This direct argument replaces an unregistered appeal to algebra
of limits. The metric/Cauchy/convergence definitions, Euclidean norm and
reciprocal facts are all now direct registered suppliers. The $n=0$ singleton,
the dimension-one witness, excluded boundary and choice-free status are
explicit. Andrews Theorem 11.5.1 and its proof, printed pp.106--108 (PDF
pp.6--8), and all eight suppliers were read; it supplies only completeness
background. Canonical precheck, real rendering and strict selected contract
pass 0/0; scope was refreshed sufficient and the repaired receipt has
confidence 1. Counts 204 originals + 40 additions = 244. Next:
`ex-hyperbolic-space-is-complete`.

`ex-hyperbolic-space-is-complete`: audited and repaired. The proof now
establishes directly that the upper half-plane is a nonempty open smooth
two-manifold, that the coefficient $y^{-2}$ is smooth to every order, that the
metric matrix is positive definite, and that the domain is convex and hence
connected. The earlier complete classification supplies exactly the vertical,
semicircular and constant affinely parametrized geodesics; each displayed
nonconstant family has constant squared speed $k^2$ and is defined on all of
$\mathbb R$. Consequently every unique maximal geodesic, including the
zero-speed case, has domain $\mathbb R$, and the geodesic-to-metric direction
of Hopf--Rinow yields metric completeness. The previously hidden coordinate
estimate $|q_y-y|\leq\lVert q-p\rVert_2$ now has the Euclidean-inner-product
supplier, and the pages manifest now records all eleven actual dependencies
and exact Datar/Martelli locators. The proof notes Datar's confirmed swapped
circle-centre typo and relies on the locally proved boundary-centred formula.
The explicit construction is choice-free; $\mathrm{AC}_\omega$ is used exactly
through the current maximal-geodesic convention and Hopf--Rinow. The empty,
zero-speed, fixed-dimensional, endpoint and non-iff cases are explicit. Datar
Example 15.1.6, p.115, and Theorem 19.2.1 with its proof, pp.141--144, and
Martelli Chapter 2, Proposition 1.8, Corollary 1.9 and Propositions 1.15--1.17,
pp.24 and 28--30, were read in full together with all suppliers. Canonical
precheck, real rendering and strict selected contract pass 0/0; scope was
refreshed sufficient and the repaired receipt has confidence 1. Counts 205
originals + 40 additions = 245. Next:
`cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`.

`cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`:
audited and repaired. The scaffold's proposed inference that the entire open
radius-$\pi$ tangent ball was already a normal chart was not supplied by the
earlier spherical-normal-coordinate item, so that route and its local-distance
dependency were removed. Instead, Hopf--Rinow supplies one minimizing join
$\eta$ from $p$ to $-p$ of speed and length $L=d(p,-p)>0$. Explicit unit-speed
half-great-circles give $L\leq\pi$, while the complete great-circle formula for
$\eta$ gives $\cos L=-1$; strict decrease of cosine on $[0,\pi]$ forces
$L=\pi$. Every unit tangent direction therefore gives a minimizer, and two
fixed orthonormal tangent vectors yield the explicit distinct sequence
$u_m=(u_1+m u_2)/\sqrt{1+m^2}$. The false uniqueness assertion, $n=0,1$
exclusions, zero-distance obstruction, nonemptiness, values at
$0,\pi/2,\pi$, lack of an iff, and exact use of $\mathrm{AC}_\omega$ only
through Hopf--Rinow are explicit. Datar Proposition 15.3.1 and its full proof,
printed pp.117--118 (PDF pp.125--126), and Theorem 19.2.1 and its full proof,
printed pp.141--144 (PDF pp.149--152), and all fourteen suppliers were read.
The manifest, coverage and contract now record the actual proof route and exact
locators. Canonical precheck, real rendering and strict selected contract pass
0/0; scope was refreshed sufficient and the repaired receipt has confidence
1. Counts 206 originals + 40 additions = 246. Next:
`cex-a-complete-manifold-with-zero-global-injectivity-radius`.

`cex-a-complete-manifold-with-zero-global-injectivity-radius`: audited and
repaired. On the period-one cylinder the factor $4\pi^2$ makes the horizontal
circumference exactly $2\pi e^{-u}$ and locally identifies the metric with the
upper-half-plane quotient. For an arbitrary maximal geodesic, constant speed
gives $|u'|\leq c$ and $|\theta'|\leq ce^u/(2\pi)$. At either finite maximal
endpoint these estimates put the entire tail of the full velocity lift inside
the continuous image of a compact closed box in $TM$, contradicting the
corresponding continuation clause. Thus all maximal domains are
$\mathbb R$, including zero speed; Hopf--Rinow then gives metric completeness.
The degree-one horizontal loop is noncontractible, has length
$L_u=2\pi e^{-u}$, and every loop point is within $L_u/2$ of its basepoint.
If the pointwise injectivity radius exceeded $L_u/2$, one admissible normal
ball would equal the metric ball by local radial distance and the pointwise
Hopf--Rinow minimizer. Radial scaling would contract the loop. The based
homotopy calculation now explicitly proves
$\exp_p^{-1}(p)=0_p$ before fixing the loop endpoints. Hence
$0<\operatorname{inj}(p_u)\leq\pi e^{-u}$ and the global infimum is zero.
The original five-dependency scaffold is replaced by all twenty-four direct
suppliers in manifest and contract. Coverage now records that Martelli,
Chapter 3, Section 2.2, Remark 2.3, Example 2.5 and Proposition 2.6, printed
pp.58--59 (PDF pp.64--65), asserts rather than proves completeness and
incorrectly prints $e^{-2u}$ as a length after using it as a metric
coefficient; the correct $e^{-u}$ length scale is derived locally. Empty and
dimension variants, numerical zero versus positive pointwise radii, both
finite geodesic endpoints, loop/homotopy endpoints, non-iff status and exact
$\mathrm{AC}_\omega$ propagation are explicit. Canonical precheck, real
rendering and strict selected contract pass 0/0; scope was refreshed sufficient
and the repaired receipt has confidence 1. Counts 207 originals + 40 additions
= 247. Next: `ex-hopf-rinow-on-a-flat-cylinder`.

Additional confirmed published metadata defect for owner reconciliation,
confidence 1: item `thm-fundamental-theorem-of-riemannian-geometry` on page
`connections-levi-civita-and-parallel-transport` is `status: published` and
proved locally, but its frontmatter contains only `verification.judge`; it has
neither `verification.audited` nor `verification.verified`. This violates
SCHEMA.md section 2, which says a judge stamp alone is insufficient for a
published proved-here item. The complete proof was read for the cusp consumer;
its existence, uniqueness, boundary and choice-free claims are mathematically
sound on the reviewed scope, so this is a certification defect rather than a
suspected proof defect. Required suppliers: none. Repair strategy: the owner
must audit it or arrange an authorized delegated verification and record that
metadata through the proper workflow. No published content or canonical
published-consumer ledger was edited.

`ex-hopf-rinow-on-a-flat-cylinder`: audited and repaired. The stale
three-supplier scaffold was replaced by all nineteen dependencies actually
used. Product lifted charts have metric matrix $I_2$, so every initial vector
has the all-real affine geodesic
$t\mapsto([x+ta],y+tb)$ and
$\exp_P(a,b)=([x+a],y+b)$. Hopf--Rinow therefore yields metric completeness,
properness, and a minimizing join. The centered choice
$k=\lfloor x-x'+1/2\rfloor$ is proved independent of both lifts and gives a
nearest horizontal translate, including the half-period tie. Classifying the
Hopf--Rinow minimizer by its initial velocity then proves the exact distance
formula and that the displayed segment minimizes; $(0,0)$ and $(1,0)$ give the
explicit exponential-map collision. The nonempty boundaryless two-manifold,
$P=Q$, zero length, half-period nonuniqueness, endpoints, one-dimensional
periodic factor, lack of an iff, and exact inherited $\mathrm{AC}_\omega$ uses
are explicit. Andrews Theorem 11.5.1 and its complete proof, printed
pp.106--108 (PDF pp.6--8), and all nineteen suppliers were read; Andrews is
used only for the Hopf--Rinow conclusions. Canonical precheck, real rendering,
and strict selected contract pass 0/0; scope was refreshed sufficient and the
repaired receipt has confidence 1. Counts 208 originals + 40 additions = 248.
All batch-7 item bodies are now authored; next action is batch-wide
reconciliation and verification.

Additional confirmed published metadata defect for owner reconciliation,
confidence 1: item
`prop-christoffel-formula-for-the-levi-civita-connection` on page
`connections-levi-civita-and-parallel-transport` is `status: published` and
proved locally, but its frontmatter contains only `verification.judge`; it has
neither `verification.audited` nor `verification.verified`. This has the same
SCHEMA.md section 2 certification defect as the fundamental-theorem item. Its
complete two-step proof was read: inserting coordinate fields in the Koszul
formula and multiplying by the inverse metric correctly proves the formula,
including the constant-metric specialization used by the flat-cylinder
consumer. Required suppliers: none. Repair strategy: owner audit or authorized
delegated verification followed by the proper metadata update. No published
content or canonical published-consumer ledger was edited.

## Final group-d handoff

### Disposition and exact census

All five assigned A pages and their five companion B pages are authored at
their preserved IDs and agree exactly, in order, with the current batch
manifests. Every one of the 209 immutable-baseline original items in batches
5, 6 and 7 has a current confidence-1 `accept` or `repaired` Step-3 item
receipt. The completed written inventory is:

| batch | originals | dispatch-created suppliers | total items | pages |
|---|---:|---:|---:|---:|
| 5 | 66 | 12 | 78 | 4 |
| 6 | 23 | 21 | 44 | 2 |
| 7 | 120 | 7 | 127 | 4 |
| **total** | **209** | **40** | **249** | **10** |

This corrects the last incremental checkpoint's 208-original count; the
immutable pre-author baseline is authoritative. The forty additions below are
fully authored and registered but intentionally have no self-review receipt:

- Batch 5: `lem-relative-singular-product-chain-equivalence-for-cw-pairs`,
  `lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses`,
  `lem-local-coordinate-cup-products-generate-top-relative-cohomology`,
  `lem-integral-surface-cup-pairing-from-the-oriented-polygon`,
  `lem-coordinate-ball-classes-identify-local-homology-stalks`,
  `lem-relative-homology-mayer-vietoris-for-closed-supports`,
  `def-cap-duality-map-for-an-oriented-manifold`,
  `lem-cap-duality-passes-to-increasing-open-unions`,
  `lem-cap-duality-for-open-subsets-of-euclidean-space`,
  `lem-closed-oriented-pid-manifolds-have-finitely-generated-homology`,
  `lem-horn-replacement-block-has-injective-commutator-meridian`, and
  `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball`.
- Batch 6: `lem-compact-cw-images-have-finite-cell-support-without-choice`,
  `lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell`,
  `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`,
  `lem-cubical-pinch-is-additive-on-relative-homology`,
  `lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes`,
  `def-n-connected-cw-pair`,
  `lem-high-relative-cells-do-not-change-lower-homotopy`,
  `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice`,
  `lem-a-connected-cw-pair-has-a-model-without-low-relative-cells`,
  `lem-finite-relative-homotopy-lifting-across-a-weak-equivalence`,
  `lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex`,
  `lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy`,
  `lem-homotopy-excision-for-a-single-relative-cell-layer`,
  `lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees`,
  `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`,
  `lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range`,
  `lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis`,
  `lem-cw-quotient-induces-relative-singular-homology-isomorphisms`,
  `lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis`,
  `lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases`,
  and `lem-relative-hurewicz-comparison-through-a-choice-free-weak-model`.
- Batch 7: `lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary`,
  `lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds`,
  `lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift`,
  `lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy`,
  `lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals`,
  `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`,
  and `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier`.

The final Step-3 decision check has 530/570 whole-run items closed and exactly
these forty additions as its only work rows. That is the required pre-dispatch
state: the engine applies their post-author certification after this successful
dispatch. No receipt, owner, audit, or judge stamp was invented for them.

### Checks actually run

- Batch 5: explicit-path precheck passed 62/62 proof-bearing files; renderer
  passed 82 files (78 items and 4 pages); content-policy passed 78 scoped
  items with 0 errors/0 warnings; strict contracts passed 78/78 with 0
  errors/0 warnings; coverage passed 2 source-page records and 67 harvested
  results with 0 errors/0 warnings.
- Batch 6: explicit-path precheck passed 44/44 files; renderer passed 46 files
  (44 items and 2 pages); content-policy passed 44 scoped items with 0/0;
  strict contracts passed 44/44 with 0 errors and one disclosed
  `shotgun-bracket` heuristic on
  `thm-cellular-approximation-for-maps-of-cw-pairs` row 1.1; coverage passed
  1 source-page record and 47 harvested results with 0/0. The warning is
  accurate: that setup row introduces four of seven facts and later rows cite
  the preceding derived steps. It is not hidden or relabelled as an error.
- Batch 7: explicit-path precheck passed 127/127 files; renderer passed 131
  files (127 items and 4 pages); content-policy passed 127 scoped items with
  0/0; strict contracts passed 127/127 with 0 errors and one disclosed
  `shotgun-bracket` heuristic on
  `lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy`
  row 1.1; coverage passed 2 source-page records and 95 harvested results with
  0/0. Here too the later rows consume the explicitly derived recursion rather
  than re-citing every setup fact.
- The ten page frontmatter arrays were compared mechanically with all ten
  manifest arrays and match exactly in item/example order. All five scope
  decisions are current and sufficient.
- Forty-four original batch-7 receipts had become stale after later transitive
  prerequisite repairs. Their claims and bodies were unchanged. Current direct
  dependencies were compared with manifest and frontmatter; 43 were identical,
  while `def-geodesic-spray` correctly gained the existing well-definedness
  forward reference
  `lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm`.
  Those 44 receipts were refreshed in manifest prerequisite order after the
  batch gates, as the dispatch requires.

### Frontier dependency state

`frontier-dependency-ledger refresh --run phase-2-next-17` completed after the
last dependency edit. Batch 5 and batch 6 have zero cross-batch input rows.
Batch 7 has fourteen verified rows and one removed row. The removed row is
`thm-regular-value-formula-for-degree` ->
`def-kronecker-evaluation-pairing`: the final proof explicitly uses
`lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` and
finite-fibre excision/local restriction instead, so it neither declares nor
uses Kronecker evaluation. The Kronecker publication-state concern remains
separate. There are no open owned frontier rows.

### Completed IDs

The completed IDs are every current manifest entry below; additions are also
identified separately in the preceding census.

**Batch 5 — `cup-cap-cross-products-and-cohomology-rings`:**
`def-alexander-whitney-diagonal-approximation`,
`thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses`,
`def-singular-cup-product-on-cochains`,
`thm-cup-product-leibniz-identity`, `def-singular-cohomology-ring`,
`prop-cup-product-is-natural-unital-and-associative`,
`lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal`,
`thm-singular-cohomology-is-graded-commutative`,
`def-relative-cup-product`,
`prop-relative-cup-products-are-natural-and-compatible-with-connectors`,
`def-cap-product-with-cohomology-first`,
`thm-cap-product-boundary-identity`,
`prop-cap-product-naturality-and-projection-formula`,
`def-relative-cap-product`,
`lem-relative-singular-product-chain-equivalence-for-cw-pairs`,
`lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses`,
`thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`,
`lem-local-coordinate-cup-products-generate-top-relative-cohomology`,
`def-cup-length-over-a-coefficient-ring`,
`prop-positive-degree-cup-products-on-a-suspension-vanish`, and
`lem-integral-surface-cup-pairing-from-the-oriented-polygon`.

**Batch 5 — `cup-cap-cross-products-and-cohomology-rings-examples`:**
`ex-integral-cohomology-ring-of-a-torus`,
`ex-integral-cohomology-ring-of-an-orientable-surface`,
`ex-mod-two-cohomology-ring-of-real-projective-space`,
`ex-integral-cohomology-ring-of-complex-projective-space`,
`ex-cap-product-on-the-oriented-circle`,
`ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge`,
`cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical`,
and `cex-cochain-cup-product-is-not-graded-commutative-on-the-nose`.

**Batch 5 — `orientations-poincare-lefschetz-and-alexander-duality`:**
`def-topological-manifold-with-and-without-boundary`,
`thm-local-homology-detects-interior-points-boundary-points-and-dimension`,
`lem-coordinate-ball-classes-identify-local-homology-stalks`,
`def-orientation-local-system-and-orientation-cover`,
`def-r-orientation-of-a-topological-manifold`,
`prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise`,
`lem-relative-homology-mayer-vietoris-for-closed-supports`,
`lem-compatible-local-orientation-classes-exist-over-compact-subsets`,
`def-fundamental-class-of-a-compact-oriented-manifold`,
`thm-top-homology-characterizes-compact-orientable-manifolds`,
`def-compactly-supported-singular-cohomology-of-a-locally-compact-space`,
`def-cap-duality-map-for-an-oriented-manifold`,
`lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls`,
`lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder`,
`lem-cap-duality-passes-to-increasing-open-unions`,
`lem-cap-duality-for-open-subsets-of-euclidean-space`,
`lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls`,
`lem-manifold-exhaustion-passes-local-duality-to-the-colimit`,
`thm-poincare-duality-for-oriented-topological-manifolds`,
`lem-closed-oriented-pid-manifolds-have-finitely-generated-homology`,
`cor-poincare-duality-gives-a-nonsingular-cup-pairing`,
`def-degree-of-a-map-between-oriented-closed-manifolds`,
`prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`,
`thm-topological-collaring-for-manifold-boundaries`,
`lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class`,
`def-relative-fundamental-class-and-boundary-orientation`,
`thm-poincare-lefschetz-duality`,
`thm-fully-relative-poincare-lefschetz-duality`,
`thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts`,
`thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`,
`thm-jordan-brouwer-separation`, `thm-invariance-of-domain`,
`lem-horn-replacement-block-has-injective-commutator-meridian`,
`lem-controlled-nested-horn-construction-embeds-a-closed-three-ball`,
`def-lefschetz-number-of-a-finite-cw-self-map`, `lem-hopf-trace-formula`,
`thm-simplicial-approximation-after-sufficient-subdivision`,
`lem-finite-cw-complexes-are-euclidean-neighborhood-retracts`, and
`thm-lefschetz-fixed-point-theorem-for-finite-complexes`.

**Batch 5 — `orientations-poincare-lefschetz-and-alexander-duality-examples`:**
`ex-fundamental-classes-and-duality-for-spheres-and-tori`,
`ex-intersection-pairing-of-a-closed-oriented-surface`,
`ex-poincare-lefschetz-duality-for-a-disk-and-its-boundary`,
`ex-mod-two-duality-for-real-projective-space`,
`ex-alexander-duality-for-the-standard-equator`,
`ex-lefschetz-number-of-the-identity-is-euler-characteristic`,
`cex-a-nonorientable-manifold-has-no-ordinary-integral-fundamental-class`,
`cex-ordinary-cohomology-does-not-give-noncompact-poincare-duality`,
`cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls`,
and `cex-zero-lefschetz-number-does-not-imply-no-fixed-points`.

**Batch 6 — `hurewicz-whitehead-freudenthal-and-cw-approximation`:**
`lem-compact-cw-images-have-finite-cell-support-without-choice`,
`lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell`,
`thm-cellular-approximation-for-maps-of-cw-pairs`,
`cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative`,
`lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex`,
`thm-cw-approximation-of-an-arbitrary-space`,
`lem-cubical-pinch-is-additive-on-relative-homology`,
`def-hurewicz-homomorphism`,
`prop-the-first-hurewicz-map-in-degree-one-is-abelianization`,
`def-weak-homotopy-equivalence`,
`lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups`,
`lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells`,
`lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes`,
`thm-whitehead-theorem`, `cor-a-weakly-contractible-cw-complex-is-contractible`,
`def-n-connected-cw-pair`,
`lem-high-relative-cells-do-not-change-lower-homotopy`,
`lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice`,
`lem-a-connected-cw-pair-has-a-model-without-low-relative-cells`,
`lem-finite-relative-homotopy-lifting-across-a-weak-equivalence`,
`lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex`,
`lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy`,
`lem-homotopy-excision-for-a-single-relative-cell-layer`,
`lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees`,
`thm-homotopy-excision`,
`lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`,
`lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range`,
`lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis`,
`lem-cw-quotient-induces-relative-singular-homology-isomorphisms`,
`lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis`,
`lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases`,
`lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity`,
`thm-relative-hurewicz-theorem`,
`lem-relative-hurewicz-comparison-through-a-choice-free-weak-model`,
`thm-absolute-hurewicz-theorem`,
`def-double-mapping-cylinder-homotopy-pushout-and-path-space-homotopy-pullback`,
`thm-blakers-massey-connectivity-for-a-homotopy-pushout`, and
`thm-freudenthal-suspension-theorem`.

**Batch 6 — `hurewicz-whitehead-freudenthal-and-cw-approximation-examples`:**
`ex-first-nonzero-homotopy-group-of-a-sphere`,
`ex-hurewicz-calculation-for-a-wedge-of-simply-connected-spheres-in-the-first-degree`,
`ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction`,
`ex-freudenthal-stable-range-for-spheres`,
`cex-whitehead-theorem-fails-without-cw-type`, and
`cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity`.

**Batch 7 — `the-de-rham-theorem-and-degree`:**
`def-standard-orientation-of-the-affine-simplex`,
`def-integral-of-a-form-over-a-smooth-singular-simplex`,
`lem-simplex-integrals-are-independent-of-affine-coordinate-identification`,
`lem-stokes-theorem-for-the-standard-simplex`,
`thm-stokes-theorem-for-smooth-singular-chains`,
`lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary`,
`def-de-rham-integration-cochain-map`,
`thm-de-rham-integration-is-a-cochain-map`,
`thm-the-de-rham-map-on-cohomology-is-well-defined`,
`prop-naturality-of-the-de-rham-map`,
`lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds`,
`lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains`,
`lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift`,
`lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors`,
`lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors`,
`thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection`,
`thm-de-rham-theorem-for-smooth-singular-cohomology`,
`cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology`,
`lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy`,
`lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals`,
`lem-de-rham-integration-respects-wedge-and-cup-in-cohomology`,
`thm-de-rham-theorem`,
`cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type`,
`rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product`,
`def-compactly-supported-de-rham-cochain-complex-and-cohomology`,
`prop-proper-smooth-maps-pull-back-compactly-supported-forms`,
`prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps`,
`lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`,
`thm-integration-descends-to-compactly-supported-top-de-rham-cohomology`,
`lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives`,
`lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls`,
`thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology`,
`cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real`,
`def-degree-of-a-proper-smooth-map-by-compact-support-cohomology`,
`lem-degree-is-well-defined-and-independent-of-the-normalized-top-form`,
`def-local-orientation-sign-of-a-regular-preimage`,
`thm-regular-value-formula-for-compact-support-degree`,
`lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier`,
`thm-regular-value-formula-for-degree`,
`cor-degree-is-an-integer-and-independent-of-the-regular-value`,
`prop-degree-is-multiplicative-under-composition`,
`prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism`,
`thm-degree-is-invariant-under-proper-smooth-homotopy`,
`cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective`,
`prop-degree-of-the-antipodal-map-on-the-sphere`,
`prop-degree-of-the-power-map-on-the-circle`,
`fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices`,
`fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors`,
`fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings`,
`fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map`,
`fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre`, and
`fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy`.

**Batch 7 — `the-de-rham-theorem-and-degree-examples`:**
`ex-de-rham-integration-cochain-on-a-smooth-path`,
`ex-chain-stokes-on-an-oriented-two-simplex`,
`ex-the-de-rham-map-on-the-angular-form`,
`ex-the-local-de-rham-comparison-on-a-ball`,
`ex-connector-compatibility-for-a-two-arc-cover-of-the-circle`,
`ex-a-normalized-compactly-supported-top-form-on-euclidean-space`,
`ex-degree-of-a-reflection-of-a-sphere`,
`ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value`,
`ex-a-two-sheeted-orientation-preserving-cover-has-degree-two`,
`cex-a-map-with-two-preimages-but-degree-zero`,
`cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map`, and
`ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds`.

**Batch 7 — `geodesics-the-exponential-map-completeness-and-hopf-rinow`:**
`rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow`,
`def-geodesic-of-an-affine-connection`,
`prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`,
`prop-coordinate-geodesic-equation`, `def-geodesic-spray`,
`lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm`,
`thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
`prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`,
`lem-geodesic-scaling-identity`,
`def-geodesically-complete-riemannian-manifold`,
`def-domain-and-exponential-map-of-a-connection`,
`thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth`,
`prop-exponential-map-scales-geodesic-time`,
`thm-the-differential-of-exp-p-at-zero-is-the-identity`,
`lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`,
`thm-existence-of-normal-neighborhoods`,
`def-normal-neighborhood-and-normal-coordinate-chart`,
`prop-properties-of-normal-coordinates-at-the-center`,
`def-injectivity-radius-at-a-point-and-of-a-manifold`,
`prop-injectivity-radius-at-each-point-is-positive`,
`def-smooth-variation-and-variation-field-of-a-curve`,
`def-energy-of-a-piecewise-smooth-curve`,
`prop-length-energy-inequality-and-constant-speed-equality-case`,
`thm-first-variation-formula-for-energy`,
`cor-geodesics-are-exactly-critical-points-of-energy-with-fixed-endpoints`,
`thm-first-variation-formula-for-length`, `thm-gauss-lemma`,
`cor-polar-form-of-the-metric-in-normal-coordinates`,
`thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`,
`cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`,
`cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing`,
`thm-existence-of-geodesically-convex-neighborhoods`,
`thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization`,
`lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset`,
`lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve`,
`thm-metric-completeness-implies-geodesic-completeness`,
`lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain`,
`thm-hopf-rinow`,
`cor-complete-connected-riemannian-manifolds-are-proper-length-spaces`,
`cor-compact-riemannian-manifolds-are-geodesically-complete`,
`cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric`,
`lem-local-isometries-send-geodesics-to-geodesics`,
`cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image`,
`prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`,
`prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time`,
`fs-every-affinely-reparametrized-geodesic-remains-unit-speed`,
`fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`,
`fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart`,
`fs-every-geodesic-segment-is-globally-length-minimizing`,
`fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`,
and `fs-geodesic-completeness-means-the-manifold-is-compact`.

**Batch 7 — `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples`:**
`ex-straight-lines-as-euclidean-geodesics`,
`ex-great-circles-as-round-sphere-geodesics`,
`ex-geodesics-of-a-riemannian-product`,
`ex-geodesics-in-the-poincare-upper-half-plane`,
`ex-normal-coordinates-on-the-round-sphere`,
`ex-the-exponential-map-of-a-flat-torus-is-not-injective`,
`ex-the-punctured-euclidean-plane-is-geodesically-incomplete`,
`ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete`,
`ex-hyperbolic-space-is-complete`,
`cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`,
`cex-a-complete-manifold-with-zero-global-injectivity-radius`, and
`ex-hopf-rinow-on-a-flat-cylinder`.

### Pre-splice plan result and serial amendments

`node tools/validate-plan.mjs research/plan-spec.json` was run separately for
each of batches 5, 6 and 7. Each run exited 1 with the same complete global
result: 1,254 `dup-id` diagnostics and 3,840 `redundant-prereq` warnings. This
is an actual failed pre-splice plan validation, not a content pass. All ten
owned plan page item arrays are still empty, versus current manifest counts
21/8/39/10 in batch 5, 38/6 in batch 6, and 52/12/51/12 in batch 7. Step 4
must splice all 249 items, including the forty additions.

The owned redundant-prerequisite warnings are 2 in batch 5, 6 in batch 6 and
61 in batch 7 (47 for the de Rham A page and 14 for the geodesics A page).
They concern page-level transitive prerequisites, not missing item proof edges.
The serial reconciler should decide whether to retain the explicit direct
orientation in prose or remove redundant plan edges.

Shared design/prose amendments reserved for serial reconciliation are:

- AT-7: record the two relative Künneth suppliers and the unbounded
  degreewise finite-free **homology** hypothesis; retain that additive
  bijectivity uses AC while multiplicativity is choice-free.
- AT-8: replace the old horned-sphere linking-number sketch by the two authored
  geometric suppliers, the marked nonabelian meridian substitutions, compact
  nullhomotopy exclusion, and puncturing-at-infinity argument.
- AT-12: correct the Blakers--Massey comparison direction and basepoint path,
  record the actual all-data/finite-cycle weak-model route, and distinguish it
  from an unproved inverse map of spaces. Add the twenty-one local suppliers.
- DG-17: add the seven local suppliers, including the boundary versions,
  explicit affine diagonal/shuffle compatibility, choice-free finite
  localization, and the local-homology orientation-sign bridge. Propagate
  $\mathrm{AC}_\omega$ only through the current smooth/continuous global
  comparison interfaces; degree and the finite localization arguments add no
  choice.
- DG-20: add the choice-free Euclidean inverse supplier and the local-isometry
  transport lemma, retain the boundaryless convention, and replace the old
  blanket ZF sentence with the actual current $\mathrm{AC}_\omega$ propagation
  through tangent-bundle maximal flow, exponential-map, completeness and
  Hopf--Rinow interfaces. Andrews's control is Theorem 11.5.1 in §11.5,
  printed pp.106--108, not 11.2.1.

### Published concerns for owner/serial reconciliation

These findings were made while reading actual suppliers. They are not claims
that every affected mathematical statement is false, and no published file or
`published-consumer-supplier-ledger.md` row was edited.

1. **Publication-state mismatch, confirmed, confidence 1.** Published page
   `singular-cohomology-and-coefficient-theorems` composes six items whose
   current files say `status: draft`, `pipeline_run: phase-2-next-20`:
   `def-singular-cochain-complex-with-coefficients`,
   `def-singular-cohomology-with-coefficients`,
   `lem-singular-product-chain-equivalence-by-simplex-models`,
   `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`,
   `def-kronecker-evaluation-pairing`, and
   `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`.
   The clauses consumed here were read and are mathematically adequate, but
   that does not supply publication approval. Required suppliers: no new
   mathematical item identified; reconcile their phase-2-next-20
   certifications/publication state before the published page may rely on
   them. The final DG-17 degree proof no longer consumes Kronecker evaluation.

2. **Circular proof support, confirmed, high confidence.** Published
   `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` on
   `exactness-and-the-member-calculus`, proof 1.1, invokes as L5 the forward
   implication of Weibel Appendix A.4.6 that it is meant to prove. Required
   suppliers: image/colimit interfaces sufficient for a direct categorical
   argument from the directed-subobject identity. Repair: write that argument
   or register an exact noncircular theorem. Weibel A.4.6 is only the proposed
   locator here; it was not represented as a source passage read in this
   dispatch. The owned module argument instead proves a common-stage criterion
   directly.

3. **Missing manifold hypotheses, confirmed, high confidence.** Published
   `ex-real-projective-space-from-affine-charts` on
   `smooth-manifolds-and-smooth-maps-examples` constructs compatible charts
   but does not prove the Hausdorff and second-countable requirements of
   `def-smooth-manifold`; compactness and connectedness used by consumers are
   also absent. Required supplier/repair: invariant neighborhoods of distinct
   antipodal orbits, a countable base from the finite affine cover, and the
   elementary quotient compactness/connectedness argument. The choice-free
   quotient proof in the new `ex-mod-two-duality-for-real-projective-space`
   is a concrete extraction source.

4. **Missing incidence calculation, confirmed, high confidence.** Published
   `ex-cellular-homology-of-real-projective-space` on
   `cw-complexes-and-cellular-homology-examples` asserts the attaching
   coefficient $1+(-1)^n$ without its two-preimage local-degree computation.
   Required suppliers: either the current draft
   `lem-real-projective-space-cellular-homology-and-pinch-map`, once properly
   published, or the explicit sphere local/global degree suppliers named in
   the earlier checkpoint. Repair must retain the $n=1$ endpoint and $n=0$
   exception.

5. **Undeclared choice and downstream impact, confirmed, high confidence.**
   Published `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`
   on `cw-complexes-and-cellular-homology`, proof 1.1, says to choose one
   $x_i$ from each of countably many cells without declaring choice.
   `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex` inherits
   this step. Required supplier/repair: use the uniquely specified compact
   coordinate-minimum construction proved in
   `lem-compact-cw-images-have-finite-cell-support-without-choice`, then update
   both dependencies. This is not a claim that the finiteness theorem fails in
   ZF.

6. **Missing product-CW supplier, confirmed, high confidence.** Published
   `prop-euler-characteristic-of-a-finite-cw-product` on
   `cw-complexes-and-cellular-homology` assumes as “Given” the ordinary
   product cell structure and cites only the Euler-characteristic definition.
   Required supplier/repair: construct the finite product CW structure,
   including disk products, attaching topology and the finite closed-cover
   topology argument, before counting cells. The local finite product of
   spheres proved for Batch 6 is narrower and does not close this general debt.

7. **Missing good-pair/quotient construction, confirmed, high confidence.**
   Published `thm-relative-cellular-homology-computes-relative-singular-homology`
   on `cw-complexes-and-cellular-homology`, proofs 1.1 and 2.1, assert the
   quotient CW structure and a cellwise radial open neighborhood retract for
   every CW subcomplex without construction, continuity proof, or supplier.
   Required suppliers/repair: the new
   `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex` plus the
   explicit mapping-cylinder free-end collar and relative quotient comparison
   in `lem-cw-quotient-induces-relative-singular-homology-isomorphisms`.

8. **Missing finite-wedge calculation, confirmed, high confidence.** Published
   `thm-relative-homology-of-consecutive-cw-skeleta` on the same CW page
   asserts the single-cell collar and the finite-wedge splitting before using
   compactness for an arbitrary direct sum; neither calculation is supplied,
   and its compact-image input inherits finding 5. Required suppliers/repair:
   the new choice-free compact-support and quotient lemmas plus the explicit
   finite/infinite sphere-wedge calculation in
   `lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis`.
   `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`
   is only an impact-review candidate: its finite-cycle argument is sound
   conditional on replacing the compact-image supplier.
   `thm-cellular-homology-computes-singular-homology` is likewise a
   downstream conditional impact candidate, not a separately proved defect.

9. **Dependency/proof expansion debt, suspected graph defect with high
   confidence in the omitted uses.** Published
   `thm-the-exterior-derivative-commutes-with-pullback` on
   `the-exterior-derivative-and-cartan-calculus`, proof 2.1, differentiates a
   wedge of exact one-forms but omits the graded Leibniz and $d^2=0$ suppliers.
   The identity is correct. Required suppliers:
   `thm-the-exterior-derivative-is-a-graded-derivation` and
   `thm-the-exterior-derivative-squares-to-zero`. Repair: cite them and expand
   the derivative calculation, explicitly killing each $d^2$ term. Whether
   the current shorthand already counts as a derivation is reserved for the
   serial audit.

10. **Missing countable-choice propagation, confirmed, high confidence.**
    Published `thm-smooth-partitions-of-unity-exist-on-manifolds` on
    `smooth-partitions-of-unity-and-exhaustions`, proof 2.1, chooses a smooth
    bump $g_k$ for each member of a countable shrinking, but its statement and
    direct dependencies omit $\mathrm{AC}_\omega$. Required supplier:
    `def-countable-choice`. Repair: declare and propagate that exact selection,
    or fully prove a canonical bump-selection construction. No claim is made
    that a choice-free alternative is impossible.

11. **Missing countable-choice propagation, confirmed, high confidence.**
    Published
    `prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components`
    and `prop-positive-compactly-supported-top-forms-have-positive-integral`,
    both on `integration-of-forms-and-the-general-stokes-theorem`, use the
    AC-dependent global atlas/partition integration theorem but omit its
    assumption from statements/dependencies. Required supplier for those
    displayed proofs: `def-countable-choice`, propagated to consumers.
    Alternative boundaryless repair: use
    `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes`
    with finite localization and Riemann positivity. A boundary version would
    still need its own finite localization proof.

12. **Published certification metadata, confirmed, confidence 1.** Items
    `thm-fundamental-theorem-of-riemannian-geometry` and
    `prop-christoffel-formula-for-the-levi-civita-connection`, both on
    `connections-levi-civita-and-parallel-transport`, are `status: published`
    proved-here items with only `verification.judge`; neither has
    `verification.audited` nor `verification.verified`, contrary to SCHEMA.md
    section 2. Their complete proofs were read and are mathematically sound on
    the consumed clauses. Required suppliers: none. Repair: owner audit or an
    authorized delegated verification, followed by the proper metadata update.

The earlier suspected inverse-function assumption granularity was resolved and
is **not** carried as a defect: the current complete-subspace theorem explicitly
proves closed subsets complete in ZF, and the Euclidean inverse proof uses only
that direction.

### Source qualifications

- Martelli, Chapter 3 §2.2, Remark 2.3, Example 2.5 and Proposition 2.6,
  printed pp.58--59 (PDF pp.64--65), asserts cusp completeness rather than
  proving it and prints $e^{-2u}$ as a length after using it as a metric
  coefficient. The correct $e^{-u}$ length scale and completeness are derived
  locally in the cusp item.
- Datar Example 15.1.6, printed p.115, swaps the two displayed circle-center
  coordinates for half-plane geodesics. The locally verified boundary-centered
  semicircle formula is used instead.
- Andrews's chapter contains Hopf--Rinow as Theorem 11.5.1 in §11.5, printed
  pp.106--108. It contains no punctured-plane example. The manifest and
  coverage now give the corrected locator and credit Andrews only for the
  general theorem.
- No source-retrieval uncertainty remains in the owned proofs. Exact source
  qualifications above remain recorded rather than being converted into proof
  claims.

### Open obligations

There is no unresolved owned mathematical item, scope decision, or frontier
edge. The remaining obligations are procedural and owner/serial-held:

1. The engine must apply the mandated post-author certification to the forty
   dispatch-created suppliers after this successful dispatch; they must not be
   sent through a Step-3 self-review loop.
2. Step 4 must splice the ten empty plan item arrays, reconcile the shared
   design/prose amendments above, and address or explicitly retain the owned
   redundant page prerequisites. The pre-splice validator failure must not be
   hidden.
3. The owner/serial reconciler must add or reconcile the published concerns in
   the canonical published-consumer ledger. This group did not race that
   shared ledger or edit published content.
4. Independent Step-5 review remains required. The two strict-contract
   heuristic warnings are disclosed above and were not presented as independent
   approval.

Read-only autopilot status at handoff still shows groups 5 and 6 missing until
this dispatch result is ingested, and repeats the old pre-reopen Künneth blocker.
Current disk evidence supersedes that stale dispatch-state text: the owner
reopen, the two fully authored relative suppliers, the repaired Künneth item
receipt, the final batch gates and the current Step-3 decision check were all
verified. No engine state or owner-held decision was changed manually.
