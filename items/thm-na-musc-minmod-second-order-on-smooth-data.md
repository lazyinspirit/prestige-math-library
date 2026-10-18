---
id: thm-na-musc-minmod-second-order-on-smooth-data
kind: theorem
title: MUSCL/minmod face states are second order on smooth monotone data
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-na-high-resolution-reconstruction
  - cor-taylor-remainder-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A Beginner’s Course in Finite Volume Approximation of Scalar Conservation Laws, complete lecture notes"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§3.1–3.3, PDF pp. 31–35: cell-centered piecewise-linear MUSCL reconstruction and minmod selection."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $u\in C^2$ on a neighborhood of a cell and its two neighbors, and suppose $|u'(x)|\ge c>0$ there. Let $U_j$ be the averages of $u$ over uniform cells of width $h$, centered at $x_j=x_0+jh$. For sufficiently small $h$, the MUSCL/minmod face states of [[def-na-high-resolution-reconstruction]] satisfy
$$|U_i+hs_i/2-u(x_i+h/2)|\le C h^2,\qquad |U_i-hs_i/2-u(x_i-h/2)|\le C h^2,$$
where $C$ depends only on $c$ and a bound for $|u''|$ on the stated neighborhood.

## Facts & Assumptions

**Given:** The stated smoothness and nonvanishing derivative, uniform cell averages, and minmod MUSCL slopes.

[F1] [[def-na-high-resolution-reconstruction]]: $hs_i=\operatorname{minmod}(U_i-U_{i-1},U_{i+1}-U_i)$ and the two face states are $U_i\pm hs_i/2$.

[F2] [[cor-taylor-remainder-bound]]: with $|u''|\le M_2$, the degree-one Taylor remainder at distance $r$ is bounded by $M_2|r|^2/2$.

## Proof

1.1 Let $M_2=\sup|u''|$ on the cell and its neighbors. Applying [F2] about $x_i$ and averaging over the symmetric central cell cancels the linear term, giving $|U_i-u(x_i)|\le M_2h^2/24$. Applying [F2] at $x_i$ to the neighboring centers and using the same cell-average estimate gives $U_i-U_{i-1}=hu'(x_i)+O(M_2h^2)$ and $U_{i+1}-U_i=hu'(x_i)+O(M_2h^2)$. [given, F2, algebra]

2.1 Because $|u'(x_i)|\ge c$, both increments in step 1.1 have the same nonzero sign for all sufficiently small $h$. Minmod selects one of them, and either equals $hu'(x_i)+O(M_2h^2)$; hence $hs_i=hu'(x_i)+O(M_2h^2)$. [F1, step 1.1, algebra]

3.1 By step 1.1 and step 2.1, $U_i+hs_i/2=u(x_i)+hu'(x_i)/2+O(M_2h^2)$. Applying [F2] at distance $h/2$ gives $u(x_i+h/2)=u(x_i)+hu'(x_i)/2+O(M_2h^2)$, so subtraction proves the right-face estimate. The same calculation with $-h/2$ proves the left-face estimate. [F2, step 1.1, step 2.1, algebra] ∎

