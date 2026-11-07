---
id: lem-prime-alternating-diagram-forces-two-point-link-indecomposability
kind: lemma
title: "A prime alternating diagram forces two-point link indecomposability"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-reduced-alternating-link-diagram
  - lem-connected-alternating-link-is-nonsplit
  - lem-smooth-link-roundings-admit-the-cornered-bubble-normalization
  - lem-alternating-bubble-standard-words-exclude-a-single-saddle-block
  - lem-bubble-disk-pieces-satisfy-the-sphere-euler-count
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the smooth-model normalization, the surface Jordan-disk supplier and smooth Schoenflies. The word and Euler counts are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Theorem 1(b), printed pp.37 and 41–42"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $D$ be a connected alternating regular link diagram with at least one crossing, and assume that every simple closed curve on its projection sphere transverse to $D$ in exactly two noncrossing points has a complementary disk containing no crossings. Then, for the represented smooth link $L$, every smooth sphere transverse to $L$ in exactly two points has a ball side containing no closed link component and a single boundary-parallel proper link arc. Here boundary-parallel means that the arc and an arc on the sphere cobound an embedded disk, with its natural endpoint corners, whose interior lies in that ball. Thus no two-point sphere decomposes $L$ into two nontrivial one-string ball tangles. Component orientations and any supplied labels are retained.

## Statement references

[[def-countable-choice]]

[[def-reduced-alternating-link-diagram]]

## Facts & Assumptions

**Given:** Countable choice, the connected alternating diagram with a crossing and the stated two-point diagram-primeness condition.

[F1] A connected alternating diagram represents a nonsplit link. ([[lem-connected-alternating-link-is-nonsplit]])

[F2] A nontrivial two-point decomposition of a nonsplit represented smooth link supplies an ambient-isotopic smooth realization $L'$ and a smooth sphere $T$ with nontrivial sides, disjoint from fixed endpoint adapters, in the reference crossing-ball bubble normalization. Its open-side pieces are disks, its words are nonempty and its curves repeat no bubble. The reference cornered link agrees with $L'$ outside the adapters, which $T$ avoids. ([[lem-smooth-link-roundings-admit-the-cornered-bubble-normalization]])

[F3] On a connected alternating diagram every bubble-standard ordered-model word has at least two puncture letters. ([[lem-alternating-bubble-standard-words-exclude-a-single-saddle-block]])

[F4] For a sphere with $u$ upper disks, $\ell$ lower disks and $s$ quadrilateral saddles in its reference face decomposition, $u+\ell-s=2$. ([[lem-bubble-disk-pieces-satisfy-the-sphere-euler-count]])

[F5] Smooth spheres in $S^3$ have ball sides. A circle on a sphere bounds its two disk regions, and a proper arc cuts a disk into disk regions after the compatible corner rounding; a linear nullhomotopy in a stereographic chart gives the surface disk criterion. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 By [F1] the link is nonsplit. Suppose there were a two-point sphere whose two side tangles were nontrivial, allowing closed components. Apply [F2] to obtain the smooth link $L'$ and normalized sphere $T$, with its reference projection sphere $P$, crossing balls and adapter balls. Both actual link punctures lie on the common projection face, outside the crossing and adapter balls, so every puncture is counted once in the upper words and once in the lower words. Each total puncture count is therefore two. [given, F1, F2, construct]

2.1 Every upper word has at least two punctures by [F3], and at least one upper circle exists because there are two punctures. Thus there is exactly one upper circle. The same reasoning gives exactly one lower circle. Since all open-side pieces are disks by [F2], each has one boundary circle, and every cut circle is incident to precisely one such disk. Hence $u=\ell=1$. The reference corner charts give the three-sector disk gluing required in [F4], so its equation yields $s=0$. [step 1.1, F2, F3, F4, algebra]

3.1 The sphere now misses every crossing ball and adapter ball. On their complement the two shifted spheres agree with $P$, so their single intersection circle is the same smooth circle $C=T\cap P$. It is transverse to the represented diagram in exactly the two punctures, both noncrossing points, and avoids every crossing disk. The hypothesis on $D$ supplies a closed complementary disk $\Delta\subset P$ containing no crossing. Its diagram portion is exactly one embedded proper arc. Indeed there are exactly two boundary endpoints, no vertex inside and no intersection among strands there. Any additional circle would be an entire component of the projection disjoint from the rest, contrary to connectedness of $D$ and the presence of the two-point arc. [given, step 1.1, step 2.1, construct]

4.1 The interior of $\Delta$ lies in one ball side $U$ of $T$, by [F5]. The other disk of $P\setminus C$ lies on the opposite side: transversality along $C$ puts the two local projection sides in opposite components of $S^3\setminus T$, and connectedness keeps each disk on that side. Every crossing ball is disjoint from $T$ and contains its projected crossing in the other projection disk, since $\Delta$ has no crossings and $C$ misses the whole crossing balls. Each connected crossing ball therefore lies on the opposite ball side from $U$. Its endpoint adapters do too: each is connected, disjoint from $T$, and meets its crossing ball. Thus all departures of $L'$ from the common projection face lie outside $U$. [step 2.1, step 3.1, F2, F5, construct]

5.1 Consequently $L'\cap U$ is precisely the one proper arc in $\Delta$ from step 3.1, with no closed components. That arc cuts $\Delta$ into disks by [F5]. Choose either one. Its boundary is the link arc together with an arc of $C\subset T$, and its interior lies in $\operatorname{int}U$, since $T\cap P=C$. The disk is smooth on its faces and has the compatible quarter-disk corners at its two endpoints required of a boundary-parallelism disk. Thus this side tangle is trivial, contradicting the two nontrivial sides of $T$ in [F2]. No such nontrivial two-point decomposition exists. [step 3.1, step 4.1, F2, F5, construct, contradiction]

6.1 For any sphere meeting a closed link twice, its two crossings belong to one component and divide that component into one proper arc on either side; every other component stays on a single side. This follows by successive changes of ball side, using [F5]. If neither one-string side tangle were trivial, both would be nontrivial, which step 5.1 ruled out. Hence every such sphere has the stated trivial side. Ambient isotopy from $L$ to $L'$ transports spheres, ball sides and bridge disks, so the conclusion applies to the original smooth link. All these isotopies transport component orientations and labels. [step 1.1, step 5.1, F2, F5, construct] ∎
