---
id: ex-aqft-invertible-interface-between-finite-quantum-mechanics
kind: example
title: "An invertible interface between two finite quantum-mechanical models"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators-examples
dependency_level: 2
deps:
  - def-aqft-topological-interface
dependency_roles:
  def-aqft-topological-interface: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "An exact finite-dimensional 0+1-dimensional quantum-mechanical interface with hbar=1 and positive energy gap Delta; no continuum QFT or empirical claim is made."
sources:
  references:
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: source and target region labels for a defect wall and model-defined correlators; the finite-dimensional matrix example is verified locally."
verification:
  precheck: pass
---

## Example

Use natural units $\hbar=1$. Let the source model $\mathcal T_-$ and target model $\mathcal T_+$ each have Hilbert space $\mathbb C^2$ with its standard positive inner product and all complex $2\times2$ matrices as local observables. Their Hamiltonian matrices are

$$H_- = \begin{pmatrix}0&0\\0&\Delta\end{pmatrix},\qquad H_+ = \begin{pmatrix}\Delta&0\\0&0\end{pmatrix},\qquad \Delta>0.$$

Here $\Delta$ has units of energy and a Euclidean time interval $s$ has units of inverse energy; propagation is $e^{-sH_\pm}$. Define the interface map

$$V=\begin{pmatrix}0&1\\1&0\end{pmatrix}:\mathcal H_-\longrightarrow\mathcal H_+.$$

The target observable corresponding to $O_-\in\operatorname{End}(\mathbb C^2)$ is $O_+=VO_-V^\dagger$. For a single interface at time $\tau\in(0,T)$, its transfer amplitude between boundary vectors $\psi_-\in\mathcal H_-$ and $\psi_+\in\mathcal H_+$ is

$$C_\tau=\langle\psi_+,e^{-(T-\tau)H_+}V e^{-\tau H_-}\psi_-\rangle.$$

This is an invertible topological interface between two specified models. It is an internal symmetry only if the source and target models are subsequently identified as one complete model.

## Example references

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)

## Facts & Assumptions

**Given:** The two finite-dimensional transfer models, $\Delta>0$, $V$, and the interface amplitude specified in the Example.

[A1] Propagation in each model over length $s\ge0$ is the matrix exponential $e^{-sH_\pm}$; the amplitude inserts $V$ between the source and target propagation factors.

[F1] [[def-aqft-topological-interface]]: a topological interface preserves every declared correlator under allowed motions that do not cross insertions; a symmetry interface additionally requires an endodefect, a two-sided inverse under fusion, and preservation of the observable and background data.

## Verification

**Proof technique:** direct.

**Given:** [A1], [F1], and the matrices in the Example.

1.1 Direct multiplication gives $V^\dagger V=VV^\dagger=I$ and $H_+V=VH_-$. Thus $V$ is unitary and intertwines the source and target Hamiltonians. The assignment $O_-\mapsto VO_-V^\dagger$ is a bijective, product-preserving, adjoint-preserving map of the two full matrix observable algebras. [given, algebra]

2.1 From $H_+V=VH_-$, induction gives $H_+^nV=VH_-^n$ for every integer $n\ge0$. Substituting this identity term by term into the convergent finite-matrix exponential series yields $e^{-sH_+}V=Ve^{-sH_-}$ for every $s\ge0$. [step 1.1, algebra]

3.1 Using step 2.1 with $s=T-\tau$ gives $e^{-(T-\tau)H_+}Ve^{-\tau H_-}=Ve^{-(T-\tau)H_-}e^{-\tau H_-}=Ve^{-TH_-}$. Hence $C_\tau=\langle\psi_+,Ve^{-TH_-}\psi_-\rangle$, independent of $\tau$. If other insertions are fixed away from the moving interface, their relative order is unchanged and each interval factor adjacent to the interface combines by the same identity; the corresponding declared correlator is likewise independent of the interface position. [A1, step 2.1, algebra]

4.1 Place the reverse interface $V^\dagger$ a distance $\delta>0$ from $V$. The fused transfer maps are $V^\dagger e^{-\delta H_+}V$ on $\mathcal H_-$ and $V e^{-\delta H_-}V^\dagger$ on $\mathcal H_+$. Since finite-matrix exponentials are continuous at $\delta=0$, their limits are $V^\dagger V=I_{\mathcal H_-}$ and $VV^\dagger=I_{\mathcal H_+}$. Thus the fusion limits exist and equal the transparent identities. By [F1], step 3.1 verifies topologicality and these two limits give the two-sided inverse. Since the two named models have different Hamiltonian matrices, this is an equivalence interface between models, not an internal symmetry of either model before an identification is supplied. [F1, step 1.1, step 3.1, algebra] ∎
