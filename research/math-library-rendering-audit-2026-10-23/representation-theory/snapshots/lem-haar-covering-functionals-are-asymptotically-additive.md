---
id: lem-haar-covering-functionals-are-asymptotically-additive
kind: lemma
title: Haar covering functionals are asymptotically additive
deps: [lem-translations-preserve-compactly-supported-continuous-functions, lem-haar-covering-ratios-are-finite-and-positive, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Statement

Assume AC. For $f_1,f_2\in C_c(G)^+$, $0\ne f_0\in C_c(G)^+$ and $\epsilon>0$, there is an open identity neighbourhood $U$ such that every $0\ne\phi\in C_c(G)^+$ supported in $U$ satisfies $0\le I_\phi(f_1)+I_\phi(f_2)-I_\phi(f_1+f_2)<\epsilon$.

## Facts & Assumptions

**Given:** AC and the functions and error tolerance in the statement.

[F1] Right translations of each compactly supported continuous function converge uniformly to it at the identity. ([[lem-translations-preserve-compactly-supported-continuous-functions]])

[F2] Ratios are subadditive and homogeneous and $I_\phi(h)\le(h:f_0)$. ([[lem-haar-covering-ratios-are-finite-and-positive]])

[F3] Under DC a compact set has a compactly supported nonnegative cutoff equal to one on it. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

[F4] AC supplies the inherited cutoff choices. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 If either $f_i=0$, the error is zero. Otherwise set $s=f_1+f_2$, choose $0\le F\le1$ compactly supported with $F=1$ on $\operatorname{supp}s$, and put $B=(F:f_0)>0$, $A=(s:f_0)>0$. Choose $0<\delta<\epsilon/(4(B+1))$, then $0<\eta<\epsilon/(4(A+\delta B+1))$. Thus $\delta B+2\eta(A+\delta B)<\epsilon$. AC implies the DC used for the cutoff. [F2, F3, F4]

2.1 Put $q=s+\delta F$ and $h_i=f_i/q$ where $q>0$, and zero elsewhere. On $\operatorname{supp}f_i$, $q\ge\delta$; a point where $q=0$ is outside that closed support and has a neighbourhood where $f_i=0$. Hence $h_i$ is continuous, supported in $\operatorname{supp}f_i$, and $h_1+h_2\le1$. Choose $U$ so $|h_i(xz)-h_i(x)|<\eta$ for all $x$, both $i$, and $z\in U$, using uniform right-translation continuity. [F1, step 1.1]

3.1 For a finite cover $q\le\sum c_jL_{x_j}\phi$, a nonzero term at $y$ has $x_j^{-1}y\in U$. Consequently $h_i(y)\le h_i(x_j)+\eta$ and $f_i(y)\le\sum c_j(h_i(x_j)+\eta)L_{x_j}\phi(y)$. These coefficients are positive. The sum of the two coefficient sums is at most $(1+2\eta)\sum c_j$. Taking the infimum over covers of $q$, then dividing by $(f_0:\phi)$, gives $I_\phi(f_1)+I_\phi(f_2)\le(1+2\eta)(I_\phi(s)+\delta I_\phi(F))$. [F2, step 2.1]

4.1 Subtracting $I_\phi(s)$ and using the coordinate bounds yields an upper error at most $2\eta A+\delta(1+2\eta)B<\epsilon$. Subadditivity gives its nonnegativity. The choices of $\delta,\eta,U$ preceded $\phi$, so the bound holds uniformly for every allowed test function. [F2, step 1.1, step 3.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
