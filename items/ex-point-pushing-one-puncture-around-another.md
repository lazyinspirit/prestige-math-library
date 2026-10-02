---
id: ex-point-pushing-one-puncture-around-another
kind: example
title: "Point pushing one puncture around another"
status: published
origin: pipeline
landmark: false
deps: [def-point-pushing-homomorphism-for-a-puncture,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       def-elementary-geometric-half-twist,
       def-axiom-of-choice,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
       thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       def-ordered-configuration-space,
       def-unordered-configuration-space,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       thm-sine-and-cosine-derivatives,
       thm-quarter-turn-values-and-shift-formulas,
       cor-trigonometric-parity-and-pythagorean-identity,
       cor-pi-is-the-first-positive-sine-zero,
       cor-sine-and-cosine-are-one-lipschitz,
       lem-complex-conjugation-and-modulus-laws,
       lem-vector-operations-are-continuous-in-a-normed-space,
       def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 4.2.1, printed pp. 101-102"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.4-1.5, printed pp. 5-8"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Assume the Axiom of Choice and take $n=2$, so that
$h=\frac{1}{12}$, $q_1=(-h,0)=-\frac1{12}$, $q_2=(h,0)=\frac1{12}$ and the
point-pushing domain is the once-punctured disc
$Y_2=\operatorname{int}D^2\setminus\{q_1\}$
([[def-point-pushing-homomorphism-for-a-puncture]],
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]). Holding $q_1$
fixed, let the marked point $q_2$ travel once around $q_1$ **clockwise** along
the circle of radius $2h$:

$$\gamma(t):=q_1+(q_2-q_1)\bigl(\cos 2\pi t-i\sin 2\pi t\bigr) =-h+2h\,u(t),\qquad u(t):=\cos 2\pi t-i\sin 2\pi t,\qquad t\in I .$$

This example computes the point push of the last puncture around the first.
The result is

$$\operatorname{Push}_2([\gamma])=\Psi([\sigma_1]^2)=[H_1]^2,$$

the **positive pure two-strand full twist**: the square of the standard
positive half twist $\sigma_1$ of
[[def-elementary-geometric-half-twist]], equivalently the square of the class
of its explicit supported half rotation $H_1$ of
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]].
Reversing the direction of the loop, that is pushing $q_2$ counterclockwise
around $q_1$, gives the inverse class
$\operatorname{Push}_2([\gamma]^{-1})=[H_1]^{-2}$. The computation is carried
out with the *inverse-endpoint* boundary map $\delta$ of
[[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]], so
it is the clockwise loop that produces the *positive* full twist; the class is
pure because point pushing takes values in the pointwise stabiliser.

## Facts & Assumptions

**Given:** The Axiom of Choice, the number $n=2$ with $h=\frac1{12}$, the base
configuration $Q_2=(q_1,q_2)$ with $q_1=(-h,0)$, $q_2=(h,0)$ and midpoint
$m_1=q_1+(h,0)=(0,0)$, the point-pushing domain
$Y_2=\operatorname{int}D^2\setminus\{q_1\}$, the unit complex number
$u(t)=\cos 2\pi t-i\sin 2\pi t$, the loop $\gamma(t)=q_1+2h\,u(t)$, and the
standard positive half twist $\sigma_1$ with its explicit supported half
rotation $H_1$.

[F1] Assume the Axiom of Choice and $n\ge1$. A based loop $\gamma$ of
$Y_n=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$ at $q_n$ has ordered
lift $L_\gamma(t)=(q_1,\dots,q_{n-1},\gamma(t))$, a based loop of
$F_n(\operatorname{int}D^2)$ at $Q_n$; with $\bar\gamma:=p_n\circ L_\gamma$ and
$\delta$ the inverse-endpoint boundary map of
[[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]], the
point-push class $\operatorname{Push}_n([\gamma]):=\delta([\bar\gamma])$ is a
well-defined element of $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ depending
only on $[\gamma]$, the assignment
$\operatorname{Push}_n:\pi_1(Y_n,q_n)\to\operatorname{PMod}(D^2,Q_n;\partial
D^2)$ is a group homomorphism whose values are **pure** classes, and no
injectivity is asserted
([[def-point-pushing-homomorphism-for-a-puncture]]).

[F2] The base configuration is $q_j=((2j-n-1)h,0)$ with $h=\frac1{4(n+1)}$;
for $n=2$ this is $h=\frac1{12}$, $q_1=(-h,0)$, $q_2=(h,0)$ and
$m_1=q_1+(h,0)=(0,0)$, and the support disc $U_1=B(m_1,\frac32h)$ contains
$q_1$ and $q_2$ and no other base point. The standard positive half twist is
the tuple of motions $(\sigma_1)_1(t)=m_1+\rho(t)$,
$(\sigma_1)_2(t)=m_1-\rho(t)$, where
$\rho(t)=(2th-h,-2th)$ for $0\le t\le\frac12$ and
$\rho(t)=(2th-h,2th-2h)$ for $\frac12\le t\le1$, so that
$\rho(0)=(-h,0)$, $\rho(\frac12)=(0,-h)$, $\rho(1)=(h,0)$,
$\lVert\rho(t)\rVert_2\le h$ and $\rho(t)\ne0$ for all $t$
([[def-elementary-geometric-half-twist]]).

[F3] Under the Axiom of Choice the composite
$\Psi=\delta\circ(\iota^{C}_*)^{-1}\circ\Phi$ is a group isomorphism from the
geometric braid group $G_2$ at $Q_2$ onto
$\operatorname{Mod}(D^2,Q_2;\partial D^2)$, and for $1\le i\le n-1$ it sends
the standard positive half twist $\sigma_i$ to the class of an explicit
boundary-fixed homeomorphism $H_i$ supported in the support disc $U_i$ that
exchanges $q_i$ and $q_{i+1}$
([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]).

[F4] $G_n$ is a group under the stacking product
$[\gamma][\beta]=[\gamma\star\beta]$ and $\Phi$ is built from its
inverse-slicing isomorphism; raw slicing $[\beta]\mapsto[S(\beta)]$, with
$S(\beta)$ the unordered configuration slice of the braid $\beta$, is a
bijection onto $\pi_1(C_n(\operatorname{int}D^2),[Q_n])$ that reverses
products, and $\Phi([\beta])=(\iota^{C}_*[S(\beta)])^{-1}$
([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[F5] The open-to-closed inclusion induces a group isomorphism
$\iota^{C}_*:\pi_1(C_n(\operatorname{int}D^2),[q])\to\pi_1(C_n(D^2),[q])$ at
every configuration $q$ of interior points
([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F6] $\delta([\alpha])=[g(1)^{-1}]$ for a lift $g$ of $\alpha$ with
$g(0)=\operatorname{id}$, and $\delta$ is a well-defined group homomorphism
$\pi_1(C_n(\operatorname{int}D^2),[Q_n])\to
\operatorname{Mod}(D^2,Q_n;\partial D^2)$
([[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]],
[[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]]).

[F7] For composable paths the concatenation is $(\alpha*\beta)(s)=\alpha(2s)$
for $s\le\frac12$ and $(\alpha*\beta)(s)=\beta(2s-1)$ for $s\ge\frac12$; the
product $[\alpha][\beta]=[\alpha*\beta]$ traverses $\alpha$ first and $\beta$
second, $\pi_1(X,x_0)$ is a group under it, and the reversed loop
$\bar\alpha(s)=\alpha(1-s)$ satisfies $[\bar\alpha]=[\alpha]^{-1}$
([[def-based-loops-and-fundamental-group]],
[[thm-fundamental-group-laws]]).

[F8] $F_n(X)$ is the subspace of pairwise distinct tuples in $X^n$, and
$C_n(X)=F_n(X)/S_n$ carries the quotient topology of the surjective quotient
map $p_n$, with classes written $[x]$; two tuples define the same class exactly
when their coordinate sets agree. The disc is $D^2=\{z\in\mathbb C:|z|\le1\}$
with the subspace topology of $\mathbb C\cong\mathbb R^2$ and Euclidean norm
$\lVert\cdot\rVert_2$, and the base points are $q_1=-h$, $q_2=h$ under this
identification
([[def-ordered-configuration-space]],
[[def-unordered-configuration-space]],
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[F9] $\sin0=0$ and $\cos0=1$
([[thm-sine-and-cosine-derivatives]]); $\sin\pi=0$, $\cos\pi=-1$,
$\sin(x+\pi)=-\sin x$ and $\cos(x+\pi)=-\cos x$ for every real $x$
([[thm-quarter-turn-values-and-shift-formulas]]); $\sin^2x+\cos^2x=1$, hence
$|\sin x|\le1$ and $|\cos x|\le1$, and $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$
([[cor-trigonometric-parity-and-pythagorean-identity]]); $\sin x>0$ for
$0<x<\pi$ ([[cor-pi-is-the-first-positive-sine-zero]]); and $\sin$ and $\cos$
are $1$-Lipschitz on $\mathbb R$, hence continuous
([[cor-sine-and-cosine-are-one-lipschitz]]).

[F10] For complex numbers $z,w$ one has $|z|\ge0$,
$|z|=0\Leftrightarrow z=0$, $z\bar z=|z|^2$, $|zw|=|z|\,|w|$ and
$|z+w|\le|z|+|w|$; addition $V\times V\to V$ and scalar multiplication
$\mathbb K\times V\to V$ are continuous on every normed space
([[lem-complex-conjugation-and-modulus-laws]],
[[lem-vector-operations-are-continuous-in-a-normed-space]]).

[F11] A group isomorphism is a bijective group homomorphism
([[def-group-isomorphism-and-automorphism]]).

[F12] The Axiom of Choice is assumed
([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 **The clockwise loop.** For $t\in I$ put $u(t):=\cos 2\pi t-i\sin 2\pi t$ and $\gamma(t):=q_1+2h\,u(t)$. Then $\gamma$ is continuous, because $t\mapsto 2\pi t$ is continuous, $\sin$ and $\cos$ are continuous by [F9], and the field operations of $\mathbb C$ are continuous by [F10]; further $|u(t)|^2=u(t)\overline{u(t)}=\cos^22\pi t+\sin^22\pi t=1$ by [F9] and [F10], so $|u(t)|=1$, and with $q_1=-h$, $q_2=h$ of [F8] this gives $|\gamma(t)-q_1|=|2h\,u(t)|=2h$ and $|\gamma(t)|\le|q_1|+2h=3h=\frac14<1$; similarly $u(0)=1$ and $u(1)=\cos2\pi-i\sin2\pi=1$ by [F9], the latter since $\sin2\pi=\sin(0+2\pi)=-\sin(0+\pi)=0$ and $\cos2\pi=\cos(0+2\pi)=-\cos(0+\pi)=1$, so $\gamma(0)=q_1+2h=q_2=\gamma(1)$. Hence $\gamma$ is a continuous based loop of $Y_2=\operatorname{int}D^2\setminus\{q_1\}$ at $q_2$, because $\gamma(t)\ne q_1$ and $\gamma(t)\in\operatorname{int}D^2$ for every $t$. [F1, F2, F8, F9, F10]

1.2 **The rigid rotation loop is the inverse square of the sliced half twist.** Put $\alpha:=S(\sigma_1)^{-1}$, the reversed raw slice loop of the standard positive half twist; by [F2] and [F4] its underlying unordered loop is $s\mapsto S(\sigma_1)(1-s)=[\rho(1-s),-\rho(1-s)]$, a loop at $[Q_2]$ since $\{\rho(1),-\rho(1)\}=\{q_2,q_1\}=\{\rho(0),-\rho(0)\}$, and by [F7] its class is $[\alpha]=[S(\sigma_1)]^{-1}$. Let $P(t):=-\rho(1-2t)$ for $0\le t\le\frac12$ and $P(t):=\rho(2-2t)$ for $\frac12\le t\le1$, a continuous path with $P(0)=-\rho(1)=q_1$, $P(\frac12)=-\rho(0)=q_2$, $P(1)=\rho(0)=q_1$ and $|P(t)|\le h$ by [F2]; a direct substitution of the definitions shows that $(P(t),-P(t))$ is exactly the ordered lift of $\alpha*\alpha$ from $Q_2$: on $[0,\frac12]$ the pair is $(-\rho(1-2t),\rho(1-2t))$, the lift of the reversed slice from $Q_2$, and on $[\frac12,1]$ it is $(\rho(2-2t),-\rho(2-2t))$, the continuation of that lift from the swapped tuple $(-\rho(0),\rho(0))=(h,-h)=(\rho(1),-\rho(1))$ of [F2]. Let $Q(t):=-h\,u(t)=u(t)q_1$, so that $(Q(t),-Q(t))$ is the ordered lift of $\rho_-$ by [F8], and consider the linear interpolation $W_r(t):=(1-r)P(t)+r\,Q(t)$, $(r,t)\in I\times I$, which is continuous by [F9] and [F10]. It never vanishes: at $t=0$ and $t=1$ one has $P=Q=q_1$, so $W_r=q_1\ne0$; at $t=\frac12$ one has $u(\frac12)=\cos\pi-i\sin\pi=-1$ and $Q(\frac12)=-h\,u(\frac12)=h=q_2=P(\frac12)$ by [F9] and [F2]; and for $0<t<\frac12$ both $P(t)$ and $Q(t)$ have second coordinate strictly positive, while for $\frac12<t<1$ both have second coordinate strictly negative. Indeed the second coordinate of $\rho(u)$ is $-2uh$ for $u\le\frac12$ and $2h(u-1)$ for $u\ge\frac12$ by [F2], which is strictly negative for $0<u<1$, so $P$ has second coordinate strictly positive for $0<t<\frac12$ and strictly negative for $\frac12<t<1$, while $Q(t)=-h\cos2\pi t+ih\sin2\pi t$ has second coordinate $h\sin2\pi t$, positive for $0<t<\frac12$ by [F9] and negative for $\frac12<t<1$ by [F9] since $\sin2\pi t=-\sin(2\pi t-\pi)$ with $0<2\pi t-\pi<\pi$. Moreover $|W_r(t)|\le(1-r)|P(t)|+r|Q(t)|\le h$ by [F10], so $(W_r(t),-W_r(t))$ is a continuous family in $F_2(\operatorname{int}D^2)$ whose initial tuple is $(W_r(0),-W_r(0))=(q_1,q_2)$ and whose terminal tuple is $(W_r(1),-W_r(1))=(q_1,q_2)$, independently of $r$; hence it is a path homotopy relative to $\{0,1\}$ from the ordered lift of $\alpha*\alpha$ to the ordered lift of $\rho_-$, and passing to $C_2(\operatorname{int}D^2)$ by [F8] gives $[\alpha*\alpha]=[\rho_-]$, that is $[S(\sigma_1)]^{-2}=[\alpha]^2=[\alpha*\alpha]=[\rho_-]$ by [F7]. [F2, F4, F7, F8, F9, F10]

2.1 **The ordered lift and the push.** The tuple $L_\gamma(t)=(q_1,\gamma(t))$ has pairwise distinct coordinates, since $\gamma(t)\ne q_1$ for all $t$, and both coordinates in $\operatorname{int}D^2$, so $L_\gamma$ is a continuous loop in $F_2(\operatorname{int}D^2)$ with $L_\gamma(0)=(q_1,q_2)=L_\gamma(1)$; hence $\bar\gamma:=p_2\circ L_\gamma$ is a based loop of $C_2(\operatorname{int}D^2)$ at $[Q_2]$ by [F8], and [F1], available under the present hypothesis of the Axiom of Choice [F12], gives $\operatorname{Push}_2([\gamma])=\delta([\bar\gamma])\in\operatorname{PMod}(D^2,Q_2;\partial D^2)$. [F1, F8, F12, step 1.1]

3.1 **Homotopy to the rigid rotation loop.** Define $x_1^s(t):=-h\bigl((1-s)+s\,u(t)\bigr)$ and $x_2^s(t):=x_1^s(t)+2h\,u(t)$ for $(s,t)\in I\times I$, and let $\rho_-(t):=[u(t)q_1,\,u(t)q_2]$ be the **clockwise rigid rotation loop** of the two marked points. The pair $(x_1^s(t),x_2^s(t))$ is continuous in $(s,t)$ by [F9] and [F10], lies in $F_2(\operatorname{int}D^2)$ because $x_2^s(t)-x_1^s(t)=2h\,u(t)\ne0$ and because $|x_1^s(t)|\le h\bigl((1-s)+s|u(t)|\bigr)=h$ and $|x_2^s(t)|\le3h=\frac14<1$ by [F10], and it satisfies $x_1^s(0)=x_1^s(1)=-h$ and $x_2^s(0)=x_2^s(1)=h$, so the initial and terminal tuples are $(q_1,q_2)$ for every $s$; at $s=0$ the pair is $(-h,-h+2h\,u(t))=(q_1,\gamma(t))=L_\gamma(t)$, and at $s=1$ it is $(-h\,u(t),h\,u(t))=(u(t)q_1,u(t)q_2)$, the ordered lift of $\rho_-$ from $Q_2$. Hence $(s,t)\mapsto(x_1^s(t),x_2^s(t))$ is a path homotopy relative to $\{0,1\}$ in $F_2(\operatorname{int}D^2)$ from $L_\gamma$ to the ordered lift of $\rho_-$, and composing with the quotient map $p_2$ of [F8] gives a path homotopy relative to $\{0,1\}$ from $\bar\gamma$ to $\rho_-$ in $C_2(\operatorname{int}D^2)$; therefore $[\bar\gamma]=[\rho_-]$ in $\pi_1(C_2(\operatorname{int}D^2),[Q_2])$. [F1, F8, F9, F10, step 2.1]

4.1 **The push is the positive full twist.** By [F4] and [F5] and [F11], $\Psi([\sigma_1])=\delta\bigl((\iota^{C}_*)^{-1}\Phi([\sigma_1])\bigr)=\delta\bigl((\iota^{C}_*)^{-1}\bigl((\iota^{C}_*[S(\sigma_1)])^{-1}\bigr)\bigr)=\delta([S(\sigma_1)]^{-1})$, because the inverse of a group isomorphism preserves inverses; by [F3] this value is $[H_1]$, so $\delta([S(\sigma_1)]^{-2})=\delta([S(\sigma_1)]^{-1})^2=[H_1]^2$ by the homomorphism property of [F6]. Combining with steps 2.1, 3.1 and 1.2, $$\operatorname{Push}_2([\gamma])=\delta([\bar\gamma])=\delta([\rho_-])=\delta([S(\sigma_1)]^{-2})=[H_1]^2,$$ and $[H_1]^2=\Psi([\sigma_1])^2=\Psi([\sigma_1]^2)=\Psi([\sigma_1\star\sigma_1])$ by [F3], [F4], [F11], the class of the square of the standard positive half twist; this class is pure, as it is a point push by [F1]. [F1, F3, F4, F5, F6, F11, step 2.1, step 3.1, step 1.2]

5.1 **The counterclockwise push is the inverse.** The loop $\gamma^-(t):=\gamma(1-t)$ is the reversed loop $\bar\gamma$ of [F7] at $q_2$, so $[\gamma^-]=[\gamma]^{-1}$ in $\pi_1(Y_2,q_2)$; since $\operatorname{Push}_2$ is a group homomorphism by [F1], $\operatorname{Push}_2([\gamma]^{-1})=\operatorname{Push}_2([\gamma])^{-1}=[H_1]^{-2}$ by step 3.1, and the traces $t\mapsto q_1+2h\,u(1-t)$ of $q_2$ under the reversed loop are the counterclockwise parametrisation of the same circle: pushing $q_2$ counterclockwise around $q_1$ gives the inverse of the positive two-strand full twist. [F1, F2, F7, step 3.1, step 4.1] ∎

## Remarks

- The two directions are distinguished by the inverse-endpoint convention: by
  step 1.2 the clockwise loop is the inverse square of the raw slice of
  $\sigma_1$, and the inverse-endpoint boundary map turns that inverse into the
  positive full twist. Reversing the loop therefore inverts the class.
- The computation is the $n=2$ case of the point-pushing picture of Farb and
  Margalit, where pushing the marked point along a loop in the surface drags
  the rest of the surface and produces the corresponding mapping class; no
  injectivity of $\operatorname{Push}_2$ is used or asserted, and the class is
  identified with the braid-side full twist through the braid-mapping-class
  isomorphism.
- Nothing in the argument selects a lift or a representative: the loop, its
  ordered lift and the homotopies are given by explicit formulas, and the
  Axiom of Choice enters only through the point-pushing definition and the
  braid-mapping-class isomorphism it consumes.
