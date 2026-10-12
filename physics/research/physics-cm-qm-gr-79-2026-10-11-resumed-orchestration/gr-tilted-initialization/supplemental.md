# Cycle 1: guarded tilted initialization supplement

Research only: no production, import, plan, code, control, gate or acceptance record changes. GR lead owns integration and consumer checks. Source 79 remains active. This replaces the false separate-orthogonal-transform L2 and supplies the missing initial projections. No full-text source-reading claim is made here. The calculations below are local; the corrected supplier identities listed at the end remain explicit guards.

## Admissible data and local normalization

Locally let $\Sigma$ be a smooth oriented three-manifold with smooth positive definite metric $h$, smooth symmetric tensor $K$, smooth $\rho_{\rm mass}\ge0$, and constants $c>0,\kappa,\Lambda$. On $\mathcal V=\mathbb RN\oplus T\Sigma$ define $\gamma(N,N)=1$, $\gamma(N,X)=0$, $\gamma(X,Y)=-h(X,Y)$. Future means positive $N$ coefficient. The original metric is $g=-\gamma$; $K(X,Y)=g(\nabla_XN,Y)$. A smooth future $\gamma$-unit section $U_0$ is prescribed. Define
$$\varepsilon=\rho_{\rm mass}c^2,\qquad T_0^\gamma=\varepsilon U_0^{\flat_\gamma}\otimes U_0^{\flat_\gamma},\qquad \mathcal T_0=\kappa T_0^\gamma.$$
Here $\mathcal T_0$ is the scaled Einstein right-hand side and $T_0^\gamma$ uses energy density. This local conversion requires no source 69 interface change. For $G(\gamma)-\Lambda\gamma=\mathcal T_0$ the target Ricci tensor is
$$J=\kappa\varepsilon U_0^{\flat_\gamma}\otimes U_0^{\flat_\gamma}-(\Lambda+\tfrac12\kappa\varepsilon)\gamma.$$
Its trace is $-4\Lambda-\kappa\varepsilon$, and $J-\tfrac12\operatorname{tr}_\gamma(J)\gamma=\mathcal T_0+\Lambda\gamma$. No density division occurs, including at $\varepsilon=0$; there $U_0$ remains the auxiliary gauge direction. Require the four corrected constraints for these data. Arbitrary $(h,K,U_0,\varepsilon)$ need not satisfy them.

## Proper boost and full tensor transformation

Choose an oriented local $h$-orthonormal frame $f_a$, $f_0=N$. Write uniquely
$$U_0=W(N+v^af_a),\qquad W=\gamma(U_0,N)=(1-|v|^2)^{-1/2},\qquad |v|<1.$$
The explicit boosted tetrad is
$$e_0=U_0,\qquad e_a=f_a+\frac{W^2}{W+1}v_av^bf_b+Wv_aN.$$
The coefficient $W^2/(W+1)=(W-1)/|v|^2$ is smooth at $v=0$. Substitution gives $\gamma(e_A,e_B)=\eta_{AB}$. The determinant is $+1$ by continuity from $v=0$ and invertibility; $e_0$ remains future. Thus the volume orientation is preserved. Additional spatial frame rotations belong to $SO(3)$ when using the same magnetic orientation.

For $e_A=L_A{}^If_I$ transform the entire covariant tensors:
$$R'_{ABCD}=L_A{}^IL_B{}^JL_C{}^KL_D{}^LR_{IJKL},\qquad C'_{ABCD}=L_A{}^IL_B{}^JL_C{}^KL_D{}^LC_{IJKL}.$$
The right dual is $C^*_{IJKL}=\tfrac12C_{IJ}{}^{PQ}\epsilon_{KLPQ}$. Lorentz invariance of the metric and the oriented volume tensor gives $(C')^*_{ABCD}=L_A{}^IL_B{}^JL_C{}^KL_D{}^LC^*_{IJKL}$. Then define
$$E'_{ab}=C(U_0,e_a,U_0,e_b),\qquad B'_{ab}=C^*(U_0,e_a,U_0,e_b).$$
A boost generally mixes electric and magnetic parts. Separate orthogonal transformations of $E$ and $B$ are false. Invertibility concerns the full Weyl tensor; its reconstruction lemma identifies these contractions with the reduction's prescribed curvature.

## Curvature construction using the corrected supplier

Use `gr_constraint_derivation`'s corrected Gauss/Codazzi supplier with slots $R_{IJKL}=\gamma(R(f_K,f_L)f_J,f_I)$ and $\operatorname{Ric}_{JL}=\gamma^{IK}R_{IJKL}$. It supplies six independent $R_{abcd}$ and eight independent $R_{0abc}$, including the cyclic relation. Define the six symmetric remaining entries by
$$R_{0a0b}=J_{ab}+\sum_{c=1}^3R_{cacb}.$$
This is exactly $\operatorname{Ric}_{ab}=R_{0a0b}-\sum_cR_{cacb}=J_{ab}$. Algebraic curvature symmetries fix all other entries. The four remaining equations $\operatorname{Ric}_{00}=J_{00}$ and $\operatorname{Ric}_{0a}=J_{0a}$ follow from the corrected Hamiltonian/momentum constraints. Set $S=J-\tfrac16\operatorname{tr}_\gamma(J)\gamma$, subtract its fixed Kulkarni--Nomizu term to obtain $C$, and perform the full tensor basis change above. No normal derivative of a constraint is needed. Gauss/Codazzi signs are owned by their supplier repair, not independently duplicated here.

## Explicit initial connection

Let $D^h$ be the Levi--Civita connection and $S_K$ satisfy $h(S_KX,Y)=K(X,Y)$. In tangent directions define
$$\nabla_X(aN+Y)=\bigl(X(a)+K(X,Y)\bigr)N+aS_KX+D^h_XY\qquad(X,Y\in T\Sigma).$$
Differentiating $\gamma(aN+Y,bN+Z)=ab-h(Y,Z)$ verifies compatibility. Tangential torsion is zero because $D^h$ is torsion-free and $K$ symmetric. Differentiate the explicit boost to find every $\nabla_Xe_J$, hence $\omega(X)$, from $(h,K,U_0)$ and tangential derivatives. Specify $\omega(U_0)=0$ in this tetrad. Since $\mathcal V=T\Sigma\oplus\mathbb RU_0$, these values determine the entire initial connection one-form.

For the comoving chart $e_0=\partial_s=U_0$, $\Sigma=\{s=0\}$, its conormal $\zeta=ds$ satisfies $\zeta(U_0)=1$ and initially $\zeta=N^{\flat_\gamma}/W$. Therefore $\zeta(e_a)=v_a$. In particular $e_a=v_aU_0+X_a$ with $X_a\in T\Sigma$, and $\Gamma_a=\omega(e_a)=\omega(X_a)$. Rest-frame spatial directions must not be conflated with directions tangent to the tilted surface.

## Every initial zero quantity

The torsion two-form is $\Theta(X,Y)=\nabla_XY-\nabla_YX-[X,Y]$. Its tangential pullback is zero by the connection formula. The reduced frame transport equation imposes $\iota_U\Theta=0$, meaning $T^i{}_{0a}=0$ for every output index $i$. The current $T^0{}_{ab}=0$ is a different projection and cannot replace this. A vector-valued two-form vanishing on tangent pairs and on every $(U,V)$ pair vanishes everywhere because $\mathcal V=T\Sigma\oplus\mathbb RU$. Hence all $T$ vanish initially.

Tangential connection curvature uses only tangential derivatives of its initial values. Corrected Gauss/Codazzi matches $R^{\rm pre}$ on all tangent direction pairs and every endomorphism slot, so the tangential pullback of $\Delta$ is zero. Reduced connection transport gives $\iota_U\Delta=0$, meaning $\Delta^i{}_{j0a}=0$ for every $i,j,a$. The same two-form argument gives all $\Delta=0$. This uses reduced first jets, not a presumed Einstein development. The positive reduced time matrix below determines those jets uniquely.

Density transport fixes $q=U(\varepsilon)+\varepsilon\chi=0$. Parallel gauge gives $\nabla_UU=0$, hence $q_a=\varepsilon(\nabla_UU)_a=0$ in the corrected residual normalization. No division by $\varepsilon$ occurs. The reduced Weyl equations give symmetric trace-free $P_{ab}=Q_{ab}=0$ at the initial first jet.

## Tilted differential Bianchi initialization

The corrected subsidiary supplier must establish the exact residual definition (explicit Schouten curl) and, under $q_j=0$, the identity
$$\operatorname{cyclic}_{jkl}\nabla_jR^{\rm pre\,i}{}_{mkl}=\tfrac12\epsilon_{jkl}{}^pF_{prs}\epsilon_m{}^{irs}.$$
This identity was supplied by `gr_subsidiary_derivation` from its left/right Hodge decomposition and contracted Schouten conservation; that derivation remains a guard for integration. A source citation alone does not prove it.

Pull back $D_\omega\Delta=-D_\omega R^{\rm pre}$ to three tangent slots. The pullback of $\Delta$ is identically zero along the slice, so its intrinsic covariant exterior derivative vanishes. Torsion pullback zero removes the exterior/covariant correction. Thus the displayed cyclic tensor vanishes on tangent triples. Contracting three tangent directions into the volume tensor gives a nonzero multiple of the normal conormal $\zeta^p$; invertibility of the endomorphism-pair Hodge map yields $\zeta^pF_{prs}=0$. This uses only tangential derivatives, and assumes no transverse derivative of constraints or residuals zero.

With $P_{ab}=Q_{ab}=q=q_a=0$, the corrected split is
$$F_{jkl}=2U_jP_{[k}U_{l]}+h_{j[k}P_{l]}+Q_i\bigl(U_j\epsilon^i{}_{kl}-\epsilon^i{}_{j[k}U_{l]}\bigr).$$
Here $P_a=F_{0a0}$, $Q_a=-\tfrac12\epsilon_a{}^{bc}F_{0bc}$, brackets have weight $1/2$, $h_{ab}=-\delta_{ab}$ and $\epsilon^i{}_{ab}=-\epsilon_{iab}$. All four component families are
$$F_{0a0}=P_a,\quad F_{0ab}=-Q_i\epsilon_{iab},\quad F_{ba0}=\tfrac12Q_i\epsilon_{iba},\quad F_{bac}=\tfrac12(-\delta_{ba}P_c+\delta_{bc}P_a).$$
For $z=\zeta(U)>0$ and $w_a=\zeta(e_a)$, contract the $(a,0)$ components and take the negative half spatial dual of the $(a,c)$ components:
$$zP+\tfrac12w\times Q=0,\qquad zQ-\tfrac12w\times P=0.$$
The exact matrix is $M=\left(\begin{smallmatrix}zI&X(w)/2\\-X(w)/2&zI\end{smallmatrix}\right)$ with $X(w)b=w\times b$. Since $X(w)^T=-X(w)$ it is symmetric, and
$$\langle(P,Q),M(P,Q)\rangle=z(|P|^2+|Q|^2)+P\cdot(w\times Q)\ge(z-|w|/2)(|P|^2+|Q|^2).$$
Timelike $\zeta$ gives $z>|w|$, hence $P=Q=0$; the four component families give every $F=0$. All initial quantities $(T,\Delta,F,q)$ required by the subsidiary theorem are therefore zero, conditional on its explicit corrected dual identity.

For reduced Weyl evolution the separately established curl bound is $\|C(w)\|\le|w|$. Its symmetric time matrix has lower bound $(z-|w|)(|E|^2+|B|^2)$, while transport blocks have factor $z$. Initially $z=1,w=v$, so the evolution bound is $1-|v|>0$, and the residual bound is $1-|v|/2>0$. These are distinct matrices. Arbitrary $|v|<1$, vacuum points and every $c>0$ remain allowed.

## Exact dependency transfer and guard

Retain the geometric definitions and connection suppliers. `thm-gr-constraint-equations-in-normal-frame` supplies corrected normal-frame Gauss/Codazzi and the four constraint projections. The full Ricci completion and boost transformation are proved locally above. Add `lem-gr-dust-weyl-reconstruction-from-electric-magnetic` to deps: its inverse characterization is currently used without declaration. Add `lem-gr-dust-reduced-evolution-equations` for reduced frame/connection transport, continuity and vanishing symmetric trace-free Weyl residuals; replace tautological L3. Use `lem-gr-dust-symmetric-hyperbolic-reduction` for the positive initial time matrix. Retain `thm-gr-dust-subsidiary-and-residual-vanishing` only for its exact corrected F split and differential Bianchi/Schouten conservation identity; its zero-data vanishing conclusion must not be used to establish its own initial hypothesis.

Integration is guarded on corrected curvature conventions, residual definition/normalization, reconstruction/projection consistency and explicit dual Bianchi identity. Current production bytes do not discharge these guards. GR lead retains all direct/indirect consumer checks. No source 69 interface change is proposed.

## Inspected input bindings

Raw SHA-256 values bind inspected inputs; these are not certifications.

- `items/lem-gr-dust-initial-data-and-tilted-initialization.md`: `5f4fa2cae6e14b46ac7ace1fb29315dccd6158c35a553185c3f43eafe0fa1a33`
- `items/def-gr-dust-reduction-variables-and-gauge.md`: `c53d60235586a4d451f948dca7b8695eb6dd130079b5fce5c6c089cc1b70cead`
- `items/def-gr-dust-electric-magnetic-weyl-variables-and-schouten.md`: `75a5f8fde9ff8548df9203671e99adb77d79197761aac02cf8743abd0ef0f369`
- `items/def-gr-dust-torsion-and-curvature-residuals.md`: `dba5c53e837abf1b1a02a11f2c983154323f7fb6faa02300b873b5bb533686f3`
- `items/lem-gr-dust-reduced-evolution-equations.md`: `797351581a363e489f65584dd2dd04f046cbb40c22f77b26b8f0a05afe26f2e9`
- `items/thm-gr-dust-subsidiary-and-residual-vanishing.md`: `de64fddcdb2c8e94bad4fa402d9b3445fce0bd90a43e8b6acf161efe179d5d9f`
- `items/lem-gr-dust-weyl-reconstruction-from-electric-magnetic.md`: `b45effdd5349c97991209d0008da76327cd4e9e0df8ea80f62de17c98d6ae97a`
- `items/lem-gr-dust-symmetric-hyperbolic-reduction.md`: `3eb10945d5f1a3670e5f33134961c59d9fa3b7814bd968ef8ed052993c74c422`
- `items/thm-gr-constraint-equations-in-normal-frame.md`: `d237c4c7c3f4f3c057f1d36bcb998f24f7446ae1b938eab93e74aff2b63dd9e3`

## Candidate format checks

The frontmatter-preserving research candidate in this directory adds the three actual mathematical deps named above. Its `dependency_level` remains the inspected original value; integration must let the engine recompute metadata. Exact-path proof-layout passed: 1 item, 6 steps, 0 defects. Exact-path rendercheck passed: 1 file, all KaTeX spans and renderer YAML parse. These checks are formatting evidence only and discharge none of the mathematical supplier guards.
