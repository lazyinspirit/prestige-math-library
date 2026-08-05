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

# Citation-precision audit — everything that cites `thm-sum-rule`

## The target, as it actually stands on disk

`items/thm-sum-rule.md` — theorem — The sum rule: a finite disjoint union is finite with $\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert$ and $\\lvert\\bigcup_{i \\in I} A_i\\rvert = \\sum_{i \\in I}\\lvert A_i\\rvert$, and a sum over a finite index set splits along a partition

#### Statement

1. **Two blocks.** If $A$ and $B$ are finite and **disjoint**, then $A \cup B$ is
   finite and $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$
   ([[def-finite-cardinality]]).
2. **A finite partition.** If $I$ is a finite set and $(A_i)_{i \in I}$ is a
   family of finite sets that are pairwise disjoint, then $\bigcup_{i \in I} A_i$
   is finite and
   $\big\lvert\bigcup_{i \in I} A_i\big\rvert = \sum_{i \in I}\lvert A_i\rvert$,
   the sum being that of [[def-sum-over-a-finite-index-set]].
3. **Splitting a sum along a partition of its index set.** Let $S$ be finite, let
   $J$ be finite, and let $(S_j)_{j \in J}$ be pairwise disjoint subsets of $S$
   with $\bigcup_{j \in J} S_j = S$. Then for $a : S \to \mathbb{R}$ or
   $a : S \to \mathbb{N}$,
   $$\sum_{i \in S} a_i = \sum_{j \in J}\Big(\sum_{i \in S_j} a_i\Big), \qquad \prod_{i \in S} a_i = \prod_{j \in J}\Big(\prod_{i \in S_j} a_i\Big).$$
   In particular $\sum_{i \in S \cup T} a_i = \sum_{i \in S} a_i + \sum_{i \in T} a_i$
   for disjoint finite $S$ and $T$.

**Disjointness is a hypothesis and not a formality.** It is spent at exactly one
step, the injectivity of the splice map, and dropping it makes clause 1 false;
the companion page carries that false statement with its smallest witness.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1cm]
  \node at (1,2.45) {$A$};
  \node at (5.2,2.45) {$B$};
  \node at (3.1,2.45) {$p,q>0$};
  \node (f0) at (0,1.55) {$f(0)$};
  \node (fd) at (1,1.55) {$\cdots$};
  \node (fp) at (2,1.55) {$f(p-1)$};
  \node (g0) at (4.2,1.55) {$g(0)$};
  \node (gd) at (5.2,1.55) {$\cdots$};
  \node (gq) at (6.2,1.55) {$g(q-1)$};
  \node (d0) at (0,0) {$0$};
  \node (dd1) at (1,0) {$\cdots$};
  \node (dp) at (2,0) {$p-1$};
  \node (dpp) at (4.2,0) {$p$};
  \node (dd2) at (5.2,0) {$\cdots$};
  \node (dpq) at (6.2,0) {$p+q-1$};
  \draw[->] (d0) -- (f0);
  \draw[->] (dp) -- (fp);
  \draw[->] (dpp) -- (g0);
  \draw[->] (dpq) -- (gq);
  \draw[dashed] (3.1,-0.45) -- (3.1,2.15);
  \node at (1,-0.65) {$h(k)=f(k)$};
  \node at (5.2,-0.65) {$h(p+j)=g(j)$};
  \node at (3.1,-1.2) {$h:p+q\longrightarrow A\cup B$};
\end{tikzpicture}
```

## The 1 citing use(s), quoted verbatim from the citing items

### `ex-finite-subset-net-for-unordered-real-summation` (published-backward, page nets-and-filters-examples)

Title: Finite partial sums of a real family form a net directed by inclusion

- [L2] A union of two finite sets is finite, and sums split across disjoint finite sets ([[thm-sum-rule]]).


---

# Citation-precision audit — everything that cites `thm-dirichlet-rearrangement`

## The target, as it actually stands on disk

`items/thm-dirichlet-rearrangement.md` — theorem — Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum

#### Statement

Let $(a_k)$ be a sequence of reals whose series converges absolutely
([[def-absolute-and-conditional-convergence]]), and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. $\sum |a_{\sigma(k)}|$ converges, with
   $\sum_{k=0}^{\infty} |a_{\sigma(k)}| = \sum_{k=0}^{\infty} |a_k|$; that is,
   the rearranged series again converges absolutely;
2. $\sum a_{\sigma(k)}$ converges, with
   $$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

Consequently an absolutely convergent series converges unconditionally
([[def-rearrangement-and-unconditional-convergence]]).

The engine of the proof is a single statement about series of **nonnegative**
terms: for those, the sum is the supremum of the partial sums
([[thm-nonnegative-series-bounded-partial-sums]]), a quantity that cannot see the
order of the terms. The general case is reduced to that one through the positive
and negative parts ([[lem-positive-and-negative-parts]]), which is why no
manipulation of signed finite sums over shuffled index sets occurs anywhere below.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L2] A nonnegative series converges exactly when its partial sums are bounded above, and an absolutely convergent series is unchanged by a bijective rearrangement ([[thm-nonnegative-series-bounded-partial-sums]], [[thm-dirichlet-rearrangement]]).


---

# Citation-precision audit — everything that cites `lem-positive-and-negative-parts`

## The target, as it actually stands on disk

`items/lem-positive-and-negative-parts.md` — lemma — Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$

#### Statement

Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive
part** and **negative part** by

$$a_k^{+} \;:=\; \frac{|a_k| + a_k}{2}, \qquad a_k^{-} \;:=\; \frac{|a_k| - a_k}{2} \qquad (k \in \mathbb{N}),$$

with $|x|$ the absolute value ([[def-abs-value]]). Then:

1. $a_k^{+} = \max\{a_k, 0\}$ and $a_k^{-} = \max\{-a_k, 0\}$ ([[def-max-min]]);
   in particular $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$, and
   $$a_k = a_k^{+} - a_k^{-}, \qquad |a_k| = a_k^{+} + a_k^{-} .$$
2. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) **if and only if** both
   $\sum a_k^{+}$ and $\sum a_k^{-}$ converge.
3. If $\sum a_k$ converges conditionally, then neither $\sum a_k^{+}$ nor
   $\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\infty$
   ([[def-divergence-to-infinity]]).

Claim 3 is the engine of the rearrangement theory: a conditionally convergent
series carries an unlimited supply of positive terms and an unlimited supply of
negative ones, and its convergence is nothing but a cancellation between them.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L3] Positive and negative parts are nonnegative and $|a_i|=a_i^++a_i^-$ ([[lem-positive-and-negative-parts]]).


---

# Citation-precision audit — everything that cites `thm-nonnegative-series-bounded-partial-sums`

## The target, as it actually stands on disk

`items/thm-nonnegative-series-bounded-partial-sums.md` — theorem — A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum

#### Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L2] A nonnegative series converges exactly when its partial sums are bounded above, and an absolutely convergent series is unchanged by a bijective rearrangement ([[thm-nonnegative-series-bounded-partial-sums]], [[thm-dirichlet-rearrangement]]).
