# Frontier-21 group b — Step-8 adjudication

## Outcome

Adjudicated all 21 routed rejection rows: 0 confirmed fatal, 20 confirmed
nonfatal, and 1 false positive. No item or page content changed, no defect-ledger
row was required, and there is no rejudge target.

All outcomes were appended to
`research/frontier-21-judge-adjudications.jsonl` with the exact rejection tuple
and pre-edit guard hash. No incoming alert, outgoing cross-group alert, or
published dependency defect arose.

## Complete dispositions

| item | context | outcome | evidence | repair |
|---|---|---|---|---|
| `cor-artinian-quotients-and-localisations` | `d862a222f0e838429302a37b8bc7bd41af0eab3d8a21fc6ba48eb615297d55e2` | `confirmed_nonfatal` | Passing from the product decomposition to one local factor implicitly replaces the original multiplicative set by its image in that factor. Naming that image would make the notation literal, but the two local cases and the Artinian conclusion are correct. | None; local notation gap only. |
| `cor-generalized-pell-solubility-is-decidable` | `8fa22656430c245c2e2dee3c1c18fc962acbb30213c24bdbc465e632d46b3c05` | `confirmed_nonfatal` | The preceding square-root continued-fraction construction computes the period and hence the fundamental unit; alternatively, enumerating positive Pell pairs terminates by the proved existence theorem. The bounded search is therefore effective, though that bridge is not restated locally. | None; local algorithmic bridge only. |
| `cor-one-generalized-pell-solution-gives-infinitely-many` | `602b741e6ac174dee54612e178d526f18ad0dd985be0ba3f8a320f8a794df6de` | `confirmed_nonfatal` | Since the fundamental solution has norm one, its inverse is its integral conjugate, so every negative power remains in `Z[√D]`. The distinctness and norm computations are correct. | None; elementary inverse step omitted. |
| `def-fundamental-pell-solution` | `bf5ecc5304b52c953c1098b9cc3618a9fa60fe8051bc26768bb1859d578f7f36` | `confirmed_nonfatal` | The existence theorem makes the set of positive first coordinates nonempty, and well-ordering of the positive integers supplies its least member. The definition is well-defined; the well-ordering sentence is merely implicit. | None; elementary well-definedness step omitted. |
| `ex-generalized-pell-bounded-representatives` | `55b375297d4727a3b7d57515a7115efe4f0302f7ce5cc4b27eb319f63afb7973` | `confirmed_nonfatal` | The displayed lower endpoint does not bound every quotient, as the rejection observes. The actual smallest positive quotient is `(13-4√7)/(13+4√7)`, which is still strictly greater than `(8+3√7)^{-1}`, and its reciprocal is strictly less than `8+3√7`; hence the eight representatives are still in distinct Pell orbits. | None; local comparison interval is too narrow, while the example and orbit count remain correct. |
| `ex-large-fundamental-pell-solution-for-sixty-one` | `8d4887b727ef514f1a9a4c5c6d40007905454d9c079fae615307ccec6cf68346` | `confirmed_nonfatal` | The one-period convergent is the least negative-Pell solution and its displayed square is a positive norm-one solution. Continuing the same recurrence through the second period gives that square as `p_21/q_21`, the least positive norm-one convergent specified by the cited parity theorem. | None; one routine recurrence identification is omitted. |
| `ex-noetherian-not-artinian` | `65c12f2ecc0a4a1609dd871e2fe1e90d22901b25cbce152070709d4d7eda1ac2` | `confirmed_nonfatal` | A field has only the ideals zero and itself, so it is Noetherian. Thus the polynomial-ring corollary applies to `k`, and both strict descending chains correctly disprove Artinianness. | None; elementary coefficient-ring check omitted. |
| `ex-pell-equation-for-fourteen` | `2963ea1e84547b92804324d076905060631b5baa92ee9df24f8f4afd10096deb` | `confirmed_nonfatal` | The displayed period and norm computation are correct. Leastness follows either from the page's parity criterion or by checking `y=1,2,3` before the solution at `y=4`; the example simply does not state that final bridge. | None; local leastness justification omitted. |
| `ex-zero-dimensional-nonnoetherian-ring` | `2fd53e10eebf16330be59179e9973583bbef260e3d1da867c9a43c127294a7fa` | `confirmed_nonfatal` | The ring is also non-Artinian: the ideals of sequences whose first `n` coordinates vanish form a strict descending chain. Hence it is a valid witness that prime-maximality without Noetherianity does not imply Artinianness. | None; one elementary descending chain omitted. |
| `lem-square-root-continued-fraction-state-recurrence` | `d1cf1386981ffc368331df040553593c2c16e6af69ed83e530ac18605f8a6f53` | `confirmed_nonfatal` | At the first step `P_1=a_0>=0`. Thereafter `alpha_n>1` and `P_n<√D` give `Q_n<√D+P_n<2√D`; the upper floor inequality gives `√D-P_{n+1}<Q_n`, hence `P_{n+1}>-√D`. This supplies the omitted lower bound and proves `D-P_{n+1}^2>0`. | None; short inequality bridge omitted. |
| `lem-square-root-convergent-norm-identity` | `3d9f9384462711dac927b5c40a3f1abcb61a10c906c026d26573619e63d487e7` | `false_positive` | Fact F3 cites the square-root state lemma and explicitly supplies `alpha_{n+1}=(√D+P_{n+1})/Q_{n+1}` with `Q_{n+1}>0` for every `n`. Thus the definedness condition of the tail formula is retained in the same facts block, and the cited formula applies. | None; the asserted missing condition is already present. |
| `thm-artinian-local-ring-has-nilpotent-maximal-ideal` | `0d1f9795f5d3ddece4b643008ba76cf44f6a733195686989151c4c8c4c207662` | `confirmed_nonfatal` | In a commutative ring every maximal ideal is prime. Together with uniqueness of the maximal ideal and the cited prime-implies-maximal theorem, this identifies it as the only prime and makes the nilradical computation correct. | None; standard maximal-implies-prime bridge omitted. |
| `thm-artinian-ring-characterisation-by-primes` | `367fe0d58efa8fe0478028704bb07cf67561e3159432d0ce4ccae9495873c635` | `confirmed_nonfatal` | In a Noetherian ring every prime contains a prime minimal over zero; the cited finite-minimal-primes result is proved by that same Noetherian minimal-prime machinery. With this standard bridge, every prime is one of the listed maximal minimal primes and the filtration proof is correct. | None; local minimal-prime containment bridge omitted. |
| `thm-artinian-ring-is-noetherian` | `4f5fb806369706be14a9a4b1b2041515f6b47142f4369e1c415a8336567a63a5` | `confirmed_nonfatal` | Every maximal ideal of a commutative ring is prime, so the cited prime-implies-maximal theorem makes the prime and maximal sets equal. The nilradical intersection and subsequent finite filtration are correct. | None; standard converse inclusion of the prime/maximal sets omitted. |
| `thm-chinese-remainder-theorem-for-comaximal-ideals` | `cd44e4e72a68c8a587644949d557af22aace35dd221d45603f4dfc4cd9ec66da` | `confirmed_nonfatal` | For `r=1` the canonical quotient map is surjective with kernel `I_1`, and the intersection/product identity is tautological. The proof covers every nontrivial multi-ideal case correctly. | None; immediate boundary case omitted. |
| `thm-generalized-pell-solutions-have-finitely-many-orbits` | `84c7548454e941f12aa0d9623bf0ab646f2fbfb68d25be24980309ff1571275b` | `confirmed_nonfatal` | Equality can occur in the stated lower bound for the conjugate, so the strict sign is wrong. That lower bound is unused. The coordinate estimate follows from maximizing `t+1/t` on `[epsilon_D^{-1/2},epsilon_D^{1/2}]`, and the finite-orbit conclusion is correct. | None; unused endpoint strictness and an implicit elementary maximization. |
| `thm-lagrange-existence-for-pell-equation` | `23140c34ee618a48bf50e71e5c41c0bbe2746221b096fa4f7f501227b9799d41` | `confirmed_nonfatal` | The convergent recurrence starts with a positive numerator and thereafter uses positive continued-fraction digits, so every relevant `p_n` is positive. The norm construction then gives the asserted positive Pell solution. | None; elementary sign propagation omitted. |
| `thm-negative-pell-period-parity-criterion` | `5391ed5754452ced658cfe716461ee3eeb46b33e7070ce31dfdc0d5590b943c6` | `confirmed_nonfatal` | Denominators are only nondecreasing at the first transition and strictly increase from `q_1` onward. Candidate indices of a fixed norm sign are separated far enough that this initial equality is irrelevant, so the first admissible index still gives the least positive solution. | None; overstrong local monotonicity wording only. |
| `thm-nilradical-of-artinian-ring-is-nilpotent` | `bad214df3e656854c5719839a4dc678a9f5e057865ae37f78098703e72b421ef` | `confirmed_nonfatal` | The nilradical is the radical of the zero ideal, and radicals are ideals in a commutative ring. Once this standard fact is unfolded, its powers are ideals and the minimum-condition proof is valid. | None; standard idealhood bridge omitted. |
| `thm-square-root-continued-fraction-period-structure` | `9c4dfa200f16f0da4ec4ddff337ae16a8a2465a56c542d8a7137696810e8b42f` | `confirmed_nonfatal` | The rejection correctly observes that the displayed `S` is too large. Step 1.1 already places every actual state in the finite box `|P|<√D`, `0<Q<2√D`. Pigeonhole gives a repeated actual state, and the interval-residue construction gives each actual state a unique actual predecessor, so the repetition can be pulled back to the initial reduced state. The period and symmetry conclusions remain correct. | None; the proof used an overlarge ambient state set instead of the already established finite box of actual states. |
| `thm-structure-theorem-for-artinian-rings` | `06c55f7a70f35444952a7a39a096ab38ea1d2a6a45044968d4fc232863558e04` | `confirmed_nonfatal` | Every maximal ideal of a commutative ring is prime, so the cited prime-implies-maximal theorem identifies the two finite sets. The nilradical intersection, CRT decomposition, and localization comparison then follow as written. | None; standard maximal-implies-prime bridge omitted. |

## Alerts

None. No cross-group or published dependency defect was found.

## Rejudge targets

None. No rejection was confirmed fatal and no mathematical content changed.

## Changed artifacts

- Appended 21 exact-hash outcomes to
  `research/frontier-21-judge-adjudications.jsonl`.
- Added this group report.
- No item, page, contract, impact record, verification field, judge verdict,
  stamp, or defect-ledger row changed.

## Checks

- Exact evidence join: 21 expected group-b rejections, 21 exact adjudications,
  20 confirmed nonfatal, 1 false positive, 0 malformed or surplus rows, and 0
  guard-hash mismatches.
- Step-8 guard: pass against `pre-step8`; 0 changed, created, or deleted item
  files and 0 unlicensed changes.
- Step-8 scope check: pass; 4 groups, 433 items partitioned, 225 rejection rows
  routed, and 0 cross-group alerts dispositioned.
- No focused content validation or defect-ledger append was required because
  this dispatch made no content repair.

## Blockers

None within group b. The engine owns the remaining groups, stage join, and any
later rejudge or transition work.
