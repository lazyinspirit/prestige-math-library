---
id: lem-conditional-smooth-divisor-prime-to-characteristic-purity
kind: lemma
title: "Conditional codimension-one étale purity from affine-line acyclicity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - lem-proper-torsion-base-change-under-choice
  - lem-generic-point-leray-and-kummer-curve-cohomology-in-zf
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the proper base-change and derived-functor suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XVI, section 3, Theorem 3.7"
      url: "https://grothendiecksga.com/read/sga4/en/XVI-3.html"
      locator: "The codimension-one reduction is reconstructed below with affine-line acyclicity explicitly assumed."
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, $\ell\ne\operatorname{char}k$, $r\geq1$, and $n=\ell^r$. Suppose that for every smooth finite-type $k$-scheme $T$, the projection $g:\mathbb A^1_T\to T$ satisfies $g_*\mu_n=\mu_n$ and $R^qg_*\mu_n=0$ for $q>0$. Let $S$ be a smooth finite-type $k$-scheme, let $\bar f:\overline X\to S$ be a smooth relative curve, and let $i:D\hookrightarrow\overline X$ be a closed subscheme finite étale over $S$. For $j:\overline X\setminus D\hookrightarrow\overline X$ there are canonical identifications $j_*\mu_n=\mu_n$, $R^1j_*\mu_n\cong i_*\underline{\mathbb Z/n\mathbb Z}$ and $R^qj_*\mu_n=0$ for $q>1$, compatible with smooth base change. The affine-line acyclicity hypothesis is not proved by this lemma.

## Facts & Assumptions

**Given:** The field, coefficient, affine-line acyclicity hypothesis, smooth curve and finite étale divisor in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Proper torsion cohomology commutes with arbitrary base change. [[lem-proper-torsion-base-change-under-choice]]

[F2] Generic-point Kummer cohomology and its degree bound apply to smooth curves over algebraically closed fields. [[lem-generic-point-leray-and-kummer-curve-cohomology-in-zf]]

[F3] Grothendieck abelian sheaf categories have injective resolutions under AC. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** reduce the smooth pair to the zero section of the affine line and compare with the projective line.

1.1 Étale locally on $\overline X$ and $S$, the finite étale divisor splits into sections. Smoothness of the curve and divisor gives a relative parameter $t$ with nonzero vertical differential, so the pair is étale-locally the inverse image of the zero section in $\mathbb A^1_S$. The regular smooth total space has regular strict local rings; each is a domain, and removing the parameter divisor leaves a connected nonempty open. Thus, after trivializing $\mu_n$ étale locally, $j_*\mu_n=\mu_n$. It suffices to compute the higher direct images on the standard pair. [A1, given, choose, construct, algebra]

2.1 Embed that pair as the section at infinity $i:S\hookrightarrow\mathbb P^1_S$, with complement $g:\mathbb A^1_S\to S$ and projection $p:\mathbb P^1_S\to S$. By [F1] and [F2], the geometric fibres of $R^qp_*\mu_n$ have $H^0=\mu_n$, $H^1=0$, $H^2=\mathbb Z/n$, and no higher cohomology: the Picard group of $\mathbb P^1$ is $\mathbb Z$ and its units are $k^\times$. The class of $\mathcal O(1)$ identifies $R^2p_*\mu_n$ canonically with $\underline{\mathbb Z/n}$, and $R^1p_*$ and $R^q p_*$ for $q>2$ vanish by geometric stalks. [A1, F1, F2, step 1.1, algebra]

3.1 By [F3], the Leray spectral sequence for $g=pj$ has $E_2^{a,b}=R^ap_*R^bj_*\mu_n$. For $b>0$, $R^bj_*\mu_n$ is supported on the section; pushforward along $p$ is then exact and identifies it with its restriction to the section. The $b=0$ row is $R^ap_*\mu_n$ by step 1.1. The assumed affine-line acyclicity makes the abutment vanish in positive degrees. The only possible differential out of the supported $b=1$ term is therefore an isomorphism onto $R^2p_*\mu_n$, and all supported terms in degrees $b>1$ vanish. This gives $R^1j_*\mu_n\cong i_*\underline{\mathbb Z/n}$ and the higher vanishing. The Kummer class of the local parameter identifies the generator; changing the parameter by a unit does not change it, because units have étale-local $n$th roots. Consequently these local identifications glue canonically and are preserved by smooth base change. [A1, F1, F3, step 1.1, step 2.1, given, construct, algebra] ∎
