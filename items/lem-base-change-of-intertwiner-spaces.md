---
id: lem-base-change-of-intertwiner-spaces
kind: lemma
title: "Base change for intertwiner spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-restriction-and-extension-of-scalars, def-intertwiner-equivalent-and-faithful-representations, def-finite-dimensional-representation-of-a-group-over-a-field]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Theorem 2.2.4"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, proof of Proposition 4.2.8"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Let $E/F$ be a field extension, $G$ a group, and $V,W$ finite-dimensional
$F$-representations of $G$.  The map
$$E\otimes_F\operatorname{Hom}_G(V,W)\longrightarrow\operatorname{Hom}_G(E\otimes_FV,E\otimes_FW),\qquad a\otimes f\longmapsto ((b\otimes v)\mapsto ab\otimes f(v))$$
is an $E$-linear isomorphism.

## Facts & Assumptions

**Given:** $E/F$, $G$, $V$, and $W$ as in the statement.

[L1] Extension of scalars sends an $F$-linear map $f$ to $1_E\otimes f$ ([[def-restriction-and-extension-of-scalars]]).

[L2] An intertwiner is exactly a linear map satisfying $f\rho_V(g)=\rho_W(g)f$ for every $g\in G$ ([[def-intertwiner-equivalent-and-faithful-representations]]).

## Proof

**Proof technique:** direct.

1.1 Choose $F$-bases of $V$ and $W$.  By [L2], $\operatorname{Hom}_G(V,W)$ is the simultaneous kernel in $\operatorname{Hom}_F(V,W)$ of the maps $f\mapsto f\rho_V(g)-\rho_W(g)f$. [L2, choose]

2.1 Tensoring a kernel of maps between finite-dimensional $F$-spaces with the field $E$ preserves that kernel, because tensoring with a field extension is exact.  The simultaneous kernel after tensoring is, by [L2], precisely $\operatorname{Hom}_G(E\otimes_FV,E\otimes_FW)$. [L2, step 1.1]

3.1 The resulting identification sends $a\otimes f$ to the displayed map, which agrees with [L1].  Therefore it is the asserted $E$-linear isomorphism. [L1, step 2.1] ∎
