---
id: ex-adhm-u2-one-instanton-fixed-points
kind: example
title: "The Two U(2) Fixed Points at Charge One"
status: draft
origin: pipeline
dependency_level: 8
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-framed-u-n-instanton-moduli-and-adhm-data
  - thm-adhm-fixed-point-instanton-count
dependency_roles:
  def-framed-u-n-instanton-moduli-and-adhm-data: mathematical-premise
  thm-adhm-fixed-point-instanton-count: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pending
proof_strategy: direct
---

## Example

Let $\mathfrak M^\zeta_{1,2}$ be the quotient of $V=\mathbb C$, $W=\mathbb C^2$ data $(B_1,B_2,I,J)$ satisfying $[B_1,B_2]+IJ=0$ and $\operatorname{span}\{B_1^{m_1}B_2^{m_2}I(W):m_1,m_2\geq0\}=V$, modulo $GL(V)$, in the positive stability chamber. Let $t_1,t_2$ be the rotation characters, let $e_1,e_2$ be the dual framing characters, and put $\epsilon_i=c_1^T(t_i)$ and $a_\alpha=c_1^T(e_\alpha)$. The two fixed points are $(\{(0,0)\},\varnothing)$ and $(\varnothing,\{(0,0)\})$. Their tangent characters are respectively
$$t_1+t_2+\frac{e_2}{e_1}+t_1t_2\frac{e_1}{e_2}\qquad\text{and}\qquad t_1+t_2+\frac{e_1}{e_2}+t_1t_2\frac{e_2}{e_1}.$$
Their Euler classes are
$$E_1=\epsilon_1\epsilon_2(a_2-a_1)(\epsilon_1+\epsilon_2+a_1-a_2),\qquad E_2=\epsilon_1\epsilon_2(a_1-a_2)(\epsilon_1+\epsilon_2+a_2-a_1).$$
Thus the degree-one coefficient of the fixed-point series is $E_1^{-1}+E_2^{-1}$.

The diagram records the two partition tuples; each square is one one-dimensional weight space of $V$, and the subscript identifies the framing color.

~~~tikz
\begin{tikzpicture}[x=0.75cm,y=0.75cm]
  \draw[fill=blue!15] (0,0) rectangle (1,1);
  \draw (0,0) grid (1,1);
  \node[below] at (0.5,0) {$Y_1$};
  \node[below] at (2,0) {$Y_2=\varnothing$};
  \draw[fill=orange!20] (4,0) rectangle (5,1);
  \draw (4,0) grid (5,1);
  \node[below] at (4.5,0) {$Y_2$};
  \node[below] at (6,0) {$Y_1=\varnothing$};
\end{tikzpicture}
~~~

## Example references

[[thm-adhm-fixed-point-instanton-count|Fixed-point classification and tangent character]]

## Facts & Assumptions
**Given:** $N=2$, $k=1$, $V=\mathbb C$, $W=\mathbb C^2$, $\zeta>0$, and independent torus characters $t_1,t_2,e_1,e_2$.

[F1] [[def-framed-u-n-instanton-moduli-and-adhm-data]]: the positive-FI complex quotient is formed from the stable solutions of $[B_1,B_2]+IJ=0$ by $GL(V)$, with $\mathbf W=e_1^{-1}+e_2^{-1}$.

[F2] [[thm-adhm-fixed-point-instanton-count]]: fixed points are indexed by two-tuples of partitions of total size one, and the tangent character is $\mathbf V^\vee\mathbf V(t_1+t_2-1-t_1t_2)+\mathbf V^\vee\mathbf W^\vee+t_1t_2\mathbf W\mathbf V$.

## Verification

1.1 A two-tuple of partitions with total size one places its single box in exactly one of the two colors, so the only possibilities are $(\{(0,0)\},\varnothing)$ and $(\varnothing,\{(0,0)\})$. Their quotient representatives have $V$-characters $e_1$ and $e_2$, respectively. [given, F2, algebra]

2.1 For the first point, the ADHM convention [F1] gives $\mathbf W=e_1^{-1}+e_2^{-1}$ and $\mathbf W^\vee=e_1+e_2$, while $\mathbf V=e_1$. Substitution in [F2] gives $$t_1+t_2+\frac{e_2}{e_1}+t_1t_2\frac{e_1}{e_2}.$$ The corresponding additive weights are $\epsilon_1,\epsilon_2,a_2-a_1,\epsilon_1+\epsilon_2+a_1-a_2$, so their product is $E_1$. Interchanging the two colors gives the second displayed character and $E_2$. [given, F1, F2, step 1.1, algebra]

3.1 Each fixed-point contribution is the reciprocal of its Euler product, so the degree-one coefficient is $E_1^{-1}+E_2^{-1}$. The TikZ drawing only records the two one-box colorings and is not used in this calculation. [given, F2, step 2.1, algebra] ∎
