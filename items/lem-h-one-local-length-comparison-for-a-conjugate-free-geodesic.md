---
id: lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic
kind: lemma
title: H-one local length comparison for a conjugate-free geodesic
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-h-one-riemannian-curves-and-half-energy
  - lem-local-length-comparison-for-a-conjugate-free-geodesic
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - thm-dominated-convergence
  - thm-gauss-lemma
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Zuoqin Wang, Riemannian Geometry (USTC, 2024 Spring), Lecture 20: The index form"
      url: http://staff.ustc.edu.cn/~wangzuoq/Courses/24S-RiemGeom/Notes/Lec20.pdf
      locator: "Theorem 1.1(1) and Lemma 1.3: local exponential inverse branches and radial Gauss comparison; the AC/L2 extension and equality analysis are derived here."
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a connected finite-dimensional
Riemannian manifold without boundary and let $\gamma:[a,b]\to M$, $a<b$, be
an affinely parametrized Levi-Civita geodesic with no point conjugate to
$\gamma(a)$ along $\gamma|_{[a,t]}$ for $a<t\le b$. There is $\varepsilon>0$
such that each fixed-endpoint $H^1$ Riemannian curve $\alpha:[a,b]\to M$
with $\sup_t d_g(\alpha(t),\gamma(t))<\varepsilon$ obeys
$$L_g(\alpha)\ge L_g(\gamma).$$
If equality holds and $\gamma$ is nonconstant, there is an absolutely
continuous nondecreasing surjection $\tau:[a,b]\to[a,b]$, with $\tau(a)=a$,
$\tau(b)=b$ and $\tau'\in L^2$, such that $\alpha=\gamma\circ\tau$.
If $\gamma$ is constant, equality forces $\alpha=\gamma$.

## Facts & Assumptions

**Given:** The manifold, conjugate-free geodesic and fixed-endpoint $H^1$
competitor in the statement. Put $p=\gamma(a)$, $v=\dot\gamma(a)$ and
$X=(b-a)v$.

[F1] Under Countable Choice, an $H^1$ manifold curve is continuous, has
finitely many coordinate primitives with $L^2$ derivatives, and smooth
compositions obey the a.e. chain rule; its length is the integral of its
metric speed ([[def-countable-choice]],
[[def-h-one-riemannian-curves-and-half-energy]]).

[F2] The proof of [[lem-local-length-comparison-for-a-conjugate-free-geodesic]]
constructs a positive radius and a finite partition $a=t_0<\cdots<t_N=b$,
open tangent balls $V_i\subset T_pM$ on which $\exp_p$ is a diffeomorphism,
and smooth inverse branches $\beta_i$ on their images. Its steps 3.1--6.1
show, using only continuity and uniform closeness before the regularity
assertion, that any continuous curve within that radius has a continuous
pullback $\varphi:[a,b]\to T_pM$ with
$\varphi|_{[t_{i-1},t_i]}=\beta_i\circ\alpha$,
$\exp_p\circ\varphi=\alpha$, $\varphi(a)=0$, and $\varphi(b)=X$.
The same lemma's step 1.1 shows $\gamma(t)=\exp_p((t-a)v)$.

[F3] Gauss lemma says radial and tangential images under $d\exp_p$ are
orthogonal and the radial image has its original radial norm
([[thm-gauss-lemma]]). A Levi-Civita geodesic has constant speed, so
$L_g(\gamma)=(b-a)|v|_g=|X|_g$
([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F4] Dominated convergence passes an a.e. convergent sequence bounded by an
integrable function through the Lebesgue integral
([[thm-dominated-convergence]]).

## Proof

1.1 The square-integrable inverse-branch pullback. [F1, F2, given]
Take the radius, partition and branches of [F2]. Their domain and gluing
arguments use the continuity of $\alpha$, which follows from [F1]; no
piecewise-$C^1$ hypothesis is used in that part. On each closed strip,
$\varphi_i=\beta_i\circ\alpha$ is a smooth composition of an $H^1$ curve
and hence a vector-valued primitive with $L^2$ derivative by [F1]. The
finitely many $\varphi_i$ agree at strip boundaries by [F2], and so glue to
one $H^1$ vector primitive $\varphi$ with $\varphi(a)=0$,
$\varphi(b)=X$ and $\alpha=\exp_p\circ\varphi$. The a.e. chain rule gives
$\dot\alpha=d(\exp_p)_\varphi\varphi'$ on each strip. [F1, F2]

2.1 Radial comparison on every subinterval. [F1, F3, step 1.1, given]
For $\sigma>0$ set $f_\sigma(t)=\sqrt{|\varphi(t)|_g^2+\sigma^2}$.
This is a primitive with $L^2$ derivative
$f_\sigma'=\langle\varphi,\varphi'\rangle/f_\sigma$ a.e. by [F1]. At a
point where $\varphi\ne0$, decompose $\varphi'=c\varphi+w$ with
$w\perp\varphi$. Gauss lemma [F3] and step 1.1 give
$$|\dot\alpha|_g^2=c^2|\varphi|_g^2+|d(\exp_p)_\varphi w|_g^2\ge |f_\sigma'|^2.$$
At $\varphi=0$, $f_\sigma'=0$, so the inequality remains true. Thus on
every $[u,z]\subset[a,b]$, integration of the nonnegative speed and the
primitive identity on the finite strips yield
$$L_g(\alpha|_{[u,z]})\ge\int_u^z|f_\sigma'|\,dt\ge|f_\sigma(z)-f_\sigma(u)|.$$
Letting $\sigma\downarrow0$ proves the subinterval bound
$L_g(\alpha|_{[u,z]})\ge||\varphi(z)|_g-|\varphi(u)|_g|$ and, at the
endpoints, $L_g(\alpha)\ge|X|_g=L_g(\gamma)$ by [F3]. [F1, F3, step 1.1]

3.1 Equality makes the radius monotone. [F1, step 1.1, step 2.1, given]
Suppose $L_g(\alpha)=|X|_g$ and put $r=|\varphi|_g$. Because length is an
integral, it is additive across any finite subdivision. If $r(s)>r(z)$
for some $s<z$, first $r(z)\le|X|_g$: otherwise the subinterval bounds
on $[a,z]$ and $[z,b]$ give
$L_g(\alpha)\ge r(z)+(r(z)-|X|_g)>|X|_g$. Then step 2.1 on
$[a,s]$, $[s,z]$, and $[z,b]$ gives
$L_g(\alpha)\ge r(s)+(r(s)-r(z))+(|X|_g-r(z))>|X|_g$, a contradiction.
Hence $r$ is nondecreasing. If $X=0$, then the same bound gives $r=0$;
step 1.1 gives $\alpha=\exp_p(0)=\gamma$. If $X\ne0$, continuity and
monotonicity imply $\{r>0\}=(c,b]$ for some $c\in[a,b)$, with $r=0$
before $c$. [F1, step 1.1, step 2.1]

4.1 The radial primitive and a.e. equality. [F1, F3, F4, step 1.1, step 3.1, given]
The function $r$ is itself a primitive. Indeed $f_\sigma\to r$ uniformly,
while $f_\sigma'$ is dominated by $|\varphi'|\in L^1$ and converges a.e.
as $\sigma\downarrow0$ to
$h=\langle\varphi,\varphi'\rangle/r$ on $\{r>0\}$ and $h=0$ on
$\{r=0\}$. Dominated convergence [F4] in the primitive identities gives
$r(t)=r(a)+\int_a^t h$, so $r'=h$ a.e. and $r'\ge0$ a.e. On $\{r>0\}$
Gauss lemma gives, with
$w=\varphi'-(r'/r)\varphi\perp\varphi$,
$$|\dot\alpha|_g^2=(r')^2+|d(\exp_p)_\varphi w|_g^2.$$
On $\{r=0\}$ the comparison $|\dot\alpha|_g\ge r'=0$ is trivial.
Thus $|\dot\alpha|_g-r'\ge0$ a.e.; its integral is
$L_g(\alpha)-(r(b)-r(a))=|X|_g-|X|_g=0$. It follows that
$|\dot\alpha|_g=r'$ a.e. Each inverse branch is a diffeomorphism,
so $d(\exp_p)_\varphi$ is injective on its strip; the displayed identity
then gives $w=0$ a.e. on $\{r>0\}$. [F1, F3, F4, step 1.1, step 3.1]

5.1 Constant direction and reparametrization. [F1, F2, step 1.1, step 3.1, step 4.1, given]
On each compact subinterval of $(c,b]$, the map $e=\varphi/r$ is an
$H^1$ primitive by smooth superposition [F1], and step 4.1 gives
$e'=w/r=0$ a.e. Its primitive identity makes $e$ constant there;
overlapping subintervals make the constant common. Since
$\varphi(b)=X$, it is $e_0=X/|X|_g=v/|v|_g$. Thus
$\varphi(t)=r(t)e_0$ for all $t$, including $[a,c]$ where both sides
vanish. Define $\tau(t)=a+r(t)/|v|_g$. By step 4.1 it is an absolutely
continuous nondecreasing function with $L^2$ derivative; its endpoint
values are $a,b$, hence it is a surjection. The radial exponential identity
in [F2] now gives
$\alpha(t)=\exp_p(r(t)e_0)=\gamma(\tau(t))$ for every $t$.
Together with step 3.1 this proves both equality cases. [F1, F2, step 1.1, step 3.1, step 4.1] ∎
