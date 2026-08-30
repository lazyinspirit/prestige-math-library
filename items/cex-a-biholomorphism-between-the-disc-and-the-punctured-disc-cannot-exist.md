---
id: cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist
kind: counterexample
title: "A biholomorphism between the disc and the punctured disc cannot exist"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-removable-singularity-characterizations, thm-open-mapping-theorem-holomorphic-functions]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Walter Rudin, Real and Complex Analysis, Ch. 14"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement refuted

There is a biholomorphism from $\mathbb D$ onto $\mathbb D\setminus\{0\}$.

## Facts & Assumptions

**Given:** The claimed biholomorphism $f:\mathbb D\to\mathbb D\setminus\{0\}$ and its holomorphic inverse $g:\mathbb D\setminus\{0\}\to\mathbb D$.

[L1] A bounded holomorphic function on a punctured disc has a removable singularity at the puncture exactly when it extends holomorphically there ([[thm-removable-singularity-characterizations]]).

[L2] A nonconstant holomorphic map is open ([[thm-open-mapping-theorem-holomorphic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 The inverse $g$ is bounded by $1$ on $\mathbb D\setminus\{0\}$, so [L1] extends it across the puncture to a holomorphic map $G:\mathbb D\to\mathbb C$. Continuity gives $|G|\le1$ on the full disc. [L1, given]

2.1 The map $G$ is nonconstant because it agrees with the inverse $g$ off the puncture. If $|G(0)|=1$, [L2] would make $G(\mathbb D)$ an open set containing a boundary point of the closed unit disc, contradicting $|G|\le1$. Hence $G(0)\in\mathbb D$. [L2, step 1.1, assume-contra, discharge-contradiction]

3.1 For every nonzero $z\in\mathbb D$, the inverse identity gives $f(G(z))=f(g(z))=z$. Letting $z\to0$ and using step 2.1 plus continuity of $f$ gives $f(G(0))=0$. This contradicts $f(\mathbb D)=\mathbb D\setminus\{0\}$, so no such biholomorphism exists. [step 1.1, step 2.1, algebra] ∎
