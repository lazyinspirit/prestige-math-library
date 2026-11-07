---
id: thm-local-finite-module-tate-duality-in-characteristic-zero
kind: theorem
title: "Finite-module local Tate duality in characteristic zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-discrete-valuation-ring
  - thm-completion-of-an-absolutely-valued-field
  - thm-local-class-formation-for-finite-residue-local-field
  - lem-class-formation-finitely-generated-ext-duality
  - lem-characteristic-zero-local-power-subgroups-contain-finite-separable-norms
  - thm-local-class-field-existence-characteristic-zero
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-module-categories-have-enough-injectives
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group
  - thm-degree-one-inflation-restriction-exact-sequence
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are explicit as in actual class-formation, canonical local reciprocity, injective Ext and cochain interfaces. No finite-torsion Tor-vanishing assertion or generic local Tate-duality theorem is assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "I Theorem2.1 and Corollary2.3, printed pp.26-29; full local specialization of the reconstructed class-formation Ext theorem, not an imported Tate-duality result."
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a complete discretely valued field of
characteristic zero with finite residue field, fix a separable closure $K_s$,
and write $G_K=\operatorname{Gal}(K_s/K)$. For a finite discrete continuous
$G_K$-module $M$, put $M^D=\operatorname{Hom}_{\mathbb Z}(M,K_s^\times)$
with its natural contragredient action. The canonical cup product and
normalized local invariant give perfect pairings of finite groups
$$H^r_{\mathrm{cts}}(G_K,M^D)\times H^{2-r}_{\mathrm{cts}}(G_K,M)\longrightarrow H^2_{\mathrm{cts}}(G_K,K_s^\times)\xrightarrow{\operatorname{inv}_K}\mathbb Q/\mathbb Z$$
for every integer $r$, with negative cohomology zero. All these finite-module
cohomology groups vanish in degrees greater than two. The normalization is
the actual arithmetic-Frobenius cyclic carry invariant. No unramifiedness or
prime-to-residue-characteristic hypothesis is imposed on $M$.

## Facts & Assumptions

**Given:** Exactly AC/DC, the complete field, its separable closure and the finite module in the Statement.

[A1] AC and DC are the explicit choice conventions. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The multiplicative module $C=K_s^\times$ with its normalized invariant is a genuine class formation. [[thm-local-class-formation-for-finite-residue-local-field]]

[F2] The full-class-formation Ext theorem proves $\alpha_2$ and higher Ext vanishing for finitely generated modules, and $\alpha_1$ for all of them once the actual cyclic-coefficient base maps are bijective over every open subgroup. Its cyclic carry normalization is explicit and its abstract cochain/injective proof has no later arithmetic dependency. [[lem-class-formation-finitely-generated-ext-duality]]

[F3] For a finite extension of $\mathbb Q_p$, every power subgroup is open of finite index and is a finite abelian norm subgroup by local existence. The canonical local map evaluates every finite character by $\chi(\rho_K(a))=\operatorname{inv}_K(a\smile\delta\chi)$ and gives compatible onto finite quotients with their actual norm kernels and inclusion-reversing correspondence. [[lem-characteristic-zero-local-power-subgroups-contain-finite-separable-norms]] [[thm-local-class-field-existence-characteristic-zero]] [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F4] Complete-valued-field embedding and completion extend the original field operations; finite extensions have their unique extended valuation. [[def-discrete-valuation-ring]] [[thm-completion-of-an-absolutely-valued-field]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F5] Ordinary abelian groups have injective embeddings under AC, and divisibility is equivalent to injectivity over $\mathbb Z$. [[thm-module-categories-have-enough-injectives]] [[thm-injective-modules-over-a-pid-are-exactly-divisible]]

[F6] Finite abelian groups decompose into finite cyclic groups, and the $n$th roots of unity in a field form a cyclic group of order dividing $n$. [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]] [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]

[F7] The degree-one inflation-restriction sequence is exact by its crossed-map proof; for continuous modules and an open normal subgroup the same displayed maps and argument are continuous. [[thm-degree-one-inflation-restriction-exact-sequence]]

## Proof

**Proof technique:** verify the local cyclic Ext base case by canonical reciprocity, identify finite-coefficient Ext by divisibility, and apply the genuine class-formation theorem.

**Given:** The data above. Cup products use normalized continuous cochains.

1.1 The field in the Statement is a finite extension of $\mathbb Q_p$, so [F3] applies at its actual full scope. Here is the needed classification argument. Let its residue field have order $p^f$, let $e=v_K(p)>0$, and choose a uniformizer $\pi$. Completeness embeds $\mathbb Z_p$ into the valuation ring $R$ by limits of integer representatives; injectivity follows from $v_K(a)=e v_p(a)$ on nonzero rational numbers. Choose lifts $a_1,\ldots,a_f$ of an $\mathbb F_p$-basis of the residue field. The $ef$ elements $\pi^i a_j$, $0\le i<e$, are a basis of $R/pR$ over $\mathbb F_p$: cancel successive residue coefficients along the $\pi$-filtration, whose $e$ graded quotients are the residue field; independence follows from the first nonzero such coefficient. Their $\mathbb Z_p$-linear combinations give all of $R$ by successively lifting modulo $p,p^2,\ldots$ and taking coefficient limits in $\mathbb Z_p$; $p$-adic and $\pi$-adic completeness agree because $p$ is a unit times $\pi^e$. Independence over $\mathbb Z_p$ follows by dividing a relation by the least occurring $p$-power and reducing modulo $p$. Thus $R$ is finite free over $\mathbb Z_p$, and $K=R[1/p]$ is finite over $\mathbb Q_p$, since $p=u\pi^e$ makes $\pi^{-1}=u\pi^{e-1}/p$. The same holds for each finite extension of $K$, with its complete extended valuation from [F4]. [F4, given, choose, construct, algebra]

1.2 The abelian group $C=K_s^\times$ is divisible: in characteristic zero every $T^n-a$ is separable, so its roots lie in the separable closure. By [F5] it is an injective abelian group. For a finite $M$, the coefficient $M^D$ is finite of order $|M|$, and evaluation identifies $(M^D)^D$ with $M$ equivariantly. On a cyclic summand of order $n$, the polynomial has exactly $n$ distinct roots, and [F6] makes those roots cyclic of order $n$; finite products establish both assertions. In particular the evaluation has the actual canonical normalization, without selecting compatible roots for different $n$. [F5, F6, construct, algebra]

2.1 Fix such a field $L$ and $n\ge1$. By [F3] choose the finite abelian extension $E/L$ with norm group $L^{\times n}$, and put $A=L^\times/L^{\times n}\cong\operatorname{Gal}(E/L)$. It is finite and has exponent dividing $n$. Every continuous character $G_L\to\mathbb Z/n$ factors through this quotient. Indeed its cyclic fixed extension has norm kernel containing $L^{\times n}$, since its Artin quotient has exponent dividing $n$; the actual inclusion-reversing norm correspondence puts it inside $E$. Thus $H^1(G_L,\mathbb Z/n)=\operatorname{Hom}(A,\mathbb Z/n)$. The cyclic carry calculation of [F2] and the canonical character formula of [F3] identify $\alpha_1(L,\mathbb Z/n)$ with evaluation $A\to D(\operatorname{Hom}(A,\mathbb Z/n))$, using $\bar a\mapsto a/n$ in $\mathbb Q/\mathbb Z$. This is an isomorphism by [F6] on each cyclic summand. Hence the extra degree-one condition of [F2] is actually proved over every open subgroup, rather than added as a local-duality assumption. [F2, F3, F6, step 1.1, choose, construct, algebra]

3.1 We need the actual identity $\operatorname{Ext}^r_{G_K}(M,C)=H^r(G_K,M^D)$; finite-torsion Tor is not used. Construct a continuous injective resolution of $C$ whose terms are $J(I)=C_{\mathrm{cts}}(G_K,I)$ for ordinary injective abelian groups $I$, as in the explicit construction of [F2]: the action is $(g f)(h)=f(hg)$ and evaluation adjunction makes these continuous injectives. Each underlying $J(I)$ is divisible, since its functions have finite image and finitely many root preimages in divisible $I$ lift them continuously. Thus this is also an ordinary injective resolution of the divisible $C$, so $\operatorname{Hom}_{\mathbb Z}(M,I^\bullet)$ resolves $M^D$ with no positive ordinary Ext. Its terms are continuous-cochain-acyclic: for finite $M$, $\operatorname{Hom}_{\mathbb Z}(M,J(I))=J(\operatorname{Hom}_{\mathbb Z}(M,I))$ via $\Phi(f)(h)(m)=f(h^{-1}m)(h)$, whose inverse is $f(m)(h)=\Phi(f)(h)(hm)$, and inserting the identity in homogeneous cochains contracts positive cohomology. All maps are continuous because $M$ and every relevant function image are finite. The first-quadrant continuous-cochain double complex therefore compares its invariants with the cochains on $M^D$, giving the asserted identity on actual models. The two directions of its evaluation pairing are the usual cup formula $f(g_1,\ldots,g_r)(g_1\cdots g_r c(g_{r+1},\ldots))$; this shows Yoneda composition becomes the canonical cup/evaluation pairing, including the cyclic carry sign of step 2.1. [F2, F5, step 2.1, step 1.2, construct, algebra]

3.2 The degree-one groups are finite independently of any bidual-cardinality inference. Choose a finite Galois extension $L/K$ on whose absolute Galois group the action on $M$ is trivial; a continuous action on a finite set factors through one finite Galois quotient. The sequence [F7] embeds the kernel of restriction into $H^1(\operatorname{Gal}(L/K),M)$, which is finite since its cochains take values in a finite set. The restriction image is a subgroup of $H^1(G_L,M)$, a finite direct sum of the cyclic character groups computed in step 2.1. Thus $H^1(G_K,M)$ is finite. The same argument applies to $M^D$. Degree zero is finite because the modules themselves are finite. [F3, F6, F7, step 1.1, step 2.1, step 1.2, choose, algebra]

4.1 Apply [F2] to the class formation [F1]. Its higher vanishing and step 3.1 give $H^r(G_K,M^D)=0$ for $r>2$. Its degree-two isomorphism gives $H^2(G_K,M^D)=D(M^{G_K})$, a finite group. Applying the same result to the finite $M^D$ and the canonical biduality of step 1.2 gives vanishing and degree-two finiteness for $M$ as well. The degree-one base condition was proved in step 2.1, so [F2] also gives the canonical isomorphism $H^1(G_K,M^D)=D(H^1(G_K,M))$. [F1, F2, step 2.1, step 1.2, step 3.1, algebra]

5.1 The degree-one isomorphism in step 4.1 is therefore a perfect pairing of finite groups. The degree-two map is exactly $H^2(G_K,M^D)\to D(H^0(G_K,M))$. Swapping $M$ and $M^D$ and using the canonical biduality gives perfection in degree zero as well. By step 3.1 all of these maps are the actual cup/evaluation maps followed by the normalized local invariant, not abstract isomorphisms chosen on finite groups. Outside degrees zero, one and two both factors vanish by step 4.1 and the negative-degree convention. The zero module, $n=1$, residue characteristic two and arbitrary ramification are included. This proves the full complete characteristic-zero finite-module theorem under AC/DC; it does not assert the separate noncomplete comparison or integral finite-flat exact annihilator. [A1, F1, F2, step 1.2, step 3.1, step 4.1, step 3.2, algebra] ∎
