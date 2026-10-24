---
id: "thm-transpose-is-weak-star-to-weak-star-continuous"
kind: "theorem"
title: "Transpose is weak star to weak star continuous"
deps: ["thm-continuous-dual-of-a-weak-star-topology", "cor-relative-hahn-banach-dual-norming", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]). For normed real or complex spaces $X,Y$, a bounded scalar-linear $T:X\to Y$ has weak-star continuous transpose $T^*:Y^*\to X^*$, $(T^*f)(x)=f(Tx)$. Conversely every bounded weak-star continuous scalar-linear $S:Y^*\to X^*$ is $T^*$ for a unique bounded scalar-linear $T:X\to Y$. No completeness or reflexivity is required. The forward implication is choice-free.

## Facts & Assumptions

[F1] Under HB every weak-star continuous scalar-linear functional on $Y^*$ is evaluation at a unique point of $Y$ ([[thm-continuous-dual-of-a-weak-star-topology]]).

[F2] Under HB the norm is recovered as the supremum of absolute values under dual unit-ball functionals, which separate points ([[cor-relative-hahn-banach-dual-norming]]).

## Proof

**Given:** the spaces and the maps of the respective assertions; HB for the converse.

1.1 For bounded $T$, $|(T^*f)(x)|=|f(Tx)|\le\|f\|\|T\|\|x\|$. Thus $T^*f\in X^*$ and $T^*$ is bounded and scalar-linear. For every $x\in X$, the composite of $T^*$ with evaluation at $x$ is evaluation at $Tx$. Its inverse scalar-open sets are weak-star open by the defining evaluation topology in F1. Thus $T^*$ is weak-star continuous. [given, F1, algebra]

2.1 For the converse, fix $x\in X$. The map $f\mapsto(Sf)(x)$ is weak-star continuous and scalar-linear, since $S$ is and evaluation at $x$ is. F1 gives a unique point $Tx\in Y$ with $f(Tx)=(Sf)(x)$ for all $f\in Y^*$. Unique specification defines $T$ on all $X$ without choosing from a family of non-singleton sets. For scalars $a,b$, evaluation gives $f(T(ax+bz))=(Sf)(ax+bz)=a f(Tx)+b f(Tz)$ for every $f$. Point separation makes $T(ax+bz)=aTx+bTz$. [step 1.1, F1, F2, given]

3.1 By F2 and boundedness of $S$, $\|Tx\|=\sup_{\|f\|\le1}|(Sf)(x)|\le\|S\|\|x\|$. Hence $T$ is bounded, and its defining identity says $S=T^*$. Any other preadjoint has the same evaluations at each $x$ and therefore equals $T$ by point separation. Zero spaces and $S=0$ satisfy the same formulas, with $T=0$. $\square$ [step 2.1, F2, algebra]
