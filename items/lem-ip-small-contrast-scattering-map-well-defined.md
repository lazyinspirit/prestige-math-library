---
id: lem-ip-small-contrast-scattering-map-well-defined
kind: lemma
title: Well-definedness of the small-norm fixed-frequency scattering map
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - def-ip-fixed-frequency-far-field-data
  - def-volume-integral-scattering-model
  - lem-volume-far-field-map-is-bounded
  - lem-volume-integral-operator-well-defined-and-bounded
  - lem-l-one-fourier-transform-is-well-defined
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-volume-integral-scattering-born-neumann-error
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used through the volume model, complex L2 interfaces, and Neumann-series theorem. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 7–12: Lippmann–Schwinger equation and far-field integral"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82: volume potential and scattering equation"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice and the hypotheses and notation of the definition of fixed-frequency far-field data. For each $q\in\mathcal U_{D,k}$ there is an $\varepsilon>0$ such that $\|q'-q\|_\infty<\varepsilon$ implies $q'\in\mathcal U_{D,k}$; in particular this metric neighborhood condition holds at zero. For every $q\in\mathcal U_{D,k}$ and every $d,\theta\in S^2$, the solution $u_{q,k,d}$ exists uniquely in $L^2(D;\mathbb C)$, the integrals defining $\mathcal S_k(q)(\theta,d)$ and $\mathcal B_kq(\theta,d)$ are absolutely convergent and independent of representatives, and $\mathcal S_k(q)(\cdot,d)$ is continuous. If $R_0>\sup_{y\in D}|y|$ and $r\ge2R_0$, then
$$\sup_{\theta\in S^2}\left|r e^{-ikr}V_k u_{q,k,d}(r\theta)-\mathcal S_k(q)(\theta,d)\right|\le\frac{2R_0+|k|R_0^2}{4\pi r}\|q\|_\infty\sqrt M\,\|u_{q,k,d}\|_2.$$
Thus $\mathcal S_k(q)(\cdot,d)$ is the uniform outgoing far-field amplitude in the stated convention.

## Statement references

[[def-ip-fixed-frequency-far-field-data|The small-norm domain, volume operator, incident plane wave, scattering data, and first Born data family.]]

[[def-volume-integral-scattering-model|The volume model uses equivalence classes in complex L2 and the stated outgoing Green kernel.]]

[[lem-volume-far-field-map-is-bounded|The far-field map is continuous and has the uniform outgoing-wave error bound.]]

[[lem-volume-integral-operator-well-defined-and-bounded|The volume operator is linear and satisfies the Hilbert–Schmidt norm bound used to show openness.]]

[[thm-volume-integral-scattering-born-neumann-error|For operator norm strictly below one, the Lippmann–Schwinger equation has a unique L2 solution.]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|Complex L2 Cauchy–Schwarz and representative-independent pairings.]]

[[prop-essential-supremum-is-attained-as-the-least-essential-bound|An L-infinity representative is bounded almost everywhere by its essential norm.]]

[[def-fourier-transform-on-l-one-of-rn|The L1 Fourier transform is defined at every frequency and is representative-independent.]]

[[def-countable-choice|Countable Choice is the declared axiom branch of the volume and L2 suppliers.]]

## Facts & Assumptions

**Given:** Countable Choice; a bounded Lebesgue-measurable $D\subset\mathbb R^3$ with $0<M:=|D|<\infty$; $k>0$; a contrast $q\in L^\infty(D;\mathbb C)$; and directions $d,\theta\in S^2$.

[F1] The volume model defines $K_{q,k}$ on complex $L^2(D)$ by the outgoing kernel, treats inputs as equivalence classes, sets the diagonal representative to zero, and uses $|q|\le\|q\|_\infty$ almost everywhere ([[def-volume-integral-scattering-model]]).

[F2] For $\operatorname{diam}(D)<\infty$, $\|K_{q,k}\|_{L^2\to L^2}\le C_D\|q\|_\infty$, where $C_D=\sqrt{M\operatorname{diam}(D)/(4\pi)}$ ([[lem-volume-integral-operator-well-defined-and-bounded]]).

[F3] The plane wave has modulus one, so its restriction to $D$ is in $L^2(D)$ with norm $\sqrt M$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F4] If $\rho_k(q)<1$ and $f\in L^2(D;\mathbb C)$, then $u=f+K_{q,k}u$ has a unique solution in $L^2(D;\mathbb C)$ ([[thm-volume-integral-scattering-born-neumann-error]]).

[F5] For $a,b\in L^2(D;\mathbb C)$, the pairing is representative-independent and $|\int_D a\overline b|\le\|a\|_2\|b\|_2$ ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F6] For $g\in L^1(\mathbb R^3;\mathbb C)$, $\widehat g(\xi)=\int g(y)e^{-2\pi i y\cdot\xi}\,dy$ is absolutely convergent at every $\xi$ and unchanged by null-set modifications ([[def-fourier-transform-on-l-one-of-rn]], [[lem-l-one-fourier-transform-is-well-defined]]).

[F7] For a measurable representative with finite essential norm, $|q|\le\|q\|_\infty$ almost everywhere ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F8] For $v\in L^2(D;\mathbb C)$, the far-field map is continuous in observation direction and its values are the uniform outgoing-wave limits of the exterior volume potential, with the displayed explicit remainder ([[lem-volume-far-field-map-is-bounded]]).

[A1] Countable Choice is assumed by the volume model and the Neumann theorem used here ([[def-countable-choice]]).

## Proof

**Given:** The data in the Statement, with $q\in\mathcal U_{D,k}$.

1.1 The integral operator depends linearly on $q$, so $K_{q,k}-K_{q',k}=K_{q-q',k}$ for any $q,q'\in L^\infty(D;\mathbb C)$. By [F2], $\|K_{q,k}-K_{q',k}\|\le C_D\|q-q'\|_\infty$. The operator-norm triangle inequality then gives $|\rho_k(q)-\rho_k(q')|\le C_D\|q-q'\|_\infty$. Thus $q\mapsto\rho_k(q)$ is continuous, $\mathcal U_{D,k}=\{\rho_k<1\}$ is open, and $0\in\mathcal U_{D,k}$ because $K_{0,k}=0$. [F1, F2, algebra]

1.2 By [F3], $f_{k,d}(x)=e^{ikd\cdot x}$ belongs to $L^2(D;\mathbb C)$ and has norm $\sqrt M$. Since $q\in\mathcal U_{D,k}$, [F4] applies with $f=f_{k,d}$ and gives exactly one $u_{q,k,d}\in L^2(D;\mathbb C)$. [A1, F3, F4, given]

1.3 By [F7], $qu_{q,k,d}\in L^2(D)$ with norm at most $\|q\|_\infty\|u_{q,k,d}\|_2$, while [F3] puts $e^{ik\theta\cdot y}$ in $L^2(D)$. Their pairing in [F5] is the stated integral, so it is absolutely convergent and independent of the representatives. Cauchy–Schwarz gives its absolute value at most $\|q\|_\infty\sqrt M\|u_{q,k,d}\|_2$. [F1, F3, F5, F7, given]

1.4 By [F7], $\|q\|_2\le\sqrt M\|q\|_\infty$; pairing $|q|$ with $1_D$ in [F5] then gives $\int_D|q(y)|\,dy\le M\|q\|_\infty$. Hence $q_0\in L^1(\mathbb R^3;\mathbb C)$. By [F6], its transform is finite and representative-independent. Since $e^{-ik\theta\cdot y}e^{ikd\cdot y}=e^{-2\pi i y\cdot(k(\theta-d)/(2\pi))}$, the Fourier and integral formulas for $\mathcal B_kq$ agree and are well-defined. This proves the assertion for both data families. [F5, F6, F7, given, algebra]

2.1 Apply [F8] to $v=u_{q,k,d}$, whose existence is established in step 1.2. It supplies continuity in observation direction and the stated uniform outgoing-wave limit estimate, so the defined data are the physical far-field amplitude for this volume branch. [F8, step 1.2] ∎
## Remarks

The proof establishes only the small-norm branch selected by $\rho_k(q)<1$. It does not import global scattering uniqueness from smoother coefficient models.
