---
id: thm-root-reflections-preserve-the-root-set
kind: theorem
title: Root reflections preserve the root set
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-root-reflection-from-a-coroot, thm-root-string-property, cor-cartan-integers-are-integral, def-coroot-of-a-lie-algebra-root, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.41"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). For roots
$\alpha,\beta\in\Phi$, the reflected functional $s_\alpha(\beta)$
([[def-root-reflection-from-a-coroot]]) is again a root.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and roots $\alpha,\beta$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it licenses the root-string, coroot, and reflection facts in [L1] and [L2].

[L1] The set $\{k\in\mathbb Z:\mathfrak g_{\beta+k\alpha}\ne0\}$ of indices $k$ with $\beta+k\alpha$ a root or zero is a nonempty interval $\{-p,\dots,q\}$ of consecutive integers with $p-q=\beta(h_\alpha)$ ([[thm-root-string-property]]).

[L2] The reflection is $s_\alpha(\lambda)=\lambda-\lambda(h_\alpha)\alpha$, and $\beta(h_\alpha)\in\mathbb Z$ ([[def-root-reflection-from-a-coroot]], [[cor-cartan-integers-are-integral]], [[def-coroot-of-a-lie-algebra-root]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] applied to the pair $(\alpha,\beta)$ there are integers $p,q\ge0$ with $p-q=\beta(h_\alpha)$ and such that $\beta+k\alpha\in\Phi\cup\{0\}$ for every $k$ with $-p\le k\le q$. [A1, L1, L2]

2.1 By [L2] we may rewrite $s_\alpha(\beta)=\beta-\beta(h_\alpha)\alpha=\beta+(q-p)\alpha$, and the index $k=q-p$ satisfies $-p\le q-p\le q$ because $p,q\ge0$. Hence $s_\alpha(\beta)=\beta+k\alpha$ with $-p\le k\le q$, so $s_\alpha(\beta)\in\Phi\cup\{0\}$ by step 1.1. [L1, L2, step 1.1, algebra]

3.1 Finally $s_\alpha(\beta)\ne0$: if $\beta+(q-p)\alpha=0$ then $\beta$ is a scalar multiple of $\alpha$, so $s_\alpha(\beta)=0$ would mean $\beta=\beta(h_\alpha)\alpha$; but then $\beta$ and $\alpha$ are proportional roots and the reflection of a nonzero functional is nonzero because $s_\alpha$ is an involutive linear automorphism of $\mathfrak h^*$ ([[def-root-reflection-from-a-coroot]]) with $s_\alpha(\alpha)=-\alpha\ne0$. Hence $s_\alpha(\beta)\in\Phi$, as claimed. [step 2.1, algebra] ∎
