---
id: prop-bdf2-roots-vanish-in-stiff-limit
kind: proposition
title: "Both constant-step BDF2 test roots vanish in the stiff limit"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-bdf2-root-locus-location
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"

---
## Statement

For $\operatorname{Re}z\le0$, let $\zeta$ be any root of the constant-step BDF2 test polynomial $P_z(\zeta)=(3-2z)\zeta^2-4\zeta+1$. As $|z|\to\infty$ within the closed left half-plane, every such root satisfies $\zeta\to0$.

This is a multistep damping statement. It does not extend the one-step definition of L-stability to multistep methods.

## Facts & Assumptions

**Given:** A complex number $z$ with $\operatorname{Re}z\le0$ and a root $\zeta$ of the stated BDF2 test polynomial.

[F1] [[lem-bdf2-root-locus-location]]: the BDF2 test polynomial on a uniform grid is $(3-2z)\zeta^2-4\zeta+1$.

## Proof
1.1 Let $C=|3-2z|$ and $r=|\zeta|$. By [F1], the root equation implies $(3-2z)\zeta^2=4\zeta-1$, hence $Cr^2=|4\zeta-1|\le4r+1$. Also $C\ge2|z|-3$, so $C\to\infty$ as $|z|\to\infty$. [given, F1, algebra]

2.1 If $C>5$ and $r\ge1$, step 1.1 gives $Cr^2\le4r+1\le5r$, hence $C\le5/r\le5$, a contradiction. Thus $r<1$ for $C>5$, and then $Cr^2\le4r+1<5$, so $r<\sqrt{5/C}$. This bound tends to zero as $|z|\to\infty$, proving the claim for every root. [step 1.1, algebra] ∎
