---
id: prop-root-space-brackets-add-their-roots
kind: proposition
title: "Brackets of root spaces add their roots"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-root-space-decomposition-relative-to-a-cartan-subalgebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, lem-finite-semisimple-cartan-root-and-string-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-receipts.jsonl (prop-root-space-brackets-add-their-roots). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra, let $\mathfrak h\subseteq\mathfrak g$ be a Cartan subalgebra in the nilpotent self-normalizing sense, and let $\mathfrak g=\mathfrak h\oplus \bigoplus_{\alpha\in \Phi}\mathfrak g_\alpha$ be its decomposition from [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]]. If $x\in \mathfrak g_\alpha$ and $y\in \mathfrak g_\beta$, then

$$[x,y]\in \mathfrak g_{\alpha+\beta},$$

where $\mathfrak g_0:=\mathfrak h$. In particular, if $\alpha+\beta$ is neither $0$ nor a root, then $[x,y]=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, finite-dimensional semisimple Lie algebra, Cartan subalgebra, root decomposition, roots $\alpha,\beta$, and vectors in the statement.

[F1] Under the stated Choice premise, a Cartan subalgebra in the given sense is maximal toral ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]]). The finite root-structure lemma then proves that its weight-zero space is $\mathfrak h$ and that all nonzero weights occur among the finite root set $\Phi$ ([[lem-finite-semisimple-cartan-root-and-string-structure]]).

## Proof

**Proof technique:** direct.

1.1 For every $h\in \mathfrak h$, the derivation property of $\operatorname{ad}(h)$ gives $[h,[x,y]]=[\operatorname{ad}(h)x,y]+[x,\operatorname{ad}(h)y]=\alpha(h)[x,y]+\beta(h)[x,y]=(\alpha+\beta)(h)[x,y]$. [given, algebra]

2.1 By the simultaneous weight-space definition in the cited decomposition, step 1.1 places $[x,y]$ in the weight space for $\alpha+\beta$. By [F1] this space is $\mathfrak h$ when the weight is zero and is zero when the weight is neither zero nor a root. This gives both claims. [F1, step 1.1] ∎
