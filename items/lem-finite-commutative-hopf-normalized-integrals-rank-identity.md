---
id: lem-finite-commutative-hopf-normalized-integrals-rank-identity
kind: lemma
title: "Normalized integrals in finite commutative Hopf algebras and the rank identity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite free bases and finite module identities only."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, printed pp. 241–243 identifies the needed dual-different relation; the finite Hopf trace identity is reconstructed here, not imported from its cited sources."
verification: {}
---

## Statement

Let $R$ be a commutative local ring, and let $A$ be a finite free commutative and cocommutative $R$-Hopf algebra of rank $n>0$, with dual Hopf algebra $B=A^\vee$. There are integral generators $t\in A$ and $\lambda\in B$ satisfying $\lambda(t)=1$, where $at=\epsilon_A(a)t$ and $b\lambda=\epsilon_B(b)\lambda$ for all $a\in A$ and $b\in B$. For any such normalized generators,
$$n=\epsilon_A(t)\epsilon_B(\lambda)\quad\text{in }R.$$
This identity does not assume $n$ invertible, a field base, or semisimplicity.

## Facts & Assumptions

**Given:** Exactly the local ring and finite free Hopf algebra in the Statement, with counits $\epsilon_A,\epsilon_B$, coproducts and antipode $S$.

[F1] Finite projective dual bases give the actual tensor–Hom isomorphism, without a field or choice hypothesis. [[lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism]]

## Proof

**Proof technique:** prove the finite Hopf-module inverse, normalize the integral pairing and compute the trace of the identity.

1.1 For any right Hopf module $M$ over $A$, define $P(m)=\sum m_{(0)}S(m_{(1)})$ and $\Phi(u\otimes a)=ua$ on coinvariants. Coassociativity and the antipode equations give $\rho(Pm)=Pm\otimes1$ and show that $\Psi(m)=\sum P(m_{(0)})\otimes m_{(1)}$ is inverse to $\Phi$: substituting gives $\Phi\Psi(m)=\sum m_{(0)}S(m_{(1)})m_{(2)}=m$, while for a coinvariant $u$ the same identities give $\Psi(ua)=u\otimes a$. These are finite tensor identities over $R$, with no division. [F1, given, construct, algebra]

2.1 Give $B$ the right $A$-action $(f\leftharpoonup a)(x)=f(xS(a))$. Define $\rho(f)=\sum f_0\otimes f_1$ by $\sum b(f_1)f_0(x)=\sum b(x_1)f(x_2)$ for all $b\in B$ and $x\in A$; [F1] gives a unique tensor. Convolution associativity gives the coaction identities, and evaluation plus $S(ab)=S(b)S(a)$ gives $\rho(f\leftharpoonup a)=\sum(f_0\leftharpoonup a_1)\otimes f_1a_2$. Its coinvariant condition is exactly $b f=\epsilon_B(b)f$ for every $b$, so step 1.1 identifies $B$ with $I_B\otimes_R A$, where $I_B$ is the integral submodule. The projection $P$ is an idempotent with image $I_B$, so $I_B$ is finite projective; reducing the isomorphism modulo the maximal ideal shows it has rank one. A finite projective module of rank one over $R$ is free: lift a residue basis, split the resulting surjection, and let $K$ be its finite direct-summand kernel. Since $K/\mathfrak mK=0$, express finite generators $k_i$ as $k_i=\sum_j a_{ij}k_j$ with $a_{ij}\in\mathfrak m$. The determinant of $1-(a_{ij})$ is congruent to one modulo $\mathfrak m$ and hence a unit, so its adjugate gives $K=0$. Choose the resulting generator $\lambda$. [F1, step 1.1, choose, construct, algebra]

3.1 Because $A$ is commutative, the Hopf antipode satisfies $S^2=1$: applying $S$ to either antipode convolution identity and using commutativity makes $S^2$ a convolution inverse of $S$, as is the identity map; uniqueness of convolution inverses gives the claim. Step 2.1 therefore makes $T:A\to B$, $T(a)(x)=\lambda(ax)$, an isomorphism. Let $t=T^{-1}(\epsilon_A)$. Then $\lambda(t)=1$, and $T(at)(x)=\lambda(atx)=\epsilon_A(a)\epsilon_A(x)=T(\epsilon_A(a)t)(x)$, so $at=\epsilon_A(a)t$. If $u$ is another integral, $T(u)=\lambda(u)\epsilon_A$, hence $u=\lambda(u)t$. Thus $t$ generates $I_A$ and the integral pairing is normalized without division. [step 2.1, choose, construct, algebra]

4.1 Since $at=\epsilon_A(a)t$, coassociativity and the antipode identity imply $\sum at_1\otimes t_2=\sum t_1\otimes S(a)t_2$: insert $\sum a_1\otimes a_2S(a_3)$, apply $\Delta(a_1t)$, then use the counit. Apply $\lambda$ to the first tensor factor and $S$ to the second. The integral equation for $\lambda$ gives $\sum\lambda(t_1)t_2=\lambda(t)1=1$, and $S^2=1$ from step 3.1; hence $a=\sum\lambda(at_1)S(t_2)$. This is an explicit finite dual-basis identity for $A$. [step 3.1, construct, algebra]

5.1 Taking the trace of the identity of the free rank-$n$ module $A$ in the dual-basis formula of step 4.1 gives $n=\sum\lambda(t_1S(t_2))$. The antipode equation gives $\sum t_1S(t_2)=\epsilon_A(t)1$, and $\epsilon_B(\lambda)=\lambda(1)$, so $n=\epsilon_A(t)\epsilon_B(\lambda)$. Any other generators of the two rank-one integral modules differ by units; if their pairing is normalized to one, their product of counits is unchanged. The trivial rank-one Hopf algebra is included. [step 3.1, step 4.1, algebra] ∎
