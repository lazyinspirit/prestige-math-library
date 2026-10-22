---
id: lem-ip-tv-l2-coarea-formula
kind: lemma
title: Coarea for finite-variation L² functions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-tv-functional-on-l2-distributional-variation
  - lem-ip-tv-l2-cutoff-approximation
  - lem-ip-bv-coarea-formula
  - lem-ip-bv-test-field-characterization-and-lsc
  - def-countable-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-fatou-lemma
  - thm-monotone-convergence-for-the-integral
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §3.1"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§3.1, coarea and finite-perimeter level sets for L² solutions"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, §5.3"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§5.3, full coarea proof for globally integrable BV functions"
---

## Statement

Assume Countable Choice. Let $u\in L^2(\mathbb R^2;\mathbb R)$ satisfy $TV_2(u;\mathbb R^2)<\infty$. For $t>0$ set $E_t^+=\{x:u(x)>t\}$, and for $t<0$ set $E_t^-=\{x:u(x)<t\}$. Each set has finite area, almost every applicable level set has finite perimeter, and
$$TV_2(u;\mathbb R^2)=\int_0^\infty P(E_t^+;\mathbb R^2)\,dt+\int_{-\infty}^0P(E_t^-;\mathbb R^2)\,dt.$$

## Statement references

[[def-ip-tv-functional-on-l2-distributional-variation|The L² distributional-TV functional is the compactly supported test-field supremum.]]

[[def-ip-spatial-bv-and-distributional-tv|Finite perimeter is the TV of the level-set indicator.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, §3.1](https://arxiv.org/pdf/1711.06495)

[Terra, *Introduction to Geometric Measure Theory*, §5.3](https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf)

## Facts & Assumptions

**Given:** Countable Choice and $u\in L^2(\mathbb R^2;\mathbb R)$ with $TV_2(u;\mathbb R^2)<\infty$.

[A1] Countable Choice is assumed for the BV coarea and test-field representation suppliers. ([[def-countable-choice]])

[F1] [[lem-ip-tv-l2-cutoff-approximation]]: there are compactly supported $v_R\in BV(\mathbb R^2)\cap L^1$ with $v_R\to u$ in $L^2$ and $\limsup_RTV(v_R)\le TV_2(u;\mathbb R^2)$.

[F2] [[lem-ip-bv-coarea-formula]]: for a globally integrable BV function, the positive superlevel and negative sublevel perimeters integrate to its total variation.

[F3] [[lem-ip-bv-test-field-characterization-and-lsc]]: for an $L^1$ function, the extended test-field variation is lower semicontinuous in $L^1$; if finite, it equals the perimeter/TV defined by the distributional derivative.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-tonelli-and-fubini-for-completed-product-measures]]: nonnegative level integrals may be interchanged, and absolutely integrable level/spatial functions satisfy Fubini.

[F5] [[thm-fatou-lemma]] and [[thm-monotone-convergence-for-the-integral]]: Fatou bounds the limiting perimeter integrals, and increasing truncations of nonnegative level integrals converge to the full integral.

## Proof

1.1 By [F1], choose compactly supported $v_R\in BV(\mathbb R^2)\cap L^1$ with $v_R\to u$ in $L^2$ and $\limsup_RTV(v_R)\le TV_2(u;\mathbb R^2)$. For each fixed $t\ne0$, $\chi_{E_{R,t}}\to\chi_{E_t}$ in $L^1$: the symmetric difference is outside $B(0,R)$ for the cutoffs constructed in [F1] and contained in $\{|u|>|t|\}$, whose tail measure is at most $|t|^{-2}\int_{\mathbb R^2\setminus B(0,R)}|u|^2$. Here $E_{R,t}$ and $E_t$ are the corresponding signed superlevel or sublevel sets. [F1, given, construct]

2.1 For $t>0$, $|E_t^+|\le t^{-2}\|u\|_2^2$, and for $t<0$, $|E_t^-|\le |t|^{-2}\|u\|_2^2$. The indicator-valued maps are Borel on each half-line: on positive levels they are right-continuous in $L^1$ when $t_j\downarrow t>0$, by continuity from below of measure; on negative levels they are left-continuous when $t_j\uparrow t<0$. Composing with the lower semicontinuous extended variation in [F3] makes their perimeter functions measurable. Lower semicontinuity in [F3] and step 1.1 give $P(E_t^\pm;\mathbb R^2)\le\liminf_{R\to\infty}P(E_{R,t}^\pm;\mathbb R^2)$ for every applicable nonzero $t$. Fatou's lemma [F5], the BV coarea identity [F2], and the variation bound in step 1.1 imply, for every $\varepsilon>0$, $$\int_\varepsilon^\infty P(E_t^+;\mathbb R^2)\,dt+\int_{-\infty}^{-\varepsilon}P(E_t^-;\mathbb R^2)\,dt\le TV_2(u;\mathbb R^2).$$ Letting $\varepsilon\downarrow0$ and using monotone convergence [F5] proves that the full perimeter sum is at most $TV_2(u;\mathbb R^2)$; its finiteness and [F3] give finite perimeter for almost every applicable level. [A1, F2, F3, F5, step 1.1, algebra]

3.1 Let $\varphi\in C_c^\infty(\mathbb R^2;\mathbb R^2)$ with $\|\varphi\|_\infty\le1$. The signed layer-cake identity is $u(x)=\int_0^\infty\chi_{E_t^+}(x)\,dt-\int_{-\infty}^0\chi_{E_t^-}(x)\,dt$. On the compact support of $\operatorname{div}\varphi$, $\int |u|\,|\operatorname{div}\varphi|<\infty$, so Tonelli and Fubini [F4] permit integration of this identity against $\operatorname{div}\varphi$. At almost every level the absolute value of the resulting indicator test integral is at most its perimeter by [F3]. Therefore $\int u\operatorname{div}\varphi$ is at most the perimeter sum in step 2.1. Taking the supremum over admissible $\varphi$ gives $TV_2(u;\mathbb R^2)$ at most that sum, which together with step 2.1 proves equality. [F1, F3, F4, step 2.1, given, algebra] ∎

