---
id: def-unoriented-and-oriented-bordism-groups
kind: definition
title: Unoriented and oriented bordism groups
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-unoriented-smooth-cobordism-of-closed-manifolds
  - def-oriented-smooth-cobordism
  - def-null-cobordant-closed-manifold
  - thm-smooth-cobordism-is-an-equivalence-relation
  - prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds
  - def-compact-space
  - lem-cylinders-give-reflexivity-of-cobordism
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-13.md"
      - "research/frontier-38-owner-30-alpha-batch-13-5a.md"
      - "research/frontier-38-owner-30-step5-hash-13-post-5a.json"
    content_sha256: "ebbb8ac0adad69cce4d793d9d72d530e94efd70ec035804f2e2e83197587b402"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Page 10, $\\Omega_n$ and its pointed set structure; (1.35), printed pp.10-14"
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Section 17, $U_n$ as an abelian group, printed p.201"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
      locator: "Definitions 6.22 and 6.24, electronic pp.117-118"
---

## Definition

Fix $n\ge0$. By the cobordism equivalence relation
([[thm-smooth-cobordism-is-an-equivalence-relation]]) the closed smooth
$n$-manifolds are partitioned into cobordism classes
([[def-unoriented-smooth-cobordism-of-closed-manifolds]]). Let
$$\Omega_n^{O}:=\{\,[M]\;:\;M\ \text{a closed smooth }n\text{-manifold}\,\}$$
be the set of these classes in the bounded model convention below, and let
$$\Omega_n^{SO}:=\{\,[Q,o]\;:\;(Q,o)\ \text{a closed oriented smooth }n\text{-manifold}\,\}$$
be the set of oriented cobordism classes
([[def-oriented-smooth-cobordism]]).

**Set-size convention.** For each $n$ use the set of all closed smooth
$n$-manifold structures on subsets of $U_n=\mathbb R^n\times\mathbb N$,
and in the oriented theory include the orientation datum, before taking the
quotient by cobordism. Every closed smooth $n$-manifold has such a model:
compactness gives a finite chart cover $(V_j,\varphi_j)_{j<k}$, and the map
$x\mapsto(\varphi_j(x),j)$, with $j$ the least index for which $x\in V_j$,
is injective into $U_n$. Transport the topology, maximal atlas, and supplied
orientation along this injection; its image is diffeomorphic to the original
manifold. This uses only a finite chart cover, not a choice of a model for every
manifold simultaneously. Two transported models are diffeomorphic, and a
cylinder of [[lem-cylinders-give-reflexivity-of-cobordism]] with outgoing
collar composed with a diffeomorphism's inverse shows they are cobordant (orientation-preservingly in the oriented case). Thus $[M]$
means the unique class of any such model. Products and disjoint unions are
returned to this set of models in the same way; their class is independent of
the transport.

**The operation.** Disjoint union of manifolds defines operations
$$[M]+[N]:=[M\sqcup N]\quad\text{on }\Omega_n^{O},\qquad [Q,o]+[R,p]:=[Q\sqcup R,\,o\sqcup p]\quad\text{on }\Omega_n^{SO},$$
where $o\sqcup p$ is the orientation of the disjoint union whose restriction to
each summand is the given orientation, and finite disjoint unions carry the transported component atlases
([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]);
for summands with boundary the same construction uses half-space charts.
Finite union preserves compactness and combines finitely many countable bases,
so this boundary extension requires no countable choice.
The class of the empty $n$-manifold is the displayed **zero** $0$: it is
null-cobordant and is a two-sided identity for the operation, since
$M\sqcup\varnothing$ is canonically diffeomorphic to $M$
([[def-null-cobordant-closed-manifold]]).

**Well-definedness.** The operations are independent of the chosen
representatives. If $W_i$ is a bordism from $M_i$ to $M_i'$ for $i=0,1$, then
the disjoint union $W_0\sqcup W_1$ carries the canonical smooth structure of a
compact $(n+1)$-manifold with boundary
$\partial(W_0\sqcup W_1)=(\partial W_0)\sqcup(\partial W_1)$, the collars
$\theta_0^0\sqcup\theta_0^1$ and $\theta_1^0\sqcup\theta_1^1$ are smooth
embeddings onto collar neighbourhoods of the boundary parts, and the
decomposition of the boundary into the two parts is again open and closed;
hence $W_0\sqcup W_1$ is a bordism from $M_0\sqcup M_1$ to
$M_0'\sqcup M_1'$. In the oriented case, orienting the disjoint union by the
given orientations makes the disjoint union of the oriented bordisms an
oriented bordism between the disjoint unions, because the induced boundary
orientation is computed componentwise and each summand carries its required
sign. Thus $[M_0\sqcup M_1]=[M_0'\sqcup M_1']$ whenever $[M_i]=[M_i']$, and
similarly in the oriented theory. The class of a finite disjoint union is
computed from the canonical smooth structure on disjoint unions; no further
choice is made.

**Deferred axioms and the forgetful map.** That these operations satisfy the
group axioms (associativity, commutativity, identity and inverses) is not
asserted here: it is proved in the following theorem, together with the
finiteness of the inverse in the unoriented theory. The **forgetful map**
$$\Omega_n^{SO}\longrightarrow\Omega_n^{O},\qquad [Q,o]\longmapsto[Q],$$
sends the oriented class of a closed oriented $n$-manifold to its underlying
unoriented cobordism class; it is well defined because an oriented bordism
between two oriented manifolds is in particular a bordism between their
underlying manifolds, so oriented cobordant manifolds are cobordant.
