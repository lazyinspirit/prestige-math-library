---
id: "lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support"
kind: "lemma"
title: "Finite dimensional axiomatic homology has finite subcomplex support"
deps: ["lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology", "lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients", "def-cw-complex-with-closure-finiteness-and-weak-topology", "def-skeleta-cw-subcomplex-and-relative-cw-complex"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, cellular calculation pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, cellular calculation pp.119–120"
    - title: "Hatcher, Algebraic Topology, Lemma 2.34 p.138, finite support reasoning"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Lemma 2.34 p.138, finite support reasoning"
status: published
origin: "pipeline"
proof_strategy: "Cellular chains are direct sums. Each cycle and each boundary witness has finite support contained, by closure finiteness, in a finite subcomplex. Use the natural skeletal isomorphism for subcomplex inclusions."
---

## Statement

For a finite-dimensional CW pair $(X,A)$ and ordinary $h$, the canonical map
$$\underset{K\subset X\text{ finite subcomplex}}{\operatorname{colim}}\,h_n(K,K\cap A)\longrightarrow h_n(X,A)$$
is an isomorphism for every integer $n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For every finite-dimensional CW pair $(X,A)$ and ordinary theory $h$, there is a canonical isomorphism $$h_n(X,A)\cong H_n(C_*^h(X,A))$$ for every integer $n$, natural for cellular maps. It is the skeletal lift isomorphism described below and commutes with the homology connecting maps of pairs. The number of cells need not be finite. ([[lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology]])

[F2] For a CW pair $(X,A)$, an ordinary theory $h$ with coefficient $G$, and chosen cell orientations, the complex $C_*^h(X,A)$ is canonically $$C_*^{\mathrm{cell}}(X,A;\mathbb Z)\otimes G.$$ Its differential is the integral incidence matrix acting on $G$. In degree one the entries are signed terminal-minus-initial endpoints. The direct-sum matrices have finite support in each column. ([[lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients]])

[F3] Each closed cell meets only finitely many open cells, and cell boundaries lie in lower skeleta ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]). A CW subcomplex is a union of cells containing the closure of each of its cells ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]]).

## Proof

1.1 By F1 and F2, compute each of these groups using its oriented cellular direct-sum complex with coefficients $G$. Subcomplex inclusion preserves the basis cells and their incidence coefficients. The inclusion from a finite subcomplex therefore gives the actual inclusion of its relative cellular chains into those of $(X,A)$. [F1, F2]

2.1 A cycle in the latter complex has finite support. Starting with those finitely many cells, add every cell meeting one of their closures, then repeat on newly added cells. Each stage adds finitely many cells by F3, and every newly required boundary cell has lower dimension; since the initial cells have a finite maximum dimension, this process terminates after finitely many stages in a finite subcomplex $K$. The cycle equation is unchanged in this subcomplex, so its homology class comes from $K$. [F3, step 1.1]

3.1 If a class from $K$ maps to zero, its representing cycle bounds a finite-support cellular chain in $X$. Enlarge $K$ to a finite subcomplex containing the closures of that chain's support cells. There the same boundary equation already witnesses zero. This is exactly injectivity of the colimit map. Finite unions show the indexing collection is directed, with the empty subcomplex included; zero complexes and negative degrees cause no exception. [F3, step 1.1, step 2.1] ∎
