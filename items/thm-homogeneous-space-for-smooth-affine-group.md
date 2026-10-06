---
id: thm-homogeneous-space-for-smooth-affine-group
kind: theorem
title: "Homogeneous spaces of smooth affine groups are separated schemes"
status: draft
origin: pipeline
dependency_level: 4
deps: [def-algebraic-group-action-and-scheme-theoretic-stabilizer, def-axiom-of-choice, def-locally-closed-immersion, def-morphism-and-closed-subgroup-scheme, def-projective-bundle-scheme, def-quotient-sheaf-and-representable-quotient, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-separated-morphism-schemes, def-separated-scheme-over-base, def-smooth-morphism-schemes, lem-action-map-fibres-and-stabilizer-subscheme, lem-base-change-open-closed-immersions, lem-fppf-quotient-representability-criterion, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, lem-projective-space-action-from-linear-representation, lem-projective-space-diagonal-closed, lem-separatedness-of-open-and-closed-immersions, prop-faithfully-flat-orbit-map-represents-coset-quotient, lem-nonaffine-subgroup-scheme-stabilizer-of-line]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Theorem 7.18, Proposition 7.17 and Theorem 4.27, printed pp. 94-95 and 142-143"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf
      locator: "Theorems 1.15-1.16, printed pp. 5-6"
    - title: "The Stacks Project, Groupoid Schemes, Sections 39.20 and 39.23 (tags 02VG, 03BD, 03C5, 03BM, 03BE)"
      url: https://stacks.math.columbia.edu/download/groupoids.pdf
      locator: "Section 39.20 (Definition 39.20.1 and Lemma 39.20.3)"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $G$ be a smooth affine
group scheme of finite type over $k$ ([[def-smooth-morphism-schemes]]) and let
$H\subseteq G$ be a closed subgroup scheme
([[def-morphism-and-closed-subgroup-scheme]]). Then the fppf quotient sheaf
$G/H$ ([[def-quotient-sheaf-and-representable-quotient]]) is representable by a
separated $k$-scheme of finite type, unique up to unique isomorphism, and the
quotient morphism $G\to G/H$ is faithfully flat and locally of finite
presentation. Moreover there are a finite-dimensional $k$-vector space $V$, a
rational representation
$r:G\to\operatorname{GL}_V$
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]) and a
line $L\subseteq V$ with scheme-theoretic line stabilizer $H$, such that $G/H$
is isomorphic to the orbit $O_{[L]}$ of $[L]$ under the induced action on
$\mathbf P_{\mathrm{lines}}(V)=\mathbb P(V^\vee)$
([[lem-projective-space-action-from-linear-representation]]) and the resulting
morphism $G/H\to\mathbf P_{\mathrm{lines}}(V)$ is an immersion
([[def-locally-closed-immersion]]). In particular $G/H$ is separated and finite
type over $k$, and no smoothness of $H$ is required. The Axiom of Choice is
used through the generic-flatness, constructibility and Chevalley inputs cited
in the proof.

## Facts & Assumptions

**Given:** AC, a field $k$, a smooth affine finite-type $k$-group scheme $G$, and a closed subgroup scheme $H\subseteq G$.

[F1] Chevalley's line-stabilizer theorem: there are a finite-dimensional rational representation $V$ of $G$ and a line $L\subseteq V$ with $H(R)=\{g\in G(R):gL_R=L_R\}$ for every $k$-algebra $R$, with no smoothness of $H$ ([[lem-nonaffine-subgroup-scheme-stabilizer-of-line]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F2] A rational representation induces an action of $G$ on $\mathbf P_{\mathrm{lines}}(V)=\mathbb P(V^\vee)$, and the scheme-theoretic stabilizer of $[L]$ has $R$-points exactly $\{g:r(g)L_R=L_R\}$ ([[lem-projective-space-action-from-linear-representation]], [[lem-action-map-fibres-and-stabilizer-subscheme]]).

[F3] For smooth $G$ the orbit subscheme $O_x$ of a point $x$ with a $k$-point is locally closed and smooth over $k$ and $\varrho_x:G\to O_x$ is faithfully flat and locally of finite presentation ([[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]]).

[F4] A faithfully flat orbit map representing a coset quotient: if $H=G_x$ and $\varrho_x:G\to O_x$ is faithfully flat and locally of finite presentation, then $O_x$ represents the fppf quotient sheaf $G/H$ and $G\times_kH\to G\times_{O_x}G$ is an isomorphism ([[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[lem-fppf-quotient-representability-criterion]]).

[F5] The projective space $\mathbb P(V^\vee)$ is separated and of finite type over $k$ ([[lem-projective-space-diagonal-closed]], [[def-projective-bundle-scheme]], [[def-separated-scheme-over-base]]); an immersion is separated, and a locally closed subscheme of a separated finite-type $k$-scheme is itself separated and finite type over $k$, since its diagonal is the base change of the ambient closed diagonal along the product of the immersion ([[lem-separatedness-of-open-and-closed-immersions]], [[lem-base-change-open-closed-immersions]], [[def-separated-morphism-schemes]]).

## Proof

**Given:** AC, the field $k$, the smooth affine finite-type $k$-group scheme $G$, and the closed subgroup scheme $H\subseteq G$.

1.1 By Chevalley's theorem [F1] there are a finite-dimensional rational representation $r$ of $G$ on $V$ and a line $L\subseteq V$ such that $H(R)=\{g\in G(R):r(g)L_R=L_R\}$ for every $k$-algebra $R$. [F1, given, construct]

1.2 Since $G$ is smooth, the orbit lemma [F3] applies to the action of [F2] on $\mathbf P_{\mathrm{lines}}(V)$: the orbit $O_{[L]}$ is locally closed and stable under $G$, it is smooth over $k$, and $\varrho_{[L]}:G\to O_{[L]}$ is faithfully flat and locally of finite presentation. [F2, F3, given]

2.1 The projective action of [F2] has scheme-theoretic stabilizer $G_{[L]}$ with $G_{[L]}(R)=\{g:r(g)L_R=L_R\}$ for every $k$-algebra $R$, which is $H(R)$ by step 1.1; hence $G_{[L]}=H$ as closed subgroup schemes of $G$. [F2, step 1.1, given, algebra]

2.2 The orbit $O_{[L]}$ is a locally closed subscheme of the separated finite-type $k$-scheme $\mathbf P_{\mathrm{lines}}(V)$, so it is separated and finite type over $k$ by [F5], and the morphism $O_{[L]}\hookrightarrow\mathbf P_{\mathrm{lines}}(V)$ is an immersion. [F5, step 1.2, given]

3.1 Applying the coset-quotient proposition [F4] with $x=[L]$, $H=G_{[L]}$ and the faithfully flat orbit map of step 1.2 shows that $O_{[L]}$ represents the fppf quotient sheaf $G/H$, with quotient morphism $\varrho_{[L]}$ faithfully flat and locally of finite presentation, and that $G\times_kH\cong G\times_{O_{[L]}}G$. [F4, step 1.2, step 2.1, given]

4.1 By steps 2.2 and 3.1 the quotient $G/H$ is represented by the separated finite-type $k$-scheme $O_{[L]}$, with quotient morphism $\varrho_{[L]}$, and the morphism $G/H\cong O_{[L]}\hookrightarrow\mathbf P_{\mathrm{lines}}(V)$ is an immersion; the representation and line of step 1.1 satisfy the stated requirement that the scheme-theoretic line stabilizer is $H$. Any other representing scheme is uniquely isomorphic by the Yoneda lemma applied to a natural isomorphism of the represented functors. No smoothness of $H$ was used. [step 1.1, step 2.2, step 3.1, given] ∎ 
