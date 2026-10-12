# Focused stationary identification supplement

Research support for `thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification`, bound by `bindings.json`. The current carrier already contains the actual Abel/resolvent comparison in steps 2.1–3.1. No replacement wavepacket argument or new completeness premise is required. The following expands only the domain and range inferences compressed in step 8.1. It is not a production acceptance or consumer-closure receipt.

Fix an integer $l\ge0$ and the radial specialization of the bounded compact potential. Let $A_l$ be the restriction of the given three-dimensional self-adjoint $H$ to one normalized harmonic channel, transported by $J_{lm}u(r\omega)=r^{-1}u(r)Y_{lm}(\omega)$. The channel projections reduce $H$ by step 2.3. Let $P=E_{A_l}((0,\infty))$. The independently complete wave operators and absence of positive eigenvalues give $PL^2=\mathcal H_{\mathrm{ac}}(A_l)$; negative and zero atoms are retained outside $P$.

For completeness of the Green realization, continue the regular Volterra solution and the exact outgoing finite polynomial solution to $z=k^2$ with $\operatorname{Im}k>0$, close to a fixed compact positive interval. Their coefficients and Wronskian are continuous there. Near zero the bounded-potential Volterra estimate gives $\varphi_l=r^{l+1}(1+O(r^2))$ and its differentiated estimate. For a source $g$ supported in $[a,b]\Subset(0,\infty)$, put

$$u(r)=-\frac{f_l(r)\int_0^r\varphi_l(s)g(s)\,ds+\varphi_l(r)\int_r^\infty f_l(s)g(s)\,ds}{W_l}.$$

Its first derivative has the two differentiated outer factors only, and its second derivative adds $-g$. Thus $(L_l-z)u=g$. It is regular below $a$ and exponentially decaying above $b$. The corresponding $J_{lm}u$ is globally $L^2$ and solves $(H-z)J_{lm}u=J_{lm}g$ distributionally: the regular origin asymptotics make the small-sphere integration-by-parts boundary terms tend to zero, including $l=0$, so no origin delta is present. Therefore $\Delta J_{lm}u=(V-z)J_{lm}u-J_{lm}g\in L^2$. Fourier Plancherel implies $J_{lm}u\in H^2$, which is the actual domain of $H$. The nonreal resolvent's uniqueness identifies this function with $(H-z)^{-1}J_{lm}g$. A vanishing nonreal $W_l$ would give the same domain argument for a nonzero homogeneous regular-and-decaying solution, contrary to self-adjointness. On compact radial rectangles the kernel consequently converges uniformly to $-\varphi_l(r_<)f_l(r_>)/W_l$ at real positive energy. This verifies the resolvent used for the boundary-density calculation, rather than characterizing a merely formal ODE kernel.

The real-axis jump and its PVM Poisson argument give, first on compact sources and then on all vectors by bounded extension,

$$\langle E_{A_l}(B)g,h\rangle=\langle M_{1_B}Tg,Th\rangle\quad(B\subset(0,\infty)\text{ Borel}),\qquad \|Tg\|^2=\|Pg\|^2.$$

Here $Tg(E)=\sqrt{\rho_l(E)}\int\varphi_l(\sqrt E,r)g(r)\,dr$, initially on compact sources, with $\rho_l(E)=\sqrt E/(\pi|W_l|^2)>0$. Interval identities extend to positive Borel sets by uniqueness of the finite mixed measures after polarization. Extend $T$ as a contraction on the full radial space before applying it to a spectral projection of a compact source. The norm identity implies $T=TP$, and $W=T|_{PL^2}$ is an isometry with closed range $\mathcal M$. Set $Q$ to be the orthogonal projection onto $\mathcal M$ and $W^*=W^{-1}Q$. The mixed identity gives

$$W^*M_{1_B}W=E_{A_l}(B)|_{PL^2},\qquad QM_{1_B}Wu=WE_{A_l}(B)u.$$

This is initially a compression. Its missing norm calculation is

$$\|M_{1_B}Wu\|^2=\langle E_{A_l}(B)u,u\rangle=\|E_{A_l}(B)u\|^2=\|QM_{1_B}Wu\|^2.$$

Orthogonal Pythagoras yields $(I-Q)M_{1_B}Wu=0$. Hence $\mathcal M$ is invariant under every energy indicator. Since indicators are self-adjoint, $\mathcal M^\perp$ is invariant too, so $Q$ commutes with them. The scalar commutant construction makes $Q=M_{1_S}$ for some measurable $S$; it does not yet prove $S$ conull.

Use the single fixed countable family of rational-complex radial step functions with rational endpoints away from zero. Each compact-source image is in $\mathcal M$ and thus vanishes a.e. on $S^c$. Remove the union of these countably many null exceptions. At each remaining $E\in S^c$, pairing with every member of this family vanishes. On each interval $(1/n,n)$ the pairing against $\sqrt{\rho_l(E)}\varphi_l(\sqrt E,\cdot)$ is continuous in the radial $L^2$ norm; density therefore makes it vanish against the conjugate of that local function. Its squared local norm is zero on every such interval. Exhaustion contradicts the regular coefficient one. Thus $S^c$ is null, $Q=I$, and $W$ is onto. This uses the actual nonvanishing kernels and countable dense closure in addition to the compression identity.

The general nonradial clauses (a)–(c) use a separate, sound route: the actual complete individual wave ranges make the strong Abel averages converge to $\Omega_\pm^*$ on the AC sector and to zero on the point sector. The damped identity is locally Bochner-integrable because $V e^{-itH}g$ has fixed compact support and uniformly bounded norm. Applying the bounded compact-source free trace on a finite energy interval gives the resolvent formula; the Fredholm supplier's norm boundary limits identify its limit with $Z_\pm$. Countable energy exhaustion and compact-source density give $Z_\pm=F_0\Omega_\pm^*$, and their onto property then follows from independently complete wave ranges. No scalar channel or Coulomb transform is used in this generic branch.

There is no additional unresolved mathematical prerequisite in this focused comparison/range inference after the bound current compact-potential suppliers are established. The current Coulomb onto supplier retains AC explicitly and is only a comparison context; importing it as a CC prerequisite here would be invalid. Sole `spectral_lead` retains production integration, full generic CC scope, all native two-cycle history, and complete direct/indirect consumer closure.
