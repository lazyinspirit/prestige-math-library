---
dependency_level: 0
id: lem-enumerated-noetherian-flat-complex-has-universal-finite-replacement
kind: lemma
title: Universal finite replacement of an enumerated Noetherian flat complex in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-noetherian-ring-and-module
- lem-finite-modules-over-noetherian-rings-are-noetherian
- thm-well-ordering-principle
- thm-recursion
- thm-flatness-criteria-by-injections-and-ideals
- thm-flat-quotients-preserve-short-exact-tensor-sequences
- cor-free-modules-are-projective-and-flat
- def-mapping-cone-of-a-chain-map
- thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic
- def-quasi-isomorphism
- lem-determinant-trick-for-nakayama
- thm-noetherian-ring-quotients-and-localisations
- thm-localisation-of-hom-for-finitely-presented-modules
- thm-localisation-of-modules-is-exact
- def-projective-module
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: ZF. Ring and term enumerations are GIVEN. Only the finite-generation definition
  of Noetherianity and the choice-free flatness clause for free modules are used;
  their separate DC/AC clauses are not adopted. No projective resolution of an arbitrary
  module is used.
sources:
  references:
  - title: The Stacks Project, finite free replacement and bounded-above flat complexes
    url: https://stacks.math.columbia.edu/tag/064U
    locator: Complete local tag proof read as comparison; the supplied-enumeration
      ZF refinement and universal tensor/truncation proofs are reconstructed here,
      not imported.
  - title: The Stacks Project, bounded-above complexes of flat modules
    url: https://stacks.math.columbia.edu/tag/064K
    locator: Complete local tag statement/proof read; actual acyclic-cone tensor comparison
      is supplied here by flat cycles.
  - title: The Stacks Project, flat truncation comparison
    url: https://stacks.math.columbia.edu/tag/0653
    locator: Complete local tag statement/proof read; the present proof uses a direct
      ideal-tensor chase instead of arbitrary-module projective resolutions.
---

## Statement

Work in ZF. Let $A$ be a Noetherian commutative ring, with a GIVEN surjection $\mathbb N\to A$. Here Noetherian means that every ideal is finitely generated; no converse from an ascending-chain condition using DC is assumed. Let $K^\bullet$ be a cochain complex concentrated in degrees $0,\ldots,r$, $r\ge0$, whose terms are flat $A$-modules and are each supplied with a surjection $\mathbb N\to K^i$. Suppose as a GIVEN hypothesis that every $H^i(K^\bullet)$ is finitely generated over $A$.

Then there are a complex $E^\bullet$ concentrated in degrees $0,\ldots,r$ and a chain map $\gamma:E^\bullet\to K^\bullet$ such that $E^i$ is finite free for $i>0$, $E^0$ is finitely presented flat and a direct summand of a finite free module, and $E^\bullet$ is finite free locally on $\operatorname{Spec}A$. For EVERY $A$-module $M$, with no enumeration or choice assumption on $M$, the map
$$\gamma\otimes_A1_M:E^\bullet\otimes_AM\longrightarrow K^\bullet\otimes_AM$$
is a quasi-isomorphism. Its cohomology comparisons are natural in $M$.

The zero ring, zero complex, zero coefficient module, $r=0$, and empty finite generating lists are included. All recursive choices in the construction are replaced by least finite codes and ordinary recursion on $\mathbb N$, without AC, DC or Countable Choice. Finite generation of the cohomology is an actual hypothesis, not inferred from any choice-dependent geometric cohomology theorem.

## Facts & Assumptions

**Given:** The ring, term enumerations, bounded flat complex and finitely generated cohomology in the Statement, in ZF.

[F1] Noetherianity is the finite-generation definition, and submodules and quotients of finite modules over a Noetherian ring are finite. Only this choice-free definition is used, not its separately DC-conditional converse from chain stabilization. [[def-noetherian-ring-and-module]] [[lem-finite-modules-over-noetherian-rings-are-noetherian]]

[F2] Every nonempty subset of $\mathbb N$ has a least element; a GIVEN function on a set has a unique iterated sequence from a supplied initial state by ordinary Peano recursion. No computability of that function is required. [[thm-well-ordering-principle]] [[thm-recursion]]

[F3] Flatness is equivalent to preserving injections and to injectivity of ideal-tensor multiplication. A short exact sequence with flat quotient survives arbitrary tensoring. Free modules are flat WITHOUT choice by the direct-sum-of-identities argument; only this clause, not arbitrary free-module projectivity under AC, is used. [[thm-flatness-criteria-by-injections-and-ideals]] [[thm-flat-quotients-preserve-short-exact-tensor-sequences]] [[cor-free-modules-are-projective-and-flat]]

[F4] A map of complexes is a quasi-isomorphism exactly when its mapping cone is acyclic. We use the cochain convention obtained from the chain convention by reindexing $n=-i$: $\operatorname{Cone}(u)^i=D^i\oplus C^{i+1}$ with differential $(y,x)\mapsto(d_Dy+ux,-d_Cx)$. [[def-mapping-cone-of-a-chain-map]] [[def-quasi-isomorphism]] [[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]

[F5] The determinant trick says that $IN=N$ for a finite module implies $(1-a)N=0$ for some $a\in I$. At a GIVEN local ring and its maximal ideal, $1-a$ is a unit, so this proves local Nakayama without a maximal-ideal existence theorem. Localizations of Noetherian rings are Noetherian. [[lem-determinant-trick-for-nakayama]] [[thm-noetherian-ring-quotients-and-localisations]]

[F6] Localization is exact; Hom from a finitely presented module commutes with localization, by its finite matrix presentation and clearing finitely many denominators. [[thm-localisation-of-modules-is-exact]] [[thm-localisation-of-hom-for-finitely-presented-modules]]

[F7] Projectivity is the lifting property against surjective module maps. We will construct a finite free summand explicitly, so only finitely many basis lifts are needed. [[def-projective-module]]

## Proof

**Proof technique:** least-code descending free replacement, a bounded-above acyclic-flat-cone tensor argument, direct ideal-tensor flat truncation, and a finite dual-basis splitting over the explicitly enumerated ring.

**Given:** The Statement data; no additional choice principle.

1.1 If $A$ is the zero ring, every unital $A$-module is zero and the zero complex $E$ proves all assertions. Otherwise fix the supplied enumerations. Finite tuples of ring elements and of the finitely many original terms $K^i$ have natural-number codes, using pairing and finite sequences. A kernel has an enumeration by returning the represented element if it lies in that kernel and returning zero otherwise; quotients inherit enumerations. Finite partial free complexes, their matrices, and maps to $K$ thus have uniformly coded finite data. Every nonempty definable set of valid such codes has a least member by [F2]. Its defining predicate may be nondecidable: no numerical algorithm or decision procedure is claimed. All collections are sets by Separation and Replacement. Zero terms and empty tuples have fixed codes. [F2, given, construct]

1.2 An acyclic bounded-above complex $C$ of flat modules remains acyclic after tensoring with every module. To prove this, set $Z^i=\ker d_C^i$. Above a fixed bound the cycles are zero and flat. Descending finitely to any specified degree, the exact row $0\to Z^i\to C^i\to Z^{i+1}\to0$ has flat middle and quotient. By [F3] it stays exact after tensoring. For an arbitrary injection $N'\hookrightarrow N$, compare these tensor rows: $Z^i\otimes N'$ embeds in $C^i\otimes N'$, whose vertical map into $C^i\otimes N$ is injective. Hence the vertical map on the cycle tensors is injective too, proving $Z^i$ flat by [F3]. All these short exact rows therefore survive arbitrary tensoring, which proves $C\otimes M$ acyclic for any $M$. Only finite downward induction to a given degree is used. [F3, construct, algebra]

2.1 Start with the zero partial complex in degrees at least $r+1$. Suppose a partial finite-free complex $F^{\ge n}$ has a chain map $\alpha$ to $K$ inducing isomorphisms on cohomology above $n$ and a surjection in degree $n$. At its bottom $H^n(F^{\ge n})=\ker(F^n\to F^{n+1})$ is finite over $A$ by [F1], and so is the kernel of its map to $H^n(K)$. A finite list of bottom cycles $x_j$ generating this kernel exists. Their images are boundaries, so finite witnesses $y_j\in K^{n-1}$ with $d_Ky_j=\alpha x_j$ exist by finite existential instantiation. Choose the least joint code satisfying these conditions. Adjoin a finite free term with basis mapping to $x_j$ in $F^n$ and to $y_j$ in $K^{n-1}$. This makes the cohomology map in degree $n$ an isomorphism and leaves larger degrees unchanged. [F1, F2, step 1.1, construct, algebra]

2.2 For this enumerated ring, every proper ideal $J$ lies in a maximal ideal in ZF. Starting from $J$, process the supplied sequence $e(0),e(1),\ldots$; adjoin $e(n)$ exactly if the enlarged ideal is proper. This is a defined successor function, so [F2] gives its sequence. The union is proper, since any equation making $1$ belong to it already lies at a finite stage. If an element $a$ is not in the union, the stage processing its code rejected it, so adjoining it to the union gives the unit ideal. The union is therefore maximal, and is prime by the elementary field-quotient criterion. Consequently any set of principal opens covering $\operatorname{Spec}A$ has a finite subcover: otherwise the ideal generated by all their functions would be proper and this maximal ideal would be an uncovered point. Thus a finite unit identity exists. This argument is restricted to the GIVEN enumerated ring, not arbitrary unenumerated rings. [F2, step 1.1, construct, algebra]

3.1 The cokernel of the extended map on degree $n-1$ cohomology is a quotient of the GIVEN finite module $H^{n-1}(K)$, hence finite. Choose by least code a finite list of cycles $z_l$ of $K$ whose classes generate this cokernel. Adjoin another finite free summand in degree $n-1$, with zero differential into $F^n$ and with basis mapping to $z_l$ in $K^{n-1}$. Its image is still a chain map, and the degree-$n-1$ cohomology map is now surjective. Thus the invariant of step 2.1 holds at the next stage. If one of the kernels or cokernels is zero the list may be empty, and $A^0=0$ supplies the corresponding summand. [F1, F2, step 2.1, construct, algebra]

4.1 The set of valid finite-state extensions is nonempty by steps 2.1–3.1. Define the successor of a valid state to be its least valid extension code, and define the successor of an invalid code arbitrarily as the fixed zero code; this is a total function on a set of codes, not a choice relation. Apply ordinary recursion [F2] with $n=r+1-t$ at stage $t$ (include $t$ in the state). Each degree stabilizes after finitely many stages. Replacement forms their matrices, giving a finite-free complex $F^\bullet$ bounded above by $r$, possibly unbounded below, and a chain map $\alpha:F\to K$. For each fixed degree, the invariant at the next stage makes $H^i(\alpha)$ an isomorphism, so $\alpha$ is a quasi-isomorphism. No countable family of arbitrary nonempty sets was chosen. [F2, F4, step 2.1, step 3.1, construct]

5.1 Apply step 1.2 to $C=\operatorname{Cone}(\alpha)$. It is acyclic by [F4], bounded above, and flat termwise since its terms are finite sums of terms of $F$ and $K$. Tensoring the explicit cone formula commutes with those sums and gives $\operatorname{Cone}(\alpha\otimes1_M)$, so $\alpha\otimes1_M$ is a quasi-isomorphism for EVERY $M$. This argument requires neither an enumeration of $M$ nor a projective resolution of it; flatness of free modules is the unconditional clause of [F3]. [F3, F4, step 4.1, step 1.2, algebra]

5.2 Define $E^0=\operatorname{coker}(F^{-1}\to F^0)$, $E^i=F^i$ for $i>0$, and $E^i=0$ for $i<0$. This has the induced differential and a natural quotient chain map $\pi:F\to E$. The term $E^0$ is finitely presented by the displayed two finite free terms. Since $H^i(F)=H^i(K)=0$ for $i<0$, direct kernel/image calculation shows that $\pi$ is a quasi-isomorphism: in degree zero its kernel modulo boundaries is unchanged, and positive degrees are unchanged. We next prove $E^0$ flat without Tor or an arbitrary resolution. [F4, step 4.1, construct, algebra]

6.1 Fix an ideal $I\subset A$ and $z\in I\otimes E^0$ whose product in $E^0$ is zero. Lift it to $w\in I\otimes F^0$. Its product is $dy$ in $F^0$ for some $y\in F^{-1}$. Modulo $I$, the vector $\bar y$ is a cycle. By step 5.1 applied to $M=A/I$, $H^{-1}(F\otimes A/I)=H^{-1}(K\otimes A/I)=0$, so $\bar y=d\bar v$ for some $\bar v\in F^{-2}\otimes A/I$. Lift this finite vector to $v\in F^{-2}$. Then $y-dv\in IF^{-1}$, so choose a finite tensor $u\in I\otimes F^{-1}$ with that product. The products of $w$ and $du$ in $F^0$ agree. As $F^0$ is finite free, $I\otimes F^0\to F^0$ is injective coordinatewise, giving $w=du$. Its image $z$ in $I\otimes E^0$ is therefore zero. The ideal criterion [F3] proves $E^0$ flat. All lifts here are a single finite witness list for the element under consideration. [F3, step 5.1, step 5.2, construct, algebra]

7.1 Both $F$ and $E$ now have flat terms and are bounded above. The acyclic cone of $\pi$ stays acyclic under every tensor by step 1.2, so $\pi\otimes1_M$ is a quasi-isomorphism. Since $K^{-1}=0$, the map $\alpha^0$ kills $\operatorname{im}d_F^{-1}$, hence factors through $E^0$ and gives a direct chain map $\gamma:E\to K$ with $\alpha=\gamma\pi$. Steps 5.1 and 6.1 then give that $\gamma\otimes1_M$ is a quasi-isomorphism for every $M$, by the isomorphisms on cohomology. These maps come from the one fixed $\gamma$, so commute with every module homomorphism in $M$. [F3, F4, step 1.2, step 5.1, step 5.2, step 6.1, construct, algebra]

7.2 At a GIVEN prime $\mathfrak p$, the localization $A_{\mathfrak p}$ is Noetherian by [F5], and $E^0_{\mathfrak p}$ is finite flat. Choose a basis of its finite-dimensional residue fibre and lift that finite list. The determinant trick [F5] over this local ring makes the resulting map from a finite free module surjective: its finite cokernel equals its maximal-ideal multiple, and $1-a$ is a unit for $a$ in that given maximal ideal. Its kernel is finite by [F1]; tensoring with the residue field is exact by flatness of the quotient, and the residue map is an isomorphism. The kernel therefore has zero residue fibre and the same local determinant argument makes it zero. Thus $E^0_{\mathfrak p}$ is finite free. The finite presentation, Hom localization and clearing of finitely many denominators in [F6] spread the basis and its inverse to a basis on some $D(f)$, $f\notin\mathfrak p$. No bases have been chosen simultaneously for all primes. [F1, F3, F5, F6, step 6.1, construct, algebra]

8.1 Take the set of ALL principal neighborhoods with basis data supplied by step 7.2; it is a cover without a simultaneous choice of basis at each prime. Step 2.2 gives finitely many such neighborhoods $D(f_i)$ and their finite basis data. Hom localization [F6] spreads each local basis and dual basis after multiplying denominators; clear the remaining equality denominators on a finite generating list of $E^0$. This gives $a_i\ge1$, global elements $x_{ij}$ and linear forms $\phi_{ij}$ with $f_i^{a_i}\operatorname{id}_{E^0}=\sum_jx_{ij}\phi_{ij}$. The powers $f_i^{a_i}$ still have the same principal-open cover, so step 2.2 gives a finite identity $1=\sum_i b_if_i^{a_i}$. Combining yields a finite dual-basis identity $\operatorname{id}_{E^0}=\sum_{i,j}b_ix_{ij}\phi_{ij}$. The map from the corresponding finite free module sending its basis to $b_ix_{ij}$ and the map back with coordinates $\phi_{ij}$ compose to the identity. Hence $E^0$ is a finite free summand. A map from a finite free module through a surjection lifts by finitely many basis preimages, and its summand inherits the lift; this is exactly [F7]. Thus $E^0$ is finite projective, and step 7.2 proves local finite freeness of the whole finite complex. [F6, F7, step 7.2, step 2.2, construct, algebra]

9.1 If $K=0$ take $E=0$ and $\gamma=0$ directly; empty generating lists and zero summands occur explicitly in steps 1.1–4.1 and 8.1. The case $r=0$ uses exactly the same construction and yields only the finite projective degree-zero term. For $M=0$ both tensor complexes vanish. Degrees outside $0,\ldots,r$ have zero cohomology. The nonzero-ring argument used enumerations only for the finite-code successor construction and the greedy ideal construction; all later universal tensor tests range over unrestricted modules. This proves the exact ZF Statement without a general free-module projectivity theorem, arbitrary-module projective resolutions, or a geometric finite-cohomology assumption not included in the Given data. [F2, F3, F7, step 1.1, step 4.1, step 7.1, step 8.1, algebra] ∎

## Remarks

This is an algebraic prerequisite with supplied enumerations and GIVEN finitely generated cohomology. It does not by itself prove choice-free arithmetic projectivity, Čech/Serre finiteness, a Hilbert/Picard construction, or the original unqualified Jacobian-good-reduction theorem. Its unrestricted coefficient-module clause is retained; it is not replaced by a countable-module assertion.
