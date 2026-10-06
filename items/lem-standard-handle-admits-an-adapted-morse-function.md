---
id: lem-standard-handle-admits-an-adapted-morse-function
kind: lemma
title: "Standard handle admits an adapted Morse function"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-k-handle-core-cocore-attaching-region-and-belt-sphere, thm-morse-lemma, def-morse-function-and-excellent-morse-function, def-downward-gradient-like-vector-field, def-attaching-a-smooth-handle-with-corner-rounding, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "explicit formula with product collars and a corner band"
---

## Statement

Let $0\le k\le n$ and let $H=D^k\times D^{n-k}$ be the standard
$n$-dimensional $k$-handle, with the attaching region
$S^{k-1}\times D^{n-k}$ and the outgoing region $D^k\times S^{n-k-1}$; write
$a=|u|^2$ and $b=|v|^2$ for $(u,v)\in H$. Then there are real numbers
$0<\alpha_0<\alpha_1<1$ (here $\alpha_0=5/8$, $\alpha_1=3/4$ are admissible) and
a smooth function $F:H\to\mathbb R$ such that:

1. $F$ has exactly one critical point, the origin; it is nondegenerate of index
   $k$, and $F=-|u|^2+|v|^2$ in a neighbourhood of it, so that the Euclidean
   field $-\operatorname{grad}F$ is a downward gradient-like field for $F$;
2. $F=-a$ in the attaching collar $\{a\ge\alpha_1,\ b\le\alpha_0\}$; in
   particular $F=-1$ on the attaching disk $S^{k-1}\times D^{n-k}_{\sqrt{\alpha_0}}$
   minus the corner collar, and the level sets of $F$ in that collar are the
   product level sets $\{a=\mathrm{const}\}$;
3. $F=b$ in the outgoing collar $\{b\ge\alpha_1,\ a\le\alpha_0\}$; in particular
   $F=+1$ on $D^k_{\sqrt{\alpha_0}}\times S^{n-k-1}$, and the level sets in that
   collar are the product level sets $\{b=\mathrm{const}\}$;
4. $F$ has no critical point in the corner band
   $\{a\ge\alpha_0,\ b\ge\alpha_0\}$; for corner smoothing sufficiently small that its support lies in this band, the
   corner smoothing of [[def-attaching-a-smooth-handle-with-corner-rounding]] is
   supported in a collar of the corner inside that band, $F$ restricts smoothly to every such
   compatibly rounded handle, the collars of (2) and (3) with their level
   structures are unaffected by the rounding, and the origin remains the only
   critical point.

The endpoint cases are included: for $k=0$ the attaching region is empty and
$F=|v|^2$ has a single minimum on the disk $D^n$; for $k=n$ the outgoing region
is empty and $F=-|u|^2$ has a single maximum; and for $k=n=0$ the handle is a
point carrying the constant function.

## Facts & Assumptions

[F1] [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: For integers $0\le k\le n$, the standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$. Its core is $D^k\times\{0\}$, its cocore is $\{0\}\times D^{n-k}$, its attaching region is $S^{k-1}\times D^{n-k}$, and its attaching sphere is $S^{k-1}\times\{0\}$. The outgoing region is $D^k\times S^{n-k-1}$ and the belt sphere is $\{0\}\times S^{n-k-1}$. Here $D^j$ is the closed unit disk, $D^0$ is a point, and $S^{-1}=\varnothing$.

[F2] [[thm-morse-lemma]]: Let $f:M\to\mathbb R$ be smooth, let $p$ be a nondegenerate critical point of $f$, and let $\lambda$ be the index of $p$. If $n=\dim M$, then there are local coordinates $(x^1,\dots,x^n)$ centered at $p$ in which $f=f(p)-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^{n}(x^i)^2$. For $n=0$, both sums are empty.

[F3] [[def-morse-function-and-excellent-morse-function]]: Let $M$ be a smooth manifold and let $f:M\to\mathbb R$ be smooth. The function $f$ is a **Morse function** when every critical point of $f$ is nondegenerate. The function $f$ is an **excellent Morse function** when it is Morse and any two distinct critical points have distinct critical values.

[F4] [[def-downward-gradient-like-vector-field]]: Let $f:M\to\mathbb R$ be Morse. A smooth vector field $X$ is **downward gradient-like for $f$** if both conditions hold: $df_x(X_x)<0$ at every $x\notin\operatorname{Crit}(f)$; and for every $p\in\operatorname{Crit}(f)$ there are Morse coordinates $(u,v)$ centred at $p$, with $f=f(p)-|u|^2+|v|^2$, in which $X=2\sum_iu_i\partial_{u_i}-2\sum_jv_j\partial_{v_j}$.

[F5] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary, and let $k$ be an integer with $0\leq k\leq n$. Attach the standard $k$-handle by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. Use collars to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. There is no corner to round when $k=0$ or $k=n$.

[F6] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

[A1] **Partial derivatives.** With $a=|u|^2$, $b=|v|^2$ and a smooth $G(a,b)$, the differential of $p\mapsto G(|u|^2,|v|^2)$ is $2(\partial_aG)\,u\cdot du+2(\partial_bG)\,v\cdot dv$. Hence a point with $u\ne0$ and $v\ne0$ is critical only if $\partial_aG=\partial_bG=0$, and on the axis $u=0$, $v\ne0$ it is critical only if $\partial_bG=0$, with the symmetric statement on $v=0$.

## Proof

**Given:** The standard handle $H=D^k\times D^{n-k}$, $a=|u|^2$, $b=|v|^2$.

1.1 Integrate and normalize a positive smooth bump on $(5/8,3/4)$, extended by zero, to obtain a smooth nondecreasing $\chi:[0,1]\to[0,1]$ with $\chi=0$ on $[0,5/8]$ and $\chi=1$ on $[3/4,1]$, and set $A:=\chi(a)$, $B:=\chi(b)$ and $F(u,v):=-a\,(1-B)+b\,(1-A)+A\,B\,(b-a)$. This is a smooth function of $(a,b)$, hence smooth on $H$. [F6, construct]

2.1 Substituting the flat values of $\chi$ identifies $F$ on four regions: $F=b-a$ on $\{a\le5/8,\ b\le5/8\}$; $F=-a$ on $\{a\ge3/4,\ b\le5/8\}$; $F=b$ on $\{b\ge3/4,\ a\le5/8\}$; and $F=b-a$ again on $\{a\ge3/4,\ b\ge3/4\}$. Consequently $F=-1$ on the part $\{a=1,\ b\le5/8\}$ of the attaching region, $F=1$ on the part $\{b=1,\ a\le5/8\}$ of the outgoing region, and the level sets in the two collars are the products $\{a=\mathrm{const}\}$ and $\{b=\mathrm{const}\}$ respectively. [step 1.1, algebra]

3.1 Differentiation gives $\partial_aF=-(1-B)-AB-A'[b(1-B)+aB]\le0$ and $\partial_bF=(1-A)+AB+B'[a(1-A)+bA]\ge0$. If $B<1$, the first derivative is strictly negative; if $B=1$, the second equals one. Thus when $u,v\ne0$ at least one component of $dF$ is nonzero. On the axis $v=0$ one has $F=-a$ and $\partial_aF=-1$; on $u=0$ one has $F=b$ and $\partial_bF=1$. By [A1], no point other than the origin is critical. Near the origin $F=b-a$, so its Hessian has index $k$ and is nondegenerate, including the zero-dimensional convention. [A1, F2, F3, step 1.1, step 2.1, algebra]

4.1 The Euclidean field $X:=-\operatorname{grad}F$ satisfies $dF(X)=-\|\operatorname{grad}F\|^2<0$ off the critical set, and near the origin $F=-|u|^2+|v|^2$ gives $\operatorname{grad}F=(-2u,2v)$, that is, $X=(2u,-2v)$ in the Morse chart. Hence $X$ is a downward gradient-like field for $F$ in the sense of [F4]. [F4, step 3.1, algebra]

4.2 Finally let the corner of $H$ be rounded along a compatible profile supported in a collar of the corner contained in $\{a>7/8,\ b>7/8\}$, which [F5] allows because the rounding may be taken as small as desired. Since $F$ is smooth on $H$ and has no critical point in that collar by step 3.1, its restriction to the rounded domain is a smooth function with the same unique critical point at the origin. The attaching collar $\{a\ge3/4,\ b\le5/8\}$ and the outgoing collar $\{b\ge3/4,\ a\le5/8\}$ are disjoint from the support of the rounding, so their level-set structure from step 2.1 survives; in particular the attaching and outgoing disks of step 2.1 are level sets of $F$ on the rounded handle. [F5, step 2.1, step 3.1, algebra]

5.1 The endpoint cases follow from the same formula: for $k=0$ one has $a\equiv0$, hence $A=0$ and $F=b=|v|^2$ on $H=D^n$, with a single minimum at the origin, no attaching region, and $F=+1$ on the outgoing region $\partial H$; for $k=n$ one has $b\equiv0$, hence $B=0$ and $F=-a=-|u|^2$ on $H=D^n$, with a single maximum, $F=-1$ on the whole attaching region $\partial H$, and empty outgoing region; for $n=0$ the handle is the single point at which both sums are empty. In these two degenerate cases the corner is empty, so [F5] prescribes no rounding and the construction terminates at step 4.1. [F1, F5, step 1.1, step 4.1, algebra] ∎
