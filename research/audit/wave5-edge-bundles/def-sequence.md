# Citation-precision audit — everything that cites `def-sequence`

## The target, as it actually stands on disk

`items/def-sequence.md` — definition — Sequences of reals: bounded, eventually, frequently, tails, subsequences

#### Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## The 28 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- **Given:** For $n \in \mathbb{N}$ the rational $s_n = k_n/10^n$, where $k_n$ is the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, together with the properties established for it in [[fs-rationals-complete]]; and the real $\sqrt 2$ ([[thm-of-square-roots]]). Rationals are identified with their images in $\mathbb{R}$ under the embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), so $(s_n)$ is also a sequence of reals ([[def-sequence]]).
- [L7] Squeeze theorem ([[thm-squeeze]]) and the algebra of limits ([[thm-algebra-of-limits]]); a constant sequence converges to its value ([[def-sequence]], [[def-real-limit]]).

### `cex-nested-open-intervals-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested open intervals $(0, 1/k)$ have empty intersection

- **Given:** For $j \in \mathbb{N}$ the open interval $J_j := \{x \in \mathbb{R} : 0 < x < 1/(j+1)\}$, which is the family $(0,1/k)$ for $k \ge 1$ under the substitution $k = j+1$ ([[def-sequence]]).

### `cex-nested-unbounded-closed-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped

- **Given:** For $k \in \mathbb{N}$ the set $I_k := \{x \in \mathbb{R} : k \le x\}$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$; this is the closed interval $[k,\infty)$ ([[def-interval]], [[def-sequence]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- **Given:** The sequence $(x_k)$ of reals with $x_k := \sqrt k$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$ ([[def-sequence]], [[thm-of-square-roots]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- $g_{j+1} = g_j + 1/g_j$, and $x_k := g_{k-1}$ for $k \ge 1$ ([[def-sequence]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- ([[fs-convergent-subsequence-implies-bounded]], [[def-sequence]]).
- **Given:** The strictly increasing index maps $e, o$ of [[lem-alternating-sequence]], whose ranges partition $\mathbb{N}$, and the sequence $(y_n)$ of reals with $y_n := (j+1)\cdot 1_{\mathbb{R}}$ when $n = e_j$ and $y_n := 1$ when $n = o_j$ ([[def-sequence]]).
- [L4] Boundedness of a sequence and of a subset of $\mathbb{R}$ ([[def-sequence]], [[def-bounded-set]]); a constant sequence converges to its value ([[def-real-limit]]); and every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

### `cor-monotone-converges-iff-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A monotone sequence converges if and only if it is bounded

- Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],
- [L4] A sequence is bounded when some $M$ satisfies $|x_k| \le M$ for every $k$; its range is bounded above by $u$ when $x_k \le u$ for every $k$, and bounded below by $\ell$ when $\ell \le x_k$ for every $k$ ([[def-sequence]], [[def-bounded-set]]).

### `def-contractive-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- A sequence $(x_k)$ of reals ([[def-sequence]]) is **contractive** when there is a

### `def-monotone-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

- Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
- - **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
- $(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is

### `def-subsequential-limit` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Subsequential limit of a real sequence, and the subsequential limit set

- Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$.
- here: *strictly increasing* and *subsequence* are [[def-sequence]], and

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- starts at $0$ ([[def-sequence]]). The family above, indexed from $1$, is realised

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- **Given:** A real $a$, and by the recursion theorem ([[thm-recursion]]) applied to $\mathbb{R}$, the element $a$ and the function $f(u) = (u+1)/3$, the unique sequence $(x_k)$ of reals with $x_0 = a$ and $x_{k+1} = f(x_k)$ ([[def-sequence]]); the constant $c := 1/3$.

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- ([[def-sequence]]). The verification uses $(J_j)$.
- [L7] Convergence of a sequence of reals to $0$; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `ex-recursive-sqrt-two-plus-x` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$

- $(g_j)$ ([[def-sequence]], [[lem-limit-of-tail]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- **Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequence $t_j := -s_j$; the sequence $p_j := 1 + 1/(j+1)$, where $j+1$ denotes the canonical natural $(j+1)\cdot 1_{\mathbb{R}}$; and $u_j := t_j\,p_j$ ([[def-sequence]]).
- [L7] Convergence and boundedness of a sequence of reals; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- tend to $0$, that is $|x_{k+1} - x_k| \to 0$ ([[def-sequence]],
- **Given:** The sequence $(x_k)$ of reals with $x_k := \sqrt{k}$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$ and $\sqrt{\cdot}$ the nonnegative square root ([[def-sequence]]).
- [L9] Convergence to $0$, boundedness, and the Cauchy condition; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- then $(y_n)$ is bounded ([[def-sequence]], [[def-subsequential-limit]]).
- **Given:** The strictly increasing index maps $e, o : \mathbb{N} \to \mathbb{N}$ of [[lem-alternating-sequence]], whose ranges partition $\mathbb{N}$, and the sequence $(y_n)$ of reals defined by cases on that partition: $y_n := (j+1) \cdot 1_{\mathbb{R}}$ when $n = e_j$, and $y_n := 1$ when $n = o_j$ ([[def-sequence]]).
- [L5] A constant sequence converges to its value, and a sequence is bounded when some real $M$ satisfies $|y_n| \le M$ at every index ([[def-sequence]], [[def-real-limit]]).
- [L6] Subsequences and subsequential limits: for strictly increasing $n$, $(y_{n_j})$ is a subsequence, and its limit is a subsequential limit of $(y_n)$ ([[def-sequence]], [[def-subsequential-limit]]).

### `fs-nested-open-intervals-nonempty` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- **Given:** For $k \in \mathbb{N}$ the open interval $J_k := \{x \in \mathbb{R} : 0 < x < 1/(k+1)\}$, where $k+1$ denotes the canonical natural $(k+1)\cdot 1_{\mathbb{R}}$, which is positive and invertible; this is a sequence of subsets of $\mathbb{R}$ indexed by $\mathbb{N}$ ([[def-sequence]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- ([[def-sequence]]) with the following properties.
- **Given:** By the recursion theorem ([[thm-recursion]]) applied to the set $\mathbb{R}$, the element $1$ and the function $u \mapsto -u$, the unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; applied to the set $\mathbb{N}$, the element $0$ and the function $i \mapsto \sigma(\sigma(i))$, the unique $e : \mathbb{N} \to \mathbb{N}$ with $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$; and applied to $\mathbb{N}$, the element $\sigma(0)$ and the same function, the unique $o : \mathbb{N} \to \mathbb{N}$ with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$ ([[def-natural-numbers]], [[def-sequence]]).

### `lem-cauchy-sequence-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every Cauchy sequence of reals is bounded

- $k \in \mathbb{N}$ ([[def-sequence]]).
- [L6] A sequence of reals is bounded when some $M \in \mathbb{R}$ satisfies $|x_k| \le M$ at every index ([[def-sequence]]).

### `lem-cauchy-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

- [A2] Convergence of the subsequence: for every rational $\varepsilon > 0$ there is $J$ with $|x_{n_j} - L| < \varepsilon$ for all $j \ge J$ ([[def-real-limit]], [[def-subsequential-limit]], [[def-sequence]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

### `lem-monotone-unbounded-diverges` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence that is not bounded above diverges to $+\\infty$

- Let $(x_k)$ be a nondecreasing sequence of reals ([[def-sequence]],
- [L5] Every element of $S$ is a term of the sequence, and conversely ([[def-sequence]]).

### `lem-peak-monotone-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

- reals ([[def-sequence]]) there is a strictly increasing
- [L5] Subsequences: for strictly increasing $n$, the composite $(x_{n_j})$ is a subsequence of $(x_k)$ and is again a sequence of reals ([[def-sequence]]).

### `thm-bolzano-weierstrass` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence

- $k \in \mathbb{N}$ ([[def-sequence]]), then there is a strictly increasing
- [L3] A subsequence $(x_{n_j})$ of $(x_k)$ along a strictly increasing $n$ is again a sequence of reals, and each of its terms is a term of $(x_k)$; a sequence is bounded when some $M$ satisfies $|{\cdot}| \le M$ at every index ([[def-sequence]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- indexes from $0$ ([[def-sequence]]), so the hypothesis is stated.
- [L12] Cauchy condition and convergence; it suffices to test a real $\varepsilon > 0$, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
- [L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

### `thm-nested-interval-property` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$

- **Given:** Closed bounded intervals $I_k = [a_k, b_k]$ with $a_k \le b_k$ for every $k \in \mathbb{N}$ and $I_{k+1} \subseteq I_k$ for every $k$; the sequences $(a_k)$ and $(b_k)$ of reals ([[def-sequence]]); their ranges $A = \{a_k : k \in \mathbb{N}\}$ and $B = \{b_k : k \in \mathbb{N}\}$, both nonempty; and $\ell_k = b_k - a_k$.
