---
id: thm-cft-wzw-knizhnik-zamolodchikov-equations
kind: theorem
title: KZ equations for WZW conformal blocks on the sphere
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: mathematics
deps:
  - def-cft-wzw-insertion-data
  - def-cft-wzw-sphere-current-coinvariants
  - lem-cft-wzw-sphere-current-ward-identity
  - def-cft-coinvariants-and-conformal-blocks
  - def-dual-coxeter-number-for-normalized-form
  - def-sugawara-modes
  - thm-sugawara-modes-satisfy-virasoro
  - def-axiom-of-choice
dependency_roles:
  def-cft-wzw-insertion-data: mathematical-premise
  def-cft-wzw-sphere-current-coinvariants: mathematical-premise
  lem-cft-wzw-sphere-current-ward-identity: mathematical-premise
  def-cft-coinvariants-and-conformal-blocks: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  def-sugawara-modes: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 3, §§3.2–3.5, Sugawara derivation of the WZW KZ equations.
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §§1–5, genus-zero WZW connection and current Ward identities.
---

## Statement

Let $\mathfrak g,B,k,\lambda_i$ be as in def-cft-wzw-insertion-data, and let $V=\bigotimes_{i=1}^nV_{\lambda_i}$ be the ordered tensor of finite horizontal tops. Let $F(\mathbf z)\in V^*$ be the top restriction of a differentiable local family of block functionals from def-cft-wzw-sphere-current-coinvariants. Assume the moving-coordinate trivialization $t_i=w-z_i$ is translation-covariant, so differentiating the $i$th insertion replaces its top vector by $L_{-1}^{(i)}$ of that vector. For each $i$, define
$
\Omega_{ij}=\sum_a \rho_i(x_a)\rho_j(x^a),\qquad
\rho^\vee(x)\ell=-\ell\circ\rho(x),\qquad
\Omega_{ij}^\vee=\sum_a\rho_i^\vee(x_a)\rho_j^\vee(x^a),
$
where $(x_a),(x^a)$ are $B$-dual bases. Then
$
(k+h^\vee)\,\partial_{z_i}F(\mathbf z)
=\sum_{j\ne i}\frac{\Omega_{ij}^\vee F(\mathbf z)}{z_i-z_j}.
$
In row-functional notation, $\Omega_{ij}^\vee F=F\circ\Omega_{ij}$. The equation is a chiral, fixed-coordinate deduction. If “block” is instead taken to mean the generic integral-$L_0$ carrier def-cft-coinvariants-and-conformal-blocks, its hypotheses must also be imposed; the present argument does not identify that carrier with fractional-$L_0$ WZW modules or assert local freeness.

## Statement references


[[def-cft-coinvariants-and-conformal-blocks]]

[[def-cft-wzw-insertion-data]]

[[def-cft-wzw-sphere-current-coinvariants]]

## Facts & Assumptions

[A1] Full AC is assumed in [[def-cft-wzw-insertion-data]] for the existence of the modules and tops used in this equation; no additional choice is used in the local calculation.

**Given:** The fixed normalized form, $k\in\mathbb Z_{\ge0}$, admissible labels, distinct insertion points, and a differentiable local current-block family with the translation convention in the Statement.

[F1] [[def-cft-wzw-insertion-data]]: each module has level $k$, restricted affine modes, and top $V_{\lambda_i}$.

[F2] [[lem-cft-wzw-sphere-current-ward-identity]] gives the rational-current Ward identity on top vectors.

[F3] [[def-sugawara-modes]]: the normal-ordered Sugawara mode is the dual-basis quadratic current sum with denominator $2(k+h^\vee)$; it is defined away from the critical level.

[F4] [[def-dual-coxeter-number-for-normalized-form]] defines $h^\vee$ using the same long-root-square-$2$ normalization; $h^\vee>0$.

[F5] [[thm-sugawara-modes-satisfy-virasoro]]: these modes form the Virasoro action on every restricted affine-current module when $k+h^\vee\ne0$.

[F6] [[def-cft-coinvariants-and-conformal-blocks]] defines generic algebraic blocks using integrally graded conformal modules and explicitly makes no finite-rank or local-freeness assertion.

[A2] The family is differentiable in the moving coordinates and satisfies $\partial_{z_i}F(v)=F(L_{-1}^{(i)}v)$; this is the stated translation-covariant trivialization, not a consequence of the bare quotient definition.

## Proof

1.1 Put $\kappa=k+h^\vee$. It is nonzero because $k\ge0$ and $h^\vee>0$ by [F4]. By the mode formula [F3], on a top vector $v_i$ only the normal-ordered terms with current indices $(-1,0)$ and $(0,-1)$ survive in $L_{-1}v_i$: every other term has a positive current mode acting on the right, which kills $v_i$ by [F1]. The two surviving terms agree after relabeling the dual bases, so
$
L_{-1}^{(i)}v_i=\kappa^{-1}\sum_a x_a(-1)x^a(0)v_i.
$
The Virasoro action used in the translation convention is valid by [F5]. [A1, F1, F3, F4, F5, given, algebra]

2.1 Apply [A2] and substitute the identity of step 1.1 into $F(L_{-1}^{(i)}v_i)$. For each $a$, apply [F2] to the current $x_a(-1)$ with the other top vector $x^a(0)v_i$ at slot $i$. The resulting sum over $j\ne i$ has coefficient $(z_i-z_j)^{-1}$ and inserts $x^a(0)$ at $i$, $x_a(0)$ at $j$. Summing over $a$ is exactly $F\circ\Omega_{ij}$. The contragredient convention in the Statement makes this $\Omega_{ij}^\vee F$ in column coordinates, yielding the displayed KZ equation. [A1, A2, F1, F2, step 1.1, algebra] ∎




## Remarks

The separate generic integral-$L_0$ carrier [[def-cft-coinvariants-and-conformal-blocks]] is formulation context only. Its integral-grading hypotheses are not used in the deduction above; no equivalence with the fixed-coordinate current-block family, finite rank, or local freeness is asserted.
