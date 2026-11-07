---
id: lem-waring-major-arc-phase-transference
kind: lemma
title: "The beta-dependent transference bound for a Waring phase sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-real-power
  - def-common-divisor-and-gcd
  - def-coprime
  - def-divides-in-z
  - lem-divisibility-basic
  - cor-gcd-quotients-coprime
  - lem-coprime-criterion
  - thm-logarithm-slower-than-every-positive-power
  - lem-waring-rational-arc-spacing-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, transference estimate (10.7), printed p. 1619; the argument refers to a standard principle without proving it there"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Weyl differencing background, printed pp. 28–30; no beta-dependent transfer proof is supplied"
---

## Statement

Let $k\ge2$ and $X\ge2$ be integers. For an integer $q$ with $1\le q\le X$, an integer $a$ whose only positive common divisor with $q$ is $1$, and a real $\alpha$ satisfying $\Delta:=|q\alpha-a|\le X^{1-k}$, put $\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$. For every $\varepsilon>0$ there is a constant $C_{k,\varepsilon}$, independent of $X,q,a,\alpha,\theta$, such that for every real $\theta$,
$$\sum_{z=1}^{X}\min\!\left(X^{k-1},\|kz\alpha+\theta\|_{\mathbb T}^{-1}\right)\le C_{k,\varepsilon}\left(X^{k-1+\varepsilon}+\frac{X^{k+\varepsilon}}{q+X^k\Delta}\right),$$
where a zero distance contributes $X^{k-1}$.

## Statement references

[Wooley, §10, equation (10.7)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §5.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** The parameters in the Statement, the finite-cap convention for zero torus distance, and the rational-arc spacing estimate used for the exact-rational case.

[F1] If $|\beta-b/r|\le A/r^2$ with $(b,r)=1$, then for $Y\ge1$ the sum $\sum_{z\le X}\min(Y,\|z\beta+\theta\|_{\mathbb T}^{-1})$ is $O_A((X/r+1)(Y+r\log(2r)))$ ([[lem-waring-rational-arc-spacing-bound]]).

[F2] For every $\varepsilon>0$, $\log(2X)\ll_\varepsilon X^\varepsilon$ for $X\ge2$, and positive real powers are defined ([[thm-logarithm-slower-than-every-positive-power]], [[def-real-power]]).

[F3] $g=\gcd(k,q)>0$, $g$ divides $k$ and $q$, and $\gcd(a,q)=1$ means every common divisor of $a$ and $q$ divides $1$ ([[def-common-divisor-and-gcd]], [[def-coprime]], [[def-divides-in-z]], [[lem-divisibility-basic]]).

[F4] If $g=\gcd(k,q)>0$, then $k/g$ and $q/g$ are coprime; coprimality is equivalent to the existence of a Bézout identity ([[cor-gcd-quotients-coprime]], [[lem-coprime-criterion]]).

## Proof

**Proof technique:** count near-zero visits in each rational residue class, retaining the nonzero drift, then sum finitely many dyadic levels.

1.1 Put $Y=X^{k-1}$, $g=\gcd(k,q)$, $r=q/g$, $u=k/g$, $b=ua$, and $\beta=k\alpha=b/r+d$. Then $1\le g\le k$ and $1\le r\le q\le X$. By [F4], $u,r$ are coprime; since $r\mid q$, [F3] gives that $a,r$ are coprime. Multiplying their two Bezout identities gives a Bezout identity for $ua,r$, so $b,r$ are coprime. In particular $bc\pmod r$ permutes all residue classes $c\pmod r$, including the sole class when $r=1$. Moreover $$|d|=\frac{k\Delta}{q},\qquad X|d|\le\frac{k}{q},\qquad r|d|=\frac{k\Delta}{g}\ge\Delta,$$ since $X\Delta\le X^{2-k}\le1$. These estimates allow either sign of $d$. [given, F3, F4, algebra, construct]

2.1 If $\Delta=0$, apply [F1] to $\beta=b/r$ with $A=1$. Since $r\le X$, $X/r\le kX/q$, and $Y\ge X$, its bound is $$\ll_k Y+\frac{XY}{q}+X\log(2X).$$ By [F2] this is at most a constant depending only on $k,\varepsilon$ times $X^{k-1+\varepsilon}+X^{k+\varepsilon}/q$, which is the required bound when $\Delta=0$. Hence it remains to consider $\Delta>0$. [step 1.1, F1, F2, algebra]

2.2 Assume $\Delta>0$ and, for $0<t\le1/2$, define $N(t)=|\{1\le z\le X:\|z\beta+\theta\|_{\mathbb T}\le t\}|$. If such a $z$ lies in class $c\pmod r$, then $$\|bc/r+\theta\|_{\mathbb T}\le t+|zd|\le t+k/q.$$ The equally spaced grid of $r$ points has at most $2r(t+k/q)+2\le2rt+2k+2$ points in this circular interval. Indeed split the interval at $0$ if it wraps; an interval of length $\ell$ contains at most $r\ell+1$ grid points. If the radius is at least $1/2$, the whole grid has $r\le2r(t+k/q)$ points instead. By the permutation in step 1.1, at most $O_k(rt+1)$ residue classes can contribute. This count is uniform in $\theta$. [step 1.1, given, algebra, construct]

3.1 In one residue class write its indices as $z_c+jr$, a list of at most $X/r+1\le2X/r$ terms. Modulo integers the phases form the real arithmetic progression $z_c\beta+\theta+jrd$, of step magnitude $h=r|d|\ge\Delta$ and total real span at most $X|d|\le k/q\le k$. At most $k+2$ integer-centered intervals $[m-t,m+t]$ can meet that span; each contains at most $1+2t/h$ terms. Thus the contribution of the class is at most $$\min\left(2X/r,(k+2)(1+2t/\Delta)\right)\ll_k1+\min(X/r,t/\Delta).$$ Multiply by the class count in step 2.2. With $m=\min(X/r,t/\Delta)$, the terms $rt$ and $rtm$ are each at most $Xt$, and $m\le k\min(X/q,t/\Delta)$. Consequently $$N(t)\ll_k1+Xt+\min(X/q,t/\Delta).\tag{*}$$ For $t>1/2$, the same bound follows from $N(t)\le X\le2Xt$, so $(*)$ holds for every $t>0$. [step 1.1, step 2.2, algebra]

4.1 Let $J$ be the least integer with $2^J\ge Y$; then $J\ge1$, $2^{J-1}<Y\le2^J$, and $J+1\ll_k\log(2X)$. For every $v\in[0,1/2]$, with the prescribed finite cap at $v=0$, $$\min(Y,v^{-1})\le2+\sum_{j=0}^{J}\frac{Y}{2^j}\,1_{\{v\le2^j/Y\}}.$$ For $v\le1/Y$ the first summand already supplies $Y$. Otherwise let $j_0$ be the least integer with $2^{j_0}\ge Yv$. Then $2^{j_0}<2Yv$, and the finite geometric tail from $j_0$ to $J$ is at least $v^{-1}-Y/2^J\ge v^{-1}-1$; the displayed extra $2$ suffices. Sum over the $X$ phases and apply $(*)$ from step 3.1 at $t=2^j/Y$. This gives $$\begin{aligned} \sum_{z=1}^X\min(Y,\|z\beta+\theta\|_{\mathbb T}^{-1}) &\ll_k 2X+2Y+(J+1)X+ \sum_{j=0}^{J}\min\left(\frac{XY}{q2^j},\frac1\Delta\right)\\ &\ll_k \log(2X)\left(Y+\min\left(\frac{XY}{q},\frac1\Delta\right)\right), \end{aligned}$$ using $X\le Y$ and bounding each term of the last finite sum by $\min(XY/q,1/\Delta)$. No infinite summation or limiting transfer is used. [step 1.1, step 3.1, F2, algebra]

5.1 For positive $\Delta$, elementary comparison of two positive numbers gives $$\min\left(\frac{XY}{q},\frac1\Delta\right)\le\frac{2XY}{q+XY\Delta}.$$ Insert this in step 4.1, use $XY=X^k$, and absorb $\log(2X)$ into $O_\varepsilon(X^\varepsilon)$ by [F2]. The result is exactly $$\ll_{k,\varepsilon}X^{k-1+\varepsilon}+\frac{X^{k+\varepsilon}}{q+X^k\Delta}.$$ Step 2.1 treats $\Delta=0$. All counts and constants were independent of $a,\alpha,\theta,X,q$ except for the allowed dependence on $k,\varepsilon$; $q=1$, $q=X$, $X=2$, either sign of $d$, and zero torus distances were included. This proves the full Statement. [step 2.1, step 4.1, F2, algebra] ∎

