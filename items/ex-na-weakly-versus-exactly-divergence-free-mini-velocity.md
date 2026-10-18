---
id: ex-na-weakly-versus-exactly-divergence-free-mini-velocity
kind: example
title: "A weakly divergence-free mini velocity need not be pointwise divergence-free"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    "def-na-mini-element-p1-bubble-p1-spaces",
    "def-na-discrete-weak-and-exact-divergence-free-spaces",
    "lem-na-mini-element-local-and-global-dimensions",
    "thm-rank-nullity",
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. On a square split into two triangles, the mini-element weak divergence kernel contains a nonzero velocity whose divergence is not zero almost everywhere. Thus the weak discrete kernel $Z_h$ can strictly contain the exact kernel $Z_h^0$.

## Facts & Assumptions

**Given:** Countable Choice; the unit square divided by one diagonal into two shape-regular triangles, the mini-element spaces, and the weak/exact kernel definitions.

[A1] Countable Choice is the hypothesis of the mini-space and dimension suppliers. ([[def-countable-choice]])

[F1] On a connected mesh with $N_v$ vertices, $N_{v,0}$ interior vertices and $N_K$ cells, $\dim V_h=dN_{v,0}+dN_K$ and $\dim Q_h=N_v-1$. ([[lem-na-mini-element-local-and-global-dimensions]])

[F2] Mini velocities consist of zero-boundary continuous P1 fields plus cell-supported vector bubbles; pressures are continuous P1 with zero mean. ([[def-na-mini-element-p1-bubble-p1-spaces]])

[F3] $Z_h=\{v_h:b(v_h,q_h)=0\ \forall q_h\in Q_h\}$ and $Z_h^0=\{v_h:\operatorname{div}v_h=0\text{ a.e.}\}$. ([[def-na-discrete-weak-and-exact-divergence-free-spaces]])

[F4] For a linear map with finite-dimensional domain, domain dimension equals kernel dimension plus image dimension. ([[thm-rank-nullity]])

## Example

Rank-nullity provides a nonzero weak-kernel velocity on the stated two-triangle mesh.

## Verification

**Proof technique:** rank-nullity and a local polynomial check.

1.1 This mesh has four vertices, no interior vertices, and two cells. [F1] gives $\dim V_h=2\cdot0+2\cdot2=4$ and $\dim Q_h=4-1=3$. The linear constraint map from $V_h$ to $Q_h'$ therefore has nonzero kernel by rank-nullity, so choose $0\ne v_h\in Z_h$. [A1, F1, F4, choose, construct]

2.1 Since all square vertices lie on the boundary, the zero-boundary P1 velocity part is zero. By [F2], $v_h$ consists only of vector bubbles, one supported on each triangle. At least one cell has a nonzero bubble coefficient $a\in\mathbb R^2$. [A1, F1, F2, step 1.1]

3.1 On that cell, $\operatorname{div}(b_Ka)=a\cdot\nabla b_K$. If this polynomial vanished identically, $b_K$ would be constant along every line segment parallel to $a$ inside $K$. The line through the barycenter parallel to $a$ meets $\partial K$ at two endpoints where $b_K=0$, so constancy would force $b_K$ to vanish at the barycenter, contradicting $b_K>0$ there. Thus this polynomial is nonzero at some point of the cell interior. By continuity it remains nonzero on a small open ball, which has positive measure; hence $\operatorname{div}v_h\ne0$ on a positive-measure subset of that cell. [A1, F2, F1, step 2.1]

4.1 By [F3], the selected $v_h$ lies in $Z_h$ but not $Z_h^0$. For any exactly divergence-free velocity, $b(v_h,q_h)=0$ follows immediately from [F3]'s pairing, so $Z_h^0\subseteq Z_h$; the inclusion is strict on this mesh. [A1, F1, F3, discharge-construct, step 3.1] ∎
