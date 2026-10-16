---
id: lem-qc-compact-su2-base-net
kind: lemma
title: Compactness Gives a Finite SU(2) Base Net
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-qc-inverse-closed-dense-su2-gate-set
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-closed-unit-ball-compact-iff-finite-dimensional
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §3, finite preprocessing net, PDF pp. 4–7
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29
---

## Statement

For every $\delta>0$ and every finite $G\subset SU(2)$ whose generated
subgroup is dense, there is a finite list of words in $G$ whose values form a
$\delta$-net of $SU(2)$. The maximum length of the words in that finite list
is finite. This is an existence statement; it does not compute a net from the
density hypothesis.

## Facts & Assumptions

**Given:** A finite $G\subset SU(2)$ whose generated subgroup is dense and a real $\delta>0$.

[F1] The closed unit ball of a finite-dimensional real or complex normed space is compact ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

[F2] The operator norm defines the matrix-space norm used here ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 The ambient space $M_2(\mathbb C)$ is finite-dimensional over $\mathbb C$. For $U\in SU(2)$, norm preservation gives $\|U\|=1$ by [F2], so $SU(2)$ lies in the closed operator-norm unit ball. It is closed there because $U^*U=I$ and $\det U=1$ are continuous equations in the matrix entries and their conjugates. [F1] makes the closed unit ball compact; therefore its closed subset $SU(2)$ is compact. [F1, F2, algebra]

2.1 Let $S$ be the values of finite words in $G$ and let $H=\overline S\subseteq SU(2)$. Since $S$ is closed under multiplication and matrix multiplication is continuous, $H$ is a closed semigroup. For each integer $n\ge1$, let $N_n$ be the least number of operator-norm balls of radius $1/n$ covering $SU(2)$; compactness gives such a finite cover. Fix $g\in G$. Two of $I,g,\ldots,g^{N_n}$ lie in one cover ball, say $g^r,g^s$ with $r<s$. By [F2], $\|g^{s-r}-I\|=\|(g^s-g^r)g^{-r}\|<2/n$. Let $d_n$ be the least $d\in\{1,\ldots,N_n\}$ with $\|g^d-I\|<2/n$. If $d_n=1$ for infinitely many $n$, then $g=I$ and $g^{-1}=g\in S$; otherwise $d_n\ge2$ eventually, and $g^{d_n-1}\in S$ satisfies $\|g^{d_n-1}-g^{-1}\|=\|(g^{d_n}-I)g^{-1}\|<2/n$, so $g^{-1}\in H$. This holds for every $g\in G$. Hence $H$ contains $G$ and its inverses, so it contains $\langle G\rangle$; closedness of $H$ and density of $\langle G\rangle$ give $H=SU(2)$. Therefore word values in $G$ are dense. [F1, F2, given, step 1.1, construct]

3.1 For each $U\in SU(2)$, density supplies a word value $g_U\in S$ with $\|U-g_U\|<\delta/2$. The open balls of radius $\delta/2$ centered at these word values cover $SU(2)$. Compactness gives a finite subcover with centers $g_1,\ldots,g_r$. Choose one finite word representing each $g_j$; the resulting list is a $\delta$-net, and the maximum of its finitely many word lengths is finite. The compactness argument supplies no effective search cutoff or certificate. [step 1.1, step 2.1, choose] ∎
