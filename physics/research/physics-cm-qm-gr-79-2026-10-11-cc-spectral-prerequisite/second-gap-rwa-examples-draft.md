# Research-only second consumer repair: gap crossing and long-time RWA

Owner: `/root/physics_spectral_repair_successor`, retaining all coupled supplier/consumer review and repair-cap duties. This draft concerns only the two exact assigned examples. It is not a production edit, independent consumer acceptance, source audit, readiness record or new review round. Actual snapshot hashes and prerequisite context are in adjacent `second-gap-rwa-examples-bindings.json`.

Exact carriers:

- `ex-nrqm-controlled-dynamics-gap-closing-failure`, raw SHA-256 `14591202f34282c26cff69322f2028aaabb9a8587e6aa3791ecfad798fb0155e`.
- `ex-nrqm-controlled-dynamics-long-time-rwa-limitation`, raw SHA-256 `1251046b327cabfa33990dcec5055a37175425c004a0b42927bfe61a82c36184`.

The exact `second-consumer-scope-request.md` was read fully. The first correction distinguishes an ordered-energy projection from a continuous eigenvector branch. The second retains the entire commuting nondecay calculation, but proves the intended failure of general uniform-time smallness with a separate noncommuting sequence. No extra physical, empirical or choice premise is required for these explicit finite matrices.

## Proposed gap-closing Example

Let $\sigma_z=\operatorname{diag}(1,-1)$ on $\mathbb C^2$, with orthonormal basis $e_\uparrow=(1,0)$, $e_\downarrow=(0,1)$. Let $H(s)=s\sigma_z$ for $s\in[-1,1]$, and let $U_T$ solve $iU_T'=TH(s)U_T$, $U_T(-1)=I$, for $T>0$. For $s\ne0$ define $P_+(s)$ to be the spectral projection onto the **ordered upper eigenvalue** $E_+(s)=|s|$.

(a) The eigenvalues are $s$ and $-s$, so their separation $2|s|$ closes at $0$. The uniform positive-gap hypothesis of the finite gapped adiabatic theorem fails.

(b) The ordered upper projection is $P_+(s)=\operatorname{diag}(0,1)$ for $s<0$ and $P_+(s)=\operatorname{diag}(1,0)$ for $s>0$. Its distinct one-sided limits preclude a continuous extension through $0$. At the crossing $H(0)=0$, the spectral projection for its only eigenvalue is $I$, not a distinguished rank-one projection. Assigning any rank-one projection at the crossing does not repair the unequal one-sided limits.

(c) The exact propagator is $U_T(s)=\exp[-iT\sigma_z(s^2-1)/2]$, so $U_T(1)=I$ and

$$\|(I-P_+(1))U_T(1)P_+(-1)\|=1\qquad(T>0).$$

Thus upper-energy tracking fails maximally at the endpoints. This is the ordered branch for which the leakage assertion is made.

(d) There is nevertheless a continuous constant rank-one branch $P_\downarrow=\operatorname{diag}(0,1)$ whose vectors obey $H(s)e_\downarrow=-s e_\downarrow$ for every $s$. It starts at energy $+1$ at $s=-1$, ends at energy $-1$ at $s=1$, and satisfies $(I-P_\downarrow)U_T(s)P_\downarrow=0$ for every $s,T$. At $s=0$ this is a subprojection of the degenerate eigenspace; it is not the rank-two full spectral projection $E_{H(0)}(\{0\})$. The original claim that no continuous rank-one eigenbranch can pass through this crossing was false.

## Proposed gap-closing Verification

**Given:** the explicit diagonal matrices, $s\in[-1,1]$ and $T>0$, with $P_+$ defined only for $s\ne0$ and its endpoint values as above.

[F1] Direct matrix multiplication gives $H(s)e_\uparrow=s e_\uparrow$, $H(s)e_\downarrow=-s e_\downarrow$, and $\sigma_z^2=I$; these agree with `prop-nrqm-orbital-and-spin-finite-spin-matrices` (e).

[F2] The explicit matrix exponential can be differentiated entrywise. If $V$ and $W$ both solve $iZ'=TH(s)Z$ with the same initial matrix, their difference $D$ has $(D^*D)'=iD^*THD-iD^*THD=0$, so $D=0$. This supplies the uniqueness actually needed here without consuming the defective generic Dyson ordering.

1.1 The two scalar eigenvalues in [F1] have distance $2|s|$, which tends to zero at the crossing. For $s<0$ the larger one is $-s$ with eigenspace $\mathbb Ce_\downarrow$; for $s>0$ it is $s$ with eigenspace $\mathbb Ce_\uparrow$. Their orthogonal projections differ by $\operatorname{diag}(1,-1)$ in norm $1$, so no choice at $s=0$ gives a continuous ordered-upper projection. The zero matrix at $0$ has only the full eigenspace $\mathbb C^2$ as its nonzero spectral projection. [F1, algebra]

1.2 Set $V_T(s)=\operatorname{diag}(e^{-iT(s^2-1)/2},e^{iT(s^2-1)/2})$. Entrywise differentiation gives $iV_T'=Ts\sigma_zV_T$ and $V_T(-1)=I$. Hence [F2] identifies $U_T=V_T$. At $s=1$ both phases are $1$, and $(I-P_+(1))U_T(1)P_+(-1)=\operatorname{diag}(0,1)$, an orthogonal projection of norm $1$. This proves the full leakage assertion for every $T>0$. [F1, F2, step 1.1, algebra]

1.3 The constant projection $P_\downarrow$ has $H(s)P_\downarrow=-sP_\downarrow$ by [F1], commutes with $U_T(s)$ by step 1.2, and gives zero leakage out of its fixed range. It therefore exhibits the continuous eigenvector counterbranch through the crossing and disproves the old unqualified no-continuous-rank-one-branch assertion, while preserving the ordered-upper failure just proved. [F1, step 1.2, algebra] ∎

## Proposed long-time RWA Example

Work on $\mathbb C^2$ with $\hbar=1$. Keep the original commuting example $A=B=\sigma_z$, $\omega=1$, so $H(t)=(1+2\cos t)\sigma_z$ and $H_{\rm avg}=\sigma_z$. The exact and averaged propagators from time $0$ are

$$U(t)=e^{-i(t+2\sin t)\sigma_z},\qquad U_{\rm avg}(t)=e^{-it\sigma_z}.$$

Their norm difference is $2|\sin(\sin t)|$. At $t_n=\pi/2+2\pi n$ it equals $2|\sin1|>0$ for every $n\ge0$. This proves persistent nondecay of the original commuting error. It alone does not disprove uniform-time smallness as the ratio $\|B\|/|\omega|$ becomes small: in the commuting extension $A=\sigma_z$, $B=\beta\sigma_z$, $\beta\in\mathbb R$, $\omega>0$, the exact error satisfies

$$\|U(t)-U_{\rm avg}(t)\|=2\left|\sin\left(\frac\beta\omega\sin\omega t\right)\right|\le\frac{2|\beta|}{\omega}\qquad(t\in\mathbb R).$$

To prove the stronger intended general limitation, fix $\omega>0$ and define $\sigma_+=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\sigma_-=\sigma_+^*$, $\sigma_x=\sigma_++\sigma_-$. For every integer $n\ge1$, let

$$\varepsilon_n=\omega\sqrt{\frac1{2n}+\frac1{4n^2}},\qquad A_n=0,\qquad B_n=\varepsilon_n\sigma_+,$$

$$H_n(t)=e^{i\omega t}B_n+e^{-i\omega t}B_n^*,\qquad H_{{\rm avg},n}=0.$$

These are smooth bounded self-adjoint Hamiltonians of precisely the rotating-wave finite-time theorem's form. They are noncommuting in time: for suitable $t,u$, $[H_n(t),H_n(u)]=2i\varepsilon_n^2\sin(\omega(t-u))\sigma_z\ne0$. Their oscillatory coefficient norm satisfies $\|B_n\|/\omega=\varepsilon_n/\omega\to0$. Nevertheless at the growing times $\tau_n=2\pi n/\omega$ their exact propagator obeys $U_n(\tau_n)=-I$, while $U_{{\rm avg},n}(\tau_n)=I$. Thus

$$\|U_n(\tau_n)-U_{{\rm avg},n}(\tau_n)\|=2\qquad(n\ge1).$$

This is the maximum possible norm distance between unitaries. In particular no general bound $\sup_{t\ge0}\|U(t)-U_{\rm avg}(t)\|\le f(\|B\|/\omega)$ with $f(r)\to0$ as $r\to0$ can hold for this whole class, even with $A=0$, fixed positive $\omega$ and dimension two. This does not assert that the finite-time theorem's linear growth rate is sharp; it proves the absence of general uniform-time smallness without additional hypotheses. All assertions concern explicit mathematical models, not a laboratory error or measurement.

## Proposed long-time RWA Verification

**Given:** the original commuting example, and the circular family $H_n$ with $n\ge1$, $\omega>0$, $\varepsilon_n$ and $\tau_n$ as above.

[F1] The Pauli matrices have $\sigma_x^2=\sigma_z^2=I$ and $\sigma_x\sigma_z+\sigma_z\sigma_x=0$, and $\sigma_z\sigma_+-\sigma_+\sigma_z=2\sigma_+$; these follow by multiplying their displayed two-by-two matrices, consistent with `prop-nrqm-orbital-and-spin-finite-spin-matrices` (e).

[F2] Direct differentiation of a displayed unitary solution with initial value $I$ verifies its propagator equation; uniqueness follows from the same $D^*D$ calculation used in the preceding example. No generic ordered Dyson formula, autonomous AC group theorem, or unbounded-domain assertion is needed.

1.1 The original displayed diagonal exponentials differentiate to $iU'=(1+2\cos t)\sigma_zU$, $iU_{\rm avg}'=\sigma_zU_{\rm avg}$, with initial value $I$. They are therefore the required propagators by [F2]. Left multiplication of their difference by $e^{it\sigma_z}$ leaves its norm unchanged and gives diagonal entries $e^{\mp2i\sin t}-1$, whose common modulus is $2|\sin(\sin t)|$. Substitution at $\pi/2+2\pi n$ proves the original positive nondecaying subsequence. [F1, F2, algebra]

1.2 For the commuting extension with real $\beta$, integrate its diagonal scalar entries to obtain $U(t)=\exp[-i(t+2\beta\sin(\omega t)/\omega)\sigma_z]$. The same diagonal norm calculation gives $2|\sin((\beta/\omega)\sin\omega t)|\le2|\beta|/\omega$. Thus the original commuting nondecay example admits a time-uniform small-ratio estimate; the stronger failure requires the separate noncommuting construction. [step 1.1, algebra]

2.1 Define $W(t)=\exp(i\omega t\sigma_z/2)$ and $G_n=\varepsilon_n\sigma_x+(\omega/2)\sigma_z$. The diagonal formula for $W$ gives $W\sigma_+W^*=e^{i\omega t}\sigma_+$ and $W\sigma_-W^*=e^{-i\omega t}\sigma_-$. Hence $H_n(t)=\varepsilon_nW(t)\sigma_xW(t)^*$. Put $V_n(t)=W(t)e^{-itG_n}$. Both factors are unitary, $V_n(0)=I$, and differentiating gives $iV_n'=-(\omega/2)\sigma_zV_n+WG_ne^{-itG_n}=\varepsilon_nW\sigma_xW^*V_n=H_nV_n$, because $W$ commutes with $\sigma_z$. By [F2], $U_n=V_n$. The sign of $W$ and the positive $\omega\sigma_z/2$ term in $G_n$ are essential in this cancellation. [F1, F2, algebra]

2.2 By [F1], $G_n^2=(\varepsilon_n^2+\omega^2/4)I=\nu_n^2 I$, where $\nu_n=(\omega/2)(1+1/n)>0$ from the exact definition of $\varepsilon_n$. Splitting the absolutely convergent matrix exponential into even and odd powers gives $e^{-itG_n}=\cos(\nu_n t)I-i\sin(\nu_n t)G_n/\nu_n$. At $\tau_n=2\pi n/\omega$, the angles are $\omega\tau_n/2=\pi n$ and $\nu_n\tau_n=\pi(n+1)$. Therefore $W(\tau_n)=(-1)^nI$ and $e^{-i\tau_nG_n}=(-1)^{n+1}I$, so $U_n(\tau_n)=-I$. Since $A_n=0$, $U_{{\rm avg},n}(t)=I$ for every $t$, and the norm difference at $\tau_n$ is $\|-2I\|=2$. [F1, step 2.1, algebra]

2.3 The matrix $\sigma_+$ sends $(x,y)$ to $(y,0)$, so its operator norm is exactly $1$; hence $\|B_n\|/\omega=\sqrt{1/(2n)+1/(4n^2)}\to0$. Also $\tau_n\to\infty$ for fixed $\omega$. For noncommutativity, the products $\sigma_+\sigma_-=\operatorname{diag}(1,0)$ and $\sigma_-\sigma_+=\operatorname{diag}(0,1)$ give $[H_n(t),H_n(u)]=\varepsilon_n^2(e^{i\omega(t-u)}-e^{-i\omega(t-u)})\sigma_z=2i\varepsilon_n^2\sin(\omega(t-u))\sigma_z$. The proposed general function $f(r)\to0$ would give $2\le f(\|B_n\|/\omega)\to0$, a contradiction. This proves the full intended no-general-uniform-smallness conclusion while retaining the distinct commuting nondecay example. [step 2.2, algebra] ∎

## Integration notes

Both examples can verify their explicit propagators locally as above; no generic Dyson or finite-time-error proof is used to deduce their numerical conclusions. Links to those theorems supply comparison context and must not be taken as acceptance of currently held suppliers. Existing mathematical classification and physical nonclaim remain intact. The ordered-upper qualification corrects a public example claim; the circular sequence adds the necessary concrete support for the originally intended RWA limitation. Any item/manifest/contract/dependency changes, producer holds and consumer review belong solely to the owning successor. No production check or native pass is claimed for this research document.
