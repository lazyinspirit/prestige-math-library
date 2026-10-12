---
id: lem-nrqm-kinematics-componentwise-position-and-momentum
aliases: [nrqm-kinematics-componentwise-position-and-momentum]
kind: lemma
domain: mathematics
title: "Componentwise position and momentum operators on the component-valued wave-function space"
status: draft
origin: session
dependency_level: 3
deps: [def-axiom-of-choice, def-countable-choice, def-fourier-transform-on-l-one-of-rn, def-hilbert-space, def-infinitesimal-generator-of-a-unitary-group, def-nrqm-magnetic-and-detection-position-and-momentum-operators, def-schwartz-space-and-its-seminorms, def-sobolev-space-wkp-and-its-norm, def-strongly-continuous-one-parameter-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-weak-derivative-of-a-locally-integrable-function, lem-classical-derivatives-are-weak-derivatives, lem-complex-translation-and-approximate-identity-interfaces, lem-nrqm-composites-momentum-fourier-jacobian, lem-nrqm-kinematics-component-valued-wavefunction-identifications, lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, thm-complex-exponential-is-entire-with-derivative-itself, thm-dominated-convergence, thm-plancherel, thm-stone-one-parameter-unitary-groups, lem-weak-derivatives-are-polynomial-fourier-multipliers]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  lem-nrqm-composites-momentum-fourier-jacobian: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): position and momentum operators, domains, the canonical commutation relation; Sections 7.1-7.2, printed pages 161-169 (PDF pages 173-181): the Fourier transform and the free Schroedinger operator; Section 2.5, printed pages 79-80 (PDF pages 91-92): orthogonal sums"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Section 6, printed pages 22-25 (PDF pages 22-25): the momentum operator in the position representation, momentum eigenstates, the Fourier momentum representation and the position operator in the momentum representation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3, printed pages 24-32 (PDF pages 32-40): the momentum operator in the position representation, its Hermiticity, the commutator [x,p]=i hbar and momentum-space amplitudes"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of the
cited scalar operator and spectral suppliers. Fix integers $d\ge1$, $r\ge1$ and
$\hbar>0$. Let $H^{(r)}=L^{2}(\mathbb R^{d};\mathbb C^{r})$ be the
component-valued space of [[lem-nrqm-kinematics-component-valued-wavefunction-identifications]]
with its componentwise inner product, let $Q_{j}^{(1)},P_{k}^{(1)}$ be the
scalar position and momentum operators on $L^{2}(\mathbb R^{d};\mathbb C)$ of
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], and let
$\mathcal F_{2}$ be the unitary Plancherel transform with
$\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ on $L^{1}$
([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]). Write
$\mathcal F_{2}^{(r)}:=\Psi_{0}\bigl(\bigoplus_{l}\mathcal F_{2}\bigr)\Psi_{0}^{-1}$
for its componentwise version, with $\Psi_{0}$ the unitary of
[[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clause (a).
Define, componentwise,
$$D(Q_{j}):=\bigl\{f=(f_{l})\in H^{(r)}:\ x_{j}f_{l}\in L^{2}\ \text{for all }l\bigr\},\qquad (Q_{j}f)_{l}:=x_{j}f_{l},$$
$$D(P_{k}):=\bigl\{f=(f_{l})\in H^{(r)}:\ D_{k}f_{l}\text{ exists in }L^{2}\ \text{for all }l\bigr\},\qquad (P_{k}f)_{l}:=-i\hbar\,D_{k}f_{l},$$
where $D_{k}$ is the weak derivative of [[def-weak-derivative-of-a-locally-integrable-function]].
Write $W^{m,2}(\mathbb R^{d};\mathbb C^{r})$ for the classes whose components
lie in $W^{m,2}(\mathbb R^{d};\mathbb C)$ ([[def-sobolev-space-wkp-and-its-norm]]),
and $\mathcal S(\mathbb R^{d};\mathbb C^{r})$ for the componentwise Schwartz
class ([[def-schwartz-space-and-its-seminorms]]). Then:

(a) under $\Psi_{0}$ the operators $Q_{j}$ and $P_{k}$ are the orthogonal sums
$\bigoplus_{l}Q_{j}^{(1)}$ and $\bigoplus_{l}P_{k}^{(1)}$ of
[[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]]; in particular
$Q_{j}$ and $P_{k}$ are densely defined and self-adjoint with the displayed
domains;

(b) $\mathcal F_{2}^{(r)}$ is unitary,
$$D(P_{k})=\bigl\{f\in H^{(r)}:\ \xi_{k}\mathcal F_{2}^{(r)}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})\bigr\},$$
and for every $f\in D(P_{k})$
$$\mathcal F_{2}^{(r)}(P_{k}f)(\xi)=2\pi\hbar\,\xi_{k}\,\mathcal F_{2}^{(r)}f(\xi)\qquad\text{for almost every }\xi;$$

(c) the componentwise translation $T_{a}^{(r)}f:=f(\cdot-a)$, $a\in\mathbb R^{d}$,
is unitary, leaves $\mathcal S(\mathbb R^{d};\mathbb C^{r})$,
$W^{1,2}(\mathbb R^{d};\mathbb C^{r})$ and $W^{2,2}(\mathbb R^{d};\mathbb C^{r})$
invariant, satisfies $D_{k}(T_{a}^{(r)}f)=T_{a}^{(r)}(D_{k}f)$ for
$f\in W^{1,2}(\mathbb R^{d};\mathbb C^{r})$, and
$$T_{a}^{(r)}D(Q_{j})=D(Q_{j}),\quad T_{a}^{(r)}Q_{j}\bigl(T_{a}^{(r)}\bigr)^{-1}=Q_{j}-a_{j}I,\qquad T_{a}^{(r)}D(P_{k})=D(P_{k}),\quad T_{a}^{(r)}P_{k}\bigl(T_{a}^{(r)}\bigr)^{-1}=P_{k};$$

(d) for every $f\in D(P_{j})$,
$$\lim_{t\to0}\frac1t\bigl(T_{te_{j}}^{(r)}f-f\bigr)=-\frac{i}{\hbar}P_{j}f \qquad\text{in }H^{(r)},$$
so the strongly continuous one-parameter unitary group
$t\mapsto T_{te_{j}}^{(r)}$ has generator $-\frac{i}{\hbar}P_{j}$ and
$$T_{te_{j}}^{(r)}=\exp\Bigl(-\frac{i}{\hbar}tP_{j}\Bigr)\qquad(t\in\mathbb R),$$
the exponential being the spectral-calculus flow of the self-adjoint operator
$P_{j}$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; integers $d,r\ge1$; $\hbar>0$; the scalar operators $Q_{j}^{(1)},P_{k}^{(1)}$; the componentwise operators $Q_{j},P_{k}$; the unitaries $\Psi_{0}$ and $\mathcal F_{2},\mathcal F_{2}^{(r)}$; the translations $T_{a},T_{a}^{(r)}$; classes $f,g\in H^{(r)}$; a vector $a\in\mathbb R^{d}$; a real $t\ne0$; a coordinate index $j,k$.

[F1] **Scalar position and momentum.** On $L^{2}(\mathbb R^{d};\mathbb C)$ the operators $Q_{j}^{(1)}$ and $P_{k}^{(1)}$ are self-adjoint with $D(Q_{j}^{(1)})=\{f:x_{j}f\in L^{2}\}$ and $D(P_{k}^{(1)})=\{f:\xi_{k}\mathcal F_{2}f\in L^{2}\}$, $\mathcal F_{2}(P_{k}^{(1)}f)(\xi)=2\pi\hbar\xi_{k}\mathcal F_{2}f(\xi)$ for $f\in D(P_{k}^{(1)})$, the scalar translations $T_{a}g=g(\cdot-a)$ are unitary with $T_{a}D(Q_{j}^{(1)})=D(Q_{j}^{(1)})$, $T_{a}Q_{j}^{(1)}T_{a}^{-1}=Q_{j}^{(1)}-a_{j}I$, $T_{a}D(P_{k}^{(1)})=D(P_{k}^{(1)})$, $T_{a}P_{k}^{(1)}T_{a}^{-1}=P_{k}^{(1)}$, and $T_{a}$ preserves $W^{1,2},W^{2,2}$ with $D_{k}(T_{a}g)=T_{a}(D_{k}g)$ ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clauses (a)-(c)). For a Schwartz class the classical derivative is the weak derivative and lies in the Schwartz class ([[lem-classical-derivatives-are-weak-derivatives]], [[def-schwartz-space-and-its-seminorms]]).

[F2] **Componentwise identifications.** $\Psi_{0}:\bigoplus_{l}L^{2}(\mathbb R^{d};\mathbb C)\to H^{(r)}$ is a unitary isomorphism, a tuple of classes is mapped to the class of its component function, and the componentwise multipliers and translations of $H^{(r)}$ correspond under $\Psi_{0}$ to the amplifications $M_{a}\otimes I$ and $T_{a}\otimes I$ ([[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clauses (a),(c)). In particular a class in $H^{(r)}$ has all its components in the Schwartz class exactly when it lies in $\mathcal S(\mathbb R^{d};\mathbb C^{r})$ ([[def-schwartz-space-and-its-seminorms]]).

[F3] **Orthogonal sums.** For finitely many densely defined self-adjoint operators $A_{l}$ the orthogonal sum $\bigoplus_{l}A_{l}$ is self-adjoint with domain $\{(x_{l}):x_{l}\in D(A_{l}),\ \sum_{l}\|A_{l}x_{l}\|^{2}<\infty\}$, and the orthogonal sum of unitaries is unitary with norm one ([[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]] clauses (b),(c)).

[F4] **Plancherel and multipliers.** $\mathcal F_{2}$ is unitary ([[thm-plancherel]]); for $L^{2}$ classes $u,w$ with $-i\hbar D_{k}$ defined componentwise, the Fourier multiplier identity is $\mathcal F_{2}(D_{k}u)(\xi)=2\pi i\xi_{k}\mathcal F_{2}u(\xi)$ for classes whose weak derivative is in $L^{2}$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]); the scalar function $\mathcal F_{2}(T_{a}u)(\xi)=e^{-2\pi ia\cdot\xi}\mathcal F_{2}u(\xi)$ holds for $u\in L^{1}\cap L^{2}$ and extends by density; the exponential is entire with derivative itself, so $\frac{e^{i\theta}-1}{\theta}\to i$ as $\theta\to0$, and $|e^{i\theta}-1|\le|\theta|$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]; the bound follows from the mean value estimate for the curve $s\mapsto e^{is\theta}$ over $[0,1]$ with $|e^{i\theta}-1|\le|\theta|$). Translation depends norm-continuously on $a$ in $L^{2}$, so $a\mapsto T_{a}^{(r)}$ is strongly continuous ([[lem-complex-translation-and-approximate-identity-interfaces]]). [F4]

[F5] **Generation and uniqueness.** For a self-adjoint $T$ the family $t\mapsto e^{itT}$ is a strongly continuous unitary group with generator $iT$, and two strongly continuous unitary groups with one and the same generator agree ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]], [[def-infinitesimal-generator-of-a-unitary-group]], [[thm-stone-one-parameter-unitary-groups]]).

[F6] **Dominated convergence.** If $|h_{t}|\le G$ with $G$ integrable and $h_{t}\to h$ pointwise as $t\to0$, then $\int|h_{t}-h|\to0$ ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct; transport the componentwise operators to orthogonal sums of scalar operators, read off self-adjointness and the Fourier representation, verify the translation identities componentwise and prove the difference-quotient limit by Plancherel with dominated convergence before identifying the group.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Operators as orthogonal sums] Let $f=(f_{l})\in H^{(r)}$. By [F2] one has $\Psi_{0}^{-1}f=(f_{l})\in\bigoplus_{l}L^{2}$, and $f\in D(Q_{j})$ holds exactly when $x_{j}f_{l}\in L^{2}$ for every $l$, that is when $\Psi_{0}^{-1}f\in\bigoplus_{l}D(Q_{j}^{(1)})$; on that domain $\Psi_{0}^{-1}(Q_{j}f)=(x_{j}f_{l})_{l}=(\bigoplus_{l}Q_{j}^{(1)})\Psi_{0}^{-1}f$. The same computation with $D_{k}f_{l}$ in place of $x_{j}f_{l}$ gives $\Psi_{0}^{-1}(P_{k}f)=(\bigoplus_{l}P_{k}^{(1)})\Psi_{0}^{-1}f$ on $\Psi_{0}^{-1}D(P_{k})=\bigoplus_{l}D(P_{k}^{(1)})$. The finite-sum condition in the domain of an orthogonal sum is automatic here: if every $\|Q_{j}^{(1)}f_{l}\|$ is finite then $\sum_{l}\|Q_{j}^{(1)}f_{l}\|^{2}=\|Q_{j}f\|^{2}<\infty$, and similarly for $P_{k}$. This proves the identification in (a). [F1, F2, algebra]

1.2 [A scalar difference quotient] Let $g\in L^{2}(\mathbb R^{d};\mathbb C)$ with $\xi_{j}\mathcal F_{2}g\in L^{2}$, that is $g\in D(P_{j}^{(1)})$ by [F1], and let $t\ne0$. The modulation identity $\mathcal F_{2}(T_{te_{j}}g)(\xi)=e^{-2\pi it\xi_{j}}\mathcal F_{2}g(\xi)$ of [F4] gives $\mathcal F_{2}\Bigl(\frac1t\bigl(T_{te_{j}}g-g\bigr)\Bigr)(\xi) =\frac{e^{-2\pi it\xi_{j}}-1}{t}\,\mathcal F_{2}g(\xi).$ Writing $\theta:=-2\pi t\xi_{j}$, the factor equals $\frac{e^{i\theta}-1}{i\theta}\cdot\bigl(-2\pi i\xi_{j}\bigr)$; by [F4] the first factor tends to $1$ and $\theta\to0$ for every fixed $\xi$ as $t\to0$, so the pointwise limit of the right-hand side is $-2\pi i\xi_{j}\mathcal F_{2}g(\xi)=\mathcal F_{2}(-D_{j}g)(\xi)$ [F4]. For domination, [F4] gives $|\frac{e^{i\theta}-1}{t}|\le|\theta/t|=2\pi|\xi_{j}|$, so the modulus of the difference $\bigl(\frac{e^{-2\pi it\xi_{j}}-1}{t}+2\pi i\xi_{j}\bigr)\mathcal F_{2}g(\xi)$ is at most $4\pi|\xi_{j}|\,|\mathcal F_{2}g(\xi)|$, whose square is integrable because $\xi_{j}\mathcal F_{2}g\in L^{2}$. Hence [F6] gives $\mathcal F_{2}\bigl(\frac1t(T_{te_{j}}g-g)\bigr)\to\mathcal F_{2}(-D_{j}g)$ in $L^{2}$; since $\mathcal F_{2}$ is a surjective isometry [F4], and $D_{j}g=-\frac{i}{\hbar}P_{j}^{(1)}g$, this yields $\lim_{t\to0}\frac1t\bigl(T_{te_{j}}g-g\bigr)=-\frac{i}{\hbar}P_{j}^{(1)}g \qquad\text{in }L^{2}.$ [F1, F4, F6, algebra]

2.1 [Self-adjointness] Each scalar $Q_{j}^{(1)}$ and $P_{k}^{(1)}$ is self-adjoint by [F1], so [F3] makes their finite orthogonal sums self-adjoint with the displayed domains and dense domains; by step 1.1 these sums are the conjugates of $Q_{j}$ and $P_{k}$ by the unitary $\Psi_{0}$, hence $Q_{j}$ and $P_{k}$ are densely defined and self-adjoint. This completes (a). [step 1.1, F1, F3]

2.2 [Fourier representation] By [F2] and [F3], $\mathcal F_{2}^{(r)}$ is the orthogonal sum of the unitaries $\mathcal F_{2}$, hence unitary. For $f\in D(P_{k})$ its components satisfy $\mathcal F_{2}(P_{k}^{(1)}f_{l})(\xi)=2\pi\hbar\xi_{k}\mathcal F_{2}f_{l}(\xi)$ for almost every $\xi$ by [F1]; assembling components gives $\mathcal F_{2}^{(r)}(P_{k}f)(\xi)=2\pi\hbar\xi_{k}\mathcal F_{2}^{(r)}f(\xi)$ for almost every $\xi$. The domain description follows because $\xi_{k}\mathcal F_{2}f_{l}\in L^{2}$ for all $l$ is exactly $\xi_{k}\mathcal F_{2}^{(r)}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})$. This proves (b). [step 1.1, F1, F2, F3, algebra]

2.3 [Translation identities] By [F2] the translation $T_{a}^{(r)}$ corresponds to $\bigoplus_{l}T_{a}$, which is unitary by [F3] and [F1]; it preserves the componentwise Schwartz and Sobolev classes because each scalar $T_{a}$ does [F1]. The identities $D_{k}(T_{a}^{(r)}f)=T_{a}^{(r)}(D_{k}f)$ and $T_{a}^{(r)}D(Q_{j})=D(Q_{j})$, $T_{a}^{(r)}Q_{j}(T_{a}^{(r)})^{-1}=Q_{j}-a_{j}I$, $T_{a}^{(r)}P_{k}(T_{a}^{(r)})^{-1}=P_{k}$ are componentwise instances of [F1]; for instance, $(T_{a}^{(r)}Q_{j}(T_{a}^{(r)})^{-1}f)_{l} =T_{a}(x_{j}T_{-a}f_{l})=(x_{j}-a_{j})f_{l}$ for $f_{l}\in D(Q_{j}^{(1)})$, and the domain equality follows from the scalar one. This proves (c). [step 1.1, F1, F2, F3, algebra]

2.4 [The componentwise limit] Let $f\in D(P_{j})$. Applying step 1.2 to each component $f_{l}\in D(P_{j}^{(1)})$ and assembling components through the unitary $\Psi_{0}$ [F2] gives $\frac1t(T_{te_{j}}^{(r)}f-f)\to\bigl(-\frac{i}{\hbar}P_{j}^{(1)}f_{l}\bigr)_{l} =-\frac{i}{\hbar}P_{j}f$ in $H^{(r)}$ as $t\to0$; this is the first assertion of (d). [step 1.2, F1, F2, algebra]

3.1 [The group of translations and its generator] Fix $j$. The family $U_{j}(t):=T_{te_{j}}^{(r)}$ is a strongly continuous one-parameter unitary group: the group law and unitarity follow from the componentwise definition of translations and [F3], and strong continuity from [F4]. By step 2.4 its generator $G$ satisfies $G\supseteq-\frac{i}{\hbar}P_{j}$; by [F5] applied to the self-adjoint operator $T:=-P_{j}/\hbar$, the family $V_{j}(t):=\exp\bigl(-\frac{i}{\hbar}tP_{j}\bigr)=\exp(itT)$ is a strongly continuous unitary group with generator $iT=-\frac{i}{\hbar}P_{j}$ and domain $D(P_{j})$, and it preserves $D(P_{j})$ [F5]. On $D(P_{j})$ both groups have the same right derivative at $0$, and both preserve $D(P_{j})$; hence $w(t):=U_{j}(t)g-V_{j}(t)g$ for fixed $g\in D(P_{j})$ satisfies $w'(t)=\bigl(-\frac{i}{\hbar}P_{j}\bigr)w(t)$ and $\frac{d}{dt}\|w(t)\|^{2}=2\operatorname{Re}\langle w(t),-\frac{i}{\hbar}P_{j}w(t)\rangle=0$ because $\langle P_{j}w(t),w(t)\rangle$ is real; with $w(0)=0$ this gives $U_{j}(t)g=V_{j}(t)g$ for all $t$ on the dense set $D(P_{j})$, hence $U_{j}(t)=V_{j}(t)$ by continuity and unitarity. This proves (d). [step 2.4, F1, F5, algebra] ∎

## Remarks

- **Domains are part of the statement.** $Q_{j}$ and $P_{k}$ are unbounded;
  clause (a) exhibits them as orthogonal sums with maximal componentwise
  domains, and no product or commutator of two such operators is asserted
  here beyond the domains displayed.
- **The difference-quotient clause is the generator statement.** Clause (d)
  identifies the coordinate translation group with the spectral flow of the
  momentum component; it is used by the physics items of this page to read the
  translation unitaries as generated by momentum, and no global exponential
  $\exp(-ia\cdot P/\hbar)$ for a vector $a$ is asserted in this lemma beyond
  the displayed coordinate statement.
