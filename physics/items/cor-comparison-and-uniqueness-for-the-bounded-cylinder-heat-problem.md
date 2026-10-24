---
id: cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem
kind: corollary
title: Comparison and uniqueness for the bounded-cylinder heat problem
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-parabolic-cylinder-and-parabolic-boundary
  - thm-weak-parabolic-maximum-principle
  - def-laplacian-of-a-c2-function
  - thm-algebra-of-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§3.1, printed p. 56, Corollary 3.6 (comparison) and §6.3, Theorem 6.17 (uniqueness on a bounded domain)"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed p. 333, Corollary 10.4"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2.5, printed pp. 113–114, Corollaries 3.2.4–3.2.5"
---

## Statement

Let $Q=\Omega\times(0,T]$ be a parabolic cylinder
([[def-parabolic-cylinder-and-parabolic-boundary]]) with $\Omega$ bounded.

(i) If $u,v\in C^{2,1}(\overline Q)$ satisfy
$u_t-\Delta u\le v_t-\Delta v$ in $Q$ and $u\le v$ on $\partial_pQ$, then
$u\le v$ on $\overline Q$.

(ii) If $f\in C(Q)$ and $g\in C(\partial_pQ)$ are real-valued, then there is at
most one $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u=f$ in $Q$ and $u=g$ on
$\partial_pQ$.

## Facts & Assumptions

**Given:** A bounded parabolic cylinder $Q=\Omega\times(0,T]$, functions
$u,v\in C^{2,1}(\overline Q)$, and (for part (ii)) data $f\in C(Q)$ and
$g\in C(\partial_pQ)$.

[F1] The cylinder vocabulary and the class $C^{2,1}(\overline Q)$ are those of
[[def-parabolic-cylinder-and-parabolic-boundary]].

[F2] Weak maximum principle: if $w\in C^{2,1}(\overline Q)$ satisfies
$w_t-\Delta w\le0$ in $Q$, then
$\max_{\overline Q}w=\max_{\partial_pQ}w$
([[thm-weak-parabolic-maximum-principle]]).

[F3] The heat operator is linear on $C^{2,1}(\overline Q)$: differences and
sums of solutions are computed pointwise with
$\Delta=\sum_i\partial_i\partial_i$
([[def-laplacian-of-a-c2-function]], [[thm-algebra-of-derivatives]]).

## Proof

**Given:** A bounded parabolic cylinder $Q$, $u,v\in C^{2,1}(\overline Q)$, and data $f,g$ for part (ii).

1.1 For part (i) put $w:=u-v$; by [F3] $w\in C^{2,1}(\overline Q)$ and $w_t-\Delta w=(u_t-\Delta u)-(v_t-\Delta v)\le0$ in $Q$, while $w=u-v\le0$ on $\partial_pQ$; [F2] therefore gives $\max_{\overline Q}w=\max_{\partial_pQ}w\le0$, that is, $u\le v$ on $\overline Q$. [F1, F2, F3, given]

2.1 For part (ii) let $u_1,u_2\in C^{2,1}(\overline Q)$ both satisfy $u_t-\Delta u=f$ in $Q$ and $u=g$ on $\partial_pQ$, and put $w:=u_1-u_2$; by [F3] $w\in C^{2,1}(\overline Q)$ with $w_t-\Delta w=0$ in $Q$ and $w=0$ on $\partial_pQ$. Applying part (i), proved in step 1.1, to the pair $(w,0)$ gives $w\le0$ on $\overline Q$, and applying it to the pair $(0,w)$ gives $w\ge0$; hence $w\equiv0$ and $u_1=u_2$, so there is at most one such solution. [step 1.1, F2, F3, given]

3.1 Steps 1.1 and 2.1 prove the comparison statement (i) and the uniqueness statement (ii) for the bounded-cylinder Dirichlet problem; no sign of the operator beyond the subsolution direction enters, and no additional hypotheses on $\partial\Omega$ are used. [step 1.1, step 2.1, given] ∎ 