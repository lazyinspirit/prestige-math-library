---
id: thm-partial-recursive-iff-turing-computable
kind: theorem
title: "A partial function is partial recursive if and only if it is Turing computable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-partial-function-computed-by-a-machine, def-mu-minimization-and-partial-recursive-function, def-kleene-t-predicate-and-output-function, thm-kleene-normal-form]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard Zach, Computability Theory"
      url: "https://builds.openlogicproject.org/content/computability/computability-theory/computability-theory.pdf"
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
---

## Statement

Let $f:\mathbb N\rightharpoonup\mathbb N$ be a partial function, with inputs and
outputs encoded by their canonical binary numerals. Then $f$ is partial
recursive if and only if $f$ is Turing computable under those encodings.

## Facts & Assumptions

**Given:** A partial function $f:\mathbb N\rightharpoonup\mathbb N$.

[L1] A machine computes a partial function when it halts with the required encoded output on the domain and diverges off the domain, by [[def-partial-function-computed-by-a-machine]].

[L2] Partial recursive functions are closed under composition and unbounded minimization and contain the primitive recursive functions, by [[def-mu-minimization-and-partial-recursive-function]].

[L3] Every partial recursive function has a normal-form expression
$f(x)=U(\mu s\,\tau_T(e,x,s))$ for some code $e$, by
[[thm-kleene-normal-form]].

[L5] The predicate $T$, its primitive-recursive numeric zero-test $\tau_T$,
and the function $U$ encode halting computation histories and their outputs
arithmetically, by [[def-kleene-t-predicate-and-output-function]].

## Proof

**Proof technique:** direct.

1.1 Assume first that $f$ is partial recursive. By [L3], choose $e$ with $f(x)=U(\mu s\,\tau_T(e,x,s))$ whenever $f(x)$ is defined. Every primitive-recursive function is Turing computable: the initial functions have immediate machines, machine composition realizes composition, and a finite loop realizes primitive recursion. Hence machines compute the primitive-recursive functions $\tau_T$ and $U$ from [L5]. A machine can therefore search successively through $s=0,1,2,\dots$, evaluate $\tau_T(e,x,s)$, and at the first zero compute $U(s)$ and halt with its binary numeral. If there is no successful $s$, the search continues forever. By [L1], this machine computes $f$. [L1, L3, L5, given, construct]

1.2 Conversely, assume that $f$ is Turing computable. Then by [L1] there is a machine code $e$ whose halting computations on input $x$ produce exactly the values of $f(x)$. By [L5], the characteristic function of the relation $T(e,x,s)$ is primitive recursive, so the total search function $g_e(x,s)$ that returns $0$ exactly when $T(e,x,s)$ holds and $1$ otherwise is primitive recursive. By [L2], the partial search $m_e(x):=\mu s\,g_e(x,s)$ is therefore partial recursive, and composing with the primitive recursive output map $U$ shows that $x\mapsto U(m_e(x))$ is partial recursive as well. Its domain and values agree with $f$ because $m_e(x)$ exists exactly when the machine coded by $e$ has a halting history on $x$, and then [L5] says that $U(m_e(x))$ is exactly the machine's output. Hence $f$ is partial recursive. [L1, L2, L5, given, construct]

2.1 Steps 1.1 and 1.2 prove both implications, so $f$ is partial recursive if and only if it is Turing computable. [step 1.1, step 1.2] ∎
