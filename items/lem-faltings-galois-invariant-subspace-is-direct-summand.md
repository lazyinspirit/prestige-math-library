---
id: lem-faltings-galois-invariant-subspace-is-direct-summand
kind: lemma
title: "Galois-invariant subspaces of a Tate module split"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-arith-tate-module-and-inertia
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-faltings-height-sequence-eventually-stationary
  - thm-abelian-variety-dual-and-polarization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §5"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed p. 361, invariant subspace and idempotent argument; compare 1984 erratum p. 381."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Let $A/K$ be a principally polarized abelian variety over a number field with semistable reduction at every finite place, let $\ell$ be prime, and let $W\subset V_\ell(A)$ be a $G_K$-stable subspace. Put $H=W\cap T_\ell(A)$ and let $G_n$ be the image of $H/\ell^nH$ in $T_\ell(A)/\ell^nT_\ell(A)$ under the natural inclusion. Identify the latter quotient with $\ker([\ell^n]:A(\overline K)\to A(\overline K))$. If the quotient varieties $A/G_n$ take only finitely many $K$-isomorphism classes, then $W$ is the image of an idempotent in $\operatorname{End}_K(A)\otimes\mathbb Z_\ell$ and therefore has a $G_K$-stable complement in $V_\ell(A)$.

## Statement references

[[def-arith-tate-module-and-inertia]]

[[lem-faltings-height-sequence-eventually-stationary]]

[[thm-abelian-variety-dual-and-polarization]]

[Faltings 1983, §5, printed p. 361](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings 1984 erratum, p. 381](https://gdz.sub.uni-goettingen.de/id/PPN356556735_0075?tify=%7B%22view%22:%22info%22,%22pages%22:%5B383%5D%7D)

## Facts & Assumptions

**Given:** AC and DC; a semistable principally polarized abelian variety $A/K$, a prime $\ell$, and a Galois-stable subspace $W\subset V_\ell(A)$; with $H$ and $G_n$ as in the Statement, the quotient varieties $A/G_n$ take only finitely many $K$-isomorphism classes.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-arith-tate-module-and-inertia]]: $T_\ell(A)$ is a free $\mathbb Z_\ell$-module of rank $2g$ and $V_\ell(A)=T_\ell(A)\otimes\mathbb Q_\ell$.

[F2] [[lem-faltings-height-sequence-eventually-stationary]]: the corrected quotient-height sequence is eventually stationary, but the proof has the erratum obligations recorded in that item.

## Proof status

The Statement already assumes that the quotient varieties take only finitely many $K$-isomorphism classes. This conditional premise is retained as Given; it is not deduced from the false unrestricted bounded-stable-height assertion. Eventual stationarity belongs to the source context for establishing such a premise in appropriate families, but does not establish it here. The nontrivial remaining step converts repeated quotient isomorphisms into the stated integral endomorphism idempotent whose Tate-module image is $W$. That argument is not supplied locally, and this conditional lemma remains held; semisimplicity alone is not a substitute.

Unresolved proof prerequisite (not an accepted given): Repeated isomorphism classes among the quotients imply that $W$ is cut out by an endomorphism idempotent; the source refers to a separate endomorphism argument that is not reconstructed here. Proposed supplier ID: `lem-faltings-repeated-quotient-produces-tate-idempotent` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
