---
id: lem-field-integrality-criterion
kind: lemma
title: "For an integral extension of domains, the upper ring is a field if and only if the lower ring is"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-ring-extension, def-field, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (14.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 7.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $A \subseteq B$ be an integral extension of domains. Then $A$ is a field if and only if $B$ is a field.

## Facts & Assumptions

**Given:** An integral extension of domains $A \subseteq B$.

[L1] In an integral ring map, every element of the target ring satisfies a monic polynomial over the source ring ([[def-integral-ring-extension]]).

[L2] An integral domain is a nonzero commutative ring with no zero divisors ([[def-zero-divisor-and-integral-domain]]).

[L3] A field is a nonzero commutative ring in which every nonzero element is invertible ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $A$ is a field, and let $0\ne b\in B$. By [L1] there is a monic relation $b^n+a_{n-1}b^{n-1}+\cdots+a_0=0$ over $A$ of minimal degree. The constant term cannot vanish: if $a_0=0$, then $b(b^{n-1}+a_{n-1}b^{n-2}+\cdots+a_1)=0$, and [L2] with $b\ne0$ would give a smaller monic relation, contradicting minimality. Since $a_0\ne0$ and $A$ is a field, $a_0^{-1}\in A$, and rearranging gives $b^{-1}=-a_0^{-1}(b^{n-1}+a_{n-1}b^{n-2}+\cdots+a_1)\in B$. Thus every nonzero element of $B$ is invertible. [L1, L2, L3, given, algebra]

1.2 Assume $B$ is a field, and let $0\ne a\in A$. Then $a^{-1}\in B$, and [L1] gives a monic equation $(a^{-1})^n+c_{n-1}(a^{-1})^{n-1}+\cdots+c_0=0$ with $c_i\in A$. Multiplying by $a^n$ yields $1+c_{n-1}a+\cdots+c_0a^n=0$, so $a(-c_{n-1}-c_{n-2}a-\cdots-c_0a^{n-1})=1$. Hence $a$ is invertible in $A$. [L1, L3, given, algebra]

2.1 Step 1.1 proves that $A$ field implies $B$ field, and step 1.2 proves the converse. Therefore $A$ is a field if and only if $B$ is a field. [step 1.1, step 1.2] ∎
