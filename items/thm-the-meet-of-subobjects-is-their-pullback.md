---
id: thm-the-meet-of-subobjects-is-their-pullback
kind: theorem
title: "The meet of two subobjects is their pullback"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pullbacks-and-pushouts, lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms, thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Statement

Let $B$ and $C$ be subobjects of an object $A$ in an abelian category,
represented by monomorphisms $b:B\rightarrowtail A$ and $c:C\rightarrowtail A$.
Then the meet $B\wedge C$ in the subobject order is represented by the pullback
of $b$ and $c$.

## Facts & Assumptions

**Given:** Monomorphisms $b:B\rightarrowtail A$ and $c:C\rightarrowtail A$.

[L1] Pullbacks are defined by their commutative square and universal property ([[def-pullbacks-and-pushouts]]).

[L2] A pullback of a monomorphism is a monomorphism ([[lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms]]).

[L3] Subobject inequalities are factorization relations between representatives ([[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]).

## Proof

**Proof technique:** direct.

1.1 Form a pullback square ```tikzcd P \arrow[r, "q"] \arrow[d, "p"'] & C \arrow[d, "c"] \\ B \arrow[r, "b"'] & A. ``` By [L2], the pullback leg $p$ is monic, so the composite $m:=bp=cq:P\to A$ is monic as well. Because $m$ factors through both $b$ and $c$, it is a lower bound of the two subobjects. [L1, L2, L3]

1.2 Let $n:N\rightarrowtail A$ be any lower bound. Then $n=b u=c v$ for some $u:N\to B$ and $v:N\to C$. By the pullback universal property [L1], there is a unique $w:N\to P$ with $pw=u$ and $qw=v$. Therefore $m w=b u=n$, so $n$ factors through $m$. Hence $n\le m$. [L1, L3, construct]

2.1 Steps 1.1 and 1.2 show that $m$ is a lower bound above every other lower bound. By [L3], the pullback subobject is exactly $B\wedge C$. [L3, step 1.1, step 1.2] ∎
