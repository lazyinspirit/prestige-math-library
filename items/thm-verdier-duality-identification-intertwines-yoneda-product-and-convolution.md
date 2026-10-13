---
id: thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution
kind: theorem
title: "Verdier-duality identification intertwines Yoneda product and oriented convolution"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 25
deps: [def-axiom-of-choice, def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. Ginzburg, Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004v3; 1997 Montreal lectures (57-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/math/0505564"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the constructible
six-functor and Borel-stabilization suppliers. For the data and cornerwise maps $\Phi$ of
[[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]], let
$\alpha:L_i\to L_j[r]$ and $\beta:L_j\to L_k[s]$. With multiplication
$\alpha*\beta=\beta[r]\circ\alpha$ one has
$$\Phi_{ik}^{r+s}(\beta[r]\circ\alpha)=\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta).$$
Here the right product is the external-product, refined middle-diagonal Thom intersection,
proper-pushforward convolution of [[def-equivariant-borel-moore-homology-and-correspondence-convolution]],
not a product transported by definition from Ext. The map sends $\operatorname{id}_{L_i}$ to
$[\Delta_{X_i}]$. Consequently the direct sum of all corners is an isomorphism of unital graded
algebras with this opposite-composition convention; nonmatching corners multiply to zero.

## Facts & Assumptions

**Given:** the Axiom of Choice; the data $G,k,E,f_i:X_i\to E,d_i,Z_{ij},T_{ijk},h$ and the maps $\Phi$ of [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]]; indices $i,j,k$ and integers $r,s$; morphisms $\alpha:L_i\to L_j[r]$ and $\beta:L_j\to L_k[s]$. At an ordinary finite free Borel approximation (whose common dimension offset is suppressed in steps 1.1-5.1 and restored in step 6.1) put $A=Z_{ij}$, $B=Z_{jk}$, $C=Z_{ik}$, $T=T_{ijk}$ and write the projections $p:A\to X_i$, $q:A\to X_j$, $u:B\to X_j$, $v:B\to X_k$, $a:T\to A$, $b:T\to B$, $h:T\to C$, $\ell:C\to X_i$, $m:C\to X_k$; they satisfy $qa=ub$, $pa=\ell h$, $vb=mh$, the middle square with arrows $(a,b;q,u)$ is Cartesian, and every displayed projection is proper, being a base change of one of the proper maps $f_i$.

[F1] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] supplies the refined middle-diagonal operation, its equality with cap product by the positive complex-oriented diagonal Thom class, the exceptional-pullback exchange and its agreement with the adjunction mate of proper base change, on arbitrary closed supports and with the ordered iteration rule.

[F2] [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] fixes the source-first convention, the geometric product $a*b=h_*\Delta_{X_j}^!(a\boxtimes b)$ with its degree drop $2d_j$, the ordered coordinates, the zero rule for nonmatching indices and the corner degrees.

[F3] [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] supplies the cornerwise isomorphisms $\Phi^r_{ij}$ through the adjunction chain $\operatorname{Hom}_E(f_{i!}k_i,f_{j!}k_j[t])=\operatorname{Hom}_{X_i}(k_i,f_i^!f_{j!}k_j[t]) =\operatorname{Hom}_{Z_{ij}}(k_{Z},q^!k_j[t])$ with $t=r+d_j-d_i$, their naturality in constructible coefficient morphisms, and their compatibility with stabilization.

[F4] [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supplies, as the equivariant transport of the ordinary analytic contract of [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]], the projection formula, the dualizing proper trace, coherent base-change mates and adjunction identities, the proper base change isomorphisms $b_!a^*\cong u^*q_!$ and the equalities $h_*=h_!$, $f_{i!}=f_{i*}$ for the proper maps, and the normalized smooth orientation.

[F5] [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]] supplies descent and stabilization compatible with these operations on the stated bounded ranges, so one may compute at a finite approximation and pass to the stable value.

[A1] The Axiom of Choice is consumed exactly through [F3], [F4] and [F5]; the typed diagram chase, the mate comparison and the shift bookkeeping below are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Typed correspondences. Put $t=r+d_j-d_i$ and $w=s+d_k-d_j$. Under the chain of [F3] the maps $\alpha$ and $\beta$ correspond to kernel forms $\kappa:k_A\to q^!k_j[t]$ and $\lambda:k_B\to v^!k_k[w]$, equivalently to cohomological correspondences $U:q_!k_A\to k_j[t]$ and $V:v_!k_B\to k_k[w]$; here $k_j=k_{X_j}$ and $k_k=k_{X_k}$. The middle square $(a,b;q,u)$ is Cartesian with $qa=ub$, and the three-factor identities $pa=\ell h$, $vb=mh$ hold by construction of the triple fiber product. [given, F3]

2.1 The explicit composite. Let $\mathrm{BC}:b_!a^*\xrightarrow{\sim}u^*q_!$ be the proper base change isomorphism of [F4]. Form the map $$W:(vb)_!k_T=v_!b_!a^*k_A\xrightarrow{v_!\mathrm{BC}}v_!u^*q_!k_A\xrightarrow{v_!u^*U}v_!k_B[t]\xrightarrow{V[t]}k_k[t+w].$$ Its adjoint $k_T\to(vb)^!k_k[t+w]$ under $(vb)_!\dashv(vb)^!$ is the composite $k_T\xrightarrow{a^*\kappa}a^*q^!k_j[t]\to b^!u^*k_j[t]=b^!k_B[t]\xrightarrow{b^!\lambda[t]}(vb)^!k_k[t+w]$, in which the middle arrow is the mate exchange of $\mathrm{BC}$. The equality follows by applying the adjunction $(vb)_!\dashv(vb)^!$ to both maps: the defining evaluation of the mate reproduces exactly the three arrows of $W$, so no exchange isomorphism beyond $\mathrm{BC}$ is assumed. [F4, step 1.1]

3.1 Geometric interpretation of the mate. Put $S=A\times B$, $F=(q,u):S\to X_j\times X_j$, and $\theta:T\hookrightarrow S$. By [F1] the pulled-back positive purity counit is $g_F:\theta_*k_T[-2d_j]\to k_S$. The external dualizing class corresponding to $\kappa\boxtimes\lambda$ has degree $n+n'$, where $n=d_i+d_j-r$ and $n'=d_j+d_k-s$ by [F3]; composing it with $g_F$ and taking the adjoint under $\theta_*\dashv\theta^!$ gives a class of degree $n+n'-2d_j$ on $T$. The graph-factorization and composition-of-counits comparison proved in [F1] identifies this supported cap map with the mate in step 2.1, followed by $b^!\lambda[t]$. Thus its representative is exactly the adjoint of $W$. The purity counit, its pullback, and the mate are fixed global morphisms; the positive normal-ball generator fixes their orientation, while their equality on arbitrary supports follows from that supported adjunction comparison. [F1, F2, F3, step 2.1]

4.1 Pushing the correspondence to the third corner. Its adjoint representative is $U_C:m_!k_C\xrightarrow{m_!\eta_h}m_!h_*k_T=(vb)_!k_T\xrightarrow{W}k_k[t+w]$, where $\eta_h:k_C\to h_*h^*k_C=h_*k_T$ is the ordinary adjunction unit and $h_*=h_!$ by [F4]. In kernel form this is $k_C\to h_*k_T\to h_*h^!m^!k_k[t+w]\xrightarrow{\epsilon_h}m^!k_k[t+w]$ with $\epsilon_h$ the dualizing proper trace, and dualizing transitivity identifies the middle dualizing object with $\omega_T[-2d_k+t+w]$. Step 3.1 therefore identifies the class on $C$ represented by $U_C$ with $h_*\Delta_{X_j}^!(\Phi_{ij}^r(\alpha)\boxtimes\Phi_{jk}^s(\beta))$, which by [F2] is the convolution product $\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta)$. [F2, F4, step 2.1, step 3.1]

5.1 The composition square commutes. The inverse of the chain of [F3] sends $U$ to $f_{i!}k_i\xrightarrow{f_{i!}\eta_p}f_{i!}p_*k_A=f_{j!}q_!k_A\xrightarrow{f_{j!}U}f_{j!}k_j[t]$ and $V$ to the analogous map built from $u,v$, where $\eta_p:k_i\to p_*p^*k_i=p_*k_A$ is the adjunction unit and $f_{j!}=f_{j*}$. In the composite of these two maps, naturality of $\eta_u:\operatorname{id}\to u_*u^*$ moves $f_{j!}U$ past the second unit, and proper base change $u^*q_!\cong b_!a^*$ identifies the resulting two units with the unit $\eta_{pa}:k_i\to(pa)_*k_T$; the Beck–Chevalley unit identity is the transpose of the triangle equations under $f_{i!}\dashv f_i^!$ and $(vb)_!\dashv(vb)^!$, so both routes give the same morphism $f_{i!}k_i\xrightarrow{f_{i!}\eta_{pa}}f_{k!}(vb)_!k_T\xrightarrow{f_{k!}W}f_{k!}k_k[t+w]$. Applying the inverse map to $U_C$ gives the same expression, because $pa=\ell h$ and the composed-unit formula $\eta_{\ell h}=\ell_*\eta_h\ell^*\circ\eta_\ell$ follows from the same triangle equations. Hence the product square commutes for arbitrary cohomological correspondences, before orientation or grading is applied; this is the compatibility of products asserted in the Statement. [F3, F4, step 1.1, step 2.1, step 4.1]

6.1 Shifts, degrees and signs. Restore the object shifts: $t+w=r+s+d_k-d_i$. The corner degrees $d_i+d_j-r$ and $d_j+d_k-s$ add and lose $2d_j$ under the refined intersection, giving $d_i+d_k-r-s$, which is the corner degree of the output. At a finite approximation the middle factor has dimension $d_j+b$ and each incoming ordinary Borel–Moore degree acquires $2b$, so the output acquires exactly $2b$ and the stable equivariant degree is unchanged. Homogeneous maps compose as $V[t]\circ U$, hence as $\beta[r]\circ\alpha$ after restoring shifts, with no interchanged factors and no additional sign; the only possible sign in re-ordering the complex normal factors is $(-1)^{(2d_j)(2d_j)}=+1$, and external products follow the usual tensor Koszul convention with no permutation occurring here. [F1, F2, F5, step 3.1, step 4.1, step 5.1]

7.1 Units and the algebra statement. Let $\delta:X_i\to Z_{ii}$ be the diagonal, with $p\delta=q\delta=\operatorname{id}_{X_i}$. The cohomological correspondence for its fundamental class is $U_\delta:q_!k_{Z_{ii}}\to q_!\delta_*k_{X_i}=k_{X_i}$, induced by restriction $k_{Z_{ii}}\to\delta_*k_{X_i}$. Its inverse image under the chain [F3] is $f_{i!}k_{X_i}\to f_{i!}p_*k_{Z_{ii}}\to f_{i!}k_{X_i}$; restriction of the first unit to $\delta$ is the identity, so this composite is the identity. The adjoint kernel of $U_\delta$ is the proper trace of the positive fundamental class of $X_i$, since $\delta^!q^!k_{X_i}=k_{X_i}$. Hence $\Phi_{ii}^0(\operatorname{id}_{L_i})=\delta_*[X_i]=[\Delta_{X_i}]$, of corner degree zero. Step 5.1 transfers associativity and these units from shifted composition; the unit on the finite sum is $\sum_i[\Delta_{X_i}]$. The cornerwise bijections of [F3] therefore give the claimed unital graded algebra isomorphism, with nonmatching corners zero by [F2]. AC is inherited through [A1]. [A1, F2, F3, F4, step 3.1, step 5.1, step 6.1] ∎
