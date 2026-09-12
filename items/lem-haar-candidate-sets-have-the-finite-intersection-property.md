---
id: lem-haar-candidate-sets-have-the-finite-intersection-property
kind: lemma
title: Haar candidate sets have the finite intersection property
deps: [lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit, lem-haar-covering-functionals-are-asymptotically-additive, thm-tychonoff, thm-compact-iff-fip, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Statement

Assume AC and fix $0\ne f_0\in C_c(G)^+$. Put $\mathcal P=\prod_{0\ne f\in C_c(G)^+}[1/(f_0:f),(f:f_0)]$. For each open identity neighbourhood $U$, let $E_U$ be the closure in $\mathcal P$ of the vectors $I_\phi$ with $0\ne\phi\ge0$ and $\operatorname{supp}\phi\subseteq U$. These closed sets are nonempty and have the finite intersection property, and $\bigcap_U E_U\ne\varnothing$. Every common point, extended by value zero at $0$, is additive, positively homogeneous, strictly positive on nonzero nonnegative functions, normalized at $f_0$, and left invariant.

## Facts & Assumptions

**Given:** AC, $f_0$, the product and closed candidate sets as stated.

[F1] Approximant vectors obey closed coordinate bounds and the exact normalization, homogeneity and invariance equations. ([[lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit]])

[F2] All sufficiently small-support approximants have arbitrarily small additivity error. ([[lem-haar-covering-functionals-are-asymptotically-additive]])

[F3] Under AC a product of compact spaces is compact. ([[thm-tychonoff]])

[F4] Closed sets with the FIP in a compact space have a common point. ([[thm-compact-iff-fip]])

[F5] Cutoffs at a compact singleton exist under DC. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F6] AC is assumed for the compact product and inherited cutoffs. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 For any $U$, a cutoff $v$ at $\{e\}\subseteq U$ has $v(e)=1$, $0\le v\le1_U$ and compact support. Set $\phi=(v-1/2)^+$. Then $\phi(e)=1/2$ and its support lies in the compact set $\{v\ge1/2\}\subseteq U$. Thus $E_U$ contains an approximant. The coordinate intervals are nonempty because they contain every such vector, and they are finite closed real intervals. [F1, F5, F6]

2.1 For finitely many neighbourhoods $U_1,\ldots,U_n$, their intersection $W$ is an identity neighbourhood, and $E_W\subseteq\bigcap_j E_{U_j}$. Step 1.1 makes this intersection nonempty. For $n=0$ the intersection is $\mathcal P$, also nonempty by an approximant. The compact real intervals and AC give compactness of $\mathcal P$, so the closed FIP theorem supplies a common point $T$. [F3, F4, F6, step 1.1]

3.1 The closed equations in [F1] hold throughout each $E_U$, hence for $T$, and its strictly positive coordinate lower bounds persist. Set $T(0)=0$. For $f,g\ge0$ and $\epsilon>0$, [F2] gives $U$ such that $0\le I_\phi(f)+I_\phi(g)-I_\phi(f+g)<\epsilon$ on its approximants. This finite-coordinate condition with upper bound $\le\epsilon$ is closed, so it holds for $T\in E_U$. An error in $[0,\epsilon]$ for every positive $\epsilon$ is zero. Thus $T$ is additive; when an argument is zero this is already the assigned zero value. [F1, F2, step 2.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
