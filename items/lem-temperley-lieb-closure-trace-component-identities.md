---
id: lem-temperley-lieb-closure-trace-component-identities
kind: lemma
title: "Diagram closure trace is cyclic and satisfies the tower rules"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-temperley-lieb-closure-trace-and-partial-trace
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - lem-temperley-lieb-generators-satisfy-local-relations
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§2.1 and 5.1, PDF pp. 13–15 and 60–61: closure trace and cyclicity."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: normalized trace identities and loop parameter."
---

## Statement

For any commutative ring $R$, loop value $\delta\in R$, and $n\ge0$, the unnormalized trace of [[def-temperley-lieb-closure-trace-and-partial-trace]] satisfies

$$\operatorname{Tr}_n(xy)=\operatorname{Tr}_n(yx),\qquad \operatorname{Tr}_{n+1}(x\otimes1)=\delta\operatorname{Tr}_n(x)$$

for $x,y\in\mathrm{TL}_n(R,\delta)$. For $n\ge1$ and $x\in\mathrm{TL}_n(R,\delta)$, it also satisfies

$$\operatorname{Tr}_{n+1}((x\otimes1)U_n)=\operatorname{Tr}_n(x),$$

where $U_n$ is the cup-cap generator on the last two strands of $\mathrm{TL}_{n+1}$. For $n\ge1$, $x\in\mathrm{TL}_{n-1}$ and $h\in\mathrm{TL}_n$,

$$\operatorname{Tr}_n\bigl(h(x\otimes1)\bigr)=\operatorname{Tr}_{n-1}\bigl(\operatorname{ptr}_n(h)x\bigr).$$

No division by $\delta$ occurs.

## Facts & Assumptions

**Given:** A commutative ring $R$, $\delta\in R$, the diagram algebras with their stated stacking product, and the closure and partial-trace maps.

[F1] A basis diagram is a noncrossing matching; stacking glues the intermediate endpoints and assigns one factor $\delta$ to each removed closed component ([[def-temperley-lieb-diagram-category]]).

[F2] Stacking is associative and identities act on both sides ([[thm-temperley-lieb-diagram-category-laws]]).

[F3] The closure and partial trace are defined by the stated graph closure and cap/cup composite ([[def-temperley-lieb-closure-trace-and-partial-trace]]).

[F4] For $n\ge1$, the last generator $U_n$ is a cap and cup on strands $n,n+1$ ([[def-temperley-lieb-diagram-category]], [[lem-temperley-lieb-generators-satisfy-local-relations]]).

## Proof

**Proof technique:** count connected components of finite glued graphs.

1.1 For basis diagrams $D,E:n\to n$, closing the stack $DE$ makes a finite graph whose vertices are glued endpoints and whose components are circles. Moving the cut between the $D$-layer and the $E$-layer changes the cyclic order in which the same two layers are read but neither the component partition nor the number of circles. Hence the closed graph of $DE$ and that of $ED$ have the same number of circles. Definition [F3] assigns both the same power of $\delta$, so $\operatorname{Tr}_n(DE)=\operatorname{Tr}_n(ED)$. Bilinearity extends this equality to arbitrary $x,y$. [F1, F3, construct]

1.2 In the closure of $D\otimes1_1$, the extra vertical strand closes to one circle disjoint from every component of the closure of $D$. Thus the closed graph has exactly $c(D)+1$ circles; its value is $\delta^{c(D)+1}=\delta\operatorname{Tr}_n(D)$, an identity valid also at $\delta=0$. [F1, F3, algebra]

1.3 Let $n\ge1$. In the closure of $(D\otimes1_1)U_n$, the cap and cup of $U_n$ reconnect the added strand to the final old strand. Following the two arcs through the stack shows they form part of the same exterior-to-exterior path that was closed in $D$; they create no separate circle. Every other component is unchanged. The circle count is therefore $c(D)$, proving $\operatorname{Tr}_{n+1}((D\otimes1)U_n)=\operatorname{Tr}_n(D)$. Bilinearity gives the result for $x$. [F1, F3, F4, algebra]

2.1 Let $n\ge1$. By [F3], $\operatorname{ptr}_n(h)$ is obtained by adding the rightmost cup, stacking $h$ on the enlarged graph, and then joining the rightmost pair by the cap. Closing the remaining $n-1$ strands produces exactly the same finite graph as closing $h(x\otimes1)$ after the same $x$ has been stacked on the first $n-1$ strands. The two closures therefore have equal circle counts and equal powers of $\delta$ for each basis pair $(h,x)$. Bilinearity proves the partial-trace identity. Together with steps 1.1–1.3 this proves all claims. [F1, F2, F3, step 1.1, step 1.2, step 1.3, algebra] ∎
