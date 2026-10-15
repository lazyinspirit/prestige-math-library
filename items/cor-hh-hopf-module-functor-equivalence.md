---
id: cor-hh-hopf-module-functor-equivalence
kind: corollary
title: "Right-right Hopf modules are equivalent to vector spaces"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 7
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-coinvariants-form-a-subspace
  - lem-hh-free-right-right-hopf-module
  - thm-hh-fundamental-theorem-of-hopf-modules
  - lem-hh-coinvariants-of-free-hopf-module
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed pp. 22-23: Theorem 2.1, the isomorphism of Hopf modules."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed pp. 43-44: Theorem 3.38 and Corollary 3.39."
---

## Statement

Let $H$ be a Hopf algebra over a field $k$. The coinvariants functor from right-right Hopf modules over $H$ to $k$-vector spaces and the free Hopf-module functor $V\mapsto V\otimes H$ are inverse equivalences. Their natural unit is $\eta_V(v)=v\otimes1_H$, and their natural counit is $\epsilon_M(n\otimes h)=nh$.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$, right-right Hopf modules over $H$, and $k$-vector spaces.

[F1] Right-right Hopf modules and their morphisms preserve the specified action and coaction, and $M^{\operatorname{co}H}$ is a subspace ([[def-hh-right-right-hopf-module-and-coinvariants]], [[lem-hh-coinvariants-form-a-subspace]]).

[F2] The free functor sends $V$ to the Hopf module $V\otimes H$ with the action and coaction on the second factor ([[lem-hh-free-right-right-hopf-module]]).

[F3] The map $M^{\operatorname{co}H}\otimes H\to M$, $n\otimes h\mapsto nh$, is a natural candidate isomorphism with inverse $m\mapsto\sum P(m_0)\otimes m_1$ ([[thm-hh-fundamental-theorem-of-hopf-modules]]).

[F4] The map $V\to(V\otimes H)^{\operatorname{co}H}$, $v\mapsto v\otimes1_H$, is an isomorphism with inverse $\operatorname{id}_V\otimes\varepsilon$ ([[lem-hh-coinvariants-of-free-hopf-module]]).

## Proof

1.1 Let $\mathsf{HopfMod}^{r,r}_H$ have right-right Hopf modules as objects and linear maps preserving action and coaction as morphisms; let $\mathsf{Vect}_k$ have vector spaces and linear maps. Define $C(M)=M^{\operatorname{co}H}$ and $C(f)=f|_{M^{\operatorname{co}H}}$. If $n$ is coinvariant, then $\rho(f(n))=(f\otimes\operatorname{id})\rho(n)=f(n)\otimes1_H$, so this restriction is well defined; identities and composites restrict to identities and composites. Hence $C$ is a functor. [F1, given, construct]

1.2 Define $T(V)=V\otimes H$ with [F2]'s structure and $T(g)=g\otimes\operatorname{id}_H$ for a linear map $g:V\to W$. On elementary tensors, $T(g)$ preserves the right action and coaction by the formulas in [F2]; tensor functoriality gives $T(\operatorname{id})=\operatorname{id}$ and $T(g'f) =T(g')T(f)$. Thus $T$ is a functor. [F2, construct]

2.1 The maps $\eta_V(v)=v\otimes1_H$ and $\epsilon_M(n\otimes h)=nh$ are the isomorphisms in [F4] and [F3], respectively. They are natural: for linear $g:V\to W$, $(g\otimes\operatorname{id})(v\otimes1_H)=g(v)\otimes1_H$; for a Hopf-module morphism $f:M\to N$, $f(nh)=f(n)h$ on $n\otimes h$. By linearity these equalities give both naturality squares. [F3, F4, step 1.1, step 1.2]

3.1 For $v\otimes h\in T(V)$, $T(\eta_V)(v\otimes h)=(v\otimes1_H)\otimes h$, so $\epsilon_{T(V)}T(\eta_V)(v\otimes h)=(v\otimes1_H)h=v\otimes h$. Therefore $\epsilon_{T(V)}\circ T(\eta_V)=\operatorname{id}_{T(V)}$. [F2, F3, step 2.1, algebra]

4.1 For $n\in C(M)$, $C(\epsilon_M)\eta_{C(M)}(n)=\epsilon_M(n\otimes1_H)=n1_H=n$. Hence $C(\epsilon_M)\circ\eta_{C(M)}=\operatorname{id}_{C(M)}$. The unit and counit are natural isomorphisms satisfying both triangle identities, so $C$ and $T$ are inverse equivalences. [F1, F3, step 2.1, algebra] ∎
