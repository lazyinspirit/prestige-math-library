---
id: prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle
kind: proposition
title: Translations are diffeomorphisms and their differentials trivialize the tangent bundle
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-left-and-right-translations-on-a-lie-group", "thm-the-global-differential-of-a-smooth-map-is-smooth", "cor-the-differential-of-a-diffeomorphism-is-an-isomorphism", "prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 2.27 and proof, printed pages 21–22
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For every $g$ in a Lie group $G$, the maps
$L_g$ and $R_g$ are diffeomorphisms with respective inverses $L_{g^{-1}}$ and
$R_{g^{-1}}$. Moreover,

$$\Phi_L:G\times T_eG\longrightarrow TG,\qquad \Phi_L(g,X)=d(L_g)_eX,$$

and

$$\Phi_R:G\times T_eG\longrightarrow TG,\qquad \Phi_R(g,X)=d(R_g)_eX,$$

are smooth vector-bundle isomorphisms over $\operatorname{id}_G$.

The countable-choice assumption is used exactly through the supplied theorem
that equips tangent bundles and global differentials with their smooth
structures.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ with identity $e$, and
$g\in G$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Left and right translations are $L_g(h)=gh$ and $R_g(h)=hg$, and both
are smooth. [[def-left-and-right-translations-on-a-lie-group]].

[F3] Assuming $\mathrm{AC}_\omega$, the global differential of a smooth map
is smooth between the canonical smooth tangent bundles. [[thm-the-global-differential-of-a-smooth-map-is-smooth]].

[F4] The differential of a diffeomorphism is a linear isomorphism on every
tangent space. [[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]].

[F5] A fibrewise bijective smooth bundle map over a diffeomorphism is a
vector-bundle isomorphism. [[prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]].

## Proof

**Proof technique:** direct.

1.1 The group laws give $L_g\circ L_{g^{-1}}=L_{g^{-1}}\circ L_g=\operatorname{id}_G$ and $R_g\circ R_{g^{-1}}=R_{g^{-1}}\circ R_g=\operatorname{id}_G$. All four translations are smooth by [F2], so $L_g$ and $R_g$ are diffeomorphisms with the asserted inverses. [F2, algebra]

1.2 Let $m:G\times G\to G$ be multiplication. Near an arbitrary $g_0$, choose product coordinates in which $m$ is represented by a smooth map $\mu(a,b)$. The local matrix of $d(L_g)_e$ is the second-variable Jacobian $D_2\mu(a,b_e)$, whose entries are smooth in $a$. Equivalently, this is the restriction of the smooth global differential $dm$ supplied by [F3]. Therefore $\Phi_L$ is a smooth bundle map. The same calculation with the variables reversed gives smoothness of $\Phi_R$. [F1, F2, F3, algebra]

2.1 By [F4] and step 1.1, each fibre map $d(L_g)_e:T_eG\to T_gG$ and $d(R_g)_e:T_eG\to T_gG$ is a linear isomorphism. Hence $\Phi_L$ and $\Phi_R$ are fibrewise linear bijections over $\operatorname{id}_G$. [F4, step 1.1]

3.1 Apply [F5] to the smooth fibrewise bijections from steps 2.1 and 1.2 over $\operatorname{id}_G$. Both $\Phi_L$ and $\Phi_R$ are vector-bundle isomorphisms. Fibrewise, their inverses are $(g,V)\mapsto(g,d(L_{g^{-1}})_gV)$ and $(g,V)\mapsto(g,d(R_{g^{-1}})_gV)$, respectively. [F5, step 1.1, step 2.1, step 1.2]

4.1 A Lie group is nonempty. If $\dim G=0$, all tangent fibres are zero spaces and the displayed maps are the unique fibre maps; if $\dim G=1$, the same proof applies. No metric or nondegeneracy condition occurs, and the group is boundaryless by the page convention. The only choice assumption is the stated $\mathrm{AC}_\omega$, used through [F3] for the canonical smooth tangent bundles/global differential; all group operations and local computations are supplied or pointwise and add no choice. The item asserts explicit inverse identities but no biconditional. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 1.2, step 3.1] ∎
