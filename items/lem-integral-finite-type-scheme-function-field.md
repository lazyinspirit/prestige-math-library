---
id: lem-integral-finite-type-scheme-function-field
kind: lemma
title: "Function field of an integral finite-type scheme"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - thm-affine-scheme-ring-anti-equivalence
  - def-geometrically-reduced-integral-connected-fibre
  - thm-stalk-structure-sheaf-prime-localization
  - def-localisation-at-a-prime-ideal
  - def-field-of-fractions
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - lem-base-extension-field-coordinate-ring
  - thm-flatness-criteria-by-injections-and-ideals
  - def-finitely-generated-field-extension
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - def-generic-point-irreducible-closed-subset
  - def-axiom-of-choice
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-universal-property-of-localisation
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Varieties, Definition 33.9.1 (tag 020H)"
      url: "https://stacks.math.columbia.edu/download/varieties.pdf"
proof_strategy: direct
---

## Statement

Let $k$ be a field, let $X$ be an integral finite-type $k$-scheme, and let
$\eta$ be its generic point. For every nonempty affine open
$U=\operatorname{Spec}A\subseteq X$, the stalk
$K=\mathcal O_{X,\eta}$ is canonically isomorphic to
$\operatorname{Frac}\Gamma(U,\mathcal O_X)$. The extension $K/k$ is finitely
generated, and restriction embeds $\Gamma(X,\mathcal O_X)$ into $K$. For the
last assertion assume AC: if $X$ is geometrically integral for the chosen
algebraic closure $\bar k/k$, then $K\otimes_k\bar k$ is a domain.

## Facts & Assumptions

**Given:** The structure morphism $X\to\operatorname{Spec}k$, the integral finite-type scheme $X$, its generic point $\eta$, and a chosen algebraic closure $\bar k/k$ for the geometric-integrality clause. AC is assumed only for that final clause.

[F1] An integral scheme is nonempty and every nonempty affine open is the spectrum of a domain. ([[def-integral-scheme]])

[F2] A morphism is locally of finite type when each point has an affine neighbourhood over an affine base with a finite-type ring map; finite type also requires quasi-compactness. ([[def-locally-finite-type-and-finite-type-morphism]])

[F3] For affine schemes, global sections recover the coordinate ring and morphisms correspond contravariantly to ring maps. ([[thm-affine-scheme-ring-anti-equivalence]])

[F4] A generic point $\eta$ of $X$ satisfies $\overline{\{\eta\}}=X$. ([[def-generic-point-irreducible-closed-subset]])

[F5] The stalk of the affine structure sheaf at a prime $\mathfrak p$ is $A_{\mathfrak p}$. ([[thm-stalk-structure-sheaf-prime-localization]])

[F6] For a prime $\mathfrak p$, $A_{\mathfrak p}$ is the localization at $A\setminus\mathfrak p$. ([[def-localisation-at-a-prime-ideal]])

[F7] For a domain $A$, $\operatorname{Frac}(A)$ is the localization of $A$ at $A\setminus\{0\}$. ([[def-field-of-fractions]])

[F8] The canonical map from a domain to its fraction field is injective. ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]])

[F9] A field extension is finitely generated when it is generated as a field by a finite list. ([[def-finitely-generated-field-extension]])

[F10] Geometric integrality means integrality of the chosen algebraic-closure fibre. ([[def-geometrically-reduced-integral-connected-fibre]])

[F11] After extending the ground field to $\bar k$, the inverse image of an affine open $U=\operatorname{Spec}A$ is $\operatorname{Spec}(A\otimes_k\bar k)$. ([[lem-base-extension-field-coordinate-ring]])

[F12] A module is flat if the multiplication maps $I\otimes_RM\to M$ are injective for all finitely generated ideals $I\subseteq R$. ([[thm-flatness-criteria-by-injections-and-ideals]])

[F13] AC states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F14] Under AC, every proper ideal of a nonzero commutative ring is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

[F15] A ring map that sends a multiplicative set to units factors uniquely through its localization. ([[thm-universal-property-of-localisation]])

[F16] Points of $\operatorname{Spec}A$ are prime ideals, and $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$. ([[def-prime-spectrum-and-vanishing-sets]])

[F17] $D(a)=\{\mathfrak p:a\notin\mathfrak p\}$ is open in $\operatorname{Spec}A$. ([[def-principal-distinguished-subset-of-spectrum]])

**AC use:** Only the geometric-integrality clause uses AC: after showing $A\otimes_k\bar k\ne0$, F14 supplies a maximal ideal, so the affine chart $\operatorname{Spec}(A\otimes_k\bar k)$ is nonempty and the integral-scheme criterion F1 applies. The other claims and the tensor-localization argument are choice-free.

## Proof

1.1 Fix a nonempty affine open $U=\operatorname{Spec}A$. Since $\eta$ is generic, a nonempty open cannot omit $\eta$: its closed complement would contain $\overline{\{\eta\}}=X$. Thus $\eta\in U$, and let $\mathfrak p$ be its corresponding prime. By F1, $A$ is a nonzero domain, so $(0)$ is a prime. If $\mathfrak p\ne(0)$, choose $a\in\mathfrak p$ with $a\ne0$. Then $D(a)$ is a nonempty open by F16--F17, since it contains $(0)$, but it does not contain $\eta$. This contradicts genericity as above, so $\mathfrak p=(0)$. [F1, F4, F16, F17, given]

2.1 Restricting the structure sheaf from $X$ to its open subscheme $U$ does not change the stalk at $\eta$. By F5 it is $A_{(0)}$, and F6--F7 identify this localization canonically with $\operatorname{Frac}A$. By F3, $\Gamma(U,\mathcal O_X)\cong A$. These identifications all pass through the same stalk $K=\mathcal O_{X,\eta}$, so for every such $U$ they give the canonical isomorphism $K\cong\operatorname{Frac}\Gamma(U,\mathcal O_X)$. [F3, F5, F6, F7, step 1.1]

3.1 Apply F2 at $\eta$ to obtain an affine neighbourhood $W=\operatorname{Spec}B$ for which $k\to B$ is of finite type. By F1, $B$ is a domain, and step 2.1 identifies $K$ with $\operatorname{Frac}B$. Choose finite algebra generators $b_1,\ldots,b_r$ for $B$ over $k$. Then $\operatorname{Frac}B=k(b_1,\ldots,b_r)$, so F9 gives that $K/k$ is finitely generated. The list may be empty, in which case $B=k$ and $K=k$. [F1, F2, F9, step 2.1, algebra]

3.2 Restriction to the generic stalk is a ring map $\Gamma(X,\mathcal O_X)\to K$. If a global section maps to zero, then on every nonempty affine open $U=\operatorname{Spec}A$ its restriction maps to zero in $\operatorname{Frac}A$ under step 2.1. F8 makes $A\to\operatorname{Frac}A$ injective, so the section vanishes on each such $U$. Affine opens cover $X$; the sheaf uniqueness axiom therefore makes the global section zero. Hence the restriction map is injective. [F1, F3, F8, step 2.1, given]

3.3 Assume the geometric-integrality clause and fix a nonempty affine open $U=\operatorname{Spec}A$. By F12, the $k$-module $A$ is flat: the only finitely generated ideals of the field $k$ are $(0)$ and $k$, and the corresponding multiplication maps are injective. Tensoring the injection $k\hookrightarrow\bar k$ with $A$ gives an injection $A\cong A\otimes_k k\hookrightarrow A\otimes_k\bar k$. Thus $R=A\otimes_k\bar k$ is nonzero. By AC and F14, $R$ has a maximal ideal, so $\operatorname{Spec}R=U_{\bar k}$ is nonempty. By F11 it is an affine open in the chosen geometric fibre $X_{\bar k}$; F10 makes that fibre integral, so F1 implies $R$ is a domain. Let $S=A\setminus\{0\}$. The injection just proved shows that its image $S'=\{a\otimes1:a\in S\}$ avoids zero in $R$. There is a canonical ring isomorphism $$K\otimes_k\bar k\cong(S^{-1}A)\otimes_k\bar k\cong(S')^{-1}R:$$ the forward map sends $(a/s)\otimes\lambda$ to $(a\otimes\lambda)/(s\otimes1)$, and its inverse sends $(a\otimes\lambda)/(s\otimes1)$ to $(a/s)\otimes\lambda$; F15 verifies these maps extend through the indicated localizations and are inverse on the generators. Since a localization of a domain at a multiplicative set avoiding zero is a domain, $K\otimes_k\bar k$ is a domain. [F1, F10, F11, F12, F13, F14, F15, step 2.1, algebra]

4.1 Steps 2.1, 3.1 and 3.2 prove the canonical function-field identification, finite generation and injectivity for every nonempty affine chart; step 3.3 proves the geometric-integrality implication under its stated AC assumption. The zero-generator case is included in step 3.1, and if $\bar k=k$ the tensor claim reduces to the field property of $K$. ∎ [step 2.1, step 3.1, step 3.2, step 3.3]
