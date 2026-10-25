---
id: lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit
kind: lemma
title: Normalized approximate Haar functionals are positive and invariant in the limit
deps: [lem-haar-covering-ratios-are-finite-and-positive]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
proof_strategy: direct
---

## Statement

Fix $0\ne f_0\in C_c(G)^+$. Every $I_\phi$, for $0\ne\phi\in C_c(G)^+$, is nonnegative, strictly positive on nonzero arguments, positively homogeneous, exactly left invariant and satisfies $I_\phi(f_0)=1$. It is subadditive and obeys the coordinate bounds $1/(f_0:f)\le I_\phi(f)\le(f:f_0)$ for $f\ne0$, independently of $\phi$. Any coordinatewise limit obeys these same conditions, with value zero at $f=0$. Additivity is not asserted for the approximants.

## Facts & Assumptions

**Given:** $f_0,\phi$ nonzero and nonnegative; $f\ge0$.

[F1] Ratios have finite positive denominators, homogeneity, invariance, subadditivity and the displayed coordinate bounds. ([[lem-haar-covering-ratios-are-finite-and-positive]])

## Proof

**Proof technique:** direct.

1.1 Dividing the numerator identities and inequalities by $(f_0:\phi)>0$ gives $I_\phi(tf)=tI_\phi(f)$ for $t\ge0$, $I_\phi(L_af)=I_\phi(f)$ and subadditivity. The numerator at $f=f_0$ equals the denominator, hence $I_\phi(f_0)=1$; the zero numerator gives $I_\phi(0)=0$. [F1]

2.1 For each nonzero $f$ the two finite bounds in [F1] are independent of $\phi$, and the lower bound is strictly positive. Each normalization, invariance or homogeneity equation involves finitely many coordinates and defines a closed subset of the real product; each inequality does too. Therefore every coordinatewise limit stays in these sets and retains the stated bounds and properties. [F1, step 1.1] ∎

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
