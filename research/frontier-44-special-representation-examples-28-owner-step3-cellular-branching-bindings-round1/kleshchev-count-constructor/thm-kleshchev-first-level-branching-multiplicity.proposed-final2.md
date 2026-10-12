---
id: thm-kleshchev-first-level-branching-multiplicity
kind: theorem
title: "Kleshchev's first-level branching multiplicity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes, prop-schur-functor-compares-first-level-branching-with-hecke-restriction, def-p-regular-and-p-restricted-partitions, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, def-restriction-induction-and-coinduction-for-group-modules, prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality, lem-type-a-modular-root-interval-essential-subset-basis-and-count, def-type-a-q-schur-algebra-and-weyl-modules, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra, thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, On decomposition numbers and branching coefficients for symmetric and special linear groups, Proc. London Math. Soc. (3) 75 (1997) 497-558; complete 66-page author manuscript (dvips PostScript), Theorem 1.4 with its reformulation and worked examples, manuscript p. 5; Part I §§2-6 (essential and compensated subsets, normality, Corollary 5.8); Part II §§7-10 (first level, Theorems 8.6, 8.8, 8.9, Corollary 8.10, Definition 9.1, Lemma 9.2, Theorem 9.3); §11 (Propositions 11.1-11.3 and the deduction of Theorem 1.4 on pp. 64-65). Complete 66-page manuscript, SHA-256 0bbf3d69ddf20940089045c540e3d516c542118ab06644c5d26c430bedf46558"
      url: "https://darkwing.uoregon.edu/~klesh/BrIV.ps"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.6 and the normal-node counts, printed pp. 53-54. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, Remark 2.4(II) (the transposed-node dictionary) and Theorems 2.5-2.6, printed pp. 4-5"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
---

## Statement


Let $k$ be a field of characteristic $p>0$ (every field is splitting for
symmetric groups, so no algebraic closedness is needed) and let $\lambda$ be
a $p$-regular partition of $n$
([[def-p-regular-and-p-restricted-partitions]]), so that $D^\lambda$ is the
simple head of the Specht module $S^\lambda_k$
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]). Let
$A=(j,\lambda_j)$ be a removable node of $\lambda$ whose removal
$\lambda(j)$ is again $p$-regular, and call $A$ **normal** for $\lambda$ when
the transposed node $(\lambda_j,j)$ of the $p$-restricted partition
$\lambda'$ is a normal node in the sense of
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]] (this is
Kleshchev's normality; it is computed in the reduced signature of the correct
residue class of $\lambda'$). Then
$$[\,D^\lambda{\downarrow}_{S_{n-1}}:D^{\lambda(j)}\,]=0$$
if $A$ is not normal, and
$$[\,D^\lambda{\downarrow}_{S_{n-1}}:D^{\lambda(j)}\,]=1+\#\{B:\ B\ \text{is a normal removable node of }\lambda\text{ strictly above }A\text{ with }\operatorname{res}(B)=\operatorname{res}(A)\}$$
if $A$ is normal. Here $\operatorname{res}$ is the residue $c-r\bmod p$ and
"above" means strictly smaller row index. Equivalently, the multiplicity is the piecewise integer
$\gamma(A)=\mathbf1_{A\text{ normal}}\cdot\#\{B:B\text{ normal removable, weakly above }A,\ \operatorname{res}(B)=\operatorname{res}(A)\}$.
Thus $A$ is normal precisely when this piecewise multiplicity is nonzero.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$, a $p$-regular partition $\lambda\vdash n$ and a removable $A=(j,\lambda_j)$ whose removal is $p$-regular.

[F1] The corrected exact Schur first-level comparison at $q=1$ identifies the restriction corner with the module of last coordinate one, and transfers the multiplicity of each surviving simple; factors whose corner is zero are deleted ([[prop-schur-functor-compares-first-level-branching-with-hecke-restriction]], [[def-type-a-q-schur-algebra-and-weyl-modules]]).

[F2] The approved signed-conjugate bridge and ordinary simple-label dictionary give $f(L_N(\lambda'))\cong D^\lambda\otimes\mathrm{sgn}$, and the analogous nonzero lower image for a restricted removal; the ordinary group simples are distinctly labelled by regular partitions ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]], [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]], [[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]], [[def-p-regular-and-p-restricted-partitions]]).

[F3] The complete local interval-basis/count lemma supplies the integral negative cut words, positive detection, exact essential-subset dimensions, and finite matching recurrence for arbitrary dominant polynomial weights and all root intervals, including the last-coordinate increase of one ([[lem-type-a-modular-root-interval-essential-subset-basis-and-count]]). Its proof supplies these properties over every field, without a characteristic-zero PBW or external count theorem.

[F4] The general cellular rank-one action gives simplicity, absolute simplicity and completeness of the actual nonzero Schur cell quotients ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]). The signature convention is [[def-residue-signature-normal-good-conormal-and-cogood-nodes]], and restriction has its usual exact group-module meaning ([[def-restriction-induction-and-coinduction-for-group-modules]]).

## Proof

**Proof technique:** direct.

1.1 Use the actual q=1 Schur Weyl-cell simple L_N(μ), μ dominant polynomial, converted from right to left by star. Its highest vector v has weight μ and norm1. The local lemma [F3] proves from the tensorword endomorphism realization that negative coefficient operators span each weight space, positive coefficient operators detect every nonzero vector, and integral cut-root words span every grade whose simple-root coefficients are0or1. It also proves the complete essential-subset basis and the dimension formula  dim L_N(μ)_(μ−α(r,s))=ε_a(r,s),   a_j=μ_j−μ_(j+1). The local lemma [F3] also proves for every dominant a and every interval, by finite matching/path/stack bijections and finite triangular matrix inversion,  ε_a(r,s)=ν_a(r,s)+sum_(u=r+1)^s ε'_a(r,u−1)ν_a(u,s), where ε'_a(r,t)=ε_(a+ω_t)(r,t). These are actual proved local inputs, including all zero dimensions and arbitrary nonrestricted auxiliary weights. [F1, F2, F3, F4, construct]

2.1 We spell out a further modular consequence of the same foundation to close the algebraic support seam. Let Γ be a deficit with each simple-root coefficient0or1, with disconnected support Γ=δ+ζ separated by at least one zero coefficient. Take the first component δ entirely inside the Levi on the first N−1 coordinates. Every negative cut word of gradeΓ factors uniquely into a δ-word and a ζ-word, since no root crossing a missing simple root can occur; the two groups commute. Every positive coefficient word of gradeΓ similarly factors. All positive/negative cross commutators between the separated groups vanish. Consequently the matrix of highest coefficients atΓ is the tensor product of the two separate coefficient matrices atδ andζ: for positive tests e,e' and negative words f,f',  highest(e e' f f' v)=highest(e f v) highest(e' f' v). The rightmost separated test/word leaves the Cartan coordinates of the other interval unchanged, since the intervals are nonadjacent; this verifies the displayed equality even though f'f v has shifted weight. [step 1.1, construct]

3.1 Choose bases f_a v and f'_b v of the separate images. Positive detection yields positive linear-combination tests e_a and e'_b with e_a f_c v=δ_ac v, e'_b f'_d v=δ_bd v, by finite matrix inversion over the field. Thus the products f_a f'_b v are independent, since e_a e'_b tests detect their coefficients; they span by the preceding factorization. On the entire weight space atΓ the operator  P_δ=sum_a f_a e_a is the identity: applied to f_c f'_b v, its cross commutations give f_c f'_b v. Every e_a is a positive Levi coefficient word of nonzero weightδ, and every f_a is a negative Levi coefficient word. This argument proves the identity on arbitrary entangled linear combinations, not only pure products. If a separate image is zero, the full weight space is zero and cannot supply a primitive vector. [step 2.1, construct]

4.1 Now let M0⊂M1 be consecutive terms of a finite composition series of the first level, and choose x∈M1 representing the highest vector of a simple factor, of full deficitΓ. Positive Levi operators of nonzero weight send x into M0, because they annihilate its highest class. If Γ had a disconnected initial componentδ, the identity P_δ x=x would put x intoM0: e_a x∈M0 and f_a preserveM0. This is impossible. Hence any primitive factor vector of binary deficit ending at the last simple root has support a single terminal interval. This is the disconnected-root primitive exclusion, proved here, without a characteristic-zero PBW theorem or a pure-product assumption for x. [step 3.1, construct]

5.1 Suppose μ_N=0 and let l=N−1. Define the first level M as the sum of weight spaces of L_N(μ) whose last diagonal coordinate is1. It is a polynomial Schur/GL_(N−1) module of degree|μ|−1; the Levi preserves that coordinate. Put β_i=α_i+…+α_l. For any i write ν_i=(μ_1,…,μ_(N−1))−ε_i, as a weight, and write  d_i=dim L_N(μ)_(μ−β_i),  b_u=[M:L_(N−1)(ν_u)] when ν_u is dominant, and b_u=0 otherwise. Dominance of ν_u is equivalent to a_u>0. No modular restriction condition is imposed on a dominant ν_u. In particular non-p-restricted factors still contribute to all character equations below. [step 4.1, construct]

6.1 A simple factor contributing to the ν_i weight must have highest weight η dominatingν_i. The standard Schur cell simples have unique highest vector, all other weights dominated by it, and cover all simple Schur modules by the cellular regular-module argument. Thus this statement applies to every factor over every field. Liftη by appending the last coordinate1, and let Γ=μ−(η,1). Sinceη is a weight of the first level, Γ is a nonnegative integral combination of simple roots; sinceη dominatesν_i, β_i−Γ is a nonnegative integral combination of Levi roots. Consequently Γ_j=0 forj<i, Γ_j∈{0,1} fori≤j<l, and Γ_l=1. The support exclusion just proved forcesΓ=β_u for someu≥i. Thusη=ν_u andν_u must be dominant. Only these terminal labels can contribute to this character equation; no stronger assertion about the other first-level factors is needed. [step 5.1, construct]

7.1 Weight-space dimensions are additive on a composition series. Indeed the actual weight idempotents give direct projections, so taking a fixed torus weight is exact. The own highest weight of L_(N−1)(ν_i), when defined, has dimension1. Thus  d_i=b_i+sum_(u>i) b_u a_iu,  a_iu=dim L_(N−1)(ν_u)_(ν_i). For an invalid ν_u its term is omitted. The lower weight deficit is  ν_u−ν_i=ε_i−ε_u=α_i+…+α_(u−1). The fundamental coordinates ofν_u on that interval are a_i,…,a_(u−2),a_(u−1)+1. Any altered coordinate atu is outside the interval and has no effect on the local formulas. The proved interval-basis theorem therefore gives  d_i=ε_a(i,l),   a_iu=ε'_a(i,u−1). This is valid for every legitimate dominant ν_u, including those not p-restricted. When a_u=0, ν_u is nondominant and b_u=0; also ν_a(u,l)=0 because its root is not normal. [step 6.1, construct]

8.1 Substitute these dimensions into the character equation and compare it with the local recurrence of [F3] at(i,l):  ε_a(i,l)=b_i+sum_(u>i)b_u ε'_a(i,u−1),  ε_a(i,l)=ν_a(i,l)+sum_(u>i)ν_a(u,l) ε'_a(i,u−1). Starting ati=l and proceeding downwards proves b_i=ν_a(i,l) for all i. This is finite integer reverse substitution, never reduction of the character multiplicities modulo p. The rank isN−1, unrelated to the prime except in the B,C zero tests. [step 7.1, construct]

9.1 The local lemma [F3] uses only the infinite purely transcendental extension K=F(t) for polynomial identities and Gaussian elimination. Its scalar-extension argument is reversible: all cut/raising matrices have entries inF, hence their finite ranks and kernels preserve extension; its essential labels and pivot tests yield bases overF itself. Schur cell simples remain simple under every field extension by the cellular rank-one action and their nonzero form. Extending a finite Schur composition series thus retains the simple factors and their labels, so the integers b_i computed overK are exactly those overF. The first-level weight subspace commutes with extension because it is the image of a finite sum of weight idempotents. Neither an algebraic closure nor an assumption that the original field is infinite is used. All nil/zero-weight cases remain in the equations. [step 8.1, construct]

10.1 Let λ be p-regular, λ≠(n), put N=n, μ=λ', μ_N=0. The index of A=(j,λ_j) is i=λ_j, notj, and notp. The coordinate a_u=μ_u−μ_(u+1) is the multiplicity of the partu inλ; in particular a_u<p, but the preceding algebraic proof did not need that restriction. A removable A is the last row of its widthi block, hence j=μ_i. [step 9.1, construct]

11.1 The root normal walk based ati starts with a push forA and scans u=i+1,…,l. At coordinates with a_u=0 the compensation walk is neutral, even when B=C=0: the same position supplies and consumes a compensation slot. At positive coordinatesu, the last ordinary row k of the widthu block gives a removable node, and  C(i,u)=u−i+sum_(t=i)^(u−1)a_t=u−λ_j+j−k. Thus C(i,u)=0 is exactly the removable node's residue equal to A's residue. The first ordinary row k of the widthu block has an addable node in columnu+1, and  B(i,u)=u−i+sum_(t=i)^u a_t=u−λ_j+j−k+1. Thus B(i,u)=0 is exactly that addable node's residue equal to A's residue. Since0<a_u<p at a positive coordinate, B=C+a_u shows these two events cannot occur together at that sameu. Empty widths give only the neutral compensation case. The artificial final zero-width row also has no effect. Scanning positiveu in increasing order lists the ordinary corners aboveA in the order j−1,…,1, with a width block contributing its boundary event when the residue matches. The top extra addable node of widthλ_1+1 is already the B event of the widthλ_1 coordinate; no boundary event is omitted. [step 10.1, construct]

12.1 Under transpose a removable ordinary node becomes a removable μ-node of opposite residue, and an addable becomes an addable of opposite residue. The top-to-bottom μ-signature following A' lists exactly these above ordinary nodes in this order. The only possible equal-column lower ordinary addable node lies immediately belowA and has residue differing by1, so it is absent from this residue class. Consequently the root push/pop walk is exactly the reduced-signature stack afterA': push a removable `−`, pop on an addable `+`, implementing cancellation `−+`. [step 11.1, construct]

13.1 Earlier signature signs do not change whether A' or any later push is removed. A survives precisely when no later prefix has more pops than pushes; this is exactly root normalityσ(i,l). If it survives, the final stack consists ofA together with those above ordinary removable nodes in A's residue class whose transposes survive as normal nodes. The stack proof of [F3] identifies this final stack with N(i,l), so  ν_a(i,l)=0 ifA is not normal,  ν_a(i,l)=1+#(normal removable nodes strictly aboveA of A's residue) ifA is normal. The node count here is piecewise. It is not the unconditioned count of normal nodes weakly aboveA whenA is nonnormal. [step 12.1, construct]

14.1 Apply the exact first-level Schur comparison [F1] atq=1. It uses the weight-last-coordinate1 module defined above, the genuine weight idempotent corner and exact Schur functor. For the p-restrictedμ=λ', its image is the same-shape Murphy head, which the signed-conjugate dictionary [F2] identifies with D^λ tensor sign. For a dominantν_u that is p-restricted its image is D^(ν_u') tensor sign; other lower Schur simple factors are killed and remain included in the algebraic character calculation until the exact functor is applied. The surviving labels are distinct by the group simple classification. Since removal ofA is p-regular, ν_i=(λ\A)' is restricted, so its simple image is nonzero and its group restriction multiplicity is precisely b_i. Twisting source and target by sign preserves that multiplicity, because sign of S_n restricts to sign of S_(n−1). [step 13.1, construct]

15.1 Forλ=(n) the ordinary simple is trivial and restricts trivially, so the unique removable node has multiplicity1. Its transposed μ=(1^n) node is normal: no subsequent same-residue addable can cancel it, and the preceding possible addable gives a `+−` pair rather than a cancellation. There are no above ordinary removables. Forn=1 this is the one-dimensional restriction toS0; for n=0 the removable-node hypothesis is empty. These cases avoid requiringμ_N=0 where it is false. All primes, all fields of characteristicp, all p-regularλ and all regular removals retain the original stated scope. [step 14.1, construct]

16.1 The false final unconditional equivalence in the native target is replaced by γ(A)=1_(A normal)·#(normal nodes weakly aboveA of its residue). The first packet's p=2,λ=(5,3,1),A=(3,1) countermodel remains preserved. It demonstrates why no repair may silently restore the unconditional above-count: A is nonnormal but there is a normal node above it of the same residue. [step 15.1, construct] ∎

## Remarks

The proof supplies the full local first-level count and signature calculation. The source Theorems 9.3 and 1.4 document its origin and are not proof premises. The rank is n−1 and the root interval starts at lambda_j; the prime appears only in zero tests. All lower dominant Schur factors, including nonrestricted ones, are retained until the exact corner functor kills their images. The former unconditional above-count equivalence was false: for p=2, lambda=(5,3,1), A=(3,1), A is nonnormal while a normal node of its residue exists above it. The piecewise correction preserves both original displayed cases. No classifier FINAL2 continuation, native transition or consumer closure is claimed by this research proposal.
