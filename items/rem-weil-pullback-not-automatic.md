---
id: rem-weil-pullback-not-automatic
kind: remark
title: "Weil pullback not automatic"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-weil-divisor-normal-noetherian-scheme
  - def-pullback-cartier-divisor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
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
---

## Statement

An arbitrary morphism of schemes carries no pullback of Weil divisors. Even
when source and target are Noetherian normal, a morphism can send a local
equation of a prime divisor to the zero section of the source and can have
that prime divisor's inverse image of codimension zero. The recipe that pulls
back a local equation and records its orders along the prime divisors of the
source then has no nonzero rational function to evaluate and no height-one
cycle of the source to receive a coefficient.

## Remark

Set $Y=\mathbb A^1_k=\operatorname{Spec}k[t]$ and let $Z=V(t)=\{0\}$, a prime
divisor with local equation $t$
([[def-weil-divisor-normal-noetherian-scheme]]); the element
$t\in K(Y)^\times$ is a unit of the rational-function field $k(t)$. Consider
two morphisms out of Noetherian normal sources.

*Constant morphism.* Let $f:\mathbb A^1_k\to\mathbb A^1_k$ be the morphism
with $f^{\#}(t)=0$, so every point of the source maps to $0$. The inverse
image $f^{-1}(Z)$ is then the whole source $\mathbb A^1_k$, a closed
subscheme of codimension zero rather than a formal sum of prime divisors of
the source. On the meromorphic side, the regular section $t$ is a
nonzerodivisor of $\mathcal O_Y(Y)$ while its image $f^{\#}(t)=0$ is not a
nonzerodivisor of $\mathcal O_X(X)$; hence pullbacks of meromorphic functions
are not defined for this $f$, and no meromorphic function $f^*(t)$ on the
source exists whose orders along prime divisors could be recorded
([[def-pullback-cartier-divisor]]).

*Inclusion of the origin.* Let $i:\operatorname{Spec}k\to\mathbb A^1_k$ be
the inclusion of the origin, the morphism with $i^{\#}(t)=0$ in
$\mathcal O_{\operatorname{Spec}k}=k$. Again the local equation pulls back to
zero. The source has no prime divisors at all, so
$\operatorname{Div}(\operatorname{Spec}k)=0$ and no nonzero Weil divisor of
the source is available to receive the pullback
([[def-weil-divisor-normal-noetherian-scheme]]).

In both examples the inverse image is the whole source with ideal sheaf
zero, so the pullback of the effective Cartier divisor $Z$ is itself
undefined: the local-equation criterion requires the pulled-back regular
equation to be regular again, which fails because $t$ is sent to $0$
([[def-pullback-cartier-divisor]]). The failure is thus not an artefact of
the Weil formalism, but of the absence of a hypothesis such as flatness:
for flat morphisms pullbacks of meromorphic functions are defined and every
Cartier divisor has a defined pullback
([[def-pullback-cartier-divisor]]), and divisor pullback is built from that
Cartier description under suitable hypotheses. No formula
$Z\mapsto f^{-1}(Z)$ on height-one cycles is contravariant for arbitrary
morphisms.
