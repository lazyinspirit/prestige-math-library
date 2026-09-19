---
id: ex-riesz-projection-for-a-matrix-with-separated-spectrum
kind: example
title: Riesz projection for a matrix with separated spectrum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-riesz-spectral-projection-properties, def-riesz-spectral-projection, ex-spectrum-in-a-finite-dimensional-matrix-algebra, thm-circle-integrals-of-integer-monomials, thm-uniform-limit-interchanges-complex-line-integrals, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — equation (5.26) and Theorem 5.25(vi), printed pp. 226–228"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 48–50"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$T := \operatorname{diag}(1,2) \in M_2(\mathbb C)$, acting on the standard basis
$e_1,e_2$ of $\mathbb C^2$. Its spectrum is $\sigma(T) = \{1,2\}$
([[ex-spectrum-in-a-finite-dimensional-matrix-algebra]]), the subset
$E := \{1\}$ is clopen in the spectrum, and the Riesz spectral projection
([[def-riesz-spectral-projection]]) is

$$P_E = \operatorname{diag}(1,0) \in M_2(\mathbb C),$$

the operator of orthogonal projection onto $\mathbb C e_1$. Consequently
$\operatorname{ran}(P_E) = \mathbb C e_1$ and $\ker(P_E) = \mathbb C e_2$ are
the two invariant summands of
[[thm-riesz-spectral-projection-properties]], and the restrictions of $T$ to
them have spectra $\{1\}$ and $\{2\}$ respectively.

## Facts & Assumptions

**Given:** The Axiom of Choice, the diagonal matrix $T = \operatorname{diag}(1,2)$, the spectral subset $E = \{1\}$, and the circle $\gamma(t) := 1 + \tfrac12e^{it}$, $0 \le t \le 2\pi$, which separates $1$ from $2$ and lies in the resolvent set of $T$.

[L1] $M_2(\mathbb C)$ with the operator norm is a unital Banach algebra and $\sigma(A) = \{\lambda : \det(\lambda I - A) = 0\}$ ([[ex-spectrum-in-a-finite-dimensional-matrix-algebra]]).

[L2] The Riesz projection is the calculus value of the locally constant function $\chi_E$, equivalently the resolvent contour integral $\frac{1}{2\pi i}\int_\Gamma\chi_E(z)(zI-T)^{-1}dz$ over a cycle with index $1$ on $E$ and $0$ on $\sigma(T)\setminus E$ ([[def-riesz-spectral-projection]]).

[L3] For a closed cycle, $\frac{1}{2\pi i}\int_\gamma(z-a)^mdz$ equals $1$ for $m = -1$ and $0$ otherwise when $\gamma$ winds once around $a$ ([[thm-circle-integrals-of-integer-monomials]]).

[L4] A uniformly convergent sequence of continuous functions on a contour may
be integrated term by term
([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L5] The range and kernel of a Riesz projection are closed invariant summands, and the restriction spectra are the corresponding spectral parts ([[thm-riesz-spectral-projection-properties]]).

## Verification

**Proof technique:** direct.

1.1 Resolvent: for $z \notin \{1,2\}$ one has $(zI-T)^{-1} = \operatorname{diag}((z-1)^{-1},(z-2)^{-1})$, and the circle $\gamma$ of radius $1/2$ about $1$ avoids both spectral points; on it the resolvent is the diagonal pair of scalar functions $1/(z-1)$ and $1/(z-2)$. [L1, algebra]

2.1 Contour integral: by [L3], $\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-1} = 1$ because $\gamma$ is the circle about $1$. On this circle $|z-1|=1/2$, and $\frac1{z-2}=-\frac1{1-(z-1)}=-\sum_{n\ge0}(z-1)^n$ uniformly: the tail after degree $N$ has modulus at most $2^{-N-1}/(1-1/2)$. Each term has integral zero by [L3], so [L4] gives $\int_\gamma dz/(z-2)=0$. Hence $P_E = \frac{1}{2\pi i}\int_\gamma(zI-T)^{-1}dz = \operatorname{diag}(1,0)$, the locally constant characteristic function of $\{1\}$ evaluated on the diagonal. [step 1.1, L2, L3, L4, algebra]

3.1 The projection $\operatorname{diag}(1,0)$ is idempotent, commutes with $T$ and has $\operatorname{ran}(P_E) = \mathbb C e_1$, $\ker(P_E) = \mathbb C e_2$; both are $T$-invariant, $T|_{\mathbb C e_1}$ is multiplication by $1$ and $T|_{\mathbb C e_2}$ is multiplication by $2$, so the two restrictions have spectra $\{1\}$ and $\{2\}$; this agrees with [L5] and the separation of the spectral parts. [step 2.1, L5, L1, algebra] ∎
