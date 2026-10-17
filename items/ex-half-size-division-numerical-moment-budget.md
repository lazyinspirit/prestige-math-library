---
id: ex-half-size-division-numerical-moment-budget
kind: example
title: Half-size division preserves the discrete biomass budget
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-size-structured-transport-and-division-kernel
  - alg-size-structured-finite-volume-flux-and-kernel-quadrature
  - thm-size-structured-positivity-number-and-weighted-moment-identities
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.4–1.5, PDF pp. 8–10: equal mitosis and biomass balance."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: positive midpoint weights used for the parent-cell kernel quadrature."
---

## Example

Use the disjoint partition $[0,0.5),[0.5,1.5),[1.5,2.5),[2.5,3.5]$, whose last three cell centers are $1,2,3$. Take $g=0.1$, $\mu=0$, $\gamma=1$, time step $\Delta t=0.1$, and the half-size daughter kernel $K_y=2\gamma(y)\delta_{y/2}$. Put mass $3$ in the cell centered at size $2$ and zero mass in the other cells. Verify one finite-volume division step and its number and weighted-size budget.

## Verification

**Given:** The size-structured model, finite-volume update and exact discrete moment identities.

[F1] [[def-size-structured-transport-and-division-kernel]]: $K_y$ records daughter production and $\gamma$ records removal of the dividing parent.

[F2] [[alg-size-structured-finite-volume-flux-and-kernel-quadrature]]: the mass update uses upwind flux, loss $\mu+\gamma$ and nonnegative kernel coefficients.

[F3] [[thm-size-structured-positivity-number-and-weighted-moment-identities]]: the number and center-weighted-size balances include flux, total loss and kernel zeroth/first moments.

1.1 The parent center $2$ lies in the third cell and its daughters have size $1$, exactly the second cell center. Thus the positive midpoint kernel quadrature gives $A_{2,3}=2$ and all other daughter coefficients for the occupied parent column vanish. The CFL number is $0.1(0.1/0.5+1)=0.12$ in cell 1 and $0.1(0.1/1+1)=0.11$ in each of cells 2–4, so the global maximum is $0.12\le1$. [F1, F2, construct, algebra]

2.1 The rightward internal flux from cell $C_3$ into $C_4$ is $F_3=gM_3/h_3=0.3$; the absorbing boundary flux is $F_4=0$. The daughter source is $\Delta t A_{2,3}M_3=0.6$, and parent removal is $\Delta t\gamma M_3=0.3$. Therefore the updated cell masses are $M_2'=0.6$, $M_3'=3-0.03-0.3=2.67$, and $M_4'=0.03$, with $M_1'=0$; they are all nonnegative. [F2, step 1.1, algebra]

3.1 The discrete number changes from $3$ to $0.6+2.67+0.03=3.3$, an increase $0.3$ equal to $\Delta t(2-1)\gamma M_3$. The weighted-size total changes from $2\cdot3=6$ to $1\cdot0.6+2\cdot2.67+3\cdot0.03=6.03$. Formula [F3] gives the same $0.03$ increase from transport, while division contributes $\Delta t(2\cdot1-2\cdot1)M_3=0$. Thus the first moment is conserved by division and changes only by the size-growth flux in this step. [F1, F3, step 2.1, algebra] ∎

