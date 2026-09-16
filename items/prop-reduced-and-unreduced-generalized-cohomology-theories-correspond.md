---
id: prop-reduced-and-unreduced-generalized-cohomology-theories-correspond
kind: proposition
title: Reduced and unreduced generalized cohomology theories correspond
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-cohomology-theory, prop-relative-cw-inclusions-are-cofibrations, def-reduced-cone-suspension-and-cofiber-sequence, lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, def-wedge-of-pointed-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "James Davis and Paul Kirk, Lecture Notes in Algebraic Topology, §8.8, printed pp. 227–233"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§8.8, printed pp. 227–233"
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §2, printed pp. 3–4"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§2, reduction of an unreduced theory and the pair sequence, printed pp. 3–4"
---

## Statement

Call a **CW-pair cohomology theory** a contravariant functor $h$ on CW pairs
$(X,A)$ with a CW subcomplex $A\subseteq X$ and maps of pairs, taking values in
abelian groups $h^n(X,A)$ for $n\in\mathbb Z$, together with natural connecting
homomorphisms $\partial:h^n(A)\to h^{n+1}(X,A)$ such that:

- **(H)** homotopic maps of pairs induce equal maps;
- **(LES)** for every CW pair the sequence
  $\cdots\to h^n(X,A)\to h^n(X)\to h^n(A)\xrightarrow{\partial}h^{n+1}(X,A)\to\cdots$
  is exact, where $h^n(X):=h^n(X,\varnothing)$;
- **(Ex)** if $U,V\subseteq X$ are subcomplexes with $X=U\cup V$, the inclusion
  induces $h^n(U,U\cap V)\cong h^n(X,V)$;
- **(Add)** for every set-indexed family of CW pairs the inclusions induce
  $\prod_\alpha h^n(X_\alpha,A_\alpha)\cong h^n\bigl(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha\bigr)$,
  the empty family giving the zero group.

No dimension axiom is imposed. Then reduced generalized cohomology theories on
based CW complexes in the sense of [[def-reduced-generalized-cohomology-theory]]
and CW-pair cohomology theories determine one another, naturally and compatibly
with morphisms, through the following two constructions.

**(A)** Given a reduced theory $\widetilde h$, put, for a CW pair $(X,A)$,
$$h^n(X,A):=\widetilde h^n(C_i),$$
where $i:A_+\to X_+$ is the based inclusion and $C_i$ is its reduced cofiber.
Equivalently $h^n(X,\varnothing)=\widetilde h^n(X_+)$ and, for $A\ne\varnothing$,
$$h^n(X,A)\cong\widetilde h^n(X/A),$$
the quotient based at the collapsed subcomplex. In particular
$$h^n(X)=\widetilde h^n(X_+).$$
The connecting homomorphism $\partial$ of the pair $(X,A)$ is the connecting
map of the cofiber sequence of $i$.

**(B)** Given a CW-pair theory $h$, put, for a based CW complex $Y$ whose
basepoint is a vertex,
$$\widetilde h^n(Y):=h^n(Y,*).$$
The suspension isomorphism is the composite of the connecting map of the triple
$(CY,Y,*)$ with the quotient identification
$$h^{n+1}(CY,Y)\cong h^{n+1}(\Sigma Y,*).$$

The two constructions are canonically inverse: for a reduced theory
$\widetilde h$ the theory obtained by (B) from the theory built in (A) satisfies
$\widetilde h^n(Y)\cong h^n(Y,*)\cong\widetilde h^n(Y)$, and for a CW-pair theory
$h$ the theory built in (A) from that obtained by (B) satisfies
$h^n(X,A)\cong\widetilde h^n(X/A)\cong h^n(X,A)$. Under these identifications the
connecting maps agree. In particular the three displayed formulas
$h^n(X,A)=\widetilde h^n(X/A)$, $\widetilde h^n(Y)=h^n(Y,*)$ and
$h^n(X)=\widetilde h^n(X_+)$ hold with all structure maps transported.

## Facts & Assumptions

[F1] A reduced generalized cohomology theory consists of contravariant functors on based CW complexes, natural suspension isomorphisms $\sigma:\widetilde h^n(X)\to\widetilde h^{n+1}(\Sigma X)$, natural connecting maps $\delta_f:\widetilde h^n(X)\to\widetilde h^{n+1}(C_f)$ for a based map $f:X\to Y$ with reduced cofiber $C_f$, and the axioms (H), (E) and (W) ([[def-reduced-generalized-cohomology-theory]]).

[F2] A CW subcomplex inclusion is a cofibration, and the reduced cofiber of the based inclusion $A_+\to X_+$ is the space $X\cup_A CA$ ([[prop-relative-cw-inclusions-are-cofibrations]], [[def-reduced-cone-suspension-and-cofiber-sequence]]).

[F3] For a based cofibration $i:A\hookrightarrow X$ the collapse $C_i\to X/A$ is a based homotopy equivalence ([[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]).

[F4] For a CW pair $(X,A)$ with $A\ne\varnothing$, the quotient $X/A$ is a CW complex with one vertex replacing $A$ and one cell per cell of $X\setminus A$ ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).

[F5] The wedge of based spaces is the quotient of their disjoint union identifying all basepoints; a disjoint union of based spaces whose basepoints are identified with one new point is the wedge of the based spaces ([[def-wedge-of-pointed-spaces]]).

[F6] The long exact sequence of a triple $B\subseteq A\subseteq X$ is natural in maps of triples, and successive connecting maps in such a sequence compose to zero. This is the standard exactness clause of a CW-pair theory applied twice, as in (LES) above.

## Proof

**Proof technique:** direct.

**Given:** A reduced theory $\widetilde h$ and a CW-pair theory $h$ as in the statement; all CW pairs have supplied characteristic maps and all based spaces are based at vertices.

1.1 Suppose $\widetilde h$ is given and define $h^n(X,A):=\widetilde h^n(C_i)$ for the based inclusion $i:A_+\to X_+$. A map of CW pairs restricts to a based map of the respective inclusions and hence induces a based map of reduced cofibers, so the induced map $h^n(Y,B)\to h^n(X,A)$ is contravariant and functorial, and a homotopy of maps of pairs induces a based homotopy of cofibers, so (H) holds. [F1, F2, given]

1.2 For $A\ne\varnothing$ the cofiber $C_i$ is $X\cup_A CA$ and the collapse $C_i\to X/A$ is a based homotopy equivalence, since a CW subcomplex inclusion is a cofibration; hence $h^n(X,A)\cong\widetilde h^n(X/A)$ naturally, while for $A=\varnothing$ the cofiber of the based inclusion $\mathrm{pt}=S^0\to X_+$ is $X_+$ up to canonical homotopy equivalence, so $h^n(X,\varnothing)=\widetilde h^n(X_+)$. [F1, F2, F3, given]

1.3 Axiom (E) of [F1] applied to the based inclusion $i:A_+\to X_+$ gives exactness of $\widetilde h^n(C_i)\to\widetilde h^n(X_+)\to\widetilde h^n(A_+)$, and adjoining the natural connecting maps gives the long exact sequence $\cdots\to h^n(X,A)\to h^n(X)\to h^n(A)\xrightarrow{\partial}h^{n+1}(X,A)\to\cdots$, which is (LES); the boundary is the connecting map $\delta_i$ and is natural by [F1], while for $A=\varnothing$ one has $h^n(\varnothing)=\widetilde h^n(\mathrm{pt})=0$ and the sequence reduces to the identity of $h^n(X)$. [F1, given]

1.4 If $U,V\subseteq X$ are subcomplexes with $X=U\cup V$, then the quotients $U/(U\cap V)$ and $X/V$ have the same cells and the canonical comparison is a homeomorphism, so $h^n(U,U\cap V)\cong\widetilde h^n(U/(U\cap V))\cong\widetilde h^n(X/V)\cong h^n(X,V)$, which is (Ex). [F1, F4, given]

1.5 The quotient of a disjoint union of pairs by the disjoint union of its subcomplexes is the disjoint union of the quotients, whose one-point compactification basepoint is the single new point of [F5]; the wedge axiom of [F1] therefore gives $\widetilde h^n\bigl(\bigvee_\alpha(X_\alpha/A_\alpha)_+\bigr)\cong\prod_\alpha\widetilde h^n((X_\alpha/A_\alpha)_+)\cong\prod_\alpha h^n(X_\alpha,A_\alpha)$, and both sides are zero for the empty family, which is (Add). [F1, F5, given]

1.6 Conversely let the CW-pair theory $h$ be given and put $\widetilde h^n(Y):=h^n(Y,*)$ for a nonempty based CW complex $Y$; for the one-point space this is $h^n(*,*)=0$, and functoriality and homotopy invariance are inherited from $h$, so the homotopy axiom of [F1] holds. [F1, given]

1.7 Let $CY$ be the reduced cone and $j:Y\to CY$ its base inclusion. The pair $(CY,*)$ is homotopy equivalent to $(*,*)$, so $h^i(CY,*)=0$ for all $i$ by homotopy invariance; the long exact sequence of the triple $(*,Y,CY)$ therefore collapses to an isomorphism $\partial:h^n(Y,*)\xrightarrow{\cong}h^{n+1}(CY,Y)$, and under the quotient identification $CY/Y=\Sigma Y$ and excision the target is $h^{n+1}(\Sigma Y,*)$, which is the suspension isomorphism of [F1]. [F1, F4, F6, given]

1.8 Let $f:X\to Y$ be a based map with reduced cofiber $C_f$ and structural inclusion. Since $X\hookrightarrow C_f$ is a cofibration with quotient $\Sigma X$, excision identifies $h^{n+1}(C_f,Y)\cong h^{n+1}(\Sigma X,*)$, and the connecting map $h^n(Y,*)\to h^{n+1}(\Sigma X,*)$ is the suspension isomorphism followed by the map induced by $-\Sigma f$, whose kernel is $\ker(f^*)$; exactness of the triple sequence at $h^n(Y,*)$ therefore gives $\operatorname{im}(h^n(C_f,*)\to h^n(Y,*))=\ker(f^*:h^n(Y,*)\to h^n(X,*))$, which is (E) of [F1]. [F1, F3, F6, given]

1.9 For a family $(Y_\alpha)$ the collapse map of pairs $\bigl(\bigsqcup_\alpha Y_\alpha,\bigsqcup_\alpha\{*_\alpha\}\bigr)\to(\bigvee_\alpha Y_\alpha,*)$ is a quotient by a discrete set of points, so excision makes it an isomorphism on $h^n$, and additivity gives $\widetilde h^n\bigl(\bigvee_\alpha Y_\alpha\bigr)\cong\prod_\alpha h^n(Y_\alpha,*_\alpha)=\prod_\alpha\widetilde h^n(Y_\alpha)$, which is the wedge axiom of [F1]; both sides vanish for the empty family. [F1, F5, given]

2.1 Starting from $\widetilde h$, build $h$ by (A) and then $\widetilde h'$ by (B). Then $\widetilde h'^n(Y)=h^n(Y,*)=\widetilde h^n(C_j)$ for the based inclusion $j:S^0\to Y_+$; the cofiber sequence of $j$, the splitting $Y_+\to S^0$ of the basepoint inclusion and the wedge decomposition $Y_+=Y\vee S^0$ exhibit $C_j$ up to homotopy as the cofiber of the summand inclusion $S^0\to Y_+$, so exactness identifies $\widetilde h^n(C_j)$ with the kernel of the restriction $\widetilde h^n(Y_+)\to\widetilde h^n(S^0)$, which is $\widetilde h^n(Y)$; hence $\widetilde h'^n(Y)\cong\widetilde h^n(Y)$ naturally. [F1, F5, step 1.2]

2.2 Starting from $h$, build $\widetilde h$ by (B) and then $h'$ by (A). For $A\ne\varnothing$ one has $h'^n(X,A)=\widetilde h^n(X/A)=h^n(X/A,*)$, and excision for the subcomplexes $X$ and $CA$ of the cofiber $C_i=X\cup_ACA$, together with the quotient equivalence $X/A\simeq C_i$, gives $h^n(X/A,*)\cong h^n(C_i,CA)\cong h^n(X,A)$; for $A=\varnothing$ both constructions give $h^n(X,\varnothing)$. The identifications are natural and transport the connecting map of (A) to the connecting map of the triple used in (B). [F2, F3, F4, step 1.2, step 1.7]

3.1 Steps 2.1 and 2.2 exhibit the two constructions as mutually inverse up to natural isomorphism, and steps 1.3 and 1.8 show that the long exact sequences and hence the connecting maps correspond, so the three displayed formulas hold with all structure maps transported. [step 1.3, step 1.8, step 2.1, step 2.2] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), §8.8, printed pp. 227–233, for the pair long exact sequence, the reduced homology/cohomology axioms and the quotient presentation $h^n(X,A)\cong \widetilde h^n(X/A)$; and [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §2, printed pp. 3–4, for the reduction $\widetilde h^n(X)=\ker(h^n(X)\to h^n(\mathrm{pt}))$ and the pair long exact sequence obtained from the cone sequence.
