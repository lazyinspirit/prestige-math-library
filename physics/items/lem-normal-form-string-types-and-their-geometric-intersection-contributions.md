---
id: lem-normal-form-string-types-and-their-geometric-intersection-contributions
kind: lemma
title: "String types and their contributions to geometric intersection numbers"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-basic-arcs-admissible-curves-and-normal-form
  - lem-geometric-intersection-numbers-are-isotopy-invariants
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Lemma 3.18"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Lemma 3.18 with its outline of proof, printed pp. 29-31; Figures 15-18"
verification:
  precheck: pass
---

## Statement

Assume AC ([[def-axiom-of-choice]]) for the supplied well-definedness and
isotopy invariance of geometric intersection numbers.

Let $c$ be an admissible curve in normal form with respect to a basic system and
the vertical curves, and fix $0\le k\le m$
([[def-basic-arcs-admissible-curves-and-normal-form]]). Then the ordinary
geometric intersection number $I(b_k,c)$ is the sum, over the $k$-strings of
$c$, of the following contributions:

- for $k>0$: a $k$-string of type $\mathrm I$, $\mathrm{II}$, $\mathrm{II}'$ or
  $\mathrm{VI}$ contributes $1$; one of type $\mathrm{III}$ or
  $\mathrm{III}'$ contributes $1/2$; all other types contribute $0$;
- for $k=0$: the types $\mathrm{VII},\mathrm{VIII},\mathrm{IX},\mathrm X,\mathrm{XI}$
  contribute $0,1,1/2,1,1/2$ respectively.

For an integer-indexed family with $k>0$, applying the half twist about $b_k$ to a string type $u$ shifts the type index
by one, $u\mapsto u+1$, so together with the base contributions the table
determines $I(b_k,c)$ completely.

## Facts & Assumptions
**Given:** The standard picture with the basic arcs $b_0,\dots,b_m$, vertical curves $d_0,\dots,d_m$, their regions $D_0,\dots,D_{m+1}$, and the finite list of segment and string types of [[def-basic-arcs-admissible-curves-and-normal-form]]; an admissible curve $c$ in normal form and an index $k$. For $k>0$, let $t_k$ denote the half twist about $b_k$; the nested Dehn twists $\tau_j$ are different maps.

[A1] AC is inherited from the representative-independence and isotopy-invariance supplier in [L2] ([[def-axiom-of-choice]]); the local counting uses only finitely many string models.

[L1] The $k$-strings of $c$ are the connected components of $c\cap(D_k\cup D_{k+1})$, their types are the isotopy classes of Figures 15-18, and, for $k>0$, the $k$-strings of $c$ correspond bijectively to those of $t_k(c)$ after normalizing inside $D_k\cup D_{k+1}$ (Khovanov–Seidel, Proposition 3.17, printed p. 29) ([[def-basic-arcs-admissible-curves-and-normal-form]]).

[L2] Under AC, $I$ is independent of minimal representatives and invariant under the specified isotopies. The arc $b_k$ lies in $D_k\cup D_{k+1}$ and crosses only $d_k$; for $k>0$ both endpoints are marked, while $b_0$ has one boundary endpoint, for which the positive-push convention applies. Every intersection with $b_k$ is assigned to the corresponding $k$-string ([[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]], [[lem-geometric-intersection-numbers-are-isotopy-invariants]]).

[L3] The types and their drawn models are fixed: for $k>0$ one has the families $\mathrm I_u,\mathrm{II}_u,\mathrm{II}'_u,\mathrm{III}_u,\mathrm{III}'_u$ and the exceptional types $\mathrm{IV},\mathrm{IV}',\mathrm V,\mathrm V',\mathrm{VI}$; for $k=m$ the families $\mathrm{II}_u,\mathrm{III}_u$ and the exceptional types $\mathrm V,\mathrm{VI}$; for $k=0$ the five exceptional types $\mathrm{VII},\mathrm{VIII},\mathrm{IX},\mathrm X,\mathrm{XI}$; in the integer-indexed families for $k>0$, the type $u+1$ is obtained from the type $u$ by the half twist about $b_k$ ([[def-basic-arcs-admissible-curves-and-normal-form]]).



## Proof

**Proof technique:** direct.

1.1 *Reduction to the string models.* The fixed basic arc $b_k$ is contained in $D_k\cup D_{k+1}$, with its unique dividing-arc crossing on $d_k$. Use the source's relative minimal-position construction, fixing all $d_i$ for $i\ne k$ SETWISE: remove innermost removable bigons within the two-region union, allowing the string ends to slide along its dividing boundary. The resulting model realizes the source lower bound for every string simultaneously (KS proof of the string-contribution lemma, printed pp. 29–31). For $k=0$, make the prescribed small positive boundary push first; its cyclic endpoint order is unchanged during this local comparison. The weighted intersection count of the resulting minimal model is consequently the sum of the individual model counts, not an alleged additivity of $I$ under arbitrary isotopies. [A1, L1, L2, L3]

2.1 *The contributions of the individual types.* For each of the finite types, the source's Figures 15-18 exhibit the string and its position relative to $b_k$, and the count is a finite local computation: a type $\mathrm I$, $\mathrm{II}$ or $\mathrm{II}'$ string crosses $b_k$ once, while type $\mathrm{VI}$ is the basic arc itself and its minimal push-off has two common marked endpoints, a type $\mathrm{III}$ or $\mathrm{III}'$ string has exactly one marked endpoint in common with $b_k$ and no interior crossing, and the types $\mathrm{IV},\mathrm{IV}',\mathrm V,\mathrm V'$ are disjoint from $b_k$; correspondingly the contributions are $1$, $1/2$ and $0$ by the half-weight convention. For $k=0$ the five exceptional types give the listed values $0,1,1/2,1,1/2$. Each case is a local picture: the explicit isotopy of step 1.1 attains the displayed lower bound because it removes all other intersections with $b_k$. [step 1.1, L2, L3]

3.1 *The shift of the index.* For $k>0$ and an integer-indexed family, [L1] says the half twist $t_k$ maps the set of $k$-strings of $c$ bijectively onto those of $t_k(c)$ and maps the type $u$ to the type $u+1$ by definition of the families [L3]; the contribution table is therefore indexed by the integer $u$ with the fixed base values of step 2.1, and $t_k$ fixes $b_k$ setwise. Simultaneous transport preserves the weighted intersection count, so $I(b_k,t_k(c))=I(b_k,c)$; hence the base values apply to every integer $u$, positive or negative. Summing these values and the exceptional contributions determines $I(b_k,c)$. [step 2.1, L1, L2, L3]

4.1 *Conclusion.* $I(b_k,c)$ is the sum of the contributions of its $k$-strings as displayed, and the type shift by the half twist is $u\mapsto u+1$; AC is inherited only for the supplied well-definedness and isotopy invariance of $I$, while the counts are finite checks in the fixed standard picture. [A1, step 1.1, step 2.1, step 3.1] ∎
