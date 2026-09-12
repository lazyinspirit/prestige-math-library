# Step 7 adjudication — group f

Run: `phase-2-next-17`  
Batch: 10  
Owned pages: `sat-tableaux-and-quantified-space-completeness`, `sat-tableaux-and-quantified-space-completeness-examples`, `nondeterministic-recursive-padding-and-time-separation`, `nondeterministic-recursive-padding-and-time-separation-examples`

## Rejections

### `def-boolean-formulas-cnf-and-satisfiability-interface`

- Rejection: `(def-boolean-formulas-cnf-and-satisfiability-interface, gpt-5.6-terra, 6c07bef8b37ced17acc5935a3dc249ac8de5f695d16cfc2f41df8a73a61cfc10)`.
- Outcome: `confirmed_fatal` (`other`; ill-defined definition).
- Pre-edit guard: `dfe2a28a080449385e4ed0f823c8e3d6e6f73e538a094ea91ee2bb64323e395c` (matches the `pre-step7` prefix `dfe2a28a08044938`).
- Evidence: the definition first makes an assignment's domain exactly the indices occurring in one formula, then asks two possibly different variable sets to be compared “on common variables.” For example, the formulas $x_0$ and $\top$ have no single assignment of the previously defined kind on which both evaluations are defined. The objection is therefore to the claim as written, not merely its exposition.
- Repair: semantic equivalence now quantifies over assignments on the union of the two occurring-variable sets and evaluates each formula by restriction. SAT, 3SAT, certificates, and equisatisfiability are unchanged.
- Contract synchronization: the four owned consumer citation quotes were refreshed to the repaired Definition text.
- Dependencies read: `items/def-polynomial-time-verifier-and-reduction-interface.md`; it fixes the verifier and reduction convention but does not affect this local semantic-domain repair.
- External sources: none needed; this is a direct type/domain check against the definition itself.
- Post-edit guard: `d54e0e7d5bdf5820c057b998913c260b2fbf5e732c3420320966ca6981cc4d58`.
- Focused checks: item precheck (definition, 0 proof-bearing checked), strict batch-10 proof contract (0 errors, 0 warnings), and targeted rendercheck (pass).
- Defect ledger: `p2-next17-step7-f-semantic-equivalence-domain`.
- Rejudge target: this item.

### `def-bounded-turing-computation-tableau-interface`

- Rejection: `(def-bounded-turing-computation-tableau-interface, gpt-5.6-terra, 695ca289576ff9b45926812f607bb0745898d1e2c6840d673dce222564ba2936)`.
- Outcome: `false_positive`; no content, manifest, contract, dependency, or impact edit.
- Guard: `36e791d5b35229b45d8fa7229c97aa41763970e91befcc350eae1da4dd7cb648`.
- Evidence: the judge says the cited verifier interface has no length-field construction. Its Verification 2.1 explicitly maps a witness of length $\ell\le P$ to a word of length $2P+1$, specifies validation and decoding, treats $P=0$, and proves language and polynomial-bound preservation. The tableau definition invokes precisely this optional conversion before fixing the resulting certificate-length polynomial $p$.
- Dependencies read: complete `items/def-polynomial-time-verifier-and-reduction-interface.md`; `items/lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations.md` for the local-rule consumers.
- External sources: none needed; the exact cited local dependency settles the rejection.
- Reader warnings: `s8a-83f5426cd6a158a8675b84ec` and `s8a-80c32eedf4d306b6c0e99be3` are `nonfatal`. The allowed relation and its complement determine the forbidden tuples (including the fixed-marker boundary variants), and the opening quantifier order makes $p$ the post-conversion fixed length. Both are immediate but terse readings; no fatal defect or edit is warranted.
- Focused checks: no edit, so no validation target and no rejudge target.

### `def-nondeterministic-acceptance-time-and-exact-clock`

- Rejection: `(def-nondeterministic-acceptance-time-and-exact-clock, gpt-5.6-terra, 3362c906ce16f808d674447e65cc8ff12c46906b068b4cf97b294ddf480f1c1a)`.
- Outcome: `confirmed_fatal` (`logic`; the clocked construction was ill-typed for a nonbinary acceptor input).
- Pre-edit guard: `f899c98c10ed880fa9ca485bf536b6033d4346d67c651e7bcebdf71529e6aae7` (matches the `pre-step7` prefix `f899c98c10ed880f`).
- Evidence: the published NTIME interface allows $L\subseteq\Sigma^*$, while the local exact clock is promised only on binary inputs. Copying an arbitrary $x\in\Sigma^*$ unchanged to the clock therefore does not invoke the clock guarantee.
- Repair: during the already-accounted $O(n)$ copying pass, the combined machine now copies $x$ for $N$ and writes the same-length binary clock input $0^{|x|}$. Thus the exact clock runs for $T(|x|)$ on every input alphabet, including the empty input. The contract's risk review was synchronized.
- Contract synchronization: all five owned consumer citation quotes were refreshed to the repaired Definition text.
- Dependencies read: `items/def-dtime-ntime-dspace-and-nspace.md`, `items/def-nondeterministic-accepting-computation.md`, and `items/def-machine-time-and-space-constructibility.md`.
- External sources: none needed; the defect and correction follow directly from the declared input domains and the existing $O_N(n+T(n)+1)$ accounting.
- Post-edit guard: `fac294af17e624e06dd57b1d4ad5717d23357033cfb7c40e64510ba35a9608d0`.
- Focused checks: item precheck (definition, 0 proof-bearing checked), strict batch-10 proof contract (0 errors, 0 warnings), and targeted rendercheck (pass).
- Defect ledger: `p2-next17-step7-f-clock-binary-surrogate`.
- Rejudge target: this item.

### `lem-space-bounded-machine-configuration-count`

- Rejection: `(lem-space-bounded-machine-configuration-count, gpt-5.6-terra, e973b32dae8dd36cdf6b69a4bbe07e641d05e07224a34b5377dfa18919aff878)`.
- Outcome: `confirmed_fatal` (`dependency_citation`; F1 inflated the cited resource interface).
- Pre-edit guard: `78e3a6ed7b78567b908f4b02e66466e1d19de45283c7e3c0fa7cb45aa99d0fc2` (matches the `pre-step7` prefix `78e3a6ed7b78567b`).
- Evidence: the cited polynomial-space definition specifies the visited-cell measure and initial-head accounting, but it does not state that visited cells form prefixes or describe the multitape transition rule. The original F1 attributed all of those claims to it.
- Repair: F1 now quotes only the resource-counting interface. The Given clause declares the exact deterministic multitape model and standard input configuration, and step 1.1 derives the prefix and unchanged-unvisited-cell facts from head-at-zero, unit moves, and scanned-cell-only writes. The direct multitape dependency, manifest entry, and proof contract were synchronized.
- Dependencies read: `items/def-polynomial-space-and-nondeterministic-polynomial-space.md`, `items/def-multitape-and-nondeterministic-machines.md`, `items/def-turing-machine-configuration.md`, and `items/def-turing-machine-initial-and-halting-configuration-interface.md`.
- External sources: none needed; the correction uses only the exact local machine interfaces and an elementary head-path derivation.
- Reader warning `s8a-57c60367e74f604c57e664fe`: `nonfatal`. For nonempty feasible configurations the proof obtains the stronger $O_M(S)$ bound; for $S<k$ the configuration set is empty. The canonical prefix is defined from the current configuration alone, not its history.
- Post-edit guard: `0c64f1a662fed5814db44723a6a00dfb3600def36f9a2c1a2836a04e818d0dd1`.
- Focused checks: item precheck (pass), strict batch-10 proof contract (0 errors, 0 warnings), targeted rendercheck (pass), valid manifest-deps invocation (21 items, 0 errors), and frontier dependency-ledger refresh (pass; the batch-10 same-frontier input remains empty because the new direct supplier is published).
- Defect ledger: `p2-next17-step7-f-config-prefix-citation`.
- Rejudge target: this item.

### `thm-tqbf-pspace-completeness-interface`

- Rejection: `(thm-tqbf-pspace-completeness-interface, gpt-5.6-terra, 452509e78c307a1e5cd3eeec214aa734445f5fec64e0163fdbf0b7eb44a6bea3)`.
- Outcome: `confirmed_fatal` (`dependency_citation`; the $k$-tape edge construction lacked a matching machine-model interface).
- Pre-edit guard: `6052a815db4eb097e00f623b062b327c4dc19a9eebba27d3fd915a6352aa364e` (matches the `pre-step7` prefix `6052a815db4eb097`).
- Evidence: step 2.1 enumerated tuples of symbols and head positions for every tape of a fixed polynomial-space decider, while F4 and F5 supplied only a one-tape transition relation and one-tape configuration data. Neither licensed the simultaneous $k$-tape update asserted there.
- Repair: the theorem now directly depends on `def-multitape-and-nondeterministic-machines`, states its simultaneous $k$-tape transition interface as L1, and uses F4's left-boundary rule componentwise. The batch manifest, theorem contract, and the complete proof excerpt quoted by the QBF example were synchronized.
- Dependencies read: `items/def-multitape-and-nondeterministic-machines.md`, `items/def-one-step-configuration-relation.md`, `items/def-turing-machine-initial-and-halting-configuration-interface.md`, `items/def-polynomial-space-and-nondeterministic-polynomial-space.md`, and the repaired `items/lem-space-bounded-machine-configuration-count.md`.
- External sources: none needed; the missing interface and correction are exact local definitions.
- Reader warning `s8a-464a573605db9ea88b8d8c50`: `nonfatal`. At most $N$ frames plus even a full $O(N)$ residual representation per frame is $O(N^2)$, and the text explicitly reuses child workspace after retaining one answer bit. The implementation layout is terse, not exponential or false.
- Post-edit guard: `1a7485d5e802fd9bdef4236acec9cdb4b3855c50a2738b2bad15f85143618907`.
- Focused checks: item precheck (pass), strict batch-10 proof contract after consumer synchronization (0 errors, one non-blocking shotgun-citation warning in the separate padding theorem), targeted rendercheck (pass), manifest-deps (21 items, 0 errors), and frontier dependency-ledger refresh (pass).
- Defect ledger: `p2-next17-step7-f-tqbf-multitape-interface`.
- Rejudge target: this item.

### `ex-qbf-reachability-recursion-space-accounting`

- Rejection: `(ex-qbf-reachability-recursion-space-accounting, gpt-5.6-terra, dfd5d33213dd5321c7360195220098405d927124a7527a9d50e7df2f96e3064f)`.
- Outcome: `false_positive`; no example content, manifest, dependency, or impact edit.
- Guard: `bdb036b150f4faa92ede0d20eec06611828c0cca723c2e1437c8e34cadc93f6d`.
- Evidence: F1 says the reachability recurrence is *proved in* the TQBF theorem, not stated in its theorem interface. The cited theorem's proof steps 3.1, 4.1, and 6.1 respectively define the one-copy midpoint/selector recurrence, prove its reachability semantics in both directions, and derive its polynomial occurrence count. The example's proof contract contains those full supporting steps and an exact proof locator.
- Dependencies read: complete current `items/thm-tqbf-pspace-completeness-interface.md` and `items/lem-space-bounded-machine-configuration-count.md`; the proof excerpt was synchronized after the theorem's independent repair.
- External sources: none needed; the complete cited proof on disk directly contradicts the rejection premise.
- Focused checks: no example edit and no rejudge target; the synchronized consumer contract passes strict validation.

### `lem-no-recursive-bound-covers-all-recursive-unary-languages`

- Rejection: `(lem-no-recursive-bound-covers-all-recursive-unary-languages, gpt-5.6-terra, 3d69a79f0b57a9c138a8e13642727cb64b8eb8a23f2ecf5ae5b476de2581abc7)`.
- Outcome: `confirmed_fatal` (`dependency_citation`; F2 overgeneralized a two-tape code to variable-tape tables).
- Pre-edit guard: `fc0b11789bff45322d323017d6657a139e4c506064038b3b1787f48ac30a6e92` (matches the `pre-step7` prefix `fc0b11789bff4532`).
- Evidence: the cited lemma constructs and parses numeric tables only for nondeterministic two-tape machines. Original F2 restated this as a unique parser for finite numeric transition tables without that arity restriction, then step 1.1 applied it to a syntax carrying an arbitrary positive tape count $k$.
- Repair: F2 now retains only the cited variable-arity self-delimiting numeral blocks and finite bounds/length/order checks. Step 1.1 explicitly defines the new variable-tape syntax and derives its total decoder: recovered $k$, state size, and alphabet size determine the finite source-tuple list and every row's arity and ranges. The diagonal argument and theorem statement are unchanged.
- Dependencies read: `items/lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation.md`, `items/def-effective-encoding-of-turing-machines.md`, `items/lem-machine-encoding-is-injective-and-decodable.md`, and `items/def-dtime-ntime-dspace-and-nspace.md`.
- External sources: none needed; this is a finite coding construction from the complete local source proof.
- Post-edit guard: `d1f00c6fe11b00c89addc7f5373273c1593e300b778fb2d6a98cdbf77ca2534f`.
- Focused checks: item precheck (pass), strict batch-10 proof contract (0 errors, one non-blocking padding-theorem citation warning), and targeted rendercheck (pass).
- Defect ledger: `p2-next17-step7-f-variable-tape-decoder`.
- Rejudge target: this item.

## Reader-warning dispositions

- `s8a-83f5426cd6a158a8675b84ec` — `nonfatal`; the finite allowed relation determines its forbidden complement, including fixed-marker boundary variants.
- `s8a-80c32eedf4d306b6c0e99be3` — `nonfatal`; the quantifier order makes $p$ the fixed certificate length after the optional conversion.
- `s8a-0ae1cdf99fa5b3031fa343d7` — `nonfatal`; $a(n+1)\ge n+1$ gives $A(n+1)\le3K a(n+1)=o(T(n))$, so F7 supplies the threshold.
- `s8a-c59c69ba3ea16eec8217c789` — `nonfatal`; both inductions explicitly use the bounded-test base range $k\ge r(m)$ and the extension/step-3.2 descent only for $k<r(m)$.
- `s8a-3faec548b058b9ded939219d` — `nonfatal`; literal finite-table composition runs $M_d$ on the current $(x,d)$ tapes, and the final compiler directly enters A after prefixing e.
- `s8a-464a573605db9ea88b8d8c50` — `nonfatal`; the stated frame count and reuse give polynomial workspace even under the warning's deliberately wasteful $O(N)$-per-frame layout.
- `s8a-57c60367e74f604c57e664fe` — `nonfatal`; feasible configurations satisfy the stronger $O_M(S)$ bound, the $S<k$ set is empty, and the canonical prefix depends only on the current configuration.
- `s8a-1459e31e875d538f9fec5b5c` — `nonfatal`; the newly built simulator may use a fixed product alphabet for its tracks, and its frontier coordinate is bounded by the larger of the input extent and the $t$ unit head moves, plus one boundary cell.
- All eight dispositions were appended to `research/phase-2-next-17-step7-alert-decisions.jsonl`. No reader warning independently licensed a fatal repair.

## Cross-group alerts

None. Every inspected dependency was published or owned by group f, and no defect was found in another group's item.

## Final focused checks

- Group reconciliation: 21/21 owned items retained; 7/7 exact rejection tuples have decisions (`confirmed_fatal`: 5, `false_positive`: 2); 8/8 owned reader warnings have dispositions; 5/5 fatal repairs have one matching defect-ledger row, and each current item guard equals its recorded `post_sha256`.
- `node tools/tsx-run.mjs tools/precheck.mts <21 owned item paths>`: pass, 17 proof-bearing items checked and 0 failing.
- `node tools/proof-contract.mjs research/phase-2-next-17-batch-10.proof-contracts.json --strict`: exit 0, 21/21 items checked, 0 errors. It retains one non-blocking `shotgun-bracket` warning on padding-theorem step 1.1; that warning concerns citation placement and does not identify a false fact, inference, or dependency.
- `node tools/rendercheck.mjs <21 owned item paths> <4 owned page paths>`: pass, 25 files.
- `node tools/manifest-deps.mjs research/phase-2-next-17-batch-10.pages.json`: pass, 21 items and 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17`: pass after the final dependency edit. Batch 10 still has no same-frontier cross-batch dependency row.
- Repository dependency checks: `depcheck --pending-audit-ok` and `fwdcheck --quiet` both exit 0; all references resolve and there are no cycles or undeclared forward references.
- JSON/JSONL parsing and targeted `git diff --check`: pass for the owned items and report, batch manifest/contract, refreshed frontier ledger, adjudication ledger, alert decisions, and defect ledger.
- Prescribed strict `step7-scope.mjs check --run phase-2-next-17`: run, but globally blocked by 21 reader warnings still lacking decisions in other groups. The same check with `--allow-pending-alerts` passes: 7 groups, 571 items, 92 rejections, and all 8 group-f warnings decided.
- Prescribed `step7-guard.mjs` against `pre-step7`: run. It reports no error for any group-f change; all five are licensed. The global command remains red only for group-g state: an unlicensed edit to `fs-l-equals-v-in-zf` and the new `lem-finite-support-constructibility-absoluteness`, which lacks both a licensed consuming fatal repair and current auditor-created certification.
- Global defect-ledger check was also run and found no missing group-f row; its sole current error is another group's missing row for `thm-cartan-eilenberg-injective-resolutions-exist`.
- Rejudge targets: `def-boolean-formulas-cnf-and-satisfiability-interface`, `def-nondeterministic-acceptance-time-and-exact-clock`, `lem-space-bounded-machine-configuration-count`, `thm-tqbf-pspace-completeness-interface`, and `lem-no-recursive-bound-covers-all-recursive-unary-languages`.
