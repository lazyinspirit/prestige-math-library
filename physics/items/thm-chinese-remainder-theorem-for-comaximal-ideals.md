---
id: thm-chinese-remainder-theorem-for-comaximal-ideals
kind: theorem
title: "Chinese remainder theorem for pairwise comaximal ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-right-and-two-sided-ideal, def-generated-and-principal-ideals, thm-generated-ideal-description-in-a-commutative-ring, prop-canonical-quotient-ring-map, thm-correspondence-theorem-ideals, def-product-ring, thm-quotient-ring-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (1.14)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 2.13"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $I_1,\ldots,I_r$ be pairwise comaximal ideals, where $r\ge1$. Then the canonical map
$$ R\longrightarrow \prod_{i=1}^r R/I_i,\qquad x\longmapsto(x+I_1,\ldots,x+I_r) $$
is surjective, its kernel is $\bigcap_{i=1}^r I_i$, and
$$ \bigcap_{i=1}^r I_i=\prod_{i=1}^r I_i. $$
Equivalently,
$$ R/\prod_{i=1}^r I_i\cong\prod_{i=1}^r R/I_i. $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and pairwise comaximal ideals $I_1,\ldots,I_r$ with $r\ge1$.

## Proof

**Proof technique:** direct.

1.1 First take $r=2$. Choose $u\in I_1$ and $v\in I_2$ with $u+v=1$. If $x\in I_1\cap I_2$, then $x=xu+xv\in I_1I_2$, so $I_1\cap I_2=I_1I_2$. For classes $a+I_1$ and $b+I_2$, the element $av+bu$ satisfies $av+bu\equiv a\pmod{I_1}$ and $av+bu\equiv b\pmod{I_2}$, so the canonical map $R\to R/I_1\times R/I_2$ is surjective with kernel $I_1\cap I_2=I_1I_2$. [given, choose, algebra]

2.1 Now assume $r\ge2$. Fix $i$ and put $J_i=\prod_{j\ne i}I_j$. For each $j\ne i$, choose $u_j\in I_i$ and $v_j\in I_j$ with $u_j+v_j=1$. Expanding $\prod_{j\ne i}(u_j+v_j)=1$ shows that $1-\prod_{j\ne i}v_j\in I_i$ and $\prod_{j\ne i}v_j\in J_i$, so $I_i+J_i=R$. Choose $e_i\in J_i$ with $e_i\equiv1\pmod{I_i}$. Then $e_i\in I_j$ for every $j\ne i$. Given residue classes $a_i+I_i$, the element $x:=\sum_{i=1}^r a_ie_i$ satisfies $x\equiv a_i\pmod{I_i}$ for every $i$. Hence the canonical map $R\to\prod_{i=1}^rR/I_i$ is surjective. [step 1.1, given, choose, algebra]

3.1 The kernel of the canonical map is plainly $\bigcap_{i=1}^r I_i$. To compare this with the product, induct on $r$. The case $r=1$ is tautological and the case $r=2$ is step 1.1. For $r>2$, let $K=\bigcap_{i=2}^rI_i$. By the induction hypothesis, $K=\prod_{i=2}^rI_i$. Step 2.1 with $i=1$ gives $I_1+K=R$, so applying the two-ideal case to $I_1$ and $K$ yields $\bigcap_{i=1}^rI_i=I_1\cap K=I_1K=\prod_{i=1}^rI_i$. Therefore $R/\prod_{i=1}^rI_i\cong\prod_{i=1}^rR/I_i$. [step 1.1, step 2.1, given, induction] ∎
