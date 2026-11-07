---
id: thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
kind: theorem
title: "Dedekind zeta continuation, functional equation, and analytic class-number formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-dedekind-zeta-function
  - def-completed-dedekind-zeta-function
  - def-partial-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
  - lem-partial-dedekind-zeta-functional-equation
  - def-ideal-class-group-of-a-domain
  - thm-finiteness-of-the-number-field-class-group
  - def-archimedean-embeddings-and-number-field-signature
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-number-field-regulator
  - thm-number-field-regulator-is-well-defined
  - def-roots-of-unity-in-a-field
  - lem-roots-of-unity-in-a-number-field-are-finite
  - def-euler-gamma-function
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - cor-real-gamma-one-half-is-root-pi
  - cor-real-gamma-positive-integer-values
  - thm-complex-gamma-restricts-to-the-real-gamma-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5, Theorem 5.9 and Corollary 5.10"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.465–466: partial-zeta functional equation, residues, global completed zeta and analytic class-number formula."
    - title: "J. S. Milne, Class Field Theory, Chapter VI §2, Propositions 2.8–2.9"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.189–191: partial-zeta residues and the analytic class-number formula."

---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field of signature $(r_1,r_2)$, field discriminant $d_K$, ideal class group of order $h_K$, regulator $R_K$, and roots-of-unity group of order $w_K$. The Dedekind zeta function has a meromorphic continuation to $\mathbb C$, with a simple pole at $s=1$ of residue
$$\operatorname{Res}_{s=1}\zeta_K(s)=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{|d_K|}},$$
and no other poles. The completed function
$$\Lambda_K(s):=|d_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\zeta_K(s),\qquad \Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2),\quad \Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s),$$
initially defined for $\operatorname{Re}(s)>1$, continues meromorphically to $\mathbb C$, satisfies $\Lambda_K(s)=\Lambda_K(1-s)$, and has simple poles at $s=0$ and $s=1$ with residues $-2^{r_1+r_2}h_KR_K/w_K$ and $2^{r_1+r_2}h_KR_K/w_K$, respectively.

## Statement references

[[def-number-field]]

[[def-axiom-of-choice]]

[[def-dedekind-zeta-function]]

[[def-completed-dedekind-zeta-function]]

[[def-ideal-class-group-of-a-domain]]

[[def-number-field-regulator]]

[[def-roots-of-unity-in-a-field]]

[[def-discriminant-of-a-number-field-basis-and-order]]

## Facts & Assumptions

**Given:** AC; a number field $K$ of degree $n=r_1+2r_2$ and signature $(r_1,r_2)$; its Dedekind zeta function, completed zeta function, ideal class group, discriminant, regulator and finite roots-of-unity group.

[A1] AC is assumed as in the unit/regulator and class-group finiteness theorems used in the partial-zeta functional equation and class-number calculation ([[def-axiom-of-choice]], [[thm-finiteness-of-the-number-field-class-group]], [[lem-partial-dedekind-zeta-functional-equation]]).

[F1] For $\operatorname{Re}(s)>1$, $\zeta_K(s)$ is the absolutely convergent sum over nonzero integral ideals; the ideal class group partitions those ideals into the classes used by the partial zeta series ([[def-dedekind-zeta-function]], [[def-partial-dedekind-zeta-function]], [[def-ideal-class-group-of-a-domain]], [[thm-dedekind-zeta-euler-product]]).

[F2] Under AC the ideal class group has finite positive order $h_K$; the regulator is positive and the roots-of-unity group has finite positive order $w_K$. For every ideal class $C$, $\Lambda_{K,C}(s)$ continues meromorphically, satisfies $\Lambda_{K,C}(s)=\Lambda_{K,[\mathfrak D_K]C^{-1}}(1-s)$, has only simple poles at $0,1$, and their residues are $-2^{r_1+r_2}R_K/w_K$ and $2^{r_1+r_2}R_K/w_K$ ([[thm-finiteness-of-the-number-field-class-group]], [[thm-number-field-regulator-is-well-defined]], [[lem-roots-of-unity-in-a-number-field-are-finite]], [[lem-partial-dedekind-zeta-functional-equation]]).

[F3] The archimedean factors are $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$. The Euler gamma function has simple poles at the nonpositive integers and has no zeros ([[def-completed-dedekind-zeta-function]], [[thm-gamma-meromorphic-continuation]], [[cor-gamma-function-has-no-zeros]]).

[F4] The complex Euler gamma restricts to the real gamma function on positive reals; $\Gamma(1/2)=\sqrt\pi$ and $\Gamma(1)=1$. Also $r_1+r_2\ge1$ because $r_1+2r_2=[K:\mathbb Q]\ge1$ ([[thm-complex-gamma-restricts-to-the-real-gamma-function]], [[cor-real-gamma-one-half-is-root-pi]], [[cor-real-gamma-positive-integer-values]], [[def-archimedean-embeddings-and-number-field-signature]]).

## Proof


1.1 Each nonzero integral ideal belongs to exactly one ideal class. Under the stated AC assumption [A1], the class group has $h_K<\infty$ elements by [F2], so summing the partial-zeta series over all classes gives $\zeta_K(s)=\sum_C\zeta_{K,C}(s)$ for $\operatorname{Re}(s)>1$ by [F1]. Multiplication by the common archimedean factor yields $\Lambda_K(s)=\sum_C\Lambda_{K,C}(s)$ on that half-plane, so this finite sum supplies a meromorphic continuation. [A1, F1, F2, given]

2.1 The map $C\mapsto[\mathfrak D_K]C^{-1}$ is a bijection of the ideal class group, being the composition of inversion and multiplication by a fixed class. Summing the partial functional equations in [F2] therefore gives $\Lambda_K(s)=\Lambda_K(1-s)$. The finite sum has no poles outside $0,1$ and has residues $-2^{r_1+r_2}h_KR_K/w_K$ at $0$ and $2^{r_1+r_2}h_KR_K/w_K$ at $1$; these are nonzero by [F2], so both poles are simple. [A1, F2, step 1.1, algebra]

3.1 Write $G_K(s)=|d_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}$, so $\zeta_K(s)=G_K(s)^{-1}\Lambda_K(s)$. By [F3], $G_K^{-1}$ is entire: each gamma factor has no zeros, and the inverse removes its simple poles. At $s=0$, $G_K$ has a pole of order $r_1+r_2\ge1$ by [F3,F4], so $G_K^{-1}$ has a zero of at least order one; multiplying by the simple pole of $\Lambda_K$ gives no pole of $\zeta_K$. At every point other than $0,1$, $\Lambda_K$ is holomorphic and $G_K^{-1}$ is entire. At $s=1$, $G_K(1)$ is finite and nonzero, so $\zeta_K$ has the same simple pole there. [F3, F4, step 2.1, algebra]

4.1 From [F3,F4], $\Gamma_{\mathbb R}(1)=\pi^{-1/2}\Gamma(1/2)=1$ and $\Gamma_{\mathbb C}(1)=2(2\pi)^{-1}\Gamma(1)=1/\pi$. Hence $G_K(1)=\sqrt{|d_K|}\,\pi^{-r_2}$. The residue relation $\operatorname{Res}_{s=1}\Lambda_K(s)=G_K(1)\operatorname{Res}_{s=1}\zeta_K(s)$ and step 2.1 give $\operatorname{Res}_{s=1}\zeta_K(s)=\frac{2^{r_1+r_2}h_KR_K}{w_K\sqrt{|d_K|}}\pi^{r_2}=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{|d_K|}}$. This is the asserted analytic class-number formula. [F3, F4, step 2.1, algebra] ∎