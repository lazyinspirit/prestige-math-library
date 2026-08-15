---
id: thm-second-supplement-to-quadratic-reciprocity
kind: theorem
title: "Second supplement: $(2/p)=(-1)^{(p^2-1)/8}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gauss-quadratic-residue-lemma, def-congruence-modulo-an-integer, thm-division-algorithm-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Sections D.I and D.IV"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Theorem 4.1.7"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$,

$$\left(\frac2p\right)=(-1)^{(p^2-1)/8}.$$

Equivalently, $(2/p)=1$ if and only if $p\equiv1$ or $7\pmod8$, while $(2/p)=-1$ if and only if $p\equiv3$ or $5\pmod8$.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] If $N(a,p)$ counts the least positive residues of $aj$ modulo $p$, for $1\le j\le(p-1)/2$, that exceed $p/2$, then $(a/p)=(-1)^{N(a,p)}$ ([[thm-gauss-quadratic-residue-lemma]]).

[L2] Division by a positive integer has a unique quotient and remainder in the standard range ([[thm-division-algorithm-in-z]]).

[L3] The congruence $a\equiv b\pmod n$ means that $n$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 Put $m=(p-1)/2$. For $1\le j\le m$, the least positive residue of $2j$ is $2j$ itself because $2j\le p-1$. It exceeds $p/2$ exactly when $j>p/4$, so [L1] counts precisely the integers with $p/4<j<p/2$. [L1, given, algebra]

2.1 By [L2], write $p=8q+r$ with $0\le r<8$. Since $p$ is odd, $r\in\{1,3,5,7\}$. In these cases the crossing indices of step 1.1 are respectively $2q+1,\ldots,4q$; $2q+1,\ldots,4q+1$; $2q+2,\ldots,4q+2$; and $2q+2,\ldots,4q+3$. Their counts are $2q$, $2q+1$, $2q+1$, and $2q+2$. [L2, L3, step 1.1, algebra]

3.1 For $r=1,3,5,7$, direct substitution gives $(p^2-1)/8=8q^2+2q$, $8q^2+6q+1$, $8q^2+10q+3$, and $8q^2+14q+6$, respectively. These have parity even, odd, odd, and even, exactly matching the four crossing counts in step 2.1. [L3, step 2.1, algebra]

4.1 Fact [L1] and step 3.1 give $(2/p)=(-1)^{(p^2-1)/8}$. The exhaustive remainder cases yield value $1$ exactly for residues $1,7$ modulo $8$, and value $-1$ exactly for residues $3,5$. [L1, step 1.1, step 3.1] ∎
