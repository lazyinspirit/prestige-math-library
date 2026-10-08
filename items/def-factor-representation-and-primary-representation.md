---
id: def-factor-representation-and-primary-representation
kind: definition
title: Factor (primary) representations
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-von-neumann-algebra-and-commutant
  - def-strongly-continuous-unitary-representation
  - thm-schurs-lemma-for-unitary-representations
  - def-hilbert-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - lem-counting-measure-on-a-discrete-group
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 0
axiom_use: "AC supplies the Hilbert adjoints used in the concrete von Neumann algebra setup and Schur's lemma, and is assumed by the L²-completeness supplier used to realize ℓ²(Γ) as a Hilbert space. The group and conjugacy calculations use no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Introduction, printed pp. 12–13 (factoriality as scalar center of π(G)″); Chapter 6, §6.A.b, Definition 6.A.7 and Example 6.A.8, printed pp. 176–177 (factorial/primary terminology and irreducible case); Chapter 7, §7.A, Proposition 7.A.1, printed pp. 213–214 (ICC regular factor); Appendix A.E, Definition A.E.3, printed p. 412 (ICC); Appendix A.K, Definition A.K.2, printed p. 422 (a von Neumann algebra is a factor exactly when its center is scalar)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---


## Definition

Assume AC ([[def-axiom-of-choice]]). Let $G$ be a topological group and let $(\pi,H)$ be a strongly continuous unitary representation on a nonzero Hilbert space $H$ ([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]). Set $M:=\pi(G)''\subseteq\mathcal B(H)$, the concrete double commutant defined in [[def-von-neumann-algebra-and-commutant]], and set $Z(M):=M\cap M'$. The representation $\pi$ is **factorial**, or **primary**, when $Z(M)=\mathbb C I_H$. It is a **factor representation** when $M$ is a factor, meaning $M\cap M'=\mathbb C I_H$. The commutants satisfy $\pi(G)'=(\pi(G)'')'$ by their definitions, and irreducibility implies factoriality. The converse fails: for every nontrivial ICC discrete group $\Gamma$ (meaning every nonidentity conjugacy class is infinite), its left regular representation is factorial but not irreducible. Such groups exist, for example the finitary symmetric group on a countably infinite set.

## Facts & Assumptions

**Given:** AC; a topological group $G$; a strongly continuous unitary representation $\pi$ on a nonzero Hilbert space $H$; and, for the counterexample, a nontrivial ICC discrete group $\Gamma$.

[F1] A concrete von Neumann algebra is a unital weak-operator-closed $*$-subalgebra of $\mathcal B(H)$; commutants and double commutants are taken inside $\mathcal B(H)$, and commutants of self-adjoint sets are weak-operator-closed unital $*$-subalgebras ([[def-von-neumann-algebra-and-commutant]]).

[F2] A unitary representation is a group homomorphism into the bijective complex-linear isometries of $H$; irreducibility means there are no closed invariant subspaces other than $0$ and $H$ ([[def-strongly-continuous-unitary-representation]]).

[F3] Schur's lemma: every bounded self-intertwiner of an irreducible unitary representation is scalar ([[thm-schurs-lemma-for-unitary-representations]]).

[F4] For an arbitrary index set $I$, $\ell^2(I,\mathbb C)$ is the inner-product space of square-summable families, with standard coordinate vectors $e_i$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F5] On a discrete group, counting measure is Haar and integration of nonnegative functions is the sum over the group; integrable complex functions also have the corresponding absolutely convergent sum ([[lem-counting-measure-on-a-discrete-group]]).

[F6] Under AC, complex $L^2$ for a Radon measure on a locally compact Hausdorff space is complete ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F7] Complex $L^2(X,\mu;\mathbb C)$ consists of measurable functions modulo almost-everywhere equality with finite integral of squared modulus ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[A1] AC is the choice-function axiom ([[def-axiom-of-choice]]); here its exact uses are inherited by the adjoint/Schur suppliers and by the $L^2$ completeness supplier.

## Proof

**Proof technique:** direct.

1.1 For a discrete group $\Gamma$, let $\#_\Gamma$ be counting measure. Every function on $\Gamma$ is measurable and a $\#_\Gamma$-null set is empty. By [F5], $\int_\Gamma |f|^2\,d\#_\Gamma=\sum_{\gamma\in\Gamma}|f(\gamma)|^2$, so the identity on functions identifies $\ell^2(\Gamma,\mathbb C)$ isometrically with $L^2(\Gamma,\#_\Gamma;\mathbb C)$; the pairings agree as well, since [F4] makes $f\overline g$ absolutely summable for $f,g\in\ell^2$. Counting measure is Radon on the locally compact discrete space by [F5], so [F6] makes $\ell^2(\Gamma,\mathbb C)$ complete and hence a Hilbert space. Its standard vectors $\delta_\gamma$ form an orthonormal basis: given $f\in\ell^2$ and $\varepsilon>0$, the finite-subset supremum defining its square sum gives a finite $F\subseteq\Gamma$ with $\sum_{\gamma\notin F}|f(\gamma)|^2<\varepsilon^2$, and truncation to $F$ approximates $f$ within $\varepsilon$. [A1, F4, F5, F6, F7, construct]

1.2 Put $S=\pi(G)$. Since $\pi(g)^*=\pi(g^{-1})$ by [F2], $S$ is self-adjoint. By [F1], $S'$ is a weak-operator-closed unital $*$-subalgebra, and $M=S''=(S')'$ is also one; hence $M$ is a concrete von Neumann algebra. The commutant identity is algebraic: $S\subseteq S''$, so every operator in $(S'')'$ belongs to $S'$; conversely every $T\in S'$ commutes with every element of $S''=(S')'$, hence $T\in(S'')'$. Therefore $\pi(G)'=(\pi(G)'')'$. [A1, F1, F2, algebra]

2.1 If $\pi$ is irreducible, [F3] gives $\pi(G)'=\mathbb C I_H$. Step 1.2 identifies this with $M'$, so $Z(M)=M\cap M'=\mathbb C I_H$ because $I_H\in M$. Thus $\pi$ is factorial. [A1, F1, F3, step 1.2]

2.2 Let $\Gamma$ be nontrivial and ICC, and let $\lambda(g)f(h)=f(g^{-1}h)$ and $\rho(g)f(h)=f(hg)$ on the Hilbert space $\ell^2(\Gamma)$ of step 1.1. The left translations form a unitary representation, and each right translation is unitary; direct substitution shows $\lambda(a)\rho(g)=\rho(g)\lambda(a)$. Thus $\rho(g)\in\lambda(\Gamma)'=(\lambda(\Gamma)'')'$ by step 1.2. Put $M_\Gamma=\lambda(\Gamma)''$. For $z\in Z(M_\Gamma)$ let $\xi=z\delta_e$. Since $z$ commutes with both $\lambda(g)$ and $\rho(g^{-1})$, and $\rho(g^{-1})\delta_e=\delta_g$, we have $\lambda(g)\xi=z\delta_g=z\rho(g^{-1})\delta_e=\rho(g^{-1})\xi$. In coordinates this is $\xi(g^{-1}h)=\xi(hg^{-1})$; setting $h=gk$ shows $\xi(k)=\xi(gkg^{-1})$. Hence $\xi$ is constant on conjugacy classes. Every nonidentity conjugacy class is infinite, so square summability forces $\xi$ to vanish off $e$: $\xi=c\delta_e$. For every $h\in\Gamma$, $z\delta_h=z\lambda(h)\delta_e=\lambda(h)z\delta_e=c\delta_h$. The standard vectors span densely by step 1.1, hence $z=cI$ and $M_\Gamma$ is a factor. [F1, F4, F5, step 1.1, step 1.2, algebra]

3.1 Choose $g\ne e$ in $\Gamma$. The right translation $\rho(g)$ is a bounded self-intertwiner of $\lambda$ but is not scalar, since $\rho(g)\delta_e=\delta_{g^{-1}}\ne\delta_e$. If $\lambda$ were irreducible, [F3] would force this self-intertwiner to be scalar. Therefore $\lambda$ is not irreducible. To see the example class is nonempty, let $\Gamma$ be the finitary symmetric group on $\mathbb N$. For any nonidentity finite permutation $\sigma$, let $a$ be the least moved point; for each distinct $b$ outside the finite support, conjugation by the transposition $(a\ b)$ gives support $(\operatorname{supp}\sigma\setminus\{a\})\cup\{b\}$. These supports are distinct, so the conjugacy class is infinite. Thus this group is nontrivial ICC and supplies the promised example. [F3, step 2.2, construct] ∎

## Sources

Bekka–de la Harpe, Introduction, printed pp. 12–13, state factoriality as scalar center of $\pi(G)''$; Chapter 6 §6.A.b, Definition 6.A.7 and Example 6.A.8, printed pp. 176–177, record the factorial/primary terminology and irreducible case; Chapter 7 §7.A, Proposition 7.A.1, printed pp. 213–214, proves the ICC regular-factor statement; Appendix A.E, Definition A.E.3, printed p. 412, defines ICC. The item supplies the displayed center and regular-representation arguments locally.
