## Set Theory

Completed visual review of **1275 items across 81 pages**, with **2005 image tiles**. Findings: 2 uncertain, 6 confirmed, 1 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/set-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/set-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/set-theory/category-review-receipt.json).

### Confirmed rendering defects

#### set-theory / confirmed 001: `thm-ma-products-of-ccc-spaces-are-ccc`

- Location: **frontmatter title**; source lines 4.
- Pages: `finite-support-iterations-and-martins-axiom`.
- Visible defect: The title shows the cardinal subscript as the literal text "aleph_1". The Statement typesets the corresponding notation as $\mathrm{MA}(\aleph_1)$.
- Future repair: Typeset the title notation, for example "$\mathrm{MA}(\aleph_1)$, arbitrary products of ccc spaces are ccc".
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-ma-products-of-ccc-spaces-are-ccc--01.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-ma-products-of-ccc-spaces-are-ccc.md).

Exact frozen source lines:

```text
4: title: Under MA(aleph_1), arbitrary products of ccc spaces are ccc
```

#### set-theory / confirmed 002: `thm-lc-strong-compactness-fine-measures-and-logic`

- Location: **Statement and Proof**; source lines 27, 41, 43.
- Pages: `large-cardinals-measures-and-elementary-embeddings`.
- Visible defect: Mathematical symbols in the complete Statement and two proof steps are written as unformatted ASCII names and operators ("kappa", "lambda>=kappa", "P_kappa(lambda)", and "kappa-complete"). Other formulas in the same item are typeset, so notation changes form within the same claim and proof.
- Future repair: Typeset the mathematical symbols consistently, for example $\kappa$, $\lambda\ge\kappa$, $\mathcal P_\kappa(\lambda)$, and "\kappa-complete" as $\kappa$-complete.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-lc-strong-compactness-fine-measures-and-logic--01.png), [tile 02](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-lc-strong-compactness-fine-measures-and-logic--02.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-lc-strong-compactness-fine-measures-and-logic.md).

Exact frozen source lines:

```text
27: In ZFC, for a regular uncountable cardinal kappa, the following are equivalent: kappa is strongly compact; every P_kappa(lambda), for a cardinal lambda>=kappa, carries a fine kappa-complete ultrafilter; every less-than-kappa satisfiable set-sized $L_{\kappa,\kappa}$ theory has a model; and the same compactness assertion holds for $L_{\kappa,\omega}$. Languages may have arbitrary set size.
41: 1.1 Assume filter extension and fix lambda>=kappa. For a in P_kappa(lambda), let C_a be the cone of x containing a. The sets containing some C_a form a proper filter: every cone contains a itself, and C_a intersect C_b=C_(a union b). An intersection of eta<kappa such filter members contains the cone above the union of their witnessing a_xi. F3 selects those witnesses; regularity makes their union have size below kappa (bound all sizes below one cardinal below kappa and use the infinite-cardinal product bound). Thus the filter is kappa-complete. Extend it by F1. Since C_{alpha} belongs to it for each alpha<lambda, the extension is fine. [F1, F3]
43: 2.1 Assume the fine-measure assertion and fix a theory T as in the L_(kappa,kappa) assertion. Choose a cardinal lambda>=kappa and an injection e:T to lambda. Push a fine measure on P_kappa(lambda) forward by $x\mapsto e^{-1}[x]$ to get a proper kappa-complete ultrafilter W on P_kappa(T). Inverse images preserve all intersections and complements, proving these laws. For every t in T, the inverse image of the cone of small subtheories containing t contains the e(t)-cone, so W is fine. [F1, F3, step 1.1]
```

#### set-theory / confirmed 003: `thm-feferman-levy-omega-one-is-ground-aleph-omega`

- Location: **Proof technique**; source lines 48.
- Pages: `symmetric-collapse-and-ultrafilter-free-models`.
- Visible defect: The Proof technique label is visually uppercased by the renderer, turning the inline TeX control sequence into the literal-looking "$\OMEGA_1$" in the rendered label. The same notation in the Statement body renders correctly.
- Future repair: Use plain text such as "leastness of omega-one" in the Proof technique metadata, or prevent the label’s uppercase styling from transforming math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-feferman-levy-omega-one-is-ground-aleph-omega--01.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-feferman-levy-omega-one-is-ground-aleph-omega.md).

Exact frozen source lines:

```text
48: **Proof technique:** contradiction for uncountability of the ground limit, followed by leastness of $\omega_1$.
```

#### set-theory / confirmed 004: `def-lc-laver-anticipation-function`

- Location: **Definition**; source lines 25, 29.
- Pages: `large-cardinals-measures-and-elementary-embeddings`.
- Visible defect: The definition leaves kappa, x, lambda>=kappa, j(ell), j(kappa), and Lambda=kappa as ordinary prose text in the rendered ItemBody, while the adjacent formal display uses typeset mathematical notation. The screenshot visibly prints “lambda>=kappa” and “Lambda=kappa” literally.
- Future repair: Typeset the set-theoretic variables and relation in math delimiters, e.g. $\kappa$, $x$, $\lambda\ge\kappa$, $j(\ell)$, $j(\kappa)$, and $\lambda=\kappa$, while preserving the prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/def-lc-laver-anticipation-function--01.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/def-lc-laver-anticipation-function.md).

Exact frozen source lines:

```text
25: Work in ZFC, with [[def-axiom-of-choice]], and suppose kappa is supercompact in the sense of [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]. A **Laver anticipation function** is a set function $\ell:\kappa\to V_\kappa$ such that for every set x and every cardinal lambda>=kappa there is a supercompactness embedding $j:V\to M$ with
29: Here the sequence-closure condition and embeddings have the precise definable-class, set-restriction and formula-by-formula meaning in [[thm-lc-supercompactness-closed-embedding-characterization]]. In particular no uniform truth predicate for V or unrestricted class quantifier is introduced: the witness is supplied by a definition with set parameters, and its elementarity is verified as a schema. Since j(ell) is a function with domain j(kappa) and kappa<j(kappa), its value at kappa is well-defined. The anticipated x can have rank at least kappa; only the original values ell(alpha), alpha<kappa, must lie in V_kappa. Lambda=kappa and x=empty are included. This definition asserts no existence of such ell; that is the separate existence theorem.
```

#### set-theory / confirmed 005: `cor-lc-large-cardinal-implication-ledger`

- Location: **Facts & Assumptions**; source lines 36, 54.
- Pages: `large-cardinals-measures-and-elementary-embeddings`.
- Visible defect: Facts & Assumptions and proof prose render “kappa” and “lambda>=kappa” as literal baseline text in the claims about fine measures, unlike the typeset variables in the Statement.
- Future repair: Typeset these variables and comparison, e.g. $\kappa$ and $\lambda\ge\kappa$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/cor-lc-large-cardinal-implication-ledger--01.png), [tile 02](math-library-rendering-audit-2026-10-23/set-theory/screenshots/cor-lc-large-cardinal-implication-ledger--02.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/cor-lc-large-cardinal-implication-ledger.md).

Exact frozen source lines:

```text
36: [F1] [[thm-lc-supercompactness-closed-embedding-characterization]]: Supercompactness supplies normal fine kappa-complete measures at every cardinal lambda>=kappa.
54: 1.1 A supercompact kappa has a normal fine complete measure at every lambda>=kappa by its definition and F1. Forgetting normality gives the fine measures of F2, hence strong compactness. For a strongly compact kappa, consider the co-small filter $\{X\subseteq\kappa:|\kappa\setminus X|<\kappa\}$. It is proper and kappa-complete: a fewer-than-kappa union of small complements remains small by regularity and F7. Extend it by the defining property in F8. The extension contains every singleton complement, so contains no singleton and is nonprincipal. It is a kappa-complete ultrafilter on uncountable kappa, witnessing measurability. [F1, F2, F7, F8]
```

#### set-theory / confirmed 006: `lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable`

- Location: **frontmatter title**; source lines 4.
- Pages: `choice-strength-in-baire-urysohn-stone-and-tychonoff`.
- Visible defect: The title renders Aut(U_Q^<) as literal underscore/caret markup instead of typesetting the automorphism-group notation. The complete ItemBody separately renders its mathematical Aut(U_{\mathbb{Q}}^{<}) notation correctly.
- Future repair: Write the group notation in inline math, for example: title: "$\operatorname{Aut}(U_{\mathbb{Q}}^{<})$ is extremely amenable".
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable--01.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable.md).

Exact frozen source lines:

```text
4: title: "Aut(U_Q^<) is extremely amenable"
```

### Optional typography

#### set-theory / typography 001: `thm-lc-supercompactness-closed-embedding-characterization`

- Location: **Statement**; source lines 26, 34, 44, 46, 48, 50, 52.
- Pages: `large-cardinals-measures-and-elementary-embeddings`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-lc-supercompactness-closed-embedding-characterization--01.png), [tile 02](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-lc-supercompactness-closed-embedding-characterization--02.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-lc-supercompactness-closed-embedding-characterization.md).

Exact frozen source lines:

```text
26: In ZFC let kappa be regular uncountable and lambda>=kappa a cardinal. Then lambda-supercompactness is equivalent to the existence of a definable elementary embedding $j:V\to M$ into a transitive class with critical point kappa, $j(\kappa)>\lambda$, and every ambient function from lambda to M belonging to M. For such an embedding the derived normal fine measure is
34: **Given:** ZFC. Proved critical-point fixing for the fine index, selected representatives from Scott sets, represented the sequence graph on j``lambda and reindexed it internally; the converse checks seed size and every measure law.
44: 1.1 From a normal fine U take j and s=j``lambda as in F1. Every map from its index set into eta<kappa has a constant U-large fibre, for otherwise kappa-completeness intersects all fibre complements to empty. Induct on alpha<kappa. Each predecessor of the constant-alpha class, for alpha>0, can be modified outside its U-large membership set to take values in alpha; the fibre argument makes it constant. For alpha=0 there are no predecessors. The collapse equation then gives j(alpha)=alpha. F1 gives j(kappa)>lambda>=kappa, so the critical point is exactly kappa. [F1]
46: 2.1 Let $\langle a_\alpha:\alpha<\lambda\rangle$ be an ambient sequence of elements of M. The collapse has a unique Scott preimage for each a_alpha. Replacement therefore collects these nonempty set representatives; F3 chooses f_alpha from each one, so $\pi([f_\alpha]_U)=a_\alpha$. Define the set function $F(x)=\{(\alpha,f_\alpha(x)):\alpha\in x\}$. Its collapsed class G is exactly $\{(j(\alpha),a_\alpha):\alpha<\lambda\}$. For the inclusion from right to left use fineness: on the alpha-cone the pair (alpha,f_alpha(x)) belongs to F(x), and coordinate pairing transfers through the collapse. Conversely, any represented member of [F] selects on a U-large set a unique pair with first component alpha(x) in x. Normality makes alpha(x) a fixed alpha on a U-large subset. The selected pair is then equivalent to (alpha,f_alpha(x)), giving the required collapsed pair. This proves both inclusions. [F1, F3, step 1.1]
48: 3.1 G belongs to M, and M has the increasing enumeration e of s of order type lambda by F1. Externally this enumeration is precisely alpha maps to j(alpha), by uniqueness of ordinal order type. Inside M compose the function with graph G with e. Its value at alpha is a_alpha, so the original ambient sequence belongs to M. The reindexing is essential: G itself has domain j``lambda, not generally lambda. Thus M has the asserted lambda-sequence closure. [F1, step 2.1]
50: 4.1 Conversely suppose j satisfies the embedding and closure conditions. Each j(alpha) for alpha<lambda lies in M, so the set-restriction convention and closure put $j\restriction\lambda$ in M. Its domain lambda and range s=j``lambda consequently belong to M. This increasing map exhibits there the order type lambda, so M regards |s| as at most |lambda| and hence below j(kappa), since lambda<j(kappa) and j(kappa) is a cardinal of M. Also s is a subset of j(lambda). Thus s belongs to j(P_kappa(lambda)). Define U by the displayed formula using Separation. Elementarity for empty, whole index set, complements and finite intersections makes U a proper ultrafilter. For eta<kappa, j fixes eta and maps a sequence of U-members to a sequence with those j-images at each fixed index; s belongs to their intersection, proving kappa-completeness. Each point cone is large because s contains every j(alpha), proving fineness. [F1, step 3.1]
52: 5.1 For normality let f:S to lambda select an element of x for x in S, with S in U. Then s belongs to j(S), so j(f)(s) belongs to s=j``lambda. It equals j(alpha) for some alpha<lambda. Elementarity for that fibre gives $s\in j(\{x\in S:f(x)=\alpha\})$, so the fibre belongs to U. Hence U is normal, fine and kappa-complete, which is precisely lambda-supercompactness. All derived sets use the definable embedding convention; no Global Choice is required. [F1, F2, step 4.1] ∎
```

### Uncertain observations

#### set-theory / uncertain 001: `ex-first-difference-order-on-a-binary-branching-tree`

- Location: **Verification**; source lines 53.
- Pages: `suslin-trees-lines-algebras-and-independence-examples`.
- Visible defect: The verification table is written as one pipe-delimited line containing both the header, separator, and all rows. The local ItemBody HTML and tiles show it as a single run of pipe-delimited prose rather than a table, so its columns and pairwise comparisons are difficult to scan.
- Future repair: Put the header, Markdown separator, and each of the seven data rows on separate source lines. Preserve the existing values and comparison rule.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/ex-first-difference-order-on-a-binary-branching-tree--01.png), [tile 02](math-library-rendering-audit-2026-10-23/set-theory/screenshots/ex-first-difference-order-on-a-binary-branching-tree--02.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/ex-first-difference-order-on-a-binary-branching-tree.md).

Exact frozen source lines:

```text
53: | consecutive pair | first difference | comparison at that coordinate | |---|---:|---| | $000,001$ | $2$ | $0<1$ | | $001,010$ | $1$ | $0<1$ | | $010,011$ | $2$ | $0<1$ | | $011,100$ | $0$ | $0<1$ | | $100,101$ | $2$ | $0<1$ | | $101,110$ | $1$ | $0<1$ | | $110,111$ | $2$ | $0<1$ |
```

#### set-theory / uncertain 002: `thm-canonical-decomposition-of-a-function`

- Location: **Statement**; source lines 42, 43, 44, 45, 46, 94, 95, 96, 97, 98.
- Pages: `relations-functions-and-quotients`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-canonical-decomposition-of-a-function--01.png), [tile 02](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-canonical-decomposition-of-a-function--02.png), [tile 03](math-library-rendering-audit-2026-10-23/set-theory/screenshots/thm-canonical-decomposition-of-a-function--03.png); [frozen source](math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-canonical-decomposition-of-a-function.md).

Exact frozen source lines:

```text
42: - (i) $\pi$ is surjective;
43: - (ii) there is a function $\bar f : A/{\sim} \to f[A]$ with $\bar f([a]) = f(a)$ for every $a \in A$, and it is a bijection;
44: - (iii) $\iota$ is an injective function $f[A] \to B$ with $\iota(y) = y$;
45: - (iv) $\iota \circ \bar f \circ \pi = f$;
46: - (v) $\bar f$ is the only function $A/{\sim} \to f[A]$ satisfying (iv).
94: 2.1 Claim (ii): the universal property gives a function $g : A/{\sim} \to B$ with $g \circ \pi = f$ and $g([a]) = f(a)$ for every $a \in A$. Every value of $g$ is therefore a value of $f$, so $\operatorname{ran} g \subseteq f[A]$, and the same set $g$ is a function $A/{\sim} \to f[A]$; call it $\bar f$. It is onto $f[A]$, because each element of $f[A]$ is $f(a) = \bar f([a])$ for some $a \in A$; and it is injective, because $\bar f([a]) = \bar f([a'])$ gives $f(a) = f(a')$, that is $a \sim a'$, and therefore $[a] = [a']$. Hence $\bar f$ is a bijection. [L3, L4, L5, L6, L7, L8, L9, L13, L17, step 1.1]
95: 
96: 3.1 Claim (iv): $\iota \circ \bar f \circ \pi$ is unambiguous by associativity, it is a function with domain $A$, and for $a \in A$ its value is $\iota(\bar f(\pi(a))) = \iota(f(a)) = f(a)$; so it equals $f$. [L11, L12, L15, step 1.2, step 2.1]
97: 
98: 3.2 Claim (v): if $h : A/{\sim} \to f[A]$ also satisfies $\iota \circ h \circ \pi = f$, then for $C \in A/{\sim}$ choose $a$ with $C = [a]$ and compute $h(C) = \iota(h(\pi(a))) = f(a) = \bar f(C)$; both have domain $A/{\sim}$, so $h = \bar f$. [L5, L10, L11, L12, step 1.2, step 2.1]
```

