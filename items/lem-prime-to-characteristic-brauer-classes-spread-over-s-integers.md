---
id: lem-prime-to-characteristic-brauer-classes-spread-over-s-integers
kind: lemma
title: "Prime-to-characteristic Brauer classes spread over S-integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-global-field
  - def-cohomological-brauer-group-of-a-variety
  - lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the finite-limit étale cohomology supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale cohomology and limits"
      url: "https://stacks.math.columbia.edu/tag/09YU"
      locator: "Finite affine-limit witnesses; the Kummer spreadout is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $K$ be a global field, let $X$ be a quasi-compact quasi-separated finite-type $K$-scheme, and let $\alpha_1,\dots,\alpha_m\in H^2_{\mathrm{et}}(X,\mathbb G_m)$ be torsion classes whose orders are prime to $\operatorname{char}K$. There is a finite set $S$ of places containing the archimedean ones, a quasi-compact quasi-separated finite-type $\mathcal O_{K,S}$-model $\mathcal X$ of $X$, and torsion classes $\widetilde\alpha_i\in H^2_{\mathrm{et}}(\mathcal X,\mathbb G_m)$ restricting to $\alpha_i$. Thus every cohomological Brauer class spreads out when $K$ is a number field. No assertion is made here for characteristic-$p$ torsion over a function field.

## Facts & Assumptions

**Given:** The global field, finite-type scheme and finite family of torsion classes in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Global fields and their rings of $S$-integers have the stated finite-place localization convention. [[def-global-field]]

[F2] The cohomological Brauer group is the torsion subgroup of étale $H^2$ of $\mathbb G_m$. [[def-cohomological-brauer-group-of-a-variety]]

[F3] Étale cohomology of a fixed inverse-image sheaf over a cofiltered affine inverse limit of qcqs schemes is the filtered colimit of the stage cohomology groups. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

## Proof

**Proof technique:** lift torsion to invertible Kummer coefficients and descend those finite coefficients to one stage.

1.1 Choose a positive integer $n$ annihilating every $\alpha_i$ and prime to $\operatorname{char}K$; enlarge the finite set $S_0$ until $n$ is invertible in $\mathcal O_{K,S_0}$; in the function-field case include at least one place so that $\mathcal O_{K,S_0}$ has fraction field $K$. A finite affine cover of $X$, finite algebra presentations, overlap localizations and finitely many gluing identities have coefficients in $K$; after enlarging $S_0$, they define a qcqs finite-type model $\mathcal X_0$ over $\mathcal O_{K,S_0}$. For finite $S\supseteq S_0$, put $\mathcal X_S=\mathcal X_0\times_{\mathcal O_{K,S_0}}\mathcal O_{K,S}$. Their affine-transition inverse limit is $X$. [A1, F1, given, choose, construct, algebra]

2.1 On any scheme on which $n$ is invertible, the Kummer sequence $1\to\mu_n\to\mathbb G_m\xrightarrow{n}\mathbb G_m\to1$ is exact on the étale site: for a unit $u$, the algebra obtained by adjoining a root of $T^n-u$ is finite free, and its derivative $nT^{n-1}$ is a unit, so it is an étale cover on which $u$ has an $n$th root. Its long exact sequence lifts each $\alpha_i$ to some $\beta_i\in H^2_{\mathrm{et}}(X,\mu_n)$. These are finitely many choices. [A1, F2, step 1.1, choose, construct, algebra]

3.1 The sheaf $\mu_n$ is finite étale when $n$ is invertible, and its inverse image from $\mathcal X_0$ is the same root-of-unity sheaf on every $\mathcal X_S$ and on $X$. By [F3], each $\beta_i$ comes from some finite stage; a single larger finite $S$ works for all of them. Map the resulting stage classes into $H^2_{\mathrm{et}}(\mathcal X_S,\mathbb G_m)$ by the Kummer inclusion. The resulting classes restrict to the original $\alpha_i$ by naturality and are killed by $n$ by exactness. Taking $\mathcal X=\mathcal X_S$ proves the claim. The empty family needs no cohomology choices. [F3, step 1.1, step 2.1, construct, algebra] ∎
