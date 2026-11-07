---


id: def-totally-real-ray-class-group-and-norm-character
kind: definition
title: "Strict ray class group and norm on the Deligne–Ribet ideal space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-global-field-modulus
  - def-ray-class-group
  - lem-ray-class-congruence-subgroup-well-defined
  - thm-ray-class-exact-sequence
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-global-artin-reciprocity-and-norm-index
  - lem-strict-ray-class-norm-congruence
  - def-absolute-norm-of-an-ideal
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ideal-norm-is-multiplicative
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-ray-class-group-finite
  - thm-tychonoff
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
dependency_level: 21
justified_by: []
axiom_use: >-
  AC supplies compactness of the finite ray-class product in the exact norm-image proof. The Artin/cyclotomic identification is explicitly conditional on a supplied compatible correspondence; this definition does not prove global class-field existence. The original AC, Countable Choice, and DC assumptions are retained.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
proof_strategy: direct
verification: {}
---
## Definition

Assume AC, Countable Choice, and DC. Let $K\ne\mathbb Q$ be totally real, with ring of integers $\mathcal O_K$. For a nonzero integral conductor $\mathfrak f$, the strict ray class group $\operatorname{Cl}^+_{\mathfrak f}(K)$ is the group of fractional ideals prime to $\mathfrak f$, modulo principal ideals $(\alpha)$ with $\alpha$ totally positive and $\alpha\equiv1\pmod{\mathfrak f}$. For each conductor $\mathfrak f$, let $I_{\mathfrak f}$ be the monoid of fractional ideal classes modulo the strict congruence relation, let $A_{\mathfrak f}$ be its submonoid of integral ideal classes, and let $G_{\mathfrak f}$ be the group of invertible elements of $A_{\mathfrak f}$; this group is the strict ray class group. Under the reduction maps as conductors vary, define $\mathcal I_K=\varprojlim_{\mathfrak f}I_{\mathfrak f}$, $\mathcal A_K=\varprojlim_{\mathfrak f}A_{\mathfrak f}$, and $\mathcal G_K=\varprojlim_{\mathfrak f}G_{\mathfrak f}$. The absolute ideal norm extends to a continuous multiplicative map $N:\mathcal I_K\to\widehat{\mathbb Q}$ with $N(\mathcal A_K)\subseteq\widehat{\mathbb Z}$ and $N(\mathcal G_K)=\mathcal N_K\subseteq\widehat{\mathbb Z}^{\times}$, where the exact closed norm-image subgroup is
$$\mathcal N_K=\varprojlim_{m\ge1}\operatorname{im}\left(\operatorname{Cl}^+_{m\mathcal O_K}(K)\xrightarrow{\,N\bmod m\,}(\mathbb Z/m\mathbb Z)^\times\right).$$
The inverse limit is over divisibility of positive rational integers. This subgroup need not be the full profinite unit group. If a compatible Artin correspondence identifies $\mathcal G_K$ with $\operatorname{Gal}(K^{\mathrm{ab}}/K)$ with arithmetic Frobenius normalization, then $\mathcal N_K$ identifies, through the cyclotomic character, with
$$\operatorname{Gal}\bigl(\mathbb Q(\mu_\infty)/(K\cap\mathbb Q(\mu_\infty))\bigr)\subseteq\widehat{\mathbb Z}^{\times}.$$

If the ray-class field exists with the stated norm subgroup, global Artin reciprocity identifies $\operatorname{Cl}^+_{\mathfrak f}(K)$ with its Galois group.

## Facts & Assumptions

**Given:** AC, Countable Choice, and DC as explicitly declared in the Definition; a totally real number field $K\ne\mathbb Q$ and its strict ray-class and ideal-space data. Artin identifications below are conditional exactly as in the Definition.

[F1] The strict ray class group is the quotient of ideals prime to the finite modulus by totally positive principal ideals congruent to $1$ modulo that modulus. [[def-ray-class-group]] [[def-global-field-modulus]]

[F2] The ray congruence relation is well-defined, and the ray-class exact sequence identifies its finite residue/sign kernel and ordinary ideal-class quotient. [[lem-ray-class-congruence-subgroup-well-defined]] [[thm-ray-class-exact-sequence]]

[F3] The continuous norm extension uses the norm congruence modulo $N(\mathfrak d^{-1})f$, where $\mathfrak d$ is a common denominator ideal, for ideals congruent modulo $f$. [[lem-strict-ray-class-norm-congruence]]

[F4] The ray-class Galois identification is conditional on the current global class-field existence and Artin-reciprocity interfaces. [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-global-artin-reciprocity-and-norm-index]]

[A1] AC supplies compactness of the finite ray-class product in step 3.1; AC and Countable Choice are the declared hypotheses of the ray-class exact-sequence interface. The original AC, Countable Choice, and DC hypotheses remain in force. Artin identifications are conditional on the supplied correspondence, rather than imported as a proof of global class-field existence. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F5] Strict ray class groups are finite. AC gives compactness of their product with the discrete topologies. [[thm-ray-class-group-finite]] [[thm-tychonoff]]

[F6] Nonzero ideals factor as finite products of prime ideals under the declared AC; their prime-to-modulus classes generate each ray class group. [[thm-unique-factorisation-of-ideals-in-dedekind-domains]] [[def-ray-class-group]]

## Proof

**Given:** The data and hypotheses of the Definition; the Artin correspondence is assumed only for the assertions that explicitly say so.

1.1 The strict quotient and its reduction maps are well-defined by [F1]–[F2]. The norm congruence [F3] makes the absolute ideal norms compatible on finite congruence quotients, so their inverse limit defines the stated continuous multiplicative map on the ideal space. Integral classes have integral profinite norms. For invertible classes every finite norm residue is a unit, giving $N(\mathcal G_K)\subseteq\widehat{\mathbb Z}^{\times}$. This last assertion is containment, not surjectivity onto all units. [F1, F2, F3, given]

2.1 Rational conductors are cofinal among integral conductors: every nonzero integral ideal contains a nonzero rational integer and therefore contains $m\mathcal O_K$ for some $m\ge1$. Thus $\mathcal G_K=\varprojlim_m\operatorname{Cl}^+_{m\mathcal O_K}(K)$. The finite norm map modulo $m$ is well-defined: a totally positive generator congruent to $1$ modulo $m\mathcal O_K$ has field norm congruent to $1$ modulo $m$, by the determinant of multiplication, and its positive principal ideal norm equals that field norm. The norm of a fractional ideal prime to $m$ is a unit modulo $m$. Write $H_m$ for this finite map's image. The reductions send $H_n$ into $H_m$ when $m\mid n$, so $\varprojlim_mH_m$ is a well-defined subgroup of $\widehat{\mathbb Z}^{\times}$. [F1, F2, F3, step 1.1, algebra]

3.1 Every norm from $\mathcal G_K$ belongs to $\varprojlim_mH_m$. Conversely, let $h=(h_m)_m$ lie in that limit. In the compact product $\prod_m\operatorname{Cl}^+_{m\mathcal O_K}(K)$, impose the closed conditions that the coordinates reduce compatibly and their norms equal $h_m$. Any finite set of these conditions is satisfied: take an integer $n$ divisible by every index mentioned, choose a class at level $n$ of norm $h_n$, and project it to those finitely many levels; fill the other coordinates by their identity classes. Hence the conditions have the finite intersection property, and compactness [F5] supplies a compatible point satisfying all of them. Its norm is $h$. This proves the exact equality $N(\mathcal G_K)=\varprojlim_mH_m$; as a closed subgroup of a product of finite groups, this norm image is closed. [F5, step 2.1, construct]

4.1 Suppose now that the compatible Artin correspondence stipulated in the Definition is supplied. For a prime ideal $\mathfrak p$ prime to $m$, arithmetic Frobenius acts on $\mu_m$ by $\zeta\mapsto\zeta^{N\mathfrak p}$. Prime ideal classes generate the finite ray quotient by [F6], so its norm modulo $m$ is precisely the restriction of the cyclotomic character of that Artin correspondence. Passing to inverse limits identifies $N$ on $\mathcal G_K$ with the full cyclotomic character on $\operatorname{Gal}(K^{\mathrm{ab}}/K)$. Its image is the Galois group of $K\mathbb Q(\mu_\infty)/K$, which restriction identifies with $\operatorname{Gal}(\mathbb Q(\mu_\infty)/(K\cap\mathbb Q(\mu_\infty)))$. The onto restriction here is within the supplied Galois/Artin correspondence under the declared AC. The finite ray-class Galois identification follows under its original conditional hypotheses [F4]. No class-field existence theorem is proved or silently assumed for the unconditional norm-image construction in steps 1.1–3.1. [F4, F6, A1, step 3.1, algebra] ∎

## Correction and scope

Surjectivity onto all of $\widehat{\mathbb Z}^{\times}$ is false in general. For $K=\mathbb Q(\sqrt5)$, every ideal prime to $5$ has norm a square modulo $5$: a split rational prime has $p\equiv1$ or $4\pmod5$, an inert prime ideal has norm $p^2$, and the ramified prime $5$ is excluded. The same holds for fractional ideals by multiplicativity and inversion. Hence the norm image modulo $5$ is contained in $\{1,4\}$ and misses $2$. The corrected subgroup $\mathcal N_K$ retains the full exact norm image for every original field; the cyclotomic description is asserted precisely under the stated compatible Artin correspondence. No norm-surjectivity theorem is imported from the source citations.

## Definition references

[[def-global-field-modulus]]

[[def-ray-class-group]]

[[lem-ray-class-congruence-subgroup-well-defined]]

[[thm-ray-class-exact-sequence]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[thm-global-artin-reciprocity-and-norm-index]]

[P. Deligne and K. A. Ribet, §§2.1–2.12](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
