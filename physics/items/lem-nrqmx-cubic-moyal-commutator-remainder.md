---
id: lem-nrqmx-cubic-moyal-commutator-remainder
kind: lemma
domain: mathematics
library: mathematics
title: Cubic Weyl commutator remainder for a smooth potential
status: published
origin: pipeline
dependency_level: 3
deps:
  - def-nrqmx-weyl-symbol-wigner
  - def-schwartz-space-and-its-seminorms
  - lem-nrqmx-bounded-symbol-estimate
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-inversion-on-schwartz-space
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - cor-c-one-change-of-variables-for-l-one-functions
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-ftc-second-part
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-nrqmx-bounded-symbol-estimate: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-ftc-second-part: mathematical-premise
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
      locator: Theorem 4.7 (Moyal expansion) and Corollary 4.11 (commutator of Weyl quantizations), printed pp. 36–38; the Hamiltonian here is outside the Schwartz-symbol hypotheses, so the extension is proved locally
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 2, §2.6, commutators and time evolution, printed pp. 53–54
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Chapter 4, Weyl composition and bounded-symbol estimates, printed pp. 64–67
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice. Let $d\geq1$, $0<\epsilon\leq1$, and let $V\in C^\infty(\mathbb R^d;\mathbb R)$ have every partial derivative of total order at least $2$ bounded. Put

$$ h(x,\xi):=\frac{|\xi|^2}{2}+V(x),\qquad H_\epsilon^0:=-\frac{\epsilon^2}{2}\Delta+V(x)\quad\hbox{on }\mathcal S(\mathbb R^d). $$

For $a\in C_c^\infty(\mathbb R^{2d})$, define $\{a,h\}=\nabla_xa\cdot\nabla_\xi h-\nabla_\xi a\cdot\nabla_xh$. There is a smooth symbol $r_{\epsilon,a,V}$ whose derivatives through order $N_d=4d+4$ are bounded uniformly for $0<\epsilon\leq1$, and on $\mathcal S(\mathbb R^d)$

$$ \frac{i}{\epsilon}[H_\epsilon^0,\operatorname{Op}^W_\epsilon(a)] =\operatorname{Op}^W_\epsilon(\{a,h\})+\epsilon^2\operatorname{Op}^W_\epsilon(r_{\epsilon,a,V}). $$

The last operator is the bounded-symbol extension of [lem-nrqmx-bounded-symbol-estimate]; for $M_d=12d+16$,

$$ \sum_{|\alpha|\leq N_d}\|\partial^\alpha r_{\epsilon,a,V}\|_\infty \leq C_{d,V}p_{M_d}(a),\qquad p_M(f):=\max_{|\beta|\leq M}\sup_z\langle z\rangle^M|\partial^\beta f(z)|,\quad \langle z\rangle=(1+|z|^2)^{1/2}. $$

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

[[lem-nrqmx-bounded-symbol-estimate]]

## Facts & Assumptions

**Given:** Countable Choice, $d\geq1$, $0<\epsilon\leq1$, the real potential $V$, and $a\in C_c^\infty(\mathbb R^{2d})$.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The Weyl kernel and Poisson-bracket sign convention are fixed in [[def-nrqmx-weyl-symbol-wigner]]; there $Q_j u=x_j u$ and $P_j u=-i\epsilon\partial_{x_j}u$ satisfy $[Q_j,P_k]=i\epsilon\delta_{jk}I$ on Schwartz functions. The Schwartz space consists of smooth functions with all polynomially weighted derivatives bounded ([[def-schwartz-space-and-its-seminorms]]).

[F2] The bounded-symbol extension has the derivative bound through $N_d=4d+4$ in [[lem-nrqmx-bounded-symbol-estimate]].

[F3] Fourier transformation and inversion preserve Schwartz space with the negative-sign convention ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[thm-fourier-inversion-on-schwartz-space]]).

[F4] Absolutely integrable products may be integrated in either order ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] The total chain rule and coordinate product rules hold for the smooth compositions and products below ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]).

[F6] The interval fundamental theorem gives endpoint increments by integrating a continuous derivative; for a complex-valued curve it applies to real and imaginary parts ([[thm-ftc-second-part]]).

[F7] Complex integration by parts on a line is valid when both derivative products are integrable and the endpoint product vanishes. Applied coordinatewise with Fubini, it applies below because the Fourier factors are Schwartz and the differentiated compactly supported symbols have vanishing boundary products ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F8] A $C^1$ diffeomorphism of open Euclidean sets changes integrals of complex $L^1$ functions by its absolute Jacobian ([[cor-c-one-change-of-variables-for-l-one-functions]]).

## Proof
**Given:** The data of the Statement and [A1]–[F8]. For $q,r\in\mathbb R^d$, let
$$ K_{\epsilon,a}(q,r):=(2\pi\epsilon)^{-d}\int e^{ir\cdot\xi/\epsilon}a(q,\xi)\,d\xi . $$

1.1 Since $a$ is compactly supported and smooth, Fourier inversion in its $\xi$ variable identifies $K_{\epsilon,a}((x+y)/2,x-y)$ with the kernel of $\operatorname{Op}^W_\epsilon(a)$. Its derivatives have rapid decay in $x-y$, uniformly on compact sets of $(x+y)/2$, by [F3]. To justify the potential term on Schwartz vectors, fix $x\in\mathbb R^d$ and put $g(s)=V(sx)$ on $[0,1]$. By [F6] applied twice and Fubini [F4], $$ V(x)=V(0)+\nabla V(0)\cdot x+\int_0^1(1-s)\,x^T D^2V(sx)x\,ds. $$ Thus boundedness of $D^2V$ gives $|V(x)|\le C(1+|x|^2)$. Applying [F6] once to each component of $\nabla V(sx)$ also gives $|\nabla V(x)|\le C(1+|x|)$, while all derivatives of $V$ of order at least $2$ are bounded by hypothesis. Hence every derivative of $V$ has at most polynomial growth. The product rule [F5] and Schwartz seminorm bounds show $Vu\in\mathcal S$ whenever $u\in\mathcal S$; differentiation also preserves $\mathcal S$. Therefore $H_\epsilon^0$ and the commutator in the Statement are well defined on $\mathcal S$. [given, A1, F3, F4, F5, F6, algebra]

2.1 Write $q=(x+y)/2$ and $r=x-y$. Then $\partial_x=\frac12\partial_q+\partial_r$, $\partial_y=\frac12\partial_q-\partial_r$, so $\partial_x^2-\partial_y^2=2\partial_q\cdot\partial_r$. Acting with the kinetic operator on the two kernel variables gives $[-\epsilon^2\Delta/2,\operatorname{Op}^W_\epsilon(a)]$ kernel $-\epsilon^2\partial_q\cdot\partial_rK_{\epsilon,a}$. Since $\partial_{r_j}e^{ir\cdot\xi/\epsilon}=i\xi_j e^{ir\cdot\xi/\epsilon}/\epsilon$, multiplication by $i/\epsilon$ turns this exactly into the Weyl kernel with symbol $\xi\cdot\nabla_xa$. [step 1.1, F1, algebra]

3.1 The potential part has kernel $(V(q+r/2)-V(q-r/2))K_{\epsilon,a}(q,r)$. To derive its Taylor remainder, fix $q,r$ and set $g(s)=V(q+sr)$ for $s\in[-1/2,1/2]$. Applying [F6] three times to $g$ and to $s\mapsto g(-s)$, with Fubini [F4] to combine the resulting integrals, gives for $0\le t\le1/2$ $$ g(t)=g(0)+tg'(0)+\frac{t^2}{2}g''(0)+\frac12\int_0^t(t-s)^2g'''(s)\,ds, $$ $$ g(-t)=g(0)-tg'(0)+\frac{t^2}{2}g''(0)-\frac12\int_0^t(t-s)^2g'''(-s)\,ds. $$ Subtract at $t=1/2$ and substitute $s=\tau/2$ in the two remainder integrals. Since $g'''(s)=D^3V(q+sr)[r,r,r]$, this yields $$ V(q+r/2)-V(q-r/2)=r\cdot\nabla V(q)+\Delta_V(q,r), $$ $$ \Delta_V(q,r)=\frac1{16}\int_0^1(1-s)^2\left(D^3V(q+sr/2)[r,r,r]+D^3V(q-sr/2)[r,r,r]\right)\,ds . $$ Integration by parts in $\xi$ is justified coordinatewise by [F7] and Fubini [F4]: the factors $e^{ir\cdot\xi/\epsilon}a(q,\xi)$ are compactly supported in $\xi$, their derivative products are integrable, and their endpoint products vanish. It gives $\int e^{ir\cdot\xi/\epsilon}r_j a(q,\xi)\,d\xi=i\epsilon\int e^{ir\cdot\xi/\epsilon}\partial_{\xi_j}a(q,\xi)\,d\xi$. Therefore the linear term, multiplied by $i/\epsilon$, is the Weyl kernel with symbol $-\nabla_\xi a\cdot\nabla V$. Together with step 2.1 this is exactly $\operatorname{Op}^W_\epsilon(\{a,h\})$. [step 1.1, F1, F4, F5, F6, F7, algebra]


4.1 The kernel $K_{\epsilon,a}(q,r)$ is compactly supported in $q$ and Schwartz in $r$, since $a\in C_c^\infty$. The formula derived in step 3.1, applied also to each $\partial_q^\alpha V$, and the bounded derivatives of $V$ show that $\Delta_V(q,r)$ and all its $q,r$ derivatives grow at most polynomially in $r$, uniformly for $q$ in that compact set. Hence $G(q,r):=\Delta_V(q,r)K_{\epsilon,a}(q,r)$ is Schwartz in $(q,r)$; its partial Fourier transform is Schwartz by [F3], and Fourier inversion [F3] recovers $G$. Define the remainder symbol by the inverse partial Fourier transform $$ r_{\epsilon,a,V}(q,\eta):=\frac{i}{\epsilon^3}\int e^{-ir\cdot\eta/\epsilon}\Delta_V(q,r)K_{\epsilon,a}(q,r)\,dr. $$ By construction its Weyl kernel is $i\epsilon^{-3}\Delta_V(q,r)K_{\epsilon,a}(q,r)$, so the remaining potential commutator kernel, after multiplication by $i/\epsilon$, is $\epsilon^2$ times that kernel. Apply [F8] to the positive scaling $s\mapsto r=\epsilon s$ in this absolutely integrable complex Fourier integral. This gives $$ r_{\epsilon,a,V}(q,\eta)=i(2\pi)^{-d}\int e^{-is\cdot\eta}\frac{\Delta_V(q,\epsilon s)}{\epsilon^3}\left(\int e^{is\cdot\xi}a(q,\xi)\,d\xi\right)ds. $$ For $|\alpha|\le N_d$, the formula from step 3.1 applied to $\partial_q^\alpha V$ gives $|\partial_q^\alpha\Delta_V(q,\epsilon s)|\le C_{\alpha,V}\epsilon^3|s|^3$, since every third derivative of $\partial_q^\alpha V$ is bounded by hypothesis. Derivatives in $\eta$ insert powers of $s$; derivatives in $q$ of the partial Fourier transform insert derivatives of $a$. Repeated coordinatewise integration by parts in $\xi$, justified by [F7], gives decay factor $(1+|s|^2)^{-4d-5}$ uniformly in $q$, with zero boundary terms because $a$ is compactly supported in $\xi$. For $|\alpha|\le N_d$, the largest remaining radial power is $|s|^{N_d+3}=|s|^{4d+7}$; after the $d$-dimensional radial measure, the tail is bounded by a constant times $\int_1^\infty\rho^{-3d-4}d\rho<\infty$. More explicitly, bounding all $q,\eta$ derivatives of total order at most $N_d$ uses $(1-\Delta_\xi)^{4d+5}$ on $a$, hence at most $N_d+8d+10=12d+14$ derivatives, within $M_d=12d+16$. This proves the stated uniform derivative bound. [step 3.1, given, A1, F3, F6, F7, F8, algebra]

5.1 Apply [F2] to $r_{\epsilon,a,V}$. Its bounded derivatives through $N_d$, established in step 4.1, imply $\|\operatorname{Op}^W_\epsilon(r_{\epsilon,a,V})\|\leq C_{d,V}p_{M_d}(a)$, uniformly for $0<\epsilon\leq1$. Combining steps 2.1, 3.1, and 4.1 proves the commutator identity on $\mathcal S$ and the asserted operator-norm bound on its remainder. [step 2.1, step 3.1, step 4.1, F2] ∎

