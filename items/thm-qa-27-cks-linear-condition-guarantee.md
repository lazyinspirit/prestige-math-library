---
id: thm-qa-27-cks-linear-condition-guarantee
kind: theorem
title: "CKS nearly-linear condition-number guarantee"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - thm-qa-relative-probability-guarantee
  - lem-qa-27-low-target-amplification
  - lem-qa-27-capped-lower-bound-amplification
  - thm-qa-24-qsvt-query-count
  - thm-qa-27-pseudoinverse-polynomial-degree
  - alg-qa-27-cks-variable-time-linear-solver
  - def-qa-27-cks-sparse-oracle-model
  - lem-qa-27-cks-stopping-time-instantiation
  - thm-qa-25-qubitized-simulation-resource-bound
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: "https://arxiv.org/pdf/1511.02306"
      locator: "Theorem 5 and full proof in §§5.1–5.4, PDF pp.22–29."
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and QLSP application, §§3–4, PDF pp.4–16."
---

## Statement

Let $A$ be an $N\times N$ Hermitian matrix with at most $d$ nonzero entries in each row, $\|A\|_{\rm op}\le1$, supplied with the full sparse access model of [[def-qa-27-cks-sparse-oracle-model]]. Its finite-precision values must decode to a Hermitian $\widetilde A$ with certified $\|A-\widetilde A\|_{\rm op}\le\epsilon_{\rm val}$, and the exact QA25 encoding and simulator-call certificates must satisfy the budgets in [[alg-qa-27-cks-variable-time-linear-solver]]. Let $|b\rangle$ be a normalized state supported on eigenvalues with $|\lambda|\ge1/\kappa$ for declared $\kappa\ge1$, prepared by a supplied clean-work unitary $B$. For targets $0<\epsilon<1$ and $0<\rho<1/3$, execute the constructor at supplied rationals $\epsilon/2<e\le\epsilon$ and $\rho/2<\beta\le\rho$, with access and construction certificates for these requests. The uncapped `efficient-qsvt` constructor, or a finite-cap construction that completes its certificates, outputs with probability at least $1-\rho$ a conditional pure system state admitting a unit representative within vector-norm error $\epsilon$ of $A^+|b\rangle/\|A^+|b\rangle\|$, for every fixed $0<\rho<1/3$. Here the output is conditioned on its classical execution transcript: for any unit representative $\psi$ of its ray, there exists $\omega\in\mathbb C$, $|\omega|=1$, such that $\|\omega\psi-A^+|b\rangle/\|A^+|b\rangle\|\|\le\epsilon$. This terminal-state phase convention does not change any coherent stage, block-encoding, or controlled-operation phase specified by the access contract.

For the prescribed precision schedule and least admissible OP1A degree bounds just specified, the query bound is $O\!\left(d\kappa\,\operatorname{poly}\!\left(\log\frac{d\kappa}{\epsilon},\log\frac1\rho\right)\right)$ calls in each declared row-location, reverse-location, value, and input-preparation query coordinate; inverse and coherent forms retain their separate coordinates. A construction-cap exhaustion returns its declared timeout and is not included in this success guarantee. If the support of $|b\rangle$ has the smaller condition number $\kappa'<\kappa$, $\kappa$ may be replaced by $\kappa'$. The output is a quantum state; no classical coordinate list is promised.

The separate gate-efficient conclusion holds only under this explicit gate specialization: every required forward, inverse and controlled form of $B$, row-location, reverse-location, value access, and the $\widetilde A/d$ block encoding has a uniform circuit using at most $g_0=\operatorname{polylog}(N,d,\kappa,1/\epsilon,1/\rho)$ gates per call; state preparation, selected/input reflections, reversible clock predicates, dilution rotations, and the final zero-work instrument and controlled reflections also use at most $g_0$ gates per invocation; and each QA25 simulation at time $t$ and clean-input error $\xi$ has a uniform circuit using $O((d|t|+\log(1/\xi))g_0)$ gates, with the same bound for every required controlled or inverse form. The QFTs, reversible phase comparisons and majority circuits, and efficient-grid rounding circuits used by the probability estimator must also have uniform polylogarithmic gate counts at every allowed scale. A uniform phase compiler must implement each QSVT phase within its allocated error using at most $g_0$ gates. Under these conditions the total quantum gate count is $O(d\kappa\,\operatorname{polylog}(N,d,\kappa,1/\epsilon,1/\rho))$. Query bounds remain separate from these gate bounds. Classical polynomial/phase generation, exact algebraic comparison, median/schedule arithmetic, arithmetic bit implementation and compiler construction costs remain separate coordinates; no polylogarithmic total bit-time bound is inferred.

## Facts & Assumptions

**Given:** The sparse supported QLSP input, certified finite-precision and simulation budgets, clean-work preparation, and the `efficient-qsvt` mode with completed polynomial/phase construction and its finite confidence/resource caps. In this proof write $\epsilon,\rho$ for its rational input parameters $e,\beta$; a guarantee for them implies the requested real-target guarantee. Use the least admissible OP1A degree bounds, with certified integer upper endpoints within one of the corresponding real ceilings, as in the polynomial-degree supplier.

[F1] [[alg-qa-27-cks-variable-time-linear-solver]] specifies the actual QSVT-stage, gapped-phase, probability-estimation and finite amplification circuits and their budgets.

[F2] [[lem-qa-27-cks-stopping-time-instantiation]] proves $T_{\max}\le2H\alpha$, $T_{\rm av}/\sqrt p\le10H\alpha$, $\alpha=2/\phi_m\le8\kappa$, conditional target error at most $\epsilon/64$, and all positive estimator floors. The final zero-work instrument returns a pure system state with error at most $\epsilon$ and additional failure at most $\rho/4096$.

[F3] [[thm-qa-relative-probability-guarantee]] supplies the finite generic estimator and its joint accuracy-and-cost event: with failure at most $\beta$, sampler/inverse calls are at most $4160r/(c\sqrt q)$, where $r$ is the actual median repetition count. Its classical cyclotomic comparisons and rounding costs are separate.

[F4] [[lem-qa-27-low-target-amplification]] gives each amplified stage loss at most $2/(5n)$ and surviving probability at least $1/(16n)$; unamplified large-estimate stages have loss one. The product loss over at most $n$ stages is bounded by $\sqrt{5/3}$ in the cost recurrence.

[F5] [[lem-qa-27-capped-lower-bound-amplification]] supplies finite heralding with failure at most $\rho/4$, preserving the exact conditional good-state density operator.

[F6] Actual QA24 signal/phase counts and QA25 simulation/sparse-access costs are explicit ([[thm-qa-24-qsvt-query-count]], [[thm-qa-25-qubitized-simulation-resource-bound]], [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]]); the h=1 supplied-permutation specialization has the same call counts, with its exact $\widetilde A/d$ compression established in step 1.1 of [F2].

[F7] The gate-efficient specialization in the Statement bounds each preparation/access/controlled/inverse, reflection/predicate/instrument, simulator, and compiled phase implementation uniformly, while keeping gate and query coordinates separate.

[F8] [[thm-qa-27-pseudoinverse-polynomial-degree]]: the bare-gap OP1A construction with rational $0<e_j\le\delta_j\le1/2$ and least admissible bounds has degree $O(\delta_j^{-1}\log(1/e_j))$.

## Proof


1.1 For each quantum coordinate construct $H$ from the finite stage/control/inverse/reflection/dilution lists as in [F1]. For gate coordinates its computed bound also includes the QFT/efficient-grid rounding/median overhead over the estimator's finite allowed scales, so the sampler-call estimate multiplies actual ordinary-gate overhead rather than ignoring it. The assigned dyadic times have increments $\Delta_j$, and every interval's reflection-pair and reversible-predicate cost is included in its increment. Set $r_0=s_0=1$ and $v_0=0$, before the first interval. Let $s_j$ be original good-or-unfinished mass, $r_j$ the amplified selected mass, $q_j=r_{j-1}s_j/s_{j-1}$ and $v_j$ the amplified circuit cost. With $d_j=2k_j+1$ the ordinary amplification multiplier, $v_j\le d_j(v_{j-1}+\Delta_j)$. Here the $d_j$ sampler/inverse invocations plus $k_j$ reflection pairs fit this allocated budget; none of those costs is free. [F1, F2, F4, algebra]

1.2 To evaluate $H$, put $e_*=\min(\epsilon,\rho)$ and $\Lambda=1+\log(d\kappa/e_*)$. Since $m=O(1+\log\kappa)$ and $\alpha\le8\kappa$, the prescribed $\eta_I=e_*/(4096m\alpha)$ and largest-dyadic $\zeta=\eta_S$ give $\log(1/\eta_I),\log(1/\zeta),\log(1/\eta_S)=O(\Lambda)$. The exact choice $e_j=\min(\phi_j/(2d),\eta_I/8)$ likewise has $\log(1/e_j)=O(\Lambda)$. The degree supplier with the stated least bounds gives $D_j=O(d2^j\Lambda)$, so $\log D_j=O(\Lambda)$. Across both base lists, there are $Q_0=O(m^2\Lambda)$ QPE simulator sites and total absolute time $T_0=O(\kappa\Lambda)$. Hence the requested simulator tolerance $\eta_S/(2\max(1,Q_0))$ has inverse logarithm $O(\Lambda)$. The value budget can be met at $\epsilon_{\rm val}\le\min\{\eta_S/(2\max(1,T_0)),d\min_j(\eta_I/(32D_j))^2\}$; this sufficient requested bound also has inverse logarithm $O(\Lambda)$. Actual fixed access must meet the requests or the constructor returns INVALID_ACCESS. Phase tolerance $e_j/100$ and per-slot tolerance $\eta_I/(8N_j)$ have inverse logarithm $O(\Lambda)$ because the explicit stage has $N_j=O(D_j+\operatorname{poly}(m,\Lambda))$ slots. Smaller certified actual errors do not trigger additional precision requests. Thus an inverse stage has gap $\delta_j=\phi_j/d$ and polynomial degree $O(d2^j\Lambda)$, and exactly that many signal calls plus one more phase slot by [F6]. The real-extraction, dilution and success-projector circuits are explicit. Gapped phase estimation uses the least admissible dyadic label size $O(2^j)$ and $O(\log(1/\zeta))$ coherent repetitions. At each QPE power, the actual QA25 small-time-aware simulation has $O(d|t|+\log(1/\eta))$ signal cost, with a separately counted zero-signal branch for sufficiently small time; summing its dyadic evolution times gives $O(d2^j)$ and summing the additive precision term gives only additional logarithmic factors. Controlled/inverse calls and sparse block construction carry their actual costs. Thus the query-coordinate interval bound is $H=O(d\,\operatorname{polylog}(d\kappa/\epsilon,1/\rho))$, with an additional $O(\log(d+1))$ factor only if the optional sorted-XOR sparse bridge is chosen. Under the explicit gate specialization in the Statement, the $B$ and sparse-access calls, controlled/inverse forms, QA25 simulator, phase compiler, reflections, clock predicates, dilution rotations and final instrument have the stated uniform gate costs; substituting these bounds into the same interval list gives $H=O(d\,\operatorname{polylog}(N,d,\kappa,1/\epsilon,1/\rho))$ for the gate coordinate. No bare matrix or arbitrary black-box unitary is assigned free access. [F1, F2, F6, F7, F8, algebra]

2.1 Put $S_i=\sum_{j\le i}\Delta_j\sqrt{s_{j-1}}$ and $S=S_m$. Expanding the recurrence and substituting $q_j$ telescopes the probability factors. The product loss in [F4], together with $r_{j-1}\ge1/(16n)$, gives $v_i\le6\sqrt n\sqrt{r_i/s_i}\,S_i$. Also $s_{j-1}\le p+u_{j-1}$, where $u$ is original unfinished mass. The first dyadic increment is at most $T_{\rm av}$ and later increments equal the preceding deadline, so $\Delta_j\sqrt{u_{j-1}}\le T_{\rm av}$. Thus by [F2], $$S\le T_{\max}\sqrt p+mT_{\rm av}\le12nH\alpha\sqrt p.$$ Consequently the next unamplified sampler's cost $b_i=v_{i-1}+\Delta_i$ satisfies $$\frac{b_i}{\sqrt{q_i}}\le\frac{10\sqrt n S}{\sqrt p}\le128n^{3/2}H\alpha.$$ These estimates also hold at the initial interval with $r_0=s_0=1$ and $v_0=0$. [F2, F4, step 1.1, algebra]

3.1 Use confidence $\beta=\rho/(16n)$ for each of at most $n$ generic estimator invocations and relative error $c=1/100$. On the intersection of their joint accuracy-and-cost events, [F3] and step 2.1 bound the total quantum estimation cost by $n\cdot4160(r/c)\cdot128n^{3/2}H\alpha<2^{20}(r/c)n^{5/2}H\alpha$. The floors and both scheduler branches are valid by [F2]. The final production cost is at most $72n^{3/2}H\alpha$, since $r_m\le1$ in the bound for $v_m$. [F1, F2, F3, F4, step 2.1, algebra]

4.1 The final lower-bound amplifier has $p_0=1/(18n)$, dyadic trial range $M<4\sqrt{18n}<17\sqrt n$, and $R\le1+\ln(4/\rho)/\ln(4/3)$. Its sampler/reflection budget is therefore at most $2^{13}Rn^2H\alpha$. The median repetition choice in [F3] implies $R\le32r$ by comparing its defining geometric confidence inequality with $(3/4)^R\le\rho/4$. The final cost is at most $2^{18}rn^2H\alpha$. All these costs fit strictly below the specified cap $K=\lceil2^{30}(r/c)H\alpha n^4\rceil$. Thus on the good confidence event the resource-timeout branch is never reached, and on every transcript the primitive-cost budget is at most $K$. [F1, F3, F5, step 3.1, algebra]

5.1 The union bound for the estimator events is at most $n\beta\le\rho/16$, including their joint cost failures. Conditional on the good construction transcript, [F5] fails with probability at most $\rho/4$. The final zero-work test has additional failure at most $\rho/4096$ by [F2]. Hence the finite solver succeeds with probability at least $1-5\rho/16-\rho/4096\ge1-\rho$. For a fixed good construction transcript, [F5] gives the same conditional good-state density operator as the actual sampler on every successful terminal amplification branch. Let $g$ be its phase-fixed one-attempt good unit vector, to which [F2] applies. A unit ket on any such branch is $c g$ with $|c|=1$. Applying the actual internal uncompute and projecting work onto zero multiplies the resulting canonical system vector by the same $c$; normalization preserves this unit phase. Thus choosing the representative with this phase removed gives exactly the normalized vector estimate of [F2], and every other unit representative satisfies the stated bound after multiplication by a unit scalar. The external herald is recorded before uncomputing internal flag/bucket work. No relative phase between eigencomponents or coherent stages is changed. All numerical implementation errors used here are the deterministic vector bounds already allocated in [F1], so they are not omitted probabilistic failures. [F1, F2, F3, F5, step 4.1, algebra]

6.1 Since $n=O(1+\log\kappa)$, $\alpha\le8\kappa$ and $r=O(1+\log((2+\log(1/p_{\min}))/\rho))$, the cap in step 4.1 is $O(d\kappa\operatorname{polylog}(d\kappa/\epsilon,1/\rho))$ in the query specialization, and has only the stated polynomial-logarithmic gate overhead. Fixing a constant $\rho<1/3$ gives the original source target. If a smaller support-gap promise $1/\kappa'$ is supplied, run the same construction with that declared parameter and replace $\kappa$ throughout. Output remains a quantum state. Classical polynomial/phase generation, exact algebraic comparisons, arithmetic bit implementation and compiler construction remain separately charged coordinates; this quantum gate/query result asserts no polylogarithmic total bit-time for them. The retained full Fourier-table and capped alternates preserve their actual costs and are not used to infer the efficient-mode bound. [F1, F2, F3, F6, step 4.1, step 5.1, step 1.2, algebra] ∎

