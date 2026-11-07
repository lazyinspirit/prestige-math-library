---
id: lem-truncated-perron-kernel
kind: lemma
title: "The truncated Perron kernel"
status: published
origin: pipeline
deps: [lem-perron-kernel, thm-residue-theorem-null-homologous-cycle, thm-newton-leibniz-with-interior-derivative]
proof_strategy: contour
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, Lemma 10.2"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

Let $I(y,T)=(2\pi i)^{-1}\int_{c-iT}^{c+iT}y^sds/s$ and let $\delta(y)$ be
the three-valued kernel of [[lem-perron-kernel]].  For $c,y,T>0$,
$$ |I(y,T)-\delta(y)|<\begin{cases}y^c\min\{1,(T|\log y|)^{-1}\},&y\ne1,\\c/T,&y=1.\end{cases} $$

## Facts & Assumptions

**Given:** $c,y,T>0$, and $\delta(y)=0,1/2,1$ according as $y<1,y=1,y>1$ ([[lem-perron-kernel]]).

[F1] The residue theorem applies to finite closed piecewise smooth contours enclosing the simple pole of $e^{us}/s$ at $0$ ([[thm-residue-theorem-null-homologous-cycle]]). Choose its bounded open neighbourhood to contain no other pole.

[F2] Newton–Leibniz evaluates continuously differentiable real integrands on compact intervals ([[thm-newton-leibniz-with-interior-derivative]]); elementary exponential integrals below follow by taking increasing finite intervals and their explicit limits.

## Proof

**Proof technique:** finite circular and rectangular contours.

1.1 Put $u=\log y$, $r=(c^2+T^2)^{1/2}$, and $\theta=\arctan(T/c)\in(0,\pi/2)$. If $u<0$, close the vertical segment by the right arc of the circle $|s|=r$, whose points have $\Re s\ge c$. Its circular segment contains no pole. Since $|ds/s|$ is the angular differential, [F1] gives $|I(y,T)|\le y^c\theta/\pi<y^c$. If $u>0$, close by the left arc of the same circle. It encloses $0$ once positively, and its arc has $\Re s\le c$ and angular length $2\pi-2\theta$. Thus $|I(y,T)-1|\le y^c(1-\theta/\pi)<y^c$. [given, F1, algebra]

2.1 If $u>0$, close the segment by a rectangle with left edge $\Re s=-A$, $A>0$. Its left-edge integral is bounded by $2Te^{-Au}/A$ and tends to zero. On either horizontal edge $|s|\ge T$, so the two horizontal integrals, after division by $2\pi$, have total modulus at most $$(\pi T)^{-1}\int_{-\infty}^c e^{u\sigma}\,d\sigma=\frac{y^c}{\pi Tu}<\frac{y^c}{T|u|}.$$ The enclosed residue is $1$. For $u<0$, close by a rectangle with right edge $\Re s=A>c$. It contains no pole; its right-edge integral tends to zero, and the horizontal bound is $(\pi T)^{-1}\int_c^\infty e^{u\sigma}\,d\sigma=y^c/(\pi T|u|)$. Combining either bound with step 1.1 gives the stated minimum for $y\ne1$. [F1, F2, step 1.1, algebra]

3.1 If $y=1$, parametrizing $s=c+it$ and pairing $t$ and $-t$ gives $$I(1,T)=\frac1\pi\int_0^T\frac{c}{c^2+t^2}\,dt=\frac1\pi\arctan(T/c).$$ Hence $|I(1,T)-1/2|=\pi^{-1}\arctan(c/T)<c/T$, because $\arctan v=\int_0^v(1+w^2)^{-1}dw<v$ for $v>0$. [given, F2, algebra] ∎
