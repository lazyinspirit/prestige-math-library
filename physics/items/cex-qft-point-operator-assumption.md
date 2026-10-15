---
id: cex-qft-point-operator-assumption
kind: counterexample
title: "The specified Gaussian family has no finite vacuum-vector norm limit"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 9
deps:
  - thm-dominated-convergence
  - pthm-qft-free-observable-domain-limits
dependency_roles:
  thm-dominated-convergence: mathematical-premise
  pthm-qft-free-observable-domain-limits: physical-result
physical_scope: "The normalized Gaussian spacetime-smearing family for the real scalar field in the selected four-dimensional free Fock vacuum. It refutes only convergence in this representation's vacuum-vector norm; distributional or renormalized point-field constructions in other senses are outside scope. No empirical observation is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 2, §§2.2–2.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"
      locator: "Complete HTML Chapter 2; §2.2 point-field fluctuations and smearing, and §2.3 vacuum."
    - title: "Mark Srednicki, Quantum Field Theory, Part I: Spin Zero, author prepublication textbook draft, arXiv:hep-th/0409035v1"
      url: "https://arxiv.org/html/hep-th/0409035"
      locator: "Complete full-text Part I; §3, scalar-field canonical quantization and formal vacuum terms."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, complete author manuscript, arXiv:1904.04051v2"
      url: "https://arxiv.org/html/1904.04051v2"
      locator: "Complete full-text lecture article; §§2.2 and 4.2, test-function-labelled fields and the free scalar Weyl algebra."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement refuted

Assume all hypotheses of
[[pthm-qft-free-observable-domain-limits]], including Countable Choice and the
selected four-dimensional free real scalar Fock model with $\mu\ge0$. A
normalized Gaussian profile on dimensionless $\mathbb R^d$ means
$$g(y)=\frac{\sqrt{\det Q}}{(2\pi)^{d/2}}\exp\!\left(-\frac12(y-m)^TQ(y-m)\right),$$
where $m\in\mathbb R^d$ and $Q$ is a dimensionless real symmetric
positive-definite matrix. Fix $x_0\in\mathbb R^4$ and such a profile
$\rho\in\mathscr S(\mathbb R^4)$. For a width $\epsilon>0$ measured in
metres, put $\rho_{\epsilon,x_0}(x)=\epsilon^{-4}
\rho((x-x_0)/\epsilon)$. The claim
that $\Phi_\mu(\rho_{\epsilon,x_0})\Omega$ converges in Fock norm to a finite
vector as $\epsilon\downarrow0$, thereby defining a sharp point field on the
vacuum by this norm limit, is false.

## Facts & Assumptions

**Given:** The hypotheses of the domain-limits theorem, the adopted free scalar representation, its normalized vacuum vector, and the exact point-smearing statement below.

[F1] Under the hypotheses of [[pthm-qft-free-observable-domain-limits]], normalized Gaussian spacetime tests approximate a point mass, while the resulting scalar vacuum vectors have norms tending to infinity for every sequence of widths decreasing to zero. This is specific to the selected free scalar representation and its Fock norm.

[F2] For a normalized nonnegative Gaussian $\rho$ and Schwartz test $g$, dominated convergence applies to $\rho(y)g(x_0+\epsilon y)$ with the integrable bound $\|g\|_\infty\rho(y)$. [[thm-dominated-convergence]]

## Counterexample

**Given:** Use the exact scalar Fock representation and the normalized Gaussian family in [F1].

1.1 Let $(\varepsilon_n)$ be an arbitrary sequence of positive widths in
metres with
$\varepsilon_n\to0$. For any Schwartz test $g$, the change of variables
$y=(x-x_0)/\varepsilon_n$ gives
$$\int_{\mathbb R^4}\rho_{\varepsilon_n,x_0}(x)g(x)\,d^4x=\int_{\mathbb R^4}\rho(y)g(x_0+\varepsilon_n y)\,d^4y.$$
For each $y$, the integrand tends to $\rho(y)g(x_0)$ and is bounded in
absolute value by the integrable function $\|g\|_\infty\rho(y)$. The
sequence-indexed dominated-convergence theorem [F2] gives convergence of
these integrals to $g(x_0)$, using $\int\rho=1$. Since the sequence was
arbitrary, the sequential criterion for a limit gives the full limit as
$\varepsilon\downarrow0$; hence these are point-mass approximants.
[F2, construct, algebra]

2.1 For $n=0,1,2,\ldots$, take the explicit sequence $\epsilon_n=(1\,\mathrm m)/(n+1)$. Every width is positive and the sequence decreases to zero. By [F1], $\|\Phi_\mu(\rho_{\epsilon_n,x_0})\Omega\|\to\infty$. A norm-convergent sequence in a Hilbert space has bounded norms, so this sequence cannot converge to a finite vacuum vector. Hence the claimed norm-limit point field does not exist in this representation. This refutes only the stated norm limit and does not exclude distributional or renormalized constructions. [F1, step 1.1, algebra] ∎
