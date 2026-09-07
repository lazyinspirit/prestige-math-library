---
id: "prop-restricted-duality-is-an-exact-involution-on-category-o"
kind: "proposition"
title: "Restricted duality is exact and involutive on O"
deps: ["def-restricted-dual-of-a-weight-module", "lem-simple-highest-weight-modules-are-restricted-self-dual", "thm-every-category-o-object-has-finite-length", "thm-category-o-is-abelian-and-extension-closed", "thm-jordan-holder-theorem-in-an-abelian-category", "thm-simple-objects-of-category-o-are-highest-weight-modules"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chen, Lecture 8 §3 Lemma 3.8 and Theorem 3.9, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
    - title: "Etingof, §20.4 Proposition 20.9, p.103; compare the different Cartan twist convention"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "Dualize each finite weight space to prove exactness and biduality in the larger weight category. Dualize a finite composition series; its factors are the same simples. Qualified extension closure proves finite generation and membership in O without circularly assuming it"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Restricted Chevalley duality is an exact contravariant equivalence $D:\mathcal O\to\mathcal O^{\mathrm{op}}$, with a natural isomorphism $D^2\cong\operatorname{id}$. It preserves each weight-space dimension, the formal character, and every simple composition multiplicity.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For an $\mathfrak h$-semisimple module $M$ with finite-dimensional weight spaces, its **restricted Chevalley dual** is $$D(M)=\bigoplus_{\mu\in\mathfrak h^*}M_\mu^*,\qquad (x\varphi)(m)=\varphi(\tau(x)m)\quad(x\in U(\mathfrak g)).$$ Here each functional is extended by zero on the other weight spaces and $\tau$ is the fixed anti-involution of def-chevalley-contravariant-form. In particular $\tau(h)=h$ and $D(M)_\mu=M_\mu^*$. A map $f:M\to N$ induces $D(f):D(N)\to D(M)$ by precomposition. The action law follows from $\tau(xy)=\tau(y)\tau(x)$; a root vector of weight $\alpha$ sends $M_\mu^*$ to $M_{\mu+\alpha}^*$, so the restricted sum is stable. This is a complex-linear algebraic dual, with no conjugation. Ordinary Lie-module duality has a minus sign and reverses weights; twisting that dual by the Lie automorphism $x\mapsto-\tau(x)$ gives the convention used here. ([[def-restricted-dual-of-a-weight-module]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For every highest weight $\lambda$, $D(L(\lambda))\cong L(\lambda)$ as $\mathfrak g$-modules. ([[lem-simple-highest-weight-modules-are-restricted-self-dual]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero. ([[thm-every-category-o-object-has-finite-length]])

[F4] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential. ([[thm-category-o-is-abelian-and-extension-closed]])

[F5] If an object $A$ in an abelian category has two composition series, then the two series have the same length and the same composition factors up to permutation and isomorphism. ([[thm-jordan-holder-theorem-in-an-abelian-category]])

[F6] The simple objects of $\mathcal O$ are exactly the modules $L(\lambda)$, $\lambda\in\mathfrak h^*$, and $L(\lambda)\cong L(\mu)$ if and only if $\lambda=\mu$. ([[thm-simple-objects-of-category-o-are-highest-weight-modules]])

## Proof

1.1 First work in the larger category of weight modules with finite-dimensional weight spaces. A short exact sequence is exact at each weight; its finite-dimensional vector-space dual sequence is exact with arrows reversed. Their direct sum is exact. Evaluation $m\mapsto(\varphi\mapsto\varphi(m))$ identifies $M$ with $D^2(M)$ weightwise, is natural, and is $\mathfrak g$-linear because $\tau^2=1$. Also $\dim D(M)_\mu=\dim M_\mu$. [F1, algebra]

2.1 For $M\in\mathcal O$, choose a finite composition series. By F6 every simple factor is some $L(\lambda)$. Apply the exact functor just constructed to obtain the reversed filtration of $D(M)$ by annihilators of the original filtration terms. Each resulting factor is $D(L(\lambda))\cong L(\lambda)$ by F2 and therefore lies in $\mathcal O$. [F2, F3, F6, step 1.1]

3.1 Starting at zero, the qualified extension closure puts each term of this finite dual filtration in $\mathcal O$: all terms are already weight modules with finite-dimensional weights. Thus $D(M)\in\mathcal O$; finite generation has been proved rather than assumed. Evaluation and the dual map functor now restrict to an exact contravariant equivalence on $\mathcal O$. [F4, step 2.1]

4.1 The weight equality from the first step proves character preservation. The reversed series has the same simple factors, and Jordan–Hölder makes their multiplicities independent of the series. The zero series dualizes to zero, so these assertions include the zero object. [F5, algebra, step 3.1] ∎
