# Batch 105 ledger-interface follow-up — guarded proposal

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `105`  
Role: `scope-repairer`  
Authorization: **read-only proposal only**. No canonical source, page, manifest, contract, control, readiness, hash, level, gate, test, or runtime file was changed. This is new research evidence; it does not replace either native receipt.

## Re-anchoring and defect confirmation

Read the native [batch 105 final review](../../numerical-optimization-dynamics-2026-10-16-scope-review/batch-105/review-1.json) and original [batch 105 repair receipt](../../numerical-optimization-dynamics-2026-10-16-scope-review/batch-105/repair-1.json), then read the current source clauses proposed below and their suppliers/consumers. The final review escalates the unproved successor-ledger rule in `def-certified-hybrid-event-enclosure` and the undeclared reset-error use in `alg-safeguarded-hybrid-event-location-and-restart`. The current `thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted` proof establishes event-location soundness and lag, but does not prove that restart ledger values remain valid across accepted events.

The time lemma's actual proof uses the provider's valid total error bound and the whole-bracket derivative lower bound; it does not need the successor-ledger recurrence. The reset lemma proves the aligned-time estimate from incoming state error, event-time lag, reset Lipschitz bounds, and incoming/outgoing field bounds. For a reported upper endpoint, `0 <= hat_tau - tau`; if this lag is below `delta/3` and `delta` separates consecutive selected exact event times, no next selected exact event precedes the reported time. The reset lemma then applies at the common reported time. The remaining required step is to require the next provider certificate to validate its total error on the new prefix using the valid aligned-start error, or another sound proof of that total bound.

No reverse dependency from `def-certified-hybrid-event-enclosure` to `lem-transverse-hybrid-event-time-error` is proposed: the time lemma already depends on the definition. The Definition's successor formulas below are conditional provider rules that require provider-supplied justification, not conclusions asserted by the Definition. The algorithm and its soundness theorem declare the reset lemma directly.

## Exact source proposals

### 1. `def-certified-hybrid-event-enclosure`

Current `deps` are unchanged. In particular, do not add `lem-transverse-hybrid-event-time-error` here.

**Current complete item 3 (`beforetext`):**

> 3. A finite error-ledger update rule and a certified separation bound $\delta>0$ between consecutive selected exact hybrid event times on the horizon. When a no-event trial is accepted, append its dense panel to $U$, extend the local bound and total reference bound over the enlarged prefix, and retain the aligned-start discrepancy $E$. When a prefix ends at a transverse event with guard residual bound $\varepsilon$, crossing margin $\nu$, incoming and outgoing field bounds $M^-,M^+$, and reset constants $L_R,L_{R,t}$, the sufficient update is $\Delta_{\rm next}=(L_g\eta_{\rm ref}+\varepsilon)/\nu$ and $E_{\rm next}=L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta_{\rm next}$. This restart update is admissible only when $\Delta_{\rm next}<\delta/3$: then no later exact event occurs before the reported upper event-box endpoint, and the $M^+\Delta_{\rm next}$ term bounds the exact trajectory's outgoing flow over the lag. If the separation bound or strict lag test is unavailable, no restart ledger update is certified. The local error bound alone does not establish the total reference bound; prior reset-state errors must be included in $\eta_{\rm ref}$.

**Proposed exact replacement for item 3:**

> 3. A finite error-ledger update rule and a certified separation bound $\delta>0$ between consecutive selected exact hybrid event times on the horizon. The provider must supply a finite sound justification or validation for every successor local or total error bound it returns. When a no-event trial is accepted, append its dense panel to $U$, retain the aligned-start discrepancy $E$, and certify valid local and total reference-error bounds over the enlarged prefix. When a prefix ends at a selected transverse event, let $\tau$ be the unique selected exact event time in the certified physical-time bracket and let $\widehat\tau$ be the bracket's upper endpoint. Suppose the whole bracket has certified signed derivative margin $\nu>0$, the dense guard residual at $\widehat\tau$ is bounded by $\varepsilon$, the total reference error on the bracket is bounded by $\eta_{\rm ref}$, the reset has state and time Lipschitz constants $L_R,L_{R,t}$, and the incoming and outgoing fields have norm bounds $M^-,M^+$ on the intervals required for comparison. A sufficient conditional provider rule is to justify $0\le\widehat\tau-\tau\le\Delta_{\rm next}$ with $\Delta_{\rm next}=(L_g\eta_{\rm ref}+\varepsilon)/\nu$, require $\Delta_{\rm next}<\delta/3$, and set $E_{\rm next}=L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta_{\rm next}$ for the exact reset evaluated at the reported state. If the reported reset is computed as $\widehat R$ with a separately certified error $\|\widehat R-R\|_2\le\varepsilon_R$, add $\varepsilon_R$ to this $E_{\rm next}$ bound; exact reset evaluation has $\varepsilon_R=0$. The provider must validate the hypotheses and inequalities and certify the next prefix's total reference-error bound with this aligned-start discrepancy included (or provide another sound proof of that total bound). Since $\widehat\tau-\tau\le\Delta_{\rm next}<\delta/3<\delta$, the next selected exact event cannot precede $\widehat\tau$. These formulas are a sufficient provider-supplied rule, not inequalities proved by this definition itself. If any proof obligation, required bound, separation certificate, or strict lag test is missing or invalid, no restart ledger update is certified. A local error bound alone does not establish the total reference bound; prior reset-state errors must be included in $\eta_{\rm ref}$.

This keeps the generic finite-provider interface and the rational residual-tube checker as one optional branch. It also accommodates the already inspected batch 46 inexact-reset branch by allowing its separately certified additive $\varepsilon_R$ term. The item does not cite or acquire a dependency on the transverse-time lemma, so no dependency cycle is introduced.

### 2. `alg-safeguarded-hybrid-event-location-and-restart`

**Current complete `deps` block (`beforetext`):**

```yaml
deps:
  - def-hybrid-mode-guard-reset-system
  - def-certified-hybrid-event-enclosure
  - def-heun-quadratic-dense-output
  - alg-smooth-function-root-isolation
  - lem-transverse-hybrid-event-time-error
```

**Proposed `deps` block:**

```yaml
deps:
  - def-hybrid-mode-guard-reset-system
  - def-certified-hybrid-event-enclosure
  - def-heun-quadratic-dense-output
  - alg-smooth-function-root-isolation
  - lem-transverse-hybrid-event-time-error
  - lem-reset-error-after-a-mistimed-hybrid-event
```

**Current complete procedure step 9 (`beforetext`):**

> 9. If the accepted-event count is already $B_{\rm event}$, return `budget-exhausted` with the certified prefix without applying another reset. Otherwise let $\nu>0$ be the certified signed derivative margin on the selected box and compute $\Delta=(L_g\eta_{\rm ref}+\epsilon_{\rm obs})/\nu$ by [[lem-transverse-hybrid-event-time-error]]. If the certified separation bound is missing or $\Delta\ge\delta/3$, return `inconclusive` without restarting, since the exact reference may have another event before the reported time. Check that $(\widehat\tau,U(\widehat\tau))$ lies in the reset domain and that the reset value lies in the next mode's state domain; a failed check returns `domain-failure`. Otherwise apply the reset. A root at $T$ is processed by this same rule, and the output at $T$ is post-reset. The reference trajectory has already reset by $\widehat\tau$; its outgoing flow over the lag contributes at most $M^+\Delta$. Set the next aligned-segment state-error bound to
> $$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta,$$
> then discard the pre-reset reconstruction, set the current reported time and state to $\widehat\tau$ and the reset value, start a new accumulated reconstruction in the selected mode, append the event certificate, and increment the accepted-event count. Continue from step 1. Any exhausted step, root-box, or event budget returns `budget-exhausted` with the certified prefix.

**Proposed exact replacement for step 9:**

> 9. If the accepted-event count is already $B_{\rm event}$, return `budget-exhausted` with the certified prefix without applying another reset. Otherwise let $\nu>0$ be the certified signed derivative margin on the whole selected physical-time root box and compute $\Delta=(L_g\eta_{\rm ref}+\epsilon_{\rm obs})/\nu$ by [[lem-transverse-hybrid-event-time-error]]. The selected box contains its unique exact root $\tau$, and step 8 sets $\widehat\tau$ to that box's upper endpoint, so $0\le\widehat\tau-\tau\le\Delta$. If the certified separation bound is missing or $\Delta\ge\delta/3$, return `inconclusive` without restarting, since another selected exact event may occur before the reported time. Otherwise, separation by $\delta$ ensures no next selected exact event occurs before $\widehat\tau$. Check that $(\widehat\tau,U(\widehat\tau))$ lies in the reset domain and that the reset value lies in the next mode's state domain; a failed check returns `domain-failure`. Otherwise apply the reset. A root at $T$ is processed by this same rule, and the output at $T$ is post-reset. The exact reference trajectory has reset at $\tau$ and followed the outgoing field through the alignment time $\widehat\tau$; its flow over this lag contributes at most $M^+\Delta$. By [[lem-reset-error-after-a-mistimed-hybrid-event]], set the next aligned-segment state-error bound to
> $$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta.$$
> Then discard the pre-reset reconstruction, set the current reported time and state to $\widehat\tau$ and the reset value, start a new accumulated reconstruction in the selected mode, append the event certificate, and increment the accepted-event count. Before processing any later trial interval, step 2 must obtain certified provider data whose total reference-error bound is valid on that whole accumulated prefix and includes this aligned-start discrepancy (or is independently justified on that full prefix); if the provider cannot certify it, return `inconclusive` with the certified prefix. Continue from step 1. Any exhausted step, root-box, or event budget returns `budget-exhausted` with the certified prefix.

This only changes the reset-ledger supplier attribution and the restart contract. Steps 3–8 remain as written, including whole-interval root isolation, separate root-width and residual tolerances, endpoint-safe refinement, common-root tie certificates, orientation checks, aggregate finite budgets, and existing failure statuses.

### 3. `thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted`

**Current complete `deps` block (`beforetext`):**

```yaml
deps:
  - def-hybrid-mode-guard-reset-system
  - alg-safeguarded-hybrid-event-location-and-restart
  - def-certified-hybrid-event-enclosure
  - thm-smooth-function-root-isolation-soundness
  - thm-validated-residual-tube-certificate-sound
  - lem-transverse-hybrid-event-time-error
```

**Proposed `deps` block:** append `lem-reset-error-after-a-mistimed-hybrid-event`.

**Current complete Statement (`beforetext`):**

> Assume every trial interval supplied to [[alg-safeguarded-hybrid-event-location-and-restart]] has valid certified hybrid event-enclosure data, each accepted event is transverse in its declared orientation on its certified root bracket, each accepted event's computed lag bound is less than $\delta/3$ for the certified event-separation bound $\delta$, and each finite budget is a nonnegative integer. Every execution terminates after finitely many calls. A `no event` step is returned only if every active exact guard has a complete root-isolation result, no unresolved root box, and every certified root is proved to cross strictly opposite to the transition's declared orientation; then no active guard event occurs in the step. A returned event box contains exactly one root for its guard and has a derivative enclosure in the declared direction. When it is certified to be the earliest enabled root and event order is unambiguous, its transition is the actual first transition selected by the fixed priority rule. The event-time estimate satisfies the bound in [[lem-transverse-hybrid-event-time-error]]. Any incomplete enclosure, unresolved or nontransverse root box, ambiguous event order, lag bound not below $\delta/3$, failed reset-domain check, or exhausted budget returns an explicit non-success status and proves no no-event claim.

**Proposed exact Statement replacement** (adds the narrow ledger guarantee to the existing soundness claims):

> Assume every trial interval supplied to [[alg-safeguarded-hybrid-event-location-and-restart]] has valid certified hybrid event-enclosure data, each accepted event is transverse in its declared orientation on its certified root bracket, each accepted event's computed lag bound is less than $\delta/3$ for the certified event-separation bound $\delta$, and each finite budget is a nonnegative integer. Every execution terminates after finitely many calls. A `no event` step is returned only if every active exact guard has a complete root-isolation result, no unresolved root box, and every certified root is proved to cross strictly opposite to the transition's declared orientation; then no active guard event occurs in the step. A returned event box contains exactly one root for its guard and has a derivative enclosure in the declared direction. When it is certified to be the earliest enabled root and event order is unambiguous, its transition is the actual first transition selected by the fixed priority rule. The event-time estimate satisfies the bound in [[lem-transverse-hybrid-event-time-error]]. At a successful restart, the reported next aligned-start ledger value is a valid bound on the discrepancy of the reported and exact reference states at that time. Any later trial is processed only after its provider certifies a valid total reference-error bound on the whole accumulated prefix, accounting for this aligned-start bound or supplying another sound proof of the full-prefix bound; otherwise the procedure returns `inconclusive` before making a later event claim. Any incomplete enclosure, unresolved or nontransverse root box, ambiguous event order, lag bound not below $\delta/3$, failed reset-domain check, or exhausted budget returns an explicit non-success status and proves no no-event claim.

**Current last Fact and proof step 1.4 (`beforetext`):**

> [F6] [[thm-validated-residual-tube-certificate-sound]]: in the finite-rational provider branch, a `certified` residual-tube result bounds the exact mode solution's distance from the stored dense reconstruction by its panel radius; a supplied finite upper bound on those radii gives the local error input. General admissible providers supply the same justified local bound directly under [F2].
>
> 1.4 For a successful event result, [F1] reports the upper endpoint of the selected box mapped from local time to physical time; that mapped box contains the unique exact reference-guard root by [F3]. The admissible data in [F2] supply a valid total reference-mode error bound, a dense-guard enclosure at the reported endpoint, and the transverse derivative margin; in the finite-rational branch, [F6] justifies the local dense error and the provider's ledger must also include prior aligned reset-state errors. Thus the event record supplies the state error, guard residual, and positive margin required by [F4]. Applying [F4] gives the stated event-time bound. [given, F1, F2, F3, F4, F6]

**Proposed addition after [F6]:**

> [F7] [[lem-reset-error-after-a-mistimed-hybrid-event]]: for incoming total error $\eta_{\rm ref}$ on the interval between the true event time $\tau$ and reported upper endpoint $\widehat\tau$, with $0\le\widehat\tau-\tau\le\Delta$, reset constants $L_R,L_{R,t}$ and incoming/outgoing field bounds $M^-,M^+$, the state discrepancy at the common reported time is at most $L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta$, under the lemma's tube and domain hypotheses.

**Proposed proof insertion after step 1.4 and before step 2.1:**

> 1.5 At each accepted event, the selected physical-time box contains its unique exact root $\tau$ by [F3], and the algorithm reports its upper endpoint $\widehat\tau$ by [F1]. Step 1.4 and [F4] give $0\le\widehat\tau-\tau\le\Delta$. Since $\Delta<\delta/3$ and consecutive selected exact event times are separated by $\delta$, the next selected exact event cannot occur before $\widehat\tau$. Thus, at the common reported time, the exact reference has reset at $\tau$ and both compared states are in the outgoing mode. Apply [F7] with the provider's valid total incoming error and reset/field bounds to obtain the stated next aligned-start ledger value. Starting from the algorithm's initialization $E=0$, induction over accepted events proves every reported restart ledger bound. Before a later event can be certified, step 2 requires the provider to validate a total reference-error bound on the whole enlarged prefix; [F2] and the Definition reject missing or unjustified data, so no later event estimate uses an unvalidated ledger. [given, F1, F2, F3, F4, F7, step 1.4, algorithm initialization, algebra, induction]

Keep existing proof steps 1.1–1.4 and 2.1 otherwise unchanged. The new clause proves the ledger guarantee now explicit in the Statement; it does not alter event ordering, no-event logic, root-isolation completeness, termination, or failure behavior.

## Recomputed consumer closure and dispositions

The changed identifiers have empty `aliases` lists in their current item headers. The current exact-ID references and `deps` give this closure: the Definition feeds the transverse-time lemma, safeguarded algorithm, finite trajectory-error theorem, and locator-soundness theorem; the transverse-time lemma feeds the grazing counterexample, bouncing-ball example, and batch 46 sphere algorithm; the safeguarded algorithm feeds the locator theorem and two-events example; the batch 46 sphere algorithm feeds the pair-count lemma. The source checks below include those items and both pages that summarize the affected interfaces. Batch 46 already declares both time and reset lemmas directly. The pair-count lemma uses only the sphere algorithm's enumeration loop.

| Consumer | Disposition | Source-level reason |
| --- | --- | --- |
| `lem-transverse-hybrid-event-time-error` | accept, no edit proposed | Its proof uses only the valid total error bound and the guard state-Lipschitz/transversality data from Definition items 1–2; it does not infer an event ledger recurrence. Its supplier data remain available under the revised item 3. |
| `alg-safeguarded-hybrid-event-location-and-restart` | repair proposed above | Step 9 applies the reset recurrence and lacks the direct reset-lemma dependency; the proposed step uses the proven lag, endpoint ordering, reset estimate, and next-prefix provider validation. |
| `thm-finite-hybrid-trajectory-error-under-separated-events` | accept, no edit proposed | Its own Statement, [F3]–[F6], and proof steps 1.1–4.1 already state and prove total-bound use, event lag, reset propagation, and finite induction directly from the time, reset, and flow suppliers. The revised Definition makes the provider obligation explicit without changing its argument. |
| `thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted` | repair proposed above | Add the reset supplier and the local aligned-ledger induction. The narrow Statement addition reflects the existing output ledger and provider-validity premise. |
| `cex-grazing-event-time-error-is-not-linearly-bounded` | accept, no edit proposed | It uses the transverse lemma only to state its positive-derivative hypothesis; the example concerns root sensitivity at a grazing contact and does not consume a restart update. |
| `ex-bouncing-ball-transverse-event-error-and-reset` | accept, no edit proposed | It cites both existing lemmas directly and verifies the event-time and reset estimates for its specified bracket; it does not claim provider-ledger propagation. |
| `ex-two-events-between-endpoints-defeat-sign-screening` | accept, no edit proposed | It consumes root isolation and orientation classification from the algorithm; its proof does not use step 9 or a post-reset ledger. |
| `alg-event-driven-frictionless-sphere-contact-with-certified-events` (batch 46) | accept, no edit proposed | Its current provider separately validates $\eta_{\rm ref}$, separation/count data, and $\epsilon_R$ when reset computation is inexact; it already directly declares the reset lemma and adds $\epsilon_R$ to its reset bound. The proposed conditional Definition rule explicitly accommodates that branch. |
| `lem-naive-all-pairs-collision-search-has-quadratic-work` (batch 46, indirect) | accept, no edit proposed | Its proof counts the sphere algorithm's unordered-pair loop and explicitly excludes the cost of event solves and restart certificates; no error-ledger premise is used. |
| `event-location-and-hybrid-trajectory-error` (batch 105 A) | accept, no page edit proposed | Its existing summary says justified general $C^1$ data are permitted and a local reset estimate plus finite induction propagate errors across separated events; the proposed theorem proof makes that summary fully supported. |
| `event-location-and-hybrid-trajectory-error-examples` (batch 105 B) | accept, no page edit proposed | Its summary covers examples only and does not state the provider update rule or locator ledger guarantee. |
| `nonsmooth-contact-time-stepping-and-projections` (batch 46 A) | accept, no page edit proposed | Its summary already says the sphere algorithm uses general time-error, reset-error, and mode-flow interfaces and separates prior reset error from lagged flow; it matches the existing source and proposed provider obligation. |
| `nonsmooth-contact-time-stepping-and-projections-examples` (batch 46 B) | accept, no page edit proposed | Its summary contains none of the changed provider, locator, or ledger claims. |

No page quote/contract mirror needs editing if the proposed item changes are applied. Keep the 105 A statement about finite-induction reset propagation, the 105 B example summary, the 46 A general-provider and lag-aware summary, and the 46 B examples summary as quoted in the current pages. The consumer-level facts [F2]–[F3] of the finite-error theorem and [F2] of the locator-soundness theorem remain compatible; the latter's [F1] should continue to point at the corrected Step 9.

## Source-first application order if root authorizes APPLY

1. Apply the conditional provider-obligation replacement to Definition item 3 (no time-lemma dependency and no scope deletion).
2. Add the direct reset-lemma dependency and revised Step 9 to the safeguarded algorithm.
3. Add the reset-lemma dependency, narrow Statement qualification, [F7], and proof step 1.5 to the locator soundness theorem.
4. Recheck the enumerated consumers and page summaries from their current source text. No downstream text edits are proposed; batch 46 already has the required direct supplier and additive reset-error term.

This file is a reviewable proposal only. Root must inspect these exact replacements and explicitly authorize APPLY before any canonical edit. No tests, gates, formatting checks, dependency-level reconciliation, manifests, or hashes were run or changed.
