---
id: cor-p-adic-simple-root-lifting
kind: corollary
title: "Simple roots lift uniquely in Z_p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-zp-is-the-valuation-ring-of-qp, thm-p-adic-completion-is-a-field]
proof_strategy: constructive
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Hensel's Lemma, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 8, Theorem 8.8"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
pipeline_run: null
---

## Statement

Let $f \in \mathbb Z_p[X]$ and $a_0 \in \mathbb Z_p$. If

$$f(a_0) \equiv 0 \pmod p,\qquad f'(a_0) \not\equiv 0 \pmod p,$$

then there is a unique $a \in \mathbb Z_p$ such that $a \equiv a_0 \pmod p$ and
$f(a)=0$.

## Facts & Assumptions

**Given:** A polynomial $f \in \mathbb Z_p[X]$ and $a_0 \in \mathbb Z_p$ with
$f(a_0) \in p\mathbb Z_p$ and $f'(a_0) \notin p\mathbb Z_p$.

[L1] $\mathbb Z_p$ is the valuation ring in $\mathbb Q_p$
([[cor-zp-is-the-valuation-ring-of-qp]]).

[L2] $\mathbb Q_p$ is complete
([[thm-p-adic-completion-is-a-field]]).

## Proof

**Proof technique:** constructive.

1.1 Construct $a_n \in \mathbb Z_p$ inductively so that $$a_n \equiv a_0 \pmod p,\qquad f(a_n) \in p^{n+1}\mathbb Z_p.$$ Given $a_n$, write $a_{n+1} = a_n + t_n p^{n+1}$ with $t_n \in \{0,\dots,p-1\}$. Taylor expansion modulo $p^{n+2}$ gives $$f(a_{n+1}) \equiv f(a_n) + t_n p^{n+1} f'(a_n) \pmod{p^{n+2}}.$$ Since $f'(a_n) \equiv f'(a_0) \not\equiv 0 \pmod p$, there is a unique choice of $t_n$ modulo $p$ making the right-hand side $0$ modulo $p^{n+2}$. [L1, given, induction, construct]

2.1 The differences satisfy $a_{n+1}-a_n \in p^{n+1}\mathbb Z_p$, so $(a_n)$ is a $p$-adic Cauchy sequence. By [L2] it converges to some $a \in \mathbb Z_p$, and continuity of polynomial evaluation gives $f(a)=0$. Also $a-a_0 \in p\mathbb Z_p$, so $a \equiv a_0 \pmod p$. [L2, step 1.1, algebra]

3.1 If $b$ is another root with $b \equiv a_0 \pmod p$, then $0 = f(a)-f(b) = (a-b)g(a,b)$ for the usual divided-difference polynomial $g$. Modulo $p$, one has $g(a,b) \equiv f'(a_0) \not\equiv 0$, so $g(a,b)$ is a unit of $\mathbb Z_p$ by [L1]. Therefore $a-b=0$. [L1, step 2.1, algebra, discharge-construct] ∎
