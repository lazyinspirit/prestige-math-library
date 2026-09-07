---
id: thm-cheeger-inequalities-for-finite-regular-graphs
kind: theorem
title: "Cheeger inequalities for finite regular graphs"
status: draft
origin: pipeline
deps: [lem-cheeger-sweep-and-layer-cake]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §4.5 Theorem4.11 (also Theorem2.4), pp40–42."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For a finite $d$-regular adjacency-slot multigraph on $n\ge2$ vertices,
$$\frac{\gamma}{2}\le h\le\sqrt{2\gamma},\qquad h\le h_V\le dh.$$
Here $\gamma=1-\mu_2$ is the algebraic gap; it is not replaced by $1-\alpha$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For a finite $d$-regular graph on $n\ge2$ vertices and a nonnegative $f$ supported on at most $n/2$ vertices, use the unnormalized inner product $\langle f,g\rangle_0=\sum_v f(v)g(v)$ and energy $E(f)=\langle f,(I-M)f\rangle_0$. Then $$h\|f\|_0^2\le\frac1d\sum_{u<v}A_{uv}|f(u)^2-f(v)^2|\le\sqrt{2E(f)\|f\|_0^2}.$$ Also $\gamma\le2h$, and there exists a nonzero nonnegative function $g$, supported on at most $n/2$ vertices, with $E(g)\le\gamma\|g\|_0^2$: namely, the positive part of a suitable sign of a nonzero mean-zero $\mu_2$ eigenvector. These are the indicator and positive-part conclusions of the preceding lemma in the unnormalized inner product. ([[lem-cheeger-sweep-and-layer-cake]]).


## Proof

1.1 Take the nonzero positive part with $E(f)\le\gamma\|f\|_0^2$ and combine it with the sweep estimate. Since $\|f\|_0^2>0$, this yields $h\le\sqrt{2\gamma}$. The indicator estimate in the same cited result gives $\gamma/2\le h$. Zero gap is permitted and forces $h=0$. [F1]

2.1 For any nonempty eligible $S$, each vertex of $\partial_VS$ receives at least one and at most $d$ cut slots. Thus $\operatorname{cut}(S)/d\le|\partial_VS|\le\operatorname{cut}(S)$. The first inequality divided by $|S|$ and minimized gives $h\le h_V$. Apply the second to a set minimizing $h$ to obtain $h_V\le dh$. The eligible collection is nonempty and finite because $n\ge2$; loops never cross its cuts. [step 1.1, algebra] ∎
