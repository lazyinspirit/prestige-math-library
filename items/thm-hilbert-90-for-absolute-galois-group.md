---
id: thm-hilbert-90-for-absolute-galois-group
kind: theorem
title: "Hilbert theorem 90 for an absolute Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-absolute-galois-group-of-a-field
  - thm-hilbert-90-for-finite-galois-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Fields and Galois Theory, version 5.10, Chapter IV, §5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "Serge Lang, Algebra, Chapter VI, §2"
      url: "https://link.springer.com/book/10.1007/978-1-4612-0853-8"
verification: {}
---

## Statement

Let $F$ be a field, fix a separable closure $F_s$, and put
$G_F=\operatorname{Gal}(F_s/F)$. Every continuous function
$c:G_F\to F_s^\times$ satisfying
$$c(gh)=c(g)\,g(c(h))$$
has the form $c(g)=g(b)/b$ for some $b\in F_s^\times$. Equivalently,
$$H^1_{\mathrm{cont}}(G_F,F_s^\times)=0.$$

## Statement references

[[def-absolute-galois-group-of-a-field]]

[[thm-hilbert-90-for-finite-galois-extension]]

[J. S. Milne, *Fields and Galois Theory*, Chapter IV, §5](https://www.jmilne.org/math/Books/FT0.pdf)

## Facts & Assumptions

**Given:** $F$, $F_s$, $G_F$, and a continuous cocycle $c$ as in the
Statement.

[F1] $G_F$ is a profinite group whose open normal subgroups correspond to
finite Galois subextensions of $F_s/F$.
([[def-absolute-galois-group-of-a-field]])

[F2] For a finite Galois extension, every multiplicative crossed
homomorphism is a coboundary.
([[thm-hilbert-90-for-finite-galois-extension]])

## Proof

**Proof technique:** reduce a continuous cocycle to one finite Galois
quotient.

**Given:** The data above.

1.1 The image $S=c(G_F)$ is finite because $G_F$ is compact and $F_s^\times$ is discrete. Continuity at the identity gives an open neighborhood $W$ on which $c=1$. Intersect $W$ with the stabilizers of the finitely many elements of $S$, then choose an open normal subgroup $U$ contained in that intersection using [F1]. Thus $c|_U=1$ and $U$ fixes every value of $c$. [F1, given, choose]

2.1 The cocycle identity shows that $c$ is constant on cosets of $U$ and therefore descends to a crossed homomorphism on the finite group $G_F/U=\operatorname{Gal}(L/F)$ with values in $L^\times$, where $L=F_s^U$. By [F2], choose $b\in L^\times$ with $c(g)=g(b)/b$ on the quotient, hence on all of $G_F$. This proves the Statement. [F1, F2, step 1.1, choose] ∎