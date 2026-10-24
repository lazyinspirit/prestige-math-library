---
id: cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p
kind: corollary
title: "For an odd prime $p$, the $p$-th power map is a homomorphism on a finite group whose derived subgroup is central of exponent dividing $p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-power-of-a-product-in-a-group-of-class-two, def-binomial-coefficient, def-prime, def-exponent-of-a-finite-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, thm-binomial-closed-formula, def-factorial-and-falling-factorial, lem-group-power-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, \u00a73.1, proof of Theorem 3.14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, \u00a72.3"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime ([[def-prime]]) and let $G$ be a finite group with
$[G,G]\le Z(G)$ whose derived subgroup has exponent dividing $p$
([[def-exponent-of-a-finite-group]], [[def-commutator-and-commutator-subgroup]],
[[def-center-of-a-group]]). Then

$$(xy)^p=x^py^p\qquad\text{for all }x,y\in G,$$

so $x\mapsto x^p$ is a group homomorphism from $G$ to $G$.

## Facts & Assumptions

**Given:** An odd prime $p$ and a finite group $G$ with $[G,G]\le Z(G)$ and $\exp([G,G])$ dividing $p$; elements $x,y\in G$.

[F1] For a finite group $H$, $\exp(H)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in H\}$ ([[def-exponent-of-a-finite-group]]).

[F2] $\binom nk:=\lvert[n]^k\rvert$, the number of $k$-element subsets of $n$ ([[def-binomial-coefficient]]).

[F3] $2!=2$ and $n^{\underline 2}=n(n-1)$ ([[def-factorial-and-falling-factorial]]).

[L1] If $[G,G]\le Z(G)$ then $(xy)^n=[y,x]^{\binom n2}x^ny^n$ for every $n\in\mathbb N$ ([[lem-power-of-a-product-in-a-group-of-class-two]]).

[L2] For $k\le n$ one has $\binom nk\cdot k!=n^{\underline k}$ ([[thm-binomial-closed-formula]]).

[L3] For all $m,n\in\mathbb Z$ one has $(g^m)^n=g^{mn}$ ([[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 Taking $n=p$ in the product formula gives $(xy)^p=[y,x]^{\binom p2}x^py^p$. [L1]

1.2 Since $p$ is odd and $p\ge 3$, the closed formula at $n=p$ and $k=2$ gives $\binom p2\cdot 2=p(p-1)$, and writing $p-1=2m$ with $m\in\mathbb N$ turns this into $\binom p2\cdot 2=2pm$, so $\binom p2=pm$. [F2, F3, L2, algebra]

1.3 The element $c=[y,x]$ lies in $[G,G]$, and $\exp([G,G])$ divides $p$, say $p=\exp([G,G])\cdot t$; hence $c^p=(c^{\exp([G,G])})^t=e$. [F1, L3, algebra]

2.1 Combining, $[y,x]^{\binom p2}=(c^p)^m=e$, so step 1.1 reads $(xy)^p=x^py^p$; as this holds for all $x,y\in G$, the map $x\mapsto x^p$ is a homomorphism. [step 1.1, step 1.2, step 1.3, algebra] ∎

## Remarks

Only the oddness of $p$ is used, in step 1.2; primality enters through the hypothesis on the derived subgroup rather than through the arithmetic. At $p=2$ the conclusion fails at the first step: $\binom 22=1$, so $(xy)^2=[y,x]x^2y^2$ and the commutator factor survives.
