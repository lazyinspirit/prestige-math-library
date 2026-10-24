---
id: ex-aqft-two-group-postnikov-background
kind: example
title: A nonzero finite Postnikov cocycle background
status: draft
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
sources:
  references: []
---

## Example

Let $G=A=\mathbb Z_2$ under addition with trivial action, and let $\beta(g,h,k)=ghk$ in $\mathbb Z_2$. On the ordered tetrahedron $K=\Delta^3$ with vertices $0<1<2<3$, take vertex labels $x_0=0,x_1=1,x_2=0,x_3=1$ and edges $a_{ij}=x_j-x_i$. Put $B_{012}=1$ and $B_{013}=B_{023}=B_{123}=0$. Then $\beta$ is a normalized $3$-cocycle representing a nonzero class, and $(a,B)$ is a finite $2$-group background. Under the $0$-form gauge labels $g_0=1$ and $g_1=g_2=g_3=0$, with all $1$-form labels zero, the transformed edge labels are $a'_{01}=0,a'_{12}=1,a'_{23}=1,a'_{02}=1,a'_{13}=0,a'_{03}=0$ and all four transformed face labels vanish; these transformed data also form a background.

## Incidence diagram

The drawing records only the vertices and edges of $\Delta^3$; edge labels use the increasing vertex order. The face labels are $B_{012}=1$ and $B_{013}=B_{023}=B_{123}=0$. All algebraic checks are given independently in the Verification.

```tikz
\begin{tikzpicture}
\coordinate (v0) at (0,0);
\coordinate (v1) at (3,0);
\coordinate (v2) at (1.5,2.6);
\coordinate (v3) at (1.5,1.0);
\draw (v0)--node[below] {$a_{01}=1$}(v1);
\draw (v1)--node[right] {$a_{12}=1$}(v2);
\draw (v2)--node[left] {$a_{02}=0$}(v0);
\draw (v0)--node[left] {$a_{03}=1$}(v3);
\draw (v1)--node[right] {$a_{13}=0$}(v3);
\draw (v2)--node[right] {$a_{23}=1$}(v3);
\node[below left] at (v0) {$0$};
\node[below right] at (v1) {$1$};
\node[above] at (v2) {$2$};
\node[below] at (v3) {$3$};
\end{tikzpicture}
```

## Facts & Assumptions

[F1] [[def-aqft-two-group-background]]: the group coboundary of $c:G^2\to A$ is $(\delta c)(g,h,k)=c(h,k)-c(gh,k)+c(g,hk)-c(g,h)$ when the action is trivial; a normalized $3$-cocycle satisfies the five-term $4$-variable equation; and backgrounds obey $\delta_aB=a^*\beta$.

## Verification

**Given:** the finite groups, cocycle formula, ordered tetrahedron, vertex potential, face values, and gauge labels specified in the Example.

1.1 The function $\beta(g,h,k)=ghk$ vanishes if any input is $0$. Its $3$-cocycle coboundary on $(w,x,y,z)$ is $xyz-(w+x)yz+w(x+y)z-wx(y+z)+wxy$ modulo $2$; after expansion every monomial occurs twice, so this is $0$. [given, F1, algebra]

1.2 If $\beta=\delta c$ for any $2$-cochain $c:\mathbb Z_2^2\to\mathbb Z_2$, evaluation at $(0,1,1)$ gives $c(0,0)=c(0,1)$, while evaluation at $(1,0,1)$ gives $c(0,1)=c(1,0)$. Thus $(\delta c)(1,1,1)=c(1,0)-c(0,1)=0$, contradicting $\beta(1,1,1)=1$. Hence the displayed cocycle class is nonzero. [given, F1, step 1.1, algebra]

2.1 The edge values are $a_{01}=a_{12}=a_{23}=a_{03}=1$ and $a_{02}=a_{13}=0$, so they are differences of the stated vertex potential and are flat. On the tetrahedron, $\delta_aB=B_{123}-B_{023}+B_{013}-B_{012}=-1=1=\beta(1,1,1)$ in $\mathbb Z_2$. [given, F1, algebra]

2.2 With $g=(1,0,0,0)$ and $\lambda=0$, the transformation formula gives $a'_{ij}=g_i+a_{ij}-g_j$ and $\zeta_{012}=-\beta(1,1,1)=-1=1$; each other $\zeta_{ijk}=0$ because its three arguments include $0$. Therefore $B'_{012}=1+1=0$ and the other face labels remain zero, as asserted. [given, F1, algebra]

2.3 The transformed tetrahedron has $\delta_{a'}B'=0$, while $\beta(a'_{01},a'_{12},a'_{23})=\beta(0,1,1)=0$. Thus the transformed cochains satisfy the required equation. [F1, step 2.2, algebra] ∎
