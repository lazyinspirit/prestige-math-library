---
id: thm-qa-13-iterative-likelihood-query-count
kind: theorem
title: "Exact query count for the finite-grid iterative estimator"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-13-iterative-likelihood-amplitude-estimation
  - def-qa-12-prepared-success-subspace
  - def-qa-quantum-query-complexity
  - def-qa-13-amplitude-estimation-task
  - alg-qa-12-amplitude-amplification
  - lem-qa-13-grover-eigenphase-relation
  - def-qc-projective-measurement
  - def-qa-quantum-query-algorithm
  - lem-qa-13-real-cyclotomic-comparison
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-double-angle-and-power-reduction-identities
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Suzuki et al., Amplitude estimation without phase estimation, complete article, §§2–3.2"
      url: "https://arxiv.org/pdf/1904.10246"
---
## Statement

Across the finite-grid schedule with $K\ge1$ and $S\ge1$, forward $A$ calls equal $S\sum_{k=0}^K(m_k+1)$, inverse $A^*$ calls equal $S\sum_{k=0}^K m_k$, and both zero-input reflections and good-predicate reflections equal $S\sum_{k=0}^K m_k$. Thus the total number of $A/A^*$ calls is $S\sum_{k=0}^K(2m_k+1)=S(1+\sum_{k=1}^K(2^k+1))=O(S2^K)$. This count gives no finite-sample success guarantee.

For all integers $K,S,J\ge1$, the finite-grid procedure terminates and returns a uniquely determined exact algebraic output under its least-label tie rule. Its displayed factors are the Bernoulli likelihood factors of the prescribed independent shots; no finite-sample accuracy guarantee is asserted.

## Facts & Assumptions

**Given:** The finite-grid iterative schedule and its explicitly supplied and charged prepared-success-subspace access contract.

[F1] Stage $k$ has $S$ shots and uses $m_k$ Grover iterates after one fresh $A$ preparation ([[alg-qa-13-iterative-likelihood-amplitude-estimation]]).

[F2] The signed iterate is $Q=-AS_0A^*S_{\rm good}$, and the matching prepared-success-subspace contract supplies and charges one call to each of $A,A^*,S_0,S_{\rm good}$ per uncontrolled iterate ([[def-qa-13-amplitude-estimation-task]], [[def-qa-12-prepared-success-subspace]]).

[F3] The query model counts these oracle uses separately from ordinary gates ([[def-qa-quantum-query-complexity]]).

[F21] The Grover iterate rotates the prepared state so that after $m$ iterates its good probability is $\sin^2((2m+1)\theta)$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F22] The measurement outcomes are the two orthogonal good/bad projections ([[def-qc-projective-measurement]]).

[F23] The real likelihood values are finite cyclotomic algebraic numbers and admit terminating exact comparisons ([[lem-qa-13-real-cyclotomic-comparison]]).

[F24] Each oracle/state-preparation call is an explicit query resource ([[def-qa-quantum-query-algorithm]]).

[F25] The fixed-count amplification procedure applies exactly the declared number of signed $Q$ iterates and then the good/bad projective instrument, with no controlled-$A$ call ([[alg-qa-12-amplitude-amplification]]).

[F26] The complex exponential is additive, and its kernel is $2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F27] For real $x$, $e^{ix}=\cos x+i\sin x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F28] Sine is odd and cosine is even ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F29] $\sin^2 x=(1-\cos(2x))/2$ and $\cos^2 x=(1+\cos(2x))/2$ ([[thm-double-angle-and-power-reduction-identities]]).

## Proof


1.1 Suppose first that $0<a<1$, so the normalized vectors $B,G$ are defined. Inductively applying the rotation matrix from [F21] to $\cos\theta B+\sin\theta G$ gives $Q^{m_k}\psi=\cos((2m_k+1)\theta)B+\sin((2m_k+1)\theta)G$. Its good projection therefore has squared norm $\sin^2((2m_k+1)\theta)$, so the listed good/bad measurement has the Bernoulli likelihood factors displayed in the definition. [given, F21, F22, algebra]

1.2 If $a=0$, then $\Pi_{\rm good}\psi=0$ and $\theta=0$. The endpoint clause of [F21]’s supplier gives $Q\psi=\psi$, hence $Q^{m_k}\psi=\psi$ for every $m_k\ge0$, including $m_0=0$. The good/bad probabilities are therefore $0$ and $1$, equal to $\sin^2((2m_k+1)0)$ and $\cos^2((2m_k+1)0)$. Almost surely every $h_k=0$; any record with a good outcome has probability zero under this endpoint model. The displayed Bernoulli factors give exactly these probabilities: a positive good exponent gives a zero factor, while the prescribed zero-exponent convention makes $0^0=1$ when no good outcome occurs. No normalized good vector or conditional state on a zero-probability outcome is used. [given, F21, F22, algebra]

1.3 Set $s=2J$ and $\zeta_s=e^{2\pi i/s}$. For each $k,j$, use the residues $r_{kj},r'_{kj}$ in the algorithm's polynomial factors and put $\alpha=(2m_k+1)\theta_j$. By [F26], $\zeta_s^{r_{kj}}=e^{2i\alpha}$ and $\zeta_s^{r'_{kj}}=e^{-2i\alpha}$; [F27]–[F28] give their sum as $2\cos(2\alpha)$. Therefore [F29] gives $U_{kj}(\zeta_s)=\sin^2\alpha$ and $V_{kj}(\zeta_s)=\cos^2\alpha$. It follows that $P_j(\zeta_s)=L_j$ for each $j$. The comparison procedure [F23] decides every pair exactly, including equality; the nonempty finite set $\{0,\ldots,J\}$ therefore has a maximizing label, and the least-label tie rule determines a unique output, including when all $L_j=0$ (then the chosen label is $j=0$). Its output polynomial $E_{\widehat j}(\zeta_s)$ is exactly $\sin^2\theta_{\widehat j}$ by the same identity. [given, F23, F26, F27, F28, F29, algebra]

1.4 A shot in stage $k$ uses one initial $A$ and then $m_k$ iterates. Each iterate contributes one more $A$, one $A^*$, one zero-input reflection, and one good reflection by [F2]. Therefore the per-stage counts are respectively $S(m_k+1)$, $Sm_k$, $Sm_k$, and $Sm_k$. [given, F1, F2, algebra]

2.1 If $a=1$, orthogonality gives $\|(I-\Pi_{\rm good})\psi\|^2=1-a=0$, so $\Pi_{\rm good}\psi=\psi$ and $\theta=\pi/2$. The other endpoint clause of [F21]’s supplier gives $Q\psi=-\psi$, hence $Q^{m_k}\psi=(-1)^{m_k}\psi$ for every $m_k\ge0$, including $m_0=0$. Its good/bad probabilities are $1$ and $0$, agreeing with $\sin^2((2m_k+1)\pi/2)=1$ and $\cos^2((2m_k+1)\pi/2)=0$. Almost surely every $h_k=S$; a record containing a bad outcome has probability zero under this model. The bad factor is zero exactly when its exponent is positive, and the same $0^0=1$ convention applies when no bad outcome occurs. No normalized bad vector or conditional state on a zero-probability outcome is used. Together with step 1.1, these cases establish the claimed Bernoulli likelihood factors on the whole task domain. [given, F21, F22, step 1.1, algebra]

2.2 Summing over $k=0,\ldots,K$ gives the first four formulas. Since $m_0=0$ and $m_k=2^{k-1}$ for $k\ge1$, $2m_k+1=2^k+1$ for $k\ge1$, yielding the stated total. The geometric sum is $O(2^K)$, so the total is $O(S2^K)$. [F1, F3, step 1.4, algebra]

3.1 Every stage has finitely many shots and iterates because $K,S$ are finite. Fresh state preparations and measurements are part of the instructions, so no controlled $Q$ or QFT call is used. The likelihood selection is finite by step 1.3, but this argument establishes neither a sample-size error bound nor an $\epsilon,\delta$ guarantee. [given, F24, F25, step 1.1, step 1.2, step 2.1, step 1.3]

4.1 The call totals established in step 1.4 and step 2.2 only tally explicitly invoked queries. By [F1], the analyzed procedure is a finite-grid likelihood schedule with no finite-sample success guarantee; [F3] counts its declared query actions but supplies no probability or approximation-error bound. Thus this resource count establishes no success theorem. [given, F1, F3, step 1.4, step 2.2] ∎

