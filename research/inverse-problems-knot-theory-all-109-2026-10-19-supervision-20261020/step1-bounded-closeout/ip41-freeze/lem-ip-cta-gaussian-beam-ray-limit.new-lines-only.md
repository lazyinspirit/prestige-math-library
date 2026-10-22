Canonical lines 24--24:

      locator: "Section 3, Proposition 3.1, PDF p. 14; proof on pp. 14-22, particularly equation (3.6) on pp. 21-22. External global patching and distinct-branch estimates; current partial reading specified in F3."

Canonical lines 52--54:

[F3] **External input:** Dos Santos Ferreira--Kurylev--Lassas--Salo, Proposition 3.1, PDF p. 14, supplies exactly the residual, norm, and attenuated ray limit in the statement on an oriented compact transversal of dimension at least two. Its finite Taylor-jet construction and distinct-branch cross-term estimate (equation (3.6), PDF pp. 21--22) are imported, including overlap matching at self-intersections. For this repair the proposition and the cross-term argument on pp. 21--22 were inspected; the entire proof on pp. 14--22 is not claimed as newly reconstructed. Historical source coverage is distinct from this reading extent.

[F4] The construction for each fixed $K$ uses finitely many charts, finite Taylor orders, and linear transport and matrix ODEs with fixed initial data. Increasing the finite order suffices for that $K$; no simultaneous choice of quasimodes for unrelated $K$ or $\lambda$ is required. The parameter $\tau$ then enters the resulting explicit formula. Thus the use here adds no choice axiom to the statement.

Canonical lines 64--64:

2.1 Substituting $a=\tau^{(m-1)/4}\sum_{j=0}^N s^{-j}a_{-j}$ into $(-\Delta_{g_0}-s^2)e^{is\Theta}a$ cancels successive powers of $s$ by linear transport ODEs for the transverse Taylor coefficients of each $a_{-j}$. The leading coefficient solves $a_0(t,0)=c_0\exp(-\frac12\int_{t_0}^t\operatorname{tr}H(r)\,dr)$. A finite Taylor realization to the order required for the fixed $K$ and a transverse cutoff produce a smooth local beam; Gaussian integration gives bounded $L^2$ norm and a residual that tends to zero faster than any prescribed power after increasing the Taylor order. [F1, step 1.2, construct]

Canonical lines 66--66:

3.1 On an oriented transversal of dimension at least two, apply [F3] to complete the finite overlap matching and eliminate all distinct-branch cross terms. This gives the stated global family and limit; steps 1.1--2.1 describe its local ingredients, without claiming a new proof of the imported global estimates. [F3, F4, step 1.1, step 2.1]

Canonical lines 68--72:

3.2 For a nonorientable transversal let $\pi:\widetilde M_0\to M_0$ be its orientation double cover, with deck involution $\sigma$, and lift $\gamma$ to $\widetilde\gamma$. Let $w_s$ be the oriented beam from [F3] along that lift. Define the descended function by $\pi^*v_s=w_s+\sigma^*w_s$. The residual and norm bounds follow by a finite sum and the covering integral formula. The two lifted segments have no common tangent branch: equality of position and velocity at different times would make the geodesic periodic, contrary to its nontangential boundary exit; opposite velocities at a repeated point would force a zero midpoint velocity by geodesic uniqueness. There are only finitely many crossing branches, by compactness and local uniqueness. The distinct-branch estimate in [F3], applied to these two lifts, therefore gives a zero mixed-term limit. For every continuous $\psi$ the covering formula is
$$\int_{M_0}|v_s|^2\psi\,dV=\int_{\widetilde M_0}|w_s|^2(\psi\circ\pi)\,dV+\operatorname{Re}\int_{\widetilde M_0}w_s\overline{\sigma^*w_s}(\psi\circ\pi)\,dV.$$
The first term has precisely the required ray limit and the second tends to zero. In particular there is no extra factor two in the normalization. The same argument works if the cover is disconnected. [F1, F3, F4, step 3.1, algebra]

3.3 If the transversal has dimension one, the component containing the segment is an interval with arclength coordinate $t$ beginning at its incoming endpoint. Set $v_s=e^{ist}$ on this component and zero on all other components. The residual is zero and the asserted integral formula is exact. In dimension zero the given unit-speed segment cannot exist. This covers the dimensions not needed in the CTA application as well. [F1, given, algebra] ∎
