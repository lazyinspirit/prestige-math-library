---
status: draft
id: thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation
kind: theorem
title: Property (T) and isolation of the trivial representation in the Fell dual
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-kazhdans-property-t
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-topological-group
  - def-locally-compact-space
  - def-hausdorff-space
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - lem-fell-closure-is-characterized-by-weak-containment
  - def-weak-containment-of-unitary-representations
  - def-matrix-coefficient-of-a-unitary-representation
  - def-continuous-function-of-positive-type
  - def-hilbert-direct-sum-of-unitary-representations
  - lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors
  - def-full-group-c-star-algebra
  - def-c-star-algebra
  - def-nondegenerate-star-representation-of-a-banach-star-algebra
  - def-linear-combination-and-span
  - def-bounded-linear-operator
  - def-hilbert-space-adjoint
  - def-real-and-complex-inner-product-space
  - def-orthogonality-and-orthogonal-complement
  - lem-bounded-hilbert-operators-form-a-c-star-algebra
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - thm-weak-containment-is-equivalent-to-kernel-inclusion
  - lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It supplies the set-based unitary dual and Fell construction, representatives and Hilbert direct sums, the general C*-algebra separation lemma, and the LCH weak-containment-to-almost-invariant-vector interface. AC implies Countable Choice for the Hilbert-adjoint interface used by nondegenerate star-representations. No separability, weak-star density, or choice from a proper class of representations is used."
verification:
  precheck: pass
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Proposition 1.2.3, Lemma 1.2.4 and Theorem 1.2.5, printed pp. 37–40: property (T), isolation in arbitrary representation sets, and isolation of the trivial class in the unitary dual. Their converse proof uses a weak-star convex-density route; this item instead follows the owner-approved local central-projection route."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §§C.1 and C.5, and Appendix F, §§F.1–F.2: background on full group C*-algebras, Fell topology, and weak containment; the C.5.3/C.5.5 and F.2.8/F.2.9 convex-density/splitting route is not used here."
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019; complete author-hosted book)"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Lemma 1.7.6, printed pp. 27–28/PDF pp. 56–57; Proposition 1.10.3, printed p. 35/PDF p. 64; Lemma 3.6.4 and Proposition 3.6.5(1)–(3), printed pp. 104–105/PDF pp. 133–134, for the general irreducible-separation supplier used locally."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, printed pp. 3–5/PDF pp. 10–12: supplementary countable/discrete context; the proof here uses the full LCH definitions and supplier interfaces."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), and let $G$ be a locally
compact Hausdorff topological group ([[def-topological-group]],
[[def-locally-compact-space]], [[def-hausdorff-space]]). Then $G$ has Kazhdan's property (T)
([[def-kazhdans-property-t]]) if and only if the class $[1_G]$ of the trivial
representation $1_G(g)=I_{\mathbb C}$ is isolated in the Fell topology on the unitary dual $\widehat G$
([[def-fell-topology-on-the-unitary-dual]],
[[def-unitary-dual-of-a-locally-compact-group]]). Equivalently, $G$ has
property (T) if and only if for every set $R$ of unitary equivalence classes of
strongly continuous unitary representations of $G$
([[def-strongly-continuous-unitary-representation]]) with $\widehat G\subseteq R$,
such that every class in $R\setminus\{[1_G]\}$ has no nonzero invariant vector,
$[1_G]$ is isolated in $R$.

## Facts & Assumptions

**Given:** AC; a locally compact Hausdorff topological group $G$; its unitary dual $\widehat G$; the trivial representation $1_G$ and its integrated character $\chi$ on $A=C^*(G)$; an arbitrary set $R\supseteq\widehat G$ whose classes outside $[1_G]$ have no nonzero invariant vectors.

[F1] Property (T) means that every strongly continuous unitary representation with almost invariant vectors has a nonzero invariant vector ([[def-kazhdans-property-t]], [[def-almost-invariant-vectors-for-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).

[F2] The unitary dual is a set of irreducible strongly continuous unitary representations. If an irreducible representation has a nonzero invariant vector, its invariant subspace is all of its Hilbert space, so its class is $[1_G]$. Under the group/$C^*(G)$ correspondence, $1_G$ integrates to the nonzero character $\chi$ ([[def-unitary-dual-of-a-locally-compact-group]], [[def-strongly-continuous-unitary-representation]], [[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[def-full-group-c-star-algebra]]).

[F3] For $S\subseteq\widehat G$, $[1_G]\in\overline S$ in the Fell topology exactly when $1_G\prec\widehat{\bigoplus}_{\sigma\in S}\sigma$; equivalently, if $I_S=\bigcap_{\sigma\in S}\ker_{C^*(G)}\sigma$, then $[1_G]\in\overline S$ exactly when $I_S\subseteq\ker\chi$ ([[lem-fell-closure-is-characterized-by-weak-containment]]).

[F4] For an LCH group under AC, $1_G\prec\rho$ is equivalent to $\rho$ having almost invariant unit vectors. Also, weak containment implies kernel inclusion in the order $\ker\rho\subseteq\ker\pi$ when $\pi\prec\rho$ ([[lem-weak-containment-of-the-trivial-representation-and-almost-invariant-vectors]], [[thm-weak-containment-is-equivalent-to-kernel-inclusion]]).

[F5] In every complex $C^*$-algebra, the intersection of the kernels of all irreducible nondegenerate star-representations is zero ([[lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras]]).

[F6] Strongly continuous unitary representations of an LCH group correspond, up to unitary equivalence, to nondegenerate star-representations of $A=C^*(G)$; the correspondence preserves irreducibility and has uniqueness in both directions ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[def-full-group-c-star-algebra]]).

[F7] A nondegenerate star-representation is bounded and satisfies $\pi(a^*)=\pi(a)^*$; its kernel is a closed two-sided star-ideal ([[def-nondegenerate-star-representation-of-a-banach-star-algebra]], [[def-bounded-linear-operator]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]], [[def-c-star-algebra]]).

[F8] For a bounded operator $T$, the Hilbert adjoint satisfies $\langle Tx,y\rangle=\langle x,T^*y\rangle$; AC implies Countable Choice, which is the adjoint interface's hypothesis ([[def-hilbert-space-adjoint]], [[def-real-and-complex-inner-product-space]], [[def-orthogonality-and-orthogonal-complement]], [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F9] Fell neighborhoods are generated by finitely many diagonal coefficients, compact test sets, and positive tolerances. For $1_G$ the unit vector coefficient is the constant function $1$, and a neighborhood witness is a finite sum of coefficients from one class in $R$ ([[def-fell-topology-on-the-unitary-dual]], [[def-matrix-coefficient-of-a-unitary-representation]], [[def-continuous-function-of-positive-type]]).

[F10] Under AC, representatives of a set of equivalence classes can be selected and their strongly continuous representations have a strongly continuous Hilbert direct sum with componentwise action ([[def-axiom-of-choice]], [[def-hilbert-direct-sum-of-unitary-representations]]).

[F11] Nondegeneracy of a star-representation means that the closed linear span of its represented vectors is the whole Hilbert space ([[def-nondegenerate-star-representation-of-a-banach-star-algebra]], [[def-linear-combination-and-span]]).

## Proof

Bekka–de la Harpe–Valette prove the dual-isolation equivalence in Proposition 1.2.3, Lemma 1.2.4 and Theorem 1.2.5, printed pp. 37–40. The converse here uses the owner-approved central-projection route through the full group C*-algebra; the original weak-star convex-density route is not used.

**Proof technique:** first obtain the Fell-isolation implication, then use the isolated class to construct a central projection whose range carries the trivial representation.

1.1 Suppose $[1_G]$ is not isolated in $\widehat G$, and let $S=\widehat G\setminus\{[1_G]\}$. Then $[1_G]\in\overline S$, so [F3] gives $1_G\prec\Pi_S:=\widehat{\bigoplus}_{[\sigma]\in S}\sigma$, with representatives selected by AC; if $S$ is empty its closure is empty, so this case cannot occur. [F2, F3, F10, choose]

1.2 Now assume $[1_G]$ is isolated in $\widehat G$. Let $A=C^*(G)$, let $\chi$ be the character corresponding to $1_G$, and set $I=\bigcap_{[\sigma]\in\widehat G\setminus\{[1_G]\}}\ker\sigma$, with the empty intersection interpreted as $A$. By [F3], isolation is equivalent to $I\nsubseteq\ker\chi$. The set $I$ is a closed two-sided star-ideal as an intersection of representation kernels. [F3, F6, F7]

1.3 Assume property (T) and let $R\supseteq\widehat G$ satisfy the stated no-invariants condition outside $[1_G]$. If $[1_G]$ were not isolated in $R$, each Fell neighborhood $W(1_G;1,Q,\epsilon)$ would contain a class $[\sigma]\in R\setminus\{[1_G]\}$. By [F9], the constant coefficient $1$ is then approximated on $Q$ by a finite sum of coefficients of $\sigma$; embedding those vectors in its coordinate of $\Pi_R:=\widehat{\bigoplus}_{[\tau]\in R\setminus\{[1_G]\}}\tau$ gives the same finite-sum approximation in $\Pi_R$. Every diagonal coefficient of $1_G$ is a nonnegative constant, so scaling the approximating vectors by its square root (with the zero coefficient handled by the zero vector) gives $1_G\prec\Pi_R$. Representatives and the direct sum exist by [F10]. [F9, F10, choose]

2.1 Every summand of $\Pi_S$ is irreducible and nontrivial, so [F2] gives no nonzero invariant vector in any summand and hence none in the direct sum. By [F4], $\Pi_S$ has almost invariant vectors, contradicting property (T) in [F1]. Therefore property (T) implies isolation of $[1_G]$ in $\widehat G$. [F1, F2, F4, F10, step 1.1]

2.2 If $a\in I\cap\ker\chi$, then every irreducible nondegenerate star-representation of $A$ kills $a$: by [F6] each corresponds to an irreducible group representation, and [F2] says that a class with invariant vectors is trivial, while all other classes occur in the intersection defining $I$. Thus [F5] gives $a=0$, so $\chi|_I$ is injective. Since $I\nsubseteq\ker\chi$, choose $b\in I$ with $\chi(b)\ne0$ and set $p=b/\chi(b)\in I$; then $\chi(p)=1$. [F2, F5, F6, step 1.2, algebra]

3.1 The elements $p^*-p$ and $p^2-p$ lie in $I$ and have $\chi$-value zero, so injectivity of $\chi|_I$ gives $p^*=p=p^2$. For every $a\in A$, both $ap-\chi(a)p$ and $pa-\chi(a)p$ lie in $I$ and have $\chi$-value zero; hence $ap=pa=\chi(a)p$. Thus $p$ is a central projection. [F7, step 2.2, algebra]

4.1 Let $\rho$ be any strongly continuous unitary representation of $G$ with almost invariant vectors, and let $\pi$ be its nondegenerate representation of $A$ from [F6]. By [F4], $1_G\prec\rho$. If $P:=\pi(p)$ were zero, then $p\in\ker\pi$ and kernel inclusion in [F4] would give $p\in\ker\chi$, contradicting $\chi(p)=1$. Thus $P\ne0$. [F4, F6, step 3.1]

4.2 The operator $P$ is a bounded self-adjoint idempotent by [F7]. Its range $M=PH=\ker(I-P)$ is closed, and $\ker P=M^\perp$: if $x\in\ker P$ and $y=Pz$, then $\langle x,y\rangle=\langle x,Pz\rangle=\langle P^*x,z\rangle=0$; conversely, if $x\perp M$, then $\langle Px,z\rangle=\langle x,Pz\rangle=0$ for every $z$, so $Px=0$. Every $x\in H$ decomposes as $x=Px+(I-P)x$ with the two terms in $M$ and $M^\perp$. Centrality of $p$ makes $P$ commute with $\pi(A)$, so these two closed subspaces reduce $\pi(A)$. [F7, F8, step 3.1, algebra]

5.1 The restrictions $\pi_1=\pi|_M$ and $\pi_2=\pi|_{M^\perp}$ are nondegenerate: applying the commuting projections $P$ and $I-P$ to finite sums from the dense span of $\pi(A)H$ shows that $\pi(A)M$ spans $M$ and $\pi(A)M^\perp$ spans $M^\perp$. They are star-representations, and $\pi=\pi_1\oplus\pi_2$. [F6, F7, F11, step 4.2]

5.2 On $M$, for $y=Pz$ and $a\in A$, $\pi_1(a)y=\pi(a)\pi(p)z=\pi(ap)z=\chi(a)y$ by step 3.1. Thus $\pi_1$ is the amplification of $\chi$, which is the integrated form of the trivial group representation amplified on the nonzero space $M$. The direct sum of the group representations corresponding to $\pi_1$ and $\pi_2$ integrates to $\pi_1\oplus\pi_2=\pi$; uniqueness in [F6] identifies it with $\rho$. Hence $\rho$ has the nonzero fixed subspace $M$, proving that isolation of $[1_G]$ implies property (T). [F6, step 3.1, step 4.2]

6.1 By [F4], $\Pi_R$ has almost invariant vectors, so property (T) gives a nonzero invariant vector. But each summand indexed by $R\setminus\{[1_G]\}$ has no nonzero invariant vector by hypothesis, hence neither does the direct sum; contradiction. Conversely, the universal $R$ condition includes $R=\widehat G$, and every nontrivial irreducible class has no invariant vector by [F2], so it implies isolation in $\widehat G$ and then property (T) by step 5.2. This proves the stated equivalence. [F1, F2, F4, step 1.3, step 5.2] ∎
