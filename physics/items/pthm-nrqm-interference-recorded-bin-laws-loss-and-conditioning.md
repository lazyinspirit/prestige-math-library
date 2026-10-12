---
id: pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning
aliases: [nrqm-interference-recorded-bin-laws-loss-and-conditioning]
kind: physics-theorem
domain: physics
title: "Recorded bin laws, loss and conditioning of the declared two-path detector"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, def-nrqm-interference-recorded-detector-and-sampling-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, post-nrqm-framework-observable-and-probability, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-hilbert-space-adjoint, def-real-and-complex-inner-product-space, cor-cauchy-schwarz-inequality-for-l-two, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-positive-square-root, def-probability-measure, def-measure, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  def-nrqm-interference-recorded-detector-and-sampling-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
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
physical_scope: "The recorded-outcome laws of the declared finite recorded detector of the pair in the coherent and which-path preparations of the declared two-path model, the no-record mass carried by lost events, the conditioned recorded law, the reduction of indicator weights to ideal position bins, and a sufficient condition under which the recorded coherent and which-path laws agree, conditional on phase-zero admissibility when that phase is compared. The statement is a conditional consequence of P2 and the declared preparation and detector models plus the cited mathematics and local calculation; it asserts no detector realization, no calibration, no counts and no empirical result, and identification of a concrete apparatus with the declared effects or sampling model carries uncertainty under P7."
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
label set $A$ satisfying $0\notin A$, recorded weights $w_{a}$ and effects
$F_{a}=M_{w_{a}}$, no-record
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
the declared model is admissible at phase $0$ and if
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

[F3] **Rank-one pairing.** For unit $u$ and bounded self-adjoint multiplication
operator $M_W$, the normalized rank-one preparation is $P_uf=\langle f,u\rangle u$.
Its product satisfies $P_uM_Wf=\langle f,M_Wu\rangle u$, a one-term nuclear
representation, so its trace is $\langle u,M_Wu\rangle$ by the published
trace formula ([[def-trace-class-operator]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F4] **Trace calculus.** The trace is linear in its trace-class variable and the trace-class operators form a two-sided ideal, so $\operatorname{tr}(\rho(F+G))=\operatorname{tr}(\rho F)+\operatorname{tr}(\rho G)$ for a preparation $\rho$ and bounded $F,G$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F5] **Weighted bin identity.** For $a,b\in L^2(\mathbb R^3;\mathbb C^r)$ and
measurable $0\le W\le1$, choose measurable representatives and expand the
finite-dimensional norm pointwise. This gives
$\int W\|a+b\|^2dx=\int W(\|a\|^2+\|b\|^2)dx+2\operatorname{Re}\int W\langle a,b\rangle dx$.
The cross term is integrable because
$W|\langle a,b\rangle|\le\|a\|\|b\|$ and Cauchy--Schwarz gives
$\int\|a\|\|b\|\le\|a\|_2\|b\|_2$
([[def-real-and-complex-inner-product-space]],
[[cor-cauchy-schwarz-inequality-for-l-two]]).

[F6] **Declared preparation laws.** The coherent and which-path laws are those
of [[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] clauses
(a)-(b); its clause (c) coincidence relation is used only when the model is
admissible at phase $0$.

[F7] **Positive square root.** Assume the Axiom of Choice. Every bounded positive operator $T$ on a nonzero complex Hilbert space has a bounded positive square root $T^{1/2}$ with $T^{1/2}T^{1/2}=T$; if $Tx\ne0$ then $T^{1/2}x\ne0$, so $\langle Tx,x\rangle=\|T^{1/2}x\|^{2}>0$ ([[thm-positive-square-root]]).

[F8] **Probability measures on a finite set.** A probability measure on a $\sigma$-algebra $\mathcal A$ is a measure with total mass one ([[def-probability-measure]], [[def-measure]]); on a finite set with the $\sigma$-algebra of all subsets, a nonnegative function of the atoms whose values sum to one extends uniquely to a probability measure, because finite additivity is read off the atoms and every countably disjoint family has only finitely many nonempty members.

## Proof

**Proof technique:** direct; compute the trace pairing of a pure preparation
with a multiplication effect by its one-term nuclear representation,
substitute the declared preparations and use trace linearity for the mixture,
read loss off the completed effect family, and integrate the weighted
cross-term identity.

**Given:** The data of the statement and [F1]-[F8].

1.1 [Pure-state pairing] Let $\psi\ne0$, set $u=\psi/\|\psi\|$, and let [given, F3, algebra]
$W$ be a measurable $[0,1]$-valued weight. Since $M_W$ is self-adjoint,
$$\widehat\rho(\psi)M_Wf=P_uM_Wf=\langle M_Wf,u\rangle u=\langle f,M_Wu\rangle u=T_{u,M_Wu}f.$$
This is a one-term nuclear representation, so [F3] gives
$$\operatorname{tr}(\widehat\rho(\psi)M_W)=\langle u,M_Wu\rangle=\frac{\int_{\mathbb R^3}W(x)\|\psi(x)\|^2dx}{\|\psi\|^2}.$$ [given, F3, algebra]

2.1 [Recorded laws] For the coherent preparation, [F2] and step 1.1 with [given, F2, F4, F5, step 1.1, algebra]
$\psi=\psi_1+e^{i\varphi}\psi_2$ and $W=w_a$ give
$$\nu_{\mathrm{coh}(\varphi)}(a)=\frac{\int w_a\|\psi_1+e^{i\varphi}\psi_2\|^2dx}{\|\psi_1+e^{i\varphi}\psi_2\|^2};$$
substituting [F5] gives the stated expansion. For the which-path preparation,
[F4] gives
$$\operatorname{tr}(\rho_{\mathrm{mix}(w)}F_a)=w\operatorname{tr}(\widehat\rho(\psi_1)F_a)+(1-w)\operatorname{tr}(\widehat\rho(\psi_2)F_a),$$
and step 1.1 with $\psi=\psi_j$ gives (b). [given, F2, F4, F5, step 1.1, algebra]

2.2 [Loss] The completed family $(F_a)_{a\in A}\cup\{F_0\}$ has nonnegative [given, F1, F2, F7, step 1.1, algebra]
bounded effects summing to the identity by [F2]. Thus [F1] gives
$\nu(a)\ge0$, $\nu(0)\ge0$ and $\nu(0)+\sum_a\nu(a)=1$, whence
$\nu(0)=1-\nu(A)$ and $\nu(A)\le1$. If $\sum_aw_a=1$ almost everywhere,
then $F_0=0$ and $\nu(0)=0$ for every preparation. Conversely, if $F_0\ne0$,
choose $x$ with $F_0x\ne0$. By [F7], $F_0^{1/2}x\ne0$ and
$\langle F_0x,x\rangle=\|F_0^{1/2}x\|^2>0$. The pure preparation of
$\psi=x/\|x\|$ then has
$\nu(0)=\operatorname{tr}(\widehat\rho(\psi)F_0)=\|x\|^{-2}\langle F_0x,x\rangle>0$
by step 1.1. This proves the unconditioned loss claims of (c). [given, F1, F2, F7, step 1.1, algebra]

3.1 [Conditioning] When $\nu(A)>0$, the recorded probabilities of step 2.1 [given, step 2.1, F2, F8, algebra]
are nonnegative and sum to $\nu(A)$, so the finite-set function
$\bar\nu(a)=\nu(a)/\nu(A)$ is nonnegative and sums to one. It therefore
extends to a probability measure on $A$ by [F8]. This completes (c). [given, step 2.1, F2, F8, algebra]

4.1 [Ideal bins and coincidence] If $w_a=\mathbf 1_{B_a}$, then [step 2.1, step 2.2, step 3.1, F5, F6, algebra]
$F_a=G(B_a)$ and $\nu(a)=\operatorname{tr}(\rho G(B_a))=\mu^G_\rho(B_a)$
by P2, the ideal bin probability. Under the phase-zero admissibility and
coincidence hypotheses of (d), multiply its almost-everywhere relation by
$w_a$ and integrate. The weighted terms are integrable by [F5], so
$$N\int w_a\operatorname{Re}\langle\psi_1,\psi_2\rangle dx=c\int w_a(\|\psi_1\|^2+\|\psi_2\|^2)dx.$$
Substitution into the coherent formula of step 2.1 at phase $0$ and the
which-path formula at weight $w_*$ gives
$\nu_{\mathrm{coh}(0)}(a)=\nu_{\mathrm{mix}(w_*)}(a)$, since
$w_*\|\psi_1\|^{-2}=N^{-1}$. This proves (d); steps 2.1-3.1 prove (a)-(c),
and (e) records the scope. [step 2.1, step 2.2, step 3.1, F5, F6, algebra] ∎

## Remarks

- **Where the response enters.** The recorded weights $w_{a}$ carry the declared
  finite resolution and efficiency of the model; the bin partition of the ideal
  detector is the special case of indicator weights. No value of any weight is
  asserted, and no apparatus realization is claimed.
- **Conditioning is not a state update.** The conditioned law is a statistical
  operation on the recorded sample; no claim is made about the post-detection
  state of the particle, and destructive or absorbing detection channels are
  outside the model's declared effects.
