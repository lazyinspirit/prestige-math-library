---
id: lem-ip-index-function-young-conjugate-bound
kind: lemma
title: A conjugate bound for residual and Bregman errors
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Lemma 2"
      url: "https://arxiv.org/pdf/2403.18704"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Theorem 2.20"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
---

## Statement

Let $\psi:[0,\infty)\to[0,\infty)$ be continuous, nondecreasing, concave, and satisfy $\psi(0)=0$. Extend $g=-\psi$ to $\mathbb R$ by $g(s)=+\infty$ for $s<0$, and define $H(q):=g^*(-q)=\sup_{s\ge0}(\psi(s)-qs)$ for $q>0$, assuming the displayed suprema below are finite. For $c_1,c_2,C_3,\alpha>0$ and $d,r,e\ge0$, if

$$c_1r+c_2\alpha e\le d+\alpha\psi(C_3r),$$

then

$$e\le\frac1{c_2}\left(\frac d\alpha+H\!\left(\frac{c_1}{C_3\alpha}\right)\right),\qquad r\le\frac2{c_1}\left(d+\alpha H\!\left(\frac{c_1}{2C_3\alpha}\right)\right).$$

## Statement references

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Lemma 2 and Appendix A.1](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** $\psi$, $H$, $c_1,c_2,C_3,\alpha,d,r,e$ satisfy the hypotheses and inequality in the Statement.

[A1] The two values $H(c_1/(C_3\alpha))$ and $H(c_1/(2C_3\alpha))$ are finite.

## Proof


1.1 Put $t=C_3r$. Rearranging the given inequality and dividing by $c_2\alpha$ gives $e\le\frac d{c_2\alpha}+\frac1{c_2}\left(\psi(t)-\frac{c_1}{C_3\alpha}t\right)$. The parenthesized expression is bounded above by the defining supremum $H(c_1/(C_3\alpha))$, proving the first bound. [given, A1, algebra]

2.1 Subtracting $c_1r/2$ from the given inequality and using $c_2\alpha e\ge0$ gives $\frac{c_1r}{2}\le d+\alpha\left(\psi(t)-\frac{c_1}{2C_3\alpha}t\right)\le d+\alpha H\!\left(\frac{c_1}{2C_3\alpha}\right)$. Multiplication by $2/c_1$ proves the second bound. [given, A1, step 1.1, algebra] ∎
