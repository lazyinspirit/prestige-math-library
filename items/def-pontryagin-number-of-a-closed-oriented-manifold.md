---
id: def-pontryagin-number-of-a-closed-oriented-manifold
kind: definition
title: Pontryagin numbers of a closed oriented manifold
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-pontryagin-classes-by-complexification
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-axiom-of-choice
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-orientation-preserving-parametrization
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
  - prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - thm-connected-and-locally-path-connected-implies-path-connected
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - thm-homotopy-invariance-of-vector-bundle-pullback
  - def-chern-classes-from-the-projective-bundle-relation
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
      locator: "Section 16, Pontryagin numbers, printed pp.185-187"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Section 6.3, Pontryagin numbers $p_J(M)\\in\\mathbb Z$, electronic p.117"
---

## Definition

Assume AC ([[def-axiom-of-choice]]). The assumption is inherited from the
Pontryagin class construction and is used only there, through
[[def-pontryagin-classes-by-complexification]] its CW-type transport below, and the admissibility supplied by
[[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]].

Let $M$ be a closed oriented smooth manifold of dimension $4k$ for an integer
$k\ge0$, with orientation $o$. Its **fundamental class**
$[M]\in H_{4k}(M;\mathbb Z)$ is the class determined by $o$
([[def-fundamental-class-of-a-compact-oriented-manifold]]). Its **tangent
Pontryagin classes**, taken componentwise when $M$ is disconnected, are
$$p_i \;:=\; p_i(TM)\in H^{4i}(M;\mathbb Z)\qquad(i\ge0),$$
with the conventions $p_0=1$ and $p_i=0$ whenever $2i>4k$.

**Connected case.** If $M$ is connected, then $M$ is path-connected: a manifold
is locally path-connected
([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]])
and a connected locally path-connected space is path-connected
([[thm-connected-and-locally-path-connected-implies-path-connected]]). Hence
$M$ is an admissible base for the characteristic-class construction: it is
paracompact Hausdorff of CW homotopy type and its tangent bundle is a numerable
smooth finite-rank real bundle
([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). For a
partition $I=(i_1,\dots,i_r)$ of $k$ with $i_j\ge1$ (for $k=0$ the empty
partition, with empty product $1$), the **$I$-th Pontryagin number** of $M$ is
$$p_I[M] \;:=\; \bigl\langle\, p_{i_1}\cdots p_{i_r},\,[M]\,\bigr\rangle \;\in\;\mathbb Z,$$
the Kronecker evaluation of the cup product of the tangent Pontryagin classes
on the fundamental class ([[def-kronecker-evaluation-pairing]]); the value is
well defined on cohomology and homology classes by
[[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]].

**General closed oriented manifolds.** Let $M$ be an arbitrary closed oriented
manifold of dimension $4k$. By the componentwise statement for compact
manifolds, $M$ has finitely many connected components
$M_1,\dots,M_s$; each component is open
([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]])
and closed in the compact $M$, hence compact, carries the restricted smooth
structure as an open submanifold
([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]),
and carries the orientation restricted to it; the family of these restricted
orientations is the componentwise orientation of $o$
([[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]).
Each $M_j$ is a closed oriented smooth $4k$-manifold and the connected case
above applies. We set
$$p_I[M] \;:=\; \sum_{j=1}^{s} p_I[M_j],$$
the sum of the componentwise Pontryagin numbers; for connected $M$ this is
exactly the single evaluation displayed above. A manifold whose dimension is
not $4|I|$ is assigned the value $0$ by convention, and $p_I[M]$ for a
partition $I$ with $i_j\ge1$ never sees a class $p_i$ of index beyond the
dimension.

The definition is independent of all choices: the complexification of $TM$ is
determined up to canonical isomorphism, so the even Chern classes, hence the
classes $p_i$, are determined; the fundamental class is determined by the
orientation; and the Kronecker pairing descends through both quotients. The
classes $p_i(TM)$ do not depend on the orientation. Replacing $o$ by $-o$
negates the fundamental class on every component
([[def-fundamental-class-of-a-compact-oriented-manifold]]) and therefore
negates every Pontryagin number, by linearity of the pairing in its second
variable ([[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

**Naturality and stability on CW-type bases.** The cited Pontryagin theorem
is stated for path-connected CW complexes, whereas smooth manifolds here are
only known to have CW homotopy type. The needed extension is as follows.
For a numerable complex bundle $V$ over a path-connected paracompact Hausdorff
CGWH base $B$ of CW type, choose homotopy inverse maps $h:K\to B$ and
$g:B\to K$ with $K$ a path-connected CW complex. Homotopy invariance of
bundle pullback gives $V\cong g^*h^*V$
([[thm-homotopy-invariance-of-vector-bundle-pullback]]).
The Chern naturality theorem permits a CW-type source and a CW target, so
$c_j(V)=g^*c_j(h^*V)$
([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]],
[[def-chern-classes-from-the-projective-bundle-relation]]).
For $f:B'\to B$ between such bases,
$f^*V\cong(g\circ f)^*h^*V$, so the same theorem with target $K$ gives
$c_j(f^*V)=f^*c_j(V)$. Also
$V\oplus\varepsilon^r\cong g^*(h^*V\oplus\varepsilon^r)$;
Chern stability on $K$ and naturality along $g$ give
$c_j(V\oplus\varepsilon^r)=c_j(V)$.
Complexification commutes with pullback and adjoining trivial summands,
as seen from their transition matrices. The formula
$p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ therefore proves naturality and
stability of Pontryagin classes on these CW-type bases too. For a finite
disjoint union define the classes componentwise: every singular simplex lies
in one component, so cohomology is the finite product of the component rings,
with pullbacks and cup products computed componentwise. This also handles
maps whose different source components land in the same target component.
For the empty base all classes and evaluations have their unique zero values.
AC is inherited by this transport from the stated bundle-homotopy and
characteristic-class suppliers.

**Behaviour under diffeomorphisms.** Let $F:M'\to M$ be a diffeomorphism of
closed oriented $4k$-manifolds ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).
Assume first that $M'$ and $M$ are connected and that $F$ is
orientation-preserving ([[def-orientation-preserving-parametrization]]). The
differential of $F$ identifies $TM'$ with the pullback $F^*TM$, so naturality
of Pontryagin classes gives $p_i(TM')=F^*p_i(TM)$
(by the CW-type derivation above).
The pushforward $F_*[M']$ restricts at every $y\in M$ to the image under $dF$
of the local generator of $o'$ at $F^{-1}(y)$, which is the local generator of
$o$ at $y$ because $F$ is orientation-preserving; by the characterisation of
the fundamental class through its pointwise restrictions
([[def-fundamental-class-of-a-compact-oriented-manifold]]) this means
$F_*[M']=[M]$. Naturality of the Kronecker pairing
([[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]])
therefore gives
$$p_I[M']=\langle p_I(TM'),[M']\rangle=\langle F^*p_I(TM),[M']\rangle=\langle p_I(TM),F_*[M']\rangle=\langle p_I(TM),[M]\rangle=p_I[M].$$
If $F$ is orientation-reversing, the same computation gives local generators
that are negatives of those of $o$, so $F_*[M']=-[M]$ and $p_I[M']=-p_I[M]$.
For disconnected $M'$ and $M$ the argument applies to each component, and the
sum of the componentwise numbers transforms accordingly. In particular a
nonzero Pontryagin number obstructs the existence of an orientation-reversing
self-diffeomorphism. No choice beyond the AC stated above is used.
