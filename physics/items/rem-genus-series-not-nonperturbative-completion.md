---
id: rem-genus-series-not-nonperturbative-completion
kind: remark
title: Genus expansion is not a nonperturbative completion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 5
domain: physics
physical_scope: "Logical scope of a formal or asymptotic perturbative genus expansion in a fixed background; it makes no claim that a particular string expansion converges or diverges."
deps:
  - def-string-coupling-genus-weight
dependency_roles:
  def-string-coupling-genus-weight: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.1.1 and §§6.4.4–6.4.5, genus expansion, bosonic tachyon cusp, and explicit perturbative/nonperturbative caveats."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

A formal genus expansion records coefficients weighted by the topology convention of String Coupling Genus Weight. Its formal existence alone proves neither convergence of its numerical sum nor existence or uniqueness of an exact nonperturbative theory, instanton sectors, or a string-field completion. These are separate constructions and status claims. This remark does not say that every string genus series diverges.

## Statement references

[[def-string-coupling-genus-weight]]

## Facts & Assumptions

**Given:** A fixed background and normalization in which complex coefficients $a_0,a_1,\ldots$ are recorded against the closed topology powers as the formal Laurent series $\mathcal F(g_s)=\sum_{g\ge0}a_g g_s^{2g-2}=g_s^{-2}A(g_s^2)$, where $A(x)=\sum_{g\ge0}a_gx^g\in\mathbb C[\![x]\!]$. The notation $\mathbb C[\![x]\!]$ means coefficient sequences with coefficientwise addition and Cauchy multiplication; $g_s$ is an indeterminate here. These algebraic operations assign no value at nonzero numerical $g_s$. A fixed external normalization simply multiplies this series by its declared factor.

[F1] [[def-string-coupling-genus-weight]] supplies the closed topology power and explicitly does not assert convergence or a complete measure.

## Proof

1.1 The formal series $A(x)$ is coefficient data with algebraic addition and multiplication. Substitution $x=g_s^2$ and multiplication by $g_s^{-2}$ give exactly the powers $2g-2$ of [F1], but assign no value at any nonzero numerical $g_s$. Therefore convergence cannot follow from the formal-series datum alone. [given, F1, algebra]

2.1 Even an asymptotic expansion does not select a unique exact function: for $g_s>0$, let $f(g_s)=0$ and $h(g_s)=e^{-1/g_s}$. These are distinct. Put $x=1/g_s$; for every integer $N\ge0$, the positive exponential series gives $e^x\ge x^{N+1}/(N+1)!$, hence $0\le g_s^{-N}e^{-1/g_s}=x^Ne^{-x}\le (N+1)!/x\to0$. Thus $h(g_s)=O(g_s^N)$ for every $N$, so $f$ and $h$ have the same all-zero power asymptotic expansion. Coefficient data alone therefore does not determine a unique nonperturbative completion. This abstract calculation asserts nothing about a particular string model. [given, step 1.1, algebra]

3.1 Consequently convergence, nonperturbative sectors, and uniqueness require additional analytic or physical input; they are not logical consequences of the topology weights. [F1, step 1.1, step 2.1, algebra] ∎

## Remarks

Tong describes the genus expansion as formal/asymptotic. Model-specific instanton, matrix-model, and string-field constructions belong to their own interfaces and are not premises here.
