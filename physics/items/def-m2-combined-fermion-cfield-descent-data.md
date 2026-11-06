---
id: def-m2-combined-fermion-cfield-descent-data
kind: definition
title: M2 Combined Fermion Cfield Descent Data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
axiom_strength: ZF + full AC inherited from the even-dimensional spinor and GTS characteristic-class prerequisites
deps:
  - def-axiom-of-choice
  - def-gts-cheegersimons-differential-character
  - def-m2-odd-dimensional-spinor-and-dirac-data
  - def-even-dimensional-spinor-bundle-chirality-and-spin-connection
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-m2-odd-dimensional-spinor-and-dirac-data: mathematical-premise
  def-even-dimensional-spinor-bundle-chirality-and-spin-connection: mathematical-premise
physical_scope: >-
  Pure mathematical Euclidean geometric/operator data. No physical membrane
  quantization, Lorentzian Hessian identification, or F4 realization is asserted.
proof_status: abstract geometric definition; actual physical instantiation unsupplied
relations:
  motivated_by:
    - def-m2-brane-worldvolume-action
    - post-mtheory-shifted-g4-quantization
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Daniel S. Freed and Gregory W. Moore, Setting the Quantum Integrand of M-Theory"
      url: https://arxiv.org/pdf/hep-th/0409135v3
      locator: "§1.3, especially Propositions 1.26, 1.28, and 1.31, PDF pp. 11–14; §5.2, Eq. (5.2), PDF pp. 36–37. The source model is retained; no local family-analytic proof is inferred."
    - title: "Duiliu-Emanuel Diaconescu, Daniel S. Freed, and Gregory W. Moore, The M-theory 3-form and E8 gauge theory"
      url: https://arxiv.org/pdf/hep-th/0312069v2
      locator: "§§2–3, especially the shifted differential cocycle and E8 model, PDF pp. 5–14; source conventions are kept separate from any physical field-unit crosswalk."
---

## Statement

Define a **combined Euclidean M2 fermion/C-field descent package** to be the specified smooth family of closed spin three-manifolds embedded in a spin eleven-manifold, its rank-eight spin normal data, a shifted differential degree-four cocycle with an arbitrary fixed integral shift $u$ retaining integral and flat data, and the supplied E8/operator/Pfaffian/electric-line data described below. Normalized local total potentials and unit-coupled total potentials are distinguished explicitly. A Freed–Moore source-presentation refinement is additional matching data; its spin-class, integral-label and global correction-form equations are imposed only on that refinement, not on the general shifted-cocycle package. The package includes real or quaternionic structures, domains, spectral-cut line metrics, connections and transitions, but no tensor pairing or different-operator sign-line comparison. The package is a mathematical data type, not a claim that such data are physically realized.

## Definition

Assume full AC, as already required by the even-dimensional spinor and GTS characteristic-class prerequisites. This exposes the inherited hypothesis; it does not derive any physical realization.

Let $B$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary. Let $Y$ be a closed Riemannian spin eleven-manifold, and let $\pi:\Sigma\to B$ be a proper smooth submersion with compact, closed, oriented spin three-dimensional fibres $\Sigma_b$. A smooth map $f:\Sigma\to Y$ is required to restrict to an embedding on each fibre. Write $T^v\Sigma:=\ker(d\pi)$ and
$$\nu:=df|_{T^v\Sigma}:T^v\Sigma\hookrightarrow f^*TY,\qquad N:=f^*TY/\nu(T^v\Sigma).$$
The fibrewise embedding makes $\nu$ fibrewise injective; its constant rank makes its image a subbundle, so this cokernel is a real rank-eight vector bundle. The metric identifies it with the orthogonal complement of that image. A compatible metric, spin lift, connection, and orientation on $N$ are specified. The diagram records only that the family embedding is over $B$:

For each $b\in B$, write $f_b:=f|_{\Sigma_b}:\Sigma_b\hookrightarrow Y$. If $\zeta\in\Omega^3(Y)$, integration over the fibre means $\int_{\Sigma_b}f_b^*\zeta$. The supplied global holonomy data include a smooth integral fundamental cycle $z_b$ of the oriented fibre; for a smooth integral chain $z=\sum_j n_j\sigma_j$ on $\Sigma_b$, $(f_b)_\#z:=\sum_j n_j(f_b\circ\sigma_j)$ is its induced chain in $Y$.

```tikzcd
\Sigma \arrow[r,"{(\pi,f)}"] \arrow[d,"\pi"'] & B\times Y \arrow[d,"\mathrm{pr}_B"] \\
B \arrow[r,"\mathrm{id}_B"'] & B
```

The diagram asserts $\mathrm{pr}_B\circ(\pi,f)=\pi$; the fibrewise embedding and all spin structures remain explicit data, and no proof below relies on the diagram.

A specified shifted differential degree-four cocycle is represented, in the following declared cochain convention, by
$$ (u,a,t,\omega),\qquad u,a\in Z^4_{\mathrm{sm}}(Y;\mathbb Z),\quad t\in C^3_{\mathrm{sm}}(Y;\mathbb R),\quad \omega\in\Omega^4(Y),\quad d\omega=0, $$
with
$$
\delta t=\operatorname{Int}(\omega)-a_{\mathbb R}-\tfrac12u_{\mathbb R}.
$$
Here $C^*_\mathrm{sm}$ is the smooth singular cochain complex, $Z^*_\mathrm{sm}$ its cocycles, $\operatorname{Int}(\omega)(c)=\int_c\omega$, and a subscript $\mathbb R$ means change of coefficients. The displayed equation makes $[\omega]-[u]_{\mathbb R}/2=[a]_{\mathbb R}$; the cochain $t$ retains flat information lost by this de Rham relation. The representative changes $(a,t,\omega)\mapsto(a+\delta b,t-b_{\mathbb R}-\delta s,\omega)$, for integral $b\in C^3_\mathrm{sm}(Y;\mathbb Z)$ and real $s\in C^2_\mathrm{sm}(Y;\mathbb R)$, are identified. The shift cocycle $u$ and its convention are fixed data. This definition asserts neither existence for every shift nor an identification with a physical $G_4$ field.

**General potential and E8 data.** The fixed integral shift $u$ remains arbitrary in the general package. Supply the local potentials and transition cochains with an actual compatible identification to $(u,a,t,\omega)$. On a specified open cover $Y=\bigcup_i U_i$, a normalized local total potential $\mathcal C_i\in\Omega^3(U_i)$ obeys $d\mathcal C_i=\omega|_{U_i}$; the corresponding unit-coupled total potential is $C_{M,i}=2\pi\mathcal C_i$ and obeys $dC_{M,i}=2\pi\omega|_{U_i}$. On a fibre with $f_b(\Sigma_b)\subset U_i$ its formal phase is $\exp(i\int_{\Sigma_b}f_b^*C_{M,i})=\exp(2\pi i\int_{\Sigma_b}f_b^*\mathcal C_i)$. A unit-coupled total potential must not instead be used with an additional factor $2\pi$ in the exponent. Global holonomy and line descent are supplied data; a shifted field is not silently made into an ordinary differential character.

Also supply an actual principal $E_8$ bundle $P\to Y$, a connection $A$, and its specified ordinary degree-four differential refinement $x_A$. Write $\alpha=I(x_A)$ and $\Omega_A=R(x_A)$. Its Chern--Simons factor on the fibre is
$$CS_{\Sigma_b}(A):=\exp\!\bigl(2\pi i\,x_A((f_b)_\#z_b)\bigr).$$
The general package does not infer a relation between $\alpha$, $[a]$, and $[u]$ just from their names or their real images. Its supplied electric line retains its actual local sections, transition maps, metrics and connections. No spin-shift matching or universal E8 presentation is asserted for arbitrary such data.

**Freed--Moore specialization: additional source-presentation data.** For use of the exact closed smooth source model, specify a matching refinement in which $[u]=\lambda(TY)$, with a chosen integral spin class satisfying $2\lambda(TY)=p_1(TY)$ and source representative $\Lambda=\operatorname{tr}R^2$. The actual E8 refinement has the source normalization $\Omega_A=\operatorname{tr}F_A^2$, where $\operatorname{tr}F_A^2=\frac1{60}\operatorname{Tr}_{248}(F_A^2/(8\pi^2))$ and $\operatorname{tr}R^2=-\operatorname{Tr}_{11}(R^2)/(16\pi^2)$. Supply the global normalized correction form $c_{\mathrm{corr}}\in\Omega^3(Y;\mathbb R)$ and the actual differential/integral label identification with
$$
\omega=\Omega_A-\tfrac12\Lambda+d c_{\mathrm{corr}},\qquad [a]=\alpha-[u].
$$
These are matching conditions for this source refinement, not extra conditions on every general package. Equality of real curvature classes alone implies only $[a]_{\mathbb R}=\alpha_{\mathbb R}-[u]_{\mathbb R}$; it does not imply the displayed integral equality including torsion. That equality is the explicitly supplied integral-label crosswalk in the differential identification.

On a local trivialization of $P$, let $\mathsf A_i$ be the $\mathfrak e_8$-valued connection one-form and put $F_i=d\mathsf A_i+\mathsf A_i\wedge\mathsf A_i$. In a local oriented orthonormal frame of $TY$, let $\Gamma_i$ be the Levi-Civita connection one-form and put $R_i=d\Gamma_i+\Gamma_i\wedge\Gamma_i$. Here $\operatorname{Tr}_{248}$ is the adjoint trace of $E_8$ and $\operatorname{Tr}_{11}$ is the trace in the defining real representation. With $F_i^2:=F_i\wedge F_i$ and $R_i^2:=R_i\wedge R_i$, define the local normalized Chern--Simons three-forms
$$CS_3(A)_i:=\frac{1}{60\cdot8\pi^2}\operatorname{Tr}_{248}\!\left(\mathsf A_i\wedge d\mathsf A_i+\tfrac23\mathsf A_i\wedge\mathsf A_i\wedge\mathsf A_i\right),\qquad CS_3(g)_i:=-\frac{1}{16\pi^2}\operatorname{Tr}_{11}\!\left(\Gamma_i\wedge d\Gamma_i+\tfrac23\Gamma_i\wedge\Gamma_i\wedge\Gamma_i\right).$$
The graded trace calculation gives $dCS_3(A)_i=\operatorname{tr}F_i^2=\Omega_A|_{U_i}$ and $dCS_3(g)_i=\operatorname{tr}R_i^2=\Lambda|_{U_i}$. Their normalized transition cochains and integral/differential identifications are supplied data; no global Chern--Simons three-form is asserted. In this refinement the local normalized total potential is $\mathcal C_i=CS_3(A)_i-\tfrac12CS_3(g)_i+c_{\mathrm{corr}}$, with $d\mathcal C_i=\omega|_{U_i}$. The source's global little field $c_{\mathrm{corr}}$ is not a local total potential and is not assigned $dc_{\mathrm{corr}}=2\pi\omega$. No construction of all matching refinements, no canonical choice of flat data and no physical CJS unit identification is inferred.

Let $S(\Sigma_b)$ and its formal Dirac expression be supplied by [[def-m2-odd-dimensional-spinor-and-dirac-data]]. Let $S^+(N_b)$ be the half-spin bundle selected by the specified orientation and Clifford convention on the rank-eight normal bundle; it is defined by the pinned even-dimensional spinor supplier [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]]. Put $E_{0,b}:=S(\Sigma_b)$ and $E_{f,b}:=S(\Sigma_b)\otimes S^+(N_b)$. The geometric family specifies a smooth vertical Riemannian metric, a horizontal splitting $T\Sigma=T^v\Sigma\oplus H$, and compatible unitary Clifford connections $\nabla^{E_{0,b}}$ and $\nabla^{E_{f,b}}$; the latter is the tensor-product connection on the spinor and normal half-spin factors. Let $d\mu_b$ be the volume measure of the vertical metric and define $\mathcal H^0_b(E):=L^2(\Sigma_b,E;d\mu_b)$. Define $\mathcal H^1_b(E)$ as the completion of $C^\infty(\Sigma_b,E)$ in the norm
$$\|\psi\|_{H^1_b(E)}^2:=\|\psi\|_{\mathcal H^0_b(E)}^2+\int_{\Sigma_b}|\nabla^E\psi|^2\,d\mu_b.$$
The canonical inclusion $\mathcal H^1_b(E)\hookrightarrow\mathcal H^0_b(E)$ is dense.
For a local vertical orthonormal frame $(e_1,e_2,e_3)$ with dual coframe $(e^1,e^2,e^3)$, the formal operators on smooth sections are
$$D_{0,b}\psi=\sum_{j=1}^3 c(e^j)\nabla^{E_{0,b}}_{e_j}\psi,\qquad D_{f,b}\Psi=\sum_{j=1}^3(c(e^j)\otimes I)\nabla^{E_{f,b}}_{e_j}\Psi.$$
The supplied operator realizations have domains exactly $\mathcal H^1_b(E_{0,b})$ and $\mathcal H^1_b(E_{f,b})$ in their respective $\mathcal H^0$ spaces. The input data require these realizations to be self-adjoint with compact resolvent and to have the source-compatible real or quaternionic structures. Those analytic properties and the smooth parameter dependence are hypotheses carried by the supplied operator family; they are not inferred here for arbitrary geometric Dirac operators.

Clifford multiplication satisfies $c(v)c(w)+c(w)c(v)=-2\langle v,w\rangle$ and is parallel. For the exact Freed--Moore $8k+3$ operator model, supply its graded module $M^0\oplus M^1$ (the doubled odd spinor module), odd Dirac operator $D$ with its first Sobolev domain defined by the same metric-and-connection completion, and odd volume operator $\omega_{\rm vol}$, so the stated ungraded operator is the identified operator $\omega_{\rm vol}D$ on $M^0$ with the induced $H^1$ domain. Supply a parallel antiunitary $J$ with $J^2=-1$, preserving the domains and commuting with Clifford multiplication, $D$, and $\omega_{\rm vol}$; equivalently $J:M\to\overline M$ is unitary with $\overline J J=-1$. In the normal-twisted model the real structure on the half-spin twisting bundle is part of the matching data. These are explicit source-model hypotheses, not a derivation of analytic self-adjointness or a restriction of the arbitrary shifted cocycle to the source spin shift.

For each family, a cut $a\geq0$ has chart $U_a=\{b:a\notin\operatorname{spec}(D_b^2)\}$. The data include the smooth finite-rank bundles of eigenspaces with eigenvalues less than $a$, invariant under $J$, and on overlapping cuts $a<b$ the invertible finite bands with eigenvalues in $(a,b)$. The supplied Pfaffian transition is the nonzero band Pfaffian of $J\omega_{\rm vol}D$, with the cocycle, Hermitian metrics, and unitary connections compatible under band decomposition; the eta transitions are supplied with the same cut convention. Finite-band smoothness and the analytic regularization of metrics and connections remain hypotheses, not consequences of the formal Dirac expression. The eta convention on an invertible cut chart is
$$ \eta_{D_0}(0)=\left.\operatorname*{AC}_{s}\sum_{\lambda\ne0}\operatorname{sgn}(\lambda)|\lambda|^{-s}\right|_{s=0},\qquad \tau_{D_0}^{1/4}:=\exp\!\left(\frac{2\pi i}{8}\eta_{D_0}(0)\right), $$
where $\operatorname*{AC}$ denotes the specified meromorphic continuation to $s=0$. When a Freed--Moore source-presentation refinement is supplied, the source electric factor is the local section
$$
CS_{\Sigma_b}(A)\,\tau_{D_0}^{-1/4}\,\exp\!\left(2\pi i\int_{\Sigma_b}f_b^*c_{\mathrm{corr}}\right).
$$
The general package includes the line bundle $\mathcal P_f$ of the fermion Pfaffian and the supplied electric line $\mathcal E$ with its actual local data. In the matched source refinement, $\mathcal E$ carries the displayed source factor. All cut transitions, metrics, and connections are retained; the formula with $c_{\mathrm{corr}}$ is not imposed on unmatched arbitrary-shift data. No isomorphism $\mathcal P_f\otimes\mathcal E\cong\underline{\mathbb C}$ is included.

## Remarks

On the matched refinement, the correction form is normalized as in DFM, v2 Eqs. (3.4)–(3.9), rather than identified with the total local potential. The cochain convention above records both the shifted integral class and the differential/flat representative. A free shifted-period condition alone does not specify $t$, the local potentials, or their global descent. The Euclidean family and its operator properties are mathematical inputs. The classical worldvolume action supplies no quantum measure or protected-state construction, and the adopted shifted-flux postulate supplies only its stated free-period input. These are nonlogical motivation, not mathematical prerequisites or evidence of physical realization.

## Sources

- [Freed–Moore, *Setting the Quantum Integrand of M-Theory*, §1.3 and §5.2](https://arxiv.org/pdf/hep-th/0409135v3): source-model Euclidean Pfaffian, eta, E8, and C-field factors. Their cited theorem does not substitute for the local analytic proof held in [[thm-m2-smooth-euclidean-pfaffian-electric-pairing]].
- [Diaconescu–Freed–Moore, *The M-theory 3-form and E8 gauge theory*, §§2–3](https://arxiv.org/pdf/hep-th/0312069v2): shifted differential cocycle and E8 source model. Their normalization is not silently identified with a physical CJS field normalization.
