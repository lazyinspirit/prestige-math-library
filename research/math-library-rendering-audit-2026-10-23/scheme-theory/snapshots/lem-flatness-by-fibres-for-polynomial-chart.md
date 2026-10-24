---
id: lem-flatness-by-fibres-for-polynomial-chart
kind: lemma
title: "Flatness over a polynomial chart from base and fibre flatness"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-flatness-criteria-by-injections-and-ideals
  - lem-noetherian-approximation-fp-algebra-module-system
  - lem-eventual-flatness-noetherian-local-approximation
  - lem-noetherian-flatness-by-fibres-finite-target-module
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.128.8 (tag 00R7), critère de platitude par fibres"
      url: https://stacks.math.columbia.edu/tag/00R7
    - title: "The Stacks Project, Algebra, Lemma 10.99.15 (tag 00MP), Noetherian case of the critère de platitude par fibres"
      url: https://stacks.math.columbia.edu/tag/00MP
---

## Statement

Assume the Axiom of Choice (AC). Let $R\to P=R[T_1,\dots,T_d]\to B$ be ring
maps with $B$ a finitely presented $P$-algebra, let $\mathfrak q\subseteq B$ be
a prime, and put $\mathfrak p=R\cap\mathfrak q$ and
$\mathfrak Q=P\cap\mathfrak q$. If $B_{\mathfrak q}$ is flat over
$R_{\mathfrak p}$, and the closed-fibre local algebra
$(B\otimes_R\kappa(\mathfrak p))_{\mathfrak q}$, regarded over
$\kappa(\mathfrak p)[T_1,\dots,T_d]$ at the prime induced by $\mathfrak q$, is
flat there, then $B_{\mathfrak q}$ is flat over $P_{\mathfrak Q}$.

This is the polynomial-chart case of the critère de platitude par fibres for
finitely presented algebras (Stacks Project, Algebra, Lemma 10.128.8, tag
00R7). The Noetherian criterion and the approximation/descent steps used
below are proved in the linked local support items.

## Facts & Assumptions
**Given:** The polynomial chart, prime, and two flatness hypotheses of the Statement.

[F1] AC is the choice-function axiom ([[def-axiom-of-choice]]).

[F2] Flatness is tested by injectivity of $I\otimes M\to M$ for finitely generated ideals $I$; it is preserved by scalar extension and localization ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F3] A finitely presented algebra and module admit a directed system of Noetherian local approximations at contracted primes, with the colimit equal to the given local system and target transitions obtained by localization after scalar extension ([[lem-noetherian-approximation-fp-algebra-module-system]]).

[F4] If a finite module over such a Noetherian local approximation is flat over the colimit base, it becomes flat over one later stage. The proof kills the finite first-Tor obstruction and uses the finite-over-target local criterion ([[lem-eventual-flatness-noetherian-local-approximation]]).

[F5] For local Noetherian maps $R\to S\to S'$ and a finite $S'$-module $M$, flatness of $M$ over $R$ together with flatness of $M/\mathfrak m_RM$ over $S/\mathfrak m_RS$ implies flatness of $M$ over $S$, without requiring $M$ finite over $S$ or $R$ ([[lem-noetherian-flatness-by-fibres-finite-target-module]]).



## Proof

**Proof technique:** prove the Noetherian case, then descend both flatness hypotheses to a common Noetherian stage.

1.1 Localize at the primes in the Statement and write $R'=R_{\mathfrak p}$, $P'=P_{\mathfrak Q}$ and $B'=B_{\mathfrak q}$. The hypotheses say precisely that $B'$ is $R'$-flat and that $B'/\mathfrak pB'$ is flat over $P'/\mathfrak pP'$. The desired conclusion is $P'$-flatness of $B'$. If $B'=0$, this is immediate; henceforth take $B'\ne0$. [F2]

2.1 If $R$ is Noetherian, then $R'$, $P'$ and $B'$ are Noetherian local rings. Apply [F5] to $R'\to P'\to B'$ with the finite $B'$-module $M=B'$. Its base-flatness and closed-fibre flatness are exactly step 1.1, so $B'$ is flat over $P'$. This proves the Noetherian case, including the situation where $B'$ is not a finite $P'$-module. [F5, step 1.1]

2.2 For arbitrary $R$, present the finitely presented composite $R\to B$ and the $B$-module $M=B$ as the localized directed Noetherian system of [F3]. Write its stages $R_i\to P_i\to B_i$ at the contractions of $\mathfrak p,\mathfrak Q,\mathfrak q$, with $P_i$ the localized polynomial algebra and $M_i=B_i$. The colimits are $R'\to P'\to B'$, and each target transition is a localization of scalar extension, exactly as [F3] states. Apply [F4] to $R_i\to B_i$, since $B'$ is flat over $R'$ by step 1.1. After increasing the index, $B_i$ is flat over $R_i$; this flatness persists at every later stage by scalar extension and localization [F2]. [F2, F3, F4, step 1.1]

3.1 Apply [F4] a second time to the closed-fibre system $$\overline P_i=P_i/\mathfrak p_iP_i\longrightarrow\overline B_i=B_i/\mathfrak p_iB_i,$$ where $\mathfrak p_i$ is the maximal ideal of $R_i$. These are Noetherian local maps with finite target modules. Their colimits are $P'/\mathfrak pP'$ and $B'/\mathfrak pB'$, because the compatible ideals $\mathfrak p_i$ have colimit $\mathfrak pR'$. For $i\le j$, the exact tensor identity is $$\overline B_i\otimes_{\overline P_i}\overline P_j\cong B_i\otimes_{P_i}(P_j/\mathfrak p_jP_j)\cong(B_i\otimes_{P_i}P_j)/\mathfrak p_j(B_i\otimes_{P_i}P_j).$$ Localizing at the selected target prime gives $\overline B_j$, since $B_i\otimes_{P_i}P_j\to B_j$ is a localization. The larger ideal $\mathfrak p_j$ is already killed in $\overline P_j$; using only $P_j/\mathfrak p_iP_j$ would be a different base change. Thus the transition has exactly the localization form required by [F4]. The colimit fibre module is flat over the colimit fibre base by step 1.1. Therefore [F4] makes $\overline B_j$ flat over $\overline P_j$ at some stage $j$. Increase $j$ again if necessary to retain the base flatness from step 2.2. [F2, F3, F4, step 1.1, step 2.2]

4.1 At this common Noetherian stage, $B_j$ is flat over $R_j$ and $B_j/\mathfrak p_jB_j$ is flat over $P_j/\mathfrak p_jP_j$. Step 2.1, using [F5], makes $B_j$ flat over $P_j$. Scalar extension and localization [F2] carry this flatness to the colimit $B'$ over $P'$. Step 1.1 identifies this with the required flatness of $B_{\mathfrak q}$ over $P_{\mathfrak Q}$. The zero local algebra case was treated in step 1.1; AC is declared in [F1] and inherited through [F3]–[F5]. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 2.2, step 3.1] ∎
