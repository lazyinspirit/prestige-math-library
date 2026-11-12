---
id: thm-author-dcdf962edbda-source-input
kind: theorem
title: Exact source weight-zero and constant-sheaf input
status: published
domain: mathematics
deps:
  - lem-author-dcdf962edbda-qcqs-site
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1(5), p. 3; §2.1, p. 11; §3.3, p. 14; Theorem 4.10(2), p. 21
        and Example 4.11, p. 22; Theorem 4.24(2) and Example 4.26, p. 28 (arXiv
        v1 pagination).
      statement: "Weight-zero natural pullback squares in D(Z): the top-left and
        bottom-left objects are Z(0)_mot(X) and Z(0)_cdh(X). Over Q the right
        column is RΓ(X, Hodge-completed derived de Rham over Q) → RΓ_cdh(X,
        Hodge-completed derived de Rham over Q). Over F_p it is Z_p(0)_syn(X) →
        (L_cdh Z_p(0)_syn)(X). These are the source comparison maps; both right
        vertical maps are equivalences at weight zero. The canonical left map is
        consequently an equivalence, and Z(0)_cdh(X) is naturally RΓ_cdh(X,Z)
        with the ordinary constant integer sheaf. Section 2.1 supplies the
        derived sheafification and cohomology conventions used for these
        objects. Example 4.26 identifies mod-p weight-zero syntomic cohomology
        with RΓ_et(-,Z/pZ) and invokes its cdh descent."
      hypotheses: F is Q or F_p for a prime p, X is any quasi-compact quasi-separated
        F-scheme, and j=0. Fix compatible universe bounds for the qcqs site. No
        finite-type, separatedness, regularity, dimension or
        resolution-of-singularities assumption is imposed on X. The cdh
        generators in §3.3 use finitely presented closed immersions and finitely
        presented proper morphisms.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Checked the opening and weight-zero assertion of Theorem 1.1, the
        sheafification/cohomology conventions of §2.1, the cdh generators and
        displayed cdh-local complex interface of §3.3, the two displayed
        pullback-square statements, and the complete weight-zero Examples 4.11
        and 4.26 in arXiv:2309.08463v1. The source descent results invoked by
        those examples are imported, not reconstructed. No claim to have checked
        their cited original proofs, the full motivic construction, or all
        proofs of Theorems 4.10 and 4.24 is made. Current maintenance read the
        assigned consumer and its exact declared supplier interfaces; no fresh
        primary-source or page-image reading, reconstruction or independent
        acceptance is claimed for this reference."
dependency_level: 8
formulation_deps:
  - lem-author-dcdf962edbda-qcqs-site
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-dcdf962edbda-qcqs-site
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$; existence of these universes is a separate size assumption. Let $F\in U$ be $\mathbb Q$ or $\mathbb F_p$ for a prime $p$, and let $X$ be any quasi-compact quasi-separated $F$-scheme whose defining data lie in $U$. Use the $V$-small qcqs cdh site $\mathcal C_F$ and its representative-based evaluation convention from the source qcqs-site construction: evaluation on this site at $X$ means evaluation at its chosen representative $rX$. Use the prime-field motivic functor $\mathbb Z(0)_{\mathrm{mot},F}$. Here $D(\mathbb Z)$ denotes the supplied stable presentable derived infinity-category of unbounded complexes of $V$-small abelian groups, considered in $W$, with coherent limits as in the motivic-functor supplier. The imported weight-zero square is natural in $X$ and cartesian in this derived infinity-category:
$$\begin{array}{ccc}\mathbb Z(0)_{\mathrm{mot},F}(X)&\longrightarrow&A_F(X)\\ {\scriptstyle\rho_0}\downarrow&&\downarrow{\scriptstyle\eta_F}\\ \mathbb Z(0)_{\mathrm{cdh},F}(X)&\longrightarrow&B_F(X).\end{array}$$
For $F=\mathbb Q$, its right column is
$$A_{\mathbb Q}(X)=R\Gamma(X,\widehat{L\Omega}_{-/\mathbb Q})\xrightarrow{\eta_{\mathbb Q}}B_{\mathbb Q}(X)=R\Gamma_{\mathrm{cdh}}(X,\widehat{L\Omega}_{-/\mathbb Q}),$$
where $\widehat{L\Omega}$ denotes Hodge-completed derived de Rham cohomology (the source's Hodge filtration at level zero). For $F=\mathbb F_p$, its right column is
$$A_{\mathbb F_p}(X)=\mathbb Z_p(0)_{\mathrm{syn}}(X)\xrightarrow{\eta_{\mathbb F_p}}B_{\mathbb F_p}(X)=(L_{\mathrm{cdh}}\mathbb Z_p(0)_{\mathrm{syn}})(X),$$
where $\mathbb Z_p(0)_{\mathrm{syn}}$ is the source's weight-zero $p$-adic syntomic cohomology. Here $L_{\mathrm{cdh}}$ is derived sheafification, the reflector from $D(\mathbb Z)$-valued presheaves onto cdh sheaves, and $\eta_F$ is the canonical cdh comparison. The square and its four maps are the $j=0$ instances of EM Theorem 4.10(2) over $\mathbb Q$ and Theorem 4.24(2) over $\mathbb F_p$; in particular $\rho_0$ is their canonical motivic comparison, not a choice of maps from cohomology groups. In both cases $\eta_F$ is an equivalence. There is also the source natural identification
$$\mathbb Z(0)_{\mathrm{cdh},F}(X)\simeq R\Gamma_{\mathrm{cdh}}(X,\underline{\mathbb Z}),$$
where $\underline{\mathbb Z}$ is the ordinary abelian sheafification of constant integers, placed in degree zero, and $R\Gamma_{\mathrm{cdh}}$ means derived evaluation on $\mathcal C_F$.

## Statement references
[[lem-author-dcdf962edbda-qcqs-site]]

[[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## External input
The displayed objects, comparison maps, cartesianness, right-column equivalences and constant-sheaf identification are imported together from Elmanto–Morrow, Theorems 4.10(2), 4.24(2), Examples 4.11, 4.26 and Theorem 1.1(5), using §2.1 for derived sheafification and cohomology and §3.3 for the site. In particular, the derived de Rham and syntomic objects are the source's constructions in these interfaces; no local construction of them or descent proof is claimed. The coefficient interpretation is ordinary derived evaluation of the degree-zero constant sheaf on this site. No comparison with a separated finite-type big site, a small cdh site, or a big site over $k$ is asserted.

## Facts & Assumptions
**Given:** The quantified $F$, $p$, $X$, site, Axiom of Choice and nested-universe assumptions in the statement.

**Goal:** Record the precise imported square and weight-zero identifications with their actual maps.

[A1] [[math:def-axiom-of-choice]] is retained for the chosen skeleton and representative isomorphisms in [F1] and the supplied derived enhancement in [F2]. [[math:def-grothendieck-universe-closure-convention]] specifies universe closure; the existence of $U\in V\in W$ with $\omega\in U$ is separately assumed. Use the same $U$ for the fields and scheme data and the same $V$ for the site size and coefficient groups in both suppliers; the enhancement is considered in $W$.

[F1] [[lem-author-dcdf962edbda-qcqs-site]] specifies $\mathcal C_F$, its qcqs evaluation objects, size bounds and cdh topology.

[F2] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the prime-field $D(\mathbb Z)$-valued motivic functor at $j=0$. It also supplies the stable presentable derived enhancement and coherent limit convention used for the square, under the same Choice and nested-universe assumptions [A1].

[F3] The source assertions recorded in External input supply the two characteristic-specific square interfaces, their derived coefficient conventions and the weight-zero descent identifications, with precisely the hypotheses recorded in the citation.

## Proof
1.1 Apply the cited square interfaces at $j=0$, to the functor of [F2] and the object $X$ of the site in [F1]. The hypotheses of both suppliers hold under [A1]: $F$ and the data of $X$ lie in $U$, the site and coefficient groups use $V$, and the enhanced target is considered in $W$; site evaluation uses $rX$ as specified in [F1]. The right columns are exactly $A_F(X)\to B_F(X)$ above and the left projection is the source map $\rho_0$. This records the imported natural cartesian square, without reconstructing the motivic construction. [A1, F1, F2, F3]

2.1 Example 4.11 supplies cdh descent of Hodge-completed derived de Rham in characteristic zero. Example 4.26 supplies cdh descent of weight-zero syntomic cohomology, using its mod-$p$ identification $\mathbb F_p(0)_{\mathrm{syn}}\simeq R\Gamma_{\mathrm{et}}(-,\mathbb Z/p\mathbb Z)$. Thus the source identifies $\eta_F$ as an equivalence in each case. Theorem 1.1(5) and these examples supply the displayed constant-sheaf identification. All these descent and coefficient assertions remain external inputs. [F3, step 1.1] ∎
