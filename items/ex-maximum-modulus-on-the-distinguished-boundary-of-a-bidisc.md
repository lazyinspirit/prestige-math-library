---
id: ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc
kind: example
title: "A function whose modulus attains its maximum only on the distinguished boundary of a bidisc"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc, def-balls-and-polydiscs-in-complex-euclidean-space, ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc, thm-maximum-modulus-principle-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

Let $f(z)=z_0z_1$ on the closed unit bidisc
$\overline\Delta_{(1,1)}(0)\subseteq\mathbb C^2$. Then $|f|\le1$ on the whole
closed bidisc, and equality holds exactly on the distinguished boundary

$$\Gamma_{(1,1)}(0)=\{(z_0,z_1):|z_0|=|z_1|=1\}.$$

By contrast, the topological boundary also contains points such as $(1,0)$, where
$|f|=0$. So the maximum-modulus information here is carried by the distinguished
boundary and not by the whole topological boundary.

## Facts & Assumptions

**Given:** The function $f(z)=z_0z_1$ on the closed unit bidisc.

[L1] If $f$ is continuous on a closed polydisc and holomorphic on its interior, its modulus there is bounded by, and attains the same supremum as on, the distinguished boundary ([[cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc]]).

[L2] The distinguished boundary of the unit bidisc is $\Gamma_{(1,1)}(0)=\{(z_0,z_1):|z_0|=|z_1|=1\}$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

## Verification

**Proof technique:** direct.

1.1 For every $z$ in the closed unit bidisc, $|f(z)|=|z_0z_1|=|z_0||z_1|\le1$, and equality holds if and only if $|z_0|=|z_1|=1$, that is, exactly on the distinguished boundary of [L2]. [given, L2]

2.1 The point $(1,0)$ lies on the topological boundary of the closed unit bidisc but not on the distinguished boundary: every ball about $(1,0)$ meets the bidisc interior, while points with first coordinate of modulus $>1$ lie arbitrarily close outside it. At that point $|f(1,0)|=0$. So the whole topological boundary does not by itself identify where the maximum is attained. [step 1.1]

3.1 This is exactly the concrete content of [L1] for the function $f(z)=z_0z_1$: the boundary points that matter are the distinguished ones. [step 1.1, step 2.1, L1] ∎
