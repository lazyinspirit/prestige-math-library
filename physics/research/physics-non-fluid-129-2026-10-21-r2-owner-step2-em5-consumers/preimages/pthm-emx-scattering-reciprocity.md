---
id: pthm-emx-scattering-reciprocity
kind: physics-theorem
title: "Reciprocal port normalization gives symmetric scattering"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-port-scattering-model
  - pthm-emx-lorentz-reciprocity
  - pthm-emx-scattering-contraction
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-port-scattering-model: formulation-prerequisite
  pthm-emx-lorentz-reciprocity: physical-result
  pthm-emx-scattering-contraction: physical-result
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional fixed-frequency consequence for the reciprocal phasor model on a bounded C1 device with the reciprocal port-pairing convention of emx-port-scattering-model. It uses ordinary transpose, not conjugate transpose. The symmetric-unitary conclusion additionally requires the same port map to realize one of the full smooth periodic, source-free finite Lorentz or Drude branches of pthm-emx-scattering-contraction with matching harmonic coefficients, and zero material, wall, and unlisted outgoing power for every input. It asserts no time-reversal theorem or empirical realization."
sources:
  references:
    - title: "Weng Cho Chew, Theory of Microwave and Optical Waveguides, Purdue lecture notes, complete 362-page text"
      url: "https://engineering.purdue.edu/wcchew/course/tgwAll20121211.pdf"
      locator: "§1.6.1, printed p. 10 (PDF p. 19), derives the source-free Lorentz boundary identity for reciprocal tensors; §1.12.2, printed pp. 25–26 (PDF pp. 34–35), defines the incident-to-outgoing scattering matrix and records reciprocity/losslessness consequences. The local proof checks the port pairing and finite-dimensional conclusion explicitly."
    - title: "Roger B. Marks and Dylan F. Williams, A General Waveguide Circuit Theory, Journal of Research of the National Institute of Standards and Technology 97(5) (1992), pp. 533–562"
      url: "https://nistdigitalarchives.contentdm.oclc.org/digital/api/collection/p16009coll6/id/74796/download"
      locator: "§5, printed pp. 555–556, and Appendix D, printed pp. 559–560 (PDF pp. 22–23 and 26–27): power-wave conventions and the corrected reciprocity relation; reciprocal power-wave S need not be symmetric in lossy waveguides. The theorem therefore imposes the exact reciprocal bilinear pairing from its port definition."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script, 176 pages"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Chapter 13, §13.2, printed pp. 13.3–13.9: propagating guide modes and cutoff conventions. No scattering-matrix symmetry result is attributed to this source."
---

## Statement

Assume $\mathrm{AC}_\omega$ and the finite port model at a fixed real $\omega>0$. Let $S(\omega)\in\mathbb C^{N\times N}$ be its unique scattering matrix. Suppose the continuous device phasor coefficient maps $\varepsilon,\mu:\overline\Omega\to\mathbb C^{3\times3}$ obey $\varepsilon(x)^T=\varepsilon(x)$ and $\mu(x)^T=\mu(x)$ pointwise, and for every pair of incoming vectors the corresponding source-free scattering solutions lie in $C^1(\overline\Omega;\mathbb C^3)$ and have reciprocal port modes satisfying the exact bilinear pairing stipulated in the model definition. Then

$$S(\omega)^T=S(\omega).$$

For $A\in\mathbb C^{N\times N}$, define its conjugate transpose by $A^\dagger:=\overline A^{\,\mathsf T}$, where the overline is componentwise conjugation and a superscript $\mathsf T$ is ordinary transpose; $A$ is Hermitian when $A^\dagger=A$ and unitary when $A^\dagger A=AA^\dagger=I_N$, with $I_N$ the identity on $\mathbb C^N$. The transpose relation above uses the unconjugated Lorentz pairing; the unitary relation below uses the separate conjugated Hermitian power pairing. No time-reversal claim follows.

For the additional unitary conclusion, impose all the finite-port contraction model's hypotheses on this same port map. For every incoming vector, its real field maps $E,H,D,B:\overline\Omega\times\mathbb R\to\mathbb R^3$ and its material-state maps on that domain are jointly $C^\infty$ and $T$-periodic, where $T=2\pi/\omega$, and satisfy the smooth source-free macroscopic Maxwell equations with $\rho_f=J_f=0$.

The material closure is one of these two homogeneous, constant-coefficient branches. In the finite Lorentz branch, choose finite $M\ge1$ and maps $P_\ell:\overline\Omega\times\mathbb R\to\mathbb R^3$ for $1\le\ell\le M$. They satisfy

$$D=\varepsilon_\infty E+\sum_{\ell=1}^M P_\ell,\qquad B=\mu H,\qquad \partial_t^2P_\ell+\gamma_\ell\partial_tP_\ell+\omega_\ell^2P_\ell=a_\ell E,$$

with constant $\varepsilon_\infty,\mu,a_\ell,\omega_\ell>0$ and $\gamma_\ell\ge0$. In the Drude branch, take maps $P,V:\overline\Omega\times\mathbb R\to\mathbb R^3$. They satisfy

$$D=\varepsilon_\infty E+P,\qquad B=\mu H,\qquad \partial_tP=V,\qquad \partial_tV+\gamma V=aE,$$

with constant $\varepsilon_\infty,\mu,a>0$ and $\gamma\ge0$. Their SI units are those specified in the finite-port contraction model.

For each input, require the real fields and material states to have only this frequency: let $\widetilde E,\widetilde H,\widetilde D,\widetilde B:\overline\Omega\to\mathbb C^3$ be their phasor amplitudes with $E(x,t)=\operatorname{Re}(\widetilde E(x)e^{-i\omega t})$, and analogously for $H,D,B$. In the Lorentz branch also write $P_\ell(x,t)=\operatorname{Re}(\widetilde P_\ell(x)e^{-i\omega t})$ with $\widetilde P_\ell:\overline\Omega\to\mathbb C^3$; in the Drude branch write $P,V$ in the same form with amplitudes $\widetilde P,\widetilde V:\overline\Omega\to\mathbb C^3$. Substitution into the closure equations gives

$$\varepsilon_{\mathrm L}(\omega)=\left(\varepsilon_\infty+\sum_{\ell=1}^M\frac{a_\ell}{\omega_\ell^2-\omega^2-i\gamma_\ell\omega}\right)I_3,\qquad \varepsilon_{\mathrm D}(\omega)=\left(\varepsilon_\infty-\frac{a}{\omega^2+i\gamma\omega}\right)I_3,$$

where every Lorentz denominator is required nonzero, $I_3$ is the $3\times3$ identity, and the magnetic coefficient is $\mu I_3$ in either branch. Require these harmonic coefficient maps to be the continuous coefficients of this same reciprocal-phasor port model. The matrices are symmetric under ordinary transpose. The branch loss density is $\ell=\sum_{j=1}^M(\gamma_j/a_j)|\partial_tP_j|^2$ in the Lorentz branch and $\ell=(\gamma/a)|V|^2$ in the Drude branch, using the real vector norm $|v|^2=v\cdot v$. For the solution with incoming vector $a$, define $P_{\mathrm{mat}}(a):=T^{-1}\int_0^T\int_\Omega\ell\,dV\,dt$, and let $P_\partial(a)$ and $P_{\mathrm{other}}(a)$ be its nonnegative passive-wall and unlisted-outgoing powers under the finite-port model's bookkeeping. The field, material-state, and parameter units are exactly those specified in that model.

If $P_{\mathrm{mat}}(a)=P_\partial(a)=P_{\mathrm{other}}(a)=0$ for every incoming vector $a$, the contraction result gives $S^\dagger S=I_N$. Since $S$ is finite and square, this and $S^T=S$ give the symmetric-unitary conclusion.

## Statement references

[[def-countable-choice]]

[[def-emx-port-scattering-model]]

[[pthm-emx-lorentz-reciprocity]]

[[pthm-emx-scattering-contraction]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a unique finite scattering matrix $S$, two source-free $C^1$ phasor solutions in the same reciprocal device, and reciprocal incoming/outgoing mode phases satisfying the bilinear pairing in the definition.

[A1] $\mathrm{AC}_\omega$ is the countable-choice axiom required by the bounded-domain reciprocity supplier. [[def-countable-choice]]

[F1] The reciprocal port convention is $\int_{\partial\Omega}n\cdot(\widetilde E_1\times\widetilde H_2-\widetilde E_2\times\widetilde H_1)\,dS=a_1^Tb_2-b_1^Ta_2$; the products are complex-bilinear and contain no conjugation. [[def-emx-port-scattering-model]]

[L1] For $C^1$ phasor solutions on a bounded $C^1$ domain, common continuous coefficients with ordinary transpose symmetry and $\mathrm{AC}_\omega$, the source-free Lorentz boundary pairing is zero. The identity does not assume Hermitian coefficients or losslessness. [[pthm-emx-lorentz-reciprocity]]

[L2] Under the additional smooth $T$-periodic, source-free field assumptions, the finite homogeneous Lorentz or Drude closure equations, and the branchwise loss and port bookkeeping stated for the unitary conclusion above, the contraction theorem gives $S^\dagger S=I_N$ when $P_{\mathrm{mat}}(a)=P_\partial(a)=P_{\mathrm{other}}(a)=0$ for every input $a$. [[pthm-emx-scattering-contraction]]

## Proof

**Proof technique:** apply the source-free Lorentz identity to two independently chosen incoming vectors, rewrite its boundary term with the reciprocal port pairing, and test the resulting bilinear matrix identity on coordinate vectors.

1.1 Choose arbitrary $a_1,a_2\in\mathbb C^N$, and let $(\widetilde E_j,\widetilde H_j)$ be their unique source-free scattering solutions. The coefficient transpose equalities and the hypotheses in [L1] imply $\int_{\partial\Omega}n\cdot(\widetilde E_1\times\widetilde H_2-\widetilde E_2\times\widetilde H_1)\,dS=0$. [given, A1, L1]

2.1 Substitute [F1] and $b_j=Sa_j$ into step 1.1. Since $(Sa_1)^T=a_1^TS^T$, the result is $a_1^T(S-S^T)a_2=0$ for every $a_1,a_2\in\mathbb C^N$. [given, F1, step 1.1, algebra]

3.1 For any coordinate vectors $e_j,e_k$, step 2.1 gives $e_j^T(S-S^T)e_k=S_{jk}-S_{kj}=0$. This holds for every pair $j,k$, hence every entry of $S-S^T$ is zero and $S^T=S$. No complex conjugation is introduced. [step 2.1, algebra]

4.1 Under the additional lossless hypotheses of [L2], the same $S$ satisfies $S^\dagger S=I_N$. Combining this with step 3.1 proves the symmetric-unitary conclusion. Symmetry of the bilinear response matrix is not a statement of time-reversal invariance. [step 3.1, L2] ∎
