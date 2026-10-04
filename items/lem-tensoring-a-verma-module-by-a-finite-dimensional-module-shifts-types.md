---
id: lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types
kind: lemma
title: Tensoring a Verma module by a finite-dimensional module shifts the type
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-verma-type-of-a-module-with-a-standard-filtration, thm-pbw-model-of-a-verma-module, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, lem-finite-lie-triangularization-and-rank-one-complete-reducibility, def-axiom-of-choice, thm-universal-property-of-verma-modules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 5.1, Lemma 9.10, pp. 31-33"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "P. Etingof, Representations of Lie Groups (18.757, Fall 2023), Corollary 20.5(i), p. 101"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $V$ be a finite-dimensional $\mathfrak g$-module with weight multiset $\operatorname{Wt}V$ and let $\psi$ be a weight. Then $M(\psi)\otimes V$ is Verma-filtered with $\operatorname{Typ}(M(\psi)\otimes V)=\psi+\operatorname{Wt}V=\{\psi+\mu:\mu\in\operatorname{Wt}V\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a weight $\psi$, a finite-dimensional $\mathfrak g$-module $V$ with weight multiset $\operatorname{Wt}V$, and the Verma module $M(\psi)$.

[F1] Lie's theorem for the solvable algebra $\mathfrak b$: $V$ has a $\mathfrak b$-stable flag with one-dimensional quotients; choosing a basis $v_1,\dots,v_n$ adapted to the flag, each $v_k$ is a weight vector of some weight $\lambda_k\in\operatorname{Wt}V$ and $\mathfrak n^+v_k\subseteq\operatorname{span}(v_1,\dots,v_{k-1})$, because $\mathfrak n^+=[\mathfrak b,\mathfrak b]$ acts by zero on the one-dimensional quotients ([[lem-finite-lie-triangularization-and-rank-one-complete-reducibility]]).

[F2] The PBW model: $u\mapsto uv_\psi$ is a vector-space isomorphism $U(\mathfrak n^-)\xrightarrow{\sim}M(\psi)$, and $U(\mathfrak n^-)$ has a PBW basis with associated graded the polynomial algebra $S(\mathfrak n^-)$, a domain ([[thm-pbw-model-of-a-verma-module]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

[F3] Verma filtrations and their type are as in [[def-verma-type-of-a-module-with-a-standard-filtration]].

[F4] A singular vector of weight $\eta$ in a $\mathfrak g$-module determines a unique homomorphism from $M(\eta)$ sending its highest weight vector to that vector ([[thm-universal-property-of-verma-modules]]).

## Proof

1.1 Put $N_k:=U(\mathfrak g)\,(v_\psi\otimes v_1,\dots,v_\psi\otimes v_k)$ for $0\le k\le n$. These are $\mathfrak g$-submodules forming an increasing filtration $0=N_0\subseteq\cdots\subseteq N_n$ of $M(\psi)\otimes V$; and $N_n=M(\psi)\otimes V$. To see the latter, induct on the PBW degree of $u\in U(\mathfrak n^-)$: the diagonal action satisfies $u(v_\psi\otimes v_i)=(uv_\psi)\otimes v_i$ plus terms of strictly smaller PBW degree in the first factor. Those terms lie in $N_n$ by induction, and the degree-zero tensors are its generators, so all $(uv_\psi)\otimes v_i$ lie in $N_n$. [given, F2, algebra]

2.1 The vector $v_\psi\otimes v_k$ is a weight vector of weight $\psi+\lambda_k$, since $h(v_\psi\otimes v_k)=(\psi+\lambda_k)(h)(v_\psi\otimes v_k)$, and $\mathfrak n^+(v_\psi\otimes v_k)=v_\psi\otimes\mathfrak n^+v_k\in v_\psi\otimes\operatorname{span}(v_1,\dots,v_{k-1})\subseteq N_{k-1}$ by [F1]. Hence the class of $v_\psi\otimes v_k$ in $N_k/N_{k-1}$ is a highest weight vector of weight $\psi+\lambda_k$, and because all the other generators of $N_k$ lie in $N_{k-1}$ this class generates $N_k/N_{k-1}$ as a $U(\mathfrak g)$-module. [F1, step 1.1, algebra]

3.1 $N_k$ is free over $U(\mathfrak n^-)$ on the generators $v_\psi\otimes v_1,\dots,v_\psi\otimes v_k$. Indeed, $N_k=U(\mathfrak n^-)(v_\psi\otimes v_1,\dots,v_\psi\otimes v_k)$: by [F1] the action of $U(\mathfrak b)U(\mathfrak n^+)$ on $v_\psi\otimes v_i$ stays in $v_\psi\otimes\operatorname{span}(v_1,\dots,v_i)$, and $U(\mathfrak n^-)$ carries $v_\psi$ to $M(\psi)$. If $\sum_i\xi_i(v_\psi\otimes v_i)=0$ with $\xi_i\in U(\mathfrak n^-)$, choose the largest PBW degree $d$ occurring among the $\xi_i$ and take the degree-$d$ part of the relation in the associated graded $S(\mathfrak n^-)\otimes V$: it reads $\sum_i\sigma(\xi_i)\otimes v_i=0$ with $\sigma(\xi_i)=0$ whenever $\deg\xi_i<d$ and $\sigma(\xi_i)\ne0$ for the maximal ones; since $S(\mathfrak n^-)$ is a domain and the $v_i$ are linearly independent over $\mathbb C$, all $\sigma(\xi_i)$ vanish, a contradiction. [F2, step 2.1, algebra]

4.1 Consequently $N_k/N_{k-1}$ is free of rank one over $U(\mathfrak n^-)$, generated by the class $c_k$ of $v_\psi\otimes v_k$. By [[thm-universal-property-of-verma-modules]] there is a nonzero (hence surjective) homomorphism $M(\psi+\lambda_k)\to N_k/N_{k-1}$ carrying the highest weight vector to $c_k$; source and target are both free of rank one over $U(\mathfrak n^-)$ by [F2] and step 3.1, and the map carries a free generator to a free generator, so it is an isomorphism. Thus $N_k/N_{k-1}\cong M(\psi+\lambda_k)$. [F2, F4, step 2.1, step 3.1, algebra]

5.1 The filtration $0=N_0\subseteq\cdots\subseteq N_n=M(\psi)\otimes V$ therefore exhibits $M(\psi)\otimes V$ as Verma-filtered with type $\{\psi+\lambda_1,\dots,\psi+\lambda_n\}=\psi+\operatorname{Wt}V$. [F3, step 1.1, step 4.1] ∎
