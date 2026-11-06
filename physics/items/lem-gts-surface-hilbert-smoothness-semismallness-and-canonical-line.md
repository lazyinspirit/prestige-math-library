---
id: lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line
kind: lemma
title: "Smooth surface Hilbert schemes, semismallness and the canonical norm line"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - thm-hilbert-scheme-represents-projective-flat-families
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - cor-finite-variable-polynomial-ring-noetherian
  - thm-serre-criterion-ampleness
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  cor-finite-variable-polynomial-ring-noetherian: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Mark Haiman, Hilbert schemes, polygraphs and the Macdonald positivity conjecture, retrieved arXiv math/0010246,
      sections 3.8 and 5.1; explicit local constructions below
    url: https://arxiv.org/pdf/math/0010246
    locator: §§3.2–3.6 (pp.7–16), especially Propositions3.2.2,3.2.3 and3.6.3; source context. Smoothness, punctual
      upper bounds and arbitrary-canonical norm comparison are constructed locally.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line.md
dependency_level: 0
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC and DC. Let S be a smooth connected projective complex surface and $n≥1$. The Hilbert scheme $Y=S^{[n]}$ of length-n subschemes is smooth irreducible projective of dimension $d=2n$. Its Hilbert–Chow map $τ:Y→Q=Sym^n$ S satisfies $\operatorname{dim}(Y×_QY)≤2n$. A punctual length-m Hilbert fiber has dimension at most m−1, and the locus over cycles with at most n−2 distinct support points has dimension at most 2n−2. The permutation-linearized canonical line $ω_{S^n}=ω_S^{⊠n}$ descends to an invertible L on Q, and $ω_Y=τ*L$, with the isomorphism agreeing with the distinct-point canonical identification. No symplectic or canonical-triviality hypothesis is imposed. The smoothness, fiber dimensions and canonical comparison are proved without using Haiman n! or a McKay equivalence.

## Statement references

[[thm-hilbert-scheme-represents-projective-flat-families]]

[[thm-auslander-buchsbaum-serre-regularity-criterion]]

[[thm-regular-local-rings-are-domains-and-cohen-macaulay]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

[[cor-finite-variable-polynomial-ring-noetherian]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

[A1] AC and DC are retained from the actual coherent/projective suppliers. No Haiman n! or general derived-McKay theorem is assumed.

[F1] [[thm-serre-criterion-ampleness]] gives eventual global generation of coherent ample twists, used for a finite vector-bundle resolution on $\mathbb P^2$. The other exact mathematical interfaces used are [[thm-hilbert-scheme-represents-projective-flat-families]], [[thm-auslander-buchsbaum-serre-regularity-criterion]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[cor-finite-variable-polynomial-ring-noetherian]], [[def-axiom-of-choice]], [[def-dependent-choice]].

## Proof

**Given:** Exactly the objects and hypotheses of the Statement.

1.1 Write $Y=S^{[n]}$, $M=S^n$, $Q=Sym^n$ S. The actual projective Hilbert-functor supplier constructs Y with the universal length-n flat family. The affine planar Hilbert scheme is its open subfunctor in $Hilb^n(P²)$: avoidance of the line at infinity is open because intersection of the universal finite family with that line has proper closed image. The finite quotient Q is obtained by gluing invariant affine charts $U^n/S_n$, where $U⊂S$ is affine and contains the finitely many entries of a cycle. Such U exist by an ample hyperplane avoiding those entries. On any finite-group affine chart, each algebra generator is integral over invariants by its orbit polynomial, so the algebra is finite over its invariant ring. The latter is finitely generated over C: choose finitely many module generators and their multiplication constants to obtain a finitely generated subring R₀ of the invariant ring; the whole algebra is finite over R₀, and its invariant subring is an R₀-submodule, hence finite by Noetherianity. These charts and their invariant open localizations glue canonically. On A², the tangent space at $I⊂C[x,y]$, $A=C[x,y]/I$, is Hom(I,A): a first-order ideal deformation is $f↦f+εφ(f)$, and multiplication closure is exactly R-linearity of φ; changing lifts does not change the class. The ideal I has local projective dimension one, from $0→I→R→A→0$ and regular local dimension two. A finite locally free presentation, restricted to A, gives [given, A1, F1, algebra]

2.1 dim Hom(I,A)−dim $\operatorname{Ext}¹(I,A)=n$. [given, A1, F1, step 1.1, algebra]

3.1 The difference of the two presentation ranks is rank $I=1$, so its Hom Euler characteristic is n. The same exact ideal sequence gives $\operatorname{Ext}¹(I,A)=\operatorname{Ext}²(A,A)$. Extend A by its finite support to P². The locally-free Serre pairing extends here as follows. The ample global-generation criterion supplies successive finite sums of negative twists surjecting onto A and its coherent kernels; regular local dimension two makes the second syzygy locally free, giving a bounded vector-bundle resolution K of A. The finite total complex Hom(K,K) computes RHom(A,A). Evaluation and supertrace identify its bundle dual with Hom(K,K); apply the supplied Serre pairing to each bundle term, with the usual total-complex signs. The resulting pairing is perfect on hypercohomology: its comparison is an isomorphism on the individual bundle terms and hence on their successive finite cones. Consequently Ext²(A,A) is dual to $\operatorname{Hom}(A,A⊗O(−3))$. This last space has dimension n, because $\operatorname{Hom}(A,A⊗L)=H⁰(Spec A,L|Spec A)$, and an invertible sheaf on each Artinian local component is free of rank one. Thus every tangent space has dimension 2n. [given, A1, F1, step 2.1, algebra]

4.1 Every monomial ideal of colength n lies in the closure of the locus of n distinct points, by the following explicit flat family. Write its Ferrers staircase as $λ_{0}≥λ₁≥⋯≥λ_{k−1}>λ_k=0$ and use generators $x^{λ_j}y^j$, $0≤j≤k$. Choose distinct complex $a_i$ and distinct $b_j$. Over a parameter t, put [given, A1, F1, step 3.1, algebra]

5.1 $F_j=\prod _{i=1}^{λ_j}(x−t a_i)$ · $\prod _{q=0}^{j−1}(y−t b_q)$. [given, A1, F1, step 4.1, algebra]

6.1 For $t≠0$ these vanish on the n distinct points (t $a_i,t b_j$), $i≤λ_j$. Their leading monomials are the generators $x^{λ_j}y^j$, for a monomial order in which proper divisors are smaller. Division by these polynomials spans the quotient over C[t] by the n staircase monomials. They are independent over C[t]: a relation would specialize for generic t to a relation in the coordinate ring of those n distinct points, which has dimension n. Hence the quotient is free of rank n and its zero fiber is exactly the monomial ideal. [given, A1, F1, step 5.1, algebra]

7.1 For any colength-n ideal I, construct a finite Gröbner basis as follows. The ideal generated by its leading monomials is finitely generated by polynomial Noetherianity; choose one polynomial of I for each such monomial generator. Division lowers a well-ordered monomial order and terminates; a nonzero remainder of an element of I would have leading monomial outside the leading ideal, impossible. Thus standard monomials are a basis of R/I. Use a lexicographic order and choose positive integral weights respecting the finitely many leading comparisons in these polynomials and their finite critical-pair reductions. Their critical-pair identities then homogenize, so division remains valid over C[t]. The homogenization $f↦t^{w(f)}f(t^{-w_x}x,t^{-w_y}y)$ gives a C[t]-flat family with special fiber the initial monomial ideal and all nonzero fibers coordinate rescalings of I: the same standard monomials span by division and are independent by their basis property on nonzero fibers. No smoothability theorem is assumed. The free-point component has dimension 2n. At every monomial ideal its local dimension is at least 2n and its embedding dimension is exactly 2n, so the local ring is regular and this is its unique component. The open regular neighborhood pulls back to an open neighborhood of $t=0$ in the Gröbner family; it contains some nonzero t. Hence I itself lies on the free-point component. The same tangent dimension argument makes every point regular. Thus $Hilb^n(A²)$ is smooth irreducible of dimension 2n. [given, A1, F1, step 6.1, algebra]

8.1 For a smooth S, choose étale coordinates at the finitely many support points of a subscheme. Deformations over local Artin bases split uniquely by their disjoint support points, and étale maps uniquely lift their infinitesimal coordinates. Consequently the completed Hilbert local ring is the completed product of the corresponding $Hilb^{n_i}(A²)$ local rings. The induced maps from the support-injective locus of the Hilbert scheme of a disjoint union of coordinate charts are formally étale, hence étale by finite presentation. This proves smoothness and dimension 2n on S. Every such étale neighborhood meets the free-point locus by its planar description, so every component meets the same irreducible open configuration space; Y is irreducible. These arguments also give the local product decomposition used below. Projectivity is supplied by the actual projective Hilbert functor, not by this affine calculation. [given, A1, F1, step 7.1, algebra]

9.1 The punctual Hilbert scheme of n points in A² has dimension at most n−1. Here is a direct bound. Frame the tautological n-dimensional vector space. A framed subscheme is a commuting pair of nilpotent matrices X,Y and a cyclic vector i; the quotient by $GL_n$ is the Hilbert scheme, and the framing is a $GL_n-principal$ bundle. Fix the Jordan type λ of Y. Let $A_λ=End_{C[t]}(⊕_d(C[t]/t^d)^{m_d})$, $c_λ=\operatorname{dim} A_λ$, and $ℓ(λ)=\sum _d m_d$. Its semisimple quotient is $\prod _d Mat_{m_d}(C)$. Explicitly send each equal-size diagonal block to its constant coefficient and all different-size blocks to zero. The kernel is nilpotent: a map between block sizes d,e contains $t^{\operatorname{max}(0,e−d)}$, and any cycle through unequal sizes adds positive t-order, while a same-size kernel map also has positive order. Products of sufficiently many such maps therefore vanish. This proves the quotient and nilpotence directly. [given, A1, F1, step 8.1, algebra]

10.1 An element of $A_λ$ is nilpotent iff its image in this quotient is nilpotent. Each m×m nilpotent cone has dimension m²−m: the finitely many Jordan orbits have dimensions m²−dim centralizer, and the smallest centralizer dimension is m, attained by a single Jordan block. Thus the locus of nilpotent X commuting with this Y has dimension $c_λ−ℓ(λ)$. The orbit of Y has dimension $n²−c_λ$; choosing i adds at most n dimensions, and dividing the free framing action subtracts n². The corresponding punctual stratum has dimension at most $n−ℓ(λ)≤n−1$. There are finitely many λ, proving the bound. This is not a citation to Briançon's theorem. [given, A1, F1, step 9.1, algebra]

11.1 For a cycle with k distinct support points and multiplicities $n_1,…,n_k$, the Hilbert–Chow fiber is a product of punctual Hilbert schemes and has dimension at most $\sum (n_i−1)=n−k$. Its base stratum in Q has dimension 2k. Hence [given, A1, F1, step 10.1, algebra]

12.1 $\operatorname{dim}(Y×_QY)≤\operatorname{max}_k[2k+2(n−k)]=2n$. [given, A1, F1, step 11.1, algebra]

13.1 The locus in Y over partitions with $k≤n−2$ has dimension at most $\operatorname{max}_k(2k+n−k)=2n−2$. Thus all codimension-one exceptional geometry consists generically of exactly one double point and n−2 other distinct points. This precise codimension observation will supply the canonical-line comparison. [given, A1, F1, step 12.1, algebra]

14.1 The line $ω_M=ω_S^{⊠n}$ has its permutation linearization. At a point of M, its stabilizer acts trivially on the fiber: interchanging two two-dimensional tangent blocks has determinant (+1), and permuting the corresponding one-dimensional tensor factors adds no sign. It descends to an invertible sheaf L on Q. One direct descent verification is to pass to the completed local ring at a quotient orbit. A line generator at one lift, averaged over its stabilizer, has nonzero residue because the residue action is trivial; it is therefore an invariant generator. Translate it to the other orbit components. Its invariants form a rank-one free module and its pullback is the original line. Faithful flatness of completion and these canonical pullback maps prove descent and its gluing. Thus $ω_M=q*L$, without assuming $ω_S$ trivial. [given, A1, F1, step 13.1, algebra]

15.1 Over the distinct-point locus, the Hilbert–Chow map is an isomorphism, and the canonical line of Y is τ*L. Check extension at the generic double-collision divisor explicitly. In coordinates $x_1=u+a$, $x_2=u−a$, $y_1=v+b$, $y_2=v−b$, the transverse quotient is $A²_{a,b}/±1$. A resolution chart has $t=a²$, $λ=b/a$ and invariant coordinates $(a²,ab,b²)=(t,tλ,tλ²)$. It is the length-two ideal chart with basis 1,x−u: [given, A1, F1, step 14.1, algebra]

16.1 $I=(y−v−λ(x−u),(x−u)²−t)$. [given, A1, F1, step 15.1, algebra]

17.1 The other chart interchanges a,b. Since $da∧db=(1/2)dt∧dλ$, the descended volume form extends with neither zero nor pole. Multiplying by the coordinates of the other n−2 points gives the same conclusion on Y. The remaining exceptional locus has codimension at least two by the argument beginning at step 9.1. A rational isomorphism between invertible sheaves on the smooth Y which has no zero or pole at codimension one is everywhere an isomorphism, by the normal local intersection-of-height-one valuation criterion. Therefore [given, A1, F1, step 16.1, algebra]

18.1 $ω_Y=τ*L$,       $ω_M=q*L$. [given, A1, F1, step 17.1, algebra]

19.1 This is the needed crepant canonical comparison even for Enriques and bielliptic S. It does not assert that either canonical line is trivial. [given, A1, F1, step 18.1, algebra] ∎
