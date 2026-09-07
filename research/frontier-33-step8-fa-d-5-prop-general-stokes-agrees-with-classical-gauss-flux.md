# FA terminal evidence — queue d/5

Item: `prop-general-stokes-agrees-with-classical-gauss-flux`.
Decision: repaired. Source status: verified.

Independently read the current item, all four original direct dependencies
(including the finite-parametrization proof already read for queue item 1),
the integration A/B pages, batch-13 manifest, coverage conventions, author
notes, exact proof contract and critical-risk record, both Terra rejections,
and Sol's exact adjudication and group-d report. Also read the classical
elementary-solid definition, simple-solid definition, finite-patch definition,
regular-patch definition, divergence-form identity and Jordan boundary
criterion. These recover the supplied presentation and neighborhood hypotheses
rather than infer them from an arbitrary region.

Sol correctly placed AC_omega on the integral consequence. The last rejudge
correctly objects that the proof did not exhibit data meeting F2. In particular,
the published classical patch definition only requires C^1 extensions, which
are not the smooth extensions demanded by F2. I do not upgrade those supplied
patches or reduce the scope to presentations with smooth parameters.

The independent repair makes the volume data explicit and identifies boundary
integrals by transitivity through their common volume integral. The classical
Gauss theorem is already proved independently (coordinate flux plus scalar
Riemann integration), so using it in this comparison is not circular.

In detail: the simple-solid definitions imply E is compact Jordan measurable,
so its boundary is content zero. A compact smooth three-dimensional region
has finitely many components, since components are open by relative coordinate
balls/half-balls. The same local neighborhoods show that each component has a
connected dense interior: at each point the interior part of such a chart
is connected and dense, so exactly one interior component approaches it;
closures partition the component into relatively open sets. Thus its closure
is the whole component. These interiors are bounded open connected Jordan
domains, because their boundaries lie in the content-zero boundary of E.
Their identity maps, extended to the closed components, satisfy every F2
hypothesis: orientation is the standard one, open images are disjoint, closures
cover E, and local target boundary coordinates have smooth ambient extensions.
This identifies the intrinsic volume integral with the scalar integral over E;
finite additivity and the null boundary justify replacing interiors by E.

F1 gives the intrinsic boundary flux as that volume integral. The independently
published F3 gives the supplied classical presentation's flux as the same
scalar integral. Hence the boundary values coincide without applying the
smooth parametrization theorem to C^1 surface patches. The determinant identity
is separately pointwise valid even for C^1 parameters; outward-first agrees
with the outward cross-product convention. Compactness supplies support of
the restricted smooth field. The field's open neighborhood, region orientation,
and meaning of smooth region are now explicit in the statement. The actual
elementary-solid definition is nonempty; a separately allowed empty region is
handled only by the empty-sum convention, not claimed to meet that definition.

The coordinate divergence calculation now cites the unconditional
`lem-divergence-form-identity` directly, so it no longer points to the
choice-dependent integral theorem. The other new direct citations are
`def-simple-solid-region-in-a-coordinate-direction` and
`thm-jordan-boundary-criterion`; all three were read in full and left unchanged.
The owning manifest and this item's proof contract have synchronized deps,
claims, citation quotes/uses, and canonical step anchors. The seven final deps
are exactly F1–F7 in the final item. No dependency repair licence or new lemma
was needed.

Authoritative verification:
https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf — Lee,
Introduction to Smooth Manifolds, second edition, Lemma 16.30 and its complete
proof, divergence definition, and Theorem 16.32 with its complete proof,
printed pp.423–424 (PDF indices 440–441). The source verifies the contraction
with the unit normal, the exterior-derivative formula for divergence, and the
outward-normal Stokes derivation. Its smooth Riemannian theorem does not
supply smoothness of the library's C^1 classical patches; that qualification
was checked in the published local definitions. The finite-component identity
parametrizations and common-volume comparison are the independent local repair.

Validation: adopted precheck's canonical steps 1.1, 1.2, 1.3, 2.1, 3.1;
focused precheck passed (1/1); strict restricted batch-13 proof-contract check
passed (1/1, 0 errors, 0 warnings); focused rendercheck passed. No new judge
verdict, third judgment, or pass stamp was created.

Unresolved mathematical obligations: none. Next action: record these exact
final bytes, then verify the queue's five terminal receipts. This is the final
queued item; no further substantive review is queued for this dispatch.

## Dispatch completion checkpoint

All five queue entries were accepted by the recorder in their frozen order:
1 accepted-after-review; 2, 3, 4, 5 repaired. Their exact terminal evidence is
in `research/frontier-33-step8-terminal-resolutions.jsonl`. No queued item was
changed after its successful record.

Final citation audit initially found five old source quotes in batch-13
consumer contracts after the statement clarifications to queue items 2 and 5.
Synchronized those contract quotes to the exact current statements, without
editing any consumer item or changing its proof: the consumers are
`lem-euclidean-stokes-for-a-compactly-supported-form`,
`lem-partition-localization-of-stokes`,
`cor-a-nonzero-period-obstructs-exactness-and-bounding`,
`lem-divergence-form-identity`, and
`ex-divergence-theorem-on-a-euclidean-ball`.

Final citation-fidelity check over owning batches 8, 13 and 16: 119 citing
items, 333 citations, zero missing quotes and zero widening candidates.
Strict batch-13 contracts: 50/50, zero errors and warnings. Repository depcheck
exited zero: no cycles, all references resolve, no draft items on published
pages; existing unrelated warnings remain, with no diagnostic naming a queued
item. Step-8 guard: 15,423 baseline items, 75 changed, all 75 licensed,
zero created/deleted, zero errors/warnings.

Terminal-resolution check sees all five group-d records and reports only the
missing engine-produced successful dispatch result for this still-running
FA dispatch (other live groups have the same pending result condition).
It reports no group-d queue-order, source, or paid-rejudge evidence error.
The engine must emit `research/frontier-33-dispatch/final-adjudicator-step8-fa-d-round-1.result.json`
after this dispatch returns; I did not fabricate or write that attestation.
No mathematical work remains in this queue. Next action: return completion
so the engine can emit the dispatch result and close its normal terminal gate.
