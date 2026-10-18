---
id: lem-finite-dynkin-quiver-reflection-classification
kind: lemma
title: "Reflection classifies finite-Dynkin quiver indecomposables over a finite field"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - thm-cg-finite-coxeter-classification-including-h-and-dihedral
  - thm-cg-finite-type-positive-definite-criterion
  - thm-cg-root-sign-and-simple-reflection-positivity
  - lem-finite-weyl-positive-roots-and-simple-reflections
  - thm-graded-krull-schmidt-for-finite-dimensional-graded-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§§3.2–3.3 and Appendix A.2–A.4; the local proof supplies the finite-field and multiplicity details"
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§2, Dynkin quivers; §§4–7, directed Hall products and simple-word generation"
---

## Statement

Assume the Axiom of Choice inherited from finite-root suppliers. Let $Q$ be a finite acyclic quiver and $k=\mathbb F_q$. At a sink $i$
define the reflection functor on a representation $M$ by replacing $M_i$ with
$\ker(\bigoplus_{j\to i}M_j\to M_i)$ and reversing the incident arrows
using its kernel projections. At a source use the dual cokernel functor.
These are inverse exact equivalences between the full subcategories with no
$S_i$ direct summand. They commute with field extension.

If the underlying graph is a finite ADE forest, the dimension map gives a bijection from the indecomposable $kQ$-modules
to the positive roots of the componentwise finite root system. Every
indecomposable is absolutely indecomposable, has endomorphism ring $k$ and
self-$\operatorname{Ext}^1=0$. There is an ordering $M_1,\ldots,M_m$ of
these indecomposables with
$$\operatorname{Hom}(M_j,M_i)=0,\qquad \operatorname{Ext}^1(M_i,M_j)=0\qquad(i<j).$$
Here representations are finite-dimensional; there are no oriented cycles,
so path nilpotence is automatic.

## Facts & Assumptions

**Given:** A finite acyclic quiver and its finite-dimensional representations over $k$; the classification and ordering assertions additionally assume its graph is a finite ADE forest.

[F1] Give every ADE edge Coxeter label $3$. The proved classification,
clauses (1)–(3), in
[[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] and
[[thm-cg-finite-type-positive-definite-criterion]] give a finite reflection
group and positive definite Coxeter form $B$; its matrix satisfies
$A=2B$, with diagonal $2$ and off-diagonal $-1$ along edges.
The orbit $\Phi=W\{\alpha_i\}$ of the coordinate basis is therefore a
finite reduced crystallographic root system: its reflections preserve the
integer lattice and the form $A$, every orbit vector has squared length
$2$, the basis spans, and conjugating a simple reflection gives the
reflection in its orbit root. Integral coordinates and the integral matrix
$A$ give integral root-coroot pairings; the common length excludes
proportional roots other than opposites. Its sign coherence and
simple-reflection action are proved in
[[thm-cg-root-sign-and-simple-reflection-positivity]], so the coordinate
basis is its simple system. This is the finite-root convention of
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]] and
[[lem-finite-weyl-positive-roots-and-simple-reflections]]. In particular
$A$ is nonsingular and every simple reflection preserves positive roots
other than its own simple root, which it negates.

[F2] The category is hereditary and the vertex simples have the usual
arrow Euler form
([[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]).

[F3] Finite-dimensional modules have unique finite decompositions into
indecomposables: apply
[[thm-graded-krull-schmidt-for-finite-dimensional-graded-modules]] with the
path algebra and module concentrated in degree zero.

## Proof

1.1 At a sink $i$, write $f_M:\bigoplus_{j\to i}M_j\to M_i$ for the incoming map. A complement to its image is an $S_i$ direct summand, because there are no outgoing arrows. Conversely an $S_i$ summand makes $f_M$ nonsurjective. Thus absence of this summand is exactly surjectivity. After reflection the outgoing map from the new $i$-space is the kernel inclusion and is injective, the source analogue of this condition. Taking its cokernel recovers $M_i$ and every incoming arrow. Conversely the kernel of the source cokernel recovers the source module. These constructions on morphisms give mutually inverse full equivalences on the specified subcategories. [F2, given, algebra]

2.1 In a short exact sequence whose terms have surjective incoming maps, apply the snake lemma to their incoming-map diagram. The cokernels vanish, so the kernel sequence is exact. Such representations are extension closed: if the outer incoming maps are onto, the middle one is onto by a lift followed by correction from the subobject. The same statements hold dually for injective outgoing maps. Thus the two equivalences are exact for these inherited exact structures and identify the entire $\operatorname{Ext}^1$ groups between their objects, since all extension middle terms stay in the subcategory. Tensoring kernels or cokernels with a field extension is exact, proving field-extension compatibility. At a reflected vertex their dimension vector changes by $s_i d$, since the new coordinate is $\sum_{j\sim i}d_j-d_i$. [F2, step 1.1, algebra]

3.1 For the classification assertions now assume finite ADE type. Choose a sink ordering $1,\ldots,r$ of a connected component, so arrows initially go from higher to lower labels. Reflect each vertex once in this order and repeat; the orientation returns after every full pass, since each edge has been reversed at both endpoints. Let $C=s_r\cdots s_1$ be its action on dimension columns. If $y=Cx$, the successive coordinate updates give $y_i=-x_i+\sum_{j<i,j\sim i}y_j+\sum_{j>i,j\sim i}x_j$. Put $L=I-B_-$ with $B_-$ the strict lower adjacency matrix. These equations say $Ly=-L^t x$, so $C=-L^{-1}L^t$ and $1-C=L^{-1}(L+L^t)=L^{-1}A$. The Cartan matrix $A$ is nonsingular by [F1]. Since $C$ lies in the finite Weyl group, some $h>0$ has $C^h=1$; then $(1-C)\sum_{j=0}^{h-1}C^j=0$ and consequently $\sum_{j=0}^{h-1}C^j=0$. [F1, step 2.1, algebra]

4.1 Apply this repeated sink process to an indecomposable. Unless it is the simple at the currently reflected sink, step 1.1 preserves it as a nonzero indecomposable and step 2.1 reflects its dimension. If it never became that simple, every $C^j d$ would be a nonnegative nonzero dimension vector. Their sum over one order of $C$ cannot be zero, contradicting step 3.1. Thus it reaches a sink simple at a finite step. Reflecting the dimension backwards proves $d$ is a positive root. The exact equivalences preserve endomorphism rings and self-$\operatorname{Ext}^1$; for a sink simple these are $k$ and $0$. Repeating over an algebraic closure and using field-extension compatibility shows absolute indecomposability. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 Conversely begin with any positive root $d$ and the same repeated sink order. A positive root remains positive under a step unless it is the simple root being reflected, by [F1]. If it never reached that simple root, all its full-pass transforms would stay positive, again contradicting the zero Coxeter sum in step 3.1. Stop just before its first negative transform and put the corresponding sink simple there. Reverse the preceding reflection functors. At every reverse step its root is not the simple at that source, so step 1.1 applies and constructs a nonzero indecomposable of the required dimension. If two indecomposables had this dimension, their deterministic dimension path reaches the same terminal simple at the same first negative step. The inverse equivalences then make them isomorphic. This proves existence and uniqueness for every positive root, including arbitrary finite base fields. [F1, step 1.1, step 3.1, step 4.1, algebra]

6.1 Order indecomposables by their first stopping time in the repeated sink process. Distinct ones cannot stop at the same time, since the terminal simple and inverse functors would then coincide. If $M_i$ stops before $M_j$, transport both to just before the earlier stopping time. The former is a sink simple $S_s$, the latter has onto incoming map and is not $S_s$. Any map from that latter module to $S_s$ is a functional vanishing on the image of its incoming map, so is zero; and $\operatorname{Ext}^1(S_s,-)=0$ because $S_s$ is projective at a sink. The Hom and Ext identifications in steps 1.1 and 2.1 transport these two vanishings back. Distinct connected components have both Hom and Ext zero, so concatenate their orders. The finite enumeration and root constructions use only the inherited Choice; [F3] supplies the direct-sum interpretation. [F2, F3, step 1.1, step 2.1, step 5.1, algebra] ∎
