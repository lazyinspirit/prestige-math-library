---
id: thm-principal-beltrami-solutions-depend-holomorphically-on-bounded-coefficients
kind: theorem
title: Principal Beltrami solutions depend holomorphically on bounded coefficients
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - thm-measurable-riemann-mapping-sphere
  - thm-one-quasiconformal-is-conformal
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - thm-composition-and-inverse-quasiconformal
  - thm-cauchy-integral-formula-higher-derivatives
  - thm-montel-theorem-for-holomorphic-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Coefficient-deformation context; the principal-solution formula, homeomorphism identification and parameter differentiability are proved locally below
---

## Statement

Assume AC. Fix a disk $D_R\subset\mathbb C$ and let $B_R$ be the complex Banach space of essentially bounded measurable coefficients supported in $D_R$. For every $\mu\in B_R$ with $\|\mu\|_\infty<1$, there is exactly one quasiconformal sphere homeomorphism $f^\mu$ with coefficient $\mu$ and principal normalization
$$f^\mu(z)=z+O(1/z)\quad(z\to\infty).$$
For every $0\le\kappa<1$ there is $p>2$ such that, on $\|\mu\|_\infty<\kappa$, writing $\mathcal B$ and $\mathcal C$ for the Beurling and Cauchy transforms,
$$h_\mu=(I-\mu\mathcal B)^{-1}\mu,\qquad f^\mu=z+\mathcal Ch_\mu.$$
Here $h_\mu$ is supported in $D_R$, the map $\mu\mapsto h_\mu$ is holomorphic into $L^p(\mathbb C)$, and $\mu\mapsto f^\mu-z$ is holomorphic into $W^{1,p}(\mathbb C)$ and into bounded Hölder functions of exponent $1-2/p$. In particular $f^\mu(z)$ depends holomorphically on $\mu$ for every fixed finite $z$.

On $\mathbb C\setminus\overline D_R$, the Schwarzian
$$S(f^\mu)=\frac{(f^\mu)'''}{(f^\mu)'}-\frac32\left(\frac{(f^\mu)''}{(f^\mu)'}\right)^2$$
is holomorphic jointly in the coefficient parameter and in the spatial variable, in the sense of holomorphic dependence into the compact-open space of holomorphic functions. Its derivative at zero is
$$D S(f^0)[\nu](z)=-\frac6\pi\int_{D_R}\frac{\nu(w)}{(z-w)^4}\,dA(w).$$
The result asserts local coefficient dependence; it does not identify a marked surface deformation quotient or prove its dimension.

## Facts & Assumptions

**Given:** AC, the support disk, the coefficient Banach space and a bound $0\le\kappa<1$.

[A1] AC supplies DC and countable choice for the analytic suppliers. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The Beurling transform is a norm-one $L^2$ operator and has near-two $L^p$ bounds. For $p>2$ sufficiently close to two, $\kappa\|\mathcal B\|_{p\to p}<1$. On disk-supported inputs $\mathcal C:L^p\to W^{1,p}$ is bounded, has the stated Hölder estimate and decay, and satisfies $\bar\partial\mathcal C h=h$, $\partial\mathcal C h=\mathcal Bh$. [[lem-ip-planar-cauchy-beurling-and-near-two-inversion]]

[F2] The sphere measurable mapping theorem supplies the quasiconformal solution, unique up to Möbius postcomposition. Zero coefficient on an open set makes that homeomorphism biholomorphic there. [[thm-measurable-riemann-mapping-sphere]], [[thm-one-quasiconformal-is-conformal]]

[F3] Quasiconformal maps and their inverses have the area formula and both null-set properties; their derivatives have distortion $\|Df\|_{\rm op}^2\le KJ_f$. The inverse and composition coefficient formulas hold on the common full-measure differentiability set. [[lem-analytic-quasiconformality-implies-modulus-distortion]], [[thm-composition-and-inverse-quasiconformal]]

[F4] Cauchy derivative formulas and normal-family compactness hold with the declared choice hypothesis. [[thm-cauchy-integral-formula-higher-derivatives]], [[thm-montel-theorem-for-holomorphic-functions]]

## Proof

1.1 By [F2], choose the sphere solution fixing infinity. Outside $\overline D_R$ it is biholomorphic, including at infinity. Its Laurent expansion is $az+b+O(1/z)$ with $a\ne0$, since a local holomorphic homeomorphism has holomorphic inverse and therefore nonzero derivative. Postcompose with $(w-b)/a$ to obtain a principal solution $f$. If two principal solutions existed, [F2] would make their quotient a Möbius transformation. The asymptotic expansion forces that transformation to fix infinity, have linear coefficient one and translation coefficient zero, so it is the identity. Thus the principal solution is unique. [A1, F2, given, construct, algebra]

1.2 Choose $p>2$ as in [F1] and put $b=\|\mathcal B\|_{p\to p}$ with $\kappa b<1$. The series $h_\mu=\sum_{j\ge0}(\mu\mathcal B)^j\mu$ converges in $L^p$ uniformly on each coefficient subball with norm bounded by a constant less than $1/b$. Each term is a continuous complex homogeneous polynomial in $\mu$, because multiplication by a bounded coefficient is a bounded complex-linear map on $L^p$ and disk-supported $\mu$ has $L^p$ norm at most $|D_R|^{1/p}\|\mu\|_\infty$. Thus the series is a holomorphic Banach-space map. The equation $h_\mu=\mu(1+\mathcal Bh_\mu)$ shows its support is in $D_R$. Set $g=z+\mathcal Ch_\mu$. Then [F1] gives $g\in W^{1,p}_{\rm loc}\cap C^{1-2/p}_{\rm loc}$, $g=z+O(1/z)$ and $\bar\partial g=\mu\partial g$. No injectivity has yet been assumed for $g$. [F1, given, construct, algebra]

2.1 We justify composition with the mapping-theorem solution even for this nonhomeomorphic candidate. If $u$ is a continuous $W^{1,p}_{\rm loc}$ function with $p>2$ and $f$ is the quasiconformal homeomorphism in step 1.1, then $u\circ f^{-1}\in W^{1,2}_{\rm loc}$ and its derivative satisfies the chain rule. To prove this, fix a relatively compact target set and a larger compact source neighborhood of its inverse image. Mollify $u$ there. The smooth approximants $u_j$ converge uniformly on compact sets, since $u$ is continuous, and their gradients converge in $L^2$. By [F3], change of variables and inverse distortion give $\int|D((u_j-u_l)\circ f^{-1})|^2\le K\int|D(u_j-u_l)|^2$ on these neighborhoods. Uniform convergence also controls the undifferentiated terms. Hence the composites converge strongly in local $W^{1,2}$ to $u\circ f^{-1}$. For smooth $u_j$ the ordinary chain rule at the almost-everywhere differentiability points of $f^{-1}$ gives the derivative formula. The same energy inequality passes these derivatives to the limit; the null-set properties in [F3] identify the resulting almost-everywhere derivative with $Du(f^{-1})Df^{-1}$. This proves the asserted composition rule rather than assuming a quasiconformal rule for a possibly noninjective $u$. [F3, step 1.1, given, construct, algebra]

3.1 Apply step 2.1 with $u=g$. At a common good point, put $w=f(z)$. Since both $f$ and $g$ solve $u_{\bar z}=\mu u_z$, the inverse coefficient formula of [F3] gives $\partial_{\bar w}(g\circ f^{-1})=g_z(z)((f^{-1})_{\bar w}+\mu(z)\overline{(f^{-1})_w})=0$. Thus $H=g\circ f^{-1}$ is continuous, locally $W^{1,2}$ and distributionally $\bar\partial$-closed. It is holomorphic: on any disk its local mollifications are holomorphic on smaller disks, converge to $H$ in $L^2$, and have locally bounded absolute values by the holomorphic mean-value bound. By [F4] they converge locally uniformly along subsequences to a holomorphic function equal almost everywhere, hence by continuity everywhere, to $H$. This applies on the entire plane. At infinity, the two principal asymptotics give $H(w)=w+O(1/w)$. The entire function $H(w)-w$ is bounded and tends to zero. Cauchy's derivative estimate [F4] on arbitrarily large circles makes its derivative zero at every point, so it is the zero constant. Therefore $g=f$. This proves both the formula and the homeomorphism assertion for its candidate. [F3, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 The bounded linear map $\mathcal C$ on disk-supported $L^p$ inputs in [F1] sends the holomorphic series in step 1.2 to a holomorphic $W^{1,p}$-valued map. It is also bounded into bounded Hölder functions: [F1]'s kernel estimate gives the Hölder seminorm, its fixed-support integral estimate gives the supremum on $|z|\le2R$, and its $O(1/|z|)$ estimate bounds the remainder. These bounds apply linearly to differences. Thus the same series converges in that Hölder norm, proving its holomorphic dependence there and at every point evaluation. The solution formula is valid on every $\kappa$ subball after choosing its allowed $p$. [F1, step 1.2, step 3.1, algebra]

5.1 On a compact set outside $\overline D_R$, Cauchy's formula [F4] turns local uniform convergence and holomorphic coefficient dependence into the same dependence for every spatial derivative. Since $f$ is biholomorphic there by step 1.1, $f'$ is nonzero, so the displayed Schwarzian has holomorphic parameter dependence locally uniformly on that compact set. These sets exhaust the exterior domain. Differentiating the norm-convergent series at $\mu=0$ gives $Dh_0[\nu]=\nu$ and $Df^0[\nu]=\mathcal C\nu$. At the identity, the linear Schwarzian term is its third spatial derivative. Off the support disk differentiation under the absolutely convergent integral gives $(\mathcal C\nu)'''(z)=-(6/\pi)\int\nu(w)(z-w)^{-4}dA(w)$, exactly the claimed derivative. The zero coefficient gives $h=0$, $f=z$ and Schwarzian zero. [F1, F4, step 1.1, step 1.2, step 4.1, algebra] ∎

## Actual supplier reading and scope

All declared actual supplier Statements/Facts/full proofs were read. The Beurling supplier's exact SHA256 is fe929b20043f2b9de5102bc0eaa9bc037092c6b916a04c6a1962a702b28c3744; its owner confirmed root construction-ready acceptance in the Calderón root-integration/root-acceptance.json, recorded 05:10:39, with no held items. This proof uses that accepted strict near-two inverse and supplies the Sobolev composition/holomorphic-identification step locally. No general surface deformation-space structure or hyperbolization conclusion is inferred from this coefficient theorem.
