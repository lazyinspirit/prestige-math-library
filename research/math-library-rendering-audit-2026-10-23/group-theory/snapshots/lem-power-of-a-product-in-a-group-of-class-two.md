---
id: lem-power-of-a-product-in-a-group-of-class-two
kind: lemma
title: "In a group with central derived subgroup, $(xy)^n=[y,x]^{\\binom{n}{2}}x^ny^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-commutator-identities-in-a-group-of-class-two, def-commutator-and-commutator-subgroup, def-center-of-a-group, def-group-power, lem-group-power-laws, def-binomial-coefficient, thm-pascals-rule]
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Lemma 2.11 and \u00a73.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, \u00a72.3"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a group with $[G,G]\le Z(G)$ ([[def-commutator-and-commutator-subgroup]],
[[def-center-of-a-group]]) and let $x,y\in G$. If $[G,G]\le Z(G)$ then
$(xy)^n=[y,x]^{\binom n2}x^ny^n$ for every $n\in\mathbb N$, where
$\binom n2$ is the binomial coefficient of [[def-binomial-coefficient]] and the
powers are those of [[def-group-power]].

The commutator on the right is $[y,x]$, not $[x,y]$: in the convention
$[g,h]=ghg^{-1}h^{-1}$ fixed by [[def-commutator-and-commutator-subgroup]] one has
$yx=[y,x]xy$, and it is that factor which accumulates.

## Facts & Assumptions

**Given:** A group $G$ with $[G,G]\le Z(G)$, elements $x,y\in G$, and $n\in\mathbb N$.

[F1] For $g,h\in G$ the commutator is $[g,h]:=ghg^{-1}h^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F3] $\binom nk:=\lvert[n]^k\rvert$, the number of $k$-element subsets of $n$; in particular $\binom n1=n$, and $\binom nk=0$ whenever $k>n$ ([[def-binomial-coefficient]]).

[L1] If $[G,G]\le Z(G)$ then $[xy,w]=[x,w][y,w]$, $[x,yw]=[x,y][x,w]$, and $[x^n,y]=[x,y]^n=[x,y^n]$ for every integer $n$ ([[lem-commutator-identities-in-a-group-of-class-two]]).

[L2] $\binom{n+1}{k+1}=\binom nk+\binom n{k+1}$, with no restriction relating $k$ to $n$ ([[thm-pascals-rule]]).

[L3] For all $m,n\in\mathbb Z$ one has $g^{m+n}=g^mg^n$ ([[lem-group-power-laws]]).

## Proof

**Proof technique:** induction.

1.1 At $n=0$ the exponent $\binom 02$ is zero because $2>0$, and the asserted identity reads $e=e$; this is the base case. [F3, base]

1.2 For every $n\in\mathbb N$, Pascal's rule at $k=1$ gives $\binom{n+1}{2}=\binom n1+\binom n2=n+\binom n2$. [F3, L2, algebra]

1.3 For all $g,h\in G$ one has $[g,h]hg=(ghg^{-1}h^{-1})hg=gh$, hence $gh=[g,h]hg$; applied to the pair $y,x$ this reads $yx=[y,x]xy$. [F1, algebra]

1.4 Assume the identity at a given $n\in\mathbb N$, that is $(xy)^n=[y,x]^{\binom n2}x^ny^n$. [ih]

2.1 Applying step 1.3 to the pair $y^n,x$ gives $y^nx=[y^n,x]xy^n$, and $[y^n,x]=[y,x]^n$, so $y^nx=[y,x]^nxy^n$. [L1, step 1.3, algebra]

2.2 Multiplying the assumption on the right by $xy$ gives $(xy)^{n+1}=(xy)^n(xy)=[y,x]^{\binom n2}x^ny^nxy$. [step 1.4, algebra]

3.1 Substituting step 2.1 into step 2.2 and moving the central factor $[y,x]^n$ to the front gives $(xy)^{n+1}=[y,x]^{\binom n2}x^n[y,x]^nxy^ny=[y,x]^{\binom n2+n}x^{n+1}y^{n+1}$. [F2, L3, step 2.1, step 2.2, algebra]

4.1 By step 1.2 the exponent $\binom n2+n$ equals $\binom{n+1}{2}$, so the identity holds at $n+1$ and therefore at every natural number. [step 1.2, step 3.1, discharge-induction] ∎

## Remarks

The formula is the reason the $p$-th power map behaves differently at $p=2$: the coefficient $\binom 22$ equals $1$, so the commutator factor survives, whereas for odd $p$ the coefficient $\binom p2$ is a multiple of $p$.
