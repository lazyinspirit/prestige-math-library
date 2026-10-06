---
id: lem-arith-cube-derived-square-over-dvr
kind: lemma
title: "Cube-derived square over DVR"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-smooth-group-identity-component-open
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-line-bundle-rational-section-cartier-divisor
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - lem-scheme-zariski-main-factorization-quasi-finite
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
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 6.3 (the square from the cube, abelian generic fibre)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, and let $H$ be a smooth separated finite-type $R$-group scheme whose generic fibre is abelian, with identity component $H^0=H_K\cup(H_k)^0$ as in [[lem-arith-smooth-group-identity-component-open]].

(a) For an abelian variety $A/K$ and every invertible sheaf $\mathcal L$ on $A$, the square obstruction on $A\times_KA\times_KA$ is pulled back from the first two factors.

(b) Every invertible sheaf on $H$ satisfies the theorem of the square for the translation action of $H^0$.

No Picard representability, dual abelian variety, Chevalley decomposition or Raynaud theorem is used.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$ and residue field $k$, a smooth separated finite-type $R$-group scheme $H$ with abelian generic fibre, and an invertible sheaf $\mathcal L$ on $H$.

[F1] The theorem of the cube: for an abelian variety $A$ over a field and every invertible sheaf on $A\times A\times A$ expressed in the standard way, the alternating product of its pullbacks under the partial sums is trivial ([[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]]); the field-level theorem of the square is its two-variable consequence ([[lem-theorem-of-the-square-and-mumford-homomorphism]]).

[F2] The identity component $H^0$ is an open subgroup scheme with geometrically connected and geometrically irreducible fibres, and its orbits on geometric fibres are the connected components ([[lem-arith-smooth-group-identity-component-open]]).

[F3] Smooth total spaces over the DVR are regular, regular local rings are UFDs, so Weil divisors are locally Cartier and generic divisors extend by closing their prime supports; the Cartier divisor/rational section correspondence is available, and scheme Hartogs extends sections defined in codimension one ([[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-line-bundle-rational-section-cartier-divisor]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[lem-scheme-zariski-main-factorization-quasi-finite]]).

## Proof

**Proof technique:** direct: rewrite the cube identity as a pullback identity, then extend the generic square by divisor closure and absorb the residual constant factor.

1.1 Write the cube identity for $\mathcal L$ in the standard form $$\mathcal L(x+y+z)\otimes\mathcal L(z)\cong\mathcal L(x+z)\otimes\mathcal L(y+z)\otimes\mathcal L(x+y)\otimes\mathcal L(x)^{-1}\otimes\mathcal L(y)^{-1},$$ read as an isomorphism of pullbacks on $A\times_KA\times_KA$ modulo the constant identity-fibre factors. This is a literal line-bundle pullback identity, and specialising $z=0$ and cancelling the constant factors gives the theorem of the square on the first two factors, proving (a) over $K$ without any Picard or duality input. [F1, given, algebra]

2.1 Now let $\mathcal L$ be an invertible sheaf on $H$ and consider the square defect line bundle on $H^0\times_RH^0\times_RH$: the restriction of the square identity to the generic fibre is supplied by step 1.1 for the abelian generic fibre, and the difference of the two sides extends to a line bundle on the smooth total space. Extend the generic base line bundle on $H^0\times_RH^0$ by regular divisor closure using [F3]: the closure of a generic Cartier divisor is Cartier because the regular local rings of the smooth total spaces are UFDs, and Hartogs extends the defining equations in codimension one. The residual square obstruction is then a line bundle with a vertical divisor. [F1, F3, step 1.1, construct]

3.1 Because $H^0$ has geometrically irreducible fibres by [F2], every vertical prime divisor on $H^0\times_RH^0\times_RH$ is the inverse image of a special-fibre component of $H$, hence is pulled back from the last factor. Restricting the square obstruction to $(\text{unit},\text{unit},\operatorname{id}_H)$ makes the square identity trivial, so the residual line bundle pulled back from $H$ is pulled back from $R$; it can therefore be absorbed into the base line bundle on $H^0\times_RH^0$. Hence the square identity holds for $\mathcal L$ on $H$ with the $H^0$-translation action, proving (b). [F2, F3, step 2.1, algebra]

4.1 The argument uses only the published cube theorem, divisor closure in regular total spaces and the component structure of [F2]; no Picard scheme, dual abelian variety, Chevalley decomposition or Raynaud theorem is used. The same statement applies after the base changes used later, since the hypotheses are stable under flat base change of DVRs. [F1, F2, step 3.1, algebra] ∎ 