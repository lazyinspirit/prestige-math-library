---
id: pthm-nrqm-observables-preparation-moments
aliases: [ nrqm-observables-preparation-moments ]
kind: physics-theorem
domain: physics
title: "Mean, second moment and variance of an assigned observable in a preparation"
status: published
origin: pipeline
dependency_level: 9
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-observables-moments-and-variance,
    lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-observables-born-outcome-law-properties
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-observables-born-outcome-law-properties: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statements, within the framework's observable and
  probability postulate, about the moments of an assigned sharp observable in a
  preparation. For a pure preparation represented by a unit vector ψ, the second
  moment is finite exactly when ψ lies in D(A), the mean is finite exactly when
  ψ lies in D(|A|^{1/2}), and for ψ in D(A) the mean is the quadratic form and
  the variance is the squared norm of the centred vector. For a density-operator
  expansion ρ=ΣₙwₙT_{uₙ,uₙ}, the mean is finite exactly when
  Σₙwₙ∫|λ|dE_{A,uₙ}<∞, and the second moment is finite exactly when every
  positive-weight uₙ lies in D(A) and Σ_{n:wₙ>0}wₙ||Auₙ||²<∞. A preparation need
  not have finite moments automatically. The item asserts no apparatus error, no
  disturbance and no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3.1,
        printed pages 79-81 (expectation values from eigenfunction expansions
        and the position and momentum means)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1 and Section 3.1, printed pages 55-58 and 88-95 (expectation
        values, domains and the spectral form of moments)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Section 1, printed
        pages 1-6 (expectation values and variances as the spread of the outcome
        distribution)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates P1 and P2 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]]) and assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $(A,u_A)$ be an assigned sharp observable with outcome law $\mu^{A}$ in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]], and let $\rho$ be a preparation. Then:

(a) **Pure preparations.** Let $\rho=T_{\psi,\psi}$ be the pure preparation of a unit vector $\psi\in D(A)$. Then the mean of the outcome law exists and equals $\langle A\psi,\psi\rangle$, and the second moment exists and equals $\|A\psi\|^{2}$:
$$m(\psi)=\int_{\mathbb R}\lambda\,d\mu^{A}_{\psi}(\lambda)=\langle A\psi,\psi\rangle,\qquad \int_{\mathbb R}\lambda^{2}\,d\mu^{A}_{\psi}(\lambda)=\|A\psi\|^{2},$$
both read in the powers of the declared unit $u_A$ of the observable. If $\psi\in D(A^{2})$, the variance is
$$\int_{\mathbb R}\bigl(\lambda-m(\psi)\bigr)^{2}d\mu^{A}_{\psi}(\lambda)=\langle A^{2}\psi,\psi\rangle-\langle A\psi,\psi\rangle^{2}.$$

(b) **Variance and its hypotheses.** For every unit $\psi\in D(A)$ the variance exists and equals
$$\operatorname{Var}_{\psi}(A)=\|A\psi\|^{2}-\langle A\psi,\psi\rangle^{2}=\bigl\|(A-\langle A\psi,\psi\rangle I)\psi\bigr\|^{2}\ge0,$$
without any hypothesis beyond $\psi\in D(A)$; no appeal to a discrete eigenbasis is made.

(c) **Non-existence is possible.** The identities of (a) and (b) are conditional on membership of $\psi$ in the stated domains. If $\psi\notin D(|A|^{1/2})$ then $\int_{\mathbb R}|\lambda|\,d\mu^{A}_{\psi}(\lambda)=\infty$, so the mean of the outcome law does not exist as a finite real number; the mean is finite exactly when $\psi\in D(|A|^{1/2})$, and then $\psi$ need not lie in $D(A)$. If $\psi\notin D(A)$ then the second moment $\int\lambda^{2}\,d\mu^{A}_{\psi}$ is infinite. In particular every preparation of the model is a unit ray or a density operator, and no preparation is equipped with finite moments automatically.

(d) **Mixtures.** Let $\rho=\sum_nw_nT_{u_n,u_n}$ be a spectral expansion of a preparation, $w_n\ge0$, $\sum_nw_n=1$, $(u_n)$ orthonormal. In every weighted moment sum, zero-weight terms are defined to be zero before evaluating a component integral; equivalently, only positive-weight indices are summed. This applies also to component means that are undefined at zero-weight indices. Then the mean of $\mu^{A}_{\rho}$ is finite if and only if $\sum_nw_n\int|\lambda|\,dE_{A,u_n}<\infty$, and then $\int\lambda\,d\mu^{A}_{\rho}=\sum_nw_n\int\lambda\,dE_{A,u_n}$. For the second moment, put $M_n:=\int\lambda^{2}\,dE_{A,u_n}$, so $M_n=\|Au_n\|^{2}$ for $u_n\in D(A)$ and $M_n=+\infty$ otherwise; a zero weight contributes zero. Then $\int\lambda^{2}\,d\mu^{A}_{\rho}=\sum_nw_nM_n\in[0,\infty]$, and it is finite exactly when every $u_n$ of positive weight lies in $D(A)$ and $\sum_{n:w_n>0}w_n\|Au_n\|^{2}<\infty$. Thus componentwise domain membership alone does not guarantee a finite mixed-state second moment. Whenever the mixture has a finite absolute first moment, the identity of clause (b) of [[pthm-nrqm-observables-born-outcome-law-properties]] gives its mean as the absolutely convergent weighted average of the component means.

(e) **Status.** Clauses (a)-(d) are conditional consequences of P1 and P2 together with the mathematical moment results cited below; they assert no apparatus resolution, no measurement error, no disturbance and no empirical value. Whether a concrete preparation has a finite mean or variance for a concrete assigned observable is a question about the pair $(\rho,A)$ and the tested identification of the observable, not a consequence of the framework's postulates alone.

## Facts & Assumptions

**Given:** The adopted postulates P1 and P2 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]]); the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); an assigned sharp observable $(A,u_A)$ with spectral law $\mu^{A}$ and declared unit $u_A$ in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]]; a unit vector $\psi$; a preparation $\rho$ with spectral expansion $\rho=\sum_nw_nT_{u_n,u_n}$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

[F1] **The outcome law.** For an assigned observable the preparation-dependent law is $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$, equal to $\|E_A(B)\psi\|^{2}$ for a pure preparation of a unit vector $\psi$, and $B\mapsto\mu^{A}_{\rho}(B)$ is a probability measure on the Borel sets of $\mathbb R$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b) and (c), [[pthm-nrqm-observables-born-outcome-law-properties]] clause (a)).

[F2] **Moments of the scalar law.** For a unit vector $\psi$: the second moment satisfies $\int\lambda^{2}\,d\mu^{A}_{\psi}=\|A\psi\|^{2}$ if $\psi\in D(A)$ and equals $+\infty$ otherwise; the mean satisfies $\int|\lambda|\,d\mu^{A}_{\psi}<\infty$ exactly when $\psi\in D(|A|^{1/2})$, and is then finite and real with $\int\lambda\,d\mu^{A}_{\psi}=\langle A\psi,\psi\rangle$ for $\psi\in D(A)$; for $\psi\in D(A)$ the variance is $\|A\psi\|^{2}-\langle A\psi,\psi\rangle^{2}=\|(A-\langle A\psi,\psi\rangle I)\psi\|^{2}$, and for $\psi\in D(A^{2})$ it is $\langle A^{2}\psi,\psi\rangle-\langle A\psi,\psi\rangle^{2}$ ([[lem-nrqm-observables-moments-and-variance]] clauses (a)-(c)).

[F3] **Mixtures.** For preparations $\rho_n$ with weights $w_n\ge0$, $\sum_nw_n=1$, the mixture $\rho=\sum_nw_n\rho_n$ is a preparation and $\mu^{A}_{\rho}(B)=\sum_nw_n\mu^{A}_{\rho_n}(B)$ for every Borel $B$ ([[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]] clause (b), clauses (b) and (d)).

[F4] **State moments of a mixture.** All sums use clause (d)'s zero-weight convention. For a density operator with expansion $\rho=\sum_nw_nT_{u_n,u_n}$, the mean of $\mu^{A}_{\rho}$ is finite exactly when $\sum_nw_n\int|\lambda|\,dE_{A,u_n}<\infty$ and is then $\sum_nw_n\int\lambda\,dE_{A,u_n}$, while $\int\lambda^{2}\,d\mu^{A}_{\rho}=\sum_nw_nM_n\in[0,\infty]$, where $M_n=\int\lambda^2\,dE_{A,u_n}$ equals $\|Au_n\|^2$ on $D(A)$ and $+\infty$ otherwise ([[lem-nrqm-observables-moments-and-variance]] clause (d)).

[F5] **Preparations and domains.** A preparation is a unit ray of the assigned Hilbert space or a density operator on it; being a preparation imposes no membership in $D(A)$ or $D(A^{2})$ beyond what is stated for the assigned observable $A$ ([[def-nrqm-state-geometry-framework-state-space]] clauses (a)-(c), [[post-nrqm-framework-state-and-composition]] clauses (ii)-(iii)).

## Proof

1.1 [Clause (a): mean and second moment of a pure preparation] Let $\rho=T_{\psi,\psi}$ with $\|\psi\|=1$. By [F1] the law of the preparation is $\mu^{A}_{\psi}(B)=\|E_A(B)\psi\|^{2}$; by [F2] its second moment is $\|A\psi\|^{2}$ if $\psi\in D(A)$ (and $+\infty$ otherwise), and its mean is $\langle A\psi,\psi\rangle$ when $\psi\in D(A)$; when $\psi\in D(A^{2})$, [F2] gives the displayed variance value. This proves (a). [given, F1, F2, algebra]

1.2 [Clause (c): domains and non-existence] By [F2], $\int|\lambda|\,d\mu^{A}_{\psi}$ is finite exactly for $\psi\in D(|A|^{1/2})$, and then the mean is finite; if $\psi\notin D(|A|^{1/2})$ the integral of $|\lambda|$ diverges and no finite mean exists, while $\int\lambda^{2}\,d\mu^{A}_{\psi}=\infty$ whenever $\psi\notin D(A)$. Membership of $\psi$ in these domains is not implied by being a preparation: [F5] says only that preparations are unit rays or density operators. [given, F2, F5, algebra]

2.1 [Clause (b): variance under the single hypothesis $\psi\in D(A)$] Let $\psi\in D(A)$ be a unit vector. By [F2] the variance equals $\|A\psi\|^{2}-\langle A\psi,\psi\rangle^{2}$ and also $\|(A-m)\psi\|^{2}$ with $m=\langle A\psi,\psi\rangle$, a real number because $A$ is self-adjoint; this squared norm is nonnegative, so the variance exists, is finite and is nonnegative, and no eigenbasis or additional domain hypothesis is used. [given, step 1.1, F2, algebra]

3.1 [Clause (d): mixtures] Let $\rho=\sum_nw_nT_{u_n,u_n}$ be the spectral expansion, omitting zero-weight terms before evaluating any component moment as stipulated in (d). By [F4] the mean of $\mu^{A}_{\rho}$ is finite exactly when $\sum_nw_n\int|\lambda|\,dE_{A,u_n}<\infty$ and then has the displayed value. The same series identity gives $\int\lambda^{2}\,d\mu^{A}_{\rho}=\sum_nw_nM_n$, with zero-weight terms omitted and $M_n=\int\lambda^{2}\,dE_{A,u_n}=\|Au_n\|^{2}$ on $D(A)$ and $+\infty$ off it by [F2]. A nonnegative series is finite exactly when all its positive-weight terms are finite and their weighted sum converges, so membership of each positive-weight $u_n$ in $D(A)$ is necessary but not sufficient. The mixture identity for the law itself is [F3]; taking $g=|\lambda|$ and $\lambda^{2}$ in [F4] and combining with [F2] yields the stated criteria. Under the finite absolute first-moment condition, the component absolute first moments have finite weighted sum, so summing positive and negative parts separately gives the absolutely convergent weighted-mean identity. [given, step 1.1, step 2.1, F2, F3, F4, algebra]

4.1 [Clause (e) and conclusion] Steps 1.1, 1.2, 2.1 and 3.1 prove (a)-(d) as conditional statements from P1, P2 and the cited mathematics; the reminders recorded in (e) are visible in the hypotheses of those steps, and no apparatus, error, disturbance or empirical claim enters the argument. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
