---
id: lem-qft-example-two-body-phase-space
kind: lemma
title: Complete two-body phase space and coefficient flux map
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-example-data
  - def-qft-example-two-body-phase-space-data
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-example-two-body-phase-space-data: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3, sections 3.6.2–3.6.3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete author-hosted HTML chapter; invariant decay phase-space, center-of-momentum flux, and differential cross-section normalization.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 11
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 93–99, two-body kinematics, shell measure, flux, phase-space integral, and symmetry factors.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice [[def-countable-choice]], and use [[def-qft-example-data]] and [[def-qft-example-two-body-phase-space-data]]. Write
$$\mathcal H^+_{\mathsf M}=\{(E,\mathbf q)\in(0,\infty)\times\mathbb R^3:E=\sqrt{|\mathbf q|^2+\mathsf M^2}\}$$
for the positive shell in that Definition, and $C_+=\{(E,\mathbf q)\in\mathbb R\times\mathbb R^3:E\geq|\mathbf q|\}$ for the closed future cone of $h=(+,-,-,-)$. A proper orthochronous linear $h$-Lorentz map is a real linear $\Lambda$ with $\Lambda^Th\Lambda=h$, $\det\Lambda=1$, and $\Lambda(C_+)=C_+$. For energy four-vectors on these positive shells, the shell measure $\nu_{\mathsf M}$ defined there is invariant under every such map. Let $\mathsf M_1,\mathsf M_2\geq0$, let $P$ be future timelike, meaning $P^0>0$ and $h(P,P)>0$, set $s=h(P,P)>(\mathsf M_1+\mathsf M_2)^2$, and write $E_i(r)=\sqrt{r^2+\mathsf M_i^2}$. Let $f$ be a nonnegative Borel function on $\mathcal H^+_{\mathsf M_1}\times\mathcal H^+_{\mathsf M_2}$. For a proper orthochronous $h$-Lorentz map $\Lambda_P$ with $\Lambda_P P=(\sqrt{s},\mathbf0)$, define $\Phi_{2,P}$ as the pushforward of the angular measure $\Phi_2$ from that Definition under
$$\mathbf n\longmapsto\left(\Lambda_P^{-1}(E_1^*,k_*\mathbf n),\Lambda_P^{-1}(E_2^*,-k_*\mathbf n)\right),$$
where $E_i^*$ and $k_*$ are from [[def-qft-example-two-body-phase-space-data]]. The proof below shows that $\Phi_{2,P}$ is independent of the choice of $\Lambda_P$; for $P=(\sqrt{s},\mathbf0)$ it is the pushforward $(\Psi_2)_\#\Phi_2$ under the center-of-momentum map $\Psi_2$ defined there. The standard two-body on-shell integral
$$(2\pi)^4\int d\nu_{\mathsf M_1}(k_1)d\nu_{\mathsf M_2}(k_2)\, \delta^{(4)}(P-k_1-k_2)\,f(k_1,k_2)$$
is interpreted by first evaluating the spatial delta in $k_2$, then the one-dimensional energy delta by the increasing radial change of variable $r\mapsto E_1(r)+E_2(r)$. Explicitly, for each fixed angular direction and nonnegative Borel radial function $g:(0,\infty)\to[0,\infty]$, the radial action after spatial evaluation is $\int_0^\infty g(r)\delta(\sqrt{s}-E_1(r)-E_2(r))\,dr=g(k_*)/(d(E_1+E_2)/dr|_{k_*})$; this is the pushforward evaluation under that $C^1$ diffeomorphism, not a product of distributions. It equals $\int f\,d\Phi_{2,P}$. The threshold root is $k_*$ in that Definition, and
$$\Phi_{2,P}(\mathcal H^+_{\mathsf M_1}\times\mathcal H^+_{\mathsf M_2})=\Phi_2(S^2)=\frac{k_*}{4\pi\sqrt{s}}.$$
For equal rest energies $\mathsf M_1=\mathsf M_2=\mathsf M$, set $\beta=\sqrt{1-4\mathsf M^2/s}$; then $k_*=\sqrt{s}\beta/2$ and $\Phi_{2,P}(\mathcal H^+_{\mathsf M}\times\mathcal H^+_{\mathsf M})=\Phi_2(S^2)=\beta/(8\pi)$. For the scattering flux identities, take incoming $p_i=(E_i,\mathbf p_i)\in\mathcal H^+_{\mathsf M_{i,\mathrm{in}}}$, where $\mathsf M_{i,\mathrm{in}}\geq0$, and require $p_1+p_2=P$. A center-of-momentum map is a proper orthochronous $h$-Lorentz map $\Lambda$ with $\Lambda P=(\sqrt{s},\mathbf0)$; write $\Lambda p_1=(E_1^*,\mathbf p_1^*)$ and define $p_*=|\mathbf p_1^*|$. The value is independent of the choice of $\Lambda$, since two such maps differ by a spatial rotation. Their invariant flux is $F=4p_*\sqrt{s}$. For equal incoming rest energies $\mathsf M_{\mathrm{in}}\geq0$ with $s\geq4\mathsf M_{\mathrm{in}}^2$, define $\beta_{\mathrm{in}}=\sqrt{1-4\mathsf M_{\mathrm{in}}^2/s}$; then $p_*=\sqrt{s}\beta_{\mathrm{in}}/2$ and $F=2s\beta_{\mathrm{in}}$. For finite nonempty incoming and outgoing label sets, normalized initial weights, and the Borel amplitude family of the Definition, whenever $F>0$ the cross-section coefficient map gives
$$\frac{d\sigma_{\mathrm{coeff}}}{d\Omega} =\frac{(\hbar c)^2}{64\pi^2s}\, \frac{k_*}{p_*}\, \frac{\overline{|\mathcal A|^2}}{S_f}.$$
For a parent at rest, represented by $P_0=(\mathsf M_0,\mathbf0)$ with $\mathsf M_0>2\mathsf M$, and two equal-rest-energy daughters on $\mathcal H^+_{\mathsf M}$ with total four-vector $P_0$ and constant amplitude $G_E$ in joules, the rate coefficient is $|G_E|^2\sqrt{1-4\mathsf M^2/\mathsf M_0^2}/(32\pi\hbar\mathsf M_0)$ when the daughters are identical. This is a coefficient calculation, not a claim of exponential survival.

## Facts & Assumptions

**Given:** Assume Countable Choice. Let the common total $P$ be future timelike with $h(P,P)=s>(\mathsf M_1+\mathsf M_2)^2$. For scattering, take $p_i=(E_i,\mathbf p_i)\in\mathcal H^+_{\mathsf M_{i,\mathrm{in}}}$ with $p_1+p_2=P$ and positive center-of-momentum momentum magnitude $p_*>0$, using the center-of-momentum definition in the Statement. Use the shell and coefficient definitions above, including the finite label sets, normalized initial weights, and Borel amplitude family. Let $f$ be nonnegative Borel on $\mathcal H^+_{\mathsf M_1}\times\mathcal H^+_{\mathsf M_2}$.

[F1] [[def-qft-example-data]]: $h=-\eta$ is the algebraic contraction, energy-vector components and rest energies are in joules, and $\hbar c$ converts inverse-length coordinates to energy coordinates.

[F2] [[def-qft-example-two-body-phase-space-data]]: the positive $\mathsf M$-shell is parameterized by $p=(E,\mathbf p)$ with $E=\sqrt{|\mathbf p|^2+\mathsf M^2}>0$; $d\nu_{\mathsf M}=d^3\mathbf p/((2\pi)^3\,2E)$, $d\Phi_2=k_*d\Omega/(16\pi^2\sqrt{s})$, and $F=4\sqrt{(p_1\cdot p_2)^2-\mathsf M_{1,\mathrm{in}}^2\mathsf M_{2,\mathrm{in}}^2}$ for incoming vectors on their stated positive shells. For $F>0$, the finite-label Borel amplitude family has coefficient map $d\sigma_{\mathrm{coeff}}=(\hbar c)^2\overline{|\mathcal A|^2}d\Phi_2/(FS_f)$; a specified single-channel decay amplitude has extended map $\Gamma_{\mathrm{coeff}}=\int|\mathcal G|^2d\Phi_2/(2\hbar\mathsf M_0S_f)$, finite when the integral is finite.

[F3] [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]: under Countable Choice, a $C^1$ diffeomorphism between open Euclidean sets transforms every nonnegative Borel integral by its absolute Jacobian; no completed-measurable extension is asserted.

[F4] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]: under Countable Choice, chart surface measure on $S^2$ equals the polar surface measure and is preserved by orthogonal maps.

## Proof

1.1 Let $a=(a_0,\mathbf a)$ be any future unit vector, so $a_0>0$ and $a_0^2-|\mathbf a|^2=1$. If $\mathbf a=0$, put $B=I$. Otherwise put $r=|\mathbf a|$, $\mathbf n=\mathbf a/r$, and define $B$ to act by $\begin{pmatrix}a_0&r\\r&a_0\end{pmatrix}$ on $\operatorname{span}(e_0,\mathbf n)$ and by the identity on its spatial orthogonal complement. In both cases $B$ preserves $h$, has determinant one, preserves the future cone, and sends $e_0$ to $a$. For any proper orthochronous $h$-Lorentz map $\Lambda$, apply this construction to $a=\Lambda e_0$; then $B^{-1}\Lambda$ fixes $e_0$ and restricts to a proper spatial rotation on $e_0^\perp$. Thus every such $\Lambda$ is a boost followed by a spatial rotation. The construction also gives, for every future unit vector $a$, an inverse boost taking $a$ to $e_0$. [given, F1, algebra, construct]

2.1 A spatial rotation has Jacobian one and leaves $E$ fixed. By step 1.1, it remains to check a boost directed along the first spatial axis. For that boost, $p'_1=a_0p_1+rE$ and $E'=a_0E+rp_1$, so $\partial p'_1/\partial p_1=a_0+rp_1/E=E'/E>0$; the other spatial coordinates are unchanged. The inverse boost is obtained by replacing $r$ with $-r$, so this spatial map is a $C^1$ diffeomorphism. By [F3], $d^3\mathbf p'=(E'/E)d^3\mathbf p$ in every nonnegative Borel integral, and therefore $d^3\mathbf p'/(2E')=d^3\mathbf p/(2E)$. This proves shell-measure invariance under the boost and, using the rotation factorization, under every proper orthochronous $h$-Lorentz map. [step 1.1, F3, algebra]

3.1 Apply the boost construction in step 1.1 to the future unit vector $P/\sqrt{s}$; its inverse takes $P/\sqrt{s}$ to $e_0$. Any two maps taking $P/\sqrt{s}$ to $e_0$ differ by a Lorentz map fixing $e_0$, hence by a spatial rotation on $e_0^\perp$; orthogonal invariance in [F4] therefore makes $\Phi_{2,P}$ independent of the chosen map. Under the chosen map, write $\widetilde f(k_1,k_2)=f(\Lambda_P^{-1}k_1,\Lambda_P^{-1}k_2)$. Step 2.1 preserves each shell measure, and $|\det\Lambda_P|=1$ preserves the four-dimensional delta, so the integral reduces to the rest-frame calculation with $\widetilde f$. Integrating the spatial delta first sets $\mathbf k_2=-\mathbf k_1$ and gives the remaining radial-angular measure
$$\frac{\widetilde f((E_1(r),r\mathbf n),(E_2(r),-r\mathbf n))}{4(2\pi)^2E_1(r)E_2(r)}r^2\,dr\,d\Omega\,\delta(\sqrt{s}-E_1(r)-E_2(r)).$$
Here $d^3\mathbf k_1=r^2dr\,d\Omega$ by [F4]. [given, step 1.1, step 2.1, F2, F4, algebra]

4.1 For $r>0$, $E_1(r)+E_2(r)$ is strictly increasing, with derivative $r(1/E_1+1/E_2)>0$. The threshold assumption gives a unique root $k_*>0$. At this root, $E_1+E_2=\sqrt{s}$ and $E_1-E_2=(\mathsf M_1^2-\mathsf M_2^2)/\sqrt{s}$, so $E_1=(s+\mathsf M_1^2-\mathsf M_2^2)/(2\sqrt{s})$, $E_2=(s-\mathsf M_1^2+\mathsf M_2^2)/(2\sqrt{s})$, and
$$k_*^2=E_1^2-\mathsf M_1^2=\frac{[s-(\mathsf M_1+\mathsf M_2)^2][s-(\mathsf M_1-\mathsf M_2)^2]}{4s}.$$
The derivative at the root is $k_*\sqrt{s}/(E_1E_2)$. Applying [F3] to the one-dimensional increasing change of variable in step 3.1, for each fixed $\mathbf n$, gives the angular density $\widetilde f((E_1^*,k_*\mathbf n),(E_2^*,-k_*\mathbf n))k_*d\Omega/(16\pi^2\sqrt{s})$. Integrating this nonnegative Borel density in the stipulated order gives exactly $\int f\,d\Phi_{2,P}$ by its pushforward definition. In the center-of-momentum frame, this is the pushforward $(\Psi_2)_\#\Phi_2$ from the Definition, where $\Phi_2$ is a measure on $S^2$. To compute the angular total, use $X(\vartheta,\varphi)=(\sin\vartheta\cos\varphi,\sin\vartheta\sin\varphi,\cos\vartheta)$ for $0<\vartheta<\pi$ and $0<\varphi<2\pi$; its chart-area density is $|\partial_{\vartheta}X\times\partial_{\varphi}X|=\sin\vartheta$. The omitted meridian and poles are null in the two-dimensional chart measure, so $\Omega(S^2)=\int_0^\pi\int_0^{2\pi}\sin\vartheta\,d\varphi\,d\vartheta=4\pi$. It follows that $\Phi_2(S^2)=k_*/(4\pi\sqrt{s})$. For equal daughter energies $\mathsf M$, this gives $k_*=\sqrt{s}\beta/2$ and $\Phi_2(S^2)=\beta/(8\pi)$, where $\beta=\sqrt{1-4\mathsf M^2/s}$. [step 3.1, given, F2, F3, F4, algebra]

5.1 In the incoming center-of-momentum frame from step 3.1, write $p_1=(E_1,\mathbf p_*)$ and $p_2=(E_2,-\mathbf p_*)$, so $E_1+E_2=\sqrt{s}$. The mass-shell equations give $p_1\cdot p_2=E_1E_2+p_*^2$ and $\mathsf M_{i,\mathrm{in}}^2=E_i^2-p_*^2$. Direct expansion yields
$$(p_1\cdot p_2)^2-\mathsf M_{1,\mathrm{in}}^2\mathsf M_{2,\mathrm{in}}^2=(E_1E_2+p_*^2)^2-(E_1^2-p_*^2)(E_2^2-p_*^2)=p_*^2(E_1+E_2)^2=sp_*^2,$$
so [F2] gives $F=4p_*\sqrt{s}$. If the incoming rest energies are equal to $\mathsf M_{\mathrm{in}}$, then $E_1=E_2=\sqrt{s}/2$ and $p_*^2=s/4-\mathsf M_{\mathrm{in}}^2$; since $p_*>0$, $p_*=\sqrt{s}\beta_{\mathrm{in}}/2$ and $F=2s\beta_{\mathrm{in}}$. Combining the phase-space density from step 4.1 with [F2]'s coefficient map yields
$$\frac{d\sigma_{\mathrm{coeff}}}{d\Omega}=\frac{(\hbar c)^2}{64\pi^2s}\frac{k_*}{p_*}\frac{\overline{|\mathcal A|^2}}{S_f}.$$
[step 3.1, step 4.1, given, F2, algebra]

6.1 For a parent at rest with energy $\mathsf M_0>2\mathsf M$ and two equal-mass daughters, step 4.1 gives $\int d\Phi_2=\sqrt{1-4\mathsf M^2/\mathsf M_0^2}/(8\pi)$. The decay coefficient map in [F2] divides $|G_E|^2\int d\Phi_2$ by $2\hbar\mathsf M_0S_f$; for identical daughters $S_f=2$, this is $|G_E|^2\sqrt{1-4\mathsf M^2/\mathsf M_0^2}/(32\pi\hbar\mathsf M_0)$. Its units are $\mathrm J^2/(\mathrm{J\,s\,J})=\mathrm s^{-1}$. No survival law enters this coefficient calculation. [step 4.1, F2, algebra] ∎
