---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-braided-category-tensor-product-algebra-structure.json
  precheck: pass
id: thm-braided-category-tensor-product-algebra-structure
kind: theorem
title: A braiding gives the tensor product algebra structure
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-separable-algebra-and-bimodule-in-fusion-category
  - def-braided-monoidal-category
  - def-braiding
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Statement

Let $\mathcal C$ be a braided fusion category with braiding $c$, and let $A,B$ be algebra objects. The object $A\otimes B$ is an algebra with unit $\eta_A\otimes\eta_B$ and multiplication
$$m_{A\otimes B}=(m_A\otimes m_B)\circ(1_A\otimes c_{B,A}\otimes1_B).$$

## Facts & Assumptions


**Given:** A braided fusion category $\mathcal C$ with braiding $c$ and algebra objects $A,B$.

[F1] [[def-braided-monoidal-category]]: The braiding is natural and invertible and satisfies both hexagon identities.

[F2] [[def-separable-algebra-and-bimodule-in-fusion-category]]: An algebra object has multiplication and unit satisfying associativity and the two unit equations.

## Proof

1.1 The proposed multiplication first moves the middle $B\otimes A$ pair to $A\otimes B$ by $c_{B,A}$ and then applies $m_A$ and $m_B$. With a unit input, naturality of the braiding with the unitors reduces the crossing to the identity, so the left and right unit composites are $m_A(\eta_A\otimes1_A)=1_A$ and $m_B(\eta_B\otimes1_B)=1_B$, or their right-unit counterparts. Thus $\eta_A\otimes\eta_B$ is a unit. [F1, F2, given]

2.1 On three tensor factors $A\otimes B\otimes A\otimes B\otimes A\otimes B$, the left-associated product first crosses $B_1$ past $A_2$, then expands the crossing of $B_1\otimes B_2$ past $A_3$ into the crossings of $B_2$ and $B_1$ past $A_3$. The right-associated product first crosses $B_2$ past $A_3$, then expands the crossing of $B_1$ past $A_2\otimes A_3$ into the crossings past $A_2$ and $A_3$. The two expansions use the two hexagons [F1]. The crossing of $B_1$ past $A_2$ and that of $B_2$ past $A_3$ involve disjoint tensor factors and commute by functoriality, so both composites perform the same three crossings in the same resulting order. They then apply respectively $m_A(m_A\otimes1_A)$ and $m_B(m_B\otimes1_B)$, or $m_A(1_A\otimes m_A)$ and $m_B(1_B\otimes m_B)$; these agree by the algebra associativity equations in [F2]. Hence $m_{A\otimes B}$ is associative. [F1, F2, step 1.1, algebra] ∎

## Remarks

The two expanded crossing patterns in step 2.1 are shown below, with composition read from top to bottom and tensor factors read from left to right. Subscripts distinguish copies of the same object. At each crossing the $B$ strand passes over the $A$ strand; by convention this depicts $c_{B,A}:B\otimes A\to A\otimes B$, not its inverse. Associators are suppressed, as in the proof.

```tikz
\begin{tikzpicture}[x=0.65cm,y=0.65cm,line width=0.7pt]
\begin{scope}
\node at (2.5,1) {Left-associated expansion};
\node at (0,0.35) {$A_1$};
\node at (1,0.35) {$B_1$};
\node at (2,0.35) {$A_2$};
\node at (3,0.35) {$B_2$};
\node at (4,0.35) {$A_3$};
\node at (5,0.35) {$B_3$};
\draw (0,0) -- (0,-4);
\draw (2,0) -- (1.6,-0.4);
\draw (1.4,-0.6) -- (1,-1) -- (1,-4);
\draw (4,0) -- (4,-1) -- (3.6,-1.4);
\draw (3.4,-1.6) -- (3,-2) -- (2.6,-2.4);
\draw (2.4,-2.6) -- (2,-3) -- (2,-4);
\draw (1,0) -- (2,-1) -- (2,-2) -- (3,-3) -- (3,-4);
\draw (3,0) -- (3,-1) -- (4,-2) -- (4,-4);
\draw (5,0) -- (5,-4);
\node at (0,-4.35) {$A_1$};
\node at (1,-4.35) {$A_2$};
\node at (2,-4.35) {$A_3$};
\node at (3,-4.35) {$B_1$};
\node at (4,-4.35) {$B_2$};
\node at (5,-4.35) {$B_3$};
\end{scope}
\node at (6.25,-2) {$=$};
\begin{scope}[xshift=4.875cm]
\node at (2.5,1) {Right-associated expansion};
\node at (0,0.35) {$A_1$};
\node at (1,0.35) {$B_1$};
\node at (2,0.35) {$A_2$};
\node at (3,0.35) {$B_2$};
\node at (4,0.35) {$A_3$};
\node at (5,0.35) {$B_3$};
\draw (0,0) -- (0,-4);
\draw (2,0) -- (2,-1) -- (1.6,-1.4);
\draw (1.4,-1.6) -- (1,-2) -- (1,-4);
\draw (4,0) -- (3.6,-0.4);
\draw (3.4,-0.6) -- (3,-1) -- (3,-2) -- (2.6,-2.4);
\draw (2.4,-2.6) -- (2,-3) -- (2,-4);
\draw (1,0) -- (1,-1) -- (2,-2) -- (3,-3) -- (3,-4);
\draw (3,0) -- (4,-1) -- (4,-4);
\draw (5,0) -- (5,-4);
\node at (0,-4.35) {$A_1$};
\node at (1,-4.35) {$A_2$};
\node at (2,-4.35) {$A_3$};
\node at (3,-4.35) {$B_1$};
\node at (4,-4.35) {$B_2$};
\node at (5,-4.35) {$B_3$};
\end{scope}
\end{tikzpicture}
```

The left panel crosses $(B_1,A_2)$, then $(B_2,A_3)$, then $(B_1,A_3)$; the right panel interchanges the first two, disjoint crossings. The hexagons and naturality give these expansions before multiplication. Both panels map $(A\otimes B)^{\otimes3}$ to $A^{\otimes3}\otimes B^{\otimes3}$. Following either panel by $m_A^{(3)}\otimes m_B^{(3)}$ gives the corresponding parenthesized product, where $m_X^{(3)}=m_X(m_X\otimes1_X)=m_X(1_X\otimes m_X)$ for $X=A,B$. These equalities use algebra associativity, not commutativity or a symmetric braiding. The rigorous proof above is independent of the illustration.
