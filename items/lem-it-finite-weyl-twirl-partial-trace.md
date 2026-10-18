---
id: lem-it-finite-weyl-twirl-partial-trace
kind: lemma
title: The finite Weyl twirl is the normalized partial trace
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-de-moivre-formula
  - thm-eulers-formula
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces with $d=\dim K\ge1$, and fix an ordered orthonormal basis $e_0,\ldots,e_{d-1}$ of $K$. Let $X e_j=e_{j+1\,\mathrm{mod}\,d}$ and $Z e_j=\omega^j e_j$, where $\omega=\exp(2\pi i/d)$ (and $\omega=1$ when $d=1$). For $R\in\operatorname{End}(H\otimes K)$,
$$\frac1{d^2}\sum_{p,q=0}^{d-1}(I_H\otimes X^pZ^q)R(I_H\otimes X^pZ^q)^\dagger=(\operatorname{Tr}_K R)\otimes I_K/d.$$

## Facts & Assumptions

**Given:** Finite-dimensional complex-inner-product spaces $H,K$, $d=\dim K\ge1$, an ordered orthonormal basis of $K$, and $R\in\operatorname{End}(H\otimes K)$.

[F1] [[def-qc-partial-trace]]: in an ordered product basis with the retained factor first, $(\operatorname{Tr}_K R)_{ii'}=\sum_jR_{(i,j),(i',j)}$.

[F2] [[def-qc-tensor-register-and-permutation]]: the product basis is ordered by factor indices and elementary-tensor pairings are products of the factor pairings.

[F3] [[cor-complex-de-moivre-formula]]: integer powers of $\cos\theta+i\sin\theta$ equal $\cos(n\theta)+i\sin(n\theta)$.

[F4] [[thm-kernel-and-fibres-of-complex-exponential]]: $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$.

[F5] [[thm-eulers-formula]]: $\exp(i\theta)=\cos\theta+i\sin\theta$ for real $\theta$.

## Proof

1.1 If $d\ge2$, Euler's identity [F5] and the integer-power formula [F3] give $\omega^m=\exp(2\pi i m/d)$ for every integer $m$. By [F4], this equals $1$ exactly when $d$ divides $m$, so $\omega$ has exact order $d$ and $|\omega|=1$. The shift $X$ permutes the orthonormal basis and the phase $Z$ multiplies its vectors by unit scalars, so both are unitary. For $d=1$ both are the identity. For $d\ge2$, $d^{-1}\sum_{q=0}^{d-1}\omega^{qm}$ is $1$ when $d\mid m$; otherwise multiplication by $1-\omega^m\ne0$ makes the geometric sum telescope to $1-\omega^{md}=0$, so it is $0$. [given, F2, F3, F4, F5, algebra]

2.1 Write $E_{ab}=|e_a\rangle\langle e_b|$ and expand $R=\sum_{a,b=0}^{d-1}R_{ab}\otimes E_{ab}$ in the product basis. Direct action on basis vectors gives $Z^qE_{ab}(Z^q)^\dagger=\omega^{q(a-b)}E_{ab}$ and $X^pE_{ab}(X^p)^\dagger=E_{a+p,b+p}$, with indices modulo $d$. Averaging first over $q$ using step 1.1 removes every $a\ne b$ term and keeps $R_{aa}\otimes E_{aa}$. [given, F2, step 1.1, algebra]

3.1 For each remaining diagonal unit, $d^{-1}\sum_{p=0}^{d-1}E_{a+p,a+p}=I_K/d$. Therefore the full average is $\sum_aR_{aa}\otimes I_K/d$. By [F1], $\sum_aR_{aa}=\operatorname{Tr}_K R$, giving the identity. When $d=1$, [F1] says $\operatorname{Tr}_K R$ is the unique coefficient $R_{00}$, so the same equality holds. [given, F1, step 2.1, algebra] ∎
