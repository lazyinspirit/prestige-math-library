---
dependency_level: 3
id: lem-countable-tate-acyclic-module-has-length-one-induced-summand-resolution
kind: lemma
title: Countable Tate-acyclic modules have a length-one induced-summand resolution
deps:
- def-dependent-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-tate-cohomology-for-finite-groups
- thm-long-exact-sequence-in-tate-cohomology
- lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees
- thm-the-bar-cochain-complex-computes-derived-group-cohomology
- thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module
- def-group-homology-as-a-derived-functor
- thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic
- thm-nontrivial-center-of-a-finite-p-group
- thm-sylow-first-theorem
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
axiom_use: DC plus the supplied ordinary/complete-resolution conventions. Countable
  modules have specified enumerations. Only countably many lifts of specified countable
  bases are used; no arbitrary-rank PID basis or uncountable free-module projectivity
  is invoked.
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterII §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem3.10 and tensor Remark3.12, printed83–85; complete actual source
      range read. The countable projectivity/explicit coinduced Hom construction here
      is a local adaptation, not imported from that remark.
verification: {}
---

## Statement

Assume Dependent Choice and the supplied ordinary/complete-resolution
conventions for finite-group cohomology and homology. Let $G$ be finite,
and let $A$ be a left $G$-module with a specified enumeration (repetitions
allowed). Suppose $\widehat H^r(H,A)=0$ for every subgroup $H\le G$
and every integer $r$. Then there is an exact sequence of $G$-modules
$$0\longrightarrow B\longrightarrow L_0\longrightarrow A\longrightarrow0,$$
where $L_0$ is countably free over $\mathbb Z[G]$ and $B$ is a
$G$-equivariant direct summand of another countably free
$\mathbb Z[G]$-module $L_1$. All these modules have enumerations.
As abelian groups $B,L_0$ are countably free. No assertion of a basis for
an arbitrary countable torsion-free group, or of arbitrary-rank
projectivity under DC, is made.

## Statement references

[[def-tate-cohomology-for-finite-groups]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** DC, supplied ordinary/complete-resolution data, finite $G$ and
enumerated $A$ with the subgroupwise vanishing in the Statement.

[F1] Supplied Tate groups have the norm/augmentation formulas in degrees
$0,-1$, ordinary cohomology in positive degrees and ordinary homology in
degrees at most $-2$, and have coefficient long exact sequences.
[[def-tate-cohomology-for-finite-groups]]
[[thm-long-exact-sequence-in-tate-cohomology]]

[F2] For finite groups, induced modules are Tate-acyclic on every subgroup
by the explicit bar/norm calculation under DC; no AC-Shapiro theorem is
needed. [[lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees]]

[F3] Homogeneous finite-group bars are free resolutions and their Hom
complexes compute ordinary cohomology. Ordinary homology with the supplied
left-resolution convention agrees with the right finite-rank bar tensor
complex by the DC-qualified Tor balance comparison.
[[thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module]]
[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]
[[def-group-homology-as-a-derived-functor]]
[[thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]]

[F4] Finite Sylow subgroups exist, and a nontrivial finite $p$-group has
nontrivial center. [[thm-sylow-first-theorem]]
[[thm-nontrivial-center-of-a-finite-p-group]]

[A1] DC implies countable choice in ZF. Enumerations and least natural
indices may be used to specify countable witnesses; no AC is assumed.
[[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** construct countable kernel bases, prove modular
freeness on Sylow subgroups, and split the resulting Hom cocycle.

**Given:** The data above; the term countable always includes its enumeration.

1.1 Take $L_0=\mathbb Z[G]^{(A)}$ with regular action on the first
factor and augmentation $g[a]\mapsto ga$. It is onto and countably
free over $\mathbb Z[G]$; the specified enumeration of $A$ and the finite
list $G$ enumerate its abelian basis and finite integer strings. Its
kernel $B$ is countable: filter this enumeration by membership in the
kernel, replacing invalid entries by zero. Restriction of $L_0$ to any
subgroup is a finite sum of induced modules, so [F2] and [F1] show that
$B$ is Tate-acyclic on all subgroups. This uses the actual regular action;
$L_0$ is not a trivial-action lattice. [F1, F2, given, construct]

1.2 We prove the exact abelian basis fact required here. Identify a
countably free abelian group $L$ with a direct sum on a subset of
$\mathbb N$ (pad a finite basis if necessary), and let $K\subset L$.
Put $K_n=K\cap\bigoplus_{i<n}\mathbb Z e_i$. The image of coordinate
$n$ on $K_{n+1}$ is an ideal $m_n\mathbb Z$ with uniquely specified
$m_n\ge0$: if it is nonzero, the least positive element generates it by
integer division. If $m_n>0$, let $b_n$ be the first element of the
ambient finite-integer-string enumeration belonging to $K_{n+1}$ with
$n$-coordinate $m_n$. Such an index exists by the definition of the
image. Subtracting the coordinate multiple gives
$K_{n+1}=K_n\oplus\mathbb Z b_n$; if $m_n=0$ it gives
$K_{n+1}=K_n$. Every element has finite coordinate support, so the
nonzero pivots $b_n$ form a basis of $K$. This uses set membership and
least indices, not a computably decidable membership algorithm or an
arbitrary basis choice. Apply this to $B\subset L_0$.
Take the countably free $G$-cover $L_1=\mathbb Z[G]^{(B)}\to B$
and let $N$ be its kernel. The same argument gives a specified countable
abelian basis of $N$. The cover has a $\mathbb Z$-linear section $s$:
lift each specified basis vector of $B$ to its least-index preimage in
the enumeration of $L_1$ and extend linearly. [A1, step 1.1, construct, algebra]

2.1 For a prime $p\mid|G|$ choose a Sylow $P\le G$; only finitely
many choices are needed. The exact sequence
$0\to B\xrightarrow{p}B\to V=B/pB\to0$ is exact because $B$ is
abelian-free. By [F1], $V$ is Tate-acyclic on all subgroups, so
$H_1(P,V)=0$ by the supplied degree-$-2$ identification. Let
$R=\mathbb F_p[P]$ and let $J$ be its augmentation ideal.
It is nilpotent: in a nontrivial $p$-group, a suitable power of a
nonidentity central element from [F4] has order $p$; write it as $z$.
Induction on $|P|$ shows the quotient augmentation ideal in
$\mathbb F_p[P/\langle z\rangle]$ nilpotent, so
$J^m\subset(z-1)R$ for some $m$. Centrality and $(z-1)^p=0$ give
$J^{mp}=0$. The trivial group has $J=0$ directly.
[F1, F4, step 1.1, step 1.2, construct, algebra]

2.2 The quotient $V/JV$ is an enumerated countable vector space over the
finite field $\mathbb F_p$. Retain the first enumerated vector not in
the span of previously retained ones, ignoring repetitions. Each vector
is examined at a finite index, so the retained list is independent and
spans. Lift its vectors to $V$ by least preimages, and let
$F=R^{(I)}\to V$ be the induced map. It gives an isomorphism
$F/JF\to V/JV$. Its cokernel $C$ satisfies $C=JC$, hence $C=0$
by nilpotence; the map is onto. Let $K$ be its kernel. The homology
sequence computed with the right bar complex in [F3] contains
$$H_1(P,V)\longrightarrow K/JK\longrightarrow F/JF
\longrightarrow V/JV\longrightarrow0.$$
For clarity this exact segment follows by tensoring
$0\to K\to F\to V\to0$ with each finite-rank free bar term and
using its homology long exact sequence. Thus its lift choices are finite
per chain, without an AC-bearing family of resolutions. The first group
is zero by step 2.1 and the last map is an isomorphism, so $K/JK=0$.
Again nilpotence implies $K=0$. Therefore $V$ is free over $R$ with
this finite or countable basis. Empty basis implies $V=JV$, hence $V=0$,
so it is covered as well. [F3, step 2.1, construct, algebra]

3.1 Put $M=\operatorname{Hom}_{\mathbb Z}(B,N)$ with conjugation action
$(g f)(b)=g f(g^{-1}b)$. This module need not be countable. The specified
countable basis of $B$ nevertheless proves an exact $P$-module sequence
$$0\longrightarrow M\xrightarrow{p}M\longrightarrow
T_p=\operatorname{Hom}_{\mathbb F_p}(B/pB,N/pN)\longrightarrow0.$$
Multiplication by $p$ is injective because $N$ is torsion-free. To lift
one map in $T_p$, lift its values on the countably many specified basis
vectors of $B$ to their least-index representatives in enumerated $N$,
and extend $\mathbb Z$-linearly. This gives surjectivity. A map reducing
to zero divides uniquely by $p$ pointwise into a homomorphism, proving
exactness at the second $M$. There is no simultaneous choice of such a
lift for every map in this possibly uncountable Hom set.
[A1, step 1.2, construct, algebra]

3.2 Write $V\cong\mathbb F_p[P]^{(I)}$ using step 2.2, with generators
$e_i$, and put $X=(N/pN)^I$. The explicit bijection
$$T_p\longrightarrow\operatorname{Map}(P,X),\qquad
f\longmapsto\bigl[g\longmapsto(i\longmapsto g^{-1}f(g e_i))\bigr]$$
has inverse $f(g e_i)=g\phi(g)(i)$, extended linearly. Its $P$-action
is $(h\phi)(g)=\phi(h^{-1}g)$. Thus $T_p$ is coinduced even if
$X$ is uncountable. Its invariant functions are constant, each the norm
of the function supported at $1$ with that value; hence
$\widehat H^0(P,T_p)=0$. For a normalized $1$-cocycle $c$ into this
function module, set $v(t)=c(t^{-1})(1)$. The cocycle rule gives
$$c(g)(t)=c(t^{-1}g)(1)-c(t^{-1})(1)=v(g^{-1}t)-v(t),$$
so $c=\delta v$ and $H^1(P,T_p)=0$. Forming $X$ uses only the set
of functions (with its zero element), not choice of representatives in
an arbitrary product. [F1, F3, step 2.2, step 3.1, construct, algebra]

3.3 The Tate long exact sequence of step 3.1 and the two vanishings in
step 3.2 make multiplication by $p$ an isomorphism on $H^1(P,M)$.
This group is killed by $|P|$: for any $1$-cocycle $c$, put
$m=\sum_{h\in P}c(h)$. Summing $c(gh)=c(g)+g c(h)$ gives
$|P|c(g)=m-gm$, a coboundary. Since $|P|$ is a power of $p$, its
multiplication is both invertible and zero; hence $H^1(P,M)=0$.
This uses only positive cochains and the supplied coefficient exactness.
[F1, F3, step 3.1, step 3.2, algebra]

4.1 We pass to $G$ without a new negative transfer theorem. A cocycle
$c:G\to M$ defines the affine action $g*x=gx+c(g)$. For each Sylow
$P$, step 3.3 gives an affine fixed point $a_P$. Choose finitely many
coset representatives and put
$$v_P=\sum_{gP\in G/P}\bigl(g a_P+c(g)\bigr).$$
Each summand is independent of its coset representative because $a_P$
is fixed for the affine $P$-action. Permuting cosets gives
$h v_P+[G:P]c(h)=v_P$, so $[G:P]c$ is a coboundary. The finitely
many Sylow indices have greatest common divisor $1$ (each prime divisor
of $|G|$ is absent from its own Sylow index, and no other prime divides
all indices). A Bezout combination makes $c$ a coboundary. For $G=1$
this is immediate. Hence $H^1(G,M)=0$.
[F4, step 3.3, construct, algebra]

4.2 The defect $g s g^{-1}-s$ of the abelian section of step 1.2 is a
$1$-cocycle in $M$, since its values lie in the kernel $N$ and the
conjugation action has the cocycle rule. By step 4.1 it equals
$g m g^{-1}-m$ for some $m\in M$. Then $s-m:B\to L_1$ is
$G$-linear and remains a section. Thus $B$ is a $G$-equivariant summand
of $L_1$, proving the exact sequence and every enumerated/freeness clause
in the Statement. The zero module, finite bases and trivial group satisfy
the same construction. Countably free terms lift epimorphisms under DC by
countable basis lifts if a projective formulation is desired, but no
uncountable projectivity or arbitrary-rank PID theorem has been used.
[A1, step 1.1, step 1.2, step 4.1, construct, algebra] ∎
