---
id: thm-brauer-second-main-theorem
kind: theorem
title: Brauer's Second Main Theorem
status: draft
origin: pipeline
deps: [thm-generalized-decomposition-numbers-exist-and-are-unique, def-brauer-subsection, lem-local-block-projection-controls-generalized-decomposition-support, thm-blocks-partition-ordinary-and-brauer-irreducible-characters, prop-decomposition-matrix-is-block-diagonal-after-block-ordering, thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions, def-algebraically-closed-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Theorems 1.19 and 2.22, pp. 14 and 29–30"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Meierfrankenfeld, MTH 912 Class Notes, Theorem 6.7.15 and Corollary 6.7.16, pp. 169–171"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Theorems 5.4–5.5, pp. 276–278"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for a finite group $G$, with $k$ algebraically closed.
Let $B$ be a block of $kG$, let
$\chi\in\operatorname{Irr}_K(G,B)$, let $u$ be a $p$-element, and put
$H=C_G(u)$. If $c$ is a block of $kH$ and
$\varphi\in\operatorname{IBr}(H,c)$, then
$$  d^u_{\chi,\varphi}\ne0\quad\Longrightarrow\quad c^G=B.$$
Equivalently, for every $p$-regular $v\in H$,
$$ \chi(uv)= \sum_{\substack{c\text{ a block of }kH\\c^G=B}} \ \sum_{\varphi\in\operatorname{IBr}(H,c)} d^u_{\chi,\varphi}\varphi(v).$$

## Facts & Assumptions

**Given:** AC and the modular system, block, character, $p$-element, local
block, and Brauer character in the Statement.

[F1] Generalized decomposition numbers give the unique full expansion of
$v\mapsto\chi(uv)$ on the $p$-regular elements of $H$
([[thm-generalized-decomposition-numbers-exist-and-are-unique]]).

[F2] The induced local block $c^G$ is defined by the subsection convention
([[def-brauer-subsection]]).

[F3] If $c^G\ne B$, the lifted $c$-component $\chi_c$ of the restricted
character vanishes at every $uv$ under the algebraically closed residue-field
hypothesis ([[lem-local-block-projection-controls-generalized-decomposition-support]]
and [[def-algebraically-closed-field]]).

[F4] Ordinary and Brauer irreducibles lie in unique blocks, and ordinary
decomposition numbers between distinct blocks are zero
([[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]] and
[[prop-decomposition-matrix-is-block-diagonal-after-block-ordering]]).

[F5] The irreducible Brauer characters of $H$ are linearly independent on
its $p$-regular elements
([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

[F6] AC is available ([[def-axiom-of-choice]]) and is used through the
AC-stated subsection and local-projection suppliers F2–F3. The basis
partition and all sums below are finite.

## Proof

1.1 Write the ordinary restriction as $$ \operatorname{Res}_H^G\chi =\sum_{\zeta\in\operatorname{Irr}_K(H)}n_{\chi,\zeta}\zeta. $$ For a block $c$ of $kH$, its lifted idempotent selects exactly the ordinary constituents in $c$, so $$ \chi_c(uv)= \sum_{\zeta\in\operatorname{Irr}_K(H,c)} n_{\chi,\zeta}\lambda_{u,\zeta}\zeta(v). $$ On $p$-regular $v$, expand each $\zeta(v)$ by ordinary decomposition numbers. F4 deletes all terms outside the block $c$. Conversely, in the defining formula for $d^u_{\chi,\varphi}$ with $\varphi\in\operatorname{IBr}(H,c)$, F4 deletes every $\zeta$ outside $c$. Therefore $$ \chi_c(uv)= \sum_{\varphi\in\operatorname{IBr}(H,c)} d^u_{\chi,\varphi}\varphi(v) $$ for every $p$-regular $v\in H$. [F1, F4, algebra]

2.1 Suppose $c^G\ne B$. F3 makes the left side of the last display zero for every $p$-regular $v$. Linear independence in F5 then gives $d^u_{\chi,\varphi}=0$ for every $\varphi\in\operatorname{IBr}(H,c)$. The contrapositive is the asserted support implication. [F3, F5, F6, step 1.1]

3.1 F1 gives the full expansion $$ \chi(uv)=\sum_{c} \sum_{\varphi\in\operatorname{IBr}(H,c)} d^u_{\chi,\varphi}\varphi(v), $$ where F4 partitions the Brauer basis by its unique blocks. Step 2.1 deletes exactly the summands with $c^G\ne B$ and proves the displayed restricted formula in the Statement. Conversely, if that restricted formula holds, subtracting it from F1's full expansion and applying F5 block by block forces every coefficient in a noninducing block to be zero, recovering the support implication. [F1, F2, F4, F5, step 2.1]

4.1 When $u=1$, one has $H=G$, $c^G=c$, and $d^1_{\chi,\varphi}=d_{\chi,\varphi}$; the theorem becomes ordinary block diagonality from F4. Empty local Brauer-character sets contribute empty sums, and no converse asserting that a permitted coefficient is nonzero has been used. Algebraic closedness and AC enter exactly through F2–F3. [F1, F2, F4, F6] ∎

