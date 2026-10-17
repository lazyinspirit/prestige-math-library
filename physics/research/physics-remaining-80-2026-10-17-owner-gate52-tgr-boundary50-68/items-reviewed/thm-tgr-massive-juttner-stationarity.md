---
id: thm-tgr-massive-juttner-stationarity
kind: theorem
title: Massive Jüttner stationarity and normalization
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-tgr-stationary-thermal-carriers, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, thm-gr-local-lorentz-tetrad-existence, thm-sylvesters-law-of-inertia, thm-gram-schmidt-orthonormalisation, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-tgr-mass-shell-polynomial-rigidity, def-tgr-future-mass-shell-measure, lem-tgr-mass-shell-measure-tetrad-invariance, thm-tgr-juttner-partition-and-moments, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, cor-mean-value-theorem, def-countable-choice]
dependency_roles:
  def-tgr-stationary-thermal-carriers: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  thm-sylvesters-law-of-inertia: mathematical-premise
  thm-gram-schmidt-orthonormalisation: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-tgr-mass-shell-polynomial-rigidity: mathematical-premise
  def-tgr-future-mass-shell-measure: mathematical-premise
  lem-tgr-mass-shell-measure-tetrad-invariance: mathematical-premise
  thm-tgr-juttner-partition-and-moments: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§III.3 and VI.2"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "José Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §IV"
      url: "https://arxiv.org/pdf/1807.02915"
---

## Statement

Let $O$ be a connected open subset of a smooth time-oriented Lorentzian
four-manifold with metric-selected connection $\nabla$. Let $M_*>0$ be a
rest-energy, let $\beta$ be a smooth vector field with units
$\mathrm{J^{-1}}$, let $\zeta:O\to\mathbb R$ be smooth and dimensionless, and
define on the future massive shell
$$f(x,P):=\exp\bigl(\zeta(x)+g_x(\beta(x),P)\bigr),\qquad \mathcal L:=P^a\frac{\partial}{\partial x^a}-\Gamma^a{}_{bc}P^bP^c\frac{\partial}{\partial P^a}.$$
The geodesic Liouville vector field $\mathcal L$ is tangent to
$\mathcal H^+_{M_*,x}$ and
$$\mathcal Lf=0\text{ on every future massive shell} \quad\Longleftrightarrow\quad \nabla_{(a}\beta_{b)}=0\text{ and }d\zeta=0,$$
where $\nabla_{(a}\beta_{b)}=0$ is the covariant Killing condition
([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]]).
Since $O$ is connected, $d\zeta=0$ means $\zeta$ is constant on $O$.

For any vector $\beta_x\in T_xM$, define its shell normalizer by
$$I_{M_*}(\beta_x):=\int_{\mathcal H^+_{M_*,x}}e^{g_x(\beta_x,P)}\,d\mu_{M_*,x}(P).$$
This integral is finite exactly when $\beta_x$ is future timelike. If so, with
$\alpha:=\sqrt{-g_x(\beta_x,\beta_x)}>0$, it equals
$4\pi M_*K_1(\alpha M_*)/\alpha$ as in
[[thm-tgr-juttner-partition-and-moments]]. In particular, for carrier data
$\beta=u/(k_BT)$, the choice
$$\zeta=\log\!\left(\frac{n h_{\rm ref}^3c^3}{Z_{M_*}(1/(k_BT))}\right)$$
normalizes the proper number density to $n$ and gives exactly the number
current and stress moments of
[[thm-tgr-juttner-partition-and-moments]]. This is a mathematical theorem about
the specified exponential ansatz; it does not assert that a material
thermalizes or that a physical equilibrium state exists.

## Facts & Assumptions

**Given:** The smooth Lorentzian geometry and connection of
[[def-tgr-stationary-thermal-carriers]], a positive rest-energy $M_*$, smooth
fields $\beta,\zeta$, and the stated countable-choice assumption of the
Lebesgue and tetrad suppliers.

[F1] The metric-selected connection is torsion-free and metric-compatible;
its coordinate coefficients are the Christoffel symbols used in $\mathcal L$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F2] The future massive shell has measure $d^3q/E(q)$ in any future
orthonormal tetrad, independent of that tetrad
([[def-tgr-future-mass-shell-measure]],
[[lem-tgr-mass-shell-measure-tetrad-invariance]]).

[F3] If $A$ is symmetric and $b$ is a covector, then
$A(P,P)+b(P)=0$ on every future massive-shell vector implies $A=b=0$
([[lem-tgr-mass-shell-polynomial-rigidity]]).

[F4] The shell partition and moment theorem gives the exact invariant
normalizer when $\beta$ is future timelike, and the stated $Z_{M_*}$,
$J$ and $T$ formulas for $\beta=u/(k_BT)$
([[thm-tgr-juttner-partition-and-moments]]).

[F5] A differentiable function with zero derivative on an interval is
constant ([[cor-mean-value-theorem]]).

[F6] In angular coordinates
$n=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, surface
integration is $d\sigma=\sin\theta\,d\theta\,d\varphi$ and
$\sigma(S^2)=4\pi$
([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]).

[F7] At a point there is a future orthonormal tetrad; orthogonal complements
of non-null vectors have the signatures determined by Sylvester's law, and
finite Euclidean subspaces admit orthonormal bases
([[thm-gr-local-lorentz-tetrad-existence]],
[[thm-sylvesters-law-of-inertia]],
[[thm-gram-schmidt-orthonormalisation]],
[[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]).

[F8] The covariant Killing condition is equivalent to $\mathcal L_\beta g=0$
([[def-gr-killing-field]],
[[thm-gr-killing-and-on-shell-matter-identities]]).

[A1] Assume $\mathrm{AC}_\omega$ as used by the tangent-bundle, shell-measure,
polar-coordinate and sphere-integration suppliers. No unrestricted axiom of
choice is used.

## Proof

1.1 In coordinates put $G(x,P):=g_{ab}(x)P^aP^b$. Metric compatibility gives
$\partial_cg_{ab}=\Gamma^d{}_{ca}g_{db}+\Gamma^d{}_{cb}g_{ad}$, while
$$\mathcal L G=P^c\partial_cg_{ab}P^aP^b-2\Gamma^a{}_{bc}P^bP^c g_{ad}P^d.$$
After substituting the metric-compatibility identity, each of its two terms
matches one of the two connection contributions, by symmetry of the lower
Christoffel indices and renaming dummy indices. Hence $\mathcal L G=0$.
Therefore the geodesic spray is tangent to every mass-shell level set. Its
local flow preserves the future sheet because it is continuous and the two
massive sheets are disjoint connected components ([[def-time-orientation-and-future-causal-sets]]). [given, F1, F7, A1, algebra]

1.2 If $\beta_x$ is future timelike, put
$\alpha=\sqrt{-g(\beta_x,\beta_x)}>0$, $u=\beta_x/\alpha$ and
$T=1/(k_B\alpha)$. Then $g(u,u)=-1$ and $\beta_x=u/(k_BT)$. In the
$u$-rest tetrad, $g(\beta_x,P)=-\alpha E(q)$, so [F2] and [F4] give
$$I_{M_*}(\beta_x)=\int_{\mathbb R^3}e^{-\alpha E(q)}\frac{d^3q}{E(q)} =\frac{4\pi M_*K_1(\alpha M_*)}{\alpha}<\infty.$$
[given, F2, F4, A1, algebra]

1.3 The other nonzero causal and spacelike types have these orthonormal normal
forms. For a timelike vector choose $e_0$ to be the future unit vector in its
direction or its negative, according to its time orientation. Its orthogonal
complement is positive definite by [F7]; applying Gram–Schmidt to a basis of
that complement gives $e_1,e_2,e_3$. For a spacelike vector set
$e_3=\beta_x/\sqrt{g(\beta_x,\beta_x)}$. Its orthogonal complement has
inertia $(1,2)$ by [F7], so choose a unit timelike vector there and choose its
sign to be future. The remaining orthogonal two-plane is positive definite,
and Gram–Schmidt gives $e_1,e_2$. For a nonzero null vector start with a
future tetrad and write $\beta_x=\beta^0e_0+v$ with $v\perp e_0$. Nullity
gives $|v|=|\beta^0|>0$. Set $e_3=v/|v|$ and use Gram–Schmidt in the
positive two-plane orthogonal to both $e_0$ and $e_3$ to choose $e_1,e_2$.
Thus the normal forms are spacelike $(0,0,0,b)$, past timelike
$(-\alpha,0,0,0)$, past null $(-a,0,0,a)$, and future null
$(a,0,0,a)$, with positive parameters. [given, F7, algebra]

1.4 When $\beta=u/(k_BT)$, it is future timelike. The value of $\zeta$ in
the Statement gives
$e^\zeta Z_{M_*}/(h_{\rm ref}^3c^3)=n$. The complete moment calculation
in [F4] therefore gives $J^a=nu^a$ and
$T^{ab}=(\varepsilon+p)u^au^b+pg^{ab}$ with the displayed $\varepsilon$
and $p$. This is a normalization of the specified mathematical ansatz.
[F4, given, A1, algebra]

2.1 Since $f>0$, differentiating its logarithm along the geodesic spray gives
$$\frac{\mathcal L f}{f}=\mathcal L\log f =P^a\nabla_a\zeta+P^aP^b\nabla_a\beta_b =P^a\nabla_a\zeta+P^aP^b\nabla_{(a}\beta_{b)}.$$
The last equality holds because $P^aP^b$ is symmetric; the covariant
expression follows by differentiating $g(\beta,P)$ along a geodesic, where
$P$ is parallel. [step 1.1, F1, algebra]

2.2 For spacelike $\beta_x=(0,0,0,b)$, $b>0$, let $\theta_0\in(0,\pi)$ be
the unique angle with $\cos\theta_0=1/2$. By [F6] the cap $n_3\ge1/2$
has area
$\int_0^{2\pi}\int_0^{\theta_0}\sin\theta\,d\theta\,d\varphi
=2\pi(1-\cos\theta_0)=\pi$. On it
$g(\beta_x,P)=brn_3\ge br/2$. For $r\ge M_*$,
$E\le\sqrt2r$, so the shell integral dominates a positive multiple of
$\int r e^{br/2}dr=\infty$. For past timelike
$\beta_x=(-\alpha,0,0,0)$, the exponent is $\alpha E\ge\alpha r$ and the
full-sphere radial measure is $4\pi r^2/E\ge c r$ for all sufficiently
large $r$, so its integral diverges. For past null
$\beta_x=(-a,0,0,a)$, the same cap gives
$g(\beta_x,P)=a(E+rn_3)\ge ar/2$, again forcing divergence. [step 1.3, F2, F6, A1, algebra]

2.3 For future null $\beta_x=(a,0,0,a)$, $a>0$, set
$\delta=M_*/r\in(0,1/2]$ for $r\ge2M_*$. Let $\theta_0\in(0,\pi)$ be
the unique angle with $\cos\theta_0=1-\delta$. By [F6] the cap
$n_3\ge1-M_*/r$ has area
$\int_0^{2\pi}\int_0^{\theta_0}\sin\theta\,d\theta\,d\varphi
=2\pi(1-\cos\theta_0)=2\pi M_*/r$. On this cap,
$$E-rn_3=(E-r)+r(1-n_3)\le\frac{M_*^2}{2r}+M_*, $$
so $e^{g(\beta_x,P)}=e^{-a(E-rn_3)}$ is bounded below by a fixed positive
constant. Since $r^2/E\ge r/\sqrt2$, the radial integral dominates a positive
constant times $\int dr=\infty$. For $\beta_x=0$, the normalizer is
$4\pi\int_0^\infty r^2/E\,dr$, which diverges since
$r^2/E\ge r/\sqrt2$ for $r\ge M_*$. [step 1.3, F2, F6, A1, algebra]

3.1 The causal classification exhausts all vectors by zero, timelike,
spacelike and null type. Step 1.2 proves finiteness for future timelike
vectors; steps 2.2–2.3 prove divergence for every other type. Therefore
$I_{M_*}(\beta_x)<\infty$ exactly when $\beta_x$ is future timelike.
[step 1.2, step 2.2, step 2.3, F7, algebra]

3.2 At a fixed event, apply [F3] to
$A_{ab}=\nabla_{(a}\beta_{b)}$ and $b_a=\nabla_a\zeta$ in the last
expression of step 2.1. Its vanishing on every future massive-shell vector
is equivalent to $A=0$ and $b=0$. By [F8], this says that $\beta$ is Killing
and $d\zeta=0$; the same identity proves the converse. [step 2.1, F3, F8, algebra]

4.1 On each convex coordinate ball in $O$, the condition $d\zeta=0$ makes
$\zeta$ have zero derivative along every straight coordinate segment. The mean
value theorem [F5] makes $\zeta$ constant on that ball. Thus every level set
of $\zeta$ and its complement are open; connectedness of $O$ makes $\zeta$
one constant on all of $O$. [step 3.2, F5, algebra] ∎
