---
id: thm-it-quantum-relative-entropy-partial-trace-data-processing
kind: theorem
title: Partial-trace data processing for finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [thm-it-quantum-relative-entropy-joint-convexity, lem-it-quantum-relative-entropy-support-regularization, lem-it-quantum-relative-entropy-isometric-invariance, def-qc-partial-trace, def-qc-tensor-register-and-permutation, thm-qc-partial-trace-characterization-and-basis-independence, thm-qc-partial-trace-positive-and-trace-preserving]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§11.8–11.9"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H_A,H_B$ be nonzero finite-dimensional complex inner-product spaces, let $d=\dim H_B\ge1$, and let $A,B$ be non-negative operators on $H_A\otimes H_B$. Then

$$D(\operatorname{Tr}_B A\|\operatorname{Tr}_B B)\le D(A\|B).$$

## Facts & Assumptions

**Given:** The spaces and non-negative operators in the Statement.

[F1] [[thm-it-quantum-relative-entropy-joint-convexity]]: QRE is jointly convex for finite convex mixtures of non-negative operators.

[F2] [[lem-it-quantum-relative-entropy-isometric-invariance]]: QRE is invariant under simultaneous isometric conjugation.

[F3] [[def-qc-partial-trace]]: in product bases, $(\operatorname{Tr}_B R)_{ii'}=\sum_jR_{(i,j),(i',j)}$.

[F4] [[thm-qc-partial-trace-positive-and-trace-preserving]]: the partial trace preserves non-negativity and total trace.

[F5] [[def-qc-tensor-register-and-permutation]]: ordered product bases and their inner products retain the stated factor order.

## Proof

1.1 Choose an orthonormal basis $(e_j)_{j<d}$ of $H_B$ and set $\omega=e^{2\pi i/d}$. Define $Xe_j=e_{j+1\bmod d}$ and $Ze_j=\omega^je_j$. These operators permute the basis or multiply its vectors by unit-modulus scalars, so $X^aZ^b$ is unitary for every $a,b$. For matrix units $M_{rs}z:=\langle z,e_s\rangle e_r$, write $R=\sum_{r,s}R_{rs}\otimes M_{rs}$. The phase average $d^{-1}\sum_b\omega^{b(r-s)}$ is $1$ if $r=s$ and $0$ otherwise; the shift average sends each diagonal $M_{rr}$ to $I_B/d$. Thus, using [F3],

$$\mathcal T(R):=\frac1{d^2}\sum_{a,b}(I_A\otimes X^aZ^b)R(I_A\otimes X^aZ^b)^*=\operatorname{Tr}_B(R)\otimes I_B/d.$$

This also holds for $d=1$. [given, F3, F5, construct, choose, algebra]

2.1 Apply joint convexity [F1] to the finite average defining $\mathcal T$, and then apply isometric invariance [F2] to each unitary conjugate. This gives $D(\mathcal T(A)\|\mathcal T(B))\le D(A\|B)$. [given, F1, F2, step 1.1, algebra]

3.1 For non-negative $C,D$ on $H_A$, the supports of $C\otimes I_B/d$ and $D\otimes I_B/d$ are respectively $\operatorname{supp}(C)\otimes H_B$ and $\operatorname{supp}(D)\otimes H_B$. Hence the support inclusion branch is the same for $(C,D)$ and $(C\otimes I_B/d,D\otimes I_B/d)$. On that branch, tensor-product eigenvalues show that the $-\ln d$ terms in the two logarithms cancel and $\operatorname{tr}(I_B/d)=1$, so $D(C\otimes I_B/d\|D\otimes I_B/d)=D(C\|D)$. If support inclusion fails, both divergences are $+\infty$ by definition. [given, F4, F5, algebra]

4.1 Substitute $C=\operatorname{Tr}_B A$ and $D=\operatorname{Tr}_B B$ in step 3.1, then use step 1.1 to identify $\mathcal T(A)$ and $\mathcal T(B)$. Step 2.1 becomes the desired partial-trace inequality. [given, F3, step 1.1, step 2.1, step 3.1, algebra] ∎

