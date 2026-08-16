---
id: def-simple-continued-fraction-coding
kind: definition
title: "Simple continued fractions, convergents, and the integer-coordinate coding of $\\mathbb N^{\\mathbb N}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-baire-sequence-space, lem-integer-part, def-rationals, def-rat-operations, thm-division-algorithm-in-z]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Definition

Define a bijection $z:\mathbb N\to\mathbb Z$ by $z(2k)=k$ and $z(2k+1)=-(k+1)$; the division algorithm makes these two cases exhaustive ([[thm-division-algorithm-in-z]]). For $x\in\mathbb N^{\mathbb N}$ put $a_0=z(x_0)$ and $a_n=x_n+1$ for $n\ge1$. Its finite simple continued fractions $[a_0;\ldots,a_n]$ are defined by recursion on the length, evaluated in $\mathbb Q$ ([[def-rationals]], [[def-rat-operations]]): $$[a_n]:=a_n,\qquad [a_k;a_{k+1},\ldots,a_n]:=a_k+\frac1{[a_{k+1};\ldots,a_n]}\quad(k<n).$$ The recursion never divides by zero, because $a_j\ge1$ for $j\ge1$ makes every tail value $[a_{k+1};\ldots,a_n]$ at least $1$. A finite prefix determines the cylinder of all codes extending it. Infinite continued-fraction values are established, rather than assumed, in [[thm-simple-continued-fractions-parametrise-the-irrationals]].

