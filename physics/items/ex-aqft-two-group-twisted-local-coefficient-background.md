---
id: ex-aqft-two-group-twisted-local-coefficient-background
kind: example
title: A finite twisted-local-coefficient background and gauge shift
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-aqft-two-group-background
dependency_roles:
  def-aqft-two-group-background: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references: []
---

## Example

Let $K$ be the ordered tetrahedron $0<1<2<3$, let $G=\mathbb Z_2$ under addition, and let $A=\mathbb Z_3$ under addition. Define the action by $\rho_0(t)=t$ and $\rho_1(t)=-t$, and take $\beta=0$. From vertex labels $x_0=0,x_1=1,x_2=0,x_3=1$ in $\mathbb Z_2$, set $a_{ij}=x_j-x_i$ and $B_{ijk}=0$. These data form a finite 2-group background. For the 1-form gauge parameter with $\lambda_{01}=1$ and all other edge labels zero, and with all vertex labels $g_i=0$, the transformed fields satisfy $a'=a$, $B'_{012}=B'_{013}=1$, and $B'_{023}=B'_{123}=0$; they form a gauge-equivalent background.

## Facts & Assumptions

[F1] [[def-aqft-two-group-background]]: flat edge labels satisfy $a_{ij}a_{jk}=a_{ik}$, the twisted tetrahedron equation is $\rho(a_{01})B_{123}-B_{023}+B_{013}-B_{012}=\beta(a_{01},a_{12},a_{23})$, and a 1-form parameter changes $B$ by $\delta_a\lambda$.

## Verification

**Given:** the groups, action, cocycle, vertex potential, and gauge parameter specified in the Example.

1.1 The edge labels are $a_{01}=1$, $a_{12}=1$, $a_{23}=1$, $a_{02}=0$, $a_{13}=0$, and $a_{03}=1$, so each triangle satisfies $a_{ij}+a_{jk}=a_{ik}$. Since $\beta=0$ and $B=0$, the tetrahedron equation also holds. [given, F1, algebra]

1.2 With $g_i=0$, the 0-form correction is zero and $\delta_a\lambda$ has values $1$ on $[012]$ and $[013]$ and $0$ on $[023]$ and $[123]$: on the first two faces its formula is $\rho(a_{01})\lambda_{1k}-\lambda_{0k}+\lambda_{01}=1$, and the other two faces contain only zero edge labels. [given, F1, algebra]

2.1 The transformed tetrahedron equation is $\rho(a_{01})B'_{123}-B'_{023}+B'_{013}-B'_{012}=0-0+1-1=0=\beta(a_{01},a_{12},a_{23})$. Thus the displayed nonzero face cochain is a valid gauge transform of the zero cochain. [F1, step 1.1, step 1.2, algebra] ∎
