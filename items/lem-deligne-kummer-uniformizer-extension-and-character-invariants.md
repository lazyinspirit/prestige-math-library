---
dependency_level: 0
id: lem-deligne-kummer-uniformizer-extension-and-character-invariants
kind: lemma
title: "Uniformizer Kummer extensions and their nontrivial character invariants"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-discrete-valuation-ring
  - prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Section2.3 Kummer representations; local uniformizer case reconstructed without its general-case TODO"
---

## Statement

Let $R$ be a discrete valuation ring with fraction field $K$, uniformizer $t$ and residue field $k$ of characteristic $p$. Let $d\ge2$ be prime to $p$, and suppose $R$ contains $d$ distinct $d$th roots of unity. Then $Y^d-t$ is irreducible over $K$. If $y^d=t$, then $L=K(y)$ is cyclic Galois of degree $d$, its valuation ring over $R$ is $A=R[y]$, with uniformizer $y$ and residue field $k$, and its automorphisms are $y\mapsto\zeta y$. For every nonidentity automorphism $\sigma$, $v_A(\sigma(y)-y)=1$, so the subgroup acting trivially on $A/(y^2)$ is trivial. A nontrivial characteristic-zero character of this cyclic group has invariant subspace zero. In a compatible rank-one lattice over a complete characteristic-zero coefficient DVR, modulo powers of its uniformizer, the inverse limit of the invariant submodules is also zero; individual finite-level invariant submodules need not vanish.

## Facts & Assumptions

**Given:** The specified DVR, its uniformizer and the prime-to-residue-characteristic integer with its roots of unity.

[F1] A DVR is the nonnegative ring of a surjective integer-valued valuation. [[def-discrete-valuation-ring]]

[F2] For the fixed positive integer $d$, the group $\mu_d(K)=\{z\in K^\times:z^d=1\}$ is finite cyclic. [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]

## Proof

1.1 The polynomial content valuation is the minimum valuation of its nonzero coefficients. This content is additive under products: divide both polynomials by powers of $t$ so that each minimum is zero; their reductions are nonzero polynomials over the field $k$, whose product is nonzero. Thus a factorization of a monic integral polynomial over $K$ into monic factors has integral factors: first scale the factors to content zero, then their leading coefficients have nonnegative valuations whose sum is zero, so both are units. If $Y^d-t$ had two positive-degree monic factors, their reductions would be monic factors of $Y^d$ and hence powers of $Y$. Both constant terms would be divisible by $t$, whereas their product is $-t$, of valuation one. This contradiction proves irreducibility. [given, F1, algebra]

2.1 Thus $1,y,\ldots,y^{d-1}$ is a $K$-basis. On $L$, define $v_A(\sum_{j=0}^{d-1}a_jy^j)=\min_j(dv_R(a_j)+j)$ for a nonzero element. The minimum is attained uniquely, since its terms have distinct residues modulo $d$. In a product, the product of the unique two least terms has strictly lower valuation than every other pair of terms. Reducing $y^d=t$ preserves that value and its residue class, so this leading term cannot cancel; consequently the displayed function is multiplicative and satisfies the valuation triangle inequality. Its nonnegative elements are exactly those with every $a_j\in R$: if $v_R(a_j)<0$, then $dv_R(a_j)+j<0$. Therefore the valuation ring is exactly $A=R[y]$, its uniformizer is $y$, and reducing modulo $y$ gives $k$. [F1, step 1.1, algebra]

3.1 The roots $\zeta y$ all lie in $L$ and are distinct, so the degree-$d$ polynomial splits separably and the maps $y\mapsto\zeta y$ give all automorphisms; their group is cyclic by [F2]. Distinct roots of unity have distinct residues: if $\xi\ne1$ reduced to one, then $1+\xi+\cdots+\xi^{d-1}$ would reduce to the unit $d$, contradicting its value zero. Hence $\zeta-1$ is a unit for $\zeta\ne1$, and $v_A((\zeta-1)y)=1$. All automorphisms act trivially on the residue field, while no nonidentity one acts trivially on $A/(y^2)$. This proves the stated ramification calculation directly for this finite extension. [given, F2, step 2.1, algebra]

4.1 For a nontrivial character $\chi$ choose a single group element $g$ with $\chi(g)\ne1$. A fixed vector $a$ on its one-dimensional characteristic-zero space satisfies $(\chi(g)-1)a=0$, so $a=0$. For a compatible lattice system, a compatible family of invariant residue vectors defines an element $a$ of the complete coefficient ring. The same equation holds at every finite level, and hence in that ring; its torsion-freeness again forces $a=0$. This last argument does not assert that $\chi(g)-1$ is a coefficient unit, and therefore does not wrongly discard possible finite-level torsion invariants when the residue characteristic divides $d$. [given, algebra] ∎
