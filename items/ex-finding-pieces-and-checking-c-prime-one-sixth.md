---
id: ex-finding-pieces-and-checking-c-prime-one-sixth
kind: example
title: "A concrete relator set with its pieces and a direct C prime(1/6) check"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-piece-in-a-symmetrised-presentation, def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Example

Let

$$ R=\{abcdefg,ahijklmn\}. $$

Then the only nontrivial pieces in the symmetrised set are the one-letter words
$a$ and $a^{-1}$, so this relator set satisfies $C'(1/6)$.

## Facts & Assumptions

**Given:** The two relators $r_1=abcdefg$ and $r_2=ahijklmn$.

[L1] Pieces are common initial segments of distinct symmetrised occurrences
([[def-piece-in-a-symmetrised-presentation]]).

[L2] $C'(1/6)$ requires every piece to have length less than one sixth of the
relator containing it
([[def-small-cancellation-conditions-c-lambda-and-c-prime-lambda]]).

## Verification

**Proof technique:** direct.

1.1 The words $r_1$ and $r_2$ start with the same letter $a$ and then immediately diverge, so $a$ is a piece by [L1]. Their inverse words have cyclic conjugates starting with $a^{-1}$ and then immediately diverging, so $a^{-1}$ is also a piece. Every other letter occurs in only one cyclic position among the two relators and their inverses, so there is no other nontrivial piece and no piece of length greater than $1$. [L1, given]

2.1 The relevant relator lengths are $|r_1|=7$ and $|r_2|=8$, while both pieces have length $1$. Since $1<7/6$ and $1<8/6$, [L2] shows that the $C'(1/6)$ inequalities hold for every symmetrised occurrence. [L2, step 1.1, algebra] ∎
