---
dependency_level: 3
id: lem-tate-acyclic-module-tensor-preserves-vanishing-under-tor
kind: lemma
title: Tor-independent tensors preserve finite-group Tate acyclicity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-tate-cohomology-for-finite-groups
- thm-long-exact-sequence-in-tate-cohomology
- lem-tate-cohomologically-triviality-sylow-criterion
- def-tor-by-resolving-the-right-module
- def-projective-module
- def-axiom-of-choice
- def-dependent-choice
- prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions
- thm-long-exact-sequence-in-homology
proof_strategy: direct
axiom_use: AC and DC are explicit. AC is used precisely in the actual arbitrary-rank
  projective-dimension supplier; it is not erased from the tensor conclusion. Projective/Tor
  resolution data are supplied as in their definitions.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterII §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem3.10 and Remark3.12, printed83–85; full relevant proof read. The
      tensor assertion is locally derived below from the supplied projective-dimension
      theorem, not imported from the remark.
verification: {}
---


## Statement

Assume AC and DC and the supplied complete/Tor resolution data. Let $G$
be finite and let $E,D$ be left $G$-modules. Suppose $E$ is Tate-acyclic
on every subgroup. If either
$$\operatorname{Tor}^{\mathbb Z}_1(E,D)=0
\quad\text{or}\quad\operatorname{Tor}^{\mathbb Z}_1(D,E)=0,$$
with the displayed first variable resolved as specified, then
$E\otimes_{\mathbb Z}D$ with diagonal action is Tate-acyclic on every
subgroup. This is an AC-conditional theorem; it makes no DC-only claim.

## Statement references

[[lem-tate-cohomologically-triviality-sylow-criterion]]

[[def-tor-by-resolving-the-right-module]]

## Facts & Assumptions

**Given:** AC/DC, the supplied resolutions, finite $G$, Tate-acyclic $E$
on all subgroups, and one of the two stated Tor vanishings.

[F1] Under AC/DC, vanishing of $H^1,H^2$ on all Sylow subgroups gives a
projective $\mathbb Z[G]$-resolution of length at most one.
[[lem-tate-cohomologically-triviality-sylow-criterion]]

[F2] Tate groups have coefficient long exact sequences in every degree.
[[thm-long-exact-sequence-in-tate-cohomology]]

[F3] The first-variable Tor construction is homology of its specified
projective resolution tensored with the second module. DC and supplied
comparison data give coherent change-of-resolution identifications; the
ordinary homology long exact sequence applies to short exact complexes.
[[def-tor-by-resolving-the-right-module]]
[[prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]]
[[thm-long-exact-sequence-in-homology]]

[F4] A projective module lifts maps through epimorphisms; in particular its
canonical free-module epimorphism has a section, so it is a direct summand
of that free module. [[def-projective-module]]

[A1] AC and DC are explicit hypotheses of [F1]; AC permits arbitrary-rank
bases and lifts. They are retained here, not inferred from DC.
[[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** tensor a length-one projective resolution and identify
its only possible left defect with the given Tor group.

**Given:** The data above.

1.1 The low cohomology of $E$ on every Sylow subgroup is zero, so [F1]
gives an exact sequence
$$0\longrightarrow P_1\longrightarrow P_0\longrightarrow E
\longrightarrow0$$
with $P_i$ projective over $\mathbb Z[G]$. Its restriction to abelian
groups has projective terms: a direct summand of a free $\mathbb Z[G]$
module is a direct summand of a free abelian group. We use this exact
sequence as the supplied right-resolution model when computing
$\operatorname{Tor}_1^{\mathbb Z}(E,D)$, with the canonical comparison
permitted by the declared resolution convention. [A1, F1, F3, F4, given, construct]

1.2 We record the actual infinite-rank scope of [F1]. Its $\mathbb F_p[P]$
free-module argument uses that a free module of arbitrary rank is also
coinduced from its underlying coefficient vector space: the finite
coefficient-of-identity pairing identifies
$\mathbb F_p[P]\otimes V$ with
$\operatorname{Hom}_{\mathbb F_p}(\mathbb F_p[P],V)$.
Under AC every vector space is injective as an $\mathbb F_p$-module, so
restriction–coinduction adjunction gives injectivity, including infinite
rank. Likewise, if $B/pB$ is a direct sum of regular modules, then
$\operatorname{Hom}_{\mathbb F_p}(B/pB,N/pN)$ is a product of
coinduced modules; finiteness of $P$ identifies that product again with a
single coinduced module. The Hom lifting in the supplier uses a basis of
$B$ over $\mathbb Z$ and AC to lift its values. These are precisely the
arbitrary-rank uses of AC in that proof, and none is claimed to follow
from DC. [A1, F1, F4, step 1.1, algebra]

2.1 Tensor the sequence of step 1.1 with $D$. If the first displayed Tor
group in the Statement vanishes, [F3] identifies the kernel of
$P_1\otimes D\to P_0\otimes D$ with that zero group, so
$$0\to P_1\otimes D\to P_0\otimes D\to E\otimes D\to0$$
is exact. If instead $\operatorname{Tor}_1^{\mathbb Z}(D,E)=0$, take
the supplied projective abelian resolution $Q_\bullet\to D$ and tensor
each term with $0\to P_1\to P_0\to E\to0$. Every $Q_i$ is a direct
summand of an abelian free module, hence tensoring with it is exact.
The resulting short exact sequence of chain complexes gives its homology
long exact sequence by the usual cocycle lift calculation. Since $P_i$
are abelian projective, $Q_\bullet\otimes P_i$ has zero positive
homology: tensoring with a free module is a direct sum of the exact
resolution, and direct summands preserve exactness. Its relevant segment
is therefore
$$0\to\operatorname{Tor}^{\mathbb Z}_1(D,E)
\to D\otimes P_1\to D\otimes P_0\to D\otimes E\to0.$$
The zero hypothesis, followed by the natural tensor flips, gives the same
short exact sequence with the same diagonal actions. Thus no unsupported
swap of the two Tor orders is required. [F3, F4, step 1.1, construct, algebra]

2.2 For a free $\mathbb Z[G]$-module $\mathbb Z[G]^{(S)}$, its tensor
with $D$ and diagonal action is an induced module, via
$g\otimes d\mapsto g\otimes g^{-1}d$, componentwise. A projective
summand $P_i$ gives a summand after tensoring its splitting maps, so
$P_i\otimes D$ is a summand of an induced module. The induced module is
Tate-acyclic: in positive degrees the Hom/coinduced homogeneous bar
complex has the contraction obtained by inserting $1$; in negative
homology the same underlying integral bar contraction survives tensoring;
in degrees $0,-1$ the invariant-sum and coefficient-sum formulas give the
norm and augmentation assertions. The construction applies on every
subgroup after decomposing the finitely many cosets. Hence
$P_i\otimes D$ is Tate-acyclic on every subgroup. [F2, F4, step 1.1, algebra]

3.1 Apply [F2] to the short exact sequence of step 2.1. Its two projective
terms tensored with $D$ have zero Tate groups by step 2.2. Exactness makes
every Tate group of $E\otimes D$ zero, on every subgroup. This proves
the conditional theorem and both specified Tor branches. [F2, step 2.1, step 2.2, algebra] ∎
