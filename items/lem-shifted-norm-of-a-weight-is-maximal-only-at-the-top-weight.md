---
id: lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight
kind: lemma
title: The shifted norm of a weight is maximal only at the top weight
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-integral-dominant-and-strictly-dominant-weights, def-root-reflections-and-the-weyl-group-action, def-weight-and-weight-space-of-a-lie-algebra-representation, def-weyl-vector-rho-for-a-chosen-positive-system, lem-dominant-weights-are-maxima-of-their-weyl-orbits, lem-finite-weyl-closed-chambers-and-stabilizers, lem-highest-weight-modules-have-weights-below-the-top-weight, lem-positive-root-pairings-of-a-dominant-integral-weight, lem-rho-minus-w-rho-is-a-sum-of-positive-roots, lem-simple-reflections-preserve-weight-multiplicities, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, lem-finite-weyl-positive-roots-and-simple-reflections, lem-finite-weyl-strong-exchange-and-deletion]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.4, printed p. 141 (a dominant subweight μ = λ+ρ−β with β ∈ Q+, β ≠ 0 satisfies |μ|² < |λ+ρ|² via 2(λ+ρ,β) − |β|² > 0)"
    - title: "R. Borcherds, Berkeley Math 261 course notes, page on the Freudenthal multiplicity formula"
      url: "https://math.berkeley.edu/~reb/courses/261/47.pdf"
      locator: "printed p. 146 (E8 example: the norm-difference coefficients 36 and 96 are positive at subweights and vanish only at the top weight)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$\lambda\in\Lambda^+$ be a dominant integral weight and let $\mu$ be a weight
of the finite-dimensional simple module $L(\lambda)$
([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]],
[[def-weight-and-weight-space-of-a-lie-algebra-representation]]). With $\rho$
the Weyl vector ([[def-weyl-vector-rho-for-a-chosen-positive-system]]),
$$(\mu+\rho,\mu+\rho)\le(\lambda+\rho,\lambda+\rho),$$
with equality if and only if $\mu=\lambda$. Consequently
$(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)$ is strictly positive for
every weight $\mu\ne\lambda$ of $L(\lambda)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight
$\lambda\in\Lambda^+$, a weight $\mu$ of $L(\lambda)$, the form
$(\ ,\ )$ on $E=\operatorname{span}_{\mathbb R}\Phi$, the Weyl group $W$ and
the Weyl vector $\rho$.

[A1] The Axiom of Choice is assumed; it enters through the published
weight-multiplicity and highest-weight suppliers, which carry it
([[def-axiom-of-choice]]).

[F1] Every $W$-orbit in $E$ has exactly one point in the closed chamber
$\overline{\mathcal C}$, so every weight has a unique dominant representative
([[lem-finite-weyl-closed-chambers-and-stabilizers]],
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]]), and the
weight multiplicities of $L(\lambda)$ are $W$-invariant, so the weight set of
$L(\lambda)$ is stable under $W$
([[lem-simple-reflections-preserve-weight-multiplicities]]).

[F2] Every weight $\nu$ of $L(\lambda)$ satisfies $\nu\le\lambda$, that is,
$\lambda-\nu\in Q_+$
([[lem-highest-weight-modules-have-weights-below-the-top-weight]],
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[F3] For every $w\in W$ one has
$\rho-w\rho=\sum_{\alpha\in\Phi^+,w^{-1}\alpha<0}\alpha\in Q_+$
([[lem-rho-minus-w-rho-is-a-sum-of-positive-roots]]).

[F4] The action of $W$ on $E$ is by isometries of $(\ ,\ )$: $(w\nu,w\eta)=(\nu,\eta)$
([[def-finite-weyl-root-system-lattice-and-chamber-conventions]],
[[def-root-reflections-and-the-weyl-group-action]]).

[F5] Pairings against $Q_+$: for $\delta\in Q_+\setminus\{0\}$ one has
$(\delta,\rho)>0$; for $\delta\in Q_+$ and a dominant $\nu$ one has
$(\delta,\nu)\ge0$, because writing $\delta=\sum_in_i\alpha_i$ with $n_i\ge0$
gives $(\alpha_i,\nu)=\frac{(\alpha_i,\alpha_i)}{2}\langle\nu,\alpha_i^\vee\rangle$
and $\langle\rho,\alpha_i^\vee\rangle>0$, so in particular $\mu^++\rho$ is
strictly dominant ([[lem-positive-root-pairings-of-a-dominant-integral-weight]],
[[def-integral-dominant-and-strictly-dominant-weights]]).

[F6] For a dominant integral $\lambda$ and $v\in W$ with reduced expression
$v=s_{i_1}\cdots s_{i_k}$ one has
$\lambda-v\lambda=\sum_{l=1}^k\langle\lambda,\alpha_{i_l}^\vee\rangle\,\beta_l$
with every $\beta_l=s_{i_1}\cdots s_{i_{l-1}}\alpha_{i_l}$ a positive root and
every coefficient $\langle\lambda,\alpha_{i_l}^\vee\rangle\ge0$; this is the
reduced-word telescoping with prefix positivity from
[[lem-finite-weyl-strong-exchange-and-deletion]] and
[[lem-finite-weyl-positive-roots-and-simple-reflections]].

## Proof

**Proof technique:** direct.

1.1 Let $\mu^+$ be the unique dominant representative of the $W$-orbit of $\mu$, which exists by [F1], and note that $\mu^+$ is also a weight of $L(\lambda)$ by the $W$-invariance in [F1]; choose $w\in W$ with $\mu^+=w\mu$ and put $\delta:=\lambda-\mu^+$, so that $\delta\in Q_+$ by [F2], and put $\gamma:=\rho-w\rho$, so that $\gamma\in Q_+$ by [F3]; since $w$ is an isometry by [F4], $(\mu+\rho,\mu+\rho)=(w(\mu+\rho),w(\mu+\rho))=(\mu^++w\rho,\mu^++w\rho)$ and $\mu^++w\rho=\mu^++\rho-\gamma$. [F1, F2, F3, F4, algebra, A1]

2.1 With $D:=(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)$ steps 1.1 gives $D=(\mu^++\rho+\delta,\mu^++\rho+\delta)-(\mu^++\rho-\gamma,\mu^++\rho-\gamma)=(\delta+\gamma,2(\mu^++\rho)+\delta-\gamma)$, and expanding this bilinear expression yields $D=2(\delta,\mu^++\rho)+(\delta,\delta)+2(\gamma,\mu^+)+\bigl(2(\gamma,\rho)-(\gamma,\gamma)\bigr)$; the last bracket is $(\gamma,2\rho-\gamma)=(\rho-w\rho,\rho+w\rho)=(\rho,\rho)-(w\rho,w\rho)=0$ by symmetry and the isometry property [F4]. [F4, step 1.1, algebra]

3.1 Hence $D=2(\delta,\mu^++\rho)+(\delta,\delta)+2(\gamma,\mu^+)$ with $\delta,\gamma\in Q_+$ by step 1.1; the first term is nonnegative and the third is nonnegative because $\mu^+$ is dominant and $\mu^++\rho$ is strictly dominant, while $(\delta,\delta)\ge0$ by positive definiteness of the form, so $D\ge0$; if $\delta\ne0$ then $D\ge2(\delta,\rho)>0$ by [F5], so equality forces $\delta=0$, that is, $\mu^+=\lambda$. [F5, step 2.1, algebra]

4.1 Suppose $\delta=0$, so $\mu^+=\lambda$ and $\mu=w^{-1}\lambda$; then steps 1.1 and 2.1 give $D=2(\gamma,\lambda)=2\bigl((\rho,\lambda)-(w\rho,\lambda)\bigr)=2(\rho,\lambda-w^{-1}\lambda)=2(\rho,\lambda-\mu)$, and [F6] applied to $v=w^{-1}$ writes $\lambda-\mu=\sum_l\langle\lambda,\alpha_{i_l}^\vee\rangle\beta_l$ with $\beta_l\in\Phi^+$ and coefficients $\ge0$, so $D=2\sum_l\langle\lambda,\alpha_{i_l}^\vee\rangle(\rho,\beta_l)\ge0$; by [F5] each $(\rho,\beta_l)>0$, and the sum vanishes exactly when $\lambda-\mu=0$, that is, when $\mu=\lambda$, while for $w=1$ and $\mu=\lambda$ clearly $D=0$; combining with step 3.1, $D\ge0$ with equality exactly for $\mu=\lambda$, and $D>0$ for every weight $\mu\ne\lambda$. [F5, F6, step 1.1, step 2.1, step 3.1, algebra] ∎ 