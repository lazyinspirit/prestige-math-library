# Citation-precision audit — everything that cites `thm-induction-principle`

## The target, as it actually stands on disk

`items/thm-induction-principle.md` — theorem — The principle of mathematical induction

#### Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## The 7 citing use(s), quoted verbatim from the citing items

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L1] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L1] Recursion theorem ([[thm-recursion]]) and the induction principle ([[thm-induction-principle]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L2] Induction principle ([[thm-induction-principle]]).

### `lem-finite-powers-of-countable-sets-are-countable` (published-backward, page the-topology-of-euclidean-space)

Title: Every finite power of an at most countable set is at most countable

- [L3] A finite set is at most countable, and induction holds on $\mathbb N$ ([[def-countable]], [[thm-induction-principle]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L2] Induction principle ([[thm-induction-principle]]).
