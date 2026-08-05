# Citation-precision audit — everything that cites `ex-two-subsequential-limits`

## The target, as it actually stands on disk

`items/ex-two-subsequential-limits.md` — example — The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

#### Example

For $k \ge 1$ let

$$x_k = (-1)^k\Big(1 + \frac{1}{k}\Big).$$

Then $(x_k)$ is bounded, with $1 < |x_k| \le 2$ at every index, it does not
converge, and its subsequential limit set ([[def-subsequential-limit]]) is
exactly

$$\operatorname{SL}(x) = \{-1, 1\}.$$

The example separates two things that a first reading of Bolzano-Weierstrass can
run together. A bounded sequence must have a subsequential limit; it may have
several; and having several is exactly what stops it converging. Here there are
two, and neither is a value of the sequence, since $|x_k| > 1$ always.

**Indexing and the sign.** Written on $\mathbb{N}$ the sequence is
$u_j := t_j\big(1 + 1/(j+1)\big)$ for $j \in \mathbb{N}$, where $t_j := -s_j$
and $(s_k)$ is the alternating sequence of [[lem-alternating-sequence]]. Since
$s_{\sigma(j)} = -s_j$, the sequence $(t_j)$ is $j \mapsto s_{j+1}$, so
$u_j = x_{j+1}$ and $(u_j)$ is the family above under the substitution
$k = j+1$. The verification uses $(u_j)$.

## The 2 citing use(s), quoted verbatim from the citing items

### `def-subsequential-limit` (forward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- [[ex-two-subsequential-limits]] carries out that computation for a sequence

### `lem-alternating-sequence` (forward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [[ex-two-subsequential-limits]] multiplies $s$ by a null perturbation to get a
