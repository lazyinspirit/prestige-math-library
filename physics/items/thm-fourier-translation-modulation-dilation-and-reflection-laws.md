---
id: thm-fourier-translation-modulation-dilation-and-reflection-laws
kind: theorem
title: Translation, modulation, linear dilation and reflection laws
deps: ["lem-l-one-fourier-transform-is-well-defined", "cor-c-one-change-of-variables-for-l-one-functions", "thm-complex-exponential-addition-and-real-extension", "def-translation-of-a-function-on-rn", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Propositions 11.12–11.13, p.123; Teschl Lemma 14.2 for translations/modulations
---

## Statement

Assume countable choice. For $f\in L^1(\mathbb R^n;\mathbb C)$, $a,b\in\mathbb R^n$, and invertible real $n\times n$ matrix $A$, put $\tau_af(x)=f(x-a)$ and $M_bf(x)=e^{2\pi ib\cdot x}f(x)$. Then, at every frequency,
$$\widehat{\tau_af}(\xi)=e^{-2\pi ia\cdot\xi}\widehat f(\xi),\qquad\widehat{M_bf}(\xi)=\widehat f(\xi-b),\qquad\widehat{f\circ A}(\xi)=|\det A|^{-1}\widehat f(A^{-T}\xi).$$
Also $\widehat{f(-\cdot)}(\xi)=\widehat f(-\xi)$ and $\widehat{\overline f}(\xi)=\overline{\widehat f(-\xi)}$.

## Facts & Assumptions

**Given:** The stated data and [[def-countable-choice]]; translation has the convention of [[def-translation-of-a-function-on-rn]].

[F1] The transform is defined on classes at every frequency ([[lem-l-one-fourier-transform-is-well-defined]]).

[F2] The complex $L^1$ change-of-variables formula for a $C^1$ diffeomorphism uses the absolute Jacobian determinant, under countable choice ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F3] Exponentials satisfy the addition law ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

1.1 The maps $y\mapsto y+a$ and $x\mapsto Ax$ are $C^1$ diffeomorphisms of the open set $\mathbb R^n$, with determinants $1$ and $\det A\ne0$. Applying F2 to $|f|$ proves $\|\tau_af\|_1=\|f\|_1$ and $\|f\circ A\|_1=|\det A|^{-1}\|f\|_1$; unit modulus gives $\|M_bf\|_1=\|\overline f\|_1=\|f\|_1$. These operations preserve null equivalence, by the same substitution applied to indicators of null sets (or directly by its null-set proof). Countable choice is precisely the assumption inherited from this Lebesgue substitution interface. [F1, F2, given]

2.1 Substituting $x=y+a$ in the absolutely convergent translation integral gives $\int f(y)e^{-2\pi i(y+a)\cdot\xi}\,dy=e^{-2\pi ia\cdot\xi}\widehat f(\xi)$. Combining exponential factors in the modulation integral gives $e^{-2\pi ix\cdot(\xi-b)}$, hence the modulation formula. [F2, F3, step 1.1]

3.1 Substituting $y=Ax$ gives $x\cdot\xi=y\cdot A^{-T}\xi$ and $dx=|\det A|^{-1}dy$, proving the dilation formula. For $A=-I$ its determinant has absolute value one, proving reflection even when orientation is reversed. Finally conjugate the componentwise integral for $\widehat f(-\xi)$: conjugation commutes with its real and imaginary integrals and sends $e^{2\pi ix\cdot\xi}$ to $e^{-2\pi ix\cdot\xi}$. This proves the last identity. All equalities are pointwise because F1 gives absolute convergence at each frequency. [F1, F2, step 1.1, step 2.1] ∎
