---
id: thm-finite-parseval-and-plancherel
kind: theorem
title: "Finite Parseval and Plancherel identity for the unitary DFT"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       def-counting-inner-product-on-complex-functions-on-z-mod-n,
       def-finite-sum-in-a-commutative-monoid,
       def-integers-modulo-n,
       def-rational-power,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-complex-conjugation-and-modulus-laws,
       lem-finite-sum-reindexing-and-fubini,
       lem-orthogonality-of-characters-on-a-finite-cyclic-group,
       lem-rational-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, Proposition 11.1: $\\Phi_n$ is a unitary isomorphism; formula (11.5) fixes the two inner products"
    - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)"
      url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
      locator: "Appendix C.3, printed p. 435: the Parseval formula $\\langle f,g\\rangle_G=\\langle\\widehat f,\\widehat g\\rangle_{\\widehat G}$, of which the finite cyclic case is the instance proved here"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $N\ge1$ and $f,g\in\mathbb C^{\mathbb Z/N}$. Then

$$\langle\mathcal F_Nf,\mathcal F_Ng\rangle=\langle f,g\rangle,$$

where both pairings are the counting inner products of [[def-counting-inner-product-on-complex-functions-on-z-mod-n]]. In particular

$$\sum_{k=0}^{N-1}|(\mathcal F_Nf)(k)|^2=\sum_{x=0}^{N-1}|f(x)|^2,$$

so $\mathcal F_N$ preserves the counting inner product; invertibility of $\mathcal F_N$ is not asserted here.

## Facts & Assumptions

**Given:** A natural number $N\ge1$, functions $f,g\in\mathbb C^{\mathbb Z/N}$, and classes $x,y\in\mathbb Z/N\mathbb Z$.

[F1] $\mathcal F_Nh(k)=N^{-1/2}\sum_{x=0}^{N-1}h([x]_N)e^{-2\pi ikx/N}$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]); $\langle u,v\rangle=\sum_{z\in\mathbb Z/N}u(z)\overline{v(z)}$ is the counting inner product ([[def-counting-inner-product-on-complex-functions-on-z-mod-n]]).

[F2] $\sum_{k=0}^{N-1}e^{2\pi i(a-b)k/N}=N$ when $a\equiv b\pmod N$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F3] Finite sums over $\mathbb Z/N\mathbb Z$ are computed from any enumeration, are invariant under reindexing along a bijection, split over disjoint unions, satisfy the finite Fubini rule, and carry scalar factors ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]); the classes $[0]_N,\dots,[N-1]_N$ enumerate the group ([[thm-standard-representatives-modulo-n]]).

[L1] $\exp(u+v)=\exp u\exp v$ and $\exp w=1$ exactly for $w\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[L2] Conjugation and modulus: $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$, $z\overline z=|z|^2$, $|z|=0\iff z=0$ ([[lem-complex-conjugation-and-modulus-laws]]); $|\exp(x+iy)|=e^{x}$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L3] Rational powers: $N^{-1/2}N^{-1/2}=N^{-1}$ and $N^{-1}N=1$ ([[def-rational-power]], [[lem-rational-power-laws]]); the field laws of $\mathbb C$ ([[thm-complex-numbers-form-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Conjugation of the second factor: for each class $k$, $\overline{(\mathcal F_Ng)(k)}=N^{-1/2}\sum_{y=0}^{N-1}\overline{g([y]_N)}\,e^{2\pi iky/N}$. Indeed, conjugation is additive and multiplicative and fixes the real scalar $N^{-1/2}$ ([[lem-complex-conjugation-and-modulus-laws]], [[lem-rational-power-laws]]); and $\overline{e^{-2\pi iky/N}}=e^{2\pi iky/N}$, because for $\zeta=e^{i\theta}$ with $\theta=-2\pi ky/N$ one has $|\zeta|=1$ by [L2] and hence $\overline\zeta=|\zeta|^2/\zeta=\zeta^{-1}=e^{-i\theta}$. [F1, F2, F3, L1, L2, L3]

1.2 The orthogonality sum: $\sum_{k=0}^{N-1}e^{-2\pi ik(x-y)/N}=N$ when $[x]=[y]$ and $0$ otherwise, by [F2] with the integers $y$ and $x$ in the roles of the two congruence parameters. [F2]

1.3 Collapsing a sum supported at one class: for any $c:\mathbb Z/N\mathbb Z\to\mathbb C$ and class $a$, $\sum_{y\in\mathbb Z/N}c(y)\cdot(N\text{ if }y=a,\ 0\text{ otherwise})=N\,c(a)$; split the index set into $\{a\}$ and its complement by [F3], the complement contributing $0$ because every term there has the factor $0_{\mathbb C}$. [F3]

2.1 Expanding the pairing: substituting [F1] for both transforms, step 1.1 for the conjugate factor, and interchanging the finite sums by [F3] gives $\langle\mathcal F_Nf,\mathcal F_Ng\rangle=N^{-1}\sum_{x=0}^{N-1}\sum_{y=0}^{N-1}f([x]_N)\overline{g([y]_N)}\sum_{k=0}^{N-1}e^{-2\pi ik(x-y)/N}$, where the exponentials combine by the addition law [L1] and the scalar is $N^{-1/2}N^{-1/2}=N^{-1}$ by [L3]. [F1, F3, L1, L3, step 1.1]

3.1 Evaluating the inner sum by step 1.2 and then collapsing the outer sum by step 1.3 gives $\langle\mathcal F_Nf,\mathcal F_Ng\rangle=N^{-1}\sum_{x=0}^{N-1}N\,f([x]_N)\overline{g([x]_N)}=\sum_{x=0}^{N-1}f([x]_N)\overline{g([x]_N)}=\langle f,g\rangle$ by [L3] and the standard-representative form of the counting inner product [F1]. Taking $g=f$ and using $z\overline z=|z|^2$ from [L2], the same computation gives $\sum_k|(\mathcal F_Nf)(k)|^2=\sum_x|f([x]_N)|^2$; both assertions are proved. [F1, F3, L2, L3, step 1.2, step 1.3, step 2.1] ∎

## Remarks

- **Isometry versus unitary isomorphism.** The identity proved here says that $\mathcal F_N$ preserves the counting inner product; it does not by itself assert that $\mathcal F_N$ is bijective, and none of its steps uses inversion. Invertibility is the separate content of the inversion theorem on this page, and [L2] alone does not supply it.

- **Both sides use the same weight.** There is no factor $1/N$ on either side of the displayed identity, and the cancellation of the two $N^{-1/2}$ factors against the orthogonality value $N$ is the only place where the normalisation is used. In Taylor's convention the same computation reads as the unitarity of $\Phi_n$ between the $(1/n)$-weighted space on $\Gamma_n$ and the counting-measure space on $\mathbb Z_n$ (11.5).
