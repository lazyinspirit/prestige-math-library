# FA terminal evidence — queue b, item 4

Item: `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`.
Decision: accepted-after-review; no item, dependency, or contract bytes changed.

Read the full item and direct prerequisites `def-radon-measure-on-an-lch-space`, `def-regular-borel-measure-on-an-lch-space`, and `def-compact-support-c-c-and-c-zero-on-an-lch-space`; the Radon A/B context, batch-3 conventions/manifest/coverage, reader-3 and refute-3 record, batch and identical merged contracts, Alpha section 35, and both Terra rejections. There is no prior item-specific risk_review. The assertion gives the page's strong all-Borel compact regularity, together with outer regularity, from finite compact mass and sigma-compactness of every open set.

The initial rejection was valid: infinite total mass prevents a global complement/subtraction proof. Sol repaired this by working inside finite-measure relatively compact opens. The final rejection correctly observes that the complement of a relatively open set need not be compact, but overlooks step 2.1, which explicitly establishes compact inner regularity of every relatively closed subset of V. Consequently the next step's compressed interchange is valid in its stated context.

Here is the exact complement argument, independently checked. Let E be in R_V and epsilon>0. Choose compact K inside E with mu(E\K)<epsilon. The relatively open V\K contains V\E with that same excess, so V\E is outer regular. For inner regularity of V\E, choose relatively open O containing E with mu(O\E)<epsilon/2. Its relatively closed complement F=V\O lies inside V\E, and the omitted mass is <epsilon/2. Step 2.1 supplies compact H inside F with mu(F\H)<epsilon/2. Then H is a compact core of V\E with total error <epsilon. All quantities are finite since mu(V)<infinity. This is not the invalid assertion that F itself is compact.

The remaining proof also checks: intersect a compact exhaustion of V with a relatively closed set to exhaust that closed set by compacta; each intersection is closed in a compact subset of V. The sigma-compact LCH exhaustion admits an increasing relatively compact open cover by finite neighbourhood covers of its compact pieces. On finite V, countable unions preserve compact approximation by continuity from below and finitely many compact cores, and preserve outer approximation by summable errors. Thus R_V is a sigma-algebra containing opens. Exhausting E by E intersect V_n proves global compact inner regularity also when its mass is infinite. The disjoint zero-based slices in step 5.1 have open-in-X approximants because V_n is open; their union's excess is bounded by the summable errors. Infinite-mass outer regularity is automatic. No infinity-minus-infinity subtraction occurs.

Source status: familiar. Finite-measure regularity, compact exhaustion, and the two successive epsilon/2 approximations are familiar elementary measure/topology arguments. No uncertain external result was needed, and no external source verification is claimed.

Focused validation: precheck pass; rendercheck pass; strict proof-contract check 1/1, zero errors/warnings. No new judge verdict or stamp. No unresolved obligation. Next action: record exact current bytes, then begin queue item 5 after recorder success.

## Context reseal during item 5

Lusin's restored Radon interface changed this item's shared-page context hash. Read-only comparison confirms unchanged item bytes `103403d210879d8f460e6c1545803839bb9638a714a29ada790094913951c7c0`. The finite-E Lusin assertion is consistent with this theorem's stronger all-Borel conclusion under sigma-compact-open hypotheses; neither theorem's proof depends on the other's conclusion. The mathematical decision remains accepted-after-review. Re-record it after resealing item 1 and confirming items 2/3 remain current, preserving historical rows. No new judge call or outcome.
