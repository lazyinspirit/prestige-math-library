---
id: lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant
kind: lemma
title: "Precompact trajectory tails have nonempty compact connected flow-invariant limit sets"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-negative-gradient-trajectory-of-a-morse-function, def-compact-space, thm-fundamental-theorem-on-flows]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, Lemma 2.4.1"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Statement

Let $\gamma:\mathbb R\to M$ be a full negative-gradient trajectory and let
$\Phi$ be its flow. If $\overline{\gamma([0,\infty))}$ is compact, then

$$ \omega(\gamma):=\bigcap_{T\ge0}\overline{\gamma([T,\infty))} $$

is nonempty, compact, connected, and invariant under every $\Phi_s$. The
analogous conclusion holds for
$\alpha(\gamma):=\bigcap_{T\ge0}\overline{\gamma(( -\infty,-T])}$ when its
negative tail has compact closure.

## Facts & Assumptions

**Given:** A full trajectory $\gamma$ and a compact closure $K$ of its positive tail.

[F1] A compact space has the finite-subcover property ([[def-compact-space]]).

[F2] The maximal flow is continuous and obeys $\Phi_s(\gamma(t))=\gamma(t+s)$ whenever defined ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 Each $K_T:=\overline{\gamma([T,\infty))}$ is a nonempty closed subset of $K$, the family is decreasing, and each $K_T$ is connected because it is the closure of the connected image of $[T,\infty)$. [given]

2.1 If $\bigcap_{T\ge0}K_T$ were empty, the open sets $K\setminus K_T$ would cover $K$; [F1] would give finitely many of them that cover. Since the $K_T$ decrease, one already covers, contradicting $K_T\ne\varnothing$. Thus $\omega(\gamma)$ is nonempty; it is closed in $K$, hence compact, and the nested connected-set argument makes it connected. [F1, step 1.1]

3.1 For fixed $s$ and any $T$, [F2] sends $\gamma([T,\infty))$ into $\gamma([T+s,\infty))$ after increasing $T$ if necessary. Continuity therefore sends $\omega(\gamma)$ into itself; applying the same argument to $-s$ gives equality. [F2, step 2.1]

4.1 Replacing $t$ by $-t$ gives the asserted nonempty compact connected invariant set $\alpha(\gamma)$ for a precompact negative tail. [step 1.1, step 2.1, step 3.1] ∎
