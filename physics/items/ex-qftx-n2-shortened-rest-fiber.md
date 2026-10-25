---
id: ex-qftx-n2-shortened-rest-fiber
kind: example
title: Explicit $N=2$ shortened rest fiber at central-charge saturation
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
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.2, printed pp. 64–65, N-extended algebra and central-charge positivity; the finite Fock representation is verified here."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§1, printed pp. 5–6, N=1 rest normalization and multiplet context; no N=2 formula is imported from that section."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $M>0$ and $z\in\mathbb C$ satisfy $|z|=M$, and set $\omega=z/|z|$. On $\mathcal H=\Lambda^*\mathbb C^2$ with the orthonormal occupation basis and fermionic operators $a_1,a_2$ defined by $a_1|n_1,n_2\rangle=n_1|0,n_2\rangle$, $a_2|n_1,n_2\rangle=(-1)^{n_1}n_2|n_1,0\rangle$, set $P^0=MI$, $P^j=0$, $Z^{12}=z$, $Z^{21}=-z$, and

$$Q^1_1=\sqrt{2M}a_1,\quad Q^1_2=\sqrt{2M}a_2,\quad Q^2_2=\omega\sqrt{2M}a_1^*,\quad Q^2_1=-\omega\sqrt{2M}a_2^*,$$

with every barred charge the actual Hilbert adjoint and parity $(-1)^{n_1+n_2}$. These operators give a four-dimensional positive rest fiber with $M=|z|$. The two combinations $Q^1_1-\omega(Q^2_2)^*$ and $Q^1_2+\omega(Q^2_1)^*$ vanish identically. Use natural units $\hbar=c=1$, so $M$ and $z$ have mass dimension one and each displayed supercharge has mass dimension one-half. This is a finite-dimensional algebra representation, not a claim about a normalizable sharp-momentum subspace in a full spacetime representation.

## Example references

[Gates et al., §3.2](https://arxiv.org/pdf/hep-th/0108200).

[Martin, §1](https://arxiv.org/pdf/hep-ph/9709356v7).

Four-dimensional real extended super-Poincare algebra: [[def-qftx-super-poincare-algebra-4d]].

Square roots exist: a unique $\sqrt{a} \ge 0$ with $(\sqrt{a})^2 = a$; the positives are $\{x^2 : x \neq 0\}$: [[thm-of-square-roots]].

Hilbert space: [[def-hilbert-space]].

Real and complex inner-product spaces and their induced length: [[def-real-and-complex-inner-product-space]].

## Facts & Assumptions

**Given:** $M>0$, $z\in\mathbb C$ with $|z|=M$, $\omega=z/|z|$, the finite two-mode Fock space, its CAR operators, and the $N=2$ mostly-plus rest algebra.

[F1] [[def-qftx-super-poincare-algebra-4d]]: at rest, $\{Q^I_\alpha,(Q^J_\beta)^*\}=2M\delta_{\alpha\beta}\delta^{IJ}I$, $\{Q^I_\alpha,Q^J_\beta\}=2\epsilon_{\alpha\beta}Z^{IJ}$, and $\epsilon_{12}=1$.

[F4] [[thm-of-square-roots]]: $2M>0$ has a positive square root.

## Verification


**Given:** [F1], [F4] and the four basis vectors in the Example.

1.1 The displayed occupation rules and their adjoints give the two-mode CAR on each of the four basis vectors: for equal mode labels, creation followed by annihilation and annihilation followed by creation are the projections onto occupied and empty states, whose sum is the identity; for distinct labels, the two orders of changing the different occupations have opposite signs from the factor $(-1)^{n_1}$. Repeated creation or annihilation is zero. Therefore $\{a_i,a_j^*\}=\delta_{ij}I$ and $\{a_i,a_j\}=\{a_i^*,a_j^*\}=0$. The same-mode mixed charges in the rest relation now give $2M I$, while every mismatched label is either a distinct-mode anticommutator or a repeated annihilator/creator and is zero. This verifies the mixed relation in [F1]. [given, F1, F4, algebra]

2.1 Since $|z|=M>0$, the definition $\omega=z/|z|$ gives $z=M\omega$ and direct scalar arithmetic gives $\omega\bar\omega=z\bar z/M^2=|z|^2/M^2=1$ and $\bar\omega z=M$. For the same-flavor pairs, two annihilators or two creators anticommute by step 1.1, so their central bracket is zero. The two nonzero distinct-flavor brackets are $\{Q^1_1,Q^2_2\}=2M\omega\{a_1,a_1^*\}=2zI$ and $\{Q^1_2,Q^2_1\}=-2M\omega\{a_2,a_2^*\}=-2zI$. Every other distinct-flavor pair is either a distinct-mode anticommutator or a square of one creation/annihilation operator, and so has zero anticommutator. These are exactly $2\epsilon_{\alpha\beta}Z^{IJ}$ with $\epsilon_{12}=1$ and antisymmetric $Z$; taking Hilbert adjoints gives the conjugate barred relations. [F1, step 1.1, algebra]

3.1 Since $(Q^2_2)^*=\bar\omega\sqrt{2M}a_1$ and $(Q^2_1)^*=-\bar\omega\sqrt{2M}a_2$, direct substitution and $\omega\bar\omega=1$ give $Q^1_1-\omega(Q^2_2)^*=0$ and $Q^1_2+\omega(Q^2_1)^*=0$. Thus $M=|z|$ and both shortening combinations vanish by direct finite matrix calculation; no general central-charge theorem or Choice hypothesis is used. The Hilbert space has two even and two odd basis vectors, and all domains equal the full finite-dimensional space. [step 1.1, step 2.1, algebra] ∎
