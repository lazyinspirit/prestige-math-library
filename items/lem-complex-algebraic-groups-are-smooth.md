---
id: lem-complex-algebraic-groups-are-smooth
kind: lemma
title: Complex affine algebraic groups are smooth
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-rational-action-on-affine-variety, def-classical-affine-variety-morphism, def-classical-affine-coordinate-ring, lem-classical-affine-closed-points-are-maximal-ideals, thm-classical-affine-local-ring-is-localization, cor-minimum-tangent-dimension-and-homogeneous-regularity, cor-localisations-of-regular-local-rings-are-regular, thm-regular-equals-smooth-over-perfect-field, cor-smooth-variety-classical-scheme-conventions-agree, thm-proper-ideal-contained-in-maximal-ideal, def-dimension-classical-variety, lem-dimension-finite-union-components, lem-classical-variety-noetherian-components, def-axiom-of-choice, thm-regular-local-rings-are-domains-and-cohen-macaulay, thm-classical-affine-nullstellensatz-correspondence]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "J. S. Milne, Algebraic Geometry (v6.10), §4h Corollaries 4.38-4.40"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
complex affine algebraic group ([[def-rational-action-on-affine-variety]]).
Then every point of $G$ is a regular point of the affine algebraic set $G$;
equivalently $G$ is smooth over $\mathbf C$, and its local rings are regular
local rings. In particular $G$ is a smooth variety of pure dimension
$\dim G$ ([[def-dimension-classical-variety]]).

## Facts & Assumptions

**Given:** AC, a complex affine algebraic group $G$ with identity $e$, multiplication $G\times G\to G$ and inversion $G\to G$; write $A=\mathbb C[G]$ for its coordinate algebra and, for $x\in G$, $\mathfrak m_x=\ker(\operatorname{ev}_x)\subseteq A$.

[F1] *The group laws are morphisms.* $G$ is a nonempty affine algebraic set equipped with a group law whose multiplication $G\times G\to G$ and inversion $G\to G$ are morphisms ([[def-rational-action-on-affine-variety]]); morphisms of affine algebraic sets are the maps pulling regular functions back to regular functions, and they are closed under composition and under pairing with constant maps ([[def-classical-affine-variety-morphism]]).

[F2] *The coordinate ring is finitely generated and reduced.* For an affine algebraic set $X$ the quotient $k[X]=k[x_1,\dots,x_n]/I(X)$ is reduced, and the finite coordinate classes generate it as a $k$-algebra ([[def-classical-affine-coordinate-ring]]).

[F3] *Points are maximal ideals.* For every affine algebraic set $X$ and $A=k[X]$, the map $x\mapsto\mathfrak m_x=\ker(\operatorname{ev}_x)$ is a bijection from $X$ to the maximal ideals of $A$ ([[lem-classical-affine-closed-points-are-maximal-ideals]]).

[F4] *The classical local ring is the localisation at the point ideal.* For $x$ in an affine variety $X$ over an algebraically closed field, the map $A_{\mathfrak m_x}\to\mathcal O_{X,x}$, $a/s\mapsto\text{germ}_x(a/s)$, is an isomorphism of local rings ([[thm-classical-affine-local-ring-is-localization]]).

[F5] *Homogeneous spaces are regular.* A nonempty reduced classical finite-type space over an algebraically closed field $k$ whose automorphism group acts transitively on its point set is regular ([[cor-minimum-tangent-dimension-and-homogeneous-regularity]]).

[F6] *Localisations of regular local rings are regular.* Every prime localisation $R_{\mathfrak p}$ of a regular local ring $R$ is regular ([[cor-localisations-of-regular-local-rings-are-regular]]).

[F7] *Regular equals smooth over a perfect field.* For a finite-type scheme $X$ over a perfect field $k$, $X$ is regular (every local ring is a regular local ring) if and only if the structure morphism $X\to\operatorname{Spec}k$ is smooth ([[thm-regular-equals-smooth-over-perfect-field]]).

[F8] *Classical and scheme smoothness agree over a perfect field.* For a finite-type $k$-scheme with $k$ perfect, classical smoothness in the local-standard-smooth convention, scheme-theoretic smoothness and regularity of all local rings are equivalent ([[cor-smooth-variety-classical-scheme-conventions-agree]]).

[F9] *Pure dimension.* $\dim X$ of a classical variety $X$ is its chain dimension, and $X$ has pure dimension $d$ if every irreducible component of $X$ has dimension $d$ ([[def-dimension-classical-variety]]).

[F10] *Dimension of a finite closed union.* If a Noetherian space $T$ is a finite union of closed subsets $T_1,\dots,T_m$, then $\dim T=\max_i\dim T_i$ ([[lem-dimension-finite-union-components]]).

[F11] *Finitely many components.* Every classical variety is Noetherian and has finitely many irreducible components ([[lem-classical-variety-noetherian-components]]).

[F12] *Proper ideals lie in maximal ideals.* In a nonzero commutative ring every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]], AC).

[F13] *Regular local rings are domains.* Under AC a regular local ring is a domain ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F14] *Irreducible components and prime ideals.* Irreducible closed subsets of an affine algebraic set correspond to proper prime ideals of its coordinate ring, reversing inclusion; consequently the components correspond to minimal primes ([[thm-classical-affine-nullstellensatz-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 For each $g\in G$ the left translation $\lambda_g:G\to G$, $\lambda_g(h)=gh$, is a morphism of affine algebraic sets, because it is the composite of the pairing $(\mathrm{const}_g,\operatorname{id}_G):G\to G\times G$ of a constant map with the identity and the multiplication morphism $G\times G\to G$, and morphisms are closed under composition; the map $\lambda_{g^{-1}}$ is a two-sided inverse of $\lambda_g$ and has the same form, so $\lambda_g$ is an automorphism of $G$. These automorphisms act transitively on the point set, since $\lambda_{yx^{-1}}(x)=y$ for all $x,y\in G$. [F1, given]

1.2 The coordinate algebra $A=\mathbb C[G]$ is a finitely generated reduced $\mathbb C$-algebra; evaluation at a point $x$ defines the maximal ideal $\mathfrak m_x\subseteq A$, the map $x\mapsto\mathfrak m_x$ is a bijection from $G$ onto the maximal ideals of $A$, and the classical local ring is the localisation $\mathcal O_{G,x}\cong A_{\mathfrak m_x}$. [F2, F3, F4]

2.1 Consequently $G$ is a nonempty reduced classical finite-type space, and by step 1.1 its automorphism group acts transitively on its point set; the homogeneous-regularity supplier therefore makes every point of $G$ a regular point, that is, $\mathcal O_{G,x}\cong A_{\mathfrak m_x}$ is a regular local ring for every $x\in G$. [F4, F5, step 1.1, step 1.2]

2.2 Every irreducible component of $G$ has dimension $\dim G$, so $G$ has pure dimension $\dim G$: by $G$ being a classical variety it is Noetherian with finitely many irreducible components $G_1,\dots,G_m$; each $\lambda_g$ is a homeomorphism, hence permutes the irreducible components and preserves their chain dimensions, and the translations act transitively on points, hence on components — given components $G_i,G_j$, choose $x\in G_i$ and $y\in G_j$ lying on no other component (each component has such points because it is irreducible and not contained in the finite union of the others); the automorphism $\lambda_{yx^{-1}}$ carries the component through $x$ onto the component through $y$, so $\lambda_{yx^{-1}}(G_i)=G_j$. Thus all components have one common dimension $d$, and the finite closed cover $G=G_1\cup\dots\cup G_m$ gives $\dim G=\max_i\dim G_i=d$; in particular every irreducible component has dimension $\dim G$. [F9, F10, F11, step 1.1]

3.1 Distinct irreducible components of $G$ are disjoint: if $x$ lay on two components, their ideals would be distinct minimal primes $P,Q\subseteq\mathfrak m_x$ by [F14]. They remain distinct after localization: for $a\in P\setminus Q$, equality of the localized primes would imply $sa\in Q$ for some $s\notin\mathfrak m_x$, contradicting primality of $Q$. These localized primes remain minimal, so the local ring would have two minimal primes, whereas it is a domain by step 2.1 and [F13]. The finitely many components are therefore open and closed, and, being irreducible, are exactly the connected components. Let $C$ be the component containing $e$. For $c\in C$, translation carries the unique component through $e$ onto the unique component through $c$, so $cC=C$. Inversion and conjugation preserve $C$ because they fix $e$ and permute components. Thus $C=G^\circ$ is a closed normal subgroup, its cosets are the components, and $G/G^\circ$ is finite. [F11, F13, F14, step 1.1, step 2.1]

3.2 Every local ring of $A$ is regular: for a maximal ideal $\mathfrak m=\mathfrak m_x$ this is $A_{\mathfrak m}\cong\mathcal O_{G,x}$ by step 1.2 and step 2.1; for an arbitrary prime $\mathfrak p\subseteq A$, a proper ideal lies in a maximal ideal, say $\mathfrak p\subseteq\mathfrak m$, and $A_{\mathfrak p}=(A_{\mathfrak m})_{\mathfrak pA_{\mathfrak m}}$ is a prime localisation of the regular local ring $A_{\mathfrak m}$, hence regular. Since $A$ is a finite-type algebra over the perfect field $\mathbb C$, the equivalence of regularity with smoothness over a perfect field makes the scheme model $\operatorname{Spec}A$ smooth over $\mathbb C$. [F3, F6, F7, F12, step 1.2, step 2.1]

4.1 By step 2.1 every point of $G$ is a regular point of the affine algebraic set $G$ and all its local rings $\mathcal O_{G,x}$ are regular local rings; by step 3.2 the scheme model is regular and smooth over the perfect field $\mathbb C$, and over a perfect field classical smoothness, scheme smoothness and regularity of all local rings agree, so $G$ is smooth over $\mathbf C$; by step 2.2 it has pure dimension $\dim G$. This proves the lemma; the Axiom of Choice is inherited from the named suppliers. [F8, step 2.1, step 2.2, step 3.2] ∎

## Remarks

- The route above is Brion's Lemma 1.3 in the classical register: a group acts transitively on itself by translations, so the regular locus, which is nonempty and open on any nonempty reduced finite-type space, is spread over the whole group. The published homogeneous-regularity corollary packages exactly that argument.
- The Axiom of Choice enters only through the published suppliers: the Nullstellensatz route of the classical local-ring and maximal-ideal identifications, the homogeneous-regularity corollary, and the scheme-theoretic regularity/smoothness theorem.
