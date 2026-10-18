# Filtered shifted L-infinity Taylor morphisms and completed MC paths

Draft proof helper; no canonical items, runtime state or native evidence changed.

## Contract and conventions

Let k be a characteristic-zero field. All gradings are cohomological and the symmetry is Koszul symmetry. Write xy=(-1)^{|x||y|}yx. Work on the shifted spaces W=V[1] and Z, with decreasing positive filtrations W=F^1W and Z=F^1Z, each identified with its degreewise inverse limit over W/F^NW and Z/F^NZ. In particular they are separated. If a larger ambient algebra is given, all statements apply to its complete positive ideal F^1 provided the operations preserve that ideal. No finite dimensionality or bounded grading is required.

The degree-one maps q_n:S^nW→W, n≥1, obey

$$q_n(F^{i_1}W,\ldots,F^{i_n}W)\subset F^{i_1+\cdots+i_n}W.$$

There is no constant operation q_0. Their associated coderivation Q satisfies Q²=0. Use r_n and R on Z. A filtered Taylor morphism has degree-zero graded symmetric maps f_n:S^nW→Z, n≥1, with the same additive filtration condition, and its associated coaugmented coalgebra map F satisfies FQ=RF. The zero-constant-term requirement is essential to the statements here.

A nilpotent case means such a filtration terminates at F^NW=0 (and similarly for Z). Every complete case reduces modulo each F^N to this case. A complete case is not assumed globally nilpotent.

## 1. The completed coaugmented symmetric coalgebra

Start with C(W)=⊕_{n≥0}S^nW, including S^0W=k·1, with the usual symmetric multiplication and coproduct

$$\Delta(x_1\cdots x_n)=\sum_{I\sqcup J=\{1,\ldots,n\}}\epsilon(I,J;x)\,x_I\otimes x_J.$$

Within each subset the original order is retained, and ε is the sign for bringing the I factors before the J factors. Empty subsets are allowed. Give C(W) its total weight filtration: F^NC(W) is spanned by monomials x_1⋯x_n with x_j∈F^{i_j}W and Σi_j≥N. Scalars have weight zero. Define Ĉ(W)=lim_N C(W)/F^NC(W). Tensor products in coproduct targets are completed for the sum of weights. Multiplication, coproduct, counit and coaugmentation extend because each preserves total weight. Thus Ĉ(W) is a complete coaugmented cocommutative coalgebra and a complete commutative algebra. The projection p_W:C(W)→W extends to Ĉ(W)→W; its restriction to the length-one summand is the identity. This completion, rather than an unqualified product by symmetric arity, is what supports all infinite sums below.

For homogeneous x_1,…,x_n the coderivation determined by q_n is

$$Q(x_1\cdots x_n)=\sum_{\varnothing\ne I\subseteq\{1,\ldots,n\}}\epsilon(I,I^c;x)\,q_{|I|}(x_I)x_{I^c},\qquad Q(1)=0.$$

It is a coderivation: expanding ΔQ amounts to choosing the nonempty distinguished subset I and assigning every untouched factor to the left or right output; expanding (Q⊗1+1⊗Q)Δ makes the same choices, with the sign from moving the degree-one Q across the left output in the second summand. Both signs are the Koszul sign of the same movement of homogeneous factors and Q. Each summand preserves total weight, so Q extends continuously. The usual shifted identities are precisely p_WQ²=0. Since Q² is a coderivation (the two mixed terms cancel as Q has odd degree), the same distinguished-subset formula implies Q²=0 from its corestriction on C(W), hence on its completion. Conversely Q²=0 implies those identities by projection.

The coalgebra map determined by the f_n is F(1)=1 and

$$F(x_1\cdots x_n)=\sum_{s=1}^n\frac1{s!}\sum_{(B_1,\ldots,B_s)}\epsilon(B_1,\ldots,B_s;x)\prod_{j=1}^sf_{|B_j|}(x_{B_j}).$$

The inner sum is over ordered partitions into nonempty subsets, internally ordered as before. The coefficient 1/s! removes the order of the blocks, with Koszul signs for their graded outputs. Expanding ΔF splits the output blocks into two groups. Expanding (F⊗F)Δ first splits the input into the unions of those two groups, then partitions each group. These are the same choices; the binomial allocation factor cancels the factorials. The Koszul signs agree because each side implements the same permutation of the input factors. Hence F is a coalgebra map with p_ZF|_{S^nW}=f_n. It preserves total weight and extends uniquely continuously to Ĉ(W). The finite-length coalgebra uniqueness assertion can also be obtained inductively from the reduced coproduct: after removing the specified length-one part, the length-s part is forced by its iterated reduced coproduct, whose embedding into W^{⊗s} is injective in characteristic zero. This proves that these are the usual Taylor maps without relying on an unspecified cofree assertion for arbitrary complete coalgebras.

## 2. Exponential, curvature and the actual MC pushforward

For w∈W^0=F^1W^0 the series

$$e^w=\sum_{n\ge0}\frac{w^n}{n!}$$

converges in Ĉ(W), since the nth summand has weight at least n. All rearrangements below are finite modulo every total weight F^N; this also proves that they are valid in the complete object. In particular Δe^w=e^w⊗e^w and e^w e^{-w}=1.

Put

$$c_q(w)=\sum_{n\ge1}\frac1{n!}q_n(w^n),\qquad u=f_*(w)=\sum_{n\ge1}\frac1{n!}f_n(w^n).$$

These converge in W^1 and Z^0 and lie in F^1. Selecting the i inputs of the distinguished q_i in the coderivation formula gives binomial coefficients. Dividing by n! and summing yields

$$Q(e^w)=c_q(w)e^w.$$

For F, the ordered blocks of sizes i_1,…,i_s contribute n!/(i_1!⋯i_s!), so its partition formula yields

$$F(e^w)=\sum_{s\ge0}\frac1{s!}\left(\sum_{i\ge1}\frac{f_i(w^i)}{i!}\right)^s=e^{f_*(w)}.$$

The corresponding marked-input identity, valid for every homogeneous v∈F^pW, p≥1, is

$$F(ve^w)=\left(\sum_{n\ge0}\frac1{n!}f_{n+1}(w^n,v)\right)e^u.$$

Indeed one output block contains the marked v. Choose the n unmarked inputs in that block, apply f_{n+1}, and partition all remaining inputs into unmarked blocks. The latter sum is e^u; the former sum is the displayed factor. Since |w|=0, moving w past v or its output creates no signs. The nth summand in the marked factor has filtration at least p+n.

Apply RF=FQ to e^w and use the three identities above:

$$c_r(u)e^u=R(e^u)=F(c_q(w)e^w)=\left(\sum_{n\ge0}\frac1{n!}f_{n+1}(w^n,c_q(w))\right)e^u.$$

Multiplication by e^{-u} proves the curvature transformation formula

$$c_r(f_*(w))=\sum_{n\ge0}\frac1{n!}f_{n+1}(w^n,c_q(w)).$$

Thus c_q(w)=0 implies c_r(f_*(w))=0. This constructs an actual map MC(W)→MC(Z), not merely an operation on formal symbols. For w−v∈F^p, the telescoping multilinear expansion gives f_*(w)−f_*(v)∈F^p; the same observation applies to curvature. The map is continuous for the filtration topology.

## 3. Composition with all coefficients

Let g_n:S^nZ→T define another filtered Taylor morphism G. For a homogeneous input list x=(x_1,…,x_n), the Taylor coefficient of H=GF is

$$h_n(x)=\sum_{s=1}^n\frac1{s!}\sum_{(B_1,\ldots,B_s)}\epsilon(B_1,\ldots,B_s;x)\,g_s\bigl(f_{|B_1|}(x_{B_1}),\ldots,f_{|B_s|}(x_{B_s})\bigr).$$

This follows by projecting GF to T and using p_TG|_{S^sZ}=g_s. Every summand has degree zero and additive filtration, and GF intertwines the coderivations because G and F do. For repeated even w the formula is

$$h_n(w^n)=\sum_{s=1}^n\frac1{s!}\sum_{i_1+\cdots+i_s=n\atop i_j\ge1}\frac{n!}{i_1!\cdots i_s!}\,g_s\bigl(f_{i_1}(w^{i_1}),\ldots,f_{i_s}(w^{i_s})\bigr).$$

Substitute into Σ_n h_n(w^n)/n!. Grouping the finite sums modulo F^N gives

$$h_*(w)=\sum_{s\ge1}\frac1{s!}g_s\left(\left(\sum_{i\ge1}\frac{f_i(w^i)}{i!}\right)^s\right)=g_*(f_*(w)).$$

Equivalently, GF(e^w)=G(e^{f_*w})=e^{g_*f_*w}, and projection to T gives the same identity. The identity coalgebra map has f_1=id and f_n=0 for n>1, so identity and composition hold on actual MC sets. Associativity follows from composition of continuous coalgebra maps; it also follows directly from refinement of set partitions.

## 4. Extension to a commutative differential graded scalar algebra

For any commutative dg k-algebra A, define

$$W\widehat\otimes A=\varprojlim_N((W/F^NW)\otimes_k A).$$

Use the kernel filtration of the projections. Its quotient by that kernel is the displayed algebraic tensor product: its elements lift by lifting the finitely many W/F^N coefficients to W. In particular it is complete and separated. Tensoring over a field is exact, so each graded filtration layer is the corresponding algebraic tensor product with A. Products and all brackets extend levelwise.

Use W factors on the left of scalar factors. For homogeneous x_i∈W and a_i∈A, set

$$q_1^A(x\otimes a)=q_1(x)\otimes a+(-1)^{|x|}x\otimes d_Aa,$$

and, for n≥2,

$$q_n^A(x_1\otimes a_1,\ldots,x_n\otimes a_n)=(-1)^{\sum_{i<j}|a_i||x_j|}\,q_n(x_1,\ldots,x_n)\otimes a_1\cdots a_n.$$

The same scalar formula, without a scalar-differential summand at n=1, defines f_n^A for all n≥1. Its sign is exactly that incurred by moving each scalar a_i past every later W factor x_j before applying q_n or f_n. This fixes the convention independently of alternative placements of forms in source formulas.

Here is a verification of the identities. On tensor powers, first move the scalars to the right by the graded symmetry, then apply the W operation and multiply the scalars in their original order. This construction respects substitution: the signs of a substituted pair of operations are the sign of the composite permutation, including the sign for moving the degree-one inner q past preceding factors. Thus every term of the shifted Jacobi identity on W⊗A is the corresponding W identity times the common ordered scalar product. Those terms sum to zero. The terms containing one d_A are the graded Leibniz identity for the product of the a_i: for an operation of degree one they cancel its anticommutator with the scalar differential. More explicitly the scalar differential anticommutes with each degree-one multilinear q_n, since applying it after q_n carries the extra factor (−1)^{|q_n|}=−1 compared with applying it before q_n, after the graded Leibniz expansion. The scalar differential squares to zero. Consequently (Q^A)²=0. For the degree-zero f_n, the identical permutation/substitution argument transfers FQ=RF, while scalar differentials commute with f_n because their degree is zero. Hence F^A is a filtered Taylor morphism. These arguments are identities of finite multilinear expressions on algebraic tensors at each quotient; continuity extends them to the inverse limit.

For a dg algebra map ρ:A→B, id⊗ρ commutes with all these operations, the Taylor maps, and their MC sums. It follows, without a separate convergence claim, that

$$\rho_*(f_*^A(z))=f_*^B(\rho_*(z)).$$

Applying the results of Sections 1–3 to these extended operations proves curvature transformation, actual MC pushforward and composition over A. One can equally obtain them by finite computations modulo F^N, then pass to the inverse limit.

## 5. Polynomial paths modulo every filtration quotient

Take Ω=k[t,dt], |t|=0, |dt|=1, d(t)=dt, (dt)²=0. An element of total degree zero in W⊗̂Ω has the unique form

$$z=w(t)-a(t)dt,$$

where w(t)∈W^0⊗̂k[t] and a(t)∈W^{-1}⊗̂k[t]. The minus sign is intentional; with forms placed to the left this is z=w(t)+dt a(t). For each N both coefficient functions are polynomials with coefficients in W/F^NW, compatible under reduction. There need not be any uniform bound on their polynomial degrees. Differentiation, evaluation at λ∈k and multiplication are defined on each quotient and commute with the transition maps.

Since w has degree zero and a has degree −1, the formulas of Section 4 give

$$c_{q^\Omega}(z)=c_q(w(t))+\left(w'(t)-\sum_{n\ge0}\frac1{n!}q_{n+1}(w(t)^n,a(t))\right)dt.$$

To verify the dt coefficient, the scalar-differential part of q_1^Ω(w) is w'dt. The occurrence of −a dt in q_{n+1} contributes −q_{n+1}(w^n,a)dt; placing this input last introduces no scalar-crossing sign. Each of its n+1 possible positions gives the same value because the total degree of −a dt is zero, so the factor 1/(n+1)! becomes 1/n!. Two such occurrences vanish because (dt)²=0. Terms from differentiating a(t)dt vanish for the same reason. Therefore z is MC if and only if

$$c_q(w(t))=0,\qquad w'(t)=q_1^{w(t)}(a(t)),\qquad q_1^w(a):=\sum_{n\ge0}\frac1{n!}q_{n+1}(w^n,a).$$

This is an algebraic completed polynomial path equation. No analytic existence assertion is used or needed in this implication.

Apply f_*^Ω to z. The identical one-marked-input calculation gives

$$f_*^\Omega(z)=u(t)-b(t)dt,\qquad u(t)=f_*(w(t)),\qquad b(t)=\sum_{n\ge0}\frac1{n!}f_{n+1}(w(t)^n,a(t)).$$

Modulo F^N only n<N contributes to u and b, and each surviving term is polynomial, so these expressions are elements of the required completed tensor product. Curvature transformation over Ω proves that, whenever z is MC,

$$c_r(u(t))=0,\qquad u'(t)=r_1^{u(t)}(b(t)).$$

This is the precise gauge-path compatibility. Evaluation ev_λ:Ω→k is the dg algebra map t↦λ, dt↦0. Naturality proves

$$\operatorname{ev}_\lambda f_*^\Omega(z)=f_*(w(\lambda)).$$

In particular the path endpoints are f_*(w(0)) and f_*(w(1)). Thus f_* carries every MC polynomial path to an MC polynomial path with the prescribed image endpoints, and carries the equivalence relation generated by such paths to the same relation. This last statement requires no claim that the piecewise concatenation is itself polynomial. If the parent proof establishes the gauge-orbit/path equivalence or a rectification theorem, that conclusion then descends to its gauge quotient as well.

For successive f and g, composition over Ω gives (g∘f)_*^Ω=g_*^Ωf_*^Ω. Consequently both the point component and the dt component compose correctly. Explicitly the latter component is

$$c(t)=\sum_{j\ge0}\frac1{j!}g_{j+1}(u(t)^j,b(t))=\sum_{n\ge0}\frac1{n!}h_{n+1}(w(t)^n,a(t)).$$

This identity is also the marked-block partition formula: in each partition exactly one f block contains a. All identities hold in every nilpotent quotient and hence in the separated inverse limit. They neither identify completed polynomial paths with globally polynomial functions nor assume analytic integration.
