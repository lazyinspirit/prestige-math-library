---
id: lem-noetherian-local-flatness-tor-killing-base-change
kind: lemma
title: A killed first Tor obstruction yields flatness after local Noetherian base change
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-noetherian-local-flatness-criterion-finite-over-target
  - thm-long-exact-tor-sequence-in-the-right-module-variable
  - thm-right-exactness-of-tensor-products
  - thm-localisation-of-modules-is-exact
  - thm-flatness-criteria-by-injections-and-ideals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.99.14 (tag 00MO), Tor-killing base-change criterion"
      url: https://stacks.math.columbia.edu/tag/00MO
    - title: "The Stacks Project, Algebra, Lemma 10.99.12 (tag 00MM), first Tor comparison"
      url: https://stacks.math.columbia.edu/tag/00MM
    - title: "The Stacks Project, Algebra, Lemma 10.99.13 (tag 00MN), second Tor comparison"
      url: https://stacks.math.columbia.edu/tag/00MN
---

## Statement

Assume the Axiom of Choice. Consider a commutative square of local
homomorphisms of Noetherian local rings
$$\begin{array}{ccc}R&\longrightarrow&R'\\ \downarrow&&\downarrow\\ S&\longrightarrow&S'\end{array}$$
such that $S'$ is a localization of $S\otimes_RR'$. Let
$I\subsetneq R$, put $I'=IR'$, let $M$ be a finite $S$-module, and put
$M'=M\otimes_SS'$. Assume $M/IM$ is flat over $R/I$ and the natural
map
$$\operatorname{Tor}_1^R(R/I,M)\longrightarrow\operatorname{Tor}_1^{R'}(R'/I',M')$$
is zero. Then $M'$ is flat over $R'$.

The first Tor group is the kernel of $I\otimes_RM\to M$; thus the
hypothesis says that this original obstruction dies after the indicated
base change. The module $M$ need only be finite over $S$, never over
$R$.

## Facts & Assumptions

**Given:** The local square, localization, ideal, module, and two hypotheses of the Statement.

[F1] The finite-over-target local criterion says that a finite module over a Noetherian local algebra is flat over the base if its closed quotient is flat and $I\otimes M\to M$ is injective ([[lem-noetherian-local-flatness-criterion-finite-over-target]]).

[F2] Tensor is right exact, localization is exact, and first Tor can be computed from a free resolution; in particular $\operatorname{Tor}_1^R(R/I,M)=\ker(I\otimes_RM\to M)$ ([[thm-right-exactness-of-tensor-products]], [[thm-localisation-of-modules-is-exact]], [[thm-long-exact-tor-sequence-in-the-right-module-variable]]). Flatness is preserved by scalar extension and by localization, as follows directly by tensoring injections ([[thm-flatness-criteria-by-injections-and-ideals]]).

## Proof

**Proof technique:** prove the two first-Tor comparison surjections by finite degrees of free resolutions, then apply the local criterion.

1.1 We record the first comparison. For ring maps $A\to B\to C$ and an $A$-module $N$ with $N\otimes_AB$ flat over $B$, the natural map $\operatorname{Tor}_1^A(B,N)\otimes_BC\to \operatorname{Tor}_1^A(C,N)$ is surjective. Choose a free resolution $F_2\to F_1\to F_0\to N\to0$, and put $K_B=\ker(F_1\otimes_AB\to F_0\otimes_AB)$. The sequence $0\to K_B\to F_1\otimes_AB\to F_0\otimes_AB\to N\otimes_AB\to0$ remains exact through $F_1\otimes_AC$ after tensoring with $C$: flatness of $N\otimes_AB$ kills the first Tor obstruction, and the kernel of its free cover is flat by the long exact Tor sequence. Consequently $K_B\otimes_BC$ surjects onto $K_C=\ker(F_1\otimes_AC\to F_0\otimes_AC)$. First Tor is the quotient of these kernels by the image of $F_2$, so the claimed comparison is surjective. [F2]

1.2 We record the second comparison. For $A\to B$, an $A$-module $N$, and an ideal $J\subseteq B$, the natural map $\operatorname{Tor}_1^A(B/J,N)\to \operatorname{Tor}_1^B(B/J,N\otimes_AB)$ is surjective. Use the same free $A$-resolution $F_2\to F_1\to F_0\to N$. After tensoring it with $B$, $F_1\otimes_AB\to F_0\otimes_AB\to N\otimes_AB\to0$ is still exact. Add a free $B$-module in degree $2$ to kill any extra kernel of its degree-one map, obtaining a free $B$-resolution of $N\otimes_AB$ through degree $2$. Upon reducing both complexes modulo $J$, their degree-one cycles are the same, while the $B$-resolution has at least the boundaries from the $A$-resolution. Thus its degree-one homology is a quotient of the latter, proving surjectivity. [F2]

2.1 Put $T=\operatorname{Tor}_1^R(R/I,M)$ and $T'=\operatorname{Tor}_1^{R'}(R'/I',M')$. Apply step 1.1 to $R\to R/I\to R'/I'$; the required flatness of $M\otimes_RR/I=M/IM$ over $R/I$ is a hypothesis. It makes $T\otimes_{R/I}R'/I'\to \operatorname{Tor}_1^R(R'/I',M)$ surjective. Step 1.2, with $A=R$, $B=R'$, $J=I'$, then makes the map from this last Tor group onto $\operatorname{Tor}_1^{R'}(R'/I',M\otimes_RR')$ surjective. Since $M'=M\otimes_SS'$ is a localization of $M\otimes_RR'$ as a module over $S\otimes_RR'$, exact localization of a free $R'$-resolution identifies $T'$ with the corresponding localization of this final Tor group. Hence the natural map from $T$ to $T'$ has image generating $T'$ as an $S'$-module. The assumed zero map therefore forces $T'=0$. [F2, step 1.1, step 1.2]

3.1 The quotient $M'/I'M'$ is a localization of $(M/IM)\otimes_{R/I}(R'/I')$, so it is flat over $R'/I'$ by scalar extension and localization [F2]. The ring $S'$ is Noetherian local and $M'$ is finite over it. By [F2], $T'=0$ means $I'\otimes_{R'}M'\to M'$ is injective. Thus [F1] applies to $R'\to S'$ and $I'$ and gives that $M'$ is flat over $R'$. [F1, F2, step 2.1]

4.1 If $M'=0$, the conclusion is immediate and the same Tor argument still applies. AC is inherited by [F1] and by the use of free resolutions in [F2]; every generator selection in steps 1.1–2.1 is finite at the degree being used. [F1, F2, step 3.1] $\square$
