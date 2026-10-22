---
id: thm-nrqmx-quadratic-egorov
kind: theorem
domain: mathematics
library: mathematics
title: Fixed-time Weyl Egorov estimate for subquadratic potentials
status: draft
origin: pipeline
dependency_level: 4
deps:
  - def-nrqmx-weyl-symbol-wigner
  - lem-nrqmx-cubic-moyal-commutator-remainder
  - lem-nrqmx-bounded-symbol-estimate
  - thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution
  - thm-exact-hamiltonian-flow-preserves-energy-and-volume
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-mean-value-inequality-for-total-derivatives
  - thm-gronwall-integral-inequality
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  lem-nrqmx-cubic-moyal-commutator-remainder: mathematical-premise
  lem-nrqmx-bounded-symbol-estimate: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  thm-exact-hamiltonian-flow-preserves-energy-and-volume: mathematical-premise
  lem-c1-euclidean-maximal-flow-with-c2-upgrade: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: Theorem 4.14 and its Duhamel proof, printed pp. 40–42; the symbol and potential hypotheses here are established locally
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Chapter 8, §8.2, Theorem 8.2; that source obtains only an O(epsilon) estimate under its stated quantization route, not the Weyl O(epsilon^2) conclusion here
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 2, §§2.5–2.6, Wigner evolution and Heisenberg dynamics, printed pp. 50–54
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $0<\epsilon\le1$, and $V\in C^\infty(\mathbb R^d;\mathbb R)$ with every partial derivative of total order at least $2$ bounded. Set
$$ h(x,\xi)=\frac{|\xi|^2}{2}+V(x),\qquad H_\epsilon^0=-\frac{\epsilon^2}{2}\Delta+V(x)\quad\text{on }\mathcal S(\mathbb R^d). $$
Assume, as an explicit operator hypothesis, that for each $\epsilon$ a self-adjoint operator $H_\epsilon$ on $L^2(\mathbb R^d)$ extends $H_\epsilon^0$ and $\mathcal S(\mathbb R^d)$ is a core for $H_\epsilon$. Let
$$ U_\epsilon(t)=U_\epsilon(t,0) $$
be the unitary propagator supplied by [[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]] for the constant generator $H_\epsilon/\epsilon$. Define the global Hamiltonian flow by
$$ \dot x=\xi,\qquad \dot\xi=-\nabla V(x),\qquad \Phi_0=I. $$
For every $a\in C_c^\infty(\mathbb R^{2d})$ and finite $T>0$, there is $C_{T,V,a}<\infty$, independent of $0<\epsilon\le1$, such that
$$ \sup_{|t|\le T} \left\|U_\epsilon(t)^*\operatorname{Op}^W_\epsilon(a)U_\epsilon(t) -\operatorname{Op}^W_\epsilon(a\circ\Phi_t)\right\|_{L^2\to L^2} \le C_{T,V,a}\epsilon^2. $$
Only fixed finite times are covered. No Ehrenfest-time, caustic-uniformity, or physical measurement conclusion is asserted. If $V$ is a polynomial of degree at most two, the difference is identically zero.

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

[[lem-nrqmx-cubic-moyal-commutator-remainder]]

## Facts & Assumptions

**Given:** Countable Choice, $d,\epsilon,V,a,T$, the Weyl conventions of [[def-nrqmx-weyl-symbol-wigner]], and the explicit self-adjoint/core operator hypothesis in the Statement.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[A2] For each $\epsilon$, $H_\epsilon$ is self-adjoint, extends $H_\epsilon^0$ on $\mathcal S$, and $\mathcal S$ is a core. This is a hypothesis, not a conclusion for every potential satisfying the displayed derivative bounds.

[F1] The flow of a complete $C^1$ vector field is jointly $C^1$, and if the field is $C^2$ the state flow is $C^2$; its first two state variations solve the variational equations ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F2] If $\nabla V$ is globally $L$-Lipschitz, the Hamiltonian field $(\xi,-\nabla V(x))$ is globally Lipschitz and its unique flow is complete, with finite-time stability bound ([[thm-exact-hamiltonian-flow-preserves-energy-and-volume]]).

[F3] The mean-value inequality turns the bounded Hessian of $V$ into a global Lipschitz bound for $\nabla V$ ([[thm-mean-value-inequality-for-total-derivatives]]).

[F4] For each common-domain self-adjoint family $A(t)$ that is $C^1$ as a map from the common graph domain to $L^2$, there is a unitary strong propagator preserving that domain ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]]).

[F5] The cubic commutator remainder is bounded uniformly in $\epsilon$ for compactly supported smooth symbols, with the sign convention fixed by $[Q_j,P_k]=i\epsilon\delta_{jk}$ ([[lem-nrqmx-cubic-moyal-commutator-remainder]]).

[F6] The order-zero Weyl estimate bounds operators by finitely many bounded symbol derivatives, uniformly for $0<\epsilon\le1$ ([[lem-nrqmx-bounded-symbol-estimate]]).

[F7] The total Euclidean chain and coordinate product rules, Gronwall estimate, and Banach-valued fundamental theorem of calculus apply with the conventions of the cited items ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-gronwall-integral-inequality]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

## Proof
**Given:** The data of the Statement and [A1]–[A2], [F1]–[F7]. Write $X(x,\xi)=(\xi,-\nabla V(x))$.

1.1 The bounded Hessian and [F3] imply that $\nabla V$ is globally Lipschitz. Thus $X$ is globally Lipschitz; [F2] gives a unique global flow $\Phi_t$. The bound $|X(z)|\le C(1+|z|)$ follows from this Lipschitz estimate and $X(0)$, so the integral equation and Gronwall bound $\Phi_t(z)$ on each compact time interval and compact initial set. To obtain the smoothness needed below, start with the $C^2$ flow and variational equations of [F1]. Assume inductively that the state derivatives through order $k-1$ are continuous. For a coordinate vector $e_j$, take the difference quotient of the integral equation for $D^{k-1}\Phi_t(z)$ between $z+he_j$ and $z$. The mean-value integral formula applied to each occurrence of $D^\ell X(\Phi_t(z+he_j))-D^\ell X(\Phi_t(z))$ writes this quotient as a linear integral equation whose coefficients converge uniformly on compact time/initial sets, since the lower derivatives of $\Phi$ and the derivatives of $X$ are uniformly continuous on their compact images. The chain rule expresses its limiting inhomogeneous term as
$$ \sum_{\substack{\pi\text{ a partition of }\{1,\ldots,k\}\\|\pi|\ge2}} D^{|\pi|}X(\Phi_t(z)) \big[D^{|B_1|}\Phi_t(z),\ldots,D^{|B_{|\pi|}|}\Phi_t(z)\big], $$
where $B_1,\ldots,B_{|\pi|}$ are the blocks of $\pi$; the unknown $D^k\Phi_t$ appears linearly with coefficient $DX(\Phi_t)$, and its initial value is $0$ for $k\ge2$. The corresponding linear Volterra equation has a unique solution by the same local Picard iteration as [F1], and Gronwall [F7] makes the difference between the quotient and that solution tend uniformly to zero. Thus $D^k\Phi_t$ exists and is continuous, completing the induction. Since $DX$ is bounded and all $D^\ell X$ for $\ell\ge2$ are bounded by the assumed bounds on derivatives of $V$, the variational equation bounds $D\Phi_t$; each higher equation has bounded forcing made from lower derivatives, so induction and Gronwall bound every $D^k\Phi_t$ on compact time/initial sets. Hence $(t,z)\mapsto\Phi_t(z)$ is smooth with all finite derivatives bounded there. [A1, F1, F2, F3, F7, algebra]

1.2 Put $a_s=a\circ\Phi_{t-s}$ for fixed $t$. Since $\Phi_\tau$ is a global diffeomorphism with inverse $\Phi_{-\tau}$, $\operatorname{supp}(a_s)=\Phi_{-(t-s)}(\operatorname{supp}a)$. Since $|t-s|\le2T$, the image of $[-2T,2T]\times\operatorname{supp}a$ under the continuous flow is compact, and step 1.1 bounds all derivatives of $a_s$ on that compact set. Thus $a_s\in C_c^\infty$, its supports lie in one compact set for $|s|,|t|\le T$, and every fixed finite symbol seminorm of $a_s$ is uniformly bounded. To verify the bracket identity, write $X=(\partial_\xi h,-\partial_x h)$, so $Xf=\{f,h\}$. Differentiating the autonomous flow law $\Phi_{\tau+r}(z)=\Phi_\tau(\Phi_r(z))$ in $r$ at $0$ gives $D\Phi_\tau(z)X(z)=X(\Phi_\tau(z))$. The chain rule now gives
$$ \partial_s a_s=-\{a_s,h\}. $$
The family $H_\epsilon/\epsilon$ is constant on the common graph domain $D(H_\epsilon)$, so [F4] supplies the forward propagator for $t\ge0$; its inverse defines $U_\epsilon(t)=U_\epsilon(-t)^*$ for $t<0$. It preserves $D(H_\epsilon)$ and is strongly differentiable there. [A2, F1, F7, algebra]

2.1 For $b\in C_c^\infty(\mathbb R^{2d})$, its Weyl kernel is Schwartz in $(x,y)$. Differentiating under its integral and multiplying by powers of $x$ leaves absolutely integrable products of Schwartz functions, so $\operatorname{Op}^W_\epsilon(b)$ maps $\mathcal S$ into itself. Apply [F5] on $\mathcal S$ to obtain the bounded identity
$$ \frac{i}{\epsilon}[H_\epsilon,\operatorname{Op}^W_\epsilon(b)] =\operatorname{Op}^W_\epsilon(\{b,h\})+\epsilon^2\operatorname{Op}^W_\epsilon(r_{\epsilon,b,V}). $$
The right side is bounded by [F5] and [F6]. Because $\mathcal S$ is a graph core for $H_\epsilon$, this commutator identity extends to $D(H_\epsilon)$: if $u_n\in\mathcal S$, $u_n\to u$, and $H_\epsilon u_n\to H_\epsilon u$, then boundedness of $\operatorname{Op}(b)$ and of the commutator makes both $\operatorname{Op}(b)u_n$ and $H_\epsilon\operatorname{Op}(b)u_n=\operatorname{Op}(b)H_\epsilon u_n+[H_\epsilon,\operatorname{Op}(b)]u_n$ converge; closedness of $H_\epsilon$ gives $\operatorname{Op}(b)u\in D(H_\epsilon)$ and the identity there. [A2, F5, F6, algebra]

2.2 For $\psi\in D(H_\epsilon)$, differentiate
$$ F(s)\psi:=U_\epsilon(s)^*\operatorname{Op}^W_\epsilon(a_s)U_\epsilon(s)\psi . $$
The domain preservation in [F4] and step 2.1 justify the product rule in $L^2$; the symbol derivative in step 1.2 is also an operator-norm derivative by [F6], since the symbols and their difference quotients have common compact support and converge with all derivatives required by that estimate. The two Hamiltonian terms combine to $U_\epsilon(s)^*(i/\epsilon)[H_\epsilon,\operatorname{Op}(a_s)]U_\epsilon(s)$; $\partial_s\operatorname{Op}(a_s)=-\operatorname{Op}(\{a_s,h\})$ cancels its Poisson term by step 2.1. Therefore
$$ F'(s)\psi=\epsilon^2U_\epsilon(s)^*\operatorname{Op}^W_\epsilon(r_{\epsilon,a_s,V})U_\epsilon(s)\psi . $$
Step 1.2 gives a uniform bound on $p_{12d+16}(a_s)$. The remainder estimate [F5] followed by [F6] consequently yields
$$ \sup_{|s|,|t|\le T}\|\operatorname{Op}^W_\epsilon(r_{\epsilon,a_s,V})\|\le C_{T,V,a}. $$
Integrate the derivative by [F7], use unitarity, and evaluate the endpoints $F(t)\psi=U_\epsilon(t)^*\operatorname{Op}(a)U_\epsilon(t)\psi$ and $F(0)\psi=\operatorname{Op}(a\circ\Phi_t)\psi$. This gives the required $C_{T,V,a}|t|\epsilon^2\|\psi\|$ bound on the dense domain; boundedness of both endpoint operators extends it to all of $L^2$, uniformly for $|t|\le T$. Reversing the integration orientation gives the same estimate for $t<0$. [step 1.2, step 2.1, step 2.2, A2, F4, F5, F6, F7, algebra]

3.1 If $V$ has degree at most two, then $D^3V=0$, so the integral Taylor remainder $\Delta_V$ in the proof of [[lem-nrqmx-cubic-moyal-commutator-remainder]] vanishes. The identity in step 2.1 then has no $\epsilon^2$ term; the derivative in step 2.2 is identically zero, and the two endpoint operators are equal for every $t$. [step 2.1, step 2.2, F5, algebra] ∎
