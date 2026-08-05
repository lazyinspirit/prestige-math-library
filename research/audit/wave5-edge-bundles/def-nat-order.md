# Citation-precision audit — everything that cites `def-nat-order`

## The target, as it actually stands on disk

`items/def-nat-order.md` — definition — Order on the natural numbers

#### Definition

For $m, n \in \mathbb{N}$, define the **order** by

$$m \le n \iff \exists k \in \mathbb{N}\ (m + k = n),$$

and the **strict order** by $m < n \iff (m \le n \text{ and } m \neq n)$, using
addition ([[def-nat-addition]]).

## The 4 citing use(s), quoted verbatim from the citing items

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- $\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L6] Order on $\mathbb{N}$: $m < n$ means $m \le n$ and $m \ne n$; the order is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- [L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).
