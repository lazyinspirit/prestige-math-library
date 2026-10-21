---
id: lem-vector-rademacher-contraction-for-bounded-classes
kind: lemma
title: "A finite-dimensional vector contraction bound for one-sided Rademacher averages"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - lem-cauchy-schwarz-for-finite-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Andreas Maurer, A vector-contraction inequality for Rademacher complexities, Theorem 3 and Corollary 4"
      url: "https://arxiv.org/pdf/1605.00251"
    - title: "Yunwen Lei, Tianbao Yang, Yiming Ying, and Ding-Xuan Zhou, Generalization Analysis for Contrastive Representation Learning, Lemma A.1"
      url: "https://arxiv.org/pdf/2302.12383"
---

## Statement

Let $m,d\ge1$, let $V$ be a nonempty bounded subset of $(\mathbb R^d)^m$, and let $h_i:\mathbb R^d\to\mathbb R$ be $L$-Lipschitz for one common $L\ge0$. Let $(\varepsilon_i)_{i=1}^m$ and $(\eta_{it})_{1\le i\le m,1\le t\le d}$ be independent uniform signs in $\{-1,+1\}$. Writing $v_i=(v_{i1},\ldots,v_{id})$, the one-sided averages satisfy

$$\mathbb E_\varepsilon\sup_{v\in V}\sum_{i=1}^m\varepsilon_i h_i(v_i)\le\sqrt3L\,\mathbb E_\eta\sup_{v\in V}\sum_{i=1}^m\sum_{t=1}^d\eta_{it}v_{it}.$$

Neither supremum uses an absolute value, and no condition $h_i(0)=0$ is imposed. The bound holds for finite or infinite bounded $V$; all displayed suprema are finite.

## Statement references

[[lem-cauchy-schwarz-for-finite-random-variables]]: supplies Cauchy–Schwarz for the finite uniform sign spaces used in the proof.

[Maurer, Theorem 3 and Corollary 4, complete vector-contraction proof](https://arxiv.org/pdf/1605.00251): proves the sharper $\sqrt2L$ version through a one-coordinate comparison and induction.

[Lei et al., Lemma A.1, complete vector-contraction proof](https://arxiv.org/pdf/2302.12383): gives an independent contrastive-learning application of the vector-contraction inequality.

## Facts & Assumptions

**Given:** $m,d\ge1$, a nonempty bounded set $V\subseteq(\mathbb R^d)^m$, a common Lipschitz constant $L\ge0$, and the independent uniform signs in the Statement.

[F1] On a finite probability space, $\mathbb E[XY]^2\le\mathbb E[X^2]\mathbb E[Y^2]$. [[lem-cauchy-schwarz-for-finite-random-variables]]

## Proof
**Given:** The objects and hypotheses in the Statement.

1.1 For any $u\in\mathbb R^d$, put $X=\sum_{t=1}^d\eta_tu_t$ for independent uniform signs $\eta_t$. Expanding the finite sign average gives $\mathbb E X^2=\sum_tu_t^2=\lVert u\rVert_2^2$ and $\mathbb E X^4=\sum_tu_t^4+6\sum_{s<t}u_s^2u_t^2=3\lVert u\rVert_2^4-2\sum_tu_t^4\le3\lVert u\rVert_2^4$. By [F1], $\mathbb E|X|^2\le(\mathbb E|X|)^{1/2}(\mathbb E|X|^3)^{1/2}$ and $\mathbb E|X|^3\le(\mathbb E X^2)^{1/2}(\mathbb E X^4)^{1/2}$. If $u\ne0$, combining and squaring these inequalities yields $\mathbb E|X|\ge(\mathbb E X^2)^{3/2}/(\mathbb E X^4)^{1/2}\ge\lVert u\rVert_2/\sqrt3$; the same bound is immediate for $u=0$. [F1, given, algebra]

2.1 Fix an index $i$ and any real function $a$ on $V$. Averaging over $\varepsilon_i=\pm1$ gives half the sum of $\sup_v(h_i(v_i)+a(v))$ and $\sup_w(-h_i(w_i)+a(w))$, hence half the supremum over ordered pairs $(v,w)$ of $h_i(v_i)-h_i(w_i)+a(v)+a(w)$. Swapping $v,w$ leaves $a(v)+a(w)$ unchanged and reverses the loss difference, so this ordered-pair supremum equals $\mathbb E_{\varepsilon_i}\sup_{v\in V}\{\varepsilon_i h_i(v_i)+a(v)\}=\frac12\sup_{v,w\in V}\{|h_i(v_i)-h_i(w_i)|+a(v)+a(w)\}$. By Lipschitz continuity and step 1.1, the right side is at most $\frac12\mathbb E_{\eta_i}\sup_{v,w\in V}\{\sqrt3L|\langle\eta_i,v_i-w_i\rangle|+a(v)+a(w)\}$. For each fixed sign vector, swapping $v,w$ shows the supremum is unchanged if the absolute value is removed. It then separates into a sum of two suprema; symmetry of $\eta_i$ makes their expectations equal. Therefore $\mathbb E_{\varepsilon_i}\sup_{v\in V}\{\varepsilon_i h_i(v_i)+a(v)\}\le\mathbb E_{\eta_i}\sup_{v\in V}\{\sqrt3L\langle\eta_i,v_i\rangle+a(v)\}$. [F1, step 1.1, given, algebra]

3.1 For finite $V$, define $Q_k$ to be the expectation of the supremum with the first $k$ terms replaced by $\sqrt3L\sum_t\eta_{it}v_{it}$ and the remaining terms equal to $\varepsilon_i h_i(v_i)$. Then $Q_0$ is the left side of the Statement and $Q_m$ is its right side. For each $k<m$, condition on all signs except $\varepsilon_{k+1}$ and the corresponding vector signs, and collect the other terms into $a(v)$. Step 2.1 gives $Q_k\le Q_{k+1}$. Iterating these finitely many inequalities yields $Q_0\le Q_m$. [step 2.1, given, algebra]

4.1 For arbitrary bounded nonempty $V$, the scalar sign cube has finitely many elements. Given $\delta>0$, choose for each scalar sign vector one point of $V$ whose left-hand signed sum is within $\delta$ of its supremum, and let $V_0$ be the finite set of chosen points. Then the left average over $V_0$ is within $\delta$ of that over $V$, while the coordinate-sign supremum over $V_0$ is no larger than that over $V$. Applying step 3.1 to $V_0$ and letting $\delta\downarrow0$ proves the claimed inequality for $V$. This uses only finitely many approximate choices for each $\delta$. [step 3.1, given, choose, algebra] ∎
