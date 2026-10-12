---
id: lem-nrqm-light-matter-first-order-photon-energy-law
aliases: [nrqm-light-matter-first-order-photon-energy-law]
kind: lemma
domain: mathematics
title: "The first-order emitted-photon energy law: factorised kernel, normalisation, concentration at the transition energy and positivity on positive-measure windows"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity, thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, def-measure-with-density, thm-monotone-convergence-for-the-integral, cor-c-one-change-of-variables-for-l-one-functions, prop-countable-subsets-of-rn-are-lebesgue-null, def-continuity-real, def-limits-at-infinity, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity: mathematical-premise
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  prop-countable-subsets-of-rn-are-lebesgue-null: mathematical-premise
  def-continuity-real: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 13 Sections 13.5-13.9 pp. 180-190 (first-order transition amplitudes, the resonance kernel and its concentration at the transition energy)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 6 Sections 6.8-6.9 pp. 95-97 (time-dependent perturbation theory and the golden-rule limit)"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\alpha>0$, let
$\mathfrak h=\operatorname{ran}M_{\Pi}\subseteq L^{2}(\mathbb R^{3};\mathbb
C^{3})$ be the transverse space with $\varepsilon(k)=\alpha|k|$ of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]],
let $\Lambda>0$, let $g_{1},\dots,g_{J}\in\mathfrak h$ ($J\ge1$) satisfy
$$\operatorname{supp}g_{j}\subseteq\{k:\ 0<\varepsilon(k)\le\Lambda\},\qquad \frac{g_{j}}{\sqrt\varepsilon}\in\mathfrak h ,$$
let $\eta_{0}\in\mathbb R$ and let $c_{1},\dots,c_{J}\in\mathbb C$ with
$$M:=\sum_{j=1}^{J}c_{j}g_{j}\in\mathfrak h,\qquad M\ne0 .$$
Fix $\Delta\in\mathbb R$ and define the finite Borel measure
$$\nu_{b}(B):=\int_{\mathbb R^{3}}\mathbf 1_{B}\bigl(\varepsilon(k)\bigr) \|M(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k,\qquad K_{t}(x):=\frac{1}{\hbar^{2}t}\Bigl|\int_{0}^{t}e^{ixs/\hbar}\,ds\Bigr|^{2}\ \ (t>0),$$
and the vector-valued function
$$A_{b}(k,t):=-\frac{i\eta_{0}}{\hbar}M(k)\int_{0}^{t} e^{i(\varepsilon(k)-\Delta)s/\hbar}\,ds\qquad(t\ge0).$$
Then:

(a) (factorisation) for every $t>0$ and almost every $k\in\mathbb R^{3}$,
$$|A_{b}(k,t)|^{2}=\eta_{0}^{2}\,t\,K_{t}\bigl(\varepsilon(k)-\Delta\bigr) \|M(k)\|_{\mathbb C^{3}}^{2},$$
and consequently
$\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\eta_{0}^{2}t\int_{\mathbb R}
K_{t}(E-\Delta)\,d\nu_{b}(E)$;

(b) (normalisation) for every $t>0$ the denominator
$\int_{\mathbb R}K_{t}(E-\Delta)\,d\nu_{b}(E)$ is finite and strictly positive,
so
$$P_{t}(B):=\frac{\int_{B}K_{t}(E-\Delta)\,d\nu_{b}(E)} {\int_{\mathbb R}K_{t}(E-\Delta)\,d\nu_{b}(E)}$$
defines a Borel probability measure on $\mathbb R$ with
$P_{t}(\mathbb R\setminus(0,\Lambda])=0$;

(c) (concentration) if $\nu_{b}=J_{b}\lambda$ for some $J_{b}\in
L^{1}(\lambda)$ with $J_{b}=0$ $\lambda$-almost everywhere on
$\mathbb R\setminus(0,\Lambda]$, if $J_{b}$ is continuous at some $\Delta$ with
$0<\Delta<\Lambda$ and $J_{b}(\Delta)>0$, and if $f:\mathbb R\to\mathbb C$ is
continuous and bounded, then
$$\lim_{t\to\infty}\int_{\mathbb R}f\,dP_{t}=f(\Delta);$$

(d) (positivity) if $\nu_{b}=J_{b}\lambda$ with $J_{b}\ge0$
$\lambda$-almost everywhere and $J_{b}>0$ $\lambda$-almost everywhere on a
Borel set $B\subseteq\mathbb R$ of positive Lebesgue measure, then
$P_{t}(B)>0$ for every $t>0$;

(e) (tail concentration) under the hypotheses of (c), for every $\delta>0$,
$\lim_{t\to\infty}P_{t}\bigl(\{E:|E-\Delta|\ge\delta\}\bigr)=0$.

No dynamics, transition probability, rate, decay or physical identification is
asserted; the lemma computes an explicit kernel, its normalised push-forward
law and that law's limit.

## Facts & Assumptions

**Given:** the transverse space $\mathfrak h$, the cutoff data $\Lambda,g_{j}$, the coupling $\eta_{0}$, the coefficients $c_{j}$, the vector $M\ne0$, the number $\Delta$, the measure $\nu_{b}$, the kernel $K_{t}$ and the vectors $A_{b}(\cdot,t)$.

[F1] **Model objects.** $\mathfrak h=\{f\in L^{2}(\mathbb R^{3};\mathbb C^{3}):k\cdot f(k)=0\ \text{a.e.}\}$ is a closed subspace, $\varepsilon(k)=\alpha|k|$ is continuous, $g_{j}\in\mathfrak h$ with $\operatorname{supp}g_{j}\subseteq\{0<\varepsilon\le\Lambda\}$ and $g_{j}/\sqrt\varepsilon\in\mathfrak h$, so $M\in\mathfrak h$ with $\operatorname{supp}M\subseteq\{0<\varepsilon\le\Lambda\}$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]).

[F2] **Kernel.** For $t>0$ and $x\ne0$, $K_{t}(x)=\dfrac{4\sin^{2}(xt/(2\hbar))}{x^{2}t}$ and $K_{t}(0)=t/\hbar^{2}$; $K_{t}\ge0$ is even and $\int_{\mathbb R}K_{t}(x)\,dx=2\pi/\hbar$; for $J\in L^{1}(\lambda)$ continuous at $\Delta$, $\lim_{t\to\infty}\int_{\mathbb R}K_{t}(x)J(\Delta+x)\,dx=\frac{2\pi}{\hbar}J(\Delta)$ ([[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clauses (a),(b)).

[F3] **The push-forward measure.** $\nu_{b}$ is a finite Borel measure with $\nu_{b}(\mathbb R)=\|M\|_{\mathfrak h}^{2}>0$, $\nu_{b}(\mathbb R\setminus(0,\Lambda])=0$, and $\int_{\mathbb R}f\,d\nu_{b}=\int_{\mathbb R^{3}}f(\varepsilon(k))\|M(k)\|^{2}d^{3}k$ for every Borel $f\ge0$; for the vector $A_{b}$ of the statement, $\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\eta_{0}^{2}t\int K_{t}(E-\Delta)d\nu_{b}(E)$ for $t>0$ and $A_{b}(\cdot,t)\in\mathfrak h$ ([[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clauses (i),(ii)).

[F4] **Null sets of the kernel.** The set $\{x\in\mathbb R:K_{t}(x)=0\}$ equals $\{0\}\cup\{2\pi\hbar n/t:n\in\mathbb Z\setminus\{0\}\}$, a countable hence Lebesgue-null subset of $\mathbb R$; in particular $K_{t}>0$ $\lambda$-almost everywhere and $K_{t}$ is bounded by $t/\hbar^{2}$ ([[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clause (a), [[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F5] **Measure and integral calculus.** A measure with density $h$ is given by $(h\lambda)(B)=\int_{B}h\,d\lambda$; for a nonnegative measurable $f$ the map $B\mapsto\int_{B}f\,d\lambda$ is a measure, and $\int_{B}f\,d\lambda>0$ whenever $f\ge0$ almost everywhere, $f>0$ almost everywhere on a set $B$ of positive measure, and $f$ is measurable; translation $x\mapsto\Delta+x$ preserves $\lambda$ ([[def-measure-with-density]], [[thm-monotone-convergence-for-the-integral]], [[cor-c-one-change-of-variables-for-l-one-functions]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F6] **Continuity and limits.** Continuity of $J_{b}$ at $\Delta$ and the meaning of $\lim_{t\to\infty}$ are those of [[def-continuity-real]] and [[def-limits-at-infinity]].

## Proof

**Proof technique:** direct; compute the squared modulus of the explicit amplitude, normalise the resulting measure using the strict positivity of the kernel off a null set, and apply the approximate identity of the cited golden-rule item to the density and to its tails.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Factorisation] Let $t>0$. For every $k$ one has $\int_{0}^{t}e^{i(\varepsilon(k)-\Delta)s/\hbar}ds\in\mathbb C$ and $|A_{b}(k,t)|^{2}=\frac{\eta_{0}^{2}}{\hbar^{2}}\|M(k)\|^{2}\bigl|\int_{0}^{t}e^{i(\varepsilon(k)-\Delta)s/\hbar}ds\bigr|^{2}$; by the definition of $K_{t}$ with $x=\varepsilon(k)-\Delta$ the last factor equals $\hbar^{2}tK_{t}(\varepsilon(k)-\Delta)$, giving the displayed pointwise identity. Integrating over $\mathbb R^{3}$ and using [F3] with $f=K_{t}(\cdot-\Delta)\ge0$ gives $\|A_{b}(\cdot,t)\|^{2}=\eta_{0}^{2}t\int K_{t}(E-\Delta)d\nu_{b}(E)$. This is (a). [F1, F2, F3, algebra]

1.2 [Normalisation] By [F4], $K_{t}>0$ $\lambda$-almost everywhere and $K_{t}\le t/\hbar^{2}$; hence $K_{t}(\cdot-\Delta)>0$ $\lambda$-almost everywhere and $\int_{\mathbb R}K_{t}(E-\Delta)d\nu_{b}(E)\le(t/\hbar^{2})\nu_{b}(\mathbb R)<\infty$. For strict positivity write the integral as $\int_{\mathbb R^{3}}K_{t}(\varepsilon(k)-\Delta)\|M(k)\|^{2}d^{3}k$ by [F3]: the integrand is nonnegative, the set $\{k:M(k)\ne0\}$ has positive Lebesgue measure because $\|M\|_{\mathfrak h}^{2}=\int\|M(k)\|^{2}d^{3}k>0$ by $M\ne0$, and on that set $K_{t}(\varepsilon(k)-\Delta)>0$ off a null set by [F4]; so the integral is strictly positive by [F5]. Therefore $P_{t}$ is a Borel probability measure, and $P_{t}(\mathbb R\setminus(0,\Lambda])=0$ because $\nu_{b}$ has that property and $K_{t}(\cdot-\Delta)$ is finite and positive off a null set. This is (b). [F1, F3, F4, F5, algebra]

2.1 [Concentration] Assume now $\nu_{b}=J_{b}\lambda$ with $J_{b}$ as in (c), and let $f$ be continuous and bounded, $|f|\le C$. For $t>0$, using [F5] to pass between $\nu_{b}$ and $\lambda$ and the translation $E=\Delta+x$, $$\int_{\mathbb R}f\,dP_{t}=\frac{\int_{\mathbb R}f(\Delta+x)K_{t}(x)J_{b}(\Delta+x)\,dx}{\int_{\mathbb R}K_{t}(x)J_{b}(\Delta+x)\,dx}.$$ The numerator is $\int_{\mathbb R}K_{t}(x)J(\Delta+x)dx$ with $J:=f\cdot J_{b}$, which lies in $L^{1}(\lambda)$ and is continuous at $\Delta$ because $f$ and $J_{b}$ are; the denominator is the same expression with $J:=J_{b}$. By [F2] the numerator tends to $\frac{2\pi}{\hbar}f(\Delta)J_{b}(\Delta)$ and the denominator to $\frac{2\pi}{\hbar}J_{b}(\Delta)$, which is strictly positive by hypothesis and step 1.2; hence the ratio tends to $f(\Delta)$. This is (c). [F2, F5, F6, step 1.2, algebra]

2.2 [Positivity on windows] Let $B$ be Borel with $\lambda(B)>0$ and $J_{b}>0$ $\lambda$-almost everywhere on $B$. By [F5] and the density hypothesis, $P_{t}(B)=\bigl(\int_{B}K_{t}(E-\Delta)J_{b}(E)\,d\lambda(E)\bigr)\big/\bigl(\int_{\mathbb R}K_{t}(E-\Delta)J_{b}(E)\,d\lambda(E)\bigr)$ with a finite positive denominator by step 1.2; the integrand of the numerator is nonnegative, and it is strictly positive almost everywhere on $B$ because $K_{t}(\cdot-\Delta)>0$ $\lambda$-almost everywhere by [F4] and $J_{b}>0$ almost everywhere on $B$; by [F5] the numerator is strictly positive, so $P_{t}(B)>0$. This is (d). [F4, F5, step 1.2, algebra]

3.1 [Tails] Under the hypotheses of (c), fix $\delta>0$ and let $\varphi:\mathbb R\to\mathbb R$, $\varphi(x):=\max\{0,\min\{1,2(|x|-\delta/2)/\delta\}\}$, which is continuous and bounded with $\varphi=0$ on $[-\delta/2,\delta/2]$ and $\varphi=1$ on $\{|x|\ge\delta\}$. Then $\mathbf 1_{\{|E-\Delta|\ge\delta\}}\le\varphi(E-\Delta)$ pointwise, so $P_{t}(\{|E-\Delta|\ge\delta\})\le\int\varphi\,dP_{t}$, and step 2.1 with $f:=\varphi$ gives $\lim_{t\to\infty}\int\varphi\,dP_{t}=\varphi(0)=0$; hence the tails tend to zero. This is (e). [step 2.1, F6, algebra]

4.1 [Assembly and scope] Steps 1.1 and 1.2 prove (a) and (b); step 2.1 proves (c); step 2.2 proves (d); step 3.1 proves (e). Nothing in the argument used a dynamics, a transition probability, a rate, a measurement or a physical identification; the statement's scope paragraph records this. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **What concentrates.** Clause (c) says that the normalised energy law of the explicit single-vertex vector converges to the unit mass at the parameter $\Delta$ whenever the photon density has a continuous positive value there; clause (d) shows that at every finite time a window on which the density is positive almost everywhere still carries strictly positive probability. The two are compatible: the window probability tends to zero only for windows separated from $\Delta$, and the convergence is of the law, not of the density.
- **No physical spike.** The limit in (c) is a limit of an ideal model law as the parameter $t$ of the explicit vector grows; it is not an assertion that a physical line is sharp or that a measurement at time $t$ has a sharp outcome.
