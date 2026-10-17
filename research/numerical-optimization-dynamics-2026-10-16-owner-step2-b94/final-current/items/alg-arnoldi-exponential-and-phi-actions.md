---
id: alg-arnoldi-exponential-and-phi-actions
kind: algorithm
title: "Arnoldi projection for exponential and phi-function actions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-scaled-taylor-exponential-action
  - def-arnoldi-process
  - def-certified-matvec-and-vector-arithmetic
  - def-phi-functions-by-everywhere-convergent-series
  - thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization
  - thm-phi-recurrence-and-augmented-matrix-actions
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 7.1, Arnoldi projection for f(A)b, printed pp. 22–23."
    - title: "Jitse Niesen and Will M. Wright, A Krylov subspace algorithm for evaluating the phi-functions appearing in exponential integrators"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "Section 3.1, projected phi action and augmented reduced exponential, equations (5)–(6)."
verification:
  precheck: n/a
---

## Definition

**Inputs:** $A\in M_n(\mathbb C)$ with $n\ge1$, $v\in\mathbb C^n$, time $t\in\mathbb R$, integer $k\ge0$, Krylov budget $1\le m\le n$, nonnegative threshold $\tau$, an exact-arithmetic Arnoldi run or a finite-precision Arnoldi backend, and a reduced-action configuration. In finite precision, the backend returns a length $j$ with $1\le j\le m$, $\beta>0$ for $v\ne0$, $V_j\in\mathbb C^{n\times j}$, $H_j\in M_j(\mathbb C)$, and a computed subdiagonal; it may supply the relation certificate in Step 2 and an exact happy-breakdown certificate verifying the full Arnoldi recurrence from $v$ through $j$ steps with zero terminal residual. The reduced-action configuration supplies, for each Taylor call, rational operator-norm and input-vector norm upper bounds, a positive tolerance, finite scaling/order budgets, and a provider satisfying [[def-certified-matvec-and-vector-arithmetic]] for Taylor calls, scalar scaling, and final projection. Missing or invalid bounds produce an inconclusive status.

**Outputs:** a vector candidate when data are available, reduced-coefficient error bound $\epsilon_{\rm red}\in\mathbb R_{\ge0}\cup\{+\infty\}$, final-projection error bound $\eta_{\rm proj}\in\mathbb Q_{\ge0}\cup\{+\infty\}$, Arnoldi data, any relation-error certificates, `arnoldi_status` (`zero-start`, `happy-breakdown`, `projected`, `numerical-breakdown`, `inconclusive-arnoldi`, or `invalid-input`), `relation_status` (`exact`, `certified`, `inconclusive`, or `not-run`), `reduced_action_status` (`success`, `inconclusive`, or `not-run`), and `projection_status` (`exact`, `certified`, `inconclusive`, or `not-run`). An invalid input may return no candidate.

**Procedure:**

1. Reject invalid dimensions, $m$, $k$, or threshold by returning no candidate, both error bounds $+\infty$, no Arnoldi data or relation certificates, `arnoldi_status=invalid-input`, and `relation_status=reduced_action_status=projection_status=not-run`. If $v=0$, return the zero vector with both error bounds zero, `arnoldi_status=zero-start`, and `relation_status=reduced_action_status=projection_status=not-run`, without division.
2. In exact-arithmetic mode, run [[def-arnoldi-process]] for at most $m$ steps and retain $\beta:=\|v\|_2$, $V_j=[v_1,\ldots,v_j]$, and the leading square Hessenberg matrix $H_j$; set `relation_status=exact`. Stop when the Arnoldi residual norm is exactly zero and set `arnoldi_status=happy-breakdown`; otherwise continue until $m$ steps and leave the Arnoldi status pending. In finite-precision mode, if the backend data have invalid dimensions or fail $\beta>0$ for $v\ne0$, return the zero candidate, both bounds $+\infty$, `arnoldi_status=inconclusive-arnoldi`, `relation_status=inconclusive`, and `reduced_action_status=projection_status=not-run`. Otherwise use the backend's $V_j,H_j,\beta$ and computed subdiagonal. When available, it supplies a relation certificate $AV_j=V_jH_j+h_{j+1,j}v_{j+1}e_j^*+D+\Omega$, with $\|v_{j+1}\|_2=1$, column bounds $\|d_i\|_2\le\eta_i$ for $D=[d_1,\ldots,d_j]$, and a norm bound for $\Omega$. Set `relation_status=certified` if this relation is supplied and verified, and `relation_status=inconclusive` otherwise. A verified exact happy-breakdown certificate sets `relation_status=certified` and `arnoldi_status=happy-breakdown`; it verifies the exact Arnoldi recurrence, including $AV_j=V_jH_j$ and $v=\beta V_je_1$. Without that full certificate, a computed subdiagonal at most $\tau$ sets `arnoldi_status=numerical-breakdown`; continue to the reduced evaluation but never label it happy breakdown. Otherwise leave the Arnoldi status pending until Step 5.
3. For $k=0$, request a reduced configuration for $(H_j,\beta e_1,t)$ and call [[alg-scaled-taylor-exponential-action]] to approximate $e^{tH_j}\beta e_1$. If the Taylor call returns no candidate, set $\epsilon_{\rm red}=\eta_{\rm proj}=+\infty$, set `reduced_action_status=inconclusive` and `projection_status=not-run`, set a pending `arnoldi_status` to `inconclusive-arnoldi` when `relation_status=inconclusive` and to `projected` otherwise, and return no candidate. Otherwise set $\widehat c$ and $\epsilon_{\rm red}$ to its candidate and bound. Set `reduced_action_status=success` only when the Taylor status is `success`; otherwise set it to `inconclusive`. Continue to Step 5 with the returned candidate in either case.
4. For $k\ge1$, form $B_k(tH_j,e_1)$ from [[thm-phi-recurrence-and-augmented-matrix-actions]], request a reduced configuration for $(B_k(tH_j,e_1),e_{j+k},1)$, and call [[alg-scaled-taylor-exponential-action]]. If the Taylor call returns no candidate, set $\epsilon_{\rm red}=\eta_{\rm proj}=+\infty$, set `reduced_action_status=inconclusive` and `projection_status=not-run`, set a pending `arnoldi_status` to `inconclusive-arnoldi` when `relation_status=inconclusive` and to `projected` otherwise, and return no candidate. Otherwise let $q$ be the first $j$ entries of its candidate and use the certified vector-scaling provider with scalar $\beta$ to obtain $\widehat c$ and local bound $\xi_\beta$. Set $\epsilon_{\rm red}:=\beta\epsilon_{\rm aug}+\xi_\beta$, where $\epsilon_{\rm aug}$ is the augmented Taylor bound; if either certificate is missing set $\epsilon_{\rm red}=+\infty$ and `reduced_action_status=inconclusive`. Set `reduced_action_status=success` only when the Taylor status and scaling certificate both succeed. Continue to Step 5 in either case.
5. In exact-arithmetic mode set $x:=V_j\widehat c$, $\eta_{\rm proj}=0$, and `projection_status=exact`. In finite precision, use the certified matrix-vector provider with matrix $V_j$, scalar $1$, and vector $\widehat c$ to return $x$ and bound $\eta_{\rm proj}$; missing certification sets $\eta_{\rm proj}=+\infty$ and `projection_status=inconclusive`. Return $x$. If `arnoldi_status` is still pending, set it to `inconclusive-arnoldi` when `relation_status=inconclusive` and `projected` otherwise.

In exact arithmetic the projected formula is $\beta V_j\varphi_k(tH_j)e_1$. Exact happy breakdown means the generated Krylov subspace is invariant and this projected formula equals $\varphi_k(tA)v$; a finite Taylor evaluation still has its separately reported reduced-action error. A numerical-breakdown status asserts no exact invariance.

## Well-definedness and status semantics

Input validation precedes the norm division. The zero-start branch returns immediately, and in the exact [[def-arnoldi-process]] every basis normalization occurs only after a nonzero residual norm has been established. The Arnoldi loop stops after at most $m$ steps. The finite-precision backend must supply a finite basis and reduced matrix; absent a verified relation, `relation_status=inconclusive` preserves that gap. Each reduced action delegates to the finite-budget [[alg-scaled-taylor-exponential-action]], whose missing-bound and exhausted-budget outcomes are returned as inconclusive.

`happy-breakdown` is assigned only in exact arithmetic after a zero Arnoldi residual, or from a verified exact Arnoldi-recurrence certificate with zero terminal residual. A small computed subdiagonal without that full certificate is `numerical-breakdown`; it makes no claim about whether the true subspace is invariant. The four statuses separately report Arnoldi breakdown evidence, relation certification, reduced-action certification, and final-projection certification. For $k=0$, the local action-error theorem adds the reduced-coefficient and final-projection error bounds under its hypotheses. For $k\ge1$, the local Taylor theorem certifies the augmented reduced action, and the vector-scaling provider certifies multiplication by $\beta$.
