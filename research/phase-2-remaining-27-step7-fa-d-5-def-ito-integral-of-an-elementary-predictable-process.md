# Final adjudication: item 5

Run phase-2-remaining-27, group d, queue position 5. Disposition repaired;
source status familiar. Item 4 was recorded before this review.

Read the current definition, elementary-integrand supplier in full, the
already-inspected Brownian definition and AC suppliers, the owning manifest
entry, contract and risk notes, both Terra rows and both Sol records. The
Ito A/B pages and coverage notes were already read. Read the complete
representation-independence lemma to resolve the numerical reference.

Sol's zero-summand case fixes the original adaptedness error: for t<t_k
the increment is identically zero, and for t>=t_k the coefficient and both
Brownian coordinates are F_t measurable. Continuity holds on the single
Brownian continuity event; the finite sum is defined on every outcome.
At time zero all increments vanish. Common deterministic refinement splits
increments by telescoping, so linearity is a literal finite identity.

The rejudge correctly objects to the dangling reference to "Item 6 below".
The actual A-page item 6 is
lem-elementary-ito-integral-is-independent-of-the-step-representation.
It has the required hypotheses and conclusion and depends on this definition.
Its proof refines the two partitions and uses Tonelli to obtain
sum_j (w_{j+1}-w_j) E|eta_j-eta'_j|=0. All interval lengths are positive,
so each coefficient difference is zero almost surely. On the finite
intersection of these probability-one events all defining sums agree,
including their time truncations. Its longer conditional-moment calculation
has integrable cross products because coefficients are bounded and Brownian
increments are square integrable. Thus the supplier actually establishes
the required almost-everywhere-class independence.

Replaced the numerical reference by that exact lemma and registered it in
justified_by both in the item and its manifest. Putting it in deps would
create a cycle; the schema's well-definedness mechanism is the correct
interface. Updated only this item's endpoint/risk notes in its owning and
aggregate contracts. The supplier is an existing same-batch item, so the
owning cross-batch input requires no additional row; refreshed the unified
ledger after the interface change. No supplier was edited or new item added.

The mathematics here is familiar finite-sum algebra and measure-zero
bookkeeping; no external verification was needed. This does not assert a new
reading of Lawler or van der Vaart. Initial Terra context:
bd68c83ee801e84876215be76445d3530e033e955b24471ef7a7142543632c85.
Final Terra context:
fb55d048ab1ecac3168691a8d3922c9e4a607f8024620fbc5692eb3e9d0f8e9a.

Focused rendercheck: 1 checked, 0 errors/warnings. Focused precheck: 0 checked,
exit 0, since this is a definition. No judge verdict or stamp was created.
Next action: terminal recording, then item 6 only after acceptance.
