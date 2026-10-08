---
id: lem-quasiconformal-local-jacobian-energy-bound
kind: lemma
title: A local Jacobian and energy bound for quasiconformal homeomorphisms
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 9
deps:
  - def-absolute-continuity-on-almost-every-coordinate-line
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-complex-domain
  - def-countable-choice
  - def-geometric-quasiconformal-homeomorphism
  - def-homeomorphism-and-open-maps
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-wirtinger-derivatives
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-acl-characterisation-of-w-one-p
  - thm-borel-sets-are-lebesgue-measurable
  - thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n
  - thm-geometric-and-analytic-quasiconformality-equivalent
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-tonelli-and-fubini-for-completed-product-measures
axiom_use: The Axiom of Choice is used by the geometric-to-analytic quasiconformality theorem and the differentiation-of-measures interface; Countable Choice is included for their completed-product ACL and measure conventions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §11.4, Proposition 11.14 and the first half of its proof, printed p. 181: the pushforward-area measure, its absolutely continuous density, and the Jacobian-energy bound (11.7)–(11.8). The displayed Jacobian sign in (11.8) is a typographical error; the preceding formula (11.6) gives the correct sign used here."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §4, Theorem 4.2, Corollary 4.3, Lemma 4.4 and Corollary 4.5, printed pp. 94–96: a.e. differentiability, the area-Jacobian inequality, and its derivative-energy consequence. The proof of Theorem 4.2 has an unresolved maximum argument; see the Step 3b report."
    - title: "F. W. Gehring and O. Lehto, On the total differentiability of functions of a complex variable"
      locator: "Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9; the open-map differentiability theorem used in Step 1.2. The complete original argument has not yet been recovered."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains and let $f:\Omega\to\Omega'$ be an orientation-preserving $K$-geometrically quasiconformal homeomorphism, where $K\ge1$. Put $k=(K-1)/(K+1)$. Write $\partial_z f,\partial_{\bar z}f$ for its weak Wirtinger derivatives, $J_f=|\partial_z f|^2-|\partial_{\bar z}f|^2$ for its Jacobian, and $|Df|_{\rm HS}$ for the Hilbert--Schmidt norm of its real weak derivative matrix. Then for every relatively compact Borel set $E\subset\Omega$,
$$\int_E J_f\,dA\le \lambda_2(f(E)),\qquad \int_E |Df|_{\rm HS}^2\,dA\le \frac{2(1+k^2)}{1-k^2}\,\lambda_2(f(E)).$$

## Facts & Assumptions

**Given:** AC, complex domains $\Omega,\Omega'$, a $K$-geometrically quasiconformal homeomorphism $f:\Omega\to\Omega'$, and a relatively compact Borel set $E\subset\Omega$.

[F1] Under AC, geometric $K$-quasiconformality implies analytic $K$-quasiconformality: $f\in W^{1,2}_{\rm loc}$ and $|\partial_{\bar z}f|\le k|\partial_z f|$ almost everywhere ([[def-geometric-quasiconformal-homeomorphism]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[thm-geometric-and-analytic-quasiconformality-equivalent]]).

[F2] Under AC, a $W^{1,2}_{\rm loc}$ class has an ACL representative whose line derivatives agree almost everywhere with its weak partial derivatives ([[def-absolute-continuity-on-almost-every-coordinate-line]], [[thm-acl-characterisation-of-w-one-p]]). Since $f$ is continuous, its restrictions agree pointwise with that representative on almost every coordinate line.

[F3] For a quasiconformal homeomorphism and every relatively compact Borel $E$, the pushforward-area measure $\nu(A)=\lambda_2(f(A))$ satisfies $\int_EJ_f\,dA\le\nu(E)$. Lyubich, Proposition 11.14, printed p. 181, derives this by decomposing $\nu=\rho\lambda_2+\nu_s$, applying measure differentiation [F6], and identifying $\rho=J_f$ at differentiability points [F4]; Bishop, Lemma 4.4, printed pp. 95–96, gives the square version. The available Lyubich draft has a sign typo in its displayed Jacobian identity preceding (11.8); the correct identity is (11.6). Both source arguments use the Gehring–Lehto differentiability theorem.

[F4] The Gehring–Lehto differentiability theorem says that a continuous open map in the plane whose two coordinate partial derivatives exist finitely almost everywhere is totally differentiable almost everywhere. The statement is cited as Proposition 11.18 in Lyubich, Ch. 2 §11.5, printed p. 183, and as Theorem 4.2 in Bishop, Ch. 3 §4, printed pp. 94–95. The complete original Gehring–Lehto argument remains a source obligation recorded in the Step 3b report.

[F5] A homeomorphism carries Borel sets to Borel sets ([[def-homeomorphism-and-open-maps]]); Borel sets are Lebesgue measurable, and Lebesgue measure is finite on compact subsets of $\mathbb C$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F6] If $\nu$ is a locally finite Borel measure on $\mathbb R^2$ and $q=d\nu_a/d\lambda_2$ is the density of its absolutely continuous part, then $\nu(B(z,r))/\lambda_2(B(z,r))\to q(z)$ for almost every $z$ ([[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]]).

[F7] The real-coordinate and Wirtinger derivatives satisfy
$$|Df|_{\rm HS}^2=2\bigl(|\partial_z f|^2+|\partial_{\bar z}f|^2\bigr),\qquad J_f=|\partial_z f|^2-|\partial_{\bar z}f|^2.$$

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §11.4, Proposition 11.14, printed pp. 181–182. Its first half identifies the absolutely continuous density of $A\mapsto\lambda_2(f(A))$ with the Jacobian and obtains the energy bound. In the available book draft, the Jacobian sign in the line preceding (11.8) conflicts with the correct identity (11.6); the proof below uses the corrected identity.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 3 §4, printed pp. 94–96, Theorem 4.2, Corollary 4.3, Lemma 4.4 and Corollary 4.5. The area estimate in Lemma 4.4 is checked independently below. The separate differentiability proof in Theorem 4.2 contains a step that applies a boundary maximum argument to $f$ minus an affine map, which need not be open; that source issue is not treated as resolved.
- F. W. Gehring and O. Lehto, *On the total differentiability of functions of a complex variable*, Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9. The paper's complete argument has not yet been recovered; the cited theorem statement is the remaining source obligation.

## Proof

**Proof technique:** pushforward-area measure and density differentiation, followed by the Beltrami inequality.

1.1 By [F1], $f$ is analytically $K$-quasiconformal and its weak Wirtinger derivatives satisfy the Beltrami inequality. By [F2], $f$ has finite classical coordinate partial derivatives almost everywhere. It is a continuous open map by [F5], so [F4] gives total differentiability almost everywhere. The pushforward-area argument [F3] applies: its absolutely continuous density is $J_f$ by [F4] and [F6], and its singular part is positive, hence $\int_EJ_f\,dA\le\lambda_2(f(E))$. [F1, F2, F3, F4, F5, F6]

2.1 The Beltrami inequality in [F1] gives $J_f\ge(1-k^2)|\partial_zf|^2$, while [F7] gives $$|Df|_{\rm HS}^2=2\bigl(|\partial_zf|^2+|\partial_{\bar z}f|^2\bigr)\le2(1+k^2)|\partial_zf|^2\le\frac{2(1+k^2)}{1-k^2}J_f$$ almost everywhere. Integrating over $E$ and applying step 1.1 proves the energy estimate. [F1, F7, step 1.1, algebra] ∎
