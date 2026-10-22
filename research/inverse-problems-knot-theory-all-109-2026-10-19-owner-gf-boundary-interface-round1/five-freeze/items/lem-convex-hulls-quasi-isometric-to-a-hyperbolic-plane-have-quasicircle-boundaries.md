---
id: lem-convex-hulls-quasi-isometric-to-a-hyperbolic-plane-have-quasicircle-boundaries
kind: lemma
title: Convex hulls quasi-isometric to a hyperbolic plane have quasicircle boundaries
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-morse-stability-with-explicit-parameter-dependence
  - lem-quasi-isometries-extend-to-boundary-homeomorphisms
  - lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary
  - thm-quasicircle-characterizations
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the actual Morse, boundary-homeomorphism and quantitative quasicircle suppliers. No differentiability or quasiconformality of the given map is assumed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Pekka Tukia, On isomorphisms of geometrically finite Mobius groups
      url: https://www.numdam.org/item/PMIHES_1985__61__171_0.pdf
      locator: Theorem3.3 and Lemma3.4, printed195–197, PDF26–28, give the convex-hull route. The quantitative circle conclusion below is proved directly using the fully proved local Morse and ideal-triangle-center calculations, not the cited external quasisymmetry result.
---

## Statement

Assume AC. Let $C\subset\mathbb H^3$ be a nonempty closed hyperbolic convex hull of a closed ideal set $\Lambda$, with ideal boundary exactly $\Lambda$. Suppose a continuous map $F:\mathbb H^2\to C$ is a quasi-isometry, where $\mathbb H^2$ is a totally geodesic plane with its hyperbolic metric. Then $\Lambda$ is a quasicircle. Its quasicircle constant is bounded by a function of the quasi-isometry constants, and the two components of its sphere complement are quasidisks with that bound.

This assertion concerns a plane-to-hull quasi-isometry, not an already supplied quasi-isometry of all of $\mathbb H^3$. It does not assert geometric finiteness of a group preserving $C$, finite area for either quotient, or existence of the stated map for an arbitrary boundary-component subgroup.

## Facts & Assumptions

**Given:** The hull, its ideal boundary and the continuous $(\lambda,\varepsilon)$-quasi-isometry, with $\lambda\ge1$ and $\varepsilon\ge0$.

[F1] The actual boundary-extension theorem applies to proper closed convex geodesic subspaces as well as the whole hyperbolic space. [[lem-quasi-isometries-extend-to-boundary-homeomorphisms]]

[F2] Finite endpoint quasi-geodesics have the two-sided Hausdorff bound $M=92\lambda^2(\varepsilon+3\delta)$ in a $\delta$-slim space. [[thm-morse-stability-with-explicit-parameter-dependence]]

[F3] The upper-half-space model computations, properness and slimness, and the ideal-triangle-center calculation are fully supplied in [[lem-hyperbolic-three-space-quasi-isometry-has-quasiconformal-boundary]], Proof1.1–6.1. In particular $\delta=\operatorname{arcosh}2$ works. The center of the ordered triangle $(z,a,\infty)$ is $c(z,a)=((z+a)/2,\sqrt3|a-z|/2)$ and has distance $r_0=\log\sqrt3$ from every side. A point within $D\ge1$ of all three sides of any ideal triangle is within a fixed $C(D)<\infty$ of its center: after sending the vertices to $(0,1,\infty)$ the side estimates give $s\ge(2\sinh D)^{-1}$, $s\le e^D/2$ and $|w|\le e^D\sinh D/2$, a compact model set. This is a model-geometric computation, independent of the domain of any quasi-isometry.

[F4] The quantitative alternating-four-point criterion for a Jordan curve is equivalent to being a quasiconformal image of a circle in [[thm-quasicircle-characterizations]]. A sphere quasiconformal circle image carries the two complementary disks to its complementary quasidisks.

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Both spaces are proper geodesic hyperbolic spaces by convexity and [F3], and their sequence boundaries are their ideal boundaries: radial rays and the product formula $(u|v)_0=-\log(|u-v|/2)$ in the ball model identify the boundary topology. Thus [F1] gives a homeomorphism $h:\mathbb S^1\to\Lambda$, making $\Lambda$ a Jordan curve. Identify the source plane with the real vertical half-plane. For any selected source circle point, a source plane isometry takes it to infinity; a target Möbius isometry takes its image to infinity. The quasi-isometry constants do not change. Throughout the next steps use such a normalization, so $h(\infty)=\infty$ and the source boundary is $\mathbb R\cup\{\infty\}$. [A1, F1, F3, given, construct]

2.1 For a complete source line $\ell$, apply [F2] to larger finite subsegments. At a fixed point of its image choose witnesses on the target endpoint segments within $M+1/n$. Properness gives a convergent subsequence. Since $h$ is the boundary extension from step1.1, the endpoints tend to the two distinct corresponding ideal endpoints; the explicit orthogonal-circle formulas in [F3] show that the target segments converge on compact sets to their complete joining line. Hence $F(\ell)$ is within $M$ of that line. Every ideal-triangle center lies in the source plane, and its three sides are complete source lines. The quasi-isometry upper inequality and their distances $r_0$ give distance at most $D=\max(1,\lambda r_0+\varepsilon+M)$ from its image to each target side. By [F3], $d(F(c_\tau),c_{h\tau})\le C(D)$ for every ordered source ideal triangle. No map outside the source plane was needed. [F2, F3, step 1.1, construct, algebra]

3.1 Fix $z\in\mathbb R$ and put $q(s)=F(z,e^s)$, $s\in\mathbb R$. By step2.1, it lies within $M$ of the target vertical line above $h(z)$, and its two ideal endpoints are $h(z)$ and infinity in that order. Its nearest point on that line has log height $$a(s)=\tfrac12\log\bigl(|w(s)-h(z)|^2+Y(s)^2\bigr),\qquad q(s)=(w(s),Y(s)).$$ The minimizing height formula follows by differentiating the model distance in [F3]. The function $a$ is continuous since $F$ is continuous. For the function $A(w,Y)=\tfrac12\log(|w-h(z)|^2+Y^2)$, the hyperbolic dual norm of $dA$ is $Y/\sqrt{|w-h(z)|^2+Y^2}\le1$. Thus $|A(p)-A(p')|\le d(p,p')$. The tube bound and the ideal endpoints show $a(s)\to-\infty$ as $s\to-\infty$ and $a(s)\to+\infty$ as $s\to+\infty$. If $s_1\le s_2$ but $a(s_1)>a(s_2)$, continuity gives $s_3\ge s_2$ with $a(s_3)=a(s_1)$. The two points $q(s_1),q(s_3)$ are within $M$ of the same nearest-point height, so their distance is at most $2M$. The lower quasi-isometry bound gives $s_3-s_1\le\lambda(2M+\varepsilon)$. Therefore $$a(s_1)-a(s_2)\le d(q(s_1),q(s_2))\le B:=\lambda^2(2M+\varepsilon)+\varepsilon.$$ When the alleged decrease is absent the same inequality holds trivially. Thus $a(s_1)\le a(s_2)+B$ uniformly for all ordered parameters; this is the required bounded backtracking, not a conclusion drawn from a Hölder boundary estimate. [F3, step 1.1, step 2.1, given, construct, algebra]

4.1 For real $t\ne0$, the nearest point of $c(z,z+t)$ on the source vertical line is $(z,|t|)$ and the distance is $r_0$, directly from [F3]'s distance formula. Consequently $F(c(z,z+t))$ is within $\lambda r_0+\varepsilon$ of $q(\log|t|)$. Step2.1 puts it within $C(D)$ of $c(h(z),h(z+t))$. The target center's nearest vertical height is exactly $|h(z+t)-h(z)|$. Applying the 1-Lipschitz function $A$ from step3.1 yields $$\bigl|\log|h(z+t)-h(z)|-a(\log|t|)\bigr|\le E:=\lambda r_0+\varepsilon+C(D).$$ If $w$ lies between finite $z$ and $a$, then $|w-z|\le|a-z|$. Step3.1 and this estimate imply $|h(w)-h(z)|\le e^{B+2E}|h(a)-h(z)|$, with endpoints included by continuity. In particular for three consecutive finite source points $z_1<z_2<z_3$ their image satisfies $$|h(z_1)-h(z_2)|+|h(z_2)-h(z_3)|\le C_0|h(z_1)-h(z_3)|,\qquad C_0=2e^{B+2E}.$$ The second term is bounded by applying the same interval estimate with base point $z_3$. [F3, step 2.1, step 3.1, construct, algebra]

5.1 Take any four distinct cyclically alternating points on $\Lambda$ and their source preimages. Normalize the fourth preimage and its image to infinity as in step1.1. The other three source points are consecutive on the real line, so step4.1 gives the displayed three-point inequality in that normalization. It is precisely the alternating-four-point inequality $$|p_1-p_2||p_3-p_4|+|p_2-p_3||p_4-p_1|\le C_0|p_1-p_3||p_2-p_4|$$ when $p_4=\infty$, interpreted after canceling the common infinite factor. For a finite Möbius coordinate change, every product has the same factor, since $|T(u)-T(v)|=|\det T|\,|u-v|/(|cu+d||cv+d|)$; limits treat poles. Hence the inequality holds for the original four points. The constants $M,D,B,E$ are unchanged by the normalizing isometries, so the same $C_0$ works for all quadruples. Apply [F4] to the Jordan curve of step1.1. It is a $K$-quasicircle with $K$ bounded by a function of $C_0$, hence only of $\lambda,\varepsilon$. Its two complementary components are the images of the two round disks under that quasiconformal sphere map, so are quasidisks with the same bound. This proves the geometric assertion without claiming any quotient-area or subgroup-finiteness consequence. [A1, F3, F4, step 1.1, step 4.1, construct, algebra] ∎
