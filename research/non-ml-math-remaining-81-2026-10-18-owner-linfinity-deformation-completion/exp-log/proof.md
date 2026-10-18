# Fixed-carrier codifferential deformation theorem: complete proof package

Draft mathematical support only. No native carrier, manifest, workflow state, gate, review stamp, or commit is modified by this package.

## Contract and topology

Let k be a field of characteristic zero, B a commutative unital k-algebra, I an ideal, and assume B → lim B/I^n is an isomorphism. A nilpotent ideal is included. No dimension or finite-generation assumption on B, I, or the graded k-vector space V is needed. Put C=T^c(V)=⊕_{r≥0}V^{⊗r}, with deconcatenation coproduct, or C=S^c(V)=⊕_{r≥0}S^r(V), with the graded unshuffle coproduct (Koszul signs and the usual symmetric-coinvariant normalization). These are the coaugmented conilpotent cofree coalgebras in their respective categories. Define

    C_B = lim_n (C ⊗_k B/I^n),
    F^n C_B = ker(C_B → C ⊗_k B/I^n),
    C_B ⊗̂_B C_B = lim_n ((C⊗_k C)⊗_k B/I^n).

The coproduct, counit, and coaugmentation extend to these inverse limits. Tensor products of continuous filtration-preserving maps mean the induced maps on this explicitly defined completed tensor product. This is coefficient completion of a direct-sum coalgebra, NOT the unrestricted product ∏_r (V^{⊗r}⊗B) or ∏_r(S^r(V)⊗B). An element can have infinitely many arities only when, modulo each I^n, it has finite arity support. Arbitrary Taylor maps of positive arity extend as coderivations here: on an input of length r only arities ≤r occur, so the usual insertion or unshuffle formulas are finite. Any different arity completion requires separate continuity assumptions and is not silently included.

Let E be the graded associative algebra of continuous B-linear, filtration-preserving endomorphisms of C_B, with multiplication composition and graded commutator. Put

    F^p E = {T : T(F^q C_B) ⊂ F^{p+q} C_B for all q≥0}.

Let L⊂E consist of coaugmentation-preserving, counital coderivations: T(1)=0, εT=0, and ΔT=(T⊗1+1⊗T)Δ, using graded tensor maps. All coderivations below have zero nullary component. Fix D∈L^1 with D²=0, for example a coefficient extension of a fixed coderivation on C. Define dT=[D,T]. The deformation space is the set of D+R with R∈F^1L^1 and (D+R)²=0. Equivalence means conjugation by a degree-zero continuous B-linear, counital, coaugmented coalgebra automorphism G with G−1∈F^1E. Here and below “1” in G−1 means the identity map.

For this C_B, the condition G≡identity modulo I, stated as (G−identity)(C_B)⊂F^1C_B, implies the displayed filtration-raising condition. Indeed F^qC_B is the closure of I^q(C⊗B) in C_B: modulo F^n with n>q any element is a finite sum in C⊗(I^q/I^n), and lifts to C⊗I^q. On that dense submodule B-linearity gives (G−identity)(I^q(C⊗B))⊂F^{q+1}C_B. Continuity and closedness give the assertion. The same argument applies to any continuous B-linear endomorphism whose image lies in F^1. This avoids any hidden finite-generation hypothesis on I.

## Helper 1: completeness and noncommutative exponential/logarithm

The filtered endomorphism algebra is separated and complete for its F^p filtration in nonnegative orders: if T_m is uniformly Cauchy in the sense that T_m−T_l∈F^pE eventually for every p, then T_m(c) is Cauchy for every c∈C_B. Its limit T(c) is B-linear, filtration preserving and continuous. The relation (T−T_m)(F^q)⊂F^{p+q} follows by closedness whenever all sufficiently late T_l−T_m satisfy it. Thus T_m→T in the stated endomorphism filtration. Separation follows from ∩F^pC_B=0. Also F^pE·F^qE⊂F^{p+q}E. All coderivation, counit and coaugmentation identities are closed under these limits. Consequently F^1L is a complete pronilpotent filtered graded Lie algebra, [F^pL,F^qL]⊂F^{p+q}L; and d preserves this filtration.

For X,N∈F^1E^0 the series

    exp(X)=Σ_{j≥0} X^j/j!,
    log(1+N)=Σ_{j≥1} (−1)^{j−1}N^j/j

converge in E. Modulo F^n each sum has only terms of order <n. They are inverse bijections F^1E^0 ↔ identity+F^1E^0, and exp(X)^{-1}=exp(−X). This is a statement about a noncommutative associative algebra. Its justification does NOT require that E be commutative: each individual identity involves powers of a single element only. In Q[[t]], h(t)=exp(log(1+t)) satisfies h'=h/(1+t), h(0)=1; coefficient recursion gives h=1+t. Similarly (log(exp t))'=1 and its constant coefficient is zero, so log(exp t)=t. The formal derivatives and chain rule follow by multiplying coefficient series; they are identities with finitely many terms in each coefficient. Substitute N or X into these single-variable identities modulo F^n and pass to the limit. Likewise exp(X)exp(−X)=1 follows from the binomial coefficient sum in each total degree. No multivariable commutativity was assumed.

## Helper 2: exponential of a coderivation

If X∈F^1L^0, the coderivation identity gives, by induction,

    ΔX^j=(X⊗1+1⊗X)^jΔ.

The two operators X⊗1 and 1⊗X commute because X has degree zero. At each coefficient quotient all exponential sums are finite, so the binomial theorem proves

    Δ exp(X) = exp(X⊗1+1⊗X)Δ
             = (exp(X)⊗exp(X))Δ.

Also exp(X)(1)=1 and εexp(X)=ε, since X(1)=0 and εX=0. The inverse exp(−X) satisfies the same properties. Hence exp(X) is an identity-mod-I coalgebra automorphism. This proof applies equally to the tensor and symmetric coproducts; only the coderivation equation is used.

## Helper 3: logarithm of a coalgebra automorphism

Let G be any automorphism in the equivalence group and N=G−identity∈F^1E^0. Fix n≥1 and work on C_n=C⊗B/I^n; N^n=0 there. Define an endomorphism-valued polynomial

    P_n(t)=Σ_{j=0}^{n−1} binom(t,j)N^j.

For every nonnegative integer m, P_n(m)=G^m, by the ordinary finite binomial theorem applied to identity+N. Thus

    ΔP_n(m)=(P_n(m)⊗P_n(m))Δ,
    P_n(m)(1)=1,   εP_n(m)=ε.

Each difference is a polynomial in t with coefficients in a k-vector space of linear maps. A polynomial of degree at most d with such coefficients vanishing at d+1 distinct nonnegative integers has all coefficients zero: invert the scalar Vandermonde matrix over k. This argument needs neither finite-dimensional source/target nor a domain assumption on B/I^n. The three identities therefore hold polynomially in t. Differentiate at t=0, using P_n(0)=identity, to obtain

    ΔP_n'(0)=(P_n'(0)⊗1+1⊗P_n'(0))Δ,
    P_n'(0)(1)=0,   εP_n'(0)=0.

For j≥1, binom(t,j)'|_{t=0}=(−1)^{j−1}/j, because the other j−1 factors evaluate to (−1)(−2)…(−j+1). Hence P_n'(0)=log(G) modulo F^n. Passing to inverse limits proves log(G)∈F^1L^0. In particular exp and log restrict to mutually inverse bijections between F^1L^0 and the ENTIRE specified equivalence group. This is the essential surjectivity statement; merely exponentiating coderivations would not prove it.

The equivalence group can consequently be denoted exp(F^1L^0), with multiplication inherited from composition (or transported by log). This supplies its group law without requiring an unproved global BCH theorem. Its transported product is log(exp(X)exp(Y)); the usual BCH terminology can be used after identifying the corresponding universal formal series, but that additional formula is unnecessary here.

## Helper 4: conjugation and the gauge formula

For X∈F^1L^0 and any filtration-preserving homogeneous T∈E, modulo F^n only finitely many terms involving powers of X remain. Direct induction gives

    (ad_X)^r(T)=Σ_{j=0}^r (−1)^j binom(r,j)X^{r−j}TX^j.

Expanding exp(X)Texp(−X) and collecting total X-order r therefore gives

    exp(X)Texp(−X)=Σ_{r≥0}(ad_X)^r(T)/r!.

This equality is valid even when T does not lie in F^1E; ad_X raises its order. In particular, [X,D]=−dX, and so

    exp(X)(D+R)exp(−X)−D
      = exp(ad_X)R − Σ_{r≥0}(ad_X)^r(dX)/(r+1)!.

All series converge in the coefficient filtration: (ad_X)^rR has order ≥r+1 and (ad_X)^r(dX) has order ≥r+1. This is the DGLA gauge formula with differential d=[D,−] and conjugation convention G(D+R)G^{-1}. Reversing the intertwining convention reverses G, which yields the same equivalence relation. Because it is transported from an actual group action, it is a genuine action and preserves the deformation set.

## Main theorem: MC objects and all equivalences

The coderivations form a graded Lie subalgebra: expanding Δ(PQ) and Δ(QP) shows their mixed tensor terms cancel in Δ[P,Q], leaving ([P,Q]⊗1+1⊗[P,Q])Δ. Coaugmentation and counit conditions are also preserved. The graded commutator Jacobi identity follows by expansion of associative products. For a homogeneous T,

    d²T=[D,[D,T]]=D²T−TD²=0,

and the commutator derivation identity proves that d is a derivation of this Lie bracket. Thus (F^1L,d,[−,−]) is a complete filtered DGLA. For R∈F^1L^1,

    (D+R)² = D²+DR+RD+R² = dR + (1/2)[R,R].

Consequently R↦D+R is a bijection from its Maurer–Cartan set to the stated fixed-carrier codifferential deformations. Helpers 2 and 3 identify its full gauge group with every allowed identity-mod-I coalgebra automorphism; Helper 4 identifies the gauge action with conjugation. This is an isomorphism of action groupoids, and in particular a bijection on equivalence classes. It is not an assertion that an arbitrary unrelated DGLA governs an unspecified deformation problem.

## Exact strict associative specialization and suspension signs

First allow a graded vector space A and cohomological grading. Write V=A[1] and s:A→V with |sa|=|a|−1, so |s|=−1. For a degree-zero bilinear product μ define the degree-one Taylor map

    b_μ(sa⊗sb)=(−1)^{|a|}sμ(a,b).

This convention is exact. With the graded tensor-map convention it says b_μ=−s∘μ∘(s^{-1}⊗s^{-1}), because (s^{-1}⊗s^{-1})(sa⊗sb)=(−1)^{|a|−1}a⊗b. Extend b_μ uniquely to the tensor coalgebra by the insertion rule

    b_μ(v_1…v_r)=Σ_{i=1}^{r−1}(−1)^{|v_1|+…+|v_{i−1}|}
       v_1…v_{i−1} b_μ(v_i,v_{i+1}) v_{i+2}…v_r.

Each summand has degree one, lowers arity by one, and satisfies the coderivation identity by splitting the word before or after its replacement block. The equation for a split meeting the block contributes exactly to one side where that block is wholly on the corresponding factor; Koszul signs agree with passing b_μ across the preceding entries. Projection to V recovers b_μ, and any coderivation is determined by these Taylor projections: iterating the reduced coproduct expresses its length-r component as the sum inserting its cogenerator projection into one factor. This is a direct proof of existence and uniqueness, not an appeal to a source as logical supplier.

Because b_μ is odd, b_μ²=(1/2)[b_μ,b_μ] is a coderivation. Its only possibly nonzero Taylor projection is on arity 3, where explicit application yields

    π_V b_μ²(sa⊗sb⊗sc)
      =(−1)^{|b|}s( μ(μ(a,b),c) − μ(a,μ(b,c)) ).

Indeed the left-associated term has sign (−1)^{|a|+|a|+|b|}=(−1)^{|b|}; the right-associated term has sign (−1)^{|a|−1+|b|+|a|}=(−1)^{|b|−1}. Thus b_μ²=0 if and only if μ is associative. For a differential on A one can additionally take b_1(sa)=−s(da); the arity-2 equation is exactly the graded Leibniz rule, by the same insertion signs. The ungraded specialization below is sufficient for ordinary associative algebra deformation and avoids adding a differential unnecessarily.

Now take A concentrated in degree zero, possibly infinite dimensional, with associative product μ, V=A[1] concentrated in degree −1, D=b_μ, and M=lim A⊗B/I^n. A homogeneous degree-one Taylor map V^{⊗r}→V can be nonzero only if −r+1=−1, namely r=2. A homogeneous degree-zero Taylor map can be nonzero only if r=1. This remains true coefficientwise since B is concentrated in degree zero. Thus EVERY degree-one coaugmented coderivation is binary, and EVERY degree-zero coaugmented coderivation is unary: no higher-operation or nonlinear-morphism ambiguity is hidden in this ordinary-algebra case.

A degree-one R∈F^1L is therefore exactly b_α for a continuous B-bilinear map α:M⊗̂_B M→M with image in IM interpreted as F^1M; equivalently α reduces to zero modulo I. Its coefficients need not form a finite sum in Hom_k(A⊗A,A)⊗I when A is infinite dimensional; the continuous completed-Taylor formulation above is the correct unrestricted fixed-carrier statement. The main theorem says its MC equation is precisely associativity of μ+α. On unshifted cochains, for δ_μ the standard Hochschild differential,

    (δ_μα)(a,b,c)=μ(a,α(b,c))−α(μ(a,b),c)
                  +α(a,μ(b,c))−μ(α(a,b),c),
    π_V[D,b_α](sa,sb,sc)=−s(δ_μα)(a,b,c),
    (1/2)π_V[b_α,b_α](sa,sb,sc)
        =s(α(α(a,b),c)−α(a,α(b,c))).

Hence the displayed suspended MC equation reads −δ_μα+α∘α=0. This is exactly the associator of μ+α; a different unsuspended Gerstenhaber differential convention may move the minus sign, and must not be substituted without this calculation.

Every allowed degree-zero coalgebra automorphism G is similarly the tensor extension T^c(g) of its unary part g:M→M: an arity-r Taylor component of a degree-zero map to V must vanish unless r=1, and the iterated coproduct determines a coalgebra map from its cogenerator projection. Thus g is a continuous B-linear automorphism congruent to identity modulo I, and every such g occurs. Conjugating b_{μ+α} gives b_{μ+α'} with

    (μ+α')(a,b)=g((μ+α)(g^{-1}a,g^{-1}b)).

This is exactly transport of the associative product. The quotient by the full coderivation gauge group therefore equals the usual fixed-module associative-product deformation classes with changes of variables reducing to the identity. The fixed-unit variant is proved next by normalized Taylor maps and unit-preserving g. For genuinely graded A, higher Taylor components of degree zero may exist, so equivalence by arbitrary coalgebra automorphisms is homotopy-algebra equivalence; strict graded associative-product equivalence requires the unary subgroup. This caveat does not narrow the full codifferential theorem.

## Scope warning concerning scalar extension

For a finite-dimensional coefficient algebra B (e.g. a local Artin k-algebra), Hom_k(W,U)⊗B→Hom_k(W,U⊗B) is an isomorphism regardless of dimensions of W,U, because a finite basis of B resolves each map into finitely many coefficient maps. For arbitrary infinite B, that comparison need not be onto. Consequently a theorem phrased only with a naive algebraic tensor L⊗I must either retain its own restricted deformation objects or supply a genuine completion/Taylor identification. The above theorem deliberately uses all continuous B-linear Taylor operations on the completed fixed carrier, which supplies the full stated deformation problem with no finite-dimensionality assumption. This is a contract issue, not an exp/log obstruction.

## Fixed-unit associative specialization: normalized DGLA and full unit-preserving gauge

Let the ordinary degree-zero associative algebra (A,μ) have a specified unit e=1_A, and retain B concentrated in degree zero. A continuous r-linear cochain f on M is normalized when f(a_1,...,a_r)=0 whenever any a_j=e. For r≥1 define its suspended Taylor coderivation q_f by

    π_V q_f(sa_1⊗...⊗sa_r)=s f(a_1,...,a_r),    |q_f|=r−1,

and all other Taylor components zero. These formulas specify actual coderivations by the insertion construction above. Let N⊂L be the graded subspace of coderivations with normalized Taylor maps. It is closed in the coefficient topology: evaluation with one argument e is a continuous linear condition.

For normalized f of arity r and g of arity t, each Taylor term of the composition q_f q_g is, up to its Koszul sign,

    f(a_1,...,a_{i−1},g(a_i,...,a_{i+t−1}),a_{i+t},...,a_{r+t−1}).

If a unit argument lies in the inserted block, g vanishes; if it lies outside, one argument of f is e and f vanishes. Thus every insertion is normalized separately. The same holds for the opposite composition; hence [q_f,q_g] is normalized. Coefficientwise and by continuity this proves [N,N]⊂N for all permitted Taylor families.

Although b_μ itself is not normalized, d=[b_μ,−] preserves N. Explicitly the usual unshifted Hochschild differential on an r-cochain is

    (δ_μ f)(a_1,...,a_{r+1})
      = a_1 f(a_2,...,a_{r+1})
        + Σ_{i=1}^r (−1)^i f(a_1,...,a_i a_{i+1},...,a_{r+1})
        + (−1)^{r+1} f(a_1,...,a_r)a_{r+1}.

The insertion signs already fixed in the proof give exactly

    π_V[b_μ,q_f](sa_1⊗...⊗sa_{r+1})
      = (−1)^{r−1}s(δ_μ f)(a_1,...,a_{r+1}).

To verify the sign, the left outer term a_1f(...) in b_μq_f has coefficient (−1)^{r−1}, from moving the degree-(r−1) map past sa_1 of degree −1; the right outer term f(...)a_{r+1} has coefficient +1. The i-th adjacent multiplication term from −(−1)^{r−1}q_fb_μ has coefficient (−1)^{r+i−1}. These are precisely (−1)^{r−1} times the displayed Hochschild coefficients. There are no other Taylor terms.

If a_j=e with 2≤j≤r, the two adjacent multiplication terms i=j−1 and i=j have identical remaining arguments and opposite signs. Every other term has a unit inside f and is zero. If j=1, the first outer term cancels i=1, using ef(...)=f(...); if j=r+1, i=r cancels the final outer term, using f(...)e=f(...). All other terms again vanish by normalization. This includes r=1 and the endpoint cases. Hence δ_μf is normalized, proving dN⊂N. Consequently F^1N is a closed complete filtered DGLA with the inherited differential, not merely a set of selected binary cochains.

Degree one in this ordinary-algebra case is binary. Its MC elements are exactly α with α(e,a)=α(a,e)=0 such that μ+α is associative and reduces to μ modulo I. The normalization identities say exactly that the specified e remains a two-sided unit. Conversely any associative B-bilinear product on the fixed M with unit e and prescribed reduction has difference α satisfying these identities and the MC equation. Thus the object correspondence is both directions for the fixed-unit deformation problem.

Degree zero is unary. Write X=q_ξ∈F^1N^0, so ξ(e)=0. Its exponential on cogenerators is g=exp(ξ). Since ξ^j(e)=0 for j≥1, g(e)=e. Conversely if a continuous B-linear g≡identity modulo I fixes e, then N_g=g−identity satisfies N_g(e)=0 and every positive power does too; therefore log(g)(e)=0. Helpers 1–3, or these same unary series, identify precisely

    exp(F^1N^0) ↔ {continuous B-linear automorphisms g of M:
                         g≡identity modulo I and g(e)=e}.

For completeness, if exp(ξ) fixes e, log(exp(ξ))=ξ and the preceding logarithm argument gives ξ(e)=0, so there is no extra stabilizer in this exponential correspondence. On the coalgebra, G=T^c(g) and log(G)=q_{log(g)} by the proved uniqueness of logarithm and the fact exp(q_ξ)=T^c(exp ξ); the latter follows either on each tensor length by commuting unary insertions, or from the coalgebra-map uniqueness and its unary projection. Thus every allowed unit-preserving change of variables, not just a subgroup selected in advance, occurs in this normalized gauge group.

Finally, if m=μ+α has unit e and g(e)=e, its transported product m'(a,b)=g(m(g^{-1}a,g^{-1}b)) satisfies m'(e,a)=a=m'(a,e); it has the same reduction μ. The conjugation/gauge calculation is unchanged. This proves an isomorphism of the normalized MC action groupoid with the fixed-carrier, fixed-unit associative-product deformation groupoid, including formal power-series coefficients B=k[[h]] and normalized coefficients α=Σ_{n≥1}h^n B_n. In that formal case α(e,a)=α(a,e)=0 is equivalent, coefficient by coefficient, to B_n(e,a)=B_n(a,e)=0 for every n≥1. Commutativity of the original μ is allowed and is not imposed on the deformed product; this is the specialization used for formal associative deformations of a commutative algebra.
