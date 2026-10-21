---
id: thm-seifert-zero-framing-and-framing-integer
kind: theorem
title: "A Seifert framing has zero self-linking"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-collar-neighborhood-theorem
  - def-smooth-collar-of-a-manifold-boundary
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - def-the-standard-smooth-step-function
  - def-oriented-seifert-surface
  - thm-oriented-knot-framing-classes-form-z-torsor
  - def-framed-knot-self-linking-and-seifert-framing
  - lem-framed-knot-push-off-self-linking-well-defined
  - thm-linking-number-equals-signed-intersection
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §3.3, pp.26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Linking number as signed intersection with a spanning surface"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6, §§3, 5–6, pp.5–9 and 15–18"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "Seifert zero framing, self-linking as a push-off linking number, and framing classes via SO(2)"
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot and let $F\subset S^3$ be a connected compact smooth oriented embedded surface whose oriented boundary is $K$. The normal framing along $K$ given by the inward unit conormal to $K$ in $F$ has self-linking number zero. Here self-linking is the linking number of $K$ with a sufficiently small disjoint push-off along that framing. In the framing-class parameterization by relative winding from the surface framing, this class has integer zero.

## Statement references

[[def-framed-knot-self-linking-and-seifert-framing|Framings, self-linking by a small push-off, and the Seifert framing]]

[[thm-oriented-knot-framing-classes-form-z-torsor|Framing classes parameterized by relative winding]]

[[thm-linking-number-equals-signed-intersection|Linking number as signed intersection with a spanning surface under the Axiom of Choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a smooth oriented knot $K\subset S^3$, and a connected compact smooth oriented embedded surface $F$ whose oriented boundary is $K$.

[A1] The Axiom of Choice implies the Axiom of Countable Choice through dependent choice. ([[def-axiom-of-choice]]) ([[thm-choice-implies-dependent-implies-countable-choice]])

[F1] A Seifert surface is a connected compact smooth oriented embedded surface whose oriented boundary is the specified knot; its genus formula assumes $\mathrm{AC}_\omega$. ([[def-oriented-seifert-surface]])

[F2] For a knot with a supplied oriented spanning surface, the inward unit surface conormal is a reference normal framing, and relative winding identifies its framing class with zero. ([[thm-oriented-knot-framing-classes-form-z-torsor]])

[F3] Under $\mathrm{AC}_\omega$, the inward unit conormal defines the Seifert framing; its self-linking is the linking number with a sufficiently small push-off along that section. ([[def-framed-knot-self-linking-and-seifert-framing]])

[F4] For any normalized tubular-neighbourhood chart and sufficiently small radius, the push-off is embedded and its linking number is independent of the radius, the representative nowhere-zero normal section, and the normalized chart; hence it depends only on the framing class. ([[lem-framed-knot-push-off-self-linking-well-defined]])

[F5] For disjoint oriented circles $J,K$ and an oriented spanning surface $\Sigma$ with $\partial\Sigma=K$, if $J$ is transverse to $\Sigma$ and $D$ is a regular oriented diagram of $J\cup K$, the diagram linking number equals the signed intersection number $J\cdot\Sigma$. The theorem assumes the Axiom of Choice. ([[thm-linking-number-equals-signed-intersection]])

[F6] Under $\mathrm{AC}_\omega$, every oriented link in $\mathbb R^3$ has a dense set of directions giving a regular diagram with finitely many crossings. ([[lem-every-oriented-link-admits-a-regular-projection]])

[F7] A regular oriented diagram is a projection with only finitely many transverse double points and no triple points. ([[def-regular-oriented-link-diagram]])

[F8] A smooth manifold with boundary has a smooth collar under $\mathrm{AC}_\omega$; a collar is a smooth embedding of the boundary times a half-interval, equal to the boundary inclusion at zero and onto an open boundary neighbourhood. ([[thm-collar-neighborhood-theorem]]) ([[def-smooth-collar-of-a-manifold-boundary]])

[F9] A tubular chart exists under $\mathrm{AC}_\omega$. It may be normalized as in [F4]: its vertical derivative induces a smooth fibrewise isomorphism $B$ to the normal quotient, and precomposing the chart by $B^{-1}$ makes that identification the identity. A smooth isotopy of a compact boundaryless embedded source, stationary near its parameter endpoints, extends to an ambient isotopy; linking number is unchanged under ambient isotopy of oriented two-component links. ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]) ([[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]]) ([[lem-linking-number-even-sum-and-reidemeister-invariance]])

[F10] The standard smooth step function $\sigma$ is smooth, is zero for arguments at most zero, and is one for arguments at least one. ([[def-the-standard-smooth-step-function]])

## Proof

1.1 By [A1], the $\mathrm{AC}_\omega$ hypotheses in [F1], [F3], and [F6] hold. The given $F$ is a Seifert surface by [F1]. Use its inward unit conormal as the reference normal field. By [F2], this Seifert framing has relative winding integer zero. [given, A1, F1, F2]

1.2 Let $s$ be the inward unit conormal, viewed in the round-metric normal bundle. By [F8], choose a smooth collar $c:K\times[0,\varepsilon_0)\to F$ and orient its levels by the original $K$. For sufficiently small $\delta>0$, set $J_0=c(K,\delta)$. It is embedded, lies in $\operatorname{int}F$, and is disjoint from $K$. No prescribed collar velocity is assumed: since $c$ is an embedding onto a boundary neighbourhood, $\partial_t c(p,0)$ is inward transverse to $K$ in $F$. Its normal quotient is therefore $a(p)s(p)$ for a smooth function $a(p)>0$; a tangential component is allowed. [given, F8, construct]

2.1 Use a normalized tubular chart $\Phi$ of $K$ as in [F4] and [F9], and write $\Phi^{-1}(c(p,t))=(b_t(p),v_t(p))$, with $v_t(p)$ in the normal fibre over $b_t(p)$. Compactness permits one small interval of $t$ on which these expressions are defined for every $p$. At $t=0$ they are $(p,0)$, and normalization identifies the vertical derivative with $a(p)s(p)$. The maps $b_t$ are $C^1$-close to the identity. In a smooth oriented circle coordinate their lifts have the form $u+r_t(u)$ with $r_t$ periodic and $\|r_t'\|_\infty<1/2$ for small $t$; thus the lifts are increasing degree-one diffeomorphisms. Hence each $b_t$ is an orientation-preserving diffeomorphism. Reparametrize the level over $x=b_t(p)$, obtaining a smooth normal section $w_t(x)=v_t(b_t^{-1}(x))$. Taylor expansion in finitely many bundle charts gives, uniformly on $K$, $w_t(x)=t a(x)s(x)+O(t^2)$. Because $a$ has positive minimum and $s$ is unit, after decreasing $\delta$ this implies $\langle w_\delta(x),s(x)\rangle>0$ for every $x$. [given, F4, F9, step 1.2, construct, algebra]

2.2 Since $F$ is a compact embedded surface, it is closed and has empty interior in $S^3$; hence its complement contains a point $q$. Choose an orientation-preserving stereographic chart from $q$. It places $K\cup J_0$ and $F$ in $\mathbb R^3$. Let $F_0$ be the closure in $F$ of the complement of the open boundary collar $c(K\times[0,\delta))$. Then $F_0$ is compact, is disjoint from $K$, and has boundary set $J_0$. Give $F_0$ its orientation inherited from $F$; at its new boundary the outward collar-normal points back toward $K$, so the induced boundary orientation is the transported orientation of $J_0$, parallel to $K$. Apply [F6] and [F7] to choose a regular oriented diagram $D$ of $K\cup J_0$, with the projection-plane orientation induced from $S^3$. [given, F6, F7, step 1.2, construct]

3.1 For $0\le u\le1$, interpolate in each normal fibre by $z_u(x)=(1-\chi(u))w_\delta(x)+\chi(u)\delta s(x)$, where $\chi(u)=\sigma(3u-1)$ is the plateau from [F10]. Every $z_u$ has positive pairing with $s$, so it never meets the zero section. Uniformly these vectors have norm $O(\delta)$; a common disk bundle about the compact zero section lies in the tubular domain, so all interpolating graphs lie in that domain when $\delta$ is small. Each graph projects identically to $K$, hence is an embedded circle, and $\Phi$ carries it to an embedded circle disjoint from $K$. With $K$ as the fixed first component this is a smooth two-component link isotopy, stationary near its parameter endpoints, from $K\cup J_0$ to $K\cup\Phi(\delta s)$. The orientation on $J_0$ agrees with the graph orientation because $b_\delta$ preserves orientation. By [F9] the family extends to an ambient isotopy and its linking number is unchanged. The endpoint $\Phi(\delta s)$ is exactly a sufficiently small normalized-chart push-off in [F3]–[F4]. Consequently the self-linking in the statement equals $\operatorname{lk}(K,J_0)$, without identifying the collar level literally with a chart graph of $\delta s$. [A1, F3, F4, F9, F10, step 1.2, step 2.1, construct]

3.2 Apply [F5] with its first component $J$ equal to the original knot $K$, its second (boundary) component equal to $J_0$, and the oriented spanning surface $\Sigma=F_0$. The curve $K$ is disjoint from $F_0$, so it is transverse to $F_0$ with empty intersection and has signed intersection number zero. Thus [F5] gives $\operatorname{lk}_D(K,J_0)=\operatorname{lk}(K,J_0)=0$. This computes the linking number in the same order as the self-linking convention. The Axiom of Choice is the hypothesis used by [F5]; [A1] supplies the countable-choice hypotheses of the other cited suppliers. [A1, F5, step 2.2, algebra]

4.1 By [F3] and step 3.1, $\operatorname{lk}(K,J_0)$ is the self-linking of the Seifert framing; step 3.2 makes it zero. Step 1.1 gives relative framing integer zero. [F2, F3, F4, step 1.1, step 3.1, step 3.2, algebra] ∎

