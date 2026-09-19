---
id: def-ito-integral-of-an-elementary-predictable-process
kind: definition
title: "Ito integral of an elementary predictable process"
status: draft
origin: pipeline
deps: [def-elementary-predictable-brownian-integrand, def-brownian-motion, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.2.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Definition

Assume the Axiom of Choice and work under the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]: a filtered probability space
with a standard Brownian motion $B$ adapted to the filtration, with increments
$B_t-B_s$ independent of $\mathcal F_s$ of law $N(0,t-s)$. Fix $T>0$ and an
elementary predictable integrand
$$H_s=\sum_{k=0}^{m-1}\xi_k\,1_{(t_k,t_{k+1}]}(s),\qquad 0=t_0<\cdots<t_m=T,$$
with bounded $\mathcal F_{t_k}$-measurable coefficients $\xi_k$. The **Ito
integral of $H$ against $B$** is the process
$$I_t(H):=\sum_{k=0}^{m-1}\xi_k\bigl(B_{t\wedge t_{k+1}}-B_{t\wedge t_k}\bigr),\qquad 0\le t\le T,$$
also written $\int_0^tH_s\,dB_s$ or $(H\cdot B)_t$. The sum is finite and is
evaluated with the Brownian path of the given representative; on the event
where $t\mapsto B_t$ is continuous it is continuous in $t$, and $I_0(H)=0$
because $0\wedge t_k=0$ for every $k$.

Three conventions are part of the definition.

1. **Adaptedness and continuity.** For fixed $t$, each summand
   $\xi_k(B_{t\wedge t_{k+1}}-B_{t\wedge t_k})$ is $\mathcal F_t$-measurable:
   if $t<t_k$, the Brownian difference and hence the summand are zero; if
   $t\ge t_k$, then $\mathcal F_{t_k}\subseteq\mathcal F_t$, while
   $B_{t\wedge u}$ is $\mathcal F_t$-measurable for every $u$ because
   $t\wedge u\le t$. Thus
   $I(H)$ is adapted. For each fixed $\omega$ the map
   $t\mapsto B_{t\wedge t_{k+1}}(\omega)-B_{t\wedge t_k}(\omega)$ is continuous
   outside the single exceptional null set of (H) on which the Brownian path is
   discontinuous; the finite sum is therefore continuous on the same event.

2. **Linearity on a common refinement.** If $H$ and $K$ are elementary
   integrands and a partition refines both representations, then the defining
   sums of $H$, $K$, $H+K$ and $aH$ are taken over that common partition, and
   the finite sums give $I_t(H+K)=I_t(H)+I_t(K)$ and $I_t(aH)=aI_t(H)$ for real
   $a$ identically. In particular $I_t(H)-I_t(K)=I_t(H-K)$ for the
   elementary integrand $H-K$ represented on that refinement. This is a
   rearrangement of finitely many terms, not a limiting statement.

3. **Dependence on the representation is temporary.** The definition attaches
   $I_t(H)$ to a *chosen* elementary representation. Item 6 below proves that
   two representations that agree $(\mathrm dt\otimes P)$-almost everywhere
   produce the same random variables almost surely, so that from item 6 onward
   $I_t(H)$ is a function of the $(\mathrm dt\otimes P)$-class of $H$ alone.
   Until then, every statement about an elementary integrand names the
   representation it uses.

The Axiom of Choice is declared because the standing hypothesis (H) is part of
the Brownian interface of
[[def-elementary-predictable-brownian-integrand]], which assumes it; the
definition of the finite sum uses no choice. The countable-choice obligations
inherited from that interface are declared as dependencies of this item.
