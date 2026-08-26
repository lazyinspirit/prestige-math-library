---
id: lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points
kind: lemma
title: "Every line in a finite projective plane has the same number of points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-projective-plane]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Feb. 3"
      url: "https://people.math.harvard.edu/~elkies/M155.09/feb03"
---

## Statement

In a finite projective plane, any two lines have the same number of points.

## Facts & Assumptions

**Given:** A finite projective plane $(P,\mathcal L)$.

[L1] Any two distinct points lie on exactly one line, any two distinct lines meet in exactly one point, every line contains at least three points, and there exist four points no three of which lie on one line ([[def-finite-projective-plane]]).

## Proof

**Proof technique:** direct.

1.1 Let $\ell$ and $m$ be distinct lines, and write $p:=\ell\cap m$, which exists and is unique by [L1]. [L1, choose]

1.2 There is a point $x$ outside $\ell\cup m$. If one of the four noncollinear points from [L1] lies outside $\ell\cup m$, choose it. Otherwise exactly two of them lie on $\ell$ and two lie on $m$; let $a\in\ell\setminus m$ and $c\in m\setminus\ell$ be such points. The line through $a$ and $c$ is distinct from both $\ell$ and $m$, so because every line contains at least three points, it has a point $x$ different from $a$ and $c$, and that $x$ lies on neither $\ell$ nor $m$. [L1, choose]

2.1 For each $y\in \ell\setminus\{p\}$, let $\varphi(y)$ be the unique point where the line through $x$ and $y$ meets $m$. Since $x\notin m$, one has $\varphi(y)\ne p$, and if $\varphi(y_1)=\varphi(y_2)$ then the lines through $x$ and $y_1,y_2$ coincide, forcing $y_1=y_2$. So $\varphi$ is injective from $\ell\setminus\{p\}$ to $m\setminus\{p\}$. [step 1.1, step 1.2, L1, choose]

3.1 Reversing the same construction with the roles of $\ell$ and $m$ exchanged gives an injective map from $m\setminus\{p\}$ to $\ell\setminus\{p\}$. Since the two sets are finite, they have the same cardinality. Therefore $|\ell|=|m|$. [step 1.1, step 1.2, step 2.1, L1, algebra] ∎
