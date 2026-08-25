---
id: thm-a-weighted-limit-is-unique-up-to-unique-isomorphism
kind: theorem
title: "A weighted limit and a weighted colimit are unique up to a unique compatible isomorphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-set-weighted-limit-and-weighted-colimit, thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism, def-universal-element, def-presheaf-representable-functor-and-representation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.1)-(3.2)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small, $\mathcal M$ locally small, $D:\mathcal J\to\mathcal M$
a diagram and $W:\mathcal J\to\mathbf{Set}$ a weight
([[def-set-weighted-limit-and-weighted-colimit]]).

If $L$ and $L'$ are weighted limits $\{W,D\}$, with counit cylinders $\kappa$
and $\kappa'$, there is exactly one isomorphism $i:L\to L'$ satisfying
$\kappa'_j(w)\circ i=\kappa_j(w)$ for every object $j$ of $\mathcal J$ and every
$w\in W(j)$.

Dually, for a weight $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$, any two
weighted colimits $W\star D$ are joined by exactly one isomorphism commuting
with the components of their counit cylinders.

## Facts & Assumptions

**Given:** A small $\mathcal J$, a locally small $\mathcal M$, a diagram $D$, a weight $W$, and two weighted limits, respectively two weighted colimits, of that data.

[F1] A weighted limit $\{W,D\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, the counit cylinder being the natural transformation corresponding to the identity; dually for a weighted colimit ([[def-set-weighted-limit-and-weighted-colimit]]).

[F3] A presheaf $P$ is contravariantly representable when there is an object $R$ and a natural isomorphism $\theta:\mathcal C(-,R)\Rightarrow P$; The pair $(R,\theta)$ is a **representation** of $F$, and $R$ is a representing object, with the covariant case using $\mathcal C(R,-)$ ([[def-presheaf-representable-functor-and-representation]]).

[F2] A universal element of a presheaf $P$ is a pair $(R,u)$ with $u\in P(R)$ such that the maps $\theta^u_c:\mathcal C(c,R)\longrightarrow P(c),\qquad \theta^u_c(f)=P(f)(u)$ are the components of a natural isomorphism; for a covariant $F$ the maps are $\theta^u_c(f)=F(f)(u)$ on $\mathcal C(R,c)$. A universal element is therefore a representation whose isomorphism is named by a distinguished element ([[def-universal-element]]).

[L1] If a presheaf $P$ has universal elements $(R,u)$ and $(R',u')$, There is a unique isomorphism $i:R\to R'$ satisfying $P(i)(u')=u$; the covariant clause is the same statement with $F(i)(u)=u'$ ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Write $\Phi(m):=[\mathcal J,\mathbf{Set}](W,\mathcal M(m,D-))$, a presheaf on $\mathcal M$. By [F1] a weighted limit is exactly a representing object for $\Phi$ in the contravariant sense of [F3], so the data "$L$ is a weighted limit" and "$L$ represents $\Phi$" are the same data. [F1, F3]

2.1 The counit cylinder is the universal element of that representation: under the representing isomorphism $\theta:\mathcal M(-,L)\Rightarrow\Phi$, the element $\kappa:=\theta_L(1_L)$ lies in $\Phi(L)$ and satisfies $\theta_m(h)=\Phi(h)(\kappa)$ for every $h:m\to L$, which is the display of [F2]; conversely a universal element determines the representing isomorphism by that same formula. Componentwise $\Phi(h)(\kappa)_j(w)=\kappa_j(w)\circ h$, so the equation of the Statement, $\kappa'_j(w)\circ i=\kappa_j(w)$, is exactly $\Phi(i)(\kappa')=\kappa$. This identification is the whole content of the theorem. [F1, F2, F3, step 1.1]

3.1 By [L1] applied to $\Phi$ with the two universal elements $\kappa$ and $\kappa'$, there is exactly one isomorphism $i:L\to L'$ with $\Phi(i)(\kappa')=\kappa$; by step 2.1 that is exactly one isomorphism with $\kappa'_j(w)\circ i=\kappa_j(w)$ for every $j$ and every $w$. [L1, step 2.1]

4.1 For weighted colimits the represented functor $m\mapsto[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(D-,m))$ is covariant in $m$, so steps 1.1 to 3.1 run with the covariant halves of [F2], [F3] and [L1] in place of the contravariant ones, and give exactly one isomorphism between two weighted colimits commuting with every component of the counit cylinders. [L1, step 3.1] ∎

## Remarks

A weighted limit is not merely *like* a representing object; by the definition in force here it **is** one, and every property of representations transfers without a separate argument. What has to be said explicitly is only which element of the represented set is the universal one, and that is the counit cylinder.

Uniqueness is up to a unique **compatible** isomorphism. Two weighted limits of the same data are isomorphic in many ways in general; exactly one of those isomorphisms respects the counit cylinders, and it is that one the statement produces.
