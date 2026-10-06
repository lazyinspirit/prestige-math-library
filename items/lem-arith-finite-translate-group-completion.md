---
id: lem-arith-finite-translate-group-completion
kind: lemma
title: "Finite translate completion and uniqueness"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-strict-law-translation-and-graph-calculus
  - lem-arith-separated-translate-gluing
  - lem-arith-strict-henselization-and-smooth-sections
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - cor-morphisms-equal-on-dense-open-reduced-source
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 5.3/6-8 and 5.1/3-4 (finite translate completion and uniqueness)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, let $R^{\mathrm{sh}}$ be a strict henselization, and let $X$ be a smooth separated faithfully flat finite-type $R^{\mathrm{sh}}$-scheme with a strict $R^{\mathrm{sh}}$-birational group law. Then finitely many section translates of $X$ yield a smooth separated finite-type $R^{\mathrm{sh}}$-scheme $Y$ on which the multiplication of $X\times X$ is everywhere defined, and $Y$ is an $R^{\mathrm{sh}}$-group scheme containing $X$ as a fibre-dense open subscheme. Any two group completions of the birational law are canonically isomorphic. The uniqueness assertion also holds after arbitrary base change: more generally it holds for smooth separated finitely presented group schemes over a base $S$ containing the same smooth faithfully flat finitely presented fibre-dense open $X/S$ with the same strict law.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$ and residue field $k$, a strict henselization $R^{\mathrm{sh}}$, and a smooth separated faithfully flat finite-type $R^{\mathrm{sh}}$-scheme $X$ with a strict birational group law $m$.

[F1] The strict graph has open-immersion two-coordinate projections and both-projection dense images; section translation is defined at a point exactly when the law is defined at the pair ([[lem-arith-strict-law-translation-and-graph-calculus]]). Gluing a left translate along its closed graph preserves smoothness, separatedness, finite type and strictness ([[lem-arith-separated-translate-gluing]]).

[F2] Over the strictly henselian base every dense open of either fibre is met by a section, and sections meet all fibre-dense opens ([[lem-arith-strict-henselization-and-smooth-sections]]); rational maps descend along faithfully flat maps and agree on schematically dense opens of separated targets ([[def-s-dense-open-and-s-rational-map]], [[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

## Proof

**Proof technique:** direct: enlarge by translates until the multiplication domains stabilize, then descend and verify the group axioms.

1.1 Successively glue translates $X^{(i+1)}=X^{(i)}\cup X^{(i)}(a_{i+1})$ whenever a section translation of the original $X$ is not defined everywhere as a map $X\dashrightarrow X^{(i)}$. Let $Q_i\subseteq X\times X$ be the domain of its original multiplication with values in $X^{(i)}$. By the graph open-immersion property [F1] these are increasing opens of the fixed Noetherian scheme $X\times X$. If the next translation is undefined at $b$, its newly glued translate defines it there; graph calculus then puts $(a_{i+1},b)$ in $Q_{i+1}\setminus Q_i$. Such strict increases cannot continue indefinitely in a Noetherian space. Thus for a finite enlargement $Y$, every original section translation $t_a:X\to Y$ is everywhere defined. [F1, given, construct]

2.1 Fix a geometric pair $(x,y)$ in $X\times X$. Strict graph calculus [F1] makes the auxiliary locus of $w$ where $w^{-1}x\in X$ and $(w^{-1}x,y)$ is in the original law domain open and fibre-dense in $X$. By [F2] some section $a$ meets this locus: on the special fibre use smooth section lifting, and on the generic fibre use the generic-open assertion on a component with nonempty special fibre. Then the map $(x,y)\mapsto a((a^{-1}x)y)$ is defined near the pair, since its inner product lies in the original $X$ and $t_a:X\to Y$ is everywhere defined by step 1.1. Associativity identifies this map with the original rational multiplication. It follows that the extended strict law on $Y$ is a morphism on the entire original $X\times X$. [F1, F2, step 1.1, algebra]

3.1 To extend the law to all of $Y\times Y$, choose an auxiliary $a\in X$ at a generic point of the fibre over a given pair $(b,c)\in Y\times Y$. The strict graph projections [F1] put $ba\in X$ and $a^{-1}c\in X$ on a fibre-dense open auxiliary locus. Their product is defined by step 2.1, and associativity gives $bc=(ba)(a^{-1}c)$. This gives the rational law a regular representative on a smooth faithfully flat auxiliary cover, so domain descent [F2] makes it regular at $(b,c)$. The same argument makes the division map $(b,c)\mapsto b^{-1}c$ regular everywhere. The strict translation monomorphism into the relative birational-map group, supplied by [F1], now identifies $Y(T)$ with a subset closed under multiplication and division for every test $T$. It is nonempty since faithful flatness and smoothness over the strictly henselian DVR give an $R^{\mathrm{sh}}$-section. Hence it is a subgroup: division gives the unit and inverses, and associativity holds by the strict law and schematic density. These natural operations are scheme morphisms by their construction, so $Y$ is the claimed smooth separated finite-type group completion. [F1, F2, step 2.1, algebra]

4.1 For uniqueness over a base $S$, let $Y_1,Y_2$ be smooth separated finitely presented group completions containing the same smooth faithfully flat finitely presented fibre-dense $X$. Each $Y_i$ acts faithfully by birational translations on $X_T$ for every test $T$: the domain $X_T\cap y^{-1}X_T$ is fibre-dense, and equality of translations implies equality of the translating sections after the faithfully flat dense domain cover of $T$. The multiplication map $q_i:X\times_SX\to Y_i$ is smooth, since it is a restriction of group multiplication, and surjective: in each geometric fibre, for a prescribed $y$, the dense opens $X$ and $yX^{-1}$ intersect. It is quasi-compact and locally finitely presented. On the kernel pair of $q_1$, two pairs from $X^2$ have the same product in $Y_1$, hence the same product of birational translations of $X$ by [F1]; faithfulness for $Y_2$ makes their $q_2$-images equal. Fppf morphism descent [F2] gives $Y_1\to Y_2$ with composite $q_1$ equal to $q_2$. Reversing the roles gives an inverse, by surjectivity of the covers. The isomorphism fixes $X$ (compare translations, using their faithful action) and preserves group multiplication by the same comparison. Faithfulness also proves uniqueness. This proof applies to arbitrary pullback bases, including the tensor-product bases used for descent. [F1, F2, step 3.1, algebra] ∎
