# Frontier 32 — Step 8 group g adjudication

Run: `frontier-32`  
Role: `alpha-adjudicate`  
Group: `g`  
Batches: `13`  
Pages: `co-e-free-comb-structure`, `co-e-free-comb-structure-examples`

## Result

All five exact judge rejections assigned to group g are `confirmed_fatal`. Each repaired item has one exact pre-edit guard-bound adjudication in `research/frontier-32-judge-adjudications.jsonl` and one matching row in `research/defect-ledger.jsonl`. The single Step-7 reader warning is `covered_by_rejection` because it identifies the same invalid inference as the exact external-purity rejection.

The five repairs and their synchronized batch-13 contracts pass the focused checks. They are the only group-g Step-8 rejudge targets.

One additional load-bearing defect remains unedited because neither an exact judge rejection nor a Step-7 warning licenses it: `thm-special-vertex-local-structural-partition-criterion-implies-property-star` invokes published lemmas whose statements assume the universal structural comb-partition hypothesis, although the theorem assumes only local partitions for special-vertex combs. This is recorded below as a blocking, unlicensed group-local finding.

## Scope read

The complete A/B pair was read: 17 owned items, both page files, all direct dependencies, and the indirect definitions and quotient lemmas used by the rejected steps. The current judge ledger was re-read after repair; it contains exactly the five assigned keep-false tuples below for batch 13 and no later batch-13 rejection.

No dependency edge crosses the group boundary. No cross-group alert was raised, and `research/frontier-32-step8-cross-group.jsonl` was not modified.

## Original source consulted

Shenwei Huang, Yiao Ju, and Yidong Zhou, [“Erdős-Hajnal beyond the five-vertex path,” arXiv:2606.06258v2](https://arxiv.org/html/2606.06258v2), Section 6.1.

- Claim 6.4.1 states the mixed-on-the-particular-induced-path hypothesis and gives the exact co-$E$ witness sets: $\{x,y,u,a,b,c\}$ for two consecutive nonneighbours and $\{y,u,a,b,c,d\}$ for three consecutive neighbours. This supports the path-run lemma and confirms that $x$ is ambient but absent from the second six-vertex co-$E$ witness.
- Claim 6.4.2 applies Claim 6.4.1 to the explicit rim-leaf and hub paths. Its case relations make $u$ mixed on each path before the run prohibition is used.
- Claim 6.4.3, final paragraph, applies Claim 6.4.2 with $(x,y,u)=(y',u',u_2)$, not with $(x',y')$.
- The construction immediately after Claim 6.4.2 defines the overlap relation inside a fixed comb block $B_i$, its initial blockade, and the mixed-quotient iteration.

## Judge adjudications and repairs

### 1. `ex-an-h-five-overlap-class-and-its-terminal-quotient`

- Rejection tuple: model `gpt-5.6-terra`; context `1848c86a2c2719f73913368859a9b7b2d7a42217f39b449b2a60b91c4182f396`.
- Outcome: `confirmed_fatal`.
- Defect type: `other`.
- Defect ledger: `frontier-32-A8-g-001` (`ill-typed-construction`).
- Pre-edit guard: `f10a29eb0f9b84368c0fc8a0452cc0fd622828a0caac14f8e7796ed851ac3ab0`.
- Post-edit guard: `b5d977cf69905f9b6c858ec26e9521786acc85e4b827f0090753979cb9244442`.
- Decision: the objection is exact. The overlap relation, $X_i$, and the quotient blockade are defined only after fixing a comb block $B_i$; the example supplied only an abstract graph.
- Repair: the example now fixes a comb block $B_i$ whose induced graph is the two displayed $H_5$ copies. The Given clause and manifest strategy were synchronized. The overlap and one-block terminal-quotient computation are unchanged.
- Rejudge target: yes.

### 2. `ex-induced-co-e-witnesses-for-both-forbidden-path-runs`

- Rejection tuple: model `gpt-5.6-terra`; context `fe93008e9de9970b7d3d23b68b1fc000c91f493b358dd45a99592070a78dc3eb`.
- Outcome: `confirmed_fatal`.
- Defect type: `other`.
- Defect ledger: `frontier-32-A8-g-002` (`invalid-witness`).
- Pre-edit guard: `f8e7eb613f1cd8c5c9bd63aa6b07cd73d65a600bb2f9ca50830b886535f2affb`.
- Post-edit guard: `5782b5b47559be591314b0aaf5291dc7a01d02705731a71e2d00da644e4c71c4`.
- Decision: the source confirms that the second induced co-$E$ witness intentionally omits $x$, but the example as written called both witnesses six-vertex configurations “together with” the complete nonedge pair. That description makes the second configuration seven vertices and conflicts with its proof.
- Repair: the example now names the exact two six-vertex induced subgraphs and explicitly says that $x$ is part of the ambient complete-nonedge-pair configuration but not part of the second co-$E$ witness. The complement-edge computation is unchanged.
- Rejudge target: yes.

### 3. `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs`

- Rejection tuple: model `gpt-5.6-terra`; context `76a798aced76a26945aeb7b9c80d446bfbe868da53848f72ac866d7db51b1a3e`.
- Outcome: `confirmed_fatal`.
- Defect type: `dependency_citation`.
- Defect ledger: `frontier-32-A8-g-003` (`citation-truncated`).
- Pre-edit guard: `09e80125ec121491a955256f0e877d58a13dec4765d38aa33aefc3324988a46a`.
- Post-edit guard: `e39d884fc64219ee742b9847672b88d9d8b42f91491f6952694386f4e5109d18`.
- Decision: F2 omitted the cited lemma's essential hypothesis that $u$ is mixed on the particular induced path. The unconditional restatement did not license the three case deductions.
- Repair: F2 now retains the mixedness hypothesis. Steps 1.1–1.3 explicitly establish mixedness on every leaf-rim or hub path before invoking F2, and the mixed-rim case explains why a forbidden cyclic run lies in an induced rim subpath containing an opposite-adjacency vertex. The proof contract was synchronized.
- Rejudge target: yes.

### 4. `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`

- Rejection tuple: model `gpt-5.6-terra`; context `1aae5d4db3acc3ee5eb7b178cff8db443d3207cc4b1f64c5e2c663238220693a`.
- Outcome: `confirmed_fatal`.
- Defect type: `dependency_citation`.
- Defect ledger: `frontier-32-A8-g-004` (`invalid-inference`).
- Pre-edit guard: `916f72e628bcb33870e087ab6c019616d419e6041f91e3d2aac523167a435f01`.
- Post-edit guard: `cc821091931128fefc5bbf4c1a22658d7ff159cf0cc91917d564c408f3c3d339`.
- Decision: the chosen vertex of $A_2$ is complete to both $x'$ and $y'$, so it is not in $N(x')\setminus N(y')$ and F1 cannot be instantiated with $(x',y')$.
- Repair: Step 4.1 now chooses $u_2\in A_2$ mixed on $A_1$, verifies that $y',u'$ are nonadjacent and complete to $A_1$, verifies $u_2\in N(y')\setminus N(u')$, and applies F1 with $(x,y,u)=(y',u',u_2)$. F1's local restatement and the proof contract were synchronized.
- Rejudge target: yes.

### 5. `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours`

- Rejection tuple: model `gpt-5.6-terra`; context `72e446f073a60be3ab730bb29537098a5cd626c5e32d8645e12277885b321b2e`.
- Outcome: `confirmed_fatal`.
- Defect type: `dependency_citation`.
- Defect ledger: `frontier-32-A8-g-005` (`citation-inaccurate`).
- Pre-edit guard: `f5bbddfed727c2f54928f473f0d7257490786adc51addd5d2c4165606542424e`.
- Post-edit guard: `2f99f1ce0bc8c610741c21bccb68814059e8e3aa6c000a429037c31e1328fa85`.
- Decision: `def-graph-walk-trail-path-and-cycle` gives distinct vertices and consecutive path edges but does not rule out chords. It cannot by itself justify F2's exact-edge assertion for an induced path.
- Repair: F2 now uses both the ordinary path definition and `def-induced-embedding-and-induced-copy`, whose biconditional preserves nonadjacency. The new dependency was added to the item, batch manifest, and proof contract.
- Rejudge target: yes.

## Step-7 reader warning

- Alert: `s8a-ea439f3710a014c12c36a164`.
- Item: `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`.
- Disposition: `covered_by_rejection`.
- Target rejection: `(lem-co-e-free-external-purity-survives-h-five-overlap-quotients, gpt-5.6-terra, 1aae5d4db3acc3ee5eb7b178cff8db443d3207cc4b1f64c5e2c663238220693a)`.
- Rationale: the reader and judge independently identify the same invalid F1 instantiation. The exact confirmed-fatal judge rejection licenses the one repair, so no second defect-ledger row or independent reader-fatal licence was created.

## Rejudge targets

1. `ex-an-h-five-overlap-class-and-its-terminal-quotient`
2. `ex-induced-co-e-witnesses-for-both-forbidden-path-runs`
3. `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs`
4. `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`
5. `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours`

No unchanged item was added to the rejudge list.

## Unlicensed group-local blocker

`thm-special-vertex-local-structural-partition-criterion-implies-property-star` assumes only that each special-vertex comb in the property-$(*)$ trigger has a local structural partition. Its manifest strategy expressly says to re-run the local layer arguments and not invoke the published universal structural hypothesis. The written proof does not do that:

- F1 invokes `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set`, whose statement assumes that $(\mathcal F_1,\mathcal F_2;\mathcal H)$ satisfies the universal structural comb-partition hypothesis.
- F2 invokes `lem-no-property-star-outcome-forces-a-small-structural-block-partition`, whose “hypotheses of the preceding two lemmas” retain the large-$Y$ lemma's universal hypothesis.
- F3 invokes `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade`, whose statement again assumes the universal structural comb-partition hypothesis.

The theorem's local premise does not imply that universal hypothesis, which covers every comb without requiring the special outside vertex. The cited lemmas' proofs use only the supplied local partition, so a source-grounded repair is available by spelling out or factoring their local versions, but the exact claims as cited cannot be applied. No judge rejection or Step-7 warning targets this theorem, so Step 8 supplies no content-edit licence. The item and its contract were left unchanged. This is a fatal dependency-citation blocker requiring a targeted rejection or an owner-authorized repair path; it is not a rejudge target in the current cycle.

## Validation

Focused checks after the final group-g edits:

- `node tools/tsx-run.mjs tools/precheck.mts <five repaired items>`: 5 checked, 0 failing.
- `node tools/rendercheck.mjs <five repaired items and two owned pages>`: 7 files, no errors; all math rendered and all frontmatter parsed.
- `node tools/content-policy.mjs research/frontier-32-batch-13.pages.json`: 17 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-13.proof-contracts.json --strict`: 15/15 proof-bearing items checked, 0 errors, 0 warnings.
- `node tools/citation-fidelity.mjs research/frontier-32-batch-13.proof-contracts.json`: 40 citations checked; no missing quote and no widening candidate.
- Exact group audit: all five repaired items have one confirmed-fatal adjudication against their pre-edit guard, a distinct post-edit guard, and exactly one matching defect-ledger row; the reader-warning ledger contains exactly one `covered_by_rejection` disposition.
- `node tools/step8-scope.mjs check --run frontier-32 --allow-pending-alerts`: passed; 7 groups, 717 items, 208 open rejections routed, and 4/13 alerts currently dispositioned.

Required whole-run checks were also run without taking over the engine's coordination duties:

- Strict `step8-scope` did not pass because nine alerts owned by other groups were still undispositioned at check time. Group g's only warning was not among them.
- `step8-guard` did not pass because the working tree had 104 post-baseline item changes, of which 20 were licensed and 84 items outside batch 13 had no recorded fatal licence at check time. The exact group audit above confirms all five batch-13 edits are licensed.
- `defect-ledger check` did not pass because 21 confirmed-fatal rows from other groups had not yet acquired matching defect rows at check time. Each group-g fatal has exactly one matching row.

These whole-run failures are concurrent stage state owned by the engine and the other assigned groups; no out-of-scope item or ledger row was altered in response.
