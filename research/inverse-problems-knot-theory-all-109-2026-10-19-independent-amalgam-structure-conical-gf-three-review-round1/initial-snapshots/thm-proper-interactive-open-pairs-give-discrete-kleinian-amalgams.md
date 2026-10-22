---
id: thm-proper-interactive-open-pairs-give-discrete-kleinian-amalgams
kind: theorem
title: Proper interactive open pairs give discrete Kleinian amalgams
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-free-product-with-amalgamation
  - thm-group-pushout-as-an-amalgamated-quotient
  - thm-mobius-group-and-projective-linear-identification
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Liulan Li, Ken'ichi Ohshika and Xiantao Wang, On Klein–Maskit combination theorem in space I
      url: https://ir.library.osaka-u.ac.jp/repo/ouka/all/5261/ojm46_04_1097.pdf
      locator: Actual published printed pp. 1097–1124 read, especially Section 2.4 and Theorem 4.2(1)–(2); the exact open-pair argument and finite-order clause are proved locally below
---

## Statement

Assume AC. Let $G_1,G_2\le\mathrm{PSL}_2(\mathbb C)$ be discrete, with a common subgroup $J$. Supply disjoint nonempty open sets $U_1,U_2\subset\widehat{\mathbb C}$ such that $J$ preserves each $U_i$, every $g\in G_1\setminus J$ sends $U_1$ into $U_2$, and every $g\in G_2\setminus J$ sends $U_2$ into $U_1$. Assume properness: either
$$U_2\setminus\bigcup_{g\in G_1}gU_1\ne\varnothing\qquad\text{or}\qquad U_1\setminus\bigcup_{g\in G_2}gU_2\ne\varnothing.$$
The displayed difference need not have interior.

Then the natural homomorphism $G_1*_J G_2\to G=\langle G_1,G_2\rangle$ is an isomorphism, $G$ is discrete, and $G_1\cap G_2=J$. Every finite-order element of $G$ is conjugate into one of its two factors. Consequently torsion-freeness, or a common bound on torsion orders, passes from the factors to $G$.

No finite generation, geometrical finiteness, compactness of a conformal boundary, Jordan boundary, separation of boundary contacts or restriction on parabolic ranks is assumed. This is the algebraic and discreteness part of a combination theorem, and does not assert geometrical finiteness of $G$.

## Facts & Assumptions

**Given:** AC, the two discrete groups and their common subgroup, the interactive open pair and its properness in the Statement.

[A1] Full AC is [[def-axiom-of-choice]]. It permits selection of a sequence approaching identity from a nondiscrete subgroup.

[F1] The amalgam is the quotient of the factor free product by the relations identifying the two copies of $J$; its factor-compatible universal property supplies the natural map. In particular its elements are represented by finite factor words. [[def-free-product-with-amalgamation]], [[thm-group-pushout-as-an-amalgamated-quotient]]

[F2] Fractional linear maps form the projective linear group with its sphere action. [[thm-mobius-group-and-projective-linear-identification]]

## Proof

1.1 Interchanging both indices if needed, assume the first properness alternative and fix $p\in U_2\setminus\bigcup_{g\in G_1}gU_1$. Every finite factor word can be reduced to a single factor element or an alternating product $w=h_n\cdots h_1$ of elements outside $J$. Indeed combine adjacent elements of the same factor; an element in $J$ can be regarded as an element of the neighboring factor and combined with it; each such operation reduces the number of written factor letters. Repeat until none applies. These operations preserve the element in the quotient [F1] and its matrix image. For a nonempty reduced alternating word, if the rightmost factor belongs to $G_i\setminus J$, induction from the right gives $w(U_i)\subset U_{3-i}$ when $n$ is odd and $w(U_i)\subset U_i$ when $n$ is even. At each step the current open set is exactly the one on which the next alternating factor is assumed to send it into the other open set. [A1, F1, given, construct, algebra]

2.1 Odd-length reduced words cannot act as identity, since they send a nonempty open set into its disjoint partner. For even length, first suppose the leftmost factor is in $G_1\setminus J$, so the rightmost is in $G_2\setminus J$. The induction in step 1.1 gives $w(U_2)\subset h_nU_1\subset\bigcup_{g\in G_1}gU_1$, omitting the fixed point $p\in U_2$. Thus this word is not identity either. If the even-length word starts on the left in $G_2$, apply that argument to its inverse, an even-length reduced word starting on the left in $G_1$. A single nontrivial factor element is nonidentity in its given matrix group. Therefore any quotient element with identity matrix image reduces to the trivial factor element, which is identity in the quotient. The natural map in [F1] is injective and is surjective by generation, proving the amalgam assertion without assuming uniqueness of a chosen transversal normal form. If some matrix belonged to both factors outside $J$, its two copies would give an alternating reduced word of length two with identity image, contradicted above. Hence the actual factor intersection is exactly $J$. [F1, step 1.1, algebra]

3.1 If $G$ were nondiscrete, its first-countable matrix topology and [A1] would give distinct nonidentity matrices $w_k\to1$. Since both factors are discrete, eventually no $w_k$ belongs to either factor. Choose reduced representatives. An odd-length representative sends one of the two fixed open sets into its disjoint partner; after passing to one of the two index choices this contradicts $w_kx\to x$ for a fixed point $x$ in that open set. Discard odd lengths. Invert the entire sequence or pass to a subsequence as necessary so the even-length representatives all start on the left in $G_1$. Step 2.1 then says that every $w_k(U_2)$ omits the same point $p\in U_2$. But $w_k^{-1}p\to p$, so eventually $w_k^{-1}p\in U_2$ and $p\in w_k(U_2)$, a contradiction. Here convergence of matrices and their inverses gives uniform sphere convergence: determinant-one lifts near $I$ act continuously on normalized nonzero vectors in $\mathbb C^2$, and this continuity is uniform on the compact projective sphere; the adjugate formula gives continuous inversion. Thus the argument is valid even if the properness difference has no interior. [A1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Finally cyclically shorten any reduced word by conjugating its leftmost factor to the right whenever its two end factors belong to the same group. Those two end coefficients then combine, and any resulting $J$ coefficient can be combined into its neighbor as in step 1.1, strictly reducing length. After finitely many steps the word lies in a single factor or is an alternating word with different end factors. In the latter case it has positive even length, and every positive power is still alternating with every factor outside $J$. Step 2.1 makes every such power nonidentity. Thus a finite-order element must be conjugate into one factor. Its order is unchanged by conjugacy and by the proved factor embeddings, giving precisely the asserted torsion consequences. All conclusions used only the actual open-pair interaction and the fixed omitted point; no limit-set, convex-core or parabolic classification has been silently imported. [F1, step 1.1, step 2.1, algebra] ∎

## Actual source reading and remaining geometric clauses

The actual published Space I PDF, raw SHA256 9a90e6bb93ea5d579c5a2cb62fdb2341539e4542a3ae4d9f03ee63c962b0b873, was read through PDF pp. 2–29, printed pp. 1097–1124, including the entire proper-interaction argument and the main algebraic/discreteness proofs. This is distinct from the older arXiv preprint. The actual group-pushout quotient and Möbius projective-identification suppliers were read in full. The proof supplies the finite word reductions and fixed omitted-point discreteness argument explicitly.

Full translated-boundary structure, conformal quotient gluing and geometrical finiteness of the amalgam require additional hypotheses and proofs. They are not asserted by this algebraic supplier, and the original generic hyperbolization theorem remains a separate authoring obligation.
