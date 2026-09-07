---
id: def-set-signature-and-finite-syntax-strings
kind: definition
title: "Set signatures and finite syntax strings"
status: draft
origin: pipeline
deps: ["def-natural-numbers"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1B.1\u20131B.2, pp.4\u20135."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Definition

A set signature $L=(C,F,P,a)$ has pairwise disjoint sets of constants, function symbols and relation symbols, with $a:F\cup P\to\omega\setminus\{0\}$. Its alphabet $\Sigma_L$ is a tagged disjoint union of these sets, variables $v_i$ for $i\in\omega$, constructor tags $\mathsf{var},\mathsf{const},\mathsf{fun},\mathsf{rel},\mathsf{eq},\mathsf{neg},\mathsf{and},\mathsf{exists}$, and punctuation $\mathtt{(},\mathtt{)},\mathtt{,}$. Equality is a logical symbol.

A word is a function $w:n\to\Sigma_L$ for a natural number $n$, its length. The set $W_L$ of words is obtained by Separation inside $\mathcal P(\omega\times\Sigma_L)$. The empty word has domain $0$. Concatenation of $u:m\to\Sigma_L$ and $w:n\to\Sigma_L$ is the function on $m+n$ whose value at $i<m$ is $u(i)$ and whose value at $m+j$ is $w(j)$ for $j<n$. Signatures may be empty or uncountable; finite words here are set codes, not necessarily natural-number codes.

Conventions and prerequisites: [[def-natural-numbers]].
