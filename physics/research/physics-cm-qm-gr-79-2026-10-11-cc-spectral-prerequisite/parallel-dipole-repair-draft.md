# Atomic dipole elaboration — research only

Sole owning reviewer: `/root/physics_spectral_repair_successor`. Inputs are bound in `parallel-ground-dipole-read-bindings.json`. Preserve the entire Statement, oscillator comparison, necessary-only rules, and $l=1$ to $l'=0$ branch. No production/mirror/readiness/import/acceptance changes, source-reading invention, or new choice assumption.

## Operator conventions

The inner product is linear in the first entry: the current $\langle\psi',Q_q\psi\rangle=\int\psi'\overline{Q_q\psi}$ has exactly the stated conjugations and radial weight $r$. It is the conjugate of $\langle Q_q\psi,\psi'\rangle$, so the same zero condition gives $m'=m+q$.

Clarify maximal multiplication domains $D(Q_q)=\{f\in L^2:Q_qf\in L^2\}$. Then $D(Q_0)=D(Q_3)$ and $D(Q_+)=D(Q_-)=D(Q_1)\cap D(Q_2)$ since $|Q_\pm(x)|^2=(x_1^2+x_2^2)/2$. Only real coordinates are asserted self-adjoint; $Q_\pm$ are complex multipliers. The real-multiplier supplier (a) proves its exact maximal-domain assertion by truncation and adjoint testing. Its bounded-potential clause must never be applied to singular Coulomb; Coulomb $H^2$ is supplied separately.

## Concrete replacement proof

1.1 [Coordinate domains] Each real $Q_i$ is self-adjoint by [F1]. For any $f\in L^2$, $f_N=\mathbf1_{\{|x_i|\le N\}}f$ lies in $D(Q_i)$ and converges in $L^2$, proving density. Set $\varphi(t)=(1+|t|)^{-1}$. It lies in $L^2(\mathbb R)$, while $t^2|\varphi(t)|^2\ge1/4$ for $|t|\ge1$. For each $i$, $f_i(x)=\varphi(x_i)\prod_{j\ne i}e^{-|x_j|}$ lies in $L^2$ but $x_if_i\notin L^2$, by nonnegative product integration. Hence each domain is proper; the current witness proves only $i=1$ unless permutation is explicitly stated. [F1, given, algebra]

2.1 [Bound-state domain membership] By [F2], $u_{nl}$ is a polynomial times $e^{-kr}$ with $k>0$ and is $O(r^{l+1})$ at zero. Thus $\int_0^\infty r^2|u_{nl}|^2dr<\infty$: near zero the integrand is $O(r^{2l+4})$, and every polynomial moment against $e^{-2kr}$ is finite by integration by parts. Polar coordinates give the exact asserted norm identity; $\int_{S^2}|\Omega_iY_{lm}|^2d\sigma\le1$. Every bound state belongs to each $D(Q_i)$ and therefore each component domain. [step 1.1, F2, F5, algebra]

3.1 [Absolute convergence and factorization] Write $u'=u_{n'l'}$, $u=u_{nl}$ and $Y',Y$ similarly. Cauchy-Schwarz gives $\int_0^\infty r|u'\overline u|dr\le\|u'\|_2\|ru\|_2<\infty$ and $\int_{S^2}|Y'\overline{Q_qY}|d\sigma\le\|Y'\|_2\|Q_qY\|_2\le1$. Tonelli shows absolute integrability of the polar product and Fubini factors it into $(\int_0^\infty ru'\overline u\,dr)(\int_{S^2}Y'\overline{Q_qY}\,d\sigma)$, precisely the Statement. Multiplication generally produces two angular blocks; remove the current false description of $Q_q\psi$ as a single-block function and the vague angular “finite sum” argument. [step 2.1, F2, F5, algebra]

4.1 [All necessary branches] The angular supplier decomposes $Q_qh_{lm}=R_q+r^2G_q$ with harmonic degrees $l+1,l-1$ and $G_q=(\sum c_{q,i}\partial_i h_{lm})/(2l+1)$. At $l=1$, $G_q$ is a possibly nonzero constant in $V_0$, so retain the downward branch. At $l=0$ the derivatives vanish, so only the upward branch remains. Degree orthogonality and the $L_z$ eigenvalue calculation give exactly $l'=l+1,m'=m+q$, or $l\ge1,l'=l-1,m'=m+q$. These are necessary only. Preserve the actual radial integral $\int_0^\infty ru'\overline u\,dr$ throughout; current 4.1 accidentally drops its $r$ and conjugation. [step 3.1, F3, algebra]

Retain oscillator step 5.1, clarifying that the lowering term is absent at $n=0$ (or define $\psi_{-1}^{osc}=0$). The recurrence itself puts $X\psi_n^{osc}$ in $L^2$, so it proves membership in the maximal position domain before taking matrix elements. Retain the final conclusion.

## Prerequisites and owner gaps

Integration uses exact existing suppliers `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-tonelli-and-fubini-for-completed-product-measures`, and `thm-dominated-convergence`: declare direct dependencies/facts when integrated. Polynomial-exponential moments need declared elementary calculus or a proved local moment lemma. This is a precise remaining declaration obligation, not new physical scope.

Source37/38 labels in checkpoint are source-group labels: batch37 notes say orbital/spin and batch38 notes say intervals/contacts. Actual IDs/bytes govern. The current angular supplier preserves the correct $l=1$ branch and its inner-product convention agrees with this consumer. At $l=0$ its proof must omit the nonexistent negative-degree restriction map explicitly rather than writing $res_{-1}$. Full source37/38 and consumer acceptance remains with the sole owner and native caps; this draft is author support only. No Binney full-text reading or source acceptance is claimed.
