---
id: lem-fekete-diameters-decrease
kind: lemma
title: "Monotonicity of the Fekete diameters and the transfinite diameter"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-fekete-points-and-transfinite-diameter
  - lem-complex-conjugation-and-modulus-laws
  - thm-nth-roots-exist
  - lem-power-monotone
  - cor-monotone-converges-iff-bounded
  - lem-limit-preserves-order
  - def-infimum
  - thm-infimum-property
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Fekete diameters are decreasing, printed p. 168"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§5, Lemma 58, decreasing Fekete diameter, PDF p. 40"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $K\subseteq\mathbb C$ be nonempty and compact, with the Fekete diameters
$\delta_n(K)$ and transfinite diameter $\tau(K)$ of
[[def-fekete-points-and-transfinite-diameter]]. Then

$$\delta_{n+1}(K)\le\delta_n(K)\qquad(n\ge2),$$

the sequence $(\delta_n(K))_{n\ge2}$ therefore converges, and

$$\tau(K)=\inf_{n\ge2}\delta_n(K)=\lim_{n\to\infty}\delta_n(K).$$

No choice principle is used.

## Facts & Assumptions

**Given:** a nonempty compact $K\subseteq\mathbb C$ and the quantities
$D_n$, $\Delta_n$, $\delta_n(K)$, $\tau(K)$ and Fekete tuples of
[[def-fekete-points-and-transfinite-diameter]].

[F1] For $n\ge2$ and $z=(z_1,\dots,z_n)\in K^n$ one has
$\Delta_n(z)=\prod_{i<j}(z_i-z_j)$ and
$D_n(z)=|\Delta_n(z)|=\prod_{i<j}|z_i-z_j|\in[0,\infty)$; the maximum of
$D_n$ over the nonempty compact $K^n$ is attained and
$\delta_n(K)=\bigl(\max_{K^n}D_n\bigr)^{2/[n(n-1)]}\in[0,\infty)$; and
$\tau(K)=\inf_{n\ge2}\delta_n(K)$ ([[def-fekete-points-and-transfinite-diameter]]).
In particular $D_n(z)\le\delta_n(K)^{\binom n2}$ for every $z\in K^n$,
because $t\mapsto t^{2/[n(n-1)]}$ is increasing on $[0,\infty)$ and
$1/[n(n-1)]\cdot 2=2/[n(n-1)]$ is the reciprocal of $\binom n2=\tfrac{n(n-1)}2$.

[F2] $|zw|=|z|\,|w|$ and $|z|\ge0$ for all $z,w\in\mathbb C$, and $|z|=0$
exactly for $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F3] Every $a\ge0$ has a unique $n$-th root $a^{1/n}\ge0$, the map
$t\mapsto t^n$ is strictly increasing on $[0,\infty)$ for $n\ge1$, and for
$x,y\ge0$ one has $x^{1/n}\le y^{1/n}$ exactly when $x\le y$
([[thm-nth-roots-exist]], [[lem-power-monotone]]).

[F4] A monotone sequence of reals converges if and only if it is bounded
([[cor-monotone-converges-iff-bounded]]).

[F5] If a sequence of reals converges to $L$ and $x_k\le c$ for all $k$, then
$L\le c$; if $x_k\ge c$ for all $k$, then $L\ge c$
([[lem-limit-preserves-order]]).

[F6] If $S\subseteq\mathbb R$ is nonempty and bounded below, then $\inf S$ is a
lower bound of $S$ and no larger lower bound exists; in particular a lower
bound $\ell$ of $S$ equals $\inf S$ when every lower bound is $\le\ell$
([[def-infimum]], [[thm-infimum-property]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge2$ and a tuple $z=(z_1,\dots,z_{n+1})\in K^{n+1}$. For $k\in\{1,\dots,n+1\}$ let $A_k$ be the $n$-tuple obtained by deleting the $k$-th entry of $z$. Each $A_k$ lies in $K^n$, so by [F1] $D_n(A_k)$ is at most $\delta_n(K)^{\binom n2}$; that is, $D_n(A_k)\le\delta_n(K)^{n(n-1)/2}$. [F1, given]

2.1 Expanding the factors by [F1] and [F2] gives $\prod_{k=1}^{n+1}D_n(A_k)=\prod_{k=1}^{n+1}\prod_{i<j,\,i,j\ne k}|z_i-z_j|$; the unordered pair $\{i,j\}$ contributes the factor $|z_i-z_j|$ for exactly those $k\notin\{i,j\}$, that is for $n-1$ of the $n+1$ indices $k$, so the last product equals $\prod_{i<j}|z_i-z_j|^{\,n-1}=D_{n+1}(z)^{n-1}$, the last equality again by [F1] and [F2]. [step 1.1, F1, F2]

3.1 Multiplying the $n+1$ inequalities of step 1.1 and substituting step 2.1 yields $D_{n+1}(z)^{n-1}\le\delta_n(K)^{(n+1)n(n-1)/2}$ for every $z\in K^{n+1}$. Taking the maximum over $z\in K^{n+1}$ and using that $t\mapsto t^{n-1}$ is increasing on $[0,\infty)$ together with [F3] gives $\delta_{n+1}(K)^{(n+1)n(n-1)/2}\le\delta_n(K)^{(n+1)n(n-1)/2}$, since $\binom{n+1}2(n-1)=\tfrac{(n+1)n(n-1)}2$ is the exponent obtained from $D_{n+1}(z)\le\delta_{n+1}(K)^{\binom{n+1}2}$. The common exponent $E:=\tfrac{(n+1)n(n-1)}2$ is a positive integer (as $n\ge2$), so [F3] applied to the two nonnegative numbers $\delta_{n+1}(K)$ and $\delta_n(K)$ gives $\delta_{n+1}(K)\le\delta_n(K)$. [step 2.1, F1, F3, algebra]

4.1 The sequence $(\delta_n(K))_{n\ge2}$ is nonincreasing by step 3.1 and bounded below by $0$ because $\delta_n(K)\ge0$ by [F1]; hence it converges, with limit $L\in\mathbb R$, by [F4]. Since $\delta_m(K)\le\delta_n(K)$ for all $m\ge n\ge2$, [F5] applied to the tail from $n$ gives $L=\lim_m\delta_m(K)\le\delta_n(K)$ for every $n\ge2$, so $L$ is a lower bound of $\{\delta_n(K):n\ge2\}$; and if $\ell$ is any lower bound of that set, then $\delta_n(K)\ge\ell$ for every $n$ and [F5] gives $L\ge\ell$. Thus $L$ is the greatest lower bound and $L=\inf_{n\ge2}\delta_n(K)=\tau(K)$ by [F6] and [F1]. [step 3.1, F1, F4, F5, F6]

5.1 Combining steps 3.1 and 4.1, $\delta_{n+1}(K)\le\delta_n(K)$ for every $n\ge2$ and $\tau(K)=\lim_{n\to\infty}\delta_n(K)$, which is the statement. [step 3.1, step 4.1] ∎

## Remarks

**Where the normalization enters.** The exponent $2/[n(n-1)]$ in the definition
of $\delta_n$ is exactly what makes the exponents on the two sides of step 3.1
agree: the pair-count $\binom{n+1}2(n-1)$ of the $(n+1)$-tuple side equals the
pair-count $\binom n2(n+1)$ of the $n$-tuple side, both equal to
$\tfrac{(n+1)n(n-1)}2$.

**Choice.** The argument uses only real algebra and order-completeness facts; no
choice principle is involved, and the extremal tuples are maxima of continuous
functions on compact product spaces supplied by
[[def-fekete-points-and-transfinite-diameter]].
