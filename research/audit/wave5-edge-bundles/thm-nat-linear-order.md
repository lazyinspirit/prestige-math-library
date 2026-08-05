# Citation-precision audit — everything that cites `thm-nat-linear-order`

## The target, as it actually stands on disk

`items/thm-nat-linear-order.md` — theorem — $\\le$ is a linear order on $\\mathbb{N}$

#### Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## The 7 citing use(s), quoted verbatim from the citing items

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- [L5] The order on $\mathbb{N}$ is total, so every index satisfies $k \le K$ or $k \ge K$ ([[thm-nat-linear-order]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [L4] The order on $\mathbb{N}$ is total and transitive, so two indices $J, K$ admit an index $j$ with $j \ge J$ and $j \ge K$ ([[thm-nat-linear-order]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L6] Order on $\mathbb{N}$: $m < n$ means $m \le n$ and $m \ne n$; the order is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L15] The order on $\mathbb{N}$ is total, so any two indices are comparable ([[thm-nat-linear-order]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).
