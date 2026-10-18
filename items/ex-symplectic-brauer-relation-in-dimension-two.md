---
id: ex-symplectic-brauer-relation-in-dimension-two
kind: example
title: The first symplectic Brauer relation in dimension two
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-brauer-and-partition-diagram-categories
  - lem-brauer-and-partition-diagram-basis-ranks
proof_strategy: direct
generation:
  role: example
axiom_use: "No choice principle is used; the relation is a finite polynomial identity."
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, Lemma 4.4 and Theorem 4.6"
      url: https://arxiv.org/pdf/1207.5889
      locator: 'PDF pp. 20–21: the symplectic Pfaffian relation and stable range $r\le m/2.'
---

## Example

Let $V=\mathbb Q^2$ with $\omega((x,y),(x',y'))=xy'-yx'$, and put $G=Sp(V,\omega)=\{g\in GL(V):\omega(gv,gw)=\omega(v,w)\}$. For four vectors, write $p_{ij}=\omega(v_i,v_j)$. Then
$$p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23}=0.$$
This is a nonzero linear combination of the three distinct pairing basis vectors in $B_2(-2)$, so the symplectic contraction map is not injective at $r=2>n=1$.

## Facts & Assumptions

**Given:** The symplectic contraction convention, the standard form above, and the three pairings of four boundary labels.

[F1] [[def-brauer-and-partition-diagram-categories]] and [[lem-brauer-and-partition-diagram-basis-ranks]]: the three pairings form distinct basis vectors of $B_2(-2)$.

[F2] [[def-brauer-and-partition-diagram-categories]]: at parameter $\delta=-2$, stacking the cup-cap diagram with itself contributes one loop and hence coefficient $-2$.

## Verification

1.1 Write $v_i=(x_i,y_i)$. Then $p_{ij}=x_i y_j-y_i x_j$. Expanding the left side gives six cancelling pairs of monomials: $x_1x_3y_2y_4$ with $-x_1x_3y_2y_4$, $-x_1x_4y_2y_3$ with $x_1x_4y_2y_3$, $-x_1x_2y_3y_4$ with $x_1x_2y_3y_4$, $-x_2x_3y_1y_4$ with $x_2x_3y_1y_4$, $x_2x_4y_1y_3$ with $-x_2x_4y_1y_3$, and $-x_3x_4y_1y_2$ with $x_3x_4y_1y_2$. Thus the multilinear contraction combination vanishes. [given, algebra]

1.2 Name the three endomorphism diagrams $I,X,E$ as in the companion convention. In the symplectic tensor representation they act as $\operatorname{id},-P,c\omega$, where $c=-e_1\otimes e_2+e_2\otimes e_1$. The map respects their multiplication table: $X^2=I$, $XE=EX=E$, and $E^2=-2E$, the last equality following from $\omega(c)=-2$ and [F2]. Moreover $I+X+E$ annihilates $e_1\otimes e_1$, $e_2\otimes e_2$, $e_1\otimes e_2$, and $e_2\otimes e_1$, so it is the zero operator. [given, F2, algebra]

2.1 The element $I+X+E$ is nonzero in the free Brauer module because its three coefficients on distinct basis diagrams are nonzero; [F1] gives the matching count three. At $r=0$ the action is $\mathbb Q\to\operatorname{End}(\mathbb Q)$ and is an isomorphism. At $r=1$, $B_1(-2)$ is spanned by the identity diagram. For a $2\times2$ matrix $M$, $M^{\mathsf T}\begin{pmatrix}0&1\\-1&0\end{pmatrix}M=(\det M)\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, so both $\operatorname{diag}(2,1/2)$ and $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ lie in $Sp_2(\mathbb Q)$. A matrix commuting with the first is diagonal; if it also commutes with the second, its diagonal entries are equal. Hence $\operatorname{End}_{Sp_2}(V)=\mathbb Q\operatorname{id}$ and the rank-one diagram action is an isomorphism. Therefore the nonzero kernel at $r=2=n+1$ is the first failure, exactly outside the symplectic stable range. [F1, step 1.2, algebra] ∎
