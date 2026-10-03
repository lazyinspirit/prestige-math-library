---
id: lem-av7-relative-integral-closure-finite-affine-charts
kind: lemma
title: Finite relative integral-closure charts for classical quasi-finite morphisms
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
proof_strategy: direct
deps: [thm-affine-domain-dimension-transcendence-degree, cor-finite-type-algebra-over-noetherian-ring-is-noetherian, def-axiom-of-choice, def-classical-algebraic-prevariety-regular-maps-and-varieties, thm-classical-principal-open-coordinate-ring-localization, lem-classical-variety-noetherian-components, thm-localisation-of-modules-is-exact, thm-integrality-commutes-with-localisation, thm-generic-fibre-dimension, cor-noether-normalisation-module-finiteness, thm-polynomial-algebras-over-fields-have-finite-integral-closures, thm-finitely-generated-algebraic-extensions-are-finite, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-transitivity-of-integrality, cor-integral-elements-form-a-subring]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Stacks Project, relative normalization
      url: https://stacks.math.columbia.edu/tag/035H
    - title: Stacks Project, flat base change for structure sheaf sections
      url: https://stacks.math.columbia.edu/tag/02KH
    - title: Stacks Project, polynomial algebras over fields have finite integral closures
      url: https://stacks.math.columbia.edu/tag/032O
---

## Statement

Assume AC and let $k$ be algebraically closed. Let $f:X\to Y$ be a separated finite-type morphism of classical varieties with finite fibres, allowing reduced reducible or empty varieties. On an affine open $U$ with coordinate ring $A$, set $M_U=\Gamma(f^{-1}U,\mathcal O_X)$ and $C_U=\operatorname{Int}_A(M_U)$, the integral closure of the image of $A$ in $M_U$. Then $C_U$ is a finite reduced $A$-algebra and
$$ (C_U)_a=C_{D(a)} $$
for every $a\in A$. These finite affine spaces glue canonically to a finite classical variety $N\to Y$, and evaluation gives a canonical map $j:X\to N$ over $Y$.

Moreover for a flat finite-type $A$-algebra $E$, the sections of the scheme-theoretic base change of the inverse image are $E\otimes_A M_U$. This base change is formed by tensoring the affine chart rings and gluing, retaining any nilpotents; it need not be a reduced classical variety. No assertion that $j$ is an open immersion is made here.

## Facts & Assumptions

**Given:** The field, morphism and affine-chart definitions of the Statement. The original varieties have reduced classical function sheaves. Arbitrary flat base changes use the tensor-product affine sheaves, without reduction.

[F1] Classical varieties have finite affine covers and are Noetherian with finitely many components. Principal-open sections are localizations ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]], [[lem-classical-variety-noetherian-components]], [[thm-classical-principal-open-coordinate-ring-localization]]).

[F2] Localization is exact and integral closure commutes with localization ([[thm-localisation-of-modules-is-exact]], [[thm-integrality-commutes-with-localisation]]). Integral elements form a subring and integrality is transitive ([[cor-integral-elements-form-a-subring]], [[thm-transitivity-of-integrality]]).

[F3] For a dominant morphism of irreducible classical varieties, the dimension of a general nonempty fibre equals the transcendence degree of the function-field extension ([[thm-generic-fibre-dimension]], [[thm-affine-domain-dimension-transcendence-degree]]). A finitely generated algebraic field extension is finite ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[F4] Finite-type algebras over a field are Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). Noether normalization makes a finite-type domain finite over a polynomial subring. The integral closure of a polynomial ring over a field in any finite extension of its fraction field is finite. Submodules of finite modules over Noetherian rings are finite ([[cor-noether-normalisation-module-finiteness]], [[thm-polynomial-algebras-over-fields-have-finite-integral-closures]], [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]). AC is assumed ([[def-axiom-of-choice]]).

## Proof

1.1 Cover $f^{-1}U$ by finitely many affine opens $W_i$. Cover their pairwise intersections by finitely many affine opens, using [F1]. The sheaf axiom realizes $M_U$ as the kernel of the difference map from the finite product of the coordinate rings of $W_i$ to the finite product of the overlap-chart rings. After tensoring by any flat $A$-algebra $E$, exactness and commutation with finite products identify that kernel with the sections on the base-changed affine cover. This proves the flat-base-change assertion. In particular $M_{D(a)}=(M_U)_a$. By [F2], $C_{D(a)}=(C_U)_a$. The identifications are canonical restrictions and preserve multiplication. [F1, F2, construct, algebra]

1.2 Let $S_i$ be the coordinate ring of $W_i$ and $\mathfrak q$ a minimal prime of $S_i$; set $D=S_i/\mathfrak q$ and $A_0=A/\ker(A\to D)$. The corresponding irreducible component maps dominantly onto its image closure, with finite fibres because it is a closed subvariety of $W_i$. By [F3] its function field $L=\operatorname{Frac}D$ is a finite extension of $\operatorname{Frac}A_0$: the general fibre is zero-dimensional, so the relative transcendence degree is zero, and both fields are finitely generated. Choose a polynomial subring $R\subseteq A_0$ for which $A_0$ is module-finite by [F4]. Then $L/\operatorname{Frac}R$ is finite. The integral closure $B$ of $R$ in $L$ is finite over $R$. Every element integral over $A_0$ is integral over $R$ by [F2]; hence the integral closure of $A_0$ in $D$ embeds as an $R$-submodule of $B$, and is finite over $R$ by [F4]. Its $R$-generators are also $A_0$-generators, since it is an $A_0$-module. It is therefore finite over $A$. [F2, F3, F4, algebra, construct]

2.1 The reduced ring $S_i$ injects into the finite product of its minimal-prime domains $D$. Restricting an element integral over $A$ into each of these domains gives an element of the finite module found in step 1.2. Thus $\operatorname{Int}_A(S_i)$ is a submodule of a finite $A$-module and is finite by [F4]. The restriction map $M_U\hookrightarrow\prod_i S_i$ is injective by the sheaf axiom. Consequently $C_U$ is a submodule of the finite product $\prod_i\operatorname{Int}_A(S_i)$ and is finite. It is reduced because it is a subring of the ring of actual functions on $f^{-1}U$. If the inverse image is empty, $M_U=C_U=0$ and all assertions hold. [F1, F4, step 1.1, step 1.2, algebra]

3.1 On every principal open of an affine target chart, step 1.1 identifies the finite algebra restrictions. On an overlap of target charts use a finite principal-open refinement; the identifications agree because each comes from restriction of actual functions. They satisfy the cocycle condition and glue their finite affine spaces and sheaves to $N$. Finiteness is affine local by its defining finite-module charts, so $N\to Y$ is finite. On $f^{-1}U$, every element of $C_U$ is a global regular function and evaluation is a regular map to the affine space of that algebra: choose finitely many algebra generators, evaluate them, and note that their defining relations vanish. The maps agree on the same refinements and give $j:X\to N$. Thus neither the charts nor this map depend on the covers chosen in the proof. [F1, step 1.1, step 2.1, construct] ∎
