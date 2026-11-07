---
id: lem-smith-unramified-kummer-frobenius-residue-symbol
kind: lemma
title: "Unramified Kummer Frobenius values as residue symbols"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-kummer-cohomology-of-roots-of-unity, thm-finite-unramified-local-extensions-classified-by-residue-extensions, lem-prime-to-n-roots-of-unity-reduce-injectively, thm-multiplicative-group-of-a-finite-field-is-cyclic, lem-hensel-factor-lifting-over-a-complete-valued-field]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the local-field and Kummer
  interfaces; the residue calculation is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Definition 3.21"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, alternative symbols as Kummer Frobenius values"
    - title: "J. S. Milne, Class Field Theory, Chapter V §5"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §5, prime-to-residue-characteristic symbols"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K$ be a nonarchimedean local field of characteristic zero with residue field $\mathbb F_q$ of characteristic $p$, and let $e\ge2$ be prime to $p$. Let $\alpha\in\mathcal O_K^\times$, choose $\eta$ with $\eta^e=\alpha$, and put $\psi(g)=g(\eta)/\eta\in\mu_e$. Let $\sigma$ be a lift of arithmetic Frobenius and put $m=\gcd(e,q-1)$.

The Kummer class of $\alpha$ is unramified, and raising to $e/m$ induces an isomorphism
$$\mu_e/(\sigma-1)\mu_e\xrightarrow{\sim}\mu_m(K).$$
Under this isomorphism, the Frobenius value of the unramified Kummer class reduces to
$$\overline{\psi(\sigma)^{e/m}}=\overline\alpha^{\,(q-1)/m}\in\mathbb F_q^\times.$$
The statement also includes $m=1$, when both groups and the displayed value are trivial. The result is a local residue-symbol calculation; it does not assert diagonal spin or global symbol equidistribution.

## Statement references

[[lem-kummer-cohomology-of-roots-of-unity]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[lem-prime-to-n-roots-of-unity-reduce-injectively]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Definition 3.21](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the local field, $e$, $\alpha$, root, and Frobenius lift in the Statement.

[F1] Kummer cohomology identifies the class of $\alpha$ with the cocycle $g\mapsto g(\eta)/\eta$. [[lem-kummer-cohomology-of-roots-of-unity]]

[F2] Finite residue-field extensions lift to unramified local extensions with the same residue degrees. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F3] A finite field has cyclic multiplicative group, and roots of unity of order prime to $p$ reduce injectively when all of them are present. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]] [[lem-prime-to-n-roots-of-unity-reduce-injectively]]

[F4] Simple roots over the residue field lift over a complete discretely valued field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Proof

1.1 The polynomial $X^e-\alpha$ has separable reduction because $p\nmid e$ and $\alpha$ is a unit. Its reduction splits over a finite residue-field extension. By [F2] that extension lifts unramified, and simple-root lifting puts every root of $X^e-\alpha$ in an unramified extension. In particular inertia fixes $\eta$ and the Kummer cocycle in [F1] is unramified. Frobenius acts on $\mu_e$ by the $q$th power. [F1, F2, F4, given, algebra]

2.1 The quotient $\mu_e/(\sigma-1)\mu_e$ has order $\gcd(e,q-1)=m$. Raising to $e/m$ kills $(\sigma-1)\mu_e$, has kernel of order $e/m$, and maps onto $\mu_m$. By [F3], $\mathbb F_q^\times$ contains all $m$th roots of unity. Their simple roots lift to $K$, so $\mu_m$ lies in $K$ and has injective reduction by [F3]. Thus the displayed power map is an isomorphism, including the trivial case $m=1$. [F3, F4, step 1.1, algebra]

3.1 The unramified root $\eta$ is a unit, and arithmetic Frobenius acts on its residue as the $q$th power. Reducing $\psi(\sigma)=\sigma(\eta)/\eta$ and raising to $e/m$ gives $$\overline{\psi(\sigma)^{e/m}}=\overline\eta^{(q-1)e/m}=\overline\alpha^{(q-1)/m}.$$ Replacing $\eta$ by another $e$th root multiplies $\psi(\sigma)$ by a $(\sigma-1)$-term, so step 2.1 makes the resulting value independent of that choice. [F1, step 1.1, step 2.1, algebra] ∎
