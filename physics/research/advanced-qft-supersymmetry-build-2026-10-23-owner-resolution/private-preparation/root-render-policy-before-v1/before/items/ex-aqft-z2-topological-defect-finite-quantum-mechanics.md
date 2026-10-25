---
id: ex-aqft-z2-topological-defect-finite-quantum-mechanics
kind: example
title: "A nontrivial Z2 topological defect in finite quantum mechanics"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators-examples
dependency_level: 1
deps:
  - def-aqft-topological-defect
dependency_roles:
  def-aqft-topological-defect: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "An exact finite-dimensional 0+1-dimensional quantum-mechanical transfer model with hbar=1 and zero Hamiltonian; no continuum QFT or empirical claim is made."
sources:
  references:
    - title: "Davide Gaiotto, Anton Kapustin, Nathan Seiberg, and Brian Willett, Generalized Global Symmetries"
      url: "https://arxiv.org/pdf/1412.5148"
      locator: "§1 Introduction, PDF pp. 1–3: a symmetry defect is a topological operator with group-like fusion; the finite matrix representation and verification here are local."
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: model-defined defect insertions and isotopy classes; this example is 0+1-dimensional and is checked directly."
verification:
  precheck: pass
---

## Example

Let $\mathcal H=\mathbb C^2$ with its standard positive inner product, and let the Hamiltonian be the zero matrix $H=0$. This defines a finite-dimensional $0+1$-dimensional quantum-mechanical transfer model: propagation through an interval of length $s\ge0$ is $e^{-sH}=I$, where $s$ is Euclidean time in units with $\hbar=1$. The local observables are all matrices in $\operatorname{End}(\mathcal H)$, and a correlator with fixed boundary vectors is the matrix element of their time-ordered product with the propagation matrices between insertions.

Let $G=\mathbb Z_2=\{0,1\}$ with addition modulo $2$, and define $U_0=I$ and $U_1=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. Insert $U_g$ at an interior point $\tau\in(0,T)$ of the time interval $[0,T]$. For any finite ordered list of other fixed observable insertions, moving $\tau$ within a gap that contains no other insertion leaves their order relative to $U_g$ unchanged. The insertion is a nontrivial invertible $\mathbb Z_2$ symmetry defect of this model.

## Example references

[Gaiotto, Kapustin, Seiberg, and Willett, §1, PDF pp. 1–3](https://arxiv.org/pdf/1412.5148)

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)

## Facts & Assumptions

**Given:** The finite transfer model, its matrix observable algebra, and the insertion $U_g$ specified in the Example.

[A1] The only propagation factors are $e^{-sH}$ with $H=0$, so they equal $I$ for every interval length $s\ge0$; the correlator is the stated ordered matrix element.

[F1] [[def-aqft-topological-defect]]: a model defines the correlators for an insertion, and the insertion is topological when all allowed isotopies that avoid other insertions preserve those correlators.

## Verification

**Proof technique:** direct.

**Given:** [A1], [F1], and the explicitly defined matrices in the Example.

1.1 The matrices satisfy $U_0=I$, $U_1^\dagger=U_1$, and $U_1^2=I$. Hence $g\mapsto U_g$ is a unitary representation of $\mathbb Z_2$. For $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, direct multiplication gives $U_1 X U_1^{-1}=-X$, so this action is nontrivial. [given, algebra]

1.2 Fix the other insertion times and move $\tau$ without crossing any of them. Every propagation factor between adjacent insertions is $I$ by [A1], and the ordered product of observable matrices and $U_g$ is unchanged because their relative order is fixed throughout the motion. Therefore every declared boundary matrix element is independent of $\tau$. [A1, given, algebra]

2.1 For two group defects separated by $\delta>0$, the propagation between them is $e^{-\delta H}=I$ by [A1], so their product is $U_gU_h=U_{g+h}$, independent of $\delta$. The fusion limit therefore exists, and $U_1U_1=U_0=I$ gives a two-sided inverse. [A1, step 1.1, algebra]

3.1 By [F1] and step 1.2, the point insertion is topological. Step 1.1 gives its nontrivial observable action, and step 2.1 gives its group-like fusion and inverse. It is therefore an invertible symmetry defect in this finite model only. [F1, step 1.1, step 1.2, step 2.1] ∎
