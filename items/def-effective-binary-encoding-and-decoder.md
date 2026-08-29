---
id: def-effective-binary-encoding-and-decoder
kind: definition
title: "Effective binary encodings and total decoders"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-function
  - def-injection-surjection-bijection
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
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 7"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/78c0346bd81b6abcb2b1dde899adfc88_MIT18_404f20_lec7.pdf"
---

## Definition

Let $\mathbb B:=\{0,1\}$. A **binary encoding** of a set $X$ is an injective
function
$$ e:X\to\mathbb B^* $$
([[def-function]], [[def-injection-surjection-bijection]]).

Fix a symbol $\mathtt{mal}$ not belonging to $X$. A **total decoder** for $e$
is a function
$$ d:\mathbb B^*\to X\cup\{\mathtt{mal}\} $$
such that
$$ d(e(x))=x\quad(x\in X),\qquad d(w)=\mathtt{mal}\quad(w\notin e[X]). $$
Thus $\mathtt{mal}$ is exactly the output on malformed codes, and the decoder
is defined on every binary word, not only on words in the image of $e$.

The encoding $e$ is **effective** when such a total decoder is specified.

The encoding is **prefix-free** when no codeword is a proper prefix of another:
there do not exist distinct $x,y\in X$ and a nonempty binary word $u$ with
$e(y)=e(x)u$.

## Remarks

- Effectiveness here means injective plus explicitly decodable with a fixed
  malformed-code output. It does not yet formalize computation by Turing
  machines.

- Prefix-freeness is an additional property, not part of the definition of an
  effective encoding.
