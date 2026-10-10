---
id: def-em-vacuum-energy-flux
kind: definition
title: "Vacuum electromagnetic energy density and energy flux (the Poynting vector)"
domain: physics
physical_scope: "The electromagnetic energy density and the Poynting vector of the classical vacuum framework as pointwise functions of the fixed-time fields on a named laboratory region, in SI units, with the explicit exclusions: no distributional products in the weak branch, no value at a point of singular source support, no additivity under decompositions of the fields, and no covariant identification. The item defines quantities only; the physical interpretation as an energy density and an energy flux density belongs to the energy-balance theorem of the same page, and no field equation and no empirical claim is made here."
status: draft
origin: pipeline
dependency_level: 9
proof_strategy: direct
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-cross-product-in-r3, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-euclidean-inner-product, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.4 printed pp. 92-93 (PDF pp. 100-101): the energy density $\\epsilon_0E^2/2+B^2/(2\\mu_0)$ and the Poynting vector $S=(1/\\mu_0)E\\times B$; read in the stamped 236-page PDF"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§8.1.2 printed pp. 345-348, eqs. (8.5), (8.10) and (8.13): the field energy density and the Poynting vector as the energy flux density; read in the stamped 596-page scan"
---

## Definition

Let $U\cong I\times\Omega$ be the laboratory region of [[def-em-lab-geometry]], so
that $I\subseteq\mathbb R$ is a nonempty open interval, $\Omega\subseteq\mathbb R^3$
is nonempty open, $x=(x^1,x^2,x^3)$ is the position in the spatial chart,
$(e_1,e_2,e_3)$ is the frame basis of the spatial slice, and the spatial inner
product is the Euclidean form $\delta$; let the units and the constants $c>0$,
$\mu_0>0$ and $\varepsilon_0:=(\mu_0c^2)^{-1}$ be those of
[[def-em-si-conventions]]; let $k\ge1$, and let
$E,B:\Omega\times I\to\mathbb R^3$ be an electric and a magnetic field of class
$C^k$ of [[def-em-fields]]. Write $\langle\cdot,\cdot\rangle$ and $|\cdot|$ for
the Euclidean inner product and norm of [[def-euclidean-inner-product]] and
$\times$ for the cross product of [[def-cross-product-in-r3]].

(a) [Energy density and flux] The **electromagnetic energy density**
$u:\Omega\times I\to\mathbb R$ and the **energy flux density** (the **Poynting
vector**) $S:\Omega\times I\to\mathbb R^3$ are defined by

$$u(x,t):=\frac{\varepsilon_0}{2}\,\langle E(x,t),E(x,t)\rangle+\frac{1}{2\mu_0}\,\langle B(x,t),B(x,t)\rangle,\qquad S(x,t):=\frac{1}{\mu_0}\,E(x,t)\times B(x,t).$$

At fixed $t\in I$ the map $u(\cdot,t):\Omega\to\mathbb R$ is a real-valued
function on $\Omega$ and $S(\cdot,t):\Omega\to\mathbb R^3$ is a spatial vector
field on $\Omega$, read in the basis $(e_1,e_2,e_3)$. The energy density
carries $\mathrm J\,\mathrm m^{-3}=\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-2}$ and
the energy flux density carries $\mathrm W\,\mathrm m^{-2}=\mathrm{kg}\,\mathrm s^{-3}$.

(b) [Regularity] If $E,B$ are of class $C^k$, then $u$ and $S$ are of class
$C^k$: they are the components of a polynomial expression in the components of
$E,B$, and the verification below exhibits the composite map. In particular $u$
and $S$ are continuous, and the definitions use no derivative of the fields.

(c) [Pointwise reading, quadratic character] The definitions use only the values
of $E$ and $B$ at the same point $(x,t)$, and they are quadratic in the fields:
for every real $\lambda$ one has $u(\lambda E,\lambda B)=\lambda^2u(E,B)$ and
$S(\lambda E,\lambda B)=\lambda^2S(E,B)$, and $u\ge0$. Consequently
decompositions of the fields do not make $u$ or $S$ additive; cross terms
generally contribute. No convention beyond the fixed laboratory frame enters
the definitions.

(d) [Products and singular support] If $E,B$ are only locally integrable (the
weak branch of [[post-em-vacuum-maxwell]]), the products $E_iE_j$, $B_iB_j$ and
the components of $E\times B$ need not be locally integrable, and no product of
distributions is defined. The displayed formulas then define $u$ and $S$
pointwise almost everywhere, and the framework uses them only where the local
integrability of the products, respectively of the component being integrated,
is separately established. No value of $u$ or $S$ is assigned at a point of
singular source support.

(e) [Status] This item defines quantities only. The interpretation of $u$ as an
energy density and of $S$ as an energy flux density, and every balance identity
involving them, is the content of [[pthm-em-poynting-balance]] and of the other
balance items of this page; no identification of $(u,S)$ with components of a
covariant tensor is made here, and the relation $S=c^2g$ to the momentum density
$g$ of [[def-em-vacuum-stress-momentum]] is a consequence of those definitions,
not an identification made at this point.

## Facts & Assumptions

**Given:** the laboratory region $U\cong I\times\Omega$ with $I$ a nonempty open interval and $\Omega\subseteq\mathbb R^3$ nonempty open; its chart, frame basis and spatial Euclidean structure; the SI units and constants of the framework; and jointly $C^k$ fields $E,B$, $k\ge1$.

[F1] The laboratory region, its chart coordinates $(t,x)$, the frame basis $(e_1,e_2,e_3)$ of each spatial slice, the identification $\mathbb R^3\cong n^\perp$, and the componentwise notion of a $C^k$ laboratory field on the open set $\Omega\times I\subseteq\mathbb R^4$, are those of [[def-em-lab-geometry]].

[F2] $E$ and $B$ are electric and magnetic fields of class $C^k$ in the sense of [[def-em-fields]] and [[def-ck-euclidean-maps-and-diffeomorphisms]]: they are maps $\Omega\times I\to\mathbb R^3$ of class $C^k$, $E$ is polar and $B$ is axial, $E$ carries $\mathrm V\,\mathrm m^{-1}$ and $B$ carries $\mathrm T$, and no value of either field is asserted at a point of singular source support.

[F3] The constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$ with $c>0$ and $\mu_0>0$, and the SI unit identities $1\,\mathrm N=1\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-2}$, $1\,\mathrm J=1\,\mathrm N\,\mathrm m$, $1\,\mathrm W=1\,\mathrm J\,\mathrm s^{-1}$, $1\,\mathrm V=1\,\mathrm J\,\mathrm C^{-1}$, $1\,\mathrm A=1\,\mathrm C\,\mathrm s^{-1}$ and $1\,\mathrm T=1\,\mathrm N\,\mathrm A^{-1}\mathrm m^{-1}$ hold; these fix the units of $E,B,\varepsilon_0,\mu_0$ used below ([[def-em-si-conventions]]).

[F4] In the laboratory's component labels $1,2,3$, the Euclidean inner product is $\langle x,y\rangle=\sum_{i=1}^{3}x_iy_i$: these labels relabel the supplier's coordinates $0,1,2$ in order. Its associated norm is $|x|=\sqrt{\langle x,x\rangle}$, and the inner product is bilinear, symmetric and nonnegative definite ([[def-euclidean-inner-product]]); the cross product is bilinear in each argument and has the coordinate formula $(u\times v)_1=u_2v_3-u_3v_2$, $(u\times v)_2=u_3v_1-u_1v_3$, $(u\times v)_3=u_1v_2-u_2v_1$ ([[def-cross-product-in-r3]]).

[F5] Finite componentwise sums, componentwise products and scalar multiples of $C^k$ Euclidean maps are $C^k$, and a composite of composable $C^k$ Euclidean maps is $C^k$; in particular polynomial maps are $C^k$ for every $k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Verification

**Proof technique:** direct.

1.1 The pair map $\Phi:\Omega\times I\to\mathbb R^6$, $\Phi(x,t):=(E(x,t),B(x,t))$, is of class $C^k$ on the open set $\Omega\times I$ of [F1]: its six components are the components of the $C^k$ maps $E$ and $B$ of [F2]. [given, F1, F2, F5]

1.2 The map $P:\mathbb R^6\to\mathbb R^4$, $P(e,b):=\bigl(\tfrac{\varepsilon_0}{2}\langle e,e\rangle+\tfrac{1}{2\mu_0}\langle b,b\rangle,\ \mu_0^{-1}\,e\times b\bigr)$, is of class $C^k$: each of its four components is a finite sum of scalar multiples of products of the coordinate functions $e_1,e_2,e_3,b_1,b_2,b_3$ and the constants $\varepsilon_0,\mu_0$, so repeated application of the algebra clause of [F5] exhibits it as $C^k$; the cross-product coordinate formula of [F4] identifies its last three components. [F3, F4, F5]

1.3 Clause (a), units: with [F3] and [F4] the first summand of $u$ carries $(\mathrm C^2\,\mathrm N^{-1}\mathrm m^{-2})(\mathrm N\,\mathrm C^{-1})^2=\mathrm N\,\mathrm m^{-2}=\mathrm J\,\mathrm m^{-3}$, because $|E|^2$ carries $(\mathrm V\,\mathrm m^{-1})^2=(\mathrm N\,\mathrm C^{-1})^2$ and $\varepsilon_0$ carries $\mathrm F\,\mathrm m^{-1}=\mathrm C^2\,\mathrm J^{-1}\mathrm m^{-1}=\mathrm C^2\,\mathrm N^{-1}\mathrm m^{-2}$; the second summand carries $(\mathrm N\,\mathrm A^{-2})^{-1}(\mathrm N\,\mathrm A^{-1}\mathrm m^{-1})^2=\mathrm N\,\mathrm m^{-2}=\mathrm J\,\mathrm m^{-3}$; and $S$ carries $(\mathrm N\,\mathrm A^{-2})^{-1}(\mathrm N\,\mathrm C^{-1})(\mathrm N\,\mathrm A^{-1}\mathrm m^{-1})=\mathrm N\,\mathrm A\,\mathrm C^{-1}\mathrm m^{-1}=\mathrm N\,\mathrm m^{-1}\mathrm s^{-1}=\mathrm W\,\mathrm m^{-2}=\mathrm kg\,\mathrm s^{-3}$, using $\mathrm A=\mathrm C\,\mathrm s^{-1}$: the units asserted in clause (a) are exactly those of the two expressions. [F3, F4, algebra]

2.1 On $\Omega\times I$ the composite $P\circ\Phi$ equals $(x,t)\mapsto(u(x,t),S(x,t))$ of the Definition: its first component is $\tfrac{\varepsilon_0}{2}\langle E,E\rangle+\tfrac{1}{2\mu_0}\langle B,B\rangle=u(x,t)$, and its last three components are $\mu_0^{-1}E\times B=S(x,t)$. Since $\Phi$ and $P$ are of class $C^k$ by steps 1.1 and 1.2, the composition clause of [F5] makes the composite $C^k$, and the identification of components makes $u$ and $S$ of class $C^k$; this is clause (b). [step 1.1, step 1.2, F4, F5]

3.1 Clause (c): for real $\lambda$, the bilinearity of [F4] gives $\langle\lambda E,\lambda E\rangle=\lambda^2\langle E,E\rangle$ and $(\lambda E)\times(\lambda B)=\lambda^2(E\times B)$, so $u$ and $S$ are homogeneous of degree two in the pair $(E,B)$, and $\varepsilon_0>0$, $\mu_0>0$ together with $|E|^2,|B|^2\ge0$ by [F3] and [F4] give $u\ge0$. No derivative of the fields and no further convention has entered clauses (a)-(c); clauses (d) and (e) record exclusions and status only, so the definition introduces no field equation and no physical interpretation. [step 1.3, F3, F4] ∎

## Remarks

- **Non-additivity, explicitly.** The quadratic character of clause (c) is not a technicality: at a point where $E=e_1$, $E'=e_1$ and $B=0$ one has $u(E+E',0)=2\varepsilon_0$ but $u(E,0)+u(E',0)=\varepsilon_0$, because $u(e_1,0)=\varepsilon_0/2$. Every balance identity of this page is therefore stated for the total fields, never for a sum of separately balanced parts without the cross terms.
