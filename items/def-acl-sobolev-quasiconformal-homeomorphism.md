---
id: def-acl-sobolev-quasiconformal-homeomorphism
kind: definition
title: The ACL and Sobolev analytic definition of quasiconformality
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 0
deps: [def-complex-domain, def-homeomorphism-and-open-maps, def-absolute-continuity-on-almost-every-coordinate-line, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-wirtinger-derivatives, thm-acl-characterisation-of-w-one-p, def-nonnegative-lebesgue-integral, def-countable-choice, lem-weak-derivative-is-independent-of-lp-representatives, def-axiom-of-choice, thm-cantor-function-properties, cor-cantor-set-is-an-uncountable-lebesgue-null-set, lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
axiom_use: The Axiom of Choice is used through the published ACL characterization to identify the W^{1,2}_{loc} and ACL formulations; it includes Countable Choice for the completed-product Fubini interfaces.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §§11.3–11.5: distributional derivatives, absolute continuity on lines and Proposition 2.11 on local square-integrability of the derivatives."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 47–50, for the Beltrami coefficient and dilatation; Ch. 3 §4, equation (4.1), for |f_{\\bar z}| ≤ k|f_z| and k=(K−1)/(K+1). The Cantor-function example's derivative sentence is corrected here: ∂_z f=1 and ∂_{\\bar z}f=0 a.e."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §§11.3–11.5. Section 11.3 defines distributional partial derivatives and gives the ACL criterion for homeomorphisms of planar domains; §11.4 defines quasiconformality by local integrability of these derivatives and bounded dilatation; Proposition 2.11 proves local square-integrability for quasiconformal maps.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §1 and Ch. 3 §4, equation (4.1). The example there uses the Cantor singular function to show that the differential inequality alone does not imply ACL. Its printed derivative sentence has a typo: for $f(x+iy)=x+g(x)+iy$, one has $\partial_z f=1$ and $\partial_{\bar z}f=0$ almost everywhere; these are the values used below.

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains ([[def-complex-domain]]) and $f:\Omega\to\Omega'$ a homeomorphism ([[def-homeomorphism-and-open-maps]]). Read $f$ as a map into $\mathbb R^2$; continuity makes its components locally square integrable. Recall that $W^{1,2}_{\rm loc}(\Omega)$ ([[def-sobolev-space-wkp-and-its-norm]]) means that the components of $f$ admit weak first partial derivatives ([[def-weak-derivative-of-a-locally-integrable-function]]) in $L^2_{\rm loc}$; equivalently, their almost-everywhere classes have ACL representatives in both coordinate directions whose measurable classical coordinate derivatives belong to $L^2_{\rm loc}$ ([[def-absolute-continuity-on-almost-every-coordinate-line]], [[thm-acl-characterisation-of-w-one-p]]). ACL alone does not assert this derivative integrability. Countable Choice ([[def-countable-choice]]) is included in AC for the completed-product Fubini interfaces. On almost every coordinate line the continuous map $f$ agrees almost everywhere with its ACL representative, hence everywhere by continuity of both restrictions; its classical line derivatives then represent its weak derivatives.

Let $K\ge1$ and put $k=(K-1)/(K+1)\in[0,1)$. The homeomorphism $f$ is **$K$-quasiconformal in the analytic sense** when

(A1) $f\in W^{1,2}_{\rm loc}(\Omega)$; and

(A2) its weak Wirtinger derivatives $\partial_zf,\partial_{\bar z}f$ ([[def-wirtinger-derivatives]]) lie in $L^2_{\rm loc}(\Omega)$ and satisfy
$$|\partial_{\bar z}f(z)|\le k|\partial_zf(z)|\qquad\text{for almost every }z\in\Omega.$$

The inequality is a statement about $L^2_{\rm loc}$ classes: it is independent of the choice of representative of $f$ and of the Borel representatives of its weak Wirtinger derivatives, since each such representative agrees almost everywhere with its class ([[lem-weak-derivative-is-independent-of-lp-representatives]]). The map is **analytically quasiconformal** if it is $K$-analytically quasiconformal for some finite $K$. Its minimal constant is recovered from the Beltrami coefficient defined later on this page.

**Orientation and the regularity requirement.** Inequality (A2) gives $J_f=|\partial_zf|^2-|\partial_{\bar z}f|^2\ge(1-k^2)|\partial_zf|^2\ge0$ almost everywhere, with respect to planar Lebesgue measure ([[def-nonnegative-lebesgue-integral]]). A classical derivative inequality alone does not replace (A1): on $(0,1)^2$, the map $f(x+iy)=x+g(x)+iy$, where $g$ is the Cantor function, is a homeomorphism onto $(0,2)\times(0,1)$ ([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]]). The Cantor function is continuous, nonconstant, and locally constant off the null Cantor set, so $g'=0$ almost everywhere ([[thm-cantor-function-properties]], [[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]). Thus the classical Wirtinger derivatives are $\partial_zf=1$ and $\partial_{\bar z}f=0$ almost everywhere. But $g$ cannot be absolutely continuous on every compact subinterval of $(0,1)$: the fundamental theorem would make it constant there, and then continuity would contradict $g(0)=0$, $g(1)=1$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]). Subtracting the identity shows that $f$ fails ACL on every horizontal line and therefore fails (A1). Its classical inequality is not the weak-derivative assertion (A2). Orientation preservation follows from (A1) together with (A2), as proved by the equivalence theorem on this page.
