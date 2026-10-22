---
id: lem-rack-kink-map-is-bijective
kind: lemma
title: "The rack kink map is bijective"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-rack-fundamental-quandle-and-adjoint-group ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Sam Nelson, Link invariants from finite racks, §§2.1 and 3, arXiv:0808.0029v3, pp. 2–7"
      url: "https://arxiv.org/pdf/0808.0029"
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §5.1, printed pp. 49–52"
      url: "https://varf.ru/rudn/manturov/book.pdf"
dependency_level: 2
---

## Statement

Let $R$ be a rack, with right translations $R_y(x)=x*y$. The kink map
$\pi:R\to R$, $\pi(x)=x*x$, is a bijection. Its inverse is
$\pi^{-1}(z)=R_z^{-1}(z)$.

## Statement references

[[def-rack-fundamental-quandle-and-adjoint-group]].

[Nelson, *Link invariants from finite racks*, §§2.1 and 3](https://arxiv.org/pdf/0808.0029).

## Facts & Assumptions

**Given:** A rack $R$ and $R_y(x)=x*y$.

[F1] [[def-rack-fundamental-quandle-and-adjoint-group]]: every right translation is bijective and $(x*y)*z=(x*z)*(y*z)$.

## Proof

1.1 Self-distributivity gives $(w*x)*x=(w*x)*(x*x)$ for every $w,x$. Thus $R_x(R_x(w))=R_{x*x}(R_x(w))$. Since $R_x$ is surjective, the two permutations agree: $R_{x*x}=R_x$, or $R_{\pi(x)}=R_x$. [F1, given]

1.2 Fix $z\in R$ and put $x=R_z^{-1}(z)$, which exists by [F1]. Then $x*z=z$. Self-distributivity says $R_z\circ R_x=R_{x*z}\circ R_z=R_z\circ R_z$. Cancel the bijection $R_z$ on the left to obtain $R_x=R_z$. Therefore $\pi(x)=R_x(x)=R_z(x)=x*z=z$, so $\pi$ is surjective and the displayed formula gives a preimage of every $z$. [F1, construct]

2.1 If $\pi(x)=\pi(y)$, then step 1.1 gives $R_x=R_{\pi(x)}=R_{\pi(y)}=R_y$. Hence $R_y(x)=R_x(x)=\pi(x)=\pi(y)=R_y(y)$. Since $R_y$ is injective, $x=y$. Thus $\pi$ is injective as well as surjective, and step 1.2's formula is its inverse. If $R$ is empty, the unique map $R\to R$ is bijective and the conclusion is vacuous. [F1, step 1.1, step 1.2, algebra] ∎

## Sources

[[def-rack-fundamental-quandle-and-adjoint-group]].
