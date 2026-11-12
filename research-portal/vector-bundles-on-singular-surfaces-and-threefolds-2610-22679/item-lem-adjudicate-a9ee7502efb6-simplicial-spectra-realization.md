---
title: From simplicial sequential spectra to the fixed coherent realization
status: draft
research_item: lem-adjudicate-a9ee7502efb6-simplicial-spectra-realization
dependency_level: 5
sources:
  references:
    - title: Cary Malkiewich, Spectra and stable homotopy theory, draft January 9,
        2026
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/malkiewich26.pdf
      locator: Theorem 7.1.20, p.433; Lemmas 7.6.8 and 7.6.14, pp.484,486; Definition
        7.6.15, Example 7.6.19, Lemma 7.6.20, Definition 7.6.21 and next
        paragraph, pp.487–489; Lemma 9.2.3 and Theorem 9.2.4, pp.612–613.
        Printed pages; PDF indices are one less.
      statement: Realization gives based CW levels, preserves pointed smash, and sends
        sequential simplicial spectra to topological prespectra; sequential
        stable equivalences are exactly realized stable-group isomorphisms. Kan
        loop comparisons, normalization and Dold–Kan identify realized additive
        models.
      hypotheses: Set-valued pointed simplicial sets; sequential spectra, not
        arbitrary symmetric spectra; compactly generated topological
        realization; Kan targets for the loop comparison.
      reading_limits: "Historical source-reading record, retained without fresh
        reading credit for this coefficient repair: named statements,
        realization formulas, proofs of Lemmas 7.6.8 and 7.6.20, and the
        Dold–Kan homotopy-group argument in the primary hosted PDF extraction.
        Foundations, normalization homotopy equivalence and the Kan loop theorem
        are imported, not reconstructed; no whole-book reading or immutable
        digest is claimed."
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Construction 1.2.3.5 and Definition 1.2.3.9, pp.55–56; Construction
        1.2.3.22, Remarks 1.2.3.24–25 and Example 1.2.3.26, pp.62–64; Remark
        1.3.1.12, Constructions 1.3.1.13 and 1.3.1.16, Proposition 1.3.1.17 and
        proof, pp.83–85; Definition 1.3.2.1, p.88; Remark 1.3.2.17 and the
        following suspension argument, p.91; Corollary 4.2.4.7, p.531; Theorem
        7.1.2.13 and proof, pp.1212–1213. Printed pages.
      statement: First-face Dold–Kan, associative Alexander–Whitney composition and
        the coherent-nerve/dg-nerve comparison give the simplicial dg mapping
        category. Mapping cones are dg cofibers. The derived/module equivalence
        preserves the unit, and mapping from the module unit computes the
        underlying spectrum’s infinite-loop space.
      hypotheses: Complexes of abelian groups, with homological grading and Hom
        differential d(f)=d f-(-1)^degree(f) f d; nonnegative smart truncation
        before Dold–Kan. Alexander–Whitney inputs are ordered. For module
        statements use the commutative ring Z and spectra as ambient category.
        Reverse grading for cochains.
      reading_limits: "Historical source-reading record, retained without fresh
        reading credit for this coefficient repair: listed constructions,
        definitions, associativity statements, nerve-comparison statement and
        proof, cone/suspension argument, unit corollary and proof, and
        derived/module theorem and displayed proof in the primary PDF
        extraction. Foundations remain imported. Identity loops and their
        application to this particular sequential tower are local deductions,
        not a theorem attributed to these passages."
---

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization)
- [thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input)
- [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)
- [math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion](https://alphabetamath.cc/item/lem-simplicial-normalization-prism-and-trivial-fibration-criterion)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)
- [` Cary Malkiewich, Spectra and stable homotopy theory, draft January 9, 2026 · Theorem 7.1.20, p.433; Lemmas 7.6.8 and 7.6.14, pp.484,486; Definition 7.6.15, Example 7.6.19, Lemma 7.6.20, Definition 7.6.21 and next paragraph, pp.487–489; Lemma 9.2.3 and Theorem 9.2.4, pp.612–613. Printed pages; PDF indices are one less. `](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/malkiewich26.pdf)
- [` Jacob Lurie, Higher Algebra, September 18, 2017 · Construction 1.2.3.5 and Definition 1.2.3.9, pp.55–56; Construction 1.2.3.22, Remarks 1.2.3.24–25 and Example 1.2.3.26, pp.62–64; Remark 1.3.1.12, Constructions 1.3.1.13 and 1.3.1.16, Proposition 1.3.1.17 and proof, pp.83–85; Definition 1.3.2.1, p.88; Remark 1.3.2.17 and the following suspension argument, p.91; Corollary 4.2.4.7, p.531; Theorem 7.1.2.13 and proof, pp.1212–1213. Printed pages. `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement
Assume the Axiom of Choice and compatible nested Grothendieck universes containing $\omega$ and all the following data; their existence is a size hypothesis. Put $K=\Delta[1]/\partial\Delta[1]$. A simplicial sequential spectrum $E$ consists of pointed simplicial sets $E_n$, for $n\geq0$, and sphere-first maps $K\wedge E_n\to E_{n+1}$. Its morphisms are families of based level maps commuting with these maps; $N$ denotes the ordinary category nerve, whose simplices are composable strings of arrows. Define a stable weak equivalence to mean an isomorphism on every group $\operatorname*{colim}_{n\gg0}\pi_{n+i}(|E_n|)$, with bonding maps induced by the structure maps and the ordered suspension, for each integer $i$.

Let $\mathcal R$ be the functor for topological sequential prespectra in the stable-spectra interface. Levelwise geometric realization defines the functor
$$J(E)=\mathcal R(|E|):N(\mathrm{Spt}_{\mathrm{sSet}})\longrightarrow\mathrm{Sp}.$$
It sends stable weak equivalences to equivalences. No Kan or cofibrancy assumption on the given $E_n$ is needed. Consequently it can be applied to every value, arrow and composition of a strict presheaf of these spectra, preserving pointwise stable weak equivalences. A strict presheaf here is an ordinary functor $I^{\mathrm{op}}\to\mathrm{Spt}_{\mathrm{sSet}}$ from a small ordinary category.

For an unbounded cochain complex $C$ of abelian groups, use the ordinary additive Eilenberg–Mac Lane model $\mathrm{EM}_{\mathrm{s}}(C)$: its $n$th pointed simplicial set is the underlying set of $\mathrm{DK}(\tau_{\geq0}(C[n])^\sharp)$, with the sphere-first bonding maps specified below. Here $(C[n])^\sharp_q=C[n]^{-q}$, $C[n]^a=C^{a+n}$ with differential $(-1)^n d_C$, and smart truncation of a homological complex retains positive degrees, replaces degree zero by its cycles, and kills negative degrees. The functor $\mathrm{DK}$ is inverse normalization in the mapping-space convention $N'_q(M)=\bigcap_{i=1}^q\ker d_i$ with differential $d_0$; zero is the basepoint. For cochain complexes $A,D$ of abelian groups, write $B(A,D)=\mathrm{DK}(\tau_{\geq0}\underline{\operatorname{Hom}}(A^\sharp,D^\sharp))$ for the simplicial dg mapping object, with Alexander–Whitney composition as specified in [F5]. Let $u_n:K\to B(C[n],C[n+1])$ be the loop at zero whose oriented nondegenerate edge has normalized degree-one coefficient the graded identity $C[n]^\sharp_q\to C[n+1]^\sharp_{q+1}$. This has coefficient $+1$, without a degree-dependent sign. Evaluation at $1$ identifies $B(\mathbb Z[0],C[n])$ with the stated $n$th level. Define its bonding map by composition:
$$\sigma_n:K\wedge B(\mathbb Z[0],C[n])\xrightarrow{u_n\wedge1}B(C[n],C[n+1])\wedge B(\mathbb Z[0],C[n])\xrightarrow{\circ}B(\mathbb Z[0],C[n+1]).$$
Composition is zero when either input is zero, so the displayed smash maps are defined. In particular the new circle is the left composition input. There is a natural equivalence
$$J(\mathrm{EM}_{\mathrm{s}}(C))\simeq\mathcal H(C),$$
where $\mathcal H=U\Phi^{-1}$ is the fixed unit-preserving realization. This is a comparison of functors on cochain complexes of abelian groups, compatible with shifts and every cochain map, hence with whole presheaves of such complexes and cochain maps. It induces the identity on the degree-zero integer generator. For the unnormalized alternating-face chain complex $s(M)$ of a simplicial abelian group $M$, read as the cochain complex $C^a=s(M)_{-a}$ with the same differential, it also agrees, through the natural normalization equivalence, with its ordinary additive realization; no sign automorphism is introduced.

## Facts & Assumptions
**Given:** The size assumptions, simplicial sequential spectra and cochain complexes of abelian groups in the Statement.

**Goal:** Construct the missing functor and compare the ordinary additive models with the fixed coherent realization.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify the inherited assumptions. [thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input) supplies pointed simplicial sets, smash, the circle and simplicial mapping objects. [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) supplies the unbounded complexes and grading reversal, specialized here to the abelian category of abelian groups. The ring case $A=\mathbb Z$ of [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the corresponding derived coefficient category. No new model-structure theorem is proved here.

[F1] Reference 0 supplies geometric realization, its based CW property, its strong pointed-smash comparison and the sequential stable-group convention. Based CW spaces lie in the well-pointed compactly generated weak Hausdorff domain of [def-stable-spectra-interface](item-def-stable-spectra-interface). That interface supplies the functor $\mathcal R$, the natural stable-group comparison and its equivalence criterion, and agrees with the coherent tower for an Omega-prespectrum.

[F2] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the unbounded derived infinity-localization and its reflective dg-nerve model of K-injective complexes. [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input) supplies coherent mapping spectra. Reference 1, Corollary 4.2.4.7, supplies the module unit-mapping equivalence, applied with spectra as both ambient categories and algebra $H\mathbb Z$. [lem-adjudicate-d5306176fce5-coherent-realization](item-lem-adjudicate-d5306176fce5-coherent-realization) fixes $\Phi$, $\mathcal H$, shifts and their naturality.

[F3] [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules) supplies inverse normalization over $\mathbb Z$ in the signed-last-face convention. Reference 0, Theorem 9.2.4, and reference 1, Construction 1.2.3.5 and Definition 1.2.3.9, supply the first-face convention used here. Reference 1 supplies the simplicial dg mapping objects, their Kan property and their coherent-nerve comparison. Evaluation at $1$ gives $\underline{\operatorname{Hom}}(\mathbb Z[0],C[n]^\sharp)=C[n]^\sharp$. Reference 0 supplies the homotopy-group and Kan loop/realization comparisons. The bonding maps and their comparison are constructed here, rather than imported from a levelwise mapping-space formula.

[F4] [math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion](https://alphabetamath.cc/item/lem-simplicial-normalization-prism-and-trivial-fibration-criterion) supplies the natural chain homotopy equivalence from normalized chains to the unnormalized alternating-face complex. Together with [F3] it permits the same comparison when ordinary additive spectra are described first from a simplicial abelian group. The two normalization conventions are compared through $N(M)\to s(M)\leftarrow N'(M)$: the signed-last-face inclusion is supplied by that lemma, and the first-face inclusion by reference 0, Lemma 9.2.3. Both are natural chain homotopy equivalences into the same alternating-face complex $s(M)$. Thus convention changes use natural quasi-isomorphisms, rather than asserting literal equality of the two normalizations. The original unnormalized complex remains the argument of $\mathcal H$.

[F5] [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes) supplies $\underline{\operatorname{Hom}}(A,D)_r=\prod_q\operatorname{Hom}(A_q,D_{q+r})$ with $\partial f=d_Df-(-1)^rf d_A$. Reference 1, Definition 1.3.2.1, supplies its dg composition and Leibniz identity. Constructions 1.2.3.22 and 1.3.1.13 and Example 1.2.3.26 supply its associative simplicial Alexander–Whitney composition. Concretely, let $Q_q$ be the free chain complex on the nondegenerate ordered faces of $\Delta[q]$, with alternating deletion boundary. The first-face Dold–Kan model has $B(A,D)_q=\operatorname{Hom}_{\mathrm{Ch}}(Q_q,\underline{\operatorname{Hom}}(A^\sharp,D^\sharp))$. For $y\in B(D,T)_q$ and $x\in B(A,D)_q$, composition on a face is
$$ (y\circ x)[i_0,\ldots,i_r]=\sum_{p=0}^r y[i_0,\ldots,i_p]\circ x[i_p,\ldots,i_r].$$
Let $\mathrm{Ch}_\Delta$ have cochain complexes of abelian groups as objects and these $B(A,D)$ as mapping objects. Thus this is a specified simplicial category, not a choice of maps on homotopy groups. The identification with $Q_q$ uses the natural quotient-by-degeneracies description of normalized free simplex chains. Constructions 1.3.1.16 and Proposition 1.3.1.17 give a functor from the coherent nerve of this single simplicial category to its dg nerve; its formula on a degree-one mapping simplex retains that coefficient with positive sign.

[F6] The canonical cone square of [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), for the zero map $A\to0$, has cofiber $A[1]$ and nullhomotopy $h^a:A^a\to A[1]^{a-1}$ equal to the identity. It is a coherent square in the dg nerve, and its image under derived localization is still a cofiber square. The same supplied stable structure makes it a fiber square. [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input) supplies preservation of limits by $\operatorname{Map}(\mathbb Z,-)$. These inputs determine the target's loop equivalence with its nullhomotopy, rather than just its groups.

## External input
Reference 0 imports realization, normalization, Dold–Kan homotopy groups and the Kan loop comparison in [F1], [F3] and [F4]. Reference 1 imports the Alexander–Whitney enrichment and nerve comparison in [F3] and [F5], and the unit-mapping and derived/module inputs in [F2]. Its relevant hypotheses are complexes of abelian groups, first-face normalization, and spectra as ambient monoidal category for $H\mathbb Z$-modules. The derived reflector and cone squares in [F6] are supplied with their declared size and Choice assumptions. The identity loops, resulting sequential bonding maps and their compatible comparison with the fixed realization are the local construction and argument; no cited passage is asserted to state that entire comparison.

## Proof
1.1 Realize the levels and structure maps using [F1]: $S^1\wedge|E_n|\cong|K\wedge E_n|\to|E_{n+1}|$. The strong monoidal comparison preserves compositions and the chosen order of the new circle. Each realized level is based CW, so $\mathcal R$ applies without a Kan assumption on $E_n$. Compose these functors to define $J$ on the nerve of the ordinary category, retaining its compositions and all nerve simplices. If $f$ is a stable weak equivalence as defined, [F1] identifies its stable groups with those used by $\mathcal R$, so $J(f)$ is an equivalence. Applying this single functor to a strict presheaf gives an entire coherent diagram, and a strict presheaf map gives its coherent natural transformation. This establishes the required model passage before using any localization of presheaves. [A1, F1, given, construct]

2.1 Let $C$ be a cochain complex of abelian groups and put $M_n(C)=B(\mathbb Z[0],C[n])$. First check the proposed bonding map. With $D_n=C[n]^\sharp$, the degree-one graded identity $v_n:D_n\to D_{n+1}$ is closed, since $\partial v_n=d_{D_{n+1}}v_n+v_nd_{D_n}=0$: the two differentials are $(-1)^{n+1}d_C$ and $(-1)^nd_C$. It therefore determines $u_n$ with both faces zero. Formula [F5] constructs $\sigma_n$ as a simplicial map; associativity and its zero-input property give the specified sphere-first structure. For every cochain map $f$, the identity $f[n+1]v_n=v_n f[n]$ holds as graded maps, so these bonding maps commute strictly with every $f$ and its composites. Now use the single functor $L:N_{\mathrm{hc}}(\mathrm{Ch}_\Delta)\to N_{\mathrm{dg}}(\mathrm{Ch})\to\mathcal D(\mathbb Z)$ from [F3], [F5] and [F2], where $N_{\mathrm{hc}}$ denotes the coherent nerve and the dg category uses grading reversal. It induces maps $\eta_n:M_n(C)\to\operatorname{Map}_{\mathcal D(\mathbb Z)}(\mathbb Z,C[n])$ in spaces, natural with all composition coherences. Each is an equivalence: to check this, take a K-injective resolution $C[n]\to I$ from [F2]. On the simplicial side evaluation at $1$ and [F3] make $M_n(C)\to B(\mathbb Z[0],I)$ a weak equivalence. On the derived side the resolution is an equivalence. Into the local object $I$, the reflective adjunction and the fully faithful K-injective model identify the mapping space with $B(\mathbb Z[0],I)$, including the comparison induced by $L$. This proves the assertion about the already defined $\eta_n$; no independently chosen inverses are assembled. Crucially, apply $L$ also to $u_n$ and its composition pairing. The positive degree-one coefficient is unchanged by [F5]'s nerve-comparison formula. It is exactly the identity nullhomotopy $h^a=1$ in [F6]'s cone square for $C[n]\to0$, with cofiber $C[n+1]$. Hence the loop obtained by composing $u_n$ with a map from $\mathbb Z$ is the loop comparison obtained by applying $\operatorname{Map}(\mathbb Z,-)$ to that fiber square. This identifies the actual adjoint of $\sigma_n$, including its sign and circle orientation, with the target's canonical loop map under $\eta_n$ and $\eta_{n+1}$. All its coherence data are images of these cone squares and the associative simplicial composition under the same $L$. Their naturality in $f$ is the strict identity above; iterating the squares preserves their specified pastings. In particular the adjoints $M_n(C)\to\Omega M_{n+1}(C)$ are weak equivalences, since the target loop maps and the $\eta_n$ are equivalences. These levels are Kan by [F3]; its realization/loop comparison makes their realizations an Omega-prespectrum. By [F2], the unit-preserving $\Phi$ and the module unit-mapping equivalence identify the entire derived tower naturally with $\Omega^\infty\mathcal H(C)[n]$, respecting the same fiber squares. Thus [F1] and step 1.1 identify $J(\mathrm{EM}_{\mathrm{s}}(C))$ naturally with $\mathcal H(C)$. For every integer $r$, the level $n$ of $\mathrm{EM}_{\mathrm{s}}(C[r])$ equals level $n+r$ of $\mathrm{EM}_{\mathrm{s}}(C)$ whenever $n+r\geq0$: their differentials are both $(-1)^{n+r}d_C$ and their bonding loops are the same graded identities. The resulting common late tails, and [F1]’s tail/shift comparison, give compatibility with every integer shift. At $C=\mathbb Z[0]$, $\sigma_0$ sends the positively oriented circle and $a\in\mathbb Z$ to the degree-one coefficient $a$; evaluation at $1$ therefore fixes the positive integer generator. For the unnormalized description, [F4]'s natural quasi-isomorphisms become maps of these spectra by the strict naturality just proved, and become equivalences under $J$; their inclusions retain the original cycle coefficients. This gives the claimed normalization comparison without a sign automorphism. The same single natural equivalence applies to every arrow and composite of a presheaf of cochain complexes of abelian groups. [F1, F2, F3, F4, F5, F6, step 1.1] ∎

## Reading limits
This coefficient repair read the complete current assigned item and all eleven declared direct supplier bodies. The cochain-complex supplier permits an arbitrary abelian category; the Hom-complex supplier gives abelian-group-valued Hom complexes. The derived enhancement at the ring $\mathbb Z$, the Dold–Kan supplier at $R=\mathbb Z$, and the fixed coherent realization supply the abelian-group coefficient domain used here. No supplier change or new dependency is needed. The existing source-record reading limits above are historical, not fresh reading credit for this repair.

Fresh primary-source reading for the coefficient issue was limited to Higher Algebra, Construction 1.2.3.5 and Definition 1.2.3.9 (printed pp.55–56), Construction 1.3.1.13 and its mapping-object description (pp.83–84), and Theorem 7.1.2.13 with its displayed proof (pp.1212–1213). These verify the additive normalization, underlying simplicial abelian-group mapping model and derived/module comparison at $R=\mathbb Z$. The other previously cited passages and their foundations were not newly reconstructed or reread.

The sole direct consumer, `lem-adjudicate-37c8a46c3b6b-open-natural-cycle-layers`, was read in full. Its Statement, Facts [F2], [F7], [F9] and Proof 1.1 apply this comparison to integer cycle complexes and the ordinary fibrant complex presheaf. The existing cycle-complex and Elmanto–Morrow-complex supplier interfaces were read for this coefficient application; Levine, The homotopy coniveau tower, v1, §6.5 (printed pp.37–38), was checked for the fibrant complex and associated ordinary spectrum. The consumer application meets the corrected coefficient hypothesis; no consumer source edit is proposed. The Statement coefficient clarification identifies this consumer for native downstream review. No original-article defect, independent rejudgment, library audit or publication acceptance is asserted.
