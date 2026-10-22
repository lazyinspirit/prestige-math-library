---
id: lem-metabolic-seifert-form-implies-fox-milnor-factorization
kind: lemma
title: "A metabolic Seifert matrix has Fox–Milnor factorization"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3.3, printed p. 326: a metabolic Seifert form has Alexander determinant equal up to a Laurent unit to f(t)f(t^{-1})."
    - title: "Anthony Conway, The Levine–Tristram Signature: A Survey"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1 and Remark 2.10, printed pp. 3–5: Seifert matrix conventions and the metabolic zero-block form."
---

## Statement

Let $g$ be a nonnegative integer, let $L$ be a free abelian group of rank $2g$, and let $V:L\times L\to\mathbb Z$ be a bilinear form whose matrix in an integral basis satisfies $\det(V-V^T)=\pm1$. Let $M\subseteq L$ be a direct summand of rank $g$ such that $V(x,y)=0$ for every $x,y\in M$. Write $d_V(t)=\det(V-tV^T)$, using the empty determinant $1$ when $g=0$. Then there is a polynomial $f(t)\in\mathbb Z[t]$ such that

$$d_V(t)=t^g f(t)f(t^{-1}).$$

In the Laurent polynomial ring, define $p\doteq q$ to mean $p=\pm t^kq$ for some integer $k$. Thus $d_V(t)\doteq f(t)f(t^{-1})$.

## Facts & Assumptions

**Given:** A finite-rank integral bilinear form $(L,V)$ with the stated unimodular skew part, and a rank-$g$ direct summand $M$ on which $V$ vanishes.

[A1] The stated hypotheses are the entire input: $L\cong\mathbb Z^{2g}$, $\det(V-V^T)=\pm1$, $M$ is a direct summand of rank $g$, and $V|_{M\times M}=0$.

## Proof

1.1 If $g=0$, then $L=M=0$, so the empty determinant and $f=1$ give the formula. Suppose $g>0$. Write $L=M\oplus N$ and choose integral bases of the two rank-$g$ summands. In the combined basis, $V=\begin{pmatrix}0&B\\C&D\end{pmatrix}$ with $B,C,D\in M_g(\mathbb Z)$, because $V$ vanishes on $M\times M$. [A1, given, choose, construct]

2.1 A basis change $P\in\operatorname{GL}_{2g}(\mathbb Z)$ replaces $V-tV^T$ by $P^T(V-tV^T)P$ and leaves its determinant unchanged, since $(\det P)^2=1$. Hence it suffices to calculate in the basis of step 1.1. [A1, step 1.1, algebra]

3.1 Put $f(t)=\det(B-tC^T)$. In $V-tV^T$ the upper-left $g\times g$ block is zero, the upper-right block is $B-tC^T$, and the lower-left block is $C-tB^T$. Swapping its two row blocks contributes $(-1)^{g^2}=(-1)^g$ and produces a block-triangular matrix, so $d_V(t)=(-1)^g\det(B-tC^T)\det(C-tB^T)$. Also $t^g f(t^{-1})=\det(tB-C^T)=(-1)^g\det(C-tB^T)$, by factoring $-1$ from each row and transposing. Therefore $d_V(t)=t^g f(t)f(t^{-1})$. The assumption on $V-V^T$ gives $d_V(1)=\pm1$, so the displayed determinant is nonzero. [A1, step 2.1, algebra]

4.1 Since $t^g$ is a unit in $\mathbb Z[t^{\pm1}]$, the exact identity in step 3.1 implies $d_V(t)\doteq f(t)f(t^{-1})$. This proves the factorization, including the rank-zero case of step 1.1. [step 1.1, step 3.1, algebra] ∎
