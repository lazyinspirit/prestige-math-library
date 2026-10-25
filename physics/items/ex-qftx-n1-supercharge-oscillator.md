---
id: ex-qftx-n1-supercharge-oscillator
kind: example
title: Two-mode fermionic oscillator for the $N=1$ rest algebra
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-super-poincare-algebra-4d
  - thm-of-square-roots
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
dependency_roles:
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§1 and 3.1, rest algebra and canonical N=1 supercharges; the finite oscillator realization is computed here."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§§3.2–3.3, superalgebra and positive particle-representation context; no full Poincare representation is asserted by this fiber example."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $M>0$ and let $\mathcal H=\Lambda^*\mathbb C^2$ have orthonormal occupation basis $|n_1,n_2\rangle$ for $n_1,n_2\in\{0,1\}$. Define fermionic annihilation operators by $a_1|n_1,n_2\rangle=n_1|0,n_2\rangle$ and $a_2|n_1,n_2\rangle=(-1)^{n_1}n_2|n_1,0\rangle$, and let $a_\alpha^*$ be their Hilbert adjoints. Set $P^0=MI$, $P^j=0$, all central charges to zero, and $Q_\alpha=\sqrt{2M}a_\alpha$, $\bar Q_{\dot\alpha}=Q_\alpha^*$ with dotted index corresponding to the same $\alpha$. Give $\mathcal H$ the parity $(-1)^{n_1+n_2}$. This finite-dimensional rest fiber is a positive representation of the $N=1$ supercharge anticommutators in the stated mostly-plus convention; it has two even and two odd states. Use natural units $\hbar=c=1$, so $M$ has mass dimension one and each displayed supercharge has mass dimension one-half. It is only a rest-algebra fiber and asserts no full spacetime representation.

## Example references

[Martin, §§1 and 3.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §§3.2–3.3](https://arxiv.org/pdf/hep-th/0108200).

Four-dimensional real extended super-Poincare algebra: [[def-qftx-super-poincare-algebra-4d]].

Square roots exist: a unique $\sqrt{a} \ge 0$ with $(\sqrt{a})^2 = a$; the positives are $\{x^2 : x \neq 0\}$: [[thm-of-square-roots]].

Hilbert space: [[def-hilbert-space]].

Real and complex inner-product spaces and their induced length: [[def-real-and-complex-inner-product-space]].

## Facts & Assumptions

**Given:** $M>0$, the four-dimensional complex Hilbert space with the stated orthonormal basis, its fermionic operators, and the $N=1$ algebra convention.

[F1] [[def-qftx-super-poincare-algebra-4d]]: at rest, $P_0=-M$, $P_j=0$, and $\{Q_\alpha,\bar Q_{\dot\beta}\}=-2\sigma^\mu_{\alpha\dot\beta}P_\mu$ with $\sigma^0=I_2$; the $N=1$ central-charge-free same-chirality anticommutators vanish.

[F2] [[thm-of-square-roots]]: $2M>0$ has a positive square root.

## Verification


**Given:** [F1], [F2], and the four basis vectors in the Example.

1.1 The occupation formulas give $a_1^*|0,0\rangle=|1,0\rangle$, $a_1^*|0,1\rangle=|1,1\rangle$, $a_2^*|0,0\rangle=|0,1\rangle$, and $a_2^*|1,0\rangle=-|1,1\rangle$, with creation zero when its mode is occupied. Thus $a_1$ removes the first occupied mode without sign and $a_2$ removes the second with the sign $(-1)^{n_1}$. If $i=j$, applying $a_i a_i^*+a_i^*a_i$ to a basis vector gives that vector: when mode $i$ is empty only the first term returns it, and when occupied only the second does. If $i\ne j$, the two orders remove and insert distinct modes with opposite signs from the displayed $(-1)^{n_1}$ rule, so they cancel. Therefore $\{a_i,a_j^*\}=\delta_{ij}I$. Two annihilations or two creations also anticommute, since exchanging their order changes the same occupation sign and repeated creation or annihilation is zero. [given, F2, algebra]

2.1 Scaling the CAR by $\sqrt{2M}$ gives $\{Q_\alpha,\bar Q_{\dot\beta}\}=2M\delta_{\alpha\beta}I$. By [F1], the rest right-hand side is $-2\sigma^0_{\alpha\dot\beta}P_0=2M\delta_{\alpha\beta}I$. The vanishing same-chirality anticommutators follow from the two-annihilation and two-creation relations in step 1.1, and all central charges were set to zero. Thus every stated rest anticommutator holds. [F1, step 1.1, algebra]

3.1 Each annihilation or creation changes $n_1+n_2$ by one, so every $Q_\alpha$ and $\bar Q_{\dot\alpha}$ reverses parity. The four occupation vectors have parities $+,-,-,+$, giving two states in each sector. The common domain is all of finite-dimensional $\mathcal H$, so all products and adjoints used above are defined. [given, step 1.1, algebra] ∎
