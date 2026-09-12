---
id: "fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence"
kind: "false-statement"
title: "R^pG(R^qF) is the E1 page"
deps: ["lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge", "prop-modules-over-a-field-are-projective-flat-and-injective", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.8.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

The standard Grothendieck construction has $E_1^{p,q}=R^pG(R^qF(A))$.

## Facts & Assumptions

**Given:** The standard resolution-degree filtration, with no relabelling of page indices.

[F1] The horizontal-first page takes horizontal cohomology, then its next cohomology gives $R^pG(R^qF(A))$ at $E_2$ ([[lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge]]).

[F2] Under AC, all modules over a field are injective ([[prop-modules-over-a-field-are-projective-flat-and-injective]]).

## Refutation

1.1 Assume AC and take $F=G$ the identity on $k$-vector spaces for $k=\mathbb F_2$, and $A=k$. Supply its injective resolution concentrated in degree zero. Resolve that one-term complex by the Cartan–Eilenberg column $0\to k\xrightarrow{x\mapsto(x,0)}k^2\xrightarrow{(x,y)\mapsto y}k\to0$; all other columns vanish. It is exact, all terms are injective by F2, and its horizontal boundaries are zero while cycles and cohomology are the column itself. Thus it meets every Cartan–Eilenberg condition. [F2, construct]

2.1 The horizontal-first $E_1$ page is $k^2$ at $(p,q)=(0,0)$ and $k$ at $(1,0)$, with $d_1(x,y)=y$. Taking its cohomology leaves $k$ at $(0,0)$ and zero elsewhere. These are the iterated derived identity functors in F1. In particular $E_1^{0,0}$ has four elements whereas $G(F(A))=k$ has two, and $E_1^{1,0}\ne0=R^1G(F(A))$. Every later differential is zero by single-entry support. The distinction is the remaining resolution differential, not merely notation; a deliberate shifted page convention would have to be declared. AC licenses the injective objects in this witness; all its displayed maps and calculations are finite. [F1, step 1.1] ∎
