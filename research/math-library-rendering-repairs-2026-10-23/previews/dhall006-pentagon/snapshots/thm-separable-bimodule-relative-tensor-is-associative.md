---
id: thm-separable-bimodule-relative-tensor-is-associative
kind: theorem
title: Relative tensor product gives associative composition of separable bimodules
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - lem-relative-tensor-product-from-separability-idempotent
  - def-separable-algebra-and-bimodule-in-fusion-category
  - def-semisimple-object-and-semisimple-abelian-category
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Statement

For separable algebra objects in a finite semisimple monoidal category, take objects to be separable algebras, 1-morphisms $A\to B$ to be $A$-$B$ bimodules, and 2-morphisms to be bimodule maps. Composition is $X\circ Y=X\otimes_B Y$ with order fixed so $X:A\to B$ and $Y:B\to D$ compose as $X\otimes_B Y:A\to D$. This composition has canonical associators and unitors satisfying the bicategory pentagon and interchange equations; its units are the regular bimodules $_AA_A$.

## Facts & Assumptions


**Given:** Separable algebras and bimodules as in [[def-separable-algebra-and-bimodule-in-fusion-category]].

[F1] [[lem-relative-tensor-product-from-separability-idempotent]] constructs relative tensor products by a separability idempotent when the ambient category is fusion over an algebraically closed field. Step 1.1 below gives the construction under the present, more general hypotheses.

[F2] [[def-separable-algebra-and-bimodule-in-fusion-category]]: Bimodule morphisms preserve the left and right actions, and the regular $A$-$A$ bimodule has multiplication actions.

[F3] [[def-semisimple-object-and-semisimple-abelian-category]]: The ambient category is abelian and semisimple. In an abelian category every idempotent $p:V\to V$ splits through its image: if $p=iq$ with $i$ monic and $q$ epic, then $p^2=p$ implies $qi=1$.

## Proof

1.1 We prove the projector construction directly under the present hypotheses, extending the construction of [F1]. For each composable pair $X:A\to B$, $Y:B\to D$, set $p=(r_X\otimes l_Y)(1_X\otimes e_B\otimes1_Y)$ on $X\otimes Y$, where $e_B=\sigma_B\eta_B$. Suppress coherent associators and write $e_B=\sum_i b_i\otimes c_i$ only as notation for this morphism insertion. Centrality of $e_B$ gives $p(xb,y)=p(x,by)$. Any balanced $f$ satisfies $fp(x,y)=\sum_i f(xb_i,c_i y)=f(x,(\sum_i b_ic_i)y)=f(x,y)$ by $m_Be_B=\eta_B$. These are equalities of action-map composites, independent of elements. Taking $f=p$ gives $p^2=p$. Split $p=iq$ through its image $P$ using [F3], with $qi=1_P$. The map $q$ is balanced because $i$ is monic and $p$ is balanced. Every balanced $f$ factors as $(fi)q=f$, uniquely since $q$ is split epic. Commutativity of the outer $A,D$ actions with the middle $B$ actions makes $p$ an outer bimodule endomorphism; the induced actions on its image satisfy their axioms after precomposition with the split epimorphism $q$ and its tensor translates. Thus $P=X\otimes_B Y$ is an $A$-$D$ bimodule with the required universal property, without rigidity, algebraic closedness or a simple tensor unit. [F1, F2, F3, given, construct, algebra]

2.1 Let $X:A\to B$, $Y:B\to D$, and $Z:D\to E$. Both $(X\otimes_B Y)\otimes_D Z$ and $X\otimes_B(Y\otimes_D Z)$ receive a map from $X\otimes Y\otimes Z$ that is balanced in the $B$- and $D$-slots. Conversely, a map from $X\otimes Y\otimes Z$ balanced in both slots factors uniquely through either parenthesization: first apply the universal property in step 1.1 to one slot, then to the other. Tensoring preserves its split epimorphic universal maps; the two balancing projectors commute because the two actions on $Y$ commute. Hence either iterated factorization retains balancing in the other slot. The two iterated products therefore represent the same functor of the target object. [step 1.1, given, construct]

3.1 The representing property in step 2.1 gives a unique isomorphism $a_{X,Y,Z}:(X\otimes_B Y)\otimes_D Z\longrightarrow X\otimes_B(Y\otimes_D Z)$ preserving the universal three-balanced map; applying the same property in reverse gives its inverse. For four composable bimodules, both composites around the pentagon preserve the same universal four-balanced map. Uniqueness therefore makes the two composites equal, which is the pentagon equation. [step 2.1, algebra]

3.2 The regular bimodule $A$ is a left and right unit. The action maps $A\otimes_A X\to X$ and $X\otimes_A A\to X$ are balanced. Their inverses are induced by the algebra unit $\eta_A$ and the relevant unitors. The action and unit laws show the two composites are identities; the triangle equation for these unitors follows because its two paths agree on the universal balanced map, so step 2.1 forces equality. [F2, step 1.1, step 2.1, algebra]

4.1 Bimodule maps $f:X\to X'$ and $g:Y\to Y'$ induce the unique map $f\otimes_B g$ preserving the universal balanced map. For composable triples of bimodule maps, either horizontal-then-vertical or vertical-then-horizontal composition has the same composite with that universal map, since each is the ordinary composite of $f,g$ on the tensor factors. Uniqueness from step 1.1 gives equality; this is interchange. Thus these data form the stated bicategory. [step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎


## Remarks

The pentagon in step 3.1 compares the following five $A$-$F$ bimodules for $X:A\to B$, $Y:B\to D$, $Z:D\to E$, and $W:E\to F$:

$$P_0=((X\otimes_B Y)\otimes_D Z)\otimes_E W,\qquad P_1=(X\otimes_B(Y\otimes_D Z))\otimes_E W,$$
$$P_2=X\otimes_B((Y\otimes_D Z)\otimes_E W),\qquad P_3=X\otimes_B(Y\otimes_D(Z\otimes_E W)),$$
$$P_4=(X\otimes_B Y)\otimes_D(Z\otimes_E W).$$

```tikz
\begin{tikzpicture}[>=stealth,scale=0.9]
\node (P0) at (0,0) {$P_0$};
\node (P1) at (2,1.6) {$P_1$};
\node (P2) at (5,1.6) {$P_2$};
\node (P3) at (7,0) {$P_3$};
\node (P4) at (3.5,-1.6) {$P_4$};
\draw[->] (P0) -- node[above left] {$\alpha_1$} (P1);
\draw[->] (P1) -- node[above] {$\alpha_2$} (P2);
\draw[->] (P2) -- node[above right] {$\alpha_3$} (P3);
\draw[->] (P0) -- node[below left] {$\beta_1$} (P4);
\draw[->] (P4) -- node[below right] {$\beta_2$} (P3);
\end{tikzpicture}
```

The arrows are the associators of step 3.1 and their tensor translates:

$$\alpha_1=a_{X,Y,Z}\otimes_E1_W,\qquad\alpha_2=a_{X,Y\otimes_D Z,W},\qquad\alpha_3=1_X\otimes_B a_{Y,Z,W},$$
$$\beta_1=a_{X\otimes_B Y,Z,W},\qquad\beta_2=a_{X,Y,Z\otimes_E W}.$$

Each $P_i$ receives its iterated universal map $q_i:X\otimes Y\otimes Z\otimes W\to P_i$, balanced over $B,D,E$, with ambient associators suppressed as in step 1.1. Every displayed arrow $h:P_i\to P_j$ satisfies $h q_i=q_j$. Consequently both routes carry $q_0$ to $q_3$, and step 3.1 gives $\alpha_3\alpha_2\alpha_1=\beta_2\beta_1$. The diagram illustrates this equality; the proof above is independent of it.
