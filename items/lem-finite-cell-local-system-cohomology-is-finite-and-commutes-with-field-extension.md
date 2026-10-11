---
id: lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension
kind: lemma
title: "Finite cell local system cohomology is finite and commutes with field extension"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [cor-every-vector-space-has-a-basis,
       cor-free-modules-are-projective-and-flat,
       def-axiom-of-choice,
       def-based-cellular-chain-complex-of-a-universal-cover,
       def-flat-and-faithfully-flat-modules-and-ring-maps,
       def-local-system-of-r-modules-and-its-pullback,
       def-singular-and-cellular-chain-complexes-with-local-coefficients,
       thm-cellular-chains-compute-homology-with-local-coefficients,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Section 3.H (local coefficients); cellular chains with local coefficients"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "3.H, local-coefficient cellular cochain complexes"
---

## Statement

Assume AC. Let $(X,A)$ be a finite CW pair of dimension $d$, let $k$ be a field
and let $L$ be a $k$-vector-space local system with finite-dimensional fibres
([[def-local-system-of-r-modules-and-its-pullback]]). Then $H^q(X,A;L)$ is
finite-dimensional, vanishes for $q<0$ and $q>d$, and for every field extension
$k\subseteq k'$ the natural map is an isomorphism:
$$H^q(X,A;L)\otimes_k k'\cong H^q(X,A;L\otimes_k k').$$
The assertion holds separately on every component, including the empty pair.

## Facts & Assumptions

**Given:** AC, a finite CW pair $(X,A)$ of dimension $d$, a field $k$, a local system $L$ of finite-dimensional $k$-vector spaces, and a field extension $k\subseteq k'$.

[F1] The cellular local chain and cochain complexes are defined by $C^{\mathrm{cell}}_*(X,A;L)=C^{\mathrm{cell}}_*(\widetilde X,\widetilde A;k)\otimes_{k[\pi]}M$ and $C^*_{\mathrm{cell}}(X,A;L)=\operatorname{Hom}_{k[\pi]}({}_{k[\pi]}C^{\mathrm{cell}}_*(\widetilde X,\widetilde A;k),M)$ on a component with basepoint and fibre $M=L_x$; for a disconnected complex one takes the degreewise product of the cochain complexes of its components ([[def-singular-and-cellular-chain-complexes-with-local-coefficients]]). The cellular chain module of the universal cover in each degree is free over $k[\pi]$ on the lifted cells ([[def-based-cellular-chain-complex-of-a-universal-cover]]).

[F2] For a CW pair, the cellular local cochain complex computes singular cohomology with local coefficients, naturally in cellular maps and coefficient morphisms, and its differential is the dual of the cellular boundary, which is a matrix of integer incidence coefficients composed with group-ring transports ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]], [[thm-cellular-chains-compute-homology-with-local-coefficients]]).

[F3] Every vector space over a field has a basis, and a free module over a commutative ring is flat, so tensoring over $k$ with the $k$-vector space $k'$ preserves exact sequences ([[cor-every-vector-space-has-a-basis]], [[cor-free-modules-are-projective-and-flat]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[A1] AC is assumed; it is inherited from the cellular-cochains supplier [F2] and from the basis choice in [F3]; all products and sums below are finite ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work first on one component, with basepoint $x$, group $\pi=\pi_1(X,x)$ and fibre $M=L_x$. By [F1] the degree-$q$ term of the cellular local cochain complex is $\operatorname{Hom}_{k[\pi]}(P_q,M)$ with $P_q$ free over $k[\pi]$ on the finitely many relative $q$-cells of the component, so choosing that finite basis identifies it with the finite product $M^{n_q}$; since $M$ is finite-dimensional, the term is finite-dimensional, and it is zero for $q<0$ and for $q>d$. By [F2] the cohomology $H^q(X,A;L)$ is the cohomology of this complex, so it is finite-dimensional as a kernel, image or quotient of finite-dimensional spaces and vanishes outside $[0,d]$. For a disconnected pair the cochain complex is the degreewise product of the complexes of the finitely many components, and the same conclusions hold componentwise; the empty pair has the zero complex. [F1, F2, A1, algebra]

2.1 Let $k'$ be a field extension and give $M\otimes_kk'$ the induced $k'[\pi]$-module structure; these fibres with the extended transport maps form the local system $L\otimes_kk'$. The termwise map $\operatorname{Hom}_{k[\pi]}(P_q,M)\otimes_kk'\to\operatorname{Hom}_{k'[\pi]}(P_q\otimes_kk',M\otimes_kk')$, defined on a basis of the free module $P_q$, is an isomorphism, because both sides identify with $(M\otimes_kk')^{n_q}$; it is natural in the second variable and therefore intertwines the differentials, which are obtained by dualizing the same $k[\pi]$-linear cellular boundary of [F2]. Hence $C^*_{\mathrm{cell}}(X,A;L)\otimes_kk'$ is isomorphic, as a complex, to $C^*_{\mathrm{cell}}(X,A;L\otimes_kk')$. [F1, F2, step 1.1, algebra]

3.1 By [F3] the field $k'$, viewed as a $k$-vector space, is free and hence flat, so tensoring over $k$ with $k'$ preserves exact sequences. Applying this to the kernel-image sequences of the complex of step 1.1 gives a canonical isomorphism $H^q\bigl(C^*\otimes_kk'\bigr)\cong H^q(C^*)\otimes_kk'$, which by step 2.1 and [F2] is the stated map $H^q(X,A;L)\otimes_kk'\to H^q(X,A;L\otimes_kk')$, natural in the coefficients. The finiteness, the vanishing outside $[0,d]$, and the isomorphism all hold separately on each component and for the empty pair, where both complexes vanish. [F2, F3, step 1.1, step 2.1, algebra] ∎

## Remarks

- The comparison is for ordinary and relative singular cohomology of a local system. It does not assert that all analytic sheaf cohomology is cellular, and it does not identify compact-support cohomology on an arbitrary open complement with this relative model when the local system fails to extend across the boundary.
