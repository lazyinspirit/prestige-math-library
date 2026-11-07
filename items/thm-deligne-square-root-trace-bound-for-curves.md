---
id: thm-deligne-square-root-trace-bound-for-curves
kind: theorem
title: "Deligne square-root trace bound for curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-fkm-conductor-complexity-on-the-affine-line
  - def-frobenius-trace-on-a-constructible-stalk
  - def-middle-extension-l-adic-sheaf-on-a-curve
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
  - thm-grothendieck-ogg-shafarevich-euler-characteristic-formula
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
  - thm-geometric-invariants-control-compact-support-degree-two
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
  - thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves
  - lem-deligne-correlation-estimate-from-cohomological-data
  - lem-deligne-irreducible-comparison-and-frobenius-scalar
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace Functions over Finite Fields and Their Applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
      locator: Definition2.2.8, printed p10, and Theorem4.1.1, printed pp30–33 (Dec3,2014 draft; constant4 in the latter)
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Counting Sheaves with Spherical Codes"
      url: https://arxiv.org/pdf/1210.0851
      locator: Lemma 3.3 and complete proof, pp. 8–9
    - title: "Grothendieck et al., SGA 5, Exposé XV §3"
      url: https://grothendiecksga.com/read/sga5/en/XV-3.html
      locator: §3, finite-field Lefschetz trace formula and proof route
    - title: "Grothendieck et al., SGA 5, Exposé X §§4–7"
      url: https://grothendiecksga.com/read/sga5/en/X-7.html
      locator: §§4–7, Grothendieck–Ogg–Shafarevich formula
verification:
  precheck: pending
---

## Statement

Let $p$ be a prime, let $\ell\ne p$, and fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. Let $\mathcal F_1,\mathcal F_2$ be underived middle-extension sheaves on $\mathbb A^1_{\mathbb F_p}$: each is the underived direct image of its restriction to a dense lisse open subset. Suppose their restrictions to these opens are lisse, remain irreducible after base change to $\overline{\mathbb F}_p$, and have every eigenvalue of inverse arithmetic Frobenius on each closed stalk in the lisse locus of complex absolute value $1$ under $\iota$. At the remaining closed stalks suppose every eigenvalue has complex absolute value at most $1$. Their middle extensions to $\mathbb P^1_{\mathbb F_p}$ mean the underived direct images from those dense lisse opens. Let $\operatorname{Sing}(\overline{\mathcal F}_i)$ be the finite set where the corresponding middle extension is not lisse, and define
$$c_i=\operatorname{rank}(\mathcal F_i)+|\operatorname{Sing}(\overline{\mathcal F}_i)|+\sum_{x\in\operatorname{Sing}(\overline{\mathcal F}_i)}\operatorname{Sw}_x(\mathcal F_i).$$
For $x\in\mathbb F_p$, put $t_i(x)=\iota(\operatorname{Tr}(\operatorname{Frob}^{\mathrm{geom}}_x\mid (\mathcal F_i)_{\bar x}))$, with geometric Frobenius the inverse of arithmetic Frobenius. If the two sheaves are not geometrically isomorphic, then
$$\left|\sum_{x\in\mathbb F_p}t_1(x)\overline{t_2(x)}\right|\le 3c_1^2c_2^2\sqrt p.$$
If they are geometrically isomorphic, their geometric irreducibility implies that their Frobenius structures differ by a scalar $\alpha$ with $|\alpha|=1$ and $t_1(x)=\alpha t_2(x)$ for every $x\in\mathbb F_p$; in this case
$$\left|\sum_{x\in\mathbb F_p}t_1(x)\overline{t_2(x)}-\alpha p\right|\le 3c_1^2c_2^2\sqrt p.$$

## Statement references

[[def-fkm-conductor-complexity-on-the-affine-line]]

[[def-frobenius-trace-on-a-constructible-stalk]]

[[def-pointwise-purity-and-weights-of-an-l-adic-sheaf]]

[[thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, introductory Theorem1.2.1 and detailed Theorem4.1.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

[Fouvry–Kowalski–Michel, *Counting Sheaves with Spherical Codes*, Lemma 3.3](https://arxiv.org/pdf/1210.0851)


## Remarks

The actual middle-extension hypothesis excludes arbitrary punctual summands that would make the native generic-lisse wording false. For example, pairing a constant rank-one sheaf plus five Frobenius-trivial skyscraper lines at zero with the constant sheaf over $\mathbb F_2$ gives correlation $7$ while its generic middle-extension conductor is $1$; no unit scalar identifies the two trace functions. The original all-stalk weight-zero case is included in the richer standard condition of pure weight zero on the lisse locus and weights at most zero on boundary stalks. The approved numerical constant $3$ is retained. The current FKM Dec3,2014 draft has introductory Theorem1.2.1 with constant $3$, detailed Theorem4.1.1 with constant $4$, and explicit incomplete proof steps; neither is imported. The separate conditional numerical helper derives the retained constant from explicit cohomological data, but the actual trace, GOS, boundary-stalk, duality and weight inputs remain held. The displayed conductor formula agrees with the expanded conductor definition for dense-lisse middle extensions, including its preserved globally lisse affine-line specialization.
