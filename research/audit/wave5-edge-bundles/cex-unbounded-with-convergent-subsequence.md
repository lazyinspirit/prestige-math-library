# Citation-precision audit — everything that cites `cex-unbounded-with-convergent-subsequence`

## The target, as it actually stands on disk

`items/cex-unbounded-with-convergent-subsequence.md` — counterexample — The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

#### Statement refuted

**Refuted claim:** a sequence of reals with a convergent subsequence is bounded,
which is the converse of [[thm-bolzano-weierstrass]]
([[fs-convergent-subsequence-implies-bounded]], [[def-sequence]]).

The witness is the interleaving

$$1,\; 1,\; 2,\; 1,\; 3,\; 1,\; 4,\; \dots$$

whose terms at even indices are $1, 2, 3, \dots$ and whose terms at odd indices
are all $1$. It is unbounded, and its odd-indexed subsequence is constant, hence
convergent. The refutation is carried out in full in
[[fs-convergent-subsequence-implies-bounded]]; this item records the witness and
adds the computation of its subsequential limit set.

## The 4 citing use(s), quoted verbatim from the citing items

### `def-subsequential-limit` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- [[cex-unbounded-with-convergent-subsequence]] shows.

### `fs-convergent-subsequence-implies-bounded` (forward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [[cex-unbounded-with-convergent-subsequence]], which also computes its

### `lem-alternating-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [[cex-unbounded-with-convergent-subsequence]] is the witness for the first of

### `thm-bolzano-weierstrass` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence

- [[cex-unbounded-with-convergent-subsequence]]: a wildly unbounded sequence can
