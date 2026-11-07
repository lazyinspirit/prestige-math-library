---
id: lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice
kind: lemma
title: Artin L-functions in the positive half-plane under choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-induced-r-linear-g-module-by-h-covariant-functions
- def-induced-character-of-a-complex-representation
- thm-complex-representations-are-determined-by-their-characters
- thm-brauer-induction
- thm-fundamental-theorem-of-finite-galois-theory
- def-ring-of-integers-of-a-number-field
- thm-ring-of-integers-free-of-rank-degree
- lem-nonzero-number-field-ideal-has-finite-quotient
- lem-determinant-trick-for-nakayama
- thm-galois-action-on-primes-above-a-prime-is-transitive
- thm-decomposition-inertia-exact-sequence
- def-arithmetic-frobenius-coset
- thm-ramification-and-residue-degrees-in-towers
- def-prime-above-and-residue-degree
- def-absolute-norm-of-an-ideal
- lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field
- thm-determinant-under-elementary-row-operations
- def-determinant-of-a-square-matrix
- thm-minimal-polynomial-is-well-defined-and-controls-annihilators
- thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots
- thm-fundamental-theorem-of-algebra-liouville-proof
- thm-dedekind-zeta-euler-product
- thm-geometric-series
- def-complex-exponential
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-natural-logarithm-laws
- thm-global-artin-reciprocity-and-norm-index
- def-global-artin-map-as-product-of-local-reciprocity-maps
- def-local-artin-reciprocity-map
- thm-local-artin-reciprocity-and-norm-index
- lem-unramified-local-unit-norms-and-cohomology
- thm-archimedean-local-reciprocity
- lem-number-field-extension-ramified-at-finitely-many-places
- thm-weak-approximation-for-global-fields
- def-finite-order-ray-class-hecke-character-and-l-function
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-finite-order-hecke-l-euler-product
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: AC, Countable Choice and DC are inherited from the actual global and local reciprocity and Hecke analytic suppliers.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII §10
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed pp. 522–526, Artin induction and abelian comparison; the proof below gives the required bounded continuation
      from the local interfaces.
---

## Statement

Assume AC, Countable Choice and DC. Let $L/K$ be a finite Galois extension of number fields with group $G$, and let $S$ be any finite set of places of $K$ containing the infinite places and every finite place ramified in $L$. For each subgroup $H\le G$, fixed field $E=L^H$, complex representation $W$ of $H$, put $U=\operatorname{Ind}_H^G W$. At a finite place $v$ of $K$, choose $P\mid v$ in $L$ with inertia $I_v$ and arithmetic Frobenius $F_v$ on inertia invariants; for each $w\mid v$ in $E$, use its corresponding inertia $I_w$, Frobenius $F_w$, and residue degree $f_w=f(w/v)$. Then the exact local identity, including ramified places, is $$\det(1-zF_v\mid U^{I_v})=\prod_{w\mid v}\det(1-z^{f_w}F_w\mid W^{I_w}).$$ For the set $S_E$ of places of $E$ above $S$, the finite induction identity $L_S(s,\operatorname{Ind}_H^G W)=L_{S_E}(s,W)$ holds on $\operatorname{Re}s>1$; it also holds for complete products, including their ramified factors. Direct sums multiply and Brauer induction supplies the corresponding finite integral product identity. For every finite-dimensional complex representation $V$ of $G$, the Artin Euler product $L_S(s,V)$ has a meromorphic continuation to $\operatorname{Re}s>0$. If $G$ is cyclic and $V$ is an irreducible representation, this continuation is holomorphic on $\operatorname{Re}s>0$ except possibly for a simple pole at $s=1$, and that pole can occur only when $V$ is trivial. The same conclusions hold for the complete Artin Euler product, without deleting the places in $S$.

## Facts & Assumptions

[F1] Finite Galois theory gives $\operatorname{Gal}(L/L^H)=H$ and finite intermediate fields. Induction is the space of functions $f:G\to W$ with $f(gh)=h^{-1}f(g)$ and action $(xf)(g)=f(x^{-1}g)$. Its induced character is the character of that representation. Complex representations of a finite group with equal characters are isomorphic, and published Brauer induction expresses every virtual character as a finite integral sum induced from linear characters ([[thm-fundamental-theorem-of-finite-galois-theory]], [[def-induced-r-linear-g-module-by-h-covariant-functions]], [[def-induced-character-of-a-complex-representation]], [[thm-complex-representations-are-determined-by-their-characters]], [[thm-brauer-induction]]).

[F2] Rings of integers are the algebraic integers, are free finite-rank $\mathbb Z$-modules, and every nonzero ideal has finite additive quotient. The finite-module determinant trick says $IM=M$ implies $(1-a)M=0$ for some $a\in I$; it has no Choice premise ([[def-ring-of-integers-of-a-number-field]], [[thm-ring-of-integers-free-of-rank-degree]], [[lem-nonzero-number-field-ideal-has-finite-quotient]], [[lem-determinant-trick-for-nakayama]]).

[F3] Galois groups act transitively on primes above a fixed prime. The residue sequence is $1\to I\to D\to\operatorname{Gal}(\kappa(P)/\kappa(v))\to1$, and arithmetic Frobenius induces the $Nv$-power map. Residue degrees multiply in towers; ideal norms are residue-field cardinalities, and a degree-$f$ vector space over a field of $q$ elements has $q^f$ elements. ([[thm-galois-action-on-primes-above-a-prime-is-transitive]], [[thm-decomposition-inertia-exact-sequence]], [[def-arithmetic-frobenius-coset]], [[thm-ramification-and-residue-degrees-in-towers]], [[def-prime-above-and-residue-degree]], [[def-absolute-norm-of-an-ideal]], [[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]]).

[F4] Determinants have their finite Leibniz formula, and adding a scalar multiple of one row to another preserves the determinant. The minimal polynomial divides every annihilating polynomial; splitting into distinct roots makes an operator diagonalizable. Complex polynomials split ([[def-determinant-of-a-square-matrix]], [[thm-determinant-under-elementary-row-operations]], [[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]], [[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]], [[thm-fundamental-theorem-of-algebra-liouville-proof]]).

[F5] The Dedekind zeta ideal series and Euler product converge absolutely for $\sigma>1$. Geometric sums have their explicit scalar tails; the complex exponential has its addition and Cartesian modulus laws, and logarithms have their real product laws ([[thm-dedekind-zeta-euler-product]], [[thm-geometric-series]], [[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-natural-logarithm-laws]]).


**Given:** The finite extension, subgroup $H$, fixed field $E$, representations $W$, $U=\operatorname{Ind}_H^G W$, and the set $S$ in the Statement.

[F6] The finite induction and Brauer product identities, including all ramified places, are reconstructed in steps 1.1–10.1 below from [F1]–[F5].

[F7] For every finite abelian extension, the global Artin map is a surjective homomorphism on ideles, is trivial on principal ideles, is the product of the local maps, and sends an unramified uniformizer to arithmetic Frobenius. Finite-quotient local maps are continuous and kill local norms, unramified unit norms are surjective; the real local map is the sign map and the complex one is trivial. [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[def-local-artin-reciprocity-map]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-archimedean-local-reciprocity]]

[F8] Only finitely many finite primes ramify in a finite extension. Weak approximation simultaneously prescribes finitely many local open neighborhoods and real signs. A ray class character is a finite-order homomorphism on fractional ideals prime to its modulus modulo the specified principal congruences and signs. [[lem-number-field-extension-ramified-at-finitely-many-places]] [[thm-weak-approximation-for-global-fields]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F9] Every finite-order ray character is induced from a primitive one with a finite Euler deletion. Its primitive completed Hecke function is entire for nontrivial character, and has at most simple poles at zero and one for the trivial character. Gamma is holomorphic and nonzero in the positive half-plane, and the Hecke Euler product holds for $\operatorname{Re}s>1$. [[lem-imprimitive-ray-class-hecke-finite-euler-correction]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-finite-order-hecke-l-euler-product]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[A1] AC, CC and DC are used at the stated reciprocity and Hecke interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 We first supply prime lifting in the number-field case without the Choice-dependent general lying-over theorem. If $F\subset L$ is an intermediate field, put $A=\mathcal O_F$, $B=\mathcal O_L$, and let $\mathfrak p\ne0$ be prime in $A$. A finite $\mathbb Z$-basis of $B$ also generates it as an $A$-module. Localize at $A\setminus\mathfrak p$, obtaining the nonzero domain $B_{\mathfrak p}$ finite over $A_{\mathfrak p}$. If $\mathfrak pA_{\mathfrak p}B_{\mathfrak p}=B_{\mathfrak p}$, [F2]'s determinant trick supplies $a\in\mathfrak pA_{\mathfrak p}$ with $(1-a)B_{\mathfrak p}=0$. Applying to one and using $A_{\mathfrak p}\hookrightarrow B_{\mathfrak p}$ gives $a=1$, a contradiction. Thus $C=B_{\mathfrak p}/\mathfrak pB_{\mathfrak p}$ is a nonzero finitely generated vector space over the finite field $A/\mathfrak p$ and is a finite ring. A proper ideal of maximal cardinality exists in this finite ring; it is maximal, so its pullback is a prime of $B_{\mathfrak p}$ whose contraction is $\mathfrak pA_{\mathfrak p}$. Pulling back once more gives a nonzero prime of $B$ above $\mathfrak p$. All choices here are finite. [F1, F2, F3, given, construct, algebra]

1.2 We prove the remaining cyclic determinant calculation explicitly. Let a finite cyclic group generated by $c$ have a subgroup of index $f$, and let $A$ be the action of $c^f$ on a vector space $Z$. In the induced model, evaluation at $1,c,\ldots,c^{f-1}$ makes $c$ act as $(z_0,\ldots,z_{f-1})\mapsto(Az_{f-1},z_0,\ldots,z_{f-2})$. If $\dim Z=0$ both determinants are one. Otherwise $1-zc$ has diagonal blocks $1$, subdiagonal blocks $-z$, and upper-right block $-zA$. Add $z$ times the first block row to the second, then $z$ times the new second to the third, and continue. These are determinant-preserving scalar row additions by [F4]. The last diagonal block becomes $1-z^fA$ and all preceding diagonal blocks are identities. The Leibniz formula now leaves only permutations inside the last block. Thus $\det(1-zc)=\det(1-z^fA)$, including $f=1$. [F1, F4, construct, algebra]

1.3 Let $M/F$ be any finite abelian extension and $\lambda$ a character of its Galois group. Select a finite set of primes containing the ramified primes. At each selected prime continuity in [F7] gives an exponent $a_v\ge1$ such that $1+\mathfrak p_v^{a_v}$ maps to the identity; at every other finite prime the extension is unramified and the unit group maps trivially by the local norm-kernel and unramified normalization in [F7]. Include every real place in the infinite part of a modulus $\mathfrak m$ and put $\mathfrak m_0=\prod_v\mathfrak p_v^{a_v}$. For a fractional ideal prime to $\mathfrak m_0$, define its value as the product of the corresponding Frobenius values raised to its prime valuations. This is a finite product and a group homomorphism. If $(a)$ is generated by an element congruent to one at the chosen prime powers and positive at every real place, principal reciprocity makes the product equal to one: the other local factors are units at unramified places, and all specified local factors are trivial. Thus the homomorphism descends to a finite-order ray character $\psi$ by [F8]. [A1, F7, F8, construct, algebra]

2.1 Fix $v$ and $P\mid v$, now supplied by step 1.1, and write $D=D_v$, $I=I_v$. Primes of $L$ above $v$ form the transitive $G$-set $G/D$. Two of them contract to the same prime of $E$ exactly when they are in the same $H$-orbit: the reverse implication uses transitivity of $H=\operatorname{Gal}(L/E)$ over that prime, and every prime of $E$ lifts by step 1.1. Hence primes $w\mid v$ are parametrized by the finite double cosets $D\backslash G/H$, with representative $x$ corresponding to $w_x=(x^{-1}P)\cap E$. Let $J_x=D\cap xHx^{-1}$. After conjugating by $x$, the decomposition and inertia groups for $L/E$ at $x^{-1}P$ become $J_x$ and $J_x\cap I$. [F1, F3, step 1.1, construct, algebra]

2.2 If $\lambda$ is nontrivial then so is $\psi$. Indeed [F7] makes the global map surjective. For any idele, weak approximation chooses $a\in F^\times$ so that multiplying by the principal idele $a$ makes every component at $v\mid\mathfrak m_0$ lie in $1+\mathfrak p_v^{a_v}$ and makes every real component positive. At each remaining finite place write the component as a uniformizer power times a unit. Units there have trivial Artin image, and outside finitely many places the valuation is zero. Consequently every element of $\operatorname{Gal}(M/F)$ is a product of the Frobenius elements of primes not dividing $\mathfrak m_0$. A nontrivial $\lambda$ is nontrivial on one of these products, hence on $\psi$. Conversely, trivial $\lambda$ gives trivial $\psi$. This argument uses only principal reciprocity and approximation, not the existence of an arbitrary ray class field. [F7, F8, step 1.3, choose, algebra]

3.1 Functions in $U$ supported on one $D$-orbit $DxH$ give a $D$-stable direct summand. Evaluation $f\mapsto(d\mapsto f(dx))$ identifies it with $\operatorname{Ind}_{J_x}^D W_x$, where $j\in J_x$ acts on $W_x=W$ as $x^{-1}jx$. Indeed $f(djx)=f(dx(x^{-1}jx))=(x^{-1}jx)^{-1}f(dx)$, exactly the covariant rule. Summing over the finitely many double cosets gives the full direct-sum decomposition of $U$ as a $D$-module; no Mackey theorem is assumed. [F1, step 2.1, construct, algebra]

3.2 Let $T$ be any finite set containing the infinite places and all finite primes ramified in $M/F$ and dividing $\mathfrak m_0$. At every prime outside $T$, [F7] identifies the linear Artin factor with the Hecke factor of $\psi$ by construction. Thus in $\operatorname{Re}s>1$ the partial Artin product equals $L(s,\psi)$ times the finite deletion product $\prod_{v\in T,\,v\nmid\mathfrak m_0}(1-\psi(v)(Nv)^{-s})$. By [F9] replace $\psi$ by its inducing primitive character. Each finite factor is entire and nonzero for $\operatorname{Re}s>0$, since its nonconstant term has modulus $(Nv)^{-\operatorname{Re}s}<1$. The gamma factors in [F9] are holomorphic and nonzero on this half-plane; division by them supplies continuation of the primitive Hecke function there, holomorphic away from $1$, with at most a simple pole at $1$ for the trivial character only. The same holds for the partial linear Artin product. Deleting or restoring any finite collection of unramified Euler factors multiplies by such nonzero finite factors. At a ramified prime the linear Artin factor is either one or $(1-\omega(Nv)^{-s})^{-1}$ for a root of unity $\omega$; it too is holomorphic and nonzero throughout the half-plane. Hence the conclusion holds for the complete linear Artin product and any finite deletion. [A1, F7, F9, step 1.3, step 2.2, algebra]

4.1 Let $J\le D$ and $Y$ be a finite-dimensional $J$-module. Since $I\trianglelefteq D$, an $I$-fixed covariant function on $D$ is constant on both left and right $I$-cosets. Its values lie in $Y^{I\cap J}$: covariance by an element of $I\cap J$ must act trivially on those values. Conversely such functions descend exactly to the covariant functions on $D/I$ with subgroup $JI/I$ acting on $Y^{I\cap J}$ by its $J$ representative. This action is well-defined because $I\cap J$ acts trivially. We have therefore constructed the equivariant isomorphism $(\operatorname{Ind}_J^D Y)^I\cong\operatorname{Ind}_{JI/I}^{D/I}(Y^{I\cap J})$. [F1, F3, step 3.1, algebra]

5.1 Apply step 4.1 with $J=J_x$, $Y=W_x$. The finite cyclic group $D/I$ is generated by arithmetic Frobenius. Its subgroup $J_xI/I$ corresponds, after the conjugation in step 2.1, to the residue extension from $L$ to $E$. Its index is $f_w=f(w_x/v)$ by the exact residue sequences and the residue-degree tower formula in [F3]. Norm cardinalities consequently satisfy $Nw_x=(Nv)^{f_w}$. The $f_w$th power of arithmetic Frobenius acts on $W_x^{I\cap J_x}$ as arithmetic Frobenius for $L/E$ on $W^{I_w}$, under that same conjugation: both induce the $(Nv)^{f_w}=Nw_x$ power map on the residue field. [F3, step 2.1, step 4.1, algebra]

6.1 Take inertia invariants in the finite direct sum of step 3.1, then apply steps 4.1, 5.1 and 1.2 to each summand. The determinant of a direct sum is the product of its determinants by the same finite Leibniz argument. Step 5.1 identifies the last operator with $F_w$ and the power with $f_w$, proving the exact local polynomial identity in the Statement for every prime, including ramified primes. A different lift of Frobenius differs by inertia and acts identically on invariants. A different prime above $v$ conjugates decomposition, inertia and Frobenius; its representation map identifies the invariant spaces and conjugates the operators, leaving the determinant unchanged. The same applies over $E$. [F3, F4, step 2.1, step 3.1, step 4.1, step 5.1, step 1.2, algebra]

7.1 For completeness all these Euler products are well-defined without an analytic-continuation assumption. Every element of a finite group has finite order. On an invariant subspace its minimal polynomial divides $X^m-1$ for some positive $m$, so [F4] makes it diagonalizable with roots-of-unity eigenvalues. Therefore its local inverse determinant is a product of at most $d$ factors $(1-\omega (Nv)^{-s})^{-1}$ with $|\omega|=1$, where $d$ is the fixed representation dimension. For $\sigma>1$, put $r=2^{-\sigma}<1$; each factor differs from one by at most $(Nv)^{-\sigma}/(1-r)$. Expanding their finite product bounds its difference from one by $C_{d,\sigma}(Nv)^{-\sigma}$. The inverse local polynomial has the same type of bound. The prime sum is finite by the positive ideal series of [F5]. For a finite tail of either product, $|\prod(1+a)-1|\le\exp(\sum|a|)-1$ follows by expansion and $1+t\le e^t$. Thus both the product and its inverse have explicit Cauchy tails; their limits multiply to one. The products converge absolutely and are nonzero, for any omitted-prime subset $S$. [F4, F5, step 6.1, algebra]

8.1 In step 6.1 substitute $z=(Nv)^{-s}$. Step 5.1 gives $z^{f_w}=(Nw)^{-s}$ with the real logarithm convention. Multiply over the primes $v\notin S$. All primes of $E$ not in $S_E$ occur in exactly one finite fiber $w\mid v$. The products can be regrouped because their absolute tails are controlled by step 7.1. This proves $L_S(L/K,U;s)=L_{S_E}(L/E,W;s)$ in $\sigma>1$, with no restriction that $E/K$ be Galois. [F3, F5, step 5.1, step 6.1, step 7.1, algebra]

9.1 Inertia invariants commute with finite direct sums, and Frobenius is block diagonal there, so local polynomials and global Euler products multiply on direct sums. Intertwiners identify the corresponding invariant-space actions, so isomorphic representations have identical Euler products. Apply [F1]'s published Brauer induction to $\chi_V$, giving a finite integral decomposition as stated. Move negative coefficients to the other side. The resulting equality of actual complex characters gives an isomorphism between the resulting finite direct sums by [F1]. Multiplicativity and nonvanishing in step 7.1 then yield the quotient identity with powers $a_j$. Applying step 8.1 to every induced factor proves the displayed finite Brauer product formula. This uses the published finite-group theorem, not an imported analytic L-function property. [F1, F4, step 7.1, step 8.1, construct, algebra]

10.1 Finally suppose inertia of $L/K$ is trivial outside $S$. For a linear character $\lambda$ of $H$, its kernel $N$ is normal and $H/N$ identifies with a finite subgroup of the abelian group $\mathbb C^\times$. Hence $F=L^N$ is a finite abelian Galois extension of $E$ and $\lambda$ descends to its Galois group. By step 2.1, the inertia groups for $L/E$ above $v\notin S$ are trivial. To check descent without a hidden ramification assumption, fix $P$ of $L$ above $Q$ of $F$. An element of the decomposition group downstairs lifts to $H$ and can be adjusted by $N$ to fix $P$, using transitivity above $Q$. If it is in downstairs inertia, the residue action of this adjusted lift fixes $\kappa(Q)$; the exact residue sequence for $L/F$ supplies an element of its decomposition group in $N$ with the same action on $\kappa(P)$. Their quotient lies in the trivial inertia of $L/E$. The downstairs inertia element is therefore the identity. The upstairs arithmetic Frobenius restricts to the $(N_Ew)$-power map on the downstairs residue field, so its descended character value is the same at every prime outside $S_E$. All invariant spaces here are the full one-dimensional spaces. Thus their local factors, and by step 7.1 their Euler products, agree. This proves the final assertion without constructing a ray class field or Hecke character. [F1, F3, step 2.1, step 7.1, step 9.1, algebra]

11.1 For arbitrary $G$ and $V$, [F6] expresses its partial Euler product on $\operatorname{Re}s>1$ as a finite integral product of linear Artin products for intermediate extensions. Each linear character factors through an abelian quotient, whose local factors agree with the original ones outside a finite set containing all relevant ramified places; enlarge the set finitely and apply step 3.2. The resulting finite product and quotient is meromorphic on $\operatorname{Re}s>0$ and agrees with the original product on its initial half-plane. Restoring the finitely many deleted local factors preserves meromorphic continuation: the inverse characteristic polynomial is meromorphic, with no pole or zero on $\operatorname{Re}s>0$ because its Frobenius eigenvalues on inertia invariants are roots of unity. If $G$ is cyclic, every irreducible complex representation is linear, so step 3.2 proves its stronger holomorphy and pole statement directly. This establishes the asserted complete and partial forms. [F6, step 3.2, algebra] ∎
