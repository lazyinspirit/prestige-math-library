---
id: lem-interior-slab-handle-attachment
kind: lemma
title: "Interior slab handle attachment"
status: published
origin: pipeline
dependency_level: 2
deps: [def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, thm-one-critical-point-handle-attachment, prop-simultaneous-attachment-at-a-morse-critical-value, lem-adapted-descending-field-near-a-compact-morse-band, lem-gradient-flow-identifies-the-local-and-global-attaching-regions, thm-regular-interval-diffeomorphism, def-closed-sublevel-and-level-set-of-a-smooth-function, thm-collar-neighborhood-theorem, def-attaching-a-smooth-handle-with-corner-rounding, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, def-countable-choice, lem-local-morse-sublevel-pair-is-a-handle-pair, lem-local-critical-value-lowering-preserves-the-upper-sublevel, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "interior reduction to the boundaryless attachment theorems"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact triad with adapted
$f$ and adapted field $X$ ([[def-morse-function-adapted-to-a-cobordism]]), and
let $0<a<b<1$ be regular values. The band $K=f^{-1}[a,b]$ is compact and
disjoint from $\partial W$. If $K$ contains exactly one critical point, of index
$k$, then $W^b$ is diffeomorphic to $W^a$ with one rounded
$k$-handle attached, and the attaching sphere is the flow-transported boundary
of the unstable disk. If $K$ contains finitely many critical points, all of
index $k$ at one common value, the same conclusion holds with one disjoint
$k$-handle per critical point, and the order of attachment is immaterial. The lower sublevel is respected up to homotopy of pairs, using the common pushed-in lower copy constructed in [F1], Proof 4.1; a diffeomorphism fixing the entire original lower sublevel pointwise is not asserted.

## Facts & Assumptions

[F1] [[thm-one-critical-point-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded.

[F2] [[prop-simultaneous-attachment-at-a-morse-critical-value]]: Assume $\mathrm{AC}_\omega$. Let $f$ be smooth on a boundaryless manifold and let $a<b$ be regular values. Suppose the closed band is compact and its critical points are finitely many nondegenerate points $p_1,\dots,p_m$, all at the same value $c\in(a,b)$. Then $M^b$ is obtained from $M^a$, up to diffeomorphism and corner rounding, by attaching disjoint handles of indices $\operatorname{ind}(p_j)$. If $m=0$, no handles are attached and the regular-band conclusion applies.

[F3] [[lem-gradient-flow-identifies-the-local-and-global-attaching-regions]]: Assume $\mathrm{AC}_\omega$. Let $f^{-1}([a,b])$ be compact, with regular endpoints and exactly one critical point $p$, nondegenerate of index $k$, with value $c=f(p)$. For the local Morse attaching embedding on $M_{c-\varepsilon}$, where $a<c-\varepsilon<c$, descending flow transports its entire thickening to $M_a$ as an embedded framed attaching region, provided there is no intervening critical value.

[F4] [[def-closed-sublevel-and-level-set-of-a-smooth-function]]: Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $n$-manifold. Write $M^a=f^{-1}((-\infty,a])$, $M_a=f^{-1}(\{a\})$, and $f^{-1}([a,b])$ for the closed band. Both endpoints are included; a regular value may have empty fiber.

[F5] [[def-morse-function-adapted-to-a-cobordism]]: An adapted pair $(f,X)$ on a triad consists of an adapted Morse function and a complete downward gradient-like field pointing outward along $M_0$ and inward along $M_1$, with no critical point in a fixed collar of $\partial W$.

[F6] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: For fixed attaching and product-collar data, two compatible smooth roundings of a handle attachment are diffeomorphic by an isotopy supported in that collar, the identity outside the collar.

[F8] [[lem-local-morse-sublevel-pair-is-a-handle-pair]] and [[lem-local-critical-value-lowering-preserves-the-upper-sublevel]] construct the local product handle by a modification compactly supported in its Morse chart, followed by a compact regular modified-function band.

[F9] [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]] supplies a complete normalized field with compact support near a compact regular band. Its support can be confined to a prescribed relatively compact open neighbourhood of that band: the construction multiplies the normalized gradient by a smooth cutoff equal to one near the band.

[A1] The interior $\operatorname{int}W$ is a boundaryless smooth $n$-manifold, and $f$ restricts to a smooth function on it with the same critical points, all interior; the band $K=f^{-1}[a,b]$ is a compact subset of $\operatorname{int}W$ because $K$ is disjoint from $\partial W$ by [F5].

## Proof

**Given:** The adapted pair $(f,X)$ on the compact triad and regular values $0<a<b<1$.

1.1 Since $f$ has boundary values zero and one while $0<a<b<1$, the band $K=f^{-1}[a,b]$ is a compact subset of $\operatorname{int}W$; in particular $W^a$ contains a collar neighbourhood of $M_0$ and misses a neighbourhood of $M_1$ and the closure of $W^b\setminus W^a$ lies in the compact interior band $K$. [A1, F4, F5, algebra]

2.1 Suppose $K$ contains exactly one critical point $p$ of index $k$, and put $c=f(p)$. Choose $\eta>0$ and a Morse chart with compact closure in $f^{-1}(a,b)$, small enough for [F8] and with $a<c-\eta<c+\eta<b$. The local construction of [F8] attaches the product handle, changes the function only in this chart, and compares the rounded local attachment with the modified lower sublevel by a chart-supported isotopy. Its complementary modified-function band is regular and compact and lies in $\operatorname{int}W$. Use [F9] with support in a relatively compact interior neighbourhood of this band, and absorb the resulting product collar by a smooth increasing collar-interval map equal to the identity at its inner edge. For the original regular outer bands from $a$ to $c-\eta$ and from $c+\eta$ to $b$, use [F9] again, with cutoffs supported in small interior neighbourhoods of those bands, to transport attaching data and absorb the outer collars. Every chart, cutoff, and collar adjustment is thereby supported in a finite union of compact subsets of $\operatorname{int}W$. Each map is the identity near the complement of this union, so it extends smoothly by the identity over a neighbourhood of $M_0$. This constructs $W^b\cong W^a\cup h^k$ fixing $M_0$; it establishes the support property rather than inferring it from the abstract diffeomorphism type in [F1]. [A1, F1, F8, F9, step 1.1, construct]

3.1 The attaching sphere is the flow-transported boundary of the unstable disk: the local model at $p$ is the one considered in [F3], which identifies the local Morse attaching embedding on the lower regular level and transports its thickening to $W^a$ by the descending flow of $X$, with no intervening critical value because $p$ is the only critical point of the band. [F1, F3, step 2.1]

3.2 For finitely many critical points of common value $c$ and index $k$, choose disjoint Morse charts with compact closure in $f^{-1}(a,b)$ and one $\eta$ valid for all of them. Perform the compact local modifications and handle constructions of [F8] simultaneously. As in [F2], the modified regular complementary band preserves the common upper sublevel and has no remaining critical point. Its cutoff normalized field, the fields on the two original outer regular bands, and every absorbing interval map may be chosen inside the compact interior neighbourhoods used in step 2.1. Thus their comparisons extend by the identity near $M_0$, producing the asserted simultaneous disjoint attachments on $W$. If there are no critical points, only the original regular-band collar is needed. [A1, F2, F8, F9, step 1.1, step 2.1, construct]

4.1 The disjoint attaching regions give commuting quotient attachments, and [F6] compares their compatible roundings by disjoint collar-supported isotopies. Thus the order is immaterial. For the pair assertion choose a regular $a_-<a$, with $a_->0$, below the lower collar adjustments and with no critical value in $[a_-,a]$. The collar compression of $W^a$ onto $A_0=W^{a_-}$ is fixed near $M_0$ and is a deformation retraction; in the attachment model compress its lower-stage collar to the same copy $A_0$. The above comparisons are the identity on $A_0$, so the two lower-stage inclusions agree after these collar homotopies, giving the homotopy-of-pairs assertion. This does not identify the whole original lower boundary pointwise with the attachment seam. [F1, F2, F6, F9, step 2.1, step 3.1, step 3.2, construct, algebra] ∎