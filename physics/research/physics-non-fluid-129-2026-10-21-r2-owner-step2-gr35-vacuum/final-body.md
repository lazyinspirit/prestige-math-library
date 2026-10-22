
## Statement

For the specified Kerr exterior metric $g$, with $M>0$, $|a|<M$, and
$r>r_+$, the Ricci tensor of its metric-selected connection vanishes:
$\operatorname{Ric}(g)=0$. This is a local geometric identity on the entire
subextremal exterior, including the rotation axis by smooth extension.

## Facts & Assumptions

**Given:** The subextremal Kerr exterior metric, its metric-selected
connection, and the curvature sign convention of the GR geometry library.

[F1] [[def-gr-fx-kerr-exterior]]: $\Sigma=r^2+a^2\cos^2\theta$, $\Delta=r^2-2Mr+a^2$, and the polar-chart components are $g_{tt}=-(1-2Mr/\Sigma)$, $g_{t\phi}=-2Mar\sin^2\theta/\Sigma$, $g_{rr}=\Sigma/\Delta$, $g_{\theta\theta}=\Sigma$, and $g_{\phi\phi}=\sin^2\theta[(r^2+a^2)^2-a^2\Delta\sin^2\theta]/\Sigma$.

[F2] [[lem-gr-fx-kerr-exterior-properties]]: $g$ is a smooth Lorentzian metric, and $\Sigma,\Delta$ are strictly positive on the exterior.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\Gamma^a{}_{bc}=\frac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ for the unique metric-selected connection.

[F4] [[def-gr-curvature-tensor-and-derived-tensors]]: $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, and $\operatorname{Ric}_{bd}=R^a{}_{bad}$.

[F5] [[thm-gr-curvature-tensoriality-and-coordinate-formula]]: $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$.

[A1] The tangent-bundle convention in [F2]-[F3] uses only countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

1.1 Work first on a polar chart with $0<\theta<\pi$ and change angular coordinate to $u=\cos\theta$. Put $q=1-u^2$, $S=r^2+a^2u^2$, $D=r^2-2Mr+a^2$, and $A=r^2+a^2$. In coordinate order $(t,\phi,r,u)$ the metric is block diagonal between $(t,\phi)$ and $(r,u)$: $g=G\oplus h$, where $G=S^{-1}\begin{pmatrix}2Mr-S&-2Marq\\-2Marq&q(A^2-a^2Dq)\end{pmatrix}$ and $h=\operatorname{diag}(S/D,S/q)$. Direct $2\times2$ inversion gives $G^{-1}=\begin{pmatrix}-(A^2-a^2Dq)/(SD)&-2Mar/(SD)\\-2Mar/(SD)&(D-a^2q)/(SDq)\end{pmatrix}$, with $\det G=-Dq$; the inverse base block is $h^{-1}=\operatorname{diag}(D/S,q/S)$. [F1, F2, algebra]

1.2 The derivatives needed below are $S_r=2r$, $S_u=2a^2u$, $S_{rr}=2$, $S_{ru}=0$, $S_{uu}=2a^2$, $D_r=2(r-M)$, $D_{rr}=2$, $q_u=-2u$, and $q_{uu}=-2$. On this chart $S,D,q>0$, so every denominator in the metric and inverse block is nonzero. [F1, F2, algebra]

2.1 Write Greek indices $\alpha,\beta,\gamma$ for $t,\phi$ and Latin indices $i,j,k,\ell$ for $r,u$. Since $G,h$ are independent of $t,\phi$, the complete nonzero Christoffel families from [F3] are $$\Gamma^\alpha{}_{\beta i}=\Gamma^\alpha{}_{i\beta}=\frac12(G^{-1})^{\alpha\gamma}\partial_iG_{\gamma\beta},\qquad \Gamma^i{}_{\alpha\beta}=-\frac12(h^{-1})^{ij}\partial_jG_{\alpha\beta},\qquad \Gamma^i{}_{jk}=\frac12(h^{-1})^{i\ell}(\partial_jh_{\ell k}+\partial_kh_{\ell j}-\partial_\ell h_{jk});$$ all families not forced by lower-index symmetry vanish. The six base coefficients, making the last family explicit, are $$\Gamma^r{}_{rr}=\frac rS-\frac{r-M}{D},\quad \Gamma^r{}_{ru}=\frac{a^2u}{S},\quad \Gamma^r{}_{uu}=-\frac{Dr}{Sq},\quad \Gamma^u{}_{rr}=-\frac{a^2uq}{SD},\quad \Gamma^u{}_{ru}=\frac rS,\quad \Gamma^u{}_{uu}=\frac{a^2u}{S}+\frac uq.$$ Thus the first two matrix families are fully specified by the displayed $G,G^{-1},h^{-1}$ and their $r,u$ derivatives, rather than by omitted connection coefficients. [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 Put $W_r:=(r-M)/D$, $W_u:=-u/q$, and $P_i:=G^{-1}\partial_iG$. Since $\partial_i\det G=(\det G)\operatorname{tr}(G^{-1}\partial_iG)$ and $\det G=-Dq$, the fiber connection trace is $\Gamma^\alpha{}_{\alpha i}=W_i$. Also $\det h=S^2/(Dq)$ and hence $\sqrt{|\det G\det h|}=S$. Substitution of the connection families in step 2.1 into the signed coordinate formula [F5], followed by the contraction $\operatorname{Ric}_{bd}=R^a{}_{bad}$ of [F4], gives
$$\operatorname{Ric}_{\alpha\beta}=-\frac1{2S}\partial_i\!\left(S h^{ij}\partial_jG_{\alpha\beta}\right)+\frac12h^{ij}\left(\partial_iG\,G^{-1}\partial_jG\right)_{\alpha\beta},\qquad \operatorname{Ric}_{\alpha i}=0,$$
$$\operatorname{Ric}_{ij}=\operatorname{Ric}(h)_{ij}-\partial_iW_j+\Gamma^k{}_{ij}W_k-\frac14\operatorname{tr}(P_iP_j).$$
Indeed, for the fiber contraction the derivative and connection-trace terms are $\partial_i\Gamma^i{}_{\alpha\beta}+(\Gamma^k{}_{ki}+W_i)\Gamma^i{}_{\alpha\beta}$; combining them gives the divergence with volume factor $S$, while the two mixed-block quadratic terms give the displayed matrix product. In the base contraction, the base-only terms are $\operatorname{Ric}(h)_{ij}$, the fiber trace contributes $-\partial_iW_j+\Gamma^k{}_{ij}W_k$, and the remaining two mixed-block products give $-\tfrac14\operatorname{tr}(P_iP_j)$. Each mixed contraction vanishes from the listed connection families and $\partial_\alpha G=\partial_\alpha h=0$.
Using the six base coefficients in step 2.1 in the two-dimensional Ricci formula gives
$$\operatorname{Ric}(h)_{rr}=\frac{Mr(3a^2u^2-r^2)}{S^2D},\qquad \operatorname{Ric}(h)_{ru}=0,\qquad \operatorname{Ric}(h)_{uu}=\frac{Mr(3a^2u^2-r^2)}{S^2q}.$$
For clarity, set $H_{ij}:=-\partial_iW_j+\Gamma^k{}_{ij}W_k$ and $T_{ij}:=\tfrac14\operatorname{tr}(P_iP_j)$. For $(r,r)$, put $P_{rr}=M^2a^2u^2+3M^2r^2-2Ma^2ru^2-Ma^2r-3Mr^3+a^2r^2u^2+r^4$ and $Q_{rr}=M^2a^4u^4-2M^2a^2r^2u^2+5M^2r^4-2Ma^4ru^4+2Ma^4ru^2-2Ma^2r^3u^2-2Ma^2r^3-4Mr^5+a^4r^2u^4+2a^2r^4u^2+r^6$. Direct substitution gives $H_{rr}=P_{rr}/(SD^2)$ and $T_{rr}=Q_{rr}/(S^2D^2)$, so
$$\operatorname{Ric}_{rr}=\frac{Mr(3a^2u^2-r^2)D+SP_{rr}-Q_{rr}}{S^2D^2}=0.$$
For $(r,u)$, put $B=-Ma^2u^2+Ma^2-2Mr^2+a^2ru^2+r^3$. Direct substitution gives $H_{ru}=T_{ru}=-uB/(qSD)$, while $\operatorname{Ric}(h)_{ru}=0$, so $\operatorname{Ric}_{ru}=0$. For $(u,u)$, put $P_{uu}=-Mru^2+Mr+a^2u^4+r^2u^2$ and $Q_{uu}=u^2(-4Ma^2ru^2+4Ma^2r+a^4u^4+2a^2r^2u^2+r^4)$. Then $H_{uu}=P_{uu}/(q^2S)$ and $T_{uu}=Q_{uu}/(q^2S^2)$, whence
$$\operatorname{Ric}_{uu}=\frac{Mr(3a^2u^2-r^2)q+SP_{uu}-Q_{uu}}{q^2S^2}=0.$$
Both displayed numerators vanish by expansion using $S=r^2+a^2u^2$, $D=r^2-2Mr+a^2$, and $q=1-u^2$. These expressions include the derivative, trace, and quadratic-connection contributions with the signed convention [F4]-[F5]. [F1, F3, F4, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 In the fiber formula of step 3.1, $S h^{rr}=D$ and $S h^{uu}=q$. Define
$$\mathcal C_r:=-\frac1{2S}\partial_r(D\,\partial_rG)+\frac{D}{2S}(\partial_rG)G^{-1}(\partial_rG),\qquad \mathcal C_u:=-\frac1{2S}\partial_u(q\,\partial_uG)+\frac{q}{2S}(\partial_uG)G^{-1}(\partial_uG).$$
Thus $(\operatorname{Ric}_{\alpha\beta})_{\alpha,\beta=t,\phi}=\mathcal C_r+\mathcal C_u$. Put $z:=u^2$ and
$$U:=-4Mrz-a^2z^2+3a^2z+3r^2z-r^2,\qquad V:=4Ma^2rz-3a^4z-3a^2r^2z+a^2r^2+r^4,$$
$$Z:=-8M^2a^4r^2z^2+8M^2a^4r^2z-2Ma^6rz^3+4Ma^6rz^2-6Ma^6rz-2Ma^4r^3z^2-8Ma^4r^3z+2Ma^4r^3-8Ma^2r^5z+4Ma^2r^5+a^8z^3+a^6r^2z^3+3a^6r^2z^2+3a^4r^4z^2+3a^4r^4z+3a^2r^6z+a^2r^6+r^8.$$
Substituting the explicit $G,G^{-1}$ of step 1.1 and differentiating entrywise gives the three independent entries
$$\mathcal C_r=\frac1{S^4}\begin{pmatrix}2Ma^2rU&2MarqV\\2MarqV&-qZ\end{pmatrix},\qquad \mathcal C_u=-\frac1{S^4}\begin{pmatrix}2Ma^2rU&2MarqV\\2MarqV&-qZ\end{pmatrix}.$$
The $tt$, $t\phi$, and $\phi\phi$ entries therefore cancel separately. The mixed entries are zero by step 3.1, and all three base entries are zero by the component identities there. Hence every component of the Ricci tensor vanishes on the axis-avoiding polar chart, with no scalar-curvature shortcut. [F1, F3, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 The polar chart omits only the axis. By [A1] and [F2], $g$ is smooth there, and [F4]-[F5] make $\operatorname{Ric}(g)$ a smooth tensor. Since its components vanish on the dense axis-avoiding set by step 4.1, continuity makes $\operatorname{Ric}(g)$ vanish on the axis as well. [A1, F2, F4, F5, step 4.1, algebra]

6.1 Thus $\operatorname{Ric}(g)=0$ at every point with $r>r_+$. The calculation proves a tensor identity for this specified metric; no Einstein field equation or classification of other metrics was used. [given, step 5.1] ∎


## Remarks

The source literature identifies Kerr as a vacuum solution, but the proof above
does not take that identification as a substitute for the signed Ricci
calculation. In particular, scalar-curvature vanishing alone would not imply
this lemma.
