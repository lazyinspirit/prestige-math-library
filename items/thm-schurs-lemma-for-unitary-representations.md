---
id: thm-schurs-lemma-for-unitary-representations
kind: theorem
title: Schur lemma for complex unitary representations
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strongly-continuous-unitary-representation, def-hilbert-space, def-real-and-complex-inner-product-space, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, thm-borel-functional-calculus-for-bounded-normal-operators, thm-support-and-uniqueness-of-the-spectral-measure, thm-continuous-functional-calculus-for-bounded-normal-operators, def-projection-valued-measure, def-self-adjoint-positive-unitary-and-normal-operator, thm-nth-roots-exist, def-axiom-of-choice]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem A.2.2, Appendix A, printed pp. 312–314"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, corrected 2025 notes, Proposition 3.4.17 and proof, §3.4, printed pp. 113–115"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
    - title: "Neeb, An Introduction to Unitary Representations of Lie Groups, §§3.4, 4.2 and 5.3"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/rep.pdf"
---

## Statement

Assume the Axiom of Choice (AC). Let $\pi$ on a nonzero complex Hilbert space
$H$ and $\rho$ on a nonzero complex Hilbert space $K$ be irreducible strongly
continuous unitary representations of the same topological group $G$. Every
bounded self-intertwiner of $\pi$ is a scalar multiple of $I_H$. If a nonzero
bounded intertwiner $T:H\to K$ satisfies $T\pi(g)=\rho(g)T$ for every $g\in G$,
then $\pi$ and $\rho$ are unitarily equivalent. Consequently, inequivalent
irreducible representations have no nonzero bounded intertwiner.

## Facts & Assumptions

[A1] A unitary representation is a group homomorphism into the group of
bijective complex-linear isometries ([[def-strongly-continuous-unitary-representation]]).

[A2] An irreducible representation acts on a nonzero Hilbert space and has no
closed invariant subspaces other than $\{0\}$ and the whole space
([[def-strongly-continuous-unitary-representation]]).

[A3] Under Countable Choice, bounded operators between Hilbert spaces have
Hilbert adjoints, and adjoints are unique, reverse products, and satisfy
$T^{**}=T$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A4] For a bounded normal operator $A$, its Borel calculus identifies
$\mathbf 1_U(A)$ with its spectral projection $E_A(U)$ for every Borel $U$
([[thm-borel-functional-calculus-for-bounded-normal-operators]]).

[A5] Every bounded operator commuting with $A$ and $A^*$ commutes with every
Borel-calculus operator $f(A)$ ([[thm-borel-functional-calculus-for-bounded-normal-operators]]).

[A6] A spectral PVM takes orthogonal-projection values and satisfies
$E(B\cap C)=E(B)E(C)$ ([[def-projection-valued-measure]]).

[A7] For a bounded normal operator on a nonzero complex Hilbert space, every
nonempty relatively open subset $U$ of its spectrum has $E_A(U)\ne0$
([[thm-support-and-uniqueness-of-the-spectral-measure]]).

[A8] The continuous functional calculus is a unital $*$-homomorphism sending
the coordinate function $z$ to $A$ ([[thm-continuous-functional-calculus-for-bounded-normal-operators]]).

[A9] Self-adjoint operators are normal ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A10] Every positive real number $c$ has a unique positive square root
([[thm-nth-roots-exist]]).

[A11] AC says that every family of nonempty sets has a choice function; applying
it to a countable family gives Countable Choice, and it is the stated hypothesis
of the spectral-calculus and support suppliers ([[def-axiom-of-choice]]).

[A12] The Hilbert pairing is linear in its first variable, conjugate-linear in
its second, and conjugate-symmetric ([[def-real-and-complex-inner-product-space]]).

[A13] A complex Hilbert space is complete in its induced norm
([[def-hilbert-space]]).

## Proof

**Given:** AC and the irreducible unitary representations $\pi$ on $H$ and
$\rho$ on $K$.

**Proof technique:** direct.

1.1 AC implies Countable Choice by restricting a choice function to any countable subfamily, so [A3] supplies adjoints. If $S$ is a self-intertwiner of $\pi$, apply its relation at $g^{-1}$ and take adjoints; [A1] and [A3] give $\pi(g)S^*=S^*\pi(g)$. If $T:H\to K$ intertwines $\pi$ with $\rho$, the same operation gives $\pi(g)T^*=T^*\rho(g)$, so $T^*$ intertwines in the reverse direction. [A1, A3, A11]

1.2 Let $A=A^*$ be a bounded self-intertwiner of $\pi$. By [A9], $A$ is normal. If $\sigma(A)=\{\lambda\}$, the coordinate function on this singleton equals the constant $\lambda$; [A8] then gives $A=z(A)=\lambda I_H$. Hence a nonscalar $A$ has two distinct spectral points $\lambda,\mu$. Choose disjoint nonempty relatively open neighborhoods $U,V$ of them in $\sigma(A)$. By [A7], $E_A(U)$ and $E_A(V)$ are nonzero; [A6] makes them orthogonal projections with $E_A(U)E_A(V)=E_A(\varnothing)=0$, so $P:=E_A(U)$ is nonzero and not $I_H$: if $P=I_H$, then $E_A(V)=P E_A(V)=0$, contrary to [A7]. [A6, A7, A8, A9, A11]

2.1 Since $A$ belongs to the commutant and is self-adjoint, each $\pi(g)$ commutes with both $A$ and $A^*$. By [A4] and [A5], it commutes with $P=\mathbf1_U(A)$. The range of the orthogonal projection $P$ is nonzero and proper, and is closed because $\operatorname{ran}P=\ker(I-P)$ for an idempotent bounded operator; commutation gives $\pi(g)\operatorname{ran}P\subseteq\operatorname{ran}P$, and applying the same inclusion to $g^{-1}$ gives equality. This contradicts [A2]. Therefore every bounded self-adjoint self-intertwiner of $\pi$ is scalar. [A2, A4, A5, A6, step 1.2]

3.1 If $S$ is any bounded self-intertwiner, then by step 1.1 its adjoint also intertwines. The operators $A=(S+S^*)/2$ and $B=(S-S^*)/(2i)$ are self-adjoint self-intertwiners, so step 2.1 makes both scalar. Since $S=A+iB$, $S$ is scalar. [step 1.1, step 2.1, algebra]

4.1 Let $T:H\to K$ be a nonzero bounded intertwiner. By step 1.1, $T^*$ intertwines in reverse, and $T^*T$ is a bounded self-intertwiner of $\pi$. Step 3.1 gives $T^*T=cI_H$ for some $c\in\mathbb C$. [step 1.1, step 3.1, algebra]

5.1 The adjoint identities make $T^*T$ self-adjoint, hence $c$ is real. For any $x$, $\|Tx\|^2=\langle Tx,Tx\rangle=\langle x,T^*Tx\rangle=\langle x,cx\rangle=c\|x\|^2$ by [A12]; since $T\ne0$, this forces $c>0$. Let $s=\sqrt c>0$ by [A10] and set $U=s^{-1}T$. Then $\|Ux\|^2=c^{-1}\|Tx\|^2=\|x\|^2$ for every $x$, so the nonnegative norms are equal, $U$ is an isometry, and it still intertwines. [A3, A10, A12, step 4.1]

6.1 The range of $U$ is closed: if $Ux_n$ converges, the isometry identity makes $(x_n)$ Cauchy, and completeness [A13] gives a limit whose image is the given range limit. Its range is nonzero because $H\ne\{0\}$ and $U$ is an isometry. The intertwining identity and surjectivity of each $\pi(g)$ give $\rho(g)\operatorname{ran}U=U\pi(g)H=\operatorname{ran}U$, so the range is invariant. By irreducibility of $\rho$ it is all of $K$; thus $U$ is a unitary intertwiner and $\pi,\rho$ are unitarily equivalent. [A1, A2, A13, step 5.1]

7.1 If the irreducible representations are inequivalent, a nonzero bounded intertwiner would produce the unitary equivalence in step 6.1, a contradiction. The self-intertwiner assertion is step 3.1. [step 3.1, step 6.1] ∎
