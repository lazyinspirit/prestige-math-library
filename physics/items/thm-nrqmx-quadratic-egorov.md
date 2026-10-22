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
  - lem-nrqmx-weyl-hilbert-schmidt-bound
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
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  lem-nrqmx-weyl-hilbert-schmidt-bound: mathematical-premise
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
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
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
      locator: Theorem 4.14 and its Duhamel proof, printed pp. 38–39; the symbol and potential hypotheses here are established locally
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
Assume, as an explicit operator hypothesis, that for each $\epsilon$ a densely defined self-adjoint operator $H_\epsilon$ on $L^2(\mathbb R^d)$ extends $H_\epsilon^0$ and $\mathcal S(\mathbb R^d)$ is a core for $H_\epsilon$. Let $U_\epsilon(t)$, $t\in\mathbb R$, be the strongly continuous unitary group with $U_\epsilon(0)=I$, preserving $D(H_\epsilon)$ and satisfying
$$ i\,\partial_tU_\epsilon(t)y=\epsilon^{-1}H_\epsilon U_\epsilon(t)y\qquad(y\in D(H_\epsilon)). $$
Thus its generator is $-iH_\epsilon/\epsilon$; for $t<0$, $U_\epsilon(t)=U_\epsilon(-t)^*$. Define the global Hamiltonian flow by
$$ \dot x=\xi,\qquad \dot\xi=-\nabla V(x),\qquad \Phi_0=I. $$
For every $a\in C_c^\infty(\mathbb R^{2d})$ and finite $T>0$, there is $C_{T,V,a}<\infty$, independent of $0<\epsilon\le1$, such that
$$ \sup_{|t|\le T} \left\|U_\epsilon(t)^*\operatorname{Op}^W_\epsilon(a)U_\epsilon(t) -\operatorname{Op}^W_\epsilon(a\circ\Phi_t)\right\|_{L^2\to L^2} \le C_{T,V,a}\epsilon^2. $$
Only fixed finite times are covered by the first estimate. No Ehrenfest-time, caustic-uniformity, or physical measurement conclusion is asserted. If $V$ is a polynomial of degree at most two, the difference in that branch is identically zero.

There is also an exact statement for every real quadratic phase-space Hamiltonian. Let $z=(x,\xi)\in\mathbb R^{2d}$, let $G=G^T\in\mathbb R^{2d\times2d}$, $\ell\in\mathbb R^{2d}$ and $c\in\mathbb R$, and put
$$ h(z)=\tfrac12 z^TGz+\ell\cdot z+c. $$
Set $J=\begin{pmatrix}0&I_d\\-I_d&0\end{pmatrix}$ and $\widehat z=(Q_1,\ldots,Q_d,P_1,\ldots,P_d)$, where $Q_j u=x_j u$ and $P_j u=-i\epsilon\partial_{x_j}u$ on $\mathcal S(\mathbb R^d)$. On $\mathcal S(\mathbb R^d)$ define the Weyl realization by
$$ H_{\epsilon,h}^0:=cI+\sum_j\ell_j\widehat z_j+\tfrac14\sum_{j,k}G_{jk}(\widehat z_j\widehat z_k+\widehat z_k\widehat z_j). $$
For each $0<\epsilon\le1$, assume a densely defined self-adjoint operator $H_{\epsilon,h}$ on $L^2(\mathbb R^d)$ extends $H_{\epsilon,h}^0$ and $\mathcal S(\mathbb R^d)$ is a core for it. Let $U_{\epsilon,h}(t)$ be the strongly continuous unitary group with $U_{\epsilon,h}(0)=I$, preserving $D(H_{\epsilon,h})$ and satisfying
$$ i\,\partial_tU_{\epsilon,h}(t)y=\epsilon^{-1}H_{\epsilon,h}U_{\epsilon,h}(t)y\qquad(y\in D(H_{\epsilon,h})). $$
Its generator is $-iH_{\epsilon,h}/\epsilon$. The global Hamiltonian flow, defined by $\dot z=J\nabla h(z)=J(Gz+\ell)$ and $\Phi_0(z)=z$, is
$$ \Phi_t(z)=e^{tJG}z+\int_0^t e^{(t-s)JG}J\ell\,ds. $$
Here $e^{tJG}:=\sum_{n=0}^\infty t^n(JG)^n/n!$ is the matrix exponential.
Then for every $a\in\mathcal S(\mathbb R^{2d})$ and every $t\in\mathbb R$,
$$ U_{\epsilon,h}(t)^*\operatorname{Op}^W_\epsilon(a)U_{\epsilon,h}(t)=\operatorname{Op}^W_\epsilon(a\circ\Phi_t). $$

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

[[lem-nrqmx-cubic-moyal-commutator-remainder]]

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]]

## Facts & Assumptions

**Given:** Countable Choice, $d,\epsilon,V,a,T$, the Weyl conventions of [[def-nrqmx-weyl-symbol-wigner]], and the explicit self-adjoint/core operator hypothesis in the Statement.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[A2] In the first branch, for each $\epsilon$, $H_\epsilon$ is densely defined and self-adjoint, extends $H_\epsilon^0$ on $\mathcal S$, and $\mathcal S$ is a core. In the exact quadratic branch, for each $\epsilon$, $H_{\epsilon,h}$ is densely defined and self-adjoint and extends the displayed $H_{\epsilon,h}^0$, with $\mathcal S$ a core. Self-adjoint means equality $H=H^*$ including equality of domains and values ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). In either branch, “$\mathcal S$ is a core” means that for every $u\in D(H)$ there is a sequence $u_n\in\mathcal S$ with $\|u_n-u\|_2^2+\|Hu_n-Hu\|_2^2\to0$, equivalently $\mathcal S$ is dense in $D(H)$ for the graph norm $\|u\|_H=(\|u\|_2^2+\|Hu\|_2^2)^{1/2}$. These operator assumptions are hypotheses; the first is not a conclusion for every displayed potential.

[F1] The flow of a complete $C^1$ vector field is jointly $C^1$, and if the field is $C^2$ the state flow is $C^2$; its first two state variations solve the variational equations ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F2] If $\nabla V$ is globally $L$-Lipschitz, the Hamiltonian field $(\xi,-\nabla V(x))$ is globally Lipschitz and its unique flow is complete, with finite-time stability bound ([[thm-exact-hamiltonian-flow-preserves-energy-and-volume]]).

[F3] The mean-value inequality turns the bounded Hessian of $V$ into a global Lipschitz bound for $\nabla V$ ([[thm-mean-value-inequality-for-total-derivatives]]).

[F4] For either self-adjoint operator $H$ in [A2], set $Y=D(H)$ with $\|u\|_Y=(\|u\|_2^2+\|Hu\|_2^2)^{1/2}$. Self-adjointness makes $H$ closed, so its graph is closed in $L^2\times L^2$ and $Y$ is Hilbert; the inclusion $Y\hookrightarrow L^2$ is continuous by $\|u\|_2\le\|u\|_Y$. The constant family $A(t)=H/\epsilon$ is self-adjoint on $Y$ and is a $C^1$ map $Y\to L^2$ with derivative zero. The common-domain evolution theorem therefore supplies a strongly continuous unitary propagator preserving $Y$ on every bounded time interval; for a constant generator its group law and inverses define the unitary group for all real times ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F5] The cubic commutator remainder is bounded uniformly in $\epsilon$ for compactly supported smooth symbols, with the sign convention fixed by $[Q_j,P_k]=i\epsilon\delta_{jk}$ ([[lem-nrqmx-cubic-moyal-commutator-remainder]]).

[F6] The order-zero Weyl estimate bounds operators by finitely many bounded symbol derivatives, uniformly for $0<\epsilon\le1$ ([[lem-nrqmx-bounded-symbol-estimate]]).

[F7] The total Euclidean chain and coordinate product rules, Gronwall estimate, and Banach-valued fundamental theorem of calculus apply with the conventions of the cited items ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-gronwall-integral-inequality]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F8] Complex integration by parts is valid on decaying lines when the differentiated products are integrable and endpoint products vanish. The Weyl kernels and their derivatives below are Schwartz; apply the line result coordinatewise with Fubini ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F9] Fourier transformation maps Schwartz functions continuously to Schwartz functions. For fixed $q$, the kernel integral is the Fourier transform in $\xi$ of $b(q,\xi)$; differentiating under that absolutely convergent integral and integrating by parts [F8] gives rapid decay in $r$, while the Schwartz seminorms of $b$ give rapid decay in $q$. Thus the kernel is Schwartz in $(q,r)$, and the invertible linear change $(q,r)\mapsto(x,y)$ preserves Schwartz space ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

## Proof
**Given:** The data of the Statement and [A1]–[A2], [F1]–[F9]. Write $X(x,\xi)=(\xi,-\nabla V(x))$.


1.1 The bounded Hessian and [F3] imply that $\nabla V$ is globally Lipschitz. Thus $X$ is globally Lipschitz; [F2] gives a unique global flow $\Phi_t$. The bound $|X(z)|\le C(1+|z|)$ follows from this Lipschitz estimate and $X(0)$, so the integral equation and Gronwall bound $\Phi_t(z)$ on each compact time interval and compact initial set. To obtain the smoothness needed below, start with the $C^2$ flow and variational equations of [F1]. Assume inductively that the state derivatives through order $k-1$ are continuous. For a coordinate vector $e_j$, take the difference quotient of the integral equation for $D^{k-1}\Phi_t(z)$ between $z+he_j$ and $z$. The mean-value integral formula applied to each occurrence of $D^\ell X(\Phi_t(z+he_j))-D^\ell X(\Phi_t(z))$ writes this quotient as a linear integral equation whose coefficients converge uniformly on compact time/initial sets, since the lower derivatives of $\Phi$ and the derivatives of $X$ are uniformly continuous on their compact images. The chain rule expresses its limiting inhomogeneous term as $ \sum_{\substack{\pi\text{ a partition of }\{1,\ldots,k\}\\|\pi|\ge2}} D^{|\pi|}X(\Phi_t(z)) \big[D^{|B_1|}\Phi_t(z),\ldots,D^{|B_{|\pi|}|}\Phi_t(z)\big], $ where $B_1,\ldots,B_{|\pi|}$ are the blocks of $\pi$; the unknown $D^k\Phi_t$ appears linearly with coefficient $DX(\Phi_t)$, and its initial value is $0$ for $k\ge2$. The corresponding linear Volterra equation has a unique solution by the same local Picard iteration as [F1], and Gronwall [F7] makes the difference between the quotient and that solution tend uniformly to zero. Thus $D^k\Phi_t$ exists and is continuous, completing the induction. Since $DX$ is bounded and all $D^\ell X$ for $\ell\ge2$ are bounded by the assumed bounds on derivatives of $V$, the variational equation bounds $D\Phi_t$; each higher equation has bounded forcing made from lower derivatives, so induction and Gronwall bound every $D^k\Phi_t$ on compact time/initial sets. Hence $(t,z)\mapsto\Phi_t(z)$ is smooth with all finite derivatives bounded there. [A1, F1, F2, F3, F7, algebra]

1.2 For $b\in C_c^\infty(\mathbb R^{2d})$, its Weyl kernel is Schwartz in $(x,y)$. Differentiating under its integral and multiplying by powers of $x$ leaves absolutely integrable products of Schwartz functions, so $\operatorname{Op}^W_\epsilon(b)$ maps $\mathcal S$ into itself. Apply [F5] on $\mathcal S$ to obtain the bounded identity $ \frac{i}{\epsilon}[H_\epsilon,\operatorname{Op}^W_\epsilon(b)] =\operatorname{Op}^W_\epsilon(\{b,h\})+\epsilon^2\operatorname{Op}^W_\epsilon(r_{\epsilon,b,V}). $ The right side is bounded by [F5] and [F6]. For each $u\in D(H_\epsilon)$, [A2] supplies $u_n\in\mathcal S$ with $\|u_n-u\|_2^2+\|H_\epsilon u_n-H_\epsilon u\|_2^2\to0$. Boundedness of $\operatorname{Op}(b)$ and of the commutator makes both $\operatorname{Op}(b)u_n$ and $H_\epsilon\operatorname{Op}(b)u_n=\operatorname{Op}(b)H_\epsilon u_n+[H_\epsilon,\operatorname{Op}(b)]u_n$ converge; closedness of the self-adjoint $H_\epsilon$ gives $\operatorname{Op}(b)u\in D(H_\epsilon)$ and the identity there. [A2, F5, F6, algebra]

2.1 Put $a_s=a\circ\Phi_{t-s}$ for fixed $t$. Since $\Phi_\tau$ is a global diffeomorphism with inverse $\Phi_{-\tau}$, $\operatorname{supp}(a_s)=\Phi_{-(t-s)}(\operatorname{supp}a)$. Since $|t-s|\le2T$, the image of $[-2T,2T]\times\operatorname{supp}a$ under the continuous flow is compact, and step 1.1 bounds all derivatives of $a_s$ on that compact set. Thus $a_s\in C_c^\infty$, its supports lie in one compact set for $|s|,|t|\le T$, and every fixed finite symbol seminorm of $a_s$ is uniformly bounded. To verify the bracket identity, write $X=(\partial_\xi h,-\partial_x h)$, so $Xf=\{f,h\}$. Differentiating the autonomous flow law $\Phi_{\tau+r}(z)=\Phi_\tau(\Phi_r(z))$ in $r$ at $0$ gives $D\Phi_\tau(z)X(z)=X(\Phi_\tau(z))$. The chain rule now gives $ \partial_s a_s=-\{a_s,h\}. $ The family $H_\epsilon/\epsilon$ is constant on the common graph domain $D(H_\epsilon)$, so [F4] supplies the forward propagator for $t\ge0$; its inverse defines $U_\epsilon(t)=U_\epsilon(-t)^*$ for $t<0$. It preserves $D(H_\epsilon)$ and is strongly differentiable there. [step 1.1, A2, F1, F7, algebra]

3.1 For $\psi\in D(H_\epsilon)$, differentiate $ F(s)\psi:=U_\epsilon(s)^*\operatorname{Op}^W_\epsilon(a_s)U_\epsilon(s)\psi . $ The domain preservation in [F4] and step 1.2 justify the product rule in $L^2$; the symbol derivative in step 2.1 is also an operator-norm derivative by [F6], since the symbols and their difference quotients have common compact support and converge with all derivatives required by that estimate. The two Hamiltonian terms combine to $U_\epsilon(s)^*(i/\epsilon)[H_\epsilon,\operatorname{Op}(a_s)]U_\epsilon(s)$; $\partial_s\operatorname{Op}(a_s)=-\operatorname{Op}(\{a_s,h\})$ cancels its Poisson term by step 1.2. Therefore $ F'(s)\psi=\epsilon^2U_\epsilon(s)^*\operatorname{Op}^W_\epsilon(r_{\epsilon,a_s,V})U_\epsilon(s)\psi . $ Step 2.1 gives a uniform bound on $p_{12d+16}(a_s)$. The remainder estimate [F5] followed by [F6] consequently yields $ \sup_{|s|,|t|\le T}\|\operatorname{Op}^W_\epsilon(r_{\epsilon,a_s,V})\|\le C_{T,V,a}. $ The derivative must also be continuous up to the endpoints to use [F7]. The local remainder formula in [[lem-nrqmx-cubic-moyal-commutator-remainder]] is linear in its symbol argument. For fixed $t$, the symbols $a_s$ have common compact support on the interval and vary continuously in every Schwartz seminorm by step 2.1; applying the remainder estimate to $a_s-a_{s'}$ and then [F6] shows $\|\operatorname{Op}^W_\epsilon(r_{\epsilon,a_s,V})-\operatorname{Op}^W_\epsilon(r_{\epsilon,a_{s'},V})\|\to0$ as $s'\to s$. Thus the remainder operators are norm-continuous. Strong continuity of $U_\epsilon(s)$ and its adjoint, together with uniform boundedness of these operators, makes $s\mapsto U_\epsilon(s)^*\operatorname{Op}^W_\epsilon(r_{\epsilon,a_s,V})U_\epsilon(s)\psi$ continuous for each fixed $\psi$. The derivative in the displayed formula therefore extends continuously to both endpoints. Integrate it by [F7], use unitarity, and evaluate the endpoints $F(t)\psi=U_\epsilon(t)^*\operatorname{Op}(a)U_\epsilon(t)\psi$ and $F(0)\psi=\operatorname{Op}(a\circ\Phi_t)\psi$. This gives the required $C_{T,V,a}|t|\epsilon^2\|\psi\|$ bound on the dense domain; boundedness of both endpoint operators extends it to all of $L^2$, uniformly for $|t|\le T$. Reversing the integration orientation gives the same estimate for $t<0$. [step 2.1, step 1.2, A2, F4, F5, F6, F7, algebra]

4.1 If $V$ has degree at most two, then $D^3V=0$, so the integral Taylor remainder $\Delta_V$ in the proof of [[lem-nrqmx-cubic-moyal-commutator-remainder]] vanishes. The identity in step 1.2 then has no $\epsilon^2$ term; the derivative in step 3.1 is identically zero, and the two endpoint operators are equal for every $t$. [step 1.2, step 3.1, F5, algebra]

5.1 For the exact quadratic branch, the series defining the matrix exponential and its differentiated series converge uniformly on compact time intervals. Differentiating the affine formula in the Statement shows that it solves $\dot z=J(Gz+\ell)$ with initial value $z$. The difference $w$ of any two solutions with the same initial value satisfies $|w(t)|\le\|JG\|\int_0^{|t|}|w(s)|\,ds$, so Gronwall gives uniqueness. Uniqueness for this autonomous system gives $\Phi_t\circ\Phi_s=\Phi_{t+s}$ and $\Phi_t^{-1}=\Phi_{-t}$. Now put $A=\operatorname{Op}^W_\epsilon(b)$ for $b\in\mathcal S(\mathbb R^{2d})$. By [F9], its kernel $K_b(x,y)$ is Schwartz. Consequently $A$ maps $\mathcal S$ into itself, by differentiating the kernel integral and using the rapid decay of $K_b$ and its derivatives. With $q=(x+y)/2$ and $r=x-y$, the kernel definition gives $x_j=q_j+r_j/2$, $y_j=q_j-r_j/2$, and $\partial_x=\tfrac12\partial_q+\partial_r$, $\partial_y=\tfrac12\partial_q-\partial_r$. Integration by parts [F8] in $\xi_j$ gives $r_jK_b=i\epsilon K_{\partial_{\xi_j}b}$, and differentiation in $r_j$ gives $-i\epsilon\partial_{r_j}K_b=K_{\xi_jb}$. These identities yield, for every $1\le j\le2d$, $ \widehat z_j\operatorname{Op}^W_\epsilon(b)=\operatorname{Op}^W_\epsilon(z_jb)+\frac{i\epsilon}{2}\sum_kJ_{jk}\operatorname{Op}^W_\epsilon(\partial_kb),\qquad \operatorname{Op}^W_\epsilon(b)\widehat z_j=\operatorname{Op}^W_\epsilon(z_jb)-\frac{i\epsilon}{2}\sum_kJ_{jk}\operatorname{Op}^W_\epsilon(\partial_kb). $ Subtracting gives $[\widehat z_j,A]=i\epsilon\sum_kJ_{jk}\operatorname{Op}^W_\epsilon(\partial_kb)$. Apply this formula and the product commutator rule to the quadratic part of $H_{\epsilon,h}^0$; after combining equal terms by $G_{jk}=G_{kj}$, the result before using the left/right multiplication identities is $ \begin{aligned} [H_{\epsilon,h}^0,A] &=i\epsilon\sum_{j,k}\ell_jJ_{jk}\operatorname{Op}^W_\epsilon(\partial_kb)\\ &\quad+\frac{i\epsilon}{2}\sum_{j,k,\ell}G_{jk}\left(J_{k\ell}\widehat z_j\operatorname{Op}^W_\epsilon(\partial_\ell b)+J_{j\ell}\operatorname{Op}^W_\epsilon(\partial_\ell b)\widehat z_k\right). \end{aligned} $ Inserting the two multiplication identities above, the second-derivative contribution is proportional to $ \sum_{j,k,\ell,m}G_{jk}\left(J_{k\ell}J_{jm}-J_{j\ell}J_{km}\right)\operatorname{Op}^W_\epsilon(\partial_m\partial_\ell b), $ which is zero after swapping $j$ and $k$ in its second term. The first-derivative terms combine to $ i\epsilon\operatorname{Op}^W_\epsilon\left(\sum_{j,k,\ell}G_{jk}J_{k\ell}z_j\partial_\ell b+\sum_{j,k}\ell_jJ_{jk}\partial_kb\right)=-i\epsilon\operatorname{Op}^W_\epsilon\bigl(\nabla b\cdot J(Gz+\ell)\bigr)=-i\epsilon\operatorname{Op}^W_\epsilon(\{b,h\}). $ Here $\{b,h\}=\nabla b\cdot J\nabla h$ uses the sign convention of the Statement, and $\{b,h\}\in\mathcal S$ because $h$ is quadratic and $b$ is Schwartz. Both $A$ and $\operatorname{Op}(\{b,h\})$ are bounded by [[lem-nrqmx-weyl-hilbert-schmidt-bound]]. Since $A$ maps $\mathcal S$ to itself, the identity holds there. For each $u\in D(H_{\epsilon,h})$, graph-core density [A2] supplies $u_n\in\mathcal S$ converging to $u$ in the graph norm. As in step 1.2, boundedness of $A$ and of the commutator, followed by closedness of $H_{\epsilon,h}$, extends the identity to $D(H_{\epsilon,h})$. For fixed $t\in\mathbb R$, put $b_s=a\circ\Phi_{t-s}$ on the interval with endpoints $0,t$. The affine formula for $\Phi$ has an invertible linear part, so $b_s\in\mathcal S$: the chain rule expresses each derivative as a finite linear combination of derivatives of $a$ evaluated at $\Phi_{t-s}(z)$, and the inverse affine maps bound each polynomial weight in $z$ by a constant times the corresponding weight at $\Phi_{t-s}(z)$ on this compact time interval. These estimates also show $s\mapsto b_s$ is continuously differentiable in Schwartz seminorms. The flow law and chain rule give $\partial_sb_s=-\{b_s,h\}$. By the Hilbert–Schmidt bound, $s\mapsto\operatorname{Op}^W_\epsilon(b_s)$ is continuously differentiable in operator norm. For $\psi\in D(H_{\epsilon,h})$, differentiate $ F(s)\psi:=U_{\epsilon,h}(s)^*\operatorname{Op}^W_\epsilon(b_s)U_{\epsilon,h}(s)\psi. $ The propagator preserves the operator domain; the commutator identity just proved makes the Hamiltonian terms equal $U^*\operatorname{Op}(\{b_s,h\})U$, which cancels the symbol derivative $-U^*\operatorname{Op}(\{b_s,h\})U$. Thus $F'(s)\psi=0$, a continuous derivative extending to the endpoints. Integrating by [F7] on the interval between $0$ and $t$ gives $U_{\epsilon,h}(t)^*\operatorname{Op}(a)U_{\epsilon,h}(t)\psi=\operatorname{Op}(a\circ\Phi_t)\psi$. The domain is dense and both endpoint operators are bounded, so the identity extends to all of $L^2$. [A2, F4, F7, F8, F9, algebra] ∎
