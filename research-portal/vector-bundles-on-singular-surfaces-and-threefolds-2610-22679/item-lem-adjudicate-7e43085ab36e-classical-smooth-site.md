---
title: Classical and derived smooth Zariski sites over a classical base
status: draft
research_item: lem-adjudicate-7e43085ab36e-classical-smooth-site
dependency_level: 1
sources:
  references:
    - title: Adeel A. Khan and David Rydh, Virtual Cartier divisors and blow-ups
        (arXiv:1802.05702v2)
      url: https://arxiv.org/pdf/1802.05702v2
      locator: §§2.2.2–2.2.3 and footnote 2, printed p. 3
      statement: Derived rings are product-preserving space-valued functors on
        polynomial rings. Derived schemes are Zariski locally their spectra.
        Classical schemes embed fully faithfully, with essential image the
        schemes with discrete structure sheaf; affine truncation takes pi_0.
      hypotheses: The simplicial-commutative-ring derived geometry of SAG Chapter 25,
        with the stated size bounds; no Noetherian, characteristic-zero or
        regularity hypothesis.
      reading_limits: Freshly read these complete passages and footnote 2 in the
        primary PDF extraction. The v2 extraction was opened; its later fetch
        failed, and the unversioned extraction explicitly identifies itself as
        v2 dated 16 May 2019. Screenshot requests failed. No page-image
        inspection, proof of the foundational embedding, or comparison with
        spectral differential smoothness is claimed.
    - title: Adeel A. Khan, Lectures on algebraic stacks (19 October 2023)
      url: https://www.preschema.com/papers/stacksncts.pdf
      locator: Theorem 7.2.2(ii), pp. 44–45; Proposition 8.1.1 and Definition 8.1.2,
        p. 50; Definition/Proposition 8.1.6(ii) and Definition 8.1.7, p. 51
      statement: Animation gives the same polynomial-functor model of derived rings.
        Flat maps satisfy pi_i(B)=pi_i(A) tensor over pi_0(A) with pi_0(B);
        smooth means flat with smooth pi_0 map.
      hypotheses: Animated commutative rings, identified with the polynomial-functor
        model above; all i are nonnegative. Smoothness is the derived-ring
        notion, applied on affine charts.
      reading_limits: Freshly read the stated theorem and definitions, including the
        whole flatness criterion and smoothness clause, in the primary PDF
        extraction. Screenshot requests failed. These foundational results are
        imported, not proved here; the cotangent and deformation theory in the
        surrounding chapters is not used or reconstructed.
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input)
- [` Adeel A. Khan and David Rydh, Virtual Cartier divisors and blow-ups (arXiv:1802.05702v2) · §§2.2.2–2.2.3 and footnote 2, printed p. 3 `](https://arxiv.org/pdf/1802.05702v2)
- [` Adeel A. Khan, Lectures on algebraic stacks (19 October 2023) · Theorem 7.2.2(ii), pp. 44–45; Proposition 8.1.1 and Definition 8.1.2, p. 50; Definition/Proposition 8.1.6(ii) and Definition 8.1.7, p. 51 `](https://www.preschema.com/papers/stacksncts.pdf)


## Statement
Fix the compatible size bounds of the supplied motivic framework. Let $S$ be a classical qcqs scheme, viewed as a derived scheme with discrete structure sheaf in that framework. Let $\mathrm{Sm}^{\rm cl}_S$ be the ordinary category of smooth $S$-schemes with qcqs underlying schemes and all $S$-morphisms, equipped with the Zariski topology. Let $\mathrm{Sm}^{\rm der}_S$ be the smooth qcqs derived site of the framework. The discrete inclusion induces an equivalence of sites $N(\mathrm{Sm}^{\rm cl}_S)\simeq\mathrm{Sm}^{\rm der}_S$, with inverse classical truncation $t_0$. Here $N$ means the nerve of an ordinary category, so this assertion includes all morphisms and their mapping spaces, not just objects.

Consequently restriction induces an equivalence of Zariski sheaves of spaces, and also of ordinary spectra, on the two sites. It preserves limits, colimits, the cartesian and induced pointed smash structures, and the symmetric monoidal structures on spectrum-valued sheaves. It identifies the representable pointed projective lines $(\mathbb P^1_S,\infty)$ and their cotensors. Explicitly, a classical sheaf $B$ extends as $B^{\rm der}(Y)=B(t_0Y)$; this transports graded products, pointed classes, and equivalences computed using $\mathbb P^1_Y$ without changing their values on classical test schemes.

## Statement references
[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input)

## Facts & Assumptions
[F1] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) specify the classical objects. [thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input) specifies the source-native derived smooth Zariski site, sheaves of spaces, ordinary coefficient stabilization, and the projective line pointed at infinity. A Zariski covering here is a jointly surjective family of open immersions between objects of the indicated site; open subobjects carry the restricted structure sheaf. The base is classical; it need not be smooth over a field.

[F2] Reference 0 supplies the affine-local derived geometry, its truncation and fully faithful discrete embedding. Reference 1 supplies the polynomial-functor description of animated rings, the flat homotopy-group formula, and the smoothness criterion. Both ring descriptions use the same category of finite polynomial rings and product-preserving functors to spaces; thus these inputs concern the derived geometry used here.

## External input
The foundational premises in [F2] are imported at references 0 and 1 with their stated hypotheses and reading limits. Only the site comparison and transport argument below is proved locally. In particular, no claim about differentially smooth spectral schemes is imported or needed.

## Proof
**Given:** The classical qcqs base $S$, the two sites, compatible size bounds, and [F1]–[F2].

**Goal:** Identify the full sites and transport the coefficient constructions.

1.1 For a smooth derived $Y\to S$, choose affine charts $\operatorname{Spec}B\subset Y$ over $\operatorname{Spec}A\subset S$. Since $S$ is classical, $\pi_iA=0$ for $i>0$. Smoothness and [F2] give $\pi_iB\cong\pi_iA\otimes_{\pi_0A}\pi_0B=0$ for $i>0$, and a classically smooth map $A\to\pi_0B$. Thus these charts, and hence $Y$, are classical. Conversely a classical smooth morphism satisfies the same flatness criterion: both sides vanish in positive degrees and the degree-zero condition is ordinary flatness. It is therefore derived smooth. The fully faithful embedding in [F2] identifies every mapping space between classical schemes with the discrete set of classical morphisms; passing to the slice over the classical $S$ retains this identification. This proves the categorical equivalence with inverse $t_0$. The underlying spaces and affine opens are unchanged, so qcqs is preserved and reflected; open immersions and their joint surjectivity agree. Thus this is an equivalence of the stated Zariski sites. [F1, F2, construct]

2.1 Precomposition with this site equivalence and with $t_0$ gives inverse equivalences on presheaves. Covering diagrams correspond, so their descent limit conditions correspond as well, and the equivalences restrict to sheaves. These inverse functors preserve all existing limits and colimits. They preserve pointwise products and the terminal object; after adding basepoints they preserve the smash pushouts. Applied levelwise to ordinary spectra they preserve the loop equivalences defining stabilization; the spectrum tensor is obtained from pointed smash by stabilization and colimits, so it too is preserved. Full faithfulness identifies each representable with the corresponding representable, including the usual $\mathbb P^1_S$ and its infinity section. For classical $Y$, its derived product with $\mathbb P^1_S$ over $S$ is classical, since it is smooth over $Y$ by [F1]–[F2], and its truncation is $\mathbb P^1_Y$; hence this is also the ordinary projective line over $Y$. Under the tensor-preserving equivalence the right adjoints defining projective-line cotensor correspond by their adjunctions. Therefore the explicit extension $B\circ t_0$ transports the actual graded products, pointed maps and projective-line equivalences, with every identity, composite and homotopy retained by functoriality. [F1, F2, step 1.1] ∎
