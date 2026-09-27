---
id: lem-finite-evaluations-separate-from-a-dual-subspace
kind: lemma
title: "Finite evaluations separate a functional from a dual subspace"
status: published
origin: pipeline
deps: ["def-annihilator-and-preannihilator"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Theorem 3.12(ii), pp.125–127, and Corollary 3.26(i), p.130; finite-coordinate adaptation"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Extend a finite basis of E(N), together with E(f0), to a basis of K^n. The coordinate functional h that vanishes on E(N) and sends E(f0) to 1 gives x=sum_j h(e_j)x_j; no infinite-dimensional separation or complex conjugation is needed."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed, $N\le X^*$ a linear subspace, and $x_1,\ldots,x_n\in X$ with $n\ge1$. Define $E(f)=(f(x_1),\ldots,f(x_n))$. If $f_0\in X^*$ satisfies $E(f_0)\notin E(N)$, there is $x\in\operatorname{span}\{x_1,\ldots,x_n\}$ such that $g(x)=0$ for all $g\in N$ and $f_0(x)=1$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

## Proof

1.1 The image $E(N)$ is a linear subspace of $\mathbb K^n$. Choose a finite basis of $E(N)$. Since $E(f_0)\notin E(N)$, append $E(f_0)$ to this independent list and extend it to a basis of $\mathbb K^n$. Define a $\mathbb K$-linear functional $h$ by assigning value $0$ to the chosen basis vectors of $E(N)$ and to the remaining extra vectors, and value $1$ to $E(f_0)$. Then $h|_{E(N)}=0$ and $h(E(f_0))=1$. [given, algebra]

2.1 For the standard coordinate vectors $e_j$, set $a_j=h(e_j)$ and $x=\sum_{j=1}^n a_jx_j$. Expanding in that basis gives $h(E(f))=\sum_ja_jf(x_j)=f(x)$ for every $f\in X^*$. Thus $g(x)=0$ for $g\in N$ and $f_0(x)=1$; in particular $x\in{}^\perp N$. [F1, step 1.1]

3.1 Linear dependence among the $x_j$, or $E(N)=0$, does not affect either step. For $n=1$ the same sum has one term. The hypothesis excludes $f_0=0$ and excludes all $x_j$ being zero; the conclusion never demands $f_0(0)=1$. [step 1.1, step 2.1] ∎
