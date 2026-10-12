---
id: pthm-nrqm-interference-coherent-and-mixture-detection-laws
aliases: [nrqm-interference-coherent-and-mixture-detection-laws]
kind: physics-theorem
domain: physics
title: "Coherent and which-path detection laws of the declared two-path model"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-observables-framework-observable-and-outcome-law, pthm-nrqm-kinematics-spin-s-outcome-laws, lem-nrqm-interference-component-cross-term-and-recorded-bin-laws, lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity, def-real-and-complex-inner-product-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  lem-nrqm-interference-component-cross-term-and-recorded-bin-laws: mathematical-premise
  lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
relations:
  tested_by: [exp-nrqm-interference-bach-electron-double-slit]
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The detection laws of the declared two-path preparation model of the massive spin-s model of the framework: the normalized coherent bin law with its amplitude cross term, the which-path (incoherent) bin law, and the criterion under which the two declared laws coincide on every bin. The statement is a conditional consequence of the state and observable postulates P1 and P2, the model postulates P5 and P6, the declared apparatus and preparation assignment in the sense of P7, and the cited mathematics. It asserts no which-path ontology, no entanglement or marker interaction, no detector response, no dynamics and no empirical result; the coherent and the which-path law are properties of two declared preparation models, and the identification of a concrete arrangement with either model is a tested identification with uncertainty."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3, printed pages 14-18 (PDF pages 17-21): the two-slit interference probability density, the cross term and the effect of path distinguishability"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6 and Section 1.4 printed page 15 (PDF page 23): amplitudes for alternative routes, the interference cross term, and coherent versus incoherent preparation"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2 in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]],
the kinematics and massive-particle model postulate P5 and the internal-factor
postulate P6 as read by
[[def-nrqm-interference-two-path-preparation-and-detection-model]], and the
preparation and apparatus discipline P7, and adopt the declared two-path
preparation model of that definition with path components
$\psi_{1},\psi_{2}\in H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$, relative phase
$\varphi\in\mathbb R$ and weight $w\in[0,1]$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Write $G(B)=M_{\mathbf 1_{B}}$ for the joint
position projection-valued measure of the model,
$\mu^{G}_{\rho}(B)=\operatorname{tr}(\rho G(B))$ for its outcome law
([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b)), and put
$$N:=\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2},\qquad c(B):=\operatorname{Re}\int_{B}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}dx,\qquad c:=c(\mathbb R^{3}).$$
Then:

(a) *Coherent law.* If the declared model is admissible at phase $\varphi$,
then for every Borel set $B\subseteq\mathbb R^{3}$
$$\mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}(B)=\frac{\displaystyle\int_{B}\|\psi_{1}(x)+e^{i\varphi}\psi_{2}(x)\|_{\mathbb C^{r}}^{2}\,dx}{\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}} ,$$
and the numerator expands as
$$\int_{B}\bigl(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}\bigr)dx+2\operatorname{Re}\Bigl(e^{-i\varphi}\int_{B}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}dx\Bigr),$$
with denominator $N+2\operatorname{Re}(e^{-i\varphi}c)$; in particular
$\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}>0$.

(b) *Which-path law.* For the declared weight $w\in[0,1]$ and every Borel set
$B\subseteq\mathbb R^{3}$,
$$\mu^{G}_{\rho_{\mathrm{mix}}(w)}(B)=w\,\frac{\displaystyle\int_{B}\|\psi_{1}\|^{2}\,dx}{\|\psi_{1}\|^{2}}+(1-w)\,\frac{\displaystyle\int_{B}\|\psi_{2}\|^{2}\,dx}{\|\psi_{2}\|^{2}} .$$

(c) *Coincidence criterion.* Let $w_{*}:=\|\psi_{1}\|^{2}/N$, so that
$\mu^{G}_{\rho_{\mathrm{mix}}(w_{*})}(B)=N^{-1}\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx$.
Then $\mu^{G}_{\rho_{\mathrm{coh}}(0)}(B)=\mu^{G}_{\rho_{\mathrm{mix}}(w_{*})}(B)$
for every Borel set $B$ if and only if
$$N\operatorname{Re}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=c\,\bigl(\|\psi_{1}(x)\|_{\mathbb C^{r}}^{2}+\|\psi_{2}(x)\|_{\mathbb C^{r}}^{2}\bigr)\qquad\text{for almost every }x .$$
In particular, if $\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=0$ for
almost every $x$, then the coherent law of phase $0$ and the which-path law of
weight $w_{*}$ agree on every bin; and if $c=0$, then they agree if and only if
$\operatorname{Re}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=0$ for
almost every $x$.

(d) *Scope.* Clauses (a)-(c) are conditional on P1, P2, P5, P6 and the
declared model, and identify the laws of exactly two declared preparations.
They assert no path ontology, use no entangled marker state and no reduced
state, assert no detector response, no loss, no sampling model, no dynamics and
no empirical result.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P5, P6 and P7 read through the cited items; the Axiom of Countable Choice and the Axiom of Choice; the declared model data $\psi_{1},\psi_{2},\varphi,w$ with $\psi_{1},\psi_{2}\ne0$ and, where claimed, $\psi_{1}+e^{i\varphi}\psi_{2}\ne0$; Borel sets $B\subseteq\mathbb R^{3}$.

[F1] **Position law of the model.** For a pure preparation of a unit vector $\psi$ the joint position law of the model is $\mu^{G}_{\psi}(B)=\|G(B)\psi\|^{2}=\int_{B}\|\psi(x)\|_{\mathbb C^{r}}^{2}dx$, a probability measure on the Borel sets, and it depends only on the ray $[\psi]$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clauses (b) and (e), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[F2] **Outcome law and affinity.** The outcome law of a preparation $\rho$ is $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, it is affine in the preparation, and a finite real convex combination of states is a state ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), [[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]], [[def-nrqm-interference-two-path-preparation-and-detection-model]] clause (d)).

[F3] **Declared preparations.** The coherent preparation is the pure preparation of the nonzero vector $\psi_{1}+e^{i\varphi}\psi_{2}$, and the which-path preparation is $w\widehat\rho(\psi_{1})+(1-w)\widehat\rho(\psi_{2})$ ([[def-nrqm-interference-two-path-preparation-and-detection-model]] clauses (c) and (d)).

[F4] **Inner-product and law package.** For $a,b\in L^{2}(\mathbb R^{3};\mathbb C^{r})$ the pointwise identity $\|a+b\|^{2}=\|a\|^{2}+\|b\|^{2}+2\operatorname{Re}\langle a,b\rangle$ holds almost everywhere and integrally over every Borel set, the coherent law $p_{\mathrm{coh}}(B)=\|a+b\|^{-2}\int_{B}\|a+b\|^{2}dx$ and the incoherent law with norm weights are probability measures, and the coincidence criterion of [[lem-nrqm-interference-component-cross-term-and-recorded-bin-laws]] clauses (a), (b), (c), (e) holds; the pairing is linear in the first argument and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct; apply the model's position law to the declared coherent and which-path preparations, use affinity for the mixture, expand the cross term with the math lemma and read off the coincidence criterion.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Coherent law] Assume admissibility. Put $u:=(\psi_{1}+e^{i\varphi}\psi_{2})/\|\psi_{1}+e^{i\varphi}\psi_{2}\|$, a unit vector, so that $\rho_{\mathrm{coh}}(\varphi)=\widehat\rho(u)$ by [F3]. [F1] gives $\mu^{G}_{u}(B)=\int_{B}\|u(x)\|^{2}dx$; substituting $u$ and using $\|u\|=1$ gives the formula of (a) for the law and the identity $\|u(x)\|^{2}=\|\psi_{1}(x)+e^{i\varphi}\psi_{2}(x)\|^{2}/\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}$. [given, F1, F3, algebra]

1.2 [Which-path law] By [F2] and [F3], $\mu^{G}_{\rho_{\mathrm{mix}}(w)}(B)=w\,\mu^{G}_{\widehat\rho(\psi_{1})}(B)+(1-w)\,\mu^{G}_{\widehat\rho(\psi_{2})}(B)$; applying [F1] to the normalized vectors $\psi_{1}/\|\psi_{1}\|$ and $\psi_{2}/\|\psi_{2}\|$ gives $\mu^{G}_{\widehat\rho(\psi_{j})}(B)=\int_{B}\|\psi_{j}\|^{2}dx/\|\psi_{j}\|^{2}$ for $j=1,2$, which is (b). [given, F1, F2, F3, algebra]

1.3 [Cross-term expansion] Apply [F4] with $a=\psi_{1}$ and $b=e^{i\varphi}\psi_{2}$: $\int_{B}\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}dx=\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx+2\operatorname{Re}\langle\psi_{1},e^{i\varphi}\psi_{2}\rangle_{B}$; by conjugate-linearity in the second argument, $\langle\psi_{1},e^{i\varphi}\psi_{2}\rangle_{B}=e^{-i\varphi}\int_{B}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}dx$, and at $B=\mathbb R^{3}$ the denominator is $N+2\operatorname{Re}(e^{-i\varphi}c)$ with $N>0$, so it is positive. This is the expansion of (a). [given, F4, algebra]

2.1 [Coincidence criterion] Apply [F4] to $a=\psi_{1}$, $b=\psi_{2}$: the criterion of the math lemma states that $p_{\mathrm{coh}}(B)=p_{*}(B)$ for every Borel $B$ with $p_{*}(B)=N^{-1}\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx$ if and only if the displayed almost-everywhere relation holds. By step 1.1 with $\varphi=0$ the framework coherent law equals $p_{\mathrm{coh}}$, and by step 1.2 with $w=w_{*}$ the framework which-path law equals $p_{*}$; the criterion therefore transfers to the framework laws, and the two special cases follow from the same relation. This proves (c), and steps 1.1-1.3 prove (a) and (b); clause (d) records the scope. [step 1.1, step 1.2, step 1.3, F2, F4, algebra] ∎

## Remarks

- **The cross term is physical relative phase.** A change of the relative phase
  $\varphi$ rotates the cross term $e^{-i\varphi}c(B)$ without changing the two
  path densities; a common phase of $\psi_{1}$ and $\psi_{2}$ is immaterial.
- **What the theorem does not claim.** It does not assert that the coherent
  preparation is "more correct" than the which-path preparation, that a
  particle took a particular path, or that any apparatus realizes either
  declaration; and it makes no claim about visibility loss by entanglement or
  path marking, which belongs to the entanglement model of the category.
