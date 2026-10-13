---
id: pthm-nrqm-interference-coherent-and-mixture-detection-laws
aliases: [ nrqm-interference-coherent-and-mixture-detection-laws ]
kind: physics-theorem
domain: physics
title: "Coherent and which-path detection laws of the declared two-path model"
status: draft
origin: session
dependency_level: 10
deps:
  [
    def-nrqm-interference-two-path-preparation-and-detection-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    def-trace-class-operator,
    thm-trace-is-absolutely-convergent-and-basis-independent,
    thm-trace-class-is-a-two-sided-banach-operator-ideal,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-real-and-complex-inner-product-space,
    cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
relations:
  tested_by: [ exp-nrqm-interference-bach-electron-double-slit ]
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The detection laws of the declared two-path preparation model
  of the massive spin-s model of the framework: the normalized coherent bin law
  with its amplitude cross term, the which-path (incoherent) bin law, and the
  criterion under which the two declared laws coincide on every bin, with the
  phase-zero criterion conditional on the coherent preparation being admissible
  at phase zero. The statement is a conditional consequence of P1, P2, P5 and
  P6, the declared apparatus and preparation assignment in the sense of P7, and
  the cited published mathematics plus the local calculations in its proof. It
  asserts no which-path ontology, no entanglement or marker interaction, no
  detector response, no dynamics and no empirical result; the coherent and the
  which-path law are properties of two declared preparation models, and the
  identification of a concrete arrangement with either model is a tested
  identification with uncertainty."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3,
        printed pages 14-18 (PDF pages 17-21): the two-slit interference
        probability density, the cross term and the effect of path
        distinguishability"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2
        printed pages 5-6 and Section 1.4 printed page 15 (PDF page 23):
        amplitudes for alternative routes, the interference cross term, and
        coherent versus incoherent preparation"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5 and the
internal-factor postulate P6, as read by
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
[[def-axiom-of-choice]]). Let $G(B)=M_{\mathbf 1_{B}}$ be the joint position
PVM constructed in clause (a) of
[[def-nrqm-interference-two-path-preparation-and-detection-model]], and read
its outcome law by P2 as $\mu^{G}_{\rho}(B)=\operatorname{tr}(\rho G(B))$
([[post-nrqm-framework-observable-and-probability]]). Put
$$N:=\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2},\qquad Z(B):=\int_{B}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}dx,\qquad Z:=Z(\mathbb R^{3}),\qquad c(B):=\operatorname{Re}Z(B),\qquad c:=c(\mathbb R^{3}).$$
Then:

(a) *Coherent law.* If the declared model is admissible at phase $\varphi$,
then for every Borel set $B\subseteq\mathbb R^{3}$
$$\mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}(B)=\frac{\displaystyle\int_{B}\|\psi_{1}(x)+e^{i\varphi}\psi_{2}(x)\|_{\mathbb C^{r}}^{2}\,dx}{\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}} ,$$
and the numerator expands as
$$\int_{B}\bigl(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2}\bigr)dx+2\operatorname{Re}\Bigl(e^{-i\varphi}\int_{B}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}dx\Bigr),$$
with denominator $N+2\operatorname{Re}(e^{-i\varphi}Z)$; in particular
$\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{2}>0$.

(b) *Which-path law.* For the declared weight $w\in[0,1]$ and every Borel set
$B\subseteq\mathbb R^{3}$,
$$\mu^{G}_{\rho_{\mathrm{mix}}(w)}(B)=w\,\frac{\displaystyle\int_{B}\|\psi_{1}\|^{2}\,dx}{\|\psi_{1}\|^{2}}+(1-w)\,\frac{\displaystyle\int_{B}\|\psi_{2}\|^{2}\,dx}{\|\psi_{2}\|^{2}} .$$

(c) *Coincidence criterion.* Let $w_{*}:=\|\psi_{1}\|^{2}/N$, so that
$\mu^{G}_{\rho_{\mathrm{mix}}(w_{*})}(B)=N^{-1}\int_{B}(\|\psi_{1}\|^{2}+\|\psi_{2}\|^{2})dx$.
If the declared model is admissible at phase $0$, then
$\mu^{G}_{\rho_{\mathrm{coh}}(0)}(B)=\mu^{G}_{\rho_{\mathrm{mix}}(w_{*})}(B)$
for every Borel set $B$ if and only if
$$N\operatorname{Re}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=c\,\bigl(\|\psi_{1}(x)\|_{\mathbb C^{r}}^{2}+\|\psi_{2}(x)\|_{\mathbb C^{r}}^{2}\bigr)\qquad\text{for almost every }x .$$
In particular, if $\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=0$ for
almost every $x$, then the coherent law of phase $0$ and the which-path law of
weight $w_{*}$ agree on every bin; and if $c=0$, then, under phase-$0$
admissibility, they agree if and only if
$\operatorname{Re}\langle\psi_{1}(x),\psi_{2}(x)\rangle_{\mathbb C^{r}}=0$ for
almost every $x$.

(d) *Scope.* Clauses (a)-(c) are conditional on P1, P2, P5, P6 and the
declared model, and identify the laws of exactly two declared preparations.
They assert no path ontology, use no entangled marker state and no reduced
state, assert no detector response, no loss, no sampling model, no dynamics and
no empirical result.

## Facts & Assumptions

**Given:** P1, P2, P5, P6 and P7 as stated; the Axiom of Countable
Choice and the Axiom of Choice; nonzero $\psi_1,\psi_2\in H_s$; the phase
$\varphi$, weight $w\in[0,1]$, Borel $B\subseteq\mathbb R^3$, and, for
clause (c), admissibility at phase $0$.

[F1] **Position law.** For a unit vector $u$ the declared joint position PVM
satisfies $\mu^G_{[u]}(B)=\|G(B)u\|^2=\int_B\|u(x)\|^2dx$, and for a
density operator $\rho$ P2 gives $\mu^G_\rho(B)=\operatorname{tr}(\rho G(B))$
([[def-nrqm-interference-two-path-preparation-and-detection-model]]
clause (a), [[post-nrqm-framework-observable-and-probability]]).
Indeed, $P_uG(B)f=\langle f,G(B)u\rangle u$ is a one-term nuclear
representation, so its trace is $\langle u,G(B)u\rangle=\|G(B)u\|^2$
([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F2] **Finite trace linearity.** If $\rho_1,\rho_2$ are density operators and
$\lambda\in[0,1]$, then
$$\operatorname{tr}\bigl((\lambda\rho_1+(1-\lambda)\rho_2)G(B)\bigr)=\lambda\operatorname{tr}(\rho_1G(B))+(1-\lambda)\operatorname{tr}(\rho_2G(B)),$$
because the trace is linear and each $\rho_jG(B)$ is trace class: $G(B)$ is
bounded and trace-class operators form a two-sided ideal
([[thm-trace-is-absolutely-convergent-and-basis-independent]],
[[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F3] **Declared preparations.** The coherent preparation is
$\widehat\rho(\psi_1+e^{i\varphi}\psi_2)$ when that vector is nonzero; the
which-path preparation is $w\widehat\rho(\psi_1)+(1-w)\widehat\rho(\psi_2)$
([[def-nrqm-interference-two-path-preparation-and-detection-model]] clauses
(c)-(e)).

[F4] **Local cross-term identity and integrability.** For measurable
representatives of $a,b\in L^2(\mathbb R^3;\mathbb C^r)$, finite-dimensional
inner-product expansion gives $\|a(x)+b(x)\|^2=\|a(x)\|^2+\|b(x)\|^2+
2\operatorname{Re}\langle a(x),b(x)\rangle$ almost everywhere. The cross term
is integrable since $|\langle a(x),b(x)\rangle|\le\|a(x)\|\|b(x)\|$ and
$\int\|a\|\|b\|\le\|a\|_2\|b\|_2$ ([[def-real-and-complex-inner-product-space]],
[[cor-cauchy-schwarz-inequality-for-l-two]]). Integrating the identity over
any Borel $B$ gives the corresponding bin expansion.

## Proof

**Proof technique:** direct; apply P2 and the locally constructed position PVM
to the declared preparations, compute the finite trace mixture directly,
expand the component cross term, and identify equality of the resulting
integrable densities.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Coherent law] Assume admissibility at $\varphi$ and put $u=(\psi_1+e^{i\varphi}\psi_2)/\|\psi_1+e^{i\varphi}\psi_2\|$. Then $\rho_{\mathrm{coh}}(\varphi)=\widehat\rho(u)$ by [F3], and [F1] gives $$\mu^G_{\rho_{\mathrm{coh}}(\varphi)}(B)=\int_B\|u(x)\|^2dx=\frac{\int_B\|\psi_1(x)+e^{i\varphi}\psi_2(x)\|^2dx}{\|\psi_1+e^{i\varphi}\psi_2\|^2}.$$ Applying [F4] with $a=\psi_1$ and $b=e^{i\varphi}\psi_2$ expands the numerator; conjugate-linearity in the second argument gives the factor $e^{-i\varphi}$. At $B=\mathbb R^3$ the denominator is $N+2\operatorname{Re}(e^{-i\varphi}Z)>0$. This proves (a). [given, F1, F3, F4, algebra]

1.2 [Which-path law] Let $\rho_j=\widehat\rho(\psi_j)$ and $u_j=\psi_j/\|\psi_j\|$. By [F1], $\operatorname{tr}(\rho_jG(B))=\int_B\|u_j(x)\|^2dx=\|\psi_j\|^{-2}\int_B\|\psi_j(x)\|^2dx$. The declared mixture is $w\rho_1+(1-w)\rho_2$ by [F3]; applying trace linearity [F2] to P2's outcome formula yields (b). [given, F1, F2, F3, algebra]

2.1 [Coincidence criterion] Assume admissibility at phase $0$, and define $M(B)=\int_B(\|\psi_1(x)\|^2+\|\psi_2(x)\|^2)dx$ and $c_B=\operatorname{Re}\int_B\langle\psi_1(x),\psi_2(x)\rangle dx$. By [F4], the zero-phase coherent law is $(M(B)+2c_B)/(N+2c)$, while step 1.2 at $w=w_*$ gives the which-path law $M(B)/N$. Since $N>0$ and $N+2c=\|\psi_1+\psi_2\|^2>0$, equality of these laws for every Borel $B$ is equivalent to $N c_B=cM(B)$ for every $B$. Define the real integrable function $$h(x):=N\operatorname{Re}\langle\psi_1(x),\psi_2(x)\rangle-c(\|\psi_1(x)\|^2+\|\psi_2(x)\|^2).$$ Then equality for every $B$ is equivalent to $\int_Bh(x)dx=0$ for every Borel $B$. Since the Lebesgue sigma-algebra is the completion of the Borel Lebesgue measure, every Lebesgue-measurable set differs from a Borel set by a null set, and the integral of $h\in L^1$ is unchanged on such a difference ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]). Thus $\int_Eh=0$ for every Lebesgue-measurable set $E$. If $h$ is nonzero on a set of positive measure, some set $\{h\ge1/n\}$ or $\{h\le-1/n\}$ has positive measure; its integral has a strict sign, contradicting that condition. Thus $h=0$ almost everywhere, and conversely that almost-everywhere relation makes all the integrals vanish. This proves the criterion. If the components are pointwise orthogonal almost everywhere, then $c=0$ and the relation holds; if $c=0$, it reduces to $\operatorname{Re}\langle\psi_1(x),\psi_2(x)\rangle=0$ almost everywhere. This proves (c), while steps 1.1 and 1.2 establish (a)-(b); (d) records the stated scope. [given, step 1.1, step 1.2, F2, F4, algebra] ∎

## Remarks

- **The cross term is physical relative phase.** A change of the relative phase
  $\varphi$ rotates the complex overlap $Z(B)$, giving the cross term
  $2\operatorname{Re}(e^{-i\varphi}Z(B))$, without changing the two
  path densities; a common phase of $\psi_{1}$ and $\psi_{2}$ is immaterial.
- **What the theorem does not claim.** It does not assert that the coherent
  preparation is "more correct" than the which-path preparation, that a
  particle took a particular path, or that any apparatus realizes either
  declaration; and it makes no claim about visibility loss by entanglement or
  path marking, which belongs to the entanglement model of the category.
