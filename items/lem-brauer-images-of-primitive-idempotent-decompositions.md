---
id: lem-brauer-images-of-primitive-idempotent-decompositions
kind: lemma
title: Brauer images retain the surviving primitive idempotents
deps: [def-brauer-homomorphism-for-a-p-subgroup, thm-brauer-homomorphism-is-multiplicative, lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions, thm-bezout-identity-for-polynomials]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: AKO, Fusion Systems in Algebra and Topology, IV §1 Proposition 1.4 and IV §2 Lemma 2.8; arbitrary-field polynomial proof supplied here
      url: https://www.math.ku.dk/english/research/conferences/2013/groups2013/AschbacherKessarOliver.pdf
proof_strategy: direct
---

## Statement

For $A_R=(kG)^R$ and $B_R=kC_G(R)$, the nonzero Brauer images of a primitive decomposition of $1$ in $A_R$ form a primitive decomposition of $1$ in $B_R$. If $Q\le P$ and $i$ is primitive in $A_P$, then the nonzero images under $\operatorname{Br}_Q$ of a primitive decomposition of $i$ in $A_Q$ form a primitive decomposition of $\operatorname{Br}_Q(i)$. More generally, for any surjective unital homomorphism of finite-dimensional algebras over a field, idempotents lift, and primitive idempotents have zero or primitive images, also in every corner.

## Facts & Assumptions

**Given:** Finite-dimensional algebras over a field; the Brauer cases have characteristic $p$.

[F1] Brauer maps have the fixed-algebra domains $A_R$. ([[def-brauer-homomorphism-for-a-p-subgroup]])

[F2] Each Brauer map is a unital surjective algebra homomorphism. ([[thm-brauer-homomorphism-is-multiplicative]])

[F3] Every idempotent admits a finite primitive decomposition. ([[lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions]])

[F4] Coprime polynomials over a field admit a polynomial linear combination equal to one. ([[thm-bezout-identity-for-polynomials]])

## Proof

**Proof technique:** direct.

1.1 Let $\phi:A\twoheadrightarrow B$ and $y^2=y$ in $B$. The cases $y=0,1$ lift by $0,1$. Otherwise choose $x$ above $y$. Linear dependence among $1,x,\ldots,x^{\dim A}$ gives $m(x)=0$ for a nonzero polynomial $m$. Since $m(y)=m(0)(1-y)+m(1)y=0$ and both idempotents are nonzero, multiplication by them forces $m(0)=m(1)=0$. Write $m(T)=g(T)(T-1)^s$ with $s\ge1$ maximal, so $g(1)\ne0$ and $g(0)=0$. Bézout supplies $ug+v(T-1)^s=1$. Set $q=ug$; then $q(q-1)=-uvm$, $q(0)=0$ and $q(1)=1$. Therefore $q(x)^2=q(x)$ and $\phi(q(x))=q(y)=y$. Polynomial evaluation is valid even in noncommutative $A$ because powers of one element commute. [F4]

2.1 For an idempotent $e\in A$, the corner map $eAe\to\phi(e)B\phi(e)$ is onto: a target $\phi(e)b\phi(e)$ has preimage $eae$ if $\phi(a)=b$. Apply step 1.1 using identity $e$ in this corner. If $e$ is primitive and $\phi(e)\ne0$ were not, a nontrivial idempotent in its target corner would lift to $u\in eAe$ with $u\ne0,e$. Then $e=u+(e-u)$ would be an orthogonal nontrivial decomposition, impossible. Conversely a primitive target idempotent lifts by step 1.1, then decomposition by [F3] has exactly one nonzero image, which supplies a primitive lift. [F3, step 1.1]

3.1 Homomorphisms preserve sums and orthogonality. Apply step 2.1 to the surjection $A_R\to B_R$ in [F2] and delete zero images in a decomposition of one. For the second clause decompose $i$ in $A_Q$, which contains $A_P$. A summand $j\le i$ is primitive in $iA_Qi$ exactly when primitive in $A_Q$, since $j(iA_Qi)j=jA_Qj$. The same image argument gives the primitive decomposition of $\operatorname{Br}_Q(i)$; if all images vanish it is the empty decomposition. No primitivity of $\operatorname{Br}_Q(i)$ itself is asserted when $i$ is only primitive in $A_P$. [F1, F2, F3, step 2.1] ∎

## Sources

AKO, Fusion Systems in Algebra and Topology, IV §1 Proposition 1.4 and IV §2 Lemma 2.8; arbitrary-field polynomial proof supplied here. Local argument and conventions as displayed above.
