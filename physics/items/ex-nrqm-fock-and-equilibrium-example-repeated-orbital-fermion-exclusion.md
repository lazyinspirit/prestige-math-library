---
id: ex-nrqm-fock-and-equilibrium-example-repeated-orbital-fermion-exclusion
aliases: [nrqm-fock-and-equilibrium-example-repeated-orbital-fermion-exclusion]
kind: example
domain: mathematics
title: "Repeated-orbital fermion exclusion"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation, thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-hilbert-tensor-construction, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation: mathematical-premise
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.1-1.2 pp. 1-6 (many-particle antisymmetric states and Pauli exclusion)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 11 Sections 11.1-11.3 pp. 161-168 (spin statistics, multi-particle symmetrization and Slater determinants)"
      url: "http://web.archive.org/web/20240421090356/http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Example

**Slot convention.** For $\ell\ge1$, $S_\ell$ acts on $\{0,\dots,\ell-1\}$ as in [[lem-nrqm-composites-permutation-sector-projections]]. On one-based tuple positions use $\widehat{\pi}(k):=1+\pi(k-1)$ for $1\le k\le\ell$. Conjugation by $k\mapsto k-1$ gives $\widehat{\pi\sigma}=\widehat{\pi}\circ\widehat{\sigma}$ and $\widehat{\pi^{-1}}=\widehat{\pi}^{-1}$; thus the supplier's tensor action becomes $U_\pi(v_1\otimes\cdots\otimes v_\ell)=v_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes v_{\widehat{\pi}^{-1}(\ell)}$. The parameters of $U_\pi$ and $\operatorname{sgn}(\pi)$ remain canonical zero-based permutations.

Assume the Axiom of Countable Choice and the Axiom of Choice. Let $H$ be a
complex Hilbert space, let $H^{\otimes n}$ be its completed tensor powers with
the unitaries $U_\pi$ and projections $P_\pm^{(n)}$ of
[[lem-nrqm-composites-permutation-sector-projections]]. Fix $n\ge2$ and vectors $u_1,\ldots,u_n\in H$, and let
$$S(u_1,\dots,u_n):=\frac1{\sqrt{n!}}\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\, u_{\widehat{\sigma}(1)}\otimes\cdots\otimes u_{\widehat{\sigma}(n)}$$
be the Slater vector of
[[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]]. This
example verifies concretely that:

(a) for every $u\in H$ the antisymmetrised two-particle tensor vanishes,
$$P_-^{(2)}(u\otimes u)=0,$$
because the canonical transposition $\tau=(0\,1)\in S_2$ of the two tensor factors satisfies
$U_\tau(u\otimes u)=u\otimes u$ and $P_-^{(2)}=\tfrac12(\mathrm{id}-U_\tau)$;

(b) consequently the Slater vector with a repeated orbital is the zero vector,
$$S(u,u)=\frac1{\sqrt2}\bigl(u\otimes u-u\otimes u\bigr)=0\qquad(u\in H),$$
and the norm-one conclusion of
[[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] (a)
does not apply to the degenerate list $(u,u)$: orthonormality of $u_1,\dots,u_n$
is an essential hypothesis, not a convenience; for orthonormal $u_1,u_2$ one
has $\|S(u_1,u_2)\|=1$;

(c) exclusion is a property of the *state* and not only of basis labels:
for $H=\mathbb C^2$ with orthonormal basis $e_1,e_2$ and the non-basis vector
$u:=e_1+e_2$ the antisymmetric part still vanishes. Indeed $u\otimes u
=e_1\otimes e_1+e_1\otimes e_2+e_2\otimes e_1+e_2\otimes e_2$, and
$P_-^{(2)}$ annihilates the two diagonal tensors while exchanging the two
crossed tensors with opposite sign, so $P_-^{(2)}(u\otimes u)=0$;

(d) in the actual tensor space $H^{\otimes2}$, the two-particle antisymmetric sector $\operatorname{ran}P_-^{(2)}$ contains no **nonzero** vector of the form $P_-^{(2)}(u\otimes u)$: every repeated-orbital projection is zero, and zero belongs to this sector as it does to every linear subspace. Thus a nonvanishing antisymmetric two-particle vector cannot be built from two copies of the same one-particle vector. This sector is distinct from the symmetric two-particle sector of the bosonic $F(H)$ in [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]].

The antisymmetric sector and its projection are mathematical objects; as
recorded in the cited suppliers, selecting this sector for a species is a
postulate and no spin-statistics statement is proved here.

## Verification

**Given:** the complex Hilbert space $H$, its completed tensor powers $H^{\otimes n}$, the permutation unitaries $U_\pi$ and the projections $P_\pm^{(n)}$, the transposition $\tau\in S_2$, the vector $u=e_1+e_2\in\mathbb C^2$ and the orthonormal family $(e_1,e_2)$.

[F1] For every $\pi\in S_n$ there is a unique unitary $U_\pi$ with $U_\pi(v_1\otimes\cdots\otimes v_n)=v_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes v_{\widehat{\pi}^{-1}(n)}$, $U_\pi^*=U_{\pi^{-1}}$; for $n=2$ and the transposition $\tau$ one has $\tau^{-1}=\tau$ and $U_\tau(v_1\otimes v_2)=v_2\otimes v_1$. Moreover $P_-^{(2)}=\frac12(\mathrm{id}-U_\tau)$, and $U_\tau(u\otimes u)=u\otimes u$ ([[lem-nrqm-composites-permutation-sector-projections]] (a), (b), [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] $S(u_1,u_2)=\frac1{\sqrt2}(u_1\otimes u_2-u_2\otimes u_1)=\sqrt2\,P_-^{(2)}(u_1\otimes u_2)$, and $\|S(u_1,u_2)\|=1$ whenever $u_1,u_2$ are orthonormal; for $u_1=u_2=u$ the two summands coincide, so the alternating sum vanishes ([[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] (a), [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] The actual two-particle antisymmetric sector is $\operatorname{ran}P_-^{(2)}\subseteq H^{\otimes2}$, a closed linear subspace and hence containing zero ([[lem-nrqm-composites-permutation-sector-projections]] (b)). The source $F(H)$ is the symmetric bosonic direct sum, whose two-particle sector is $\iota_2(\operatorname{ran}P_+^{(2)})$, not the antisymmetric sector ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).



1.1 [The two-particle exclusion] For $u\in H$ the swap identity $U_\tau(u\otimes u)=u\otimes u$ of [F1] gives $P_-^{(2)}(u\otimes u)=\frac12(u\otimes u-U_\tau(u\otimes u))=0$. This is (a). [F1, algebra]

2.1 [Slater vector with repeated orbital] By [F2] with $u_1=u_2=u$, $S(u,u)=\frac1{\sqrt2}(u\otimes u-u\otimes u)=0$; equivalently $S(u,u)=\sqrt2P_-^{(2)}(u\otimes u)=0$ by step 1.1. For orthonormal $u_1,u_2$, [F2] gives $\|S(u_1,u_2)\|=1$, so the hypothesis of pairwise orthonormal orbitals in [F2] cannot be dropped. This is (b). [F2, step 1.1, algebra]

2.2 [Superposition check] Let $u=e_1+e_2\in\mathbb C^2$. Bilinearity of the tensor product gives $u\otimes u=e_1\otimes e_1+e_1\otimes e_2+e_2\otimes e_1+e_2\otimes e_2$. By [F1], $U_\tau$ fixes $e_1\otimes e_1$ and $e_2\otimes e_2$ and interchanges $e_1\otimes e_2$ with $e_2\otimes e_1$; hence $P_-^{(2)}(u\otimes u)=\frac12\bigl((e_1\otimes e_2+e_2\otimes e_1)-(e_2\otimes e_1+e_1\otimes e_2)\bigr)=0$, in agreement with step 1.1. This is (c). [F1, step 1.1, algebra]

2.3 [Consequence in the antisymmetric sector] If $u\ne0$ then $u\otimes u\ne0$ (the tensor product of nonzero vectors has norm $\|u\|^2>0$), while step 1.1 gives $P_-^{(2)}(u\otimes u)=0$; so no nonzero two-particle antisymmetric vector arises by antisymmetrising $u\otimes u$. By [F3] this is a statement about the sector $\operatorname{ran}P_-^{(2)}$ of $H^{\otimes2}$ ; the zero projection belongs to that linear sector, but no nonzero vector of that form exists. The bosonic $F(H)$ has the distinct symmetric sector of [F3]. This is (d). [F3, step 1.1, algebra]

3.1 [Conclusion and scope] Steps 1.1 and 2.1 prove (a) and (b), step 2.2 proves (c), and step 2.3 proves (d). The scope paragraph of the example records that the symmetric/antisymmetric sector assignment is a postulate and that no spin-statistics statement is proved. This completes the verification. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
