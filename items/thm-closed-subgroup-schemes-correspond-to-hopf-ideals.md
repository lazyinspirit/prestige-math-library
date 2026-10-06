---
id: thm-closed-subgroup-schemes-correspond-to-hopf-ideals
kind: theorem
title: Closed subgroup schemes of an affine group scheme correspond to Hopf ideals
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 4
deps:
  - def-affine-scheme
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-commutative-hopf-algebra-over-a-field
  - def-coordinate-hopf-algebra-of-affine-group-scheme
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - lem-hopf-ideal-kernels-and-quotients
  - lem-quotient-spectrum-map-is-a-closed-immersion
  - thm-affine-closed-immersions-quotient-rings
  - thm-affine-group-schemes-hopf-algebra-antiequivalence
  - thm-affine-scheme-ring-anti-equivalence
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 3 §3(e), Proposition 3.15, printed p. 68 (PDF 79)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 1st lecture, Definition 36 and Proposition 37, printed pp. 11-12; October 3rd lecture, Remark 40, printed p. 12."
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $G$ be an affine group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]) and let $A=\mathcal O(G)$ be its coordinate Hopf algebra ([[def-coordinate-hopf-algebra-of-affine-group-scheme]]). Then $H\mapsto\ker(A\to\mathcal O(H))$ is a bijection from the set of closed subgroup schemes $H\subseteq G$ ([[def-morphism-and-closed-subgroup-scheme]], [[def-closed-immersion-schemes]]) onto the set of Hopf ideals of $A$ ([[lem-hopf-ideal-kernels-and-quotients]]). Its inverse sends a Hopf ideal $\mathfrak a$ to the closed subgroup scheme $\operatorname{Spec}(A/\mathfrak a)\hookrightarrow G$, where $A/\mathfrak a$ carries the quotient Hopf algebra structure. The bijection reverses inclusions: $H_1\subseteq H_2$ if and only if $\ker(A\to\mathcal O(H_1))\supseteq\ker(A\to\mathcal O(H_2))$. The Axiom of Choice is used for the finite-type antiequivalence and to identify every closed subscheme of the affine scheme $G$ with a quotient $\operatorname{Spec}(A/\mathfrak a)$ ([[thm-affine-closed-immersions-quotient-rings]]).

## Facts & Assumptions

[F1] Closed subschemes of $\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, exactly the spectra of quotient rings $\operatorname{Spec}(A/\mathfrak a)$ for ideals $\mathfrak a\subseteq A$, and the quotient map induces the closed immersion; this is the declared use of AC. ([[thm-affine-closed-immersions-quotient-rings]], [[def-axiom-of-choice]], [[def-affine-scheme]])

[F2] The quotient by a Hopf ideal carries the unique Hopf algebra structure making the quotient map a Hopf morphism, and the kernel of a Hopf morphism is a Hopf ideal. ([[lem-hopf-ideal-kernels-and-quotients]], [[def-commutative-hopf-algebra-over-a-field]])

[F3] A surjective ring map induces a closed immersion of affine spectra, and Hopf algebra morphisms between finitely generated commutative Hopf algebras correspond contravariantly to morphisms of affine group schemes. ([[lem-quotient-spectrum-map-is-a-closed-immersion]], [[thm-affine-group-schemes-hopf-algebra-antiequivalence]], [[thm-affine-scheme-ring-anti-equivalence]])

## Proof

**Given:** AC, a field $k$, an affine group scheme $G$ of finite type over $k$ with coordinate Hopf algebra $A=\mathcal O(G)$.

1.1 (From closed subgroups to ideals.) Let $j\colon H\hookrightarrow G$ be a closed subgroup scheme. Since $G=\operatorname{Spec}A$ is affine, [F1] presents the closed subscheme $H$ as $\operatorname{Spec}(A/\mathfrak a)$ for the ideal $\mathfrak a=\ker(A\to\mathcal O(H))$; the inclusion $j$ is a morphism of affine group schemes, so its comorphism $A\to\mathcal O(H)$ is a morphism of Hopf algebras by [[def-coordinate-hopf-algebra-of-affine-group-scheme]], and [F2] makes $\mathfrak a$ a Hopf ideal. [F1, F2, given]

1.2 (From ideals to closed subgroups.) Let $\mathfrak a\subseteq A$ be a Hopf ideal. By [F2] the quotient $A/\mathfrak a$ carries a Hopf algebra structure with $A\to A/\mathfrak a$ a Hopf morphism, and this structure is finitely generated over $k$; by [F3] the spectrum $\operatorname{Spec}(A/\mathfrak a)$ is an affine group scheme of finite type over $k$, the quotient map induces a closed immersion $\operatorname{Spec}(A/\mathfrak a)\hookrightarrow G$, and this closed immersion is a morphism of group schemes. Hence it is a closed subgroup scheme whose associated ideal is $\mathfrak a$. [F2, F3]

2.1 (The assignments are inverse.) Starting from a closed subgroup scheme $H$ with ideal $\mathfrak a=\ker(A\to\mathcal O(H))$ as in step 1.1, the construction of step 1.2 returns the closed subgroup scheme $\operatorname{Spec}(A/\mathfrak a)$; by [F1] the closed immersion $H\hookrightarrow G$ is isomorphic over $G$ to $\operatorname{Spec}(A/\mathfrak a)\hookrightarrow G$, and the group structures correspond because both inclusions are group-scheme morphisms and the structure maps of $A/\mathfrak a$ are the unique ones making $A\to A/\mathfrak a$ a Hopf morphism. Conversely, starting from a Hopf ideal $\mathfrak a$, the kernel of the quotient map $A\to A/\mathfrak a$ is $\mathfrak a$. Hence the two assignments are mutually inverse bijections. [F1, F2, step 1.1, step 1.2]

2.2 (Inclusion reversal.) Let $H_1,H_2$ be closed subgroup schemes with ideals $\mathfrak a_i=\ker(A\to\mathcal O(H_i))$ and identify $\mathcal O(H_i)=A/\mathfrak a_i$ by [F1]. If $H_1\subseteq H_2$, the inclusion factors through $H_2$, so the composite $A\to\mathcal O(H_2)\to\mathcal O(H_1)$ is the quotient map $A\to A/\mathfrak a_1$ and $\mathfrak a_1\supseteq\mathfrak a_2$. Conversely, if $\mathfrak a_2\subseteq\mathfrak a_1$, then the image of $\mathfrak a_1$ under the quotient $A\to A/\mathfrak a_2$ is a Hopf ideal of $A/\mathfrak a_2$ and the quotient map $A/\mathfrak a_2\to A/\mathfrak a_1$ is a Hopf morphism by [F2], so by [F3] it corresponds to a group-scheme morphism $H_1\to H_2$ whose composite with $H_2\hookrightarrow G$ is the inclusion of $H_1$, hence $H_1\subseteq H_2$. [F2, F3, step 1.1, step 1.2]

3.1 (Conclusion and choice.) Steps 2.1 and 2.2 prove the bijection and the reversal of inclusions. AC was used in [F1] to present closed subschemes as quotient spectra and in the finite-type antiequivalence of [F3]. The Hopf-ideal kernel and quotient calculations of [F2] are choice-free. [F1, F2, step 2.1, step 2.2, given] ∎
