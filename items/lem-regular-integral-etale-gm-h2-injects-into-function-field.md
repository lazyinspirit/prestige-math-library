---
id: lem-regular-integral-etale-gm-h2-injects-into-function-field
kind: lemma
title: "Regular integral étale Gm cohomology injects into the function field in degree two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-grothendieck-spectral-sequence
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for regular-local factoriality and the actual étale cohomology models."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Raymond T. Hoobler, A cohomological interpretation of Brauer groups of rings"
      url: "https://msp.org/pjm/1980/86-1/pjm-v86-n1-p05-s.pdf"
      locator: "p. 89, injectivity used for regular affine patching; the divisor-sheaf argument is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $X$ be a regular integral Noetherian scheme with function field $K$. The natural restriction map
$$H^2_{\mathrm{et}}(X,\mathbb G_m)\longrightarrow H^2_{\mathrm{et}}(K,\mathbb G_m)$$
is injective. Consequently restriction to any nonempty open subscheme of $X$ is injective in degree two.

## Facts & Assumptions

**Given:** The regular integral Noetherian scheme and its function field in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Every regular local ring is a unique factorization domain. [[thm-nonaffine-regular-local-ring-is-ufd]]

[F2] The Grothendieck spectral sequence has the stated natural edge maps under its injective and acyclicity hypotheses. [[thm-grothendieck-spectral-sequence]]

[F3] Abelian sheaves on a fixed set-sized site have actual injective resolutions under AC. [[thm-abelian-sheaves-on-a-site-have-enough-injectives]]

## Proof

**Proof technique:** use the divisor sequence and the low-degree edge of the generic-point direct image.

1.1 Let $j:\operatorname{Spec}K\to X$ and, for each codimension-one point $x$, let $i_x:\operatorname{Spec}\kappa(x)\to X$. On the small étale site there is an exact sequence $0\to\mathbb G_m\to j_*\mathbb G_m\to\bigoplus_{x\in X^{(1)}}i_{x*}\mathbb Z\to0$. Indeed, on an étale $U\to X$, its regular components are integral and their codimension-one points map to codimension-one points of $X$; the last map takes the finite valuations of a rational unit. Étale local rings of a regular scheme are regular, and [F1] makes each such local ring factorial. Thus every divisor is locally principal and a rational unit with zero divisor is locally a unit. This verifies exactness as sheaves, including the empty components. [A1, F1, given, construct, algebra]

2.1 The first cohomology of the divisor sheaf is zero. For one point $x$, the low-degree edge for $i_x$ injects $H^1(X,i_{x*}\mathbb Z)$ into $H^1(\kappa(x),\mathbb Z)$. The latter is zero: after a separable closure, a $\mathbb Z$-torsor is trivial, and the resulting continuous Galois cocycle is a homomorphism from a profinite group to the discrete group $\mathbb Z$, hence has finite and therefore zero image. For a torsor under the direct sum, a finite étale covering family trivializes it because $X$ is quasi-compact; the finitely many overlap sections have finite support in the direct sum, so its class comes from a finite subsum. Each summand has zero first cohomology, proving the claim. The edge is the natural one from [F2]–[F3]. [A1, F2, F3, step 1.1, construct, algebra]

3.1 The long exact sequence of step 1.1 and step 2.1 inject $H^2(X,\mathbb G_m)$ into $H^2(X,j_*\mathbb G_m)$. Moreover $R^1j_*\mathbb G_m=0$: for a quasi-compact étale $U\to X$, the generic fibre is a finite disjoint union of finite separable fields, whose Picard groups vanish, and higher direct images are the sheafification of these object cohomology groups. The edge of [F2] therefore injects $H^2(X,j_*\mathbb G_m)$ into $H^2(K,\mathbb G_m)$. Composing proves the first assertion. A nonempty open of an integral scheme has the same function field, so the same injection factors through its cohomology and proves the second assertion. [F2, F3, step 1.1, step 2.1, algebra] ∎
