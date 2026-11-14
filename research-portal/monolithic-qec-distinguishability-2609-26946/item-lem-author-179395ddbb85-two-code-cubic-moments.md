---
title: The selected spin-four and spin-five codes have nontrivial cubic moments
status: draft
research_item: lem-author-179395ddbb85-two-code-cubic-moments
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)


## Statement

In $V_4$ let $u_0=\sqrt{1/3}e_{4,-4}+\sqrt{2/3}e_{4,2}$ and $u_1=\sqrt{2/3}e_{4,-2}-\sqrt{1/3}e_{4,4}$. In $V_5$ let $v_0=\sqrt{5/7}e_{5,-2}+\sqrt{2/7}e_{5,5}$ and $v_1=\sqrt{2/7}e_{5,-5}+\sqrt{5/7}e_{5,2}$. Each ordered pair is orthonormal. For the corresponding two-column isometries $U$ and $V$, $U^*J_zU=V^*J_zV=0$, whereas $U^*J_z^3U=\operatorname{diag}(-16,16)$ and $V^*J_z^3V=\operatorname{diag}(30,-30)$. Their second-moment compressions are $8I_2$ and $10I_2$, respectively.

## Facts & Assumptions

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

[F1] The magnetic vectors form an orthonormal basis and $J_z$ acts by its magnetic label. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

## Proof

**Goal:** Establish the stated formula, convergence and qualifications.

1.1 Each column has squared norm one and the two columns in either block have disjoint magnetic supports, hence are orthogonal. All cross matrix elements of powers of $J_z$ vanish for the same reason. For the spin-four columns, the first moments are $(-4+4)/3=0$ and $(-4+4)/3=0$; the second moments are $(16+8)/3=(8+16)/3=8$; the third moments are $(-64+16)/3=-16$ and $(-16+64)/3=16$. [F1, algebra]

2.1 For the spin-five columns the first moments are $(-10+10)/7=(-10+10)/7=0$. Their second moments are $(20+50)/7=(50+20)/7=10$. Their third moments are $(-40+250)/7=30$ and $(-250+40)/7=-30$. Together with the zero cross matrix elements and orthonormality established in step 1.1, these are exactly the asserted compression matrices. [F1, step 1.1, algebra] ∎
