---
id: def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve
kind: definition
title: "The full-level modular curve and universal elliptic curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Bruin, Modular Curves and Galois Representations"
      url: "https://pub.math.leidenuniv.nl/~bruinpj/Beirut.pdf"
      locator: "§§2.2–2.4, full 17-page notes: the full-level-$M$ moduli problem, its fine representability for M≥3, and compactification."
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§2.1–2.4 and Theorem 4.1, the modular-curve and compactified moduli setup."
---

## Definition

Fix an integer $M\ge3$. A group scheme $E\to S$ means an $S$-scheme with multiplication $\mu:E\times_SE\to E$, identity section $e:S\to E$, and inverse morphism $i:E\to E$ such that for every $S$-scheme $T$ the set $E(T):=\operatorname{Hom}_S(T,E)$ with operations induced by these maps is an associative group with identity $e(T)$ and inverse $i(T)$, naturally in $T$. An elliptic curve over a $\mathbb Q$-scheme $S$ is a smooth proper group scheme of relative dimension one whose geometric fibers are connected curves of genus one. The constant group scheme $(\mathbb Z/M\mathbb Z)^2_S$ is the disjoint union of copies of $S$ indexed by the finite additive group $(\mathbb Z/M\mathbb Z)^2$. Multiplication by $M$ is the $M$-fold sum map $[M]:E\to E$, and $E[M]$ is its kernel group scheme. A **full level-$M$ structure** on $E$ is an isomorphism of group schemes $\alpha:(\mathbb Z/M\mathbb Z)^2_S\xrightarrow{\sim}E[M]$. Define the groupoid $Y(M)(S)$ to have as objects elliptic curves over $S$ with a full level-$M$ structure, and as morphisms isomorphisms of elliptic curves compatible with those structures. The fibered groupoid so defined is the **full-level-$M$ modular moduli problem**; its tautological object is the **universal elliptic curve** $\pi:\mathcal E\to Y(M)$ with its tautological level structure. A representing object for this moduli problem, when supplied, is called the full-level-$M$ modular curve. This definition does not assert its representability, smoothness, or existence of a proper compactification.

## Definition references

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§2.1–2.4](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Bruin, *Modular Curves and Galois Representations*, §§2.2–2.4](https://pub.math.leidenuniv.nl/~bruinpj/Beirut.pdf)
