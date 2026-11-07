---
id: thm-cft-virasoro-minimal-model-classification
kind: theorem
title: Classification and rationality of Virasoro minimal models
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 6
axiom_use: ZF + AC
deps:
  - lem-cft-virasoro-vacuum-construction-cofiniteness-and-unitarity
  - thm-cft-virasoro-kac-determinant
  - def-cft-virasoro-verma-module
  - def-cft-feigin-fuchs-oscillator-data
  - lem-cft-feigin-fuchs-virasoro-screening
  - lem-cft-fock-oscillator-duality
  - lem-state-field-reconstruction-from-local-generators
  - lem-cft-locality-to-jacobi-residue-calculus
  - thm-cft-zhu-algebra-structure-and-top-action
  - lem-cft-zhu-zero-mode-identities-on-singular-vectors
  - lem-cft-zhu-top-induction-and-forward-rationality
  - thm-cft-finitely-generated-weak-joint-modules-grading-restricted
  - thm-cft-contragredient-generalized-module
  - thm-cft-contragredient-double-dual-isomorphism
  - def-rational-vertex-algebra
  - def-ordinary-vertex-module
  - def-c2-cofinite-vertex-algebra
  - def-axiom-of-choice
  - lem-cft-virasoro-verma-pbw-basis
  - def-admissible-vertex-algebra-module
  - def-vertex-algebra-module
  - def-conformal-vertex-algebra
  - def-virasoro-algebra
  - def-cft-zhu-algebra
dependency_roles:
  lem-cft-virasoro-vacuum-construction-cofiniteness-and-unitarity: mathematical-premise
  thm-cft-virasoro-kac-determinant: mathematical-premise
  def-cft-virasoro-verma-module: mathematical-premise
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
  lem-cft-feigin-fuchs-virasoro-screening: mathematical-premise
  lem-cft-fock-oscillator-duality: mathematical-premise
  lem-state-field-reconstruction-from-local-generators: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  thm-cft-zhu-algebra-structure-and-top-action: mathematical-premise
  lem-cft-zhu-zero-mode-identities-on-singular-vectors: mathematical-premise
  lem-cft-zhu-top-induction-and-forward-rationality: mathematical-premise
  thm-cft-finitely-generated-weak-joint-modules-grading-restricted: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-double-dual-isomorphism: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-cft-virasoro-verma-pbw-basis: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  def-cft-zhu-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Weiqiang Wang, Representations of Vertex Operator Algebras and Superalgebras
      url: https://dspace.mit.edu/server/api/core/bitstreams/3ceb4121-484d-4749-aec9-cf9a1c9fe0ea/content
      locator: "Chapter 4 §4.1, printed pp. 56–63: Virasoro minimal VOA, Zhu algebra, simple-module list, rationality proof and cited Ext input."
    - title: David Ridout and Simon Wood, From Jack polynomials to minimal model spectra
      url: https://arxiv.org/pdf/1409.4847v2
      locator: "Sections 2–4, screening and vacuum-null comparison; the circular moment and its exact evaluation are proved below by integration by parts, without importing the source’s Jack or twisted-cycle results."
    - title: Paul Mnev and Nicolai Reshetikhin, Lecture Notes on Conformal Field Theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: "Chapter 7 §§7.2–7.4, printed pp. 244–253: Kac determinant, minimal models, unitarity and the distinction between chiral VOA data and full CFT data."
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras
      url: https://arxiv.org/pdf/1004.1287v2
      locator: "Chapter IV §5, printed pp. 72–77: the positive-definite Virasoro restrictions for the unitary series."
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§§4.2–4.3 and 5.1, printed pp. 55–60: determinant and minimal-series overview; the unitary table is not the general coprime classification."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice.

Let $p,q\ge2$ be coprime integers, put
$$
c_{p,q}=1-\frac{6(p-q)^2}{pq},\qquad h_{r,s}=\frac{(qr-ps)^2-(p-q)^2}{4pq},
$$
and let $L(c_{p,q},0)$ denote the simple quotient of the vacuum Virasoro
vertex operator algebra, of CFT type in the local conformal-vertex-algebra
convention. Its simple admissible modules are indexed by
$1\le r\le p-1$, $1\le s\le q-1$, modulo
$(r,s)\sim(p-r,q-s)$, and have lowest weights $h_{r,s}$. The VOA is
rational in the admissible-module convention and $C_2$-cofinite. Among
these minimal models, a positive-definite invariant Hermitian form exists
exactly in the subfamily $|p-q|=1$; unitarity is an additional structure and is
not inferred from rationality. Here unitarity means a positive-definite
Hermitian form, conjugate-linear in the first variable, on the vacuum module
with $L_n^\dagger=L_{-n}$ and $C^\dagger=C$.

## Statement references

[[thm-cft-virasoro-kac-determinant]]

[[def-cft-zhu-algebra]]

[[def-rational-vertex-algebra]]

[[def-c2-cofinite-vertex-algebra]]

## Facts & Assumptions

**Given:** The coprime parameters and module conventions of the Statement; write P(n) for the partition number and P(n)=0 for n<0. Write H for the set of the displayed h_(r,s) over the full Kac rectangle. After its calculation below, f denotes the monic Zhu polynomial (also denoted P(x) there).

[F1] [[lem-cft-virasoro-vacuum-construction-cofiniteness-and-unitarity]]: The universal vacuum algebra V^c and its simple CFT-type quotient are constructed for every c. Its proof supplies the first vacuum singular v at N=(p−1)(q−1), nondegenerate vacuum Gram matrices below N, and the nonzero pure L(−2)^(N/2) coefficient. It proves C2-cofiniteness with bound N/2 and exactly the vacuum-unitarity clause used below.

[F2] [[thm-cft-virasoro-kac-determinant]]: The all-parameter Kac determinant is proved, including coincident roots. Its proof also proves the stronger oscillator determinant det A_d(κ,t)=∏_(a,b≥1,ab≤d)(t−(κ−1−κa+b)/(2κ))^P(d−ab). This is the actual polynomial identity, including its nonzero normalization.

[F3] [[def-cft-virasoro-verma-module]]: The normalized contravariant Verma form has radical equal to the unique maximal proper submodule and has a unique simple highest-weight head. The ordered negative-mode PBW basis and finite partition dimensions are also used.

[F4] [[def-cft-feigin-fuchs-oscillator-data]]: The polynomial oscillator operators are defined for every nonzero complex parameter; we use that parameter κ=q/p, not the integer label p.

[F5] [[lem-cft-feigin-fuchs-virasoro-screening]]: The generic oscillator Virasoro commutator and diagonal degree operator hold for all nonzero complex parameters. Its integer-screening assertion is not used for the noninteger circular integral below.

[F6] [[lem-cft-fock-oscillator-duality]]: The reflected oscillator pairing is degreewise nondegenerate and transposes L(m) to L(−m), for arbitrary nonzero complex parameter. We use this assertion only, not its residue-screening transpose.

[F7] [[lem-state-field-reconstruction-from-local-generators]]: Creative translation-covariant mutually local fields with the negative-mode spanning property reconstruct the unique vertex algebra, including the finite normal-product formulas.

[F8] [[lem-cft-locality-to-jacobi-residue-calculus]]: The local mode iterate, derivative and weight identities follow from full Jacobi. The formal delta identity identifies the three expansions of a finite pole expression.

[F9] [[thm-cft-zhu-algebra-structure-and-top-action]]: The circle quotient is an associative Zhu algebra and acts by zero modes on admissible tops; the higher-circle and star identities are used below.

[F10] [[lem-cft-zhu-zero-mode-identities-on-singular-vectors]]: For every weak module, Ω consists of vectors killed by homogeneous modes of negative operator degree. Zero modes give an actual A(V)-action there, without assuming semisimple L0 or an admissible grading.

[F11] [[lem-cft-zhu-top-induction-and-forward-rationality]]: Every simple A(V)-module occurs as a protected degree-zero top of an admissible module and has a unique simple admissible quotient. Only this n=0 existence and correspondence is used; no reverse rationality criterion is assumed.

[F12] [[thm-cft-finitely-generated-weak-joint-modules-grading-restricted]]: For CFT-type C2-cofinite V, every finitely generated weak module (k=1) is grading-restricted generalized, with finite-dimensional generalized weight spaces in finitely many lower-bounded integer cosets. No rationality or prior local finiteness is assumed.

[F13] [[thm-cft-contragredient-generalized-module]]: The restricted dual of a grading-restricted generalized module is an actual module with finite generalized blocks and the opposite-coordinate action. For the conformal vector its Virasoro transpose is L_n to L_−n.

[F14] [[thm-cft-contragredient-double-dual-isomorphism]]: The finite-block evaluation map to the restricted double contragredient is a module isomorphism.

[F15] [[def-rational-vertex-algebra]]: Rationality means direct-sum decomposition in the specified admissible grading; the grading has mode shifts wt(a)−n−1 as in the admissible-module definition.

[F16] [[def-ordinary-vertex-module]]: Ordinary modules have semisimple L0, finite weight spaces and weights bounded below in real part.

[F17] [[def-c2-cofinite-vertex-algebra]]: C2(V) is the span of a_(−2)b; finite-dimensional V/C2 is the cofiniteness condition.

[F18] [[def-axiom-of-choice]]: Choice, explicitly assumed in the Statement, supplies a maximal independent family of simple submodules when passing from a sum to an internal direct sum.

[F19] [[lem-cft-virasoro-verma-pbw-basis]], [[def-virasoro-algebra]], [[def-conformal-vertex-algebra]], [[def-vertex-algebra-module]], [[def-admissible-vertex-algebra-module]] and [[def-cft-zhu-algebra]] fix the ordered PBW basis, Virasoro brackets, CFT-type grading, full module Jacobi, specified admissible grading, and the circle/star conventions.

## Proof

1.1 Normalized circular moment and an elementary contiguous identity. For an integer n≥1 and real κ>0 put z_i=e^{iθ_i} and G_κ(z)=∏_{i<j}|z_i−z_j|^{2κ}=∏_{i<j}((1−z_i/z_j)(1−z_j/z_i))^κ. [F19, given, algebra]

2.1 The branch in the second formula is its positive value on the torus. Let L_κ(F) be the integral of G_κ F over [0,2π]^n divided by the integral of G_κ. The denominator is finite and strictly positive: G_κ is continuous, bounded, nonnegative and positive off the diagonals. This defines a symmetric, simultaneous-rotation-invariant linear functional on Laurent polynomials. In particular L_κ annihilates every homogeneous Laurent polynomial of nonzero total degree. [F19, step 1.1, algebra]

3.1 For an integer s≥0 and t∈C define I_{n,s}(t) by taking the homogeneous degree ns part of ∏_i(1+z_i)^t and applying L_κ((∏z_i)^{−s}·). It is a polynomial in t of degree at most ns, because only finitely many binomial terms with total degree ns contribute. We prove I_{n,s}(t)=∏_{j=0}^{n−1}∏_{i=0}^{s−1}(t−i+jκ)/(i+1+jκ).   (A) [F19, step 2.1, algebra]

4.1 No normalization integral evaluation is needed. [F19, step 3.1, algebra]

5.1 To prove (A), first take t with Re(t)>s+1 and an integer b≥1, with a=t−b. Let M(a,b) be the unnormalized integral of W_{a,b}=G_κ∏_i(1−z_i)^a(1−z_i^{-1})^b, [F19, step 4.1, algebra]

6.1 and J_r the same integral with the elementary symmetric polynomial e_r(z) inserted, 0≤r≤n. Because b is an integer, this weight is (−1)^{nb}G_κ(∏z_i)^{−b}∏(1−z_i)^t. Choose the branch of (1−e^{iθ})^t on 0<θ<2π; it vanishes at the two endpoints under the current real-part bound. Thus integration by parts is legitimate. At the diagonals the weight vanishes as a positive power |θ_i−θ_j|^{2κ}; its first derivative is integrable since 2κ−1>−1. One can integrate off small diagonal neighborhoods and pass to the limit, with all boundary terms tending to zero. The algebraic logarithmic derivative away from these sets is z_i∂_i log W_{a,b}=−(a z_i+b)/(1−z_i)+κΣ_{j≠i}(z_i+z_j)/(z_i−z_j). [F19, step 5.1, algebra]

7.1 Apply the zero integral of Σ_i z_i∂_i((1−z_i)e_{r−1}^{(i)}W_{a,b}), where e_{r−1}^{(i)} omits z_i. The two single sums are Σ_i z_i e_{r−1}^{(i)}=r e_r and Σ_i e_{r−1}^{(i)}=(n−r+1)e_{r−1}. Pair the double sum for i,j. The identity (1−z_i)e_{r−1}^{(i)}−(1−z_j)e_{r−1}^{(j)}=−(z_i−z_j)(e_{r−1}^{(ij)}+e_{r−2}^{(ij)}) [F19, step 6.1, algebra]

8.1 removes its denominator. Summing the remaining (z_i+z_j)e_{r−1}^{(ij)} and (z_i+z_j)e_{r−2}^{(ij)} gives respectively r(n−r)e_r and (r−1)(n−r+1)e_{r−1}. Consequently r(a+1+κ(n−r))J_r=−(n−r+1)(b+κ(r−1))J_{r−1}.   (B) [F19, step 7.1, algebra]

9.1 Iterating r=1,…,n gives J_n=(−1)^n(∏_{j=0}^{n−1}(b+jκ)/(a+1+jκ))M(a,b). No division by a possibly zero integral is made. Since e_n W_{a,b}=(−1)^n W_{a+1,b−1}, we obtain M(a,b)=(∏_{j=0}^{n−1}(a+1+jκ)/(b+jκ))M(a+1,b−1). [F19, step 8.1, algebra]

10.1 Apply this b=s times, keeping a+b=t. The base M(t,0) is the normalization integral of G_κ: expand ∏(1−z_i)^t and use simultaneous rotation to kill every positive homogeneous degree. This exchange is justified by absolute convergence of the binomial series for Re(t)>0; its coefficients have size O(m^{−Re(t)−1}), as follows from the binomial coefficient ratio and the logarithm of its finite product. Rotating z_i to −z_i and using the integer s shows M(t−s,s)/M(0,0)=I_{n,s}(t). The resulting product is (A) on Re(t)>s+1. Both sides are polynomials in t (all denominators i+1+jκ are positive), so (A) holds for every complex t. [F19, step 9.1, algebra]

11.1 Explicit Heisenberg algebra, its vertex algebra and Fock modules. Let F_λ=C[y_1,y_2,…]|λ>, with a_{−m}=y_m, a_m=m∂_{y_m} for m≥1 and a_0=λ. Thus [a_m,a_l]=mδ_{m+l,0}. On F_0 take T=Σ_{m≥1}m y_{m+1}∂_{y_m}. The current a(z)=Σ_m a_m z^{−m−1} is creative and translation covariant, has locality order2, and its negative modes span F_0 on1. The local-generator reconstruction lemma F7 therefore gives the Heisenberg vertex algebra H on F_0. Repeatedly applying its normal-product formula to a single current on the left gives Y_H(a_{−r_1}⋯a_{−r_l}1,z)=:∏_j ∂^{r_j−1}a(z)/(r_j−1)!: .   (C) [F4, F5, F7, F8, F19, step 10.1, algebra]

12.1 This also defines its action on every F_λ. Here is the module verification needed for this use. A product of two normally ordered monomials is the finite sum over cross-contractions, each contraction being ∂_z^{r−1}∂_w^{s−1}(z−w)^{−2}/((r−1)!(s−1)!), [F4, F5, F7, F8, F19, step 11.1, algebra]

13.1 times the normal product of uncontracted factors. This follows by moving positive oscillator modes through the negative ones, using their scalar commutator; induction on the number moved gives all contractions with coefficient one. The contraction formula is independent of λ, since a_0 is a commuting scalar. It gives the same singular state products as on F_0; Taylor expansion of the uncontracted fields gives their iterate. The two ordered products and that iterate are thus the three expansions of the same finite pole expression, coefficientwise in auxiliary polynomial state variables. Multiplying the basic formal delta identity by this expression gives the full module Jacobi identity. Vacuum and lower truncation follow directly from (C) and the oscillator degree. This proves the Fock module structure without presupposing Virasoro induced-module classification. [F4, F5, F7, F8, F19, step 12.1, algebra]

14.1 Set α=√(2κ), β=α−2/α and ω=1/2 a_{−1}²1+β/2 a_{−2}1,    L(m)=1/2Σ_l:a_l a_{m−l}:−β(m+1)a_m/2. [F4, F5, F7, F8, F19, step 13.1, algebra]

15.1 These are exactly the actual generic Feigin–Fuchs operators after rescaling x_m=α y_m and charge λ=α t. Their local verification gives central charge c=1−3β²=13−6(κ+κ^{-1}) and L(0)=degree+λ(λ−β)/2. Thus H with this conformal vector is CFT type, and every F_λ is an admissible module, with one-dimensional top of conformal weight h_λ=λ(λ−β)/2. [F4, F5, F7, F8, F19, step 14.1, algebra]

16.1 The universal Virasoro vacuum module V^c maps to H by its conformal field. This is an injective vertex-algebra map for every κ>0. To prove injectivity, filter oscillator polynomials by ordinary polynomial length. On the vacuum, the leading quadratic term of L(−r) is q_r=1/2Σ_{i=1}^{r−1}y_i y_{r−i}. Hence a vacuum PBW word has leading symbol the product of its q_r's. The polynomials q_2,q_3,… are algebraically independent: q_2=y_1²/2 and q_r=y_1y_{r−1} plus a polynomial in earlier y's. After adjoining y_1 and localizing at y_1, one solves successively for every y_{r−1}; the field extension from the q's is algebraic, so their transcendence degree is the number of q's. Distinct PBW products are independent, beginning with their highest length; this proves the map injective. It respects all vertex products because both state-field structures are generated by the same creative Virasoro field and its iterated negative products, by the actual reconstruction proof. [F4, F5, F7, F8, F19, step 15.1, algebra]

17.1 A real circular screening identifies the actual first vacuum null. Now fix coprime p,q≥2, n=p−1, s=q−1, κ=q/p and N=ns. Put μ=−nα. Its conformal weight is h_μ=n((n+1)κ−1)=ns=N. For ρ>0 define a linear map S:F_μ→F_0 on each finite oscillator polynomial by S=L_κ[(∏z_i)^{−s} exp(αΣ_{m≥1} a_{−m}p_m(z)/m) exp(−αΣ_{m≥1}a_m p_m(z^{-1})/m)],    z_i=ρ e^{iθ_i},   (D) [F1, F2, F3, F4, F5, F6, F19, step 16.1, algebra]

18.1 where the charge label is changed to0 after the oscillator operation. On a degree-K input the annihilation exponential is finite. Rotation invariance permits only output degree K+ns, so the remaining creation component is finite as well. This proves (D) is an algebraic linear map, independent of ρ, with no unregulated infinite operator integration. [F1, F2, F3, F4, F5, F6, F19, step 17.1, algebra]

19.1 We verify directly that S commutes with all Virasoro modes. Introduce the formal exponential charge field V_α(z):F_λ→F_{λ+α}, V_α(z)=shift_α z^{αa_0}exp(αΣ_{m≥1}a_{−m}z^m/m)exp(−αΣ_{m≥1}a_m z^{−m}/m). [F1, F2, F3, F4, F5, F6, F19, step 18.1, algebra]

20.1 Its oscillator contractions with the conformal field give weight (α²−βα)/2=1, hence [F1, F2, F3, F4, F5, F6, F19, step 19.1, algebra]

21.1 L_out(m)V_α(z)−V_α(z)L_in(m)=z^{m+1}∂_zV_α(z)+(m+1)z^mV_α(z). [F1, F2, F3, F4, F5, F6, F19, step 20.1, algebra]

22.1 This identity is a coefficient computation: the quadratic current contraction contributes α²/2, the improvement contributes −βα/2, and the single current contraction gives the derivative. It is valid for arbitrary complex charge on any chosen local branch of z^{αλ}; no residue or integrality is assumed at this stage. Multiplying n such fields on F_μ, their normal-ordered scalar factor is Δ(z)^{2κ}∏z_i^{αμ}. Indeed commuting a positive exponential past a negative one produces exp(−α²Σ_{m≥1}(z_j/z_i)^m/m)=(1−z_j/z_i)^{2κ}; the intervening charge shifts supply the powers of z_i needed to form Δ(z)^{2κ}. This is initially its convergent elementary binomial expression on a radially ordered region, and each fixed input/output matrix coefficient then continues as that explicit scalar branch times a finite Laurent polynomial away from collisions. Since αμ=−2nκ and (n+1)κ=s+1, this is a constant phase times G_κ(z)∏z_i^{−s−1}. On every torus chamber choose that constant phase to obtain the positive G_κ branch of (D). Leibniz applied to the preceding mode identity gives the sum of total derivatives ∑_i∂_{z_i}(z_i^{m+1} times the full product density). [F1, F2, F3, F4, F5, F6, F19, step 21.1, algebra]

23.1 Every matrix coefficient of this density is a Laurent polynomial times G_κ∏z_i^{−s−1}; it is periodic in each θ_i because the remaining powers are integers. Integrating these total derivatives around each circle is zero. At coincident points the weight vanishes to order2κ and its first derivative is integrable; the same cutoff argument as in the circular-moment calculation makes all chamber boundary terms zero. Thus integration by parts proves L_0(m)S=S L_μ(m), for every integer m. No separate screening-cycle theorem is used. [F1, F2, F3, F4, F5, F6, F19, step 22.1, algebra]

24.1 The vector w=S|μ> is a nonzero singular vector of F_0 at oscillator degree N. For nonzero, the coefficients of the degree-N creation exponential span the symmetric homogeneous polynomials of degree N in z: they are nonzero multiples of power-sum monomials, and Newton's identities generate all symmetric polynomials. Choose a linear functional on oscillator degree N that sends that exponential component to (∏z_i)^s. Its value on w is L_κ(1)=1. Singularity follows from the just-proved commutation and the highest-vector property of |μ>. [F1, F2, F3, F4, F5, F6, F19, step 23.1, algebra]

25.1 We must identify w with the actual vacuum null v, not merely a different Fock singular vector. The stronger oscillator determinant actually proved in the current Kac theorem is det A_d(κ,t)=∏_{a,b≥1;ab≤d}(t−(κ−1−κa+b)/(2κ))^{P(d−ab)}. [F1, F2, F3, F4, F5, F6, F19, step 24.1, algebra]

26.1 The dual charge to0 is β, corresponding to t_*=(κ−1)/κ. Equality of one factor's root to t_* means κ(a+1)=b+1, so a=kp−1,b=kq−1. The first occurrence is a=p−1,b=q−1 at d=N, with multiplicityP(0)=1, and no other occurrence there. Hence the Verma-to-Fock map M(c,0)→F_β has corank exactly1 in degree N. The actual reflected oscillator pairing F_0×F_β is degreewise nondegenerate and transposes L(m) to L(−m). Every positive-degree Fock singular vector annihilates the image of this Verma map by transposing a nonempty PBW word. Thus the singular subspace of F_0 in degree N has dimension at most1. The actual primitive vacuum null v exists in V^c by the already proved vacuum determinant argument; its image in F_0 is nonzero by injectivity in the Heisenberg construction and is singular. Therefore w is a nonzero scalar multiple of that image. This uses the already proved oscillator determinant, not an assumed Feigin–Fuchs Fock-module structure theorem. [F1, F2, F3, F4, F5, F6, F19, step 25.1, algebra]

27.1 Exact zero-mode polynomial and exact ideal for the first-null quotient. Let x=[ω]. In A(V^c), for homogeneous a of weight d, translation gives [L(−1)a]=−d[a]. The star identity gives [L(−2)a]=(x+d)[a]. The higher-circle relations for ω give [L(−r−3)a]+2[L(−r−2)a]+[L(−r−1)a]=0 for r≥0. Induction therefore gives [L(−r)a]=(−1)^r((r−1)x+d)[a],    r≥1.   (E) [F1, F9, F10, F11, F17, F19, step 26.1, algebra]

28.1 Every vacuum PBW word consequently has polynomial image in x, so C[x]→A(V^c) is onto. It is injective: its action on the top of every actual Fock module F_λ is evaluation at h_λ, and the quadratic h_λ ranges over C. A polynomial vanishing in the Zhu algebra would vanish at every such top character and hence be zero. Thus the universal Zhu algebra is exactly C[x]. [F1, F9, F10, F11, F17, F19, step 27.1, algebra]

29.1 Normalize v so the coefficient of L(−2)^D1, D=N/2, is1. The accepted top-PBW-length argument shows every other term has length less than D. Formula (E) therefore makes [v]=P(x) monic of degree D. On a Fock highest vector |λ>, the zero-mode scalar of v is P(h_λ). We can compute it using w, its scalar-proportional image found above. Formula (C) sends a_{−m} to ∂^{m−1}a(z)/(m−1)!. Its top expectation on F_λ is (−1)^{m−1}λ z^{−m}. Substituting this into the finite degree-N exponential in (D) gives ⟨λ|Y_H(w,z)|λ⟩ = z^{−N} I_{n,s}(αλ), [F1, F9, F10, F11, F17, F19, step 28.1, algebra]

30.1 because Σ_{m≥1}(−1)^{m−1}u^m/m=log(1+u). The normal-ordered field formula makes this a finite polynomial coefficient calculation; the unused exponential degrees cannot contribute. Consequently P(h_λ) is a fixed nonzero scalar multiple of (A) with t=αλ. [F1, F9, F10, F11, F17, F19, step 29.1, algebra]

31.1 The roots of (A) in λ are λ_{i,j}=((j−1)−κ(i−1))/α=(1−i)α/2+(1−j)(−2/α)/2,    1≤i≤p−1, 1≤j≤q−1. [F1, F9, F10, F11, F17, F19, step 30.1, algebra]

32.1 They are distinct: equality implies p(j−j')=q(i−i'), and the strict rectangle bounds force both differences zero. The involution (i,j)→(p−i,q−j) sends λ to β−λ and has no fixed point, since p,q cannot both be even. Each paired product is (λ−λ_{i,j})(λ−(β−λ_{i,j}))=2(h_λ−h_{i,j}). Their conformal weights are h_{λ_{i,j}}=((qi−pj)^2−(p−q)^2)/(4pq), by direct substitution into λ(λ−β)/2. Distinct pairs give distinct h-values because the quadratic map has only those two preimages. Monicity then proves the exact square-free identity P(x)=∏_{[(r,s)]}(x−((qr−ps)^2−(p−q)^2)/(4pq)), [F1, F9, F10, F11, F17, F19, step 31.1, algebra]

33.1 where the classes are exactly (r,s)∼(p−r,q−s) in the full Kac rectangle. This is the desired polynomial itself, not only a necessary set of candidate roots. [F1, F9, F10, F11, F17, F19, step 32.1, algebra]

34.1 Finally put I=U(Vir)v. Because v is singular, I is spanned by finite negative-mode descendants; the universal construction proves every Virasoro-stable subspace is a vertex ideal. It has no vacuum degree and is proper. Under (E) every homogeneous descendant has Zhu image a polynomial multiple of P(x), and v itself has image P. Hence the image of I in A(V^c)=C[x] is precisely the ideal (P). Circle/star operations commute with the quotient V^c→W=V^c/I, and O(W) is the image of O(V^c). Therefore A(W)=C[x]/(P(x)). [F1, F9, F10, F11, F17, F19, step 33.1, algebra]

35.1 The same pure-L(−2) leading relation proves W C2-cofinite with dimension bound D, by the accepted PBW argument, without requiring W simple. The n=0 top induction/correspondence now supplies all D simple admissible W-modules, with exactly the Kac-table top weights. Simplicity of W, equality with the simple vacuum quotient and complete reducibility are the separate Kac–Jantzen/linkage consuming argument; they are not assumed in obtaining this exact Zhu algebra. [F1, F9, F10, F11, F17, F19, step 34.1, algebra]

36.1 Positive simple multiplicities from finite grade cuts. Fix c and a real h. Work with Virasoro modules whose L0 action is diagonal, whose weights lie in h+Z≥0, and whose weight spaces are finite dimensional. No finite total length is initially assumed. Every nonzero such module has a lowest weight λ and a highest vector there. Its cyclic module C is a quotient of M(c,λ) with nonzero top. The unique maximal proper submodule of the Verma module contains its kernel, so C has the unique simple head L(c,λ), with a one-dimensional top. [F3, F19, step 35.1, algebra]

37.1 For a real cutoff B, put d_B(M)=Σ_(λ≤B)dim M_λ, a finite nonnegative integer. Characters through B have a positive expansion in the characters of L(c,λ), λ≤B. Here is a finite construction, not an assumption of a composition theorem. Pick a lowest vector, its cyclic submodule C and its simple head L(c,λ). The exact sequences for C⊂M and rad(C)⊂C give ch M = ch L(c,λ)+ch rad(C)+ch(M/C). [F3, F19, step 36.1, algebra]

38.1 The sum of the two remaining d_B values is d_B(M)−d_B(L(c,λ)), strictly smaller whenever the chosen weight is ≤B. Repeat on those two modules. Each extraction lowers the remaining finite sum by at least one, so finitely many extractions suffice modulo weights >B. The resulting coefficients are nonnegative integers. They are unique: ch L(c,λ) has leading term z^λ with coefficient1 and no lower term, so comparison of successive coefficients in the discrete set h+Z determines every multiplicity. Consequently these multiplicities are additive on exact sequences and agree as the cutoff is increased. In particular an actual simple subquotient has positive multiplicity. Infinite sums below are used only when locally finite at each cutoff. [F3, F19, step 37.1, algebra]

39.1 The exact Jantzen sum from the Kac determinant. Take R=C[[epsilon]] and the PBW-free R-Verma module M_R=M(c,h+epsilon), with its normalized contravariant R-form. For i≥0 let F_R^i={u:<u,M_R>⊂epsilon^i R},     J^i=(F_R^i+epsilon M_R)/epsilon M_R ⊂ M(c,h). [F2, F3, F19, step 38.1, algebra]

40.1 Contravariance makes each J^i a Virasoro submodule. J^0=M(c,h), and J^1 is precisely the radical of the specialized contravariant form, hence the unique maximal proper submodule. Different grades are orthogonal, so the construction is gradewise. The degree-n Gram matrix has nonzero determinant over C((epsilon)), by the actual Kac polynomial identity. To diagonalize over R, choose a nonzero entry of minimal epsilon valuation, move it to the first diagonal place and divide by its unit. All entries are divisible by this pivot; row and column subtraction clear its row and column. Repeat on the remaining square block. This finite induction gives a diagonal matrix by invertible operations over R, with invariant orders a_1,…,a_(P(n))≥0. It follows directly that dim J^i_n = #{j:a_j≥i},     Σ_(i≥1)dim J^i_n = ord_epsilon det G_n(c,h+epsilon). [F2, F3, F19, step 39.1, algebra]

41.1 Every sum is finite in that fixed grade. In the Kac product a factor contributes its partition exponent exactly when h=h_ab(c); its dependence on epsilon is then exactly epsilon. Thus Σ_(i≥1) ch J^i       = Σ_(a,b≥1:h=h_ab(c)) ch M(c,h+ab).                 (JS) [F2, F3, F19, step 40.1, algebra]

42.1 At each cutoff only ab up to that cutoff occurs. This is an identity of completed positive characters, including ALL coincident Kac roots with their actual multiplicities. It is not inferred from a single determinant zero or an unproved embedding of the right-hand Verma modules. [F2, F3, F19, step 41.1, algebra]

43.1 Apply the positive simple-character expansions of the positive-character argument to (JS). Their uniqueness implies equality of each simple multiplicity. Since J^1=rad M and all other J^i have nonnegative multiplicities, any simple factor L(c,λ) of rad M(c,h) occurs in at least one M(c,h+ab) with h=h_ab and h+ab≤λ. Iterating this observation proves by induction on the nonnegative integer λ−h: every non-head simple factor of M(c,h) is reached by a finite chain     h_0=h, h_(j+1)=h_j+a_j b_j, h_j=h_(a_j,b_j)(c), a_j,b_j≥1.   (L) [F2, F3, F19, step 42.1, algebra]

44.1 Indeed each step increases the highest weight by a positive integer and decreases the remaining distance to λ. If the child highest weight is already λ the chain terminates at its head; otherwise its positive multiplicity lies in its radical and the induction repeats. No singular-vector uniqueness or submodule-generation claim is needed for this implication. [F2, F3, F19, step 43.1, algebra]

45.1 No minimal-table weight can occur in a minimal Verma radical. Write an arbitrary weight in this linkage orbit as H(t)=(t²−(p−q)²)/(4pq). [F2, F3, F19, step 44.1, algebra]

46.1 At a Kac edge H(t)=h_ab, aq−bp=±t and the child H(t)+ab is H(aq+bp). Its nonnegative momentum aq+bp is strictly larger than |t|. Starting from u=qr−ps, put v=qr+ps. Every edge alternates the two momentum families ±u+2kpq,        ±v+2kpq,       k∈Z.                  (O) [F2, F3, F19, step 45.1, algebra]

47.1 Here is the exact arithmetic. If aq−bp=u+2kpq, coprimality gives a=r+mp,b=s+nq with m−n=2k. Hence aq+bp=v+(m+n)pq=v+2lpq. The sign-reversed u case gives −v+2lpq. For aq−bp=v+2kpq use a=r+mp,b=−s+nq, giving u+2lpq; the remaining sign is identical with both labels negated. These four cases prove (O) inductively, with no loss of the parity information modulo2pq. [F2, F3, F19, step 46.1, algebra]

48.1 Every minimal-table momentum u'=qr'−ps' satisfies |u'|≤pq−p−q<pq. The u family in this open interval contains only u and −u, so gives the original weight. No member of the v family is a table momentum. In fact residues of v modulo p,q force (r',s')=(r,q−s), whose actual momentum is v−pq, whereas the v family is v+2kpq. Residues of −v force (r',s')=(p−r,s), whose momentum is pq−v, whereas that family is −v+2kpq. Each discrepancy is an odd multiple of pq and cannot vanish. This also handles self-reflected individual labels; no false independent sign choices modulo p and q are made. [F2, F3, F19, step 47.1, algebra]

49.1 Every nontrivial chain (L) strictly increases the highest weight. Its momentum orbit can therefore reach no table weight at all: the only table weight in the orbit is the starting one, which cannot recur under a strict increase. We obtain the exact strong-linkage conclusion needed for the repair: If h∈H, rad M(c,h) has no simple subquotient L(c,h') with h'∈H.  (SL) [F2, F3, F19, step 48.1, algebra]

50.1 Coincident table weights are only the stated reflection: equality of squares gives u'=±u, and residues force (r',s')=(r,s) or (p−r,q−s). Thus the above squarefree product has (p−1)(q−1)/2 distinct roots, as required by the target indexing. [F2, F3, F19, step 49.1, algebra]

51.1 The first vacuum singular vector generates the maximal ideal. There is a short independent proof using only the polynomial proved above RELATION f([omega])=0, not its exact-ideal equality. A proper ideal of W is graded, has zero vacuum grade, and has a lowest nonzero conformal grade n>0. Its lowest vectors are highest vectors and are in the Zhu singular space, so f(n)=0. But the largest table weight is max H = ((pq−p−q)²−(p−q)²)/(4pq) = (p−2)(q−2)/4 < N. [F1, F9, F10, F17, F19, step 50.1, algebra]

52.1 Thus n<N. The quotient W agrees with V^c below N, and the vacuum determinant proof makes every such lower vacuum Gram matrix nondegenerate. A positive-level highest vector below N would lie in the contravariant radical (transpose any nonempty negative PBW word), contradicting that nondegeneracy. Hence there is no such ideal. W is simple, so W=L(c,0), and its defining ideal U(Vir)v is exactly the maximal vacuum ideal. This uses the established equivalence between Virasoro-stable subspaces and vertex ideals in the universal vacuum construction. It does not assume that every Virasoro submodule is generated by singular vectors. [F1, F9, F10, F17, F19, step 51.1, algebra]

53.1 Alternatively, (SL) and the finite-length argument below make every cyclic highest W-module simple, including W itself with vacuum weight0. The direct grade bound above removes any need to order that conclusion after rationality. [F1, F9, F10, F17, F19, step 52.1, algebra]

54.1 Actual simple modules and finite length of finitely generated modules. The module-theoretic uses of Virasoro and W-submodules agree. Every state of W is the image of a negative Virasoro PBW word on the vacuum. Induction with the actual module iterate formula expresses each of its state modes on a fixed module vector as a finite sum of compositions of Virasoro modes. Hence every Virasoro-stable subspace of a weak W-module is stable under all W modes, and conversely stability under omega gives Virasoro stability. In particular a highest vector's Virasoro cyclic subspace is its W-cyclic submodule. [F3, F8, F10, F11, F12, F16, F19, step 53.1, algebra]

55.1 We use the supplier F12 at k=1. Its hypothesis is only CFT type and C2-cofiniteness, not simplicity, rationality or semisimple L0. Therefore every finitely generated weak W-module is grading-restricted generalized, with finite-dimensional generalized weight spaces and support in finitely many lower-bounded integer cosets. This applies to our W before or after the simplicity argument; its C2 bound comes from killing v and its proved pure L_-2 coefficient, not from simplicity. [F3, F8, F10, F11, F12, F16, F19, step 54.1, algebra]

56.1 Every nonzero grading-restricted subquotient E of such a module has a lowest-real-part generalized weight λ. Its positive Virasoro modes kill that entire block. Every homogeneous state mode of negative operator degree maps this block to a generalized weight of strictly smaller real part, which is absent by minimality. Thus this entire block is in Ω(E). Thus the actual Zhu top action applies. The relation f(L0)=0 makes λ a member of H, and squarefreeness removes the nilpotent part on this lowest block. A nonzero eigenvector there is an actual highest vector. An irreducible E is generated by it and, since W is generated by omega, is precisely the simple highest module L(c,λ). Its finite-dimensional weight spaces and lower bound make it ordinary. [F3, F8, F10, F11, F12, F16, F19, step 55.1, algebra]

57.1 For clarity finite length is not smuggled into the linkage or extension arguments. Put g(E)=Σ_(h∈H)dim E_[h]. [F3, F8, F10, F11, F12, F16, F19, step 56.1, algebra]

58.1 For a finitely generated module this is finite. Submodules and quotients inherit grading restriction; generalized weight spaces are exact, by the finite-primary projections on the locally finite L0 action. Every nonzero such subquotient has a lowest block in H by the preceding paragraph, so g is a nonnegative additive integer which is positive on every nonzero subquotient. Any proper submodule chain therefore strictly changes g. This proves finite length and a finite simple composition series. Every factor is one of the ordinary L(c,h), h∈H. [F3, F8, F10, F11, F12, F16, F19, step 57.1, algebra]

59.1 Every root h is actually realized. By the supplier F11, the one-dimensional simple A(W)-module x↦h induces a nonzero admissible module with that protected top and has a simple quotient. The preceding argument identifies its simple quotient with L(c,h). Thus the simple-module list is all of H, not an unproved subset. [F3, F8, F10, F11, F12, F16, F19, step 58.1, algebra]

60.1 We will also need the following consequence of (SL). Any W-module cyclically generated by a highest vector of weight h∈H is simple. It is a quotient C of M(c,h) with the same nonzero top. Its unique proper radical is the image of rad M(c,h). If that image were nonzero, its finite-length W composition series would contain some L(c,h') with h'∈H, violating (SL). Hence C=L(c,h). This is the required irreducibility assertion for the actual induced top modules; no complete Feigin–Fuchs braid is needed. [F3, F8, F10, F11, F12, F16, F19, step 59.1, algebra]

61.1 Every pairwise extension splits. Consider 0→L(c,h_1)→E→L(c,h_2)→0 in the grading-restricted generalized W-module category, h_1,h_2∈H. If h_1>h_2, the generalized weight-h_2 block maps isomorphically to the quotient top because the submodule has no weight there. A lift v of its top is an L0 eigenvector and all positive L_n kill it: their target weights are below both possible lowest weights. Its cyclic W-submodule is L(c,h_2) by the cyclic-module argument and maps isomorphically to the quotient, so the extension splits. Equivalently any nonzero intersection with the submodule would be an allowed simple subquotient of rad M(c,h_2), explicitly excluded by (SL). [F3, F10, F12, F13, F14, F19, step 60.1, algebra]

62.1 If h_1<h_2, take restricted contragredients. The generalized contragredient and double-dual theorems F13–F14 apply to these finite-dimensional generalized blocks and lower bounds. Weightwise finite duality is exact and reverses the extension. Each L(c,h) is self-contragredient: its nondegenerate bilinear Shapovalov form identifies it with its restricted dual, since L_n transposes to L_-n. This is a W-intertwiner because omega generates W. The dual extension now has larger submodule lowest weight and splits by the preceding case; double duality splits the original. [F3, F10, F12, F13, F14, F19, step 61.1, algebra]

63.1 If h_1=h_2=h, the two-dimensional lowest generalized block is entirely Zhu-singular. The squarefree relation f(L0)=0 makes it semisimple. Choose an eigenvector v lifting the quotient top independently of the original submodule top. It is highest. Its cyclic module has grade-h space Cv, and hence cannot meet the original simple submodule: a nonzero intersection would contain that submodule's independent grade-h top. It therefore supplies a splitting. This uses semisimplicity of the ACTUAL Zhu algebra at the common top, not an assumption of semisimplicity of the whole extension. [F3, F10, F12, F13, F14, F19, step 62.1, algebra]

64.1 Thus Ext^1 between every pair of simple W-modules is zero in the needed category. A finite-length module is then semisimple by induction on length. To justify extension splitting with a finite semisimple kernel explicitly, push out an extension by each projection of that kernel to a simple factor. Each pushout splits by the pairwise result and gives a module map from the original extension to that simple factor extending its projection. Combining these finitely many maps gives a retraction onto the entire kernel. This splits the extension and completes the induction. [F3, F10, F12, F13, F14, F19, step 63.1, algebra]

65.1 All weak modules, and the specified admissible grading. Every weak W-module is the sum of its cyclic submodules. Each is finitely generated, so the finite-length and extension arguments make it a finite direct sum of simple ordinary modules. Thus the whole module is a sum of simple ordinary submodules. Choice, already assumed in the original target, gives a maximal independent family of these simples; if its direct sum were proper, one more spanning simple not contained in it would meet it in zero and could be added. Hence the sum is an actual internal direct sum. In particular W is regular in the actual weak-module convention; this is a consequence of the proved specific minimal-model argument, not an imported general reverse Zhu criterion. [F12, F15, F16, F18, F19, step 64.1, algebra]

66.1 For the original rationality convention one must preserve a GIVEN admissible grading, not merely an underlying weak decomposition. Here is the needed compatibility directly. Give a simple ordinary summand S=L(c,h) its canonical grading S(n)=S_(h+n), n≥0. For an inclusion i:S→M into a specified admissible M=⊕M(j), define i_k on S(n) by projection of i to M(n+k). The mode-degree rule shows each i_k intertwines every mode. A nonzero one is injective and its image is a homogeneous simple submodule. A highest generator of S has only finitely many components in M's direct-sum grading, so only finitely many i_k are nonzero; these maps sum to i because they agree on that generator. Consequently M is spanned by homogeneous simple submodules. A maximal independent family of these homogeneous simples is a grading-preserving internal direct-sum decomposition, by the same maximality argument. This proves rationality in the exact specified-grading convention. [F12, F15, F16, F18, F19, step 65.1, algebra]

67.1 Thus the simple list is exactly the reflection classes of the full Kac rectangle, and the algebra is rational in the specified admissible-module convention. Its direct C2 proof was given above and in F1; it remains to identify exactly the unitary parameters. [F12, F15, F16, F18, F19, step 66.1, algebra]

68.1 The creation formula in [F19] has only nonnegative powers of $z$; comparing with $Y(\omega,z)=\sum_nL_nz^{-n-2}$ gives $L_n\mathbf1=0$ for $n\ge-1$, in particular $L_0\mathbf1=L_2\mathbf1=0$. If a positive-definite invariant Hermitian form exists, then adjointness and the bracket [F19] give $\|L_{-2}\mathbf1\|^2=\langle\mathbf1,L_2L_{-2}\mathbf1\rangle =\langle\mathbf1,[L_2,L_{-2}]\mathbf1\rangle=\frac c2\|\mathbf1\|^2$. Thus $c$ is real and nonnegative. Since coprime $p,q\ge2$ have $|p-q|\ge1$, $c_{p,q}<1$. For $c_{p,q}=0$, put $d=|p-q|$; the equation gives $pq=6d^2$. Since $\gcd(d,p)=\gcd(d,q)=1$, one has $\gcd(d,pq)=1$, so $d^2\mid pq$ forces $d=1$. For $0<c_{p,q}<1$, by F1, $c_{p,q}=1-6/(m(m+1))$ for some integer $m\ge3$, hence $pq=d^2m(m+1)$; again $\gcd(d,pq)=1$ and divisibility forces $d=1$. This proves the necessary implication using F1. Conversely, positive definiteness for $|p-q|=1$ is supplied by the explicit positive construction F1. Thus the claimed vacuum-form equivalence is proved, with no general highest-weight unitarity classification premise. [F1, F17, F18, F19, step 67.1, algebra] ∎
