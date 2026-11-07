---
id: lem-artin-induction-euler-factor-and-brauer-product-identity
kind: lemma
title: Artin induction Euler factors and the finite Brauer product identity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
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
justified_by: []
proof_strategy: direct
axiom_use: None. All representative and basis selections are finite. Prime lifting
  is proved by a finite quotient argument, not the Choice-dependent general lying-over
  theorem; infinite products use explicit scalar absolute tails.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, VII §10, Proposition10.4(ii)–(iv)
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed522–524, complete local induction/determinant proof read in cached
      full text; the present proof gives the finite prime-lifting and arbitrary omitted-prime-set
      details explicitly.
---

## Statement

Let $L/K$ be a finite Galois extension of number fields, $G=\operatorname{Gal}(L/K)$, $H\le G$, $E=L^H$, and $W$ a finite-dimensional complex representation of $H$. Put $U=\operatorname{Ind}_H^G W$. For a nonzero prime $v$ of $K$, put $q=Nv$, choose $P\mid v$ in $L$, and let $I_v,D_v$ and $F_v\in D_v/I_v$ be its inertia, decomposition and arithmetic-Frobenius data. For every prime $w$ of $E$ above $v$, let $f_w=f(w/v)$ and use the corresponding data $I_w,F_w$ for $L/E$. Then, as polynomials in $z$,
$$\det(1-zF_v\mid U^{I_v})=\prod_{w\mid v}\det(1-z^{f_w}F_w\mid W^{I_w}).$$
A lift of Frobenius acts on the indicated inertia-invariant space; the determinants are independent of all prime/lift choices.

For any set $S$ of places of $K$ containing its infinite places, let $S_E$ consist of the infinite places of $E$ and the finite places above the finite places in $S$. Define the partial Artin Euler products by the displayed invariant-space local factors. They converge absolutely and are nonzero for $\operatorname{Re}s>1$, and
$$L_S(L/K,U;s)=L_{S_E}(L/E,W;s).$$
If $V$ is any finite-dimensional complex representation of $G$ and
$$\chi_V=\sum_{j=1}^m a_j\operatorname{Ind}_{H_j}^G\lambda_j,\qquad a_j\in\mathbb Z,$$
is any finite Brauer decomposition into linear characters, with $E_j=L^{H_j}$, then throughout that half-plane
$$L_S(L/K,V;s)=\prod_{j=1}^m L_{S_{E_j}}(L/E_j,\lambda_j;s)^{a_j}.$$
Such a decomposition exists. If the inertia of $L/K$ is trivial outside $S$, each linear factor may equivalently be taken for the finite abelian extension $L^{\ker\lambda_j}/E_j$ and its descended character. These are Euler-product identities; no meromorphic continuation, ray-class correspondence or unapproved theorem/computation is assumed or concluded.

## Statement references

[Neukirch, VII §10 Proposition10.4](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** The finite extension, subgroup, representations, and sets in the Statement. All inductions are the finite covariant-function model. For a representation $R$, the local Artin polynomial is the determinant on inertia invariants; its lift-independent arithmetic-Frobenius action is the one specified here.

[F1] Finite Galois theory gives $\operatorname{Gal}(L/L^H)=H$ and finite intermediate fields. Induction is the space of functions $f:G\to W$ with $f(gh)=h^{-1}f(g)$ and action $(xf)(g)=f(x^{-1}g)$. Its induced character is the character of that representation. Complex representations of a finite group with equal characters are isomorphic, and published Brauer induction expresses every virtual character as a finite integral sum induced from linear characters ([[thm-fundamental-theorem-of-finite-galois-theory]], [[def-induced-r-linear-g-module-by-h-covariant-functions]], [[def-induced-character-of-a-complex-representation]], [[thm-complex-representations-are-determined-by-their-characters]], [[thm-brauer-induction]]).

[F2] Rings of integers are the algebraic integers, are free finite-rank $\mathbb Z$-modules, and every nonzero ideal has finite additive quotient. The finite-module determinant trick says $IM=M$ implies $(1-a)M=0$ for some $a\in I$; it has no Choice premise ([[def-ring-of-integers-of-a-number-field]], [[thm-ring-of-integers-free-of-rank-degree]], [[lem-nonzero-number-field-ideal-has-finite-quotient]], [[lem-determinant-trick-for-nakayama]]).

[F3] Galois groups act transitively on primes above a fixed prime. The residue sequence is $1\to I\to D\to\operatorname{Gal}(\kappa(P)/\kappa(v))\to1$, and arithmetic Frobenius induces the $Nv$-power map. Residue degrees multiply in towers; ideal norms are residue-field cardinalities, and a degree-$f$ vector space over a field of $q$ elements has $q^f$ elements. ([[thm-galois-action-on-primes-above-a-prime-is-transitive]], [[thm-decomposition-inertia-exact-sequence]], [[def-arithmetic-frobenius-coset]], [[thm-ramification-and-residue-degrees-in-towers]], [[def-prime-above-and-residue-degree]], [[def-absolute-norm-of-an-ideal]], [[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]]).

[F4] Determinants have their finite Leibniz formula, and adding a scalar multiple of one row to another preserves the determinant. The minimal polynomial divides every annihilating polynomial; splitting into distinct roots makes an operator diagonalizable. Complex polynomials split ([[def-determinant-of-a-square-matrix]], [[thm-determinant-under-elementary-row-operations]], [[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]], [[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]], [[thm-fundamental-theorem-of-algebra-liouville-proof]]).

[F5] The Dedekind zeta ideal series and Euler product converge absolutely for $\sigma>1$. Geometric sums have their explicit scalar tails; the complex exponential has its addition and Cartesian modulus laws, and logarithms have their real product laws ([[thm-dedekind-zeta-euler-product]], [[thm-geometric-series]], [[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-natural-logarithm-laws]]).

## Proof

1.1 We first supply prime lifting in the number-field case without the Choice-dependent general lying-over theorem. If $F\subset L$ is an intermediate field, put $A=\mathcal O_F$, $B=\mathcal O_L$, and let $\mathfrak p\ne0$ be prime in $A$. A finite $\mathbb Z$-basis of $B$ also generates it as an $A$-module. Localize at $A\setminus\mathfrak p$, obtaining the nonzero domain $B_{\mathfrak p}$ finite over $A_{\mathfrak p}$. If $\mathfrak pA_{\mathfrak p}B_{\mathfrak p}=B_{\mathfrak p}$, [F2]'s determinant trick supplies $a\in\mathfrak pA_{\mathfrak p}$ with $(1-a)B_{\mathfrak p}=0$. Applying to one and using $A_{\mathfrak p}\hookrightarrow B_{\mathfrak p}$ gives $a=1$, a contradiction. Thus $C=B_{\mathfrak p}/\mathfrak pB_{\mathfrak p}$ is a nonzero finitely generated vector space over the finite field $A/\mathfrak p$ and is a finite ring. A proper ideal of maximal cardinality exists in this finite ring; it is maximal, so its pullback is a prime of $B_{\mathfrak p}$ whose contraction is $\mathfrak pA_{\mathfrak p}$. Pulling back once more gives a nonzero prime of $B$ above $\mathfrak p$. All choices here are finite. [F1, F2, F3, given, construct, algebra]

1.2 We prove the remaining cyclic determinant calculation explicitly. Let a finite cyclic group generated by $c$ have a subgroup of index $f$, and let $A$ be the action of $c^f$ on a vector space $Z$. In the induced model, evaluation at $1,c,\ldots,c^{f-1}$ makes $c$ act as $(z_0,\ldots,z_{f-1})\mapsto(Az_{f-1},z_0,\ldots,z_{f-2})$. If $\dim Z=0$ both determinants are one. Otherwise $1-zc$ has diagonal blocks $1$, subdiagonal blocks $-z$, and upper-right block $-zA$. Add $z$ times the first block row to the second, then $z$ times the new second to the third, and continue. These are determinant-preserving scalar row additions by [F4]. The last diagonal block becomes $1-z^fA$ and all preceding diagonal blocks are identities. The Leibniz formula now leaves only permutations inside the last block. Thus $\det(1-zc)=\det(1-z^fA)$, including $f=1$. [F1, F4, construct, algebra]

2.1 Fix $v$ and $P\mid v$, now supplied by step 1.1, and write $D=D_v$, $I=I_v$. Primes of $L$ above $v$ form the transitive $G$-set $G/D$. Two of them contract to the same prime of $E$ exactly when they are in the same $H$-orbit: the reverse implication uses transitivity of $H=\operatorname{Gal}(L/E)$ over that prime, and every prime of $E$ lifts by step 1.1. Hence primes $w\mid v$ are parametrized by the finite double cosets $D\backslash G/H$, with representative $x$ corresponding to $w_x=(x^{-1}P)\cap E$. Let $J_x=D\cap xHx^{-1}$. After conjugating by $x$, the decomposition and inertia groups for $L/E$ at $x^{-1}P$ become $J_x$ and $J_x\cap I$. [F1, F3, step 1.1, construct, algebra]

3.1 Functions in $U$ supported on one $D$-orbit $DxH$ give a $D$-stable direct summand. Evaluation $f\mapsto(d\mapsto f(dx))$ identifies it with $\operatorname{Ind}_{J_x}^D W_x$, where $j\in J_x$ acts on $W_x=W$ as $x^{-1}jx$. Indeed $f(djx)=f(dx(x^{-1}jx))=(x^{-1}jx)^{-1}f(dx)$, exactly the covariant rule. Summing over the finitely many double cosets gives the full direct-sum decomposition of $U$ as a $D$-module; no Mackey theorem is assumed. [F1, step 2.1, construct, algebra]

4.1 Let $J\le D$ and $Y$ be a finite-dimensional $J$-module. Since $I\trianglelefteq D$, an $I$-fixed covariant function on $D$ is constant on both left and right $I$-cosets. Its values lie in $Y^{I\cap J}$: covariance by an element of $I\cap J$ must act trivially on those values. Conversely such functions descend exactly to the covariant functions on $D/I$ with subgroup $JI/I$ acting on $Y^{I\cap J}$ by its $J$ representative. This action is well-defined because $I\cap J$ acts trivially. We have therefore constructed the equivariant isomorphism $(\operatorname{Ind}_J^D Y)^I\cong\operatorname{Ind}_{JI/I}^{D/I}(Y^{I\cap J})$. [F1, F3, step 3.1, algebra]

5.1 Apply step 4.1 with $J=J_x$, $Y=W_x$. The finite cyclic group $D/I$ is generated by arithmetic Frobenius. Its subgroup $J_xI/I$ corresponds, after the conjugation in step 2.1, to the residue extension from $L$ to $E$. Its index is $f_w=f(w_x/v)$ by the exact residue sequences and the residue-degree tower formula in [F3]. Norm cardinalities consequently satisfy $Nw_x=(Nv)^{f_w}$. The $f_w$th power of arithmetic Frobenius acts on $W_x^{I\cap J_x}$ as arithmetic Frobenius for $L/E$ on $W^{I_w}$, under that same conjugation: both induce the $(Nv)^{f_w}=Nw_x$ power map on the residue field. [F3, step 2.1, step 4.1, algebra]

6.1 Take inertia invariants in the finite direct sum of step 3.1, then apply steps 4.1, 5.1 and 1.2 to each summand. The determinant of a direct sum is the product of its determinants by the same finite Leibniz argument. Step 5.1 identifies the last operator with $F_w$ and the power with $f_w$, proving the exact local polynomial identity in the Statement for every prime, including ramified primes. A different lift of Frobenius differs by inertia and acts identically on invariants. A different prime above $v$ conjugates decomposition, inertia and Frobenius; its representation map identifies the invariant spaces and conjugates the operators, leaving the determinant unchanged. The same applies over $E$. [F3, F4, step 2.1, step 3.1, step 4.1, step 5.1, step 1.2, algebra]

7.1 For completeness all these Euler products are well-defined without an analytic-continuation assumption. Every element of a finite group has finite order. On an invariant subspace its minimal polynomial divides $X^m-1$ for some positive $m$, so [F4] makes it diagonalizable with roots-of-unity eigenvalues. Therefore its local inverse determinant is a product of at most $d$ factors $(1-\omega (Nv)^{-s})^{-1}$ with $|\omega|=1$, where $d$ is the fixed representation dimension. For $\sigma>1$, put $r=2^{-\sigma}<1$; each factor differs from one by at most $(Nv)^{-\sigma}/(1-r)$. Expanding their finite product bounds its difference from one by $C_{d,\sigma}(Nv)^{-\sigma}$. The inverse local polynomial has the same type of bound. The prime sum is finite by the positive ideal series of [F5]. For a finite tail of either product, $|\prod(1+a)-1|\le\exp(\sum|a|)-1$ follows by expansion and $1+t\le e^t$. Thus both the product and its inverse have explicit Cauchy tails; their limits multiply to one. The products converge absolutely and are nonzero, for any omitted-prime subset $S$. [F4, F5, step 6.1, algebra]

8.1 In step 6.1 substitute $z=(Nv)^{-s}$. Step 5.1 gives $z^{f_w}=(Nw)^{-s}$ with the real logarithm convention. Multiply over the primes $v\notin S$. All primes of $E$ not in $S_E$ occur in exactly one finite fiber $w\mid v$. The products can be regrouped because their absolute tails are controlled by step 7.1. This proves $L_S(L/K,U;s)=L_{S_E}(L/E,W;s)$ in $\sigma>1$, with no restriction that $E/K$ be Galois. [F3, F5, step 5.1, step 6.1, step 7.1, algebra]

9.1 Inertia invariants commute with finite direct sums, and Frobenius is block diagonal there, so local polynomials and global Euler products multiply on direct sums. Intertwiners identify the corresponding invariant-space actions, so isomorphic representations have identical Euler products. Apply [F1]'s published Brauer induction to $\chi_V$, giving a finite integral decomposition as stated. Move negative coefficients to the other side. The resulting equality of actual complex characters gives an isomorphism between the resulting finite direct sums by [F1]. Multiplicativity and nonvanishing in step 7.1 then yield the quotient identity with powers $a_j$. Applying step 8.1 to every induced factor proves the displayed finite Brauer product formula. This uses the published finite-group theorem, not an imported analytic L-function property. [F1, F4, step 7.1, step 8.1, construct, algebra]

10.1 Finally suppose inertia of $L/K$ is trivial outside $S$. For a linear character $\lambda$ of $H$, its kernel $N$ is normal and $H/N$ identifies with a finite subgroup of the abelian group $\mathbb C^\times$. Hence $F=L^N$ is a finite abelian Galois extension of $E$ and $\lambda$ descends to its Galois group. By step 2.1, the inertia groups for $L/E$ above $v\notin S$ are trivial. To check descent without a hidden ramification assumption, fix $P$ of $L$ above $Q$ of $F$. An element of the decomposition group downstairs lifts to $H$ and can be adjusted by $N$ to fix $P$, using transitivity above $Q$. If it is in downstairs inertia, the residue action of this adjusted lift fixes $\kappa(Q)$; the exact residue sequence for $L/F$ supplies an element of its decomposition group in $N$ with the same action on $\kappa(P)$. Their quotient lies in the trivial inertia of $L/E$. The downstairs inertia element is therefore the identity. The upstairs arithmetic Frobenius restricts to the $(N_Ew)$-power map on the downstairs residue field, so its descended character value is the same at every prime outside $S_E$. All invariant spaces here are the full one-dimensional spaces. Thus their local factors, and by step 7.1 their Euler products, agree. This proves the final assertion without constructing a ray class field or Hecke character. [F1, F3, step 2.1, step 7.1, step 9.1, algebra] ∎

## Remarks

The proof reconstructs the complete finite formal-property step of the classical Brauer reduction, including ramified inertia, non-Galois intermediate fields, a choice-free finite prime-lifting argument and arbitrary omitted-prime subsets in the absolute-convergence half-plane. It proves no meromorphic continuation. The actual continuation parent still needs its one-dimensional analytic inputs at its unconditional scope; a Given ray-class correspondence in another theorem is not supplied by this lemma. For meromorphic continuation after deleting Euler factors, the standard source uses a FINITE set S, as Johnston–Nickel §2.2 explicitly states. No arbitrary infinite-deletion continuation is inferred. No accepted boundary proof was re-reviewed, no computation was imported, and no readiness or API transition is performed by this carrier.
