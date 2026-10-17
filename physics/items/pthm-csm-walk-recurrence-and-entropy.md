---
id: pthm-csm-walk-recurrence-and-entropy
kind: physics-theorem
title: "Diffusion-scale walk and recurrence/coarse-entropy counterexamples"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - thm-csm-examples-flow-fine-entropy
  - cor-characteristic-function-criterion-for-weak-convergence
  - def-axiom-of-choice
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-csm-finite-variance
  - def-characteristic-function-of-a-real-random-variable
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-normal-law
  - def-natural-logarithm
  - def-weak-convergence-of-borel-probability-measures
  - thm-logarithm-derivative-and-integral
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-taylor-peano-remainder
  - def-the-one-dimensional-torus-and-normalized-haar-integral
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  thm-csm-examples-flow-fine-entropy: mathematical-premise
  cor-characteristic-function-criterion-for-weak-convergence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-finite-real-random-variable-and-distribution: mathematical-premise
  def-expectation-on-a-finite-probability-space: mathematical-premise
  def-csm-finite-variance: mathematical-premise
  def-characteristic-function-of-a-real-random-variable: mathematical-premise
  def-standard-normal-and-normal-laws: mathematical-premise
  lem-characteristic-function-of-a-normal-law: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-weak-convergence-of-borel-probability-measures: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-taylor-peano-remainder: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
physical_scope: "A finite IID symmetric walk under diffusive scaling, an explicitly defined periodic rotor, and a four-state measure-preserving permutation. Results are conditional model calculations; no collision-to-diffusion limit, path-space convergence, experimental observation, or universal entropy law is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§1.2.1 and 1.4.2 (2013)"
      url: "https://www.lip.pt/~jespada/teaching/data/TEM/LectureNotes-Arovas.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., §3.3.2, Theorem 3.3.17"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, §§7.1 and 7.5.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables (Advanced Calculus), §3.1 and Chapter 4, §4.5"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "David Tong, Statistical Physics, §§1.2–1.3"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume the Axiom of Choice. The following are separate calculations for three explicitly defined models.

**Diffusive-scale walk.** Let $D>0$ have units m$^2$s$^{-1}$, fix $t\ge0$ seconds, and let $(\delta t_j)_{j\ge1}$ be any positive sequence tending to zero, with $\ell_j=\sqrt{2D\delta t_j}$ metres and $n_j=\lfloor t/\delta t_j\rfloor$. For each $j$, on the finite product space $\Omega_j=\{-1,1\}^{n_j}$ with uniform probability, let $\Xi_i$ be the coordinate increments and
$$S_j=\ell_j\sum_{i=1}^{n_j}\Xi_i.$$
For the dimensionless lattice index $r\in\mathbb Z$, define
$$u_n(r):=2^{-n}\#\{(x_1,\ldots,x_n)\in\{-1,1\}^n:\sum_{i=1}^n x_i=r\},$$
with the empty sum equal to zero. Then $\mathbb E S_j=0$, $\operatorname{Var}(S_j)=n_j\ell_j^2$, and the lattice probabilities satisfy $u_{n+1}(r)=\tfrac12u_n(r-1)+\tfrac12u_n(r+1)$ with $u_0(r)=\mathbf1_{\{r=0\}}$. For every wave number $k\in\mathbb R$ in m$^{-1}$,
$$\varphi_{S_j}(k)=\cos(\ell_j k)^{n_j}.$$
The laws of $S_j$ converge weakly on $\mathbb R$ to $N(0,2Dt)$, the normal probability law with mean zero and variance $2Dt$ (in m$^2$). The conclusion is fixed-time marginal convergence only.

**Periodic rotor.** Let $\mathbb T:=\mathbb R/(2\pi\mathbb Z)$ with its quotient topology, and let the phase space $\mathcal X=\mathbb T\times\mathbb R$ have its metrizable product topology. Let $q\in\mathbb T$ be a dimensionless angle, $p\in\mathbb R$ have units kg m$^2$s$^{-1}$, and $I>0$ have units kg m$^2$. Define the model energy $H(q,p)=p^2/(2I)$ and, for time $s\in\mathbb R$ measured in seconds, the flow
$$\Phi_s(q,p)=\bigl(q+ps/I\ {\rm mod}\ 2\pi,\ p\bigr).$$
For each $p_0\ne0$, the orbit is periodic with period $T=2\pi I/|p_0|$ seconds. Let $\nu$ be normalized arc length on $\mathbb T$, define the continuous inclusion $\iota_{p_0}(q)=(q,p_0)$, and for each Borel $E\subseteq\mathcal X$ set $\mu_0(E)=\nu(\iota_{p_0}^{-1}(E))$. Thus $\mu_0$ is the uniform angle probability on the fixed-$p_0$ orbit. For this invariant probability, *mixing* means $\mu_0(B\cap\Phi_s^{-1}C)\to\mu_0(B)\mu_0(C)$ for all Borel $B,C\subseteq\mathcal X$ as $s\to\infty$. The rotor is not mixing: for the half-circle arc $A=\{([q],p_0):q\in[0,\pi)\}$, where $[q]=q+2\pi\mathbb Z\in\mathbb T$, the mixing correlation fails along times $s=mT$ with positive integers $m$. For any $q_0=[\theta_0]\in\mathbb T$, the point-supported initial law $\delta_{(q_0,p_0)}$ (unit mass at $(q_0,p_0)$) has no weak limit as $s\to\infty$; the bounded continuous witness $g([\theta],p)=\cos(\theta-\theta_0)$ is well-defined because cosine is $2\pi$-periodic.

**Finite coarse-entropy model.** Let $\Omega=\{0,1,2,3\}$ with uniform reference probability and permutation $\mathcal T(0)=1,\mathcal T(1)=2,\mathcal T(2)=3,\mathcal T(3)=0$. Start from $\pi_0=(1/2,1/2,0,0)$, and evolve by pushforward under $\mathcal T$. For the coarse partition $\{\{0,1\},\{2,3\}\}$, let $(r_1,r_2)$ be any probability vector with $r_i\ge0$ and $r_1+r_2=1$, and define its coarse Shannon entropy by $H_c(r_1,r_2)=-\sum_{i:r_i>0}r_i\log r_i$ in nats. Define fine entropy analogously for a probability vector on the four states, using $0\log0=0$. The coarse entropies at times $0,1,2$ are $0,\log2,0$, while the fine entropy is $\log2$ at all three times. Thus deterministic invertibility and preservation of the uniform reference measure do not imply monotone coarse entropy.

The smooth-flow result [[thm-csm-examples-flow-fine-entropy]] has different hypotheses: it concerns positive $C^1$ densities on a flat torus transported by supplied jointly $C^2$ volume-preserving diffeomorphisms and preserves their dimensionless fine differential entropy. It supplies no monotonicity conclusion for coarse entropy in a finite permutation. These models report no observations and prove no diffusion limit from deterministic collisions.

## Facts & Assumptions

**Given:** The Axiom of Choice; the finite product walk laws; the stated rotor flow and dimensions; the four-state permutation and initial probability vector; and the definitions of the entropies in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: product preparations are separately specified probability laws in consuming model statements, not consequences of flow and not assertions that a laboratory realizes them.

[F2] [[def-finite-probability-space-and-event]]: a finite probability space is a finite set with nonnegative outcome weights summing to one.

[F3] [[def-finite-real-random-variable-and-distribution]]: a finite real random variable is a function from the finite outcome set to $\mathbb R$.

[F4] [[def-expectation-on-a-finite-probability-space]]: expectation is the finite weighted sum.

[F5] [[def-characteristic-function-of-a-real-random-variable]]: $\varphi_X(k)=\mathbb E[e^{ikX}]$; for a Borel law $\mu$, $\varphi_\mu(k)=\int e^{ikx}\,\mu(dx)$.

[F6] [[def-standard-normal-and-normal-laws]]: $N(m,\sigma^2)$ is the law of $m+\sigma Z$ for a standard normal $Z$, including $N(m,0)=\delta_m$.

[F7] [[lem-characteristic-function-of-a-normal-law]]: assuming AC, $N(m,\sigma^2)$ has characteristic function $e^{imk-\sigma^2k^2/2}$ for every real $k$, including $\sigma=0$.

[F8] [[cor-characteristic-function-criterion-for-weak-convergence]]: assuming AC, Borel probability laws on $\mathbb R$ converge weakly to a specified Borel probability law if their characteristic functions converge pointwise at every real frequency.

[F9] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function; the weak-convergence and normal-law suppliers explicitly require this full axiom.

[F10] [[thm-sine-and-cosine-derivatives]]: $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$, and $\cos0=1$.

[F11] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on $(0,\infty)$.

[F12] [[thm-logarithm-derivative-and-integral]]: $\log'(x)=1/x$ for $x>0$.

[F13] [[thm-algebra-of-derivatives]]: products and quotients of differentiable functions obey the usual derivative rules where the denominator is nonzero.

[F14] [[thm-chain-rule-for-total-derivatives]]: derivatives of differentiable compositions are compositions of derivatives.

[F15] [[thm-taylor-peano-remainder]]: if $f$ is twice differentiable on an open neighbourhood of $0$, then $f(u)=f(0)+f'(0)u+\tfrac12f''(0)u^2+o(u^2)$.

[F16] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]: under countable choice, on $\mathbb R/\mathbb Z$ the probability measure is the pushforward of Lebesgue measure on $[0,1)$ and is translation-invariant; rescaling the angle by $2\pi$ gives normalized arc length on $\mathbb R/(2\pi\mathbb Z)$.

[F17] [[thm-csm-examples-flow-fine-entropy]]: its current same-run draft statement says that for a specified jointly $C^2$ diffeomorphic flow on a flat torus with identity initial map, $C^1$ divergence-free velocity, and positive bounded $C^1$ probability density, the dimensionless fine differential entropy of the transported density is finite and conserved; the item's proof is complete conditional on its stated mathematical suppliers, but independent review remains pending.

[F18] [[def-weak-convergence-of-borel-probability-measures]]: weak convergence of Borel probability measures on a metric space means convergence of integrals against every bounded continuous real-valued function.

[F19] [[def-csm-finite-variance]]: on a finite probability space, $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb E[Y])^2]$.

[A1] For each walk index $j$, the coordinates on $\{-1,1\}^{n_j}$ are assigned the explicit uniform product weights $2^{-n_j}$; the different $j$ may use different finite spaces.

[A2] The rotor law is the explicit flow in the Statement; no flow-existence theorem, ergodic hypothesis, or coupling to another system is assumed.

[A3] The four-state probability evolves by the stated deterministic pushforward, with no stochastic reset.

## Proof

**Given:** The definitions and model assumptions in the Statement and Facts & Assumptions; assume full AC for the weak-convergence and normal-law suppliers.

1.1 Under the product-preparation convention [F1], for a fixed $j$ the uniform weight on $\{-1,1\}^{n_j}$ is a probability law, including the singleton case $n_j=0$. Each increment has mean zero and square one by [F2]–[F4]. Independence follows from the product weights, so the cross terms in $\mathbb E(\sum_i\Xi_i)^2$ vanish; hence $\mathbb E S_j=0$ and, by [F19], $\operatorname{Var}(S_j)=n_j\ell_j^2$. Conditioning on the last increment gives $u_{n+1}(r)=\tfrac12u_n(r-1)+\tfrac12u_n(r+1)$, with the stated initial mass. [given, A1, F1, F2, F3, F4, F19, algebra]

1.2 For the rotor, write $R_s(q)=q+p_0s/I$ modulo $2\pi$. At $T=2\pi I/|p_0|$, the angle increment is $2\pi$ when $p_0>0$ and $-2\pi$ when $p_0<0$, so $R_T$ is the identity. The stated full AC includes the countable-choice assumption of [F16]. For every Borel $E\subseteq\mathcal X$, $\iota_{p_0}^{-1}(\Phi_s^{-1}E)=R_s^{-1}(\iota_{p_0}^{-1}E)$; translation invariance in [F16] therefore gives $\mu_0(\Phi_s^{-1}E)=\mu_0(E)$, and in particular $\mu_0$ is invariant under the rotor flow. [given, A2, F9, F16, algebra]

1.3 Under the four-state pushforward, the first three probability vectors are $$\pi_0=(1/2,1/2,0,0),\quad \pi_1=(0,1/2,1/2,0),\quad \pi_2=(0,0,1/2,1/2).$$ The map $\mathcal T$ is a permutation, so it maps the uniform reference weights $1/4$ to themselves; it also leaves the multiset of the evolving fine probabilities unchanged, and each fine entropy is $-\tfrac12\log\tfrac12-\tfrac12\log\tfrac12=\log2$. The coarse cell probabilities for $\{\{0,1\},\{2,3\}\}$ are $(1,0)$, $(1/2,1/2)$, and $(0,1)$, giving coarse entropies $0,\log2,0$ under the zero-term convention. This proves the stated decrease. [given, A3, F11, algebra]

2.1 By independence and [F5], the characteristic function is $$\varphi_{S_j}(k)=\prod_{i=1}^{n_j}\mathbb E(e^{ik\ell_j\Xi_i})=\cos(\ell_j k)^{n_j}.$$ Fix $k$. Continuity of cosine and $\cos0=1$ make $\cos u>0$ for all sufficiently small $|u|$. For such $u$, put $f(u)=\log\cos u$. By the chain rule, $f'(u)=-\sin u/\cos u$ and $f'(0)=0$. From [F10], $\sin u/u\to\sin'(0)=1$ and $\cos u\to1$, so the difference quotient $f'(u)/u=-\sin u/(u\cos u)$ tends to $-1$; hence $f''(0)=-1$. The same derivative rules make $f$ twice differentiable on a neighbourhood of zero, so [F15] gives $\log\cos u=-u^2/2+o(u^2)$. For $t>0$, $n_j\delta t_j\to t$ because $0\le t-n_j\delta t_j<\delta t_j$, and therefore $$n_j\log\cos(\ell_jk)=-\frac{n_j\ell_j^2k^2}{2}+n_j\,o(\ell_j^2)\longrightarrow-Dtk^2.$$ Indeed $n_j\ell_j^2=2D n_j\delta t_j\to2Dt$, so $n_j\ell_j^2$ is bounded, while $o(\ell_j^2)/\ell_j^2\to0$; their product proves the remainder tends to zero. For $t=0$, $n_j=0$ and every law is $\delta_0$. Thus in all cases $\varphi_{S_j}(k)\to e^{-Dtk^2}=\varphi_{N(0,2Dt)}(k)$ for every real $k$, using [F6]–[F7] for the target law. [given, A1, F5, F6, F7, F10, F11, F12, F13, F14, F15, step 1.1, algebra]

2.2 The measure definition gives $\mu_0(A)=\nu([0,\pi))=1/2$. At each $s=mT$, $\Phi_s$ is the identity on the support of $\mu_0$, so $\mu_0(A\cap\Phi_s^{-1}A)=1/2\ne1/4=\mu_0(A)^2$, contradicting the mixing condition stated in the Statement. For $q_0=[\theta_0]$, the function $g([\theta],p)=\cos(\theta-\theta_0)$ is well-defined and continuous on the quotient because cosine is continuous and $2\pi$-periodic, and it is bounded by $1$. Its values are $1$ at times $mT$ and $-1$ at times $mT+T/2$, so its expectation has no limit. By [F18], weak convergence would force convergence of this expectation, so the evolving point laws have no weak limit. [given, F16, F18, step 1.2, algebra]

2.3 The mathematical result [F17] assumes a smooth diffeomorphic flow on a flat torus, divergence-free velocity, and a positive bounded $C^1$ density. The atomic four-state law in step 1.3 is not such a density or flow; its coarse-entropy decrease neither invokes nor contradicts that fine differential-entropy result. It establishes no monotonicity law for other coarse-graining procedures. [given, F17, step 1.3]

3.1 The right-hand side of step 2.1 is the characteristic function of the specified Borel probability $N(0,2Dt)$. Apply the reverse implication of [F8] to the Borel laws of $S_j$ to obtain weak convergence. The only non-finite-choice strength used here is the full AC explicitly carried by [F7]–[F9]; the finite product construction is in step 1.1 and its pointwise characteristic calculation is in step 2.1. [given, F7, F8, F9, step 1.1, step 2.1]

4.1 The walk limit in steps 1.1–2.1 concerns only fixed-time marginal laws under the stated independent-increment scaling; no path-space limit, deterministic collision limit, experiment, observed frequency, or empirical inference is part of the hypotheses or conclusion. [given, A1, A2, A3, step 1.1, step 2.1, step 3.1, step 1.2, step 1.3] ∎

## Remarks

The full Axiom of Choice includes the countable-choice assumption of the normalized torus-measure definition [F16] and is also required by the imported normal-law and weak-convergence interfaces [F7]–[F9]. The recurrence, finite permutation, and finite product calculations themselves are choice-free. A finite histogram is not an underlying probability law, and no histogram is supplied as one here.

