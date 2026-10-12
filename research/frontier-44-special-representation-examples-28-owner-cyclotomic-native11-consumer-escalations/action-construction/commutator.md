# Terminal polynomial maps and the categorical commutator

Same run, author, source and assumptions as `proof-route.md`. These are full construction bodies for the existing commutator theorem or the proposed polynomial-division helper. Source §5.2 is reconstructed below without assuming its theorem. Write δ=2d_i, h=⟨h_i,Λ−β⟩, s=(α_i|2Λ−β), A=R^Λ(β), n=|β|. Use the K_0,K_1,P,Q of the preceding construction.

## Typed diagram and actual maps

Set β'=β−α_i and treat every module involving a negative β' as zero. Define

$$U=R(\beta)e(\beta',i)\otimes_{R(\beta')}e(\beta',i)A,$$

$$V=R(\beta)e(i,\beta')\otimes_{R(\beta')}e(\beta',i)A,$$

where V uses the overlap embedding: its first tensor factor has the first i strand, its second factor is placed one position to the right in the mixed corner. Also put X=e(β,i)K_0 and Y=e(β,i)K_1. Let

$$J=F_i^\Lambda E_i^\Lambda A=Ae(\beta',i)\otimes_{R^\Lambda(\beta')}e(\beta',i)A,\quad H=E_i^\Lambda F_i^\Lambda A=e(\beta,i)R^\Lambda(\beta+\alpha_i)e(\beta,i).$$

The following square has exact rows, by the actual comparison sequences at β' and β, tensoring at β' with E_iA (projective there by the preceding projectivity theorem):

$$\begin{matrix}0\to q^sV&\xrightarrow{P'}&q^{-\delta}U&\xrightarrow{G}&q^{-\delta}J\to0\\ &\downarrow L&&\downarrow F&&\downarrow T\\0\to q^sY&\xrightarrow{P}&X&\xrightarrow{\pi}&H\to0.\end{matrix}$$

Here P' on the first factor is right multiplication by a(x_1)τ_1…τ_{n−1}; F(x⊗y)=xτ_ny; L is multiplication x⊗y↦xξ(y) in the mixed corner, with ξ placing y on positions 2,…,n+1; G is the quotient to J. Commutativity P L=F P' follows by concatenating τ_1…τ_{n−1} with τ_n and using the overlap embedding, with no braid interchange needed. T is the descended last-two-strand crossing. F is injective and has bimodule cokernel A[t], by the corrected generic same-end corner decomposition. More explicitly

$$X=F(q^{-\delta}U)\oplus A[t],\qquad C:X\to A[t]$$

is its projection, with t=x_{n+1}. L is injective and has cokernel q^{−(α_i|β)}A[t], by the opposite-end generic sequence. Its cokernel map B:Y→q^{−(α_i|β)}A[t] takes the coefficient of τ_n…τ_1. To check tensor exactness here, that generic sequence is split on the right before extension to A, as established by PBW; no flatness of A over R(β) is assumed. After multiplying the Y column by q^s, its cokernel is q^{s−(α_i|β)}A[t]=q^{δh}A[t]. All maps are (R(β),A)-bilinear; both endpoints of the cokernels factor through A on the left as well. The snake map is

$$\mathcal A:q^{\delta h}A[t]\longrightarrow A[t],\qquad \mathcal A(B(y))=C(P(y)).$$

It is well defined because C P L=C F P'=0. It is A-bilinear but generally not t-linear. This exact diagram, including the definition of B, not a citation of its number in KK, produces

$$0\to\ker\mathcal A\xrightarrow{\kappa}q^{-\delta}J\xrightarrow{T}H\to\operatorname{coker}\mathcal A\to0.$$

## Polynomial division and the recurrence

**Contract.** If p is the multiplicity of i in β, let

$$S(t)=\sum_{\nu\in I^\beta}\prod_{\nu_a=i}(t-x_a)^2e(\nu),$$

$$W(t)=\gamma(-1)^p t^{\lambda_i}\sum_{\nu\in I^\beta}\prod_{\nu_a\ne i}Q_{i,\nu_a}(t,x_a)e(\nu),$$

where γ is the scalar inverse of (−1)^p times the product of the leading coefficients of Q_{i,j}(t,x). Then S and W are central monic polynomials in A[t], of t-degrees 2p and h+2p. For k≥0, γφ_k, with φ_k=mathcal A(t^k), is exactly the monic-division quotient of t^k W by S. In particular φ_k=0 for h+k<0, while for h+k≥0 it has degree h+k and leading coefficient γ^{-1}.

**Given:** the typed diagram, the actual P/Q identities, the PBW corner decomposition, and the mixed relation τ_nx_{n+1}=x_nτ_n+1 at equal colors.

1.1 Colored symmetric polynomials are central: commute them past each τ_a. At unequal colors this interchanges variables and word idempotents, leaving the displayed sums unchanged. At equal colors the polynomial is symmetric in x_a,x_{a+1}, so its divided-difference correction is zero. This proves centrality of S,W (and of their unsquared product versions used in P/Q); no theorem about the whole center is imported. There are p equal factors in S. Homogeneity and Q1–Q4 give degree in t of the unequal product −⟨h_i,β⟩+2p, with one invertible leading scalar constant across I^β. Hence S,W are monic of the asserted degrees. [given, algebra]

1.2 Let y_k=e(β,i)τ_n…τ_1 x_1^k e(i,β)∈Y. Then B(y_k)=t^k. Use the direct decomposition of X to define unique ψ_k∈U and φ_k∈A[t] by

$$P(y_k)=F(\psi_k)+\phi_k.$$

The second component equals mathcal A(t^k) by definition. Write E:U→A for multiplication E(x⊗y)=xy. The mixed relation gives

$$F(z)x_{n+1}=F(z(x_n\otimes1))+E(z).$$

Right t-linearity of P then gives the actual recurrence

$$\psi_{k+1}=\psi_k(x_n\otimes1),\qquad \phi_{k+1}=t\phi_k+E(\psi_k).$$

For n=0, U=0 and E=0, and these equations remain valid with ψ_k=0. The ordinary tensor-Hom adjunction has unit η(c)=ce(β,i)∈H and counit ε(x⊗y)=xy on J; E is its generic counterpart. [given, algebra]

1.3 Use the preceding PQ identity on v=e(ν,i)x_{n+1}^k∈K_0. Its Q-image is g_n…g_1x_1^ke(i,ν), and its P-image is the polynomial x_{n+1}^kt^{λ_i}∏_{ν_a≠i}Q_{i,ν_a}(x_{n+1},x_a)e(ν,i). The coefficient of τ_n…τ_1 in the Q-image is

$$(-1)^pt^k\prod_{\nu_a=i}(t-x_a)^2e(\nu).$$

Indeed only choosing each crossing term in g_n…g_1 reaches that length-n transfer coset; its equal-color coefficient is −(t−x_a)^2 and each unequal coefficient is 1. Dot transport gives the displayed factors. Taking C of PQ and comparing via B yields, for every k,

$$\mathcal A(t^kS)=\gamma^{-1}t^kW.$$

Thus this key identity follows from the actual intertwiner maps, not from a source citation. [step 1.2, given, algebra]

1.4 The recurrence proves mathcal A(at)−mathcal A(a)t∈A for all a∈A[t], by expanding a in powers with right coefficients and using A-bilinearity. For a polynomial f of degree m, induction shows deg_t(mathcal A(af)−mathcal A(a)f)<m: constants give zero; for f=tg write the difference as (mathcal A(atg)−mathcal A(at)g)+(mathcal A(at)−mathcal A(a)t)g. The first term has degree <deg g and the second at most deg g. Apply this to f=S and a=t^k and use step 1.3:

$$t^kW=(\gamma\phi_k)S+r_k,\qquad \deg_t r_k<2p.$$

Monic polynomial division over any ring is unique by leading coefficients, so γφ_k is its quotient. If k+h<0 the dividend degree is below 2p and the quotient is zero; otherwise its quotient has leading coefficient 1 and degree k+h. For p=0, S=1, the remainder is zero and the same argument applies. This completes the full polynomial contract. [step 1.3, algebra] ∎

## Positive-weight terminal map

**Given:** h≥0 and the polynomial contract.

1.1 The polynomials φ_k have distinct leading degrees h+k and leading unit γ^{-1}. Thus mathcal A is injective: a nonzero finite polynomial input has a largest exponent whose output retains a nonzero leading coefficient. Iteratively subtract φ_k times the appropriate coefficient from a polynomial of degree ≥h; this terminates and leaves a unique remainder in span{1,t,…,t^{h−1}}. Therefore coker mathcal A is canonically represented by that A-bimodule. The case h=0 has zero remainder. [given, algebra]

1.2 The snake exact sequence now embeds q^{-δ}J in H with that cokernel. The inclusion of the remainder is represented in H by the polynomials e(β,i)t^k, so its map is t^kη. It is a section of the quotient. Consequently the actual isomorphism is

$$\rho_+ :q_i^{-2}F_i^\Lambda E_i^\Lambda\oplus\bigoplus_{k=0}^{h-1}q_i^{2k}\operatorname{Id}\longrightarrow E_i^\Lambda F_i^\Lambda,$$

$$(z,(c_k))\longmapsto T(z)+\sum_{k=0}^{h-1}x_{n+1}^k\eta(c_k).$$

Its inverse first takes the unique polynomial remainder in the snake cokernel, subtracts the indicated section and uses the inverse of T onto its kernel. This construction is A-bimodule linear, homogeneous (T has crossing degree −δ and t^kη degree kδ), and hence gives natural isomorphisms after tensoring every graded A-module. [step 1.1, construct, algebra] ∎

## Negative-weight terminal map

**Given:** h=−r≤0, r≥0, and the polynomial contract.

1.1 Here φ_0,…,φ_{r−1} vanish; φ_{r+k} has degree k and leading coefficient γ^{-1}. The same leading-term division shows mathcal A is surjective and its kernel is exactly q^{−δr}span{1,t,…,t^{r−1}}⊗A. The snake connecting map sends t^j to G(ψ_j). It is well defined because for j<r, P(y_j)=F(ψ_j), and it is injective by the exact snake sequence. [given, algebra]

1.2 Define component maps on q^{-δ}J by ε_j(z)=ε(z(x_n^j⊗1)), j=0,…,r−1. The source shift means this is degree-zero to q^{-δ(j+1)}A: raw ε_j has degree δj, and q^{-δ} subtracts δ from the input. For the kernel element t^l, recurrence gives

$$\varepsilon_j(G(\psi_l))=E(\psi_{l+j}).$$

Since φ_k=0 for k<r and φ_r=γ^{-1}, recurrence implies E(ψ_k)=0 for k<r−1 and E(ψ_{r−1})=γ^{-1}. Thus the r×r matrix (E(ψ_{l+j}))_{j,l=0}^{r−1} is anti-triangular, with anti-diagonal γ^{-1}; reversing the row order makes it triangular with invertible diagonal. It is an invertible A-bimodule map: solve recursively by multiplication by γ and finitely many additions; no determinant over a noncommutative ring is needed. The degrees also agree on the anti-diagonal: the kernel input t^l has degree δ(l−r), the target component j=r−1−l is shifted −δ(j+1)=δ(l−r). [step 1.1, given, algebra]

1.3 The actual map

$$\rho_-:q_i^{-2}F_i^\Lambda E_i^\Lambda\longrightarrow E_i^\Lambda F_i^\Lambda\oplus\bigoplus_{j=0}^{r-1}q_i^{-2j-2}\operatorname{Id},\quad z\longmapsto\bigl(T(z),(\varepsilon_j(z))_j\bigr)$$

is an isomorphism. If both its parts vanish, z lies in ker T and step 1.2 forces z=0. Given (w,v), lift w under the surjective T (surjectivity from coker mathcal A=0); correct the lift by the unique kernel element whose ε-vector is v minus the vector of that lift. This gives existence and independence of the chosen lift, hence an A-bimodule inverse. It is homogeneous, so tensoring yields the natural categorical isomorphism in all graded modules. For r=0 this just says T is an isomorphism. This proves both sign cases with the exact stated shifts. [step 1.2, construct, algebra] ∎

## Further mixed relation and normalization checks

For i≠j the cyclotomic quotient of the generic crossing corner still gives q^{−(α_i|α_j)}F_j^ΛE_i^Λ≅E_i^ΛF_j^Λ. To check its kernel directly, expand the cyclotomic ideal by left cosets then right cosets. Apart from the ideals generated on the left and right R(β)-blocks, the only possible term is

$$R(n,1)\tau_n\cdots\tau_1a(x_1)\tau_1\cdots\tau_nR(n,1).$$

Its (right-last j,left-last i) corner contains e(i,n)a(x_1)e(j,n)=0. Thus the generic corner isomorphism descends after extending both R(β)-actions to A. This supplies the mixed relation without assuming cyclotomic flatness.

On projectives, Eproj from β+i to β is q_i^{1−⟨h_i,Λ−β⟩}Ebasic, with Fproj=Fbasic. On representations, Erep=Ebasic and Frep from β to β+i is q_i^{1−⟨h_i,Λ−β⟩}Fbasic. At weight β, h=⟨h_i,Λ−β⟩. Thus EprojFproj multiplies the basic EF relation by q_i^{1−h}; FprojEproj has q_i^{−1−h} since its target weight is β−i, with h there h+2. The q_i^{-2} FE term therefore becomes the same normalized FprojEproj coefficient, while the identity terms become Σ_{k=0}^{h−1}q_i^{1−h+2k}=[h]_i (with signed counterpart for h≤0). The representation calculation uses the source shifts and gives the same [h]_i. Unequal-color crossing shifts cancel against the change in h_j under removing i. Both E and F are locally nilpotent: E lowers height and F uses Helper 1's vanishing. These statements establish the normalized mixed relation and nilpotence. A proof that these imply the positive quantum Serre relations, or a proved integral quantum-action supplier, remains a separate consumer obligation.

No symmetric trace or second adjunction is assumed anywhere above. The canonical rho maps are actual crossing/dot/unit/counit maps, so they are appropriate inputs for a separate Rouquier biadjunction construction; the second triangles and crossing mates are not asserted here.
