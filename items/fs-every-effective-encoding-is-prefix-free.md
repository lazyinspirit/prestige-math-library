---
id: fs-every-effective-encoding-is-prefix-free
kind: false-statement
title: "FALSE: every effective encoding is prefix-free"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-effective-binary-encoding-and-decoder]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/78c0346bd81b6abcb2b1dde899adfc88_MIT18_404f20_lec7.pdf"
---

## Statement

**False claim:** every effective binary encoding is prefix-free.

## Facts & Assumptions

**Given:** The encoding $e:\{0,1\}^*\to\{0,1\}^*$ defined by $e(w)=1w$.

[A1] The false claim: every effective binary encoding is prefix-free.

[L1] An effective binary encoding is an injective map into $\{0,1\}^*$ with a total decoder and a fixed malformed-code output, and prefix-free means that no codeword is a proper prefix of another, by [[def-effective-binary-encoding-and-decoder]].

## Refutation

**Proof technique:** direct.

1.1 The map $e(w)=1w$ is injective: if $1u=1v$, deleting the common first bit gives $u=v$. [given, algebra]

1.2 Define a total decoder $d:\{0,1\}^*\to\{0,1\}^*\cup\{\mathtt{mal}\}$ by setting $d(1w)=w$ for every binary word $w$ and $d(x)=\mathtt{mal}$ for every binary word $x$ not beginning with $1$ (including the empty word). Then $d(e(w))=d(1w)=w$ for every $w$, so $e$ is effective by [L1]. [L1, construct]

1.3 The codeword $e(\varepsilon)=1$ is a proper prefix of $e(0)=10$. So $e$ is not prefix-free. [given, L1]

2.1 Step 1.2 shows that $e$ is an effective encoding, while step 1.3 shows that it is not prefix-free. Therefore [A1] is false. [A1, step 1.2, step 1.3] ∎
