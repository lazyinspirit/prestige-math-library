---
id: texp-nrqm-interference-finite-sample-fringe-failure
aliases: [nrqm-interference-finite-sample-fringe-failure]
kind: thought-experiment
domain: physics
title: "A finite sample can fail any nondegenerate fringe criterion with positive probability"
status: draft
origin: session
dependency_level: 12
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, def-nrqm-interference-recorded-detector-and-sampling-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning, post-nrqm-framework-preparation-and-apparatus, lem-nrqm-composites-chsh-and-finite-sampling-law, def-bernoulli-and-binomial-random-variables, def-independence-of-finite-random-variables, def-countable-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  def-nrqm-interference-recorded-detector-and-sampling-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  lem-nrqm-composites-chsh-and-finite-sampling-law: mathematical-premise
  def-bernoulli-and-binomial-random-variables: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A hypothetical finite-sampling analysis of the declared two-path arrangement: for a coherent or which-path preparation whose recorded law is fixed, and under the declared independent-and-identically-distributed $N$-trial sampling model, every declared fringe criterion that rejects at least one outcome sequence of positive probability fails with positive probability, and the empirical frequency of a label concentrates around its recorded probability. The item is a conditional consequence of the declared preparation and detector models, the declared sampling model in the sense of the preparation and apparatus postulate P7, and the cited mathematics. It asserts no measured counts, no p-value, no confidence level, no universal failure probability, and no empirical conclusion about nature; in particular, a finite sample without a visible fringe pattern is not a falsification of the coherent model, and a sample with a visible pattern is not a proof of it."
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
label set $A$, recorded law $\nu$ (a probability law on $A\cup\{0\}$, with $0$
the no-record label), and the declared $N$-trial sampling model of clause (d)
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

(c) *No discrimination between coincident laws.* If the recorded coherent law
of phase $0$ and the recorded which-path law of weight $w_{*}$ coincide in the
sense of clause (d) of
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

[F1] **Independent trials.** The random elements $O_{1},\dots,O_{N}$ are mutually independent and identically distributed with $\mathbb P(O_{k}=a)=\nu(a)$ for every $a\in A\cup\{0\}$ ([[def-nrqm-interference-recorded-detector-and-sampling-model]] clause (d), [[def-independence-of-finite-random-variables]]); a binomial$(N,p)$ variable is a sum of $N$ mutually independent Bernoulli$(p)$ variables ([[def-bernoulli-and-binomial-random-variables]]).

[F2] **Finite-sampling law.** For $N\ge1$, independent $\{1,\dots,m\}$-valued variables with probabilities $p_{j}$, every sequence $(j_{1},\dots,j_{N})$ with all $p_{j_{k}}>0$ has probability $\prod_{k}p_{j_{k}}>0$, and every event disjoint from it has probability at most $1-\prod_{k}p_{j_{k}}<1$; for $N\ge1$ and a binomial$(N,p)$ variable $S$ the frequency $S/N$ has $\mathbb E[S/N]=p$, $\operatorname{Var}(S/N)=p(1-p)/N$ and $\mathbb P(|S/N-p|\ge\varepsilon)\le p(1-p)/(N\varepsilon^{2})$ for every $\varepsilon>0$ ([[lem-nrqm-composites-chsh-and-finite-sampling-law]] clauses (b) and (c)).

[F3] **Recorded laws of the declared preparations.** The recorded probabilities of the coherent and which-path preparations are the laws of [[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] clauses (a) and (b) as read by [[pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning]] clauses (a) and (b), and if the coincidence relation of the latter clause (d) holds then the recorded coherent law of phase $0$ and the recorded which-path law of weight $w_{*}$ agree on every label.

## Proof

**Proof technique:** direct; identify the indicator variables of a fixed label as independent Bernoulli variables, apply the finite-sampling lemma for the concentration and positive-probability statements, and read the coincident-law statement off the declared laws.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Binomial marginals] Fix $a\in A\cup\{0\}$ and put $X_{k}:=\mathbf 1_{\{O_{k}=a\}}$. By [F1] the $X_{k}$ are mutually independent and identically distributed with $\mathbb P(X_{k}=1)=\nu(a)$ and $\mathbb P(X_{k}=0)=1-\nu(a)$, that is, Bernoulli$(\nu(a))$; hence $S_{N}(a)=\sum_{k=1}^{N}X_{k}$ is binomial$(N,\nu(a))$, and [F2] applied to $S=S_{N}(a)$ gives the three displayed formulas of (a). [given, F1, F2, algebra]

1.2 [Positive-probability sequences] By mutual independence [F1], $\mathbb P(O_{k}=a_{k}\text{ for every }k)=\prod_{k}\nu(a_{k})$, a product of positive numbers; the failure event $\{(O_{1},\dots,O_{N})\notin C\}$ contains the complementary event of this outcome and is disjoint from it, so [F2] bounds its probability below by $\prod_{k}\nu(a_{k})$; the constant sequence is the special case. This proves (b). [given, F1, F2, algebra]

2.1 [Conclusion] Under the coincidence hypothesis of (c), [F3] makes the two recorded laws equal as laws on $A\cup\{0\}$, so every event has the same probability under both preparations and no criterion has different acceptance probabilities; this proves (c). Together with steps 1.1 and 1.2 this establishes (a)-(c), and (d) records that the sampling model is a declared assumption and that no numerical failure probability, error rate or empirical conclusion is asserted. [step 1.1, step 1.2, F1, F2, F3, algebra] ∎

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
