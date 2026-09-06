---
id: lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi
kind: lemma
title: "The Charpit momentum equation from differentiating Hamilton–Jacobi"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lagrange-charpit-characteristic-system, thm-chain-rule]
justified_by: []
proof_strategy: direct
verification:
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

If $u\in C^2$ solves $F(x,u,Du)=0$, put $P=Du(X)$ and let
$\dot X=F_p(X,u(X),Du(X))$.  Then

$$\dot P=-F_x-PF_z,$$

so the momentum equation is forced by differentiating the PDE.

## Facts & Assumptions

**Given:** A $C^2$ classical solution and the stated projected characteristic.

## Proof

**Proof technique:** direct.

1.1 Differentiate $F(x,u(x),Du(x))=0$ in $x$ to get $F_x+F_zDu+D^2u\,F_p=0$. [given, algebra]

1.2 Along $X$, the chain rule gives $\dot P=D^2u(X)\dot X=D^2u(X)F_p$. [given, algebra]

2.1 Combining the two identities and $P=Du(X)$ gives $\dot P=-F_x-PF_z$. [step 1.1, step 1.2, algebra] ∎
