---
id: thm-square-criterion-in-qp-for-odd-p
kind: theorem
title: "Square criterion in Q_p for odd p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-zp-is-the-valuation-ring-of-qp, cor-p-adic-simple-root-lifting]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Hensel's Lemma, Examples 4.3 and 4.4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
pipeline_run: null
---

## Statement

Let $p$ be odd and let $x \in \mathbb Q_p^\times$. Write

$$x = p^n u$$

with $n \in \mathbb Z$ and $u \in \mathbb Z_p^\times$. Then $x$ is a square in
$\mathbb Q_p$ if and only if $n$ is even and the reduction of $u$ in
$\mathbb F_p^\times$ is a square.

## Facts & Assumptions

**Given:** An odd prime $p$ and $x = p^n u$ with $u \in \mathbb Z_p^\times$.

[L1] $\mathbb Z_p$ is the valuation ring of $\mathbb Q_p$
([[cor-zp-is-the-valuation-ring-of-qp]]).

[L2] Simple roots lift uniquely in $\mathbb Z_p$
([[cor-p-adic-simple-root-lifting]]).

## Proof

**Proof technique:** direct.

1.1 If $x = y^2$, write $y = p^m v$ with $v \in \mathbb Z_p^\times$. Then $x = p^{2m} v^2$, so $n = 2m$ is even and the reduction of $u$ is the square of the reduction of $v$ in $\mathbb F_p^\times$. [L1, given, algebra]

1.2 Conversely, assume $n = 2m$ and the residue class of $u$ is $c^2$ in $\mathbb F_p^\times$. Choose $a_0 \in \mathbb Z_p$ with $a_0 \equiv c \pmod p$. For $f(X) = X^2-u$, one has $f(a_0) \equiv 0 \pmod p$ and $$f'(a_0) = 2a_0 \not\equiv 0 \pmod p$$ because $p$ is odd and $c \ne 0$. By [L2], $f$ has a root $v \in \mathbb Z_p$ with $v^2=u$. Then $y := p^m v$ satisfies $y^2=x$. [L2, given, algebra]

2.1 Step 1.1 proves necessity and step 1.2 proves sufficiency. [step 1.1, step 1.2] ∎
