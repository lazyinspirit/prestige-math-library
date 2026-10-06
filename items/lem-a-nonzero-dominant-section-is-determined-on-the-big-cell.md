---
id: lem-a-nonzero-dominant-section-is-determined-on-the-big-cell
kind: lemma
title: A $U^-$-invariant section is determined on the big cell
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
- lem-sections-of-an-associated-line-bundle-as-equivariant-functions
- prop-left-translation-makes-line-bundle-cohomology-a-g-module
- lem-semisimple-opposite-borel-big-cell
- lem-semisimple-borel-root-factorization
- lem-semisimple-root-exponential-algebraic-subgroups
- def-complex-semisimple-algebraic-group-borel-and-flag-variety
- def-borel-character-equivariant-line-bundle
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
      locator: "Printed pp. 1-2, proof of Theorem 2: the space V_0 of U'-invariant functions, the identity v(ub)=lambda(b)v(1), and the bound dim V_0 <= 1 from density of U'B"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Section 1.8, printed p. 3: the identification of lowest-weight vectors with the U'-invariants"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in X^*(T)$
and let $f\in H^0(X,\mathcal L_\lambda)$, regarded as a regular function on $G$
with $f(gb)=\lambda(b)f(g)$. If $f$ is invariant under left translation by
$U^-$ (equivalently, if $x\cdot f=0$ for every $x$ in the negative nilradical
$\mathfrak n^-$), then
$$f(u^-b)=\lambda(b)f(1)\qquad(u^-\in U^-,\ b\in B).$$
Consequently $f$ is determined by its value $f(1)$, the space of left-$U^-$-invariant
sections of $\mathcal L_\lambda$ has dimension at most $1$, and every nonzero
such section spans the $T$-weight space of weight $-\lambda$, that is
$t\cdot f=\lambda(t)^{-1}f$ for all $t\in T$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B=T\ltimes U$ and opposite unipotent subgroup $U^-$, the flag variety $X=G/B$, a weight $\lambda$, the bundle $\mathcal L_\lambda$, and $f\in H^0(X,\mathcal L_\lambda)$ as in the Statement.

[F1] Restriction along $G\to X$ identifies $H^0(X,\mathcal L_\lambda)$ with the regular functions on $G$ satisfying $f(gb)=\lambda(b)f(g)$, and the induced $G$-action is left translation $(g_0\cdot f)(g)=f(g_0^{-1}g)$ ([[lem-sections-of-an-associated-line-bundle-as-equivariant-functions]], [[def-borel-character-equivariant-line-bundle]]).

[F2] The multiplication map $U^-\times B\to\Omega=U^-B$, $(u^-,b)\mapsto u^-b$, is an isomorphism onto a dense open subscheme $\Omega$ of $G$ ([[lem-semisimple-opposite-borel-big-cell]]).

[F3] $B=T\ltimes U$ and $U^-$ is the product of the root subgroups $U_{-\alpha}$, $\alpha\in\Phi^+$, each $U_{-\alpha}$ being a closed one-parameter subgroup isomorphic to $\mathbb G_a$; the torus $T$ normalizes each $U_{-\alpha}$, with $t\,u_{-\alpha}(z)\,t^{-1}=u_{-\alpha}((-\alpha)(t)z)$ ([[lem-semisimple-borel-root-factorization]], [[lem-semisimple-root-exponential-algebraic-subgroups]]).

[F4] For every nonzero $e\in\mathfrak g_{-\alpha}$ the curve $z\mapsto\exp_G(ze)$ is the isomorphism $u_{-\alpha}:\mathbb G_a\to U_{-\alpha}$ onto the closed subgroup $U_{-\alpha}$, and it is given by polynomial matrix coefficients; hence $\mathfrak n^-=\operatorname{Lie}U^-=\bigoplus_{\alpha>0}\mathfrak g_{-\alpha}$ and for $x\in\mathfrak g_{-\alpha}$ the function $z\mapsto f(u_{-\alpha}(z)g)$ is polynomial in $z$ for every regular $f$ and every $g$ ([[lem-semisimple-root-exponential-algebraic-subgroups]], [[lem-semisimple-borel-root-factorization]]).

## Proof

1.1 Fix a root parametrization $u_{-\alpha}(t)=\exp_G(tx)$ with $0\ne x\in\mathfrak g_{-\alpha}$. The derived left action is $(x\cdot f)(g)=\frac{d}{dt}|_0 f(u_{-\alpha}(-t)g)$. If every $x\in\mathfrak n^-$ annihilates $f$, put $p_g(t)=f(u_{-\alpha}(-t)g)$. For every $t_0$, the group law gives $p_g'(t_0)=(x\cdot f)(u_{-\alpha}(-t_0)g)=0$. Thus this polynomial has zero derivative everywhere and is constant over $\mathbb C$. Each root subgroup fixes $f$, and their product is $U^-$ by [F3], so $U^-$ fixes $f$. Conversely, differentiating a $U^-$-invariant function gives $\mathfrak n^-f=0$. [F1, F3, F4, given, algebra]

2.1 Assume now that $f$ is invariant under $U^-$. For $u^-\in U^-$ and $b\in B$ the invariance gives $f(u^-b)=f(b)$, and the functional equation of [F1] with $g=1$ gives $f(b)=f(1\cdot b)=\lambda(b)f(1)$. Hence $f(u^-b)=\lambda(b)f(1)$ for all $u^-\in U^-$, $b\in B$. [F1, step 1.1, given, algebra]

3.1 Let $f,f'$ be two $U^-$-invariant sections of $\mathcal L_\lambda$ with $f(1)=f'(1)$. By step 2.1, $f$ and $f'$ agree on $\Omega=U^-B$, which is dense open in the irreducible variety $G$ by [F2]; two regular functions on $G$ agreeing on a dense open subset agree everywhere, so $f=f'$. The linear map $f\mapsto f(1)$ is therefore injective on the space of $U^-$-invariant sections, which has dimension at most $1$. [F1, F2, step 2.1, algebra]

4.1 Finally let $t\in T$ and put $g=t\cdot f-\lambda(t)^{-1}f$. By [F3] the torus normalizes every $U_{-\alpha}$, so $t\cdot f$ is again $U^-$-invariant: for $u^-\in U^-$ there is $u'^-=tu^-t^{-1}\in U^-$ with $u^-\cdot(t\cdot f)=t\cdot((t^{-1}u^-t)\cdot f)=t\cdot f$. Hence $g$ is a $U^-$-invariant section, and $g(1)=(t\cdot f)(1)-\lambda(t)^{-1}f(1)=f(t^{-1})-\lambda(t)^{-1}f(1)=\lambda(t^{-1})f(1)-\lambda(t)^{-1}f(1)=0$ by the functional equation. By step 3.1 the vanishing of $g(1)$ forces $g=0$, that is $t\cdot f=\lambda(t)^{-1}f$. If $f$ is nonzero, it therefore has weight $-\lambda$. [F1, F3, step 1.1, step 3.1, algebra]

5.1 Let $h$ be any section of $T$-weight $-\lambda$. Left translation and right $B$-equivariance [F1] give $h(tu^-t^{-1})=h(u^-)$ for $t\in T$. In the polynomial root coordinates on $U^-$ of [F3], conjugation scales each coordinate by the character $-\beta$ for a positive root $\beta$. A nonconstant monomial has character $-\sum_\beta m_\beta\beta\ne0$: every positive root has nonnegative simple-root coefficients, and some $m_\beta>0$. Since distinct torus characters are linearly independent (restrict a finite list to a one-parameter subgroup separating their exponents), a conjugation-invariant polynomial is constant. Thus $h$ is constant on $U^-$ and $h(u^-b)=\lambda(b)h(1)$ on $\Omega$. Density [F2] makes $h$ $U^-$-invariant on $G$. Step 3.1 now shows that the entire weight-$(-\lambda)$ space has dimension at most one; any nonzero invariant section spans it. [F1, F2, F3, step 3.1, step 4.1, algebra] ∎

## Remarks

Constancy in step 1.1 uses vanishing of the derived action at every translated point, giving zero derivative at every parameter value, rather than only at the origin.
