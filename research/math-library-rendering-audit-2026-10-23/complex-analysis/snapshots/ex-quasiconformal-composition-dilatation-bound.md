---
id: ex-quasiconformal-composition-dilatation-bound
kind: example
title: Composition of two affine quasiconformal maps and the multiplicative dilatation bound
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps: [def-complex-domain, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, def-wirtinger-derivatives, thm-composition-and-inverse-quasiconformal, ex-affine-quasiconformal-ellipse-map, ex-radial-stretch-quasiconformal-map, def-axiom-of-choice]
axiom_use: The Axiom of Choice is inherited from the analytic definition and the composition theorem used for comparison.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–51: the Beltrami composition identity and $D_{M\\circ N}\\le D_MD_N$ for real-linear maps."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, Proposition 12.15, printed p. 188: the product bound for compositions of quasiconformal maps."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $f(w)=w+\mu\bar w$ and $g(z)=z+\nu\bar z$ with $|\mu|,|\nu|<1$, so $g$ is $K_1$-quasiconformal and $f$ is $K_2$-quasiconformal, where $K_1=(1+|\nu|)/(1-|\nu|)$ and $K_2=(1+|\mu|)/(1-|\mu|)$ ([[ex-affine-quasiconformal-ellipse-map]]). Verify:

(a) The composite is affine, with
$$\mu_{f\circ g}=\frac{\nu+\mu}{1+\mu\bar\nu},\qquad K_{f\circ g}=\frac{1+\left|\frac{\nu+\mu}{1+\mu\bar\nu}\right|}{1-\left|\frac{\nu+\mu}{1+\mu\bar\nu}\right|}\le K_1K_2,$$
in agreement with [[thm-composition-and-inverse-quasiconformal]](i).

(b) Equality holds exactly when $\nu\bar\mu$ is a nonnegative real number, including the cases $\mu=0$ or $\nu=0$. When equality holds,
$$\left|\frac{\nu+\mu}{1+\mu\bar\nu}\right|=\frac{|\nu|+|\mu|}{1+|\nu||\mu|},$$
and $\frac{1+t}{1-t}=K_1K_2$ for $t=(|\nu|+|\mu|)/(1+|\nu||\mu|)$.

(c) For the radial stretch $g=f_\alpha$ from [[ex-radial-stretch-quasiconformal-map]] followed by $f(z)=z+\mu\bar z$, the product bound is sharp for every $\alpha>0$ and $|\mu|<1$: $K_{f\circ f_\alpha}=K_f\max(\alpha,1/\alpha)$. At points where the ellipse fields are not aligned, the pointwise coefficient estimate is strict; the radial field nevertheless takes aligned values along rays, so the essential supremum reaches the product bound.

## Facts & Assumptions

**Given:** Choice, $f(z)=z+\mu\bar z$, $g(z)=z+\nu\bar z$, and the affine/radial examples on this page pair.

[F1] Expanding $f(g(z))$ gives $(1+\mu\bar\nu)z+(\nu+\mu)\bar z$. Since $|\mu\bar\nu|<1$, the coefficient $1+\mu\bar\nu$ is nonzero, so the Beltrami coefficient is $(\nu+\mu)/(1+\mu\bar\nu)$ ([[def-beltrami-coefficient-and-maximal-dilatation]], [[def-wirtinger-derivatives]]).

[F2] Put $r=|\nu|$ and $s=|\mu|$. If $x=\operatorname{Re}(\nu\bar\mu)$, then
$$\left|\frac{\nu+\mu}{1+\mu\bar\nu}\right|^2=\frac{r^2+s^2+2x}{1+r^2s^2+2x},\qquad -rs\le x\le rs.$$
The right side is increasing in $x$ when $r,s>0$, since its derivative is $2(1-r^2)(1-s^2)/(1+r^2s^2+2x)^2>0$; when $rs=0$ it is constant. Therefore its maximum occurs at $x=rs$, equivalently $\nu\bar\mu\in[0,\infty)$, and its maximum modulus is $(r+s)/(1+rs)$.

[F3] For $0\le r,s<1$ and $t=(r+s)/(1+rs)<1$,
$$\frac{1+t}{1-t}=\frac{(1+r)(1+s)}{(1-r)(1-s)}.$$

[F4] For $f_\alpha$, the coefficient is $\nu(z)=qz/\bar z$ with $q=(\alpha-1)/(\alpha+1)$, and $g_z=(\alpha+1)|z|^{\alpha-1}/2$ is positive real for $z\ne0$. Thus the composition formula of [[thm-composition-and-inverse-quasiconformal]](i) reduces to $\mu_{f\circ f_\alpha}(z)=(\nu(z)+\mu)/(1+\mu\overline{\nu(z)})$ almost everywhere.

## Proof

**Proof technique:** expand the affine composite, maximize its coefficient over the relative phase, and check the radial field reaches the maximizing phase on rays.

1.1 Since $g(z)=z+\nu\bar z$, one has $\overline{g(z)}=\bar z+\bar\nu z$. Therefore $f(g(z))=g(z)+\mu\overline{g(z)}=(1+\mu\bar\nu)z+(\nu+\mu)\bar z$. The coefficient denominator is nonzero because $|\mu\bar\nu|<1$, and [F1] gives the displayed Beltrami coefficient. [F1, given, algebra]

1.2 Let $r=|\nu|$, $s=|\mu|$, and $x=\operatorname{Re}(\nu\bar\mu)$. By [F2], the squared coefficient modulus is increasing in $x$ when $rs>0$, so it is largest at $x=rs$, exactly when $\nu\bar\mu$ is nonnegative real. If $r=0$ or $s=0$, then $x=rs=0$ and equality holds automatically. Thus the equality condition and the maximum modulus in (b) hold, including the degenerate cases. [F2, given]

2.1 The function $u\mapsto(1+u)/(1-u)$ is increasing on $[0,1)$, so [F2] bounds the composite dilatation by its value at $t=(r+s)/(1+rs)$. The identity in [F3] turns that value into $((1+r)/(1-r))((1+s)/(1-s))=K_1K_2$, proving (a) and (b). [F2, F3, step 1.1, step 1.2, given, algebra]

3.1 For the radial stretch, [F4] makes $\nu(z)=qz/\bar z$ range through the full circle of radius $|q|$ as $\arg z$ varies. If $q\mu\ne0$, there are rays on which $\nu(z)\bar\mu=|q||\mu|>0$, so [F2] gives pointwise equality there. By continuity in the angle, every neighborhood of each such ray contains a positive-area sector where the coefficient modulus is arbitrarily close to $(|q|+|\mu|)/(1+|q||\mu|)$. Hence its essential supremum equals this maximum. If $q\mu=0$, the coefficient modulus is constant and equals the same formula. Applying [F3] gives $K_{f\circ f_\alpha}=((1+|q|)/(1-|q|))((1+|\mu|)/(1-|\mu|))=\max(\alpha,1/\alpha)K_f$. At nonaligned points the strict increase in [F2] gives strict pointwise inequality, while the essential supremum remains sharp. [F2, F3, F4, given, algebra] ∎
