---
id: lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities
kind: lemma
title: "On a finite-measure space, a bounded $L^p$ functional is integration against its Radon-Nikodym density"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures, lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, cor-measurable-functions-admit-dominated-simple-approximations, thm-dominated-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: "Apply Radon-Nikodym to the measure $\\nu(E)=\\Lambda(\\mathbf 1_E)$, identify the pairing first on indicators and simple functions, and then extend to bounded measurable representatives by dominated convergence."
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 15.11"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a finite measure space, let $1 \le p < \infty$,
and let $\Lambda:L^p(\mu)\to\mathbb R$ be a bounded linear functional. Then
there exists a density $g \in L^1(\mu)$ such that for every bounded measurable
representative $u$ with class $[u] \in L^p(\mu)$,
$$\Lambda([u])=\int ug\,d\mu.$$
In particular the equality holds for every simple function.

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$, and a bounded linear functional $\Lambda$ on $L^p(\mu)$.

[L1] The induced set function $$\nu(E):=\Lambda([\mathbf 1_E])$$ is a finite signed measure and satisfies $\nu \ll \mu$ ([[lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures]], [[lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu]]).

[L2] A finite absolutely continuous signed measure has an $L^1$ density by the Radon-Nikodym theorem ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[L3] Measurable functions admit dominated simple approximants ([[cor-measurable-functions-admit-dominated-simple-approximations]]).

[L4] Dominated convergence applies to integrable majorants ([[thm-dominated-convergence]]).

[L5] The Lebesgue integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** Apply Radon-Nikodym to the measure $\nu(E)=\Lambda(\mathbf 1_E)$, identify the pairing first on indicators and simple functions, and then extend to bounded measurable representatives by dominated convergence.

1.1 By [L1] and [L2], choose $g \in L^1(\mu)$ such that $$\nu(E)=\int_E g\,d\mu\qquad(E \in \mathcal A).$$ Since $\nu(E)=\Lambda([\mathbf 1_E])$, this means $$\Lambda([\mathbf 1_E])=\int \mathbf 1_E g\,d\mu\qquad(E \in \mathcal A).$$ [L1, L2, given, choose]

1.2 Let $u$ be bounded and measurable, with $|u| \le M$. By [L3], choose simple functions $(s_n)$ such that $|s_n| \le M$ for every $n$ and $s_n \to u$ pointwise. Since $\mu(X)<\infty$, $$|s_n-u|^p\le (2M)^p\mathbf 1_X,$$ and the majorant is integrable. Therefore [L4] gives $$\|[s_n]-[u]\|_p^p=\int |s_n-u|^p\,d\mu\longrightarrow0,$$ so continuity of $\Lambda$ yields $$\Lambda([s_n])\longrightarrow\Lambda([u]).$$ [L3, L4, given, choose]

2.1 For each simple approximant $s_n$, step 1.1 and linearity give $$\Lambda([s_n])=\int s_ng\,d\mu.$$ Thus the formula already holds for every simple function, and in particular for the chosen sequence $(s_n)$. [L5, step 1.1, step 1.2, given, algebra]

3.1 Because $g \in L^1(\mu)$ and $|(s_n-u)g| \le 2M|g|$ with $2M|g| \in L^1(\mu)$, [L4] gives $$\int s_ng\,d\mu\longrightarrow\int ug\,d\mu.$$ Combining this with step 1.2 and step 2.1 yields $$\Lambda([u])=\int ug\,d\mu.$$ So the Radon-Nikodym density represents $\Lambda$ on every bounded measurable representative. [L4, step 1.2, step 2.1] ∎
