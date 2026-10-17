# Owner resolution apply result — Batch 105

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `105`  
Resolution pass: guarded APPLY of the root-approved exact proposal  
Decision: **escalate for one proof-tag correction; mathematical source repairs are applied**

## Authority and guarded application

The root's [actual writer declaration](../ROOT-actual-writer-declaration.json) grants the exact three-file source scope. Before writing, each canonical file compared byte-for-byte equal to its approved `before/items/<id>.md` snapshot and to the archived fresh-current preimage. The applied canonical files compare byte-for-byte equal to their approved raw proposed files and to the archived `after/items/<id>.md` copies.

Changed canonical paths:

- `items/def-certified-hybrid-event-enclosure.md`
- `items/alg-safeguarded-hybrid-event-location-and-restart.md`
- `items/thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted.md`

Archived full current preimages are in `before/items/`; raw root-approved proposals are in `approved-proposed/items/`; full applied files are in `after/items/`. Unified before-to-after diffs are in `diffs/before-to-after/`. Each approved-proposal-to-after diff is empty (exit 0), so no normalization or deviation from the exact approved files was made. The after files are the raw approved proposals.

## Current source excerpts

### Definition item 3 — `items/def-certified-hybrid-event-enclosure.md:38`

```text
3. A finite error-ledger update rule and a certified separation bound $\delta>0$ between consecutive selected exact hybrid event times on the horizon. The provider must supply a finite sound justification or validation for every successor local or total error bound it returns. When a no-event trial is accepted, append its dense panel to $U$, retain the aligned-start discrepancy $E$, and certify valid local and total reference-error bounds over the enlarged prefix. When a prefix ends at a selected transverse event, let $\tau$ be the unique selected exact event time in the certified physical-time bracket and let $\widehat\tau$ be the bracket's upper endpoint. Suppose the whole bracket has certified signed derivative margin $\nu>0$, the dense guard residual at $\widehat\tau$ is bounded by $\varepsilon$, the total reference error on the bracket is bounded by $\eta_{\rm ref}$, the reset has state and time Lipschitz constants $L_R,L_{R,t}$, and the incoming and outgoing fields have norm bounds $M^-,M^+$ on the intervals required for comparison. A sufficient conditional provider rule is to justify $0\le\widehat\tau-\tau\le\Delta_{\rm next}$ with $\Delta_{\rm next}=(L_g\eta_{\rm ref}+\varepsilon)/\nu$, require $\Delta_{\rm next}<\delta/3$, and set $E_{\rm next}=L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta_{\rm next}$ for the exact reset evaluated at the reported state. If the reported reset is computed as $\widehat R$ with a separately certified error $\|\widehat R-R\|_2\le\varepsilon_R$, add $\varepsilon_R$ to this $E_{\rm next}$ bound; exact reset evaluation has $\varepsilon_R=0$. The provider must validate the hypotheses and inequalities and certify the next prefix's total reference-error bound with this aligned-start discrepancy included (or provide another sound proof of that total bound). Since $\widehat\tau-\tau\le\Delta_{\rm next}<\delta/3<\delta$, the next selected exact event cannot precede $\widehat\tau$. These formulas are a sufficient provider-supplied rule, not inequalities proved by this definition itself. If any proof obligation, required bound, separation certificate, or strict lag test is missing or invalid, no restart ledger update is certified. A local error bound alone does not establish the total reference bound; prior reset-state errors must be included in $\eta_{\rm ref}$.
```

### Algorithm direct supplier and step 9 — `items/alg-safeguarded-hybrid-event-location-and-restart.md:15,55`

Added dependency:

```yaml
  - lem-reset-error-after-a-mistimed-hybrid-event
```

Current step 9:

```text
9. If the accepted-event count is already $B_{\rm event}$, return `budget-exhausted` with the certified prefix without applying another reset. Otherwise let $\nu>0$ be the certified signed derivative margin on the whole selected physical-time root box and compute $\Delta=(L_g\eta_{\rm ref}+\epsilon_{\rm obs})/\nu$ by [[lem-transverse-hybrid-event-time-error]]. The selected box contains its unique exact root $\tau$, and step 8 sets $\widehat\tau$ to that box's upper endpoint, so $0\le\widehat\tau-\tau\le\Delta$. If the certified separation bound is missing or $\Delta\ge\delta/3$, return `inconclusive` without restarting, since another selected exact event may occur before the reported time. Otherwise, separation by $\delta$ ensures no next selected exact event occurs before $\widehat\tau$. Check that $(\widehat\tau,U(\widehat\tau))$ lies in the reset domain and that the reset value lies in the next mode's state domain; a failed check returns `domain-failure`. Otherwise apply the reset. A root at $T$ is processed by this same rule, and the output at $T$ is post-reset. The exact reference trajectory has reset at $\tau$ and followed the outgoing field through the alignment time $\widehat\tau$; its flow over this lag contributes at most $M^+\Delta$. By [[lem-reset-error-after-a-mistimed-hybrid-event]], set the next aligned-segment state-error bound to
$$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta.$$
Then discard the pre-reset reconstruction, set the current reported time and state to $\widehat\tau$ and the reset value, start a new accumulated reconstruction in the selected mode, append the event certificate, and increment the accepted-event count. Before processing any later trial interval, step 2 must obtain certified provider data whose total reference-error bound is valid on that whole accumulated prefix and includes this aligned-start discrepancy (or is independently justified on that full prefix); if the provider cannot certify it, return `inconclusive` with the certified prefix. Continue from step 1. Any exhausted step, root-box, or event budget returns `budget-exhausted` with the certified prefix.
```

### Soundness theorem Statement, reset Fact, and proof step — `items/thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted.md:16,33,53,65`

Second added dependency:

```yaml
  - lem-reset-error-after-a-mistimed-hybrid-event
```

Current Statement:

```text
Assume every trial interval supplied to [[alg-safeguarded-hybrid-event-location-and-restart]] has valid certified hybrid event-enclosure data, each accepted event is transverse in its declared orientation on its certified root bracket, each accepted event's computed lag bound is less than $\delta/3$ for the certified event-separation bound $\delta$, and each finite budget is a nonnegative integer. Every execution terminates after finitely many calls. A `no event` step is returned only if every active exact guard has a complete root-isolation result, no unresolved root box, and every certified root is proved to cross strictly opposite to the transition's declared orientation; then no active guard event occurs in the step. A returned event box contains exactly one root for its guard and has a derivative enclosure in the declared direction. When it is certified to be the earliest enabled root and event order is unambiguous, its transition is the actual first transition selected by the fixed priority rule. The event-time estimate satisfies the bound in [[lem-transverse-hybrid-event-time-error]]. At a successful restart, the reported next aligned-start ledger value is a valid bound on the discrepancy of the reported and exact reference states at that time. Any later trial is processed only after its provider certifies a valid total reference-error bound on the whole accumulated prefix, accounting for this aligned-start bound or supplying another sound proof of the full-prefix bound; otherwise the procedure returns `inconclusive` before making a later event claim. Any incomplete enclosure, unresolved or nontransverse root box, ambiguous event order, lag bound not below $\delta/3$, failed reset-domain check, or exhausted budget returns an explicit non-success status and proves no no-event claim.
```

Current [F7]:

```text
[F7] [[lem-reset-error-after-a-mistimed-hybrid-event]]: for incoming total error $\eta_{\rm ref}$ on the interval between the true event time $\tau$ and reported upper endpoint $\widehat\tau$, with $0\le\widehat\tau-\tau\le\Delta$, reset constants $L_R,L_{R,t}$ and incoming/outgoing field bounds $M^-,M^+$, the state discrepancy at the common reported time is at most $L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta$, under the lemma's tube and domain hypotheses.
```

Current proof step 1.5:

```text
1.5 At each accepted event, the selected physical-time box contains its unique exact root $\tau$ by [F3], and the algorithm reports its upper endpoint $\widehat\tau$ by [F1]. Step 1.4 and [F4] give $0\le\widehat\tau-\tau\le\Delta$. Since $\Delta<\delta/3$ and consecutive selected exact event times are separated by $\delta$, the next selected exact event cannot occur before $\widehat\tau$. Thus, at the common reported time, the exact reference has reset at $\tau$ and both compared states are in the outgoing mode. Apply [F7] with the provider's valid total incoming error and reset/field bounds to obtain the stated next aligned-start ledger value. Starting from the algorithm's initialization $E=0$, induction over accepted events proves every reported restart ledger bound. Before a later event can be certified, step 2 requires the provider to validate a total reference-error bound on the whole enlarged prefix; [F2] and the Definition reject missing or unjustified data, so no later event estimate uses an unvalidated ledger. [given, F1, F2, F3, F4, F7, step 1.4, algorithm initialization, algebra, induction]
```

## Check results and remaining disposition

- All three byte guards passed before writing: current canonical = approved before snapshot. All three post-write comparisons passed: current canonical = raw approved proposal = archived after copy.
- The 3-file scoped precheck was run exactly once after application. It failed only on the soundness theorem's trailing tag `algorithm initialization`; full output is archived at `checks/precheck.txt`.
- Final explicit proof-layout was run on exactly the same three changed item paths, after the last source write. It reports one `missing-or-invalid-tags` defect at proof step 1.5 for that same tag; full output is archived at `checks/proof-layout.txt`.
- No allowed layout normalization was applied. The authorized normalization list permits joining standalone tag lines and renumbering phases; neither operation fixes this invalid tag. The exact proposal-to-after diffs are empty. Root disposition is required for the smallest remaining proof-format correction: replace/remove `algorithm initialization` using an accepted justification tag already supported by the theorem's `Given`/algorithm premise, then rerun the scoped precheck and final proof-layout on these same three paths. No mathematical text or consumer interface should change for that correction.
- No consumer source or page quote required refresh during this apply. Preserve the already checked consumer dispositions in the approved proposal. The original time and reset lemma Statements remain untouched.
