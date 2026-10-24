---
id: thm-freudenthal-weight-multiplicity-recursion
kind: theorem
title: Freudenthal's weight multiplicity recursion
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-axiom-of-choice, lem-casimir-comparison-on-a-weight-vector, lem-positive-root-strings-sum-the-freudenthal-correction, def-formal-character-of-a-finite-dimensional-weight-module, def-weyl-vector-rho-for-a-chosen-positive-system]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§11.3, printed pp. 80--82 (Theorem 11.7: Freudenthal's formula ((λ+ρ|λ+ρ) − (μ+ρ|μ+ρ))m(μ) = 2Σ_{α>0}Σ_{i≥1}m(μ+iα)(μ+iα|α))"
    - title: "R. Borcherds, Berkeley Math 261 course notes, page on the Freudenthal multiplicity formula"
      url: "https://math.berkeley.edu/~reb/courses/261/47.pdf"
      locator: "printed p. 146 (the Freudenthal multiplicity formula and its proof sketch via the Casimir trace)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every dominant
integral weight $\lambda\in\Lambda^+$ and every $\mu\in\mathfrak h^*$,
$$\bigl((\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)\bigr)m_\lambda(\mu)=2\sum_{\alpha\in\Phi^+}\sum_{j\ge1}(\mu+j\alpha,\alpha)\,m_\lambda(\mu+j\alpha),$$
with $m_\lambda(\nu)=0$ for every $\nu$ that is not a weight of $L(\lambda)$
and with $\rho$ the Weyl vector
([[def-weyl-vector-rho-for-a-chosen-positive-system]]); the inner sum is
finite by [[lem-positive-root-strings-sum-the-freudenthal-correction]].

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight
$\lambda\in\Lambda^+$, an element $\mu\in\mathfrak h^*$, the positive system
$\Phi^+$, the Weyl vector $\rho$, and the multiplicities
$m_\lambda(\nu)=\dim L(\lambda)_\nu$ of the finite-dimensional simple module
of highest weight $\lambda$.

[A1] The Axiom of Choice is assumed; it is inherited from the published
Casimir and classification suppliers used in [F1] and [F2]
([[def-axiom-of-choice]]).

[F1] The Casimir comparison on the weight space $L(\lambda)_\mu$ reads
$$\bigl((\lambda,\lambda+2\rho)-(\mu,\mu)\bigr)m_\lambda(\mu)=\sum_{\alpha\in\Phi^+}\operatorname{tr}_{L(\lambda)_\mu}(e_\alpha f_\alpha+f_\alpha e_\alpha)$$
([[lem-casimir-comparison-on-a-weight-vector]]).

[F2] Each positive root contributes its string trace
$$\operatorname{tr}_{L(\lambda)_\mu}(e_\alpha f_\alpha+f_\alpha e_\alpha)=m_\lambda(\mu)(\mu,\alpha)+2\sum_{j\ge1}m_\lambda(\mu+j\alpha)(\mu+j\alpha,\alpha),$$
the sum being finite and the coefficients vanishing off the weights of
$L(\lambda)$ ([[lem-positive-root-strings-sum-the-freudenthal-correction]]).

[F3] $\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$, so the bilinear form gives
$\sum_{\alpha\in\Phi^+}(\mu,\alpha)=(\mu,2\rho)=2(\mu,\rho)$, and
$m_\lambda(\nu)=\dim L(\lambda)_\nu=0$ for every $\nu$ that is not a weight
([[def-weyl-vector-rho-for-a-chosen-positive-system]],
[[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F4] Expanding the shifted squares with bilinearity and symmetry of
$(\ ,\ )$ gives
$$(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)=(\lambda,\lambda+2\rho)-(\mu,\mu)-2(\mu,\rho).$$

## Proof

**Proof technique:** direct.

1.1 By [F3] the sum of the pairings over the positive roots is $\sum_{\alpha\in\Phi^+}(\mu,\alpha)=2(\mu,\rho)$, and by [F4] the Casimir coefficient and the shifted-norm difference are related by $(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)=(\lambda,\lambda+2\rho)-(\mu,\mu)-2(\mu,\rho)$. [F3, F4, algebra, A1]

2.1 Substituting [F2] into the right side of [F1] gives $\bigl((\lambda,\lambda+2\rho)-(\mu,\mu)\bigr)m_\lambda(\mu)=m_\lambda(\mu)\sum_{\alpha\in\Phi^+}(\mu,\alpha)+2\sum_{\alpha\in\Phi^+}\sum_{j\ge1}m_\lambda(\mu+j\alpha)(\mu+j\alpha,\alpha)$, and step 1.1 turns the first term into $2(\mu,\rho)m_\lambda(\mu)$. [F1, F2, step 1.1, algebra]

3.1 Subtracting $2(\mu,\rho)m_\lambda(\mu)$ from both sides of step 2.1 and using the coefficient identity of step 1.1 gives $\bigl((\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)\bigr)m_\lambda(\mu)=2\sum_{\alpha\in\Phi^+}\sum_{j\ge1}(\mu+j\alpha,\alpha)m_\lambda(\mu+j\alpha)$, which is the asserted recursion; the inner sums are finite and the coefficients vanish off the weights of $L(\lambda)$ by [F2] and [F3]. [F2, F3, step 1.1, step 2.1, algebra] ∎ 