---
id: thm-biquadratic-dedekind-zeta-factorization
kind: theorem
title: "Euler-factor identity for a biquadratic field and its quadratic subfields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-finite-galois-extension-and-galois-group
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-normal-subgroups-and-quotients-in-the-galois-correspondence
  - thm-dedekind-zeta-euler-product
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - cor-norm-of-a-prime-ideal
  - thm-frobenius-elements-above-a-prime-are-conjugate
  - cor-galois-prime-decomposition-efg
  - thm-frobenius-order-is-residue-degree
  - cor-complete-splitting-and-trivial-frobenius
  - cor-frobenius-compatibility-in-finite-towers
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.457–459: Dedekind zeta Euler factors, prime factorization and local norms."
    - title: "J. S. Milne, Class Field Theory, Chapter VI §2"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.184–190: Dedekind zeta Euler products and prime-ideal norms."

---

## Statement

Let $F/\mathbb Q$ be a finite Galois extension with Galois group isomorphic to the Klein four group $V_4$, and let $K_1,K_2,K_3$ be its three quadratic intermediate fields. For a rational prime $p$ unramified in $F$ and each $E\in\{\mathbb Q,K_1,K_2,K_3,F\}$, define its local Dedekind Euler factor by
$$Z_{E,p}(s):=\prod_{\mathfrak q\mid p\mathcal O_E}\left(1-(N\mathfrak q)^{-s}\right)^{-1},\qquad \operatorname{Re}(s)>1.$$
Then for every such $p$,
$$Z_{F,p}(s)Z_{\mathbb Q,p}(s)^2=Z_{K_1,p}(s)Z_{K_2,p}(s)Z_{K_3,p}(s).$$

## Statement references

[[def-finite-galois-extension-and-galois-group]]

[[thm-fundamental-theorem-of-finite-galois-theory]]

[[thm-dedekind-zeta-euler-product]]

[[def-absolute-norm-of-an-ideal]]

## Facts & Assumptions

**Given:** A finite Galois extension $F/\mathbb Q$ with group $G\cong V_4$, its three quadratic intermediate fields $K_i$, a rational prime $p$ unramified in $F$, and $s$ with $\operatorname{Re}(s)>1$.

[F1] The local factor of $\zeta_E(s)$ at $p$ is the product over prime ideals $\mathfrak q\mid p\mathcal O_E$ of $(1-(N\mathfrak q)^{-s})^{-1}$, and the global zeta series has this Euler product ([[thm-dedekind-zeta-euler-product]], [[def-absolute-norm-of-an-ideal]]).

[F2] The three quadratic intermediate fields correspond to the three order-two subgroups $H_i=\operatorname{Gal}(F/K_i)$ of $V_4$; every nonidentity $\sigma\in V_4$ lies in exactly one $H_i$, and its images in the other two quotients $V_4/H_j$ are nonidentity elements of order two ([[thm-fundamental-theorem-of-finite-galois-theory]], [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]]).

[F3] For an unramified prime in a finite Galois extension, Frobenius is independent of the prime above it when the Galois group is abelian; its order equals the residue degree, the number of primes above it satisfies $efg=[E:K]$, and restriction to an intermediate Galois field is the Frobenius there ([[thm-frobenius-elements-above-a-prime-are-conjugate]], [[thm-frobenius-order-is-residue-degree]], [[cor-galois-prime-decomposition-efg]], [[cor-frobenius-compatibility-in-finite-towers]]).

[F4] In a finite Galois extension, an unramified prime splits completely exactly when its Frobenius is the identity; for each prime $\mathfrak q$ above $p$, $N\mathfrak q=p^{f(\mathfrak q/p)}$ ([[cor-complete-splitting-and-trivial-frobenius]], [[def-prime-above-and-residue-degree]], [[cor-norm-of-a-prime-ideal]]).

## Proof

1.1 Fix $p$ and let $\sigma\in V_4$ be its Frobenius element in $F/\mathbb Q$. It is well defined because $V_4$ is abelian by [F3]. Put $x=p^{-s}$. For any field $E$ in the statement, if $p$ has $g_E$ primes above it, all with ramification index $1$ and residue degree $f_E$, then [F3] gives $g_Ef_E=[E:\mathbb Q]$, and [F4] gives $Z_{E,p}(s)=(1-x^{f_E})^{-g_E}$. [F1, F3, F4, given]

2.1 If $\sigma=1$, [F4] says $p$ splits completely in $F$ and in each $K_i$ by Frobenius restriction. The local factors are therefore $Z_{F,p}=(1-x)^{-4}$, $Z_{K_i,p}=(1-x)^{-2}$ for each $i$, and $Z_{\mathbb Q,p}=(1-x)^{-1}$. Hence both sides of the asserted identity equal $(1-x)^{-6}$. [F2, F3, F4, step 1.1]

2.2 If $\sigma\ne1$, its order is two. In $F/\mathbb Q$, [F3] gives $f_F=2$ and $g_F=4/2=2$, so $Z_{F,p}=(1-x^2)^{-2}$. By [F2], exactly one subgroup $H_i$ contains $\sigma$; the Frobenius image in that quotient is trivial, so [F4] gives $Z_{K_i,p}=(1-x)^{-2}$. In each other quotient the image has order two by [F2], hence residue degree two by [F3] and one prime above $p$ by $e=1$ and $efg=2$; thus each of those local factors is $(1-x^2)^{-1}$. Their product is $(1-x)^{-2}(1-x^2)^{-2}$, which equals $Z_{F,p}Z_{\mathbb Q,p}^2$ from step 1.1. [F2, F3, F4, step 1.1]

3.1 The cases $\sigma=1$ and $\sigma\ne1$ exhaust $V_4$, proving the local Euler-factor identity for every unramified rational prime $p$. [step 2.1, step 2.2] ∎