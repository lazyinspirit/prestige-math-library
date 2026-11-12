---
title: External prime-field cdh comparison and cdh dimension bound
status: published
research_item: thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
dependency_level: 8
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv:2309.08463v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Introduction footnote 1, printed p. 2; Theorem 1.1 opening, p. 3;
        comparison (1.2), p. 4; Theorem 1.3(1), p. 5; Section 2.1, p. 11;
        Section 2.3 and Section 3.1, especially (3.1) and the subsequent
        functoriality paragraph, p. 12; Section 3.3, (3.4), its following
        topology definition, (3.5) and Theorem 3.5(1), pp. 14–15; Section 8.2,
        paragraph immediately after Remark 8.8, p. 56 (PDF index 55).
      statement: Section 3.1 supplies a coherent classical motivic presheaf on smooth
        F-schemes, with values modeled by shifted Bloch complexes and pullbacks
        beyond flat maps. Sections 2.1 and 2.3 specify sheaf reflection and left
        Kan extension in the enhanced derived target. Definition (3.5) forms the
        cdh-local extension on qcqs F-schemes. The actual comparison (1.2)
        identifies it with cdh sheafification of the motivic complex, by Theorem
        1.3(1). The paragraph after Remark 8.8 explicitly supplies the
        Noetherian dimension bound.
      hypotheses: Prime field F=Q or F_p, p prime; integer weight j>=0; all qcqs
        F-schemes and all F-morphisms. The classical input is on smooth
        F-schemes. The cdh topology uses the finitely presented abstract blowup
        families specified in (3.4), together with Nisnevich covers. The bound
        is for Noetherian schemes of finite Krull dimension d and says H^i=0 for
        i>j+d. No resolution of singularities is assumed. Choice and the
        explicitly assumed universes are the inherited hypotheses of the local
        site/enhancement suppliers, not a source claim of their existence. In
        this item, restrict evaluation to F-schemes with data in U, as required
        by the fixed local site; this is a size convention, not a further
        geometric source hypothesis. Noetherian-to-qcqs domain membership is
        established by the separate local helper.
      reading_limits: "Historical reading record retained from the incoming generated
        item: In this repair, reread the PDF text of the prime-field convention,
        opening of Theorem 1.1, (1.2), Theorem 1.3(1), Section 2.1, Section 2.3,
        (3.1) and its subsequent paragraph specifying the full classical
        presheaf, Section 3.3 through Theorem 3.5(1), and the Section 8.2
        context and full paragraph after Remark 8.8. Import those assertions; do
        not reconstruct the motivic Eilenberg–Mac Lane construction, its
        coherent pullbacks, the general sheaf-reflector or Kan-extension
        existence theorems, or the deeper work with Bachmann. The cdh bound is
        read directly at p. 56, not inferred from vanishing of total KH. No
        complete-paper or foundational-reference reading, proof audit or
        independent acceptance is claimed. Current maintenance read the assigned
        consumer and its exact declared supplier interfaces; no fresh
        primary-source or page-image reading, reconstruction or independent
        acceptance is claimed for this reference."
external_input: true
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs](item-lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv:2309.08463v1) · Introduction footnote 1, printed p. 2; Theorem 1.1 opening, p. 3; comparison (1.2), p. 4; Theorem 1.3(1), p. 5; Section 2.1, p. 11; Section 2.3 and Section 3.1, especially (3.1) and the subsequent functoriality paragraph, p. 12; Section 3.3, (3.4), its following topology definition, (3.5) and Theorem 3.5(1), pp. 14–15; Section 8.2, paragraph immediately after Remark 8.8, p. 56 (PDF index 55). `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega,F\in U$, as a separate size assumption, a prime field $F=\mathbb Q$ or $\mathbb F_p$ with $p$ prime, and an integer $j\geq0$. Let $\mathcal S_F$ be the $V$-small category of qcqs $F$-schemes with data in $U$ and all $F$-morphisms; qcqs means quasi-compact and quasi-separated. Use the stable presentable enhancement $\mathcal D_\infty(\mathbb Z)$ of unbounded cochain complexes of $V$-small abelian groups, considered in $W$, whose homotopy category is $D(\mathbb Z)$. Presheaves, limits, functor categories and natural transformations below are coherent, in this enhancement.

On $\mathcal S_F$ use the source qcqs cdh topology, with the representative-based size and evaluation convention of the supplied qcqs-site interface. Its generators are Nisnevich covers and families $\{Y\to X,X'\to X\}$ from cartesian squares $Y'=X'\times_XY$, where $Y\to X$ is a finitely presented closed immersion, $X'\to X$ is finitely presented and proper, and $X'\setminus Y'\to X\setminus Y$ is an isomorphism. There is no finite-type or separatedness restriction on $\mathcal S_F$.

Let $\mathrm{Sm}_F\subset\mathcal S_F$ be the full subcategory of smooth finite-type $F$-schemes and let $P_{j,F}=\mathbb Z(j)_{\mathrm{cla}}:\mathrm{Sm}_F^{\mathrm{op}}\to\mathcal D_\infty(\mathbb Z)$ be the classical motivic functor imported from EM Section 3.1, including its coherent pullbacks along every $F$-morphism in this subcategory. At each $T$ its value has the Bloch cycle-complex model $z^j(T,\bullet)[-2j]$: explicitly its degree-$i$ term is $z^j(T,2j-i)$ and its differential is the cycle boundary. This is an objectwise model; arbitrary pullbacks are part of the imported classical functor, rather than naive cycle pullbacks.

For the inclusion $\iota:\mathrm{Sm}_F\hookrightarrow\mathcal S_F$, let $L_{\mathrm{Kan}}=\operatorname{Lan}_{\iota^{\mathrm{op}}}$ be the left adjoint to restriction from coherent presheaves on $\mathcal S_F$ to coherent presheaves on $\mathrm{Sm}_F$. Thus, for each presheaf $Q$, its defining universal property is $\operatorname{Map}(L_{\mathrm{Kan}}P,Q)\simeq\operatorname{Map}(P,\iota^*Q)$, where $\operatorname{Map}$ denotes the space of coherent natural transformations. These are the enhanced Kan extensions of EM Section 2.3.

A derived cdh sheaf $E$ means a coherent presheaf satisfying $E(X)\simeq\lim_{(T\to X)\in R^{\mathrm{op}}}E(T)$ for every cdh covering sieve $R$ on $X$, including the empty covering of the empty scheme. Let $L_{\mathrm{cdh}}$ be the sheaf reflector of EM Section 2.1: it comes with a unit $Q\to L_{\mathrm{cdh}}Q$, its target is such a sheaf, and precomposition with the unit gives $\operatorname{Map}(L_{\mathrm{cdh}}Q,E)\simeq\operatorname{Map}(Q,E)$ for every such $E$. Limits and mapping spaces here have the enhanced meanings already fixed.

The actual EM functor $M_{j,F}=\mathbb Z(j)_{\mathrm{mot}}$ has a natural comparison $\alpha_{j,F}:M_{j,F}\to C_{j,F}$, where
$$C_{j,F}=\mathbb Z(j)_{\mathrm{cdh}}=L_{\mathrm{cdh}}L_{\mathrm{Kan}}P_{j,F}.$$
The comparison identifies $C_{j,F}$ with $L_{\mathrm{cdh}}M_{j,F}$ and $\alpha_{j,F}$ with its sheafification unit.

For every Noetherian $F$-scheme $X$ with data in $U$ and of finite dimension $d$, $H^i(C_{j,F}(X))=0$ for $i>j+d$. Here $\dim X$ is the supremum of the lengths of strict chains of nonempty irreducible closed subsets of the underlying space; irreducible means not a union of two proper closed subsets. Cohomology is cochain cohomology in $D(\mathbb Z)$, and $D(\mathbb Z)^{\leq N}$ denotes the objects whose cohomology vanishes in every degree $>N$. Every such $X$ is quasi-compact and quasi-separated, so it belongs to $\mathcal S_F$ and the stated evaluation is defined, using the representative convention fixed above.

## Statement references
[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs](item-lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs)

## Facts & Assumptions
**Given:** The prime field, weight and size assumptions in the Statement; the prime-field motivic sheaf in [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), its cohomology in [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology), and the cdh site in [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site).

**Goal:** Specify the actual comparison target and import its precise outer-term dimension bound.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is used through the supplied unbounded derived enhancement in [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) and the skeleton and representative-isomorphism choices in [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site). The universe convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); existence of the specified universes is assumed. These inherited hypotheses are explicit here; the import supplies no choice-free reconstruction. Choice also discharges the inherited hypotheses of the Noetherian-to-qcqs bridge used in [F4].

[F1] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the actual prime-field motivic functor, the stable presentable target, coherent-presheaf conventions, and target limits. [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology) supplies its cohomology functors. [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) supplies the precise qcqs cdh site, its generating conditions and representative-based evaluation.

[F2] Smoothness and finite type refer to the structure morphism to $\operatorname{Spec}F$, with the meanings in [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). The homological cycle complex and its boundary are those of [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex). Reference 0, Section 3.1, imports the full classical functor and its value identification, including the coherent pullbacks absent from the raw cycle model.

[F3] Reference 0, Sections 2.1 and 2.3, imports the enhanced sheaf reflector and left Kan extension with the stated universal properties. Its definition (3.5), comparison (1.2) and Theorem 1.3(1) supply the actual target and comparison on this same prime-field site.

[F4] Noetherian has the meaning of [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme). The locally proved [lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs](item-lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs) shows that every such $X$ is qcqs. Together with its assumed data in $U$, this places $X$ in $\mathcal S_F$, so the representative-based evaluation in [F1] is legitimate. The paragraph after Remark 8.8, printed p. 56 in reference 0, explicitly states $C_{j,F}(X)\in D(\mathbb Z)^{\leq j+d}$ in the Noetherian dimension-$d$ setting, invoking Theorem 3.5(1). Apply this stated bound under exactly those hypotheses, with cohomological support interpreted using [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology).

## External input
Import the classical coherent diagram of [F2], the enhanced Kan extension and sheaf reflector of [F3], the actual comparison and its identification with cdh sheafification, and the bound in [F4], from reference 0 under its recorded hypotheses and reading limits. The construction and comparison are established source inputs. No local proof of the classical motivic functor, its all-morphism pullbacks, or the cdh comparison foundations is claimed.

The cdh bound is imported directly from the paragraph after Remark 8.8. Its source justification uses the individual filtered stages and shifted graded terms of KH in Theorem 3.5(1); vanishing of total KH-groups alone is not the imported premise. The meanings of the enhanced target, the site and cohomology remain exactly those in [A1] and [F1]. This uses the sheaf-reflector convention of EM Section 2.1 and makes no identification with a separately modeled hypercomplete localization.
