---
id: lem-annihilator-reverses-inclusion-and-double-annihilator-closes
kind: lemma
title: Annihilators reverse inclusions and the double annihilator closes the subgroup
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 18
deps: [def-annihilator-of-a-subgroup, def-axiom-of-choice, def-dependent-choice, def-pontryagin-dual-and-compact-open-topology, def-quotient-group, def-quotient-topology, def-topological-group, lem-continuous-characters-separate-points-of-an-lca-group, lem-dual-homomorphisms-are-continuous-and-functorial, lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca, thm-pontryagin-biduality, thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator, thm-quotient-universal-property, thm-subspace-closure-and-interior]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemma 14.2(ii), printed p. 27: the double annihilator of a closed subgroup equals the subgroup; the closure case and inclusion reversal are proved here.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.13, printed p. 437: the closed-subgroup double-annihilator identity.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group with dual $\widehat G$ and bidual identification $G\cong\widehat{\widehat G}$ of [[thm-pontryagin-biduality]].

(1) If $H\le K\le G$ then $K^\perp\le H^\perp$.

(2) For every subgroup $H\le G$ one has $(H^\perp)^\perp=\overline H$; in particular $H\subseteq(H^\perp)^\perp$ and the double annihilator is closed.

(3) For a closed subgroup $H\le G$ this reads $H^{\perp\perp}=H$.

The same statements hold with the roles of $G$ and $\widehat G$ exchanged, annihilators of subgroups of $\widehat G$ being computed in $\widehat{\widehat G}\cong G$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ with dual $\widehat G$, subgroups $H\le K\le G$, and the annihilator conventions of [[def-annihilator-of-a-subgroup]].

[F1] $H^\perp=\{\gamma\in\widehat G:\gamma(h)=1\text{ for all }h\in H\}$ is a subgroup of $\widehat G$, closed when $H$ is closed, and $(H)^\perp=(\overline H)^\perp$: a continuous character is trivial on $H$ exactly when it is trivial on the closure. For $L\le\widehat G$ the annihilator is $L^\perp=\{x\in G:\lambda(x)=1\text{ for all }\lambda\in L\}$. ([[def-annihilator-of-a-subgroup]])

[F2] For a closed subgroup $H$ of the locally compact Hausdorff abelian group $G$, the quotient $G/H$ is a locally compact Hausdorff abelian group and the pullback $\widehat q$ of the quotient map $q$ is a topological group isomorphism of $\widehat{G/H}$ onto $H^\perp$; a composition of continuous homomorphisms is a continuous homomorphism. ([[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca]], [[thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]], [[def-quotient-group]], [[def-quotient-topology]], [[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-pontryagin-dual-and-compact-open-topology]])

[F3] If $x\ne0$ in a locally compact Hausdorff abelian group then some continuous character takes a value different from $1$ at $x$. ([[lem-continuous-characters-separate-points-of-an-lca-group]])

[F4] The evaluation map $\Phi_G:G\to\widehat{\widehat G}$ is an isomorphism of topological groups, so the roles of $G$ and $\widehat G$ may be exchanged in the annihilator calculus. ([[thm-pontryagin-biduality]])

[F5] $H\subseteq\overline H$ for every subgroup $H\le G$, and every open set containing a point of the closure meets the set. Moreover $\overline H$ is a subgroup: if $a,b\in\overline H$ and $U$ is any open neighbourhood of $a-b$, continuity of subtraction supplies neighbourhoods $A\ni a$, $B\ni b$ with $A-B\subseteq U$; choose $h\in H\cap A$, $k\in H\cap B$, so $h-k\in H\cap U$. Hence $a-b\in\overline H$, and $0\in\overline H$. ([[def-annihilator-of-a-subgroup]], [[thm-subspace-closure-and-interior]], [[def-topological-group]])

## Proof

1.1 Part (1): let $\gamma\in K^\perp$ and $h\in H\le K$; then $\gamma(h)=1$, so $\gamma\in H^\perp$. Hence $K^\perp\le H^\perp$. [F1]

1.2 The inclusion $H\subseteq(H^\perp)^\perp$ always holds: if $h\in H$ then $\gamma(h)=1$ for every $\gamma\in H^\perp$, and this is exactly the defining condition for $h\in(H^\perp)^\perp$. [F1]

1.3 Let $H$ be closed and let $x\notin H$. Then $x+H\ne0$ in the quotient $G/H$, which is a locally compact Hausdorff abelian group by [F2]; so by [F3] there is a character $\chi$ of $G/H$ with $\chi(x+H)\ne1$. Then $\gamma:=\chi\circ q$ is a continuous homomorphism $G\to\mathbb T$, that is $\gamma\in\widehat G$; it satisfies $\gamma(h)=\chi(0+H)=1$ for every $h\in H$, so $\gamma\in H^\perp$, and $\gamma(x)=\chi(x+H)\ne1$, so $x\notin(H^\perp)^\perp$. [F2, F3]

2.1 For closed $H$, step 1.3 shows $(H^\perp)^\perp\subseteq H$, and step 1.2 gives $H\subseteq(H^\perp)^\perp$; hence $(H^\perp)^\perp=H$, which is (3). [step 1.2, step 1.3]

3.1 For an arbitrary subgroup $H\le G$, $H^\perp=(\overline H)^\perp$ by [F1] and $\overline H$ is closed, so step 2.1 applied to $\overline H$ gives $(H^\perp)^\perp=((\overline H)^\perp)^\perp=\overline H$; in particular $H\subseteq(H^\perp)^\perp$ and the double annihilator is closed. This is (2). [F1, F5, step 2.1]

4.1 Statements (1), (2) and (3) are proved in steps 1.1, 3.1 and 2.1. The exchange of roles is legitimate because $\widehat G$ is again a locally compact Hausdorff abelian group and $\Phi_{\widehat G}$ identifies it with the bidual of $\widehat G$ by [F4], so the same three arguments apply with $G$ replaced by $\widehat G$. [F4, step 1.1, step 2.1, step 3.1] ∎