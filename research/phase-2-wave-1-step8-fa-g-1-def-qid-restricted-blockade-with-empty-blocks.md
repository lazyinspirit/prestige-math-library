# FA terminal evidence — queue g/1

Item: `def-qid-restricted-blockade-with-empty-blocks`. Run: phase-2-wave-1. Decision: repaired.

## Independent review

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the current item and all three declared dependency definitions; both quantitative-induced-density-and-the-loglog-step pages; its batch-9 manifest entry, coverage inclusion and convention notes, boundary contract, reader-9/refute-9 records, Alpha group-g convention context and Step-8 report, and both Terra rejection rows and the original Sol fatal adjudication in the run ledgers. The definition has boundary checks rather than a numbered proof or a separate high-risk proof review.

The first rejection concerned x>1. Sol correctly restricted the published equivalence to [0,1], but the rejudge (context 92fae1e992e29cde0a72e601a2e04171fd3a7d69aaa65b9f4a06353b95798d44) correctly points out the missing ambient-graph qualification. With two singleton blocks of K_2, the complement gives uniform zero sparsity while G does not. The old wording could be read as silently applying the published definition in G. The repaired identification explicitly applies that definition in the fixed K, and explicitly requires positive width as well as 0<=x<=1.

For each earlier i, a degree bound in K for every vertex of the later union is equivalent to that bound for every vertex of every later block. This is precisely the supplier's later-to-earlier orientation. No complement-to-G transfer is valid or needed. With an empty earlier block the inequality is 0<=0; an empty later union has no instances. Repeated empty sets remain pairwise disjoint. k>=1 defines the minimum; k=1 imposes no restriction. At positive width all blocks are nonempty. At x>=1 all degrees satisfy the QID bound, but the published terminology is identified only up to x=1. Choices are finite and require no AC.

## Source verification

https://arxiv.org/html/2301.10147v3 — Bucić, Nguyen, Scott and Seymour, Section 2, paragraphs immediately before 2.3 (HTML lines 107–109). Read the actual text: it permits empty blocks, uses minimum block cardinality for width, and bounds later vertices against an earlier block in the chosen ambient graph. This supports the QID convention; the stricter [0,1] and nonempty interface comes from the three fully read local dependency files, not from an inference about the paper.

## Scope, checks, and remaining work

Changed only this definition's identification and its batch-9 manifest and boundary contract. Dependencies remain `def-blockade-length-and-width`, `def-directional-and-weak-sparsity-between-vertex-sets`, and `def-complete-anticomplete-pure-and-x-sparse-blockades`. No prerequisite item was edited and no lemma was added. The consumer-batch frontier record is the empty array in `research/phase-2-wave-1-batch-9.cross-batch-dependencies.json`: these suppliers are published outside this run, so there is no same-frontier row to invent or change. Refreshed the unified ledger successfully under briefs/tasks/frontier-dependency-ledger.md.

Focused rendercheck passed; precheck correctly skipped this definition (zero proof items). Strict focused proof-contract check passed after adding the required Definition locator to both updated boundary evidence fields. These are local checks, not a judge verdict. No mathematical obligation remains. Next action: record exact terminal bytes, then and only then review queue item 2. No third judge call or pass stamp is authorized.
