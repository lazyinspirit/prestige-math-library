---
id: thm-hilbert-projection-variational-characterization
kind: theorem
title: Variational characterisation of the nearest point
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-projection-onto-a-nonempty-closed-convex-set, def-relative-normed-convexity-and-separation, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 1.44, pp.40–41"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 178"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a real or complex Hilbert space, let $C\subseteq H$ be closed and convex with $x\in H$, and let $p\in C$. Then $p$ is the nearest point of $C$ to $x$ if and only if

$$\operatorname{Re}\langle x-p,\ y-p\rangle\le0 \qquad \text{for every } y\in C .$$

In particular, for the nearest point the inequality holds, and conversely any $p\in C$ satisfying the inequality is nearest.

## Facts & Assumptions

[A1] $C$ is convex: $p+t(y-p)\in C$ for $y\in C$ and $0\le t\le1$; and $p$ is nearest exactly when $\|x-p\|\le\|x-y\|$ for every $y\in C$ ([[def-relative-normed-convexity-and-separation]]).

[A2] The pairing is linear in the first argument and conjugate-linear in the second, with $\|v\|^2=\langle v,v\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A3] Countable Choice is the selection principle consumed by the existence theorem for nearest points ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a closed convex set $C$, a vector $x$ and a point $p\in C$.

1.1 Suppose first that $p$ is nearest, and let $y\in C$; for every $t$ with $0<t\le1$ the convexity hypothesis gives $p+t(y-p)\in C$, so $\|x-p\|^2\le\|x-p-t(y-p)\|^2=\|x-p\|^2-2t\operatorname{Re}\langle x-p,y-p\rangle+t^2\|y-p\|^2$, whence $2\operatorname{Re}\langle x-p,y-p\rangle\le t\|y-p\|^2$, and if $\operatorname{Re}\langle x-p,y-p\rangle$ were positive the choice $t<\min\{1,\ 2\operatorname{Re}\langle x-p,y-p\rangle/(\|y-p\|^2+1)\}$ would make the right-hand side strictly smaller than the left, a contradiction; hence $\operatorname{Re}\langle x-p,y-p\rangle\le0$. [A1, A2, algebra]

1.2 Conversely suppose $\operatorname{Re}\langle x-p,y-p\rangle\le0$ for every $y\in C$; then $\|x-y\|^2=\|(x-p)+(p-y)\|^2=\|x-p\|^2+2\operatorname{Re}\langle x-p,p-y\rangle+\|p-y\|^2\ge\|x-p\|^2$, because $\operatorname{Re}\langle x-p,p-y\rangle=-\operatorname{Re}\langle x-p,y-p\rangle\ge0$. [A1, A2, algebra]

2.1 Steps 1.1 and 1.2 prove both implications of the stated equivalence; the Countable Choice hypothesis is used only to invoke the existence theorem for nearest points ([[thm-projection-onto-a-nonempty-closed-convex-set]]) when the nearest point is not supplied, while the equivalence itself is choice-free for a given $p$. [step 1.1, step 1.2, A3] ∎
