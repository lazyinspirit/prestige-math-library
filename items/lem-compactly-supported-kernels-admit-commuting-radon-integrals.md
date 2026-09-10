---
id: lem-compactly-supported-kernels-admit-commuting-radon-integrals
kind: lemma
title: Compactly supported kernels admit commuting radon integrals
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-finite-lch-partition-of-unity-near-a-compact-set, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-positive-linear-functionals-on-c-c-are-monotone, thm-compactness-under-continuous-maps, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
proof_strategy: direct
---

## Statement

Assume AC. Let $X,Y$ be LCH spaces and $I,J$ positive real-linear functionals on $C_c(X),C_c(Y)$. For real $F\in C_c(X\times Y)$, the partial integrals are continuous and compactly supported, and $I_xJ_yF(x,y)=J_yI_xF(x,y)$. Complexification gives the same identity for complex kernels.

## Facts & Assumptions

**Given:** $X,Y,I,J,F$ as stated, with AC.

[F1] Support is the closure of the nonzero locus. ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]])

[F2] A finite open cover of a compact set has a nonnegative compactly supported subordinate partition under DC. ([[lem-finite-lch-partition-of-unity-near-a-compact-set]])

[F3] Compact sets admit nonnegative compactly supported cutoffs equal to one under DC. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F4] Positive functionals are monotone. ([[lem-positive-linear-functionals-on-c-c-are-monotone]])

[F5] Projections of a compact set are compact. ([[thm-compactness-under-continuous-maps]])

[F6] AC supplies the inherited cutoff and partition choices. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 Let $K_X,K_Y$ be the projections of $\operatorname{supp}F$. They are compact. If either is empty then $F=0$ and both partial and iterated integrals vanish. Otherwise choose $0\le c_X,c_Y\le1$ in $C_c$, equal to one on these projections. Write $L_Y=\operatorname{supp}c_Y$. All sections are continuous and supported in the respective compact projection. [F1, F3, F5, F6]

2.1 For fixed $y_0$ and $\epsilon>0$, continuity of $F(x,y)-F(x,y_0)$ at each $(x,y_0)$ gives rectangles where its absolute value is $<\epsilon$. Take finitely many covering $K_X$ and intersect their $y$-neighbourhoods. The resulting section difference is bounded by $\epsilon c_X$ everywhere, because it vanishes outside $K_X$. Thus $|I(F_y)-I(F_{y_0})|\le\epsilon I(c_X)$. This proves continuity of the $I$ partial integral (also if $I(c_X)=0$); it vanishes off $K_Y$, so has compact support. Repeating the rectangle argument with $x,y$ interchanged proves the other partial-integral assertion. [F4, step 1.1]

3.1 Take finitely many neighbourhoods $V_j$ with centres $y_j$ covering $L_Y$ and satisfying $\sup_x|F(x,y)-F(x,y_j)|<\epsilon$ on $V_j$. A partition $\psi_j$ subordinate to them sums to one on $L_Y$. Put $H(x,y)=c_Y(y)\sum_j\psi_j(y)F(x,y_j)$. Since $F=c_YF$, on $L_Y$ the convex-combination bound gives $|F-H|\le\epsilon c_Xc_Y$; off $L_Y$ both vanish. This also holds off $K_X$. Each tensor factor is in the appropriate $C_c$. [F2, F6, step 1.1, step 2.1]

4.1 Linearity gives $I_xJ_yH=\sum_j I(F_{y_j})J(c_Y\psi_j)=J_yI_xH$. Applying positivity twice to the error bound in either order yields $|I_xJ_yF-J_yI_xF|\le2\epsilon I(c_X)J(c_Y)$. The cutoff integrals are finite real numbers, so arbitrariness of $\epsilon$ proves equality, including either zero cutoff integral. Real and imaginary parts prove the complex claim. [F4, step 2.1, step 3.1] ∎

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
