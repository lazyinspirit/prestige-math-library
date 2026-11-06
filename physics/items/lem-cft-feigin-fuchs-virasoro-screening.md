---
id: lem-cft-feigin-fuchs-virasoro-screening
kind: lemma
title: Background-charge oscillator modes and integral long screenings
status: published
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-cft-feigin-fuchs-oscillator-data
dependency_roles:
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ridout and Wood, From Jack polynomials to minimal model spectra
      url: https://arxiv.org/pdf/1409.4847v2
      locator: Section 2, equations (2.9)–(2.12) and (2.17)–(2.27)
---

## Statement

For the rank-one oscillator data, let
$p\in\mathbb C^\times$ and $t\in\mathbb C$. The operators $L_t(n)$ obey

$$[L_t(m),L_t(n)]=(m-n)L_t(m+n)+\frac{m^3-m}{12}\delta_{m+n,0}\left(1-\frac{6(p-1)^2}{p}\right)I.$$

Their degree-zero operator is $D_t$ from the definition. A highest-weight
vector of weight $h$ for these modes means a nonzero vector $u$ satisfying
$L_t(0)u=hu$ and $L_t(n)u=0$ for every $n>0$. The constant vector
$e^{t\alpha}\in\mathcal F_t$ satisfies these conditions with
$h=pt^2-(p-1)t$. For every integer
$p\ge2$ and every charge with $2pt\in\mathbb Z$, the defined long-screening
coefficient satisfies $L_{t+1}(n)Q_t=Q_tL_t(n)$ for every $n\in\mathbb Z$.
These are algebraic identities on the polynomial spaces.

## Facts & Assumptions

**Given:** The nonzero complex parameter, charge, polynomial spaces and
explicit operators of the Statement; the screening conclusion has the stated
additional integer and integral-charge hypotheses.

[F1] [[def-cft-feigin-fuchs-oscillator-data]] defines
$[\alpha_m,\alpha_n]=2pm\delta_{m+n,0}I$, the normal order, $D_t$, $L_t(n)$
and the exponential field $\mathcal E_{1,t}(z)$.

## Proof

1.1 Introduce the formal field $J(z)=\sum_m\alpha_mz^{-m-1}$. Commuting its nonnegative modes past its negative modes gives the contraction $2p\sum_{m>0}m z^{-m-1}w^{m-1}=2p/(z-w)^2$, expanded in nonnegative powers of $w/z$. Products of two normally ordered quadratic expressions can be computed by moving each annihilation factor right: a single interchange contributes this scalar contraction; two interchanges contribute its product. There are four single and two double choices for $J(z)^2J(w)^2$. Since the commutators are scalar there are no further terms. This proves the finite contraction rule used in the following steps directly from [F1]. [F1, algebra]

2.1 Put $T_0(z)={:}J(z)^2{:}/(4p)$ and $\kappa=(p-1)/(2p)$. The four single contractions in step 1.1 and the Taylor expansion $J(z)=J(w)+(z-w)\partial J(w)+\cdots$ give $$T_0(z)T_0(w)\sim\frac{1/2}{(z-w)^4}+\frac{2T_0(w)}{(z-w)^2}+\frac{\partial T_0(w)}{z-w}.$$ Here $\sim$ records precisely the negative powers of $z-w$ in the indicated formal expansion. One contraction similarly gives $T_0(z)J(w)\sim J(w)/(z-w)^2+\partial J(w)/(z-w)$ and $J(z)T_0(w)\sim J(w)/(z-w)^2$. Differentiation in the indicated variables therefore gives $$T_0(z)\partial J(w)+\partial J(z)T_0(w)\sim\frac{2\partial J(w)}{(z-w)^2}+\frac{\partial^2J(w)}{z-w},\qquad \partial J(z)\partial J(w)\sim\frac{-12p}{(z-w)^4}.$$ Thus $T=T_0+\kappa\partial J=\sum_nL_t(n)z^{-n-2}$ satisfies $$T(z)T(w)\sim\frac{c/2}{(z-w)^4}+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w},\qquad c=1-6(p-1)^2/p.$$ All calculations take finite coefficients on a fixed polynomial. [F1, step 1.1, algebra]

3.1 Taking the coefficient commutator of $z^{m+1}T(z)$ and $w^{n+1}T(w)$ uses the difference of the expansions in $w/z$ and $z/w$. For a pole $(z-w)^{-k-1}$ the inner residue is $\binom{m+1}{k}w^{m+1-k}$. The fourth-order pole consequently gives $c(m^3-m)\delta_{m+n,0}/12$. The second- and first-order poles give $2(m+1)L_{m+n}-(m+n+2)L_{m+n}=(m-n)L_{m+n}$. This proves the bracket for all integer indices, since generalized binomial coefficients are exactly the coefficients of the corresponding Laurent expansions. Direct normal ordering at index zero gives $L_t(0)=\sum_{m>0}m x_m\partial_{x_m}+pt^2-(p-1)t=D_t$; positive modes kill the vacuum. [F1, step 2.1, algebra]

4.1 Write $E(w)=\mathcal E_{1,t}(w)$, as a map between its source and target charge spaces. The exponential substitution in [F1] gives $\alpha_mE(w)-E(w)\alpha_m=2pw^mE(w)$, including $m=0$ with the different source and target charges. Moving nonnegative $J$ modes right therefore gives $J(z)E(w)\sim2pE(w)/(z-w)$. A single contraction of $T_0$ gives $\partial E(w)/(z-w)$: explicitly the remaining normal product is ${:}J(w)E(w){:}$, equal to $\partial E(w)$ by differentiating its two exponentials and $w^{2pt}$. Two contractions give $pE(w)/(z-w)^2$. The improvement term gives $-2p\kappa E(w)/(z-w)^2$. Since $p-2p\kappa=1$, the result is $$T(z)E(w)\sim\frac{E(w)}{(z-w)^2}+\frac{\partial E(w)}{z-w}.$$ Extracting the $z$ coefficient as in step 3.1 gives $L_{t+1}(n)E(w)-E(w)L_t(n)=\partial_w(w^{n+1}E(w))$. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Under $2pt\in\mathbb Z$, $E(w)$ has integral powers of $w$ and the residue of a formal derivative is zero: the coefficient of $w^{-1}$ can only arise by differentiating the constant term, which contributes zero. Taking this residue in step 4.1 proves the screening identity. The substitution acts finitely on every input polynomial, and fixed creation coefficients have finite degree, so no analytic limit or convergence is required. [F1, step 4.1, algebra] ∎

## Statement references

[[def-cft-feigin-fuchs-oscillator-data]]
