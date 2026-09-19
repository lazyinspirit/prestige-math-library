---
id: thm-strong-markov-property-of-brownian-motion
kind: theorem
title: "Strong Markov property of Brownian motion"
status: draft
origin: pipeline
deps: [def-continuous-time-stopping-time, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, def-wiener-measure-on-continuous-path-space, thm-brownian-future-path-markov-property, lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-dynkin-pi-lambda, def-measure-kernel-and-probability-kernel, thm-measurability-of-integration-against-a-kernel, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.3.9"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Theorem 6.17"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion
[[def-brownian-motion]] with usual augmentation $(\mathcal F_t)$
[[def-natural-and-usual-augmented-brownian-filtrations]], and let $\tau$ be a
stopping time for $(\mathcal F_t)$ with $\tau<\infty$ almost surely
[[def-continuous-time-stopping-time]]. Let $\mu$ be Wiener measure
[[def-wiener-measure-on-continuous-path-space]] and, for a bounded Borel
functional $\Phi$ on the product space $\mathbb R^{[0,\infty)}$, put
$$\Psi_\Phi(x):=\int_{C([0,\infty),\mathbb R)}\Phi(x+w)\,\mu(dw),\qquad x\in\mathbb R .$$
Here the product sigma-algebra is, by definition, the sigma-algebra generated
by all finite coordinate cylinders, and the product topology is the topology
of coordinatewise convergence.

Then, with the convention $B_\tau:=0$ on the null event $\{\tau=\infty\}$:

1. $B_\tau$ is $\mathcal F_\tau$-measurable, and the increment process
   $Z:=(B_{\tau+t}-B_\tau)_{t\ge0}$ is independent of $\mathcal F_\tau$; its
   finite-dimensional marginals are those of Wiener measure.
2. For every bounded Borel functional $\Phi$ on $\mathbb R^{[0,\infty)}$,
   $$E\bigl[\Phi\bigl((B_{\tau+t})_{t\ge0}\bigr)\bigm|\mathcal F_\tau\bigr] =\Psi_\Phi(B_\tau)\quad\text{almost surely}.$$
   Equivalently, the conditional law of the shifted future path given
   $\mathcal F_\tau$ is Wiener measure translated by $B_\tau$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, a stopping time $\tau$ for $(\mathcal F_t)$ with $\tau<\infty$ almost surely, and a bounded Borel functional $\Phi$.

[F1] Stopping time, stopped sigma-algebra, the strict-test description for right-continuous filtrations, and the containment $\mathcal F_\tau\subseteq\mathcal F_{\tau_n}$ for a decreasing family $\tau_n\downarrow\tau$. [[def-continuous-time-stopping-time]] [[def-natural-and-usual-augmented-brownian-filtrations]]

[F2] The usual augmentation is right-continuous and contains the raw filtration $\mathcal F^0_t=\sigma(B_s:s\le t)$ and every subset of a null event. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F3] For every $s\ge0$ and every bounded Borel functional $\Phi$, $E[\Phi((B_{s+t})_{t\ge0})|\mathcal F_s]=\Psi_\Phi(B_s)$ almost surely, and the same holds with $\mathcal F^0_s$ in place of $\mathcal F_s$. [[thm-brownian-future-path-markov-property]]

[F4] Brownian paths are continuous on a probability-one event; by the product-topology convention in the statement, coordinatewise convergence is convergence in the product topology, and continuous functions preserve it. [[def-brownian-motion]]

[F5] Conditional-expectation versions are characterized by their event integrals and are unique almost surely; monotone and dominated convergence pass limits through integrals; bounded Borel functions are increasing limits of simple functions. [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]] [[thm-monotone-convergence-for-the-integral]] [[thm-dominated-convergence]] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]

[F6] By the product-sigma convention in the statement, the half-line coordinate cylinders $\{z:z(t_1)\le c_1,\dots,z(t_k)\le c_k\}$ form a pi-system containing the whole space that generates the product sigma-algebra. A lambda-system containing a pi-system contains the generated sigma-algebra. [[thm-dynkin-pi-lambda]]

[F7] $x\mapsto\Psi_\Phi(x)$ is Borel for bounded Borel $\Phi$, by the integration theorem for the constant probability kernel $\mu$; Wiener measure is the law of a continuous Brownian motion. [[thm-measurability-of-integration-against-a-kernel]] [[def-measure-kernel-and-probability-kernel]] [[def-wiener-measure-on-continuous-path-space]] [[lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates]]

[F8] AC supplies the conditional-expectation interface of [F5]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For $n\ge1$ define the dyadic ceiling $\tau_n:=2^{-n}\lceil2^n\tau\rceil$, with $\tau_n:=\infty$ when $\tau=\infty$. Then $\tau\le\tau_n\le\tau+2^{-n}$ wherever $\tau<\infty$, so $\tau_n\downarrow\tau$ almost surely, each $\tau_n$ takes values in the countable set $2^{-n}\mathbb Z_{\ge0}\cup\{\infty\}$, and each $\tau_n$ is a stopping time for $(\mathcal F_t)$: for $t\ge0$, $\{\tau_n\le t\}=\{\tau\le2^{-n}\lfloor2^nt\rfloor\}\in\mathcal F_{2^{-n}\lfloor2^nt\rfloor}\subseteq\mathcal F_t$. Moreover $\mathcal F_\tau\subseteq\mathcal F_{\tau_n}$ because for $A\in\mathcal F_\tau$ one has $A\cap\{\tau_n\le t\}=A\cap\{\tau\le t\}\cap\{\tau_n\le t\}\in\mathcal F_t$. [F1, F2, given]

2.1 The countably valued variables $B_{\tau_n}$ are measurable, $B_{\tau_n}=\sum_{r\in2^{-n}\mathbb Z_{\ge0}}B_r1_{\{\tau_n=r\}}$ on $\{\tau<\infty\}$ with $\{\tau_n=r\}\in\mathcal F_r$. For $t\ge0$ the stopped value $B_{\tau\wedge t}$ is $\mathcal F_t$-measurable: put $\sigma_k:=\min\bigl(2^{-k}\lceil2^k(\tau\wedge t)\rceil,t\bigr)$, a countably valued stopping time with all values at most $t$ and $\sigma_k\downarrow\tau\wedge t$; then $B_{\sigma_k}$ is $\mathcal F_t$-measurable and $B_{\tau\wedge t}=\lim_kB_{\sigma_k}$ almost surely by [F4]. Hence for every real $c$, $\{B_\tau<c\}\cap\{\tau\le t\}=\{B_{\tau\wedge t}<c\}\cap\{\tau\le t\}\in\mathcal F_t$, so $B_\tau\in\mathcal F_\tau$; the same convergence with $t$ replaced by $t+u$ shows that each coordinate $B_{\tau+u}$ is measurable, so $u\mapsto B_{\tau+u}$ and $Z$ are random elements of the product space. [F1, F2, F4, step 1.1]

3.1 Let $\rho$ be a stopping time taking values in a countable set $D\subseteq[0,\infty)$ with $\rho<\infty$ almost surely; by the argument of step 2.1 with $\rho$ in place of $\tau$ the values $B_\rho$ are $\mathcal F_\rho$-measurable and $\Psi_\Phi(B_\rho)$ is bounded and $\mathcal F_\rho$-measurable for every bounded Borel functional $\Phi$. For every $A\in\mathcal F_\rho$, $\int_A\Phi((B_{\rho+u})_{u\ge0})\,dP=\int_A\Psi_\Phi(B_\rho)\,dP$: for each $r\in D$ the event $A_r:=A\cap\{\rho=r\}$ lies in $\mathcal F_r$, and [F3] at time $r$ gives $\int_{A_r}\Phi((B_{r+u})_{u\ge0})\,dP=\int_{A_r}\Psi_\Phi(B_r)\,dP$; on $A_r$ one has $(B_{\rho+u})=(B_{r+u})$ and $B_\rho=B_r$, and summing over the countable set $D$ gives the identity. By [F5]'s uniqueness, $E[\Phi((B_{\rho+u}))|\mathcal F_\rho]=\Psi_\Phi(B_\rho)$ almost surely. [F3, F5, given, step 2.1]

4.1 For every bounded continuous functional $g$ on the product space the identity of step 3.1 passes to the general stopping time $\tau$: as $n\to\infty$ one has $B_{\tau_n+u}\to B_{\tau+u}$ almost surely for each fixed $u$ by continuity of the path at the time $\tau+u$, so $\Phi((B_{\tau_n+u}))\to\Phi((B_{\tau+u}))$ almost surely by [F4], and dominated convergence [F5] applied to the identity of step 3.1 with $\rho=\tau_n$ (admissible since $A\in\mathcal F_\tau\subseteq\mathcal F_{\tau_n}$) gives $\int_A\Phi((B_{\tau+u}))\,dP=\lim_n\int_A\Psi_\Phi(B_{\tau_n})\,dP$. For the right side, $B_{\tau_n}\to B_\tau$ almost surely and $\Psi_\Phi$ is continuous, because $g$ is continuous and bounded and [F5]'s dominated convergence applies to $g(x_k+w)\to g(x+w)$ for $x_k\to x$; hence $\Psi_\Phi(B_{\tau_n})\to\Psi_\Phi(B_\tau)$ almost surely and dominated convergence identifies the limit as $\int_A\Psi_\Phi(B_\tau)\,dP$. This holds for every $A\in\mathcal F_\tau$. [F4, F5, step 1.1, step 3.1]

5.1 For $c\in\mathbb R$ and $k\ge1$ let $g_k(y):=\max\{0,\min\{1,k(c-y)+1\}\}$; then $g_k$ is continuous and bounded with $g_k\downarrow1_{(-\infty,c]}$ pointwise as $k\to\infty$. Consequently, for a half-line cylinder $\Gamma=\{z:z(t_i)\le c_i,\ i\le m\}$ the functions $G_k(z):=\prod_{i\le m}g_k(z(t_i))$ are bounded, continuous on the product space, and decrease pointwise to $1_\Gamma$. Applying step 4.1 to $G_k$ and passing to the limit with dominated convergence [F5] on both sides, using $G_k((B_{\tau+u}))\downarrow1_\Gamma((B_{\tau+u}))$ and $\Psi_{G_k}(B_\tau)\to\Psi_{1_\Gamma}(B_\tau)$ pointwise, gives $\int_A1_\Gamma((B_{\tau+u}))\,dP=\int_A\Psi_{1_\Gamma}(B_\tau)\,dP$ for every $A\in\mathcal F_\tau$. [F5, step 4.1]

6.1 Let $\mathcal D$ be the class of product-measurable sets $\Gamma$ for which $\int_A1_\Gamma((B_{\tau+u}))\,dP=\int_A\Psi_{1_\Gamma}(B_\tau)\,dP$ for every $A\in\mathcal F_\tau$. Then $\mathcal D$ is a lambda-system: it contains the whole product space because $\Psi_{1}=\Psi_\Phi$ for $\Phi\equiv1$ is the constant $1$; it is closed under complements by subtracting the two finite identities; and it is closed under increasing countable unions by [F5]'s monotone convergence applied to the bounded sequences $1_{\Gamma_m}((B_{\tau+u}))\uparrow1_\Gamma((B_{\tau+u}))$ and $\Psi_{1_{\Gamma_m}}(B_\tau)\uparrow\Psi_{1_\Gamma}(B_\tau)$. By step 5.1 it contains every half-line cylinder, a pi-system containing the whole space that generates the product sigma-algebra, so [F6] gives $\mathcal D$ equal to the whole product sigma-algebra. [F5, F6, step 5.1]

7.1 For a bounded nonnegative Borel $\Phi$ with simple functionals $s_m\uparrow\Phi$, step 6.1 and linearity of the integral give $\int_As_m((B_{\tau+u}))\,dP=\int_A\Psi_{s_m}(B_\tau)\,dP$ for every $A\in\mathcal F_\tau$; monotone convergence [F5] on both sides, using $\Psi_{s_m}(x)\uparrow\Psi_\Phi(x)$ pointwise and the Borel measurability of $\Psi_\Phi$ from [F7], gives $\int_A\Phi((B_{\tau+u}))\,dP=\int_A\Psi_\Phi(B_\tau)\,dP$. Since $\Psi_\Phi(B_\tau)$ is bounded and $\mathcal F_\tau$-measurable by step 2.1 and [F7], [F5]'s uniqueness identifies it with $E[\Phi((B_{\tau+u}))|\mathcal F_\tau]$; splitting a bounded real $\Phi$ into positive and negative parts extends the identity to all bounded Borel $\Phi$. This is assertion 2. [F5, F7, step 2.1, step 6.1]

8.1 For assertion 1, fix a cylinder $\Gamma_0$ and put $\Phi_0(u):=1_{\Gamma_0}((u(t_i)-u(0))_{i\le k})$ with the corresponding product-measurable set $\Gamma_0$; the coordinate $u(0)$ is the translation offset. For every $x$ one has $\Phi_0(x+w)=1_{\Gamma_0}((w(t_i)-w(0))_{i\le k})$, independent of $x$, so $\Psi_{\Phi_0}(x)=\mu_{\mathrm{cyl}}(\Gamma_0):=\mu(\{w:(w(t_i)-w(0))_{i\le k}\in\Gamma_0\})$ is a constant; step 7.1 gives $P(A\cap\{Z\in\Gamma_0\})=\mu_{\mathrm{cyl}}(\Gamma_0)P(A)$ for every $A\in\mathcal F_\tau$, and taking $A=\Omega$ shows that the finite-dimensional marginals of $Z$ are those of Wiener measure. The class of product-measurable sets satisfying $P(A\cap\{Z\in\Gamma\})=P(A)P(Z\in\Gamma)$ for all $A\in\mathcal F_\tau$ is a lambda-system containing the cylinder pi-system, hence by [F6] equals the product sigma-algebra, so $Z$ is independent of $\mathcal F_\tau$ and its law on the product sigma-algebra has the finite-dimensional marginals of Wiener measure. [F6, step 2.1, step 7.1]

9.1 The degenerate cases are consistent with the proof: if $\tau\equiv t$ is deterministic then $\mathcal F_\tau=\mathcal F_t$ by right-continuity and [F1], and step 3.1 reduces to the deterministic future-path theorem [F3]; the null set $\{\tau=\infty\}$ is handled by the convention $B_\tau=0$ there and all identities are asserted almost surely; if $\Phi$ is constant, then $\Psi_\Phi$ is that constant and both sides agree; a coordinate at time $0$ is the deterministic offset $B_\tau$ and was covered in step 8.1; and the case $\Phi\equiv0$ gives $0=0$. AC is used only through [F8] in [F5]. [F1, F3, F8, given, step 8.1] ∎

## Source notes

Durrett, Theorem 7.3.9, approximates the stopping time by dyadic ceilings and passes to the limit through continuity; Sousi, Theorem 6.17, states the result for the right-continuous filtration. The proof above derives the general stopping-time identity from the deterministic future-path theorem by that approximation, extends it from continuous to half-line cylinders by monotone limits, and closes the product sigma-algebra with Dynkin's pi-lambda theorem; no regular-conditional-distribution theory is assumed.
