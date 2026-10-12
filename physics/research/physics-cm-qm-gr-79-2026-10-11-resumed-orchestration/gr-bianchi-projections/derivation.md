# Exact electric and magnetic projections, cycle 1

Research only. This supplies the missing calculation for `lem-gr-dust-reduced-evolution-equations` (a)/(b); it does not certify the subsidiary system, initialization, consumer closure, production acceptance or the full dust theorem. No item or control artifact was changed. The GR integration lead owns those duties.

The conventions are taken directly from the four current items named in `bindings.json`, not imported from a differently signed textbook formula. The current reconstruction definition has $l=h-U^\flat U^\flat$ and therefore $l_{00}=-1$, $l_{ab}=-\delta_{ab}$. The reconstruction lemma's claim $l_{ab}=-2\delta_{ab}$ is erroneous and must not enter this calculation. Its assertion of Weyl trace-freeness for arbitrary symmetric, nontracefree pairs is also erroneous; the projection calculation uses symmetric tracefree $E,B$.

## Objects and index convention

At any point choose the prescribed oriented orthonormal frame with $e_0=U$, $\gamma=\operatorname{diag}(1,-1,-1,-1)$, $h_{ab}=-\delta_{ab}$, $\epsilon_{0123}=1$, and $\varepsilon_{abc}=\epsilon_{0abc}$. Spatial indices $a,b,i,j,k,l,p,q$ in the calculations below range from 1 to 3. The connection is metric compatible and obeys $\Gamma_0{}^i{}_j=0$. Thus $U$ is geodesic, and parallel-frame component derivatives are $\dot T_{ij}=U(T_{ij})=(\nabla_U T)_{ij}$. Put $X_{ab}=\chi_{ab}$ and $\theta=\chi=-\sum_aX_{aa}$. No symmetry of $X$ is assumed.

Metric compatibility and the definition of $\chi$ give $\Gamma_a{}^b{}_0=\Gamma_a{}^0{}_b=-X_{ab}$. The remaining spatial coefficients are arbitrary metric-compatible rotations. They are included in $D_aT_{ij}=e_a(T_{ij})-\Gamma_a{}^p{}_iT_{pj}-\Gamma_a{}^p{}_jT_{ip}$ for spatial $T$. In particular $D$ denotes projection onto the rest space of $U$, not differentiation tangent to the initial surface $s=0$.

Use exactly the corrected residual and dust flux

$$F_{jkl}=\nabla^iC_{ijkl}-\tfrac12(\nabla_kS_{lj}-\nabla_lS_{kj}),\qquad q_j=\nabla_i(rU^iU_j).$$

Here $S_{ij}=\kappa r(U_iU_j-\gamma_{ij}/3)-\Lambda\gamma_{ij}/3$ with constant $\Lambda$. Acceleration zero gives $q_j=qU_j$, $q=U(r)+r\theta$. This uses no division by $r$: smooth $r\geq0$, including identically zero or vanishing density, is permitted. A separate matter normalization must identify $r$ as the coefficient of $U^\flat U^\flat$ in the field equation. If that normalization makes $r=\rho c^2$, every formula here retains that factor for arbitrary $c>0$. This calculation cannot repair the conflicting source-density definitions by choosing $c=1$.

## Reconstruction components and electric projection

Expanding the exact reconstruction gives

$$C_{0i0j}=E_{ij},\qquad C_{0ijk}=B_{ip}\varepsilon_{pjk},\qquad C_{aipj}=-\delta_{ip}E_{ja}+\delta_{ij}E_{pa}+\delta_{ap}E_{ji}-\delta_{aj}E_{pi}.$$

The other components follow from pair symmetry and pair antisymmetry. These signs also give $C^*_{0i0j}=\tfrac12C_{0i}{}^{pq}\epsilon_{0jpq}=B_{ij}$. The spatial two-index raising in the dual contributes two minus signs.

For $A^C_{ij}=\nabla^aC_{ai0j}$ (the contracted index here includes 0), split off $\dot E_{ij}$ and expand the four lower-index connection actions in the spatial divergence. The derivative term is $-\varepsilon_{pai}D_aB_{jp}=\varepsilon_{iap}D_aB_{jp}$. The first, second and third slot actions are respectively $-\operatorname{tr}(X)E_{ij}$, $X_{ai}E_{aj}$, and $-X_{ap}C_{aipj}$ after applying the negative spatial metric in the divergence; the fourth slot gives zero. Inserting the displayed spatial component into the third action yields

$$A^C_{ij}=\dot E_{ij}+\varepsilon_{iap}D_aB_{jp}+2X_{ai}E_{aj}+X_{jp}E_{pi}-2\operatorname{tr}(X)E_{ij}-\delta_{ij}X_{ap}E_{ap}.$$

All repeated spatial indices in this memo are ordinary explicit Euclidean sums; the signs from $h$ have already been inserted. Symmetrization has weight $1/2$. Define $\operatorname{curl}(T)_{ij}=\varepsilon_{(i}{}^{kl}D_kT_{j)l}$, with the two raised spatial epsilon indices giving positive sign. Then

$$A^C_{(ij)}=\dot E_{ij}+\operatorname{curl}(B)_{ij}+2\operatorname{sym}(X^{\mathsf T}E)_{ij}+\operatorname{sym}(XE)_{ij}+2\theta E_{ij}-\delta_{ij}(X:E).$$

For the Schouten part, direct differentiation gives $\nabla_0S_{ji}=\kappa\dot r\delta_{ij}/3$ and $\nabla_jS_{0i}=\kappa rX_{ji}$. Thus

$$F_{(i|0|j)}=A^C_{(ij)}+\tfrac12\kappa rX_{(ij)}-\tfrac16\kappa\dot r\delta_{ij}.$$

Its matter trace is $-\kappa q/2$ with the Euclidean contraction, or $\kappa q/2$ with $h$. On $q=0$ the matter part is $\kappa r(X_{(ij)}+\theta\delta_{ij}/3)/2$. Even without $q=0$, the symmetric tracefree projection removes the scalar $q$ term. Spatial density derivatives never enter this electric projection.

For a spatial covariant two-tensor,

$$ (\mathcal L_UT)_{ij}=\dot T_{ij}+\chi_i{}^kT_{kj}+\chi_j{}^kT_{ik}=\dot T_{ij}-X_{ik}T_{kj}-X_{jk}T_{ik}.$$

Using this identity, $\chi_i{}^l=-X_{il}$, $\chi^l{}_i=-X_{li}$, and $h_{ij}\chi^{kl}E_{kl}=-\delta_{ij}(X:E)$ converts the electric projection exactly into

$$P_{ij}=\mathcal L_UE_{ij}+D_kB_{l(i}\epsilon_{j)}{}^{kl}-3\chi_{(i}{}^lE_{j)l}-2\chi^l{}_{(i}E_{j)l}+h_{ij}\chi^{kl}E_{kl}+2\chi E_{ij}+\tfrac12\kappa r(\chi_{(ij)}-\tfrac13\chi h_{ij}).$$

Thus the current electric display needs no coefficient correction. For tracefree fields with $q=0$, this equals $F_{(i|0|j)}$; its symmetric tracefree projection equals the same expression after the scalar $q$ term has been removed.

## Magnetic projection

Let $M^C_{ij}=\tfrac12\varepsilon_i{}^{kl}\nabla^aC_{ajkl}$. Its time derivative is $\dot B_{ji}$. Expanding the spatial derivative of $C_{ajkl}$ gives $\varepsilon_{ijl}D_aE_{la}-\varepsilon_{ikl}D_kE_{lj}$; the first term is antisymmetric in $i,j$ and disappears on symmetrization. The four connection-slot contributions to the spatial divergence are, before epsilon contraction,

$$-\operatorname{tr}(X)B_{jp}\varepsilon_{pkl}+X_{aj}B_{ap}\varepsilon_{pkl}-X_{ak}B_{lp}\varepsilon_{paj}+X_{al}B_{kp}\varepsilon_{paj}.$$

The first two terms give $-\operatorname{tr}(X)B_{ij}+X_{aj}B_{ai}$. The last two give $-\varepsilon_{ikl}X_{ak}B_{lp}\varepsilon_{paj}$. Interchanging dummy indices and using $B_{pq}=B_{qp}$ converts its symmetric part to the **positive** double epsilon expression

$$\mathcal D_{ij}=X_{kl}B_{pq}\varepsilon_{pk(i}\varepsilon_{qlj)}=\chi^{kl}B^{pq}\epsilon_{pk(i}\epsilon_{qlj)}.$$

Consequently

$$M^C_{(ij)}=\dot B_{ij}-\operatorname{curl}(E)_{ij}+\operatorname{sym}(X^{\mathsf T}B)_{ij}+\theta B_{ij}+\mathcal D_{ij}.$$

The Schouten contribution is $-\tfrac12\varepsilon_i{}^{kl}\nabla_kS_{lj}=-\kappa\varepsilon_i{}^{kj}D_kr/6$, which is antisymmetric in $i,j$ and has zero symmetric projection. Both $U_l,U_j$ are zero in these slots, so differentiating $rU_lU_j$ contributes zero even when $X$ is antisymmetric. Constant $\Lambda$ contributes zero because $\nabla\gamma=0$.

Converting the parallel-frame derivative to the Lie derivative now gives the corrected equation

$$Q_{ij}=\mathcal L_UB_{ij}-D_kE_{l(i}\epsilon_{j)}{}^{kl}-\chi^l{}_{(i}B_{j)l}-2\chi_{(i}{}^lB_{j)l}+\chi B_{ij}+\chi^{kl}B^{pq}\epsilon_{pk(i}\epsilon_{qlj)}.$$

This is exactly $\tfrac12\epsilon_{(i}{}^{kl}F_{j)kl}$ on tracefree pairs. The final sign is plus. No restriction on vorticity or tilt was used.

## Trace preservation and the correct logical scope

To formulate trace preservation, extend the displayed $P,Q$ expressions algebraically to the full space of symmetric spatial two-tensors and impose $P=Q=0$ there. Derive this extension explicitly; trace preservation does not follow by contracting a projection that has already discarded the trace equation. Alternatively define the system on tracefree pairs from the outset and omit any purported evolution claim for off-space traces.

The full symmetric extension does preserve zero traces. Let $t_T=h^{ij}T_{ij}$. The Lie identities give $\mathcal L_Uh_{ij}=2\chi_{(ij)}$ and $h^{ij}(\mathcal L_UT)_{ij}=U(t_T)+2\chi^{ij}T_{ij}$. The trace of the symmetric curl is identically zero (not a divergence): $\epsilon^{ikl}D_kT_{li}=0$ by symmetry in $l,i$. Also

$$h^{ij}\mathcal D_{ij}=\chi^{kl}B_{kl}-\chi t_B.$$

This follows from $\sum_i\varepsilon_{pki}\varepsilon_{qli}=\delta_{pq}\delta_{kl}-\delta_{pl}\delta_{kq}$ and $h^{ij}=-\delta^{ij}$. The electric matter term has zero trace. Therefore the exact contractions of the extended equations are

$$h^{ij}P_{ij}=U(t_E)+2\chi t_E,\qquad h^{ij}Q_{ij}=U(t_B).$$

Along every flow line these are scalar homogeneous ODEs, so initially zero traces remain zero, with no density positivity assumption. The original minus double epsilon sign would leave nonzero contractions involving $\chi^{ij}B_{ij}$ and fail this invariance. Symmetry is immediate from the displayed symmetrizations, so the invariant space consists of two copies of the five-dimensional symmetric tracefree spatial space.

## Tilt and verification limits

Nothing above assumes $[e_i,e_j]$ has no time component, $\chi_{[ij]}=0$, $e_i{}^0=0$, or that $U$ is the initial normal. A tilted frame has $e_i=e_i{}^\mu\partial_\mu$, and the derivative slots $e_i(T_{jk})$ retain their time-coordinate contributions. The conversion from $\dot T$ to $\mathcal L_UT$ is essential even in a parallel frame. Replacing the Lie derivative by $\partial_s$ without the displayed connection actions would change the lower-order coefficients.

`check-full-projections.py` independently expands the exact reconstructed tensor and the four covariant-derivative slots with rational arithmetic. Its 242 coefficient tests cover the ten STF Weyl basis components against all nine $X$ entries, all nine independent spatial rotation coefficients, every one of four component-derivative slots, all four density derivatives, matter/kinematics coefficients and the constant-cosmological term. Arbitrary spatial rotations test that $D$ is the fully projected covariant derivative. Both full symmetric projections match the derived parallel-frame formulas in every test. The coefficient tests supplement the index calculation above; they are not a substitute for it or an independent whole-item audit. The separate subsidiary residual equivalence and the consumer checks remain the integration lead's responsibility.
