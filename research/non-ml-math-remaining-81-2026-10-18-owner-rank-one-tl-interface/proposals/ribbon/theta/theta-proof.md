# Complete general theta-net evaluation — isolated construction

Only this new `proposals/ribbon/theta/` directory is edited. This is a mathematical proposal for the missing general theta claim in `lem-temperley-lieb-root-fusion-paths-have-nonzero-pairings`; it does not edit or recertify that live/native carrier. The earlier fundamental-edge path proof did not prove the general theta formula. The proof below does.

## Statement, exact diagram, and domain

Initially q is an indeterminate, `[j]=q^(j−1)+q^(j−3)+...+q^(1−j)`, `[0]!=1`, and the loop parameter is `delta=q+q^−1`. Let m,n,p be nonnegative integers and set

    r=m+p, s=m+n, t=n+p, h=m+n+p.

Equivalently `(r,s,t)` satisfies the triangle inequalities and even-sum condition, with m=(r+s−t)/2, n=(s+t−r)/2, p=(t+r−s)/2. All the following diagrams use the **unnormalized**, identity-coefficient-one Jones–Wenzl projectors.

For an integer m, let W_m be m nested cups, ordered so that its outputs are two consecutive m-strand bundles, with cup i joining position i of the first bundle to position m+1−i of the second. Let B_m be its horizontal reflection (m nested caps). Put

    A=1_p tensor W_m tensor 1_n : t → r+s,
    B=1_p tensor B_m tensor 1_n : r+s → t,
    alpha=(p_r tensor p_s) A p_t,
    beta=p_t B (p_r tensor p_s).

Thus at one trivalent vertex the three pairwise bundles have sizes m,n,p; there are m strands between the r and s arms, n between s and t, and p between t and r. This specifies the planar vertex completely, without a scalar normalization or a diagrammatic ambiguity. The theta net is

    Theta(m,n,p)=Tr_t(beta alpha).

Idempotence collapses the doubled projectors, so it has exactly the usual three JW-labelled edges r,s,t, each joining the two trivalent vertices.

Then

    Theta(m,n,p)=[m]![n]![p]![h+1]! / ([m+n]![n+p]![m+p]!).       (T)

This identity also holds at any complex q!=0 for which `[j]!=0` for 1<=j<=M=max(r,s,t), with the Laurent-polynomial interpretation of quantum integers at q=±1. Those hypotheses construct all three JW projectors and make every displayed denominator a unit. There is **no** requirement that `[h+1]` be nonzero, and no denominator `[h+1]` is introduced in the conclusion.

In particular let q=exp(pi i/ell), ell>=3, and 0<=r,s,t<=ell−2. All denominator factors are nonzero. If h<=ell−2, every numerator factor has index at most ell−1 and is positive, so Theta>0. If h>=ell−1, `[h+1]!` contains `[ell]=0`, while the denominator is still nonzero, so Theta=0. These are exact evaluated diagrams, not a 0/0 convention. A claim about *all* nonnegative labels at this root would need additional hypotheses ensuring that their JW projectors exist; it is not an unqualified definition.

## Source reading and proof method

The actual downloaded Chen PDF was read at §§2.3–2.4 (JW recursion, partial trace, and the unique trivalent matching), §§3.1–3.2 (the precise vertex and theta definition), the triangle-shrinking proof in §3.3, and §5.3 (root specialization). In §3.2, printed page23/PDF31, Chen explicitly says: “we simply state their result here and refer the reader to Chapter 6 of [KL94] for a proof.” Thus Chen does **not** supply a theta-recurrence proof. The local proof below independently evaluates the defined diagram by an explicit projector/nested-cup norm and proves the finite q-Vandermonde identity it uses. It then derives and telescopes the strip recurrence. It imports neither an unproved theta formula nor a recoupling coefficient.

## 1. An explicit faithful scalar test for the required diagrams

We will evaluate negative-loop diagrams in two-dimensional vector spaces, then remove a completely controlled global sign. This keeps the snakes correct; assigning the positive-loop cup/cap directly to the quantum module would give the wrong sign.

Over C(q), let V have ordered basis (+,−), and set

    w=+−−q^−1(−+),
    b(+−)=−q, b(−+)=1, b(++)=b(−−)=0,
    K=diag(q,q^−1).

Direct substitution gives both snakes `(id tensor b)(w tensor id)=id` and `(b tensor id)(id tensor w)=id`, and `b(w)=−delta`. Thus cup→w, cap→b evaluates **every** planar TL(−delta) diagram: component deletion, planar isotopy, and the snake relations are satisfied. No quantum-group R or tilting theorem is needed here. Write e=wb and U=−e. On the two weight-zero words its nonzero block is

    U|_(+−,−+)=[[q,−1],[−1,q^−1]].

This is symmetric under ordinary matrix transpose. The algebra isomorphism `TL_a(+delta)→TL_a(−delta), U_i→−e_i` takes the positive-loop projector p_a to the negative-loop projector p_a^−: the negative-loop quantum integers are `(-1)^(j−1)[j]`, and substituting these signs in the JW recursion proves the assertion inductively. Consequently the matrix P_a evaluating p_a^− is exactly the matrix obtained by the positive-loop JW recursion with the displayed U. It is symmetric, idempotent, annihilated by each U_i, and has identity coefficient one.

For a word x of length a, let j(x) be its number of minus signs and inv(x) the number of ordered pairs “minus before plus.” Define

    z_(a,j)=sum_(j(x)=j) q^inv(x) x,
    Z_(a,j)=z_(a,j)^t z_(a,j)=sum_(j(x)=j) q^(2 inv(x)).

The equation U_i v=0 says exactly that the coefficient of a word containing −+ at positions i,i+1 is q times the coefficient with those positions replaced by +−. Adjacent swaps connect all words with fixed j, and changing +− to −+ increases inv by one. Therefore the common kernel of the U_i in that weight space is precisely C(q) z_(a,j). Since P_a annihilates all U_i, its image lies in this kernel. Conversely P_a is identity plus nonempty U-words, whose rightmost factor kills the kernel, so P_a acts as identity on it. Symmetry now determines the whole weight-j matrix:

    (P_a)_(x,y)=q^(inv(x)+inv(y))/Z_(a,j),  j(x)=j(y)=j.       (P)

For proof of the normalization, any symmetric rank-one projector with image Cz has form zz^t/(z^t z); here z^t z=Z is a nonzero polynomial with constant term1. Thus (P) has been derived from the actual JW projector, not used to define a replacement.

Put Q=q^2. Counting inversions by the last letter, or using the adjacent-swap recurrence, gives

    Z_(a,j)=Gaussian(a,j)_Q
           =q^(j(a−j)) [a]!/([j]![a−j]!).                  (G)

For completeness the first equality follows from `Z_(a,j)=Q^j Z_(a−1,j)+Z_(a−1,j−1)`: appending a plus creates j inversions and appending a minus creates none. The Gaussian polynomial obeys this same recurrence, with Z_(a,0)=Z_(a,a)=1. The second equality follows by writing `[u]=q^(1−u)(1+Q+...+Q^(u−1))` in the three factorials. All of these calculations are in C(q), so Z is invertible here; root specialization is performed only after the final identity has denominators in the stated unit range.

The negative planar trace on V corresponds to the pivotal matrix J=−K. One can check this without categorical assumptions: with B=[[0,−q],[1,0]], the self-duality relation for the symmetric planar transpose is `J B^t=B`, which is exactly J=−K. Equivalently close a matrix directly using w and b and obtain `Tr((-K)f)`. Tensoring the closure gives `Tr((-K)^(tensor a) f)` on V^a. On im(P_a), whose basis has weights a−2j, the trace of the identity is therefore

    dim_−(p_a)=(-1)^a sum_(j=0)^a q^(a−2j)=(-1)^a[a+1].  (D)

This is also the usual negative-loop JW trace. These evaluations suffice to detect the scalar corner p_t End(t) p_t: that corner is C(q)p_t because every nonidentity matching has an innermost turnback killed by p_t; the vector +^t is fixed by P_t and hence detects its coefficient. No assertion that this finite representation is faithful on arbitrary TL Hom spaces is required.

## 2. Exact nested-cup and projector calculation

Perform the same theta construction in TL(−delta), and write its scalar as Theta_−. For a word x of length m, let x^c be its bitwise complement and let `bar(x)=reverse(x^c)`. The nested cups and caps evaluate to

    W_m(1)=sum_x (-q^−1)^j(x) x tensor bar(x),
    B_m(x tensor bar(x))=(-q)^(m−j(x)),

with zero for every other pairing of the two m-word bundles. This follows by taking the product of the m fundamental cup/cap coefficients: a plus in x gives cup coefficient1 and cap coefficient−q; a minus gives cup coefficient−q^−1 and cap coefficient1. The reverse ordering is precisely the nesting prescribed in the definition.

The diagram beta alpha is in the scalar p_t corner. Write its negative-loop value as `L P_t`. Evaluate it on +^t to determine L. The outer P_t factors fix +^t and may be suppressed: everything has total weight t, and the weight-t subspace of V^t is the one-dimensional space C +^t. The remaining operator is

    B (P_r tensor P_s) A.

For an x with j minuses and v=inv(x), the initial A output is

    (+^p x) tensor (bar(x) +^n), with coefficient (-q^−1)^j.

The inversions in those two words are v and `v+(m−j)n`, respectively. (Complement followed by reversal preserves inversion number.) Applying formula (P), and summing over all x of fixed j, proves

    (P_r tensor P_s) A(+^t)
      =sum_(j=0)^m C_j z_(r,j) tensor z_(s,m−j),
    C_j=(-q^−1)^j q^((m−j)n) Z_(m,j)
           /(Z_(r,j) Z_(s,m−j)).

Applying B to the j-th displayed tensor gives coefficient

    (-q)^(m−j) q^((m−j)n) Z_(m,j)

on +^t: B can leave the p leftmost and n rightmost positions all plus only for exactly the word pairs `(+^p x, bar(x)+^n)`. This proves, with every contraction accounted for,

    L=(-1)^m sum_(j=0)^m
         q^(m−2j+2n(m−j)) Z_(m,j)^2
           /(Z_(m+p,j) Z_(m+n,m−j))).                   (N1)

Substitute (G). The exponent contributed by the quotient of Z's is `j(n−p)−mn`, and its factorial contribution is

    [m]!^2 [m+p−j]![n+j]!
      /([m+p]![m+n]![j]![m−j]!).

Thus

    L=(-1)^m [m]!^2/([m+p]![m+n]!) S_(m,n,p),
    S_(m,n,p)=sum_(j=0)^m q^(m(n+1)−j(n+p+2))
                [m+p−j]![n+j]!/([j]![m−j]!).           (N2)

Equations (N1)–(N2) are proved evaluations of the actual bundled, projector-labelled diagram. In particular they are the missing local content that cannot be replaced by merely asserting a theta strip recurrence.

## 3. Finite q-Vandermonde, proved from geometric series

We now evaluate the finite sum, without using any theta identity. For N>=0 the formal power series identity is

    sum_(j>=0) Gaussian(N+j,j)_Q x^j
        = product_(i=0)^N (1−Q^i x)^−1.                 (H)

Here no analytic convergence is involved. For a proof, the coefficient h_(N,j) on the right obeys `h_(N,j)=h_(N−1,j)+Q^N h_(N,j−1)`, by multiplying by 1−Q^N x. The Gaussian polynomial on the left obeys exactly this recurrence by its Pascal identity `Gaussian(N+j,j)=Gaussian(N+j−1,j)+Q^N Gaussian(N+j−1,j−1)`. Both have base h_(0,j)=1 and h_(N,0)=1. This proves (H) coefficientwise; the Pascal identity itself follows at once by clearing the ordinary Q-factorial denominators, or by the same inversion-word recurrence used in (G).

Apply (H) to the two adjacent integer intervals `[-n−1,−1]` and `[0,p]`. Their union is the single interval `[-n−1,p]`. Equating coefficients of x^m in the products of the corresponding geometric series gives

    sum_(j=0)^m Q^(−j(n+1)) Gaussian(n+j,n)_Q
                 Gaussian(p+m−j,p)_Q
       =Q^(−m(n+1)) Gaussian(m+n+p+1,m)_Q.             (V)

Every coefficient on the left has been specified: the j-term comes from degree j of the negative interval and degree m−j of the nonnegative interval. The right side follows by shifting every exponent in the whole interval up by n+1 and applying (H) with N=n+p+1.

Converting the two Gaussians in (V) to symmetric quantum binomials by (G), and multiplying by `[n]![p]!`, gives exactly

    S_(m,n,p)=[n]![p]![h+1]!/([m]![n+p+1]!).          (V')

To make the exponent conversion explicit, divide the summand in (N2) by `[n]![p]!`. The two symmetric binomials are `{m+p−j choose p}` and `{n+j choose n}`. On replacing them by Gaussian polynomials their combined q-power is

    q^(m(n+1−p)) Q^(−j(n+1)).

The right side of (V), after this same prefactor, is `q^(−m(n+p+1)) Gaussian(h+1,m)_Q={h+1 choose m}`. Multiplication by `[n]![p]!` gives (V'). Hence

    L=(-1)^m [m]![n]![p]![h+1]!
                 /([m+p]![m+n]![n+p+1]!).             (L)

No source formula or uncited finite-sum summation was used.

## 4. Removing the loop sign and completing the scalar evaluation

The negative diagram has scalar

    Theta_−=(-1)^t[t+1] L                            (by D).

The positive- and negative-loop theta scalars satisfy the **diagrammatic sign identity**

    Theta_−=(-1)^h Theta.                            (S)

Here is a proof that does not presuppose their factorial evaluations. Expand all three projectors as generator words. Under `U_i→−e_i` a term with a total of v generator insertions gains coefficient sign (-1)^v. With no insertions, closing the vertex and its reflection has exactly h independent circles: m cup/cap circles plus the t=n+p through-strand closures. Inserting one cup-cap generator reconnects two edges of a closed one-manifold and changes the number of components by ±1. Therefore a term with v insertions has circle count c satisfying `c≡h+v mod2`. Evaluating its loops at −delta instead of delta gives sign (-1)^c. The combined sign is `(-1)^(v+c)=(-1)^h`, independently of the term. Summing proves (S), including terms whose loops were formed during multiplication: the same reconnection argument counts those discarded components too.

Since h+t≡m mod2, equations (L), (D), and (S) yield

    Theta=(-1)^m [t+1] L
         =[m]![n]![p]![h+1]!/([m+n]![n+p]![m+p]!),

which is (T). This also checks its normalization: at p=0 the answer is `[m+n+1]`, with no additional sign, dimension factor, or scalar attached to either trivalent vertex.

## 5. The strip recurrence, telescoping, and safe root specialization

The norm evaluation above proves, rather than assumes, the closed-diagram strip identity

    [m+p][n+p] Theta(m,n,p)
        =[p][m+n+p+1] Theta(m,n,p−1),  p>=1.          (R)

It is a genuine identity of the defined diagrams' scalar evaluations: sections1–4 derived it from their JW projector entries, nested cup/cap contractions, and the proved finite sum. Thus a missing pictorial strip manipulation is not being hidden inside the assertion. At generic q one may divide its unit factors to write

    Theta(m,n,p)/Theta(m,n,p−1)
        =[p][m+n+p+1]/([m+p][n+p]).

Together with the p=0 value `[m+n+1]`, it telescopes to

    [m+n+1] product_(j=1)^p
       [j][m+n+j+1]/([m+j][n+j])
      =[m]![n]![p]![h+1]!/([m+n]![m+p]![n+p]!).

The analogous recurrence in m or n follows from the now-proved symmetric expression, or by relabelling the three bundles in the definition. This is the requested recurrence and its full telescoping derivation; it is not used as a premise in the norm proof.

For specialization, each JW recursion coefficient is a rational Laurent function whose denominators are products of `[j]` with j<=M=max(r,s,t). Thus the actual theta diagram lies in the localization `Z[q,q^−1, [1]^−1,...,[M]^−1]`. The right side of (T) belongs to the same localization: its only denominators are `[r]![s]![t]!`. The generic identity therefore specializes at every point where those denominator units exist, even if intermediate norm formulas or a ratio of two theta values have a zero denominator there. One must specialize this localization identity, **not** divide by a theta value at the root.

For the retained root labels all denominator indices are <=ell−2. In the safe region h<=ell−2 every numerator index is <=ell−1, so the factorials are strictly positive. In the forbidden-level region h>=ell−1, the numerator `[h+1]!` is zero. Both conclusions follow without dividing by `[ell]` or taking a 0/0 limit. This includes every even ell and the ell=3 boundary.

The same unique-matching argument also identifies exactly what the theta zero means for a vertex: sandwich any planar matching from t to r+s by the three projectors. A matching with an arc joining two points on the same labelled arm is killed by its innermost turnback; the remaining matching is uniquely the m,n,p-bundled vertex. Hence the projected Hom space is spanned by alpha, and the reverse Hom space by beta, at the root as well as generically. Their entire trace pairing is therefore scalar multiplication by Theta. Nonzero Theta gives a nondegenerate vertex pairing; zero Theta makes the vertex negligible. This does not require dividing by Theta in the forbidden region, and does not assert nonexistent higher JW labels at a root.

## Integration limits

This proof establishes the general theta scalar and its exact root domain, including the zero outside the allowed level, independently of the earlier fundamental-path proof. It does not change the normalization of the latter's up/down maps, assert any acceptance stamp, or discharge unrelated full tilting or universal-ribbon construction obligations. A canonical rewrite should state the generic/unit-denominator domain first, then the retained-root nonzero/zero alternatives. The unqualified phrase “for all nonnegative labels at the root” must not be retained when a required JW projector is undefined.
