---
id: lem-hall-malcev-commutator-product-identities
kind: lemma
title: Commutator product identities in the fixed convention
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Lemma 10.25 and Notation 10.26, printed p.281
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["def-subgroup-commutator-and-lower-central-series"]
---
## Statement

Use $[x,y]=xyx^{-1}y^{-1}$ and ${}^u v=uvu^{-1}$. Then $[x,yz]=[x,y]{}^y[x,z]$ and $[xy,z]={}^x[y,z][x,z]$. Whenever the relevant commutators are central, these pairings are multiplicative in both variables and $[x^a,y^b]=[x,y]^{ab}$ for all $a,b\in\mathbb Z$. Define $[x_1,\ldots,x_k]=[\, [x_1,\ldots,x_{k-1}],x_k]$, with $[x_1]=x_1$.

## Facts & Assumptions

**Given:** $x,y,z$ are elements of a group; power assertions assume the displayed commutators are central.

[F1] The commutator convention is $[x,y]=xyx^{-1}y^{-1}$ ([[def-subgroup-commutator-and-lower-central-series]]).

## Proof

1.1 $[x,y]y[x,z]y^{-1}=xyx^{-1}y^{-1}y xzx^{-1}z^{-1}y^{-1}=xyzx^{-1}z^{-1}y^{-1}=[x,yz]$. [F1, algebra]

1.2 $x[y,z]x^{-1}[x,z]=xyzy^{-1}z^{-1}x^{-1}xzx^{-1}z^{-1}=xyz y^{-1}x^{-1}z^{-1}=[xy,z]$. Also $[x,y]^{-1}=yxy^{-1}x^{-1}=[y,x]$. [F1, algebra]

2.1 If commutators are central, their conjugates in steps 1.1 and 1.2 are unchanged. Each variable then defines a homomorphism on any subgroup where that centrality hypothesis holds. The identity has commutator $1$, and $1=[xx^{-1},y]=[x,y][x^{-1},y]$ gives the inverse rule. Repeated multiplication gives positive powers, the identity gives exponent zero, and the inverse rule gives negative powers. Applying this in both variables yields $[x^a,y^b]=[x,y]^{ab}$. [step 1.1, step 1.2, algebra] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Lemma 10.25 and Notation 10.26, printed p.281. The source product identities are expanded here in the fixed convention, including zero and negative exponents.
