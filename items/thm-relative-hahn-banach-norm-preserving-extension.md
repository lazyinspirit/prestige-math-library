---
id: thm-relative-hahn-banach-norm-preserving-extension
kind: theorem
title: Relative norm-preserving Hahn–Banach extension over the real and complex fields
status: draft
origin: pipeline
deps: [thm-relative-hahn-banach-dominated-extension, def-dual-space-of-a-normed-space, lem-real-part-determines-a-complex-linear-functional, def-linear-subspace]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Assume HB. Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$, $M\le X$ any $\mathbb K$-linear subspace, and $g:M\to\mathbb K$ a bounded $\mathbb K$-linear functional. There exists $F\in X^*$ such that $F|_M=g$ and $\|F\|=\|g\|$. The subspace need not be closed, and $X$ need not be complete; $M=\{0\}$ is allowed.

## Facts & Assumptions

[F1] Under HB a real dominated functional extends with the two signed bounds ([[thm-relative-hahn-banach-dominated-extension]]).

[F2] The dual consists of bounded scalar-linear functionals, with norm $\sup_{\|x\|\le1}|f(x)|$ ([[def-dual-space-of-a-normed-space]]).

[F3] A real-linear $u$ reconstructs a complex-linear $f(x)=u(x)-iu(ix)$ with real part $u$, and reconstructs any complex-linear functional from its real part ([[lem-real-part-determines-a-complex-linear-functional]]).

[F4] A linear subspace contains zero and is closed under addition and scalar multiplication ([[def-linear-subspace]]).

## Proof

**Given:** HB, a normed $\mathbb K$-space $X$, a $\mathbb K$-linear subspace $M$, and bounded $g:M\to\mathbb K$.

1.1 Put $C=\|g\|\ge0$. For $m\ne0$, the vector $m/\|m\|$ is in the unit ball of $M$, so $|g(m)|=\|m\||g(m/\|m\|)|\le C\|m\|$; for $m=0$ the same inequality holds because $g(0)=0$. Set $p(x)=C\|x\|$. Then $p(tx)=tp(x)$ for $t\ge0$ and $p(x+y)\le p(x)+p(y)$ by the norm axioms. [given, F2, F4, algebra]

2.1 Over $\mathbb R$, $g\le p|_M$ by the preceding estimate. The real extension theorem gives $F|_M=g$ and $-C\|x\|\le F(x)\le C\|x\|$. Thus $|F(x)|\le C\|x\|$, so $F\in X^*$ and $\|F\|\le C$. [step 1.1, F1, F2]

2.2 Over $\mathbb C$, the underlying real space of $M$ is a real linear subspace of the underlying real $X$, because closure under complex scalars includes closure under real scalars. Let $u=\operatorname{Re}g$. It is real linear and $u(m)\le |g(m)|\le p(m)$. The real extension theorem gives real-linear $U:X\to\mathbb R$ with $U|_M=u$ and $U\le p$. [step 1.1, F1, F3, F4]

3.1 Define $F(x)=U(x)-iU(ix)$. The reconstruction lemma gives complex linearity and $\operatorname{Re}F=U$. For $m\in M$, also $im\in M$, whence $F(m)=u(m)-iu(im)=g(m)$ by the same lemma applied to $g$. [step 2.2, F3, F4]

4.1 If $F(x)=0$ then $|F(x)|\le C\|x\|$. Otherwise set $a=\overline{F(x)}/|F(x)|$. Then $|a|=1$ and $F(ax)=aF(x)=|F(x)|$ is real, so $|F(x)|=U(ax)\le C\|ax\|=C\|x\|$. Consequently the complex extension is bounded and $\|F\|\le C$. [step 2.2, step 3.1, F2, algebra]

5.1 In either field, $F$ extends $g$. For every $m\in M$ with $\|m\|\le1$, $|g(m)|=|F(m)|\le\|F\|$; taking the supremum gives $C\le\|F\|$. Together with the upper bounds this yields $\|F\|=\|g\|$. If $C=0$, the bound forces $F=0$; in particular this covers $M=\{0\}$ and the zero space. [step 2.1, step 3.1, step 4.1, F2] ∎

## Source notes

Brezis Corollary 1.2, p.3 (real); Teschl Theorem 4.14 and Corollary 4.15, pp.113–114.
