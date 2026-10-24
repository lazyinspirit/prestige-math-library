---
id: ex-a-boy-surface-immersion-of-real-projective-two-space
kind: example
title: "Boy's surface: an immersion of the real projective plane in three-space"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-immersion-submersion-and-constant-rank-map, def-normal-bundle-of-a-formal-immersion, prop-first-stiefel-whitney-class-classifies-orientability, ex-real-projective-space-is-orientable-exactly-in-odd-dimension, def-real-projective-bundle-and-tautological-line, cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding, def-smooth-embedding, def-orientable-manifold, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame, thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Rob Kusner, Conformal geometry and complete minimal surfaces, Bulletin of the AMS (N.S.) 17 (1987), no. 2, pp. 291–295, Theorem B and Remark 1 (explicit Weierstrass data and immersedness of the odd-p surfaces M_p, p=3)"
      url: https://www.ams.org/journals/bull/1987-17-02/S0273-0979-1987-15564-9/S0273-0979-1987-15564-9.pdf
      locator: "pp. 291–295; the p=3 minimal projective plane, its six planar ends and the inversion construction"
    - title: "Hermann Karcher, Boy's Surface (Bryant–Kusner), 3D-XplorMath / Virtual Math Museum surface gallery, 2-page write-up"
      url: https://virtualmathmuseum.org/docs/Boy_s_Surface_Bryant-Kusner_.pdf
      locator: "complete 2-page document: the explicit parametrized minimal surface, its six punctures in three antipodal pairs, planar ends, and the triple point obtained after inversion"
    - title: "Eric W. Weisstein, \u201cBoy's Surface\u201d, MathWorld: the standard Bryant\u2013Kusner rational form on the disk"
      url: https://mathworld.wolfram.com/BoysSurface.html
      locator: "the displayed rational formulas for g_1,g_2,g_3 and P=(g_1,g_2,g_3)/(g_1^2+g_2^2+g_3^2)"
dependency_level: 2
---

## Example

There is a smooth immersion $\beta:\mathbb{RP}^2\to\mathbb R^3$ whose image is
Boy's surface. The Bryant–Kusner parametrisation is given on the closed unit
disk $\lvert w\rvert\le1$ by
$$g_1=-\tfrac32\operatorname{Im}\frac{w(1-w^4)}{w^6+\sqrt5\,w^3-1},\quad g_2=-\tfrac32\operatorname{Re}\frac{w(1+w^4)}{w^6+\sqrt5\,w^3-1},\quad g_3=\operatorname{Im}\frac{1+w^6}{w^6+\sqrt5\,w^3-1}-\tfrac12,$$
followed by inversion in the unit sphere,
$$P(w)=\frac{(g_1,g_2,g_3)}{g_1^2+g_2^2+g_3^2}.$$
The proof below shows that $g=(g_1,g_2,g_3)$ never vanishes off its poles,
and that $P$ extends smoothly and immersively at the three poles inside the disk.
It satisfies $P(w)=P(-1/w^\star)$ wherever the rational formulas are defined and $P(w)=P(-w)$ on the boundary
circle, so it descends to the quotient of the disk by the antipodal boundary
identification, which is $\mathbb{RP}^2$, and it has injective differential,
so $\beta$ is an immersion; these properties are verified directly below.

Every immersion $f:\mathbb{RP}^2\to\mathbb R^3$ has nontrivial normal line
bundle: a global nonvanishing normal field $n$ together with the standard
orientation of $\mathbb R^3$ would orient the tangent planes by declaring a
basis $(v_1,v_2)$ of $T_x\mathbb{RP}^2$ positive exactly when
$(df_xv_1,df_xv_2,n(x))$ is a positive basis of $T_{f(x)}\mathbb R^3$, contradicting
nonorientability of $\mathbb{RP}^2$. Assuming AC for the characteristic-class
suppliers, equivalently
$w_1(\nu_f)=w_1(T\mathbb{RP}^2)\ne0$ for the tautological generator. Boy's
surface has no global normal side and has self-intersections: the three
interior poles close to distinct points of the domain with common image $0$.


## Facts & Assumptions

**Given:** The disk $D=\{w\in\mathbb C:\lvert w\rvert\le1\}$, the polynomial $D_6(w)=w^6+\sqrt5\,w^3-1$, and the functions $g_1,g_2,g_3:D\setminus D_6^{-1}(0)\to\mathbb R$ and $P=(g_1,g_2,g_3)/(g_1^2+g_2^2+g_3^2)$ of the Example.

[F1] A smooth immersion is a smooth map whose differential is injective at every point. [[def-immersion-submersion-and-constant-rank-map]]

[F2] $\mathbb{RP}^2$ is the space of lines in $\mathbb R^3$; it is nonorientable, since $\mathbb{RP}^n$ is orientable exactly for odd $n$, and it is presented as the quotient of the closed disk by the antipodal identification $w\sim-w$ of the boundary circle (the hemisphere model of the line space). This quotient has one cell in each of dimensions $0,1,2$: its boundary quotient is $\mathbb{RP}^1$, a circle with one vertex and one open edge, and its disk interior is the open $2$-cell. Thus it is a finite CW complex and is an admissible base for [F5]. [[def-real-projective-bundle-and-tautological-line]], [[ex-real-projective-space-is-orientable-exactly-in-odd-dimension]]

[F4] A rank-one real vector bundle is trivial if and only if it admits a global frame, i.e. a nowhere-vanishing global section; for an immersion $f:M^2\to\mathbb R^3$ the normal bundle $\nu_f$ is the line bundle of the orthogonal complement of $df(TM)$ for the Euclidean metric. [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]], [[def-normal-bundle-of-a-formal-immersion]]

[F5] Assuming AC, $w_1$ classifies real line bundles over an admissible base, detects orientability, is additive under tensor product, and satisfies $w_1(E)=w_1(\det E)$ (the cited proposition, Proof 4.1). [[prop-first-stiefel-whitney-class-classifies-orientability]]

## Verification

1.1 Put $d(w)=D_6(w)$. Its roots satisfy $w^3=u_\pm=(-\sqrt5\pm3)/2$. Exactly the three cube roots of $u_+$ lie in the open unit disk, and all are simple since $d'(w)=3w^2(2w^3+\sqrt5)=9w^2$ there. Put $A=w/d$, $B=w^5/d$ and $C=(1+w^6)/d$. If $g_1=g_2=0$ then $\operatorname{Im}(A-B)=0$ and $\operatorname{Re}(A+B)=0$, hence $B=-\overline A$. For $w\ne0$ their absolute values force $|w|=1$. On that circle, writing $w=e^{i\theta}$ gives $C=2\cos3\theta/(\sqrt5+2i\sin3\theta)$, so $|\operatorname{Im}C|=|4\cos3\theta\sin3\theta|/(5+4\sin^23\theta)\le2/5<1/2$. Thus $g_3=\operatorname{Im}C-1/2\ne0$. At $w=0$ it is $-1/2$. Consequently $g$ never vanishes at a finite non-pole. [given, algebra]

2.1 Write $g=\operatorname{Re}h$, where $h=(\tfrac32 i(A-B),-\tfrac32(A+B),-iC-\tfrac12)$ is holomorphic off the poles. Differentiation gives $h'=d^{-2}(\tfrac32 iN_1,-\tfrac32 N_2,-iN_3)$, with $N_1=w^{10}-2\sqrt5w^7-5w^6+5w^4-2\sqrt5w^3-1$, $N_2=-w^{10}+2\sqrt5w^7-5w^6-5w^4-2\sqrt5w^3-1$, and $N_3=3w^2(\sqrt5w^6-4w^3-\sqrt5)$. The identities $N_2-N_1=-2w^4(w^3-\sqrt5)^2$ and $N_2+N_1=-2(\sqrt5w^3+1)^2$ give $\tfrac94(N_2^2-N_1^2)=N_3^2$, hence $h'\cdot h'=0$ for the complex bilinear dot product. The first two numerators never vanish simultaneously: at $w=0$ both equal $-1$, and otherwise their sum and difference would require both $w^3=\sqrt5$ and $w^3=-1/\sqrt5$. Thus $h'\ne0$. Its real and imaginary parts are orthogonal and have the same positive norm, so the real derivatives $g_x=\operatorname{Re}h'$ and $g_y=-\operatorname{Im}h'$ are independent. Inversion $J(v)=v/|v|^2$ has derivative $|v|^{-2}(I-2vv^*/|v|^2)$, an invertible scaled reflection. By step 1.1, $P=J\circ g$ therefore has injective differential away from the poles. [F1, step 1.1, algebra]

3.1 At each interior pole $w_j$, write $u=w-w_j$ and $h=c/u+h_0(u)$. The residue vector $c$ is nonzero because the second numerator $w_j(1+w_j^4)$ is nonzero ($0<|w_j|<1$). The leading term in $h'\cdot h'=0$ gives $c\cdot c=0$. Thus $\operatorname{Re}c$ and $\operatorname{Im}c$ are independent, orthogonal and have common squared norm $\lambda>0$. Set $N(u)=\operatorname{Re}(c\bar u)$ and $H(u)=\operatorname{Re}h_0(u)$; then $|N(u)|^2=\lambda|u|^2$ and $g=N(u)/|u|^2+H(u)$. It follows that $P=(N(u)+|u|^2H(u))/(\lambda+2\langle N(u),H(u)\rangle+|u|^2|H(u)|^2)$ extends real-analytically to $u=0$, with value $0$ and differential $N/\lambda$, which is injective. This verifies all three ends, including the two nonreal poles. [step 1.1, step 2.1, algebra]

4.1 For $t=-1/\bar w$, direct substitution gives $d(t)=-\overline{d(w)}/\bar w^6$, $(t-t^5)/d(t)=-\overline{(w-w^5)/d(w)}$, $(t+t^5)/d(t)=\overline{(w+w^5)/d(w)}$, and $(1+t^6)/d(t)=-\overline{(1+w^6)/d(w)}$. Taking the indicated real and imaginary parts proves $g(t)=g(w)$ and $P(t)=P(w)$; on $|w|=1$ this is $P(-w)=P(w)$. Near the boundary these identities hold on a two-sided annulus, not merely on the circle. At infinity use the coordinate $t=-1/\bar w$ near $0$; the same identity gives a smooth immersive extension there. Thus the extended map on the Riemann sphere is invariant under its free antipodal involution and descends through the local quotient charts to a smooth immersion $\beta:\mathbb{RP}^2\to\mathbb R^3$. The disk model in [F2] is a fundamental domain for this involution. [F1, F2, step 2.1, step 3.1, algebra]

5.1 The three interior poles are distinct points of the projective-plane domain: their antipodes lie outside the disk. All have image $0$ by step 3.1, so $\beta$ has a triple point and is not injective. This is the Bryant–Kusner Boy surface; Karcher's source, PDF p.2, describes the three antipodal pairs of planar ends and their common image after inversion. The formulas above verify its immersedness directly. [F2, step 3.1, step 4.1]

6.1 For any immersion $f:\mathbb{RP}^2\to\mathbb R^3$, a global nonzero normal field would orient each tangent plane by the sign of $\det(df_xv_1,df_xv_2,n(x))$, continuously and consistently. This contradicts [F2], so its normal line is nontrivial by [F4]. For the characteristic-class description assume AC as in [F5]. The ambient volume form gives $\det(T\mathbb{RP}^2)\otimes\nu_f\cong\varepsilon^1$, so [F5] yields $w_1(\nu_f)=w_1(T\mathbb{RP}^2)\ne0$. To identify this with the tautological class, represent a point by a unit $x\in S^2$ and tangent vectors by $v,w\in x^\perp$; the map $v\wedge w\mapsto\det(x,v,w)x$ identifies the determinant tangent line with the tautological line. It is unchanged under $(x,v,w)\mapsto(-x,-v,-w)$ and is a fibrewise isomorphism. Thus their $w_1$ classes agree by [F5], giving precisely the tautological degree-one class. [F2, F4, F5, step 4.1, algebra] ∎
