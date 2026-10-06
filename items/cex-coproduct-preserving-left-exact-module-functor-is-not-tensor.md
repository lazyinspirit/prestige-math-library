---
id: cex-coproduct-preserving-left-exact-module-functor-is-not-tensor
kind: counterexample
title: "A coproduct-preserving left exact module functor is not tensor"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-watts-for-arbitrary-unital-rings
  - thm-hom-functors-are-left-exact
  - def-left-exact-and-right-exact-functor
  - thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms
  - thm-abelian-groups-form-an-abelian-category
  - prop-abelian-groups-are-z-modules
  - def-hom-groups-and-induced-hom-maps
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
justified_by: []
aliases: []
dependency_level: 4
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Every additive module functor that is left exact and preserves coproducts is
naturally isomorphic to a tensor functor.

## Facts & Assumptions

**Given:** The functor $F=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,-)$ on abelian groups, the cyclic group $\mathbb Z/2$ with classes $[0],[1]$, and a family $(X_i)_{i\in I}$ of abelian groups.

[F1] $\operatorname{Hom}_{\mathbb Z}(A,B)$ is an abelian group under pointwise addition, and postcomposition is a homomorphism ([[def-hom-groups-and-induced-hom-maps]]).

[F2] Covariant $\operatorname{Hom}_R(X,-)$ is left exact ([[thm-hom-functors-are-left-exact]]), and abelian groups are $\mathbb Z$-modules with the same homomorphisms ([[prop-abelian-groups-are-z-modules]]).

[F3] The direct sum $\bigoplus_iX_i$ consists of finitely supported families and is the coproduct with coordinate inclusions; a homomorphism out of it is uniquely determined by its components ([[def-direct-sum-of-a-family-of-modules]], [[thm-universal-property-of-module-direct-sums]]).

[F4] In $\mathbb Z/2$ one has $[1]\neq[0]$ and $2[1]=[0]$, and every element is either $[0]$ or $[1]$ ([[def-integers-modulo-n]], [[def-addition-and-multiplication-modulo-n]]). Consequently a homomorphism $\varphi:\mathbb Z/2\to X$ is determined by $\varphi([1])$ and satisfies $2\varphi([1])=0$.

[F5] A right exact functor between abelian categories preserves epimorphisms ([[thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms]]), and $\mathbf{Ab}$ is abelian ([[thm-abelian-groups-form-an-abelian-category]]).

[F6] Every tensor functor $T_N=N\otimes_{\mathbb Z}-:\mathbf{Ab}\to\mathbf{Ab}$ is additive, right exact and coproduct-preserving, and right exactness is preserved under natural isomorphism ([[thm-eilenberg-watts-for-arbitrary-unital-rings]]).

[F7] A functor is left exact when it preserves every finite limit and right exact when it preserves every finite colimit ([[def-left-exact-and-right-exact-functor]]).

## Counterexample

**Proof technique:** direct.

1.1 $F$ is additive: for parallel homomorphisms $u,v:A\to B$ and $\varphi\in\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,A)$, postcomposition satisfies $(u+v)_*(\varphi)= (u+v)\circ\varphi=u\circ\varphi+v\circ\varphi$ by [F1], so $F(u+v)=F(u)+F(v)$. [F1]

1.2 $F$ preserves arbitrary direct sums: the canonical map $\bigoplus_i\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,X_i)\to\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\bigoplus_iX_i)$ induced by the coordinate inclusions is bijective. It is injective because distinct components differ on $[1]$ in distinct coordinates by [F3]; it is surjective because for $\varphi$ the element $x=\varphi([1])$ has finite support $S$ by [F3] and satisfies $2x=0$ by [F4], so each $x_i$ satisfies $2x_i=0$ and the maps $\varphi_i([1])=x_i$ defined for $i\in S$ and zero elsewhere are well-defined homomorphisms with $\varphi=\sum_i\varphi_i$. [F3, F4]

1.3 $F$ is left exact by [F2]. [F2, F7]

1.4 $F$ is not right exact. The map $u:\mathbb Z\to\mathbb Z/2$, $u(k)=[k]$, is surjective, hence an epimorphism: if $g\circ u=h\circ u$ then $g$ and $h$ agree on every class. If $F$ were right exact, $F(u)$ would be an epimorphism by [F5]. But $\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z)=0$, since $2\varphi([1])=0$ in the torsion-free group $\mathbb Z$ forces $\varphi([1])=0$ by [F4]; so $F(u)$ is the zero map from $0$ to $\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)$. That map is not an epimorphism, because the identity and zero endomorphisms of $H:=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)$ are distinct ($H$ contains the nonzero identity map of $\mathbb Z/2$ by [F4]) and both have the same composite with $0\to H$. Hence $F$ is not right exact. [F4, F5, F7]

2.1 $F$ is not naturally isomorphic to any tensor functor $T_N=N\otimes_{\mathbb Z}-$: if $F\cong T_N$, then $F$ would be right exact, since $T_N$ is right exact by [F6] and right exactness is carried across a natural isomorphism, contradicting step 1.4. [F6, step 1.4]

3.1 Thus $F$ is an additive functor that is left exact and preserves arbitrary direct sums, but is not tensor; the statement is refuted. No choice is used: the supports occurring in steps 1.2 and 1.4 are determined by the elements involved, and no family of nonempty sets is selected from. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
