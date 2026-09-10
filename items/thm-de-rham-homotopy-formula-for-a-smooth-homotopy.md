---
id: "thm-de-rham-homotopy-formula-for-a-smooth-homotopy"
kind: "theorem"
title: "De rham homotopy formula for a smooth homotopy"
deps: ["thm-de-rham-homotopy-formula-on-a-product", "thm-the-exterior-derivative-commutes-with-pullback"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $F:M\times[0,1]\to N$ is smooth up to the endpoints and $F_t(x)=F(x,t)$, then $F_1^*-F_0^*=d(KF^*)+(KF^*)d$.

## Facts & Assumptions

**Given:** A smooth homotopy $F$ and a smooth form $\omega$ on $N$.

[F1] [[thm-de-rham-homotopy-formula-on-a-product]]: For endpoint inclusions $i_t:M\to M\times[0,1]$, $i_1^*-i_0^*=dK+Kd$ on smooth forms of every degree.

[F2] [[thm-the-exterior-derivative-commutes-with-pullback]]: For every smooth map $F:M\to N$ and every form $\omega$ on $N$, $$d(F^*\omega)=F^*(d\omega).$$

## Proof

**Proof technique:** direct.

1.1 Apply the product identity to the smooth form $F^*\omega$: $i_1^*F^*\omega-i_0^*F^*\omega=dKF^*\omega+KdF^*\omega$. Evaluation on tangent tuples shows $i_t^*F^*\omega=F_t^*\omega$, including functions. [F1, given]

2.1 Naturality gives $dF^*\omega=F^*d\omega$. Substitution yields $F_1^*\omega-F_0^*\omega=d(KF^*\omega)+KF^*d\omega$, the required identity for every degree; zero terms require no separate extension. [F2, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 17.9 and Proposition 17.10, pp.444–445; the proof here computes the product differential directly.
