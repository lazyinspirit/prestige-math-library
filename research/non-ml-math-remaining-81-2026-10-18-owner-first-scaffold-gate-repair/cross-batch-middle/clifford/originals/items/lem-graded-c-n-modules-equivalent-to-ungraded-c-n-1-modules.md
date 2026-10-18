---
id: lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules
kind: lemma
title: "Graded C_n modules and ungraded C_(n−1) modules"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 5
deps: [def-real-graded-clifford-module-bundles-and-groups, lem-clifford-even-subalgebra-signature-identification, thm-clifford-pbw-basis-and-associated-graded, def-clifford-module-restriction-cokernel-a-n]
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

## Statement

For $n\ge1$, taking the even part is an equivalence from finite-dimensional graded $C_n$-modules to finite-dimensional ungraded $C_{n-1}$-modules, where $C_n=\mathrm{Cl}(\mathbb R^n,-\lVert\cdot\rVert^2)$. An inverse is induction from the even subalgebra. For $n=0$, retain both parity types and treat the restriction cokernel separately.

## Facts & Assumptions
**Given:** $n\ge1$ and a finite-dimensional graded left $C_n$-module $M=M^0\oplus M^1$ or a finite-dimensional ungraded left module $N$ over $C_{n-1}$.

[F1] A graded Clifford module has $C_n^iM^j\subseteq M^{i+j\bmod2}$ ([[def-real-graded-clifford-module-bundles-and-groups]]).

[F2] The even subalgebra of the negative-square algebra $C_n=\mathrm{Cl}_{0,n}$ is isomorphic to $C_{n-1}=\mathrm{Cl}_{0,n-1}$ ([[lem-clifford-even-subalgebra-signature-identification]]).

[F3] $C_n$ is finite-dimensional and has its even/odd word grading ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F4] $M_0$ retains the even and odd dimension coordinates separately ([[def-clifford-module-restriction-cokernel-a-n]]).

## Proof

**Proof technique:** explicit induction and evaluation.

1.1 Let $e_n$ be the last standard generator. It is odd and invertible because $e_n^2=-1$. Multiplication by $e_n$ maps $C_n^0$ bijectively onto $C_n^1$, with inverse multiplication by $-e_n$; thus $C_n^1=e_nC_n^0$. By [F2], the action of $C_n^0$ on $M^0$ makes it an ungraded $C_{n-1}$-module. [given, F1, F2, construct]


2.1 Define $G(N)=C_n\otimes_{C_n^0}N$, with parity inherited from $C_n$ and the $C_{n-1}$-action transported along the algebra isomorphism in [F2]. Because $C_n=C_n^0\oplus e_nC_n^0$ as a right $C_n^0$-module, its even part is canonically $N$ and its odd part is $e_n\otimes N$. Hence $G(N)$ is finite-dimensional and taking its even part returns $N$. [F2, F3, step 1.1, construct]


2.2 For $M$, define evaluation $\varepsilon:C_n\otimes_{C_n^0}M^0\to M$ by $a\otimes m\mapsto am$. It is well-defined because $ab\otimes m=a\otimes bm$ for $b\in C_n^0$. On the even part it is the canonical isomorphism $C_n^0\otimes_{C_n^0}M^0\cong M^0$. On the odd part it sends $e_n\otimes m$ to $e_nm$; this is bijective since $e_n:M^0\to M^1$ has inverse $-e_n$. Therefore evaluation is an even graded $C_n$-module isomorphism. [given, F1, step 1.1, algebra]


3.1 The restriction functor $M\mapsto M^0$ and induction $N\mapsto C_n\otimes_{C_n^0}N$ are inverse up to the natural isomorphisms in steps 2.1 and 2.2, so they give an equivalence. At $n=0$, $C_0=\mathbb R$ is purely even; a one-dimensional module concentrated in odd parity has even part zero, while a one-dimensional even module has even part $\mathbb R$. Thus the same equivalence fails at $n=0$, and the two parity generators must remain distinct in $M_0\cong\mathbb Z\oplus\mathbb Z$. [F1, F4, step 2.1, step 2.2, algebra] ∎
