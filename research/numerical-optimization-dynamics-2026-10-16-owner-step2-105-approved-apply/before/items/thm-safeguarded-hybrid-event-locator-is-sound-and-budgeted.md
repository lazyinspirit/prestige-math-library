---
id: thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted
kind: theorem
title: "The hybrid event locator certifies events or returns inconclusive within its budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - def-hybrid-mode-guard-reset-system
  - alg-safeguarded-hybrid-event-location-and-restart
  - def-certified-hybrid-event-enclosure
  - thm-smooth-function-root-isolation-soundness
  - thm-validated-residual-tube-certificate-sound
  - lem-transverse-hybrid-event-time-error
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§6.2 and 13.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
---

## Statement

Assume every trial interval supplied to [[alg-safeguarded-hybrid-event-location-and-restart]] has valid certified hybrid event-enclosure data, each accepted event is transverse in its declared orientation on its certified root bracket, each accepted event's computed lag bound is less than $\delta/3$ for the certified event-separation bound $\delta$, and each finite budget is a nonnegative integer. Every execution terminates after finitely many calls. A `no event` step is returned only if every active exact guard has a complete root-isolation result, no unresolved root box, and every certified root is proved to cross strictly opposite to the transition's declared orientation; then no active guard event occurs in the step. A returned event box contains exactly one root for its guard and has a derivative enclosure in the declared direction. When it is certified to be the earliest enabled root and event order is unambiguous, its transition is the actual first transition selected by the fixed priority rule. The event-time estimate satisfies the bound in [[lem-transverse-hybrid-event-time-error]]. Any incomplete enclosure, unresolved or nontransverse root box, ambiguous event order, lag bound not below $\delta/3$, failed reset-domain check, or exhausted budget returns an explicit non-success status and proves no no-event claim.

## Facts & Assumptions

**Given:** The finite procedure, finite active guard set, valid exact guard and derivative enclosures, finite interval-root budgets, and the hypotheses of [[lem-transverse-hybrid-event-time-error]].

[F1] [[alg-safeguarded-hybrid-event-location-and-restart]]: each trial step calls the finite-budget smooth-function root isolator on every exact guard over the whole interval; unresolved boxes and failed enclosures return `inconclusive`, and derivative enclosures classify certified roots by the transition's declared orientation. It returns `inconclusive` instead of restarting when the proved event-time lag bound is not below $\delta/3$.

[F2] [[def-certified-hybrid-event-enclosure]]: any admissible provider supplies justified dense-guard, exact-guard, and derivative enclosures, a total reference-error bound on every queried subinterval, and the separation bound needed to justify a restart; a rational residual-tube checker is only one sufficient provider branch.

[F3] [[thm-smooth-function-root-isolation-soundness]]: every excluded box contains no root, every certified box contains exactly one root, every root is in a certified or unresolved box, and an unresolved output gives no all-roots conclusion.

[F4] [[lem-transverse-hybrid-event-time-error]]: if the dense guard residual is bounded by $\varepsilon$ and the dense state error by $\eta$ on a transverse bracket of margin $\nu$, then the reported time error is at most $(L_g\eta+\varepsilon)/\nu$.

[F5] [[def-hybrid-mode-guard-reset-system]]: an event is enabled only when the guard crosses in its declared orientation, and a fixed priority orders simultaneous enabled transitions.

[F6] [[thm-validated-residual-tube-certificate-sound]]: in the finite-rational provider branch, a `certified` residual-tube result bounds the exact mode solution's distance from the stored dense reconstruction by its panel radius; a supplied finite upper bound on those radii gives the local error input. General admissible providers supply the same justified local bound directly under [F2].

## Proof

1.1 There are finitely many active guards. Each trial step processes at most $B_{\mathrm{root}}$ boxes per guard, and the entire run processes at most $B_{\mathrm{step}}$ trial steps and $B_{\mathrm{event}}$ accepted events. The smooth isolator terminates at its finite box budget by [F3]. Hence every loop is finite and the procedure terminates. [given, F1, F3, algebra]

1.2 Suppose the procedure accepts a `no event` step. For each active guard, [F1] requires a `complete` root-isolation result and either no certified roots or derivative enclosures that put every certified root strictly on the nontriggering side. By [F3], every exact root is in a certified or unresolved box; completeness removes the unresolved case, and [F5] makes each certified opposite-direction crossing nontriggering. [given, F1, F2, F3, F5]

1.3 Suppose an event box is returned. By [F3] it contains exactly one root of its exact guard, and [F1] certifies that the derivative has the declared crossing sign with positive margin. Every earlier enabled root in any active guard would also have to appear in a certified or unresolved box by [F3]. The procedure either separates all candidate intervals and chooses the earliest, applies the fixed priority from [F5] to an exactly certified simultaneous tie, or returns `inconclusive` when order remains ambiguous. Therefore every successful event record is the first enabled event. [given, F1, F2, F3, F5, algebra]

1.4 For a successful event result, [F1] reports the upper endpoint of the selected box mapped from local time to physical time; that mapped box contains the unique exact reference-guard root by [F3]. The admissible data in [F2] supply a valid total reference-mode error bound, a dense-guard enclosure at the reported endpoint, and the transverse derivative margin; in the finite-rational branch, [F6] justifies the local dense error and the provider's ledger must also include prior aligned reset-state errors. Thus the event record supplies the state error, guard residual, and positive margin required by [F4]. Applying [F4] gives the stated event-time bound. [given, F1, F2, F3, F4, F6]

2.1 Each remaining failure branch in [F1] returns `inconclusive`, `domain-failure`, or `budget-exhausted` with only the already certified prefix. By the procedure's stated output convention it asserts no absence of an event after the failed branch. Thus every successful certificate is sound and every incomplete branch makes no negative claim. [given, F1] ∎
