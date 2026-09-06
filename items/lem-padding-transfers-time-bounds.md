---
id: lem-padding-transfers-time-bounds
kind: lemma
title: "Padding transfers time bounds"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-language-padding, def-dtime-ntime-dspace-and-nspace]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Sebastiaan Terwijn, Complexity Theory, Exercise 3.5.2(a)"
      url: "https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf"
---

## Statement

Let $p:\mathbb N\to\mathbb N$ satisfy $p(n)>n$ for every $n$. Suppose the
canonical padding in [[def-language-padding]] is constructible on $x$ in
$O(p(|x|)^c)$ time, and validity of any string $y$ of length $N$ can be
decided, with its unpadded word recovered when valid, in $O((N+1)^c)$ time,
for a fixed integer $c\ge1$.

If $A$ has a deterministic decider taking $O(t(n))$ time, then
$\operatorname{pad}_p(A)$ has a decider taking $O((N+1)^c+t(n))$ on valid
inputs of decoded length $n$ and total length $N=p(n)$, and $O((N+1)^c)$
on malformed inputs. Its worst-case bound at length $N$ is
$O((N+1)^c+\tau_p(N))$, where
$$ \tau_p(N)=\max\bigl(\{t(n):p(n)=N\}\cup\{0\}\bigr). $$
Conversely, if $\operatorname{pad}_p(A)$ has a deterministic decider taking
$O(u(N))$ time, then $A$ has a decider taking
$O(p(n)^c+u(p(n)))$ time.

## Facts & Assumptions

**Given:** $p,c$ and the construction/validation procedures above; for the
forward implication an $O(t(n))$ decider for $A$, and for the converse an
$O(u(N))$ decider for $\operatorname{pad}_p(A)$.

## Proof

**Proof technique:** direct.

1.1 For the forward implication, validate $y$ and reject it if malformed. Otherwise recover $x$ and run the supplied $A$ decider. By the padding definition its answer is correct, and its cost is $O((N+1)^c+t(|x|))$. Since $p(n)>n$, the set of lengths $n$ with $p(n)=N$ is finite; maximizing gives the displayed worst-case bound, including lengths with no valid pad. [given, construct]

2.1 For the converse, on $x$ of length $n$ construct $x\#1^{p(n)-n-1}$ and run the independently supplied padded-language decider. The exponent is nonnegative, including at $n=0$, and this valid pad belongs to the padded language exactly when $x\in A$. Construction costs $O(p(n)^c)$ and the decider costs $O(u(p(n)))$, giving the claimed sum. [given, construct] ∎
