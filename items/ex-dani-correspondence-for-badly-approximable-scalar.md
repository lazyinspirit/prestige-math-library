---
id: ex-dani-correspondence-for-badly-approximable-scalar
kind: example
title: "The scalar Dani correspondence for a badly approximable number"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-dani-correspondence-for-badly-approximable-matrices
  - def-badly-approximable-matrix
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: affine Dani correspondence"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§§2–5: manifold approximation"
---

## Example

Take $m=n=1$ and $A=(\sqrt2-1)\in[0,1]$. Its matrix-lattice orbit is
$$g_tL_{\sqrt2-1}\mathbb Z^2=\operatorname{diag}(e^t,e^{-t})\begin{pmatrix}1&\sqrt2-1\\0&1\end{pmatrix}\mathbb Z^2.$$
The scalar is badly approximable, so Dani’s correspondence predicts a uniform positive systole for this entire forward orbit.



Here badly approximable means $\inf_{q\ge1}q\|q(\sqrt2-1)\|_{\mathbb R/\mathbb Z}>0$.

## Example references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani correspondence.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §§2–5: manifold approximation.


## Facts & Assumptions

**Given:** $A=(\sqrt2-1)$ and the homogeneous Dani correspondence.

[F1] Bad approximability of a scalar matrix is positivity of the liminf of $q\|q\alpha\|$. [[def-badly-approximable-matrix]]

[F2] The correspondence identifies bad approximability with a uniform lower bound along the diagonal lattice flow. [[thm-dani-correspondence-for-badly-approximable-matrices]]

## Verification

1.1 For each integer $q\ge1$, choose $p\in\mathbb Z$ nearest to $q(\sqrt2-1)$ and set $r=p+q$, which is nearest to $q\sqrt2$. Then $|2q^2-r^2|$ is a nonzero integer, so it is at least $1$: equality $r^2=2q^2$ would, after cancelling their gcd, force both coprime integers even by parity. Also $|r|\le\sqrt2q+1/2$, whence $q\sqrt2+|r|<(2\sqrt2+1/2)q<4q$. Therefore $q\|q(\sqrt2-1)\|=q|q\sqrt2-r|\ge1/4$. Thus $A$ is badly approximable. [given, F1, algebra]

2.1 Apply [F2] to $A=(\sqrt2-1)$. The resulting $\varepsilon>0$ works simultaneously for every $t\ge0$ and every nonzero integer vector in the displayed lattice, so the orbit systole is at least $\varepsilon$. [step 1.1, F2] ∎

