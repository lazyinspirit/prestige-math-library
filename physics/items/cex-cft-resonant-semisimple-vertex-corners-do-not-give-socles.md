---
id: cex-cft-resonant-semisimple-vertex-corners-do-not-give-socles
kind: counterexample
title: A semisimple diagonal subalgebra need not force same-label projective socles
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-projective-object
  - def-essential-epimorphism-and-projective-cover
  - def-socle-of-a-module
dependency_roles:
  def-projective-object: mathematical-premise
  def-essential-epimorphism-and-projective-cover: mathematical-premise
  def-socle-of-a-module: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles-examples
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Roman Bezrukavnikov, MIT 18.706 Lecture 02: Semisimple Modules, Socles, Artinian Rings, Wedderburn’s Theorem"
      url: https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf
      locator: "§2.2, Definition 2.4, complete four-page lecture note; supports the socle convention, while the example is calculated locally."
    - title: "Roman Bezrukavnikov, MIT 18.706 Lecture 06: Artinian Rings are Noetherian, Projective Covers"
      url: https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec06.pdf
      locator: "§6.2, Definitions 6.6–6.7 and Example 6.8, complete four-page lecture note; supports essential-epimorphism and projective-cover conventions, while the example is calculated locally."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $B$ be the four-dimensional unital $\mathbb C$-algebra with basis $e_0,e_1,u,v$, unit $e_0+e_1$, and multiplication determined by $e_i e_j=\delta_{ij}e_i$, $e_1u=u=ue_0$, $e_0v=v=ve_1$, all other products of an idempotent and an arrow equal to zero, and $uv=vu=0$. Equivalently, $B$ is the quotient of the path algebra of the two-cycle by all length-two paths. Give $B$ the $\mathbb Z$-grading $|e_0|=|e_1|=0$, $|u|=1$, $|v|=-1$. For $i=0,1$, let $S_i$ be the one-dimensional left $B$-module on which $e_i$ acts as $1$, $e_{1-i},u,v$ act as $0$, and regard its canonical graded lift as concentrated in degree $0$. The socle is the sum of all simple submodules; the socles below are taken in the category of ungraded left $B$-modules. In the category of finite-dimensional $\mathbb Z$-graded left $B$-modules with degree-preserving maps, define $D(M)_n=\operatorname{Hom}_{\mathbb C}(M_n,\mathbb C)$ and $(b\cdot f)(m)=f(b^*m)$, where $*$ is the linear anti-involution determined by $e_i^*=e_i$ and $u^*=v,\ v^*=u$. Then $D$ is an exact contravariant duality with $D^2\cong\mathrm{id}$ and $D(S_i)\cong S_i$, so it preserves the grading and fixes the two simple labels. In finite-dimensional left $B$-modules, projectivity means the lifting property for surjections. The diagonal subalgebra $A=\mathbb C e_0\oplus\mathbb C e_1\cong\mathbb C\times\mathbb C$ is semisimple, meaning it is a direct sum of simple left modules, but
$$
\operatorname{Soc}(Be_0)=S_1,\qquad \operatorname{Soc}(Be_1)=S_0.
$$
The modules $Be_0$ and $Be_1$ are projective, so these algebraic properties alone do not imply a same-label projective socle. This is an algebraic countermodel only, not a vertex-operator-algebra counterexample.

## Statement references

[[def-socle-of-a-module]]

[[def-essential-epimorphism-and-projective-cover]]

[[def-projective-object]]

## Facts & Assumptions

**Given:** The finite-dimensional unital algebra $B$, its stated multiplication convention, grading, modules, and anti-involution from the Statement.

[F1] [[def-projective-object]]: a projective object lifts morphisms through epimorphisms. Step 2.1 verifies this lifting property first for $B$ and then for its direct summands $Be_i$.

[F2] [[def-essential-epimorphism-and-projective-cover]]: an epimorphism is essential when its kernel is superfluous; a projective cover is an essential epimorphism with projective source.

[F3] [[def-socle-of-a-module]]: the socle is the sum of all simple submodules.

## Proof

1.1 The multiplication rules give basis $e_0,e_1,u,v$, with $u=e_1ue_0$, $v=e_0ve_1$, and all products of two arrows zero. The arrow span $J=\mathbb C u\oplus\mathbb C v$ is a two-sided ideal with $J^2=0$ and $B/J\cong\mathbb C\oplus\mathbb C$. The diagonal subalgebra $A=\mathbb C e_0\oplus\mathbb C e_1\cong\mathbb C^2$ has regular left module $A=\mathbb C e_0\oplus\mathbb C e_1$, a direct sum of two one-dimensional simple modules, so it is semisimple under the Statement's convention. [given, algebra]

2.1 First verify projectivity under [F1]. The regular left module $B$ is free of rank one: given a surjection $q:E\twoheadrightarrow M$ and a homomorphism $f:B\to M$, choose $e\in E$ with $q(e)=f(1)$ and define the lift $\widetilde f(b)=be$. Thus $B$ is projective. Since $1=e_0+e_1$ and $e_0e_1=e_1e_0=0$, $B=Be_0\oplus Be_1$ as a left module. If $P$ is a direct summand of a projective module $B$, then for any $f:P\to M$, compose with the projection $B\to P$, lift that map through $q$ using projectivity of $B$, and restrict the lift to $P$; hence $P$ is projective. In particular $Be_0$ and $Be_1$ are projective. They have bases $Be_0=\mathbb C e_0\oplus\mathbb C u$ and $Be_1=\mathbb C e_1\oplus\mathbb C v$. Their top quotients are $Be_0/\mathbb C u\cong S_0$ and $Be_1/\mathbb C v\cong S_1$. Each quotient map is a projective cover: for $Be_0$, if a submodule $H$ satisfies $H+\mathbb C u=Be_0$, it contains some $ae_0+bu$ with $a\ne0$; applying $e_0$ gives $ae_0\in H$, then $u=ue_0\in H$, so $H=Be_0$. The same argument with $e_1$ and $v=ve_1$ proves superfluity for the second kernel. The lines $\mathbb C u\cong S_1$ and $\mathbb C v\cong S_0$ are simple. Every vector $ae_0+bu\in Be_0$ with $a\ne0$ generates $e_0$ and $u$, so no proper simple submodule of $Be_0$ is outside $\mathbb C u$; the analogous calculation in $Be_1$ shows every proper simple submodule lies in $\mathbb C v$. Hence [F3] gives $\operatorname{Soc}(Be_0)=S_1$ and $\operatorname{Soc}(Be_1)=S_0$, with the labels swapped. [F1, F2, F3, step 1.1, algebra]

3.1 The linear map $*$ reverses each defining multiplication relation: for example, $(e_1u)^*=v e_1=v=(u)^*$ and $(u e_0)^*=e_0v=v=(u)^*$, while $(uv)^*=vu=0$; the idempotent and unit relations are preserved as well. Hence it extends to the stated anti-involution. In the category of finite-dimensional $\mathbb Z$-graded $B$-modules and degree-preserving maps, define $D(M)_h=M_h^*$ with action $(b\cdot f)(m)=f(b^*m)$. Reversing multiplication verifies the action law. The functor is exact because finite-dimensional vector-space duality is exact, and the degree-preserving evaluation maps $M\to D^2(M)$ are natural isomorphisms, so $D$ is a contravariant duality. If $f\in D(M)_h$, then $u\cdot f$ is supported on $M_{h+1}$, because $v$ lowers its argument's degree; similarly $v\cdot f\in D(M)_{h-1}$. Thus the dual respects the assigned degree shifts. Each $S_i$ is concentrated in degree $0$ by the Statement's convention and fixed by the dual idempotent action, so $D(S_i)\cong S_i$. Exact degree-preserving duality fixing both simple labels therefore coexists with the swapped ungraded projective socles in Step 2.1. This algebraic model is not a VOA and makes no claim about any VOA's Zhu algebra. [given, step 2.1, algebra] ∎
