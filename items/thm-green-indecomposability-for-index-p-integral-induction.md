---
id: thm-green-indecomposability-for-index-p-integral-induction
kind: theorem
title: Green indecomposability for index-p integral induction
status: draft
origin: pipeline
deps: [thm-krull-schmidt-for-og-lattices, def-relative-projectivity-and-vertices-for-og-lattices, def-algebraically-closed-field]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gyujin Oh, Basic Modular Representation Theory, Theorem 4.1 and proof, pp. 6–7"
      url: "https://web.math.princeton.edu/~gyujino/Modrepthy.pdf"
    - title: "Craven, The Brauer Correspondence, Theorem 2.2 and its use in Theorem 2.20, pp. 19 and 28–29"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Statement

Let $(K,\mathcal O,k)$ be a splitting $p$-modular system whose residue field
$k$ is algebraically closed. Let $N\trianglelefteq H$ with $[H:N]=p$, and
let $L$ be a nonzero indecomposable $\mathcal O N$-lattice. Then
$\operatorname{Ind}_N^H L$ is an indecomposable $\mathcal O H$-lattice.

## Facts & Assumptions

**Given:** The modular system, algebraically closed residue field, groups, and
lattice in the Statement.

[F1] Indecomposable group lattices have local endomorphism rings, and finite
direct sums satisfy Krull--Schmidt
([[thm-krull-schmidt-for-og-lattices]]).

[F2] Induction here is induction of finite-free integral lattices as in
[[def-relative-projectivity-and-vertices-for-og-lattices]].

[F3] Algebraic closedness means every nonconstant polynomial over $k$ has a
root ([[def-algebraically-closed-field]]).

## Proof

1.1 Put $X=\operatorname{Ind}_N^H L$ and let $I_H(L)=\{h\in H:{}^hL\cong L\}$. This is a subgroup containing $N$, so the prime-index hypothesis gives $I_H(L)=N$ or $H$. By F1, $E_0=\operatorname{End}_{\mathcal ON}(L)$ is local. Its residue division ring $E_0/J(E_0)$ is finite-dimensional over $k$; F3 makes it equal to $k$, because every element satisfies a split polynomial and a division ring has no nonzero zero divisors. [F1, F3, algebra]

2.1 Suppose $I_H(L)=N$. On restriction to $N$, $X$ is the direct sum of the $p$ pairwise nonisomorphic conjugates of $L$. Krull--Schmidt and step 1.1 identify the semisimple quotient of its $N$-endomorphism ring with $k^p$: diagonal entries reduce modulo the local radicals, while every map between distinct indecomposable summands belongs to the categorical radical. Conjugation by a generator of $H/N$ cyclically permutes these $p$ factors. An $H$-endomorphism idempotent therefore has image $(0,\ldots,0)$ or $(1,\ldots,1)$ in $k^p$. In the first case the idempotent lies in the Jacobson radical and is zero; in the second its complement does, so it is one. Thus $X$ has no nontrivial $H$-endomorphism idempotent and is indecomposable. [F1, F2, step 1.1, algebra]

2.2 Suppose $I_H(L)=H$. Choose isomorphisms among the $p$ conjugate summands. They identify the semisimple quotient of $\operatorname{End}_{\mathcal ON}(X)$ with $M_p(k)$. The action of a generator of $H/N$ on this quotient is conjugation by a matrix $T$ that cyclically permutes the $p$ diagonal primitive idempotents. Its $p$th power is scalar, say $T^p=\lambda I$. By F3 choose $\mu\in k$ with $\mu^p=\lambda$; in characteristic $p$, $z^p-\lambda=(z-\mu)^p$. The cyclic permutation of the diagonal idempotents makes $T$ cyclic of degree $p$, so its Jordan form is one block and $$C_{M_p(k)}(T)=k[T]\cong k[z]/((z-\mu)^p),$$ a local algebra. [F3, step 1.1, algebra]

3.1 Every $H$-endomorphism of $X$ is an $N$-endomorphism fixed by this conjugation. Hence an $H$-endomorphism idempotent maps to an idempotent in the local centralizer computed in step 2.2, and that image is $0$ or $1$. The kernel of the reduction to $M_p(k)$ lies in the Jacobson radical of the $N$-endomorphism ring; an idempotent in it is zero, and the same argument applied to the complement handles image $1$. Thus again only $0$ and $1$ occur, so $X$ is indecomposable. The two inertia cases are exhaustive. The nonzero hypothesis excludes the zero lattice, and the proof uses only finite decompositions; algebraic closedness is used exactly in steps 1.1 and 2.2, not as a hidden choice principle. [F1, step 1.1, step 2.1, step 2.2] ∎
