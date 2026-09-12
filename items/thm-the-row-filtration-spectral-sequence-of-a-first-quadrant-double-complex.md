---
id: thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex
kind: theorem
title: The row filtration spectral sequence of a first quadrant double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-row-and-column-filtrations-of-a-first-quadrant-double-complex, thm-the-next-page-is-the-homology-of-the-current-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-induced-filtration-on-homology, lem-the-filtered-differential-induces-d-r-on-the-r-page, lem-spectral-sequence-subquotient-and-local-lifting-calculus]
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
    - title: "Stacks Project, Lemmas 12.25.1 and 12.25.3 (translated conventions; calculation supplied here)"
      url: https://stacks.math.columbia.edu/tag/012X
---

## Statement

For a first-quadrant homological double complex $C$, the row filtration of
$T=\operatorname{Tot}(C)$ has a spectral sequence with
$$E^1_{p,q}=H^h_q(C_{*,p}),\qquad d^1\text{ induced by }v,\qquad E^2_{p,q}=H^v_p(H^h_q(C)).$$
The differential on page $r$ has bidegree $(-r,r-1)$, and the stationary page
identifies canonically with
$$E^\infty_{p,q}\cong F^{\mathrm{row}}_pH_{p+q}(T)/F^{\mathrm{row}}_{p-1}H_{p+q}(T),\qquad F^{\mathrm{row}}_pH_n(T)=\operatorname{im}(H_n(F^{\mathrm{row}}_pT)\to H_n(T)).$$
This target filtration is finite in each total degree. Horizontal homology
is taken first; the spectral first coordinate is the original vertical index.

## Facts & Assumptions

[F1] [[def-row-and-column-filtrations-of-a-first-quadrant-double-complex]] gives the finite row cutoff and associated graded $C_{q,p}$ with differential $h$.

[F2] [[thm-the-next-page-is-the-homology-of-the-current-page]] gives the natural page transition $H(E^r,d^r)\cong E^{r+1}$.

[F3] [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] gives bidegree $(-r,r-1)$ and the local rule $[x]\mapsto[dx]$.

[F4] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] licenses local representatives after epic pullback and descent of maps preserving numerator and denominator.

[F5] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] proves natural abutment for degreewise finite filtrations; [[def-induced-filtration-on-homology]] specifies the image filtration.

## Proof

**Given:** $C$ as stated, with $h v+v h=0$ and $h^2=v^2=0$.

1.1 The row-$p$ quotient of total degree $p+q$ is $C_{q,p}$. The arrow $h$ stays in this row and $v$ enters the preceding row, which is zero in the quotient. Thus $E^0_{p,q}=C_{q,p}$ and $d^0=h$. This remains valid when either index is negative, as the component is then zero. [F1, given]

2.1 Taking homology gives $E^1_{p,q}=H^h_q(C_{*,p})$. A horizontal cycle $x$ has total differential $dx=vx$, so the page-one rule gives $d^1[x]=[vx]$. This is a well-defined horizontal homology class: $h(vx)=-v(hx)=0$, and if $x$ changes by $hy$ then $vx$ changes by $vhy=-hvy$, a horizontal boundary. In an abelian category these calculations mean preservation of kernel and image subobjects; they may be checked after epic pullback and descend uniquely. No global representatives are selected. [F2, F3, F4, step 1.1, given]

3.1 Since $v^2=0$, the induced page-one arrows square to zero, and their homology is precisely $H^v_p(H^h_q(C))$. The next-page isomorphism therefore gives the displayed $E^2$. Both $E^0$ and all later subquotients vanish off the first quadrant. The differential bidegrees are those of the filtered construction, $(-r,r-1)$, with no extra sign in $d^1$ because $h+v$ was already the total differential. [F2, F3, step 2.1, given]

4.1 In degree $n\ge0$, $F^{\mathrm{row}}_{-1}T_n=0$ and $F^{\mathrm{row}}_nT_n=T_n$; negative degrees are zero. Thus the bounded-filtration theorem applies degree by degree to this spectral sequence and identifies its stationary page with the associated graded of the displayed image filtration. That filtration is zero at $p=-1$ and all of $H_n(T)$ at $p=n$ for $n\ge0$. For $n=0$ there is only one possible quotient, and for the zero complex all pages and quotients are zero. The argument uses no infinite exactness or AC. [F1, F5, step 3.1] ∎
