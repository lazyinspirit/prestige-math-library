---
id: lem-nrqm-observables-moments-and-variance
aliases: [nrqm-observables-moments-and-variance]
kind: lemma
domain: mathematics
title: "Mean, second moment and variance of the scalar spectral law"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-unbounded-integral-against-a-pvm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-projection-valued-measure, def-self-adjoint-positive-unitary-and-normal-operator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-scalar-and-complex-measures-from-a-pvm, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-unbounded-integral-against-a-pvm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise

proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1 and Chapter 3, printed pages 55-58 and 87-100 (expectation values, spectral measures and the domain criterion of the first moment)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3.1, printed pages 79-81 (expectation values from the spectral decomposition and the position and momentum means)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Sections 1-3, printed pages 1-12 (expectation values, variances and their computation in finite and continuous examples)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and let $A$ be a self-adjoint operator on $H$ with spectral projection-valued measure $E_A$ and scalar measures $E_{A,\psi}(B)=\langle E_A(B)\psi,\psi\rangle$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]). For a unit vector $\psi\in H$ write $\mu^{A}_{\psi}:=\mu^{A}_{T_{\psi,\psi}}$ for the scalar law of the pure state $T_{\psi,\psi}$ of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b). Then:

(a) **Second moment.** $\int_{\mathbb R}\lambda^{2}\,d\mu^{A}_{\psi}(\lambda)=\|A\psi\|^{2}$ if $\psi\in D(A)$, and the integral equals $+\infty$ if $\psi\notin D(A)$; thus the second moment of the scalar law is finite exactly on $D(A)$.

(b) **Mean.** $\int_{\mathbb R}|\lambda|\,d\mu^{A}_{\psi}(\lambda)<\infty$ if and only if $\psi\in D(|A|^{1/2})$; in that case the mean $m(\psi):=\int_{\mathbb R}\lambda\,d\mu^{A}_{\psi}(\lambda)$ is finite and real, and if $\psi\in D(A)$ then $m(\psi)=\langle A\psi,\psi\rangle$.

(c) **Variance.** If $\psi\in D(A)$ and $m:=\langle A\psi,\psi\rangle$, then
$$\int_{\mathbb R}(\lambda-m)^{2}\,d\mu^{A}_{\psi}(\lambda)=\|A\psi\|^{2}-m^{2}=\|(A-m)\psi\|^{2}\ge0 ;$$
if in addition $\psi\in D(A^{2})$, that is $\psi\in D(A)$ and $A\psi\in D(A)$, then $\|(A-m)\psi\|^{2}=\langle A^{2}\psi,\psi\rangle-\langle A\psi,\psi\rangle^{2}$.

(d) **States.** Let $\rho$ be a density operator with expansion $\rho=\sum_nw_nT_{u_n,u_n}$, $w_n\ge0$, $\sum_nw_n=1$, $(u_n)$ orthonormal. In every weighted sum below, a term with $w_n=0$ is defined to be zero before any component integral is evaluated; equivalently, sum only over $n$ with $w_n>0$. This convention also applies to signed component means, which need not exist at zero-weight indices. Then for every Borel function $g\ge0$
$$\int_{\mathbb R}g\,d\mu^{A}_{\rho}=\sum_nw_n\int_{\mathbb R}g\,dE_{A,u_n}\in[0,\infty],$$
so the mean of $\mu^{A}_{\rho}$ is finite if and only if $\sum_nw_n\int|\lambda|\,dE_{A,u_n}<\infty$, and then it equals $\sum_nw_n\int\lambda\,dE_{A,u_n}$. For the second moment, put $M_n:=\int\lambda^{2}\,dE_{A,u_n}$, so $M_n=\|Au_n\|^{2}$ when $u_n\in D(A)$ and $M_n=+\infty$ otherwise; a zero weight contributes zero. Then $\int\lambda^{2}\,d\mu^{A}_{\rho}=\sum_nw_nM_n\in[0,\infty]$. It is finite exactly when every $u_n$ with $w_n>0$ lies in $D(A)$ and $\sum_{n:w_n>0}w_n\|Au_n\|^{2}<\infty$; componentwise domain membership alone does not ensure a finite second moment.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a nonzero complex Hilbert space $H$; a self-adjoint operator $A$ with PVM $E_A$; a unit vector $\psi\in H$; a density operator $\rho$ with expansion $\rho=\sum_nw_nT_{u_n,u_n}$.

[F1] **Spectral domain and calculus.** $D(A)=\{\psi\in H:\int\lambda^{2}\,dE_{A,\psi}<\infty\}$ and $A\psi=\int\lambda\,dE_A(\lambda)\psi$ on $D(A)$; for every Borel $f$ the operator $f(A)$ has domain $D(f(A))=\{\psi:\int|f|^{2}\,dE_{A,\psi}<\infty\}$ and satisfies $\|f(A)\psi\|^{2}=\int|f|^{2}\,dE_{A,\psi}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]], [[def-unbounded-integral-against-a-pvm]]).

[F2] **Mean and second moment of a pure state.** For a unit vector $\psi\in D(A)$ one has $\int\lambda\,dE_{A,\psi}=\langle A\psi,\psi\rangle$ and $\int\lambda^{2}\,dE_{A,\psi}=\|A\psi\|^{2}$; moreover $\int|\lambda|\,dE_{A,\psi}<\infty$ exactly when $\psi\in D(|A|^{1/2})$, and then the mean $\int\lambda\,dE_{A,\psi}$ is finite ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (c)).

[F3] **Scalar law and its series form.** For the density operator $\rho$ with the displayed expansion and every PVM $E$, $\operatorname{tr}(\rho E(B))=\sum_nw_n\|E(B)u_n\|^{2}$ for every Borel $B$, and for a unit vector $u$ the law of $T_{u,u}$ is $\|E(B)u\|^{2}=E_{u}(B)$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F4] **Monotone convergence and approximation.** If $0\le f_m\uparrow f$ pointwise then $\int f_m\,d\nu\uparrow\int f\,d\nu$ for every measure $\nu$ ([[thm-monotone-convergence-for-the-integral]]); every nonnegative measurable $g$ is the pointwise increasing limit of nonnegative simple functions ; and if $f_m\to f$ pointwise with $|f_m|\le G$ for an integrable $G$ then $\int f_m\,d\nu\to\int f\,d\nu$ ([[thm-dominated-convergence]]).

[F5] **Self-adjoint quadratic forms are real.** For a self-adjoint $A$ and $\psi\in D(A)$ one has $\langle A\psi,\psi\rangle=\overline{\langle\psi,A\psi\rangle}=\overline{\langle A\psi,\psi\rangle}\in\mathbb R$, and $\|(A-m)\psi\|^{2}=\|A\psi\|^{2}-2m\langle A\psi,\psi\rangle+m^{2}\| \psi\|^{2}$ for real $m$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

1.1 [Second moment and mean for a state vector] Let $\psi\in H$ be a unit vector and identify $\mu^{A}_{\psi}$ with the finite measure $E_{A,\psi}$. If $\psi\in D(A)$, [F1] and [F2] give $\int\lambda^{2}\,d\mu^{A}_{\psi}=\|A\psi\|^{2}<\infty$ and $\int\lambda\,d\mu^{A}_{\psi}=\langle A\psi,\psi\rangle$; if $\psi\notin D(A)$, then [F1] gives $\int\lambda^{2}\,d\mu^{A}_{\psi}=\infty$, so the second moment is infinite. In the first case [F5] makes $\langle A\psi,\psi\rangle$ real. This proves (a) and the mean formula of (b). [given, F1, F2, F5, algebra]

1.2 [Reduction of state moments to pure moments] By [F3], $\mu^{A}_{\rho}(B)=\sum_nw_nE_{A,u_n}(B)$ for every Borel $B$. Let $g\ge0$ be Borel, and omit all zero-weight indices as stipulated in (d). For indicators $g=\mathbf 1_B$ the identity $\int g\,d\mu^{A}_{\rho}=\sum_nw_n\int g\,dE_{A,u_n}$ is exactly [F3]; it extends to nonnegative simple $g$ by linearity, and to all nonnegative Borel $g$ by writing $g$ as an increasing pointwise limit of nonnegative simple functions [F4] and applying monotone convergence twice, to the measure $\mu^{A}_{\rho}$ and to the partial sums of the series. This proves the displayed identity of (d). [given, F3, F4, algebra]

2.1 [The first moment criterion] For any unit $\psi\in H$, define $|A|^{1/2}:=f(A)$ with the Borel function $f(\lambda)=|\lambda|^{1/2}$. By [F1], $D(|A|^{1/2})=\{\psi\in H:\int|\lambda|\,dE_{A,\psi}<\infty\}$. By [F3], $E_{A,\psi}=\mu^A_\psi$, so this gives the claimed equivalence without assuming $\psi\in D(A)$. When the absolute first moment is finite, the positive and negative parts of $\lambda$ have finite integrals, and their difference defines a finite real mean; otherwise the mean is not a finite Lebesgue integral. Together with step 1.1 this proves (b). [given, step 1.1, F1, F3, algebra]

2.2 [Variance of a state vector] Let $\psi\in D(A)$ be a unit vector and $m:=\langle A\psi,\psi\rangle$, a real number by [F5]. Then $A\psi-m\psi\in H$ and by [F1] applied to $f(\lambda)=\lambda-m$, $\|(A-m)\psi\|^{2}=\int(\lambda-m)^{2}\,dE_{A,\psi}$. Expanding the square and using [F2] for the integrals of $\lambda^{2}$, $\lambda$ and $1$ gives $\int(\lambda-m)^{2}\,d\mu^{A}_{\psi}=\int\lambda^{2}\,d\mu^{A}_{\psi}-2m\int\lambda\,d\mu^{A}_{\psi}+m^{2}=\|A\psi\|^{2}-2m^{2}+m^{2}=\|A\psi\|^{2}-m^{2}$. [given, step 1.1, F1, F2, F5, algebra]

3.1 [The second identity for the variance] If moreover $\psi\in D(A^{2})$, then $A\psi\in D(A)$ and the inner product $\langle A^{2}\psi,\psi\rangle$ is defined and equals $\langle A(A\psi),\psi\rangle=\langle A\psi,A\psi\rangle=\|A\psi\|^{2}$ because $A$ is self-adjoint; substituting this into step 2.2 gives $\int(\lambda-m)^{2}\,d\mu^{A}_{\psi}=\langle A^{2}\psi,\psi\rangle-m^{2}=\langle A^{2}\psi,\psi\rangle-\langle A\psi,\psi\rangle^{2}$, which together with step 2.2 proves (c). [step 2.2, F1, F5, algebra]

4.1 [Moments of a state] All sums in this step run over positive-weight indices, with the zero-term convention of (d). With $g=|\lambda|$ in step 1.2, the mean of $\mu^{A}_{\rho}$ is finite exactly when $\sum_nw_n\int|\lambda|\,dE_{A,u_n}<\infty$; in that case every positive-weight component has finite absolute first moment, and applying the signed version of the identity to the positive and negative parts and subtracting gives $\int\lambda\,d\mu^{A}_{\rho}=\sum_nw_n\int\lambda\,dE_{A,u_n}$, using dominated convergence [F4] for the tail sums. With $g=\lambda^{2}$, step 1.2 and [F2] give $\int\lambda^{2}\,d\mu^{A}_{\rho}=\sum_nw_nM_n$, where $M_n=\int\lambda^{2}\,dE_{A,u_n}$ is $\|Au_n\|^{2}$ for $u_n\in D(A)$ and $+\infty$ otherwise, and terms of zero weight contribute zero. Since this is a nonnegative series, it is finite exactly when every component of positive weight lies in $D(A)$ and the weighted sum of the squared norms is finite; having each positive-weight component in $D(A)$ by itself does not imply convergence of that series. [step 1.1, step 1.2, F2, F4, algebra] ∎
