---
id: "cor-deformation-cohomology-of-a-smooth-scheme"
kind: "corollary"
title: "Deformation cohomology of a smooth scheme: tangent, obstruction and automorphism spaces"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 16
justified_by: []
aliases: []
deps:
  - "thm-hilbert-basis-theorem"
  - "thm-noetherian-ring-quotients-and-localisations"
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "lem-differentials-base-change"
  - "thm-first-order-deformations-controlled-by-ext-one-cotangent-complex"
  - "thm-obstructions-lie-in-ext-two-cotangent-complex"
  - "lem-cotangent-complex-truncation-and-smooth-case"
  - "lem-ext-of-locally-free-sheaf-via-cohomology"
  - "thm-differentials-smooth-locally-free"
  - "def-smooth-morphism-schemes"
  - "def-flat-morphism-schemes"
  - "cor-projective-cohomology-finite-dimensional-field"
  - "def-coherent-module-scheme"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.9.1 (tag 08R5) and Lemma 92.16.1 (tag 08SP), Lemma 92.21.1 (tag 08UZ): L = Omega[0] in the smooth case and the resulting deformation cohomology (printed pages 19-21 and 25-33, read 2026-10-05)"
    - title: "Edoardo Sernesi, An overview of classical deformation theory"
      url: "http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf"
      locator: "Section 2b (pp. 5-6): first-order deformations of a nonsingular variety are H^1(X,Theta_X), and the automorphism lemma; Section 3 (pp. 7-10): obstructions in H^2 (read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice (supplying Dependent Choice, [[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]). Let $k$ be a field
and let $X$ be a smooth $k$-scheme, flat and locally of finite presentation over
$k$ ([[def-smooth-morphism-schemes]], [[def-flat-morphism-schemes]]). Then for
every small extension $A'\to A$ of local Artin $k$-algebras with kernel $I$ and
every deformation $\xi$ of $X$ over $A$, write $X_A$ for its total space and $T_{X/k}=\mathcal Hom(\Omega^1_{X/k},\mathcal O_X)$. Then:

1. $\operatorname{Ext}^0_{\mathcal O_{X_A}}(L_{X_A/A},\mathcal O_X\otimes_kI)\cong H^0(X,T_{X/k}\otimes_kI)=\operatorname{Der}_A(\mathcal O_{X_A},\mathcal O_X\otimes_kI)$
   governs infinitesimal automorphisms;
2. first-order deformations satisfy $T^1_X\cong H^1(X,T_{X/k})$
   (Kodaira-Spencer);
3. the obstruction $o(\xi)$ lies in $H^2(X,T_{X/k}\otimes_kI)$; in particular if
   $H^2(X,T_{X/k}\otimes_kI)=0$ then every deformation of $X$ over $A$ lifts to
   $A'$.

For $X$ smooth and proper over $k$ the three groups $H^0,H^1,H^2$ of the tangent
sheaf are finite-dimensional and are the classical deformation-theoretic
spaces.

## Facts & Assumptions

**Given:** a field $k$, a smooth flat locally finitely presented $k$-scheme $X$, a small extension $A'\to A$ of local Artin $k$-algebras with kernel $I$, a deformation $\xi$ of $X$ over $A$, and the Axiom of Choice.

[F1] The first-order theorem identifies $T^1_X$ with $\operatorname{Ext}^1(L_{X/k},\mathcal O_X)$. For a flat deformation $X_A$, the obstruction theorem assigns an obstruction in $\operatorname{Ext}^2_{\mathcal O_{X_A}}(L_{X_A/A},\mathcal O_{X_A}\otimes_AI)$, a lifting torsor under degree-one Ext and infinitesimal automorphisms given by degree-zero Ext. ([[thm-first-order-deformations-controlled-by-ext-one-cotangent-complex]], [[thm-obstructions-lie-in-ext-two-cotangent-complex]])

[F2] For smooth $X$ over $A$ one has $L_{X/A}\simeq\Omega^1_{X/A}[0]$ and $\Omega^1_{X/A}$ is locally free of finite rank. ([[lem-cotangent-complex-truncation-and-smooth-case]], [[thm-differentials-smooth-locally-free]])

[F3] For a locally free finite-rank $F$ and any quasi-coherent $M$, $\operatorname{Ext}^i_{\mathcal O_X}(F,M)\cong H^i(X,\mathcal Hom(F,M))=H^i(X,F^\vee\otimes M)$; in particular with $F=\Omega^1_{X/A}$ one gets $\operatorname{Ext}^i(L_{X/A},M)\cong H^i(X,T_{X/A}\otimes M)$ with $T_{X/A}=\mathcal Hom(\Omega^1_{X/A},\mathcal O_X)$. ([[lem-ext-of-locally-free-sheaf-via-cohomology]])

[F4] If $X$ is proper over $k$ and $\mathcal F$ is coherent, then $H^q(X,\mathcal F)$ is finite-dimensional over $k$ for every $q$. ([[cor-projective-cohomology-finite-dimensional-field]], [[def-coherent-module-scheme]])

## Proof

**Proof technique:** combine the two deformation theorems with the smooth-case computation of the cotangent complex and the Ext-via-cohomology formula; record finite-dimensionality separately for proper $X$.

1.1 The total space $X_A$ is smooth over $A$: it is flat and locally finitely presented by the definition of a deformation ([[def-infinitesimal-deformation-functor-over-square-zero-extension]]), and the sole geometric fibre is the smooth special fibre $X$. The fibre criterion in the smooth-morphism definition gives smoothness. Its differential sheaf is finite locally free, and its restriction to $X$ is $\Omega^1_{X/k}$ by differential base change ([[lem-differentials-base-change]]). Since the kernel $I$ of a small extension is annihilated by the maximal ideal of $A$, the coefficient sheaf $\mathcal O_{X_A}\otimes_AI$ is canonically the pushforward of $\mathcal O_X\otimes_kI$ on the same underlying topological space. Applying the smooth-cotangent and finite locally free Ext formulas [F2] and [F3] therefore gives the degree-$0$ and degree-$2$ groups $H^i(X,T_{X/k}\otimes_kI)$. The automorphism and obstruction assertions then follow from [F1]. [F1, F2, F3, given]

2.1 For the dual numbers, the first-order theorem [F1] and the same smooth computation give $T^1_X\cong H^1(X,T_{X/k})$. If the degree-$2$ group in step 1.1 vanishes, the obstruction is zero and [F1] supplies a lift. [F1, F2, F3, step 1.1]

3.1 If $X$ is smooth and proper over $k$, it is locally of finite presentation over the field $k$. Its affine chart rings are therefore quotients of finite-variable polynomial rings over $k$, which are Noetherian by iteration of [[thm-hilbert-basis-theorem]] and [[thm-noetherian-ring-quotients-and-localisations]]. Thus $X$ is locally Noetherian, so its finite locally free tangent sheaf is coherent by the locally Noetherian clause of [[def-coherent-module-scheme]]. Applying [F4] to $T_{X/k}$ makes $H^0,H^1,H^2$ finite-dimensional over $k$. The Axiom of Choice is inherited from the declared suppliers. [F2, F4, step 1.1, step 2.1] ∎

