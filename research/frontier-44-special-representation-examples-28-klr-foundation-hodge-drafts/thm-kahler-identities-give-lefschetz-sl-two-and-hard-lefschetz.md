---
id: "thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz"
kind: "theorem"
title: "Kähler identities give Lefschetz sl-two and hard Lefschetz"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions", "lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity", "lem-kahler-commutators-and-laplacian-type-preservation", "thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms", "lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

For a compact Kähler $n$-fold with $L=[\omega]\smile(-)$, one has $L^{n-k}:H^k(X;\mathbb R)\to H^{2n-k}(X;\mathbb R)$ isomorphically for $0\le k\le n$. Harmonic representatives transport $(L,\Lambda,H)$ to an $\mathfrak{sl}_2$ action; $\Lambda$ on cohomology means applying it to the harmonic representative, not to an arbitrary closed form. Primitive cohomology is $P^k=\ker L^{n-k+1}$, and $H^k=\bigoplus_{r\ge\max(0,k-n)}L^rP^{k-2r}$. Type $(p,q)$ decomposes with primitive components of type $(p-r,q-r)$. If $[\omega]$ is the real image of a rational class $\ell$, all these decompositions and $L$-isomorphisms are rational, and remain isomorphisms after extension to every characteristic-zero field.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The harmonic Hodge theorem is [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]], the commutators are [[lem-kahler-commutators-and-laplacian-type-preservation]], and the full string proof is [[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]].

## Proof

1.1 The Kähler commutators show $L,\Lambda$ commute with $\Delta$. The pointwise exterior decomposition projections are polynomials in these operators and therefore commute with $\Delta$ too. Thus every primitive component of a harmonic form is harmonic. The pointwise string recurrence and unique decomposition restrict to harmonic forms. The Hodge theorem identifies those forms with cohomology; $L$ becomes cup with $[\omega]$ because wedge by closed $\omega$ descends on closed forms. Each string is bijected in its two symmetric degrees, proving hard Lefschetz and primitive kernel characterization on cohomology. Since $L$ raises type by $(1,1)$ and $\Lambda$ lowers it by $(1,1)$, the decomposition has the specified types. [given, algebra]

2.1 If $\ell$ is rational, the matrix of each hard-Lefschetz map in rational bases is rational and becomes invertible over $\mathbb R$. Its determinant is a nonzero rational number, so it is already invertible over $\mathbb Q$ and every characteristic-zero extension. The kernel $P^k$ is rational; the direct sum map from the rational primitive summands becomes the isomorphism of step 1.1 over $\mathbb R$, so its rational matrix is also invertible. This proves rational decomposition and, by scalar extension, the general-field statement. The lowering operator reconstructed on a string by $\Lambda L^ru=r(n-t-r+1)L^{r-1}u$ is rational as well. It coincides over $\mathbb R$ with the transported harmonic lowering operator by uniqueness. [step 1.1, given, algebra] ∎
