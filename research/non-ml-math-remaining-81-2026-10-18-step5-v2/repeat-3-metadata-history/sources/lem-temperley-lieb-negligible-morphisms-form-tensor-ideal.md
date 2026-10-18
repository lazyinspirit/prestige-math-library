---
id: lem-temperley-lieb-negligible-morphisms-form-tensor-ideal
kind: lemma
title: "Negligible Temperley–Lieb morphisms form a tensor ideal"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-temperley-lieb-negligible-morphisms
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§5.1–5.4, PDF pp. 60–65: negligible morphisms and the tensor-ideal argument."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: cyclic closure trace; rectangular cyclicity and tensor stability are proved locally here."
---

## Statement

Let $\delta\in\mathbb C$. The subspaces $\mathcal N_\delta(m,n)$ of [[def-temperley-lieb-negligible-morphisms]] are closed under composition on either side by arbitrary Temperley–Lieb morphisms and under tensoring on either side by arbitrary Temperley–Lieb morphisms. Thus they form a tensor ideal.

## Facts & Assumptions

**Given:** The complex Temperley–Lieb diagram category for arbitrary $\delta\in\mathbb C$, its unnormalized closure trace, and the subspaces $\mathcal N_\delta(m,n)$.

[F1] Morphisms are linear combinations of noncrossing matching diagrams; composition stacks diagrams, removes each closed component with factor $\delta$, and is associative ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]]).

[F2] For a basis endomorphism $D:m\to m$, the unnormalized closure trace is $\operatorname{Tr}_m(D)=\delta^{c(D)}$ ([[def-temperley-lieb-negligible-morphisms]]).

[F3] A morphism $f:m\to n$ is negligible exactly when $\operatorname{Tr}_m(g\circ f)=0$ for every $g:n\to m$ ([[def-temperley-lieb-negligible-morphisms]]).

## Proof

**Proof technique:** Compare the finite matching graphs and their closed components.

1.1 Let $f:m\to n$ and $g:n\to m$ be basis diagrams. The closed matching graphs defining $\operatorname{Tr}_m(g\circ f)$ and $\operatorname{Tr}_n(f\circ g)$ are the same finite graph: the two stacked layers are read cyclically from opposite interfaces. They therefore have the same number of closed components and the same coefficient $\delta^c$. Bilinearity gives $\operatorname{Tr}_m(g\circ f)=\operatorname{Tr}_n(f\circ g)$ for all such rectangular morphisms. [F1, F2, given, algebra]

2.1 Suppose $f:m\to n$ is negligible, take arbitrary $a:r\to m$ and $b:n\to s$, and test $b\circ f\circ a:r\to s$ against any $h:s\to r$. The composite $a\circ h\circ b$ has type $n\to m$, so [F3] gives $\operatorname{Tr}_m(a\circ h\circ b\circ f)=0$. By step 1.1, this equals $\operatorname{Tr}_r(h\circ b\circ f\circ a)$. Thus $b\circ f\circ a$ is negligible, proving closure under composition on both sides. [F1, F3, step 1.1, algebra]

2.2 Let $u:r\to s$ be arbitrary and let $h:n+s\to m+r$ test $f\otimes u:m+r\to n+s$. Form $g:n\to m$ by composing $1_n\otimes u$ with $h$ and then closing the last $r$ auxiliary input/output points; each resulting closed component contributes its factor $\delta$. The full closed matching graph for $h\circ(f\otimes u)$ has exactly the same remaining components and the same removed components as the graph obtained by first making this partial closure and then forming $g\circ f$. Therefore $\operatorname{Tr}_{m+r}(h\circ(f\otimes u))=\operatorname{Tr}_m(g\circ f)=0,$ where the last equality is [F3]. This proves $f\otimes u$ negligible. [F1, F2, F3, step 1.1, construct]

3.1 For $u\otimes f:r+m\to s+n$, let a test morphism be $h:s+n\to r+m$. Compose $u\otimes1_n$ with $h$ and close the first $r$ auxiliary input/output points to obtain $g:n\to m$. The same component count gives $\operatorname{Tr}_{r+m}(h\circ(u\otimes f))=\operatorname{Tr}_m(g\circ f)=0$. Thus $u\otimes f$ is negligible as well, proving tensor stability on both sides. [F1, F2, F3, step 1.1, step 2.2, construct] ∎
