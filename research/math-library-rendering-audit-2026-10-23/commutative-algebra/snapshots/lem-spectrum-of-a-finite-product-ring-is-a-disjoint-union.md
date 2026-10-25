---
id: lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
kind: lemma
title: "The spectrum of a finite product ring is the disjoint union of the factor spectra"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-commutative-ring, def-product-ring, def-ring-homomorphism, def-generated-and-principal-ideals, def-quotient-ring, def-prime-and-maximal-ideals, thm-ring-homomorphism-kernel-is-an-ideal, thm-quotient-ring-universal-property, thm-first-isomorphism-theorem-rings, thm-correspondence-theorem-ideals, thm-third-isomorphism-theorem-rings, thm-quotient-is-domain-iff-ideal-prime, thm-quotient-is-field-iff-ideal-maximal, def-prime-spectrum-and-vanishing-sets, def-principal-distinguished-subset-of-spectrum, lem-zariski-closed-set-axioms, def-affine-scheme-spectrum, def-scheme, def-locally-ringed-space, def-morphism-locally-ringed-spaces, def-morphism-affine-schemes-from-ring-map, lem-spectrum-map-stalk-homomorphisms-local, thm-affine-scheme-ring-anti-equivalence, def-principal-localisation, thm-universal-property-of-localisation, cor-localisation-is-unique-up-to-unique-isomorphism, lem-spectrum-localization-open-immersion, thm-sections-basic-open-affine-scheme, thm-global-sections-affine-scheme, thm-stalk-structure-sheaf-prime-localization, def-sheaf-on-topological-space, lem-sheaf-section-over-empty-set-terminal]
justified_by: []
aliases: []
landmark: false
short: "Spec of a finite product is a disjoint union"
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 10.21.2 (tag 00ED): the spectrum of a product of rings"
      url: "https://stacks.math.columbia.edu/tag/00ED"
    - title: "The Stacks Project, Lemma 10.17.6 (tag 00DY) and Section 26.6 (tag 01HX)"
      url: "https://stacks.math.columbia.edu/tag/01HX"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: frontier-35-ten-categories
---

## Statement

Let $r\ge1$ be an integer, let $R_1,\ldots,R_r$ be commutative rings,
let $R=\prod_{i=1}^rR_i$ be their product ring with projections
$\pi_i:R\to R_i$, and for each $i$ let $e_i\in R$ be the element whose
$i$-th coordinate is $1$ and whose other coordinates are $0$
([[def-product-ring]], [[def-commutative-ring]]). Then:

1. Each $e_i$ is an idempotent, $e_ie_j=0$ for $i\ne j$, and
   $e_1+\cdots+e_r=1_R$.
2. Every prime ideal $\mathfrak q\subseteq R$ contains $e_j$ for all but
   exactly one index $j$. The prime ideals of $R$ are exactly the ideals
   $\pi_i^{-1}(\mathfrak p)$ with $i\in\{1,\ldots,r\}$ and
   $\mathfrak p\subseteq R_i$ prime, and each such prime arises from exactly
   one pair $(i,\mathfrak p)$.
3. The distinguished open sets $D(e_1),\ldots,D(e_r)$
   ([[def-principal-distinguished-subset-of-spectrum]]) are pairwise disjoint
   and clopen, $\operatorname{Spec}R=D(e_1)\sqcup\cdots\sqcup D(e_r)$, and the
   morphism induced by $\pi_i$ is an isomorphism of locally ringed spaces from
   $\operatorname{Spec}R_i$ onto the open locally ringed subspace $D(e_i)$ of
   $\operatorname{Spec}R$
   ([[def-affine-scheme-spectrum]], [[def-morphism-locally-ringed-spaces]]).
   Consequently, for $\mathfrak q=\pi_i^{-1}(\mathfrak p)$ the local rings
   satisfy
   $\mathcal O_{\operatorname{Spec}R,\mathfrak q}\cong\mathcal O_{\operatorname{Spec}R_i,\mathfrak p}\cong(R_i)_{\mathfrak p}$.
4. An ideal $\pi_i^{-1}(\mathfrak p)\subseteq R$ is maximal if and only if
   $\mathfrak p\subseteq R_i$ is maximal; hence the maximal ideals of $R$ are
   exactly the ideals $\pi_i^{-1}(\mathfrak m)$ with
   $\mathfrak m\subseteq R_i$ maximal.
5. Restriction to the pieces induces a canonical isomorphism
   $\Gamma(\operatorname{Spec}R,\mathcal O)\cong\prod_{i=1}^r\Gamma(\operatorname{Spec}R_i,\mathcal O)\cong\prod_{i=1}^rR_i$,
   which under the canonical isomorphism
   $\Gamma(\operatorname{Spec}R,\mathcal O)\cong R$ is the identity of
   $R=\prod_{i=1}^rR_i$. In particular the structure sheaf of the disjoint
   union $\coprod_{i=1}^r\operatorname{Spec}R_i$ has global sections
   $\prod_{i=1}^rR_i$.

## Facts & Assumptions

**Given:** An integer $r\ge1$, commutative rings $R_1,\ldots,R_r$, the product
ring $R=\prod_{i=1}^rR_i$ with projections $\pi_i:R\to R_i$, and the coordinate
elements $e_i\in R$ with $(e_i)_i=1$ and $(e_i)_j=0$ for $j\ne i$.

[L1] The product ring has componentwise operations, zero $(0,\ldots,0)$ and
identity $(1,\ldots,1)$; each projection $\pi_i$ is a surjective unital ring
homomorphism; its kernel is the ideal $I_i=\{a\in R:a_i=0\}$, and
$I_i=(1-e_i)R$. A ring homomorphism whose kernel contains an ideal factors
uniquely through the quotient by that ideal
([[def-product-ring]], [[def-ring-homomorphism]],
[[def-generated-and-principal-ideals]],
[[thm-ring-homomorphism-kernel-is-an-ideal]],
[[thm-quotient-ring-universal-property]], [[def-quotient-ring]]).

[L2] A proper ideal $\mathfrak q$ of a commutative ring is prime exactly when
$ab\in\mathfrak q$ implies $a\in\mathfrak q$ or $b\in\mathfrak q$, equivalently
exactly when the quotient ring is an integral domain, and it is maximal exactly
when the quotient ring is a field ([[def-prime-and-maximal-ideals]],
[[thm-quotient-is-domain-iff-ideal-prime]],
[[thm-quotient-is-field-iff-ideal-maximal]]).

[L3] If $J\subseteq\mathfrak q$ are ideals of a ring $A$ and
$\bar{\mathfrak q}$ is the image of $\mathfrak q$ in $A/J$, then the ideals of
$A/J$ correspond bijectively to the ideals of $A$ containing $J$, with
$\mathfrak q$ corresponding to $\bar{\mathfrak q}$ and
$\mathfrak q=\pi^{-1}(\bar{\mathfrak q})$ for the quotient map $\pi$, and
$(A/J)/\bar{\mathfrak q}\cong A/\mathfrak q$; moreover
$A/\ker\varphi\cong\operatorname{im}\varphi$ for every ring homomorphism
$\varphi$ ([[thm-correspondence-theorem-ideals]],
[[thm-third-isomorphism-theorem-rings]],
[[thm-first-isomorphism-theorem-rings]]).

[L4] $D(f)=\{\mathfrak p\in\operatorname{Spec}A:f\notin\mathfrak p\}$ is the
complement of the vanishing set $V((f))$, the sets $V(I)$ are the closed sets
of the Zariski topology, and its basic opens are the sets $D(f)$
([[def-principal-distinguished-subset-of-spectrum]],
[[def-prime-spectrum-and-vanishing-sets]], [[lem-zariski-closed-set-axioms]],
[[def-affine-scheme-spectrum]]).

[L5] For $f\in A$ the principal localisation is $A_f=S_f^{-1}A$ with
$S_f=\{f^n:n\ge0\}$ and localisation map $\lambda_f:A\to A_f$; a unital ring
map out of $A$ that inverts every element of a multiplicative set factors
uniquely through the localisation, and two localisations of $A$ at the same
multiplicative set are canonically isomorphic by a unique isomorphism
compatible with the localisation maps ([[def-principal-localisation]],
[[thm-universal-property-of-localisation]],
[[cor-localisation-is-unique-up-to-unique-isomorphism]]).

[L6] For $f\in A$ the morphism induced by $A\to A_f$ identifies
$\operatorname{Spec}(A_f)$ with the open locally ringed subspace $D(f)$ of
$\operatorname{Spec}A$; and a ring map $\varphi:A\to B$ induces the contraction
$\mathfrak q\mapsto\varphi^{-1}(\mathfrak q)$ on points, whose sheaf map on
$D(f)$ is the localisation $A_f\to B_{\varphi(f)}$, giving a morphism of
locally ringed spaces ([[lem-spectrum-localization-open-immersion]],
[[def-morphism-affine-schemes-from-ring-map]],
[[lem-spectrum-map-stalk-homomorphisms-local]]).

[L7] $\operatorname{Spec}$ is a contravariant functor from commutative rings
to locally ringed spaces: $\operatorname{Spec}(\mathrm{id}_A)$ is the identity
of $\operatorname{Spec}A$ and
$\operatorname{Spec}(\psi\circ\varphi)=\operatorname{Spec}(\varphi)\circ\operatorname{Spec}(\psi)$,
and in particular ring isomorphisms induce isomorphisms of locally ringed
spaces ([[thm-affine-scheme-ring-anti-equivalence]],
[[def-locally-ringed-space]], [[def-morphism-locally-ringed-spaces]],
[[def-affine-scheme-spectrum]], [[def-scheme]]).

[L8] On distinguished opens the structure sheaf has
$\Gamma(D(g),\mathcal O)=A_g$, the restriction along $D(g')\subseteq D(g)$ is
the canonical localisation $A_g\to A_{g'}$, and the canonical map
$A\to\Gamma(\operatorname{Spec}A,\mathcal O)$ is an isomorphism, including for
$A=0$ ([[thm-sections-basic-open-affine-scheme]],
[[thm-global-sections-affine-scheme]]).

[L9] A sheaf satisfies locality and gluing for every open cover, and a sheaf of
sets has exactly one section over the empty set
([[def-sheaf-on-topological-space]],
[[lem-sheaf-section-over-empty-set-terminal]]).

[L10] For $\mathfrak p\in\operatorname{Spec}A$ there is a canonical
isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$
([[thm-stalk-structure-sheaf-prime-localization]]).

## Proof

**Proof technique:** direct.

1.1 Each $e_i$ is an idempotent, $e_ie_j=0$ for $i\ne j$ and $e_1+\cdots+e_r=1_R$, since these are componentwise computations in the product ring; in particular $1-e_i=\sum_{j\ne i}e_j$ is again an idempotent. [L1, algebra]

1.2 The projection $\pi_i$ is a surjective unital ring homomorphism with kernel $I_i=\{a\in R:a_i=0\}$, and $I_i=(1-e_i)R$: every $(1-e_i)a$ has $i$-th coordinate $0$, and conversely every $a$ with $a_i=0$ equals $(1-e_i)a$. Also $\pi_i(e_i)=1_{R_i}$. [L1, algebra]

1.3 Let $e\in A$ be an idempotent and let $\mathfrak q\subseteq A$ be a prime ideal. Then $e\notin\mathfrak q$ if and only if $1-e\in\mathfrak q$: since $e(1-e)=0\in\mathfrak q$, primality gives $e\in\mathfrak q$ or $1-e\in\mathfrak q$, and both cannot occur because then $1=e+(1-e)\in\mathfrak q$, contradicting the properness of a prime ideal. [L2, algebra]

1.4 Let $\mathfrak q\subseteq R$ be an ideal with $I_i\subseteq\mathfrak q$ and let $\mathfrak p=\pi_i(\mathfrak q)\subseteq R_i$ be its image. Then $\mathfrak q=\pi_i^{-1}(\mathfrak p)$ and $R/\mathfrak q\cong R_i/\mathfrak p$: the quotient map $R\to R/I_i$ identifies $R/I_i$ with $R_i$ and carries $\mathfrak q$ to $\mathfrak p$, so the correspondence of ideals and the first isomorphism theorem give both statements. [L1, L3, algebra]

2.1 Every prime ideal $\mathfrak q\subseteq R$ contains $e_j$ for all but exactly one index $j$: if two distinct elements $e_i,e_j$ both lay outside $\mathfrak q$, then $e_ie_j=0\in\mathfrak q$ would force one of them into $\mathfrak q$ by primality; and if all $e_i$ lay in $\mathfrak q$, then $1=e_1+\cdots+e_r\in\mathfrak q$, contradicting properness. [step 1.1, step 1.3, L2, algebra]

2.2 The principal localisation $\lambda_i:R\to R_{e_i}$ and the quotient map $q_i:R\to R/I_i$ are both localisations of $R$ at the multiplicative set $S_i=\{1,e_i\}=\{e_i^n:n\ge0\}$: each sends $e_i$ to a unit, and every unital ring map $\varphi:R\to T$ with $\varphi(e_i)$ a unit satisfies $\varphi(1-e_i)=0$, because $\varphi(e_i)\varphi(1-e_i)=0$ and $\varphi(e_i)$ is invertible, so $(1-e_i)R=I_i\subseteq\ker\varphi$ and $\varphi$ factors uniquely through $q_i$ by the quotient universal property. By uniqueness of localisations there is therefore a unique ring isomorphism $\Theta_i:R_{e_i}\to R/I_i$ with $\Theta_i\lambda_i=q_i$, and composing with the canonical isomorphism $R/I_i\cong R_i$ of step 1.4 gives a ring isomorphism, again written $\Theta_i$, satisfying $\Theta_i\lambda_i=\pi_i$. [step 1.2, step 1.4, L1, L5]

2.3 Let $\mathfrak q\subseteq R$ be a prime ideal with $e_i\notin\mathfrak q$. Then $1-e_i\in\mathfrak q$ by step 1.3, so $I_i=(1-e_i)R\subseteq\mathfrak q$, and step 1.4 applied to $\mathfrak p=\pi_i(\mathfrak q)$ gives $\mathfrak q=\pi_i^{-1}(\mathfrak p)$ and $R/\mathfrak q\cong R_i/\mathfrak p$. Since $R/\mathfrak q$ is an integral domain, so is $R_i/\mathfrak p$, and therefore $\mathfrak p$ is a prime ideal of $R_i$. [step 1.2, step 1.3, step 1.4, L2]

2.4 Conversely, if $\mathfrak p\subseteq R_i$ is a prime ideal, then $\pi_i^{-1}(\mathfrak p)$ is a prime ideal of $R$ with $\pi_i(\pi_i^{-1}(\mathfrak p))=\mathfrak p$ and $e_i\notin\pi_i^{-1}(\mathfrak p)$: the composite $R\to R_i\to R_i/\mathfrak p$ is a surjective ring homomorphism with kernel $\pi_i^{-1}(\mathfrak p)$, so $R/\pi_i^{-1}(\mathfrak p)\cong R_i/\mathfrak p$ is an integral domain and $\pi_i^{-1}(\mathfrak p)$ is prime, the image statement holds because $\pi_i$ is surjective, and $\pi_i(e_i)=1_{R_i}\notin\mathfrak p$. [step 1.2, L2, L3]

2.5 For every index $i$ one has $D(e_i)=V((1-e_i))$, because by step 1.3 a prime $\mathfrak q$ satisfies $e_i\notin\mathfrak q$ exactly when $1-e_i\in\mathfrak q$, and $V((1-e_i))$ is the set of primes containing the principal ideal $(1-e_i)$. Consequently each $D(e_i)$ is open, being a distinguished open, and closed, being a vanishing set, hence clopen. [step 1.3, L4]

3.1 The prime ideals of $R$ are exactly the ideals $\pi_i^{-1}(\mathfrak p)$ with $i\in\{1,\ldots,r\}$ and $\mathfrak p\subseteq R_i$ prime, and each of them determines the pair $(i,\mathfrak p)$ uniquely: existence and primeness are step 2.4, while a prime $\mathfrak q$ equals $\pi_i^{-1}(\mathfrak p)$ for the unique index $i$ with $e_i\notin\mathfrak q$ supplied by step 2.1 and $\mathfrak p=\pi_i(\mathfrak q)$, by step 2.3; and pairs with different indices give different primes, since $\pi_i^{-1}(\mathfrak p)$ contains $e_j$ for $j\ne i$ but not $e_i$, whereas $\pi_j^{-1}(\mathfrak p')$ contains $e_i$ but not $e_j$. [step 2.1, step 2.3, step 2.4]

3.2 The sets $D(e_1),\ldots,D(e_r)$ are pairwise disjoint and cover $\operatorname{Spec}R$: a prime $\mathfrak q$ lies in $D(e_i)$ exactly when $e_i\notin\mathfrak q$, and by step 2.1 this holds for exactly one index. [step 2.1, L4]

3.3 The morphism $\operatorname{Spec}(\pi_i):\operatorname{Spec}R_i\to\operatorname{Spec}R$ induced by $\pi_i$ is an isomorphism of locally ringed spaces onto the open locally ringed subspace $D(e_i)$ of $\operatorname{Spec}R$: by step 2.2 one has $\pi_i=\Theta_i\circ\lambda_i$ with $\Theta_i$ a ring isomorphism, so functoriality gives $\operatorname{Spec}(\pi_i)=\operatorname{Spec}(\lambda_i)\circ\operatorname{Spec}(\Theta_i)$, where $\operatorname{Spec}(\Theta_i)$ is an isomorphism of locally ringed spaces and the morphism induced by $\lambda_i$ is identified with the open locally ringed subspace $D(e_i)$ by the principal-localisation description. [step 2.2, L6, L7]

4.1 For $\mathfrak q=\pi_i^{-1}(\mathfrak p)$ the isomorphism of step 3.3 induces an isomorphism of local rings $\mathcal O_{\operatorname{Spec}R,\mathfrak q}\cong\mathcal O_{\operatorname{Spec}R_i,\mathfrak p}$, which the stalk formula further identifies with $(R_i)_{\mathfrak p}$; in particular the local rings of $\operatorname{Spec}R$ are exactly those of the factor spectra. [step 3.1, step 3.3, L10]

4.2 For $\mathfrak q=\pi_i^{-1}(\mathfrak p)$ step 1.4 gives $R/\mathfrak q\cong R_i/\mathfrak p$, so $\mathfrak q$ is maximal in $R$ exactly when $R_i/\mathfrak p$ is a field, that is, exactly when $\mathfrak p$ is maximal in $R_i$; together with step 3.1 this describes all the maximal ideals of $R$. [step 1.4, step 3.1, L2]

4.3 Restricting sections to the pairwise disjoint clopen pieces gives a ring homomorphism $\rho:\Gamma(\operatorname{Spec}R,\mathcal O)\to\prod_{i=1}^r\Gamma(D(e_i),\mathcal O)$, and the sheaf axioms show that $\rho$ is bijective: it is injective because the $D(e_i)$ cover $\operatorname{Spec}R$, so a section is determined by its restrictions, and it is surjective because sections over the pieces are compatible on the empty overlaps, a sheaf having exactly one section over the empty set, and therefore glue to a global section. Composing $\rho$ with the isomorphisms $\Gamma(D(e_i),\mathcal O)\cong\Gamma(\operatorname{Spec}R_i,\mathcal O)$ induced by step 3.3 and with the canonical isomorphisms $\Gamma(\operatorname{Spec}R_i,\mathcal O)\cong R_i$ gives an isomorphism $\Gamma(\operatorname{Spec}R,\mathcal O)\cong\prod_{i=1}^rR_i$. [step 3.2, step 3.3, L8, L9]

5.1 The $i$-th component of the isomorphism of step 4.3 is the composite of the restriction $\Gamma(\operatorname{Spec}R,\mathcal O)\to\Gamma(D(e_i),\mathcal O)$, which is the canonical localisation $R\to R_{e_i}$, with the isomorphism $\Theta_i$ of step 2.2; since $\Theta_i\lambda_i=\pi_i$, this component is $\pi_i$ under the canonical identifications $\Gamma(\operatorname{Spec}R,\mathcal O)\cong R$ and $\Gamma(\operatorname{Spec}R_i,\mathcal O)\cong R_i$, so the isomorphism of step 4.3 is the identity of $R=\prod_{i=1}^rR_i$. In particular the global sections of the disjoint union $\coprod_{i=1}^r\operatorname{Spec}R_i$ are $\prod_{i=1}^rR_i$, as asserted. [step 2.2, step 3.3, step 4.3, L8]

6.1 Claim 1 is step 1.1, claim 2 is step 3.1, claim 3 is steps 2.5, 3.2, 3.3 and 4.1, claim 4 is step 4.2, and claim 5 is steps 4.3 and 5.1; no step selects an element from a family, so the argument uses no choice. [step 1.1, step 2.5, step 3.1, step 3.2, step 3.3, step 4.1, step 4.2, step 4.3, step 5.1, algebra] ∎
