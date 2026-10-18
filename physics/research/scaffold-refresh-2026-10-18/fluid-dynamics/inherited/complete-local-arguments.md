# Integrator local arguments: exact averaging and closure

These are unpublished research arguments. All mathematical statements below concern specified functions/equations with numeric parameters, and depend on no physical premise. Interpreting them as fluid descriptions additionally requires the model postulates in the canonical physical pages. Finite averaging avoids an unproved interchange of random derivatives and expectations.

<a id="C01"></a>

## C01: finite-ensemble Reynolds identity

Let $I$ be a time interval, $\Omega\subset\mathbb R^d$ open, $N\ge1$, weights $a_j\ge0$ with $\sum_{j=1}^N a_j=1$, and $u_j\in C^1(I\times\Omega;\mathbb R^d)$ with continuous second spatial derivatives, $p_j\in C^1$, $f_j$ continuous, and fixed numeric $\nu\ge0$. Suppose $\operatorname{div}u_j=0$ and

$$\partial_tu_j+\operatorname{div}(u_j\otimes u_j)+\nabla p_j=\nu\Delta u_j+f_j.$$

Here $(u\otimes v)_{ik}=u_i v_k$ and tensor divergence is rowwise. Define $\bar u=\sum a_ju_j$, $\bar p=\sum a_jp_j$, $\bar f=\sum a_jf_j$, $v_j=u_j-\bar u$ and $R=\sum a_jv_j\otimes v_j$. Finite sums commute with derivatives, so $\operatorname{div}\bar u=0$ and $\sum a_jv_j=0$. Expanding $u_j\otimes u_j=(\bar u+v_j)\otimes(\bar u+v_j)$ cancels both cross sums and leaves $\sum a_ju_j\otimes u_j=\bar u\otimes\bar u+R$. Sum the given equations to obtain exactly

$$\partial_t\bar u+\operatorname{div}(\bar u\otimes\bar u)+\nabla\bar p=\nu\Delta\bar u+\bar f-\operatorname{div}R.$$

For every vector $z$, $z^TRz=\sum a_j(v_j\cdot z)^2\ge0$, and $\operatorname{tr}R=\sum a_j|v_j|^2$. Thus $R$ is positive semidefinite and its trace is the mean squared fluctuation. The same expansion gives $\sum a_j|u_j|^2=|\bar u|^2+\operatorname{tr}R$. These conclusions are pointwise identities, without stationarity, randomness or ergodicity.

For a physical interpretation multiply the momentum equation by constant density $\rho_0$. Then $\rho_0R$ has units Pa and $\operatorname{tr}R/2$ units J/kg. Some authors call $-\rho_0R$ the Reynolds stress because it enters the effective stress on the right; specify this sign rather than conflate it with the positive covariance.

<a id="C02"></a>

## C02: mean data do not determine Reynolds covariance

For $d\ge2$, let $\Omega=\mathbb T^d$ and $w$ any nonzero constant vector. Ensemble A consists of $u_1=u_2=0$, $p_1=p_2=0$, weights $1/2$. Ensemble B consists of $u_1=w$, $u_2=-w$, again zero pressures and weights $1/2$. For either ensemble all spatial/time derivatives vanish, so each member solves unforced incompressible Euler and Navier–Stokes for every $\nu\ge0$. Both have the same mean velocity zero, mean pressure zero and mean forcing zero; ensemble A has $R=0$, B has $R=w\otimes w\ne0$. Hence no rule taking only those mean fields can recover the actual covariance for all these ensembles. This does not assert that every modeled closure fails in its stated restricted regime; it establishes the precise missing information in an unrestricted closure claim. The different covariance is constant, so both mean equations are consistent: a momentum equation observes $\operatorname{div}R$, not all of $R$ independently.

<a id="C03"></a>

## C03: exact mean/fluctuation energy exchange

On a periodic cell let the preceding fields be smooth, real and unforced. Dot the averaged equation with $\bar u$ and integrate. Periodic integration of divergences gives zero for the mean convection and pressure, viscosity gives $-\nu\int|\nabla\bar u|^2$, and $-\int\bar u\cdot\operatorname{div}R=\int R:\nabla\bar u$. Thus

$$\frac12\frac{d}{dt}\int|\bar u|^2=-\nu\int|\nabla\bar u|^2+\int R:\nabla\bar u.$$

Dot each individual equation with $u_j$; its convection is $\operatorname{div}(u_j|u_j|^2/2)$ and pressure is $\operatorname{div}(p_ju_j)$ by divergence freedom. Integrating and weighting yields $\frac12\frac{d}{dt}\int\sum a_j|u_j|^2=-\nu\int\sum a_j|\nabla u_j|^2$. The cross terms of gradients vanish by differentiation of $\sum a_jv_j=0$, so $\sum a_j|\nabla u_j|^2=|\nabla\bar u|^2+\sum a_j|\nabla v_j|^2$. Subtract the mean identity and use C01's energy splitting to obtain

$$\frac12\frac{d}{dt}\int\operatorname{tr}R=-\nu\int\sum a_j|\nabla v_j|^2-\int R:\nabla\bar u.$$

The transfer term need have neither sign: it cancels exactly in total energy. Calling it universal dissipation is unjustified. The derivatives under the integral are legitimate by smoothness on a compact periodic strip; there is no boundary flux. Nonperiodic fields require their actual boundary energy terms.

<a id="C04"></a>

## C04: limits of turbulent laws

An ensemble is a finite set with weights above, a probabilistic ensemble an explicitly specified probability space, and a time average the operator $T^{-1}\int_0^T u(t,x)dt$ when the integral exists. They are distinct definitions. A stationary probability law is invariant under time translation of the specified evolution. Ergodicity is a further property relating invariant events to probabilities; it is not implied by incompressibility or energy balance. A Reynolds stress closure is a chosen relation for unresolved covariance/flux, not the Reynolds identity itself. Kolmogorov scaling, anomalous dissipation, turbulent universality, wall laws and all-time smooth 3D Navier–Stokes are not asserted theorems here. Any useful formal discussion must state forcing, averaging, inertial-range assumptions and limiting regime. C01–C03 require none of those conjectural premises.
