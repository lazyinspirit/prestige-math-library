---
id: lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation
kind: lemma
title: "The local fixed point index is invariant under conjugation by a local diffeomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-local-fixed-point-index, prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism, prop-degree-is-multiplicative-under-composition, thm-degree-is-invariant-under-proper-smooth-homotopy, cor-multivariable-taylor-formula-with-peano-remainder, thm-regular-value-formula-for-degree, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed p. 136 (the local number is invariant under diffeomorphic reparametrization)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed p. 13 (the index is local and independent of the chosen neighbourhood)"
dependency_level: 1
---

## Statement

Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$, let $f:M\to M$ be smooth with
an isolated fixed point $x$, let $h:N\to M$ be a diffeomorphism from a
neighbourhood of $y\in N$ onto a neighbourhood of $x$ with $h(y)=x$, and let
$f':=h^{-1}\circ f\circ h$ (defined near $y$) have the isolated fixed point $y$.
Then

$$\operatorname{ind}_y(f')=\operatorname{ind}_x(f)$$

([[def-local-fixed-point-index]]). In particular, if $\pi:\widetilde M\to M$ is
a smooth covering map that is a local diffeomorphism, and $\widetilde f$ is a smooth lift of $f$
($\pi\circ\widetilde f=f\circ\pi$) and $\widetilde x$ is a fixed point of
$\widetilde f$ with $\pi(\widetilde x)=x$, then
$\operatorname{ind}_{\widetilde x}(\widetilde f)=\operatorname{ind}_x(f)$
whenever $x$ is an isolated fixed point of $f$.

## Facts & Assumptions

**Given:** Smooth manifolds $M,N$ without boundary, a smooth map $f:M\to M$ with isolated fixed point $x$, a local diffeomorphism $h$ as above, and $f'=h^{-1}fh$ with isolated fixed point $y$.

[F1] For an isolated fixed point $z$ of a smooth self-map $F$ of an $n$-manifold, a chart $(\chi,W)$ with $\chi(z)=0$ and an admissible radius $\varepsilon$ give $\operatorname{ind}_z(F)$ as the degree of $v\mapsto(u-\widehat F(u))(\varepsilon v)/|(u-\widehat F(u))(\varepsilon v)|$ on $S^{n-1}$, and the value does not depend on the admissible radius ([[def-local-fixed-point-index]]): for two admissible radii the straight-line homotopy through $u-\widehat F$ along the annulus is nowhere zero, so [[thm-degree-is-invariant-under-proper-smooth-homotopy]] gives equal degrees.

[L1] Degree is multiplicative under composition ([[prop-degree-is-multiplicative-under-composition]]), the radial self-map $w\mapsto Aw/|Aw|$ of $S^{n-1}$ determined by a linear isomorphism $A$ is a diffeomorphism of degree $\operatorname{sign}\det A$ ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]], [[thm-regular-value-formula-for-degree]]), and degree is invariant under smooth homotopy of maps of spheres ([[thm-degree-is-invariant-under-proper-smooth-homotopy]]). For $n=1$, use reduced degree: homotopy invariance and multiplicativity are supplied by [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]], and $\rho_A(v)=\operatorname{sign}(A)v$ has reduced degree $\operatorname{sign}(A)$.

[L2] A smooth map $\Phi$ of an open set of $\mathbb R^n$ satisfies $\Phi(x+h)=\Phi(x)+d\Phi_x(h)+O(|h|^2)$ as $h\to0$, uniformly on compact sets where the second derivatives are bounded (the Lagrange remainder of [[cor-multivariable-taylor-formula-with-peano-remainder]] is controlled by the continuity of the second derivatives on a compact neighbourhood).

## Proof

1.1 Charts and setup. Choose charts $\varphi$ at $x$ and $\psi$ at $y$ with $\varphi(x)=\psi(y)=0$, admissible for $f$ and $f'$ respectively, and put $k:=\varphi\circ h\circ\psi^{-1}$, a smooth local diffeomorphism near $0$ with $k(0)=0$ and $A:=Dk_0$ invertible; on a neighbourhood of $0$ the identity $\widehat{f'}=k^{-1}\circ\widehat f\circ k$ holds, and the displacement maps $g(u):=u-\widehat f(u)$, $g'(u):=u-\widehat{f'}(u)$ vanish only at $u=0$ in some ball. By [F1] the values $\operatorname{ind}_x(f)$ and $\operatorname{ind}_y(f')$ are computed by the normalized sphere maps of $g$ and $g'$ at any admissible radii, so it suffices to produce one common degree for such normalized maps. [given, F1]

1.2 Degree of the linearized comparison map. Choose $R>0$ so that $g$ is defined and nonzero on $0<|w|\le R$. Choose $r>0$ so that $k$ is defined and injective on $|u|\le r$ and $k(\overline B_r)\subseteq B_R$. Fix $0<\varepsilon\le r$ and an admissible radius $0<\delta\le R$ for $g$, so that $\Phi(v):=g(\delta v)/|g(\delta v)|$ has degree $\operatorname{ind}_x(f)$ by [F1]. For $v\in S^{n-1}$ the point $k(\varepsilon v)$ is nonzero and satisfies $|k(\varepsilon v)|<R$, and $k(\varepsilon v)=|k(\varepsilon v)|\,\sigma(v)$ with $\sigma(v):=k(\varepsilon v)/|k(\varepsilon v)|$. For fixed $v$ the points $k(\varepsilon v)$ and $\delta\sigma(v)$ lie on one ray through $0$ and have moduli in $(0,R]$, so the radial interpolation $H_t(v):=g\bigl(((1-t)|k(\varepsilon v)|+t\delta)\sigma(v)\bigr)/\bigl|g\bigl(((1-t)|k(\varepsilon v)|+t\delta)\sigma(v)\bigr)\bigr|$, $t\in[0,1]$, is a homotopy of nowhere-zero maps of $S^{n-1}$ from $v\mapsto g(k(\varepsilon v))/|g(k(\varepsilon v))|$ to $\Phi\circ\sigma$; hence $\deg\bigl(g(k(\varepsilon\cdot))/|g(k(\varepsilon\cdot))|\bigr)=\deg\Phi\cdot\deg\sigma$ by [L1]. By [L2], $k(u)=Au+O(|u|^2)$ with $A$ invertible, so $t\mapsto k(tv)/|k(tv)|$ on $0<t\le\varepsilon$, extended by $\rho_A(v):=Av/|Av|$ at $t=0$, is a smooth homotopy (the quotient $k(tv)/t=\int_0^1Dk_{stv}v\,ds$ extends smoothly to $t=0$) from $\sigma$ to $\rho_A$ through nowhere-zero maps, whence $\deg\sigma=\deg\rho_A=\operatorname{sign}\det A$ by [L1]. Finally the normalized map of $u\mapsto A^{-1}g(k(u))$ at radius $\varepsilon$ is $\rho_{A^{-1}}\bigl(g(k(\varepsilon\cdot))/|g(k(\varepsilon\cdot))|\bigr)$ with $\rho_{A^{-1}}(w)=A^{-1}w/|A^{-1}w|$, so by [L1] its degree is $\deg\rho_{A^{-1}}\cdot\operatorname{sign}\det A\cdot\operatorname{ind}_x(f)=\operatorname{ind}_x(f)$, because $\deg\rho_{A^{-1}}=\operatorname{sign}\det A^{-1}=\operatorname{sign}\det A$. [F1, L1, L2]

2.1 Second-order comparison. Write $\widehat f(u)=u-g(u)$ and compute, using [L2] for $k^{-1}$ at the point $k(u)$ with increment $-g(k(u))$, $g'(u)=u-k^{-1}(k(u)-g(k(u)))=d(k^{-1})_{k(u)}(g(k(u)))+O(|g(k(u))|^2)$ uniformly near $0$. Since $u\mapsto d(k^{-1})_{k(u)}$ is continuous and equals the invertible $A^{-1}$ at $u=0$, on a ball of radius $\varepsilon_0$ the estimates $|d(k^{-1})_{k(u)}v|\asymp|v|$ hold uniformly, and $|g(k(u))|\le C|u|$; hence $|g'(u)-A^{-1}g(k(u))|=o(|g(k(u))|)$ as $u\to0$, uniformly, and in particular, after shrinking the radius $\varepsilon$ fixed in step 1.2 if necessary, $|g'(u)-A^{-1}g(k(u))|\le\tfrac12|A^{-1}g(k(u))|$ for $0<|u|\le\varepsilon$. [step 1.1, step 1.2, L2]

3.1 Consequence: equal degrees. For $0<|u|\le\varepsilon$ the vector $A^{-1}g(k(u))$ is nonzero because $g(k(u))\neq0$ and $A$ is invertible, and by step 2.1 every point of the segment from $A^{-1}g(k(u))$ to $g'(u)$ lies within $|g'(u)-A^{-1}g(k(u))|\le\tfrac12|A^{-1}g(k(u))|$ of $A^{-1}g(k(u))$, hence is nonzero. So $(t,u)\mapsto(1-t)A^{-1}g(k(u))+tg'(u)$ is a smooth homotopy of nowhere-zero maps on $S^{n-1}$, the normalized maps of $A^{-1}g(k(\varepsilon\cdot))$ and of $g'(\varepsilon\cdot)$ have the same degree by [L1], and that degree is $\operatorname{ind}_y(f')$ by [F1]. [step 2.1, F1, L1]

4.1 Conclusion. Combining steps 3.1 and 1.2, the normalized maps computing $\operatorname{ind}_y(f')$ and $\operatorname{ind}_x(f)$ have the same degree, so $\operatorname{ind}_y(f')=\operatorname{ind}_x(f)$. For the covering clause, $\pi$ is a local diffeomorphism, so it restricts to a diffeomorphism from an open neighbourhood of $\widetilde x$ onto an open neighbourhood of $x$, and $\pi\circ\widetilde f=f\circ\pi$ gives $\widetilde f=\pi^{-1}\circ f\circ\pi$ there; the first clause applies with $h=\pi$ and $f'=\widetilde f$. No orientation of $M$ or $N$ is used and no choice principle is used. [step 3.1, step 1.2, given] ∎
