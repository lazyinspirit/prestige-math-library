---
id: thm-nrqm-uncertainty-joint-pvm-criterion
aliases: [nrqm-uncertainty-joint-pvm-criterion]
kind: theorem
domain: mathematics
title: "Strong spectral commutation, joint projection-valued measures and bounded Borel calculus"
status: published
origin: pipeline
dependency_level: 2
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-borel-sigma-algebra, def-countable-choice, def-hilbert-space, def-measurable-rectangle, def-projection-valued-measure, def-self-adjoint-positive-unitary-and-normal-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-nrqm-uncertainty-strong-spectral-commutation, lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators, lem-scalar-and-complex-measures-from-a-pvm, thm-bounded-borel-pvm-integral, thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, thm-nrqm-composites-joint-pvm-construction, thm-pvm-integral-is-a-star-homomorphism, thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-measurable-rectangle: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-nrqm-uncertainty-strong-spectral-commutation: mathematical-premise
  lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact: mathematical-premise
  thm-nrqm-composites-joint-pvm-construction: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 3, printed pages 87-100 (PDF pages 99-112): projection-valued measures, the spectral theorem and the joint calculus of commuting spectral projections"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Sections 7-8, printed pages 16-19: simultaneous diagonalization of commuting Hermitian operators and complete sets of commuting observables"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H$ be a nonzero
complex Hilbert space and let $A,B$ be self-adjoint operators on $H$ with
spectral projection-valued measures $E_{A},E_{B}$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]). Then the following are equivalent:

(i) $A$ and $B$ strongly commute in the sense of
[[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b), that is
$E_{A}(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(\Lambda)$ for all Borel
$\Lambda,\Sigma\subseteq\mathbb R$;

(ii) there is a regular projection-valued measure $G$ on the Borel
sigma-algebra of $\mathbb R^{2}$ whose values on measurable rectangles
([[def-measurable-rectangle]]) are
$G(\Lambda\times\Sigma)=E_{A}(\Lambda)E_{B}(\Sigma)$, and whose marginals are
$G(\Lambda\times\mathbb R)=E_{A}(\Lambda)$ and
$G(\mathbb R\times\Sigma)=E_{B}(\Sigma)$;

(iii) $f(A)g(B)=g(B)f(A)$ for all bounded Borel functions
$f,g:\mathbb R\to\mathbb C$, where the operators are those of the bounded
Borel functional calculus ([[thm-bounded-borel-pvm-integral]]).

If these conditions hold, the projection-valued measure $G$ of (ii) is unique,
and for all bounded Borel $f,g$ one has the representation
$$f(A)g(B)=g(B)f(A)=\int_{\mathbb R^{2}}f(a)g(b)\,dG(a,b).$$

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a nonzero complex Hilbert space $H$; self-adjoint operators $A,B$ on $H$ with spectral projection-valued measures $E_{A},E_{B}$; Borel sets $\Lambda,\Sigma\subseteq\mathbb R$; bounded Borel functions $f,g$ on $\mathbb R$.

[F1] **Strong commutation.** $A$ and $B$ strongly commute exactly when $E_{A}(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(\Lambda)$ for all Borel $\Lambda,\Sigma$, and this is a symmetric condition in $A$ and $B$ ([[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b)).

[F2] **Bounded calculus of strongly commuting operators.** If $A,B$ strongly commute, then $f(A)g(B)=g(B)f(A)$ for all bounded Borel $f,g$ ([[lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators]] clause (a)).

[F3] **Joint projection-valued measure construction.** Let $E,F$ be regular projection-valued measures on the Borel sigma-algebra of $\mathbb R$ with $E(B)F(C)=F(C)E(B)$ for all Borel $B,C\subseteq\mathbb R$. Then there is a unique regular projection-valued measure $G$ on the Borel sigma-algebra of $\mathbb R^{2}$ with $G(B\times C)=E(B)F(C)$ for every measurable rectangle $B\times C$, and its marginals are $G(B\times\mathbb R)=E(B)$ and $G(\mathbb R\times C)=F(C)$ ([[thm-nrqm-composites-joint-pvm-construction]]).

[F4] **Regularity of spectral measures.** For every $x\in H$ the set function $E_{A,x}(\Lambda)=\langle E_{A}(\Lambda)x,x\rangle$ is a finite Borel measure on $\mathbb R$ with $E_{A,x}(\mathbb R)=\|x\|^{2}$ ([[lem-scalar-and-complex-measures-from-a-pvm]]). Every Borel measure on $\mathbb R$ that is finite on compact sets is regular, because $\mathbb R$ is locally compact Hausdorff and each of its open subsets is sigma-compact ([[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]); hence $E_{A}$ and $E_{B}$ are regular projection-valued measures.

[F5] **Multiplicativity of projection-valued measures.** A projection-valued measure $G$ satisfies $G(S\cap T)=G(S)G(T)$ for all measurable $S,T$, and every value is an orthogonal projection ([[def-projection-valued-measure]]).

[F6] **Bounded integral and star homomorphism.** For a projection-valued measure $E$ on a measurable space and bounded measurable $h$, the operator $\Phi_{E}(h)=\int h\,dE$ satisfies $\|\Phi_{E}(h)\|\le\|h\|_{\infty}$ and is the norm limit of the integrals of uniformly convergent simple approximants; the map $h\mapsto\Phi_{E}(h)$ is linear, unital, multiplicative and adjoint preserving ([[thm-bounded-borel-pvm-integral]] clauses 1 and 2, [[thm-pvm-integral-is-a-star-homomorphism]] clauses 1-3).

## Proof

**Proof technique:** prove the equivalence in the order (i) implies (ii) implies (i), (i) implies (iii), (iii) implies (i); obtain the representation of the last display from the unique joint projection-valued measure by simple approximation.

**Given:** The data of the statement and [F1]-[F6].

1.1 [(i) implies (ii)] Assume (i). By [F4] the projection-valued measures $E_{A}$ and $E_{B}$ are regular, and by [F1] they commute on all Borel pairs; so [F3] supplies a unique regular projection-valued measure $G$ on the Borel sets of $\mathbb R^{2}$ with $G(\Lambda\times\Sigma)=E_{A}(\Lambda)E_{B}(\Sigma)$ for all measurable rectangles and with the stated marginals. This is (ii), including uniqueness. [given, F1, F3, F4]

1.2 [(ii) implies (i)] Assume (ii). For Borel $\Lambda,\Sigma$, the multiplicativity [F5] and the marginals give $$E_{A}(\Lambda)E_{B}(\Sigma)=G(\Lambda\times\mathbb R)\,G(\mathbb R\times\Sigma)=G(\Lambda\times\Sigma)=G(\mathbb R\times\Sigma)\,G(\Lambda\times\mathbb R)=E_{B}(\Sigma)E_{A}(\Lambda),$$ using $(\Lambda\times\mathbb R)\cap(\mathbb R\times\Sigma)=\Lambda\times\Sigma$. This is (i). [given, F5]

1.3 [(i) implies (iii)] This is [F2] verbatim. [given, F2]

1.4 [(iii) implies (i)] Assume (iii). Taking $f=\mathbf 1_{\Lambda}$ and $g=\mathbf 1_{\Sigma}$, which are bounded Borel, gives $E_{A}(\Lambda)E_{B}(\Sigma)=E_{B}(\Sigma)E_{A}(\Lambda)$. This is (i). [given, F6]

2.1 [The joint representation] Assume (i)-(iii) and let $G$ be the unique joint projection-valued measure of (ii), so that $G(\Lambda\times\Sigma)=E_{A}(\Lambda)E_{B}(\Sigma)$ for rectangles. Let $W(h):=\int h\,dG$ denote the bounded integral against $G$ for bounded Borel $h:\mathbb R^{2}\to\mathbb C$. For simple $s=\sum_{i}c_{i}\mathbf 1_{\Lambda_{i}}$, $t=\sum_{j}d_{j}\mathbf 1_{\Sigma_{j}}$ over disjoint covers of $\mathbb R$, the disjointness of the rectangles $\Lambda_{i}\times\Sigma_{j}$ and the defining property of the simple integral against a projection-valued measure give $$s(A)t(B)=\sum_{i,j}c_{i}d_{j}E_{A}(\Lambda_{i})E_{B}(\Sigma_{j})=\sum_{i,j}c_{i}d_{j}G(\Lambda_{i}\times\Sigma_{j})=W(s\otimes t).$$ For general bounded Borel $f,g$ choose simple $s_{n},t_{n}$ with $\|f-s_{n}\|_{\infty}\to0$ and $\|g-t_{n}\|_{\infty}\to0$ (uniform approximation by preimages of finite Borel partitions of bounded squares in $\mathbb C$, as in [F6]); then $\|s_{n}\otimes t_{n}-f\otimes g\|_{\infty}\to0$, so by the norm bound of [F6] both $s_{n}(A)t_{n}(B)\to f(A)g(B)$ and $W(s_{n}\otimes t_{n})\to W(f\otimes g)$ in operator norm, whence $f(A)g(B)=W(f\otimes g)=\int f(a)g(b)\,dG(a,b)$; combining with [F2] gives the displayed chain. [given, step 1.1, F2, F5, F6, construct, algebra] ∎
