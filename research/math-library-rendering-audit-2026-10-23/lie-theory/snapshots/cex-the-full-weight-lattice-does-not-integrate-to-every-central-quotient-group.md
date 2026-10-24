---
id: cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group
kind: counterexample
title: The full weight lattice need not integrate through a central quotient
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-su-two-to-so-three-as-a-covering-homomorphism, ex-symmetric-powers-as-highest-weight-modules, def-special-linear-lie-algebra-sl-two, def-fundamental-weights, def-weight-and-weight-space-of-a-lie-algebra-representation, def-representation-of-a-lie-algebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8, Theorems 5.107 and 5.110"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.1 and Exercises 2.8–2.10"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement refuted

Assume the Axiom of Choice. Every dominant weight in the weight lattice of a
compact semisimple group integrates to every compact group form with the given
Lie algebra.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $SU(2)=\{g\in GL_2(\mathbb C):g^*g=I,\ \det g=1\}$, the group $SO(3)$ with the surjective two-sheeted covering homomorphism $\pi:SU(2)\to SO(3)$ of kernel $\{\pm I\}$ ([[ex-su-two-to-so-three-as-a-covering-homomorphism]]), the maximal torus $T=\{\operatorname{diag}(z,z^{-1}):|z|=1\}$ of $SU(2)$ and the element $-I=\operatorname{diag}(-1,-1)\in T$, the fundamental weight $\omega_1$ of $\mathfrak{sl}_2$ ([[def-fundamental-weights]], [[def-special-linear-lie-algebra-sl-two]]), and for each $m\ge0$ the space $W_m$ of homogeneous polynomials of degree $m$ in the variables $x_1,x_2$, with the action $(g\cdot p)(x)=p(g^{-1}x)$.

[A1] The Axiom of Choice is assumed; it enters through the root-space and highest-weight theory used below ([[def-axiom-of-choice]]).

[L1] The covering $\pi$ is surjective with kernel $\{\pm I\}$, so the fibers of $\pi$ are the two-element sets $\{g,-g\}$ and $SO(3)\cong SU(2)/\{\pm I\}$ ([[ex-su-two-to-so-three-as-a-covering-homomorphism]]).

[L2] The polynomial action is a representation of $SU(2)$: $(gh)\cdot p=p\circ(gh)^{-1}=p\circ h^{-1}\circ g^{-1}=g\cdot(h\cdot p)$, and the identity acts trivially; the differential at the identity makes $W_m$ the $\mathfrak{sl}_2(\mathbb C)$-module $\operatorname{Sym}^m(\mathbb C^2)$, which is irreducible of highest weight $m\omega_1$ for the chosen positive system ([[def-representation-of-a-lie-algebra]], [[ex-symmetric-powers-as-highest-weight-modules]]).

[L3] The torus element $\operatorname{diag}(z,z^{-1})$ acts on the monomial $x_1^{m-k}x_2^k$ by $z^{2k-m}$, so the weights of $W_m$ restricted to $T$ are the integers $m,m-2,\dots,-m$; each of the weights $m\omega_1,(m-2)\omega_1,\dots,-m\omega_1$ lies in the weight lattice $\mathbb Z\omega_1$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-fundamental-weights]]).

## Counterexample

**Proof technique:** direct.

1.1 The element $-I$ acts on a homogeneous polynomial of degree $m$ by $(-I)\cdot p(x)=p((-I)^{-1}x)=p(-x)=(-1)^mp(x)$, so the operator $\rho_m(-I)$ on $W_m$ is the scalar $(-1)^m$. [A1, L2, given]

2.1 A homomorphism $\rho:SU(2)\to GL(V)$ factors as $\bar\rho\circ\pi$ for a homomorphism $\bar\rho:SO(3)\to GL(V)$ if and only if $\rho(-I)=\operatorname{id}_V$: if $\rho=\bar\rho\circ\pi$ then $\pi(-I)=I$ gives $\rho(-I)=\operatorname{id}$, while conversely $\rho(-g)=\rho(g)\rho(-I)=\rho(g)$ whenever $\rho(-I)=\operatorname{id}$, so $\rho$ is constant on the fibers $\{g,-g\}$ of the surjective $\pi$ from [L1] and descends uniquely to the quotient $SO(3)\cong SU(2)/\{\pm I\}$. [L1, step 1.1]

3.1 If $m$ is odd, then $\rho_m(-I)=-\operatorname{id}_{W_m}\ne\operatorname{id}$ by step 1.1, so by step 2.1 the representation $W_m$ of $SU(2)$ does not descend to $SO(3)$; but its highest weight $m\omega_1$ is dominant integral and lies in the weight lattice by [L2] and [L3], so it is a dominant weight of the abstract weight lattice that does not integrate to the group form $SO(3)$. [L2, L3, step 1.1, step 2.1]

4.1 If $m$ is even, then $\rho_m(-I)=\operatorname{id}$ by step 1.1 and step 2.1 makes $W_m$ descend to $SO(3)$; in particular the highest-weight-one module $W_1=\mathbb C^2$ integrates to $SU(2)$ but not to $SO(3)$, whereas the even highest weights do descend. [step 1.1, step 2.1, step 3.1]

5.1 The witness $(SU(2),SO(3),W_1)$ shows that the dominant weight $\omega_1$ of the weight lattice integrates to $SU(2)$ but not to the compact group form $SO(3)$ with the same Lie algebra, refuting the statement; the failed conclusion is that every dominant weight integrates to every group form. [step 3.1, step 4.1] ∎
