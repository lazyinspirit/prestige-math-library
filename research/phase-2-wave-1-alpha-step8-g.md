# Step 8 adjudication — group g

Run: phase-2-wave-1  
Role: alpha-adjudicate  
Batches: 9, 13

## Scope and evidence read

- Read all six owned pages and all 31 owned items in full.
- Opened all 36 distinct direct dependencies outside the owned item set, including the exact published interfaces named by the rejections.
- Read research/phase-2-wave-1-alpha-g-step8-context.json; it records no Step-7 concerns, reader warnings, incoming alerts, or cross-group seams.
- The live judge ledger contains exactly the four rejection tuples listed below for group g.

## Sources consulted

| Source and locator | Exact claim checked |
|---|---|
| items/def-complete-anticomplete-pure-and-x-sparse-blockades.md, Definition | The published local x-sparse blockade interface binds x in [0,1]; it does not define that notion for x greater than 1. |
| items/thm-double-counting.md, Statement | Double counting assumes finite sets X,Y and a relation R contained in X times Y before asserting the two fibre sums. |
| Bucić–Nguyen–Scott–Seymour, [Induced subgraph density I](https://arxiv.org/html/2301.10147v3), Section 2, paragraphs preceding 2.3 | A blockade is a finite sequence of pairwise disjoint vertex subsets, empty blocks are permitted, and the sparse/restricted condition bounds every vertex in the later union against the current block. |
| Same source, Theorem 3.1 and proof | The special-copy proof sums finite embedding fibres, retains fibres carrying at least half the nonedge mass, and selects one with the required edge/nonedge ratio. This confirms that the local double-counting uses have the omitted finiteness/relation hypotheses. |
| Same source, Theorem 4.4, final paragraph | Splitting an x-restricted blockade's indices by whether their fixed choice is G or its complement produces an x-sparse subsequence in one of them with at least half the length and unchanged width. |
| Same source, Sections 5.1–5.2, especially the setup before claim (1) | Logarithmic and constant divisibility use a uniformly sparse blockade, while the auxiliary result defines z,b,x,p,eta,t,delta and proves their admissibility inequalities; it does not define or prove closure of a class of functions. |

## Rejections and repairs

### def-qid-restricted-blockade-with-empty-blocks

- Tuple: gpt-5.6-terra / 88e03288d771295f6482280d0e6091cc6bf8b359bcc6dee230d925c2977b06e7
- Pre-edit itemHashGuard: b05044449c7d89fa6aee1fb8dfcd506813ad3dd761364b8d32451db91c227b42
- Outcome: confirmed_fatal
- Defect type: dependency_citation
- Evidence: the local definition allows every x greater than or equal to 0, but its statement that uniform sparsity was “precisely” the cited published notion ignored that supplier's domain x in [0,1].
- Repair: limited the equivalence claim to 0 less than or equal to x less than or equal to 1 and explicitly stated that the QID degree inequality for x greater than 1 remains meaningful but lies outside the cited published interface.
- Post-edit itemHashGuard: 26520ce25fc560270e70c77447b30f44cb1b03b2bd198f533baac99f6e242ce9
- Rejudge target: yes.

### lem-local-special-copy-trichotomy

- Tuple: gpt-5.6-terra / 974852dfe79fbb30ab25ef8acc5fac563ba17d6e411efb63ad80dbda987ead3d
- Pre-edit itemHashGuard: 52f7f0aef4958256b5ce5c84fbcbc2418656a6c9b2636595c0062ee4b1ce1897
- Outcome: confirmed_fatal
- Defect type: dependency_citation
- Evidence: F2 stated the double-counting equality without the supplier's finite-set and relation hypotheses. Both proof uses do satisfy those hypotheses because the host and all embedding/incidence families are finite.
- Repair: restored X,Y finite and R contained in X times Y in F2, and synchronized its exact citation record in the owned proof contract.
- Post-edit itemHashGuard: 5a389ab0bde0132262667496bb552b8e1e0b8e12f38a62b191261eea0214faf4
- Rejudge target: yes.

### lem-qid-logarithmic-and-constant-divisibility

- Tuple: gpt-5.6-terra / 06506376594951f8a71ded2b528910ec216519fde4c16801625972fa44e0a2d7
- Pre-edit itemHashGuard: 62b7ffef555045b73af9d0bff446b2b2c9777d4c05bf9c90f37e4e5d009a3090
- Outcome: confirmed_fatal
- Defect type: dependency_citation
- Evidence: F1 omitted the supplier's uniformly x-sparse half-subsequence, yet steps 3.1–4.1 needed exactly that property to witness ell-divisibility.
- Repair: restated the full restricted-sequence and half-subsequence conclusion in F1 and made both proof steps explicitly use the uniformly sparse subsequence. Synchronized the corresponding owned proof-contract derivations.
- Post-edit itemHashGuard: d56f3537cae5abd3e8fa861771a3c3238d5bb7cfaf04e445cbabef60df43e28c
- Rejudge target: yes.

### lem-subreciprocal-functions-close-under-the-density-recursion

- Tuple: gpt-5.6-terra / a3d983353393b976afe7a138f6268df53cde4a804888470db6ab1c0ad9d9bdf5
- Pre-edit itemHashGuard: 3df3783b4cda59940599d99485885e7900bb5af6d14a83c18aabb6503680848b
- Outcome: confirmed_fatal
- Defect type: other
- Evidence: the title asserted closure under an undefined operation, while the statement proves only admissibility inequalities for parameters obtained from one fixed subreciprocal function.
- Repair: narrowed the title to “Admissible parameters for the density recursion” and synchronized the owned batch-9 page manifest and proof plan. The established item id was preserved.
- Post-edit itemHashGuard: c2b4842ef011936d63b34ace0c5e246c044ba6d8f04318aea74ec7667c094ffb
- Rejudge target: yes.

## Durable records and scope

- Appended four exact confirmed_fatal rows to research/phase-2-wave-1-judge-adjudications.jsonl.
- Appended four matching fatal defect rows through node tools/defect-ledger.mjs append; the same interface refreshed research/DEFECT-LEDGER.md.
- Step-7 reader-warning decisions: none required.
- Cross-group alerts: none raised.
- Published-item repairs: none.
- New lemmas and scope additions: none.
- Frontier dependency inputs: unchanged; no dependency edge was added or removed.
- Rejudge set: exactly the four repaired items above. No rejudge or stage transition was initiated.

## Validation

| Check | Result |
|---|---|
| Focused precheck on all four repaired items | Passed: three proof-bearing items checked, the definition skipped by design, zero failures. |
| proof-contract.mjs on the batch-9 contract with --strict | Passed: 22/22 items, zero errors and zero warnings. |
| citation-fidelity.mjs on the batch-9 contract with --fail-on-missing-quote | Passed: 49 citations, no missing quote and no widening candidate. |
| content-policy.mjs on the batch-9 manifest | Passed: 22 scoped items, zero errors and zero warnings. |
| Repository render check | Passed: 16,767 files; YAML, math delimiters, wikilink placement, and KaTeX parsing clean. |
| defect-ledger.mjs validate --run phase-2-wave-1 | Passed at check time: 52 run rows, zero errors. |
| Group-g ledger/hash reconciliation | Passed: four exact rejections, four fatal adjudications, four matching defect rows, and four current post hashes. |
| step8-scope.mjs check --run phase-2-wave-1 | Passed on the final rerun: seven groups, 402 items partitioned, zero open rejections, and 2/2 reader warnings/alerts dispositioned. |
| Step-8 guard against pre-step8 | Passed on the final rerun: 15,818 baseline items, 26 changed, zero created or deleted, and all 26 changes licensed by exact fatal or prerequisite records. |

## Blockers

None.
