---
id: ex-na-mini-element-bubble-moment
kind: example
title: "A mini-element bubble detects an affine pressure gradient"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    "def-na-mini-element-p1-bubble-p1-spaces",
    "def-na-stokes-zero-mean-pressure-and-velocity-spaces",
    "lem-affine-simplex-gauss-green-formula",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: constructive
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf
      locator: "Chapter 54, §§54.1–54.2, MINI Fortin map and the P1+bubble/P1 pair."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 8, §§8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $K$ be a $d$-simplex, $b_K>0$ its interior barycentric bubble, and $q\in P_1(K)$ a nonconstant affine pressure. Define the local pairing $b_K(v,q):=-\int_Kq\,\operatorname{div}v$ and let $v=b_K\nabla q$. Then $b_K(v,q)=\int_Kb_K|\nabla q|^2>0$. This positive cell contribution does not by itself prove a global inf-sup bound.

## Facts & Assumptions

**Given:** Countable Choice; a simplex $K$, a nonconstant affine $q$, and the mini-element scalar bubble $b_K$.

[F1] The bubble is positive in the cell interior and vanishes on its boundary. ([[def-na-mini-element-p1-bubble-p1-spaces]])

[F2] The Stokes convention is $b(v,q)=-\int q\operatorname{div}v$; the local pairing is its cell restriction. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[A1] Countable Choice is assumed by the affine simplex Gauss--Green supplier. ([[def-countable-choice]])

[F3] The divergence integral on an affine simplex equals its outward boundary flux. ([[lem-affine-simplex-gauss-green-formula]])

## Example

The local bubble-pressure pairing is computed by integration by parts.

## Verification

**Proof technique:** direct integration by parts.

1.1 Since $\nabla q$ is constant, $\operatorname{div}(b_K\nabla q)=\nabla b_K\cdot\nabla q$. Apply [F3] to $b_K\nabla q$; the boundary flux vanishes because $b_K=0$ on $\partial K$. Thus $-\int_Kq\operatorname{div}(b_K\nabla q)=-\int_{\partial K}qb_K\nabla q\cdot n+\int_Kb_K|\nabla q|^2=\int_Kb_K|\nabla q|^2$. [A1, F1, F2, F3, given, construct]

2.1 Because $q$ is nonconstant, $|\nabla q|^2>0$; because $b_K>0$ in the interior, the integrand is positive on a set of positive volume. Its integral is therefore strictly positive. The calculation concerns one cell contribution only. [F1, algebra, discharge-construct, step 1.1] ∎
