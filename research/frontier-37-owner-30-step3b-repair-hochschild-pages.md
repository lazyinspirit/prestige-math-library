# Step-3b page handoff repair: Hochschild hyperhomology

## Entry checkpoint

- Objective: restore the two missing draft page carriers for batch 19 pair
  `hochschild-hyperhomology-and-cyclic-tensor-invariance` and correct the
  pair-author report's page-completion claim additively.
- Authorized write scope: only this report, the pair-author report, and
  `library/homological-algebra/hochschild-hyperhomology-and-cyclic-tensor-invariance.md`
  plus its `-examples.md` companion.
- Before writing, both target page paths were absent; `rg --files library`
  returned no alternate copies. The batch-19 manifest identifies A-page order
  727, category `homological-algebra`, title
  `Hochschild Hyperhomology and Cyclic Tensor Invariance`, companion
  `hochschild-hyperhomology-and-cyclic-tensor-invariance-examples`, and three
  required pages. Its B companion is order 728, has the matching examples title,
  and requires the A page.
- The current manifest declares eight A items and three examples. The dispatch
  report says all eleven items were authored, checked and accepted and claims
  both pages contain them; the two page files are nevertheless absent. This
  repair does not reauthor items or revise manifest, contracts, decisions, or
  other run evidence.
- The workspace has many concurrent changes outside this assignment. They are
  treated as read-only; no integration or commit is in this repair scope.
- Entry next action was to finish the item/proof and nearby-page convention
  read, then write and check the two draft pages. That work is complete and its
  results and suspected item defects are recorded below.
- Current handoff: page carriers are restored, while the separate proof repair
  is auditing item statements and arguments. This page repair does not close the
  mathematical handoff; the owner retains integration and gate closure.

## Pages written and checks

- Restored the A page and its `-examples` companion in
  `library/homological-algebra/`. Both use the manifest's category, IDs, titles,
  order numbers, companion IDs, and `requires` lists. The A page places its
  eight items in dependency-level order; the B page places all three examples
  in dependency-level order.
- Compared parsed page YAML against
  `research/frontier-37-owner-30-batch-19.pages.json`: metadata matches for both
  rows; coverage is 8/8 and 3/3; all eleven item files exist and their titles
  and kinds match the manifest. No duplicate or omitted ID was found.
- Ran `node tools/rendercheck.mjs` on the two page files. After fixing one
  multiline display formula, it passed: both YAML blocks parse, every math span
  parses under KaTeX, and there are no delimiter, wikilink-in-math, or display
  rendering errors.
- The pages remain `draft`. These page checks establish their rendering and
  manifest coverage only; they do not certify the mathematics. No item, manifest,
  proof contract, decision, source coverage, or shared scope-decision file was
  changed by this repair.

## Proof and interface concerns referred to the owner

These concerns came from reading the actual item statements and proof bodies;
the dispatch report's metadata and checks alone would not show them. They were
sent to the owner and to the separate proof-repair author. They are not repaired
in the page scope and remain pending that audit.

1. `thm-hochschild-hyperhomology-is-resolution-independent.md`, proof 1.2
   (observed at item lines 101–102): the stated tensor differential is
   `(-1)^p d_F + b`, while the page definition uses `d_F + (-1)^i b` and
   `n=i-p`. The proof says a total-degree factor `(-1)^n` makes the bar/Hochschild
   identification a chain isomorphism. On the `d_F` component from `(i,p)=(0,0)`
   to `(1,0)`, source and target differentials both have coefficient `+1`, but
   the claimed factor changes from `+1` to `-1`. A bidegree factor
   `(-1)^{ip}` satisfies both the `d_F` and `b` sign equations for these stated
   conventions; the current total-degree factor does not. This threatens the
   resolution-independence interface used by downstream cyclicity claims.
2. `lem-double-bar-comparison-for-cyclic-bimodule-tensor-products.md`, statement
   (item line 51) and proof 1.3 (line 104): for bidegree `(p,q)` on
   `Bar_p(A)\otimes_A M\otimes_B Bar_q(B)\otimes_BN`, the stated differential
   `d_A+(-1)^q d_B` does not anticommute on the two bar directions when each
   lowers its own homological degree. The cross terms have the same sign. The
   standard total differential `d_A+(-1)^p d_B` is compatible with rotation by
   `(-1)^{pq}`; proof 1.3's `(-1)^j` on the A-bar degree appears to use that
   convention instead of the statement's `q`. The double-bar comparison and its
   cyclicity consumers therefore need proof/interface reconciliation.
3. `ex-cyclic-tensor-coinvariants-of-matrix-bimodules.md`: the introductory
   line 58 identifies the row-by-column product `e_i e_j^{\mathsf T}` with a
   matrix unit, although its type and value are the scalar `\delta_{ij}`; the
   matrix unit is the column-by-row product `e_j^{\mathsf T}e_i=E_{ji}`. Proof
   1.1 (line 95) also gives `v\mapsto vE_{11}` as a section from row vectors
   `k^{1\times n}` to `M_n(k)`, which is ill-typed and does not split first-row
   projection. The projectivity claim is true, for example from
   `M\cong E_{11}B`, but this displayed proof map needs correction.

The owner also reported that the parallel audit found additional omitted
projectivity and boundedness arguments in the double-bar item. Those findings
remain with the proof-repair author; this report does not certify or amend them.

## Group-d reading-list declines

`research/frontier-37-owner-30-batch-19.coverage.json` records full-text retrieval
and text-read evidence for BPW §3.8.4–3.8.6 (complete 85-page PDF; SHA-256
`3781e14d…`), Weibel Chapter 9 §§9.1 and 9.5 (complete 69-page PDF;
`5bf5c097…`), Weibel Chapter 5 §§5.5–5.6 (complete 40-page PDF;
`3f79f0ca…`), and Khovanov pp.5–7 (complete 19-page PDF;
`548a0eec…`). Coverage records the relevant passage locators, read methods, and
reasons for each decline. My recommended group-d disposition is to uphold all
thirteen declines: each is a distinct twisted, quantum, general Morita, group,
singular-algebra, or braid application outside the selected untwisted
bounded-complex claims, or a strictly broader result than the selected
right-projective hypotheses establish.

| Source passage | Recommended disposition | Scope reason in the recorded evidence |
|---|---|---|
| BPW §3.8.4, twisted differential (3.40) | Uphold decline | Automorphism-twisted coefficients need a separate twist convention. |
| BPW §3.8.5, quantum differential and rotation (3.41)–(3.43) | Uphold decline | The q-deformed relation and noninvolutive shadow are outside ordinary q=1 cyclicity. |
| BPW Corollary 3.22 | Uphold decline | A q-weighted endomorphism trace formula is not the ordinary cyclicity claim. |
| Weibel Example 9.1.2 | Uphold decline | Group-ring comparison is a separate group-homology application. |
| Weibel Proposition 9.1.6 | Uphold decline | Tensor-algebra homology needs a separate universal-derivation resolution. |
| Weibel Exercise 9.1.4 | Uphold decline | Truncated-polynomial periodic homology is a separate singular-quotient computation. |
| Weibel Exercise 9.5.1 | Uphold decline | General Morita-category properties are not needed for the explicit matrix rotation. |
| Weibel Corollary 9.5.3 | Uphold decline | Arbitrary coefficient matrix extension is broader than the regular matrix example. |
| Weibel Exercise 9.5.2 | Uphold decline | Endomorphism-ring characterizations do not enter the selected proof. |
| Weibel Theorem 9.5.6 | Uphold decline | Arbitrary-coefficient Morita invariance exceeds the lemma's finite right-projectivity assumptions. |
| Khovanov Proposition 1 | Uphold decline | Rouquier-complex invariance is a braid-track result. |
| Khovanov Soergel graphical presentation | Uphold decline | Braid diagrammatics are not prerequisites for abstract cyclic tensor comparison. |
| Khovanov Theorem 1 | Uphold decline | Closure invariance and the KR comparison require braid-specific Markov and writhe data. |

I did not write or change the shared group-d scope-decision file. The
recommendations above are evidence for its later serial reconciliation, not
scope decisions on behalf of the shared owners.
