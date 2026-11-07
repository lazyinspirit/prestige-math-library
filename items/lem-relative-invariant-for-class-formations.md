---
id: lem-relative-invariant-for-class-formations
kind: lemma
title: Relative invariant subgroup for a class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- def-class-formation
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- thm-the-bar-cochain-complex-computes-derived-group-cohomology
- cor-normalized-cochains-compute-group-cohomology
- lem-finite-choice
- def-dependent-choice
proof_strategy: direct
axiom_use: The continuous cochain argument uses only finite choices of coset representatives
  and of H1 coboundary witnesses. It does not require compactness, AC or continuous
  LHS; DC is retained in the original supplied cohomology convention.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §1
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Theorem 0.2 and Lemma 1.2, class-formation relative invariants.
  - title: Romyar Sharifi, Homological Algebra, Hochschild–Serre spectral sequence
    url: https://math.ucla.edu/~sharifi/homalg.pdf
    locator: Hochschild–Serre spectral sequence and its edge filtration.
verification:
  precheck: n/a
---


## Statement

Assume Dependent Choice and the supplied continuous-cohomology convention.
Let $(G,C, (\operatorname{inv}_W)_W)$ be a class formation, let $V\le G$ be
open, and let $U\trianglelefteq V$ be open. Put $Q=V/U$ and $C^U=\{c\in C:
uc=c\text{ for every }u\in U\}$, with its induced $Q$-action. Inflation
$$\operatorname{Inf}:H^2(Q,C^U)\longrightarrow H^2_{\mathrm{cont}}(V,C)$$
is injective and its image is the kernel of restriction
$$\operatorname{Res}_{U,V}:H^2_{\mathrm{cont}}(V,C)\longrightarrow
H^2_{\mathrm{cont}}(U,C)^Q.$$
Consequently the relative invariant $\operatorname{inv}_V\circ\operatorname{Inf}$
is an isomorphism from $H^2(Q,C^U)$ onto the subgroup
$$[V:U]^{-1}\mathbb Z/\mathbb Z
=\{x\in\mathbb Q/\mathbb Z:[V:U]x=0\}.$$

## Statement references

[[def-class-formation]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]

[Milne, Arithmetic Duality Theorems, ChapterI §1](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The original DC and supplied cohomology convention, a class
formation, $U\trianglelefteq V$ open, $Q=V/U$, and the discrete module $C$.

[F1] The class-formation axioms give $H^1_{\mathrm{cts}}(U,C)=0$ and
invariant isomorphisms with the stated restriction scaling.
[[def-class-formation]]

[F2] Continuous cohomology is normalized continuous inhomogeneous cochains;
in particular
$\delta b(g,h)=g b(h)-b(gh)+b(g)$ and
$\delta a(u)=u a-a$. The discrete module has a continuous action.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F3] Normalized finite-group cochains compute ordinary group cohomology;
thus cochains on the finite discrete quotient $Q$ use the same differential.
[[thm-the-bar-cochain-complex-computes-derived-group-cohomology]]
[[cor-normalized-cochains-compute-group-cohomology]]

[F4] Finite indexed families of nonempty sets admit a choice function in ZF.
[[lem-finite-choice]]

[A1] DC and supplied resolution data remain as in the original Statement;
the proof below is directly about continuous cochains and adds no AC or
compactness hypothesis. [[def-dependent-choice]]

## Proof

**Proof technique:** normalize continuous extension splittings over the open
subgroup, then descend its normalizer by the finite quotient.

**Given:** The data above. Put $A=C^U$.

1.1 Inflation takes a normalized $Q$-cocycle $d:Q^2\to A$ to a continuous
$V$-cocycle, since $Q$ is finite discrete, and its restriction to $U^2$ is
zero. To prove injectivity, suppose its inflation is $\delta b$ for a
continuous normalized $b:V\to C$. Then $b|_U$ is a continuous
$1$-cocycle. By [F1], it has the form $u a-a$. Subtract this global
principal cocycle from $b$, obtaining $b|_U=0$ without changing
$\delta b$. The equations $\delta b(g,u)=\delta b(u,g)=0$ give
$b(gu)=b(g)$ and $b(ug)=u b(g)$. Because $U$ is normal,
$ug=g(g^{-1}ug)$, so $b(ug)=b(g)$ as well; hence $b(g)\in A$.
Thus $b$ descends to a normalized cochain $Q\to A$, whose coboundary is
$d$. Its class was zero already in $H^2(Q,A)$. This proves injectivity.
[F1, F2, F3, given, algebra]

2.1 Conversely, let $[c]\in H^2_{\mathrm{cts}}(V,C)$ restrict to zero on
$U$. Choose its continuous normalized cocycle $c$ and a continuous
normalized $b:U\to C$ with $c|_{U^2}=\delta b$. On the topological
space $C\times V$ put
$$ (a,g)(a',h)=(a+g a'+c(g,h),gh). $$
The cocycle identity proves associativity; normalization gives identity
$(0,1)$ and the usual inverse obtained by solving this equation. The
action and $c$ are continuous, so these operations are continuous. Denote
the resulting group by $\mathcal E$ and write $i(a)=(a,1)$.
Then $s(u)=(-b(u),u)$ is a continuous homomorphism splitting the projection
over $U$, because $c|_{U^2}=\delta b$. [F2, given, construct]

2.2 Let $\mathcal N$ be the normalizer of $s(U)$ in $\mathcal E$.
For $e\in\mathcal E$ above $g\in V$, the homomorphism
$$u\longmapsto e\,s(g^{-1}ug)e^{-1}$$
is another continuous splitting over $U$. Write it uniquely as
$i(d_e(u))s(u)$. Multiplying two values shows
$d_e(uv)=d_e(u)+u d_e(v)$, and $d_e$ is continuous by the product
coordinate. By [F1] there is $a\in C$ with $d_e(u)=u a-a$.
Conjugating by $i(a)$ cancels this difference:
$i(a)i(d_e(u))s(u)i(-a)=s(u)$. Therefore $i(a)e\in\mathcal N$.
It follows that $\mathcal N\to V$ is onto. Its intersection with $C$
is $A$: $i(a)$ normalizes $s(U)$ exactly when it centralizes it, since
each point over $u$ in $s(U)$ is unique, and this is exactly $u a=a$.
Also $s(U)$ is normal in $\mathcal N$ and intersects $A$ trivially.
Consequently the abstract quotient gives the exact extension
$$1\longrightarrow A\longrightarrow\mathcal N/s(U)
\longrightarrow Q\longrightarrow1.$$
Its induced $Q$-action on $A$ is the specified one from $V$.
[F1, F2, step 2.1, construct, algebra]

3.1 All sections needed next are finite choices, not a choice for every
$g\in V$. By [F4], choose coset representatives $g_q\in V$, $g_1=1$,
and lifts $n_q\in\mathcal N$ above $g_q$, $n_1=1$, using step 2.2.
Their images give a section of $\mathcal N/s(U)\to Q$. Its factor set
$d(q,r)\in A$ is normalized and satisfies the $2$-cocycle equation by
associativity in that quotient; thus it represents a class in $H^2(Q,A)$.
For $g=g_q u$, define $\ell(g)=n_qs(u)\in\mathcal N$. This is a
continuous section of $\mathcal E\to V$: on each of the finitely many
open cosets, the expression uses the continuous map $s$ and multiplication
by a fixed element. Write $\ell(g)=(t(g),g)$; then $t:V\to C$ is
continuous and normalized. The factor set of $\ell$ is
$c(g,h)+\delta t(g,h)$. It belongs to $A$, since its values lie in the
kernel of $\mathcal N\to V$. Modulo $s(U)$, the section $\ell(g)$
is exactly the chosen section $n_{\bar g}$; as $A$ injects into that
quotient, this factor set is exactly $d(\bar g,\bar h)$. Hence
$\operatorname{Inf}d=c+\delta t$ as actual continuous cochains.
This proves that every restriction-kernel class lies in the inflation
image. No topological quotient-existence or compactness theorem was used:
only the finite quotient $Q$ and the displayed continuous section were
needed. [F2, F3, F4, step 2.2, construct, algebra]

4.1 Steps 1.1–3.1 prove the injective inflation/kernel assertion. Restriction
has invariant values, but taking its kernel into the invariant subgroup or
into the full cohomology group gives the same kernel. Finally, [F1] gives
$$\operatorname{inv}_U(\operatorname{Res}_{U,V}y)
=[V:U]\operatorname{inv}_V(y).$$
Since both invariant maps are isomorphisms, that kernel is precisely
$\operatorname{inv}_V^{-1}([V:U]^{-1}\mathbb Z/\mathbb Z)$.
Thus the relative invariant is the asserted isomorphism. If $U=V$, the
quotient is trivial and both kernel and fractional subgroup are zero, so
the same conclusion includes that boundary. [F1, step 1.1, step 3.1, algebra] ∎

## Remark

The normalized continuous-cochain assertions proved here also hold in ZF
when the cohomology groups and maps have that specified cochain meaning.
The proof uses no resolution-existence or comparison theorem: it takes one
cocycle, one continuous splitting cochain when its restriction class is
zero, and finitely many coset representatives and normalizer lifts. Those
finite choices are available by [F4]. Hence when resolutions, comparisons
and homotopies are additionally supplied as data, the same conclusion holds
in that fully supplied ZF branch as well. DC is retained in the original
Statement's derived-notation convention; it is not needed for this explicit
cochain calculation.
