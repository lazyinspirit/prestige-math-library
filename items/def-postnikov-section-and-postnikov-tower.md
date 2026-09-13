---
id: def-postnikov-section-and-postnikov-tower
kind: definition
title: Postnikov section and Postnikov tower
status: draft
origin: pipeline
deps: ["def-n-connected-space-and-n-connected-map"]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 7.12.1 and Theorem 7.40, printed pages 192--193
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 12, Theorem 12.1 and the Postnikov tower, printed pages 37--40
---

## Definition

Let $(X,x_0)$ be a connected based space and let $n\geq1$. An **$n$th Postnikov section** is a based map

$$ p_n:X\longrightarrow P_nX $$

to a connected based space such that $(p_n)_*:\pi_i(X,x_0)\to\pi_i(P_nX,p_nx_0)$ is an isomorphism for $1\leq i\leq n$ and $\pi_i(P_nX)=0$ for $i>n$. The isomorphism on $\pi_1$ transports the usual $\pi_1$-actions on every retained higher group.

A **Postnikov tower** is a choice of sections $p_n$, the convention $P_0X=*$, and maps

$$ q_n:P_nX\longrightarrow P_{n-1}X\qquad(n\geq1) $$

and specified based homotopies $q_np_n\simeq p_{n-1}$. Unless a strict model has been chosen, the tower is therefore a diagram in the based homotopy category rather than a literally commuting inverse sequence.

This definition asserts neither that $X\to\operatorname*{holim}_nP_nX$ is an equivalence nor that an ordinary inverse limit recovers $X$. Those are separate convergence claims.
