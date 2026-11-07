---
id: thm-local-inertia-fixed-field-is-maximal-unramified-extension
kind: theorem
title: "The inertia fixed field is the maximal unramified subextension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-lower-ramification-groups-of-a-local-galois-extension
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-finite-galois-extension-and-galois-group
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - cor-finite-extensions-of-finite-fields-are-simple
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - def-formal-derivative-of-a-polynomial
  - def-integral-element-and-algebraic-integer
  - cor-integral-elements-form-a-subring
  - thm-valuation-ring-is-integrally-closed
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-finite-galois-extension-characterizations
  - thm-artin-fixed-field-degree-theorem
  - thm-tower-law-for-finite-field-extensions
  - def-fixed-field-of-an-automorphism-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Theorem 7.58"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter II, Section 10"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite Galois extension of
nonarchimedean local fields with finite residue fields $\ell/k$, and put
$G=\operatorname{Gal}(L/K)$. The reduction map
$$G\longrightarrow\operatorname{Gal}(\ell/k)$$
is surjective with kernel the inertia group $G_0$. Its fixed field
$L^{G_0}$ is the maximal unramified intermediate extension of $L/K$; it has
residue field $\ell$, and $|G_0|=e(L/K)$.

## Statement references

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[[def-finite-galois-extension-and-galois-group]]

[[def-fixed-field-of-an-automorphism-group]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Theorem 7.58](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Jürgen Neukirch, *Algebraic Number Theory*, Chapter II, Section 10](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** Countable Choice and a finite Galois extension $L/K$ of nonarchimedean local fields with finite residue fields $\ell/k$.

[A1] Countable Choice selects one element from each member of a countable family of nonempty sets. ([[def-countable-choice]])

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: The valuation rings are complete discrete valuation rings, and $k$ and $\ell$ are finite fields.

[F2] [[def-lower-ramification-groups-of-a-local-galois-extension]]: $G_0$ is the kernel of the action of $G$ on $\mathcal O_L/\mathfrak m_L=\ell$.

[F3] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: Under Countable Choice, every finite extension $E/F$ of nonarchimedean local fields satisfies $[E:F]=e(E/F)f(E/F)$.

[F4] [[cor-finite-extensions-of-finite-fields-are-simple]]: The finite extension $\ell/k$ has a primitive element.

[F5] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]: Every finite extension of a finite field is Galois and separable, and its Galois group has order equal to its degree.

[F6] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]: A simple root in the residue field of a complete nonarchimedean valued field has a unique lift to a root in its valuation ring.

[F7] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: A complete nonarchimedean absolute value extends uniquely to every finite extension, which remains complete.

[F8] [[def-integral-element-and-algebraic-integer]]: An element is integral over a ring when it is a root of a monic polynomial over that ring.

[F9] [[cor-integral-elements-form-a-subring]]: Sums and products of elements integral over a ring are integral over that ring.

[F10] [[thm-valuation-ring-is-integrally-closed]]: A valuation ring is integrally closed in its fraction field.

[F11] [[thm-evaluation-kernel-and-minimal-polynomial]]: An algebraic element has a unique monic irreducible minimal polynomial generating the kernel of its evaluation map.

[F12] [[thm-finite-galois-extension-characterizations]]: For a finite extension, being Galois is equivalent to being the splitting field of a separable polynomial, and a finite Galois extension has automorphism group order equal to its degree.

[F13] [[thm-tower-law-for-finite-field-extensions]]: For a finite tower $K\subseteq E\subseteq L$, $[L:K]=[L:E][E:K]$.

[F14] [[thm-artin-fixed-field-degree-theorem]]: For a finite group $H$ of automorphisms of a field $L$, $[L:L^H]=|H|$.

[F15] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]: Under Countable Choice, every finite unramified extension of a nonarchimedean local field is Galois, and reduction identifies its Galois group with the Galois group of the residue-field extension.

[F16] [[def-fixed-field-of-an-automorphism-group]]: For a subgroup $H$ of the automorphism group of $L$, $L^H=\{x\in L:\sigma(x)=x\text{ for every }\sigma\in H\}$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Choose a primitive element $\bar a\in\ell$ over $k$ by [F4], and let $\bar g\in k[T]$ be its monic minimal polynomial of degree $f=[\ell:k]$. The polynomial $\bar g$ is separable by [F5]. Lift it to a monic $g\in\mathcal O_K[T]$, choose $a_0\in\mathcal O_L$ with residue $\bar a$, and apply [F6] in the complete field $L$ to obtain $\alpha\in\mathcal O_L$ with $g(\alpha)=0$ and residue $\bar a$. [A1, F1, F4, F5, F6, F7, given, choose, construct]

2.1 Let $h\in K[T]$ be the monic minimal polynomial of $\alpha$. Since $g$ is monic over $\mathcal O_K$, $\alpha$ is integral by [F8]. Every root of $h$ is a root of $g$, hence integral; the coefficients of $h$ are integral sums and products of those roots by [F9]. They lie in $K$, so [F10] gives $h\in\mathcal O_K[T]$. As $h$ divides $g$ and both are monic, reduction gives $\bar h\mid\bar g$. The residue $\bar a$ is a root of $\bar h$, so its minimal polynomial $\bar g$ divides $\bar h$; therefore $\bar h=\bar g$ and $[K(\alpha):K]=\deg h=f$. [F4, F8, F9, F10, F11, step 1.1, algebra]

3.1 Set $E=K(\alpha)$. Its residue field contains $k(\bar a)=\ell$ and lies in $\ell$ because $E\subseteq L$, so $k_E=\ell$. Applying [F3] to $E/K$ and using step 2.1 gives $f=e(E/K)f(E/K)=e(E/K)f$, hence $e(E/K)=1$ and $E/K$ is unramified. The finite-unramified classification [F15] gives that reduction identifies $\operatorname{Gal}(E/K)$ with $\operatorname{Gal}(\ell/k)$. Thus $|\operatorname{Aut}(E/K)|=f=[E:K]$, so [F12] makes $E/K$ Galois. [A1, F1, F3, F5, F12, F15, step 2.1, given, algebra]

4.1 If $\sigma\in G_0$, then $\sigma(\alpha)$ is a root of $g$ whose residue is $\bar a$; uniqueness in [F6] gives $\sigma(\alpha)=\alpha$, so $\sigma$ fixes $E$. Conversely, if $\sigma$ fixes $E$, then it fixes every residue class in $k_E=\ell$, hence acts trivially on $\ell$ and belongs to $G_0$ by [F2]. Thus $G_0=\operatorname{Gal}(L/E)$. [F2, F6, step 1.1, step 3.1, algebra]

5.1 The reduction action is well-defined by [F7], and its kernel is $G_0$ by [F2]. Since $L/K$ is Galois, [F12] gives a separable polynomial split by $L$ over $K$; it remains split over $E$, so $L/E$ is Galois as well. Then [F12] and [F13] give $|G/G_0|=[E:K]=f$. The target $\operatorname{Gal}(\ell/k)$ also has order $f$ by [F5], so reduction is surjective. Moreover, [F3] gives $[L:K]=e(L/K)f$; comparing with $[L:K]=[L:E][E:K]=|G_0|f$ proves $|G_0|=e(L/K)$. [A1, F2, F3, F5, F7, F12, F13, step 2.1, step 4.1, algebra]

6.1 Since $G_0=\operatorname{Gal}(L/E)$ by step 4.1, $E\subseteq L^{G_0}$. By [F14] and the fixed-field definition [F16], $[L:L^{G_0}]=|G_0|=[L:E]$; since $E\subseteq L^{G_0}$, the tower law forces $L^{G_0}=E$. [F13, F14, F16, step 4.1, step 5.1, algebra]

7.1 Let $F$ be any unramified intermediate field of $L/K$. By [F15] its residue reduction map is injective and $F/K$ is Galois. Each $\sigma\in G_0$ therefore restricts to an automorphism of $F/K$ that acts trivially on $k_F\subseteq\ell$; injectivity of reduction forces $\sigma|_F=1$. Hence $F\subseteq L^{G_0}=E$ by step 6.1, so $E$ is maximal unramified. [F15, step 4.1, step 6.1, given] ∎
