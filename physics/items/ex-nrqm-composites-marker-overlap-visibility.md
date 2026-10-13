---
id: ex-nrqm-composites-marker-overlap-visibility
aliases: [ nrqm-composites-marker-overlap-visibility ]
kind: example
domain: physics
title: "A two-cell marked model: the fringe visibility equals the marker overlap
  exactly"
status: draft
origin: session
dependency_level: 14
deps:
  [
    def-countable-choice,
    def-axiom-of-choice,
    def-nrqm-composites-framework-composite-systems-and-local-readouts,
    def-nrqm-composites-marker-model-and-fringe-visibility,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-marker-overlap-contraction,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    pthm-nrqm-composites-local-readout-laws-and-reduced-preparations,
    pthm-nrqm-composites-marker-overlap-and-visibility-bound,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  ]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-marker-model-and-fringe-visibility: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-marker-overlap-contraction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  pthm-nrqm-composites-local-readout-laws-and-reduced-preparations: physical-result
  pthm-nrqm-composites-marker-overlap-and-visibility-bound: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact computation in the declared marked two-component model
  for a spinless particle with two flat one-dimensional profiles and a
  two-dimensional marker: the phase family of detection weights, the
  marker-overlap visibility and its two extremes. The example is a conditional
  computation in the declared model; it asserts no measured pattern, no counts,
  no decoherence mechanism and no empirical result, and the flat profiles and
  the declared marker states are idealizations, not descriptions of a particular
  apparatus."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.3.1, printed pages 125-127 (PDF pages 133-135): a system entangled
        with an unobserved environment, reduced density operator and the
        suppression of interference"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Section 2, chapter pages
        8-9: product and non-product vectors and their two-dimensional
        determinant criterion"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---
## Example

Adopt the declared marked two-component model of
[[def-nrqm-composites-marker-model-and-fringe-visibility]] with $s=0$
(scalar particle), $m>0$, $H_{0}=L^{2}(\mathbb R^{3})$, and the marker space
$K=\mathbb C^{2}$, and assume the Axiom of Countable Choice and the Axiom of
Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), as required by the
cited position and visibility laws. Declare the following **two-cell model**:
 
(a) fix the length $\ell:=1\,\mathrm m$ and a unit vector $\eta\in L^2(\mathbb R^2)$, whose representatives have dimension $\mathrm m^{-1}$ for transverse coordinates in metres. Define the longitudinal profiles
$$f_1(x_1):=\ell^{-1/2}\mathbf 1_{[0,\ell]}(x_1),\qquad f_2(x_1):=\ell^{-1/2}\bigl(\mathbf 1_{[0,\ell/2]}(x_1)-\mathbf 1_{[\ell/2,\ell]}(x_1)\bigr),$$
of dimension $\mathrm m^{-1/2}$, and the unit path components, as equivalence classes of measurable representatives,
$$\psi_j(x_1,x_2,x_3):=f_j(x_1)\eta(x_2,x_3)\quad(j=1,2),$$
of dimension $\mathrm m^{-3/2}$. Changes at cell boundaries are null-set changes.
 
(b) declare the marker states
$e_{1}:=(1,0)$, $e_{2}:=(\cos\vartheta,\sin\vartheta)$ for a fixed
$\vartheta\in[0,\pi/2]$, so that $\langle e_{1},e_{2}\rangle=\cos\vartheta$;
 
(c) declare the detection bin $B:=[0,\ell/2]\times\mathbb R^{2}$ with
position effect $G(B)=M_{\mathbf 1_{B}}$.
 
Then:
 
(i) $\psi_{1},\psi_{2}$ are unit vectors with $\langle\psi_{1},\psi_{2}\rangle=0$
and $\|\Psi(\varphi)\|=1$ for every phase $\varphi$, so the model is
overlap-normalized;
 
(ii) $p_{1}(B)=p_{2}(B)=\tfrac12$,
$\langle G(B)\psi_{1},\psi_{2}\rangle=\tfrac12$ and
$p_{\mathrm{mix}}(B)=\tfrac12$, hence
$$p(\varphi)(B)=\tfrac12\bigl(1+\cos\vartheta\cos\varphi\bigr),\qquad V(B)=\cos\vartheta=|\langle e_{1},e_{2}\rangle| :$$
the visibility equals the marker overlap exactly, saturating the bound of
[[pthm-nrqm-composites-marker-overlap-and-visibility-bound]] clause (d);
 
(iii) at $\vartheta=0$ (identical markers) $p(\varphi)(B)=\tfrac12(1+\cos\varphi)$
and $V(B)=1$; at $\vartheta=\pi/2$ (orthogonal markers)
$p(\varphi)(B)=\tfrac12$ for every phase and $V(B)=0$, so the marked detection
law is exactly the which-path law.
 
The profiles, the bin and the marker states are declared idealizations of the
model; the computation asserts no measured pattern, no counts, no detector
response and no empirical result.

## Verification

**Given:** The two-cell model data: unit $\eta$, unit $\psi_{1},\psi_{2}$ as displayed, marker states $e_{1},e_{2}$ with $\langle e_{1},e_{2}\rangle=\cos\vartheta$, bin $B=[0,\ell/2]\times\mathbb R^{2}$, phase family $\rho(\varphi)$; the Axiom of Countable Choice and the Axiom of Choice.

[L1] **Model readings.** $\Psi(\varphi)=\frac{1}{\sqrt2}(\kappa(\psi_{1}\otimes e_{1})+e^{i\varphi}\kappa(\psi_{2}\otimes e_{2}))$ with $\kappa$ the tensor embedding, and the detection weight is $p(\varphi)(B)=\operatorname{tr}(\rho(\varphi)(G(B)\otimes I_{K}))$ with $G(B)=M_{\mathbf 1_{B}}$; the reduced weight of the phase family and its normalization are the ones of [[lem-nrqm-composites-marker-overlap-contraction]] ([[def-nrqm-composites-marker-model-and-fringe-visibility]] clauses (a)-(d), [[lem-nrqm-composites-hilbert-tensor-construction]]).

[L2] **Visibility data.** For an overlap-normalized model, $\sup_{\varphi}p(\varphi)(B)=p_{\mathrm{mix}}(B)+|\gamma(B)|$, $\inf_{\varphi}p(\varphi)(B)=p_{\mathrm{mix}}(B)-|\gamma(B)|$ and $V(B)=|\gamma(B)|/p_{\mathrm{mix}}(B)$ with $\gamma(B)=\langle e_{1},e_{2}\rangle\langle G(B)\psi_{1},\psi_{2}\rangle$ ([[pthm-nrqm-composites-marker-overlap-and-visibility-bound]] clauses (a), (c), (d)).

[L3] **Flat-profile integrals.** For the displayed profiles and bin, $\|\psi_{j}\|=1$, $\langle\psi_{1},\psi_{2}\rangle=0$, $\langle G(B)\psi_{j},\psi_{j}\rangle=\frac12$ and $\langle G(B)\psi_{1},\psi_{2}\rangle=\frac12$; these are Fubini factorizations of integrals of products of the one-dimensional profiles with the unit function $\eta$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b)).

[L4] **Choice hypothesis.** The Axiom of Choice is assumed by the cited position and visibility-law suppliers for their general spectral PVM constructions ([[def-axiom-of-choice]]).

**Proof technique:** direct; evaluate the four flat-profile integrals by Fubini, substitute the marker overlap and the phase family into the contraction theorem's detection law, and read off the visibility and its extremes.

**Given:** The data of the statement and [L1]-[L3].

1.1 [Profile integrals] Fubini [L3] factors each three-dimensional integral into its longitudinal integral and $\|\eta\|^2=1$. Since $|f_j|^2=\ell^{-1}\mathbf1_{[0,\ell]}$ almost everywhere, $\|\psi_j\|^2=\ell^{-1}\int_0^\ell dx_1=1$. The longitudinal sign change gives $\langle\psi_1,\psi_2\rangle=\ell^{-1}(\int_0^{\ell/2}dx_1-\int_{\ell/2}^{\ell}dx_1)=0$. On $B$ both profiles agree, so $p_1(B)=p_2(B)=\langle G(B)\psi_1,\psi_2\rangle=\ell^{-1}\int_0^{\ell/2}dx_1=1/2$. The integrands are integrable because they are bounded longitudinal profiles of finite support times $|\eta|^2\in L^1(\mathbb R^2)$. This proves the path unit norm and orthogonality in (i), and the data in (ii). [given, L3, L4, algebra]

2.1 [Detection law and visibility] By step 1.1 the model is overlap-normalized; the marker theorem clause (a) in [L2] then gives $\|\Psi(\varphi)\|=1$ for every real phase and hence $I=\mathbb R$, so [L1] and [L2] apply with $p_{\mathrm{mix}}(B)=\frac12$ and $\gamma(B)=\cos\vartheta\cdot\frac12$; hence $p(\varphi)(B)=\frac12+\operatorname{Re}(e^{-i\varphi}\frac{\cos\vartheta}{2})=\frac12(1+\cos\vartheta\cos\varphi)$ and $V(B)=|\gamma(B)|/p_{\mathrm{mix}}(B)=\frac{\cos\vartheta/2}{1/2}=\cos\vartheta$, which is (ii); at $\vartheta=0$ and $\vartheta=\pi/2$ the displayed laws and values are the ones of (iii). [given, L1, L2, L4, step 1.1, algebra]

3.1 [Assembly] Step 1.1 is (i), step 2.1 is (ii) and (iii); only the declared model and the cited mathematics were used, so no measured pattern, count or apparatus response is asserted. [step 1.1, step 2.1] ∎
