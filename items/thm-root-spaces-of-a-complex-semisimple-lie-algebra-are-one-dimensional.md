---
id: thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional
kind: theorem
title: Root spaces of a complex semisimple Lie algebra are one-dimensional
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-sl-two-triple, def-coroot-of-a-lie-algebra-root, prop-brackets-of-root-spaces, prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, thm-finite-dimensional-representations-of-sl-two, thm-root-string-property, thm-trace-of-ab-equals-trace-of-ba, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.21"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\alpha$ be a root of a finite-dimensional complex semisimple Lie algebra
$\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Then
$\dim\mathfrak g_\alpha=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and a root $\alpha$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it licenses the root triple, coroot, opposite-bracket, and root-decomposition facts in [L1]--[L3].

[L1] There is a triple $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$, $h_\alpha=[e_\alpha,f_\alpha]$ with $[h_\alpha,e_\alpha]=2e_\alpha$ and $[h_\alpha,f_\alpha]=-2f_\alpha$ ([[thm-root-sl-two-triple]], [[def-coroot-of-a-lie-algebra-root]]).

[L2] $[\mathfrak g_\gamma,\mathfrak g_\delta]\subseteq\mathfrak g_{\gamma+\delta}$ with $\mathfrak g_\eta=0$ for $\eta$ neither a root nor $0$, and $\mathfrak g_0=\mathfrak h$ ([[prop-brackets-of-root-spaces]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L3] $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb CH_\alpha\subseteq\mathfrak h$ for the corresponding dual vector ([[prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]]).

[L4] A trace of a commutator of finite-dimensional endomorphisms vanishes, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

**Proof technique:** direct.

1.1 Put $W=\mathbb Ce_\alpha\oplus\mathbb Ch_\alpha\oplus\bigoplus_{k<0}\mathfrak g_{k\alpha}$, a finite-dimensional subspace of $\mathfrak g$ containing $\mathfrak g_{-\alpha}$. It is stable under $\operatorname{ad}_{h_\alpha}$ by [L2] together with $[h_\alpha,e_\alpha]=2e_\alpha$ and $[h_\alpha,h_\alpha]=0$ from [L1]; it is stable under $\operatorname{ad}_{e_\alpha}$ because $[e_\alpha,\mathfrak g_{k\alpha}]\subseteq\mathfrak g_{(k+1)\alpha}$ with $(k+1)\alpha$ either $0$ or a negative multiple, $[e_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathbb CH_\alpha$ by [L3], and $[e_\alpha,h_\alpha]=-2e_\alpha$; and it is stable under $\operatorname{ad}_{f_\alpha}$ because $[f_\alpha,\mathfrak g_{k\alpha}]\subseteq\mathfrak g_{(k-1)\alpha}$ and $[f_\alpha,h_\alpha]=2f_\alpha$, $[f_\alpha,e_\alpha]=-h_\alpha$. [A1, L1, L2, L3, algebra]

2.1 Since $h_\alpha=[e_\alpha,f_\alpha]$, the restriction of $\operatorname{ad}_{h_\alpha}$ to the invariant subspace $W$ is a commutator of the restrictions of $\operatorname{ad}_{e_\alpha}$ and $\operatorname{ad}_{f_\alpha}$, so its trace vanishes by [L4]. [L1, L4, step 1.1, algebra]

3.1 On the other hand $\operatorname{ad}_{h_\alpha}$ acts on $\mathbb Ce_\alpha$ by the scalar $2$, on $\mathbb Ch_\alpha$ by $0$, and on the eigenspace $\mathfrak g_{k\alpha}$, $k<0$, by the scalar $k\alpha(h_\alpha)=2k$; hence $0=\operatorname{tr}(\operatorname{ad}_{h_\alpha}|_W)=2-2\sum_{j\ge1}j\dim\mathfrak g_{-j\alpha}$, that is, $\sum_{j\ge1}j\dim\mathfrak g_{-j\alpha}=1$. As the summands are nonnegative integers, $\dim\mathfrak g_{-\alpha}=1$ and $\dim\mathfrak g_{-j\alpha}=0$ for $j\ge2$. [L1, L2, step 2.1, algebra]

4.1 The argument is symmetric in $\alpha$ and $-\alpha$: the triple $(f_\alpha,e_\alpha,-h_\alpha)$ satisfies the same relations with $-\alpha$ in place of $\alpha$ by [L1], and all the facts [L2]–[L4] are unchanged. Applying step 3.1 with $-\alpha$ therefore gives $\dim\mathfrak g_\alpha=1$ and $\dim\mathfrak g_{j\alpha}=0$ for $j\ge2$, which proves the statement. [L1, L2, L3, L4, step 3.1, algebra] ∎
