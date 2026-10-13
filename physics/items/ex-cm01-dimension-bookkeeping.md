---
id: ex-cm01-dimension-bookkeeping
kind: example
title: "Dimension bookkeeping for the quantities and frame parameters of the framework page"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [def-cm01-units, post-cm01-frames, def-cm01-velocity-acceleration, pthm-cm01-galilean-kinematics, post-cm01-worldlines, def-cm01-configuration]
dependency_roles:
  def-cm01-units: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked application of the dimension conventions of the framework to the quantities and frame parameters of this page: the dimensions of time and position coordinates, velocity, acceleration, mass, the mass operator, the Galilean parameters and the displayed transformation laws are computed from the convention rules and checked for consistency. The item asserts no measured value and no law of nature; it is bookkeeping inside the stated conventions."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1, chapter pages 2-3 (PDF pages 6-7): the Euclidean metric r^2 = sum r_j^2, velocity (Eq. 1.3) and acceleration (Eq. 1.4) in SI dimensions, and mass as a scalar constant"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.1, printed pages 2-3 (PDF pages 8-9): v = dx/dt and a = d^2x/dt^2 with the componentwise derivative of a vector-valued position"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Example

Apply the dimension conventions of [[def-cm01-units]] to the quantities of this
page and to the parameters of the frame transformations of
[[post-cm01-frames]]: the time coordinate $t$, the spatial coordinates $x_{i}$,
the worldline parameter, the coordinate velocity $w$ and acceleration $a$ of
[[def-cm01-velocity-acceleration]], the masses $m_{i}$ and the mass operator,
the parameters $b,a_0,v,R$ of a Galilean transformation, the quantities
transformed in the laws $t'=t+b$, $x'=Rx+vt+a_0$, $w'=Rw+v$, $a'=Ra$ of
[[pthm-cm01-galilean-kinematics]], and the frequency $\omega$ and coordinates
$y$ of the rotating-basis example of the page.

For the rotating-coordinate bookkeeping, let $s\in\mathbb R$ be time, let $\omega>0$ be a scalar frequency with $[\omega]=\tau^{-1}$, put $\boldsymbol\omega=(0,0,\omega)$, and let $y:\mathbb R\to\mathbb R^3$ be a $C^2$ coordinate curve whose components have dimension $\ell$. For the constraint bookkeeping define, independently, $G:(\mathbb R^3)^2\to\mathbb R$ by $G(x_1,x_2)=\sum_{j=1}^3((x_1)_j-(x_2)_j)^2-h^2$, with a fixed length $h>0$. These local formulas specify the objects whose dimensions are checked; no result about their motions or level sets is borrowed from a sibling example. Cross products use the explicit component formula of [[def-cm01-units]].

## Facts & Assumptions

**Given:** The dimension symbols $\ell,\tau,\mu$ and the rules $[XY]=[X][Y]$, $[X/Y]=[X][Y]^{-1}$, $[dX/du]=[X][u]^{-1}$, together with the requirements that a sum is formed only from equal dimensions and that $[t]=\tau$, $[x_{i}]=\ell$, $[m]=\mu$, $[R_{ij}]=1$ ([[def-cm01-units]]).

[L1] Dimensions of the frame parameters: $[b]=\tau$, $[(a_0)_{i}]=\ell$, $[v_{i}]=\ell\tau^{-1}$ and $[R_{ij}]=1$; the transformation laws are $t'=t+b$, $x'=Rx+vt+a_0$, $w'=Rw+v$ and $a'=Ra$ ([[post-cm01-frames]], [[pthm-cm01-galilean-kinematics]]).

[L2] Coordinate velocity and acceleration: $w=x_{\gamma}'$ and $a=x_{\gamma}''$ for the coordinate curve $x_{\gamma}$ of a worldline in a frame, whose parameter is the frame time ([[def-cm01-velocity-acceleration]], [[post-cm01-worldlines]]).

[L3] The mass operator multiplies the spatial components of a position tuple by the masses $m_{i}$ ([[def-cm01-configuration]]).

## Verification

**Proof technique:** direct; evaluate the dimension rules on each displayed
quantity and combine.

1.1 The time coordinate and worldline parameter have dimension $[t]=\tau$ and the spatial coordinates $[x_{i}]=\ell$ by the conventions; the dimension of a bilinear product of two quantities is the product of their dimensions, since each component of the product is a sum of products of components to which the rule $[XY]=[X][Y]$ applies. [given, algebra]

2.1 The coordinate velocity has $[w]=[dx_{\gamma}/dt]=\ell\tau^{-1}$ and the coordinate acceleration $[a]=[dw/dt]=\ell\tau^{-2}$, by the derivative rule and step 1.1. [step 1.1, L2, algebra]

3.1 The masses have $[m_{i}]=\mu$, so the mass operator has dimension $\mu$ by [L3]; the momentum $p=mw$ has $[p]=\mu\ell\tau^{-1}$ and the product $m a$ has $[ma]=\mu\ell\tau^{-2}$, both being products of the displayed dimensions. [step 2.1, L3, algebra]

3.2 The frame parameters have the dimensions of [L1]; each law of [L1] is dimensionally consistent: $[t']=[t+b]=\tau$ because $[t]=[b]=\tau$; in $x'=Rx+vt+a_0$ the three summands have dimensions $\ell$, $\ell\tau^{-1}\cdot\tau=\ell$ and $\ell$; $[w']=[Rw+v]=\ell\tau^{-1}$ because $[Rw]=\ell\tau^{-1}$ and $[v]=\ell\tau^{-1}$; and $[a']=[Ra]=\ell\tau^{-2}$. [step 2.1, L1, algebra]

4.1 For the locally specified rotating-basis coordinates $y$ and the angular speed $\omega>0$ measured in radians per second, $[\omega]=\tau^{-1}$ under the radian convention, and the two cross-product expressions are consistent with the acceleration: $[\boldsymbol\omega\times y]=\tau^{-1}\ell=\ell\tau^{-1}=[y']$ and $[\boldsymbol\omega\times(\boldsymbol\omega\times y)]=\tau^{-2}\ell=\ell\tau^{-2}=[y'']$, where each component of a cross product is a sum of products of two components, so its dimension is the product of the dimensions. [step 3.2, algebra]

5.1 Finally the locally defined two-particle constraint function has dimension $\ell^{2}$; the level equation $G(x)=0$ relates a quantity of dimension $\ell^{2}$ to the number $0$, which is admissible because $0$ is the neutral element of addition in every dimension, and multiplying $G$ by a nonzero constant of any fixed dimension produces the same zero set with the same ranks of $DG$ on it, as recorded with the definition of the configuration stage; all quantities and laws of this page are therefore dimensionally consistent under the stated conventions. [step 4.1, algebra] ∎

## Remarks

- The check is bookkeeping inside the conventions of [[def-cm01-units]]: it does not test any physical equation, because the framework at this stage has adopted no force law and no equation of motion. Its role is to make the dimensional readings of the framework's quantities explicit before later pages combine them.

- The dimension of the generalized coordinates of the constrained branch is fixed by the model of the constraint, not by the ambient positions: on a configuration manifold a generalized coordinate may carry any declared dimension, and the dimensions of its velocity and momentum then follow by the same rules; the conventions of [[def-cm01-units]] record this together with the rule that only equal dimensions are added.
