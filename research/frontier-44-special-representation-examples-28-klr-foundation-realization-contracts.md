# Four exact intrinsic supplier contracts

All contracts assume AC as inherited from the exact published topology inputs recorded in the accompanying topology-input ledger. Fix a finite loopless quiver Γ over C, numbers h_ij of arrows i→j with no restriction on parallel arrows or opposite arrows, β∈N^I, and an arbitrary coefficient field k of characteristic zero. Set a_ii=2, a_ij=−h_ij−h_ji and Q_ii=0, Q_ij(u,v)=(−1)^h_ij(u−v)^(h_ij+h_ji). The case β=0 has one empty word and algebra k. None of these suppliers depends on an original10 KLR item.

## def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators

Define E,G,F_ν,X_ν,π_ν,L_ν and d_ν exactly as in the derivation. In particular d_ν=Σ_i β_i(β_i−1)/2+Σ_{a>b}h_{ν_aν_b}. Put Z_{η,ν}=X_η×_E X_ν. Its first coordinate is categorical source; e_η A e_ν is Ext(L_η,L_ν). For homogeneous a:L_η→L_ν[n] and b:L_ν→L_ρ[m], algebra multiplication is a*b=b[n]∘a, not ordinary categorical End composition. Graded BM convolution has degree n on the component of BM degree d_η+d_ν−n.

All BM classes use the positive complex orientation. Define idempotents by diagonals, dots by diagonal cap with c_1^G(F^r/F^{r−1}), and C_{sν,ν} as the closure of the position-s stratum. Define σ_r e_ν=(−1)^(d_{sν}−dim C)[C]standard; this is −[C]standard for equal colors and (−1)^h_ij[C]standard for distinct colors. Define τ_r e_ν=σ_r e_ν for equal colors and (−1)^h_ijσ_r e_ν for distinct colors. These are chosen generator normalizations, not a change of BM orientation.

Define the intrinsic signed presentation S_Γ(β) as the free unital k-algebra on e_ν,x_r,τ_r modulo the following finite-weight relations: orthogonal word idempotents summing to1; commuting dots preserving words; τ_r e_ν=e_{s_rν}τ_r; τ_r²e_ν=Q_{ν_rν_{r+1}}(x_r,x_{r+1})e_ν; far crossings commute; distinct-color dot slides are τ_rx_t=x_{s_r(t)}τ_r; equal-color mixed relations are τ_rx_r−x_{r+1}τ_r=1 and τ_rx_{r+1}−x_rτ_r=−1; other dots commute with τ_r. The braid difference τ_{r+1}τ_rτ_{r+1}−τ_rτ_{r+1}τ_r is zero unless ν_r=ν_{r+2}, in which case it is [Q_{ν_rν_{r+1}}(x_r,x_{r+1})−Q_{ν_rν_{r+1}}(x_{r+2},x_{r+1})]/(x_{r+2}−x_r). Give S_Γ(β) the explicit grading deg e_ν=0, deg x_re_ν=2, deg τ_re_ν=−a_{ν_rν_{r+1}}. Every defining relation is homogeneous for this grading, including the polynomial braid quotient. This specialized presentation is internal and is not a replacement for the existing generic KLR definition.

Well-definedness: X_ν is a smooth vector bundle over ∏Flag(V_i), π_ν proper, and H_G^*(X_ν;k)=k[x_1,…,x_m]. The local proofs are in derivation sections1 and internal topology; elementary generators are finite classes. The definition discharges through the following theorems rather than adding cyclic dependencies.

## thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis

The convolution action on the direct sum of shifted polynomial summands is faithful. For one fixed reduced expression of every w∈S_m, the elements x_1^{c_1}⋯x_m^{c_m}τ_we_ν, c_r≥0, form a k-basis of the convolution algebra; equivalently the τ_we_ν form a free basis over the first-coordinate polynomial corners. Dots and elementary crossings generate the entire convolution algebra.

Proof: complex row-echelon orbit strata and common stable-arrow vector bundles give rank-one polynomial BM quotients and parity short exact sequences. Closure classes give lifts and hence a polynomial basis. Special torus localization is proved cellwise by Thom and Euler self-intersection; fixed pairs give matrix units, and injective G→T restriction follows from flag Leray–Hirsch. For reduced words, weighted inversion MULTISETS yield top coefficient ±1, hence triangular generation. Only incidence strata are treated; no arbitrary stable-flag fiber paving claim occurs. Exact source derivation section4 and topology appendix. This theorem uses no relations supplier, so the stated relation→faithfulness dependency is acyclic.

## thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations

The defined geometric classes satisfy every relation of S_Γ(β). They act on the polynomial summands by e_ν projection, x_r multiplication, equal crossing (1−s_r)/(x_r−x_{r+1}), and unequal crossing (x_r−x_{r+1})^h_ij s_r into the swapped word. Give the ν polynomial unit degree −d_ν and every variable degree2. The classes have degrees0,2,−a_ij respectively. Consequently the generator assignment is a graded algebra homomorphism S_Γ(β)→BM convolution. Proof: standard Thom sign calculation, explicit all-color operator identities, and the preceding PBW theorem's faithful action. Exact source derivation sections2–3; no semisimplicity is assumed.

## thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes

There is a unique graded algebra isomorphism S_Γ(β)→Ext_G^*(⊕_νπ_ν!k[d_ν],⊕_νπ_ν!k[d_ν]) with shifted multiplication a*b=b[n]∘a for homogeneous a of degree n, sending intrinsic generators to the specified diagonal, Chern and normalized elementary classes. On the η,ν component, Ext degree n equals BM degree d_η+d_ν−n. No semisimplicity or finite-type hypothesis is required.

Proof: the relations theorem gives a map; PBW triangular generation makes it surjective. Internal adjacent sorting plus mixed/square/braid reductions spans the intrinsic quotient by fixed reduced words and dots. Their geometric images are the just-proved basis, giving injectivity. Compose the exact product-compatible Ext/BM supplier. The separate original10 reviewer compares the existing R(β;Q) to this intrinsic presentation generator by generator on the same faithful shifted polynomial module, inside original10; that bridge is not a dependency of these suppliers.

Current status: complete proposed contracts and local calculations; unaccepted foundational construction and product suppliers remain required. This is not a readiness receipt, independent audit or proof-closure claim.
