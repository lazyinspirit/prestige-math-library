

## Remark

For the mathematical terms, let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and $\iota:\Sigma_0\hookrightarrow M$ a spacelike embedded three-manifold. Vacuum initial data mean $(\Sigma_0,h_0,K_0)$, where $h_0=\iota^*g$ and $K_0(V,W)=g(\nabla_Vn,W)$ for tangent vectors $V,W$ and the unique future-directed unit normal $n$; the data satisfy the matter-free, zero-cosmological-constant specialization of the initial-data constraints. Here the vacuum Einstein equation means $\operatorname{Ric}(g)=0$ with the curvature convention defining its Ricci tensor. A Cauchy hypersurface is a spacelike embedded hypersurface met exactly once, in parameter value, by every inextendible causal curve. A future globally hyperbolic development is a time-oriented Lorentzian solution with an embedding of $\Sigma_0$ as a Cauchy hypersurface inducing $h_0$ and $K_0$. The local Kerr definition uses geometric parameters $M>0$ and $|a|<M$ for the subextremal exterior; when a physical interpretation is adopted, $M=G_Nm_{\mathrm{phys}}/c^2$ and $a=J_{\mathrm{phys}}/(m_{\mathrm{phys}}c)$, with $G_N$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c$ in $\mathrm{m\,s^{-1}}$, $m_{\mathrm{phys}}$ in $\mathrm{kg}$ and $J_{\mathrm{phys}}$ in $\mathrm{kg\,m^2\,s^{-1}}$. Thus $M$ and $a$ have units $\mathrm m$, and $a$ is the specific-angular-momentum length parameter. The paper's notation $\operatorname{Kerr}(a_0,m_0)$ corresponds to $(a,M)=(a_0,m_0)$, and its smallness condition $|a_0|/m_0\ll1$ is dimensionless.

For asymptotic terminology, an end is a component outside a compact subset of $\Sigma_0$, equipped with coordinates $x$ onto $\{x\in\mathbb R^3:r=|x|>R\}$. A basic asymptotically flat initial-data convention is $h_{ij}-\delta_{ij}=O_1(r^{-1})$ and $K_{ij}=O_1(r^{-2})$: $T=O_k(r^{-q})$ means that each component satisfies $|\partial^\alpha T|\le C_\alpha r^{-q-|\alpha|}$ for all multiindices $|\alpha|\le k$, uniformly in direction for sufficiently large $r$. These are the explicit end conditions in Gourgoulhon, §7.2.1, equations (7.1)–(7.4); they describe the asymptotic terminology, not a sufficient stability hypothesis. The local ADM-end definition gives the mass surface integral on its more specialized end class; it does not assert that its special expansion exhausts the data in the Kerr source. In a fixed asymptotically Cartesian chart, the geometric ADM mass is, whenever the finite limit exists,

$$
m_{\rm ADM}=\frac{1}{16\pi}\lim_{R\to\infty}\int_{|x|=R}(\partial_jh_{ij}-\partial_ih_{jj})\frac{x^i}{R}\,dS_\delta.
$$

Here $dS_\delta$ is Euclidean sphere area, repeated indices are summed from $1$ to $3$, and the physical energy and mass are $E_{\rm ADM}=c^4m_{\rm ADM}/G_N$ and $M_{\rm ADM}=c^2m_{\rm ADM}/G_N$. For a chosen oriented rotation axis in that chart, let $\varphi=x^1\partial_2-x^2\partial_1$ for the third axis, with cyclic variants for the other axes. With the present convention $K(V,W)=g(\nabla_Vn,W)$, its geometric angular-momentum charge is, whenever this finite limit exists,

$$
\mathcal J(\varphi)=-\frac{1}{8\pi}\lim_{R\to\infty}\int_{|x|=R}\bigl(K_{ij}-(\operatorname{tr}_hK)h_{ij}\bigr)\varphi^i\nu_h^j\,dS_h.
$$

Here $\operatorname{tr}_hK=h^{ij}K_{ij}$, $\nu_h$ is the outward $h$-unit sphere normal, and $dS_h$ is its induced area. This is Gourgoulhon's equation (7.63) with the sign translated from his $K(V,W)=-g(\nabla_Vn,W)$, equation (2.43). The geometric charge has units $\mathrm{m^2}$ and $J_{\rm phys}=c^3\mathcal J/G_N$; for Kerr about its spin axis, $\mathcal J=Ma$. Thus the source's parameter $a_0$ denotes the spin length, not a total angular momentum with SI units. Neither existence nor coordinate invariance of angular momentum follows just from the displayed basic falloff: a fixed asymptotic frame and the source's charge/admissibility conditions are retained, rather than silently imposing one additional parity or gauge condition on its theorem; see Gourgoulhon §7.5.2 for this distinction.

In this report the stability assertion quantifies over precisely the source's own initial-data class. Definition 3.4.2 takes an initial-data layer $L_0(a_0,m_0)$ in the future of asymptotically flat data on a spacelike $\Sigma_0$, with source parameters $m_0$ and $a_0$, and defines $(\epsilon_0,k)$-admissibility using its initial-layer norm $I_k$ from §3.3.6. The unnumbered Main Theorem (version 2) in §3.4.3 assumes $|a_0|/m_0$ sufficiently small, $k_{\rm large}$ sufficiently large, $\epsilon_0$ sufficiently small, and in particular $I_{k_{\rm large}+10}\le\epsilon_0^2$. Definition 3.4.5 uses “admissible future null complete” for a future development of such a layer with complete $\mathscr I^+$ and its other listed geometric conditions.

For the completeness terminology, a null generator with affine parameter $\lambda$ has nonzero future null tangent $\ell$, $g(\ell,\ell)=0$ and $\nabla_\ell\ell=0$; future completeness means that its maximal future affine parameter is unbounded above. A change $\lambda\mapsto A\lambda+B$, $A>0$, preserves this property; complete future null infinity means that every one of its future generators is complete in this sense. Here the source's future null infinity $\mathscr I^+$ is the asymptotic boundary $r\to\infty$ along its outgoing $u$-foliation, not an additional hypothesis of a smooth conformal completion. Section 3.8.1, pp. 152–153, identifies its limiting null generators and explains completeness using the leaves for all $u\ge1$ and the generator normalization: the limiting generator has $du/d\lambda=2+O(\epsilon_0/u^{1+\delta})$ for the source's $\delta>0$ and small $\epsilon_0$, hence this derivative is bounded above and below by positive constants and unbounded $u$ gives unbounded future affine parameter. This specifies the reported boundary completeness; it does not say that every null geodesic of the black-hole spacetime is future complete.

The arXiv v1 abstract says that the authors prove full unconditional nonlinear stability of this small-angular-momentum Kerr family in asymptotically flat solutions of the vacuum Einstein equations. Its simplified Theorem 1.2.1 states that the future globally hyperbolic development of a general initial-data set in that source class, sufficiently close in a suitable topology to $\operatorname{Kerr}(a_0,m_0)$ initial data and with sufficiently small $|a_0|/m_0$, has complete future null infinity and converges in the source's set $J^{-1}(\mathscr I^+)$ to a nearby $\operatorname{Kerr}(a_\infty,m_\infty)$, with final parameters close to the initial ones. The precise convergence and parameter-closeness conclusions are stated in the authors' norms, including estimate (3.4.8).

This is a report of the authors' stated result and its source-defined scope, not a local proof or independent verification of the full series. The v1 abstract records that three companion papers had been released and the remaining papers were expected; §1.2.1 identifies estimates assigned to forthcoming papers. The 2008 review's discussion of then-known global constructions is historical only. This remark makes no current-status claim about whether the full subextremal or extremal Kerr stability problem is open or solved.

## Remark references

[Klainerman and Szeftel, abstract, §1.2.1, precise version §3.4.3, and null infinity §3.8.1](https://arxiv.org/pdf/2104.11857v1)

[Jaramillo, Valiente Kroon and Gourgoulhon, §§1.2.1 and 2.2](https://arxiv.org/pdf/0712.2332v2)

[[def-gr-fx-kerr-exterior]]

[[def-gr-spacelike-initial-data-and-constraints]]

[[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, §2.3.4 equation (2.43), §§7.2.1, 7.3.1 and 7.5.1–7.5.2](https://arxiv.org/pdf/gr-qc/0703035v1)

[[def-gr-fx-adm-end]]

[[def-gr-fx-future-null-geodesic-completeness]]
