---
id: lem-annihilators-are-closed-subspaces
kind: lemma
title: "Annihilators and preannihilators are norm closed"
status: published
origin: pipeline
deps: ["def-annihilator-and-preannihilator", "def-dual-space-of-a-normed-space"]
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
    - title: "Brezis, Functional Analysis, Sobolev Spaces and PDEs, §1.3, notation before Proposition 1.9, p.9"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
proof_strategy: "Intersect kernels of evaluation maps; |f(x)|<=||f||||x|| gives continuity in either variable."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For any normed $X$ and arbitrary $M\subseteq X$, $N\subseteq X^*$, both $M^\perp\subseteq X^*$ and ${}^\perp N\subseteq X$ are norm-closed linear subspaces. Moreover $\overline N^{\|\cdot\|}\subseteq({}^\perp N)^\perp$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F2] From [[def-dual-space-of-a-normed-space]], with its stated hypotheses: Let $X$ be a normed space over the scalar field $\mathbb{K}$, where $\mathbb{K}=\mathbb{R}$ in the literal definition and $\mathbb{K}=\mathbb{C}$ by the convention of rem-real-and-complex-normed-space-convention. The **dual space** of $X$ is $X^*:=\mathcal{B}(X,\mathbb{K}),$ the space of bounded linear functionals on $X$ (def-space-of-bounded-linear-operators). Each $f \in X^*$ is in particular a linear functional in the algebraic sense, so $X^*$ is a subspace of the algebraic dual from def-algebraic-dual-and-linear-functional. The **dual norm** on $X^*$ is the operator norm: $\|f\|_{X^*}:=\|f\| =\sup\{|f(x)|:\|x\| \le 1\}.$

## Proof

1.1 For fixed $x\in X$, evaluation $E_x(f)=f(x)$ is linear and satisfies $|E_x(f)|\le\|x\|\|f\|$, hence has a norm-closed linear kernel. Each $f\in X^*$ likewise has a closed linear kernel in $X$. [F2]

2.1 By definition $M^\perp=\bigcap_{x\in M}\ker E_x$ and ${}^\perp N=\bigcap_{f\in N}\ker f$. Intersections of closed sets are closed and these equations preserve zero, addition, and scalar multiplication. The empty intersection is the whole ambient space, including when $X=\{0\}$. [F1, step 1.1]

3.1 Every $g\in N$ vanishes on ${}^\perp N$. Thus $N\subseteq({}^\perp N)^\perp$; the latter is norm closed by step 2.1, so it contains the norm closure of $N$. [F1, step 2.1] ∎
