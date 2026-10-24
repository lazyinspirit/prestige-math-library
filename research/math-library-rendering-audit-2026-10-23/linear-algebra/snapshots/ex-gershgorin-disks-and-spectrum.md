---
id: ex-gershgorin-disks-and-spectrum
kind: example
title: "Gershgorin disks for an explicit 3x3 matrix contain the true spectrum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-gershgorin-disk-theorem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For

$$A=\begin{pmatrix}2&1&0\\0&3&1\\0&0&4\end{pmatrix},$$

the Gershgorin disks are

$$D_1=\{z:|z-2|\le1\},\qquad D_2=\{z:|z-3|\le1\},\qquad D_3=\{4\},$$

and they contain the whole spectrum $\{2,3,4\}$.

## Facts & Assumptions

**Given:** The upper-triangular matrix $A$ above.

[L1] Every eigenvalue lies in some Gershgorin disk ([[thm-gershgorin-disk-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The row sums off the diagonal are $1,1,0$, so the displayed three Gershgorin disks are exactly the ones attached to $A$. [algebra]

2.1 Because $A$ is upper triangular, its eigenvalues are the diagonal entries $2,3,4$, and each of these lies in the displayed union of disks. This is the concrete containment asserted abstractly by [L1]. [L1, step 1.1] ∎
