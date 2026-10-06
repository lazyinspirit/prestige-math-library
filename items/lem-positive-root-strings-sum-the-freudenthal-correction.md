---
id: lem-positive-root-strings-sum-the-freudenthal-correction
kind: lemma
title: Positive root strings sum the Freudenthal correction
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-axiom-of-choice, lem-casimir-comparison-on-a-weight-vector, prop-root-vectors-shift-weight-spaces, lem-highest-weight-modules-have-weights-below-the-top-weight, prop-opposite-root-spaces-bracket-to-the-killing-dual-line, def-weight-and-weight-space-of-a-lie-algebra-representation, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§11.3, printed pp. 80--82 (Lemma 11.6: Tr_{V_μ} σ(x_α)σ(z_α) = Σ_{i≥0} m(μ+iα)(μ+iα|α) via the sl2 weight string)"
    - title: "R. Borcherds, Berkeley Math 261 course notes, page on the Freudenthal multiplicity formula"
      url: "https://math.berkeley.edu/~reb/courses/261/47.pdf"
      locator: "printed p. 146 (proof sketch of Freudenthal's formula: compute the trace of the Casimir on a weight space in two ways using SL2 weight strings for the e_if_i terms)"
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.4, printed p. 140 (C = Σ_j x_j^2 + 2Σ_{α∈R+} e_{−α}e_α + Σ_{α∈R+} h_α)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Keep the notation of
[[lem-casimir-comparison-on-a-weight-vector]]: $\mathfrak g$ is a
finite-dimensional complex semisimple Lie algebra with Cartan subalgebra
$\mathfrak h$ and positive system $\Phi^+$, the vectors
$e_\alpha\in\mathfrak g_\alpha$ and $f_\alpha\in\mathfrak g_{-\alpha}$
satisfy $B(e_\alpha,f_\alpha)=1$, so that $[e_\alpha,f_\alpha]=H_\alpha$ is
the Killing-dual vector of $\alpha$, and
$m_\lambda(\mu)=\dim L(\lambda)_\mu$ for $\lambda\in\Lambda^+$. Then for every
$\lambda\in\Lambda^+$, $\mu\in\mathfrak h^*$ and $\alpha\in\Phi^+$,
$$\operatorname{tr}_{L(\lambda)_\mu}(e_\alpha f_\alpha+f_\alpha e_\alpha)=m_\lambda(\mu)(\mu,\alpha)+2\sum_{j\ge1}m_\lambda(\mu+j\alpha)(\mu+j\alpha,\alpha),$$
the sum being finite because $L(\lambda)$ has only finitely many weights.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h,\Phi^+$, vectors $e_\alpha,f_\alpha$ with $B(e_\alpha,f_\alpha)=1$ for a fixed $\alpha\in\Phi^+$, a dominant integral weight $\lambda$, and an element $\mu\in\mathfrak h^*$.

[A1] The Axiom of Choice is assumed; it enters only through the published classification and Casimir suppliers used in [F4] ([[def-axiom-of-choice]]).

[F1] On the weight space $L(\lambda)_\nu$ the Cartan element $H_\alpha$ acts by the scalar $(\nu,\alpha)$, and $[e_\alpha,f_\alpha]=H_\alpha$ ([[lem-casimir-comparison-on-a-weight-vector]], [[prop-opposite-root-spaces-bracket-to-the-killing-dual-line]]).

[F2] $e_\alpha$ maps $L(\lambda)_\nu$ into $L(\lambda)_{\nu+\alpha}$ and $f_\alpha$ maps it into $L(\lambda)_{\nu-\alpha}$ ([[prop-root-vectors-shift-weight-spaces]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[F3] The weight set of $L(\lambda)$ is finite, since its distinct nonzero weight spaces are independent in a finite-dimensional vector space ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

[F4] $L(\lambda)$ is a finite-dimensional irreducible highest weight module of highest weight $\lambda$, so all its weight spaces are finite-dimensional and the traces below are finite sums of matrix traces ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[lem-casimir-comparison-on-a-weight-vector]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\alpha\in\Phi^+$ and set $V_i=L(\lambda)_{\mu+i\alpha}$ for every $i\in\mathbb Z$, allowing $V_i=0$. Let $A_i:V_i\to V_{i+1}$ and $B_{i+1}:V_{i+1}\to V_i$ be the actions of $e_\alpha,f_\alpha$, and put $T_i=\operatorname{tr}_{V_i}(B_{i+1}A_i)$. By [F3] there is an integer $N\ge0$ such that $V_i=0$ for all $i>N$, even if the whole line contains no weights; in particular $T_N=0$. [F2, F3, F4, A1]

2.1 For maps $A:U\to Z$ and $B:Z\to U$ between finite-dimensional spaces, $\operatorname{tr}_U(BA)=\operatorname{tr}_Z(AB)$: in bases both traces equal $\sum_{p,q}B_{pq}A_{qp}$, including zero-dimensional spaces. Applying this to $A_i,B_{i+1}$ and using $[e_\alpha,f_\alpha]=H_\alpha$ on $V_{i+1}$ gives $T_i=T_{i+1}+m_\lambda(\mu+(i+1)\alpha)(\mu+(i+1)\alpha,\alpha)$. Telescoping from $i=0$ to $N$ therefore gives $T_0=\sum_{j\ge1}m_\lambda(\mu+j\alpha)(\mu+j\alpha,\alpha)$, with only finitely many nonzero terms. [F1, F4, step 1.1, algebra]

3.1 On $V_0$, the commutator identity gives $\operatorname{tr}(e_\alpha f_\alpha)=\operatorname{tr}(f_\alpha e_\alpha)+m_\lambda(\mu)(\mu,\alpha)=T_0+m_\lambda(\mu)(\mu,\alpha)$. Adding the trace of $f_\alpha e_\alpha$ and substituting step 2.1 proves the asserted formula, including absent weights and an empty line. [F1, step 1.1, step 2.1, algebra] ∎
