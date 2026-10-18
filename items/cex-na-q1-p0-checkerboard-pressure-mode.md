---
id: cex-na-q1-p0-checkerboard-pressure-mode
kind: counterexample
title: "The alternating Q1/P0 checkerboard pressure defeats the discrete inf-sup
  condition"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [ "lem-na-fortin-transfers-discrete-infsup" ]
justified_by: []
aliases: []
proof_strategy: constructive
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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

## Statement refuted

The continuous Q1 velocity / cellwise P0 pressure pair is uniformly inf-sup stable on every Cartesian mesh.

## Facts & Assumptions

**Given:** The unit square with its $2\times2$ square mesh; $V_h$ is the continuous bilinear vector space with zero boundary values, $Q_h$ is the cellwise constant zero-mean space, and $b(v,q):=-\int_Dq\operatorname{div}v$. Use $\|v_h\|=\|\nabla v_h\|_2$ and $\|q_h\|=\|q_h\|_2$.


[F1] The discrete inf-sup constant is $\inf_{q_h\ne0}\sup_{v_h\ne0} b(v_h,q_h)/(\|v_h\|_V\|q_h\|_Q)$. ([[lem-na-fortin-transfers-discrete-infsup]])
## Counterexample

**Proof technique:** constructive null mode.

1.1 Define $q=+1$ on the lower-left and upper-right cells and $q=-1$ on the other two. Equal cell areas show $\int_Dq=0$, and $q\ne0$. Let $\eta$ be the one-dimensional hat with values $0,1,0$ at $0,1/2,1$. The only interior Q1 node is the center, so each scalar velocity is a multiple of $\phi(x,y)=\eta(x)\eta(y)$. [given, construct]

2.1 Let $I_L=[0,1/2]$, $I_R=[1/2,1]$, and similarly $J_B,J_T$. Direct integration gives $\int_{I_L}\eta'=1$, $\int_{I_R}\eta'=-1$, and $\int_{J_B}\eta=\int_{J_T}\eta=1/4$. The alternating signs factor, so $\int_Dq\,\partial_x\phi=(1-(-1))(1/4-1/4)=0$. Interchanging $x,y$ gives $\int_Dq\,\partial_y\phi=0$. [algebra, step 1.1]

3.1 Every admissible velocity is $(a\phi,b\phi)$ for constants $a,b$, so step 2.1 gives $b(v,q)=0$ for every velocity while $q$ is a nonzero mean-zero pressure. Its supremum in the discrete inf-sup quotient is zero; nonnegativity of that quotient forces the discrete inf-sup constant to be $0$. Thus this family is not uniformly inf-sup stable. [given, F1, discharge-construct, step 2.1] ∎
