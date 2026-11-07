---
id: ex-nonconstant-abelian-variety-over-function-field
kind: example
title: "A function-field elliptic curve with nonconstant short-Weierstrass j-invariant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-plane-cubic-chord-tangent-group-law
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume the Axiom of Choice. Let $k=\mathbb Z/5\mathbb Z$, let $t$ be transcendental over $k$, and put $K=k(t)$. Let $E/K$ be the projective short-Weierstrass cubic $Y^2Z=X^3+tXZ^2+Z^3$ with origin $O=[0:1:0]$. For a short-Weierstrass model $y^2=x^3+ax+b$ in characteristic different from $2$ and $3$, use $\Delta=-16(4a^3+27b^2)$ and $j=1728\cdot4a^3/(4a^3+27b^2)$. Then $k$ is the exact constant field of $K$, and $E$ is a smooth, proper, geometrically connected genus-one curve with origin, hence an elliptic curve and an abelian variety over $K$; its $j$-invariant $j_E=1728\cdot4t^3/(4t^3+27)$ does not belong to $k$.

## Example references

[[thm-plane-cubic-chord-tangent-group-law]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC, $k=\mathbb Z/5\mathbb Z$, a transcendental element $t$, the rational function field $K=k(t)$, and the displayed short-Weierstrass cubic.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] If $\operatorname{char}k\ne2,3$ and $4a^3+27b^2\ne0$, the projective cubic $Y^2Z=X^3+aXZ^2+bZ^3$ with origin $[0:1:0]$ is a smooth projective geometrically integral genus-one curve whose chord-tangent law makes it an abelian variety. [[thm-plane-cubic-chord-tangent-group-law]]

## Proof

1.1 Let $r=f(t)/g(t)\in k(t)$ be algebraic over $k$, with coprime $f,g\in k[T]$ and $g\ne0$. If $r\notin k$, the polynomial $f(T)-r g(T)\in k(r)[T]$ is nonzero: if it were zero, comparing a nonzero coefficient of $g$ would give $r\in k$. It has $t$ as a root, so $t$ is algebraic over $k(r)$. Since $r$ is algebraic over the finite field $k$, $k(r)/k$ is algebraic and transitivity would make $t$ algebraic over $k$, a contradiction. Thus every element of $K$ algebraic over $k$ already belongs to $k$, so $k$ is the exact constant field. [given, construct, algebra]

2.1 The field $k$ has characteristic $5$, so $5\ne2,3$. The polynomial $4t^3+27$ is nonzero in $k[t]$ because its leading coefficient $4$ is nonzero; hence $\Delta_E=-16(4t^3+27)\ne0$ in $K$. Apply [F1] with $a=t$ and $b=1$ to obtain the elliptic curve structure on $E/K$. [A1, F1, given, algebra]

3.1 In $k$, $1728\equiv3$ and $27\equiv2$, so $j_E=2t^3/(4t^3+2)$. If $j_E=c\in k$, then $2t^3=c(4t^3+2)$ as polynomials; the constant coefficient gives $2c=0$, hence $c=0$, while the $t^3$ coefficient would then give $2=0$, impossible in $k$. Therefore $j_E\notin k$. [given, step 2.1, algebra] ∎

## Axiom use

AC is inherited from the stated plane-cubic supplier [F1]. The rational-function and coefficient calculations use no choice principle.

