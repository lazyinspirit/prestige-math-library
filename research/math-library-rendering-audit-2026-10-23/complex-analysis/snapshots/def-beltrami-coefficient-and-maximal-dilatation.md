---
id: def-beltrami-coefficient-and-maximal-dilatation
kind: definition
title: The Beltrami coefficient and the maximal dilatation
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 1
deps: [def-acl-sobolev-quasiconformal-homeomorphism, def-wirtinger-derivatives, def-weak-derivative-of-a-locally-integrable-function, def-borel-sigma-algebra, def-borel-and-lebesgue-measurable-function-on-rn, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-completion-measurable-functions-have-base-measurable-representatives, def-complex-lp-and-euclidean-test-function-conventions, def-essential-supremum-with-respect-to-a-measure, def-countable-choice, def-axiom-of-choice]
axiom_use: The Axiom of Choice is carried by the ACL/Sobolev analytic definition. It includes Countable Choice for the Lebesgue-completion and Borel-representative interfaces used to choose Borel representatives of the weak derivative classes.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–51: the complex dilatation μ=f_{\\bar z}/f_z and D=(1+|μ|)/(1−|μ|), with |μ|=(D−1)/(D+1)."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §§11.1.2–11.3, printed pp. 177–181: the pointwise Beltrami coefficient, infinitesimal dilatation, and analytic definition. Equation (11.3) on p. 178 gives the correct denominator 1−|μ|; the final K-conversion on p. 181 has a sign misprint and is not used."
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §1, printed pp. 49–51. For an orientation-preserving nonsingular real-linear map, Bishop obtains the complex dilatation $\mu=f_{\bar z}/f_z$, $|\mu|<1$, and the dilatation $D=(1+|\mu|)/(1-|\mu|)$, equivalently $|\mu|=(D-1)/(D+1)$.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §§11.1.2–11.3, printed pp. 177–181. Section 11.1.2 defines the pointwise Beltrami coefficient; equation (11.3) on p. 178 gives $\operatorname{Dil}=(1+|\mu|)/(1-|\mu|)$; §11.3 adds the ACL/distributional regularity and bounded-dilatation requirements. The last K-conversion on p. 181 prints denominator $k-1$; this is a sign typo, so the correct conversion from Bishop and the library definition is used here.

## Definition

Assume the Axiom of Choice. Let $f:\Omega\to\Omega'$ be a homeomorphism of complex domains whose components lie in $W^{1,2}_{\rm loc}(\Omega)$, with weak Wirtinger derivative classes as in [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-wirtinger-derivatives]], and [[def-weak-derivative-of-a-locally-integrable-function]].

Choose finite Borel representatives of the real and imaginary components of these derivative classes. Such representatives exist: extend each component by zero outside $\Omega$, use that Lebesgue measure is the completion of its Borel restriction and that every completion-measurable function equals a Borel function almost everywhere ([[def-borel-and-lebesgue-measurable-function-on-rn]], [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]), then restrict the resulting Borel representatives to $\Omega$ using the Borel trace identity ([[def-borel-sigma-algebra]], [[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]). Replacing infinite values on the resulting Borel null sets by zero gives finite representatives.

The **Beltrami coefficient** of $f$ is the Borel function
$$\mu_f(z):=\begin{cases}\partial_{\bar z}f(z)/\partial_zf(z),&\partial_zf(z)\ne0,\\0,&\partial_zf(z)=0.\end{cases}$$
It is a finite-valued measurable function modulo equality almost everywhere. Changing the chosen Borel representatives changes $\mu_f$ only on a Lebesgue-null set, so this class is independent of those choices. For a general $W^{1,2}_{\rm loc}$ homeomorphism, $\mu_f$ need not be essentially bounded. If $f$ is $K$-analytically quasiconformal and $k=(K-1)/(K+1)$, then $|\mu_f|\le k<1$ almost everywhere and it defines a complex $L^\infty(\Omega)$ class ([[def-complex-lp-and-euclidean-test-function-conventions]]). The value zero on $\{\partial_zf=0\}$ is a fixed convention; analytic quasiconformality gives $\partial_{\bar z}f=0$ almost everywhere on that set.

Let $m_f=\|\mu_f\|_\infty$ be the essential supremum of $|\mu_f|$ ([[def-essential-supremum-with-respect-to-a-measure]]). Define the **maximal dilatation** by
$$K_f:=\begin{cases}\dfrac{1+m_f}{1-m_f},&m_f<1\text{ and }\partial_{\bar z}f=0\text{ a.e. on }\{\partial_zf=0\},\\+\infty,&\text{otherwise.}\end{cases}$$
Then $K_f\in[1,+\infty]$, and for every finite $K\ge1$, $f$ is analytically $K$-quasiconformal exactly when $K_f\le K$. Indeed, off $\{\partial_zf=0\}$ the analytic inequality is equivalent to $|\mu_f|\le (K-1)/(K+1)$, and on that set the separate derivative condition in the definition of $K_f$ is exactly what makes the inequality hold. For finite $m_f$, intersecting the almost-everywhere bounds $|\mu_f|\le m_f+1/n$ gives $|\mu_f|\le m_f$ almost everywhere. For an analytically quasiconformal map, the separate derivative condition holds and $m_f<1$, so $K_f=(1+m_f)/(1-m_f)$ is the least admissible constant. In this class, $K_f=1$ exactly when $\mu_f=0$ almost everywhere, equivalently when $\partial_{\bar z}f=0$ as an $L^2_{\rm loc}$ class. The separate one-quasiconformal theorem on this page supplies the holomorphic conclusion in that case; it is not an input to this definition. The nullity of $\{\partial_zf=0\}$ will follow from the inverse theorem's area formula and null-set properties; it is not an assumption here.
