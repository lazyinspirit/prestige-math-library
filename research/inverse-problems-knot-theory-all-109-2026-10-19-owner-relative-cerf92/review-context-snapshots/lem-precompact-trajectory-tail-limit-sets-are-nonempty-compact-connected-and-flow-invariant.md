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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[F2] The maximal flow has open domain in $\mathbb R\times M$, is continuous, and obeys $\Phi_s(\gamma(t))=\gamma(t+s)$ whenever defined ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 Each $K_T:=\overline{\gamma([T,\infty))}$ is a nonempty closed subset of $K$, the family is decreasing, and each $K_T$ is connected because it is the closure of the connected image of $[T,\infty)$. [given]

1.2 The flow domain is open and contains $\{0\}\times K$ by [F2]. For each $q\in K$ there are $\delta_q>0$ and a neighbourhood $V_q$ with $(-\delta_q,\delta_q)\times V_q$ in that domain. A finite subcover of $K$ gives one $\delta>0$ such that $\Phi_s(p)$ is defined for every $p\in K$ and $|s|<\delta$. [F1, F2, given]

2.1 If $\bigcap_{T\ge0}K_T$ were empty, the open sets $K\setminus K_T$ would cover $K$; [F1] would give finitely many of them that cover. Since the $K_T$ decrease, one already covers, contradicting $K_T\ne\varnothing$. Thus $\omega(\gamma)$ is nonempty; it is closed in $K$, hence compact, and the nested connected-set argument makes it connected. [F1, step 1.1]

3.1 Let $p\in\omega(\gamma)$ and $|s|<\delta$. Fix $T\ge0$ and a neighbourhood $W$ of $\Phi_s(p)$. Continuity gives a neighbourhood $V$ of $p$ with $\Phi_s(V)\subseteq W$. Since $p\in K_{T+|s|}$, some $t\ge T+|s|$ has $\gamma(t)\in V$; then $\gamma(t+s)=\Phi_s(\gamma(t))\in W$ and $t+s\ge T$. Thus $\Phi_s(p)\in K_T$ for every $T$, so $\Phi_s(\omega(\gamma))\subseteq\omega(\gamma)$. Divide any real $s$ into finitely many increments of size less than $\delta$ and apply this inclusion repeatedly; all intermediate points remain in $\omega(\gamma)\subseteq K$, where the next increment is defined. The flow law then defines $\Phi_s$ on all of $\omega(\gamma)$ and maps it into itself. Applying the argument to $-s$ gives equality. [F2, step 2.1, step 1.2]

4.1 Replacing $t$ by $-t$ and using the reverse-time flow gives the asserted nonempty compact connected invariant set $\alpha(\gamma)$ for a precompact negative tail. [step 1.1, step 2.1, step 1.2, step 3.1] ∎
