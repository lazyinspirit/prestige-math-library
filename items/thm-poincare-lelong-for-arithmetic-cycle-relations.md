---
id: thm-poincare-lelong-for-arithmetic-cycle-relations
kind: theorem
title: "Poincaré–Lelong identity for arithmetic cycle relations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-arithmetic-variety-over-the-integers
  - def-ag-geometrically-regular-algebra-and-fibre
  - def-integral-scheme
  - def-smooth-morphism-schemes
  - def-total-ring-of-fractions
  - lem-log-rational-current-independent-of-resolution
  - lem-order-function-one-dimensional-local-domain
  - lem-principal-cycle-has-finite-support-on-noetherian-integral-scheme
  - lem-proper-pushforward-of-cycles-well-defined
  - thm-principalization-of-ideals
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-resolution-of-singularities-in-characteristic-zero
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-closed-immersion-schemes
  - def-locally-finite-type-and-finite-type-morphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§§1.1–1.4 and §3.3.3, printed pp. 97–109 and 126–128"
    - title: "Ziyang Jeremy Gao, An Introduction to Arakelov Geometry"
      url: "https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf"
      locator: "§§2.1.2–2.1.3, printed pp. 22–24, Theorem 2.1.11"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a regular arithmetic variety over the ring of integers of a number field $K$, with total scheme pure of dimension $d+1$ and generic fibre pure of dimension $d$. Let $1\leq p\leq d+1$ and let $W\subset X$ be an integral closed subscheme of dimension $d+2-p$, hence codimension $p-1$ in the pure-dimensional convention. If $W_K$ is nonempty, then it has pure dimension $d+1-p$ in $X_K$. For $f\in K(W)^\times$, define $\operatorname{div}_W(f)=\sum_{V\subset W,\;\operatorname{codim}_W V=1}\operatorname{ord}_{\mathcal O_{W,\eta_V}}(f)[V]$, where $\eta_V$ is the generic point of $V$ and the order is the length-defined order on its one-dimensional Noetherian local domain; the sum is finite. Resolve the generic fibre $W_K$ and principalize the divisor of the pulled-back rational function, obtaining a proper birational morphism $\rho:\widetilde W\to W_K$ with $\widetilde W$ smooth and the support of $\operatorname{div}(f\circ\rho)$ a simple normal crossings divisor. On $X_\infty$, define $G_f$ by pushing the locally integrable current $\log|f\circ\rho|^2$ first along $\rho$ and then along $W_K\hookrightarrow X_K$, component by component at every archimedean embedding. This current is independent of the chosen resolution. With $d^c=\frac{i}{4\pi}(\bar\partial-\partial)$, so $dd^c=\frac{i}{2\pi}\partial\bar\partial$, one has
$$dd^cG_f=\delta_{\operatorname{div}_W(f)_\infty},$$
where the subscript denotes the part of the divisor meeting the generic fibre. Complex conjugation gives $c^*G_f=(-1)^{p-1}G_f$. Consequently, for $p\leq d+1$, $(\operatorname{div}_W(f),-G_f)$ is a Green cycle with smooth form zero. If $W_K=\varnothing$, both currents in the displayed equality are zero.

## Statement references

[Gillet–Soulé, §3.3.3](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Gao, Theorem 2.1.11](https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular arithmetic variety $X$, an integral closed subscheme $W\subset X$ of codimension $p-1$, and a nonzero rational function $f\in K(W)^\times$.

[A1] The Axiom of Choice is assumed by the characteristic-zero resolution, principalization, and proper cycle-pushforward suppliers used below ([[def-axiom-of-choice]], [[thm-resolution-of-singularities-in-characteristic-zero]], [[thm-principalization-of-ideals]], [[lem-proper-pushforward-of-cycles-well-defined]]).

[F1] An arithmetic variety is flat and of finite type over $\operatorname{Spec}\mathcal O_K$ with smooth quasi-projective generic fibre; regularity refers to its total scheme ([[def-arithmetic-variety-over-the-integers]]).

[F2] Every integral separated finite-type scheme over a characteristic-zero field has a proper birational resolution with smooth source ([[thm-resolution-of-singularities-in-characteristic-zero]]).

[F3] A smooth finite-type scheme over a field has regular local rings and is locally factorial; thus the support of the divisor of a nonzero rational function has a coherent ideal. Principalizing that ideal gives a proper modification whose total-transform support has simple normal crossings ([[def-smooth-morphism-schemes]], [[def-ag-geometrically-regular-algebra-and-fibre]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-principalization-of-ideals]]).

[F4] Proper pushforward of divisor cycles along an equal-dimensional proper map is the divisor of the field norm; in the birational case that norm is the identity, so the pushed divisor is the divisor downstairs, and proper pushforward commutes with flat field base change ([[lem-proper-pushforward-of-cycles-well-defined]]).

[F5] The current $G_f$ is defined by resolution and pushforward of $\log|f|^2$, and is independent of the resolution on each integral component after every archimedean base change ([[lem-log-rational-current-independent-of-resolution]]).

[F6] An integral scheme is reduced and irreducible with a function field obtained from an affine coordinate domain; codimension-one orders are defined on one-dimensional Noetherian local domains, whose rational-function order is length-defined ([[def-integral-scheme]], [[def-total-ring-of-fractions]], [[lem-order-function-one-dimensional-local-domain]]).

[F7] The divisor sum $\operatorname{div}_W(f)$ has finite support on the quasi-compact Noetherian integral scheme $W$ ([[lem-principal-cycle-has-finite-support-on-noetherian-integral-scheme]]). 

[F8] The support $W$ in the Statement is quasi-compact and Noetherian: $X$ is finite type over the Noetherian ring $\mathcal O_K$, and $W$ is closed ([[cor-ring-of-integers-is-a-dedekind-domain]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-closed-immersion-schemes]]).

## Proof

**Given:** The data in the Statement.

1.1 On a complex coordinate disk with coordinate $z$, the convention gives $dd^c u=(4\pi)^{-1}\Delta u\,dx\wedge dy$. For every compactly supported smooth test function $\varphi$, Green's formula on $|z|\geq\varepsilon$ gives $\lim_{\varepsilon\downarrow0}\int_{|z|\geq\varepsilon}\log|z|^2\,\Delta\varphi\,dx\,dy=4\pi\varphi(0)$: the outer boundary vanishes, the inner normal derivative of $\log|z|^2$ is $-2/\varepsilon$, and the term containing $\log\varepsilon$ is $O(\varepsilon|\log\varepsilon|)$. Hence $dd^c\log|z|^2=\delta_0$. Applying this in the normal coordinate and integrating in the remaining coordinates gives the same identity for a smooth coordinate divisor. [given, construct, algebra]

1.2 By [F2] and [F3], after the proper birational modification in the Statement, each point has local coordinates in which $f\circ\rho=u\prod_j z_j^{m_j}$, with $u$ a holomorphic unit and $m_j\in\mathbb Z$. On a sufficiently small polydisk $u$ has a holomorphic logarithm, so $\log|u|^2$ is pluriharmonic. Therefore $dd^c\log|f\circ\rho|^2=\sum_jm_j\delta_{z_j=0}=\delta_{\operatorname{div}(f\circ\rho)}$, with negative $m_j$ accounting for poles. These logarithms are locally integrable. [A1, F2, F3, step 1.1, algebra]

1.3 By [F5], the current $G_f$ is independent of the chosen resolution. [F5, given]

2.1 Proper pushforward of currents commutes with $dd^c$: for a test form $\eta$, this is the identity $\langle dd^c\rho_*T,\eta\rangle=\langle T,\rho^*dd^c\eta\rangle=\langle T,dd^c\rho^*\eta\rangle=\langle\rho_*dd^cT,\eta\rangle$. The same holds for $W_K\hookrightarrow X_K$. Pushing the identity of step 1.2 first through $\rho$ and then through the immersion gives $dd^cG_f=\delta_{\rho_*\operatorname{div}(f\circ\rho)}$; [F4] identifies this cycle with $\operatorname{div}_W(f)_\infty$. [F4, F6, step 1.2, construct]

3.1 If $W_K=\varnothing$, then $W_\infty=\varnothing$, so its integration currents and the pushforward defining $G_f$ are zero. Otherwise step 2.1 proves the displayed identity on every embedding component. Complex conjugation exchanges the components indexed by $\sigma$ and $\bar\sigma$ and sends the chosen resolution to its conjugate. Since $W_K$ is nonempty, $W$ is horizontal. Let $\xi$ be its generic point and, on an affine neighborhood, let $P$ be the corresponding prime in the coordinate ring over $R=\mathcal O_K$. Then $P\cap R=(0)$; every prime contained in $P$ also contracts to $(0)$, so localization at $S=R\setminus\{0\}$ identifies all prime chains below $P$ with those below $S^{-1}P$. Hence $W_K$ has the same codimension $p-1$ in $X_K$ as $W$ has in $X$, and its pure dimension is $r=d-(p-1)=d+1-p$. On a component the pushforward current pairs with a test form $\eta$ of bidegree $(r,r)$ as $\int_{\widetilde W_\sigma}\log|f_\sigma|^2\,\rho_\sigma^*\eta$. Conjugation reverses the real orientation of a complex manifold of dimension $n$ by $(-1)^n$; the target has dimension $d$ and the source has dimension $r$, so the pushforward pairing changes by $(-1)^{d-r}=(-1)^{p-1}$. The logarithm of the absolute square is unchanged under conjugation, and the conjugate resolution gives the same current by resolution independence. Hence $c^*G_f=(-1)^{p-1}G_f$. Therefore, when $p\leq d+1$, $-G_f$ has the required reality and $dd^c(-G_f)+\delta_{\operatorname{div}_W(f)_\infty}=0$ is the Green equation with smooth form zero; the vertical part contributes no complex current.  [F1, F5, step 2.1, given] ∎
