---
id: ex-em-two-beam-fringes
kind: example
title: "Ideal deterministic two-wave interference and its fringe geometry"
status: draft
origin: pipeline
domain: physics
dependency_level: 21
deps: [pthm-em-classical-interference,
       pthm-em-plane-wave-maxwell,
       def-em-plane-wave-definition,
       def-euclidean-inner-product,
       def-cross-product-in-r3,
       def-em-si-conventions]
dependency_roles:
  pthm-em-classical-interference: physical-result
  pthm-em-plane-wave-maxwell: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A deterministic interference computation for two explicit ideal coherent plane waves of equal frequency and amplitude in a named inertial frame with SI units: averaged energy density, fringe period, visibility and the copropagating amplitude law. Excluded: real sources and detectors, finite coherence and bandwidth, sampling and noise models, finite-sample statistics, and any empirical claim; no discrimination between classical and quantum descriptions is asserted."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3.1 p. 86 (the principle of superposition: sums of monochromatic solutions are solutions and waves travelling in different directions pass through one another)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.2 printed pp. 376-379 (linearity of the vacuum wave/Maxwell equations; the monochromatic amplitude representation on which the two-wave sum is written)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Let $K>0$, $\omega:=cK$, let $\alpha\in(0,\pi/2)$ (half the angle between the
beams) and $\varphi\in\mathbb R$, and take the two plane waves of
[[def-em-plane-wave-definition]] with
$$k_1=K(\sin\alpha\,e_1+\cos\alpha\,e_3),\qquad k_2=K(-\sin\alpha\,e_1+\cos\alpha\,e_3),$$
$$e_1^{\mathrm{amp}}=E_0e_2,\qquad e_2^{\mathrm{amp}}=E_0e^{i\varphi}e_2,$$
where $E_0>0$ carries $\mathrm V\,\mathrm m^{-1}$ and both amplitudes are
polarized along $e_2$, perpendicular to both wavevectors; with
$b_j=k_j\times e_j^{\mathrm{amp}}/\omega$ and $|k_j|=\omega/c$ both pairs
satisfy the amplitude equations of [[pthm-em-plane-wave-maxwell]], so the
superposition is a source-free smooth Maxwell solution
([[pthm-em-classical-interference]]). Write
$\delta(x):=(k_2-k_1)\cdot x=-2K\sin\alpha\,x_1$. Then:

(i) [Averaged energy density]
$\langle u\rangle(x)=\varepsilon_0E_0^2\bigl[1+\cos^2\alpha\,\cos(2K\sin\alpha\,x_1-\varphi)\bigr]$
for every $x$, by clause (b) of [[pthm-em-classical-interference]] with
$e_1^{\mathrm{amp}}\cdot\overline{e_2^{\mathrm{amp}}}=E_0^2e^{-i\varphi}$ and
$(\hat k_1\times e_1^{\mathrm{amp}})\cdot(\hat k_2\times\overline{e_2^{\mathrm{amp}}})=E_0^2e^{-i\varphi}\cos2\alpha$.

(ii) [Fringes and visibility] At fixed $x_2,x_3$ the averaged energy density is
periodic in $x_1$ with period $\pi/(K\sin\alpha)=\lambda/(2\sin\alpha)$, where
$\lambda=2\pi/K$; its maximum and minimum are
$\varepsilon_0E_0^2(1\pm\cos^2\alpha)$, so the visibility
$V:=\frac{\langle u\rangle_{\max}-\langle u\rangle_{\min}}{\langle u\rangle_{\max}+\langle u\rangle_{\min}}$
equals $\cos^2\alpha=\frac12(1+\hat k_1\cdot\hat k_2)$. In particular
$V\to1$ as $\alpha\downarrow0$ through crossing beams, and $V\to0$ as
$\alpha\to\pi/2$. At $\alpha=0$ with fixed relative phase the profile is
spatially constant: its spatial visibility is $0$ when its value is positive,
and the displayed ratio is undefined when the field vanishes.

(iii) [The promised copropagating amplitude law] For $k_1=k_2=k$ with $|k|=K$ and $k\cdot e_2=0$, retain the common linear
polarization $e_2$ and amplitudes $E_0e_2$, $E_0e^{i\Delta}e_2$ (so that the
sum is the single plane wave with vector amplitude $E_0(1+e^{i\Delta})e_2$),
$\langle u\rangle=\varepsilon_0E_0^2(1+\cos\Delta)=2\varepsilon_0E_0^2\cos^2(\Delta/2)\propto|1+e^{i\Delta}|^2$,
the form used in the double-slit discussion of the content model. Scanning
$\Delta$ gives phase-scan visibility $1$, distinct from spatial visibility at
fixed phase.

(iv) [Statistical qualifications] This is a deterministic prediction of the
classical wave model for the specified coherent two-wave preparation, at every
point of the ideal plane-wave field; a *measured* fringe pattern or detector
histogram would additionally require a declared measurement model (detector
response, finite bin width, background, integration time, sampling) and a
statistical analysis. The example reports no observation, no finite-sample
claim and no visibility estimate from data; in particular classical
electromagnetic waves interfere, so the prediction alone does not discriminate
between classical and quantum descriptions of light. All quantities are
idealized field quantities of the framework.

## Facts & Assumptions

**Given:** $K>0$, $\omega=cK$, $\alpha\in(0,\pi/2)$, $\varphi\in\mathbb R$, $E_0>0$ in $\mathrm V\,\mathrm m^{-1}$, the wavevectors $k_1,k_2$ and amplitudes $e_1^{\mathrm{amp}},e_2^{\mathrm{amp}}$ above, the associated $b_j=k_j\times e_j^{\mathrm{amp}}/\omega$, and the frame basis $(e_1,e_2,e_3)$.

[F1] Coherent interference ([[pthm-em-classical-interference]]): for two same-frequency transverse plane waves with amplitudes $e_1,e_2$, real coefficients $a_1,a_2$ and $\delta(x)=(k_2-k_1)\cdot x$, the sum is a smooth source-free solution and $\langle u\rangle=\frac{\varepsilon_0}{2}(a_1^2|e_1|^2+a_2^2|e_2|^2)+\frac{\varepsilon_0}{2}a_1a_2\operatorname{Re}(W)$ with $W=(e_1\cdot\overline e_2+(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2))e^{-i\delta}$; if $k_1=k_2=:k$ the sum is the single plane wave with amplitude $a_1e_1+a_2e_2$ and $\langle u\rangle=\frac{\varepsilon_0}{2}|a_1e_1+a_2e_2|^2$.

[F2] Plane-wave solutions ([[pthm-em-plane-wave-maxwell]]): for $|k|=\omega/c$, $k\cdot e=0$ and $b=k\times e/\omega$ the pair lies in the source-free smooth Maxwell branch.

[F3] Plane-wave encoding ([[def-em-plane-wave-definition]]): the fields are the real parts of $e\exp(i(k\cdot x-\omega t))$ and $b\exp(i(k\cdot x-\omega t))$, and the complex amplitudes are constant.

[F4] Euclidean structure ([[def-euclidean-inner-product]]): the frame basis is orthonormal, $\langle e_i,e_j\rangle=\delta_{ij}$, and $|v|^2=\langle v,v\rangle$; in particular $\hat k_j=k_j/K$ satisfies $|\hat k_j|=1$.

[F5] Cross product ([[def-cross-product-in-r3]]): $u\times v$ is given by the coordinate differences of products in the positively oriented basis $(e_1,e_2,e_3)$.

[F6] SI conventions ([[def-em-si-conventions]]): $\varepsilon_0$ and $c$ are the framework's positive constants with $\varepsilon_0=(\mu_0c^2)^{-1}$.

## Verification

**Proof technique:** direct.

1.1 Setup and amplitude conditions. Since $\sin^2\alpha+\cos^2\alpha=1$, one has $|k_1|=|k_2|=K=\omega/c$ and $\hat k_1=\sin\alpha\,e_1+\cos\alpha\,e_3$, $\hat k_2=-\sin\alpha\,e_1+\cos\alpha\,e_3$; both $e_j^{\mathrm{amp}}$ are multiples of $e_2$, which is orthogonal to $e_1$ and $e_3$, so $k_j\cdot e_j^{\mathrm{amp}}=0$ by [F4], and with $b_j=k_j\times e_j^{\mathrm{amp}}/\omega$ the amplitude conditions of [F2] hold for both pairs; moreover $\delta(x)=(k_2-k_1)\cdot x=(-2K\sin\alpha\,e_1)\cdot x=-2K\sin\alpha\,x_1$, and $\hat k_1\cdot\hat k_2=-\sin^2\alpha+\cos^2\alpha=\cos2\alpha$ by [F4]. [given, F2, F3, F4, F5, F6, algebra]

2.1 Clause (i). Apply [F1] with $a_1=a_2=1$ and the amplitudes $e_1^{\mathrm{amp}}=E_0e_2$, $e_2^{\mathrm{amp}}=E_0e^{i\varphi}e_2$: then $|e_j^{\mathrm{amp}}|^2=E_0^2$ and $e_1^{\mathrm{amp}}\cdot\overline{e_2^{\mathrm{amp}}}=E_0^2e^{-i\varphi}$, while $k_j\times e_2$ computed coordinatewise by [F5] gives $\hat k_1\times e_2=\sin\alpha\,e_3-\cos\alpha\,e_1$ and $\hat k_2\times e_2=-\sin\alpha\,e_3-\cos\alpha\,e_1$ (using $|k_j|=K$), hence $(\hat k_1\times e_1^{\mathrm{amp}})\cdot(\hat k_2\times\overline{e_2^{\mathrm{amp}}})=E_0^2e^{-i\varphi}(\cos^2\alpha-\sin^2\alpha)=E_0^2e^{-i\varphi}\cos2\alpha$ by [F4]; the bracket is therefore $E_0^2e^{-i\varphi}(1+\cos2\alpha)=2E_0^2\cos^2\alpha\,e^{-i\varphi}$, so $W=2E_0^2\cos^2\alpha\,e^{-i(\delta+\varphi)}$, $\operatorname{Re}(W)=2E_0^2\cos^2\alpha\cos(2K\sin\alpha\,x_1-\varphi)$, and $\langle u\rangle=\frac{\varepsilon_0}{2}(E_0^2+E_0^2)+\frac{\varepsilon_0}{2}\operatorname{Re}(W)=\varepsilon_0E_0^2[1+\cos^2\alpha\cos(2K\sin\alpha\,x_1-\varphi)]$ by [F1] and $\cos(-\delta-\varphi)=\cos(\delta+\varphi)$; this is clause (i). [step 1.1, F1, F4, F5, algebra]

3.1 Clause (ii). By step 2.1, at fixed $x_2,x_3$ the function $x_1\mapsto\langle u\rangle(x)$ is $\varepsilon_0E_0^2[1+\cos^2\alpha\cos(2K\sin\alpha\,x_1-\varphi)]$; since $\cos^2\alpha>0$ for $\alpha\in(0,\pi/2)$ and $\sin\alpha>0$, its oscillation has period $2\pi/(2K\sin\alpha)=\pi/(K\sin\alpha)=\lambda/(2\sin\alpha)$ with $\lambda=2\pi/K$, maximum $\varepsilon_0E_0^2(1+\cos^2\alpha)$ at $\cos(2K\sin\alpha x_1-\varphi)=1$ and minimum $\varepsilon_0E_0^2(1-\cos^2\alpha)$ at $\cos(2K\sin\alpha x_1-\varphi)=-1$; hence $V=\cos^2\alpha$, and $\cos^2\alpha=\frac12(1+\cos2\alpha)=\frac12(1+\hat k_1\cdot\hat k_2)$ by step 1.1. As $\alpha\downarrow0$ with $\alpha>0$ the value $\cos^2\alpha\to1$, and as $\alpha\to\pi/2$ it tends to $0$. At $\alpha=0$ one has $k_1=k_2$ and the profile is $\varepsilon_0E_0^2[1+\cos(-2K\sin\alpha\,x_1-\varphi)]$ evaluated at $\alpha=0$, which is the spatial constant $\varepsilon_0E_0^2[1+\cos\varphi]=2\varepsilon_0E_0^2\cos^2(\varphi/2)$: if this value is positive then max $=$ min and the displayed ratio is $0$, while if it vanishes (that is, $\varphi\equiv\pi\bmod 2\pi$) the ratio is the undefined expression $0/0$. [step 2.1, F4, algebra]

3.2 Clause (iii). If $k_1=k_2=:k$ with equal amplitudes and relative phase $\Delta$, then by [F1] (equal-wavevector clause) the sum is the single plane wave with amplitude $E_0(1+e^{i\Delta})e_2$, and $\langle u\rangle=\frac{\varepsilon_0}{2}|E_0(1+e^{i\Delta})e_2|^2=\frac{\varepsilon_0}{2}E_0^2|1+e^{i\Delta}|^2=\varepsilon_0E_0^2(1+\cos\Delta)=2\varepsilon_0E_0^2\cos^2(\Delta/2)$ using $|1+e^{i\Delta}|^2=2+2\cos\Delta$; scanning $\Delta$ over $\mathbb R$ gives maximum $2\varepsilon_0E_0^2$ at $\Delta\equiv0$ and minimum $0$ at $\Delta\equiv\pi$ modulo $2\pi$, so the phase-scan visibility $({\max-\min})/({\max+\min})$ equals $1$, a different quantity from the spatial visibility at fixed phase. [step 1.1, step 2.1, F1, algebra]

4.1 Clause (iv) and conclusion. Clause (i) is step 2.1, clause (ii) is step 3.1 and clause (iii) is step 3.2; clause (iv) records that all quantities above are deterministic field quantities of the stated ideal coherent preparation, that a measured fringe pattern or histogram would require a declared detector response, finite bin width, background, integration time and sampling model together with a statistical analysis, and that no observation or finite-sample visibility estimate is reported; in particular classical electromagnetic waves interfere, so the deterministic prediction alone does not discriminate between classical and quantum descriptions of light. [step 2.1, step 3.1, step 3.2, given] ∎

## Remarks

- **Prediction, not measurement.** The example computes the ideal averaged energy density of the specified two-wave field and its fringe geometry; a finite detector record is a different object requiring its own measurement and sampling model, and no agreement or disagreement with data is claimed here.
