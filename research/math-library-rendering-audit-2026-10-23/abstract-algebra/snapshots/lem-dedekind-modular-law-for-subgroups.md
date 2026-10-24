---
id: lem-dedekind-modular-law-for-subgroups
kind: lemma
title: "Dedekind's modular law for subgroup products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Let $A,B,C\le G$ with $A\le C$. If $AB$ is a subgroup of $G$, then
$$A(B\cap C)=AB\cap C.$$
The equality also holds as an equality of subsets whenever the displayed products are formed; the subgroup hypothesis ensures that both sides are subgroups in later applications.

## Facts & Assumptions

**Given:** Subgroups $A,B,C\le G$ with $A\le C$, and with $AB$ a subgroup.

[F1] A subgroup contains the identity and inverses and is closed under products ([[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in A(B\cap C)$, write $x=ab$ with $a\in A$ and $b\in B\cap C$; then $x\in AB$, and $a,b\in C$ gives $x\in C$, so $x\in AB\cap C$. [given, F1]

1.2 If $x\in AB\cap C$, write $x=ab$ with $a\in A$ and $b\in B$; since $a,x\in C$, one has $b=a^{-1}x\in C$, hence $b\in B\cap C$ and $x\in A(B\cap C)$. [given, F1]

2.1 The two inclusions prove $A(B\cap C)=AB\cap C$. [step 1.1, step 1.2] ∎
