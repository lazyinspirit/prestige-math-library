---
id: lem-rank-one-cohomology-shifts-across-a-simple-wall
kind: lemma
title: Rank-one cohomology shifts across a simple wall
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
- thm-relative-p1-line-bundle-cohomology-shift
- lem-relative-projective-line-cohomology-and-apolarity
- thm-leray-spectral-sequence-for-sheaf-cohomology
- thm-minimal-parabolic-flag-projection-is-p1-bundle
- lem-semisimple-minimal-parabolic-root-subgroup
- lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
- lem-minimal-parabolic-relative-canonical-line-bundle-root-weight
- prop-left-translation-makes-line-bundle-cohomology-a-g-module
- def-borel-character-equivariant-line-bundle
- def-complex-semisimple-algebraic-group-borel-and-flag-variety
- thm-semisimple-flag-variety-smooth-projective
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- def-dot-action-facets-and-single-wall-translation-data
- def-root-reflections-and-the-weyl-group-action
- prop-weyl-vector-is-the-sum-of-fundamental-weights
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed pp. 2-3, Lemma 4 and Theorem 3: the relative P1 shift for fibre degree at least -1 and the identification of the relative canonical bundle"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Sections 1.14-1.16, printed pp. 4-5: the rank-one shift with the condition <alpha^vee,lambda> >= -1 and the dot action"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\alpha$ be a simple
root and $\lambda\in X^*(T)$, and put $n=\langle\lambda,\alpha^\vee\rangle$. If
$n\ge-1$, then for every $i\ge0$ there is a natural $G$-equivariant
isomorphism
$$H^i(X,\mathcal L_\lambda)\cong H^{i+1}(X,\mathcal L_{s_\alpha\cdot\lambda}),$$
where $s_\alpha\cdot\lambda=s_\alpha(\lambda+\rho)-\rho$. If $n=-1$ then
$s_\alpha\cdot\lambda=\lambda$ and $H^i(X,\mathcal L_\lambda)=0$ for all
$i\ge0$. Consequently for every $\lambda$: if
$\langle\lambda,\alpha^\vee\rangle\ge-1$ the displayed isomorphism holds,
while if $\langle\lambda,\alpha^\vee\rangle\le-1$ then
$H^{i+1}(X,\mathcal L_\lambda)\cong H^i(X,\mathcal L_{s_\alpha\cdot\lambda})$
for all $i\ge0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B$, the flag variety $X=G/B$, a simple root $\alpha$ with minimal parabolic $P_\alpha$ and projection $f:X\to X_\alpha=G/P_\alpha$, a weight $\lambda$, and the number $n=\langle\lambda,\alpha^\vee\rangle$.

[F1] The projection $f:X_B\to X_\alpha$, $g[v_B]\mapsto g[v_\alpha]$, is a surjective morphism which is a Zariski-locally trivial fibre bundle with fibre $P_\alpha/B\cong\mathbb P^1$, trivialized over the single $G$-translates of the open torsor chart and covering $X_\alpha$ by finitely many of them; left translation by $G$ permutes these charts ([[thm-minimal-parabolic-flag-projection-is-p1-bundle]], [[lem-semisimple-minimal-parabolic-root-subgroup]]).

[F2] Under the fixed identification of the fibre $F=P_\alpha[v_B]$ with $\mathbb P^1$, the restriction $\mathcal L_\lambda|_F$ is isomorphic to $\mathcal O_{\mathbb P^1}(n)$; in particular the fibre degree of $\mathcal L_\lambda$ for $f$ is the constant integer $n=\langle\lambda,\alpha^\vee\rangle$ ([[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]]).

[F3] The relative canonical line bundle of $f$ satisfies $\omega_{X_B/X_\alpha}\cong\mathcal L_{-\alpha}$, $G$-equivariantly, and its fibre degree is $-2$ ([[lem-minimal-parabolic-relative-canonical-line-bundle-root-weight]]).

[F4] The canonical identifications $\mathcal L_\lambda\otimes\mathcal L_\mu\cong\mathcal L_{\lambda+\mu}$ and $\mathcal L_\lambda^\vee\cong\mathcal L_{-\lambda}$ are $G$-equivariant ([[def-borel-character-equivariant-line-bundle]]).

[F5] Let $\pi:E\to S$ be a Zariski locally trivial $\mathbb P^1$-bundle of complex schemes and $L$ an invertible sheaf of constant geometric fibre degree $n\ge-1$, with relative canonical bundle $K_\pi=\omega_{E/S}$. After the invariant apolarity normalization of the relative cohomology computation, there is for every $i\ge0$ an isomorphism $H^i(E,L)\cong H^{i+1}(E,L\otimes K_\pi^{\otimes(n+1)})$, natural in $(E/S,L)$ and under restriction of $S$; when $n=-1$ both sides of the underlying relative isomorphism are handled by the same statement with the zero sheaf identification ([[thm-relative-p1-line-bundle-cohomology-shift]], [[lem-relative-projective-line-cohomology-and-apolarity]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]]).

[F6] For a smooth projective complex scheme $X$ of pure dimension $N$ and a locally free sheaf $E$, the groups $H^q(X,E)$ vanish outside $0\le q\le N$; here $\dim X=|\Phi^+|=N$ ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[thm-semisimple-flag-variety-smooth-projective]]).

[F7] The equivariant structure induces for every $i\ge0$ a linear action of $G$ on $H^i(X,\mathcal L_\lambda)$, and every natural isomorphism of equivariant bundles induces a $G$-equivariant map on cohomology ([[prop-left-translation-makes-line-bundle-cohomology-a-g-module]]).

[F8] The dot action is $w\cdot\lambda=w(\lambda+\rho)-\rho$, the simple reflection acts by $s_\alpha(\mu)=\mu-\langle\mu,\alpha^\vee\rangle\alpha$ and is an involution, and $\langle\rho,\alpha^\vee\rangle=1$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[def-root-reflections-and-the-weyl-group-action]], [[prop-weyl-vector-is-the-sum-of-fundamental-weights]]).

## Proof

1.1 Compute the dot translate: $s_\alpha\cdot\lambda=s_\alpha(\lambda+\rho)-\rho=\lambda+\rho-(n+1)\alpha-\rho=\lambda-(n+1)\alpha$ by [F8], since $\langle\lambda+\rho,\alpha^\vee\rangle=n+1$. Therefore [F3] and [F4] give a $G$-equivariant isomorphism $\mathcal L_{s_\alpha\cdot\lambda}=\mathcal L_{\lambda-(n+1)\alpha}\cong\mathcal L_\lambda\otimes\mathcal L_{-\alpha}^{\otimes(n+1)}\cong\mathcal L_\lambda\otimes\omega_{X_B/X_\alpha}^{\otimes(n+1)}$. [F3, F4, F8, given, algebra]

2.1 Suppose $n\ge-1$. Apply [F5] to the $\mathbb P^1$-bundle $f:X_B\to X_\alpha$ and the invertible sheaf $L=\mathcal L_\lambda$, whose fibre degree is the constant integer $n$ by [F2], writing $K_\pi=\omega_{X_B/X_\alpha}$: for every $i\ge0$ there is an isomorphism $H^i(X_B,\mathcal L_\lambda)\cong H^{i+1}(X_B,\mathcal L_\lambda\otimes K_\pi^{\otimes(n+1)})$, which by step 1.1 is an isomorphism $H^i(X_B,\mathcal L_\lambda)\cong H^{i+1}(X_B,\mathcal L_{s_\alpha\cdot\lambda})$. This isomorphism is $G$-equivariant: $f$ is $G$-equivariant by [F1], so each $g\in G$ gives an automorphism of the bundle data $(f:X_B\to X_\alpha,\mathcal L_\lambda)$ covering the induced automorphism of $X_\alpha$, and the naturality clause of [F5] identifies the two pullback isomorphisms, which is exactly the equivariance with respect to the action of [F7]. [F1, F2, F5, F7, step 1.1, algebra]

3.1 Suppose $n=-1$. Then step 1.1 gives $s_\alpha\cdot\lambda=\lambda$, and step 2.1 gives $H^i(X_B,\mathcal L_\lambda)\cong H^{i+1}(X_B,\mathcal L_\lambda)$ for every $i\ge0$. By [F6] one has $H^q(X_B,\mathcal L_\lambda)=0$ for $q>N=|\Phi^+|$; applying the isomorphism successively to $i=N,N-1,\dots,0$ gives $H^q(X_B,\mathcal L_\lambda)=0$ for all $q\ge0$. [F2, F6, step 1.1, step 2.1, algebra]

4.1 Finally suppose $n\le-1$ and put $\lambda'=s_\alpha\cdot\lambda$. By step 1.1, $\langle\lambda',\alpha^\vee\rangle=\langle\lambda-(n+1)\alpha,\alpha^\vee\rangle=n-2(n+1)=-n-2\ge-1$, and $s_\alpha\cdot\lambda'=s_\alpha\cdot(s_\alpha\cdot\lambda)=\lambda$ because the dot action is an action of $W$ [F8]. Applying the first clause of the Statement, already proved in step 2.1, to $\lambda'$ in place of $\lambda$ gives $H^i(X_B,\mathcal L_{s_\alpha\cdot\lambda})\cong H^{i+1}(X_B,\mathcal L_\lambda)$ for all $i\ge0$, which is the asserted reformulation. [F8, step 1.1, step 2.1, algebra] ∎ 