---
id: lem-em-phasor-real-part-calculus-and-equivalence
kind: lemma
title: "Real parts of $e^{-i\\omega t}$ phasors: calculus, injectivity and equivalence with the real Helmholtz-Maxwell system"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-numbers-and-arithmetic, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-algebra-of-derivatives, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-chain-rule-for-total-derivatives, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-differentiable-implies-continuous, def-metric-continuity, lem-product-topology-on-rn, thm-product-universal-property, lem-algebra-of-continuous-real-maps-on-a-space]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  def-metric-continuity: mathematical-premise
  lem-product-topology-on-rn: mathematical-premise
  thm-product-universal-property: mathematical-premise
  lem-algebra-of-continuous-real-maps-on-a-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Peatross and M. Ware, Physics of Light and Optics (Brigham Young University, author-hosted complete 348-page textbook)"
      url: "https://optics.byu.edu/docs/OpticsBook.pdf"
      locator: "chapter 10 'Diffraction', printed pp. 261-271, sections 10.1-10.4 and Example 10.4; appendix 10.A"
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS, section 13.2 'Wellenleiter'"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "printed p. 13.3, eqs. (13.10)-(13.11): ideal-conductor waveguide model and the monochromatic phasor convention"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $D\subseteq\mathbb R^3$ be open, $c>0$ and $\omega>0$, and let $\widetilde E,\widetilde B:D\to\mathbb C^3$. Define $E,B:D\times\mathbb R\to\mathbb R^3$ by $E(x,t):=\operatorname{Re}(\widetilde E(x)e^{-i\omega t})$ and $B(x,t):=\operatorname{Re}(\widetilde B(x)e^{-i\omega t})$ componentwise ([[def-complex-exponential]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]; [[def-ck-euclidean-maps-and-diffeomorphisms]] for the classes). Then: (a) [Calculus] if $\widetilde E,\widetilde B$ are $C^1$, then $E,B$ are $C^1$ and at every $(x,t)\in D\times\mathbb R$: $\partial_tE(x,t)=\operatorname{Re}(-i\omega\widetilde E(x)e^{-i\omega t})$, and likewise for $B$; for each $j\in\{1,2,3\}$, $\partial_jE(x,t)=\operatorname{Re}(\partial_j\widetilde E(x)e^{-i\omega t})$, and likewise for $B$; and with the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] acting on the spatial variable, $\operatorname{div}E(x,t)=\operatorname{Re}((\operatorname{div}\widetilde E)(x)e^{-i\omega t})$, $\operatorname{curl}E(x,t)=\operatorname{Re}((\operatorname{curl}\widetilde E)(x)e^{-i\omega t})$, and likewise for $B$. (b) [Injectivity] if $w\in\mathbb C^3$ and $\operatorname{Re}(we^{-i\omega t})=0$ for all $t\in\mathbb R$, then $w=0$; more generally, if $w:D\to\mathbb C^3$ is continuous and $\operatorname{Re}(w(x)e^{-i\omega t})=0$ for all $(x,t)\in D\times\mathbb R$, then $w\equiv0$ on $D$. (c) [Equivalence] if $\widetilde E,\widetilde B$ are $C^1$, the phasor system $$\operatorname{div}\widetilde E=0,\quad\operatorname{div}\widetilde B=0,\quad\operatorname{curl}\widetilde E=i\omega\widetilde B,\quad\operatorname{curl}\widetilde B=-i\omega c^{-2}\widetilde E$$ holds on $D$ if and only if the real system $$\operatorname{div}E=0,\quad\operatorname{div}B=0,\quad\operatorname{curl}E=-\partial_tB,\quad\operatorname{curl}B=c^{-2}\partial_tE$$ holds on $D\times\mathbb R$.

## Facts & Assumptions

**Given:** An open set $D\subseteq\mathbb R^3$, reals $c>0$ and $\omega>0$, complex fields $\widetilde E,\widetilde B:D\to\mathbb C^3$, and the associated real fields $E,B:D\times\mathbb R\to\mathbb R^3$ of the Statement. Components are indexed by $k,j\in\{1,2,3\}$.

[F1] Complex exponential and Euler form: $\exp$ is entire with $\exp'=\exp$; for real $\theta$ one has $e^{i\theta}=\cos\theta+i\sin\theta$, so $e^{-i\omega t}=\cos\omega t-i\sin\omega t$ and $e^{-i\pi/2}=\cos(\pi/2)-i\sin(\pi/2)=-i$; $\sin'=\cos$ and $\cos'=-\sin$ on $\mathbb R$ ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F2] Real and imaginary parts: $\operatorname{Re}(a+bi)=a$, $\operatorname{Im}(a+bi)=b$; $\operatorname{Re}$ and $\operatorname{Im}$ are $\mathbb R$-linear; $(a+bi)(s+ti)=(as-bt)+(at+bs)i$; in particular $\operatorname{Re}((a+bi)(c-is))=ac+bs$ and $\operatorname{Re}(-i\omega(a+bi)(c-is))=\omega bc-\omega as$ for real $a,b,\omega,c,s$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-complex-numbers-and-arithmetic]]).

[F3] Complex differentiability and real differentiability: complex differentiability at a point is equivalent to real total differentiability there with the derivative given by multiplication by the complex derivative; hence $\exp$ is real totally differentiable everywhere with real derivative the multiplication map $h\mapsto e^z h$, and the chain rule for total derivatives applies to real-differentiable compositions ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-total-derivatives]]).

[F4] One-variable and componentwise rules: sums, scalar multiples and products of differentiable real functions are differentiable with the usual derivatives ([[thm-algebra-of-derivatives]]); partial derivatives are coordinate-line directional derivatives, so $\partial_jg(x)$ is the derivative at $0$ of $h\mapsto g(x+he_j)$ ([[def-directional-and-partial-derivatives]]); a map $U\to\mathbb R^q$ on an open $U$ is $C^k$ when every component's iterated partials up to order $k$ exist and are continuous, and a complex field is $C^1$ exactly when its six real coordinate maps $\operatorname{Re}\widetilde E_k,\operatorname{Im}\widetilde E_k$ are $C^1$, with complex partials $\partial_j\widetilde E_k=\partial_j(\operatorname{Re}\widetilde E_k)+i\,\partial_j(\operatorname{Im}\widetilde E_k)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] The divergence of a $C^1$ real field $F$ on open $U\subseteq\mathbb R^n$ is $\operatorname{div}F=\sum_k\partial_kF_k$, and the curl on $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$; both are linear in $F$ with real scalars, and on complex fields both are applied componentwise to real and imaginary parts ([[def-divergence-and-curl-of-a-c1-vector-field]], [[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F6] Continuity toolkit: continuity is the metric notion of [[def-metric-continuity]], and on $\mathbb R^m$ the Euclidean topology agrees with the product-of-$\mathbb R$ topology ([[lem-product-topology-on-rn]]); projections from a product are continuous and a map into a product is continuous exactly when all its components are ([[thm-product-universal-property]]); finite sums, products, maxima, minima and quotients of continuous real-valued maps on a topological space are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]); and a function differentiable at a point of its domain is continuous there ([[cor-differentiable-implies-continuous]]). For the pullbacks used here, fix $(x_*,t_*)$. The Euclidean product distance bounds both $|x-x_*|$ and $|t-t_*|$; choosing the $\delta$ from continuity of $g:D\to\mathbb R$ at $x_*$ or of $h:\mathbb R\to\mathbb R$ at $t_*$ therefore proves directly that $(x,t)\mapsto g(x)$ and $(x,t)\mapsto h(t)$ are continuous. Finite sums and products of these pullbacks are continuous by the cited algebra lemma.

## Proof

**Proof technique:** direct; expand the encoding in real components, differentiate along the time and coordinate directions with the one-variable rules, read the divergence and curl off the componentwise formulas, and obtain the equivalence from the injectivity of the real-part evaluation proved at the two phases $t=0$ and $t=\pi/(2\omega)$.

1.1 [Encoding] For clauses (a) and (c), assume the stated $C^1$ hypotheses. For every $k$ and every $(x,t)\in D\times\mathbb R$, [F1] and [F2] give $E_k(x,t)=\operatorname{Re}(\widetilde E_k(x)e^{-i\omega t})=(\operatorname{Re}\widetilde E_k(x))\cos\omega t+(\operatorname{Im}\widetilde E_k(x))\sin\omega t$, and the same display with $\widetilde B_k$ in place of $\widetilde E_k$ gives $B_k(x,t)$; moreover, since $\widetilde E$ and $\widetilde B$ are $C^1$, their six real coordinate maps and all first partials are continuous on $D$ and the complex partials are $\partial_j\widetilde E_k=\partial_j(\operatorname{Re}\widetilde E_k)+i\,\partial_j(\operatorname{Im}\widetilde E_k)$, by [F4]. [given, F1, F2, F4]

1.2 [Injectivity] Let $w\in\mathbb C^3$ satisfy $\operatorname{Re}(we^{-i\omega t})=0$ for every real $t$. At $t=0$, [F1] gives $e^0=1$, so $\operatorname{Re}w=0$; at $t=\pi/(2\omega)$ one has $e^{-i\pi/2}=-i$ by [F1], so $0=\operatorname{Re}(-iw)=\operatorname{Im}w$ by [F2]; hence $w=\operatorname{Re}w+i\operatorname{Im}w=0$. If $w:D\to\mathbb C^3$ satisfies $\operatorname{Re}(w(x)e^{-i\omega t})=0$ for all $(x,t)$, applying the preceding conclusion at each fixed $x\in D$ gives $w(x)=0$ for every $x$, so $w\equiv0$; no continuity of $w$ is needed for this conclusion. [given, F1, F2]

2.1 [Time derivative] Fix $x$ and $k$. The map $t\mapsto\widetilde E_k(x)e^{-i\omega t}$ is the composition of the real-linear map $t\mapsto-i\omega t$ (which is differentiable on $\mathbb R$ with derivative $-i\omega$ and real-linear, so totally differentiable with that derivative) with $\exp$, which is real totally differentiable everywhere with derivative the multiplication $h\mapsto e^z h$ by [F3], followed by multiplication by the constant $\widetilde E_k(x)$; the chain and product rules of [F3], [F4] give derivative $-i\omega\widetilde E_k(x)e^{-i\omega t}$. Taking real parts by [F2] and inserting the display of step 1.1, $\partial_tE_k(x,t)=\operatorname{Re}(-i\omega\widetilde E_k(x)e^{-i\omega t})=\omega(\operatorname{Im}\widetilde E_k(x))\cos\omega t-\omega(\operatorname{Re}\widetilde E_k(x))\sin\omega t$ for every $(x,t)$; the same computation with $\widetilde B$ gives $\partial_tB_k(x,t)=\operatorname{Re}(-i\omega\widetilde B_k(x)e^{-i\omega t})$. [step 1.1, F1, F2, F3, F4]

2.2 [Spatial derivatives] Fix $(x,t)$ and indices $j,k$. The map $h\mapsto E_k(x+he_j,t)$ equals $h\mapsto\operatorname{Re}(\widetilde E_k(x+he_j))$ times $\cos\omega t$ plus $h\mapsto\operatorname{Im}(\widetilde E_k(x+he_j))$ times $\sin\omega t$ on a neighbourhood of $0$ small enough that $x+he_j\in D$, by step 1.1. By [F4] the coordinate-line maps $h\mapsto\operatorname{Re}\widetilde E_k(x+he_j)$ and $h\mapsto\operatorname{Im}\widetilde E_k(x+he_j)$ are differentiable at $h=0$ with derivatives $\partial_j\operatorname{Re}\widetilde E_k(x)$ and $\partial_j\operatorname{Im}\widetilde E_k(x)$, so the sum, scalar-multiple and product rules of [F4] give $\partial_jE_k(x,t)=(\partial_j\operatorname{Re}\widetilde E_k(x))\cos\omega t+(\partial_j\operatorname{Im}\widetilde E_k(x))\sin\omega t$, which by [F2] and step 1.1 equals $\operatorname{Re}((\partial_j\widetilde E_k)(x)e^{-i\omega t})$; the same computation with $\widetilde B$ gives $\partial_jB_k(x,t)=\operatorname{Re}((\partial_j\widetilde B_k)(x)e^{-i\omega t})$. [step 1.1, F2, F4]

3.1 [Divergence and curl] By [F4] the divergence and curl act componentwise on real and imaginary parts of complex fields; hence, summing step 2.2 over $k$ and using $\mathbb R$-linearity of $\operatorname{Re}$ [F2], $\operatorname{div}E(x,t)=\sum_k\partial_kE_k=\operatorname{Re}((\operatorname{div}\widetilde E)(x)e^{-i\omega t})$, and for the third curl coordinate, in the naming of [F5], the alternating sum of the displayed partials and [F2] give $(\operatorname{curl}E)_z(x,t)=\partial_xE_y-\partial_yE_x=\operatorname{Re}((\partial_x\widetilde E_y-\partial_y\widetilde E_x)(x)e^{-i\omega t})=\operatorname{Re}((\operatorname{curl}\widetilde E)_z(x)e^{-i\omega t})$, the other two coordinates being identical by cyclic relabelling of the indices; the linearity of [F5] organizes these componentwise identities into the displayed formulas, and the same argument with $\widetilde B$ gives those for $B$. [step 2.2, F2, F4, F5]

4.1 [Regularity] Each of the displayed first partials of $E$ and of $B$ in steps 2.1, 2.2 and 3.1 is a finite sum of products of the maps $(x,t)\mapsto g(x)$ for $g$ among $\operatorname{Re}\widetilde E_k,\operatorname{Im}\widetilde E_k,\partial_j\operatorname{Re}\widetilde E_k,\partial_j\operatorname{Im}\widetilde E_k$ (and the $\widetilde B$ analogues), each continuous on $D\times\mathbb R$ by [F6] since its one-variable factor is continuous on $D$ by [F4], together with the maps $(x,t)\mapsto\cos\omega t$ and $(x,t)\mapsto\sin\omega t$, continuous on $D\times\mathbb R$ by [F1], [F6]; the fields $E_k,B_k$ themselves are of the same form by step 1.1. By the sum-and-product clause of [F6], all these functions are continuous on $D\times\mathbb R$; hence every first partial of $E$ and $B$ exists and is continuous there, so $E$ and $B$ are $C^1$ by [F4], with the partials displayed in steps 2.1, 2.2 and 3.1. This proves (a). [step 2.1, step 2.2, step 3.1, F1, F4, F6]

4.2 [(i) implies (ii)] Assume the phasor system of (c) holds on $D$. Then for every $(x,t)$: $\operatorname{div}E=\operatorname{Re}((\operatorname{div}\widetilde E)e^{-i\omega t})=0$ and $\operatorname{div}B=0$ by step 3.1 and $\operatorname{div}\widetilde E=\operatorname{div}\widetilde B=0$; $\operatorname{curl}E=\operatorname{Re}((\operatorname{curl}\widetilde E)e^{-i\omega t})=\operatorname{Re}(i\omega\widetilde B e^{-i\omega t})=-\partial_tB$ by steps 3.1, 2.1 and $\operatorname{curl}\widetilde E=i\omega\widetilde B$; and $\operatorname{curl}B=\operatorname{Re}((\operatorname{curl}\widetilde B)e^{-i\omega t})=\operatorname{Re}(-i\omega c^{-2}\widetilde Ee^{-i\omega t})=c^{-2}\partial_tE$ by steps 3.1, 2.1 and $\operatorname{curl}\widetilde B=-i\omega c^{-2}\widetilde E$. Hence the real system holds on $D\times\mathbb R$. [step 2.1, step 3.1, given, algebra]

4.3 [(ii) implies (i)] Assume the real system of (c) holds on $D\times\mathbb R$. The fields $u:=\operatorname{div}\widetilde E$, $v:=\operatorname{div}\widetilde B$, $w:=\operatorname{curl}\widetilde E-i\omega\widetilde B$ and $z:=\operatorname{curl}\widetilde B+i\omega c^{-2}\widetilde E$ are continuous maps on $D$, with $u,v$ scalar-valued and $w,z$ valued in $\mathbb C^3$ by step 1.1 and [F4], [F5], and steps 2.1 and 3.1 give $\operatorname{Re}(u(x)e^{-i\omega t})=\operatorname{div}E=0$, $\operatorname{Re}(v(x)e^{-i\omega t})=\operatorname{div}B=0$, $\operatorname{Re}(w(x)e^{-i\omega t})=\operatorname{curl}E+\partial_tB=0$ and $\operatorname{Re}(z(x)e^{-i\omega t})=\operatorname{curl}B-c^{-2}\partial_tE=0$ for all $(x,t)$; the two-phase calculation of step 1.2, also valid for a single complex scalar, then forces $u=v=w=z=0$ on $D$, which is exactly the phasor system. [step 1.2, step 2.1, step 3.1, given, algebra]

5.1 [Conclusion] Steps 2.1, 2.2, 3.1 and 4.1 prove the calculus and $C^1$ clauses of (a); step 1.2 proves the injectivity clause (b); steps 4.2 and 4.3 prove both directions of the equivalence (c). All assertions are pointwise identities on the open domain $D\times\mathbb R$, no existence theory for partial differential equations, no boundary condition and no choice principle are used, and the argument rests only on the cited complex, real-analysis and topological continuity suppliers. [step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2, step 4.3, given] ∎

## Remarks

- The two evaluation points $t=0$ and $t=\pi/(2\omega)$ are the whole content of injectivity; no integration or orthogonality argument is needed, and the field version of (b) does not use the continuity hypothesis, which is recorded only because the Statement carries it.
- The equivalence (c) concerns the four source-free equations only. It says nothing about boundary conditions, energy, uniqueness of solutions or existence; those belong to the consuming items.
- The proof uses no choice principle: all steps are pointwise computations with explicit finite data, and the continuity conclusion only composes explicitly given continuous maps.
