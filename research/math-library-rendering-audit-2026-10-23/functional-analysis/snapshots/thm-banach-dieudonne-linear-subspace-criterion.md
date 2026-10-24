---
id: thm-banach-dieudonne-linear-subspace-criterion
kind: theorem
title: Banach–Dieudonné linear-subspace criterion
status: published
origin: pipeline
deps: ["thm-banach-alaoglu", "thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma", "def-dependent-choice", "def-hahn-banach-extension-principle-relative", "thm-dual-of-c0-is-ell-one", "thm-banach-series-criterion", "lem-basic-weak-star-neighborhoods"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.3, Theorem 3.40 and Corollary 3.41, pp. 138–141"
proof_strategy: direct
---

## Statement

**Assume the ultrafilter lemma, DC, and HB.**  Let $X$ be a real or complex
Banach space and let $E$ be a linear subspace of $X^*$.  Then $E$ is weak-star
closed if and only if $E\cap B_{X^*}$ is weak-star closed.

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC, HB, a real or complex Banach space $X$, and a linear subspace $E\leq X^*$.

[F1] Under the ultrafilter lemma, every closed dual ball is weak-star compact ([[thm-banach-alaoglu]]).

[F2] Compact-Hausdorff Tychonoff is available under the ultrafilter lemma and is the product-compactness input in Banach–Alaoglu ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[F3] DC supplies an $\mathbb N$-indexed chain for an entire relation from a prescribed initial state ([[def-dependent-choice]]).

[F4] HB extends a dominated real-linear functional from a real subspace to the whole real normed space ([[def-hahn-banach-extension-principle-relative]]).

[F5] Every continuous linear functional on real $c_0$ is pairing with a unique $\ell^1$ sequence, with equality of norms ([[thm-dual-of-c0-is-ell-one]]).

[F6] Every absolutely convergent series in a Banach space converges ([[thm-banach-series-criterion]]).

[F7] Finite evaluation conditions form a weak-star neighborhood basis, and the weak-star vector operations are continuous ([[lem-basic-weak-star-neighborhoods]]).

## Proof

**Proof technique:** direct.

1.1 If $E$ is weak-star closed, then so is $E\cap B_{X^*}$, because $B_{X^*}=\bigcap_{x\in B_X}\{f:|f(x)|\leq1\}$ is an intersection of closed evaluation constraints. [F7]

1.2 For the reverse implication first suppose $\mathbb K=\mathbb R$ and $A:=E\cap B_{X^*}$ is weak-star closed.  If $f_n\in E$ and $f_n\to f$ in norm, boundedness of the convergent sequence gives $R>0$ with $R^{-1}f_n\in A$; norm convergence implies weak-star convergence, so closedness of $A$ gives $R^{-1}f\in A$ and $f\in E$.  If some $f_0\notin E$ had $\inf_{f\in E}\lVert f-f_0\rVert=0$, DC could select $f_n\in E$ with $\lVert f_n-f_0\rVert<1/(n+1)$, contradicting this sequential norm-closedness.  Hence $d:=\operatorname{dist}(f_0,E)>0$; fix $0<\delta<d$. [F3, F7, given]

2.1 For finite sets $S_k\subseteq B_X$, let $P_n(S_1,\ldots,S_{n-1})$ mean: every $f\in E$ with $\lVert f-f_0\rVert\leq n\delta$ violates at least one earlier test, so $|(f-f_0)(x)|>k\delta$ for some $1\leq k<n$ and $x\in S_k$.  The assertion $P_1$ is vacuous because $\delta<d$. [step 1.2]

3.1 Suppose $P_n$ holds.  For finite $S\subseteq B_X$, let $E(S)$ consist of those $f\in E$ with $\lVert f-f_0\rVert\leq(n+1)\delta$, all earlier tests at most $k\delta$, and the $S$-test at most $n\delta$.  Put $R=\lVert f_0\rVert+(n+1)\delta$.  The set $K=E\cap RB_{X^*}=R A$ is weak-star compact: $RB_{X^*}$ is compact by scaling [F1], $RA$ is weak-star closed, and [F1] uses the ultrafilter lemma through [F2].  Each $E(S)$ is weak-star closed in $K$, because each norm bound is the intersection over $x\in B_X$ of closed evaluation constraints.  If every $E(S)$ were nonempty, the identity $\bigcap_{i=1}^qE(S_i)=E(\bigcup_iS_i)$ would give the finite-intersection property; compactness would produce $f$ in every $E(S)$.  Taking singleton $S=\{x\}$ for every $x\in B_X$ would give $\lVert f-f_0\rVert\leq n\delta$, while all earlier tests hold, contradicting $P_n$.  Thus some finite listed $S_n$ has $E(S_n)=\varnothing$, and that emptiness is exactly $P_{n+1}$. [F1, F2, F7, step 2.1]

4.1 Apply DC to the relation that extends a finite list $(S_1,\ldots,S_{n-1})$ satisfying $P_n$ by a finite listed $S_n$ supplied in step 3.1.  Starting from the empty list, it yields finite listed sets $S_n\subseteq B_X$ for all $n\geq1$ with every $P_n$ true.  Recording the finite listing as part of each state avoids a later countable choice of enumerations. [F3, step 3.1]

5.1 Concatenate, for $n=1,2,\ldots$, the finite list $n^{-1}S_n$ followed by one zero padding term, obtaining a sequence $(x_i)$ in $B_X$.  If a term lies in the $n$th block its norm is at most $1/n$; because each block is finite and nonempty after padding, the block number tends to infinity with $i$.  Hence $\lVert x_i\rVert\to0$. [step 4.1]

6.1 For every $f\in E$, choose an integer $n\geq\max(2,\delta^{-1}\lVert f-f_0\rVert)$.  Property $P_n$ gives $k<n$ and $x\in S_k$ with $|(f-f_0)(x)|>k\delta$; the coordinate $x/k$ occurs in $(x_i)$, so $\sup_i|(f-f_0)(x_i)|>\delta$. [step 2.1, step 4.1, step 5.1]

7.1 Define $T:X^*\to c_0$ by $T(f)=(f(x_i))_i$.  Step 5.1 makes every image a null sequence, and $\lVert T(f)\rVert_\infty\leq\lVert f\rVert\sup_i\lVert x_i\rVert$, so $T$ is bounded and linear.  With $y_0=T(f_0)$, step 6.1 gives $\lVert T(f)-y_0\rVert_\infty>\delta$ for every $f\in E$; therefore the closed linear subspace $M=\overline{T(E)}$ has $\operatorname{dist}(y_0,M)\geq\delta$. [step 5.1, step 6.1]

8.1 On $M+\mathbb Ry_0$ define $g(m+ay_0)=a$.  This is well defined because $y_0\notin M$, and $\lVert m+ay_0\rVert\geq|a|\delta$ shows $|g|\leq\delta^{-1}\lVert\cdot\rVert$.  Applying HB to the sublinear function $\delta^{-1}\lVert\cdot\rVert$ extends $g$ to $\beta\in(c_0)^*$ with $\beta(y_0)=1$, $\beta|_M=0$, and $\lVert\beta\rVert\leq\delta^{-1}$.  This is the sole HB use. [F4, step 7.1]

9.1 By [F5] there is $\alpha=(\alpha_i)\in\ell^1$ with $\beta(y)=\sum_i\alpha_i y_i$ for $y\in c_0$ and $\sum_i|\alpha_i|=\lVert\beta\rVert\leq\delta^{-1}$. [F5, step 8.1]

10.1 Since $\sum_i\lVert\alpha_ix_i\rVert\leq\sum_i|\alpha_i|\leq\delta^{-1}$ and $X$ is Banach, [F6] gives $x_0=\sum_i\alpha_ix_i\in X$ with $\lVert x_0\rVert\leq\delta^{-1}$. [F6, step 5.1, step 9.1]

11.1 Continuity of every $f\in X^*$ allows evaluation term by term: $f(x_0)=\sum_i\alpha_if(x_i)=\beta(Tf)$.  Thus $f_0(x_0)=1$ and $f(x_0)=0$ for every $f\in E$.  The weak-star neighborhood $\{h:|(h-f_0)(x_0)|<1/2\}$ therefore misses $E$. [F7, step 7.1, step 8.1, step 9.1, step 10.1]

12.1 Every $f_0\notin E$ has the weak-star neighborhood constructed in step 11.1 disjoint from $E$, so $E$ is weak-star closed in the real case.  Together with step 1.1 this proves both directions there. [step 1.1, step 11.1]

13.1 Now let $X$ be complex and write $X_{\mathbb R}$ for its realification.  The map $\mathcal R:X^*\to(X_{\mathbb R})^*$, $\mathcal Rf=\operatorname{Re}f$, is a real-linear isometric bijection with inverse $g\mapsto(x\mapsto g(x)-ig(ix))$: complex linearity follows from the displayed formula, and rotating a vector shows norm equality.  It is a weak-star homeomorphism because $g(x)=\operatorname{Re}f(x)$ and $\operatorname{Im}f(x)=-g(ix)$.  For a complex-linear $E$, $\mathcal R(E)$ is real-linear and $\mathcal R(E\cap B_{X^*})=\mathcal R(E)\cap B_{(X_{\mathbb R})^*}$.  Hence closedness of the complex slice implies closedness of the real slice; step 12.1 makes $\mathcal R(E)$ real weak-star closed, and the homeomorphism makes $E$ complex weak-star closed. [F7, step 12.1]

14.1 Step 1.1 proves the forward implication over both scalar fields, step 12.1 proves the reverse implication over $\mathbb R$, and step 13.1 proves it over $\mathbb C$.  Therefore the two weak-star closedness conditions are equivalent. [step 1.1, step 12.1, step 13.1] ∎
