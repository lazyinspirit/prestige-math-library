---
id: lem-tate-cohomologically-triviality-sylow-criterion
kind: lemma
title: "Sylow criterion for Tate-acyclic finite-group modules"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-tate-cohomology-for-finite-groups
  - def-dependent-choice
  - def-group-cohomology-as-a-derived-functor
  - def-group-homology-as-a-derived-functor
  - def-projective-module
  - def-principal-ideal-domain
  - def-axiom-of-choice
  - thm-long-exact-sequence-in-tate-cohomology
  - thm-shapiro-lemma-for-group-cohomology
  - thm-shapiro-lemma-for-group-homology
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - thm-submodules-of-free-modules-over-a-pid-are-free
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  DC is inherited from the group cohomology and homology conventions. AC is used
  for bases and the PID submodule theorem. No stronger choice principle is
  used by the finite-group transfer and resolution arguments.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Serre, Local Fields, English translation"
      url: "https://ebooks.karbust.me/Mathematics/Jean-Pierre%20Serre%20-%20Local%20Fields%20%281979%29%20%5B978-1-4757-5673-9%5D.pdf"
      locator: "Chapter IX §§1, 3–5, Theorems 4–9, printed pp.138–145."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter II §3, Theorem 3.10 and its proof, printed pp.83–84."
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $G$ be a finite group and let $A$ be a left $G$-module. If $H^1(P;A)=H^2(P;A)=0$ for every Sylow subgroup $P$ of $G$, then $A$ has a projective $\mathbb Z[G]$-resolution of length at most one and $\widehat H^r(H;A)=0$ for every subgroup $H\le G$ and every integer $r$.

## Statement references

[[def-tate-cohomology-for-finite-groups]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Serre, Local Fields, Chapter IX §§1 and 3–5](https://ebooks.karbust.me/Mathematics/Jean-Pierre%20Serre%20-%20Local%20Fields%20%281979%29%20%5B978-1-4757-5673-9%5D.pdf)

[Milne, Class Field Theory, Chapter II §3](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC and DC; a finite group $G$; a left $G$-module $A$; and the stated vanishing on every Sylow subgroup.

[A1] AC supplies bases of vector spaces and the arbitrary-rank PID submodule theorem used below. [[def-axiom-of-choice]] [[thm-submodules-of-free-modules-over-a-pid-are-free]]

[A2] DC is assumed by the derived-functor definitions of group cohomology and group homology. [[def-dependent-choice]] [[def-group-cohomology-as-a-derived-functor]] [[def-group-homology-as-a-derived-functor]]

[F1] Tate cohomology has a long exact sequence for a short exact sequence of modules. [[thm-long-exact-sequence-in-tate-cohomology]]

[F2] Induced modules have zero Tate cohomology in every degree: positive degrees follow from Shapiro for cohomology, negative degrees from Shapiro for homology, and degrees $0,-1$ from the norm and augmentation formulas. [[thm-shapiro-lemma-for-group-cohomology]] [[thm-shapiro-lemma-for-group-homology]] [[def-tate-cohomology-for-finite-groups]]

[F3] Restriction to a Sylow subgroup is injective on the corresponding primary component of positive-degree cohomology, since corestriction after restriction is multiplication by the subgroup index. [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[F4] A subgroup of a free $\mathbb Z$-module is free. [[def-principal-ideal-domain]] [[thm-submodules-of-free-modules-over-a-pid-are-free]]

[F5] A module is projective precisely when the identity map lifts through every epimorphism; in particular, a module is projective if it is a direct summand of a free module. [[def-projective-module]]

## Proof

**Given:** AC and DC; a finite group $G$; a left $G$-module $A$; and the Sylow vanishing hypotheses.

1.1 Let $P$ be a finite $p$-group and let $E$ be an $\mathbb F_p[P]$-module with $\widehat H^r(P;E)=0$ for some $r$. The augmentation ideal $J$ of $\mathbb F_p[P]$ is nilpotent: the center of a nontrivial finite $p$-group has an element $z$ of order $p$, the quotient by $\langle z\rangle$ has smaller order, and induction gives $J^m\subseteq(z-1)\mathbb F_p[P]$ for some $m$; since $(z-1)^p=z^p-1=0$, $J^{mp}=0$. Induced-module dimension shifting moves the vanishing to $\widehat H^{-2}(P;E')=H_1(P;E')=0$ for a module $E'$ obtained from $E$ by successive short exact sequences with induced middle terms. Choose a basis of $E'/JE'$ and lift it to $E'$; the resulting free module $F=\mathbb F_p[P]^{(S)}$ surjects onto $E'$ and induces an isomorphism on coinvariants. In $0\to R\to F\to E'\to0$, the group-homology sequence and $H_1(P;E')=0$ give $H_0(P;R)=0$, so $R=JR=J^{mp}R=0$. Thus $E'$ is free. The group algebra is Frobenius, with the coefficient-of-identity pairing identifying it with its linear dual, so its free modules are injective as well as projective; reversing each induced dimension shift shows that $E$ is projective, hence free over the local ring $\mathbb F_p[P]$. [A2, F1, F2, given, construct]

2.1 Let $B$ be a $\mathbb Z$-free $G$-module whose Tate cohomology vanishes in two consecutive degrees on every Sylow subgroup. For each prime $p$ and Sylow subgroup $P$, the exact coefficient sequence $0\to B\xrightarrow{p}B\to B/pB\to0$ and [F1] give one vanishing Tate group for the $\mathbb F_p[P]$-module $B/pB$. Step 1.1 shows that $B/pB$ is free over $\mathbb F_p[P]$. [A2, F1, step 1.1, given]

2.2 Choose a free $\mathbb Z[G]$-module $L$ mapping onto $B$, and write $N$ for its kernel. By [A1] and [F4], $N$ is $\mathbb Z$-free; since $B$ is $\mathbb Z$-free, $0\to N\to L\to B\to0$ splits as a sequence of abelian groups. Put $M=\operatorname{Hom}_{\mathbb Z}(B,N)$ with its usual conjugation action. For every Sylow $P$, applying $\operatorname{Hom}_{\mathbb Z}(B,-)$ to $0\to N\xrightarrow pN\to N/pN\to0$ gives $0\to M\xrightarrow pM\to\operatorname{Hom}_{\mathbb F_p}(B/pB,N/pN)\to0$. By step 2.1 the last module is coinduced, hence Tate-acyclic by [F2]; [F1] makes multiplication by $p$ an isomorphism on $\widehat H^1(P;M)$. This group is killed by $|P|$ by restriction-corestriction, so it is zero. [A1, A2, F1, F2, F3, F4, step 2.1, construct]

2.3 Applying $G$-invariants to $0\to\operatorname{Hom}_{\mathbb Z}(B,N)\to\operatorname{Hom}_{\mathbb Z}(B,L)\to\operatorname{Hom}_{\mathbb Z}(B,B)\to0$ is exact at the right because $H^1(G;M)=0$: its Sylow-primary components vanish by [F3] and step 2.2. Hence $\operatorname{id}_B$ lifts to a $G$-map $B\to L$. The epimorphism $L\to B$ therefore splits $G$-equivariantly, and [F5] makes $B$ projective over $\mathbb Z[G]$. [F3, F5, step 2.2, construct]

3.1 Choose a free $\mathbb Z[G]$-module $L$ mapping onto the original module $A$, with kernel $B$. By [A1] and [F4], $B$ is $\mathbb Z$-free. For every Sylow $P$, the restriction of $L$ is induced and is Tate-acyclic by [F2]; the long exact sequence [F1] therefore shifts the two consecutive vanishings of $A$ to two consecutive vanishings of $B$. Steps 2.1–2.3 show that $B$ is projective. [A1, A2, F1, F2, F4, step 2.1, step 2.2, step 2.3, construct]

4.1 For any subgroup $H\le G$, the restrictions of $L$ and $B$ to $H$ are projective and Tate-acyclic. The long exact sequence of $0\to B\to L\to A\to0$ then gives $\widehat H^r(H;A)=0$ in every integer degree. This proves the claim. [F1, F2, step 3.1] ∎
