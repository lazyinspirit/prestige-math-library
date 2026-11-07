---
id: thm-tz-relative-hecke-character-exceptional-zero-bound
kind: theorem
title: Stark bound for a real Hecke-character exceptional zero in an abelian extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-effective-real-dedekind-zero-gap-by-quadratic-descent
- lem-quadratic-number-field-principal-product-and-canonical-hecke-character
- lem-quadratic-hecke-conductor-discriminant-and-real-signs
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- thm-fundamental-theorem-of-finite-galois-theory
- thm-minkowski-bound-for-ideal-classes
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: The original AC, CC and DC scope is unchanged; it covers the local analytic, arithmetic and Galois interfaces actually used.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
    url: https://arxiv.org/pdf/1803.02823v3
    locator: Section 3, Theorem 3.3 and its proof; Q is defined in equations (1.11) and (3.1).
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Section 3 Lemma 8 and Theorem 1′ proof, printed pp. 145 and 148; the separately proved source-supported general real-zero gap suffices here.
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/K$ be a finite abelian Galois extension of number fields, let $n_K=[K:\mathbb Q]$, $D_K=|d_K|$, and $G=\operatorname{Gal}(L/K)$. For each $\psi\in\widehat G=\operatorname{Hom}(G,\mathbb C^\times)$, let $\psi_H$ be its associated primitive ray-class Hecke character under Artin reciprocity and let $\mathfrak f_\psi$ be the finite ideal part of the least modulus through which $\psi_H$ factors, with the infinite-place parity recorded separately. Put
$$Q_0(L/K):=\max_{\psi\in\widehat G}N_{K/\mathbb Q}\mathfrak f_\psi,\qquad \mathcal Q(L/K):=D_K\,Q_0(L/K)\,n_K^{n_K}.$$
The set $\widehat G$ is finite and nonempty, so $Q_0(L/K)$ is a well-defined positive integer. If a real-valued character $\chi\in\widehat G$ has a real zero $\beta\in(0,1)$ of its associated Hecke $L$-function and $\mathcal Q(L/K)>1$, write $\beta=1-\lambda/\log\mathcal Q(L/K)$. Then
$$\lambda\gg\mathcal Q(L/K)^{-2},$$
with an effective absolute implied constant.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[lem-effective-real-dedekind-zero-gap-by-quadratic-descent]]

## Facts & Assumptions

**Given:** The original abelian extension, finite Artin-associated character family, real character $\chi$ and real zero $\beta$, and AC, CC and DC.

[F1] A real character of the finite Galois group has values in $\{\pm1\}$; its nontrivial kernel cuts out the quadratic intermediate extension $E/K$. For any given quadratic extension its canonical primitive Hecke character has split/inert values $\pm1$, finite conductor $\mathfrak d_{E/K}$, and the full identity $\zeta_E=\zeta_KL(s,\chi_{E/K})$ in the Euler half-plane. Also $D_E=D_K^2N\mathfrak f_{\chi_{E/K}}$ and $[E:\mathbb Q]=2n_K$. [[thm-fundamental-theorem-of-finite-galois-theory]] [[lem-quadratic-number-field-principal-product-and-canonical-hecke-character]] [[lem-quadratic-hecke-conductor-discriminant-and-real-signs]]

[F2] Primitive Hecke characters with identical pullbacks to a common modulus are identical and have identical conductors. Their Hecke functions continue holomorphically in the open critical strip. The Dedekind zeta function has meromorphic continuation and is holomorphic there. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F3] Every real zero of a degree-$m$ number-field zeta with $D_E>1$ has gap at least $\min\{(4m!\log D_E)^{-1},cD_E^{-1/m}\}$ for an absolute effective $c>0$. This separately reconstructed general estimate is sufficient here; no full three-case Stark theorem is assumed. [[lem-effective-real-dedekind-zero-gap-by-quadratic-descent]]

[F4] The Minkowski ideal-class bound is $1\le(4/\pi)^{r_2}n!n^{-n}\sqrt{D_K}$. The ray-character principal-ideal convention gives its parity relation at $-1$. [[thm-minkowski-bound-for-ideal-classes]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[A1] All inputs use the stated AC, CC and DC branch. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Put $n=n_K$, $D=D_K$, $Q=\mathcal Q(L/K)$ and $q=Q_0(L/K)$. The finite character set contains the trivial character, and every conductor norm is a positive integer, so $q\ge1$. Since $D,n,q$ are positive integers and $Q>1$, one has $Q\ge2$. The character $\chi$ is real of finite order, so its values are $\pm1$. If it is nontrivial, its kernel has index two; let $E=L^{\ker\chi}$. Otherwise put $E=K$. [A1, F1, given, construct, algebra]

2.1 In the nontrivial case let $\chi_{E/K}$ be the given-extension character from [F1]. For every prime unramified in $L/K$, the GIVEN Artin correspondence evaluates the primitive Hecke character associated to $\chi$ as $\chi(\operatorname{Frob}_\mathfrak p)$. This equals the split/inert value of $\chi_{E/K}$. Enlarge to a common ray modulus containing the two conductors and all primes ramified in $L/K$. Equality on its prime generators gives equality of the two pullbacks, so [F2] identifies their primitive characters and conductors. Thus [F1] gives $\zeta_E=\zeta_KL(s,\chi_H)$ above one, with $m=[E:\mathbb Q]=2n$ and $D_E=D^2N\mathfrak f_\chi\le D^2q$. Both factors extend holomorphically to $\beta$ by [F2], so $\zeta_E(\beta)=0$. If $\chi$ is trivial, $E=K$, $L(s,\chi_H)=\zeta_K(s)$, $m=n$, and $D_E=D\le D^2q$. In either case $m\le2n$ and $D_E\le D^2q\le Q^2$. [A1, F1, F2, step 1.1, given, algebra]

3.1 For $n=1$, $K=\mathbb Q$. Its zeta function has no zero on $(0,1)$: the locally uniformly convergent alternating series $\eta(s)=\sum_{j\ge1}((2j-1)^{-s}-(2j)^{-s})$ is positive for real $0<s<1$ and satisfies $\eta(s)=(1-2^{1-s})\zeta(s)$ by continuation, so $\zeta(s)<0$. Hence $\chi$ is nontrivial and $m=2$. A nontrivial primitive ray character over $\mathbb Q$ has conductor at least $3$: if its finite modulus is $1$ or $2$, its residue character is trivial, and the principal-ideal formula at $-1$ forces even parity; every ideal of $\mathbb Z$ is principal, so the character is trivial. Thus $q\ge3$, $Q=q\ge3$ and $m!=2\le Q^2$. [F2, F4, step 1.1, step 2.1, algebra]

4.1 Suppose $n\ge2$. From [F4], $\sum_{j=1}^n\log j\le\int_1^n\log x\,dx+\log n$, and $r_2\le n/2$, obtain $$D\ge e^{-2}n^{-2}(e^2\pi/4)^n.$$ Put $a=e^2\pi/4>4$. The sequence $e^{-4}n^{-4}(a^2/4)^n$ eventually exceeds one because its ratio tends to $a^2/4>1$. Thus $D^2\ge4^n$ for all sufficiently large $n$, and after one absolute constant adjustment this bound holds for all $n\ge2$. Therefore $$m!\le(2n)!\le(2n)^{2n}=4^n n^{2n}\ll D^2n^{2n}\le Q^2.$$ The same displayed Minkowski lower bound is greater than one for $n=2$ and strictly increases with $n\ge2$; hence $D>1$. In the quadratic case $D_E\ge D^2$, and in the trivial case $D_E=D$, so $D_E>1$ and $m\ge2$ in all cases. [F1, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 Apply [F3] to $E$ and the zero from step 2.1. Because $D_E\le Q^2$, $$1-\beta\ge\min\left\{\frac1{8m!\log Q},\;cQ^{-2/m}\right\}.$$ Multiplying by $\log Q$ gives the first branch $\gg Q^{-2}$ by steps 3.1–4.1. As $m\ge2$ and $Q\ge2$, the second branch is at least $c(\log Q)Q^{-1}\gg Q^{-2}$. By the GIVEN definition, $\lambda=(1-\beta)\log Q$, so $\lambda\gg Q^{-2}$ with an absolute effective implied constant. This proves the full unchanged Statement. [F3, step 1.1, step 2.1, step 3.1, step 4.1, given, algebra] ∎
