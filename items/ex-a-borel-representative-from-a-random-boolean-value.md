---
id: ex-a-borel-representative-from-a-random-boolean-value
kind: example
title: A Borel representative from a random Boolean value
status: draft
origin: pipeline
deps: [lem-solovay-homogeneous-truth-has-borel-representatives]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Trace $\varphi(x,a)$ through the random-algebra Boolean value at the generic-real name.

## Facts & Assumptions

**Given:** $a\in N$, the random-real name $\dot r$, and the homogeneous tail forcing $R_{\dot r}$. In the random-forcing language let $\psi(\dot r)$ say that the top condition of $R_{\dot r}$ forces $\varphi(\dot r,a)$, and put $b=\lVert\psi(\dot r)\rVert$.

[F1] [[lem-solovay-homogeneous-truth-has-borel-representatives]]: $b$ has an $N$-coded Borel representative agreeing with truth on $N$-random reals.

## Verification

1.1 Choose Borel $B\in N$ representing $b$ modulo null. If $x$ is $N$-random, its ultrafilter on the measure algebra contains $b$ exactly when $x\in B$; the random-forcing truth lemma gives $N[x]\models\psi(x)\Longleftrightarrow x\in B$. [F1]

2.1 Homogeneity makes the $R_x$-Boolean value of $\varphi(x,a)$ either $0$ or $1$. Consequently the actual tail-generic extension satisfies $\varphi(x,a)$ exactly when the top of $R_x$ forces it, that is, exactly when $N[x]\models\psi(x)$. Step 1.1 therefore gives $V[G]\models\varphi(x,a)\Longleftrightarrow x\in B$. For a nongeneric $x$ no equivalence is asserted; those exceptions are removed only after placing them in the coded null set. This is a tail-forcing calculation, not upward absoluteness of arbitrary $\varphi$. [F1, step 1.1] ∎
