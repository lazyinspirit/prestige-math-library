---
id: lem-real-boundary-simple-pole-model-parametrizes-a-constant-sheet-slit
kind: lemma
title: "A real-boundary simple-pole model parametrizes a constant-sheet slit"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-holomorphic-implicit-function-theorem, thm-removable-singularity-characterizations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology"
      url: "https://arxiv.org/abs/math/0502404"
      locator: "AppendixA.3 motivates the constant-sheet and torus degeneration; this scalar model does not assert transversality of that split configuration"
---

## Statement

Assume Countable Choice. Let $b=a+iy\in\mathbb H$, $y>0$, and $\lambda=u+iv\in\mathbb C\setminus\{0\}$. The function
$$h_{\lambda,b}(z)=\frac{\lambda}{z-b}+\frac{\overline\lambda}{z-\overline b}$$
is the unique meromorphic function on the compactified upper half-plane with its only pole a simple pole at $b$ of principal part $\lambda/(z-b)$, real values on the boundary, and value zero at boundary infinity. It is a biholomorphism from the open upper half-plane onto the sphere minus the closed real slit
$$I_{\lambda,b}=\left[\frac{-v-|\lambda|}{y},\frac{-v+|\lambda|}{y}\right].$$
Its two critical points lie on the real projective boundary and are simple, with these distinct endpoint values. Boundary infinity maps to zero; this is an interior point of the slit exactly when $\operatorname{Re}\lambda\ne0$. On either half-plane $\operatorname{Re}\lambda>0$ or $\operatorname{Re}\lambda<0$, the ordered slit endpoints are smooth independent real coordinates. The two signs give the two possible marked-node banks; their identification must be retained, and no global one-to-one endpoint parametrization across both signs is asserted.

On compact parameter sets with $y$ bounded below, the function and every finite derivative vary smoothly off the two poles. For fixed $\delta>0$ and sufficiently small $|\lambda|$, the inverse near its interior pole, written $z=b+w$, is holomorphic for $\delta\le|\eta|\le2\delta$, where $\eta=h_{\lambda,b}(z)$, and satisfies
$$w(\eta)=\frac{\lambda}{\eta}+O_\delta(|\lambda|^2)$$
uniformly with every fixed number of $\eta$ derivatives. The complementary piece $\mathbb H\setminus h^{-1}(\{|\eta|\ge\delta\})$ therefore maps biholomorphically to the target disk $\{|\eta|<\delta\}$ with its real slit removed, whenever $I_{\lambda,b}\subset\{|\eta|<\delta\}$; boundary circles are matched by the exact coordinate $\eta=h(z)$.

This is an explicit local constant-sheet model and annulus coordinate. It supplies no inverse for the coupled torus/old-disk problem, no obstruction-section zero, no target-neck exhaustion and no boundary-degeneration count.

## Statement references

[[thm-holomorphic-implicit-function-theorem]]

## Facts & Assumptions

**Given:** The upper-half-plane coordinate, pole, nonzero complex principal coefficient and stated positive separation parameters. The compactified half-plane is a smooth closed disk in its standard Möbius coordinate.

[F1] A holomorphic map with nonzero derivative has an actual local holomorphic inverse, by the holomorphic implicit-function theorem. Bounded punctures with a removable singularity extend holomorphically. ([[thm-holomorphic-implicit-function-theorem]], [[thm-removable-singularity-characterizations]])

## Proof

1.1 The displayed function has exactly the prescribed pole in $\mathbb H$, is real for real $z$, and tends to zero at infinity, smoothly in the inverse coordinate there. To prove uniqueness, subtract two such functions. The difference extends holomorphically at the interior pole by its matching principal part and [F1], and is holomorphic on the whole closed disk, with real boundary values and value zero at infinity. Its imaginary part $B$ is harmonic and zero on the boundary. Integrating $\operatorname{div}(B\nabla B)$ in polar disk coordinates gives $\int|\nabla B|^2=0$: its outer boundary term is zero, its inner term tends to zero by smoothness, and the angular term integrates to zero by periodicity. Thus $B=0$, and the Cauchy--Riemann equations make the real part constant. The value at infinity makes that constant zero. [F1, given, construct, algebra]

2.1 Put $z=a+y\zeta$. Then $y h=2(u\zeta-v)/(\zeta^2+1)=:g(\zeta)$. Its derivative numerator is $2(u(1-\zeta^2)+2v\zeta)$. For $u\ne0$ the two critical points are the distinct real numbers $(v\pm\sqrt{u^2+v^2})/u$ and their values are $-v\pm\sqrt{u^2+v^2}$. For $u=0$ the two critical points are zero and real infinity, again simple in their local projective coordinates, with distinct values $-2v$ and zero. The compact real projective boundary therefore has exactly these minimum and maximum values, so its image is exactly that interval. Thus no critical point lies in $\mathbb H$, including its simple pole when using the reciprocal target coordinate. For a real target value $t$, the equation $g(\zeta)=t$ is $t\zeta^2-2u\zeta+t+2v=0$. For $t\in[-v-|\lambda|,-v+|\lambda|]$ its discriminant is $4(|\lambda|^2-(t+v)^2)\ge0$, so both projective roots are real. This includes $t=0$, when one root is infinity or infinity is double. Hence the open half-plane image avoids this slit. [step 1.1, construct, algebra]

3.1 The map from $\mathbb H$ to the slit complement is proper: a sequence leaving its compact subsets must tend along a subsequence to its compact projective boundary, whose image lies on the slit by step2.1; it cannot have image in a fixed compact subset of the complement. It is a local holomorphic isomorphism everywhere in the half-plane by step2.1 and [F1]. It is onto the connected complement: its image is nonempty and open by the local inverse, and closed there by properness; the sphere minus one real interval is path connected by paths in its upper and lower half-planes joined through the real exterior or infinity. Fibers are finite and their size is locally constant, because finitely many local inverses cover a fiber and properness excludes additional preimages approaching from elsewhere. Over target infinity there is exactly the single upper-half-plane pole $b$, of local degree one. Therefore every fiber has size one, and the inverse is holomorphic by [F1]. Dividing the target by $y$ gives precisely the displayed slit. The product of its endpoint values is $-u^2/y^2$, proving the assertion about zero and $\operatorname{Re}\lambda$. For completeness the endpoint map $(u,v)\mapsto(\ell,r)$ has Jacobian $2u/(y^2|\lambda|)$. Conversely, for $\ell<0<r$, its two inverse values are $v=-y(\ell+r)/2$ and $u=\pm y\sqrt{-\ell r}$. These are smooth on either fixed-sign half-plane. The derivative at the marked infinity in the fixed inverse source coordinate $1/z$ is $2u$, so the two solutions reverse the orientation of that regular boundary branch over the same slit. They therefore give its two possible marked banks. Thus the sign changes the bank through that node, while $u=0$ is precisely its critical boundary degeneration. Any later obstruction calculation using two independent slit variables must exclude $u=0$ and fix one of these signs. [F1, step 2.1, construct, algebra]

4.1 Smooth dependence away from the poles follows directly by differentiating the rational expression. For the inverse annulus near $b$ write $z=b+w$ and $c=b-\bar b=2iy$. Its exact equation is $$w=\frac{\lambda}{\eta-\bar\lambda/(c+w)}.$$ If $y\ge y_0>0$ and $\delta\le|\eta|\le2\delta$, choose $|\lambda|$ sufficiently small that $|w|\le2|\lambda|/\delta<y_0$ implies $|\bar\lambda/(c+w)|\le\delta/2$. The right side maps that closed disk to itself, and its $w$ derivative has norm at most $C_{\delta,y_0}|\lambda|^2<1/2$. Its explicitly iterated contraction therefore gives the unique inverse branch, holomorphic in $\eta$ by [F1] or by locally uniform holomorphic iteration. Subtracting $\lambda/\eta$ in this identity gives an error at most $C_{\delta,y_0}|\lambda|^2$. Differentiating the same identity in $\eta$, and solving its factor $1-\partial_w(\text{right side})$ by its geometric series, gives that bound for every fixed derivative as well; induction leaves only bounded rational factors on the specified annulus. Step3.1's global bijection identifies this branch with its inverse. Consequently the preimage of the exterior target disk is precisely the interior neighborhood of that pole, and the complementary open piece maps exactly to the disk minus its slit, with the boundary circle matched by $\eta=h$. These local identities assert no solution of any coupled gluing equation. [F1, step 1.1, step 2.1, step 3.1, construct, algebra] ∎
