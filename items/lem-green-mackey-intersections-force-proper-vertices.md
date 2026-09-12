---
id: lem-green-mackey-intersections-force-proper-vertices
kind: lemma
title: Green mackey intersections force proper vertices
status: published
origin: pipeline
deps: [def-green-exceptional-intersection-families, lem-green-exceptional-family-containment-and-fusion, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-green-vertex-source-existence-and-conjugacy, thm-higman-criterion-for-relative-projectivity, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Statement

Assume AC. Use the finite group $G$, characteristic-$p$ field $k$, $P$, $H$, and $\mathcal X,\mathcal Y,\mathcal Z$ of [[def-green-exceptional-intersection-families]]. All modules are finite dimensional. Then:

(a) If a $kH$-module $U$ is relatively $P$-projective, $\operatorname{Res}_H^G\operatorname{Ind}_H^G U\cong U\oplus E$ with $E$ relatively $\mathcal Y$-projective.

(b) Restriction to $H$ takes relatively $\mathcal X$-projective modules to relatively $\mathcal Y$-projective modules.

(c) If an $H$-module is both relatively $P$-projective and relatively $\mathcal Y$-projective, its induction to $G$ is relatively $\mathcal X$-projective.

Only the $\mathcal X$ intersections necessarily have order less than $|P|$; the $\mathcal Y$ condition excludes the admissible vertices up to $H$-conjugacy.

## Facts & Assumptions

**Given:** These groups, fields and finite-dimensional modules.

[A1] AC ([[def-axiom-of-choice]]) is used through the inherited finite-length argument for Krull–Schmidt.

[F1] Family-projectivity quantifies over indecomposable summands ([[def-green-exceptional-intersection-families]]).

[F2] For subgroups of $P$, $G$-$\mathcal X$ and $H$-$\mathcal Y$ containments are equivalent, $\mathcal X$ members are proper, and admissible vertices avoid $\mathcal Y$ ([[lem-green-exceptional-family-containment-and-fusion]]).

[F3] Mackey, transitivity, split-map preservation, vertex containment and finite summand extraction are supplied by [[lem-relative-projectivity-mackey-intersections-for-finite-modules]].

[F4] Unique finite decompositions allow cancellation and summand extraction ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

[F5] Vertices exist and are conjugate ([[thm-green-vertex-source-existence-and-conjugacy]]).

[F6] Higman's relative trace criterion holds ([[thm-higman-criterion-for-relative-projectivity]]).

## Proof

1.1 If $U$ is relatively $P$-projective, F6 gives $\alpha\in\operatorname{End}_{kP}(U)$ of relative trace $1_U$. In the tensor model the map $u\mapsto\sum_{t\in H/P}t\otimes\alpha(t^{-1}u)$ splits $h\otimes u\mapsto hu$: reindexing the finite cosets proves $H$-linearity, and their composite is the relative trace. Thus with $W=\operatorname{Res}_P^H U$ we have $\operatorname{Ind}_P^H W\cong U\oplus U'$ for a finite-dimensional $U'$. [F6, given]

1.2 Finite indecomposable decomposition and uniqueness make the family predicate closed under finite direct sums and direct summands: decompose each summand, and compare the resulting multisets. In particular, if a module is induced from a subgroup contained in a member of a family, transitivity makes each indecomposable summand relatively projective for that member. These uses of finite-length decomposition inherit AC. [A1, F1, F3, F4]

2.1 Mackey for $\operatorname{Res}_H^G\operatorname{Ind}_P^G W$ splits the identity double coset from the others. The identity term is $\operatorname{Ind}_P^H W$; every remaining term is induced from $H\cap{}^gP$ with $g\notin H$, so their sum $E_0$ is $\mathcal Y$-projective by 1.2. Separately, Mackey for induction from $H$ gives $\operatorname{Res}_H^G\operatorname{Ind}_H^G U\cong U\oplus E$ and the analogous $U'\oplus E'$ decomposition, since the identity double coset contributes exactly the original module. Transitivity and 1.1 now give $U\oplus U'\oplus E\oplus E'\cong U\oplus U'\oplus E_0$. Cancellation by uniqueness in F4 gives $E\oplus E'\cong E_0$. Hence $E$ is $\mathcal Y$-projective. This proves (a), including its complement assertion rather than just containment of $U$. [F1, F3, F4, step 1.1, step 1.2]

2.2 For (b), first take a module relatively projective for $D=P\cap{}^sP$ with $s\notin H$. Use the finite inducing witness supplied in F3 and apply Mackey on restriction. Its terms are induced from subgroups $H\cap{}^tD=H\cap{}^tP\cap{}^{ts}P$. At least one of $t,ts$ lies outside $H$, since otherwise $s=t^{-1}(ts)\in H$. Thus each such subgroup is contained in a member of $\mathcal Y$. Step 1.2 proves the required family-projectivity for the restriction and for its summands. Decompose a general $\mathcal X$-projective module and apply this argument to each indecomposable; this proves (b). [F1, F3, F4, step 1.2]

2.3 For (c), decompose the given $H$-module into indecomposables $V$. Each is relatively $P$-projective, so F3 and F5 let us choose its vertex $Q$ inside $P$. Since $V$ is also $\mathcal Y$-projective, vertex containment gives $Q\leq_H\mathcal Y$. By F2, $Q\leq_G\mathcal X$. Transitivity makes $\operatorname{Ind}_H^G V$ relatively $Q$-projective and hence relatively projective for a member of $\mathcal X$: conjugating the inducing subgroup does not change the induced summand property, as follows also by multiplying its tensor representatives by the conjugator. Step 1.2 and finite additivity prove (c). [F2, F3, F4, F5, step 1.2]

3.1 The last assertion follows from F2; no order bound on $\mathcal Y$ was used. When $H=G$, Mackey has only the identity coset, so $E=0$ in (a). The empty-family predicate holds only for the zero finite-dimensional module, by existence of finite decompositions; hence (b) and (c) also hold. When $P=1$, the normalizer condition forces $H=G$. Zero input modules give zero errors in all three assertions. This finishes the proof under the inherited AC assumption. [F2, F4, step 2.1, step 2.2, step 2.3] QED
