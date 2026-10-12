---
id: thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error
aliases:
- nrqm-controlled-dynamics-rotating-wave-finite-time-error
kind: theorem
domain: mathematics
title: Rotating-wave finite-time error
status: draft
origin: pipeline
dependency_level: 1
deps:
- lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
- lem-bochner-integral-norm-inequality
- thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
- def-bounded-linear-operator
- def-operator-norm
- def-hilbert-space
- def-countable-choice
dependency_roles:
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Spin Magnetic Resonance pp. 178-180 and Harmonic Perturbations
      pp. 181-183 (rotating-wave approximation and its finite-time validity)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Chapter 5 pp. 123-131 (unitary propagators for bounded norm-continuous generators)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space, let $A=A^*\in\mathcal B(H)$ and $B\in\mathcal B(H)$ with
$\omega\in\mathbb R\setminus\{0\}$, and put (units $\hbar=1$)
$$H(t):=A+e^{i\omega t}B+e^{-i\omega t}B^*,\qquad H_{\mathrm{avg}}:=A .$$
Let $U(t,s)$ and $U_{\mathrm{avg}}(t,s)$ be the unitary propagators of
[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]. Then for all
$s\le t$:
$$\bigl\|U(t,s)-U_{\mathrm{avg}}(t,s)\bigr\|\le\frac{4\|B\|}{|\omega|} \Bigl[1+(t-s)\bigl(\|A\|+2\|B\|\bigr)\Bigr].$$
With $\hbar$ restored, replace $A,B$ by $A/\hbar,B/\hbar$, i.e.
$\|U(t,s)-U_{\mathrm{avg}}(t,s)\|\le\frac{4\|B\|}{\hbar|\omega|}[1+\frac{t-s}{\hbar}(\|A\|+2\|B\|)]$.

The bound is linear in $t-s$; it makes no uniform-in-time claim and no claim
about resonance, decay or an unbounded dipole coupling.

## Facts & Assumptions

**Given:** CC; the arbitrary complex Hilbert space $H$; $A=A^*\in\mathcal B(H)$, $B\in\mathcal B(H)$, $\omega\in\mathbb R\setminus\{0\}$; and $s\le t$. To verify both the normalized and restored formulas at once, take $\hbar>0$ and let $U,U_{\mathrm{avg}}$ solve the equations with generators $-iH(r)/\hbar$ and $-iA/\hbar$. Write $V(r)=e^{i\omega r}B+e^{-i\omega r}B^*$, $a=\|A\|$, $b=\|B\|$ and $\tau=t-s$.

[F1] The actual corrected bounded Dyson supplier [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] applies on every compact real interval to arbitrary $H$, norm-continuous bounded self-adjoint families, and any $\hbar>0$. It gives unitary $U$ and $U_{\mathrm{avg}}$, their norm-continuous norm derivatives $\partial_rU(t,r)=(i/\hbar)U(t,r)H(r)$ and $\partial_rU_{\mathrm{avg}}(r,s)=-(i/\hbar)AU_{\mathrm{avg}}(r,s)$, and identity initial values. Uniqueness identifies their restrictions from overlapping compact intervals. Since $H(r)^*=H(r)$ and $\|H(r)\|\le a+2b$ for all real $r$, this supplies the propagators needed for every finite pair $s\le t$. Its arbitrary-H CC contract carries no general Stone or AC spectral assumption.

[F2] Operator multiplication is bounded bilinear, $\|CD\|\le\|C\|\|D\|$, $\|B^*\|=\|B\|$, and the identity has norm at most one ([[def-bounded-linear-operator]], [[def-operator-norm]]; the actual CC bounded-adjoint construction is included in [F1]). Define $Z(r)=e^{i\omega r}B/(i\omega)-e^{-i\omega r}B^*/(i\omega)$. Direct scalar exponential differentiation gives $Z'=V$, $Z\in C^1(\mathbb R;\mathcal B(H))$ and $\|Z(r)\|\le2b/|\omega|$. The bilinear product rule follows from the norm difference quotient and submultiplicativity.

[F3] The actual Banach-valued FTC [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]] assumes CC, applies with $X=\mathcal B(H)$, and gives $F(t)-F(s)=\int_s^tF'(r)dr$ for a norm-$C^1$ curve with continuous derivative on the compact interval. These continuous integrands are Bochner integrable and obey $\|\int_s^tf(r)dr\|\le\int_s^t\|f(r)\|dr$ ([[lem-bochner-integral-norm-inequality]]). The operator Banach-space completeness for arbitrary $H$ is proved in [F1]. The truncation lemma is not an FTC supplier and is not invoked.

## Proof

1.1 [Exact Duhamel identity with units restored] Suppose first $s<t$. Put $F(r)=U(t,r)U_{\mathrm{avg}}(r,s)$ on $[s,t]$. By [F1]–[F2], $F$ is norm-$C^1$ and $F'=(i/\hbar)U(t,r)(H(r)-A)U_{\mathrm{avg}}(r,s)=(i/\hbar)U(t,r)V(r)U_{\mathrm{avg}}(r,s)$. Its endpoint values are $F(t)=U_{\mathrm{avg}}(t,s)$ and $F(s)=U(t,s)$. The FTC [F3] therefore gives $U(t,s)-U_{\mathrm{avg}}(t,s)=-(i/\hbar)\int_s^tU(t,r)V(r)U_{\mathrm{avg}}(r,s)dr$. This identity holds as an operator-norm Bochner integral, not merely on a chosen finite-dimensional subspace. [F1, F2, F3, given, algebra]

2.1 [Integration by parts removes only the middle derivative] Let $P(r)=U(t,r)$, $Q(r)=U_{\mathrm{avg}}(r,s)$ and $G(r)=P(r)Z(r)Q(r)$. All three factors are norm-$C^1$. The exact product rule is $G'=P'ZQ+PZ'Q+PZQ'$. Solving for the middle term and applying [F3] yields $\int_s^tPZ'Q=G(t)-G(s)-\int_s^t[P'ZQ+PZQ']dr$. Thus the remainder after the boundary term differentiates only the two outer propagators; it does not differentiate the whole product $PZQ$ a second time or retain $PZ'Q$. By [F1], $P'ZQ+PZQ'=(i/\hbar)P(HZ-ZA)Q$. Combining this with step 1.1 and $Z'=V$ gives the exact identity $U(t,s)-U_{\mathrm{avg}}(t,s)=-(i/\hbar)[Z(t)U_{\mathrm{avg}}(t,s)-U(t,s)Z(s)]-\hbar^{-2}\int_s^tU(t,r)[H(r)Z(r)-Z(r)A]U_{\mathrm{avg}}(r,s)dr$. Every order and sign follows from the displayed three-term product rule. [step 1.1, F1, F2, F3, given, algebra]

3.1 [Full finite-time constant] Unitarity gives norm at most one to both outer propagators. The two boundary summands in step 2.1 have total norm at most $(\|Z(t)\|+\|Z(s)\|)/\hbar\le4b/(\hbar|\omega|)$. Its remainder integrand has norm at most $(\|H(r)\|+\|A\|)\|Z(r)\|\le(2a+2b)\,2b/|\omega|$. Applying [F3] and integrating over length $\tau$ gives $\|U(t,s)-U_{\mathrm{avg}}(t,s)\|\le4b/(\hbar|\omega|)+4b\tau(a+b)/(\hbar^2|\omega|)$. Since $a+b\le a+2b$, this is at most $[4b/(\hbar|\omega|)][1+\tau(a+2b)/\hbar]$, precisely the full restored constant in the Statement. The slightly stronger intermediate estimate is used only to prove that asserted bound. [step 2.1, F1, F2, F3, given, algebra]

4.1 [Normalized case and all boundary conditions] Taking $\hbar=1$ in step 3.1 gives the first displayed inequality of the Statement; arbitrary $\hbar>0$ gives its restored formula without changing $\omega$ or introducing an extra factor into $Z'=V$. The $s=t$ case has $U(s,s)=U_{\mathrm{avg}}(s,s)=I_H$, so the left side is zero and the displayed inequality holds. If $B=0$, both generators coincide and uniqueness gives equality of propagators, again agreeing with the bound. Negative $\omega$ is handled by $|\omega|$ in [F2], and negative absolute times cause no change because [F1] applies on any compact real interval. The zero Hilbert space is included by the norm-at-most-one estimates. CC is used through the actual arbitrary-H Dyson and FTC suppliers; no extra separability, unbounded domain, spectral or AC assumption is introduced. This proves exactly the stated finite-time estimate and retains its explicit absence of a uniform-time claim. [step 1.1, step 2.1, step 3.1, F1, F2, F3, given, algebra] ∎
