---
id: thm-khintchine-groshev-multivariable-gauge-divergence-law
kind: theorem
title: "Khintchine–Groshev divergence law for vector-dependent gauges"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-khintchine-groshev-matrix-approximation-set
  - def-primitive-linear-form-approximation-condition
  - lem-primitive-khintchine-groshev-event-bounds-and-intersections
  - lem-primitive-khintchine-groshev-zero-one-law
  - lem-second-moment-limsup-positive-measure
  - thm-khintchine-groshev-primitive-pairs-full-measure
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Theorems 4–5"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4.6"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Assume the Axiom of Countable Choice. Let $n\ge1$, $m>1$, and let $\Psi:\mathbb Z^n\setminus\{0\}\to[0,\infty)$. Define

$$W_{n,m}(\Psi):=\left\{X\in[0,1)^{n\times m}:\ \|qX+p\|_\infty<\Psi(q)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\right\}.$$

If

$$\sum_{q\in\mathbb Z^n\setminus\{0\}}\Psi(q)^m=\infty,$$

then $|W_{n,m}(\Psi)|=1$. In addition, if $\Psi(q)=\psi(\|q\|_\infty)$ and $nm>1$, define

$$W'_{n,m}(\psi):=\\left\\{X\\in[0,1)^{n\\times m}:\\ \\|qX+p\\|_\\infty<\\psi(\\|q\\|_\\infty)\\text{ for infinitely many }(q,p)\\text{ with }\\gcd(q_1,\\ldots,q_n,p_1,\\ldots,p_m)=1\\right\\}.$$

If $\sum_{h\ge1}h^{n-1}\psi(h)^m=\infty$, then $|W'_{n,m}(\psi)|=1$.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Theorems 4–5](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4.6](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Countable Choice, dimensions $n\ge1,m>1$, a vector-dependent nonnegative gauge, and divergence of its $m$th-power sum.

[A1] Countable Choice supplies the countably additive Lebesgue measures on the matrix cube. ([[def-countable-choice]])

[F1] The primitive event mass is $(2\delta)^m\prod_{p\mid d}(1-p^{-m})$, and distinct rows other than sign pairs have intersections bounded by $24^m(\delta_1\delta_2)^m$. ([[lem-primitive-khintchine-groshev-event-bounds-and-intersections]])

[F2] The limsup of events has positive measure under the stated tail-block second-moment bound. ([[lem-second-moment-limsup-positive-measure]])

[F3] Positive measure of a primitive approximation limsup implies full measure; in the radial case $nm>1$, its divergence conclusion is the primitive-pairs theorem. ([[lem-primitive-khintchine-groshev-zero-one-law]], [[thm-khintchine-groshev-primitive-pairs-full-measure]])

## Proof




1.1 First consider the radial assertion. Its primitive set is exactly the set in the primitive-pairs theorem, which has measure $1$ under $nm>1$ and divergence of $\sum_hh^{n-1}\psi(h)^m$. Removing the primitivity restriction can only enlarge that set. [given, F3, algebra]

1.2 For the vector-dependent gauge, cap it by $\eta(q):=\min\{\Psi(q),1/4\}$. The sum $\sum_q\eta(q)^m$ still diverges: if infinitely many $\Psi(q)\ge1/4$, the capped terms contribute a fixed positive amount infinitely often; otherwise $\eta(q)=\Psi(q)$ except at finitely many indices. Also $W_{n,m}(\eta)\subseteq W_{n,m}(\Psi)$. Put $E_q:=B'(q,\eta(q))$ and $\mu_q:=|E_q|$. Since $m>1$, the Euler factor in [F1] satisfies $\prod_{p\mid d}(1-p^{-m})\ge1/2$, by comparison with $\prod_{k=2}^{R}(1-k^{-2})>1/2$ for $R$ at least the largest prime divisor of $d$. Hence $\mu_q\ge2^{m-1}\eta(q)^m$, and the total event mass diverges. [given, F1, algebra, algebra]

2.1 Exhaust $\mathbb Z^n\setminus\{0\}$ by finite sets $F_N:=\{q:0<\|q\|_\infty\le N\}$. For any block $Q=F_N\setminus F_M$, put $S_Q:=\sum_{q\in Q}\mu_q$ and $T_Q:=\sum_{q\in Q}\eta(q)^m$. The mass lower bound in step 1.2 gives $T_Q\le2^{1-m}S_Q$. In the double sum of intersection measures over $Q\times Q$, the pairs $q'=\pm q$ contribute $2S_Q$ because $E_{-q}=E_q$. All other pairs satisfy [F1], so $\displaystyle \sum_{q,q'\in Q}|E_q\cap E_{q'}|\le2S_Q+24^mT_Q^2\le C_m(S_Q^2+S_Q).$ Every tail block has divergent mass since only finitely many rows were removed from the divergent total. Applying [F2] to this exhaustion yields positive measure for the limsup of the primitive events $E_q$. [given, F1, step 1.2, F2, algebra]

3.1 By the zero-one law in [F3], this primitive limsup has measure $1$. It is contained in $W_{n,m}(\eta)$ and therefore in $W_{n,m}(\Psi)$, proving the vector-dependent divergence assertion. [given, step 1.2, step 2.1, F3, algebra] ∎
