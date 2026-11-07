---
dependency_level: 4
id: lem-tate-acyclic-tensor-preservation-under-dependent-choice
kind: lemma
title: Tate-acyclic tensors under Dependent Choice and specified Tor vanishing
deps:
- def-dependent-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-tate-cohomology-for-finite-groups
- thm-long-exact-sequence-in-tate-cohomology
- def-tor-by-resolving-the-right-module
- def-projective-module
- thm-the-bar-cochain-complex-computes-derived-group-cohomology
- lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees
- lem-countable-tate-acyclic-module-has-length-one-induced-summand-resolution
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
axiom_use: DC and supplied ordinary/complete/Tor-resolution conventions. Ambient uncountable
  canonical free groups are used only as flat groups. Countable witness closure uses
  DC/countable choice. Tensor equations descend by finite presentation witnesses;
  actual diagonal actions are retained. No AC or arbitrary-rank PID theorem is invoked.
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterII §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem3.10, Theorem3.11 and tensor Remark3.12, printed83–85; full actual
      source range read. The explicit DC countable-witness/flat-resolution proof below
      is a local adaptation, not a theorem import from the tensor remark.
verification: {}
---

## Statement

Assume DC and the supplied ordinary/complete-resolution conventions for
finite-group cohomology and homology. Let $G$ be finite and $E,D$ arbitrary
left $G$-modules. Suppose $\widehat H^r(H,E)=0$ for all $H\le G$ and
all integers $r$. If at least one of
$$\operatorname{Tor}^{\mathbb Z,Q}_1(E,D)=0,
\qquad \operatorname{Tor}^{\mathbb Z,Q'}_1(D,E)=0$$
holds, with the displayed first variable resolved by its specified projective
resolution, then $E\otimes_{\mathbb Z}D$ with the diagonal $G$-action
is Tate-acyclic on every subgroup, in every integer degree. No existence of
an arbitrary family of projective resolutions is inferred from DC.

## Statement references

[[def-tate-cohomology-for-finite-groups]]

[[def-tor-by-resolving-the-right-module]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** DC, finite $G$, $E,D$, subgroupwise acyclicity of $E$ and one of
the two specified Tor vanishings in the Statement.

[F1] Tate groups have the stated ordinary positive-degree cohomology and
negative-degree homology/norm conventions and coefficient long exact
sequences. [[def-tate-cohomology-for-finite-groups]]
[[thm-long-exact-sequence-in-tate-cohomology]]

[F2] Under DC, vanishing of $H^1,H^2$ on every subgroup forces all Tate
groups to vanish. Induced modules are Tate-acyclic by its explicit bar/norm
calculation. [[lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees]]

[F3] An enumerated countable subgroupwise Tate-acyclic module has an exact
sequence $0\to B\to L_0\to A\to0$, with $L_0$ countably
$\mathbb Z[G]$-free and $B$ a $G$-summand of a countably
$\mathbb Z[G]$-free $L_1$, under DC.
[[lem-countable-tate-acyclic-module-has-length-one-induced-summand-resolution]]

[F4] Ordinary finite-group cohomology is computed by bar cochains, which
are finite powers of the coefficient module in each fixed degree.
[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]

[F5] The specified first-variable Tor group is homology of its given
projective resolution tensored with the second module. Projectivity is the
lifting property against epimorphisms.
[[def-tor-by-resolving-the-right-module]] [[def-projective-module]]

[A1] DC implies countable choice; the DC convention includes a prescribed
starting point. [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** compare canonical flat complexes with the given Tor,
close one countable pair under actual cohomology and relation witnesses,
and descend each finite ambient bar cocycle to that pair.

**Given:** The data above. All free groups below are algebraic direct sums.

1.1 For an abelian group $A$ set $F_0(A)=\mathbb Z[A]$ with
$\epsilon[a]=a$, $K_1(A)=\ker\epsilon$,
$F_1(A)=\mathbb Z[K_1(A)]$, $d_1[k]=k$, and recursively
$$K_{n+1}(A)=\ker(d_n:F_n(A)\to F_{n-1}(A)),\quad
F_{n+1}(A)=\mathbb Z[K_{n+1}(A)],\quad d_{n+1}[k]=k.$$
This specified exact augmented complex $F(A)\to A$ is functorial and
has the induced $G$-actions when $A$ does. Every term is flat without AC:
$\mathbb Z[S]\otimes X=\bigoplus_S X$, and exactness of a direct sum
uses only finitely many preimages for a single finite-support element.
We do not call these possibly uncountable free groups projective.
A supplied projective abelian group is flat as well: projectivity splits
its single canonical free epimorphism $\mathbb Z[P]\to P$, making it
a summand of a flat group. Tensor with a split inclusion/retraction
preserves that summand and hence exactness. [F5, given, construct, algebra]

1.2 Let $Q_\bullet\to A$ be any specified projective abelian resolution.
The first-quadrant double complex $Q_i\otimes F_j(B)$ has exact augmented
rows and columns, since the tensor factor kept fixed is flat by step 1.1.
The finite-diagonal total differential is $d_Q\otimes1+(-1)^i1\otimes d_F$.
Its augmentations to $A\otimes F(B)$ and $Q\otimes B$ are degreewise
onto. Their kernels are acyclic: for the first, eliminate a total cycle's
largest nonzero $j$ component using horizontal augmented exactness,
subtract its total boundary and introduce only terms at $j-1$; continue
to $j=0$. At horizontal degree zero the augmentation-kernel condition is
exactly the condition needed to choose that preimage. For the second
augmentation eliminate the largest nonzero $i$ using vertical augmented
exactness; the sign does not change solvability. These are finite
eliminations for each cycle, with no family of choices over all cycles.
Thus both augmentations induce homology isomorphisms and
$$\operatorname{Tor}^{\mathbb Z,Q}_1(A,B)
\cong H_1(A\otimes F(B)).$$
The same finite-diagonal argument for $F(A)\otimes F(B)$ compares
$A\otimes F(B)$ with $F(A)\otimes B$, because both are exact flat
resolutions. The tensor flip and this comparison handle the reversed Tor
order, even if only the resolution of $B$ was supplied. Consequently either
hypothesis in the Statement gives
$$H_1(C(E,D))=0,\qquad C_n(E,D)=E\otimes F_n(D).$$
Only this abelian-group vanishing is used; no equivariant structure on the
specified projective resolution is presumed. [F5, step 1.1, construct, algebra]

2.1 If $A'\subset A$, each map $K_n(A')\to K_n(A)$ and
$F_n(A')\to F_n(A)$ is injective, by induction using free basis labels
and kernel formation. For an increasing union $A_\infty=\bigcup A_j$,
finite supports give $F_n(A_\infty)=\bigcup F_n(A_j)$ and
$K_n(A_\infty)=\bigcup K_n(A_j)$. In the latter assertion, a finite
relation already holds at a stage because the corresponding lower free
group injects. In particular, a degree-two label $k_2\in K_2(D)$ is a
finite combination of $F_1(D)$ labels $[k_1]$; each $k_1$ is itself a
finite combination of elements of $D$ summing to zero. Include all these
underlying $D$-elements in a subgroup $D'$. The $k_1$ are actual elements
of $K_1(D')$, and $d_1(k_2)=0$ already holds in $F_0(D')$ because it
injects into $F_0(D)$. Hence $k_2\in K_2(D')$. This flattening descends
relations, not just a formal list of generator names.
[F5, step 1.1, construct, algebra]

2.2 For increasing subgroups $E_j,D_j$, the maps
$C_n(E_j,D_j)\to C_n(E,D)$ are injective: each is the direct-sum map
with injective coefficient inclusion and injective free-label inclusion.
Any finite chain, including a degree-two boundary witness, occurs after
adjoining its finitely many $E$-coefficients and the fully flattened
$D$-supports of step 2.1. By contrast $E_j\otimes D_j\to E\otimes D$
need not inject. To descend a zero equation in that tensor use its actual
presentation
$$F_1(A)\otimes B\longrightarrow F_0(A)\otimes B
\longrightarrow A\otimes B\longrightarrow0.$$
This is right exact directly from the tensor generators/bilinearity
relations. A finite expression mapping to zero is the image of one finite
$F_1(A)\otimes B$ expression. Adjoin its finitely many coefficients
and flattened relation supports. The equality then already holds at that
subgroup stage. For finitely many equations choose finitely many witnesses,
and take their finite $G$-orbits if invariance is required. No injectivity
of ordinary tensor inclusions has been assumed.
[step 1.1, step 2.1, construct, algebra]

3.1 Start with any enumerated countable $G$-subgroups $E_0\subset E$,
$D_0\subset D$. From an enumerated pair $E_j,D_j$ form one successor
as follows. For every $H\le G$ and degree $1,2$, enumerate its cocycles
with values in $E_j$ by enumerating all finite tuples and replacing
noncocycles by zero. Their ambient classes vanish because $E$ is
Tate-acyclic. By [A1] choose countably many ambient primitives and adjoin
their finite value sets and finite $G$-orbits to $E_j$.
Also enumerate all cycles in $C_1(E_j,D_j)$: finite integer strings
enumerate each canonical free term of a countable group, and filtering
kernel conditions with zero padding enumerates its cycles. Their images
are ambient cycles by step 2.2, and step 1.2 supplies degree-two boundaries.
Choose these countably many witnesses by [A1] and adjoin their finite
$E$-coefficients and fully flattened $D$-supports, with finite $G$-orbits.
The generated subgroup pair again has an enumeration by finite words in
the countably many adjoined elements. This specifies a serial relation on
the set of enumerated subgroup pairs with witness lists; DC constructs
one chain from the given seed. It does not choose a countable closure
simultaneously for every ambient element or pair. [A1, F1, F4, step 1.2, step 2.1, step 2.2, construct]

3.2 Put $A=\bigcup E_j$ and $T=\bigcup D_j$ with the enumeration from
the chosen sequence of enumerations. Every subgroup $1$- or $2$-cocycle
with values in $A$ has finitely many values, so it belongs to a stage and
is killed at its successor. Thus $H^1(H,A)=H^2(H,A)=0$ for all
$H\le G$, and [F2] makes $A$ subgroupwise Tate-acyclic. Every cycle in
$C_1(A,T)$ belongs to a stage by step 2.1 and is already a cycle there
by step 2.2; its successor contains a boundary. Consequently
$$H_1(A\otimes F(T))=0.$$
Thus one countable pair preserves both the needed CT and actual Tor
vanishing, with their relation witnesses; neither follows merely from
being a subgroup of the ambient pair. [F2, F4, step 2.1, step 2.2, step 3.1, algebra]

4.1 Apply [F3] to the countable CT module $A$, obtaining
$0\to B\to L_0\to A\to0$ with the indicated abelian-free terms
and a $G$-equivariant splitting of $B$ into a countably free $L_1$.
As abelian groups this is a two-term flat resolution of $A$. The same
double-flat-complex elimination of step 1.2, using this resolution and
$F(T)$, identifies
$$H_1(A\otimes F(T))
\cong\ker(B\otimes T\to L_0\otimes T).$$
Its vanishing from step 3.2 and tensor right exactness therefore give
$0\to B\otimes T\to L_0\otimes T\to A\otimes T\to0$.
Here both displayed inclusions are actual maps; exactness is derived from
the specified Tor calculation, not from flatness of $A$ or a general
claim that tensor preserves injections. [F3, step 1.2, step 3.2, construct, algebra]

4.2 With diagonal action, every free $G$-module tensored with $T$ becomes
induced through $g\otimes t\mapsto g\otimes g^{-1}t$; a countable
sum of regular summands is the single induced module with coefficient
$\bigoplus_I T$. Therefore $L_i\otimes T$ are Tate-acyclic on every
subgroup by [F2]. Tensoring the actual section/retraction from [F3]
makes $B\otimes T$ a $G$-summand of $L_1\otimes T$, hence also
Tate-acyclic. The coefficient exact sequence in step 4.1 and [F1] imply
that $A\otimes T$ is Tate-acyclic on every subgroup. No nontrivial
$G$-lattice has been replaced by copies of a trivial-action coefficient.
[F1, F2, F3, step 4.1, algebra]

5.1 Fix $H\le G$, degree $n=1$ or $2$, and an ambient bar cocycle
$z$ with values in $E\otimes D$. There are finitely many values since
$H$ is finite. Express them by finite sums of pure tensors, placing their
coefficients into finitely generated $G$-subgroup seeds. The resulting
stage cochain need not yet be a cocycle, because ordinary tensor inclusion
need not be injective. Apply step 2.2 to its finitely many differential
equations, which are zero in the ambient tensor, and adjoin their finite
equality witnesses. At this enlarged countable seed it is a genuine
cocycle. Apply steps 3.1–3.2 to this seed and then step 4.2: in the
countable tensor $A\otimes T$ its class is zero. Mapping a bar primitive
back to the ambient tensor proves that $z$ is a coboundary. Hence
$H^1(H,E\otimes D)=H^2(H,E\otimes D)=0$ for every subgroup.
The accepted DC criterion [F2] now gives all supplied Tate degrees.
The proof uses [F4] only in positive finite-bar degrees, so it requires
neither finite-rank arbitrary complete resolutions nor comparison of
different complete resolutions. Zero coefficients, trivial $G$, finite
or empty bases and both Tor orders are included by the same constructions.
[A1, F1, F2, F4, step 2.2, step 3.1, step 3.2, step 4.2, construct, algebra] ∎
