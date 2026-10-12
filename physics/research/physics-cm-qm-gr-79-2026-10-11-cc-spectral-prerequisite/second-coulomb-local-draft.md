# Second Coulomb local repairs — research-only author proposal

Sole owning reviewer/integrator and all-consumer/cap authority: `/root/physics_spectral_repair_successor`. No production/mirror/readiness/import/plan/shared file changes. Actual current reads/hashes are in `second-coulomb-local-evidence.json`. The four small repairs below preserve original AC+CC and public conclusions (except the explicitly required form convention correction). The ground example preserves CC alone through the complete embedded construction below; no source39→40 scheduling edge, no AC strengthening and no dependence on an AC-bearing radial/ground/operator theorem is introduced.

## ex-nrqm-coulomb-hydrogen-ground-normalization

### Dependency plan and unchanged claims

Remove logical dependencies on `thm-nrqm-coulomb-ground-radial-probability-and-units`, Kummer, transported endpoint and angular-radial unitary reduction: the direct proof does not need them. Remove their load-bearing body citations, including “the ground vector of [AC supplier]” in Example. Define the same operator explicitly: $C=-\Delta-\gamma/|x|$ on $D(C)=H^2(\mathbb R^3;\mathbb C)=W^{2,2}$. Keep the same exponential vector, (a) normalization, (b) domain/eigenvalue, (c) radial normalization/mean, and (d) Laguerre-zero special case. Prove it is a ground vector by the quadratic identity below, without invoking full negative-spectrum exhaustion or degeneracy. Keep current CC-only angular/polar/elementary integral suppliers. Add direct CC-only Plancherel, distributional Fourier derivatives, Sobolev characterization, Hardy, density, weak-derivative and unbounded-adjoint/domain definitions, plus divergence and Tonelli suppliers as required. These are mathematical context already earlier than this page, not source40 modules. The actual imported Fourier supplier Statements explicitly carry CC, and the Hardy supplier also carries CC; no AC Kato–Rellich/Stone/spectral-basis supplier is used.

### Proposed replacement Verification

**Given:** $\gamma>0$, $\alpha=\gamma/2=1/a_0$, $\psi_{100}=N e^{-\alpha|x|}$ with $N=(\gamma^3/(8\pi))^{1/2}$, $p(r)=4r^2a_0^{-3}e^{-2r/a_0}$ and Countable Choice. Use the first-variable-linear $L^2$ inner product. Define $T=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ on its maximal domain; the CC Sobolev Fourier characterization identifies $D(T)=H^2$.

[F1] The CC polar/angle suppliers give $\sigma(S^2)=4\pi$, $Y_{00}=1/\sqrt{4\pi}$, and $dx=r^2dr\,d\sigma$; retain current [F1].

[F2] The elementary integral identities $\int_0^\infty r^je^{-ar}dr=j!/a^{j+1}$ for $j=0,1,2,3$ and $a>0$ follow by successive integration by parts with vanishing boundary terms; retain current [F2].

[F3] Use exact CC Fourier/weak-derivative/Sobolev and Hardy supplier content: $\mathcal F_2$ is unitary, $\mathcal F_2(-\Delta u)=4\pi^2|\xi|^2\widehat u$ on $H^2$, and $\|u/r\|_2\le2\|\nabla u\|_2$ for $u\in H^1$. Declare all these IDs directly. The following steps prove the realization and eigenfunction domain locally; no previous AC-bearing ground/endpoint theorem is a premise.

1.1 [Normalization] By polar coordinates and [F2], $\|\psi_{100}\|_2^2=N^2 4\pi\int_0^\infty r^2e^{-2\alpha r}dr=(\gamma^3/2)2/\gamma^3=1$. [F1, F2, given, algebra]

1.2 [Free maximal realization without arbitrary choice] For the real multiplier $t(\xi)=4\pi^2|\xi|^2$, truncate any $g\in L^2$ to $g_n=\mathbf1_{\{t\le n\}}g$ to prove density of $D(M_t)$. It is symmetric because $t$ is real. If $g\in D(M_t^*)$ with adjoint value $h$, testing against every $L^2$ function supported in $\{t\le n\}$ gives $h=tg$ there. These sets increase to all space, so $tg=h\in L^2$ and $D(M_t^*)=D(M_t)$. Thus $M_t$ and its unitary conjugate $T$ are self-adjoint, with $D(T)=H^2$ by [F3]. For $z\notin\mathbb R$, $R_0(z)=\mathcal F_2^*M_{(t-z)^{-1}}\mathcal F_2$ is the actual two-sided inverse, since $t/(t-z)$ is bounded and $(T-z)R_0(z)=I$, $R_0(z)(T-z)=I$ on $D(T)$. [F3, given, algebra]

1.3 [Hardy relative bound and Neumann realization] Put $Bu=-\gamma u/r$ for $u\in H^2$. By [F3] and Fourier Cauchy–Schwarz, $\|Bu\|_2\le2\gamma\|\nabla u\|_2\le2\gamma\|Tu\|_2^{1/2}\|u\|_2^{1/2}\le\varepsilon\|Tu\|_2+\gamma^2\varepsilon^{-1}\|u\|_2$ for every $\varepsilon>0$. Choose $Y>16\gamma^2$ and $\varepsilon=1/4$. The exact free multipliers give $\|TR_0(\pm iY)\|\le1$, $\|R_0(\pm iY)\|\le1/Y$, and hence $\|BR_0(\pm iY)\|<1/2$. The operator series $\sum_{j\ge0}(-BR_0(\pm iY))^j$ converges in norm, and $R_0(\pm iY)(I+BR_0(\pm iY))^{-1}$ maps into $D(T)$ and is the two-sided inverse of $C\mp iY$ for $C=T+B$ on $H^2$. This proves surjectivity of both nonreal signs with the exact factor order. [step 1.2, F3, algebra]

1.4 [Exact adjoint domain] $C$ is densely defined and symmetric because both $T$ and the real multiplication $B$ are symmetric on $H^2$. Let $y\in D(C^*)$, fix $z=iY$, and let $x=(C-z)^{-1}(C^*-z)y\in D(C)$. Then $(C^*-z)(y-x)=0$. Since $\operatorname{ran}(C-\overline z)=L^2$, adjoint pairing shows $\ker(C^*-z)=\{0\}$; consequently $y=x\in D(C)$. Thus $D(C^*)=D(C)=H^2$ and $C=C^*$, not merely a formally symmetric differential expression. All constructions are explicit sequences/truncations or single-vector existential arguments under CC. [step 1.3, algebra]

2.1 [Weak $H^2$ domain of the actual exponential] On $r>0$ let $f=e^{-\alpha r}$ and $\Omega_i=x_i/r$. Its classical derivatives are $\partial_i f=-\alpha f\Omega_i$ and $\partial_j\partial_i f=\alpha^2 f\Omega_i\Omega_j-\alpha f(\delta_{ij}-\Omega_i\Omega_j)/r$. Each is in $L^2(\mathbb R^3)$: the first derivatives are bounded times an exponential and second derivatives are bounded by $2\alpha^2f+2\alpha f/r$, with $\int_0^1 r^2/r^2\,dr<\infty$ and exponential tails. These are also the weak derivatives on all space. Indeed, integrate against a compactly supported smooth test function over $r>\delta$ and let $\delta\downarrow0$; each inner-sphere boundary term has magnitude bounded by a constant times its area $4\pi\delta^2$, because $f$ and its first derivatives are bounded. It tends to zero, and the volume integrals converge since the displayed derivatives are locally integrable. Thus no origin-supported delta term is present and $f\in H^2$, even though it is not classically differentiable at zero. Summing the weak second derivatives gives $-\Delta f=(-\alpha^2+2\alpha/r)f$ almost everywhere; hence $Cf=-\alpha^2 f$ because $\gamma=2\alpha$. Multiplication by $N$ preserves the domain and gives the claimed eigenvalue $-\gamma^2/4$. [step 1.4, F1, F2, F3, algebra]

2.2 [The level is the ground level, locally] For a compactly supported smooth $v$, integrate $\operatorname{div}\Omega=2/r$ on punctured balls; the inner flux of $|v|^2\Omega$ is $O(\delta^2)$ and vanishes. Expanding the square gives $\|\nabla v+\alpha\Omega v\|_2^2=\|\nabla v\|_2^2+\alpha^2\|v\|_2^2-2\alpha\int |v|^2/r$. By $H^1$ smooth density and the Hardy inequality, all these terms extend continuously to $H^1$: for example $\int |v|^2/r\le\|v/r\|_2\|v\|_2$. For $v\in D(C)=H^2$, Fourier pairing then gives $\langle Cv,v\rangle+\alpha^2\|v\|_2^2=\|\nabla v+\alpha\Omega v\|_2^2\ge0$. Thus $C\ge-\alpha^2$. For any real $\lambda<-\alpha^2$, Cauchy–Schwarz gives $\|(C-\lambda)v\|_2\ge(-\alpha^2-\lambda)\|v\|_2$; self-adjointness makes its range closed, and the orthogonal complement of the range is $\ker(C-\lambda)=\{0\}$, so its range is all $L^2$ and its inverse is bounded. Such $\lambda$ is outside the spectrum. Step 2.1 supplies an eigenvector at the lower bound, so this is a ground vector. No negative-spectrum theorem or AC spectral calculus is needed. [step 2.1, F3, algebra]

3.1 [Radial law and moments] By [F1], $p(r)=r^2\int_{S^2}|\psi_{100}(r\Omega)|^2d\sigma=4a_0^{-3}r^2e^{-2r/a_0}$. By [F2], its integral is $4a_0^{-3}2/(2/a_0)^3=1$ and its first moment is $4a_0^{-3}6/(2/a_0)^4=3a_0/2$. [step 1.1, F1, F2, algebra]

4.1 [Degree-zero Laguerre identity without Kummer dependence] The degree-zero generalized Laguerre polynomial is $L_0^{(a)}(s)=1$: equivalently the degree-zero normalized solution of $sv''+(a+1-s)v'=0$ is $v\equiv1$. In the reduced $l=0$ equation $-u''-\gamma u/r=-\alpha^2u$, substitution $u=r e^{-\alpha r}v(2\alpha r)$ produces $s v''+(2-s)v'=0$ since $\gamma=2\alpha$. Its degree-zero normalized solution $L_0^{(1)}=1$ therefore gives exactly $u=r e^{-\alpha r}$. Normalization supplies $u_{10}=2a_0^{-3/2}r e^{-r/a_0}$ and $\psi_{100}=u_{10}Y_{00}/r$ with the same constant as step 1.1. This is the claimed special polynomial-exponential case; it does not invoke a general radial completeness theorem. [step 1.1, step 2.1, F1, F2, algebra]

5.1 [Conclusion] Steps 1.1, 2.1, 3.1 and 4.1 prove (a)–(d), and steps 1.2–1.4 and 2.2 justify the stated ground realization under CC alone. [step 1.1, step 1.4, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## def-nrqm-coulomb-closed-semibounded-forms

Exact replacement only: “$a:V\times V\to\mathbb C$ that is **linear in its first argument and conjugate-linear in its second**”. All actual endpoint forms, associated equation $a(u,v)=\langle f,i(v)\rangle_H$, form norms, and positivity remain unchanged. Under the old convention, replacing $v$ by $iv$ makes the left side $ia(u,v)$ and right side $-i\langle f,i(v)\rangle$, forcing both to vanish. This correction restores compatibility with the actual first-variable-linear pairing rather than altering the realization.

## thm-nrqm-coulomb-relative-compactness

Only proof1.1 replacements:

- Set $\rho:=\max\{1,\sqrt{2|\operatorname{Re}z|}/(2\pi)\}>0$. Then $4\pi^2\rho^2\ge2|\operatorname{Re}z|$, so the same tail estimate holds for $|\xi|>\rho$. The bounded-ball estimate plus $4\pi\int_\rho^\infty r^{-2}dr=4\pi/\rho$ proves $m_z\in L^2$ including purely imaginary $z$.
- The actual domain identity is $|\xi|^2m_z\widehat f=(\widehat f+z m_z\widehat f)/(4\pi^2)$. Both terms remain $L^2$; restore the denominator instead of changing the Fourier convention.

Preserve every nonreal resolvent, operator claim (a)–(d), full compactness proof and original AC+CC.

## thm-nrqm-coulomb-two-body-reduced-mass

Only [F1] and proof1.1: write $U_\Phi f=f\circ\Phi^{-1}$, exactly the public Statement's map from original coordinates $(x_1,x_2)$ to transformed coordinates $(R,r)$. The unit-Jacobian integral reads $\int |f(\Phi^{-1}(R,r))|^2dRdr=\int |f(x_1,x_2)|^2dx_1dx_2$. No other change to kinetic separation, common $H^2$ domain, masses, full spectrum/no-eigenvalue conclusions or AC+CC.

## ex-nrqm-coulomb-relative-versus-total-bound-state

Only [F3] and proof1.1 (and precise restatement in3.1): restore $\widehat{T_R\varphi}=(4\pi^2\hbar^2/(2M))|\xi|^2\widehat\varphi$. A nonzero residual $(T_R\varphi)\otimes u_1$ rules out the eigenvalue $E_1$ only. Complete1.1 with: “This proves $\Psi$ is not an eigenvector at $E_1$; the already-declared `thm-nrqm-coulomb-two-body-reduced-mass` (d) states that the two-body operator has no eigenvalues at any real energy, so $\Psi$ is not an eigenvector at any other energy either.” In3.1 replace “by the factorization identity no product vector” with the exact no-eigenvalue theorem. The product norm, energy threshold, normalized expectation, AC+CC and all example statements are retained. The positive kinetic pairing already contains the correct $4\pi^2$.

## Remaining owner checks

These are complete concrete local arguments, not owning acceptance. The integrator must bind exact current suppliers/dependency roles and check the full coupled consumer scope of the form-convention correction. Ground authoring must declare each directly used CC mathematics ID instead of retaining AC-bearing ground/radial suppliers or hiding that reliance in [F3]. No external full-text reading, source status change or AC reduction for the four other items is claimed. The Laguerre clause above proves only the exact degree-zero special case promised by the example; no general Laguerre spectrum is independently certified.
