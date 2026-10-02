---
id: lem-interior-oscillation-controls-harmonic-gradient
kind: lemma
title: Interior oscillation controls the harmonic gradient
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, cor-harmonic-cauchy-estimates-in-supremum-norm]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, gradient bounds from the mean value normalization"
---

## Statement

Assume Countable Choice and $n\ge2$. Let $u$ be real or complex harmonic on an open set $\Omega\subseteq\mathbb R^n$ with $\overline{B_r(x)}\subset\Omega$, $r>0$. Then
$$|Du(x)|\le C_n\,r^{-1}\operatorname{osc}_{B_r(x)}u,\qquad \operatorname{osc}_{B_r(x)}u:=\sup_{y,z\in B_r(x)}|u(y)-u(z)|.$$
The constant $C_n$ depends only on $n$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, an open set $\Omega$, a harmonic $u$ on $\Omega$, a point $x\in\Omega$ and $r>0$ with $\overline{B_r(x)}\subset\Omega$.

[F1] For harmonic $v$ on an open set containing $\overline{B_r(x)}$ and every multi-index $\alpha$, $|D^\alpha v(x)|\le C'_{n,\alpha}r^{-|\alpha|}\sup_{B_r(x)}|v|$ ([[cor-harmonic-cauchy-estimates-in-supremum-norm]]).

[F2] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F2] and put $v:=u-u(x)$, which is harmonic on $\Omega$ with the same derivatives as $u$, in particular $Dv(x)=Du(x)$; moreover $|v(y)|=|u(y)-u(x)|\le\operatorname{osc}_{B_r(x)}u$ for every $y\in B_r(x)$, so $\sup_{B_r(x)}|v|\le\operatorname{osc}_{B_r(x)}u$. [given, F2, algebra]

2.1 Apply [F1] with $\alpha=e_i$ to the harmonic function $v$ on $B_r(x)$: $|\partial_iu(x)|=|\partial_iv(x)|\le C'_{n,e_i}r^{-1}\sup_{B_r(x)}|v|\le C'_{n,e_i}r^{-1}\operatorname{osc}_{B_r(x)}u$, with a constant depending only on $n$ and the coordinate; taking $C_n:=\max_iC'_{n,e_i}$ gives $|\partial_iu(x)|\le C_nr^{-1}\operatorname{osc}_{B_r(x)}u$ for every $i$. [step 1.1, F1, algebra]

3.1 Summing the coordinate bounds, $|Du(x)|=\bigl(\sum_i|\partial_iu(x)|^2\bigr)^{1/2}\le\sqrt n\max_i|\partial_iu(x)|\le\sqrt n\,C_nr^{-1}\operatorname{osc}_{B_r(x)}u$; absorbing $\sqrt n$ into the constant gives the assertion with a constant depending only on $n$. [step 2.1, algebra] ∎
