---
id: lem-heilbronn-simple-zero-quadratic-descent-under-choice
kind: lemma
title: Descent of a simple Dedekind zeta zero through a normal extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice
- thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
- cor-frobenius-reciprocity-for-complex-characters
- thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one
- thm-fundamental-theorem-of-finite-galois-theory
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: AC, CC and DC are inherited from the positive-half-plane Artin analytic interface.
sources:
  references:
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Section 3, Theorem 3 and proof, printed pp. 144–145. The proof is reconstructed below from the explicit analytic and finite-representation interfaces.
---

## Statement

Assume AC, Countable Choice and DC. Let $B/A$ be a finite Galois extension of number fields and let $\rho$ satisfy $0<\operatorname{Re}\rho<1$. Suppose $\rho$ is a simple zero of $\zeta_B(s)$. There is a cyclic intermediate extension $F/A$ such that, for every intermediate field $A\subseteq E\subseteq B$, $\zeta_E(\rho)=0$ if and only if $F\subseteq E$; every such zero is simple. All Artin $L$-functions of $B/A$ are holomorphic at $\rho$. If $\rho$ is real, then $F=A$ or $F/A$ is quadratic.

## Facts & Assumptions

**Given:** The normal extension, zero and choice assumptions in the Statement.

[F1] Complete Artin products for every finite-dimensional complex representation are meromorphic for $\operatorname{Re}s>0$; for a cyclic Galois group every irreducible Artin product is holomorphic there away from $s=1$. [[lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice]]

[F2] Complete Artin Euler factors obey induction and direct-sum identities on $\operatorname{Re}s>1$, including ramified primes. The induced trivial representation for a subgroup corresponds to the Dedekind zeta of its fixed field. [[lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice]]

[F3] Irreducible complex characters form an orthonormal basis of class functions, and character inner products satisfy Frobenius reciprocity for induction and restriction. Every irreducible character of a finite cyclic group has degree one. [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]] [[cor-frobenius-reciprocity-for-complex-characters]] [[thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one]]

[F4] The finite Galois correspondence reverses subgroup inclusion, and the fixed field of a normal subgroup has the corresponding quotient Galois group. [[thm-fundamental-theorem-of-finite-galois-theory]]

[A1] The positive-half-plane analytic interface assumes AC, CC and DC. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Put $G=\operatorname{Gal}(B/A)$. For each irreducible character $\chi$ of $G$, let $n_\chi$ be the integral order at $\rho$ of its meromorphic Artin function; negative order denotes a pole. This order is well-defined because [F1] supplies a meromorphic continuation and [F2] gives a nonzero Euler product on the initial half-plane. Define the virtual character $\theta_G=\sum_\chi n_\chi\chi$. For any subgroup $H\le G$, define $\theta_H$ similarly for $B/B^H$. The induction identity in [F2], continued from the common half-plane, and Frobenius reciprocity [F3] give $\theta_G|_H=\theta_H$: the coefficient of an irreducible $\psi$ of $H$ on either side is the order at $\rho$ of $L(s,\operatorname{Ind}_H^G\psi)$. [A1, F1, F2, F3, construct, algebra]

2.1 If $H$ is cyclic, every irreducible character $\psi$ of $H$ is linear by [F3] and its Artin function is holomorphic at $\rho$ by [F1]. The regular representation of $H$ is the direct sum of all these linear characters once. Applying [F2] with the trivial subgroup identifies the product of their Artin functions with $\zeta_B(s)$. Since the latter has a simple zero at $\rho$, all $n_\psi$ are nonnegative and their sum is one. Thus $\theta_H$ is one linear character. In particular, for every $g\in G$, taking $H=\langle g\rangle$ shows by step 1.1 that $|\theta_G(g)|=1$. Taking $H=\{1\}$ gives $\theta_G(1)=1$. [F1, F2, F3, step 1.1, given, algebra]

3.1 The character norm is therefore $$\langle\theta_G,\theta_G\rangle_G=|G|^{-1}\sum_{g\in G}|\theta_G(g)|^2=1.$$ By orthonormality [F3] it also equals $\sum_\chi n_\chi^2$. As all $n_\chi$ are integers, precisely one equals $1$ or $-1$ and all others vanish. The equality $\theta_G(1)=1$ forces this coefficient to be $1$ and its character $\lambda$ to have degree one. In particular all $n_\chi\ge0$, so all irreducible Artin functions and hence all finite-dimensional Artin functions are holomorphic at $\rho$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 Let $N=\ker\lambda$ and let $F=B^N$. The image of a finite group under a complex linear character is a finite subgroup of $\mathbb C^\times$ and is cyclic; hence [F4] gives $F/A$ cyclic. For $E=B^H$, the induction identity [F2] identifies $\zeta_E(s)$ with the Artin function induced from the trivial character of $H$. Its order at $\rho$ is, by steps 1.1 and 3.1, $$\langle\lambda|_H,1_H\rangle_H=\frac1{|H|}\sum_{h\in H}\lambda(h).$$ This average is $1$ when $H\subseteq N$ and $0$ otherwise: if the restricted character is nontrivial, multiplication of the sum by one of its character values different from one forces the sum to vanish. By [F4], $H\subseteq N$ is equivalent to $F\subseteq E$. Thus the zero criterion and simplicity hold for every intermediate field. [F2, F3, F4, step 1.1, step 3.1, construct, algebra]

5.1 Suppose $\rho$ is real. For real $s>1$, complex conjugating every complete local Euler factor for $\chi$ gives the factor for $\overline\chi$. By continuation, their meromorphic functions satisfy $L(\overline s,\overline\chi)=\overline{L(s,\chi)}$, so $n_{\overline\chi}=n_\chi$ at the real point $\rho$. Step 3.1 shows that the unique character with order one is therefore real-valued: $\overline\lambda=\lambda$. A real finite subgroup of $\mathbb C^\times$ is contained in $\{\pm1\}$, so $[G:N]\le2$. Thus $F=A$ or $F/A$ is quadratic. [F1, F2, step 3.1, step 4.1, algebra] ∎
