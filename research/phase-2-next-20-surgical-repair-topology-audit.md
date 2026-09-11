# Independent audit: postfreeze topology-consumer repairs

Date: 2026-09-11. Auditor role: independent Sol-high repair auditor. Scope:
the five batch-8/batch-9 subjects assigned from the nineteen-defect Step-8
recovery. I read the complete current items, the original postfreeze audit,
the repair-author report, the applicable defect-ledger rows, the cited
published supplier statements/proofs, the exact batch manifests, and the
affected proof-contract entries. I did not edit any item, manifest, contract,
plan, or ledger.

## Verdicts

| Defect ID | Subject | Verdict | Evidence |
|---|---|---|---|
| `phase-2-next-20-postfreeze-supplier-001` | `def-pullback-connection` | **PASS** | Current SHA-256 `3d919179439d934b27c85df93bb0d71640b8f3f01d68c01fc8f648d63fc96503`. Lines 20–26 give the fibre product the subspace topology, write the chart and inverse, prove their continuity, compute smooth fibre-linear overlaps, and obtain Hausdorffness and second countability from the product and hereditary suppliers. The defective `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle` is absent from both frontmatter and body. The local construction therefore replaces the exact missing interface. |
| `phase-2-next-20-postfreeze-supplier-002` | `def-vector-field-and-section-along-a-smooth-curve` | **PASS** | Current SHA-256 `13a7dc5cabc2970f34e4c13afd837633cd693846c1ede5451f929a891abe713c`. Lines 19–23 give `gamma^*E` its subspace topology, explicit inverse charts, smooth overlaps, the endpoint convention, Hausdorffness, and a countable product basis followed by hereditary passage. The defective pullback-bundle theorem is absent. The resulting section/map equivalence and exceptional interval conventions are correct. |
| `phase-2-next-20-postfreeze-supplier-016` | `ex-hopf-circle-fibration` | **FAIL** | Current SHA-256 `fade4f89a936bc7247eff4791c3b4ec266714b9b86a293a222a8e604fa2649db`. Line 58 correctly reduces equal sine/cosine pairs via subtraction and then uses the zero set and `cos(m*pi)=(-1)^m`. However, the assertion that F8 alone gives `cos(s-t)=1` also uses `cos^2(t)+sin^2(t)=1`. F8 states only the subtraction formulas, and neither the Facts block nor direct deps declares the Pythagorean identity. Thus the intended bypass is mathematically valid but its load-bearing fact attribution remains incomplete. |
| `phase-2-next-20-postfreeze-supplier-017` | `ex-mobius-band-as-an-interval-bundle-with-monodromy` | **FAIL** | Current SHA-256 `e491a63e0fbeca54ba4416c2b1378f36f2433165407f5b161f52bc29b0e6ea80`. The bundle charts, numerating partition, transport, and invariant calculations are correct. The local fibre proof at line 58 has the same exact gap: F10's subtraction formulas turn equality into `cos(2*pi*(s-t))=cos^2(2*pi*t)+sin^2(2*pi*t)`, but the final equality to one needs the undeclared Pythagorean identity. |
| `phase-2-next-20-postfreeze-supplier-018` | `cex-a-surjective-map-need-not-be-a-fibration` | **FAIL** | Current SHA-256 `e90f5f1b1cb0663a32d26ea4256fc39d214a07698e4324a057f9db9ba196b57d`. The forced positive-time lift `ell(s)=1-s/2` and discontinuity at zero are correct. The local exact-fibre proof at line 48 has the same incomplete attribution: F4 does not by itself supply the Pythagorean identity needed for `cos(2*pi*(x-y))=1`. |

The precise healthy supplier for all three failed rows is
`cor-trigonometric-parity-and-pythagorean-identity`, whose published statement
contains `sin^2(x)+cos^2(x)=1`. The minimal repair is to add that direct
dependency and a corresponding fact in each item, then cite it in the affected
step. Equivalently, the text may explicitly use the unaffected norm-one clause
of the already cited quotient-circle homeomorphism, but declaring the dedicated
Pythagorean supplier is clearer and keeps the bypass independent of the
defective interface. No new item, page, pair, or published edit is needed.

## Dependency and artifact checks

- Each target occurs on exactly one current run page. The two definitions are
  on `connections-levi-civita-and-parallel-transport`; the three examples are
  on `fibrations-fiber-bundles-and-homotopy-exact-sequences-examples`.
- For all five targets, manifest dependency arrays exactly equal current
  frontmatter arrays. Batch 8 and batch 9 each still contain four pages; no new
  page or pair appears in this repair scope.
- The current scoped published supplier hashes match the independent published
  audits, including the defective read-only homeomorphism
  `b325dfde1f9bc733eab352e28dba56b0d3e67b77bf36a9ce77f3009bc348c723`
  and pullback theorem
  `b895f302602aedae63682a70add8c34f91317a232e6eae85249df4556e522bbd`.
  The local replacement suppliers also match their audited hashes. No scoped
  published item was edited.
- Current artifact hashes are batch-8 pages
  `6f25df284db3459bb244773e0d207d2c9340122accf5a9f47aa40b6df39c4303`,
  batch-8 contracts
  `b2716035380739101bf526defff9deb8dbe98c1c7d7f95aac7c2faddf4d7fd35`,
  batch-9 pages
  `d3a30ec73632af302f9f23eb9ef950e92e3bc8779bcb81fa2949a2a2e0d8ffd9`,
  and batch-9 contracts
  `28ff9406b574c072651cf3663138b12f421711a7ca478d44f927b9a16889b08d`.
- The two batch-9 downstream contracts quote the repaired
  `def-pullback-connection` text exactly. The three batch-8 contracts quote the
  new subtraction/zero-set suppliers and current derivations exactly, but their
  mechanical success does not cure the semantic omission above: the quoted
  subtraction-formula statement does not itself assert the norm-one identity.

## Focused verification

All mechanical checks passed on the audited snapshot:

- `rendercheck`: 5/5 files, zero errors.
- `precheck`: 3/3 proof-bearing items, zero failures; the two definitions are
  non-proof-bearing.
- strict `proof-contract`: 3/3 selected batch-8 entries and 2/2 selected
  batch-9 downstream entries, zero errors or warnings.
- `citation-fidelity`: 488 citations across the two complete contracts, no
  missing quote and no widening candidate from its automated detectors.
- manifest-only `content-policy`: batch 8 has 58 scoped items and batch 9 has
  102, both with zero errors and warnings.
- `manifest-deps`: 160 items, zero errors; `validate-plan`: pass;
  `depcheck --quiet`: exit 0.
- `boundary-audit`: no contradicted dispositions or template reuse at or above
  three members in either contract.

Final result: **2 PASS, 3 FAIL**. The three failures share one small,
deterministic direct-dependency/fact repair. Their mathematical conclusions are
not false, and no broader topology repair or new prerequisite item is required.

## Re-audit after targeted correction — 2026-09-11

The three failed unit-circle consumers were re-read in full after the authorized
targeted correction. Each now declares
`cor-trigonometric-parity-and-pythagorean-identity` directly, states the exact
fact `cos^2 u + sin^2 u = 1`, and cites that fact in the fibre derivation:

- `ex-hopf-circle-fibration` uses F8 and new F11 in step 1.3. Current SHA-256:
  `54931a364958152120a655da8bc8604d9ac6ab31cf250c2d9f6c428b749ca8de`.
- `ex-mobius-band-as-an-interval-bundle-with-monodromy` uses F10 and new F13
  in step 1.2. Current SHA-256:
  `a545d098accb544ec92719039b0684000ddd64b70785a3a488d53696fde9b641`.
- `cex-a-surjective-map-need-not-be-a-fibration` uses F4 and new F9 in step
  1.1. Current SHA-256:
  `e75c8a9ff1245fcd5c18dd0968a8aa67139d89aa738fa5d83df1d73bd90bc510`.

Substitution in the subtraction formulas now explicitly gives
`sin(s-t)=0` and, using the declared identity,
`cos(s-t)=cos^2(t)+sin^2(t)=1` (with the corresponding `2*pi` scaling in
the latter two items). The zero-set and integer-shift supplier then gives an
integer multiple of `pi`, and the cosine value forces even parity. This is a
complete local proof of the affected fibre clause and no longer spends the
defective injectivity proof.

The batch-8 manifest contains the same direct dependency for all three items
and its strategies name the Pythagorean step. Its current SHA-256 is
`b77419531bf956e63459b3e9b069fb40c67edc61aed21b5bbfc20e607f3a3a59`.
The batch-8, owner-fibrations, and aggregate contracts all contain the exact
new supplier quote and the new fact in the applicable derivation inputs. The
counterexample's two stale boundary references in the owner and aggregate
copies were synchronized to its current steps before the final recheck.
Selected strict contract checks now pass 3/3 with zero errors or warnings on
all three surfaces. The aggregate entries are exactly equal to the batch
entries; the owner entries differ only by the expected absence of the later
Step-5A `risk_review` field. Current contract hashes are:

- batch 8: `b765bd24445f614e15319dd84ce6a2be509a0420393a47aaf2d650e4d94ffc24`;
- owner fibrations: `cd3cf6cbaed5ecb357a2e99398aac099e63a94e08f716a0d5bec85a1963975d5`;
- aggregate: `d48340dc5d8e08339c6d4266f4c9765763f671d4141add26bf6d5d098d1415fd`.

Focused rechecks pass: rendercheck 3/3; precheck 3/3; manifest-only content
policy 58 items with zero errors/warnings; manifest dependency validation 58
items with zero errors; and citation fidelity over batch, owner, and aggregate
contracts with 2,708 citations and no missing quotes or widening candidates.

The frozen-surface comparison against `post-step7` currently finds 29 changed
items, all in `allowed_targets`, with every `required_target` changed and no
published changed item. All three topology subjects remain both required and
allowed. The authorization file SHA-256 is
`d376d67d50060e57efb48a0a900229247fddb8ad394a742257e33340bf663f1f`.

Final superseding topology verdicts:

| Defect ID | Final verdict |
|---|---|
| `phase-2-next-20-postfreeze-supplier-001` | **PASS** |
| `phase-2-next-20-postfreeze-supplier-002` | **PASS** |
| `phase-2-next-20-postfreeze-supplier-016` | **PASS** |
| `phase-2-next-20-postfreeze-supplier-017` | **PASS** |
| `phase-2-next-20-postfreeze-supplier-018` | **PASS** |

Final re-audit result: **5 PASS, 0 FAIL**. No residual topology blocker remains.
