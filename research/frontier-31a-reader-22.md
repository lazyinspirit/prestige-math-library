# Frontier-31a — reader report, batch 22

## Scope opened

- A page: `library/computability-theory/logarithmic-space-nl-and-reachability.md`.
  Its frontmatter, title, summary, and all 19 listed items were read:
  `def-read-only-input-logspace-machine`, `def-l-and-nl`,
  `lem-logspace-machines-have-polynomially-many-configurations`,
  `def-logspace-many-one-reduction`, `lem-logspace-reductions-compose`,
  `def-directed-st-connectivity`,
  `thm-directed-st-connectivity-is-nl-complete`,
  `thm-read-only-input-savitch-simulation`,
  `thm-nl-is-contained-in-dspace-log-squared-n`,
  `def-inductive-reachable-vertex-count`,
  `lem-reachability-count-is-verifiable-in-nl`,
  `lem-nonreachability-has-an-inductive-counting-certificate`,
  `thm-immerman-szelepcsenyi-nl-equals-conl`,
  `cor-nspace-is-closed-under-complement-above-logspace`,
  `def-logspace-uniform-circuit-family`,
  `def-p-complete-under-logspace-reductions`,
  `lem-polynomial-time-computations-have-logspace-uniform-circuits`,
  `thm-circuit-value-is-p-complete`, and
  `fs-nl-equals-conl-follows-by-state-swapping`.
- B page: `library/computability-theory/logarithmic-space-nl-and-reachability-examples.md`.
  Its frontmatter, title, summary, and all three listed items were read:
  `ex-logspace-reductions-compose`, `ex-circuit-value-is-p-complete`, and
  `cex-nl-equals-conl-follows-by-state-swapping`.
- The current batch manifest, proof contract, coverage record, author task, and
  pre-Step-6 hash record were read. Every 15 proof-contract entry was opened,
  including its citations, derivations, and boundary rows.
- Direct dependency closure opened: `def-read-only-input-workspace-classes`,
  `def-dtime-ntime-dspace-and-nspace`, `def-multigraph-loop-and-digraph`, and
  `def-directed-walk-trail-path-cycle-and-strong-connectivity`.
- Primary source passages were independently opened: Arora--Barak,
  *Computational Complexity: A Modern Approach*, Definition 3.14 and Lemma
  3.15 (PDF pp. 90--91), Theorem 3.16 (pp. 91--92), Theorem 3.18 and Corollary
  3.19 (pp. 93--95), Definition 6.5 and Theorem 6.7 (pp. 129--131), and
  Theorem 6.27 (p. 138), at
  <https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf>.
  Harvard CS 221 Lecture 5, §3 and Lemmas 8--9 (pp. 1--2), was also opened at
  <https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf>.

## Repairs made

1. `lem-logspace-reductions-compose`: the inverse-closure sentence incorrectly
   said to replace the simulation of the second *reduction* with a decider for
   `B`. It now correctly runs the `B` decider on the virtual input `f(x)`, and
   the contract records that virtual-bit reconstruction is an input to this
   step.
2. `lem-reachability-count-is-verifiable-in-nl`: the former claim that the
   exact-tuple language `c=|C_i|` and `v∉C_i` is in NL was false as proved: a
   list of `c` reachable vertices only establishes a lower bound when `c` is
   not already known to be the true count. The repaired statement is the
   standard conditional verifier: **given** the true count, it certifies that
   `v` is absent by listing the complete reachable layer. Its proof and proof
   contract now preserve that hypothesis.
3. `lem-nonreachability-has-an-inductive-counting-certificate`: updated the
   dependent layer construction to invoke the conditional verifier for every
   candidate predecessor (including `u` itself, which carries the
   length-at-most convention). The soundness argument now separates
   membership in `C_{i-1}` from arrival by a final edge. Its proof contract now
   maps the added `L2` use.
4. `thm-immerman-szelepcsenyi-nl-equals-conl`: expanded the general
   `NWORKSPACE(s)` clause from an unsupported one-line assertion into the
   configuration-graph count: `O(s(n))`-bit configurations, exponentially many
   candidates, `O(s(n))`-bit counters, locally tested transitions, and a
   read-once certificate whose permitted length need not be polynomial. Its
   contract records the dependency on the inductive-counting lemma.
5. `def-l-and-nl`: made its displayed definition a single source line, as the
   renderer requires for `$$` math.
6. `def-inductive-reachable-vertex-count`: removed nested inline-dollar
   delimiters from its displayed set definition, which otherwise terminated the
   display before the set expression was complete.

All six changed items were reflowed. None carried a `verification.judge`
record, so no stale judge record required removal.

## Verdicts and checks

| Page | Verdict |
| --- | --- |
| `logarithmic-space-nl-and-reachability` (A) | Pass after the four scoped repairs. |
| `logarithmic-space-nl-and-reachability-examples` (B) | Pass. |

- `precheck` passed for all 15 proof-bearing assigned items, including all four
  changed items.
- Strict `proof-contract` passed: 15/15 entries, no errors or warnings.
- `manifest-deps` passed: 22 items, zero errors.
- `citation-fidelity` found all 26 contract quotes in their cited item sections
  and no widening candidate.
- `rendercheck` passed for all 22 assigned items and both assigned pages.

## Blocker

`content-policy.mjs --manifest-only research/frontier-31a-batch-22.pages.json`
reports 22 `batch-item-already-exists` errors because this historical
frontier-31a manifest is evaluated as a future-mint manifest while all its
items are now present on disk. This is a tooling/run-currency mismatch, not a
mathematical or rendering defect in either assigned page. No uneditable
mathematical defect remains.
