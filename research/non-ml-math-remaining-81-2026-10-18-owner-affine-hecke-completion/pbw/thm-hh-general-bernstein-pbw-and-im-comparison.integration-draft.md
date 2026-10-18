---
id: thm-hh-general-bernstein-pbw-and-im-comparison
kind: theorem
title: "Bernstein PBW and the Iwahori–Matsumoto presentation for a reduced root datum"
status: draft
origin: session
deps: [def-hh-affine-hecke-algebra-from-root-datum, def-hh-affine-hecke-bernstein-presentation, lem-hh-affine-hecke-im-basis, lem-hh-affine-hecke-bernstein-quotients-are-well-defined]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrich Görtz, Alcove walks and nearby cycles on affine flag manifolds"
      url: "https://arxiv.org/pdf/math/0610839"
      locator: "§§3.1–3.4, especially Theorem 3.1.1, Proposition 3.3.1 and Lemmas 3.4.1–3.4.2."
---

## Statement

Use the canonical affine geometry of a reduced based root datum $R=(X,\Phi,Y,\Phi^\vee,\Delta)$, the extended affine group $Y\rtimes W_0$, and arbitrary positive parameters invariant under its conjugation of affine simple reflections. In the exceptional relation for $\alpha\in2X$, tie $v'_\alpha$ to the parameter of the reflection across $H(\alpha,1)$. For every $y\in Y$ choose dominant $\lambda,\mu\in Y$ with $y=\lambda-\mu$ and put $\Theta_y=N_{t_\lambda}N_{t_\mu}^{-1}$. These elements are independent of the choice, satisfy $\Theta_y\Theta_z=\Theta_{y+z}$ and the full Bernstein relations, and give an injective copy of $\mathbb C[Y]$. Both families $\{\Theta_yN_w:y\in Y,w\in W_0\}$ and $\{N_w\Theta_y:y\in Y,w\in W_0\}$ are bases of the Iwahori–Matsumoto algebra. The resulting homomorphism from the formal Bernstein quotient to that algebra is an isomorphism, and both ordered families are bases of the formal quotient as well.

## Facts & Assumptions

**Given:** The canonical affine geometry, separating-wall length and Coxeter word property, and the tied parameter interface specified in `PROOF-PLAN.md`, together with the local Iwahori–Matsumoto basis. The geometric interface must be integrated/proved before this item; the old abstract-extension definition alone does not supply it.

## Proof

**Given:** The data above. The following is an integration draft retaining explicit pseudonotation from the accompanying proof plan; final mathematical typography and actual supplier links remain owner integration work.

1.1 Fix a Weyl chamber D at infinity and orient every wall toward D. For a gallery starting at the base alcove, assign `N_s` to a crossing toward D and `N_s⁻¹` to a crossing away from D; append `Uω` for its endpoint frame. All factors are units, since `N_s⁻¹=N_s−(v_s−v_s⁻¹)`. [given, algebra]

1.2 The product depends only on its framed endpoint. Here is the complete word-move argument. A backtrack has opposite signs on its two crossings and contributes 1. A braid move concerns the finite dihedral residue of the two generators. Choose a point far in D determining the orientation on its finitely many walls. Around the cycle of 2m sectors of that residue, the signs are a block of m plus signs followed by a block of m minus signs, up to cyclic rotation: project the chosen point to a plane transverse to the common codimension-two face, and the lines through the origin cut a half-plane of directions into m consecutive sectors. The product around the cycle is 1. Indeed, start at the beginning of the plus block: its m factors are one alternating braid word, and the minus block is the inverse of the other alternating braid word. The ordinary braid relation makes their product 1. A cyclic rotation also has product 1, since all factors are units. Reading the two half-cycles now gives precisely the required equality of signed braid words. Ω moves preserve the assigned parameters and transport the chosen orientation geometrically, so respect the same product. The Coxeter word property completes the independence proof. The same proof holds for galleries starting at any other framed alcove. [given, algebra]

1.3 Write `E_D(g)` for this product. On a reduced expression of length l(g), replace every inverse factor by `N_s−c_s`. The term retaining all factors is `N_g`. Every other term uses fewer than l(g) simple factors; repeated IM multiplication puts it in the span of `N_h` with l(h)<l(g). Hence [given, algebra]

1.4 `E_D(g)=N_g + Σ_{l(h)<l(g)} a_{h,g}N_h`. [given, algebra]

1.5 All sums are finite, including when Ω is infinite. Induction on the nonnegative integer length proves spanning; taking the maximal length in a finite putative dependence proves independence. Thus `{E_D(g):g∈Y⋊W0}` is a basis. This avoids any unjustified inversion of an infinite triangular matrix. [given, algebra]

2.1 Take D to be the dominant chamber and put `Θ_y=E_D(t_y)`. Translation preserves every oriented root direction, so translating a gallery for z by y leaves its signed type word unchanged. Concatenate galleries for y and z and use Supplier A, including its nonreduced-expression assertion. This gives `Θ_yΘ_z=Θ_{y+z}`, `Θ_0=1`, and `Θ_y⁻¹=Θ_{−y}`. [given, algebra]

2.2 For dominant y, every wall separating the base alcove and its translate by y is crossed in its positive direction, so `Θ_y=N_{t_y}`. Every y is λ−μ with λ,μ dominant lattice elements: take a sufficiently large integral multiple of the sum h of positive coroots and add it to y. To check the required strict dominance, a simple reflection permutes the positive coroots other than its own coroot and negates its own, so sα(h)=h−2α∨. Comparing with sα(h)=h−〈α,h〉α∨ gives 〈α,h〉=2 for every simple α. Thus h is strictly dominant in each nonempty root component. With no roots there are no inequalities. Consequently [given, algebra]

2.3 `Θ_y=N_{t_λ}N_{t_μ}⁻¹`. [given, algebra]

2.4 The construction shows directly that this formula is independent of λ,μ and that the dominant translation factors commute. It applies unchanged to arbitrary central lattice directions, whose translations are in Ω. [given, algebra]

2.5 For w∈W0, a reduced finite gallery from the dominant base alcove to w times that alcove crosses only away from the dominant chamber at infinity. Therefore `E_D(w)=N_{w⁻¹}⁻¹`. Concatenation after translation gives [given, algebra]

2.6 `E_D(t_y w)=Θ_y N_{w⁻¹}⁻¹`. [given, algebra]

2.7 The elements `N_{w⁻¹}⁻¹` form a basis of the finite Hecke algebra: expanding inverses gives `N_w` plus strictly shorter terms. Since W0 is finite, changing this basis separately for each y proves that `{Θ_y N_w:y∈Y,w∈W0}` is a basis of the IM algebra. In particular the map C[Y]→H sending θ_y to Θ_y is injective. [given, algebra]

3.1 Fix simple α, write s=sα, a=α∨, and n=〈α,y〉. Set D′=sD. The two orientations differ only on walls parallel to α: a simple reflection permutes the other positive root directions. Compare the signed gallery products for D and D′ along a minimal gallery from A to t_y A. First suppose n≥0. The separating α-walls are exactly H(α,k), 1≤k≤n, crossed positively, each once; their order along the gallery is increasing k. Let P_k^+ and P_k^- denote their factors `N_i` and `N_i⁻¹`. At each such crossing use `P_k^+−P_k^-=c(α,k)`. Expand the difference of the products by the elementary telescoping identity, taking the D-product before the deleted factor and the D′-product after it. [given, algebra]

3.2 Multiply this difference on the right by N_s. Each summand is the signed word for a gallery obtained by deleting the k-th crossing and reflecting the entire remaining tail across H(α,k). The local signs match: before that wall they are D signs, while reflection takes the D′ signs of the tail to D signs. The extra final s-crossing also has the correct D′ sign before reflection. It is a positive crossing under D′ from t_y A to t_y sA; after reflection the same assertion gives its D sign. Its framed endpoint is [given, algebra]

3.3 `r_{α,k} t_y s = t_{ka} s t_y s = t_{sy+ka}=t_{y−(n−k)a}`. [given, algebra]

3.4 Supplier A therefore identifies that summand with `c(α,k) Θ_{y−(n−k)a}`. This deletion/reflection argument works for arbitrary other crossings between the relevant α-walls; those crossings are simply carried along in the reflected tail. [given, algebra]

3.5 The D′-product for t_y is `N_s Θ_{sy} N_s⁻¹`: start with the positive D′ crossing from A to sA, reflect a D-gallery for sy, and finish with the negative D′ crossing from t_y sA to t_y A. We have proved [given, algebra]

3.6 `Θ_y N_s−N_s Θ_{sy}= Σ_{k=1}^n c(α,k) Θ_{y−(n−k)a}`. (*). [given, algebra]

3.7 For n=0 the empty sum is zero, including if the chosen gallery crosses other root directions. If α∉2X all coefficients are cα, and (*) is [given, algebra]

3.8 `cα (Θ_y−Θ_{sy})/(1−Θ_{−a})`. [given, algebra]

3.9 If α∈2X then n=2m is even. Setting j=n−k preserves parity, and (*) is [given, algebra]

3.10 `Θ_y Σ_{j=0}^{2m−1} c_j Θ_{−ja}` [given, algebra]

3.11 with c_j=cα for even j and c′α for odd j. Pairing successive terms gives exactly [given, algebra]

3.12 `(cα+Θ_{−a}c′α)(Θ_y−Θ_{sy})/(1−Θ_{−2a})`. [given, algebra]

3.13 For n<0 put z=−y, so the proved formula applies to z. If `D(y)=Θ_yN_s−N_sΘ_{sy}`, direct multiplication gives [given, algebra]

3.14 `D(y+z)=Θ_yD(z)+D(y)Θ_{sz}`. [given, algebra]

3.15 Since D(0)=0, one obtains `D(y)=−Θ_yD(−y)Θ_{sy}`. Substitution gives the same displayed quotient formulas for negative n as finite Laurent polynomials. Thus no positivity restriction on y remains. [given, algebra]

4.1 Let B be the formal Bernstein quotient with the tied parameters above. The proved cross-relations construct a homomorphism `F:B→H_IM`, sending θ_y to Θ_y and finite generators to N_s. In B every word is a finite linear combination of θ_y N_w: move each lattice factor left through a finite generator using the cross-relation, whose error term is a finite Laurent polynomial; induct on the number of finite generators and the number of lattice/finite inversions. Finite Hecke words reduce by their quadratic/braid relations to the span of the N_w. Termination is genuine because the error loses one finite generator, and the leading term reduces the inversion count. By Supplier B the images of these spanning elements form a basis of H_IM. Therefore F is both injective and surjective and `{θ_yN_w}` is a basis of B. [given, algebra]

4.2 For the other order, define an antiautomorphism of B fixing each θ_y and each N_s. The group-algebra and finite Hecke relations are stable under reversal. For the cross relation, put `R_y=c(θ)(θ_y−θ_{sy})` with the applicable common Laurent coefficient. Then R_sy=−R_y, so the original relation at sy is precisely the reversal of the original relation at y after multiplying by −1. Thus reversal preserves all defining relations and is an involution. It maps θ_y N_w to N_{w⁻¹} θ_y. Since inversion permutes W0, `{N_w θ_y}` is also a basis. Transporting this involution by F gives the corresponding second ordered basis in IM. No unsupported claim that the usual IM inversion antiinvolution fixes Bernstein translations is needed. [given, algebra]

4.3 All constructions and inductions use finite words and finite sums and require no choice principle. [given, algebra] ∎
