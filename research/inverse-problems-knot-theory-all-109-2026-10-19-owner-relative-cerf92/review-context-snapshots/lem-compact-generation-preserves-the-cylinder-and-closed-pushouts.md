---
id: lem-compact-generation-preserves-the-cylinder-and-closed-pushouts
kind: lemma
title: Compact generation preserves the cylinder and closed pushouts
deps: ["def-compactly-generated-conventions-for-based-homotopy", "lem-kification-compact-tests-and-finite-constructions", "lem-compact-test-exponential-law-and-products-of-quotients", "lem-weak-hausdorff-diagonals-and-closed-quotients", "thm-quotient-universal-property"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 5 §§1–2 pp.39–40
    - title: N. P. Strickland, The category of CGWH spaces
      url: https://www.math.ksu.edu/~dav/diffeos/StricklandCGHWSpaces.pdf
      locator: Proposition2.35, pp.9–10, full relation formula and continuation visually read; prior proofs supplied by local helpers
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Kification preserves compact Hausdorff test maps and cubical relative homotopy classes. For CGWH $X$, the ordinary cylinder $X\times I$ is CGWH. If $A\hookrightarrow X$ is a closed inclusion of CGWH spaces and $f:A\to Y$ is continuous with $Y$ CGWH, the ordinary pushout $P=X\cup_A Y$ is CGWH; $Y\to P$ is a closed embedding and the pushout square is a pullback. These assertions apply to the cylinder attachments and closed-track, cone and suspension quotients below.

## Facts & Assumptions

[F1] Kification preserves compact tests, cylinders are CG, and closed inclusions remain closed under k-products. [[lem-kification-compact-tests-and-finite-constructions]]

[F2] CGWH quotients are characterized by closed fibre relations, and WH is characterized by a closed k-diagonal. [[lem-weak-hausdorff-diagonals-and-closed-quotients]]

[F3] Products preserve fibrewise quotient maps in CG. [[lem-compact-test-exponential-law-and-products-of-quotients]]

[F4] Quotient descent gives continuous factorizations and composites of quotients. [[thm-quotient-universal-property]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The compact-test and relative-homotopy assertions are F1. Its ordinary cylinder is CG and agrees with the k-product; F2 gives WH of that product. Thus it is CGWH. [F1, F2]

1.2 Put $S=X\amalg Y$, $P=(X\setminus A)\amalg Y$ as a set, and let $q:S\to P$ be identity off $A$ and equal to $f$ on $A$. Give $P$ the quotient topology. In the four clopen pieces of $S\times_k S$, its equivalence relation is respectively $\Delta_X\cup E_f$, $G_f$, $G_f^{\mathrm{op}}$, and $\Delta_Y$, where $E_f=\{(a,a^{\prime}):f(a)=f(a^{\prime})\}$ and $G_f=\{(a,y):f(a)=y\}$. These formulas include every fibre: only points of $A$ are identified with points of $Y$, and two such points are equivalent exactly when their f-values agree. [F1]

2.1 The sets $E_f$ and $G_f$ are inverse images of $\Delta_Y$ in $A\times_k A$ and $A\times_k Y$. They are closed there by F2, hence in the corresponding products with $X$ by F1. The two diagonals are closed. The relation in step 1.2 is therefore closed, and F2 proves $P$ CGWH. Maps from $S$ constant on that relation are precisely compatible maps from $X,Y$, so F4 proves the pushout property in Top and in CGWH. [F1, F2, F4, step 1.2]

3.1 The map $j:Y\to P$ is injective. For closed $F\subseteq Y$, one has $q^{-1}(j(F))=f^{-1}(F)\amalg F$, which is closed in $S$ since $A$ is closed. Hence $j(F)$ is closed in $P$. This proves that $j$ is a closed embedding. Set-theoretically $X\times_P Y$ consists exactly of $(a,f(a))$ for $a\in A$. A continuous compatible pair from any space has X-component landing in the ordinary subspace $A$ and hence factors continuously there. This proves the pullback property. A closed $D\subseteq X$ disjoint from $A$ similarly embeds as a closed subspace, since it and each of its closed subsets are saturated for q. [F4, step 1.2, step 2.1]

4.1 The attaching subspace $X\times\{0\}$ is closed, as are a WH basepoint track and finite unions of such tracks with a cone end. Collapsing any such closed subspace is the preceding pushout with a point. Thus the resulting cylinder, reduced-cylinder, cone and suspension quotients are CGWH. Their quotient products use F3 and retain the fibre coordinate; no whole product subspace is inadvertently collapsed. When $A=\varnothing$, the formula is simply the disjoint union, and when $A=X$, it is $Y$. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
