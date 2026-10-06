---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-16.md
      - research/frontier-38-owner-30-dispatch/reader-reader-16.result.json
      - research/frontier-38-owner-30-step5-hash-16-post-5a.json
id: lem-fork-detection-transports-to-arbitrary-boundary-crosscuts
kind: lemma
title: Fork detection transports to arbitrary boundary crosscuts
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-the-fork-noodle-pairing-detects-essential-intersections, lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant, def-axiom-of-choice]
justified_by: []
aliases: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, JAMS 14 (2001) 471–486; local boundary transport derived here"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Lemma2.3, Lemma3.2, printed pp.477–481: closed replacement and original fixed-endpoint detection; the arbitrary-endpoint collar adaptation is proved here"
---

## Statement

Assume AC. Let $F$ be a fork with compact absolute replacement $c_F$, and let $M$ be any simple proper crosscut of $D\setminus P$ with two distinct endpoints on $\partial D$. Choose the closing neighborhoods of $c_F$ disjoint from $M$. Its triangle of unordered pairs defines an end-stable boundary-relative class $y_M$, with any chosen lift. Then
$$\langle c_F,y_M\rangle=0\quad\Longleftrightarrow\quad T(F)\text{ is isotopic relative to }P\cup\partial D\text{ to an arc disjoint from }M.$$
Here the pairing has an absolute first argument and an end-stable boundary-relative second argument. No pairing of two end-relative classes is asserted.

## Facts & Assumptions

**Given:** the LKB cover and Laurent ring $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$, the fork, its compact absolute replacement, and the crosscut; the replacement is chosen using closing neighborhoods disjoint from the compact image of $M$, which avoids all punctures.

[F1] [[lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement]] supplies $c_F$, supported away from the outer boundary and using closing neighborhoods disjoint from $M$, representing $\Delta_F$ times the fork class, where $\Delta_F=(1-q)^2(1+qt)\ne0$.

[F2] [[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]] supplies the exact absolute/end-stable pairing, finite-chain naturality, and the identity $\langle c_F,y_N\rangle=\Delta_F\langle N,F\rangle$. The Laurent ring is an integral domain.

[F3] [[lem-the-fork-noodle-pairing-detects-essential-intersections]] gives zero detection for the original fixed-boundary-endpoint noodle.

## Proof

1.1 First choose the closing neighborhoods small enough to miss $M$; this is possible because its compact image misses $P$. Choose $r_0<1$ enclosing $P$, the filled tine, the chosen closed closing neighborhoods, and the projection of the compact support of $c_F$; all are compact in the interior of $D$. Write the two source boundary angles in positive cyclic order and likewise the two target angles of $M$; choose the ordering of the target endpoints accordingly. There is an increasing piecewise linear lift $f:\mathbb R\to\mathbb R$ with $f(\theta+2\pi)=f(\theta)+2\pi$ taking the two source angles to those targets. Interpolate $f_s=(1-s)\operatorname{id}+sf$. For a radial cutoff $\chi$ equal to zero on $r\le r_0$ and one at $r=1$, set $h_s(re^{\mathrm i\theta})=r\exp(\mathrm i[(1-\chi(r))\theta+\chi(r)f_s(\theta)])$. The angular maps are strictly increasing degree-one homeomorphisms; their inverses vary continuously by compactness. Thus $h_s$ is a filled-disk isotopy, identity on $r\le r_0$, carrying the source endpoint pair to the target pair. Its configuration-space isotopy lifts from the identity, commutes with every deck transformation by uniqueness of lifts, and fixes $c_F$ pointwise since every track on its support is constant. [F1, given, construct]

2.1 The crosscut $h_1^{-1}M$ is an original noodle with endpoints $d_1,d_2$. The closing neighborhoods are fixed by $h_s$, hence also miss $h_1^{-1}M$. Its triangle class exists by the same parameter-gap truncation as any noodle: truncate $0\le u<v\le1$ by $v-u\ge\delta$, with the new edge in a collision neighborhood by uniform continuity. Transport this class by the lifted isotopy to obtain $y_M$. An arbitrary choice of its lift differs by a deck monomial unit. The finite intersection naturality in [F2] and step 1.1 give $$\langle c_F,y_M\rangle=u\langle c_F,y_{h_1^{-1}M}\rangle=u\Delta_F\langle h_1^{-1}M,F\rangle,$$ for a Laurent monomial unit $u$. Hence vanishing is equivalent to the last diagram polynomial vanishing, since $u\Delta_F\ne0$. By [F3] this means that the tine can be isotoped off $h_1^{-1}M$. Conjugate that isotopy by $h_1$: it still fixes $P$ and fixes the outer boundary pointwise at every time, while $h_1$ fixes the tine. This is exactly disjoinability from $M$. The inverse conjugation proves the reverse implication. [F2, F3, step 1.1, construct] ∎
