---
id: lem-qa-27-cks-stopping-time-instantiation
kind: lemma
title: "CKS stopping-time and success-mass instantiation"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - lem-qa-25-clean-subspace-unitary-hybrid
  - thm-qa-relative-probability-guarantee
  - lem-qa-27-low-target-amplification
  - thm-qa-27-pseudoinverse-polynomial-degree
  - thm-qa-24-real-polynomial-extraction
  - thm-qa-24-qsvt-error-and-resource-bound
  - alg-qa-27-cks-variable-time-linear-solver
  - def-qa-27-variable-time-model
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
      locator: "Lemma 22, Lemma 23, equations (107)–(123), §§5.2–5.4, PDF pp.25–29."
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and §3.3, PDF pp.4–8."
---

## Statement

For the CKS dyadic eigenvalue-resolution procedure with $m=\lceil\log_2\kappa\rceil+1$ stages, a supported eigenvalue $\lambda$ is routed to one of two adjacent stopping intervals by the source's gapped phase-estimation test; the transition-band and estimator-failure mass must be included in the error budget. If $c_k$ are the input spectral amplitudes, the source analysis gives stage costs $t_j=\widetilde O(d2^j)$, maximum time $T_{\max}=\widetilde O(d\kappa)$, and, up to the allocated approximation error, a success amplitude proportional to $1/(\alpha_{\max}\lambda)$ on eigenvalue $\lambda$. Consequently
$$T_{\rm av}^2=\widetilde O\!\left(d^2\sum_k\frac{|c_k|^2}{\lambda_k^2}\right),\qquad \sqrt{p_{\rm succ}}=\widetilde\Theta\!\left(\frac1{\alpha_{\max}}\sqrt{\sum_k\frac{|c_k|^2}{\lambda_k^2}}\right).$$
In the explicitly declared `efficient-qsvt` mode of the local constructor, the proof below establishes these bounds with its actual charged interval budget. The source coefficient estimate $\alpha_{\max}=\widetilde O(\kappa)$ then gives $T_{\rm av}/\sqrt{p_{\rm succ}}=\widetilde O(d\kappa)$. These are the source-efficient stopping quantities; the proof below establishes the corresponding finite estimated-wrapper floor, normalization, error and stopping bounds in this mode, while the retained Fourier-table mode keeps its distinct actual costs.

## Facts & Assumptions

**Given:** The `efficient-qsvt` mode with $m$ stages, $n=m+1$, $\phi_j=2^{-j}$, $\alpha=2/\phi_m$, its declared value/block/simulation error budgets at strengthened internal accuracy $\epsilon_*=\min(\epsilon,\rho)$ and actual interval-cost bound $H$. The state-preparation workspace is clean as specified by the algorithm. In the error estimates below write $\varepsilon=\epsilon_*$, so $\varepsilon\le\epsilon$ and $\varepsilon\le\rho$. Put $X=A^+$, $x=\|Xb\|$, and let $p$ denote its final good probability.

[F1] The constructed stage circuit and resource/error budgets are those of [[alg-qa-27-cks-variable-time-linear-solver]].

[F2] The proved OP1A polynomial and real QSVT extraction have the stated uniform scalar and input-block/phase error bounds ([[thm-qa-27-pseudoinverse-polynomial-degree]], [[thm-qa-24-real-polynomial-extraction]], [[thm-qa-24-qsvt-error-and-resource-bound]]).

[F3] The variable-time model preserves all stopped branches and defines RMS time from their orthogonal probabilities ([[def-qa-27-variable-time-model]]).

[F4] The generic probability estimator has its promised relative-error, finite cap and confidence bounds ([[thm-qa-relative-probability-guarantee]]).

[F5] The low-target lemma proves surviving probability at least $1/(16n)$ and multiplicative loss at most $2/(5n)$ per amplified stage ([[lem-qa-27-low-target-amplification]]).

[F6] The clean-subspace unitary hybrid controls reference registers, coherent controls, actual inverses and repeated products along the ideal clean trajectory ([[lem-qa-25-clean-subspace-unitary-hybrid]]). Actual work is retained coherently rather than reinitialized.

[F7] The finite-precision value model supplies a Hermitian $\widetilde A$ with $\|A-\widetilde A\|_{\rm op}\le\epsilon_{\rm val}$, and the simulator-call-site bounds sum to $\eta_S$ over one $A$ list and one $A'$ list ([[alg-qa-27-cks-variable-time-linear-solver]]).

## Proof


1.1 In the finite Hermitian eigenbasis write $b=\sum_k c_kv_k$, $Av_k=\lambda_kv_k$, where $1/\kappa\le|\lambda_k|\le1$. Thus $1\le x\le\kappa$. The supplied-permutation sparse block circuit uses the certified entry bound $h=1$ for the decoded Hermitian matrix $\widetilde A$. Hermiticity lets the row enumeration on the swapped system register serve as the column enumeration, and the supplied reverse-location map makes each matching slot unique. Since $|\widetilde A_{ij}|\le1$, its value flag matrix is unitary and has flag-zero amplitude $\widetilde A_{ij}$ on the zero input. The row and column neighbor states have coefficient $1/\sqrt d$ on each listed slot, so their unique matching pair contributes $\widetilde A_{ij}/d$ to the all-zero flag compression; the support-coverage promise ensures every nonzero decoded entry is listed, any listed slot whose decoded value is zero contributes zero, and padded sentinels have no overlap. Hence the actual PUE block is exactly $\widetilde A/d$, within $\epsilon_{\rm val}/d$ of the ideal $A/d$. On the ideal block $A/d$, eigenvalue $\lambda$ gives normalized eigenvalue $\lambda/d$. The odd stage polynomial with gap $\delta_j=\phi_j/d$ approximates the target multiplier $\operatorname{sgn}(\lambda)\phi_j/(2|\lambda|)=\phi_j/(2\lambda)$ within its declared scalar error for $|\lambda|\ge\phi_j$. Diluting by $\phi_m/\phi_j$ gives the common ideal multiplier $1/(\alpha\lambda)$, where $\alpha=2/\phi_m$. By [F2], the actual QSVT block on $\widetilde A/d$ differs from the ideal transform of $A/d$ by at most $4D_j\sqrt{\epsilon_{{\rm BE},j}}$ plus the declared polynomial/phase errors; these are included in the per-stage compression budget $\eta_I$. The real-extraction success projector includes its control and all zero workspace. The finite SVD therefore gives the ideal supported target $Xb/\alpha$, with actual stage compression within $\eta_I$. Also $4\kappa\le\alpha<8\kappa$ (the endpoint inequalities may be replaced by non-strict upper bounds). [given, F1, F2, F7, algebra]

1.2 In the ideal comparison circuit, QPE at dyadic label size $M\ge64\pi/\phi$ estimates the eigenphase modulo $2\pi$. The exact Fourier kernel obeys $\Pr[d_{\rm circ}(y/M,\lambda/(2\pi))\ge a]\le1/[2(Ma-1)]$: indeed each label probability is at most $1/[4M^2d_{\rm circ}^2]$, since $|\sin(\pi u)|\ge2|u|$ for $|u|\le1/2$, and summing each of the two reciprocal-square tails uses $\sum_{s\ge R}s^{-2}\le1/(R-1)$. Taking $a=\phi/(4\pi)$ gives failure at most $1/30$. Circular phase error below $\phi/2$ places the unwrapped phase magnitude on the correct side of $3\phi/2$ for each of the two promises. Since $|\lambda|\le1<\pi$, this unwrapping is unambiguous on the good event. For $r_0$ independent coherent QPE copies on this eigenvector, the squared amplitudes of label strings factor. If $B$ counts incorrect comparisons, $\mathbb E[4^B]\le(11/10)^{r_0}$, hence $\Pr[B\ge r_0/2]\le(11/20)^{r_0}$. The declared odd $r_0\ge8\ln(1/\zeta^2)+8$ makes this at most $\zeta^2$. A reversible majority stores this decision without measurement, so the wrong-branch amplitude is at most $\zeta$. [F1, algebra]

1.3 For a simulator call at signed time $t$, differentiating $e^{-iA(t-s)}e^{-i\widetilde A s}$ and integrating from $0$ to $t$ gives $$\|e^{\pm iAt}-e^{\pm i\widetilde A t}\|_{\rm op}\le |t|\|A-\widetilde A\|_{\rm op}\le |t|\epsilon_{\rm val}.$$ Thus call site $q$ differs from the ideal $e^{\pm iAt_q}$ by at most $\xi_q+|t_q|\epsilon_{\rm val}$. Taking controlled direct sums or adjoints preserves that norm bound. By [F6] and the budget in [F7], each complete actual base list is within $\eta_S$ of its ideal-$A$ comparison on clean inputs, including arbitrary references; actual simulator work remains coherent. [F1, F6, F7, algebra]

2.1 For fixed supported $\lambda$, let $j_*$ be the first stage with $2\phi_{j_*}\le|\lambda|$. It exists by the chosen $m$, and $2^{j_*}\le4/|\lambda|$. Before stage $j_*-1$, the low-eigenphase promise holds, so stopping there has probability at most $\zeta^2$ per stage. At $j_*$ the high-eigenphase promise holds, so failing to stop has probability at most $\zeta^2$. The intermediate stage is unconstrained and either branch is allowed. Apart from a total probability at most $(m+1)\zeta^2\le2m\zeta^2$, all histories stop at $j_*-1$ or $j_*$, and satisfy $|\lambda|\ge\phi_j$ at their inverse stage. This is the full adjacent-stage ambiguity analysis; it makes no unique-estimate assumption. [step 1.2, algebra]

3.1 Correct histories stop by time $4H/|\lambda|$. Orthogonality of eigenvectors and histories gives ideal RMS square at most $16H^2\sum_k|c_k|^2/\lambda_k^2$, with wrong-history mass contributing at most $16H^2\kappa^2(2m\zeta^2)$. By step 1.3, the actual controlled simulations have total clean-input isometry difference at most $\eta_S$ on the base list, with a reference register; the diagonal stopping-time-squared observable on the orthogonal clock histories has norm at most $16H^2\kappa^2$. For unit vectors at distance at most $\eta_S$, the difference of its expectations is at most $2\eta_S$ times this norm, by expanding the two quadratic forms and applying the triangle inequality. Consequently $$T_{\rm av}^2\le16H^2x^2+16H^2\kappa^2(2m\zeta^2+2\eta_S)\le17H^2x^2,$$ using [F1]'s budgets and $x\ge1$. Thus $T_{\rm av}\le5Hx$, while $T_{\max}=H2^m\le4H\kappa\le2H\alpha$. The inverse stage occurs only after stopping, so its unsuccessful workspace does not affect any later stopping probability. [F1, F3, F6, step 1.1, step 2.1, algebra]

3.2 In the ideal-$A$ comparison circuit let the joint eigenvalue/history projection select first stops with $|\lambda|\ge\phi_j$. Its complement, including a final no-stop history, has mass at most $2m\zeta^2$ by step 2.1. On valid histories, compare the actual successful inverse compression with the common scalar $X/\alpha$; summing the stage errors conservatively gives $m\eta_I$. On the complement, the actual projected output has norm at most $\sqrt{2m}\zeta$ by contractivity, while the comparison vector produced by $A'Xb/\alpha$ has norm at most $(\kappa/\alpha)\sqrt{2m}\zeta\le\sqrt{2m}\zeta/2$. By step 1.3, simulation hybrids contribute at most $\eta_S$ for $A$ and at most $(\kappa/\alpha)\eta_S$ for the comparison circuit $A'$. Therefore, with all auxiliary inputs clean and internal $F=0$, $$\|\Pi_FAB|0\rangle-A'(|0\rangle_{F,\mathrm{work}}Xb/\alpha)\|\le m\eta_I+3\sqrt m\zeta+2\eta_S\le\frac{\varepsilon}{128\alpha}.$$ This compares projected output vectors and uses no full-space simulator bound. [F1, F2, F6, step 1.1, step 2.1, algebra]

4.1 Put $D=\varepsilon/(128\alpha)$. Step 3.2 gives $|\sqrt p-x/\alpha|\le D$, hence $p\ge x^2/(4\alpha^2)$ and $T_{\rm av}/\sqrt p\le10H\alpha$. Applying the actual unitary $(A')^\dagger$ preserves the vector error. For nonzero vectors $v,w$, the triangle inequality gives $\|v/\|v\|-w/\|w\|\|\le2\|v-w\|/\|w\|$; apply it with $\|w\|=x/\alpha\ge1/\alpha$ to obtain conditional output error at most $\varepsilon/64$. The external herald is copied or measured before this uncompute; the comparison internal flag is clean and any actual residual is included in the vector error. The preparation-work register $W_B$ was clean initially and is untouched by $A'$ and $(A')^\dagger$. Finally project all work, including $W_B$, onto zero as specified in [F1]. Before that test, the pure joint conditional vector is within $\varepsilon/64$ of target times clean work, so the test fails with probability at most $\varepsilon^2/4096\le\rho/4096$. Its successful normalized system vector is within $\varepsilon/32\le\epsilon$ of the desired vector by the same normalization inequality. [step 3.1, step 3.2, algebra]

5.1 Let $s_i$ be the original good-or-unfinished mass at interval $i$, defined by the algorithm's projector for $1\le i\le m$: the orthogonal union of branches with $F=1$, $T=0$, and first-stop clock word $C_1=\cdots=C_{j-1}=0,C_j=1$ for some $j\le i$ (later clock bits remain zero), and branches with $F=0$, $T=0$, and $C_1=\cdots=C_i=0$. Previously stopped bad branches and the terminal bad branch are excluded; since $T$ is set after stage $m$, the unfinished term is empty at $i=m$. It is at least $p$ because all future good mass lies in the unfinished branch; the clean $W_B$ factor does not change this mass. If the prior amplified selected mass is $r_{i-1}$, then the next sampler has $q_i=r_{i-1}s_i/s_{i-1}$. At the pre-stage index set $r_0=s_0=1$: preparation has run, every clock bit and $F,T$ is zero, and the entire state is unfinished. In particular $q_1=s_1\ge p$ and $r_0\ge1/(16n)$, establishing the induction base. Suppose inductively $r_{i-1}\ge1/(16n)$; then $q_i\ge p/(16n)\ge1/(64n\alpha^2)>p_{\min}$. On the estimator-good event, $\widehat q_i>1/(9n)$ gives the unamplified $r_i=q_i>(100/101)/(9n)>1/(16n)$, with loss one. If $0<\widehat q_i\le1/(9n)$, [F5] gives the same floor and the claimed multiplicative loss. A zero estimate or exhausted bounded crossing does not occur on this event. The induction proves every promised estimator floor and the final amplifier's lower bound $1/(18n)$. Fresh production after every classical construction transcript and ordinary amplification preserve the exact conditional good state of the actual sampler. [F3, F4, F5, step 4.1, algebra]

6.1 Step 3.1 and step 4.1 give precisely the source-scale RMS and success quantities: $T_{\rm av}^2=\widetilde O(d^2\sum_k|c_k|^2/\lambda_k^2)$, $\sqrt p=\widetilde\Theta(\alpha^{-1}(\sum_k|c_k|^2/\lambda_k^2)^{1/2})$ and $T_{\rm av}/\sqrt p=\widetilde O(d\kappa)$ when the actual quantum interval budget is $H=d\,\operatorname{poly}(\log(d\kappa/\epsilon),\log(1/\rho))$ (with the declared sparse/control/implementation overhead). Here the concrete chosen common normalization is $\alpha=O(\kappa)$; all supplied nonstandard costs remain in $H$. The original Fourier/table alternate mode retains its distinct charged construction and SELECT costs; its cost is not substituted for this efficient-mode estimate. [F1, step 3.1, step 3.2, step 4.1, step 5.1, algebra] ∎

