# Step 3b — pair `normalization-finiteness-for-affine-domains` (dispatch notes)

Run: `frontier-35-ten-categories` · Role: `alpha-high` · Label:
`step3b-pair-normalization-finiteness-for-affine-domains-c7cdabb0c06be3ae`
Owned pair: A `normalization-finiteness-for-affine-domains` (order 366.0601, 11 items),
B `normalization-finiteness-for-affine-domains-examples` (order 366.0602, 3 items).
Batch 4 also contains the sibling pair `algebraic-zariski-main-for-quasi-finite-morphisms`
(366.0603) and its companion (366.0604); entries 2–3 of
`research/frontier-35-ten-categories-batch-4.pages.json` are preserved verbatim and none of
its item files are touched here.

This file is the assigned checkpoint/technical report. It is not a transcript: it records
state, exact claims, source locators, dependencies, decisions, checks and open gaps for each
item, in prerequisite order.

## Scope review status

- Step-3a scope decision for the A page: `research/frontier-35-ten-categories-step3a-review-normalization-finiteness-for-affine-domains.json`,
  decision `sufficient`, confidence 1, scope hash
  `9c14c9b8d2cebbb93ae4c9b132ca19677a4f12c0aaf9bd0bf36d47350691dc2d`, recorded 2026-09-24.
  That review flagged (i) the morphism/rational-map dictionary needed by
  `cor-affine-normalization-is-finite` lives on
  `library/algebraic-geometry/morphisms-local-rings-and-rational-maps-of-affine-varieties.md`
  (published, earlier in reading order, outside this page's `requires`), and (ii) the pair must
  stay choice-free except for the AC declaration of `cor-affine-normalization-is-finite`.
- Manifest statement/title/kind/inventory edits invalidate the scope hash and need a fresh
  non-owner `record-scope --decision sufficient`; dependency-list-only edits do not.

## Axiom policy for this pair

Every item except `cor-affine-normalization-is-finite` is authored to be choice-free; the
corollary declares `def-axiom-of-choice` and states AC explicitly, with AC used only to pass
from the finite normal $k$-algebra to a classical affine variety through the published
Nullstellensatz/coordinate dictionary. The AC-bearing published items
`thm-affine-algebraic-sets-coordinate-duality`, `thm-affine-variety-prime-coordinate-ring`
are consumed only by that corollary. The published trace/characterisation results
(`thm-purely-inseparable-extension-characterizations`,
`thm-finite-integral-closure-in-a-finite-separable-extension`,
`lem-trace-pairing-for-a-finite-separable-extension`, `thm-trace-form-is-nondegenerate-iff-separable`,
`thm-field-norm-and-trace-by-embeddings`, `thm-hilbert-basis-theorem`,
`thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`,
`thm-noetherian-ring-ideal-characterisations`) are deliberately not used anywhere in this
pair; the replacement machinery is proved locally (items 4, 5, 7, 8).

## Items in prerequisite order

### 1. `lem-integral-closure-unchanged-across-an-integral-intermediate-domain` — COMPLETE

- Claim: domains $A\subseteq B\subseteq L$, $B$ integral over $A$; then $z\in L$ is integral
  over $A$ iff $z$ is integral over $B$ (both closures computed inside the same fixed ambient
  field $L$).
- Argument: forward direction reuses the monic equation (coefficients already in $A\subseteq B$);
  converse uses `cor-integral-elements-form-a-subring` ($B[z]/B$ integral) plus
  `thm-transitivity-of-integrality` ($B/A$ integral).
- deps: `def-integral-closure-and-integrally-closed-domain`, `thm-transitivity-of-integrality`,
  `def-integral-element-and-algebraic-integer`, `def-integral-ring-extension`,
  `cor-integral-elements-form-a-subring`, `def-zero-divisor-and-integral-domain`.
- Sources/locators: Milne CA §6 Prop 6.4; Stacks 032N area (§10.161).
- Checks actually run: `precheck` PASS (direct, canonical numbering adopted), `rendercheck` OK.
- Boundaries recorded: $z=0$, $B=A$, $z\in B$, degenerate $L=B$; no choice principle used.

### 2. `lem-finite-purely-inseparable-rational-extension-envelope` — COMPLETE

- Claim: $K$ of characteristic $p>0$, $x_1,\ldots,x_d$ algebraically independent,
  $F=K(x_1,\ldots,x_d)$; for $L/F$ finite purely inseparable there are a finite purely
  inseparable $K'/K$ and $q=p^{e}$ with an $F$-embedding
  $L\hookrightarrow K'(x_1^{1/q},\ldots,x_d^{1/q})$.
- Argument (choice-free, no ambient algebraic closure): finite $F$-basis $(u_j)$ of $L$;
  $F=\operatorname{Frac}(K[x_i])$; one common $q=p^e$ with $u_j^{q}\in F$; write each $u_j^q$
  as a fraction and collect the finite coefficient set $S$; build $K'$ by iterated adjunction of
  $p$-power roots of the $x_i$ and of the elements of $S$ inside one explicitly constructed
  field $\Omega$; Frobenius identifies the transported generators; induction via
  `lem-an-isomorphism-extends-across-a-simple-root-adjunction` extends the base embedding of
  $F$ to an embedding $L\to\Omega$.
- deps: the 20 published items listed in the item frontmatter (Frobenius, simple adjunction
  isomorphism extension, p-power irreducibility, tower law, …). No AC/DC reach (verified by
  dependency walk over published items).
- Sources/locators: Stacks Lemma 10.161.13 (tag 032O, proof of the imperfect-base case);
  Milne FT0 Ch. 3 (purely inseparable extensions).
- Checks actually run: `precheck` PASS (direct), `rendercheck` OK.
- Boundaries recorded: $d=0$; $q=1$; $r=0$; $u_j\in F$; $\beta_j$ not a $p$-th power.
- Open polish: fact [L14] restates algebraic independence as vanishing of the kernel of
  evaluation $K[X_1,\ldots,X_d]\to F$ and links `def-polynomial-evaluation-and-root`; that item
  is added to `deps` when the batch dependency lists are finalised (dependency-only change).

*(Checkpoints for items 3–11 and the three B items are appended below as they are completed.)*

### 3. `lem-polynomial-algebras-over-fields-are-integrally-closed` — COMPLETE

- Claim: for every field $K$ and finite $d\ge0$, $K[x_1,\ldots,x_d]$ is an
  integrally closed domain.
- Argument: (P1)+(P2) (factorisations into irreducibles, irreducibles prime)
  give uniqueness of factorisation and integral closedness by minimal-denominator
  descent (steps 1.1, 2.1); content and Gauss's lemma give that $R$ a UFD implies
  $R[x]$ is a UFD with prime irreducibles (steps 1.2, 1.3, 2.2, 2.3, 3.1, 3.2,
  4.1, 5.1); induction on $d$ then handles all finite variable counts, with $d=0$
  (a field) as the base (steps 6.1, 7.1).
- deps: as in frontmatter (UFD/primeness definitions, Gauss's lemma,
  $F[x]$ a UFD and irreducibles prime, polynomial degree laws, well-ordering).
- Sources/locators: Stacks §10.37 Lemma 10.37.6 and 10.37.8 (tag 037B);
  Stacks Lemma 10.161.13 (tag 032O), which invokes 037B.
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (19 citations, 12 derivations) PASS.
- Boundaries recorded: `d=0`, zero element, length-one products, field case,
  induction endpoints, finite selections only.

### 4. `lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct` — COMPLETE

- Claim: $K[x_1,\ldots,x_d]$ is Noetherian (each ideal has a finite generating
  list) for every field $K$ and finite $d\ge0$; the proof is choice-free.
- Argument: a field is Noetherian (step 1.1); for Noetherian $C$ the leading
  ideals $J_n\subseteq C$ and their union $J$ stabilise at an explicit stage $N$
  (step 1.2), a finite witness list $W$ generates $I$ by degree descent, done
  without ACC or DC; induction on $d$ (steps 2.1, 3.1).
- deps: Noetherian ring/module definitions, ideals as submodules, polynomial
  ring and degree laws, multivariate iteration, well-ordering.
- Sources/locators: Milne CA §3 Theorem 3.7 (printed p. 11).
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (13 citations, 4 derivations) PASS.
- Boundaries recorded: empty generating list, zero ideal, unit ideal, field
  case, stabilisation endpoint $N$, finite selections only.
- Local supplier: replaces the published `thm-hilbert-basis-theorem`, whose
  transitive closure reaches a choice principle (see Published concerns).

### 5. `lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct` — COMPLETE

- Claim: over a commutative Noetherian ring $R$, every submodule $N$ of a
  finitely generated $R$-module $M$ is finitely generated; choice-free.
- Argument: induction on the rank $n$ of $R^{(X_n)}$ using the coordinate
  projection and the kernel (step 1.1); passage to $M$ along a finite surjection
  and preimage of $N$ (step 2.1); summary (step 3.1).
- deps: Noetherian ring/module, submodule, free module and its universal
  property, module-homomorphism kernel/image, ideals as submodules.
- Sources/locators: Milne CA §3 Proposition 3.4 (printed p. 10).
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (11 citations, 3 derivations) PASS.
- Boundaries recorded: base case $n=0$, zero module, one-coordinate case,
  degenerate submodules, finite lifts.
- Local supplier: replaces the published
  `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`, whose
  proof reaches chain-condition/choice machinery (see Published concerns).

### 6. `lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite` — COMPLETE

- Claim: for $K$ of characteristic $p>0$, $K'/K$ finite purely inseparable,
  $q=p^{e}$, $x_1,\ldots,x_d$ algebraically independent and
  $E=K'(x_1^{1/q},\ldots,x_d^{1/q})$, the closure of $R=K[x_1,\ldots,x_d]$ in
  $E$ is exactly $K'[x_1^{1/q},\ldots,x_d^{1/q}]$, and for every intermediate
  field $K(x_1,\ldots,x_d)\subseteq L\subseteq E$ the closure in $L$ is a finite
  $R$-module.
- Correction made after the scaffold audit: the hypothesis of the statement is
  the scaffold's promised "for $q=p^{e}$" WITHOUT an added
  $K'^{q}\subseteq K$ assumption (an earlier draft had silently strengthened it).
  Step 1.1 now derives an exponent $N\ge0$ with $K'^{p^{N}}\subseteq K$ from
  finiteness of $K'/K$ plus Frobenius additivity and finiteness of the extension
  span, and runs the algebraic-independence argument with the $p^{N}q$-th power.
  Consequently no manifest statement changed and the Step-3a scope hash
  `9c14c9b8d2cebbb93ae4c9b132ca19677a4f12c0aaf9bd0bf36d47350691dc2d` remains
  valid.
- Argument: step 1.1 (algebraic independence of the $y_i=x_i^{1/q}$ over $K'$,
  closure $\operatorname{Frac}(T)=E$, $T$ normal as a polynomial ring over the
  field $K'$); step 2.1 (two inclusions identifying the closure with $T$);
  step 2.2 (explicit finite spanning list
  $\beta_jy_1^{a_1}\cdots y_d^{a_d}$, $0\le a_i<q$); step 3.1 (submodule of a
  finite module over the Noetherian $R$).
- deps: item 2's consumers on this page are not used; the item uses items 3 and
  4, the closure/integrality definitions, and the published polynomial-ring,
  Frobenius and degree facts listed in its frontmatter.
- Sources/locators: Stacks Lemma 10.161.13 (tag 032O) proof; Stacks Lemmas
  10.161.12–13 (tag 032N).
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (22 citations, 4 derivations) PASS.
- Boundaries recorded: $d=0$, $N=0$, $q=1$, $m=1$, $L=E$ endpoint, finite
  monomial list.

### 7. `lem-normal-extension-separable-over-maximal-purely-inseparable-subextension` — COMPLETE

- Claim: for $M/F$ finite normal with $G=\operatorname{Aut}(M/F)$ and
  $E=M^{G}$: $G$ is finite, $[M:E]=|G|$, $M/E$ is finite Galois (hence
  separable), $E/F$ is finite purely inseparable, and $E=F$ in characteristic
  zero; choice-free.
- Argument: finiteness of $G$ by injectivity into a finite product of root sets
  (step 1.1); fixed-field degree by the published Artin bounds (step 2.1);
  orbit polynomials over $E$ give normality and separability of $M/E$
  (step 3.1); conjugates of $a\in E$ lie in $M$ and the isomorphism-extension
  theorem makes them fixed, so its minimal polynomial has one root; the
  separable-core factorisation gives $a^{p^{e}}\in F$ in characteristic $p$ and
  separability forces $a\in F$ in characteristic zero (step 4.1).
- deps: normal/Galois/separable definitions, Artin bounds (choice-free
  published), splitting-field extension theorem, separable-core factorisation,
  Frobenius, root bound, tower law.
- Sources/locators: Stacks Lemma 9.27.3 (tag 030M); Milne FT0 Ch. 3 Theorems
  3.4 and 3.10.
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (26 citations, 4 derivations) PASS.
- Boundaries recorded: trivial $G$, characteristic zero, singleton orbit,
  purely inseparable case, Artin-bound endpoints, finite selections only.
- Note: `thm-relative-automorphism-group-and-separable-degree-bound` is NOT
  used; the two Artin bounds are.

### 8. `thm-polynomial-algebras-over-fields-have-finite-integral-closures` — COMPLETE

- Claim: for any field $K$, $R=K[x_1,\ldots,x_d]$ and finite $L/K(x_1,\ldots,x_d)$,
  the integral closure of $R$ in $L$ is a finite $R$-module; choice-free.
- Argument (canonical post-repair numbering 1.1, 1.2, 2.1, 3.1, 4.1, 4.2, 5.1,
  5.2, 6.1, 7.1, 8.1, 9.1, 9.2, 10.1, 11.1, 12.1, 13.1, 14.1; facts
  [L1]–[L17]): a finite $F$-basis and its minimal polynomials give a splitting
  field $M$ of the finite family (2.1) that is finite and normal over $F$
  (3.1) without presupposing an algebraic closure; the fixed field $E=M^{G}$
  has finite purely inseparable $E/F$ and finite Galois $M/E$ (3.1); the
  closure $C$ of $R$ in $E$ is finite over $R$ (5.1: $C=R$ in characteristic
  zero; otherwise transferred along the Frobenius envelope of item 6) and
  $\operatorname{Frac}(C)=E$ (5.2); a primitive element $\theta$ is scaled to an
  integral $\theta_0=c\theta$ (4.2, 6.1); the conjugates
  $\alpha_j=\sigma_j(\theta_0)$ are distinct (7.1); Cramer's rule gives
  $\delta c_i\in D$ with $\delta=\det(\alpha_j^{i})\ne0$ (8.1, 9.1, 9.2); the
  norm-like product $c=\prod_j\sigma_j(\delta)\in C\setminus\{0\}$ is fixed by
  $G$ and gives $D\subseteq\sum_i C\,\theta_0^{i}/c$ (10.1, 11.1); $D$ is finite
  over $R$ and over $C$ (12.1, 13.1); finally the closure of $R$ in $L$ is
  $D\cap L$, a submodule of the finite $R$-module $D$ (14.1).
- deps: items 2, 6, 7, 1, 4, 5, 3 of this page plus the published field-theory,
  splitting-field, primitive-element, matrix and integrality items listed in the
  frontmatter.
- Sources/locators: Stacks Lemmas 10.161.12–13 (tags 032N, 032O); Milne AG
  §1 Propositions 1.40, 1.44, 1.51 and §8 Proposition 8.3; Milne CA §§6, 17;
  Stacks Lemma 9.27.3 (tag 030M).
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (52 citations, 18 derivations) PASS.
- Boundaries recorded: $d=0$, characteristic zero, $n=1$, degenerate extension
  cases, product/identity endpoints, finite selections only.
- Repair made during this dispatch: step 5.1's embedding symbol was renamed
  from $\iota$ to $\eta$ (content-policy reserves applied $\iota$ notation for
  the canonical natural-number embedding); the mathematical content is
  unchanged and the item's contract entry was regenerated.

### 9. `thm-integral-closure-finite-finite-type-domain-over-field` — COMPLETE

- Claim: a finite-type integral domain $A$ over a field $k$ has finite
  normalisation: its integral closure in $\operatorname{Frac}(A)$ is a finite
  $A$-module; choice-free.
- Argument: Noether normalisation gives $R=k[z_1,\ldots,z_d]\subseteq A$ with
  $A$ finite over $R$, so every $a\in A$ is integral over $R$ via the faithful
  finite $R[a]$-module $A$ (step 1.1); $\operatorname{Frac}(A)/F$ is finite
  (step 2.1); item 8 makes the closure $B$ of $R$ in $\operatorname{Frac}(A)$ a
  finite $R$-module (step 3.1); item 1 identifies $B$ with the closure of $A$,
  and the same $R$-generators generate $B$ over $A$ (step 4.1).
- deps: `cor-noether-normalisation-module-finiteness`,
  `thm-integrality-and-finite-module-equivalences`, items 1 and 8, plus the
  definitions listed in the frontmatter.
- Sources/locators: Milne AG §8 Proposition 8.3 (printed p. 177); Stacks
  Lemmas 10.161.12–13 (tags 032N, 032O); Milne CA §§6, 17.
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (17 citations, 4 derivations) PASS.
- Boundaries recorded: $d=0$ / $A=k$, faithfulness at zero, $n=1$, generator
  transfer endpoints, finite selection.

### 10. `cor-affine-normalization-is-finite` — COMPLETE

- Claim (states AC explicitly): for an irreducible affine variety $X$ over an
  algebraically closed field $k$ with normalisation $B$ of $A=k[X]$ in $k(X)$
  and $Y$ an affine variety with $k[Y]\cong B$, the inclusion corresponds to a
  unique morphism $\nu:Y\to X$, $Y$ is normal, $\nu$ is birational and finite in
  the concrete sense that $k[Y]$ is a finite $k[X]$-module. No smoothness or
  projectivity asserted.
- Argument: $A$ is a finite-type domain, so $B$ is a finite $A$-module (step
  1.1, item 9, choice-free); $B$ is a reduced affine $k$-algebra and $Y$ is a
  nonempty affine variety with integrally closed coordinate ring (step 2.1);
  the published morphism anti-equivalence attaches $\nu$ to the inclusion
  (step 3.1); clause 4 is the same finite-module structure (step 4.1);
  birationality: the pullback on function fields is the identity under the
  identifications $k(X)=\operatorname{Frac}(A)$,
  $k(Y)\cong\operatorname{Frac}(B)=\operatorname{Frac}(A)$, and functoriality of
  the rational-map correspondence gives the inverse (step 4.2); step 5.1 books
  the AC use.
- deps: item 9 plus the published classical affine dictionary (declared
  `def-axiom-of-choice` is in the deps list, and the AC-bearing published items
  are consumed only here).
- Sources/locators: Milne AG §8 Proposition 8.3 and Example 8.6 (printed
  pp. 177–178); Stacks Lemmas 10.161.12–13 (tag 032N); Milne CA §§6, 17.
- Checks actually run: `precheck` PASS (first pass, no repair), `rendercheck`
  OK, strict contract entry (24 citations, 6 derivations) PASS.
- Boundaries recorded: $Y\ne\varnothing$ and $k[Y]\ne0$, unit module case,
  already-normal $B=A$, composition endpoints, AC confined to the dictionary.

### 11. `lem-finite-normalization-compatible-with-principal-opens` — COMPLETE

- Claim: for a finite-type domain $A$ over $k$ with normalisation $B$ and
  $0\ne f\in A$, the closure of $A_f$ inside the fixed field
  $\operatorname{Frac}(A)$ is exactly $B_f$, and $B_f$ is a finite
  $A_f$-module.
- Argument: $S_f\subseteq A\setminus\{0\}$ and $\operatorname{Frac}(A_f)=
  \operatorname{Frac}(A)$ (step 1.1); the third clause of the published
  `thm-integrality-commutes-with-localisation` gives the canonical equality
  $S_f^{-1}B$ inside the fixed field (step 2.1); a finite $A$-generating list of
  $B$ localises to a finite $A_f$-generating list of $B_f$ (step 3.1).
- Sources/locators: Stacks Lemma 10.36.11 (tag 0307, "integral closure
  commutes with localization"); Milne CA §6, §17.
- Repair made during this dispatch: the scaffold's Stacks reference pointed at
  tag 00PI / "Lemma 10.123.14", whose content is the Zariski-Main-Theorem
  finite-open factorisation and not localisation of finite algebras; it is
  replaced by the correct tag 0307 (Lemma 10.36.11). The mathematical content
  and the dependencies are unchanged.
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (13 citations, 3 derivations) PASS.
- Boundaries recorded: nonempty generating list and $S_f\ni1$, $f\ne0$, unit
  case $f=1$, $B=A$ / $f\in A^{\times}$, powers endpoint $n=0$, one finite list.

### B1. `ex-integral-closure-cusp-semigroup-affine-domain` — COMPLETE

- Claim: for any field $k$, the normalisation of $A=k[t^{2},t^{3}]$ in $k(t)$ is
  $k[t]=A+At$, a finite $A$-module.
- Argument: $t=t^{3}/t^{2}\in\operatorname{Frac}(A)$ gives
  $\operatorname{Frac}(A)=k(t)$ (step 1.1); $t$ is a root of the monic
  $T^{2}-t^{2}\in A[T]$, and exponent reduction gives $k[t]=A+At$ as a finite
  $A$-module of integral elements (step 1.2); an element of $k(t)$ integral over
  $A$ is integral over the integrally closed $k[t]$, hence lies in $k[t]$
  (step 2.1).
- Sources/locators: Milne AG Example 8.6(a) (printed p. 178); Stacks 032O;
  Milne CA §§6, 17.
- Repair made during this dispatch: fact [L5] (cancellation in a domain) was
  previously unused; step 1.1 now uses it for $t^{2}\ne0$, so the fact is
  load-bearing and the item's contract entry is complete.
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (14 citations, 3 derivations) PASS.
- Boundaries recorded: no empty set arises, nonzero denominator, unit element,
  all characteristics, residue endpoints, no selection at all.

### B2. `ex-normalization-nodal-coordinate-domain` — COMPLETE

- Claim (char $k\ne2$): $A=k[x,y]/(y^{2}-x^{2}(x+1))$ is a domain, the
  substitution $x\mapsto t^{2}-1$, $y\mapsto t(t^{2}-1)$ induces an injection
  $A\hookrightarrow k[t]$, the normalisation of $A$ in $k(t)$ is $k[t]=A+At$,
  and the origin has exactly the two preimages $t=1$, $t=-1$.
- Argument: $\sigma$ kills the relation and factors through $A$ (step 1.1);
  injectivity by monic division in $(k[x])[y]$ and separation of even and odd
  coefficients, using monicity of $(t^{2}-1)^{m}$ (step 1.2); $t=\bar y/\bar x$,
  $\operatorname{Frac}(A)=k(t)$, $t$ integral via the monic
  $T^{2}-(\bar x+1)$, $k[t]=A+At$ finite (step 2.1); closure containment by
  integral closedness of $k[t]$ (step 3.1); origin preimages from
  $t^{2}-1=(t-1)(t+1)$ and $1\ne-1$ (step 4.1).
- Sources/locators: Milne AG Example 8.6(b) (printed p. 178).
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (17 citations, 5 derivations) PASS.
- Boundaries recorded: nonempty two-point fibre, origin at zero, unit leading
  coefficient, $\operatorname{char}k\ne2$ used exactly for $1\ne-1$, parity
  endpoints, no selection.

### B3. `ex-integral-closure-monomial-curve-t3-t4-t5` — COMPLETE

- Claim: for any field $k$, the normalisation of $A=k[t^{3},t^{4},t^{5}]$ in
  $k(t)$ is $k[t]=A+At+At^{2}$; the conductor ideal $(t^{3},t^{4},t^{5})$ is
  proper and is explicitly not the object computed.
- Argument: $t=t^{4}/t^{3}\in\operatorname{Frac}(A)$ gives
  $\operatorname{Frac}(A)=k(t)$ (step 1.1); $t$ is a root of the monic
  $T^{3}-t^{3}$, and exponent reduction modulo $3$ gives $k[t]=A+At+At^{2}$
  finite over $A$ (step 1.2); closure containment by integral closedness of
  $k[t]$ (step 2.1).
- Repair made during this dispatch: the scaffold's Milne AG reference cited
  "Example 8.6 (monomial curve normalisations)", but Example 8.6 in Milne AG
  covers only the cuspidal and nodal cubics; the reference now points at
  Proposition 8.3 (the finiteness theorem this example instantiates). The
  Stacks 032O reference is unchanged.
- Checks actually run: `precheck` PASS, `rendercheck` OK, strict contract entry
  (12 citations, 3 derivations) PASS.
- Boundaries recorded: no empty set arises, nonzero denominator, unit element,
  all characteristics, residue endpoints, no selection.

## Scaffold audit summary (what was checked and what was repaired)

Audited against the Step-1 scaffold manifest, the Step-3a scope review and the
coverage harvest: statements and their quantifiers, the implicit uses of each
fact (checked mechanically by the strict proof contract over all 14 items:
266 citations, 112 boundary rows), well-definedness of every construction,
prerequisites (items 1–11 in order, the three examples after the A page), and
source locators. Repairs actually made:

1. Item 2: `def-polynomial-evaluation-and-root` added to `deps` (its fact [L14]
   links it) — dependency-only change, no scope-hash impact.
2. Item 6: the scaffold statement kept verbatim; the proof no longer assumes
   $K'^{q}\subseteq K$ but derives an exponent $N$ with $K'^{p^{N}}\subseteq K$
   in step 1.1.
3. Item 8: step 5.1's applied $\iota$ renamed to $\eta$ (content-policy).
4. Item 11: the Stacks locator corrected from tag 00PI (Lemma 10.123.14,
   Zariski-Main finite-open factorisation) to tag 0307 (Lemma 10.36.11,
   integral closure commutes with localization), matching the mathematical
   content actually used.
5. B1: fact [L5] made load-bearing in step 1.1 instead of dangling.
6. B3: the Milne AG locator corrected from Example 8.6 (cusp and node only) to
   Proposition 8.3.
7. Batch manifest: the `deps` arrays of the two owned pages were refreshed from
   the authored item frontmatter (dependency-only edit; ids, kinds, titles and
   statements untouched, sibling entries preserved byte-for-byte).
8. Coverage: two sources added to the owned A entry (Stacks §10.36 tag 0307,
   Stacks §10.37 tag 037B) with their harvested headings registered as
   `included`/`inline` rows for items 3, 11, and a `canonical` list registering
   `cor-affine-normalization-is-finite` and
   `ex-integral-closure-monomial-curve-t3-t4-t5`. No decline disposition was
   changed; no sibling row was touched.

## Checks actually run (exact commands and results)

- `node tools/tsx-run.mjs tools/precheck.mts <all 14 item files>` →
  `14 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs <14 items + both new page files>` →
  `OK — 16 file(s)`.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-4.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 14/14 item(s) checked`.
- `node tools/citation-fidelity.mjs <batch contract> --fail-on-missing-quote`
  → `266 citation(s) over 14 authored item(s)`, `QUOTE NOT FOUND — none`;
  one advisory widening candidate on item 8 [L11] (cited text prints the
  variable as $d$, the restatement as $n$), read and judged faithful.
- `node tools/boundary-audit.mjs <batch contract>` → `112 rows`, no template
  reuse at or above 3 members, no contradicted dispositions.
- `node tools/finite-smoke.mjs <batch contract>` → 0 errors (no registered
  obligations; the item-level finite checks live in the derivations).
- `node tools/risk-report.mjs <batch contract>` → 0 errors, 14 items routed
  (11 CRITICAL) for the later risk-review tier.
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-4.pages.json`
  → `32 item(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-4.coverage.json --require-destination`
  → `2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/url-sweep.mjs --coverage <batch 4 coverage> --recover --fail-on-dead`
  → all URLs live; after the refresh, `source-fetch-check` reports
  `11/11 source(s) fetch-verified`; `source-backing` reports
  `25 authored result(s) … every one still backed`.
- `node tools/validate-plan.mjs research/plan-spec.json` → `OK — declared page
  order is acyclic and consistent; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among the 1188 page(s) with item
  lists` (the run-wide warnings and the 431 planned pages without item lists
  are pre-existing and belong to Step 4).
- `node tools/content-policy.mjs <batch 4 manifest>` → 18 `scope-item-missing`
  errors, all for items of the SIBLING pair
  `algebraic-zariski-main-for-quasi-finite-morphisms` (whose files another
  group is still authoring); zero errors for the owned pair after the $\iota$
  repair.
- `node tools/depcheck.mjs` (repo-wide) → no error names any of the 14 owned
  items; the run-wide failure list is pre-existing (unrelated cycles and
  justification-backward findings elsewhere).
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`
  → owned pair closed (`sufficient`, hash unchanged); the three remaining pairs
  in `work` belong to other dispatches.

## Local suppliers and axiom bookkeeping

- Added on this page, before their consumers: item 3 (polynomial algebras over
  fields are integrally closed), item 4 (finite-variable polynomial algebras
  are Noetherian, finite-generator proof), item 5 (submodules of finite modules
  over a Noetherian ring are finite, rank induction). They are registered in the
  manifest, the coverage entry and the batch proof contract.
- Axioms: every item of the pair except `cor-affine-normalization-is-finite` is
  authored choice-free; the corollary declares `def-axiom-of-choice` and states
  AC explicitly, spending it only through the published classical affine
  dictionary. No item of the pair depends on
  `thm-purely-inseparable-extension-characterisations`,
  `thm-finite-integral-closure-in-a-finite-separable-extension`,
  `lem-trace-pairing-for-a-finite-separable-extension`,
  `thm-trace-form-is-nondegenerate-iff-separable`,
  `thm-field-norm-and-trace-by-embeddings`, `thm-hilbert-basis-theorem`,
  `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`,
  `thm-noetherian-ring-ideal-characterisations`,
  `thm-artin-fixed-field-degree-theorem`,
  `thm-relative-automorphism-group-and-separable-degree-bound`,
  `cor-finite-variable-polynomial-ring-noetherian` or
  `cor-principal-ideal-domains-are-noetherian`.

## Published concerns (reported, not repaired here)

All are dependency/axiom-strength findings about published material, offered as
suspicions with the evidence that a dependency walk reaches a choice principle;
none is a claim that the published statements are false.

1. `thm-purely-inseparable-extension-characterisations` — AC reach. Confidence:
   high (dependency walk). Supplier in this pair:
   `lem-finite-purely-inseparable-rational-extension-envelope`. Repair strategy:
   keep using the local envelope item; flag for the serial reconciler.
2. `thm-finite-integral-closure-in-a-finite-separable-extension` — AC reach via
   the trace pairing; replaced by local items 6–8.
3. `thm-finite-normal-closures-exist-and-are-finite` — assumes an ambient
   algebraic closure as a prerequisite scope gap; this pair instead constructs
   a finite splitting field (items 2, 7, 8). Not consumed anywhere here.
4. `thm-hilbert-basis-theorem` — DC/AC reach; replaced by local item 4.
5. `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` — AC
   reach via chain conditions; replaced by local item 5.

## Open obligations

- Cross-batch ledger: the batch-4 input
  `research/frontier-35-ten-categories-batch-4.cross-batch-dependencies.json`
  is `[]`, which is correct — a closure walk over all 14 authored items found
  zero dependencies on other in-run pairs. The unified ledger was refreshed
  after the last dependency edit
  (`node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`,
  exit 0): batch 4 is in `reviewed_batches`, there are no unreviewed batches,
  no orphaned reviews, and 0 of the 21 declared edges touch batch 4.
- The sibling pair `algebraic-zariski-main-for-quasi-finite-morphisms` (batch 4,
  orders 366.0603/366.0604) is only partly on disk: `content-policy` reports 18
  `scope-item-missing` errors for its items. Those are its owner's obligations;
  nothing in this pair depends on them.
- `cor-affine-normalization-is-finite` consumes the published morphism/rational
  map dictionary that lives outside this page's `requires` closure (flagged by
  the Step-3a scope review and unchanged by this dispatch); Step 4's
  `undeclared-prereq` adjudication owns that edge.
- Item 8's [L11] widening candidate (variable letter only) is a read-and-cleared
  advisory; no action owed.
- Run-wide Step-3b closure still requires the other 25 pairs' dispatches; the
  repo-wide `content-policy`/`depcheck`/`extcheck` failures outside batch 4 are
  pre-existing and not attributable to this pair.

## Handoff addendum (resumed turn, disk re-verified)

Re-read of the checkpoint against disk, then the full battery re-run on the
current content (no content edits were made in this turn):

- All 14 item files exist with 53–118 lines each; both page files exist with
  `items:` (11 A items) / `examples:` (3 B items) and `requires:` as recorded.
- `precheck` on the 14 item files → `14 checked, 0 failing — all clean`;
  `rendercheck` on the 14 items + 2 pages → `OK — 16 file(s)`.
- `proof-contract --strict` → `0 error(s), 0 warning(s), 14/14 item(s) checked`;
  `manifest-deps` → `32 item(s), 0 error(s)`; `coverage-checklist
  --require-destination` → `2 page(s), 51 harvested result(s), 0 error(s),
  0 warning(s)`.
- `citation-fidelity --fail-on-missing-quote` → no missing quotes; the single
  advisory widening candidate is item 8 [L11] (variable letter `d` vs `n`),
  re-read and faithful: item 3 quantifies over all fields and all finite
  $d\ge0$, exactly as restated. `boundary-audit` → no template reuse, no
  contradicted dispositions. `finite-smoke` → 0 errors. `risk-report` → 0
  errors, 14 items routed to the later risk-review tier.
- `content-policy` on the batch manifest → 18 `scope-item-missing` errors, all
  for the sibling pair's unwritten items; 0 for this pair.
- `step3-decisions check --phase final` → none of the 14 owned item IDs appears
  in an open entry; all 14 receipts are `accept` (confidence 1) with the
  frontmatter dependency lists.
- `validate-plan.mjs research/plan-spec.json` → `OK` (1188 pages with item
  lists; remaining warnings are pre-existing, outside this pair).
- `frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` →
  exit 0, batch 4 reviewed, 0 edges touching batch 4, no orphaned reviews.
- Sibling preservation re-checked structurally: batch-4 manifest entries 2–3
  still carry the Step-1 scaffold item objects (statements, strategies,
  sources) and have no overlap with any owned item as a dependency; the
  sibling coverage entry has no `canonical` row and its 3 sources untouched.

Handoff state: 14/14 items authored and complete; both A/B pages written;
manifest, coverage, contracts and receipts registered; no unresolved
mathematics, no owner-held escalations raised by this dispatch, and no open
obligation inside the owned pair. The items are engine-classified as created
and fully authored during this dispatch and must not be routed through a
Step-3 self-review or review-repair-author loop.
