---
id: ex-a-half-twist-as-a-punctured-disk-homeomorphism
kind: example
title: "A supported half-twist homeomorphism"
status: published
origin: pipeline
landmark: false
deps: [def-elementary-geometric-half-twist,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       def-the-standard-smooth-step-function,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-unordered-configuration-space,
       thm-quarter-turn-values-and-shift-formulas,
       cor-differentiable-implies-continuous,
       thm-sine-and-cosine-derivatives,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 9.1.3, printed p. 256"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.5, printed pp. 7-8, Figure 2"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Assume the Axiom of Choice. Let $n\ge2$ and fix an adjacent index
$1\le i\le n-1$, with $h=\frac{1}{4(n+1)}$, base points
$q_j=((2j-n-1)h,0)$, midpoint $m_i=q_i+(h,0)$ and support disc
$U_i=B(m_i,\frac32h)$ as in
[[def-elementary-geometric-half-twist]]. This example writes out explicitly the
**supported half rotation** $H$ of the adjacent pair:

1. with the standard smooth step function $\sigma$ define
   $\theta(r):=\sigma\bigl((\frac{11h}{8}-r)/\frac h8\bigr)$ for $r\ge0$, so that
   $\theta$ is smooth with values in $[0,1]$, equals $1$ for $r\le\frac{5h}4$
   and equals $0$ for $r\ge\frac{11h}8$, and set, for $x\in D^2$ and $s\in I$,
   $$H_s(x):=m_i+R\bigl(\pi s\,\theta(\lVert x-m_i\rVert_2)\bigr)(x-m_i),$$
   where $R(\alpha)$ denotes rotation about the origin by the angle $\alpha$;
2. every $H_s$ is a homeomorphism of $D^2$ with inverse
   $(r,\varphi)\mapsto(r,\varphi-\pi s\theta(r))$ in polar coordinates about
   $m_i$, the family $(s,x)\mapsto H_s(x)$ is continuous, $H_0$ is the identity,
   and $H_s$ fixes pointwise the complement of the closed disc of radius
   $\frac{11h}8$ about $m_i$, a set contained in $U_i\subseteq
   \operatorname{int}D^2$; in particular every $H_s$ fixes $\partial D^2$
   pointwise and no point outside $U_i$ is moved;
3. the two punctures move as
$$H_s(q_i)=m_i+h(-\cos\pi s,-\sin\pi s),\qquad H_s(q_{i+1})=m_i+h(\cos\pi s,\sin\pi s),$$ the unordered pair traversing the
   anticlockwise semicircle of radius $h$ about $m_i$ from $\{q_i,q_{i+1}\}$ at
   $s=0$, through $\{m_i\pm(0,h)\}$ at $s=\frac12$, to $\{q_{i+1},q_i\}$ at
   $s=1$, while every other base point is fixed throughout; consequently
   $H_1$ preserves $Q_n$ setwise and lies in
   $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$, and $s\mapsto[H_s(Q_n)]$ is
   a based loop of $C_n(\operatorname{int}D^2)$ at $[Q_n]$;
4. the raw slice loop $S(\sigma_i)$ of the standard positive half twist is
   homotopic to this based loop relative to $\{0,1\}$, through the explicit
   interpolation of step 3.1 below.

Since the braid-to-mapping-class isomorphism sends $[\sigma_i]$ to the class of
the homeomorphism constructed from exactly this collar data
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]),
the homeomorphism $H_1$ represents the standard positive braid generator: its
class is $\Psi([\sigma_i])$ in $\operatorname{Mod}(D^2,Q_n;\partial D^2)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the natural number $n\ge2$, the adjacent index
$1\le i\le n-1$, the base configuration $Q_n=(q_1,\dots,q_n)$ with spacing
$h=\frac1{4(n+1)}$, the midpoint $m_i=q_i+(h,0)$, the support disc
$U_i=B(m_i,\frac32h)$, the standard smooth step function $\sigma$, the rotation
matrix $R(\alpha)$, and the half twist $\sigma_i$ of
[[def-elementary-geometric-half-twist]].

[F1] $q_j=((2j-n-1)h,0)$, $m_i=q_i+(h,0)=( (2i-n)h,0)$, the support disc
$U_i$ has radius $\frac32h$, contains $q_i$ and $q_{i+1}$ at distance exactly
$h$ from $m_i$, contains no other base point, every other base point has
distance at least $3h$ from $m_i$, and $U_i\subseteq\operatorname{int}D^2$; the
half twist is $(\sigma_i)_i=m_i+\rho$, $(\sigma_i)_{i+1}=m_i-\rho$ and
$(\sigma_i)_k=q_k$ otherwise, where $\rho(0)=(-h,0)$,
$\rho(\frac12)=(0,-h)$, $\rho(1)=(h,0)$ and $\lVert\rho\rVert_2\le h$
([[def-elementary-geometric-half-twist]]).

[F2] Under AC the composite
$\Psi=\delta\circ(\iota^{C}_*)^{-1}\circ\Phi$ is a group isomorphism from the
geometric braid group $G_n$ at $Q_n$ to
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$, and for $1\le i\le n-1$ the image of
the standard positive geometric half twist $\sigma_i$ is the mapping class of
the explicit boundary-fixed homeomorphism $H_i$ supported in the support disc
$U_i$ and exchanging $q_i$ and $q_{i+1}$
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[F3] The standard smooth step function $\sigma$ is smooth, takes values in
$[0,1]$, equals $0$ on $(-\infty,0]$ and equals $1$ on $[1,\infty)$
([[def-the-standard-smooth-step-function]]).

[F4] $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)=\{\,f:f|_{\partial D^2}=
\operatorname{id},\ f(Q_n)=Q_n\text{ setwise}\,\}$ is a topological group in the
compact-open topology and
$\operatorname{Mod}(D^2,Q_n;\partial D^2)=\pi_0$ of it; a path in it transposes
to an isotopy of $D^2$, and a homeomorphism of the disc fixing $\partial D^2$
pointwise lies in it exactly when it preserves $Q_n$ setwise
([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[F5] $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, $\cos\pi=-1$, and
$\sin(x+\pi)=-\sin x$, $\cos(x+\pi)=-\cos x$ for every real $x$
([[thm-quarter-turn-values-and-shift-formulas]]).

[F6] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$ and
therefore continuous, with $\sin0=0$ and $\cos0=1$
([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]]).

[F7] $C_n(\operatorname{int}D^2)=F_n(\operatorname{int}D^2)/S_n$ with quotient
map $p_n$, which is continuous and surjective, and points are written $[x]$
([[def-unordered-configuration-space]]).

[F8] The Axiom of Choice is assumed
([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 **The collar function.** By [F3] the function $\sigma$ is smooth on $\mathbb R$ with values in $[0,1]$, equals $0$ on $(-\infty,0]$ and equals $1$ on $[1,\infty)$; the argument $r\mapsto(\frac{11h}8-r)/\frac h8$ is smooth and affine on $[0,\infty)$ with $\frac{11h}8-r\ge\frac h8\cdot1$, that is $r\le\frac{5h}4$, exactly when $\sigma$ is evaluated at an argument at least $1$, and $\frac{11h}8-r\le0$, that is $r\ge\frac{11h}8$, exactly when it is evaluated at an argument at most $0$. Hence $\theta(r)=\sigma\bigl((\frac{11h}8-r)/\frac h8\bigr)$ is smooth on $[0,\infty)$ with values in $[0,1]$, equals $1$ for $r\le\frac{5h}4$ and equals $0$ for $r\ge\frac{11h}8$. [F3]

2.1 **The half rotation, its support and its point motions.** Write $r(x):=\lVert x-m_i\rVert_2$ and $\alpha_s(x):=\pi s\theta(r(x))$ for $x\in D^2$ and $s\in I$, so that $H_s(x)=m_i+R(\alpha_s(x))(x-m_i)$; the scalar $\alpha_s(x)$ is a continuous function of $(s,x)$ because $\theta$ is smooth, and the entries of $R$ are $\cos$ and $\sin$ of that scalar, so $H_s(x)$ depends continuously on $(s,x)$ by [F6], and also $R$ is a rotation, hence preserves norms and is injective. In polar coordinates $x=m_i+(u\cos\varphi,u\sin\varphi)$ with $u=r(x)$ one has $H_s(x)=m_i+(u\cos(\varphi+\pi s\theta(u)),u\sin(\varphi+\pi s\theta(u)))$ and the map $(u,\varphi)\mapsto(u,\varphi-\pi s\theta(u))$ is a two-sided inverse, so each $H_s$ is a bijection of $D^2$ continuous in both directions, that is a homeomorphism, and its inverse is as displayed. By step 1.1, $\theta(r(x))=0$ whenever $r(x)\ge\frac{11h}8$, so $H_s(x)=x$ for every $x$ outside the closed disc of radius $\frac{11h}8$ about $m_i$; that closed disc is contained in the open disc $U_i$ of radius $\frac32h$ because $\frac{11}8<\frac32$, and $U_i\subseteq\operatorname{int}D^2$ by [F1], so every $H_s$ fixes $\partial D^2$ pointwise and fixes every point outside $U_i$; moreover $H_0=\operatorname{id}$ because $\alpha_0=0$ and $R(0)$ is the identity. For the marked points, [F1] gives $r(q_i)=r(q_{i+1})=h\le\frac{5h}4$, so $\theta=1$ there and, using the definition of $R$ as rotation about the origin and the shift formulas of [F5] with $x=0$ and $x=\pi$ respectively, $$H_s(q_i)=m_i+R(\pi s)(-h,0)=m_i+h(-\cos\pi s,-\sin\pi s),\qquad H_s(q_{i+1})=m_i+R(\pi s)(h,0)=m_i+h(\cos\pi s,\sin\pi s);$$ the two moving points are always distinct because their difference is $2h(\cos\pi s,\sin\pi s)\neq0$, and every other base point $q_k$ has $r(q_k)\ge3h>\frac{11h}8$ by [F1], hence is fixed for all $s$. By [F5] one has $H_1(q_i)=m_i+h(1,0)=q_{i+1}$ and $H_1(q_{i+1})=m_i+(-h,0)=q_i$, while all other base points are fixed, so $H_1$ preserves $Q_n$ setwise and by [F4] lies in $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$; the pair $\{H_s(q_i),H_s(q_{i+1})\}=\{m_i\pm h(\cos\pi s,\sin\pi s)\}$ traverses the anticlockwise semicircle of radius $h$ about $m_i$ from $\{q_i,q_{i+1}\}$ at $s=0$, through $\{m_i\pm(0,h)\}$ at $s=\frac12$, to $\{q_{i+1},q_i\}$ at $s=1$, and $s\mapsto H_s(Q_n)$ is a continuous path in $F_n(\operatorname{int}D^2)$ with $[H_0(Q_n)]=[Q_n]=[H_1(Q_n)]$, so $s\mapsto[H_s(Q_n)]$ is a based loop of $C_n(\operatorname{int}D^2)$ at $[Q_n]$ by [F7]. [F1, F4, F5, F6, F7, step 1.1]

3.1 **Interpolation to the published diamond half twist.** Let $\rho$ be the diamond path of [F1], so that the raw slice loop of the half twist is $S(\sigma_i)(s)=[m_i+\rho(s),m_i-\rho(s)]$ with all other coordinates equal to $q_k$, and let $w_r(s):=(1-r)\rho(s)+r\,h(-\cos\pi s,-\sin\pi s)$ for $(r,s)\in I\times I$, a continuous map. For $0<s<1$ the second coordinate of $\rho(s)$ is $-2sh$ for $s\le\frac12$ and $2h(s-1)$ for $s\ge\frac12$ by [F1], both strictly negative, while the second coordinate of $h(-\cos\pi s,-\sin\pi s)$ is $-h\sin\pi s$, strictly negative because $\sin\pi s>0$; hence the convex combination $w_r(s)$ has strictly negative second coordinate and does not vanish. At $s=0$ one has $\rho(0)=(-h,0)=h(-\cos0,-\sin0)$ and at $s=1$ one has $\rho(1)=(h,0)=h(-\cos\pi,-\sin\pi)$ by [F1] and [F5], so $w_r(0)=(-h,0)\neq0$ and $w_r(1)=(h,0)\neq0$ for every $r$. Also $\lVert\rho(s)\rVert_2\le h$ and $\lVert h(-\cos\pi s,-\sin\pi s)\rVert_2=h$, so $\lVert w_r(s)\rVert_2\le h$ and the unordered pairs $\{m_i\pm w_r(s)\}$ lie in $U_i\subseteq\operatorname{int}D^2$. Therefore the formula $H^{\mathrm{int}}(r,s):=[m_i+w_r(s),\,m_i-w_r(s),\,q_k\ (k\notin\{i,i+1\})]$ defines a continuous map $I\times I\to C_n(\operatorname{int}D^2)$, as the composite of a continuous ordered tuple with the continuous quotient map of [F7], whose every slice is collision-free: the two moving points differ by $2w_r(s)\neq0$ and have distance at most $h$ from $m_i$, while every other base point has distance at least $3h$ from $m_i$ by [F1]. At $r=0$ the slice is the raw slice loop $S(\sigma_i)$ of [F1] and at $r=1$ it is the loop $s\mapsto[H_s(Q_n)]$ of step 2.1, because $h(-\cos\pi s,-\sin\pi s)$ is the moving coordinate computed there; both loops start and end at $[Q_n]$, so $H^{\mathrm{int}}$ is a path homotopy relative to $\{0,1\}$ from $S(\sigma_i)$ to the based loop of step 2.1. [F1, F5, F7, step 2.1]

4.1 **The class of the supported half rotation.** By [F2], available under the present hypothesis of the Axiom of Choice [F8], the isomorphism $\Psi$ sends the class of the standard positive half twist to the class of the explicit boundary-fixed homeomorphism $H_i$ built in that item from the collar function $\theta$ and the rotation formula displayed in step 2.1, which is literally the homeomorphism $H_1$ of step 2.1 and from [F1] has the same supplied data $m_i$, $q_i$, $q_{i+1}$; hence $\Psi([\sigma_i])=[H_1]$ in $\operatorname{Mod}(D^2,Q_n;\partial D^2)$, and $H_1$ is a homeomorphism of $D^2$ fixing $\partial D^2$ pointwise and exchanging the two adjacent punctures, supported in the disc $U_i$. Independently, step 3.1 exhibits the based loop $s\mapsto[H_s(Q_n)]$ as path-homotopic relative to $\{0,1\}$ to the raw slice of the standard positive half twist, so the explicit time-one map $H_1$ represents the standard positive braid generator. ∎ [F2, F8, step 2.1, step 3.1]

## Remarks

- The construction is the punctured-disc picture of the half twist: a rigid
  rotation by $\pi$ of the pair about its midpoint, with the angle tapered to
  zero across the collar $\frac{5h}4\le r\le\frac{11h}8$ so that the
  homeomorphism is the identity in a neighbourhood of $\partial D^2$ and of all
  the other punctures.
- The point paths are semicircles of radius $h$; the interpolation carried out
  in step 3.1 replaces them by the diamond path of the published half twist
  without ever letting the two points meet, so the combinatorial half twist
  and the geometric rotation define the same braid class.
