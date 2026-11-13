---
id: prop-se-potential-multipliers
kind: proposition
domain: mathematics
title: Time-dependent potential and conjugation bounds on the scale
status: draft
deps:
  - def-se-trajectory
  - def-se-linearized-pair
  - prop-se-scale-identifications
  - lem-se-spectral-cutoff-duality
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:lem-weak-product-rule-for-bounded-sobolev-functions
  - math:lem-weak-derivative-linearity-locality-and-commutation
  - math:def-axiom-of-choice
dependency_roles:
  def-se-trajectory: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  prop-se-scale-identifications: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:lem-weak-product-rule-for-bounded-sobolev-functions: mathematical-premise
  math:lem-weak-derivative-linearity-locality-and-commutation: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 12
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, let $T>0$ and $\lambda\in\mathbb R\setminus\{0\}$, and let $w$ satisfy (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ distributionally. Define $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$.

Then $V_1,V_2\in C([0,T];W^{2,\infty}(\Omega))$. For each $\theta\in[-2,2]$, multiplication by $V_j(t)$ and complex conjugation are uniformly bounded real-linear operations on $H_D^\theta(\Omega)$ for $t\in[0,T]$. Multiplication is ordinary pointwise multiplication at nonnegative orders; at negative orders it is the pivot-dual extension. Moreover $t\mapsto M_{V_j(t)}$ is continuous in operator norm on each $H_D^\theta$.

Here $H_D^s=D((I-\Delta_D)^{s/2})$ for $s\ge0$, with its spectral norm, and $H_D^{-s}$ is its pivot antidual. The space $W^{2,\infty}$ consists of almost-everywhere classes with all weak derivatives through order two essentially bounded; continuity of paths is norm continuity.

## Statement references

[[def-se-trajectory]]

[[def-se-linearized-pair]]

[[prop-se-scale-identifications]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The hypotheses, trajectory and potentials in the Statement.

[F1] Hypothesis (W) supplies norm continuity of $w$ into $W^{2,\infty}$, and the linearized-pair definition supplies the displayed formulas for $V_1,V_2$. The space and time conventions are those of [[def-se-trajectory]], [[def-se-linearized-pair]], [[def-se-foundation-integer-sobolev-notation]] and [[def-se-foundation-time-function-spaces]].

[F2] The scale and its negative pivot-antidual convention are supplied by [[prop-se-scale-identifications]]. For $a\in W^{2,\infty}(\Omega)$, [[lem-se-spectral-cutoff-duality]] gives $\|M_a\|_{H_D^\theta\to H_D^\theta}\le C_{\theta,\Omega}\|a\|_{W^{2,\infty}}$ for $-2\le\theta\le2$, defines the negative action by pivot duality, and gives conjugation as an isometry on these scale spaces.

[F3] On an open set, the weak product rule holds for bounded $W^{1,2}$ functions; weak differentiation is linear, local and commutes where the derivatives exist. These inputs are [[math:lem-weak-product-rule-for-bounded-sobolev-functions]] and [[math:lem-weak-derivative-linearity-locality-and-commutation]]. The Axiom of Choice in [[math:def-axiom-of-choice]] supplies their choice assumptions and those of the spectral supplier.

## Proof

**Given:** The hypotheses, trajectory and potentials in the Statement.

[F1] Hypothesis (W) supplies norm continuity of $w$ into $W^{2,\infty}$, and the linearized-pair definition supplies the displayed formulas for $V_1,V_2$. The space and time conventions are those of [[def-se-trajectory]], [[def-se-linearized-pair]], [[def-se-foundation-integer-sobolev-notation]] and [[def-se-foundation-time-function-spaces]].

[F2] The scale and its negative pivot-antidual convention are supplied by [[prop-se-scale-identifications]]. For $a\in W^{2,\infty}(\Omega)$, [[lem-se-spectral-cutoff-duality]] gives $\|M_a\|_{H_D^\theta\to H_D^\theta}\le C_{\theta,\Omega}\|a\|_{W^{2,\infty}}$ for $-2\le\theta\le2$, defines the negative action by pivot duality, and gives conjugation as an isometry on these scale spaces.

[F3] On an open set, the weak product rule holds for bounded $W^{1,2}$ functions; weak differentiation is linear, local and commutes where the derivatives exist. These inputs are [[math:lem-weak-product-rule-for-bounded-sobolev-functions]] and [[math:lem-weak-derivative-linearity-locality-and-commutation]]. The Axiom of Choice in [[math:def-axiom-of-choice]] supplies their choice assumptions and those of the spectral supplier.



**Given:** The data and assumptions in the Statement.

**Goal:** Prove norm continuity of the potentials and the asserted uniform scale operations.

1.1 For $a,b\in W^{2,\infty}(\Omega)$, restrict them to $U_m=\Omega\cap B_m(0)$. This open set has finite measure, so the restrictions of $a,b$ and their first weak derivatives belong to bounded $W^{1,2}(U_m)$ classes. Applying the weak product rule first to $a,b$ and then to each product in $D_j(ab)=(D_ja)b+a(D_jb)$ gives the usual product formulas through order two on $U_m$. Locality and the test-function definition identify these formulas on $\Omega$, since every compactly supported test lies in some $U_m$. Consequently $ab\in W^{2,\infty}(\Omega)$ and $\|ab\|_{W^{2,\infty}}\le C_n\|a\|_{W^{2,\infty}}\|b\|_{W^{2,\infty}}$. Conjugating the weak test identities shows $D^\alpha\overline a=\overline{D^\alpha a}$ for $|\alpha|\le2$, so conjugation is an isometry on $W^{2,\infty}$. [F3, given]

2.1 For $s,t\in[0,T]$, the identities $w(t)^2-w(s)^2=(w(t)-w(s))(w(t)+w(s))$ and $|w(t)|^2-|w(s)|^2=(w(t)-w(s))\overline{w(t)}+w(s)\overline{(w(t)-w(s))}$, together with step 1.1, bound each potential difference in $W^{2,\infty}$ by a constant times $\|w(t)-w(s)\|_{W^{2,\infty}}(\|w(t)\|_{W^{2,\infty}}+\|w(s)\|_{W^{2,\infty}})$. Norm continuity of $w$ therefore gives norm continuity of both potentials; compactness of $[0,T]$ also gives a finite uniform bound for their $W^{2,\infty}$ norms. [F1, step 1.1]

3.1 Apply the multiplier estimate to each $V_j(t)$ and to $V_j(t)-V_j(s)$. The uniform potential bound gives uniform operator bounds, while the difference estimate and step 2.1 give operator-norm continuity. The same supplier gives conjugation as an isometry and specifies the negative-order multiplication through the pivot antidual; at nonnegative orders multiplication is the ordinary product. Multiplication is complex-linear and hence real-linear, and conjugation is real-linear. This proves all assertions. [F2, step 2.1] ∎

## Source notes

The original article is cited for attribution of the potential and scale assertion. The argument above uses the separately supplied mathematical results and does not use the article as proof of its own claim.
