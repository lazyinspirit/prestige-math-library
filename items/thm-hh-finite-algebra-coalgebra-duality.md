---
id: thm-hh-finite-algebra-coalgebra-duality
kind: theorem
title: "Finite-dimensional algebra-coalgebra duality"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-algebra-over-a-commutative-ring, def-hh-scalar-and-tensor-conventions, lem-hh-finite-tensor-duality-and-canonical-coevaluation, prop-functoriality-of-module-tensor-products, def-algebraic-dual-and-linear-functional, def-hh-dual-algebra-and-rational-module, def-dimension, def-linear-map]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No AC is used; each basis and dual basis is finite and belongs to the finite-dimensional object under discussion."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, printed pp.11–15; Examples 1.15–1.16, pp.13–14; §§3.3–3.4, printed pp.36–41"
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, SMSTC supplementary course notes 2026–7"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
      locator: "§2.3, printed pp.23–24"
---
## Statement

For a finite-dimensional unital associative $k$-algebra $A$, the full dual $A^*$ is a coalgebra under the transpose of multiplication and unit. For every coalgebra $C$, the full dual $C^*$ is a unital associative algebra under convolution. These dualizations reverse algebra and coalgebra maps. Restricted to finite-dimensional objects, the two contravariant dualizations are inverse equivalences via the canonical evaluation maps $A\to A^{**}$ and $C\to C^{**}$. The finite-dimensionality hypothesis in the algebra-to-coalgebra direction is on $A$ itself, not merely on a module over $A$.

## Facts & Assumptions

**Given:** A field $k$, a finite-dimensional unital associative $k$-algebra $(A,m_A,1_A)$, a coalgebra $(C,\Delta_C,\varepsilon_C)$, and algebra and coalgebra maps as named below.

[F1] A unital associative $k$-algebra has associative multiplication $m_A$ and unit $1_A$; algebra maps preserve multiplication, unit, and $k$-scalars. ([[def-algebra-over-a-commutative-ring]])

[F2] A coalgebra has coassociative $\Delta$ and a two-sided counit $\varepsilon$; a coalgebra map preserves both structure maps. ([[def-hh-coalgebra-and-coalgebra-map]])

[F3] The full algebraic dual $V^*$ is the space of all linear functionals $V\to k$, and for finite-dimensional $V,W$ the pairing $\theta_{V,W}:V^*\otimes W^*\to(V\otimes W)^*$ sends $f\otimes g$ to $[v\otimes w\mapsto f(v)g(w)]$ and is an isomorphism. ([[def-algebraic-dual-and-linear-functional]], [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]])

[F4] Tensor maps are determined on elementary tensors and preserve composition. ([[prop-functoriality-of-module-tensor-products]])

[F5] The candidate convolution product on $C^*$ is $(f*g)(c)=(f\otimes g)(\Delta_C(c))$, with candidate unit $\varepsilon_C$. ([[def-hh-dual-algebra-and-rational-module]])

[F6] A vector space is finite-dimensional precisely when it has a finite basis. ([[def-dimension]])

## Proof

**Given:** The data above. No choice principle is used; all bases below are finite bases of finite-dimensional spaces.

1.1 Let $\theta_{A,A}:A^*\otimes A^*\to(A\otimes A)^*$ be the isomorphism in [F3], applicable because $A$ is finite-dimensional and therefore has a finite basis by [F6]. Define
 $\Delta_{A^*}:=\theta_{A,A}^{-1}\circ m_A^*$ and $\varepsilon_{A^*}(f):=f(1_A)$.
For $f\in A^*$ and $a,b\in A$, evaluation through $\theta_{A,A}$ gives $\theta_{A,A}(\Delta_{A^*}f)(a\otimes b)=f(ab)$.
The tensor-product pairing on three finite-dimensional factors, obtained by applying [F3] twice and reassociating, separates elements of $A^*\otimes A^*\otimes A^*$. [F1, F3, F6, construct]

1.2 For arbitrary coalgebra $C$, define convolution by [F5]. It is bilinear because $\Delta_C$ is linear and tensor evaluation is bilinear. For $f,g,h\in C^*$ and $c\in C$, the values $((f*g)*h)(c)$ and $(f*(g*h))(c)$ are evaluations of $f\otimes g\otimes h$ on $(\Delta_C\otimes\operatorname{id})\Delta_C(c)$ and $(\operatorname{id}\otimes\Delta_C)\Delta_C(c)$; coassociativity in [F2] makes them equal. The two counit equations give $(\varepsilon_C*f)(c)=f(c)=(f*\varepsilon_C)(c)$. Hence $C^*$ is a unital associative algebra, without a finite-dimensionality hypothesis on $C$. [F2, F4, F5, algebra]

1.3 Let $\psi:C\to D$ be a coalgebra map. For $f,g\in D^*$ and $c\in C$, $\psi^*(f*g)(c)=(f\otimes g)(\Delta_D(\psi(c)))=(f\otimes g)((\psi\otimes\psi)\Delta_C(c))=((\psi^*f)*(\psi^*g))(c)$. Also $\psi^*(\varepsilon_D)=\varepsilon_D\psi=\varepsilon_C$. Therefore $\psi^*:D^*\to C^*$ is a unital algebra map. [F2, F4, F5, algebra]

2.1 For finite-dimensional coalgebra $C$, [F6] gives a finite basis of $C$; define $\eta_C:C\to C^{**}$ by $\eta_C(c)(f)=f(c)$. A finite basis of $C$ and its dual show $\eta_C$ is a vector-space isomorphism. For $f,g\in C^*$, evaluating $\Delta_{C^{**}}\eta_C(c)$ against $f\otimes g$ gives $\eta_C(c)(f*g)=(f*g)(c)=(f\otimes g)(\Delta_C(c))$. The same evaluation of $(\eta_C\otimes\eta_C)\Delta_C(c)$ has that value; finite tensor duality [F3] therefore gives equality of the coproducts. Also $\varepsilon_{C^{**}}(\eta_C(c))=\eta_C(c)(\varepsilon_C)=\varepsilon_C(c)$. Hence $\eta_C$ is a coalgebra isomorphism. [F3, F6, step 1.2, algebra]

2.2 For $a,b,c\in A$, evaluation of $(\Delta_{A^*}\otimes\operatorname{id})\Delta_{A^*}(f)$ on $a\otimes b\otimes c$ is $f((ab)c)$, while evaluation of $(\operatorname{id}\otimes\Delta_{A^*})\Delta_{A^*}(f)$ is $f(a(bc))$. These are equal by associativity in [F1]; separation from 1.1 gives coassociativity. Similarly, evaluation of $(\varepsilon_{A^*}\otimes\operatorname{id})\Delta_{A^*}(f)$ at $a$ is $f(1_Aa)=f(a)$ and evaluation of $(\operatorname{id}\otimes\varepsilon_{A^*})\Delta_{A^*}(f)$ at $a$ is $f(a1_A)=f(a)$. Thus both counit identities hold, so $A^*$ is a coalgebra. [F1, F3, F6, step 1.1, algebra]

2.3 Let $\phi:A\to B$ be a unital algebra map between finite-dimensional algebras, so [F6] supplies finite bases for both. Its transpose $\phi^*:B^*\to A^*$ preserves counits since $\varepsilon_{A^*}(\phi^*f)=f(\phi(1_A))=f(1_B)=\varepsilon_{B^*}(f)$. For $a,a'\in A$, evaluation of $\Delta_{A^*}(\phi^*f)$ at $a\otimes a'$ is $f(\phi(aa'))=f(\phi(a)\phi(a'))$. Writing $\Delta_{B^*}(f)=\sum_r f_r\otimes g_r$, evaluation of $(\phi^*\otimes\phi^*)\Delta_{B^*}(f)$ at $a\otimes a'$ is $\sum_r f_r(\phi(a))g_r(\phi(a'))=\Delta_{B^*}(f)(\phi(a)\otimes\phi(a'))=f(\phi(a)\phi(a'))$ by the defining transpose formula in 1.1. Since $A$ is finite-dimensional, [F3] separates the tensors, so $\phi^*$ is a coalgebra map. [F1, F3, F6, step 1.1, algebra]

2.4 For finite-dimensional $A$, [F6] supplies a finite basis; define $\eta_A:A\to A^{**}$ by $\eta_A(a)(f)=f(a)$. If $a_1,\dots,a_n$ is a basis and $a_1^*,\dots,a_n^*$ its dual basis, then $\eta_A(a_i)$ is the dual basis to $a_i^*$; hence $\eta_A$ is a vector-space isomorphism. For $f\in A^*$, convolution in $A^{**}$ and the defining equation for $\Delta_{A^*}$ give $(\eta_A(a)*\eta_A(b))(f)=\sum \eta_A(a)(f_1)\eta_A(b)(f_2)=\Delta_{A^*}(f)(a\otimes b)=f(ab)=\eta_A(ab)(f)$. The unit of $A^{**}$ is the counit of $A^*$, and its value on $f$ is $f(1_A)=\eta_A(1_A)(f)$. Thus $\eta_A$ is an algebra isomorphism. [F1, F3, F5, F6, step 1.1, algebra]

3.1 For composable maps $u:V\to W$ and $v:W\to X$, precomposition gives $(v\circ u)^*=u^*\circ v^*$, so the transposes in steps 2.3 and 1.3 define contravariant functors. The evaluation maps are natural: for a linear map $u:V\to W$, $u^{**}(\eta_V(v))(f)=\eta_V(v)(f\circ u)=f(u(v))=\eta_W(u(v))(f)$. Steps 2.4 and 2.1 show these natural maps are structure-preserving isomorphisms on the finite subcategories, so the two dual functors are inverse equivalences there. The hypothesis concerns the whole algebra or coalgebra object; a finite-dimensional comodule over an infinite-dimensional coalgebra does not make that coalgebra finite-dimensional. [step 2.3, step 1.3, step 2.4, step 2.1, algebra]

4.1 Steps 1.1 and 2.2 make $A^*$ a coalgebra when $A$ is finite; step 1.2 makes $C^*$ an algebra for every coalgebra; steps 2.3 and 1.3 prove reversal on algebra and coalgebra maps; steps 2.4, 2.1, and 3.1 prove the finite bidual equivalence and its scope. [step 1.1, step 2.2, step 1.2, step 2.3, step 1.3, step 2.4, step 2.1, step 3.1] ∎

## Remarks

The convention is the evaluation pairing $f(a)g(b)$ on $a\otimes b$. The finite tensor-duality supplier states that convention explicitly. Sources that identify the dual of a tensor product with the reversed tensor factors require a switch; no such switch is implicit here.
