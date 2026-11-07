---
id: lem-cm-isogeny-can-be-adjusted-to-prescribed-torsion-level
kind: lemma
title: A complex CM isogeny can be adjusted to a prescribed integral torsion isomorphism
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-complex-abelian-variety-with-cm-type
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- lem-cm-tate-module-rank-one-over-finite-adeles
- cor-ring-of-integers-is-a-dedekind-domain
- thm-nonzero-ideals-in-dedekind-domains-are-invertible
- lem-finite-torsionfree-modules-over-dedekind-domains-are-projective
- thm-projective-module-characterizations
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- lem-arith-prime-to-characteristic-multiplication-etale
- lem-nonaffine-fppf-descent-of-scheme-morphisms
- cor-strong-nullstellensatz-two-inclusions
- thm-proper-quasi-finite-is-finite
- thm-jacobian-criterion-smooth-morphism
- def-ray-class-group
- thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form
justified_by: []
sources:
  references:
  - title: J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)
    url: https://arxiv.org/pdf/0705.3446
    locator: Lemma3.1 and Theorem3.2(a), proof printed19–20. The local approximation argument is replaced here by an explicit lift from a projective integer lattice and algebraic morphism descent.
---

## Statement

Assume the Axiom of Choice. Let $A,B/\mathbb C$ have CM by the same CM algebra $E$, with $[E:\mathbb Q]=2\dim A=2\dim B$. Suppose both CM actions restrict to actions of the full integer ring $O_E$ by actual endomorphisms, and suppose there exists an $E$-linear algebraic isogeny $u:A\to B$. Let $m\ge1$ and let $\tau:A[m](\mathbb C)\to B[m](\mathbb C)$ be an $O_E$-linear group isomorphism. There exists an $E$-linear algebraic isogeny $f:A\to B$ of degree prime to $m$ whose restriction to $A[m](\mathbb C)$ is $\tau$.

Choose $E$-linear identifications of the rational uniformizing lattices of $A$ and $B$ with $E$, and denote their integral lattices by $I,J\subset E$. If $f$ induces multiplication by $c\in E^\times$, define $\mathfrak a_f=cI J^{-1}$. This is an integral ideal of $O_E$ prime to $m$, independent of the chosen identifications. The scheme-theoretic kernel of $f$ is $A[\mathfrak a_f]=\bigcap_{a\in\mathfrak a_f}\ker(a)$. The class of $\mathfrak a_f$ in $\operatorname{Cl}_{mO_E}(E)=\prod_i\operatorname{Cl}_{mO_{E_i}}(E_i)$ is independent of the choice of $f$ with restriction $\tau$. No isogeny-existence theorem for arbitrary pairs of CM varieties is asserted.

## Facts & Assumptions

**Given:** The two CM varieties, full integer actions, an existing isogeny, the integer $m$ and the prescribed integral torsion isomorphism in the Statement.

[A1] AC is explicit and implies DC and Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Complex CM varieties carry the stated rational CM actions. Their natural uniformizing lattices are full, algebraic homomorphisms act by their differentials, and the rational lattice is a free rank-one $E$-module. Its $m$-torsion is naturally the quotient of the lattice by $m$ ([[def-complex-abelian-variety-with-cm-type]], [[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[lem-cm-tate-module-rank-one-over-finite-adeles]]).

[F2] Integer rings are Dedekind domains, their nonzero fractional ideals are invertible, finite torsion-free modules are projective, and their localizations at nonzero primes are DVRs. Projectivity permits lifting a module map through a surjection ([[cor-ring-of-integers-is-a-dedekind-domain]], [[thm-nonzero-ideals-in-dedekind-domains-are-invertible]], [[lem-finite-torsionfree-modules-over-dedekind-domains-are-projective]], [[thm-projective-module-characterizations]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]).

[F3] Multiplication by a positive integer on an abelian variety is finite faithfully flat, and is etale in characteristic zero. Compatible scheme morphisms descend uniquely along an fppf cover. Morphisms from a reduced finite-type complex scheme to a separated scheme are determined by their complex points, by the strong Nullstellensatz ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], [[lem-arith-prime-to-characteristic-multiplication-etale]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[cor-strong-nullstellensatz-two-inclusions]]).

[F4] A proper quasi-finite morphism is finite. Between smooth varieties of the same dimension, an invertible tangent differential makes a morphism etale, by the relative Jacobian criterion ([[thm-proper-quasi-finite-is-finite]], [[thm-jacobian-criterion-smooth-morphism]]).

[F5] A ray class modulo $mO_E$ is an ideal prime to $m$ modulo principal ideals generated by elements locally congruent to $1$ at every prime above $m$, interpreted factorwise ([[def-ray-class-group]]).

[F6] A finite abelian group is a finite direct sum of cyclic prime-power groups ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

## Proof

1.1 Choose the two rational $E$-line identifications from [F1]. The resulting lattices $I,J\subset E$ are finite $\mathbb Z$-modules, stable under $O_E$, and span $E$ over $\mathbb Q$. Clearing their finitely many rational coordinates in integral bases makes each an integral ideal after multiplication by a nonzero integer, so they are full nonzero fractional ideals factorwise. By [F2] they are invertible and projective over $O_E$. The isogeny $u$ induces an $E$-linear map between the rational lines. Its differential is invertible: otherwise its real kernel has positive dimension and the analytic uniformization in [F1] would give infinitely many points in its finite kernel. Its lattice map is therefore multiplication by some $s\in E^\times$, with $sI\subset J$. [A1, F1, F2, given, choose, algebra]

2.1 The natural torsion identifications of [F1] turn $\tau$ into an $O_E$-linear isomorphism $I/mI\to J/mJ$. Compose with $I\to I/mI$. Since $I$ is projective, [F2] lifts this map through $J\to J/mJ$ to an $O_E$-linear map $t:I\to J$. On rationalizing it is an $E$-linear map between the two lines, thus multiplication by some $c\in E$. Replacing $t$ by $t+nms$, with $n\in\mathbb Z$, leaves its reduction unchanged. In each of the finitely many field factors of $E$, at most one integer $n$ makes $c_i+nms_i$ zero. Choose a nonnegative integer outside this finite list. With this replacement $c\in E^\times$, $cI\subset J$, and the induced torsion map is still $\tau$. [F1, F2, step 1.1, construct, algebra]

3.1 The scalar $c/s\in E^\times$ acts by a rational algebraic endomorphism of $A$, so $v=u\circ(c/s)\in\operatorname{Hom}(A,B)\otimes\mathbb Q$ is an algebraic rational homomorphism with lattice map $c$. Choose a positive integer $d$ such that $F=dv$ is an actual algebraic homomorphism. Its lattice map is $dc$. A point of $A[d](\mathbb C)$ is represented by $x/d$ with $x\in I$; its image under $F$ is represented by $cx\in J$ and is zero. The finite etale scheme $A[d]$ is reduced, so [F3] makes its entire scheme-theoretic restriction zero, not just its complex-point restriction. [A1, F1, F3, step 1.1, step 2.1, choose, algebra]

4.1 The kernel pair of $[d]:A\to A$ is $A\times A[d]$, by the group isomorphism $(x,a)\mapsto(x,x+a)$. The homomorphism $F$ from step 3.1 has equal pullbacks along this pair, since it kills $A[d]$. By [F3], it descends to an algebraic morphism $f:A\to B$ with $F=f\circ[d]$. The group law identity descends along the product fppf cover, so $f$ is a homomorphism. Its lattice map is $c$, because $d$ times that map is $dc$ and the lattices are torsion-free. Thus it is $E$-linear and has the required torsion restriction by step 2.1. This argument constructs algebraicity from an existing rational algebraic homomorphism; it does not algebraize an arbitrary analytic torus map. [F1, F3, step 2.1, step 3.1, construct, algebra]

5.1 The complex differential of $f$ is invertible, since it sends the rational lattice by the invertible scalar $c$ between the rational lines in step 2.1, and these lattices span the real tangent spaces. The analytic map is consequently surjective, and its kernel is the finite group $c^{-1}J/I$ of order $[J:cI]$. Every fibre is a translate of this kernel. The algebraic homomorphism is proper because $A$ is proper and $B$ separated. By translation the differential is invertible at every complex point. The relative Jacobian criterion in [F4] makes it etale at all those points. The complement of its etale locus is closed and, if nonempty, has a complex closed point by [F3], so it is empty. Etale fibres are zero-dimensional finite-type schemes, and therefore have finitely many geometric points. Thus $f$ is quasi-finite, and its properness and [F4] make it finite etale. Surjectivity follows as well from its closed image containing every complex point. Its degree is the rank of this finite etale map, equal to its kernel order $[J:cI]$. The surjectivity of $I/mI\to J/mJ$ says $J=cI+mJ$, so the finite cokernel $C=J/cI$ satisfies $C=mC$. For every prime $\ell\mid m$ this implies $C/\ell C=0$; the primary decomposition [F6] then implies $\ell\nmid|C|$. Hence $\deg f$ is prime to $m$. [F1, F3, F4, F6, step 2.1, step 4.1, algebra]

6.1 Put $\mathfrak a_f=cI J^{-1}$. Invertibility of $I,J$ in [F2] and $cI\subset J$ show this is an integral ideal. In a DVR at any prime above $m$, the two rank-one ideals satisfy $J=cI+mJ$ from step 5.1, which forces $J=cI$ there: a nonzero quotient of two comparable principal DVR ideals has nonzero quotient modulo an element of positive valuation. Thus $\mathfrak a_f$ is prime to $m$. Changing the chosen rational line identifications scales $I,J,c$ respectively by $a,b,b/a$, leaving $cI J^{-1}$ invariant. Finally, in the uniformization of $A$, the points killed by $\mathfrak a_f$ are $\mathfrak a_f^{-1}I/I=c^{-1}J/I$, exactly the kernel from step 5.1. Both kernels are reduced: the latter is finite etale, and $A[\mathfrak a_f]$ is contained in $A[N]$ for some positive integer $N\in\mathfrak a_f$, which is finite etale by [F3]. Therefore their equal complex points imply equal subgroup schemes. [F1, F2, F3, step 5.1, algebra]

7.1 Let $h$ be another such isogeny, with lattice scalar $b\in E^\times$. Agreement with $\tau$ gives $(c-b)I\subset mJ$. By step 6.1, at every prime above $m$ both $bI$ and $cI$ equal $J$. Dividing the inclusion by $bI=J$ gives $c/b-1\in mO_{E_i,\mathfrak v}$. The quotient of the two associated ideals is $(c/b)$, so it is ray-principal by [F5]. Their ray classes agree. When $m=1$ the torsion group is zero and the local conditions are empty; the same construction and ideal quotient give the ordinary class-group assertion. This proves every clause at the supplied existing-isogeny scope. [F5, step 2.1, step 6.1, algebra] ∎

## Source-reading boundary

The cached 2007 Milne article was read at Lemma3.1 and the proof of Theorem3.2(a), printed19–20. The source uses local approximation to modify an isogeny; the local proof here instead lifts the torsion map from a projective integer lattice, avoids finitely many zero scalars, and proves algebraicity by actual fppf descent through multiplication. The initial isogeny is an explicit hypothesis of this level-adjustment lemma. Existence for arbitrary CM-conjugate varieties and the global CM reciprocity statement are not imported.
