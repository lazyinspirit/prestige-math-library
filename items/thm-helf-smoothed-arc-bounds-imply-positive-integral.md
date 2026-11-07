---
id: thm-helf-smoothed-arc-bounds-imply-positive-integral
kind: theorem
title: "Positive Integral from Certified Major- and Minor-Arc Bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-helf-smoothed-major-minor-arc-combination
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complete-ordered-real-field
  - thm-complex-numbers-form-a-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers"
      url: "https://www.jirka.org/ra/html/sec_complexnums.html"
      locator: "§11.1.1 and Definition 11.1.1: complex coordinates, real part, modulus, and coordinate addition."
---

## Statement

Let $I_M\in\mathbb R$, $I_m\in\mathbb C$, and $A,B\in\mathbb Q$ with $B\ge0$. Suppose supplied proofs establish $A\le I_M$ and $|I_m|\le B$, and regard $I_M$ as a complex number with zero imaginary part when forming the sum. If $A>B$, then
$$\operatorname{Re}(I_M+I_m)\ge A-B>0.$$

## Statement references

[[alg-helf-smoothed-major-minor-arc-combination|the bound-comparison procedure supplies the real major integral, complex minor integral and certified inequalities]]

## Facts & Assumptions

**Given:** Real $I_M$, complex $I_m$, rationals $A,B$ with $B\ge0$, valid proof objects for $A\le I_M$ and $|I_m|\le B$, and $A>B$.

[F1] [[alg-helf-smoothed-major-minor-arc-combination]]: the procedure takes rational $A,B$ with $B\ge0$ and proof objects asserting $A\le I_M$ and $|I_m|\le B$; when $A>B$, its claimed lower bound is $A-B$ for $\operatorname{Re}(I_M+I_m)$.

[F2] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: if $z=u+iv$, then $\operatorname{Re}z=u$ and $|z|=\sqrt{u^2+v^2}$, the nonnegative square root.

[F3] [[def-complete-ordered-real-field]]: the real numbers are an ordered field, and $|u|=u$ for $u\ge0$ while $|u|=-u$ for $u<0$.

[F4] [[thm-complex-numbers-form-a-field]]: complex coordinates add by $(a+bi)+(u+vi)=(a+u)+(b+v)i$.

## Proof

1.1 Write $I_m=u+iv$ with $u,v\in\mathbb R$. Since $v^2\ge0$, $u^2\le u^2+v^2$. Set $r=|u|$ and $s=|I_m|$. By [F2], $r,s\ge0$, $r^2=u^2$, and $s^2=u^2+v^2$. If $r>s$, then $(r-s)(r+s)>0$, so $r^2>s^2$, contradicting $u^2\le u^2+v^2$. Thus $|u|=r\le s=|I_m|$. By [F3], $u\ge-|u|$, hence $\operatorname{Re}I_m=u\ge-|I_m|$. [given, F2, F3, algebra]

2.1 The supplied proofs in [F1] give $I_M\ge A$ and, by step 1.1, $\operatorname{Re}I_m\ge-|I_m|\ge-B$. Since $A>B$, $A-B>0$. The coordinate addition rule [F4] gives $\operatorname{Re}(I_M+I_m)=I_M+\operatorname{Re}I_m\ge A-B>0$. [given, F1, F4, step 1.1, algebra] ∎
