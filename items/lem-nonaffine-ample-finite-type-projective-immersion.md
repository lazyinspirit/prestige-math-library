---
id: lem-nonaffine-ample-finite-type-projective-immersion
kind: lemma
title: "An ample line bundle on a finite-type scheme gives a projective immersion"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-ample-invertible-sheaf, lem-extend-sections-from-nonvanishing-open, thm-line-bundle-sections-define-projective-map]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 37.49.1"
      url: https://stacks.math.columbia.edu/tag/0B42
    - title: "Stacks Project, Properties, ampleness and section opens"
      url: https://stacks.math.columbia.edu/tag/01Q3
---

## Statement

Assume the Axiom of Choice. A separated finite-type $k$-scheme with an ample invertible sheaf admits a locally closed immersion into some projective space over $k$.

## Facts & Assumptions

[F1] Affine nonvanishing loci of positive-power global sections cover a scheme with an ample invertible sheaf. Sections on one such locus extend after multiplication by a sufficiently high power of the defining section. ([[def-ample-invertible-sheaf]], [[lem-extend-sections-from-nonvanishing-open]])

[F2] A finite generating family of an invertible sheaf defines a morphism to projective space with the given sections as coordinate pullbacks. ([[thm-line-bundle-sections-define-projective-map]])

## Proof

**Given:** AC, $X/k$ separated of finite type, and an ample invertible sheaf $L$.

1.1 If $X$ is empty, its empty closed immersion into $\mathbf P^0_k$ proves the assertion. Otherwise, by quasi-compactness and [F1], choose finitely many affine opens $X_{s_i}$ covering $X$, with $s_i\in\Gamma(X,L^{n_i})$ and $n_i>0$. Each has a finitely generated coordinate ring over $k$; choose generators $a_{ij}$. By [F1] there are positive $r_{ij}$ and sections $t_{ij}\in\Gamma(X,L^{n_ir_{ij}})$ with $t_{ij}/s_i^{r_{ij}}=a_{ij}$ on $X_{s_i}$. Choose a common multiple $N$ of the $n_i$, large enough that $N/n_i\ge r_{ij}$ for all $i,j$. Put $b_i=s_i^{N/n_i}$ and $b_{ij}=t_{ij}s_i^{N/n_i-r_{ij}}$, all sections of $L^N$. [F1, given, construct]

2.1 The $b_i$ have the same nonvanishing loci as the $s_i$, so these sections generate $L^N$. By [F2] the family $b_i,b_{ij}$ defines $j:X\to\mathbf P^M_k$. On the coordinate chart where $b_i\ne0$, the ratios $b_{ij}/b_i$ pull back to $a_{ij}$. The induced map from that affine projective-chart ring to $\Gamma(X_{s_i},\mathcal O)$ is therefore onto, hence $X_{s_i}$ is a closed subscheme of the chart. These charts cover an open $W\subset\mathbf P^M$ containing $j(X)$, and their inverse images cover $X$. Closed immersions are local on the target by the affine quotient description, so $X\to W$ is a closed immersion. Composing with $W\subset\mathbf P^M$ gives the required locally closed immersion. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, algebra] ∎
