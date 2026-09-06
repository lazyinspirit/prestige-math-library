---
id: lem-charpit-contact-compatibility-is-preserved
kind: lemma
title: "Charpit contact compatibility is preserved"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lagrange-charpit-characteristic-system, lem-charpit-flow-preserves-the-pde-constraint, thm-chain-rule]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Statement

Let $(X,Z,P)(s,y)$ be a $C^1$ Charpit strip lying in $F=0$.  If
$Z_y(0,y)=P(0,y)\cdot X_y(0,y)$, then

$$Z_y(s,y)=P(s,y)\cdot X_y(s,y)$$

while the strip exists.

## Facts & Assumptions

**Given:** A $C^1$ Charpit strip, its initial contact identity, and the constraint $F(X,Z,P)=0$.

## Proof

**Proof technique:** direct.

1.1 Set $D:=Z_y-P\cdot X_y$.  Differentiate the Charpit equations in $y$ and apply the product and chain rules to obtain $D_s=F_y-F_zD$. [given, algebra]

2.1 Differentiating $F(X,Z,P)=0$ in $y$ gives $F_y=0$, so $D_s=-F_zD$ and $D(0,y)=0$. [step 1.1, given, algebra]

3.1 Multiplication by the integrating factor $\exp(\int_0^sF_z(r,y)\,dr)$ makes $D$ constant; its initial value is zero, hence $D=0$. [step 2.1, algebra] ∎
