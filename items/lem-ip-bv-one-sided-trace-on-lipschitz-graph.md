---
id: lem-ip-bv-one-sided-trace-on-lipschitz-graph
kind: lemma
title: One-sided BV traces and Green identity on a Lipschitz graph
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-dominated-convergence
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice
  - lem-ip-distributional-radon-representation-unique
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - prop-mollifier-families-are-l-one-approximate-identities
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Glaucio Terra, Introduction to Geometric Measure Theory, Theorem 7.39
      url: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf
dependency_level: 2
---

## Statement

Assume Countable Choice. In a Lipschitz graph chart let $G$ be the side $z>h(y)$, and let $u\in BV(G)$ locally, with finite $L^1$ norm and variation on each smaller bounded graph collar under consideration. On every smaller base box $B$ there is a unique local $L^1(B)$ trace $\tau u$ such that
$$u(y,h(y)+t)\longrightarrow\tau u(y)\quad\text{in }L^1(B)\text{ as }t\downarrow0\text{ through almost every }t.$$
The trace is linear and satisfies a bound $\|\tau u\|_{L^1(B)}\le C(a^{-1}\|u\|_{L^1(C_{2a})}+|Du|(C_{2a}))$, where $C_{2a}$ is a fixed larger graph collar with positive margins at the chart sides and $a>0$ is sufficiently small. For every smooth vector field $\phi$ compactly supported away from those sides,
$$\int_Gu\operatorname{div}\phi=-\int_G\phi\cdot dDu+\int \tau u(y)\phi(y,h(y))\cdot(Dh(y),-1)\,dy.$$
The corresponding assertions hold for the subgraph with the normal reversed. For an interval endpoint in dimension one, the same assertions mean the one-sided scalar limit, the usual endpoint sign, and counting measure on the boundary.

## Statement references

[[lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice|Lipschitz graph derivatives, normalized surface measure and normals.]]

## Facts & Assumptions

**Given:** Countable Choice and a smaller graph collar with closure, except its graph face, contained in the larger chart. Write $C_b=\{(y,z):y\in B',\ 0<z-h(y)<b\}$ for a larger base box $B'\supset\overline B$ and sufficiently small $b$.

[F1] Local mollification is smooth, differentiates by convolution, and converges in $L^1$ on compact subsets. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]])

[F2] Completed Euclidean Fubini and Tonelli hold under Countable Choice. Vertical translation in each fixed base slice therefore preserves volume for $(y,t)\mapsto(y,h(y)+t)$. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]])

[F3] A Lipschitz function is differentiable almost everywhere, its ordinary and weak derivatives agree, and graph area and normal have the formulas in the preceding lemma. ([[lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice]])

[F4] Finite signed Radon measures are determined by compactly supported smooth tests, and smooth cutoffs exist on nested balls. ([[lem-ip-distributional-radon-representation-unique]], [[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

**Given:** The chart and $u$ in the Statement.

1.1 Fix $a>0$ with $C_{2a}$ inside the larger chart. On every compact subset of $G$, mollify $u$ using a nonnegative unit-mass bump, writing $u_\epsilon=u*\rho_\epsilon$ where the convolution ball stays in $G$. The distributional derivative identity and [F2] give $\partial_z u_\epsilon=(D_zu)*\rho_\epsilon$ there. For $0<s<t<a$, ordinary line integration gives $$\int_B|u_\epsilon(y,h(y)+t)-u_\epsilon(y,h(y)+s)|\,dy\le\int_{\{y\in B,\ s<z-h(y)<t\}}|\partial_z u_\epsilon|\,dx.$$ For sufficiently small $\epsilon$, the $\epsilon$-neighborhood of this last strip lies in $C_{2a}$: its lower height is positive since $s>0$, its upper height is below $2a$, and its lateral projection lies in $B'$. The convolution bound and [F2] make the right side at most $|D_zu|(C_{2a})$, since each kernel integrates to at most one. [F1, F2, given, construct]

2.1 On each compact-height collar $y\in B$, $1/j<z-h(y)<a-1/j$, [F1] gives $L^1$ convergence of $u_\epsilon$ to $u$. Choose a sequence $\epsilon_\ell\downarrow0$ whose $L^1$ errors on the first $\ell$ such collars are below $2^{-\ell}$, always using the least sufficiently large dyadic exponent. By [F2], for a full-measure set of heights the slice functions converge in $L^1(B)$. Applying step 1.1 at two such heights proves $$\|u_t-u_s\|_{L^1(B)}\le |D_zu|(C_{2a}),\qquad u_t(y)=u(y,h(y)+t),\quad 0<s,t<a.$$ Repeat this construction for a countable sequence of smaller $a$ tending to zero and intersect the full-measure height sets. The collars $C_{2a}$ decrease to the empty set inside $G$, so finiteness of $|D_zu|$ implies their measures tend to zero. Thus $u_t$ is Cauchy in $L^1(B)$ as $t\downarrow0$ outside one null set. [F1, F2, step 1.1, construct]

3.1 Choose one height from each interval $(2^{-j-1}a,2^{-j}a)$ outside that null set by Countable Choice. The corresponding Cauchy sequence has an $L^1$ limit: choose measurable representatives, then a subsequence whose successive $L^1$ differences are below $2^{-j}$; [F2] makes the sum of the absolute differences integrable and gives its almost-everywhere and $L^1$ limit. The Cauchy estimate in step 2.1 makes this limit independent of heights and gives the asserted convergence along all good heights. This also proves uniqueness and linearity. Averaging the bound $\|\tau u\|_1\le\|u_t\|_1+|D_zu|(C_{2a})$ over $0<t<a$ using [F2] gives $\|\tau u\|_1\le a^{-1}\|u\|_{L^1(C_a)}+|D_zu|(C_{2a})$. Since $|D_zu|\le|Du|$, this is the stated bound. Traces obtained on nested base boxes coincide by the same slice convergence. [F2, step 2.1, choose, construct, algebra]

4.1 The distributional identity extends from smooth to compactly supported Lipschitz vector fields $\psi$ inside $G$. Indeed mollification converges uniformly to $\psi$, while its derivatives are uniformly bounded and converge almost everywhere to the weak derivatives, by [F3] and Lebesgue differentiation: if $g$ is a bounded weak derivative at a strong Lebesgue point $x$, then $|g*\rho_\epsilon(x)-g(x)|\le C\epsilon^{-n}\int_{B(x,\epsilon)}|g(y)-g(x)|\,dy\to0$. Consequently $\int\psi_\epsilon\cdot dDu\to\int\psi\cdot dDu$ by uniform convergence and finiteness, and $\int u\operatorname{div}\psi_\epsilon\to\int u\operatorname{div}\psi$ by dominated convergence. Set $r=z-h(y)$ and let $\theta$ be the continuous function zero on $(-\infty,0]$, linear from zero to one on $[0,1]$, and one on $[1,\infty)$. For fixed $\epsilon>0$ use $\psi=\phi\theta((r-\epsilon)/\epsilon)$, whose support is a compact subset of $G$. Its almost-everywhere gradient uses the ordinary chain rule from [F3], and its transition term is $$\epsilon^{-1}\int_\epsilon^{2\epsilon}\int u_t(y)\phi(y,h(y)+t)\cdot(-Dh(y),1)\,dy\,dt.$$ By step 3.1, the uniform bound on $Dh$, and uniform continuity of $\phi$, this converges to $\int\tau u\,\phi(y,h(y))\cdot(-Dh,1)\,dy$. The other terms converge to $\int_Gu\operatorname{div}\phi$ and $-\int_G\phi\cdot dDu$, since the cutoff tends pointwise to one in $G$. Rearrangement proves the Green formula. [F1, F2, F3, step 3.1, construct, algebra]

5.1 These formulas also show independence of the direction of a valid graph chart. On an overlap, [F3] applied to $u=1$ first identifies the outward vector surface measures by [F4]. Their variations are their scalar graph measures: for a unit measurable density $n$ against a finite positive measure $\mu$, variation is at most $\mu$ by the triangle inequality, and is at least $(1-\eta)\mu$ by partitioning the unit sphere into finitely many Borel sets of diameter below $\eta$ and projecting each vector integral onto a representative direction. Let $\eta\downarrow0$. Thus the outward normals agree almost everywhere. Subtract the two Green formulas for general $u$; [F4] makes $(\tau_1u-\tau_2u)n\mu$ zero, and the same variation argument gives $\tau_1u=\tau_2u$ almost everywhere. Reflection gives the subgraph formulas. In dimension one, omit the base integral: the convolution and line estimate in steps 1.1–2.1 make $u(t)$ Cauchy through almost every $t$ approaching an endpoint, and step 4.1 gives the endpoint boundary term. All arguments and bounds remain valid, with scalar absolute value and counting measure. [F3, F4, step 3.1, step 4.1, algebra] ∎
