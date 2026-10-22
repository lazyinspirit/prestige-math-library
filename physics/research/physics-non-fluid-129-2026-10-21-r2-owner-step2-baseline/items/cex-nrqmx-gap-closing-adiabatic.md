---
id: cex-nrqmx-gap-closing-adiabatic
kind: counterexample
domain: mathematics
library: mathematics
title: Slow variation alone is insufficient
status: draft
origin: pipeline
dependency_level: 4
deps:
  - def-countable-choice
  - thm-nrqmx-adiabatic-geometric-phase-bound
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-nrqmx-adiabatic-geometric-phase-bound: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
    - title: J. E. Avron, R. Seiler, and L. G. Yaffe, Adiabatic Theorems and Applications to the Quantum Hall Effect
      url: https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf
---

## Statement refuted

Assuming Countable Choice, slow scaling by $T$ alone guarantees a uniform $O(1/T)$ leakage bound for the pointwise ordered upper eigenspace of every finite-dimensional $C^2$ Hermitian family, even when its spectral gap may close.

## Statement references

[[thm-nrqmx-adiabatic-geometric-phase-bound]]

## Facts & Assumptions

**Given:** Countable Choice, $\hbar>0$ in joule-seconds, an energy $E_0>0$ in joules, and a duration $T>0$ in seconds.

[A1] Countable Choice is [[def-countable-choice]], the hypothesis carried by [[thm-nrqmx-adiabatic-geometric-phase-bound]].

[F1] [[thm-nrqmx-adiabatic-geometric-phase-bound]]: the $O(1/T)$ leakage conclusion requires a coherently followed spectral projection separated from the complementary spectrum by a uniform positive gap.

## Counterexample

1.1 On $\mathbb C^2$, let $e_\uparrow=(1,0)^T$, $e_\downarrow=(0,1)^T$, and $H(s)=E_0s\,\operatorname{diag}(1,-1)$ for $s\in[-1,1]$. For $s<0$ the ordered upper eigenvalue is $-E_0s$ and its projection is $P_{\rm up}(s)=e_\downarrow e_\downarrow^*$; for $s>0$ it is $E_0s$ and its projection is $P_{\rm up}(s)=e_\uparrow e_\uparrow^*$. At $s=0$ the only spectral projection is $I_2$, so no continuous rank-one extension of the ordered upper projection exists. The gap between the two eigenvalues is $2E_0|s|$, which closes at zero. [given, A1, algebra]

2.1 The propagator from $s=-1$ solves $i\hbar U_T'(s)=T H(s)U_T(s)$ and is
$$U_T(s)=\exp\!\left(-\frac{iTE_0}{2\hbar}(s^2-1)\operatorname{diag}(1,-1)\right),$$
as direct differentiation verifies. In particular $U_T(1)=I_2$. [given, step 1.1, construct, algebra]

3.1 At the endpoints, $P_{\rm up}(-1)=e_\downarrow e_\downarrow^*$ and $P_{\rm up}(1)=e_\uparrow e_\uparrow^*$. Therefore
$$\bigl\|(I-P_{\rm up}(1))U_T(1)P_{\rm up}(-1)\bigr\|=\|e_\downarrow e_\downarrow^*\|=1$$
for every $T>0$. No finite constant $C$ independent of $T$ can bound this leakage by $C/T$. The ordered projection fails the continuity and uniform-gap hypotheses in [F1]. [given, F1, step 1.1, step 2.1, algebra]

4.1 The constant projection $P_\downarrow=e_\downarrow e_\downarrow^*$ is instead a continuous spectral projection through the crossing, commutes with every $H(s)$, and has zero leakage for all $T$. Thus the example refutes a gap-free uniform tracking claim for the ordered branch; it does not assert that every branch crossing causes transitions. [given, step 1.1, step 2.1, algebra] ∎

## Counterexample references

[[thm-nrqmx-adiabatic-geometric-phase-bound]]

