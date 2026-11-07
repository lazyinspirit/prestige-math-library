---
id: thm-abelian-homomorphism-groups-finite-free-and-tate-faithful
kind: theorem
title: Abelian homomorphism groups are finite free and act faithfully after Tate scalar extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-abelian-endomorphism-degree-is-a-homogeneous-polynomial
- lem-discrete-subgroups-of-real-vector-spaces-are-lattices
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- lem-arith-prime-to-characteristic-multiplication-etale
- lem-nonaffine-fppf-descent-of-scheme-morphisms
- thm-nonaffine-group-scheme-normal-subgroup-quotient
- lem-nonaffine-group-monomorphism-closed-immersion
- lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
- lem-arith-finite-cartier-duality-and-exactness
- lem-polarization-projectors-and-chow-descent-of-abelian-subvarieties
- thm-proper-quasi-finite-is-finite
- cor-submodules-of-finite-free-pid-modules-are-free
- thm-existence-of-algebraic-closures
- thm-cayley-hamilton-from-pid-module-structure
justified_by: []
sources:
  references:
  - title: J. S. Milne, Abelian Varieties, version 2.00 (2008)
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Chapter I section10, Proposition10.13 and Theorem10.15/Lemma10.16, printed47–50. Saturated finite-dimensional subgroups and the order of the rank-bound argument are explicit below.
---

## Statement

Assume the Axiom of Choice. Let $A,B$ be abelian varieties over any field $k$, of dimensions $a,b\ge0$. Then $G=\operatorname{Hom}_k(A,B)$ is a finite free abelian group of rank at most $4ab$. For every prime $\ell\ne\operatorname{char}k$, the natural map
$$G\otimes_{\mathbb Z}\mathbb Z_\ell\longrightarrow\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell A,T_\ell B)$$
is injective and its cokernel is torsion-free over $\mathbb Z_\ell$. Equivalently, its image is saturated under division by $\ell$. Tensoring with $\mathbb Q_\ell$ gives an injection
$$\operatorname{Hom}_k(A,B)\otimes_{\mathbb Z}\mathbb Q_\ell\hookrightarrow\operatorname{Hom}_{\mathbb Q_\ell}(V_\ell A,V_\ell B).$$
Every element of the ring $\operatorname{End}_k(A)$ is integral over $\mathbb Z$. These conclusions apply in positive characteristic without a separability condition on the endomorphisms. No equality with the Galois-equivariant Tate-module homomorphisms is asserted.

## Facts & Assumptions

**Given:** AC, $k,A,B$, their dimensions, and a prime $\ell$ invertible in $k$.

[A1] AC is explicit and implies DC and Countable Choice for the arithmetic and Poincare suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Over an algebraically closed field, endomorphism degree is a homogeneous rational polynomial on every finite rational span; its value on a nonzero isogeny is a positive integer. A discrete subgroup of a finite-dimensional real vector space is free and finitely generated ([[lem-abelian-endomorphism-degree-is-a-homogeneous-polynomial]], [[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]).

[F2] For $\ell$ invertible, $T_\ell A$ is free of rank $2a$, and $T_\ell A/\ell^nT_\ell A$ is naturally $A[\ell^n](k^{\rm sep})$. The analogous assertions hold for $B$ ([[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]).

[F3] Multiplication by a positive integer is finite faithfully flat; its torsion kernel is finite etale when that integer is invertible in $k$. Compatible scheme morphisms descend uniquely along an fppf cover ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], [[lem-arith-prime-to-characteristic-multiplication-etale]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

[F4] A finite-type group quotient by a normal subgroup is an fppf scheme quotient. A group map with trivial scheme kernel is a closed immersion. Over a perfect field the reduced identity component of a finite-type subgroup is smooth, has the full dimension of that subgroup, and is proper when the subgroup is proper. A finite commutative group scheme is killed by its rank. A proper quasi-finite morphism is finite ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-monomorphism-closed-immersion]], [[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[lem-arith-finite-cartier-duality-and-exactness]], [[thm-proper-quasi-finite-is-finite]]).

[F5] Every abelian subvariety has an abelian complement whose addition map is an isogeny ([[lem-polarization-projectors-and-chow-descent-of-abelian-subvarieties]]).

[F6] A submodule of a finite free module over a PID is finite free. Algebraic closures exist under AC. A finite-dimensional vector-space endomorphism satisfies its characteristic polynomial ([[cor-submodules-of-finite-free-pid-modules-are-free]], [[thm-existence-of-algebraic-closures]], [[thm-cayley-hamilton-from-pid-module-structure]]).

## Proof

1.1 First establish divisibility over the original field, without a finite-generation hypothesis. If $f:A\to B$ kills $A[\ell^n](k^{\rm sep})$, it kills the finite etale kernel as a scheme: after a separable closure that scheme is a disjoint union of rational reduced points, and equality descends faithfully. The kernel pair of $[\ell^n]$ is $A\times A[\ell^n]$, with the two arrows $(x,t)\mapsto x,x+t$. Thus [F3] descends $f$ through this fppf cover to a unique homomorphism $h:A\to B$ with $f=h\circ[\ell^n]=\ell^n h$; its group identity follows after the product cover. Conversely such a multiple kills the torsion. Consequently the kernel of $G\to\operatorname{Hom}(A[\ell^n],B[\ell^n])$ is exactly $\ell^nG$. Also $G$ is torsion-free: $df=0$ implies $f\circ[d]=0$, whence $f=0$ by the surjectivity and descent uniqueness in [F3]. These arguments include zero-dimensional varieties. [A1, F2, F3, given, construct, algebra]

1.2 Work temporarily over an algebraically closed field. Images of homomorphisms of abelian varieties are abelian subvarieties, with their scheme structure. Indeed, [F4] represents the quotient by the kernel; it is smooth and connected, and is proper since it is the separated surjective image of the proper source after every base extension. The induced kernel-free map to the target is a closed immersion by [F4]. For a nonzero map between simple positive-dimensional abelian varieties, its image is nonzero and thus the whole simple target. Its kernel has dimension zero: otherwise its smooth reduced identity component from [F4] would be a positive-dimensional abelian subvariety of the simple source, hence the whole source, making the map zero. It is therefore a finite subgroup, and the quotient map is an isogeny and fppf. Such an isogeny $v:X\to Y$ has an actual quasi-inverse up to an integer. If its kernel rank is $d$, [F4] says $[d]_X$ kills it, so the quotient property gives $w:Y\to X$ with $wv=[d]_X$; fppf surjectivity gives $vw=[d]_Y$. The same quasi-inverse argument applies to every isogeny. [F3, F4, given, construct, algebra]

2.1 Let $S$ be simple of positive dimension $s$, and let $W$ be a finite-dimensional rational subspace of $\operatorname{End}^0(S)$ spanned by actual endomorphisms. Set $L_W=\operatorname{End}(S)\cap W$, the entire saturated subgroup, rather than an arbitrary subgroup generated by a chosen list. By [F1], degree on $W$ is a real continuous polynomial in any rational basis. At zero it is zero. Every nonzero element of $L_W$ is an isogeny by step 1.2, so its degree is an integer at least one. The open neighbourhood where the absolute value of the polynomial is less than one therefore meets $L_W$ only in zero. Translation makes $L_W$ discrete in $W\otimes_{\mathbb Q}\mathbb R$. By [F1] it is finite free; its rank is $\dim_{\mathbb Q}W$, since it contains a rational basis of $W$. [F1, step 1.2, construct, algebra]

3.1 Fix one prime $\ell$ different from the characteristic. If $x\in L_W$ acts by zero on $S[\ell]$, step 1.1 gives $x=\ell y$ with $y\in\operatorname{End}(S)$. Since $y=x/\ell\in W$, saturation gives $y\in L_W$. Thus $L_W/\ell L_W$ injects into the $\mathbb F_\ell$-vector space $\operatorname{End}_{\mathbb F_\ell}(S[\ell])$, of dimension $4s^2$ by [F2]. By step 2.1 this bounds $\dim W$ by $4s^2$. Every finite rationally independent list in $\operatorname{End}^0(S)$ can have its denominators cleared to give such a $W$. The lengths of all such lists are therefore bounded by $4s^2$; choose one of maximal length. Its rational span is the whole endomorphism algebra, since otherwise one could append an independent endomorphism. Apply step 2.1 to this finite span: $\operatorname{End}(S)$ itself is finite free. No finite-dimensional rational basis was assumed before obtaining the bound. [A1, F2, step 1.1, step 2.1, choose, algebra]

4.1 Every abelian variety over the algebraically closed field is isogenous to a finite product of simple ones. Choose an abelian subvariety of least positive dimension and apply [F5] to split off a complement; induction decreases dimension and terminates. Dimension zero gives the one-point group and needs no factors. For any simple $S,T$, either $\operatorname{Hom}(S,T)=0$, or step 1.2 gives an isogeny and an opposite isogeny $v:T\to S$. Composition with $v$ injects $\operatorname{Hom}(S,T)$ into $\operatorname{End}(S)$: composing further with its quasi-inverse makes an integer multiple, and step 1.1 removes integer torsion. This subgroup is finite free by [F6] and step 3.1. Choose product isogenies $p:\prod_i S_i\to A$ and $q:B\to\prod_j T_j$, using the quasi-inverse from step 1.2 to orient the second one. The map $f\mapsto qfp$ injects $\operatorname{Hom}(A,B)$ into the finite product $\prod_{i,j}\operatorname{Hom}(S_i,T_j)$, again by the quasi-inverse identities and torsion-freeness. Thus [F6] proves finite freeness for all geometric $A,B$. [A1, F5, F6, step 1.1, step 1.2, step 3.1, construct, algebra]

5.1 Return to any field $k$. Choose an algebraic closure by [F6]. Faithful scalar extension injects $\operatorname{Hom}_k(A,B)$ into $\operatorname{Hom}_{\bar k}(A_{\bar k},B_{\bar k})$: equality of morphisms is detected by the field-extension fppf cover in [F3]. The latter is finite free by step 4.1, so [F6] makes $G$ finite free as well. By step 1.1, $G/\ell G$ injects into $\operatorname{Hom}_{\mathbb F_\ell}(A[\ell](k^{\rm sep}),B[\ell](k^{\rm sep}))$. Its target has dimension $4ab$ by [F2]. Hence $\operatorname{rank}G\le4ab$, including $a=0$ or $b=0$. [F2, F3, F6, step 1.1, step 4.1, algebra]

6.1 Choose a $\mathbb Z$-basis $e_1,\ldots,e_r$ of $G$ from step 5.1. An element of $G\otimes\mathbb Z_\ell$ has unique coefficients $x_i\in\mathbb Z_\ell$. Suppose its action on the Tate modules is zero. For every $n$, choose integers $c_i$ representing $x_i$ modulo $\ell^n$. By [F2], $\sum_i c_ie_i$ kills $A[\ell^n]$. Step 1.1 makes it an element of $\ell^nG$, so each $c_i$ is divisible by $\ell^n$. Therefore every $x_i$ is zero modulo every $\ell^n$, and hence zero. This proves the tensor injection. To prove saturation, suppose the image of $x=(x_i)$ in the target is divisible by $\ell$. Reduction modulo $\ell$ and the injection $G/\ell G$ from step 5.1 force each $x_i\in\ell\mathbb Z_\ell$. Write $x=\ell y$. If its image was $\ell M$, then the injective scalar multiplication by $\ell$ on the free target gives $M$ equal to the image of $y$. Thus the image is saturated under division by $\ell$; iteration and the unit-times-power form of every nonzero $\mathbb Z_\ell$ scalar make its cokernel torsion-free. Localizing the injection gives the stated $\mathbb Q_\ell$ injection. [F2, step 1.1, step 5.1, choose, algebra]

7.1 Finally let $R=\operatorname{End}_k(A)$, finite free by step 5.1 with $B=A$. Left multiplication by $u\in R$ is an integral matrix in a $\mathbb Z$-basis of $R$. Its characteristic polynomial is monic with coefficients in $\mathbb Z$, and annihilates it on $R\otimes\mathbb Q$ by [F6]. Evaluating that matrix identity on the identity endomorphism gives the same monic polynomial vanishing at $u$ in $R\otimes\mathbb Q$, and torsion-freeness gives its vanishing in $R$. For the zero-dimensional one-point variety $R=0$, the sole endomorphism is annihilated by the monic polynomial $X$. Thus every endomorphism is integral, with no separability or characteristic-zero assumption. This completes all assertions. [F6, step 5.1, algebra] ∎

## Source-reading boundary

The cached Milne AV notes were read at Chapter I Proposition10.13 and Theorem10.15/Lemma10.16, printed47–50. The degree-polynomial supplier is locally proved. The argument explicitly uses the saturated subgroup $\operatorname{End}(S)\cap W$, obtains its rank bound from torsion before choosing a rational basis of the whole endomorphism algebra, and uses only the stated ready Poincare complement interface for simple decomposition. General Neron–Severi/Picard representability and every Tate-isogeny surjectivity theorem are absent from this proof.
