---
id: lem-block-idempotents-lift-uniquely-from-kh-to-oh
kind: lemma
title: Block idempotents lift uniquely from kH to OH
status: draft
origin: pipeline
deps: [def-splitting-p-modular-system-for-a-finite-group, def-p-blocks-by-primitive-central-idempotents]
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
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Proposition 4.9 and preceding idempotent-lifting results, pp. 267–270"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
    - title: "Craven, The Brauer Correspondence, modular-system convention and Chapter 2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Statement

Let $(K,\mathcal O,k)$ be a splitting $p$-modular system and let $H$ be
finite. Reduction modulo the maximal ideal $\mathfrak m$ induces a bijection
between the primitive central idempotents of $\mathcal O H$ and those of
$kH$. Thus every block idempotent $c$ of $kH$ has a unique central block lift
$\widehat c$ in $\mathcal O H$.

## Facts & Assumptions

**Given:** The splitting system, its maximal ideal $\mathfrak m$, and the
finite group $H$.

[F1] In a splitting $p$-modular system, $\mathcal O$ is a complete discrete
valuation ring and $k=\mathcal O/\mathfrak m$
([[def-splitting-p-modular-system-for-a-finite-group]]).

[F2] Blocks are the primitive central idempotents of the relevant group
algebra ([[def-p-blocks-by-primitive-central-idempotents]]).

## Proof

1.1 Put $A=\mathcal O H$. It is finite free over $\mathcal O$, hence complete and separated for the $\mathfrak m$-adic topology by F1. Every element of $\mathfrak m A$ lies in $J(A)$: if $x\in\mathfrak m A$ and $y\in A$, then $(yx)^n\to0$, so $1-yx$ has inverse $\sum_{n\geq0}(yx)^n$. This is the Jacobson-radical test. [F1, algebra]

2.1 Let $\bar e\in A/\mathfrak m A=kH$ be idempotent and choose any lift $e_1\in A$. Inductively, if $e_n^2-e_n\in\mathfrak m^nA$, apply the Newton correction $$e_{n+1}=e_n-(2e_n-1)(e_n^2-e_n).$$ Because $e_n$ commutes with $e_n^2-e_n$, direct expansion shows that $e_{n+1}^2-e_{n+1}$ is a multiple of $(e_n^2-e_n)^2$, while $e_{n+1}-e_n\in\mathfrak m^nA$. Thus the errors tend to zero and $(e_n)$ is Cauchy. Completeness gives a limit $e$ with $e^2=e$ and reduction $\bar e$. [F1, step 1.1, algebra]

3.1 Suppose now that $\bar e$ is central. For $X=eA(1-e)$ its reduction is $\bar e(kH)(1-\bar e)=0$, hence $X=\mathfrak mX$: the nontrivial inclusion uses that $\mathfrak m=(\pi)$ in the DVR, since $x=\pi a=e(\pi a)(1-e)=\pi(ea(1-e))$. The finite $\mathcal O$-module $X$ has generators $x_1,\ldots,x_t$ with $x_i=\pi\sum_j a_{ij}x_j$. Multiplying $(I-\pi(a_{ij}))(x_j)=0$ by its adjugate shows that $\det(I-\pi(a_{ij}))x_j=0$ for every $j$. The determinant is congruent to $1$ modulo $\mathfrak m$, hence is a unit, so $X=0$. Applying the same argument to $(1-e)Ae$ gives that space zero too. Therefore $ea=eae=ae$ for every $a\in A$, and $e$ is central. [F1, step 2.1, algebra]

4.1 If central idempotents $e,f\in A$ have the same reduction, then $e-f\in\mathfrak mA\subseteq J(A)$. The commuting products $e(1-f)$ and $f(1-e)$ are idempotents in $J(A)$, and an idempotent in the Jacobson radical is zero. Hence $e=ef=f$. Thus every central idempotent of $kH$ has exactly one central lift. [step 1.1, step 3.1, algebra]

5.1 Central primitivity is preserved. If a central lift $e$ decomposed into two nonzero orthogonal central idempotents, neither summand could reduce to zero, since step 1.1 puts its kernel inside $J(A)$; their reductions would decompose $\bar e$. Conversely, a central decomposition of $\bar e$ lifts termwise by steps 2.1–3.1, and uniqueness in step 4.1 makes the lifted sum equal to $e$. Hence $e$ is primitive exactly when $\bar e$ is primitive. Together with F2 this proves the bijection and the asserted unique block lift, including the trivial-group case. The constructions are finite or sequential limits fixed by explicit formulas, so no choice principle is used. [F2, step 2.1, step 3.1, step 4.1] ∎

