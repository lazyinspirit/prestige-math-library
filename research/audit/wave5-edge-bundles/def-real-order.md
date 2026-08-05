# Citation-precision audit — everything that cites `def-real-order`

## The target, as it actually stands on disk

`items/def-real-order.md` — definition — Order on the reals

#### Definition

A real $x$ is **positive** when it has a representative $(a_n)$ together
with a rational $\delta > 0$ and an index $N$ such that $a_n > \delta$
for all $n \ge N$. Define

$$x \le y \iff x = y \;\text{ or }\; y - x \text{ is positive},$$

and $|x| = x$ if $x \ge 0$, $|x| = -x$ otherwise.

## The 5 citing use(s), quoted verbatim from the citing items

### `def-contractive-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- ([[def-real-order]], [[lem-of-abs-value]]). Such a $c$ is called a **contraction

### `def-interval` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length

- ([[def-real-order]]).

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- as in [[def-real-order]] and [[def-complete-ordered-field]], and with

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- [L8] Trichotomy in $\mathbb{R}$: for reals $s, t$ exactly one of $s < t$, $s = t$, $s > t$ holds, so the failure of $x_m \le x_n$ is $x_m > x_n$, and $x_n > x_n$ is impossible ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).
