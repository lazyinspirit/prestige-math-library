---
id: lem-ip-bv-coarea-formula
kind: lemma
title: Coarea formula for spatial BV
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - thm-fatou-lemma
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
  - lem-ip-bv-strict-approximation
  - lem-ip-bv-smooth-coarea
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
    - title: "BV Functions minicourse, Oxford Mathematical Institute, Version 3.0"
      url: "https://www.maths.ox.ac.uk/system/files/attachments/BV_minicourse_Slides_Version3_0.pdf"
proof_strategy: direct
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let $u\in BV(\Omega)$, and for $t>0$ set $E_t^+:=\{x\in\Omega:u(x)>t\}$ while for $t<0$ set $E_t^-:=\{x\in\Omega:u(x)<t\}$. Then for almost every applicable $t$ these sets have finite perimeter relative to $\Omega$, and $$TV(u;\Omega)=\int_0^\infty P(E_t^+;\Omega)\,dt+\int_{-\infty}^0P(E_t^-;\Omega)\,dt.$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The spatial BV and relative-perimeter definitions.]]

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, and $u\in BV(\Omega)$.

[A1] Countable Choice is the assigned axiom strength for this item. ([[def-countable-choice]])

[F1] Strict smooth approximation and the smooth-level coarea calculation are available under Countable Choice. ([[lem-ip-bv-strict-approximation]], [[lem-ip-bv-smooth-coarea]])

[F2] Under Countable Choice, finite distributional test variation of an arbitrary real $L^1$ function is equivalent to membership in $BV$, with equality to its total variation. In particular this implication and lower semicontinuity apply to limits of level indicators. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F3] Tonelli, including the completed Euclidean product, permits integrating nonnegative level-indicator errors and their countable sums. Fatou and monotone convergence hold for these integrals. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-fatou-lemma]], [[thm-monotone-convergence-for-the-integral]])

## Proof

**Given:** The hypotheses in the Statement.

1.1 For any real $f\in L^1(\Omega)$, define its extended test variation $V(f)$ as the supremum of $\int f\operatorname{div}\varphi$ over smooth compactly supported vector fields with $|\varphi|\le1$. It is a lower semicontinuous extended nonnegative function on $L^1$: each test integral is a continuous linear functional and $\{f:V(f)>a\}$ is the union of its open superlevel sets. By [F2], $V(f)<\infty$ is equivalent to $f\in BV$, in which case $V(f)=TV(f;\Omega)$. For $t>0$ the indicator $\chi_{\{f>t\}}$ lies in $L^1$, since its norm is at most $\|f\|_1/t$, and it is right continuous as an $L^1$-valued function of $t$: if $t_j\downarrow t>0$, its indicators increase to $\chi_{\{f>t\}}$ and their errors tend to zero by monotone convergence. Dyadic right-step approximations therefore make this map Borel measurable. For $t<0$, $t\mapsto\chi_{\{f<t\}}$ is similarly left continuous and Borel. Composition with the lower semicontinuous $V$ shows that both extended level-variation functions are measurable. [A1, F2, F3, given, construct]

2.1 By [F1], take smooth strict approximants $u_j$ with $\|u_j-u\|_1<2^{-j}$ and $\int|\nabla u_j|\to TV(u;\Omega)$, passing to a subsequence by least indices if needed. For real numbers $a,b$, the total length of the positive and negative levels at which their signed superlevel or sublevel indicators differ is $|a-b|$. Hence [F3] gives $$\int_0^\infty\|\chi_{\{u_j>t\}}-\chi_{\{u>t\}}\|_1\,dt+\int_{-\infty}^0\|\chi_{\{u_j<t\}}-\chi_{\{u<t\}}\|_1\,dt=\|u_j-u\|_1.$$ Sum over $j$ and apply [F3]: for almost every applicable nonzero level, the indicator errors are summable, and in particular the level indicators converge in $L^1$. The lower semicontinuity from step 1.1 gives $V(\chi_{E_t^\pm})\le\liminf_jV(\chi_{\{u_j\gtrless t\}})$ at those levels. Fatou and the smooth coarea identity [F1] consequently give $$\int_0^\infty V(\chi_{E_t^+})\,dt+\int_{-\infty}^0V(\chi_{E_t^-})\,dt\le\liminf_j\int_\Omega|\nabla u_j|\,dx=TV(u;\Omega).$$ The integral is finite, so its integrands are finite almost everywhere; [F2] then proves the stated almost-everywhere finite-perimeter assertion. [A1, F1, F2, F3, step 1.1, choose, algebra]

3.1 For any admissible smooth test field $\varphi$, signed layer cake gives $u(x)=\int_0^\infty\chi_{E_t^+}(x)\,dt-\int_{-\infty}^0\chi_{E_t^-}(x)\,dt$ almost everywhere. The absolute integral against $\operatorname{div}\varphi$ is bounded by $\|\operatorname{div}\varphi\|_\infty\|u\|_1$, so iterated integration is valid. Each level test integral in absolute value is at most its extended variation, using also $-\varphi$ in step 1.1. Therefore $\int u\operatorname{div}\varphi$ is at most the sum of the two perimeter integrals. Take the supremum over $\varphi$ and apply [F2] to $u$ to obtain the reverse of the inequality in step 2.1. Equality follows. Changing the representative of $u$ changes each level set only by a spatial null set, so all conclusions concern the given $L^1$ class. [F2, F3, step 1.1, step 2.1, algebra] ∎ 