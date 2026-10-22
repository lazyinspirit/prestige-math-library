---
id: thm-qftx-cut-hopf-antipode
kind: theorem
title: Admissible cuts give a connected graded Hopf algebra and recursive antipode
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qftx-rooted-forest-hopf
justified_by: []
dependency_roles:
  def-qftx-rooted-forest-hopf: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Alain Connes and Dirk Kreimer, Hopf Algebras, Renormalization and Noncommutative Geometry, Communications in Mathematical Physics 199 (1998), 203–242
      url: https://arxiv.org/pdf/hep-th/9808042
      locator: "Section 2.2, equations (65)–(82), Lemma 1, printed pp. 30–33: rooted-tree coproduct, coassociativity proof, and antipode recursion."
    - title: Dominique Manchon, Hopf algebras, from basics to applications to renormalization, full lecture notes, arXiv:math/0408405v2
      url: https://arxiv.org/pdf/math/0408405
      locator: "Section II.3, Corollary II.3.2, printed p. 32, for the finite convolution-series antipode of a connected filtered bialgebra; Section II.9.3, printed pp. 42–44, for the compatible two-level-cut coassociativity argument."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $\mathcal T$ be the isomorphism classes of finite nonempty rooted trees and $H=\mathbb Q[\mathcal T]$ their commutative polynomial algebra, graded by total vertices. An admissible cut is an edge subset meeting each root-to-leaf path at most once; $P_C(t)$ is its child-side forest and $R_C(t)$ its root-side tree. Use the coproduct $\Delta(t)=t\otimes1+\sum_C P_C(t)\otimes R_C(t)$, with the sum over admissible cuts including the empty cut, and counit $\varepsilon(1)=1$, $\varepsilon(F)=0$ for nonempty forests. The algebra $H$ is a connected graded bialgebra. Let $u$ be the algebra unit map and $m$ forest multiplication; use convolution $f*g=m(f\otimes g)\Delta$ on endomorphisms of $H$, with unit $u\varepsilon$. It has a unique two-sided convolution inverse $S$ of its identity map. For every rooted tree $t$ of positive degree,
$$S(1)=1,\qquad S(t)=-t-\sum_{\substack{C\ne\varnothing\\ C\text{ admissible}}}S(P_C(t))R_C(t).$$
The recursion is finite because each factor in every nonempty-cut term has fewer vertices than $t$. The antipode is multiplicative on forests. This is a theorem about the specified rooted-tree model and does not identify arbitrary Feynman graphs with rooted trees.

## Statement references

[[def-qftx-rooted-forest-hopf]]

## Facts & Assumptions

**Given:** The rooted-tree algebra, cut convention, coproduct, and counit in the Definition.

[F1] [[def-qftx-rooted-forest-hopf]]: $H=\mathbb Q[\mathcal T]$ has the grading by total vertices; $\Delta(t)=t\otimes1+\sum_{C\text{ admissible}}P_C(t)\otimes R_C(t)$ includes the empty edge cut; $\varepsilon$ kills every nonempty forest.

## Proof

**Given:** [F1].

1.1 A rooted-tree isomorphism bijects admissible edge subsets and preserves the isomorphism classes of their pruned forests and root components, so the cut sum is well-defined on $\mathcal T$. Each cut partitions the vertices between $P_C$ and $R_C$, hence every coproduct term has the same total degree as $t$; multiplicative extension makes $\Delta$ a graded algebra map. For nonempty $t$, only the empty cut contributes after applying $\varepsilon$ to the first factor, and only the virtual full cut $t\otimes1$ contributes after applying $\varepsilon$ to the second factor. Thus both counit identities hold on tree generators and, since both maps are algebra maps, on all forests. [F1, algebra]

2.1 Adjoin the empty cut $(P,R)=(1,t)$ and the virtual root cut $(P,R)=(t,1)$. A term of either iterated coproduct is equivalently a labeling of every vertex by its tensor position $1$, $2$, or $3$, with labels nonincreasing along every parent-to-child edge: the root-side trunk has label $3$, any middle components have label $2$, and the detached crown has label $1$. In $(\Delta\otimes\mathrm{id})\Delta(t)$, the first cut separates the label-$3$ trunk and the second cuts the pruned forest into labels $1$ and $2$; in $(\mathrm{id}\otimes\Delta)\Delta(t)$, the first cut separates the label-$1$ crown and the second cuts the root component into labels $2$ and $3$. Conversely, any such labeling determines these cuts uniquely: cut each edge where the label drops, and use the empty or virtual root cut when a layer is absent. Jumps from $3$ directly to $1$ are represented by the same edge cut in both iterates, with the missing middle factor supplied by the corresponding extreme cut. Thus both iterates sum over exactly the same finite vertex labelings, and each labeling gives the same three forests with the same multiplicity even when distinct labelings yield isomorphic forests. Coassociativity holds on $t$. Both iterated maps are algebra maps, so the identity holds on all forests. [F1, step 1.1, construct, algebra]

3.1 The degree-zero part is exactly $\mathbb Q1$, and the counit and grading checked in steps 1.1 and 2.1 make $H$ a connected graded bialgebra. For linear maps $f,g:H\to H$, define convolution $f*g=m(f\otimes g)\Delta$; coassociativity of $\Delta$ and associativity of multiplication make this product associative with unit $u\varepsilon$, where $u$ is the algebra unit map. Put $\pi=\mathrm{id}-u\varepsilon$. [F1, step 1.1, step 2.1, algebra]

4.1 If $h$ is homogeneous of degree $n$, then $\pi^{*k}(h)=0$ for $k>n$: the iterated coproduct has $k$ nonnegative homogeneous tensor degrees summing to $n$, so for $k>n$ at least one factor has degree zero and is killed by $\pi$. Therefore $S=\sum_{k\ge0}(-1)^k\pi^{*k}$ is a finite sum on each homogeneous input. Multiplying its finite partial sum on either side by $\mathrm{id}=u\varepsilon+\pi$ telescopes to $u\varepsilon$, because the remaining power of $\pi$ vanishes above degree $n$. Thus $S$ is a two-sided convolution inverse of $\mathrm{id}$; uniqueness follows by multiplying any two-sided inverse expressions in the associative convolution algebra. [step 3.1, algebra, construct]

5.1 For a positive-degree tree $t$, expand $(S*\mathrm{id})(t)=0$ using the coproduct in [F1]. The two extreme cuts contribute $S(t)$ and $t$, and each nonempty ordinary cut contributes $S(P_C(t))R_C(t)$. Rearranging gives the displayed recursion. For every such cut both the root component and each tree in the pruned forest have fewer vertices than $t$, so induction on degree terminates. [F1, step 4.1, algebra]

6.1 Let $m:H\otimes H\to H$ be multiplication and define $g(a\otimes b)=S(b)S(a)$. In the convolution algebra $\operatorname{Hom}(H\otimes H,H)$, both $S\circ m$ and $g$ are two-sided inverses of $m$: for example, $(g*m)(a\otimes b)=\sum S(b_{(1)})(S(a_{(1)})a_{(2)})b_{(2)}=\varepsilon(a)\varepsilon(b)1$, and $(m*g)(a\otimes b)=\sum a_{(1)}(b_{(1)}S(b_{(2)}))S(a_{(2)})=\varepsilon(a)\varepsilon(b)1$; the analogous two products for $S\circ m$ are $(S*\mathrm{id})(ab)$ and $(\mathrm{id}*S)(ab)$. Uniqueness of a two-sided inverse gives $S(ab)=S(b)S(a)$. Since $H$ is commutative, $S(b)S(a)=S(a)S(b)$, so the antipode is multiplicative. [F1, step 4.1, algebra] ∎
