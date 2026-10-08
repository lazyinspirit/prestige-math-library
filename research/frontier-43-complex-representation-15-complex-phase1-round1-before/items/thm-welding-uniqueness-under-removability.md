---
id: thm-welding-uniqueness-under-removability
kind: theorem
title: Welding uniqueness for conformally removable curves
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-conformal-removable-compact-set
  - def-conformal-welding-of-a-jordan-curve
  - def-countable-choice
  - def-mobius-transformation
  - lem-riemann-maps-of-jordan-domains-extend-homeomorphically
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-quasiconformal-welding-existence
  - thm-zero-length-sets-and-quasicircles-are-conformally-removable
axiom_use: >-
  Assume AC for Jordan-domain uniformization/boundary correspondence and for
  the quasisymmetric-welding existence supplier used in part (b). Countable
  Choice used by those analytic and boundary interfaces follows from AC via
  [[thm-choice-implies-dependent-implies-countable-choice]]. The gluing and
  Möbius-removability argument in part (a) makes no further choice.
sources:
  scraped: []
  references:
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://ems.press/content/serial-article-files/36977?nt=1"
      locator: "§5.4, Proposition 5.23 and Corollary 5.24, printed pp. 248–249: equal welding classes give a homeomorphism conformal off the first curve; if its boundary is CH-removable, the curves are Möbius-equivalent. The proof is read in full."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.4, Theorem 15.23, printed pp. 213–214: the final uniqueness argument for the quasiconformal-welding complex structure uses removability of quasicircles to make the transition map Möbius. This is the quasicircle case and uses the source's inverse boundary convention."
    - title: "Christopher J. Bishop, Conformal welding and Koebe's theorem, Annals of Mathematics 166 (2007), 613–656"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v166-n3-p01.pdf"
      locator: "§1, printed pp. 613–614: the introduction states that the curve-to-welding map is not generally one-to-one and then describes flexible curves sharing a welding. This is a caution against unconditional uniqueness, not evidence for the removable-curve implication proved here."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $h:\mathbb S^1\to\mathbb S^1$ be an orientation-preserving homeomorphism, and let $(\Gamma,f,g)$ and $(\Gamma',f',g')$ be two conformal weldings of $h$ in the convention $h=f^{-1}\circ g$ of [[def-conformal-welding-of-a-jordan-curve]].

(a) If $\Gamma$ is globally conformally removable, then there is a Möbius transformation $A$ such that $f'=A\circ f$ and $g'=A\circ g$. In particular, $\Gamma'=A(\Gamma)$.

(b) If $h$ is quasisymmetric, then a welding with a quasicircle curve exists ([[thm-quasiconformal-welding-existence]]). Every other welding of $h$ has curve Möbius-equivalent to that quasicircle, so the welding curve is unique up to Möbius postcomposition.

## Facts & Assumptions

**Given:** AC and two conformal weldings $(\Gamma,f,g)$ and $(\Gamma',f',g')$ of the same orientation-preserving circle homeomorphism.

[F1] A conformal welding records homeomorphic boundary extensions $\overline f,\overline g$ and the convention $h=(\overline f|_{\mathbb S^1})^{-1}\circ(\overline g|_{\mathbb S^1})$; the complementary Jordan components have common boundary ([[def-conformal-welding-of-a-jordan-curve]]).

[F2] Conformal maps from the disk and exterior disk onto Jordan domains extend homeomorphically to the closures ([[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]). That in-run supplier is authored; its earlier universal exterior normalization at infinity was repaired to apply after a Möbius chart change. This proof uses only the boundary-extension clause for each component.

[F3] A compact set is globally CH-removable when every sphere homeomorphism conformal off it is Möbius ([[def-conformal-removable-compact-set]]). Its neighborhood-local formulation is recorded separately; this theorem uses only the global definition.

[F4] A Möbius transformation is the sphere extension of a nonsingular fractional-linear map ([[def-mobius-transformation]]).

[F5] For every quasisymmetric circle homeomorphism, the measurable-structure construction supplies a welding whose curve is a quasicircle ([[thm-quasiconformal-welding-existence]]). This in-run supplier remains provisional: its proof depends on batch-12 ACL/Beltrami/composition interfaces and the absent batch-13 measurable-Riemann-mapping item.

[F6] Every quasicircle is globally CH-removable ([[thm-zero-length-sets-and-quasicircles-are-conformally-removable]]). This supplier remains provisional pending the finite-length source obligation and the round-circle/QC-invariance supplier reconciliations recorded in the pair report.

[F7] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** use the shared welding boundary map to glue the two pairs of conformal parameter maps, then apply global conformal removability to the pasted sphere homeomorphism.

1.1 Let $\Omega_0,\Omega_1$ be the components of $\widehat{\mathbb C}\setminus\Gamma$ parameterized by $f,g$, and let $\Omega'_0,\Omega'_1$ be the corresponding components for $f',g'$. By [F1]–[F2], all four maps extend to homeomorphisms of the closures, with their boundary maps taking values in $\Gamma$ and $\Gamma'$. The Countable Choice interface used by the boundary supplier follows from AC by [F7]. [F1, F2, F7, given]

2.1 Equality of the two welding maps gives $(\overline f|_{\mathbb S^1})^{-1}\circ(\overline g|_{\mathbb S^1})=(\overline f'|_{\mathbb S^1})^{-1}\circ(\overline g'|_{\mathbb S^1})$. Composing with $\overline f'$ on the left and $(\overline g)^{-1}$ on the right yields $\overline f'\circ(\overline f)^{-1}=\overline g'\circ(\overline g)^{-1}$ on the common boundary $\Gamma$. [F1, step 1.1, algebra]

3.1 Define $F$ on $\overline{\Omega_0}$ by $F=\overline f'\circ(\overline f)^{-1}$ and on $\overline{\Omega_1}$ by $F=\overline g'\circ(\overline g)^{-1}$. These closed sets cover the sphere, and their intersection is $\Gamma$; step 2.1 makes the definitions agree there. Each branch is a homeomorphism onto the corresponding primed closure. The inverse branches likewise agree on $\Gamma'$, so the closed-set pasting argument applied to both maps shows that $F$ is a sphere homeomorphism. [F1, F2, step 2.1, construct]

4.1 On $\Omega_0$ and $\Omega_1$, respectively, $F$ is the conformal composition $f'\circ f^{-1}$ and $g'\circ g^{-1}$; hence it is conformal on $\widehat{\mathbb C}\setminus\Gamma$. If $\Gamma$ is globally conformally removable, [F3] makes $F$ a Möbius transformation $A$. Restricting to each component gives $f'=A\circ f$ and $g'=A\circ g$, so $\Gamma'=A(\Gamma)$. [F3, F4, step 3.1, algebra]

5.1 Let $h$ be quasisymmetric. By [F5], choose a welding $(\Gamma_0,f_0,g_0)$ whose curve is a quasicircle; [F6] makes $\Gamma_0$ globally conformally removable. For any other welding $(\Gamma_1,f_1,g_1)$ of $h$, apply the conclusion of step 4.1 with $(\Gamma_0,f_0,g_0)$ first and $(\Gamma_1,f_1,g_1)$ second. Thus a Möbius map carries $\Gamma_0$ to $\Gamma_1$ and postcomposes both parameter maps. This proves the uniqueness claim in part (b); Countable Choice conditions on the existence route follow from AC by [F7]. [F5, F6, F7, step 4.1, given] ∎
