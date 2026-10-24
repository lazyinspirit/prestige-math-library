---
id: lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality
kind: lemma
title: An additive constant in an entropy flux does not change the entropy inequality
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-convex-entropy-entropy-flux-pair, def-kruzhkov-entropy-solution, def-distribution, def-distributional-derivative, def-test-function-space-d-of-an-open-set]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, definition of entropy flux and normalisation, p. 220"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, entropy-flux integral in (5.41)--(5.42), pp. 48--49; additive-constant invariance is proved locally"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, $f\in C^1(\mathbb R;\mathbb R^n)$, let $(\eta,q)$ be an entropy
pair as in [[def-convex-entropy-entropy-flux-pair]], and let $q^C=q+C$ with a
constant vector $C\in\mathbb R^n$. Then for every bounded measurable
$u\colon\Pi_T\to\mathbb R$ the distributional inequalities
$$\eta(u)_t+\operatorname{div}_x q(u)\le0\qquad\text{and}\qquad\eta(u)_t+\operatorname{div}_x q^C(u)\le0$$
are equivalent in $\mathcal D'(\Pi_T)$; the two divergences differ by the zero
distribution, because the divergence of a constant vector field vanishes.


## Facts & Assumptions

**Given:** $n\ge1$, an entropy pair $(\eta,q)$, a constant vector $C$, a bounded measurable $u\colon\Pi_T\to\mathbb R$, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] The distributional divergence is defined by duality, $\langle\operatorname{div}_x w,\varphi\rangle=-\int w\cdot\nabla\varphi$, and a distribution is determined by its pairings with test functions; the test-function space is $\mathcal D(\Pi_T)=C_c^\infty(\Pi_T)$ ([[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]]).

[F2] Entropy pairs and entropy inequalities, including the dependence on the normalisation of the entropy flux, are as in [[def-convex-entropy-entropy-flux-pair]] and [[def-kruzhkov-entropy-solution]]; since $q$ is locally Lipschitz and $u$ is bounded, $q(u)$ and $q^C(u)$ are locally integrable and their divergences are defined by [F1].

## Proof

**Proof technique:** direct.

1.1 For a test function $\varphi$, [F1] and the definition of $q^C$ give $\langle\operatorname{div}_xq^C(u),\varphi\rangle=-\int q^C(u)\cdot\nabla\varphi=-\int q(u)\cdot\nabla\varphi-\sum_{i=1}^nC_i\int\partial_{x_i}\varphi$. [F1, given]


1.2 Each $\int_{\Pi_T}\partial_{x_i}\varphi\,dx\,dt=0$: the inner spatial integral vanishes because $\varphi$ is compactly supported in $x$, so the function $x_i\mapsto\varphi(t,x_i,x')$ is smooth compactly supported and the fundamental theorem of calculus applies, and the remaining integral over the other variables is finite as $\varphi$ has compact support. [given]


2.1 By steps 1.1 and 1.2, $\langle\operatorname{div}_xq^C(u),\varphi\rangle=-\int q(u)\cdot\nabla\varphi=\langle\operatorname{div}_xq(u),\varphi\rangle$ for every test function, hence $\operatorname{div}_xq^C(u)=\operatorname{div}_xq(u)$ in $\mathcal D'(\Pi_T)$. [step 1.1, step 1.2, F1]


3.1 Adding the common distribution $\partial_t\eta(u)$ to both sides of step 2.1, the two inequalities $\partial_t\eta(u)+\operatorname{div}_xq(u)\le0$ and $\partial_t\eta(u)+\operatorname{div}_xq^C(u)\le0$ are literally the same distributional inequality, so they are equivalent; in particular the entropy condition does not depend on the additive normalisation of the entropy flux. [step 2.1, F2] ∎
## Remarks

Consequently the entropy inequality depends only on the pair $(\eta,q)$ up to the normalisation of $q$, and statements such as [[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]] are independent of the chosen constant.
