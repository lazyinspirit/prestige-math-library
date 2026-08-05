# Citation-precision audit — everything that cites `def-nat-addition`

## The target, as it actually stands on disk

`items/def-nat-addition.md` — definition — Addition of natural numbers

#### Definition

**Addition** $+ : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is defined by
recursion on the second argument: for each fixed $m \in \mathbb{N}$,

$$m + 0 = m, \qquad m + \sigma(n) = \sigma(m + n).$$

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).
