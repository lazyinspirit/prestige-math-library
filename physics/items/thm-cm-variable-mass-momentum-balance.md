---
id: thm-cm-variable-mass-momentum-balance
kind: theorem
title: "Variable-mass momentum balance: from $m'=r_{\\rm in}-r_{\\rm out}$ and $(mv)'=F+r_{\\rm in}w_{\\rm in}-r_{\\rm out}w_{\\rm out}$ to $mv'=F+r_{\\rm in}(w_{\\rm in}-v)-r_{\\rm out}(w_{\\rm out}-v)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-vector-valued-derivative-and-integral, def-derivative, def-interval, thm-algebra-of-derivatives]
dependency_roles:
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2, printed p. 2: the momentum form $\\mathbf F=\\dot{\\mathbf p}$ for a body of varying mass, with the warning that the closed-system statement needs open-system momentum accounting"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Richard Fitzpatrick, Classical Mechanics (University of Texas at Austin), Non-Isolated Systems: the total-momentum balance $d\\mathbf P/dt=\\mathbf F$ with external force, the form that fails to track ejected/absorbed material without the flux terms below"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
---

## Statement

Let $I\subseteq\mathbb R$ be an interval with nonempty interior ([[def-interval]]), let $m:I\to(0,\infty)$ and $v:I\to\mathbb R^3$ be differentiable ([[def-derivative]], [[def-vector-valued-derivative-and-integral]]), and let $F:I\to\mathbb R^3$, $r_{\mathrm{in}},r_{\mathrm{out}}:I\to[0,\infty)$ and $w_{\mathrm{in}},w_{\mathrm{out}}:I\to\mathbb R^3$ be maps. Suppose the two **material balance identities**

$$m'(t)=r_{\mathrm{in}}(t)-r_{\mathrm{out}}(t),\qquad (mv)'(t)=F(t)+r_{\mathrm{in}}(t)w_{\mathrm{in}}(t)-r_{\mathrm{out}}(t)w_{\mathrm{out}}(t)$$

hold for every $t\in I$, where $mv$ denotes the pointwise scalar multiple. Then

$$m(t)v'(t)=F(t)+r_{\mathrm{in}}(t)\bigl(w_{\mathrm{in}}(t)-v(t)\bigr)-r_{\mathrm{out}}(t)\bigl(w_{\mathrm{out}}(t)-v(t)\bigr)\qquad(t\in I).$$

In particular, if $F\equiv0$, $r_{\mathrm{in}}\equiv0$ and $r_{\mathrm{out}}\equiv r$ for a constant $r\ge0$, then $mv'=-r(w_{\mathrm{out}}-v)$: the acceleration is governed by the momentum carried away per unit time relative to the body, not by $(mv)'=0$.

The two balance identities are the **adopted content of the material momentum accounting** — the mathematical rendering of "gains $r_{\mathrm{in}}\,dt$ of matter with velocity $w_{\mathrm{in}}$, loses $r_{\mathrm{out}}\,dt$ with velocity $w_{\mathrm{out}}$, and feels the external force $F$". They are not derived here from any closed-system law; the deduction below is their product-rule consequence.

## Facts & Assumptions

**Given:** An interval $I$ with nonempty interior, a differentiable positive real function $m$ and vector curve $v$, maps $F,w_{\mathrm{in}},w_{\mathrm{out}}$ into $\mathbb R^3$, nonnegative functions $r_{\mathrm{in}},r_{\mathrm{out}}$, and the two material balance identities on $I$.

[L1] A vector-valued curve $t\mapsto mv(t)$ is differentiable with $(mv)'_k=(mv_k)'$ for each coordinate, and products of real differentiable functions obey the product rule $(fg)'=f'g+fg'$ ([[def-vector-valued-derivative-and-integral]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the product rule applies coordinatewise to $mv$: $(mv)'=m'v+mv'$, since $(mv)_k=mv_k$ and $(mv_k)'=m'v_k+mv_k'$ for each coordinate $k$. [given, L1]


2.1 Substituting the first balance identity into the second and using step 1.1, $$mv'=(mv)'-m'v=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}-(r_{\mathrm{in}}-r_{\mathrm{out}})v=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v),$$ the last step grouping the $r_{\mathrm{in}}$-terms and the $r_{\mathrm{out}}$-terms and using bilinearity of scalar multiplication. This is the displayed conclusion; the special case $F\equiv0$, $r_{\mathrm{in}}\equiv0$, $r_{\mathrm{out}}\equiv r$ is its immediate substitution, in that case the assumed momentum balance is $(mv)'=-r w_{\mathrm{out}}$, so $(mv)'=0$ at a time $t$ exactly when $r w_{\mathrm{out}}(t)=0$. [step 1.1, given, L1, algebra] ∎
