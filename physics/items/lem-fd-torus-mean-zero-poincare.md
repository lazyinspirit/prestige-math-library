---
id: lem-fd-torus-mean-zero-poincare
kind: lemma
title: "Mean-zero Poincare inequality on the normalized torus"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.7"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, $N\ge1$, and $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized Lebesgue measure $d\mu=(2\pi)^{-d}dx$. For a smooth real vector field $f:Q_d\to\mathbb R^N$, define its mean by $\bar f=\int_{Q_d}f\,d\mu$ and the Frobenius gradient norm by $|\nabla f|^2=\sum_{a=1}^N\sum_{j=1}^d|\partial_j f_a|^2$. If $\bar f=0$, then $\|f\|_{L^2(Q_d)}\le\|\nabla f\|_{L^2(Q_d)}$.

## Statement references

[[def-fd-periodic-fourier-sobolev-spaces]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.7](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $d\in\{1,2,3\}$, $N\ge1$, and a smooth real field $f:Q_d\to\mathbb R^N$ with $\bar f=0$.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: $\widehat f(k)=\int_{Q_d}f(x)e^{-ik\cdot x}\,d\mu(x)$, the zero coefficient is the mean, and $\|f\|_{H^0}^2=\sum_{k\in\mathbb Z^d}|\widehat f(k)|^2$.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, Parseval identifies the $L^2$ norm on the normalized unit torus with the squared coefficient sum. Rescaling $x=2\pi y$ gives the normalized $2\pi$-periodic convention here. The derivative-coefficient identity is established locally below.

## Proof

1.1 By [F1] and $\bar f=0$, $\widehat f(0)=0$. Every nonzero $k\in\mathbb Z^d$ has $|k|^2\ge1$. [given, F1, algebra]

1.2 For each component $f_a$, mode $k$, and coordinate $j$, integrate $\partial_j(f_a(x)e^{-ik\cdot x})$ over $[0,2\pi]^d$. The two faces perpendicular to the $j$th direction cancel because both factors are periodic. Expanding the derivative and using the normalization in [F1] gives $\widehat{\partial_jf_a}(k)=ik_j\widehat f_a(k)$. Smoothness makes all these integrands continuous and integrable. [given, F1, algebra]

2.1 By [F2] and step 1.2, componentwise Parseval and the locally proved derivative-coefficient formula give $\|f\|_{L^2}^2=\sum_{k\ne0}|\widehat f(k)|^2$ and $\|\nabla f\|_{L^2}^2=\sum_{k\ne0}|k|^2|\widehat f(k)|^2$. Termwise comparison using [step 1.1] yields $\|f\|_{L^2}^2\le\|\nabla f\|_{L^2}^2$. [given, A1, F2, step 1.1, step 1.2]

3.1 Both norms are nonnegative, so taking square roots proves the asserted inequality. [step 2.1, algebra] ∎