---
id: thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra
kind: theorem
title: Triangular decomposition
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, prop-brackets-of-root-spaces, def-derived-series-and-solvable-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra, def-lie-subalgebra-ideal-and-center, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1, (5.8) and Proposition 5.11"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a chosen
positive system, and let $\mathfrak n^\pm$ and $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$
be as in
[[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]].
Then:

(i) $\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$ is a direct
sum of vector spaces;

(ii) $\mathfrak n^+$ and $\mathfrak n^-$ are nilpotent Lie subalgebras and
$\mathfrak b$ is a solvable Lie subalgebra in which $\mathfrak n^+$ is an
ideal, so that $\mathfrak b$ is the semidirect sum $\mathfrak h\ltimes\mathfrak n^+$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$, a positive system $\Phi^+$ with negative roots $\Phi^-=-\Phi^+$, and the subspaces $\mathfrak n^\pm$, $\mathfrak b$ of [[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]].

[A1] The Axiom of Choice is assumed; it enters through the root-space theory supplying [L1] ([[def-axiom-of-choice]]).

[L1] $\Phi$ is finite and $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum over distinct eigenspaces ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]); also $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ with $\mathfrak g_\gamma=0$ when $\gamma\notin\Phi\cup\{0\}$ ([[prop-brackets-of-root-spaces]]).

[L2] $\mathfrak n^\pm$ are nilpotent Lie subalgebras, $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ is a Lie subalgebra containing $\mathfrak n^+$ as the sum of the root spaces $\mathfrak g_\alpha$ with $\alpha\in\Phi^+$, $[\mathfrak h,\mathfrak g_\alpha]\subseteq\mathfrak g_\alpha$, and $\Phi=\Phi^+\sqcup\Phi^-$ ([[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]]).

[L3] A Lie algebra is nilpotent when its lower central series reaches $0$, and solvable when its derived series reaches $0$ ([[def-lower-central-series-and-nilpotent-lie-algebra]], [[def-derived-series-and-solvable-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the sum $\mathfrak h+\sum_{\alpha\in\Phi}\mathfrak g_\alpha$ is direct over the distinct eigenspaces, and $\Phi=\Phi^+\sqcup\Phi^-$ by [L2]; since $\mathfrak n^\pm=\sum_{\pm\alpha\in\Phi^+}\mathfrak g_\alpha$, the subspace $\mathfrak n^-+\mathfrak h+\mathfrak n^+$ is the direct sum of the spaces $\mathfrak g_\alpha$ ($\alpha\in\Phi$) and $\mathfrak g_0=\mathfrak h$, hence equals $\mathfrak g$ directly. This proves (i). [A1, L1, L2]

1.2 The subalgebras $\mathfrak n^\pm$ are nilpotent by [L2]; this is the nilpotent part of (ii). [L2, L3]

1.3 $\mathfrak b$ is a subalgebra by [L2], and its derived algebra satisfies $[\mathfrak b,\mathfrak b]\subseteq[\mathfrak h,\mathfrak h]+[\mathfrak h,\mathfrak n^+]+[\mathfrak n^+,\mathfrak n^+]\subseteq\mathfrak n^+$, because $[\mathfrak h,\mathfrak h]=0$, $[\mathfrak h,\mathfrak g_\alpha]\subseteq\mathfrak g_\alpha$ for $\alpha\in\Phi^+$ by [L2], and $[\mathfrak n^+,\mathfrak n^+]\subseteq\mathfrak n^+$ by [L2]. [A1, L2]

2.1 By step 1.3 the derived series of $\mathfrak b$ satisfies $\mathfrak b^{(0)}=\mathfrak b$, $\mathfrak b^{(1)}\subseteq\mathfrak n^+$, and inductively $\mathfrak b^{(k)}\subseteq\gamma_k(\mathfrak n^+)$ for every $k\ge1$, because $\mathfrak b^{(k+1)}=[\mathfrak b^{(k)},\mathfrak b^{(k)}]\subseteq[\mathfrak n^+,\gamma_k(\mathfrak n^+)]=\gamma_{k+1}(\mathfrak n^+)$ by monotonicity of the bracket and the definition of the lower central series ([[def-lower-central-series-and-nilpotent-lie-algebra]]); since $\mathfrak n^+$ is nilpotent, $\gamma_k(\mathfrak n^+)=0$ for some $k$ by [L3], hence $\mathfrak b^{(k)}=0$ and $\mathfrak b$ is solvable. [L2, L3, step 1.3]

3.1 Finally $\mathfrak n^+$ is an ideal of $\mathfrak b$, since it is a subspace of $\mathfrak b$ with $[\mathfrak b,\mathfrak n^+]\subseteq[\mathfrak h,\mathfrak n^+]+[\mathfrak n^+,\mathfrak n^+]\subseteq\mathfrak n^+$ by step 1.3 and [[def-lie-subalgebra-ideal-and-center]]; because moreover $\mathfrak b=\mathfrak h+\mathfrak n^+$ with $\mathfrak h\cap\mathfrak n^+=0$ by step 1.1, the algebra $\mathfrak b$ is the semidirect sum of $\mathfrak h$ and the ideal $\mathfrak n^+$, which together with steps 1.1, 1.2 and 2.1 proves both assertions. ∎
