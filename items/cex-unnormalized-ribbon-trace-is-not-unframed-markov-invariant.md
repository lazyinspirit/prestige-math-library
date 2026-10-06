---
id: cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant
kind: counterexample
title: "The unnormalized ribbon trace is not an unframed Markov invariant"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [lem-scalar-twist-controls-the-two-markov-stabilizations, def-twist-and-ribbon-structure, def-absolutely-simple-object, def-markov-conjugation-and-stabilization-moves, lem-markov-moves-preserve-oriented-closure-isotopy, def-closure-of-a-geometric-braid, def-countable-choice]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2 Example 8.2.2 (super vector spaces and the sign braiding), printed p. 197; §8.10 Definition 8.10.1, Remark 8.10.4 and the normalization discussion, printed pp. 216--218"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

The claim refuted is: the unnormalized ribbon evaluation $t_n(\beta)$ is
invariant under Markov stabilization, hence defines an invariant of oriented
unframed links. Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Take $k$
of characteristic $\neq2$ and let $\mathcal C$ be the
category of $\mathbb Z/2$-graded finite-dimensional vector spaces with the sign braiding
$c(v\otimes w)=(-1)^{|v||w|}w\otimes v$ and the twist
$\theta_V=(-1)^{|v|}v$ on homogeneous vectors, which makes $\mathcal C$ a
ribbon category. Let $X$ be the odd one-dimensional object, so
$\operatorname{End}(X)=k$ and $\theta_X=-\operatorname{id}_X$, giving
$\lambda=-1$. Then
[[lem-scalar-twist-controls-the-two-markov-stabilizations]] gives

$$t_2(\sigma_1)=\lambda\,t_1(e)=-t_1(e),$$

while the closures of $e\in B_1$ and of $\sigma_1\in B_2$ are both the unknot,
the second being the positive stabilization of the first. Since
$t_1(e)=\operatorname{Tr}_L(j_X)=d_X=1\neq0$, the two values $1$ and $-1$
differ, so the unnormalized trace is not invariant under positive
stabilization and is not an unframed link invariant; writhe normalization is
required, as in the companion example.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a field $k$ with $\operatorname{char}k\ne2$, the category $\mathcal C$ of $\mathbb Z/2$-graded finite-dimensional vector spaces with the sign braiding and the parity twist, and the odd one-dimensional object $X$.

[L1] A twist on a braided rigid monoidal category is a natural automorphism $\theta$ of the identity with $\theta_{V\otimes W}=(\theta_V\otimes\theta_W)c_{W,V}c_{V,W}$ and dual-compatibility $(\theta_V)^{\vee}=\theta_{V^{\vee}}$; a ribbon category is a braided rigid monoidal category with a twist ([[def-twist-and-ribbon-structure]]).

[L2] Assume $\operatorname{End}(\mathbf 1)=k$ and $X$ absolutely simple, so $\theta_X=\lambda\operatorname{id}_X$ with $\lambda\in k^{\times}$; then $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{\pm1}t_n(\beta)$ ([[lem-scalar-twist-controls-the-two-markov-stabilizations]], [[def-absolutely-simple-object]]); that lemma is stated under countable choice ([[def-countable-choice]]), which is assumed here.

[L3] The positive stabilization of $e\in B_1$ is $\sigma_1\in B_2$, and a stabilization preserves the oriented closure up to ambient isotopy: the closures of a braid and of its stabilizations are equivalent oriented links ([[def-markov-conjugation-and-stabilization-moves]], [[lem-markov-moves-preserve-oriented-closure-isotopy]], [[def-closure-of-a-geometric-braid]]).

[F1] The ribbon evaluation is $t_n(\beta)=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))$ with $j=u\theta$; for $n=1$ and the trivial braid $e$, $t_1(e)=\operatorname{Tr}_L(j_X)=d_X$, the categorical dimension of $X$ ([[lem-scalar-twist-controls-the-two-markov-stabilizations]] and the defining formula of the ribbon evaluation).

## Counterexample

1.1 **The model is a ribbon category.** The usual graded duals of finite-dimensional spaces give rigidity. The sign braiding is a symmetric braiding, so it is in particular braided; the parity twist is a natural automorphism of the identity, and on homogeneous vectors $\theta_{V\otimes W}=(-1)^{|v|+|w|}$ equals $(\theta_V\otimes\theta_W)c_{W,V}c_{V,W}$ because the double braiding is the identity; the dual of a homogeneous space has the same parity, so $\theta_{V^{\vee}}=(\theta_V)^{\vee}$. Hence [L1] makes $\mathcal C$ a ribbon category. [L1, given, algebra]

1.2 **The odd line and its twist eigenvalue.** The odd one-dimensional space $X$ has $\operatorname{End}(X)=k$, so it is absolutely simple, and $\theta_X=-\operatorname{id}_X$, so $\lambda=-1\in k^{\times}$ because $\operatorname{char}k\ne2$. Its categorical dimension is $d_X=t_1(e)=1$: the defining composite of [F1] is $\operatorname{Tr}_L(j_X)$ with $j_X=u_X\theta_X$, and on the odd line the Drinfeld morphism is $u_X=-\operatorname{id}_X$ while $\theta_X=-\operatorname{id}_X$, so $j_X=\operatorname{id}_X$ and $d_X=\operatorname{Tr}_L(\operatorname{id}_X)=1$. [L1, F1, L2, given, algebra]

2.1 **The two values differ.** By [L2] applied to $\beta=e\in B_1$ and its positive stabilization $\sigma_1\in B_2$, $t_2(\sigma_1)=\lambda\,t_1(e)=(-1)\cdot1=-1$, while $t_1(e)=1$ by step 1.2. The two values differ. [L2, step 1.2, algebra]

3.1 **The closures are the same oriented link.** By [L3] the closures of $e$ and of its stabilization $\sigma_1$ are equivalent oriented links; both are the unknot, the closure of $\sigma_1$ being a one-component diagram with a single positive kink. If the unnormalized evaluation were an invariant of oriented unframed links, it would take equal values on the closures of $e$ and $\sigma_1$; step 2.1 shows that it does not. [L3, step 2.1, given]

4.1 **Conclusion.** The unnormalized ribbon trace takes the values $-1$ and $1$ on two braids whose closures are equivalent oriented links, so it is not invariant under positive stabilization and not an unframed link invariant; the writhe factor is necessary, as the companion example shows. All computations are finite; the only choice principle used is $\mathrm{AC}_\omega$, consumed through the stabilization lemma [L2]. [step 1.1, step 1.2, step 2.1, step 3.1] ∎ 