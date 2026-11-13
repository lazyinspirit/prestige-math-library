---
title: The unnormalized Laplacian needs its own degree deviation
status: draft
research_item: lem-author-635c380339fd-centered-laplacian
dependency_level: 3
---

## Prerequisites

- [lem-author-635c380339fd-loop-coupling](item-lem-author-635c380339fd-loop-coupling)
- [lem-author-635c380339fd-degree-envelope](item-lem-author-635c380339fd-degree-envelope)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)


## Statement

Use the matrices and graph law in the loop-coupling and degree-envelope lemmas. Define $X=W-p(J-I)$ and $Y=L(W)+pJ-dI$. If $\|X\|\le K\sqrt d$ and every degree has $|d_i-(n-1)p|\le\sqrt{12d\log n}$, then $\|Y\|\le K\sqrt d+\sqrt{12d\log n}$. The same $Y$ is obtained after adding any loops.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The loop-coupling notation has $W$ real symmetric, $J=\mathbf1\mathbf1^T$, $d=np$, $L(W)=\operatorname{diag}(W\mathbf1)-W$, and loop invariance $L(W+B)=L(W)$ for the added diagonal loops ([lem-author-635c380339fd-loop-coupling](item-lem-author-635c380339fd-loop-coupling)). The simultaneous loop-free degree envelope is supplied by [lem-author-635c380339fd-degree-envelope](item-lem-author-635c380339fd-degree-envelope); the argument below is conditional on the stated degree and adjacency bounds.

[F2] In the finite vertex space, $\|f\|_2^2=\sum_i|f_i|^2$ and $\langle f,Tf\rangle=f^*Tf$ ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)). For real symmetric $T$ and $a\ge0$, $\|T\|\le a$ is equivalent to $-aI\preceq T\preceq aI$; the order is defined by nonnegative quadratic forms, and order inequalities can be added ([prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)).

## Proof

1.1 Put $h_i=d_i-(n-1)p$ and $H=\operatorname{diag}(h_i)$. Since $W\mathbf1=(d_i)_i$ and $d=np$, expansion gives $H-X=\operatorname{diag}(d_i)-(n-1)pI-W+pJ-pI=L(W)+pJ-dI=Y$. [given, F1, algebra]

2.1 Put $m=\sqrt{12d\log n}$. The assumed degree bounds give $-m\le h_i\le m$. Hence for every $f\in\mathbb C^n$, $\langle f,(mI\pm H)f\rangle=\sum_i(m\pm h_i)|f_i|^2\ge0$. By the definition of the order, $-mI\preceq H\preceq mI$. [given, F2, step 1.1, algebra]

3.1 Put $b=K\sqrt d$. The assumed bound $\|X\|\le b$ implies $b\ge0$. The matrix $X=W-p(J-I)$ is real symmetric, so the norm-order equivalence yields $-bI\preceq X\preceq bI$. The same two inequalities give $-bI\preceq -X\preceq bI$, because $bI-X$ and $bI+X$ are positive semidefinite. Adding these bounds to those for $H$ gives $-(m+b)I\preceq H-X\preceq(m+b)I$. The matrix $H-X=Y$ is real symmetric and $m+b\ge0$, so the reverse norm-order implication gives $\|Y\|\le m+b=K\sqrt d+\sqrt{12d\log n}$. [given, F1, F2, step 1.1, step 2.1, algebra]

4.1 Adding diagonal loops leaves $L(W)$ unchanged by [F1], while $p$, $J$ and $d$ remain fixed. Thus it leaves $Y=L(W)+pJ-dI$ unchanged. The bound in step 3.1 retains the separate degree-deviation term; no $O(\sqrt d)$ bound for the unnormalized centered Laplacian is inferred from an adjacency bound alone. [F1, step 3.1] ∎
