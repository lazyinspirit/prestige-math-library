---
id: fs-finite-values-and-finite-additivity-force-finite-total-variation
kind: false-statement
title: "FALSE: finite values and finite additivity force finite total variation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Variation of finitely additive interval charges"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

**False claim.** Every finitely additive finite-valued set function has finite
total variation.

## Facts & Assumptions

**Given:** The interval algebra $\mathcal A$ on $(0,1]$, the function $g(x)=x\sin(1/x^2)$, and the set function $\phi((a,b])=g(b)-g(a)$.

[A1] Here "finitely additive" means $\phi(\varnothing)=0$ and $\phi(A\cup B)=\phi(A)+\phi(B)$ for disjoint $A,B$ in the source algebra.

[A2] The points $u_n=(2\pi n+\pi/2)^{-1/2}$ and $v_n=(2\pi n+3\pi/2)^{-1/2}$ satisfy $|g(u_n)-g(v_n)|=u_n+v_n$, and $\sum_n(u_n+v_n)$ diverges.

[A3] For a finitely additive real-valued set function on an algebra, define
$$|\phi|(E):=\sup\left\{\sum_{j=1}^m|\phi(E_j)|:E=\bigsqcup_{j=1}^mE_j,\ E_j\in\mathcal A\right\}.$$

## Refutation

**Proof technique:** direct.

1.1 The endpoint-increment formula makes $\phi$ finitely additive on $\mathcal A$, and every value of $\phi$ is a finite real number. [A1]

2.1 Using the partition points from [A2] gives finite partition sums bounded below by $\sum_{n=1}^N(u_n+v_n)$ for arbitrarily large $N$. Because those lower bounds diverge, [A3] gives infinite total variation. [A2, A3, step 1.1] ∎
