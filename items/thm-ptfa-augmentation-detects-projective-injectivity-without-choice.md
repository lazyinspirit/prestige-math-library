---
id: thm-ptfa-augmentation-detects-projective-injectivity-without-choice
kind: theorem
title: PTFA augmentation detects projective injectivity without choice
status: draft
origin: pipeline
deps:
  - def-poly-torsion-free-abelian-group
  - def-projective-module
  - def-opposite-ring
  - def-tensor-product-of-modules-by-generators-and-relations
  - lem-torsion-free-abelian-extensions-preserve-group-ring-domains
  - lem-ore-localization-is-flat-and-detects-module-torsion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Proposition2.4 and Proposition2.11, augmentation and skew-field rank
    - title: Cha, Amenable L2-theoretic methods and knot concordance
      url: https://arxiv.org/pdf/1010.1058
      locator: Strebel class D(R) convention
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
---

## Statement

Let $k$ be a commutative field and $G$ a PTFA group. For every homomorphism $f:P\to Q$ between projective right-$k[G]$ modules, if
$$f\otimes1:P\otimes_{k[G]}k\longrightarrow Q\otimes_{k[G]}k$$
is injective under the augmentation $k[G]\to k$, then $f$ is injective. Projective means the lifting property for surjections, applied to right modules; it does not mean a supplied free basis. Thus this is the right-module defining property of Strebel's class $D(k)$. The left-module version holds too.

Moreover, if $k[G]\subseteq K$ is a supplied division ring of Ore fractions, every finite matrix $T$ over $k[G]$ satisfies
$$\operatorname{rank}_K(T\otimes K)\ge\operatorname{rank}_k(\varepsilon T).$$
Both assertions require no choice axiom. The group need not be finitely generated, its series need not be normal in all of $G$, and its successive extensions need not split.

## Facts & Assumptions

**Given:** The field, PTFA group, augmentation and, for the matrix consequence, the supplied Ore fraction division ring.

[F1] PTFA means a finite subnormal series with torsion-free abelian successive quotients. A torsion-free abelian group has a commutative group ring with no zero divisors over $k$: apply the nonsplit-extension domain theorem with trivial kernel. [[def-poly-torsion-free-abelian-group]], [[lem-torsion-free-abelian-extensions-preserve-group-ring-domains]]

[F2] Projectivity is the lifting property against each individual surjection; for right modules use the opposite-ring version of that definition. Tensor relations preserve compositions and split identities. [[def-projective-module]], [[def-opposite-ring]], [[def-tensor-product-of-modules-by-generators-and-relations]]

[F3] Ore fraction extension is exact on arbitrary right modules, hence preserves each injection of finite free modules. [[lem-ore-localization-is-flat-and-detects-module-torsion]]

## Proof

1.1 Call the finite-free property for a group $L$ the implication that a right-$k[L]$ matrix map between finite free modules is injective if its augmentation is injective. If $L$ is torsion-free abelian, [F1] makes $k[L]$ a commutative ring without zero divisors. For an $n$ by $m$ matrix whose augmentation is injective, finite elimination over $k$ gives an $m$ by $m$ minor with nonzero augmented determinant. The determinant of that minor is therefore nonzero in $k[L]$. Multiplying a vector in its kernel by the adjugate shows that this nonzero determinant kills every coordinate. Absence of zero divisors forces all coordinates zero, so the original matrix is injective. This also covers the trivial group and empty matrices. [F1, given, construct, algebra]

1.2 Suppose $N\trianglelefteq L$, and both $N$ and $L/N$ have the finite-free property. Let $T:k[L]^m\to k[L]^n$ have injective augmentation. Applying the quotient-ring map $k[L]\to k[L/N]$ gives $T_{L/N}$ with the same augmented matrix, hence injective. If $v\in\ker T$, its finitely many coordinates have finite group supports. Choose representatives for the finitely many right-$N$ cosets meeting those supports. In the input, the vectors $e_i g$ for these representatives form a basis of a finite free right-$k[N]$ submodule containing $v$. The finitely many images $T(e_i g)$ are contained in another finite free right-$k[N]$ submodule of the target, obtained by choosing representatives for their finitely many support cosets. Normality ensures that the quotient-ring map sends these coset bases to distinct quotient group elements. Thus the restricted finite $k[N]$ matrix has augmentation equal to the $k$-linear restriction of $T_{L/N}$ to the corresponding finite span of quotient basis elements. That restriction is injective, so the finite-free property of $N$ makes the restricted matrix injective. Consequently $v=0$. Only finite sets of coset representatives were selected; no global transversal or splitting was used. [given, construct, algebra]

2.1 Induct up a finite PTFA subnormal series. The trivial subgroup has the property by step 1.1; at each step the preceding subgroup is normal in the next and the quotient is torsion-free abelian. Steps 1.1 and 1.2 therefore prove the finite-free property for that next subgroup. This uses only the successive normalities given in [F1], not normality of the whole series in $G$. After finitely many steps, $G$ has the finite-free property. [F1, step 1.1, step 1.2, algebra]

3.1 The same detection property holds for a map between free $k[G]$ modules of arbitrary ranks. Indeed a proposed nonzero kernel vector uses finitely many input basis elements; their images use finitely many target basis elements. Restricting to those finite free submodules preserves injectivity of the augmented map, because their inclusions into the larger free modules are split coordinate inclusions and remain so after augmentation. The finite-free property of step 2.1 makes the restriction injective, contradicting the proposed vector. No arbitrary free module is being asserted projective in the absence of choice. [F2, step 2.1, construct, algebra]

4.1 Put $A=k[G]$ and let $f:P\to Q$ be as in the Statement. The canonical free module $F_P=A^{(P)}$ on the underlying set of $P$ has a surjection $\pi_P:F_P\to P$ sending $e_p$ to $p$. Projectivity gives one section $s_P$, and similarly gives $\pi_Q:F_Q\to Q$ and a section $s_Q$. Set $e=s_P\pi_P$, so $e^2=e$. Define a map between actual free modules $$g:F_P\longrightarrow F_Q\oplus F_P,\qquad g(x)=(s_Qf\pi_Px,(1-e)x).$$ If an augmented vector $\xi$ lies in $\ker(g\otimes k)$, its second coordinate says $\xi=(s_P\otimes k)(\pi_P\otimes k)\xi$. Since $s_Q\otimes k$ has left inverse $\pi_Q\otimes k$, its first coordinate implies $(f\otimes k)(\pi_P\otimes k)\xi=0$. The assumed injectivity yields $(\pi_P\otimes k)\xi=0$, and hence $\xi=0$. Thus $g\otimes k$ is injective, so $g$ is injective by step 3.1. For $p\in\ker f$, $g(s_Pp)=0$; therefore $s_Pp=0$ and $p=0$. The two sections are supplied by the two individual projectivity assertions, not by a simultaneous lift selection. This proves the full right-projective assertion. [F2, step 3.1, construct, algebra]

5.1 Inversion $g\mapsto g^{-1}$ and the identity on $k$ give an anti-isomorphism of $k[G]$ with itself that preserves augmentation. It converts left modules into right modules, preserves the individual lifting property, and converts the augmented injectivity question to the one proved in step 4.1. Hence the left-projective assertion holds too. This is an explicit opposite-ring change and chooses neither bases nor representatives. [F2, step 4.1, construct, algebra]

6.1 Let $r$ be the rank of the finite augmented matrix $\varepsilon T$. Choose $r$ input columns and $r$ output rows giving an invertible augmented square minor; this is finite elimination over $k$. Its unaugmented square matrix is injective over $k[G]$ by step 2.1, and remains injective over $K$ by [F3]. Finite-dimensional division-ring elimination therefore gives it rank $r$ over $K$. It is a row projection of the corresponding $r$ columns of $T\otimes K$, so those columns are independent and the full matrix has rank at least $r$. The case $r=0$ is automatic. All eliminations, supports, sections and coset choices in the proof are finite or individually supplied; no basis of a projective module or infinite family of coset representatives was selected. Thus both detection and the stated rank comparison hold without a choice axiom. [F3, step 2.1, step 4.1, step 5.1, construct, algebra] ∎
