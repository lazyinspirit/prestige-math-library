---
id: thm-milman-converse-for-compact-generating-sets
kind: theorem
title: Milman converse for compact generating sets
status: draft
origin: pipeline
deps: ["def-extreme-point-and-face", "def-locally-convex-topological-vector-space", "thm-compact-subset-of-a-hausdorff-space-is-closed", "thm-closed-subspace-of-a-compact-space-is-compact", "lem-locally-convex-closures-and-finite-compact-convex-hulls", "lem-finite-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Hanche-Olsen, Topological vector spaces"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
      locator: "Theorem 22 and proof, pp. 13–14"
proof_strategy: contradiction
---

## Statement

Let $K$ be a compact convex subset of a locally convex Hausdorff real or
complex topological vector space, and let $A\subseteq K$.  If

$$K=\overline{\operatorname{co}}(A),$$

then $\operatorname{ext}K\subseteq\overline A$.  In particular, if $A$ is
compact and generates $K$ in this sense, then
$\operatorname{ext}K\subseteq A$.

## Facts & Assumptions

**Given:** A locally convex Hausdorff real or complex TVS $X$, a compact convex $K\subseteq X$, and $A\subseteq K$ with $K=\overline{\operatorname{co}}(A)$.

[F1] Extreme points are characterized by strict two-endpoint convex representations ([[def-extreme-point-and-face]]).

[F2] Every zero-neighborhood in a locally convex TVS contains an open convex zero-neighborhood ([[def-locally-convex-topological-vector-space]]).

[F3] Compact subsets of Hausdorff spaces are closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3).

[F4] Closed subsets of compact spaces are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

[F5] The convex hull of finitely many nonempty compact convex sets is compact, is closed in a Hausdorff TVS, and has the displayed one-point-from-each-set representation ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

[F6] If $N$ is a natural number and $F$ is a function with domain $N$ whose values are nonempty, then the family $F[N]$ has a choice function in ZF.  Repetitions among the listed values are allowed ([[lem-finite-choice]]).

## Proof

**Proof technique:** contradiction from a finite compact-convex decomposition.

1.1 The conclusion is immediate if $K=\varnothing$.  Otherwise $A\ne\varnothing$, because the closed convex hull of the empty set is empty.  Put $B=\overline A$.  Since $K$ is closed by [F3] and contains $A$, one has $B\subseteq K$; hence $B$ is closed in compact $K$ and compact by [F4]. [F3, F4, given]

2.1 Assume for contradiction that $w\in\operatorname{ext}K\setminus B$.  The open set $X\setminus B$ contains $w$, so translation gives a zero-neighborhood $V$ with $w+V\subseteq X\setminus B$.  Continuity of subtraction at $(0,0)$ gives a zero-neighborhood $W$ with $W-W\subseteq V$, and [F2] gives an open convex zero-neighborhood $U\subseteq W$.  Thus $(w+U-U)\cap B=\varnothing$. [F2, step 1.1, given, assume-contra]

3.1 The family $\{b+U:b\in B\}$ is an open cover of the nonempty compact set $B$.  Compactness supplies a listed subcover $O_1,\ldots,O_n$ with $n\ge1$.  For $i\in n=\{0,\ldots,n-1\}$ put $C_i=\{b\in B:b+U=O_{i+1}\}$.  Each $C_i$ is nonempty because $O_{i+1}$ belongs to the displayed cover.  Apply [F6] to the function $i\mapsto C_i$ with domain $n$; if $c$ is the resulting choice function on its family of values, set $b_{i+1}=c(C_i)$.  Then $b_{i+1}\in B$, $O_{i+1}=b_{i+1}+U$, and hence $B\subseteq\bigcup_{j=1}^n(b_j+U)$.  Put $B_j=B\cap(b_j+U)$ and $K_j=\overline{\operatorname{co}}(B_j)$.  Each $B_j$ is nonempty because it contains $b_j$. [F6, step 1.1, step 2.1]

4.1 Each $K_j$ is a nonempty compact convex subset of $K$: the closed convex set $K$ contains $B_j$, hence its closed convex hull, and $K_j$ is closed in compact $K$, so [F4] applies.  Moreover $w\notin K_j$.  Indeed $\operatorname{co}(B_j)\subseteq b_j+U$ by convexity; if $w$ lay in its closure, the open neighborhood $w+U$ of $w$ would meet $b_j+U$, giving $b_j\in w+U-U$, contrary to $b_j\in B$ and step 2.1. [F4, step 2.1, step 3.1]

5.1 Let $H=\operatorname{co}(K_1\cup\cdots\cup K_n)$.  By [F5], $H$ is compact and therefore closed in the Hausdorff ambient space, and every point of $H$ is $\sum_{j=1}^nt_jx_j$ with $x_j\in K_j$, $t_j\geq0$, and $\sum_jt_j=1$.  Since $A\subseteq B\subseteq\bigcup_jB_j\subseteq H$, closedness and convexity of $H$ give $K=\overline{\operatorname{co}}(A)\subseteq H$; conversely every $K_j\subseteq K$ and $K$ is convex, so $H\subseteq K$.  Hence $H=K$. [F5, step 3.1, step 4.1, given]

6.1 Apply the representation in step 5.1 to $w$: write $w=\sum_jt_jx_j$ with $x_j\in K_j$.  If exactly one coefficient is positive, it equals one and gives $w=x_j\in K_j$, contradicting step 4.1.  Otherwise, for each $i$ with $t_i>0$ one has $0<t_i<1$ and may write $w=t_ix_i+(1-t_i)y_i$, where $y_i=(1-t_i)^{-1}\sum_{j\ne i}t_jx_j\in K$. [step 4.1, step 5.1]

7.1 Since $w$ is extreme, [F1] applied to the strict representation in step 6.1 gives $x_i=w$ for every positive coefficient $t_i$.  At least one coefficient is positive, so $w\in K_i$ for some $i$, again contradicting step 4.1.  Therefore no such $w$ exists and $\operatorname{ext}K\subseteq B=\overline A$. [F1, step 2.1, step 4.1, step 6.1, discharge-contradiction]

8.1 If $A$ is compact, then it is closed by [F3], so $\overline A=A$ and step 7.1 gives $\operatorname{ext}K\subseteq A$.  This proves both assertions, including the empty case from step 1.1. [F3, step 1.1, step 7.1, discharge-contradiction] ∎
