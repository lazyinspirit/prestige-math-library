---
id: def-stiefel-whitney-number-of-a-closed-manifold
kind: definition
title: Stiefel-Whitney numbers of a closed manifold
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - thm-naturality-of-stiefel-whitney-classes
  - def-fundamental-class-of-a-compact-oriented-manifold
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-axiom-of-choice
  - def-smooth-manifold
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
  - prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - thm-connected-and-locally-path-connected-implies-path-connected
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Section 4, Stiefel-Whitney numbers, printed pp.50-51"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Section 6.3, Stiefel-Whitney numbers $w_I(M)\\in\\mathbb Z_2$, electronic p.117"
---

## Definition

Assume AC ([[def-axiom-of-choice]]). The assumption is inherited from the
Stiefel-Whitney class construction and is used only there, through
[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] and the
admissibility supplied by
[[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]].

Let $M$ be a closed smooth $n$-manifold ([[def-smooth-manifold]]), with tangent
Stiefel-Whitney classes
$$w_i \;:=\; w_i(TM)\in H^i(M;\mathbb F_2)\qquad(i\ge0),$$
so that $w_0=1$ and $w_i=0$ for $i>n$. Its **canonical mod-two fundamental
class** is the fundamental class $[M]\in H_n(M;\mathbb F_2)$ of the canonical
$\mathbb F_2$-orientation
([[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]),
in the sense of [[def-fundamental-class-of-a-compact-oriented-manifold]].

Consider a monomial $w^I=w_1^{r_1}\cdots w_n^{r_n}$ in the tangent classes,
with non-negative exponents $r_1,\dots,r_n$ and total degree
$r_1+2r_2+\cdots+nr_n$. If the total degree equals $n$, the associated
**Stiefel-Whitney number** of $M$ is the Kronecker evaluation
$$w^I[M] \;:=\; \langle w^I,[M]\rangle \;\in\; \mathbb F_2$$
([[def-kronecker-evaluation-pairing]]). A monomial of formal total degree
$d=r_1+2r_2+\cdots+nr_n$ defines a class in $H^d(M;\mathbb F_2)$ by the
graded cup product. Its formal degree is determined by the exponents, even
when that class vanishes; membership of the zero class in a homogeneous
summand does not determine the formal degree. Monomials of formal total
degree different from $n$ are assigned the value $0$ by convention. The
Stiefel-Whitney numbers of $M$ are the values attached to all monomials of
total degree $n$. The evaluation is well defined on cohomology and homology
classes by
[[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]].

**Connected case.** If $M$ is connected, then $M$ is path-connected: a manifold
is locally path-connected
([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]])
and a connected locally path-connected space is path-connected
([[thm-connected-and-locally-path-connected-implies-path-connected]]). Hence
$M$ is an admissible base and $TM$ is a numerable smooth finite-rank real
bundle ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]), so
the classes $w_i$ are those of the Stiefel-Whitney class construction; for
$n=0$ the rank-zero conventions $w_0=1$, $w_i=0$ ($i>0$) are used. In
particular the monomial of degree $0$ on a $0$-manifold is the empty product
$1$, and $w^{\varnothing}[M]=\langle 1,[M]\rangle$ is the parity of the
cardinality of $M$ in $\mathbb F_2$.

**General closed manifolds.** Let $M$ be an arbitrary closed smooth
$n$-manifold. By the componentwise statement for compact manifolds, $M$ has
finitely many connected components $M_1,\dots,M_s$
([[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]);
each component is open
([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]])
and closed in the compact $M$, hence compact, and open components carry the
restricted smooth structure
([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).
Each $M_j$ is a closed smooth $n$-manifold, and its canonical mod-two
orientation is the restriction of the canonical orientation of $M$. The
definition of the number is extended to $M$ by the componentwise sum
$$w^I[M] \;:=\; \sum_{j=1}^{s} w^I[M_j],$$
the sum of the componentwise Stiefel-Whitney numbers; for connected $M$ this is
exactly the single evaluation displayed above.

The definitions are independent of all choices: the tangent bundle is
determined by the smooth structure, its Stiefel-Whitney classes are determined
by the bundle up to isomorphism
([[thm-naturality-of-stiefel-whitney-classes]]), the canonical mod-two
fundamental class is determined by the canonical mod-two orientation, and the
pairing descends through both quotients. No orientation of $M$ is needed or
used, and the numbers do not change when an orientation is supplied or
reversed.

**Behaviour under diffeomorphisms.** Let $F:M'\to M$ be a diffeomorphism of
closed smooth $n$-manifolds
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). Assume first
that $M'$ and $M$ are connected. The differential of $F$ identifies $TM'$ with
the pullback $F^*TM$, so naturality of Stiefel-Whitney classes gives
$w(TM')=F^*w(TM)$, hence $w^I(TM')=F^*w^I(TM)$
([[thm-naturality-of-stiefel-whitney-classes]]). The pushforward $F_*[M']$
restricts at every $y\in M$ to the image under $dF$ of the canonical local
generator at $F^{-1}(y)$; that local module is $\mathbb F_2$, so its unique
nonzero element is carried to the unique nonzero element at $y$, which is the
canonical local generator there. By the characterisation of the fundamental
class through its pointwise restrictions
([[def-fundamental-class-of-a-compact-oriented-manifold]]) this gives
$F_*[M']=[M]$. Naturality of the Kronecker pairing
([[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]])
therefore yields $w^I[M']=\langle F^*w^I(TM),[M']\rangle=\langle w^I(TM),F_*[M']\rangle=w^I[M]$. For disconnected $M'$ and $M$ the argument
applies to each component and the componentwise sums agree; thus the
Stiefel-Whitney numbers are invariants of diffeomorphism. No choice beyond the
AC stated above is used.
