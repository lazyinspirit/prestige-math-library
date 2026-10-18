# Independent check: exact square pressure-endpoint construction

Checked 2026-10-18, research only. This review concerns the complete sibling packet `../polyhedral-helper/exact-square-counterexample.md`, read after it was written, together with independent calculations below. No canonical items or controls were edited and no gates/tests were run.

**Verdict: the construction is mathematically sound under the exact original continuous hypotheses.** It gives a two-dimensional square, f∈L²_tL²_x, u0∈H_sigma and an actual no-slip Newtonian energy solution whose unique mean-zero pressure is not in L^(4/3)_tL²_x. Two-dimensional energy uniqueness identifies every velocity limit of the current MINI convergence theorem with this solution. This is an exact-scope counterexample to the original universal regular-pressure clause; no disk or linear-to-nonlinear transfer is used. It does not address the original smooth-branch pressure-error estimate.

## 1. Halfline heat mass loss checked directly

For diffusivity ν, integrate the Dirichlet kernel in y to obtain

$$M(t)=\int_0^\infty\operatorname{erf}\!\left(\frac z{2\sqrt{\nu t}}\right)w_0(z)\,dz.$$

Differentiation at positive time gives exactly

$$M'(t)=-\frac{t^{-3/2}}{2\sqrt{\pi\nu}}\int_0^\infty z e^{-z^2/(4\nu t)}w_0(z)\,dz.$$

The coefficient, sign and power agree with the packet. With w0=ηz^(-1/2)(log(1/z))^(-α), z=√t r gives t^(-3/4) times a positive weighted integral. Integrating r∈[1,2] gives the lower bound; on r≤t^(-1/4) the log is ≥(1/4)log(1/t), while on the remaining tail the logarithm is bounded below by log16 on supp η and the Gaussian tail is exponentially small. This supplies both upper and lower bounds stated in Section 1.

The threshold separation is correct:

- p size |m'| is t^(-3/4)(log(1/t))^(-α), whose 4/3 power has divergent integral for α≤3/4.
- The square of |m'|t^(1/4)+|m|t^(-3/4) is bounded by Ct^(-1)(log(1/t))^(-2α), integrable for α>1/2.

Also ht=νhyy, including its sign: h=−∫ᵧ∞w, hy=w, ht=νwy. The halfline heat L² contraction, gradient energy, and initial L² convergence follow from odd extension and the elementary heat identity. Nonnegativity and M(t)≤M0 follow from the kernel.

## 2. Harmonic field is smooth on the entire closed square

The packet's sine series is sufficient; no general polygon corner regularity is needed. Since a vanishes near x=0 and x=1, integration by parts gives |a_n|≤C_N n^(-N) for every N. Every k-th y derivative of the hyperbolic ratio is bounded by C_k n^k uniformly on [0,1]. Consequently θ and all derivatives converge uniformly on the closed square, including corners; θ is harmonic with exactly the specified traces.

For an equally explicit global conjugate one may take

$$\phi(x,y)=\sum_{n\ge1}a_n\cos(n\pi x)\frac{\cosh(n\pi(1-y))}{\sinh(n\pi)}-\text{its mean}.$$

Then φx=θy and φy=−θx, so rotθ=∇φ. This series has the same smoothness. The packet's alternative closed-one-form construction is also valid on the simply connected square. Nonzero a forces θ nonconstant, hence ∇φ nonzero and ||φ||₂>0 after mean subtraction.

## 3. Boundary conditions are exact

A particularly transparent check is to use R=1 on a neighborhood of every boundary point. There the *whole* stream simplifies to

$$\psi=\psi_m+m(\theta-b)=a(x)[\kappa(y)h(t,y)+M(t)\chi(y)].$$

At the bottom, κ=χ=1 and their derivatives vanish, so ψ=a(−M+M)=0 and ψy=aw(t,0)=0. Since ψ is identically zero along that edge, its tangential derivative also vanishes. Near the top, both cutoffs vanish. Near the vertical sides, a vanishes identically. Hence ∇ψ=0 on every side, including corners, and u=rotψ is exactly no-slip and exactly divergence-free. This check avoids any possible confusion between stream normal and tangential traces.

## 4. Corrector scaling, including mixed time derivatives and corner overlaps

Let δ=√t. The union of the four strips has area at most 4δ. Smooth b vanishes on each side, so |b|≤Cδ anywhere in that union. Spatial derivatives of order j of R have size O(δ^(-j)), supported in the union; ∂tR=O(t^(-1)) and ∇∂tR=O(t^(-1)δ^(-1)). Leibniz's formula therefore gives

$$\|D^k(bR)\|_2\le C\delta^{3/2-k}\quad(k=1,2,3),\qquad \|\nabla\partial_t(bR)\|_2\le Ct^{-1}\delta^{1/2}.$$

Terms with a derivative on b have the same or a better power; at corners the support is still a subset of the strip union. When a derivative hits a particular cutoff, b is bounded by C times the distance to that side; no disjoint-strip assumption or unproved smooth-boundary scaling is needed. Also ||∇(bR)||∞≤C.

For r=−m rot(bR) this gives exactly the packet's bounds, including

$$\|r_t\|_2+\|\Delta r\|_2\le C\bigl(|m'|t^{1/4}+|m|t^{-3/4}\bigr)\in L^2(0,T).$$

The time derivative estimate is for the actual derivative, with both terms m'rot(bR) and m rot(b∂tR) present. There is no differentiation of a bound in lieu of this calculation.

## 5. Actual L² body force checked

The critical singular derivative m'rotθ cancels **exactly** against ∇p with p=−m'φ; Δrotθ=0. This is a pointwise identity at positive time.

For the main stream,

$$(\partial_t-\nu\Delta)\psi_m=-\nu[a''\kappa h+2a\kappa'w+a\kappa''h]-\nu M_0[a''\chi+a\chi''].$$

Applying rot introduces w but introduces wy only multiplied by κ'. The latter is supported at a positive distance from supp w0, so derivatives of the explicit Gaussian kernel give a uniformly integrable, indeed exponentially small near-zero-time, term there. The remaining terms use h bounded by M0 and w uniformly L². Adding the checked corrector gives the linear residual in L²_tL²_x.

For convection, write the two velocity components as U,V. V is uniformly bounded pointwise. Thus V∂y u is L²_tL²_x by the checked energy-gradient bound. Write U=aκw+Ureg with Ureg uniformly bounded. Its contribution Ureg∂x u is again L²_tL²_x. On an x-interval J containing supp a and away from vertical strips, R depends only on y. Since bx=0 along the horizontal sides, bx=O(distance) and therefore ∂x r is uniformly O(|m|) on J, including the horizontal shrinking strips. All other x derivatives there are bounded by C(1+|w|). Thus the remaining singular convection is bounded by C(|w|+|w|²).

Finally,

$$\int_0^T\|w(t)\|_4^4dt\le2\sup_t\|w(t)\|_2^3\sqrt{T}\left(\int_0^T\|w_y(t)\|_2^2dt\right)^{1/2}<\infty.$$

This proves N(u)∈L²_tL²_x and hence f=L+N(u) in exactly the original body-force class. No linear Stokes-to-NS estimate is left implicit.

## 6. Initial trace and energy class

The only leading gradient of the main velocity is aκwy, controlled by the one-dimensional heat energy identity. All other terms are controlled by h,w and fixed smooth functions; the harmonic and corrector terms obey the checked estimates. Hence the asserted L∞_tL² and L²_tH¹_0 energy class holds.

For initial convergence there is a direct uniform estimate on 0≤y≤1:

$$|h(t,y)-h_0(y)|\le |M(t)-M_0|+\|w(t)-w_0\|_{L^2(0,1)}.$$

Thus the packet's use of mass convergence and local L² convergence really controls the integrated tail h; no unjustified inference of global L¹ convergence is necessary. Together with w's L² convergence and m,r→0 this gives u(t)→u0 strongly in L².

The initial stream lies in H¹_0: h0′=w0∈L², all traces cancel as stated, and the x cutoff is compactly supported. Density of compactly supported smooth streams in H¹_0 gives rotations in Cc∞_σ converging to u0 in L². Therefore u0 belongs to the repository's exact H_sigma closure.

On [ε,T] the full solution and forcing are smooth, and no-slip/divergence remove the pressure work. Integrating the energy identity there and sending ε→0 is justified by strong initial convergence, ∫||∇u||²<∞ and f∈L². This establishes the actual energy equality and the original solenoidal weak equation with initial trace. The viscous form 2ν(ε(u),ε(v)) equals ν(∇u,∇v) for zero-boundary divergence-free u, so the model matches the canonical Newtonian convention.

## 7. Relation to MINI limits and uniqueness of pressure

In two dimensions every energy velocity belongs to L⁴_tL⁴_x by the planar inequality ||z||₄²≤C||z||₂||∇z||₂. Its restricted derivative is L²_tV_sigma* because convection has norm ≤C||u||₄². The Hilbert-triple energy identity on V_sigma⊂H_sigma⊂V_sigma* is therefore applicable to a difference of two solutions. The packet's difference estimate and Gronwall prove uniqueness. This is a *restricted-space* identity and does not assume the false full-derivative regularity. Thus any subsequential velocity limit from the actual MINI convergence theorem equals the constructed u with its force and initialization data.

The current local integrated-pressure uniqueness lemma then suffices: this explicit p is an L¹_tQ time-distribution pressure; if another Q-valued pressure distribution represented the same velocity/force, the difference would vanish by the divergence right inverse. The explicit mean-zero p is therefore the unique actual pressure and cannot be replaced by an L^(4/3)_tQ pressure. Its primitive −mφ is bounded and initially zero, consistent with the additive primitive theorem.

## Authoring disposition

The sibling's proposed counterexample ID `cex-na-polyhedral-energy-ns-pressure-endpoint` is mathematically supported, with square heat mass-loss and shrinking-stream-corrector suppliers if the owner chooses to split the proof. A canonical proof should retain the estimates above and either prove or link the ordinary two-dimensional energy-uniqueness/Hilbert-triple input when tying the example to MINI limits. There is no missing geometric transfer, initial-layer estimate, nonlinear forcing estimate, or wrong-domain assumption in this packet.
