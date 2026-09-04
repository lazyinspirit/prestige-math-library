---
id: ex-frattini-quotient-of-zp
kind: example
title: "The Frattini quotient of Zp is the one-dimensional vector space Fp"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-frattini-formula-for-finitely-generated-pro-p-groups]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Example

For the additive pro-$p$ group $\mathbb Z_p$, one has

$$\Phi(\mathbb Z_p)=p\mathbb Z_p\qquad\text{and}\qquad \mathbb Z_p/\Phi(\mathbb Z_p)\cong\mathbb F_p.$$

## Facts & Assumptions

**Given:** The additive pro-$p$ group $\mathbb Z_p$.

[L1] For a finitely generated pro-$p$ group, the Frattini subgroup is
$\overline{[G,G]G^p}$ ([[thm-frattini-formula-for-finitely-generated-pro-p-groups]]).

## Verification

**Proof technique:** direct.

1.1 The additive group $\mathbb Z_p$ is abelian, so $[\mathbb Z_p,\mathbb Z_p]=0$. Its $p$th-power subgroup in additive notation is $p\mathbb Z_p$, which is already closed. Therefore [L1] gives $\Phi(\mathbb Z_p)=p\mathbb Z_p$. [L1, given, algebra]

2.1 Reduction modulo $p$ is a surjective homomorphism $\mathbb Z_p\to\mathbb Z/p\mathbb Z$ with kernel $p\mathbb Z_p$. By step 1.1, the quotient by $\Phi(\mathbb Z_p)$ is therefore $\mathbb F_p$. [step 1.1, algebra] ∎
