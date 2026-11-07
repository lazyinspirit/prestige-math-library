---
id: lem-finite-bridge-extension-has-explicit-attaching-word-update
kind: lemma
title: "A finite bridge extension has an explicit meridian attaching-word update"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only finitely many transverse intersections, nested tubes and disk isotopies are used; the compact-source extension supplier is choice-free. No analytic Floer theorem is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Philip Ording, Constructing doubly-pointed Heegaard diagrams compatible with (1,1) knots"
      url: "https://arxiv.org/pdf/1110.5675v1"
      locator: "Section5, Proposition2 and Theorem3, PDF12–14; the finite disk and word argument is supplied locally"
---

## Statement

Let $\Sigma$ be a smooth oriented torus presented by an oriented polygon $P$ whose paired boundary edges have identification $\psi$. Let $t$ be an embedded partial bridge in $\Sigma$ ending at $a$, let $d$ be an embedded extension arc from $a$ to a new point $b$, and suppose $d$ is disjoint from $t$ except at $a$. Let $\gamma$ be an embedded meridian curve disjoint from $t$, transverse to $d$ in finitely many interior points and disjoint from $a,b$. Then a finite sequence of disk-supported isotopies in $\Sigma\setminus t$ changes $\gamma$ to a meridian $\gamma'$ disjoint from $t\cup d$. These isotopies preserve the unpointed meridian class. They are not asserted to fix the new endpoint $b$, or to preserve a marked knot during the extension of the partial bridge.

Suppose in addition that $d$ appears as a proper chord from $a$ to $b$ in $P$, with $b$ in the interior of a paired polygon edge, and the components of $\gamma$ cut along the polygon edges appear as disjoint proper arcs in minimal chord position relative to $d$. Write their oriented endpoint pairs as $(c_j,\psi(c_{j+1}))$, cyclically, and let $(a,b)$ mean the clockwise boundary interval. For the arc crossing $d$ in position $k$, counted from $b$ toward $a$, choose successively smaller positive $\varepsilon_k$. Then its attaching-word replacement is
$$c_j\longmapsto\bigl(c_j,\psi(b-\varepsilon_k),b+\varepsilon_k\bigr)$$
when $c_j\in(a,b)$ and $\psi(c_{j+1})\in(b,a)$; it is
$$c_j\longmapsto\bigl(c_j,\psi(b+\varepsilon_k),b-\varepsilon_k\bigr)$$
in the opposite case, and it is unchanged when the endpoints do not separate $a,b$. Here $b\pm\varepsilon_k$ are nearby points in the clockwise edge coordinate. Thus the move is a finite combinatorial update, including its local strand order. Iterating such moves constructs a meridian disjoint from any supplied finite embedded bridge decomposition. If two supplied bridge shadows on a genus-one Heegaard torus are respectively disjoint from its two meridians, their sufficiently small inward collar pushes give the knot represented by the resulting marked diagram.

## Statement references

[Ording, Section5, Proposition2 and Theorem3](https://arxiv.org/pdf/1110.5675v1)

## Facts & Assumptions

**Given:** Exactly the finite transverse bridge/curve configuration in the Statement; the optional polygon formula additionally assumes its stated chord position.

[F1] [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] extends a smooth isotopy of a compact embedded source to an ambient isotopy, supported in any chosen neighborhood of its track. Its proof uses finite local charts and bumps, with no choice axiom.

## Proof

1.1 Number the intersections with $d$ from $b$ backward toward $a$, as $q_1,\ldots,q_N$. If $N=0$, take the identity. Otherwise straighten a small neighborhood of $d$ to a strip with a rounded cap about $b$. The construction uses a smooth transverse vector field along one compact interval, extended across its two endpoints; the inverse function theorem and compactness give one embedded strip after shrinking its width. Around each $q_k$, transversality supplies a still smaller crossing rectangle in which the relevant arc of $\gamma$ crosses the strip once. Away from these rectangles, the remaining compact parts of $\gamma$ have positive separation from the subarcs of $d$ in question. The suffixes from $q_1$ to $b$ through $q_N$ to $b$ also have positive separation from $t$, since their earliest endpoint is an interior point of $d$ different from $a$. Choose one small width satisfying all these finitely many separation conditions, and then choose strictly decreasing widths $\varepsilon_1>\cdots>\varepsilon_N>0$. [given, construct]

2.1 Process $q_k$ in that order. Take the thin tube of width $\varepsilon_k$ along the suffix from $q_k$ to $b$, capped beyond $b$. The transverse subarc of $\gamma$ at $q_k$ cuts off a disk on its $b$ side. Replace that subarc by the complementary part of this disk boundary, smoothing at its two joins. Its interior contains no unprocessed intersection arc, since all those meet $d$ closer to $a$ than $q_k$. Previously processed arcs follow wider tubes and miss this smaller tube; the separation choices of step 1.1 exclude every other arc. Hence the replacement and its inverse are isotopies across an embedded disk whose interior misses the rest of $\gamma$ and $t$. Such an arc isotopy can be written in disk coordinates by sweeping one chord to a parallel rounded boundary arc, stationary at its ends; extend it by [F1] in a slightly larger disk. It removes the intersection at $q_k$ and introduces none, while retaining a simple curve. After the finite $N$ replacements, the resulting curve $\gamma'$ misses $d$ and $t$ and is isotopic to $\gamma$ in $\Sigma\setminus t$. The swept disk can contain $b$; no isotopy relative to that new endpoint is claimed. [F1, step 1.1, given, construct]

3.1 In the polygon case, a minimal proper arc crosses the chord $d$ precisely when its endpoints lie on opposite boundary intervals $(a,b)$ and $(b,a)$, and then it crosses once: cutting the disk along $d$ gives two disks, and the minimal arc joins them exactly in this case. If its tail is $c_j\in(a,b)$, the detour of step 2.1 first follows that side to $b-\varepsilon_k$, passes across the identified edge to $\psi(b-\varepsilon_k)$, follows the cap in the adjacent polygon neighborhood to $\psi(b+\varepsilon_k)$, crosses back to $b+\varepsilon_k$, and continues on the other side to its old head $\psi(c_{j+1})$. Thus its three new polygon arcs have tails $c_j,\psi(b-\varepsilon_k),b+\varepsilon_k$, exactly the first formula. The opposite orientation interchanges the two sides and gives the second formula. Noncrossing arcs are unchanged. The nested widths from step 1.1 fix the order of every parallel strand; the symbols need not be interpreted as coincident endpoints. This proves the full finite update rather than inferring it from a drawing. [step 1.1, step 2.1, given, construct]

4.1 Iteration over a supplied finite bridge decomposition terminates, since every step has only finitely many intersections and the decomposition has finitely many pieces. Each surface isotopy extends to the adjacent handlebody: extend its velocity to a boundary collar, retain tangency along the boundary, and multiply by a cutoff in the inward collar coordinate. Its flow preserves that boundary and carries a meridian disk to a meridian disk with the new boundary. The finite-chart compact extension proof in [F1] gives the same construction; no pointed equivalence is inferred. For the last assertion, put each supplied bridge shadow into an arbitrarily small inward collar on its designated side, fixing its endpoints. Choose a meridian disk with a straight collar near its boundary and with its remaining interior beyond this smaller collar. Because its boundary misses the corresponding compact bridge shadow, its straight collar misses that shadow's push, and its interior is deeper than the push. Thus the two meridian disks miss the two pushed arcs. Each pushed arc is boundary-parallel by the explicit ruled collar disk joining it to its shadow. Their union is exactly the knot of those shadows pushed into the two sides, which is the stated compatibility of the resulting marked diagram. This is a construction for supplied bridge data, not an identification of any unencoded paper figure. [F1, step 2.1, step 3.1, given, construct] ∎
