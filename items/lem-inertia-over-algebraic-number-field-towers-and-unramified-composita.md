---
dependency_level: 1
id: lem-inertia-over-algebraic-number-field-towers-and-unramified-composita
kind: lemma
title: Inertia and unramified composita over algebraic number-field towers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-countable-choice
- def-absolute-galois-group-of-a-field
- thm-completion-of-an-absolutely-valued-field
- thm-existence-of-algebraic-closures
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-algebraic-embedding-extension
- thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
- cor-ring-of-integers-is-a-dedekind-domain
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- def-inertia-group-of-a-prime
- thm-decomposition-and-inertia-in-towers
- cor-orders-of-decomposition-and-inertia-groups
- lem-degree-of-a-compositum-with-a-galois-extension
- thm-finite-galois-extension-characterizations
- thm-tower-law-for-finite-field-extensions
proof_strategy: direct
axiom_use: AC supplies algebraic closures, embedding extensions and compactness of
  absolute Galois groups. CC is retained explicitly for metric completion of an arbitrary
  valued field; no local compactness or finite-residue assertion is made about an
  infinite completion.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Algebraic Number Theory
    url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
    locator: Chapter VIII, finite decomposition/inertia in towers, Propositions 8.10–8.13;
      infinite-base passage reconstructed here by finite descent and compact fibres.
  - title: B. Conrad, Ostrowski for number fields and completion of absolutely valued
      fields
    url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
    locator: Sections 5–6, arbitrary valued-field completion and finite extensions
      of complete nonarchimedean fields.
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: Section 3, printed116–117, maximal unramified and p-ramified module constructions;
      arithmetic torsion is not used.
verification: {}
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $F$ be a number field, fix an algebraic closure $\Omega/F$, and let $K=\bigcup_{n\ge1}K_n$ for an increasing sequence of finite Galois number-field extensions $K_n/F$ in $\Omega$. Let $E/K$ be finite Galois inside $\Omega$. Fix a nonarchimedean absolute value $w$ on $\Omega$ prolonging a normalized finite place of $F$. For $F\subseteq A\subseteq\Omega$ define
$$D_w(\Omega/A)=\{\sigma\in\operatorname{Gal}(\Omega/A):|\sigma x|_w=|x|_w\text{ for every }x\in\Omega\},$$
and let $I_w(\Omega/A)$ be its kernel on the residue field $\kappa_w(\Omega)$. Define $D_w(E/K)$ by preservation of the restricted value on $E$, and let $I_w(E/K)$ be its kernel on $\kappa_w(E)$. These are the actual residue-action inertia groups, not groups defined solely by a ramification index. Then $D_w(\Omega/A)$ and $I_w(\Omega/A)$ are closed compact groups, and restriction gives surjections
$$D_w(\Omega/K)\longrightarrow D_w(E/K),\qquad I_w(\Omega/K)\longrightarrow I_w(E/K).$$
Every finite-place absolute value on any algebraic intermediate field prolongs to $\Omega$. In particular, requiring these relative inertia groups to be trivial at every prime over a specified finite place is equivalent to requiring all the corresponding absolute inertia groups to fix $E$.

Finite Galois extensions of $K$ unramified, in this residue-kernel sense, at every finite prime outside any fixed set $S$ of finite places of $F$ are closed under finite composita. For any prime $p$, the finite abelian Galois $p$-extensions with that condition therefore form a directed family. Their compositum $M$ is Galois over $F$, $\operatorname{Gal}(M/K)$ is compact abelian pro-$p$, and restriction gives an exact sequence of profinite groups
$$1\longrightarrow\operatorname{Gal}(M/K)\longrightarrow\operatorname{Gal}(M/F)\longrightarrow\operatorname{Gal}(K/F)\longrightarrow1.$$
The unramified condition is preserved by every $F$-automorphism of $\Omega$. Taking $S=\varnothing$ or $S$ the places above $p$ gives the unramified and p-ramified constructions respectively. No local compactness, finite residue field, discreteness, or equality of field degree with ramification times residue degree is assumed at an infinite-field completion.

## Facts & Assumptions

**Given:** AC, Countable Choice, $F$, $\Omega$, the finite Galois tower, $E/K$, and the places in the Statement.

[A1] AC is available for algebraic closures, embedding extension and inverse-limit compactness. Countable Choice is retained for the general metric-completion construction. ([[def-axiom-of-choice]], [[def-countable-choice]])

[F1] Under Countable Choice an absolutely valued field has a complete valued-field completion. Under AC an algebraic closure exists, and a field embedding into an algebraically closed field extends across an algebraic extension. ([[thm-completion-of-an-absolutely-valued-field]], [[thm-existence-of-algebraic-closures]], [[thm-algebraic-embedding-extension]])

[F2] A finite extension of any complete nonarchimedean field has a unique extending absolute value, given by its norm, without separability or discrete-value hypotheses. ([[thm-unique-extension-of-a-nonarchimedean-absolute-value]])

[F3] Absolute Galois automorphisms are compatible finite Galois automorphisms. The inverse limit of finite discrete groups is Hausdorff and, under AC, compact. ([[def-absolute-galois-group-of-a-field]], [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]])

[F4] Under AC, a number field's integer ring is Dedekind, and its localization at a nonzero prime is a discrete valuation ring. At a finite Galois number-field level the ordinary decomposition group stabilizes the prime and its inertia kernel acts trivially on the residue field; unramifiedness is equivalent to trivial inertia there. ([[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]], [[def-inertia-group-of-a-prime]], [[cor-orders-of-decomposition-and-inertia-groups]])

[F5] For finite Galois number-field towers $B/L/A$, restriction is surjective on the finite decomposition and inertia groups for a fixed chain of primes. ([[thm-decomposition-and-inertia-in-towers]])

[F6] For finite field extensions inside a common overfield, one finite Galois factor gives the compositum-degree formula; finite degrees multiply in towers. Finite Galois extensions are precisely splitting fields of separable polynomials. ([[lem-degree-of-a-compositum-with-a-galois-extension]], [[thm-finite-galois-extension-characterizations]], [[thm-tower-law-for-finite-field-extensions]])

## Proof

1.1 Let $A$ be an algebraic intermediate field and start with any nonarchimedean absolute value on it over a finite place of $F$. By [F1] complete $A$ and choose an algebraic closure $L$ of its completion. The unique absolute values on the finite subextensions of $L$ agree on inclusions by [F2]; their union is a nonarchimedean absolute value on $L$. By [F1] the embedding $A\to L$ extends across $\Omega/A$, which is algebraic. Pulling back gives a prolongation to $\Omega$. Thus every prime in the Statement, and every relative prime of $E$, is covered; all prolongations, rather than one selected subclass, remain quantified. The completion here is used solely as an arbitrary complete valued field in [F2]. [A1, F1, F2, given, construct]

1.2 For any $A$, characteristic zero implies that $\Omega$ is the union of its finite Galois subextensions over $A$. Compatible automorphisms of those subextensions extend uniquely to their union, so [F3] identifies $\operatorname{Gal}(\Omega/A)$ with their inverse limit and makes it compact Hausdorff under AC. Each $x\in\Omega$ has a finite orbit, and $\sigma\mapsto\sigma x$ is locally constant for the finite-restriction topology. Therefore each condition $|\sigma x|_w=|x|_w$ is clopen and their intersection $D_w(\Omega/A)$ is closed. Within $D_w(\Omega/A)$, fixing the residue of a valuation-integral $x$ means $|\sigma x-x|_w<1$, another clopen condition on the finite orbit. Their intersection $I_w(\Omega/A)$ is closed as well. Both are compact. [A1, F3, F6, construct, algebra]

1.3 If $B=\bigcup_i B_i$ is a directed union of subfields with the restricted value, its valuation ring and maximal ideal are the respective unions of those for the $B_i$: membership is tested on the value of a representative element, which belongs to some $B_i$. The induced residue-field maps are injective, since the strict inequality $|x|<1$ is the same in each field. Every residue has such a representative, so $\kappa_w(B)=\bigcup_i\kappa_w(B_i)$. This applies both to finite Galois subfields exhausting $\Omega$ over a finite base and to the fields exhausting $E$ below. [given, construct, algebra]

1.4 Choose a finite generating list $\alpha_i$ of $E/K$, taking $\alpha_1=0$ if $E=K$, and their minimal polynomials. Their finitely many coefficients lie in some $K_n$. Since $E/K$ is normal, all roots of these polynomials lie in $E$. Let $E_n$ be their splitting field over $K_n$ inside $E$. The product of the distinct minimal polynomials is separable in characteristic zero, so this is finite Galois by [F6], and $E_nK=E$. The intersection $J=E_n\cap K$ is finite over $K_n$, since $E_n$ is. A finite generating set for $J$ lies in some $K_N$, with $N\ge n$. Thus $E_n\cap K_m=J$ for every $m\ge N$. Put $E_m=E_nK_m$, including $E_N=E_nK_N$. The finite compositum formula in [F6] gives $[E_m:K_m]=[E_n:J]=[E_N:K_N]$ for all $m\ge N$. [F6, given, construct, algebra]

2.1 For a finite number field $L$ inside $\Omega$, its integer ring lies in the valuation ring: a root $x$ of a monic integer polynomial cannot have $|x|_w>1$, because its leading term would have strictly larger value than every other term. The contraction $P$ of the valuation maximal ideal is nonzero, since it contains the rational residue prime. By [F4], $(\mathcal O_L)_P$ is a DVR with fraction field $L$; the latter equality follows by clearing an integer polynomial: if $c_dx^d+\cdots+c_0=0$, with integer coefficients and $c_d\ne0$, then $c_dx$ satisfies the monic polynomial obtained after multiplying by $c_d^{d-1}$. The units of this DVR have value one, and a uniformizer has value less than one. Writing $x$ as a uniformizer power times a unit shows that this DVR is exactly the restricted valuation ring. Its residue field is $\mathcal O_L/P$, since $P$ is maximal. Thus at a finite Galois number-field level preservation of the value is the same as stabilizing $P$, and trivial residue action is exactly the finite inertia in [F4]. By step 1.3, the absolute D/I conditions over a finite number-field base are precisely all these compatible finite D/I conditions. [F4, step 1.3, algebra]

2.2 Each $E_m/K_m$ and $E_N/K_N$ is Galois by [F6]. Restriction $\operatorname{Gal}(E_m/K_m)\to\operatorname{Gal}(E_N/K_N)$ is injective, since $E_m=E_NK_m$, and the finite orders are equal by step 1.4, so it is an isomorphism. These isomorphisms commute with restriction. An automorphism of $E_N/K_N$ therefore extends uniquely and compatibly to every $E_m$, hence to their union $E$ fixing $K$. Conversely a $K$-automorphism of $E$ preserves the normal field $E_N/K_N$ and is determined by its restriction there. Thus all these groups are the same finite group $G=\operatorname{Gal}(E/K)$ in a proved common identification. [F6, step 1.4, construct, algebra]

3.1 Fix a number field $A$ in $\Omega$, a finite Galois $L/A$, and an element $t$ of its decomposition group, or of its inertia group, at the chosen prime. For any finite Galois $B/A$ containing $L$, [F5] supplies a corresponding finite D/I element on $B$ restricting to $t$. By [F1] it extends to an embedding of $\Omega$ into itself over $A$. This embedding is onto: its image is algebraically closed and contains $A$, so every $A$-polynomial splits in that image; all its roots in the algebraic field $\Omega/A$ consequently belong to the image. Hence the set of absolute automorphisms whose restriction to $B$ has the desired D/I property and whose restriction to $L$ is $t$ is nonempty and closed. Finitely many such conditions are met by their finite Galois compositum using [F5]. Compactness from step 1.2 supplies a common automorphism. Steps 1.3 and 2.1 identify it with an absolute D/I lift of $t$. Thus restriction from absolute D/I to finite D/I is actually surjective at every finite number-field base; no inverse-limit surjectivity has been assumed. [F1, F5, F6, step 1.2, step 1.3, step 2.1, construct]

3.2 Under step 2.2, every $g\in G$ acts compatibly on every $E_m$. Since $E=\bigcup_{m\ge N}E_m$, preservation of the valuation on $E$ is equivalent to preservation on every $E_m$. By step 1.3, its residue field is the union of their residue fields; fixing that residue field is equivalent to fixing each of them. Consequently, inside the common $G$, $D_w(E/K)=\bigcap_{m\ge N}D_w(E_m/K_m)$ and $I_w(E/K)=\bigcap_{m\ge N}I_w(E_m/K_m)$. These identities use valuation and residue unions, not completions or ramification indices over $K$. [step 1.3, step 2.2, algebra]

4.1 Let $H_m$ be $D_w(\Omega/K_m)$, or respectively $I_w(\Omega/K_m)$. Directly from their definitions, $H_m=H_N\cap\operatorname{Gal}(\Omega/K_m)$: valuation preservation, and fixing the whole residue field of $\Omega$, are independent of the named base. Their intersection is the corresponding absolute group over $K$. They are descending closed compact groups by step 1.2. Restriction to the normal field $E_N/K_N$ is one common continuous map $r:H_N\to G$. By step 3.1 and the identification in step 2.2, $r(H_m)$ is the corresponding finite D/I group of $E_m/K_m$. If $g$ belongs to all these images, the closed fibres $H_m\cap r^{-1}(g)$ are nonempty, nested and contained in compact $H_N$. They have a common point, so $g\in r(\bigcap_m H_m)$. The reverse inclusion holds for every map. Therefore image of this intersection equals intersection of these images. Combining with step 3.2 proves both asserted surjections and the actual unramified criterion. [A1, step 1.2, step 3.1, step 2.2, step 3.2, construct, algebra]

5.1 Suppose two finite Galois extensions $E_1/K,E_2/K$ are unramified at a specified prime. For every prolongation $w$ to $\Omega$, step 4.1 makes $I_w(\Omega/K)$ fix each $E_i$, so it fixes their compositum. Applying step 4.1 to that finite Galois compositum proves its actual relative inertia is trivial. Step 1.1 ensures every relative prime is counted this way. The argument applies separately at every prime, hence to all primes outside $S$. Restriction embeds the compositum Galois group into the product of the two groups, so abelianness and p-power order are preserved. The trivial extension $K/K$ also qualifies, so this proves that the required finite abelian Galois p-extensions form a nonempty directed family. [F6, step 1.1, step 4.1, construct, algebra]

6.1 An $F$-automorphism $\sigma$ of $\Omega$ preserves $K$, because each $K_n/F$ is normal. It sends $w$ to $w^\sigma(x)=w(\sigma^{-1}x)$, inducing an isomorphism of valuation rings and residue fields. Thus $\sigma I_w(\Omega/K)\sigma^{-1}=I_{w^\sigma}(\Omega/K)$, and similarly for D. The restriction to $F$ is unchanged, so being over a place outside $S$ is preserved. Step 4.1 therefore shows that $\sigma$ permutes the defining family of extensions and preserves its compositum $M$. This proves normality of $M/F$; separability follows from characteristic zero. [F6, step 4.1, step 5.1, algebra]

7.1 Every finite collection of elements of $M$ belongs to one extension in this directed family, by step 5.1. Hence its restriction quotients identify $\operatorname{Gal}(M/K)$ with the inverse limit of the finite abelian p-groups; it is compact abelian pro-$p$ under AC. Its residue-kernel inertia at any required prime is trivial: an element of that kernel restricts to finite inertia on each family member, by the injective residue maps of step 1.3; those finite groups are trivial by step 4.1, so the element fixes every family member and hence $M$. Each element of a normal separable extension lies in a finite Galois subextension generated by all roots of its minimal polynomial. Thus $M/F$ and $K/F$ have profinite Galois groups by [F3]. For any $\tau\in\operatorname{Gal}(K/F)$, [F1] extends its embedding of $K$ across $\Omega/K$; the extension is an automorphism of $\Omega$ by the onto argument in step 3.1. Step 6.1 lets it restrict to $M$, giving a lift of $\tau$. Thus restriction onto $\operatorname{Gal}(K/F)$ is surjective, and its kernel is exactly $\operatorname{Gal}(M/K)$. The restriction map is continuous for the finite-restriction topology, and the included kernel has its closed-subgroup topology, since both Krull topologies have the basis given by fixing finite subsets of $M$. This is the stated exact sequence of profinite groups. [A1, F1, F3, step 1.3, step 3.1, step 4.1, step 5.1, step 6.1, construct, algebra]

8.1 Steps 1.1 and 4.1 cover every finite place and every prolongation; steps 5.1–7.1 give the actual abelian pro-p constructions and their invariance. All uses of finite D/I and their finite-field ramification theory occur only at number-field levels in steps 2.1 and 3.1. At the infinite level the proof uses residue kernels, unions, and closed compact fibres. AC is used in the stated embedding, algebraic-closure and compactness steps, and CC in step 1.1's metric completion. Neither torsion nor any arithmetic Kummer, Deligne–Ribet or main-conjecture equality is used or concluded. [A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎
