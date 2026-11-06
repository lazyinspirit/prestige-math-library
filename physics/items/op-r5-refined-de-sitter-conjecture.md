---
id: op-r5-refined-de-sitter-conjecture
kind: open-problem
title: "Refined de Sitter conjecture for positive scalar potentials"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 2
deps: ["def-r5-swampland-eft-claim-data", "def-r5-cosmology-4d-scalar-eft-data"]
dependency_roles:
  "def-r5-swampland-eft-claim-data": "formulation-prerequisite"
  "def-r5-cosmology-4d-scalar-eft-data": "formulation-prerequisite"
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
sources:
  references:
    - title: "De Sitter Space and the Swampland"
      url: "https://arxiv.org/pdf/1806.08362v1"
      locator: "Complete primary paper, PDF pp. 1–3: original gradient-only conjecture, kept distinct from the refined form."
    - title: "Distance and de Sitter Conjectures on the Swampland"
      url: "https://arxiv.org/pdf/1810.05506v2"
      locator: "Complete paper, PDF pp. 1–5: refined gradient/Hessian disjunction and evidence under additional assumptions."
    - title: "Hitchhiker’s Guide to the Swampland: The Cosmologist’s Handbook to the string-theoretical Swampland Programme"
      url: "https://arxiv.org/pdf/2509.02632v1"
      locator: "§II.D, PDF pp. 14–15, de Sitter and refined de Sitter formulations; review dated 5 September 2025, with its pre-2025 literature cutoff stated at PDF p. 2, note 8."
    - title: "Nathan Benjamin Agmon, Alek Bedroya, Monica Jinwoo Kang, and Cumrun Vafa, Lectures on the string landscape and the Swampland, arXiv:2212.06187v2"
      url: "https://arxiv.org/pdf/2212.06187v2"
      locator: "de Sitter lectures, PDF pp. 214–220; full lecture notes."
physical_scope: "Open four-dimensional Einstein-frame conjecture for UV-complete quantum-gravity scalar EFTs on a declared controlled range. The gradient-or-negative-unit-direction alternative includes N=0 explicitly without assigning an empty-spectrum eigenvalue; universal constants are proposed, not measured or proved."
---

## Open problem

Use the earlier four-dimensional Einstein-frame scalar-EFT and swampland-claim data: a finite-dimensional smooth scalar target $\mathcal T$ of dimension $N\geq0$, smooth positive-definite metric $G$, smooth potential $V:\mathcal T\to\mathbb R$, and constant reduced Planck mass $M_P>0$. The EFT is required to arise from a specified ultraviolet-complete quantum-gravity theory on its declared controlled field range. The gradient norm is $|\nabla V|=\sqrt{G^{ij}\partial_iV\partial_jV}$. Write $H_p(v,w):=(\nabla dV)_p(v,w)$ for the covariant Hessian at $p\in\mathcal T$, using the Levi-Civita connection of $G$. For $N\geq1$, $\lambda_{\min}(p)$ is the least eigenvalue of the $G$-self-adjoint endomorphism with components $G^{ik}\nabla_k\nabla_jV$.

The conjecture proposes universal dimensionless constants $c,c'>0$, independent of the point and of the family limit in the declared theory class, such that at every controlled point $p$ with $V(p)>0$, either $M_P|\nabla V(p)|/V(p)\geq c$ or there exists $v\in T_p\mathcal T$ with $G_p(v,v)=1$ and $M_P^2H_p(v,v)/V(p)\leq-c'$. For $N\geq1$ the second alternative is equivalent to $M_P^2\lambda_{\min}(p)/V(p)\leq-c'$. For $N=0$ the unit-tangent set is empty, so the second alternative is false, while $|\nabla V|=0$. Thus the conjecture excludes a positive potential in a controlled zero-scalar EFT as well; it never assigns a fictitious eigenvalue to the zero vector space. The constants are proposed to be of order one in the claim datum's sense; no numerical values or proof of their existence are asserted.

In target coordinates with mass dimension one, $G_{ij}$ is dimensionless, $[V]=\mathrm{mass}^4$, $[|\nabla V|]=\mathrm{mass}^3$, and $[\lambda_{\min}]=\mathrm{mass}^2$, so the displayed ratios are dimensionless. The same constants and both alternatives are part of this conjecture; the original gradient-only version is a different statement.

## Open problem references

[[def-r5-cosmology-4d-scalar-eft-data]]

[[def-r5-swampland-eft-claim-data]]

[Obied et al., pp. 1–3](https://arxiv.org/pdf/1806.08362v1)

[Ooguri et al., pp. 1–5](https://arxiv.org/pdf/1810.05506v2)

## Status

Status review dated 2025-09-05: the bounded record is Obied et al., PDF pp. 1–3; Ooguri–Palti–Shiu–Vafa, PDF pp. 1–5; and Lehnert, §II.D, PDF pp. 14–15. Lehnert states that its reviewed literature was published before 2025 (PDF p. 2, note 8), and its dS section distinguishes counterexamples to the original gradient-only form from the refined form. The primary sources give conditional arguments and evidence in restricted regimes under extra assumptions but do not establish the universal refined statement. The constants, admissible theory class and control conditions remain unsettled in this bounded record. This item makes no status claim about literature after that cutoff and does not claim an exhaustive search; the conjecture is not an equation of motion or an observation.
