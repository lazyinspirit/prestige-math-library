---
id: ex-dirichlet-exceptional-zero-conductor-and-height-range
kind: example
title: "Conductor and height parameters in the classical zero-free region"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-classical-zero-free-region-dirichlet-l
  - def-exceptional-zero-of-a-real-primitive-dirichlet-l-function
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 70–72, conductor and height dependence in Theorem 24.19."
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., revised by Hugh L. Montgomery, Chapter 14"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
      locator: "Printed pp. 88–95, complete classical primitive-character region and exceptional-zero qualification."
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $q\ge2$ be an integer, let $\chi$ be a primitive Dirichlet character modulo $q$, and let $T\ge0$. For every zero $\rho=\beta+it$ with $|t|\le T$, the inequality
$$\log(q(|t|+3))\le\log(q(T+3))$$
shows that the classical zero-free statement supplies the common height-bounded region
$$\sigma>1-\frac{c}{\log(q(T+3))},$$
contains no zero except for at most one possible real simple exceptional zero when $\chi$ is real and nonprincipal. The example does not assert that this zero exists.

## Example references

[[thm-classical-zero-free-region-dirichlet-l]]

[[def-exceptional-zero-of-a-real-primitive-dirichlet-l-function]]

[Montgomery–Vaughan, Theorem 24.19](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Davenport, Chapter 14](https://djvu.online/file/Rh8B8jEVpxFgk)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, $q\ge2$, a primitive character $\chi$ modulo $q$, and $T\ge0$.

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are the hypotheses of the classical zero-free theorem. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]], [[thm-classical-zero-free-region-dirichlet-l]])

[F1] There is an absolute $c>0$ such that the classical region is zero-free except for at most one real simple zero when $\chi$ is real and nonprincipal ([[thm-classical-zero-free-region-dirichlet-l]]).

[F2] An exceptional real zero, when present, is a real zero $\beta\in(0,1)$ of the real nonprincipal primitive character's $L$-function ([[def-exceptional-zero-of-a-real-primitive-dirichlet-l-function]]).

## Proof

**Proof technique:** monotonicity of the logarithm and set inclusion.

1.1 If $|t|\le T$, then $q(|t|+3)\le q(T+3)$; since the real logarithm is increasing, $\log(q(|t|+3))\le\log(q(T+3))$. [given, A1, algebra]

2.1 Consequently $$1-\frac{c}{\log(q(T+3))}\ge1-\frac{c}{\log(q(|t|+3))}.$$ Every point of the common strip therefore lies in the pointwise zero-free region [F1]. Its only possible zero is the real simple zero described by [F2], and the assertion is for this fixed character. [step 1.1, F1, F2, algebra] ∎

