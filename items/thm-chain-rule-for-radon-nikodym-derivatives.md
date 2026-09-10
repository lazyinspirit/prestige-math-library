---
id: thm-chain-rule-for-radon-nikodym-derivatives
kind: theorem
title: "Radon-Nikodym derivatives satisfy the chain rule along nu << mu << lambda"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-absolutely-continuous-with-respect-to-a-positive-measure, def-integrable-real-and-complex-functions-and-their-integrals, def-radon-nikodym-derivative, thm-integration-against-a-density, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-integral-over-a-null-set-vanishes]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.8"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, §6.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\lambda$ and $\mu$ be sigma-finite positive measures and let $\nu$ be a
signed measure or a finite complex measure on the same measurable space.
Assume there is an increasing measurable exhaustion $(X_n)_{n\in\mathbb N}$
with $\bigcup_nX_n=X$, $\lambda(X_n)<+\infty$, $\mu(X_n)<+\infty$, and
$|\nu|(X_n)<+\infty$ for every $n$, and assume $\nu\ll\mu\ll\lambda$. Then
$$\frac{d\nu}{d\lambda}=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}\qquad\lambda\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** AC and measures $\lambda,\mu,\nu$ with the common finite-exhaustion hypothesis and $\nu\ll\mu\ll\lambda$.

[L1] Under AC, RN gives finite-valued measurable densities on a common finite exhaustion, unique almost everywhere, with all measurable-set integrals defined and finite-piece L1 bounds; for finite complex measures the density is L1. ([[def-axiom-of-choice]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]], [[def-radon-nikodym-derivative]])

[L2] Nonnegative density substitution gives $\int q\,d(k\,d\lambda)=\int qk\,d\lambda$. ([[thm-integration-against-a-density]])

[L3] Real integrals are differences of positive and negative integrals when at least one is finite; complex L1 integration uses real and imaginary parts. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L4] A nonnegative function has zero integral exactly when it vanishes almost everywhere; null-set integrals vanish. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[cor-integral-over-a-null-set-vanishes]])

[L5] Absolute continuity means vanishing on all measurable null sets and is transitive. ([[def-absolutely-continuous-with-respect-to-a-positive-measure]])

## Proof

**Proof technique:** direct.

1.1 Apply [L1] under AC to choose finite-valued $k$ representing $d\mu/d\lambda$. It may be made nonnegative everywhere: on $E_{n,m}=X_n\cap\{k\le-1/m\}$, finite-piece integrability gives $0\le\mu(E_{n,m})=\int_{E_{n,m}}k\,d\lambda\le-\lambda(E_{n,m})/m$, so each set is null. Their countable union is $\{k<0\}$. Replacing $k$ there by zero leaves its integrals unchanged by [L4]. Thus $\mu=k\,d\lambda$ with finite nonnegative $k$. [L1, L4, given, choose]

2.1 If $\nu$ is signed, [L1] gives a finite real density $h$ for $\nu$ with respect to $\mu$. Its integral on $X$ is defined, so at least one of $\int h^+\,d\mu$ and $\int h^-\,d\mu$ is finite. Since $(hk)^\pm=h^\pm k$, [L2] gives $\int_E(hk)^\pm\,d\lambda=\int_Eh^\pm\,d\mu$ for every measurable $E$. The same finite-sign bound permits subtraction, proving $\int_Ehk\,d\lambda=\nu(E)$. By [L5], $\nu\ll\lambda$ and the given exhaustion permits [L1] for this pair. Its uniqueness clause identifies $hk=d\nu/d\lambda$ almost everywhere. [L1, L2, L3, L5, step 1.1, algebra]

2.2 If $\nu$ is finite complex, [L1] gives $h=u+iv\in L^1(\mu)$. By [L2], $\int|hk|\,d\lambda=\int|h|\,d\mu<\infty$. Apply [L2] to the four nonnegative parts of $u,v$ and combine their finite integrals by [L3]; this yields $\int_Ehk\,d\lambda=\nu(E)$ for every $E$. Transitivity [L5] and the complex uniqueness clause [L1] again give $hk=d\nu/d\lambda$ almost everywhere. [L1, L2, L3, L5, step 1.1, algebra]

3.1 The product is independent of finite-valued representatives. If $h'$ agrees with $h$ outside a measurable $\mu$-null set $Z$, then $\int_Zk\,d\lambda=\mu(Z)=0$, so [L4] gives $k=0$ $\lambda$-almost everywhere on $Z$. Hence $h'k=hk$ $\lambda$-almost everywhere. Changing $k$ on a $\lambda$-null set also leaves the product class unchanged. Thus the preceding identities give the stated identity of RN classes in both cases. [L4, step 1.1, step 2.1, step 2.2, algebra] ∎
