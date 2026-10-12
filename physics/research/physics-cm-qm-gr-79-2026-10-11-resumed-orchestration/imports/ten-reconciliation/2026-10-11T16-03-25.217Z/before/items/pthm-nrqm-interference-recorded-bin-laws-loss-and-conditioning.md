---
id: pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning
aliases: [nrqm-interference-recorded-bin-laws-loss-and-conditioning]
kind: physics-theorem
domain: physics
title: "Recorded bin laws, loss and conditioning of the declared two-path detector"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, def-nrqm-interference-recorded-detector-and-sampling-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, post-nrqm-framework-observable-and-probability, lem-nrqm-interference-component-cross-term-and-recorded-bin-laws, lem-nrqm-composites-rank-one-operator-calculus, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-positive-square-root, def-probability-measure, def-measure, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  def-nrqm-interference-recorded-detector-and-sampling-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  post-nrqm-framework-observable-and-probability: physical-assumption
  lem-nrqm-interference-component-cross-term-and-recorded-bin-laws: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-positive-square-root: mathematical-premise
  def-probability-measure: mathematical-premise
  def-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The recorded-outcome laws of the declared finite recorded detector of the pair in the coherent and which-path preparations of the declared two-path model, the no-record mass carried by lost events, the conditioned recorded law, the reduction of indicator weights to ideal position bins, and a sufficient condition under which the recorded coherent and which-path laws agree. The statement is a conditional consequence of the observable and probability postulate P2, the declared preparation and detector models, and the cited mathematics; it asserts no detector realization, no calibration, no counts and no empirical result, and the identification of a concrete apparatus with the declared effects or with the declared sampling model carries uncertainty under the preparation and apparatus postulate P7."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4 printed page 15: finite-resolution ideal measurements, outcome probabilities and the response of an apparatus"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2, printed pages 3-14 (PDF pages 6-17): detection records and the probability law of the wave function"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the observable and probability postulate P2 in its unsharp finite-outcome
reading, the declared two-path preparation model
[[def-nrqm-interference-two-path-preparation-and-detection-model]] with path
components $\psi_{1},\psi_{2}\ne0$, relative phase $\varphi$ and weight $w$, and
the declared recorded detector
[[def-nrqm-interference-recorded-detector-and-sampling-model]] with finite
label set $A$, recorded weights $w_{a}$ and effects $F_{a}=M_{w_{a}}$, no-record
effect $F_{0}=I-\sum_{a}F_{a}$, recorded probabilities $\nu(a)$ and recorded-event
mass $\nu(A)=\sum_{a\in A}\nu(a)$
([[post-nrqm-framework-observable-and-probability]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]), the choice hypotheses of the cited trace-class,
rank-one and square-root suppliers. Let
$\rho_{\mathrm{coh}}(\varphi)$ and $\rho_{\mathrm{mix}}(w)$ be the declared
coherent and which-path preparations and put $N:=\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}$,
$c:=\operatorname{Re}\langle\psi_{1},\psi_{2}\rangle$ and
$w_{*}:=\|\psi_{1}\|^{2}/N$. Then:

(a) *Recorded coherent law.* If the model is admissible at phase $\varphi$,
then for every label $a\in A$
$$\nu_{\mathrm{coh}(\varphi)}(a)=\frac{\displaystyle\int_{\mathbb R^{3}}w_{a}(x)\,\|\psi_{1}(x)+e^{i\varphi}\psi_{2}(x)\|_{\mathbb C^{r}}^{2}\,dx}{\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}} ,$$
and the numerator equals
$$\int_{\mathbb R^{3}}w_{a}\bigl(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}\bigr)dx+2\operatorname{Re}\Bigl(e^{-i\varphi}\int_{\mathbb R^{3}}w_{a}\langle\psi_{1},\psi_{2}\rangle_{\mathbb C^{r}}dx\Bigr).$$

(b) *Recorded which-path law.* For the declared weight $w\in[0,1]$ and every
$a\in A$,
$$\nu_{\mathrm{mix}(w)}(a)=w\,\frac{\displaystyle\int_{\mathbb R^{3}}w_{a}\|\psi_{1}\|^{2}dx}{\|\psi_{1}\|^{2}}+(1-w)\,\frac{\displaystyle\int_{\mathbb R^{3}}w_{a}\|\psi_{2}\|^{2}dx}{\|\psi_{2}\|^{2}} .$$

(c) *Loss.* The no-record probability is
$\nu(0)=1-\nu(A)=\operatorname{tr}(\rho F_{0})\ge0$, so $\nu(A)\le1$. If
$\sum_{a}w_{a}=1$ almost everywhere, then $F_{0}=0$ and $\nu(0)=0$ for every
preparation; if $F_{0}\ne0$, then there is a declared pure preparation with
$\nu(0)>0$. When $\nu(A)>0$, the conditioned recorded law
$\bar\nu(a)=\nu(a)/\nu(A)$ is a probability measure on $A$.

(d) *Ideal bins and coincidence.* If $w_{a}=\mathbf 1_{B_{a}}$ for a declared
ideal detector $(B_{a})_{a=1}^{m}$, then
$\nu(a)=\mu^{G}_{\rho}(B_{a})$ is the ideal bin probability of
[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]]. Moreover, if
the almost-everywhere relation
$$N\operatorname{Re}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=c\,\bigl(\|\psi_{1}(x)\|_{\mathbb C^{r}}^{2}+\|\psi_{2}(x)\|_{\mathbb C^{r}}^{2}\bigr)$$
of clause (c) of that theorem holds, then the recorded coherent law of phase
$0$ and the recorded which-path law of weight $w_{*}$ agree, $\nu_{\mathrm{coh}(0)}(a)=\nu_{\mathrm{mix}(w_{*})}(a)$,
for every label $a$ of every declared recorded detector.

(e) *Scope.* Clauses (a)-(d) are conditional on P2, the declared preparation
and detector models and the cited mathematics; they assert no calibration, no
resolution, background or efficiency value, no state update, no counts and no
empirical result, and the claim that a concrete apparatus realizes the declared
effects is a tested identification with uncertainty.

## Facts & Assumptions

**Given:** The postulates and declared models read as in the statement; the Axiom of Countable Choice and the Axiom of Choice; labels $a\in A$; preparations $\rho_{\mathrm{coh}}(\varphi)$ and $\rho_{\mathrm{mix}}(w)$; weights $w_{a}$ and effects $F_{a}=M_{w_{a}}$, $F_{0}=I-\sum_{a}F_{a}$; the constants $N,c,w_{*}$.

[F1] **Unsharp finite outcomes.** Clause (iv) of P2 states that a finite-resolution apparatus with finitely many channels is described, when the idealization uses bounded effects, by a finite family $(F_{a})_{a=1}^{p}$ of bounded operators with $0\le F_{a}\le I$ in the quadratic-form order and $\sum_{a}F_{a}=I$, the outcome probabilities being $p_{a}=\operatorname{tr}(\rho F_{a})\ge0$ with $\sum_{a}p_{a}=1$ ([[post-nrqm-framework-observable-and-probability]] clause (iv)).

[F2] **Declared recorded detector.** The recorded weights $w_{a}$ are measurable $[0,1]$-valued with $\sum_{a}w_{a}\le1$ almost everywhere, the effects are $F_{a}=M_{w_{a}}$ and $F_{0}=I-\sum_{a}F_{a}$ with $0\le F_{a},F_{0}\le I$ and $\sum_{a}F_{a}+F_{0}=I$, the recorded probabilities are $\nu(a)=\operatorname{tr}(\rho F_{a})$ and $\nu(0)=\operatorname{tr}(\rho F_{0})=1-\sum_{a}\nu(a)$, the recorded-event mass is $\nu(A)=\sum_{a}\nu(a)$, and the conditioned recorded law is $\bar\nu(a)=\nu(a)/\nu(A)$ when $\nu(A)>0$ ([[def-nrqm-interference-recorded-detector-and-sampling-model]] clauses (a)-(c)). In particular $\sum_{a}w_{a}=1$ almost everywhere exactly when $F_{0}=0$.

[F3] **Rank-one pairing.** For $u,v$ in a complex Hilbert space, $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, and for bounded $B$ one has $T_{u,v}B=T_{u,B^{*}v}$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b) and (d)).

[F4] **Trace calculus.** The trace is linear in its trace-class variable and the trace-class operators form a two-sided ideal, so $\operatorname{tr}(\rho(F+G))=\operatorname{tr}(\rho F)+\operatorname{tr}(\rho G)$ for a preparation $\rho$ and bounded $F,G$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F5] **Weighted bin laws.** For $a,b\in L^{2}(\mathbb R^{3};\mathbb C^{r})$ and measurable $0\le W\le1$ one has $\int W\|a+b\|^{2}dx=\int W(\|a\|^{2}+\|b\|^{2})dx+2\operatorname{Re}\int W\langle a,b\rangle_{\mathbb C^{r}}dx$ by the pointwise and integrated cross-term identity of [[lem-nrqm-interference-component-cross-term-and-recorded-bin-laws]] clause (a); and for a probability measure $\mu$ and weights $0\le W_{a}\le1$ with $\sum_{a}W_{a}\le1$ the numbers $\int W_{a}d\mu$ are nonnegative with sum at most one, the conditioning statement holding when the sum is positive ([[lem-nrqm-interference-component-cross-term-and-recorded-bin-laws]] clause (d)).

[F6] **Declared preparation laws.** For the declared preparations, $\mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}(B)=\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{-2}\int_{B}\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}dx$ and $\mu^{G}_{\rho_{\mathrm{mix}}(w)}(B)=w\|\psi_{1}\|^{-2}\int_{B}\|\psi_{1}\|^{2}dx+(1-w)\|\psi_{2}\|^{-2}\int_{B}\|\psi_{2}\|^{2}dx$; the ideal bin probability is $\mu^{G}_{\rho}(B_{a})$ and the coincidence relation displayed in the statement holds exactly when the coherent law of phase $0$ and the which-path law of weight $w_{*}$ agree on every bin ([[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] clauses (a)-(c)).

[F7] **Positive square root.** Assume the Axiom of Choice. Every bounded positive operator $T$ on a nonzero complex Hilbert space has a bounded positive square root $T^{1/2}$ with $T^{1/2}T^{1/2}=T$; if $Tx\ne0$ then $T^{1/2}x\ne0$, so $\langle Tx,x\rangle=\|T^{1/2}x\|^{2}>0$ ([[thm-positive-square-root]]).

[F8] **Probability measures on a finite set.** A probability measure on a $\sigma$-algebra $\mathcal A$ is a measure with total mass one ([[def-probability-measure]], [[def-measure]]); on a finite set with the $\sigma$-algebra of all subsets, a nonnegative function of the atoms whose values sum to one extends uniquely to a probability measure, because finite additivity is read off the atoms and every countably disjoint family has only finitely many nonempty members.

## Proof

**Proof technique:** direct; compute the trace pairing of a pure preparation with a multiplication effect, substitute the declared preparations and use trace linearity for the mixture, read loss off the completed effect family, and expand the weighted cross term to transfer the coincidence relation.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Pure-state pairing] Let $\psi\ne0$ and let $W$ be a measurable $[0,1]$-valued weight with effect $M_{W}$. Since the normalized rank-one operator of $\psi$ is $\widehat\rho(\psi)=T_{\psi,\psi}/\|\psi\|^{2}$, [F3] with $B=M_{W}$ gives $T_{\psi,\psi}M_{W}=T_{\psi,M_{W}\psi}$ (the effect is self-adjoint), so $\operatorname{tr}(\widehat\rho(\psi)M_{W})=\operatorname{tr}(T_{\psi,M_{W}\psi})/\|\psi\|^{2}=\langle\psi,M_{W}\psi\rangle/\|\psi\|^{2}=\int_{\mathbb R^{3}}W\|\psi\|^{2}dx/\|\psi\|^{2}$. [given, F3, algebra]

2.1 [Recorded laws] For the coherent preparation, [F2] and step 1.1 with $\psi=\psi_{1}+e^{i\varphi}\psi_{2}$ and $W=w_{a}$ give $\nu_{\mathrm{coh}(\varphi)}(a)=\int w_{a}\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}dx/\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}$; substituting the weighted identity of [F5] gives the stated expansion. For the which-path preparation, [F4] gives $\operatorname{tr}(\rho_{\mathrm{mix}(w)}F_{a})=w\operatorname{tr}(\widehat\rho(\psi_{1})F_{a})+(1-w)\operatorname{tr}(\widehat\rho(\psi_{2})F_{a})$, and step 1.1 with $\psi=\psi_{j}$ gives the stated formula. This proves (a) and (b). [given, F2, F4, F5, step 1.1, algebra]

2.2 [Loss] The completed family $(F_{a})_{a\in A}\cup\{F_{0}\}$ has nonnegative bounded effects summing to the identity by [F2], so [F1] gives $\nu(a)=\operatorname{tr}(\rho F_{a})\ge0$, $\nu(0)=\operatorname{tr}(\rho F_{0})\ge0$ and $\nu(0)+\sum_{a}\nu(a)=1$; hence $\nu(0)=1-\nu(A)$ and $\nu(A)\le1$, and if $\sum_{a}w_{a}=1$ almost everywhere then $F_{0}=0$ by [F2] and $\nu(0)=0$ for every preparation. Conversely assume $F_{0}\ne0$; then there is $x\in H_{s}$ with $F_{0}x\ne0$, and [F7] applied to the bounded positive operator $F_{0}$ gives $F_{0}^{1/2}x\ne0$ with $\langle F_{0}x,x\rangle=\|F_{0}^{1/2}x\|^{2}>0$; the pure preparation of the unit vector $\psi:=x/\|x\|$ then has $\nu(0)=\operatorname{tr}(\widehat\rho(\psi)F_{0})=\langle F_{0}\psi,\psi\rangle=\|x\|^{-2}\langle F_{0}x,x\rangle>0$ by step 1.1. This proves (c) up to conditioning. [given, F1, F2, F7, step 1.1, algebra]

3.1 [Conditioning] When $\nu(A)>0$, the recorded probabilities $\nu(a)$ of step 2.1 are nonnegative and sum to the positive number $\nu(A)$ by [F2], so dividing by $\nu(A)$ gives nonnegative numbers $\bar\nu(a)$ with $\sum_{a}\bar\nu(a)=1$; reading $\bar\nu$ as a set function on the finite set $A$ with its $\sigma$-algebra of all subsets, [F8] exhibits it as a probability measure on $A$. This completes (c). [given, step 2.1, F2, F8, algebra]

4.1 [Ideal bins and coincidence] For $w_{a}=\mathbf 1_{B_{a}}$ the effect is the position projection $F_{a}=G(B_{a})$ of the declared model, so $\nu(a)=\operatorname{tr}(\rho G(B_{a}))=\mu^{G}_{\rho}(B_{a})$ by [F6], the ideal bin probability. For the coincidence clause, multiply the almost-everywhere relation of the statement by $w_{a}$ and integrate: the weighted density $w_{a}[N\operatorname{Re}\langle\psi_{1},\psi_{2}\rangle-c(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})]$ is integrable by [F5] and vanishes almost everywhere, so $N\int w_{a}\operatorname{Re}\langle\psi_{1},\psi_{2}\rangle dx=c\int w_{a}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx$ for every label; substituting into the formula of step 2.1 with $\varphi=0$ and into the formula of step 2.1 with $w=w_{*}$ gives $\nu_{\mathrm{coh}(0)}(a)=\nu_{\mathrm{mix}(w_{*})}(a)$ for every $a$, since $w_{*}\|\psi_{1}\|^{-2}=N^{-1}$. This proves (d), and (e) records the scope. [step 2.1, step 2.2, step 3.1, F5, F6, algebra] ∎

## Remarks

- **Where the response enters.** The recorded weights $w_{a}$ carry the declared
  finite resolution and efficiency of the model; the bin partition of the ideal
  detector is the special case of indicator weights. No value of any weight is
  asserted, and no apparatus realization is claimed.
- **Conditioning is not a state update.** The conditioned law is a statistical
  operation on the recorded sample; no claim is made about the post-detection
  state of the particle, and destructive or absorbing detection channels are
  outside the model's declared effects.
