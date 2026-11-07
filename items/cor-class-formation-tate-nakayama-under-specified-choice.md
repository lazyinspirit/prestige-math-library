---
dependency_level: 4
id: cor-class-formation-tate-nakayama-under-specified-choice
kind: corollary
title: Usable Tate–Nakayama isomorphisms with explicit choice scope
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-class-formation
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- lem-relative-invariant-for-class-formations
- lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees
- lem-tate-acyclic-module-tensor-preserves-vanishing-under-tor
- thm-long-exact-sequence-in-tate-cohomology
- def-tate-cohomology-for-finite-groups
- def-tor-by-resolving-the-right-module
- def-axiom-of-choice
- def-dependent-choice
proof_strategy: direct
axiom_use: DC and supplied complete/ordinary resolution data suffice for the untensored
  conclusion. The arbitrary-diagonal-tensor conclusion additionally assumes AC explicitly.
  It gives usable scoped results without weakening the original DC-only general theorem.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterII §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Theorem3.11 and Remarks3.12–3.13, printed84–85; full actual proof read.
      Explicit choice scope and both Tor orientations are locally proved.
verification: {}
---

## Statement

Assume DC and the supplied ordinary/complete-resolution convention.
Let $(G,C,(\operatorname{inv}_V)_V)$ be a class formation and let
$U\trianglelefteq G$ be open. Put $Q=G/U$, $A=C^U$, and let
$u\in H^2(Q,A)$ be the unique relative-invariant class $1/|Q|$.
Choose a normalized cocycle $\varphi$ representing it. Define
$E=A\oplus\bigoplus_{q\ne1}\mathbb Z x_q$, $x_1=0$, with
$h x_q=x_{hq}-x_h+\varphi(h,q)$. Its standard two sequences are
$$0\to A\to E\to I_Q\to0,\qquad
0\to I_Q\to\mathbb Z[Q]\to\mathbb Z\to0.$$
For every $H\le Q$ and integer $r$, their successive connecting maps give
$$\widehat H^r(H,\mathbb Z)\xrightarrow{\sim}
\widehat H^{r+2}(H,A).$$
If AC is additionally assumed, let $M$ be any left $Q$-module such that
at least one of the two supplied first-variable Tor groups
$\operatorname{Tor}_1^{\mathbb Z}(M,A)$ and
$\operatorname{Tor}_1^{\mathbb Z}(A,M)$ vanishes. Then the successive
connecting maps of these sequences tensored with $M$, followed by the
natural target flip, give
$$\widehat H^r(H,M)\xrightarrow{\sim}
\widehat H^{r+2}(H,M\otimes_{\mathbb Z}A)$$
for every $H\le Q$ and every integer $r$, with diagonal actions.
No arbitrary-$M$ DC-only conclusion is asserted.

## Statement references

[[def-class-formation]]

[[def-tate-cohomology-for-finite-groups]]

[[lem-relative-invariant-for-class-formations]]

## Facts & Assumptions

**Given:** The class formation, $U,Q,A$, supplied resolutions and DC.
For the tensor branch only, also AC, $M$ and one of the two Tor vanishings.

[F1] The class formation has zero open-subgroup $H^1$, invariant
isomorphisms and restriction scaling.
[[def-class-formation]]

[F2] Relative invariant identifies $H^2(V/U,C^U)$ with the finite
restriction kernel of order $[V:U]$ at the original DC scope.
[[lem-relative-invariant-for-class-formations]]

[F3] Continuous normalized cochains give the displayed degree-one and
degree-two differential rules.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F4] Under DC, all-subgroup $H^1/H^2$ vanishing forces Tate acyclicity on
all subgroups; induced modules are acyclic by the direct bar/norm argument.
[[lem-finite-group-tate-vanishing-from-all-subgroup-low-degrees]]
[[def-tate-cohomology-for-finite-groups]]

[F5] Under AC/DC, a subgroupwise Tate-acyclic module remains so after a
diagonal tensor if either of the specified Tor orders vanishes.
[[lem-tate-acyclic-module-tensor-preserves-vanishing-under-tor]]

[F6] Tate groups have coefficient long exact sequences; the specified Tor
is computed by the supplied right resolution.
[[thm-long-exact-sequence-in-tate-cohomology]]
[[def-tor-by-resolving-the-right-module]]

[A1] DC belongs to the supplied cohomology convention; AC is additional
only in the arbitrary-tensor branch.
[[def-dependent-choice]] [[def-axiom-of-choice]]

## Proof

**Proof technique:** construct and kill the finite fundamental cocycle,
then use two actual acyclic middle terms with the precise choice scope.

**Given:** The data above.

1.1 For $H\le Q$ put $V$ equal to its inverse image in $G$. Inflation
injects $H^1(H,C^U)$ into $H^1_{\mathrm{cts}}(V,C)$: if a cocycle's
inflation equals $g a-a$, its value on $U$ is zero, so $a\in C^U$ and
it was a quotient coboundary already. Hence that $H^1$ is zero by [F1].
By [F2], $H^2(H,C^U)$ is cyclic of order $|H|$. Cochain inflation
commutes with restriction; the restriction of $u$ has relative invariant
$[G:V]/[G:U]=1/[V:U]$, so it generates this group. Existence and
uniqueness of $u$ itself follow from [F2] with $V=G$.
[F1, F2, F3, given, algebra]

1.2 The cocycle identity verifies the action on $E$:
$h(gx_q)=x_{hgq}-x_{hg}+\varphi(hg,q)$ after cancellation of the
terms using $h\varphi(g,q)-\varphi(hg,q)+\varphi(h,gq)-\varphi(h,g)=0$.
The map $E\to I_Q$, $x_q\mapsto q-1$, has kernel $A$ and is onto;
both it and the augmentation sequence are split as abelian sequences.
The cochain $q\mapsto x_q$ has differential $\varphi$, so $u$ maps
to zero in $H^2(Q,E)$ and on every subgroup after restriction.
[F3, step 1.1, construct, algebra]

2.1 On $H\le Q$, $\mathbb Z[Q]$ is a finite sum of induced modules and
is Tate-acyclic by the bar/norm calculation in [F4]. Its augmentation
sequence therefore gives
$\widehat H^1(H,I_Q)=\mathbb Z/|H|\mathbb Z$ and
$\widehat H^2(H,I_Q)=H^1(H,\mathbb Z)=0$. In the long exact sequence
of $0\to A\to E\to I_Q\to0$, the map onto $H^2(H,A)$ is onto
because the following map kills its generator, by step 1.2. It is an
isomorphism between cyclic groups of the same order. Since $H^1(H,A)=0$,
exactness gives $H^1(H,E)=H^2(H,E)=0$ for every $H$. The actual DC
vanishing theorem [F4] makes $E$ Tate-acyclic on all subgroups.
The two connecting maps of the untensored sequences are thus
isomorphisms in every degree by [F6]. This proves the first conclusion
under DC, without AC. [F4, F6, step 1.1, step 1.2, algebra]

3.1 For the tensor conclusion additionally use AC as stipulated. Since
$E=A\oplus\mathbb Z^{|Q|-1}$ as an abelian group, the vanishing
$\operatorname{Tor}_1(A,M)=0$ gives $\operatorname{Tor}_1(E,M)=0$
by adding the finite free summand in degree zero to its supplied right
resolution. Alternatively $\operatorname{Tor}_1(M,A)=0$ gives
$\operatorname{Tor}_1(M,E)=0$ by tensoring its right resolution with
this finite direct sum; the free summand contributes zero positive
homology. Either branch of [F5] now gives Tate acyclicity of $E\otimes M$.
The two original sequences remain exact upon tensoring with $M$ because
they were abelian-split. Also $\mathbb Z[Q]\otimes M$ with diagonal
action is induced, through $q\otimes m\mapsto q\otimes q^{-1}m$;
it is Tate-acyclic on every subgroup. The two boundary maps are therefore
isomorphisms by [F6]. The equivariant flips on the tensor exact sequences
commute with their inclusion/projection maps; naturality of the cochain-lift
boundary construction gives exactly the target $M\otimes A$ and the
map specified in the Statement. This proves the AC-conditional conclusion
with both explicit Tor orientations, including the trivial quotient and
zero-coefficient boundaries. [A1, F5, F6, step 1.2, step 2.1, construct, algebra] ∎
