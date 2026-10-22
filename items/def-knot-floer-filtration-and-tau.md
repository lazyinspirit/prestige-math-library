---
id: def-knot-floer-filtration-and-tau
kind: definition
title: "The Alexander filtration and tau level"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-oriented-seifert-surface
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-well-ordering-principle
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The diagramwise definition and its minimum use no choice axiom; choices of diagrams or surfaces are not asserted to give the same value here."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
      locator: "§2.1, printed pp.4–6; filtered complex and the definition of tau; §§3.3–3.5, genus bound"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§2.2 and 3.1, printed pp.4–8; Alexander filtration, total homology, and tau threshold"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Chapters 4, 6, 8, and 13; filtered grid complex, tau convention, and grid-to-knot-Floer comparison"
---

## Definition

Let $K$ be a smooth oriented knot in the standard oriented three-sphere. Let $F$ be a compact connected oriented Seifert surface with boundary $K$, and let $\mathcal H=(\Sigma,\boldsymbol\alpha,\boldsymbol\beta,w,z)$ be an admissible doubly pointed Heegaard diagram representing $(K,F)$. The associated one-pointed hat chain complex $\widehat{CF}(\mathcal H)$ is the finite-dimensional chain complex over $\mathbb F_2$ obtained from the minus complex by setting its basepoint variable to zero; its differential counts index-one disks with zero multiplicity at $w$. Assume for this specified data that the differential is nonincreasing in the Alexander filtration, that the absolute Alexander formula below takes integer values, and that $H(\widehat{CF}(\mathcal H))\cong\mathbb F_2$. Give a generator $\mathbf x$ its absolute Alexander filtration
$$A_F(\mathbf x)=\frac12\left\langle c_1(\mathfrak s_{w,z}(\mathbf x)),[\widehat F]\right\rangle,$$
where $\mathfrak s_{w,z}(\mathbf x)$ is the homology class of the nowhere-vanishing vector field assigned to $\mathbf x$ by the pointed Morse construction, with its prescribed boundary data near the two basepoints; $c_1$ is the first Chern class of the oriented plane field perpendicular to that vector field. To form the zero-framed surgery, remove a tubular neighborhood of $K$ and glue in a solid torus whose meridian is the longitude induced by $F$. The surface $\widehat F$ is obtained by deleting a boundary collar of $F$ and capping its longitude by the meridian disk of that solid torus. This is the standard integer normalization, with the one-generator diagram of the standard unknot at filtration zero. The subcomplex $F_s\widehat{CF}(\mathcal H)$ is spanned by generators of Alexander filtration at most $s$.

More generally, a finite integer-filtered chain complex is a finite-dimensional chain complex $C$ over $\mathbb F_2$ with subcomplexes $F_sC$ such that $F_sC=0$ for all sufficiently small integers $s$ and $F_sC=C$ for all sufficiently large integers $s$. If $H(C)\cong\mathbb F_2$, define
$$\tau(C):=\min\{s\in\mathbb Z:\operatorname{im}(H(F_sC)\longrightarrow H(C))\ne0\}.$$
For the fixed diagram and surface above, write $\tau_{\mathcal H,F}(K)=\tau(\widehat{CF}(\mathcal H),F_*\widehat{CF}(\mathcal H))$. Once diagram and surface independence is proved, their common value is the knot invariant $\tau(K)$. Until that comparison is proved, $\tau_{\mathcal H,F}(K)$ denotes only the value for the specified data.

## Definition references

[[def-admissible-pointed-heegaard-floer-data|Pointed diagrams, the hat complex, and the Alexander filtration convention]]

[[def-oriented-seifert-surface|Oriented Seifert surfaces for knots]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures as lifts of the oriented frame bundle and their associated plane-field data]]

[Ozsvath and Szabo, *Knot Floer homology and the four-ball genus*, §2.1](https://arxiv.org/pdf/math/0301149v4)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§2.2 and 3.1](https://arxiv.org/pdf/1512.00383v3)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** A finite integer-filtered chain complex $C$ over $\mathbb F_2$ with $H(C)\cong\mathbb F_2$.

[A1] The filtration is exhaustive, bounded below, and each $F_sC$ is a subcomplex, as required in the Definition.

[A2] The total homology is nonzero and one-dimensional, as required in the Definition.

[A3] The Alexander levels are integers, as required in the Definition.

[F1] [[thm-well-ordering-principle]]: every nonempty subset of $\mathbb N_0$ has a least element.

## Verification

1.1 Since $F_sC=0$ for all sufficiently small $s$, the inclusion-induced map $H(F_sC)\to H(C)$ is zero at those levels. Since $F_sC=C$ for all sufficiently large $s$, this map is the identity on $H(C)$ at those levels and is nonzero by [A2]. [A1, A2, given, algebra]

2.1 Let $S=\{s\in\mathbb Z:H(F_sC)\to H(C)\text{ has nonzero image}\}$. Step 1.1 shows $S$ is nonempty, and [A1] gives an integer lower bound $m$ for $S$. Then $S-m$ is a nonempty subset of $\mathbb N_0$; by [F1] it has a least element $k$. For every $s\in S$, $s-m\ge k$, so $m+k$ is the least element of $S$. This proves that $\tau(C)$ exists and is unique. [A1, A3, F1, step 1.1, construct, algebra] ∎
