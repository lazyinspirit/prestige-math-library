---
id: thm-nilradical-of-artinian-ring-is-nilpotent
kind: theorem
title: "The nilradical of an Artinian ring is a nilpotent ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-ring, def-nilradical-and-reduced-ring, def-generated-and-principal-ideals, thm-equivalent-characterizations-of-artinian-modules]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 16.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Let $R$ be a commutative Artinian ring. Then the nilradical $\operatorname{Nil}(R)$ is a nilpotent ideal.

This theorem uses dependent choice only through the minimum condition for Artinian modules.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$. The dependent-choice use named in the Statement is the minimum-condition step invoked below.

[L1] Every nonempty family of submodules of an Artinian module has a minimal member. Applied to the regular module of a commutative Artinian ring, every nonempty family of ideals has a minimal member. ([[thm-equivalent-characterizations-of-artinian-modules]]).

## Proof

**Proof technique:** contradiction.

1.1 Put $N=\operatorname{Nil}(R)$. The chain $N\supseteq N^2\supseteq N^3\supseteq\cdots$ is a descending chain of ideals, so it stabilizes: $N^n=N^{n+1}$ for some $n\ge1$. If already $N^n=0$, then $N$ is nilpotent and there is nothing more to prove. [given, algebra]

2.1 Assume instead that $N^n\ne0$. Let $$ \mathcal F=\{\mathfrak a\trianglelefteq R:\mathfrak aN^n\ne0\}. $$ This family is nonempty because $(N^n)N^n=N^{2n}=N^n\ne0$. By [L1], choose a minimal member $\mathfrak a$ of $\mathcal F$, and then choose $a\in\mathfrak a$ with $aN^n\ne0$. Since $(a)\subseteq\mathfrak a$ and $(a)N^n\ne0$, minimality gives $\mathfrak a=(a)$. Also $aN^n\subseteq\mathfrak a$, and because $N^n=N^{n+t}$ for every $t\ge0$, one has $(aN^n)N^n=aN^{2n}=aN^n\ne0$. So $aN^n\in\mathcal F$, whence minimality again gives $aN^n=\mathfrak a=(a)$. Therefore $a=ax$ for some $x\in N^n$. [L1, step 1.1, assume-contra, choose, algebra]

3.1 The element $x$ lies in $N$, so [[def-nilradical-and-reduced-ring]] says that $x$ is nilpotent; say $x^m=0$. Iterating the identity $a=ax$ gives $a=ax^m=0$, contradicting $aN^n\ne0$. Thus the assumption in step 2.1 is false, and the alternative left open in step 1.1 must hold: $N^n=0$. [step 2.1, given, discharge-contradiction]

4.1 Hence the nilradical of an Artinian ring is a nilpotent ideal. [step 1.1, step 3.1] ∎
