---
title: Symmetrization and moments of the adjacency difference
status: draft
research_item: lem-expander-sync-symmetrized-moments
dependency_level: 3
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 33, proof of Proposition 6.3, first paragraphs
      statement: The article displays a symmetrization inequality for the centered
        adjacency matrix, the moments of the entries of W, and a trace-moment
        bound for its norm.
      hypotheses: The proposition takes n sufficiently large and p in (0,1), with the
        loop-free G(n,p) adjacency convention and reference degree pn.
      reading_limits: The indicated PDF page and extracted text were inspected. This
        reference attributes the passage; it is not used as proof of the
        corrected assertions.
---

PDF p. 33: ` Proof of Proposition 6.3, first paragraphs `

## Prerequisites

- [def-expander-sync-symmetrized-matrix](item-def-expander-sync-symmetrized-matrix)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [prop-expander-prereq-independent-copy-norm-symmetrization](item-prop-expander-prereq-independent-copy-norm-symmetrization)
- [prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)
- [prop-expander-prereq-random-matrix-walk-expansion](item-prop-expander-prereq-random-matrix-walk-expansion)
- [math:thm-finite-jensen-inequality](https://alphabetamath.cc/item/thm-finite-jensen-inequality)


## Statement

Let $n\geq1$ and $p\in[0,1]$. Let $A$ be the adjacency matrix of the loop-free Erdős–Rényi graph $G(n,p)$, and let $A'$ be an independent copy. Thus the entries indexed by distinct unordered pairs of distinct vertices are independent Bernoulli$(p)$ variables, $A$ is symmetric, and its diagonal is zero. Let $I$ be the identity matrix, $J$ the all-ones matrix, $\Delta_A=A-pJ$, and $W=A-A'$. The norm $\|\cdot\|$ is the operator norm induced by the Euclidean norm; $\operatorname{Tr}$ denotes the sum of diagonal entries.

Then $\mathbb EA=p(J-I)$ and $\mathbb E\|\Delta_A\|\leq\mathbb E\|W\|+p$. For each $x\ne y$ and each positive integer $k$, $\mathbb E W_{x,y}^k=0$ when $k$ is odd and $\mathbb E W_{x,y}^k=2p(1-p)$ when $k$ is even. With the zeroth power interpreted as the constant one, $\mathbb E W_{x,y}^0=1$. The diagonal entries of $W$ are zero. For every integer $\ell\geq1$, $\mathbb E\|W\|\leq(\mathbb E\operatorname{Tr}W^{2\ell})^{1/(2\ell)}$.

The stronger inequality $\mathbb E\|\Delta_A\|\leq\mathbb E\|W\|$ can fail even when $n\geq2$ and $0<p<1$. For instance it fails at $p=1-[4n(n-1)]^{-1}$.

## Facts & Assumptions

[F1] The centered-matrix and operator-norm conventions give $\Delta_A=A-pJ$ for reference degree $pn$ and define the induced operator norm ([def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices), [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

[F2] The independent-copy construction gives a symmetric zero-diagonal $W$ whose off-diagonal entries are differences of independent Bernoulli$(p)$ variables ([def-expander-sync-symmetrized-matrix](item-def-expander-sync-symmetrized-matrix)).

[F3] Independent-copy norm symmetrization gives $\mathbb E\|A-\mathbb EA\|\leq\mathbb E\|A-A'\|$ and, for this graph, $\mathbb EA=p(J-I)$ ([prop-expander-prereq-independent-copy-norm-symmetrization](item-prop-expander-prereq-independent-copy-norm-symmetrization)).

[F4] A difference of two independent Bernoulli$(p)$ variables has odd positive moments zero, positive even moments $2p(1-p)$, and zeroth moment one ([prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)).

[F5] For a real symmetric matrix and $\ell\geq1$, $\|W\|^{2\ell}\leq\operatorname{Tr}W^{2\ell}$ pointwise ([prop-expander-prereq-random-matrix-walk-expansion](item-prop-expander-prereq-random-matrix-walk-expansion)).

[F6] Finite Jensen gives $f(\sum_i q_i x_i)\leq\sum_iq_i f(x_i)$ for a convex real function and nonnegative weights $q_i$ summing to one ([math:thm-finite-jensen-inequality](https://alphabetamath.cc/item/thm-finite-jensen-inequality)).

## Proof

**Given:** The graph, independent copy, and integers in the statement.

**Goal:** Prove the corrected symmetrization and moment assertions, the trace bound, and the stated counterexample to the stronger inequality.

1.1 By [F3], $\Delta_A=(A-\mathbb EA)-pI$. The operator norm of $I$ is one, since $n\geq1$ and $If=f$ for every vector. The triangle inequality, followed by [F3], yields $\mathbb E\|\Delta_A\|\leq\mathbb E\|A-\mathbb EA\|+p\leq\mathbb E\|W\|+p$. [F1, F3, given, algebra]

1.2 The off-diagonal description in [F2] permits direct application of [F4] to every $x\ne y$. It gives the positive odd and even moments and the separately stated zeroth moment. The diagonal assertion follows from [F2]. [F2, F4, given]

1.3 The finite graph sample space makes $X=\|W\|$ a nonnegative finite-valued random variable. Put $m=2\ell\ge2$. For $s,t\ge0$, direct polynomial multiplication gives $t^m-s^m-ms^{m-1}(t-s)=(t-s)^2\sum_{j=0}^{m-2}(j+1)t^{m-2-j}s^j\ge0$, where zeroth powers are constant one. Given $x,y\ge0$ and $q\in[0,1]$, apply this inequality at $s=qx+(1-q)y$ with $t=x$ and $t=y$, and multiply the two inequalities by $q$ and $1-q$. The linear terms cancel, yielding $s^m\le qx^m+(1-q)y^m$. Thus $f(t)=t^{2\ell}$ is convex on $[0,\infty)$. Apply [F6] to this function with weights equal to the outcome probabilities. Thus $(\mathbb EX)^{2\ell}\leq\mathbb E X^{2\ell}\leq\mathbb E\operatorname{Tr}W^{2\ell}$ by [F5]. Taking the nonnegative $2\ell$-th root proves the trace bound. [F5, F6, given, algebra]

2.1 For $n\geq2$, each diagonal entry of $\Delta_A$ is $-p$, so applying $\Delta_A$ to a standard unit vector shows $\|\Delta_A\|\geq p$. On the other hand, the operator norm is at most the sum of the absolute values of all matrix entries: each matrix unit has norm one, and the triangle inequality applies. By [F2] and [F4], $\mathbb E|W_{xy}|=2p(1-p)$ for $x\ne y$ and the diagonal is zero. Hence $\mathbb E\|W\|\leq2n(n-1)p(1-p)$. At $p=1-[4n(n-1)]^{-1}$ this upper bound is $p/2<p\leq\mathbb E\|\Delta_A\|$. These steps establish all assertions. [F1, F2, F4, given, algebra] ∎

## Source notes

The article's proof of Proposition 6.3 displays the stronger symmetrization inequality and states the even-moment formula for all $\ell\geq0$. The corrected bounds above retain the positive-moment and trace claims while accounting for the nonzero mean $\mathbb E\Delta_A=-pI$ and the zeroth moment. The article is cited for attribution, not as a proof of this lemma.
