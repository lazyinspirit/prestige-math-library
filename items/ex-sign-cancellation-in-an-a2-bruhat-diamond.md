---
id: ex-sign-cancellation-in-an-a2-bruhat-diamond
kind: example
title: Sign cancellation in an A2 Bruhat diamond
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [prop-the-bgg-differential-squares-to-zero, lem-compatible-signs-exist-on-the-bruhat-graph, lem-bruhat-rank-two-intervals-are-diamonds, lem-bruhat-covers-give-unique-verma-embeddings, ex-the-a2-bgg-resolution-with-six-verma-summands, def-axiom-of-choice, def-bgg-differential-from-signed-verma-maps, lem-bruhat-covers-are-reflection-covers, def-bgg-bruhat-verma-sum-in-degree-k]
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
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.1 Step 1, p. 14"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Sec. 2.2 and Sec. 4.2, pp. 4-6 and 8-9"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the A2 setting of [[ex-the-a2-bgg-resolution-with-six-verma-summands]], the interval $[e,s_1s_2]$ has exactly two saturated paths $s_1s_2\rhd s_1\rhd e$ and $s_1s_2\rhd s_2\rhd e$, and the interval $[s_1,w_0]$ has exactly two saturated paths $w_0\rhd s_1s_2\rhd s_1$ and $w_0\rhd s_2s_1\rhd s_1$. In each case the two composites of canonical inclusions $M(x\circ\lambda)\to M(y\circ\lambda)$ coincide, while the two products of signs are opposite, so the corresponding component of $d^2$ vanishes: for the $(w_0,s_1)$-component of the composite of the last two differentials one computes

$$\varepsilon(w_0,s_1s_2)\varepsilon(s_1s_2,s_1)+\varepsilon(w_0,s_2s_1)\varepsilon(s_2s_1,s_1)=0,$$

and analogously for the $(s_1s_2,e)$-component. This makes the cancellation mechanism of [[prop-the-bgg-differential-squares-to-zero]] explicit on the smallest non-abelian diamond.

## Facts & Assumptions

**Given:** The Axiom of Choice, the A2 data of [[ex-the-a2-bgg-resolution-with-six-verma-summands]] with dominant integral weight $\lambda$, and the differentials $d_k$ built from a compatible sign function $\varepsilon$.

[F1] In type A2 the interval $\{e,s_1,s_2,s_1s_2\}$ has $\ell(s_1s_2)=2$ and $\ell(e)=0$, and both $s_1$ and $s_2$ lie strictly between because each is a reduced subword of $s_1s_2$ and covers $e$; hence its two intermediate elements are $s_1,s_2$ and the two saturated paths are $s_1s_2\rhd s_1\rhd e$ and $s_1s_2\rhd s_2\rhd e$. Likewise $\{s_1,s_1s_2,s_2s_1,w_0\}$ has $\ell(w_0)=3$, $\ell(s_1)=1$, and both $s_1s_2$ and $s_2s_1$ lie strictly between because $w_0=s_2s_1s_2$ contains $s_2s_1$ as a subword and $s_1$ is a subword of both $s_1s_2$ and $s_2s_1$; hence its two saturated paths are $w_0\rhd s_1s_2\rhd s_1$ and $w_0\rhd s_2s_1\rhd s_1$. The diamond lemma identifies these as the only saturated paths of the two intervals ([[lem-bruhat-rank-two-intervals-are-diamonds]], [[lem-bruhat-covers-are-reflection-covers]], [[def-bgg-bruhat-verma-sum-in-degree-k]]).

[F2] For a cover $x\rhd y$ the $(x,y)$-component of the relevant differential is $\varepsilon(x,y)\iota_{x\to y}$; consequently a two-step component is the sum over the intermediate elements, and for a saturated path $x\rhd m\rhd y$ the composite $\iota_{m\to y}\circ\iota_{x\to m}$ is the canonical inclusion $M(x\circ\lambda)\hookrightarrow M(y\circ\lambda)$, the same for all $m$ ([[def-bgg-differential-from-signed-verma-maps]], [[lem-bruhat-covers-give-unique-verma-embeddings]]).

[F3] For every square the product of the four signs is $-1$, so the two saturated paths of a diamond carry opposite total signs: $\varepsilon(x,m_1)\varepsilon(m_1,y)=-\varepsilon(x,m_2)\varepsilon(m_2,y)$ ([[lem-compatible-signs-exist-on-the-bruhat-graph]]).

## Verification

1.1 The two diamonds and their paths are as displayed by [F1]; the composites along the two paths in each diamond are equal by [F2], and the two sign products are opposite by [F3]. [F1, F2, F3]

2.1 For the $(s_1s_2,e)$-component of $d_1\circ d_2$ the two contributions come from the middles $s_1$ and $s_2$: the component equals $\varepsilon(s_1s_2,s_1)\varepsilon(s_1,e)\,\iota+\varepsilon(s_1s_2,s_2)\varepsilon(s_2,e)\,\iota$, where $\iota$ is the common composite $M(s_1s_2\circ\lambda)\hookrightarrow M(\lambda)$; since the two coefficients are opposite by [F3], the whole component is $\bigl(\varepsilon(s_1s_2,s_1)\varepsilon(s_1,e)+\varepsilon(s_1s_2,s_2)\varepsilon(s_2,e)\bigr)\iota=0$. [F2, F3, step 1.1]

2.2 For the $(w_0,s_1)$-component of $d_2\circ d_3$ the two contributions come from the middles $s_1s_2$ and $s_2s_1$: the component equals $\bigl(\varepsilon(w_0,s_1s_2)\varepsilon(s_1s_2,s_1)+\varepsilon(w_0,s_2s_1)\varepsilon(s_2s_1,s_1)\bigr)\iota'$, and this vanishes because the two path products are opposite by [F3]. [F2, F3, step 1.1]

3.1 The two computations exhibit the cancellation explicitly in the two entries that involve both intermediate elements of a diamond: the coincidence of the composites lets the two terms be added, and the opposite signs make the sum zero. This is exactly the mechanism by which the signed differential squares to zero in these components. [step 2.1, step 2.2] ∎
