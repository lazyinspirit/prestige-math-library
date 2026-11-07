---
id: thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes
kind: theorem
title: "Galois H1 of a smooth connected group over a finite field vanishes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-absolute-galois-group-of-a-field
  - def-axiom-of-choice
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-finite-field-and-its-order
  - def-group-scheme-over-a-field
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - lem-lang-map-surjective-for-smooth-connected-group-over-finite-field
  - thm-absolute-galois-group-of-finite-field-is-procyclic
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.9"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "B. Poonen, Rational Points on Varieties, Theorem 5.12.19(a) and proof"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k$ be a finite field and $G/k$ a smooth connected separated
group scheme of finite type. Give $G(k_s)$ the discrete topology and its
natural continuous $G_k$-action. Then the pointed set of continuous Galois
1-cocycles modulo coboundaries is trivial:
$$H^1_{\mathrm{cont}}(G_k,G(k_s))=\{1\}.$$
Here a cocycle is a continuous function $z:G_k\to G(k_s)$ satisfying
$z(gh)=g(z(h))z(g)$, and a coboundary has the form
$z_b(g)=g(b)b^{-1}$.

## Statement references

[[def-finite-field-and-its-order]]

[[def-group-scheme-over-a-field]]

[[def-absolute-galois-group-of-a-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[[lem-lang-map-surjective-for-smooth-connected-group-over-finite-field]]

[[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]

[[cor-algebraic-extensions-of-perfect-fields-are-separable]]

[J. S. Milne, *Arithmetic Duality Theorems*, 2nd ed., Appendix A.9](https://www.jmilne.org/math/Books/ADTnot.pdf)

[B. Poonen, *Rational Points on Varieties*, Theorem 5.12.19(a) and proof](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** AC, a finite field $k$, a smooth connected separated finite-type
group scheme $G/k$, and its separable closure $k_s$.

[A1] The Axiom of Choice is required by the cited Lang supplier.
([[def-axiom-of-choice]])

[F1] $G_k\cong\widehat{\mathbb Z}$ and the powers of arithmetic Frobenius
$\varphi:x\mapsto x^{|k|}$ are dense.
([[thm-absolute-galois-group-of-finite-field-is-procyclic]])

[F2] The Lang map $b\mapsto\varphi(b)b^{-1}$ is surjective on $G(\bar k)$.
([[lem-lang-map-surjective-for-smooth-connected-group-over-finite-field]])

[F3] A finite field is perfect, so every algebraic extension of it is separable; in particular its separable closure equals an algebraic closure, and $G(k_s)=G(\bar k)$.
([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]],
[[cor-algebraic-extensions-of-perfect-fields-are-separable]])

[F4] The group-scheme structure gives $G(R)$ a group law for every $k$-algebra $R$, including $R=k_s$.
([[def-group-scheme-over-a-field]])

## Proof

**Proof technique:** use Lang surjectivity to match a cocycle on the dense
cyclic subgroup.

**Given:** The data above and a continuous cocycle $z$ from the Statement.

1.1 By [F3], identify $k_s=\bar k$. Put $a=z(\varphi)$. By [F2], choose $b\in G(k_s)$ with $\varphi(b)b^{-1}=a$. The coboundary $z_b(g)=g(b)b^{-1}$ then agrees with $z$ at $\varphi$. [A1, F2, F3, F4, given, choose]

2.1 The cocycle identity in the Statement recursively determines $z(\varphi^m)$ from $z(\varphi)$ for each nonnegative integer $m$; the same identity holds for $z_b$. Since the two cocycles agree at $\varphi$, they agree on every nonnegative power of $\varphi$. [given, step 1.1, algebra]

3.1 The powers in step 2.1 are dense by [F1]. Both cocycles are continuous into the discrete Hausdorff group $G(k_s)$, so their equality set is closed and contains a dense subset; hence $z=z_b$ on all of $G_k$. Every cocycle is therefore a coboundary and the pointed set is trivial. AC is used only through [A1] and [F2]. [A1, F1, F2, step 2.1] ∎