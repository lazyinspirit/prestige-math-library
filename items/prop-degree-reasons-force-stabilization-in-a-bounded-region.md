---
id: prop-degree-reasons-force-stabilization-in-a-bounded-region
kind: proposition
title: Degree reasons force stabilization in a bounded region
deps: ["def-spectral-sequence-stabilization-at-a-bidegree"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

A bounded spectral sequence stabilizes at each bidegree. In particular first- and third-quadrant spectral sequences stabilize pointwise. If the initial support is globally finite, there is a uniform collapse page.

Here regular means eventual vanishing of the outgoing differential at each position, and coregular means eventual vanishing of the incoming differential. These conditions are respectively equivalent to eventual stationarity of the nested cycle and boundary subobjects in the initial page. In the homological convention, bounded below means each diagonal has support bounded below in its first coordinate; bounded above means support bounded above. Boundedness is equivalent to having both bounds. Bounded below implies regular; bounded above implies coregular. The cohomological versions follow by reversing both coordinates, so their named support directions are reversed.

## Facts & Assumptions

**Given:** A homological spectral sequence, with the support bounds specified in each clause; its cohomological translation reverses both coordinates.

[F1] Stabilization means eventual vanishing of both incident differentials; later terms are successive subquotients of the initial page ([[def-spectral-sequence-stabilization-at-a-bidegree]]).

## Proof

**Proof technique:** direct.

1.1 A zero term remains zero after every transition, because a kernel subobject and an image quotient of the zero object are zero. Fix $(p,q)$, n=p+q. Let $S_{n-1}$ and $S_{n+1}$ be the finite sets of first coordinates of nonzero initial terms on the two adjacent diagonals. The outgoing target has first coordinate p-r on diagonal n-1; the incoming source has first coordinate p+r on diagonal n+1. [F1]

1.2 In the recursive representation of [F1], $Z_{r+1}$ is the inverse image of $\ker d^r$ under the epic quotient from $Z_r$, and $B_{r+1}$ is the inverse image of the incoming image. If the outgoing differential is zero, its kernel is the whole page and $Z_{r+1}=Z_r$. Conversely that equality and epic cancellation force the outgoing differential to be zero. If the incoming differential is zero, its image is zero and $B_{r+1}=B_r$. Conversely this equality forces its image to be zero, and therefore the differential to be zero. Applying each equivalence for every $r\ge R$ proves both eventual-stationarity equivalences, in both directions. [F1]

2.1 Choose an integer R≥r₀ greater than each integer in the finite set $\{p-a:a\in S_{n-1}\}\cup\{a-p:a\in S_{n+1}\}$. If this set is empty take R=r₀. For r≥R neither endpoint can be initially nonzero, and step 1.1 makes it zero on page r. Thus both maps vanish, proving stabilization by [F1]. [F1, step 1.1]

2.2 On a fixed diagonal, finite support has an upper and lower integer bound (the empty support admits any bounds). Conversely the integers between two fixed bounds are a finite list, so support with both bounds is finite. For fixed $(p,q)$ a lower bound $a$ on diagonal $n-1$ makes the outgoing endpoint $p-r$ vanish for $r>p-a$. An upper bound $b$ on diagonal $n+1$ makes the incoming endpoint $p+r$ vanish for $r>b-p$. Zero terms persist by step 1.1, proving regularity and coregularity respectively. The substitution $(p,q)\mapsto(-p,-q)$ changes the outgoing degree to $(r,1-r)$ and reverses the support inequalities, proving the cohomological versions. [F1, step 1.1]

3.1 In the first quadrant, a diagonal has $0\le p\le n$ and is empty if n<0; in the third quadrant it has $n\le p\le0$ and is empty if n>0. Both are finite, so step 2.1 applies. With globally finite support, apply step 2.1 to its finitely many positions and take the maximum of those bounds and r₀. Outside that support every term is zero. Thus every differential vanishes from that uniform page onward. Empty global support uses r₀. [step 1.1, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

Regular/coregular conventions and equivalences: [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Definition 12.24.7 and Lemma 12.24.8, translated to increasing homological coordinates; all implications are proved above.
