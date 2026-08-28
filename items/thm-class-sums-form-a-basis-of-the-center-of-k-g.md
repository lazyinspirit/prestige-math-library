---
id: thm-class-sums-form-a-basis-of-the-center-of-k-g
kind: theorem
title: "For a finite group, the class sums form a basis of $Z(k[G])$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-center-of-the-group-algebra, def-class-sum-of-a-conjugacy-class-in-k-g, thm-group-ring-is-a-unital-algebra-with-basis-g]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.4.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be a field. Then the class sums
$\widehat C$, as $C$ ranges over the conjugacy classes of $G$, form a
$k$-basis of the center $Z(k[G])$.

## Facts & Assumptions

**Given:** A finite group $G$ and a field $k$.

[L1] The center $Z(k[G])$ consists of the elements of $k[G]$ that commute with every element of $k[G]$ ([[def-center-of-the-group-algebra]]).

[L2] For a conjugacy class $C$, its class sum is $\widehat C=\sum_{g \in C}[g]$ ([[def-class-sum-of-a-conjugacy-class-in-k-g]]).

[L3] The group algebra $k[G]$ has basis $\{[g]:g \in G\}$ and multiplication $[g][h]=[gh]$ ([[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

## Proof

**Proof technique:** direct.

1.1 Let $C$ be a conjugacy class and $h \in G$. Using [L3], $$[h]\widehat C[h]^{-1}=\sum_{g \in C}[hgh^{-1}].$$ Because conjugation by $h$ permutes the elements of $C$, this sum is again $\widehat C$. Hence $[h]\widehat C=\widehat C[h]$ for every basis element $[h]$, so $\widehat C \in Z(k[G])$ by [L1] and [L3]. [L1, L2, L3, given, algebra]

2.1 Now let $$x=\sum_{g \in G} a_g[g]$$ be any central element. For every $h \in G$, centrality gives $[h]x=x[h]$, so multiplying on the right by $[h]^{-1}$ and using [L3] yields $[h]x[h]^{-1}=x$. Comparing coefficients in the basis $\{[g]\}$ shows $$a_{hgh^{-1}}=a_g$$ for all $g,h \in G$. Thus the coefficient function $g \mapsto a_g$ is constant on conjugacy classes, and $x$ is a $k$-linear combination of the class sums. [step 1.1, L1, L2, L3, given, algebra]

3.1 Distinct conjugacy classes are disjoint subsets of $G$, so their class sums have disjoint supports in the basis $\{[g]\}$. Therefore a linear relation among class sums forces every coefficient to vanish. Combined with step 2.1, this shows that the class sums form a basis of $Z(k[G])$. [step 2.1, L2, L3, given, algebra] ∎
