---
id: def-whitehead-torsion-of-an-h-cobordism
kind: definition
title: "Presentation-indexed Whitehead torsion of an h-cobordism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 10
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring", "lem-relative-handle-complex-torsion-agrees-with-the-inclusion", "def-finite-based-free-chain-complex-and-its-contraction-torsion", "lem-contraction-torsion-is-independent-of-the-contracting-homotopy", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group", "def-h-cobordism", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: not-applicable
justified_by: [thm-whitehead-torsion-of-an-h-cobordism-is-well-defined]
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.2, definitions (2.7)--(2.8) and (2.12)--(2.14), printed pp. 27--32"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Definitions 8.10, 8.18, printed pp. 174, 178; PDF pages 182, 186"
---
## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a nonempty connected smooth h-cobordism
([[def-h-cobordism]]), put $\pi=\pi_1(M_0)=\pi_1(W)$, the identification being
along the homotopy equivalence $M_0\hookrightarrow W$, and fix a finite handle
presentation $H$ of $(W,M_0)$
([[def-based-handle-chain-complex-over-the-fundamental-group-ring]]). Choose
one oriented lift of each handle as in the based handle complex and any chain
contraction $s$ of $C^{\mathrm h}_*(W,M_0;H)$, which exists by
[[lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring]]. The
**presentation-indexed Whitehead torsion** is
$$\tau_H(W,M_0):=\tau_s\bigl(C^{\mathrm h}_*(W,M_0;H)\bigr)\in\operatorname{Wh}(\pi),$$
the contraction torsion of the bounded contractible based free right
$\mathbb Z[\pi]$-complex in the sense of AT-22
([[def-finite-based-free-chain-complex-and-its-contraction-torsion]],
[[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]]),
followed by the quotient map $\tilde K_1(\mathbb Z[\pi])\to\operatorname{Wh}(\pi)$
([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]). In a
presentation with handles only in two adjacent degrees $q,q+1$ and differential
matrix $A:C_{q+1}\to C_q$, the convention gives
$\tau_H(W,M_0)=(-1)^q[A]$, which by
[[lem-relative-handle-complex-torsion-agrees-with-the-inclusion]] is the
Whitehead torsion of the inclusion $M_0\hookrightarrow W$ for the associated CW
structures. For fixed $H$ the class is independent of the contraction and the
other auxiliary choices specified in the well-definedness theorem. This
notation retains the presentation $H$; it does not assert equality for
arbitrary handle presentations.
