# Citation-precision audit — everything that cites `lem-index-map-grows`

## The target, as it actually stands on disk

`items/lem-index-map-grows.md` — lemma — A strictly increasing index map satisfies $n_k \\ge k$

#### Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

## The 5 citing use(s), quoted verbatim from the citing items

### `def-subsequential-limit` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices

### `fs-every-subnet-of-a-sequence-is-a-subsequence` (published-backward, page nets-and-filters)

Title: FALSE: every subnet of a sequence is a subsequence

- [A2] A subsequence of $x$ is a composite $x\circ h$ with $h:\mathbb N\to\mathbb N$ strictly increasing; such an $h$ is injective ([[lem-index-map-grows]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L4] Consecutive comparisons suffice: if $n_i < n_{\sigma(i)}$ for every $i$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [L2] Growth of an index map: a strictly increasing $n$ satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).
- ([[lem-index-map-grows]]) is needed only to know that some subsequence index

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L3] Consecutive comparisons suffice for an index map: if $n_j < n_{\sigma(j)}$ for every $j$ then $n$ is strictly increasing ([[lem-index-map-grows]]).
