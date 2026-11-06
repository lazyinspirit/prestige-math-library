---
id: lem-r2-poincare-dual-test-form-for-three-cycle
kind: lemma
title: "A closed dual test form pairs a compact three-cycle with flux and source currents"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
axiom_strength: ZF + full AC inherited from Poincare duality and the normal Thom supplier.
proof_strategy: direct
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - def-r2-current-compatible-intersection-number
  - lem-r2-source-current-pairs-with-transverse-dual-cycle
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - thm-de-rham-theorem
  - lem-de-rham-top-integral-is-fundamental-class-evaluation
  - def-cap-duality-map-for-an-oriented-manifold
  - prop-cap-product-naturality-and-projection-formula
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-de-rham-integration-cochain-map
  - def-kronecker-evaluation-pairing
  - def-axiom-of-choice
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-excision-for-singular-cohomology
  - def-singular-cochain-complex-with-coefficients
  - def-relative-cap-product
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  def-r2-current-compatible-intersection-number: mathematical-premise
  lem-r2-source-current-pairs-with-transverse-dual-cycle: mathematical-premise
  lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  lem-de-rham-top-integral-is-fundamental-class-evaluation: mathematical-premise
  def-cap-duality-map-for-an-oriented-manifold: mathematical-premise
  prop-cap-product-naturality-and-projection-formula: mathematical-premise
  def-fundamental-class-of-a-compact-oriented-manifold: mathematical-premise
  def-de-rham-integration-cochain-map: mathematical-premise
  def-kronecker-evaluation-pairing: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-excision-for-singular-cohomology: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-relative-cap-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 9, §§9.1–9.3"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Theorems 9.2–9.5, normal Thom class, Poincare duality and transverse intersection."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $X$ be a compact oriented smooth six-manifold without boundary, and let $D,C\subseteq X$ be compact oriented embedded smooth three-manifolds without boundary that meet transversely. Define $\sigma_x(C,D)=+1$ when a positive basis of $T_xC$ followed by a positive basis of $T_xD$ gives the orientation of $T_xX$, and set
$$C\mathbin{\cdot_{\rm cur}}D:=(-1)^9\sum_{x\in C\cap D}\sigma_x(C,D)=-\sum_{x\in C\cap D}\sigma_x(C,D),$$
the current-compatible convention of [[def-r2-current-compatible-intersection-number]]. There exists a closed smooth three-form $\eta_D$ on $X$ such that, for every closed smooth three-form $\omega$,
$$\int_X\omega\wedge\eta_D=\int_D\omega,$$
and
$$\langle\delta_C,\eta_D\rangle=\int_C\eta_D=C\mathbin{\cdot_{\rm cur}}D,$$
where $\delta_C(\eta)=\int_C\eta$ is the source current of [[def-r2-compact-de-rham-current-of-a-source-cycle]].

## Facts & Assumptions

**Given:** Full AC and the oriented compact smooth manifolds $X,C,D$ with the stated transversality.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $\langle\delta_C,\eta\rangle=\int_C\eta$ and associates to a smooth three-form $\alpha$ the current $T_\alpha(\eta)=\int_X\alpha\wedge\eta$.

[F2] [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]], applied with its allowed coefficient ring $\mathbb Z$, gives the integral absolute normal Thom class $\tau_{D,\mathbb Z}$ with $\tau_{D,\mathbb Z}\cap[X]_{\mathbb Z}=-(i_D)_*[D]_{\mathbb Z}$ under the tangent-first normal orientation convention. Its real coefficient image is constructed below, not asserted as an additional coefficient case of that supplier.

[F3] [[thm-de-rham-theorem]] identifies real de Rham cohomology with real singular cohomology by integration on smooth singular simplices and preserves products.

[F4] [[prop-cap-product-naturality-and-projection-formula]] gives $(a\smile b)\cap[X]=b\cap(a\cap[X])$ for the stated front-evaluation/back-retention cap convention.

[F5] [[lem-de-rham-top-integral-is-fundamental-class-evaluation]] identifies integration of a closed six-form with its de Rham class evaluated on $[X]$.

[F6] [[def-de-rham-integration-cochain-map]] and [[def-kronecker-evaluation-pairing]] identify integration of a closed form over a smooth cycle with the Kronecker evaluation of its de Rham class.

[F7] [[def-r2-current-compatible-intersection-number]] fixes the local sign $(-1)^9\sigma_x(C,D)$; [[lem-r2-source-current-pairs-with-transverse-dual-cycle]] proves that this is the sign of the regularized source-current pairing. That regularized pairing is distinct from the functional evaluation $\langle\delta_C,\eta_D\rangle$, whose sign is calculated below. [[thm-smooth-inverse-function-theorem-on-manifolds]] and [[thm-excision-for-singular-cohomology]] give local coordinates at each transverse intersection and the decomposition into local relative classes.

[F8] [[def-singular-cochain-complex-with-coefficients]] describes cochains as homomorphisms on finite integral singular chains, equivalently as linear maps on real chains. [[def-relative-cap-product]] and [[def-cap-duality-map-for-an-oriented-manifold]] give the front-evaluation/back-retention cap formula. [[def-fundamental-class-of-a-compact-oriented-manifold]] characterizes a fundamental class by its restrictions to all local orientation groups. The required coefficient-change compatibilities are proved on these formulas in step 1.1.

## Proof

**Given:** The geometry above, full AC, and the cap, Thom, de Rham, and current conventions in [F1]–[F8].

1.1 Use the canonical coefficient inclusion $\mathbb Z\to\mathbb R$ implicitly. On any singular pair $(Y,A)$, send a finite integral chain $\sum n_\sigma\sigma$ to the same finite real chain. An integral relative cochain $a$, vanishing on simplices in $A$, gives the real cochain $a_{\mathbb R}(\sum r_\sigma\sigma)=\sum r_\sigma a(\sigma)$. Face boundaries have integer coefficients, so these maps commute with boundary and coboundary and carry boundaries and coboundaries to boundaries and coboundaries. They therefore give coefficient maps on absolute and relative (co)homology. Pullback, pushforward, and pair inclusions commute with them because they use the same simplex maps and faces; the excision isomorphisms, induced by those inclusions, consequently commute as well. The cap formula on a simplex is $a\cap\sigma=a(\sigma|[v_0,\ldots,v_p])\,\sigma|[v_p,\ldots,v_n]$. Extending its finite coefficient calculation gives $j_*(a\cap c)=a_{\mathbb R}\cap j_*c$; the front/back cup formula has the same coefficient compatibility. Each positive integral local orientation generator maps to the positive real generator, and a normalized integral normal-disk Thom cocycle still evaluates to $1$ on that disk. The local characterization in F8 therefore identifies $j_*[X]_{\mathbb Z}=[X]_{\mathbb R}$ and $j_*[D]_{\mathbb Z}=[D]_{\mathbb R}$. Finally, cochain evaluation on every finite integral cycle is the same numerical value regarded in $\mathbb R$. These explicit formulas require no assertion that tensoring commutes with cohomology. [F4, F8, given, construct, algebra]

2.1 Let $\tau_D$ be the real coefficient image of the integral absolute class $\tau_{D,\mathbb Z}$ in F2. Apply step 1.1 to its integral cap identity to get $\tau_D\cap[X]_{\mathbb R}=-(i_D)_*[D]_{\mathbb R}$. Hence $u_D:=-\tau_D$ satisfies $u_D\cap[X]_{\mathbb R}=(i_D)_*[D]_{\mathbb R}$. By F3 choose a closed smooth three-form $\theta_D$ whose real de Rham class maps to $u_D$, and set $\eta_D:=-\theta_D$. It is closed. All subsequent cap classes use real coefficients, with inclusion pushforward suppressed in the notation $[D]$. [F2, F3, F8, step 1.1, given, choose]

3.1 For a closed three-form $\omega$, the cap formula [F4] gives $(u_D\smile[\omega])\cap[X]=[\omega]\cap[D]$. Evaluating the resulting zero-cycle by the augmentation is the Kronecker pairing of $[\omega]$ with $[D]$. Thus [F3], [F5], and [F6] give $\int_X\theta_D\wedge\omega=\int_D\omega$. Since both degrees are three, $\omega\wedge\eta_D=-\omega\wedge\theta_D=\theta_D\wedge\omega$, so $\int_X\omega\wedge\eta_D=\int_D\omega$. [F3, F4, F5, F6, step 2.1, algebra]

4.1 The intersection set is finite by compactness and transversality. Excision identifies the restriction of the integral normal Thom class to $C$ with the direct sum of its local classes in $H^3(B^3,B^3\setminus\{0\};\mathbb Z)$, one for each intersection point. The normal projection $C\to\nu_D$ is a local diffeomorphism at each such point by the inverse function theorem. With $\nu_D$ oriented in tangent-first order, its local degree is $-\sigma_x(C,D)$: moving the positive three-frame of $T_xC$ past the positive three-frame of $T_xD$ changes the ambient orientation by $(-1)^9$. The fiber-normal Thom class has value one on the positive normal disk, so its pullback contributes exactly that local degree. Summing the finitely many local evaluations gives $\langle\tau_{D,\mathbb Z},[C]_{\mathbb Z}\rangle=-\sum_x\sigma_x(C,D)$. The evaluation compatibility in step 1.1 gives the same equality for its real image $\tau_D$ and $[C]_{\mathbb R}$. Hence $u_D=-\tau_D$ evaluates as $\sum_x\sigma_x(C,D)$; integration of its representative $\theta_D$ over $C$ gives this Kronecker evaluation by [F3] and [F6]. Therefore $\int_C\eta_D=-\sum_x\sigma_x(C,D)=C\mathbin{\cdot_{\rm cur}}D$ by [F1] and [F7]. Empty intersection gives zero on both sides. [F1, F2, F3, F6, F7, F8, step 1.1, step 2.1, algebra] ∎
