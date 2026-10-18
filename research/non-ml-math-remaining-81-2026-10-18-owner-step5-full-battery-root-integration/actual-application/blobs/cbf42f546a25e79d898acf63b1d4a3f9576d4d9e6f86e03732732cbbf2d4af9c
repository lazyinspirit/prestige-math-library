---
id: lem-brauer-contraction-functor-and-bending
kind: lemma
title: Signed Brauer contraction functor and bending isomorphism
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-brauer-and-partition-diagram-categories
  - lem-brauer-and-partition-composition-is-associative
  - thm-brauer-generator-presentation
proof_strategy: direct
axiom_use: "No choice principle is used; all basis sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, Lemma 3.1, Theorem 3.4, and Lemma 3.6"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 16–18: signed flip, cup/cap identities, the Brauer functor, and bending."
    - title: "Goodman, Multiplicity-Free Spaces and Schur-Weyl-Howe Duality, §§6.4–7.1"
      url: https://sites.math.rutgers.edu/~goodman/pub/webnuslect.pdf
      locator: "PDF pp. 18–21: orthogonal/symplectic contraction conventions and tensor invariants."
---

## Statement

Let $k$ be algebraically closed of characteristic zero. Let $V$ have dimension $m\ge1$ with a nondegenerate symmetric bilinear form $B$ and $G=O(V,B):=\{g\in GL(V):B(gv,gw)=B(v,w)\}$, or dimension $m=2n\ge2$ with a nondegenerate alternating bilinear form $B$ and $G=Sp(V,B):=\{g\in GL(V):B(gv,gw)=B(v,w)\}$; here $GL(V)$ is the group of invertible linear maps. Symmetric means $B(v,w)=B(w,v)$; alternating means $B(v,v)=0$ for every $v$; nondegenerate means $B(v,w)=0$ for every $w$ only when $v=0$. Put $\epsilon=1$ in the symmetric case and $\epsilon=-1$ in the alternating case. The assignments $I\mapsto\operatorname{id}_V$, $X\mapsto\epsilon P$ (where $P(v\otimes w)=w\otimes v$), $A\mapsto B$, and $U\mapsto c$ define the usual $G$-equivariant Brauer contraction maps at parameter $\delta=\epsilon m$. Bending gives a linear isomorphism
$$\operatorname{Hom}_G(V^{\otimes a},V^{\otimes b})\cong (V^{\otimes(a+b)})^G.$$

## Facts & Assumptions

**Given:** The diagram convention and composition from [[def-brauer-and-partition-diagram-categories]], with its associativity lemma and the generator presentation used only to establish that the assignments respect all defining relations.

[F1] [[def-brauer-and-partition-diagram-categories]]: Brauer morphisms are typed perfect matchings composed by stacking with one factor $\delta$ per removed loop.

[F2] [[thm-brauer-generator-presentation]]: the displayed generator relations present the Brauer category. The regular-expression reduction supplies its local presentation proof.

## Proof

1.1 Choose a basis $b_1,\ldots,b_m$ and its $B$-dual basis $\bar b_1,\ldots,\bar b_m$, so $B(\bar b_i,b_j)=\delta_{ij}$, and set $c=\sum_i b_i\otimes\bar b_i$. Nondegeneracy gives $v=\sum_i B(v,b_i)\bar b_i=\sum_i B(\bar b_i,v)b_i$, hence $(B\otimes\operatorname{id})(\operatorname{id}\otimes c)=\operatorname{id}_V$ and $(\operatorname{id}\otimes B)(c\otimes\operatorname{id})=\operatorname{id}_V$. Invariance of $B$ implies invariance of its inverse tensor $c$. Symmetry or alternation gives $BP=\epsilon B$ and $Pc=\epsilon c$, while $B(c)=\sum_iB(b_i,\bar b_i)=\epsilon m$. [given, construct, algebra]

2.1 The maps $P$ satisfy $P^2=1$ and the braid relation because they permute tensor factors. Thus $\epsilon P$ satisfies the crossing-square and braid relations; $B(\epsilon P)=B$ and $(\epsilon P)c=c$ give the cap-crossing and cup-crossing relations. On $v\otimes w\otimes u$, both sides of the cap-slide relation $(A\otimes I)(I\otimes X)=(I\otimes A)(X\otimes I)$ equal $\epsilon B(v,u)w$. The dual slide relation $(I\otimes X)(U\otimes I)=(X\otimes I)(I\otimes U)$ sends $v$ on both sides to $\epsilon\sum_i b_i\otimes v\otimes\bar b_i$. Reflections give the other slide conventions. Both snake identities from step 1.1 and $B(c)=\epsilon m$ give the straightening and loop relations. Therefore the assignments satisfy every relation in [F2] and extend to a monoidal functor with $\delta=\epsilon m$. [F1, F2, step 1.1]

3.1 For a basis multi-index $I=(i_1,\ldots,i_a)$ write $b_I=b_{i_1}\otimes\cdots\otimes b_{i_a}$ and $\bar b_I=\bar b_{i_1}\otimes\cdots\otimes\bar b_{i_a}$. Map a $G$-equivariant linear map $T:V^{\otimes a}\to V^{\otimes b}$ to $\sum_I b_I\otimes T(\bar b_I)$. The inverse sends a tensor $\sum_I b_I\otimes w_I$ to $x\mapsto\sum_I B^{\otimes a}(x,b_I)w_I$; the dual-basis identities in step 1.1 show both composites are identities. The maps commute with $G$ because $B$ and $c$ are invariant, so this restricts to the stated invariant and intertwiner spaces. [step 1.1, algebra] ∎
