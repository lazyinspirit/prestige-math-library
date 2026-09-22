# Final adjudication: Thom-defined Euler class

Run: `phase-2-remaining-27`; group b; queue position 1.
Item: `def-thom-euler-class-of-an-oriented-vector-bundle`.
Disposition: **escalated-to-owner**. Source status: **verified**.

## Authority and decision owed

The exact dispatched queue explicitly assigns `scope: published`; the current
item and both home pages also have published status. The dispatch instruction
requires escalation when the queued item itself is published scope. Accordingly
this lane preserves the rejected bytes and does not record acceptance, repair,
a judge verdict, or a pass stamp. The owner owes the published-item terminal
decision on the existing rejection. My mathematical recommendation is to reject
the stated counterexample as outside the supplied-orientation hypothesis; an
explicit parenthesis saying “with unit values on every fiber” would be optional
clarification, not a new mathematical premise. Any published edit and resulting
certification belong to the owner. No further judgment is launched here.

## Independent mathematical assessment

The current last paragraph quantifies over an arbitrary supplied rank-zero
**orientation**, not over every element of H^0(B;R). The published definition
`def-r-oriented-vector-bundle-and-orientation-local-system`, Definition,
requires each value of an orientation section to generate its free rank-one
stalk. In rank zero the stalk is R. An element r generates R as an R-module
exactly when ar=1 for some a, hence exactly when r is a unit (R is commutative).
Thus the rejected witness o=0 over a nonzero ring is not an allowed input.

For the zero bundle D=B and S is empty. Relative cochains for (B,empty) are
absolute cochains, and the zero section is the identity. The normalization in
`def-thom-class-by-fiberwise-normalization` says u restricts at each point to
the supplied orientation value. Degree-zero cocycles are determined by their
point values, so u=o and s*j*u=o. The standard unit orientation gives 1; the
reversed integral unit orientation gives -1. Both are permitted cohomological
orientations in this library. No claim about the uniqueness of geometric
empty-frame orientation can override this explicitly fixed convention.
For an empty base the group has one element, and over the zero ring 0=1;
these cases agree with the formula. The final paragraph expressly restricts
the preceding u=1 assertion to the standard unit orientation.

For positive rank the displayed composite is well typed. The disk-bundle map
of a pullback commutes with zero sections; naturality of the relative-to-absolute
map and of the normalized Thom class therefore gives the stated Euler
naturality. Changing an integral normalization to its negative changes u to
-u and hence changes its image to -e. The item assumes a supplied normalized
class and inherits AC only from the general existence/naturality theorem.
These claims require no additional supplier or proof chain.

## Authorities actually checked

Allen Hatcher, *Vector Bundles and K-Theory*, version 2.2:
https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf

Read the complete relevant defining passage on printed p.88 (PDF index 91,
text lines 7205–7262), and the Euler definition, orientation dependence and
pullback argument on printed p.91 (PDF index 94, lines 7503–7581).
These support fiber-generator normalization, the relative-to-absolute then
zero-section composite, and integral sign and pullback dependence. The
rank-zero computation above is my direct specialization of the library's
definitions, not an assertion that Hatcher explicitly discusses this dispute.
May's URL in the earlier Sol report was not independently opened in this lane;
I do not claim a new reading of it.

## Evidence and conventions inspected

- Read `CLAUDE.md`, `README.md`, schema and relevant workflow clauses, then
  the exact queue and task. The group-b rendered Step-7 bundle contains only
  headings, with no item blocks; the actual item and suppliers were opened.
- Read the entire current queued definition and all four declared suppliers:
  `def-thom-diagonal-and-zero-section-collapse`,
  `thm-naturality-and-uniqueness-of-thom-classes`,
  `thm-naturality-of-the-singular-cohomology-pair-sequence`, and
  `def-axiom-of-choice`. Also read the orientation and normalization definitions
  and the general Thom theorem's statement and proof, including Proof 4.1.
- Read both `leray-hirsch-thom-isomorphism-and-gysin-sequences` A/B pages.
  Their scope is supplied metrics, numerable bundles over CW complexes or
  paracompact Hausdorff bases of CW type, supplied cohomological orientations,
  and literal rank-zero inclusion. The B page imposes no alternate convention.
- The current run aggregate proof-contract scope does not contain the queued
  published definition, and has no own contract for it. It is a
  proof-not-applicable inherited definition, not a missing new proof contract.
  Read the batch-10 Euler consumer's complete contract and risk record: its
  Step-5 risk review reports critical score 10 and acknowledges it did not
  rederive the proof. Its unconditional rank-zero unit derivation is historical
  evidence, not authority to discard the supplied-orientation convention.
  No consumer repair or consumer certification is claimed by this lane.
- Read `phase-2-remaining-27-escalation-sol-3-rank-zero-euler.md`, the owner
  decision D3, and the published repair record. Sol explicitly requires unit
  values in its mathematical basis and restricts the unit normalization.
- Exact-ID inspection of the full run judge JSONL found **one**, not two,
  verdicts for this published item: Terra rejection at
  `2026-09-21T03:48:38.693Z`, item hash
  `f2a4cd76fb8c7db60757bb403829d2806dc0f3590361be4c789b46296c646131`,
  context hash `03df6600ee6febcccee0b226ff0abd58b81cbcf62d90c8581bb35a08427ac331`.
  The closure file reproduces that rejection. Exact-ID inspection of the
  adjudications JSONL found no row for this item. The originating consumer's
  initial sign-commutativity adjudication and later rank-zero rejection are
  distinct evidence; they are not two verdicts on this definition. No missing
  history has been invented.

## Focused checks and remaining work

- Raw SHA-256 of the untouched item:
  `8e79621c8fa23ec8dbd1a4453b4a779d3b500de78f9fff9c3772305f6f72144a`.
- `node tools/prosecheck.mjs items/def-thom-euler-class-of-an-oriented-vector-bundle.md`:
  exit 0, one file, zero errors and warnings. This is a prose check, not a proof.
- Exact-queue `queue-status`: exit 0; position 1 unrecorded before recording,
  pending 1 of 1. No earlier position needs resealing.
- No dependency repair was performed; no supplier edge, consumer-batch input,
  manifest, contract, or coverage convention changed. Therefore the conditional
  frontier-dependency-ledger update is not triggered. The existing published
  defect ledger already records the historical rank-zero normalization defect;
  this review confirms no new published mathematical defect. Dispatch status
  and the owner decision obligation remain exclusively in run evidence.

Next action: record this escalation through the specified terminal recorder,
then hand the published decision to the owner. The queue has no next item.
