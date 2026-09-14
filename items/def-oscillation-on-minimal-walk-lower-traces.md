---
id: def-oscillation-on-minimal-walk-lower-traces
kind: definition
title: Oscillation on lower traces and Moore's modular colouring
status: draft
origin: pipeline
deps:
  - lem-minimal-walk-functions-are-coherent-and-finite-to-one
  - def-minimal-walk-weights-and-coherent-functions
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Sections 4--5, printed pp. 10 and 15"
      url: https://arxiv.org/pdf/math/0501524
---

## Definition

Let $F$ be a finite set of ordinals in increasing order and let
$s,t:F\to\omega$.  For a nonminimum $\xi\in F$, write $\xi^-$ for its immediate
predecessor in $F$.  The **oscillation set** of $s$ and $t$ on $F$ is

$$\operatorname{Osc}(s,t;F)=\{\xi\in F\setminus\{\min F\}:s(\xi^-)\leq t(\xi^-)\text{ and }s(\xi)>t(\xi)\}.$$

If $F$ is empty, this set is empty without evaluating $\min F$; if $F$ is a
singleton, it is empty because there is no predecessor.  For
$\alpha<\beta<\omega_1$, define

$$\operatorname{Osc}(\alpha,\beta)=\operatorname{Osc}(e_\alpha,e_\beta;L(\alpha,\beta)),\qquad \operatorname{osc}(\alpha,\beta)=|\operatorname{Osc}(\alpha,\beta)|.$$

Both restrictions are defined because $L(\alpha,\beta)\subseteq\alpha$, and
they are finite by construction.  Coherence from
[[lem-minimal-walk-functions-are-coherent-and-finite-to-one]] is a later
structural control on these comparisons, not a prerequisite for the finite
count itself.

The labelled lower trace of
[[def-minimal-walk-weights-and-coherent-functions]] gives the stronger
integer-valued colouring used here.  We count labels only at oscillation
points:

$$o(\alpha,\beta)=\sum_{q\in\omega\setminus\{0\}}\left(\left|\left\{\xi\in\operatorname{Osc}(\alpha,\beta):\mu(\alpha,\beta;\alpha)(\xi)=q\right\}\right|\bmod q\right).$$

This oscillation-supported formula is the variant for which the block lemma's
labelled new oscillations give exact changes of the summands.  Moore's printed
Section 5 formula takes the inverse image on the entire labelled lower trace;
clauses (2)--(4) of his Lemma 4.1 do not control labels at the other newly
adjoined trace points, so that stronger formula is not used here.

Only finitely many summands are nonzero because the evaluated trace has finite
domain.  The value $q=0$ is excluded, so reduction modulo zero never occurs;
for $q=1$ its contribution is zero.

Enumerate the primes increasingly as $p_0=2,p_1=3,\ldots$.  Define
$*: \omega\to\omega$ by $*(0)=0$ and, for $m>0$,

$$*(m)=\min\{n<\omega:p_n\nmid m\}.$$

The minimum exists because a positive integer has only finitely many prime
divisors.  Put

$$o^*(\alpha,\beta)=*(o(\alpha,\beta)).$$

This transform can take values larger than $1$.  The binary colouring used by
the topology is defined later as $c(\alpha,\beta)=o(\alpha,\beta)\bmod2$;
the finite-pattern theorem controls both maps but does not conflate them.
