---
id: thm-wiles-semistable-elliptic-curves-over-q-are-modular
kind: theorem
title: "Wiles: semistable elliptic curves over Q are modular"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 38
axiom_use: The source proof is not reconstructed, so the exact Choice, Dependent Choice, and Countable Choice uses are unaudited; no choice-free proof is claimed.
deps:
  - def-weierstrass-model-and-discriminant-invariants
  - thm-taylor-wiles-minimal-hecke-algebra-complete-intersection-and-r-equals-t
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - thm-delignes-galois-representation-has-eigenform-frobenius-polynomial
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Andrew Wiles, Modular Elliptic Curves and Fermat's Last Theorem, Theorems 0.2 and 0.4 and Chapter 5
      url: https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf
verification:
  precheck: blocked
---

## Statement

Let $E/\mathbb Q$ be an elliptic curve, meaning a smooth projective geometrically integral curve of genus one with a specified rational point. Call its reduction at a prime good when the minimal Weierstrass cubic is smooth, and multiplicative when that cubic has a node, an ordinary double point whose tangent cone splits into two distinct lines over an algebraic closure. Call $E$ semistable when it has good or multiplicative reduction at every prime. Define $\mathbb H=\{z\in\mathbb C:\operatorname{Im}(z)>0\}$, $\Gamma_0(N)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{SL}_2(\mathbb Z):N\mid c\right\}$, and let $X_0(N)$ be the smooth projective compactification over $\mathbb Q$ of $\Gamma_0(N)\backslash\mathbb H$. The curve $E$ is modular when there is a nonconstant morphism over $\mathbb Q$ from $X_0(N)$ to $E$ for some integer $N\ge1$. Every semistable elliptic curve over $\mathbb Q$ is modular.

## Statement references

[[thm-taylor-wiles-minimal-hecke-algebra-complete-intersection-and-r-equals-t]]

[[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]

[[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]

[[def-weierstrass-model-and-discriminant-invariants]]

[Andrew Wiles, *Modular Elliptic Curves and Fermat's Last Theorem*, Introduction Theorem 0.4 and Chapter 5 Theorem 5.2, printed pp. 448 and 542–544](https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf)

[J. S. Milne, *Elliptic Curves*, Chapter IV §10, printed pp. 164–165](https://www.jmilne.org/math/Books/ectext6.pdf)

## Facts & Assumptions

**Given:** The elliptic curve and reduction convention in the Statement.

[F1] [[thm-taylor-wiles-minimal-hecke-algebra-complete-intersection-and-r-equals-t]]: the current Statement gives the minimal $R_{\min}\to T_{\min}$ interface; its proof remains escalated.

[F2] [[def-weierstrass-model-and-discriminant-invariants]]: a minimal Weierstrass model is an integral equation with least discriminant valuation among integral equations for the same pointed curve.

[L1] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the current proof depends on the modular-curve cohomology realization item, whose proof is not supplied.

[L2] [[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]: the local decomposition and residue bridges are now supplied, but its modular-cohomological representation construction and Eichler–Shimura congruence inputs remain held. This does not supply a modularity proof.

## Proof status

No local proof is supplied in this carrier. Wiles's Introduction Theorem 0.4 and the complete Chapter 5 proof of Theorem 5.2 were inspected. That proof invokes Langlands–Tunnell, Wiles's separate modularity-lifting Theorem 0.2, Serre's isogeny theorem, and, in the reducible-mod-3 case, the $X(5)$ twist with a Hilbert-irreducibility and Chebotarev argument. The proof of Theorem 0.2 in Chapters 2–3 was not reconstructed; consequently the axiom audit is open and no choice-free branch is claimed. These are significant local proof obligations; see batch 106 notes for exact proposed suppliers and placement. This item remains escalated.
