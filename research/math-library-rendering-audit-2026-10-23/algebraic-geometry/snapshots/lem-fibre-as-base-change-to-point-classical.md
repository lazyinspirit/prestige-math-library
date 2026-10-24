---
id: lem-fibre-as-base-change-to-point-classical
kind: lemma
title: A classical fibre is base change to a point
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-base-change-classical-varieties, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-classical-regular-map-image-and-set-theoretic-fibre, thm-classical-affine-nullstellensatz-correspondence, thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence, thm-classical-affine-morphisms-coordinate-ring-antiequivalence, lem-classical-morphism-inverse-image-of-closed-is-closed, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Example 5.31
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-receipts.jsonl (lem-fibre-as-base-change-to-point-classical). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. For a morphism $f:X\to S$ of classical algebraic prevarieties over an algebraically closed field $k$ and a $k$-point $s\in S$, the pullback $X\times_S\{s\}$ exists in the category of classical algebraic prevarieties (allowing reducible and empty objects), and has underlying set $f^{-1}(s)$. On affine charts $W\subseteq X$ and $V\subseteq S$ with $s\in V$ and $f(W)\subseteq V$, the fibre is cut out by the point ideal $\mathfrak m_s\subseteq k[V]$ and has coordinate ring $k[W]/\sqrt{k[W]f^*(\mathfrak m_s)}$. The same construction is a pullback in the full subcategory of separated classical varieties when $X$ and $S$ are separated.

## Facts & Assumptions

**Given:** AC, a regular map $f:X\to S$ of classical algebraic prevarieties and a $k$-point $s\in S$, with the locally affine conventions of [[def-classical-algebraic-prevariety-regular-maps-and-varieties]].

## Proof

1.1 Points of a classical affine chart over $k$ are closed by the point/maximal-ideal correspondence in [[thm-classical-affine-nullstellensatz-correspondence]], so $\{s\}$ is closed in $S$. Regular maps are continuous by the chart convention and [[lem-classical-morphism-inverse-image-of-closed-is-closed]]. Thus $F=f^{-1}(s)$ is closed in $X$. Every point $x\in F$ has affine charts $W\subseteq X$ and $V\subseteq S$ around $x$ and $s$ with $f(W)\subseteq V$: shrink a source chart within the open preimage of $V$ to a principal affine chart. [given]

2.1 On such charts put $J_W=k[W]f^*(\mathfrak m_s)$ and $F_W=V_W(J_W)$. Its points are exactly $W\cap F$, because the coordinate functions of $V$ distinguish $s$ from every other point. The relative Nullstellensatz [[thm-classical-affine-nullstellensatz-correspondence]] gives $I_W(F_W)=\sqrt{J_W}$, hence $k[F_W]=k[W]/\sqrt{J_W}$. These reduced affine algebraic-set structures agree under restriction on overlaps. On a common principal-open refinement, localization commutes with radicals: $\sqrt{J_W}k[W]_h=\sqrt{J_Wk[W]_h}$; both chart presentations therefore give the same reduced quotient and the same sheaf of locally regular functions on the closed locus. They glue to a classical prevariety structure on $F$, including the empty case. It is quasi-compact because $F$ is closed in the quasi-compact $X$. The inclusion $F\to X$ is regular and its composite with $f$ is constant at $s$. [step 1.1]

3.1 Let $T$ be a classical prevariety with regular map $g:T\to X$ such that $f\circ g$ is constant at $s$. On affine charts of $T$ mapping into a chart $W$ of step 2.1, the pullback $g^*:k[W]\to k[T_0]$ kills $J_W$. The target coordinate ring is reduced, so it also kills $\sqrt{J_W}$. The affine morphism/coordinate-ring correspondence [[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]] factors $g$ uniquely through $F_W$. These local factorizations agree on overlaps because they all have the same underlying map into the closed subspace $F$ and the same pullback of locally regular functions. They glue to a unique regular map $T\to F$. Thus $F$ has the pullback property of [[def-base-change-classical-varieties]], so any previously constructed pullback is canonically isomorphic to it. If $X$ and $S$ are separated, the closed subspace $F\subseteq X$ is separated, proving the last clause. [step 2.1] ∎
