---
id: cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes
kind: corollary
title: "For a finite group, uniquely divisible coefficients have trivial first cohomology"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-cohomology-via-crossed-homomorphisms, thm-lagrange]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $G$ be finite and let $A$ be an abelian $G$-group such that, for every
positive integer $m$, multiplication by $m$ on $A$ is bijective. Then

$$H^1(G,A)=0.$$

## Facts & Assumptions

**Given:** A finite group $G$ of order $m$, an abelian $G$-group $A$, and a crossed homomorphism $z:G\to A$.

[L1] First cohomology is the quotient of crossed homomorphisms by principal crossed homomorphisms ([[def-first-cohomology-via-crossed-homomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Put $s=\sum_{x\in G}z(x)\in A$. For any fixed $g\in G$, $\sum_{x\in G}z(gx)=\sum_{x\in G}(z(g)+g\cdot z(x))=m\,z(g)+g\cdot s$, and the left-hand side is just $s$ because $x\mapsto gx$ permutes $G$. Hence $m\,z(g)=s-g\cdot s$. [given, L1, algebra]

2.1 Because multiplication by $m$ is bijective on $A$, choose $a\in A$ with $m a=-s$. Then $$m\bigl(z(g)-(g\cdot a-a)\bigr)=m z(g)-g\cdot(ma)+ma=(s-g\cdot s)-(-g\cdot s)+(-s)=0.$$ Bijectivity of multiplication by $m$ forces $z(g)=g\cdot a-a$ for every $g$. So $z$ is principal. [step 1.1, choose, algebra]

3.1 Every crossed homomorphism is principal, so the quotient in [L1] is zero. Therefore $H^1(G,A)=0$. [L1, step 2.1] ∎
