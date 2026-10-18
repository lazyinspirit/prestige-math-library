---
id: lem-reduced-relative-ko-suspension-exactness-and-product
kind: lemma
title: Suspension, exactness, and products in relative KO
status: draft
origin: pipeline
page: real-clifford-modules-ko-and-abs-orientations
deps:
- def-reduced-relative-ko-and-ko-compact-support
- lem-finite-cw-relative-ko-triples-and-homotopy-invariance
- prop-relative-cw-inclusions-are-cofibrations
- lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient
- lem-iterated-cofibers-rotate-with-suspension-reflection
- def-reduced-cone-suspension-and-cofiber-sequence
- def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: M. F. Atiyah, K-Theory, §§1.3–1.4 and 2.4 (complex source; real arguments
      supplied locally)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
---

## Statement

Assume AC. Finite CW pairs have the natural cofiber exact sequence

$$\cdots\longrightarrow KO^{-j-1}(X)\longrightarrow KO^{-j-1}(A)\xrightarrow{\partial}KO^{-j}(X,A)\longrightarrow KO^{-j}(X)\longrightarrow KO^{-j}(A)\longrightarrow\cdots\longrightarrow KO^0(A).$$

This sequence continues indefinitely to the left; a positive-degree continuation requires a separately proved periodicity theorem. The reduced suspension identity is $\widetilde {KO}^{-j}(\Sigma Y)=\widetilde {KO}^{-j-1}(Y)$. There are natural associative products

$$KO^{-p}(X,A)\otimes KO^{-q}(Y,B)\longrightarrow KO^{-p-q}(X\times Y,A\times Y\cup X\times B),$$

which in absolute degree zero are the bundle tensor product. They commute with the suspension identifications with the order of sphere coordinates retained, and interchange of degrees $-p,-q$ has sign $(-1)^{pq}$. The diagonal gives internal products; a real factor acts on relative $KSp$. For a metric bundle $V$, the quotient $\widehat V/s_+(X)$, where $\widehat V=S(\mathbb R\oplus V)$, is naturally homeomorphic to $\operatorname{Th}(V)$. At rank zero both are $X_+$. The reduced groups split $KO^0(Y)=\widetilde {KO}^0(Y)\oplus\mathbb Z$ at a chosen basepoint. The analogous exactness and suspension statements hold for $KSp$.

## Facts & Assumptions

**Given:** AC, finite CW pairs $(X,A),(Y,B)$, integers $p,q,j\geq0$, and the quotient and cone conventions of the statement.

[F1] Relative triples give the quotient group, and equality in degree zero means stable bundle isomorphism; real and quaternionic complements, frame extensions and homotopy invariance hold ([[lem-finite-cw-relative-ko-triples-and-homotopy-invariance]]).

[F2] Subcomplex inclusions are cofibrations ([[prop-relative-cw-inclusions-are-cofibrations]]). Their homotopy cofibers agree with their quotients ([[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]).

[F3] Iterated cofibers rotate to suspensions, with height reflection on the next map, and cone formation commutes with suspension with coordinate interchange retained ([[lem-iterated-cofibers-rotate-with-suspension-reflection]], [[def-reduced-cone-suspension-and-cofiber-sequence]]).

## Proof

**Proof technique:** explicit finite-bundle constructions.

1.1 In degree zero the image of $KO^0(X,A)\to KO^0(X)$ lies in the kernel of restriction, because a triple $(E,F,g)$ has isomorphic restrictions. Conversely, if $[E]-[F]$ restricts to zero, [F1] gives $E|_A\oplus\varepsilon^k\cong F|_A\oplus\varepsilon^k$. Choose such an isomorphism $g$. The triple $(E\oplus\varepsilon^k,F\oplus\varepsilon^k,g)$ has image $[E]-[F]$. This proves exactness at $KO^0(X)$. For a based pair the same proof gives reduced exactness: take the basepoint in $A$, so the lifted triple is already zero at that point. All constructions commute with pullbacks; exactness needs existence of $g$, not a preferred choice. [F1, construct, algebra]


1.2 We give the relative tensor product construction explicitly. A triple is a graded bundle $E=E^0\oplus E^1$ and an odd isomorphism on $A$, represented after choosing a metric by the self-adjoint operator $d_E=\begin{pmatrix}0&g^*\\g&0\end{pmatrix}$. Extend $g$ from $A$ to a bundle map on $X$ by the Hom-section extension in [F1], and use the same formula to obtain a global odd self-adjoint operator $d_E$ invertible on $A$. Do the same for $F$ on $Y$. On the graded real tensor product define $D=d_E\otimes1+\gamma_E\otimes d_F$, where $\gamma_E$ is $+1$ on $E^0$ and $-1$ on $E^1$. Since $d_E\gamma_E=-\gamma_Ed_E$, the mixed terms cancel and $D^2=d_E^2\otimes1+1\otimes d_F^2$. These are commuting positive semidefinite operators, and one term is positive definite on $A\times Y\cup X\times B$. Thus $D$ restricts to an isomorphism from total even to total odd fibers there, giving a relative triple. Its even and odd bundles are respectively $(E^0\otimes F^0)\oplus(E^1\otimes F^1)$ and $(E^1\otimes F^0)\oplus(E^0\otimes F^1)$. Its absolute virtual bundle is consequently $([E^0]-[E^1])([F^0]-[F^1])$. [F1, algebra, construct]


2.1 Apply step 1.1 to successive cone-base cofibrations in the cofiber sequence $A\to X\to C_i\to\Sigma A\to\Sigma X\to\cdots$. The cone-base pairs are compact spaces built from finitely many cells, so [F1] applies. By [F2], $C_i\simeq X/A$. By [F3], the cofiber of $X\to C_i$ is $\Sigma A$, the next is $\Sigma X$, and so forth. Homotopy invariance transports the three-term exactness to every consecutive three terms of the contravariant sequence. The connecting map is precisely pullback along $C_i\to\Sigma A$ after these identifications. Replacing by $X_+,A_+$ handles the unbased case and $A=\varnothing$. Suspending $j$ times yields the displayed negative-degree sequence. The reflection signs are those of [F3]. No Bott theorem or positive-degree continuation has been used. The proof uses only the properties already proved over $\mathbb H$ in [F1], and therefore proves the $KSp$ assertion as well. [F1, F2, F3, step 1.1, construct]


2.2 Extensions of a fixed $g$ form an affine space; interpolate them to see independence of extension because the value on $A$ stays fixed and invertible. Changes of metric are handled by the convex path of metrics and adjoints. Homotopies, isomorphisms and direct sums of input triples are respected by the displayed formula. If an input triple is elementary choose its extended $d_E$ invertible everywhere; then $D^2$ is positive everywhere and the output triple is elementary. Hence the construction descends to a bilinear operation on the quotient groups of [F1]. With three factors the two parenthesizations give the identical operator $d_E\otimes1\otimes1+\gamma_E\otimes d_F\otimes1+\gamma_E\otimes\gamma_F\otimes d_G$ under the usual tensor identifications, proving associativity. The graded flip $e\otimes f\mapsto(-1)^{|e||f|}f\otimes e$ intertwines the two product operators, proving degree-zero symmetry. The trivial real line is a unit. Tensoring real with right-$\mathbb H$ bundles in the same construction gives the module product, since each displayed operator is right-$\mathbb H$ linear. [F1, step 1.2, algebra, construct]


3.1 There is a natural based homeomorphism $(X/A)\wedge(Y/B)\cong (X\times Y)/(A\times Y\cup X\times B)$; it follows directly from the quotient identifications, or from the continuous bijection between compact Hausdorff spaces. The construction in step 1.2 is zero relative to the collapsed subsets, so it is exactly a reduced product on this smash quotient. Apply it on $S^p\wedge(X/A)$ and $S^q\wedge(Y/B)$ and then move the $Y$ sphere coordinates past $X/A$ to obtain the stated degree $-p-q$ product. Fix $S^r=I^r/\partial I^r$ and concatenate the first $p$ sphere coordinates with the next $q$ coordinates. Associativity and suspension compatibility are then literal quotient-coordinate identities. In particular the suspension identity in the statement is just $S^j\wedge S^1\wedge Y=S^{j+1}\wedge Y$ with this coordinate convention. [step 1.2, step 2.2, construct]


4.1 To verify the sign, reflection in one suspension coordinate acts by additive inverse on $\widetilde {KO}^0(\Sigma Z)$. Indeed trivialize any bundle on each of the two cones, which are contractible by [F1]. After stabilization its reduced class is represented by their transition function $h:Z\to O(N)$. Reflection exchanges the cones and replaces $h$ by $h^{-1}$. The block rotation identity makes $h\oplus h^{-1}$ homotopic to identity: set $R_t=\begin{pmatrix}\cos t&-\sin t\\\sin t&\cos t\end{pmatrix}$ on two $N$-blocks, and use $\operatorname{diag}(h,I)R_t\operatorname{diag}(I,h^{-1})R_t^{-1}$ for $0\le t\le\pi/2$. Thus reflection negates the reduced class. In $\mathbb R^{p+q}$ a coordinate block interchange has determinant $(-1)^{pq}$. Every orientation-preserving orthogonal matrix is connected to identity by successive plane rotations: send the first column to the first unit vector by a rotation, restrict to its perpendicular complement, and induct, with the final determinant-one $1\times1$ matrix equal to one. It follows that the interchange extends to a based map of the one-point compactification homotopic to identity or one reflection according to that determinant. Combining this with the graded flip in step 2.2 proves the sign $(-1)^{pq}$. For $p+q=0$ there is no reflection and the assertion is symmetry in step 2.2. Pullback along the diagonal supplies internal products. [F1, step 2.2, step 3.1, algebra, construct]


5.1 Basepoint restriction $KO^0(Y)\to\mathbb Z$ is split by constant real bundles, proving $KO^0(Y)=\widetilde {KO}^0(Y)\oplus\mathbb Z$. For the Thom identification, stereographic projection from the north pole identifies $\widehat V\setminus s_+(X)$ fiberwise with $V$. Because $X$ is compact and the sphere bundle is compact Hausdorff, collapsing the closed north section yields precisely the one-point compactification of $V$: complements of neighborhoods of that section are exactly compact closed subsets of its open complement. The radial homeomorphism $v\mapsto v/(1+\|v\|)$ identifies $V$ with the interior of $D(V)$, and extends on one-point compactifications to $\widehat V/s_+(X)\cong D(V)/S(V)$. This is natural under fiberwise orthogonal isomorphisms. For $V=0$, the sphere bundle consists of two copies of $X$ and the quotient is $X_+$. It follows directly that the compact-support convention and the section-quotient convention agree. [step 3.1, construct] ∎
