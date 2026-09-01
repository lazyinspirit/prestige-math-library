---
id: lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p
kind: lemma
title: "For $1 \\le p < \\infty$, every $L^p(\\mu)$ class has a sigma-finite essential support"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-p-space-as-a-quotient-by-null-functions, rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative, thm-chebyshev-markov-inequality-for-the-integral, def-finite-sigma-finite-and-semifinite-measures]
proof_strategy: "Take a representative $u$ and use the level sets $\\{|u|\\ge1/n\\}$. Chebyshev-Markov makes each level set finite-measure, and their union contains every point where $u\\ne0$."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $1 \le p < \infty$. For
every element $[f] \in L^p(\mu)$ there is a measurable sigma-finite set
$S \subseteq X$ such that $f=0$ almost everywhere on $X \setminus S$.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$,
and a class $[f] \in L^p(\mu)$.

[L1] Elements of $L^p(\mu)$ are almost-everywhere classes of measurable
representatives
([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] Chebyshev-Markov gives
$$\mu(\{|u|^p\ge t\})\le t^{-1}\int |u|^p\,d\mu\qquad(t>0)$$
([[thm-chebyshev-markov-inequality-for-the-integral]]).

[L3] Sigma-finiteness means a countable union of finite-measure measurable sets
([[def-finite-sigma-finite-and-semifinite-measures]]).

## Proof

**Proof technique:** Take a representative $u$ and use the level sets
$\{|u|\ge1/n\}$. Chebyshev-Markov makes each level set finite-measure, and
their union contains every point where $u\ne0$.

1.1 Choose a measurable representative $u$ of $[f]$ and, for each $n \ge 1$, [L1, L2, given, choose, construct]
set
$$E_n:=\{|u|\ge1/n\}=\{|u|^p\ge n^{-p}\}.$$
Since $u \in \mathcal L^p(\mu)$, [L2] gives
$$\mu(E_n)\le n^p\int |u|^p\,d\mu<\infty.$$
So every $E_n$ has finite measure.

2.1 Put [L3, step 1.1]
$$S:=\bigcup_{n=1}^\infty E_n.$$
By step 1.1 and [L3], the set $S$ is sigma-finite.

3.1 If $x \notin S$, then $|u(x)|<1/n$ for every $n \ge 1$, hence $u(x)=0$. [step 2.1, algebra]
Therefore $u=0$ on $X \setminus S$, so the class $[f]$ vanishes almost
everywhere outside the sigma-finite set $S$. ∎
