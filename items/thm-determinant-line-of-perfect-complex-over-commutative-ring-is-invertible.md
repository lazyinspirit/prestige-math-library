---
id: thm-determinant-line-of-perfect-complex-over-commutative-ring-is-invertible
kind: theorem
title: "Invertibility and Base Change of the Determinant Line over a Commutative Ring"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-determinant-line-of-perfect-complex-over-commutative-ring
  - def-projective-module
  - thm-projective-module-characterizations
  - lem-bounded-acyclic-projective-complex-is-split-contractible
  - lem-perfect-complexes-form-a-triangulated-subcategory
  - thm-determinant-multiplicative
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV §1 and §6.3.2; Quillen K-theory and determinant conventions."
    - title: "M. Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups"
      url: "https://arxiv.org/pdf/0812.1556"
      locator: "§3; determinant lines for perfect complexes."
---

## Statement

Let $R$ be any commutative ring and let $P^\bullet$ be a perfect complex over $R$. Then $\operatorname{Det}_R(P^\bullet)$ is an invertible $R$-module; it is independent, up to its canonical determinant-functor isomorphism, of the chosen bounded finite-projective representative, and for every ring homomorphism $R\to S$ its base change is canonically isomorphic to $\operatorname{Det}_S(P^\bullet\otimes_R S)$.

## Statement references

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

[M. Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups](https://arxiv.org/pdf/0812.1556)

## Facts & Assumptions

**Given:** A commutative ring $R$, the perfect object and specified bounded finite-projective representatives in the Statement, and a homomorphism $R\to S$ for the base-change assertion. No flatness or Noetherian hypothesis is imposed.

[F1] The finite local wedge construction and its transition rule define the alternating tensor module for a bounded representative. [[def-determinant-line-of-perfect-complex-over-commutative-ring]]

[F2] A finite projective is a summand of a finite free module, and a short exact sequence ending in a projective splits. [[def-projective-module]] [[thm-projective-module-characterizations]]

[F3] A bounded acyclic projective complex is split contractible. With finite-projective terms its cycles are finite projective, since the cycle sequences split. [[lem-bounded-acyclic-projective-complex-is-split-contractible]]

[F4] Every derived morphism between bounded finite-projective representatives is a chain map uniquely up to homotopy, and its cone is bounded finite projective. [[lem-perfect-complexes-form-a-triangulated-subcategory]]

[F5] Determinants multiply over every commutative ring, including a change of basis and its inverse. [[thm-determinant-multiplicative]]

## Proof

**Proof technique:** finite wedge gluing, parity-aware disk cancellation and explicit mapping cylinders.

1.1 For one finite projective $P$, the finite idempotent-pivot construction in [F1] gives a unit-ideal principal cover with bases of $P$. It works for any idempotent matrix: invert either its first diagonal entry or its complement, split one free summand from its image or its complementary image, and descend on matrix size. The overlap rank can differ only on the zero ring, since exterior powers distinguish free ranks on a nonzero ring. Top wedges therefore have invertible determinant transitions; [F5] gives their cocycle. The finite matching-tuple construction in [F1], with denominator clearing, gives the line $d(P)$ and its dual, with evaluation an isomorphism. In particular no maximal-order, DVR or constant-rank replacement has occurred. Applying the construction in finitely many degrees proves that the module in the Statement is invertible for a chosen representative, also when $R=0$. [F1, F2, F5, given, construct, algebra]

2.1 We fix the signs needed for canonical transport. Keep the locally constant rank as a grading on $d(P)$. For graded invertible modules $(L,r),(M,s)$ use tensor grading $r+s$ and symmetry $(-1)^{rs}$ times interchange. The sign is defined on the finite common rank cover and glues. The dual is $(\operatorname{Hom}_R(L,R),-r)$ with its canonical evaluation; tensoring by an invertible module is fully faithful, by tensoring with its dual. For an isomorphism $u:L\to M$ write $u^v:L^v\to M^v$ for the covariant inverse-dual, uniquely determined by $\operatorname{ev}_M(u\otimes u^v)=\operatorname{ev}_L$. Define $\vartheta_{L,M}:(L\otimes M)^v\to L^v\otimes M^v$ by this same evaluation identity, with the shuffle putting each line beside its dual. Thus every evaluation and permutation, including equal-factor interchanges, has a specified sign. [F1, F2, F5, step 1.1, construct, algebra]

3.1 For $0\to A\to B\to C\to0$ of finite projectives, take a top wedge of $A$ followed by lifts of a top wedge of $C$. Changing a lift adds a vector from $A$, so the wedge is unchanged; on local free charts this is an isomorphism $e(A,B,C):d(A)\otimes d(C)\to d(B)$. It is natural and compatible with a three-step filtration, because both composites concatenate the same three ordered wedge blocks. Interchanging the two summands has determinant $(-1)^{\operatorname{rank}A\operatorname{rank}C}$, exactly the graded symmetry of step 2.1. These local identities glue. Set $D(P^\bullet)=\bigotimes_{n\ \mathrm{decreasing}}d(P^n)^{(-1)^n}$ in this graded category. For a degreewise exact sequence of complexes define $I(A,B,C):D(A)\otimes D(C)\to D(B)$ by shuffling into decreasing degree, then applying $e$ in even degrees and $e^v\vartheta^{-1}$ in odd degrees. Its underlying module is the alternating tensor in [F1]. [F1, F2, F5, step 1.1, step 2.1, construct, algebra]

4.1 These $I$ maps satisfy naturality, split commutativity and the three-by-three filtration identity. Indeed expand a composite degree by degree. In even degrees this is the ordered wedge identity of step 3.1. In odd degrees evaluate against the corresponding positive-degree factors: the defining identities for $u^v,\vartheta$ reduce it to the same wedge identity, and full faithfulness of tensoring cancels those factors. The remaining shuffles have the same permutation of the labelled degree-and-row blocks. Adjacent interchanges satisfy involution, disjoint commutation and the three-block braid identity: their signs are respectively $(-1)^{2rs}=1$, independent products, and the same $(-1)^{rs+rt+st}$. Thus all shuffle identities include self-braidings, rather than treating them as identities. [F1, F5, step 2.1, step 3.1, algebra]

4.2 Define an acyclic trivialization $t_A:D(A)\to R$ for each bounded acyclic projective complex. For the identity disk $U\xrightarrow{u}V$ in degrees $m,m+1$, if $m$ is odd use $\operatorname{ev}_{d(V)}(1\otimes d(u)^v)$ on $d(V)\otimes d(U)^v$; if $m$ is even, send $d(V)^v\otimes d(U)$ by $1\otimes d(u)$, interchange to $d(V)\otimes d(V)^v$ with the graded symmetry, and evaluate. Here $u$ is an isomorphism. The zero disk has its unit map. For a general acyclic $A$ with lowest degree $m$, the canonical subcomplex $K_m(A)$ has $A^m$ and $d(A^m)$ in degrees $m,m+1$. It is a disk. Its quotient $L_m(A)$ is acyclic with smaller support and finite-projective terms by [F3]. Define $t_A$ by $t_A I(K_m(A),A,L_m(A))=t_{K_m(A)}\otimes t_{L_m(A)}$, using the unit multiplication. This recursion terminates and adds no choices of splittings. [F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 The trivializations are natural under chain isomorphisms and multiplicative on a degreewise exact sequence of acyclic complexes. For disks, identify the two terms using their differentials. The assertion is then precisely the defining evaluation identity for $\vartheta$, with the specified symmetry in the other parity. For longer complexes use one common lowest degree. Their $K_m$ disks form an exact sequence; the quotients $L_m$ also do, by lifting an element and subtracting its lift in the disk. Apply the three-by-three identity of step 4.1 to the rows and columns of these three disk sequences. Substitute disk multiplicativity, induction for the quotient row, and the recursive definitions of the three $t$ maps. It gives $t_B I(A,B,C)=t_A\otimes t_C$. This also proves independence of inserting zero terms below the support and naturality, since $K_m,L_m$ are functorial. [F2, F3, step 4.1, step 4.2, induction, algebra]

6.1 Call $u:A\to B$ a good injection if it is degreewise injective with bounded finite-projective acyclic quotient $H$. Put $D'(u)=I(A,B,H)(1\otimes t_H^{-1})$, with its unit identification. For two good injections $A\subset B\subset C$, their three quotients form an exact acyclic sequence. The filtration identity for $I$ and multiplicativity in step 5.1 give $D'(vu)=D'(v)D'(u)$. The same three-by-three argument makes $I$ natural for a map of exact sequences whose three vertical arrows are good injections: its quotient row is acyclic, so applying its $t$ maps cancels that row. [F2, F3, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 For any quasi-isomorphism $f:P\to Q$, let $Z_f^n=P^n\oplus Q^n\oplus P^{n+1}$ with differential $(p,q,u)\mapsto(dp-u,dq+fu,-du)$. The inclusions $\alpha:P\to Z_f$ and $\beta:Q\to Z_f$ are good injections: their quotients are respectively $\operatorname{Cone}(f)$ and $\operatorname{Cone}(-1_P)$, acyclic by [F3] and the quasi-isomorphism property. Define $D(f)=D'(\beta)^{-1}D'(\alpha)$. The map $Z_f\to Q$, $(p,q,u)\mapsto fp+q$, is a chain quasi-isomorphism with composites $f$ and $1_Q$ on these inclusions. [F3, F4, step 6.1, construct, algebra]

8.1 For composable quasi-isomorphisms $P\xrightarrow f Q\xrightarrow g H$, use the complex $W^n=P^n\oplus Q^n\oplus H^n\oplus P^{n+1}\oplus Q^{n+1}$ with differential $(p,q,h,u,v)\mapsto(dp-u,dq+fu-v,dh+gv,-du,-dv)$. There are good injections $a:Z_f\to W$, $(p,q,u)\mapsto(p,q,0,u,0)$; $b:Z_g\to W$, $(q,h,v)\mapsto(0,q,h,0,v)$; and $c:Z_{gf}\to W$, $(p,h,u)\mapsto(p,0,h,u,fu)$. Their quotients are $\operatorname{Cone}(g)$, $\operatorname{Cone}(-1_P)$ and $\operatorname{Cone}(-1_Q)$; for the last use quotient coordinate $v-fu$. Their identities on the three original summands give $a\alpha_f=c\alpha_{gf}$, $a\beta_f=b\alpha_g$, $b\beta_g=c\beta_{gf}$. Apply step 6.1 and cancel to obtain $D(gf)=D(g)D(f)$. Taking both maps to be an identity shows $D(1)$ is an invertible idempotent, hence is the identity. For a termwise chain isomorphism $f$, the termwise isomorphism $Z_f\to Z_{1_Q}$, $(p,q,u)\mapsto(fp,q,fu)$, commutes with the two inclusions. Termwise naturality of $I,t$ gives $D(f)=D(1_Q)\bigotimes_n d(f^n)^{(-1)^n}$, the ordinary alternating wedge map. Cylinders of a map of exact sequences form an exact sequence termwise; good-injection naturality applied to its source and target inclusions proves the naturality of $I$ for quasi-isomorphisms. [F3, F4, step 6.1, step 7.1, construct, algebra]

9.1 This functor is invariant under chain homotopy. If quasi-isomorphisms $f,g:P\to Q$ satisfy $f-g=dh+hd$, use $C^n=P^n\oplus P^n\oplus P^{n+1}$ with differential $(p_0,p_1,u)\mapsto(dp_0+u,dp_1-u,-du)$. Its projection $p_0+p_1$ to $P$ has contractible kernel $\operatorname{Cone}(1_P)$; both inclusions are quasi-isomorphisms and their $D$ images equal the inverse of that projection by functoriality. The chain map $C\to Q$, $(p_0,p_1,u)\mapsto fp_0+gp_1+hu$, is a quasi-isomorphism and has composites $f,g$. Thus $D(f)=D(g)$. By [F4], the transport attached to a derived isomorphism between bounded representatives is therefore independent of its chain-map representative and composes correctly. For two identifications with the same perfect object, use their actual composite derived isomorphism; these transports satisfy the cocycle and identity rules. This is the canonical representative-independence asserted, not a choice of an isomorphism by comparing ranks. [F3, F4, step 7.1, step 8.1, construct, algebra]

10.1 Every ingredient commutes with arbitrary $R\to S$. Finite projectives and their direct-summand presentations base change to finite projectives. The finite wedge covers and transitions commute with tensoring by the construction in [F1]; their dual base change is an isomorphism on those same rank-one charts and hence globally. The split cycle sequences of an acyclic bounded projective complex remain exact after tensoring, so its $K_m,L_m$ recursion and $t$ maps base change. All $I$ maps, labelled graded shuffles, good injections and cylinder maps therefore base change. In particular a quasi-isomorphism of bounded projectives remains one after tensoring, because its split-contractible cone stays contractible. The comparison obtained in step 9.1 is carried to the same comparison over $S$. Thus the termwise natural isomorphism $S\otimes_R D(P)\cong D(S\otimes_R P)$ descends to the perfect object, is canonical, and is compatible with composition of ring maps. This proves the entire Statement, for arbitrary commutative rings and arbitrary projective orders, with no Smith-normal-form or flat-base-change assumption. [F1, F2, F3, F4, step 2.1, step 3.1, step 4.2, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1, algebra] ∎
