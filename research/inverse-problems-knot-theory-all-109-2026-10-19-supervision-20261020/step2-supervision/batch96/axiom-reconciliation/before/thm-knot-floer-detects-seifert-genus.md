---
id: thm-knot-floer-detects-seifert-genus
kind: theorem
title: "Knot Floer homology detects the Seifert genus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - def-axiom-of-choice
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-integral-sutured-floer-taut-hierarchy-nonvanishing
  - lem-ni-holomorphic-disk-and-jsj-analytic-inputs
  - lem-fiber-outer-grading-and-integral-cut-euler-matrix
  - lem-countable-analytic-choice-for-fixed-sutured-floer-data
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and genus bounds, arXiv:math/0311496, Theorem 1.2 and proof"
      url: "https://arxiv.org/pdf/math/0311496"
      locator: "Printed pp.2 and 18–19; zero-surgery, taut foliation, contact nonvanishing, and the genus-one connected-sum case"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, Theorems 1.4–1.5 and Corollary 8.3"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.2–3 and 28–29; taut sutured Floer nonvanishing, the HFK-sutured decomposition, and genus detection"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, Theorem 2.3"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed p.5; S3 genus-detection formula and normalization"
---

## Statement

Assume the Axiom of Countable Choice. Let $K\subset S^3$ be a smooth oriented knot, and let $g(K)$ be the least genus of a compact connected oriented embedded surface in $S^3$ with boundary $K$. With the integral Alexander normalization, the maximum Alexander grading in which the hat knot Floer homology of $K$ is nonzero is $g(K)$:

$$g(K)=\max\{i\in\mathbb Z:\widehat{\mathrm{HFK}}(S^3,K,i;\mathbb Z)\ne0\}.$$

## Statement references

[[def-oriented-seifert-surface-and-knot-genus|The minimum genus among embedded Seifert surfaces]]

[[def-top-alexander-grading-of-knot-floer-homology|The integral absolute Alexander grading]]

[Ozsvath and Szabo, *Holomorphic disks and genus bounds*, Theorem 1.2](https://arxiv.org/pdf/math/0311496)

[Juhasz, *Floer homology and surface decompositions*, Corollary 8.3](https://arxiv.org/pdf/math/0609779v3)

[Manolescu, *An Introduction to Knot Floer Homology*, Theorem 2.3](https://web.stanford.edu/~cm5/hfk.pdf)

## Facts & Assumptions

[F1] [[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]] gives the two ball sides of a smooth embedded sphere in the actual three-sphere.

[F2] [[lem-integral-sutured-floer-taut-hierarchy-nonvanishing]] gives a split copy of Z in the integral homology of a taut balanced sutured manifold, with its specified coherent orientation class induced through the finite hierarchy.

[F3] [[lem-ni-holomorphic-disk-and-jsj-analytic-inputs]] constructs the actual marked adapted diagram and identifies the entire integral degree-g differential with the cut differential, with the specified orientation character retained.

[F4] [[lem-fiber-outer-grading-and-integral-cut-euler-matrix]] computes the absolute Alexander degree of every adapted generator as g minus its number of interior polygon coordinates.

[F5] [[def-oriented-seifert-surface-and-knot-genus]] defines the minimum among compact connected oriented embedded Seifert surfaces. Such surfaces exist. Their nonnegative integer genera have a least realized value; this finite integer minimization uses no additional choice principle beyond the assumptions of the statement.

[F6] [[lem-countable-analytic-choice-for-fixed-sutured-floer-data]] supplies the Countable Choice selection branch for the actual local analytic constructions used in F2–F4 on the fixed finite diagram/cut hierarchy. The pointwise Fredholm parametrices, domain-area bounds, protected-divisor barriers, finite-dimensional Sard reductions and local gluing constructions are those already constructed at these actual targets. Their choices are made on countable separable chart covers as specified in F6; the proof does not invoke the broader full-Choice existence declaration as an assumption. The geometric hierarchy and its finite diagram words are chosen for this one manifold and have only finitely many stages.

## Proof

**Given:** A smooth oriented knot K in S³, the stated choice assumptions, and its integral meridional Alexander normalization.

1.1 Choose a Seifert surface F realizing the least genus g=g(K), and let E be the compact exterior. The exterior is irreducible: a sphere in its interior bounds two balls in S³ by F1; the connected knot neighborhood lies entirely on one side, so the other ball is disjoint from it and lies in E. A small oriented meridian loop meets F once, so F is nonseparating: a separating two-sided surface would have algebraic intersection zero with every closed loop. Cut E along the connected F to obtain connected M with the product annular suture and the two F faces. Their Euler characteristics agree and the boundary meets that suture, so M is balanced. A sphere in M is disjoint from F in E. Its E-ball is also disjoint from F: since F is connected, disjoint from the sphere, and has its boundary on ∂E outside that interior ball, it lies entirely on the other side. Thus that ball remains a ball in M. This proves irreducibility of the actual cut without a general-Y irreducibility assertion. [F1, F5, construct]

1.2 The two faces are incompressible. A compression of F along a nonseparating essential circle produces a connected Seifert surface of genus g−1. A separating compression produces a boundary-bearing Seifert component and a closed component. The latter has positive genus, since otherwise the original compression circle bounded a disk on F; discarding it again gives a Seifert surface of genus strictly less than g. Both contradict minimality. A face compression in M would be such a compression in E. For g=0 the disk has no essential compression circle. [F5, construct]

1.3 To prove the actual sutured norm-minimality, take any compact oriented properly embedded competitor T representing the positive face class in H₂(M,γ;Z). Its total oriented boundary in H₁(γ;Z) is one copy of the longitude. Put its boundary circles in the interior of the annular suture. Cap an innermost contractible boundary circle by its disk in the annulus, pushed into the boundary collar; this operation increases Euler characteristic and cannot increase the Thurston complexity. Continue until every boundary circle is essential. Whenever both orientations remain, choose an adjacent opposite pair. The annulus between them contains no other boundary circle. Glue it to T in a thin boundary collar and round the corners. This gives an embedded oriented surface and removes the pair. Euler characteristic is unchanged; if two components merge, the inequality max(0,−(χ₁+χ₂))≤max(0,−χ₁)+max(0,−χ₂) shows that total complexity cannot increase. For two circles on one component its Euler characteristic, hence complexity, is unchanged. The finite sequence ends with exactly one essential boundary circle, since its total winding is one. Delete all closed components, which also cannot increase complexity. The remaining connected surface embeds in E and extends across the knot collar to an actual Seifert surface for K of the same genus. Its genus is at least g by minimality. For g≥1 its complexity is therefore at least 2g−1=x(F); for g=0 it is at least zero=x(F). It follows that x(T)≥x(F). The same argument applies to the negative face. Thus M is the actual taut balanced sutured manifold, by irreducibility and norm-minimality. The boundary cancellations were used only to derive a lower bound and need not preserve the competitor's relative class after it is mapped to E. [F5, step 1.1, step 1.2, construct]

2.1 Apply the restricted branch F6 to the fixed finite hierarchy and its diagram choices: the integer domain classes, required finite parameter families, separable Sobolev/perturbation spaces and protected neighborhoods are exactly the inputs described there. This makes the simultaneous regular data, compactness extractions, gluing charts and determinant selections under Countable Choice. With these choices, apply the actual construction F3 to the marked Seifert surface F. Its meridional frame, rather than an unspecified closure framing, gives an admissible adapted representative. By F4 every generator has Alexander degree g−n_P(x), with n_P(x) a nonnegative integer. Hence its whole integral chain complex has no generator, and thus no homology, in a grading greater than g. [F3, F4, F6, step 1.3]

2.2 The entire degree-g summand is the outer summand, and F3 identifies its signed differential with the actual cut complex of M. Since M is taut, F2 gives that this cut homology contains a split copy of Z for the orientation class induced by the given knot complex. Consequently the integral knot Floer group at degree g is nonzero. This also covers g=0: the taut cut argument and the same signed chain map apply to the minimum disk, without a genus-one connected-sum or field-coefficient substitution. [F2, F3, step 1.3, step 2.1]

2.3 Degree g is nonzero and every larger degree is zero, so the maximum of the stated nonvanishing degree set is exactly g(K). The proof uses only the literal S³ ball-side and minimum-Seifert-genus arguments above; it makes no claim of arbitrary general-Y Thurston norm detection. [step 2.1, step 2.2] ∎
