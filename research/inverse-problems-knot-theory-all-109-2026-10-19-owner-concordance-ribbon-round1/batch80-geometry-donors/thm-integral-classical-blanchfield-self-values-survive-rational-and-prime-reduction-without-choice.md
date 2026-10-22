---
id: thm-integral-classical-blanchfield-self-values-survive-rational-and-prime-reduction-without-choice
kind: theorem
title: Integral classical Blanchfield self-values survive rational and prime reduction
status: draft
origin: session
deps: [thm-compact-betti-one-manifolds-have-primitive-alexander-annihilators-without-choice, lem-primitive-laurent-annihilators-preserve-nonzero-values-under-rational-and-prime-reduction, lem-ore-localization-is-flat-and-detects-module-torsion, thm-compact-oriented-manifold-local-coefficient-duality-in-zf, lem-involutive-twisted-chain-duals-realize-local-coefficient-duality, lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction, lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Section4.1, printed page11; AppendixA, printed page30
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Section2.1, coefficient Bockstein linking forms
---

## Statement

Let $M$ be a closed connected oriented Hausdorff topological three-manifold, with a specified based loop $\mu$ freely generating $H_1(M;\mathbb Z)\cong\mathbb Z$. Use the associated right infinite-cyclic coefficient system, with first-loop-first convention and transport around $a$ given by left multiplication by $t^{-\phi(a)}$, where $\phi(\mu)=1$. Put $\Lambda=\mathbb Z[t,t^{-1}]$, $\Lambda_{\mathbb Q}=\mathbb Q[t,t^{-1}]$, and $\Lambda_p=\mathbb F_p[t,t^{-1}]$. All systems have their based standard parallel Hermitian structure with involution $t^*=t^{-1}$. Define $B_{\mathbb Z}$, $B_{\mathbb Q}$ and $B_p$ on the respective first local homology modules by inverse coefficient Bockstein, inverse oriented cap duality and evaluation, with targets $\mathbb Q(t)/\Lambda$, $\mathbb Q(t)/\Lambda_{\mathbb Q}$ and $\mathbb F_p(t)/\Lambda_p$.

These forms are defined on the whole respective first homology modules. There is a primitive annihilator $\Delta\in\mathbb Z[t]$, $\Delta(1)=1$, for $H_1(M;\Lambda)$. Put $\delta=\Delta^*$. For the actual coefficient images $x_{\mathbb Q},x_p,y_{\mathbb Q},y_p$ of any $x,y\in H_1(M;\Lambda)$,
$$B_{\mathbb Q}(x_{\mathbb Q},y_{\mathbb Q})=j\bigl(B_{\mathbb Z}(x,y)\bigr),\qquad B_p(x_p,y_p)=\rho_{p,\delta}\bigl(B_{\mathbb Z}(x,y)\bigr).$$
Here $j$ is the natural integral-to-rational quotient map, and $\rho_{p,\delta}$ is the well-defined fraction reduction on the $\delta$-annihilated subgroup, $[a/\delta]\mapsto[a_p/\delta_p]$. Its denominator is nonzero modulo every prime. Consequently, if $B_{\mathbb Z}(x,x)\ne0$, then $B_{\mathbb Q}(x_{\mathbb Q},x_{\mathbb Q})\ne0$ and $B_p(x_p,x_p)\ne0$ for all primes outside a finite explicit set. No choice principle, finite CW model, smoothness, Seifert presentation, or global rational-function reduction map is assumed.

## Facts & Assumptions

**Given:** The closed oriented manifold, marked integral homology generator and the explicit right coefficient convention.

[F1] A primitive polynomial $\Delta$ with $\Delta(1)=1$ annihilates the integral first local homology, and its coefficient image annihilates the corresponding first local homology over every commutative constant ring, with natural coefficient maps. [[thm-compact-betti-one-manifolds-have-primitive-alexander-annihilators-without-choice]]

[F2] For a primitive Laurent polynomial $\delta$, the integral-to-rational quotient map is injective on its annihilated subgroup, and the reductions $[a/\delta]\mapsto[a_p/\delta_p]$ are well-defined and preserve each nonzero class outside finitely many explicitly bounded primes. [[lem-primitive-laurent-annihilators-preserve-nonzero-values-under-rational-and-prime-reduction]]

[F3] Localization into the fraction field is exact and commutes with arbitrary chain homology. [[lem-ore-localization-is-flat-and-detects-module-torsion]]

[F4] Closed oriented cap duality holds without choice for arbitrary underlying abelian-group local systems and commuting scalar actions. The supplied Hermitian structure identifies intrinsic dual systems with conjugate right systems, naturally under the stated coefficient maps. [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]], [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F5] Compact-manifold right singular chains have a free basis prescribed from one finite atlas and finite path data, with an explicit one-vertex reduction. The low-degree coefficient Bockstein is natural and exact without an infinite-product lifting premise. [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds]]

## Proof

1.1 Choose $\Delta$ from [F1] and put $\delta=\Delta^*=\Delta(t^{-1})$. Both are primitive and evaluate to one at $t=1$. In each field coefficient case their reductions are nonzero. By [F3], localization annihilates the first homology because its annihilator becomes invertible; thus $H_1(M;\mathbb Q(t))=0$ for the integral and rational systems and $H_1(M;\mathbb F_p(t))=0$ for every prime system. The unlocalized first homology is torsion in each case, since the same nonzero annihilator kills it. These are statements about the actual coefficient homology of $M$ by [F1] and arbitrary-chain localization; no finite CW structure is used. [F1, F3, given, construct, algebra]

2.1 For any of these coefficient inclusions $R\subset K$, the degree-two dual $K$ cohomology is zero by [F4] and $H_1(M;K)=0$. The degree-one dual $K$ cohomology is zero too: use [F5]'s one-vertex chain model with $C_0=K$. Its $d_1$ image is zero or all of $K$. In the first case $H_1=0$ makes every degree-one chain a boundary, so every dual one-cocycle is zero. In the second choose one $v$ with $d_1v=1$; split off $vK$, and use $\ker d_1=\operatorname{im}d_2$ to see that each dual one-cocycle is a coboundary. The natural exact coefficient segment in [F5] therefore makes $\beta:H^1(M;(K/R)^\vee)\to H^2(M;R^\vee)$ an isomorphism. Closed cap duality and evaluation consequently define all the displayed linking forms on the whole first homology. This step does not assert that the final evaluation map is an isomorphism. [F4, F5, step 1.1, construct, algebra]

3.1 Fix $x,y$ and take an integral dual two-cocycle $a$ representing the inverse-cap class of $\bar x$. Since $x\Delta=0$ by [F1] and duality is linear on the conjugate module, $\delta[a]=0$. Thus one whole integral dual one-cochain $c$ satisfies $\partial^*c=\delta a$. The $K$-cochain $b=c/\delta$ satisfies $\partial^*b=a$, so its quotient is a one-cocycle with Bockstein $[a]$. Uniqueness of the inverse in step 2.1 gives $$B_{\mathbb Z}(x,y)=[c(y)/\delta]\in\mathbb Q(t)/\Lambda.$$ In particular this value lies in the $\delta$-annihilated subgroup. This construction uses one integral cochain witness from a zero cohomology class; it neither chooses quotient representatives on all simplices nor asks an infinite product of surjections to be onto. [F1, F4, F5, step 2.1, construct, algebra]

4.1 Use the actual finite-atlas path frames of [F5] simultaneously for the coefficient systems. The integral singular chain group is free on its actual singular simplices and its reduction is the corresponding $\Lambda_p$ chain group, with the same transition monomials reduced coefficientwise. Hence every integral dual cochain has a canonical forward reduction: reduce its value on each basis simplex and extend $\Lambda_p$-linearly. This defines a function without selecting any preimages, and commutes with the cochain differential. Thus $\partial^*c_p=\delta_p a_p$; since $\delta_p\ne0$, $c_p/\delta_p$ is a field-valued primitive of $a_p$. Cap and evaluation are finite simplex formulas, so coefficient change sends $[a]$ to the inverse-cap class of $\overline{x_p}$ and gives $c_p(y_p)=(c(y))_p$. By step 2.1 the actual mod-$p$ pairing therefore equals $[c_p(y_p)/\delta_p]=\rho_{p,\delta}(B_{\mathbb Z}(x,y))$. The same argument over $\mathbb Q$ uses the honest inclusion $\Lambda\to\Lambda_{\mathbb Q}$ and the same fraction $c/\delta$, giving exactly the asserted rational quotient identity. In a chosen unitary frame $e$, the inverse intrinsic-dual identification sends a functional $f$ to $\overline{e\,\overline{f(e)}}$; reducing its coefficient and then taking this expression is the same as reducing that expression, because the involution and all ring operations commute with reduction. Thus the intrinsic-dual/conjugate identifications in [F4] respect these fixed frames as well, so no scalar side or unmarked gauge change occurs. [F4, F5, step 2.1, step 3.1, construct, algebra]

5.1 If the integral self-value is nonzero, it belongs to $T_\delta$ by step 3.1. Apply [F2]. Its rational image is nonzero, and its specified prime reductions are nonzero away from the finite exceptional integer constructed there. The identities in step 4.1 identify these values with the actual rational and prime Blanchfield self-values. Every prime denominator is valid because $\delta_p(1)=1$. Compactness was used in the proved finite-presentation/annihilator and finite-atlas cochain suppliers; all remaining primitive, reduction, cap and evaluation operations were forward maps or individual cochain witnesses. Thus the full integral-to-rational and integral-to-prime nonzero conclusions hold without any added choice, smoothness, CW or global fraction-field reduction assumption. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
