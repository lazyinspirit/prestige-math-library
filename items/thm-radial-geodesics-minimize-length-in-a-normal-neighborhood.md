---
id: "thm-radial-geodesics-minimize-length-in-a-normal-neighborhood"
kind: "theorem"
title: "Radial geodesics minimize length in a normal neighborhood"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-gauss-lemma","cor-polar-form-of-the-metric-in-normal-coordinates","def-riemannian-speed-and-length","thm-intermediate-value","thm-heine-borel-r","lem-closed-subset-of-a-compact-space-is-compact","thm-extreme-value-r","thm-newton-leibniz-with-interior-derivative","thm-monotonicity-of-the-integral","thm-linearity-of-the-integral","thm-nonnegative-continuous-with-zero-integral-vanishes","cor-zero-derivative-implies-constant","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 18.1.3(2)--(3) and proof, pp.135--137
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Suppose $\exp_p:B_\rho(0_p)\to U$ is a diffeomorphism, where $\rho>0$, and let $v\in B_\rho(0_p)$. The radial geodesic $\gamma_v(t)=\exp_p(tv)$, $0\le t\le1$, has length $|v|_{g_p}$ and minimizes length among all piecewise smooth curves in $U$ from $p$ to $\exp_p(v)$.

If $v\ne0$, equality holds precisely for the monotone radial reparametrizations
$$c(t)=\exp_p\left(r(t)\frac v{|v|_{g_p}}\right),$$
where $r$ is continuous, piecewise smooth, nondecreasing, and has endpoint values $0$ and $|v|_{g_p}$. For $v=0$, equality holds precisely for the constant curve.

## Facts & Assumptions

**Given:** The normal ball, vector, and competitor curves in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[thm-gauss-lemma]] gives unit radial speed, and [[cor-polar-form-of-the-metric-in-normal-coordinates]] gives $|c'|_g^2=(r')^2+|c'_\perp|_g^2$ wherever $c\ne p$. [[def-riemannian-speed-and-length]] defines length by finitely many speed integrals.

[F2] [[thm-intermediate-value]] supplies crossings of intermediate radial levels. A closed subset of the compact interval from [[thm-heine-borel-r]] is compact by [[lem-closed-subset-of-a-compact-space-is-compact]], and [[thm-extreme-value-r]] supplies its last point.

[F3] [[thm-newton-leibniz-with-interior-derivative]], [[thm-monotonicity-of-the-integral]], and [[thm-linearity-of-the-integral]] give $\int|r'|\ge|r(b)-r(a)|$ on a piecewise smooth interval. [[thm-nonnegative-continuous-with-zero-integral-vanishes]] detects equality on each smooth piece, and [[cor-zero-derivative-implies-constant]] makes a zero-derivative angular direction constant.

## Proof

**Proof technique:** direct.

1.1 Write $R=|v|_{g_p}$. By radial norm preservation in [F1], $|\dot\gamma_v(t)|_g=R$, so $L(\gamma_v)=\int_0^1R\,dt=R$. [F1, given]

1.2 Let $c:[a,b]\to U$ be piecewise smooth with $c(a)=p$, $c(b)=\exp_p(v)$, and put $r(t)=|\exp_p^{-1}(c(t))|_{g_p}$. Assume first $R>0$ and fix $0<\delta<R$. By [F2], the set $K_\delta=\{t:r(t)=\delta\}$ is nonempty; it is closed in the compact interval and hence compact, so [F2] gives its greatest element $\tau_\delta$. Then $r(t)>\delta$ for $t>\tau_\delta$: otherwise continuity and $r(b)=R>\delta$ would produce a later point of $K_\delta$. Thus $c$ avoids $p$ on $[\tau_\delta,b]$. [F2, given]

2.1 On every smooth piece of $[\tau_\delta,b]$, [F1] gives $|c'|_g\ge|r'|$. Summing the monotone integral inequalities and using [F3] gives $$L(c)\ge L(c|_{[\tau_\delta,b]})\ge\int_{\tau_\delta}^b|r'|\,dt\ge R-\delta.$$ Since this holds for every $0<\delta<R$, $L(c)\ge R$. If $R=0$, nonnegativity already gives $L(c)\ge0=L(\gamma_v)$. This proves minimality without differentiating $r$ at a visit to $p$. [F1, F3, step 1.1, step 1.2]

2.2 Conversely, for a curve of the displayed form, [F1] gives $|c'|_g=|r'|=r'$ on each smooth piece. Newton--Leibniz and finite additivity in [F3] give $L(c)=R$, including any constant pauses. If $R=0$, equality means $L(c)=0$; [F3] forces the continuous speed to vanish on each smooth piece, so $c$ is constant. [F1, F3, step 1.1]

3.1 The same argument proves the auxiliary estimate $L(d)\ge|r(d_1)-r(d_0)|$ for any piecewise smooth $d:[d_0,d_1]\to U$: if $d$ avoids $p$, integrate the polar inequality directly; if it meets $p$, split there and apply step 2.1 to the reversed first part and the second part. [F1, F3, step 2.1]

4.1 Suppose now $R>0$ and $L(c)=R$. For any $t$, step 2.1 on the prefix and step 3.1 on the suffix give $$R=L(c|_{[a,t]})+L(c|_{[t,b]})\ge r(t)+|R-r(t)|.$$ Hence $r(t)\le R$, and equality forces the two lower bounds to be equal. If $a<u<w<b$ and $c$ avoids $p$ on $[u,w]$, applying the prefix, middle, and suffix bounds gives $$R\ge r(u)+|r(w)-r(u)|+R-r(w).$$ Therefore $r(w)\ge r(u)$ and equality holds in the middle polar length estimate. [F1, step 2.1, step 3.1]

5.1 On a closed subinterval of one smooth piece on which $c\ne p$, step 4.1 and Newton--Leibniz give zero integral for the continuous nonnegative function $|c'|_g-r'$. By [F3] it vanishes identically. The polar identity in [F1] then gives $c'_\perp=0$ and $r'\ge0$. Writing $\exp_p^{-1}(c)=r\theta$ with $|\theta|=1$, invertibility of $d\exp_p$ gives $r\theta'=0$; hence [F3] makes $\theta$ constant on every nonzero component. A component that later returned to $p$ would have positive nondecreasing $r$ tending to zero, which is impossible. Thus $c$ is constant at $p$ until its final nonzero component, and there $\theta=v/R$ and $r$ is nondecreasing. This proves the stated necessary form. [F1, F3, step 4.1]

6.1 Steps 2.1, 5.1, and 2.2 prove minimality and both equality directions. In dimension zero only $v=0$ occurs; dimension one permits the two radial directions and the proof fixes the one containing $v$. Empty $M$ has no centre. The open-ball condition excludes $|v|=\rho$, while $v=0$, visits to the centre, subdivision endpoints, and constant pauses were treated explicitly. Assumption [A1] is used exactly through [F1] for the exponential and polar structures; last hitting times are unique maxima, and no further choice is made. [A1, F1, F2, F3, step 2.1, step 5.1, step 2.2] ∎
