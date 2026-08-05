# Citation-precision audit — everything that cites `lem-nat-discrete`

## The target, as it actually stands on disk

`items/lem-nat-discrete.md` — lemma — Discreteness: $\\sigma(n)$ is the immediate successor

#### Statement

For all $m, n \in \mathbb{N}$: $m < n \iff \sigma(m) \le n$ ([[def-nat-order]]). Consequently there is no $k$ with $n < k < \sigma(n)$: the successor $\sigma(n)$ is the immediate successor of $n$.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
- have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L7] Discreteness: $N < \sigma(N)$ for every $N \in \mathbb{N}$ ([[lem-nat-discrete]]).
