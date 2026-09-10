# Step 7 adjudication report — group f

Run: `phase-2-nine-step-25`  
Role: group Alpha, batches 12 and 13

## Sources consulted

- Joseph J. Rotman, *An Introduction to the Theory of Groups*, Chapter 12, especially printed pp. 420–447: <https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf>. Used to check the normalized-machine target convention, the exact Boone presentation on p. 431, the HNN tower and terminal-state generator on pp. 438–440, the commutator extraction on p. 440, and the signed-history reconstruction on pp. 443–447.
- Stephen G. Simpson, “A Slick Proof,” Definition 1 and Theorem 8: <https://sgslogic.net/t20/logic/seminar/050517.pdf>. Used to cross-check the HNN orientation convention and the fixed-finite-presentation endpoint.

## Completed adjudications

### `cex-deleting-stay-put-moves-does-not-preserve-computation`

- Tuple: `gpt-5.6-terra` / `419124756a9b1537047185626e05452bcb79407cfba023a66b201d9f002a8d4a`; pre-edit guard `c6033fdf6dab94e69f242e3305880ea20840663571bd4fec945505300d9a4b86`.
- Outcome: `confirmed_fatal` (`logic`). The title universally claimed destruction, whereas the item proves only that deletion need not preserve a computation.
- Repair: narrowed the title to “Deleting stay-put instructions need not preserve computation” in the item and its batch-12 manifest. The mathematical witnesses and dependencies were unchanged.
- Post-edit guard: `4f07930b74de51fd759497a1a933539b30a8cba840c6d464641515e74f29179a`.
- Focused validation: `precheck` passed. Rejudge target: this item.
- Immediate handoff: completed on recovery; the one paid rejudge returned `keep: true`, so no final-adjudicator pass was required.

### `def-boone-group-presentation-and-special-word`

- Tuple: `gpt-5.6-terra` / `c0b3594ea60632f67924c423086d19bfac06e08bc327215180b4bb4bee4688c9`; guard `acffc7d50ec1ae4e408bb72f12512fc3cd40d705e30f9a0ca1850a8d202a4dcc`.
- Outcome: `false_positive`. Rotman p. 431 gives exactly the single relation $k(q^{-1}tq)=(q^{-1}tq)k$ for the distinguished terminal state symbol $q$; it does not impose the proposed family for every $q_j$. The local definition faithfully states the source presentation.
- Repair and rejudge: none. The item was not changed; its definition-only focused precheck had no proof body to check and reported zero failures.

### `ex-boone-sharp-is-not-word-inversion`

- Tuple: `gpt-5.6-terra` / `ecab52c2ab198397db7b094455354a896879e02402f7fe6c518157d2d2e35cbf`; pre-edit guard `3748830602ba459cc42a902eccef7b306aa8ef06c5e855489969e1c2b6ac6ade`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The witness needs the exact facts that $s_0\in S$, that $h$ is new and distinct from $S$, and that both lie in $\bar S$. The prior sole dependency did not state those facts.
- Repair: added `def-boone-machine-semigroup-and-augmented-configurations` as a direct dependency and separated its alphabet/distinctness interface from the sharp-operation fact. The batch-13 manifest dependency list was synchronized.
- Post-edit guard: `be7593f9d82d0637bee2cf433ffad449518814711c984a2412e222c14ef7ec28`.
- Focused validation: `precheck` passed; the frontier ledger was refreshed after the dependency edit. Rejudge target: this item.
- Immediate handoff: completed on recovery; the one paid rejudge returned `keep: true`, so no final-adjudicator pass was required.

## Additional completed adjudications

### `lem-boone-commutator-extracts-an-auxiliary-history`

- Tuple: `gpt-5.6-terra` / `348c9b8211884cafab195734a678edcc667f480597fbb81dfc077566834cc803`; guard `d67f932f5ddf1f0edc856a5758c0edc70fef61637569447b5035fdce5ec05e46`.
- Outcome: `confirmed_nonfatal`. With $g=\Sigma^{-1}t\Sigma$, elementary inversion gives $g^{-1}=\Sigma^{-1}t^{-1}\Sigma$, so the defined word $W(\Sigma)$ is literally $kgk^{-1}g^{-1}$. This is an immediate substitution, not a false inference. Rotman Lemma 12.13 uses the same opening reduction.
- Repair and rejudge: none; the item remains byte-for-byte unchanged.

### `lem-boone-hnn-tower-and-auxiliary-subgroups`

- Tuple: `gpt-5.6-terra` / `a7182971f4237ba658ce4ac909da62dd61a4c04f48ecce3fa839561b90ae7688`; pre-edit guard `fa9a152bdb3436bd475d7095b1cfe4fcc228ae47d17d9649a05d7393192083e3`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The direct interface did not introduce the distinguished $q$ used in $D=\langle C,q^{-1}tq\rangle$ or supply the claimed exact comparison with $\mathcal B$.
- Repair: added the semigroup construction and Boone-presentation definition as direct dependencies, using the former to introduce $q\in\bar Q$ and the latter to identify the rule and centralizer relations. The batch-13 manifest was synchronized.
- Post-edit guard: `e71e37538b2e81c7f43d2ecbd962ab11456a0328f9d53087a950b05ed52f892c`.
- Focused validation: `precheck` passed; the frontier ledger was refreshed. Rejudge target: this item.
- Immediate handoff: completed on recovery; the one paid rejudge returned `keep: true`, so no final-adjudicator pass was required.

### `lem-boone-positive-history-reconstruction`

- Tuple: `gpt-5.6-terra` / `606acaaf9fff441cb0e6754da84e3770ca0847b550e3b7919d9f87aebe1ff560`; pre-edit guard `92058d09f8d145e9dc141d31fd806737d3264a033398f29ea1e0c2b69bfb6844`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The abstract basis isomorphism did not determine which stable-letter conjugation realizes it, yet steps 1.4 and 4.1 used both orientations.
- Repair: added `lem-boone-hnn-tower-and-auxiliary-subgroups` as a direct dependency and stated its exact convention $r_i^{-1}ar_i=\phi_i(a)$, then cited it for the forward and inverse edge maps. The batch-13 manifest was synchronized.
- Post-edit guard: `9c119dfc89376214283f8e88fb03dff2f0b2359a999ff7d42f80f5874b20e122`.
- Focused validation: `precheck` and the synchronized item proof contract passed; the frontier ledger was refreshed. Rejudge target: this item.
- Immediate handoff: the one paid rejudge returned `keep: false`, identifying that positivity of the rule contexts and their defining $\Gamma$ relation were still not supplied. The authorized final adjudicator repaired the dependency interface by adding `def-boone-machine-semigroup-and-augmented-configurations` and `def-boone-group-presentation-and-special-word`, synchronized the owning manifest and proof contract, refreshed the frontier ledger, and recorded terminal disposition `repaired`. Its focused `precheck`, strict contract check, and `rendercheck` passed. Final guard: `c30ec2573d8f0c5bc8666852af86acad9b4bfc3193174c860b509ede6c42b48a`; full evidence is in `research/phase-2-nine-step-25-step7-fa-f-item-8b7ef52b2a314d52-evidence.md`.

### `thm-fixed-finite-semigroup-has-undecidable-terminal-equality`

- Tuple: `gpt-5.6-terra` / `d4ba50c87e54785fb792e7a9b3e483208d8cc0e1693c8bca89723fbe597eb6ba`; pre-edit guard `4dc1f3169fe8d1e7f75f7fa3313e6f170601e6ddbd6972c119b6b47123c8dc2f`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The two prior suppliers gave normalization and the halting/equality iff, but neither stated that $\Gamma$ is a fixed finite positive presentation with exactly one state letter on each relation side.
- Repair: added the semigroup construction as a direct dependency and fact supplying finiteness, $q$, $C(w)$, and the one-state-letter normal form; step 1.1 now cites it. The batch-13 manifest was synchronized.
- Post-edit guard: `d2264e505378246cf51fe633a63b33c02be4125ced61f3e433c96bafc1d4e864`.
- Focused validation: `precheck` passed; the frontier ledger was refreshed. Rejudge target: this item.
- Immediate handoff: completed on recovery; the one paid rejudge returned `keep: true`, so no final-adjudicator pass was required.

### `thm-novikov-boone-undecidability-of-the-word-problem`

- Tuple: `gpt-5.6-terra` / `4920c28b84ddfffa064c3f3671299d2931b8f35acb3e4ea3ed4788102a8a4e06`; pre-edit guard `41e4dcd46240a0cd243820ed37ae18e2b8279b6eeffd0bb5d7110f45fe73453e`.
- Outcome: `confirmed_fatal` (`dependency_citation`). The group-presentation definition supplies the generic special-word and $W$ interfaces, but the original fact row wrongly attributed $h$, $q_{\rm start}$, $v$, and $C(w)$ to it.
- Repair: added the semigroup construction as a direct dependency and fact; the proof now obtains $C(w)=hq_{\rm start}v(w)h$ and the positive contexts from that interface, then applies the group definition to conclude that $\Sigma(w)$ is special and $\Sigma(w)^*=C(w)$. The batch-13 manifest was synchronized.
- Post-edit guard: `1b416b1ed023dfeab09d87da3b3ecc9a4bc047b7aa948ac66d9dfaad644dcedf`.
- Focused validation: `precheck` passed; the frontier ledger was refreshed. Rejudge target: this item.
- Immediate handoff: the one paid rejudge returned `keep: false`, identifying that the proof had not supplied effective computability of $v$ or its empty-input value. The authorized final adjudicator added `lem-normalized-fixed-halting-machine-for-boone-simulation` as the direct supplier, synchronized the owning manifest and proof contract, refreshed the frontier ledger, and recorded terminal disposition `repaired`. Its focused `precheck`, strict contract check, and `rendercheck` passed. Final guard: `f6293031287ce17f9bec9478a0dd187940bd21d18b2e6dc74a0333de83a8a058`; full evidence is in `research/phase-2-nine-step-25-step7-fa-f-item-419db4576bb5699a-evidence.md`.

## Step-6 reader warning

### `s8a-783bc07a263a663e712d549d` on `lem-normalized-fixed-halting-machine-for-boone-simulation`

- Outcome: `nonfatal`; unchanged guard `9884ea96c0968c80af20d74907dfe157899fea48f2c09a0d7b7492375c04cfab`.
- Reason: the published right-infinite/two-outcome definition supplies the source recognizer $R$, not a claimed definition of the target $T$. The lemma itself constructs $T$'s finite doubled alphabet, finite exhaustive table, sole stopping state, and two-instruction simulation. Steps 3.1–4.2 prove that negative cells are never used and explicitly establish the five finite-description cases required by the semigroup construction. A standalone target-class definition would be expository polish, not a correction to a false claim or missing mathematical interface.
- Repair and rejudge: none. Focused `precheck` passed.

## Completion summary

- Rejections: 8 adjudicated — 6 `confirmed_fatal`, 1 `confirmed_nonfatal`, 1 `false_positive`.
- Reader warnings: 1 adjudicated `nonfatal`.
- Completed rejudge targets: `cex-deleting-stay-put-moves-does-not-preserve-computation`, `ex-boone-sharp-is-not-word-inversion`, `lem-boone-hnn-tower-and-auxiliary-subgroups`, `lem-boone-positive-history-reconstruction`, `thm-fixed-finite-semigroup-has-undecidable-terminal-equality`, and `thm-novikov-boone-undecidability-of-the-word-problem`.
- Cross-group alerts: none. Every added dependency is to an earlier item in batch 13, so no cross-batch frontier input was added. The unified frontier ledger was refreshed after every dependency edit.
- Missing-dependency lemmas: none added.
- Resume integrity check: all six repaired items pass focused `precheck`; the batch-12 contract passes for its repaired item, and the batch-13 contract passes for all five repaired items. The stale batch-13 citation and derivation rows for `lem-boone-positive-history-reconstruction`, `thm-novikov-boone-undecidability-of-the-word-problem`, and `ex-boone-sharp-is-not-word-inversion` were synchronized to their already licensed repairs.
- Final handoff integrity: each of the six repaired items has exactly one paid rejudge cycle. `step7-terminal-resolution check --allow-missing` validated all 12 existing run-wide terminal resolutions with zero errors.
- Step-7 guard after all group-f handoffs: 65 run-wide changes, 60 licensed by a fatal adjudication or terminal resolution, and 10 errors. None of the 10 errors names a group-f item; they are five published-repair-provenance findings and five unlicensed-edit findings owned elsewhere. The command exited 1, so the whole-run guard did not pass.
- Step-7 scope check: one run-wide problem remains, the absent owning-group disposition for alert `s8a-88255d9a84fb7df7224ef579` on `tor-flatness-and-global-dimension-examples`; it is outside group f. This is not a claim that the whole-run scope gate passed.
- Defect-ledger check after all group-f handoffs: all six group-f `confirmed_fatal` tuples have matching defect rows. The run-wide command checked 86 rows and exited 1 because `thm-conditional-monotone-convergence` and `lem-relator-expressions-give-controlled-singular-planar-diagrams`, both outside group f, still lack rows for their confirmed-fatal adjudications.
- Recovery result: all six controller-side handoffs completed. The repaired counterexample, sharp example, HNN-tower lemma, and fixed-semigroup theorem were accepted by their single paid rejudges. `lem-boone-positive-history-reconstruction` and `thm-novikov-boone-undecidability-of-the-word-problem` were rejected by their paid rejudges, then repaired and terminally resolved by the authorized final adjudicator. No group-f handoff remains and no group-f mathematical blocker is unresolved.
