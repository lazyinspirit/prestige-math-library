---
id: "thm-hausdorff-measure-under-lipschitz-maps"
kind: "theorem"
title: "Lipschitz maps control Hausdorff measure"
deps: ["def-hausdorff-measure", "prop-zero-dimensional-hausdorff-measure-counts", "def-lipschitz-holder-contraction"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin, Measure Theory, 264G,264Yj(i)
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
    - title: Falconer, The Geometry of Fractal Sets, Lemma 1.8
      url: https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. Let $f:D\subseteq X\to Y$ be an $L$-Lipschitz map between metric spaces and $A\subseteq D$. For finite $s\ge0$ and $L>0$,

$$\mathcal H^s(f(A))\le L^s\mathcal H^s(A).$$

If $L=0$, the image is empty or a singleton: $\mathcal H^s(f(A))=0$ for $s>0$ and $\mathcal H^0(f(A))\le\mathcal H^0(A)$. No product $0\cdot\infty$ is used.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Hausdorff outer values come from arbitrary nonempty covers and small-scale suprema. [[def-hausdorff-measure]]

[F2] Under the standing Countable Choice hypothesis, $\mathcal H^0$ is counting measure. [[prop-zero-dimensional-hausdorff-measure-counts]]

[F3] $L$-Lipschitz means $d_Y(f(x),f(y))\le Ld_X(x,y)$ for all points in the domain. [[def-lipschitz-holder-contraction]]

## Proof

1.1 For $L>0$, replace every member $U$ of a $\delta$-cover of $A$ by $f(U\cap D)$ and discard empty images. The image diameter is at most $L\operatorname{diam}U$. For positive $s$ its cost is at most $L^s$ times the old cost; for $s=0$ each retained member still costs one. [F1, F3]

2.1 Infimising gives $\mathcal H^s_{L\delta}(f(A))\le L^s\mathcal H^s_\delta(A)$; if the right scale infimum is infinite the inequality is automatic. Let $\delta$ tend to zero to obtain the assertion, since $L$ is finite and positive. [F1, step 1.1]

3.1 For $L=0$, any two image points have distance zero, so a nonempty image is a singleton. Its singleton cover costs zero for $s>0$. For $s=0$, image cardinality cannot exceed domain cardinality, whether finite or infinite. Empty images have zero measure at every exponent. [F1, F2, F3] ∎
