---
id: thm-qftx-subtraction-character-factorization
kind: theorem
title: Laurent subtraction factors a character into counterterm and finite characters
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-rooted-forest-hopf
  - thm-qftx-cut-hopf-antipode
  - def-qftx-laurent-subtraction-target
  - lem-qftx-laurent-negative-projection-rota-baxter
justified_by: []
dependency_roles:
  def-qftx-rooted-forest-hopf: mathematical-premise
  thm-qftx-cut-hopf-antipode: mathematical-premise
  def-qftx-laurent-subtraction-target: mathematical-premise
  lem-qftx-laurent-negative-projection-rota-baxter: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Dominique Manchon, Hopf algebras, from basics to applications to renormalization, full lecture notes, arXiv:math/0408405v2
      url: https://arxiv.org/pdf/math/0408405
      locator: "Section II.5, Theorem II.5.1 and its proof, printed pp. 35–37: degree-recursive Birkhoff decomposition, projection recursion, and character preservation under the Laurent splitting."
verification:
  precheck: pass
---

## Statement

Let $\mathcal T$ be the isomorphism classes of finite nonempty rooted trees and $H=\mathbb Q[\mathcal T]$ their connected graded commutative Hopf algebra, graded by total vertices. Its coproduct is $\Delta(t)=t\otimes1+\sum_C P_C(t)\otimes R_C(t)$, where $C$ ranges over edge subsets meeting each root-to-leaf path at most once (including the empty cut), $P_C(t)$ is the child-side forest, and $R_C(t)$ is the root-side component; let $S$ be its antipode. Put $H_+=\bigoplus_{n>0}H_n$. Let $K$ be a commutative unital $\mathbb Q$-algebra, let $\epsilon$ be formal, and let $A=K((\epsilon))=A_-\oplus A_+$ split into strictly negative and nonnegative powers, with $R$ the projection onto $A_-$. A character is a unital algebra homomorphism $\phi:H\to A$. For each positive-degree homogeneous $h$, write $\widetilde\Delta(h)=\Delta(h)-h\otimes1-1\otimes h$ and define recursively
$$B_\phi(h)=\phi(h)+\sum_{\widetilde\Delta(h)}\phi_-(h_{(1)})\phi(h_{(2)}),\qquad \phi_-(1)=1,\qquad \phi_-(h)=-R B_\phi(h).$$
The sum is over the finite reduced coproduct and the recursion is degreewise finite. Define convolution by $f*g=m_A(f\otimes g)\Delta$, where $m_A$ and $u_A$ are the multiplication and unit maps of $A$, and put $\phi_+=\phi_-*\phi$. Then $\phi_-$ and $\phi_+$ are characters, $\phi_-(H_+)\subseteq A_-$ and $\phi_+(H)\subseteq A_+$, and the convolution inverse $\phi_-^{-1}=\phi_-\circ S$ exists with
$$\phi=\phi_-^{-1}*\phi_+.$$
This is an algebraic factorization for characters; it does not assert a graph-to-rooted-tree identification for actual Feynman graphs.

## Statement references

[[def-qftx-rooted-forest-hopf]]

[[thm-qftx-cut-hopf-antipode]]

[[def-qftx-laurent-subtraction-target]]

[[lem-qftx-laurent-negative-projection-rota-baxter]]

## Facts & Assumptions

**Given:** A character $\phi:H\to A$ and the algebraic structures in the cited definitions and theorem.

[F1] [[def-qftx-rooted-forest-hopf]]: $H$ is the commutative polynomial algebra on finite rooted trees, graded by total vertices, with the admissible-cut coproduct.

[F2] [[thm-qftx-cut-hopf-antipode]]: $H$ is a connected graded Hopf algebra with antipode $S$ and finite reduced coproduct on every homogeneous element.

[F3] [[def-qftx-laurent-subtraction-target]]: $A=A_-\oplus A_+$, $R$ projects onto the strictly negative Laurent powers, and $A_+$ is a subalgebra.

[F4] [[lem-qftx-laurent-negative-projection-rota-baxter]]: $R(x)R(y)=R(R(x)y+xR(y)-xy)$ for all $x,y\in A$.

## Proof

**Given:** [F1]–[F4] and a character $\phi:H\to A$.

1.1 For homogeneous $h$ of degree $n>0$, every term $h_{(1)}\otimes h_{(2)}$ in $\widetilde\Delta(h)$ has both factors of positive degree strictly less than $n$, because $H$ is connected and graded by [F2]. There are finitely many terms by [F1], so induction on $n$ defines $B_\phi(h)$ and $\phi_-(h)$ without circularity; extend linearly and set $\phi_-(1)=1$. [given, F1, F2, construct]

2.1 Let $x,y$ be positive-degree homogeneous elements with total degree $d$, and assume inductively that $\phi_-(uv)=\phi_-(u)\phi_-(v)$ whenever $\deg u+\deg v<d$. Expand $\Delta(xy)=\Delta(x)\Delta(y)$. In $(\phi_-*\phi)(x)(\phi_-*\phi)(y)$, every summand except the unique pair $(x\otimes1)(y\otimes1)$ has left-factor product degree less than $d$; for those terms the induction hypothesis factors $\phi_-(x_{(1)}y_{(1)})$, while the character property factors $\phi(x_{(2)}y_{(2)})$. Thus these lower-degree summands agree term-by-term with those in $(\phi_-*\phi)(xy)$. The only remaining terms are the top pair $\phi_-(x)\phi_-(y)$ in the product and $\phi_-(xy)$ in the convolution of $xy$. Since $B_\phi(xy)=(\phi_-*\phi)(xy)-\phi_-(xy)$ and $(\phi_-*\phi)(x)=\phi_-(x)+B_\phi(x)$, subtracting the top pair gives
$$B_\phi(xy)=(\phi_-*\phi)(x)(\phi_-*\phi)(y)-\phi_-(x)\phi_-(y)=\phi_-(x)B_\phi(y)+B_\phi(x)\phi_-(y)+B_\phi(x)B_\phi(y).$$
The equality uses commutativity of $A$. [F1, F2, step 1.1, algebra]

3.1 If either $x$ or $y$ has degree zero, multiplicativity follows from $\phi_-(1)=1$. Otherwise write $X=B_\phi(x)$ and $Y=B_\phi(y)$. By the recursion and the identity in [F4],
$$\phi_-(xy)=-R B_\phi(xy)=R\bigl(R(X)Y+XR(Y)-XY\bigr)=R(X)R(Y)=\phi_-(x)\phi_-(y).$$
Thus degree induction proves that $\phi_-$ is a character on all of $H$. [F3, F4, step 2.1, algebra]

4.1 For positive-degree $h$, expanding its full coproduct gives $(\phi_-*\phi)(h)=\phi_-(h)+B_\phi(h)=-RB_\phi(h)+B_\phi(h)=(1-R)B_\phi(h)\in A_+$; also $(\phi_-*\phi)(1)=1\in A_+$. For $x,y\in H$, the character properties already proved and multiplicativity of $\Delta$ give
$$ (\phi_-*\phi)(xy)=\sum\phi_-(x_{(1)})\phi_-(y_{(1)})\phi(x_{(2)})\phi(y_{(2)})=(\phi_-*\phi)(x)(\phi_-*\phi)(y),$$
where commutativity of $A$ permits the middle factors to be regrouped. Thus $\phi_+=\phi_-*\phi$ is a character with the stated range. [F1, F2, F3, step 3.1, algebra]

5.1 For $h\in H$, multiplicativity and unitality of $\phi_-$ and the antipode identities in [F2] give
$$((\phi_-\circ S)*\phi_-)(h)=\sum\phi_-(S(h_{(1)}))\phi_-(h_{(2)})=\phi_-\bigl(\sum S(h_{(1)})h_{(2)}\bigr)=\phi_-(u\varepsilon(h))=u_A\varepsilon(h),$$
and likewise
$$ (\phi_-*(\phi_-\circ S))(h)=\sum\phi_-(h_{(1)})\phi_-(S(h_{(2)}))=\phi_-\bigl(\sum h_{(1)}S(h_{(2)})\bigr)=u_A\varepsilon(h).$$
Hence $\phi_-^{-1}=\phi_-\circ S$. From $\phi_+=\phi_-*\phi$, associativity and cancellation by this inverse give $\phi=\phi_-^{-1}*\phi_+$. [F2, step 4.1, algebra] ∎

## Remarks

The preceding page [[qftx-causal-renormalization]] fixes a conditional scalar time-ordered-product contract. Applying this theorem to actual scalar graphs would additionally require a graph-to-forest map that preserves the insertion coproduct, symmetry factors, and the chosen regularization character. That interface is not supplied or proved here; the theorem establishes only the stated abstract character factorization.
