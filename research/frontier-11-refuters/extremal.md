## Your cluster — `extremal`: extremal graph theory

Pages: `extremal-graph-theory` (A, 20 items, order 219) and its `-examples`
(B, 9 items).

### Read this first — why this cluster's Facts blocks have had NO independent read

The independent reader (reader-2) read every proof step and dependency here and
found the proofs sound after one small repair. But at that time **every one of
these items put all its dependency references into a single aggregate `**Given:**`
paragraph and cited the tag `[given]`** — not one `[F#]` label in the whole batch,
and all 49 batch proof contracts had empty citation arrays.

After reader-2 finished, the batch's **own Beta** — the agent that authored these
items, and which is barred from auditing its own work — rewrote every Facts block
into labeled `[F#]` facts and retagged every proof step. Alpha has verified from
the diff that **no numbered proof-step body text changed**: only the Facts blocks
and the bracketed tag lists. But that new Facts text is freshly authored prose
that no independent party has read, and the author wrote it.

**So your single most important job in this cluster is fact fidelity.** For every
`[F#]` in every item: open the cited item on disk and check the restatement
reproduces its Definition/Statement — same domain, quantifiers, hypotheses,
conclusion, direction. A fact that inflates, weakens, invents a converse, drops a
hypothesis, or substitutes a description of what the result is *for* is a real
defect even when the proof would work if the fact were true. Then check the tag
lists: a step tagged with a fact it does not use, or using a fact it does not tag,
is a defect.

### Priority 1 — `thm-turan-exact-and-unique`

Named by Alpha as a priority, and the strongest claim on the page: it asserts
both the exact extremal number `ex(n, K_{r+1}) = e(T_{n,r})` **and** uniqueness of
the extremal graph up to isomorphism. Uniqueness is the half that gets asserted
without being earned.

- Read the proof route. If it is Zykov symmetrisation via `lem-zykov-symmetrisation`,
  check that lemma's Statement: symmetrisation does not decrease edges and does not
  create a `K_{r+1}`, and the resulting graph is complete multipartite. Then check
  the uniqueness argument actually shows that **equality forces** the symmetrised
  graph to be `T_{n,r}` and that the symmetrisation steps were reversible or
  edge-strict, which is where uniqueness proofs of Turán usually break.
- Check the boundary cases: `r = 1` (triangle-free is `r = 2`; `K_2`-free means no
  edges), `n < r`, `n = r`, and `n` not divisible by `r`. `T_{n,r}` for `n < r` is
  the complete graph — does the Statement still hold and does the proof cover it?
- Check `thm-mantel-exact-and-unique` is proved **independently** of Turán as its
  step 5.1 claims, and that its induction base `n = 0,1,2` and its uniqueness half
  are complete. In the equality case it concludes `G` is complete bipartite and
  then balanced; check the argument that all vertices of one part of `G'` choose
  the same endpoint really excludes the mixed case.
- `lem-turan-graph-edge-count-and-balance` is cited for "among complete `r`-partite
  graphs on `n` vertices, `T_{n,r}` has maximum edge count, with equality exactly
  for balanced part sizes". Check the item proves the equality characterisation and
  not merely the maximum, since the uniqueness half of Mantel and Turán rests on it.

### Priority 2 — the asymptotic layer, where `o`/`O` hide a lot

- `def-asymptotic-extremal-notation-and-edge-density` — check it defines `O`, `Ω`,
  `o` with explicit quantifiers and explicit subscript-parameter conventions
  (`O_{r,s}` means the implied constant may depend on `r,s`). Every later item
  leans on this.
- `thm-kovari-sos-turan-bound` and `thm-hypergraph-kovari-sos-turan-bound` — verify
  the exponent arithmetic. Reader-2 independently checked
  `r − 1 + s(1 − 1/s^{r−1}) = r + s − 1 − 1/s^{r−2}`; **verify that identity
  yourself** and check the conclusion `O_{r,s}(n^{r − 1/s^{r−1}})` follows from the
  double count. Check the `s = 1` and `r = 2` degenerate cases the items claim.
  `lem-kst-common-neighbour-double-count` must supply a genuine double count;
  check the convexity/Jensen step is licensed by a cited fact and holds for the
  non-integer averages it is applied to.
- `thm-turan-density-exists` — monotone bounded convergence. Check the sequence is
  really nonincreasing (this needs `prop-normalized-extremal-number-monotonicity`,
  whose proof is a double count) and that the limit is in `[0,1]`.
- `thm-erdos-stone-for-balanced-blowups`, `thm-erdos-stone-simonovits`,
  `cor-chromatic-number-extremal-density`, `cor-bipartite-extremal-density-zero`.
  Erdős–Stone–Simonovits requires `H` to **have an edge**; for a graph with no edge
  `χ(H) = 1` and the formula divides by zero. Check the hypothesis is present in
  every statement and in `fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph`,
  which is a false-statement item whose whole point is that the formula fails to
  determine `ex(n,H)` for bipartite `H` — check its refutation refutes the claim
  **as written** and that the `K_{2,2}` witness is correct.
- `thm-extremal-graph-supersaturation` — check the counting argument's parameters
  and that its conclusion is uniform in the right variables.

### Priority 3 — the examples, all of which are finite and checkable

Recompute each of these by hand and say what you got:

- `ex-turan-graph-t-ten-three` — `e(T_{10,3})` with parts `4,3,3`.
- `ex-mantel-balanced-complete-bipartite` — `K_{3,4}` has 12 edges and
  `⌊49/4⌋ = 12`.
- `ex-near-extremal-triangle-free-graph`, `ex-turan-ramsey-colouring-witness`
  (`R(4,3) > 6`, so `R(4,3) ≥ 7` — check the colouring exhibited really has no red
  `K_4` and no blue `K_3`), `ex-five-cycle-k-two-two-free`,
  `fs-every-triangle-free-graph-is-bipartite` (`C_5` is the standard witness),
  `ex-petersen-extremal-density` (`χ(P) = 3`: check the exhibited 3-colouring is
  proper and the exhibited odd cycle rules out 2), `ex-odd-cycle-extremal-density`.
- `cor-turan-ramsey-lower-bound` — check `R(s,t) > (s−1)(t−1)` follows from the
  exhibited colouring and that `def-off-diagonal-ramsey-number`'s "least `N`"
  formulation gives the strict inequality in the direction claimed.

### Also read in full

`def-extremal-number-turan-graph-and-blowup`, `def-zarankiewicz-number`,
`def-uniform-hypergraph-and-complete-partite-hypergraph`,
`lem-colouring-embeds-a-graph-in-a-balanced-blowup`.

Check the run's convention that `ex(n,H)` counts **ordinary** subgraph avoidance
(not induced) is fixed once and used consistently, and that
`library/combinatorics/extremal-graph-theory.md`'s two summary paragraphs make no
claim about another page that is not a declared prerequisite (reader-2 repaired
one such sentence; check the replacement is true of this page).
