---
id: ex-em-dielectric-sphere-example
kind: example
title: "Uniform-field dielectric sphere: candidate solution and its class"
status: published
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [cor-classical-dirichlet-and-poisson-problems-are-unique, cor-first-green-identity-on-a-bounded-c-one-domain, cor-harmonic-cauchy-estimates-in-supremum-norm, def-countable-choice, def-cross-product-in-r3, def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, def-euclidean-inner-product, def-laplacian-of-a-c2-function, post-em-material-closure, pthm-em-material-stationary-jumps, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, lem-em-interface-derivatives, pthm-em-macroscopic-maxwell, thm-clairaut-schwarz-mixed-partials, thm-heine-borel-rn]
dependency_roles:
  cor-classical-dirichlet-and-poisson-problems-are-unique: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  cor-harmonic-cauchy-estimates-in-supremum-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  post-em-material-closure: physical-assumption
  pthm-em-material-stationary-jumps: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-em-interface-derivatives: mathematical-premise
  pthm-em-macroscopic-maxwell: physical-result
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
physical_scope: "The explicit uniform-field dielectric-sphere candidate of the quasistatic linear branch: the two harmonic potentials, their matching at r=a with sigma_f=0, the O(r^-2) decay of the difference from the applied uniform potential, uniqueness in the declared decay class, the uniform interior field C E0 e_z, the exterior dipole moment p=4 pi eps_out d e_z and the bound surface charge. Conditional on the declared constants and interface hypotheses; no dynamic polarisability, no material data and no empirical claim."
sources:
  references:
    - title: "R. Fitzpatrick, Electromagnetism (University of Texas at Austin course), node 71: Boundary value problems with dielectrics"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node71.html"
      locator: "node 71, second example: the dielectric sphere of radius a in a uniform z-directed field, with the exterior potential -E_0 r cos(theta) + E_0 alpha a^3 cos(theta)/r^2, the interior potential -E_1 r cos(theta), the matching conditions (835), (838)-(841) and the bound surface charge (842). Read in the retained offline full text of the course."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.4.2 printed pp. 186-188, Example 4.7: a sphere of homogeneous linear dielectric placed in an otherwise uniform electric field, solved with the same potentials and boundary conditions V_in=V_out and eps dV_in/dr = eps0 dV_out/dr (no free charge). Read in the stamped 596-page scan."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.1.2 printed pp. 176-178 (PDF pp. 184-186): the dielectric-sphere example with a charge at the centre, used here only as the source's companion illustration of the same interface structure. Read in the retained 236-page full text."
---

## Example

Let the laboratory frame and units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]], with spatial coordinates $x=(x_1,x_2,x_3)$, $z=x_3$, $r=|x|$ and the applied field along $e_3$. The potentials below are functions on the full ball and full exterior in $\mathbb R^3$; their physical fields are restricted to the laboratory region, while (c)-(d) concern the full exterior. Fix a radius $a>0$ in metres with $\overline B_a\subseteq\Omega$, so that the interface $S=\{r=a\}$ below lies in the laboratory region, a field magnitude $E_0>0$ in $\mathrm V\,\mathrm m^{-1}$ and constants $\varepsilon_{\mathrm{in}},\varepsilon_{\mathrm{out}}\in(0,\infty)$ (the interior and exterior permittivities of the elementary branch of [[post-em-material-closure]], the material being at rest in the laboratory frame), and put

$$C:=\frac{3\varepsilon_{\mathrm{out}}}{\varepsilon_{\mathrm{in}}+2\varepsilon_{\mathrm{out}}},\qquad d:=\frac{E_0a^3(\varepsilon_{\mathrm{in}}-\varepsilon_{\mathrm{out}})}{\varepsilon_{\mathrm{in}}+2\varepsilon_{\mathrm{out}}}.$$

Consider the time-independent potentials

$$\varphi_{\mathrm{in}}(x):=-C\,E_0\,z\quad(r<a),\qquad \varphi_{\mathrm{out}}(x):=-E_0\,z+\frac{d\,z}{r^3}\quad(r>a),$$

with fields $E:=-\nabla\varphi$ and $D:=\varepsilon_{\mathrm{in}}E$ inside, $D:=\varepsilon_{\mathrm{out}}E$ outside ($E$ being of the class of [[def-em-fields]] restricted to this time-independent configuration). The coefficient $C$ is dimensionless and $d$ has units $\mathrm V\,\mathrm m^2$, so both potentials carry volts. Write $S=\{r=a\}$, $n=e_r:=x/r$ for the outward unit normal, and $\partial_r\varphi:=n\cdot\nabla\varphi$. For a trace $F$, its normal and tangential parts are $n\cdot F$ and $F-(n\cdot F)n$. Then:

**(a) [Harmonicity]** $\Delta\varphi_{\mathrm{in}}=0$ on $r<a$ and $\Delta\varphi_{\mathrm{out}}=0$ on $r>a$ in the classical sense of [[def-laplacian-of-a-c2-function]], and the potentials and their first derivatives extend continuously to the closed sides of $S$.

**(b) [Interface conditions]** With one-sided traces at $r=a$, $\varphi_{\mathrm{in}}=\varphi_{\mathrm{out}}$ and $\varepsilon_{\mathrm{in}}\,\partial_r\varphi_{\mathrm{in}}=\varepsilon_{\mathrm{out}}\,\partial_r\varphi_{\mathrm{out}}$ on $S$. Potential-trace equality implies tangential-electric continuity, and the weighted radial-derivative equality is equivalent to normal-$D$ continuity. Tangential-electric continuity alone determines the potential-trace difference only up to an additive constant; the displayed potentials have that constant fixed to zero. These electric matching identities hold independently of any magnetic completion. In addition, declare the static completion $B=H=0$, $\rho_f=J_f=0$, with any constant symmetric positive-definite permeability and the zero-conductivity branch $\sigma=0$, $J_{\mathrm{ext}}=0$ of [[post-em-material-closure]]. The four fields then satisfy all four thin-interface macroscopic equations distributionally with $\sigma_f=K_f=0$, and the joint one-sided regularity at the compact sphere verifies the hypotheses of [[pthm-em-material-stationary-jumps]]. Assume its inherited $\mathrm{AC}_\omega$ convention ([[def-countable-choice]]) for this distribution/surface reading.

**(c) [Asymptotics]** $\varphi_{\mathrm{out}}(x)+E_0z=dz/r^3$ and $\nabla(\varphi_{\mathrm{out}}+E_0z)=O(r^{-3})$ as $r\to\infty$: the difference from the applied uniform potential decays like $r^{-2}$ and its gradient like $r^{-3}$.

**(d) [Uniqueness in the declared class]** Assume Countable Choice ([[def-countable-choice]]), as required by the Green and harmonic derivative-estimate interfaces used in this branch. Let $(\tilde\varphi_{\mathrm{in}},\tilde\varphi_{\mathrm{out}})$ be $C^2$ on the closed ball $\overline{B_a}$ respectively on every closed exterior region $\{a\le r\le R\}$, harmonic on $r<a$ and $r>a$, satisfying the same interface conditions (b), and satisfying $|\tilde\varphi_{\mathrm{out}}+E_0z|\le M/r$ for some $M$ and all sufficiently large $r$. Then $\tilde\varphi_{\mathrm{in}}=\varphi_{\mathrm{in}}$ and $\tilde\varphi_{\mathrm{out}}=\varphi_{\mathrm{out}}$. Hence the displayed pair is the unique solution of the dielectric-sphere transmission problem in that class, existence being exhibited explicitly; the uniqueness proof uses only the Green identity, the matching conditions and the decay, with no maximum principle.

**(e) [Fields, polarisation and induced dipole]** On $r<a$ the field is uniform, $E=C E_0e_3$ with $D=\varepsilon_{\mathrm{in}}CE_0e_3$; outside, the field is the applied uniform field plus $E_p=-\nabla\Phi_p$, where the dipole potential in a uniform background of permittivity $\varepsilon_{\mathrm{out}}$ is here defined as $\Phi_p(x):=(p\cdot x)/(4\pi\varepsilon_{\mathrm{out}}|x|^3)$ for $x\ne0$. Its effective moment is $p=4\pi\varepsilon_{\mathrm{out}}d e_3$ in $\mathrm C\,\mathrm m$; this field identification on $r>a$ asserts no point source inside the actual sphere; the interior polarisation is $P_{\mathrm{in}}=(\varepsilon_{\mathrm{in}}-\varepsilon_0)CE_0e_3$ and the bound surface charge density on $S$ is $\sigma_b=n\cdot(P_{\mathrm{in}}-P_{\mathrm{out}})$, the singular coefficient of $\rho_b=-\operatorname{div}P$ at $S$ (with the exterior polarisation $P_{\mathrm{out}}=(\varepsilon_{\mathrm{out}}-\varepsilon_0)E_{\mathrm{out}}$).

**(f) [Regime and scope]** The computation is a quasistatic result of the declared linear branch at $\sigma_f=0$; using $p$ as a dynamic wave polarisability of the sphere requires a separate quasistatic/dipole approximation and is not asserted here. The example asserts no material data and no empirical claim.

Compactness of $S$ follows from its closedness and boundedness ([[thm-heine-borel-rn]]). Its smooth surface charts are obtained by solving $x_j=\pm\sqrt{a^2-\sum_{i\ne j}x_i^2}$ near any point where $x_j\ne0$; such a coordinate exists because $a>0$.

## Verification

**Proof technique:** explicit substitution plus a Green-identity uniqueness argument.

**Given:** The potentials, constants $C,d$, interface $S=\{r=a\}$ and spatial data of the Example, with $\varepsilon_{\mathrm{in}},\varepsilon_{\mathrm{out}}>0$ and the static completion of (b); assume $\mathrm{AC}_\omega$ for the distributional interface reading and for the uniqueness argument of (d).

[A1] The elementary branch: $D=\varepsilon_{\mathrm{in}}E$ inside and $D=\varepsilon_{\mathrm{out}}E$ outside with positive constants, with the declared static completion $B=H=0$, $\rho_f=J_f=0$, permeability constant symmetric positive definite, $\sigma=0$ and $J_{\mathrm{ext}}=0$ ([[post-em-material-closure]], clause (b)); the macroscopic equation forms are those of [[pthm-em-macroscopic-maxwell]].

[L1] The calculus of the displayed potentials: for smooth functions and total derivatives, sums, scalar multiples and compositions obey the sum, product and chain rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]), the Euclidean radius powers $r\mapsto r^{-3}$ are smooth away from the origin with the stated derivatives ([[thm-real-power-continuity-and-derivatives]]); mixed second partials commute for the smooth potentials ([[thm-clairaut-schwarz-mixed-partials]]), and the Laplacian is $\Delta f=\sum_i\partial_i^2f$ ([[def-laplacian-of-a-c2-function]]).

[L2] The first Green identity on a bounded $C^1$ domain: for $C^2$ functions $u,v$ up to the boundary, $\int_\Omega\nabla u\cdot\nabla v=\oint_{\partial\Omega}u\,\partial_\nu v-\int_\Omega u\,\Delta v$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]]); harmonic functions obey the interior Cauchy estimates in supremum norm, so $|\nabla w(x)|\le C R^{-1}\sup_{B_{R}}|w|$ on compact subballs ([[cor-harmonic-cauchy-estimates-in-supremum-norm]]); and the classical Dirichlet problem on a ball has at most one solution ([[cor-classical-dirichlet-and-poisson-problems-are-unique]]).

[L3] For a two-sided compact embedded $C^2$ interface with one-sided $C^1$ traces, $\operatorname{div}F=\{\operatorname{div}F\}+n\cdot[F]\delta_S$ and $\operatorname{curl}F=\{\operatorname{curl}F\}+n\times[F]\delta_S$, under $\mathrm{AC}_\omega$ ([[lem-em-interface-derivatives]]), the derivatives being distributional derivatives of the regular distributions of the fields.

[L4] The Euclidean inner and cross products of $\mathbb R^3$ ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]]), and the jump and free/bound conventions of [[def-em-polarization-magnetization]]: $\rho_b=-\operatorname{div}P$, $D=\varepsilon_0E+P$.

1.1 On $r\ne0$ the functions $z$ and $z\,r^{-3}$ are smooth and $r^{-3}$ is smooth away from the origin; the sum and scalar rules of [L1] give $\Delta z=0$ and $\Delta(z\,r^{-3})=z\,\Delta(r^{-3})+2\,\nabla z\cdot\nabla(r^{-3})$, with $\partial_ir^{-3}=-3x_ir^{-5}$ and $\Delta(r^{-3})=\sum_i\partial_i(-3x_ir^{-5})=-9r^{-5}+15r^{-5}=6r^{-5}$; hence $\Delta(zr^{-3})=6zr^{-5}+2\cdot(-3zr^{-5})=0$, so $\Delta\varphi_{\mathrm{in}}=0$ on $r<a$ and $\Delta\varphi_{\mathrm{out}}=0$ on $r>a$; the interior potential is linear on the entire closed ball, including the origin, while the exterior expression and its gradient are smooth up to $S$ because $r\ge a>0$ on that closed exterior side. [L1]

1.2 Put $q:=z/r$ for the fixed directional factor along a radial line. At $r=a$: $\varphi_{\mathrm{in}}(a)=-CE_0aq$ and $\varphi_{\mathrm{out}}(a)=(-E_0a+d/a^2)q$, whose equality for every angle is the scalar equation $C=1-d/(E_0a^3)$; the radial derivatives are $\partial_r\varphi_{\mathrm{in}}=-CE_0q$ and $\partial_r\varphi_{\mathrm{out}}=(-E_0-2d/a^3)q$, whose equality after the weights $\varepsilon_{\mathrm{in}},\varepsilon_{\mathrm{out}}$ is $\varepsilon_{\mathrm{in}}C=\varepsilon_{\mathrm{out}}(1+2d/(E_0a^3))$. Substituting the displayed $C$ and $d$ satisfies both equations (the determinant of the pair is $\varepsilon_{\mathrm{in}}+2\varepsilon_{\mathrm{out}}>0$), so the two matching identities hold. By the chain rule along any smooth surface chart, equal traces have equal tangential derivatives and hence equal tangential electric fields; conversely, equality of those derivatives makes the trace difference constant along every piecewise smooth path on the sphere, whose points are joined by great-circle arcs, without fixing its value. The displayed trace computation fixes it to zero. The weighted radial identity is exactly normal-$D$ continuity because $E=-\nabla\varphi$ and $D=\varepsilon E$. The asymptotics (c) follow from $|z|\le r$: $|\varphi_{\mathrm{out}}+E_0z|=|d||z|r^{-3}\le|d|r^{-2}$ and $\nabla(dzr^{-3})=d(r^{-3}e_3-3zr^{-5}x)$ has squared norm $d^2r^{-6}(1+3q^2)\le4d^2r^{-6}$ because $|q|\le1$, hence norm at most $2|d|r^{-3}$. [L1]

2.1 For the declared static completion, [L3] gives $\operatorname{div}D=\{\operatorname{div}D\}+n\cdot[D]\delta_S$ and $\operatorname{curl}E=\{\operatorname{curl}E\}+n\times[E]\delta_S$, with analogous formulas for $B$ and $H$; by step 1.1 the piecewise classical divergences and curls of $D$ and $E$ vanish (each side is a constant multiple of the gradient of a harmonic function, so $\operatorname{div}E=0$ and $\operatorname{curl}E=0$ there, the latter by the mixed-partial commutation of [L1]), and by step 1.2 the normal jump $n\cdot[D]$ and tangential jump $n\times[E]$ vanish; since $B=H=0$ and $\rho_f=J_f=0$ with $\sigma_f=K_f=0$, all four distributional macroscopic equations hold on the local region and the hypotheses of [[pthm-em-material-stationary-jumps]] ($S=\{r=a\}$ a compact embedded $C^2$ hypersurface in $\Omega$ because $\overline B_a\subseteq\Omega$, locally integrable fields, $C^1$ off $S$, joint one-sided $C^1$ extensions, stationary free sheet data) are verified. [step 1.1, step 1.2, A1, L1, L3]

2.2 For uniqueness, let $w_{\mathrm{in}}=\tilde\varphi_{\mathrm{in}}-\varphi_{\mathrm{in}}$ on $\overline{B_a}$ and $w_{\mathrm{out}}=\tilde\varphi_{\mathrm{out}}-\varphi_{\mathrm{out}}$ on $\{r\ge a\}$; both are harmonic with $C^2$ regularity on the closed regions, their traces and weighted radial derivatives agree on $S$ by the shared interface conditions, and $|w_{\mathrm{out}}|\le(M+|d|)r^{-1}$ for all sufficiently large $r\ge1$. Apply the first Green identity of [L2] with $u=v=w_{\mathrm{in}}$ on the ball $B_a$ and with $u=v=w_{\mathrm{out}}$ on the annulus $\{a<r<R\}$: since the Laplacians vanish, $\int_{B_a}|\nabla w_{\mathrm{in}}|^2=\oint_Sw_{\mathrm{in}}\partial_rw_{\mathrm{in}}$ and $\int_{a<r<R}|\nabla w_{\mathrm{out}}|^2=\oint_{\{r=R\}}w_{\mathrm{out}}\partial_rw_{\mathrm{out}}-\oint_Sw_{\mathrm{out}}\partial_rw_{\mathrm{out}}$; multiplying by $\varepsilon_{\mathrm{in}}$ and $\varepsilon_{\mathrm{out}}$ and adding, the two surface terms on $S$ cancel by $w_{\mathrm{in}}=w_{\mathrm{out}}$ and $\varepsilon_{\mathrm{in}}\partial_rw_{\mathrm{in}}=\varepsilon_{\mathrm{out}}\partial_rw_{\mathrm{out}}$, while the term on $\{r=R\}$ is bounded by $(4\pi R^2)\cdot(M+|d|)R^{-1}\cdot C R^{-2}$ using [L2]'s Cauchy estimate on balls of radius $R/4$ centred at $|x|=R$, which lie in the exterior for large $R$ and carry the bound $|w_{\mathrm{out}}|\le C/R$, hence tends to $0$. For each fixed $L>a$, the nonnegative weighted energy on the ball and $a<r<L$ is at most that on the ball and $a<r<R$ for $R>L$, and the latter is bounded by the absolute outer boundary term, which tends to zero. Thus every fixed bounded-region energy is zero; continuity and the positive weights imply that both gradients vanish, so $w_{\mathrm{in}}$ is constant on the ball and $w_{\mathrm{out}}$ is constant on $r>a$; the decay forces that constant to be $0$, hence the common trace is $0$, and then $w_{\mathrm{in}}=0$ by the Dirichlet uniqueness of [L2] applied on the ball to $w_{\mathrm{in}}$ and the zero function. [step 1.1, step 1.2, L2]

2.3 The fields follow by differentiation: $E_{\mathrm{in}}=-\nabla\varphi_{\mathrm{in}}=CE_0e_3$ with $D_{\mathrm{in}}=\varepsilon_{\mathrm{in}}CE_0e_3$ on $r<a$; outside, $\varphi_{\mathrm{out}}$ is the sum of the applied uniform potential and the potential $dzr^{-3}$ of a dipole at the origin with moment $p=4\pi\varepsilon_{\mathrm{out}}d\,e_3$, and direct differentiation of the defined dipole potential gives $E_p(x)=[3(p\cdot n)n-p]/(4\pi\varepsilon_{\mathrm{out}}r^3)$, so the exterior field has precisely that form; the interior polarisation is $P_{\mathrm{in}}=D_{\mathrm{in}}-\varepsilon_0E_{\mathrm{in}}=(\varepsilon_{\mathrm{in}}-\varepsilon_0)CE_0e_3$ and the exterior polarisation is $P_{\mathrm{out}}=(\varepsilon_{\mathrm{out}}-\varepsilon_0)E_{\mathrm{out}}$, so the bound surface charge density is the singular coefficient of $\rho_b=-\operatorname{div}P$ at $S$, namely $\sigma_b=n\cdot(P_{\mathrm{in}}-P_{\mathrm{out}})$ in $\mathrm C\,\mathrm m^{-2}$, by applying [L3] to the piecewise smooth $P$ with jump $P_{\mathrm{out}}-P_{\mathrm{in}}$. [step 1.2, A1, L1, L3, L4]

3.1 Steps 1.1-1.2 verify (a)-(c), step 2.1 verifies (b) and the distributional thin-interface reading, step 2.2 gives the uniqueness statement (d) with existence exhibited by the displayed pair, and step 2.3 gives the fields, polarisation, exterior dipole moment and bound surface charge of (e). The scope (f) holds: the computation is quasistatic, of the declared linear branch at $\sigma_f=0$, conditional on the stated constants and regularity; the identification of $p$ with a dynamic wave polarisability requires a separate quasistatic/dipole approximation, and no material data, empirical claim or general existence theorem is supplied beyond this explicit transmission solution. [given, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎
