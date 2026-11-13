---
id: prop-se-two-dimensional-embedding
kind: proposition
domain: mathematics
title: Two-dimensional exponents removing the Strichartz loss
status: draft
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-nontrapping
  - def-se-dirichlet-scale
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - lem-se-interpolation-sobolev-model
  - prop-se-2-3-loss
  - prop-se-scale-identifications
  - thm-se-exterior-fractional-sobolev-embedding
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  lem-se-interpolation-sobolev-model: mathematical-premise
  prop-se-2-3-loss: mathematical-premise
  prop-se-scale-identifications: mathematical-premise
  thm-se-exterior-fractional-sobolev-embedding: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 12
---

## Statement

Assume the Axiom of Choice. Let $\Theta\subset\mathbb R^2$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^2\setminus\Theta$. Assume it is non-trapping: each generalized reflected or glancing ray leaves each compact set in finite forward time. Let $\Delta_D$ be the Dirichlet Laplacian and $W(t)=e^{it\Delta_D}$. Let $H^1_0(\Omega)$ be the closure of $C_c^\infty(\Omega)$ in $H^1(\Omega)$.

For every $T>0$ and finite $p>2$, put $s'=1-1/p$ and $q=2p/(p-2)$. Then $2/p+2/q=1$, $s'+1/p=1$, and $s'q=2(p-1)/(p-2)>2$. There is a constant $C$ depending on $\Omega$, $T$ and $p$ such that, for every $u_0\in H^1_0(\Omega)$,
$$\|W(\cdot)u_0\|_{L^p(0,T;L^\infty(\Omega))}\le C\|u_0\|_{H^1(\Omega)}.$$
Here the time-space norm is the Bochner norm. The fractional space used in the deduction is $\mathcal W^{s',q}(\Omega)=[L^q(\Omega),W^{1,q}(\Omega)]_{s'}$, defined by complex interpolation.

## Statement references

[[def-se-geometry]]

[[def-se-nontrapping]]

[[def-se-dirichlet-scale]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-time-function-spaces]]

[[lem-se-interpolation-sobolev-model]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The hypotheses and data in the Statement.

[F1] The geometry and generalized-ray convention are those of [[def-se-geometry]] and [[def-se-nontrapping]]. The Dirichlet scale supplier [[def-se-dirichlet-scale]] defines $H_D^r$ and $W(t)$ under the Axiom of Choice [[math:def-axiom-of-choice]].

[F2] The lossy Strichartz estimate [[prop-se-2-3-loss]] applies on this exterior for $2<p<\infty$, $2\le q<\infty$, $2/p+2/q=1$ and $0\le s\le1$: it bounds the Bochner $L^p_t\mathcal W^{s,q}_x$ norm of $W(\cdot)u_0$ by a constant times $\|u_0\|_{H_D^{s+1/p}}$.

[F3] The interpolation model [[lem-se-interpolation-sobolev-model]] defines $\mathcal W^{s,q}=[L^q,W^{1,q}]_s$ for $0<s<1$ and $1<q<\infty$. The exterior embedding [[thm-se-exterior-fractional-sobolev-embedding]] gives a bounded linear inclusion $\mathcal W^{s,q}(\Omega)\to L^\infty(\Omega)$ when $sq>2$.

[F4] The scale identification [[prop-se-scale-identifications]] gives $H_D^1(\Omega)=H^1_0(\Omega)$ with equivalent norms. The integer Sobolev definition [[def-se-foundation-integer-sobolev-notation]] specifies the closure and $H^1$ norm, and [[def-se-foundation-time-function-spaces]] specifies strong measurability and Bochner $L^p$ norms.

## Proof

**Given:** The hypotheses and data in the Statement.

[F1] The geometry and generalized-ray convention are those of [[def-se-geometry]] and [[def-se-nontrapping]]. The Dirichlet scale supplier [[def-se-dirichlet-scale]] defines $H_D^r$ and $W(t)$ under the Axiom of Choice [[math:def-axiom-of-choice]].

[F2] The lossy Strichartz estimate [[prop-se-2-3-loss]] applies on this exterior for $2<p<\infty$, $2\le q<\infty$, $2/p+2/q=1$ and $0\le s\le1$: it bounds the Bochner $L^p_t\mathcal W^{s,q}_x$ norm of $W(\cdot)u_0$ by a constant times $\|u_0\|_{H_D^{s+1/p}}$.

[F3] The interpolation model [[lem-se-interpolation-sobolev-model]] defines $\mathcal W^{s,q}=[L^q,W^{1,q}]_s$ for $0<s<1$ and $1<q<\infty$. The exterior embedding [[thm-se-exterior-fractional-sobolev-embedding]] gives a bounded linear inclusion $\mathcal W^{s,q}(\Omega)\to L^\infty(\Omega)$ when $sq>2$.

[F4] The scale identification [[prop-se-scale-identifications]] gives $H_D^1(\Omega)=H^1_0(\Omega)$ with equivalent norms. The integer Sobolev definition [[def-se-foundation-integer-sobolev-notation]] specifies the closure and $H^1$ norm, and [[def-se-foundation-time-function-spaces]] specifies strong measurability and Bochner $L^p$ norms.



**Given:** The obstacle, $T$, $p$ and $u_0$ in the Statement.

**Goal:** Prove the parameter identities and the stated energy-data estimate.

1.1 Since $2<p<\infty$, the numbers $s'=1-1/p$ and $q=2p/(p-2)$ satisfy $0<s'<1$ and $2<q<\infty$. Direct calculation gives $2/p+2/q=1$, $s'+1/p=1$, and $s'q=2(p-1)/(p-2)=2+2/(p-2)>2$. Thus the hypotheses of both the lossy estimate and the fractional embedding hold. [F1, F2, F3, given, algebra]

2.1 The scale identification puts $u_0$ in $H_D^1$ and bounds its spectral norm by a constant times its $H^1$ norm. Applying the lossy estimate with $s=s'$ and the exponents from step 1.1 yields $\|W(\cdot)u_0\|_{L^p(0,T;\mathcal W^{s',q})}\le C_1\|u_0\|_{H^1}$. [F2, F4, step 1.1, given]

3.1 The bounded linear inclusion in F3 maps the strongly measurable $\mathcal W^{s',q}$-valued representative in step 2.1 to a strongly measurable $L^\infty$-valued representative: apply the inclusion to its finite-range simple approximants. Its pointwise norm is at most the inclusion norm times the $\mathcal W^{s',q}$ norm. Integrating the $p$th power and using step 2.1 gives the asserted Bochner estimate, with $C$ the product of the two constants. [F3, F4, step 1.1, step 2.1] ∎

## Source notes

The original article is cited for attribution to the two-dimensional argument in the proof of Lemma 3.8. The proof above uses the separately supplied lossy estimate, scale identification and fractional embedding. The interpolation convention is explicit; no identification with a Slobodeckij space for $q\ne2$ is asserted.
