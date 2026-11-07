---
id: thm-khintchine-groshev-primitive-pairs-full-measure
kind: theorem
title: "Primitive Khintchine–Groshev divergence theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - def-primitive-linear-form-approximation-condition
  - lem-primitive-khintchine-groshev-event-bounds-and-intersections
  - lem-primitive-vector-supnorm-shell-count
  - lem-primitive-khintchine-groshev-radial-mass-divergence
  - lem-primitive-khintchine-groshev-zero-one-law
  - lem-second-moment-limsup-positive-measure
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Theorem 2 and §3"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4.6"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$ with $nm>1$, and let $\psi:\mathbb N\to[0,\infty)$. Define

$$A'_{n,m}(\psi):=\left\{X\in[0,1)^{n\times m}:\ \|qX+p\|_\infty<\psi(\|q\|_\infty)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\text{ with }\gcd(q_1,\ldots,q_n,p_1,\ldots,p_m)=1\right\}.$$

If

$$\sum_{h=1}^{\infty}h^{n-1}\psi(h)^m=\infty,$$

then $|A'_{n,m}(\psi)|=1$. No monotonicity assumption on $\psi$ is required.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Theorem 2 and §3](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4.6](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Countable Choice, $nm>1$, the primitive-pair convention, and divergence of the weighted power sum.

[A1] Countable Choice supplies countably additive Lebesgue measure on the matrix cube. ([[def-countable-choice]])

[F1] A primitive event has mass $(2\delta)^m\prod_{p\mid d}(1-p^{-m})$, where $d=\gcd(q_1,\ldots,q_n)$; distinct rows other than a sign pair have intersection mass at most $24^m(\delta_1\delta_2)^m$. ([[lem-primitive-khintchine-groshev-event-bounds-and-intersections]])

[F2] The primitive event mass summed on each shell has the lower bound $2^mnh^{n-1}\psi(h)^m$ for $m\ge2$, $h^{n-1}\psi(h)$ for $m=1,n\ge3$, and $8h\psi(h)$ for $m=1,n=2$. ([[lem-primitive-khintchine-groshev-radial-mass-divergence]])

[F3] The limsup of a countable event family has positive measure when every tail block has divergent total mass and second moment at most $C(S^2+S)$. ([[lem-second-moment-limsup-positive-measure]])

[F4] The primitive approximation set has measure zero or one for every nonnegative gauge. ([[lem-primitive-khintchine-groshev-zero-one-law]])

## Proof




1.1 Replace $\psi$ by $\eta(h):=\min\{\psi(h),1/4\}$. The weighted sum for $\eta$ still diverges: either $\psi(h)<1/4$ for all but finitely many $h$, or infinitely many terms satisfy $\eta(h)=1/4$, whose weighted sum diverges. Since $A'_{n,m}(\eta)\subseteq A'_{n,m}(\psi)$, it suffices to prove the result for $\eta$. Write $E_q:=B'(q,\eta(\|q\|_\infty))$ and $\mu_q:=|E_q|$. [given, algebra, algebra]

1.2 For $h\ge1$, put $T_h:=\#\{q\in\mathbb Z^n:\|q\|_\infty=h\}\eta(h)^m$ and $S_h:=\sum_{\|q\|_\infty=h}\mu_q$. By [F2], when $m\ge2$ one has $T_h\le C_mS_h$ for a constant depending only on $n,m$, using $T_h\le2n(3h)^{n-1}\eta(h)^m$ and the first shell bound. When $m=1,n=2$, $T_h=8h\eta(h)\le S_h$. When $m=1,n\ge3$, $T_h\le2n3^{n-1}h^{n-1}\eta(h)\le2n3^{n-1}S_h$. Thus for every complete shell block $M<h\le N$, $\displaystyle T_{M,N}:=\sum_{M<\|q\|_\infty\le N}\eta(\|q\|_\infty)^m\le C_{n,m}S_{M,N},\qquad S_{M,N}:=\sum_{M<\|q\|_\infty\le N}\mu_q.$ Moreover [F2] and the divergence of the weighted sum imply $S_{M,N}\to\infty$ as $N\to\infty$ for each fixed $M$. [given, F2, algebra, algebra]

2.1 For such a shell block $Q_{M,N}:=\{q:M<\|q\|_\infty\le N\}$, consider $\displaystyle D_{M,N}:=\sum_{q,q'\in Q_{M,N}}|E_q\cap E_{q'}|.$ The events for $q$ and $-q$ coincide by replacing $p$ with $-p$, so pairs with $q'=\pm q$ contribute exactly $2S_{M,N}$. For all other pairs, [F1] bounds the intersection by $24^m\eta(\|q\|_\infty)^m\eta(\|q'\|_\infty)^m$. Therefore $\displaystyle D_{M,N}\le2S_{M,N}+24^mT_{M,N}^2\le C\bigl(S_{M,N}^2+S_{M,N}\bigr),$ where $C$ depends only on $n,m$. [given, F1, step 1.2, algebra]

3.1 Let $F_N:=\{q\in\mathbb Z^n:0<\|q\|_\infty\le N\}$, a finite exhaustion of $\mathbb Z^n\setminus\{0\}$. For every $M<N$, $F_N\setminus F_M=Q_{M,N}$, so steps 1.2 and 2.1 verify the tail-divergence and second-moment hypotheses of [F3]. The limsup of the events $E_q$ consequently has positive measure. A matrix belongs to that limsup exactly when it has primitive approximations for infinitely many rows: for fixed $q$ only finitely many offsets $p$ can satisfy the bounded error inequality. Thus $|A'_{n,m}(\eta)|>0$. [given, step 1.2, step 2.1, F3, algebra]

4.1 By [F4], positive measure of $A'_{n,m}(\eta)$ implies $|A'_{n,m}(\eta)|=1$. Since $A'_{n,m}(\eta)\subseteq A'_{n,m}(\psi)$, the latter also has measure $1$. [step 1.1, step 3.1, F4, algebra] ∎
