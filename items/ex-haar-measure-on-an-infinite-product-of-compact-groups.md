---
id: ex-haar-measure-on-an-infinite-product-of-compact-groups
kind: example
title: Haar measure on an infinite product of compact groups
deps: [cor-normalized-haar-probability-on-a-compact-group, thm-tychonoff, thm-rmk-uniqueness-among-radon-measures, def-radon-measure-on-an-lch-space, thm-product-universal-property, thm-compactness-under-continuous-maps, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Example

Assume AC. For any set-indexed family of compact Hausdorff groups $(G_i)_{i\in I}$, the full product $G=\prod_iG_i$ has a normalized Radon Haar probability $\mu$ on its full Borel sigma algebra. Every finite-coordinate projection has the corresponding normalized Haar marginal, and these marginals determine $\mu$ uniquely among Radon probabilities. For $G=\prod_{i\in I}C_2$, a cylinder specifying $r$ distinct coordinates has probability $2^{-r}$.

## Facts & Assumptions

**Given:** A set-indexed compact Hausdorff group family and AC.

[F1] Compact Hausdorff groups have unique normalized Haar probabilities. ([[cor-normalized-haar-probability-on-a-compact-group]])

[F2] Under AC an arbitrary product of compact spaces is compact. ([[thm-tychonoff]])

[F3] Equal continuous integrals identify Radon measures. ([[thm-rmk-uniqueness-among-radon-measures]])

[F4] Radon measures are outer regular on Borel sets and inner regular on opens. ([[def-radon-measure-on-an-lch-space]])

[F5] Coordinatewise continuity gives continuity of maps into a product. ([[thm-product-universal-property]])

[F6] Continuous images of compact sets are compact. ([[thm-compactness-under-continuous-maps]])

[A1] AC is assumed in the choice-function form stated in the cited definition. ([[def-axiom-of-choice]])

## Verification

**Proof technique:** direct.

1.1 The tuple of identities belongs to $G$. Coordinatewise multiplication and inversion are continuous by [F5]; distinct tuples differ in one coordinate whose Hausdorff neighbourhoods separate them. Under the assumed AC, Tychonoff gives compactness and [F1] gives $\mu$. For a finite $F\subseteq I$, the projection $\pi_F$ has a continuous section $s_F$ filling all other coordinates with identities. [F1, F2, F5, A1]

2.1 For any Borel $B\subseteq G$, outer approximation of $G\setminus B$ and complementation give compact inner approximation of $B$, since $\mu(G)=1$. Set $\nu(E)=\mu(\pi_F^{-1}E)$. A compact $K\subseteq\pi_F^{-1}E$ projects to compact $\pi_FK\subseteq E$ with $\nu(\pi_FK)\ge\mu(K)$. Thus $\nu$ is inner regular on every Borel set; taking complements gives outer regularity. It is a Radon probability. A translation in the finite subproduct lifts by $s_F$, so invariance of $\mu$ makes $\nu$ invariant. [F1] identifies $\nu$ with the normalized Haar measure there. [F1, F4, F6, step 1.1]

2.2 If $h\in C(G;\mathbb R)$ and $\epsilon>0$, choose finitely many basic open cylinders covering $G$ on each of which $h$ oscillates by $<\epsilon$. Let $F$ include their finitely many specified coordinates. Any $x$ and $s_F\pi_Fx$ belong together to one covering cylinder, hence $|h(x)-h(s_F\pi_Fx)|<\epsilon$. Two Radon probabilities with equal finite marginals therefore have integrals of $h$ differing by at most $2\epsilon$, by the uniform bound and total mass one. Letting $\epsilon\downarrow0$ and applying [F3] proves equality on the full Borel sigma algebra. [F3, F5, step 1.1]

3.1 In the finite group $C_2^F$, invariance gives every singleton the same mass; their $2^{|F|}$ masses sum to one, so each is $2^{-|F|}$. Step 2.1 therefore gives $2^{-r}$ to a cylinder fixing $r$ coordinates of $\prod_I C_2$. The empty cylinder has mass $1$. If $I=\varnothing$, the product itself is the one-point group and its measure is point mass one. [step 1.1, step 2.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
