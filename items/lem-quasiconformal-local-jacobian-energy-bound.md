---
id: lem-quasiconformal-local-jacobian-energy-bound
kind: lemma
title: A local Jacobian and energy bound for quasiconformal homeomorphisms
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 8
deps: [def-axiom-of-choice, def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-wirtinger-derivatives, thm-geometric-and-analytic-quasiconformality-equivalent, lem-analytic-quasiconformality-implies-modulus-distortion]
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
      locator: "Ch. 3 §4, Theorem 4.2, Corollary 4.3, Lemma 4.4 and Corollary 4.5, printed pp. 94–96: a.e. differentiability, the area-Jacobian inequality, and its derivative-energy consequence. The proof of Theorem 4.2 has an unresolved maximum argument and is not used here; the area and energy clauses rest on the Lyubich argument and the item's own algebra."
    - title: "F. W. Gehring and O. Lehto, On the total differentiability of functions of a complex variable"
      locator: "Ann. Acad. Sci. Fenn. Ser. A I Math. 272 (1959), pp. 1–9; the open-map differentiability theorem used in Step 1.2. The complete original argument has not yet been recovered."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains and let $f:\Omega\to\Omega'$ be an orientation-preserving $K$-geometrically quasiconformal homeomorphism, where $K\ge1$. Put $k=(K-1)/(K+1)$. Write $\partial_z f,\partial_{\bar z}f$ for its weak Wirtinger derivatives, $J_f=|\partial_z f|^2-|\partial_{\bar z}f|^2$ for its Jacobian, and $|Df|_{\rm HS}$ for the Hilbert--Schmidt norm of its real weak derivative matrix. Then for every relatively compact Borel set $E\subset\Omega$,
$$\int_E J_f\,dA\le \lambda_2(f(E)),\qquad \int_E |Df|_{\rm HS}^2\,dA\le \frac{2(1+k^2)}{1-k^2}\,\lambda_2(f(E)).$$

## Facts & Assumptions

**Given:** AC, the geometric K-QC homeomorphism and the relatively compact Borel set E.

[F1] Geometric and analytic K-quasiconformality agree, so the weak Wirtinger derivatives exist and obey $|f_{\bar z}|\le k|f_z|$ ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[def-acl-sobolev-quasiconformal-homeomorphism]]).

[F2] The earlier full distortion wrapper proves $|f(E)|=\int_EJ_f$ without assuming the present lemma or MRMT ([[lem-analytic-quasiconformality-implies-modulus-distortion]], area clause). Its lower inequality suffices here.

[F3] Expanding the Wirtinger identities gives $|Df|_{\rm HS}^2=2(|f_z|^2+|f_{\bar z}|^2)$ and $J_f=|f_z|^2-|f_{\bar z}|^2$ ([[def-wirtinger-derivatives]]).

## Proof

**Proof technique:** use the earlier proved planar area formula and the Beltrami energy algebra.

1.1 Apply [F1] to regard f as an analytic K-QC map. The exact Borel-set area formula in [F2] gives $\int_EJ_f=|f(E)|$, hence the claimed lower inequality. No unrecovered Gehring–Lehto source is used; the complete differentiability and signed-degree arguments are in the earlier12 suppliers. [F1, F2, given]

2.1 The Beltrami bound gives $J_f\ge(1-k^2)|f_z|^2$, and [F3] gives $|Df|_{\rm HS}^2\le2(1+k^2)|f_z|^2\le2(1+k^2)(1-k^2)^{-1}J_f$. Integrate and use step 1.1 to obtain the stated constant. [F1, F3, step 1.1, algebra] ∎
