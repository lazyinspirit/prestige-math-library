---
id: def-standard-l-function-of-a-gl2-eigenform
kind: definition
title: "Standard L-Function of a GL2 Hecke Eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-congruence-modular-form-with-nebentypus
  - def-hecke-operator-on-congruence-forms
  - lem-full-level-holomorphic-cusp-form-coefficient-growth
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Propositions 5.18 and 5.21, printed pp. 75–76; Chapter 9, Hecke–Weil normalization, printed pp. 101–103."
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§2, standard L-functions for SL(2), and §4, the modular-form normalization λ=1−k."
forward_refs: []
---

## Definition

Fix an even integer $k\ge2$. A **normalized full-level holomorphic Hecke
eigenform** is a nonzero cusp form $f$ of weight $k$ for $SL_2(\mathbb Z)$
whose Fourier expansion is $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$, with
$a_f(1)=1$, and which is a simultaneous eigenvector of every normalized Hecke
operator $T_n$; write $\mu_f(n)$ for the eigenvalue of $T_n$. Define the unitary
Fourier coefficients
$\lambda_f(n):=a_f(n)n^{-(k-1)/2}$ and the **standard GL2 L-function**

$$
L(s,f):=\sum_{n\ge1}\lambda_f(n)n^{-s},\qquad \operatorname{Re}s>3/2.
$$

For positive integers use $n^{-s}:=\exp(-s\log n)$ with the real logarithm.
The coefficient-growth lemma proves that this series converges absolutely on
the displayed half-plane. Its prime-local Euler factors are asserted and
proved separately.

## Definition references

[[def-congruence-subgroup-of-sl2-z|the level-one modular group]]

[[def-congruence-modular-form-with-nebentypus|the full-level cusp-form convention]]

[[def-hecke-operator-on-congruence-forms|the normalized Hecke operators]]

[[lem-full-level-holomorphic-cusp-form-coefficient-growth|coefficient growth and convergence]]
