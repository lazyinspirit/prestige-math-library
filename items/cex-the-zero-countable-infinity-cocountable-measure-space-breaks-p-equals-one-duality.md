---
id: cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality
kind: counterexample
title: "The zero-countable / infinity-cocountable measure space breaks the $p=1$ endpoint of duality"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-countable-choice, def-sigma-algebra, def-measure, thm-countable-union-of-countable, lem-subset-of-countable, def-l-p-space-as-a-quotient-by-null-functions, def-l-infinity-on-a-measure-space, def-l-one-of-a-measure, thm-chebyshev-markov-inequality-for-the-integral]
proof_strategy: "Build the countable-cocountable measure directly, then use Chebyshev-Markov to force every $L^1$ representative to vanish off an at most countable set while $L^\\infty$ still contains distinct bounded representatives."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., paragraph after Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, paragraph after Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

For $p=1$, every bounded linear functional on $L^1(\mu)$ is represented by a
unique element of $L^\infty(\mu)$ on every measure space.

## Facts & Assumptions

**Given:** Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $X$ be an uncountable set, let $$\mathcal A:=\{E\subseteq X:E\text{ is at most countable or }X\setminus E\text{ is at most countable}\},$$ and define $$\mu(E):=\begin{cases}0,&E\text{ is at most countable},\\+\infty,&X\setminus E\text{ is at most countable}.\end{cases}$$

[L1] Under countable choice, a countable union of at most countable sets is at most countable, and every subset of an at most countable set is at most countable ([[thm-countable-union-of-countable]], [[lem-subset-of-countable]]).

[L2] A sigma-algebra is an algebra of subsets closed under countable unions, and a measure has value $0$ on $\varnothing$ and is countably additive on pairwise disjoint measurable sequences ([[def-sigma-algebra]], [[def-measure]]).

[L3] The space $L^1(\mu)$ is built from integrable representatives, $L^\infty(\mu)$ is the space of essentially bounded measurable functions, and $L^p$ passes to almost-everywhere equivalence classes ([[def-l-one-of-a-measure]], [[def-l-infinity-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[L4] Chebyshev-Markov gives $$\mu(\{|f|\ge t\})\le t^{-1}\int |f|\,d\mu\qquad(t>0)$$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

## Counterexample

**Proof technique:** Build the countable-cocountable measure directly, then use Chebyshev-Markov to force every $L^1$ representative to vanish off an at most countable set while $L^\infty$ still contains distinct bounded representatives.

1.1 The family $\mathcal A$ contains $\varnothing$ and is closed under complements by definition. Let $(E_n)$ lie in $\mathcal A$. If every $E_n$ is at most countable, then $\bigcup_{n=1}^\infty E_n$ is at most countable by [L1]. If some $E_j$ is cocountable, then $$X\setminus\bigcup_{n=1}^\infty E_n\subseteq X\setminus E_j,$$ so [L1] makes the complement at most countable. Thus $\mathcal A$ is a sigma-algebra on $X$. [L1, L2, given, construct]

2.1 The function $\mu$ satisfies $\mu(\varnothing)=0$. Let $(E_n)$ be pairwise disjoint in $\mathcal A$. If two members $E_i,E_j$ were cocountable, then $$X=(X\setminus E_i)\cup(X\setminus E_j)$$ would be at most countable by [L1], contradicting that $X$ is uncountable. So at most one $E_n$ is cocountable. If every $E_n$ is at most countable, then $\bigcup_{n=1}^\infty E_n$ is at most countable by [L1], and both sides of countable additivity are $0$. If some $E_j$ is cocountable, then $$X\setminus\bigcup_{n=1}^\infty E_n\subseteq X\setminus E_j$$ is at most countable by [L1], so the union is cocountable and both sides of countable additivity are $+\infty$. Hence $\mu$ is a measure on $(X,\mathcal A)$. [L1, L2, step 1.1, given, construct]

3.1 By definition of $\mu$, a measurable set has finite $\mu$-measure exactly when it is at most countable, and then its $\mu$-measure is $0$. In particular, $X$ is measurable and $\mu(X)=+\infty$ because $X\setminus X=\varnothing$ is at most countable. [step 2.1, given, algebra]

4.1 Let $[f] \in L^1(\mu)$ and choose an integrable representative $u$. For each $n \ge 1$, set $E_n:=\{|u|\ge1/n\}$. By [L4], $$\mu(E_n)\le n\int |u|\,d\mu<\infty.$$ Step 3.1 therefore gives $\mu(E_n)=0$, so each $E_n$ is at most countable. By [L1], $$\{u\ne0\}=\bigcup_{n=1}^\infty E_n$$ is at most countable and hence null. Thus every element of $L^1(\mu)$ is the zero class. [L1, L3, L4, step 3.1, given, choose, construct]

4.2 The constant functions $0$ and $1$ are both in $L^\infty(\mu)$, but they do not define the same $L^\infty$ class because $$\{1\ne0\}=X,$$ and step 3.1 gives that $X$ is not null. Thus $L^\infty(\mu)$ contains at least two distinct classes. [L3, step 3.1, algebra]

5.1 Since $L^1(\mu)$ has only the zero class by step 4.1, its only bounded linear functional is the zero functional. Both $0$ and $1$ represent that zero functional, because $$\int f\cdot 0\,d\mu=0=\int f\cdot1\,d\mu$$ for the unique class $f=0$ in $L^1(\mu)$. By step 4.2, those two $L^\infty$ classes are distinct, so uniqueness fails. Therefore the $p=1$ representation theorem is false on this measure space. [step 4.1, step 4.2, algebra] ∎
