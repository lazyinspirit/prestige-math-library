---
id: thm-fundamental-theorem-of-cm-over-q
kind: theorem
title: "Fundamental theorem of complex multiplication over Q"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-polarized-cm-type-uniformization
  - def-reflex-norm-associated-to-a-cm-type
  - lem-reflex-norm-product-with-conjugate-is-field-norm
  - thm-reflex-field-idele-reciprocity-on-cm-tate-modules
  - thm-global-artin-reciprocity-and-norm-index
  - def-arith-tate-module-and-inertia
  - thm-hodge-cycles-on-abelian-varieties-are-absolutely-hodge
  - lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed
  - lem-cm-idelic-norm-cyclotomic-character-relation
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Theorems 4.1–4.2, Propositions 4.6–4.9, and the proof boundary at printed pp. 26–32."
    - title: "J. S. Milne, Complex Multiplication, Chapter II §10"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "The theorem over Q and its proof, printed pp. 91–96."
    - title: "Margaret Bilu, Complex multiplication of abelian varieties, §4"
      url: "https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf"
      locator: "§4, main theorem and detailed proof sketch, printed pp. 25–31."
verification: {}
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. For a CM field $E$ and CM type $\Phi$, let $\mathbb A_f=\prod'_\ell\mathbb Q_\ell$ be the restricted product with respect to the subgroups $\mathbb Z_\ell$, and set $\mathbb A_{f,E}=E\otimes_{\mathbb Q}\mathbb A_f$. There is a canonical map
$$f_\Phi:\operatorname{Aut}(\mathbb C)\longrightarrow\mathbb A_{f,E}^{\times}/E^\times$$
such that $f_\Phi(\sigma)\overline{f_\Phi(\sigma)}=\chi_{\mathrm{cyc}}(\sigma)E^\times$ for every $\sigma$, where $\chi_{\mathrm{cyc}}(\sigma)\in\widehat{\mathbb Z}^{\times}$ is characterized by $\sigma(\zeta)=\zeta^{\chi_{\mathrm{cyc}}(\sigma)}$ for every root of unity $\zeta$. If a polarized CM abelian variety has type $(E,\Phi;\mathfrak a,t)$, then $\sigma A$ has type
$$\left(E,\sigma\Phi; f_\Phi(\sigma)\mathfrak a,\frac{t\chi_{\mathrm{cyc}}(\sigma)}{f_\Phi(\sigma)\overline{f_\Phi(\sigma)}}\right),$$
where $f_\Phi(\sigma)\mathfrak a$ means the finite-adic lattice obtained by applying an idèle representative of the class to $\mathfrak a$; changing the representative by $E^\times$ changes only the chosen basis. With $V_fA=H_1(A,\mathbb Q)\otimes_{\mathbb Q}\mathbb A_f$, a uniformization can be chosen so that multiplication by $f_\Phi(\sigma)$ on $V_fA$ corresponds to the action of $\sigma$ on torsion. The statement concerns polarized type data and their complex uniformizations; it does not classify integral models over number rings.

## Statement references

[J. S. Milne, “The Fundamental Theorem of Complex Multiplication,” Theorems 4.1–4.2](https://arxiv.org/pdf/0705.3446)

[J. S. Milne, *Complex Multiplication*, Chapter II §10](https://www.jmilne.org/math/CourseNotes/CM.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, a CM field $E$, a CM type $\Phi$, a polarized CM abelian variety $A$, and $\sigma\in\operatorname{Aut}(\mathbb C)$.

[F1] The reflex-field theorem supplies the finite-idèle quasi-isogeny formula when $\sigma$ fixes the reflex field. [[thm-reflex-field-idele-reciprocity-on-cm-tate-modules]]

[F2] The current polarized-type definition states the trace-form uniformization data and their basis-change convention. [[def-polarized-cm-type-uniformization]]

[F3] The reflex norm multiplied by its conjugate equals the scalar norm from the reflex field. [[lem-reflex-norm-product-with-conjugate-is-field-norm]]

[A1] AC is assumed by the abelian-variety and global CFT interfaces. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited from the idelic restricted products and global reciprocity. [[def-countable-choice]]

[A3] DC is retained from the current number-field global Artin statement. [[def-dependent-choice]]

[L1] The over-$\mathbb Q$ argument extends the reflex-field result from CM types to arbitrary integral combinations of CM types by using Deligne's theorem that Hodge classes on abelian varieties are absolutely Hodge. The cited 1982 proof was not inspected or reconstructed for this batch. The proposed supplier is `thm-hodge-cycles-on-abelian-varieties-are-absolutely-hodge`; it is absent from the current library. [[thm-reflex-field-idele-reciprocity-on-cm-tate-modules]]

[F8] The Artin/norm/cyclotomic compatibility and idelic-kernel uniqueness needed for the reflex-field construction are supplied by the recorded local results. [[lem-cm-idelic-norm-cyclotomic-character-relation]] [[lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed]]

## Proof

1.1 For automorphisms fixing $E^r$, [F1] gives the map on finite idèles modulo $E^\times$ and the Tate-module quasi-isogeny formula. [F3] gives the determinant norm identity, while [F8] is needed to identify its Artin image with the cyclotomic character under the reciprocal convention. The idelic kernel and norm inputs used in [F1] and [F8] are supplied; the separate absolute-Hodge input remains open. [A1, A2, A3, F1, F2, F3, F8, given]

2.1 Milne's construction defines $f_\Phi(\sigma)$ by requiring its Artin image to be the Taniyama element and its product with its conjugate to equal the cyclotomic character. Uniqueness uses the uniquely divisible, conjugation-fixed idelic Artin kernel supplied by [F8]. With that input, the reflex-field case determines the polarized type and makes the torsion diagram commute. [F1, F2, F8, step 1.1, algebra]

3.1 To pass from a single CM type to all conjugate type data over $\mathbb Q$, the source proof uses [L1] to extend the construction additively to CM motives and establish the required relation among type functions. Because [L1] is not proved here, this final over-$\mathbb Q$ step is open in this carrier; no unconditional proof of the theorem is claimed. [F1, L1, step 2.1, given] ∎

