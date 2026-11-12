---
title: External canonical top-weight motivic-to-syntomic comparison
status: published
research_item: thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
dependency_level: 11
sources:
  references:
    - title: Elden Elmanto, Zero cycles on singular varieties (joint work with Matthew
        Morrow), Algebraic K-theory, Oberwolfach Report 36/2025
      url: https://ems.press/content/serial-article-files/52244
      doi: 10.4171/OWR/2025/36
      locator: Theorems 1 and 3(1)-(2), including footnote 1, printed p. 1994 (PDF p.
        46); Theorem 4 and its proof, printed p. 1995 (PDF p. 47)
      hypotheses: X is any finite-type scheme over an algebraically closed field k; j
        is a nonnegative integer with j >= dim(X); ell is any prime. Theorem 4
        imposes neither smoothness nor reducedness.
      statement: The canonical motivic-to-syntomic map Z(j)_mot(X)/ℓ → F_ℓ(j)_syn(X)
        is an equivalence in this range; for ℓ invertible syntomic is étale
        cohomology with µ_ℓ^⊗j.
      reading_limits: This proposal checked the primary published PDF extraction at
        Theorem 1, Theorem 3(1)-(2) and footnote 1, printed p.1994, and Theorem
        4 with its complete proof, printed p.1995. The full finite-type scope
        and specified comparison are imported. Artin vanishing, henselian
        rigidity and the Kato-Kuzumaki field bound were not reconstructed or
        checked in their antecedent sources. No visual diagram inspection is
        claimed. The qcqs domain uses the separately declared finite-type-field
        lemma. The explicit nested-universe premise is inherited from the
        current local motivic and syntomic suppliers, not attributed to the
        report.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 4.28 and proof, printed p.29; Definition 4.29, Remarks
        4.30–4.31, map (4.7), Corollary 4.32 and proof, printed p.30
      hypotheses: Any qcqs F_p-scheme; nonnegative weight; use r=1.
      statement: The cdh-localized étale logarithmic-forms corner is éh cohomology,
        and the canonical comparison cofiber is RΓ_cdh(X,νtilde_1(j))[−j−1].
      reading_limits: This proposal checked the versioned primary PDF extraction at
        Theorem 4.28 and its proof, printed p.29, and Definition 4.29, Remarks
        4.30-4.31, map (4.7), Corollary 4.32 and its proof, printed p.30. Only
        the eh corner, canonical map and shifted obstruction are used through
        the declared EM syntomic supplier. The underlying TC, de Rham-Witt,
        rigidity and field-dimension proofs were not reconstructed. No visual
        diagram inspection is claimed. The compatible universe assumptions come
        from the current local supplier interfaces, not an asserted additional
        hypothesis of the paper.
external_input: true
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic)
- [def-article-conventions](item-def-article-conventions)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Elden Elmanto, Zero cycles on singular varieties (joint work with Matthew Morrow), Algebraic K-theory, Oberwolfach Report 36/2025 · Theorems 1 and 3(1)-(2), including footnote 1, printed p. 1994 (PDF p. 46); Theorem 4 and its proof, printed p. 1995 (PDF p. 47) `](https://ems.press/content/serial-article-files/52244)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Theorem 4.28 and proof, printed p.29; Definition 4.29, Remarks 4.30–4.31, map (4.7), Corollary 4.32 and proof, printed p.30 `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice and fix compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$. The fields and scheme data below lie in $U$; the sites, coefficient values and ambient derived categories satisfy the corresponding size bounds of the supplied motivic and syntomic constructions. Use these same compatible bounds for the site and derived-section constructions. Existence of these universes is a separate size assumption. Let $k$ be an algebraically closed field, $X$ a finite-type $k$-scheme, $j\in\mathbb Z_{\geq0}$ with $j\geq\dim X$, and $\ell$ any prime. Here finite type means that $X$ has a finite affine open cover by spectra of finitely generated $k$-algebras; $\dim X$ is the chain dimension of its underlying topological space, with $\dim\varnothing=-\infty$.

The canonical map of Elmanto–Morrow complexes in $D(\mathbb Z)$
$$\mathbb Z(j)_{\rm mot}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/\ell\longrightarrow\mathbb F_\ell(j)_{\rm syn}(X)$$
is an equivalence. The finite coefficients on the left are formed after evaluation at $X$, as in the motivic-complex definition.

If $\ell$ is invertible in $k$, the target is $R\Gamma_{\acute et}(X,\mu_\ell^{\otimes j})$. The small étale site of $X$ has étale $X$-schemes as objects and jointly surjective étale covering families, with the fixed size bounds. On this site, $\mu_\ell$ is the sheafification of $U\mapsto\{u\in\Gamma(U,\mathcal O_U)^\times:u^\ell=1\}$, with scalar action by powers. Its tensor power is taken in sheaves of modules over the constant ring sheaf $\mathbb Z/\ell$, and $\mu_\ell^{\otimes0}=\mathbb Z/\ell$. Here $R\Gamma_{\acute et}$ means the right derived global-sections functor on that site, computed by evaluating a K-injective resolution at $X$. These are the Tate-coefficient and site-derived-section constructions of the declared suppliers.

If $\ell=\operatorname{char}k$, the target is the derived syntomic theory specified by the declared EM syntomic supplier, with its actual natural comparison map. No smoothness, reducedness, affineness or irreducibility is assumed.

## Statement references
[def-article-conventions](item-def-article-conventions)

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-etale-tate-coefficients](item-def-etale-tate-coefficients)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic)

## External input
The Axiom of Choice is used through [def-derived-sections-on-sites](item-def-derived-sections-on-sites) for its K-injective derived-section construction; it is the premise declared in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The chosen small étale site and its size bounds use the same universes; use the site and sheafification conventions inherited by [def-etale-tate-coefficients](item-def-etale-tate-coefficients). The motivic complex and its objectwise derived coefficients are those of [def-motivic-cohomology](item-def-motivic-cohomology).

Use the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) for $U\in V\in W$, with $\omega\in U$. These universes are the compatible choices required by [def-motivic-cohomology](item-def-motivic-cohomology) and, for the characteristic-prime comparison, [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic). Their existence is assumed separately from Choice. Thus the size premise is supplied before evaluating the motivic functor, forming its objectwise finite coefficients, or using the actual syntomic comparison; bounds only for small-site derived sections would not discharge that premise. Choice is also inherited through these selected local motivic and comparison constructions, in addition to its K-injective use above.

Before evaluating these functors, apply the finite-affine-cover argument in steps 1.1–2.1 of [lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs](item-lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs) to the cover specified in the Statement. Under the already assumed Choice premise, that argument makes the underlying space Noetherian and every open subset quasi-compact; in particular $X$ and intersections of affine opens are quasi-compact. Thus $X$ belongs to the qcqs category of [def-article-conventions](item-def-article-conventions), so [def-motivic-cohomology](item-def-motivic-cohomology) is defined on $X$. In characteristic $p$, viewing the same underlying scheme over $\mathbb F_p$ preserves these two topological properties, so the qcqs hypothesis of [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic) is also satisfied. This discharges the local evaluation-domain obligation without adding separatedness, smoothness or reducedness. The empty scheme is included by the same supplier.

Import the published report Theorem4, not its application to torsion-freeness. Its proof uses Artin vanishing at invertible primes. In characteristic $p$, it kills the cdh Artin–Schreier obstruction by henselian rigidity and the Kato–Kuzumaki bound for residue fields of transcendence degree at most $j$ over an algebraically closed field. Interpret that obstruction through the precise fiber sequence in [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic). Thus this input concerns the actual map and specified EM theory, not merely abstractly isomorphic groups. The report's proof, not a purported reconstruction of the deeper field/rigidity results, is imported. Theorem4 has no reducedness hypothesis.

## Source qualification
In the published report, Theorem 3(2), printed p.1994, has an étale lower-right corner; EM v1 Theorem 4.28, printed p.29, has the éh corner, identified there with the cdh localization of the étale presheaf. We retain this as a qualified discrepancy and do not import the report's printed square on arbitrary singular schemes. The precise comparison is supplied by [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic).

The report's characteristic-$p$ proof of Theorem 4, printed p.1995, describes the cofiber without its shift. With its cited Artin–Schreier obstruction convention, EM v1 Corollary 4.32 gives the cofiber $R\Gamma_{\rm cdh}(X,\widetilde\nu_1(j))[-j-1]$. This is a confirmed nonfatal source-display omission: vanishing of the obstruction also kills its shift. It does not refute Theorem 4, whose full finite-type scope is retained. The reducedness premise of the separate Theorem 1 is not a premise of Theorem 4.
