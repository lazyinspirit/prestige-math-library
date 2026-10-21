---
id: lem-upsilon-t-modification-preserves-filtered-homotopies
kind: lemma
title: "The t-modification preserves graded filtered maps, homotopies and tensor products"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-upsilon-real-series-valuation-domain
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Every calculation is column-finite in fixed bases; no choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Concordance homomorphisms from knot Floer homology"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definition4.1 and Proposition4.4; the coefficient calculation is supplied locally"
---

## Statement

Let $C,C'$ be free $\mathbb F_2[U]$ chain complexes on homogeneous Alexander-filtered bases. Suppose $U$ lowers Maslov grading by two and Alexander filtration by one, and the differentials lower Maslov grading by one and do not increase Alexander filtration. Bases may be infinite provided each matrix column has finite support. Put $g_t(x)=M(x)-tA(x)$ for each basis vector and $0\le t\le2$. Replace a homogeneous degree-$d$ filtered polynomial matrix term $cU^ky$ in $f(x)$ by $cv^{g_t(y)-g_t(x)-d}y$ over the nonnegative real-exponent ring $\mathcal R$. This defines a degree-$d$ matrix $f_t$ over $\mathcal R$. The construction preserves sums of equal-degree maps, identities, composition, chain-map equations, and filtered chain-homotopy identities. It therefore carries Maslov-graded Alexander-filtered chain homotopy equivalences to graded chain homotopy equivalences of $t$-modified complexes. Moreover the product basis gives a natural graded chain isomorphism
$$(C\otimes_{\mathbb F_2[U]}D)_t\cong C_t\otimes_{\mathcal R}D_t.$$
The coefficient extension uses $U=v^2$ before the differential and the maps are reweighted; the construction is not ordinary scalar extension of the original differential.

## Statement references

[[lem-upsilon-real-series-valuation-domain]]

## Facts & Assumptions

**Given:** The based complexes and column-finite homogeneous filtered polynomial maps in the Statement.

[F1] [[lem-upsilon-real-series-valuation-domain]] supplies the coefficient domain $\mathcal R$, including every monomial $v^\alpha$ for $\alpha\ge0$.

## Proof

1.1 A nonzero term $U^ky$ of a degree-$d$ map satisfies $M(y)-2k=M(x)+d$ and $A(y)-k\le A(x)$, with $k\ge0$. Hence its proposed exponent is $g_t(y)-g_t(x)-d=2k-t(A(y)-A(x))\ge(2-t)k\ge0$. Thus it belongs to $\mathcal R$. Homogeneity gives at most one $U$ exponent for a fixed source, target and degree, so each column reweights unambiguously and retains finite support. The degree of the new term is $g_t(x)+d$, as required. [F1, given, algebra]

2.1 If maps of degrees $d,e$ are composed, a path through an intermediate generator $y$ contributes exponent $(g_t(y)-g_t(x)-d)+(g_t(z)-g_t(y)-e)=g_t(z)-g_t(x)-(d+e)$, independent of $y$. Thus cancellation of the original finite path coefficients is preserved, proving compatibility with composition and sums of equal degree. The identity has exponent zero. Applying this to $\partial^2=0$ proves the modified differential squares to zero. Applying it to $\partial'f+f\partial=0$ proves the chain-map equation. If $f+g=\partial'h+h\partial$ with $h$ filtered of degree $+1$, it gives $f_t+g_t=\partial'_t h_t+h_t\partial_t$. Therefore maps and inverse homotopies of a filtered chain homotopy equivalence retain all their identities after modification. [step 1.1, given, algebra]

3.1 On a product basis element $x\otimes y$, Maslov and Alexander degrees add, so $g_t(x\otimes y)=g_t(x)+g_t(y)$. A term of $\partial_Cx\otimes y$ consequently has the same reweighted exponent as its differential term in $C_t$; a term of $x\otimes\partial_Dy$ has the exponent from $D_t$. The product-basis identification is therefore a graded chain isomorphism over $\mathcal R$. These computations are column-finite and do not require any finite rank assumption beyond that stated for each individual column. [step 1.1, step 2.1, given, algebra] ∎
