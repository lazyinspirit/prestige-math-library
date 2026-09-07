---
id: lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring
title: "Irreducible polynomial coefficients in a complete valuation ring"
kind: lemma
status: draft
origin: pipeline
deps: [lem-hensel-factor-lifting-over-a-complete-valued-field]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76, proof of Theorem 6.4, p.11"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
proof_strategy: direct argument
---

## Statement

Let F be complete nonarchimedean. If $f\in F[T]$ is monic irreducible of positive degree and $|f(0)|\le1$, then every coefficient of f has absolute value at most one.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]: Let F be complete nonarchimedean, A its valuation ring, and k its residue field. Suppose $g\in A[T]$ has nonzero reduction $\bar g=h_0H_0$, where $h_0\in k[T]$ is monic and $\gcd(h_0,H_0)=1$. Then $g=hH$ for $h,H\in A[T]$, with h monic of degree $\deg h_0$, $\bar h=h_0$, $\bar H=H_0$. No discreteness or monicity of g is assumed. In particular, a simple residue root of a monic polynomial lifts uniquely to a simple root in A.

## Proof

1.1 Suppose some coefficient has value greater than one. Choose one of maximal value, say $a_j$, and put $g=f/a_j$. All coefficients of g lie in A, its constant and leading coefficients reduce to zero, and some intermediate coefficient reduces to a nonzero element. Consequently $\bar g=T^rH_0$ with $1\le r\le\deg\bar g<\deg f$ and $H_0(0)\ne0$. [given, algebra]

2.1 The two residue factors are coprime, so nonmonic Hensel lifting gives $g=hH$ with h monic of degree r. Both factors have positive degree, since $0<r<\deg g$. Multiplying back by $a_j$ contradicts irreducibility. Thus no coefficient exceeds one. Degree one and f=T are included without contradiction to the zero constant-term case. [F1, step 1.1] ∎
