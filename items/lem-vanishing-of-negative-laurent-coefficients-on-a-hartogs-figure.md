---
id: lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure
kind: lemma
title: "Negative Laurent coefficients vanish on a Hartogs figure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-holomorphic-dependence-of-slice-laurent-coefficients,
       thm-identity-theorem-in-several-complex-variables,
       thm-removable-singularity-characterizations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

In the notation of
[[lem-holomorphic-dependence-of-slice-laurent-coefficients]], one has

$$
a_n(w)=0 \qquad\text{for every } n<0 \text{ and every } |w|<1.
$$

## Facts & Assumptions

**Given:** A holomorphic function $f$ on $H(r,s)$, a radius $\rho$ with
$r<\rho<1$, and the Laurent coefficient functions $a_n$ defined in the
preceding lemma.

[L1] Each $a_n$ is holomorphic on the unit disc, and for fixed $w$ the numbers
$a_n(w)$ are the Laurent coefficients of the slice $z\mapsto f(z,w)$ on the
annulus $r<|z|<1$
([[lem-holomorphic-dependence-of-slice-laurent-coefficients]]).

[L2] A holomorphic function on a punctured disc has a removable singularity
exactly when its Laurent expansion has no negative powers
([[thm-removable-singularity-characterizations]]).

[L3] A holomorphic function on a connected open set that vanishes on a nonempty
open subset vanishes identically
([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Fix $w$ with $|w|<s$. Then $(z,w)\in H(r,s)$ for every $|z|<1$, so the slice $z\mapsto f(z,w)$ is holomorphic on the whole unit disc. By [L1], the coefficients $a_n(w)$ are the Laurent coefficients of that slice on $r<|z|<1$, and [L2] therefore forces $a_n(w)=0$ for every $n<0$. [L1, L2]

2.1 For each fixed $n<0$, step 1.1 shows that the holomorphic function $a_n$ is zero on the nonempty open disc $\{|w|<s\}$. The domain $\{|w|<1\}$ is connected, so [L3] gives $a_n\equiv0$ there. [step 1.1, L3]

3.1 As $n<0$ was arbitrary, every negative Laurent coefficient vanishes on the whole parameter disc $\{|w|<1\}$. [step 2.1] ∎
