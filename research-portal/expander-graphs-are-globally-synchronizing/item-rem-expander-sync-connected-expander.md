---
title: Connectivity and the lower Laplacian parameter
status: published
research_item: rem-expander-sync-connected-expander
dependency_level: 5
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 19, prose after Proposition 3.2; p. 20, Remark 3.5
      statement: The article states that c^- > -1 is equivalent to connectivity and
        gives the lower bound (1+c^-)d^* for the second-smallest Laplacian
        eigenvalue.
      hypotheses: The graph satisfies the two-sided expander inequalities of
        Definition 1.9; the displayed strict positivity argument assumes d^* >
        0.
      reading_limits: The cited passages and Definition 1.9 were inspected in the
        supplied article text. This citation attributes the article's claim; it
        is not a premise for the proof below.
---

PDF p. 19: ` Prose after Proposition 3.2 `; PDF p. 20: ` Remark 3.5 `

## Prerequisites

- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel)
- [prop-expander-prereq-constant-projection](item-prop-expander-prereq-constant-projection)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)


## Statement

Let $G$ be an $(n,d^*,\alpha,c^-,c^+)$-expander with $n\ge2$ and $d^*>0$. Its adjacency matrix is $A$, its degree matrix is $D$, its Laplacian is $L=D-A$, and $\Delta_L=L-d^*I+(d^*/n)J$, where $J$ is the all-ones matrix. Write $\lambda_2(L)$ for the second-smallest eigenvalue of $L$, counting multiplicity. Then $\lambda_2(L)\ge(1+c^-)d^*$. In particular, $c^->-1$ implies that $G$ is connected.

Conversely, connectivity guarantees that some admissible lower parameter exceeds $-1$, with the other parameters chosen appropriately. It does not force an arbitrarily prescribed admissible $c^-$ to exceed $-1$.

## Statement references

[def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)

[def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)

## Facts & Assumptions

[F1] The expander definition includes $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$, and the Loewner order means nonnegativity of the corresponding quadratic forms. [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander) [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)

[F2] For nonempty $V$, $P=J/n$ is the orthogonal projection onto the constant vectors, and $Q=I-P$ projects onto $\mathbf1^\perp=\{f:\sum_x f(x)=0\}$. [prop-expander-prereq-constant-projection](item-prop-expander-prereq-constant-projection)

[F3] The Laplacian is positive semidefinite, its kernel consists of functions constant on each connected component, and for $n\ge2$ zero is a simple Laplacian eigenvalue exactly when the graph is connected. [prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel)

[F4] A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

## Proof

**Given:** The expander and parameter hypotheses in the statement.

**Goal:** Prove the spectral lower bound, its connectivity consequence, and the qualified converse.

1.1 By the centered-matrix identity, $L=\Delta_L+d^*(I-P)$. For $f\in\mathbf1^\perp$, [F1] and [F2] therefore give $f^*Lf\ge(1+c^-)d^*\|f\|^2$. Also $L\mathbf1=0$ by the degree definition, and $L$ is real symmetric. Thus [F4] gives an orthonormal eigenbasis including $\mathbf1/\sqrt n$; by [F3] all its eigenvalues are nonnegative. Each other basis vector lies in $\mathbf1^\perp$, so its eigenvalue is at least $(1+c^-)d^*$. Consequently $\lambda_2(L)\ge(1+c^-)d^*$. [given, F1, F2, F3, F4, algebra]

2.1 If $c^->-1$, the lower bound in step 1.1 is positive because $d^*>0$. Hence zero is simple, and [F3] gives connectivity. Conversely, suppose $G$ is connected. By [F3] and [F4], its smallest eigenvalue is zero and $\lambda_2(L)>0$. For any chosen $d^*>0$, put $c^-=\min\{0,\lambda_2(L)/d^*-1\}$. On $\mathbf1^\perp$, the eigenbasis gives $\Delta_L=L-d^*I\succeq c^-d^*I$; on the constant subspace both sides have quadratic values $0$ and $c^-d^*\|f\|^2$, respectively. Thus the lower inequality holds and $c^->-1$. Since the matrices are finite-dimensional and self-adjoint, choose $c^+$ large enough for the upper inequality and $\alpha$ large enough for $\|\Delta_A\|\le\alpha d^*$. These choices make the connected graph an expander with a lower parameter exceeding $-1$. [F1, F2, F3, F4, step 1.1, choose, algebra]

3.1 The choice of lower parameter need not be optimal. For the connected graph $K_2$ with $d^*=1$, $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $L=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$. On the constant and zero-sum vectors, respectively, $\Delta_A=A-J/2$ has eigenvalues $0,-1$, while $\Delta_L=L-I+J/2$ has eigenvalues $0,1$. Hence $K_2$ is a $(2,1,1,-1,1)$-expander, although its prescribed $c^-=-1$. This proves the stated limitation. [F1, F2, F4, algebra] ∎

## Source notes

The article states the unqualified equivalence between $c^->-1$ and connectivity and gives the displayed lower-bound argument. The counterexample above shows why the converse requires the existential qualification. This paragraph attributes the claim to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 19–20; the proof uses the mathematical suppliers listed above.
