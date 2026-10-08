---
id: lem-c-star-state-gns-purity-and-polish-state-space
kind: lemma
title: "C star state GNS construction, purity and Polish pure-state spaces"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-c-star-algebra
  - def-state-on-a-c-star-algebra
  - def-axiom-of-choice
  - def-countable-choice
  - thm-banach-alaoglu
  - thm-ultrafilter-lemma
  - thm-riesz-representation-for-hilbert-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-minimal-c-star-unitization
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - thm-completion-of-an-inner-product-space-is-hilbert
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-hilbert-space-adjoint
  - def-separable-space
  - thm-complex-hahn-banach-norm-preserving-extension
  - thm-commutative-gelfand-naimark
  - thm-krein-milman-existence-of-extreme-points
  - thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable
  - def-polish-space
  - prop-polish-space-countability-conventions-agree
  - def-weak-star-topology
  - def-topological-group
  - def-strongly-continuous-unitary-representation
  - thm-schurs-lemma-for-unitary-representations
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
aliases: []
axiom_use: "AC is the explicit global hypothesis. Its exact uses are: AC gives the ultrafilter lemma used by Banach-Alaoglu; supplies the choice assumptions of complex Hahn-Banach, Krein-Milman, Schur's lemma, and the cited positive-calculus/unitization interfaces; and implies Countable Choice ([[def-countable-choice]]) for Hilbert completion, Riesz representation, adjoints, closed-subspace projection, and G-delta remetrization. After those supplier hypotheses are applied, the algebraic GNS quotient, dominated-form correspondence, state-space metric construction, and pure norming-state face argument use no additional choice."
proof_strategy: direct
sources:
  references:
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Proposition 1.10.3 (GNS construction), printed p. 35; Lemma 3.6.4 (dominated positive forms and commutants) and Proposition 3.6.5 (purity and irreducibility), printed pp. 104-105; the proof below supplies the nonunital normalization and all positive subfunctionals explicitly."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Lemma 1.7.6(3)-(4), printed pp. 27-28, for norm-preserving state extension and norm-attaining states; the pure norm-attainer is obtained locally by the declared Krein-Milman theorem."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras Errata (author-maintained, 13 December 2025)"
      url: "https://ifarah.mathstats.yorku.ca/files/2025/12/standcstar-errata.pdf"
      locator: "PDF p. 4, correction note on Proposition 3.6.5, proof of (1) implies (2): no mathematical error is identified, but the note supplies the omitted norm-additivity-to-convex-decomposition explanation proved locally in step 2.3."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a complex C*-algebra and let $\phi$ be a state, meaning a positive bounded linear functional of norm one ([[def-c-star-algebra]], [[def-state-on-a-c-star-algebra]]). There is a Hilbert space $H_\phi$, a bounded *-representation $\pi_\phi:A\to\mathcal B(H_\phi)$ ([[def-space-of-bounded-linear-operators]], [[def-hilbert-space-adjoint]]), and a unit vector $\xi_\phi$ such that $\overline{\pi_\phi(A)\xi_\phi}=H_\phi$ and $\phi(a)=\langle\pi_\phi(a)\xi_\phi,\xi_\phi\rangle$ for every $a\in A$. This representation is nondegenerate, and any two such triples are related by a unique unitary intertwiner taking one cyclic vector to the other. If $A$ is separable, then $H_\phi$ is separable. A state is **pure** when it is an extreme point of the convex state space; a representation is **irreducible** when it has no closed invariant subspaces other than $\{0\}$ and its whole Hilbert space. The GNS representation is irreducible exactly when $\phi$ is pure.

Write $\pi_\phi(A)'$ for the bounded operators commuting with every $\pi_\phi(a)$. The assignment $T\mapsto\psi_T$, $\psi_T(a)=\langle\pi_\phi(a)T\xi_\phi,\xi_\phi\rangle$, is an order isomorphism from $\{T\in\pi_\phi(A)':0\le T\le I\}$ onto the bounded positive functionals $\psi$ satisfying $0\le\psi\le\phi$.

For separable $A$, the pure-state space with its weak-star topology is Polish. If $A$ is unital, its state space is weak-star compact and its pure states are exactly the extreme points; if $A$ is also separable, that state space is metrizable. If $A$ is nonunital, pure states correspond by restriction and unique state extension to the pure states of the minimal unitization other than its augmentation character; the corresponding state space of $A$ is the set of unitization states whose restriction has norm one, not all states other than the augmentation character.

For every nonzero positive $a\in A$ there is a pure state $\phi$ with $\phi(a)=\|a\|$. Hence every nonzero closed two-sided ideal $J\subseteq A$ is omitted by the kernel of some irreducible GNS representation; that kernel is a primitive ideal, meaning the kernel of an irreducible representation.

## Facts & Assumptions

**Given:** AC, a complex C*-algebra $A$, and a positive bounded functional $\phi$ with $\|\phi\|=1$.

[F1] Algebraic positivity is the cone $\{b^*b:b\in A\}$; positive calculus gives $\|a\|^2 1-a^*a\ge0$ in the unitization, conjugation preserves order, positive square roots exist, and *-homomorphisms of C*-algebras are contractive ([[def-c-star-algebra]], [[lem-c-star-positive-calculus-and-order-estimates]], [[thm-minimal-c-star-unitization]]).

[F2] Positive functionals are Hermitian, satisfy Cauchy-Schwarz, and obey $\|\theta\|=\sup\{\theta(b):0\le b\le1\}$. Closed two-sided ideals are self-adjoint, and $A$ has positive contractive approximate units ([[def-state-on-a-c-star-algebra]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F3] AC implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Under Countable Choice, completing a complex inner-product space gives a Hilbert space, Riesz represents bounded linear functionals, bounded operators carry the operator norm, and Hilbert-space adjoints exist with $\langle Tx,y\rangle=\langle x,T^*y\rangle$; the inner product is linear in its first variable and conjugate-linear in its second ([[thm-completion-of-an-inner-product-space-is-hilbert]], [[def-hilbert-space]], [[def-real-and-complex-inner-product-space]], [[def-space-of-bounded-linear-operators]], [[def-operator-norm]], [[thm-riesz-representation-for-hilbert-space]], [[def-hilbert-space-adjoint]]).

[F4] The weak-star topology is the initial topology of point evaluations; AC gives the ultrafilter lemma ([[thm-ultrafilter-lemma]]), which supplies the compactness input for Banach-Alaoglu, and a countable norm-dense test family metrizes bounded weak-star sets ([[def-weak-star-topology]], [[thm-banach-alaoglu]], [[def-separable-space]]).

[F5] A $G_\delta$ subspace of a complete metric space is completely metrizable under Countable Choice, and for completely metrizable spaces second countability and separability agree under Countable Choice ([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]], [[prop-polish-space-countability-conventions-agree]], [[def-polish-space]]).

[F6] The minimal unitization is a unital C*-algebra containing $A$ as an ideal of codimension one; the quotient character $\epsilon(a+\lambda1)=\lambda$ is its augmentation ([[thm-minimal-c-star-unitization]]).

[F7] Under AC, irreducible strongly continuous unitary representations of a topological group have scalar commutant ([[def-topological-group]], [[def-strongly-continuous-unitary-representation]], [[thm-schurs-lemma-for-unitary-representations]]). Every closed invariant subspace of a *-representation is reducing: its orthogonal projection exists by the closed-subspace decomposition theorem, which assumes Countable Choice ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F8] A commutative unital C*-algebra is isomorphic to continuous functions on its character space; the complex Hahn-Banach theorem extends a bounded functional with its norm, and a nonempty compact convex set in a locally convex Hausdorff space has an extreme point under AC ([[thm-commutative-gelfand-naimark]], [[thm-complex-hahn-banach-norm-preserving-extension]], [[thm-krein-milman-existence-of-extreme-points]]).

## Proof

**Given:** AC, a complex C*-algebra $A$, and a positive bounded functional $\phi$ with $\|\phi\|=1$.

[F1] Algebraic positivity is the cone $\{b^*b:b\in A\}$; positive calculus gives $\|a\|^2 1-a^*a\ge0$ in the unitization, conjugation preserves order, positive square roots exist, and *-homomorphisms of C*-algebras are contractive ([[def-c-star-algebra]], [[lem-c-star-positive-calculus-and-order-estimates]], [[thm-minimal-c-star-unitization]]).

[F2] Positive functionals are Hermitian, satisfy Cauchy-Schwarz, and obey $\|\theta\|=\sup\{\theta(b):0\le b\le1\}$. Closed two-sided ideals are self-adjoint, and $A$ has positive contractive approximate units ([[def-state-on-a-c-star-algebra]], [[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]]).

[F3] AC implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]). Under Countable Choice, completing a complex inner-product space gives a Hilbert space, Riesz represents bounded linear functionals, bounded operators carry the operator norm, and Hilbert-space adjoints exist with $\langle Tx,y\rangle=\langle x,T^*y\rangle$; the inner product is linear in its first variable and conjugate-linear in its second ([[thm-completion-of-an-inner-product-space-is-hilbert]], [[def-hilbert-space]], [[def-real-and-complex-inner-product-space]], [[def-space-of-bounded-linear-operators]], [[def-operator-norm]], [[thm-riesz-representation-for-hilbert-space]], [[def-hilbert-space-adjoint]]).

[F4] The weak-star topology is the initial topology of point evaluations; AC gives the ultrafilter lemma ([[thm-ultrafilter-lemma]]), which supplies the compactness input for Banach-Alaoglu, and a countable norm-dense test family metrizes bounded weak-star sets ([[def-weak-star-topology]], [[thm-banach-alaoglu]], [[def-separable-space]]).

[F5] A $G_\delta$ subspace of a complete metric space is completely metrizable under Countable Choice, and for completely metrizable spaces second countability and separability agree under Countable Choice ([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]], [[prop-polish-space-countability-conventions-agree]], [[def-polish-space]]).

[F6] The minimal unitization is a unital C*-algebra containing $A$ as an ideal of codimension one; the quotient character $\epsilon(a+\lambda1)=\lambda$ is its augmentation ([[thm-minimal-c-star-unitization]]).

[F7] Under AC, irreducible strongly continuous unitary representations of a topological group have scalar commutant ([[def-topological-group]], [[def-strongly-continuous-unitary-representation]], [[thm-schurs-lemma-for-unitary-representations]]). Every closed invariant subspace of a *-representation is reducing: its orthogonal projection exists by the closed-subspace decomposition theorem, which assumes Countable Choice ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F8] A commutative unital C*-algebra is isomorphic to continuous functions on its character space; the complex Hahn-Banach theorem extends a bounded functional with its norm, and a nonempty compact convex set in a locally convex Hausdorff space has an extreme point under AC ([[thm-commutative-gelfand-naimark]], [[thm-complex-hahn-banach-norm-preserving-extension]], [[thm-krein-milman-existence-of-extreme-points]]).



**Proof technique:** direct.

1.1 Define $L_\phi=\{a\in A:\phi(a^*a)=0\}$ and on $A/L_\phi$ set $\langle[a],[b]\rangle=\phi(b^*a)$, linear in the first variable. Positivity and Cauchy-Schwarz from [F2] make this a well-defined positive-definite inner product after quotienting by its null space; complete it to a Hilbert space $H_\phi$ using [F3]. [F2, F3]

1.2 For $c,a\in A$, positivity of $\|c\|^2 1-c^*c$ and conjugation order in [F1] give $\phi((ca)^*(ca))\le\|c\|^2\phi(a^*a)$. Thus $\pi_\phi(c)[a]=[ca]$ is well-defined and bounded with norm at most $\|c\|$; left multiplication gives $\pi_\phi(cd)=\pi_\phi(c)\pi_\phi(d)$, and $\langle\pi_\phi(c)[a],[b]\rangle=\phi(b^*ca)=\langle[a],\pi_\phi(c^*)[b]\rangle$ gives $\pi_\phi(c)^*=\pi_\phi(c^*)$ by [F3]. [F1, F3]

1.3 If $A$ is unital, take $\xi_\phi=[1]$; it is a unit cyclic vector, $\pi_\phi(1)=I$ makes the representation nondegenerate, and it yields the stated vector functional. If $A$ is nonunital, fix a positive contractive approximate unit $(e_\lambda)$. For every positive bounded functional $\theta$ on $A$, the norm formula [F2] and $e_\lambda b e_\lambda\le e_\lambda^2$ for $0\le b\le1$ give $\theta(e_\lambda^2)\to\|\theta\|$: for each $\varepsilon>0$ choose such a $b$ with $\theta(b)>\|\theta\|-\varepsilon$, use $e_\lambda b e_\lambda\to b$, and let $\varepsilon\downarrow0$; also $0\le e_\lambda^2\le e_\lambda\le1$ gives $\theta(e_\lambda)\to\|\theta\|$. In particular $\phi(e_\lambda),\phi(e_\lambda^2)\to1$. Define $\widetilde\phi(a+z1)=\phi(a)+z$ on the minimal unitization. For $x=a+z1\ge0$, each compression $e_\lambda x e_\lambda=e_\lambda a e_\lambda+z e_\lambda^2$ lies in $A^+$, and $\phi(e_\lambda a e_\lambda)+z\phi(e_\lambda^2)\to\phi(a)+z$; hence $\widetilde\phi$ is positive. As $\widetilde\phi(1)=1$, the positive-functional norm formula makes $\|\widetilde\phi\|=1$, so it is a state. In its GNS construction, the map $[a]_{\phi}\mapsto[a]_{\widetilde\phi}$ is an isometry from $A/L_\phi$ because the inner products agree. Moreover $\|[1]_{\widetilde\phi}-[e_\lambda]_{\widetilde\phi}\|^2=1-2\phi(e_\lambda)+\phi(e_\lambda^2)\to0$, so $[1]_{\widetilde\phi}$ lies in the closure of the image of $A/L_\phi$; then $[a+z1]_{\widetilde\phi}=\lim_\lambda[a+ze_\lambda]_{\widetilde\phi}$, and the image of $A/L_\phi$ is dense in the unitized GNS space. Thus this space is precisely the completion $H_\phi$ from steps 1.1-1.2, with the restricted representation agreeing with $\pi_\phi$. Its vector $\xi_\phi=[1]_{\widetilde\phi}$ is unit and cyclic for $A$, and $\phi(a)=\langle\pi_\phi(a)\xi_\phi,\xi_\phi\rangle$. Finally, $\pi_\phi(e_\lambda)\pi_\phi(a)\xi_\phi=[e_\lambda a]_{\phi}\to[a]_{\phi}=\pi_\phi(a)\xi_\phi$ on the dense cyclic span; since $\|\pi_\phi(e_\lambda)\|\le1$, this convergence extends to every vector in $H_\phi$, proving nondegeneracy. [F1, F2, F3, F6]

1.4 Let $B$ be a unital C*-algebra. Its normalized state space $S(B)$ is a weak-star closed subset of the dual unit ball: positivity and $\omega(1)=1$ are pointwise closed, and positive unital functionals have norm one by Cauchy-Schwarz and $x^*x\le\|x\|^2 1$. Banach-Alaoglu and AC make $S(B)$ compact. If $B$ is separable, choose a countable norm-dense family $(b_n)$ in $B$; the metric $d(\omega,\rho)=\sum_{n\ge1}2^{-n}\min(1,|\omega(b_n)-\rho(b_n)|)$ induces the weak-star topology on $S(B)$, since all states have norm one and approximation by the $b_n$ controls evaluation on every element of $B$. Hence $S(B)$ is compact metrizable; this metric is complete because every Cauchy sequence has a convergent subsequence by compactness and therefore converges to the same limit. [F1, F2, F4]

2.1 If $(\rho,K,\eta)$ is another cyclic nondegenerate representation with unit vector state $\phi$, the assignment $\pi_\phi(a)\xi_\phi\mapsto\rho(a)\eta$ preserves inner products because both give $\phi(b^*a)$ on cyclic vectors. It extends uniquely to a unitary intertwiner on the dense cyclic spans. In the nonunital case, for any nondegenerate representation $\sigma$, an approximate unit satisfies $\sigma(e_\lambda)\to I$ strongly: this holds on the dense span $\sigma(A)K$ since $e_\lambda a\to a$, and then on all vectors by $\|\sigma(e_\lambda)\|\le1$. Applying this to $\pi_\phi$ and $\rho$ gives $U\xi_\phi=\eta$. Thus the triple is unique up to exactly one unitary carrying cyclic vector to cyclic vector. [F1, F2, F3, F6, step 1.1, step 1.2, step 1.3]

2.2 If $A$ is separable, choose a countable norm-dense subset $D\subseteq A$. Contractivity of $\pi_\phi$ makes $\{\pi_\phi(a)\xi_\phi:a\in D\}$ dense in $\pi_\phi(A)\xi_\phi$, whose span is dense in $H_\phi$ by step 1.3; its countable rational-complex span is a countable dense subset of $H_\phi$. [F1, F3, step 1.3]

2.3 Let $\psi$ be a bounded positive functional with $0\le\psi\le\phi$. On cyclic vectors define $B_\psi(\pi_\phi(a)\xi_\phi,\pi_\phi(b)\xi_\phi)=\psi(b^*a)$. Cauchy-Schwarz and domination give $|B_\psi(v,w)|^2\le\psi(a^*a)\psi(b^*b)\le\|v\|^2\|w\|^2$, so this is a well-defined bounded positive sesquilinear form on the dense cyclic span and extends to $H_\phi$. [F2, F3, step 1.2, step 1.3]

2.4 If every positive contraction in $\pi_\phi(A)'$ is scalar, shifting and rescaling any self-adjoint member shows it is scalar, and taking real and imaginary parts gives $\pi_\phi(A)'=\mathbb C I$. A closed invariant subspace $M$ for a *-representation is reducing: if $v\in M^\perp$, $w\in M$, and $a\in A$, then $\langle\pi_\phi(a)v,w\rangle=\langle v,\pi_\phi(a^*)w\rangle=0$. By the orthogonal-decomposition theorem [F7], whose projection existence uses Countable Choice, the projection onto $M$ exists; reduction makes it commute with every $\pi_\phi(a)$, so scalarity forces that projection to be $0$ or $I$ and the representation is irreducible. Conversely, extend $\pi_\phi$ to a unital representation $\widetilde\pi_\phi$ of $B=A$ if unital and $B=A^+$ otherwise. The unitary group $U(B)$ with its norm topology is a topological group: multiplication is norm-continuous by submultiplicativity and inversion is $u\mapsto u^*$, which is isometric on unitaries. Contractivity of $\widetilde\pi_\phi$ gives $\|\widetilde\pi_\phi(u)\eta-\widetilde\pi_\phi(v)\eta\|\le\|u-v\|\,\|\eta\|$, so it is a strongly continuous unitary representation. Every self-adjoint contraction $h\in B$ is $(u+u^*)/2$ for $u=h+i(1-h^2)^{1/2}$, which is unitary since $h$ commutes with its positive square root; scaling self-adjoint elements and decomposing arbitrary elements into real and imaginary parts shows the unitaries linearly span $B$. Thus the commutant of $\widetilde\pi_\phi(U(B))$ equals $\pi_\phi(A)'$. Any closed subspace invariant under all these unitary images is invariant under their linear span $\widetilde\pi_\phi(B)$, hence under $\pi_\phi(A)$; therefore irreducibility of $\pi_\phi$ makes this unitary representation irreducible. Schur's lemma [F7] makes its commutant scalar. Hence $\pi_\phi$ is irreducible exactly when its commutant is scalar. [F1, F7, step 1.2]

2.5 Suppose $B$ is separable and fix a compatible metric $d$ on $S(B)$. For each $n\ge1$, the set of pairs $(\omega_0,\omega_1)$ with $d(\omega_0,\omega_1)\ge1/n$ is compact; the midpoint map is weak-star continuous because each evaluation of its value is the average of the two evaluations, so its image is compact and consists of nonextreme states. Conversely, if $\omega=t\alpha+(1-t)\beta$ with distinct states and $0<t<1$, choosing $0<\delta<\min(t,1-t)$ makes $\omega$ the midpoint of the distinct states $(t+\delta)\alpha+(1-t-\delta)\beta$ and $(t-\delta)\alpha+(1-t+\delta)\beta$. Thus the nonextreme states are exactly a countable union of compact sets, so the pure states form a $G_\delta$ subset of $S(B)$. [F4, step 1.4]

2.6 Let $a\in A$ be positive and nonzero, and put $B=A$ when unital and $B=A^+$ otherwise. The character of $C^*(1,a)$ at the maximal spectral value of $a$ is a state taking value $\|a\|$ at $a$, since positive calculus gives $\max\sigma(a)=\|a\|$. Extend it to a norm-one functional $F$ on $B$ by complex Hahn-Banach; $F(1)=1$. For self-adjoint $c$, $|1+itF(c)|\le\|1+itc\|$ for every real $t$, and $\|1+itc\|^2=\|1+t^2c^2\|\le1+t^2\|c\|^2$, so letting $t$ approach zero from both signs shows $F(c)$ is real. If $0\le c\le1$, then $|1-F(c)|=|F(1-c)|\le\|1-c\|\le1$, hence $F(c)\ge0$; scaling proves positivity. Since $F$ is positive and $F(1)=1$, the norm formula [F2] gives $\|F\|=1$, so it is a state norming $a$. The norm-attaining states form a nonempty compact face of $S(B)$ by step 1.4: every state has value at most $\|a\|$, so a convex combination reaches $\|a\|$ only when each endpoint does. Krein-Milman [F8] gives an extreme point of that face, hence a pure state $\omega$ of $B$ still satisfying $\omega(a)=\|a\|$. [F1, F2, F8, step 1.4]

3.1 For each $v$, Riesz represents the bounded linear functional $w\mapsto\overline{B_\psi(v,w)}$ by a unique vector $Tv$ with $B_\psi(v,w)=\langle Tv,w\rangle$. Uniqueness makes $T$ linear; polarization of the nonnegative quadratic form gives $T=T^*$, and $0\le B_\psi(v,v)\le\|v\|^2$ then gives $0\le T\le I$. For $v=\pi_\phi(a)\xi_\phi$, $w=\pi_\phi(b)\xi_\phi$, and $c\in A$, one has $\langle T\pi_\phi(c)v,w\rangle=\psi(b^*ca)=\langle\pi_\phi(c)Tv,w\rangle$; density implies $T\in\pi_\phi(A)'$. Finally, $\langle T\pi_\phi(a)\xi_\phi,\pi_\phi(e_\lambda)\xi_\phi\rangle=\psi(e_\lambda a)\to\psi(a)$, while $\pi_\phi(e_\lambda)\xi_\phi\to\xi_\phi$ by step 1.3; hence $\psi(a)=\langle T\pi_\phi(a)\xi_\phi,\xi_\phi\rangle=\langle\pi_\phi(a)T\xi_\phi,\xi_\phi\rangle$. In the unital case use $e=1$. [F2, F3, step 1.3, step 2.3]

3.2 The $G_\delta$ theorem [F5] makes the pure-state subspace of separable unital $B$ completely metrizable by step 2.5. It is second countable as a subspace of $S(B)$, so [F5] also makes it separable and therefore Polish. For nonunital separable $A$, a countable dense subset of $A$ together with rational-complex multiples of the unit gives a countable dense subset of its minimal unitization $B=A^+$. By step 1.3, restriction identifies $S(A)$ with the states $\omega\in S(B)$ for which $\|\omega|_A\|=1$, since any such restriction has the unique extension $a+z1\mapsto\omega(a)+z$. The augmentation $\epsilon$ is pure: if $\epsilon=t\omega_0+(1-t)\omega_1$ with $0<t<1$, then for every $x\in A=\ker\epsilon$, positivity gives $0=\epsilon(x^*x)=t\omega_0(x^*x)+(1-t)\omega_1(x^*x)$ and hence $\omega_j(x^*x)=0$; Cauchy-Schwarz [F2] implies $\omega_j(x)=0$, so $\omega_j(a+z1)=z=\epsilon(a+z1)$. A pure state $\omega$ of $B$ other than $\epsilon$ restricts to a state on $A$: if $s=\|\omega|_A\|$ lay strictly between $0$ and $1$, then $\omega=s\widetilde{(\omega|_A/s)}+(1-s)\epsilon$ would be a nontrivial convex decomposition, and $s=0$ would give $\omega=\epsilon$. Conversely, if $\phi$ is pure on $A$ and $\widetilde\phi=t\omega_0+(1-t)\omega_1$ on $B$, the restrictions have norms at most one; the equality $1=\|\phi\|\le t\|\omega_0|_A\|+(1-t)\|\omega_1|_A\|\le1$ forces each restriction to be a state, and purity plus unique unitization extension forces $\omega_0=\omega_1=\widetilde\phi$. Restriction and unique extension are weak-star continuous inverses because their evaluations are $\omega(a)$ and $\phi(a)+z$, respectively. Thus restriction identifies the pure-state space of $A$ homeomorphically with $P(B)\setminus\{\epsilon\}$. This set is $G_\delta$ in $S(B)$: $P(B)$ is $G_\delta$ by step 2.5 and the complement of the closed singleton $\{\epsilon\}$ is open, hence $G_\delta$ in the metric space $S(B)$. The pure-state space of $A$ is therefore Polish in its weak-star topology. [F2, F5, F6, step 1.3, step 2.5]

4.1 Conversely, for $T\in\pi_\phi(A)'$ with $0\le T\le I$, set $\psi_T(a)=\langle\pi_\phi(a)T\xi_\phi,\xi_\phi\rangle$. This is bounded since $|\psi_T(a)|\le\|a\|\,\|T\xi_\phi\|\,\|\xi_\phi\|$. Then $\psi_T(a^*a)=\langle T\pi_\phi(a)\xi_\phi,\pi_\phi(a)\xi_\phi\rangle\ge0$, and $(\phi-\psi_T)(a^*a)=\langle(I-T)\pi_\phi(a)\xi_\phi,\pi_\phi(a)\xi_\phi\rangle\ge0$. The same formula on pairs of cyclic vectors recovers $B_\psi$ from $\psi_T$, so the correspondence is injective; moreover $\psi_T\le\psi_S$ exactly when the quadratic form of $S-T$ is nonnegative on the dense cyclic span, equivalently $T\le S$. Thus it is an order isomorphism. [F1, F2, F3, step 1.3, step 2.3, step 3.1]

5.1 For positive $\psi\le\phi$, put $\theta=\phi-\psi$. Along the same approximate unit, step 1.3 gives $\|\psi\|=\lim_\lambda\psi(e_\lambda)$, $\|\theta\|=\lim_\lambda\theta(e_\lambda)$ and $\|\phi\|=\lim_\lambda\phi(e_\lambda)$, so $\|\phi\|=\|\psi\|+\|\theta\|$ (in the unital case take $e=1$). If $\phi$ is pure, the endpoints $\psi=0$ and $\psi=\phi$ are scalar multiples of $\phi$; otherwise both norms are positive and normalization gives $\phi=\|\psi\|(\psi/\|\psi\|)+(1-\|\psi\|)(\theta/\|\theta\|)$, so purity forces $\psi=\|\psi\|\phi$. Conversely, if $\phi=t\phi_0+(1-t)\phi_1$ is a nontrivial convex decomposition into distinct states, then $t\phi_0\le\phi$ and this subfunctional cannot be proportional to $\phi$ (proportionality would force $\phi_0=\phi_1=\phi$). By steps 2.3, 3.1, and 4.1, the order correspondence identifies scalarity of all dominated positive subfunctionals with scalarity of all positive contractions in $\pi_\phi(A)'$. Combined with step 2.4, this is equivalent to irreducibility of the GNS representation. [F2, step 1.3, step 2.3, step 3.1, step 4.1, step 2.4]

6.1 If $A$ is nonunital, then $\omega(a)>0$ shows $\omega\ne\epsilon$, and step 3.2 makes its restriction a pure state of $A$; if $A$ is unital take $\phi=\omega$. In either case $\phi(a)=\|a\|$. For a nonzero closed two-sided ideal $J$, choose $x\in J\setminus\{0\}$. By [F2], $J$ is self-adjoint, so $a=x^*x\in J$; the C*-identity gives $a\ne0$. The pure norming state from step 2.6 has $\langle\pi_\phi(a)\xi_\phi,\xi_\phi\rangle=\|a\|>0$, so $\pi_\phi(a)\ne0$. Its GNS representation is irreducible by steps 2.4 and 5.1, and its kernel therefore does not contain $J$. [F1, F2, step 2.4, step 5.1, step 3.2, step 2.6] ∎
