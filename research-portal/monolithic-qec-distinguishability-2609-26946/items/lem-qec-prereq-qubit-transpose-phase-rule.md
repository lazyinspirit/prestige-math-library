---
id: lem-qec-prereq-qubit-transpose-phase-rule
kind: lemma
domain: mathematics
title: Transpose recovery for a flagged coherence channel
status: published
origin: session
deps:
  - thm-qec-prereq-transpose-support-completion
  - lem-qec-prereq-qubit-coherence-fidelities
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-support-spectral-calculus
  - def-qec-prereq-restricted-logical-channel
  - math:def-direct-sum-of-a-family-of-modules
dependency_roles:
  thm-qec-prereq-transpose-support-completion: mathematical-premise
  lem-qec-prereq-qubit-coherence-fidelities: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  math:def-direct-sum-of-a-family-of-modules: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Let $H=\mathbb C^2$ have ordered orthonormal basis $|0\rangle,|1\rangle$. Take $K=H\oplus H=\{(x_0,x_1):x_0,x_1\in H\}$ with coordinatewise addition and complex scalar multiplication, and with inner product $\langle(x_0,x_1),(y_0,y_1)\rangle_K=\langle x_0,y_0\rangle_H+\langle x_1,y_1\rangle_H$ in the finite-operator convention. Define $\iota_0x=(x,0)$ and $\iota_1x=(0,x)$, and order the basis of $K$ as $\iota_0|0\rangle,\iota_0|1\rangle,\iota_1|0\rangle,\iota_1|1\rangle$. For $0\leq p\leq1$ and $|\chi|\leq1$, define the flagged channel $\mathcal N(X)=(1-p)\iota_0X\iota_0^\dagger+p\iota_1\mathcal D_\chi(X)\iota_1^\dagger$, where $\mathcal D_\chi$ preserves the diagonal entries and multiplies the $01$ and $10$ entries by $\chi$ and $\overline\chi$, respectively. Use the whole input space as the code, with maximally mixed input $I/2$, and the support-normalized transpose recovery for $\mathcal N$.

On each positive-weight branch, the conditional recovered map is the identity for branch $0$ and $\mathcal D_{|\chi|^2}$ for branch $1$. Consequently, after discarding the flag the recovered channel is $(1-p)\operatorname{id}+p\mathcal D_{|\chi|^2}$. A decoder that reads the flag, uses the identity on branch $0$, and applies a phase-correcting unitary on branch $1$ instead gives $(1-p)\operatorname{id}+p\mathcal D_{|\chi|}$. At $\chi=0$ the unitary phase can be chosen arbitrarily. A zero-weight branch contributes zero and has no conditional state.

## Facts & Assumptions

**Given:** The spaces, basis, parameters and flagged channel in the Statement.

**Goal:** Compute the transpose-recovered and phase-corrected channels, including boundary cases.

[F1] The finite operator conventions specify matrices, adjoints and orthonormal bases. [[def-qec-prereq-finite-operator-conventions]]

[F2] The maps $\mathcal D_\lambda$ for $|\lambda|\leq1$ are channels and satisfy $\mathcal D_\mu\circ\mathcal D_\lambda=\mathcal D_{\mu\lambda}$. [[lem-qec-prereq-qubit-coherence-fidelities]]

[F3] For code projector $P$ and channel Kraus operators $E_a$, the transpose map has Kraus operators $PE_a^\dagger\mathcal N(P)^{-1/2}$, with the inverse taken on the support; its completion does not change outputs of code-supported inputs. [[thm-qec-prereq-transpose-support-completion]]

[F4] The support inverse square root acts by the reciprocal square root on positive eigenspaces and by zero on the kernel. [[def-qec-prereq-support-spectral-calculus]]

[F5] A channel is linear, completely positive and trace-preserving; a decoder is a channel from the noise output space to the logical space. [[def-qec-prereq-restricted-logical-channel]]

[F6] For two complex vector spaces, viewed as modules over $\mathbb C$, the indexed direct sum consists of all pairs with coordinatewise operations; its coordinate inclusions insert a vector in one coordinate and zero in the other. The finite-support condition is automatic for the index set $\{0,1\}$. [[math:def-direct-sum-of-a-family-of-modules]]

## Proof

**Proof technique:** direct.

1.1 In the coordinates of the Statement, [F6] gives the underlying direct sum, and the displayed inner product is the standard coordinate inner product on $\mathbb C^4$. By [F1], taking conjugate transposes of the inclusion matrices gives $\iota_0^\dagger(x_0,x_1)=x_0$ and $\iota_1^\dagger(x_0,x_1)=x_1$. Thus $\iota_j^\dagger\iota_j=I_H$ for $j=0,1$, $\iota_0^\dagger\iota_1=\iota_1^\dagger\iota_0=0$, and $\iota_0\iota_0^\dagger+\iota_1\iota_1^\dagger=I_K$. The two ranges are therefore orthogonal and their block projections exhaust $K$. Put $r=|\chi|$ and choose $z=\chi/r$ when $r>0$, and any unit-modulus $z$ when $r=0$. Set $U=\operatorname{diag}(1,\overline z)$, $Z=\operatorname{diag}(1,-1)$, $q_+=(1+r)/2$ and $q_-=(1-r)/2$. Direct multiplication gives $\mathcal D_\chi(X)=q_+UXU^\dagger+q_-UZXZU^\dagger$. Thus a Kraus family for $\mathcal N$ is $E_0=\sqrt{1-p}\,\iota_0$ and $E_\pm=\sqrt{p q_\pm}\,\iota_1UZ$. In the last expression use $Z$ only for $E_-$: explicitly, $E_+=\sqrt{p q_+}\,\iota_1U$ and $E_-=\sqrt{p q_-}\,\iota_1UZ$. These operators also show that the two branches form a channel: their adjoint products sum to $I$, and conjugation by each operator is completely positive after every finite amplification. [given, F1, F2, F5, F6]

2.1 With $P=I$, the unitality of $\mathcal D_\chi$ gives $A=\mathcal N(I)=(1-p)\iota_0\iota_0^\dagger+p\iota_1\iota_1^\dagger$. By [F4], $A^{-1/2}$ acts as $(1-p)^{-1/2}$ on the first block when $1-p>0$, as $p^{-1/2}$ on the second when $p>0$, and as zero on any zero-weight block. Substitution into [F3] gives the identity map on the first positive-weight block and $Y\mapsto q_+U^\dagger YU+q_-ZU^\dagger YUZ$ on the second. The latter map is $\mathcal D_{\overline\chi}$ by direct matrix multiplication. The support completion has no effect on $\mathcal N(X)$. [given, F1, F3, F4, step 1.1]

3.1 Applying the branch maps from step 2.1 to the noise outputs and using [F2] yields $(1-p)X+p\mathcal D_{\overline\chi}\mathcal D_\chi(X)=(1-p)X+p\mathcal D_{r^2}(X)$. For a positive branch weight, dividing its output by that weight gives the stated conditional map; a zero-weight branch has zero output and no conditional state. The normalization uses the trace preservation in [F5]. [given, F2, F5, step 2.1]

4.1 On the second block, conjugation by $U^\dagger$ is $\mathcal D_{\overline z}$, so its composition with $\mathcal D_\chi$ is $\mathcal D_r$ by [F2]. Combining it with the identity decoder on the first block gives the map $\mathcal R_{\rm ph}(Y)=\iota_0^\dagger Y\iota_0+U^\dagger\iota_1^\dagger Y\iota_1U$. Each summand is completely positive by the conjugation argument of step 1.1. For every $Y$, summing its four diagonal entries in the ordered basis gives $\operatorname{tr}Y=\operatorname{tr}(\iota_0^\dagger Y\iota_0)+\operatorname{tr}(\iota_1^\dagger Y\iota_1)$; conjugation by the diagonal unitary $U$ leaves diagonal entries unchanged. Hence $\mathcal R_{\rm ph}$ preserves trace and is a channel by [F5]. It therefore produces $(1-p)\operatorname{id}+p\mathcal D_r$. When $r=0$, every unit-modulus choice of $z$ gives the same $\mathcal D_0$ after composition. [given, F1, F2, F5, step 1.1] ∎
