---
id: prop-root-space-brackets-add-their-roots
kind: proposition
title: "Brackets of root spaces add their roots"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g=\mathfrak h\oplus \bigoplus_{\alpha\in \Phi}\mathfrak g_\alpha$ be the decomposition from [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]]. If $x\in \mathfrak g_\alpha$ and $y\in \mathfrak g_\beta$, then

$$[x,y]\in \mathfrak g_{\alpha+\beta},$$

where $\mathfrak g_0:=\mathfrak h$. In particular, if $\alpha+\beta$ is neither $0$ nor a root, then $[x,y]=0$.

## Facts & Assumptions

**Given:** Roots $\alpha,\beta$ of a Cartan subalgebra $\mathfrak h$ and vectors $x\in \mathfrak g_\alpha$, $y\in \mathfrak g_\beta$.

## Proof

**Proof technique:** direct.

1.1 For every $h\in \mathfrak h$, the derivation property of $\operatorname{ad}(h)$ gives $[h,[x,y]]=[\operatorname{ad}(h)x,y]+[x,\operatorname{ad}(h)y]=\alpha(h)[x,y]+\beta(h)[x,y]=(\alpha+\beta)(h)[x,y]$. [given, algebra]

2.1 By [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]], step 1.1 is exactly the defining condition for $[x,y]$ to lie in the root space with weight $\alpha+\beta$. If that root space is zero, then $[x,y]=0$. [step 1.1] ∎
