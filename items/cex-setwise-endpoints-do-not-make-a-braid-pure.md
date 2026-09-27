---
id: cex-setwise-endpoints-do-not-make-a-braid-pure
kind: counterexample
title: "Setwise endpoints do not make a braid pure"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-geometric-braid-with-setwise-endpoints,
       def-elementary-geometric-half-twist,
       prop-stacking-of-geometric-braids-is-well-defined,
       def-braid-isotopy-relative-top-and-bottom,
       thm-geometric-braids-form-a-group,
       def-finite-symmetric-group-and-permutation-notation,
       def-interval, def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-5"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.1, author manuscript pp. 3-5"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement refuted

**Refuted claim:** a geometric braid based at $Q$ whose top endpoint set is
$\{z_1(1),\dots,z_n(1)\}=\{q_1,\dots,q_n\}$ returns every strand to its own
starting point, that is $z_j(1)=q_j$ for every $j$; in other words, the
setwise endpoint condition of
[[def-geometric-braid-with-setwise-endpoints]] forces a braid to be *pure*.

The witness is the elementary half twist $\sigma_1$ on two strands
([[def-elementary-geometric-half-twist]], [[def-geometric-braid-with-setwise-endpoints]]):
its top endpoint set is $\{q_1,q_2\}$, exactly the base configuration, but its
first strand starts at $q_1$ and ends at $q_2$, and its second strand starts at
$q_2$ and ends at $q_1$, so no strand returns to its own starting point and the
endpoint permutation of $\sigma_1$ is the transposition of $1$ and $2$, not the
identity.

**What is and is not claimed.** What is refuted is only the implication "top
endpoint set equal to $Q$ $\Rightarrow$ each label returns to its own starting
point". Nothing here asserts that some other braid fails to be pure, and
nothing here computes any invariant beyond the endpoint permutation. The
example is the definitional point recorded in the definition of the endpoint
permutation: labels are transported continuously from the bottom, so a braid
may permute them, and the setwise condition is exactly the condition that this
permutation be defined. It also shows that the failure is not an artefact of the
choice of representative: since $\pi$ is constant along braid isotopies
([[prop-stacking-of-geometric-braids-is-well-defined]]), $\sigma_1$ cannot be
braid-isotopic to the trivial braid, whose endpoint permutation is the identity
([[thm-geometric-braids-form-a-group]]).

## Facts & Assumptions

**Given:** The natural number $2$, the base configuration $Q=(q_1,q_2)$ with $h=\frac1{12}$, $q_1=(-\frac1{12},0)$, $q_2=(\frac1{12},0)$, and the elementary half twist $\sigma_1$ based at $Q$.

[F1] A braid based at $Q$ is a tuple $(u_1,u_2)$ of continuous maps $u_j\colon I\to D^\circ$ with $u_1(t)\ne u_2(t)$, $u_j(0)=q_j$ and $\{u_1(1),u_2(1)\}=\{q_1,q_2\}$; its endpoint permutation is the unique $\pi\in S_2$ with $u_j(1)=q_{\pi(j)}$, and a braid is called pure when this permutation is the identity; $q_1\ne q_2$ ([[def-geometric-braid-with-setwise-endpoints]], [[def-finite-symmetric-group-and-permutation-notation]], [[def-interval]], [[def-continuous-map-top]]).

[F2] The half twist is $(\sigma_1)_1=m_1+\rho$, $(\sigma_1)_2=m_1-\rho$ with $m_1=\frac{q_1+q_2}{2}=(0,0)$ and $\rho(0)=(-h,0)$, $\rho(1)=(h,0)$; $\sigma_1$ is a braid based at $Q$ and $\pi(\sigma_1)$ is the transposition of $1$ and $2$ ([[def-elementary-geometric-half-twist]], [[def-geometric-braid-with-setwise-endpoints]]).

[F3] The endpoint permutation is constant along braid isotopies, so equal values of $\pi$ are necessary for two braids to be braid-isotopic; in particular the transposition of $1$ and $2$ differs from the identity permutation of $S_2$, and the trivial braid has the identity endpoint permutation ([[prop-stacking-of-geometric-braids-is-well-defined]], [[def-braid-isotopy-relative-top-and-bottom]], [[thm-geometric-braids-form-a-group]], [[def-finite-symmetric-group-and-permutation-notation]]).

## Counterexample

**Proof technique:** direct.

1.1 **The witness and its endpoint values.** Take $n=2$ and $\beta:=\sigma_1$; by [F2] its strands are $(\sigma_1)_1(t)=m_1+\rho(t)$ and $(\sigma_1)_2(t)=m_1-\rho(t)$, so $(\sigma_1)_1(0)=m_1+\rho(0)=(-h,0)=q_1$, $(\sigma_1)_2(0)=m_1-\rho(0)=(h,0)=q_2$, and at the top $(\sigma_1)_1(1)=m_1+\rho(1)=(h,0)=q_2$ while $(\sigma_1)_2(1)=m_1-\rho(1)=(-h,0)=q_1$, since $m_1=(0,0)$ and $\rho(0)=(-h,0)$, $\rho(1)=(h,0)$ by [F2]. [F2, F1]

2.1 **The setwise condition holds.** The top endpoint set of $\sigma_1$ is $\{(\sigma_1)_1(1),(\sigma_1)_2(1)\}=\{q_2,q_1\}=\{q_1,q_2\}$ by step 1.1, so $\sigma_1$ satisfies the hypothesis of the refuted claim; the endpoint permutation of $\sigma_1$ is the unique $\pi\in S_2$ with $(\sigma_1)_j(1)=q_{\pi(j)}$ for $j=1,2$, which by step 1.1 is the transposition $\pi(1)=2$, $\pi(2)=1$ of [F2]. [F1, F2, step 1.1]

2.2 **The pointwise conclusion fails.** By step 1.1 the first strand ends at $q_2\ne q_1$ and the second strand ends at $q_1\ne q_2$, since $q_1\ne q_2$ by [F1]; hence $(\sigma_1)_j(1)\ne q_j$ for both labels $j$, so the conclusion of the refuted claim fails for this braid. [F1, step 1.1]

3.1 **The failure is isotopy invariant.** By step 2.1 the endpoint permutation of $\sigma_1$ is the transposition of $1,2$, which is not the identity permutation of $S_2$, whereas the trivial braid has the identity endpoint permutation; by [F3] the endpoint permutation is constant along braid isotopies, so $\sigma_1$ is not braid-isotopic to the trivial braid, and in particular it is not pure in the sense of [F1]. [F3, step 2.1]

4.1 **Conclusion.** Steps 1.1, 2.1 and 2.2 exhibit a braid whose top endpoint set equals the base configuration while no strand returns to its own starting point, so the refuted claim is false; step 3.1 shows moreover that this braid is not braid-isotopic to the trivial braid. ∎ [step 2.1, step 2.2, step 3.1]

## Remarks

- The distinction is exactly the one the definition records: the top matching of a braid is an arbitrary permutation of the labels, the setwise condition only says that this matching is defined at all, and the pure braids are the special case in which the matching is the identity.
- The witness is minimal: with two strands the only non-identity permutation is the transposition, and the half twist realises it with the smallest possible support, the disc $U_1$ containing exactly the two base points.
