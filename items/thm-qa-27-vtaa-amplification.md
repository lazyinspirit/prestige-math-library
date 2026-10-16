---
id: thm-qa-27-vtaa-amplification
kind: theorem
title: "Variable-time amplitude-amplification theorem"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-relative-probability-estimation
  - thm-qa-relative-probability-guarantee
  - lem-qa-27-low-target-amplification
  - lem-qa-27-capped-lower-bound-amplification
  - def-qa-27-variable-time-model
  - alg-qa-12-amplitude-amplification
  - thm-qa-12-amplification-rotation-correctness
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-circuit-denotational-semantics
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and §§3.1–3.3, PDF pp.1–8."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: "https://arxiv.org/pdf/1511.02306"
      locator: "Theorem 21 and proof, PDF pp.25–29."
---

## Statement

Let a finite coherent variable-time algorithm satisfy [[def-qa-27-variable-time-model]], with positive success probability $p$, maximum stopping count $T_{\max}\ge1$ and RMS stopping count $T_{\rm av}$. Use the declared normalized operation-count coordinate, with actual preparation, controlled/inverse and input/selected-reflection costs included in the interval budgets. Put $L_T=\max(2,T_{\max})$ and $n=1+\lceil\log_2 L_T\rceil$. The following resource regimes are distinct.

**Supplied probability/schedule data.** Suppose finite certified amplification-schedule data are supplied as in the model: on dyadic interval $j$, with original good-or-unfinished mass $s_j$, previous selected mass $r_{j-1}$ and actual $q_j=r_{j-1}s_j/s_{j-1}$, the odd multiplier $d_j=2k_j+1$ has resulting selected probability $r_j\ge1/(16n)$ and $r_j\ge(1-2/(5n))d_j^2q_j$. Unamplified intervals have $d_j=1,r_j=q_j$. Supply a rational $\ell$ with $r_h/2\le\ell\le r_h$ for the final selected mass. Let $C_{\rm build}$ charge the actual finite construction/verification of these data and lists, including **every oracle invocation used to obtain probability information**. The resulting production procedure returns the exact conditional good state with success at least $1/2$ at total cost
$$C_{\rm build}+O\!\left(T_{\max}\sqrt{\ln L_T}+\frac{T_{\rm av}}{\sqrt p}(\ln L_T)^{3/2}\right).$$
The original logarithmic production bound is retained in this explicit probability-input regime. It does not assert free exact probability access or a uniform method obtaining those data at zero query cost. Repeating production $O(\ln(1/\rho))$ times gives success at least $1-\rho$, with the actual construction cost charged once if its certified lists are reused.

**Uniform finite estimated implementation.** Instead supply only a positive rational success floor $0<p_0\le p$, failure $0<\rho<1/2$, and the actual controlled/inverse/reflection access. No branch-probability advice is assumed. There is a finite estimated construction, described in the proof, preserving the exact conditional good state and succeeding with probability at least $1-\rho$. Put $c=1/100$, $q_{\min}=p_0/(64n)$, and let $r$ be the median count of [[alg-qa-relative-probability-estimation]] at floor $q_{\min}$ and individual failure $\rho/(16n)$. On a joint event of probability at least $1-\rho$ its complete construction-plus-production stage-call cost is
$$O\!\left((r/c)n^{5/2}\left(T_{\max}+\frac{T_{\rm av}}{\sqrt p}\right)\right).$$
Every execution has the separately charged deterministic cap
$$K=\left\lceil2^{25}(r/c)n^3T_{\max}P_0\right\rceil,\qquad P_0=\min\{a\in\mathbb N:a^2p_0\ge1\}.$$
Exhaustion returns `RESOURCE_TIMEOUT`. State preparation, oracle/control/reflection implementation, finite list generation, output rounding and classical arithmetic/bit costs retain their actual separate coordinates; construction oracle calls are already counted in this cap. The efficient-grid rounding mode may be used for its proved polynomial-logarithmic postprocessing resources. This theorem makes no unproved unknown-$p$ expected-time claim and does not equate this finite uniform overhead with the first regime's tighter production expression.

## Facts & Assumptions

**Given:** The variable-time model in the Statement, its actual declared access/cost coordinate, and the data of the selected regime.

[F1] Stopped branches are orthogonal and fixed by later stages ([[def-qa-27-variable-time-model]]).

[F2] Ordinary amplification preserves the selected normalized component and gives selected probability $\sin^2(d\arcsin\sqrt q)$ ([[thm-qa-12-amplification-rotation-correctness]]).

[F3] Low-target amplification with a relative-$1/100$ estimate has selected probability at least $1/(16n)$ and multiplicative loss at most $2/(5n)$; the product loss over at most $n$ amplified stages is bounded by $\sqrt{5/3}$ in the cost recurrence ([[lem-qa-27-low-target-amplification]]).

[F4] The generic finite estimator supplies its joint relative-error and call-cost event with count at most $4160r/(c\sqrt q)$, with the explicit controlled access and separately charged rounding costs ([[thm-qa-relative-probability-guarantee]]).

[F5] Lower-bound capped amplification preserves the exact conditional selected state and has finite call cap $2RM$ with $M<4/\sqrt{p_{\rm low}}$ and $R\le1+\ln(1/\beta)/\ln(4/3)$ ([[lem-qa-27-capped-lower-bound-amplification]]).

## Proof


1.1 Group the original operation-count execution into dyadic deadlines, assigning each stopped branch the first deadline after its original stopping count. All counts are positive integers in the declared coordinate. Treat an original stage as indivisible: group all stages ending by each deadline and use twice that deadline as its padded cumulative budget. The interval then covers every grouped whole-stage call. This changes maximum and RMS counts by at most four and leaves stopped branches untouched. There are at most $n$ intervals with increments $\Delta_j$ summing to at most $4T_{\max}$. Their input/selected-reflection and preparation/control budgets are included, rather than treated as free additional operations. We retain this factor in the numerical constants below. [given, F1, construct, algebra]

2.1 Let $s_j$ be the original probability of being already good or still unfinished at deadline $j$, with $s_{-1}=1$. It decreases, is at least $p>0$, and has final value $p$. Construct $B_j$ by running the preceding amplified list and continuing the original algorithm only on unfinished branches. Inductively its selected component is proportional to the original selected component, with probability $q_j=r_{j-1}s_j/s_{j-1}$; initially $r_{-1}=1$. Amplify by the chosen odd multiplier. By [F2] this preserves the conditional selected state, and at the last deadline that state is the exact original conditional good state. [F1, F2, step 1.1, algebra]

3.1 Let $v_j$ be the production-list cost and $d_j$ its amplification multiplier. Then $v_j\le d_j(v_{j-1}+\Delta_j)$, with $v_{-1}=0$. The supplied-regime certificate or [F3] gives $d_j\le\sqrt{r_j/q_j}(1-2/(5n))^{-1/2}$ on amplified intervals, with no loss on unamplified intervals. Expand the recurrence. For each summand, $$\prod_{\ell=j}^{h}\sqrt{r_\ell/q_\ell}=\sqrt{\frac{r_hs_{j-1}}{r_{j-1}p}}.$$ The total loss is at most $\sqrt{5/3}$, and $r_{j-1}\ge1/(16n)$ (with initial value one), so $$v_h\le6\sqrt{nr_h/p}\sum_j\Delta_j\sqrt{s_{j-1}}.$$ The same bound holds for every prefix with its corresponding $r_i,s_i$. [F2, F3, step 2.1, algebra]

3.2 In the uniform regime use [F4] with $c=1/100$, floor $q_{\min}=p_0/(64n)$ and failure $\beta=\rho/(16n)$ at each of at most $n$ intervals. All estimation workspaces are fresh construction data, discarded before production. On the estimator-good event, a returned $\widehat q>1/(9n)$ uses $d=1$ and actual $r=q>(100/101)/(9n)>1/(16n)$, with loss one. Otherwise choose the least odd $d$ with $d^2\widehat q\ge1/(9n)$; search only through $k\le\lceil1/\sqrt{q_{\min}}\rceil$ and return failure if no crossing is found. [F3] gives the same surviving floor and loss bound in this case. Inductively $q_j\ge p/(16n)\ge p_0/(16n)>q_{\min}$, so every estimator promise is met on this joint event; a zero estimate or exhausted search is then impossible. The actual upper bound $r\le1/n$ is neither claimed nor used. [F2, F3, F4, step 2.1, algebra]

4.1 Write $u_{j-1}$ for original unfinished mass at the preceding deadline. Since $s_{j-1}\le p+u_{j-1}$ and $\Delta_j\sqrt{u_{j-1}}\le2T_{\rm av}$ by the dyadic stopping convention (also at the first interval, because stopping counts are at least one), $$S:=\sum_j\Delta_j\sqrt{s_{j-1}}\le4(T_{\max}\sqrt p+nT_{\rm av}).$$ In the supplied-data regime apply [F5] at lower bound $\ell\ge r_h/2$ and constant failure $1/2$. Its $O(r_h^{-1/2})$ factor cancels $\sqrt{r_h}$ in step 3.1, proving production cost $O(T_{\max}\sqrt n+(T_{\rm av}/\sqrt p)n^{3/2})$. Substitute $n=O(\ln L_T)$ and add the actual $C_{\rm build}$, including its probability-acquisition oracle calls. Independent repetitions give the stated confidence. No construction-cost bound follows solely from existence of true-probability-selected multipliers. [F1, F5, step 1.1, step 3.1, algebra]

5.1 The prefix version of step 3.1 and $r_{j-1}\ge1/(16n)$ give the next sampler cost $b_i$ the bound $b_i/\sqrt{q_i}\le10\sqrt nS/\sqrt p$. Use step 4.1 and [F4] to charge every estimation call. Summing at most $n$ stages gives at most $2^{18}(r/c)(n^{3/2}T_{\max}+n^{5/2}T_{\rm av}/\sqrt p)$ with slack for dyadic padding. Final production has $v_h\le6\sqrt nS/\sqrt p$. Apply [F5] with floor $1/(18n)$ and failure $\rho/4$: its range is $M<17\sqrt n$, and its trial count $R$ is at most $32r$. Thus its complete additional cost fits within $2^{20}(r/c)n^{5/2}(T_{\max}+T_{\rm av}/\sqrt p)$, again with slack for the already charged reflection/interval overhead. This proves the stated joint-event bound and includes the quantum cost of acquiring probability data. [F3, F4, F5, step 3.1, step 4.1, step 3.2, algebra]

6.1 The computable integer $P_0$ satisfies $P_0\ge1/\sqrt{p_0}$ and $P_0<2/\sqrt{p_0}$. Since $T_{\rm av}\le T_{\max}$ and $p\ge p_0$, the joint-event cost in step 5.1 is below $K$. Count all construction, production, inverse/control/reflection stage calls and final amplification against $K$, stopping before an excess. The resource timeout therefore never occurs on the joint estimator-good event. Its complement has probability at most $n\beta\le\rho/16$ by [F4] and the union bound. Conditional on the good construction event, final capped amplification fails with probability at most $\rho/4$. Total failure is at most $5\rho/16<\rho$. Every heralded good branch has the same conditional original state by step 2.1, even after averaging the classical construction transcript. The procedure is finite on every branch by its explicit caps. [F1, F2, F4, F5, step 3.2, step 5.1, algebra] ∎

## Remarks

The probability-resource inputs in the model distinguish supplied certified schedule data from unknown black-box probabilities. The tight production expression charges the former through $C_{\rm build}$, including any oracle calls needed to obtain them; the finite uniform variant states its floor, confidence, estimation overhead and cap separately. An unknown-probability uniform worst-case bound cannot be inferred from the ideal-list recurrence: already a one-stage hidden-label rotation family yields the finite-transcript/continuity obstruction documented in the owner repair evidence. This corrects an ambiguous local resource interpretation and does not refute the cited source theorem under its intended conventions. No unproved unknown-$p$ expected-time claim is used here.
