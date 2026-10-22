---
id: thm-jointly-invariant-jordan-domains-give-discrete-kleinian-hnn-extensions
kind: theorem
title: Jointly invariant Jordan domains give discrete Kleinian HNN extensions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-hnn-extension-and-stable-letter
  - def-hnn-word-pin-and-britton-reduced-word
  - lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word
  - def-cyclically-britton-reduced-hnn-word
  - thm-mobius-group-and-projective-linear-identification
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Liulan Li, Ken'ichi Ohshika and Xiantao Wang, On Klein–Maskit combination theorem in space II
      url: https://www.jstage.jst.go.jp/article/kodaimath/38/1/38_1/_pdf
      locator: Full 22-page article read, especially Section 2.3 and Theorem 3.1(1)–(2), whose omitted algebraic and discreteness arguments are supplied below with boundary contacts allowed
    - title: Liulan Li, Ken'ichi Ohshika and Xiantao Wang, On Klein–Maskit combination theorem in space I
      url: https://ir.library.osaka-u.ac.jp/repo/ouka/all/5261/ojm46_04_1097.pdf
      locator: Actual published article printed pp. 1097–1124 read, including proper-interaction arguments and Theorem 4.2(1)–(2); the proof below is for the HNN setting
---

## Statement

Assume AC. Let $G_0\le\mathrm{PSL}_2(\mathbb C)$ be discrete, and let $J_1,J_2\le G_0$. Supply two closed Jordan balls $B_1,B_2\subset\widehat{\mathbb C}$, with interiors $U_1,U_2$, whose interiors are disjoint. They may meet on their boundaries. Assume the open pair is jointly precisely invariant: $J_i$ preserves $U_i$, $gU_i\cap U_i=\varnothing$ for $g\in G_0\setminus J_i$, and $gU_i\cap U_{3-i}=\varnothing$ for every $g\in G_0$ and $i=1,2$. Let $f\in\mathrm{PSL}_2(\mathbb C)$ satisfy
$$f(\widehat{\mathbb C}\setminus B_1)=U_2,\qquad fJ_1f^{-1}=J_2.$$
Assume the actual proper gap
$$A_0=\widehat{\mathbb C}\setminus\bigcup_{g\in G_0}g(B_1\cup B_2)$$
is nonempty. It is not required to have interior or to lie in the domain of discontinuity.

Then the natural homomorphism
$$\left\langle G_0,t\mid tjt^{-1}=fjf^{-1}\ (j\in J_1)\right\rangle\longrightarrow G=\langle G_0,f\rangle,\qquad t\longmapsto f,$$
is an isomorphism, and $G$ is discrete. Moreover $A_0$ is precisely invariant under $G_0$ in $G$. Every finite-order element of $G$ is conjugate into $G_0$. In particular torsion-freeness, or any bound on the orders of torsion elements, passes from $G_0$ to $G$.

The conclusion includes elementary base groups and boundary contacts supporting new parabolics or enlarged parabolic stabilizers. No geometrical finiteness, conical-limit classification, cusp-rank preservation, finite generation or finite-sided-polyhedron assumption is used. The assertion is the algebraic and discreteness part of a combination theorem; it does not assert geometrical finiteness of the output.

## Facts & Assumptions

**Given:** AC, the discrete base group, the two associated subgroups, the closed Jordan balls and their full joint open invariance, the side pairing and nonempty proper gap specified in the Statement.

[A1] Full AC is [[def-axiom-of-choice]]. It permits the choice of a sequence approaching identity if a subgroup is not discrete.

[F1] The HNN relative presentation and its elementary pin reductions use $tJ_1t^{-1}=J_2$. A word $g_0t^{\varepsilon_1}g_1\cdots t^{\varepsilon_n}g_n$, $\varepsilon_i\in\{1,-1\}$, is reduced when no consecutive opposite stable letters enclose an element of the subgroup making that pin. Every word can be reduced by finitely many such substitutions, each removing two stable letters. Every conjugacy class has a cyclically reduced representative, and in a positive-length cyclically reduced word all positive powers remain reduced. [[def-hnn-extension-and-stable-letter]], [[def-hnn-word-pin-and-britton-reduced-word]], [[lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word]], [[def-cyclically-britton-reduced-hnn-word]]

[F2] Fractional linear maps form the projective linear group, with the usual sphere action. [[thm-mobius-group-and-projective-linear-identification]]

## Proof

1.1 The pair's open invariance also controls contacts with closed balls. An open set disjoint from $U_i$ is disjoint from $B_i$: every boundary point of a closed Jordan ball is a limit of its interior, so no open neighborhood of that point can avoid the interior. Consequently $gU_i\subset\widehat{\mathbb C}\setminus B_{3-i}$ for every $g\in G_0$, and $gU_i\subset\widehat{\mathbb C}\setminus B_i$ when $g\notin J_i$. Preservation of $U_i$ by $J_i$ preserves its closure $B_i$. The side-pairing identity, taking complements and then interiors under the homeomorphism $f$, also gives $f(U_1)=\widehat{\mathbb C}\setminus B_2$ and $f^{-1}(\widehat{\mathbb C}\setminus B_2)=U_1$. The gap $A_0$ is $G_0$-invariant and lies outside both closed balls. Therefore $f(A_0)\subset U_2$ and $f^{-1}(A_0)\subset U_1$. Fix one point $a\in A_0$. No step requires $a$ to have an open gap neighborhood. [A1, F2, given, construct, algebra]

2.1 We prove the reduced-word interaction explicitly. Put $i(+1)=2$ and $i(-1)=1$. Let $w=g_0f^{\varepsilon_1}g_1\cdots f^{\varepsilon_n}g_n$ be the image of a reduced word with $n\ge1$. Then $$w(U_{i(\varepsilon_n)})\subset g_0U_{i(\varepsilon_1)},\qquad w(A_0)\subset g_0U_{i(\varepsilon_1)}.$$ For the rightmost stable letter, $g_nU_{i(\varepsilon_n)}$ lies outside the opposite closed ball by step 1.1, so $f^{\varepsilon_n}$ sends it into $U_{i(\varepsilon_n)}$; $g_nA_0=A_0$ gives the same assertion for the gap. Induct from right to left. If consecutive signs agree, the intermediate $G_0$ image of the current open ball avoids the opposite closed ball by joint invariance and step 1.1, so the next stable letter puts it in its prescribed output ball. If the signs differ, reducedness says exactly that the intervening $g_j$ lies outside the stabilizer of the current ball: for a substring $f g_j f^{-1}$ this is $g_j\notin J_1$, and for $f^{-1}g_j f$ it is $g_j\notin J_2$. Its image is then outside that closed ball as well, so the same conclusion follows. This completes the induction, including every sign pattern, without an unstated normal-form ping-pong lemma. [F1, step 1.1, given, algebra]

3.1 No such positive-length reduced word can act as the identity. Write $j=i(\varepsilon_n)$ and $i=i(\varepsilon_1)$. If $i\ne j$, or if $i=j$ and $g_0\notin J_i$, joint invariance says $g_0U_i\cap U_j=\varnothing$. The first inclusion of step 2.1 immediately excludes the identity. In the remaining case $i=j$ and $g_0\in J_i$, the relation $fJ_1f^{-1}=J_2$ writes $g_0f^{\varepsilon_1}=f^{\varepsilon_1}h$ for some $h\in G_0$. The suffix $g_1f^{\varepsilon_2}\cdots f^{\varepsilon_n}g_n(U_j)$ is contained in $G_0(U_1\cup U_2)$ by the same induction when $n>1$, and is $g_1U_j$ when $n=1$. In either case it is disjoint from $A_0$. Since $hA_0=A_0$, the point $p=f^{\varepsilon_1}(a)\in U_i=U_j$ is not in $w(U_j)$. Indeed its inverse under the initial map $g_0f^{\varepsilon_1}$ is $h^{-1}a\in A_0$, excluded from that suffix image. Thus $w$ omits a point of its claimed identity image $U_j$, again excluding the identity. Every relative-presentation word has a reduced representative by the finite substitutions in [F1]. If its actual matrix image is identity, the preceding argument forces stable length zero, and its remaining base element is identity in the given faithful group $G_0$. It is therefore identity in the relative presentation. The natural homomorphism is injective, and surjectivity is its definition. This proves the full asserted HNN isomorphism. In particular no nonzero power of the new stable letter belongs to $G_0$; otherwise its product with a base element would be a positive-length reduced word with identity image. [F1, step 1.1, step 2.1, algebra]

4.1 Suppose $G$ were not discrete in $\mathrm{PSL}_2(\mathbb C)$. Its finite-dimensional matrix topology has a countable neighborhood base at identity; using [A1] choose distinct nonidentity elements $w_k\to1$. Only finitely many of this convergent sequence can lie in $G_0$, since that subgroup is discrete; discard them. Reduce their HNN representatives and choose a subsequence for which their first and last stable-letter signs are fixed. The corresponding indices $i,j$ of step 3.1 are therefore fixed. Matrix convergence implies uniform convergence of these sphere maps and their inverses to identity. To see this directly, represent matrices near identity by determinant-one lifts near $I$; on normalized nonzero vectors in $\mathbb C^2$, the projective action is uniformly continuous jointly in the matrix and vector, and inversion is continuous by the two-by-two adjugate formula. If $g_{0,k}U_i$ were disjoint from $U_j$, step 2.1 would make $w_k(U_j)$ disjoint from $U_j$, impossible for late $k$: a fixed point $x\in U_j$ has $w_k(x)\to x$ in that open set. Hence for every sufficiently late $k$, joint invariance forces $i=j$ and $g_{0,k}\in J_i$. Step 3.1 then supplies the same omitted point $p=f^{\varepsilon_1}(a)\in U_j$ for all $k$, independently of their changing base coefficients and stable lengths. But $w_k^{-1}(p)\to p\in U_j$, so eventually $p\in w_k(U_j)$, contradicting its omission. Thus $G$ is discrete. This proves discreteness even when the proper gap consists entirely of limit points and has no interior. [A1, F2, step 2.1, step 3.1, construct, algebra]

5.1 For $w\in G\setminus G_0$, its reduced representative has positive stable length by step 3.1. The second inclusion of step 2.1 puts $w(A_0)$ inside a $G_0$-translate of one of the open balls, which is disjoint from $A_0$ by its defining complement. Elements of $G_0$ preserve $A_0$ by step 1.1. This is precisely its asserted invariance under $G_0$ in $G$. Finally, by [F1] conjugate any finite-order element to a cyclically reduced word. If this has positive stable length, every positive power is reduced of positive stable length, so step 3.1 says no such power is identity. This contradicts finite order. The cyclically reduced representative therefore lies in $G_0$. Conjugacy preserves order, proving both the torsion-free and bounded-order consequences. No assertion about the boundedness of output parabolic limit points or convex-neighborhood volume was used in this reasoning. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
## Actual source reading and remaining geometric clauses

The actual full 22-page published Space II paper was read, including all proofs, applications and references, from the official J-STAGE PDF, raw SHA256 5a067d9a2b712dccfdb548519bdba8782c7bbcc2ffc37b12045abda3c70a26fd. It refers the proofs of Theorem 3.1(1)–(8) to Space I and Maskit's book. The actual published Space I PDF has one repository cover followed by 45 article pages; its raw hash is 9a90e6bb93ea5d579c5a2cb62fdb2341539e4542a3ae4d9f03ee63c962b0b873. Its PDF pp. 2–29, printed pp. 1097–1124, were read through fresh pagewise OCR. The older 39-page arXiv preprint has a different strong-block interface; reading its pages is not counted as reading the corresponding published pages. The algebraic suppliers and projective group identification were read in full.

The actual missing HNN algebraic and discreteness clauses are proved here, including the fixed omitted-point argument for sequences whose base prefixes vary. Boundary contacts are retained, so cusp-rank enlargement has not been excluded. The remaining combination clauses—full translated-boundary limit-set structure, conformal quotient gluing and geometrical finiteness with its parabolic strong-block interface—remain separate local proof obligations. This theorem neither cites them as proved nor declares the original generic hyperbolization theorem complete.
