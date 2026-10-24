---
id: ex-p-sections-and-brauer-subsections-in-a-small-finite-group
kind: example
title: p-sections and Brauer subsections in S3
status: published
origin: pipeline
deps: [def-p-section-of-a-p-element, def-brauer-subsection, lem-central-p-subgroups-lie-in-every-block-defect-group, def-brauer-homomorphism-for-a-p-subgroup, thm-defect-groups-are-maximal-brauer-support, prop-principal-block-has-sylow-defect, thm-brauer-first-main-theorem, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Example 4.25 and Theorems 5.1 and 5.4, pp. 274–277"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
    - title: "Craven, The Brauer Correspondence, sections 1.5–1.6, pp. 13–16"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
---

## Example

Assume the Axiom of Choice. Let $G=S_3$, let $p=2$, and work over the
residue field of a splitting $2$-modular system. Fix a transposition
$t=(12)$. Then
$$ S_G(1)=\{1,(123),(132)\}, \qquad S_G(t)=\{(12),(13),(23)\}.$$
Moreover, $C_G(t)=\langle t\rangle\cong C_2$ has a unique block $c$, and
$$c^G=B_0,$$
the principal block of $kS_3$. Thus $(t,c)$ is a $B_0$-subsection and is
not a subsection for the defect-zero block $B_1$. At the identity, $(1,B_0)$
and $(1,B_1)$ are respectively $B_0$- and $B_1$-subsections.

## Facts & Assumptions

**Given:** AC, $S_3$, $p=2$, the transposition, and the splitting system in the Example.

[F1] A $p$-section is determined by the conjugacy class of the unique $p$-part ([[def-p-section-of-a-p-element]]).

[F2] A $B$-subsection uses local-to-global block induction ([[def-brauer-subsection]]).

[F3] The Brauer map is coefficient projection to a centralizer, and its maximal nonzero supports are the defect groups ([[def-brauer-homomorphism-for-a-p-subgroup]] and [[thm-defect-groups-are-maximal-brauer-support]]). The principal block has Sylow defect ([[prop-principal-block-has-sylow-defect]]).

[F4] For a fixed $p$-subgroup $D$, Brauer's First Main Theorem gives a bijection, by block induction, between the blocks of $kN_G(D)$ having defect group $D$ and the blocks of $kG$ having defect group $D$ ([[thm-brauer-first-main-theorem]]).

[F5] A central $p$-subgroup lies in each local defect group ([[lem-central-p-subgroups-lie-in-every-block-defect-group]]). AC is available ([[def-axiom-of-choice]]) and is used through the AC-stated subsection and published block contracts; the calculations below are finite.

## Verification

1.1 The conjugacy classes of $S_3$ are the identity, the three transpositions, and the two $3$-cycles. The identity and $3$-cycles have $2$-part $1$, while the $2$-part of a transposition is the transposition itself. All transpositions are conjugate. F1 therefore gives the two displayed sections, and these exhaust the sections indexed by conjugacy classes of $2$-elements. [F1, algebra]

1.2 Direct commutation shows $C_G(t)=\langle t\rangle$. In characteristic $2$, $$ kC_G(t)\cong k[X]/(X^2-1)=k[X]/((X-1)^2), $$ which is local: its elements $a+b(X-1)$ are units exactly when $a\ne0$. It therefore has one primitive central idempotent and one block $c$, the principal block. The group $D=\langle t\rangle$ is central in itself; F5 puts it in every defect group of $c$, and since it is already the Sylow $2$-subgroup, $D$ is the defect group of $c$. [F5, algebra]

1.3 Put $a=(123)$, $T=(12)+(13)+(23)$, and $C=a+a^2$ in $kG$. The center of $kG$ has basis $1,T,C$, since central coefficients are constant on conjugacy classes. In characteristic $2$ one computes $T^2=1+C$, $C^2=C$, and $TC=0$. Hence for $z=\alpha1+\beta T+\gamma C$ the equation $z^2=z$ forces $\beta=0$ and $\alpha,\gamma\in\{0,1\}$. The only central idempotents are therefore $0,1,e:=1+C$, and $f:=C$; thus $e,f$ are precisely the two block idempotents. The augmentation of $e$ is $1$, so $e$ defines the principal block $B_0$, while $f$ defines $B_1$. F3 gives Sylow defect $D$ for $B_0$. For any nontrivial $2$-subgroup $P$ of $S_3$, one has $C_G(P)=P$ and coefficient projection gives $\operatorname{Br}_P(f)=0$, whereas $\operatorname{Br}_1(f)=f\ne0$; F3 therefore gives defect $1$ for $B_1$. [F3, algebra]

2.1 If an element normalizes $D$, it fixes its unique nonidentity element $t$, and hence centralizes $t$. Thus $N_G(D)=C_G(t)=D$. Step 1.2 says that $c$ has defect $D$, so F4 defines $c^G$ and makes it a global block of defect $D$. Step 1.3 says that $B_0$ is the only such global block, because $B_1$ has defect $1$. Hence $c^G=B_0$. F2 now gives the asserted subsection statements at $t$. [F2, F4, step 1.2, step 1.3]

3.1 For $u=1$, one has $C_G(1)=G$, and induction from $G$ to itself fixes each block. Hence $(1,B_i)$ is a $B_i$-subsection for $i=0,1$. No generalized-decomposition table is being asserted here. AC is used only through F2–F5. [F2, F5, algebra] ∎
