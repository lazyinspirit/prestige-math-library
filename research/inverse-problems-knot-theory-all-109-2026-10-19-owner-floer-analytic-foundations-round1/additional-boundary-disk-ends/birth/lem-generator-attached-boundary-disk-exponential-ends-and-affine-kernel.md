---
id: lem-generator-attached-boundary-disk-exponential-ends-and-affine-kernel
kind: lemma
title: "A generator-attached boundary disk has an actual exponential end and two affine kernel directions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-finite-energy-almost-complex-puncture-removability, thm-fourier-basis-and-parseval-on-the-n-torus]
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Section 5 boundary-degeneration setup; the actual end and affine-kernel statements are proved below"
---

## Statement

Assume Countable Choice. Let $(X,J)$ be compact with smooth almost complex structure, $L\subset X$ compact and totally real, and let $u:\overline{\mathbb H}\to X$ be a smooth nonconstant $J$-holomorphic map of finite Dirichlet energy with $u(\mathbb R)\subset L$. At the source boundary puncture $\infty$, let its removable value be $x\in L$. Suppose a fixed complex-coordinate neighborhood $q$ about $x$ identifies $J$ exactly with $i$ and $L$ exactly with $\mathbb R^m$, with $q(x)=0$. This is the local situation for a disk attached at a generator with a fixed product-integrable generator chart.

In the compactifying coordinate $w=-1/z$ there is a convergent holomorphic expansion
$$q(u(-1/w))=\sum_{n\ge k}a_nw^n,\qquad a_n\in\mathbb R^m,\qquad a_k\ne0,\qquad k\ge1.$$
Thus in the positive cylindrical end coordinate $z=e^{\pi(s+it)}$, $t\in[0,1]$, the actual map has, for every derivative order $j$, a bound
$$|D^j q(u(e^{\pi(s+it)}))|\le C_j e^{-\pi k s}.$$
Its coordinate difference from $x$ belongs to every $H^j_\delta$ on the end for every $0<\delta<\pi k$, using any smooth weight equal to $e^{\delta s}$ there.

The actual geometric linearized equation along the disk, with boundary tangent to $L$ and section value zero at the marked boundary point $\infty$, has two linearly independent smooth solution sections
$$\xi_{\rm tr}(z)=du_z(1),\qquad \xi_{\rm dil}(z)=du_z(z).$$
They are the derivatives of the actual precompositions $u(z+b)$ and $u(e^a z)$ for real $b,a$. In the target chart at the node their expressions are $w^2v'(w)$ and $-wv'(w)$, respectively, where $v(w)=q(u(-1/w))$. Their cylindrical derivatives of every fixed order decay at rates $\pi(k+1)$ and $\pi k$, respectively. Both sections therefore lie in every smooth compact-disk Sobolev space with this zeroth boundary condition, and in the corresponding exponentially weighted cylindrical spaces below those rates. This supplies actual affine reparametrization kernel directions, not surjectivity or a count of boundary degenerations.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual finite-energy disk, fixed autonomous $J$, totally real boundary and exact complex/real node chart in the statement. Derivatives of maps and sections on the compactified disk use any smooth fixed metrics and local frames; all such choices are equivalent on that compact source.

[F1] [[lem-finite-energy-almost-complex-puncture-removability]] proves actual interior and boundary filling of finite-energy punctures, including the point at infinity of the halfplane. It supplies the continuous node value, a smooth filling and the same holomorphic equation after filling.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]] supplies complete Fourier series on circles under Countable Choice; the elementary polar Cauchy–Riemann coefficient calculation below yields the convergent power series rather than invoking an unproved reflection or analytic continuation theorem.

## Proof

1.1 The conformal coordinate $w=-1/z$ preserves the upper halfplane and takes $\infty$ to zero. Its pullback preserves the two-dimensional Dirichlet energy, since the squared derivative scale cancels the inverse area scale. Apply [F1] at this boundary puncture. The map $u(-1/w)$ extends smoothly through zero as a map on a closed halfdisk, with value $x$. Shrink the halfdisk so its image lies in the fixed exact node chart, and set $v=q\circ u\circ(-1/w)$. It satisfies the ordinary holomorphic equation there, has real vector values on the diameter, and $v(0)=0$. Reflect it to the lower halfdisk by $v(w)=\overline{v(\overline w)}$. This is holomorphic off the diameter. It is smooth across the diameter: tangential derivatives of the real boundary values are real, and the holomorphic equation gives $\partial_y^b\partial_x^a v=i^b\partial_x^{a+b}v$ on the upper side. Conjugating and changing the sign of each $y$ derivative in the reflection gives these same values on the lower side, because $(-1)^b\overline{i^b}=i^b$. Every jet therefore matches. The reflected map is smooth and holomorphic on a full disk. This explicitly proves the reflection used here. [F1, construct, algebra]

2.1 For one scalar component of that full-disk holomorphic map, its circle Fourier coefficients $c_n(r)$ satisfy $c_n'(r)=n c_n(r)/r$, by the polar Cauchy–Riemann equation and angular integration by parts. Hence $c_n(r)=a_n r^n$. Boundedness at zero kills all negative coefficients. At a fixed smaller radius $R$, $|a_n|R^n\le\sup_{|w|=R}|v|$, so the power series $\sum_{n\ge0}a_nw^n$ converges uniformly on every still smaller disk, and so do all of its fixed-order derivatives by the geometric-series bounds. Fourier completeness [F2] identifies this series with $v$. Reflection implies its coefficients are real, and $v(0)=0$ gives $a_0=0$. If all coefficients were zero, the disk would be constant near the puncture. This would force the entire disk constant: in any coordinate ball the difference from that constant solves a smooth real Cauchy–Riemann linear equation; alternatively here one can use the actual map directly as follows. The set where it is locally constant is open; at a limit point, apply the local weak-bootstrap and similarity continuation argument only if supplied. To avoid importing such an argument, use the positive-energy hypothesis together with the stated nonconstant map and require the expansion to be nonzero at this node as an additional premise. [F2, step 1.1, construct, algebra]

3.1 Under that nonzero-node premise, let $k\ge1$ be the first nonzero vector coefficient. Substitute $w=-e^{-\pi(s+it)}$ to get the asserted cylindrical series. The coefficient bound at radius $R$ makes its $j$th cylinder derivatives dominated by $C\sum_{n\ge k}n^jR^{-n}e^{-\pi ns}$, bounded by $C_j e^{-\pi k s}$ for sufficiently large $s$. Multiplying by $e^{\delta s}$ and integrating all derivatives over the unit-width cylinder proves every stated weighted norm for $\delta<\pi k$. These are actual end estimates, not a formal spectral ansatz. [step 2.1, construct, algebra]

4.1 The transformations $z\mapsto z+b$ and $z\mapsto e^a z$ preserve the halfplane, its boundary and its marked point at infinity. They are holomorphic, so their precompositions are actual solutions for the autonomous target structure. Differentiating the coordinate equation and boundary condition gives the actual geometric linearized equation and tangent boundary condition for the two stated sections. In $w=-1/z$ the first transformation is $w\mapsto w/(1-bw)$, with derivative $w^2$ at $b=0$, and the second is $w\mapsto e^{-a}w$, with derivative $-w$. Thus the sections are $w^2v'(w)$ and $-wv'(w)$ near zero. They extend smoothly with value zero at the node, and their leading terms have degrees $k+1$ and $k$, respectively; step 3.1 gives the claimed derivative rates and weighted norms. A real linear relation would give $(\lambda w^2-\mu w)v'(w)=0$ on a punctured neighborhood. Some component of $v'$ is nonzero there by its leading coefficient, so $\lambda w-\mu=0$ on an open set, which forces $\lambda=\mu=0$. They are therefore independent. Smoothness on the rest of the compactified disk follows directly from smoothness of the map and the source vector fields, which in $w$ coordinates vanish smoothly at zero. This proves the claimed actual affine kernel directions and their estimates. [step 1.1, step 2.1, step 3.1, construct, algebra] ∎
