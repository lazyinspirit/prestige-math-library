---
id: lem-tgr-annular-radial-integration
kind: lemma
title: "Radial integration over a bounded Euclidean shell"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-jordan-boundary-criterion
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-injective-c-one-images-of-compact-jordan-sets-are-jordan
  - thm-extreme-value-metric
dependency_roles:
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-injective-c-one-images-of-compact-jordan-sets-are-jordan: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Let $0\le a<b<\infty$ and let $F:[a,b]\to\mathbb R$ be continuous. The closed radial shell $A_{a,b}=\{x\in\mathbb R^3:a\le|x|\le b\}$ is Jordan measurable, and
$$\int_{A_{a,b}}F(|x|)\,dx=4\pi\int_a^b F(r)r^2\,dr.$$
The angular area measure used below is the pushforward of $\sin\theta\,d\theta\,d\phi$ on $[0,\pi]\times[0,2\pi]$ under $(\theta,\phi)\mapsto(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$; its total mass is $4\pi$.

## Facts & Assumptions

**Given:** A compact radial interval $[a,b]\subset[0,\infty)$ and a continuous real function $F$.

[F1] A bounded subset of Euclidean space is Jordan measurable exactly when its boundary has content zero. ([[thm-jordan-boundary-criterion]])

[F2] Continuous real functions on compact Jordan sets are Riemann integrable. ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]])

[F3] For an injective $C^1$ map with invertible derivative on an open neighborhood of a compact Jordan set, change of variables holds with the absolute Jacobian determinant. ([[thm-change-of-variables-for-compact-jordan-sets]])

[F4] Such a map sends a compact Jordan set to a compact Jordan image. ([[thm-injective-c-one-images-of-compact-jordan-sets-are-jordan]])

[F5] A continuous real function on a compact metric space is bounded. ([[thm-extreme-value-metric]])

## Proof

1.1 Fix a sphere of radius $r>0$. At least one coordinate of every point on it has absolute value at least $r/\sqrt3$. On each of the six patches where a specified coordinate is largest in absolute value and has a specified sign, write that coordinate as $\pm\sqrt{r^2-u^2-v^2}$ over a bounded disk with $r^2-u^2-v^2\ge r^2/3$. The graph gradient is uniformly bounded. A grid of squares of side $\delta$ covers the disk with $O(\delta^{-2})$ squares; the graph over each square fits in a rectangular box of base area $\delta^2$ and height $O(\delta)$, so the total covering volume is $O(\delta)$. Thus the sphere has content zero. The sphere at radius zero is a point and is covered by one cube of arbitrarily small volume. Since $\partial A_{a,b}$ is contained in the union of the spheres of radii $a$ and $b$, [F1] makes the bounded shell Jordan measurable. [F1, algebra]

2.1 If $a=b$, then $A_{a,b}$ is a sphere of Jordan content zero by step 1.1, so both integrals are zero. Now assume $0<a<b$. For $0<\varepsilon<\min\{\pi/4,(b-a)/2\}$ put $K_\varepsilon=[a,b]\times[\varepsilon,\pi-\varepsilon]\times[\varepsilon,2\pi-\varepsilon]$ and $\Psi(r,\theta,\phi)=(r\sin\theta\cos\phi,r\sin\theta\sin\phi,r\cos\theta)$. On the open domain with $r>0$, $0<\theta<\pi$ and $0<\phi<2\pi$, $\Psi$ is injective and $C^1$ with determinant $r^2\sin\theta>0$; its inverse is given by radius, polar angle and the unique azimuth in $(0,2\pi)$. The compact set $K_\varepsilon$ is Jordan, and [F2] makes $x\mapsto F(|x|)$ integrable on $\Psi(K_\varepsilon)$. Applying [F3] gives
$$\int_{\Psi(K_\varepsilon)}F(|x|)\,dx=\left(\int_a^bF(r)r^2\,dr\right)\left(\int_\varepsilon^{\pi-\varepsilon}\sin\theta\,d\theta\right)(2\pi-2\varepsilon).$$
[F2, F3, F4, algebra]

3.1 The missing part of $A_{a,b}$ outside $\Psi(K_\varepsilon)$ is contained in the union of the polar-cap box $[-b\sin\varepsilon,b\sin\varepsilon]^2\times[-b,b]$ and the azimuth-seam box $[-b,b]\times[-b\sin\varepsilon,b\sin\varepsilon]\times[-b,b]$. Their total volumes are at most $8b^3(\varepsilon^2+\varepsilon)$, which tends to zero. Since $F$ is bounded, the difference between its integral on the whole shell and on $\Psi(K_\varepsilon)$ tends to zero. Letting $\varepsilon\downarrow0$ in step 2.1 gives the formula and the angular factor $2\cdot2\pi=4\pi$. If $a=0$, first apply the result to $[\eta,b]$ and then let $\eta\downarrow0$; the omitted ball lies in $[-\eta,\eta]^3$ and contributes at most $8\eta^3\sup_{[0,b]}|F|$, while the absolute value of the omitted radial integral is at most $\sup_{[0,b]}|F|\eta^3/3$. Both tend to zero. [F1, F2, F3, F4, F5, step 2.1, algebra] ∎
