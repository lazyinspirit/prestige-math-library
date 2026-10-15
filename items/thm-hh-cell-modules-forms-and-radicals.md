---
id: thm-hh-cell-modules-forms-and-radicals
kind: theorem
title: "Cell modules, their forms, and radicals"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 7
deps:
  - def-hh-cell-datum-dominance-and-cell-ideals
  - thm-hh-cyclotomic-murphy-basis-and-cellularity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§2.1–2.8, PDF pp. 14–17: cell ideals, coefficient modules, the form, symmetry, associativity, and radicals. Complete reasoning inspected."
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3, printed pp. 397–398: cyclotomic Specht cell modules and the form induced by the Murphy multiplication law. Full text inspected."
---

## Statement

Let $A$ be a cellular algebra over a commutative ring $R$ with finite cell poset $(\Lambda,\ge)$, basis $C^\lambda_{s,t}$, and coefficient axiom as in [[def-hh-cell-datum-dominance-and-cell-ideals]]. For each $\lambda\in\Lambda$, let $\Delta(\lambda)$ be the free $R$-module on symbols $c_t$ ($t\in T(\lambda)$), with right action
$$c_ta=\sum_{v\in T(\lambda)}r^\lambda_{t,v}(a)c_v.$$
Then this is a well-defined unital right $A$-module. In particular, after the cyclotomic Murphy basis theorem [[thm-hh-cyclotomic-murphy-basis-and-cellularity]], this construction gives its cell modules. There is a unique bilinear form $\langle\ ,\ \rangle_\lambda$ satisfying
$$C^\lambda_{s,t}C^\lambda_{u,v}\equiv\langle c_t,c_u\rangle_\lambda C^\lambda_{s,v}\pmod{A^{>\lambda}}.$$
The form is symmetric and satisfies $\langle xa,y\rangle_\lambda=\langle x,ya^*\rangle_\lambda$. Its radical is a right submodule, so the quotient by the radical is defined over $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a cellular $R$-algebra $A$, its finite cell poset and basis, and a cell label $\lambda$.

[F1] [[def-hh-cell-datum-dominance-and-cell-ideals]]: the basis is stable under the involution; multiplication has coefficients independent of the first index modulo $A^{>\lambda}$; and $A^{\ge\lambda}$ and $A^{>\lambda}$ are two-sided ideals.

[F2] [[thm-hh-cyclotomic-murphy-basis-and-cellularity]]: for $A=H_{r,n}$, the Murphy elements supply the cellular basis and coefficient law over the universal ring and after commutative base change.

## Proof

**Given:** The data in the Statement.

1.1 In the quotient $A^{\ge\lambda}/A^{>\lambda}$, the classes of $C^\lambda_{s,t}$ form a basis by [F1]. Define $c_ta$ by the coefficients in the cell axiom. For any fixed $s$, this is exactly the unique coefficient vector of the class of $C^\lambda_{s,t}a$. Associativity in the quotient gives $((c_ta)b)=c_t(ab)$ by comparing the coefficients of that basis. The class of $C^\lambda_{s,t}1$ is $C^\lambda_{s,t}$, so $c_t1=c_t$. Thus the action is well-defined and unital. [F1, algebra]

2.1 If $T(\lambda)$ is empty, then $\Delta(\lambda)=0$ and the unique bilinear form is the zero form, so the assertions for this label are vacuous. Otherwise fix $s,t,u,v$. The cell axiom gives$C^\lambda_{s,t}C^\lambda_{u,v}\equiv\sum_w r^\lambda_{t,w}(C^\lambda_{u,v})C^\lambda_{s,w}\pmod{A^{>\lambda}},$ whose terms have fixed first index $s$. Apply the involution and the cell axiom to $C^\lambda_{v,u}C^\lambda_{t,s}$ to obtain a second expression for the same product, with terms $C^\lambda_{w,v}$ and fixed second index $v$. Since the cell-layer classes are a basis, the intersection of the span of $\{C^\lambda_{s,w}\}_w$ and the span of $\{C^\lambda_{w,v}\}_w$ is the rank-one span of $C^\lambda_{s,v}$. The product is therefore a scalar multiple of this basis vector. The first expansion makes that scalar independent of $s$; the involuted expansion makes it independent of $v$. It depends only on $t,u$, defining the unique coefficient $\langle c_t,c_u\rangle_\lambda$. [F1, step 1.1, algebra]

3.1 Applying $*$ to the defining product congruence gives$C^\lambda_{v,u}C^\lambda_{t,s}\equiv\langle c_t,c_u\rangle_\lambda C^\lambda_{v,s}\pmod{A^{>\lambda}}.$ Applying step 2.1 directly to its left-hand side gives coefficient $\langle c_u,c_t\rangle_\lambda$ on the same basis vector. Independence forces $\langle c_t,c_u\rangle_\lambda=\langle c_u,c_t\rangle_\lambda$. Bilinearity follows from the bilinearity of multiplication and uniqueness of the coefficient. [F1, step 2.1, algebra]

3.2 For $x,y\in\Delta(\lambda)$ and $a\in A$, choose any fixed $s,v\in T(\lambda)$. Associativity gives $(C^\lambda_{s,x}a)C^\lambda_{y,v}=C^\lambda_{s,x}(aC^\lambda_{y,v})$ modulo $A^{>\lambda}$, where $C^\lambda_{s,x}$ and $C^\lambda_{y,v}$ denote the corresponding linear combinations when $x,y$ are not basis vectors. The left coefficient of $C^\lambda_{s,v}$ is $\langle xa,y\rangle_\lambda$. Applying $*$ to the right cell law shows that left multiplication by $a$ on the second factor has coefficients equal to the right action of $a^*$ on $\Delta(\lambda)$; hence the right coefficient is $\langle x,ya^*\rangle_\lambda$. Coefficient uniqueness proves the asserted invariance. [F1, step 2.1, algebra]

4.1 Define $\operatorname{rad}\Delta(\lambda)=\{x:\langle x,y\rangle_\lambda=0\text{ for every }y\}$. If $x$ lies in this radical, then for all $a\in A$ and all $y\in\Delta(\lambda)$, step 3.2 gives $\langle xa,y\rangle_\lambda=\langle x,ya^*\rangle_\lambda=0$. Thus $xa$ is again in the radical. The quotient is a right module. The coefficient-defined module action and the form use only the cell-layer basis and therefore commute with scalar extension to any commutative $R$-algebra. The radical over the new ring is defined afresh as the kernel of its specialized Gram pairing; radicals need not commute with arbitrary scalar extension, and no such assertion is used. [F1, step 1.1, step 3.2, algebra]

5.1 For $A=H_{r,n}$, [F2] supplies the Murphy cellular basis, so the preceding steps construct its cell modules, forms, and radicals over the universal ring and after every commutative specialization. [F2, step 1.1, step 4.1] ∎
