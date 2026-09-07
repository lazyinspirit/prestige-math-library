# Local agent 1 — ordinary textbook validation and closure report

## Scope and authentication

This is an independent local review for `/root/symmetric_scaffold`.  It does
not authenticate the concurrently written roster: I read
`research/symmetric-group-planning/agent-1-textbook-ordinary.md` in full and
checked its mathematical and file claims against the cache, but cannot verify
that report's claimed agent launch.  This report modifies no canonical
scaffold, plan, roster, runtime state, or Git state.

The principal assignment is satisfied by the complete James textbook below.
It is a book-length Springer Lecture Notes volume, not notes, an abstract, or
a publisher preview.  I independently checked the live University of
Minnesota URL on 2026-09-07: it returned `200`, `application/pdf`, and
1,963,603 bytes.  The independently recomputed hash, page count, terminal
index, and the directly read proof passages agree with the external agent-1
report.  Its harvest is reliable; its assertion of a second treatment for the
fixed-tabloid algorithm is not supported, because that report itself names no
such treatment.

## Counted complete textbook

| field | independently verified record |
|---|---|
| bibliography and type | G. D. James, *The Representation Theory of the Symmetric Groups*, Lecture Notes in Mathematics 682, Springer-Verlag, 1978; full textbook/monograph |
| legitimate full-text URL | <https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf> (university host). Publisher identity check: <https://link.springer.com/book/10.1007/BFb0067708>. |
| local PDF | `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/ordinary-textbook/james-1978-representation-theory-symmetric-groups.pdf` |
| SHA-256 | `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc` |
| full-document validation | Valid PDF 1.7; `mutool info` reports 161 PDF pages; `%PDF-1.7` header and final `%%EOF`; contents, references, and terminal index through “Young's Rule” are present. This validates the full scan, rather than a chapter preview. |
| local extraction | `.../ordinary-textbook/james-1978-representation-theory-symmetric-groups.txt`, 255,542 bytes; formulae and matrix orientation were rechecked on PDF pages where extraction is poor. |
| exact proof ranges read | printed §§6 (pp. 22–26), 9 (pp. 34–35), 16 (pp. 60–64), 18–21 (pp. 73–86), and 25 (pp. 114–124); I also checked the contents/front matter and terminal index for completeness. |

### What the read book actually supplies

| proof-bearing source passage | exact claim/proof joint | imported or needed scaffold suppliers | disposition |
|---|---|---|---|
| §6, Theorem 6.2, Example 6.3, Corollary 6.5, pp. 22–26 | With one fixed dictionary order of partitions, (a_{\lambda\rho}=|S_\lambda\cap C_\rho|), the nonnegative upper-triangular scaled multiplicity matrix (B) has its prescribed diagonal and is determined recursively by James's Gram equation. In James's displayed orientation, (B=CA^T), hence (C=B(A^T)^{-1}). The proof counts tabloid fixed points/Young-subgroup intersections, identifies the Gram matrix, solves one triangular unknown at a time using nonnegativity, then factors. Example 6.3 gives all (A,B,C) for (S_5) and warns that its class columns are reversed from the customary table order. | Young subgroups, tabloids/permutation modules, ordinary character inner product, complex Specht classification, Young's rule, and the centralizer-size normalization. | **Included, but single-treatment only.** The current `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` is authorable only with this exact orientation, definitions, diagonal scaling, Gram equation, and factorization; do not call it merely an “upper triangular scaled matrix,” or claim two independent proof treatments. It is algorithmic and not a prerequisite of MN. |
| §9, Theorem 9.3, pp. 34–35 | Over an arbitrary field, restricting a Specht module has a series whose factors are the Specht modules obtained by deleting a node, ordered by the removable-row order. James constructs maps \(\theta_i\), subspaces \(V_i\), and proves the factors by dimension equality. | Standard polytabloid basis and ordinary branching. | **Not a skew-Specht result.** It supports the inherited restriction-filtration boundary and is used by §25, but does not prove an arbitrary-field skew-polytabloid module or its LR filtration. |
| §16, Theorem 16.4, pp. 60–64 | The good-sequence/LR tableau count is the multiplicity in ordinary outer induction. James proves this via diagram operators and a bad-letter replacement recursion. | Semisimplicity over \(\mathbb C\), outer induction, and the RL-8-owned LR convention. | Independent ordinary check for the outer LR result, not a reason to duplicate RL-8. |
| §§19, 21.3–21.5 and proof of Theorem 21.1, pp. 74–83 | James first proves the full-cycle hook column. For \(\lambda/\nu\) a union of \(m\) disconnected skew hooks with a total of \(c\) columns, Lemma 21.5 gives the relevant LR multiplicity \(\binom{c-x}{m-1}\). The decisive alternating-hook sum is \(\sum_{x=1}^{r}(-1)^{r-x}\binom{c-x}{m-1}\): it is \((-1)^{r-c}\) when \(m=1\), and zero when \(m\ne1\). Thus precisely one connected removable (r)-strip remains, with height/leg sign; this proves MN. | Border-strip definition; outer LR theorem; Frobenius reciprocity; the full-cycle hook-value lemma. No Mackey formula is used in this route. | **Included and proof-closed at this joint.** Retain `lem-alternating-hook-induction-cancels-disconnected-rim-removals`, but state the displayed binomial formula and conclusion in its proof. Remove `thm-mackey-double-coset-formula-for-restricting-an-induced-character` from `thm-murnaghan-nakayama-character-rule` unless the authored proof is genuinely changed to use it. |
| §25, Theorems 25.3–25.4 and Lemma 25.5, pp. 114–124 | Over \(\mathbb R\), Gram--Schmidt on standard polytabloids yields an order-independent orthonormal basis. If (x-1) is at \((i,j)\), (x\) at \((k,\ell)\), then \(f_t s_x=a f_t+b f_{ts_x}\), (a=(i-k+\ell-j)^{-1}\), (a^2+b^2=1\), (b>0\); same row/column give (+1/-1\). The proof uses the §9 restriction filtration, an invariant two-space for the final transposition, and the required (S_3) calculation. | Complex/real Specht modules, branching/filtration, invariant tabloid form. | **Independent orthogonal-form check.** It does not construct JM eigenlines; preserve the separate JM source and say \(\mathbb R\), not a generic `R`. |

## Independently inspected supporting full texts (not counted as the assigned ordinary textbook)

These sources close/check specific ordinary interfaces.  They are not
mislabelled as a second ordinary-character textbook.

| source, type, authoritative URL | local path; hash; validation | exact pages/sections read and usable proof joint |
|---|---|---|
| I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed., Oxford Mathematical Monographs, Oxford University Press, 1995; complete textbook. <https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf> (publisher record: <https://academic.oup.com/book/52932>). | `scratchpad/source-cache/symmetric-groups/symmetric-functions-textbook/macdonald-symmetric-functions-and-hall-polynomials-2e.pdf`; SHA-256 `64e242b84d1f3b7864ed28f89a9b331269a28c1ce2a32ce03b4ee692f5974ea7`; valid 486-page PDF, EOF, bibliography/index to printed p. 475. | Chapter I §7, pp. 112–117 (PDF 125–130) directly read: (7.2) defines `ch`, (7.3) proves isometry/multiplicativity by cycle-type concatenation and Frobenius reciprocity, (7.4)–(7.6) identify the determinantal characters and positivity. §7 Ex. 3 gives the skew-character/restriction interface and Ex. 5 states MN. I §6 pp. 99–111 and §9 pp. 142–148 were checked for Kostka triangularity and the full LR bijection. This is a proof-bearing cross-check for Frobenius/LR, but Ex. 5 is not an MN proof. |
| A. M. Vershik and A. Yu. Okounkov, “A New Approach to Representation Theory of Symmetric Groups. II,” *Journal of Mathematical Sciences* 131 (2005), 5471–5494; complete article/preprint, arXiv:math/0503040v3. <https://arxiv.org/pdf/math/0503040>. | `scratchpad/source-cache/symmetric-groups/seminormal-articles/okounkov-vershik-2005-new-approach-symmetric-groups.pdf`; SHA-256 `bf19d2e52303f20fd66004f6ca2f3b62b9dd46500b7a62410e2c8e7ba2fbc9ac`; valid 31-page PDF and terminal references. | §2, pp. 8–13: relative centralizer, (X_i=\sum_{j<i}(j\ i)), and `GZ(n)=<X_1,...,X_n>`. §5, pp. 17–22: content vectors, tableau bijection, and Theorem 5.8. §6, pp. 22–23: exact seminormal pair and orthogonal block. This is the JM/seminormal proof source. |
| C. Schensted, “Longest Increasing and Decreasing Subsequences,” *Canadian Journal of Mathematics* 13 (1961), 179–191; complete article. <https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf>. | `scratchpad/source-cache/homological-algebra-enrichment/schensted-1961.pdf`; SHA-256 `43b255a106be86158a32cba0fc617a5008356ff8cfee6dc521d4a059fa333d8a`; valid 13-page PDF; Part I pp. 179–188 is PDF pp. 1–10. | Part I, Lemmas 1–7 and Theorems 1–2, pp. 179–188. Lemmas 4–5 prove the first-row/basic-subsequence bounds, Theorem 1 identifies the number of columns with LIS, Lemma 6 proves row/column insertion commutation, Lemma 7 transposes the insertion tableau under reversal, and Theorem 2 identifies rows with LDS. |

## Exact closure corrections and dispositions

1. **Frobenius label identification — close with one explicit missing
   supplier.** `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`
   already names `thm-youngs-rule-for-permutation-modules`, but its dependency
   list does not visibly carry the Kostka comparison that its proof invokes.
   Add an exact supplier, for example
   `lem-kostka-numbers-give-the-dominance-unitriangular-schur-to-complete-change-of-basis`,
   and make the theorem depend on it.  The proof must compare
   \(\operatorname{ch}M^\mu=h_\mu=\sum_\lambda K_{\lambda\mu}s_\lambda\)
   with Young's Rule, then invert the finite dominance-unitriangular matrix.
   Orthonormality alone permits a permutation of labels.  Keep the distinction
   between the rational class-function formula and the integral isomorphism
   of representation rings: the latter follows from the (h_\lambda) basis,
   surjectivity, and isometry.

2. **Skew-module/filtration — replace the unsupported central claim, or leave
   a real source blocker.** James §9.3 is only the ordinary restriction Specht
   filtration; Macdonald supplies the skew *character* interface, not a
   proof of the current `def-skew-specht-module` and
   `thm-skew-specht-modules-have-littlewood-richardson-specht-filtrations`.
   The minimal closed characteristic-zero route is instead a new
   `def-skew-multiplicity-module-over-c`:
   \[\operatorname{Hom}_{\mathbb C[S_m]}(S^\mu,
     \operatorname{Res}^{S_n}_{S_m\times S_{n-m}}S^\lambda),\]
   with the commuting (S_{n-m})-action, followed by
   `thm-skew-multiplicity-module-has-lr-specht-decomposition-over-c`.
   Its dependencies are `prop-restriction-coproduct-is-schur-skewing`,
   `thm-outer-littlewood-richardson-rule`, Maschke semisimplicity, and complex
   Specht classification; the conclusion is the direct sum with multiplicity
   (c^\lambda_{\mu\nu}).  If a classical skew-polytabloid module or an
   arbitrary-field Specht filtration remains central, obtain and read a
   complete James--Peel-style proof source and scaffold its straightening and
   filtration steps. **Current arbitrary-field wording is blocked.**

3. **MN — close with exact cancellation, remove the unused dependency.** The
   exact source-proof formula above is the necessary replacement for the
   phrase “contributions cancel.” `thm-murnaghan-nakayama-character-rule`
   should depend on `lem-alternating-hook-induction-cancels-disconnected-rim-removals`
   and the LR/full-cycle/Frobenius-reciprocity route, not on generic Mackey.
   `cex-a-disconnected-rim-set-is-not-a-border-strip` should calculate an
   (m>1) binomial cancellation, not merely draw the disconnected set.

4. **Fixed-tabloid reconstruction — supportable but narrowly so.** Retain
   `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` only
   with its explicit (A,B,C), ordering, diagonal, Gram identity, triangular
   solve, and (C=B(A^T)^{-1}). Its example must preserve James's reversed
   class-column warning. It should be an optional algorithm cluster, not an
   MN dependency. Coverage: **one complete proof-bearing textbook treatment;
   no independently sourced second treatment presently verified.**

5. **JM/seminormal cross-check — close the ordinary formula/boundary.** Keep
   `def-jucys-murphy-elements-of-the-symmetric-group-algebra` integral:
   (X_1=0, X_k=\sum_{j<k}(j\ k)\in\mathbb Z[S_n]), then base change.
   The spectral assertions are only over \(\mathbb C\). For
   (r=c_T(i+1)-c_T(i)), with (T'=s_iT) standard, the declared triangular
   right-action phasing is
   \(s_iv_T=r^{-1}v_T+v_{T'}\) and
   \(s_iv_{T'}=(1-r^{-2})v_T-r^{-1}v_{T'}\); row/column cases are (+1,-1).
   Over \(\mathbb R\), the positive-root orthogonal block in ordered basis
   \((u_T,u_{T'})\) is
   \(\begin{pmatrix}r^{-1}&\sqrt{1-r^{-2}}\\\sqrt{1-r^{-2}}&-r^{-1}\end{pmatrix}\).
   Vershik--Okounkov supplies the JM/GZ derivation, while James §25
   independently supplies the Gram--Schmidt/branching orthogonal form. Keep
   the addable-node collision example: modulo 2 the predecessor ((1)) has
   addable contents (1,-1), so the interpolation denominator (2) is zero;
   this does not claim a modular simultaneous eigenbasis.

6. **RG-11 Schensted LIS/LDS — supplier is exact and already correctly
   owned.** No SYMR duplicate is needed. Preserve
   `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` on
   RG-11 with its upstream `lem-first-row-insertion-basic-subsequences` and
   reversal chain (`def-column-insertion-for-distinct-letters`,
   `lem-row-and-column-insertion-commute`, and
   `lem-word-reversal-transposes-the-insertion-tableau`). The existing
   SYMR `lem-rsk-union-bound-localizes-plancherel-profiles` correctly consumes
   that theorem and `thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law`.
   Schensted's proof gives exactly LIS (=\lambda_1) and LDS (=\lambda'_1),
   including the reversal argument; the empty-permutation convention remains
   a harmless local extension.

## Final coverage ledger

| obligation | disposition | remaining blocker |
|---|---|---|
| full ordinary textbook | closed: James, complete and independently authenticated | none |
| Frobenius label identification | source-closed | add the explicit Kostka-unitriangular dependency/item; current prose alone is not a dependency edge |
| skew module / filtration | character-level route closed; minimal Hom-module alternative closed over \(\mathbb C\) | arbitrary-field classical skew-polytabloid filtration needs a complete James--Peel proof source |
| Murnaghan--Nakayama cancellation | closed by James §21.5 and proof of 21.1 | author must retain exact binomial cancellation and remove unused Mackey edge |
| fixed-tabloid reconstruction | closed for a carefully stated optional algorithm | no second independent treatment verified |
| JM/seminormal | closed over the stated characteristic-zero/real regimes | do not reduce spectral diagonalization modulo positive characteristic |
| Schensted LIS/LDS supplier | closed and owned by RG-11 | none; do not duplicate in SYMR |

