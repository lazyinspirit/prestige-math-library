---
id: thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex
kind: theorem
title: The column filtration spectral sequence of a first quadrant double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-row-and-column-filtrations-of-a-first-quadrant-double-complex, thm-the-next-page-is-the-homology-of-the-current-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-induced-filtration-on-homology, thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Lemmas 12.25.1 and 12.25.3 (homological anticommuting convention)"
      url: https://stacks.math.columbia.edu/tag/012X
---

## Statement

For a first-quadrant homological double complex $C$, the column filtration
of $T=\operatorname{Tot}(C)$ has
$$E^1_{p,q}=H^v_q(C_{p,*}),\qquad d^1\text{ induced by }h,\qquad E^2_{p,q}=H^h_p(H^v_q(C)).$$
Its differentials have bidegree $(-r,r-1)$, and
$$E^\infty_{p,q}\cong F^{\mathrm{col}}_pH_{p+q}(T)/F^{\mathrm{col}}_{p-1}H_{p+q}(T),\qquad F^{\mathrm{col}}_pH_n(T)=\operatorname{im}(H_n(F^{\mathrm{col}}_pT)\to H_n(T)).$$
The target filtration is finite in each degree.

## Facts & Assumptions

[F1] [[def-row-and-column-filtrations-of-a-first-quadrant-double-complex]] specifies both cutoffs and their finite biproduct total objects.

[F2] [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes the row pages, differential and finite image-filtration abutment.

[F3] [[thm-the-next-page-is-the-homology-of-the-current-page]] supplies natural page transitions; [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] supplies natural abutment identifications; [[def-induced-filtration-on-homology]] defines the target as an image.

## Proof

**Given:** The first-quadrant complex $C$ in the statement, with anticommuting arrows $h,v$.

1.1 Define $D_{a,b}=C_{b,a}$, with $h^D_{a,b}=v^C_{b,a}$ and $v^D_{a,b}=h^C_{b,a}$. The two square-zero identities for $D$ are those for $v^C,h^C$ respectively, and its mixed sum is the mixed sum for $C$ with the two summands exchanged. Thus $D$ is again a first-quadrant anticommuting double complex. In each total degree, permutation of the finite summands gives an isomorphism $\operatorname{Tot}(D)\to T$. It commutes with total differentials because it changes $h^D+v^D$ into $v^C+h^C=h^C+v^C$. The row cutoff $b\le p$ in $D$ becomes the column cutoff in $C$. [F1, given]

2.1 Apply the row theorem to $D$. Its horizontal homology at $(q,p)$ is $H^v_q(C_{p,*})$, and its induced vertical differential is the original $h^C$. Its second page is therefore $H^h_p(H^v_q(C))$, with the same filtered bidegrees. These are the pages of the column-filtered $T$: the filtration-preserving isomorphism in step 1.1 identifies their graded objects and differentials, and natural page transitions propagate the identification through every page. No sign twist is needed in the transposition. [F2, F3, step 1.1]

3.1 The same filtered isomorphism sends $H_n(F^{\mathrm{row}}_p\operatorname{Tot}(D))\to H_n(\operatorname{Tot}(D))$ to $H_n(F^{\mathrm{col}}_pT)\to H_n(T)$, hence sends their images to each other. Naturality of finite convergence identifies the stationary page in step 2.1 with the stated associated graded of these images. The bounds are $-1$ and $n$ for $n\ge0$; for negative $n$ the complex is zero. This includes $n=0$, a zero complex and a complex in one column. All maps are specified by finite permutations and universal properties, so no choice assumption enters. [F1, F2, F3, step 1.1, step 2.1] ∎
