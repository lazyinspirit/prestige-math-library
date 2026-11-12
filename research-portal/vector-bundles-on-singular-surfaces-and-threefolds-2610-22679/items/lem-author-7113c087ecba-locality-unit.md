---
id: lem-author-7113c087ecba-locality-unit
kind: lemma
title: The actual cdh-localization unit is an equivalence
status: published
domain: mathematics
deps:
  - math:def-commutative-ring
  - math:def-axiom-of-choice
  - lem-author-7113c087ecba-general-localization
  - lem-author-7113c087ecba-cdh-hyperdescent
  - def-derived-sections-on-sites
  - lem-adjudicate-430d6b729af8-etale-presheaf-model
  - lem-author-dcdf962edbda-qcqs-site
formulation_deps:
  - math:def-commutative-ring
  - math:def-axiom-of-choice
  - lem-author-7113c087ecba-general-localization
  - def-derived-sections-on-sites
  - lem-adjudicate-430d6b729af8-etale-presheaf-model
  - lem-author-dcdf962edbda-qcqs-site
argument_deps:
  - math:def-commutative-ring
  - math:def-axiom-of-choice
  - lem-author-7113c087ecba-general-localization
  - lem-author-7113c087ecba-cdh-hyperdescent
  - def-derived-sections-on-sites
  - lem-adjudicate-430d6b729af8-etale-presheaf-model
  - lem-author-dcdf962edbda-qcqs-site
dependency_roles:
  math:def-commutative-ring: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-7113c087ecba-general-localization: mathematical-premise
  lem-author-7113c087ecba-cdh-hyperdescent: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  lem-adjudicate-430d6b729af8-etale-presheaf-model: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the derived-sections and general-localization suppliers, with the auxiliary big étale site contained in the enlarged bounds of the compatible-model supplier. Let $F=\mathbb Q$ or $F=\mathbb F_p$, with $p$ prime, and use the fixed qcqs prime-field cdh skeleton $\mathcal C_F$. Write $L^{h,F}_{\mathrm{cdh}}=Ri\,a$ for the hypercomplete reflector denoted $L^F_{\mathrm{cdh}}$ by the general-localization supplier, and $L^{o,F}_{\mathrm{cdh}}$ for ordinary source sheafification of $D(\mathbb Z)$-valued presheaves. For a finite commutative unital ring $\Lambda$ (with finite underlying set), represent the underlying abelian étale derived-section functor $E_\Lambda$ by the compatible-model supplier's strict presheaf complex $C_\Lambda(X)=I^\bullet(X)$, with its specified coherent identification with actual derived pullbacks. In $E_\Lambda\to L^{h,F}_{\mathrm{cdh}}E_\Lambda$, localization of $E_\Lambda$ means application to this representative, transported along that identification. This canonical unit is an equivalence on the exact qcqs prime-field cdh site. Its evaluation gives natural equivalences
$$R\Gamma_{\mathrm{et}}(X,\Lambda)\simeq(L^{h,F}_{\mathrm{cdh}}E_\Lambda)(X).$$
The displayed equivalence is in the underlying abelian derived category and uses the supplied representative convention for $X$ outside the skeleton. This is derived locality with respect to all sheafified-cohomology equivalences, and in particular implies ordinary locality. Thus the ordinary source unit $E_\Lambda\to L^{o,F}_{\mathrm{cdh}}E_\Lambda$ is also an equivalence.

## Facts & Assumptions
**Given:** The hypotheses and compatible representative specified in the statement.

**Goal:** Prove both unit equivalences and their natural derived-section evaluation.

[A1] Choice and the enlarged bounds are used for the compatible model, the K-injective localization and derived evaluation. [[math:def-axiom-of-choice]]

[F0] Coefficient rings use [[math:def-commutative-ring]]; finiteness refers to their underlying sets.

[F1] The strict presheaf complex and its equivalence with the coherent actual derived-section functor, including all pullbacks and hypercover diagrams, are supplied by [[lem-adjudicate-430d6b729af8-etale-presheaf-model]].

[F2] On this exact small site, hypercover-descent presheaf complexes are local for $Ri\,a$, hence have invertible unit; ordinary sheafification has the stated covering-family/Čech meaning. [[lem-author-7113c087ecba-general-localization]]

[F3] The actual finite-coefficient functor satisfies every cdh hypercover comparison on the entire qcqs prime-field site. [[lem-author-7113c087ecba-cdh-hyperdescent]]

[F4] Derived evaluation is that of [[def-derived-sections-on-sites]], and the exact site, its size bounds and its functorial representative convention are fixed by [[lem-author-dcdf962edbda-qcqs-site]].

## Proof
1.1 Fix the coefficient ring of [F0], and use [F1] to choose $C_\Lambda$ under [A1]. The coherent diagram of $C_\Lambda$ is equivalent to the underlying abelian diagram of the actual $D(\Lambda)$-valued $E_\Lambda$ of [F3]. The scalar-restriction comparison in [F3] preserves family products and cosimplicial limits, so its hypercover comparisons remain equivalences in $D(\mathbb Z)$. Thus [F3] transfers hyperdescent to this presheaf-complex model, including the augmentation maps. Products give the values on formal families in the localization criterion. Apply [F2] to $C_\Lambda$ itself, rather than to a collection of derived-category values: its unit $C_\Lambda\to Ri\,aC_\Lambda$ is an objectwise quasi-isomorphism. Transport this natural unit along the coherent equivalence of [F1] to obtain the asserted canonical hypercomplete unit equivalence for $E_\Lambda$. The localization is unchanged on objectwise quasi-isomorphic representatives by its derived-functor definition in [F2]. Hypercover descent includes covering-family/Čech descent, so the same coherent presheaf is an ordinary sheaf; its ordinary sheafification unit is consequently also an equivalence. [A1, F0, F1, F2, F3]

2.1 Evaluate the unit at $X$ using [F4]. Its source $C_\Lambda(X)$ is identified by [F1] with the actual underlying abelian complex $R\Gamma_{\mathrm{et}}(X,\Lambda)$, and its target is by definition $(L^{h,F}_{\mathrm{cdh}}E_\Lambda)(X)$. The objectwise equivalence from step 1.1 therefore gives the displayed equivalence. Both the unit and the identification in [F1] are natural coherent maps, so this equivalence respects every pullback. The representative convention of [F4] gives the same assertion for all qcqs $F$-schemes in the stated bounds, in particular the article's affine threefold, on the original qcqs cdh site. [F1, F4, step 1.1] ∎
