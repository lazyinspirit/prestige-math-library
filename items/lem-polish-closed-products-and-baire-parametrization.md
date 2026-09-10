---
id: lem-polish-closed-products-and-baire-parametrization
kind: lemma
title: "Closed subspaces, products, and Baire parametrization"
status: draft
origin: pipeline
deps: ["def-polish-space", "lem-cantor-and-baire-sequence-coding", "def-product-topology", "def-axiom-of-choice"]
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
    - title: "Example 1.3 p3 (finite-product specialization), Lemmas 1.5–1.6 pp3–4, Theorem 1.17 p6 and closed-subspace paragraph p9; full corresponding proofs read"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, finite products and closed subspaces of Polish spaces are Polish. Every nonempty Polish space is a continuous image of $\mathcal N=\mathbb N^{\mathbb N}$. No surjection from $\mathcal N$ onto the empty space is asserted.

## Facts & Assumptions

[F1] [[def-polish-space]] means separable and admitting a compatible complete metric.

[F2] [[lem-cantor-and-baire-sequence-coding]] supplies the Polish Baire space and its cylinder topology.

[F3] [[def-product-topology]] defines the product topology by finite coordinate restrictions.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** The stated spaces and ZFC assumptions.

1.1 For two nonempty Polish spaces choose compatible complete metrics $d,e$ and countable dense sets $D,E$ by F1. On the product put $q((x,y),(x',y'))=d(x,x')+e(y,y')$. Each product neighbourhood contains a q-ball, and each q-ball contains the product of two coordinate balls of half its radius, so this is F3's topology. A q-Cauchy sequence is Cauchy in both coordinates; its coordinate limits exist and converge in q by addition of the two distance bounds. The countable set $D\times E$ meets each nonempty basic product open, so is dense. Thus the product is Polish. Iterate for finitely many factors. An empty factor gives the empty space, which has the empty complete metric and empty dense set; the product of no factors is a singleton with zero metric. [F1, F3]

1.2 For a closed $Y\subseteq X$, a Cauchy sequence in the restricted complete metric converges in $X$; its limit is in $Y$, since otherwise the open complement would contain a ball eventually containing the sequence. To prove separability, enumerate an ambient countable metric basis using dense centres and positive rational radii. Its nonempty traces form a countable basis on $Y$. A1 selects a point from each such trace; the selected set is countable and meets every nonempty relative open. If $Y$ is empty no selection is needed. This proves F1 for the closed subspace. [F1, A1]

1.3 Now let $X\ne\varnothing$. Fix a complete metric and a dense sequence, and put $U_\varnothing=X$. For each nonempty open $U_s$ enumerate all balls with dense-sequence centres and positive rational radii whose closures are contained in $U_s$ and whose diameters are at most $2^{-|s|-1}$. They cover $U_s$: for $x\in U_s$ choose $\epsilon>0$ with $B(x,\epsilon)\subseteq U_s$ and small enough for the diameter bound; a dense centre sufficiently close to $x$ and a sufficiently small rational radius yield such a ball containing $x$, with its closed ball inside $B(x,\epsilon)$. The family is nonempty and countable; enumerate its indices increasingly, repeating the first if the list is finite. Set these balls to be $U_{s^\frown n}$. Length recursion constructs all the nonempty opens with $\overline{U_{s^\frown n}}\subseteq U_s$. [F1]

2.1 For $a\in\mathcal N$, the centres of $U_{a\upharpoonright n}$ for $n\geq1$ form a Cauchy sequence: after stage $n$ they lie in the same set of diameter at most $2^{-n}$. Completeness gives a limit $f(a)$. For every $n$, the tail lies in $U_{a\upharpoonright(n+1)}$, so the limit lies in its closure, which is contained in $U_{a\upharpoonright n}$. Shrinking diameters show this is the only point in all those opens. For each $x\in X$, recursively take the least child containing $x$, possible by their covering property; then $x$ is that branch's unique limit. Thus $f$ is onto. Inputs sharing $n$ coordinates have images in $U_{a\upharpoonright n}$ and at distance at most $2^{-n}$, proving continuity with F2's cylinders. QED. [F1, F2, step 1.3]
