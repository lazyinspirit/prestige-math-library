
## Statement

Assume the Axiom of Choice and Countable Choice. On $\mathcal H=L^2(\mathbb R^3,dp;\mathbb C)$ with $\langle f,h\rangle=\int_{\mathbb R^3}f(p)\overline{h(p)}\,dp$, let $H_0=M_{|p|^2}$ on its maximal domain $\{f:|p|^2f\in L^2\}$, let $g(p)=\pi^{-3/4}e^{-|p|^2/2}$, and put

$$m(z):=\langle(H_0-zI)^{-1}g,g\rangle,\qquad \operatorname{Im}z>0.$$

This is a dimensionless model; no physical units are assigned to $p$ or $z$.

For $w\in\mathbb C$, define the entire function

$$\mathcal E(w):=\frac{2}{\sqrt\pi}\int_{\Gamma_w}e^{-\zeta^2}\,d\zeta,\qquad \Gamma_w=\{w+t:t\ge0\},$$

where $\Gamma_w$ is the horizontal ray oriented from $w$ toward $+\infty+w$. For any $E_0>0$, take a disk $D$ centered at $E_0$ with $0\notin D$, and the holomorphic square root $k:D\to\mathbb C$ with $k(E_0)=\sqrt{E_0}>0$. Then $m$ has the local analytic continuation through $E_0$

$$m_{\mathrm{cont}}(z)=2+2i\sqrt\pi\,k(z)e^{-z}\mathcal E(-ik(z)),\qquad z\in D.$$

## Statement references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-complex-differentiability-holomorphic-and-entire]]

[[def-nrqmx-resonance-matrix-element-poles]]

[[thm-dominated-convergence]]

[[thm-gaussian-integral]]

[[thm-identity-theorem-holomorphic-functions]]

[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]

[[thm-polar-coordinates-formula-for-lebesgue-measure]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Facts & Assumptions

**Given:** The Hilbert space, multiplication operator, vector $g$, scalar resolvent matrix element, and local continuation definition in the Statement.

[A1] Assume the Axiom of Choice and Countable Choice as required by the self-adjoint multiplication and integration suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Real multiplication by a measurable finite real function on its maximal domain is self-adjoint; in particular $H_0=M_{|p|^2}\ge0$ on the domain stated above ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F2] $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F3] For a radial integrand in $\mathbb R^3$, $dp=4\pi r^2\,dr$ after angular integration ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] Nonnegative iterated integrals may be interchanged by Tonelli's theorem on sigma-finite product measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] Dominated convergence applies to the finite integrals and locally uniform parameter bounds used below ([[thm-dominated-convergence]]).

[F6] Holomorphic functions agreeing on a set with an accumulation point in a connected domain agree throughout that domain ([[thm-identity-theorem-holomorphic-functions]]).

## Proof

**Given:** [A1], the Hilbert space, multiplication operator, normalized vector $g$, scalar resolvent element, and the disk and branch data in the Statement.

1.1 By [F1], $H_0$ is self-adjoint and nonnegative. The Gaussian integral in [F2], applied in each coordinate and combined with Tonelli [F4], gives $\int_{\mathbb R^3}e^{-|p|^2}\,dp=\pi^{3/2}$, so $\|g\|=1$. Polar coordinates [F3] and the resolvent multiplier therefore give
$m(z)=\frac{4}{\sqrt\pi}\int_0^\infty\frac{r^2e^{-r^2}}{r^2-z}\,dr$
for $\operatorname{Im}z>0$. The denominator is nonzero on the integration ray, and the integral is locally uniformly dominated on the upper half-plane, so it defines the stated resolvent matrix element. [A1, F1, F2, F3, F4, F5]

1.2 For $\operatorname{Re}a>0$, put $I(a)=\int_0^\infty e^{-r^2}(r^2+a^2)^{-1}\,dr$. When $a>0$ is real, the Laplace representation of $(r^2+a^2)^{-1}$ and Tonelli [F4] give $I(a)=\int_0^\infty e^{-a^2s}\int_0^\infty e^{-(1+s)r^2}\,dr\,ds=\frac{\sqrt\pi}{2}\int_0^\infty\frac{e^{-a^2s}}{\sqrt{1+s}}\,ds$ by [F2]. The substitutions $u=\sqrt{1+s}$ and $v=au$ then give $I(a)=\sqrt\pi e^{a^2}\int_1^\infty e^{-a^2u^2}\,du=\frac{\sqrt\pi e^{a^2}}a\int_a^\infty e^{-v^2}\,dv=\frac{\pi}{2a}e^{a^2}\mathcal E(a)$, using the horizontal-ray definition of $\mathcal E$ for real $a>0$. [F2, F4, algebra]

2.1 The function $I$ is holomorphic on $\operatorname{Re}a>0$: on a compact subset of that half-plane, the denominator $r^2+a^2$ is uniformly bounded away from zero for bounded $r$, while $|r^2+a^2|\ge r^2-|a|^2\ge3r^2/4$ for $r\ge2\max|a|$. These estimates dominate the integrand and its $a$-derivative by an integrable Gaussian times a polynomial, so [F5] justifies differentiation under the integral. Writing $\mathcal E(w)=\frac2{\sqrt\pi}\int_0^\infty e^{-(w+t)^2}\,dt$, the integrand and its $w$-derivative on each compact set of $w$ are bounded by $C(1+t)e^{-t^2/4}$ after enlarging $C$, so [F5] also proves that $\mathcal E$ is entire. Thus both sides of the identity in step 1.2 are holomorphic on the connected half-plane $\operatorname{Re}a>0$; since they agree for every positive real $a$, [F6] proves the identity throughout that half-plane. [step 1.2, F5, F6, algebra]

3.1 For $\operatorname{Im}z>0$, choose the square root $a=\sqrt{-z}$ with $\operatorname{Re}a>0$. Since $r^2/(r^2-z)=1+z/(r^2-z)$, $m(z)=2+\frac{4z}{\sqrt\pi}I(a)$; substituting the identity from step 2.1 and $z=-a^2$ gives $m(z)=2-2\sqrt\pi\,a e^{-z}\mathcal E(a)$.
On $D\cap\{\operatorname{Im}z>0\}$, the root $a$ equals $-ik(z)$: both square to $-z$, and $\operatorname{Re}(-ik(z))>0$. Substitution gives $m(z)=2+2i\sqrt\pi\,k(z)e^{-z}\mathcal E(-ik(z))$ there. The right hand side is holomorphic throughout $D$, so it is the required local continuation through $E_0$. [step 2.1, F2, F5, algebra] ∎

