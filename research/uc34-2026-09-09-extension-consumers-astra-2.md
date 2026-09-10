# Extension consumers: bounded audits

2026-09-09. Owner-authorized item-only repairs; no judges, shared or live edits.
Elementary explicit counterexamples need no new external source recovery.

## cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth

Disposition A-R. The explicit constant-one/zero-extension counterexample was
sound, but its factual supplier claimed cutoff separation was necessary for
smooth extension, whereas the cited lemma proves sufficiency only. Removed
that false necessity assertion and unused extension dependency. Proved the
jump explicitly with epsilon=1/2, x=delta/2; no CC is needed.

Before SHA256: `9704d0121fd60f0f2370507e5e06f848675f06e3706f39642802ec3b3363a6c3`.
After SHA256: `ba719721df5faf10621ce3a86c97d426c13df58ace6daacd9ffa90824f94e168`.

Suppliers read in full, all published: `def-continuity-real`,
`prop-smooth-maps-are-continuous`, and
`def-ck-and-multi-index-notation-in-several-variables`. Read the full repaired
extension lemma and its cutoff/pasting interfaces in the preceding assigned
audit. The counterexample uses none of their existence claims.
Targeted precheck and rendercheck: each one file, pass. Replaced stale audit
stamp with local verification. No independent acceptance claimed.

## fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff

Disposition A-R. The same false necessity inference occurred here. Preserve
the exact false claim about the zero-extension recipe (not the legacy ID's
suggestion that no smooth extension exists); supply the omitted closed-set
witness C={1}, and explicitly distinguish the smooth constant-one global
extension from the discontinuous zero extension. No CC is needed.

Before SHA256: `279261ba2d7d55174cdec3d222a6345872f2223fa2fb3a885fd8141cfe062f76`.
After SHA256: `eb4bfffd25ed2ba736b11e750b187a2fb291a9cfcc8080e7c7625c31b6b6f43d`.

Same three actual published suppliers as the preceding item; no cross-B-page
counterexample dependency. Targeted precheck and rendercheck each pass.
Removed stale audited stamp, recorded local verification, proof ai-altered.

## lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions

Disposition A-R. Before SHA256:
`9015b7228b495bb3a7c76aa2b1c1e0cc8cb81cb81704ec5c870f573de8ff735f`.
After SHA256:
`51be7d1b7b63223e18f73dd84d4ced13aa365bf585777abd820d94c18834b7ce`.
Home `integration-of-forms-and-the-general-stokes-theorem`, order 469.

Old F3 quoted the smooth-extension supplier without its countable-choice
hypothesis, although the claimed integrability did not require global
extension existence at all. Old F2 imported a whole smooth double to justify
local Euclidean extension that is already the definition of half-space
smoothness. Removed both dependencies and the unnecessary global auxiliary
extension construction; retained every statement conclusion. Independence of
an auxiliary extension means restriction back to the given coefficient before
the prescribed zero extension, not equality of arbitrary Euclidean extension
integrals. The proof now states that distinction explicitly.

Read all original direct suppliers in full and new half-space smoothness,
ambient compactness, and compact-Hausdorff closedness suppliers; also checked
the compact-null/content-zero lemma used by the sufficient Lebesgue-criterion
proof. New direct suppliers are published:
`def-smooth-function-on-a-relatively-open-subset-of-a-half-space` (order 467),
`lem-compactness-of-a-subspace-is-ambient`, and
`thm-compact-subset-of-a-hausdorff-space-is-closed` (both earlier topology).
Retained published suppliers: `def-compactly-supported-differential-form`,
`thm-lebesgue-criterion-in-rn`, `def-null-and-content-zero-in-rn`,
`cor-archimedean-reciprocal`, and
`lem-compactly-supported-riemann-integral-is-well-defined`.

Proof route: compactness is intrinsic to K, hence K is Euclidean closed;
the increasing relative open cover |f|<j yields a bound without arbitrary
selections. Off K the function is locally zero, and positive-height points
inside U have Euclidean smooth neighbourhoods by definition. An explicit
m-by-...-by-m face grid has m^(n-1) cubes of side 2R/m and total volume
(2R)^n/m, including n=1. Thus the possible discontinuity face has content
zero. The sufficient direction of the Riemann-Lebesgue criterion supplies
integrability; its converse's countable-union/CC use is not consumed. For
this application all bad oscillation sets lie in the explicit face and have
finite covers directly. The compact-support integral lemma supplies rectangle
independence. No countable choice is introduced and no new Phase-2 supplier.

Targeted precheck initially requested canonical dependency-phase order; adopted
it, then precheck passed (one file). Targeted rendercheck passed (one file).
Stale judge/audited stamps replaced by local verification only.

## Shared handoff

Only the three owned published items and this report changed. Parent owns
ledger/canonical/prose reconciliation. The first counterexample is on B446;
the false statement is on A445. Each uses earlier published continuity and
smoothness suppliers, not another B example. None of these three consumers
requires the extension lemma's countable-choice existence clause after repair.
These bounded audits do not certify their full transitive closures.
