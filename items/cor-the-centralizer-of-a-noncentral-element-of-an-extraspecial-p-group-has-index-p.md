---
id: cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p
kind: corollary
title: "A noncentral element of an extraspecial $p$-group has centraliser of index $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p, thm-conjugacy-class-cardinality, def-conjugacy-class-and-centralizer, def-index, thm-lagrange, def-center-of-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.41(ii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group and let $x\in P\setminus Z(P)$. Then

$$[P:C_P(x)]=p,\qquad\text{equivalently}\qquad \lvert C_P(x)\rvert=\frac{\lvert P\rvert}{p}.$$

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ and an element $x\in P$ with $x\notin Z(P)$.

[F1] $C_G(x):=\{g\in G:gx=xg\}=\{g\in G:gxg^{-1}=x\}$ ([[def-conjugacy-class-and-centralizer]]).

[F2] $[G:H]:=|G/H|$, the number of left cosets of $H$ in $G$ ([[def-index]]).

[L1] Every conjugacy class of an extraspecial $p$-group whose representative is not central has exactly $p$ elements ([[prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p]]).

[L2] $\lvert\operatorname{Cl}_G(x)\rvert=[G:C_G(x)]$ for a finite group $G$ ([[thm-conjugacy-class-cardinality]]).

[L3] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 The class of $x$ has exactly $p$ elements, because $x$ is not central. [L1]

1.2 The size of that class is the index of the centraliser of $x$ in $P$. [F1, F2, L2]

2.1 Hence $[P:C_P(x)]=p$, and Lagrange turns this into $\lvert P\rvert=p\,\lvert C_P(x)\rvert$. [L3, step 1.1, step 1.2] ∎

## Remarks

Every centraliser named here is proper, since $x$ is noncentral, and maximal in the order sense: index $p$ is the smallest index a proper subgroup of a finite $p$-group can have.
