---
id: "thm-weak-embedded-desingularization"
kind: "theorem"
title: "Weak embedded desingularization in characteristic zero"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 16
deps:
  - "def-axiom-of-choice"
  - "def-blowup-scheme-along-ideal"
  - "def-closed-immersion-schemes"
  - "def-embedding-dimension-and-regular-local-ring"
  - "def-exceptional-divisor-blowup"
  - "def-integral-scheme"
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-simple-normal-crossings-divisors"
  - "def-smooth-morphism-schemes"
  - "def-strict-transform-closed-subscheme"
  - "lem-canonical-resolution-commutes-with-ambient-embeddings"
  - "lem-canonical-resolution-over-nonclosed-fields"
  - "lem-canonical-resolution-commutes-with-smooth-morphisms"
  - "thm-principalization-of-ideals"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
      locator: "§4.7, Theorem 4.7.1, pp. 25–26; §4.4 for descent to an arbitrary characteristic-zero ground field"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
      locator: "§13, pp. 386–387 (stop once a strict-transform component is regular and transverse, then continue on the remaining components)"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), inherited from the blowup and canonical-resolution suppliers.

Let $K$ be a field of characteristic zero, $X$ a smooth $K$-scheme of finite type and $Y\subseteq X$ a reduced closed subscheme ([[def-integral-scheme]], [[def-closed-immersion-schemes]]); put $\mathcal I_Y$ for its ideal sheaf.
Then there is a canonical embedded desingularization of $Y$ in $X$: a sequence
$$X=X_0\leftarrow X_1\leftarrow\dots\leftarrow X_r=\widetilde X$$
of blowups of regular centers $C_{i-1}\subseteq X_{i-1}$ such that
(a) the exceptional divisor $E_i$ of the composite has only simple normal crossings and each center has SNC with $E_{i-1}$;
(b) every center $C_i$ is disjoint from the smooth locus $\operatorname{Reg}(Y)\subseteq Y_i$, the strict transform of $Y$ in $X_i$;
(c) the strict transform $\widetilde Y:=Y_r$ is smooth and has only simple normal crossings with the exceptional divisor $E_r$;
(d) the construction is canonical and commutes with smooth morphisms and with embeddings of ambient smooth schemes.
In particular the induced morphism $\widetilde Y\to Y$ is proper and birational on every irreducible component which is an isomorphism over the smooth locus of $Y$.

## Facts & Assumptions

**Given:** A field $K$ of characteristic zero, a smooth finite-type $K$-scheme $X$, a reduced closed subscheme $Y\subseteq X$ with ideal sheaf $\mathcal I_Y$, and the marked ideal $(\mathcal I_Y,\varnothing,1)$, whose support is $Y$.



[F1] Włodarczyk, *Simple Hironaka Resolution*, §4.7, Theorem 4.7.1 (pp. 25–26), together with §4.4 for descent to non-algebraically-closed fields, and Hauser, *The Hironaka Theorem on Resolution of Singularities*, §13 (pp. 386–387): the modified canonical algorithm for a reduced closed subscheme gives conditions (a)–(d), and in fact makes the irreducible strict transforms smooth and disjoint and gives the stronger full-transform factorization. It continues only until a strict-transform component would become the next center; the §4.7 induction shows that component is then regular and transverse to the exceptional divisor, after which the modified procedure ignores it and resolves the remaining components.

[F2] Since a smooth scheme is regular, its irreducible components are disjoint open-and-closed components. The algorithm is applied componentwise; a component contained in $Y$ is smooth and receives the identity sequence.

[F3] [[def-strict-transform-closed-subscheme]], [[def-multiple-test-blowup-and-controlled-transform]]: the strict transform is obtained by saturating the total pullback along exceptional components, while the controlled transform divides the total pullback by the marking at each blow-up. Residual exceptional factors can remain, so the controlled transform need not vanish exactly on the strict transform; the modified algorithm's stopping rule concerns the strict transform itself.


## Proof


1.1 The modified canonical sequence. On each open-and-closed ambient component contained in $Y$, take the identity sequence by [F2]. On the remaining components, use the modified canonical procedure in [F1], not the full support-clearing resolution of $(\mathcal I_Y,1)$. Whenever a strict-transform component would next be chosen as a center, the source induction shows it is already smooth and transverse to the exceptional divisor; the modified rule removes that completed component from the active support and continues on the others. Thus no executed center meets $\operatorname{Reg}(Y)$. By [F3], this stopping rule concerns the strict transform and does not assume that the controlled transform has no exceptional factors. [F1, F2, F3]

2.1 The resulting sequence and its properties. The modified procedure in [F1] terminates with smooth strict transform having SNC with the exceptional divisor; its centers are regular and SNC with the exceptional boundary, and the construction is canonical and commutes with smooth morphisms and ambient embeddings. Since the centers avoid $\operatorname{Reg}(Y)$, the composite is an isomorphism there. A composition of blowups of regular centers is proper and birational, so its restriction induces the stated proper morphism $\widetilde Y\to Y$, birational on each irreducible component. This gives all clauses of the Statement while preserving the source's full-transform strengthening as an additional consequence. [F1, F3, step 1.1] ∎

