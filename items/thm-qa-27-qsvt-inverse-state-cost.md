---
id: thm-qa-27-qsvt-inverse-state-cost
kind: theorem
title: "QSVT inverse-state output and success cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-27-qsvt-pseudoinverse
  - def-qa-27-block-encoded-qlsp
  - thm-qa-27-pseudoinverse-polynomial-degree
  - lem-qa-27-supported-pseudoinverse-target
  - thm-qa-24-qsvt-singular-space-action
  - thm-qa-24-qsvt-query-count
  - alg-qa-12-unknown-amplitude-search
  - lem-qa-12-amplification-plane-invariant
  - thm-qa-12-unknown-amplitude-query-cost
  - thm-qa-12-unknown-amplitude-success
  - def-qc-dirac-notation-conversion
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
axiom_use: "None; the finite SVD and the supplied query-cost results suffice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 41, PDF pp.37–38."
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum amplitude amplification and estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
      locator: "The amplitude-amplification query bound; local interface supplied by QA12."
---

## Statement

Let $m$ be the generated odd polynomial degree and let $\zeta$ bound the total operator error of one QSVT success block relative to $F=(\delta/2)\bar A^+$, including scalar approximation, block-encoding, and phase-synthesis errors. If $\|A\|_{\rm op}\le\alpha$ and the normalized input is supported on singular values at least $\gamma$, then $\|F|b\rangle\|^2\ge\delta^2/4$, where $\delta=\gamma/\alpha$. If $\zeta<\delta/2$, the implemented success weight $p_{\rm impl}$ satisfies
$$p_{\rm impl}\ge(\delta/2-\zeta)^2.$$
Conditional on success of one unamplified attempt, let $w$ be its phase-fixed success vector. The unit representative $w/\|w\|$ differs in vector norm from $A^+|b\rangle/\|A^+|b\rangle\|$ by at most $2\zeta/\|F|b\rangle\|\le4\zeta/\delta$. The amplified returned quantum state has this same ray: for any unit representative $\psi$ of that state there is $\omega\in\mathbb C$ with $|\omega|=1$ such that $\|\omega\psi-A^+|b\rangle/\|A^+|b\rangle\|\|\le2\zeta/\|F|b\rangle\|\le4\zeta/\delta$. This terminal-state convention leaves the coherent phase and operator-error bound of the actual QSVT success block fixed as stated above. Put $p_{\rm ideal}=\|F|b\rangle\|^2$, so $p_{\rm ideal}\ge\delta^2/4$. In particular, $\zeta\le\delta/4$ gives $p_{\rm impl}\ge\delta^2/16$.

An unamplified attempt of degree $m$ uses exactly $m$ block-encoding signal calls in the QSVT sequence. Applying the supplied unknown-amplitude amplification procedure costs expected $O(m/\sqrt{p_{\rm impl}})$ signal calls, with state preparation, controlled/inverse calls, reflections, phase gates, synthesis, and classical certificate generation charged separately. When the degree theorem is established, $m=O(\delta^{-1}\ln(1/e))$, so this becomes $O(\delta^{-1}\ln(1/e)/\sqrt{p_{\rm impl}})$ expected signal calls, and the crude $\zeta\le\delta/4$ bound gives $O(\delta^{-2}\ln(1/e))$. This is an expected-cost statement; it does not assert a fixed worst-case stopping time.

## Facts & Assumptions

**Given:** The block-encoded QLSP instance, a successful polynomial/phase certificate including the exact returned-phase product check, and $\zeta<\delta/2$ for the actual success block. The phase-approximation and circuit-implementation errors in $\zeta$ are measured relative to that verified ideal sequence.

[F1] [[thm-qa-27-pseudoinverse-polynomial-degree]]: on $[\delta,1]$, the generated odd polynomial approximates $\delta/(2x)$ and has degree $O(\delta^{-1}\ln(1/e))$.

[F2] [[lem-qa-27-supported-pseudoinverse-target]]: $F=(\delta/2)\bar A^+$ has $\|F|b\rangle\|\ge\delta/2$ and its normalized output is the QLSP target.

[F3] [[thm-qa-24-qsvt-singular-space-action]]: the odd sequence on the adjoint PUE acts on each supported singular pair with scalar multiplier $p(\sigma/\alpha)$, and uniform scalar error gives the corresponding operator error.

[F4] [[thm-qa-24-qsvt-query-count]]: a degree-$m$ QSVT sequence makes exactly $m$ signal calls, and phase/reflection and controlled-call counts remain separate.

[F5] [[thm-qa-12-unknown-amplitude-query-cost]]: for positive success weight $a$, the unknown-amplitude procedure has expected query cost $\Theta(a^{-1/2})$, with gates and classical costs separate.

[F6] [[lem-qa-12-amplification-plane-invariant]]: each standard Grover iterate acts on the span of the normalized good and bad components, and its good component is a scalar multiple of the same normalized good vector.

[F7] [[alg-qa-12-unknown-amplitude-search]]: each round starts with a fresh preparation and returns only after the good projector accepts.

[F8] [[thm-qa-12-unknown-amplitude-success]]: on a positive initial good weight, the search returns a good output with probability $1$.

[F9] [[alg-qa-27-qsvt-pseudoinverse]]: before execution, the algorithm multiplies the exact returned phase-scalar list and checks its four polynomial entries against the returned completed pair; a mismatch returns `PHASE_PRODUCT_ERROR` without a QSVT call.

## Proof

1.1 Write the finite SVD $A=\sum_j\sigma_j|u_j\rangle\langle v_j|$. Since $b=\sum_j\beta_j u_j$ is supported on $\sigma_j\ge\gamma$, applying the odd transform to $\bar A^\dagger$ maps each $u_j$ to $v_j$ with multiplier given by the verified phase-sequence polynomial. By [F9] this ideal polynomial is exactly the generated completed-pair target before numerical phase approximation; its total difference from the intended $p$ transform, including polynomial shrink and phase/circuit errors, is included in $\zeta$. The target multiplier is $\delta/(2(\sigma_j/\alpha))=\gamma/(2\sigma_j)$, the coefficient of $F=(\delta/2)\bar A^+$; [F1] and [F3] therefore bound the operator error on the supported subspace by $\zeta$. [given, F1, F3, F9, algebra]

1.2 Put $v=F|b\rangle$ and let $w$ be the implemented success vector. Then $\|w-v\|\le\zeta$. By [F2], $\|v\|\ge\delta/2$, so reverse triangle inequality gives $\|w\|\ge\delta/2-\zeta>0$ and $p_{\rm impl}=\|w\|^2\ge(\delta/2-\zeta)^2$. Moreover,
$$\left\|\frac{w}{\|w\|}-\frac{v}{\|v\|}\right\|\le\frac{|\|v\|-\|w\||+\|w-v\|}{\|v\|}\le\frac{2\zeta}{\|v\|}\le\frac{4\zeta}{\delta}.$$
The conditional state is defined because $\|w\|>0$. [given, F2, step 1.1, algebra]

2.1 By [F2], $p_{\rm ideal}=\|v\|^2\ge\delta^2/4$. In the implemented case, if $\zeta\le\delta/4$, step 1.2 gives $p_{\rm impl}\ge\delta^2/16$. By [F4], one attempt uses $m$ block-encoding signal calls, and phase/reflection and controlled-call resources remain separate. [given, F2, F4, step 1.2, algebra]

3.1 Put $|G\rangle=w/\|w\|$ for the one-attempt good vector. By [F6], after any integer number $j$ of amplitude-amplification iterates the unnormalized good component is $s_j|G\rangle$ for a scalar $s_j$. On a positive-probability good branch $s_j\ne0$, and the normalized ket is $(s_j/|s_j|)|G\rangle$; its phase can differ from that of $|G\rangle$. Each such branch has exactly the density operator $|G\rangle\langle G|$, including after the stopping history is forgotten. Thus any returned unit representative is $\psi=c|G\rangle$ with $|c|=1$, and choosing $\omega=\overline c$ gives $\omega\psi=|G\rangle$ and the error bound of step 1.2. This identifies the terminal state ray without rephasing any coherent circuit or controlled call. Fresh rounds use the same preparation circuit, and [F7] returns only on that good measurement; [F8] supplies eventual success for $p_{\rm impl}>0$. Applying [F5] to the actual success weight $p_{\rm impl}$ gives expected $O(p_{\rm impl}^{-1/2})$ attempts, hence expected $O(m/\sqrt{p_{\rm impl}})$ signal calls. If [F1] is established, substitute $m=O(\delta^{-1}\ln(1/e))$; if $\zeta\le\delta/4$, step 2.1 gives $p_{\rm impl}^{-1/2}\le4/\delta$. All other resource coordinates remain separate by [F4]–[F5]. [given, F1, F4, F5, F6, F7, F8, step 1.2, step 2.1, algebra] ∎
