---
id: lem-double-plus-simple-cubic-rational-surface-branch-terminates
kind: lemma
title: The double-plus-simple cubic surface branch terminates
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 16
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc
- lem-nonsquare-tangent-conic-rational-surface-blowups-terminate
- lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate
- lem-rational-singular-point-blowup-canonical-pullback-surjective
- lem-rational-surface-local-rings-propagate-by-point-sequence-spreading
- lem-regular-local-quotient-by-parameter-is-regular
- lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic
- lem-surface-completion-base-change-preserves-closed-fibre-local-completions
- lem-surface-regular-fibres-preserve-normality
- thm-blowup-base-change-flat
- thm-completion-preserves-regular-local-rings
- thm-one-dimensional-regular-local-rings-are-dvrs
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Joseph Lipman, Rational singularities (1969), §24, pp.264–268, relations (5)/(5′): full text read; omitted
      chart details proved locally'
    url: https://www.math.purdue.edu/~jlipman/papers-older/%5b1969%5d%20Rational%20singularities%20with%20applications%20to%20algebraic%20surfaces%20and%20unique%20factorization.pdf
  - title: Joseph Lipman, Desingularization of two-dimensional schemes (1978), pp.171–174, (1.29) and fixed-coordinate
      termination
    url: https://www.math.purdue.edu/~jlipman/papers-older/%5b1978%5d%20Desingularization%20of%20two-dimensional%20schemes.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and DC. Let $A$ be a rational Gorenstein normal local surface in the permitted canonical-module setting, with normal completion and generators $\mathfrak m=(x,y,z)$. If $z^2+a xy^2\in z\mathfrak m^2+(x,y)^4$ for a unit $a$, all its singular point-blowup branches terminate. A continuing square branch has unchanged residue field and the same $x$ defining every successive exceptional divisor.

## Facts & Assumptions

**Given:** A rational Gorenstein normal local surface $A$ in the permitted canonical-module setting with normal completion and generators $\mathfrak m=(x,y,z)$ such that $z^2+axy^2\in z\mathfrak m^2+(x,y)^4$ for a unit $a$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-rational-singular-point-blowup-canonical-pullback-surjective.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted regular-base dualizing setting, let $f:X\to\operatorname{Spec}A$ be its ordinary point blowup, $E$ its exceptional divisor and $I=O_X(1)$. Then $H^1(X,\omega_X\otimes I^n)=0$ for $n\ge0$ and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. ([[lem-rational-singular-point-blowup-canonical-pullback-surjective]])

[F4] *lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.* Assume AC and DC. If a permitted normal local surface domain $A$ is rational and $A\subset B$ is a normal two-dimensional local domain with the same fraction field, essentially of finite type over $A$, then $B$ is rational. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F5] *lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic.* Assume AC and DC. For a rational Gorenstein normal local surface singularity with square tangent conic, choose $\mathfrak m=(x_1,x_2,z)$ and a relation $z^2=\sum a_{ijk}x_ix_jx_k$. There is a nonzero homogeneous cubic $H\in\kappa[X_1,X_2]$ whose zero scheme on the reduced exceptional line contains all singular successors. ([[lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic]])

[F6] *lem-nonsquare-tangent-conic-rational-surface-blowups-terminate.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted class with invertible canonical module and normal completion, if its tangent-conic quadratic is not a scalar times a square, repeatedly blowing up its singular points terminates in a regular model. ([[lem-nonsquare-tangent-conic-rational-surface-blowups-terminate]])

[F7] *lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc.* Assume the Axiom of Choice and the Axiom of Dependent Choice ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let $(B,\mathfrak m,\kappa)$ be an equicharacteristic Noetherian local domain, and let $(B_n,\mathfrak m_n)$, $n\ge0$, be the local rings at a successive infinite chain of point blowups, $B_0=B$, all with residue field $\kappa$: for every $n$ the ring $B_{n+1}$ is t ([[lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc]])

[F8] *lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate.* Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two with a surjection onto a complete DVR $V$ inducing its residue-field identification. The successive point blowups along this nonsingular arc become regular at the arc centre after finitely many steps. ([[lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate]])

[F9] *lem-surface-regular-fibres-preserve-normality.* Assume AC and DC. A flat map of Noetherian rings with regular fibres carries normality of the base to normality of the target. Consequently a normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, which is a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F10] *thm-blowup-base-change-flat.* Assume the Axiom of Choice as inherited from the relative Proj construction. Let $g\colon X'\to X$ be a flat morphism of schemes and $\mathcal I$ a quasi-coherent ideal sheaf of finite type on $X$. ([[thm-blowup-base-change-flat]])

[F11] *lem-surface-completion-base-change-preserves-closed-fibre-local-completions.* Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring, $\widehat A$ its maximal-adic completion, and $X$ a scheme locally of finite type over $A$. Put $Y=X\times_{\operatorname{Spec}A}\operatorname{Spec}\widehat A$. The closed fibres of $X$ and $Y$ are canonically isomorphic. ([[lem-surface-completion-base-change-preserves-closed-fibre-local-completions]])

[F12] *thm-completion-preserves-regular-local-rings.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular. ([[thm-completion-preserves-regular-local-rings]])

## Proof

1.1 Ordinary rational point blowups are normal, rationality propagates to the closed local rings, and canonical pullback from a local trivialization is a surjection from the structure sheaf onto a torsion-free rank-one module, hence an isomorphism; so every singular successor is again a rational Gorenstein point in the same setting, and the normal completion hypothesis persists by the regular-fibre normality result. [F3, F4, F9, given]

2.1 Absorbing the terms $z^2\mathfrak m$ into the unit coefficient and dividing by it turns the hypothesis into the exact relation $z^2+axy^2+bx^2z+cxyz+dy^2z+ex^4+fx^3y+gx^2y^2+hxy^3+iy^4=0$; the reduced controlling cubic is $\bar aXY^2$, whose simple zero $X=0$ has a nonsquare successor resolved by the nonsquare lemma, while its only possible continuing square successor is the $\kappa$-rational point $u=y/x=v=z/x=0$ of the $x$-chart. [F5, given, step 1.1]

3.1 In the $x$-chart put $u=y/x$, $v=z/x$; dividing the exact relation by $x^2$ gives $v^2+axu^2+bxv+cxuv+dxu^2v+ex^2+fx^2u+gx^2u^2+hx^2u^3+ix^2u^4=0$, whose successor quadratic is $P(X,V)=V^2+\bar bXV+\bar eX^2$; if $P$ is nonsquare the nonsquare-conic termination lemma applies to that successor. [F6, step 2.1]

4.1 If $P$ is a square, choose $\delta\in A$ lifting its residue square coefficient with $\bar b=2\bar\delta$ and $\bar e=\bar\delta^2$ (a characterization valid in every characteristic, with no division by two), put $w=v+\delta x$, and set $b'=b-2\delta\in\mathfrak m$, $e'=e-b\delta+\delta^2\in\mathfrak m$, so $b'=xB$ and $e'=xE$ on the chart; substituting gives $w^2+axu^2+cxuw+dxu^2w+x^2[Bw+(f-c\delta)u+(g-d\delta)u^2+hu^3+iu^4]+x^3E=0$, whose cubic modulo $w$ is $C(X,U)=X(\bar aU^2+\rho XU+\sigma X^2)$ with $\bar a\ne0$, so $X=0$ is a simple closed zero and there is at most one multiple closed zero, $\kappa$-rational at $(X:U)=(1:\varepsilon)$ characterized by $\bar a\varepsilon^2+\rho\varepsilon+\sigma=0$ and $2\bar a\varepsilon+\rho=0$. [F5, step 3.1]

5.1 Replacing $u$ by $u-\varepsilon x$ leaves $x$ unchanged, keeps the tangent square $w^2$, changes the cubic restriction to $\bar aXu^2$, and puts all remaining cubic terms in $w(\mathfrak m')^2$ and all higher terms in $w(\mathfrak m')^2+(x,u)^4$; hence the successor again satisfies the invariant $z^2+axy^2\in z\mathfrak m^2+(x,y)^4$ with unit coefficient, and every continuing square step uses the $x$-chart, has the same residue field $\kappa$, and has the same element $x$ generating the pullback of its centre ideal. [F4, step 4.1]

6.1 If the continuing branch were infinite, the fixed-coordinate helper would produce a nonsingular formal arc, that is a surjection from the completion of $A$ onto a complete discrete valuation ring with uniformizer the image of $x$ and the given centres; normality of the completion makes the height-one kernel regular, so the formal-arc termination helper makes the completed point blowups regular at the arc centre after finitely many steps. [F7, F8, F9, step 5.1]

7.1 Blowup flat base change identifies the completed blowups with the blowups of the completion, and equality of the closed-fibre local completions together with preservation and reflection of regularity by completion transfers that regularity back to the original chain, contradicting an infinite singular branch; all simple-root side branches terminate by the nonsquare lemma, so all singular point-blowup branches of this class terminate. [F6, F10, F11, F12, step 6.1]

8.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers; the exact coefficient expansions and the chart normalization above involve no division by two or three. [F1, F2, step 7.1] ∎

## Remarks

- The invariant (S) is broader than the earlier restrictive persistence class: terms like $x^2z$ and $y^2z$ are retained throughout.
- The same element $x$ defines every centre in a continuing square branch, which is exactly what the fixed-coordinate arc helper needs.
