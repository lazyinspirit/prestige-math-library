---
id: def-likelihood-tilted-measure-at-kl-projection
kind: definition
title: "Likelihood-tilted measures at a KL projection"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-probability-measure
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §3.2, p. 370, and §4.1, pp. 376–379"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, §5.3.1, pp. 158–160"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
---

## Definition

Fix a selected $\theta^*\in\Theta^*$ as in
[[def-kl-projection-set-and-relative-kl-neighborhoods]]. Since its KL value is
finite, $p_{\theta^*}>0$ $P_0$-almost surely. For each $\theta\in\Theta$,
define the nonnegative set function
$$Q_\theta(A):=\int_A\frac{p_\theta(x)}{p_{\theta^*}(x)}\,P_0(dx), \qquad A\in\mathcal A,$$
where the ratio is assigned value $0$ on the $P_0$-null set
$\{p_{\theta^*}=0\}$. Write
$$q_\theta:=Q_\theta(\mathsf X) =\mathbb E_{P_0}\left[\frac{p_\theta(X)}{p_{\theta^*}(X)}\right]\in[0,+\infty].$$
When $q_\theta\ne1$, $Q_\theta$ is not a probability law. The local
sigma-finiteness lemma proves that it is a measure. The local product-measure
lemma then constructs $Q_\theta^n$ and proves its density relative to $P_0^n$
is $\prod_{i=1}^n p_\theta(X_i)/p_{\theta^*}(X_i)$.

For a measurable test $\phi_n:\mathsf X^n\to[0,1]$,
once that product measure has been constructed,
$Q_\theta^n(1-\phi_n)$ means the nonnegative integral of $1-\phi_n$ under it.
It may be infinite; a hypothesis that this quantity tends to zero in
particular requires it to be finite for all sufficiently large $n$.
