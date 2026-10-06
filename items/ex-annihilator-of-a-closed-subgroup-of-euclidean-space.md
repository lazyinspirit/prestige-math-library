---
id: ex-annihilator-of-a-closed-subgroup-of-euclidean-space
kind: example
title: Annihilators of closed subgroups of Euclidean space
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 21
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-annihilator-of-a-subgroup, def-generated-subgroup, def-homeomorphism-and-open-maps, def-integers, def-invertible-matrix-and-general-linear-group, def-kernel-and-image-of-group-homomorphism, def-linear-combination-and-span, def-linear-independence, def-matrix-product-and-identity-matrix, def-pontryagin-dual-and-compact-open-topology, def-quotient-group, def-quotient-topology, def-standard-topologies, def-subgroup, def-transpose-of-a-matrix, lem-compact-open-character-group-operations-are-continuous, lem-continuous-characters-of-the-real-line-are-exponentials, lem-duals-of-finite-products-and-discrete-direct-sums, lem-standard-basis-of-f-n, prop-transpose-laws, thm-dual-of-a-closed-subgroup-is-the-dual-quotient, thm-heine-borel-rn, thm-integers-modulo-n-basic-algebra, thm-kernel-and-fibres-of-complex-exponential, thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator, thm-product-universal-property, thm-quotient-universal-property, thm-real-square-matrix-invertible-iff-determinant-nonzero]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Sections 35A-35C, printed pp. 138-140: finite products, quotient duals and the topological real-line dual. The annihilator formulas are computed here.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Example C.14(2), printed p. 438: exponential parametrisation of real-line characters.'
proof_strategy: direct
verification:
  precheck: pass
---
## Example

Let $n\ge0$ and $0\le k\le n$ be integers. Coordinates are indexed by $0\le i<n$ ([[lem-standard-basis-of-f-n]]). Work in $G=\mathbb R^n$ with the dual identified with $\mathbb R^n$ by $\xi\mapsto(x\mapsto e^{2\pi i\,\xi\cdot x})$, computed below from the classification of characters of the line and the product-dual identification ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-duals-of-finite-products-and-discrete-direct-sums]]). No choice principle is used by the computations below; the general quotient-dual and closed-subgroup identifications cited in the dependency list give the context of clause (2), whose coordinate content is computed directly here.

(1) If $V\le\mathbb R^n$ is a linear subspace, then $V^\perp=\{\xi:\xi\cdot v\in\mathbb Z\ \text{for all}\ v\in V\}$; when $V=\mathbb R^k\times\{0\}^{n-k}$ this is $\{0\}^k\times\mathbb R^{n-k}$, the coarse orthogonal complement, whereas for the lattice $H=\mathbb Z^k\times\{0\}^{n-k}$ it is $\mathbb Z^k\times\mathbb R^{n-k}$. For $k=n$ the annihilator of the full-rank lattice $\mathbb Z^n$ is again the lattice $\mathbb Z^n$, while for $k<n$ the annihilator contains the line $\mathbb R\,e_k$ and is not discrete; so an annihilator is not in general an orthogonal complement.

(2) For $H=\mathbb Z^k\times\{0\}^{n-k}$ the quotient $\mathbb R^n/H$ is identified with $(\mathbb R/\mathbb Z)^k\times\mathbb R^{n-k}$, and its characters are computed on the standard coordinates by the discrete Fourier pairing: its characters are exactly the maps $x+H\mapsto e^{2\pi i\,\xi\cdot x}$ with $\xi\in\mathbb Z^k\times\mathbb R^{n-k}$, whose pullbacks are precisely the characters of $\mathbb R^n$ trivial on $H$.

(3) If $A$ is an invertible $n\times n$ real matrix and $H=A\mathbb Z^n$, then $H^\perp=A^{-T}\mathbb Z^n$ with $A^{-T}:=(A^{-1})^T=(A^T)^{-1}$.

## Facts & Assumptions

**Given:** The group $\mathbb R^n$ with its standard topology and the dual identification constructed from the character classification of the line and the product-dual identification ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-duals-of-finite-products-and-discrete-direct-sums]]).

[F1] Every continuous homomorphism $\varphi:\mathbb R^n\to\mathbb T$ is $\varphi(x)=e^{2\pi i\,\xi\cdot x}$ for a unique $\xi\in\mathbb R^n$, and $\xi\mapsto\varphi_\xi$ is an isomorphism of topological groups $\mathbb R^n\to\widehat{\mathbb R^n}$: the classification of characters of the line supplies the algebraic bijection, and finite-product duality reduces the topology check to the line. On the line, compact $K$ is bounded, say $|t|\le M$; continuity of $s\mapsto e^{2\pi is}$ at $0$ makes $e^{2\pi i\xi t}$ uniformly close to $e^{2\pi i\xi_0t}$ on $K$ when $|\xi-\xi_0|$ is small. Conversely, if $|\xi-\xi_0|\ge\epsilon$, then $t=1/(2|\xi-\xi_0|)\in[-1/\epsilon,1/\epsilon]$ gives $|e^{2\pi i(\xi-\xi_0)t}-1|=2$, so the uniform ball of radius $1$ on this compact interval forces $|\xi-\xi_0|<\epsilon$. Uniform balls are compact-open neighbourhoods by [[lem-compact-open-character-group-operations-are-continuous]], and compactness and boundedness of these line sets follow from [[thm-heine-borel-rn]]. The value at $\pm\pi i$ is $-1$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. At $n=0$ both groups are trivial. ([[lem-continuous-characters-of-the-real-line-are-exponentials]], [[lem-duals-of-finite-products-and-discrete-direct-sums]], [[def-pontryagin-dual-and-compact-open-topology]])

[F2] $H^\perp=\{\gamma:\gamma(h)=1\text{ for every }h\in H\}$, and $e^{2\pi it}=1$ exactly when $t\in\mathbb Z$, while $e^{2\pi i(t+k)}=e^{2\pi it}$ for $k\in\mathbb Z$. ([[def-annihilator-of-a-subgroup]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-integers]])

[F3] The quotient $\mathbb R^n/H$ for $H=\mathbb Z^k\times\{0\}^{n-k}$ is $(\mathbb R/\mathbb Z)^k\times\mathbb R^{n-k}$ with the product topology: each projection $\mathbb R\to\mathbb R/\mathbb Z$ is continuous and open, since the saturation of an open set is the union of its integer translates. The finite product of these maps and identity maps is therefore continuous, open and surjective, with kernel $H$, and the induced quotient bijection is continuous and open. A continuous character on $\mathbb R^n$ constant on the cosets of $H$ factors through the quotient map, uniquely and continuously; conversely characters of the quotient pull back to characters of $\mathbb R^n$ that are trivial on $H$. ([[def-quotient-group]], [[def-standard-topologies]], [[thm-quotient-universal-property]], [[def-homeomorphism-and-open-maps]])

[F4] For a real matrix $A$, a vector $\xi$ and $z\in\mathbb Z^n$ one has $(A^T\xi)\cdot z=\xi\cdot(Az)$ and $A^{-T}=(A^T)^{-1}$; the standard basis vectors $e_0,\dots,e_{n-1}$ lie in $\mathbb Z^n$, and $y\in\mathbb R^n$ satisfies $y\cdot z\in\mathbb Z$ for all $z\in\mathbb Z^n$ exactly when $y\in\mathbb Z^n$. ([[prop-transpose-laws]], [[def-transpose-of-a-matrix]], [[def-invertible-matrix-and-general-linear-group]], [[lem-standard-basis-of-f-n]], [[def-integers]])

## Verification

1.1 For a linear subspace $V\le\mathbb R^n$, a character $\gamma_\xi$ lies in $V^\perp$ exactly when $\xi\cdot v\in\mathbb Z$ for every $v\in V$, by [F1] and [F2]. When $V=\mathbb R^k\times\{0\}^{n-k}$ and $v=t\,e_i$ for $0\le i<k$ and $t\in\mathbb R$, the condition $t\,\xi_i\in\mathbb Z$ for all real $t$ forces $\xi_i=0$ (otherwise take $t=1/(2\xi_i)$); the remaining coordinates are unconstrained, so $V^\perp=\{0\}^k\times\mathbb R^{n-k}$. [F1, F2, F4]

1.2 For $H=\mathbb Z^k\times\{0\}^{n-k}$, the condition $\xi\cdot h\in\mathbb Z$ for all $h\in H$ reads $\sum_{0\le i<k}\xi_i h_i\in\mathbb Z$ for all integers $h_0,\dots,h_{k-1}$. Taking $h=e_i$ gives $\xi_i\in\mathbb Z$ for $0\le i<k$, and the remaining coordinates are unconstrained; hence $H^\perp=\mathbb Z^k\times\mathbb R^{n-k}$. In particular $H^\perp$ is not discrete when $k<n$, since the nonzero vectors $m^{-1}e_k$ lie in it and converge to $0$ as positive integers $m\to\infty$, and the full-rank case $k=n$ gives $(\mathbb Z^n)^\perp=\mathbb Z^n$. [F1, F2, F4]

1.3 For $H=A\mathbb Z^n$ with $A$ invertible, $\gamma_\xi\in H^\perp$ if and only if $\xi\cdot(Az)\in\mathbb Z$ for all $z\in\mathbb Z^n$, that is $(A^T\xi)\cdot z\in\mathbb Z$ for all $z\in\mathbb Z^n$, which by [F4] holds exactly when $A^T\xi\in\mathbb Z^n$, that is $\xi\in(A^T)^{-1}\mathbb Z^n=A^{-T}\mathbb Z^n$. [F1, F2, F4]

2.1 For $H=\mathbb Z^k\times\{0\}^{n-k}$, the quotient identified in [F3] has the standard coordinates $(x_0,\dots,x_{k-1})\bmod\mathbb Z$ and $x'\in\mathbb R^{n-k}$. A character $\gamma_\xi$ with $\xi\in\mathbb Z^k\times\mathbb R^{n-k}$ satisfies $\gamma_\xi(h)=e^{2\pi i\sum_{0\le i<k}\xi_ih_i}=1$ for all $h\in H$, so it is constant on cosets and factors through the quotient, where it takes the value $e^{2\pi i(\sum_{0\le i<k}\xi_i x_i+\xi'\cdot x')}$ on the class of $x$; these are exactly the characters of the quotient, which is the stated discrete Fourier pairing on the torus factor. [F2, F3, step 1.2]

3.1 Clauses (1), (2) and (3) are proved in steps 1.1 and 1.2, step 2.1 and step 1.3; the example also records that "the annihilator of a lattice is a lattice" holds only in the full-rank case of clause (3), not for the degenerate subgroups $\mathbb Z^k\times\{0\}^{n-k}$ with $k<n$. [step 1.1, step 1.2, step 1.3, step 2.1] ∎ 