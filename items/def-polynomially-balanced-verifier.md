---
id: def-polynomially-balanced-verifier
kind: definition
title: "Polynomial-time verifiers with polynomially bounded certificates"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-p
  - def-worst-case-time-and-space-complexity
verification:
  audited: 2026-09-02
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
---

## Definition

Fix the binary pairing
$$ \langle x,u\rangle:=1^{|x|}0xu $$
for binary words $x,u\in\{0,1\}^*$. Let $L\subseteq\{0,1\}^*$ be a language.
A **polynomial-time verifier with polynomially bounded certificates** for $L$
consists of:

- a binary relation $R\subseteq\{0,1\}^*\times\{0,1\}^*$ whose paired language
  $$ L_R:=\{\langle x,u\rangle:(x,u)\in R\} $$
  belongs to $P$, and
- a polynomial $p$ such that
  $$ x\in L\iff \exists u\in\{0,1\}^* \text{ with } |u|\le p(|x|) \text{ and } (x,u)\in R. $$

Any such $u$ is called a **certificate** or **witness** for $x$.

## Remarks

- The verifier checks a paired instance $(x,u)$ in polynomial time, while the
  polynomial $p$ bounds how long a successful certificate ever needs to be.

- Allowing the empty certificate is legitimate; that corresponds to the case
  $u=\varepsilon$.
