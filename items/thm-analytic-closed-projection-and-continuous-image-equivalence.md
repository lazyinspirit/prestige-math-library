---
id: thm-analytic-closed-projection-and-continuous-image-equivalence
kind: theorem
title: "Equivalent analytic normal forms and Borel maps"
status: draft
origin: pipeline
deps: ["lem-polish-closed-products-and-baire-parametrization", "lem-analytic-countable-operations-and-borel-inclusion", "def-analytic-and-coanalytic-by-closed-projection", "def-countable-borel-hierarchy", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 4.1, Lemma 4.2 p34 and Lemma 4.5(ii–iii) pp34–35; graph argument supplied locally instead of importing Theorem 2.27"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, for $A$ in a Polish $X$, these conditions are equivalent: $A$ is analytic in the closed-projection convention; $A$ is empty or a continuous image of $\mathcal N$; $A$ is a continuous image of a Borel subset of a Polish space; $A$ is the projection of a Borel subset of $Y\times X$ for some Polish $Y$. Analytic sets are preserved by Borel measurable images and inverse images between Polish spaces; coanalytic sets are preserved by such inverse images. A map is Borel measurable if its open preimages are Borel.

## Facts & Assumptions

[F1] [[lem-polish-closed-products-and-baire-parametrization]] gives Polish closed products and Baire parametrization of nonempty Polish spaces.

[F2] [[lem-analytic-countable-operations-and-borel-inclusion]] gives Borel inclusion, intersections, and continuous inverse images for analytic sets.

[F3] [[def-analytic-and-coanalytic-by-closed-projection]] fixes the analytic and coanalytic conventions.

[F4] [[def-countable-borel-hierarchy]] defines the Borel sigma-algebra as the least open-containing sigma-algebra.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** The Polish spaces and ZFC assumptions in the statement.

1.1 If $A$ is a nonempty closed projection with witness $F\subseteq X\times\mathcal N$, F1 makes $F$ Polish and gives a continuous surjection $h:\mathcal N\to F$. Projection composed with $h$ is continuous onto $A$. Conversely if $f:\mathcal N\to X$ is continuous, its reversed graph $\{(f(y),y):y\in\mathcal N\}$ is closed. Indeed if $x\ne f(y)$, disjoint metric neighbourhoods of these two points and continuity at $y$ give a product neighbourhood of $(x,y)$ missing the graph. The graph projects to $f[\mathcal N]$, giving analyticity by F3. Empty $A$ has the empty closed witness. [F1, F3]

1.2 Let $f:Y\to X$ be Borel measurable. If $X$ is empty then $Y$ is empty and its graph is empty; otherwise enumerate, for every $n$, all basic opens $V_{nj}$ in a countable metric basis of $X$ having diameter less than $2^{-n}$. They cover $X$, by dense-centre rational balls. Then

$$\operatorname{graph}(f)=\bigcap_n\bigcup_j\bigl(f^{-1}[V_{nj}]\times\overline{V_{nj}}\bigr).$$

The forward inclusion uses a basis member containing $f(y)$. For the reverse, membership on the right gives for every $n$ a set containing $f(y)$ whose closure contains $x$, and thus $d(f(y),x)\leq2^{-n}$; hence $x=f(y)$. Each rectangle is Borel: coordinate projections have Borel preimages of Borel sets, because the family of sets with Borel preimage is a sigma-algebra containing opens, by continuity and F4. Intersect their two coordinate preimages and use F4's countable operations. Hence the graph is Borel. [F4]

2.1 A continuous image of any analytic set $B$ is analytic: for nonempty $B$ compose its parametrization from step 1.1 with the given continuous map; for empty $B$ use the empty witness. Borel subsets are analytic by F2, so this proves that the third condition implies the first, including maps defined only on the Borel subset (the parametrization is continuous into that subspace). The second implies the third by taking the domain $\mathcal N$ or the empty Borel domain. The fourth implies the first by projecting a Borel, hence analytic, subset of the Polish product supplied by F1. The first implies the fourth using its closed witness, with coordinates reversed. Thus all four conditions are equivalent. [F1, F2, step 1.1]

3.1 For analytic $B\subseteq Y$, its cylinder $B\times X$ is analytic by F2's continuous inverse-image closure. The graph is analytic by F2 and step 1.2, so their intersection is analytic by F2. Its continuous projection onto $X$ is $f[B]$, analytic by step 2.1. For analytic $A\subseteq X$, instead intersect the graph with $Y\times A$ and project to $Y$, obtaining $f^{-1}[A]$ by the same argument. All products are Polish by F1. Finally if $A$ is coanalytic, $X\setminus A$ is analytic by F3, and $Y\setminus f^{-1}[A]=f^{-1}[X\setminus A]$ is analytic by what was just proved. This gives the coanalytic inverse-image claim. All invoked ZFC suppliers are licensed by A1. QED. [F1, F2, F3, A1, step 2.1, step 1.2]
