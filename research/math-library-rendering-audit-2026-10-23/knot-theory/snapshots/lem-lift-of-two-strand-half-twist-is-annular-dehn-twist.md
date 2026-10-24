---
id: lem-lift-of-two-strand-half-twist-is-annular-dehn-twist
kind: lemma
title: "A two-strand half-twist lifts to an annular Dehn twist"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - lem-double-cover-of-two-arc-rational-tangle-is-solid-torus
  - def-dehn-twist-on-oriented-surface
  - thm-path-lifting-for-covering-maps
  - thm-homotopy-lifting-for-covering-maps
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §2, Figure 2"
      url: "https://arxiv.org/pdf/math/0309170v1"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $\tau$ be the positive half-twist mapping class of a disk interchanging two marked branch points and fixed near the disk boundary. Choose its standard supported half-turn representative in coordinates compatible with the local branched square charts, and take its unique smooth lift to the connected two-fold branched cover which fixes the annular boundary pointwise. Its smooth isotopy class relative to that boundary is the positive Dehn twist about the core when the half-twist orientation agrees with the annular orientation, and is the inverse twist when the orientation is reversed. A positive half-twist here is the usual supported rotation through $+\pi$ in an oriented disk coordinate containing the two points, interpolated to the identity outside that coordinate disk; the assertion is independent of its cutoff representative.

## Statement references

[[lem-double-cover-of-two-arc-rational-tangle-is-solid-torus|The two-point disk cover is an annulus cross-section]]

[[def-dehn-twist-on-oriented-surface|Annular Dehn twist convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §2, Figure 2](https://arxiv.org/pdf/math/0309170v1)

## Facts & Assumptions

**Given:** The disk with two branch points, its connected two-fold simple branched cover, and the supported positive half-twist. All calculations below are finite and use no choice axiom.

[F1] [[def-dehn-twist-on-oriented-surface]] fixes the positive annular formula $(\theta,t)\mapsto(\theta+2\pi\rho(t),t)$ for the product orientation $d\theta\wedge dt$.

[F2] [[thm-path-lifting-for-covering-maps]] and [[thm-homotopy-lifting-for-covering-maps]] give unique continuation and unique isotopy lifting once one sheet is specified. They apply to the ordinary cover away from the two branch points; the explicit local square coordinate fills those points below.

## Proof

1.1 **An explicit oriented branched annulus.** Fix $c>0$ and put $A=(\mathbb R/2\pi\mathbb Z)\times[-c,c]$, oriented by $d\theta\wedge dt$. Its complex coordinate is $z=e^{-t+i\theta}$, whose complex orientation is this same orientation. The holomorphic map $$q(z)=z+z^{-1}=(2\cosh t\cos\theta,-2\sinh t\sin\theta)$$ identifies $A$ with a two-fold branched cover of the closed ellipse $D_c$ having semiaxes $2\cosh c,2\sinh c$. Its deck map is $\jmath(\theta,t)=(-\theta,-t)$, and its two fixed points map to $2,-2$. To verify its image and degree, every point outside the real segment $[-2,2]$ lies on a unique confocal ellipse: the expression $x^2/(4\cosh^2t)+y^2/(4\sinh^2t)$ decreases strictly from a value greater than one to at most one as $t$ increases from zero to $c$. Its two preimages have coordinates $(\theta,t)$ and $(-\theta,-t)$. Points inside that segment have the two preimages on $t=0$, except its endpoints. The derivative $1-z^{-2}$ vanishes precisely at $z=\pm1$; locally $q(z)-2=(z-1)^2/z$ and $q(z)+2=(z+1)^2/z$, so each is a simple square branch in smooth complex coordinates. Both boundary components map diffeomorphically to the ellipse boundary. [given, construct, algebra]

2.1 **A commuting twist.** Choose a smooth nondecreasing $\rho:[-c,c]\to[0,1]$, zero near $-c$, one near $c$, equal to $1/2$ on $[-\epsilon,\epsilon]$ for some $0<\epsilon<c$, and satisfying $\rho(-t)=1-\rho(t)$. For example choose its upper half from a smooth step and reflect. Set $T(\theta,t)=(\theta+2\pi\rho(t),t)$. The symmetry makes $T\jmath=\jmath T$ modulo $2\pi$, since $2\pi\rho(-t)=2\pi-2\pi\rho(t)$. It therefore descends to a smooth disk map $h$ fixing the ellipse boundary. Near either branch it is $q\mapsto-q$, because $T$ adds $\pi$ in the central strip, so descent is smooth there as well. In particular $h$ interchanges the branch points, and $T$ fixes both annular boundaries pointwise. By [F1], $T$ is exactly a positive annular twist. It remains to prove the handedness of its quotient, rather than infer it merely from the interchange. [F1, step 1.1, construct, algebra]

2.2 **An orientation-preserving disk coordinate.** On the quotient of $t\ge\epsilon$ write $\varphi=-\theta$. Then $q=(2\cosh t\cos\varphi,2\sinh t\sin\varphi)$. Choose $r_0\in(0,1)$ and a smooth increasing $t(r)$ from $\epsilon$ to $c$ on $[r_0,1]$. Define $a(r)=2\cosh t(r)$ and $b(r)=2\sinh t(r)$ there. Extend $a,b$ to $[0,1]$ so $a(0)=b(0)=0$, both derivatives are strictly positive, and both are linear near zero. Here is a finite smooth construction: retain their positive derivative germs near $r_0$, on an interval so short that each derivative integral is less than half its prescribed value at $r_0$. Extend each derivative positively and constantly near zero, initially with total integral smaller than that value. Add a nonnegative bump in the intervening interval, with its unique scalar chosen to make the integral equal to that value. Integrating now matches every derivative and the value at $r_0$. Thus $$F(r,\varphi)=(a(r)\cos\varphi,b(r)\sin\varphi)$$ is a smooth odd diffeomorphism from the round disk to $D_c$. Smoothness and invertibility at zero follow from its positive diagonal linear formula there. Away from zero its Jacobian is $a'b\cos^2\varphi+ab'\sin^2\varphi>0$. The ellipses are strictly nested, so the equation $x^2/a(r)^2+y^2/b(r)^2=1$ proves global injectivity and surjectivity. Thus these are actual orientation-preserving disk coordinates, with both branch points inside $r<r_0$. [step 1.1, construct, algebra]

3.1 **The quotient is the positive half-twist, with its sign.** On the central ellipse $h(w)=-w$, and oddness of $F$ makes this the polar rotation $\varphi\mapsto\varphi+\pi$. On an outer confocal ellipse, $T$ changes $\varphi$ by $-2\pi\rho(t)$, which modulo $2\pi$ is the angle $2\pi(1-\rho(t))$. Consequently in the single disk coordinate of step 2.2, $$F^{-1}hF(r,\varphi)=(r,\varphi+\pi\chi(r)),$$ where $\chi=1$ for $r\le r_0$ and $\chi(r)=2(1-\rho(t(r)))$ outside. This is smooth, one near the branch points, and zero near the boundary. The isotopy replacing the angle by $s\pi\chi(r)$ moves the two points counterclockwise through $+\pi$ in an orientation-preserving coordinate. Thus it is the standard positive half-twist, not its inverse. This explicitly fixes the relative sign with the positive annular twist in [F1]. [F1, step 2.1, step 2.2, construct, algebra]

4.1 **Transport to the given cover and lift uniqueness.** Apply the preceding model in an oriented coordinate disk supporting the given half-twist. Its branched cover is identified with the model without a covering-classification choice axiom: slit the disk along two disjoint intervals joining the branch points to its outer boundary. Over the resulting simply connected slit disk the two sheets are obtained by unique path lifting from one specified sheet point; endpoints are independent of path by homotopy lifting in [F2]. Crosswise gluing of the two slit banks is forced by the nontrivial monodromy of a small branch meridian, as the local square map shows. This is exactly the gluing of the model. The identifications are smooth locally. At the slit endpoints use the compatible base and source square charts of the chosen representative; the lifted identifications are then linear in the local square-root coordinates and fill smoothly. Outside the support disk its two exterior sheet collars are retained. The two possible lifts differ by $\jmath$; this deck map interchanges the two boundary components, while $T$ fixes them. Thus precisely one lift fixes the annular boundary pointwise, and it is the transported $T$. Only one finite initial sheet choice was made. [F2, step 1.1, step 2.1, step 3.1, construct]

5.1 **Representatives and orientations.** Any change of smooth half-twist cutoff is an isotopy through the displayed angle functions, constant near the two points and the outer boundary. Lift it by [F2], using the boundary-fixed sheet. On the complement of the branch points, ordinary smooth local covering coordinates make the lift smooth. Near the branch points the isotopy is the fixed half-turn representative; it therefore extends in the square coordinates and is stationary there. More generally the same argument transports a supplied supported coordinate isotopy defining another standard representative of this half-twist class, chosen standard in the branch charts throughout. It gives a smooth relative-boundary isotopy of lifts. If the annular orientation is reversed, change $\theta$ to $-\theta$ while retaining $t$; the actual formula for $T$ becomes $(\theta,t)\mapsto(\theta-2\pi\rho(t),t)$. It is the inverse twist in the positively oriented annular convention. Conversely reversing the half-twist motion reverses this angle. These calculations prove the full orientation and standard-representative assertions and also explain why the other, boundary-swapping lift was excluded. The assertion concerns this smooth mapping-class lift; it does not assert that an arbitrary unnormalized smooth base germ has a smooth square-root lift. [F1, F2, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
