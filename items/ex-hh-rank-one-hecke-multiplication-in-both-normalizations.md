---
id: ex-hh-rank-one-hecke-multiplication-in-both-normalizations
kind: example
title: "Rank-one Hecke multiplication in both normalizations"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 8
deps: [def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-hecke-anti-involution-bar-and-normalization, def-hh-coxeter-matrix-word-group-and-length, lem-hh-finite-polynomial-and-localization-constructions, thm-int-comm-ring, lem-int-cancellation, lem-nat-embeds-int]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Section 3.2, PDF p. 8: the quadratic relation (T_s-v_s)(T_s+v_s^{-1})=0 and the reduced products T_w in the rank-one case"
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL course notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 2, printed p. 7: the rank-one case of H_R(W_1,pi) with the multiplication rule T_sT_s = pi(s)T_1 + (pi(s)-1)T_s"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), complete book PDF"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 6.1, printed p. 174: the q-normalization (T_s-q)(T_s+1)=0 for rank one"
verification:
  precheck: pass
---

## Example

Let $S=\{s\}$ with $m(s,s)=1$, so that $W=\{1,s\}\cong\mathbb Z/2$ with $\ell(1)=0$ and $\ell(s)=1$ ([[def-hh-coxeter-matrix-word-group-and-length]]). The odd-edge graph has one vertex and one component, so $R=\mathbb Z[v^{\pm1}]$ with $v:=v_s$ is the coefficient ring of [[def-hh-universal-coxeter-hecke-parameters-and-presentation]], and $H$ is the quotient of the free associative $R$-algebra $R\langle T_s\rangle$ by the single relation $(T_s-v)(T_s+v^{-1})=0$.

1. **Normalized table.** $\{1,T_s\}$ is an $R$-basis of $H$ ([[thm-hh-generic-coxeter-hecke-standard-basis]]), and
$$1\cdot1=1,\qquad 1\cdot T_s=T_s=T_s\cdot1,\qquad T_s^2=(v-v^{-1})T_s+1,$$
equivalently $(T_s-v)(T_s+v^{-1})=0$. Moreover $T_s^{-1}=T_s-(v-v^{-1})$, so $T_s^{-1}T_s=T_sT_s^{-1}=1$ ([[lem-hh-hecke-anti-involution-bar-and-normalization]]).

2. **Multiplicative table.** Put $Q:=v^2$ and $S_s:=vT_s$. Then $\{1,S_s\}$ is again an $R$-basis, $S_s$ is a unit, and
$$1\cdot1=1,\qquad 1\cdot S_s=S_s=S_s\cdot1,\qquad S_s^2=(Q-1)S_s+Q,$$
equivalently $(S_s-Q)(S_s+1)=0$; indeed $S_s^{-1}=Q^{-1}(S_s+1-Q)$.

3. **Conversion.** The two tables are interconverted by $S_s=vT_s$, $T_s=v^{-1}S_s$: substituting in $T_s^2=(v-v^{-1})T_s+1$ gives $v^{-2}S_s^2=(1-v^{-2})S_s+1$, i.e. $S_s^2=(Q-1)S_s+Q$; conversely $T_s^2=v^{-2}S_s^2=v^{-2}\bigl((Q-1)S_s+Q\bigr)=(v-v^{-1})T_s+1$. In particular $R$ is a domain, both bases persist after every base change by [[thm-hh-generic-coxeter-hecke-standard-basis]], part 4, and no choice or finiteness hypothesis beyond $|S|=1$ is used.

## Facts & Assumptions

**Given:** The one-element generator set $S=\{s\}$, the group $W=\{1,s\}$, the Laurent ring $R=\mathbb Z[v^{\pm1}]$ and the algebra $H=R\langle T_s\rangle/((T_s-v)(T_s+v^{-1}))$.

[F1] $R=\Lambda_{\mathbb Z,1}$ is a commutative ring in which $v$ is a unit, $H$ is presented by the generator $T_s$ and the single quadratic relation $(T_s-v)(T_s+v^{-1})=0$, and each $v_s$ is a unit; there are no braid relations because $|S|=1$. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]])

[F2] For $S=\{s\}$ the presentation of $W$ has the single generator $s$ and the relation $s^2=1$. Its universal property extends any assignment of $s$ to an involution in a group, and $\ell$ is the least word length. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F3] $\{T_w:w\in W\}$ is an $R$-basis of $H$, and after base change along any ring homomorphism the specialized family is an $R'$-basis; in particular $T_1=1$ and $\{1,T_s\}$ is a basis. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

[F4] $T_s$ is a unit with $T_s^{-1}=T_s-(v-v^{-1})$; with $Q_s=v_s^2$ and $S_s=v_sT_s$, the element $S_s$ is a unit, $T_s=v_s^{-1}S_s$, and $(S_s-Q_s)(S_s+1)=0$. ([[lem-hh-hecke-anti-involution-bar-and-normalization]])

[F5] The integers are a commutative ring ([[thm-int-comm-ring]]) with no zero divisors ([[lem-int-cancellation]]), and $0\ne1$ because the natural-number embedding is injective ([[lem-nat-embeds-int]]). Thus $\mathbb Z$ is an integral domain, and the Laurent construction over a domain makes $\Lambda_{\mathbb Z,1}=\mathbb Z[v^{\pm1}]$ an integral domain ([[lem-hh-finite-polynomial-and-localization-constructions]], part 2).

## Verification

**Proof technique:** direct.

1.1 By [F2] every word in the single generator reduces using $s^2=1$ to $1$ or $s$. The assignment $s\mapsto-1$ extends by the universal property to a homomorphism $W\to\{\pm1\}$, so $s\ne1$; thus $W=\{1,s\}$ and the reduced expressions are the empty word and the one-letter word $s$, with lengths $0$ and $1$; by [F3] the family $\{T_1,T_s\}$ is an $R$-basis of $H$ and $T_1=1$ is the empty product. The unit axioms give $1\cdot T_s=T_s=T_s\cdot 1$, and expanding $(T_s-v)(T_s+v^{-1})=0$ from [F1] gives $T_s^2=(v-v^{-1})T_s+1$; the inverse formula $T_s^{-1}=T_s-(v-v^{-1})$ and $T_s^{-1}T_s=T_sT_s^{-1}=1$ are [F4]. This is the normalized table of part 1. [F1, F2, F3, F4]

1.2 Put $Q:=v^2$ and $S_s:=vT_s$. Since $v$ is a unit of $R$ ([F1]) and multiplication by it is an invertible $R$-linear map, $\{1,S_s\}$ is again an $R$-basis of $H$ ([F3]); $S_s$ is a unit with $S_s^{-1}=v^{-1}T_s^{-1}$ as a product of units ([F4]). Multiplying $T_s^2=(v-v^{-1})T_s+1$ by $v^2$ gives $S_s^2=v(v-v^{-1})S_s+v^2=(Q-1)S_s+Q$, because $v(v-v^{-1})=v^2-1=Q-1$; equivalently $(S_s-Q)(S_s+1)=S_s^2+(1-Q)S_s-Q=0$. Finally $S_s(S_s+1-Q)=S_s^2+S_s-QS_s=\bigl((Q-1)S_s+Q\bigr)+S_s-QS_s=Q$, so $S_s^{-1}=Q^{-1}(S_s+1-Q)$. This is the multiplicative table of part 2. [F1, F3, F4, algebra]

2.1 The two tables are interconverted by $S_s=vT_s$ and $T_s=v^{-1}S_s$ ([F4]). Substituting $T_s=v^{-1}S_s$ into $T_s^2=(v-v^{-1})T_s+1$ gives $v^{-2}S_s^2=(v-v^{-1})v^{-1}S_s+1$, and multiplying by the unit $v^2$ gives $S_s^2=v(v-v^{-1})S_s+v^2=(Q-1)S_s+Q$; conversely, substituting $S_s=vT_s$ into $S_s^2=(Q-1)S_s+Q$ and multiplying by $v^{-2}$ returns $T_s^2=(v-v^{-1})T_s+1$. The ring $R=\mathbb Z[v^{\pm1}]$ is a domain by [F5], both bases persist under every base change by [F3], and no choice is used: all identities are explicit polynomial identities in $v$ involving no selection. This completes the conversion of part 3 and with 1.1 and 1.2 all three parts of the example. [F3, F4, F5, step 1.1, step 1.2] ∎

