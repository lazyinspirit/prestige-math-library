---
id: ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane
kind: example
title: "The seven lines of the Fano plane meet pairwise in one point, and Fisher's bound is tight"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-uniform-fisher-inequality, thm-nonuniform-fisher-inequality, def-set-family-and-its-incidence-matrix, def-integers-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Example

The seven lines of the Fano plane may be written as the translates modulo $7$ of
$\{0,1,3\}$:

$$\{0,1,3\},\ \{1,2,4\},\ \{2,3,5\},\ \{3,4,6\},\ \{4,5,0\},\ \{5,6,1\},\ \{6,0,2\}.$$

## Facts & Assumptions

**Given:** the seven three-element sets above.

[L1] A $k$-uniform family on $[n]$ whose distinct members have constant intersection size $t<k$ has at most $n$ members ([[cor-uniform-fisher-inequality]]).

## Verification

**Proof technique:** direct.

1.1 Each displayed set has size $3$. [given]

2.1 Let $T=\{0,1,3\}$. Its nonzero differences are $\pm1,\pm2,\pm3$, that is, every nonzero residue modulo $7$ exactly once. Hence for distinct translates $T+a$ and $T+b$, an element $x$ lies in their intersection exactly when $x-a$ and $x-b$ both lie in $T$, equivalently when $b-a$ is a nonzero difference of two elements of $T$; that determines $x$ uniquely. So any two distinct displayed sets meet in exactly one point. [step 1.1]

3.1 So the family has $m=7$ subsets on $n=7$ points with constant pairwise intersection size $1$, and [L1] gives $7\le7$. The bound is therefore tight. [L1, step 2.1] ∎
