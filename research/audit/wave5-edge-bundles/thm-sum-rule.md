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
