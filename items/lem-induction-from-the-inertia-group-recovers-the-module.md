---
id: "lem-induction-from-the-inertia-group-recovers-the-module"
kind: "lemma"
title: "Reconstruction from the inertia component"
status: "draft"
origin: "pipeline"
deps: ["lem-normal-isotypical-component-is-inertia-stable", "lem-normal-restriction-constituents-form-one-conjugacy-orbit", "prop-induced-module-decomposes-over-a-left-transversal", "thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules", "lem-normal-isotypical-components-are-permuted-by-translation"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Proposition 4.2.2 p.54"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, and $V$ an irreducible complex $G$-module whose restriction contains $\theta\in\operatorname{Irr}(N)$. Set $I=I_G(\theta)$ and $W=V_\theta$. Then $W$ is irreducible as an $I$-module, and the canonical map
$$ \Phi:\operatorname{Ind}_I^G W\longrightarrow V,\qquad f\longmapsto\sum_{t\in T}t f(t) $$
is a $G$-isomorphism. Here $T$ is any left transversal for $G/I$ and induction uses functions satisfying $f(xi)=i^{-1}f(x)$, with $(g f)(x)=f(g^{-1}x)$.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] The nonzero component $V_\theta$ is stable under $I_G(\theta)$. ([[lem-normal-isotypical-component-is-inertia-stable]]).

[F2] The constituents of the normal restriction of an irreducible module form exactly one conjugacy orbit. ([[lem-normal-restriction-constituents-form-one-conjugacy-orbit]]).

[F3] Evaluation on a finite left transversal identifies the induced function module, as a vector space, with one copy of its inducing module per coset. ([[prop-induced-module-decomposes-over-a-left-transversal]]).

[F4] For finite $G$, $\operatorname{Hom}_G(\operatorname{Ind}_I^G W,V)\cong\operatorname{Hom}_I(W,V|_I)$. ([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]]).

[F5] Translation carries each normal isotypical component onto the conjugate-type component, and those components form a direct sum. ([[lem-normal-isotypical-components-are-permuted-by-translation]]).

## Proof

**Proof technique:** direct.

1.1 The space $W$ is nonzero and $I$-stable. Its inclusion into $V|_I$ has a corresponding $G$-map under adjunction. In the stated function model this map is $\Phi$: replacing $t$ by $ti$ leaves $ti f(ti)=t f(t)$ unchanged. For $g\in G$, write $g^{-1}t=t^\prime i$; then $t(gf)(t)=ti^{-1}f(t^\prime)=gt^\prime f(t^\prime)$, so reindexing gives $\Phi(gf)=g\Phi(f)$. [F1, F4, given, algebra]

2.1 By transversal evaluation, the functions supported on $tI$ form a copy of $W$, and $\Phi$ restricts there to the invertible linear map $w\mapsto tw$ onto $tW=V_{{}^t\theta}$. Distinct left cosets give distinct types, and the orbit result says these are all components of $V|_N$. Their sum is direct, so $\Phi$ is bijective before any irreducibility of $W$ is asserted. [F2, F3, F5, step 1.1]

3.1 Let $U\subseteq W$ be an $I$-submodule. The direct sum $\sum_{t\in T}tU$ is $G$-stable: if $gt=t^\prime i$ then $g(tU)=t^\prime U$. For $U\ne0$ it is nonzero and hence equals $V$. Its dimension is $[G:I]\dim U$, whereas step 2.1 gives $\dim V=[G:I]\dim W$. Therefore $U=W$, proving irreducibility. This argument allows $T=\{1\}$ and $I=N$ without change. [step 2.1, given, algebra] ∎
