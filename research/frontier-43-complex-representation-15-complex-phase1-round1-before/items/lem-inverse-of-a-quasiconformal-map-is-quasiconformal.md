---
id: lem-inverse-of-a-quasiconformal-map-is-quasiconformal
kind: lemma
title: The inverse of a quasiconformal map is quasiconformal with the same dilatation
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 7
deps: [def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, def-geometric-quasiconformal-homeomorphism, lem-analytic-quasiconformality-implies-modulus-distortion, lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality, def-wirtinger-derivatives, thm-wirtinger-chain-rule-for-real-differentiable-maps, thm-chain-rule-for-total-derivatives, thm-determinant-sign-detects-orientation-change, prop-relative-homology-is-functorial-for-maps-of-pairs, def-countable-choice, def-axiom-of-choice]
axiom_use: The Axiom of Choice is inherited from the ACL/Sobolev definition; Countable Choice is included for the completed-product ACL interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, printed p. 188, Proposition 12.15; §12.2–12.4 for the circular-dilatation and quasisymmetry route; §11.1 for the inverse Beltrami formula."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–51: the real-linear inverse dilatation and the Beltrami chain identity, specialized to $g=f^{-1}$."
verification:
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §12.5, printed p. 188, Proposition 12.15, for inverse and composition quasiconformality; §§12.2–12.4 provide the circular-dilatation/quasisymmetry route used to recover inverse regularity before differentiating the composition.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §1, printed pp. 49–51, for the real-linear inverse dilatation and the Beltrami chain identity.

## Statement

Assume the Axiom of Choice. Let $f:\Omega\to\Omega'$ be an analytically $K$-quasiconformal homeomorphism ([[def-acl-sobolev-quasiconformal-homeomorphism]]) with Beltrami coefficient $\mu_f$ ([[def-beltrami-coefficient-and-maximal-dilatation]]). Then $g=f^{-1}:\Omega'\to\Omega$ is analytically $K$-quasiconformal, $K_g=K_f$, and
$$\mu_g(f(z))=-\mu_f(z)\,\frac{f_z(z)}{\overline{f_z(z)}}\quad\text{for almost every }z\in\Omega.$$
Consequently $|\mu_g|\circ f=|\mu_f|$ almost everywhere, and $f$ is analytically quasiconformal exactly when $f^{-1}$ is, with the same maximal dilatation.

## Facts & Assumptions

**Given:** The Axiom of Choice, complex domains $\Omega,\Omega'$, and an analytic $K$-quasiconformal homeomorphism $f:\Omega\to\Omega'$.

[F1] The circular-dilatation lemma gives locally bounded circular dilatation for $f$ and local quasisymmetry on compact subsets. A quasisymmetric homeomorphism has a quasisymmetric inverse; applying the local ACL implication on relatively compact subdomains gives $g=f^{-1}\in W^{1,2}_{\mathrm{loc}}$ and classical differentiability almost everywhere ([[lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality]], [[def-acl-sobolev-quasiconformal-homeomorphism]]).

[F2] The area and null-set clause of [[lem-analytic-quasiconformality-implies-modulus-distortion]] gives $\operatorname{area}(f(E))=\int_EJ_f\,dA$ on relatively compact Borel sets, and $f^{-1}$ maps null Borel sets in $\Omega'$ to null sets in $\Omega$. These two properties allow almost-everywhere differentiability statements to be transported through $f$ in either direction. The supplier's source proof for its area clause is still open in the authoring report.

[F3] For a real-differentiable homeomorphism $f$ at $z$ with invertible derivative, differentiability of $g=f^{-1}$ at $f(z)$ gives $Dg(f(z))=(Df(z))^{-1}$. In Wirtinger form, the real chain rule is
$$\begin{aligned} (g\circ f)_z&=(g_w\circ f)f_z+(g_{\bar w}\circ f)\overline{f_{\bar z}},\\ (g\circ f)_{\bar z}&=(g_w\circ f)f_{\bar z}+(g_{\bar w}\circ f)\overline{f_z}, \end{aligned}$$
and the Wirtinger coefficients uniquely determine a real-linear map ([[thm-chain-rule-for-total-derivatives]], [[thm-wirtinger-chain-rule-for-real-differentiable-maps]], [[def-wirtinger-derivatives]]). The Beltrami coefficient and least-dilatation conventions are those of [[def-beltrami-coefficient-and-maximal-dilatation]].

[F4] The analytic inequality gives $J_f\ge0$ at almost every point where the classical derivative agrees with the weak derivative. If total differentiability holds almost everywhere, an orientation-reversing homeomorphism has $J_f\le0$ at those points by the determinant-sign orientation rule ([[def-geometric-quasiconformal-homeomorphism]], [[thm-determinant-sign-detects-orientation-change]]); then $J_f=0$ and the analytic inequality forces both weak derivatives to vanish almost everywhere. The ACL representative would be constant on almost every horizontal segment, contradicting injectivity. The cited total-differentiability input is the unresolved Gehring–Lehto interface recorded for item 10, so this orientation argument is provisional and item 13 remains escalated until it is verified.

## Proof

**Proof technique:** establish the orientation needed by the circular-dilatation criterion, recover inverse Sobolev regularity, and differentiate $g\circ f=\operatorname{id}$ on a common full-measure set.

1.1 Conditional on the total-differentiability input in [F4], the analytic inequality and the determinant-sign rule show that $f$ cannot reverse orientation: otherwise $J_f\le0$ while $J_f\ge(1-k^2)|f_z|^2\ge0$, so both weak derivatives vanish almost everywhere and ACL makes $f$ constant on almost every horizontal segment, contrary to injectivity. The orientation sign of $g=f^{-1}$ is the same as that of $f$ by functoriality of the local-homology isomorphism ([[prop-relative-homology-is-functorial-for-maps-of-pairs]]). By (i) of [F1], $f$ has globally bounded circular dilatation; on each relatively compact subdomain of $\Omega'$, inverse quasisymmetry gives a finite circular-dilatation bound for $g$. Since $g$ is orientation-preserving, (iii) of the circular-dilatation lemma now applies locally on a countable cover. Thus $g\in W^{1,2}_{\mathrm{loc}}$ and is classically differentiable almost everywhere, subject to the same open source obligation. [F1, F4, given]

1.2 The analytic inequality for $f$ gives $J_f=(1-|\mu_f|^2)|f_z|^2\ge0$ almost everywhere. Exhaust $\Omega$ by relatively compact Borel sets $K_j$. If $\{f_z=0\}$ had positive area, some $E_j=\{f_z=0\}\cap K_j$ would have positive area; then $J_f=0$ on $E_j$ and [F2] would make $f(E_j)$ null. The null-set property of $f^{-1}$ would force $E_j$ to be null, a contradiction. Thus $f_z\ne0$ almost everywhere. The same property ensures that almost every $z$ where $f$ is differentiable has $f(z)$ among the full-measure set where $g$ is differentiable. At such points the inverse derivative identity in [F3] applies. [F1, F2, F3, given]

2.1 At a common differentiability point $z$, use $g\circ f=\operatorname{id}$ in [F3]. The $\bar z$ equation is $\displaystyle 0=(g_w\circ f)f_{\bar z}+(g_{\bar w}\circ f)\overline{f_z}.$ The $z$ equation and invertibility give $(g_w\circ f)f_z+(g_{\bar w}\circ f)\overline{f_{\bar z}}=1$, so $g_w(f(z))\ne0$. Dividing yields $\displaystyle \mu_g(f(z))=\frac{g_{\bar w}(f(z))}{g_w(f(z))} =-\frac{f_{\bar z}(z)}{\overline{f_z(z)}} =-\mu_f(z)\frac{f_z(z)}{\overline{f_z(z)}}.$ Therefore $|\mu_g|\circ f=|\mu_f|$ almost everywhere. The area formula and the null-set property in [F2] transfer this equality in both directions between the two domains, so $\|\mu_g\|_\infty=\|\mu_f\|_\infty$. Since [F1] already gives $g\in W^{1,2}_{\mathrm{loc}}$ and its coefficient has essential supremum below $1$, the analytic definition gives $K_g=K_f$ and the stated $K$-quasiconformality. The area/null-set source obligation in [F2] remains open, so the item decision is escalated.[F1, F2, F3, given] ∎
