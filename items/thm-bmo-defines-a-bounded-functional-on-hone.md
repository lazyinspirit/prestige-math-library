---
id: thm-bmo-defines-a-bounded-functional-on-hone
kind: theorem
title: "BMO classes define bounded functionals on H1"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [def-bmo-seminorm-and-quotient-by-constants, lem-range-truncations-preserve-bmo-seminorm, lem-bmo-functions-pair-uniformly-with-hone-atoms, lem-linfinity-bmo-functions-dualise-hone-boundedly, lem-finite-atomic-sums-are-dense-in-hone, def-hp-atom-with-moment-order, thm-banach-alaoglu, thm-ultrafilter-lemma, def-axiom-of-choice, thm-atomic-characterisation-of-real-hp, thm-locally-integrable-functions-embed-in-distributions, thm-dominated-convergence, thm-compactness-via-nets-filters-and-ultrafilters, def-net-convergence-and-cluster-point, def-weak-star-topology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.39 (the action of $b\\in\\mathrm{BMO}$ on $H^1$, including the truncation and Banach-Alaoglu step) and (7.69), printed p. 47"
---

## Statement

Assume the Axiom of Choice, with the fixed $H^1$ kernel $\varphi$ and
admissible atomic order $\widetilde N$ of [[thm-atomic-characterisation-of-real-hp]].
For every $b\in\mathrm{BMO}(\mathbb R^n)$ there is a
unique bounded linear functional $\Lambda_b\in(H^1(\mathbb R^n))^*$ with
$\Lambda_b(a)=\int ab$ for every $H^1$ atom $a$, and
$\|\Lambda_b\|\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$ with the
constant independent of $b$. The
map $b\mapsto\Lambda_b$ is linear, annihilates constants, and therefore factors
through $\mathrm{BMO}(\mathbb R^n)/\mathbb C$; on every finite sum of atoms $g$
one has $\Lambda_b(g)=\int gb$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the fixed $\varphi,\widetilde N$, a function $b\in\mathrm{BMO}(\mathbb R^n)$, the $(1,\infty,0)$-atoms of [[def-hp-atom-with-moment-order]], and the space $H^1(\mathbb R^n)$ with its atoms.

[F1] The atom pairing is bounded: for every atom $a$ the integral $\int ab$ converges absolutely and $\bigl|\int ab\bigr|\le\|b\|_{\mathrm{BMO}}$ ([[lem-bmo-functions-pair-uniformly-with-hone-atoms]], [[def-hp-atom-with-moment-order]]); in particular $\int a=0$ and atoms are bounded with compact support.

[F2] If $b\in L^\infty(\mathbb R^n)\cap\mathrm{BMO}(\mathbb R^n)$ then for every $f\in H^1(\mathbb R^n)$ the integral $\int fb$ converges absolutely and $\bigl|\int fb\bigr|\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\|f\|_{H^1}$ ([[lem-linfinity-bmo-functions-dualise-hone-boundedly]]).

[F3] Every $\ell^1$ sum of atoms lies in $H^1$: if $g=\sum_{j\le N}\lambda_ja_j$ is a finite atomic sum then $\|g\|_{H^1}\le C\sum_{j\le N}|\lambda_j|$, and the finite atomic sums are dense in $H^1$ ([[thm-atomic-characterisation-of-real-hp]], [[lem-finite-atomic-sums-are-dense-in-hone]]).

[F4] The componentwise truncations $b_M$ of $b$ satisfy $b_M\in L^\infty$, $|b_M|\le|b|$, $b_M\to b$ pointwise and $\|b_M\|_{\mathrm{BMO}}\le\tfrac92\|b\|_{\mathrm{BMO}}$ ([[lem-range-truncations-preserve-bmo-seminorm]]).

[F5] The Axiom of Choice implies the ultrafilter lemma ([[def-axiom-of-choice]], [[thm-ultrafilter-lemma]]); under the ultrafilter lemma the closed dual ball of a normed space is weak-star compact ([[thm-banach-alaoglu]]) and every net in a compact space has a cluster point ([[thm-compactness-via-nets-filters-and-ultrafilters]], [[def-net-convergence-and-cluster-point]]); the evaluations $\Lambda\mapsto\Lambda(a)$ are continuous for the weak-star topology ([[def-weak-star-topology]]).

[F6] If $b_M\to b$ pointwise with $|b_M|\le|b|$ and $a$ is an atom, then $\int ab_M\to\int ab$ by dominated convergence, the dominating function $|a||b|$ being integrable because $a$ is bounded with compact support and $b\in L^1_{\mathrm{loc}}$ ([[thm-dominated-convergence]], [[def-bmo-seminorm-and-quotient-by-constants]]).

[F7] A locally integrable function whose regular distribution vanishes is zero almost everywhere ([[thm-locally-integrable-functions-embed-in-distributions]]).

## Proof

**Proof technique:** direct.

1.1 The bounded case. Let $b\in L^\infty\cap\mathrm{BMO}$ and let $F$ be the linear span of the atoms, viewed as a subspace of $H^1$ by [F3]. Every $g\in F$ is a finite sum of bounded compactly supported atoms, hence an $L^1$ function with $g\in H^1$, so $\int gb$ converges absolutely and $| \int gb|\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\|g\|_{H^1}$ by [F2]. The value $\int gb$ depends only on the element $g\in H^1$: if two finite sums $g,g'$ represent the same element, then the locally integrable function $g-g'$ has zero regular distribution, so $g=g'$ almost everywhere by [F7] and the two integrals agree. Thus $g\mapsto\int gb$ is a well-defined linear functional on $F$, bounded by $C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$, and it extends uniquely to a bounded $\Lambda_b\in(H^1)^*$ by density [F3]; the extension is the unique bounded functional whose value at every atom $a$ is $\int ab$, since two such functionals agree on $F$ and $F$ is dense. [F1, F2, F3, F7]

2.1 The general case, existence of a cluster point. For general $b\in\mathrm{BMO}$ let $b_M$ be the componentwise truncation of [F4]; step 1.1 gives bounded functionals $\Lambda_{b_M}$ with $\|\Lambda_{b_M}\|\le\tfrac92C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$. The Axiom of Choice yields the ultrafilter lemma [F5], so the closed ball of radius $\tfrac92C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$ in $(H^1)^*$ is weak-star compact [F5]; by the compactness characterization [F5] the sequence, viewed as a net, $(\Lambda_{b_M})_{M\in\mathbb N,\,M\ge1}$ has a weak-star cluster point $\Lambda$. For every atom $a$ the evaluations converge: $\Lambda_{b_M}(a)=\int ab_M\to\int ab$ by [F6]. Evaluation at $a$ is weak-star continuous [F5], so $\Lambda(a)$ is a cluster point of the convergent net $(\Lambda_{b_M}(a))_{M}$ in $\mathbb C$ and therefore equals its limit, $\Lambda(a)=\int ab$. [step 1.1, F4, F5, F6]

3.1 Uniqueness and the norm bound. If $\Lambda,\Lambda'$ are bounded functionals with $\Lambda(a)=\Lambda'(a)=\int ab$ for every atom $a$, then by linearity they agree on the span $F$ of the atoms and hence, by density [F3] and continuity, on all of $H^1$; so the functional of step 2.1 is the unique bounded functional with the required atom values, and $\|\Lambda\|\le\tfrac92C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$. [step 2.1, F3]

4.1 Linearity, constants and finite sums. For $b,b'\in\mathrm{BMO}$ and $\lambda\in\mathbb C$, the functionals $\Lambda_{b+b'}$ and $\Lambda_b+\Lambda_{b'}$ both assign to every atom $a$ the value $\int a(b+b')=\int ab+\int ab'$, so they are equal by the uniqueness of step 3.1; the same argument gives $\Lambda_{\lambda b}=\lambda\Lambda_b$. If $b$ is constant almost everywhere, then $\int ab=0$ for every atom because $\int a=0$ by [F1], so $\Lambda_b=0$ by uniqueness. Hence $b\mapsto\Lambda_b$ is linear with image of the constants in the zero functional, so it factors through $\mathrm{BMO}(\mathbb R^n)/\mathbb C$. Finally, for a finite atomic sum $g=\sum_{j\le N}\lambda_ja_j$, linearity and step 1.1 give $\Lambda_b(g)=\sum_{j\le N}\lambda_j\int a_jb=\int gb$. [step 1.1, step 3.1, F1, algebra]

5.1 Steps 1.1 and 2.1 construct, for every $b\in\mathrm{BMO}(\mathbb R^n)$, a bounded functional with the required atom values, step 3.1 gives uniqueness and the bound $\|\Lambda_b\|\le\tfrac92C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$, and step 4.1 gives linearity, the annihilation of constants, the factorisation through the quotient and the finite-sum identity. The Axiom of Choice is spent exactly at the ultrafilter lemma and the Banach-Alaoglu cluster point in step 2.1. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
