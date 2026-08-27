---
id: ex-reidemeister-schreier-for-a-surface-subgroup
kind: example
title: "A Reidemeister-Schreier presentation for a surface subgroup"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-reidemeister-schreier-presentation]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let

$$G=\langle a,b\mid bab^{-1}a\rangle,$$

the Klein bottle group. The subgroup $H=\langle a,b^2\rangle$ has index $2$ and
Reidemeister-Schreier gives the presentation

$$H\cong\langle x,y\mid xyx^{-1}y^{-1}\rangle\cong\mathbb Z^2,$$

so $H$ is the fundamental group of the torus.

## Facts & Assumptions

**Given:** The Klein bottle presentation above and the subgroup $H=\langle a,b^2\rangle$.

[L1] Reidemeister-Schreier presents a subgroup by rewritten Schreier generators and conjugated relators ([[thm-reidemeister-schreier-presentation]]).

## Verification

**Proof technique:** direct.

1.1 The quotient by $H$ has cosets $H$ and $Hb$, so $\mathcal T=\{1,b\}$ is a right transversal. The nontrivial Schreier generators are $x=s(1,a)=a$, $z=s(b,a)=bab^{-1}$, and $y=s(b,b)=b^2$. [given, construct]

2.1 The defining relator is $r=bab^{-1}a$. Reidemeister-Schreier rewrites the two conjugates determined by $\mathcal T$ as $\tau(r)=zx$ and $\tau(brb^{-1})=yxy^{-1}z$. Therefore [L1] yields the presentation $\langle x,y,z\mid zx,\ yxy^{-1}z\rangle$. [L1, step 1.1, algebra]

3.1 The first relator gives $z=x^{-1}$. Substituting this into the second relator yields $yxy^{-1}x^{-1}$. Hence the presentation from step 2.1 simplifies to $\langle x,y\mid yxy^{-1}x^{-1}\rangle$, so the presented group is the free abelian group on two generators, that is, $\mathbb Z^2$. Thus $H$ is a surface subgroup of torus type. [step 2.1, algebra] ∎
