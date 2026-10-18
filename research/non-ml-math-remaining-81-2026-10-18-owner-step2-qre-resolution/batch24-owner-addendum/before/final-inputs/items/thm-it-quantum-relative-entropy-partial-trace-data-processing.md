---
id: thm-it-quantum-relative-entropy-partial-trace-data-processing
kind: theorem
title: Partial-trace data processing for finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-finite-dimensional-quantum-relative-entropy, thm-it-quantum-relative-entropy-joint-convexity, lem-it-quantum-relative-entropy-isometric-invariance, def-qc-partial-trace, def-qc-tensor-register-and-permutation, def-real-and-complex-inner-product-space, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-non-negative-operator-characterisations, thm-qc-partial-trace-positive-and-trace-preserving]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
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

[F6] [[def-it-finite-dimensional-quantum-relative-entropy]]: QRE uses support inclusion and the support-restricted spectral logarithms; if inclusion fails its value is $+\infty$.

[F7] [[thm-non-negative-operator-characterisations]]: non-negative operators have orthonormal eigenbases with nonnegative eigenvalues.

[F8] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F9] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument, so $z\mapsto\langle z,e_s\rangle e_r$ is linear.

## Proof

1.1 Choose an orthonormal basis $(e_j)_{j<d}$ of $H_B$ using [F8], and set $\omega=e^{2\pi i/d}$. Define $Xe_j=e_{j+1\bmod d}$ and $Ze_j=\omega^je_j$; these maps are unitary because they respectively permute the basis and multiply its vectors by unit-modulus scalars. For $M_{rs}z:=\langle z,e_s\rangle e_r$, write $R=\sum_{r,s}R_{rs}\otimes M_{rs}$. Averaging $X^aZ^b$ first over phases kills $r\ne s$, and averaging shifts sends each $M_{rr}$ to $I_B/d$. Thus the finite twirl is $\mathcal T(R):=d^{-2}\sum_{a,b}(I_A\otimes X^aZ^b)R(I_A\otimes X^aZ^b)^*=\operatorname{Tr}_B(R)\otimes I_B/d$ by [F3]; this formula also holds for $d=1$. [given, F3, F5, F8, F9, construct, choose, algebra]

1.2 For non-negative $C,D$ on $H_A$, their tensor products with $I_B/d$ have supports $\operatorname{supp}(C)\otimes H_B$ and $\operatorname{supp}(D)\otimes H_B$ by the tensor-product eigenbases [F7]. Thus support inclusion holds for $(C,D)$ exactly when it holds for $(C\otimes I_B/d,D\otimes I_B/d)$. In the finite branch, the tensor eigenvalues add $-\ln d$ to both logarithms, which cancels, while $\operatorname{tr}(I_B/d)=1$; hence $D(C\otimes I_B/d\|D\otimes I_B/d)=D(C\|D)$. If inclusion fails both sides are $+\infty$ by [F6]. [given, F6, F7, algebra]

2.1 Apply joint convexity [F1] to the finite average defining $\mathcal T$ and isometric invariance [F2] to each unitary conjugate. This gives $D(\mathcal T(A)\|\mathcal T(B))\le D(A\|B)$. [given, F1, F2, step 1.1, algebra]

3.1 By [F4], $C=\operatorname{Tr}_B A$ and $D=\operatorname{Tr}_B B$ are non-negative. Substitute them into step 1.2, use step 1.1 to identify their twirls, and then apply step 2.1 to obtain $D(\operatorname{Tr}_B A\|\operatorname{Tr}_B B)\le D(A\|B)$. [given, F4, step 1.1, step 1.2, step 2.1, algebra] ∎
