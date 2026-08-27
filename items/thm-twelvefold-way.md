---
id: thm-twelvefold-way
kind: theorem
title: "The twelvefold way"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-twelvefold-way-ball-box-conventions,
       thm-cardinality-of-a-set-of-functions,
       thm-number-of-injections,
       thm-number-of-bijections-of-a-finite-set,
       thm-stars-and-bars,
       cor-compositions-with-k-parts-are-counted-by-binomial-coefficients,
       def-stirling-second-kind-and-bell-number,
       thm-stirling-second-kind-inclusion-exclusion-formula,
       thm-unlabelled-unlabelled-placement-counts]
justified_by: []
aliases: []
landmark: true
proof_strategy: classification
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Alexander Hulpke, Combinatorics notes"
      url: "https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

Fix positive integers $n$ and $k$. Then the twelve standard ball-box counts are:

1. labelled balls to labelled boxes, arbitrary: $k^n$;
2. labelled balls to labelled boxes, injective: $k^{\underline n}$;
3. labelled balls to labelled boxes, surjective: $k!\,S(n,k)$;
4. unlabelled balls to labelled boxes, arbitrary: $\binom{n+k-1}{k-1}$;
5. unlabelled balls to labelled boxes, injective: $\binom{k}{n}$;
6. unlabelled balls to labelled boxes, surjective: $\binom{n-1}{k-1}$;
7. labelled balls to unlabelled boxes, arbitrary: $\sum_{j=1}^{\min(n,k)} S(n,j)$;
8. labelled balls to unlabelled boxes, injective: $1$ if $n \le k$, otherwise $0$;
9. labelled balls to unlabelled boxes, surjective: $S(n,k)$;
10. unlabelled balls to unlabelled boxes, arbitrary: the number of partitions of $n$ with at most $k$ parts;
11. unlabelled balls to unlabelled boxes, injective: $1$ if $n \le k$, otherwise $0$;
12. unlabelled balls to unlabelled boxes, surjective: $p_k(n)$.

## Facts & Assumptions

**Given:** positive integers $n$ and $k$, interpreted by the conventions of [[def-twelvefold-way-ball-box-conventions]].

[L1] The set of functions from an $n$-element set to a $k$-element set has cardinality $k^n$ ([[thm-cardinality-of-a-set-of-functions]]).

[L2] The injections from an $n$-element set to a $k$-element set are counted by $k^{\underline n}$ ([[thm-number-of-injections]]).

[L3] The Stirling number $S(n,j)$ counts partitions of an $n$-element set into exactly $j$ nonempty blocks ([[def-stirling-second-kind-and-bell-number]]).

[L4] Weak compositions of $n$ into $k$ parts are counted by $\binom{n+k-1}{k-1}$, and compositions of $n$ into $k$ positive parts are counted by $\binom{n-1}{k-1}$ ([[thm-stars-and-bars]], [[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]]).

[L5] The three unlabelled-to-unlabelled cells are the counts proved in [[thm-unlabelled-unlabelled-placement-counts]].

## Proof

**Proof technique:** classification.

1.1 For labelled balls and labelled boxes, clause 1 is [L1] and clause 2 is [L2]. For clause 3, a surjection $f:[n]\to[k]$ has $k$ nonempty fibres, which form a partition of $[n]$ into exactly $k$ blocks; conversely, labelling the $k$ blocks of any such partition by the elements of $[k]$ recovers a surjection. By [L3], there are therefore $k!\,S(n,k)$ surjections. [L1, L2, L3]

1.2 For unlabelled balls and labelled boxes, the data are occupancy vectors $(a_1,\dots,a_k)$. Arbitrary placements are weak compositions, so clause 4 is [L4]. Surjective placements are positive compositions, so clause 6 is [L4]. Injective placements are exactly the $0$-$1$ occupancy vectors with total $n$, so one chooses which $n$ of the $k$ labelled boxes are occupied; this gives clause 5, namely $\binom{k}{n}$. [L4, construct]

1.3 For labelled balls and unlabelled boxes, one remembers only the fibres and forgets their labels. Thus a surjective placement is exactly a partition of $[n]$ into $k$ nonempty blocks, giving clause 9 as $S(n,k)$ by [L3]. An arbitrary placement uses some number $j$ of nonempty boxes with $1 \le j \le \min(n,k)$, so clause 7 is the sum of the counts $S(n,j)$ over those $j$. For injective placements every fibre is a singleton, hence there is one orbit when $n \le k$ and none when $n>k$, proving clause 8. [L3]

2.1 Clauses 10, 11, and 12 are exactly the three conclusions of [L5]. [L5] ∎
