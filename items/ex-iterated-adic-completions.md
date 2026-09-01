---
id: ex-iterated-adic-completions
kind: example
title: "Powers of an ideal give the same one-step adic completion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-completion-of-a-module, ex-equivalent-adic-filtrations]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 10.96.8 and the surrounding completion discussion"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Example

Let $R$ be a commutative ring, let $I \subseteq R$ be an ideal, let $r \ge 1$,
and let $M$ be an $R$-module. Then the $I$-adic and $I^r$-adic completions are
canonically isomorphic:
$$
\widehat M^{\,I} \cong \widehat M^{\,I^r}.
$$
Since $I+I^r=I$, the same completed module is also the completion for the
combined ideal
$$
I+I^r=I,
$$
namely with $\widehat M^{\,I}$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \subseteq R$, an integer $r \ge 1$, and an $R$-module $M$.

[L1] If two adic filtrations dominate one another up to bounded shifts, then their completions are canonically isomorphic ([[ex-equivalent-adic-filtrations]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $J=I^r$. The inclusions $$I^r \subseteq I \qquad\text{and}\qquad I^r \subseteq I^r$$ give the hypotheses with $c=r$ and $d=1$, so $$\widehat M^{\,I} \xrightarrow{\sim} \widehat M^{\,I^r}.$$ [L1, algebra]

2.1 Since $I+I^r=I$, the completion for the combined ideal is exactly $\widehat M^{\,I}$. Combining this identity with step 1.1 shows that the $I$-adic, $I^r$-adic, and $(I+I^r)$-adic one-step completions are canonically the same module. [step 1.1, algebra]

3.1 Thus passing from $I$ to the power $I^r$, or replacing the pair $(I,I^r)$ by the combined ideal $I+I^r$, does not change the one-step completion. [step 2.1] ∎
