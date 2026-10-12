---
id: thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases
kind: theorem
title: "The fixed part of a geometric Hodge variation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-geometric-polarizable-hodge-variation,
       def-local-system-of-r-modules-and-its-pullback,
       def-rational-mixed-hodge-structure,
       thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures,
       lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications,
       lem-hard-lefschetz-splits-a-bounded-t-structure-complex,
       thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz,
       lem-algebraic-open-inclusion-surjects-on-fundamental-groups,
       lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations,
       lem-morphisms-of-mixed-hodge-structures-are-strict,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; Theoreme 4.1.1(i)-(ii) and Corollaire 4.1.2, printed pp. 40-42 (Leray degeneration and the largest constant subsystem)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision); Theorems 3.1-3.3 and Corollaries 3.4-3.5, printed pp. 36-41 (degeneration, the global invariant cycle theorem, and Hodge substructure of the invariant part)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $H$ be a geometric polarizable rational
Hodge variation ([[def-geometric-polarizable-hodge-variation]]) on a connected
smooth quasiprojective complex variety $S$. For each base point $s$, the
monodromy-invariant space $H_s^{\pi_1(S,s)}$
([[def-local-system-of-r-modules-and-its-pullback]]) is a Hodge substructure of
$H_s$ ([[def-rational-mixed-hodge-structure]]), and parallel transport
identifies these spaces as one constant Hodge structure. Equivalently, the Hodge
components of every global flat section are global flat sections. For
$H=R^mf_*\mathbb Q$ with $f:X\to S$ smooth projective and an SNC smooth
projective compactification $\overline X$ of $X$, the image of
$H^m(\overline X,\mathbb Q)\to H^m(X_s,\mathbb Q)$ is exactly the invariant
space.

## Facts & Assumptions

**Given:** AC, a connected smooth quasiprojective complex variety $S$, a
geometric polarizable rational Hodge variation $H$ on $S$ in the sense of
[[def-geometric-polarizable-hodge-variation]], and points $s,t\in S$ joined by a
path, so that the monodromy representations at the two points are conjugate by
the transport isomorphism
([[def-local-system-of-r-modules-and-its-pullback]]).

[F1] Smooth projective families give finite-rank local systems with full
monodromy-stable integral lattices, continuous pure Hodge decompositions, flat
Lefschetz operators from a relatively ample bundle, a flat rational
polarization, the closure properties under finite sums, tensor products, Tate
twists, exterior powers and Hodge direct summands, and pullbacks of algebraic
maps between smooth projective fibres preserve rational Hodge structures
([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]).

[F2] Centered hard-Lefschetz isomorphisms split a bounded t-complex into the
shifted direct sum of its t-cohomology objects
([[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]]); fibrewise hard
Lefschetz for the class of a relatively ample bundle is supplied by the Kähler
identities ([[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]]).

[F3] For a smooth quasiprojective $U$ with an SNC smooth projective
compactification $X$, the logarithmic complex gives a functorial rational mixed
Hodge structure on $H^n(U,\mathbb Q)$ whose weights are at least $n$ and whose
minimal weight part is $W_nH^n(U,\mathbb Q)=\operatorname{im}(H^n(X,\mathbb
Q)\to H^n(U,\mathbb Q))$, independent of the compactification
([[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]]); the
existence of SNC compactifications and of a common dominating model is
[[lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications]].

[F4] Morphisms of rational mixed Hodge structures are strict for $W$ and $F$,
and a morphism from weights at least $n$ to weights at most $n$ has pure image
of weight $n$ ([[lem-morphisms-of-mixed-hodge-structures-are-strict]]).

[F5] A nonempty Zariski open subset of a connected smooth complex algebraic
variety is path connected and its inclusion induces a surjection on fundamental
groups ([[lem-algebraic-open-inclusion-surjects-on-fundamental-groups]]).

[F6] Proper base change identifies the cohomology sheaf of a smooth projective
family with the fibre cohomology, and the Leray identification
$H^m(X;\mathbb Q)\cong H^m(S,Rf_*\mathbb Q)$ holds in the bounded constructible
calculus of
[[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]].

## Proof

**Proof technique:** direct.

1.1 Leray edge map in the family case. Let $f:X\to S$ be smooth projective and put $H=R^mf_*\mathbb Q$. By [F3] choose an SNC smooth projective compactification $\overline X$ of $X$. A relatively ample line bundle exists because $f$ is projective, and by [F2] its class acts on the ordinary bounded t-structure by centered hard-Lefschetz isomorphisms, so [F2] splits $Rf_*\mathbb Q\cong\bigoplus_jR^jf_*\mathbb Q[-j]$ in the constructible derived category. Under the Leray identification $H^m(X;\mathbb Q)\cong H^m(S,Rf_*\mathbb Q)$ supplied by [F6], this decomposition expresses $H^m(X;\mathbb Q)$ as the direct sum of the groups $H^{m-j}(S,R^jf_*\mathbb Q)$; the edge map $H^m(X;\mathbb Q)\to H^0(S,R^mf_*\mathbb Q)$ is the projection onto the $j=m$ summand and is therefore surjective. The stalk of $R^mf_*\mathbb Q$ at $s$ is $H^m(X_s;\mathbb Q)$ by proper base change [F6], and evaluation at $s$ from the global flat sections $H^0(S,R^mf_*\mathbb Q)$ is injective because $S$ is connected; its image is exactly the monodromy-invariant subspace $H^m(X_s;\mathbb Q)^{\pi_1(S,s)}$. Consequently the composite $H^m(X;\mathbb Q)\to H^m(X_s;\mathbb Q)$ has image the invariant subspace. [F2, F6, given, algebra]

2.1 Weights and strictness identify the invariant subspace. The space $H^m(X,\mathbb Q)$ carries the mixed Hodge structure of [F3], whose weights are at least $m$; the target $H^m(X_s,\mathbb Q)$ is pure of weight $m$, because $X_s$ is a smooth projective variety and the restriction $H^m(X,\mathbb Q)\to H^m(X_s,\mathbb Q)$ is a morphism of mixed Hodge structures by [F6] and [F1]. Strictness [F4] applied to this morphism, whose target has $W_{m-1}=0$ and $W_m=H$, gives that the image of $H^m(X,\mathbb Q)$ equals the image of its minimal weight part $W_mH^m(X,\mathbb Q)$; by [F3] that minimal weight part is the image of $H^m(\overline X,\mathbb Q)\to H^m(X,\mathbb Q)$. Combining with step 1.1, the image of $H^m(\overline X,\mathbb Q)\to H^m(X_s,\mathbb Q)$ equals the image of $H^m(X,\mathbb Q)\to H^m(X_s,\mathbb Q)$, which is the monodromy-invariant subspace. Since $H^m(\overline X,\mathbb Q)$ and $H^m(X_s,\mathbb Q)$ are pure of weight $m$ and the restriction is a Hodge morphism by [F1], its image is a Hodge substructure; this proves that the invariant subspace is a Hodge substructure in the family case. [F1, F3, F4, step 1.1, algebra]

3.1 Base-point independence and flatness of Hodge components in the family case. The restriction $H^m(\overline X,\mathbb Q)\to H^m(X_s,\mathbb Q)$ factors through the canonical map $E:H^m(\overline X,\mathbb Q)\to H^0(S,R^mf_*\mathbb Q)$ followed by evaluation at $s$, and $E$ is independent of $s$. Its kernel $K=\ker E$ is therefore one fixed rational subspace, and evaluation identifies $H^0(S,R^mf_*\mathbb Q)$ with the quotient $H^m(\overline X,\mathbb Q)/K$, carrying the quotient Hodge structure, at every base point simultaneously; this is the asserted one constant Hodge structure on the invariant spaces. Now let $v$ be a global flat section of $H$. Since the invariant space at $s$ is a Hodge substructure by step 2.1, the Hodge components of the value $v_s$ lie again in the invariant space, hence are values of global flat sections $w_1,\dots,w_r$; their sum $\sum_iw_i$ is a global flat section with the same value at $s$ as $v$, so it equals $v$ by connectedness. Since the Hodge decomposition of the invariant fibre is the fixed quotient structure of step 2.1, the section $w_i$ is the Hodge component of $v$ of the corresponding type at every fibre. This proves, in the family case, both that the invariant subspace is a Hodge substructure and that the Hodge components of global flat sections are global flat sections. [F6, step 2.1, algebra]

4.1 Reduction of a general geometric variation to the realization open. Let $U\subseteq S$ be a nonempty Zariski open on which $H$ has an algebraic realization: $H|_U$ is the image of a flat rational idempotent $p$ that is a Hodge morphism at every point, inside $A=\bigoplus_iR^{m_i}(f_i)_*\mathbb Q(r_i)$ for smooth projective $f_i:X_i\to U$; this is the definition of a geometric variation, and each summand is a finite direct sum of weight pieces. By steps 1.1-3.1 applied to each $f_i$ over $U$ (note $U$ is again connected smooth quasiprojective), the statement holds for every $R^{m_i}(f_i)_*\mathbb Q(r_i)$: its invariant part is a constant Hodge substructure and the Hodge components of its global flat sections are flat. Finite direct sums and Tate twists preserve both assertions, because monodromy acts componentwise and the twist changes only the weight; hence the statement holds for $A|_U$. Because $p$ is flat and a Hodge morphism, it commutes with monodromy and with the Hodge decompositions, so the invariant space of $H|_U$ is the image under $p$ of the invariant space of $A|_U$, and it inherits the constant Hodge structure; the Hodge components of a flat section of $H|_U$ are the images under $p$ of the components of a lift and are therefore flat. This proves the assertions for $H|_U$. [F1, step 3.1, algebra]

5.1 Extension from $U$ to $S$. The inclusion $U\hookrightarrow S$ induces a surjection $\pi_1(U,s)\to\pi_1(S,s)$ by [F5]. Therefore a vector of $H_s$ fixed by $\pi_1(U,s)$ is fixed by $\pi_1(S,s)$, so restriction of flat sections $H^0(S,H)\to H^0(U,H|_U)$ is an isomorphism: it is injective because $S$ is connected, and surjective by the preceding sentence. Given a global flat section $v$ of $H$, its restriction to $U$ has, by step 4.1, Hodge components that are flat sections of $H|_U$; each extends uniquely to a global flat section $w_i$ of $H$, and $v-\sum_iw_i$ is a global flat section vanishing on the dense open $U$, hence vanishes by continuity. For each type $(a,b)$, the corresponding $w_i$ takes its values in the continuous Hodge subbundle of that type on $U$. Membership in this subbundle is a closed condition: in a local trivialization its continuously varying projection has kernel describing the complement, and the difference between $w_i$ and its type projection is continuous. This difference vanishes on the dense open $U$, hence on all of $S$. Thus $w_i$ has the prescribed type everywhere; uniqueness of the fiber decomposition makes these global flat sections exactly the Hodge components of $v$. In particular the invariant space $H_s^{\pi_1(S,s)}$, the values of global flat sections, is stable under all Hodge type projections and is a Hodge substructure with the induced pure decomposition. [F5, step 4.1, algebra]

6.1 Independence of the base point for a general variation. Evaluation identifies the rational space $E=H^0(S,H)$ with each invariant fiber $H_s^{\pi_1(S,s)}$. Transport along a path identifies these invariant fibers through this one space $E$, since a global flat section is transported to its own value. Step 5.1 proves that the Hodge components of every global flat section are again global flat sections. On the realization open $U$, steps 3.1 and 4.1 identify these type decompositions with one fixed quotient Hodge structure on $E$, and the closed-membership argument of step 5.1 extends those same types to every point of $S$. Consequently evaluation gives one Hodge structure on $E$ independent of $s$, and transport restricted to the invariant fibers preserves that structure. This assertion concerns the invariant constant subsystem; it does not assume that transport on the full variation preserves the moving Hodge decomposition. Finite sums of pure weights are handled one weight at a time, proving every clause of the statement. [F1, step 3.1, step 4.1, step 5.1, algebra] ∎

## Remarks

The proof uses the typed family, algebraic-open, logarithmic-weight and
ordinary splitting suppliers. Its invariant-type continuity argument does not
assume Hodge-compatible transport on the whole variation. The compactification
image and its Hodge structure are supplied by the full logarithmic construction;
no theorem for arbitrary analytic variations on a punctured disk is used.
