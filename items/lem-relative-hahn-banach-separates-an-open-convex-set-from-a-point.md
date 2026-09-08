---
id: lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point
kind: lemma
title: Relative separation of an open convex set from an exterior point
status: published
origin: pipeline
deps: [thm-relative-hahn-banach-dominated-extension, lem-relative-open-convex-gauge-properties, lem-real-part-determines-a-complex-linear-functional]
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
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Assume HB. If $C$ is a nonempty open convex subset of a real or complex normed space $X$ and $z\notin C$, there is a nonzero $f\in X^*$ such that
$$\operatorname{Re}f(c)<\operatorname{Re}f(z)\qquad(c\in C).$$
Over the real field, the real-part symbol is redundant.

## Facts & Assumptions

[F1] Under HB a real-linear dominated functional extends, with upper bound $p(x)$ and lower bound $-p(-x)$ ([[thm-relative-hahn-banach-dominated-extension]]).

[F2] An open convex neighbourhood $U$ of zero has a sublinear gauge with $U=\{p_U<1\}$ and $0\le p_U(x)\le\|x\|/r$ whenever $B(0,r)\subseteq U$ ([[lem-relative-open-convex-gauge-properties]]).

[F3] For real-linear $F$ on a complex space, $f(x)=F(x)-iF(ix)$ is complex-linear with real part $F$ ([[lem-real-part-determines-a-complex-linear-functional]]).

## Proof

**Given:** HB, a nonempty open convex $C\subseteq X$, and $z\in X\setminus C$.

1.1 Fix $c_0\in C$, set $U=C-c_0$ and $v=z-c_0$. Then $0\in U$ and $v\notin U$, hence $v\ne0$. If $u_j=c_j-c_0\in U$ and $0\le t\le1$, then $(1-t)u_1+tu_2=((1-t)c_1+tc_2)-c_0\in U$. A ball in $C$ about $c$ translates to a ball of the same radius in $U$ about $c-c_0$, so $U$ is open. Fix $r>0$ with $B(0,r)\subseteq U$. [given, algebra]

2.1 Let $p=p_U$. Its gauge is finite and sublinear on the underlying real space, nonnegative everywhere, and bounded above by $\|x\|/r$. Because $v\notin U=\{p<1\}$, $p(v)\ge1$. [step 1.1, F2]

3.1 The set $M=\mathbb Rv$ is a real linear subspace. Since $v\ne0$, $tv$ has a unique real coefficient $t$, and $g(tv)=t$ defines a real-linear functional. For $t\ge0$, $g(tv)=t\le tp(v)=p(tv)$; for $t<0$, $g(tv)=t<0\le p(tv)$. This checks domination on every element of M, including zero. [step 1.1, step 2.1, algebra]

4.1 Applying relative dominated extension on the underlying real $X$ gives real-linear $F$ extending $g$ and satisfying $-p(-x)\le F(x)\le p(x)$. The two gauge upper bounds imply $-\|x\|/r\le F(x)\le\|x\|/r$, so $|F(x)|\le\|x\|/r$. Also $F(v)=1$. [step 2.1, step 3.1, F1]

5.1 Over $\mathbb R$ put $f=F$. Over $\mathbb C$ put $f(x)=F(x)-iF(ix)$; reconstruction gives complex linearity and real part $F$, and $|f(x)|\le |F(x)|+|F(ix)|\le2\|x\|/r$. Thus in either field $f\in X^*$, and it is nonzero because $\operatorname{Re}f(v)=1$. The explicit bounds give continuity: $|f(x)-f(y)|\le (2/r)\|x-y\|$ in both cases. [step 4.1, F3, algebra]

6.1 For every $c\in C$, $c-c_0\in U$, so $F(c-c_0)\le p(c-c_0)<1=F(z-c_0)$. Adding $F(c_0)$ gives $\operatorname{Re}f(c)=F(c)<F(z)=\operatorname{Re}f(z)$, as required. [step 1.1, step 2.1, step 4.1, step 5.1, algebra] ∎

## Source notes

Brezis Lemma 1.3, pp.6–7; Teschl Theorems 5.2–5.3, pp.138–139.

## Remarks

The continuity estimate uses both $p(x)$ and $p(-x)$. It does not infer $|F(x)|\le p(x)$ from $F(x)\le p(x)$.
