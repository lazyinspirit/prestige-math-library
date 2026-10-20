---
id: lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
kind: lemma
title: "Stieltjes inversion and uniqueness for probability measures on the real line"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-countable-choice
  - def-stieltjes-transform-of-a-real-probability-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-dynkin-pi-lambda
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Appendix B.2"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, §1.3.1"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $\mu$ be a Borel probability measure on $\mathbb R$, with Stieltjes transform $m_\mu(z)=\int (x-z)^{-1}\,d\mu(x)$ for $\operatorname{Im}z>0$. For every $a<b$ and $x\in\mathbb R$,
$$\mu((a,b))+\tfrac12\mu(\{a\})+\tfrac12\mu(\{b\})=\lim_{\eta\downarrow0}\frac1\pi\int_a^b\operatorname{Im}m_\mu(u+i\eta)\,du,\qquad \mu(\{x\})=\lim_{\eta\downarrow0}\eta\,\operatorname{Im}m_\mu(x+i\eta).$$
If two Borel probability measures on $\mathbb R$ have the same Stieltjes transform on the upper half-plane, then they are equal.

## Statement references

Bai and Silverstein, Appendix B.2, printed pp. 514–523 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, §1.3.1, printed pp. 17–18 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).

## Facts & Assumptions

**Given:** Countable choice, a Borel probability measure $\mu$, and its Stieltjes transform under the $(x-z)^{-1}$ convention.

[A1] The Axiom of Countable Choice supplies a choice function for each countable family of nonempty sets ([[def-countable-choice]]).

[F1] The transform is $m_\mu(z)=\int (x-z)^{-1}\,d\mu(x)$ for $\operatorname{Im}z>0$ ([[def-stieltjes-transform-of-a-real-probability-measure]]).

[F2] Fubini permits interchanging the integrals for an integrable function on the product measure space ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F3] Dominated convergence passes pointwise limits through an integral under an integrable bound ([[thm-dominated-convergence]]).

[F4] A pi-system generating a sigma-algebra determines any containing lambda-system ([[thm-dynkin-pi-lambda]]).

[F5] Tonelli's theorem identifies the product integral of a nonnegative measurable function on a sigma-finite product with either iterated integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Under countable choice, the Lebesgue measure $\lambda$ is a measure and every Borel set is Lebesgue measurable; its restriction to a bounded interval is finite, hence sigma-finite ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-borel-sets-are-lebesgue-measurable]]).

## Proof

**Given:** Countable choice, $\mu$, and, for the uniqueness claim, two Borel probability measures $\mu,\nu$ with equal transforms.

1.1 The kernel $K(x,u)=\eta/((x-u)^2+\eta^2)$ is continuous on $\mathbb R^2$ and hence Borel measurable; rational open rectangles form a countable basis, so $\mathcal B(\mathbb R^2)=\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)\subseteq\mathcal B(\mathbb R)\otimes\mathcal L(\mathbb R)$. Restricting the second coordinate to the Lebesgue-measurable interval $[a,b]$ preserves product measurability. Its integral in $u$ is $$\int_a^b\frac{\eta}{(x-u)^2+\eta^2}\,du=\arctan\frac{b-x}{\eta}-\arctan\frac{a-x}{\eta}\le\pi.$$ By [F6], Lebesgue measure restricted to $[a,b]$ is finite, and the probability measure $\mu$ is finite. Tonelli [F5] shows that the product integrand has integral at most $\pi\mu(\mathbb R)=\pi$, so it belongs to $L^1$ on the product space. Fubini [F2] therefore gives $$\frac1\pi\int_a^b\operatorname{Im}m_\mu(u+i\eta)\,du=\int K_{\eta,a,b}(x)\,d\mu(x),\quad K_{\eta,a,b}(x)=\frac1\pi\left(\arctan\frac{b-x}{\eta}-\arctan\frac{a-x}{\eta}\right).$$ The kernel lies in $[0,1]$ and tends pointwise to $1$ on $(a,b)$, $1/2$ at either endpoint, and $0$ elsewhere. [F3] gives the interval formula in the Statement, including endpoint atoms. [A1, F1, F2, F3, F5, F6, given, algebra]

1.2 For any $x\in\mathbb R$, $$\eta\operatorname{Im}m_\mu(x+i\eta)=\int\frac{\eta^2}{(t-x)^2+\eta^2}\,d\mu(t).$$ The integrand is bounded by $1$ and tends to $\mathbf1_{\{x\}}(t)$ as $\eta\downarrow0$. Dominated convergence [F3] proves the atom formula. [F1, F3, algebra]

2.1 If $m_\mu=m_\nu$, step 1.2 gives equality of their point masses at every $x$. Step 1.1 then gives $\mu((a,b))=\nu((a,b))$ for every $a<b$. [step 1.1, step 1.2, algebra]

3.1 The family $\mathcal P=\{\varnothing,\mathbb R\}\cup\{(a,b):a<b\}$ is a pi-system: the intersection of two open intervals is another open interval or empty. It generates the Borel sigma-algebra because open intervals form a basis. The class of Borel sets on which $\mu$ and $\nu$ agree is a lambda-system: it contains $\mathbb R$ because both measures are probabilities, is closed under complements by finite total mass, and is closed under disjoint countable unions by countable additivity. Step 2.1 and [F4] therefore give equality on every Borel set, so $\mu=\nu$. [F4, step 2.1, algebra] ∎
