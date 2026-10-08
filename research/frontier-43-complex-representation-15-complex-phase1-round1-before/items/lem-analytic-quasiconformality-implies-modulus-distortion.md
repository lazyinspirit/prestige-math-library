---
id: lem-analytic-quasiconformality-implies-modulus-distortion
kind: lemma
title: An analytically quasiconformal homeomorphism distorts quadrilateral moduli by at most K
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 5
deps: [def-extremal-length-and-curve-family-modulus, lem-rho-length-and-extremal-length-are-well-defined, thm-extremal-length-conformal-invariance-and-monotonicity, thm-modulus-rectangle-and-annulus, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-countable-choice, def-geometric-quasiconformal-homeomorphism, thm-round-annulus-conformal-parameter-is-complete-invariant, rem-riemann-sphere-one-point-compactification, def-wirtinger-derivatives, def-borel-sigma-algebra, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-borel-sets-are-lebesgue-measurable, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, lem-riemann-maps-of-jordan-domains-extend-homeomorphically, thm-riemann-mapping-theorem, def-complex-domain, def-complex-annulus, thm-acl-characterisation-of-w-one-p]
axiom_use: The Axiom of Choice is required by the analytic ACL/Sobolev interface, the Jordan-domain conformal rectification, and the source area argument; Countable Choice is included for completed-product and extremal-length measure interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1 and §2, printed pp. 50–53: the length–area method, analytic and geometric definitions, and the quadrilateral estimates; Ch. 3 §4, printed pp. 94–96, Theorem 4.2 and Lemma 4.4 for differentiability and the Jacobian area inequality. The proof of Theorem 4.2 has an unresolved maximum argument; this item does not certify that source step."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §11.4, Proposition 11.14, printed pp. 181–182, for the Jacobian-area inequalities; §11.5, Proposition 11.18, printed p. 183, for total differentiability (the text refers to Project 11.19 for its proof); §12.1, Lemma 12.1 and Proposition 12.3, printed pp. 183–184, for the smooth-foliation length–area argument and annulus estimate; Ch. 1 §6.3.1, printed pp. 121–122, Proposition 6.6 and Exercise 6.8 for the annular foliations."
    - title: "F. W. Gehring and O. Lehto, On the total differentiability of functions of a complex variable"
      locator: "Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9; the original proof needed for the differentiability/area step has not yet been recovered in full."
verification:
  precheck: pass
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §§1–2, printed pp. 50–53, for the length–area method and quadrilateral distortion; Ch. 3 §4, printed pp. 94–96, for the differentiability and Jacobian-area estimates.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §11.4, printed pp. 181–182, Proposition 11.14, for the area formula; §11.5, printed p. 183, Proposition 11.18, for total differentiability; §12.1, printed pp. 183–184, Lemma 12.1 and Proposition 12.3; Ch. 1 §6.3.1, printed pp. 121–122, Proposition 6.6 and Exercise 6.8. The full cited passages were reread. Proposition 11.18 is stated but its proof is deferred to Project 11.19, so it does not close the differentiability obligation.
- F. W. Gehring and O. Lehto, *On the total differentiability of functions of a complex variable*, Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9. The required original argument has not yet been recovered. Bishop's alternate proof contains an unverified maximum step, so this source obligation remains open.

## Statement

Assume the Axiom of Choice. Let $f:\Omega\to\Omega'$ be a homeomorphism of complex domains which is $K$-quasiconformal in the analytic sense, with $K\ge1$, and let $\lambda,\mu$ denote the extremal length and reciprocal curve-family modulus of [[def-extremal-length-and-curve-family-modulus]].

(i) **Quadrilaterals.** Let $Q$ be a quadrilateral with $\overline Q\subset\Omega$ and marked opposite sides $E_0,E_1$, as in [[def-geometric-quasiconformal-homeomorphism]], and let $\Gamma(Q;E_0,E_1)$ consist of paths in $Q$ joining those sides. Then $f\Gamma(Q;E_0,E_1)=\Gamma(f(Q);f(E_0),f(E_1))$ and
$$K^{-1}\mu\bigl(\Gamma(Q;E_0,E_1)\bigr)\le \mu\bigl(\Gamma(f(Q);f(E_0),f(E_1))\bigr)\le K\mu\bigl(\Gamma(Q;E_0,E_1)\bigr),$$
equivalently
$$K^{-1}\lambda\bigl(\Gamma(Q;E_0,E_1)\bigr)\le \lambda\bigl(\Gamma(f(Q);f(E_0),f(E_1))\bigr)\le K\lambda\bigl(\Gamma(Q;E_0,E_1)\bigr).$$
The same inequalities hold with the other pair of opposite marked sides.

(ii) **Annuli.** Let $\widetilde A\subset\Omega$ be a doubly connected domain, meaning that $\widehat{\mathbb C}\setminus\widetilde A$ has exactly two connected components ([[rem-riemann-sphere-one-point-compactification]]), and put $A=f(\widetilde A)$. Let $\Gamma(\widetilde A)$ and $\Gamma(A)$ be the path families joining the two annular ends. Then
$$K^{-1}\mu(\Gamma(\widetilde A))\le\mu(\Gamma(A))\le K\mu(\Gamma(\widetilde A)),\qquad K^{-1}\lambda(\Gamma(\widetilde A))\le\lambda(\Gamma(A))\le K\lambda(\Gamma(\widetilde A)).$$
For a round annulus $A(r,R)$ the connecting-family extremal length is the conformal parameter $(2\pi)^{-1}\log(R/r)$ and the reciprocal modulus is $2\pi/\log(R/r)$, by [[thm-modulus-rectangle-and-annulus]] and [[thm-round-annulus-conformal-parameter-is-complete-invariant]].

(iii) **Area and null sets.** For every relatively compact Borel set $E\subset\Omega$,
$$\operatorname{area}(f(E))=\int_EJ_f\,dA.$$
In particular, $f^{-1}$ maps Lebesgue-null Borel subsets of $\Omega'$ to null subsets of $\Omega$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the analytic $K$-quasiconformality hypothesis, a quadrilateral or doubly connected domain, and the path-family conventions in the Statement.

[F1] For almost every point of classical differentiability, the real operator norm and Jacobian are
$$\|Df\|_{\mathrm{op}}=|f_z|+|f_{\bar z}|,\qquad J_f=|f_z|^2-|f_{\bar z}|^2.$$
The analytic Beltrami inequality gives $|f_{\bar z}|\le k|f_z|$ with $k=(K-1)/(K+1)$, so $\|Df\|_{\mathrm{op}}^2\le KJ_f$ almost everywhere ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[def-wirtinger-derivatives]]).

[F2] The planar Jacobian area inequality for an injective analytic quasiconformal homeomorphism is
$$\int_E J_f\,dA\le \operatorname{area}(f(E))$$
for relatively compact Borel $E$. Lyubich, Proposition 11.14, printed pp. 181–182, proves this direction by decomposing the image measure $E\mapsto\operatorname{area}(f(E))$ into absolutely continuous and singular parts and identifying its density with $J_f$ at points of total differentiability. That identification depends on Proposition 11.18, whose text on p. 183 defers its proof to Project 11.19. Bishop, Lemma 4.4, printed pp. 95–96, gives the same inequality by differentiability, Lebesgue differentiation and a Vitali covering; its stated differentiability input is the Gehring–Lehto theorem, and Bishop Theorem 4.2's attempted proof has the unsupported maximum step recorded in the report. The associated weighted inequality is
$$\int_\Omega (g\circ f)J_f\,dA\le\int_{\Omega'}g\,dA$$
for every nonnegative Borel $g$, by applying the set inequality to $f^{-1}(B)$ on a compact exhaustion, then using simple approximation and monotone convergence.

[F6] The reverse area inequality and the null-set conclusion in (iii) are asserted in Lyubich, Proposition 11.14, Ch. 2 §11.4, printed pp. 181–182. Its proof approximates the map in the Sobolev norm by smooth maps and invokes Sard and the degree/area formula on piecewise-smooth subdomains. The printed calculation writes $\int_DJ_{h_n}\ge\int_{R_n}J_{h_n}=\int_{V_n}\operatorname{card}(h_n^{-1}(\zeta))\,dA(\zeta)$ for smooth approximants $h_n$. The signed change-of-variables formula weights each regular preimage by $\operatorname{sgn}J_{h_n}$; neither nonnegative Jacobians of the approximants nor the unsigned-count identity is established. This reverse passage therefore remains open. The source's displayed Jacobian sign before (11.8) is also a typo; the correct sign is $J_f=|f_z|^2-|f_{\bar z}|^2$.

[F3] On a full-measure Borel set $X$ where $f$ is classically differentiable and its classical derivative agrees with its weak derivative, a target Borel density $\widetilde\rho$ pulls back to $\rho(z)=\widetilde\rho(f(z))\|Df(z)\|_{\mathrm{op}}$; set $\rho=+\infty$ off $X$. Then [F1], [F2], and change of variables give $A(\rho)\le K A(\widetilde\rho)$.

[F4] For a smooth foliation, ACL holds along almost every leaf by the Sobolev ACL theorem and Fubini. In a rectangular foliation by horizontal segments of width $w$, if the exceptional parameter set is null, cover it by an open set $U$ of arbitrarily small length and use $\eta=w^{-1}\mathbf1_{(0,w)\times U}$; each exceptional leaf has $\eta$-length at least $1$, while $A(\eta)=|U|/w$. Hence the exceptional family has zero modulus. If $\mu(Z)=0$ for a family $Z$, its width-admissible metrics have arbitrarily small area by the reciprocal extremal-length theorem [[thm-extremal-length-conformal-invariance-and-monotonicity]]. For any density $\sigma$ with $0<A(\sigma)<\infty$ and $L=\ell_\sigma(\Gamma)>0$, choose such an admissible $\eta$ for $Z$ with area tending to zero and replace $\sigma$ by $\sigma+L\eta$. Its family infimum on $\Gamma\cup Z$ is at least $L$, while the square root of its area is at most $\sqrt{A(\sigma)}+L\sqrt{A(\eta)}$. Passing to the limit shows $\lambda(\Gamma\cup Z)\ge\lambda(\Gamma)$; inclusion gives the reverse inequality. The case $L=+\infty$ follows by replacing $L$ with arbitrary thresholds, and $L=0$ contributes quotient zero. The conformal and polar pullbacks of the thin-strip argument give the same conclusion for the Jordan and annular foliations below ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[thm-acl-characterisation-of-w-one-p]], [[lem-rho-length-and-extremal-length-are-well-defined]], [[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F5] On a good leaf $\gamma$, absolute continuity and the chain rule give
$$\ell_{\widetilde\rho}(f\circ\gamma)\le \ell_\rho(\gamma).$$
For quadrilaterals, conformal rectification to a rectangle identifies the extremal length of the joining foliation with that of the full joining family; the opposite-side values are reciprocal. For a ring domain, the radial connecting foliation and circular separating foliation have reciprocal extremal lengths. The rectangle and round-annulus calculations are in [[thm-modulus-rectangle-and-annulus]], and the round-annulus conformal-parameter convention is fixed in [[thm-round-annulus-conformal-parameter-is-complete-invariant]]; the smooth-foliation and ring-domain statements are Lyubich, Proposition 6.6, Exercise 6.8 and Proposition 12.3.

[F7] The Jordan-domain boundary extension used in the conformal rectification is the claim of [[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]. This supplier is currently a draft item on the sibling batch-14 page; step 2.1 uses it provisionally, so this item remains escalated until the supplier and this exact use are verified.

## Proof

**Proof technique:** pull back target metrics through the differential, control area by the Jacobian, and compare foliations with the full curve families.

1.1 Fix a smooth foliation family $\Gamma$ in the source and a target Borel density $\widetilde\rho$ with $0<A(\widetilde\rho)<\infty$. Define $\rho$ as in [F3]. For almost every leaf $\gamma\in\Gamma$, [F4] makes $f\circ\gamma$ absolutely continuous and [F5] gives $\ell_{\widetilde\rho}(f\circ\gamma)\le\ell_\rho(\gamma)$. Thus $\ell_{\widetilde\rho}(f\Gamma)\le\ell_\rho(\Gamma)$ after removing the zero-modulus exceptional subfamily. By [F1]–[F3], $A(\rho)\le K A(\widetilde\rho)$. If $A(\rho)>0$, the two length and area bounds imply that the target quotient is at most $K$ times the source quotient. If $A(\rho)=0$ and the target length infimum is positive, then $\lambda(\Gamma)=+\infty$ by the area-zero perturbation argument in [[thm-extremal-length-conformal-invariance-and-monotonicity]]; if that infimum is zero, the target quotient is zero. Thus in all cases, taking the supremum over target metrics yields $\displaystyle \lambda(f\Gamma)\le K\lambda(\Gamma).$ The area estimate in this step uses the Gehring–Lehto differentiability theorem through [F2]; the cited source proof remains an open evidence obligation recorded in the authoring report. [F1, F2, F3, F4, F5, given]

2.1 Rectify $Q$ conformally to a rectangle, using the homeomorphic boundary extension of [F7] for Jordan domains. Its straight joining foliation has the same extremal length as the full joining family by [F5]. The image foliation is a subfamily of all paths joining the marked sides of $f(Q)$, so family-inclusion monotonicity and step 1.1 give $\displaystyle \lambda(\Gamma(f(Q);f(E_0),f(E_1)))\le K\lambda(\Gamma(Q;E_0,E_1)).$ Apply the same inequality to the transverse foliations and use the reciprocal relation in [F5] in both quadrilaterals; this yields the reverse bound $\lambda(\Gamma(f(Q);f(E_0),f(E_1)))\ge K^{-1}\lambda(\Gamma(Q;E_0,E_1))$. Taking reciprocals proves (i). [F4, F5, F7, step 1.1, given]

2.2 For the annular connecting family, apply step 1.1 to the radial foliation; the target's full connecting family contains the image foliation, so its extremal length is at most $K$ times the source value. Apply step 1.1 again to the circular separating foliation. Its image lies in one of the two generator-sign families; the two signs have equal extremal length, and the annular duality in [F5] identifies each separating value with the reciprocal connecting value. Inverting this second inequality gives the lower connecting-family bound. Taking reciprocals gives $\mu(\Gamma(A))\le K\mu(\Gamma(\widetilde A))$. For finite round annuli the numerical values in the Statement follow from the displayed formula of [F5].[F1, F5, step 1.1, given]

3.1 The equality $\operatorname{area}(f(E))=\int_EJ_f$ and the null-set property in (iii) are the reverse half of the cited area formula: after identifying the target density, approximation by smooth maps and the degree/area identity reverse the inequality for piecewise-smooth subdomains, then exhaustion gives the Borel-set formula. Since $f^{-1}$ is absolutely continuous with respect to area, a null image $f(E)$ forces $E$ null. The exact approximation and degree passage remains the source obligation recorded in the report, so this item is not certified complete. [F2, F6, given] ∎
