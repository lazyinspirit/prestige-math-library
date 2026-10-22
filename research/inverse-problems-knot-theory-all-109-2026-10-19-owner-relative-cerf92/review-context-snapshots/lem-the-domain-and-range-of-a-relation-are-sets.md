---
id: lem-the-domain-and-range-of-a-relation-are-sets
kind: lemma
title: "If every element of $R$ is an ordered pair, then $\\{\\, a : \\exists b\\ (a,b) \\in R \\,\\}$ and $\\{\\, b : \\exists a\\ (a,b) \\in R \\,\\}$ are sets, both included in $\\bigcup\\bigcup R$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-pair, def-union-of-a-set-and-binary-union, def-axiom-schema-of-separation, def-unordered-pair-and-singleton, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "domain and range are sets"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.9"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a set every element of which is an ordered pair. Then the classes

$$\{\, a : \exists b\ (a,b) \in R \,\} \quad\text{and}\quad \{\, b : \exists a\ (a,b) \in R \,\}$$

are sets, and both are included in $\bigcup\bigcup R$.

## Facts & Assumptions

**Given:** a set $R$ every element of which is an ordered pair.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L4] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L5] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 Let $(a,b) \in R$. The elements of $(a,b)$ are $\{a\}$ and $\{a,b\}$, and $(a,b)$ is an element of $R$, so $\{a\}$ and $\{a,b\}$ are elements of $\bigcup R$. [L1, L2, L3]

2.1 The elements of $\{a\}$ and of $\{a,b\}$ are elements of $\bigcup\bigcup R$; hence $a \in \bigcup\bigcup R$ and $b \in \bigcup\bigcup R$ whenever $(a,b) \in R$. [L2, L3, step 1.1]

3.1 Separation applied to $\bigcup\bigcup R$ with the formula $\exists b\,((a,b) \in R)$ and the parameter $R$ gives the set $\{\, a \in \bigcup\bigcup R : \exists b\ (a,b) \in R \,\}$; by step 2.1 every $a$ satisfying that formula already lies in $\bigcup\bigcup R$, so this set has exactly the elements of the first class. The second class is obtained the same way from the formula $\exists a\,((a,b) \in R)$. [L4, L5, step 2.1] ∎
