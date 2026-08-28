# Frontier-22 group a — Step-8 rejudge adjudication recovery

## Rows handled

| item | context | pre-edit guard hash | outcome | disposition |
|---|---|---|---|---|
| `def-the-axioms-ab5-and-ab5-star` | `2f21fdb1fb542f7610d96c287699e061d92d96e7375497bbdcd02dc29c993974` | `f9806f2eaad90e3a0cda46ecf9cb5f1b1ecb86fe15cf4c0696cd5d9a832d8d04` | `confirmed_fatal` (`dependency_citation`) | The definition asserted arbitrary-family least-upper-bound and greatest-lower-bound properties while citing only the binary lattice theorem. Added the exact image-minimality and kernel-of-cokernel dependencies and supplied both universal-property derivations. Defect row `frontier-22-S8R1-a-001`. |
| `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy` | `4f96b56f8c391cc4a78ece4c02aa7a1a27313c51e114a8e34ec4d73a98f3c7e1` | `eac1a5639edbf19460b24dc912c60e1533c342a237c5670e3abed1f6a532c54d` | `confirmed_fatal` (`logic`) | The prior proof did not justify moving a pin from the conjugator-target boundary to the source boundary. Replaced that inference by an explicit two-interface one-syllable calculation, a symmetric minimization proving equal stable-letter lengths, and a second minimization with the target fixed. Defect row `frontier-22-S8R1-a-002`. |
| `thm-hnn-normal-form-theorem` | `6c2113c42c1da70c72463df10e5008de5045351f5a0ed79eac35f3b3dc4367a3` | `8fa7773cde76f7a763c7cd929cadbc8d4b24bab1a3b8a4568069c3ccc05e3591` | `confirmed_fatal` (`dependency_citation`) | Fact L3 used the associated-subgroup presentation, but its citations stated only the edge-group presentation and the abstract free-product property. Added the exact presentation-equivalence lemma to the item and citation contract. Defect row `frontier-22-S8R1-a-003`. |

Each envelope tuple has exactly one matching new adjudication and exactly one matching defect-ledger row.

## Licensed repairs and rejudge targets

The three fatal rows license exactly these repaired rejudge targets:

- `def-the-axioms-ab5-and-ab5-star`
  - current guard hash: `ce2943b687a642c54f0844051ace1fd84dc62848b087abbd3376030459ef2dcb`
  - current judge context: `e80a25668dbbcff70891f0e97223a8095ff614fb55346b1481e66c2cfd510985`
- `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy`
  - current guard hash: `eb0d55e5ccb0b692960d23a6ca56223145eed623184b729ace0e811811d80945`
  - current judge context: `1fa9b6859e925dc196124808563d9a040588ee4b7f2c31ed384c3ac20780adf7`
- `thm-hnn-normal-form-theorem`
  - current guard hash: `527fe118b49fdc52ee8927526acd90903b1c7bc5e49916ab288eae4e2eebc9a2`
  - current judge context: `e7c34e630ce8cbf11d0747f2c723d37557ce2767c08b12dcbfc6b48a64e5c108`

The engine owns the targeted rejudge. No judge call, extra cycle, or stage transition was initiated here.

## Documentary synchronization

- Regenerated only the changed HNN proof-contract entries in batch 1.
- Refreshed the four batch-8 proof-contract entries whose exact citation quote includes the repaired AB5 definition.
- Updated the complete Alpha risk note for the repaired conjugacy lemma.
- Rebuilt the merged frontier-22 proof-contract file from all nine batch contract sources.

## Cross-group alerts

None. Every dependency opened for these decisions was published or group-a-owned, and no other-group defect was found.

## Changed files

- `items/def-the-axioms-ab5-and-ab5-star.md`
- `items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md`
- `items/thm-hnn-normal-form-theorem.md`
- `research/frontier-22-batch-1.proof-contracts.json`
- `research/frontier-22-batch-8.proof-contracts.json`
- `research/frontier-22-proof-contracts.json`
- `research/frontier-22-judge-adjudications.jsonl`
- `research/frontier-22-alpha-a-step8-rejudge-round1-ledger-rows.json`
- `research/defect-ledger.jsonl`
- `research/DEFECT-LEDGER.md`
- `research/frontier-22-alpha-step8-closure-recovery-a.md`

## Checks

- Exact tuple join: 3/3 assigned live tuples have one exact `confirmed_fatal` adjudication; all three carry the required `defect_type` and pre-edit guard hash.
- Focused precheck: both repaired proof-bearing items passed in canonical phase order.
- Focused render check: all three repaired items passed frontmatter, delimiter, wikilink, and KaTeX checks.
- Strict proof contract: batches 1 and 8 each passed 44/44 items with zero errors or warnings.
- Citation fidelity: batch 1 checked 88 citations and batch 8 checked 119 citations; neither had a missing quote or widening candidate.
- Reviewed risk report: batches 1 and 8 each had zero missing-review errors.
- Boundary audit: neither batch had template reuse or contradicted dispositions.
- Dependency checks: dependency checking passed; forward/external checking exited successfully with the existing corpus warnings.
- Defect ledger: 313 frontier-22 rows validated with zero errors; the whole-run adjudication-to-defect check passed.
- Step-8 guard: all 56 current Step-8 item changes are licensed by exact fatal adjudications or terminal resolutions.
- Step-8 scope: four groups and 425 items partitioned, zero open rejection routed, and zero cross-group alert dispositioned.

## Blockers

The official whole-run judge-closure validator could not produce a trustworthy fresh receipt in this dispatch. Its context-hash pool returned exit code zero with empty stdout for every child, yielding 425 `malformed current context hash output` errors even with concurrency one. Running the same canonical `judge.mts --context-hash` command directly succeeds for each of the three repaired group-a items and produced the current contexts recorded above. Consequently no whole-run judge-coverage pass is claimed here; the reliable closure evidence is the exact tuple join, passed Step-8 scope check, passed defect coverage, and the three explicit engine-owned rejudge targets.
