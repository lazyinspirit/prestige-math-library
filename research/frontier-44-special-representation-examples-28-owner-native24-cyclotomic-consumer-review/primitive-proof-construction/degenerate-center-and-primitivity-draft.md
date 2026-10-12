# Draft construction: degenerate content idempotents are primitive

Author: `/root/repair_klr_global_basis/native24_primitive_content_construction`.
Proof construction for NEW native24 clause (iv), first repair, not an acceptance or consumer review. No active library item is changed. This proves the degenerate conclusion conditional on the precisely declared PBW and spectral inputs below. It does not prove the nondegenerate conclusion.

## Inputs and exact scope

Let F be any field, n≥0, ℓ≥1, and f(t)=t^ℓ+c₁t^(ℓ−1)+⋯+cℓ a monic polynomial split in F. Let A be the degenerate cyclotomic Hecke algebra with commuting x₁,…,xₙ, symmetric-group generators sᵢ, relations sᵢxᵢ₊₁=xᵢsᵢ+1, sᵢxⱼ=xⱼsᵢ for j≠i,i+1, and f(x₁)=0. The symmetric-group relations are understood. For the assigned clause, char(F)=e is prime and every root of f lies in the prime field, with multiplicities prescribed by the cyclotomic weight.

**Unproved upstream input P (separate basis constructor):** the monomials x₁^a₁⋯xₙ^aₙw, 0≤aᵢ<ℓ, w∈Sₙ, form an F-basis; the filtration assigning degree one to each xᵢ and zero to w has associated graded algebra B=F[X₁,…,Xₙ]/(X₁^ℓ,…,Xₙ^ℓ)⋊FSₙ. Basis independence, not just spanning, is essential here. Brundan §3 p.10 cites [BK, Lemma 3.5] for this input; that citation is not counted as a local proof.

**Upstream input S (parent's finite/spectral construction):** the finite commuting family xᵢ has split joint generalized-eigenvalue projectors p_word in A, pairwise orthogonal and summing to 1; eα is the sum over words having content α, and each eα is central. No primitivity is included in S. On p_word A, xᵢ−wordᵢ is nilpotent. These inputs are kept separate from P and from the proof below.

The n=0 algebra is F and its only nonzero content idempotent is 1. Hence assume n≥1.

## Local helper 1: symmetric polynomials are central

Put x=xᵢ, y=xᵢ₊₁, s=sᵢ. The relations give sx=ys−1 and sy=xs+1. Induction on polynomial products gives

s g(x,y)−g(y,x)s = (g(y,x)−g(x,y))/(x−y).

The quotient is a polynomial: the numerator vanishes when x=y. The formula holds first on x and y, and the identity for gh follows by adding the two commutator formulas after inserting g(y,x)sh. Therefore every polynomial symmetric in x,y commutes with s. A globally symmetric polynomial commutes with every sᵢ and every xⱼ, hence is central. This proof uses no division by an integer or by x−y inside A.

## Local helper 2: the graded center has an explicit orbit-sum basis

For a nonempty finite subset I of size a define, in the truncated polynomial ring,

h_r(I)=Σ Xᵢ₁^b₁⋯Xᵢₐ^bₐ,

where the sum has 0≤bⱼ<ℓ and Σbⱼ=(a−1)(ℓ−1)+r. Thus h_r=0 for r≥ℓ and h_(ℓ−1)(I)=∏ᵢ∈I Xᵢ^(ℓ−1). For a cycle C with support I set C^(r)=h_r(I)C, 0≤r<ℓ. Include all fixed points as 1-cycles; (i)^(0)=1 may be inserted or removed.

For I,J with c=|I∩J|>0, direct expansion gives

h_r(I)h_s(J)=ℓ^(c−1)h_(r+s+(c−1)(ℓ−1))(I∪J).

Here is an elementary derivation. If the intersection is {k}, compare each monomial on the other variables: the forced k-exponent in the product is the required exponent for the right side, and terms with exponent ≥ℓ vanish. Next h₀(i,j)^2=ℓ Xᵢ^(ℓ−1)Xⱼ^(ℓ−1), since the only surviving exponent pairs in its expansion have equal complementary exponents. For c>1 factor each h along a chain through the c shared variables using the c=1 identity, and apply this two-variable identity to the c−1 repeated chain edges. This yields the stated formula without assuming ℓ invertible in F.

Consequently disjoint colored cycles commute. If cycles C,D meet in one letter, C^(r)D^(s)=(CD)^(r+s). If they meet in c≥2 letters, their product is

δ_(r+s,0) ℓ^(c−1)h_((c−1)(ℓ−1))(C∪D)CD.

Indeed h vanishes unless r+s=0 (and if c>2 and ℓ>1 it also vanishes). In every surviving case this is a scalar times a product of disjoint cycles all colored ℓ−1. For c=2, CD splits into two cycles and h_(ℓ−1)(C∪D)=∏ Xᵢ^(ℓ−1); for c>2 and ℓ=1 all colors are zero and any permutation is a product of disjoint cycles. These observations also show that every product of colored cycles reduces to a linear combination of disjoint colored-cycle products.

We prove that the centralizer Q of the polynomial ring in B has as basis the disjoint colored-cycle products. Since coefficients of distinct permutations in B are independent, a summand gw commutes with Xⱼ precisely when (Xⱼ−X_(w(j)))g=0 for every j. Write w as disjoint cycles. For one cycle of size a, the coefficient condition transfers one unit of exponent between adjacent cycle variables: whenever bⱼ<ℓ−1, the coefficient at (...,bⱼ,bⱼ₊₁,...) equals that at (...,bⱼ+1,bⱼ₊₁−1,...), interpreting a negative exponent as zero. Repeating these transfers moves all but one exponent to ℓ−1. Thus for a homogeneous degree k, all coefficients are equal if k=(a−1)(ℓ−1)+r, 0≤r<ℓ, and all are zero otherwise: in the latter case a transfer reaches a negative exponent before all but one exponent reaches ℓ−1. The solution space for that cycle is exactly the span of h₀,…,h_(ℓ−1). For disjoint cycles the equations involve disjoint variable sets, so successively equating coefficients in the ordinary truncated monomial basis gives the tensor product of these solution spaces. This also covers ℓ=1 directly. Hence Q has the claimed basis; independence follows from distinct permutation coefficients and distinct monomial degrees on each cycle support.

Conjugation by Sₙ permutes this basis. Invariance under a permutation action has orbit sums as basis in every characteristic: a coefficient is constant on its orbit; no averaging or division by n! is used. A colored cycle type λ consists of the lengths of the cycles of each color 0,…,ℓ−1. Its orbit sum zλ is central, and every central element of B is a unique linear combination of the zλ. The homogeneous degree is

D(λ)=Σ_cycles ((length−1)(ℓ−1)+color).

Define U(λ) as the total number of letters in the cycles except fixed points of color zero. This is the support statistic for the triangular argument below.

## Local helper 3: symmetric polynomials lift the entire graded center

Define Yᵢ(k) as follows. Write k=(a−1)ℓ+r, a≥1, 0≤r<ℓ. Set

Yᵢ(k)=Σ_(distinct j₁,…,j_(a−1)<i) (j₁⋯j_(a−1)i)^(r).

Thus Yᵢ(r)=Xᵢ^r for r<ℓ, and Yᵢ(ℓ)=Σ_(j<i)(ji)^(0). We establish the filtered symbol formula:

xᵢ^k lies in filtration degree d=(a−1)(ℓ−1)+r;
its degree-d symbol is Yᵢ(k) if r>0;
if r=0 it is Yᵢ(k) plus a linear combination of disjoint cycles all colored ℓ−1, involving i and at most a−1 letters.

For k=ℓ use the cyclotomic relation at i=1 and then induct on i with

xᵢ₊₁^ℓ=sᵢxᵢ^ℓsᵢ+Σ_(t=0)^(ℓ−1)xᵢ^t xᵢ₊₁^(ℓ−1−t)sᵢ.

The identity follows by telescoping from xᵢ₊₁=sᵢxᵢsᵢ+sᵢ. Taking degree-(ℓ−1) symbols yields Yᵢ(ℓ)−c₁Xᵢ^(ℓ−1). Terms involving c₂,… have lower filtered degree (for ℓ=1 the same formula reads xᵢ=Yᵢ(1)−c₁).

For k=(a−1)ℓ take the (a−1)st power of this symbol. In expanding Yᵢ(ℓ)^(a−1), terms selecting distinct transpositions (j₁i),…,(j_(a−1)i) give exactly Yᵢ(k), each cycle once: its orientation determines their ordered list. A first repeated letter makes two cycles colored ℓ−1 by the c=2 identity above, on at most as many letters as transpositions already chosen. Subsequent multiplication either adds a new letter by the c=1 identity, vanishes, or yields again disjoint cycles all colored ℓ−1 with the same support bound. Any term selecting −c₁Xᵢ^(ℓ−1) likewise has all cycles colored ℓ−1 and at most a−1 letters. This proves the stated error description by induction on a. For k=(a−1)ℓ+r, 0<r<ℓ, multiply by Xᵢ^r. Every error term vanishes because it already contains Xᵢ^(ℓ−1). The main term becomes Yᵢ(k). This finishes the symbol calculation, including ℓ=1, where r>0 never occurs.

Now associate to a colored cycle of length a and color r the integer k=(a−1)ℓ+r. Delete the zero integers contributed by fixed points of color zero; sort the remaining integers as a partition μ. Its nonzero parts satisfy

Σ_(μⱼ>0)(floor(μⱼ/ℓ)+1)≤n.

Conversely any partition satisfying this condition determines exactly one colored cycle type on n letters by adjoining color-zero fixed points. Set pμ=Σ_(ν distinct permutations of (μ,0,…,0)) x₁^ν₁⋯xₙ^νₙ. It is central by helper 1 and lies in filtered degree D(λ).

Its symbol is zλ plus central terms supported on fewer than U(λ) letters. Indeed the symbol formula expands it in colored-cycle products. The terms with disjoint cycles and no error have type λ; each such product occurs exactly once, since its cycles must be assigned to their respective largest letters, and that assignment determines ν and each ordered list in Yᵢ. Any overlap or error has strictly smaller union of nontrivial supports, and reduction by the cycle identities never increases that union. Its resulting orbit sums therefore have smaller U. Because pμ is central its symbol is central, so the coefficients on these smaller-support products are constant on conjugation orbits. All these corrections have the same homogeneous degree D(λ).

Induction on U inside each homogeneous degree now shows that the symbols of pμ span Z(B): the coefficient of zλ is 1, so no scalar inversions are needed. On the other hand gr Z(A) embeds into Z(gr A)=Z(B), since taking top degree of each commutator preserves zero. Thus gr Z(A)=Z(B). Given z∈Z(A), subtract a linear combination of the pμ having the same leading symbol, thereby reducing its filtered degree. The filtration is finite (by P it is exhausted by degree n(ℓ−1)); induction proves that z is a symmetric polynomial in x₁,…,xₙ. Therefore

Z(A)=F[x₁,…,xₙ]^(Sₙ), interpreted as the image of the symmetric polynomial ring.

This is an actual local proof of the center statement from P. It does not invoke the center theorem as an unproved input. The direct symbol argument also avoids Brundan Theorem 2.7's abbreviated adjacent-transposition calculation.

## Local helper 4: local center implies primitive content idempotents

Fix nonzero e=eα. For 1≤k≤n let σk be the kth elementary symmetric polynomial. Let ak be its value on a word of content α; this is independent of word order. On each p_word A inside eA write xᵢ=wordᵢ+Nᵢ, with commuting nilpotent Nᵢ. A polynomial in the Nᵢ with zero constant term is nilpotent: if Nᵢ^M=0 for all i, any product of more than n(M−1) positive-degree monomials vanishes. Hence

Nk=eσk(x)−ak e

is nilpotent on every word summand. There are only finitely many words, so some common exponent makes Nk zero in eA. The Nk commute; the ideal J they generate in the commutative ring eZ(A) is nilpotent by the same degree count.

Every symmetric polynomial is a polynomial in σ₁,…,σₙ over F. This elementary symmetric-polynomial theorem is characteristic free: subtract the product of elementary polynomials with matching largest monomial, and iterate in lexicographic order. Helper 3 therefore gives eZ(A)=F e+J. Since e≠0 and J is nilpotent, F e∩J=0, and eZ(A)/J≅F. An idempotent z in this ring has image 0 or 1 in F. In the first case z∈J is both nilpotent and idempotent, hence z=0. In the second e−z is both nilpotent and idempotent, hence z=e. Thus e is primitive central.

Since the eα are central, pairwise orthogonal, and sum to 1, their nonzero terms are exactly all primitive central idempotents: for another primitive central b, the decomposition b=Σα beα has exactly one nonzero term; that term equals eα because eα is primitive. Every block therefore arises from exactly one nonzero eα. No algebraic closure, splitting-simple-module theorem, power-sum generation, division by n!, or level-one restriction is used.

## Provenance and remaining obligation

Source [B]: Brundan, arXiv math/0607717v3, PDF pp.4–12, Lemmas 2.1–2.2, Theorems 2.3–2.4, Lemmas 2.6 and 3.1, Theorem 3.2. Exact PDF/text hashes and actual read range are in `source-read-record.json`. Helpers 1 and 4 and the shortcut in helper 3 are locally constructed; helper 2 and the symbol calculation adapt the fully read source proof and fill its power-expansion exercise.

Only P and S remain upstream. The draft is eligible for integration only after their actual local proofs bind these exact contracts. It provides no acceptance stamp and makes no claim that nondegenerate clause (iv) is resolved.
