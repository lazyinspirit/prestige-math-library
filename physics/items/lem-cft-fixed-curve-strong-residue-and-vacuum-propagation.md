---
id: lem-cft-fixed-curve-strong-residue-and-vacuum-propagation
kind: lemma
title: Strong residue reconstruction and vacuum propagation on a fixed curve
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- lem-cft-fixed-curve-partial-coinvariants-finite
- lem-cft-state-field-and-residue-coordinate-covariance
- lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi
- lem-cft-locality-to-jacobi-residue-calculus
- thm-serre-duality-compact-riemann-surfaces
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-long-exact-sequence-sheaf-cohomology
- lem-cft-c2-cofinite-modules-finitely-generated
- thm-residue-theorem-compact-riemann-surface
dependency_roles:
  lem-cft-fixed-curve-partial-coinvariants-finite: mathematical-premise
  lem-cft-state-field-and-residue-coordinate-covariance: mathematical-premise
  lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  thm-serre-duality-compact-riemann-surfaces: mathematical-premise
  thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  thm-residue-theorem-compact-riemann-surface: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Gui and Zhang, Analytic Conformal Blocks I
    url: https://arxiv.org/pdf/2305.10180v4
    locator: Theorems2.41–2.42, Corollaries2.43–2.44 and double propagation2.49–2.50,
      PDFpp44–52. Only the fixed-curve and moving-extra-point versions are proved
      here, not arbitrary varying curves.
dependency_level: 4
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---


## Statement

Use the fixed curve, incoming and outgoing marks, outgoing lattice $V_{C,a}$, and residue quotient of the preceding finite-partial-coinvariant lemma. A partial block phi is a functional annihilating $J_a$. For every w in W there is a unique meromorphic section $s_{\phi ,w}$ of the dual of $V_{C,a}$, with poles only at incoming marks, whose local expansion at $x_i$ is the covector-valued series v maps to $\phi (Y_i(v,t_i)w)$. Restriction to every finite state filtration is understood. These series converge to that section.

Inserting an extra vacuum-module mark p away from the old marks gives the partial block $\psi _p(v,w)=s_{\phi ,w}(v)|_p$ in the chosen local state frame. Insertion and evaluation at the vacuum are inverse. Iterated insertion is symmetric; near a collision its OPE is exactly insertion of $Y(u,z_1-z_2)v$. These assertions depend holomorphically on the moving extra marks. No assertion about arbitrary varying curves or sewing limits is made.

## Facts & Assumptions

**Given:** The fixed curve and modules, with full AC inherited from compact-curve cohomology.

[F1] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives the compatible finite-piece auxiliary multigrading; [[lem-cft-fixed-curve-partial-coinvariants-finite]] defines the finite state lattices and their filtrations by divisor line bundles.

[F2] [[thm-residue-theorem-compact-riemann-surface]] gives zero total residue on a compact component. [[thm-serre-duality-compact-riemann-surfaces]] supplies the perfect residue pairing for divisor line bundles. [[thm-long-exact-sequence-sheaf-cohomology]] supplies the principal-part obstruction sequence.

[F3] [[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]] gives a continuous solution operator for the dbar equation on the complement of the finite harmonic obstruction for a holomorphic line bundle.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] proves full all-integer residue Jacobi. [[lem-cft-right-d-local-chiral-jacobi-from-vertex-jacobi]] proves its full localized right-D realization, including polar inputs and unit, and [[lem-cft-state-field-and-residue-coordinate-covariance]] supplies coordinate covariance.

## Proof

1.1 We first establish the needed strong-residue assertion for any finite holomorphic bundle E filtered by divisor line bundles. Such a bundle and its dual canonical twist have finite cohomology in degrees0,1 by induction through the filtration and F2. Their higher coherent cohomology vanishes: in a holomorphic frame the local Cauchy integral solves dbar in degree1, so the two-term smooth Dolbeault complex is a fine resolution on a curve. The cup/residue pairing H1(E) times H0(E* tensor K) is perfect. Indeed it is F2 for a line quotient; for an extension 0→E1→E→L→0, pair its six-term cohomology sequence with the reversed dual-extension sequence. The connecting maps are adjoint up to sign: on a Cech lift their pairing is the sum of residues of the same product, and the sign is the degree1 Leibniz sign. The outer terms are perfect by induction and the line case. Exactness and finite-dimensional linear algebra give perfection of the middle terms as well. Equivalently, apply the five lemma to these two six-term exact sequences. This proves vector duality for precisely the finite filtered bundles used below. [F1, F2, algebra]

2.1 Let D be the sum of incoming points, meeting every component, and let $s_i$ be formal E-valued Laurent series at them with finite pole bounds. Suppose their total residue pairing with every global section of E* tensor K(*D) is zero. Their finite negative principal parts define an obstruction in H1(E); pairing it with H0(E* tensor K) is exactly the assumed total residue, by the Cech description in step 1.1. Perfection makes that obstruction zero. Hence a global meromorphic section s0 with exactly those negative principal parts exists. Subtract it, leaving formal regular $h_i$. [F2, step 1.1, construct]

3.1 For an integer $L>0$ the principal-part sequence for E* tensor K(LD) identifies the principal parts of its global sections with the kernel of the connecting map into H1(E* tensor K). The residue pairing on its finite principal-part space is the perfect pairing with the L-jets of regular E-valued series. Its annihilator is the image of the transpose connecting map. By step 1.1 that image is exactly the L-jet image of H0(E). Thus the L-jets of the $h_i$ in step 2.1 are jets of a global holomorphic section $h_L$. For L sufficiently large the jet map on H0(E) is injective: the decreasing kernels stabilize in the finite-dimensional space H0(E), and their intersection is zero because a holomorphic section flat to every order at an incoming point vanishes on that component. Uniqueness for these large L forces all $h_L$ to be the same section h. Therefore $s=s0+h$ has every prescribed coefficient, and is unique. This proves strong residue reconstruction, including convergence of the original formal series. [F2, step 1.1, step 2.1, algebra]

4.1 Apply the strong-residue argument of steps 1.1–3.1 to $E=(V_{(C,\mathbf a),\le d})^*$. Its dual canonical twist is exactly the finite lattice used to define the incoming Ward action. The formal series $s_i(v)=\phi(Y_i(v,t_i)w)$ has a common finite negative cutoff on a basis of $V_{\le d}$ by module truncation. For every global dual differential $\sigma$ the total residue is $\phi(\sigma\text{ acting on }w)$, which is zero. Thus reconstruction applies. Uniqueness makes the resulting sections compatible as $d$ increases and linear in $w$. Their pole order at an outgoing point is at most $\mathrm{wt}(v)+a_j$ on a homogeneous state $v$, by the explicit outgoing lattice. Coordinate covariance is F4. [F1, F4, step 3.1, construct]

4.2 We record parameter dependence needed only for moving additional poles on this fixed curve. Reconstruction in step 3.1 is linear and continuous in the finitely many principal parts and determining jets. For poles moving in a coordinate disk, choose a fixed cutoff equal to1 on a smaller disk and support in the larger disk. The dbar of a cutoff principal part is supported in the intervening annulus and is holomorphic in the pole position as a smooth-form-valued map. Solve this dbar equation with a fixed continuous linear right inverse on its range. Such an inverse for a filtered bundle follows from F3 by induction: in a smooth splitting of an extension its dbar operator is upper triangular; solve the quotient equation first, correct its finite harmonic obstruction in the subbundle by a finite-dimensional linear choice in the space of holomorphic quotient sections, then use the subbundle solution operator. The obstruction vanishes precisely when the prescribed residue pairings vanish, by step 1.1. All these operators are fixed complex-linear continuous operators, hence preserve holomorphic parameter dependence. The remaining global holomorphic correction is obtained by a fixed finite-dimensional jet inverse from step 3.1. This proves joint holomorphy away from the moving poles; it invokes no varying-complex-structure theorem. [F2, F3, step 1.1, step 3.1, algebra]

5.1 We use normalized sphere sewing to check the Ward identity without an infinite Laurent convolution at colliding marks. Choose F1's finite-piece auxiliary multigrading on W and its restricted dual, whose vector space equals the conformal restricted dual because both gradings have finite pieces and finitely many weight cosets. For one component write its auxiliary degree operator as H. Its normalized tensor is Omega_q=sum_d $q^{d}$ sum_beta $e_{d,\beta }$ tensor $e_{d,\beta }*$; its coefficients are finite because W(d) is finite dimensional. At a node with $q=\xi $ varpi, the state differential lattice has local frames $\xi ^{L(0)}v$ dxi/xi on one branch and $-\varpi ^{L(0)}Jv$ dvarpi/varpi on the other, where $J=e^{L(1)}(-1)^{L(0)}$ on V. The exact contraction identity is $$(Y_W(\xi^{L(0)}v,\xi)\otimes1)\Omega_{\xi\varpi}=(1\otimes Y_{W'}(\varpi^{L(0)}Jv,\varpi))\Omega_{\xi\varpi}.$$ Indeed the opposite-field state operator A(varpi) satisfies $A(\varpi )\varpi ^{L(0)}J=\varpi ^{-L(0)}$, by scaling conjugation and J squared equal to1. Taking restricted transpose and using $[H,v_{n}]=(wt(v)-n-1)v_{n}$ then gives exactly the left side. For a holomorphic coefficient f(xi,varpi), $$\operatorname{Res}_{\xi=0}f(\xi,q/\xi)\frac{d\xi}{\xi}=\operatorname{Res}_{\varpi=0}f(q/\varpi,\varpi)\frac{d\varpi}{\varpi}.$$ Both sides select equal xi and varpi powers. The signs of the two differential frames therefore cancel the paired node residues. Expanding any state differential in these frames, the coefficient of $q^{n}$ has finite node pole order, at most n plus its fixed state-weight bound. Hence every coefficient Ward sum is finite, and the original block Ward identities give zero. The multicomponent argument is the same identity in each component, with commuting actions and finite multigrading pieces. This proves formal Ward preservation for this normalized sewing, without requiring analytic sewing convergence. [F1, F4, step 4.1, algebra]

6.1 Here is the specific normalized sewing that gives propagation. Attach one three-point sphere with coordinate z to the chosen incoming mark; put the old incoming module at $z=0$, its restricted dual at infinity, and V at $z=1$. Its block is (v,w,w') maps to the pairing of Y(v,1)w with w'; this is a finite sum on fixed auxiliary homogeneous w,w', by the mode-degree rule. The full residue Jacobi of F4 verifies its three-point Ward identity. For a joint incoming W, use the disjoint union of one sphere per component, putting V only on the chosen sphere; the canonical joint pairing supplies the other factors. Sewing infinity to each old incoming mark with the normalized tensors of step 5.1 gives, on auxiliary homogeneous w of degrees $d_j$ and v of weight r, $$\Big(\prod_jq_j^{d_j}\Big)q_i^r\sum_n q_i^{-n-1}\phi(Y_i(v)_{(n)}w).$$ This formula is obtained by finite dual-basis evaluation in each auxiliary multidegree, before summation. Its convergence on the punctured coordinate disks is exactly the convergence already proved in step 4.1. The resulting fibers are C with an extra point $t_i=q_i$; the displayed auxiliary and state powers are exactly its changed coordinate frames. Thus removing those invertible frame factors gives psi_p(v,w). [F1, F4, step 4.1, step 5.1, construct]

7.1 We justify testing all fiber Ward differentials in that calculation. For each fixed state stage and finite pole bounds, such a test on the moving-point curve has a meromorphic extension in q near the collision $q=0$, and after multiplication by a finite power of q extends in the node frames of step 5.1. To see this directly on the fixed C, choose a coordinate disk about $x_i$ containing $p=q$. Prescribed principal parts there are finite sums of $t^{-h}$ and $(t-q)^{-h}$. On a fixed surrounding annulus these are holomorphic in q through zero. Their cutoff dbar data are likewise holomorphic in q; the fixed right inverse and finite harmonic obstruction matrices of step 4.2 reconstruct them. Solving the finite obstruction equations uses a nonzero minor, so its inverse is meromorphic in the one variable q; a zero of that minor has finite order. Additional fixed incoming poles can be made sufficiently large that the obstruction map is surjective, by the line-filtration vanishing in F1's proof. The resulting meromorphic families span every allowed test locally away from the exceptional minors. In the sphere node frames, a finite state stage changes by only finitely many powers of q and finitely many positive Virasoro modes, so a finite power clears its remaining base pole. Step 5.1 therefore gives zero Ward identity for every such test, first as a formal series and then analytically by step 6.1's locally uniform convergence on disjoint residue circles. Spanning and the identity theorem remove the exceptional minors. Hence psi_p is a partial block when p is near an incoming mark. [F1, F4, step 4.2, step 5.1, step 6.1, algebra]

8.1 By step 4.2 the new Ward sum varies holomorphically as p moves in the punctured curve. The same fixed-curve principal-part construction in step 7.1 supplies local holomorphic families of tests spanning each fiber; no varying-complex-structure theorem is required. The identity theorem continues the zero Ward sum along the connected punctured component from an incoming disk to every permitted p. Every component has such a disk. Creation gives psi_p(1,w)=phi(w), first near an incoming point and then everywhere. [F4, step 4.1, step 4.2, step 7.1, algebra]

9.1 To prove uniqueness, let a block psi on V at p and W at the old marks vanish on 1 tensor W. Propagate it once by step 4.1, which applies to any admitted incoming module including V tensor W. For fixed w, its propagated covector section vanishes near an old incoming point, since its local coefficients are $\psi (1,Y_i(u,t)w)=0$. It therefore vanishes on that component. Its expansion near p has coefficients $\psi (Y_V(u,t)1,w)$; creation has constant term u, so psi(u,w)=0 for every u,w. This proves injectivity of vacuum evaluation. Surjectivity follows from step 8.1, so the asserted inverse isomorphism follows. [F4, step 4.1, step 8.1, algebra]

10.1 Apply the construction twice. Step 4.2 makes the result jointly holomorphic off the marked points and diagonal. Inserting either vacuum reduces it to the same single insertion; step 9.1 applied successively proves symmetry. Near the first extra point the second insertion is, by its defining local expansion in step 4.1, insertion of $Y(u,z_1-z_2)v$. Lower truncation supplies a finite diagonal pole order on every fixed pair of states. The identity continues wherever the two-point meromorphic function is defined by the same uniqueness and identity theorem. This proves the claimed double propagation and collision OPE with its precise local expansions. [F4, step 4.1, step 4.2, step 9.1, algebra] ∎
