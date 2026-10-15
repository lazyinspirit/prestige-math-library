---
id: ex-hh-type-a-rank-two-cell-module-specialization
kind: example
title: "Rank-two type-A cell modules at a singular parameter"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps:
  - def-hh-cell-datum-dominance-and-cell-ideals
  - def-hh-cyclotomic-murphy-elements
  - thm-hh-cell-modules-forms-and-radicals
  - thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, §§3.1–3.18 and §§3.20–3.21, PDF pp. 22–26: ordinary Murphy elements, cellular modules, and forms; complete relevant passage inspected."
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3.28–3.30, printed pp. 397–398: cell forms and simple quotients; the rank-two calculation below is direct."
---

## Statement

Let $F$ be a field and specialize the level-one, rank-two type-A Hecke algebra to
$$H=F[T]/((T-Q)(T+1)),$$
where $Q\in F^\times$. Its row Murphy elements are $m_{(2)}=1+T$ and $m_{(1,1)}=1$, ordered by $(2)\triangleright(1,1)$. They form a cellular basis, and the cell modules have forms $Q+1$ and $1$. At $Q=-1$, $m_{(2)}^2=0$, its cell form vanishes, and the $(1,1)$ cell form remains nonzero.

The row-Murphy cell module convention is distinct from the existing ordinary Specht convention. The exact comparison is [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]: the ordinary Specht label $\lambda$ corresponds to the sign twist of the Murphy cell at the conjugate partition $\lambda'$. This example does not identify same-label row Murphy cells with those Specht modules.

## Facts & Assumptions

**Given:** A field $F$, $Q\in F^\times$, the rank-two type-A Hecke algebra, and the row-Murphy cell convention.

[F1] [[def-hh-multiplicative-cyclotomic-hecke-algebra]]: at level one the finite generators obey $(T-Q)(T+1)=0$.

[F2] [[def-hh-cyclotomic-murphy-elements]]: at level one $u_\lambda=1$; $x_{(2)}=1+T$ and $x_{(1,1)}=1$.

[F3] [[def-hh-cell-datum-dominance-and-cell-ideals]]: a cellular basis uses an involution-swapped basis and the fixed-first-index multiplication law modulo higher cells.

[F4] [[thm-hh-cell-modules-forms-and-radicals]]: the cell form is the same-cell multiplication coefficient modulo higher cells.

[F5] [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]: the ordinary Specht module at $\lambda$ is the sign twist of the Murphy cell at $\lambda'$; there is no untwisted same-label identification.

## Proof

**Given:** $F$, $Q$, $T$, and the candidate Murphy elements $1+T$ and $1$.

1.1 The quadratic relation is $T^2=(Q-1)T+Q$. The row subgroup of $(2)$ is $S_2$, giving row sum $1+T$; the row subgroup of $(1,1)$ is trivial, giving $1$. The partition dominance inequalities give $(2)\triangleright(1,1)$. [F1, F2, construct]

1.2 Monic division by $(T-Q)(T+1)$ gives basis $1,T$ for $H$. Since $T=(1+T)-1$, the pair $1+T,1$ is also a basis. Direct multiplication gives
$$(1+T)^2=1+2T+T^2=(Q+1)(1+T).$$
Also $T(1+T)=Q(1+T)$, while $T=(1+T)-1\equiv-1$ modulo the upper cell. Thus each cell has the required fixed-row action, and the involution fixes both basis elements; this verifies the cellular basis directly. [F1, F2, F3]

2.1 By [F4] the upper cell form is the coefficient $Q+1$ in the displayed square, and the lower cell form is $1\cdot1=1$. At $Q=-1$, $(T+1)^2=0$ and $T+1$ is nonzero because it is a basis element. The upper form vanishes and the lower form remains $1$. The algebra is $F[\epsilon]/(\epsilon^2)$ with $\epsilon=T+1$. For any simple right module $S$, $\epsilon S$ is a submodule; if it were nonzero then $\epsilon S=S$, forcing $\epsilon^2S=S$, contrary to $\epsilon^2=0$. Hence $\epsilon S=0$, and $S$ is the unique one-dimensional module with $T=-1$. [F1, F2, F4, step 1.2, algebra]

2.2 The cross-link in [F5] places the ordinary Specht module at the conjugate Murphy label and applies the sign twist. The calculation above concerns the row-Murphy labels $(2)$ and $(1,1)$, so the comparison requires both operations and does not identify the row cell at $\lambda$ with an untwisted Specht module at $\lambda$. [F5, step 1.1] ∎
