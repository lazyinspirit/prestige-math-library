---
id: lem-arith-group-model-with-abelian-generic-fibre-quasiprojective
kind: lemma
title: "Divisor ampleness and quasi-projectivity of group models"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-affine-codimension-one-neighbourhood-and-divisors
  - lem-arith-cube-derived-square-over-dvr
  - lem-arith-strict-henselization-and-smooth-sections
  - def-ample-invertible-sheaf
  - thm-serre-criterion-ampleness
  - def-ample-invertible-sheaf
  - thm-faithfully-flat-descent-vanishing
  - lem-extend-sections-from-nonvanishing-open
  - thm-line-bundle-sections-define-projective-map
  - lem-closed-immersion-local-on-target
  - def-locally-closed-immersion
  - lem-ample-stable-positive-power
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 6.1/7 and 6.4/2-3 (divisor ampleness and quasi-projectivity)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, and let $H$ be a smooth separated finite-type $R$-group scheme with abelian generic fibre.

(a) Every effective Cartier divisor $D$ on $H$ whose complement is affine and fibre-dense gives an ample invertible sheaf $\mathcal O(D)$.

(b) $H$ is quasi-projective over $R$; the embedding is produced by an explicit affine-section chart construction and does not apply a proper-source very-ample theorem to $H$.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$, a smooth separated finite-type $R$-group scheme $H$ with abelian generic fibre, and an effective Cartier divisor $D$ with affine fibre-dense complement.

[F1] A finite cover by affine nonvanishing loci of positive-power sections makes a line bundle ample ([[def-ample-invertible-sheaf]]). For the faithfully flat base extension $R\to R^{\mathrm{sh}}$, ampleness descends as follows. For any coherent $F$ on the separated finite-type $R$-scheme, global sections commute with this flat base change: a finite affine cover and its affine intersections compute sections by a finite equalizer. If the pulled-back line bundle is ample, the pulled-back twists of $F$ are globally generated for all sufficiently large powers by [[thm-serre-criterion-ampleness]]. The evaluation map downstairs pulls back to that surjective evaluation map; its cokernel is zero by [[thm-faithfully-flat-descent-vanishing]]. Thus all these twists are globally generated downstairs, and Serre's criterion gives ampleness.

[F2] Sections over the nonvanishing locus of a section extend after multiplying by powers of that section, and affine-locus covers produce projective embeddings; closed-immersion locality on the target and stable positive powers are available ([[lem-extend-sections-from-nonvanishing-open]], [[thm-line-bundle-sections-define-projective-map]], [[lem-closed-immersion-local-on-target]], [[lem-ample-stable-positive-power]], [[def-locally-closed-immersion]]).

[F3] The identity component $H^0$ has geometrically connected fibres with orbits the connected components, the theorem of the square holds on $H$ for the $H^0$-action, and the affine codimension-one neighbourhood lemma supplies $R$-dense affine opens with effective horizontal Cartier boundary ([[lem-arith-cube-derived-square-over-dvr]], [[lem-arith-affine-codimension-one-neighbourhood-and-divisors]], [[lem-arith-strict-henselization-and-smooth-sections]]).

## Proof

**Proof technique:** direct: fibre-density lets the square produce enough sections of $\mathcal O(D)$ to cover $H$, and the affine-section chart construction embeds the model projectively.

1.1 By [F1] it suffices for ampleness to exhibit a finite cover of $H$ by affine nonvanishing loci of sections of positive powers of $\mathcal O(D)$, or to descend the same statement along a faithfully flat extension. Fibre-density of the complement means that $H\setminus D$ meets every $H^0$-orbit, and after base change to a strict henselization the theorem of the square [F3] gives a linear equivalence $D_g+D_{g^{-1}}\sim2D$ for suitable translates. The associated sections have nonvanishing loci $gU\cap g^{-1}U$, where $U=H\setminus D$; for a prescribed geometric point, the two conditions on $g$ define dense opens in the geometrically integral $H^0$-fibre. Section values are dense there by [F3], including after extension of its field: an evaluation injection into the product of the fields of section values stays injective after field extension, as can be checked using finitely many linearly independent coefficients. Hence some section $g$ meets both conditions. These loci cover $H$, and quasi-compactness extracts a finite subcover. Each such locus is affine: it is the intersection of two affine opens in the separated scheme over the affine base. The affine-locus definition in [F1] gives ampleness of $\mathcal O(D)$ over the strict henselization, and fpqc ampleness descent in [F1] gives it over $R$. This proves (a). [F1, F3, given, algebra]

2.1 For (b), choose an $R$-dense affine open supplied by the codimension-one neighbourhood lemma and its effective horizontal Cartier boundary $D$; by (a) $\mathcal O(D)$ is ample. Choose finitely many affine section opens $X_{s_i}$ covering $H$ and raise the $s_i$ to a common positive degree; each $\Gamma(X_{s_i},\mathcal O)$ is a finite-type $R$-algebra with finitely many generators $f_{ij}$, and the section-extension lemma [F2] extends each $f_{ij}s_i^n$ to a global section of a sufficiently large common power of $\mathcal O(D)$, whose ratios to $s_i^n$ are exactly $f_{ij}$ on $X_{s_i}$. [F1, F2, step 1.1, construct]

3.1 Including the $s_i^n$ in a finite global section list with no common zero defines a map $H\to\mathbf P^M_R$ by [F2]; on the projective chart for $s_i^n$ its preimage is $X_{s_i}$ and the coordinate-ring map is surjective because the ratios include all generators $f_{ij}$, so the map is a closed immersion into the union of these projective charts by closed-immersion locality. That union is open in projective space, so the map is a locally closed immersion and $H$ is quasi-projective over $R$; no properness of $H$ is used. This proves (b). [F2, step 2.1, algebra] ∎ 