---
id: lem-nrqm-many-body-two-level-thermal-formulas
aliases: [nrqm-many-body-two-level-thermal-formulas]
kind: lemma
domain: mathematics
title: "Closed formulas for the two-level canonical weights, mean energy, entropy and free energy"
status: published
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum, lem-nrqm-composites-rank-one-operator-calculus, thm-cyclicity-of-the-trace, prop-trace-is-linear, cor-exponential-reciprocal-and-positivity, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, def-natural-logarithm, thm-natural-logarithm-laws, def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-trace-class-operator, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-cyclicity-of-the-trace: mathematical-premise
  prop-trace-is-linear: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.4 printed pages 129-131 (PDF pages 137-139): the Gibbs distribution (6.94), the internal energy U = Tr(H rho) (6.95), the identity s = beta U + ln Z (6.97) and the entropy S = k_B s (6.98)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Section 1.1.2 printed page 13: the Gibbs distribution rho = e^{-beta H}/Z with Z = Tr e^{-beta H} and the mean energy E = Tr rho H; Section 1.1.3 printed pages 13-14: the von Neumann entropy; Section 1.1.5 printed page 15: F = -T ln Z"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\varepsilon>0$ and $\beta>0$ be real parameters, let $\mathfrak h$ be a
two-dimensional complex Hilbert space with orthonormal basis
$(u_0,u_1)$ ([[def-hilbert-space]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
and let $H:=T_{u_1,u_1}\varepsilon=\varepsilon\,T_{u_1,u_1}$ be the
self-adjoint operator with eigenvalues $0$ on $\mathbb Cu_0$ and
$\varepsilon$ on $\mathbb Cu_1$
([[lem-nrqm-composites-rank-one-operator-calculus]]). Let
$$Z:=\sum_{j=0}^{1}e^{-\beta E_j},\qquad \rho_\beta:=\frac1Z\sum_{j=0}^{1}e^{-\beta E_j}T_{u_j,u_j},\qquad s(\rho):=-\sum_{i:\,w_i>0}w_i\log w_i$$
be the partition sum, canonical operator and entropy of
[[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] clause
(a), with $E_0=0$, $E_1=\varepsilon$ and $w_i$ the eigenvalues of a density
operator $\rho$ on $\mathfrak h$ ([[def-natural-logarithm]]). Then:

(a) $Z=1+e^{-\beta\varepsilon}\in(1,2)$, and
$$\rho_\beta=\frac1Z\bigl(T_{u_0,u_0}+e^{-\beta\varepsilon}T_{u_1,u_1}\bigr)$$
is a density operator on $\mathfrak h$ that is not the maximally mixed state
$\tfrac12\mathrm{id}$;

(b) the mean energy is the exact identity
$$\operatorname{tr}(\rho_\beta H)=\frac{\varepsilon e^{-\beta\varepsilon}}{Z}=\frac{\varepsilon}{e^{\beta\varepsilon}+1},\qquad 0<\operatorname{tr}(\rho_\beta H)<\frac{\varepsilon}{2};$$

(c) the entropy and free energy satisfy
$$s(\rho_\beta)=\log Z+\frac{\beta\varepsilon}{e^{\beta\varepsilon}+1}=\log\bigl(1+e^{-\beta\varepsilon}\bigr)+\frac{\beta\varepsilon\,e^{-\beta\varepsilon}}{1+e^{-\beta\varepsilon}},\qquad 0\le s(\rho_\beta)<\log 2,$$
and, with $F:=-\beta^{-1}\log Z$,
$$\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=F ;$$

(d) *scope*: clauses (a)-(c) are exact algebraic identities for the
declared two-dimensional Hilbert space and the two real parameters
$\varepsilon,\beta>0$; no temperature, thermodynamic, equilibrium or
measurement interpretation is asserted, and the parameter $\beta$ carries no
physical dimension in this lemma.

## Facts & Assumptions

**Given:** the real parameters $\varepsilon>0$, $\beta>0$, the two-dimensional complex Hilbert space $\mathfrak h$ with orthonormal basis $(u_0,u_1)$, the operator $H=\varepsilon T_{u_1,u_1}$, and the data $Z$, $\rho_\beta$, $s$ of the statement.

[F1] **Supplied finite Gibbs data.** For the finite-dimensional self-adjoint $H$ with real eigenvalues $E_1,\dots,E_d$ and orthonormal eigenbasis $(v_1,\dots,v_d)$, and $\beta>0$, one has $Z=\sum_je^{-\beta E_j}\in(0,\infty)$ and $\rho_\beta=Z^{-1}\sum_je^{-\beta E_j}T_{v_j,v_j}\in\mathcal D$, with $\operatorname{tr}(\rho_\beta H)=Z^{-1}\sum_je^{-\beta E_j}E_j$, $\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z$, and for every density operator $\rho$ one has $s(\rho)\le\log d$, with equality if and only if $\rho=d^{-1}\mathrm{id}$ ([[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] clauses (a), (b), (c)).

[F2] **Rank-one calculus.** $T_{u,v}x=\langle x,v\rangle u$ is bounded with $T_{u,v}^*=T_{v,u}$, $T_{x,x}\ge0$, $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, and for bounded $B$ one has $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^*v}$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a)-(d)); the trace is linear ([[prop-trace-is-linear]]) and $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ ([[thm-cyclicity-of-the-trace]]).

[F3] **Real exponential.** $\exp(x)>0$, $\exp(-x)=1/\exp(x)$, and $\exp(x+y)=\exp(x)\exp(y)$ for all real $x,y$ ([[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-addition-formula]]); $\exp$ is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]). Hence $\exp(0)=\exp(0)^2$ with $\exp(0)>0$, so $\exp(0)=1$, and $\exp(t)>\exp(0)=1$ for every $t>0$.

[F4] **Logarithm.** $\log:(0,\infty)\to\mathbb R$ is the inverse function of $\exp$ and satisfies $\log(xy)=\log x+\log y$, $\log(1/x)=-\log x$ and $\log 1=0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct; instantiate the supplied finite Gibbs formulas at the two eigenvalues $0,\varepsilon$, and control the exponential factor at $\beta\varepsilon>0$ with strict increase, positivity and the reciprocal law.

**Given:** the data of the statement and [F1]-[F4].

1.1 [Exponential comparison] Since $\beta\varepsilon>0$, strict increase in [F3] gives $\exp(\beta\varepsilon)>\exp(0)=1$, and [F3] gives $\exp(-\beta\varepsilon)=1/\exp(\beta\varepsilon)\in(0,1)$; consequently $1<Z=1+\exp(-\beta\varepsilon)<2$. [F3, algebra]

2.1 [The canonical operator] By [F1] with $E_0=0$, $E_1=\varepsilon$ and $(v_1,v_2)=(u_0,u_1)$, $Z=1+e^{-\beta\varepsilon}$ and $\rho_\beta=Z^{-1}(T_{u_0,u_0}+e^{-\beta\varepsilon}T_{u_1,u_1})\in\mathcal D$, so $\rho_\beta$ is a density operator; its two weights are $Z^{-1}$ and $e^{-\beta\varepsilon}Z^{-1}$, which are distinct because $\exp(-\beta\varepsilon)\ne1$ by step 1.1. [F1, step 1.1, algebra]

3.1 [Mean energy, entropy and free energy] Using [F2] and $T_{u_0,u_0}T_{u_1,u_1}=\langle u_1,u_0\rangle T_{u_0,u_1}=0$ by orthogonality, and $T_{u_1,u_1}T_{u_1,u_1}=T_{u_1,u_1}$ with $\langle u_1,u_1\rangle=1$, the product $\rho_\beta H$ equals $\varepsilon e^{-\beta\varepsilon}Z^{-1}T_{u_1,u_1}$, so [F2] gives $\operatorname{tr}(\rho_\beta H)=\varepsilon e^{-\beta\varepsilon}/Z$; by step 1.1, $e^{-\beta\varepsilon}/Z=e^{-\beta\varepsilon}/(1+e^{-\beta\varepsilon})=1/(e^{\beta\varepsilon}+1)$, hence $\operatorname{tr}(\rho_\beta H)=\varepsilon/(e^{\beta\varepsilon}+1)$ lies in $(0,\varepsilon/2)$. By [F1], $\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z$, so $s(\rho_\beta)=\log Z+\beta\operatorname{tr}(\rho_\beta H)=\log(1+e^{-\beta\varepsilon})+\beta\varepsilon/(e^{\beta\varepsilon}+1)=\log(1+e^{-\beta\varepsilon})+\beta\varepsilon e^{-\beta\varepsilon}/(1+e^{-\beta\varepsilon})$; by [F1] and [F2], $0\le s(\rho_\beta)<\log2$ because $\rho_\beta\ne\tfrac12\mathrm{id}$ by step 2.1. Finally $\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z=F$ with $F$ as defined. This proves (b) and (c), and step 2.1 proved (a). [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 [Conclusion] Steps 1.1-2.1 prove (a), step 3.1 proves (b) and (c), and every identity is an algebraic consequence of the supplied finite-dimensional formulas and the real exponential and logarithm laws, which is (d). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **High- and low-temperature expectations.** By [F3], $0<e^{-\beta\varepsilon}<1$ and $e^{-\beta\varepsilon}$ decreases strictly as the product $\beta\varepsilon$ grows, so the upper level is suppressed in the regime of large $\beta\varepsilon$, while the bound $s<\log2$ of clause (c) shows that the entropy stays below the maximal mixed-state value for every finite $\beta>0$. The lemma asserts only these algebraic facts about the weights; it identifies no physical temperature with $\beta$.
- **Use.** The formulas are the exact two-level data used by the examples and the thought experiment of the companion page; the physical reading of $\beta$ as an inverse temperature, and of $\rho_\beta$ as a thermal preparation, is supplied separately by the framework's equilibrium postulate.
