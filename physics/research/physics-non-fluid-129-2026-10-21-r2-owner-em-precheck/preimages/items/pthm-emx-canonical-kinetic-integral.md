---
id: pthm-emx-canonical-kinetic-integral
kind: physics-theorem
title: Equality of total angular momentum integrals
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emx-angular-momentum-split
  - def-emx-transverse-fourier-field
  - def-cross-product-in-r3
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-darboux-integral
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
dependency_roles:
  def-emx-angular-momentum-split: formulation-prerequisite
  def-emx-transverse-fourier-field: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Exact conditional identities for smooth classical electric fields and the
  stated vector potential in the fixed inertial SI laboratory chart. The
  all-space equality is restricted to source-free Schwartz vacuum packets in
  the specified Coulomb gauge. The finite-cube formula explicitly retains the
  divergence and boundary terms; no density-wise equality or universal
  gauge-independent split is claimed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 1, PDF pp. 3–4; contextual discussion only. The global identity and its boundary term are proved by componentwise integration by parts here."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§8.3 'Drehimpuls, Schwerpunkt', equations (8.19)–(8.20): the total field angular momentum is the integral of x crossed with field momentum density. The potential-dependent split is proved locally."
verification:
  precheck: pending
---

## Statement

(a) For the real Schwartz vacuum fields and the fixed Coulomb-gauge potential
defined in the preceding A-page item, let $J_{\mathrm{kin}}$,
$L_{\mathrm{can}}$, and $S_{\mathrm{can}}$ be the three global functionals in
that definition. Then

$$J_{\mathrm{kin}}=L_{\mathrm{can}}+S_{\mathrm{can}}.$$

(b) More generally, let $R>0$ and let $E,A:\overline{Q_R}\to\mathbb R^3$ be restrictions of
$C^1$ maps on a neighborhood of the cube $Q_R=[-R,R]^3$, let
$B=\operatorname{curl}A$, and define
$$J_R:=\varepsilon_0\int_{Q_R}x\times(E\times B)\,d^3x,\quad L_R:=\varepsilon_0\sum_{i=1}^3\int_{Q_R}E_i(x\times\nabla)A_i\,d^3x,\quad S_R:=\varepsilon_0\int_{Q_R}E\times A\,d^3x.$$
For each component $\ell\in\{1,2,3\}$,

$$ (J_R)_\ell=(L_R)_\ell+(S_R)_\ell+\varepsilon_0\int_{Q_R}(\operatorname{div}E)(x\times A)_\ell\,d^3x-\varepsilon_0\int_{\partial Q_R}(n\cdot E)(x\times A)_\ell\,dS. $$

The boundary integral is the sum of the ordinary two-dimensional Riemann
integrals over the six faces with their outward unit normals $n$. If the volume
integrals converge absolutely and this boundary term tends to zero as
$R\to\infty$, the corresponding whole-space identity retains the term
$\varepsilon_0\int_{\mathbb R^3}(\operatorname{div}E)(x\times A)\,d^3x$.
Thus the source-free Schwartz equality in (a) uses both
$\operatorname{div}E=0$ and the vanishing surface limit; it is not an equality
of local densities.

## Statement references

[[def-emx-angular-momentum-split]]

[[def-emx-transverse-fourier-field]]

[[def-cross-product-in-r3]]

[[def-multidimensional-rectangle-and-volume]]

[[def-multidimensional-darboux-integral]]

[[thm-continuous-on-a-rectangle-is-riemann-integrable]]

[[thm-riemann-fubini-on-product-rectangles]]

[[thm-ftc-second-part]]

## Facts & Assumptions

**Given:** The fields $E,A,B$ and functionals of the statement, the fixed
positive orientation and origin, and (for part (b)) a finite cube $Q_R$.

[F1] The global functionals are defined by
$J_{\mathrm{kin}}=\varepsilon_0\int x\times(E\times B)$,
$L_{\mathrm{can}}=\varepsilon_0\sum_i\int E_i(x\times\nabla)A_i$, and
$S_{\mathrm{can}}=\varepsilon_0\int E\times A$; their packet fields are
Schwartz. ([[def-emx-angular-momentum-split]])

[F2] For these packets $B=\operatorname{curl}A$ and
$\operatorname{div}E=0$; $E,A,B$ are smooth Schwartz fields.
([[def-emx-transverse-fourier-field]])

[F3] The component formula for the right-handed cross product is
$(u\times v)_i=\sum_{j,k}\epsilon_{ijk}u_jv_k$, and its products are
bilinear; every repeated coordinate index in the proof ranges from $1$ to $3$
and is summed. ([[def-cross-product-in-r3]])

[F4] Continuous functions on a cube and its faces have Riemann integrals;
integrals on a product cube equal iterated integrals, and for a $C^1$ function
on an interval the integral of its derivative is its endpoint increment.
([[def-multidimensional-rectangle-and-volume]],
[[def-multidimensional-darboux-integral]],
[[thm-continuous-on-a-rectangle-is-riemann-integrable]],
[[thm-riemann-fubini-on-product-rectangles]], [[thm-ftc-second-part]])

## Proof

1.1 For $i\in\{1,2,3\}$, expand the cross product by [F3]:
$(E\times\operatorname{curl}A)_i
=\sum_{j,k,m,n}\epsilon_{ijk}\epsilon_{kmn}E_j\partial_mA_n$
$=\sum_jE_j\partial_iA_j-\sum_jE_j\partial_jA_i$.
Indeed, if either index pair repeats, both sides of
$\sum_k\epsilon_{ijk}\epsilon_{kmn}=\delta_{im}\delta_{jn}-\delta_{in}\delta_{jm}$
are zero. For distinct $i,j$, only the remaining coordinate $k$ contributes;
the left side is $+1$ when $(m,n)=(i,j)$, $-1$ when $(m,n)=(j,i)$, and zero
otherwise, exactly as on the right. Multiplying by
$\varepsilon_0\sum_{m,i}\epsilon_{\ell mi}x_m$ and summing
over $i,m$ makes the first term exactly $(L_R)_\ell$ and leaves
$(J_R)_\ell-(L_R)_\ell
=-\varepsilon_0\sum_{m,i,j}\int_{Q_R}\epsilon_{\ell mi}x_mE_j\partial_jA_i\,d^3x$.
[F3, algebra]

1.2 For each fixed pair of the other coordinates, the one-dimensional FTC in
[F4] applied to $x_mE_jA_i$ gives
$\int_{Q_R}x_mE_j\partial_jA_i
=\int_{\partial_j Q_R}n_jx_mE_jA_i\,dS
-\int_{Q_R}(\delta_{jm}E_j+x_m\partial_jE_j)A_i\,d^3x$;
Riemann-Fubini in [F4] justifies integrating those section identities over the
two remaining coordinates and summing faces. Substitution in step 1.1 gives
the volume term $\varepsilon_0\int_{Q_R}(\operatorname{div}E)
(x\times A)_\ell$, the surface term
$-\varepsilon_0\int_{\partial Q_R}(n\cdot E)(x\times A)_\ell$, and the
remaining volume term $\varepsilon_0\int_{Q_R}(E\times A)_\ell
=(S_R)_\ell$. This is exactly (b). [step 1.1, F3, F4, algebra]

2.1 For the Schwartz packets, every volume term in (b) converges absolutely by
the estimates in the definition of $J_{\mathrm{kin}},L_{\mathrm{can}},
S_{\mathrm{can}}$. On each face of $Q_R$, $|x|\ge R$; choosing Schwartz decay
order $N\ge3$ for both $E$ and $A$ bounds the surface integrand by
$C(1+|x|)^{-2N+1}$, and the total face area is $24R^2$. Hence the boundary
term tends to zero. By [F2] the divergence term vanishes identically. Taking
$R\to\infty$ in the finite-cube identity (b) proves (a). [step 1.2, F1, F2, F4] ∎
