---
id: ex-zero-dimensional-clifford-cokernel-is-z
kind: example
title: "The zero-dimensional Clifford cokernel is Z"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations-examples
dependency_level: 3
deps: [def-real-graded-clifford-module-bundles-and-groups, def-clifford-module-restriction-cokernel-a-n]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Example

For $C_0=\mathbb R$ with the trivial grading, a finite-dimensional graded module is $M=M^0\oplus M^1$. Its Grothendieck group is $M_0\cong\mathbb Z\oplus\mathbb Z$ by $(\dim M^0,\dim M^1)$. For $C_1=\mathrm{Cl}(\mathbb R,-\lVert\cdot\rVert^2)$ the odd generator $e$ satisfies $e^2=-1$ and identifies the even and odd components of every graded module. Conversely, for every $k\ge0$, $\mathbb R^k\oplus\mathbb R^k$ with $e(x,y)=(-y,x)$ is a graded $C_1$-module. Therefore the restriction image is the diagonal subgroup and $A_0\cong\mathbb Z$ by even dimension minus odd dimension.

## Facts & Assumptions
**Given:** Finite-dimensional real graded modules and the restriction homomorphism $r_0:M_1\to M_0$.

[F1] $M_0$ retains even and odd dimensions as separate summands, and $A_0=\operatorname{coker}(r_0)$ ([[def-clifford-module-restriction-cokernel-a-n]]).

[F2] A graded Clifford action sends even generators to parity-preserving maps and odd generators to parity-reversing maps ([[def-real-graded-clifford-module-bundles-and-groups]]).

## Verification

1.1 In a graded $C_1$-module, the odd generator $e$ maps $M^0$ to $M^1$ and $M^1$ to $M^0$ by [F2]. Since $e^2=-I$, these restrictions are inverse up to sign, so $\dim M^0=\dim M^1$. Thus every restricted class has equal two coordinates. The explicit module $\mathbb R\oplus\mathbb R$ with $e(x,y)=(-y,x)$ satisfies $e^2=-I$, so its restriction is $(1,1)$; hence the image in the Grothendieck group is exactly $\mathbb Z(1,1)$. [given, F1, F2, construct, algebra]


2.1 The homomorphism $\mathbb Z^2\to\mathbb Z$, $(a,b)\mapsto a-b$, is surjective and has kernel $\mathbb Z(1,1)$. By [F1], its quotient is $A_0$, so the induced map $A_0\to\mathbb Z$ is an isomorphism and sends a graded module to its even dimension minus its odd dimension. [F1, step 1.1, algebra] ∎
