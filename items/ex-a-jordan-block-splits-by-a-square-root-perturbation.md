---
id: ex-a-jordan-block-splits-by-a-square-root-perturbation
kind: example
title: "A $2\\times2$ Jordan block splits into two eigenvalues separated by a square root"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Texier, Basic matrix perturbation theory"
      url: "https://ems.press/content/serial-article-files/44369?nt=1"
---

## Example

At $\lambda=0$, the defective family

$$A_\varepsilon=\begin{pmatrix}0&1\\ \varepsilon&0\end{pmatrix}$$

has characteristic polynomial $z^2-\varepsilon$, so its eigenvalues are
$\pm\sqrt{\varepsilon}$.

## Facts & Assumptions

**Given:** The perturbed Jordan block above.

[L1] A defective Jordan block can split at square-root scale
([[cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting]]).

## Verification
**Proof technique:** direct.

1.1 Computing the determinant of $zI-A_\varepsilon$ gives $z^2-\varepsilon$, so the roots are $\pm\sqrt{\varepsilon}$. [algebra]

2.1 The separation between the two eigenvalues is therefore $2\sqrt{\varepsilon}$, not a quantity linear in $\varepsilon$. This is exactly the square-root splitting described in [L1]. [L1, step 1.1] ∎