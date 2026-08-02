# Wave 0 · number-theory — A3 orchestrator adjudication (2026-08-02)

Spot-verified from disk: the inert-fact claims (declared [L7]/[L2] facts with
no using step) match the 7 `proof-contract --strict` errors; `ex-gcd-with-zero`
[L2] declaration confirmed on disk.

## Decisions

- **Provenance retags: APPROVED for 34 of 35.** The one
  `established-knowledge` row (E1,
  `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers`) is HELD until
  Alpha's concurrence at A6 — do not write its provenance block at A4.
- **R1/R2 APPROVED** — delete the two inert facts
  (`cor-common-divisor-divides-gcd` L7, `ex-bezout-coefficients-not-unique`
  L2) and any deps entry left unused by the deletion; update contracts.
- **R3 APPROVED** — tag `L7` at `fs-gcd-times-lcm-equals-the-product` step 2.1.
- **R4 APPROVED with delegation** — `ex-gcd-with-zero` [L2]: tag it at step
  1.1 if the step genuinely uses the order facts; otherwise delete the fact.
  Beta decides from the text; Alpha checks at A6.
- **C2 APPROVED** — declare `lem-nat-embeds-int` in
  `thm-gcd-generates-the-subgroup` (`deps` + fact + tag at step 5.1), for
  consistency with the foundations batch's identical class.
- **C3 DECLINED** — over-citation with nothing over-claimed; triage says spend
  no effort.
- **C4 → A10 owner queue** — accurate but §6-banned count claims in both
  legacy page summaries; contract is forward-looking, owner decides.
- **E1, E2 (def proof-label `not-applicable` vs real inline existence
  arguments), E3 (`lem-coprime-divides-product` clause 2 unlocated) →
  Alpha (A6).**

All 28 high/critical `risk-report` items route to Alpha `risk_review` with
refuter dispatch at A6.
