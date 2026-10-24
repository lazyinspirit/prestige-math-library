---
id: ex-abc-smc-finite-particle-collapse
kind: example
title: Finite ABC-SMC particles can miss target support despite a valid mixture weight
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-abc-sequential-smc
  - def-abc-augmented-tolerance-target
  - thm-abc-sequential-smc-rn-weight-update
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Osvaldo A. Martin, Ravin Kumar, and Junpeng Lao, Bayesian Modeling and Computation in Python, Chapter 8"
      url: https://bayesiancomputationbook.com/markdown/chp_08.html
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5.2"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
---

## Example

Let $\Theta=\{0,1\}$ have the uniform prior and
$\mathsf Y=\{0,1,2\}$. The simulator has
$K(0,\{0\})=K(0,\{1\})=\tfrac12$ and $K(0,\{2\})=0$, while
$K(1,\{0\})=\tfrac14$, $K(1,\{1\})=\tfrac12$, and
$K(1,\{2\})=\tfrac14$. Take $S(0)=S(1)=0$, $S(2)=1$, $s_0=0$, and
$\epsilon_1=\tfrac12$. Let the previous two-particle population be $(0,0)$
with equal weights and use the stage-1 kernel
$Q_1(0,\{0\})=\tfrac{99}{100}$,
$Q_1(0,\{1\})=\tfrac{1}{100}$, with the same row from $\theta=1$. The
proposal mixture has full prior support,
and its Radon–Nikodym weights are finite.

## Verification

**Given:** The stage-1 prior, simulator, tolerance event, proposal mixture, and
particle count $N=2$ specified in the Example.

[F1] [[alg-abc-sequential-smc]]: a candidate receives weight
$\mathbf1_{A_{\epsilon_1}}(Y) d\Pi/d\phi_1^N(\theta)$, and a zero-total-weight
population is reported as degenerate.

[F2] [[thm-abc-sequential-smc-rn-weight-update]]: the theorem does not claim
that a finite self-normalized particle population represents all positive
target mass.

1.1 The proposal masses are $\phi_1^N(\{0\})=99/100$ and $\phi_1^N(\{1\})=1/100$, so the uniform prior is dominated and the finite RN weights are $r_1^N(0)=50/99$ and $r_1^N(1)=50$. Tolerance acceptance is certain at $\theta=0$ and has probability $3/4$ at $\theta=1$, so $Z_{\epsilon_1}=1/2+(1/2)(3/4)=7/8$ and the unnormalized target mass at $\theta=1$ is $3/8$, giving normalized mass $3/7$. [F1, given, algebra]

2.1 Each proposal has parameter $0$ with probability $99/100$, independently conditional on the previous population, so both have parameter $0$ with probability $(99/100)^2=9801/10000$; on this event both weights equal $50/99$ and the normalized empirical measure assigns zero mass to $\theta=1$. [F1, step 1.1, algebra]

3.1 Step 1.1 gives true target mass $3/7$ at $\theta=1$, whereas the positive-probability event in step 2.1 has no empirical mass there; any resampled offspring also stay at $\theta=0$. This illustrates the finite-particle caveat in [F2] despite valid support and weights. [F1, F2, step 1.1, step 2.1, algebra] ∎
