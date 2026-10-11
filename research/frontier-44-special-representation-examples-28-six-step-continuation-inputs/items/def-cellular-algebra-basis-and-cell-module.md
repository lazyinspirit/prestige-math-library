---
id: def-cellular-algebra-basis-and-cell-module
kind: definition
title: "Cellular bases and cell modules"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-algebra-over-a-commutative-ring, def-left-and-right-modules, def-partial-order]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Definition 2.1 with Corollary 2.3 and equations (2.4)-(2.6), printed pp. 9-16: the Graham-Lehrer cellular axioms, the cell-module actions and the cellular-basis identification"
    - title: "Andrew Mathas and Marcos Soriano, Seminormal forms and Gram determinants for cellular algebras, arXiv:math/0604108; J. reine angew. Math. 619 (2008) 141-173; complete 29-page author-hosted preprint, SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1"
      url: "https://arxiv.org/pdf/math/0604108"
      locator: "Sections 2.1-2.5, pp. 4-6: cellular algebras, cell modules and the cell form in the convention used here"
---

## Definition

Let $R$ be a commutative ring with $1$ and $A$ a unital $R$-algebra
([[def-algebra-over-a-commutative-ring]]) that is free as an $R$-module on a
finite set $C=\{c^{\lambda}_{st}:\lambda\in\Lambda,\ s,t\in T(\lambda)\}$,
where $(\Lambda,\unrhd)$ is a finite poset ([[def-partial-order]]; its strict
order is written $\rhd$) and each $T(\lambda)$ is a finite set. For
$\lambda\in\Lambda$ let $A^{\rhd\lambda}$ be the $R$-submodule of $A$ spanned
by all $c^{\mu}_{uv}$ with $\mu\rhd\lambda$.

Then $(C,\Lambda)$ is a **cellular basis** of $A$, and $A$ is a **cellular
algebra**, if:

(i) the $R$-linear map $i:A\to A$ with $i(c^{\lambda}_{st})=c^{\lambda}_{ts}$
for all $\lambda,s,t$ is an algebra anti-automorphism of $A$, i.e. $i(ab)=i(b)i(a)$
and $i(1)=1$ (equivalently $i$ is an isomorphism of $A$ with the opposite
algebra; the displayed formula forces $i^2=\mathrm{id}$); and

(ii) for every $\lambda\in\Lambda$, every $t\in T(\lambda)$ and every $a\in A$
there exist $r_v\in R$ ($v\in T(\lambda)$) with
$$c^{\lambda}_{st}\,a\equiv\sum_{v\in T(\lambda)}r_v\,c^{\lambda}_{sv}\pmod{A^{\rhd\lambda}}.$$

**Cell modules.** For $\lambda\in\Lambda$ let $C^{\lambda}$ be the free
$R$-module with basis $\{c^{\lambda}_t:=c^{\lambda}_{tt}:t\in T(\lambda)\}$;
condition (ii) makes $C^{\lambda}$ a right $A$-module by
$c^{\lambda}_t a:=\sum_v r_vc^{\lambda}_v$ when
$c^{\lambda}_{tt}a\equiv\sum_v r_vc^{\lambda}_{tv}\pmod{A^{\rhd\lambda}}$, and
it makes $C^{\lambda}$ a left $A$-module via $i$, the left action being
$a\cdot c^{\lambda}_t:=c^{\lambda}_t\,i(a)$. Both actions are well defined on
the freely spanning basis elements by (ii): the coefficients $r_v$ are unique
because $C$ is an $R$-basis of $A$ and the quotient by $A^{\rhd\lambda}$ kills
exactly the basis elements indexed by strictly larger labels, while applying
the anti-automorphism (i) to (ii) gives the same triangularity for left
multiplication. The module $C^{\lambda}$ is the **(right) cell module** of
$\lambda$, and
$$A^{\unrhd\lambda}/A^{\rhd\lambda}\cong C^{\lambda}\otimes_R C^{\lambda}$$
via $c^{\lambda}_{st}+A^{\rhd\lambda}\mapsto c^{\lambda}_s\otimes c^{\lambda}_t$,
where $A^{\unrhd\lambda}$ is spanned by all $c^{\mu}_{uv}$ with
$\mu\unrhd\lambda$. A cellular algebra may have several cellular bases.
