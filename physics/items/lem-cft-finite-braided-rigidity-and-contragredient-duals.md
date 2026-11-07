---
id: lem-cft-finite-braided-rigidity-and-contragredient-duals
kind: lemma
title: Finite braided rigidity and the contragredient VOA dual
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
- def-monoidal-category
- def-braiding
- def-cft-strong-rational-voa
- lem-cft-c2-cofinite-modules-finitely-generated
- lem-cft-zhu-top-induction-and-forward-rationality
- lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters
- thm-cft-contragredient-module-well-defined
- lem-cft-opposite-vertex-operator-identities
- def-cft-logarithmic-intertwining-operator
- thm-cft-logarithmic-pz-intertwining-correspondence
- thm-cft-hlz-braided-tensor-category
- lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  def-monoidal-category: mathematical-premise
  def-braiding: mathematical-premise
  def-cft-strong-rational-voa: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-zhu-top-induction-and-forward-rationality: mathematical-premise
  lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters: mathematical-premise
  thm-cft-contragredient-module-well-defined: mathematical-premise
  lem-cft-opposite-vertex-operator-identities: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  thm-cft-logarithmic-pz-intertwining-correspondence: mathematical-premise
  thm-cft-hlz-braided-tensor-category: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Pavel Etingof and David Penneys, Rigidity of non-negligible objects of
      moderate growth in braided categories
    url: https://arxiv.org/pdf/2412.17681v3
    locator: Theorem 1.1 and complete Sections 2.1–2.2, PDF pages 4–6. The semisimple
      argument is reconstructed by explicit algebraic closure maps; the introduction
      and these full pages, including diagrams, were read. Later applications are
      not imported.
dependency_level: 6
---

## Statement

Let $\mathcal C$ be a $\mathbb C$-linear braided monoidal category with simple unit, finite-dimensional morphism spaces, and finitely many simple representatives, such that every object is a finite direct sum of those simples. Suppose for every simple $X$ there is an object $Y$ with $\operatorname{Hom}(X\otimes Y,\mathbf1)\ne0$. Then $\mathcal C$ is rigid: every object has left and right duals satisfying both triangle identities.

In particular, let $V$ be simple, self-contragredient, of CFT type, admissibly rational and $C_2$-cofinite. Suppose its category of grading-restricted generalized modules has been endowed with the $P(z)$-tensor products, units and braided monoidal structure of [[thm-cft-hlz-braided-tensor-category]], under that supplier's exact hypotheses. Then this category is finite semisimple and rigid, and a restricted contragredient module is a rigid dual object. This application constructs an actual nonzero ordinary intertwiner of type $(V;X,X')$ for every simple $X$. It does not assert that the tensor-construction's analytic hypotheses follow from these VOA assumptions, or assert a ribbon structure, Hopf-link comparison or nondegeneracy.

## Facts & Assumptions

**Given:** The category in the first part has precisely the stated semisimplicity and braiding hypotheses. The VOA and its constructed tensor structure in the second part have precisely the separate hypotheses stated there.

[F1] [[def-monoidal-category]] and [[def-braiding]] specify the pentagon, unit and hexagon identities used in all tensor rebracketings and the braid relations.

[F2] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives finite generation and an admissible nonnegative grading for every grading-restricted generalized module in the VOA application. [[lem-cft-zhu-top-induction-and-forward-rationality]] gives ordinary simple admissible modules and their finite-dimensional simple Zhu tops under admissible rationality.

[F3] [[lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters]] gives finitely many ordinary simple classes. [[def-cft-strong-rational-voa]] fixes the five assumed VOA properties.

[F4] [[thm-cft-contragredient-module-well-defined]] and [[lem-cft-opposite-vertex-operator-identities]] supply the actual restricted dual action, double-dual identification, Möbius inversion and its exact state identity. [[def-cft-logarithmic-intertwining-operator]] fixes the Jacobi and derivative identities to be verified for the ordinary intertwiners below.

[F5] [[lem-cft-locality-to-jacobi-residue-calculus]] supplies module and state Jacobi, the conformal commutators, and translation identities. All finite coefficient calculations below use those actual axioms and identities.

[F6] [[thm-cft-logarithmic-pz-intertwining-correspondence]] turns the constructed ordinary intertwiner into a $P(1)$ map. The tensor-product universal property and the conditional coherent braided monoidal structure are those of [[thm-cft-hlz-braided-tensor-category]]. Its analytic applicability is separately assumed in the second part of the Statement, and is not inferred from the first part.

## Proof

1.1 Fix simple X. Semisimplicity lets us choose a simple Y and maps r:X⊗Y→1 and s:1→X⊗Y with rs=id_1. Indeed a nonzero map to simple 1 splits, and some simple summand of the originally supplied Y gives a nonzero map. End(X)=End(Y)=C, by finite-dimensional Schur's lemma over C. Associators and unitors are suppressed in the formulas; use fixed left parenthesization and insert their canonical rebracketings. Every subsequent rebracketing uses precisely the pentagon, triangle, or hexagon identities of the given braided monoidal category. Define two endomorphisms of X: γ_±=(id_X⊗r)(c_{X,X}^{±1}⊗id_Y)(id_X⊗s). Naturality and the two hexagons give γ_+=(id_X⊗(r c_{X,Y}^{−1}))(s⊗id_X), γ_-=(id_X⊗(r c_{Y,X}))(s⊗id_X). For example c_{X,X⊗Y}(id_X⊗s)=s⊗id_X, and expanding that braiding gives the first equality; expanding c_{X⊗Y,X}(s⊗id_X)=id_X⊗s gives the second. Their types are correct: both r c_{X,Y}^{−1} and r c_{Y,X} map Y⊗X to 1. If one γ is nonzero, it is λ id_X with λ nonzero. Rescale the corresponding evaluation e:Y⊗X→1 by λ^{-1}, leaving coevaluation s. Then (id_X⊗e)(s⊗id_X)=id_X. Put z_Y=(e⊗id_Y)(id_Y⊗s). Tensor interchange gives z_Y²=z_Y by inserting this first zig-zag into the middle of the two copies of z_Y. Explicitly both orders of the two disjoint contractions e on Y⊗X⊗Y⊗X⊗Y agree; contracting its middle Y⊗X first leaves id_Y⊗[(id_X⊗e)(s⊗id_X)]⊗id_Y. Also e(z_Y⊗id_X)=e(id_Y⊗id_X)=e, by the same interchange. Thus z_Y is a nonzero idempotent. As End(Y)=C, z_Y=id_Y. These are both duality identities. Braiding supplies the opposite-sided dual with evaluation e c_{X,Y}:X⊗Y→1 and coevaluation c_{Y,X}^{−1}s:1→Y⊗X; its zig-zags follow by the same naturality/hexagon expansions. Hence X is rigid whenever one γ is nonzero. [given, F1, algebra]

1.2 Here is a construction of the needed nonzero evaluation intertwiner; restricted contragredient *module* existence alone would not supply it. Let X be a simple ordinary V-module and X' its restricted contragredient. First define the creation intertwiner of type (X;X,V) by I(x,z)v=e^{zL_X(-1)}Y_X(v,−z)x. It is lower truncated, with the weight rule, because pairing against any homogeneous restricted-dual vector leaves a finite sum. Its derivative is I(L_X(-1)x,z): differentiate, use [L_X(-1),Y_X(v,y)]=∂_yY_X(v,y), and commute the resulting L_X(-1) to the right. Its Jacobi identity is the module Jacobi identity after conjugating by e^{zL_X(-1)} and translating the other field coordinate by −z. Explicitly the two ordered products become the two radial expansions of Y_X(u,z_1−z_2)Y_X(v,−z_2)x; their iterate becomes Y_X(Y(u,z_1)v,−z_2)x. Taking the three delta residues with z_0=z_1−z_2 gives the ordinary intertwiner Jacobi identity. The matrix coefficients are rational after a fixed weight monomial is factored out: module truncation in the two orders bounds opposite directions and fixing input/output weights fixes the exponent sum. Multiplication by a common locality power makes them finite Laurent polynomials, so the translations and expansion comparisons are coefficientwise legitimate. Put K_X(z)=e^{zL_X(1)}e^{πiL_X(0)}z^{-2L_X(0)}, with a fixed formal branch. Define E of type (V';X,X') by ⟨E(x,z)x',v⟩=⟨x',I(K_X(z)x,z^{-1})v⟩ =⟨x',e^{z^{-1}L_X(-1)}Y_X(v,−z^{-1})K_X(z)x⟩. For homogeneous x,x',v, every term has the single power z^{wt(v)−wt(x)−wt(x')}; all sums in this coefficient pairing are finite by the same lower/upper truncations. Since V has finite-dimensional nonnegative weight spaces, these pairings define actual coefficients in V', with lower truncation, and no logarithms. They do not require any positive form or reality of the conformal weight. The derivative identity can be verified directly. Write T=L_X(-1), B(z)=e^{z^{-1}T}Y_X(v,−z^{-1})K_X(z). The translation commutator gives B'=e^{z^{-1}T}Y_X(v,−z^{-1})(K'_X−z^{-2}T K_X). The three Möbius brackets give K'_X−z^{-2}TK_X=K_X T. Indeed K_X T K_X^{-1}=−z^{-2}T−2z^{-1}L_X(0)−L_X(1), and K'_X K_X^{-1}=−2z^{-1}L_X(0)−L_X(1). Hence E'=E(Tx,z). For Jacobi, transpose the just-proved Jacobi identity of I using the actual opposite-field action on X' and V'. Use inverted coordinates y_1=x_1^{-1}, y_2=x_2^{-1} and y_0=−x_0/(x_1x_2), where x_0=x_1−x_2. The required state identity is K_V(s)Y(u,t)=Y(K_V(s+t)u,−t/[s(s+t)])K_V(s), which follows by differentiating the finite L(1) state exponential and the L(0) scaling, or is the exact identity in the current opposite-field proof. It applies to I as well: its Möbius commutators follow by taking the conformal-vector residues of the Jacobi identity proved above. The two ordered rational matrix coefficients reverse their radial orders under inversion; the third becomes precisely the iterate with Y_X(u,x_0)x, by this displayed identity. Expanding the basic delta-difference identity against their common Laurent numerator therefore gives the required intertwiner Jacobi identity for E. This is the same explicit rational-inversion argument used to prove the actual contragredient-module theorem, now with I's source/output spaces: all sums paired with homogeneous vectors are finite, so it uses neither a tensor category nor rigidity. This proves that E is an actual ordinary intertwiner, not merely a bilinear pairing. It is nonzero. Choose a nonzero lowest-weight x∈X_h and x'∈X'_h with ⟨x',x⟩≠0. Then L_X(1)x=0. Evaluating on v=1 kills every positive L_X(-1)-power by the weight pairing, and gives ⟨E(x,z)x',1⟩=e^{πih}z^{-2h}⟨x',x⟩≠0. [given, F4, F5, algebra]

2.1 Suppose now γ_+=γ_-=0. Put S_0=R_0=id_1 and recursively define S_{n+1}=(id_{X^{⊗n}}⊗s⊗id_{Y^{⊗n}})S_n, R_{n+1}=R_n(id_{X^{⊗n}}⊗r⊗id_{Y^{⊗n}}). Thus S_n:1→X^{⊗n}⊗Y^{⊗n}, R_n:X^{⊗n}⊗Y^{⊗n}→1, with the Y factors in the reverse order of the X factors. Define the linear functional L_n(f)=R_n(f⊗id_{Y^{⊗n}})S_n, f∈End(X^{⊗n}). Repeated use of rs=1 gives L_n(id)=1. These definitions also give the following partial-closure identities directly by tensor interchange: L_n(f⊗id_X)=L_{n−1}(f), L_n((u⊗id_X)c_{n−1}^{±1}(v⊗id_X)) =L_{n−1}(u(id_{X^{⊗(n−2)}}⊗γ_±)v)=0, where c_{n−1} braids the last two X factors and u,v are arbitrary endomorphisms of X^{⊗(n−1)}. To verify the second formula, expand S_n,R_n by their recursions. The innermost newly inserted X,Y pair contracts the last factor of the crossing and gives exactly the displayed definition of γ_±; u and v act on the other n−1 factors and pass the inserted identities unchanged. This verifies the claimed vanishing algebraically. The braid generators σ_i act on X^{⊗n} by c on adjacent factors. Their braid relations follow from the hexagons, so this is a representation of B_n by invertible endomorphisms. For each j=1,…,n−1 choose w_j∈{1, σ_j, σ_{j−1}σ_j, …, σ_1σ_2⋯σ_j}. The words β=w_{n−1}⋯w_1 have distinct underlying permutations: inductively w_{n−1} selects the position of the last strand, and the remaining factors select the permutation on the remaining n−1 strands. Thus there are n! such words, forming a fixed set of permutation lifts; no independence-of-reduced-word theorem is needed. For two distinct choices s,t, let j be the largest index for which their factors differ. Common higher factors cancel in β_s^{-1}β_t; all remaining factors except v_j^{-1}w_j belong to B_j. Write v_j=σ_i⋯σ_j and w_j=σ_l⋯σ_j, allowing i or l to equal j+1 to mean the identity. They differ, so i≠l. For i<l, the braid relations give the explicit word identity v_j^{-1}w_j=(σ_{l−1}⋯σ_{j−1}) σ_j^{-1}(σ_{j−1}^{−1}⋯σ_i^{-1}). The empty products cover l=j+1. The identity follows by moving the right string successively across the inverse left string using σ_kσ_{k+1}σ_k=σ_{k+1}σ_kσ_{k+1}, with distant generators commuting; equivalently induct on j−l, whose zero case is immediate. If i>l invert the corresponding identity. Hence β_s^{-1}β_t=uσ_j^{±1}v with u,v∈B_j, embedded in B_n. The partial-closure identities first remove the last n−j−1 identity strands and then give L_n(β_s^{-1}β_t)=0 for s≠t, whereas L_n(β_s^{-1}β_s)=1. If a linear combination Σ_t a_t β_t were zero as an endomorphism, multiply on the left by β_s^{-1} and apply L_n: the answer is a_s=0. Thus dim End(X^{⊗n})≥n! for every n. [given, F1, step 1.1, algebra]

3.1 Let S_1,…,S_d be the finite simple list. For this fixed X let B be the maximum of the lengths of X⊗S_i. It is a finite integer and is at least one. Bilinearity of tensor product and semisimplicity imply length(X^{⊗n})≤B^{n−1}. If X^{⊗n}=⊕_i m_i S_i, then dim End(X^{⊗n})=Σ_i m_i²≤(Σ_i m_i)²≤B^{2n−2}. But n!≥(n/2)^{n/2}, which is larger than B^{2n} for sufficiently large even n. This contradicts step 2.1. One γ must therefore be nonzero, so step 1.1 proves X rigid. Finite direct sums of simples have duals by taking the corresponding direct sums of evaluation and coevaluation maps (cross terms zero), so all objects are rigid. This proves the algebraic theorem with no fusing or modularity premise. [given, F1, step 1.1, step 2.1, algebra]

4.1 The finite-generation theorem for C2-cofinite grading-restricted modules supplies a finite generating set and an admissible nonnegative grading for every grading-restricted generalized module. Admissible rationality therefore decomposes it into simple admissible submodules. A finite set of generators meets only finitely many summands, so there are finitely many; the n=0 forward-rationality theorem proves these simple modules ordinary. The C2/character finiteness lemma gives finitely many ordinary simple classes. Their finite-dimensional tops and generation by the top make Hom spaces finite; a simple endomorphism is scalar by its finite top. Thus all the hypotheses of the algebraic theorem, except the independently constructed braided monoidal tensor structure itself, have now been supplied from the original strongly rational assumptions. The latter structure is not inferred from this rigidity proof. Since V is self-contragredient, identify V' with V. The actual P(1)-intertwining correspondence and the constructed P(1)-tensor product turn E into a nonzero module morphism X⊗X'→V. It splits because the module category is semisimple, so V is a direct summand of X⊗X'. This is exactly the algebraic theorem's hypothesis, without an assumed nonzero fusing coefficient. Restricted contragredience permutes simples involutively, and step 1.2 identifies its object with the rigid dual just constructed. [given, F2, F3, F4, F6, step 3.1, step 1.2, algebra] ∎
