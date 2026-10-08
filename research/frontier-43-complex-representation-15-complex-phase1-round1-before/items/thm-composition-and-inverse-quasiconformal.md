---
id: thm-composition-and-inverse-quasiconformal
kind: theorem
title: Composition and inversion of quasiconformal maps and their Beltrami coefficients
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps: [def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, thm-geometric-and-analytic-quasiconformality-equivalent, lem-inverse-of-a-quasiconformal-map-is-quasiconformal, def-wirtinger-derivatives, thm-wirtinger-chain-rule-for-real-differentiable-maps, thm-chain-rule-for-total-derivatives, lem-analytic-quasiconformality-implies-modulus-distortion, lem-rho-length-and-extremal-length-are-well-defined, def-countable-choice, def-axiom-of-choice]
axiom_use: The Axiom of Choice is inherited from the ACL/Sobolev definitions and the almost-everywhere chain-rule interfaces; Countable Choice is included for their measure interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, printed p. 188, Proposition 12.15 for inverse and composition dilatations; §11.1 for the Beltrami chain formulas."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–51: composition of real-linear dilatations and the Beltrami composition identity."
verification:
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §12.5, printed p. 188, Proposition 12.15; §11.1 for the composition and inverse coefficient identities.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §1, printed pp. 49–51, for the linear dilatation product bound and the general Beltrami chain identity.

## Statement

Assume the Axiom of Choice. Let $\Omega\xrightarrow{\,g\,}\Omega''\xrightarrow{\,f\,}\Omega'$ be analytically quasiconformal homeomorphisms, with $g$ $K_1$-quasiconformal and $f$ $K_2$-quasiconformal ([[def-acl-sobolev-quasiconformal-homeomorphism]]).

(i) **Composition.** The composite $f\circ g$ is analytically $K_1K_2$-quasiconformal, with $K_{f\circ g}\le K_1K_2$, and almost everywhere
$$\mu_{f\circ g}(z)= \frac{g_{\bar z}(z)+\mu_f(g(z))\,\overline{g_z(z)}} {g_z(z)+\mu_f(g(z))\,\overline{g_{\bar z}(z)}}.$$

(ii) **Inverse.** The inverse $f^{-1}$ is $K_2$-quasiconformal, $K_{f^{-1}}=K_f$, and
$$\mu_{f^{-1}}(f(z))=-\mu_f(z)\frac{f_z(z)}{\overline{f_z(z)}}\quad\text{for almost every }z.$$

Consequently quasiconformal homeomorphisms are closed under inverses and composition, and the $1$-quasiconformal self-maps of a domain form a group.

## Facts & Assumptions

**Given:** The Axiom of Choice, two analytic quasiconformal homeomorphisms as in the Statement, and their Beltrami representatives.

[F1] Analytic and geometric quasiconformality agree with the same least constant; geometric quasiconformality is closed under composition because the two modulus inequalities multiply, and orientation signs multiply ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[def-geometric-quasiconformal-homeomorphism]]).

[F2] The inverse of an analytic $K$-quasiconformal map is analytic $K$-quasiconformal with the same maximal dilatation; the proof gives the a.e. inverse Beltrami formula ([[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]]).

[F3] The real chain rule holds at common differentiability points. A real-linear map $z\mapsto az+b\bar z$ has Wirtinger coefficients $a,b$; composition and inversion are calculated by the two Wirtinger equations ([[thm-chain-rule-for-total-derivatives]], [[thm-wirtinger-chain-rule-for-real-differentiable-maps]], [[def-wirtinger-derivatives]]). The Beltrami coefficient and least-dilatation conventions are those of [[def-beltrami-coefficient-and-maximal-dilatation]].

[F4] Analytic quasiconformal homeomorphisms and their inverses map area-null Borel sets to null sets by the area clause of [[lem-analytic-quasiconformality-implies-modulus-distortion]]. This allows the exceptional differentiability sets of the factors to be pulled back when applying the a.e. chain rule. The source proof of that area clause remains an open evidence obligation recorded in the pair report.

[F5] For $0\le a,b<1$ and $|\omega|=1$,
$$\left|\frac{a_0+\omega b_0}{1+\overline{a_0}\omega b_0}\right| \le\frac{|a_0|+|b_0|}{1+|a_0||b_0|}\quad (a_0,b_0\in\mathbb C,\ |a_0|=a,\ |b_0|=b).$$
Indeed, the squared ratio is $(a^2+b^2+2ab\cos\theta)/(1+a^2b^2+2ab\cos\theta)$, increasing in $\cos\theta$; its maximum is at $\cos\theta=1$. Moreover, if $t=(a+b)/(1+ab)$, then $(1+t)/(1-t)=((1+a)/(1-a))((1+b)/(1-b))$.

## Proof

**Proof technique:** compose the geometric modulus inequalities, then compute the almost-everywhere Beltrami chain rule.

1.1 By [F1], $f$ and $g$ are geometrically quasiconformal with constants $K_2$ and $K_1$. Applying their two-sided modulus bounds successively to any quadrilateral gives the two-sided bound with constant $K_1K_2$ for $f\circ g$; the orientation signs multiply, so the composite is geometrically $K_1K_2$-quasiconformal. The equivalence in [F1] makes it analytically $K_1K_2$-quasiconformal. [F1, given, algebra]

2.1 By [F2], $g=f^{-1}$ in the inverse case has the same analytic maximal dilatation and the stated inverse coefficient identity. For the composition formula, take the full-measure set where $g$ is differentiable, $f$ is differentiable at $g(z)$, and the weak derivatives agree with the classical derivatives. The exceptional set for $f$ pulls back to a null set by [F4]. The composite is analytic by step 1.1, so its weak and classical derivatives also agree almost everywhere. [F2, F3, F4, step 1.1, given]

3.1 At each point of the common set, the real chain rule gives $\displaystyle \begin{aligned} (f\circ g)_z&=f_w(g)g_z+f_{\bar w}(g)\overline{g_{\bar z}},\\ (f\circ g)_{\bar z}&=f_w(g)g_{\bar z}+f_{\bar w}(g)\overline{g_z}. \end{aligned}$ Writing $\mu_f(g)=f_{\bar w}(g)/f_w(g)$ and dividing the second equation by the first yields the displayed formula in (i); the denominator is nonzero almost everywhere because each analytic quasiconformal homeomorphism has positive Jacobian almost everywhere. Put $\nu=\mu_g(z)$, $\mu=\mu_f(g(z))$, and $\omega=\overline{g_z}/g_z$, so $|\omega|=1$. The composition formula becomes $\displaystyle \mu_{f\circ g}=\frac{\nu+\omega\mu}{1+\omega\overline\nu\mu}.$ By [F5], $|\mu_{f\circ g}|\le(k_1+k_2)/(1+k_1k_2)$, where $k_j=(K_j-1)/(K_j+1)$. The identity in [F5] converts this to $K_{f\circ g}\le K_1K_2$, consistent with step 1.1. Part (ii) and the group assertion follow from [F2] and the identity map's coefficient $0$.[F2, F3, F4, F5, step 1.1, step 2.1, given] ∎
