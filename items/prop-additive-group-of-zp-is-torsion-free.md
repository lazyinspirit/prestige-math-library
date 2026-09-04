---
id: prop-additive-group-of-zp-is-torsion-free
kind: proposition
title: "The additive group of Zp is torsion-free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-adic-integers-as-compatible-residue-classes]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Statement

The additive group of $\mathbb Z_p$ has no nonzero torsion element.

## Facts & Assumptions

**Given:** An element $x=(x_n)\in\mathbb Z_p$ and a positive integer $m$ with $mx=0$.

[F1] An element of $\mathbb Z_p$ is a compatible tuple of residue classes modulo $p^n$ ([[def-p-adic-integers-as-compatible-residue-classes]]).

## Proof

**Proof technique:** direct.

1.1 Write $m=p^a u$ with $a\ge0$ and $p\nmid u$. Multiplication by $u$ is an automorphism of each cyclic group $\mathbb Z/p^n\mathbb Z$, so from $mx=0$ it follows that $p^a x=0$. Assume for contradiction that $x\ne0$, and choose the least index $t\ge1$ with $x_t\ne0$. By [F1], the earlier coordinates vanish and the tuple is compatible, so $x_t$ is represented by an integer divisible by $p^{t-1}$; because $x_t\ne0$ in $\mathbb Z/p^t\mathbb Z$, that representative is not divisible by $p^t$. Thus $x_t$ has exact $p$-adic divisibility $p^{t-1}$. [F1, given, choose, assume-contra, algebra]

2.1 Compatibility propagates that exact divisibility to the coordinate $x_{t+a}\in\mathbb Z/p^{t+a}\mathbb Z$, because reducing $x_{t+a}$ modulo $p^t$ gives the nonzero class $x_t$. Hence $p^a x_{t+a}$ is divisible by $p^{t+a-1}$ but not by $p^{t+a}$, so it is nonzero in $\mathbb Z/p^{t+a}\mathbb Z$. This contradicts $p^a x=0$. Therefore $x=0$, and $\mathbb Z_p$ is torsion-free. [F1, step 1.1, discharge-contradiction] ∎
