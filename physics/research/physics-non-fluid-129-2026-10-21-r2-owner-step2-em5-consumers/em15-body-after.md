
## Statement

Assume $\mathrm{AC}_\omega$ and the finite port model at a fixed real $\omega>0$. Let $S(\omega)\in\mathbb C^{N\times N}$ be its unique scattering matrix. Suppose the continuous device phasor coefficient maps $\varepsilon,\mu:\overline\Omega\to\mathbb C^{3\times3}$ obey $\varepsilon(x)^T=\varepsilon(x)$ and $\mu(x)^T=\mu(x)$ pointwise, and for every pair of incoming vectors the corresponding source-free scattering solutions lie in $C^1(\overline\Omega;\mathbb C^3)$ and have reciprocal port modes satisfying the exact bilinear pairing stipulated in the model definition. Then

$$S(\omega)^T=S(\omega).$$

For $A\in\mathbb C^{N\times N}$, define its conjugate transpose by $A^\dagger:=\overline A^{\,\mathsf T}$, where the overline is componentwise conjugation and a superscript $\mathsf T$ is ordinary transpose; $A$ is Hermitian when $A^\dagger=A$ and unitary when $A^\dagger A=AA^\dagger=I_N$, with $I_N$ the identity on $\mathbb C^N$. The transpose relation above uses the unconjugated Lorentz pairing; the unitary relation below uses the separate conjugated Hermitian power pairing. No time-reversal claim follows.

For each incoming vector $a$, define the operational net cycle-averaged material power transferred from the fields in this source-free phasor model by

$$P_{\mathrm{bulk}}(a):=\frac{\omega}{2}\int_\Omega\operatorname{Im}\big(\widetilde E^\dagger\varepsilon\widetilde E+\widetilde H^\dagger\mu\widetilde H\big)\,dV.$$

Here $v^\dagger=\overline v^{\,T}$ for a complex column vector, and this power has units W. It is a signed net transfer, not an assumption of local passivity or a definition of a material realization. Let $P_\partial(a)$ and $P_{\mathrm{other}}(a)$ be the nonnegative outward wall and unlisted-channel powers of the same finite-port model, whose total outward boundary power is $\|Sa\|_2^2-\|a\|_2^2+P_\partial(a)+P_{\mathrm{other}}(a)$. Then

$$\|a\|_2^2-\|Sa\|_2^2=P_{\mathrm{bulk}}(a)+P_\partial(a)+P_{\mathrm{other}}(a).$$

Consequently, if all three powers vanish for every incoming vector $a\in\mathbb C^N$, then $S^\dagger S=SS^\dagger=I_N$, so $S$ is symmetric and unitary. Pointwise Hermitian $\varepsilon$ and $\mu$ suffice to make $P_{\mathrm{bulk}}(a)=0$ for every input, since their quadratic forms are real; Hermitian symmetry is distinct from the ordinary transpose symmetry required for reciprocity. No constitutive branch beyond the stated phasor model is required for this operational zero-power conclusion.

The following full finite-port contraction hypotheses give additional Lorentz and Drude sufficient cases on this same port map. For every incoming vector, its real field maps $E,H,D,B:\overline\Omega\times\mathbb R\to\mathbb R^3$ and its material-state maps on that domain are jointly $C^\infty$ and $T$-periodic, where $T=2\pi/\omega$, and satisfy the smooth source-free macroscopic Maxwell equations with $\rho_f=J_f=0$.

The material closure is one of these two homogeneous, constant-coefficient branches. In the finite Lorentz branch, choose finite $M\ge1$ and maps $P_\ell:\overline\Omega\times\mathbb R\to\mathbb R^3$ for $1\le\ell\le M$. They satisfy

$$D=\varepsilon_\infty E+\sum_{\ell=1}^M P_\ell,\qquad B=\mu H,\qquad \partial_t^2P_\ell+\gamma_\ell\partial_tP_\ell+\omega_\ell^2P_\ell=a_\ell E,$$

with constant $\varepsilon_\infty,\mu,a_\ell,\omega_\ell>0$ and $\gamma_\ell\ge0$. In the Drude branch, take maps $P,V:\overline\Omega\times\mathbb R\to\mathbb R^3$. They satisfy

$$D=\varepsilon_\infty E+P,\qquad B=\mu H,\qquad \partial_tP=V,\qquad \partial_tV+\gamma V=aE,$$

with constant $\varepsilon_\infty,\mu,a>0$ and $\gamma\ge0$. Their SI units are those specified in the finite-port contraction model.

For each input, require the real fields and material states to have only this frequency: let $\widetilde E,\widetilde H,\widetilde D,\widetilde B:\overline\Omega\to\mathbb C^3$ be their phasor amplitudes with $E(x,t)=\operatorname{Re}(\widetilde E(x)e^{-i\omega t})$, and analogously for $H,D,B$. In the Lorentz branch also write $P_\ell(x,t)=\operatorname{Re}(\widetilde P_\ell(x)e^{-i\omega t})$ with $\widetilde P_\ell:\overline\Omega\to\mathbb C^3$; in the Drude branch write $P,V$ in the same form with amplitudes $\widetilde P,\widetilde V:\overline\Omega\to\mathbb C^3$. Substitution into the closure equations gives

$$\varepsilon_{\mathrm L}(\omega)=\left(\varepsilon_\infty+\sum_{\ell=1}^M\frac{a_\ell}{\omega_\ell^2-\omega^2-i\gamma_\ell\omega}\right)I_3,\qquad \varepsilon_{\mathrm D}(\omega)=\left(\varepsilon_\infty-\frac{a}{\omega^2+i\gamma\omega}\right)I_3,$$

where every Lorentz denominator is required nonzero, $I_3$ is the $3\times3$ identity, and the magnetic coefficient is $\mu I_3$ in either branch. Require these harmonic coefficient maps to be the continuous coefficients of this same reciprocal-phasor port model. The matrices are symmetric under ordinary transpose. The branch loss density is $\ell=\sum_{j=1}^M(\gamma_j/a_j)|\partial_tP_j|^2$ in the Lorentz branch and $\ell=(\gamma/a)|V|^2$ in the Drude branch, using the real vector norm $|v|^2=v\cdot v$. For the solution with incoming vector $a$, define $P_{\mathrm{mat}}(a):=T^{-1}\int_0^T\int_\Omega\ell\,dV\,dt$, and let $P_\partial(a)$ and $P_{\mathrm{other}}(a)$ be its nonnegative passive-wall and unlisted-outgoing powers under the finite-port model's bookkeeping. The field, material-state, and parameter units are exactly those specified in that model.

In either harmonic branch, $P_{\mathrm{bulk}}(a)=P_{\mathrm{mat}}(a)$. Thus $P_{\mathrm{mat}}(a)=P_\partial(a)=P_{\mathrm{other}}(a)=0$ for every incoming vector $a$ is a sufficient case of the operational zero-power criterion, also supplied by the contraction result. These branch hypotheses are sufficient cases, not restrictions on the general phasor power identity above.

## Statement references

[[def-countable-choice]]

[[def-emx-port-scattering-model]]

[[pthm-emx-lorentz-reciprocity]]

[[pthm-emx-scattering-contraction]]

[[lem-the-divergence-and-curl-of-a-cross-product]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a unique finite scattering matrix $S$, two source-free $C^1$ phasor solutions in the same reciprocal device, and reciprocal incoming/outgoing mode phases satisfying the bilinear pairing in the definition.

[A1] $\mathrm{AC}_\omega$ is the countable-choice axiom required by the bounded-domain reciprocity supplier. [[def-countable-choice]]

[F1] The reciprocal port convention is $\int_{\partial\Omega}n\cdot(\widetilde E_1\times\widetilde H_2-\widetilde E_2\times\widetilde H_1)\,dS=a_1^Tb_2-b_1^Ta_2$; the products are complex-bilinear and contain no conjugation. [[def-emx-port-scattering-model]]

[L1] For $C^1$ phasor solutions on a bounded $C^1$ domain, common continuous coefficients with ordinary transpose symmetry and $\mathrm{AC}_\omega$, the source-free Lorentz boundary pairing is zero. The identity does not assume Hermitian coefficients or losslessness. [[pthm-emx-lorentz-reciprocity]]

[L2] Under the additional smooth $T$-periodic, source-free field assumptions, the finite homogeneous Lorentz or Drude closure equations, and the branchwise loss and port bookkeeping stated for the unitary conclusion above, the contraction theorem gives $S^\dagger S=I_N$ when $P_{\mathrm{mat}}(a)=P_\partial(a)=P_{\mathrm{other}}(a)=0$ for every input $a$. [[pthm-emx-scattering-contraction]]

[F2] For real $C^1$ vector fields $F,G$ on an open subset of $\mathbb R^3$, $\operatorname{div}(F\times G)=G\cdot\operatorname{curl}F-F\cdot\operatorname{curl}G$. The complex-bilinear version follows by expanding real and imaginary parts. [[lem-the-divergence-and-curl-of-a-cross-product]]

[F3] Under $\mathrm{AC}_\omega$, on a bounded $C^1$ domain $\Omega\subset\mathbb R^3$, each real $C^1(\overline\Omega)$ vector field has finite volume-divergence and boundary-flux integrals, and these integrals agree. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Proof

**Proof technique:** apply the source-free Lorentz identity to two independently chosen incoming vectors, rewrite its boundary term with the reciprocal port pairing, and test the resulting bilinear matrix identity on coordinate vectors.

1.1 Choose arbitrary $a_1,a_2\in\mathbb C^N$, and let $(\widetilde E_j,\widetilde H_j)$ be their unique source-free scattering solutions. The coefficient transpose equalities and the hypotheses in [L1] imply $\int_{\partial\Omega}n\cdot(\widetilde E_1\times\widetilde H_2-\widetilde E_2\times\widetilde H_1)\,dS=0$. [given, A1, L1]

2.1 Substitute [F1] and $b_j=Sa_j$ into step 1.1. Since $(Sa_1)^T=a_1^TS^T$, the result is $a_1^T(S-S^T)a_2=0$ for every $a_1,a_2\in\mathbb C^N$. [given, F1, step 1.1, algebra]

3.1 For any coordinate vectors $e_j,e_k$, step 2.1 gives $e_j^T(S-S^T)e_k=S_{jk}-S_{kj}=0$. This holds for every pair $j,k$, hence every entry of $S-S^T$ is zero and $S^T=S$. No complex conjugation is introduced. [step 2.1, algebra]

4.1 For any input $a$, abbreviate its phasors by $e=\widetilde E$ and $h=\widetilde H$. The source-free equations are $\operatorname{curl}e=i\omega\mu h$ and $\operatorname{curl}h=-i\omega\varepsilon e$. Expanding [F2] into real and imaginary parts and then substituting these equations gives $\operatorname{div}(e\times\overline h)=i\omega\big(h^\dagger\mu h-\overline{e^\dagger\varepsilon e}\big)$. Therefore the real $C^1$ field $\boldsymbol\Pi=\tfrac12\operatorname{Re}(e\times\overline h)$ satisfies $\operatorname{div}\boldsymbol\Pi=-\tfrac\omega2\operatorname{Im}(h^\dagger\mu h+e^\dagger\varepsilon e)$. The bounded $C^1$ domain and field regularity required by [F3] are precisely those in the port model. Its finite-integral conclusion applies to this identity and yields $\int_{\partial\Omega}n\cdot\boldsymbol\Pi\,dS=-P_{\mathrm{bulk}}(a)$. Substituting the model's outward-power convention proves $\|a\|_2^2-\|Sa\|_2^2=P_{\mathrm{bulk}}(a)+P_\partial(a)+P_{\mathrm{other}}(a)$, with no unlisted incoming term. [given, A1, F1, F2, F3, algebra]

5.1 If these three powers vanish for every $a$, step 4.1 gives $a^\dagger Q a=0$ for every $a$, where $Q=I_N-S^\dagger S$ is Hermitian. Taking $a=e_j$ gives $Q_{jj}=0$. For $j\ne k$, taking $a=e_j+e_k$ and $a=e_j+i e_k$ gives respectively $2\operatorname{Re}Q_{jk}=0$ and $-2\operatorname{Im}Q_{jk}=0$, so $Q=0$. Thus $S^\dagger S=I_N$. Its $N$ columns are orthonormal and hence linearly independent; in the $N$-dimensional space they form a basis. For $x=Sy$ this gives $SS^\dagger x=SS^\dagger Sy=Sy=x$, so also $SS^\dagger=I_N$. Combining with step 3.1 proves the symmetric-unitary conclusion. For Hermitian coefficients, $\overline{e^\dagger\varepsilon e}=e^\dagger\varepsilon^\dagger e=e^\dagger\varepsilon e$ and likewise for $h$, so their imaginary parts and $P_{\mathrm{bulk}}$ vanish. No time-reversal conclusion is used. [given, step 3.1, step 4.1, algebra]

6.1 In the stated Lorentz sufficient case, set $d_j=\omega_j^2-\omega^2-i\gamma_j\omega\ne0$; the harmonic closure gives $\widetilde P_j=a_j e/d_j$. Hence $\operatorname{Im}(e^\dagger\varepsilon_{\mathrm L}e)=\sum_j a_j\gamma_j\omega |e|^2/|d_j|^2$, while the magnetic quadratic form is real. Direct averaging of the real sinusoid gives $T^{-1}\int_0^T|\partial_t P_j|^2dt=\omega^2|\widetilde P_j|^2/2$. Thus its loss density average equals $\tfrac\omega2\operatorname{Im}(e^\dagger\varepsilon_{\mathrm L}e)$. For the Drude case, $\widetilde V=a e/(\gamma-i\omega)$ gives $T^{-1}\int_0^T|V|^2dt=a^2|e|^2/[2(\gamma^2+\omega^2)]$, and $\operatorname{Im}(e^\dagger\varepsilon_{\mathrm D}e)=a\gamma |e|^2/[\omega(\gamma^2+\omega^2)]$. Multiplication by $\gamma/a$ gives the same equality with $\omega/2$ times this imaginary part. The formulas remain valid at zero damping, and the Lorentz nonzero-denominator condition is retained. Integrating in space proves $P_{\mathrm{mat}}=P_{\mathrm{bulk}}$ in both branches. Their stipulated smooth periodic fields make these finite integrals legitimate, as also assured by their contraction power balance. Consequently their all-input zero-loss case satisfies step 5.1, consistently with [L2]. [given, L2, step 5.1, algebra] ∎
