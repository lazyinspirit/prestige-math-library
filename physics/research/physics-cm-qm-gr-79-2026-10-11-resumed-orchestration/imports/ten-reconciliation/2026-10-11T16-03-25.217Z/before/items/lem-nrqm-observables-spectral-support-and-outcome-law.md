---
id: lem-nrqm-observables-spectral-support-and-outcome-law
aliases: [nrqm-observables-spectral-support-and-outcome-law]
kind: lemma
domain: mathematics
title: "Support of the spectral measure, the spectrum and the values of the scalar law"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-projection-valued-measure, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-q-and-irrationals-dense-r, lem-scalar-and-complex-measures-from-a-pvm, thm-rationals-countable, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-rationals-countable: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise

proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 4.2, printed pages 88-95 (support of the spectral measure and the spectrum of a self-adjoint operator)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 5.1.1, printed page 68 (the outcome of a measurement of an observable lies in its spectrum)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear Algebra: Vector Spaces and Operators', Sections 6-7, printed pages 20-28 (adjoint operators and Hermitian operators)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and let $A$ be a self-adjoint operator on $H$ with spectral projection-valued measure $E_A$ on the Borel $\sigma$-algebra of $\mathbb R$ and spectrum $\sigma(A)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]). Then:

(a) $E_A(\mathbb R\setminus\sigma(A))=0$, equivalently $E_A(B)=E_A(B\cap\sigma(A))$ for every Borel set $B\subseteq\mathbb R$; and $E_A(U)\ne0$ for every nonempty relatively open subset $U\subseteq\sigma(A)$. Thus the support of $E_A$ is exactly $\sigma(A)$.

(b) For every density operator $\rho$ on $H$, the scalar law $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$ of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b) satisfies
$$\mu^{A}_{\rho}(B)=\mu^{A}_{\rho}(B\cap\sigma(A))\qquad\text{and}\qquad \mu^{A}_{\rho}(\sigma(A))=1$$
for every Borel set $B$: no mass lies outside the spectrum.

(c) More generally, if $C\subseteq\mathbb R$ is a Borel set with $E_A(C)=0$, then $\mu^{A}_{\rho}(C)=0$ for every density operator $\rho$, and if $E_A(C)=E_A(\mathbb R)$ then $\mu^{A}_{\rho}(C)=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a nonzero complex Hilbert space $H$; a self-adjoint operator $A$ with spectral PVM $E_A$ and spectrum $\sigma(A)$; density operators $\rho$ on $H$.

[F1] **Spectrum from the calculus.** The spectrum of $f(A)$ is the essential range $\{z\in\mathbb C:E_A(f^{-1}(B_\varepsilon(z)))\ne0\ \text{for every}\ \varepsilon>0\}$ of the Borel function $f$ with respect to $E_A$, and for $f(\lambda)=\lambda$ the operator $f(A)$ is $A$ with domain $D(A)$; consequently, for real $z$, $z\in\sigma(A)$ if and only if $E_A((z-\varepsilon,z+\varepsilon))\ne0$ for every $\varepsilon>0$ ([[thm-unbounded-borel-functional-calculus]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F2] **Projection-valued measure.** $E_A$ takes values in orthogonal projections, $E_A(\varnothing)=0$, $E_A(\mathbb R)=I$, $E_A(B\cap C)=E_A(B)E_A(C)$, and for pairwise disjoint Borel $B_n$ with union $B$ the series $\sum_nE_A(B_n)x$ converges in norm to $E_A(B)x$ for every $x$ ([[def-projection-valued-measure]]).

[F3] **Monotonicity and vanishing.** If $B\subseteq C$ then $E_A(B)=E_A(B)E_A(C)=E_A(C)E_A(B)$ and $E_A(C)-E_A(B)=E_A(C\setminus B)$ is an orthogonal projection with range orthogonal to the range of $E_A(B)$; hence $\langle E_A(B)x,x\rangle\le\langle E_A(C)x,x\rangle$ for every $x$. Consequently, if $E_A(C)=0$ then $E_A(B)=0$ for every Borel $B\subseteq C$ ([[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F4] **Scalar law.** For a density operator $\rho$ and a PVM $E$ the assignment $B\mapsto\operatorname{tr}(\rho E(B))$ is a probability measure with $\operatorname{tr}(\rho E(B))=\sum_nw_n\|E(B)u_n\|^{2}$ in every expansion $\rho=\sum_nw_nT_{u_n,u_n}$, $w_n\ge0$, $\sum_nw_n=1$, $(u_n)$ orthonormal; in particular $E(B)=0$ implies $\operatorname{tr}(\rho E(B))=0$ and $E(B)=I$ implies $\operatorname{tr}(\rho E(B))=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[F5] **Countable dense subset.** The set $\mathbb Q$ is countable and dense in $\mathbb R$ ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]).

## Proof

1.1 [The spectrum is the essential range of the identity] By [F1] applied to $f(\lambda)=\lambda$, $\sigma(A)$ is the essential range of the identity with respect to $E_A$. For real $z$ this says: $z\in\sigma(A)$ if and only if $E_A((z-\varepsilon,z+\varepsilon))\ne0$ for every $\varepsilon>0$; and for non-real $z$, taking $0<\varepsilon<|\operatorname{Im}z|$ gives $(z-\varepsilon,z+\varepsilon)\cap\mathbb R=\varnothing$, so $E_A((z-\varepsilon,z+\varepsilon))=E_A(\varnothing)=0$ by [F2] and no non-real point lies in the essential range. [given, F1, F2, algebra]

2.1 [The open null set equals the complement of the spectrum] Let $\mathcal I$ be the set of pairs of rationals $p<q$, countable by [F5], and put $V:=\bigcup\{(p,q):(p,q)\in\mathcal I,\ E_A((p,q))=0\}$, a countable union of Borel sets. To see $V\subseteq\mathbb R\setminus\sigma(A)$, suppose $z\in V\cap\sigma(A)$; then $z\in(p,q)$ with $E_A((p,q))=0$ for some rationals $p<q$, and choosing $\varepsilon>0$ with $(z-\varepsilon,z+\varepsilon)\subseteq(p,q)$ gives $E_A((z-\varepsilon,z+\varepsilon))=0$ by [F3], contradicting $z\in\sigma(A)$ by step 1.1. Conversely, if $z\notin\sigma(A)$, step 1.1 supplies $\varepsilon>0$ with $E_A((z-\varepsilon,z+\varepsilon))=0$, and by density of the rationals [F5] there are rationals $p<z<q$ with $[p,q]\subseteq(z-\varepsilon,z+\varepsilon)$; then $E_A((p,q))=0$ by [F3], so $z\in V$. Hence $V=\mathbb R\setminus\sigma(A)$. [given, step 1.1, F2, F3, F5, algebra]

3.1 [The complement of the spectrum is null] The representation of step 2.1 writes $V=\mathbb R\setminus\sigma(A)$ as a countable union of Borel sets with $E_A=0$, so $E_A(V)=0$ by countable additivity [F2]; thus $E_A(\mathbb R\setminus\sigma(A))=0$, which by additivity [F2] is equivalent to $E_A(B)=E_A(B\cap\sigma(A))+E_A(B\setminus\sigma(A))=E_A(B\cap\sigma(A))$ for every Borel $B$. [given, step 2.1, F2, algebra]

4.1 [Nonempty relatively open subsets of the spectrum are not null] Let $U\subseteq\sigma(A)$ be nonempty and relatively open, so $U=\sigma(A)\cap W$ for some open $W\subseteq\mathbb R$. Choose $z\in U$ and $\varepsilon>0$ with $(z-\varepsilon,z+\varepsilon)\subseteq W$. By step 1.1, $E_A((z-\varepsilon,z+\varepsilon))\ne0$ because $z\in\sigma(A)$; by step 3.1 applied to the Borel set $(z-\varepsilon,z+\varepsilon)$, $E_A((z-\varepsilon,z+\varepsilon))=E_A((z-\varepsilon,z+\varepsilon)\cap\sigma(A))$, and $(z-\varepsilon,z+\varepsilon)\cap\sigma(A)\subseteq U$ by the choice of $\varepsilon$. Were $E_A(U)=0$, monotonicity [F3] would give $E_A((z-\varepsilon,z+\varepsilon)\cap\sigma(A))=0$, a contradiction; hence $E_A(U)\ne0$. This proves clause (a) together with step 3.1. [step 1.1, step 3.1, F2, F3, algebra]

4.2 [Clause (b)] By step 3.1 and additivity of $E_A$, $E_A(B)=E_A(B\cap\sigma(A))$ for every Borel $B$; applying the scalar law [F4] to both sides gives $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))=\operatorname{tr}(\rho E_A(B\cap\sigma(A)))=\mu^{A}_{\rho}(B\cap\sigma(A))$, and with $B=\mathbb R$ this reads $\mu^{A}_{\rho}(\sigma(A))=\operatorname{tr}(\rho E_A(\mathbb R))=\operatorname{tr}\rho=1$ by [F4]. [step 3.1, F4, algebra]

5.1 [Clause (c)] If $E_A(C)=0$ then $\operatorname{tr}(\rho E_A(C))=0$ by [F4] for every density operator; if $E_A(C)=I$ then $\operatorname{tr}(\rho E_A(C))=\operatorname{tr}\rho=1$ by [F4]. Both statements are instances of the scalar law, and clause (b) is the case $C=B\setminus\sigma(A)$ and $C=\sigma(A)$ respectively. [given, F4, algebra] ∎
