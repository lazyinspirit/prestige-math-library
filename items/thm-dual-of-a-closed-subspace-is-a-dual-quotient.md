---
id: thm-dual-of-a-closed-subspace-is-a-dual-quotient
kind: theorem
title: "The dual of a closed subspace is a dual quotient"
status: draft
origin: pipeline
deps: ["def-annihilator-and-preannihilator", "lem-annihilators-are-closed-subspaces", "thm-universal-property-of-the-normed-quotient", "thm-norm-preserving-extension-from-any-subspace"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 2.57(i), pp.84–85"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Restrictions of representatives agree; kernel is M-perp. HB supplies a norm-preserving extension, minimizing norm in each coset. Thus surjectivity and isometry are separate verified claims."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed and $M\le X$ closed. Restriction $R:X^*\to M^*$ induces a linear isometric bijection $$\widetilde R:X^*/M^\perp\longrightarrow M^*,\qquad f+M^\perp\longmapsto f|_M.$$ Also $\|R\|\le1$; its norm is $1$ when $M\ne\{0\}$ and $0$ when $M=\{0\}$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F2] From [[lem-annihilators-are-closed-subspaces]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For any normed $X$ and arbitrary $M\subseteq X$, $N\subseteq X^*$, both $M^\perp\subseteq X^*$ and ${}^\perp N\subseteq X$ are norm-closed linear subspaces. Moreover $\overline N^{\|\cdot\|}\subseteq({}^\perp N)^\perp$.

[F3] From [[thm-universal-property-of-the-normed-quotient]], with its stated hypotheses: Let $X$ and $Y$ be normed spaces over the same scalar field, let $M \le X$ be a closed linear subspace, let $q:X\to X/M$ be the quotient map, and let $T:X\to Y$ be a bounded linear operator with $M \subseteq \ker T$. Then there is a unique bounded linear operator $\overline T:X/M\to Y$ such that $\overline T \circ q = T,$ and moreover $\|\overline T\| = \|T\|$.

[F4] From [[thm-norm-preserving-extension-from-any-subspace]], with its stated hypotheses: Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, let $M \subseteq X$ be a linear subspace, and let $f_0:M \to \mathbb{R}$ or $f_0:M \to \mathbb{C}$ be a bounded linear functional over the ambient scalar field. Then there exists a bounded linear extension $F$ of $f_0$ to all of $X$ such that $\|F\|=\|f_0\|$. No closedness hypothesis on $M$ is needed.

## Proof

1.1 The inequality $\|f|_M\|\le\|f\|$ makes restriction bounded. Its kernel is $M^\perp$, which is closed. Thus equal cosets have equal restrictions, and the quotient universal property gives a bounded linear induced map; the kernel calculation makes it injective. [F1, F2, F3]

2.1 For $h\in M^*$, norm-preserving extension gives $f\in X^*$ with $f|_M=h$ and $\|f\|=\|h\|$, proving surjectivity. Every other representative $f+a$, $a\in M^\perp$, restricts to $h$, so $\|f+a\|\ge\|h\|$. Taking the infimum and using this extension proves $\|f+M^\perp\|=\|h\|$. [F4, step 1.1]

3.1 If $M\ne\{0\}$, fix $m\in M\setminus\{0\}$. The functional $\lambda m\mapsto\lambda\|m\|$ on its line has norm one. Extend first to $M$ and then to $X$ by norm-preserving extension; its restriction and extension both have norm one, so $\|R\|\ge1$. If $M=\{0\}$, $R=0$. For $M=X$ the induced map is the identity, including the zero ambient space. [F4, step 1.1, step 2.1] ∎
