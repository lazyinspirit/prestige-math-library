---
id: thm-nrqmx-adiabatic-geometric-phase-bound
kind: theorem
domain: mathematics
library: mathematics
title: Physical adiabatic phase with explicit scale
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-countable-choice
  - thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate
  - thm-nrqmx-berry-projector-curvature
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate: mathematical-premise
  thm-nrqmx-berry-projector-curvature: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

## Statement

Assume Countable Choice. Let $d\geq1$, let $H\in C^2([0,1],\operatorname{Herm}(\mathbb C^d))$ have entries whose derivatives through order two extend continuously to the endpoints, and assign its eigenvalues energy unit joules. Let $\hbar>0$ have unit joule-seconds. A spectral cluster at $s$ is a subset $\sigma_P(s)$ of the finite spectrum of $H(s)$, and $P(s)$ is the orthogonal projection onto the sum of its eigenspaces. Coherently followed means that $s\mapsto P(s)$ is continuous in operator norm (equivalently, it agrees locally with the Riesz continuation of its initial cluster). Assume the distance from $\sigma_P(s)$ to the complementary spectrum is at least a uniform $g>0$ in joules. Let $T>0$ be a total duration in seconds, let $s=t/T$ be dimensionless, and let $U_T(0)=I$ solve
$$i\hbar\,\partial_sU_T(s)=T H(s)U_T(s).$$
Put $K(s)=[P'(s),P(s)]$. There is a $C^1$ Hermitian matrix $X(s)$ solving $[H(s),X(s)]=K(s)$. With
$$C=2\sup_{s\in[0,1]}\|X(s)\|+\int_0^1\bigl(\|X'(s)\|+\|K(s)\|\,\|X(s)\|\bigr)\,ds,$$
the leakage satisfies
$$\|(I-P(s))U_T(s)P(0)\|\leq\frac{\hbar C}{T}\qquad(0\leq s\leq1).$$
The supplier provides a $C^1$ Hermitian $X$ solving the displayed commutator equation. For that $X$, $C$ has unit joule-inverse, so $\hbar C/T$ is dimensionless. If the cluster has rank one, define $E(s):=\operatorname{tr}(H(s)P(s))$; then $E$ is real and $C^2$ and $H(s)P(s)=E(s)P(s)$. Define $U_A(0)=I$ by
$$i\,\partial_sU_A(s)=\left(\frac{T}{\hbar}H(s)+iK(s)\right)U_A(s).$$
For Kato transport $W'(s)=K(s)W(s)$, $W(0)=I$, the comparison evolution factors exactly on the initial eigenspace:
$$U_A(s)P(0)=\exp\!\left(-\frac{iT}{\hbar}\int_0^sE(u)\,du\right)W(s)P(0).$$
The leakage estimate is finite-dimensional and conditional on the stated uniform positive gap.

## Facts & Assumptions

**Given:** Countable Choice, the stated $C^2$ Hermitian family and coherent uniformly gapped spectral projection, $\hbar>0$ in joule-seconds, and $T>0$ in seconds.

[A1] Countable Choice is the principle [[def-countable-choice]]; it is the exact choice strength assumed by the finite-dimensional supplier.

[F1] [[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]]: for a $C^2$ finite Hermitian family, a continuous coherently followed spectral cluster with uniform gap, and scale $\tau>0$, the projector is $C^2$, Kato transport is unitary and intertwines, there is a $C^1$ Hermitian $X$ with $[H,X]=[P',P]$, and leakage is bounded by $C/\tau$ with the displayed constant.

[F2] [[thm-nrqmx-berry-projector-curvature]]: the Kato generator is $K=[P',P]$, and its transport satisfies $P(s)W(s)=W(s)P(0)$.

## Proof

1.1 Divide the evolution equation by $\hbar$ and set $\tau=T/\hbar>0$. Then $i\,\partial_sU_T=\tau H(s)U_T$, exactly the scale convention of [F1], with the same $H$, $P$, $K$, and $X$. The supplier's hypotheses hold: $H$ is $C^2$, the cluster is coherently followed, and its complementary spectral distance is uniformly at least $g>0$. Therefore its estimate gives $\|(I-P(s))U_T(s)P(0)\|\leq C/\tau=\hbar C/T$. [given, A1, F1, algebra]

2.1 Suppose $\operatorname{rank}P=1$ and $HP=EP$. By [F2], $W'=KW$, $P(s)W(s)=W(s)P(0)$, and $W$ is unitary. Set $V(s)=W(s)\exp(-i\tau\int_0^sE(u)\,du)$. For $v\in\operatorname{ran}P(0)$, intertwining gives $W(s)v\in\operatorname{ran}P(s)$, so $H(s)W(s)v=E(s)W(s)v$. Differentiating therefore gives $V'(s)v=(-i\tau H(s)+K(s))V(s)v$, with $V(0)v=v$. The defined $U_A$ satisfies the same matrix initial-value equation $U_A'=(-i\tau H+K)U_A$; uniqueness of finite-dimensional linear ODE solutions yields $U_A(s)v=V(s)v$ for every such $v$, which is the stated factorization. [given, F1, F2, step 1.1, algebra] ∎

