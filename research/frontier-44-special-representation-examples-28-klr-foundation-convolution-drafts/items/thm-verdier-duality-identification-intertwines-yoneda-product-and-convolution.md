---
id: thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution
kind: theorem
title: "Verdier-duality identification intertwines Yoneda product and oriented convolution"
status: draft
origin: session
deps: [lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports, def-equivariant-borel-moore-homology-and-correspondence-convolution, thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product, thm-constructible-six-functors-proper-base-change-and-verdier-duality, lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Geometric methods in representation theory"
      url: "https://arxiv.org/abs/math/9802004"
    - title: "Varagnolo–Vasserot, Canonical bases and KLR-algebras"
      url: "https://arxiv.org/abs/0901.3992"
    - title: "Varshavsky, Lefschetz–Verdier trace formula"
      url: "https://arxiv.org/abs/math/0505564"
---

## Statement

For the data and cornerwise maps $\Phi$ of [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]], let $\alpha:L_i\to L_j[r]$, $\beta:L_j\to L_k[s]$. With multiplication $\alpha*\beta=\beta[r]\circ\alpha$, one has
$$\Phi_{ik}^{r+s}(\beta[r]\circ\alpha)=\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta).$$
Here the right product is the external-product, refined middle-diagonal Thom intersection, proper-pushforward convolution of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]], not a product transported by definition from Ext. The map sends $\operatorname{id}_{L_i}$ to $[\Delta_{X_i}]$. Consequently the direct sum of all corners is an isomorphism of unital graded algebras with this opposite-composition convention; nonmatching corners multiply to zero.

## Facts & Assumptions

**Given:** $i,j,k,r,s,\alpha,\beta$ and the supplied foundational inputs.

[F1] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supply the projection formula, trace, coherent base-change mates and adjunction identities, and identifies the complex-oriented diagonal Thom class with its exceptional-pullback orientation.

[F2] [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] supplies descent and stabilization compatible with these operations.

[F3] [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] supplies the precise map $\Phi$.

[F4] [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] fixes the source-first convention and geometric product.

## Proof

1.1 Work first at an ordinary finite Borel approximation; suppress its common dimension offset. Write $A=Z_{ij}$, $B=Z_{jk}$, $C=Z_{ik}$, $T=T_{ijk}$; write $p:A\to X_i$, $q:A\to X_j$, $u:B\to X_j$, $v:B\to X_k$, $a:T\to A$, $b:T\to B$, $h:T\to C$, and $\ell:C\to X_i$, $m:C\to X_k$. They satisfy $qa=ub$, $pa=\ell h$, $vb=mh$. The middle square $(a,b;q,u)$ is Cartesian, and every displayed projection is proper. Put $t=r+d_j-d_i$, $w=s+d_k-d_j$. The adjoint representatives of $\Phi(\alpha)$ and $\Phi(\beta)$ are cohomological correspondences $U:q_!k_A\to k_j[t]$ and $V:v_!k_B\to k_k[w]$; their kernel forms are $\kappa:k_A\to q^!k_j[t]$ and $\lambda:k_B\to v^!k_k[w]$. [F1, F3, given]

2.1 Let $\mathrm{BC}:b_!a^*\xrightarrow{\sim}u^*q_!$ be proper base change. Form the explicit map $$W:(vb)_!k_T=v_!b_!a^*k_A\xrightarrow{v_!\mathrm{BC}}v_!u^*q_!k_A\xrightarrow{v_!u^*U}v_!k_B[t]\xrightarrow{V[t]}k_k[t+w].$$ Its adjoint $k_T\to(vb)^!k_k[t+w]$ is exactly the composite $k_T\xrightarrow{a^*\kappa}a^*q^!k_j[t]\to b^!u^*k_j[t]=b^!k_B[t]\xrightarrow{b^!\lambda[t]}(vb)^!k_k[t+w]$, where the middle arrow is the mate exchange of $\mathrm{BC}$. This equality follows by applying $(vb)_!\dashv(vb)^!$ to both maps: the defining evaluation/counit of the mate gives precisely the three arrows in $W$. No exchange isomorphism is assumed. [F1, step 1.1]

3.1 The geometric interpretation of the mate just used can be checked before pushing to $C$. Place $A\times B$ as its closed support in $X_i\times X_j\times X_j\times X_k$ and pull it back by $\operatorname{id}_{X_i}\times\Delta_{X_j}\times\operatorname{id}_{X_k}$. External product of $\kappa,\lambda$ corresponds by smooth orientation to the external dualizing class. The pulled-back diagonal is defined on this support by the exceptional-pullback exchange, contracting the two middle orientation factors. Its map is the mate of $b_!a^*\to u^*q_!$: tensor the defining adjunction evaluation with the two kernels, apply the projection formula, and contract $k_j\otimes\omega_j\to\omega_j$. Thus its dualizing representative is the map in step 2.1. To identify this with the geometric Thom normalization, restrict the ambient diagonal to a normal coordinate ball in $X_j$. The normal pair is the oriented pair $(\mathbb C^{d_j},\mathbb C^{d_j}\setminus\{0\})$, whose Thom group in degree $2d_j$ is $k$; the exceptional-pullback orientation and the complex Thom class both take value $+1$ on the ordered real coordinates $(\Re z_1,\Im z_1,\ldots,\Re z_{d_j},\Im z_{d_j})$. They are the same map on the ambient diagonal, and applying the same exchange to the closed support gives the same refined operation even when that support is singular or nontransverse. The degree drops by $2d_j$. This proves agreement with refined intersection, rather than defining intersection by Ext. [F1, F4, step 2.1]

4.1 Push the correspondence on $T$ to $C$. Its adjoint representative is $$U_C:m_!k_C\xrightarrow{m_!\eta_h}m_!h_*k_T=(vb)_!k_T\xrightarrow{W}k_k[t+w],$$ where $\eta_h:k_C\to h_*h^*k_C=h_*k_T$ is the ordinary adjunction unit and $h_*=h_!$. In kernel form this is $k_C\to h_*k_T\to h_*h^!m^!k_k[t+w]\xrightarrow{\epsilon_h}m^!k_k[t+w]$. Transitivity identifies its middle dualizing object with $\omega_T[-2d_k+t+w]$, and $\epsilon_h$ is the dualizing proper trace. Therefore step 3.1 identifies this class with $h_*\Delta_{X_j}^!(\Phi(\alpha)\boxtimes\Phi(\beta))$. [F1, F4, step 2.1, step 3.1]

5.1 For completeness check the composition square on its actual arrows. The inverse of [F3]'s chain sends $U$ to $f_{i!}k_i\xrightarrow{f_{i!}\eta_p}f_{i!}p_*k_A=f_{j!}q_!k_A\xrightarrow{f_{j!}U}f_{j!}k_j[t]$ and sends $V$ to the analogous map with $u,v$. In their composite, naturality of $\eta_u:\operatorname{id}\to u_*u^*$ moves $f_{j!}U$ past the second unit. Proper base change $u^*q_!\cong b_!a^*$ then identifies the resulting two units with $\eta_{pa}:k_i\to(pa)_*k_T$. This last identity is the Beck–Chevalley unit identity: taking its left adjoint yields $a^*p^*k_i=k_T\to k_T$ equal to the identity; both routes are identity by the two adjunction triangle equations, so the right-adjoint maps are equal. Consequently the composite is $f_{i!}k_i\xrightarrow{f_{i!}\eta_{pa}}f_{k!}(vb)_!k_T\xrightarrow{f_{k!}W}f_{k!}k_k[t+w]$. The inverse map applied to $U_C$ gives the same expression, because $pa=\ell h$ and the composed-unit formula $\eta_{\ell h}=\ell_*\eta_h\ell^*\circ\eta_\ell$ follows from the same triangle equations. This proves the entire product square commutes for arbitrary cohomological correspondences, before orientation or grading is applied. [F1, F3, step 1.1, step 2.1, step 4.1]

6.1 Restore the object shifts: $t+w=r+s+d_k-d_i$. The Borel–Moore degrees in the first and second corners are $d_i+d_j-r$ and $d_j+d_k-s$; after refined intersection they add and lose $2d_j$, leaving $d_i+d_k-r-s$. At a finite approximation, the middle dimension is $d_j+b$ and each incoming ordinary degree acquires $2b$, so the output acquires exactly $2b$ as well. All arrows commute with stabilization by [F2]. Homogeneous maps compose as $V[t]\circ U$, hence as $\beta[r]\circ\alpha$ after restoring shifts. No factors are interchanged; the normal orientation has even real degree. Thus there is no additional $(-1)^{rs}$ or dimension sign. External products follow the usual tensor Koszul convention; a permutation would have its usual sign but is absent here. [F1, F2, step 3.1, step 4.1, step 5.1]

7.1 For $i=j$, the identity inverse-correspondence is the diagonal unit: pushing $k_{\Delta X_i}$ gives the identity under the adjunction triangle equations. Its kernel is the positive complex diagonal fundamental class by the orientation check in step 3.1, so $\Phi(\operatorname{id}_{L_i})=[\Delta X_i]$. Product compatibility transfers associativity and these units from composition, and distinct corners are zero on both sides by source/target matching. A finite sum of corners has unit the sum of these diagonal classes. [F1, F3, step 3.1, step 5.1, step 6.1] ∎
