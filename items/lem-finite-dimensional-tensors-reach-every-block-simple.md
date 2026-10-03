---
id: lem-finite-dimensional-tensors-reach-every-block-simple
kind: lemma
title: Finite-dimensional tensoring reaches every simple of a linkage class
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- def-integral-dominant-and-strictly-dominant-weights
- def-truncated-category-o-at-a-finite-weight-ideal
- def-verma-module
- def-weyl-vector-rho-for-a-chosen-positive-system
- def-weight-and-weight-space-of-a-lie-algebra-representation
- lem-block-projection-preserves-projectives
- lem-dominant-weights-are-maxima-of-their-weyl-orbits
- lem-finite-semisimple-pbw-and-highest-weight-construction
- lem-maximal-verma-is-projective-in-a-finite-truncation
- lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective
- prop-highest-weight-of-the-dual-representation
- thm-central-character-summands-split-into-linkage-blocks
- thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
- thm-simple-objects-of-category-o-are-highest-weight-modules
- thm-universal-property-of-verma-modules
- def-integral-weyl-group-of-a-weight
- thm-verma-module-has-a-unique-simple-quotient
- def-partial-order-on-weights
- lem-finite-weyl-positive-roots-and-simple-reflections
- lem-finite-weyl-closed-chambers-and-stabilizers
- thm-of-archimedean
proof_strategy: construct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Corollary
      16.6(i) and its proof
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §16.3, Corollary 16.6(i) with proof (tensoring a dominant Verma by L(N
      rho) reaches every simple), printed pp. 87-88 (full text read at harvest)
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 8, Lemma 4.10 and proof
      of Theorem 4.3
    url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
    locator: §4, Lemma 4.10 and the proof of Theorem 4.3, printed pp. 7-8 (existence
      of a projective quotient towards each simple; full text read at harvest)
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $C$ be a linkage class and let $\mu\in C$ be any weight, including a nonintegral or nonreal weight. Choose a sufficiently large nonnegative integer $N$ as follows. In the simple-root basis write $c_w=(\mu+\rho)-w(\mu+\rho)$ and $d_w=\rho-w\rho$. For every $w\ne1$, choose an index $j(w)$ with $(d_w)_{j(w)}>0$ and require $\operatorname{Re}(c_w)_{j(w)}+N(d_w)_{j(w)}>0$; such an $N$ exists because $W$ is finite and $d_w\in Q^+\setminus\{0\}$. Put $\lambda=\mu+N\rho$, $E=L(N\rho)$. Then:

1. $E$ is finite-dimensional and $\mathfrak h$-semisimple, $E^*\cong E$, and $\lambda$ is maximal for the root order in its integral-reflection linkage class $C_\lambda=W_\lambda\mathbin\cdot\lambda$;
2. $M(\lambda)$ is projective in $\mathcal O_{C_\lambda}$ and in $\mathcal O$, so $E\otimes M(\lambda)$ is projective in $\mathcal O$;
3. $\operatorname{Hom}_{\mathcal O}(E\otimes M(\lambda),L(\mu))\ne0$. Thus $\operatorname{pr}_C(E\otimes M(\lambda))$ is a projective object of $\mathcal O_C$ mapping onto $L(\mu)$.

The construction does not assert that $\lambda$ is integral or that $W_\lambda=W$; it preserves arbitrary starting weights.

## Facts & Assumptions

**Given:** The Axiom of Choice, a linkage class $C$ with $\mu\in C$, and the construction $\lambda=\mu+N\rho$, $E=L(N\rho)$.

[F1] The simple roots are a basis, $W$ is finite, and each simple reflection permutes the positive roots other than its own simple root. Thus $s_i\rho=\rho-\alpha_i$ and $\langle\rho,\alpha_i^\vee\rangle=1$, while for a positive coroot $\beta^\vee=\sum_i m_i\alpha_i^\vee$ its pairing with $\rho$ is the positive integer $\sum_i m_i$. The regular closed-chamber stabilizer is trivial. For the dominant integral weight $\rho$, one has $\rho-w\rho\in Q^+$, and it is nonzero for $w\ne1$. ([[lem-finite-weyl-positive-roots-and-simple-reflections]], [[lem-finite-weyl-closed-chambers-and-stabilizers]], [[lem-dominant-weights-are-maxima-of-their-weyl-orbits]], [[def-weyl-vector-rho-for-a-chosen-positive-system]], [[thm-of-archimedean]])

[F2] The finite-dimensional simple modules are the $L(\eta)$ for dominant integral $\eta$, and the dual of $L(\eta)$ is $L(-w_0\eta)$; since $w_0\rho=-\rho$ one has $L(N\rho)^*=L(N\rho)$, and $L(N\rho)$ is finite-dimensional with weight-space decomposition ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[prop-highest-weight-of-the-dual-representation]], [[lem-finite-semisimple-pbw-and-highest-weight-construction]]).

[F3] The root order is defined by nonnegative integer simple-root coordinates of the difference. An integral-reflection linkage class $C_\lambda=W_\lambda\cdot\lambda$ is contained in the finite full dot orbit $W\cdot\lambda$ and is a finite lower ideal of itself. ([[def-partial-order-on-weights]], [[def-integral-weyl-group-of-a-weight]], [[def-truncated-category-o-at-a-finite-weight-ideal]])

[F4] If $\lambda$ is maximal in the finite ideal $C_\lambda$, then $M(\lambda)$ is projective in $\mathcal O_{C_\lambda}$; an object of $\mathcal O_C$ that is projective in the full subcategory $\mathcal O_C$ is projective in $\mathcal O$ ([[lem-maximal-verma-is-projective-in-a-finite-truncation]], [[lem-block-projection-preserves-projectives]], [[thm-central-character-summands-split-into-linkage-blocks]], [[thm-verma-module-has-a-unique-simple-quotient]]).

[F5] Tensoring a projective of $\mathcal O$ with the finite-dimensional $\mathfrak h$-semisimple module $E$ gives a projective of $\mathcal O$ ([[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]]).

[F6] The tensor-Hom adjunction and the universal property identify $\operatorname{Hom}_{\mathcal O}(E\otimes M(\lambda),L(\mu))$ with the $\mathfrak n^+$-fixed vectors of weight $\lambda$ in $E^*\otimes L(\mu)$ ([[thm-universal-property-of-verma-modules]], [[def-verma-module]]).

[F7] For $L(\mu)\in\mathcal O_C$ and $P\in\mathcal O$ one has $\operatorname{Hom}_{\mathcal O}(\operatorname{pr}_CP,L(\mu))\cong\operatorname{Hom}_{\mathcal O}(P,L(\mu))$; a nonzero morphism into a simple object is an epimorphism ([[thm-central-character-summands-split-into-linkage-blocks]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]]).

## Proof

**Proof technique:** constructive: shift $\mu$ to a maximal weight of a linkage class, tensor the projective Verma with the self-dual module $L(N\rho)$, and project to the block of $\mu$.

1.1 Choose the finite bound. Since a simple reflection reverses only $\alpha_i$ among the positive roots, their half-sum satisfies $\rho-s_i\rho=\alpha_i$, giving the simple coroot pairings one. Thus $\rho$ is regular dominant integral. By [F1], $d_w=\rho-w\rho\in Q^+\setminus\{0\}$ for $w\ne1$; take the first positive coordinate in the fixed finite simple-root enumeration. The finitely many real numbers $-\operatorname{Re}(c_w)_{j(w)}/(d_w)_{j(w)}$ have an upper bound, so choose an integer $N\ge0$ strictly larger than all of them. For rank zero $W=\{1\}$ and there are no restrictions; use $N=0$. With $\lambda=\mu+N\rho$, the identity $\lambda-w\cdot\lambda=c_w+Nd_w$ has positive real part at the selected coordinate for each $w\ne1$. Therefore $w\cdot\lambda-\lambda$ cannot have all nonnegative integer simple-root coordinates; if that coordinate is nonreal it is not even in the real root lattice, and if real it is negative. No distinct dot conjugate lies above $\lambda$. By [F3] this makes $\lambda$ maximal in $C_\lambda$, without claiming it is a greatest weight. [F1, F3, given, algebra]

2.1 The auxiliary tensor. The simple pairings $\langle N\rho,\alpha_i^\vee\rangle=N$ make $N\rho$ dominant integral, so $E=L(N\rho)$ is finite-dimensional and $\mathfrak h$-semisimple by [F2]. Since $w_0$ reverses the positive roots, $w_0\rho=-\rho$, and the dual-highest-weight formula gives $E^*\cong L(-w_0N\rho)=E$. This argument concerns $N\rho$ only and imposes no integrality on $\mu$ or $\lambda$. [F1, F2, step 1.1, algebra]

3.1 Projectivity in the actual block. The Verma $M(\lambda)$ is indecomposable: in a direct-sum decomposition, its one-dimensional highest weight space lies in exactly one summand, and its highest vector generates the whole Verma, so all other summands vanish. The block decomposition in [F4] consequently places $M(\lambda)$ entirely in the block containing its simple quotient $L(\lambda)$, namely $C_\lambda$. This class is a finite ideal of itself by [F3], and step 1.1 makes $\lambda$ maximal there. Apply [F4] to obtain projectivity in $\mathcal O_{C_\lambda}$; the exact block-projection adjunction of [F4] makes it projective in $\mathcal O$. Step 2.1 and [F5] then make $E\otimes M(\lambda)$ projective in $\mathcal O$. [F2, F3, F4, F5, step 1.1, step 2.1]

3.2 The product of a highest-weight vector $e\in E^*=E$ of weight $N\rho$ and a highest-weight vector $v\in L(\mu)$ of weight $\mu$ is nonzero of weight $N\rho+\mu=\lambda$ and is annihilated by $\mathfrak n^+$; by [F6] it is the image of a nonzero element of $\operatorname{Hom}_{\mathcal O}(E\otimes M(\lambda),L(\mu))$, so that Hom-space is nonzero. [F2, F6, step 1.1, step 2.1]

4.1 By [F7] there is a natural isomorphism $\operatorname{Hom}_{\mathcal O}(\operatorname{pr}_C(E\otimes M(\lambda)),L(\mu))\cong\operatorname{Hom}_{\mathcal O}(E\otimes M(\lambda),L(\mu))\ne0$, since $L(\mu)\in\mathcal O_C$. The object $\operatorname{pr}_C(E\otimes M(\lambda))$ lies in $\mathcal O_C$ and is projective in $\mathcal O$ by step 3.1 and the first part of [F4]; a nonzero morphism from it to the simple object $L(\mu)$ is an epimorphism, so $\mathcal O_C$ contains a projective object mapping onto $L(\mu)$, as claimed. [F4, F7, step 3.1, step 3.2] ∎