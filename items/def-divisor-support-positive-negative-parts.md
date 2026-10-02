---
id: def-divisor-support-positive-negative-parts
kind: definition
title: "Divisor support positive negative parts"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-weil-divisor-normal-noetherian-scheme
  - def-degree-divisor-proper-curve
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

Let $k$ be a field and let $C$ be a proper curve over $k$, so that
$C$ is an integral proper $k$-scheme of dimension one and a divisor on $C$ is
a finite integral sum $D=\sum_x n_x[x]$ over the closed points
([[def-degree-divisor-proper-curve]]). For such a divisor define

1. the **support** $\operatorname{Supp}(D)=\{\,x:n_x\neq 0\,\}$, a finite set
   of closed points of $C$;
2. the **positive part** $D^{+}=\sum_x \max(n_x,0)\,[x]$;
3. the **negative part** $D^{-}=\sum_x \max(-n_x,0)\,[x]$, so that all
   coefficients of $D^{-}$ are nonnegative and
   $D=D^{+}-D^{-}$.

The supports of $D^{+}$ and $D^{-}$ are disjoint subsets of
$\operatorname{Supp}(D)$: if $n_x>0$ then the coefficient of $x$ in $D^{-}$ is
$\max(-n_x,0)=0$, and if $n_x<0$ then the coefficient of $x$ in $D^{+}$ is
$\max(n_x,0)=0$. Both parts are effective divisors in the sense that all
their coefficients are nonnegative, and $D$ is effective if and only if
$D^{-}=0$. The same definitions apply verbatim to a Weil divisor on any
integral normal locally Noetherian scheme, using prime divisors in place of
closed points ([[def-weil-divisor-normal-noetherian-scheme]]), and they are
used on this page only for divisors on a curve, where the finite-support
convention makes all three sums finite without further hypotheses.

Normality of $C$ is not required for the construction: the closed points of
$C$ and the integers $n_x$ are the only data used, and the identity
$D=D^{+}-D^{-}$ together with the disjointness of the two supports is a
coefficientwise statement.
