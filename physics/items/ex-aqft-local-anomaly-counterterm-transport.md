---
id: ex-aqft-local-anomaly-counterterm-transport
kind: example
title: "A mixed-background counterterm shift along RG"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-anomaly-matching-and-frontier-examples
dependency_level: 6
deps:
  - def-aqft-exact-background-rg-flow
  - def-aqft-thooft-anomaly
  - pthm-aqft-symmetry-preserving-rg-anomaly-match
dependency_roles:
  def-aqft-exact-background-rg-flow: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
  pthm-aqft-symmetry-preserving-rg-anomaly-match: physical-result
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "Background-functional illustration of the four-dimensional local counterterm quotient on a closed four-torus with trivial U(1) bundles and small gauge transformations; no microscopic matter model, global-bundle conclusion, or continuum limit is asserted."
sources:
  references:
    - title: "Jeffrey A. Harvey, TASI 2003 Lectures on Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0509097"
      locator: "§2.3 for anomaly matching as equality of allowed background anomaly data under an unbroken symmetry."
    - title: "David Tong, Gauge Theory, full lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§3.5 for background coupling and the counterterm-sensitive anomaly representative."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $M=T^4$ be a closed flat Euclidean four-torus. Fix three nondynamical $U(1)$ background connections $A_1,A_2,A_3$, each a globally defined real 1-form on the trivial bundle, and allow only gauge transformations $A_i\mapsto A_i+d\lambda_i$ with smooth single-valued periodic dimensionless real functions $\lambda_i$. Use natural units $c=\hbar=1$, so $[A_i]=$ mass, $[F_i]=$ mass squared, and the functional below is dimensionless. For interpreting endpoint anomaly representatives, assume the model specifies the same Wick-rotation isomorphism between complexified Minkowski and Euclidean local background finite-jet algebras as in the symmetry-preserving RG matching theorem; it maps these fields and horizontal forms and intertwines the BRST differentials and the fixed boundary-term convention. Assume also that the same regularized local BRST-variation assignment at both endpoints identifies each endpoint anomaly representative with the variation of its own $W_\mu$ branch in that finite-jet complex, is linear on common branches, and sends a local counterterm density to its BRST variation modulo a $d_H$-exact form. This is additional model data; the scalar RG identity and the calculation below do not supply that identification or compatibility. In a declared counterterm scheme, take the allowed local background counterterm, with $F_i:=dA_i$ and $d$ the exterior derivative on $T^4$.

$$
C_k[A_1,A_2,A_3]=\frac{ik}{2\pi}\int_{T^4} A_1\wedge A_2\wedge F_3,
$$

where $k\in\mathbb R$ is a fixed dimensionless coefficient. In the common local scheme require $\mathcal C_k=\frac{ik}{2\pi}A_1\wedge A_2\wedge F_3\in\mathcal C$ and require the boundary primitive $q_3$ supplied by the endpoint BRST-variation identification to belong to the same space $\mathcal N$ at both endpoints; the closed-torus convention discards its total derivative. Suppose an exact background-coupled RG comparison has $W_{\mathrm{UV}}[A_1,A_2,A_3]=W_{\mathrm{IR}}[A_1,A_2,A_3]+C_k[A_1,A_2,A_3]$ on this background domain. Then the gauge variation of the counterterm is

$$
\delta C_k=\frac{ik}{2\pi}\int_{T^4}\bigl(-\lambda_1 F_2\wedge F_3+\lambda_2 F_1\wedge F_3\bigr),\qquad F_i=dA_i,
$$

Here $s$ and $d_H$ are the nilpotent differential and horizontal derivative of the background-only finite-jet BRST complex in the local perturbative ’t Hooft anomaly definition; $H^{1,4}_{\mathcal C,\mathcal N}(s\mid d_H)$ is its ghost-number-one four-form cocycle quotient by total derivatives and the declared counterterms. The integrand in the displayed gauge variation is the gauge-parameter evaluation of the local counterterm variation. The common regularized BRST assignment in the preceding hypothesis lifts this variation to the ghost-number-one local representative modulo $d_H$, so the endpoint representatives define the same local anomaly class; the gauge-variation formula alone does not make that identification.

## Example references

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)

[Tong, *Gauge Theory*, §3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

## Verification

**Given:** The closed four-torus, globally defined background 1-forms, smooth periodic gauge parameters, declared local counterterm, and exact RG relation in the Example.

[F1] [[pthm-aqft-symmetry-preserving-rg-anomaly-match]]: the local-class conclusion is conditional on the common Wick-rotation and endpoint BRST-variation identification. The Example states that extra condition and computes the counterterm's local variation directly.

[F2] [[def-aqft-exact-background-rg-flow]]: the counterterm is single-valued on the admitted background domain, and the same background groupoid is used at both scales.

[A1] The model uses only trivial $U(1)$ bundles and gauge transformations connected to the identity; no large-gauge quantization condition is asserted for $k$.

[A2] The same branchwise finite-jet BRST-variation assignment, its local-counterterm compatibility, the Wick-rotation isomorphism, and the total-derivative boundary convention are used at both RG endpoints as required by the theorem, with $\mathcal C_k\in\mathcal C$ and the identified boundary primitive in $\mathcal N$. The torus calculation establishes only the gauge variation of $C_k$; it does not independently identify the endpoint anomaly representatives or infer their BRST-density relation from scalar partition equality.

1.1 Since $F_3$ is unchanged by every allowed gauge transformation, expanding $C_k[A_1+d\lambda_1,A_2+d\lambda_2,A_3+d\lambda_3]-C_k[A_1,A_2,A_3]$ gives $\frac{ik}{2\pi}\int_{T^4}(d\lambda_1\wedge A_2\wedge F_3+A_1\wedge d\lambda_2\wedge F_3+d\lambda_1\wedge d\lambda_2\wedge F_3)$. The final term is exact because $d\lambda_1\wedge d\lambda_2\wedge F_3=d(\lambda_1d\lambda_2\wedge F_3)$, using $dF_3=0$, so its integral vanishes on closed $T^4$. Integration by parts in the first two terms gives $-\int_{T^4}\lambda_1F_2\wedge F_3+\int_{T^4}\lambda_2F_1\wedge F_3$, which is exactly the displayed variation. [A1, given, algebra]

2.1 By [F2], the same $C_k$ is the admissible local term at both endpoints. Under the common local BRST-variation assignment [A2], the RG relation identifies the difference of the evaluations of the endpoint anomaly representatives on the allowed gauge parameters with the gauge variation computed in step 1.1. The local-density compatibility assumption of the theorem lifts this equality to the BRST representative of the counterterm density $\mathcal C_k=\frac{ik}{2\pi}A_1\wedge A_2\wedge F_3$, modulo a $d_H$-exact term, so [F1] places the difference in zero class in the four-dimensional anomaly quotient. The representatives may differ, but their local perturbative anomaly classes agree. [F1, F2, A2, step 1.1, algebra] ∎
