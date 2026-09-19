---
id: thm-root-string-property
kind: theorem
title: The root-string property
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-sl-two-triple, def-coroot-of-a-lie-algebra-root, thm-finite-dimensional-representations-of-sl-two, prop-brackets-of-root-spaces, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-special-linear-lie-algebra-sl-two]
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

[L2] With $\mathfrak g_0=\mathfrak h$ and $\mathfrak g_\lambda=0$ when $\lambda$ is neither a root nor zero, the bracket of weight spaces satisfies $[\mathfrak g_\gamma,\mathfrak g_\delta]\subseteq\mathfrak g_{\gamma+\delta}$ for all functionals $\gamma,\delta$ ([[prop-brackets-of-root-spaces]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L3] Every finite-dimensional module over a copy of $\mathfrak{sl}_2$ is a direct sum of irreducibles whose $h$-weights are $m,m-2,\dots,-m$ for some integer $m\ge0$, each on a one-dimensional weight space ([[thm-finite-dimensional-representations-of-sl-two]]).

[L4] Root spaces are eigenspaces of $\operatorname{ad}_{\mathfrak h}$ and the sum $\mathfrak h\oplus\bigoplus_{\gamma\in\Phi}\mathfrak g_\gamma$ is direct ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]).

[L5] $\alpha(h_\alpha)=2$ ([[def-coroot-of-a-lie-algebra-root]]).

## Proof

**Proof technique:** direct.

1.1 The subspace $V=\bigoplus_{k\in\mathbb Z}\mathfrak g_{\beta+k\alpha}$ is finite-dimensional. By [L2], $\operatorname{ad}_{e_\alpha}$ maps its $k$-th summand into its $(k+1)$-st summand and $\operatorname{ad}_{f_\alpha}$ maps it into its $(k-1)$-st summand, including any case in which the target is $\mathfrak g_0=\mathfrak h$; $\operatorname{ad}_{h_\alpha}$ preserves every summand. Thus $V$ is a finite-dimensional module over the copy of $\mathfrak{sl}_2$ in [L1]. On $\mathfrak g_{\beta+k\alpha}$, $h_\alpha$ has eigenvalue $\beta(h_\alpha)+2k$ by [L5], and these eigenvalues are distinct as $k$ varies. Hence the nonzero summands $\mathfrak g_{\beta+k\alpha}$ are exactly the $h_\alpha$-weight spaces of $V$. [L1, L2, L4, L5, algebra]

2.1 Decompose $V$ into irreducibles as in [L3]. If $W$ is one irreducible summand, its $h_\alpha$-weights are $m,m-2,\dots,-m$ with $m\ge0$ integer. Thus the indices $k$ for which $W\cap\mathfrak g_{\beta+k\alpha}\ne0$ form an interval of integers $\{a_W,a_W+1,\dots,b_W\}$ determined by $\beta(h_\alpha)+2a_W=-m$ and $\beta(h_\alpha)+2b_W=m$. Consequently $a_W+b_W=-\beta(h_\alpha)$ for every irreducible summand $W$. [L3, step 1.1, algebra]

3.1 The intervals in step 2.1 all have centre $-\beta(h_\alpha)/2$, so they are nested and their finite union is the interval $\{a,a+1,\dots,b\}$ with $a+b=-\beta(h_\alpha)$. This union is exactly $\{k:\mathfrak g_{\beta+k\alpha}\ne0\}$ by step 1.1. It contains $0$, because $\mathfrak g_\beta\ne0$ for $\beta\in\Phi\cup\{0\}$ and $\mathfrak g_0=\mathfrak h\ne0$; hence $a\le0\le b$. Put $p=-a\ge0$ and $q=b\ge0$. Then the index set is $\{-p,\dots,q\}$ and $p-q=-(a+b)=\beta(h_\alpha)\in\mathbb Z$. [L4, step 1.1, step 2.1, algebra] ∎
