---
id: ex-pumping-lemma-for-context-free-languages
kind: example
title: "Using the CFL pumping lemma to rule out $\\{a^{n}b^{n}c^{n}:n\\ge 0\\}$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-pumping-lemma-for-context-free-languages]
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
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Example

Consider the language
$$ L=\{a^n b^n c^n:n\ge 0\}. $$

## Facts & Assumptions

**Given:** The language $L=\{a^n b^n c^n:n\ge 0\}$.

[L1] By [[thm-pumping-lemma-for-context-free-languages]], every context-free language has a pumping length $p$ with the usual decomposition property.

## Verification

**Proof technique:** direct.

1.1 Assume for contradiction that $L$ is context-free, and let $p$ be the pumping length from [L1]. Apply the lemma to the word $a^p b^p c^p$ to obtain a decomposition $uvwxy$ with $|vx|\ge 1$ and $|vwx|\le p$. [L1, given]

2.1 Because $|vwx|\le p$, the substring $vwx$ lies inside one block or crosses only one of the two block boundaries. Pumping $v$ and $x$ therefore changes at most two of the three symbol counts, so for $i=0$ or $i=2$ the pumped word $uv^i wx^i y$ cannot still have equal numbers of $a$'s, $b$'s, and $c$'s. This contradicts [L1]. [L1, step 1.1]

3.1 Therefore $L$ is not context-free. [step 2.1] ∎
