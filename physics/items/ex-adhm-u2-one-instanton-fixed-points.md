---
id: ex-adhm-u2-one-instanton-fixed-points
kind: example
title: "The Two U(2) Fixed Points at Charge One"
status: draft
origin: pipeline
dependency_level: 15
axiom_base: "ZF + full AC through the fixed-point theorem supplier; this example uses only finite calculations."
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-axiom-of-choice
  - thm-adhm-fixed-point-instanton-count
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
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

Assume full AC. Let $T=(S^1)^2\times T_G$, with $T_G=(S^1)^2$ acting diagonally on $W=\mathbb C^2$. Denote its two representation characters on $W$ by $e_1^{-1},e_2^{-1}$, and let $e_1,e_2$ be their dual characters, so $\mathbf W=e_1^{-1}+e_2^{-1}$. For a framing element $h\in T_G\subset U(W)$, the action on ADHM data is
$$(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ).$$
Put $\epsilon_i=c_1^T(t_i)$ and $a_\alpha=c_1^T(e_\alpha)$, and work over $K=\mathbb Q(\epsilon_1,\epsilon_2,a_1,a_2)$ with algebraically independent generators. Let $\mathfrak M^\zeta_{1,2}$ be the quotient of $V=\mathbb C$, $W=\mathbb C^2$ data $(B_1,B_2,I,J)$ satisfying $[B_1,B_2]+IJ=0$ and $\operatorname{span}\{B_1^{m_1}B_2^{m_2}I(W):m_1,m_2\geq0\}=V$, modulo $GL(V)$, in the positive stability chamber, and let $q$ be the formal variable in the fixed-point series.

The two fixed points are $(\{(0,0)\},\varnothing)$ and $(\varnothing,\{(0,0)\})$. Their tangent characters are respectively
$$t_1+t_2+\frac{e_2}{e_1}+t_1t_2\frac{e_1}{e_2}\qquad\text{and}\qquad t_1+t_2+\frac{e_1}{e_2}+t_1t_2\frac{e_2}{e_1}.$$
For each isolated fixed point, define its tangent Euler product as the product, with multiplicity, of the additive equivariant weights in its tangent representation. The products are
$$E_1=\epsilon_1\epsilon_2(a_2-a_1)(\epsilon_1+\epsilon_2+a_1-a_2),\qquad E_2=\epsilon_1\epsilon_2(a_1-a_2)(\epsilon_1+\epsilon_2+a_2-a_1).$$
The theorem defines $Z^{\mathrm{fp}}_2(q)=\sum_{k\geq0}q^k\sum_{|\vec Y|=k}E_{\vec Y}^{-1}$ using these tangent Euler products. At total size one, its coefficient is $E_1^{-1}+E_2^{-1}$.

The diagram places the one box in either framing color. Each square is a one-dimensional weight space of $V$, and the $Y_\alpha$ labels identify the framing color.
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
**Given:** Full AC, $N=2$, $k=1$, $V=\mathbb C$, $W=\mathbb C^2$, $\zeta>0$, the displayed action and algebraically independent formal torus weights.

[A1] [[def-axiom-of-choice]]: full AC is required by the theorem supplier’s stable-quotient and fixed-scheme arguments that yield the fixed-point and tangent results; this example’s finite character calculation uses no additional choices.

[F1] [[def-qftx-adhm-linear-data-stability-and-regularity]]: for $N=2$, the raw ADHM maps, equation, word stability, and dual-framing torus action have the conventions displayed in the Example.

[F2] [[thm-adhm-fixed-point-instanton-count]]: under full AC, fixed points are indexed by two-tuples of partitions of total size one, and their tangent character is $\mathbf V^\vee\mathbf V(t_1+t_2-1-t_1t_2)+\mathbf V^\vee\mathbf W^\vee+t_1t_2\mathbf W\mathbf V$. The degree-wise formal coefficient sums the inverse tangent Euler products.
## Verification

1.1 A two-tuple of partitions with total size one places its single box in exactly one of the two colors, so the only possibilities are $(\{(0,0)\},\varnothing)$ and $(\varnothing,\{(0,0)\})$. Their quotient representatives have $V$-characters $e_1$ and $e_2$, respectively. [given, A1, F2, algebra]

2.1 For the first point, the ADHM convention [F1] gives $\mathbf W=e_1^{-1}+e_2^{-1}$ and $\mathbf W^\vee=e_1+e_2$, while $\mathbf V=e_1$. Substitution in [F2] gives $$t_1+t_2+\frac{e_2}{e_1}+t_1t_2\frac{e_1}{e_2}.$$ The corresponding additive weights are $\epsilon_1,\epsilon_2,a_2-a_1,\epsilon_1+\epsilon_2+a_1-a_2$, so their product is $E_1$. Interchanging the two colors gives the second displayed character and $E_2$. [given, A1, F1, F2, step 1.1, algebra]

3.1 Each fixed-point contribution is the reciprocal of its Euler product, so the degree-one coefficient is $E_1^{-1}+E_2^{-1}$. The TikZ drawing only records the two one-box colorings and is not used in this calculation. [given, A1, F2, step 2.1, algebra] ∎
