---
id: prop-weyl-jacobian-is-well-defined-and-weyl-invariant
kind: proposition
title: The Weyl Jacobian is independent and invariant
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-jacobian-on-a-maximal-torus, def-weyl-group-of-a-compact-connected-lie-group, def-roots-of-a-compact-connected-lie-group, def-positive-system-and-base-of-simple-roots, def-conjugation-and-the-adjoint-representation-of-a-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§15, the Jacobian depends only on the root system"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6 and VIII §1"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

The Weyl Jacobian $J(t)=\prod_{\alpha\in\Phi^+}|1-\alpha(t)^{-1}|^2$ of a compact
connected Lie group $(G,T)$ is independent of the choice of positive system
$\Phi^+\subseteq\Phi(G,T)$ and invariant under the action of the Weyl group
$W(G,T)$ on $T$.

## Facts & Assumptions

**Given:** Assume nothing beyond the standing hypotheses of the definition: $G$ is compact connected with maximal torus $T$, $\Phi(G,T)$ its root system, and $J$ the Weyl Jacobian for a positive system $\Phi^+$.

[L1] A positive system is a set of the form $\Phi^+(v)=\{\alpha\in\Phi:(\alpha,v)>0\}$ for a regular $v$; it satisfies $\Phi=\Phi^+\sqcup\Phi^-$ with $\Phi^-=-\Phi^+$, so for every root $\alpha$ exactly one of $\alpha,-\alpha$ is positive ([[def-positive-system-and-base-of-simple-roots]], [[def-roots-of-a-compact-connected-lie-group]]).

[L2] For a root $\alpha$ and $t\in T$ one has $|\alpha(t)|=1$, and the root $-\alpha$ is the character $t\mapsto\alpha(t)^{-1}$; hence $|1-\alpha(t)^{-1}|^2=(1-\alpha(t)^{-1})(1-\alpha(t))=2-\alpha(t)-\alpha(t)^{-1}$, a formula invariant under $\alpha\mapsto-\alpha$ ([[def-roots-of-a-compact-connected-lie-group]]).

[L3] The Weyl group $W(G,T)=N_G(T)/T$ acts on $T$ by $(gT)\cdot t=gtg^{-1}$; for $g\in N_G(T)$ the map $t\mapsto gtg^{-1}$ is a Lie-group automorphism of $T$, and $g$ acts on the root system by $\operatorname{Ad}(g)\mathfrak g_\alpha=\mathfrak g_{\alpha\circ C_{g^{-1}}}$, so $\alpha\mapsto\alpha\circ C_{g^{-1}}$ is a bijection of $\Phi$ carrying positive systems to positive systems ([[def-weyl-group-of-a-compact-connected-lie-group]], [[def-roots-of-a-compact-connected-lie-group]], [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 For every $t\in T$ and every root $\alpha$, step [L2] says the factor attached to $\alpha$ equals $2-\alpha(t)-\alpha(t)^{-1}$, which is exactly the factor attached to $-\alpha$, since $(-\alpha)(t)=\alpha(t)^{-1}$. [L1, L2]

2.1 Consequently $\prod_{\alpha\in\Phi^+}|1-\alpha(t)^{-1}|^2=\prod_{\{\alpha,-\alpha\}}\bigl(2-\alpha(t)-\alpha(t)^{-1}\bigr)$, the product over the unordered pairs of opposite roots, because each pair contributes one factor to the product over any positive system by [L1] and the two possible choices give the same factor by step 1.1; this product does not mention $\Phi^+$, so $J$ is independent of the positive system. [L1, step 1.1]

3.1 Let $g\in N_G(T)$ and $t\in T$. Then $J(gtg^{-1})=\prod_{\alpha\in\Phi^+}|1-(\alpha\circ C_g)(t)^{-1}|^2$, and by [L3] the set $\{\alpha\circ C_g:\alpha\in\Phi^+\}$ is a positive system of $\Phi$; step 2.1 applied to this positive system shows $J(gtg^{-1})=J(t)$. [L3, step 2.1]

4.1 Since $g$ was an arbitrary element of the normalizer, the invariance descends to $W(G,T)=N_G(T)/T$, giving $J(w\cdot t)=J(t)$ for every $w\in W(G,T)$. [L3, step 3.1] ∎
