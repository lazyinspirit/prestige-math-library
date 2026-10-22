---
id: ex-tgrx-two-sector-area
kind: example
title: Sector-dependent ancillary entropy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - prop-tgrx-code-area-entropy
  - thm-natural-logarithm-laws
dependency_roles:
  prop-tgrx-code-area-entropy: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, Appendix A.7.2–A.7.3
      url: https://arxiv.org/pdf/1607.03901
    - title: John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2
      url: https://jhwatrous.github.io/TQI.pdf
generation:
  role: example
---

## Example

Take two sectors with probabilities $p_1,p_2>0$ and $p_1+p_2=1$. Let $H_1,H_2$ be nonzero finite-dimensional complex inner-product spaces, choose density matrices $\rho_1,\rho_2$ on them, and choose $q_1,q_2>0$ with $q_1+q_2=1$ and faithful reference density matrices $\sigma_1,\sigma_2$ on the same spaces. Let the first ancillary space be one-dimensional with $\chi_1=[1]$, and let the second be $\mathbb C^d$ for an integer $d\ge1$, with $\chi_2=I_d/d$. The encoded state has entropy

$$s(\rho_A)=H(p_1,p_2)+p_1s(\rho_1)+p_2s(\rho_2)+p_2\log d,$$

where $H(p_1,p_2):=-p_1\log p_1-p_2\log p_2$ is the sector-probability entropy in nats. The sector-probability contribution is $H(p_1,p_2)$ and the ancillary contribution is $p_2\log d$; when $d=1$, the ancillary contribution is zero. This is an exact finite matrix example and asserts no literal black-hole area law.

## Example references

[[prop-tgrx-code-area-entropy]]

[[thm-natural-logarithm-laws]]

[Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, Appendix A.7.2–A.7.3](https://arxiv.org/pdf/1607.03901)

[John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2](https://jhwatrous.github.io/TQI.pdf)

## Facts & Assumptions

**Given:** The two-sector data in the Statement and the finite sector entropy identity.

[F1] [[prop-tgrx-code-area-entropy]]: $s(\rho_A)=H(\mathbf p)+\sum_\alpha p_\alpha(s(\rho_\alpha)+s(\chi_\alpha))$ for finite sectors with fixed faithful ancillary density matrices and a faithful encoded reference.

[F2] [[thm-natural-logarithm-laws]]: for positive $x,y$, $\log(x/y)=\log x-\log y$ and $\log1=0$.

## Verification

1.1 The one-dimensional matrix $\chi_1=[1]$ has the single eigenvalue $1$, so $s(\chi_1)=-1\log1=0$ by [F2]. [given, F2, algebra]

1.2 The eigenvalues of $\chi_2=I_d/d$ are $1/d$ with multiplicity $d$, hence $s(\chi_2)=-d(1/d)\log(1/d)=\log d$ by [F2]; for $d=1$ this is $\log1=0$. [given, F2, algebra]

2.1 Substitute $s(\chi_1)=0$ and $s(\chi_2)=\log d$ from steps 1.1–1.2 into [F1] with $I=\{1,2\}$. The result is $s(\rho_A)=H(p_1,p_2)+p_1s(\rho_1)+p_2s(\rho_2)+p_2\log d$, with the sector-probability and ancillary contributions as stated. [given, F1, step 1.1, step 1.2, algebra] ∎
