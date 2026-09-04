---
id: ex-p-adic-integers-as-an-inverse-limit
kind: example
title: "The $p$-adic integers as an inverse limit and as a completion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-system-and-inverse-limit-of-modules, def-adic-completion-of-a-module, thm-kernel-and-universal-property-of-adic-completion]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.5"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §24"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $p$ be a prime integer. The inverse system
$$ \cdots \to \mathbb Z/p^3\mathbb Z \to \mathbb Z/p^2\mathbb Z \to \mathbb Z/p\mathbb Z $$
with the natural reduction maps has inverse limit
$$ \mathbb Z_p := \varprojlim_n \mathbb Z/p^n\mathbb Z. $$
This module is canonically the $(p)$-adic completion of $\mathbb Z$.

## Facts & Assumptions

**Given:** A prime integer $p$.

[L2] The $(p)$-adic completion of $\mathbb Z$ is
$$ \widehat{\mathbb Z}^{\,(p)}=\varprojlim_n \mathbb Z/p^n\mathbb Z $$
with completion map $m \mapsto (m \bmod p^n)_n$
([[def-adic-completion-of-a-module]]).

[L3] The completion map has kernel $\bigcap_{n \ge 0} p^n\mathbb Z$
([[thm-kernel-and-universal-property-of-adic-completion]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], applying the adic-completion definition to the ring $\mathbb Z$ and the ideal $(p)$ gives exactly the inverse system displayed above. Therefore its inverse limit is canonically the $(p)$-adic completion of $\mathbb Z$. [L2]

1.2 Under this identification, the completion map is the familiar residue map $$\mathbb Z \to \mathbb Z_p,\qquad m \mapsto (m \bmod p^n)_{n \ge 1}.$$ Its kernel is $\bigcap_{n \ge 0} p^n\mathbb Z$, which is $0$ because the only integer divisible by every power of $p$ is $0$. [L3, algebra]

2.1 So the compatible-residue construction of $\mathbb Z_p$ and the $(p)$-adic-completion construction agree canonically. [step 1.1, step 1.2] ∎
