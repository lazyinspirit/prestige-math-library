---
id: "ex-hodge-and-polarization-of-a-point"
kind: "example"
title: "Hodge decomposition and polarization of a point"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions", "thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms", "lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Example

For one point, $H^0(\mathrm{pt};\mathbb Q)=\mathbb Q$ has only type $(0,0)$, all higher groups vanish, and $Q(x,y)=xy$ is a rational polarization. The hard-Lefschetz map in degree zero is the identity.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.



## Verification

1.1 The degree-zero form complex of a point is $\mathbb R$, with zero differential, and all positive-degree form spaces vanish. Thus harmonic forms equal all degree-zero forms and give the claimed real and rational cohomology by scalar comparison. The type is $(0,0)$ and $L^0=I$. [given, algebra]

2.1 The integral over the positively oriented point evaluates a function at that point. Consequently $Q(x,y)=xy$, the Weil operator is $I$, and $Q(x,\bar x)=|x|^2>0$ for nonzero complex $x$. Hence it is the stated polarization. [step 1.1, given, algebra] ∎
