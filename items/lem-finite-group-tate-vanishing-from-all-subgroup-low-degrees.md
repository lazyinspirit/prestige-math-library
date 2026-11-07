---
dependency_level: 2
id: lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees
kind: lemma
title: Subgroup low-degree vanishing forces all Tate groups to vanish
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-tate-cohomology-for-finite-groups
- thm-long-exact-sequence-in-tate-cohomology
- thm-lyndon-hochschild-serre-spectral-sequence
- lem-cyclic-group-cohomology-norm-and-inflation
- thm-the-bar-cochain-complex-computes-derived-group-cohomology
- thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module
- thm-restriction-corestriction-composite-is-multiplication-by-the-index
- thm-sylow-first-theorem
- thm-nontrivial-center-of-a-finite-p-group
- def-dependent-choice
proof_strategy: direct
axiom_use: DC and supplied ordinary/complete resolution data as in the cohomology
  definitions. Finite choices, finite Sylow and central-subgroup induction, and canonical
  augmentation kernels introduce no AC assumption.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterII §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem3.10, printed83; full source proof read. Direct bar contractions,
      norm/Bezout and negative augmentation shifts are reconstructed below, without
      importing the theorem.
verification: {}
---

## Statement

Assume DC and the supplied ordinary and complete-resolution conventions.
Let $G$ be a finite group and $E$ a left $G$-module. If
$$H^1(H,E)=H^2(H,E)=0\qquad\text{for every subgroup }H\le G,$$
then $\widehat H^r(H,E)=0$ for every subgroup $H\le G$ and every
integer $r$. No assertion of projectivity or a choice of an arbitrary-rank
abelian basis is required.
Moreover, for any abelian group $X$, the induced module
$\mathbb Z[G]\otimes_{\mathbb Z}X$ (action on the first factor) is
Tate-acyclic on every subgroup; this holds by the explicit bar/norm
calculation in the proof.

## Statement references

[[def-tate-cohomology-for-finite-groups]]

[[thm-lyndon-hochschild-serre-spectral-sequence]]

## Facts & Assumptions

**Given:** DC, the supplied cohomology data, $G,E$ and all subgroup
low-degree vanishings in the Statement.

[F1] Supplied Tate groups are ordinary cohomology in positive degrees,
ordinary homology in degrees at most $-2$, and the norm/augmentation
quotients in degrees $0,-1$. They have the coefficient long exact sequence.
[[def-tate-cohomology-for-finite-groups]]
[[thm-long-exact-sequence-in-tate-cohomology]]

[F2] Under DC and supplied resolutions, the ordinary LHS sequence of a
finite group extension has terms $H^i(Q,H^j(N,E))$ and converges with the
stated finite filtration. [[thm-lyndon-hochschild-serre-spectral-sequence]]

[F3] The direct periodic cyclic resolution gives $H^1=\ker N/(\sigma-1)E$
and $H^2=E^{C_n}/NE$, with repetition in every positive odd/even degree.
[[lem-cyclic-group-cohomology-norm-and-inflation]]

[F4] The homogeneous bar complex is a free resolution and its Hom complex
computes ordinary group cohomology. [[thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module]]
[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]

[F5] In positive ordinary cohomology, corestriction after restriction is
multiplication by the subgroup index.
[[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[F6] Finite groups have Sylow subgroups, and a nontrivial finite $p$-group
has nontrivial center. [[thm-sylow-first-theorem]]
[[thm-nontrivial-center-of-a-finite-p-group]]

[A1] DC is used only in the supplied derived/complete-resolution
conventions and their ordinary LHS comparisons. [[def-dependent-choice]]

## Proof

**Proof technique:** central cyclic induction, norm composition and Sylow
Bezout identities, followed by canonical augmentation-kernel shifts.

**Given:** The data above.

1.1 For a finite group $H$ and abelian group $X$, the induced module
$\mathbb Z[H]\otimes X$, with action on the first factor, has zero Tate
cohomology in every degree without an AC-bearing Shapiro invocation.
Indeed finiteness of $H$ identifies it with the coinduced module
$\operatorname{Map}(H,X)$ by coefficient extraction (using inverse indices
for the coinduced action). Hom–coinduction adjunction identifies its
homogeneous bar cochains with $\operatorname{Hom}_{\mathbb Z}(B_\bullet(H),X)$.
The underlying augmented bar complex has the explicit contraction
$$s(h_0,\ldots,h_n)=(1,h_0,\ldots,h_n),\qquad s(1)=(1)$$
in augmented degree $-1$, and $ds+sd=1$. Applying Hom gives zero positive
cohomology. The corresponding right bar complex tensored over
$\mathbb Z[H]$ with an induced module identifies with its underlying
abelian bar complex tensored with $X$; the same integral contraction gives
zero positive homology. In degree zero the invariant sums are precisely
norms, and in degree $-1$ an element $\sum_hh\otimes x_h$ with
$\sum_hx_h=0$ equals $\sum_h(h-1)\otimes x_h$. These prove the remaining
two vanishings by [F1]. The diagonal-action module
$\mathbb Z[H]\otimes X$ is isomorphic to this induced module through
$h\otimes x\mapsto h\otimes h^{-1}x$ when $X$ has an $H$-action.
Restriction of $\mathbb Z[G]\otimes X$ to any $H\le G$ is a finite
sum of such induced modules: choose the finitely many coset representatives.
Thus it too is Tate-acyclic. [F1, F4, given, construct]

2.1 We first prove positive cohomology vanishing and surjectivity of the
norm for every finite $p$-group satisfying the all-subgroup hypotheses,
by induction on its order. The trivial group is immediate. A nontrivial
$p$-group $P$ has a central element of order $p$: use [F6], then take a
suitable power of a nonidentity central element. Put $N=\langle z\rangle$.
The hypotheses on $N$ and [F3] give $H^j(N,E)=0$ for all $j>0$ and
$N_N:E\to E^N$ surjective. For every subgroup $S/N\le P/N$, [F2] for
$1\to N\to S\to S/N\to1$ has only its zero row and hence identifies
$H^i(S/N,E^N)$ with $H^i(S,E)$ for $i>0$. Its degrees one and two
therefore vanish. The induction hypothesis applies to the $P/N$-module
$E^N$, so its positive cohomology vanishes and its norm is onto. The same
one-row sequence for $P$ gives $H^i(P,E)=0$ for all $i>0$. Finally,
for $x\in E^P$, write $x=N_{P/N}y$ with $y\in E^N$, then write
$y=N_Nw$. The finite coset norm identity
$N_Pw=N_{P/N}N_Nw=x$ proves norm surjectivity. This argument applies to
every subgroup of $P$ as well. [F2, F3, F6, step 1.1, given, construct]

2.2 Let now $H$ be any finite group satisfying the all-subgroup
hypotheses. For each prime $p$ dividing $|H|$, choose a Sylow subgroup
$P_p$ by [F6]. For $i>0$, step 2.1 and [F5] show that every class in
$H^i(H,E)$ is killed by $[H:P_p]$. The greatest common divisor of these
finitely many indices is $1$: each prime divisor of $|H|$ is absent from
its own Sylow index, and no other prime divides all indices. Their Bezout
identity therefore kills every class. Thus all positive groups vanish.
For $x\in E^H$, step 2.1 gives $x=N_{P_p}w_p$. Then
$N_Hw_p=[H:P_p]x$, by summing over cosets. A finite Bezout combination
of these $w_p$ has norm $x$. Hence $E^H=N_HE$ and
$\widehat H^0(H,E)=0$. If $H=1$ this holds directly and no prime is
chosen. This proof uses only finitely many witnesses at each application.
[F1, F5, F6, step 2.1, algebra, construct]

3.1 It remains to obtain the negative degrees. Set $E_0=E$ and define
canonically
$$E_{j+1}=\ker\bigl(\mathbb Z[G]\otimes E_j\longrightarrow E_j\bigr),
\qquad g\otimes e\longmapsto e,$$
with diagonal action on the tensor product. The map is onto and split as
an abelian-group map by $e\mapsto1\otimes e$. Its middle module is
Tate-acyclic on every subgroup by step 1.1. Suppose $E_j$ satisfies the
low-degree subgroup hypotheses. Step 2.2 gives
$\widehat H^0(H,E_j)=0$, while $H^1(H,E_j)=0$ is assumed. The Tate
long exact sequence [F1] consequently gives
$H^1(H,E_{j+1})=H^2(H,E_{j+1})=0$ for every $H$. Thus induction
establishes these hypotheses, positive vanishing and norm surjectivity for
every $E_j$. The same long exact sequence gives
$$\widehat H^r(H,E_j)\cong\widehat H^{r+1}(H,E_{j+1})$$
for every integer $r$. For a negative $r$, apply this $-r$ times and use
$\widehat H^0(H,E_{-r})=0$. This proves all negative vanishings.
The kernels and maps are specified set constructions; no arbitrary-rank
basis or family of projective covers is selected. [F1, step 1.1, step 2.2, construct, algebra] ∎
