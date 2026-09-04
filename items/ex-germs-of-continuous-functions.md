---
id: ex-germs-of-continuous-functions
kind: example
title: "Distinct continuous functions can share one germ, but equal germs everywhere force equality"
status: draft
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-germ-of-section, lem-morphisms-of-sheaves-determined-by-stalks]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 11"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Example

On the sheaf of continuous real-valued functions on $\mathbb R$, the zero
function and the function
$$g(x)=\max(1-|x-2|,0)$$
have the same germ at $0$ but are not equal globally. On the other hand, if two
continuous functions on an open set $U$ have the same germ at every point of
$U$, then they are equal.

## Facts & Assumptions

**Given:** Continuous functions $f,g:U\to\mathbb R$ on an open set $U$.

[F1] The germ of a section records equality on some neighbourhood of the point
([[def-germ-of-section]]).

[L1] Sheaf morphisms are determined by stalk maps
([[lem-morphisms-of-sheaves-determined-by-stalks]]).

## Verification

**Proof technique:** direct.

1.1 The function $g$ vanishes on the neighbourhood $(-1,1)$ of $0$, so its germ at $0$ equals the germ of the zero function by [F1]. But $g(2)=1$, so the two functions are not equal globally. [F1, given]

1.2 If $f_x=g_x$ for every $x\in U$, then [F1] gives for each $x$ an open neighbourhood $V_x\subseteq U$ on which $f|_{V_x}=g|_{V_x}$. The sets $V_x$ cover $U$, so $f$ and $g$ agree at every point of $U$ and hence are equal. [F1, given]

2.1 This pointwise-germ criterion is the section-level instance behind [L1]: one stalk does not determine a section, but all stalks together do. [L1, step 1.1, step 1.2] ∎
