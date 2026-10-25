---
id: thm-pointwise-nelson-aalen-kaplan-meier-greenwood-limit
kind: theorem
title: Pointwise influence limit and Greenwood variance consistency
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-nelson-aalen-kaplan-meier-greenwood-estimators
  - def-event-time-observation-schemes
  - def-identically-distributed-and-iid-random-variables
  - def-counting-process-intensity-and-compensator-contract
  - def-progressively-measurable-and-predictable-process
  - thm-compensated-counting-process-brackets
  - def-l2-counting-process-integral
  - thm-l2-counting-process-integral-isometry
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - lem-uniform-right-censoring-risk-set-convergence
  - thm-iid-terminal-influence-limit
  - thm-first-and-second-order-delta-method-for-random-vectors
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 12: 1-Sample Problem: General Asymptotic Results, PDF pp. 5–10 and 12–14"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-onesample.pdf"
    - title: "Lu Tian, STAT331 Unit 3: Kaplan-Meier (KM) Estimator, PDF pp. 11–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit5.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §4.2.2, PDF pp. 33–38"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"

---

## Statement

Assume the Axiom of Choice. Fix $t>0$ and, for each positive integer sample size $n$, observe IID subject pairs $(T_i,C_i)$, with $T_i>0$ almost surely, $T_i$ independent of $C_i$, and $T_i$ having an absolutely continuous law on $[0,t]$ with density $f$. Write $S(u)=P(T_i>u)>0$, $G(u)=P(C_i\ge u)>0$, and take a finite nonnegative Borel version of $\lambda(u)=f(u)/S(u)$. Put $s_0(u)=E[Y_i(u)]=P(U_i\ge u)=S(u)G(u)$ for $0\le u\le t$. Assume $\int_0^t\lambda(u)/s_0(u)\,du<\infty$. In a common filtration, assume each $Y_i$ is predictable and each $M_i=N_i-A_i$, where $A_i(v)=\int_0^vY_i(u)\lambda(u)\,du$, satisfies the finite-horizon square-integrable counting-process contract. This compensator is a model assumption; a displayed hazard alone is not an existence theorem. Put $\Lambda(t)=\int_0^t\lambda(u)\,du=-\log S(t)$ and $\sigma^2(t)=\int_0^t\lambda(u)/s_0(u)\,du$. Then, with $\phi_i^\Lambda(t)=\int_0^t s_0(u)^{-1}\,dM_i(u)$ and $\phi_i^S(t)=-S(t)\phi_i^\Lambda(t)$,
$$\sqrt n\{\widehat\Lambda_n(t)-\Lambda(t)\}=n^{-1/2}\sum_{i=1}^n\phi_i^\Lambda(t)+o_P(1),\qquad \sqrt n\{\widehat S_n(t)-S(t)\}=n^{-1/2}\sum_{i=1}^n\phi_i^S(t)+o_P(1).$$
The terminal normal limit is $\sqrt n\{\widehat S_n(t)-S(t)\}\Rightarrow N(0,S(t)^2\sigma^2(t))$. Let $\widehat V_G^\circ(t)$ equal Greenwood's formula on its positive-denominator domain and $0$ elsewhere; then $n\widehat V_G^\circ(t)\to_P S(t)^2\sigma^2(t)=\operatorname{Var}(\phi_i^S(t))$. The extension only defines the sequence on all samples for the convergence statement; it assigns no Greenwood variance interpretation outside the positive-denominator domain. These are fixed-time results; no process convergence or confidence-band conclusion is asserted. Greenwood is not an exact finite-sample variance identity.

## Facts & Assumptions

**Given:** The hypotheses and definitions in the statement, the right-censoring observation scheme, the finite-horizon counting-process model contract, and the Nelson–Aalen, Kaplan–Meier, and Greenwood formulas. Prove the two influence expansions, the terminal normal limit, and Greenwood consistency.

[A1] Assume the Axiom of Choice (AC), inherited through the counting-process integration and IID terminal-limit suppliers. ([[def-axiom-of-choice]])

[F1] Right-censoring records $U_i=\min(T_i,C_i)$ and $\delta_i=\mathbf 1\{T_i\le C_i\}$; event ties are recorded as events. ([[def-event-time-observation-schemes]])

[F2] $Y_i(u)=\mathbf 1\{U_i\ge u\}$, $N_i(u)=\mathbf 1\{U_i\le u,\delta_i=1\}$, $\widehat\Lambda_n(t)=\int_{[0,t]}\frac{\mathbf 1\{Y_n(u)>0\}}{Y_n(u)}\,dN_n$, with the integrand set to zero when $Y_n(u)=0$, $\widehat S_n(t)=\prod_{0\le u\le t:\Delta N_n(u)>0}(1-\Delta N_n(u)/Y_n(u))$, and Greenwood's formula is defined only when its event denominators are positive. Since $T_i>0$ almost surely, there is no event at zero under these hypotheses. ([[def-nelson-aalen-kaplan-meier-greenwood-estimators]])

[F3] The subject records are IID with a common law and mutual independence across subjects. ([[def-identically-distributed-and-iid-random-variables]])

[F4] Under the counting-process contract, $A_i$ is continuous predictable with $E[A_i(t)]<\infty$, and $M_i=N_i-A_i$ is a square-integrable martingale; an intensity display alone supplies no existence theorem. ([[def-counting-process-intensity-and-compensator-contract]])

[F5] For a compensated simple counting process, $M^2-A$ is a martingale and $\langle M\rangle=A$. ([[thm-compensated-counting-process-brackets]])

[F6] The L² counting-process integral is defined by completion for predictable $H$ with $E\int_0^tH^2\,dA<\infty$. ([[def-l2-counting-process-integral]])

[F7] On this finite-energy domain the integral is a square-integrable martingale and satisfies $E(\int_0^tH\,dM)^2=E\int_0^tH^2\,dA$. ([[thm-l2-counting-process-integral-isometry]])

[F8] $\bar Y_n(u)=n^{-1}\sum_i\mathbf 1\{U_i\ge u\}$ converges uniformly in probability to $s_0(u)$ on $[0,t]$, and its expected squared uniform error tends to zero. ([[lem-uniform-right-censoring-risk-set-convergence]])

[F9] If IID subjects have a centered square-integrable measurable influence function and an already-proved $o_P(n^{-1/2})$ expansion remainder, the estimator has the corresponding terminal normal limit; the theorem assumes and does not prove the expansion. ([[thm-iid-terminal-influence-limit]])

[F10] If $\sqrt n(T_n-\theta)\Rightarrow Z$ and $g$ is differentiable at $\theta$, then $\sqrt n\{g(T_n)-g(\theta)\}\Rightarrow g'(\theta)Z$ in the scalar case. ([[thm-first-and-second-order-delta-method-for-random-vectors]])

[F11] Predictability is measurability for the predictable sigma-algebra; Borel transformations of predictable processes and deterministic Borel time functions remain predictable. ([[def-progressively-measurable-and-predictable-process]])

[F12] For a nonnegative product-measurable function on a sigma-finite product, Tonelli permits integration in either order. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F13] Pointwise convergence under an integrable majorant gives convergence of integrals. ([[thm-dominated-convergence]])

## Proof

1.1 Independence within a subject gives $s_0(u)=P(T_i\ge u,C_i\ge u)=S(u)G(u)$. On $[0,t]$, $s_0(u)\ge c:=S(t)G(t)>0$. Since $S$ is absolutely continuous and $S'(u)=-f(u)=-\lambda(u)S(u)$ almost everywhere, integration of $(\log S)'=-\lambda$ gives $\Lambda(t)=-\log S(t)$. The assumed integral makes $\sigma^2(t)$ finite and also gives $\int_0^t\lambda(u)\,du<\infty$. [given, algebra]

1.2 For each finite $n$, event times have no ties in $(0,t]$ almost surely: for $i\ne j$, subject independence and the absolutely continuous law on $[0,t]$ give $P(T_i=T_j\le t)=0$, and there are finitely many pairs. Thus $N_n=\sum_iN_i$ is a simple counting process. Set $Y_n=\sum_iY_i$, $A_n=\sum_iA_i=\int_0^{\cdot}Y_n(u)\lambda(u)\,du$, and $M_n=\sum_iM_i=N_n-A_n$. Finite sums preserve the martingale property and square integrability; [F4] gives $E[A_n(t)]=\sum_iE[A_i(t)]<\infty$. The process $J_n=\mathbf 1\{Y_n>0\}$ is predictable, and so is $\eta_n=Y_n\lambda$ by [F11]; both meet [F4]'s domain, with $A_n=\int_0^{\cdot}J_n(u)\eta_n(u)\,du$. Hence the pooled process also satisfies the finite-horizon contract. By [F5], its predictable bracket is $A_n$. [A1, F1, F2, F3, F4, F5, F11, given, algebra]

2.1 We will identify the completed integrals with pathwise finite-variation integrals for every bounded predictable integrand $H$ used below. The paths of $Y_i$ and $\bar Y_n$ are left-continuous on $(0,t]$, and $s_0(u)=P(U_i\ge u)$ is left-continuous there by continuity of probabilities along decreasing events. Consequently $s_0^{-1}$, the floored reciprocal $b_n$, its difference $H_n$, and the floored product reciprocal $q_n$ below all have bounded left-continuous paths, with a deterministic bound for each fixed $n$. On deterministic partitions with mesh tending to zero, take the left-step approximants $H^{(m)}(u)=H(t_j)$ on $(t_j,t_{j+1}]$ and set their time-zero value to zero. They are elementary predictable integrands, converge pointwise to $H$ at every $u>0$, and retain the bound. For any subject or pooled contract, [F13] for the finite compensator measure $E\,dA$ gives $E\int_0^t|H^{(m)}-H|^2dA\to0$, and [F7] gives convergence of their elementary integrals to the completed integral in $L^2(P)$. The paths of $M=N-A$ have finite variation; [F13] applied pathwise to its finite variation measure gives convergence of the same elementary sums to $\int_{(0,t]}H\,dN-\int_0^tH\,dA$. Uniqueness of limits in probability identifies these two limits almost surely at the fixed time. The time-zero convention is immaterial because $N_0=A_0=0$ and $A$ is continuous. This proves the pathwise identities needed below without assuming a general semimartingale integration theorem. [F1, F2, F4, F6, F7, F11, F13, step 1.1, step 1.2, construct]

2.2 Write $\bar Y_n=Y_n/n$. By [F8], $E[\sup_{u\le t}|\bar Y_n(u)-s_0(u)|^2]\to0$. Let $b_n(u)=1/\max(\bar Y_n(u),c/2)$ and $H_n(u)=b_n(u)-1/s_0(u)$. These are bounded predictable processes: $\bar Y_n$ is predictable by [F4], and Borel transformations preserve predictability by [F11]. The reciprocal map with floor $c/2$ is $4/c^2$-Lipschitz, so $E[\sup_{u\le t}|H_n(u)|^2]\to0$. [F2, F4, F8, F11, step 1.1, algebra]

3.1 The energy of $H_n$ for $M_n$ is finite because $H_n$ is bounded and $E[A_n(t)]<\infty$. Applying [F7] to the pooled contract gives $E|n^{-1/2}\int_0^tH_n\,dM_n|^2=n^{-1}E\int_0^tH_n^2\,dA_n=E\int_0^tH_n^2\bar Y_n\lambda\,du\le (\int_0^t\lambda\,du)E[\sup_{u\le t}|H_n(u)|^2]\to0$. Thus this stochastic-integral remainder is $o_P(1)$. On the event $E_n=\{\sup_{u\le t}|\bar Y_n(u)-s_0(u)|<c/2\}$, whose probability tends to one by [F8], $Y_n(u)>0$ throughout and $b_n=1/\bar Y_n$. By the pathwise identification in step 2.1, $d\bar N_n=\bar Y_n\lambda\,du+d\bar M_n$ gives there $\sqrt n(\widehat\Lambda_n-\Lambda)=n^{-1/2}\int_0^t b_n\,dM_n$. For each bounded predictable step integrand, the finite-sum definition in [F6] makes the integral against $M_n=\sum_iM_i$ equal to the sum of the subject integrals. Approximate $s_0^{-1}$ in the pooled compensator energy by such steps; [F7] gives L² convergence, and $dA_i\le dA_n$ lets the same approximants converge for each of the finitely many subjects. Since $s_0^{-1}$ is a deterministic Borel time function, it is predictable by [F11]. Passing the finite-sum identity to these L² limits yields $\sqrt n(\widehat\Lambda_n-\Lambda)=n^{-1/2}\sum_{i=1}^n\int_0^t s_0^{-1}\,dM_i+o_P(1)$. [F2, F6, F7, F8, F11, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

4.1 For one subject, step 2.1 identifies the integral in step 3.1 as $\phi_i^\Lambda(t)=\mathbf 1\{\delta_i=1,U_i\le t\}/s_0(U_i)-\int_0^{U_i\wedge t}\lambda(u)/s_0(u)\,du$, so it is a measurable function of $(T_i,C_i)$. It has mean zero by the martingale property and, by [F7] and Tonelli [F12], variance $E\int_0^t s_0(u)^{-2}\,dA_i(u)=\int_0^t s_0(u)^{-2}E[Y_i(u)]\lambda(u)\,du=\int_0^t\lambda(u)/s_0(u)\,du=\sigma^2(t)$. The integrand is nonnegative and product-measurable because $Y_i$ is predictable and $s_0^{-2}\lambda$ is a deterministic Borel function. Hence these influence variables are IID and square-integrable. The normalized IID sum is bounded in probability by its fixed second moment, so step 3.1 gives a separately established expansion with $o_P(n^{-1/2})$ remainder. Applying [F9] proves $\sqrt n(\widehat\Lambda_n-\Lambda)\Rightarrow N(0,\sigma^2(t))$. [A1, F1, F2, F3, F4, F7, F9, F11, F12, step 2.1, step 3.1, algebra]

5.1 On $E_n$, for all sufficiently large $n$, every event jump has size $x=1/Y_n(u)\le2/(nc)\le1/2$. For $0\le x\le1/2$, the power series for $-\log(1-x)-x$ gives $|\log(1-x)+x|\le x^2$. There are at most $n$ event jumps, so $|\log\widehat S_n(t)+\widehat\Lambda_n(t)|\le4/(nc^2)$. Consequently $\sqrt n\{\widehat S_n-e^{-\widehat\Lambda_n}\}\to_P0$. Step 4.1 also gives $\widehat\Lambda_n-\Lambda=O_P(n^{-1/2})$; Taylor's formula for $e^{-x}$ on $[0,\infty)$ then yields $\sqrt n(\widehat S_n-S)=-S(t)n^{-1/2}\sum_i\phi_i^\Lambda(t)+o_P(1)$. Taking $g(x)=e^{-x}$ and derivative $g'(\Lambda)=-S(t)$ in [F10] transfers the terminal normal limit, giving $N(0,S(t)^2\sigma^2(t))$. [F2, F10, step 3.1, step 4.1, algebra]

6.1 For sufficiently large $n$, define the bounded predictable $q_n(u)=[\max(\bar Y_n(u),c/2)\max(\bar Y_n(u)-1/n,c/4)]^{-1}$. On $E_n$, $\Delta N_n(u)=1$ at event times and $q_n(u)=1/[\bar Y_n(u)(\bar Y_n(u)-1/n)]$, so $n\sum_{u\le t}\Delta N_n(u)/[Y_n(u)(Y_n(u)-\Delta N_n(u))]=\int_0^tq_n\,d\bar N_n$. The uniform convergence in [F8] implies $q_n\bar Y_n\to1/s_0$ uniformly in probability, while $q_n$ is uniformly bounded. Using step 2.1, decompose $\int q_n\,d\bar N_n=\int q_n\bar Y_n\lambda\,du+n^{-1}\int q_n\,dM_n$. The first term tends to $\sigma^2(t)$ by boundedness and $\int\lambda<\infty$; by [F3]–[F4] the second has second moment at most $n^{-1}(8/c^2)^2E[A_1(t)]$, which tends to zero. Therefore the scaled Greenwood sum tends to $\sigma^2(t)$, and $\widehat S_n(t)^2\to_P S(t)^2$ by step 5.1. Since $P(E_n)\to1$ and Greenwood's formula is defined on $E_n$ for large $n$, the zero extension agrees with the formula on an event whose probability tends to one. It follows that $n\widehat V_G^\circ(t)\to_P S(t)^2\sigma^2(t)$, which equals $\operatorname{Var}(\phi_i^S(t))$ by step 4.1. This is a first-order variance estimate, not a finite-sample identity. [F2, F3, F4, F7, F8, F11, step 1.1, step 1.2, step 2.1, step 4.1, step 5.1, algebra] ∎
