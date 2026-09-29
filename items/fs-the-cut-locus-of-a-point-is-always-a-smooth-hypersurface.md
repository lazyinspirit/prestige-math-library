---
id: fs-the-cut-locus-of-a-point-is-always-a-smooth-hypersurface
kind: false-statement
title: The cut locus of a point is always a smooth hypersurface
status: draft
origin: pipeline
deps:
  - cor-euclidean-spheres-are-path-connected
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-codimension-and-hypersurface
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-embedded-submanifold-and-slice-chart
  - def-principal-inverse-sine-and-cosine
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-speed-and-length
  - ex-great-circles-as-round-sphere-geodesics
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-chain-rule
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - thm-hopf-rinow
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-principal-inverse-sine-and-cosine-derivatives
  - thm-sine-and-cosine-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, cut point and cut locus definition, printed p.190 (PDF label P206)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 15.3.1, printed pp.117-118 (PDF labels P124-125); §23.2, printed pp.167-169 (PDF labels P174-176)"
---

## Statement

Assuming countable choice through the declared global-geodesic and cut-locus
dependencies, the following universal claim is false: for every nonempty,
complete, connected, boundaryless Riemannian manifold $(M,g)$ and every
$p\in M$, the cut locus $\operatorname{Cut}(p)$ is a smooth hypersurface
(meaning an embedded submanifold of codimension one).

## Facts & Assumptions

**Given:** The inherited assumption is $\mathrm{AC}_\omega$, the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]). The cut-locus interface also assumes a complete, connected, boundaryless Riemannian manifold and defines the locus from finite cut-time endpoints ([[def-cut-point-and-cut-locus-of-a-point]]).

[F1] Under the declared $\mathrm{AC}_\omega$ assumption ([[def-countable-choice]]), Hopf--Rinow identifies metric completeness with geodesic completeness for a nonempty connected boundaryless Riemannian manifold ([[thm-hopf-rinow]]).

[F2] For $n\ge2$, the unit sphere $S^{n-1}\subset\mathbb R^n$ is path-connected and connected ([[cor-euclidean-spheres-are-path-connected]]).

[F3] The unit sphere $S^n\subset\mathbb R^{n+1}$ with its induced round metric is a smooth boundaryless Riemannian manifold. Its nonconstant geodesics have the form $$\gamma(t)=\cos(c(t-t_0))p+\sin(c(t-t_0))u,$$ where $|p|=|u|=1$, $\langle p,u\rangle=0$, and $c>0$; the displayed formula extends to all real $t$ and gives the maximal geodesic ([[ex-great-circles-as-round-sphere-geodesics]]).

[F4] On a connected Riemannian manifold, $$d_g(x,y)=\inf\{L_g(\alpha):\alpha\text{ is piecewise }C^1\text{ from }x\text{ to }y\},$$ and on each smooth piece the speed is $|\dot\alpha|_g$ and length is the sum of its speed integrals ([[def-riemannian-distance-on-a-connected-manifold]], [[def-riemannian-speed-and-length]]).

[F5] The principal inverse cosine is continuous on $[-1,1]$, maps into $[0,\pi]$, and is inverse to cosine on $[0,\pi]$; cosine is strictly decreasing there ([[def-principal-inverse-sine-and-cosine]]). For $-1<y<1$, $$(\arccos y)'=-\frac1{\sqrt{1-y^2}}$$ ([[thm-principal-inverse-sine-and-cosine-derivatives]]).

[F6] In $\mathbb R^3$ with its Euclidean inner product, $|\langle x,y\rangle|\le |x|\,|y|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F7] The one-variable chain rule differentiates a composition of differentiable real functions ([[thm-chain-rule]]).

[F8] A continuous real function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]). If $G$ is differentiable on $[a,b]$, $G'=f$, and $f$ is integrable, then $$\int_a^b f=G(b)-G(a)$$ ([[thm-ftc-second-part]]). Integrals preserve pointwise inequalities and are linear ([[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]]).

[F9] A smooth hypersurface is an embedded submanifold of codimension one ([[def-codimension-and-hypersurface]]). An embedded $k$-submanifold is locally given in a chart by intersection with $\mathbb R^k\times\{0\}$ ([[def-embedded-submanifold-and-slice-chart]]).

[F10] For a unit tangent vector $u$, the radial geodesic is $\gamma_u(t)=\exp_p(tu)$, and its cut time is the supremum of positive $t$ for which $d_g(p,\exp_p(tu))=t$ ([[def-cut-time-in-a-unit-tangent-direction]]). When this cut time is finite, its radial endpoint is a cut point and the cut locus is the union of those finite endpoints ([[def-cut-point-and-cut-locus-of-a-point]]).

[F11] Sine and cosine have derivatives $\cos$ and $-\sin$ ([[thm-sine-and-cosine-derivatives]]), and $\sin^2s+\cos^2s=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Refutation

1.1 Take the unit round sphere $M=S^2\subset\mathbb R^3$ with north pole $p=(0,0,1)$. [F1, F2, F3]
By [F3] it is a nonempty boundaryless Riemannian manifold, and [F2] makes it connected. The all-real great-circle formulas in [F3] show that it is geodesically complete; hence it is metrically complete by [F1]. Thus this is within the domain of the cut-locus definition under its declared $\mathrm{AC}_\omega$ assumption. [F1, F2, F3]

2.1 For $q\in S^2$, define $\theta(q):=\arccos\langle p,q\rangle\in[0,\pi]$. [step 1.1, F3, F4, F5, F6, F8, F11]
There is a smooth path from $p$ to $q$ of length $\theta(q)$. If $q=p$, use the constant path, which has length $0=\theta(p)$. If $q=-p$, let $u=(1,0,0)$ and use $\beta(s)=\cos(s)p+\sin(s)u$ on $[0,\pi]$; then $\beta(0)=p$ and $\beta(\pi)=-p$. Otherwise $0<\theta(q)<\pi$. Since cosine is strictly decreasing on $[0,\pi]$ [F5], we have $|\cos\theta(q)|<1$, so [F11] gives $\sin\theta(q)\ne0$. Set $$u:=\frac{q-\cos(\theta(q))p}{\sin(\theta(q))}$$ Then $$\langle p,q-\cos(\theta(q))p\rangle=0,\qquad |q-\cos(\theta(q))p|^2=1-\cos^2(\theta(q))=\sin^2(\theta(q)),$$ so $u$ is a unit vector orthogonal to $p$; use $\beta(s)=\cos(s)p+\sin(s)u$ on $[0,\theta(q)]$, which ends at $q$ by the definition of $u$. In each nonconstant case [F3] gives this great-circle geodesic. Orthonormality of $p,u$ and [F11] give $|\beta(s)|^2=\cos^2(s)+\sin^2(s)=1$, while $\dot\beta(0)=u$; thus $u$ is tangent to $S^2$ at $p$. Its derivative is $\dot\beta(s)=-\sin(s)p+\cos(s)u$, and the same calculation gives $|\dot\beta(s)|_g^2=\sin^2(s)+\cos^2(s)=1$. Its length is therefore $\int_0^{\theta(q)}1\,ds=\theta(q)$ by [F4], [F8], [F11]. Taking the infimum in [F4] gives $$d_g(p,q)\le\theta(q).$$ [F3, F4, F6, F8, F11, algebra]

2.2 For the reverse inequality, let $\alpha:[a,b]\to S^2$ be any piecewise $C^1$ path from $p$ to $q$. [step 1.1, F4, F5, F6, F7, F8]
If $a=b$, then $p=q$ and the desired lower bound is $0\le L_g(\alpha)$. Otherwise fix $0<\varepsilon<1$ and, on each smooth piece, set $$z(t):=\langle p,\alpha(t)\rangle,\qquad h_\varepsilon(t):=\arccos\bigl((1-\varepsilon)z(t)\bigr).$$ Since $|z(t)|\le1$, the argument of $\arccos$ stays strictly between $-1$ and $1$. Also $\langle\alpha,\dot\alpha\rangle=0$, so $$z'=\langle p-z\alpha,\dot\alpha\rangle,\qquad |p-z\alpha|^2=1-z^2.$$ By [F6], $|z'|\le\sqrt{1-z^2}\,|\dot\alpha|$. The chain rule [F7] and derivative formula [F5] now give $$|h_\varepsilon'|=\frac{(1-\varepsilon)|z'|}{\sqrt{1-(1-\varepsilon)^2z^2}}\le|\dot\alpha|,$$ because $1-(1-\varepsilon)^2z^2\ge(1-\varepsilon)^2(1-z^2)$. The functions $h_\varepsilon'$ and $|\dot\alpha|$ are continuous on each closed smooth piece, including their one-sided endpoint values, so they are integrable by [F8]. Integrating $-|\dot\alpha|\le h_\varepsilon'\le|\dot\alpha|$, and applying the fundamental theorem and integral monotonicity and linearity [F8], bounds the absolute change of $h_\varepsilon$ on that piece by its length. Summing over the finitely many pieces and using the triangle inequality yields $$\left|\arccos((1-\varepsilon)\langle p,q\rangle)-\arccos(1-\varepsilon)\right|\le L_g(\alpha).$$ As $\varepsilon\downarrow0$, continuity of $\arccos$ [F5] gives $\theta(q)\le L_g(\alpha)$. [F5, F6, F7, F8, algebra]

3.1 By Steps 2.1 and 2.2, every piecewise $C^1$ path from $p$ to $q$ has length at least $\theta(q)$, and one such path has length exactly $\theta(q)$. [step 2.1, step 2.2, F4]
Taking the infimum in [F4] proves the exact formula $$d_g(p,q)=\arccos\langle p,q\rangle.$$ [step 2.1, step 2.2, F4]

4.1 Fix a unit $u\in T_pS^2$. The round-sphere and radial-geodesic formulas give $\gamma_u(t)=\cos(t)p+\sin(t)u=\exp_p(tu)$ [step 3.1, F3, F10]
Its inner product with $p$ is $\cos t$. Thus [F5] and step 3.1 give $d_g(p,\gamma_u(t))=t$ for $0\le t\le\pi$. For $t>\pi$, $d_g(p,\gamma_u(t))=\arccos(\cos t)\le\pi<t$. Consequently the minimizing positive radial times are exactly $(0,\pi]$, so by [F10] the cut time is $c_p(u)=\pi$ for every unit $u$. By the finite-endpoint clause in [[def-cut-point-and-cut-locus-of-a-point]], $$\operatorname{Cut}(p)=\{\gamma_u(\pi):u\in S_pM\}=\{-p\}.$$ The set is nonempty since $(1,0,0)\in S_pM$. [F3, F5, F10, step 3.1]

5.1 In a chart centered at $-p$, the singleton $\{-p\}$ is an embedded zero-dimensional submanifold [step 4.1, F9].
Indeed, take a chart around $-p$ and translate its coordinates so that $-p$ maps to the origin. In any open chart image containing that origin, intersection with $\mathbb R^0\times\{0\}=\{0\}$ is just the singleton. But if $\{-p\}$ were an embedded $1$-dimensional submanifold, a slice chart at $-p$ would identify its one-point intersection with the intersection of an open subset of $\mathbb R^2$ and a coordinate line; that latter intersection contains an interval and cannot be a singleton. By [F9], a hypersurface in $S^2$ must have dimension $2-1=1$. Thus $\operatorname{Cut}(p)=\{-p\}$ is not a smooth hypersurface, refuting the universal claim. [F9, step 4.1]

6.1 Empty and zero-dimensional cases: the empty manifold has no base point; in dimension zero there are no unit tangent vectors [step 3.1, step 4.1, step 5.1, F1, F9, F10].
so the cut-point definition gives no cut points; the witness therefore requires positive dimension. Dimension one is not refuted by this example, since a singleton there has codimension one. The distance formula includes $q=p$ with $\theta=0$; on the witness every radial segment minimizes at $t=0$ and through the endpoint $t=\pi$, while all $t>\pi$ fail strictly. The antipodal direction uses the fixed vector $(1,0,0)$, and the general direction is explicitly determined by $q$, so there is no choice from a family. The only axiom used is the inherited $\mathrm{AC}_\omega$ in [F1] and the cut-time interfaces; no full Axiom of Choice is invoked. This is a one-way counterexample, not an iff claim. [F1, F9, F10, step 3.1, step 4.1, step 5.1] ∎

## Source locator

Lee, *Riemannian Manifolds*, Chapter 10, printed p.190 (PDF P206, lines 7564–7568), defines finite cut points and the cut locus in the convention used here.

Datar, Proposition 15.3.1, printed pp.117–118 (PDF P124–125), identifies round-sphere geodesics with great circles. Its converse proof has an apparent index-range error: the reflection argument at PDF P125, lines 6611–6624, allows reflecting the north-pole coordinate even though that reflection does not fix the north pole. I do not rely on that argument. The library example [[ex-great-circles-as-round-sphere-geodesics]] proves the explicit all-time great-circle formula used above.

Datar, §23.2, printed pp.167–169 (PDF P174–176), defines cut time and states a cut-point characterization. The proof of Lemma 23.2.2 at PDF P176, lines 9550 and 9556, contains unresolved internal references “Corollary ??” and “Proposition ??”; this characterization is not used here. The spherical distance inequality, exact unit-sphere distance, and singleton cut-locus calculation are derived in this item.
