# frontier-32 · Step 6a reader · batch 2

## Scope opened

I read `research/frontier-32-batch-2.pages.json`, the current four assigned
pages, and all 44 assigned items: 16 A and 3 B items for
`interactive-proof-systems-and-public-coins`, and 22 A and 3 B items for
`kolmogorov-complexity-and-algorithmic-randomness`.  The page inventories agree
exactly with the manifest (16/3/22/3).

I also opened the direct mathematical dependencies used by the batch:
`def-probabilistic-polynomial-time-machine`, `def-np-by-verifiers`,
`lem-chernoff-bound-for-bernoulli-trials`,
`def-pairwise-independent-hash-family`, `def-pspace-and-npspace`,
`def-computable-and-partial-computable-function`,
`def-computation-alphabet-and-word-convention`,
`def-finite-probability-space-and-event`,
`def-effective-binary-encoding-and-decoder`, and
`def-universal-and-acceptable-numbering`, together with the four prerequisite
pages.  I opened the cited Arora--Barak, Goldreich, Shen, Simpson, and
Franklin--Porter source records at the supplied locators.  In particular,
Arora--Barak locates the private-to-public conversion at Theorem 8.8, not
Theorem 8.11; Theorem 8.11 is the hash-family construction.

## Repairs made

- `thm-graph-nonisomorphism-is-in-ip`: replaced the invalid invocation of a
  strict-soundness amplification lemma at soundness $1/2$ with two fresh
  challenges accepted conjunctively, giving soundness at most $1/4$ and perfect
  completeness.
- `thm-invariance-theorem-for-plain-complexity`: required a prefix-free,
  self-delimiting index code, so the universal-machine input is uniquely
  parsed.
- `lem-most-strings-are-incompressible`: added the necessary range
  $0\le c\le n$; without it the displayed count can be negative.
- `thm-kolmogorov-complexity-is-not-computable`: restricted the search to
  strings of length $n$ and made the transfer from a computable selector to the
  fixed optimal machine explicit.
- `def-effective-hausdorff-dimension`: supplied the exact lower-semicomputable
  $s$-gale equation and success criterion.
- `fs-kolmogorov-complexity-is-an-absolute-integer`: replaced the invalid
  $ε-witness (which can already have complexity one) by a word $z$ with
  $C_U(z)>1$.
- `lem-hashing-commits-public-randomness`: added $|U|\ge2$, excluding the
  vacuous singleton-domain form of pairwise independence from which uniform
  marginals do not follow.
- `thm-private-coin-ip-equals-public-coin-ip`: corrected the source locator to
  Arora--Barak Theorem 8.8 and narrowed its wording to the sourced conversion
  theorem.
- `thm-martin-lof-randomness-implies-computable-randomness`: used strict,
  effectively enumerable threshold crossings and treated the zero-capital
  boundary before forming the Martin-Löf test.
- Repaired parser-incompatible inline `provenance` mappings in 22 assigned
  Kolmogorov-side items.  Each now has the repository's block YAML mapping.

The batch proof-contract was updated for the eight repaired proof-bearing
items; none carried a stale `verification.judge` record.

## Uneditable defect

`research/frontier-32-batch-2.coverage.json`, Interactive Proof Systems source
row, calls “Theorem 8.11” the claim `IP[k] is contained in AM[k+2]`.  In the
current cited Arora--Barak edition, Theorem 8.8 is that conversion and Theorem
8.11 constructs efficient pairwise-independent hash functions.  The coverage
ledger is outside the reader's edit authority.  The corresponding structured
finding is in `frontier-32-reader-findings-2.json`.

## Verdicts and checks

| Page | Verdict |
| --- | --- |
| `interactive-proof-systems-and-public-coins` | sufficient after the listed A-item repairs |
| `interactive-proof-systems-and-public-coins-examples` | sufficient; B body read, unchanged by authority |
| `kolmogorov-complexity-and-algorithmic-randomness` | sufficient after the listed A-item and provenance repairs |
| `kolmogorov-complexity-and-algorithmic-randomness-examples` | sufficient; B body read, unchanged by authority |

Passed after repair: reflow on every mathematically changed item; focused
precheck on all 29 proof-bearing assigned items; `proof-contract --strict`
(8/8 repaired worksheets); `content-policy` (44 items, zero errors/warnings);
`manifest-deps` (44 items, zero errors); four-page `rendercheck`;
`coverage-checklist --require-destination` (2 pages, 80 results, zero
errors/warnings); and `source-fetch-check` (6/6 fetch-verified).

## Blocker

The batch contract still covers only the eight repaired proof-bearing items;
the remaining proof-bearing items have no individual worksheets.  This is the
pre-existing Step-5 authoring obligation recorded in `frontier-32-batch-2.notes.md`,
not a claim defect repaired by the reader, and prevents a truthful assertion
that the complete batch contract gate is finished.
