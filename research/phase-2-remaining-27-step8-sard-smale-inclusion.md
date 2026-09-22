# Sard–Smale inclusion with explicit external prerequisites

Proposal only, 2026-09-22, Astra medium. This incorporates the owner's new
instruction to include the result with the visible label
**proof uses external results not yet established in this library**.
No canonical item, page, shared scope record, ledger or engine state is edited
by this proposal. The earlier Phase-3-only disposition is superseded by this
new requested direction, not by a claim that the old proof was complete.

## Recommended identity-preserving inclusion

Reuse `thm-sard-smale-residual-regular-values-for-fredholm-maps` on existing
DT-4, `stable-unstable-manifolds-and-morse-smale-transversality`. The owner's
inclusion instruction authorizes this exact bounded published proof repair.
Keep it outside run manifests; ordinary Step-8 change indexing records it as
`published_modified` and sends it through fresh relative-proof judgment.
Do not create a second theorem with
the same mathematical identity on the FA page. The integration can close the
FA source-coverage row by naming this precise DT-4 inclusion, with external
prerequisite status rather than claiming all prerequisites locally proved.

Minimal new records, both on the existing batch-3 FA Banach-manifold A page
(order 288.0761), using its earlier definitions and self-contained terminology:

1. `rem-fredholm-maps-have-countable-proper-local-restrictions`;
2. `rem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense`.

These are externally sourced **remarks**, not fictitiously proved versions of
the two planned DT-4 lemmas. Their relationship to those future lemmas should
be explicit in the ledger. Keep the future lemma identities reserved; no
provenance or certification is manufactured for them.

Both records have `kind: remark`, `proved_here: false`,
`provenance.statement: literature-derived`,
`provenance.proof: not-supplied`, `verification.precheck: n/a`, no Proof or
Refutation section and no judge stamp. Their initial status is draft. Source
verification records, if added, describe exactly the source/statement check
actually performed. `external_dependency` appears only on these records,
not on the ordinary theorem.

Use this source URL verbatim in each `external_dependency.source_url` and
`sources.references`:

`https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf`

Source title: S. Smale, *An Infinite Dimensional Version of Sard's Theorem*,
American Journal of Mathematics 87 (1965), 861–866, §1, Theorem (1.6) and
proof of Theorem (1.3), pp. 862–863. The two exact formulations below expose
the local steps in that proof, not invented theorem numbers. In particular,
the second is a localized proof consequence, not a separately numbered
theorem in Smale.

## Exact external contracts

Record 1 `external_dependency.exact_statement` / visible Statement:

> Assume AC. Let f:M→N be a C^h Fredholm map, h≥1, between Hausdorff
> second-countable real Banach manifolds. There is a sequence of closed
> subsets C_j of M whose interiors cover M, such that each C_j is contained
> in a Fredholm normal-form neighborhood W_j, the restriction f|C_j:C_j→N
> is proper, and f(W_j) lies in a target chart. Here proper means inverse
> images of compact sets are compact. A Fredholm normal-form neighborhood
> means source and target coordinates in which f(u,v)=(u,g(u,v)), with
> v in a finite-dimensional space K, g valued in a finite-dimensional space
> Q, and the first coordinate in a Banach space R.

The normal-form chart may be shrunk first; the closed proper neighborhoods
are chosen subordinate to it. This contract includes the countable
localization and closed-neighborhood bookkeeping that the published proof
currently omits. No infinite-dimensional closed ball is asserted compact.

Record 1 `local_proof_attempt`: "The authored draft FA normal-form lemma was
read in full. A compact ball in the finite-dimensional kernel coordinate
controls subsequences while convergence of the image fixes the range
coordinate. The closed subordinate neighborhood, global target-chart
localization, and countable-cover details have not been authored and
certified as local library lemmas; this source-backed package is explicitly
assumed under the owner's inclusion instruction."

Record 1 `necessity`: "Supplies the countable proper closed restrictions used
to cover all critical values in the repaired Sard–Smale proof."

Record 2 `external_dependency.exact_statement` / visible Statement:

> Assume AC. Let f:M→N be a C^h Fredholm map of fixed index m between
> Hausdorff second-countable real Banach manifolds, with integer h≥1 and
> h>max(m,0) (also allowing h=∞). Let W be a source open set and V a target
> chart neighborhood with f(W)⊂V, in which f has Fredholm normal form
> (u,v)↦(u,g(u,v)), v∈K and g(u,v)∈Q, with K,Q finite dimensional and
> dim K−dim Q=m. If C⊂W is closed in M and f|C:C→N is proper, then
> f(C∩Crit(f)) is closed and nowhere dense in N, where
> Crit(f)={x∈M: Df(x) is not surjective}.

Record 2 `local_proof_attempt`: "The normal-form derivative is onto exactly
when D_v g is onto. On each fixed-u slice finite-dimensional Sard excludes
an open set of critical values; if Q=0 there are no critical points in W.
Properness and closedness of the critical set supply closed images. These
steps and their chart-localization details have not been authored and
certified as a local category lemma; the localized Smale proof consequence
is explicitly recorded as external."

Record 2 `necessity`: "Turns each proper local restriction's critical image
into a nowhere-dense set, enabling the residual-values conclusion."

AC is deliberately sufficient, without asserting optimal choice strength.
The local arguments are understood; the records distinguish an unestablished
library prerequisite from mathematical uncertainty about the statement.

## Existing theorem: statement and complete relative derivation

State:

> Assume AC. Let P:X→Y be a C^h Fredholm map of index m between
> Hausdorff second-countable real Banach manifolds. If h>max(m,0), with
> h a positive integer or ∞, the regular values of P form a residual subset
> of Y. A value y is regular when every x∈P^{-1}(y) has surjective
> derivative, including vacuously when its fiber is empty.

The only mathematical change to the current statement is an explicit
sufficient choice assumption; Hausdorff/real/second-countable language fixes
the intended Banach-manifold convention. Preserve its stable ID. Keep the
existing published `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds`
as the temporary definition supplier rather than deleting/repointing an entire
published definition graph during this bounded repair.

Immediately before `## Proof`, or as its opening plain paragraph, print the
exact requested string:

**proof uses external results not yet established in this library**

The Facts section must name the two records as external assumptions with
body wikilinks; the theorem's `deps` must include them. Do **not** put them
in `external_refs`: these are genuinely load-bearing proof prerequisites.
The dependency graph then automatically propagates the unproved marker to
consumers. The theorem itself remains an ordinary theorem with a proof;
setting its `proved_here: false` would violate the schema's remark-only rule.

Exact sufficient theorem dependencies:

- `def-axiom-of-choice`;
- `def-fredholm-maps-and-regular-values-on-countable-banach-manifolds`;
- `def-nowhere-dense-meagre-and-residual-subsets`;
- the two new external record IDs above.

The old direct finite-dimensional Sard edge is unnecessary for this relative
proof: Sard is used inside external record 2, whose source contract is now
the explicit assumption. No draft FA proof must be imported into the
published theorem in this minimal route. The source records can use the
same existing published Fredholm definition and residual-set definition for
terminology; their normal-form notation is explicitly defined in Statement.

Complete relative proof:

1. Let Crit(P) denote the non-surjective derivative locus. Apply external
   record 1 to obtain closed sets C_j whose interiors cover X, with the
   specified normal-form and properness properties. In particular,
   X=⋃_j C_j.
2. For every j put B_j=P(C_j∩Crit(P)). The differentiability threshold and
   fixed-index assumption of external record 2 hold for P, so that record
   makes B_j closed and nowhere dense in Y.
3. A value is not regular exactly when it is the image of some critical
   point. Every such point belongs to some C_j. Conversely, each point of
   B_j is a critical value. Hence the set of nonregular values is exactly
   ⋃_j B_j, a meagre subset of Y by the declared category definition.
4. Its complement, the set of regular values, is residual by that same
   definition. This also handles X empty and values outside P(X).

This argument supplies every inference after the two explicitly external
contracts. It never represents those contracts as locally proved.

## Source scope and evidence limits

Abbondandolo–Majer, Montreal Theorem 2.19, printed p. 78, states a broader
version: M need only be Lindelöf and N need not be second-countable. It
directs the reader to Smale for the proof. Current library Banach manifolds
are second-countable; the reused published identity is the source's genuine
specialization. The coverage row must say this explicitly and retain the
broader statement in its source description. Do not silently claim the
entire Lindelöf variant has been implemented through definitions that force
second countability. The existing selected consumer needs the specialization.

Source access and hashes are in
`research/phase-2-remaining-27-step8-sard-smale-investigation.md`. Smale was
retrieved completely; extraction on p. 863 contains damaged lines, so source
verification must not claim a flawless line-by-line transcription. The
local formulas and relative derivation above have been independently checked.
If a publication-source receipt requires exact visual confirmation of the
damaged passage, inspect that PDF page before issuing that receipt; a source
citation alone is not a fabricated inspection.

## Graph, page order and integration constraints

Verified against tools/step8-changes.mjs, tools/auditor-created-items.mjs and
the published-modified regression in tools/autopilot/test/step8-changes.test.mts:
insert record 1 then record 2 after the applicable current FA definitions on
the existing FA page. Record 2 takes a given proper normal-form restriction;
it need not depend on record 1. Neither new record may depend on the later
DT definition. Use the FA definitions or fully state the terminology.
The published theorem remains on DT-4 (order 523) with its stable ID, outside
all run manifests. Add the necessary DT prerequisite edge to the earlier FA
page. Register only the new records in exactly one batch-3 manifest and the
canonical FA inventory/contracts. No new page or whole-DT-page selection is
needed. Do not add the preexisting theorem to a run manifest: that would
wrongly present it as auditor-created and fail origin integrity.

The new AC clause is an interface change. It requires actual direct-consumer
inspection and propagation only where necessary under the repository's
interface-change protocol. Source-record status and publication readiness
must be reconciled explicitly: no published theorem should be represented
as publication-ready while its new dependency records remain unsupported
drafts. The old judge stamp does not certify this new proof or dependency
graph. New external records receive source checks, never invented proof
judgments. Relative-proof checks may certify the theorem only with its
external dependency label preserved.

The existing canonical ledger should retain the future local-proof obligation
for the two planned DT-4 lemmas even if the externally dependent theorem is
accepted now. Distinguish "included with external prerequisites" from
"all local proof debt retired". The earlier FA supplier-publication dependency
for a fully internal proof remains relevant to that future retirement,
although this minimal external route does not depend on those draft items.

Use ordinary 8-scope -> render -> freeze -> changes-judge -> closure/stamps.
The modified published theorem is included in targeted judge scope even
without a run-manifest owner. New records require genuine current Step-8
author dispatch evidence. recover-step8 is inapplicable here: no suffix has
completed yet, and it requires prior suffix receipts. Do not skip scope gates
or reopen Step 7. This route was checked by the investigator after the first
draft of this proposal; it replaces the initial DT-placement/recovery design.
