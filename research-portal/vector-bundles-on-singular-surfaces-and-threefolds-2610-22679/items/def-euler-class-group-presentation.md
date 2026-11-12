---
id: def-euler-class-group-presentation
kind: definition
title: Euler class group presentation
status: published
domain: mathematics
deps:
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-nilradical-and-reduced-ring
  - math:def-radical-of-an-ideal
  - math:def-krull-dimension-of-a-ring
  - math:def-prime-and-maximal-ideals
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-quotient-module
  - math:def-quotient-ring
  - math:def-free-module-on-a-set-and-standard-basis
  - math:def-generated-subgroup
  - math:def-quotient-group
  - math:def-axiom-of-choice
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-prime-spectrum-and-vanishing-sets
  - math:lem-primes-of-a-quotient-are-primes-over-the-kernel
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:cor-nilradical-as-intersection-of-primes
  - math:def-sum-and-product-of-ideals
  - math:thm-chinese-remainder-theorem-for-comaximal-ideals
  - math:def-localisation-at-a-prime-ideal
  - math:thm-ideal-correspondence-for-localisation
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-commutative-ring
  - math:def-field
  - math:def-algebra-over-a-commutative-ring
  - math:def-left-right-and-two-sided-ideal
  - math:def-left-and-right-modules
dependency_roles:
  math:def-algebraically-closed-field: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-nilradical-and-reduced-ring: mathematical-premise
  math:def-radical-of-an-ideal: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:def-module-homomorphism-kernel-image-and-cokernel: mathematical-premise
  math:def-quotient-module: mathematical-premise
  math:def-quotient-ring: mathematical-premise
  math:def-free-module-on-a-set-and-standard-basis: mathematical-premise
  math:def-generated-subgroup: mathematical-premise
  math:def-quotient-group: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-noetherian-ring-ideal-characterisations: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:lem-primes-of-a-quotient-are-primes-over-the-kernel: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:cor-nilradical-as-intersection-of-primes: mathematical-premise
  math:def-sum-and-product-of-ideals: mathematical-premise
  math:thm-chinese-remainder-theorem-for-comaximal-ideals: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:thm-ideal-correspondence-for-localisation: mathematical-premise
  math:def-tensor-product-of-modules-by-generators-and-relations: mathematical-premise
  math:cor-tensor-product-with-a-quotient-ring: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-field: mathematical-premise
  math:def-algebra-over-a-commutative-ring: mathematical-premise
  math:def-left-right-and-two-sided-ideal: mathematical-premise
  math:def-left-and-right-modules: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Murthy’s conjecture on 0-cycles
      url: https://arxiv.org/html/1511.04221v3
      locator: Section 7.1, introductory hypotheses and Definition 7.1 (PDF pp. 31–32)
      reading_limits: For this repair, read the versioned arXiv v3 HTML Section 7
        opening field convention, Section 7.1 introductory hypotheses and
        Definition 7.1, and the matching local v3 PDF text on printed pp. 31–32.
        Visually inspected the lifting square on printed p. 32 in the local PDF
        after the web screenshot failed. Checked the definition, its hypotheses
        and its application here; no comparison theorem or cited
        primary-decomposition proof was reviewed for this repair. The local
        Justification is independently authored and is not attributed to
        Krishna.
      statement: The oriented-ideal Euler group is the free abelian group on
        maximal-primary height-d ideals with surjective conormal orientations,
        modulo component-sum relations whose orientations lift to A^d onto the
        ideal.
      hypotheses: A reduced affine (finitely generated commutative) algebra of
        dimension d at least two over an algebraically closed field k; the
        source uses its standard irredundant primary-decomposition convention.
        Here distinct maximal radicals are explicitly required.
proof_strategy: direct
dependency_level: 0
formulation_deps:
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-nilradical-and-reduced-ring
  - math:def-radical-of-an-ideal
  - math:def-krull-dimension-of-a-ring
  - math:def-prime-and-maximal-ideals
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-quotient-module
  - math:def-quotient-ring
  - math:def-free-module-on-a-set-and-standard-basis
  - math:def-generated-subgroup
  - math:def-quotient-group
  - math:def-axiom-of-choice
  - math:def-sum-and-product-of-ideals
  - math:thm-chinese-remainder-theorem-for-comaximal-ideals
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-commutative-ring
  - math:def-field
  - math:def-algebra-over-a-commutative-ring
  - math:def-left-right-and-two-sided-ideal
  - math:def-left-and-right-modules
argument_deps:
  - math:def-algebraically-closed-field
  - math:def-finite-type-and-module-finite-algebras
  - math:def-nilradical-and-reduced-ring
  - math:def-radical-of-an-ideal
  - math:def-krull-dimension-of-a-ring
  - math:def-prime-and-maximal-ideals
  - math:def-module-homomorphism-kernel-image-and-cokernel
  - math:def-quotient-module
  - math:def-quotient-ring
  - math:def-free-module-on-a-set-and-standard-basis
  - math:def-generated-subgroup
  - math:def-quotient-group
  - math:def-axiom-of-choice
  - math:thm-noetherian-ring-ideal-characterisations
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-prime-spectrum-and-vanishing-sets
  - math:lem-primes-of-a-quotient-are-primes-over-the-kernel
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:cor-nilradical-as-intersection-of-primes
  - math:def-sum-and-product-of-ideals
  - math:thm-chinese-remainder-theorem-for-comaximal-ideals
  - math:def-localisation-at-a-prime-ideal
  - math:thm-ideal-correspondence-for-localisation
  - math:def-tensor-product-of-modules-by-generators-and-relations
  - math:cor-tensor-product-with-a-quotient-ring
  - math:def-commutative-ring
  - math:def-field
  - math:def-algebra-over-a-commutative-ring
  - math:def-left-right-and-two-sided-ideal
  - math:def-left-and-right-modules
---

## Definition
Let $k$ be an algebraically closed field and let $A$ be a reduced, finitely generated commutative $k$-algebra of Krull dimension $d\geq2$. The **height** of a proper ideal is the least height of a prime containing it; the height of a prime is the supremum of the lengths of strict chains of primes ending there. An ideal $J$ is **$\mathfrak m$-primary** if $\sqrt J=\mathfrak m$ and $ab\in J$, $a\notin J$ imply $b\in\mathfrak m$. The well-definedness argument below assumes the Axiom of Choice (AC).

Let $F(A)$ be the free abelian group on the set of pairs $(J,\omega_J)$ in which $J$ is an $\mathfrak m$-primary ideal of height $d$ for a maximal ideal $\mathfrak m$, and $\omega_J:(A/J)^d\twoheadrightarrow J/J^2$ is an $A/J$-linear surjection. The map is called an **orientation** here; distinct surjections are distinct generators.

For a proper ideal $I$ of height $d$ and an orientation $\omega_I:(A/I)^d\twoheadrightarrow I/I^2$, write its primary decomposition with pairwise distinct maximal radicals as $I=\bigcap_{i=1}^r J_i$, where $J_i$ is $\mathfrak m_i$-primary. Such a decomposition exists and is unique up to permutation, as proved below. It is irredundant: deleting any component changes the intersection. Uniqueness here concerns decompositions with pairwise distinct radicals. The Chinese remainder identifications induce orientations $\omega_{J_i}:(A/J_i)^d\twoheadrightarrow J_i/J_i^2$. Put
$$[(I,\omega_I)]=\sum_{i=1}^r[(J_i,\omega_{J_i})]\in F(A).$$
An orientation is **globally lifted** if there is an $A$-linear surjection $\widetilde\omega:A^d\twoheadrightarrow I$ whose induced map modulo $I$ is $\omega_I$. Let $K(A)$ be the subgroup generated by all $[(I,\omega_I)]$ with globally lifted orientation. The **Euler class group** in this presentation is the quotient $E(A)=F(A)/K(A)$. This definition asserts no comparison with a motivic group.

## Facts & Assumptions
[F1] The algebraically closed field, finite-type algebra, reduced ring, radical and dimension conventions are supplied by [[math:def-algebraically-closed-field]], [[math:def-finite-type-and-module-finite-algebras]], [[math:def-nilradical-and-reduced-ring]], [[math:def-radical-of-an-ideal]], [[math:def-krull-dimension-of-a-ring]], [[math:def-prime-and-maximal-ideals]].

[F2] Linear surjections, quotient modules, free modules (in particular free abelian groups over $\mathbb Z$), generated subgroups and quotient groups have the meanings in [[math:def-module-homomorphism-kernel-image-and-cokernel]], [[math:def-quotient-module]], [[math:def-free-module-on-a-set-and-standard-basis]], [[math:def-generated-subgroup]], [[math:def-quotient-group]].

[F3] Assume AC. The imported nilradical, spectrum and irreducible-decomposition interfaces below carry this assumption; the Noetherian ideal characterizations also permit dependent choice via AC. No intrinsic necessity of AC for this Euler presentation is asserted. The axiom is [[math:def-axiom-of-choice]].

[F4] For commutative rings, Noetherianity is equivalent to finite generation of every ideal and to the ascending chain condition; a finite-type algebra over a Noetherian commutative ring is Noetherian, by [[math:thm-noetherian-ring-ideal-characterisations]], [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]].

[F5] For a commutative ring $R$, the prime spectrum is the set of prime ideals and $V(H)$ is the set of primes containing an ideal $H$; these are its Zariski-closed sets. A topological space is Noetherian when descending chains of closed subsets stabilize. A closed subset is irreducible when it is nonempty and is not the union of two proper closed subsets. A generic point of a closed subset is a point whose closure equals that subset. Primes of a quotient correspond to primes containing the kernel. Under AC the spectrum of a Noetherian ring is Noetherian, a Noetherian space is a finite union of irreducible closed subsets, and each nonempty irreducible closed subset of a spectrum is $V(\mathfrak p)$ for its generic prime. These interfaces are [[math:def-prime-spectrum-and-vanishing-sets]], [[math:lem-primes-of-a-quotient-are-primes-over-the-kernel]], [[math:thm-noetherian-ring-has-noetherian-spectrum]], [[math:lem-noetherian-space-has-finitely-many-irreducible-components]], [[math:thm-irreducible-closed-subsets-and-prime-ideals]].

[F6] Under AC, the nilradical of a commutative ring is the intersection of its prime ideals, with the empty intersection equal to the whole ring, by [[math:cor-nilradical-as-intersection-of-primes]].

[F7] Ideal sums and products have the standard finite-sum meanings. For a nonempty finite family of pairwise comaximal ideals, the Chinese remainder map is onto with kernel their intersection, which equals their product, by [[math:def-sum-and-product-of-ideals]], [[math:thm-chinese-remainder-theorem-for-comaximal-ideals]].

[F8] Localisation at $\mathfrak m$ uses denominators outside $\mathfrak m$. The contraction of an extended ideal $Q$ consists of the elements $a$ such that $sa\in Q$ for some denominator $s$, by [[math:def-localisation-at-a-prime-ideal]], [[math:thm-ideal-correspondence-for-localisation]].

[F9] Tensor products have their generators-and-relations meaning; for a commutative ring $R$, ideal $H$ and $R$-module $M$, the natural isomorphism $M\otimes_R R/H\cong M/HM$ is $R/H$-linear, by [[math:def-tensor-product-of-modules-by-generators-and-relations]], [[math:cor-tensor-product-with-a-quotient-ring]].

[F10] For an ideal $H$ of a commutative ring $R$, the quotient ring $R/H$ has cosets $r+H$, induced addition and multiplication $(r+H)(s+H)=rs+H$, as in [[math:def-quotient-ring]].

[F11] Commutative rings, fields and algebras have the structures in [[math:def-commutative-ring]], [[math:def-field]] and [[math:def-algebra-over-a-commutative-ring]]. In particular, nonzero field elements have multiplicative inverses, and the $k$-algebra structure on $A$ includes a unital homomorphism $k\to A$; composition with $A\to A/I$ gives the quotient its $k$-algebra structure.

[F12] An ideal of a commutative ring is an additive subgroup closed under multiplication by arbitrary ring elements, as in [[math:def-left-right-and-two-sided-ideal]]. Thus its inherited addition and ring multiplication give its usual module structure; ideal powers mean repeated ideal products as in [F7].

[F13] Modules are unital left modules in the sense of [[math:def-left-and-right-modules]]. For an ideal $H\subseteq A$, the conormal module $H/H^2$ has scalar action $(a+H)(x+H^2)=ax+H^2$ for $a\in A$, $x\in H$. The free module $(A/H)^d$ has coordinatewise scalar action. A surjection means a map onto its target; linearity means preservation of addition and this scalar action, as in [F2].

## Justification

**Given:** $A$, $d$, a proper height-$d$ ideal $I$, its orientation $\omega_I$, and AC as in [F3].

**Goal:** Show that the component sum and quotient are well defined.

1.1 A field is Noetherian: its only ideals are $(0)$ and the whole field, each finitely generated. Both $A$ and $B=A/I$ are finite-type $k$-algebras, the latter generated by the residues of any finite algebra-generating list for $A$; hence both are Noetherian by [F4]. Every prime containing $I$ has height at least $d$ and at most $\dim A=d$. If such a prime had a strictly larger prime above it, a chain of length $d$ ending at it would extend to length $d+1$, a contradiction. Thus all primes over $I$ are maximal. By the quotient-prime correspondence in [F5], all primes of the nonzero ring $B$ are maximal. [F1, F3, F4, F5, F10, F11, F12, given]

1.2 The action on $H/H^2$ in [F13] is well defined: replacing $a$ by $a+h$ and $x$ by $x+y$ with $h\in H$ and $y\in H^2$ changes $ax$ by $ay+hx+hy\in H^2$, using ideal absorption. The module axioms descend from multiplication and addition in $A$. Thus the orientation domains and targets, for $H=I$ and for each primary component, are modules over the claimed quotient rings. If $\widetilde\omega:A^d\to I$ is linear, then $\widetilde\omega(IA^d)\subseteq I^2$, so reduction induces $(A/I)^d\to I/I^2$; if the original map is onto, so is this reduction. [F2, F7, F10, F11, F12, F13, given]

2.1 By [F5], $\operatorname{Spec}B$ is Noetherian and is a finite union of nonempty irreducible closed subsets. The decomposition input uses Noetherian induction: a minimal closed counterexample, if reducible, would split into two proper closed subsets which already have finite decompositions; combining those decompositions is a contradiction. Each irreducible closed subset is $V(\mathfrak n)$ for a generic prime $\mathfrak n$; by step 1.1 this prime is maximal, so $V(\mathfrak n)=\{\mathfrak n\}$. Therefore the primes of $B$ form a finite set of distinct maximal ideals $\mathfrak n_1,\ldots,\mathfrak n_r$. Here $r\geq1$: otherwise [F6] would make $1$ nilpotent in the nonzero ring $B$. If the same construction is extended by convention to $I=A$, the zero quotient instead gives an empty sum; that boundary is outside the height-$d$ generators and relations. [F3, F5, F6, step 1.1]

3.1 By [F6], the nilradical $N$ of $B$ is $\bigcap_i\mathfrak n_i$. By [F4], choose generators $x_1,\ldots,x_t$ of $N$ and exponents $e_j\geq1$ with $x_j^{e_j}=0$. With $s=1+\sum_j(e_j-1)$, every monomial of degree $s$ in these generators vanishes, so $N^s=0$; if $t=0$, take $s=1$. Distinct maximal ideals are comaximal. If $u+v=1$ with $u\in\mathfrak n_i$ and $v\in\mathfrak n_j$, expansion of $(u+v)^{2s-1}$ proves $\mathfrak n_i^s+\mathfrak n_j^s=B$. Applying [F7] first to the $\mathfrak n_i$ gives $N=\prod_i\mathfrak n_i$; thus $\prod_i\mathfrak n_i^s=N^s=0$. Applying [F7] again gives $B\cong\prod_i B/\mathfrak n_i^s$. In the $i$th factor its maximal ideal $\mathfrak n_i/\mathfrak n_i^s$ is nilpotent. Every element $a$ outside it is a unit: choose $b$ with $ab=1-z$ for $z$ in that maximal ideal, and invert $1-z$ by the finite geometric sum. It follows that the zero ideal in this factor is primary with that radical. Pulling the kernels of the factor projections back to $A$ gives $I=\bigcap_i J_i$ with distinct maximal radicals $\mathfrak m_i$, each of height $d$ by step 1.1. Each factor is nonzero, so its coordinate kernel cannot be removed without changing the intersection; hence the decomposition is irredundant. [F1, F4, F6, F7, F10, F11, F12, step 1.1, step 2.1, construct]

4.1 Consider any finite primary decomposition of $I$ with pairwise distinct maximal radicals. Its radicals are exactly the maximal ideals containing $I$: each radical contains $I$, while a maximal ideal containing $I$ contains the product of the components and hence one component, and therefore its maximal radical. Fix $\mathfrak m_i$ and localise at it as in [F8]. Each other component contains a power of an element of its radical outside $\mathfrak m_i$, so becomes the unit ideal. Localisation commutes with this finite intersection: if a numerator belongs to each extended component, multiply the finitely many witnessing denominators to put it in the extension of their intersection. Consequently the remaining component localises to $IA_{\mathfrak m_i}$. A $\mathfrak m_i$-primary component $Q$ is saturated for denominators outside $\mathfrak m_i$: if $sa\in Q$ and $s\notin\mathfrak m_i$, its primary condition forces $a\in Q$. The contraction formula in [F8] now gives $Q=\{a\in A:a/1\in IA_{\mathfrak m_i}\}$. Thus each component is forced, proving uniqueness up to permutation within the specified class of decompositions. [F1, F8, F12, step 3.1]

4.2 Write $L_i=\bigcap_{j\ne i}J_j$, with the empty intersection equal to $A$. The $J_j$ are pairwise comaximal: choose two elements in their respective distinct maximal radicals whose sum is $1$, raise them to powers lying in the respective primary ideals, and expand a sufficiently high power of their sum, as in step 3.1. The finite Chinese remainder construction in [F7] gives $J_i+L_i=A$ and $I=J_iL_i$. Choose $u\in J_i$, $v\in L_i$ with $u+v=1$. For $x\in J_i$, the identity $x=xu+xv$ proves $J_i=J_i^2+I$. For $x\in I\cap J_i^2$, both $xu$ and $xv$ lie in $J_i^2L_i$, so $I\cap J_i^2=J_i^2L_i=IJ_i$. Inclusion therefore induces $I/IJ_i\cong J_i/J_i^2$. Here $H M=IJ_i/I^2$ for $R=A/I$, $H=J_i/I$ and $M=I/I^2$: both sides consist of sums of products of the corresponding residue classes. The map $(x+I^2)+HM\mapsto x+IJ_i$ therefore identifies $M/HM$ with $I/IJ_i$. Apply [F9] with these $R$, $H$ and $M$ to obtain
$$(I/I^2)\otimes_{A/I} A/J_i\cong I/IJ_i\cong J_i/J_i^2.$$
Concretely, reduce the $d$ images under $\omega_I$ of the standard basis vectors modulo $IJ_i$ and then include them modulo $J_i^2$. Changing coefficients modulo $J_i$ changes their combinations by elements of $IJ_i$, so this defines an $A/J_i$-linear map from $(A/J_i)^d$. It is onto since every element of $I/IJ_i$ lifts to $I/I^2$ and then through the surjection $\omega_I$. This map is exactly the tensor-induced orientation $\omega_{J_i}$. Step 4.1 makes each component and its induced map independent of decomposition choices, and the sum is independent of their ordering. [F2, F7, F9, F10, F12, F13, step 1.2, step 3.1, step 4.1, construct]

5.1 Ideals of $A$ are subsets of a fixed set, and each orientation is a function between fixed set-sized modules, so the generator pairs form a set. By [F2], $F(A)$ is the additive group of the free $\mathbb Z$-module on that set, consisting of finite integer combinations of the pairs. The finite integer combinations of globally lifted component sums contain zero and are closed under addition and negation; every subgroup containing those sums contains these combinations. They therefore form precisely the subgroup $K(A)$ specified in the Definition. As $F(A)$ is abelian, this subgroup is normal and its cosets form the quotient abelian group $E(A)$ by [F2]. Steps 4.1 and 4.2 show that each generating relation is unambiguous. [F2, step 4.1, step 4.2, construct] ∎
