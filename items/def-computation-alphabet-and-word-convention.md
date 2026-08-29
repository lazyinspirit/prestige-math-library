---
id: def-computation-alphabet-and-word-convention
kind: definition
title: "Computation alphabets, words, the empty word, and $\\Sigma^*$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-finite-words-factor-avoidance-and-prefix-states
  - def-the-set-of-functions-from-one-set-to-another
  - def-indexed-union-and-intersection
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 1"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf"
---

## Definition

Let $\Sigma$ be a finite set, called an **alphabet**. For each natural number
$n$, a **word of length $n$ over $\Sigma$** is a function $w:n\to\Sigma$,
equivalently an element of $\Sigma^{n}$
([[def-the-set-of-functions-from-one-set-to-another]]). Writing
$w(i)=a_i$ for $i<n$, we display the word as $a_0a_1\cdots a_{n-1}$. This is
the same finite-word convention already used in
[[def-finite-words-factor-avoidance-and-prefix-states]].

The unique word of length $0$ is the **empty word** $\varepsilon$.

If $u:m\to\Sigma$ and $v:n\to\Sigma$ are words, their **concatenation** is the
word $uv:(m+n)\to\Sigma$ defined by
$$ (uv)(i):=\begin{cases}u(i),&i<m,\\v(i-m),&m\le i<m+n.\end{cases} $$

The set of **all finite words over $\Sigma$** is
$$ \Sigma^*:=\bigcup_{n\in\mathbb N}\Sigma^n, $$
an indexed union in the sense of [[def-indexed-union-and-intersection]].

## Remarks

- A word is an element of $\Sigma^*$, not a subset of $\Sigma$. The symbols of
  the alphabet are the values of the function; the word itself is the whole
  finite sequence.

- For the binary alphabet $\{0,1\}$ the notation $\{0,1\}^*$ means every finite
  binary word, including $\varepsilon$.
