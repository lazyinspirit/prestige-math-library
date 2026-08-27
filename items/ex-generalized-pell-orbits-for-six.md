---
id: ex-generalized-pell-orbits-for-six
kind: example
title: "Generalized Pell orbits for $x^2 - 6y^2 = 3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-all-positive-pell-solutions-are-fundamental-powers, thm-generalized-pell-solutions-have-finitely-many-orbits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Example

For
$$x^2-6y^2=3,$$
the bounded representatives are exactly
$$\pm(3+\sqrt6),$$
and every integral solution is
$$\pm(3+\sqrt6)(5+2\sqrt6)^k,\qquad k\in\mathbb Z.$$

## Facts & Assumptions

**Given:** The equation $x^2-6y^2=3$.

[F1] Every positive Pell solution is a power of the fundamental unit
([[thm-all-positive-pell-solutions-are-fundamental-powers]]).

[F2] Every generalized Pell solution is Pell-equivalent to one in the explicit bounded rectangle given by the orbit theorem ([[thm-generalized-pell-solutions-have-finitely-many-orbits]]).

## Verification

**Proof technique:** direct.

1.1 The element $5+2\sqrt6$ has norm $1$, and there is no positive norm-one solution with $y=1$ because $x^2=7$ is impossible; hence $5+2\sqrt6$ is the fundamental Pell unit, so [F1] identifies the Pell powers with $(5+2\sqrt6)^k$. The element $3+\sqrt6$ has norm $3$. For $N=3$ and $\varepsilon_6=5+2\sqrt6$, the bound of [F2] is $$|x_0|\le \frac{\sqrt3}{2}\left(\sqrt{5+2\sqrt6}+(5+2\sqrt6)^{-1/2}\right)=3,$$ $$|y_0|\le \frac{\sqrt3}{2\sqrt6}\left(\sqrt{5+2\sqrt6}+(5+2\sqrt6)^{-1/2}\right)<2.$$ [F1, F2, given, algebra]

2.1 The only integer solutions in that box are $(x,y)=(\pm3,\pm1)$. Moreover, $$(3-\sqrt6)=(3+\sqrt6)(5-2\sqrt6)=(3+\sqrt6)(5+2\sqrt6)^{-1},$$ so $(3,1)$ and $(3,-1)$ lie in the same Pell orbit, and multiplying by $-1$ gives the negative orbit. Therefore every solution of $x^2-6y^2=3$ is $$\pm(3+\sqrt6)(5+2\sqrt6)^k\qquad(k\in\mathbb Z).$$ [F2, step 1.1, algebra] ∎
