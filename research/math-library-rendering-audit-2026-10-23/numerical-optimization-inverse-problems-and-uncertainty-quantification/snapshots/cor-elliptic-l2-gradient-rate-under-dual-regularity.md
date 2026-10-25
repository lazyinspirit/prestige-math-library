---
id: cor-elliptic-l2-gradient-rate-under-dual-regularity
kind: corollary
title: An elliptic reduced-gradient L2 rate follows under dual approximation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [thm-elliptic-adjoint-reduced-gradient, thm-elliptic-fe-gradient-error-in-energy-norms, cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the Aubin–Nitsche Galerkin estimate; no unrestricted choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.6 and 3.2"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Christian Clason, Introduction to Finite Element Methods, complete lecture notes, §1.2"
      url: "https://arxiv.org/pdf/1709.08618v2.pdf"
---

## Statement

Assume Countable Choice and the Galerkin and adjoint hypotheses of [[thm-elliptic-fe-gradient-error-in-energy-norms]]. Suppose the adjoint regularity and dual approximation assumptions of [[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]] hold separately for the state and adjoint equations, giving
$$\|u-u_h\|_{L^2}\le C_u h^{r+s},\qquad \|p-p_h\|_{L^2}\le C_p h^{r+s}$$
for $0<h\le1$, $r\ge1$, and $s\in(0,1]$. Assume the parameter derivative operators satisfy
$$|\ell_\theta'[\eta](v)|\le M_\ell^0\|\eta\|_2\|v\|_{L^2},\qquad |a_\theta'[\eta](v,w)|\le M_a^0\|\eta\|_2\|v\|_{L^2}\|w\|_{L^2}.$$
Assume the discrete derivative maps in [[thm-elliptic-fe-gradient-error-in-energy-norms]] have compatible $L^2$ extensions and constants $C_J,C_\ell,C_a$ independent of $h$ give, for every $\|\eta\|_2\le1$, a direct-objective derivative defect at most $C_Jh^{r+s}$, an $L^2$-dual load-derivative defect at most $C_\ell h^{r+s}$, and a bilinear derivative defect at most $C_ah^{r+s}\|v\|_{L^2}\|w\|_{L^2}$. Then the reduced-gradient error is $O(h^{r+s})$. This rate requires those extra $L^2$-bounded parameter derivative maps; the energy-norm result alone does not imply it.

## Facts & Assumptions

**Given:** The energy-norm reduced-gradient setting, the stated dual regularity bounds for the state and adjoint, Countable Choice, and the displayed $L^2$ derivative bounds.

[F1] The Aubin–Nitsche estimate gives an $h^{r+s}$ $L^2$ error under its stated primal and dual approximation hypotheses ([[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]]).

[F2] The energy-norm reduced-gradient bound separates state error, adjoint error, and derivative-data defects ([[thm-elliptic-fe-gradient-error-in-energy-norms]]).

[A1] Countable Choice ([[def-countable-choice]]) and the dual regularity and interpolation hypotheses hold separately for the continuous and adjoint Galerkin equations, with the constants displayed in the Statement; derivative-data and direct-objective defects are $O(h^{r+s})$ in the stated $L^2$ operator norms.

## Proof

1.1 Apply [F1] to the state equation and to the adjoint equation with the transposed coercive form. Under [A1], this yields the two displayed $L^2$ error bounds. Countable Choice is required by [F1]. [F1, A1, given]

2.1 The parameter-derivative bounds in the Statement give $|\ell_\theta'[\eta](p_h-p)|\le M_\ell^0\|\eta\|_2 C_p h^{r+s}$ and, by adding and subtracting $a_\theta'[\eta](u,p_h)$, $|a_\theta'[\eta](u_h,p_h)-a_\theta'[\eta](u,p)|\le M_a^0\|\eta\|_2\bigl(C_u h^{r+s}\|p_h\|_{L^2}+\|u\|_{L^2}C_p h^{r+s}\bigr)$. The $L^2$ norms of $u$ and $p_h$ are bounded by the stated state bounds and $\|p_h\|_{L^2}\le\|p\|_{L^2}+C_ph^{r+s}$. [given, step 1.1, algebra]

3.1 Apply the exact gradient subtraction in [F2]. The direct-objective and derivative-data defects contribute their assumed $O(h^{r+s})$ bounds; step 2.1 bounds the state- and adjoint-dependent terms by constants times $h^{r+s}$. Taking the supremum over $\|\eta\|_2\le1$ proves the asserted rate. If the $L^2$ derivative bounds or either dual approximation hypothesis fails, this rate has not been proved. [A1, F2, step 2.1] ∎

