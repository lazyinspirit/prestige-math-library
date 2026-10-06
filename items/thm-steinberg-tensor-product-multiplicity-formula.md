---
id: thm-steinberg-tensor-product-multiplicity-formula
kind: theorem
title: Steinberg's tensor-product multiplicity formula
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-tensor-product-multiplicity-for-highest-weight-modules
  - prop-tensor-product-multiplicities-are-character-structure-constants
  - lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient
  - thm-weyl-character-formula
  - prop-characters-of-finite-dimensional-modules-are-weyl-invariant
  - lem-weyl-length-parity-is-multiplicative
  - def-formal-character-of-a-finite-dimensional-weight-module
  - def-completed-formal-character-ring-for-downward-cones
  - lem-geometric-series-invertibility-in-the-completed-character-ring
  - prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces
  - def-root-reflections-and-the-weyl-group-action
  - prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system
  - def-weight-and-weight-space-of-a-lie-algebra-representation
  - prop-formal-characters-are-additive-and-multiplicative
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 7 §7.1 Corollary 7.1.7, printed pp. 333--334 (the tensor-product multiplicity formula $\\operatorname{mult}_{V^\\mu\\otimes V^\\nu}(V^\\lambda)=\\sum_{t\\in W}\\operatorname{sgn}(t)m_\\mu(\\lambda+\\rho-t(\\nu+\\rho))$, with the complete proof from the skew-symmetrisation formula 7.1.6)."
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Birkhäuser 2002"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. IX §8 Problem 17 and its printed solution, printed pp. 611--612 and 747--748 (the equivalent $\\operatorname{sgn}$/dominant-conjugate form of the formula)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2 and §27.1, printed pp. 140--141 and 145 (Weyl numerator and denominator, multiplication of characters)."
---

## Statement

Assume the Axiom of Choice. For all dominant integral weights
$\lambda,\mu,\nu\in\Lambda^+$ the tensor-product multiplicity of
[[def-tensor-product-multiplicity-for-highest-weight-modules]] is
$$c^\nu_{\lambda\mu}=\sum_{w\in W}(-1)^{\ell(w)}\,m_\mu\bigl(w(\nu+\rho)-(\lambda+\rho)\bigr),$$
where $m_\mu(\sigma)=\dim L(\mu)_\sigma$ is the weight multiplicity
([[def-formal-character-of-a-finite-dimensional-weight-module]]) and $W$ is
the Weyl group with length function $\ell$; only finitely many summands are
nonzero. Equivalently, after the substitution $w\mapsto w^{-1}$ and
Weyl-invariance of the weight multiplicities
([[prop-characters-of-finite-dimensional-modules-are-weyl-invariant]]),
$$c^\nu_{\lambda\mu}=\sum_{w\in W}(-1)^{\ell(w)}\,m_\mu\bigl(\nu+\rho-w(\lambda+\rho)\bigr).$$

## Facts & Assumptions

**Given:** AC, dominant integral weights $\lambda,\mu,\nu\in\Lambda^+$, the alternation operator $A$ with $A(\eta)=\sum_w(-1)^{\ell(w)}e^{w\eta}$ and $A(\rho)$ the Weyl denominator, and the finite-dimensional module $L(\lambda)\otimes L(\mu)$.

[F1] Coefficients of a character in the completed ring $\mathcal R$ are the tensor multiplicities: with $V=L(\lambda)\otimes L(\mu)$, $c^\nu_{\lambda\mu}=[V:L(\nu)]$ and $\operatorname{ch}V=\sum_{\nu\in\Lambda^+}c^\nu_{\lambda\mu}\operatorname{ch}L(\nu)$ ([[def-tensor-product-multiplicity-for-highest-weight-modules]], [[prop-tensor-product-multiplicities-are-character-structure-constants]]).

[F2] Alternation extraction: for every finite-dimensional module $V$ and $\nu\in\Lambda^+$, $[e^{\nu+\rho}]A(\rho)\operatorname{ch}V=[V:L(\nu)]$; in particular $c^\nu_{\lambda\mu}=[e^{\nu+\rho}]A(\rho)\operatorname{ch}(L(\lambda)\otimes L(\mu))$ ([[lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient]]).

[F3] Weyl character formula and linearity: $A(\rho)\operatorname{ch}L(\lambda)=A(\lambda+\rho)=\sum_w(-1)^{\ell(w)}e^{w(\lambda+\rho)}$, the formal character is multiplicative over tensor products, and $\operatorname{ch}L(\mu)=\sum_{\sigma}m_\mu(\sigma)e^\sigma$ with finitely many nonzero weights, each weight lying in $\mu-Q_+$ ([[thm-weyl-character-formula]], [[prop-formal-characters-are-additive-and-multiplicative]], [[def-formal-character-of-a-finite-dimensional-weight-module]], [[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-completed-formal-character-ring-for-downward-cones]], [[lem-geometric-series-invertibility-in-the-completed-character-ring]]).

[F4] The Weyl group is finite and acts on weights by the reflection action; its length function satisfies $( -1)^{\ell(w^{-1})}=(-1)^{\ell(w)}$, the weight multiplicities of a finite-dimensional module are Weyl-invariant, i.e. $m_\mu(w\sigma)=m_\mu(\sigma)$ for all $w\in W$, and the set of weights of $L(\mu)$ is finite ([[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]], [[def-root-reflections-and-the-weyl-group-action]], [[prop-characters-of-finite-dimensional-modules-are-weyl-invariant]], [[lem-weyl-length-parity-is-multiplicative]]).

## Proof

1.1 Let $V=L(\lambda)\otimes L(\mu)$. By multiplicativity and the character formula [F3], $A(\rho)\operatorname{ch}V=A(\lambda+\rho)\operatorname{ch}L(\mu)$. Expanding gives $\sum_{w,\sigma}(-1)^{\ell(w)}m_\mu(\sigma)e^{w(\lambda+\rho)+\sigma}$. For each fixed $w$, put $\sigma=w\tau$; Weyl invariance [F4] gives $m_\mu(w\tau)=m_\mu(\tau)$. The finite double sum is therefore $\sum_{w,\tau}(-1)^{\ell(w)}m_\mu(\tau)e^{w(\lambda+\rho+\tau)}=\sum_\tau m_\mu(\tau)A(\lambda+\rho+\tau)$. [F3, F4, given, algebra]

2.1 Extract the coefficient of $e^{\nu+\rho}$ using [F2]: $$c^\nu_{\lambda\mu}=[e^{\nu+\rho}]A(\rho)\operatorname{ch}V =\sum_\sigma m_\mu(\sigma)\,[e^{\nu+\rho}]A(\lambda+\rho+\sigma),$$ and $[e^{\nu+\rho}]A(\lambda+\rho+\sigma) =\sum_{w\in W}(-1)^{\ell(w)}[w(\lambda+\rho+\sigma)=\nu+\rho]$. Hence $$c^\nu_{\lambda\mu}=\sum_{w\in W}(-1)^{\ell(w)}m_\mu\bigl(w^{-1}(\nu+\rho)-(\lambda+\rho)\bigr),$$ because the condition $w(\lambda+\rho+\sigma)=\nu+\rho$ is equivalent to $\sigma=w^{-1}(\nu+\rho)-(\lambda+\rho)$, and terms with $\sigma$ outside the finite weight set of $L(\mu)$ contribute $m_\mu(\sigma)=0$. [F1, F2, F3, step 1.1, algebra]

3.1 Equivalent form. Substituting $w\mapsto w^{-1}$ in step 2.1 and using $( -1)^{\ell(w^{-1})}=(-1)^{\ell(w)}$ gives $c^\nu_{\lambda\mu}=\sum_w(-1)^{\ell(w)}m_\mu(w(\nu+\rho)-(\lambda+\rho))$, which is the first displayed formula. Applying to $m_\mu$ the Weyl-invariance of weight multiplicities [F4] with the group element $w^{-1}$ gives $$m_\mu\bigl(w(\nu+\rho)-(\lambda+\rho)\bigr)=m_\mu\bigl(\nu+\rho-w^{-1}(\lambda+\rho)\bigr);$$ relabelling $w'\mapsto w^{-1}$ in the sum yields the equivalent form $$c^\nu_{\lambda\mu}=\sum_{w\in W}(-1)^{\ell(w)}m_\mu\bigl(\nu+\rho-w(\lambda+\rho)\bigr).$$ Only finitely many summands are nonzero in either form, since $W$ is finite [F4] and $m_\mu$ has finite support. [F1, F4, step 1.1, step 2.1, algebra] ∎
