---
title: External EM affine syntomic filtration and actual obstruction map
status: published
research_item: thm-author-c5b0693f4fc3-top-torsion-em-syntomic
dependency_level: 9
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: "v1: Sections 2.1–2.3, printed pp.11–12; Section 3.3, opening cdh-site
        convention, printed p.14; Section 4.2, (4.4), Definition 4.14 and Remark
        4.15, printed pp.23–24; Lemma 4.16 and proof, Corollary 4.17 and
        following paragraph, printed pp.24–25; Definition 4.29, Remark 4.30(2),
        map (4.7), Corollary 4.32 and proof, printed p.30."
      statement: For all F_p-algebras, Definition 4.14 constructs mod-p syntomic
        cohomology by derived left Kan extension of shifted logarithmic étale
        forms from finite polynomial algebras; Lemma 4.16 supplies the displayed
        finite filtration. Corollary 4.17 and the following paragraph supply
        fpqc descent and right Kan extension to qcqs schemes. Sections 2.1–2.3
        and 3.3 specify the derived sheaf, filtration, Kan-extension and qcqs
        cdh-site conventions. Equation (4.4) and Definition 4.29 specify the
        obstruction; (4.7) and Corollary 4.32 supply the displayed canonical map
        and fibre sequence.
      hypotheses: p is prime, j is a nonnegative integer; use r=1. A is any
        commutative unital F_p-algebra; X is any qcqs F_p-scheme. No smoothness,
        reducedness, noetherian or finite-type condition is imposed. The
        ordinary logarithmic-forms description is used to define the left Kan
        extension on finite polynomial algebras, not as an equivalence on
        arbitrary singular algebras.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read the versioned PDF extraction at the listed
        conventions, definitions, Lemma 4.16 and its proof, Corollary 4.17 and
        following paragraph, Definition 4.29, Remark 4.30(2), (4.7), and
        Corollary 4.32 and proof. The p-adic right Kan extension and mod-p
        notation are used together with Remark 4.15. Screenshot retrieval for
        PDF page 25 failed (cache miss); no image or visual-diagram inspection
        is claimed. Underlying de Rham–Witt, TC, Cartier and rigidity results
        are imported through these precise interfaces, not reconstructed or
        independently certified. Current maintenance read the current declared
        supplier interfaces and this item; it claims no fresh reading of this
        primary PDF and no reconstruction of its proof."
    - title: Kazuya Kato and Takeshi Saito, On the conductor formula of Bloch
      url: https://www.ms.u-tokyo.ac.jp/~t-saito/pp/b.pdf
      locator: "Section 1.2, printed pp.9–11 (PDF pp.9–11): componentwise exterior
        powers and the standard free simplicial replacement before Definition
        1.2.1; Definition 1.2.1(2) and its immediately following
        homotopy-invariance and flat-comparison paragraph."
      statement: For a nonnegative chain complex K of modules on a ringed topos, the
        derived exterior power is N Lambda^a F^Delta Gamma(K), where Gamma is
        inverse Dold–Kan and F^Delta is the standard free simplicial
        replacement. Exterior powers are taken componentwise on simplicial
        modules. The construction preserves chain homotopy equivalences, and for
        a termwise flat K the natural comparison to N Lambda^a Gamma(K) is a
        quasi-isomorphism.
      hypotheses: a is a nonnegative integer; specialize the ringed topos to modules
        over the fixed commutative ring A. Negate cohomological degrees of the
        nonpositive cotangent model to obtain the nonnegative chain complex K.
        No finite-generation or regularity assumption on A or the modules is
        used. The optional flat-comparison assertion is recorded for source
        precision but is not needed for the chosen free-replacement model.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read Section 1.2 through Definition 1.2.1 and the
        following paragraph in the primary author-hosted PDF extraction. Only
        the construction and stated homotopy/flat comparisons are imported;
        neither Illusie’s underlying theory nor the conductor theorem is
        reconstructed. Screenshot retrieval for PDF page 11 failed (cache miss).
        Normalization and inverse Dold–Kan use the separately declared published
        supplier; no result for variable simplicial coefficient rings is
        inferred. Current maintenance read the current declared supplier
        interfaces and this item; it claims no fresh reading of this primary PDF
        and no reconstruction of its proof."
external_input: true
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-cotangent-complex-of-a-ring-map](https://alphabetamath.cc/item/def-cotangent-complex-of-a-ring-map)
- [math:def-standard-resolution-of-a-ring-map](https://alphabetamath.cc/item/def-standard-resolution-of-a-ring-map)
- [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · v1: Sections 2.1–2.3, printed pp.11–12; Section 3.3, opening cdh-site convention, printed p.14; Section 4.2, (4.4), Definition 4.14 and Remark 4.15, printed pp.23–24; Lemma 4.16 and proof, Corollary 4.17 and following paragraph, printed pp.24–25; Definition 4.29, Remark 4.30(2), map (4.7), Corollary 4.32 and proof, printed p.30. `](https://arxiv.org/pdf/2309.08463v1)
- [` Kazuya Kato and Takeshi Saito, On the conductor formula of Bloch · Section 1.2, printed pp.9–11 (PDF pp.9–11): componentwise exterior powers and the standard free simplicial replacement before Definition 1.2.1; Definition 1.2.1(2) and its immediately following homotopy-invariance and flat-comparison paragraph. `](https://www.ms.u-tokyo.ac.jp/~t-saito/pp/b.pdf)

## Statement
Fix a prime $p$.

For every $\mathbb F_p$-algebra $A$ and $j\geq0$, the complex $\mathbb F_p(j)_{\rm syn}(A)$ has a finite filtration from zero to itself, with graded pieces, in order,
$$L^j[-j-1],L^{j-1}[-j],\ldots,L^0[-1],\quad L^0,L^1[-1],\ldots,L^j[-j],$$
where $L^a=L\Lambda^aL_{A/\mathbb F_p}$. The cotangent complex and its derived exterior powers are cohomologically nonpositive, with the precise simplicial construction specified in External input.
The filtration is in $D(\mathbb F_p)$; the $A$-complexes $L^a$ are viewed there by restriction of scalars.
For the realization of the following motivic comparison by the declared local complex functor, assume the Axiom of Choice and fix compatible nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the scheme, site and coefficient data as in that functor. Universe existence is a separate size assumption. The preceding affine filtration remains imported with its stated algebra and weight hypotheses; no foundational necessity for these additional local premises is asserted.

For any qcqs $\mathbb F_p$-scheme $X$ the canonical comparison fits in the actual natural fiber sequence
$$\mathbb Z(j)_{\rm mot}(X)/p\longrightarrow\mathbb F_p(j)_{\rm syn}(X)\longrightarrow R\Gamma_{\rm cdh}(X,\widetilde\nu_1(j))[-j-1].$$
Here $\mathbb F_p(j)_{\rm syn}(X)$ denotes the scheme extension specified below, and $\widetilde\nu_1(j)(A)$ is the cokernel of the Artin–Schreier map on differential forms (EM Definition 4.29), with its cdh sheafification understood in the displayed sequence. The second arrow is EM (4.7), not an arbitrary map selected from a group isomorphism.

## Statement references
[def-motivic-cohomology](item-def-motivic-cohomology)

[math:def-cotangent-complex-of-a-ring-map](https://alphabetamath.cc/item/def-cotangent-complex-of-a-ring-map)

[math:def-standard-resolution-of-a-ring-map](https://alphabetamath.cc/item/def-standard-resolution-of-a-ring-map)

[math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

## External input
Import [EM Lemma 4.16 and Corollary 4.32](https://arxiv.org/pdf/2309.08463v1) with their stated hypotheses and the following formulation inputs. These are established inputs, not locally reconstructed foundations.

[A1] The Choice premise is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Retain the compatible nested-universe and site-size bounds of [def-motivic-cohomology](item-def-motivic-cohomology) whenever its selected local motivic term or derived quotient is used in this comparison. The fixed universe convention below is chosen compatibly with these bounds. The standard polynomial and cotangent models themselves are explicit choice-free constructions; this qualification concerns the declared local motivic realization, not an added hypothesis on the imported affine filtration.

The underlying derived categories and cochain conventions are those of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category); in particular $C[s]^n=C^{n+s}$ with differential $(-1)^s d_C$, and $D^{\leq0}(R)$ means complexes with no cohomology in positive degrees. For sheafification and Kan extensions use the stable derived infinity-categories of EM Section 2.1, whose homotopy categories are the underlying derived categories; their coherent limits and colimits are part of this imported interface. Work in fixed universes as in [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification), on the category of qcqs $\mathbb F_p$-schemes; qcqs has the meaning of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme).

For the cotangent model, take the functorial standard polynomial resolution $P_\bullet\to A$ of $\mathbb F_p\to A$ in [math:def-standard-resolution-of-a-ring-map](https://alphabetamath.cc/item/def-standard-resolution-of-a-ring-map), and put $M_\bullet=\Omega_{P_\bullet/\mathbb F_p}\otimes_{P_\bullet}A$, with the face and degeneracy maps induced by this resolution. The associated alternating-face complex, reindexed in degrees $-n$, is $L_{A/\mathbb F_p}$ as defined in [math:def-cotangent-complex-of-a-ring-map](https://alphabetamath.cc/item/def-cotangent-complex-of-a-ring-map).

Use the Dold–Puppe construction of [Kato–Saito, Section 1.2, Definition 1.2.1(2)](https://www.ms.u-tokyo.ac.jp/~t-saito/pp/b.pdf). Namely let $K=N(M_\bullet)$ and let $\Gamma$ be inverse normalization from [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules). Form the standard free simplicial replacement $Q_\bullet=F_A^\Delta\Gamma(K)$: apply the standard free $A$-module resolution to the simplicial module and take the diagonal, with its canonical augmentation to $\Gamma(K)$. This replacement and its augmentation are included in the cited input. Then a model for $L^a$ is $N(\Lambda_A^aQ_\bullet)$ reindexed from chain degree $n$ to cochain degree $-n$. Here $\Lambda_A^a Q_n$ is the degree-$a$ part of the tensor algebra on $Q_n$ modulo the ideal generated by $q\otimes q$; its simplicial maps are induced by those of $Q_\bullet$. The imported derived-functor construction supplies well-definedness and homotopy invariance; exterior powers of an arbitrary cochain representative without a simplicial free replacement are not intended. This model is concentrated in cochain degrees at most zero; $L^0=A[0]$. Only modules over the constant ring $A$ are normalized here.

On affine schemes define $\mathbb F_p(j)_{\rm syn}$ by EM Definition 4.14 with $r=1$: the derived left Kan extension, along finite polynomial $\mathbb F_p$-algebras into all $\mathbb F_p$-algebras, of $B\mapsto R\Gamma_{\acute et}(\operatorname{Spec}B,\Omega^j_{\log})[-j]$. Here $\Omega^j_{\log}$ is the étale subsheaf of ordinary differential $j$-forms generated locally by $d\log u_1\wedge\cdots\wedge d\log u_j$ for units $u_i$; for $j=0$ the empty logarithmic symbol is $1$. The derived Kan-extension convention is EM Section 2.3, not an ordinary colimit of cohomology groups.

For the scheme extension import EM Corollary 4.17 and its following paragraph: the affine syntomic presheaves satisfy fpqc descent, and their right Kan extensions along affine schemes into qcqs schemes are the corresponding fpqc sheaves. Write $\mathbb F_p(j)_{\rm syn}(X)=\mathbb Z_p(j)_{\rm syn}(X)/p$, consistently with Definition 4.14 and Remark 4.15. Equivalently the extension is evaluated by the homotopy limit of the affine values over $(\mathrm{Aff}_{/X})^{\rm op}$. The fpqc topology here is generated by faithfully flat quasi-compact covering morphisms. Thus the value on a non-affine $X$ is specified as part of the imported construction.

Use the qcqs cdh site of EM Section 3.3, not a restriction to separated schemes of finite type. Its topology is generated by Nisnevich covering families and the pairs $\{Z\to X,X'\to X\}$ of abstract blowup squares: $Z\to X$ is a finitely presented closed immersion, $X'\to X$ is proper and finitely presented, and it is an isomorphism off $Z$, with upper-left corner $X'\times_X Z$. Nisnevich covering families are étale covering families admitting a residue-field-isomorphic lift of each point. For a discrete presheaf $G$, the notation $R\Gamma_{\rm cdh}(X,G)$ means $(L_{\rm cdh}G)(X)$ in EM Section 2.1, equivalently derived sections of its associated abelian cdh sheaf, not the raw value $G(X)$.

More precisely the discrete affine obstruction is
$$\widetilde\nu_1(j)(A)=\operatorname{coker}\bigl(C^{-1}-1:\Omega^j_{A/\mathbb F_p}\longrightarrow\Omega^j_{A/\mathbb F_p}/d\Omega^{j-1}_{A/\mathbb F_p}\bigr),$$
with $C^{-1}$ the inverse Cartier homomorphism of EM (4.4), followed by the map from de Rham cohomology to forms modulo exact forms; $1$ denotes the natural quotient map. Ordinary forms here are exterior powers of the universal Kähler differential module, with de Rham differential $d$; put $\Omega^{-1}=0$. This precise map and its well-definedness are imported from EM Section 4.2 and Definition 4.29. The cdh term uses its associated sheaf as stipulated there. In general the obstruction presheaf is not even a Zariski sheaf.

The finite filtration is proved in EM Lemma 4.16 by the de Rham/Cartier filtration and left Kan extension; the fiber sequence is proved in Corollary 4.32 from the actual motivic pullback square. The motivic term and its derived quotient by $p$ have the meanings supplied by [def-motivic-cohomology](item-def-motivic-cohomology). The second arrow is obtained from the affine truncation to $\widetilde\nu_1(j)(A)[-j-1]$ in Remark 4.30(2), the canonical cdh-sheafification map, and Zariski descent, exactly as in EM (4.7). In particular, the obstruction formula is the correct primary comparison used to interpret the positive-characteristic part of the top-weight comparison. No equivalence between derived syntomic cohomology and ordinary étale logarithmic forms on an arbitrary singular affine is asserted.
