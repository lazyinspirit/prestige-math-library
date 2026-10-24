---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-symplectic-brauer-relation-in-dimension-two.json
  precheck: pass
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


## Remarks

The three basis matchings below have two inputs on top and two outputs below, ordered left to right. A crossing is not a vertex. Their labels give the actions on $V\otimes V$ from step 1.2, with $P(v\otimes w)=w\otimes v$ and $(c\omega)(v\otimes w)=\omega(v,w)c$.

```tikz
\begin{tikzpicture}[scale=1.1]
\draw[thick] (0,1.5) -- (0,0);
\draw[thick] (1,1.5) -- (1,0);
\fill (0,1.5) circle (2pt);
\fill (1,1.5) circle (2pt);
\fill (0,0) circle (2pt);
\fill (1,0) circle (2pt);
\node at (0.5,2) {$I$};
\node at (0.5,-0.5) {$\rho(I)=\mathrm{id}$};
\draw[thick] (3,1.5) -- (4,0);
\draw[thick] (4,1.5) -- (3,0);
\fill (3,1.5) circle (2pt);
\fill (4,1.5) circle (2pt);
\fill (3,0) circle (2pt);
\fill (4,0) circle (2pt);
\node at (3.5,2) {$X$};
\node at (3.5,-0.5) {$\rho(X)=-P$};
\draw[thick] (6,1.5) .. controls (6,0.7) and (7,0.7) .. (7,1.5);
\draw[thick] (6,0) .. controls (6,0.8) and (7,0.8) .. (7,0);
\fill (6,1.5) circle (2pt);
\fill (7,1.5) circle (2pt);
\fill (6,0) circle (2pt);
\fill (7,0) circle (2pt);
\node at (6.5,2) {$E$};
\node at (6.5,-0.5) {$\rho(E)=c\omega$};
\end{tikzpicture}
```

Here $\rho:B_2(-2)\to\operatorname{End}(V\otimes V)$ is the action in step 1.2. Thus $\rho(I)+\rho(X)+\rho(E)=0$, although $I+X+E\ne0$ in the free Brauer algebra. These are endomorphism diagrams; the alternating signs in the four-vector contraction formula above refer instead to its displayed boundary-label convention. The verification remains independent of this illustration.
