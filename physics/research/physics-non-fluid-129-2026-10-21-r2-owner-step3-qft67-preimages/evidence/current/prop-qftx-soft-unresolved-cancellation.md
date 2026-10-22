---
id: prop-qftx-soft-unresolved-cancellation
kind: proposition
domain: mathematics
library: mathematics
title: Summing unresolved coherent emissions removes the lower cutoff
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-qftx-resolved-soft-poisson
  - lem-qftx-coherent-band-poisson
  - thm-logarithm-derivative-and-integral
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - def-factorial-and-falling-factorial
  - def-integer-power
dependency_roles:
  def-qftx-resolved-soft-poisson: mathematical-premise
  lem-qftx-coherent-band-poisson: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-integer-power: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, full lecture notes"
      url: https://arxiv.org/pdf/math-ph/0511030
      locator: "§§5.3–5.6, PDF pp. 19–21; the local argument proves the finite-band coherent count identity."
    - title: "Mark Srednicki, Quantum Field Theory, author-posted draft"
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: "Chapter 26, printed pp. 167–171; detector resolution and the distinction between exclusive and unresolved final states in a different scalar-field calculation. It is context only, not a QED cancellation proof."
verification:
  precheck: pass
---

## Statement

In the defined finite-cutoff coherent model, let
$0<\varepsilon<\Delta<\Lambda$ and $C\ge0$. Let $N_u$ and $N_r$ be the
counts in the unresolved band
$(\varepsilon,\Delta)$ and resolved band $[\Delta,\Lambda)$,
respectively. The exclusive no-emission probability is
$$\mathbb P(N_u=0,N_r=0)= \exp\!\left(-C\log\frac{\Lambda}{\varepsilon}\right).$$
For every $n\in\mathbb N_0$,
$$\mathbb P(N_u=n,N_r=0)= \exp\!\left(-C\log\frac{\Lambda}{\varepsilon}\right) \frac{\left(C\log\frac{\Delta}{\varepsilon}\right)^n}{n!}.$$
Summing over all unresolved counts gives the finite-resolution inclusive
probability
$$\mathbb P(N_r=0)= \exp\!\left(-C\log\frac{\Lambda}{\Delta}\right),$$
which is independent of the lower cutoff $\varepsilon$. This is an exact
identity in the defined free coherent model; it does not assert real–virtual
cancellation in interacting QED or a detector's empirical response.

## Statement references

[Dereziński, §§5.3–5.6](https://arxiv.org/pdf/math-ph/0511030)

[Srednicki, Chapter 26](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf)

## Facts & Assumptions

**Given:** The model's finite cutoffs $0<\varepsilon<\Delta<\Lambda$ and
coefficient $C\ge0$.

[A1] [[def-qftx-resolved-soft-poisson]]: $\Delta$ defines unresolved
frequencies $(\varepsilon,\Delta)$ and resolved frequencies
$[\Delta,\Lambda)$; all cutoff values are angular frequencies in s$^{-1}$.

[F1] [[lem-qftx-coherent-band-poisson]]: counts in disjoint frequency bands
are independent Poisson variables, with mean
$C\int_Bd\nu/\nu$ on a band $B$.

[F2] [[thm-logarithm-derivative-and-integral]]: for $0<a<b$,
$\log(b/a)=\int_a^b d\nu/\nu$; splitting this integral at $\Delta$
gives $\log(\Lambda/\varepsilon)=
\log(\Delta/\varepsilon)+\log(\Lambda/\Delta)$.

[F3] [[def-complex-exponential]],
[[lem-complex-exponential-series-converges-everywhere]], and
[[thm-complex-exponential-addition-and-real-extension]]:
the exponential series converges absolutely and
$\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$.

[F4] [[def-factorial-and-falling-factorial]] and
[[def-integer-power]]: $0!=1$, $\lambda^0=1$, and $0^0=1$.

## Proof

1.1 Define
$\lambda_u=C\int_\varepsilon^\Delta d\nu/\nu$ and
$\lambda_r=C\int_\Delta^\Lambda d\nu/\nu$. By [F2],
$\lambda_u=C\log(\Delta/\varepsilon)$,
$\lambda_r=C\log(\Lambda/\Delta)$, and
$\lambda_u+\lambda_r=C\log(\Lambda/\varepsilon)$. The endpoint $\nu=\Delta$
has zero one-particle measure, so assigning it to the resolved interval
does not change either mean. [given, A1, F1, F2, algebra]

1.2 Independence in [F1] gives
$\mathbb P(N_u=n,N_r=0)=
\exp(-\lambda_u)\lambda_u^n/n!\,\exp(-\lambda_r)$ for every
$n\in\mathbb N_0$. This also covers $C=0$: at $n=0$, the convention
$0^0=1$ gives probability one, and at positive $n$ the probability is
zero. In particular the case $n=0$ is the exclusive no-emission
probability. [F1, F4, given, algebra]

2.1 Summing the joint probabilities over $n$ and using the everywhere
convergent exponential series [F3] gives
$$\sum_{n=0}^\infty\mathbb P(N_u=n,N_r=0) =\exp(-\lambda_u-\lambda_r) \sum_{n=0}^\infty\frac{\lambda_u^n}{n!} =\exp(-\lambda_r).$$
The terms are nonnegative and the series is absolutely convergent, so this
sum is the probability of the disjoint union of the events
$\{N_u=n,N_r=0\}$. [F3, step 1.2, algebra]

3.1 Substituting $\lambda_r=C\log(\Lambda/\Delta)$ from step 1.1 yields
$\mathbb P(N_r=0)=\exp(-C\log(\Lambda/\Delta))$, with no remaining
$\varepsilon$. The conclusion is a model deduction from the finite-band
Poisson law, not a statement about virtual amplitudes in QED. [step 1.1, step 2.1, algebra] ∎

## Remarks

The sketch records only the interval partition used above; the proof does
not rely on the diagram. The boundary frequency $\Delta$ is assigned to the
resolved interval, and its zero measure is why this convention does not
change the calculation.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \draw[->] (0,0) -- (6.4,0) node[right] {$\nu$};
  \draw[very thick] (0.8,0) -- (3.2,0);
  \draw[very thick,dashed] (3.2,0) -- (5.7,0);
  \draw (0.8,0.10) -- (0.8,-0.10) node[below] {$\varepsilon$};
  \draw (3.2,0.10) -- (3.2,-0.10) node[below] {$\Delta$};
  \draw (5.7,0.10) -- (5.7,-0.10) node[below] {$\Lambda$};
  \node[above] at (2.0,0.05) {unresolved};
  \node[above] at (4.45,0.05) {resolved};
\end{tikzpicture}
```
