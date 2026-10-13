---
id: thm-nrqm-oscillator-coherent-evolution-and-variance
aliases: [nrqm-oscillator-coherent-evolution-and-variance]
kind: theorem
domain: mathematics
title: "Coherent evolution and variance"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, lem-nrqm-oscillator-closed-ladder-domains, thm-nrqm-oscillator-coherent-state-convergence, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, lem-real-ltwo-multipliers-and-unitary-transport, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-plancherel, thm-complex-exponential-is-entire-with-derivative-itself, def-adjoint-of-a-densely-defined-unbounded-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space, def-complex-exponential, def-countable-choice, thm-ftc-second-part, thm-chain-rule]
dependency_roles:
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  thm-nrqm-oscillator-coherent-state-convergence: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  lem-real-ltwo-multipliers-and-unitary-transport: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-chain-rule: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §§4.3-4.5 pp. 30-41 (time evolution and uncertainties of coherent states)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (ladder operators and the length scale of the oscillator)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $m,\omega,\hbar>0$ and let $\ell=\sqrt{\hbar/(m\omega)}$, $D$, $\psi_n=Dg_n$, $H_{\mathrm{osc}}=\frac{\hbar\omega}{2}DAD^{-1}$ be as in [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], with $(g_n)$ the Hermite family and $a,a^\dagger,N$ the closed ladder and number operators of [[lem-nrqm-oscillator-closed-ladder-domains]]; put $a_\psi:=DaD^{-1}$, $a^\dagger_\psi:=Da^\dagger D^{-1}$, $N_\psi:=DND^{-1}$, acting on $L^2(\mathbb R,dx)$ with the transported domains, and for $z\in\mathbb C$ let $\psi_z^{(y)}\in L^2(\mathbb R,dy)$ be the coherent vector of [[thm-nrqm-oscillator-coherent-state-convergence]] and define $\psi_z:=D\psi_z^{(y)}=e^{-|z|^2/2}\sum_nz^n\psi_n/\sqrt{n!}\in L^2(\mathbb R,dx)$. Finally set

$$Q:=M_x,\quad D(Q)=\{f\in L^2(\mathbb R,dx):xf\in L^2\},\qquad P:=\mathcal F_2^*M_{2\pi\hbar\xi}\mathcal F_2,\quad D(P)=\{f:\xi\,\mathcal F_2f\in L^2\},$$

the self-adjoint position and momentum operators ([[lem-real-ltwo-multipliers-and-unitary-transport]], [[thm-plancherel]]; the conjugation is discharged in the proof).

Then:

(a) $H_{\mathrm{osc}}=\hbar\omega(N_\psi+\tfrac12I)$ as operators, with common domain $D(H_{\mathrm{osc}})=D(N_\psi)$;

(b) the formula

$$U(t)f:=\sum_{n}e^{-i\omega(n+1/2)t}\langle f,\psi_n\rangle\psi_n\qquad(t\in\mathbb R,\ f\in L^2(\mathbb R,dx))$$

defines a strongly continuous one-parameter unitary group $U$ on $L^2(\mathbb R,dx)$: each $U(t)$ is a surjective linear isometry, $U(0)=I$ and $U(t+s)=U(t)U(s)$, and the generator of $U$ is $-\tfrac{i}{\hbar}H_{\mathrm{osc}}$, i.e. the limit $\lim_{t\to0}\frac1t(U(t)f-f)$ exists exactly for $f\in D(H_{\mathrm{osc}})$ and equals $-\tfrac{i}{\hbar}H_{\mathrm{osc}}f$;

(c) $U(t)\psi_z=e^{-i\omega t/2}\psi_{ze^{-i\omega t}}$ for all $z\in\mathbb C$, $t\in\mathbb R$;

(d) on the orthonormal basis one has

$$Q\psi_n=\frac{\ell}{\sqrt2}\bigl(\sqrt{n+1}\,\psi_{n+1}+\sqrt n\,\psi_{n-1}\bigr),\qquad P\psi_n=\frac{\hbar}{i\ell\sqrt2}\bigl(\sqrt n\,\psi_{n-1}-\sqrt{n+1}\,\psi_{n+1}\bigr),$$

with the convention $\psi_{-1}:=0$; consequently, for every $z\in\mathbb C$,

$$Q\psi_z=\frac{\ell}{\sqrt2}\,(a_\psi+a^\dagger_\psi)\psi_z,\qquad P\psi_z=\frac{\hbar}{i\ell\sqrt2}\,(a_\psi-a^\dagger_\psi)\psi_z ;$$

(e) with means $\langle Q\rangle_z:=\langle Q\psi_z,\psi_z\rangle$, $\langle P\rangle_z:=\langle P\psi_z,\psi_z\rangle$ and variances $\operatorname{Var}(Q)_z:=\|(Q-\langle Q\rangle_zI)\psi_z\|^2$, $\operatorname{Var}(P)_z:=\|(P-\langle P\rangle_zI)\psi_z\|^2$,

$$\langle Q\rangle_z=\sqrt2\,\ell\operatorname{Re}z,\quad\langle P\rangle_z=\frac{\sqrt2\,\hbar}{\ell}\operatorname{Im}z,\quad\operatorname{Var}(Q)_z=\frac{\ell^2}{2},\quad\operatorname{Var}(P)_z=\frac{\hbar^2}{2\ell^2},$$

so $\operatorname{Var}(Q)_z\operatorname{Var}(P)_z=\hbar^2/4$ for every $z$ (the value produced by these exact computations; no independent uncertainty-bound statement is asserted here);

(f) after the evolution, with $\psi_z(t):=U(t)\psi_z$ and $z(t):=ze^{-i\omega t}$,

$$\langle Q\rangle_{z(t)}=\sqrt2\,\ell\operatorname{Re}z(t),\quad\langle P\rangle_{z(t)}=\frac{\sqrt2\,\hbar}{\ell}\operatorname{Im}z(t),\quad\operatorname{Var}(Q)_{z(t)}=\frac{\ell^2}{2},\quad\operatorname{Var}(P)_{z(t)}=\frac{\hbar^2}{2\ell^2}.$$

The parameters $m,\omega,\hbar$ enter as positive real numbers and no physical identification of $Q,P,H_{\mathrm{osc}}$ with measured quantities is made.

## Facts & Assumptions

**Given:** the unitary $D$, the complete orthonormal family $(\psi_n)$ of eigenfunctions of $H_{\mathrm{osc}}$, the operators $a_\psi,a^\dagger_\psi,N_\psi$ transported from [[lem-nrqm-oscillator-closed-ladder-domains]], and the coherent vectors $\psi_z$.

[F1] $(g_n)$ is a complete orthonormal family of $L^2(\mathbb R,dy)$; $D$ is a bijective isometry with inverse $D^{-1}g(y)=\ell^{1/2}g(\ell y)$; $(\psi_n)$ is a complete orthonormal family of $L^2(\mathbb R,dx)$; $D(H_{\mathrm{osc}})=\{f:\sum_n\hbar^2\omega^2(n+\frac12)^2|c_n|^2<\infty\}$ with $c_n=\langle f,\psi_n\rangle$, $H_{\mathrm{osc}}\psi_n=\hbar\omega(n+\frac12)\psi_n$, and $\sigma(H_{\mathrm{osc}})=\{\hbar\omega(n+\frac12)\}$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

[F2] On $D(N_\psi)$, $a^\dagger_\psi a_\psi=N_\psi$ and $a_\psi a^\dagger_\psi=N_\psi+I$; $a_\psi$ is closed; $a_\psi\psi_z=z\psi_z$; $\psi_z\in D(N_\psi^k)$ for every $k$, $\langle\psi_z,\psi_w\rangle=e^{-(|z|^2+|w|^2)/2+z\overline w}$, $\|a_\psi\psi_z\|^2=|z|^2$, $\|a^\dagger_\psi\psi_z\|^2=|z|^2+1$, $\langle N_\psi\psi_z,\psi_z\rangle=|z|^2$. These are the facts of [[lem-nrqm-oscillator-closed-ladder-domains]](b),(d) and [[thm-nrqm-oscillator-coherent-state-convergence]], transported by the unitary $D$.

[F3] $Y=\frac{a+a^\dagger}{\sqrt2}$ and $-i\partial_y=\frac{a-a^\dagger}{i\sqrt2}$ on the polynomial-Gaussian space $\mathcal P:=\{pg_0:p\in\mathbb C[y]\}$ (denoted $P$ in the supplier), whence $\sqrt2\,yg_n=\sqrt n\,g_{n-1}+\sqrt{n+1}g_{n+1}$ and $\sqrt2\,g_n'=\sqrt n\,g_{n-1}-\sqrt{n+1}g_{n+1}$ ([[thm-nrqm-oscillator-hermite-recurrence]](g), [[thm-nrqm-oscillator-hermite-orthogonality]](b)).

[F4] $M_x$ is self-adjoint on $D(M_x)=\{f:xf\in L^2\}$ for the real function $x$ ([[lem-real-ltwo-multipliers-and-unitary-transport]]); $\mathcal F_2$ is unitary ([[thm-plancherel]]); if $T$ is self-adjoint on $K$ and $U:K\to H$ is a bijective linear isometry, then $UTU^*$ is self-adjoint on $UD(T)$ (proved in step 1.3); and $D(P)=W^{1,2}(\mathbb R)$ with $Pf=-i\hbar f'$ there ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F5] $e^{ix}=1+ix+o(x)$ as $x\to0$ and $|e^{ix}-1-ix|\le2|x|$ for $x\in\mathbb R$: the complex exponential is entire with derivative itself at every point ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[def-complex-exponential]]); the estimate follows from $e^{ix}-1=\int_0^1 ix e^{isx}ds$, obtained by the chain rule and the fundamental theorem of calculus, applied to real and imaginary parts ([[thm-chain-rule]], [[thm-ftc-second-part]]), so $|e^{ix}-1|\le|x|$; and $\|f\|^2=\sum_n|\langle f,\psi_n\rangle|^2$ with the finite-subset net convergence of the expansion ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F6] $\|uv\|_1\le\|u\|_2\|v\|_2$ and $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

1.1 [(a) Hamiltonian as a number operator] Let $f\in D(H_{\mathrm{osc}})$ with $c_n=\langle f,\psi_n\rangle$; by [F1] this means $\sum_n(n+\frac12)^2|c_n|^2<\infty$, which is equivalent to $\sum_nn^2|c_n|^2<\infty$ because $n^2\le4(n+\frac12)^2$ and $(n+\frac12)^2\le2n^2+\frac12$ for all $n\ge0$; hence $D(H_{\mathrm{osc}})=D(N_\psi)$ by [F1] and the transported domain formula, and $H_{\mathrm{osc}}f=\sum_n\hbar\omega(n+\frac12)c_n\psi_n=\hbar\omega\bigl(\sum_nnc_n\psi_n+\frac12f\bigr)=\hbar\omega(N_\psi f+\frac12f)$. [given, F1, algebra]

1.2 [(b) unitarity of $U(t)$] For $f\in L^2$ the coefficients $c_n=\langle f,\psi_n\rangle$ are square summable, so the series in (b) converges and $\|U(t)f\|^2=\sum_n|c_n|^2=\|f\|^2$ by [F5]; $U(t)$ is linear and isometric. Its range contains every $\psi_n=U(t)\bigl(e^{i\omega(n+1/2)t}\psi_n\bigr)$, hence is dense; an isometry has closed range, so $U(t)$ is surjective: it is a bijective isometry. Also $U(t)\psi_n=e^{-i\omega(n+1/2)t}\psi_n$ shows $U(t)U(t)^*$ fixes every $\psi_n$, hence equals the identity on the dense span; by continuity $U(t)^*=U(t)^{-1}$, and $U(t)^{-1}=U(-t)$. [given, F5]

1.3 [(d) the position and momentum operators] The conjugation claim of [F4]: if $T=T^*$ on $K$ and $U:K\to H$ is a bijective isometry, let $T':=UTU^*$ on $D(T'):=UD(T)$. For $x,y\in D(T')$, writing $x=U\xi$, $y=U\eta$ with $\xi,\eta\in D(T)$, $\langle T'x,y\rangle=\langle T\xi,\eta\rangle=\langle\xi,T\eta\rangle=\langle x,T'y\rangle$, so $T'$ is symmetric. If $y\in D((T')^*)$ then for all $\xi\in D(T)$, $\langle T\xi,U^*y\rangle=\langle T'U\xi,y\rangle=\langle U\xi,(T')^*y\rangle=\langle\xi,U^*(T')^*y\rangle$, so $U^*y\in D(T^*)=D(T)$ and $T^*U^*y=U^*(T')^*y$; hence $y\in UD(T)=D(T')$ and $(T')^*y=UTU^*y=T'y$: $D((T')^*)\subseteq D(T')$ and $T'$ is self-adjoint. Applying this with $U=\mathcal F_2^*$ and the real multiplier $T=M_{2\pi\hbar\xi}$ (self-adjoint by [F4]) makes $P$ self-adjoint with the stated domain, and [F4] identifies $D(P)=W^{1,2}$ and $Pf=-i\hbar f'$ there. The position operator $Q=M_x$ is self-adjoint by [F4]. For the basis vectors, $Q\psi_n(x)=x\ell^{-1/2}g_n(x/\ell)=\ell\,D(yg_n)(x)=\frac{\ell}{\sqrt2}D(\sqrt ng_{n-1}+\sqrt{n+1}g_{n+1})(x)$ by [F3], which is the first displayed formula with $\psi_{-1}=0$; and $P\psi_n=-i\hbar\psi_n'$ with $\psi_n'=\ell^{-1}D(g_n')=\frac{\ell^{-1}}{\sqrt2}D(\sqrt ng_{n-1}-\sqrt{n+1}g_{n+1})$, giving the second formula. [given, F3, F4]

2.1 [(b) group and strong continuity] $U(t+s)f=\sum_ne^{-i\omega(n+1/2)(t+s)}c_n\psi_n=U(t)U(s)f$ first on every finite linear combination of the basis vectors by scalar multiplication of their phases, and then on all $f$ by density and continuity of the bounded operators $U(t+s)$ and $U(t)U(s)$ from step 1.2; $U(0)=I$. For continuity at $s$: $\|U(t)f-U(s)f\|^2=\sum_n|e^{-i\omega(n+1/2)t}-e^{-i\omega(n+1/2)s}|^2|c_n|^2$, and for $t\to s$ the summands converge to $0$ pointwise in $n$ while being bounded by $4|c_n|^2$, so the sum tends to $0$ (the tail $\sum_{n>N}4|c_n|^2$ is arbitrarily small and finitely many summands converge). [step 1.2, F5]

2.2 [(c) evolution of coherent vectors] By the definition of $\psi_z$ in the $(\psi_n)$-basis, $U(t)\psi_z=e^{-|z|^2/2}\sum_n\frac{z^n}{\sqrt{n!}}e^{-i\omega(n+1/2)t}\psi_n=e^{-i\omega t/2}\cdot e^{-|z|^2/2}\sum_n\frac{(ze^{-i\omega t})^n}{\sqrt{n!}}\psi_n=e^{-i\omega t/2}\psi_{ze^{-i\omega t}}$, the series converging by step 1.2 and the definition of $\psi_w$. [step 1.2, F1]

2.3 [(d),(e) action on coherent vectors and the moments] Since $\psi_z\in D(N_\psi)\subseteq D(a^\dagger_\psi)=D(a_\psi)\cap D(a^\dagger_\psi)$ and $a_\psi,a^\dagger_\psi$ are (transports of) the closed operators of [F2], the operators $\frac{\ell}{\sqrt2}(a_\psi+a^\dagger_\psi)$ and $\frac{\hbar}{i\ell\sqrt2}(a_\psi-a^\dagger_\psi)$ agree with $Q$ and $P$ on every $\psi_n$ by step 1.3, and $Q,P$ are closed; the partial sums $\psi_z^{(N)}=e^{-|z|^2/2}\sum_{n\le N}\frac{z^n}{\sqrt{n!}}\psi_n$ converge to $\psi_z$ and their $Q$-images converge: $\|(a_\psi+a^\dagger_\psi)(\psi_z^{(N)}-\psi_z)\|^2\le2(\|a_\psi(\cdot)\|^2+\|a^\dagger_\psi(\cdot)\|^2)\le4\sum_{n>N}(n+1)|c_n|^2\to0$, and likewise for $a_\psi-a^\dagger_\psi$; hence the displayed identities for $Q\psi_z$ and $P\psi_z$ hold, and $Q\psi_z,P\psi_z\in L^2$. Therefore $\langle Q\rangle_z=\frac{\ell}{\sqrt2}(z+\overline z)=\sqrt2\ell\operatorname{Re}z$ and $\langle P\rangle_z=\frac{\hbar}{i\ell\sqrt2}(z-\overline z)=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z$. For the variances, $\operatorname{Var}(Q)_z=\|Q\psi_z\|^2-\langle Q\rangle_z^2$ because the mean is real, and $\|Q\psi_z\|^2=\frac{\ell^2}{2}\|(a_\psi+a^\dagger_\psi)\psi_z\|^2=\frac{\ell^2}{2}\bigl(\|a_\psi\psi_z\|^2+\|a^\dagger_\psi\psi_z\|^2+2\operatorname{Re}\langle a_\psi\psi_z,a^\dagger_\psi\psi_z\rangle\bigr)$. Now $\langle a_\psi\psi_z,a^\dagger_\psi\psi_z\rangle=\langle z\psi_z,a^\dagger_\psi\psi_z\rangle=z\overline{\langle a^\dagger_\psi\psi_z,\psi_z\rangle}=z^2$ because $\langle a^\dagger_\psi\psi_z,\psi_z\rangle=\langle\psi_z,a_\psi\psi_z\rangle=\overline z$; and $\|a_\psi\psi_z\|^2=|z|^2$, $\|a^\dagger_\psi\psi_z\|^2=|z|^2+1$ by [F2]. So $\|Q\psi_z\|^2=\frac{\ell^2}{2}(2|z|^2+1+2\operatorname{Re}z^2)=\frac{\ell^2}{2}((z+\overline z)^2+1)$ and $\operatorname{Var}(Q)_z=\frac{\ell^2}{2}$. The same computation with a minus sign gives $\|P\psi_z\|^2=\frac{\hbar^2}{2\ell^2}(2|z|^2+1-2\operatorname{Re}z^2)$ and $\operatorname{Var}(P)_z=\frac{\hbar^2}{2\ell^2}$ because $\langle P\rangle_z^2=\frac{2\hbar^2}{\ell^2}(\operatorname{Im}z)^2=\frac{\hbar^2}{2\ell^2}(2|z|^2-2\operatorname{Re}z^2)$; the product is $\frac{\ell^2}{2}\cdot\frac{\hbar^2}{2\ell^2}=\frac{\hbar^2}{4}$. No minimality among all states is asserted; the displayed values are those computed for the coherent vectors. [step 1.3, F2, F6, algebra]

3.1 [(b) generator and its exact domain] Let $f\in D(H_{\mathrm{osc}})$ and $g_t:=\frac1t(U(t)f-f)+\frac{i}{\hbar}H_{\mathrm{osc}}f=\sum_n\varepsilon_n(t)c_n\psi_n$ with $\varepsilon_n(t)=\frac{e^{-i\omega(n+1/2)t}-1}{t}+i\omega(n+\frac12)$. By [F5], $|\varepsilon_n(t)|\le2\omega(n+\frac12)$, so $\sum_n|\varepsilon_n(t)|^2|c_n|^2\le4\omega^2\sum_n(n+\frac12)^2|c_n|^2<\infty$ by step 1.1, and $\varepsilon_n(t)\to0$ as $t\to0$ for each $n$ by $e^{ix}=1+ix+o(x)$; the same dominated-convergence argument as in step 2.1 gives $\|g_t\|\to0$. Hence $t\mapsto U(t)f$ is differentiable at $0$ with derivative $-\frac{i}{\hbar}H_{\mathrm{osc}}f$; the general $t$ follows from the group law and $U(t)f\in D(H_{\mathrm{osc}})$ (the coefficients $e^{-i\omega(n+1/2)t}c_n$ have the same moduli as $c_n$). Conversely, if $\frac1t(U(t)f-f)\to g$ in $L^2$, then for every $n$, $\langle\frac1t(U(t)f-f),\psi_n\rangle=\frac{e^{-i\omega(n+1/2)t}-1}{t}c_n\to-i\omega(n+\frac12)c_n$ while these pairings converge to $\langle g,\psi_n\rangle$; hence $\langle g,\psi_n\rangle=-i\omega(n+\frac12)c_n$ for every $n$ and $\sum_n(n+\frac12)^2|c_n|^2=\omega^{-2}\sum_n|\langle g,\psi_n\rangle|^2=\omega^{-2}\|g\|^2<\infty$ by [F5], so $f\in D(H_{\mathrm{osc}})$ and $g=-\frac{i}{\hbar}H_{\mathrm{osc}}f$. [step 1.1, step 1.2, step 2.1, F5]

4.1 [(f) evolved moments] By step 2.2 and the definitions, $\langle Q\rangle_{z(t)}=\langle Q(e^{-i\omega t/2}\psi_{z(t)}),e^{-i\omega t/2}\psi_{z(t)}\rangle=\langle Q\psi_{z(t)},\psi_{z(t)}\rangle=\sqrt2\ell\operatorname{Re}z(t)$, and similarly $\langle P\rangle_{z(t)}=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z(t)$; the variances in step 2.3 depend on $z$ only through the value of the displayed constant formulas, which are independent of $z$, so they are unchanged: $\operatorname{Var}(Q)_{z(t)}=\ell^2/2$ and $\operatorname{Var}(P)_{z(t)}=\hbar^2/(2\ell^2)$. [step 2.2, step 2.3] ∎
