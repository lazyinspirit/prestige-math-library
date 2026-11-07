---
dependency_level: 7
id: lem-deligne-finite-torsor-character-line-construction
kind: lemma
title: "Character lines from a specified finite etale torsor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-small-etale-site-of-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Section2.3 Kummer construction; finite torsor descent supplied directly, no general boundary theorem"
---

## Statement

Let $Y\to X$ be a finite etale right torsor under a finite group $D$. Let $O$ be a complete discrete valuation ring with fraction field $E$ of characteristic zero, uniformizer $\varpi$, and finite residue field of characteristic $\ell$. Fix a character $\chi:D\to O^\times$. For an etale object $T\to X$, let $P_n(T)$ be the locally constant functions $Y\times_XT\to O/\varpi^n$, and let
$$L_n(T)=\{f\in P_n(T):f(y g)=\chi(g)^{-1}f(y)\text{ for all }g\in D\}.$$
These define sheaves, form a compatible rank-one finite-free lisse $O$-system, and rationalize to a rank-one lisse $E$-sheaf. Its embedding in $P_E=(P_n)_n\otimes_O E$ is split by the character projector. If a $D$-equivariant automorphism $F$ of a geometric torsor fiber sends $y$ to $ya$, and the action on functions is $(Ff)(y)=f(F^{-1}y)$, then its action on this line is multiplication by $\chi(a)$. All eigenvalues obtained this way are roots of unity. This construction makes no assertion about extending the system across a ramified boundary.

## Facts & Assumptions

**Given:** The specified torsor, coefficient ring and character, and for the last assertion the specified fiber automorphism and action convention.

[F1] Etale objects and their covering families are the objects of the small etale site. [[def-small-etale-site-of-a-scheme]]

[F2] A finite-free lisse adic system is specified level by level with compatible quotient reductions; it need not be a discrete rational local system. [[def-lisse-l-adic-sheaf-on-a-scheme]]

## Proof

1.1 Locally constant functions with values in a fixed finite discrete module are a sheaf for etale covers: matching functions agree on overlaps and glue to a unique function, and local constancy can be checked on the covering objects. The equations defining $L_n$ commute with restrictions. A matching family satisfying those equations glues to a function satisfying the same equations, so $L_n$ is a subsheaf of $P_n$. This proves the sheaf claim directly on [F1]; it does not use the topological-space direct-image definition for an etale-site operation. [given, F1, algebra]

2.1 On the torsor cover $Y\to X$, the fiber product $Y\times_XY$ is $Y\times D$. Choose the sheet indexed by the identity on this one specified cover. A function satisfying the equivariance rule is determined by its value there, and any value extends uniquely by $f(g)=\chi(g)^{-1}f(1)$. Thus $L_n$ becomes the constant free rank-one module on this cover. Reduction modulo $\varpi^n$ is reduction of that single value, so the system has the required compatible quotient reductions. This proves its lissity and rank by [F2], without dividing by $|D|$ at the integral levels, even when $\ell$ divides $|D|$. [given, F2, step 1.1, construct]

3.1 On $P_E$, let $T_gf(y)=f(yg)$ and define $e_\chi=|D|^{-1}\sum_{g\in D}\chi(g)T_g$. Reindexing the sum shows $T_h e_\chi=\chi(h)^{-1}e_\chi$. Conversely, if $f$ satisfies that transformation rule then $e_\chi f=f$. Hence $e_\chi$ is a projection with image the rationalized character line. The operator is rational because $|D|$ is invertible in $E$; the integral lattice is the one already explicitly constructed in step 2.1. [given, step 2.1, algebra]

4.1 On the indicated geometric fiber, $F^{-1}y=ya^{-1}$. The equivariance rule gives $(Ff)(y)=f(ya^{-1})=\chi(a)f(y)$. Evaluation at $y$ identifies the line with $E$, proving the eigenvalue formula. Since $a$ has finite order, $\chi(a)$ is a root of unity, and every complex embedding sends it to absolute value one. The trivial character and $|D|=1$ are included; the torsor has a nonempty fiber by hypothesis. [given, step 2.1, algebra] ∎
