---
title: Exact cdh factorization inputs for the source étale map
status: published
research_item: thm-author-e71ff76fe904-cdh-factorization-input
dependency_level: 8
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1 opening assertion, printed p.3; §2.1 p.11 and §2.3 p.12;
        §3.1 p.12, equation (3.1) and the following functorial construction;
        §3.3 pp.14–15, square (3.4), equation (3.5) and Theorem 3.5(3); Theorem
        4.10(4) p.21 and its proof p.22; Theorem 4.24(3) and its proof p.28;
        Example 4.26 p.28; Theorem 4.33(1) and its complete short proof p.31
        (PDF index 30).
      statement: Source-defined D(Z)-valued motivic and classical functors, the qcqs
        cdh site, ordinary derived sheafification and Z(j)_cdh=L_cdh
        Lan_(Sm_F^op to Sch_F^qcqs,op) Z(j)_cla. The canonical motivic-to-cdh
        map is an equivalence modulo n in characteristic zero and after
        inverting p in characteristic p. Z(j)_cdh/n is naturally equivalent to
        L_cdh tau_<=j RΓ_et(-,mu_n^tensor j). The latter untruncated étale
        functor satisfies cdh descent, giving the adjoint extension of its
        truncation map. Derived sections and all functors retain the source
        homotopy-coherent conventions.
      hypotheses: F=Q or F_p for a prime p; j>=0; n>=1 invertible in F; all qcqs
        F-schemes within fixed universe bounds. The cdh generators have finitely
        presented closed immersion and finitely presented proper map, an
        isomorphism off the center. Source ordinary stable-valued sheafification
        is used on this entire site. No separated, finite-type, smoothness or
        finite-dimension condition is imposed on the evaluation scheme.
        Classical input is the source functor on smooth F-schemes, with all its
        pullbacks, rather than the raw cycle complex with only flat pullbacks.
      reading_limits: For this repair read the PDF text of the opening assertion of
        Theorem 1.1, §2.1, the left Kan-extension adjunction in §2.3, the
        classical functor and equation (3.1) in §3.1, the site, equation (3.5)
        and Theorem 3.5(3) in §3.3, Theorems 4.10(4) and 4.24(3) with their
        relevant proof passages, Example 4.26, and Theorem 4.33(1) with its
        complete short proof. Theorem 3.5 is attributed there to [7]. The
        underlying motivic stable-homotopy construction, [7], the full
        trace-method construction and original étale-descent proofs were not
        read or reconstructed for this repair. They remain explicit external
        inputs. No source fiber-range assertion is imported. Choice and the
        explicit nested-universe assumptions are local foundations inherited
        from the declared motivic-functor and qcqs-site suppliers, not
        additional conclusions attributed to this paper. Primary PDF text was
        checked through the web reader in this assignment; no visual PDF
        inspection is claimed.
external_input: true
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Theorem 1.1 opening assertion, printed p.3; §2.1 p.11 and §2.3 p.12; §3.1 p.12, equation (3.1) and the following functorial construction; §3.3 pp.14–15, square (3.4), equation (3.5) and Theorem 3.5(3); Theorem 4.10(4) p.21 and its proof p.22; Theorem 4.24(3) and its proof p.28; Example 4.26 p.28; Theorem 4.33(1) and its complete short proof p.31 (PDF index 30). `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Let $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$, let $j\geq0$, and let $n\geq1$ be invertible in $F$. Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$ and $F\in U$, containing the scheme data under consideration; existence of these universes is a separate size assumption. Work on all quasi-compact quasi-separated (qcqs) $F$-schemes with data in $U$, regarded as a $V$-small category. Use the same bounds as the supplied motivic functor and qcqs site; if the latter is represented by its chosen full skeleton, transport evaluation and morphisms by its specified representative functor. Presheaves take values in the supplied stable derived $\infty$-category of unbounded complexes of $V$-small abelian groups, considered in $W$, with the source's notation $D(\mathbb Z)$ and standard cohomological grading. Set $M_j=\mathbb Z(j)_{\mathrm{mot},F}$, the Elmanto–Morrow weight-$j$ motivic functor of Theorem 1.1. Use the qcqs cdh site generated by Nisnevich covers and abstract blowup families $\{Y\to X,X'\to X\}$ with $Y\to X$ a finitely presented closed immersion, $X'\to X$ finitely presented and proper, and $X'\setminus(X'\times_XY)\cong X\setminus Y$.

Here $L_{\mathrm{cdh}}$ is ordinary stable-valued sheafification as in source §2.1, left adjoint to inclusion of cdh sheaves satisfying covering descent. Fix the target by source §3.3, equation (3.5): $\mathbb Z(j)_{\mathrm{cdh}}=L_{\mathrm{cdh}}\operatorname{Lan}_{i^{\mathrm{op}}}\mathbb Z(j)_{\mathrm{cla}}$, where $i:\mathrm{Sm}_F\hookrightarrow\mathrm{Sch}^{\mathrm{qcqs}}_F$ is the inclusion of smooth $F$-schemes. The input $\mathbb Z(j)_{\mathrm{cla}}$ is the source's fully contravariant classical motivic functor of §3.1, whose value on a smooth scheme is Bloch's cycle complex with the source's shift (3.1); its full functorial construction is imported, rather than inferred from flat pullbacks of cycles. The left Kan extension is the source derived one, left adjoint to restriction along $i^{\mathrm{op}}$. These conventions do not identify $L_{\mathrm{cdh}}$ with unrestricted hypercompletion on the entire qcqs site.

For a scheme $X$, let $\mu_n$ be its small-étale sheaf of roots $u^n=1$ in invertible functions, and use its tensor powers over the constant sheaf $\mathbb Z/n$, with $\mu_n^{\otimes0}=\mathbb Z/n$. Put $B_j(X)=R\Gamma(X_{\mathrm{et}},\mu_n^{\otimes j})$, the source derived global sections on the small étale site, functorially in $X$. This means the right derived global-section functor on the coefficient sheaf in degree zero, not its underived sections. Write $C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n=\operatorname{cofib}(n:C\to C)$ objectwise, and $C[1/p]=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z[1/p]$. The symbol $\tau^{\leq j}$ denotes objectwise cohomological truncation: it preserves cohomology in degrees at most $j$ and kills higher cohomology, with its canonical map to the original complex.

With these objects, the source supplies: (i) the canonical $M_j\to\mathbb Z(j)_{\mathrm{cdh}}$, an equivalence modulo $n$ in characteristic zero and an equivalence after inverting $p$ in characteristic $p$; (ii) the natural equivalence $\theta_j:\mathbb Z(j)_{\mathrm{cdh}}/n\simeq L_{\mathrm{cdh}}\tau^{\leq j}B_j$; (iii) cdh descent of $B_j$. The last datum permits the induced map $\epsilon_j:L_{\mathrm{cdh}}\tau^{\leq j}B_j\to B_j$ adjoint to the canonical truncation map. All maps are natural transformations on the same qcqs prime-field category.

## Statement references
[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[def-etale-tate-coefficients](item-def-etale-tate-coefficients)

[lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## External input
Import the source's stable derived framework (§2.1), fully functorial classical motivic input (§3.1), derived Kan-extension and cdh construction (§3.3), and precisely comparisons (i)–(iii), under the hypotheses recorded in the statement and citation. The existence and functoriality of these source objects, the sheafification adjunction, and étale derived sections and descent are substantial external inputs. The local coefficient definition fixes the same small-étale roots of unity and nonnegative twists. No identification of this source localization with the local separated finite-type, hypercomplete localization is used.

Source version: [Elmanto–Morrow, arXiv:2309.08463v1](https://arxiv.org/pdf/2309.08463v1), September 2023. Theorem 4.33(1) and its proof are on printed p.31 (zero-based PDF page 30). Its proof sentence says “fiber” where the cofiber bound is needed. That sentence is not imported as a fiber bound; the map, descent and comparison data here are unaffected. This item supplies no objectwise cofiber bound from a local equivalence alone, and imports no new bound or mixed-characteristic extension. Underlying motivic-comparison and original descent proofs remain imported, not locally reconstructed.

## Facts & Assumptions
**Given:** The prime field, weight, invertible coefficient, Choice and nested-universe assumptions, and qcqs domain fixed in the statement.

**Goal:** Record the exact source objects, comparisons and induced map, with their actual conventions.

[A1] Assume Choice in the sense of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with the separate existence and nesting assumptions in the statement. Choice is inherited from the motivic supplier's unbounded derived enhancement and the qcqs-site supplier's selection of a skeleton and representative isomorphisms. The motivic supplier uses scheme-data universe $U$, coefficient universe $V$ and ambient universe $W$; the site supplier uses the same $U\in V$. All constructions and evaluations retain these compatible bounds.

[F1] The external citation supplies the source-derived framework, classical functor, cdh construction, comparisons (i)–(iii) and sheafification adjunction specified in External input.

[F2] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) identifies $M_j$; [def-etale-tate-coefficients](item-def-etale-tate-coefficients) fixes the roots of unity and tensor coefficients; [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients) fixes the objectwise derived quotient; [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) supplies the qcqs site's universe and covering conventions. Derived étale sections, standard truncation and scalar localization have the precise meanings in the statement and source convention of [F1].

## Proof
1.1 Under [A1], the declared motivic and qcqs-site suppliers apply with their stated Choice and universe hypotheses. Use [F2] for the motivic functor, étale coefficient sheaf, quotient and site. Import the classical functor, its derived left Kan extension and cdh sheafification from source §§3.1–3.3 as specified in [F1]. Thus the source and target in (i), and both objects in (ii), have the stated domains and meanings. This records the imported constructions; it does not reconstruct their foundations. [A1, F1, F2]

2.1 Theorem 4.10(4) gives (i) in characteristic zero; Theorem 4.24(3) gives it after inverting $p$ in characteristic $p$. Theorem 3.5(3) gives (ii). Theorem 4.33(1)'s complete short proof invokes cdh descent of this $B_j$, referring to Example 4.26, and uses the induced map in (iii). With the source sheafification adjunction this is exactly the extension of $\tau^{\leq j}B_j\to B_j$ specified above. These are the cited external inputs, not a local proof of descent or of an objectwise cofiber range. [A1, F1, F2, step 1.1] ∎
