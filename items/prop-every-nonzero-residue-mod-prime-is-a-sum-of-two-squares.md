---
id: prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares
kind: proposition
title: "Every nonzero residue modulo an odd prime is a sum of two squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-count-of-quadratic-residues-modulo-prime, thm-standard-representatives-modulo-n, thm-sum-rule, thm-subset-of-a-finite-set, thm-integers-modulo-n-basic-algebra]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, §E.II, Exercise 4"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime and let $a\in\mathbb Z$ with $p\nmid a$. Then there are integers $x,y$ such that

$$x^2+y^2\equiv a\pmod p.$$

## Facts & Assumptions

**Given:** An odd prime $p$ and a nonzero class $[a]\in\mathbb Z/p$.

[L1] For an odd prime $p$, exactly $(p-1)/2$ nonzero classes are quadratic residues modulo $p$ ([[thm-count-of-quadratic-residues-modulo-prime]]).

[L2] The quotient $\mathbb Z/p$ has $p$ elements ([[thm-standard-representatives-modulo-n]]).

[L3] If finite sets $A$ and $B$ are disjoint, then $|A\cup B|=|A|+|B|$ ([[thm-sum-rule]]).

[L4] A subset of a finite set is finite and has cardinality at most that of the ambient set ([[thm-subset-of-a-finite-set]]).

[L5] For every $n\in\mathbb N$, $(\mathbb Z/n,+,[0]_n)$ is an abelian group, and multiplication distributes over addition on both sides ([[thm-integers-modulo-n-basic-algebra]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $Q$ be the set of all square classes in $\mathbb Z/p$, including zero. By [L1], $|Q|=(p+1)/2$. [given, L1, algebra]

2.1 Translation and negation are bijections of the additive group, so $a-Q:=\{a-z:z\in Q\}$ also has $(p+1)/2$ elements. [step 1.1, L5, algebra, construct]

3.1 Suppose, for contradiction, that $Q$ and $a-Q$ are disjoint. Then [L3] gives $|Q\cup(a-Q)|=(p+1)/2+(p+1)/2=p+1$. [step 1.1, step 2.1, L3, assume-contra, algebra]

4.1 But $Q\cup(a-Q)\subseteq\mathbb Z/p$, so [L2] and [L4] give $|Q\cup(a-Q)|\le p$, contradicting step 3.1. [step 3.1, L2, L4, algebra]

5.1 Choose $z\in Q\cap(a-Q)$. Write $z=[x^2]$ and $z=[a-y^2]$ for integers $x,y$. Then $[x^2+y^2]=[a]$ by [L5], which is the required congruence. [step 4.1, L5, choose, algebra, discharge-contradiction] ∎
