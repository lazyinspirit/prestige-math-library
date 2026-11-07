---
id: lem-finite-galois-factor-set-obstruction
kind: lemma
title: Factor sets of split central simple algebras and their field-extension compatibility
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- lem-finite-density-and-central-simple-base-change
- lem-finite-semilinear-descent-and-matrix-inner-automorphisms
- cor-normalized-cochains-compute-group-cohomology
justified_by: []
proof_strategy: direct
axiom_use: None; all implementations and bases are chosen over finite sets.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §3, Theorems 1.21–1.24 and Corollary 1.26; only the stated
      obstruction interface is proved, with inflation and scalar-extension cochains
      written explicitly.
verification: {}
---

## Statement

Use normalized inhomogeneous cochains for finite-group cohomology. If a central simple $K$-algebra $B$ splits over a finite Galois extension $E/K$ with group $G$, choose $B\otimes_KE\cong\operatorname{End}_E(V)$. Its coefficient action is implemented by semilinear maps $T_\sigma$, unique up to scalar; the scalar factor
$$T_\sigma T_\tau=c(\sigma,\tau)T_{\sigma\tau}$$
defines a class $o_E(B)\in H^2(G,E^\times)$ independent of all choices. It is zero exactly when $B$ is split over $K$. It is unchanged by matrix stabilization, and commutes with inflation on enlarging a Galois splitting field and with restriction/base change to any finite separable extension of $K$.

Every class $[c]\in H^2(G,E^\times)$ occurs as $o_E(B)$ for a central simple algebra split by $E$. Explicitly, for the crossed product $A(c)=\bigoplus_{\sigma\in G}Eu_\sigma$ with $u_\sigma a=\sigma(a)u_\sigma$ and $u_\sigma u_\tau=c(\sigma,\tau)u_{\sigma\tau}$, one can take $B=A(c)^{\mathrm{op}}$.

## Statement references

[[lem-finite-density-and-central-simple-base-change]]

[[lem-finite-semilinear-descent-and-matrix-inner-automorphisms]]

[[cor-normalized-cochains-compute-group-cohomology]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] Central simple algebras remain central simple under arbitrary field extension and possess division representatives. [[lem-finite-density-and-central-simple-base-change]]

[F2] Finite semilinear actions descend vector spaces, and matrix automorphisms are inner uniquely up to scalar. [[lem-finite-semilinear-descent-and-matrix-inner-automorphisms]]

[F3] Finite-group cohomology is computed by normalized inhomogeneous cochains. [[cor-normalized-cochains-compute-group-cohomology]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Transport the coefficient action of $G$ on $B_E$ to $\operatorname{End}_E(V)$. Composing its $\sigma$-semilinear algebra automorphism with inverse entrywise $\sigma$ gives an $E$-algebra automorphism, so [F2] implements it by $T_\sigma=P_\sigma\sigma$. Choose $T_1=1$ and one implementation for each of the finitely many remaining group elements; only finite choice is needed. Two implementations differ by a scalar by [F2]. Since the coefficient action is a group action, $T_\sigma T_\tau T_{\sigma\tau}^{-1}$ is scalar. Associativity gives $c(\sigma,\tau)c(\sigma\tau,\rho)=\sigma(c(\tau,\rho))c(\sigma,\tau\rho)$. Changing $T_\sigma$ by $a_\sigma$ changes $c$ by the coboundary $a_\sigma\sigma(a_\tau)/a_{\sigma\tau}$. A different splitting isomorphism differs by an inner automorphism [F2], whose conjugation of all the $T_\sigma$ leaves their factors unchanged. Thus $o_E(B)$ is well defined. [F2, F3, given, choose, algebra]

1.2 Given a normalized cocycle $c$, its displayed multiplication on $A(c)$ is associative exactly by the cocycle equation and has identity $u_1$. Each $u_\sigma$ is invertible, as its product with $u_{\sigma^{-1}}$ is a nonzero scalar. An element commuting with $E$ can have nonzero $u_\sigma$-coefficient only when $\sigma=1$, so the centralizer of $E$ is $E$ and the center of $A(c)$ is $K$. For simplicity, choose in a nonzero two-sided ideal an element with least nonzero coefficient support. Multiply by an invertible $u_\sigma$ and a scalar so its identity coefficient is $1$. Commuting it with $a\in E$ cancels this coefficient. If any other supported index $\tau\ne1$ remains, choose $a$ with $\tau(a)\ne a$; the resulting nonzero commutator has smaller support, a contradiction. The ideal therefore contains $1$. This proves central simplicity. [F3, given, choose, algebra]

2.1 If the class is zero, rescale the $T_\sigma$ to an honest action. By [F2], $V=E\otimes_KW$ with $W=V^G$. In an invariant basis the fixed algebra of the induced action on $\operatorname{End}_E(V)$ is $\operatorname{End}_K(W)$. But the fixed algebra of $B_E$ is $B$: expand in a $K$-basis of $B$ and use $E^G=K$. Thus $B$ is split. Conversely, if $B$ is already a matrix algebra over $K$, its standard splitting with entrywise action has factor $1$. [F2, step 1.1, algebra]

2.2 For a finite Galois $F/K$ containing $E$, extend a splitting basis to $F$ and implement $\gamma\in\operatorname{Gal}(F/K)$ by $P_{\gamma|E}\gamma$ on its coordinates. The factor is exactly $c(\gamma|E,\eta|E)$, now regarded in $F^\times$. This is the actual cochain inflation with coefficient inclusion, not just an equality of group orders. For a finite separable $M/K$, the splitting field $EM/M$ is Galois and its group maps by restriction into $G$; the same formula yields the restricted cocycle in $(EM)^\times$. Matrix stabilization uses $T_\sigma\otimes\sigma$ on $V\otimes_E E^r$ and has the identical factor. These verifications also prove compatibility of any iterated such maps. [F2, F3, step 1.1, algebra]

3.1 Regard $V=A(c)$ as a left $E$-space of dimension $|G|$. Right multiplication gives a homomorphism $A(c)^{\mathrm{op}}\otimes_KE\to\operatorname{End}_E(V)$, with the second factor acting by left scalars. It is injective by [F1] and simplicity, and is onto by equal dimensions $|G|^2$ over $E$. Left multiplication by $u_\sigma$ is $\sigma$-semilinear on $V$, commutes with right multiplication, and conjugates a left scalar $a$ to $\sigma(a)$. It therefore implements the coefficient action of this splitting. Its factor is exactly $c$, giving $o_E(A(c)^{\mathrm{op}})=[c]$. The trivial group gives the scalar algebra. [F1, step 1.2, algebra] ∎
