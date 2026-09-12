---
id: "prop-length-energy-inequality-and-constant-speed-equality-case"
kind: "proposition"
title: "Length-energy inequality and constant-speed equality case"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-energy-of-a-piecewise-smooth-curve","def-riemannian-speed-and-length","thm-nonnegative-continuous-with-zero-integral-vanishes"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, discussion after Definition 16.1.3, p.120
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every piecewise smooth curve $\gamma:[a,b]\to M$ with $a<b$,
$$L(\gamma)^2\le 2(b-a)E(\gamma).$$
Equality holds if and only if $|\dot\gamma|_g$ is constant almost everywhere, equivalently if its continuous restriction to the interior of every smooth piece is one common constant.

## Facts & Assumptions

**Given:** A piecewise smooth curve on $[a,b]$ with $a<b$, a finite smooth subdivision, and its nonnegative piecewise continuous speed $h(t)=|\dot\gamma(t)|_g$.

[F1] [[def-riemannian-speed-and-length]] gives $L=\int_a^b h(t)\,dt$, interpreted as the finite sum over the pieces, and [[def-energy-of-a-piecewise-smooth-curve]] gives $2E=\int_a^b h(t)^2\,dt$ with the same convention.

[F2] A nonnegative continuous function on a compact interval has zero Riemann integral exactly when it vanishes identically ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

## Proof

**Proof technique:** direct.

1.1 Put $\ell=b-a>0$ and $c=L/\ell$. Finite additivity and ordinary integral algebra on the smooth pieces give $$0\le\int_a^b(h-c)^2=\int_a^b h^2-2c\int_a^b h+c^2\ell=2E-L^2/\ell.$$ Multiplying by $\ell$ proves $L^2\le2\ell E$. [F1, algebra]

1.2 Conversely, if $h=c_0$ almost everywhere, changing finitely many breakpoint values does not affect either integral, so $L=c_0\ell$ and $2E=c_0^2\ell$. Hence $L^2=c_0^2\ell^2=2\ell E$. The same computation applies when $c_0=0$. [F1, algebra]

2.1 If equality holds, step 1.1 gives a zero total integral of $(h-c)^2$. Every piece integral is nonnegative, so each is zero. On the interior of each piece, $(h-c)^2$ is continuous; applying [F2] on compact subintervals contained in that interior gives $h=c$ there. Thus $h=c$ away from the finitely many breakpoints, hence almost everywhere, and it has the same constant value on every smooth piece. [F1, F2, step 1.1]

3.1 Steps 2.1 and 1.2 prove both directions of the equality characterization. A constant curve has $L=E=0$ and realizes equality. In dimension zero every curve is locally constant, so the same case applies; dimension one is unchanged. A curve on a nonempty interval cannot have empty target. The hypothesis $a<b$ excludes division by a zero interval length; endpoint and corner values occur on a finite set and do not alter the integrals. No point or representative is chosen from an indexed family, so the proof is choice-free. [F1, F2, step 1.1, step 2.1, step 1.2] ∎
