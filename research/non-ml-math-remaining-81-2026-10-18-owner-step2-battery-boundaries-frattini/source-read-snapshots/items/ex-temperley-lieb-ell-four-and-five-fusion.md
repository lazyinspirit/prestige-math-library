---
id: ex-temperley-lieb-ell-four-and-five-fusion
kind: example
title: "Truncated fusion tables for ell four and ell five"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
  - thm-temperley-lieb-root-negligible-quotient-is-semisimple
  - thm-temperley-lieb-rank-one-pivotal-ribbon-conversion
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§§3.2–3.3 and §5, printed pp. 5–8 and 13–16: retained labels and small-level fusion examples."
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "Theorem 5 and proof, printed pp. 25–26: truncated rank-one fusion."
---

## Example

Apply the truncated rule of [[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]] to list the full fusion tables for $\ell=4$ and $\ell=5$. For $\ell=4$ the simple labels are $0,1,2$ and

$$1\otimes1=0\oplus2,\quad1\otimes2=1,\quad2\otimes2=0.$$

For $\ell=5$ the simple labels are $0,1,2,3$ and

$$\begin{aligned} 1\otimes1&=0\oplus2,&1\otimes2&=1\oplus3,&1\otimes3&=2,\\ 2\otimes2&=0\oplus2,&2\otimes3&=1,&3\otimes3&=0.\end{aligned}$$

In both tables $0$ is the tensor unit and the products with $0$ are $0\otimes a=a$.

## Facts & Assumptions

**Given:** The truncated fusion rule and the retained simple-label ranges for each root order.

[F1] At order $\ell$, the retained labels are $0,1,\ldots,\ell-2$ and $a\otimes b$ contains $c=|a-b|,|a-b|+2,\ldots,\min(a+b,2\ell-4-a-b)$ ([[thm-temperley-lieb-rank-one-tilting-quotient-fusion-category]], [[thm-temperley-lieb-root-negligible-quotient-is-semisimple]]).

[F2] The conversion theorem identifies the pivotal/ribbon rank-one labels with the same retained Temperley–Lieb fusion labels ([[thm-temperley-lieb-rank-one-pivotal-ribbon-conversion]]).

## Verification

**Proof technique:** direct calculation.

1.1 For $\ell=4$, the cutoff is $2\ell-4=4$. Substituting $(a,b)=(1,1),(1,2),(2,2)$ into [F1] gives upper bounds $\min(2,2)=2$, $\min(3,1)=1$, and $\min(4,0)=0$, respectively; the lower bounds and parity give exactly $\{0,2\}$, $\{1\}$, and $\{0\}$. The unit rule supplies products with $0$. [F1, given, algebra]

2.1 For $\ell=5$, the cutoff is $6$. The substitutions $(1,1),(1,2),(1,3),(2,2),(2,3),(3,3)$ give intervals and parity sets $\{0,2\}$, $\{1,3\}$, $\{2\}$, $\{0,2\}$, $\{1\}$, and $\{0\}$, respectively. These exhaust unordered pairs among $0,1,2,3$; commutativity of the fusion rule supplies the reversed pairs. The conversion in [F2] preserves the labels and cutoff. [F1, F2, step 1.1, algebra] ∎
