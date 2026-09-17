# Step 3b slice 6 report — Chevalley basis supplier (batch 13, real-forms pair)

Run `phase-2-remaining-27`, pair `real-forms-and-real-semisimple-lie-algebras`,
slice `step3b-slice-6-chevalley`. Deliverable:
`items/lem-chevalley-basis-and-real-structure-constants.md` (new item, draft,
`axiom_base: ZFC`, 29 declared dependencies, all load-bearing and all linked).

## 1. Source locators read

Primary (fetched and read as full-text PDFs converted to text):

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed. (digital 2nd
  ed. 2023), `https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf`,
  Chapter VI §1 "Existence of a Compact Real Form": the complete text of
  printed pp. 349–354 (PDF pages 366–371), i.e. Lemma 6.2, Lemma 6.3,
  **Lemma 6.4** (statement and proof, printed pp. 350–351), **Theorem 6.6**
  (statement printed p. 351; proof printed pp. 351–352), the split real form
  $\mathfrak g_0$ of (6.9) and Corollary 6.10 (printed p. 353), and Theorem
  6.11 with its proof (printed pp. 353–354). Knapp's internal appeals to
  Chapter II (Lemma 2.18, Corollary 2.37, Proposition 2.17) were noted but not
  separately read; the facts my item needs from them are re-derived inside the
  item instead of imported.
- Pavel Etingof, *Lie Groups and Lie Algebras*, `https://math.mit.edu/~etingof/lnlg.pdf`,
  Lecture 39 (printed pp. 180–185 of that file, PDF pages 179–184): §39.1
  automorphisms of semisimple Lie algebras (Propositions 39.1–39.3), §39.2
  forms via the Serre presentation, §39.3 real forms (Theorem 39.6), and
  **§39.4 the compact real form**, where the *Cartan involution*
  $\omega(h_j)=-h_j$, $\omega(e_j)=-f_j$, $\omega(f_j)=-e_j$ is defined on the
  Serre generators and Proposition 39.8 is proved. This is the automorphism
  used (and constructed) in the item.

Supporting (consulted for the exact Chevalley constant, partial reads):

- M. Geck and A. Lang, *Canonical structure constants for simple Lie algebras*,
  Beitr. Algebra Geom. (2024), open access
  `https://link.springer.com/article/10.1007/s13366-024-00767-6`: §1–§2.5 of
  the retrieved full text, stating Chevalley's identity
  $N_{\alpha\beta}N_{-\alpha,-\beta}=\pm(q_{\alpha,\beta}+1)^2$ (their
  $q_{\alpha,\beta}$ is the downward end of the string, i.e. the $p$ used
  here), the normalisation $\omega(e_\alpha)=-e_{-\alpha}$ of a canonical
  Chevalley basis, and the convention note that Humphreys takes
  $[e_\alpha,e_{-\alpha}]=+h_\alpha$ (Bourbaki the negative).
- Solutions file to J. E. Humphreys, *Introduction to Lie Algebras and
  Representation Theory*, `https://icourse.club/uploads/files/018242519ee05e1625cb88db4b14ee6b05b67481.pdf`,
  the §25 exercise list, whose Exercise 25.1 asks to "prove Proposition
  25.1(c) by inspecting root systems of rank 2" — corroborating that the
  string-length identity used here is a rank-two check (my item proves it
  directly by that case analysis).

Neither supporting document was read end to end; both were used only to
confirm the shape/sign conventions of the identity, which the item then
derives from scratch.

## 2. Statement actually proved

For any finite-dimensional complex semisimple $\mathfrak g$, Cartan subalgebra
$\mathfrak h$, root system $\Phi$, and *any* prescribed nonzero root vectors
$e_\alpha^0\in\mathfrak g_\alpha$, there are nonzero $c_\alpha$ with
$e_\alpha=c_\alpha e_\alpha^0$ such that (i) $[e_\alpha,e_{-\alpha}]=h_\alpha$
(coroot), (ii) $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ for $\alpha+\beta\ne0$
($N_{\alpha\beta}=0$ when $\alpha+\beta\notin\Phi\cup\{0\}$; the pair
$\beta=-\alpha$, whose bracket is $h_\alpha$, is excluded from the definition
of $N$), (iii) $N_{\alpha\beta}=\pm(p+1)\in\mathbb Z$ whenever
$\alpha,\beta,\alpha+\beta\in\Phi$, with $-p$ the lower end of the
$\alpha$-string through $\beta$; moreover
$\mathfrak g_0=\operatorname{span}_{\mathbb R}\{h_\alpha,e_\alpha\}$ is a real
Lie algebra with $\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$, integral
structure constants in the basis
$\{h_{\alpha_1},\dots,h_{\alpha_r}\}\cup\{e_\alpha\}$, hence a split real form;
and, in the Knapp normalisation
$X_\alpha=((\alpha,\alpha)/2)^{1/2}e_\alpha$, one has
$[X_\alpha,X_{-\alpha}]=H_\alpha$, $B(X_\alpha,X_{-\alpha})=1$ and real
constants with $C_{\alpha\beta}=-C_{-\alpha,-\beta}$.

The dispatch's wording needed no weakening. Two clarifications were recorded
in the statement rather than silently assumed: the case $\beta=-\alpha$ is
excluded from the definition of the constants $N_{\alpha\beta}$ and
$C_{\alpha\beta}$, and the "rescaled" claim is correct as stated because for
nonzero $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_{-\alpha}$ the pairing
$B(x,y)$ is automatically nonzero (both root spaces are lines and the pairing
is nondegenerate).

## 3. Normalization argument (outline of the proof now in the item)

1. **Sign of the opposite-root bracket.** Invariance of $B$ gives
   $B([x,y],H)=B(x,[y,H])=\alpha(H)B(x,y)$ for $x\in\mathfrak g_\alpha$,
   $y\in\mathfrak g_{-\alpha}$, $H\in\mathfrak h$, so
   $[x,y]=+B(x,y)H_\alpha$ (the $+$ sign), and
   $[x,y]=h_\alpha\iff B(x,y)=2/(\alpha,\alpha)$.
2. **First rescaling.** Scale one vector in each pair
   $\{\alpha,-\alpha\}$ so that $[e_\alpha,e_{-\alpha}]=h_\alpha$ for all
   $\alpha$; the residual freedom is $t_\alpha t_{-\alpha}=1$.
3. **Chevalley involution.** For a base $\Delta$ the triples
   $(e_i,f_i,h_i)$ satisfy exactly the Serre relations, so the assignment
   $e_i\mapsto-f_i$, $f_i\mapsto-e_i$, $h_i\mapsto-h_i$ extends to an
   automorphism $\omega$ (constructed from the presented algebra
   $\mathfrak g(A)$ and transported to $\mathfrak g$), with
   $\omega|_{\mathfrak h}=-\operatorname{id}$ and
   $\omega(\mathfrak g_\alpha)=\mathfrak g_{-\alpha}$. If
   $\omega(e_\alpha)=c_\alpha e_{-\alpha}$ then $c_\alpha c_{-\alpha}=1$, and
   the rescaling $e_\alpha\mapsto t_\alpha e_\alpha$ with
   $t_\alpha^2=-1/c_\alpha$, $t_{-\alpha}=1/t_\alpha$ gives both
   $[e_\alpha,e_{-\alpha}]=h_\alpha$ and $\omega(e_\alpha)=-e_{-\alpha}$;
   consequently $N_{-\alpha,-\beta}=-N_{\alpha\beta}$.
4. **String-length identity.** For $\alpha+\beta\in\Phi$, the Cartan integers
   satisfy $nn'\in\{0,1,2,3\}$, $n=0\iff n'=0$,
   $n'/n=(\alpha,\alpha)/(\beta,\beta)$ (Cauchy–Schwarz plus integrality), and
   $p+q\le3$ (applied to the pair $(\alpha,\beta+q\alpha)$). The six resulting
   cases $(p,q)\in\{(0,1),(1,1),(2,1),(0,2),(1,2),(0,3)\}$ give
   $q(\alpha+\beta,\alpha+\beta)=(p+1)(\beta,\beta)$.
5. **Chevalley's identity.** The $\alpha$-string through $\beta$ spans an
   irreducible $\mathfrak{sl}_2$-module $V$ (highest weight $p+q$, all weight
   spaces one-dimensional), and the string through $-\beta$ spans the partner
   module $W$. Writing the root vectors in both modules in terms of
   $f$-powers and pairing the two strings by $B$ (using
   $B(fx,y)=-B(x,fy)$ and $B(e_\gamma,e_{-\gamma})=2/(\gamma,\gamma)$) yields
   $c_ic_i'=(-1)^{q-i}c_q'(\beta+q\alpha,\beta+q\alpha)/(\beta+i\alpha,\beta+i\alpha)$
   and hence
   $N_{\alpha,\beta+i\alpha}N_{-\alpha,-\beta-i\alpha}=-(p+i+1)^2$; at
   $i=0$, $N_{\alpha\beta}N_{-\alpha,-\beta}=-(p+1)^2$.
6. **Conclusion.** The product identity is invariant under the
   $t_\alpha t_{-\alpha}=1$ rescaling, so it holds for the
   $\omega$-normalised family; together with
   $N_{-\alpha,-\beta}=-N_{\alpha\beta}$ it gives
   $N_{\alpha\beta}=\pm(p+1)\in\mathbb Z$. The real span is then bracket
   closed with integral constants (and $h_\alpha\in\sum_i\mathbb Z h_{\alpha_i}$
   by the coroot-lattice statement), so it is a split real form; rescaling by
   $\lambda_\alpha=((\alpha,\alpha)/2)^{1/2}$ produces the Knapp-normalised
   system with $[X_\alpha,X_{-\alpha}]=H_\alpha$,
   $B(X_\alpha,X_{-\alpha})=1$ and real $C_{\alpha\beta}=-C_{-\alpha,-\beta}$.

## 4. Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-chevalley-basis-and-real-structure-constants.md`
  → **PASS (direct)**. (It first reported REPAIR; the canonical layered
  numbering it printed was adopted verbatim, which is the numbering in the
  file, including the reference remapping.)
- `node tools/rendercheck.mjs` → **OK** (all 21292 files; no wikilink inside
  math, no nested/unbalanced delimiters, no multiline display block, every
  math span parses under KaTeX, frontmatter parses).
- Dependency/link consistency (local script): 29 deps, all present as items,
  every body wikilink is a declared dep and every declared dep is linked —
  no unresolved links.
- `node tools/depcheck.mjs --quiet` → no finding for this item. The run-wide
  checker reports one ERROR, an item cycle between two other batch-13 items
  (see §6).
- `node tools/content-policy.mjs <pages.json>`: **not applicable to this
  item** — content-policy is a manifest-level check and reads
  `research/*pages.json`; the item's manifest row is added by the orchestrator
  (dispatch rule), so there is nothing to scope it to yet.
- Independent local verification in $\mathfrak{so}(5,\mathbb C)$ (type $B_2$,
  scratch computation, not part of the library): with the eight root vectors
  $V_\gamma=E_{ij}-E_{6-j,6-i}$, the Cartan $h_\alpha$ for all eight roots, and
  $B=3\operatorname{tr}(XY)$, I verified (a) that the normalisation
  $[e_\alpha,e_{-\alpha}]=h_\alpha$ is achieved by the rescaling of step 2;
  (b) that $\omega(X)=-X^{\mathsf T}$ satisfies $\omega(V_\gamma)=-V_{-\gamma}$
  and $\lambda_{-\gamma}=\lambda_\gamma$; (c) that
  $NN'\cdot\lambda_{\alpha+\beta}/(\lambda_\alpha\lambda_\beta)=-(p+1)^2$
  holds for all 24 pairs with $\alpha+\beta\in\Phi$ (0 failures), so the
  $\omega$-normalised basis has $N^2=(p+1)^2$ and $N_{-\alpha,-\beta}=-N_{\alpha\beta}$;
  e.g. the orthogonal pair $(\varepsilon_1,\varepsilon_2)$ has string
  $p=q=1$ and constant $|N|=2=p+1$. A control run confirms that the sign
  relation genuinely fails for a normalised but non-$\omega$-normalised
  family, i.e. the involution step is not redundant.

## 5. Decision record

Recording was attempted exactly as dispatched:

```
node tools/step3-decisions.mjs record-item --run phase-2-remaining-27 \
  --item lem-chevalley-basis-and-real-structure-constants --decision repaired \
  --confidence 1 --dependencies '[<the 29 deps, sorted as in the item>]' --reason '...'
```

It fails with `Step 3a must clear for the item pair before item auditing`,
because `loadStep3` looks the item up in the batch manifests
(`research/phase-2-remaining-27-batch-*.pages.json`) and no manifest row exists
yet — the row is owned by the orchestrator ("The orchestrator adds the manifest
row and wires the four escalated consumers"). No receipt was written and no
receipt file was hand-crafted. **Open obligation:** add the manifest row for
`lem-chevalley-basis-and-real-structure-constants` to batch 13, then rerun the
command above (the reason string is the one used here; it is also in
`.autopilot` events if the dispatcher logged it).

Related orchestrator-owned follow-ups: the manifest row should record
`axiom_base: ZFC` (the statement assumes AC and `def-axiom-of-choice` is a
declared dependency; item frontmatter in this run does not carry that field),
and the item should be placed on the pair's A page
`real-forms-and-real-semisimple-lie-algebras` before its four consumers.

## 6. Concerns for the owner (defects found, exact evidence)

Confirmed defects (not in my item; I did not edit them, per the dispatch):

1. `prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra`
   (draft, this run): the proof's display reads
   $[x,y]=-B(x,y)H_\alpha$, but invariance gives
   $B([x,y],H)=B(x,[y,H])=\alpha(H)B(x,y)$, so the correct identity is
   $[x,y]=+B(x,y)H_\alpha$. Direct check in $\mathfrak{sl}_2$ with the
   library's own definitions ($B$ = trace form, $B(e,f)=4$, $H_\alpha=h/4$,
   $[e,f]=h$) confirms the $+$ sign. Its *statement*
   $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]=\mathbb C H_\alpha$ is true;
   only the proof text is wrong. Repair: replace $-B(x,y)H_\alpha$ by
   $+B(x,y)H_\alpha$ in step 1.1 and drop the clause
   "$=-B(e,f)B(H_\alpha,H)$".
2. `thm-root-sl-two-triple` (draft, this run): step 1.1 chooses $f$ with
   $B(e,f)=-2/\alpha(H_\alpha)$ and step 2.1 then concludes $[e,f]=h_\alpha$;
   with the correct sign the choice must be $B(e,f)=+2/\alpha(H_\alpha)$.
   The *statement* (existence of an $\mathfrak{sl}_2$ triple) remains true.
   The same wrong displayed identity
   $[x,y]=-B(x,y)H_\alpha$ is used in step 1.1 of
   `lem-killing-length-of-a-root-is-nonzero` (its conclusion
   $\alpha(H_\alpha)\ne0$ is unaffected).
3. `thm-rank-two-root-system-classification` (draft, this run): statement (i)
   lists $(n_{\alpha\beta},n_{\beta\alpha})=(2,1)$ together with
   $|\alpha|^2=2|\beta|^2$ and $(-2,-1)$ with $135^\circ$, whereas with the
   item's own convention $n_{\alpha\beta}=2(\beta,\alpha)/(\alpha,\alpha)$ and
   $|\alpha|\ge|\beta|$ the correct pairs are $(1,2)$, resp. $(-1,-2)$ (since
   $n_{\beta\alpha}/n_{\alpha\beta}=|\alpha|^2/|\beta|^2$); the item's proof
   step 2.1 states the correct values, so only the statement is affected.
   This is why my item proves its Cartan-integer alternatives directly instead
   of citing that clause.

Structural finding:

4. `node tools/depcheck.mjs --quiet` reports
   `[item-cycle] CIRCULAR: prop-classical-real-forms-of-the-classical-complex-lie-algebras -> thm-classification-of-real-semisimple-lie-algebras -> prop-classical-real-forms-of-the-classical-complex-lie-algebras`
   (both batch-13 pair items, other slices). One of the two edges must be
   dropped by its owner.

Scope note on the number of escalated consumers: grepping all
`research/phase-2-remaining-27-step3b-review-*.json` for
`escalate` records that mention `Chevalley`/`6.6`/`structure constants` finds
exactly three items — `thm-existence-of-a-compact-real-form`,
`thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form`,
`thm-classification-of-real-forms-by-vogan-diagrams`. The dispatch speaks of
four; if the fourth is a different item, the dispatcher should name it so the
orchestrator can wire it (the item as written supplies both the
coroot-normalised Chevalley basis with integral $\pm(p+1)$ constants and the
Knapp-normalised system with $B(X_\alpha,X_{-\alpha})=1$, which is what the
three named remarks require).

## 7. Manifest patches proposed (orchestrator merges)

The item is new, so the orchestrator's manifest row for batch 13 should record:
`id: lem-chevalley-basis-and-real-structure-constants`, `kind: lemma`,
`title: Chevalley basis and real structure constants`, `status: draft`,
`axiom_base: ZFC`, home page `real-forms-and-real-semisimple-lie-algebras`, and
the 29 `deps` exactly as in the item frontmatter (no dep was changed relative to
what the dispatch suggested; the list is reproduced in the item and in §1/§4
above).

Of those 29 dependencies, 4 are published items from earlier runs
(`def-killing-form-of-a-finite-dimensional-lie-algebra`,
`prop-trace-forms-are-symmetric-and-invariant`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
`def-axiom-of-choice`) and 2 are intra-batch items of batch 13
(`def-real-form-of-a-complex-lie-algebra`, `def-split-real-form`); the remaining
23 are cross-batch in-run edges (22 from batch 11, 1 from batch 12) and need
rows in `research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json`.
Because the orchestrator owns the manifest row for this new item (and only the
consumer's owner edits that input file), I did not write into the shared input;
the rows to add are:

```json
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-root-and-root-space-relative-to-a-cartan-subalgebra", "status": "verified", "evidence": "Batch 11 supplier; use: the statement and [L1] (root spaces g_alpha and the decomposition are the setting).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra", "status": "verified", "evidence": "Batch 11 supplier; use: [L1] (direct sum decomposition, g_0 = h).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional", "status": "verified", "evidence": "Batch 11 supplier; use: [L1] (dim g_alpha = 1, needed for the coefficients c_i, c_j-).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "prop-brackets-of-root-spaces", "status": "verified", "evidence": "Batch 11 supplier; use: [L1] ([g_a,g_b] inside g_{a+b}, vanishing outside).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "prop-killing-form-orthogonality-of-root-spaces", "status": "verified", "evidence": "Batch 11 supplier; use: [L2] (B|h nondegenerate, B(g_a,g_b)=0 unless a+b=0).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "cor-opposite-root-spaces-pair-nondegenerately", "status": "verified", "evidence": "Batch 11 supplier; use: [L2] and step 2.1 (the pairing is nondegenerate and both lines are nonzero).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-killing-dual-vector-of-a-root", "status": "verified", "evidence": "Batch 11 supplier; use: [L3]/step 1.1 (H_alpha with B(H_alpha,H)=alpha(H)).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-coroot-of-a-lie-algebra-root", "status": "verified", "evidence": "Batch 11 supplier; use: [L3] (h_alpha and alpha(h_alpha)=2; used throughout).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "lem-killing-length-of-a-root-is-nonzero", "status": "verified", "evidence": "Batch 11 supplier; use: [L3] (alpha(H_alpha) != 0; only its statement is used).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "thm-root-string-property", "status": "verified", "evidence": "Batch 11 supplier; use: [L4] (string interval {-p,...,q} and p-q=beta(h_alpha)).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "cor-cartan-integers-are-integral", "status": "verified", "evidence": "Batch 11 supplier; use: [L4] (integrality of beta(h_alpha)).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system", "status": "verified", "evidence": "Batch 12 supplier; use: [L5] (Euclidean root system for (lambda,mu)=B(H_lambda,H_mu), positive definite form, h_R a real form of h, coroot basis, coroot lattice).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-reduced-crystallographic-euclidean-root-system", "status": "verified", "evidence": "Batch 11 supplier; use: [L5] (abstract reflection formula and integrality axiom).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "thm-finite-dimensional-representations-of-sl-two", "status": "verified", "evidence": "Batch 11 supplier; use: [L7] (complete reducibility and the weight structure m,m-2,...,-m).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-special-linear-lie-algebra-sl-two", "status": "verified", "evidence": "Batch 11 supplier; use: [L7] and step 4.2 (the triple relations of sl_2).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "thm-serre-presentation-theorem", "status": "verified", "evidence": "Batch 11 supplier; use: [L8] and step 5.1 (generation by simple-root triples and g(A) = g).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-serre-lie-algebra-of-a-finite-type-cartan-matrix", "status": "verified", "evidence": "Batch 11 supplier; use: [L8] (the Serre relations preserved by the involution).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-lie-algebra-presented-by-generators-and-relations", "status": "verified", "evidence": "Batch 11 supplier; use: step 5.1 (universal property used to build omega).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-cartan-matrix-of-a-based-root-system", "status": "verified", "evidence": "Batch 11 supplier; use: [L8] (a_ij = alpha_j(h_i)).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-positive-system-and-base-of-simple-roots", "status": "verified", "evidence": "Batch 11 supplier; use: [L5] and step 4.2 (existence of a base of a positive system).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates", "status": "verified", "evidence": "Batch 11 supplier; use: [L5] and step 4.2 (the base is a basis of E, so the coroots form a basis of h_R).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-coroot-and-dual-root-system", "status": "verified", "evidence": "Batch 11 supplier; use: [L5] (abstract coroot alpha^vee = 2 alpha/(alpha,alpha), identified with h_alpha).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
{"kind": "item", "consumer": "lem-chevalley-basis-and-real-structure-constants", "supplier": "def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice", "status": "verified", "evidence": "Batch 11 supplier; use: [L5] and step 10.1 (Q^vee is spanned by the simple coroots, integrality of the structure constants).; conventions (Killing form = trace form, alpha(h_alpha)=2, strings -p<=n<=q) match; no mismatch; repair owner: none."}
```

## 8. Honest gaps

- The proof is complete relative to the in-run suppliers it declares: the
  Serre presentation theorem, the Euclidean root-system proposition (positive
  definite form, real form of $\mathfrak h$, coroot lattice), and the
  finite-dimensional $\mathfrak{sl}_2$ representation theorem. I read the
  statements and the proof texts of
  `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` and
  `thm-finite-dimensional-representations-of-sl-two` and used them as stated;
  an independent Step-5 reader should re-verify those suppliers rather than
  take this report for it.
- I did not read Humphreys' book or Bourbaki directly; the statements of the
  Chevalley basis theorem used for orientation were Knapp's Theorem 6.6 (read
  in full) and the Geck–Lang summary (partial read). Every mathematical step
  in the item is re-proved there, so no step depends on an unread source.
- Where a supplier's proof text is defective but its statement is the true and
  sufficient claim (items 1–3 of §6, including
  `lem-killing-length-of-a-root-is-nonzero`, whose statement
  $\alpha(H_\alpha)\ne0$ the item uses), the item depends on the *statement*
  only; the sign slips there do not enter its proof.
- No unresolved mathematical gap in the item is known to me; the only open
  item is the mechanical decision receipt of §5, which is blocked on the
  orchestrator-owned manifest row.
