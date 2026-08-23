---
id: ex-beta-of-the-naturals-as-an-ultrafilter-algebra
kind: example
title: "$\\beta\\mathbb N$ as the free ultrafilter algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-the-ultrafilter-monad-is-a-monad, def-free-t-algebra, def-eilenberg-moore-category, def-natural-numbers, def-ultrafilter-extension-principle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Example

The free algebra on $\mathbb N$ for the ultrafilter monad has carrier $\beta\mathbb N$ and structure map

$$\mu_{\mathbb N}:\beta\beta\mathbb N\to\beta\mathbb N.$$

For $\mathbb W\in\beta\beta\mathbb N$ and $A\subseteq\mathbb N$,

$$A\in\mu_{\mathbb N}(\mathbb W)\quad\Longleftrightarrow\quad\{\mathcal U\in\beta\mathbb N:A\in\mathcal U\}\in\mathbb W.$$

## Facts & Assumptions

**Given:** The ultrafilter monad on $\mathbf{Set}$.

[L1] The free $T$-algebra on an object $A$ is $(TA,\mu_A)$ ([[def-free-t-algebra]]).

[L2] Ultrafilter multiplication is the displayed flattening membership formula ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]]).

[L3] The ultrafilter endofunctor with principal unit and flattening multiplication is a monad ([[thm-the-ultrafilter-monad-is-a-monad]]).

[L4] The ultrafilter extension principle says that every filter on a set is contained in an ultrafilter on that set ([[def-ultrafilter-extension-principle]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] and [L3] at $A=\mathbb N$ gives the free algebra $(\beta\mathbb N,\mu_{\mathbb N})$. Its unit includes every natural, including $0$ and $1$, as the corresponding principal ultrafilter. [L1, L3]

2.1 Specializing the multiplication formula [L2] to $X=\mathbb N$ gives the displayed membership equivalence. [step 1.1, L2]

2.2 The algebra unit equation $\mu_{\mathbb N}\eta_{\beta\mathbb N}=1$ and associativity equation $\mu_{\mathbb N}\beta(\mu_{\mathbb N})=\mu_{\mathbb N}\mu_{\beta\mathbb N}$ are exactly the monad unit and associativity laws in [L3]. [step 1.1, L3, algebra]

3.1 Assuming UL/BPI, apply [L4] to extend the cofinite filter on $\mathbb N$ to an ultrafilter. It is free: if it were principal at $n$, it would contain both $\{n\}$ and the cofinite set $\mathbb N\setminus\{n\}$. Thus $\beta\mathbb N$ contains both the principal ultrafilters from step 1.1 and free ultrafilters, but no free ultrafilter is claimed without UL/BPI. [step 2.1, L4] ∎
