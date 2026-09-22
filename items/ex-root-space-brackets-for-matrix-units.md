---
id: ex-root-space-brackets-for-matrix-units
kind: example
title: Root-space brackets for matrix units
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-diagonal-cartan-subalgebra-and-roots-of-sl-n, prop-brackets-of-root-spaces, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Example 19.14"
landmark: false
proof_strategy: direct
---

## Example

In $\mathfrak{sl}_n(\mathbb C)$ with the diagonal Cartan subalgebra
$\mathfrak h$ and roots $\varepsilon_i-\varepsilon_j$ of
[[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], the matrix units satisfy
$$[E_{ij},E_{kl}]=\delta_{jk}E_{il}-\delta_{li}E_{kj},$$
and the bracket of the root lines
$\mathfrak g_{\varepsilon_i-\varepsilon_j}=\mathbb CE_{ij}$ and
$\mathfrak g_{\varepsilon_k-\varepsilon_l}=\mathbb CE_{kl}$ lies in the root
space of the sum of the two functionals, as required by
[[prop-brackets-of-root-spaces]]:
$$[\mathfrak g_{\varepsilon_i-\varepsilon_j},\mathfrak g_{\varepsilon_k-\varepsilon_l}]\subseteq\mathfrak g_{(\varepsilon_i-\varepsilon_j)+(\varepsilon_k-\varepsilon_l)} .$$
For $k\ne j$ and $l\ne i$ both sides vanish; for $k=j$ and $l\ne i$ the bracket is $\mathbb CE_{il}$, whose root is $\varepsilon_i-\varepsilon_l=(\varepsilon_i-\varepsilon_j)+(\varepsilon_j-\varepsilon_l)$.

## Facts & Assumptions

**Given:** The algebra $\mathfrak{sl}_n(\mathbb C)$ with its diagonal Cartan subalgebra and roots $\varepsilon_i-\varepsilon_j$ as in [[ex-diagonal-cartan-subalgebra-and-roots-of-sl-n]], the root lines $\mathfrak g_{\varepsilon_i-\varepsilon_j}=\mathbb CE_{ij}$, and the inclusion $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ of [[prop-brackets-of-root-spaces]]; the root-space convention is [[def-root-and-root-space-relative-to-a-cartan-subalgebra]].

## Verification

**Proof technique:** direct.

1.1 The product formula $E_{ij}E_{kl}=\delta_{jk}E_{il}$ is immediate from matrix multiplication: the product has the single nonzero entry $1$ in position $(i,l)$ exactly when the middle indices match. Hence $[E_{ij},E_{kl}]=\delta_{jk}E_{il}-\delta_{li}E_{kj}$. [given, algebra]

2.1 There are four cases. If $k=j$ and $l\ne i$, then $[E_{ij},E_{jl}]=E_{il}$ and the root is $(\varepsilon_i-\varepsilon_j)+(\varepsilon_j-\varepsilon_l)=\varepsilon_i-\varepsilon_l$. If $l=i$ and $k\ne j$, then $[E_{ij},E_{ki}]=-E_{kj}$ and the root is $(\varepsilon_i-\varepsilon_j)+(\varepsilon_k-\varepsilon_i)=\varepsilon_k-\varepsilon_j$. If $k=j$ and $l=i$, then $[E_{ij},E_{ji}]=E_{ii}-E_{jj}\in\mathfrak h=\mathfrak g_0$ and the functional sum is zero. Finally, if $k\ne j$ and $l\ne i$, both Kronecker terms vanish; the functional sum has no cancellation producing a root or zero, so its root space is zero. Thus every case has the asserted bracket inclusion. [given, step 1.1, algebra] ∎
