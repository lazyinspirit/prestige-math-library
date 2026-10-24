---
id: prop-h-cobordisms-admit-adapted-ordered-handle-decompositions
kind: proposition
title: h-Cobordisms admit adapted ordered handle decompositions
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps:
- def-h-cobordism
- thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
- thm-morse-rearrangement-by-index
- thm-self-indexing-morse-function-existence
- lem-handles-of-equal-index-can-be-attached-on-one-level
- def-morse-function-adapted-to-a-cobordism
- def-handle-decomposition-relative-to-the-incoming-boundary
- def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §4 rearrangement and §5 self-indexing, printed pp. 37--66
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a
compact h-cobordism with $\dim W=n+1$ ([[def-h-cobordism]]). Then there are an
adapted complete downward gradient-like field $X$ for a Morse function $f$ on
$W$ and an adapted Morse function $g$, equal to $f$ near $\partial W$ and with
the same critical points and indices, whose critical levels are strictly
ordered by index: all critical points of a given index $k$ lie at one common
level $c_k$, and $c_0<\dots<c_{n+1}$
([[def-morse-function-adapted-to-a-cobordism]]). Consequently $W$ admits a
handle decomposition relative to $M_0$ in which all $k$-handles are attached at
the single level $c_k$, before all handles of index $k+1$, with one handle of
index $k$ for each index-$k$ critical point
([[def-handle-decomposition-relative-to-the-incoming-boundary]]); in particular
no handle is attached before all lower-index handles, and the fixed boundary
collars contain no handle. This holds in every dimension and without any simple
connectivity hypothesis.

## Facts & Assumptions

**Given:** A compact h-cobordism $(W;M_0,M_1)$ with $\dim W=n+1$; $\mathrm{AC}_\omega$.

[F1] Under $\mathrm{AC}_\omega$, every compact collared triad admits an adapted excellent Morse function $f$ and an adapted complete downward gradient-like field $X$, both agreeing with the product model near the faces in the fixed collars; complete means extendible to a complete field on a boundaryless collar extension ([[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]], [[def-morse-function-adapted-to-a-cobordism]]).

[F2] Adaptedness means in particular that $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, every critical point is interior and nondegenerate, and a fixed collar of $\partial W$ contains no critical point ([[def-morse-function-adapted-to-a-cobordism]]).

[F3] Given an adapted excellent Morse function and field on a compact triad, there are an adapted complete downward gradient-like field $X'$ and an adapted excellent Morse function $g$, with the same critical points and indices as $f$, equal to $f$ plus a constant near each critical point and equal to $f$ near $\partial W$, with $g(p)<g(q)$ whenever $\operatorname{ind}(p)<\operatorname{ind}(q)$ ([[thm-morse-rearrangement-by-index]]).

[F4] Given an adapted excellent Morse function and field on a compact triad, there are an adapted complete downward gradient-like field $X'$ and an adapted Morse function $g$ with the same critical points and indices, equal to $f$ near $\partial W$, such that all critical points of a given index $k$ lie at one common level and the common levels increase strictly with $k$; consequently all index-$k$ handles are attached at the single level of index $k$, before all handles of index $k+1$ ([[thm-self-indexing-morse-function-existence]]).

[F6] If the critical points of index $k$ all lie at one interior level $c\in(0,1)$, with no critical point of another index at that level and no other critical value near it, the sublevel just above is obtained from the sublevel just below by attaching disjoint $k$-handles, one per critical point; handles of equal index may be regarded as attached simultaneously or successively, and the result is independent of the order ([[lem-handles-of-equal-index-can-be-attached-on-one-level]]).

[F7] A finite handle decomposition of a triad relative to $M_0$ is given by an ordered list of handles attached to the collar of $M_0$ with corners rounded, and its handle list and attachment levels record exactly which handles are attached before which ([[def-handle-decomposition-relative-to-the-incoming-boundary]]).

[F8] Countable choice $\mathrm{AC}_\omega$ is the countable-family choice principle used by the adapted-field, generic Morse and collar suppliers ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the collared triad $(W;M_0,M_1)$, which is compact by the definition of an h-cobordism, to get an adapted excellent Morse function $f$ and an adapted complete downward gradient-like field $X$ agreeing with the product model on the fixed collars, so that by [F2] the faces are the level sets $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$ and the boundary collars contain no critical point. [F1, F2, given]

2.1 Apply the rearrangement theorem [F3] to $(f,X)$ to obtain an adapted field for an excellent function whose critical levels are ordered by index, and then apply the self-indexing theorem [F4] to that excellent pair to put all critical points of index $k$ at one common level $c_k$ with $c_0<\dots<c_{n+1}$; the modification is supported near the finitely many critical levels, so the boundary product model on the fixed collars is preserved, and compact interior field modifications preserve collar-extension completeness: extend the change by zero to the complete carrier and apply the compact-support construction of [F1]. Retain the original pair $(f,X)$ from step 1.1 for the statement’s first clause; the self-indexed function has its own adapted field. No assertion that the final field descends for the original $f$ is needed. The countable choice principle is inherited from [F1]–[F4] and [F8]. [F3, F4, F8, given, step 1.1]

3.1 Apply [F6] to a small regular-endpoint band around each occupied critical level $c_k$ of the self-indexed function. Its critical points all have index $k$, and no other critical value lies in the band, so crossing it attaches disjoint $k$-handles, one per critical point. Concatenate these successive sublevel attachments in increasing order of $k$; [F4] supplies the resulting decomposition of the whole triad, and [F6] permits any order within each disjoint family. By [F7] this is a handle decomposition relative to $M_0$ with the stated handle list and level structure. The fixed boundary collars contain no critical point by [F2], so contain no handle. [F2, F4, F6, F7, step 2.1]

4.1 Therefore every compact h-cobordism admits an adapted field and a Morse function whose critical levels are strictly ordered by index, together with the resulting handle decomposition relative to $M_0$ with all $k$-handles attached at one level before all $(k+1)$-handles and one handle per critical point. No simple connectivity of the faces or of $W$ and no dimension restriction beyond $\dim W=n+1$ was used, since the suppliers [F1], [F3], [F4], [F6] hold for arbitrary compact triads. [F1, F3, F4, F6, given, step 3.1] ∎
