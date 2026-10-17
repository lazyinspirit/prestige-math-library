---
id: thm-mgrit-contraction-implies-residual-and-error-decay
kind: theorem
title: "A verified MGRIT error-matrix contraction controls error and residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-linear-all-at-once-time-operator
  - alg-mgrit-two-level-cycle
  - lem-mgrit-exact-coarse-elimination
  - def-norm-and-normed-space
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1–2.4, PDF pp. 3–7: all-at-once system and declared two-level error operator."
    - title: "V. A. Dobrev, Tz. Kolev, N. A. Petersson, and J. B. Schroder, Two-Level Convergence Theory for Multigrid Reduction in Time"
      url: "https://www.unm.edu/~jbschroder/docs/DoKoPeSc2015.pdf"
      locator: "§3.1–3.2, PDF pp. 7–10, Theorem 3.3 and proof: a stated error-matrix norm bound gives contraction under the paper's additional diagonalization and stability hypotheses."
    - title: "Ben S. Southworth, Necessary Conditions and Tight Two-Level Convergence Bounds for Parareal and Multigrid Reduction in Time"
      url: "https://arxiv.org/pdf/1810.07292"
      locator: "§2.1–2.2: the theorem's more general linear convergence assumptions and the temporal approximation property."
---

## Statement

Let $A_tu_*=b$ be the fine-grid system from [[def-linear-all-at-once-time-operator]]. By [[lem-mgrit-exact-coarse-elimination]], $A_t$ is invertible. Let $E$ be the exact error matrix for one fixed two-level cycle in [[alg-mgrit-two-level-cycle]]. Choose a real-valued norm $\|\cdot\|$ on $(\mathbb R^d)^N$ and define its induced operator norm by $\|T\|=\sup_{v\ne0}\|Tv\|/\|v\|$. Assume $\|A_t\|$ and $\|A_t^{-1}\|$ are finite for this norm. If a direct calculation or other proof establishes $\|E\|\le q<1$, then after $r\ge0$ cycles the error satisfies $\|e^{(r)}\|\le q^r\|e^{(0)}\|$, with the convention $q^0=1$. The residual $s^{(r)}=b-A_tu^{(r)}=A_te^{(r)}$ obeys $\|s^{(r)}\|\le\|A_t\|q^r\|e^{(0)}\|$, and for every error/residual pair,
$$\|s\|\le\|A_t\|\|e\|,\qquad \|e\|\le\|A_t^{-1}\|\|s\|.$$

The contraction hypothesis is a property to prove for the declared operators, norm, and cycle. The MGRIT name alone supplies no such bound, and this theorem makes no multilevel convergence claim.

## Facts & Assumptions

**Given:** A finite linear time system, the declared exact two-level cycle and a chosen product-space norm.

[F1] [[alg-mgrit-two-level-cycle]]: one cycle has error matrix $E=S_{\rm post}(I-PA_c^{-1}RA_t)S_{\rm pre}$.

[F2] [[lem-mgrit-exact-coarse-elimination]]: the fine-grid operator $A_t$ is invertible.

[F3] [[def-norm-and-normed-space]]: the chosen vector norm separates zero: $\|v\|=0$ if and only if $v=0$.

[A1] The directly calculated or proved induced norm satisfies $\|E\|\le q<1$.

[A2] The induced norms $\|A_t\|$ and $\|A_t^{-1}\|$ are finite for the chosen product-space norm.

## Proof

1.1 By [F1], one cycle sends the current error to $e^{(r+1)}=Ee^{(r)}$. [given, F1, algebra]

2.1 At $r=0$ the claimed inequality is equality. If the bound holds at $r$ and $e^{(r)}=0$, [F3] gives $Ee^{(r)}=0$ and the next bound follows. If $e^{(r)}\ne0$, the induced-norm definition in the Statement and [A1] give $\|e^{(r+1)}\|=\|Ee^{(r)}\|\le\|E\|\,\|e^{(r)}\|\le q^{r+1}\|e^{(0)}\|$. Induction proves the error bound for every $r\ge0$. [given, F3, A1, step 1.1, induction, algebra]

3.1 Since $A_tu_*=b$, subtraction gives $s^{(r)}=A_t(u_*-u^{(r)})=A_te^{(r)}$. If $e^{(r)}=0$, [F3] gives $s^{(r)}=0$. Otherwise the induced-norm definition in the Statement and [A2] give $\|s^{(r)}\|\le\|A_t\|\|e^{(r)}\|$, and step 2.1 yields the displayed residual estimate. [given, F2, F3, A2, step 2.1, algebra]

4.1 For any error/residual pair, $s=A_te$ and [F2] gives $e=A_t^{-1}s$. If $e=0$, then $s=0$ and [F3] gives both inequalities. If $e\ne0$, invertibility forces $s\ne0$, so the induced-norm definition in the Statement and [A2] give both $\|s\|\le\|A_t\|\|e\|$ and $\|e\|\le\|A_t^{-1}\|\|s\|$. [given, F2, F3, A2, algebra] ∎

