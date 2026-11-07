---
id: thm-global-power-reciprocity-law
kind: theorem
title: "Global power reciprocity law with the bad-place correction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-global-power-residue-symbol
  - def-roots-of-unity-in-a-field
  - lem-tame-local-hilbert-symbol-residue-formula
  - thm-hilbert-reciprocity-product-formula-for-number-fields
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice and DC are inherited from the number-field local and
  global reciprocity interfaces. The product rearrangement is finite and
  adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §5.11, Theorem 5.11 and proof, printed pp.247–248."
    - title: "J. Neukirch, Algebraic Number Theory, English translation"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VI §8, Theorem 8.3 and quadratic specialization, printed pp.414–417."
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a number field, let $n\ge1$
with $|\mu_n(K)|=n$, and put
$$S=\{v:v\text{ is archimedean or }v(n)>0\}.$$
For $c,d\in K^\times$, define
$$\left(\frac{c}{d}\right)_n= \prod_{\substack{v\notin S\\v(c)=0}} \left(\frac{c}{v}\right)_n^{v(d)},$$
where for a finite place $v\notin S$ the symbol $(c/v)_n$ is the unique
element of $\mu_n(K)$ reducing to $\bar c^{(q_v-1)/n}$ in the residue
field of size $q_v$. Suppose that no finite place outside $S$ divides both
$a$ and $b$, meaning that $v(a)v(b)=0$ for every finite $v\notin S$.
For finite $v$, put
$$H_{v,n}(x,y)=\operatorname{rec}_{K_v}(y)(\sqrt[n]{x})/\sqrt[n]{x};$$
put $H_{v,n}=1$ at complex places, and at real places use $H_{v,1}=1$ or,
for $n=2$, $H_{v,2}(x,y)=-1$ exactly when $x<0$ and $y<0$, and $1$
otherwise. Then
$$\left(\frac{a}{b}\right)_n \left(\frac{b}{a}\right)_n^{-1} =\prod_{v\in S}H_{v,n}(b,a).$$

## Statement references

[[def-global-power-residue-symbol]]

[[def-roots-of-unity-in-a-field]]

[[lem-tame-local-hilbert-symbol-residue-formula]]

[[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[Milne, *Class Field Theory*, VIII §5.11, Theorem 5.11](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Neukirch, *Algebraic Number Theory*, VI §8, Theorem 8.3](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice and DC; $K,n,\mu_n,S,a,b$ as in the
Statement.

[A1] The number-field local and global reciprocity interfaces retain their
stated AC, Countable Choice and DC assumptions.
[[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The global power-residue symbol is the finite product of local residue
symbols with exponent $v(d)$, and the local Hilbert factors use
$H_{v,n}(x,y)=\operatorname{rec}_{K_v}(y)(\sqrt[n]{x})/\sqrt[n]{x}$.
[[def-global-power-residue-symbol]]
[[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[F2] At a finite place with residue characteristic prime to $n$, if $u$ is
a unit and $v(d)=r$, then $H_{v,n}(u,d)=(u/v)_n^r$; local Hilbert factors
are skew-symmetric. [[lem-tame-local-hilbert-symbol-residue-formula]]

[F3] The finite global Hilbert product satisfies
$\prod_vH_{v,n}(x,y)=1$ with the stated arithmetic convention.
[[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[L1] The number-field Hilbert product is the declared input [F3]. This completed local power-reciprocity deduction does not independently prove that input. [[thm-hilbert-reciprocity-product-formula-for-number-fields]]

## Proof

**Proof technique:** evaluate the finite global Hilbert product outside $S$
using the tame local formula, then isolate the factors at $S$.

**Given:** The data and hypotheses in the Statement.

1.1 Let $v\notin S$ be finite. Since the residue characteristic does not divide $n$, [F2] applies. If $v(a)=v(b)=0$, then $H_{v,n}(a,b)=1$ by [F2] with exponent $v(b)=0$. By the support hypothesis, the remaining cases are exactly $v(b)\ne0$, $v(a)=0$, or $v(a)\ne0$, $v(b)=0$. [F2, given]

2.1 If $v(a)=0$ and $v(b)\ne0$, [F2] gives $H_{v,n}(a,b)=(a/v)_n^{v(b)}$. If $v(a)\ne0$ and $v(b)=0$, skew-symmetry in [F2] gives $H_{v,n}(a,b)=H_{v,n}(b,a)^{-1}=(b/v)_n^{-v(a)}$. Thus the product over finite $v\notin S$ is $$\left(\frac{a}{b}\right)_n \left(\frac{b}{a}\right)_n^{-1},$$ by the definition in [F1]. [F1, F2, step 1.1]

3.1 By [F3], the product of all finite and archimedean factors is $1$. The outside-$S$ factors are the quotient in step 2.1. Therefore that quotient is $\prod_{v\in S}H_{v,n}(a,b)^{-1}$. At a finite place in $S$, local skew-symmetry in [F2]'s cited cup-product convention gives $H_{v,n}(a,b)^{-1}=H_{v,n}(b,a)$; at a real place the same identity follows from the explicitly stated values in the Statement, and at a complex place both factors are $1$. Hence the quotient is exactly $\prod_{v\in S}H_{v,n}(b,a)$. [F2, F3, L1, step 2.1]

4.1 Step 3.1 proves the formula conditional on the Hilbert product input [L1]. The local finite-product rearrangement is complete; the global input remains a separate declared dependency. [L1, step 3.1] ∎

## Authoring status

The tame-local calculation, finite-support decomposition and product rearrangement are the complete supplied local deduction. The global Hilbert product remains the declared input; this carrier does not independently prove it or assert unconditional completion of its suppliers.
