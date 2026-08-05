# Citation-precision audit — everything that cites `fs-compact-implies-sequentially-compact`

## The target, as it actually stands on disk

`items/fs-compact-implies-sequentially-compact.md` — false-statement — FALSE: every compact space is sequentially compact

#### Statement

**False claim:** every compact topological space ([[def-compact-space]]) is
sequentially compact ([[def-compactness-variants]]).

**Where the claim comes from, and what is actually true.** For a metric space the
two conditions are equivalent, and the claim above is that equivalence
transplanted to an arbitrary topological space. The refutation builds its own
witness out of Tychonoff's theorem ([[thm-tychonoff]]): the product

$$Y \;:=\; \prod_{x \in D} \{0,1\}, \qquad D := \{0,1\}^{\mathbb{N}},$$

of one copy of the two-point discrete space for every $0$-$1$ sequence, together
with the sequence $(F_n)$ in $Y$ whose $n$-th term reads off the $n$-th
coordinate, $F_n(x) := x_n$. The Axiom of Choice is assumed, since
[[thm-tychonoff]] carries it.

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` (published-backward, page nets-and-filters-examples)

Title: The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence

- [L1] The published refutation [[fs-compact-implies-sequentially-compact]] defines this cube and sequence as a compact nonsequentially compact witness.
