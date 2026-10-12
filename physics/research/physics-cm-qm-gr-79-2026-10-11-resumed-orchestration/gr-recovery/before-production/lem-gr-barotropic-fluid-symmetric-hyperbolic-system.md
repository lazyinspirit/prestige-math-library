---
id: lem-gr-barotropic-fluid-symmetric-hyperbolic-system
kind: lemma
title: "The barotropic fluid equations in enthalpy form are symmetric hyperbolic with positive principal symbol"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-barotropic-enthalpy-variable, def-gr-perfect-fluid-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, lem-gr-reduced-einstein-principal-part, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "I. Rodnianski and J. Speck, The Stability of the Irrotational Euler-Einstein System with a Positive Cosmological Constant, arXiv:0911.5501 (v2, 2010), Sections 1 and 3: the Euler-Einstein system, the speed-of-sound hypotheses 0<cs<1 for a barotropic fluid (Postulate (4)), the sound cone and the wave-equation formulation of the fluid equations"
      url: "https://arxiv.org/pdf/0911.5501"
verification:
  precheck: pending
---

## Statement

Let a perfect-fluid model with smooth equation of state $p=p(\epsilon)$ satisfy
$\epsilon+p>0$ and $0<p'(\epsilon)<1$ on an open interval $J$, let
$r:J\to r(J)$ and $c_s=\sqrt{p'}$ be the enthalpy variable and sound speed of
[[def-gr-barotropic-enthalpy-variable]], and let $D,\vartheta,a^b,h^{ab}$
denote the comoving derivative, expansion, acceleration and rest-space
projection of [[def-gr-perfect-fluid-matter-model]]. Then:

**(a)** the perfect-fluid equations
$D\epsilon+(\epsilon+p)\vartheta=0$, $(\epsilon+p)a^b+h^{ba}\partial_ap=0$ are
equivalent to
$$D r+c_s\,\vartheta=0,\qquad D n^b+c_s\,h^{ba}\partial_a r=0 ,$$
and the stress-energy tensor
$T^{ab}=(\epsilon+p)n^an^b+pg^{ab}$ is divergence-free exactly when these
equations hold;

**(b)** in every orthonormal frame $(n,e_1,e_2,e_3)$ at a point, the principal
symbol of the system (a) in the variables $(r,n^1,n^2,n^3)$ at a covector
$\zeta=\zeta_0n^\flat+\zeta_\perp$ is the symmetric matrix
$$A(\zeta)=\begin{pmatrix}\zeta_0&c_s\zeta_\perp^{\mathsf T}\\ c_s\zeta_\perp&\zeta_0 I_3\end{pmatrix};$$
its eigenvalues are $\zeta_0$ (multiplicity two) and
$\zeta_0\pm c_s|\zeta_\perp|$ (multiplicity one each); consequently $A(\zeta)$
is positive definite for every future-directed timelike covector $\zeta$
(because $\zeta_0>|\zeta_\perp|$ and $c_s<1$);

**(c)** consequently the combined Einstein-fluid system, with the reduced
Einstein equation in the harmonic gauge, is a first-order quasilinear symmetric
hyperbolic system with positive definite time matrix, coupled only through
zeroth-order terms in the first derivatives of the metric.

## Facts & Assumptions

**Given:** the EOS data, the enthalpy variable, the fluid equations and the field-theoretic setup.

[L1] $r'(\epsilon)=c_s/(\epsilon+p)>0$ on $J$, so the change of variables is a diffeomorphism and $c_s,\epsilon,p$ are smooth functions of $r$; the inverse function theorem for one variable and the chain rule apply ([[def-gr-barotropic-enthalpy-variable]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L2] Equivalence of the equations: $Dr=r'(\epsilon)D\epsilon=\tfrac{c_s}{\epsilon+p}D\epsilon$ and $(p'\partial_a\epsilon)/(\epsilon+p)=c_s\partial_ar$; substituting the fluid equations and dividing by $\epsilon+p>0$ gives (a); the converse is the same computation read backwards.

[L3] Divergence-freeness is equivalent to the fluid equations ([[prop-gr-dust-and-perfect-fluid-conservation-equations]]).

[L4] The metric block of the coupled system is the positive block $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ with zeroth-order matter coupling ([[lem-gr-reduced-einstein-principal-part]]).

[L5] For a future-directed timelike covector $\zeta$ and a future unit timelike $n$ one has $\zeta_0:=\zeta(n)>0$ and $\zeta_0>|\zeta_\perp|$ with $\zeta_\perp$ the rest-space part of $\zeta$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

## Proof

**Proof technique:** direct.

1.1 (The change of variables and (a).) By [L1] the maps $\epsilon\leftrightarrow r$ are smooth and invertible. Computing $Dr$ and $c_s\partial_ar$ with the chain rule as in [L2] and substituting into the fluid equations gives the displayed system; conversely, the same identities with $\epsilon$ as a function of $r$ recover the original equations. Divergence-freeness is [L3]. This is (a). [L1, L2, L3, algebra]

1.2 (The principal symbol (b).) The system (a) has the form (scalar equation for $r$) plus (vector equation for $n$): $n^\mu\partial_\mu r+c_s\,\partial_\mu n^\mu+\ldots=0$ and $n^\mu\partial_\mu n^b+c_s\,h^{ba}\partial_ar=0$ plus zeroth-order (connection) terms. Replacing $\partial_\mu$ by $\zeta_\mu$ in the leading terms and evaluating in a rest frame where $n=\partial_0$, so that $h$ projects onto the spatial directions, gives the displayed $A(\zeta)$: the first row is $(\zeta_0,c_s\zeta_\perp^{\mathsf T})$ and the spatial block is $\zeta_0I_3$ with the symmetric off-diagonal $c_s\zeta_\perp$. Its eigenvalues are computed from the block structure: on the space orthogonal to $\zeta_\perp$ the matrix is $\zeta_0I$; on the two-dimensional span of $(1,0)$ and $(0,\hat\zeta_\perp)$ it is the symmetric $2\times2$ matrix with diagonal $\zeta_0$ and off-diagonal $c_s|\zeta_\perp|$, with eigenvalues $\zeta_0\pm c_s|\zeta_\perp|$. [L5, algebra]

2.1 (Positivity.) For future-directed timelike $\zeta$, [L5] gives $\zeta_0>|\zeta_\perp|\ge0$; since $0<c_s<1$, $\zeta_0-c_s|\zeta_\perp|>\zeta_0-|\zeta_\perp|>0$, and the other eigenvalues $\zeta_0,\zeta_0+c_s|\zeta_\perp|$ are positive as well. Hence $A(\zeta)$ is positive definite. This is (b). [step 1.2, L5, algebra]

3.1 (The coupled system (c).) By [L4] the metric block is symmetric with positive time matrix and its coupling to the matter is zeroth order; by (b) the fluid block has positive time matrix; the spatial symbols of both blocks are symmetric and the cross-coupling carries no derivatives. Hence the combined system is symmetric hyperbolic with positive definite time matrix. This is (c). [step 1.2, step 2.1, L4, algebra] ∎



- **Role.** Clause (c) verifies the matter hypothesis of [[thm-gr-local-geometric-development]] for the strict interior-fluid branch; the hypothesis $0<p'<1$ is used exactly in (b), and its failure is analyzed in the counterexample of the examples page.
