---
id: ex-qftx-physical-bps-kronecker-hall-sector
kind: example
title: Monopole–dyon two-arrow Hall sector
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 11
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-physical-hall-bps-wall-crossing-examples
axiom_base: ZF + AC_omega, inherited through the physical charge datum and conditional transport theorem; the finite-quiver enumeration itself is choice-free.
deps:
  - def-countable-choice
  - def-qftx-physical-bps-charge-data
  - pthm-qftx-physical-bps-wall-crossing
  - def-finite-acyclic-quiver-stability-data
  - def-qftx-hall-spectrum-generator
  - lem-upper-half-plane-sum-phase-between
  - prop-qftx-hall-spectrum-invariance
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-physical-bps-charge-data: formulation-prerequisite
  pthm-qftx-physical-bps-wall-crossing: physical-result
  def-finite-acyclic-quiver-stability-data: mathematical-premise
  def-qftx-hall-spectrum-generator: mathematical-premise
  lem-upper-half-plane-sum-phase-between: mathematical-premise
  prop-qftx-hall-spectrum-invariance: mathematical-premise
proof_strategy: direct
physical_scope: A conditional pure-SU(2) monopole/dyon charge example whose local proof counts finite-field representations and their Hall groupoid weight; the finite-field coefficient is not identified with a physical second-helicity index, and no BPS state or continuum QFT is asserted to exist.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Frederik Denef, Quantum Quivers and Hall/Hole Halos
      url: https://arxiv.org/pdf/hep-th/0206072
      locator: "Section 5.3, printed pages 35–36: pure SU(2) monopole/dyon partons, their intersection product of magnitude 2, the two-arrow quiver, and the complex quiver-moduli interpretation of the W boson."
    - title: Davide Gaiotto, Gregory W. Moore, and Andrew Neitzke, Four-dimensional wall-crossing via three-dimensional field theory
      url: https://arxiv.org/pdf/0807.4723
      locator: "Introduction equation (1.1) and Section 2.2 equations (2.16)–(2.18): the physical second-helicity index and the distinction between that index and a formal Hall coefficient absent a comparison."
verification:
  precheck: pending
---

## Example

Use the pure-SU(2) physical charge datum with monopole label $\gamma_m=(0,1)$ and dyon label $\gamma_d=(1,-1)$. Their source-normalized central charges are $z_m(u)=\sqrt2\,a_D(u)$ and $z_d(u)=\sqrt2\,(a(u)-a_D(u))$, and their chosen Dirac pairing is $\langle\gamma_m,\gamma_d\rangle_{\mathrm{DSZ}}=2$. For a prime power $q>1$, take the finite acyclic quiver with vertices $m,d$ and two arrows from $d$ to $m$:

```tikz
\begin{tikzpicture}[>=stealth,baseline=(current bounding box.center)]
\node (m) at (0,0) {m};
\node (d) at (2,0) {d};
\draw[->] (d) to[bend left=18] node[above] {a} (m);
\draw[->] (d) to[bend right=18] node[below] {b} (m);
\end{tikzpicture}
```

The charge map sends the two vertex basis vectors to $\gamma_m,\gamma_d$; it matches the quiver skew Euler form because both pairings give $2$ on the ordered pair $(m,d)$. Choose a regular point whose rotated central charges lie in the upper half-plane and satisfy $\phi_m<\phi_d$, where $\phi_i=\arg(e^{-i\alpha}z_i)/\pi$. Among representations of dimension $(1,1)$, the nonzero arrow pairs have $q+1$ stable isomorphism classes, each with automorphism group of order $q-1$, while the zero pair is unstable; the skew-integrated stable-factor coefficient is therefore $(q+1)/(q-1)$ because the Euler self-pairing of $(1,1)$ is zero. In the chamber with $\phi_d<\phi_m$, there is no semistable representation of that dimension. The complete finite-field Hall generators nevertheless agree across the two chamber assignments. This rational groupoid weight is not a physical second-helicity supertrace. Only if the A-page's exact per-phase Hall-to-Hilbert bridge is supplied does the conditional theorem transfer the Hall equality to physical KS automorphisms.

## Example references

Physical charge labels, central charge, and DSZ pairing: [[def-qftx-physical-bps-charge-data]].

Conditional Hall-to-physical wall-crossing theorem: [[pthm-qftx-physical-bps-wall-crossing]].

Finite-quiver stability data: [[def-finite-acyclic-quiver-stability-data]].

Skew integration and completed finite-quiver Hall generators: [[def-qftx-hall-spectrum-generator]].

Completed finite-quiver Hall spectrum generator: [[def-qftx-hall-spectrum-generator]].

The phase of a sum of upper-half-plane charges: [[lem-upper-half-plane-sum-phase-between]].

Finite-field Hall spectrum invariance: [[prop-qftx-hall-spectrum-invariance]].

[Denef, Section 5.3](https://arxiv.org/pdf/hep-th/0206072).

[Gaiotto, Moore, and Neitzke, Introduction and Section 2.2](https://arxiv.org/pdf/0807.4723).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a prime power $q>1$, the two-arrow quiver above, a charge map on the two vertex basis vectors, and a regular chamber point with the stated phase order.

[A1] Assume Countable Choice, $\mathrm{AC}_\omega$, as inherited through the physical charge datum and conditional transport theorem. The finite-field representation enumeration below uses no choice. [[def-countable-choice]]

[F1] [[def-finite-acyclic-quiver-stability-data]]: a finite-quiver representation assigns a finite-dimensional $\mathbb F_q$ vector space to each vertex and a linear map to each arrow; stability means every proper nonzero subrepresentation has strictly smaller phase than the whole representation.

[F2] [[def-qftx-hall-spectrum-generator]]: the skew integration sends each Hall basis class to $J(\delta_M)=t^{\chi_Q(\mathbf d(M),\mathbf d(M))}|\operatorname{Aut}(M)|^{-1}x^{\mathbf d(M)}$.

[F3] [[def-qftx-physical-bps-charge-data]]: $\gamma_m=(0,1)$, $\gamma_d=(1,-1)$, the scalar central charges are $z_m=\sqrt2a_D$ and $z_d=\sqrt2(a-a_D)$, and $\langle\gamma_m,\gamma_d\rangle_{\mathrm{DSZ}}=2$.

[F4] [[lem-upper-half-plane-sum-phase-between]]: for two nonzero upper-half-plane charges with strictly ordered phases, the phase of their sum lies strictly between them.

[F5] [[prop-qftx-hall-spectrum-invariance]]: for a finite acyclic quiver over $\mathbb F_q$, the completed skew generators for any two upper-half-plane charge assignments are equal; this is a formal finite-field identity only.

[F6] [[pthm-qftx-physical-bps-wall-crossing]]: an exact, continuous, per-phase Hall-to-Hilbert bridge with the stated charge, pairing, coefficient, completion, and order matching would transfer that equality to the physical KS automorphisms. This example does not assert that such a bridge is supplied.

## Verification

**Given:** The items and hypotheses in the Statement and [A1], [F1]–[F6].

1.1 In dimension $(1,1)$ each vertex space is $\mathbb F_q$. The two arrow maps are a pair $(r,s)\in\mathbb F_q^2$, and a change of bases $(g_m,g_d)\in(\mathbb F_q^\times)^2$ sends $(r,s)$ to $(g_m r g_d^{-1},g_m s g_d^{-1})$. Hence the zero pair is one orbit and the nonzero pairs are classified by their one-dimensional spans in $\mathbb F_q^2$, giving $|\mathbb P^1(\mathbb F_q)|=(q^2-1)/(q-1)=q+1$ nonzero isomorphism classes. [F1, construct, algebra]

2.1 For a nonzero pair, an automorphism must satisfy $g_m r=r g_d$ and $g_m s=s g_d$; at least one arrow scalar is nonzero, so $g_m=g_d$ and the automorphism group has order $q-1$. For the zero pair every pair of base changes is allowed, so its automorphism group has order $(q-1)^2$. [F1, step 1.1, algebra]

2.2 The subrepresentation supported only at $m$ exists for every representation because both arrows have source $d$. The subrepresentation supported only at $d$ exists exactly for the zero pair. In the stated chamber $\phi_m<\phi_d$, [F4] places the total phase between the two vertex phases; thus every nonzero pair has only the lower-phase proper subrepresentation at $m$ and is stable, whereas the zero pair has the higher-phase subrepresentation at $d$ and is unstable. If $\phi_d<\phi_m$, the subrepresentation at $m$ has higher phase than the total for every pair, so none is semistable. [F1, F4, step 1.1]

3.1 The stable groupoid cardinality in the first chamber is the sum of $q+1$ weights $1/(q-1)$, namely $(q+1)/(q-1)$. For $\mathbf d=(1,1)$ and two arrows $d\to m$, $\chi_Q(\mathbf d,\mathbf d)=1+1-2=0$, so the skew integration contributes the factor $t^0=1$ and leaves this exact coefficient. [F2, step 1.1, step 2.1, step 2.2, algebra]

4.1 The charge map preserves the skew form on the basis pair: the two-arrow orientation gives $\langle\mathbf e_m,\mathbf e_d\rangle_Q=2$, equal to $\langle\gamma_m,\gamma_d\rangle_{\mathrm{DSZ}}$ by [F3]. Applying [F5] to the two phase assignments proves equality of the full completed Hall generators. If the bridge in [F6] is supplied with these exact phases and pairings, the physical KS products agree by the conditional theorem. The coefficient $(q+1)/(q-1)$ remains the finite-field groupoid weight computed in step 3.1; no step identifies it with the physical index $\Omega_u(\gamma_m+\gamma_d)$. [A1, F3, F5, F6, step 3.1, algebra] ∎

## Verification sources

[Denef, Section 5.3](https://arxiv.org/pdf/hep-th/0206072).

[Gaiotto, Moore, and Neitzke, Introduction and Section 2.2](https://arxiv.org/pdf/0807.4723).
