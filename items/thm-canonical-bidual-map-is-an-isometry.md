---
id: thm-canonical-bidual-map-is-an-isometry
kind: theorem
title: "The canonical bidual map is an isometry"
status: draft
origin: pipeline
deps: ["def-canonical-map-into-the-bidual", "thm-dual-norms-every-vector"]
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
    - title: "Bühler–Salamon, Functional Analysis, Lemma 2.68, p.88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Use |f(x)|<=||f||||x|| and a norming functional for x nonzero; handle x=0 separately."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For every normed $X$, the map $J_X:X\to X^{**}$ is linear and $\|J_Xx\|=\|x\|$ for every $x\in X$. In particular it is injective.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-canonical-map-into-the-bidual]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$, define $J_X:X\to X^{**},\qquad (J_Xx)(f)=f(x)\quad(f\in X^*).$ With the dual norm from def-dual-space-of-a-normed-space, evaluation is linear in $f$ and $|(J_Xx)(f)|\le\|x\|\|f\|$, so $J_Xx$ is a bounded functional on $X^*$. The map is canonical and uses no chosen basis or conjugation.

[F2] From [[thm-dual-norms-every-vector]], with its stated hypotheses: Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, and let $x \in X$ be nonzero. Then there exists $f \in X^*$ such that $\|f\|=1 \qquad \text{and} \qquad f(x)=\|x\|.$

## Proof

1.1 For $a,b\in\mathbb K$, evaluation gives $J_X(ax+by)(f)=af(x)+bf(y)$ for every $f$. Also $|f(x)|\le\|f\|\|x\|$ gives $\|J_Xx\|\le\|x\|$. [F1]

2.1 If $x\ne0$, a norming $f$ satisfies $\|f\|=1$ and $f(x)=\|x\|$, so $\|J_Xx\|\ge\|x\|$. For $x=0$ both norms are zero. Equality of norms now forces $J_Xx=0$ only for $x=0$, including when $X$ is the zero space. [F2, step 1.1] ∎
