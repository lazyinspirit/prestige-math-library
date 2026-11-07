---
id: lem-dickman-uniform-backward-saddle-ratio
kind: lemma
title: Uniform backward Dickman saddle ratio
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
proof_strategy: direct
axiom_use: No choice axiom is used; all bounds use fixed real parameters and compact intervals.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-dickman-saddle-parameter-and-central-gaussian-estimate
- lem-dickman-saddle-inversion-and-outer-tail
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- thm-ftc-second-part
sources:
  references:
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
    locator: Corollary 2.4 and Lemma 3.1 context. This uniform one-sided bound is derived locally from the established saddle asymptotic.
---

## Statement

There is an absolute $C>0$ such that, for all $u\ge2$ and $0\le a\le u$,
$$\rho(u-a)\le C\rho(u)e^{a\xi(u)},$$
where $\xi(u)>0$ is the unique solution of $e^{\xi}=1+u\xi$. No estimate for the smooth counting function is asserted.

## Facts & Assumptions

**Given:** $u\ge2$ and $0\le a\le u$.

[F1] The saddle satisfies $\log t<\xi(t)<2\log t$, $t/2\le V(t)\le t$, and $1/t\le\xi'(t)\le2/t$ for every $t\ge2$, with $V(t)=\int_0^1r e^{\xi(t)r}dr$. [[lem-dickman-saddle-parameter-and-central-gaussian-estimate]]

[F2] The full saddle inversion gives $\rho(t)=\exp(\gamma-t\xi(t)+I(\xi(t)))(2\pi V(t))^{-1/2}(1+O(t^{-1/5}))$ for $t\ge2$, where $I(\xi)=\int_0^1(e^{\xi r}-1)dr/r$. [[lem-dickman-saddle-inversion-and-outer-tail]]

[F3] The Dickman function is continuous and positive on $[0,\infty)$, equals one on $[0,1]$, and obeys $\rho'(t)=-\rho(t-1)/t$ for $t>1$. [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[F4] A continuous real derivative integrates to its endpoint difference. [[thm-ftc-second-part]]

## Proof

1.1 Put $A(t)=I(\xi(t))-t\xi(t)$. Differentiation under the finite integral gives $I'(\xi)=(e^\xi-1)/\xi=t$ at $\xi=\xi(t)$, and hence $A'(t)=-\xi(t)$. For sufficiently large $t$, the relative error in [F2] has modulus at most $1/2$. Thus for all $u\ge t$ above a fixed absolute threshold, [F1–F2] give $$\frac{\rho(t)}{\rho(u)}\le C\sqrt{\frac ut}\exp\!\left(\int_t^u\xi(r)dr\right).$$ By [F1] and [F4], for $t\le r\le u$ one has $\xi(u)-\xi(r)\ge(u-r)/u$, so $$\int_t^u\xi(r)dr\le(u-t)\xi(u)-\frac{(u-t)^2}{2u}.$$ If $t\ge u/2$, the square-root factor is at most $\sqrt2$; if $t<u/2$, the Gaussian loss is at least $e^{-u/8}$ and $\sqrt{u/t}e^{-u/8}$ is absolutely bounded. Therefore $\rho(t)\le C\rho(u)e^{(u-t)\xi(u)}$ whenever $u\ge t$ and both exceed the fixed threshold. [F1, F2, F4, given, algebra]

2.1 It remains to treat bounded $t$. By positivity and [F3], $\rho(t)\le1$ for all $t\ge0$. For $\xi\ge2$, integration over $1-1/\xi\le r\le1$ gives $$I(\xi)\ge c\frac{e^\xi}{\xi}\ge cu$$ for an absolute $c>0$. In particular [F2] and [F1] give $\rho(u)e^{u\xi(u)}\ge c'e^{cu}/\sqrt u$ for all sufficiently large $u$. If $0\le t\le t_0$, where $t_0$ is the fixed threshold from step 1.1, then $e^{t\xi(u)}\le u^{2t_0}$ by [F1]. Hence $\rho(u)e^{(u-t)\xi(u)}\ge c'e^{cu}u^{-2t_0-1/2}$, which is bounded below by a positive absolute constant for large $u$. Together with $\rho(t)\le1$, this proves the required estimate for bounded $t$ and large $u$. On the remaining compact triangle $2\le u\le U$, $0\le t\le u$, the ratio $\rho(t)/[\rho(u)e^{(u-t)\xi(u)}]$ is bounded by continuity and positivity, so enlarging $C$ covers all remaining parameters. Taking $t=u-a$ finishes the proof. [F1, F2, F3, step 1.1, given, algebra] ∎
