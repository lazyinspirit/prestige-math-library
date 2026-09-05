---
id: ex-pullback-free-module
kind: example
title: "Pullback carries a free module to the corresponding free module"
status: published
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-pullback-module-ringed-spaces, thm-pullback-pushforward-module-adjunction]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 6.26"
      url: "https://stacks.math.columbia.edu/tag/0094"
    - title: "Ravi Vakil, The Rising Sea, Chapter 6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Example

Let
$$
(f,f^\sharp):(X,\mathcal O_X)\longrightarrow (Y,\mathcal O_Y)
$$
be a morphism of ringed spaces. For every integer $n\ge0$, one has a canonical
isomorphism
$$
f^*(\mathcal O_Y^{\,n})\cong \mathcal O_X^{\,n}.
$$

## Facts & Assumptions

**Given:** A morphism of ringed spaces
$(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$ and an integer $n\ge0$.

[F1] Pullback is defined by
$f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$
([[def-pullback-module-ringed-spaces]]).

[L1] Pullback is a left adjoint and therefore preserves finite coproducts
([[thm-pullback-pushforward-module-adjunction]]).

## Verification

**Proof technique:** direct.

1.1 The sheaf $\mathcal O_Y^{\,n}$ is the finite direct sum of $n$ copies of $\mathcal O_Y$, with the case $n=0$ giving the zero sheaf. Since [L1] makes $f^*$ a left adjoint, it preserves these finite direct sums. Thus $$f^*(\mathcal O_Y^{\,n})\cong \bigl(f^*\mathcal O_Y\bigr)^{n}.$$ [L1, given]

2.1 Applying [F1] to $\mathcal G=\mathcal O_Y$ gives $$f^*\mathcal O_Y=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal O_Y\cong\mathcal O_X,$$ because tensoring a module over a ring with the ring itself leaves the module unchanged. Substituting this into step 1.1 yields $$f^*(\mathcal O_Y^{\,n})\cong \mathcal O_X^{\,n}.$$ [F1, step 1.1] ∎
