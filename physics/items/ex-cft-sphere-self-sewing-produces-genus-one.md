---
id: ex-cft-sphere-self-sewing-produces-genus-one
kind: example
title: Self-sewing two punctures of the sphere gives genus one
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-riemann-surface-and-holomorphic-atlas
  - def-cft-plumbing-and-sewing-parameter
  - lem-cft-plumbing-local-smoothing-node
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
  - thm-heine-borel-rn
  - thm-path-connected-implies-connected
  - lem-q-and-irrationals-dense-r
  - thm-rationals-countable
  - def-euclidean-inner-product
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  lem-cft-plumbing-local-smoothing-node: mathematical-premise
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-rationals-countable: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
axiom_use: "Assume AC exactly for the imported topological genus convention used in step 4.1; the coordinate, plumbing, and annulus-gluing calculations use no choice principle."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§1.2 and §4.1 for the local plumbing equation and disjoint annulus sewing convention."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§6.4.1, printed pp. 145–147, for genus-one torus modulus context only; the local topological verification is supplied below."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Write $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ and $T^2=S^1\times S^1$. Let $S^2=\{(x,y,t)\in\mathbb R^3:x^2+y^2+t^2=1\}$ with its subspace topology, and let $N=(0,0,1)$ and $S=(0,0,-1)$. Give $S^2\setminus\{N\}$ the coordinate $z=(x+iy)/(1-t)$ and $S^2\setminus\{S\}$ the coordinate $w=(x-iy)/(1+t)$; their inverse maps are $z\mapsto(2\operatorname{Re}z/(1+|z|^2),2\operatorname{Im}z/(1+|z|^2),(|z|^2-1)/(1+|z|^2))$ and $w\mapsto(2\operatorname{Re}w/(1+|w|^2),-2\operatorname{Im}w/(1+|w|^2),(1-|w|^2)/(1+|w|^2))$. The two charts have transition $w=1/z$ on their overlap. Mark the south and north poles, respectively, so $z=0$ and $w=0$. Fix radii $r,s>0$ with $rs<1$, and use the inverse stereographic charts on the disjoint coordinate disks $|z|<r$ and $|w|<s$. For a real plumbing parameter $q$ with $0<q<rs$, remove the interiors of these disks and sew their boundary collars by the local relation $zw=q$. The resulting compact connected Riemann surface is homeomorphic to $S^1\times S^1$ and has topological genus one. This is a mathematical plumbing example; it asserts no CFT, path integral, or global compactification result.

## Example references

[[def-cft-pointed-analytic-worldsheet]]

[[def-riemann-surface-and-holomorphic-atlas]]

[[def-cft-plumbing-and-sewing-parameter]]

[[lem-cft-plumbing-local-smoothing-node]]

[[def-genus-and-euler-characteristic-compact-riemann-surface]]

[[def-axiom-of-choice]]

[[thm-heine-borel-rn]]

[[thm-path-connected-implies-connected]]

[[lem-q-and-irrationals-dense-r]]

[[def-euclidean-inner-product]]

## Facts & Assumptions

**Given:** The unit sphere $S^2\subset\mathbb R^3$, the two stereographic coordinates in the Example, radii $r,s>0$ with $rs<1$, a real parameter $q$ with $0<q<rs$, and the indicated plumbing construction.

[F1] [[def-riemann-surface-and-holomorphic-atlas]]: a Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas.

[F2] [[def-cft-plumbing-and-sewing-parameter]]: the sewing fixture has equation $zw=q$, and its two coordinate annuli are identified through $w=q/z$.

[F3] [[lem-cft-plumbing-local-smoothing-node]]: when $q\ne0$, the local plumbing fiber is a smooth complex annulus.

[F4] [[def-genus-and-euler-characteristic-compact-riemann-surface]]: under AC, the genus of a compact connected Riemann surface is the number $g$ for which its topological type is $\#_gT^2$; in particular the torus $S^1\times S^1=T^2$ has genus one.

[F5] [[thm-heine-borel-rn]]: a closed and bounded subset of finite-dimensional Euclidean space is compact.

[F6] [[thm-path-connected-implies-connected]]: a path-connected topological space is connected.

[F7] [[def-euclidean-inner-product]]: the norm and topology on $\mathbb R^3$ are the standard Euclidean ones.

[F8] [[lem-q-and-irrationals-dense-r]]: $\mathbb Q$ is dense in $\mathbb R$.

[F9] [[thm-rationals-countable]]: $\mathbb Q$ is countable.

[A1] [[def-axiom-of-choice]]: assume the Axiom of Choice only where required by the topological classification underlying the genus convention in [F4].

## Verification

1.1 The set $S^2$ is the inverse image of $\{1\}$ under the continuous polynomial $x^2+y^2+t^2$, so it is closed; it is also bounded. Thus [F5] makes it compact. Distinct points have disjoint relative balls of radius less than half their Euclidean distance, so it is Hausdorff. To check second countability, let $U$ be a relative open neighborhood of $p\in S^2$ and choose $\epsilon>0$ with $B(p,\epsilon)\cap S^2\subseteq U$. By density in [F8], for each of the three coordinates choose a rational within $\epsilon/8$ of the corresponding coordinate of $p$; the resulting $a\in\mathbb Q^3$ satisfies $\|a-p\|<\sqrt3\epsilon/8<\epsilon/4$. Since $\|a-p\|<\epsilon-\|a-p\|$, density in [F8] gives $\rho\in\mathbb Q_{>0}$ with $\|a-p\|<\rho<\epsilon-\|a-p\|$. The rational ball $B(a,\rho)\cap S^2$ contains $p$; if $x\in B(a,\rho)$, then $\|x-p\|\leq\|x-a\|+\|a-p\|<\rho+\|a-p\|<\epsilon$, so the ball lies in $U$. The collection of these balls is countable by [F9]: enumerate $\mathbb Q$ and its positive subset by natural indices, then enumerate the resulting finite tuples in $\mathbb N^4$ by increasing coordinate sum. It is therefore a countable base. The sphere is path-connected: if $p,p'\in S^2$ and $p'\ne-p$, normalize the segment $(1-u)p+up'$ for $u\in[0,1]$, which never vanishes; if $p'=-p$, take the least $k\in\{1,2,3\}$ for which the standard basis vector $e_k$ is not parallel to $p$, and put $v=(e_k-\langle e_k,p\rangle p)/\|e_k-\langle e_k,p\rangle p\|$. Such $k$ exists because the three basis vectors span $\mathbb R^3$ while $\mathbb Rp$ is one-dimensional; this $v$ is a unit vector perpendicular to $p$. Concatenating the normalized segments from $p$ to $v$ and from $v$ to $p'$ gives a path. Thus [F6] makes $S^2$ connected. The inverse formulas in the Example show that both stereographic maps are charts covering the sphere; on the overlap their transition is $w=1/z$, holomorphic with holomorphic inverse. They form a holomorphic atlas satisfying [F1], so the starting object is a compact connected Riemann surface. [given, F1, F5, F6, F7, F8, F9, algebra, construct]

2.1 On the overlap, $|w|=|z|^{-1}$. Thus a point cannot satisfy both $|z|<r$ and $|w|<s$, since that would give $1/s<|z|<r$ while $r<1/s$. The complement of the two open disks is the closed annulus $A_0=\{r\le |z|\le 1/s\}$. The nonzero plumbing fixture is the closed annulus $A_q=\{q/s\le |z|\le r\}$, because $q>0$ and $w=q/z$. Both are compact, and the fixture boundaries are attached to the corresponding boundaries of $A_0$ using equal $z$ at the first seam and equal $w$ at the second. By [F2]–[F3], the transition across the second coordinate description is the holomorphic map $w=q/z$ with inverse $z=q/w$ on neighborhoods where both coordinates are nonzero; the first seam uses the same coordinate $z$. Thus the quotient charts form a holomorphic atlas. The two annuli are connected and are glued along both boundary circles, so the resulting surface is compact, connected, and has no boundary. [given, F2, F3, step 1.1, algebra]

3.1 Parameterize each annulus by its angular coordinate and a radial interval. At the $z$ seam the angular coordinates agree. At the $w$ seam, equality of $w$ and the relations $z_{A_0}=1/w$ and $z_{A_q}=q/w$ make the angular coordinates agree as well, because $q$ is positive real. Hence the annulus angular coordinates glue to one circle coordinate. The two radial intervals, with their corresponding endpoints identified, are explicitly the semicircles $u\mapsto (\cos\pi u,\sin\pi u)$ and $u\mapsto(\cos\pi u,-\sin\pi u)$. These maps agree at the identified endpoints, have disjoint interiors, and cover $S^1$; they induce a continuous bijection from the compact quotient of the intervals to the Hausdorff space $S^1$, hence a homeomorphism. Call this interval quotient $Q$. Each annulus is homeomorphic to $S^1$ times its radial interval. Since the seam identifications preserve the angular coordinate and identify exactly the corresponding radial endpoints, the map from the disjoint union $S^1\times(I_0\sqcup I_q)$ to $S^1\times Q$ descends to a continuous bijection from the sewn quotient to $S^1\times Q$. The sewn quotient is compact by step 2.1, and $S^1\times Q$ is Hausdorff, so this bijection is a homeomorphism. Since $Q\cong S^1$, the sewn surface is homeomorphic to $S^1\times S^1$. As a subspace of $\mathbb R^4$, it is Hausdorff. Rational balls form a countable base for $\mathbb R^4$: density [F8] gives a rational center within $\epsilon/4$ of any point in a given open ball, and then a rational radius strictly between that distance and the remaining radius; countability follows from [F9]. The subspace therefore is second-countable, so the charts from step 2.1 make it a Riemann surface. [given, F7, F8, F9, step 2.1, construct, algebra]

4.1 By [F4] and [A1], the sewn compact connected Riemann surface, being homeomorphic to $T^2$, has genus $g=1$. [given, F4, A1, step 3.1] ∎

## Fundamental-domain diagram

The square has horizontal coordinate $u$ and vertical coordinate $\theta$. Opposite vertical edges identify the two radial seams pointwise at equal $\theta$; opposite horizontal edges identify the angular endpoints at equal $u$. The proof uses the explicit annulus coordinates, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.2]
  \draw (0,0) rectangle (2,2);
  \draw[->] (0,1) -- (0,1.7) node[above] {$\theta$};
  \draw[->] (2,1) -- (2,1.7) node[above] {$\theta$};
  \draw[->] (0.5,0) -- (1.2,0) node[below] {$u$};
  \draw[->] (0.5,2) -- (1.2,2) node[above] {$u$};
  \node at (1,1) {$S^1\times S^1$};
\end{tikzpicture}
```
