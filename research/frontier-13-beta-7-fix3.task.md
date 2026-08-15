## Batch 7 third pass — a better fix supersedes the one I sent you

Your second-pass task told you to add
`lem-monic-polynomials-split-over-an-algebraically-closed-field` to discharge
F7.2's split hypothesis. **Alpha's re-check found a strictly better fix, and it
also closes a defect the repair introduced.** If you built that lemma, read on
before keeping it.

### The problem with the algebraically-closed route

`ex-closed-walks-in-the-complete-graph` — the example added last pass — works
"over $\mathbb C$", which needs $\mathbb C$ to be algebraically closed. That is
the **fundamental theorem of algebra**, order **139**, status `planned`, **not in
order 195's closure**. So the example rests on an undischarged hypothesis, and
your dependency audit cannot see it: an *undeclared* hypothesis is structurally
invisible to a closure check, which only inspects declared `deps`.

### The fix — one edit closes both

**Give `cor-eigenvalue-form-of-the-transfer-matrix-trace` a *split* hypothesis
instead of an *algebraically closed* one.** Its two consumers —
`thm-spectral-mapping-for-polynomials` and `thm-trace-is-sum-of-eigenvalues` —
already take the split factorisation as an explicit hypothesis of their Statements
("suppose $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$"), so a split hypothesis is what
they actually need. Algebraic closure was only ever a way to *get* splitting.

Then:

- The undischarged bridge disappears — you are no longer deriving "splits" from
  "has a root", so **the new lemma is unnecessary**. If you already added it,
  remove it unless it earns its place independently; do not keep it as dead
  weight, and do not leave its coverage row claiming an item that no longer exists.
- **`ex-closed-walks-in-the-complete-graph` then works over $\mathbb Q$**: the
  adjacency matrix of $K_p$ is $J-I$, whose characteristic polynomial splits over
  $\mathbb Q$ outright with eigenvalues $p-1$ and $-1$. No algebraic closure, no
  FTA, no forward reference. State it over $\mathbb Q$.

Note `splitting-fields` is **not** in order 195's closure either — but you do not
need it. Phrase the hypothesis as "$\chi_A$ is a product of linear factors over
$K$", matching what the two consumers already state, rather than as a technical
"splits" predicate needing a definition you cannot cite. (Order 88 took the other
route because the predicate appears in four of its titles; here it appears in one
hypothesis.)

### Everything else from the second-pass task stands

F7.4 (binomial citations), F7.5 (the false decline reason and `out-of-scope` →
`deferred`), F7.7 (drop the B-page summary), F7.8 (`def-finite-words-…` deps).
Keep whatever of those you completed.

Alpha records **F7.1 as the model repair of the run** — Statement, `deps`, contract
citations, input map and the `degenerate` boundary all moved together, both halves
fixed including the ring/field mismatch. That is the standard for this pass too.

### Re-run and report

The three gates plus your closure audit; report the corollary's new hypothesis, the
field the example is now stated over, and whether the lemma was kept or removed.
