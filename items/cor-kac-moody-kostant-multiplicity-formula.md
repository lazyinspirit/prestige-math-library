---
id: cor-kac-moody-kostant-multiplicity-formula
kind: corollary
title: Kac Moody Kostant multiplicity formula
deps: ["thm-weyl-kac-character-formula", "def-generalized-kostant-partition-function"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kleshchev, Corollary 10.2.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Section 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a finite symmetrizable GCM, dominant integral $\Lambda$, and any $\mu\in\mathfrak h^*$,
$$\dim L(\Lambda)_\mu=\sum_{w\in W}\det(w)K\bigl(w(\Lambda+\rho)-(\mu+\rho)\bigr).$$
Only finitely many terms are nonzero.

## Facts & Assumptions

**Given:** The stated datum, highest weight and target weight.

[F1] [[thm-weyl-kac-character-formula]] gives the formal character quotient and its reduced-word height bound.

[F2] [[def-generalized-kostant-partition-function]] defines $K$ by the inverse denominator, with finite values, $K(0)=1$ and zero off $Q^+$.

## Proof

1.1 Put $\lambda=\Lambda+\rho$ and $\beta=\Lambda-\mu$. A contributing $w$ must satisfy $\gamma=w\lambda-(\mu+\rho)\in Q^+$ by F2. F1's height bound gives $\delta_w=\lambda-w\lambda\in Q^+$ and $\operatorname{ht}(\delta_w)\ge\ell(w)$. Since $\beta=\delta_w+\gamma$, no $w$ contributes unless $\beta\in Q^+$. If it does, $\ell(w)\le\operatorname{ht}(\beta)$, so only finitely many words in the finite simple-reflection alphabet, and hence finitely many elements, can contribute. [F1, F2, algebra]

2.1 Expand F1's inverse product using F2. The term indexed by $(w,\gamma)$ has exponent $w(\Lambda+\rho)-\rho-\gamma$ and coefficient $\det(w)K(\gamma)$. Equating this exponent to $\mu$ forces exactly the argument of $K$ in the statement. The coefficient extraction is finite by step 1.1, so gives the displayed identity. For $\mu=\Lambda$, step 1.1 forces $\ell(w)=0$, and the value is $K(0)=1$. Outside the cone every summand and the corresponding weight space are zero. There is no analytic summation or choice of an infinite family. [F1, F2, step 1.1, algebra] ∎
