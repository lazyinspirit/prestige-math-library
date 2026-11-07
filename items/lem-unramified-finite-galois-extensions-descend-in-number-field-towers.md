---
id: lem-unramified-finite-galois-extensions-descend-in-number-field-towers
kind: lemma
title: Finite unramified Galois extensions descend in number-field towers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- thm-completion-of-an-absolutely-valued-field
- thm-existence-of-algebraic-closures
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
- cor-ring-of-integers-is-a-dedekind-domain
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- def-inertia-group-of-a-prime
- lem-number-field-extension-ramified-at-finitely-many-places
- lem-degree-of-a-compositum-with-a-galois-extension
- thm-finite-galois-extension-characterizations
- thm-tower-law-for-finite-field-extensions
- thm-decomposition-and-inertia-in-towers
- thm-conjugacy-of-decomposition-and-inertia-groups
- thm-galois-action-on-primes-above-a-prime-is-transitive
- cor-orders-of-decomposition-and-inertia-groups
- thm-algebraic-embedding-extension
- thm-fundamental-theorem-of-algebra-minimum-modulus-proof
- def-absolute-galois-group-of-a-field
- def-compatible-tuple-inverse-limit-of-groups
- def-product-topology
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: AC is used for algebraic closures, embedding extension and compact absolute-inertia fibres. Countable Choice enters the earlier arbitrary valued-field completion construction. DC is retained explicitly, with no further use in this finite descent argument. The finite inertia and compositum arguments are supplied inline.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Proposition3.2.6 and Corollary3.2.7, printed79, and Theorem3.2.13,
      printed81–82, complete proof text read from the recovered189-page PDF.
      Eventual descent is reconstructed through common finite groups, compact
      inertia fibres and finite-prime conjugacy; no class-field theorem is imported.
verification: {}
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $F$ be a number field, fix an algebraic closure $\Omega/F$, and let $K_\infty=\bigcup_{j\ge0}K_j$ for an increasing sequence of finite Galois number-field extensions $K_j/F$ in $\Omega$. Let $E/K_\infty$ be finite Galois and unramified at every finite place in the residue-action-kernel sense. Then there exist an index $b$ and a finite Galois extension $E_b/K_b$ inside $E$ such that $E_bK_\infty=E$ and, for every $j\ge b$, the number-field extension $E_j=E_bK_j$ over $K_j$ is unramified at every finite prime. Restriction gives compatible identifications
$$\operatorname{Gal}(E_j/K_j)\cong\operatorname{Gal}(E_b/K_b)\cong\operatorname{Gal}(E/K_\infty).$$
In particular abelianness, $p$-power degree and the exact finite degree are preserved under this eventual descent, for any prime $p$.

Conversely, a finite Galois extension $A/K_b$ unramified at every finite prime remains unramified after base change to any $K_j$ with $j\ge b$ and to $K_\infty$. Its base-change Galois groups are subgroups of $\operatorname{Gal}(A/K_b)$, so abelianness and $p$-power order are preserved, although degree may drop before stabilization.

For an algebraic extension of $\mathbb Q$, call it **totally real** here when every $\mathbb Q$-embedding into $\mathbb C$ has image in $\mathbb R$. If all $K_j$ and $E$ are totally real, every descended $E_j$ is totally real. Composita of totally real algebraic fields are totally real, so the converse also preserves this condition. This is the additional real-splitting condition appropriate to ordinary class groups in the totally real branch, including $p=2$; finite-place unramifiedness alone is not substituted for it.

There is also a class-field-free consequence. For a prime $p$, let $U_j$ be the compositum in $\Omega$ of all finite abelian Galois $p$-extensions of $K_j$ unramified at every finite prime, and define $U_\infty$ by the same conditions over $K_\infty$. In the totally real branch one may additionally require every defining extension to be totally real, both at finite layers and at infinity. In either version,
$$U_j\subseteq U_{j+1},\qquad U_\infty=\bigcup_jU_j,\qquad \operatorname{Gal}(U_\infty/K_\infty)\cong\varprojlim_j\operatorname{Gal}(U_j/K_j).$$
The last is a topological group isomorphism for Krull topologies and the compatible-tuple subspace of the product topology. No $U_j$ is asserted to be finite or identified with an ideal class group or Hilbert class field. No global Artin norm correspondence, arithmetic norm-kernel trace formula, ordinary-coinvariant control theorem or Iwasawa class-number formula is asserted.

## Facts & Assumptions

**Given:** The fields, tower, finite extension, ramification conditions and choice hypotheses in the Statement.

[A1] AC, Countable Choice and DC are assumed explicitly. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Finite Galois extensions are splitting fields of separable polynomials; their group orders equal their degrees. A finite compositum with one finite Galois factor satisfies $[BL:L]=[B:B\cap L]$, and finite degrees multiply in towers. [[thm-finite-galois-extension-characterizations]] [[lem-degree-of-a-compositum-with-a-galois-extension]] [[thm-tower-law-for-finite-field-extensions]]

[F2] Every finite-place value prolongs to $\Omega$. Absolute decomposition and residue-kernel inertia groups are closed compact groups; at a finite number-field base they restrict surjectively onto the ordinary finite decomposition and inertia groups. Finite unramified Galois extensions of a number field are closed under finite composita. These facts are proved inline in steps 0.1–0.5 from the earlier interfaces below. No restriction-surjectivity assertion over an infinite base is assumed here.

[F3] The absolute Galois topology is the finite-restriction topology from the compatible finite Galois quotients. [[def-absolute-galois-group-of-a-field]]

[F4] For a finite Galois number-field tower, inertia over an intermediate field is its base inertia intersected with the subgroup fixing that field. Restriction on finite decomposition and inertia groups is surjective when the lower intermediate extension is Galois. At finite number-field primes, trivial inertia is equivalent to unramifiedness. [[thm-decomposition-and-inertia-in-towers]] [[cor-orders-of-decomposition-and-inertia-groups]]

[F5] A finite Galois group acts transitively on the primes above a fixed base prime; conjugation transports decomposition and inertia with their residue actions. [[thm-galois-action-on-primes-above-a-prime-is-transitive]] [[thm-conjugacy-of-decomposition-and-inertia-groups]]

[F6] A finite extension of number fields ramifies at only finitely many finite places. [[lem-number-field-extension-ramified-at-finitely-many-places]]

[F7] Under AC a base embedding into an algebraically closed field extends across any algebraic extension; every nonconstant complex polynomial has a complex root. [[thm-algebraic-embedding-extension]] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]

[F8] An inverse limit of groups is the set of compatible tuples. The product topology has a basis restricting finitely many coordinates. [[def-compatible-tuple-inverse-limit-of-groups]] [[def-product-topology]]


[F9] Under Countable Choice an absolutely valued field has a complete valued-field completion; under AC an algebraic closure exists. Finite extensions of any complete nonarchimedean field have unique compatible extending absolute values, with no discrete-value or finite-residue assumption. [[thm-completion-of-an-absolutely-valued-field]] [[thm-existence-of-algebraic-closures]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F10] Under AC, the inverse limit of finite discrete groups is compact Hausdorff. [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]

[F11] Under AC, a number field's integer ring is Dedekind and its localization at a nonzero prime is a DVR. At finite Galois number-field primes, inertia is the residue-action kernel. [[cor-ring-of-integers-is-a-dedekind-domain]] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]] [[def-inertia-group-of-a-prime]]

## Proof

0.1 To prove the prolongation assertion, start with a finite-place value on any algebraic intermediate field $A$. Complete $A$ using [F9], choose an algebraic closure of that completion, and put its compatible absolute value on the union of its finite subextensions, using uniqueness in [F9]. The embedding of $A$ extends across $\Omega/A$ by [F7]; pulling the value back gives the required prolongation. This uses only completion as an arbitrary complete valued field. It makes no assertion that an infinite-field completion is local, discretely valued or has finite residue field. [A1, F7, F9, given, construct]

0.2 By [F1] and [F3], $\operatorname{Gal}(\Omega/A)$ is the inverse limit of the finite Galois groups over any algebraic intermediate field $A$, and is compact Hausdorff by [F10]. For each $z\in\Omega$, its orbit is finite and evaluation on that orbit is locally constant. Consequently each condition $|\sigma z|_w=|z|_w$ is clopen, so their intersection is the closed decomposition group $D_w(\Omega/A)$. In that group, fixing the residue of an integral $z$ is $|\sigma z-z|_w<1$, another clopen finite-orbit condition; intersecting them gives closed compact inertia $I_w(\Omega/A)$. For a directed valued union, valuation rings and maximal ideals are the respective unions, and residue-field maps are injective: the same strict inequality $|z|<1$ is tested in every field containing $z$. Hence the residue field of the union is the union of these residue fields. [A1, F1, F3, F10, given, construct, algebra]

0.3 At a finite number-field subfield $L$, every algebraic integer has value at most one, since otherwise its monic equation would have a unique strictly largest term. The contraction $P$ of the valuation maximal ideal to $O_L$ is nonzero, containing the rational residue prime. By [F11], $(O_L)_P$ is a DVR with fraction field $L$. Its units have value one and its uniformizer has value less than one, so writing each element as a uniformizer power times a unit shows that it is exactly the restricted valuation ring. Its residue field is $O_L/P$. Thus at this finite level, valuation preservation and residue fixing are exactly ordinary finite decomposition and inertia. The residue-union statement in step 0.2 identifies the absolute conditions over a finite number-field base with all the corresponding finite restrictions. [F11, step 0.2, given, algebra]

0.4 Let $L/A$ be a finite Galois extension of number fields and fix a finite decomposition or inertia element $g$ of $L/A$ at the chosen chain of primes. For every finite Galois number field $B/A$ containing $L$, [F4] lifts $g$ to the corresponding group of $B/A$. Extend this automorphism to $\Omega$ by [F7]. It is onto: its image is algebraically closed and contains $A$, so every $A$-polynomial splits in that image; all its roots in the algebraic extension $\Omega/A$ must therefore lie there. The set of absolute automorphisms restricting to $g$ on $L$ and satisfying the finite D/I condition on $B$ is nonempty and clopen. Finitely many such conditions are met on their finite Galois compositum, again by [F4]. Compactness from step 0.2 gives an automorphism satisfying all of them. Step 0.3 and the residue unions identify it with an actual absolute D/I lift of $g$. This proves the finite-base restriction-surjectivity assertion directly. [A1, F1, F4, F7, step 0.2, step 0.3, construct, algebra]

0.5 For two finite Galois extensions of a number field unramified at a specified finite prime, step 0.4 makes its absolute inertia fix both fields. It then fixes their finite Galois compositum, and applying step 0.4 to that compositum shows its relative inertia is trivial. Prolongation in step 0.1 covers every prime, so this proves finite compositum closure. The restriction of the compositum's Galois group embeds in the product of the two groups; thus abelianness and $p$-power order persist. This completes the inline finite facts summarized above. [F1, F4, step 0.1, step 0.4, construct, algebra]

1.1 Choose finitely many generators $\alpha_i$ of $E/K_\infty$ and their distinct minimal polynomials, using the zero generator if $E=K_\infty$. All their coefficients lie in some $K_a$. Since $E/K_\infty$ is normal, all the roots lie in $E$. Let $B$ be their splitting field over $K_a$ inside $E$. It is finite Galois by [F1], and $BK_\infty=E$. The field $J=B\cap K_\infty$ is finite over $K_a$ because it is a subspace of the finite-dimensional extension $B/K_a$. Finitely many generators of $J$ lie in some $K_b$, $b\ge a$. Therefore $B\cap K_j=J$ for all $j\ge b$. Put $E_j=BK_j$, in particular $E_b=BK_b$. By the finite compositum formula [F1], $[E_j:K_j]=[B:J]=[E_b:K_b]$ for every $j\ge b$, and their union is $E$. These are finite Galois extensions, since base extension of a splitting field is again the splitting field of the same separable polynomial list. [A1, F1, given, choose, construct, algebra]

2.1 Restriction $\operatorname{Gal}(E_j/K_j)\to\operatorname{Gal}(E_b/K_b)$ is injective because $E_j=E_bK_j$, and equal finite orders from step 1.1 make it an isomorphism. The same argument between any two levels makes the identifications compatible. An automorphism of $E_b/K_b$ therefore extends uniquely to compatible automorphisms of every $E_j/K_j$, hence to their union fixing $K_\infty$. Conversely a $K_\infty$-automorphism of $E$ preserves the finite normal field $E_b/K_b$ and is determined by its restriction there. Thus these groups are one actual finite group $G=\operatorname{Gal}(E/K_\infty)$. Also $E_j/K_b$ is Galois: both $E_b/K_b$ and $K_j/K_b$ are finite Galois, so their compositum splits the union of their separable defining polynomial lists by [F1]. This normality over the fixed number field $K_b$ will control all prolongations, not just one chosen prime. [F1, step 1.1, construct, algebra]

2.2 Fix a finite-place value $w$ on $\Omega$, and put $H_j=I_w(\Omega/K_j)$. The whole-residue kernel condition is independent of the named base, so $H_j=H_b\cap\operatorname{Gal}(\Omega/K_j)$ and $\bigcap_{j\ge b}H_j=I_w(\Omega/K_\infty)$; these are closed compact groups by step 0.2. For base change, let $A/K_b$ be finite Galois and unramified at the restricted prime, and let $g$ be a relative residue-kernel inertia element of $AK_j/K_j$, or of $AK_\infty/K_\infty$. It preserves $A$, since $A/K_b$ is normal, and its restriction to $A$ preserves the value and fixes its residue field by the injective residue maps of step 0.2. This is finite inertia of $A/K_b$ by step 0.3, hence trivial by [F4]. The element also fixes the named base, so it fixes the whole compositum. Thus base change is unramified at every relative prime in the actual residue-kernel sense. Every such prime prolongs to $\Omega$ by step 0.1. No infinite-base restriction-surjectivity theorem is needed for this argument. [A1, F1, F4, step 0.1, step 0.2, step 0.3, step 1.1, given, construct, algebra]

2.3 For the subfields $E_j\subseteq E$ constructed in step 1.1, suppose now that $E$ and the tower are totally real in the stated embedding sense. Given any $\mathbb Q$-embedding $\tau:E_j\to\mathbb C$, [F7] under [A1] extends it across the algebraic extension $E/E_j$, since $\mathbb C$ is algebraically closed. Total realness of $E$ makes its image lie in $\mathbb R$, so $\tau(E_j)\subseteq\mathbb R$. This holds for every such embedding, proving $E_j$ totally real. Conversely, any embedding of a compositum of totally real algebraic fields into $\mathbb C$ has real image on each factor, so it has real image on their generated field. These arguments quantify every embedding, not a chosen real realization. Thus the real-splitting branch is proved separately; it is not a consequence of finite-place unramifiedness alone. [A1, F7, step 1.1, given, construct, algebra]

3.1 Restriction to the normal field $E_b/K_b$ gives one continuous map $r:H_b\to G$, continuous by [F3]. By step 0.4 at the finite level and the identifications in step 2.1, $r(H_j)$ is exactly $I_w(E_j/K_j)$ inside this fixed $G$. For $g$ in the intersection of all these images, the sets $H_j\cap r^{-1}(g)$ are nonempty closed nested subsets of compact $H_b$. Their intersection is nonempty, since otherwise their open complements would have a finite subcover, contradicting the finite intersection property. Therefore $r(\bigcap_jH_j)=\bigcap_jr(H_j)$. Given unramifiedness of $E/K_\infty$ makes $I_w(\Omega/K_\infty)$ fix $E$: its restriction preserves the value and fixes the residue field of $E$ by step 0.2, hence belongs to the stipulated trivial relative inertia. Thus $\bigcap_{j\ge b}I_w(E_j/K_j)=1$. The subgroups descend in the same finite $G$ and hence stabilize: a strict inclusion strictly lowers finite cardinality. Their stable value must be their intersection, so it is trivial. This gives eventual zero inertia for this fixed $w$, without yet claiming a bound uniform over all prolongations. [A1, F3, step 0.2, step 0.4, step 2.1, step 2.2, given, construct, algebra]

4.1 By [F6], the finite number-field extension $E_b/K_b$ has a finite set $T$ of ramified base primes. Outside $T$, step 2.2 makes every $E_j/K_j$ unramified at all primes above that base prime, uniformly in $j$. For each of the finitely many $v\in T$ choose one prolongation $w_v$ to $\Omega$ by [F2]. Step 3.1 supplies an index after which its inertia is zero. Take the maximum of $b$ and this finite list. If $T$ is empty, the maximum is simply $b$. This selection is finite; no simultaneous choice of a bound over an infinite set of prolongations is made. [F2, F6, step 2.2, step 3.1, choose, construct, algebra]

5.1 Fix $j$ beyond that maximum and $v\in T$. Write $Q$ for the prime of $E_j$ induced by $w_v$. By step 3.1 its inertia over $Q\cap K_j$ is trivial. Any other prime $Q'$ of $E_j$ above $v$ is $\sigma Q$ for some $\sigma\in\operatorname{Gal}(E_j/K_b)$ by [F5] and step 2.1. Since $K_j/K_b$ is Galois, $\sigma$ preserves $K_j$ and normalizes $\operatorname{Gal}(E_j/K_j)$. The finite tower intersections [F4] and the conjugacy formula [F5] therefore give $I(Q'/Q'\cap K_j)=\sigma I(Q/Q\cap K_j)\sigma^{-1}=1$. This covers every prime above $v$, even if the base prime splits into more primes at later levels. Together with step 4.1, every $E_j/K_j$ is everywhere finite-unramified beyond one index. Replace $b$ and $E_b$ by that index and its field; the common identifications in step 2.1 persist. Hence degree, abelianness and $p$-power degree descend exactly as asserted. [F1, F4, F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 For the converse take finite Galois everywhere finite-unramified $A/K_b$. Step 2.2 at every prime proves unramifiedness after each finite and infinite base change. Restriction embeds $\operatorname{Gal}(AK_j/K_j)$ and $\operatorname{Gal}(AK_\infty/K_\infty)$ in $\operatorname{Gal}(A/K_b)$: the compositum is generated by $A$ and the fixed base, and normality of $A/K_b$ makes restriction land in that group. Thus abelianness and $p$-power order persist; unlike the stabilized descent, this does not claim degree is unchanged. If $A$ and the tower are totally real, step 2.3 gives the same for their composita. The case $E=K_\infty$ has trivial common group and may start with the zero generator, and constant towers and empty $T$ cause no exception. The proof uses neither a ramification-index test over a deeply ramified infinite field nor finite-residue classification of an infinite completion. [F1, F2, step 1.1, step 2.2, step 5.1, step 2.3, algebra]

7.1 For the consequence fix $p$. At each finite layer, the finite abelian $p$-extensions defining $U_j$ form a directed family by step 0.5. For two defining extensions over $K_\infty$, steps 5.1 and 6.1 descend both to finite unramified extensions at one common sufficiently large layer. Their finite compositum is unramified by step 0.5, and its base change back to $K_\infty$ is unramified by step 2.2. Thus the infinite-base family is directed as well. Each compositum group embeds in the finite product of the original abelian $p$-groups, and the optional totally real condition is preserved by step 2.3. Their trivial extension is included. Every finite list of elements of the compositum belongs to one such finite family member. Each compositum is Galois over its base, because the defining finite extensions are Galois and every base embedding permutes all their roots, hence preserves their union. Step 6.1 gives $U_j\subseteq U_{j+1}$ and $U_j\subseteq U_\infty$. Conversely, a finite defining extension over $K_\infty$ has the form $E_bK_\infty$ from steps 5.1 and 2.3, with $E_b$ a defining finite extension for $U_b$. The directed union $\bigcup_jU_j$ already contains $K_\infty=\bigcup_jK_j$, so it contains $E_bK_\infty$. Taking their compositum proves $U_\infty=\bigcup_jU_j$. No finiteness of $U_j/K_j$ has been assumed. [F1, step 0.5, step 2.2, step 5.1, step 2.3, step 6.1, construct, algebra]

8.1 Each restriction $\operatorname{Gal}(U_{j+1}/K_{j+1})\to\operatorname{Gal}(U_j/K_j)$ is well-defined: it fixes $K_j$ and preserves $U_j$ by the normality in step 7.1. An automorphism of $U_\infty/K_\infty$ restricts to a compatible tuple. Conversely, a compatible tuple acts consistently on the union in step 7.1 and fixes every $K_j$; its coordinate inverses are compatible too, so it defines an automorphism. This gives exactly the group bijection to [F8]'s inverse limit. Restriction is continuous for finite-set Krull neighborhoods, and its inverse is continuous: a finite subset of the union lies in one $U_j$, so fixing its images is one coordinate condition. The product topology in [F8] has only finitely many coordinate restrictions in each basic neighborhood; taking their largest index gives the converse comparison of these bases. Thus this is the stated topological isomorphism, without pretending its factors are finite groups. AC and CC retain precisely the inline prolongation/compactness scope of steps 0.1–0.5 and AC supplies step 2.3's embedding extension; DC is retained with no added proof use. None of these field-theoretic statements identifies a class group, proves a Hilbert class-field theorem, or establishes an arithmetic norm-kernel trace identity or bounded ordinary-coinvariant comparison. [A1, F3, F8, step 0.1, step 0.5, step 2.3, step 7.1, construct, algebra] ∎
