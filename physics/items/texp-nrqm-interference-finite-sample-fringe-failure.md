---
id: texp-nrqm-interference-finite-sample-fringe-failure
aliases: [nrqm-interference-finite-sample-fringe-failure]
kind: thought-experiment
domain: physics
title: "A finite sample can fail a criterion that rejects a positive-probability sequence"
status: draft
origin: session
dependency_level: 12
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, def-nrqm-interference-recorded-detector-and-sampling-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning, post-nrqm-framework-preparation-and-apparatus, def-bernoulli-and-binomial-random-variables, def-independence-of-finite-random-variables, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-expectation-linearity-monotonicity-and-modulus-bound, def-moments-variance-and-covariance, cor-variance-adds-for-pairwise-independent-random-variables, cor-chebyshev-inequality-for-random-variables, def-countable-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  def-nrqm-interference-recorded-detector-and-sampling-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-bernoulli-and-binomial-random-variables: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  cor-variance-adds-for-pairwise-independent-random-variables: mathematical-premise
  cor-chebyshev-inequality-for-random-variables: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A hypothetical finite-sampling analysis of the declared two-path arrangement: for a coherent or which-path preparation whose recorded law is fixed, and under the declared independent-and-identically-distributed $N$-trial sampling model, every declared fringe criterion that rejects at least one outcome sequence of positive probability fails with positive probability, and the empirical frequency of a label concentrates around its recorded probability. The indistinguishability conclusion for the phase-zero coherent and weighted which-path laws assumes that phase zero is admissible. The item is a conditional consequence of the declared preparation and detector models, the declared sampling model in the sense of P7, and published probability suppliers with local calculations. It asserts no measured counts, no p-value, no confidence level, no universal failure probability, and no empirical conclusion about nature; a finite sample without a visible fringe pattern is not a falsification of the coherent model, and a sample with a visible pattern is not a proof of it."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3, printed pages 14-18 (PDF pages 17-21): the two-slit interference probability density and the accumulation of detection records"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6: amplitudes, probabilities and the accumulation of repeated measurements"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared two-path preparation model
[[def-nrqm-interference-two-path-preparation-and-detection-model]] and the
declared recorded detector and sampling model
[[def-nrqm-interference-recorded-detector-and-sampling-model]] with finite
label set $A$ satisfying $0\notin A$, recorded law $\nu$ (a probability law
on $A\cup\{0\}$, with $0$ the distinct no-record label), and the declared
$N$-trial sampling model of clause (d)
of that definition; the identification of repetitions with that model is the
additional statistical assumption of clause (ii) of the preparation and
apparatus postulate P7 ([[post-nrqm-framework-preparation-and-apparatus]]).
Fix a preparation $\rho$, which may be a coherent preparation
$\rho_{\mathrm{coh}}(\varphi)$ or a which-path preparation
$\rho_{\mathrm{mix}}(w)$ of the declared model, so that its recorded law is the
law $\nu$ of [[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] and
[[pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning]]. Let
$(O_{1},\dots,O_{N})$ be the outcome sequence,
$S_{N}(a):=\#\{k:O_{k}=a\}$ and $F_{N}(a):=S_{N}(a)/N$ the empirical frequency
of $a\in A\cup\{0\}$. Assume the Axiom of Countable Choice
([[def-countable-choice]]). Then:

(a) *Concentration.* For every label $a$ and every $\varepsilon>0$,
$$\mathbb E\bigl[F_{N}(a)\bigr]=\nu(a),\qquad \operatorname{Var}\bigl(F_{N}(a)\bigr)=\frac{\nu(a)\bigl(1-\nu(a)\bigr)}{N},\qquad \mathbb P\bigl(|F_{N}(a)-\nu(a)|\ge\varepsilon\bigr)\le\frac{\nu(a)(1-\nu(a))}{N\varepsilon^{2}} .$$

(b) *Positive failure probability.* Let $C\subseteq(A\cup\{0\})^{N}$ be a
declared fringe criterion, and suppose there is a sequence
$(a_{1},\dots,a_{N})$ with $(a_{1},\dots,a_{N})\notin C$ and $\nu(a_{k})>0$ for
every $k$. Then the failure probability of the criterion is
$$\mathbb P\bigl((O_{1},\dots,O_{N})\notin C\bigr)\ge\prod_{k=1}^{N}\nu(a_{k})>0 .$$
In particular, if $\nu(a)>0$ for some label $a$, then every criterion that
rejects the constant sequence $(a,\dots,a)$ has failure probability at least
$\nu(a)^{N}>0$.

(c) *No discrimination between coincident laws.* If the model is admissible
at phase $0$ and the recorded coherent law of phase $0$ and the recorded
which-path law of weight $w_{*}$ coincide in the sense of clause (d) of
[[pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning]], then no
criterion whatsoever has different probability of acceptance under the two
declared preparations; in particular no finite sample distinguishes them with
certainty.

(d) *Scope.* Clauses (a)-(c) are conditional on the declared preparation,
detector and sampling models and the cited mathematics. The independence and
identical distribution of the trials are declared model assumptions, not
consequences of P1-P6; no failure probability, error rate, p-value, confidence
level, power, sample size or measured count is computed or asserted, and no
conclusion is drawn about any real apparatus. In particular the statements do
not assert that a coherent preparation must show a visible fringe pattern in a
finite sample, and do not assert that a sample without a visible pattern
falsifies the coherent model.

## Facts & Assumptions

**Given:** The declared preparation, detector and sampling models, with the recorded law $\nu$ on $A\cup\{0\}$; the outcome sequence $O_{1},\dots,O_{N}$ and the counts $S_{N}(a)$, $F_{N}(a)$; a declared criterion $C$ and a sequence $(a_{1},\dots,a_{N})$ as in (b); the Axiom of Countable Choice.

[F1] **Independent trials.** The random elements $O_{1},\dots,O_{N}$ are
mutually independent and identically distributed with
$\mathbb P(O_k=a)=\nu(a)$ for every $a\in A\cup\{0\}$
([[def-nrqm-interference-recorded-detector-and-sampling-model]] clause (d),
[[def-independence-of-finite-random-variables]]).

[F2] **Expectation, variance and concentration suppliers.** Expectation is the
integral against the probability measure; it is linear for integrable random
variables. For a square-integrable real variable $X$,
$\operatorname{Var}(X)=\mathbb E[(X-\mathbb E X)^2]$; variance adds across a
finite pairwise-independent family, and Chebyshev bounds
$\mathbb P(|X-\mathbb E X|\ge\varepsilon)\le\operatorname{Var}(X)/\varepsilon^2$
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[cor-expectation-linearity-monotonicity-and-modulus-bound]],
[[def-moments-variance-and-covariance]],
[[cor-variance-adds-for-pairwise-independent-random-variables]],
[[cor-chebyshev-inequality-for-random-variables]]).

[F3] **Recorded laws of the declared preparations.** The recorded probabilities
of the coherent and which-path preparations are those of
[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] clauses (a)-(b)
as read by [[pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning]]
clauses (a)-(b); its coincidence conclusion is used only when phase $0$ is
admissible.

## Proof

**Proof technique:** direct; reduce each label frequency to a sum of pairwise
independent Bernoulli indicators, compute its moments and apply Chebyshev, use
mutual independence for the selected-sequence event, and compare product laws
when the recorded one-trial laws coincide.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Indicator marginals and pairwise independence] Fix $a\in A\cup\{0\}$, [given, F1, algebra]
put $p=\nu(a)$, and define $X_k=\mathbf 1_{\{O_k=a\}}$. Then
$\mathbb P(X_k=1)=p$ and $\mathbb P(X_k=0)=1-p$, so $X_k$ is
Bernoulli$(p)$ by [[def-bernoulli-and-binomial-random-variables]]. For distinct
$i,j$, mutual independence of $O_i,O_j$, summed over the finite set of
outcomes other than $a$ when an indicator is zero, gives
$$\mathbb P(X_i=1,X_j=1)=p^2,\quad \mathbb P(X_i=1,X_j=0)=p(1-p),\quad \mathbb P(X_i=0,X_j=1)=p(1-p),\quad \mathbb P(X_i=0,X_j=0)=(1-p)^2.$$
Thus the $X_k$ are pairwise independent. [given, F1, algebra]

1.2 [Positive-probability sequences] Let [given, F1, algebra]
$E=\{O_k=a_k\text{ for every }k=1,\dots,N\}$. By mutual independence
[F1], $\mathbb P(E)=\prod_{k=1}^N\nu(a_k)>0$. Since the chosen sequence is
outside $C$, $E\subseteq\{(O_1,\dots,O_N)\notin C\}$, so the failure
probability is at least $\prod_k\nu(a_k)$. The constant sequence is a
special case. This proves (b). [given, F1, algebra]

2.1 [Frequency moments and concentration] Since [given, step 1.1, F2, algebra]
$F_N(a)=N^{-1}\sum_{k=1}^NX_k$, expectation linearity gives
$\mathbb E F_N(a)=p$. The two-point law gives
$\operatorname{Var}(X_k)=\mathbb E[(X_k-p)^2]=p(1-p)$. By [F2],
$$\operatorname{Var}(F_N(a))=N^{-2}\operatorname{Var}\left(\sum_{k=1}^NX_k\right)=\frac{p(1-p)}{N}.$$
Applying Chebyshev from [F2] with threshold $\varepsilon>0$ gives the bound
in (a). This proves (a). [given, step 1.1, F2, algebra]

3.1 [No discrimination] Under the coincidence hypothesis of (c), the [given, F1, F3, algebra, step 1.2, step 2.1]
recorded probabilities agree for each $a\in A$. Their no-record probabilities
also agree because $\nu(0)=1-\sum_{a\in A}\nu(a)$. For each sequence in the
finite set $(A\cup\{0\})^N$, its probability under the declared IID model is
the product of its $N$ one-trial probabilities; these products therefore agree
under the two preparations. Summing over any criterion $C$ shows equal
acceptance probabilities, proving (c). Steps 2.1 and 1.2 prove (a)-(b), and
(d) records that these are conditional model deductions, not empirical
results. [given, F1, F3, algebra, step 1.2, step 2.1] ∎

## Remarks

- **A null result is compatible with the coherent model.** By (b), for any
  criterion that would reject the outcome actually realized in some
  positive-probability sequence, failure has positive probability under the
  declared coherent model itself; a finite sample without a visible pattern is
  therefore not by itself a refutation.
- **A pattern is not a proof.** The same computation applies to the which-path
  model, and (c) shows that when the two recorded laws coincide no criterion
  distinguishes them. Agreement of a dataset with a declared model is
  evidence about the combined model, apparatus and sampling assumptions, not a
  proof of the model.
