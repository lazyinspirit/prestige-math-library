---
id: "lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support"
kind: "lemma"
title: "Finite dimensional axiomatic homology has finite subcomplex support"
deps: ["lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology", "lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients", "cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, cellular calculation pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, cellular calculation pp.119–120"
    - title: "Hatcher, Algebraic Topology, Lemma 2.34 p.138, finite support reasoning"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Lemma 2.34 p.138, finite support reasoning"
status: "draft"
origin: "pipeline"
proof_strategy: "Cellular chains are direct sums. Each cycle and each boundary witness has finite support contained, by closure finiteness, in a finite subcomplex. Use the natural skeletal isomorphism for subcomplex inclusions. Compact images will subsequently ensure compatibility under continuous maps; singular-chain support is not being assumed for h."
---

## Statement

For a finite-dimensional CW pair $(X,A)$ and ordinary $h$, the canonical map
$$\underset{K\subset X\text{ finite subcomplex}}{\operatorname{colim}}\,h_n(K,K\cap A)\longrightarrow h_n(X,A)$$
is an isomorphism for every integer $n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For every finite-dimensional CW pair $(X,A)$ and ordinary theory $h$, there is a canonical isomorphism $$h_n(X,A)\cong H_n(C_*^h(X,A))$$ for every integer $n$, natural for cellular maps. It is the skeletal lift isomorphism described below and commutes with the homology connecting maps of pairs. The number of cells need not be finite. ([[lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology]])

[F2] For a CW pair $(X,A)$, an ordinary theory $h$ with coefficient $G$, and chosen cell orientations, the complex $C_*^h(X,A)$ is canonically $$C_*^{\mathrm{cell}}(X,A;\mathbb Z)\otimes G.$$ Its differential is the integral incidence matrix acting on $G$. In degree one the entries are signed terminal-minus-initial endpoints. The direct-sum matrices have finite support in each column. ([[lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients]])

[F3] If $K$ is compact and $f:K\to X$ is continuous into a CW complex, then $f(K)$ lies in a finite CW subcomplex of $X$. ([[cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex]])

## Proof

1.1 By F1 and F2, compute each of these groups using its oriented cellular direct-sum complex with coefficients $G$. Subcomplex inclusion preserves the basis cells and their incidence coefficients. The inclusion from a finite subcomplex therefore gives the actual inclusion of its relative cellular chains into those of $(X,A)$. [F1, F2]

2.1 A cycle in the latter complex has finite support. Include the closures of its support cells in a finite CW subcomplex $K$: each closed cell is the compact image of a disk, and F3 places it in a finite subcomplex; a finite union of these remains finite. The cycle equation is unchanged in this subcomplex, so its homology class comes from $K$. [F3, step 1.1]

3.1 If a class from $K$ maps to zero, its representing cycle bounds a finite-support cellular chain in $X$. Enlarge $K$ to a finite subcomplex containing the closures of that chain's support cells. There the same boundary equation already witnesses zero. This is exactly injectivity of the colimit map. Finite unions show the indexing collection is directed, with the empty subcomplex included; zero complexes and negative degrees cause no exception. [F3, step 1.1, step 2.1] ∎
