---
id: cor-yang-standard-gln-t-aspect-subconvexity
kind: corollary
title: "Yang Standard GL(n) t-Aspect Subconvexity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - thm-yang-t-aspect-subconvexity-glnplus1-gln
  - def-pure-isobaric-automorphic-sum
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
  - def-tempered-unitary-representation
  - def-countable-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), arXiv:2309.07534v2, §1.1 Corollary 1.2 and Theorem A"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Paul D. Nelson, Bounds for Standard L-Functions, arXiv:2109.15230v1, §1.1 Theorem 1.1 (general-rank context; not the exact Yang exponent)"
      url: "https://arxiv.org/pdf/2109.15230v1"
    - title: "James W. Cogdell, L-Functions and Converse Theorems for GL(n), corrected/expanded Park City lecture notes (2003), Lecture 4 §4.1 Theorem 4.1"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
---

## Statement

Let $n$ be an integer with $n\ge1$, let $\pi'$ be a unitary cuspidal automorphic representation of $\mathrm{GL}_n(\mathbb A_{\mathbb Q})$, and let $L(s,\pi')$ denote its finite standard $L$-function, defined by the finite-place Euler product in a right half-plane of absolute convergence and evaluated elsewhere by its meromorphic continuation; archimedean factors are omitted. Define

$$\delta_n:=\frac{1}{n(n+1)(3n-1)}.$$

For every $t\in\mathbb R$ and every $\varepsilon>0$,

$$L\!\left(\frac12+it,\pi'\right)\ll_{\pi',\varepsilon}(1+|t|)^{(1-\delta_n)n/4+\varepsilon}.$$

## Statement references

[[def-unitary-cuspidal-generic-gln-representation|unitary cuspidal automorphic representation conventions]]

[[def-standard-and-rankin-selberg-l-functions-on-gln|finite standard L-function convention]]

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, arXiv:2309.07534v2, §1.1 Corollary 1.2 and Theorem A](https://arxiv.org/pdf/2309.07534v2)

## Proof status

The source's reduction takes the tempered isobaric representation $\Pi_{n+1}=\mathbf 1\boxplus\cdots\boxplus\mathbf 1$ with $n+1$ trivial GL(1) constituents. If one proves that every local component of $\Pi_{n+1}$ is tempered and that

$$L(s,\Pi_{n+1}\times\pi')=L(s,\pi')^{n+1}$$

on the continued critical line, then the tempered clause of [[thm-yang-t-aspect-subconvexity-glnplus1-gln]] gives an exponent

$$\frac{1}{n+1}\left(\frac{n(n+1)}4-\frac{1}{4(3n-1)}+\eta\right)=\frac n4-\frac{1}{4(n+1)(3n-1)}+\frac{\eta}{n+1}.$$

Taking $\eta=(n+1)\varepsilon$ yields the displayed exponent because $\delta_n n/4=1/[4(n+1)(3n-1)]$. This is the planned local reduction, not a completed proof: the current theorem carrier has no supplied proof, and the two required input claims have no complete local suppliers.

The current [[thm-yang-t-aspect-subconvexity-glnplus1-gln]] Statement assumes countable choice, whereas this source corollary is unconditional. Its current Step 1 record is escalated. For $n=1$, its proof status routes through the separately missing `thm-yang-gl2-gl1-burgess-t-aspect-subconvexity`; for $n\ge2$, it requires the missing `thm-global-rankin-selberg-continuation-for-arbitrary-rank-pairs` and the unresolved relative-trace-formula and proper-Levi chains. These supplier conditions do not prove the unconditional Statement above.

The source application also needs a local proof that $\Pi_{n+1}$ has tempered local components. The available [[def-tempered-unitary-representation]] defines temperedness by weak containment and carries full AC; the source corollary does not assume AC, so that dependency cannot be used to narrow the claim. The current [[def-standard-and-rankin-selberg-l-functions-on-gln]] defines finite Euler products in their absolute-convergence half-plane but does not supply meromorphic continuation. Its current Step 1 record is owner-escalated for local Langlands assignments. No local proof has established the isobaric Rankin–Selberg factorization at ramified places or continued it to the critical line.

Accordingly, this item preserves the source's full unconditional claim and remains escalated. The source citation is not a substitute for the missing local proof; no proof contract or readiness is claimed.
