---
id: thm-finite-order-hecke-l-euler-product
kind: theorem
title: "Absolute convergence and Euler product for a finite-order Hecke L-series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-dedekind-zeta-euler-product
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: >-
  AC and Countable Choice are inherited from the ray-class exact-sequence
  interface. The comparison with the Dedekind zeta series is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §8, Proposition 8.1"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.493–495, absolute convergence and Euler product for Hecke L-series."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §2, Proposition 2.7, printed p.189, absolute convergence and Euler product for finite-order ideal characters."

---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field, let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus, let $\chi$ be a finite-order ray-class Hecke character modulo $\mathfrak m$, and let $s\in\mathbb C$ satisfy $\operatorname{Re}(s)>1$. Then $L(s,\chi)$ converges absolutely and
$$L(s,\chi)=\prod_{\mathfrak p\nmid\mathfrak m_0}\left(1-\chi(\mathfrak p)(N\mathfrak p)^{-s}\right)^{-1}.$$

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-dedekind-zeta-euler-product]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[thm-ideal-norm-is-multiplicative]]

## Facts & Assumptions

**Given:** AC, Countable Choice, DC; a number field $K$, modulus $\mathfrak m$, finite-order ray-class character $\chi$, and $s$ with $\sigma=\operatorname{Re}(s)>1$.

[F1] $L(s,\chi)=\sum_{\mathfrak a\ne0}\chi(\mathfrak a)(N\mathfrak a)^{-s}$, with $\chi(\mathfrak a)=0$ on ideals not coprime to $\mathfrak m_0$. [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] If $\mathfrak a$ is coprime to $\mathfrak m_0$, then $|\chi(\mathfrak a)|=1$: its value belongs to the finite image of $\chi$, so some positive power is $1$ and its complex modulus is $1$; otherwise its extended value is zero. [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F3] The Dedekind zeta series $\sum_{\mathfrak a\ne0}(N\mathfrak a)^{-\sigma}=\zeta_K(\sigma)$ converges absolutely for $\sigma>1$. [[thm-dedekind-zeta-euler-product]]

[F4] Every nonzero integral ideal has a unique finite factorisation into prime ideals. [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F5] Absolute ideal norms multiply under ideal multiplication. [[thm-ideal-norm-is-multiplicative]]

[A1] AC and Countable Choice are inherited from the ray-class exact-sequence interface; the Euler-product argument below makes no choice. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 By [F1] and [F2], each absolute summand of $L(s,\chi)$ is at most $(N\mathfrak a)^{-\sigma}$. Thus $\sum_{\mathfrak a\ne0}|\chi(\mathfrak a)(N\mathfrak a)^{-s}|\le\zeta_K(\sigma)<\infty$ by [F3], proving absolute convergence. [A1, F1, F2, F3, given, algebra]

1.2 Let $S$ be a finite set of prime ideals not dividing $\mathfrak m_0$. Expanding each geometric series in $\prod_{\mathfrak p\in S}(1-\chi(\mathfrak p)(N\mathfrak p)^{-s})^{-1}$ gives the sum over ideals whose prime support is contained in $S$: unique factorisation [F4] gives one exponent tuple per ideal, and multiplicativity [F5] gives its norm. [F4, F5, given, algebra]

2.1 Every integral ideal coprime to $\mathfrak m_0$ has finite prime support. Increasing $S$ through all finite subsets of the primes away from $\mathfrak m_0$ therefore exhausts the series in [F1]. The omitted absolute tails tend to zero by step 1.1, so the finite Euler products converge to $L(s,\chi)$, proving the displayed identity. [F1, step 1.1, step 1.2] ∎
