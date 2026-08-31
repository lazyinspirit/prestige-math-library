---
id: cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting
kind: counterexample
title: "A defective Jordan block can split under perturbation at square-root scale"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-eigenvalue-eigenvector-eigenspace-and-spectrum]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
    - title: "Benjamin Texier, Basic matrix perturbation theory"
      url: "https://ems.press/content/serial-article-files/44369?nt=1"
---

## Statement refuted

Every eigenvalue varies differentiably to first order through a defective point.

Consider

$$A_\varepsilon=\begin{pmatrix}\lambda&1\\ \varepsilon&\lambda\end{pmatrix}.$$

Its eigenvalues are $\lambda\pm\sqrt{\varepsilon}$, so the splitting occurs at
square-root scale rather than linearly.

## Facts & Assumptions

**Given:** The perturbed Jordan block
$A_\varepsilon=\begin{pmatrix}\lambda&1\\ \varepsilon&\lambda\end{pmatrix}$.

[F1] Eigenvalues are roots of the characteristic polynomial
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

## Counterexample
**Proof technique:** direct.

1.1 By [F1], $$\det(zI-A_\varepsilon)=(z-\lambda)^2-\varepsilon.$$ Therefore the eigenvalues are exactly $z_\pm(\varepsilon)=\lambda\pm\sqrt{\varepsilon}$. [F1, algebra]

2.1 The functions $\lambda\pm\sqrt{\varepsilon}$ do not admit ordinary linear first-order expansions at $\varepsilon=0$. Hence a defective eigenvalue need not possess differentiable ordered branches through the perturbation, refuting the claim. [step 1.1, algebra] ∎