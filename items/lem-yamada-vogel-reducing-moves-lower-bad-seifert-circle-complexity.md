---
id: lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity
kind: lemma
title: "A reducing move lowers the height by one"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-reducing-arc-and-yamada-vogel-reducing-move,
       def-coherence-of-seifert-circles-and-the-height-of-a-diagram,
       lem-two-disjoint-circles-in-s-two-cobound-an-annulus, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Lemma 2.1, printed pp. 15-16"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1 and Figure 2"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

Assume the Axiom of Choice. If a diagram $D'$ is obtained from an oriented
diagram $D$ by a Yamada-Vogel reducing move, then $h(D')=h(D)-1$.
Consequently every sequence of reducing moves starting at $D$ has length at
most $h(D)$.

## Facts & Assumptions

**Given:** AC, an oriented diagram $D$ with Seifert circles $C_1,\dots,C_m$, a reducing arc $\alpha$ joining an incoherent pair $C_i,C_j$, and the diagram $D'$ obtained by the reducing move along $\alpha$ ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F1] The pair $C_i,C_j$ is incoherent; in the new Seifert picture the two circles are replaced by two coherent circles $C_a,C_z$ joined by two signed arcs of opposite signs, all other circles are unchanged, $C_a$ bounds a disk $D_a$ containing no other Seifert circle of the new picture, and $C_z$ bounds a disk $D_z$ containing all Seifert circles that were contained in the annulus cobounded by $C_i$ and $C_j$ ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F2] Coherence of every pair of Seifert circles is defined through the annulus they cobound; the height is the number of incoherent unordered pairs ([[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]).

[F3] Two disjoint circles cobound an annulus, whose two complementary regions are the two disks bounded by the circles; the three regions determine which third circles lie in the annulus and which in the two disks ([[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]]). AC is inherited from this lemma.

## Proof

**Proof technique:** direct.

1.1 **Partition the unchanged circles.** Let $A$ be the common annulus and let $D_i,D_j$ be its complementary open disks. Each unchanged circle lies entirely in exactly one of these three regions. The reducing strip lies in $A$ and misses every other circle and signed arc. One new boundary surrounds the small empty strip disk $D_a$; the other surrounds the old middle region $A$ after the strip surgery, giving $D_z$. In particular no unchanged circle is in $D_a$. [F1, F3, given, construct]

2.1 **Comparing coherences for a third circle.** For $p\notin\{i,j\}$ with $C_p\subset A$, $C_p$ cannot be essential in $A$, since it would separate the endpoints of the reducing arc. Reading the boundary orientations before and after the strip surgery therefore gives $(C_p,C_z)=(C_p,C_a)=(C_p,C_i)=(C_p,C_j)$: the two new circles are coherent with $C_p$ exactly when the old pair was coherent with $C_p$. For $C_p\subset D_i$ one has $(C_p,C_z)=(C_p,C_i)$ and $(C_p,C_a)=(C_p,C_j)$, and for $C_p\subset D_j$ the two roles are interchanged. These identities follow from the descriptions of $D_a$ and $D_z$ in [F1] and the annulus decomposition of [F3], coherence being the same relation read in the regions of the new picture. [F1, F2, F3, step 1.1, algebra]

3.1 **Counting the incoherent pairs.** By step 2.1 pairs of two unchanged circles keep their coherence. For each unchanged $C_p$, step 2.1 preserves the number of incoherent pairs involving $C_p$ and one of the two replaced circles; the moved pair itself is incoherent in $D$ by [F1] and the new pair $C_a,C_z$ is coherent in $D'$ by [F1]. Hence the number of incoherent unordered pairs drops by exactly one: $h(D')=h(D)-1$. [F1, F2, step 2.1, algebra]

4.1 **Conclusion.** Since each reducing move lowers the height by one and the height is a nonnegative integer, a sequence of $k$ reducing moves from $D$ satisfies $0\le h(D)-k$, so $k\le h(D)$ and the sequence terminates after at most $h(D)$ moves. AC is inherited exactly from [F3]. [F2, step 3.1] ∎
