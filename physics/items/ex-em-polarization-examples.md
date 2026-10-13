---
id: ex-em-polarization-examples
kind: example
title: "Linear, circular and elliptical amplitude choices"
status: published
origin: pipeline
domain: physics
dependency_level: 17
deps: [def-em-polarization-definition,
       pthm-em-plane-wave-maxwell,
       def-em-plane-wave-definition,
       def-cross-product-in-r3,
       def-euclidean-inner-product,
       def-em-si-conventions,
       def-em-lab-geometry]
dependency_roles:
  def-em-polarization-definition: formulation-prerequisite
  pthm-em-plane-wave-maxwell: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Explicit ideal plane-wave amplitude choices on $\\mathbb R^3\\times\\mathbb R$ in a named inertial frame with SI units: linear, circular (both handedness signs), elliptical with orthogonal axes, the zero wave and one dependent-amplitude linear edge case. Excluded: partially polarized light, superposition with other waves, and any empirical or measurement claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.2 pp. 87-88 (linear polarization for real amplitudes; circular and elliptic polarization for $E_0=\\alpha-i\\beta$ with the stated handedness convention)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.1.4 and Problem 9.8 printed pp. 373-375 (the two independent linear polarization states and the circular case with the clockwise/counterclockwise naming)"
verification:
  precheck: pass
---

## Example

Use the frame basis $(e_1,e_2,e_3)$ and the SI conventions of
[[def-em-lab-geometry]] and [[def-em-si-conventions]]. Fix $K>0$, put
$\omega:=cK$ and $k:=Ke_3$, so that $|k|=K=\omega/c$ and $\hat k=e_3$, and let
$E_0>0$ carry the unit $\mathrm V\,\mathrm m^{-1}$. For each amplitude choice
below put $b:=k\times e/\omega$; then the amplitude conditions of
[[pthm-em-plane-wave-maxwell]] hold and the corresponding fields
$(E,B)$ of [[def-em-plane-wave-definition]] are smooth source-free vacuum
Maxwell solutions on $\mathbb R^3\times\mathbb R$, with
$\theta(x,t)=Kx_3-\omega t$.

(i) [Linear] $e:=E_0e_1$, $b=(E_0/c)e_2$. Here $a=E_0e_1$ and $d=0$, the
trace is the segment $[-E_0,E_0]e_1=\{se_1:-E_0\le s\le E_0\}$ traversed
twice per period, the polarization is linear and
$H=\langle a\times d,\hat k\rangle=0$; moreover
$E=E_0\cos\theta\,e_1$, $B=(E_0/c)\cos\theta\,e_2$ and $|B|=|E|/c$.

(ii) [Circular] $e:=E_0(e_1+ie_2)$, $b=(E_0/c)(e_2-ie_1)$. Here
$a=E_0e_1$ and $d=E_0e_2$, so $|a|=|d|=E_0$ and $\langle a,d\rangle=0$: the
polarization is circular of radius $E_0$, with
$E=E_0(\cos\theta\,e_1-\sin\theta\,e_2)$,
$B=(E_0/c)(\sin\theta\,e_1+\cos\theta\,e_2)$, $|E|=E_0$ and $|B|=E_0/c$
everywhere, and $H=\langle a\times d,\hat k\rangle=E_0^2>0$, so this
polarization is left-handed in the convention of
[[def-em-polarization-definition]]. The reversed choice $e=E_0(e_1-ie_2)$
gives $H=-E_0^2<0$ and is right-handed.

(iii) [Elliptical] $e:=E_0(e_1+2ie_2)$. Here $a=E_0e_1$ and $d=2E_0e_2$ are
orthogonal with unequal lengths, so by clause (b)(iii) of
[[def-em-polarization-definition]] the trace is the axis-aligned ellipse
$E_0\cos\theta\,e_1-2E_0\sin\theta\,e_2$ with semiaxes $E_0$ and $2E_0$ along
$e_1$ and $e_2$; $|E|^2=E_0^2(\cos^2\theta+4\sin^2\theta)$ varies between
$E_0^2$ and $4E_0^2$; and $b=(E_0/c)(e_2-2ie_1)$, $H=2E_0^2>0$.

(iv) [Degenerate and edge cases] $e=0$ gives the zero wave, for which
$a=d=0$ and the trace is the single point $\{0\}$. For $e:=E_0(1+i)e_1$ one
has $a=d=E_0e_1$, so the polarization is linear with trace the segment
$[-\sqrt2E_0,\sqrt2E_0]e_1$ and $H=0$; the classification (b) of
[[def-em-polarization-definition]] covers this case without requiring $a$ and
$d$ to be orthogonal.

(v) [Verification and scope] In every case $b=k\times e/\omega$ with
$|k|=\omega/c$, so the amplitude equations hold and the fields are smooth
source-free solutions by [[pthm-em-plane-wave-maxwell]]; the amplitudes and
the semiaxis lengths carry the unit $\mathrm V\,\mathrm m^{-1}$, and
$|B|=|E|/c$ holds pointwise. The examples assert no empirical realization and
no measured polarization.

## Facts & Assumptions

**Given:** The frame basis $(e_1,e_2,e_3)$, the constants $c>0$ and $K>0$, $\omega=cK$, $k=Ke_3$, the amplitude $E_0>0$ in $\mathrm V\,\mathrm m^{-1}$, the six amplitude choices $e\in\{E_0e_1,\ E_0(e_1+ie_2),\ E_0(e_1-ie_2),\ E_0(e_1+2ie_2),\ E_0(1+i)e_1,\ 0\}$ with the corresponding $b=k\times e/\omega$, and the phase $\theta(x,t)=Kx_3-\omega t$.

[F1] The polarization definition fixes the trace $E=a\cos\theta-d\sin\theta$ with $a=\operatorname{Re}e$, $d=\operatorname{Im}e$, the linear, circular and elliptical clauses with their criteria, and the helicity sign $H=\langle a\times d,\hat k\rangle$, with $H=0$ exactly in the linear case, right-handed meaning $H<0$ and left-handed meaning $H>0$ ([[def-em-polarization-definition]]).

[F2] For a plane wave with $k\ne0$, $\omega>0$, if $|k|=\omega/c$ and $e$ satisfies $k\cdot e=0$ then $b=k\times e/\omega$ makes the amplitude equations hold, so the pair lies in the source-free smooth Maxwell branch; all solution fields are $C^\infty$ and satisfy $|B(x,t)|=|E(x,t)|/c$ pointwise ([[pthm-em-plane-wave-maxwell]]).

[F3] The plane-wave pair is $E=\operatorname{Re}(e\exp(i\theta))$, $B=\operatorname{Re}(b\exp(i\theta))$ with $\theta=k\cdot x-\omega t$, $b$ the complex magnetic amplitude, and $\hat k=k/|k|$ ([[def-em-plane-wave-definition]]).

[F4] The cross product has the coordinate formula $u\times v=(u_2v_3-u_3v_2,\,u_3v_1-u_1v_3,\,u_1v_2-u_2v_1)$ on the standard basis ([[def-cross-product-in-r3]]).

[F5] The Euclidean inner product is $\langle u,v\rangle=\sum_k u_kv_k$, additive and real-homogeneous in each argument, so that $|u_1a-u_2d|^2=u_1^2|a|^2+u_2^2|d|^2-2u_1u_2\langle a,d\rangle$ for real $u_1,u_2$ and $a,d\in\mathbb R^3$; in particular the frame basis is orthonormal ([[def-euclidean-inner-product]]).

[F6] The SI conventions provide the propagation constant $c>0$ with its unit and the units of $k$, $\omega$, $E$ and $B$ ([[def-em-si-conventions]]).

[F7] The laboratory region carries the frame basis $(e_1,e_2,e_3)$ in which components are read ([[def-em-lab-geometry]]).

## Verification

**Proof technique:** direct.

1.1 Common data. With $k=Ke_3$ one has $|k|=K$, $|k|=\omega/c$ because $\omega=cK$, and $\hat k=e_3$; by [F4] and the coordinate formula, $e_3\times e_1=e_2$ and $e_3\times e_2=-e_1$. Hence for each choice $b=k\times e/\omega=(K/\omega)(e_3\times e)$: for $e=E_0e_1$, $b=(E_0/c)e_2$; for $e=E_0(e_1+ie_2)$, $b=(E_0/c)(e_2-ie_1)$; for $e=E_0(e_1-ie_2)$, $b=(E_0/c)(e_2+ie_1)$; for $e=E_0(e_1+2ie_2)$, $b=(E_0/c)(e_2-2ie_1)$; and for $e=E_0(1+i)e_1$, $b=(E_0/c)(1+i)e_2$. Also $k\cdot e=K e_3\cdot e=0$ for each of these amplitudes, since only the first two coordinates are nonzero. [given, F3, F4, F5, F7, algebra]

2.1 Case (i), linear. For $e=E_0e_1$ one has $a=E_0e_1$, $d=0$, so $\dim\operatorname{span}\{a,d\}=1$ and clause (b)(i) of [F1] gives a linear trace, the segment $[-E_0,E_0]e_1$ traversed twice per period; $a\times d=E_0e_1\times0=0$ by [F4], so $H=0$. The fields are $E=\operatorname{Re}(E_0e_1e^{i\theta})=E_0\cos\theta\,e_1$ and $B=(E_0/c)\cos\theta\,e_2$, whence $|B|=|E|/c$ pointwise; this also matches $b=(E_0/c)e_2$ from step 1.1 and clause (c) of [F2]. [step 1.1, F1, F2, F3, F4, algebra]

2.2 Case (ii), circular. For $e=E_0(e_1+ie_2)$ one has $a=E_0e_1$, $d=E_0e_2$, so $|a|=|d|=E_0>0$ and $\langle a,d\rangle=E_0^2\langle e_1,e_2\rangle=0$ by the orthonormality of [F5]; clause (b)(ii) of [F1] gives a circular polarization of radius $E_0$. The trace is $E=E_0(\cos\theta\,e_1-\sin\theta\,e_2)$ with $|E|^2=E_0^2(\cos^2\theta+\sin^2\theta)=E_0^2$ by [F5], and $B=\operatorname{Re}\bigl((E_0/c)(e_2-ie_1)e^{i\theta}\bigr) =(E_0/c)(\sin\theta\,e_1+\cos\theta\,e_2)$ with $|B|=E_0/c$; finally $H=\langle a\times d,e_3\rangle=E_0^2\langle e_1\times e_2,e_3\rangle=E_0^2>0$ by [F4] and [F5], so this polarization is left-handed by [F1]. For the reversed choice $e=E_0(e_1-ie_2)$ one has $d=-E_0e_2$ and $H=E_0^2\langle e_1\times(-e_2),e_3\rangle=-E_0^2<0$, which is right-handed. [step 1.1, F1, F2, F3, F4, F5, algebra]

2.3 Case (iii), elliptical. For $e=E_0(e_1+2ie_2)$ one has $a=E_0e_1$, $d=2E_0e_2$, which are orthogonal by [F5] and have unequal lengths, and $\dim\operatorname{span}\{a,d\}=2$; since $|a|=E_0\ne2E_0=|d|$, clause (b)(ii) fails, so clause (b)(iii) of [F1] applies and, because $\langle a,d\rangle=0$, the trace is the axis-aligned ellipse with semiaxes $E_0$ and $2E_0$ along $e_1$ and $e_2$. Explicitly $E=E_0\cos\theta\,e_1-2E_0\sin\theta\,e_2$ and $|E|^2=E_0^2\cos^2\theta+4E_0^2\sin^2\theta$ by [F5], which lies between $E_0^2$ and $4E_0^2$; $b=(E_0/c)(e_2-2ie_1)$ by step 1.1, and $H=\langle E_0e_1\times2E_0e_2,e_3\rangle=2E_0^2>0$. [step 1.1, F1, F2, F3, F4, F5, algebra]

2.4 Case (iv), degenerate and edge cases. For $e=0$ the fields vanish identically by [F3] (the zero wave), $a=d=0$, and clause (b)(i) of [F1] covers the trace $\{0\}$; for $e=E_0(1+i)e_1$ one has $a=d=E_0e_1$, so $\dim\operatorname{span}\{a,d\}=1$, the polarization is linear, and the trace is $E=E_0(\cos\theta-\sin\theta)e_1$, whose coefficient $\cos\theta-\sin\theta=\sqrt2\cos(\theta+\pi/4)$ ranges over $[-\sqrt2,\sqrt2]$; the trace is therefore the segment $[-\sqrt2E_0,\sqrt2E_0]e_1$, and $H=\langle a\times a,e_3\rangle=0$ by alternation of the coordinate formula [F4]. No orthogonality of $a$ and $d$ is used, matching the covering clause of [F1]; the corresponding $b$ is the one computed in step 1.1. [step 1.1, given, F1, F3, F4, F5, algebra]

3.1 Scope check (v). In every case step 1.1 gives $b=k\times e/\omega$ with $k\cdot e=0$ and $|k|=\omega/c$, so by clause (b) of [F2] the amplitude equations hold and the corresponding fields are smooth source-free Maxwell solutions; the amplitudes $e$ and the semiaxis lengths $E_0$, $2E_0$ carry $\mathrm V\,\mathrm m^{-1}$ by [F6], and the pointwise relation $|B|=|E|/c$ is clause (c) of [F2]. The item computes only ideal field quantities and asserts no measurement or empirical realization. [step 1.1, F2, F6, given] ∎

## Remarks

- **Classification, not evidence.** The six choices illustrate clauses of [[def-em-polarization-definition]]; they neither predict nor report any laboratory measurement, and the handedness names are the conventional labels fixed there, not physical claims.
