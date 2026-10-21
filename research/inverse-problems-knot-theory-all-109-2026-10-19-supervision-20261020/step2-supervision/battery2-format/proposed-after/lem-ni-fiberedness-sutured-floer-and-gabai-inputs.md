---
id: lem-ni-fiberedness-sutured-floer-and-gabai-inputs
kind: lemma
title: "Ni's sutured Floer and Gabai product criterion"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-jsj-decomposition-of-knot-exteriors
  - def-satellite-pattern-companion-and-winding-number
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-knot-relative-spinc-structure
  - lem-ni-holomorphic-disk-and-jsj-analytic-inputs
  - lem-integral-sutured-floer-taut-hierarchy-nonvanishing
  - def-axiom-of-choice
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §§3–7"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Author version Theorem 1.1 p.2, characteristic-region material p.29, and main proof pp.35–36; must be used with the cited Corrigendum"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, §§8–9"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Author version Theorem 1.5 p.2, Theorem 9.7 pp.34–38 and Theorem 9.11 pp.38–39; published pagination is recorded separately below"
    - title: "David Gabai, Foliations and the topology of 3-manifolds III, Theorem 3.13 and Theorem 8.9"
      url: "https://doi.org/10.2307/1971333"
      locator: "Taut hierarchies, norm-minimizing surfaces, and the foliations used in Ni's characteristic-product-region argument"
    - title: "András Juhász, Holomorphic discs and sutured manifolds, Algebraic & Geometric Topology 6 (2006), 1429–1457"
      url: "https://msp.org/agt/2006/6-3/agt-v6-n3-p16-s.pdf"
      locator: "Proposition 9.18, printed pp.1452–1453: irreducible balanced and not taut implies integral SFH vanishes"
    - title: "András Juhász, Floer homology and surface decompositions, Geometry & Topology 12 (2008), 299–350"
      url: "https://msp.org/gt/2008/12-1/gt-v12-n1-p07-s.pdf"
      locator: "Theorem 1.5 p.300, Theorem 9.7 pp.343–348 and Theorem 9.11 p.348; general ambient manifold, integral cut identification and nonproduct rank bound"
    - title: "Yi Ni, Corrigendum to Knot Floer homology detects fibred knots, Inventiones Mathematicae 177 (2009), 235–238"
      url: "https://arxiv.org/pdf/0808.0940"
      locator: "Author version pp.1–3: Theorem 4, Definitions 5–6, Theorem 6.2-prime, Corollary 7 and corrected proof of Theorem 1.1; maximal product pairs replace the original incorrect characteristic-product-region citation"
verification:
  precheck: n/a
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, let $Y\setminus K$ be irreducible, and let $F$ be a genus-$g$ Seifert surface. If the integral top Alexander group $\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)$ is isomorphic to $\mathbb Z$, then the sutured manifold obtained by cutting the compact knot exterior along $F$ is a product sutured manifold. The argument uses Ni's homology-product reduction, the horizontal and separating product-annulus decompositions, the characteristic product region, and Gabai's taut-foliation input under their stated hypotheses.

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The integral top Alexander group and normalization]]

[[def-balanced-taut-sutured-manifold-and-product-region|Product sutured manifold and characteristic product region]]

[[def-sutured-floer-chain-complex|Sutured Floer homology notation and coefficients]]

[Ni, *Knot Floer homology detects fibred knots*, §§3–7](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, §§8–9](https://arxiv.org/pdf/math/0609779v3)

[Gabai, *Foliations and the topology of 3-manifolds III*](https://doi.org/10.2307/1971333)

## Facts & Assumptions

**Given:** The knot, exterior, surface and integral group in the Statement. Full Choice is available through [[def-axiom-of-choice]]. A Seifert surface is connected, compact, oriented and properly embedded in the compact exterior, with its one boundary component the preferred longitude.

[F1] The resolved signed top/outer comparison in [[lem-ni-holomorphic-disk-and-jsj-analytic-inputs]] identifies the actual grading-$g$ complex with the actual $F$-cut complex, with its induced coherent orientation class. Thus it identifies their integral homologies. This is also the exact external Theorem 1.5 of Juhász, *Floer homology and surface decompositions*, published p.300, for a null-homologous knot in any closed connected oriented $Y$ and any Seifert surface $F$; no three-sphere or rational-homology-sphere hypothesis occurs.

[F2] **External vanishing input:** Juhász, *Holomorphic discs and sutured manifolds*, Proposition 9.18, published pp.1452–1453: if a balanced sutured manifold is irreducible and not taut, its integral sutured Floer homology is zero. This is used by contrapositive, independently of the resolved taut-to-nonzero hierarchy theorem.

[F3] **External nonproduct input:** Juhász, *Floer homology and surface decompositions*, Theorem 9.7, published pp.343–348: every taut balanced sutured manifold which is not a product has integral sutured Floer homology containing a copy of $\mathbb Z^2$. Its geometric reduction, including the characteristic-pair step, is an external input here, not a locally reconstructed consequence of the $S^3$ JSJ theorem. The source's proof reduces by horizontal/product-annulus operations and produces two taut decompositions with disjoint outer $\operatorname{Spin}^c$ sets. Their nonzero summands and signed cut maps agree with the scopes of the preserved local hierarchy and analytic suppliers. In particular no integral homology tensor formula without Tor is assumed.

[F4] **Corrected external characteristic-pair input:** the original Ni characteristic-product-region citation is not imported uncorrected. Ni's Corrigendum, author-version pp.1–3, Theorem 4 and Definitions 5–6, uses a characteristic Seifert pair for a Haken manifold pair and a maximal gapless product pair containing its characteristic product pair. Theorem 6.2-prime assumes irreducible balanced, connected suture, vertically prime, and $\widehat{\mathrm{HFS}}\cong\mathbb Z$; it says that product-annulus homologies span $H_1(M)$. Corollary 7 says that the characteristic product pair then surjects onto $H_1(M)$. The corrected main proof on p.3 supplies the product reduction in the original arbitrary-$Y$ setting. These are source qualifications for the external product argument in F3 and Ni's Theorem 1.1, not assertions of the false universal ambient enclosure used in the uncorrected paper. None is deduced from the retained $S^3$ knot-exterior JSJ Statement.

## Proof

**Proof technique:** direct, with the explicitly identified external inputs F2–F4.

1.1 Let $E$ be the compact exterior and $(M,\gamma)$ its cut along $F$. Its two faces are copies of $F$, and its vertical boundary is the annulus $\partial F\times I$. It is balanced: both faces have Euler characteristic $1-2g$, no component is closed, and every boundary component meets the vertical annulus. A meridian intersects $F$ algebraically once, so $F$ is nonseparating and the cut is connected. [Given]

1.2 The signed cut comparison gives $\operatorname{SFH}(M,\gamma;\mathbb Z)\cong\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)\cong\mathbb Z$. The grading uses the supplied class $[F]$ and genus of this actual surface; no genus-detection theorem for a different ambient manifold is substituted. [F1]

2.1 The irreducibility assumption applies to $E$: pushing away the deleted-knot end identifies every compact sphere question with that in $Y\setminus K$. A sphere in the interior of $M$ is therefore a sphere disjoint from $F$ in $E$ and bounds a ball in $E$. Since $F$ is connected and disjoint from this sphere, if it entered the ball it would lie wholly in its interior, contradicting $\partial F\subset\partial E$. The ball is consequently disjoint from $F$; shrink the cut collar if necessary to obtain the same ball in $M$. Thus $M$ is irreducible. [Given, step 1.1]

3.1 If $(M,\gamma)$ were not taut, its integral sutured Floer homology would vanish by the external vanishing input, contradicting step 1.2. Therefore it is taut. This is the contrapositive of F2, not a reversal of taut hierarchy nonvanishing. [F2, step 1.1, step 2.1, step 1.2]

4.1 If the taut balanced $(M,\gamma)$ were not a product, F3 would give $\mathbb Z^2\hookrightarrow\operatorname{SFH}(M,\gamma;\mathbb Z)$. Such an injection into $\mathbb Z$ is impossible: images $a,b$ of its two basis vectors satisfy the nontrivial integer relation $b a-a b=0$ when either is nonzero, and an image zero itself contradicts injectivity. The two disjoint outer summands in the source argument therefore contradict step 1.2. Hence the actual $F$-cut exterior is a product sutured manifold. This includes $g=0$ and uses the corrected characteristic-pair qualification F4. [F3, F4, step 1.2, step 3.1] ∎

