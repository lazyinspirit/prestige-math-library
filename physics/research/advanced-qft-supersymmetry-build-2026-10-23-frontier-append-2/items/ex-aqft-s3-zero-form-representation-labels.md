---
id: ex-aqft-s3-zero-form-representation-labels
kind: example
title: "A non-Abelian zero-form symmetry and its representation labels"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-p-form-symmetries-examples
dependency_level: 3
deps:
  - def-aqft-p-form-global-symmetry
  - pthm-aqft-p-form-charge-characters
dependency_roles:
  def-aqft-p-form-global-symmetry: formulation-prerequisite
  pthm-aqft-p-form-charge-characters: physical-result
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "A finite three-state quantum-mechanical system with a unitary S3 zero-form symmetry; the representation decomposition is exact for this finite model and makes no field-theory or empirical claim."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§2, PDF pp. 5–8: ordinary symmetry defects, group fusion, and representation-valued action on local operators."
    - title: "Lakshya Bhardwaj et al., Lectures on Generalized Symmetries"
      url: "https://arxiv.org/pdf/2307.07547"
      locator: "§2.1, PDF pp. 5–11: zero-form defect fusion and the representation carried by local operators."
verification:
  precheck: pending
---

## Example

Let $M=S^1_\beta$ be Euclidean time of circumference $\beta>0$, let $\mathcal H=\mathbb C^3$ with orthonormal basis $e_1,e_2,e_3$, and let the Hamiltonian be $H_0=0$. Use natural units $\hbar=1$. The finite model's normalized correlation functional for time-ordered operator insertions is $C(O_1,\ldots,O_n)=\frac13\operatorname{Tr}(O_1\cdots O_n)$. Let $S_3$ be the group of permutations of $\{1,2,3\}$, with composition $(\sigma\tau)(j)=\sigma(\tau(j))$, and define the unitary action $\rho(\sigma)e_j=e_{\sigma(j)}$. A symmetry defect at time $t$ is $U_\sigma(t)=\rho(\sigma)$.

The state space decomposes as $\mathcal H=\mathbb C(e_1+e_2+e_3)\oplus V_2$, where $V_2=\{(z_1,z_2,z_3)\in\mathbb C^3:z_1+z_2+z_3=0\}$. The first summand is the trivial representation and $V_2$ is the two-dimensional standard irreducible representation. The representation label of a state sector is therefore either the trivial representation or the standard two-dimensional representation; a permutation $\sigma\in S_3$ is instead a group element implementing a symmetry transformation. This is an ordinary $p=0$ example and does not conflict with the exchange theorem for $p\ge1$.

## Example references

[Gaiotto, Kapustin, Seiberg, and Willett, §2, PDF pp. 5–8](https://arxiv.org/pdf/1412.5148)

[Bhardwaj et al., §2.1, PDF pp. 5–11](https://arxiv.org/pdf/2307.07547)

## Facts & Assumptions

**Given:** The finite Hilbert space, zero Hamiltonian, normalized trace, and permutation action in the Example.

[A1] $H_0=0$, so time evolution is the identity and the stated normalized trace defines the model's time-ordered correlation functional.

[F1] [[def-aqft-p-form-global-symmetry]]: at $p=0$, group elements label ordinary symmetry transformations and local operators may transform in representations.

[F2] [[pthm-aqft-p-form-charge-characters]]: the Abelianity and character conclusion applies only for $p\ge1$ under its exchange and simplicity hypotheses.

## Verification

1.1 For every $\sigma,\tau\in S_3$ and basis vector $e_j$, $\rho(\sigma)\rho(\tau)e_j=e_{\sigma(\tau(j))}=\rho(\sigma\tau)e_j$, so $\rho$ is a representation by unitary permutation matrices. With $s=(12)$ and $t=(23)$, $\rho(s)\rho(t)e_1=e_2$ while $\rho(t)\rho(s)e_1=e_3$; hence $S_3$ is non-Abelian. [A1, F1, algebra]

1.2 Every permutation fixes $e_1+e_2+e_3$, and permutes coordinates, so it preserves the sum-zero subspace $V_2$. These subspaces intersect only at zero and have dimensions one and two, so $\mathcal H=\mathbb C(e_1+e_2+e_3)\oplus V_2$. [given, algebra]

1.3 Let $r=(123)$ and $\zeta=e^{2\pi i/3}$. The vectors $v_+=(1,\zeta,\zeta^2)$ and $v_-=(1,\zeta^2,\zeta)$ form eigenlines for $\rho(r)$ with distinct eigenvalues $\zeta^2$ and $\zeta$. The transposition $s=(12)$ sends $v_+$ to $\zeta v_-$ and $v_-$ to $\zeta^2v_+$. Any invariant line for $S_3$ would have to be one of the two eigenlines of $\rho(r)$, but neither is preserved by $\rho(s)$; thus $V_2$ has no nonzero proper invariant subspace and is irreducible. [given, algebra]

2.1 For insertions whose cyclic time order is fixed, moving a symmetry point without crossing another insertion leaves the ordered matrix product unchanged; the trace correlation is therefore unchanged. The operator assignment $U_\sigma(t)=\rho(\sigma)$ is topological in this finite model. Since $p=0$, the hypothesis $p\ge1$ of [F2] fails, so no Abelianity conclusion applies to $S_3$. [A1, F2, step 1.1, algebra]

3.1 The two summands in step 1.2 are representation spaces, while the elements $s,t\in S_3$ in step 1.1 are transformations; their distinct roles are explicit in the action $\rho(\sigma)$. [F1, step 1.1, step 1.2] ∎

