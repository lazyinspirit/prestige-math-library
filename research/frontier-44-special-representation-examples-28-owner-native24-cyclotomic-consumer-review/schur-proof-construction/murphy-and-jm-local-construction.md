# Arbitrary-level Murphy cellularity and JM triangularity: local construction

Construction author: `/root/repair_klr_global_basis/native24_cyclotomic_schur_construction`. Run: `frontier-44-special-representation-examples-28`. This is a research proof construction, not a native item, acceptance, source substitution, or consumer review. The ordinary type-A suppliers and the independently late cyclotomic dimension supplier below must be checked by the parent before integration. This construction does **not** discharge the semistandard permutation-module/endomorphism basis prerequisite.

## Exact incoming contracts and normalization

Use the normalization in Mathas, `math/0204025`, not the opposite finite-generator convention printed in LM §2.1: `(T_i-q_H)(T_i+1)=0`, `X_{i+1}=q_H^{-1}T_i X_i T_i`, and `X_1=T_0`. Thus `T_i^{-1}=q_H^{-1}T_i+(q_H^{-1}-1)`. The parent Hecke presentation has this normalization. No replacement of `q_H` by the formal grading variable is made.

The narrow ordinary type-A inputs are: the finite standard basis; ordinary Murphy basis/cell law, with the fixed initial row modulo higher partition shapes; the length-additive Young subgroup coset expansions; Bruhat subword support for multiplication and the equality between reverse Bruhat order of distinguished row representatives and tableau-prefix dominance; and ordinary JM triangularity for the additive elements `L_i=Σ_{j<i}q_H^{j-i}T_(j,i)`. These are ordinary finite-type statements, applicable over every commutative base with invertible `q_H`. Relevant native20 IDs are `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, `thm-murphy-tableau-elements-form-a-cellular-basis`, and `thm-hecke-jucys-murphy-action-is-dominance-triangular`; their genuine dependency closure is parent-owned. The complete ordinary Mathas manuscript was retrieved; the actual ordinary proof read here is printed pp18–25 (PDF pp24–31), including Garnir coset equality, inversion-reducing Garnir factorization, lexicographic straightening, dominance refinement, and fixed-initial-row right ideal. The companion review supplies exact cyclotomic element conventions. No full DJM source was obtained.

The late dimension contract is `dim_F H_n=ℓ^n n!` for every field, `q_H≠1` of finite order at least2, and `Q_a=q_H^{c_a}`, established independently by the parent route finite/spectral → CRT/BK → ordinary KLR regular-Hom dimension → bounded spanning/basis. The construction below is downstream of that route and is never a supplier of its BK isomorphism.

For an ℓ-multipartition λ write `a_k=Σ_{j<k}|λ^(j)|`, `u_λ=∏_{k=1}^ℓ∏_{r=1}^{a_k}(X_r-Q_k)`, `x_λ=Σ_{w∈S_λ}T_w`, and `m_λ=x_λu_λ`. Since each `∏_{r≤a_k}(X_r-Q_k)` is symmetric in every component interval, the Bernstein relations give `x_λu_λ=u_λx_λ`. The involution fixing each `T_i,X_r` is well-defined by reversal of the presentation and fixes `m_λ`. Let `t^λ` be the tableau filled in component, row, column order. For standard s,t of shape λ put `m_st=T_d(s)^*m_λT_d(t)`. Multipartition dominance compares all cumulative component-row sums; tableau-prefix dominance compares those sums at every cutoff label.

## 1. Finite-generator straightening

Every component-preserving row-standard tableau admits a factorization of its distinguished permutation into a permutation inside the contiguous component intervals followed by the unique shuffle of the component intervals preserving their internal order. The inversion sets of these two permutations are disjoint: the first consists of pairs in one initial interval, and the second of pairs in different intervals. Consequently the factorization is length-additive. The same factorization applies to an arbitrary row-standard multitableau after factoring out its component shuffle.

Ordinary Murphy straightening in each component applies after multiplying by `u_λ`, because `u_λ` commutes with the Hecke generators internal to those intervals. Higher ordinary component shapes preserve component sizes and strictly increase multipartition dominance. The final component shuffle relabels each internal component by an increasing list. At any cutoff r its selected entries in that component are an initial segment of that increasing list. Hence each tableau-prefix inequality after shuffling is exactly the ordinary inequality for that component at the corresponding initial-segment length. This proves that component straightening preserves the asserted dominance; it uses an explicit cutoff count, not a stronger unproved simultaneous inequality.

For the fixed initial left row, right multiplication by `T_i` is now as follows. If `t s_i` is standard, the finite quadratic/length formula gives the usual single standard term or `q_H` times that term plus `(q_H-1)m_(t^λ,t)`. If i,i+1 are in the same row, the result is `q_H m_(t^λ,t)`. If they are in the same component and their interchange fails standardness, factor out the increasing component shuffle and apply the ordinary component cell law. This yields same-shape terms with the same initial left row, and strictly higher multipartition terms. The intertwining equality needed to move the generator through the shuffle is `T_c T_i=T_j T_c`: here c sends adjacent internal labels j,j+1 to i,i+1, so `c s_i=s_j c`, and both sides have identical ascent/descent status; the length or quadratic formula proves the equality in either case. A column failure across components is impossible because column standardness is imposed componentwise.

Descending induction over a linear extension of multipartition dominance establishes finite-generator stability of each span `N^{≥λ}` of all standard pairs of shapes at least λ, and of `N^{>λ}`. Indeed, the fixed-row calculation has only higher-shape errors, already stable under all finite words by the induction. Multiplying on the left by `T_d(s)^*` then proves right stability for every `m_st`; applying * proves left stability. Thus the higher spans are two-sided ideals for the finite-generator subalgebra. Modulo `N^{>λ}`, the fixed-initial-row span is a right module for that subalgebra. This induction concerns spanning sets; it does not assume they are independent or already cellular.

## 2. The cyclotomic component shift, including its coefficient and order

Let `a=(a_1,...,a_ℓ)` as above and abbreviate `u_a=u_λ`. Suppose component k is nonempty and let `b=a+e_k`. Put `u_b=u_a(X_(a_k+1)-Q_k)`; all factors commute. For `a=a_k`, the defining recurrence gives the exact identity

`u_a T_a...T_1 X_1 T_1...T_a = q_H^a(Q_k u_a+u_b)`.

This follows by substituting `T_a...T_1 X_1 T_1...T_a=q_H^a X_(a+1)` and adding/subtracting `Q_k u_a`; no cancellation or generic parameter assumption occurs. The case a=0 is included.

For k>1 form the multicomposition ν by appending a singleton row to component k−1 and deleting the first node of the first row of component k (omit a resulting zero row). Its cumulative sizes are b, so `u_ν=u_b`. Its Young subgroup is a subgroup of `S_λ`: inside the old first row of component k we have replaced its first position by a singleton and retained its remaining positions as a row. All other rows agree. The **left** length-additive coset expansion is

`x_λ=Σ_v T_v^* x_ν`, hence `x_λu_b=Σ_v T_v^*m_ν`.

The left expansion is essential: the right expansion cannot move `u_b` through its coset representatives. Sorting the rows of ν separately in each component conjugates its Young subgroup by a distinguished permutation and gives `m_ν=T_d m_(sort ν) T_d^{-1}`; `u_ν` commutes with this component-preserving permutation. The ordinary row-sorting/coset argument therefore expresses each term in standard pairs of shapes at least `sort ν`. That shape strictly dominates λ: within component k−1 every cumulative row sum can only increase by sorting the appended singleton, and its final total increases by1; within component k the extra preceding1 cancels the loss of the first node, and sorting the shortened first row cannot decrease a cumulative sum. The cumulative total through component k−1 increases strictly. Earlier and later components do not decrease any cumulative sum. Thus `x_λu_b∈N^{>λ}`.

For k=1, nonemptiness of component1 implies `a_s≥1` for every s≥2. Therefore `u_b` contains all factors `(X_1-Q_s)`, including s=1, and is zero by the cyclotomic relation. This proves `x_λu_b∈N^{>λ}` in this case as well.

## 3. Right multiplication by X1 and cellularity

In a standard t whose entry1 lies in component k, that entry is its first node. The initial label of that node is `a+1`, where `a=a_k`. The distinguished permutation satisfies `d(t)=(s_a...s_1)w`, with w fixing1, and `len d(t)=a+len w`. To see the length equality, pull label a+1 to value1. It crosses exactly the a smaller initial labels, all of whose final values are greater than1; all remaining inversions are those of w. A permutation fixing1 has a reduced word in `s_2,...,s_(n−1)`, hence `T_w` commutes with `X_1`.

Multiplying the identity in §2 on the right by `(T_1...T_a)^{-1}` and then `T_w` gives

`m_λ T_d(t) X_1 = q_H^a Q_k m_λ(T_1...T_a)^{-1}T_w + q_H^a x_λu_b(T_1...T_a)^{-1}T_w`.

The second term belongs to `N^{>λ}` by §2 and the finite-generator stability of §1. The first term belongs, modulo `N^{>λ}`, to the fixed-initial-row span by §1. Thus that span is stable under `X_1`. As in §1, multiplication on the left by `T_d(s)^*` and finite left stability of higher shapes gives the coefficient-independence law

`m_st h ≡ Σ_v r_(t,v)(h)m_sv (mod N^{>λ})`

first for each generator, and then for every word, with coefficients independent of s. All higher spans are stable on the right under every generator; * gives two-sidedness. Since `X_r=q_H^{1-r}T_(r−1)...T_1 X_1 T_1...T_(r−1)` and the cyclotomic constant term is invertible when all Q's are invertible, these generators also generate the Laurent affine quotient.

The smallest multipartition `ω=(∅,...,∅,(1^n))` has `u_ω=x_ω=m_ω=1`. Therefore the generator-stable span of all standard `m_st` contains1 and is all of H. This proves spanning directly. Over the exact field contract, the number of pairs is `ℓ^n n!`: for sizes n_a, the number of standard tableaux of λ is `n!/∏n_a!` times the product of ordinary standard-tableau numbers. Summing squares and using the ordinary Murphy rank identity `Σ_(ρ⊢n_a) f_ρ²=n_a!` gives `(n!)²Σ_(n_1+...+n_ℓ=n)1/∏n_a!=ℓ^n n!` by the multinomial theorem. The independent late dimension contract then makes this spanning family a basis. Consequently the displayed coefficient-independence law and * are an actual cellular datum for arbitrary level, repeated charges, every allowed field, and finite e≥2.

## 4. Integral extension without a generic-flatness inference

The spanning/generator argument works over `R=Z[z^{±1},U_1^{±1},...,U_ℓ^{±1}]`. Independence over R can be proved using the just-established finite-field statement, without assuming generic semisimplicity or a cyclotomic integral PBW theorem. Suppose a relation `Σ f_st m_st=0` over R has a nonzero Laurent coefficient f. Multiply f by a Laurent monomial to make it a polynomial. Choose a prime p for which a nonzero integer coefficient survives. In arbitrarily large finite extensions `F_(p^d)`, the number `φ(p^d−1)` of primitive multiplicative generators tends to infinity: the elementary prime-power product gives `φ(N)≥sqrt(N/2)` for every positive N. Choose d so that this number exceeds the degree in z of one nonzero coefficient of f viewed as a polynomial in the U's, and `p^d−1` exceeds all degrees in U. That coefficient does not vanish at some primitive generator z. The nonzero polynomial in the U's then does not vanish on the full nonzero-coordinate grid, by repeated use of the one-variable root bound. Thus choose nonzero U_a with f(z,U)≠0. Every U_a is a power of the chosen primitive z, and z has finite order at least2, so the specialized standard Murphy pairs are a basis by §3. The specialized relation forces every specialized coefficient to be0, contradicting the choice of f.

Therefore the universal Murphy family is independent, hence an R-basis. Tensoring this genuine basis, together with the presentation, supplies the same basis/cell law over every commutative R-algebra. In particular the DVR deformation `z=q_H t`, `U_a=Q_a t^{na}` used by LM inherits a free cellular Murphy basis. This is an injectivity proof before base change; it does not infer integral freeness from generic rank alone. Additional elementary typed incoming prerequisites here are existence/cyclicity of finite fields, the polynomial root bound, and finite subgroup/coset arithmetic. Parent must register them or include this short density proof in the aggregate helper.

## 5. Initial-row JM eigenvalues

For component k and `a=a_k`, §2 immediately gives

`m_λ(X_(a+1)-Q_k)=x_λu_b∈N^{>λ}`.

Consider the internal finite-Hecke submodule generated by `m_λ` modulo higher global shapes. By ordinary component Murphy straightening it is spanned by standard internal component permutations. Each such permutation fixes the smallest internal label a+1, because that label must occupy the first node of its component. Consequently its Hecke element commutes with `X_(a+1)`: it has a reduced word in the internal generators with indices at least a+2. Thus `X_(a+1)` acts as the scalar Q_k on this whole internal finite-Hecke submodule. Errors in this computation are in `N^{>λ}`, already proved to be an ideal for every generator.

The recurrence for the X's therefore identifies the action of `X_(a+i)` on that submodule with Q_k times the ordinary multiplicative JM element

`M_i=q_H^{1-i}T_(i−1)...T_1²...T_(i−1)=1+(q_H-1)L_i`,

with indices translated by a. The displayed equality is proved inductively from the finite quadratic relation and the defining additive-JM recurrence; it is a polynomial identity also when `q_H=1`. Ordinary JM triangularity gives diagonal `1+(q_H-1)[content]_q=q_H^{content}`. For the initial component tableau, which is maximal in tableau dominance, there are no strictly more dominant same-shape terms. Hence for the node (i,j,k) carrying r in `t^λ`,

`m_λ X_r ≡ Q_k q_H^{j-i}m_λ (mod N^{>λ})`.

## 6. JM triangularity for every standard multitableau

The Bernstein relations are

`T_i X_i=X_(i+1)T_i-(q_H-1)X_(i+1)` and `T_i X_(i+1)=X_iT_i+(q_H-1)X_(i+1)`,

with commutation for the other indices. Inductively through a reduced word of w, these give

`T_w X_r=X_(w^{-1}(r))T_w+Σ_(v<w)Σ_b a_(v,b)X_bT_v`.

The correction terms are supported on proper Bruhat subwords: at the first correction a generator is deleted; moving its linear X coefficient through preceding generators only deletes further generators; the finite quadratic multiplication of any remaining subword has Bruhat support below that subword. The leading term follows the permutation of the index at every undeleted step. This proves both the coefficient degree1 and the strict subword bound.

Apply this with `w=d(t)` and multiply by `m_λ` on the left. Section5 evaluates every X coefficient modulo higher shapes. A correction `m_λT_v` is reduced first to a row-standard representative d(u) of its Young-subgroup coset. The multiplication by the removed row subgroup contributes its row eigenvalue and has `d(u)≤v<d(t)`. The ordinary Bruhat/tableau-prefix relation, applied to the ordered rows of all components, therefore says `u` strictly dominates t. Componentwise ordinary straightening of u then either raises shape or produces same-shape standard tableaux at least u in prefix dominance, as proved by the cutoff argument of §1. Its same-shape terms consequently strictly dominate t. The leading eigenvalue is the Q_k times q_H to the content of the node carrying r in t, because `w^{-1}(r)` is precisely its initial-row label. Thus

`m_(t^λ,t)X_r ≡ Q_k q_H^{j-i}m_(t^λ,t)+Σ_(v⊲t) a_v m_(t^λ,v) (mod N^{>λ})`.

This proves the exact arbitrary-level JM content statement, independently of an affine-center theorem, semisimplicity, or block classification. On the resulting Specht module all simultaneous generalized eigenwords are among the standard-tableau residue words `(c_k+j-i mod e)`: a total ordering extending tableau dominance triangularizes all X's simultaneously, its one-dimensional successive quotients have exactly these characters, and applying commuting CRT projectors to that finite filtration gives the assertion. The residue multiplicities of every such word equal the node-residue multiplicities of λ.

For rank0, H=C=F, the sole shape/tableau is empty, and all module, corner, basis, and triangularity assertions have their immediate one-dimensional interpretation. Therefore the construction is uniform over every rank needed by the core-reduction consumer.

## Retained boundaries

The arguments establish Murphy cellularity/JM locally **relative to the narrow ordinary suppliers and the independently late dimension contract**. They do not establish a basis of `M^µ=m_µH` by semistandard sums, a basis of `Hom_H(M^ν,M^µ)`, or the Schur cellular structure. The universal proof in §4 is new construction, not a source quotation, and must receive ordinary parent mathematical review. It must not be used before BK or used to relabel the exhausted old native11 review as reopened.
