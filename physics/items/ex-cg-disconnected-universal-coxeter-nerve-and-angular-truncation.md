---
id: ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation
kind: example
title: "The disconnected universal-Coxeter nerve and the angular truncation convention"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hh-coxeter-matrix-word-group-and-length, def-symmetric-group, lem-symmetric-group-is-a-group, def-cg-spherical-gram-simplex-and-angular-link, lem-cg-spherical-simplex-existence-and-link-gram-formula, def-cg-euclidean-cone-and-spherical-join-metrics, thm-cg-cone-join-metric-and-local-product-chart, def-metric-space, def-geodesic-and-geodesic-metric-space, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, def-connected-space, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.5.6-5.10, printed pp. 59-62 (the Euclidean cone, the identity d(x,x')=t+t' when d(y,y')>=pi, the metric proof and the geodesic characterisation); I.7.15, printed p. 103 (the intrinsic pseudometric with the value infinity between components)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 505-507 (the truncation theta=min{pi,d} in the cone formula); 7.1, printed pp. 123-127 (the discrete nerve of the universal Coxeter system)"
dependency_level: 8
---

## Example

Let $n\ge2$ and let $L=\{x_1,\dots,x_n\}$ be the **universal-Coxeter nerve**: the finite spherical complex ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii)) whose cells are $n$ one-point spherical simplices, the nerve of the Coxeter system on $n$ generators in which $m_{st}=\infty$ for all $s\ne t$, so that no subset containing two distinct generators is spherical, and the nerve has no edge ([[def-hh-coxeter-matrix-word-group-and-length]]; here the nerve has simplices the subsets $T\subseteq S$ whose standard parabolic subgroups $W_T=\langle T\rangle$ are finite); the presentation argument is verified in step 1.1 below. Write $d_{\mathrm{path}}$ for its componentwise intrinsic path distance and $d_\pi=\min\{\pi,d_{\mathrm{path}}\}$ for its truncated angular metric ([[def-cg-euclidean-cone-and-spherical-join-metrics]]). Then:

(i) every component of $L$ is a single point, $d_{\mathrm{path}}(x,y)=+\infty$ for $x\ne y$, and $d_\pi(x,y)=\pi$ for $x\ne y$. Thus $d_\pi$ is a metric of diameter $\pi$ that agrees with $d_{\mathrm{path}}$ nowhere off the diagonal; the infinite value $d_{\mathrm{path}}(x,y)$ is not an ordinary metric value ([[def-metric-space]]), which is precisely why the truncation is needed.

(ii) In the cone $C(L)$ the distance of $(r,x)$ and $(s,y)$ with $x\ne y$ is $r+s$: the formula of [[def-cg-euclidean-cone-and-spherical-join-metrics]](3) gives $d_C^2=r^2+s^2-2rs\cos\pi=(r+s)^2$, and the path through the apex realises it. Hence $C(L)$ is the metric star of $n$ rays of infinite length glued at the apex, and every path between two different rays passes through the apex.

(iii) $L$ is vacuously $D_\pi$-geodesic: no pair of distinct points has distance $<\pi$. Hence [[thm-cg-cone-join-metric-and-local-product-chart]](2) applies and shows that $C(L)$ is a geodesic metric space, and a geodesic joining points of two different rays is the two-segment path through the apex.

(iv) Any truncation value $\theta<\pi$ would be inconsistent with this star geometry: with distance $\sqrt{r^2+s^2-2rs\cos\theta}<r+s$ between the branches and every path between them passing through the apex, no geodesic would join the two branches, while with the value $\pi$ the through-apex path is one. Thus $d_\pi=\pi$, and not $d_{\mathrm{path}}$, is the value the cone formula must receive, and the auxiliary infinity is never passed to a metric value.

## Facts & Assumptions

**Given:** An integer $n\ge2$ and the finite spherical complex $L=\{x_1,\dots,x_n\}$ whose cells are the $n$ one-point spherical simplices $\Sigma(C_i)$ with $C_i=(1)$, the nerve of the universal Coxeter system on $n$ generators; in parts (ii)-(iv) also real numbers $r,s>0$ and distinct $x,y\in L$.

[F1] For a real symmetric positive-definite matrix $C$ with diagonal $1$ and Cholesky factor $L$ with rows $u_i$, the positive cone is $K(C)=\{\sum_i\lambda_iu_i:\lambda_i\ge0\}$ and the spherical simplex is $\Sigma(C)=K(C)\cap S^n$; for $C=(1)$ one has $u_0=1\in\mathbb R^1$, $K(C)=[0,\infty)$ and $\Sigma(C)=\{1\}$, a single point ([[def-cg-spherical-gram-simplex-and-angular-link]]).

[F2] A finite spherical complex $X=|K|_C$ is the quotient of the disjoint union of the spherical simplices $\Sigma(C_\sigma)$ by the vertex-wise identifications of faces, with the componentwise chain metric $d$; its components are the classes under the relation "joined by a chain of points in common cells" and the componentwise path distance is $d_{\mathrm{path}}(x,y)=+\infty$ between distinct components, a value that is auxiliary notation only and is truncated in the cone formulas ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii), (vi)).

[F3] The angular link carries the extension $d_{\mathrm{path}}$, the truncated angular metric is $d_\pi(x,y)=\min\{\pi,d_{\mathrm{path}}(x,y)\}$ with the convention $\min\{\pi,\infty\}=\pi$, the Euclidean cone is $C(L)=\{o\}\sqcup((0,\infty)\times L)$ with $d_C(o,(r,x))=r$ and $d_C\bigl((r,x),(s,y)\bigr)^2=r^2+s^2-2rs\cos d_\pi(x,y)$, and a link is $D_\pi$-geodesic if every pair at distance $<\pi$ is joined by a minimizing segment ([[def-cg-euclidean-cone-and-spherical-join-metrics]](1)-(4)).

[F4] $d_\pi$ is a metric of diameter at most $\pi$ and agrees with $d_{\mathrm{path}}$ on every pair at distance $<\pi$; if $d_\pi(x,y)=\pi$ then the path through the apex has length $r+s=d_C\bigl((r,x),(s,y)\bigr)$ and is minimizing; and if $L$ is $D_\pi$-geodesic then $C(L)$ is a geodesic space, every minimizing geodesic joining two of its points being contained in the closed ball of radius $\max\{r,s\}$ about $o$ ([[thm-cg-cone-join-metric-and-local-product-chart]](1)-(2)).

[F5] A metric on a set $X$ is a function $X\times X\to\mathbb R$ satisfying separation, symmetry and the triangle inequality, so every metric value is an honest real number; along a path $\gamma\colon[0,1]\to X$ and any partition $0=t_0<\cdots<t_m=1$ the triangle inequality gives $\sum_i d(\gamma(t_{i-1}),\gamma(t_i))\ge d(\gamma(0),\gamma(1))$ ([[def-metric-space]]).

[F6] A geodesic segment from $x$ to $y$ in a metric space is a map $\gamma\colon[0,\ell]\to X$ with $\gamma(0)=x$, $\gamma(\ell)=y$ and $d(\gamma(s),\gamma(t))=\lvert s-t\rvert$ for all $s,t$; a metric space is geodesic when every two of its points are joined by one ([[def-geodesic-and-geodesic-metric-space]]).

[F7] $\cos\pi=-1$, and cosine is strictly decreasing on $[0,\pi]$, hence injective there ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F8] Endowed with the subspace topology of $\mathbb R$, the interval $[0,1]$ is a connected subset of $\mathbb R$; the continuous image of a connected space is connected; and a nonempty connected subset of a discrete space is a singleton, because for $a\ne b$ in a connected set $A$ the sets $\{a\}$ and $A\setminus\{a\}$ are nonempty, disjoint and open in $A$ ([[cor-connected-subsets-of-the-line]], [[thm-continuous-image-of-a-connected-space]], [[def-connected-space]]).

[F9] The universal Coxeter group has presentation $\langle S\mid s^2=1\ (s\in S)\rangle$: its universal property sends any assignment of involutions in a group to a homomorphism from $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]). Here the nerve means the complex whose simplices are the subsets $T\subseteq S$ with finite $W_T=\langle T\rangle$; step 1.1 verifies that these are exactly the empty simplex and singletons. Bijections of $\mathbb R$ form the group $\operatorname{Sym}(\mathbb R)$ under composition ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

## Verification

1.1 The nerve and its path distance. Fix distinct $s,t\in S$. Send $s$ to the involution $a(u)=-u$, $t$ to $b(u)=2-u$, and every other generator to the identity in $\operatorname{Sym}(\mathbb R)$. By [F9] this extends to a homomorphism from $W$. The product $ab$ is the translation $u\mapsto u-2$, whose $k$-th power sends $0$ to $-2k$; these images are distinct for distinct nonnegative integers $k$. Hence $W_{\{s,t\}}$ is infinite. Every $W_T$ with $s,t\in T$ contains it, and is infinite; a singleton generates at most the two elements $1,s$, so the nerve consists exactly of the empty simplex and the $n$ singletons. Every cell $\Sigma(C_i)$ of its spherical realization $L$ is a point by [F1]. Any step of a chain in $L$ therefore has equal endpoints, and no chain joins distinct points. Thus [F2] gives $d_{\mathrm{path}}(x,x)=0$ and $d_{\mathrm{path}}(x,y)=+\infty$ for $x\ne y$. [given, F1, F2, F9, algebra]

2.1 The truncated metric. By [F3] and the convention $\min\{\pi,\infty\}=\pi$, one has $d_\pi(x,y)=\min\{\pi,d_{\mathrm{path}}(x,y)\}=\pi$ for $x\ne y$, while $d_\pi(x,x)=0$ by step 1.1. By [F4] the function $d_\pi$ is a metric of diameter at most $\pi$, and since $n\ge2$ there is a pair $x\ne y$ with $d_\pi(x,y)=\pi$, so the diameter is exactly $\pi$. Comparing values, $d_\pi$ agrees with $d_{\mathrm{path}}$ exactly for $x=y$ and nowhere off the diagonal, and by [F5] a metric takes real values while $+\infty$ is not a real number, so $d_{\mathrm{path}}$ itself is not a metric on $L$ and the truncation is what produces one. [step 1.1, F2, F3, F4, F5]

3.1 The cone distances. For $r,s>0$ the cone formula of [F3] and step 2.1 give, for $x=y$, $d_C\bigl((r,x),(s,x)\bigr)^2=r^2+s^2-2rs\cos0=(r-s)^2$, so that $d_C=\lvert r-s\rvert$, and, for $x\ne y$, $d_C\bigl((r,x),(s,y)\bigr)^2=r^2+s^2-2rs\cos\pi=(r+s)^2$ with $\cos\pi=-1$ by [F7], so that $d_C=r+s$; also $d_C(o,(r,x))=r$. Restricting to one ray, the map $t\mapsto(t,x)$ with $0\mapsto o$ therefore satisfies $d_C=\lvert t-t'\rvert$ on $[0,\infty)$, an isometry onto the ray $R_x:=\{o\}\cup\{(t,x):t>0\}$, and for $x\ne y$ all pairs on different rays satisfy $d_C=t+t'$. [given, step 2.1, F3, F7, algebra]

4.1 The rays meet only at the apex. Let $x\ne y$, $r,s>0$ and let $\gamma\colon[0,1]\to C(L)$ be a path with $\gamma(0)=(r,x)$ and $\gamma(1)=(s,y)$. By step 3.1 the ball of radius $r$ about $(r,x)$ consists of the points $(t,x)$ with $\lvert t-r\rvert<r$, since a point $(t,z)$ with $z\ne x$ has distance $r+t\ge r$; so the open ray $R_x\setminus\{o\}$ is open in $C(L)$, and likewise every $R_z\setminus\{o\}$. These open rays are pairwise disjoint with union $C(L)\setminus\{o\}$, and the projection $\pi$ sending $R_z\setminus\{o\}$ to $z$ is continuous for the discrete topology on $L$, its fibres being open. If $\gamma$ avoided $o$, then $\pi\circ\gamma$ would be a continuous map $[0,1]\to L$: by [F8] the interval $[0,1]$ is connected, so its image is connected, and a connected subset of the discrete space $L$ is a singleton, contradicting $\pi(\gamma(0))=x\ne y=\pi(\gamma(1))$. Hence every path from $(r,x)$ to $(s,y)$ passes through the apex $o$. [step 3.1, F5, F8, algebra]

5.1 The through-apex geodesic and geodesic space. For $x\ne y$ and $r,s>0$, step 2.1 gives $d_\pi(x,y)=\pi$, so [F4] shows that the two-segment path through $o$ has length $r+s=d_C\bigl((r,x),(s,y)\bigr)$ and is minimizing; in particular it is a geodesic segment by [F6]. For the $D_\pi$-condition, a pair $(z,w)$ with $d_\pi(z,w)<\pi$ has $z=w$ by step 2.1 and is joined by the constant segment $\gamma\colon[0,0]\to L$ with $\gamma(0)=z$, so the hypothesis of [F4] holds vacuously and $C(L)$ is a geodesic metric space. Finally, if $\gamma\colon[0,r+s]\to C(L)$ is a geodesic from $(r,x)$ to $(s,y)$ with $x\ne y$, then $\gamma$ is a path, so by step 4.1 there is $t_0$ with $\gamma(t_0)=o$, and since $\gamma$ is distance-preserving of length $r+s=d_C\bigl((r,x),(s,y)\bigr)$ while $d_C((r,x),o)=r$ and $d_C(o,(s,y))=s$, one gets $t_0=r$; the restriction of $\gamma$ to $[0,r)$ avoids $o$, hence lies in the single ray $R_x$ by the argument of step 4.1, and for $u\in[0,r)$ the distance to $\gamma(r)=o$ gives $\gamma(u)=(r-u,x)$; symmetrically $\gamma(r+u')=(u',y)$ for $u'\in(0,s]$, with $\gamma(r)=o$. So the geodesic is the two-segment path through the apex. [step 2.1, step 3.1, step 4.1, F4, F6]

6.1 The truncation value is forced. Let $x\ne y$ and $r,s>0$. The value $\theta=0$ is excluded at once: it would give $d_C\bigl((r,x),(r,y)\bigr)=0$ for distinct points and violate separation, so let $\theta\in(0,\pi)$. If the cone formula received the value $\theta$ in place of $\pi$, it would assign the points $(r,x)$ and $(s,y)$ the distance $L:=\sqrt{r^2+s^2-2rs\cos\theta}$, which is $<r+s$ because cosine is strictly decreasing on $[0,\pi]$ by [F7]; and the open rays would still be open for the distance function so defined, since a point of another branch is at distance at least $t_0\sin\theta>0$ from $(t_0,x)$ for every $t_0>0$ (the quadratic $t_0^2+t^2-2t_0t\cos\theta$ in $t\ge0$ is minimised at $t=t_0\cos\theta$ when this is nonnegative and at $t=0$ otherwise). Hence the argument of step 4.1 applies verbatim: a geodesic $\gamma\colon[0,L']\to C(L)$ from $(r,x)$ to $(s,y)$ would be a path, hence would pass through the apex at some time $t_0$; distance-preservation would then give $t_0=d_C\bigl((r,x),o\bigr)=r$ and $L'-t_0=d_C\bigl(o,(s,y)\bigr)=s$, so $L'=r+s$, contradicting $L'=d_C\bigl((r,x),(s,y)\bigr)=L<r+s$. Hence no geodesic joins the two branches once a value $\theta<\pi$ is used, whereas with the value $\pi$ the through-apex path is a geodesic by step 5.1: among the values in $[0,\pi]$, only $\pi$ makes $C(L)$ the metric star with its through-apex geodesics. Since a metric value must be a real number by [F5], the auxiliary value $+\infty$ cannot be passed either; so the formula receives $\pi$, the unique $\theta\in[0,\pi]$ with $\cos\theta=-1$ by [F7]. [step 4.1, step 5.1, F3, F5, F6, F7, algebra] ∎

## Remarks

- **The two conventions tested.** The example separates the two degenerate values of the componentwise path distance: $+\infty$ across components, which is never a metric value, and its truncation $\pi$, which is. The star $C(L)$ is the simplest cone in which the truncation is visible: the two rays meet only at the apex, and the through-apex path is the only way between them.
- **Relation to the sources.** The identity $d\bigl((r,x),(s,y)\bigr)=r+s$ for $d_\pi(x,y)\ge\pi$ is Bridson-Haefliger I.5.7, and the characterisation of geodesics through the cone point is I.5.10; Davis Appendix I.2 records the truncation $\theta=\min\{\pi,d\}$ in the cone formula. The example instantiates both on the discrete universal-Coxeter nerve, whose components are single points.
