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
---

## Example

Let $M=T^4$ be a closed flat Euclidean four-torus. Fix three nondynamical $U(1)$ background connections $A_1,A_2,A_3$, each a globally defined real 1-form on the trivial bundle, and allow only gauge transformations $A_i\mapsto A_i+d\lambda_i$ with smooth single-valued periodic real functions $\lambda_i$. Use natural units $c=\hbar=1$, so $[A_i]=$ mass, $[F_i]=$ mass squared, and the functional below is dimensionless. In a declared counterterm scheme, take the allowed local background counterterm

$$
C_k[A_1,A_2,A_3]=\frac{ik}{2\pi}\int_{T^4} A_1\wedge A_2\wedge F_3,
$$

where $F_3=dA_3$ and $k\in\mathbb R$ is a fixed dimensionless coefficient. Suppose an exact background-coupled RG comparison has $W_{\mathrm{UV}}[A_1,A_2,A_3]=W_{\mathrm{IR}}[A_1,A_2,A_3]+C_k[A_1,A_2,A_3]$ on this background domain. Then the two local anomaly representatives differ by

$$
\delta C_k=\frac{ik}{2\pi}\int_{T^4}\bigl(-\lambda_1 F_2\wedge F_3+\lambda_2 F_1\wedge F_3\bigr),\qquad F_i=dA_i,
$$

and therefore define the same local anomaly class modulo the declared counterterms.

## Example references

[Harvey, *TASI 2003 Lectures on Anomalies*, §2.3](https://arxiv.org/pdf/hep-th/0509097)

[Tong, *Gauge Theory*, §3.5](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf)

## Verification

**Given:** The closed four-torus, globally defined background 1-forms, smooth periodic gauge parameters, declared local counterterm, and exact RG relation in the Example.

[F1] [[pthm-aqft-symmetry-preserving-rg-anomaly-match]]: under the declared exact background flow, local anomaly representatives differ only by an allowed local counterterm variation.

[F2] [[def-aqft-exact-background-rg-flow]]: the counterterm is single-valued on the admitted background domain, and the same background groupoid is used at both scales.

[A1] The model uses only trivial $U(1)$ bundles and gauge transformations connected to the identity; no large-gauge quantization condition is asserted for $k$.

1.1 Since $F_3$ is unchanged by every allowed gauge transformation, expanding $C_k[A_1+d\lambda_1,A_2+d\lambda_2,A_3+d\lambda_3]-C_k[A_1,A_2,A_3]$ gives $\frac{ik}{2\pi}\int_{T^4}(d\lambda_1\wedge A_2\wedge F_3+A_1\wedge d\lambda_2\wedge F_3+d\lambda_1\wedge d\lambda_2\wedge F_3)$. The final term is exact because $d\lambda_1\wedge d\lambda_2\wedge F_3=d(\lambda_1d\lambda_2\wedge F_3)$, using $dF_3=0$, so its integral vanishes on closed $T^4$. Integration by parts in the first two terms gives $-\int_{T^4}\lambda_1F_2\wedge F_3+\int_{T^4}\lambda_2F_1\wedge F_3$, which is exactly the displayed variation. [A1, given, algebra]

2.1 By [F2], the same $C_k$ is the admissible local term at both endpoints. The RG relation therefore gives $a_{\mathrm{UV}}-a_{\mathrm{IR}}=\delta C_k$; [F1] identifies this local counterterm variation with zero in the four-dimensional anomaly quotient. The representatives differ, but their local perturbative anomaly classes agree. [F1, F2, step 1.1, algebra] ∎
