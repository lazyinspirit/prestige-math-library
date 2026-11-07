---
id: thm-upper-ramification-numbering-compatible-with-quotients
kind: theorem
title: "Upper numbering is compatible with Galois quotients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-herbrand-function-and-upper-ramification-numbering
  - thm-herbrand-lower-numbering-quotient-formula
  - thm-herbrand-function-is-transitive-in-galois-towers
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-finite-galois-extension-and-galois-group
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter II, Section 10, Herbrand Theorem 10.7 and Proposition 10.8"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Section 'Ramification groups'"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite Galois extension of
nonarchimedean local fields with finite residue fields, let
$H\triangleleft G=\operatorname{Gal}(L/K)$, and put $M=L^H$. For every real
$v\ge-1$, projection to $G/H=\operatorname{Gal}(M/K)$ maps the upper-numbered
group of $L/K$ onto the upper-numbered group of $M/K$ at the same index:
$$G^vH/H=(G/H)^v.$$

## Statement references

[[def-herbrand-function-and-upper-ramification-numbering]]

[[thm-herbrand-lower-numbering-quotient-formula]]

[[thm-herbrand-function-is-transitive-in-galois-towers]]

[J. Neukirch, *Algebraic Number Theory*, Chapter II, Section 10, Theorem 10.7 and Proposition 10.8](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, “Ramification groups”](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the finite Galois extension, normal subgroup, and fixed field in the Statement.

[A1] Countable Choice is required by the quotient and transitivity suppliers. ([[def-countable-choice]])

[F1] [[def-herbrand-function-and-upper-ramification-numbering]]: $G^v=G_{\psi_{L/K}(v)}$ where $\psi_{L/K}=\varphi_{L/K}^{-1}$; the same definition applies to $M/K$.

[F2] [[thm-herbrand-lower-numbering-quotient-formula]]: The image of $G_s$ in $G/H$ is $(G/H)_{\varphi_{L/M}(s)}$ for every $s\ge-1$.

[F3] [[thm-herbrand-function-is-transitive-in-galois-towers]]: $\varphi_{L/K}=\varphi_{M/K}\circ\varphi_{L/M}$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Fix $v\ge-1$ and put $s=\psi_{L/K}(v)$, so $v=\varphi_{L/K}(s)$. By transitivity [F3], $v=\varphi_{M/K}(\varphi_{L/M}(s))$. Since $\varphi_{M/K}$ is bijective, this gives $\varphi_{L/M}(s)=\psi_{M/K}(v)$. [A1, F1, F3, given, construct, algebra]

2.1 By [F1], $G^v=G_s$ and $(G/H)^v=(G/H)_{\psi_{M/K}(v)}$. Applying the quotient formula [F2] and step 1.1 yields $G^vH/H=G_sH/H=(G/H)_{\varphi_{L/M}(s)}=(G/H)_{\psi_{M/K}(v)}=(G/H)^v,$ which is the asserted compatibility. [A1, F1, F2, step 1.1] ∎