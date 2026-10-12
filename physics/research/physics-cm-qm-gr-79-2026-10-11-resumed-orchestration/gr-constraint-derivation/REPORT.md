# Constraint supplier derivation and integration guard

Research only, 2026-10-11. Owning `gr78_sign_and_dust` reviewer retains supplier integration and all consumer checks. No production carrier, imports, published original mathematics, engine/control/gate or native hold was changed. `guards.json` binds the read input bytes, `before.md` preserves the original carrier, and `candidate.md` supplies the complete replacement. Rehash those inputs before integration; do not overwrite a newer repair.

The actual curvature definition orders its lowered slots as output pairing, differentiated vector, first direction, second direction:

$$\mathcal R(A,B,C,D)=g(R(C,D)B,A).$$

Thus the old L2 equality $g(R(X,Y)Z,W)=R_{abcd}X^aY^bZ^cW^d$ is false. The correct pairing is $R_{abcd}W^aZ^bX^cY^d$. Statement(a) is valid if explicitly interpreted as the lowered tensor, but false in the operator order asserted by old L2. The candidate preserves the valid lowered statement and adds the correct operator statement, eliminating ambiguity. Statement(b) is false; its sign reverses. Statements(c,d) remain valid at their full generic smooth scope.

The old proof 1.1 adds a nonexistent spatial-curvature-times-K term to $R_{0i0j}$, reverses the one-normal lowered formula, and hides signs behind “up to signs.” Proof 2.1 gives an incorrect formula for the derivative of a two-tensor. Proof 2.2 incorrectly subtracts $S/2$ from $\operatorname{Ric}_{00}$ even though $g_{00}=-1$; correct is $G_{00}=\operatorname{Ric}_{00}+S/2$. Its subsequent displayed equality also fails elementary algebra. The assertion that the divergence expression is invariant under $K\mapsto-K$ is false: it reverses. None is retained.

## Exact chart derivation

Write $g=-dt^2+h_{ij}(t,x)dx^idx^j$, $K=\frac12\dot h$, $B^i{}_j=h^{ik}K_{kj}$ and $H^i{}_{jk}$ for the Christoffel symbols of the three-dimensional metric $h(t,\cdot)$. The ambient Christoffel formula gives exactly

$$\Gamma^0{}_{ij}=K_{ij},\quad\Gamma^i{}_{0j}=B^i{}_j,\quad\Gamma^i{}_{jk}=H^i{}_{jk},\quad\Gamma^a{}_{00}=\Gamma^0{}_{0i}=0.$$

For the all-spatial components, separate the summed connection index into its spatial values and its zero value. The derivative terms and the spatial values are exactly the intrinsic curvature; the zero value contributes $B^m{}_kK_{lj}-B^m{}_lK_{kj}$. Consequently

$$R^m{}_{jkl}=(R^h)^m{}_{jkl}+B^m{}_kK_{lj}-B^m{}_lK_{kj},\qquad R_{ijkl}=R^h_{ijkl}+K_{ik}K_{jl}-K_{il}K_{jk}.$$

For the one-normal components the coordinate formula gives

$$R^0{}_{ijk}=\partial_jK_{ki}-\partial_kK_{ji}+K_{je}H^e{}_{ki}-K_{ke}H^e{}_{ji}=(D_jK)_{ki}-(D_kK)_{ji}.$$

Indeed the $H^e{}_{jk}K_{ei}$ terms cancel by torsion freedom in the difference of the two tensor derivatives. Lowering zero multiplies by minus one:

$$R_{0ijk}=(D_kK)_{ij}-(D_jK)_{ik}.$$

For two normal slots the same formula gives

$$R^0{}_{i0j}=\partial_0K_{ji}-K_{je}B^e{}_i,\qquad U_{ij}:=R_{0i0j}=K_{ik}K^k{}_j-\dot K_{ij}.$$

There is no spatial curvature term: the component formula involves only the displayed time derivative and quadratic Christoffel product in these slots. The two-normal identity is not needed for the constraints, which require only Gauss, Codazzi and finite contractions.

Set $Q=h^{ik}h^{jl}R_{ijkl}$ and $u=h^{ij}U_{ij}$. The complete contractions in the actual convention are

$$\operatorname{Ric}_{00}=u,\quad \operatorname{Ric}_{ij}=h^{kl}R_{kilj}-U_{ij},\quad h^{ij}\operatorname{Ric}_{ij}=Q-u,\quad S=Q-2u,\quad G_{00}=u+\tfrac12(Q-2u)=\tfrac12Q.$$

Gauss gives $Q=S_h+\tau^2-|K|^2$, and the one-normal contraction gives

$$\operatorname{Ric}_{0k}=h^{ij}R_{i0jk}=h^{ij}\bigl((D_jK)_{ik}-(D_kK)_{ij}\bigr)=(\operatorname{div}_hK)_k-D_k\tau=G_{0k}.$$

The field equation yields $G_{00}-\Lambda=\kappa T_{00}$ and $G_{0k}=\kappa T_{0k}$, proving the full constraints with no sign choices.

## Warped FRW witness

Take $g=-dt^2+a(t)^2\bar h$ for any smooth positive $a$, where the three-dimensional metric $\bar h$ has constant sectional curvature $k$ in the convention $\bar R_{ijkl}=k(\bar h_{ik}\bar h_{jl}-\bar h_{il}\bar h_{jk})$. Let $H=\dot a/a$. Then $h=a^2\bar h$, $K=a\dot a\bar h=Hh$, $\dot K=(\dot a^2+a\ddot a)\bar h$, and

$$R_{0i0j}=-a\ddot a\bar h_{ij},\quad R_{ijkl}=(k/a^2+H^2)(h_{ik}h_{jl}-h_{il}h_{jk}),\quad R_{0ijk}=0.$$

Thus

$$\operatorname{Ric}_{00}=-3\ddot a/a,\quad \operatorname{Ric}_{ij}=(\ddot a/a+2H^2+2k/a^2)h_{ij},\quad S=6(\ddot a/a+H^2+k/a^2),\quad G_{00}=3(H^2+k/a^2).$$

These agree with $S_h=6k/a^2$, $\tau=3H$, $|K|^2=3H^2$ and $G_{0i}=0$. This checks nonzero spatial curvature, nonzero extrinsic curvature, time derivatives, scalar sign and cancellation. For $a=e^t$, $k=0$, at $t=0$ and orthonormal spatial vectors $e_1,e_2$, direct computation gives $g(R(e_1,e_2)e_2,e_1)=1$. The old Statement(a), read in old L2's operator order with $(X,Y,Z,W)=(e_1,e_2,e_2,e_1)$, gives $-1$. Thus that interpretation is refuted. The lowered reading is valid and gives $R_{1212}=1$.

## Varying-K witness

Take on a neighborhood of $(t,x,y,z)=(0,0,0,0)$

$$g=-dt^2+e^{2tx}(dx^2+dy^2+dz^2),\qquad n=\partial_t.$$

This is a smooth Lorentzian metric with $t=0$ a spacelike embedded hypersurface. On that hypersurface $h_{ij}=\delta_{ij}$, $K_{ij}=x\delta_{ij}$ and $D$ is the flat spatial connection. At the origin $K=0$, but $D_1K_{22}=1$, $D_2K_{12}=0$. Directly in the component formula, $\partial_1\Gamma^0{}_{22}=1$, $\partial_2\Gamma^0{}_{12}=0$, and all Christoffel products vanish there; hence $R^0{}_{212}=1$, $R_{0212}=-1$, and

$$g(R(e_1,e_2)e_2,n)=-1.$$

Old Statement(b) gives $D_1K_{22}-D_2K_{12}=+1$, so it is refuted without convention ambiguity. Meanwhile $(\operatorname{div}K)_1=1$, $D_1\tau=3$, so $G_{01}=-2$; this confirms that the corrected Codazzi equation still produces the existing positive div-minus-trace momentum projection. The time-normal slots satisfy $\dot K_{ij}=2x^2\delta_{ij}$ and $K_{ik}K^k{}_j=x^2\delta_{ij}$ at $t=0$, giving $R_{0i0j}=-x^2\delta_{ij}$.

## Dependency clause map

| Supplier | Exact use |
|---|---|
| `def-gr-spacelike-hypersurfaces-and-cauchy-sets` (a) | Smooth spacelike embedded hypersurface; no Cauchy property used |
| `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form` (a)-(d), proof 6.1 | Smooth normal, positive $h$, smooth symmetric $K$, tangential shape operator, normal pairing and tangent bracket |
| `def-gr-metric-selected-connection`; `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` | Ambient torsion freedom, compatibility and tensor differentiation; induced connection existence/uniqueness is proved directly in candidate 1.1 |
| `def-gr-curvature-tensor-and-derived-tensors` (a)-(c) | Operator sign, exact lowered slots, Ricci/scalar/Einstein contraction |
| `thm-gr-curvature-tensoriality-and-coordinate-formula` (a),(b) | Pointwise tensor evaluation and coordinate substitution in Remarks; newly explicit dependency |
| `thm-gr-curvature-algebraic-symmetries` | First/last pair antisymmetry for exact contractions; newly explicit dependency |
| `def-gr-tensor-fields-and-components`; `def-gr-inverse-metric-and-musical-isomorphisms` | Trace, raised indices, tensor derivatives and contractions |
| `lem-gr-constraint-projections` (a) | Pointwise field-equation evaluations (candidate also reproduces the evaluation argument) |
| Existing `def-christoffel-symbols-of-an-affine-connection`, `def-embedded-submanifold-and-slice-chart`, `def-c-r-and-smooth-maps-between-smooth-manifolds` | Chart/regularity context; retained existing declarations |

The previous L1 incorrectly cites the normal lemma as supplying Gaussian charts; it does not. The replacement's full generic theorem is proved intrinsically and does not depend on Gaussian-coordinate existence. Its additional chart formulas are explicitly conditional on such a chart. The full old Statement is retained at corrected signs and unambiguous slot definitions, with the operator Gauss formula additionally supplied. No AC, global foliation, compactness, completeness or special matter restriction is introduced. No consumers were inspected by this agent.

## Plus-minus-minus-minus translation for integration owner

For $\gamma=-g$, the connection and curvature operator are unchanged, the lowered tensor reverses sign and Ricci is unchanged. In a $\gamma$-orthonormal frame with $\gamma_{00}=1$ and $\gamma_{ab}=-\delta_{ab}$,

$$\mathcal R^\gamma_{ABCD}=-\mathcal R^g_{ABCD},\qquad \operatorname{Ric}_{ab}=\mathcal R^\gamma_{0a0b}-\sum_c\mathcal R^\gamma_{cacb},\qquad \mathcal R^\gamma_{0a0b}=\operatorname{Ric}_{ab}+\sum_c\mathcal R^\gamma_{cacb}.$$

For spatial slots, using this report's positive $h=g|_{T\Sigma}$ and $K=g(\nabla n,\cdot)$,

$$\mathcal R^\gamma_{abcd}=-\mathcal R^h_{abcd}-K_{ac}K_{bd}+K_{ad}K_{bc}.$$

If a consumer defines $\chi=\gamma(\nabla n,\cdot)$, then $\chi=-K$, so these quadratic products are unchanged; one-normal formulas must transform with the stated definitions.

## Local verification

`witness-check.py` differentiates the full Christoffel formula directly from the explicit metric two-jets at the origin, using exact rational arithmetic and no Gauss/Codazzi input. All asserted slots and contractions pass for flat exponential FRW, curved linear FRW (nonzero spatial curvature with zero two-normal curvature), and varying-K. Results are in `witness-result.json`. This is a concrete sign check, not a substitute for the full generic derivation above.

The exact explicit-file proof-layout check passes: one candidate, six numbered steps, zero defects. Explicit-file rendercheck passes for candidate and report: two files, zero errors or warnings. No full native battery was attempted. An exploratory rendercheck `--help` invocation was interrupted after discovering that this tool has no help flag; it supplied no reported result and no verification evidence. The successful rendercheck used only the two explicit research paths.
