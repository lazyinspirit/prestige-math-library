---
id: lem-relations-among-the-five-spectral-parts
kind: lemma
title: Relations among the five spectral parts
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-point-continuous-and-residual-spectrum, def-approximate-point-and-compression-spectrum, thm-bounded-below-iff-injective-with-closed-range, def-dependent-choice, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-bounded-below-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.1, printed pp. 219–221"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.3, printed pp. 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$ be a
nonzero complex Banach space and let $T \in \mathcal B(X)$, with the point,
continuous and residual spectra of
[[def-point-continuous-and-residual-spectrum]] and the approximate point and
compression spectra of [[def-approximate-point-and-compression-spectrum]]. Then

1. $\sigma_p(T)$, $\sigma_c(T)$ and $\sigma_r(T)$ are pairwise disjoint and
   $\sigma_p(T) \cup \sigma_c(T) \cup \sigma_r(T) = \sigma(T)$;
2. $\sigma_r(T) = \sigma_{cp}(T)\setminus\sigma_p(T)$ and
   $\sigma_p(T) \subseteq \sigma_{ap}(T)$;
3. $\sigma(T) = \sigma_{ap}(T) \cup \sigma_{cp}(T)$.

The three classical parts are a partition of the spectrum; the approximate
point and compression spectra cover it as well, but may overlap it and each
other.

## Facts & Assumptions

**Given:** An assumed Axiom of Dependent Choice, a nonzero complex Banach space $X$, a bounded $T \in \mathcal B(X)$ and $\lambda \in \mathbb C$; abbreviate $T_\lambda := T - \lambda I_X$.

[L1] The three classical cases are exhaustive and exclusive for $\lambda \in \sigma(T)$: $T_\lambda$ fails to be injective, or is injective with dense non-surjective range, or is injective with non-dense range ([[def-point-continuous-and-residual-spectrum]]).

[L2] $\lambda \in \sigma_{ap}(T)$ when $T_\lambda$ is not bounded below, and $\lambda \in \sigma_{cp}(T)$ when $T_\lambda$ has non-dense range ([[def-approximate-point-and-compression-spectrum]]).

[L3] Under Dependent Choice, $T_\lambda$ is bounded below if and only if it is injective with closed range ([[thm-bounded-below-iff-injective-with-closed-range]]).

[L4] $\lambda \in \sigma(T)$ exactly when $T_\lambda$ is not invertible in $\mathcal B(X)$ ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L5] The Axiom of Dependent Choice is the standing hypothesis of the statement ([[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $T_\lambda$ is not injective then it is not bounded below: a bounded-below $T_\lambda$ satisfies $c\|x\| \le \|T_\lambda x\|$ for $c>0$, so $T_\lambda x = 0$ forces $x = 0$. Hence $\sigma_p(T) \subseteq \sigma_{ap}(T)$, which is the second inclusion of claim 2. [L2, L3, L5, algebra]

1.2 If $\lambda \in \sigma_r(T)$ then, by definition, $T_\lambda$ is
injective with non-dense range. Hence $\lambda\in\sigma_{cp}(T)$ and
$\lambda\notin\sigma_p(T)$, so
$\sigma_r(T)\subseteq\sigma_{cp}(T)\setminus\sigma_p(T)$. Conversely, if
$\lambda\in\sigma_{cp}(T)\setminus\sigma_p(T)$, then $T_\lambda$ has
non-dense range and is injective, which is exactly
$\lambda\in\sigma_r(T)$. Thus
$\sigma_r(T)=\sigma_{cp}(T)\setminus\sigma_p(T)$. [L1, L2]

1.3 If $\lambda \notin \sigma(T)$ then $T_\lambda$ is invertible, hence bounded below and of dense range; so $\lambda \notin \sigma_{ap}(T) \cup \sigma_{cp}(T)$. [L2, L4, algebra]

1.4 Claim 3, other inclusion: let $\lambda \in \sigma(T)$. If $T_\lambda$ is not bounded below then $\lambda \in \sigma_{ap}(T)$. If it is bounded below, then by [L3] it is injective with closed range; were the range also dense, closedness would give range $= X$, so $T_\lambda$ would be bijective with bounded inverse, hence invertible, contradicting [L4]; therefore the range is not dense and $\lambda \in \sigma_{cp}(T)$. [L2, L3, L4]

2.1 Claim 3, one inclusion: $\sigma_{ap}(T)\cup\sigma_{cp}(T) \subseteq \sigma(T)$ is the contrapositive of [step 1.3]. [step 1.3]

3.1 Claim 1: for $\lambda \in \sigma(T)$ the operator $T_\lambda$ is not invertible by [L4]; by [L1] it falls into exactly one of the three classical cases, so the three sets are disjoint and their union is $\sigma(T)$. The covering half of claim 3 is [step 1.4] and the reverse half is [step 2.1]; claim 2 consists of [step 1.1] and [step 1.2]. [step 1.1, step 1.2, step 1.4, step 2.1, L1, L4] ∎
