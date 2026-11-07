---
id: thm-ring-class-reciprocity-on-cm-singular-moduli
kind: theorem
title: "Ring class reciprocity on CM singular moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - thm-singular-modulus-generates-the-ring-class-field
  - thm-cm-singular-moduli-are-algebraic-integers
  - thm-cm-lattice-homothety-classes-are-proper-ideal-classes
  - thm-chebotarev-dirichlet-density
  - thm-local-artin-unramified-frobenius-normalization
  - lem-conjugation-inverts-quadratic-ideal-classes
  - lem-coprime-ideal-extension-contraction-for-quadratic-orders
  - lem-residue-fields-at-degree-one-primes-preserved-for-quadratic-orders
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ring class field and
  generation suppliers. Chebotarev and the arbitrary-order Deuring interface
  remain explicit unresolved mathematical inputs.
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Theorem 11.36 statement, printed p. 243; proof explicitly omitted there"
    - title: "J. S. Milne, Modular Functions and Modular Forms"
      url: "https://www.jmilne.org/math/CourseNotes/MF110.pdf"
      locator: "Theorem 12.18 and Lemma 12.25, printed pp. 120–126; maximal-order proof, arbitrary-order case outlined"
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Lemma 5.19, arithmetic Frobenius convention"
verification: {}
---

## Statement

Assume AC, Countable Choice, DC, and Chebotarev's positive-density theorem for
nonempty conjugacy-stable Frobenius subsets in finite Galois extensions of
number fields. Let $D<0$ be a quadratic discriminant, let $\mathcal O_D$ have
conductor $f$ in $K_D$, let $K_{\mathcal O_D}$ be its ring class field, and
let $I$ be a proper invertible fractional $\mathcal O_D$-ideal. Assume also the
following arbitrary-order reduction properties: every Galois conjugate of
$j(J)$, for a proper invertible $\mathcal O_D$-ideal $J$, is another value
$j(J')$ for such an ideal $J'$; and, if a rational prime $p$ splits in $K_D$,
$p\nmid fD_K$, $\mathfrak p\mid p$, and $\mathfrak P$ is any prime of
$K_{\mathcal O_D}$ above $\mathfrak p$, then arithmetic Frobenius
$\sigma_{\mathfrak p}$ satisfies
$$\sigma_{\mathfrak p}(j(I))\equiv j(\overline{\mathfrak p}_f I)\pmod{\mathfrak P},$$
where $\overline{\mathfrak p}_f$ is the contraction to $\mathcal O_D$ of the
conjugate prime of $\mathcal O_K$. Use arithmetic Frobenius
$x\mapsto x^{N\mathfrak p}$ at unramified prime ideals. For every proper
invertible $\mathcal O_D$-ideal $\mathfrak a$ prime to the conductor, let
$\sigma_{[\mathfrak a]}$ be its arithmetic Artin automorphism in
$\operatorname{Gal}(K_{\mathcal O_D}/K_D)$. Then
$$\sigma_{[\mathfrak a]}(j(I))=j(\overline{\mathfrak a}I).$$
Equivalently, if $\mathfrak p$ is a prime ideal of $\mathcal O_K$ prime to
$f$, the arithmetic Artin action is $j(I)\mapsto j(\overline{\mathfrak p}_f I)$,
where $\overline{\mathfrak p}_f$ is the contraction of its conjugate to
$\mathcal O_D$.

## Statement references

[[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues|Arithmetic Artin identifies the ring class group with the ring class field Galois group.]]

[Cox, Theorem 11.36, p. 243](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, an imaginary quadratic order $\mathcal O_D$, its ring class field, a proper invertible ideal $I$, arithmetic Artin reciprocity, and the Chebotarev supplier interface.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the global class-field suppliers assume AC.

[A2] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; the global class-field suppliers assume Countable Choice.

[A3] [[def-dependent-choice]]: every total relation on a nonempty set admits an infinite related sequence from any specified start; the global class-field suppliers assume DC.

[L1] The arbitrary-order reduction hypotheses explicitly assumed in the Statement are: (i) every Galois conjugate of a singular modulus of $\mathcal O_D$ is another singular modulus of the same order; and (ii) for every rational prime $p$ split in $K_D$ with $p\nmid fD_K$, every proper invertible ideal $J$ and prime $\mathfrak P$ of the ring class field above a chosen $\mathfrak p\mid p$ satisfy
$$\sigma_{\mathfrak p}(j(J))\equiv j(\overline{\mathfrak p}_f J)\pmod{\mathfrak P},$$
where $\sigma_{\mathfrak p}$ is arithmetic Frobenius and the congruence is required for every proper invertible ideal $J$. Cox states the reciprocity theorem but omits its proof; Milne proves the maximal-order reduction result and only outlines the arbitrary-order case. No completed supplier proof or source excerpt for these hypotheses is asserted here; they are used only as the explicit conditional premises of the Statement.

[F7] [[thm-chebotarev-dirichlet-density]]: in a finite Galois extension of number fields, every nonempty conjugacy-stable Frobenius subset has positive Dirichlet density. The item is present in batch 111 at dependency level 23. Its proof remains conditional on the batch-111 abelian-Chebotarev input, whose actual CFT and ray-class-density suppliers remain proof-open. The complete independent proof in Milne, *Class Field Theory*, Chapter VIII §7, Theorem 7.4, pp. 258–260, was read and supports the theorem; no acceptance or proof closure is inferred.

[F1] [[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues]]: $H=K_{\mathcal O_D}$ is finite abelian over $K_D$ with arithmetic Artin group $\operatorname{Pic}(\mathcal O_D)$, $H/\mathbb Q$ is Galois, and complex conjugation acts by inversion; the current CFT proof remains conditional on proof-open global suppliers.

[F2] [[thm-singular-modulus-generates-the-ring-class-field]]: each singular modulus generates $K_{\mathcal O_D}$ over $K_D$; that proof is supported by the full Chebotarev source argument but remains conditional on proof-open CFT inputs.

[F3] [[thm-cm-lattice-homothety-classes-are-proper-ideal-classes]]: distinct proper ideal classes give distinct singular moduli.

[F4] [[thm-cm-singular-moduli-are-algebraic-integers]]: all singular moduli are algebraic integers.

[F5] [[thm-local-artin-unramified-frobenius-normalization]]: arithmetic Frobenius acts on residue fields by $x\mapsto x^{N\mathfrak p}$.

[F6] [[lem-conjugation-inverts-quadratic-ideal-classes]]: conjugation induces inversion on $\operatorname{Pic}(\mathcal O_D)$.

[F8] [[lem-coprime-ideal-extension-contraction-for-quadratic-orders]]: away from the conductor, contraction and extension preserve proper invertibility, ideal classes, and norm.

[F9] [[lem-residue-fields-at-degree-one-primes-preserved-for-quadratic-orders]]: the contraction of a degree-one maximal-order prime away from $f$ is proper invertible and has the same residue field $\mathbb F_p$.

[F10] [[thm-number-field-integral-ideal-factorisation-in-zf]]: a nonzero integral ideal has finite prime-ideal support.

## Proof

1.1 Let $h=|\operatorname{Pic}(\mathcal O_D)|$. By [L1](i), every Galois conjugate of $j(I)$ is a singular modulus of the same order. By [A1]–[A3] and [F2], $K_D(j(I))=K_{\mathcal O_D}$, so the orbit under $\operatorname{Gal}(K_{\mathcal O_D}/K_D)$ has $h$ elements. By [F3], there are exactly $h$ distinct singular moduli indexed by the ideal classes. Therefore the Galois orbit of $j(I)$ is precisely this class-indexed set. This conclusion is conditional on the unproved arbitrary-order conjugation assertion in [L1]. [A1, A2, A3, L1, F1, F2, F3, F4, given]

2.1 For any good rational prime $p$ split in $K_D$ and any proper invertible ideal $J$, [L1](ii) gives $\sigma_{\mathfrak p}(j(J))\equiv j(\overline{\mathfrak p}_fJ)$ at primes above the chosen $\mathfrak p\mid p$. By [F2] and [F4], both values are algebraic integers in $H$, and by [L1](i) and step 1.1 the Frobenius value is one of the class-indexed values. Put $\delta=\prod_{[J_1]\ne[J_2]}(j(J_1)-j(J_2))$; it is nonzero by [F3] and integral by [F4]. By [F10], only finitely many rational primes lie below prime divisors of $(\delta)$. Outside that finite set, the congruence forces the two values to have the same ideal class, because a difference between distinct class values would divide $\delta$ at the chosen prime. By [F3] the class values are distinct, so $\sigma_{\mathfrak p}(j(J))=j(\overline{\mathfrak p}_fJ)$. This holds for every $J$ outside one finite exceptional set independent of $J$. [L1, F2, F3, F4, F10, step 1.1, algebra]

3.1 Fix a class $c\in\operatorname{Pic}(\mathcal O_D)$ and let $\sigma_c$ be its arithmetic Artin automorphism in $H/K_D$, where $H=K_{\mathcal O_D}$. Since $H/\mathbb Q$ is Galois and conjugation acts by inversion by [F1] and [F6], the conjugacy class of $\sigma_c$ in $\operatorname{Gal}(H/\mathbb Q)$ is contained in $\{\sigma_c,\sigma_c^{-1}\}$. By [F7], infinitely many rational primes outside the finite exceptional set in step 2.1 have Frobenius conjugacy class containing $\sigma_c$. Such a prime splits in $K_D$ because $\sigma_c$ restricts to the identity on $K_D$. Choose a prime of $H$ whose Frobenius is $\sigma_c$ and contract it to a prime $\mathfrak p$ of $K_D$; its arithmetic Artin symbol is $\sigma_c$, so [F1] identifies the class of the contraction of $\mathfrak p$ to $\mathcal O_D$ with $c$. Since $p$ avoids the conductor, [F8] and [F9] show that this contraction is a proper invertible ideal with residue field $\mathbb F_p$. By step 2.1, its Artin action formula holds at every CM ideal. Since $c$ was arbitrary, the formula holds for every ideal class. [A1, A2, A3, L1, F1, F5, F6, F7, F8, F9, step 2.1, choose, algebra]

4.1 The class formula is multiplicative: for classes $[\mathfrak a]$ and $[\mathfrak b]$, the formula at the CM ideal $\overline{\mathfrak b}I$ gives $\sigma_{[\mathfrak a]}\sigma_{[\mathfrak b]}j(I)=\sigma_{[\mathfrak a]}j(\overline{\mathfrak b}I)=j(\overline{\mathfrak a}\,\overline{\mathfrak b}I)=j(\overline{\mathfrak a\mathfrak b}I)$. The conjugation direction is the inverse class by [F6], and [F5] fixes the arithmetic Frobenius convention. The result is conditional on [L1] and [F1]. [A1, A2, A3, L1, F1, F5, F6, step 3.1, algebra] ∎
