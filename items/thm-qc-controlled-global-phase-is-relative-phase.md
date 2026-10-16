---
id: thm-qc-controlled-global-phase-is-relative-phase
kind: theorem
title: A Controlled Global Phase Becomes a Relative Control Phase
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-controlled-unitary-access
  - def-qc-povm-and-outcome-law
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
  - def-qc-density-operator
  - thm-qc-povm-probabilities-normalize
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-bessel-inequality-and-finite-parseval-identity
  - def-trace-of-an-endomorphism
  - thm-qc-unit-vector-projector-is-density
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - thm-finite-dimensional-isometry-characterisations
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - def-real-and-complex-inner-product-space
  - def-inner-product-norm
  - def-non-negative-and-positive-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
dependency_level: 7
---

## Statement

Let $H$ be a nonzero finite-dimensional complex-inner-product space and $U:H\to H$ a unitary. Let $\theta\in\mathbb R$, and suppose the model separately grants controlled access to both $U$ and $e^{i\theta}U$. There is a normalized eigenvector $\phi$ with $U\phi=\mu\phi$ and $|\mu|=1$. Let $C=Q_2=\mathbb C^2$ be the control qubit with ordered computational basis $|0\rangle,|1\rangle$; define $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$ and prepare $(|0\rangle+\overline\mu|1\rangle)/\sqrt2$ with target $\phi$. The two joint effects are $E_\pm=|\pm\rangle\langle\pm|\otimes I_H$. The $E_+$ outcome has probability $1$ after $C(U)$ and $\cos^2(\theta/2)$ after $C(e^{i\theta}U)$. Thus the two controlled maps give different outcome laws exactly when $\theta\notin2\pi\mathbb Z$; when $\theta\in2\pi\mathbb Z$, the controlled maps coincide. This is a mathematical witness; it does not assert that controlled access or the witness-state preparation is free.

## Facts & Assumptions

**Given:** The finite-dimensional target $H$, a unitary $U$, a real $\theta$, separate controlled access to $U$ and $e^{i\theta}U$, and the finite control-state measurement specified in the Statement.

[L1] [[def-qc-controlled-unitary-access]] defines $C(U)$ as the control-first block map $\operatorname{diag}(I_H,U)$ and treats the capability as explicit. Its carrier is present in this batch.

[L2] [[def-qc-povm-and-outcome-law]] defines a finite POVM and the density-operator weight $p_a=\operatorname{tr}(\rho E_a)$. Its current draft definition body was read.

[L3] [[def-qc-tensor-register-and-permutation]] defines the ordered product pairing after an ordered orthonormal basis is specified for each factor and proves that the pairing is independent of those choices.

[L4] [[def-qc-tensor-map]] defines the tensor-map action on elementary tensors and its unique linear extension. Its current draft proof was read.

[L5] [[thm-qc-computational-basis-orthonormal]] proves the control basis $|0\rangle,|1\rangle$ is orthonormal. Its current draft proof was read.

[L6] [[thm-qc-unit-vector-projector-is-density]] proves directly that the outer product of every unit vector in a nonzero finite-dimensional space is a density operator.

[L7] [[def-qc-dirac-notation-conversion]] defines $|v\rangle\langle w|z=\langle z,w\rangle_{\rm root}v$ in the root linear-first convention.

[L8] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[L9] [[thm-bessel-inequality-and-finite-parseval-identity]] gives Parseval's identity for a finite orthonormal basis.

[L10] [[thm-qc-povm-probabilities-normalize]] states that finite POVM weights of a density operator form a probability distribution. Its current draft proof was read; its density-definition dependency is present in its current frontmatter.

[L11] [[def-qc-density-operator]]: a density operator is non-negative and has trace one.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary is an invertible linear norm-preserving endomorphism.

[F2] [[thm-finite-dimensional-isometry-characterisations]]: a finite-dimensional isometry satisfies $U^*U=UU^*=I$ and is normal.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a normal endomorphism of a finite-dimensional complex-inner-product space has an orthonormal eigenbasis.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $t$, $|e^{it}|=1$ and $e^{it}=\cos t+i\sin t$.

[F5] [[thm-kernel-and-fibres-of-complex-exponential]]: $e^{i\theta}=1$ exactly when $\theta\in2\pi\mathbb Z$.

[F6] [[def-real-and-complex-inner-product-space]]: the root pairing is linear in its first argument and conjugate-linear in its second.

[F7] [[def-inner-product-norm]]: $\|v\|=\sqrt{\langle v,v\rangle}$.

[F8] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in an orthonormal basis.

[F9] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint with nonnegative quadratic form.

[F10] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $T^*$ is characterized by $\langle Tv,w\rangle=\langle v,T^*w\rangle$.

[F11] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear endomorphism of $H$ has a unique adjoint.

[F12] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$ for complex $z,w$.

## Proof

1.1 By [F1] and [F2], $U$ satisfies $UU^*=U^*U=I$, hence is normal. The complex spectral theorem [F3] gives an orthonormal eigenbasis; since $H$ is nonzero, choose one unit eigenvector $\phi$ and write $U\phi=\mu\phi$. Norm preservation and [F6], [F7] give $1=\|U\phi\|=|\mu|\|\phi\|=|\mu|$, so $|\mu|=1$. This chooses one vector from a finite nonempty basis and uses no choice axiom. [given, F1, F2, F3, F6, F7, choose, algebra]

1.2 Choose an ordered orthonormal basis of $H$ using [L8]. Together with the control basis from [L5], it supplies the factor bases required by [L3], whose proof shows the pairing is independent of this choice. Put $P_\pm=|\pm\rangle\langle\pm|$ on the control and $E_\pm=P_\pm\otimes I_H$ on the joint register. By the Statement, $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$. Using [L3] and [L5], direct inner-product calculations give $\langle+,+\rangle=\langle-,-\rangle=1$ and $\langle+,-\rangle=0$; also $|0\rangle=(|+\rangle+| -\rangle)/\sqrt2$ and $|1\rangle=(|+\rangle-| -\rangle)/\sqrt2$, so these vectors form an orthonormal basis. Every $v\in C\otimes H$ is a finite sum of elementary tensors; expanding each control factor in this basis and grouping terms writes $v=|+\rangle\otimes h_+ + | -\rangle\otimes h_-$. The product pairing [L3] makes these two summands orthogonal, and the tensor-map definition [L4] gives $E_+v=|+\rangle\otimes h_+$ and $E_-v=| -\rangle\otimes h_-$. Hence $E_++E_-=I$ and $\langle E_\pm v,v\rangle=\|h_\pm\|^2\ge0$. Applying the same decomposition to $v,w$ gives $\langle E_\pm v,w\rangle=\langle v,E_\pm w\rangle$; the adjoint characterization [F10] and finite-dimensional existence/uniqueness [F11] imply each effect is self-adjoint. By [F9], each effect is non-negative; together with the two-element outcome set and $E_++E_-=I$, this is a finite POVM by [L2]. [L2, L3, L4, L5, L8, F9, F10, F11, choose, algebra]

2.1 Set $c_\mu=(|0\rangle+\overline\mu|1\rangle)/\sqrt2$. By [L5], [F6], and [F7], its squared norm is $\frac12(\langle0,0\rangle+|\mu|^2\langle1,1\rangle)=1$; the cross terms vanish by orthogonality. Since $\phi$ is unit, the product pairing [L3] makes $c_\mu\otimes\phi$ unit. The controlled block rule [L1] gives $C(U)(c_\mu\otimes\phi)=\frac{|0\rangle\otimes\phi+\overline\mu|1\rangle\otimes U\phi}{\sqrt2}=|+\rangle\otimes\phi$. [given, L1, L3, L5, F6, F7, step 1.1, algebra]

2.2 Put $\alpha=e^{i\theta}$. By [F4], $|\alpha|=1$. For every $v\in H$, [F6] and [F7] give $\|\alpha Uv\|^2=|\alpha|^2\|Uv\|^2=\|v\|^2$; since $\alpha\ne0$ and $U$ is invertible, $\alpha U$ is invertible, so it is unitary by [F1]. For $c_\mu=(|0\rangle+\overline\mu|1\rangle)/\sqrt2$, [L5], [F6], [F7] and step 1.1 give $\|c_\mu\|^2=1$. The separately granted controlled block gives $C(e^{i\theta}U)(c_\mu\otimes\phi)=\frac{|0\rangle+e^{i\theta}|1\rangle}{\sqrt2}\otimes\phi$. Its control factor has squared norm $\frac12(1+|e^{i\theta}|^2)=1$ by [F4], [F6], and [F7]. No access to this block is inferred from a call to $C(U)$; it is part of the explicit model assumption in the Given. [given, L1, L5, F1, F4, F6, F7, step 1.1, algebra]

3.1 Let $\omega=\chi\otimes\phi$ be either output in steps 2.1–2.2. Both factors are unit vectors, so the product norm [L3] makes $\|\omega\|=1$; [L6] makes $\rho_\omega=|\omega\rangle\langle\omega|$ a density operator by [L11]. Choose a finite orthonormal basis $(e_j)$ of $C\otimes H$ by [L8]. From [L7] and [F8], $\operatorname{tr}(\rho_\omega E_+)=\sum_j\langle E_+e_j,\omega\rangle\langle\omega,e_j\rangle=\sum_j\langle e_j,E_+\omega\rangle\langle\omega,e_j\rangle=\langle\omega,E_+\omega\rangle$, where self-adjointness from step 1.2 gives the middle equality and Parseval [L9] gives the last equality. By the product pairing [L3] and tensor-map action [L4], $\langle\omega,E_+\omega\rangle=\langle\chi,P_+\chi\rangle\langle\phi,\phi\rangle=|\langle\chi,+\rangle_{\rm root}|^2$. The finite weights normalize by [L10], so this trace value is the probability of the plus outcome. [L2, L3, L4, L6, L7, L8, L9, L10, L11, F8, step 1.2, step 2.1, step 2.2, choose, algebra]

4.1 For the output in step 2.1, $\chi=|+\rangle$, so $p_+=1$. For the output in step 2.2, $\chi=(|0\rangle+e^{i\theta}|1\rangle)/\sqrt2$. Put $z=e^{i\theta/2}$. By [F12], $z^2=e^{i\theta}$ and $z^{-1}=e^{-i\theta/2}$; [F4] gives $|z|=1$ and $z=\cos(\theta/2)+i\sin(\theta/2)$, so $z^{-1}=\overline z$ and $z+z^{-1}=2\cos(\theta/2)$. Hence $1+e^{i\theta}=z(z+z^{-1})=2z\cos(\theta/2)$ and $p_+=|1+e^{i\theta}|^2/4=\cos^2(\theta/2)$. [step 2.1, step 2.2, step 3.1, F12, F4, algebra]

5.1 By [F5], $\theta\notin2\pi\mathbb Z$ means $z=e^{i\theta}\ne1$. Since $|z|=1$, $|1+z|^2=2+2\operatorname{Re}z<4$: equality would force $\operatorname{Re}z=1$ and then $\operatorname{Im}z=0$, hence $z=1$. Thus the probability from step 4.1 is strictly below one, while the other is one; the two outcome laws differ. [step 4.1, F4, F5, algebra]

6.1 If $\theta\in2\pi\mathbb Z$, [F5] gives $e^{i\theta}=1$, so the two controlled block maps are identical by [L1]. The operators therefore produce the same state for every common input and hence the same outcome law for the specified POVM. [given, L1, F5, algebra] ∎
