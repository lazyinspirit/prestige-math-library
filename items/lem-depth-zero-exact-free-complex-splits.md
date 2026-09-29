---
id: lem-depth-zero-exact-free-complex-splits
kind: lemma
title: Positive-degree exact free complexes split over a depth-zero local ring
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-free-complex-unit-entry-splits-contractible-pair
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.102.3 (tag 00MY), depth-zero splitting"
      url: https://stacks.math.columbia.edu/tag/00MY
---

## Statement

Let $(R,\mathfrak m)$ be a Noetherian local ring with a
nonzero $a\in R$ annihilated by $\mathfrak m$ (equivalently,
$R$ has depth zero). Let
$F_\bullet:0\to R^{n_e}\to\cdots\to R^{n_0}$
be a finite free complex exact in every positive degree.
Then it is isomorphic to a direct sum of contractible
two-term identity complexes and a free module concentrated
in degree zero. In particular, with
$r_i=n_i-n_{i+1}+\cdots+(-1)^{e-i}n_e$, each differential
$d_i$ has rank $r_i$ and its ideal of $r_i$-minors is
the unit ideal (with the usual $0$-minor convention).

## Facts & Assumptions

**Given:** The depth-zero local ring, nonzero socle element, and positively exact finite free complex.

[F1] A unit matrix entry in a differential splits off a contractible two-term identity pair, reducing the total number of positive-degree basis vectors ([[lem-free-complex-unit-entry-splits-contractible-pair]]).

## Proof

**Proof technique:** find a unit in the highest nonzero differential using the socle element and split pairs until no positive-degree term remains.

1.1 If $F_j=0$ for every $j>0$, the complex is just $F_0$ in degree zero and the decomposition holds. Otherwise let $i>0$ be the highest index with $F_i\ne0$. Positive-degree exactness makes $d_i:F_i\to F_{i-1}$ injective. If every matrix coefficient of $d_i$ lay in $\mathfrak m$, take a basis vector $v\in F_i$. The nonzero vector $av$ would map to zero, since $\mathfrak m a=0$, contradicting injectivity. Thus $d_i$ has a unit matrix entry. [F1]

2.1 By [F1], split off one contractible identity pair. The remaining complex is still positively exact because the split pair has zero homology. Its sum of ranks in positive degrees is strictly smaller. Repeating the argument of step 1.1 therefore stops after finitely many splits and leaves only a free degree-zero term. This is the asserted decomposition. [F1, step 1.1]

3.1 In the decomposition, let $c_i$ be the number of identity pairs whose nonzero differential has degree $i$. Then $n_i=c_i+c_{i+1}$ for $i>0$, with $c_{e+1}=0$. Descending from $i=e$ gives $c_i=n_i-n_{i+1}+\cdots+(-1)^{e-i}n_e=r_i$. The map $d_i$ is identity on $R^{c_i}$ and zero on the complementary summand, so its largest nonzero minor size is $r_i$, and an $r_i$-minor is $1$. No choice principle beyond finite bases is used. [F1, step 2.1] ∎
