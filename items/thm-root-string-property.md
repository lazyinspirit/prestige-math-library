---
id: thm-root-string-property
kind: theorem
title: The root-string property
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-sl-two-triple, def-coroot-of-a-lie-algebra-root, thm-finite-dimensional-representations-of-sl-two, prop-brackets-of-root-spaces, prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Proposition 2.29"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$, let $\alpha,\beta\in\mathfrak h^*$ with
$\alpha\in\Phi(\mathfrak g,\mathfrak h)$ and $\beta\in\Phi(\mathfrak g,\mathfrak h)\cup\{0\}$,
and put $\mathfrak g_\gamma=0$ whenever $\gamma$ is neither a root nor $0$.
Then the set
$$\{k\in\mathbb Z:\mathfrak g_{\beta+k\alpha}\ne0\}$$
is a nonempty interval of consecutive integers $\{-p,-p+1,\dots,q\}$ with
$p\ge0$, $q\ge0$, and
$$p-q=\beta(h_\alpha)\in\mathbb Z .$$

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h,\alpha,\beta$ as in the statement, with coroot $h_\alpha$ and root decomposition $\mathfrak g=\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$.

[L1] There are $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$ with $[e_\alpha,f_\alpha]=h_\alpha$, $[h_\alpha,e_\alpha]=2e_\alpha$, $[h_\alpha,f_\alpha]=-2f_\alpha$, so that $\mathbb Ce_\alpha\oplus\mathbb Cf_\alpha\oplus\mathbb Ch_\alpha$ is a copy of $\mathfrak{sl}_2$ ([[thm-root-sl-two-triple]], [[def-special-linear-lie-algebra-sl-two]]).

[L2] The bracket of root spaces satisfies $[\mathfrak g_\gamma,\mathfrak g_\delta]\subseteq\mathfrak g_{\gamma+\delta}$ and $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb CH_\alpha\subseteq\mathfrak h$ ([[prop-brackets-of-root-spaces]], [[prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]]).

[L3] Every finite-dimensional module over a copy of $\mathfrak{sl}_2$ is a direct sum of irreducibles whose $h$-weights are $m,m-2,\dots,-m$ for some integer $m\ge0$, each on a one-dimensional weight space ([[thm-finite-dimensional-representations-of-sl-two]]).

[L4] Root spaces are eigenspaces of $\operatorname{ad}_{\mathfrak h}$ and the sum $\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$ is direct ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L5] $\alpha(h_\alpha)=2$ ([[def-coroot-of-a-lie-algebra-root]]).

## Proof

**Proof technique:** direct.

1.1 The subspace $V=\bigoplus_{k\in\mathbb Z}\mathfrak g_{\beta+k\alpha}$ is finite-dimensional and is stable under the three operators of the triple [L1]: by [L2] $\operatorname{ad}_{e_\alpha}$ and $\operatorname{ad}_{f_\alpha}$ shift the index $k$ by one, and for $k=-1$ the image $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]\subseteq\mathbb CH_\alpha$ lies in $V$; $\operatorname{ad}_{h_\alpha}$ preserves each $\mathfrak g_{\beta+k\alpha}$. Thus $V$ is a finite-dimensional module over a copy of $\mathfrak{sl}_2$, and its $h_\alpha$-weight spaces are exactly the nonzero members of the family $\mathfrak g_{\beta+k\alpha}$, since those lie in distinct eigenspaces of $\operatorname{ad}_{h_\alpha}$. [L1, L2, L4, algebra]

2.1 Decompose $V$ into irreducibles as in [L3]. If $W$ is one irreducible summand, its $h_\alpha$-weights are $m,m-2,\dots,-m$ with $m\ge0$ integer, each with multiplicity one, so the indices $k$ with $W\cap\mathfrak g_{\beta+k\alpha}\ne0$ are those with $\beta(h_\alpha)+2k\in\{m,m-2,\dots,-m\}$; writing $q=\max k$ and $-p=\min k$ for $W$ we get $m=\beta(h_\alpha)+2q=-(\beta(h_\alpha)-2p)$, hence $p-q=\beta(h_\alpha)$, and the index set of $W$ is the interval $\{-p,\dots,q\}$. [L3, L5, step 1.1, algebra]

3.1 All intervals obtained in step 2.1 are concentric: each satisfies $p-q=\beta(h_\alpha)$, so $q-p$ is the same for all of them. The union of finitely many intervals with a common centre is the interval between the smallest and largest indices occurring, and the set $\{k:\mathfrak g_{\beta+k\alpha}\ne0\}$ is exactly the union of the index sets of the summands by step 1.1. Hence that set is $\{-p,\dots,q\}$ for the extreme indices, so it is a nonempty interval of consecutive integers, and its own $p-q$ equals the common value $\beta(h_\alpha)$ of step 2.1, which is an integer because $p$ and $q$ are integers. [step 2.1, algebra] ∎
