---
id: lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness
kind: lemma
title: Compactness of the smooth Zariski stack coefficients
status: published
domain: mathematics
deps:
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - math:def-axiom-of-choice
  - lem-adjudicate-cc64bae62648-derived-zariski-site-closure
dependency_roles:
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-cc64bae62648-derived-zariski-site-closure: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
sources:
  references:
    - title: Lurie, Higher Topos Theory, primary author PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Lemma 5.1.5.2 and Lemma 5.1.5.3, printed pp. 324–326; Proposition
        5.3.3.3, p. 394; Definition 6.2.2.6 and Proposition 6.2.2.7, p. 579;
        Theorem 7.3.5.2, pp. 778–779
      statement: Representables corepresent presheaf evaluation and generate
        presheaves under colimits. Filtered colimits of spaces commute with
        finite limits. Sheafification is a left exact reflective localization.
        On a coherent topological space, ordinary space-valued sheaves are
        determined by their values on compact opens, with terminal value on the
        empty open and the pullback condition for binary unions.
      hypotheses: The site is small in the chosen universes; values are spaces. The
        compact-open criterion assumes a coherent topological space. Apply the
        filtered-colimit assertion with the regular cardinal aleph_0. These are
        ordinary sheaves, without imposing hyperdescent.
      reading_limits: Freshly opened the primary author PDF and read the displayed
        statements of Lemmas 5.1.5.2-5.1.5.3, Proposition 5.3.3.3, Definition
        6.2.2.6, Proposition 6.2.2.7 and Theorem 7.3.5.2, including its
        empty-open and binary-union conditions, through web text extraction. The
        compact-open square is interpreted contravariantly as F(U union V) ->
        F(U) times over F(U intersection V) F(V). The categorical theorems and
        sheafification construction are imported; only their smooth-site
        application is proved locally. Earlier source-reading records are
        historical.
    - title: Stacks Project, topology of qcqs schemes
      url: https://stacks.math.columbia.edu/tag/094L
      locator: Lemma 28.2.4 (094L), full statement and proof
      statement: "The underlying topological space of a qcqs scheme is spectral: it is
        sober and quasi-compact, with a basis of quasi-compact opens closed
        under finite intersections."
      hypotheses: An ordinary quasi-compact quasi-separated scheme. Applied to t_0Y
        after the native derived geometric comparison in
        lem-adjudicate-cc64bae62648-derived-zariski-site-closure.
      reading_limits: Freshly read the full statement and proof at the primary live
        tag 094L. This ordinary-scheme result supplies spectrality only. The
        comparison with a derived scheme and closure of the smooth site are
        supplied separately by the declared geometric helper; no such comparison
        is attributed to tag 094L.
formulation_deps:
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - math:def-axiom-of-choice
  - lem-adjudicate-cc64bae62648-derived-zariski-site-closure
argument_deps:
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - math:def-axiom-of-choice
  - lem-adjudicate-cc64bae62648-derived-zariski-site-closure
---

## Statement
Assume the Axiom of Choice and fix compatible universes. For any qcqs derived base $S$ in the supplied non-$\mathbb A^1$ framework, let $\mathrm{St}_S$ be the category of ordinary space-valued Zariski sheaves on the qcqs smooth site $\mathrm{Sm}_S$; no hypercompletion is imposed. Filtered colimits in $\mathrm{St}_S$ are computed objectwise. The sheafifications $h_Y$ of representable presheaves, for $Y\in\mathrm{Sm}_S$, are compact and generate $\mathrm{St}_S$ under colimits. Thus $\mathrm{St}_S$ is compactly generated. Its cartesian multiplicative structure is the one in the supplied framework. Cotensor by the unpointed projective line, and reduced cotensor by the pointed projective line on pointed coefficients, both preserve filtered colimits. These discharge the coefficient hypotheses used in the EM application of the Vect/Grass computation, without a Noetherian, dimension or separatedness bound.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] in the imported categorical foundations and use the compatible universes of [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]]. The site, sheafification as a colimit-preserving left adjoint, cartesian multiplicativity and pointed cotensor are those of this framework.

[F1] Source record 0 supplies the compact-open sheaf criterion, exactness of filtered colimits of spaces, and Yoneda evaluation and generation. Apply source record 1 to the ordinary truncation of each qcqs test scheme using [F2]; its unchanged underlying Zariski space is coherent. Compact means that maps from the object preserve filtered colimits, as defined by the framework.

[F2] [[lem-adjudicate-cc64bae62648-derived-zariski-site-closure]] supplies the native classical truncation with unchanged Zariski opens and qcqs hypotheses, closure of smooth qcqs test schemes under quasi-compact open restriction, and smooth qcqs projective-line products. It treats the relevant native geometry directly and makes no equivalence between animated and spectral schemes.

## External input
Import the categorical statements in source record 0 and the ordinary qcqs topology statement in source record 1. The geometric premises are supplied by [F2], including the comparison needed before applying source record 1. For each $Y$, the compact-open criterion applies to the ordinary topological space underlying $Y$; its quasi-compact open derived subschemes are again objects of $\mathrm{Sm}_S$ by [F2]. The argument below applies these inputs to the smooth site; that compactness conclusion is locally proved, rather than attributed to an unstated theorem in Annala–Iwasa.

## Proof
**Given:** The source-native $S$, ordinary Zariski sheaves, Choice and compatible universes above.

**Goal:** Check compact generation and projective-line cotensor compactness for these coefficients.

1.1 Let $(F_a)$ be a small filtered diagram of sheaves and put $F(Y)=\operatorname*{colim}_a F_a(Y)$ in spaces. Fix a test scheme $Y$. By [F2] its ordinary truncation is qcqs with the same open subsets. Its quasi-compact opens are closed under finite unions and intersections by [F1], and the associated derived opens remain in the smooth site by [F2]. Here a compact open means a quasi-compact open; coherent means quasi-compact with a basis of such opens closed under finite intersections. On these opens every $F_a$ sends the empty open to a point and satisfies $F_a(U\cup V)\simeq F_a(U)\times_{F_a(U\cap V)}F_a(V)$. Filtered colimits preserve the finite limits in these conditions, so the same holds for $F$. The compact-open criterion extends this restriction uniquely to a sheaf on all opens of $Y$. Every Zariski cover of a qcqs object has a finite refinement by quasi-compact opens, since these form a basis and the object is quasi-compact; their finite intersections remain quasi-compact opens and objects of the smooth site. Consequently the just-verified sheaf condition on these opens is exactly descent for the covering sieves on the site. Thus $F$ is a site sheaf. This proves objectwise computation of the filtered colimit. The proof concerns ordinary descent, not hyperdescent. [A1, F1, F2, given, construct]

2.1 By sheafification adjunction and Yoneda, $\operatorname{Map}(h_Y,F)=F(Y)$; step 1.1 therefore makes each $h_Y$ compact. Yoneda generation expresses every presheaf as a colimit of representables. Applying the colimit-preserving sheafification to that expression gives the asserted generation of sheaves; the family is small in the fixed universe. Unpointed cotensor satisfies $(F^{\mathbb P^1})(Y)=F(Y\times_S\mathbb P^1_S)$, which preserves filtered colimits by step 1.1 since the product is smooth qcqs by [F2]. For a pointed sheaf $F$, pointed maps from $(\mathbb P^1,\infty)$ over $Y$ give $(F^{(\mathbb P^1,\infty)})(Y)\simeq\operatorname{fib}(F(Y\times_S\mathbb P^1_S)\to F(Y))$, the fiber being over the specified basepoint section. Step 1.1 computes both evaluations objectwise in filtered diagrams, and [F1] commutes the fiber with the colimit. Hence the reduced cotensor also preserves filtered colimits. Cartesian multiplicativity is already supplied in [A1]. These are precisely the two additional coefficient hypotheses, with no extra geometric restriction. [A1, F1, F2, step 1.1] ∎
