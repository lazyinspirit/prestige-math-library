---
id: lem-finite-evaluations-separate-from-a-dual-subspace
kind: lemma
title: "Finite evaluations separate a functional from a dual subspace"
status: published
origin: pipeline
deps: ["def-annihilator-and-preannihilator", "cor-finite-dimensional-subspaces-are-closed", "thm-geometric-hahn-banach-for-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Theorem 3.12(ii), pp.125–127, and Corollary 3.26(i), p.130; finite-coordinate adaptation using Theorem 2.53, pp.82–83"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "E(N) is a linear subspace of K^n, hence finite dimensional and closed. Apply geometric Hahn–Banach in K^n to E(N) and E(f0), obtaining a K-linear h with h|E(N)=0 and h(E(f0))=1. Put a_j=h(e_j) and x=sum_j a_j x_j. Expansion in the standard coordinate basis gives h(E(f))=sum_j a_j f(x_j)=f(x); no complex conjugates occur. This is a finite-dimensional implementation of the source separation step, not an appeal to unplanned locally convex separation."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed, $N\le X^*$ a linear subspace, and $x_1,\ldots,x_n\in X$ with $n\ge1$. Define $E(f)=(f(x_1),\ldots,f(x_n))$. If $f_0\in X^*$ satisfies $E(f_0)\notin E(N)$, there is $x\in\operatorname{span}\{x_1,\ldots,x_n\}$ such that $g(x)=0$ for all $g\in N$ and $f_0(x)=1$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F2] From [[cor-finite-dimensional-subspaces-are-closed]], with its stated hypotheses: Let $V$ be a normed space and let $W\subseteq V$ be a normed subspace. If $W$ admits an ordered basis of finite length, then $W$ is closed in $V$.

[F3] From [[thm-geometric-hahn-banach-for-subspaces]], with its stated hypotheses: For a linear subspace $M\subseteq X$ and $x\notin\overline M$, there is $f\in M^\perp$ with $f(x)=1$.

## Proof

1.1 The image $E(N)$ is a linear subspace of the finite-dimensional normed space $\mathbb K^n$, hence admits a finite basis and is closed. Geometric Hahn–Banach applied to $E(f_0)\notin E(N)$ supplies a linear functional $h$ on $\mathbb K^n$ with $h|_{E(N)}=0$ and $h(E(f_0))=1$. [F2, F3]

2.1 For the standard coordinate vectors $e_j$, set $a_j=h(e_j)$ and $x=\sum_{j=1}^n a_jx_j$. Expanding in that basis gives $h(E(f))=\sum_ja_jf(x_j)=f(x)$ for every $f\in X^*$. Thus $g(x)=0$ for $g\in N$ and $f_0(x)=1$; in particular $x\in{}^\perp N$. [F1, step 1.1]

3.1 Linear dependence among the $x_j$, or $E(N)=0$, does not affect either step. For $n=1$ the same sum has one term. The hypothesis excludes $f_0=0$ and excludes all $x_j$ being zero; the conclusion never demands $f_0(0)=1$. [step 1.1, step 2.1] ∎
