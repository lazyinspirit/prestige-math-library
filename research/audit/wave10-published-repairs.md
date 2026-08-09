# Wave 10 published-repair ledger

Audit stage: A6. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`. Date: 2026-08-09. Item hashes are normalized SHA-256 values with the complete `verification:` block removed.

## Complete reconciliation

Audit-Alpha independently read all 57 scoped items, all four page files, all 99 distinct exact out-of-scope targets, all 59 proof-bearing top-100 spine items, and all 338 affected consumers. No sampling was used. `wave10-edge-audit.json` dispositions all 888 exact relationships: 698 published-backward, 183 same-batch, and seven forward. This includes every frozen-text barrier edge: 86 Wave10-to-Wave8 and 29 Wave10-to-Wave9, all licensed against exact A9-frozen text.

## Material A4 item repairs

| item | final disposition | normalized final hash |
|---|---|---|
| `lem-integral-elementary-bounds` | Replaced the false equality-characterises-constants Remark with the correct sharpness statement and a Dirichlet-indicator witness. | `f02b0c8c0adeb786bb3672720f1e766cab8337d563fcb3b9e588c22de7c99d03` |
| `thm-monotonicity-from-the-derivative` | Expanded Fact L3 with the nonnegative-difference-quotient limit proposition actually used in step 1.2. | `bc6564d166b2cd7fbe07ee318f7f4aaa503d357a99698b56e2bd30170d68b18e` |
| `ex-integral-of-the-floor-function` | Added L1 to step 1.2's citation list and regenerated the honest contract use `L1 -> ["1.2"]`. | `3c64174182d1171e3a4bf721c9e4b1ba74d3fe28cb1efec2d6cf3568a495737a` |

## A6 source repair

| item | failed support | final support | normalized final hash |
|---|---|---|---|
| `cex-differentiable-with-unbounded-derivative-is-not-lipschitz` | UNLP practice-sheet PDF, TLS local-issuer failure and not independently reader-verifiable; old hash `0766c3134a980d2dbde5883e1303b0fc510f87b1395a56af7557fee8c9b8c8f8`. | Official MIT 18.785 Lecture 19, printed page 2, explicitly supplies the square-root non-Lipschitz quotient witness. Exact-final Terra certification and DeepSeek refutation both pass. The two consumers were read and remain unchanged/licensed. | `6cb1e75a9f8c3ecc6ccaabefdd20d8b895a343effae13f6390730ba6ffb3f8ca` |

The McGill differentiation PDF is retained for the derivative material that it actually supports. It returns HTTP 200 and is reader-usable, but the automated full transfer exceeds 22 seconds. It does not support strict increase of `x^3`; both affected provenance rationales now attribute strict increase only to the live Hunter source. `wave10-url-dispositions.json` preserves the initial 56/58 and final 57/58 evidence exactly.

## Page repair

`library/real-analysis/the-derivative-and-mean-value-theorems.md` now says differentiability is the defining hypothesis of the four central theorems, rather than falsely calling all four mean value theorems. Exact final full-file hash: `581bcd7a3e56975e8bf58798a5dd059fd2514c218a97f15b2ac7d40754310870`. Terra independently certified the exact page. Pages are never A7 item targets.

## Independent-reader closure

The append-only DeepSeek archive has substantive exact-current results for all 49 critical proof routes: 48 `CLEAN` and one `DEFECTS`. Alpha adjudicated the sole finding on `lem-derivative-of-a-power` confirmed nonfatal: step 4.2's surrounding sentence already defines the truncating sequence, so the inference closes immediately under the 30-second rule and no R1 edit is necessary. The original `thm-lebesgue-criterion` transport failure is preserved and an append-only retry returned `CLEAN`.

Terra certified the three A4 item repairs, the A6 source-repaired item, and the derivative page, all at exact final hashes. Both original source-disposition refusals are preserved with their exact closures. All four repaired items carry current owner-delegated `published-audit` verification stamps.

## Exact A7 target ids

`wave10-rejudge-targets.json` contains exactly four item ids:

- `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`
- `ex-integral-of-the-floor-function`
- `lem-integral-elementary-bounds`
- `thm-monotonicity-from-the-derivative`

The 53 pure retags, page edit, consumers, siblings, and reader-only routes are excluded.
