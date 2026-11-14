---
id: pthm-qec-distinguishability-four-kraus-weights
kind: physics-theorem
domain: physics
title: Decay Kraus weights and photon overlap
status: draft
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - def-qec-prereq-finite-operator-conventions
  - pthm-qec-distinguishability-four-kraus
  - pthm-qec-distinguishability-decayed-coherence
  - lem-qec-prereq-two-path-gram-spectrum
  - math:def-gram-matrix-and-gram-determinant
  - math:def-trace-of-a-square-matrix
  - lem-qec-prereq-finite-taylor-control
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  pthm-qec-distinguishability-four-kraus: physical-result
  pthm-qec-distinguishability-decayed-coherence: physical-result
  lem-qec-prereq-two-path-gram-spectrum: mathematical-premise
  math:def-gram-matrix-and-gram-determinant: mathematical-premise
  math:def-trace-of-a-square-matrix: mathematical-premise
  lem-qec-prereq-finite-taylor-control: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 7, paragraph before Fig. 5 and upper right paragraph
      statement: The article states the two decay Kraus weights, their smaller-weight
        fraction and its short- and long-time expressions, and interprets the
        coherence modulus as photon-state overlap.
      hypotheses: The article's idealized four-level decay model, with the conditional
        decay branch defined when its probability is positive.
      reading_limits: The supplied article text at PDF p. 7 was read for attribution.
        The local argument below derives the weight and limit formulas from the
        stated suppliers; the citation is not used as their proof.
physical_scope: Conditional predictions of the postulated four-level model; the
  photon interpretation additionally assumes the stated environmental
  realization and is not a measured observation.
dependency_level: 4
---

## Statement

Assume the four-level model with fixed real $\omega_0,\Delta$, fixed $\gamma>0$, and $t>0$. Let $K_2,K_3$ be the model's decay Kraus operators, $p=1-e^{-\gamma t}$, and $\chi=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$ as its conditional decay coherence. Define the weight of an operator as $w_j=\operatorname{Tr}(K_j^\dagger K_j)$. Then $w_{2,3}=p(1\pm|\chi|)$, with the upper sign for $K_2$. The fraction of the sum of the two decay weights carried by $K_3$ is $(1-|\chi|)/2$. For fixed $\gamma,\Delta$, as $t\downarrow0$ this fraction is $\Delta^2t^2/48+O(t^3)$, and as $t\to\infty$ it tends to $[1-\gamma/\sqrt{\gamma^2+\Delta^2}]/2$.

The two operators are respectively the sum and difference of the two decay-path operators after a relative phase adjustment, as represented by the signs in Fig. 5. In an environmental realization in which the normalized emitted-photon path states have overlap $\chi$ in the convention below, their overlap modulus is $|\chi|$. The reduced-system model alone does not identify a unique measured photon state. At $t=0$ or $\gamma=0$ both decay weights vanish; their normalized fraction and the conditional coherence are then undefined.

## Statement references

[[post-qec-distinguishability-four-level-model]]

[[pthm-qec-distinguishability-four-kraus]]

[[pthm-qec-distinguishability-decayed-coherence]]

[[def-qec-prereq-finite-operator-conventions]]

[[math:def-trace-of-a-square-matrix]]

## Facts & Assumptions

[F1] The model has orthonormal basis $|0\rangle,\ldots,|3\rangle$, with decay paths $F_0=|2\rangle\langle0|$ and $F_1=|3\rangle\langle1|$. Adjoints, outer products and the coordinate inner product use the finite operator conventions. [[post-qec-distinguishability-four-level-model]] [[def-qec-prereq-finite-operator-conventions]]

[F2] For $\gamma t>0$, the decay probability and coherence are $p=1-e^{-\gamma t}$ and $\chi=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$. [[pthm-qec-distinguishability-decayed-coherence]]

[F3] The two decay Kraus operators are those in [[pthm-qec-distinguishability-four-kraus]]. With $\Omega=\gamma+i\Delta$, that result supplies $f_\pm=\gamma|e^{\Omega t}-1|/|\Omega|\pm(e^{\gamma t}-1)$ and a unit-modulus phase $u$, with $K_2=e^{-\gamma t/2}\sqrt{f_+/2}(uF_0+F_1)$ and $K_3=e^{-\gamma t/2}\sqrt{-f_-/2}(-uF_0+F_1)$. For positive $\gamma,t$, its derivation gives the one-jump coefficients $p$ and $p\chi$ and $u=\chi/|\chi|$. Its square roots are real and nonnegative, and both operators are zero at zero decay probability.

[F4] For a two-path branch with coefficient matrix $p\begin{pmatrix}1&\chi\\\overline\chi&1\end{pmatrix}$, $p>0$ and $|\chi|\leq1$, the orthogonal Kraus weights are $p(1\pm|\chi|)$ and the smaller fraction is $(1-|\chi|)/2$. Its eigenoperators are the phase-adjusted sum and difference of the two paths. [[lem-qec-prereq-two-path-gram-spectrum]]

[F5] For a finite list of vectors in an inner product space, its Gram matrix has entries $G_{jk}=\langle v_j,v_k\rangle$. Here the coordinate inner product is linear in its first argument. [[math:def-gram-matrix-and-gram-determinant]] [[def-qec-prereq-finite-operator-conventions]]

[F6] Scalar exponential expansions and quotient expansions with nonzero constant denominator have controlled remainders at fixed parameters. [[lem-qec-prereq-finite-taylor-control]]

[F7] The trace of a square matrix is the sum of its diagonal entries. We use $\operatorname{Tr}$ for this matrix trace in the fixed model basis. [[math:def-trace-of-a-square-matrix]]

## Proof

**Given:** The model, positive rate and time, and the definitions in the Statement.

**Goal:** Derive the weights, fraction, limits and the stated conditional overlap interpretation.

1.1 Put $r=|\chi|$ and $\Omega=\gamma+i\Delta$. Here $0<p<1$ and $\Omega\ne0$. The formula in [F2] gives $pr=\gamma e^{-\gamma t}|e^{\Omega t}-1|/|\Omega|$, hence $e^{-\gamma t}f_+=p(1+r)$ and $-e^{-\gamma t}f_-=p(1-r)$. The real square root of $-f_-/2$ supplied by [F3] implies $f_-\leq0$, so $r\leq1$. The two-path branch on the code therefore satisfies the hypotheses of [F4]; both path maps annihilate the orthogonal decay space. This argument invokes the already established Kraus representation, independently of the weight identities proved below. [given, F1, F2, F3, F4, algebra]

2.1 By [F1], $F_0^\dagger F_1=F_1^\dagger F_0=0$, $F_0^\dagger F_0=|0\rangle\langle0|$ and $F_1^\dagger F_1=|1\rangle\langle1|$. Write $\Pi_{01}=|0\rangle\langle0|+|1\rangle\langle1|$. Since $|u|=1$, [F3] and step 1.1 give $K_2^\dagger K_2=p(1+r)\Pi_{01}/2$ and $K_3^\dagger K_3=p(1-r)\Pi_{01}/2$. In the four-level basis $\Pi_{01}$ has diagonal $(1,1,0,0)$, so [F7] gives $w_{2,3}=p(1\pm r)$. Equivalently, summing the diagonal entries of $K_j^\dagger K_j$ gives the sum of the squared moduli of all entries of $K_j$, its squared Hilbert–Schmidt norm. The two extra input columns outside the code are zero. The weight sum is $2p$, and the $K_3$ fraction is $(1-r)/2$. The displayed operators are the phase-adjusted sum and difference directions of [F4], up to the overall sign of the minus operator; this explains the signs in Fig. 5 without asserting a unique measured trajectory. [F1, F3, F4, F7, step 1.1, algebra]

3.1 Cancel the common factor $t$ in the numerator and denominator of $\chi$. By [F6], expansion at fixed $\gamma,\Delta$ gives $\chi=1+i\Delta t/2+(-\Delta^2/6+i\gamma\Delta/12)t^2+O(t^3)$. Consequently $|\chi|^2=1-\Delta^2t^2/12+O(t^3)$ and $|\chi|=1-\Delta^2t^2/24+O(t^3)$; the last equality follows from $|\chi|-1=(|\chi|^2-1)/(|\chi|+1)$. Substitution into step 2.1 gives $\Delta^2t^2/48+O(t^3)$. [given, F2, F6, step 2.1, algebra]

3.2 Since $e^{-\gamma t}\to0$ for fixed $\gamma>0$, [F2] gives $|\chi|=\gamma|e^{i\Delta t}-e^{-\gamma t}|/[\sqrt{\gamma^2+\Delta^2}(1-e^{-\gamma t})]\to\gamma/\sqrt{\gamma^2+\Delta^2}$. Step 2.1 gives the asserted limiting fraction. At $t=0$ or $\gamma=0$, [F3] gives $K_2=K_3=0$, and [F2] supplies no conditional decay coherence at zero probability. [given, F2, F3, step 2.1, algebra]

4.1 For an explicit normalized overlap model, take the finite coordinate space $\mathbb C^2$ with the inner product of [F1], and put $v_0=(\chi,\sqrt{1-r^2})$ and $v_1=(1,0)$. Step 1.1 makes the square root real and nonnegative. Coordinate calculation gives $\langle v_0,v_0\rangle=|\chi|^2+1-r^2=1$, $\langle v_1,v_1\rangle=1$ and $\langle v_0,v_1\rangle=\chi$. Thus [F5] identifies their Gram matrix as $\begin{pmatrix}1&\chi\\\overline\chi&1\end{pmatrix}$, the same coefficient matrix as the normalized two-path branch. If a physical environmental realization identifies this normalized path-state Gram matrix with that of its emitted photons, their overlap modulus is $|\chi|$. That identification remains an additional physical interpretation, not a consequence of the reduced channel alone. Together with steps 2.1, 3.1 and 3.2 this proves the conditional assertions. [given, F1, F5, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎
