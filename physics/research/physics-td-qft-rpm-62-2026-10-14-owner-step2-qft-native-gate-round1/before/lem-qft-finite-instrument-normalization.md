---
id: lem-qft-finite-instrument-normalization
kind: lemma
domain: mathematics
title: Finite bounded instruments normalize measurement probabilities
status: draft
origin: pipeline
dependency_level: 1
deps: [def-countable-choice, def-qft-finite-bounded-kraus-instrument, def-self-adjoint-positive-unitary-and-normal-operator, def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-rank-one-operator-calculus, thm-hilbert-adjoint-properties, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-finite-bounded-kraus-instrument: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Watrous, The Theory of Quantum Information (Cambridge University Press, 2018; author-hosted pre-publication manuscript), §2.3.1 pp. 100–102 and §2.3.2 pp. 111–113"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "R. B. Griffiths, Notes on Quantum Information Theory, version 30 Jan. 2004, §7 pp. 1–3, equations (7.2)–(7.9)"
      url: "https://www.andrew.cmu.edu/course/33-658/qit7.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $H$ carry a normalized finite bounded Kraus instrument datum as defined in [[def-qft-finite-bounded-kraus-instrument]], and let $\rho$ be a density operator on $H$: a self-adjoint positive trace-class operator with $\operatorname{tr}\rho=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]], [[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]). For each outcome $a$, put $p_a:=\operatorname{tr}(\mathcal J_a(\rho))$. Then each $E_a$ is an effect ($E_a\ge0$ and $I_H-E_a\ge0$), each $\mathcal J_a(\rho)$ is positive trace class, and

$$p_a=\operatorname{tr}(\mathcal J_a(\rho))=\operatorname{tr}(\rho E_a)\in[0,1],\qquad \sum_{a=1}^{m}p_a=1.$$

The nonselective output $\sum_a\mathcal J_a(\rho)$ is a density operator. If $p_a>0$, the normalized conditional state $\rho_a:=\mathcal J_a(\rho)/p_a$ is a density operator; when $p_a=0$, this normalized update is undefined. For a unit vector $\psi\in H$, the rank-one density operator $\rho=T_{\psi,\psi}$ has outcome probability $p_a=\sum_{r=1}^{q_a}\|M_{a,r}\psi\|^2$. These are conditional mathematical identities; they do not assert that an apparatus realizes the instrument or supply a physical measurement postulate.

## Facts & Assumptions

**Given:** Countable Choice; a nonzero complex Hilbert space $H$; a normalized finite bounded Kraus instrument datum $(M_{a,r})$; and a density operator $\rho$ on $H$.

[A1] Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) is assumed for the adjoint and trace-class definitions and suppliers, and for the density expansion [F1]. No stronger choice principle is invoked.

[L1] [[def-qft-finite-bounded-kraus-instrument]]: the outcome operators are $E_a=\sum_rM_{a,r}^*M_{a,r}$, the maps are $\mathcal J_a(X)=\sum_rM_{a,r}XM_{a,r}^*$, and normalization means $\sum_{a,r}M_{a,r}^*M_{a,r}=I_H$. The adjoint obeys $\langle Mx,y\rangle=\langle x,M^*y\rangle$.

[F1] [[lem-nrqm-composites-density-and-scalar-spectral-probability]]: under Countable Choice, a density operator is self-adjoint, positive and trace class with trace one, and has a trace-norm convergent expansion $\rho=\sum_jw_jT_{u_j,u_j}$ with $(u_j)$ orthonormal, $w_j\ge0$ and $\sum_jw_j=1$. We use statement (a); its separate statement (c) is not used.

[F2] [[lem-nrqm-composites-nuclear-bounded-cyclicity]]: under Countable Choice, bounded multiplication of a nuclear representation gives trace-norm-convergent series for $BT$ and $TB$, with $\operatorname{tr}(BT)=\sum_j\langle Bu_j,v_j\rangle$, $\operatorname{tr}(TB)=\sum_j\langle u_j,B^*v_j\rangle$, absolute convergence, and $\operatorname{tr}(BT)=\operatorname{tr}(TB)$. No unbounded factor is cyclically permuted.

[F3] [[lem-nrqm-composites-rank-one-operator-calculus]]: $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\|T_{u,v}\|_1=\|u\|\,\|v\|$ and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$; $T_{x,x}$ is self-adjoint and positive.

[F4] [[lem-nrqm-composites-rank-one-operator-calculus]]: for bounded $B$, $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^*v}$.

[F5] [[def-trace-class-operator]]: a trace-class operator is in $\mathcal B(H)$ and has finite trace norm. [[def-trace-of-a-trace-class-operator]] defines the trace relative to a supplied Hilbert basis. [[thm-trace-is-absolutely-convergent-and-basis-independent]] proves basis independence, linearity and $|\operatorname{tr}T|\le\|T\|_1$, hence continuity in trace norm.

[F6] [[def-self-adjoint-positive-unitary-and-normal-operator]]: positivity means that the quadratic-form values $\langle Tx,x\rangle$ are real and nonnegative; self-adjointness is the separate identity $T^*=T$.

[F7] [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: under Countable Choice, if $T$ is trace class and $A,B$ are bounded, then $ATB$ is trace class and $\|ATB\|_1\le\|A\|\,\|T\|_1\,\|B\|$.

[F8] [[thm-hilbert-adjoint-properties]]: under $\mathrm{AC}_\omega$, the Hilbert adjoint of every bounded operator $M$ is bounded, $\|M^*\|=\|M\|$, and $M^{**}=M$.

## Proof

1.1 For each $a,r$, $M_{a,r}^*M_{a,r}$ is bounded by [F8]. Also [F8] gives $M_{a,r}^{**}=M_{a,r}$, so $\langle M_{a,r}^*M_{a,r}x,y\rangle=\langle M_{a,r}x,M_{a,r}^{**}y\rangle=\langle M_{a,r}x,M_{a,r}y\rangle=\langle x,M_{a,r}^*M_{a,r}y\rangle$; hence it is self-adjoint. Its quadratic form is $\|M_{a,r}x\|^2\ge0$. Hence $E_a\ge0$. Normalization gives $I_H-E_a=\sum_{b\ne a}\sum_rM_{b,r}^*M_{b,r}\ge0$, including empty sums, so $E_a$ is an effect. [given, L1, F6, F8, algebra]

1.2 By [F8], each $M_{a,r}^*$ is bounded, so [F7] makes $M_{a,r}\rho M_{a,r}^*$ trace class; the finite sum $\mathcal J_a(\rho)$ is trace class. By [F8], $M_{a,r}^{**}=M_{a,r}$, and for all $x,y\in H$,
$\langle M_{a,r}\rho M_{a,r}^*x,y\rangle=\langle\rho M_{a,r}^*x,M_{a,r}^*y\rangle=\langle M_{a,r}^*x,\rho M_{a,r}^*y\rangle=\langle x,M_{a,r}^{**}\rho M_{a,r}^*y\rangle=\langle x,M_{a,r}\rho M_{a,r}^*y\rangle$,
where the first equality uses the adjoint identity for $M_{a,r}$, the second uses $\rho=\rho^*$, and the fourth uses the adjoint identity for $M_{a,r}^*$. Also $\langle M_{a,r}\rho M_{a,r}^*x,x\rangle=\langle\rho M_{a,r}^*x,M_{a,r}^*x\rangle\ge0$. Finite summation shows $\mathcal J_a(\rho)$ is self-adjoint and positive. [given, A1, L1, F1, F6, F7, F8, algebra]

2.1 By [F1], write $\rho=\sum_jw_jT_{u_j,u_j}$ in trace norm. For its partial sums $\rho_N=\sum_{j\le N}w_jT_{u_j,u_j}$, [F8] gives $\|M_{a,r}^*\|=\|M_{a,r}\|<\infty$, so [F7] gives $\|M_{a,r}(\rho-\rho_N)M_{a,r}^*\|_1\le\|M_{a,r}\|\,\|\rho-\rho_N\|_1\,\|M_{a,r}^*\|\to0$. Thus [F4] gives $\mathcal J_a(\rho)=\sum_{r,j}w_jT_{M_{a,r}u_j,M_{a,r}u_j}$ in trace norm; the trace-norm sum is finite since $\sum_jw_j\|M_{a,r}u_j\|^2\le\|M_{a,r}\|^2\sum_jw_j=\|M_{a,r}\|^2$ for each $r$. Trace continuity [F5] and [F3] yield $p_a=\sum_{r,j}w_j\|M_{a,r}u_j\|^2\ge0$. Cyclicity [F2] gives $p_a=\sum_r\operatorname{tr}(\rho M_{a,r}^*M_{a,r})=\operatorname{tr}(\rho E_a)$. [given, A1, L1, F1, F2, F3, F4, F5, F7, F8, step 1.2, algebra]

3.1 Because the outcome and Kraus index sets are finite, [F1] and step 2.1 give $\sum_ap_a=\sum_jw_j\langle(\sum_{a,r}M_{a,r}^*M_{a,r})u_j,u_j\rangle=\sum_jw_j\|u_j\|^2=1$ by normalization. Since every $p_a\ge0$, this also gives $p_a\le1$ for every $a$. [given, A1, L1, F1, step 2.1, algebra]

4.1 If $p_a>0$, step 1.2 gives a positive trace-class numerator $\mathcal J_a(\rho)$ and step 2.1 gives its trace $p_a$, so $\rho_a=\mathcal J_a(\rho)/p_a$ is positive trace class with trace one, hence a density operator by [F1]. The finite sum $\sum_a\mathcal J_a(\rho)$ is likewise positive trace class, and its trace is $\sum_ap_a=1$ by step 3.1, so it is a density operator. If $p_a=0$, division by $p_a$ is undefined and no normalized update is asserted. [given, A1, L1, step 1.2, step 2.1, step 3.1, F1, F5, algebra]

5.1 For a unit vector $\psi$, [F3] gives that $T_{\psi,\psi}$ is self-adjoint, positive and trace class with trace $\|\psi\|^2=1$, hence a density operator by [F1]. Also [F4] gives $M_{a,r}T_{\psi,\psi}M_{a,r}^*=T_{M_{a,r}\psi,M_{a,r}\psi}$. Taking traces and summing over the finite Kraus list yields $p_a=\sum_r\|M_{a,r}\psi\|^2$, as claimed. [given, L1, F1, F3, F4, step 2.1, algebra] ∎
