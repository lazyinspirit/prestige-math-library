---
id: thm-van-der-waerden-with-monochromatic-difference
kind: theorem
title: "Van der Waerden's theorem, strengthened so the progression and its common difference have one colour"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-colour-focussing-for-arithmetic-progressions, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
short: "Strengthened van der Waerden theorem"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Theorems 6 and 8"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

For all positive $m,c$ there is a natural $N$ such that every $c$-colouring of $\{1,\ldots,N\}$ contains positive integers $a,d$ for which

$$a,a+d,\ldots,a+(m-1)d,d$$

all have one colour. In particular, the first $m$ displayed terms form a monochromatic arithmetic progression with positive common difference. The proof uses the focusing lemma [[lem-colour-focussing-for-arithmetic-progressions]] and natural induction [[thm-induction-principle]].

## Facts & Assumptions

**Given:** Positive natural numbers $m,c$ and a $c$-colouring of a sufficiently long positive initial interval.

[L1] Under the length-$(m-1)$ induction hypothesis, finite colour focussing produces either a monochromatic $m$-term progression or focused $(m-1)$-term progressions of all available colours ([[lem-colour-focussing-for-arithmetic-progressions]]).



## Proof

**Proof technique:** induction.

1.1 Ordinary van der Waerden existence follows by induction on $m$. Length $1$ is immediate. Assuming finite witnesses for length $m-1$ for every number of colours, apply [L1] with $r=c$; if its first alternative occurs, it gives length $m$, while in the second alternative the focus has one of the $c$ colours and extends the focused progression of that colour to length $m$. [base, L1]

2.1 We now prove the strengthened statement. If $m=1$, take $a=d=1$, so assume $m\ge2$. Induct on $c$. The assertion is immediate for $c=1$. Assume it for $c-1$ colours and let $n$ be a finite witness for the same target length $m$ with $c-1$ colours. By step 1.1, choose an ordinary monochromatic progression $a,a+d,\ldots,a+n(m-1)d$ in a sufficiently long $c$-coloured interval. [ih, step 1.1]

3.1 If one of $d,2d,\ldots,nd$ has the progression's colour, say $td$ does, then $a,a+td,\ldots,a+(m-1)td$ together with its difference $td$ has one colour. Otherwise the colouring $t\mapsto\operatorname{colour}(td)$ on $\{1,\ldots,n\}$ uses at most $c-1$ colours. The induction hypothesis gives $u,u+q,\ldots,u+(m-1)q,q$ of one colour there, and multiplication by $d$ gives the required progression and difference in the original colouring. [step 2.1, ih]

4.1 The colour induction proves the strengthened theorem for every finite $c$, while step 1.1 supplies the ordinary finite witnesses used in its construction. [step 3.1, discharge-induction] ∎
