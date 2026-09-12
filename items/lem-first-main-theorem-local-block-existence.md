---
id: lem-first-main-theorem-local-block-existence
kind: lemma
title: A global block of defect D determines a local block of defect D
deps: ["lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection", "thm-maximal-brauer-pairs-exist-and-are-conjugate", "thm-maximal-brauer-pairs-detect-defect-groups", "thm-defect-groups-are-maximal-brauer-support", "lem-block-induction-exists-under-centralizer-containment", "thm-modular-block-central-characters-correspond-to-blocks", "def-brauer-homomorphism-for-a-p-subgroup"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Theorem
        40.4, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
    - title: Craven, The Brauer Correspondence, Theorem 1.12, pp. 9–10
      url: https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Fix a $p$-subgroup $D\le G$ and $N=N_G(D)$. If the block $B=kGf$ has $D$ as a defect group, there is a unique block $b=kNe$ of $kN$ **among the blocks having defect group $D$** that induces to $B$. Its idempotent is $e=\operatorname{Br}_D(f)$. This argument is choice-free.

## Facts & Assumptions

**Given:** A splitting residue field $k$ and the stated global block of defect $D$.

[F1] Normal $p$-subgroups fix central idempotents under Brauer projection by [[lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection]].

[F2] [[thm-maximal-brauer-pairs-exist-and-are-conjugate]] gives a maximal pair and writes the Brauer image as the sum of its distinct normalizer conjugates.

[F3] [[thm-maximal-brauer-pairs-detect-defect-groups]] identifies its subgroup as a defect group.

[F4] [[thm-defect-groups-are-maximal-brauer-support]] gives maximality of nonzero support and containment in conjugate defect groups.

[F5] [[lem-block-induction-exists-under-centralizer-containment]] defines every block induction here and identifies its character by the Brauer projection.

[F6] [[thm-modular-block-central-characters-correspond-to-blocks]] identifies blocks by their central characters.

[F7] [[def-brauer-homomorphism-for-a-p-subgroup]] gives coefficient projection and its identity on centralizing coefficients.

## Proof

1.1 Take a maximal $B$-pair $(P,a)$ from F2. By F3 its subgroup $P$ is a defect group. Apply F4 to $P$ and $D$ in both directions: their orders agree, and $P$ is conjugate to $D$. Conjugate the pair to have subgroup literally $D$. Then F2 gives $e=\operatorname{Br}_D(f)$ as the sum of one $N$-orbit of primitive central idempotents of $kC_G(D)$. It is nonzero, idempotent and $N$-invariant, hence central in $kN$. [F2, F3, F4, algebra]

2.1 Suppose $u$ is a central idempotent of $kN$ beneath $e$. Since $D\trianglelefteq N$, F1 gives $u=\operatorname{Br}_D(u)\in kC_G(D)$. It is central in that algebra, since $C_G(D)\le N$. Thus $u$ is a sum of a subset of the primitive idempotents in step 1.1. Centrality in $kN$ makes this subset $N$-stable, and one transitive orbit has only the empty and whole stable subsets. Hence $u=0$ or $u=e$. So $e$ is primitive in $Z(kN)$ and defines a block $b$. Moreover $\operatorname{Br}_D(e)=e\ne0$. If $S>D$ were a $p$-subgroup of $N$ with $\operatorname{Br}_S(e)\ne0$, F7 and $C_G(S)\subseteq C_G(D)$ would give $\operatorname{Br}_S(f)=\operatorname{Br}_S(e)\ne0$, contradicting F4 for $f$. Therefore F4, now in $N$, proves $D$ is a defect group of $b$. [F1, F4, F7, step 1.1, algebra]

3.1 Since $C_G(D)\le N$, F5 defines $b^G$ and gives $\lambda_{b^G}(f)=\lambda_b(e)=1$. F6 therefore identifies $b^G=B$. Conversely, if a block $c$ of $kN$ **with defect group $D$** induces to $B$, F5 gives $1=\lambda_B(f)=\lambda_c(e)$. Since $e$ is primitive by step 2.1, F6 forces $c=b$. This proves uniqueness in the stated defect-$D$ domain as well as the promised existence. For $D=1$, $N=G$ and the construction gives $e=f$; the same holds whenever $N=G$ by F1. All chosen pairs, subgroups and idempotent subsets lie in finite sets; no AC or stronger restriction-summand theorem was used. [F1, F5, F6, step 1.1, step 2.1, algebra] ∎
