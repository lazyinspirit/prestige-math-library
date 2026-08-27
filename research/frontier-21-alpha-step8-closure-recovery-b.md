# Frontier-21 group b — Step-8 closure recovery

## Recovered rows

The current closure packet listed 21 unadjudicated rejection tuples owned by
group b, and the current append-only adjudication ledger contained none of
them. The recovery preserved all 225 existing adjudications and appended the
21 exact group-b rows below with current pre-edit guard hashes.

| item | context | outcome |
|---|---|---|
| `thm-nilradical-of-artinian-ring-is-nilpotent` | `bad214df3e656854c5719839a4dc678a9f5e057865ae37f78098703e72b421ef` | `confirmed_nonfatal` |
| `lem-square-root-continued-fraction-state-recurrence` | `d1cf1386981ffc368331df040553593c2c16e6af69ed83e530ac18605f8a6f53` | `confirmed_nonfatal` |
| `thm-chinese-remainder-theorem-for-comaximal-ideals` | `cd44e4e72a68c8a587644949d557af22aace35dd221d45603f4dfc4cd9ec66da` | `confirmed_nonfatal` |
| `lem-square-root-convergent-norm-identity` | `3d9f9384462711dac927b5c40a3f1abcb61a10c906c026d26573619e63d487e7` | `false_positive` |
| `thm-artinian-ring-is-noetherian` | `4f5fb806369706be14a9a4b1b2041515f6b47142f4369e1c415a8336567a63a5` | `confirmed_nonfatal` |
| `thm-square-root-continued-fraction-period-structure` | `9c4dfa200f16f0da4ec4ddff337ae16a8a2465a56c542d8a7137696810e8b42f` | `confirmed_nonfatal` |
| `thm-artinian-local-ring-has-nilpotent-maximal-ideal` | `0d1f9795f5d3ddece4b643008ba76cf44f6a733195686989151c4c8c4c207662` | `confirmed_nonfatal` |
| `thm-lagrange-existence-for-pell-equation` | `23140c34ee618a48bf50e71e5c41c0bbe2746221b096fa4f7f501227b9799d41` | `confirmed_nonfatal` |
| `thm-structure-theorem-for-artinian-rings` | `06c55f7a70f35444952a7a39a096ab38ea1d2a6a45044968d4fc232863558e04` | `confirmed_nonfatal` |
| `thm-negative-pell-period-parity-criterion` | `5391ed5754452ced658cfe716461ee3eeb46b33e7070ce31dfdc0d5590b943c6` | `confirmed_nonfatal` |
| `thm-artinian-ring-characterisation-by-primes` | `367fe0d58efa8fe0478028704bb07cf67561e3159432d0ce4ccae9495873c635` | `confirmed_nonfatal` |
| `def-fundamental-pell-solution` | `bf5ecc5304b52c953c1098b9cc3618a9fa60fe8051bc26768bb1859d578f7f36` | `confirmed_nonfatal` |
| `cor-artinian-quotients-and-localisations` | `d862a222f0e838429302a37b8bc7bd41af0eab3d8a21fc6ba48eb615297d55e2` | `confirmed_nonfatal` |
| `thm-generalized-pell-solutions-have-finitely-many-orbits` | `84c7548454e941f12aa0d9623bf0ab646f2fbfb68d25be24980309ff1571275b` | `confirmed_nonfatal` |
| `ex-noetherian-not-artinian` | `65c12f2ecc0a4a1609dd871e2fe1e90d22901b25cbce152070709d4d7eda1ac2` | `confirmed_nonfatal` |
| `cor-generalized-pell-solubility-is-decidable` | `8fa22656430c245c2e2dee3c1c18fc962acbb30213c24bdbc465e632d46b3c05` | `confirmed_nonfatal` |
| `cor-one-generalized-pell-solution-gives-infinitely-many` | `602b741e6ac174dee54612e178d526f18ad0dd985be0ba3f8a320f8a794df6de` | `confirmed_nonfatal` |
| `ex-zero-dimensional-nonnoetherian-ring` | `2fd53e10eebf16330be59179e9973583bbef260e3d1da867c9a43c127294a7fa` | `confirmed_nonfatal` |
| `ex-pell-equation-for-fourteen` | `2963ea1e84547b92804324d076905060631b5baa92ee9df24f8f4afd10096deb` | `confirmed_nonfatal` |
| `ex-large-fundamental-pell-solution-for-sixty-one` | `8d4887b727ef514f1a9a4c5c6d40007905454d9c079fae615307ccec6cf68346` | `confirmed_nonfatal` |
| `ex-generalized-pell-bounded-representatives` | `55b375297d4727a3b7d57515a7115efe4f0302f7ce5cc4b27eb319f63afb7973` | `confirmed_nonfatal` |

The mathematical evidence and item-specific dispositions are recorded in
`research/frontier-21-alpha-step8-b.md`. This recovery did not change those
decisions.

## Licensed repairs and rejudge targets

None. The recovered outcomes contain no confirmed fatal, so they license no
content edit, defect-ledger row, contract update, or rejudge target. No item,
page, verification field, judge verdict, stamp, or impact record changed.

## Cross-group alerts

None. Every recovered row is owned by group b, and no defect in another
group's item or a published dependency was found.

## Checks

- Before recovery: 225 existing exact answers were preserved and all 21
  group-b rejection tuples were current and unadjudicated.
- After recovery: all 21 group-b tuples have exact answers; outcomes are 0
  confirmed fatal, 20 confirmed nonfatal, and 1 false positive.
- The strict evidence parser reports no malformed row, surplus adjudication,
  duplicate exact answer, or group-b guard-hash mismatch.
- No item content changed, so no focused content validation was required.

## Blockers

None within group b. The engine owns regeneration of the run-wide closure
packet and all subsequent routing, retry, rejudge, and stage-transition work.
