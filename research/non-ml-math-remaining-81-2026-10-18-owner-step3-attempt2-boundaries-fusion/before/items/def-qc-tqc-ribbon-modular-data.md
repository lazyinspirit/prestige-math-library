---
id: def-qc-tqc-ribbon-modular-data
kind: definition
title: Unitary ribbon data
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-qc-tqc-unitary-fusion-category, def-twist-and-ribbon-structure, def-braiding]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10, Definition 8.10.1, printed p. 217: balancing and ribbon dual-compatibility."
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.3.10, PDF p. 8: unitary monoidal structure and unitary associator/unitors."
---

## Definition

A **unitary ribbon fusion category** is a unitary fusion category with a
unitary braiding and a ribbon structure in the sense of
[[def-twist-and-ribbon-structure]]. Thus the twist $\theta$ is a natural
automorphism of the identity satisfying the balancing identity and the
dual-compatibility condition of that root definition, and each component is
unitary: $\theta_X^\dagger=\theta_X^{-1}$. A ribbon structure is additional
data; it is not supplied by fusion rules or by a braid-group representation
alone.

## Remarks

**The twist is unitary under these hypotheses.** Let $s$ be simple, choose its
left dual $s^\vee$, and let $\eta:\mathbf1\to s\otimes s^\vee$ be the
coevaluation. A nonzero endomorphism of $s$ has zero kernel and image $s$, so
it is an isomorphism and $\operatorname{End}(s)$ is a division algebra.
Local finiteness makes it finite-dimensional over $\mathbb C$. For any
$a\in\operatorname{End}(s)$, finite-dimensionality gives a nonzero polynomial
$p$ with $p(a)=0$. Factor $p$ over $\mathbb C$; since a division algebra has no
zero divisors, one linear factor must vanish, so
$\operatorname{End}(s)=\mathbb C\operatorname{id}_s$. Write
$\theta_s=\lambda\operatorname{id}_s$. The ribbon duality condition and
linearity of dualization give $\theta_{s^\vee}=\lambda\operatorname{id}_{s^\vee}$.
Naturality, $\theta_{\mathbf1}=\operatorname{id}_{\mathbf1}$, and balancing give
$$\eta=\theta_{s\otimes s^\vee}\circ\eta =\lambda^2\,c_{s^\vee,s}\circ c_{s,s^\vee}\circ\eta.$$
The double braiding is unitary, so it preserves the norm of $\eta$. The
zig-zag identity gives $\eta\ne0$; hence the equality implies
$\|\eta\|=|\lambda|^2\|\eta\|$ and $|\lambda|=1$. Thus $\theta_s$ is unitary
for every simple $s$. For any object, decompose it as a finite orthogonal sum
of simples; naturality makes its twist block diagonal with these unitary
components, so $\theta_X^\dagger\theta_X=\operatorname{id}_X$.

