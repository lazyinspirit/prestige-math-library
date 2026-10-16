---
id: thm-qc-luders-instrument-of-a-povm-is-valid
kind: theorem
title: "The square-root Lüders maps form an instrument"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-povm-and-outcome-law, def-qc-instrument-and-conditional-state, thm-non-negative-square-root-exists-and-is-unique, def-qc-completely-positive-map, lem-qc-finite-ancilla-amplification-is-block-map, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, thm-gram-schmidt-orthonormalisation, def-dimension, def-trace-of-an-endomorphism, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, def-vector-space-of-linear-maps, prop-linear-maps-form-a-vector-space, lem-composition-and-identity-linear-maps, def-matrix-product-and-identity-matrix, def-non-negative-and-positive-operator]
justified_by: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §§3.1.2–3.2.4"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $(E_a)_{a\in\Omega}$ be a finite POVM on $H$, and let $M_a=E_a^{1/2}$ be the nonnegative square root of each effect. The maps

$$\mathcal I_a(X):=M_aXM_a,\qquad X\in\mathcal L(H),$$

form an instrument from $H$ to itself.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$, a finite POVM $(E_a)_{a\in\Omega}$, and $M_a=E_a^{1/2}$.

[F1] [[def-qc-povm-and-outcome-law]]: each effect $E_a$ is nonnegative and $\sum_aE_a=I_H$.

[F2] [[def-qc-instrument-and-conditional-state]]: a family of completely positive outcome maps whose output traces sum to the input trace on every operator is an instrument.

[F3] [[def-qc-completely-positive-map]]: a branch map is completely positive when all its finite-ancilla extensions preserve nonnegative operators.

[F4] [[lem-qc-finite-ancilla-amplification-is-block-map]]: for an extension input with blocks $X_{ij}$, the amplification of $X\mapsto M_aXM_a$ has blocks $M_aX_{ij}M_a$.

[F5] [[thm-non-negative-square-root-exists-and-is-unique]]: $M_a$ is nonnegative and $M_a^2=E_a$.

[F6] [[def-vector-space-of-linear-maps]]: $\mathcal L(H)$ has pointwise addition and scalar multiplication.

[F7] [[prop-linear-maps-form-a-vector-space]]: those pointwise operations make $\mathcal L(H)$ a vector space.

[F8] [[lem-composition-and-identity-linear-maps]]: a composition of linear maps is linear.

[F9] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible rectangular products.

[F10] [[prop-trace-is-linear]]: trace is linear on finite-dimensional matrix spaces.

[F11] [[def-matrix-product-and-identity-matrix]]: compatible block matrices multiply by row-by-column finite sums.

[F12] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F13] [[def-qc-tensor-register-and-permutation]]: after specifying ordered orthonormal bases for the factors, their tensor register carries the product inner product, linear in the first argument.

[F14] [[def-dimension]]: finite-dimensional $H$ has a finite basis; since $H$ is nonzero, this basis is nonempty.

[F15] [[thm-gram-schmidt-orthonormalisation]]: Gram–Schmidt turns a finite linearly independent list, in particular a basis, into an orthonormal list with the same span.

[F16] [[lem-qc-tensor-product-basis-and-dimension]]: product vectors from specified orthonormal bases of the factors form an orthonormal basis of the tensor register.

## Proof

1.1 For each $a$, $X\mapsto M_aXM_a$ takes $\mathcal L(H)$ to $\mathcal L(H)$ by composition of linear maps [F8]. For $X,Y\in\mathcal L(H)$, scalars $s,t\in\mathbb C$, and $v\in H$, evaluate at $v$ to obtain $M_a((sX+tY)(M_av))=sM_aXM_av+tM_aYM_av$. By the pointwise operations [F6]–[F7], this is $s\mathcal I_a(X)v+t\mathcal I_a(Y)v$, so $\mathcal I_a$ is complex-linear. [given, F6, F7, F8]

1.2 Fix any finite $r$ and a nonnegative $X$ on $H\otimes\mathbb C^r$ in the sense of [F12]. By [F14] choose a finite basis of $H$, which is linearly independent by the basis definition, and apply [F15] to obtain an orthonormal basis; together with the standard basis of $\mathbb C^r$, [F16] gives the product basis of $H\otimes\mathbb C^r$. By [F4], the extended branch map sends the blocks of $X$ to $M_aX_{ij}M_a$. Let $S_a$ be the block-diagonal operator with $M_a$ on every diagonal block and zero off the diagonal. By the block product formula [F11], $(S_aXS_a)_{ij}=\sum_{k,\ell}(S_a)_{ik}X_{k\ell}(S_a)_{\ell j}=M_aX_{ij}M_a$, so the extension is $S_aXS_a$. Write $z=\sum_jz_j\otimes e_j$ and $w=\sum_jw_j\otimes e_j$ using that product basis. The product inner product [F13] gives $\langle S_az,w\rangle=\sum_j\langle M_az_j,w_j\rangle=\sum_j\langle z_j,M_aw_j\rangle=\langle z,S_aw\rangle$, since $M_a$ is self-adjoint by [F5]; hence $S_a$ is self-adjoint. For all $z,w$, self-adjointness of $S_a$ and $X$ gives $\langle S_aXS_az,w\rangle=\langle XS_az,S_aw\rangle=\langle S_az,XS_aw\rangle=\langle z,S_aXS_aw\rangle$, so $S_aXS_a$ is self-adjoint. Therefore $\langle S_aXS_az,z\rangle=\langle XS_az,S_az\rangle\ge0$ by [F12]. Thus the extension is nonnegative for every $r$, so [F3] gives complete positivity of each $\mathcal I_a$. [given, F3, F4, F5, F11, F12, F13, F14, F15, F16]

2.1 For any $X\in\mathcal L(H)$, rectangular trace cyclicity [F9] and $M_a^2=E_a$ give $\operatorname{tr}(\mathcal I_a(X))=\operatorname{tr}(M_aXM_a)=\operatorname{tr}(XM_a^2)=\operatorname{tr}(XE_a)$. By [F10] and completeness in [F1], $\sum_a\operatorname{tr}(\mathcal I_a(X))=\operatorname{tr}(X\sum_aE_a)=\operatorname{tr}(X)$. Thus the family satisfies the instrument trace condition [F2]. [given, F1, F2, F5, F9, F10] ∎
