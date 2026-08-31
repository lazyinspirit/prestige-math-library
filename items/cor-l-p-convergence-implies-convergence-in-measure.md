---
id: cor-l-p-convergence-implies-convergence-in-measure
kind: corollary
title: "Convergence in $L^p$ implies convergence in measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-chebyshev-markov-inequality-for-the-integral, prop-essential-supremum-is-attained-as-the-least-essential-bound]
proof_strategy: "For 1 <= p < infinity, apply Chebyshev-Markov to |f_n - f|^p. For p = infinity, the essential-supremum bound makes the bad set null for all large n."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Chapter 13 and Chapter 15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $1\le p\le\infty$, let $u_n,u\in L^p(\mu)$, and choose measurable
representatives $f_n,f$. If $\|u_n-u\|_p\to0$, then $f_n\to f$ in measure.

## Facts & Assumptions

**Given:** Representatives $f_n,f$ of classes $u_n,u\in L^p(\mu)$ with
$\|u_n-u\|_p\to0$.

[L1] Convergence in measure means the bad-set measures
$\mu(\{|f_n-f|>\varepsilon\})$ tend to $0$ for every $\varepsilon>0$
([[def-convergence-in-measure]]).

[L2] The class norm agrees with the representative norm
([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[L3] Chebyshev-Markov gives
$$\mu(\{h\ge t\})\le t^{-1}\int h\,d\mu$$
for nonnegative measurable $h$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

[L4] If $\|g\|_\infty<\infty$, then $|g|\le\|g\|_\infty$ almost everywhere
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** For $1 \le p < infinity$, apply Chebyshev-Markov to
$|f_n-f|^p$. For $p = infinity$, the essential-supremum bound makes the bad set
null for all large $n$.

1.1 Assume $1\le p<\infty$ and fix $\varepsilon>0$. Apply [L3] to [L2, L3, given, algebra]
$h:=|f_n-f|^p$ and $t:=\varepsilon^p$:
$$\mu(\{|f_n-f|>\varepsilon\})=\mu(\{|f_n-f|^p>\varepsilon^p\})\le\varepsilon^{-p}\int |f_n-f|^p\,d\mu=\varepsilon^{-p}\|u_n-u\|_p^p.$$
By [L2], the right-hand side tends to $0$.

1.2 Assume $p=\infty$ and fix $\varepsilon>0$. Because $\|u_n-u\|_\infty\to0$, [L2, L4, given]
for all large $n$ one has $\|u_n-u\|_\infty<\varepsilon$. Then [L4] gives
$|f_n-f|\le\varepsilon$ almost everywhere, so
$$\mu(\{|f_n-f|>\varepsilon\})=0.$$
Hence the bad-set measures are eventually $0$.

2.1 Step 1.1 proves the finite-$p$ case and step 1.2 proves the [step 1.1, step 1.2, L1]
$p=\infty$ case, so [L1] gives convergence in measure.
∎
