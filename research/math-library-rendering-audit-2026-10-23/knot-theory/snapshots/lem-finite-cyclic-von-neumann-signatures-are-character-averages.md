---
id: lem-finite-cyclic-von-neumann-signatures-are-character-averages
kind: lemma
title: Finite cyclic von Neumann signatures are exact character averages
status: published
origin: pipeline
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cellular-chains-compute-homology-with-local-coefficients
proof_strategy: direct
axiom_use: The standing full AC convention for the analytic signature definition
  is retained. All decompositions and trace calculations here are
  finite-dimensional; no general group approximation, closed-manifold index
  theorem or amenable vanishing is invoked.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Structure in the classical knot concordance
        group
      url: https://arxiv.org/pdf/math/0206059
      locator: Appendix5, finite cyclic part of Proposition5.1 and Lemma5.4. The
        complete finite Fourier and radical calculation is provided here.
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
---

## Statement

Use the standing AC and canonical-trace convention of the $L^2$ signature definition. Let $W$ be a compact oriented four-manifold with a supplied finite CW pair model for its boundary and a surjection $\psi:\pi_1(W)\to G=\mathbb Z/d$, $d\ge1$. Let $\widetilde W_\psi$ be its actual degree-$d$ cover, and write $\zeta=\exp(2\pi i/d)$. For $0\le r<d$, let $\lambda_r$ be the character intersection form for the character sending the specified positive generator of $G$ to $\zeta^r$. Then, allowing arbitrary radicals,
$$\operatorname{sign}^{(2)}_G(W,\psi)=\frac{\operatorname{sign}(\widetilde W_\psi)}d=\frac1d\sum_{r=0}^{d-1}\operatorname{sign}(\lambda_r).$$
Here the ordinary cover signature, like each character signature, means positive inertia minus negative inertia with the kernel discarded. Changing consistently from linear-first to conjugate-first pairings transposes the character matrices and does not change the formula. No independence of a bounding manifold, no infinite-cyclic integration and no arbitrary-group index assertion is part of this statement.

## Facts & Assumptions

**Given:** The finite pair, the oriented manifold, the surjection and the positive cyclic generator.

[F1] The canonical trace on $\mathcal N G$ is the coefficient at the identity, equivalently $\langle A\delta_e,\delta_e\rangle$. The $L^2$ signature is the trace of the positive spectral projection of the induced middle form minus that of its negative spectral projection, ignoring the radical. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] A finite-dimensional complex normal operator has an orthonormal eigenbasis. In particular a Hermitian matrix has real eigenvalues and its positive and negative projections have ranks the corresponding inertia counts. [[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F3] For the supplied finite CW pair, the cellular local complex computes its singular local homology, with the deck-incidence matrix of the supplied lifts acting through monodromy. [[thm-cellular-chains-compute-homology-with-local-coefficients]]

## Proof

1.1 Denote by $t$ the cyclic shift on the standard orthonormal basis of $\mathbb C[G]$. Its powers $1,t,\ldots,t^{d-1}$ are linearly independent, since their values on $\delta_e$ are the distinct basis vectors, and they span a finite-dimensional unital star algebra, hence a strongly closed algebra. Thus $\mathcal N G=\mathbb C[G]$. Put $$e_r=\frac1d\sum_{k=0}^{d-1}\zeta^{-rk}t^k.$$ The geometric sum is $d$ if its exponent is divisible by $d$, and zero otherwise, by multiplying it by $1-\zeta^j$. Consequently $e_re_s=\delta_{rs}e_r$, $\sum_re_r=1$, $e_r^*=e_r$ and $te_r=\zeta^re_r$. Each $e_r$ has one-dimensional range on the regular representation and trace $1/d$, its identity coefficient. This includes $d=1$. Hence $\mathcal N G\cong\bigoplus_r\mathbb C e_r$ as a traced star algebra, with trace $d^{-1}\sum_r$. [F1, given, algebra]

2.1 Lift the finitely many cells of the supplied pair to the cover. Their translates identify its complex cellular chains with the finite free $\mathbb C[G]$ chains of $W$. Multiplying by the finitely many $e_r$ gives a direct sum of complexes; on the $r$th summand every monodromy matrix is evaluated at $t=\zeta^r$. This is precisely the character cellular complex. Projection and inclusion commute with the differential, so kernels and images split in these summands. All the spaces have finite complex dimension, so every image is closed; reduced Hilbert homology and ordinary homology agree, including in relative degrees. Thus the actual middle homology splits as the sum of the character homologies, without a flatness or tensor-exactness assumption. [F3, step 1.1, construct, algebra]

3.1 The intersection pairing respects this splitting. Its sesquilinearity gives, in the linear-first convention, $$\lambda(e_rx,e_sy)=e_r\lambda(x,y)e_s,$$ since $e_s^*=e_s$; this is zero for $r\ne s$. Within one summand its value is its scalar character form times $e_r$. This can also be seen directly on cells: lift one relative orientation chain from $W$ and add all its translates to get the orientation chain of the cover. Cup, cap, boundary and evaluation are finite linear formulas commuting with the central projections. The coefficient-at-identity pairing on a basis of lifted chains counts exactly their ordinary intersections in the cover. For Fourier-projected lift cycles $P_rx=d^{-1}\sum_k\zeta^{-rk}T^kx$, the ordinary cover pairing is the scalar character pairing divided by $d$; expand the two sums and put $j=b-a$ to get $$ I(P_rx,P_ry)=\frac1d\sum_{j=0}^{d-1}(x\mathbin{\cdot}T^jy)\zeta^{rj}.$$ Here $I$ is the ordinary real cover intersection form extended complex linearly in its first argument and conjugate linearly in its second. Thus all normalizations differ only by the positive scalar $d^{-1}$ on a character component. If the alternate inverse-deck convention is used it interchanges $r$ and $d-r$, which leaves the finite sum unchanged. [step 1.1, step 2.1, construct, algebra]

4.1 In any character block choose a basis of middle homology. Its form matrix is Hermitian; its radical is exactly its kernel. By [F2] the positive and negative spectral spaces have dimensions $n_+(\lambda_r),n_-(\lambda_r)$, and the zero eigenspace is its radical. These dimensions do not depend on the chosen basis: a maximal positive subspace has dimension $n_+$, since projection to the positive spectral space is injective on any positive subspace, and that spectral space itself is positive. An invertible basis change bijects positive subspaces; repeat with the negative form for $n_-$. The same argument applies to a positive scalar multiple and to a transpose by complex conjugation. In the direct sum of step2 the full radical is the direct sum of these kernels, because all cross blocks vanish. No component is removed by assuming that a determinant is nonzero. [F2, step 2.1, step 3.1, algebra]

5.1 On a finite $\mathcal N G$ module, a projection whose character ranks are $q_r$ has trace $\sum_rq_r/d$: represent it on a finite free module using step1, apply the ordinary matrix trace in each component, and sum the diagonal identity coefficients. Applied to the positive and negative homology projections of step4 this yields $$\operatorname{sign}^{(2)}_G(W,\psi)=\frac1d\sum_r(n_+(\lambda_r)-n_-(\lambda_r)).$$ The ordinary cover form is the orthogonal sum of the same finite character blocks, with the positive normalization of step3, so its signature is the sum of their signatures. This proves both equalities, with every radical and the trivial character retained. The argument was for this actual finite cover and finite complex, and used neither a closed-signature index theorem nor a bordism-independence assertion. [F1, step 1.1, step 3.1, step 4.1, algebra] ∎
