# Final adjudication evidence: Euler naturality, orientation sign and product

Run: phase-2-remaining-27. Group b, queue position 1.
Outcome: **ESCALATED; no terminal acceptance or repair receipt**.

## Exact unresolved issue

The current theorem quantifies over R-oriented bundles of ranks m,n >= 0,
asserts integral orientation reversal, and fixes the rank-zero Euler class to
1. Its inherited definitions do not consistently specify that domain.

Take B = point, R = Z, and the zero bundle with cohomological orientation
o = -1. The published `def-r-oriented-vector-bundle-and-orientation-local-system`,
Definition, permits this: an R-orientation is a generating section of the
orientation local system, and the rank-zero stalk is Z. Both 1 and -1 generate.
The standard orientation being 1 does not exclude the other generator.
Fiber normalization forces u = -1. Both j* and s* are identity maps, so the
defining formula gives e(0,o) = -1, not 1.

Two published suppliers contain the conflicting unconditional specialization:

- `def-thom-euler-class-of-an-oriented-vector-bundle`, Definition, starts
  with a supplied R-orientation and defines e = s*j*u, but its rank-zero
  paragraph asserts u = 1 and e = 1 without restricting that orientation.
- `thm-thom-isomorphism-for-oriented-vector-bundles`, Proof 4.1, asserts
  u = 1 and identity maps at rank zero despite the arbitrary supplied
  R-orientation in its Statement. For o = -1, its cup-product map is
  multiplication by -1. The isomorphism statement survives; the claimed
  normalization and identity specialization do not.

This is not a defect in the abstract cohomological orientation definition.
`thm-naturality-and-uniqueness-of-thom-classes`, Proof 3.1, explicitly allows
the rank-zero unit orientation to reverse to -1, consistently with that
definition. In contrast, `def-oriented-real-vector-bundle-and-oriented-frame-bundle`,
Definition (quoted in the owning proof contract), fixes a unique geometric
rank-zero orientation. These two notions must be distinguished.

Terra's final rejection is therefore not simply overturned: its geometric
orientation reasoning is appropriate to the frame convention but does not
describe all of the R-orientations permitted by the actual Thom suppliers.
Under either reading, the queued text needs qualification. Restricting only
the reversal clause to positive rank leaves the arbitrary-R-orientation
rank-zero input unresolved. Restricting all zero-rank inputs to the standard
unit would produce a consistent narrower local theorem, but would leave the
published defining interface and its explicit reversal convention unreconciled.
I do not certify that as consistency with all the inherited library conventions.

## Review basis and scope

Read the current item in full, its owning batch-10 manifest entry, proof
contract (including all citation quotes, derivations, boundary worksheet and
risk review), coverage entry, construction notes, A/B page context and the
Euler-specific owner direction. The rendered group-b evidence bundle contains
only headers, so the item, contract and actual suppliers were used instead.
Read both published Thom naturality/product proofs, the R-orientation
definition, the published Thom-Euler definition, and the general Thom theorem.
This is a defect-focused review stopped at an inherited-interface conflict;
it is not a certification of the entire transitive proof closure.

The Step-6 rejection concerned the unsigned interchange of Euler factors.
Sol's current step 2.1 removes that interchange and uses the Thom swap sign,
then the two ordered product formulas. That repair addresses the recorded
Step-6 objection. The final Terra rejection instead concerns rank zero.
The contract's boundary evidence points several checks at old step 2.1 rather
than current 3.1; it would need synchronization after any authorized repair.

Read-only review records:
- `research/phase-2-remaining-27-judge.jsonl`: initial rejection at
  2026-09-19T09:00:08.411Z and rejudge at 2026-09-19T18:51:24.846Z.
- `research/phase-2-remaining-27-alpha-step7-b.md`: method and the exact
  Euler-theorem adjudication row.
- `research/phase-2-remaining-27-batch-10.proof-contracts.json`:
  contracts.thm-naturality-orientation-sign-and-whitney-product-for-euler-classes.

Current raw SHA-256 values:
- queued item: `5a6d9760555c8c38d6a5d8a17ab3ddd36ecbec5ca9adebcaadb37f378ca0ec10`
- published Thom-Euler definition: `cdf9e3b3662e2925233b9724a69f67adf94f53141fe0c6364c35a92a49f53592`
- general Thom theorem: `9621d8496fbafcd78e2cbc08545aab717e6950d66bb7e0f62a784f09d561dd53`
- R-orientation definition: `6815366045ca364bb5046a0f0067245f4cecba8a60ddee77dc02084f12a3964a`
- Thom naturality theorem: `049a22ff304c12682235858de2a1c3eefe7f2ec797f203b9f235c5dafc1c6433`

The queued bytes match the rejudge's item_sha256 exactly. Its context_sha256 is
`1caf32f00d489b29ea429c5cf5604f3828bb7ed7a029178b9ee5523c984cd983`.

## External verification

https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf

J. P. May, A Concise Course in Algebraic Topology, Chapter 23 section 5,
printed pp.194–196, PDF pages 201–203 (zero-based): read the extracted full
section, including its definition and complete supplied sketch proof.
May defines an R-orientation by a class restricting to a module generator,
and formulates the Thom isomorphism as cup product with the chosen class.
The trivial-bundle discussion singles out the suspended unit. This supports
distinguishing a standard unit choice from an arbitrary R-orientation; it
does not impose the repository's geometric rank-zero convention. The point
counterexample above is a direct calculation, not a claim that May explicitly
discusses that counterexample. No other external source is claimed as read.

## Required resolution and stopping point

Recommended supplier repair: retain cohomological R-orientations and write
u(0,o) = o and e(0,o) = o, reserving e(0) = 1 for the standard unit orientation.
Distinguish geometric orientation from cohomological orientation in rank zero.
Then reconcile the existing draft alias
`def-euler-class-by-zero-section-pullback-of-the-thom-class` and this theorem's
claim, proof and contract. The published R-orientation definition, Thom
normalization and naturality suppliers already provide the mathematics;
no new Phase-2 lemma, theorem, page or pair is needed.

The dispatch forbids existing-supplier edits. The published definitions and
the existing draft alias are not owned contracts/metadata of this queued item.
Escalation is selected rather than silently choosing between their conventions.
No content repair, dependency change, judge call, pass stamp or terminal
recorder call was made. Consequently no dependency-repair update to a consumer
batch input is due. Published findings are recorded in the canonical defect
ledger; operational information remains here. No substantive review of queue
position 2 or any later item was begun. Next action belongs to the owner:
resolve the inherited rank-zero interface under explicit supplier authority.

Evidence checks completed: `git diff --check` for the two report files passed;
the queued item and both defective published suppliers retain the raw hashes
listed above; the two published targets each have exactly one A-P index row.
The ledger's active classification counts were recomputed from its actual
index rows (the preexisting displayed totals disagreed with those rows).
No proof precheck or content validation is represented as performed: content
was not repaired and the mathematical acceptance obligation remains open.

## Round-2 independent terminal review

Disposition: repaired. This section supersedes the earlier stopping decision
above under the round-2 recovery rules; the earlier review remains preserved.
The recovery rules explicitly permit bypassing a defective published clause
by stating a consistent local convention. No existing supplier was edited.

Independently read the current item, its complete batch-10 contract (including
risk record and boundary worksheet), manifest and coverage entries, A/B page
prose, owner direction, Step-6 and Terra rejudge rows, and Alpha's method and
item adjudication row. The rendered bundle has no item blocks. Read the Euler
alias, published Euler definition, Thom naturality and product proofs, general
Thom theorem and R-orientation definition in full, and the other cited
statements quoted in the contract. Read the added relative-product supplier
Statement and proof in full.

The initial unsigned interchange is repaired correctly: ordered Thom products
and the block permutation give the sign before zero-section pullback. Terra's
rank-zero objection identifies a real domain error. The corrected statement
requires the standard unit orientation on every zero-rank input and restricts
integral reversal to positive rank. These requirements match the page's
geometric zero-bundle convention without asserting that every cohomological
orientation is the unit. Pullback source and target must both be in Thom
scope. The general defining composite, rather than the defective arbitrary
rank-zero specialization, is used. No claim about an arbitrary nonunit
zero-rank generator is needed.

For naturality, the pullback metric gives a map of disk pairs; the zero-section
and relative-to-absolute squares commute. Thus pulling back the normalized
Thom class gives the asserted Euler pullback. Negating a positive-rank integral
orientation negates its normalized class, and both subsequent maps are linear.
For Whitney multiplication, the radial product-pair identification fixes the
zero section. Relative-product naturality therefore makes its pullback the
product of the two Euler classes in their original order. Added an explicit
citation to prop-relative-cup-products-are-natural-and-compatible-with-connectors
for this relative step. A zero-rank unit pulls back to the unit, while the
block swap has sign 1 when either rank is zero. For two odd ranks the sign
remains -1; no unsigned commutation is used. Empty base and zero ring are
consistent. AC is inherited only through the cited Thom machinery.

External verification in this round: read the complete extracted Chapter 23
section 5 (printed pp.194–196) at
https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf . The source
distinguishes a generator-normalized Thom class from the suspended unit for
a trivial bundle, and states the chosen-class cup isomorphism. The local
rank-zero calculation follows directly from identity maps on H^0(B;R).
The PDF text was obtained via web open; a local pdftotext attempt failed
because that executable is unavailable. No additional source reading claimed.

Updated this item's manifest and both contract copies, preserving the earlier
risk review and correcting boundary step locators. Updated the owning batch-10
consumer dependency input and refreshed its merged ledger. Recorded the two
published mathematical defects in research/defect-ledger.jsonl, class published;
the existing canonical published-consumer ledger already contains both findings.
No new lemma, supplier edit, judge verdict or pass stamp was created.

Focused precheck: PASS (1 item, 0 failing). Depcheck: exit 0, no cycles and all
references resolve, with 277 repository warnings; these are not a mathematical
certification. Next action: record position 1, then begin position 2 only after
the recorder accepts it.
