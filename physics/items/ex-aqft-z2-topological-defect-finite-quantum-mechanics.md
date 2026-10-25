---
id: ex-aqft-z2-topological-defect-finite-quantum-mechanics
kind: example
title: "A nontrivial Z2 topological defect in finite quantum mechanics"
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators-examples
dependency_level: 2
deps:
  - def-aqft-topological-defect
  - def-aqft-topological-interface
dependency_roles:
  def-aqft-topological-defect: formulation-prerequisite
  def-aqft-topological-interface: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "An exact finite-dimensional 0+1-dimensional quantum-mechanical
  transfer model with hbar=1 and zero Hamiltonian; no continuum QFT or empirical
  claim is made."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett,
        Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§1 Introduction, PDF pp. 1–3: a symmetry defect is a topological
        operator with group-like fusion; the finite matrix representation and
        verification here are local."
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: model-defined defect insertions and isotopy
        classes; this example is 0+1-dimensional and is checked directly."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $\mathcal H=\mathbb C^2$ with its standard positive inner product, and let the Hamiltonian be the zero operator $H=0\in\operatorname{End}(\mathcal H)$. This defines a finite-dimensional $0+1$-dimensional quantum-mechanical transfer model on the Euclidean-time interval $[0,T]$, $T>0$, with $\hbar=1$: propagation over every length $s\ge0$ is $e^{-sH}=I$. Here $H$ has units of energy, and $T$ and $s$ have units of inverse energy. Its combined background and boundary data consist here of a density matrix $\rho$ on $\mathcal H$, meaning a positive semidefinite matrix with $\operatorname{Tr}\rho=1$. At each time $t_i\in(0,T)$ an ordinary local observable insertion is any matrix $O_i\in\operatorname{End}(\mathcal H)$. The times $t_i$ have units of inverse energy, and the matrices $O_i$ are dimensionless by convention. The complete admissible input is any finite list of such insertions with distinct ordered times $0<t_1<\cdots<t_n<T$, together with $\rho$; its normalized correlator is

$$C_\rho((t_1,O_1),\ldots,(t_n,O_n))=\operatorname{Tr}(\rho O_n\cdots O_1).$$

The empty-list correlator is $\operatorname{Tr}\rho=1$. Let $G=\mathbb Z_2=\{0,1\}$ with addition modulo $2$, and define $U_0=I$ and $U_1=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. The matrices $U_g$ are dimensionless by convention. A point defect $D_{\tau,g}$ at $\tau\in(0,T)$ is the additional insertion of the matrix $U_g$ in the same ordered product; $\tau$ has inverse-energy units. This declares the correlator for every finite list of other insertions and every allowed boundary datum, not only for a selected pair of observables.

The complete input domain also admits any finite number of point defects at distinct times, using their matrices $U_g$ as factors in the same ordered trace; there are no additional junction strata in this one-dimensional model. The defect data act on every insertion matrix, including other defect factors, by conjugation. Since $\mathbb Z_2$ is Abelian, $U_gU_hU_g^{-1}=U_h$, so the allowed defect labels are preserved. In particular they act on observables by $\alpha_g(O)=U_gOU_g^{-1}$ and on the boundary density matrix by $\beta_g(\rho)=U_g\rho U_g^{-1}$. The $g=1$ insertion is a nontrivial invertible $\mathbb Z_2$ symmetry defect of this finite model.

## Example references

[Gaiotto, Kapustin, Seiberg, and Willett, §1, PDF pp. 1–3](https://arxiv.org/pdf/1412.5148)

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)

## Facts & Assumptions

**Given:** The finite transfer model, its matrix observable algebra, and the insertion $U_g$ specified in the Example.

[A1] The only propagation factors are $e^{-sH}$ with $H=0$, so they equal $I$ for every interval length $s\ge0$; the correlator is the stated trace against the boundary density matrix.

[F1] [[def-aqft-topological-defect]]: admissible complete model inputs include their boundary data, ordinary insertions, and decorated defects; a defect is topological when every allowed isotopy preserving its full decoration and avoiding other insertions preserves every declared correlator.

[F2] [[def-aqft-topological-interface]]: fusion requires convergence of every declared correlator with the pair in the model's specified value-space topology; an invertible symmetry also requires a two-sided inverse and an induced observable/boundary-data automorphism preserving correlators.

## Verification

**Proof technique:** direct.

**Given:** [A1], [F1], [F2], and the explicitly defined matrices in the Example.

1.1 The matrices satisfy $U_0=I$, $U_1^\dagger=U_1$, and $U_1^2=I$. Hence $g\mapsto U_g$ is a unitary representation of $\mathbb Z_2$. For $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, direct multiplication gives $U_1 X U_1^{-1}=-X$, so this action is nontrivial. [given, algebra]

1.2 For every $O\in\operatorname{End}(\mathcal H)$ and density matrix $\rho$, $\operatorname{Tr}(\beta_g(\rho)\alpha_g(O_n)\cdots\alpha_g(O_1))=\operatorname{Tr}(U_g\rho O_n\cdots O_1U_g^{-1})=\operatorname{Tr}(\rho O_n\cdots O_1)$ by cyclicity of the finite-dimensional trace. The same cancellation applies when any factors $O_i$ are admitted defect matrices $U_h$, which are fixed under conjugation. Thus the induced insertion and boundary-data automorphisms preserve every declared complete correlator. [given, algebra]

1.3 Fix any admissible finite list of other insertion times and move $\tau$ through an allowed decorated isotopy. Since the motion crosses no other insertion or boundary, its relative order with every insertion is fixed. Every propagation factor is $I$ by [A1], so the ordered matrix product, and therefore its trace against every fixed $\rho$, is unchanged. This verifies topologicality for the full declared input set. [A1, given, algebra]

2.1 For two group defects separated by $\delta>0$, the propagation between them is $e^{-\delta H}=I$ by [A1], so their ordered product is $U_hU_g=U_{h+g}$, independent of $\delta$. With any fixed finite list of other insertions outside their shrinking collar, every declared correlator is unchanged when this adjacent pair is replaced by $U_{h+g}$. Hence the fusion limit exists in the usual topology of $\mathbb C$ for all such correlators, and $U_1U_1=U_0=I$ gives a two-sided inverse. [A1, F2, step 1.1, algebra]

3.1 By [F1] and step 1.3, the point insertion is topological. Step 1.1 gives its nontrivial observable automorphism, step 1.2 verifies correlator covariance including the boundary data, and step 2.1 with [F2] gives group-like fusion and a two-sided inverse. It is therefore an invertible symmetry defect in this finite model only. [F1, F2, step 1.1, step 1.2, step 1.3, step 2.1] ∎
