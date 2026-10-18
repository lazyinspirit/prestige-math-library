# General Bernstein PBW and Iwahori–Matsumoto comparison

This is a mathematical draft for owner integration, not a gate receipt or acceptance claim. No canonical item was changed.

## Source actually consulted

Ulrich Görtz, *Alcove walks and nearby cycles on affine flag manifolds*, full text, arXiv:math/0610839, §§2.1–2.4 and §§3.1–3.4, especially Theorem 3.1.1, Proposition 3.3.1 and Lemmas 3.4.1–3.4.2. Accessible PDF: https://arxiv.org/pdf/math/0610839. Download and extracted text are in `sources/`. Also inspected Arun Ram, *Alcove walks, Hecke algebras, spherical functions, crystals and column strict tableaux*, arXiv:math/0601343, §3. Görtz explicitly identifies and repairs the injectivity gap in extracting the presentation theorem directly from Ram. Thus the proof below starts from the proved IM basis and proves signed-word independence and triangularity before constructing Bernstein elements. The AMS Lusztig 1989 PDF endpoint returned HTTP 403; no claim is made to have read that inaccessible PDF.

The proof below supplies the calculation omitted from the short description in Görtz §3.4, for arbitrary independent positive wall parameters, rather than only powers of one indeterminate.

## Required geometric interface

Use the canonical action of `Y ⋊ W0` on `V=Y⊗R`, with hyperplanes `H(α,k)={x:〈α,x〉=k}`, and the base alcove in the dominant chamber. The affine Weyl subgroup is `Q∨⋊W0`, acting simply transitively on alcoves. The extended group stabilizer `Ω` of the base alcove gives its semidirect decomposition. For nonessential root data, alcoves are inverse images of essential alcoves under the quotient by the common root kernel; stabilizers and central translations remain part of Ω. Use framed alcoves, or equivalently endpoint group elements, so a nontrivial Ω is never identified with the identity.

The finite simple reflections have their usual Coxeter lengths; the length of an affine element counts separating hyperplanes. Every expression transforms to any other by braid moves and insertion/deletion of `ss`, with Ω conjugation moves where necessary. This follows from the ordinary Coxeter word property, already available for the canonical affine Coxeter system.

Give each affine wall H the parameter of a simple wall conjugate to its reflection. This is well defined: if two alcove faces have support H and types i,j, choose w carrying the base alcove to the second alcove after carrying the first face to the base wall; the equality `s_i w=w s_j` proves conjugacy. Any simple conjugacy needed here is inside the extended affine group, where the given parameter system is invariant.

Put `vα=v(H(α,0))`, and `v′α=v(H(α,1))` when α∈2X. This is the necessary replacement for the unattached formal extra scalar. A reflection across H(α,k) maps the walls at k−1 and k+1 to each other. Therefore the wall parameter depends at most on k modulo 2. If α∉2X, perfect integral duality gives y∈Y with 〈α,y〉 odd (otherwise α/2∈X); translation by y identifies the even and odd classes. If α∈2X, all pairings are even and these two classes may retain distinct parameters. Thus

`c(α,k):=v(H(α,k))−v(H(α,k))⁻¹`

is constantly `cα=vα−vα⁻¹` in the ordinary case and alternates `cα,c′α` for even, odd k in the exceptional case. This argument does not require classification of irreducible root systems or specifying a numbered affine Dynkin node.

## Supplier A: signed-gallery independence and its basis

Fix a Weyl chamber D at infinity and orient every wall toward D. For a gallery starting at the base alcove, assign `N_s` to a crossing toward D and `N_s⁻¹` to a crossing away from D; append `Uω` for its endpoint frame. All factors are units, since `N_s⁻¹=N_s−(v_s−v_s⁻¹)`.

The product depends only on its framed endpoint. Here is the complete word-move argument. A backtrack has opposite signs on its two crossings and contributes 1. A braid move concerns the finite dihedral residue of the two generators. Choose a point far in D determining the orientation on its finitely many walls. Around the cycle of 2m sectors of that residue, the signs are a block of m plus signs followed by a block of m minus signs, up to cyclic rotation: project the chosen point to a plane transverse to the common codimension-two face, and the lines through the origin cut a half-plane of directions into m consecutive sectors. The product around the cycle is 1. Indeed, start at the beginning of the plus block: its m factors are one alternating braid word, and the minus block is the inverse of the other alternating braid word. The ordinary braid relation makes their product 1. A cyclic rotation also has product 1, since all factors are units. Reading the two half-cycles now gives precisely the required equality of signed braid words. Ω moves preserve the assigned parameters and transport the chosen orientation geometrically, so respect the same product. The Coxeter word property completes the independence proof. The same proof holds for galleries starting at any other framed alcove.

Write `E_D(g)` for this product. On a reduced expression of length l(g), replace every inverse factor by `N_s−c_s`. The term retaining all factors is `N_g`. Every other term uses fewer than l(g) simple factors; repeated IM multiplication puts it in the span of `N_h` with l(h)<l(g). Hence

`E_D(g)=N_g + Σ_{l(h)<l(g)} a_{h,g}N_h`.

All sums are finite, including when Ω is infinite. Induction on the nonnegative integer length proves spanning; taking the maximal length in a finite putative dependence proves independence. Thus `{E_D(g):g∈Y⋊W0}` is a basis. This avoids any unjustified inversion of an infinite triangular matrix.

## Supplier B: multiplicative Bernstein translations

Take D to be the dominant chamber and put `Θ_y=E_D(t_y)`. Translation preserves every oriented root direction, so translating a gallery for z by y leaves its signed type word unchanged. Concatenate galleries for y and z and use Supplier A, including its nonreduced-expression assertion. This gives `Θ_yΘ_z=Θ_{y+z}`, `Θ_0=1`, and `Θ_y⁻¹=Θ_{−y}`.

For dominant y, every wall separating the base alcove and its translate by y is crossed in its positive direction, so `Θ_y=N_{t_y}`. Every y is λ−μ with λ,μ dominant lattice elements: take a sufficiently large integral multiple of the sum h of positive coroots and add it to y. To check the required strict dominance, a simple reflection permutes the positive coroots other than its own coroot and negates its own, so sα(h)=h−2α∨. Comparing with sα(h)=h−〈α,h〉α∨ gives 〈α,h〉=2 for every simple α. Thus h is strictly dominant in each nonempty root component. With no roots there are no inequalities. Consequently

`Θ_y=N_{t_λ}N_{t_μ}⁻¹`.

The construction shows directly that this formula is independent of λ,μ and that the dominant translation factors commute. It applies unchanged to arbitrary central lattice directions, whose translations are in Ω.

For w∈W0, a reduced finite gallery from the dominant base alcove to w times that alcove crosses only away from the dominant chamber at infinity. Therefore `E_D(w)=N_{w⁻¹}⁻¹`. Concatenation after translation gives

`E_D(t_y w)=Θ_y N_{w⁻¹}⁻¹`.

The elements `N_{w⁻¹}⁻¹` form a basis of the finite Hecke algebra: expanding inverses gives `N_w` plus strictly shorter terms. Since W0 is finite, changing this basis separately for each y proves that `{Θ_y N_w:y∈Y,w∈W0}` is a basis of the IM algebra. In particular the map C[Y]→H sending θ_y to Θ_y is injective.

## Supplier C: the full cross-relation calculation

Fix simple α, write s=sα, a=α∨, and n=〈α,y〉. Set D′=sD. The two orientations differ only on walls parallel to α: a simple reflection permutes the other positive root directions. Compare the signed gallery products for D and D′ along a minimal gallery from A to t_y A. First suppose n≥0. The separating α-walls are exactly H(α,k), 1≤k≤n, crossed positively, each once; their order along the gallery is increasing k. Let P_k^+ and P_k^- denote their factors `N_i` and `N_i⁻¹`. At each such crossing use `P_k^+−P_k^-=c(α,k)`. Expand the difference of the products by the elementary telescoping identity, taking the D-product before the deleted factor and the D′-product after it.

Multiply this difference on the right by N_s. Each summand is the signed word for a gallery obtained by deleting the k-th crossing and reflecting the entire remaining tail across H(α,k). The local signs match: before that wall they are D signs, while reflection takes the D′ signs of the tail to D signs. The extra final s-crossing also has the correct D′ sign before reflection. It is a positive crossing under D′ from t_y A to t_y sA; after reflection the same assertion gives its D sign. Its framed endpoint is

`r_{α,k} t_y s = t_{ka} s t_y s = t_{sy+ka}=t_{y−(n−k)a}`.

Supplier A therefore identifies that summand with `c(α,k) Θ_{y−(n−k)a}`. This deletion/reflection argument works for arbitrary other crossings between the relevant α-walls; those crossings are simply carried along in the reflected tail.

The D′-product for t_y is `N_s Θ_{sy} N_s⁻¹`: start with the positive D′ crossing from A to sA, reflect a D-gallery for sy, and finish with the negative D′ crossing from t_y sA to t_y A. We have proved

`Θ_y N_s−N_s Θ_{sy}= Σ_{k=1}^n c(α,k) Θ_{y−(n−k)a}`. (*).

For n=0 the empty sum is zero, including if the chosen gallery crosses other root directions. If α∉2X all coefficients are cα, and (*) is

`cα (Θ_y−Θ_{sy})/(1−Θ_{−a})`.

If α∈2X then n=2m is even. Setting j=n−k preserves parity, and (*) is

`Θ_y Σ_{j=0}^{2m−1} c_j Θ_{−ja}`

with c_j=cα for even j and c′α for odd j. Pairing successive terms gives exactly

`(cα+Θ_{−a}c′α)(Θ_y−Θ_{sy})/(1−Θ_{−2a})`.

For n<0 put z=−y, so the proved formula applies to z. If `D(y)=Θ_yN_s−N_sΘ_{sy}`, direct multiplication gives

`D(y+z)=Θ_yD(z)+D(y)Θ_{sz}`.

Since D(0)=0, one obtains `D(y)=−Θ_yD(−y)Θ_{sy}`. Substitution gives the same displayed quotient formulas for negative n as finite Laurent polynomials. Thus no positivity restriction on y remains.

## Supplier D: both PBW orders and the presentation isomorphism

Let B be the formal Bernstein quotient with the tied parameters above. The proved cross-relations construct a homomorphism `F:B→H_IM`, sending θ_y to Θ_y and finite generators to N_s. In B every word is a finite linear combination of θ_y N_w: move each lattice factor left through a finite generator using the cross-relation, whose error term is a finite Laurent polynomial; induct on the number of finite generators and the number of lattice/finite inversions. Finite Hecke words reduce by their quadratic/braid relations to the span of the N_w. Termination is genuine because the error loses one finite generator, and the leading term reduces the inversion count. By Supplier B the images of these spanning elements form a basis of H_IM. Therefore F is both injective and surjective and `{θ_yN_w}` is a basis of B.

For the other order, define an antiautomorphism of B fixing each θ_y and each N_s. The group-algebra and finite Hecke relations are stable under reversal. For the cross relation, put `R_y=c(θ)(θ_y−θ_{sy})` with the applicable common Laurent coefficient. Then R_sy=−R_y, so the original relation at sy is precisely the reversal of the original relation at y after multiplying by −1. Thus reversal preserves all defining relations and is an involution. It maps θ_y N_w to N_{w⁻¹} θ_y. Since inversion permutes W0, `{N_w θ_y}` is also a basis. Transporting this involution by F gives the corresponding second ordered basis in IM. No unsupported claim that the usual IM inversion antiinvolution fixes Bernstein translations is needed.

All constructions and inductions use finite words and finite sums and require no choice principle.
