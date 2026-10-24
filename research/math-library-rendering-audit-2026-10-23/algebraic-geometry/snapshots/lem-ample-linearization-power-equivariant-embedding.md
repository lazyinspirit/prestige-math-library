---
id: lem-ample-linearization-power-equivariant-embedding
kind: lemma
title: An ample linearization embeds equivariantly after a positive power
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
deps: [cor-projective-cohomology-finite-dimensional-field, lem-proper-source-to-separated-target-proper, def-g-linearization-of-an-invertible-sheaf, lem-linearizations-powers-and-equivariant-section-ring, thm-ample-powers-very-ample-proper-base, thm-line-bundle-sections-define-projective-map, thm-projective-map-line-bundle-data-equivalence, def-globally-generated-sheaf, def-ample-invertible-sheaf, def-projective-variety-classical, def-rational-action-on-affine-variety, def-axiom-of-choice, thm-projective-morphism-proper]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Section 1.3, the reduction before Proposition 1.35, printed p. 12"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Remark 5.20"
---

## Statement

Assume AC as inherited from the projective and ample-sheaf suppliers. Let $G$ be a complex affine algebraic group acting algebraically on a complex projective variety $X$ ([[def-projective-variety-classical]]), and let $L$ be an ample $G$-linearized invertible sheaf ([[def-g-linearization-of-an-invertible-sheaf]], [[def-ample-invertible-sheaf]]). Then there exist $m\ge1$, a finite-dimensional rational $G$-module $V$, and a $G$-equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves. Moreover $i$ can be taken to be the morphism defined by the complete linear system $|L^{\otimes m}|$.

## Facts & Assumptions

**Given:** A complex affine algebraic group $G$ acting algebraically on a complex projective variety $X$, an ample $G$-linearized invertible sheaf $L$ on $X$, and the resulting rational $G$-modules $\Gamma(X,L^{\otimes n})$.

[F1] *Sections of tensor powers.* Each $\Gamma(X,L^{\otimes n})$ is a rational $G$-module for the action induced by the linearization, restriction to $G$-stable opens is equivariant, and the multiplication maps of the section ring $R(X,L)$ are $G$-equivariant. ([[lem-linearizations-powers-and-equivariant-section-ring]])

[F2] *Very ample positive powers.* Applied to the proper finite-type morphism $X\to\operatorname{Spec}\mathbb C$ over the Noetherian base $\operatorname{Spec}\mathbb C$ and to the ample sheaf $L$, the very-ampleness theorem supplies $m\ge1$ and a finite family of global sections of $L^{\otimes m}$ generating $L^{\otimes m}$ whose associated $\mathbb C$-morphism $X\to\mathbf P^N_{\mathbb C}$ is a closed immersion with $\mathcal O(1)$ pulling back to $L^{\otimes m}$. Projectivity gives properness of $X$ over $\mathbb C$ by [[thm-projective-morphism-proper]], which also gives properness, hence separatedness, of projective space. ([[thm-ample-powers-very-ample-proper-base]], [[def-ample-invertible-sheaf]])

[F3] *Sections define morphisms.* Global sections $s_0,\dots,s_N$ generating an invertible sheaf $M$ define a morphism $X\to\mathbf P^N$ with $\varphi^*\mathcal O(1)\cong M$, $\varphi^{-1}(D_+(x_i))=X_{s_i}$ and $x_j/x_i\mapsto s_j/s_i$; the assignment is a natural bijection between such morphisms and isomorphism classes of globally generated pairs $(M;s_0,\dots,s_N)$. ([[thm-line-bundle-sections-define-projective-map]], [[thm-projective-map-line-bundle-data-equivalence]], [[def-globally-generated-sheaf]])

[F4] *Rational modules and duality.* The dual of a finite-dimensional rational $G$-module is again a rational $G$-module for the contragredient action, and a morphism into a projective space $\mathbf P(V)$ is $G$-equivariant for the action induced by a linear $G$-action on $V$ exactly when the corresponding sections are acted on compatibly. ([[def-rational-action-on-affine-variety]])

[F5] Global sections of a coherent sheaf on a proper field-scheme are finite-dimensional, and a morphism from a proper field-scheme to a separated field-scheme is proper. ([[cor-projective-cohomology-finite-dimensional-field]], [[lem-proper-source-to-separated-target-proper]])

## Proof

**Proof technique:** direct.

1.1 By [F2] applied to $X\to\operatorname{Spec}\mathbb C$ there are $m\ge1$ and global sections $s_0,\dots,s_N$ of $L^{\otimes m}$ generating $L^{\otimes m}$ whose associated morphism is a closed immersion $X\hookrightarrow\mathbf P^N_{\mathbb C}$ with $\mathcal O(1)$ pulling back to $L^{\otimes m}$; in particular $L^{\otimes m}$ is globally generated and $\Gamma(X,L^{\otimes m})\ne0$. [F2, F3]

2.1 Put $H=\Gamma(X,L^{\otimes m})$, finite-dimensional by projective cohomology finiteness, and $V=H^*$. The complete-system morphism $j:X\to\mathbf P(V)$ exists by global generation [F3], with $j^*\mathcal O(1)=L^{\otimes m}$. Let $W\subseteq H$ be the span of the generating sections used for the closed immersion of step 1.1, discard linear relations, and extend a basis of $W$ to a basis of $H$. Projection to the $W$-coordinates is defined on the open $U\subseteq\mathbf P(V)$ where those coordinates do not all vanish, and $j(X)\subseteq U$. On each standard chart for a generating section in $W$, the map from the affine chart coordinate ring to the corresponding open of $X$ is surjective already using ratios from $W$, since the subsystem map is a closed immersion. Adding the other ratios preserves surjectivity, so $j$ is a closed immersion into $U$. Finally $X$ is projective, hence proper, and $\mathbf P(V)$ is separated, so $j$ is proper; its image is closed in $\mathbf P(V)$. Its closed immersion into $U$ therefore is a closed immersion into $\mathbf P(V)$ as well. [F2, F3, F5, step 1.1]

3.1 *Equivariance.* By [F1] the space $\Gamma(X,L^{\otimes m})$ is a rational $G$-module, so its dual $V$ carries the contragredient rational structure by [F4]. The evaluation map $\Gamma(X,L^{\otimes m})\otimes_{\mathbb C}\mathcal O_X\to L^{\otimes m}$ is $G$-equivariant: for a section $\sigma$, a point $x$ and $g\in G$ one has $(g\cdot\sigma)(gx)=g\,\sigma(x)$, because $(g\cdot\sigma)(gx)=g\,\sigma(g^{-1}gx)$ by the definition of the action. Hence the morphism defined by the complete linear system intertwines the actions and is $G$-equivariant for the induced action on $\mathbf P(V)$. The evaluation quotient also identifies $i^*\mathcal O(1)$ with $L^{\otimes m}$ equivariantly: the fibre of the tautological line at $i(x)$ is the evaluation line in $H^*$, and dualizing its equivariant inclusion gives exactly the equivariant evaluation quotient $H\to L^{\otimes m}_x$. With step 2.1 this gives the required $G$-equivariant closed immersion with $i^*\mathcal O(1)\cong L^{\otimes m}$. [F1, F4, step 2.1]

4.1 The integer $m$, the finite-dimensional rational module $V$ and the $G$-equivariant closed immersion $i$ defined by the complete linear system have been produced in steps 2.1 and 3.1, and $i^*\mathcal O(1)\cong L^{\otimes m}$ holds by step 2.1. [step 2.1, step 3.1] ∎

## Remarks

- **No claim for $L$ itself.** The lemma embeds $X$ only after passing to the positive power $L^{\otimes m}$; no item of this pair asserts that $L$ itself is very ample or linearizes an embedding, in accordance with the design's warning that no linearization-existence or very-ampleness statement for an arbitrary ample bundle be made.
- **Register.** The properness and ampleness clauses are those of the scheme-theoretic suppliers; the classical projective variety $X$ is used through the identification of its closed-point model with the underlying scheme, as elsewhere on this page.
