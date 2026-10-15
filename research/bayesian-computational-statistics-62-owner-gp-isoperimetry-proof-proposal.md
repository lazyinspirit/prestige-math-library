# Proposed local completion of finite-dimensional Gaussian expansion

This is a proof proposal while native batches15/16 are active. It changes no library source, readiness, metadata or acceptance. It preserves the exact existing finite-dimensional expansion Statement, including inner measure and endpoints.

The complete nine-page Bobkov (1997) article was retrieved and read (`https://www-users.cse.umn.edu/~bobkov/papers/1997_AOP.pdf`, printed206–214). Its Remarks3/perimeter passage is compressed. The complete semigroup proof in Chafaï–Lehec, *Lectures on the logarithmic Sobolev inequality*, Chapter4, pp45–50, especially Theorem4.6 pp49–50, was also read from the full83-page PDF (`https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf`). The following supplies the perimeter-to-neighborhood argument locally with finite unions of balls; no spherical isoperimetry, Rademacher theorem, coarea theorem or unproved perimeter approximation is used.

Let φ be the standard Gaussian density, Φ its CDF and I=φ∘Φ^{-1} on(0,1), with I(0)=I(1)=0. Direct differentiation gives I'=-Φ^{-1} and II''=-1.

1. For smooth f valued in[η,1−η], η>0, with all derivatives bounded, define the Ornstein–Uhlenbeck average u_t(x)=∫f(e^{-t}x+sqrt(1−e^{-2t})y)γ_d(dy). Differentiating the explicit integral and integrating the y-coordinate Gaussian density by parts gives ∂_t u=L u, L=Δ−x·∇, ∇u=e^{-t}P_t∇f and invariance ∫P_tg dγ=∫g dγ. Boundary terms vanish by bounded derivatives and Gaussian decay. These are the same explicit computations already supplied in the local logarithmic-Sobolev proof; no entropy/isoperimetry conclusion is borrowed from it.

2. Put v=∇u, H=D²u, K=I(u)²+|v|², and J(t)=∫sqrt(K)dγ. For every compact time interval differentiation and Gaussian integration by parts are justified by the fixed positive lower bound for I(u), bounded derivatives and integrable Gaussian polynomial factors. Using ∇Lu=L∇u−∇u and II''=−1 gives

$$J'(t)=\int\frac{-\|I'(u)vv^T-I(u)H\|_F^2+|Hv|^2-\|H\|_F^2|v|^2}{(I(u)^2+|v|^2)^{3/2}}\,d\gamma_d\le0.$$

For the last sign, apply Cauchy–Schwarz to each row of H. Expanding the numerator verifies it is −I'²|v|⁴+2II'v^THv−I²||H||²_F−||H||²_F|v|²+|Hv|², so no curvature identity is left implicit. As t→∞, u_t→∫f dγ and ∇u_t→0 pointwise, with a constant dominating sqrt(K). Thus

$$I\left(\int f\,d\gamma_d\right)\le\int\sqrt{I(f)^2+|\nabla f|^2}\,d\gamma_d\le\int I(f)\,d\gamma_d+\int|\nabla f|\,d\gamma_d.$$

Replace f by η+(1−2η)f and let η↓0 to cover smooth f valued in[0,1].

3. Let A be a finite union of closed Euclidean balls of a common positive radius. Its boundary lies in finitely many spheres, hence has Lebesgue and Gaussian measure zero. For h>0 set f_h(x)=(1−dist(x,A)/h)_+. This function is1 on A,0 outside A+hB, and globally1/h-Lipschitz. Except on finitely many spheres and nearest-center bisector hyperplanes, it is differentiable with |∇f_h|≤1/h, and its gradient vanishes outside (A+hB)\A. The exceptional hypersurfaces have Lebesgue measure zero, directly by Fubini (a sphere has at most two points on almost every coordinate line; a hyperplane is handled after an orthogonal coordinate change).

4. To apply step2 without assuming a Lipschitz extension theorem, convolve f_h with a nonnegative unit-mass smooth bump supported in a ball of radius δ. The functions converge uniformly to f_h and remain in[0,1]. On each coordinate line f_h is continuous and piecewise C¹ with bounded derivative (the finitely many nearest-center or sphere intersection exceptions partition that line; constant coincident centers can be removed). One-dimensional integration by parts and Fubini therefore give ∇(f_h*ρ_δ)=(∇f_h)*ρ_δ. At every point outside the finitely many exceptional hypersurfaces, the right side converges to ∇f_h; its norm is≤1/h. Dominated convergence against Gaussian probability yields convergence of both integrals in step2. Consequently

$$I\left(\int f_h\,d\gamma_d\right)\le\int I(f_h)\,d\gamma_d+\frac{\gamma_d(A+hB)-\gamma_d(A)}h.$$

As h↓0, the first integral on the right tends0: f_h→1_A and I(0)=I(1)=0. The integral of f_h tends γ_d(A). Hence the lower right derivative of the Gaussian neighborhood mass is at least I(γ_d(A)).

5. Write A_r=A+rB and V(r)=γ_d(A_r). This is again a finite union of the same-center balls with common radius increased by r. On every compact r-interval, V is Lipschitz: 0≤V(t+h)−V(t) is bounded by the sum of the Gaussian masses of the finitely many spherical shells, and each shell is bounded by the maximum Gaussian density times its Euclidean volume difference, which is≤Ch on a bounded-radius interval. Step4 applied to A_r therefore gives V'(r)≥I(V(r)) at almost every r. For finite r,0<V(r)<1. The function Φ^{-1}∘V is absolutely continuous on each compact r-interval, since V stays in a compact subinterval of(0,1), and its derivative is V'/I(V)≥1 almost everywhere. The fundamental theorem of calculus gives

$$\gamma_d(A+rB)\ge\Phi(\Phi^{-1}(\gamma_d(A))+r).$$

6. For arbitrary nonempty compact K and r>0, cover K by finitely many closed δ-balls centered in K, where0<δ<r, and call their union A_δ. Then K⊂A_δ⊂K+δB and A_δ+(r−δ)B⊂K+rB. Step5 gives γ_d(K+rB)≥Φ(Φ^{-1}(γ_d(K))+r−δ). Let δ↓0. Finally for Borel E choose compact K⊂E with masses increasing arbitrarily close to γ_d(E), using Gaussian inner regularity. Each K+rB is compact and contained in E+rB, so the required inner-measure inequality follows. If γ(E)=0 the right side is0; if γ(E)=1 compact inner approximation gives lower bound1. At r=0 Gaussian inner regularity gives equality of inner and ordinary measure for E.

## Required integration interfaces

The eventual source can cite the actual finite-dimensional Gaussian density and normal-CDF suppliers, differentiation under the integral, dominated convergence/Fubini, Gaussian integration by parts, smooth bump/mollifier definition, one-dimensional absolutely-continuous fundamental theorem, Euclidean ball volume/change of variables, Gaussian inner regularity, and distance-to-set Lipschitz/compact finite-cover facts. AC already assumed by its original Statement supplies the choice used by these local interfaces; explicit DC/CC carry-through must be checked against the actual supplier contracts rather than invented. The proof is self-contained on the sharp isoperimetric conclusion and does not use logarithmic Sobolev to derive the sharp profile.
