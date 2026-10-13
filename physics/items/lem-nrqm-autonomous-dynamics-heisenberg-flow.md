---
id: lem-nrqm-autonomous-dynamics-heisenberg-flow
aliases: [nrqm-autonomous-dynamics-heisenberg-flow]
kind: lemma
domain: mathematics
title: "Heisenberg flow of a bounded operator: conjugates, covariance and the equation of motion"
status: published
origin: pipeline
dependency_level: 1
deps: [def-axiom-of-choice, def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-hilbert-space-adjoint, def-operator-norm, def-projection-valued-measure, def-self-adjoint-positive-unitary-and-normal-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-unbounded-integral-against-a-pvm, lem-nrqm-autonomous-dynamics-flow-calculus, thm-bounded-borel-pvm-integral, thm-hilbert-adjoint-properties, thm-pvm-integral-is-a-star-homomorphism, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-operator-norm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Sections 3.1-3.2, printed pages 18-22 (Heisenberg operators and the Heisenberg equation of motion)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 4.4, printed pages 70-71 (the Heisenberg picture: definition of the time-dependent operator, equation of motion, and equality of expectation values with the Schroedinger picture)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58, and Theorems 5.1-5.2, printed pages 123-125 (domain invariance and differentiability of the unitary flow)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H\ne\{0\}$ be a complex Hilbert space ([[def-hilbert-space]]), let $T$ be self-adjoint ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]) and $U(t)=e^{itT}$ as in [[lem-nrqm-autonomous-dynamics-flow-calculus]]; for $A\in\mathcal B(H)$ ([[def-bounded-linear-operator]]) put
$$A(t):=U(t)^{*}AU(t)=U(-t)AU(t)\qquad(t\in\mathbb R).$$
Then:

(a) $A(t)\in\mathcal B(H)$ with $A(0)=A$, $\|A(t)\|=\|A\|$ ([[def-operator-norm]]) and $A(t)^{*}=A^{*}(t)$; in particular $A$ self-adjoint implies every $A(t)$ self-adjoint ([[def-self-adjoint-positive-unitary-and-normal-operator]]). Moreover $A(t+s)=U(s)^{*}A(t)U(s)$ for all $s,t$.

(b) If $A\,D(T)\subseteq D(T)$, then $A(t)D(T)\subseteq D(T)$ for every $t$, and for every $x\in D(T)$ the map $t\mapsto A(t)x$ is differentiable at every $t$ with
$$\frac{d}{dt}A(t)x=-i\,[T,A(t)]x=-i\bigl(TA(t)-A(t)T\bigr)x .$$

(c) For every $x\in H$ the map $t\mapsto A(t)x$ is continuous, and the uniform operator norm bound $\|A(t)\|\le\|A\|$ holds.

(d) If $A$ is self-adjoint with spectral projection-valued measure $E_A$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]), then every $A(t)$ is self-adjoint with spectral projection-valued measure
$$E_{A(t)}(B)=U(-t)E_A(B)U(t)\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
and the spectra agree, $\sigma(A(t))=\sigma(A)$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a nonzero complex Hilbert space $H$; a self-adjoint operator $T$ with flow $U(t)=e^{itT}$; a bounded operator $A\in\mathcal B(H)$; vectors $x\in H$; real $s,t$.

[F1] **Flow calculus.** $U$ is a strongly continuous one-parameter unitary group with $U(t)^{*}=U(-t)$, $U(t)D(T)=D(T)$, $TU(t)=U(t)T$ on $D(T)$, and for bounded Borel $h$ one has $h(T)U(t)=U(t)h(T)$; for $x\in D(T)$ the map $t\mapsto U(t)x$ is differentiable with derivative $iU(t)Tx$ ([[lem-nrqm-autonomous-dynamics-flow-calculus]] clause (a)-(c)).

[F2] **Adjoints and norms.** For $B,C,D\in\mathcal B(H)$ one has $(BCD)^{*}=D^{*}C^{*}B^{*}$, $\|BCD\|\le\|B\|\,\|C\|\,\|D\|$ and $\|B^{*}\|=\|B\|$; each $U(t)$ is unitary, so $\|U(-t)BU(t)\|=\|B\|$ and $U(t)^{*}=U(-t)$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space-adjoint]], [[def-operator-norm]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F3] **Bounded calculus under unitary conjugation.** Let $E$ be a PVM on the Borel sets of $\mathbb R$ of a self-adjoint operator and $W$ unitary. Then $B\mapsto WE(B)W^{*}$ is a regular PVM whose scalar measure in $x$ is $E_{W^{*}x}$, and for bounded Borel $f$ one has $\Phi_{WE(\cdot)W^{*}}(f)=W\Phi_E(f)W^{*}$ ([[def-projection-valued-measure]], [[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]]).

[F4] **Truncation definition and uniqueness.** For a PVM $E$ and measurable $f$ one has $f(E)x=\lim_{n}\Phi_E\bigl(f\mathbf 1_{\{|f|\le n\}}\bigr)x$ for $x\in D(f(E))$; for bounded self-adjoint operators the representing regular PVM is unique ([[def-unbounded-integral-against-a-pvm]], [[thm-unbounded-borel-functional-calculus]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).



## Proof

**Proof technique:** direct; conjugate the flow properties of [[lem-nrqm-autonomous-dynamics-flow-calculus]] by bounded operators, with the product-domain hypothesis used only where the differential equation is asserted.

**Given:** The data of the statement, and [F1]-[F4].

1.1 [Boundedness, norm and adjoint] $A(t)=U(-t)AU(t)$ is a product of bounded operators, so bounded, and $A(0)=A$; by [F2], $\|A(t)\|=\|A\|$ and $A(t)^{*}=U(t)^{*}A^{*}U(-t)^{*}=U(-t)A^{*}U(t)=A^{*}(t)$; hence $A$ self-adjoint implies $A(t)$ self-adjoint. For the covariance, $A(t+s)=U(-t-s)AU(t+s)=U(s)^{*}U(-t)AU(t)U(s)=U(s)^{*}A(t)U(s)$ by the group law. This is (a). [given, F1, F2, algebra]

1.2 [Time-invariance of the product-domain hypothesis] Assume $A\,D(T)\subseteq D(T)$. For $y\in D(T)$ one has $U(t)y\in D(T)$ by [F1], then $AU(t)y\in D(T)$ by hypothesis, and finally $U(-t)AU(t)y\in D(T)$ by [F1] again; thus $A(t)y=U(-t)AU(t)y\in D(T)$. [given, F1]

1.3 [Conjugation of the spectral measure] Assume $A$ self-adjoint with spectral PVM $E_A$. Fix $t$ and put $E'(B):=U(-t)E_A(B)U(t)$. Then $E'$ is a PVM: each $E'(B)$ is an orthogonal projection because $U(-t)=U(t)^{*}$ is unitary and $E_A(B)$ is an orthogonal projection; $E'(\varnothing)=0$, $E'(\mathbb R)=I$; and for pairwise disjoint Borel $B_n$ with union $B$, the strong countable additivity of $E_A$ gives $\sum_nE'(B_n)x=U(-t)\bigl(\sum_nE_A(B_n)U(t)x\bigr)\to U(-t)E_A(B)U(t)x=E'(B)x$ because $U(-t)$ is bounded. It is regular because its scalar measure in $x$ is $E'_x(B)=\|E'(B)x\|^{2}=\langle U(-t)E_A(B)U(t)x,x\rangle=\langle E_A(B)U(t)x,U(t)x\rangle=E_{A,U(t)x}(B)$, a regular Borel measure. [given, F1, F3, F4]

2.1 [Strong continuity] For $x\in H$, $A(t)x-A(s)x=U(-t)A\bigl(U(t)-U(s)\bigr)x+\bigl(U(-t)-U(-s)\bigr)AU(s)x$, and both terms tend to $0$ as $t\to s$ because $U$ is strongly continuous and $A$ is bounded; the norm bound is step 1.1. This is (c). [given, step 1.1, F1, F2, algebra]

2.2 [Equation of motion] Assume $A\,D(T)\subseteq D(T)$ and let $x\in D(T)$. Decompose $A(t+s)x-A(t)x=U(-t-s)A(U(t+s)x-U(t)x)+(U(-t-s)-U(-t))AU(t)x$; the first term divided by $s$ equals $U(-t-s)A\frac1s(U(t+s)x-U(t)x)$, and $\frac1s(U(t+s)x-U(t)x)\to iU(t)Tx$ by [F1], so it tends to $iU(-t)AU(t)Tx=iA(t)Tx$. For the second term, $y:=AU(t)x$ lies in $D(T)$ by step 1.2, and $\frac1s(U(-s)y-y)\to-iTy$ by [F1] applied at $0$ to the group $s\mapsto U(-s)$; hence the second term divided by $s$ equals $U(-t)\frac1s(U(-s)y-y)\to-iU(-t)Ty=-iTU(-t)y=-iTA(t)x$, using the commutation $TU(-t)=U(-t)T$ on $D(T)$ from [F1]. Adding the two limits gives $\frac{d}{dt}A(t)x=iA(t)Tx-iTA(t)x=-i(TA(t)-A(t)T)x$. This is (b). [given, step 1.2, F1, algebra]

2.3 [Identification as the spectral measure of $A(t)$] With $E'$ as in step 1.3, [F3] gives $\Phi_{E'}(g)=U(-t)\Phi_{E_A}(g)U(t)$ for bounded Borel $g$: the identity holds for indicators by definition of $E'$, extends to simple functions by linearity, and passes to uniform limits by the norm estimate of [[thm-bounded-borel-pvm-integral]] clause 1. Applying the truncation definition [F4] with $g_n(\lambda)=\lambda\mathbf 1_{\{|\lambda|\le n\}}$ and $x\in H$ (the domain is all of $H$ because $A$ is bounded) gives $\int\lambda\,dE'(\lambda)x=\lim_n\Phi_{E'}(g_n)x=\lim_nU(-t)\Phi_{E_A}(g_n)U(t)x=U(-t)(\int\lambda\,dE_A(\lambda))U(t)x=U(-t)AU(t)x=A(t)x$, where the middle limit is interchanged with the bounded operator $U(-t)$ and $\int\lambda\,dE_A(\lambda)=A$ is the spectral representation of the bounded self-adjoint $A$. Hence $E'$ represents the bounded self-adjoint $A(t)$, and by uniqueness [F4] it is the spectral PVM of $A(t)$. [given, step 1.3, F3, F4, algebra]

3.1 [Spectra] For a self-adjoint operator with spectral PVM $F$, the spectrum consists of the points $\lambda$ with $F((\lambda-\varepsilon,\lambda+\varepsilon))\ne0$ for every $\varepsilon>0$ ([[thm-unbounded-borel-functional-calculus]] clause 4 with $f$ the identity). By step 2.3, $E_{A(t)}((\lambda-\varepsilon,\lambda+\varepsilon))=U(-t)E_A((\lambda-\varepsilon,\lambda+\varepsilon))U(t)$ is nonzero exactly when $E_A((\lambda-\varepsilon,\lambda+\varepsilon))$ is; hence $\sigma(A(t))=\sigma(A)$. [given, step 2.3, F4]

4.1 Steps 1.1, 2.1, 1.2, 2.2, 1.3, 2.3 and 3.1 prove (a)-(d). [step 1.1, step 2.1, step 1.2, step 2.2, step 1.3, step 2.3, step 3.1] ∎

## Remarks

- **Where the hypothesis is needed.** Clauses (a) and (c) require nothing beyond boundedness of $A$; clause (b), and with it the Heisenberg equation, uses the product-domain hypothesis $A\,D(T)\subseteq D(T)$, which is exactly the condition under which the differentiated products are defined. A bounded observable whose spectral PVM commutes with that of $T$ satisfies the hypothesis trivially, because then $A$ maps every $D(h(T))$ into itself.
- **Transported measurable functional calculus.** Step 2.3 shows more than the statement of (d): for every bounded Borel $g$ the operator $g(A(t))$ equals $U(-t)g(A)U(t)$; this is the operator form of the statement that the unitary flow is an automorphism of the algebra of bounded Borel functions of the observable.

