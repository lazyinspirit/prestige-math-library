---
id: lem-cm-tate-module-rank-one-over-finite-adeles
kind: lemma
title: The finite-adic Tate module of a complex CM abelian variety is free of rank one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-complex-abelian-variety-with-cm-type
- def-cm-algebra-and-cm-type
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- def-arith-tate-module-and-inertia
- def-adele-ring-of-a-global-field
justified_by: []
sources:
  references:
  - title: J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)
    url: https://arxiv.org/pdf/0705.3446
    locator: Section1, printed4, the faithful rational lattice action and dimension argument; the inverse-limit and restricted-product comparisons are reconstructed here.
---

## Statement

Assume the Axiom of Choice. Let $A/\mathbb C$ have CM by a CM algebra $E$ of degree $2g$, with a unital injection $E\hookrightarrow\operatorname{End}^0(A)$. Let $\Lambda=\ker(\exp_A:T_0A\to A(\mathbb C))$ and $H=\Lambda\otimes_{\mathbb Z}\mathbb Q$. For every rational prime $\ell$, there is a natural topological $\mathbb Z_\ell$-linear identification
$$T_\ell A\cong\Lambda\otimes_{\mathbb Z}\mathbb Z_\ell.$$
It is functorial for algebraic homomorphisms of complex abelian varieties. Put $\widehat{\mathbb Z}=\prod_\ell\mathbb Z_\ell$, let $\mathbb A_f=\prod_\ell'(\mathbb Q_\ell,\mathbb Z_\ell)$ be the finite rational adeles, and put
$$T_fA=\prod_\ell T_\ell A,\qquad V_fA=T_fA\otimes_{\widehat{\mathbb Z}}\mathbb A_f.$$
There are natural identifications
$$T_fA\cong\Lambda\otimes_{\mathbb Z}\widehat{\mathbb Z},\qquad V_fA\cong H\otimes_{\mathbb Q}\mathbb A_f\cong\prod_\ell'(T_\ell A\otimes_{\mathbb Z_\ell}\mathbb Q_\ell,T_\ell A).$$
The last two identifications respect the finite-adelic topologies and rational endomorphism actions. The $E$-module $H$ is free of rank one, and therefore $V_fA$ is free of rank one over $E\otimes_{\mathbb Q}\mathbb A_f$. In particular every $E\otimes\mathbb A_f$-linear automorphism of $V_fA$ is multiplication by a unique element of $(E\otimes\mathbb A_f)^\times$. This does not assert that $T_fA$ is free over $O_E\otimes\widehat{\mathbb Z}$.

## Facts & Assumptions

**Given:** The complex CM abelian variety, its rational CM action, and the module constructions in the Statement.

[A1] AC is stated, and implies the DC and Countable Choice required by the Tate and adele definitions ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] A CM algebra is a finite product of CM fields; CM here supplies a unital injective action of an algebra of rational dimension $2g$ on a complex abelian variety of dimension $g$ ([[def-complex-abelian-variety-with-cm-type]], [[def-cm-algebra-and-cm-type]]).

[F2] Complex abelian varieties have natural analytic uniformization with full lattice of rank $2g$. Algebraic homomorphisms lift by their differentials and induce lattice maps; the rational endomorphism action on the rational lattice is faithful ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]]).

[F3] The Tate module is the inverse limit of the $\ell^n$-torsion groups along multiplication by $\ell$, with its inverse-limit topology and coordinatewise $\mathbb Z_\ell$-action ([[def-arith-tate-module-and-inertia]]).

[F4] The finite-adic topology is the restricted-product topology: coordinates are integral at all but finitely many finite places, and basic opens impose nonintegral conditions at only finitely many places ([[def-adele-ring-of-a-global-field]]).

## Proof

1.1 By [F2], $A(\mathbb C)=T_0A/\Lambda$ as a group. For each positive integer $n$, a class represented by $v$ is killed by $n$ precisely when $nv\in\Lambda$. The map $\Lambda/n\Lambda\to A[n](\mathbb C)$ sending $\lambda\bmod n\Lambda$ to $\exp_A(\lambda/n)$ is consequently a bijective homomorphism. Its definition does not depend on a basis. If $f:A\to B$ is algebraic, the exponential naturality in [F2] sends this class to the class defined by $df_0\lambda$, so these bijections are functorial for every $f$. For $n=\ell^r$, multiplication by $\ell$ on the torsion group corresponds to reduction $\Lambda/\ell^{r+1}\Lambda\to\Lambda/\ell^r\Lambda$. [A1, F2, given, construct, algebra]

2.1 Write $E=\prod_iE_i$ and let $e_i$ be its factor idempotents. By [F1] and the faithful action in [F2], $H$ is a faithful unital $E$-module of rational dimension $2g=\sum_i[E_i:\mathbb Q]$. The summand $e_iH$ is a finite-dimensional $E_i$-vector space, and is nonzero: otherwise $e_i$ would act by zero, contradicting faithfulness. Put $m_i=\dim_{E_i}(e_iH)\ge1$. The direct sum decomposition by the idempotents gives $$2g=\dim_{\mathbb Q}H=\sum_i m_i[E_i:\mathbb Q]=\sum_i[E_i:\mathbb Q].$$ Every $m_i$ is therefore one. Choosing one nonzero vector in each of these finitely many one-dimensional spaces gives an $E$-linear isomorphism $E\cong H$. The asserted rank-one property uses this choice, whereas the lattice action and the finite-level comparisons in step 1.1 remain canonical. [A1, F1, F2, step 1.1, choose, algebra]

2.2 Take the inverse limit in step 1.1. Choose a basis of the finite free lattice $\Lambda$. In these coordinates the inverse limit is the product of $2g$ copies of $\varprojlim_r\mathbb Z/\ell^r\mathbb Z=\mathbb Z_\ell$, with its product topology and coordinatewise scalar action. The map $\Lambda\otimes\mathbb Z_\ell\to T_\ell A$ defined by its reductions is thus a topological isomorphism by [F3]. The map itself is basis independent and functorial because every finite-level map is. Finite-rank freeness also allows the finite number of basis coordinates to commute with the product over $\ell$, giving $T_fA=\Lambda\otimes\widehat{\mathbb Z}$ topologically. [F2, F3, step 1.1, choose, algebra]

3.1 Tensor the last identity over $\widehat{\mathbb Z}$ with $\mathbb A_f$. It gives $V_fA=\Lambda\otimes_{\mathbb Z}\mathbb A_f=H\otimes_{\mathbb Q}\mathbb A_f$, since every nonzero integer is a unit in $\mathbb A_f$. In a lattice basis each of these is $\mathbb A_f^{2g}$. Likewise, a tuple in $\prod_\ell'(T_\ell A\otimes\mathbb Q_\ell,T_\ell A)$ is precisely a tuple of $2g$ rational-adic coordinates integral at all but finitely many primes. The finite number of coordinates permits taking the union of their exceptional sets, so the same basis identifies it with $\mathbb A_f^{2g}$. These identifications preserve the topologies in [F4]. A different lattice basis acts by an integral invertible matrix and its integral inverse, preserving those topologies. An integral endomorphism has its lattice matrix by [F2]; a rational endomorphism is an integral one divided by a positive integer and acts by the same rational matrix on all these spaces. Such a matrix and its inverse when invertible are integral outside finitely many primes, and are continuous in the indicated topologies. Thus the comparisons are natural and respect all rational endomorphism actions. [F2, F4, step 2.2, algebra]



4.1 Extend the isomorphism in step 2.1 by tensoring over $\mathbb Q$ with $\mathbb A_f$ and use step 3.1. This gives the rank-one free $E\otimes\mathbb A_f$-module $V_fA$. For any commutative unital ring $S$, an $S$-linear endomorphism of the free rank-one module $S$ is multiplication by its value on $1$; it is invertible precisely when that value is a unit, because an inverse must multiply it to $1$. Take $S=E\otimes\mathbb A_f$. This proves the last assertion independently of which free generator was chosen, since changing a generator by a unit conjugates scalars trivially in a commutative ring. No integral $O_E$-action on the lattice, let alone its integral freeness, has been assumed or inferred. [F1, step 3.1, step 2.1, algebra] ∎

## Source-reading boundary

The cached 2007 Milne article was actually read at Section1, printed4, for its rational lattice action and CM dimension argument. The torsion, inverse-limit and finite-restricted-product comparisons are supplied explicitly above from the installed local uniformization proof and the provided definitions. No general positive-characteristic endomorphism/Tate faithfulness theorem, CM reciprocity theorem, or converse algebraization of analytic homomorphisms is imported.
