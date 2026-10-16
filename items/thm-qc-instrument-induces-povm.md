---
id: thm-qc-instrument-induces-povm
kind: theorem
title: "Every finite instrument induces a unique POVM"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-instrument-and-conditional-state
  - thm-qc-kraus-choi-equivalence
  - def-qc-kraus-representation
  - thm-qc-instrument-kraus-normalization
  - def-qc-finite-positive-effect-family
  - def-qc-povm-and-outcome-law
  - def-non-negative-and-positive-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - def-trace-of-an-endomorphism
  - prop-trace-is-linear
  - thm-trace-of-ab-equals-trace-of-ba
  - lem-qc-trace-pairing-nondegenerate
justified_by: []
dependency_level: 7
proof_strategy: direct
axiom_use: "None; the finite family of Kraus lists is selected by finite induction."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018 author-hosted draft), §§2.2.2 and 2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $(\mathcal I_a)_{a\in\Omega}$ be a finite instrument from a nonzero finite-dimensional complex inner-product space $H$ to a finite-dimensional complex inner-product space $K$. There is a unique finite POVM $(E_a)_{a\in\Omega}$ on $H$ such that
$$\operatorname{tr}_K(\mathcal I_a(X))=\operatorname{tr}_H(XE_a)\qquad(X\in\mathcal L(H),\ a\in\Omega).$$
Consequently, for every density operator $\rho$ on $H$, the instrument probability $\operatorname{tr}_K(\mathcal I_a(\rho))$ equals the POVM weight $\operatorname{tr}_H(\rho E_a)$.

## Facts & Assumptions

**Given:** The finite instrument and its finite nonempty outcome set $\Omega$.

[F1] [[def-qc-instrument-and-conditional-state]]: every $\mathcal I_a:\mathcal L(H)\to\mathcal L(K)$ is completely positive and $\sum_a\operatorname{tr}_K(\mathcal I_a(X))=\operatorname{tr}_H(X)$ for every $X$.

[F2] [[thm-qc-kraus-choi-equivalence]]: every completely positive finite-dimensional map between full operator spaces has a finite Kraus representation.

[F3] [[def-qc-kraus-representation]]: a finite Kraus family $(M_j)$ represents $\Phi$ when $\Phi(X)=\sum_j M_j X M_j^\dagger$ for every input operator $X$.

[F4] [[thm-qc-instrument-kraus-normalization]]: for finite branch Kraus families of an instrument, $\sum_{a,j}M_{a,j}^\dagger M_{a,j}=I_H$.

[F5] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[prop-adjoint-algebra]]: $\langle Tv,w\rangle=\langle v,T^\dagger w\rangle$, $(ST)^\dagger=T^\dagger S^\dagger$, and $(T^\dagger)^\dagger=T$.

[F6] [[def-non-negative-and-positive-operator]]: non-negativity means self-adjointness and a non-negative quadratic form.

[F7] [[def-qc-finite-positive-effect-family]] and [[def-qc-povm-and-outcome-law]]: a finite POVM is a nonempty finite family of non-negative operators summing to identity, and its outcome weights are $\operatorname{tr}(\rho E_a)$.

[F8] [[prop-trace-is-linear]] and [[thm-trace-of-ab-equals-trace-of-ba]]: trace is linear and $\operatorname{tr}_K(AB)=\operatorname{tr}_H(BA)$ for compatible rectangular maps $A:H\to K$, $B:K\to H$.

[F9] [[lem-qc-trace-pairing-nondegenerate]]: if $\operatorname{tr}_H(AX)=0$ for every $X\in\mathcal L(H)$, then $A=0$.

## Proof


1.1 For each $a\in\Omega$, [F1] makes $\mathcal I_a$ completely positive, so [F2] supplies a finite family $(M_{a,j})_j$ representing it as in [F3]. If the supplied family is empty, append one zero operator; this preserves the formula and makes each index list nonempty. Since $\Omega$ is finite, the lists can be selected one at a time by finite induction; no arbitrary-index choice is used. [given, F1, F2, F3, choose]

2.1 Define $\Phi=\sum_{a\in\Omega}\mathcal I_a$. Concatenating the finite lists in step 1.1 gives a Kraus representation of $\Phi$. These are exactly the finite branch Kraus families of the instrument in [F1], so [F4] gives $\sum_{a,j}M_{a,j}^\dagger M_{a,j}=I_H$. [given, step 1.1, F1, F3, F4, algebra]

3.1 For each outcome define $E_a=\sum_jM_{a,j}^\dagger M_{a,j}$. By [F5], each summand is self-adjoint and $\langle M_{a,j}^\dagger M_{a,j}x,x\rangle=\langle M_{a,j}x,M_{a,j}x\rangle\ge0$. Thus each $E_a$ is non-negative by [F6]. Step 2.1 gives $\sum_aE_a=I_H$, so $(E_a)$ is a finite POVM by [F7]. [given, step 2.1, F5, F6, F7, algebra]

4.1 For every $X\in\mathcal L(H)$, the Kraus formula [F3], trace linearity, and rectangular cyclicity [F8] give $\operatorname{tr}_K(\mathcal I_a(X)) =\sum_j\operatorname{tr}_K(M_{a,j}XM_{a,j}^\dagger) =\sum_j\operatorname{tr}_H(XM_{a,j}^\dagger M_{a,j}) =\operatorname{tr}_H(XE_a)$. This proves the displayed outcome-law identity for every density operator as well. [given, step 1.1, step 3.1, F3, F8, algebra]

5.1 If another family $E'_a$ has the same identity for every $X$, then $\operatorname{tr}_H(X(E_a-E'_a))=0$ for all $X$. By [F8], this equals $\operatorname{tr}_H((E_a-E'_a)X)$; [F9] implies $E_a-E'_a=0$. This holds for each $a$, so the induced POVM is unique. [given, step 4.1, F8, F9, algebra] ∎

