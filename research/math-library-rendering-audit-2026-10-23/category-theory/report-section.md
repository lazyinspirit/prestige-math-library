## Category Theory

Completed visual review of **1094 items across 42 pages**, with **1292 image tiles**. Findings: 3 uncertain, 8 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/category-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/category-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/category-theory/category-review-receipt.json).

### Confirmed rendering defects

#### category-theory / confirmed 001: `ex-the-abelian-category-of-representations-of-a-two-object-quiver`

- Location: **Title**; source lines 4.
- Pages: `abelian-categories-examples`.
- Visible defect: The rendered title visibly prints the ASCII arrow markup “1 -> 2”; the item body correctly renders the quiver as $1\to2$.
- Future repair: Typeset the title arrow as inline math ($1\to2$), or spell it as “from 1 to 2”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/ex-the-abelian-category-of-representations-of-a-two-object-quiver--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/ex-the-abelian-category-of-representations-of-a-two-object-quiver.md).

Exact frozen source lines:

```text
4: title: "Representations of the quiver 1 -> 2 in abelian groups form an abelian category"
```

#### category-theory / confirmed 002: `thm-nine-lemma-in-an-abelian-category`

- Location: **Statement diagram**; source lines 42.
- Pages: `the-diagram-lemmas-in-an-abelian-category`.
- Visible defect: The displayed 3×3 diagram omits the vertical morphism B_3→C_3, although the statement assumes all three columns are short exact. The first two columns and all three top-row vertical maps are drawn; the third column is therefore visually incomplete.
- Future repair: Add \arrow[d] to B_3 in the middle row so the third short-exact column B_3→C_3 is displayed.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-nine-lemma-in-an-abelian-category--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-nine-lemma-in-an-abelian-category.md).

Exact frozen source lines:

```text
42: 0 \arrow[r] & B_1 \arrow[r] \arrow[d] & B_2 \arrow[r] \arrow[d] & B_3 \arrow[r] \arrow[d] & 0 \\
```

#### category-theory / confirmed 003: `thm-the-meet-of-subobjects-is-their-pullback`

- Location: **Proof**; source lines 51.
- Pages: `subobject-lattices-generators-and-the-grothendieck-axioms`.
- Visible defect: The proof tile prints the inline TikZ-cd source (`tikzcd`, `\arrow`, labels, and matrix separators) literally. It does not render a pullback square.
- Future repair: Put the commutative square in the supported display-math/TikZ-cd block syntax (as used by the separate connecting-morphism example) so the four maps and commutativity are visible.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-the-meet-of-subobjects-is-their-pullback--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-the-meet-of-subobjects-is-their-pullback.md).

Exact frozen source lines:

```text
51: 1.1 Form a pullback square ```tikzcd P \arrow[r, "q"] \arrow[d, "p"'] & C \arrow[d, "c"] \\ B \arrow[r, "b"'] & A. ``` By [L2], the pullback leg $p$ is monic, so the composite $m:=bp=cq:P\to A$ is monic as well. Because $m$ factors through both $b$ and $c$, it is a lower bound of the two subobjects. [L1, L2, L3]
```

#### category-theory / confirmed 004: `thm-nine-lemma-variants-by-which-rows-are-assumed-exact`

- Location: **Statement and Proof**; source lines 36, 45, 61, 63, 65.
- Pages: `the-diagram-lemmas-in-an-abelian-category`.
- Visible defect: The rendered item states that a 3×3 commutative diagram is being considered, repeats it as a given, and proves row exactness via named grid maps, but neither the source body nor screenshot supplies the diagram. Readers cannot see the grid, its directions, or which maps are named a_i,b_i,c_i,p_i,i_i.
- Future repair: Add the named 3×3 grid before the three variants, labeling horizontal and vertical arrows consistently with the proof and indicating that each column is short exact.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-nine-lemma-variants-by-which-rows-are-assumed-exact--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-nine-lemma-variants-by-which-rows-are-assumed-exact--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-nine-lemma-variants-by-which-rows-are-assumed-exact.md).

Exact frozen source lines:

```text
36: In the $3 \times 3$ short-exact-column diagram of the nine lemma:
45: **Given:** A commutative $3 \times 3$ diagram whose three columns are short exact.
61: 1.3 Assume the top and bottom rows are short exact and that the middle row is a complex. To prove exactness at $B_1$, let $x$ be a member of $B_1$ with image $0$ in $B_2$. Applying the right map of the first column gives $$c_1 p_1 x = p_2 b_1 x \equiv 0.$$ Since the bottom row is short exact, its left map $c_1$ is monic by [L2], so [L3] gives $p_1 x \equiv 0$. Exactness of the first column at $B_1$ gives a member $u$ of $A_1$ with $i_1 u \equiv x$. Then $$i_2 a_1 u = b_1 i_1 u \equiv b_1 x \equiv 0.$$ Because the second column is short exact, its left map $i_2$ is monic, so [L3] gives $a_1 u \equiv 0$. The top row is short exact, hence its left map is monic by [L2]; another use of [L3] gives $u \equiv 0$, and therefore $x \equiv 0$. Thus the middle-row map $B_1 \to B_2$ is monic. [L2, L3, given, construct, algebra]
63: 1.4 Still under the same hypotheses, let $t$ be a member of $B_2$ with image $0$ in $B_3$. Because the bottom row is exact at $C_2$, there is a member $z$ of $C_1$ with $c_1 z \equiv p_2 t$ by [L3]. Since the first column is short exact, its right map is epic by [L2], so [L3] yields a member $x$ of $B_1$ with $p_1 x \equiv z$. Then $$p_2 b_1 x = c_1 p_1 x \equiv c_1 z \equiv p_2 t.$$ By [L3], pass to one common epic refinement of these equalities and the hypothesis $b_2t\equiv0$, and define $w:=t-b_1x$. Then $p_2w=0$, $b_2w=0$, and $t=b_1x+w$ on that domain. Exactness of the second column at $B_2$ gives a member $u$ of $A_2$ with $i_2 u \equiv w$ by [L3]. The middle row is a complex, so $$i_3 a_2 u = b_2 i_2 u \equiv b_2 w = 0.$$ Because the third column is short exact, $i_3$ is monic; [L3] gives $a_2 u \equiv 0$. Exactness of the top row at $A_2$ therefore gives a member $v$ of $A_1$ with $a_1 v \equiv u$ by [L3]. Hence $$w \equiv i_2 u \equiv i_2 a_1 v = b_1 i_1 v,$$ so $$t \equiv b_1(x + i_1 v).$$ This proves exactness of the middle row at $B_2$ by [L3]. [L2, L3, given, choose, construct, algebra]
65: 1.5 Let $s$ be a member of $B_3$. Since the bottom row is short exact, its right map is epic by [L2], so [L3] gives a member $z$ of $C_2$ with $c_2 z \equiv p_3 s$. Since the second column is short exact, its right map is epic as well, choose a member $y$ of $B_2$ with $p_2 y \equiv z$. Then $$p_3 b_2 y = c_2 p_2 y \equiv c_2 z \equiv p_3 s.$$ By [L3], pass to one common epic refinement of these equalities and define $w:=s-b_2y$. Then $p_3w=0$ and $s=b_2y+w$ on that domain. Exactness of the third column at $B_3$ gives a member $u$ of $A_3$ with $i_3 u \equiv w$ by [L3]. Because the top row is short exact, its right map is epic by [L2], so [L3] gives a member $v$ of $A_2$ with $a_2 v \equiv u$. Therefore $$w \equiv i_3 u \equiv i_3 a_2 v = b_2 i_2 v,$$ and hence $$s \equiv b_2(y + i_2 v).$$ By [L3], the map $B_2 \to B_3$ is epic. [L2, L3, given, choose, construct, algebra]
```

#### category-theory / confirmed 005: `ex-the-braid-group-on-three-strands`

- Location: **Item body**; source lines 4.
- Pages: `braided-and-symmetric-monoidal-categories-examples`.
- Visible defect: The title source contains the literal ASCII subscript notation `S_3`; the original-resolution title tile visibly renders `S_3` as plain text rather than mathematical notation. The item body renders the corresponding group symbols as math, so this defect is isolated to the title.
- Future repair: Mark the symmetric-group symbol as math in the title while preserving the wording.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/ex-the-braid-group-on-three-strands--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/ex-the-braid-group-on-three-strands.md).

Exact frozen source lines:

```text
4: title: "The braid group on three strands and its quotient to S_3"
```

#### category-theory / confirmed 006: `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits`

- Location: **Proof**; source lines 60.
- Pages: `exactness-and-the-member-calculus`.
- Visible defect: Viewed assigned screenshot tile --02 at original resolution. Proof step 1.2 displays the literal text `tikzcd P_i \arrow[r] \arrow[d] ...` and later `tikzcd P \arrow[r] ...` inline instead of rendering either pullback square.
- Future repair: Move each tikzcd environment out of inline backticks into a standalone fenced TikZ block so the two squares render.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-ab5-is-equivalent-to-exactness-of-filtered-colimits--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-ab5-is-equivalent-to-exactness-of-filtered-colimits--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-ab5-is-equivalent-to-exactness-of-filtered-colimits.md).

Exact frozen source lines:

```text
60: 1.2 Conversely, assume every filtered colimit functor is exact. Let $I$ be a small directed poset indexing a family of monomorphisms $b_i:B_i\rightarrowtail A$, and let $c:C\rightarrowtail A$ represent a fixed subobject of $A$. For each $i\in I$, form the pullback square ```tikzcd P_i \arrow[r] \arrow[d] & C \arrow[d, "c"] \\ B_i \arrow[r, "b_i"'] & A. ``` By [L4], the top-left leg represents $B_i\wedge C$. These pullback squares assemble into a diagram in $\mathcal A^I$. Because the filtered colimit functor $\operatorname*{colim}_I$ is exact, [L2] and [L3] say that it preserves finite limits, so its colimit square ```tikzcd P \arrow[r] \arrow[d] & C \arrow[d, "c"] \\ B \arrow[r, "b"'] & A ``` is again a pullback. [L2, L3, L4, assume-hyp, construct]
```

#### category-theory / confirmed 007: `thm-the-kernel-cokernel-sequence-of-a-composite`

- Location: **Proof**; source lines 61, 63.
- Pages: `exactness-and-the-member-calculus`.
- Visible defect: Viewed assigned screenshot tiles --01 and --02 at original resolution. Proof steps 2.2 and 2.3 show their TikZ command strings literally inline (`tikzcd`, `\arrow`, `&`, `\\`) rather than as diagrams.
- Future repair: Move each TikZ environment out of inline backticks into a standalone fenced TikZ block so both diagrams render.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-the-kernel-cokernel-sequence-of-a-composite--01.png), [tile 02](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-the-kernel-cokernel-sequence-of-a-composite--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-the-kernel-cokernel-sequence-of-a-composite.md).

Exact frozen source lines:

```text
61: 2.2 Apply [L1] to the commutative diagram ```tikzcd \ker(f) \arrow[r, "k_f"] \arrow[d, "0"'] & A \arrow[r, "f"] \arrow[d, "g f"'] & B \arrow[d, "g"'] \\ 0 \arrow[r] & C \arrow[r, "1_C"'] & C. ``` The top row is exact, and $0 \to C$ is monic. Hence the induced sequence $$\ker(0) \to \ker(g f) \to \ker(g)$$ is exact. By [L4], $\ker(0)$ is represented by $1_{\ker(f)}$, so this is exactly the sequence $$\ker(f) \xrightarrow{u} \ker(g f) \xrightarrow{v} \ker(g)$$ at $\ker(g f)$. [L1, L4, step 1.1, construct]
63: 2.3 Apply [L1] again to ```tikzcd A \arrow[r, "f"] \arrow[d, "g f"'] & B \arrow[r, "q_f"] \arrow[d, "g"'] & \operatorname{coker}(f) \arrow[d, "0"'] \\ C \arrow[r, "1_C"'] & C \arrow[r] & 0. ``` The top row is exact, and $1_C$ is monic. Therefore the induced sequence $$\ker(g f) \to \ker(g) \to \ker(0_{\operatorname{coker}(f),0})$$ is exact. By [L4], the last kernel is represented by $1_{\operatorname{coker}(f)}$, and the induced map is $q_f k_g = \delta$. Hence $$\ker(g f) \xrightarrow{v} \ker(g) \xrightarrow{\delta} \operatorname{coker}(f)$$ is exact at $\ker(g)$. [L1, L4, step 1.1, construct]
```

#### category-theory / confirmed 008: `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake`

- Location: **Proof**; source lines 48.
- Pages: `the-diagram-lemmas-in-an-abelian-category`.
- Visible defect: The proof step places the tikzcd environment inline on one Markdown line. In the original-resolution rendered tile, the literal sequence \arrow[r] and related TikZ commands appear as visible text instead of a diagram. Convert it to a standalone fenced tikzcd block; preserve the two rows, labels, and commuting square data.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake.md).

Exact frozen source lines:

```text
48: 1.1 Consider the morphism between the canonical split short exact sequences ```tikzcd 0 \arrow[r] & A \arrow[r, "j_A"] \arrow[d, "f"'] & A\oplus B \arrow[r, "\pi_B"] \arrow[d, "m"'] & B \arrow[r] \arrow[d, "g"'] & 0 \\ 0 \arrow[r] & B \arrow[r, "j_B"'] & B\oplus C \arrow[r, "\pi_C"'] & C \arrow[r] & 0 ``` where, in biproduct matrix notation, $$m=\begin{pmatrix}f&-1_B\\0&g\end{pmatrix},\qquad m(a,b)=(f(a)-b,g(b)).$$ The two squares commute, so [L1] applies. [L1, L3, given, construct]
```

### Uncertain observations

#### category-theory / uncertain 001: `thm-the-connecting-morphism-exists-and-is-unique`

- Location: **Proof**; source lines 76, 82.
- Pages: `the-diagram-lemmas-in-an-abelian-category`.
- Visible defect: The inline fenced `tikzcd` strings that introduce the pullback and pushout in proof steps 1.1 and 1.2 are displayed literally. The standalone multiline TikZ diagram in source lines 38–41 renders correctly in tile --01 (SHA256 f3538e30c3569c823893a524c4e6bb9f1e52bc5aaca6750fd1b5bb8461f24e8b). Replace each inline fence with a standalone multiline TikZ block, following that working source pattern.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-the-connecting-morphism-exists-and-is-unique--02.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-the-connecting-morphism-exists-and-is-unique.md).

Exact frozen source lines:

```text
76: ```tikzcd P \arrow[r, "\pi'"] \arrow[d, "\pi"'] & B \arrow[d, "p"] \\ K \arrow[r, "k_h"'] & C. ```
82: ```tikzcd A' \arrow[r, "i'"] \arrow[d, "q_f"'] & B' \arrow[d, "\iota'"] \\ Q \arrow[r, "\iota"'] & R. ```
```

#### category-theory / uncertain 002: `thm-symmetric-nine-lemma`

- Location: **Statement; Facts & Assumptions**; source lines 28, 29, 30, 34.
- Pages: `the-diagram-lemmas-in-an-abelian-category`.
- Visible defect: The statement and given-data line refer to a 3×3 commutative diagram, but the rendered ItemBody contains no diagram, vertices, or arrows. This leaves the nine exactness hypotheses and the four possible missing outer lines to be inferred.
- Future repair: Editorial candidate: include a generic 3×3 diagram with named objects and horizontal/vertical arrows, and make clear that the middle row and column are short exact while any three outer rows/columns are short exact. Keep the arrows commutative and the statement symmetric under transpose and opposite-category reversal.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/thm-symmetric-nine-lemma--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/thm-symmetric-nine-lemma.md).

Exact frozen source lines:

```text
28: In a commutative $3 \times 3$ diagram, suppose the middle row and middle column
29: are short exact. If any three of the remaining four rows and columns are short
30: exact, then the fourth is short exact.
34: **Given:** The commutative $3 \times 3$ diagram in the statement.
```

#### category-theory / uncertain 003: `ex-the-published-module-four-lemma-as-an-instance`

- Location: **Facts & Assumptions; Verification**; source lines 35, 43.
- Pages: `the-diagram-lemmas-in-an-abelian-category-examples`.
- Visible defect: The example refers to a module diagram, and its verification identifies it with the categorical four-lemma diagram, but the rendered ItemBody supplies no diagram or map labels.
- Future repair: Editorial candidate: show the module four-lemma diagram as a commutative diagram with exact rows and label the vertical maps and the central map whose injectivity/surjectivity is at issue. The source-supported checks are exactness of both rows and the two four-lemma implications; coordinate the displayed shape with the linked module and abelian-category statements.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/category-theory/screenshots/ex-the-published-module-four-lemma-as-an-instance--01.png); [frozen source](math-library-rendering-audit-2026-10-23/category-theory/snapshots/ex-the-published-module-four-lemma-as-an-instance.md).

Exact frozen source lines:

```text
35: **Given:** A commutative exact-row four-term diagram of modules.
43: 1.1 The module diagram is one instance of the abelian-category diagram in [L1]. [L1]
```

