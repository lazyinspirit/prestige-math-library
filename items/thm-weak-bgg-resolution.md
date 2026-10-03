---
id: thm-weak-bgg-resolution
kind: theorem
title: Weak BGG resolution
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-weak-bgg-base-case-for-the-trivial-module, lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types, lem-central-character-cuts-of-a-typed-module-are-typed, thm-category-o-decomposes-by-generalized-central-character, cor-central-characters-are-dot-weyl-orbits, lem-finite-semisimple-cartan-root-and-string-structure, lem-finite-weyl-closed-chambers-and-stabilizers, prop-tensoring-with-a-finite-dimensional-module-preserves-category-o, def-integral-dominant-and-strictly-dominant-weights, def-bgg-category-o, def-axiom-of-choice, lem-weight-subsets-with-equal-root-sums-are-unique, lem-positive-root-pairings-of-a-dominant-integral-weight, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, lem-central-action-on-a-cyclic-highest-weight-module-is-scalar, def-verma-type-of-a-module-with-a-standard-filtration, lem-highest-weight-modules-have-weights-below-the-top-weight, lem-simple-reflections-preserve-weight-multiplicities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 5.3, pp. 35-36"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Introduction p. 335 and Sec. 7 (BGG Theorem 9.9)"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
    - title: "J. van Ekeren, Topics in representation theory (IMPA 2024), Sec. 29, pp. 122-124"
      url: "https://w3.impa.br/~jethro/2024-0/georep.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$ and let $\Pi_\lambda=L(\lambda)$ be the finite-dimensional simple module of highest weight $\lambda$. Put $B_k(\lambda)=\bigl(B_k^{\chi_0}\otimes\Pi_\lambda\bigr)^{\chi_\lambda}$, where $B_k^{\chi_0}$ is the base-case complex of [[lem-weak-bgg-base-case-for-the-trivial-module]] and $\chi_\lambda$ is the central character of $M(\lambda)$, the tensor product being over $\mathbb C$ with diagonal $\mathfrak g$-action and the superscript denoting the generalised central-character component of $\chi_\lambda$. Then

$$0\to B_{|\Phi^+|}(\lambda)\to\cdots\to B_1(\lambda)\to B_0(\lambda)\to\Pi_\lambda\to0$$

is a resolution of $\Pi_\lambda$ by objects of $\mathcal O$, and $\operatorname{Typ}B_k(\lambda)=\{w\circ\lambda:\ell(w)=k\}$, each weight occurring once.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$ with simple module $\Pi_\lambda=L(\lambda)$, its central character $\chi_\lambda$, and the base-case complex $B_\bullet^{\chi_0}$ of the trivial module.

[F1] $0\to B_{|\Phi^+|}^{\chi_0}\to\cdots\to B_1^{\chi_0}\to B_0^{\chi_0}\to\mathbb C\to0$ is an exact complex of objects of $\mathcal O$, and $\operatorname{Typ}B_k^{\chi_0}=\{w\circ0:\ell(w)=k\}$ with each weight occurring once ([[lem-weak-bgg-base-case-for-the-trivial-module]]).

[F2] For a finite-dimensional $\mathfrak g$-module $V$, the functor $-\otimes V$ (diagonal action) is exact and maps $\mathcal O$ into itself; and if $N$ is Verma-filtered with type $\{\psi_1,\dots,\psi_n\}$, then $N\otimes V$ is Verma-filtered with type the multiset union $\bigcup_{j=1}^n(\psi_j+\operatorname{Wt}V)$: filter $N$ by submodules with successive quotients $M(\psi_j)$ and tensor each short exact sequence with the exact functor $-\otimes V$, using $\operatorname{Typ}(M(\psi)\otimes V)=\psi+\operatorname{Wt}V$ ([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]], [[lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types]], [[def-verma-type-of-a-module-with-a-standard-filtration]]).

[F3] The projection $(-)_{\chi}$ onto the generalised central-character component is an exact functor on $\mathcal O$ ([[thm-category-o-decomposes-by-generalized-central-character]]); for Verma-filtered $N$ the component $N_\chi$ is Verma-filtered with $\operatorname{Typ}N_\chi=\{\psi\in\operatorname{Typ}N:\chi_\psi=\chi\}$; and $\chi_\nu=\chi_\lambda$ if and only if $\nu\in W\circ\lambda=\{u\circ\lambda:u\in W\}$ ([[lem-central-character-cuts-of-a-typed-module-are-typed]], [[cor-central-characters-are-dot-weyl-orbits]]).

[F4] $\Pi_\lambda$ has highest weight $\lambda$: $\lambda$ is a weight, $\lambda$ is the unique highest weight, every weight $\nu$ of $\Pi_\lambda$ satisfies $\nu\le\lambda$, i.e. $\lambda-\nu\in Q^+$; the weight multiset $\operatorname{Wt}\Pi_\lambda$ is $W$-stable, and for each $u\in W$ the weight $u\lambda$ occurs with multiplicity one ([[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[lem-simple-reflections-preserve-weight-multiplicities]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[F5] Every central element $z\in Z(U(\mathfrak g))$ acts on the cyclic highest-weight module $\Pi_\lambda$ by the scalar $\chi_\lambda(z)$; consequently $\Pi_\lambda$ is its own generalised central-character component $(\Pi_\lambda)_{\chi_\lambda}=\Pi_\lambda$ ([[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]], [[cor-central-characters-are-dot-weyl-orbits]]).

[F6] For $v\in W$ put $\Pi_v=\{\alpha\in\Phi^+:v^{-1}\alpha\in\Phi^-\}$. Then $\#\Pi_v=\ell(v)$, $v\circ0=-\sum_{\alpha\in\Pi_v}\alpha$ and $v\rho=\rho-\sum_{\alpha\in\Pi_v}\alpha$, so $v\rho-\rho=-\sum_{\alpha\in\Pi_v}\alpha$; a sum of positive roots is zero only if the index set is empty, hence $\Pi_v=\emptyset$ if and only if $v=1$ ([[lem-weight-subsets-with-equal-root-sums-are-unique]]).

[F7] The dot translates $w\circ\lambda$ for $w\in W$ are pairwise distinct: $w\circ\lambda=w'\circ\lambda$ forces $w=w'$ ([[lem-positive-root-pairings-of-a-dominant-integral-weight]]). The $\mathcal O$-objects $B_k(\lambda)$ and the ambient conventions are those of [[def-bgg-category-o]].

## Proof

1.1 Tensoring the exact complex of [F1] with the finite-dimensional module $\Pi_\lambda$ gives, by exactness of $-\otimes\Pi_\lambda$, an exact complex $0\to B_{|\Phi^+|}^{\chi_0}\otimes\Pi_\lambda\to\cdots\to B_1^{\chi_0}\otimes\Pi_\lambda\to B_0^{\chi_0}\otimes\Pi_\lambda\to\mathbb C\otimes\Pi_\lambda\to0$ whose terms lie in $\mathcal O$, with $\mathbb C\otimes\Pi_\lambda\cong\Pi_\lambda$ as $\mathfrak g$-modules. [F1, F2]

1.2 We classify the surviving pairs. Suppose $w\circ0+\nu=u\circ\lambda$ with $\ell(w)=k$ and $\nu\in\operatorname{Wt}\Pi_\lambda$. Since $w\circ0=w\rho-\rho$, this reads $\nu=u(\lambda+\rho)-w\rho$; applying $u^{-1}$ and putting $v=u^{-1}w$ gives $u^{-1}\nu=\lambda+\rho-v\rho=\lambda+\sum_{\alpha\in\Pi_v}\alpha$ by [F6]. Now $u^{-1}\nu\in\operatorname{Wt}\Pi_\lambda$ because the weight multiset is $W$-stable, so $\lambda-u^{-1}\nu\in Q^+$ by [F4]; on the other hand $\lambda-u^{-1}\nu=-\sum_{\alpha\in\Pi_v}\alpha$ lies in $-Q^+$. A nonnegative integral combination of positive roots lying in $-Q^+$ is zero, so $\sum_{\alpha\in\Pi_v}\alpha=0$, which forces $\Pi_v=\emptyset$ and hence $v=1$ by [F6]; thus $u=w$ and $\nu=w\lambda$. [F4, F6, algebra]

2.1 Applying the exact projection functor $(-)_{\chi_\lambda}$ to the complex of step 1.1 gives the exact complex $0\to B_{|\Phi^+|}(\lambda)\to\cdots\to B_1(\lambda)\to B_0(\lambda)\to(\Pi_\lambda)_{\chi_\lambda}\to0$ with all terms in $\mathcal O$, and $(\Pi_\lambda)_{\chi_\lambda}=\Pi_\lambda$ by [F5]. Hence the displayed sequence is a resolution of $\Pi_\lambda$ by objects of $\mathcal O$. [F3, F5, step 1.1]

3.1 By [F1] each $B_k^{\chi_0}$ is Verma-filtered with type $\{w\circ0:\ell(w)=k\}$ (each weight once), so [F2] gives that $B_k^{\chi_0}\otimes\Pi_\lambda$ is Verma-filtered with type the multiset $\{w\circ0+\nu:\ell(w)=k,\ \nu\in\operatorname{Wt}\Pi_\lambda\}$. Cutting by $\chi_\lambda$ and using [F3], the type of $B_k(\lambda)$ consists exactly of those $w\circ0+\nu$ with $\ell(w)=k$, $\nu\in\operatorname{Wt}\Pi_\lambda$ and $w\circ0+\nu\in W\circ\lambda$, the multiplicities being inherited from the multiset above. [F1, F2, F3, step 2.1]

4.1 Conversely, for every $w\in W$ of length $k$ the weight $w\lambda$ occurs in $\Pi_\lambda$ by [F4], and $w\circ0+w\lambda=w(\lambda+\rho)-\rho=w\circ\lambda$, so the pair $(w,w\lambda)$ is a surviving pair contributing the weight $w\circ\lambda$; by step 1.2 these are all the surviving pairs. For fixed $w$ the multiplicity of $w\circ\lambda$ in $\operatorname{Typ}B_k(\lambda)$ is therefore the product of the multiplicity of $w\circ0$ in $\operatorname{Typ}B_k^{\chi_0}$, which is $1$ by [F1], and the multiplicity of $w\lambda$ in $\operatorname{Wt}\Pi_\lambda$, which is $1$ by [F4]. Distinct $w$ give distinct weights by [F7]. Hence $\operatorname{Typ}B_k(\lambda)=\{w\circ\lambda:\ell(w)=k\}$ with each weight occurring once. [F1, F4, F7, step 3.1, step 1.2] ∎
