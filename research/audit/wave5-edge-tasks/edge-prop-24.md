# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `cex-cauchy-rationals-no-rational-limit`

## The target, as it actually stands on disk

`items/cex-cauchy-rationals-no-rational-limit.md` — counterexample — The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

#### Statement refuted

**Refuted claim:** every Cauchy sequence of rationals converges to a rational;
equivalently, $\mathbb{Q}$ is complete ([[fs-rationals-complete]],
[[def-rationals]]).

The witness is the sequence of **truncated decimal approximations of $\sqrt 2$**,
$s_0 = 1$, $s_1 = 1.4$, $s_2 = 1.41$, $s_3 = 1.414$, and so on: $s_n = k_n/10^n$
where $k_n$ is the largest natural number with $k_n^2 \le 2 \cdot 10^{2n}$. That
this sequence is Cauchy in $\mathbb{Q}$ and has no rational limit is proved in
full in [[fs-rationals-complete]] and is not repeated here.

What this item adds is the view from $\mathbb{R}$, which is what makes the
witness informative rather than merely negative: **the same sequence converges in
$\mathbb{R}$, and its limit is $\sqrt 2$.** So the defect is not in the sequence
but in $\mathbb{Q}$, and the contrast is exactly
[[thm-cauchy-criterion-via-lub]], which says that a Cauchy sequence of reals
never behaves this way.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-geometric-sequence-null` (forward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).


---

# Citation-precision audit — everything that cites `lem-triangle-inequality-finite`

## The target, as it actually stands on disk

`items/lem-triangle-inequality-finite.md` — lemma — Triangle inequality for finite sums

#### Statement

Let $a : \mathbb{N} \to \mathbb{R}$ be a sequence of reals and $n \in \mathbb{N}$,
with finite sums as in [[def-finite-sum]] and the absolute value as in
[[def-abs-value]]. Then

$$\Big|\sum_{k<n} a_k\Big| \le \sum_{k<n} |a_k|.$$

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L9] Triangle inequality for finite sums: $\big|\sum_{i<n} a_i\big| \le \sum_{i<n} |a_i|$ ([[lem-triangle-inequality-finite]]).


---

# Citation-precision audit — everything that cites `lem-finite-sum-laws`

## The target, as it actually stands on disk

`items/lem-finite-sum-laws.md` — lemma — Laws of finite sums and finite products

#### Statement

Let $a, b, c : \mathbb{N} \to \mathbb{R}$ be sequences of reals, let
$\lambda \in \mathbb{R}$, and let $m, n \in \mathbb{N}$, with finite sums and
finite products as in [[def-finite-sum]]. Then:

1. **Additivity.** $\displaystyle\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$.
2. **Scaling.** $\displaystyle\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$; in particular $\displaystyle\sum_{k<n} \lambda = n\lambda$, where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).
3. **Splitting.** If $m \le n$ then $\displaystyle\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$, and $\displaystyle\prod_{k<n} a_k = \Big(\prod_{k<m} a_k\Big)\Big(\prod_{k=m}^{n-1} a_k\Big)$.
4. **Monotonicity.** If $a_k \le b_k$ for all $k < n$ then $\displaystyle\sum_{k<n} a_k \le \sum_{k<n} b_k$. In particular, if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$, every single term satisfies $a_j \le \sum_{k<n} a_k$ for $j < n$, and $\sum_{k<n} a_k = 0$ forces $a_k = 0$ for every $k < n$.
5. **Telescoping.** $\displaystyle\sum_{k<n}\big(c_{k+1} - c_k\big) = c_n - c_0$.
6. **Products.** $\displaystyle\prod_{k<n}(a_k b_k) = \Big(\prod_{k<n} a_k\Big)\Big(\prod_{k<n} b_k\Big)$; if $a_k \ge 0$ for all $k < n$ then $\prod_{k<n} a_k \ge 0$, and if $a_k > 0$ for all $k < n$ then $\prod_{k<n} a_k > 0$.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L8] Finite sums, their notation $\sum_{i<n}$, and their laws: additivity, scaling, monotonicity, and telescoping $\sum_{i<n}(t_{i+1} - t_i) = t_n - t_0$ for any sequence $(t_i)$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).


---

# Citation-precision audit — everything that cites `lem-nat-successor-neq-self`

## The target, as it actually stands on disk

`items/lem-nat-successor-neq-self.md` — lemma — No natural number equals its own successor

#### Statement

For every $n \in \mathbb{N}$, $n \neq \sigma(n)$.

## The 1 citing use(s), quoted verbatim from the citing items

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L3] Order on $\mathbb{N}$: $i < \sigma(i)$ for every $i$, since $\sigma(i) = i + 1$ gives $i \le \sigma(i)$ and $\sigma(i) \ne i$; and the order is transitive and total ([[def-nat-order]], [[def-nat-addition]], [[lem-nat-successor-neq-self]], [[thm-nat-linear-order]]).
