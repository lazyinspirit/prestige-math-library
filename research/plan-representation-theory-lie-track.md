# Representation theory of Lie algebras track

Prose scaffold, owner-commissioned 2026-08-14. Prefix **RL**. This file is the
only deliverable of the commission: it does not edit `research/plan-spec.json`,
author an item, publish a page, run a content gate, or assign absolute orders.

> **STATUS: PROSE SCAFFOLD ONLY.** The live Lie-theory pages at the intended
> splice are planned objects with empty `items[]` arrays. The relative place is
> immediately after
> `real-forms-and-real-semisimple-lie-algebras-examples` and before the
> differential-geometry symplectic block. A later build must first author the
> cited DG and homological-algebra suppliers, then splice RL-1--RL-15 in the
> reading order below.

## Summary for the orchestrator

**Pairs and size.** Fifteen A/B pairs are proposed. They develop, in order, the
centre of $U(\mathfrak g)$; Verma modules and the Shapovalov form; homomorphisms
and linkage; category $\mathcal O$; projectives and BGG reciprocity; the BGG
resolution; the Weyl, Kostant, Freudenthal, and dimension formulas; tensor
products; Borel--Weil--Bott; primitive ideals and Duflo; Kostant's
$\mathfrak n$-cohomology theorem; Kac--Moody algebras; affine algebras;
integrable Kac--Moody modules; and the Weyl--Kac formula. Labels are relative,
not orders. Every B page is a dependency leaf.

**Disk reconciliation.** All ten DG Lie-theory pairs inspected in the live plan
have empty `items[]`; they are planned predecessors, not published facts.
DG-32's prose proposed Verma-module and character-formula ids even though the
subjects-02 ownership table assigns that material to RL. Those ids are rehomed
here where useful, and an amendment is recorded below. DG-32 remains owner of
the finite-dimensional highest-weight classification. DG-29 remains owner of
the Chevalley--Eilenberg differential and Whitehead lemmas. No live item id or
page id is changed by this file.

**Source depth.** The source corpus contains complete graduate notes by Pavel
Etingof (two MIT courses), Alexander Kleshchev, Nicolas Perrin,
Sakellaridis, Lin Chen, Fan Zhou, Xiong Rui, Peter Woit, and others, together
with Stembridge's complete Littlewood--Richardson proof, Lurie's complete
Borel--Weil--Bott proof, and Duflo's and
Stanciu's full papers. Exact read ranges and URLs occur in the pair matrix and
canonical-coverage harvest. Every pair has at least two independent full
treatments.

**Generated-claim policy.** No proposed A-page statement is AI-generated. The
few AI-generated B-page calculations are finite checks or counterexamples,
are labelled as such, and are never dependency targets. Every mathematical row
separately records statement and proof provenance using only `SCHEMA.md` §3
values.

**Scope denials.** PBW, root systems, Dynkin classification, finite-dimensional
highest-weight classification, CE signs, Whitehead, Levi, and Weyl complete
reducibility are cited from DG. General derived functors, Ext, projective
resolutions, and spectral sequences are cited from HA. Unitary representations
of real reductive groups, analytic Harish--Chandra modules, Langlands
classification, and Plancherel belong to RG. Kazhdan--Lusztig theory,
Beilinson--Bernstein localisation as a theory, quantum groups, crystal/global
bases, Virasoro/vertex algebras, and modular representation theory are denied
for the specific prerequisite reasons below. **Blockers: none.**

This file is not normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md`,
`ARCHITECTURE.md`, and `research/subjects-02-SEAMS.md` win wherever they differ.

---

## RL-1 — Harish--Chandra isomorphism, Casimir, and central characters

**A-page role.** Construct the algebraic centre and its characters before any
use of blocks or primitive ideals. DG-27 supplies PBW and DG-29 supplies the
invariant form; RL-1 neither repeats PBW nor treats analytic infinitesimal
characters. Full treatments: Etingof 18.757 §§13--14, pp.71--78, and
Sakellaridis §§4--5, pp.5--9.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-central-character-of-a-lie-algebra-module` | Definition: a central character is an algebra map $\chi:Z(U\mathfrak g)\to\mathbb C$ through which the centre acts. | Fixes the object used by linkage and blocks. | literature-derived | not-applicable | E757 §14.3, pp.77--78; Sak §5, pp.7--9 |
| `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar` | Lemma: on a cyclic highest-weight module, every central element acts by the scalar by which it acts on the highest vector. | Makes $\chi_\lambda$ well defined without irreducibility. | literature-derived | ai-altered | E757 §14.3, p.78; Sak §5, p.9 |
| `def-quadratic-casimir-element` | Definition: for an invariant nondegenerate form and dual bases $x_i,x^i$, set $C=\sum_i x_ix^i\in U(\mathfrak g)$. | Separates the algebra element from DG-29's Casimir operator. | literature-derived | not-applicable | E757 §13.1, pp.71--72; Perrin §11.1, pp.93--94 |
| `lem-the-casimir-element-is-independent-of-dual-bases` | Lemma: $\sum_i x_i\otimes x^i$ and hence $C$ are basis independent. | Closes a well-definedness obligation in the definition. | literature-derived | ai-altered | E757 §13.1, pp.71--72; Perrin §11.1, pp.93--94 |
| `prop-the-quadratic-casimir-element-is-central` | Proposition: invariance of the form implies $[x,C]=0$ for every $x\in\mathfrak g$. | Supplies the first nontrivial central element and later Freudenthal operator. | literature-derived | ai-altered | E757 §13.1, p.72; Perrin §11.1, p.94 |
| `prop-casimir-eigenvalue-on-a-highest-weight-module` | Proposition: $C$ acts on highest weight $\lambda$ by $(\lambda,\lambda+2\rho)$. | Feeds the Shapovalov and Freudenthal calculations. | literature-derived | ai-altered | E757 §13.1, p.72; Perrin §11.1, pp.94--95 |
| `def-harish-chandra-projection` | Definition: triangular PBW gives the projection $\operatorname{pr}:U(\mathfrak g)_0\to U(\mathfrak h)=S(\mathfrak h)$ along terms containing $\mathfrak n^-$ or $\mathfrak n^+$. | Fixes the unshifted projection before the $\rho$ convention. | literature-derived | not-applicable | E757 §14.1, p.76; Sak §5, pp.7--8 |
| `lem-central-elements-have-weight-zero` | Lemma: $Z(U\mathfrak g)\subset U(\mathfrak g)_0$. | Makes restriction of the projection to the centre legitimate. | literature-derived | ai-altered | E757 §14.1, p.76; Sak §5, p.8 |
| `prop-harish-chandra-projection-is-multiplicative-on-the-center` | Proposition: $\operatorname{pr}(zz')=\operatorname{pr}(z)\operatorname{pr}(z')$ for central $z,z'$. | Turns the projection into an algebra homomorphism. | literature-derived | ai-altered | E757 §14.1, pp.76--77; Sak §5, p.8 |
| `lem-harish-chandra-projection-computes-highest-weight-scalars` | Lemma: $z$ acts on a highest vector of weight $\lambda$ by evaluation $\operatorname{pr}(z)(\lambda)$. | Connects the centre to Verma-module characters. | literature-derived | ai-altered | E757 §14.1, p.77; Sak §5, p.8 |
| `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions` | Lemma: translation $f(\lambda)\mapsto f(\lambda-\rho)$ converts dot-invariance to ordinary $W$-invariance. | Prevents the two source conventions from being conflated. | literature-derived | ai-altered | E757 §14.2, p.77; Sak §5, p.8 |
| `prop-harish-chandra-map-is-injective` | Proposition: a central element acting by zero on every Verma module is zero. | The first half of the centre theorem; explicitly consumes PBW. | literature-derived | ai-altered | E757 §14.2, p.77; Sak §5, pp.8--9 |
| `lem-associated-graded-symbol-of-a-central-element-is-invariant` | Lemma: the leading PBW symbol of $z\in Z(U\mathfrak g)$ lies in $S(\mathfrak g)^{\mathfrak g}$. | Begins the filtered surjectivity argument. | literature-derived | ai-altered | E757 §13.2, pp.72--75; §14.2, p.77 |
| `lem-regular-semisimple-elements-form-a-dense-open-subset` | Lemma: the regular semisimple locus is nonempty Zariski open and every one of its elements is conjugate into a Cartan subalgebra. | Density engine for injectivity of Chevalley restriction. | literature-derived | ai-altered | E757 §13.2, pp.72--73; Sak §4, pp.5--7 |
| `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction` | Lemma: an invariant polynomial vanishing on $\mathfrak h$ vanishes on the dense regular-semisimple locus and hence on $\mathfrak g$. | First half of Chevalley restriction. | literature-derived | ai-altered | E757 §13.2, pp.72--73; Sak §4, pp.5--7 |
| `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants` | Lemma: every $W$-invariant polynomial on $\mathfrak h$ extends uniquely to an invariant polynomial on $\mathfrak g$. | Difficult surjectivity joint, proved by the harmonic/Jacobian argument. | literature-derived | ai-altered | E757 §13.2, pp.73--75; Sak §4, pp.5--7 |
| `thm-symmetric-invariants-restrict-to-weyl-invariants` | Theorem (Chevalley restriction in the needed form): $S(\mathfrak g)^{\mathfrak g}\simeq S(\mathfrak h)^W$. | Supplies the filtered surjectivity input to Harish--Chandra. | literature-derived | ai-altered | E757 §13.2, pp.72--75; Sak §4, pp.5--7 |
| `thm-harish-chandra-isomorphism-for-the-center` | Theorem: the shifted Harish--Chandra map is an algebra isomorphism $Z(U\mathfrak g)\simeq S(\mathfrak h)^W$. | Load-bearing description of the centre for every later block. | literature-derived | ai-altered | E757 §14.2, pp.76--78; Sak §5, pp.7--9 |
| `cor-central-characters-are-dot-weyl-orbits` | Corollary: $\chi_\lambda=\chi_\mu$ iff $\mu\in W\mathbin\cdot\lambda$. | Supplies the coarse central-character linkage invariant. | literature-derived | ai-altered | E757 §14.3, p.78; Sak §5, p.9 |
| `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` | Corollary: $Z(U\mathfrak g)$ is polynomial on $\operatorname{rank}\mathfrak g$ homogeneous generators. | Records the structural payoff without fabricating generators. | literature-derived | ai-altered | E757 §§13--14, pp.71--78; Chevalley restriction above |
| `thm-enveloping-algebra-is-free-over-its-center` | Theorem: $U(\mathfrak g)$ is a free module over $Z(U\mathfrak g)$, obtained by lifting the harmonic decomposition of $S(\mathfrak g)$. | Useful structural consequence for central reductions and primitive ideals. | literature-derived | ai-altered | E757 §13.2, pp.72--75; §14, pp.76--78 |

**B companion — finite checks and hypothesis tests.** These are leaves.

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-sl2-casimir-and-its-highest-weight-eigenvalue` | Example: compute the normalised $\mathfrak{sl}_2$ Casimir and its eigenvalue on $M(\lambda)$. | Checks normalisation and the $2\rho$ term. | literature-derived | ai-altered | Sak §5, pp.8--9; E757 §13.1, p.72 |
| `ex-sl3-harish-chandra-center-generators` | Example: identify degree-two and degree-three invariant generators for $\mathfrak{sl}_3$. | Shows rank two does not mean “Casimir only.” | literature-derived | ai-altered | E757 §§13--14, pp.71--78 |
| `ex-dot-conjugate-weights-have-the-same-central-character` | Finite verification in type $A_2$ of $\chi_\lambda=\chi_{s_i\cdot\lambda}$. | Makes the shift visible numerically. | ai-generated | ai-generated | Direct substitution in the HC formula; no dependency may cite this row |
| `cex-unshifted-weyl-orbits-do-not-classify-central-characters` | Counterexample in $\mathfrak{sl}_2$: ordinary $W$-orbits miss the $\rho$ shift. | Tests the adopted convention. | literature-derived | ai-altered | Sak §5, p.9 |
| `ex-the-zero-weight-singular-central-character` | Example: the dot stabiliser of $-\rho$ is all of $W$. | Prepares singular blocks. | literature-derived | ai-altered | E757 §14.3, p.78 |
| `cex-a-noninvariant-quadratic-pbw-element-is-not-central` | Direct bracket computation for an asymmetric quadratic element. | Shows invariance is essential to Casimir centrality. | ai-generated | ai-generated | Finite bracket check; no dependency may cite this row |

## RL-2 — Verma modules and Shapovalov forms

**A-page role.** Rehome the universal Verma material that DG-32 proposed but
does not own under the subjects-02 seam, then decompose the contravariant-form
proof through radical and determinant. Full treatments: Etingof 18.755 §25,
pp.133--137 and Liu §§1--5, pp.1--5; Etingof 18.757 §8, pp.41--47 supplies an
independent determinant treatment.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-one-dimensional-borel-module-of-weight-lambda` | Definition: $\mathbb C_\lambda$ has $\mathfrak n^+$ acting by zero and $h$ by $\lambda(h)$. | Makes induction data explicit, including arbitrary $\lambda\in\mathfrak h^*$. | literature-derived | not-applicable | E755 §25.1, p.133; Liu §1, p.1 |
| `def-verma-module` | Definition: $M(\lambda)=U\mathfrak g\otimes_{U\mathfrak b}\mathbb C_\lambda$. | The standard object for all later pages. | literature-derived | not-applicable | E755 §25.1, p.133; Liu §1, p.1 |
| `thm-universal-property-of-verma-modules` | Theorem: a vector of weight $\lambda$ killed by $\mathfrak n^+$ induces a unique homomorphism from $M(\lambda)$. | Converts singular vectors into module maps in RL-3. | literature-derived | ai-altered | E755 §25.1, p.133; Liu §1, pp.1--2 |
| `thm-pbw-model-of-a-verma-module` | Theorem: multiplication identifies $M(\lambda)$ with $U(\mathfrak n^-)$ as a vector space. | Gives freeness and all weight-space calculations. | literature-derived | ai-altered | E755 §25.1, p.133; E757 §8.1, p.41 |
| `prop-weights-of-a-verma-module-lie-below-lambda` | Proposition: weights are $\lambda-Q^+$ and each weight space is finite dimensional. | Establishes support and boundary finiteness for category $\mathcal O$. | literature-derived | ai-altered | E755 §25.1, pp.133--134; E757 §8.1, p.41 |
| `prop-formal-character-of-a-verma-module` | Proposition: $\operatorname{ch}M(\lambda)=e^\lambda\prod_{\alpha>0}(1-e^{-\alpha})^{-1}$. | Supplies the denominator used by BGG and Weyl character proofs. | literature-derived | ai-altered | E755 §25.1, p.134; E757 §8.1, p.41 |
| `lem-a-proper-verma-submodule-misses-the-highest-weight-line` | Lemma: a submodule containing the highest line is all of $M(\lambda)$. | Boundary case behind the maximal-submodule construction. | literature-derived | ai-altered | E755 §25.1, p.134; Liu §1, p.2 |
| `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper` | Lemma: the sum remains disjoint from the one-dimensional highest space. | Decomposes the unique-simple-quotient proof. | literature-derived | ai-altered | E755 §25.1, p.134; Liu §1, p.2 |
| `thm-verma-module-has-a-unique-simple-quotient` | Theorem: $M(\lambda)$ has a unique maximal submodule and quotient $L(\lambda)$. | Defines the simple highest-weight module used throughout RL. | literature-derived | ai-altered | E755 §25.1, p.134; Liu §1, p.2 |
| `lem-every-nonzero-verma-submodule-contains-a-singular-vector` | Lemma: maximal weights in a nonzero submodule are killed by $\mathfrak n^+$. | Links submodules to singular-vector computations. | literature-derived | ai-altered | E755 §25.2, pp.134--135; Liu §2, p.2 |
| `def-chevalley-contravariant-form` | Definition: a bilinear form obeys $\langle xu,v\rangle=\langle u,\tau(x)v\rangle$ for the fixed anti-involution $\tau$. | States exactly what Shapovalov invariance means. | literature-derived | not-applicable | Liu §3, pp.2--3; E757 §8.3, pp.44--45 |
| `thm-existence-and-uniqueness-of-the-shapovalov-form` | Theorem: $M(\lambda)$ has a unique normalised symmetric contravariant form. | Constructs the form used to detect reducibility. | literature-derived | ai-altered | Liu §3, pp.2--3; E757 §8.3, pp.44--45 |
| `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal` | Lemma: distinct $\mathfrak h$-weights are orthogonal. | Reduces the radical to finite determinant blocks. | literature-derived | ai-altered | Liu §3, p.3; E757 §8.3, p.45 |
| `prop-the-shapovalov-radical-is-the-maximal-submodule` | Proposition: the radical equals the unique maximal proper submodule. | Turns a bilinear-form calculation into the simple quotient. | literature-derived | ai-altered | Liu §4, pp.3--4; E757 §8.3, p.45 |
| `def-shapovalov-determinant-on-a-weight-space` | Definition: after PBW bases, $D_\nu(\lambda)$ is the determinant on $M(\lambda)_{\lambda-\nu}$, defined up to nonzero scalar. | Records the basis-normalisation boundary honestly. | literature-derived | not-applicable | E757 §8.3, pp.45--46; Liu §5, pp.4--5 |
| `thm-shapovalov-determinant-formula` | Theorem: $D_\nu(\lambda)$ factors over positive roots and positive integers with Kostant-partition exponents. | Locates every reducibility hyperplane. | literature-derived | ai-altered | E757 §8.3, pp.45--47; Liu §5, pp.4--5 |
| `cor-verma-irreducibility-criterion-from-shapovalov-determinants` | Corollary: $M(\lambda)$ is irreducible iff $\langle\lambda+\rho,\alpha^\vee\rangle\notin\mathbb Z_{>0}$ for every positive root $\alpha$. | Supplies the generic case and the first linkage test. | literature-derived | ai-altered | E757 §8.3, p.47; Liu §5, p.5 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-sl2-verma-action-in-the-pbw-basis` | Example: derive $e f^nv=n(\lambda-n+1)f^{n-1}v$. | Exposes every boundary index, including $n=0$. | literature-derived | ai-altered | E755 §25.2, pp.134--135; Liu §2, p.2 |
| `ex-sl2-shapovalov-norm-product` | Example: compute $\langle f^nv,f^nv\rangle=n!\prod_{j=0}^{n-1}(\lambda-j)$. | Checks determinant zeros and normalisation. | literature-derived | ai-altered | Liu §§3--5, pp.2--5 |
| `ex-sl2-reducible-and-generic-verma-modules` | Example: $M(\lambda)$ is reducible exactly for $\lambda\in\mathbb Z_{\ge0}$. | Tests both directions of the criterion. | literature-derived | ai-altered | E755 §25.2, p.135; E757 §8.3, p.47 |
| `ex-an-a2-verma-weight-space-of-dimension-two` | Example: compare the two PBW vectors at weight $\lambda-\alpha_1-\alpha_2$. | Shows why determinants, not scalar norms, are needed. | ai-generated | ai-generated | Direct PBW calculation; no dependency may cite this row |
| `cex-the-shapovalov-form-is-not-positive-definite-in-general` | Counterexample from a negative $\mathfrak{sl}_2$ norm. | Prevents confusing contravariance with unitarity. | ai-generated | ai-generated | Direct norm-product check; no dependency may cite this row |
| `ex-finite-dimensional-sl2-quotient-of-a-verma-module` | Example: for $m\ge0$, $L(m)=M(m)/M(-m-2)$ has dimension $m+1$. | Previews the simple-reflection embedding. | literature-derived | ai-altered | E755 §25.2, p.135; Liu §2, p.2 |

## RL-3 — Homomorphisms between Verma modules and linkage

**A-page role.** Turn singular vectors into the BGG/Verma embedding criterion,
then distinguish central-character coincidence from strong linkage. Full
treatments: Etingof 18.757 §15, pp.79--83 and Sakellaridis §§1--3, pp.1--5;
Lin lectures 2 and 4 give an independent block-oriented reading.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `prop-verma-homomorphisms-are-singular-vectors` | Proposition: $\operatorname{Hom}(M(\mu),M(\lambda))$ identifies with singular vectors of weight $\mu$ in $M(\lambda)$. | Applies RL-2's universal property exactly once. | literature-derived | ai-altered | E757 §15.1, p.79; Sak §§1--2, pp.1--3 |
| `lem-a-nonzero-verma-homomorphism-is-injective` | Lemma: every nonzero map between Verma modules is injective. | Justifies writing $M(\mu)\subset M(\lambda)$. | literature-derived | ai-altered | E757 §15.1, pp.79--80; Sak §2, pp.2--3 |
| `thm-verma-homomorphism-spaces-have-dimension-at-most-one` | Theorem: $\dim\operatorname{Hom}(M(\mu),M(\lambda))\le1$. | Makes all Bruhat-edge maps unique up to scalar for RL-6. | literature-derived | ai-altered | E757 §15.1, p.80; Sak §2, p.3 |
| `lem-simple-root-singular-vector-in-a-verma-module` | Lemma: if $m=\langle\lambda+\rho,\alpha_i^\vee\rangle\in\mathbb Z_{>0}$, then $f_i^m v_\lambda$ is singular of weight $s_i\cdot\lambda$. | Rank-one engine for reflection embeddings. | literature-derived | ai-altered | E757 §15.1, p.80; Sak §2, p.3 |
| `prop-simple-reflection-embedding-of-verma-modules` | Proposition: under that condition $M(s_i\cdot\lambda)\hookrightarrow M(\lambda)$. | Generates maps along Bruhat covers. | literature-derived | ai-altered | E757 §15.1, p.80; Lin L2, pp.3--4 |
| `thm-verma-embedding-for-an-arbitrary-positive-root` | Verma theorem: if $\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z_{>0}$, then $M(s_\alpha\cdot\lambda)\hookrightarrow M(\lambda)$. | Extends the simple-root calculation by Weyl conjugation/chains. | literature-derived | ai-altered | E757 §15.2, pp.80--81; Sak §2, pp.3--4 |
| `def-strong-linkage-order-on-weights` | Definition: $\mu\uparrow\lambda$ when a chain of positive integral dot reflections rises from $\mu$ to $\lambda$. | Names the necessary order for composition factors. | literature-derived | not-applicable | E757 §15.2, p.81; Sak §3, p.4 |
| `lem-verma-embedding-implies-strong-linkage` | Lemma: $M(\mu)\hookrightarrow M(\lambda)$ forces $\mu\uparrow\lambda$. | Supplies the difficult direction behind the hom criterion. | literature-derived | ai-altered | E757 §15.2, pp.81--82; Sak §3, pp.4--5 |
| `thm-bgg-verma-homomorphism-criterion` | Theorem: a nonzero $M(\mu)\to M(\lambda)$ exists exactly along an admissible chain of reflection embeddings. | Complete classification of Verma homomorphisms. | literature-derived | ai-altered | E757 §15.2, pp.80--82; Sak §§2--3, pp.2--5 |
| `lem-a-verma-composition-factor-has-the-same-central-character` | Lemma: $[M(\lambda):L(\mu)]\ne0$ implies $\chi_\lambda=\chi_\mu$. | Coarse linkage from the centre. | literature-derived | ai-altered | E757 §15.3, p.82; Lin L4, pp.1--3 |
| `thm-strong-linkage-principle-for-verma-modules` | Theorem: $[M(\lambda):L(\mu)]\ne0$ implies $\mu\uparrow\lambda$. | Refines the central-character condition to the correct order. | literature-derived | ai-altered | E757 §15.3, pp.82--83; Sak §3, pp.4--5 |
| `cor-generic-verma-modules-are-simple` | Corollary: off all positive-integral reflection hyperplanes, $M(\lambda)=L(\lambda)$. | Closes the empty-chain boundary case. | literature-derived | ai-altered | E757 §15, pp.79--83; RL-2 determinant criterion |
| `cor-antidominant-verma-modules-are-simple` | Corollary: an antidominant regular $\lambda$ admits no lower strong linkage and hence has simple Verma module. | Supplies the base object in a regular linkage class. | literature-derived | ai-altered | Sak §3, p.5; E757 §15.3, p.83 |
| `prop-verma-composition-multiplicities-are-finite` | Proposition: every simple occurs with finite multiplicity and only finitely many candidates occur above any fixed lower weight. | Needed before Grothendieck-character subtraction. | literature-derived | ai-altered | E757 §15.3, p.83; Lin L6, pp.1--7 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-sl2-verma-embedding-chain` | Example: display $M(-m-2)\subset M(m)$ and all generic cases. | Tests equality, strictness, and the $m=0$ endpoint. | literature-derived | ai-altered | E755 §25.2, p.135; Sak §2, p.3 |
| `ex-a2-regular-dominant-verma-embedding-poset` | Example: draw the six $W$-translate embeddings ordered by Bruhat order. | Prepares the RL-6 resolution graph. | literature-derived | ai-altered | E757 §15, pp.79--83; Zhou §§2--3, pp.3--11 |
| `ex-a2-singular-dot-orbit-collapses` | Example: a wall weight has fewer distinct dot translates and a smaller linkage class. | Shows why regularity hypotheses matter. | literature-derived | ai-altered | Lin L4, pp.1--7 |
| `cex-equal-central-character-does-not-give-every-verma-embedding-direction` | Counterexample: two dot-conjugate weights in type $A_2$ whose Bruhat order has the opposite direction. | Separates orbit equivalence from a directed homomorphism. | literature-derived | ai-altered | Sak §§2--3, pp.2--5 |
| `cex-nonintegral-reflection-does-not-produce-a-singular-power` | Counterexample: the formal exponent $\langle\lambda+\rho,\alpha^\vee\rangle$ is not a positive integer. | Tests integrality in Verma's theorem. | ai-generated | ai-generated | Direct $\mathfrak{sl}_2$ action check; no dependency may cite this row |

---

## Authority boundary and inherited interfaces

RL owns only the algebraic representation-theoretic superstructure named in
the commission. Throughout RL-1--RL-11, unless a row says otherwise,
$\mathfrak g$ is a finite-dimensional complex semisimple Lie algebra with a
fixed triangular decomposition
$\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$,
$\mathfrak b=\mathfrak h\oplus\mathfrak n^+$, root system $\Phi$, positive
roots $\Phi^+$, simple roots $\Delta$, Weyl group $W$, and
$\rho=\frac12\sum_{\alpha\in\Phi^+}\alpha$. Reductive variants are stated only
where the cited source treats the central torus explicitly.

| supplier | state verified | interface consumed; what RL must not re-mint |
|---|---|---|
| `lie-algebra-representations-enveloping-algebras-and-pbw` (DG-27) | planned, `items[]` empty | representations as $U(\mathfrak g)$-modules, induction/restriction, PBW filtration and triangular PBW factorisation. |
| `solvable-and-nilpotent-lie-algebras` (DG-28) | planned, empty | Engel and Lie's theorem. |
| `semisimple-lie-algebras-cohomology-and-levi-theory` (DG-29) | planned, empty | invariant/Killing forms, CE cochains and sign convention, Whitehead's lemmas, Weyl complete reducibility, Levi decomposition, and the Casimir **operator** argument. RL-1 constructs the central Casimir **element** and proves its centrality. |
| `cartan-subalgebras-and-root-space-decompositions` (DG-30) | planned, empty | Cartan subalgebras, roots, coroots, root spaces, triangular decomposition, $\mathfrak{sl}_2$ root triples. |
| `root-systems-dynkin-diagrams-and-cartan-killing-classification` (DG-31) | planned, empty | abstract root systems, Weyl/Coxeter combinatorics, Cartan matrices, Dynkin diagrams, and classification. |
| `highest-weight-theory-for-complex-semisimple-lie-algebras` (DG-32) | planned, empty | weights, dominance/integrality, existence and classification of finite-dimensional simples, extremal weights. Verma and character-formula proposals in its prose are rehomed to RL by the subjects-02 seam. |
| `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (DG-33) | planned, empty | compact integration/Peter--Weyl. RL's character proofs are algebraic and do not invoke Haar integration. |
| `real-forms-and-real-semisimple-lie-algebras` (DG-34) | planned, empty | real forms and Cartan decompositions; it is the physical splice anchor, not an analytic-representation supplier. |
| HA-1 `chain-complexes-and-homology`, HA-5 `projective-and-injective-resolutions`, HA-6 `derived-functors`, HA-8 `ext-and-balanced-resolutions`, HA-9 `yoneda-extensions-and-homological-dimension`, HA-15/16 `spectral-sequences` / `double-complexes-exact-couples-and-convergence` | finished prose scaffolds, not live plan pages | complexes, resolutions, derived functors, Ext/Yoneda, and spectral-sequence engines. RL instantiates these in $\mathcal O$ and CE cohomology; it does not rebuild them. |
| AV relative interfaces (future algebraic-geometry track) | not yet assigned live ids | quotients $G/B$, equivariant line bundles, coherent sheaf cohomology, smooth projective varieties, and Serre duality needed by RL-9. RL-9 states its geometry contract and cannot be built before those suppliers. |
| RG relative labels | concurrent; file deliberately unread | unitary and analytic representations of real reductive groups. RL makes no RG result load-bearing. RL-1 supplies RG with the algebraic Harish--Chandra centre/infinitesimal-character interface. |

The pages `lie-groups-invariant-fields-and-the-exponential-map` and
`lie-subgroups-actions-and-homogeneous-spaces` are also inspected predecessors;
they supply Lie-group actions and homogeneous-space notation only. No pair here
depends on an analytic representation theorem.

## Reading order and page contract

| pair | A page id | B companion id | A purpose |
|---|---|---|---|
| RL-1 | `harish-chandra-isomorphism-casimir-and-central-characters` | `harish-chandra-isomorphism-casimir-and-central-characters-examples` | central action and infinitesimal characters |
| RL-2 | `verma-modules-and-shapovalov-forms` | `verma-modules-and-shapovalov-forms-examples` | universal highest-weight modules and contravariant forms |
| RL-3 | `homomorphisms-between-verma-modules-and-linkage` | `homomorphisms-between-verma-modules-and-linkage-examples` | embeddings, Verma/BGG criterion, linkage |
| RL-4 | `category-o-finiteness-duality-and-blocks` | `category-o-finiteness-duality-and-blocks-examples` | abelian/finite-length category and block decomposition |
| RL-5 | `projectives-standard-filtrations-and-bgg-reciprocity` | `projectives-standard-filtrations-and-bgg-reciprocity-examples` | highest-weight structure and reciprocity |
| RL-6 | `the-bgg-resolution` | `the-bgg-resolution-examples` | exact Verma resolution and its Euler character |
| RL-7 | `weyl-character-and-multiplicity-formulas` | `weyl-character-and-multiplicity-formulas-examples` | denominator, character, multiplicity, recursion, dimension |
| RL-8 | `tensor-product-multiplicities-and-littlewood-richardson` | `tensor-product-multiplicities-and-littlewood-richardson-examples` | general and type-A tensor decompositions |
| RL-9 | `borel-weil-and-borel-weil-bott` | `borel-weil-and-borel-weil-bott-examples` | geometric realisation and unique cohomology degree |
| RL-10 | `primitive-ideals-and-duflo-theorem` | `primitive-ideals-and-duflo-theorem-examples` | primitive spectrum through highest weights |
| RL-11 | `lie-algebra-cohomology-and-kostants-nilradical-theorem` | `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples` | $\mathfrak n$-cohomology as a representation tool |
| RL-12 | `kac-moody-algebras-from-generalized-cartan-matrices` | `kac-moody-algebras-from-generalized-cartan-matrices-examples` | contragredient algebras, Serre presentation, roots |
| RL-13 | `affine-lie-algebras-and-loop-central-extensions` | `affine-lie-algebras-and-loop-central-extensions-examples` | loop realisation, central extension, derivation, level |
| RL-14 | `integrable-highest-weight-kac-moody-modules` | `integrable-highest-weight-kac-moody-modules-examples` | integrability, dominant weights, complete reducibility |
| RL-15 | `the-weyl-kac-character-formula` | `the-weyl-kac-character-formula-examples` | completed characters, denominator and Weyl--Kac proof |

All A pages are below the 60-item ceiling. The B companions contain examples,
counterexamples, and finite verifications only. No later row cites a B-page
item.

### Declared `requires` by pair

This is the page-level dependency contract. Each B page requires only its A
page and is a leaf; those trivial companion edges are omitted from the table.

| pair | A-page `requires` |
|---|---|
| RL-1 | DG-27 PBW; DG-29 invariant form; DG-30/DG-31 Cartan/root/Weyl data |
| RL-2 | DG-27 induction/PBW; DG-30 triangular decomposition; DG-32 weight notation |
| RL-3 | RL-1, RL-2; DG-31 Bruhat/reflection combinatorics |
| RL-4 | RL-1--RL-3; HA-1 abelian/complex vocabulary where invoked |
| RL-5 | RL-4; DG-29 complete reducibility; HA-5, HA-8, HA-9 |
| RL-6 | RL-3; DG-31 Bruhat order; HA-1 and HA-5 |
| RL-7 | RL-1, RL-2, RL-6; DG-31/DG-32 root strings and finite highest weights |
| RL-8 | RL-7; DG-29 complete reducibility; DG-32 finite highest-weight classification |
| RL-9 | DG-25/DG-26 group actions/homogeneous spaces; DG-31--DG-33; future AV geometry suppliers |
| RL-10 | RL-1--RL-5; DG-27 PBW; future AV/localisation supplier for the `not-supplied` proof |
| RL-11 | DG-29 CE/Whitehead; RL-1 and RL-6; DG-31/DG-32; HA-6, HA-8, HA-15, HA-16 |
| RL-12 | DG-27 enveloping/presentation language; DG-31 finite Cartan/Weyl interface |
| RL-13 | RL-12; DG-29 invariant form; DG-30 highest-root notation |
| RL-14 | RL-12; DG-27 induction/PBW; simple-root $\mathfrak{sl}_2$ theory from DG-30/DG-32 |
| RL-15 | RL-12, RL-14; the invariant-form/Casimir construction internal to RL-12 |

## Convention audit

1. **Positive Borel and highest weights.** RL fixes
   $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ and lets
   $\mathfrak n^+$ annihilate a highest-weight vector. Etingof, Sakellaridis,
   Lin, Kleshchev, and Perrin agree after translating notation. This must match
   DG-30/DG-32 when they are built.
2. **Dot action and Harish--Chandra shift.** The adopted convention is
   $w\mathbin\cdot\lambda=w(\lambda+\rho)-\rho$ and
   $\gamma:Z(U\mathfrak g)\simeq S(\mathfrak h)^W$ after the $\rho$-shift.
   Sources alternately put the shift in the projection or in the $W$-action.
   Central characters satisfy $\chi_\lambda=\chi_\mu$ exactly on dot orbits.
3. **Verma notation.** $M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}
   \mathbb C_\lambda$ and its simple quotient is $L(\lambda)$. Some sources
   write $M_{\lambda-\rho}$ to linearise the ordinary $W$-action; RL never
   silently changes parameters.
4. **Chevalley anti-involution.** The contravariant form uses the algebra
   anti-involution $\tau(e_i)=f_i$, $\tau(f_i)=e_i$, $\tau(h)=h$. Etingof's
   category duality also uses a Cartan involution sending $h$ to $-h$ before
   restricted dualisation. RL names these distinct maps.
5. **Shapovalov normalisation.** The highest vector has norm $1$; the radical
   is independent of that scalar choice. Determinants are stated only up to a
   nonzero scalar unless ordered root-vector bases have been fixed.
6. **Category $\mathcal O$.** RL uses the classical definition: finitely
   generated, $\mathfrak h$-semisimple, and locally finite for
   $\mathfrak n^+$. The equivalent finite-dimensional-weight-space/support
   formulation is proved, not adopted as a second definition. Lin's warning
   about extension-closure applies to the larger ambient weight-module
   subcategory, not the classical BGG category once the standard equivalent
   formulation is used.
7. **Blocks.** “Generalised central-character summand” is distinguished from
   an indecomposable linkage block. Lin calls the former a block in early
   lectures; Humphreys-style terminology often reserves “block” for the
   latter. RL proves the refinement and uses “linkage block” unambiguously.
8. **Standard/costandard.** $\Delta(\lambda)=M(\lambda)$ and
   $\nabla(\lambda)=M(\lambda)^\vee$. BGG reciprocity is
   $[P(\lambda):\Delta(\mu)]=[\Delta(\mu):L(\lambda)]$.
9. **BGG resolution direction.** Homological degree $k$ is
   $\bigoplus_{\ell(w)=k}M(w\cdot\lambda)$, resolving $L(\lambda)$ to the
   right. Edge signs are chosen after a Bruhat-graph orientation; changing the
   orientation produces an isomorphic complex.
10. **Characters.** Formal exponentials are written $e^\mu$ in a completed
    group algebra supported in a finite union of downward cones. Infinite
    products in RL-15 are formal; analytic convergence is explicitly not
    claimed.
11. **Kostant and Freudenthal.** The Kostant partition function counts sums of
    positive roots with repetition. Freudenthal's recursion uses the
    DG-normalised invariant form; rescaling both sides is harmless but must be
    consistent.
12. **Steinberg terminology.** “Steinberg tensor-product multiplicity formula”
    here is the characteristic-zero alternating-sum formula. The Steinberg
    tensor-product theorem in characteristic $p$ is a different result and is
    out of scope.
13. **Borel--Weil sign.** RL sets
    $\mathcal L_\lambda=G\times_B\mathbb C_{-\lambda}$, so
    $H^0(G/B,\mathcal L_\lambda)\cong L(\lambda)^*$ for dominant $\lambda$.
    Sources using left quotients or $+\lambda$ obtain a dual/opposite sign.
14. **CE signs.** RL-11 must use DG-29's differential verbatim. It does not
    print a second sign convention. Kostant is stated for
    $H^k(\mathfrak n^+,L(\lambda))$ with weights
    $w(\lambda+\rho)-\rho$; the homology/$\mathfrak n^-$ version is identified
    by restricted duality.
15. **GCM indices.** $a_{ij}=\alpha_j(h_i)$, matching Kleshchev and the intended
    DG-31 row/coroot convention. A realisation includes enough extra Cartan
    dimension when $A$ is singular; taking only the span of the $h_i$ is not
    allowed.
16. **Affine cocycle and level.** The invariant form is normalised explicitly,
    and $[x\otimes t^m,y\otimes t^n]$ has central term
    $m\delta_{m,-n}(x,y)c$. The degree derivation satisfies
    $[d,x\otimes t^m]=m x\otimes t^m$; level is $\lambda(c)$.
17. **Kac--Moody category and integrability.** Symmetrisability is imposed
    before the invariant form and Weyl--Kac proof. “Integrable” means every
    Chevalley $e_i,f_i$ acts locally nilpotently, not that an infinite-dimensional
    group action has already been constructed.

## Choice and foundations ledger

All finite-dimensional pairs are ZF relative to the finite root datum,
triangular decomposition, and finite bases supplied by DG. PBW bases may use
an explicitly supplied ordering of the finite positive roots; no arbitrary
global basis choice is hidden. Projective covers in a finite linkage block are
constructed from explicit finite tensor/projector data, not by selecting from
a proper class. Borel--Weil--Bott inherits the foundations of the future AV
supplier; its representation-theoretic deductions add no choice. Kac--Moody
constructions start with a finite indexed GCM and the canonical free
Lie-algebra quotient, so use no AC. Formal characters are coefficientwise
finite in downward cones. No countable or dependent choice is consumed by any
RL proof after its suppliers are present.

---

## RL-4 — Category $\mathcal O$: finiteness, duality, and blocks

**A-page role.** Establish the classical BGG category as an abelian,
finite-length home for the preceding modules, then separate generalised
central-character summands from indecomposable linkage blocks. Full
treatments: Etingof 18.757 §§15--16, pp.79--87 and Lin lectures 4, 6, and 8,
pp.1--7, pp.1--7, and pp.1--10; Sakellaridis §§1, 6, pp.1--2, 9--11 is an
additional independent check.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-bgg-category-o` | Definition: $\mathcal O$ consists of finitely generated $U\mathfrak g$-modules that are $\mathfrak h$-semisimple and locally $U\mathfrak n^+$-finite. | Fixes all three hypotheses, including the zero module. | literature-derived | not-applicable | E757 §15.3, p.82; Lin L6, p.1 |
| `prop-equivalent-support-description-of-category-o` | Proposition: the definition is equivalent to finite-dimensional weight spaces with support in a finite union of downward cones. | Makes later finiteness proofs usable without changing definitions. | literature-derived | ai-altered | E757 §15.3, pp.82--83; Lin L6, pp.1--2 |
| `prop-verma-and-finite-dimensional-modules-lie-in-category-o` | Proposition: every $M(\lambda)$ and every finite-dimensional weight module belongs to $\mathcal O$. | Supplies standards and tensoring modules. | literature-derived | ai-altered | E757 §15.3, p.83; Sak §1, pp.1--2 |
| `thm-category-o-is-abelian-and-extension-closed` | Theorem: kernels, cokernels, and extensions in $U\mathfrak g$-mod remain in $\mathcal O$. | Makes HA's homological interfaces applicable. | literature-derived | ai-altered | Lin L6, pp.1--3; E757 §15.3, p.83 |
| `lem-n-plus-invariants-exist-in-every-nonzero-o-module` | Lemma: a nonzero object of $\mathcal O$ contains a nonzero vector killed by $\mathfrak n^+$. | Starts every simple-object and finite-length induction. | literature-derived | ai-altered | E757 §15.3, p.83; Lin L6, pp.2--3 |
| `thm-simple-objects-of-category-o-are-highest-weight-modules` | Theorem: the simple objects are precisely the $L(\lambda)$. | Covers arbitrary weights; DG-32 retains the finite-dimensional classification. | literature-derived | ai-altered | E757 §15.3, p.83; Sak §1, pp.1--2 |
| `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation` | Lemma: cutting at finitely many maximal weights produces successive highest-weight quotients. | Proof-sized engine for Noetherian/Artinian arguments. | literature-derived | ai-altered | Lin L6, pp.2--5; E757 §16.1, pp.84--85 |
| `thm-every-category-o-object-has-finite-length` | Theorem: every object of $\mathcal O$ is both Noetherian and Artinian. | Ensures Jordan--Hölder multiplicities and finite blocks are meaningful. | literature-derived | ai-altered | Lin L6, pp.1--7; E757 §16.1, pp.84--85 |
| `def-restricted-dual-of-a-weight-module` | Definition: $M^\vee=\bigoplus_\mu M_\mu^*$ with action twisted by the fixed Cartan anti-automorphism. | Avoids the too-large algebraic dual. | literature-derived | not-applicable | E757 §20.1, pp.100--101; Lin L8, pp.1--2 |
| `prop-restricted-duality-is-an-exact-involution-on-category-o` | Proposition: $(-)^\vee$ is exact, contravariant, preserves weights, and squares naturally to the identity. | Supplies costandards and injective/projective duality. | literature-derived | ai-altered | E757 §20.1, pp.100--101; Lin L8, pp.1--3 |
| `def-standard-and-costandard-objects-in-category-o` | Definition: $\Delta(\lambda)=M(\lambda)$ and $\nabla(\lambda)=M(\lambda)^\vee$. | Fixes highest-weight-category notation for RL-5. | literature-derived | not-applicable | E757 §20.1, p.101; Lin L8, p.3 |
| `lem-generalized-central-character-submodules-are-direct-summands` | Lemma: finite length and comaximal powers of maximal ideals split an object into generalised central-character parts. | Decomposes the block theorem without spectral sequences. | literature-derived | ai-altered | Lin L4, pp.1--3; Sak §6, pp.9--10 |
| `thm-category-o-decomposes-by-generalized-central-character` | Theorem: $\mathcal O=\bigoplus_\chi\mathcal O_\chi$, objectwise with only finitely many nonzero summands. | Gives the coarse block decomposition. | literature-derived | ai-altered | Lin L4, pp.1--4; Sak §6, pp.9--10 |
| `def-integral-weyl-group-of-a-weight` | Definition: $W_\lambda$ is generated by roots with $\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z$. | Names the group that refines nonintegral central characters. | literature-derived | not-applicable | E757 §15.3, pp.82--83; Lin L4, pp.4--6 |
| `thm-central-character-summands-split-into-linkage-blocks` | Theorem: indecomposable summands are indexed by integral-Weyl linkage classes inside a dot orbit. | Prevents “central character” and “block” from being equated. | literature-derived | ai-altered | Lin L4, pp.3--7; Sak §6, pp.9--11 |
| `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o` | Proposition: $M\mapsto M\otimes E$ is exact on $\mathcal O$ for finite-dimensional $E$. | Supplies the projective and translation constructions in RL-5. | literature-derived | ai-altered | E757 §16.1, p.84; Lin L8, pp.3--4 |
| `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` | Proposition: simple classes form a basis, and within a finite ideal the triangular standard classes form another. | Makes BGG reciprocity and character subtraction precise. | literature-derived | ai-altered | E757 §§15--16, pp.79--87; Lin L6, pp.5--7 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-the-regular-integral-sl2-block-of-category-o` | Example: list its two simples, two standards, and linkage order. | Smallest nonsemisimple block. | literature-derived | ai-altered | Lin L4, pp.4--7; E757 §16, pp.84--87 |
| `ex-a-generic-sl2-block-is-semisimple` | Example: a nonintegral dot orbit gives isolated simple Vermas. | Contrasts generic and integral linkage. | literature-derived | ai-altered | Sak §§3, 6, pp.4--5, 9--11 |
| `ex-a-singular-a2-central-character-summand` | Example: compute the dot stabiliser and its simple labels. | Tests the singular boundary. | literature-derived | ai-altered | Lin L4, pp.4--7 |
| `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o` | Counterexample: weight-space products make the full dual too large. | Justifies restricted duality. | literature-derived | ai-altered | E757 §20.1, pp.100--101 |
| `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o` | Counterexample: local conditions hold but finite generation fails. | Shows why finite generation cannot be dropped. | ai-generated | ai-generated | Direct finite-generation check; no dependency may cite this row |
| `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o` | Counterexample: finite weight spaces alone do not imply the support condition. | Tests the equivalent formulation. | ai-generated | ai-generated | Direct support check; no dependency may cite this row |

---

## RL-5 — Projectives, standard filtrations, and BGG reciprocity

**A-page role.** Build enough projectives by finite-dimensional tensoring and
truncation, isolate the standard-filtration theorem, then prove reciprocity via
restricted duality. HA supplies the abstract projective/Ext language. Full
treatments: Etingof 18.757 §§16, 20, pp.84--87, 100--105 and Lin lectures
8--9, pp.1--10 and pp.1--7.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-truncated-category-o-at-a-finite-weight-ideal` | Definition: $\mathcal O^{\le\nu}$ consists of objects whose weights lie below a fixed finite dominance ideal. | Makes projective construction finite before passing to a block. | literature-derived | not-applicable | E757 §16.1, pp.84--85; Lin L8, pp.3--5 |
| `lem-a-sufficiently-antidominant-verma-is-projective-in-a-truncation` | Lemma: $M(\lambda)$ is projective when no higher weight allowed by the truncation can link to it. | Base case for producing all projectives. | literature-derived | ai-altered | E757 §16.1, p.85; Lin L8, pp.3--5 |
| `lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective` | Lemma: tensor-Hom adjunction and exactness preserve projectives. | Propagates the antidominant projective across the block. | literature-derived | ai-altered | E757 §16.1, pp.85--86; Lin L8, pp.4--5 |
| `lem-block-projection-preserves-projectives` | Lemma: projection to a generalised central-character or linkage summand preserves projectivity. | Keeps tensor constructions inside one block. | literature-derived | ai-altered | E757 §16.1, p.86; Lin L8, p.5 |
| `thm-category-o-has-enough-projectives` | Theorem: every simple in a finite linkage block admits a projective cover. | Opens HA-derived arguments in $\mathcal O$. | literature-derived | ai-altered | E757 §16.1, pp.84--87; Lin L8, pp.3--7 |
| `prop-projective-covers-in-o-are-indecomposable-and-unique` | Proposition: $P(\lambda)\twoheadrightarrow L(\lambda)$ is unique up to isomorphism and has local endomorphism ring. | Fixes the projective labels used in reciprocity. | literature-derived | ai-altered | E757 §16.2, pp.86--87; Lin L8, pp.6--7 |
| `def-verma-flag-and-its-multiplicities` | Definition: a Verma flag has successive quotients $\Delta(\mu)$; its multiplicities are denoted $(M:\Delta(\mu))$. | Names the filtration invariant. | literature-derived | not-applicable | E757 §20.2, pp.101--102; Lin L9, pp.1--2 |
| `lem-verma-flag-multiplicities-are-independent-of-the-flag` | Lemma: character triangularity makes $(M:\Delta(\mu))$ independent of filtration choice. | Closes a hidden well-definedness obligation. | literature-derived | ai-altered | E757 §20.2, p.102; Lin L9, p.2 |
| `thm-projectives-in-category-o-have-verma-flags` | Theorem: every $P(\lambda)$ has a finite standard filtration with only $\mu\ge\lambda$. | Establishes the highest-weight structure consumed by BGG. | literature-derived | ai-altered | E757 §20.2, pp.101--103; Lin L9, pp.1--4 |
| `lem-hom-from-projectives-counts-simple-composition-factors` | Lemma: $\dim\operatorname{Hom}(P(\lambda),M)=[M:L(\lambda)]$. | Converts projective lifting into a numerical identity. | literature-derived | ai-altered | E757 §20.2, p.103; Lin L9, pp.3--4 |
| `lem-standard-costandard-hom-and-ext-vanishing` | Lemma: $\operatorname{Hom}(\Delta(\mu),\nabla(\nu))$ is $\mathbb C$ for $\mu=\nu$ and zero otherwise, while $\operatorname{Ext}^1$ vanishes in the needed order. | The HA-supplied homological input to reciprocity. | literature-derived | ai-altered | E757 §20.2, pp.103--104; HA-8/HA-9 |
| `thm-bgg-reciprocity` | Theorem: $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$. | Central multiplicity symmetry of category $\mathcal O$. | literature-derived | ai-altered | E757 §20.2, pp.100--105; Lin L9, pp.1--5 |
| `cor-injectives-have-costandard-filtrations` | Corollary: restricted duals of projectives are injective and carry finite $\nabla$-flags with reciprocal multiplicities. | Supplies the costandard half without a second construction. | literature-derived | ai-altered | E757 §20.1--2, pp.100--105; Lin L8--9 |
| `def-translation-functor-between-o-blocks` | Definition: tensor with a chosen finite-dimensional module and project to a target block. | Prepares comparisons of regular and singular blocks. | literature-derived | not-applicable | E757 §§23--24, pp.114--123; Lin L9, pp.5--7 |
| `prop-translation-functors-are-exact-and-biadjoint-across-a-wall` | Proposition: translation functors are exact and the paired directions are left and right adjoint. | Makes wall-crossing preserve projectives and duality. | literature-derived | ai-altered | E757 §§23--24, pp.114--123; Lin L9, pp.5--7 |
| `thm-translation-to-and-from-a-wall-on-standard-modules` | Theorem: translation to a wall identifies the expected adjacent standards and translation back has a two-step Verma flag. | Records the precise rank-one wall behaviour used in examples. | literature-derived | ai-altered | E757 §§23--24, pp.114--123; Lin L9, pp.5--7 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-projective-covers-in-the-regular-sl2-block` | Example: compute both indecomposable projectives and their Verma flags. | Smallest full BGG-reciprocity table. | literature-derived | ai-altered | E757 §20.2, pp.101--105; Lin L9, pp.1--5 |
| `ex-bgg-reciprocity-matrix-for-sl2` | Example: display standard composition and projective flag matrices as transposes. | Finite numerical verification of reciprocity. | ai-altered | ai-altered | Same sources; direct two-by-two calculation |
| `ex-translation-through-the-sl2-wall` | Example: compute translation to and out of the singular central character. | Tests adjunction and the two-standard flag. | literature-derived | ai-altered | E757 §§23--24, pp.114--123 |
| `cex-a-verma-module-need-not-be-projective-in-the-whole-block` | Counterexample: the dominant $\mathfrak{sl}_2$ Verma has a nontrivial extension. | Shows truncation/projectivity hypotheses matter. | literature-derived | ai-altered | Lin L8, pp.3--7 |
| `cex-a-projective-verma-flag-need-not-split` | Counterexample: the regular $\mathfrak{sl}_2$ projective is a nonsplit extension of standards. | Distinguishes filtration from direct sum. | literature-derived | ai-altered | E757 §20.2, pp.101--105 |

---

## RL-6 — The BGG resolution

**A-page role.** Decompose the resolution through Bruhat-edge maps, sign
choices, $d^2=0$, and exactness, so the Weyl formula in RL-7 is genuinely
proved. DG-31 supplies Bruhat/Coxeter combinatorics and HA-1/HA-5 supply complex
and resolution language. Full treatments: Fan Zhou §§2--5, pp.3--37 and
the original Bernstein--Gelfand--Gelfand treatment, pp.21--64. Etingof 18.757
§20.3, pp.104--105 and Etingof 18.755 §26, pp.138--144 check the character
consequence independently.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-bgg-bruhat-verma-sum-in-degree-k` | Definition: for dominant integral $\lambda$, $C_k(\lambda)=\bigoplus_{\ell(w)=k}M(w\cdot\lambda)$. | Fixes the terms and the degree-zero/longest-element endpoints. | literature-derived | not-applicable | Zhou §3, pp.6--8; E757 §20.3, p.104 |
| `lem-bruhat-covers-give-unique-verma-embeddings` | Lemma: each cover $w\gtrdot w'$ gives a map $M(w\cdot\lambda)\to M(w'\cdot\lambda)$ unique up to scalar. | Imports RL-3 exactly at graph edges. | literature-derived | ai-altered | Zhou §3, pp.6--9; E757 §20.3, p.104 |
| `lem-bruhat-rank-two-intervals-are-diamonds` | Lemma: every length-two interval relevant to the differential has two saturated paths. | Local combinatorial reason cancellation can occur. | literature-derived | ai-altered | Zhou §4.1, pp.12--17; DG-31 |
| `lem-compatible-signs-exist-on-the-bruhat-graph` | Lemma: edge signs can be chosen so the two products around every diamond are opposite. | Isolates the orientation construction from exactness. | literature-derived | ai-altered | Zhou §4.2, pp.17--21; E757 §20.3, p.104 |
| `def-bgg-differential-from-signed-verma-maps` | Definition: $d_k$ is the sum of signed cover maps from $C_k$ to $C_{k-1}$. | Makes the resolution an explicit complex candidate. | literature-derived | not-applicable | Zhou §3, pp.8--10; §4.2, pp.17--21 |
| `prop-the-bgg-differential-squares-to-zero` | Proposition: diamond cancellation gives $d_{k-1}d_k=0$, including the absent-path cases. | Closes the chain-complex obligation. | literature-derived | ai-altered | Zhou §§3--4, pp.8--21; E757 §20.3, p.104 |
| `lem-the-bgg-augmentation-has-image-the-simple-module` | Lemma: $C_0=M(\lambda)\to L(\lambda)$ has kernel generated by the simple-reflection singular submodules. | Establishes exactness in degree zero. | literature-derived | ai-altered | Zhou §3, pp.9--11; §4.3, pp.21--24 |
| `lem-kernel-generators-for-the-weak-bgg-complex` | Lemma: relations among adjacent singular submodules are generated by rank-two intersections. | Proof-sized input to positive-degree exactness. | literature-derived | ai-altered | Zhou §§4.3--4.4, pp.21--27 |
| `thm-weak-bgg-resolution` | Theorem: the signed Verma complex is exact after the rank-two kernel calculation. | Records the algebraic exactness stage before all root systems. | literature-derived | ai-altered | Zhou §5, pp.28--37 |
| `thm-bgg-resolution-of-a-finite-dimensional-simple-module` | Theorem: $0\to C_{\ell(w_0)}\to\cdots\to C_0\to L(\lambda)\to0$ is an exact finite Verma resolution. | Load-bearing source of Weyl numerator and cohomology calculations. | literature-derived | ai-altered | Zhou §§3--5, pp.6--37; E757 §20.3, pp.104--105 |
| `cor-bgg-euler-character-identity` | Corollary: $[L(\lambda)]=\sum_w(-1)^{\ell(w)}[M(w\cdot\lambda)]$ in the completed Grothendieck group. | Converts exactness to the character numerator. | literature-derived | ai-altered | E757 §20.3, p.105; E755 §26, pp.138--141 |
| `cor-bgg-resolution-has-length-the-number-of-positive-roots` | Corollary: the last nonzero degree is $\ell(w_0)=\lvert\Phi^+\rvert$. | Records the finite endpoint needed by HA applications. | literature-derived | ai-altered | Zhou §3, pp.6--8; DG-31 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-the-sl2-bgg-resolution` | Example: $0\to M(-m-2)\to M(m)\to L(m)\to0$. | Checks both endpoint degrees and augmentation. | literature-derived | ai-altered | E757 §20.3, p.105; E755 §25.2, p.135 |
| `ex-the-a2-bgg-resolution-with-six-verma-summands` | Example: write degrees $0,1,2,3$ and all Bruhat-edge maps. | First nontrivial diamond complex. | literature-derived | ai-altered | Zhou §§3--5, pp.6--37 |
| `ex-sign-cancellation-in-an-a2-bruhat-diamond` | Finite verification that the two length-two composites cancel after orientation. | Makes $d^2=0$ visible. | ai-altered | ai-altered | Zhou §4.2, pp.17--21 |
| `cex-unsigned-bruhat-edge-sums-need-not-square-to-zero` | Counterexample in the $A_2$ diamond. | Shows signs are structural, not cosmetic. | ai-generated | ai-generated | Direct two-path computation; no dependency may cite this row |
| `cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight` | Counterexample: repeated dot translates make the regular direct-sum formula nonminimal and nonexact as written. | Protects the dominance/regular indexing hypotheses. | literature-derived | ai-altered | E757 §20.3, pp.104--105; Lin L4, pp.4--7 |

---

## RL-7 — Weyl character and multiplicity formulas

**A-page role.** Prove rather than cite the denominator and Weyl formulas from
RL-6, then extract Kostant multiplicities, derive Freudenthal recursion from
the Casimir, and take the dimension limit. DG-32 supplies only the
finite-dimensional highest-weight classification. Full treatments: Etingof
18.755 §26, pp.138--144 and Elduque chapter 3 §5, pp.74--89; Weber's Weyl
dimension notes, pp.1--4 independently check the final specialization.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-completed-formal-character-ring-for-downward-cones` | Definition: complete $\mathbb Z[P]$ so coefficients remain finite on finite unions of sets $\lambda-Q^+$. | Gives legitimate meaning to Verma characters and geometric series. | literature-derived | not-applicable | E755 §26.1, pp.138--139; E757 §10.1, pp.53--54 |
| `def-formal-character-of-a-finite-dimensional-weight-module` | Definition: $\operatorname{ch}V=\sum_\mu(\dim V_\mu)e^\mu$. | Rehomes DG-32's formula object under the seam. | literature-derived | not-applicable | E755 §26.1, p.138; Elduque ch.3 §5 |
| `prop-formal-characters-are-additive-and-multiplicative` | Proposition: characters respect short exact sequences and tensor products. | Converts resolutions and products into identities. | literature-derived | ai-altered | E755 §26.1, pp.138--139; E757 §10.1, pp.53--54 |
| `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` | Proposition: root-string symmetry makes every finite-dimensional weight multiplicity, hence the character, $W$-invariant. | Rehomes the character-theoretic consequence while citing DG-32 for root strings. | literature-derived | ai-altered | E755 §26.1, pp.138--139; HumphI §23, pp.126--135; DG-32 |
| `def-weyl-alternation-operator` | Definition: $A(\nu)=\sum_{w\in W}(-1)^{\ell(w)}e^{w\nu}$. | Packages numerator and denominator uniformly. | literature-derived | not-applicable | E755 §26.2, pp.139--140; Weber pp.1--2 |
| `lem-weyl-alternants-are-skew-invariant` | Lemma: $wA(\nu)=(-1)^{\ell(w)}A(\nu)$ and a wall-fixed alternant is zero. | Handles singular numerator boundary cases. | literature-derived | ai-altered | E755 §26.2, p.140; Weber pp.1--2 |
| `thm-weyl-denominator-identity` | Theorem: $A(\rho)=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})$. | Rehomed formula, proved by the $\lambda=0$ BGG Euler identity. | literature-derived | ai-altered | E755 §26.2, pp.139--141; Zhou §3, pp.9--11 |
| `lem-bgg-euler-character-gives-the-weyl-numerator` | Lemma: multiplying the RL-6 Euler identity by the Verma denominator gives $A(\lambda+\rho)$. | Explicit bridge from resolution to character theorem. | literature-derived | ai-altered | E755 §26.2, pp.140--141; E757 §20.3, p.105 |
| `thm-weyl-character-formula` | Theorem: $\operatorname{ch}L(\lambda)=A(\lambda+\rho)/A(\rho)$ for dominant integral $\lambda$. | Rehomed formula with proof rather than DG citation. | literature-derived | ai-altered | E755 §26.2, pp.140--142; Zhou §3, pp.9--11 |
| `def-kostant-partition-function` | Definition: $P(\beta)$ is the coefficient of $e^{-\beta}$ in $\prod_{\alpha>0}(1-e^{-\alpha})^{-1}$, with $P(0)=1$ and $P(\beta)=0$ off $Q^+$. | Makes coefficient extraction and boundary values explicit. | literature-derived | not-applicable | E755 §26.3, p.142; Weber pp.1--2 |
| `thm-kostant-weight-multiplicity-formula` | Theorem: $m_\lambda(\mu)=\sum_w(-1)^{\ell(w)}P(w(\lambda+\rho)-(\mu+\rho))$. | Computes all weight multiplicities from the Weyl proof. | literature-derived | ai-altered | E755 §26.3, p.142; Weber pp.1--2 |
| `lem-casimir-comparison-on-a-weight-vector` | Lemma: compare the scalar Casimir action on $L(\lambda)$ with its triangular expansion on a vector of weight $\mu$. | Proof-sized source of Freudenthal's numerator. | literature-derived | ai-altered | Elduque ch.3 §5, pp.74--80; RL-1 Casimir rows |
| `lem-positive-root-strings-sum-the-freudenthal-correction` | Lemma: trace the $e_\alpha f_\alpha$ terms across weight strings to obtain $2\sum_{\alpha>0}\sum_{j\ge1}(\mu+j\alpha,\alpha)m(\mu+j\alpha)$. | Isolates the finite double sum and why it terminates. | literature-derived | ai-altered | Elduque ch.3 §5, pp.80--84 |
| `thm-freudenthal-weight-multiplicity-recursion` | Theorem: the Casimir eigenvalue difference times $m(\mu)$ equals the positive-root correction sum. | Gives a recursive alternative to Kostant's alternating formula. | literature-derived | ai-altered | Elduque ch.3 §5, pp.74--89; Brandeis notes §§character/multiplicity |
| `cor-freudenthal-recursion-terminates-from-the-highest-weight` | Corollary: with $m(\lambda)=1$ and zero outside the weight polytope, the recursion determines lower multiplicities whenever the denominator is nonzero. | States the induction and its boundary cases. | literature-derived | ai-altered | Elduque ch.3 §5, pp.84--89 |
| `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one` | Lemma: restrict along a regular one-parameter subgroup and cancel equal-order zeros in numerator and denominator. | Makes the $e^\mu\to1$ limit honest. | literature-derived | ai-altered | E755 §26.4, pp.142--144; Weber pp.2--4 |
| `thm-weyl-dimension-formula` | Theorem: $\dim L(\lambda)=\prod_{\alpha>0}\frac{(\lambda+\rho,\alpha)}{(\rho,\alpha)}$. | Rehomed dimensional consequence with its limiting proof. | literature-derived | ai-altered | E755 §26.4, pp.142--144; Weber pp.2--4 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-weyl-character-and-dimension-formulas-for-sl2` | Example: recover $e^m+e^{m-2}+\cdots+e^{-m}$ and dimension $m+1$. | Checks empty/product endpoints and cancellation. | literature-derived | ai-altered | E755 §26, pp.138--144 |
| `ex-a2-weyl-denominator-expansion` | Example: expand both sides for the three positive roots. | Finite verification of the denominator signs. | ai-altered | ai-altered | E755 §26.2, pp.139--141 |
| `ex-kostant-multiplicity-in-the-sl3-adjoint-module` | Example: compute multiplicity two of the zero weight. | Tests multiple partition contributions and cancellation. | literature-derived | ai-altered | E755 §26.3, p.142; Weber pp.1--2 |
| `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` | Example: recover the same multiplicity recursively. | Cross-checks two independent algorithms. | ai-altered | ai-altered | Elduque ch.3 §5, pp.74--89 |
| `cex-omitting-the-rho-shift-breaks-kostants-formula` | Counterexample in $\mathfrak{sl}_2$. | Tests the convention at the smallest rank. | ai-generated | ai-generated | Direct substitution; no dependency may cite this row |
| `ex-weyl-dimension-formula-for-a-fundamental-sl3-module` | Example: obtain dimension three. | Checks product normalisation. | literature-derived | ai-altered | Weber pp.2--4 |

---

## RL-8 — Tensor-product multiplicities and Littlewood--Richardson

**A-page role.** Turn character multiplication into a general alternating
tensor-multiplicity formula, then specialise to type $A$ and prove the
Littlewood--Richardson/Pieri rules. Weyl complete reducibility is cited from
DG-29. Full treatments: Etingof 18.755 §§27--30, pp.145--164; Seynnaeve
§§9--12.1, pp.51--60 for polynomial/rational $GL(V)$ representations and
Schur modules; and Stembridge pp.1--4 for a self-contained LR proof.
Humphreys §24.4 independently checks the Steinberg formula.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-tensor-product-multiplicity-for-highest-weight-modules` | Definition: $c_{\lambda\mu}^{\nu}=[L(\lambda)\otimes L(\mu):L(\nu)]$. | Names the finite semisimple multiplicity. | literature-derived | not-applicable | E755 §27, pp.145--147; Humphreys §24.4 |
| `prop-tensor-product-multiplicities-are-character-structure-constants` | Proposition: $\operatorname{ch}L(\lambda)\operatorname{ch}L(\mu)=\sum_\nu c_{\lambda\mu}^{\nu}\operatorname{ch}L(\nu)$. | Converts decomposition to coefficient extraction. | literature-derived | ai-altered | E755 §27, pp.145--147; Stembridge pp.1--3 |
| `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` | Lemma: after multiplying by $A(\rho)$, the coefficient at a regular dominant translate isolates one simple character coefficient. | Proof-sized bridge to Steinberg's sum. | literature-derived | ai-altered | E755 §27, pp.145--148; Humphreys §24.4 |
| `thm-steinberg-tensor-product-multiplicity-formula` | Theorem: $c_{\lambda\mu}^{\nu}=\sum_{w\in W}(-1)^{\ell(w)}m_\mu(w(\nu+\rho)-(\lambda+\rho))$. | General characteristic-zero tensor algorithm requested by the commission. | literature-derived | ai-altered | E755 §27, pp.145--148; Humphreys §24.4 |
| `cor-racah-speiser-tensor-product-algorithm` | Corollary: shift the weights of one factor by $\lambda+\rho$, reflect regular points to the dominant chamber with signs, and discard walls. | Operational form of Steinberg's formula. | literature-derived | ai-altered | E755 §27, pp.147--149; Humphreys §24.4 |
| `cor-minuscule-tensor-product-rule` | Corollary: if $L(\mu)$ is minuscule, $L(\lambda)\otimes L(\mu)$ is the multiplicity-free sum over dominant $\lambda+$ weights of $L(\mu)$. | Cheap useful consequence with all hypotheses visible. | literature-derived | ai-altered | E755 §28, pp.150--153 |
| `def-polynomial-glr-highest-weights-as-partitions` | Definition: polynomial $GL_r$ highest weights are partitions with at most $r$ parts. | Sets the type-A domain without replacing DG classification. | literature-derived | not-applicable | Seynnaeve §§9--11, pp.51--59; E755 §29, pp.154--158 |
| `def-schur-module-and-schur-polynomial-character` | Definition: $S_\lambda(\mathbb C^r)$ is the Schur functor module and has character $s_\lambda$. | Connects type-A modules to symmetric functions. | literature-derived | not-applicable | Seynnaeve §§10--11, pp.52--59; E755 §29, pp.154--158 |
| `prop-semistandard-tableaux-expand-schur-characters` | Proposition: $s_\lambda=\sum_T x^{\mathrm{wt}(T)}$ over semistandard tableaux of shape $\lambda$. | Gives finite weight data used in Pieri/LR. | literature-derived | ai-altered | Stembridge pp.1--2; E755 §29, pp.156--159 |
| `def-littlewood-richardson-tableau-and-coefficient` | Definition: $c_{\lambda\mu}^{\nu}$ counts skew semistandard tableaux of shape $\nu/\lambda$, content $\mu$, with lattice reading word. | Fixes row/column and word conventions explicitly. | literature-derived | not-applicable | Stembridge pp.1--3; E755 §30, pp.159--164 |
| `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` | Lemma: character alternation and sign-reversing cancellation identify the surviving skew tableaux with LR tableaux. | Main combinatorial proof joint of the LR theorem. | literature-derived | ai-altered | Stembridge pp.1--3; E755 §30, pp.159--164 |
| `thm-littlewood-richardson-tensor-product-rule` | Theorem: $S_\lambda\otimes S_\mu\cong\bigoplus_\nu S_\nu^{\oplus c_{\lambda\mu}^{\nu}}$ in stable rank, omitting shapes with too many rows at fixed $r$. | Complete type-A tensor decomposition. | literature-derived | ai-altered | Stembridge pp.1--4; E755 §30, pp.159--164 |
| `cor-horizontal-pieri-rule` | Corollary: tensoring with a symmetric power adds a horizontal strip, multiplicity one. | Useful cheaply proved LR specialization. | literature-derived | ai-altered | Stembridge pp.1--3; E755 §30, pp.159--164 |
| `cor-vertical-pieri-rule` | Corollary: tensoring with an exterior power adds a vertical strip, multiplicity one. | Dual boundary specialization. | literature-derived | ai-altered | Stembridge pp.1--3; E755 §30, pp.159--164 |
| `prop-determinant-twists-translate-glr-highest-weights` | Proposition: adding $(k^r)$ to a partition tensors by $(\det)^k$, allowing rational irreducibles to reduce to polynomial ones. | Handles negative/common shifts honestly. | literature-derived | ai-altered | E755 §29, pp.154--158; Seynnaeve §12.1, pp.59--60 |
| `prop-littlewood-richardson-coefficients-stabilize-with-rank` | Proposition: once $r$ accommodates every relevant partition, the tensor coefficients are independent of $r$. | States the finite-rank boundary of the stable rule. | literature-derived | ai-altered | Stembridge pp.1--3; E755 §30, pp.159--164 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-clebsch-gordan-decomposition-for-sl2` | Example: $L(a)\otimes L(b)=\bigoplus_{j=0}^{\min(a,b)}L(a+b-2j)$. | Checks Steinberg/Racah--Speiser completely. | literature-derived | ai-altered | E755 §27, pp.145--149 |
| `ex-three-tensor-three-for-sl3` | Example: $3\otimes3=6\oplus\bar3$. | First non-$A_1$ tensor calculation. | literature-derived | ai-altered | E755 §§27--28, pp.145--153 |
| `ex-littlewood-richardson-product-s21-times-s1` | Example: apply Pieri to list the legal added boxes. | Tests equal rows and fixed-rank omissions. | ai-altered | ai-altered | Stembridge pp.1--3 |
| `ex-a-littlewood-richardson-coefficient-greater-than-one` | Example: exhibit two LR tableaux contributing to one coefficient. | Shows tensor products are not generally multiplicity free. | literature-derived | ai-altered | Stembridge pp.1--3 |
| `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr` | Counterexample satisfying shape rules but failing the reading-word condition. | Shows that semistandardness alone is insufficient. | ai-generated | ai-generated | Finite tableau check; no dependency may cite this row |
| `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` | Counterexample to unqualified stable-rank use. | Enforces the $GL_r$ row bound. | literature-derived | ai-altered | Seynnaeve §§9--12.1, pp.51--60 |

---

## RL-9 — Borel--Weil and Borel--Weil--Bott

**Build hold.** This A page is self-contained as a representation-theoretic
scaffold, but cannot be authored before the future AV pages supply $G/B$ as a
smooth projective variety, associated equivariant line bundles, coherent
cohomology, and Serre duality. The result is not dropped merely because that
supplier is future. Full treatments: Rui lecture 1, pp.2--7 and Ng §§3--6,
pp.6--14; Lurie's complete pp.1--3 proof and Boxer--Pilloni §1.1.2--1.1.3,
pp.2--6 are independent proof checks.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-flag-variety-and-borel-character-line-bundle-interface` | Definition/interface: for simply connected complex semisimple $G$, $X=G/B$ and $\mathcal L_\lambda=G\times_B\mathbb C_{-\lambda}$. | Pins the sign and geometry supplier contract. | literature-derived | not-applicable | Rui L1, pp.2--3; Ng §§3--4, pp.6--9 |
| `lem-sections-of-an-associated-line-bundle-as-equivariant-functions` | Lemma: sections identify with regular $f:G\to\mathbb C$ satisfying $f(gb)=\lambda(b)f(g)$ under the adopted sign. | Converts geometry to a concrete representation space. | literature-derived | ai-altered | Ng §4, pp.8--10; Rui L1, pp.3--4 |
| `prop-left-translation-makes-line-bundle-cohomology-a-g-module` | Proposition: the $G$-linearisation induces $G$-actions on $H^i(X,\mathcal L_\lambda)$ and hence differentiated $\mathfrak g$-modules. | Supplies the representation action before identifying it. | literature-derived | ai-altered | Rui L1, pp.3--4; Ng §4, pp.8--10 |
| `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` | Lemma: restriction to the dense big cell gives uniqueness and a highest/lowest-weight vector with the prescribed extremal weight. | Proof joint for irreducibility of global sections. | literature-derived | ai-altered | Ng §§4--5, pp.8--12; Rui L1, pp.3--5 |
| `thm-borel-weil` | Theorem: for dominant integral $\lambda$, $H^0(G/B,\mathcal L_\lambda)\cong L(\lambda)^*$ and higher cohomology vanishes in the BWB range. | Geometric realisation requested by the commission. | literature-derived | ai-altered | Ng §5, pp.10--12; Rui L1, pp.4--5 |
| `prop-the-canonical-line-bundle-of-g-over-b-has-weight-minus-two-rho` | Proposition: $K_{G/B}\cong\mathcal L_{-2\rho}$ in the adopted convention. | Makes Serre duality match the dot action. | literature-derived | ai-altered | Rui L1, pp.5--6; Boxer--Pilloni §1.1.2, pp.2--3 |
| `lem-minimal-parabolic-projection-has-p1-fibers` | Lemma: $G/B\to G/P_i$ has fibre $P_i/B\cong\mathbb P^1$. | Reduces wall crossing to rank-one line-bundle cohomology. | literature-derived | ai-altered | Lurie pp.1--2; Boxer--Pilloni §1.1.3, pp.3--5 |
| `lem-rank-one-cohomology-shifts-across-a-simple-wall` | Lemma: when $\langle\lambda+\rho,\alpha_i^\vee\rangle$ has the appropriate sign, fibre cohomology identifies a degree shift between $\lambda$ and $s_i\cdot\lambda$. | Atomic induction step of BWB. | literature-derived | ai-altered | Lurie pp.1--2; Boxer--Pilloni §1.1.3, pp.3--5 |
| `lem-singular-dot-weights-have-zero-line-bundle-cohomology` | Lemma: if $\lambda+\rho$ lies on a Weyl wall, all $H^i(G/B,\mathcal L_\lambda)$ vanish. | Handles the degenerate BWB case explicitly. | literature-derived | ai-altered | Lurie pp.1--3; Rui L1, pp.5--6 |
| `lem-a-regular-weight-has-a-unique-dominant-dot-translate` | Lemma: for regular $\lambda+\rho$, a unique $w$ sends it to the dominant chamber and the number of wall crossings is $\ell(w)$. | Fixes the unique cohomological degree. | literature-derived | ai-altered | DG-31; Lurie pp.1--2 |
| `thm-borel-weil-bott` | Theorem: singular weights have zero cohomology; otherwise $H^{\ell(w)}(G/B,\mathcal L_\lambda)\cong L(w\cdot\lambda)^*$ and all other degrees vanish. | Complete statement with both mutually exclusive boundary cases. | literature-derived | ai-altered | Lurie pp.1--3; Rui L1, pp.5--7; Ng §6, pp.12--14 |
| `prop-borel-weil-bott-is-compatible-with-serre-duality` | Proposition: dualising with $K_{G/B}=\mathcal L_{-2\rho}$ sends the BWB degree and weight to the $w_0$-paired case. | Checks signs and top-degree endpoint. | literature-derived | ai-altered | Rui L1, pp.5--7; Boxer--Pilloni §1.1.2, pp.2--3 |
| `cor-borel-weil-bott-euler-character-is-the-weyl-character` | Corollary: the alternating cohomology character agrees with the Weyl numerator/denominator quotient. | Bridges geometric and RL-7 proofs without making geometry load-bearing there. | literature-derived | ai-altered | Ng §6, pp.12--14; Rui L1, pp.6--7 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-borel-weil-bott-on-p1-for-sl2` | Example: compute $H^0$ and $H^1$ of $\mathcal O(n)$, including $n=-1$. | Verifies dominant, singular, and negative cases. | literature-derived | ai-altered | Lurie pp.1--3; Ng §§5--6, pp.10--14 |
| `ex-the-sl2-singular-weight-has-no-cohomology` | Example: $\lambda=-\rho$ corresponds to $\mathcal O(-1)$. | Sharp wall-vanishing check. | literature-derived | ai-altered | Lurie pp.1--3 |
| `ex-an-sl3-weight-with-cohomology-in-degree-one` | Example: apply one simple reflection to reach a dominant dot translate. | Shows nonzero higher cohomology concretely. | literature-derived | ai-altered | Rui L1, pp.5--7 |
| `ex-the-top-degree-bwb-case-and-serre-duality` | Example: use $w_0$ to match $H^{\lvert\Phi^+\rvert}$ with dual global sections. | Checks the last degree. | literature-derived | ai-altered | Rui L1, pp.5--7; Boxer--Pilloni pp.2--3 |
| `cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer` | Counterexample to silently mixing $\mathbb C_\lambda$ and $\mathbb C_{-\lambda}$. | Enforces the convention audit. | ai-altered | ai-altered | Comparison of Ng §4 and Rui L1 conventions |

---

## RL-10 — Primitive ideals and Duflo's theorem

**A-page role.** Reach the classification statement through annihilators,
central reductions, and highest-weight ideals, while being candid about the
geometric depth of the proof. The final Duflo surjectivity theorem is supplied
with a proof architecture but `not-supplied` proof: authoring its localisation
argument would require the deliberately excluded Beilinson--Bernstein theory.
Full treatments: Duflo's original article, pp.107--120 and Stanciu §§2--7,
pp.3--29; Etingof 18.757 §§18, 22, pp.92--95, 110--113 is an independent
graduate treatment of the highest-weight/annihilator part.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-annihilator-ideal-of-a-lie-algebra-module` | Definition: $\operatorname{Ann}_{U\mathfrak g}M=\{u:uM=0\}$ is a two-sided ideal. | Fixes the map from representations to the noncommutative spectrum. | literature-derived | not-applicable | E757 §18.1, p.92; Duflo pp.107--108 |
| `def-primitive-ideal-of-an-enveloping-algebra` | Definition: a primitive ideal is the annihilator of a simple left $U\mathfrak g$-module. | States the target class without assuming highest weight. | literature-derived | not-applicable | E757 §18.1, p.92; Stanciu §2, pp.3--5 |
| `prop-annihilators-of-simple-highest-weight-modules-are-primitive` | Proposition: $I(\lambda)=\operatorname{Ann}L(\lambda)$ is primitive. | Gives the easy direction of Duflo. | literature-derived | ai-altered | E757 §18.1, p.92; Duflo pp.107--108 |
| `prop-primitive-ideals-are-prime-in-the-noncommutative-sense` | Proposition: if two-sided ideals $A,B$ satisfy $AB\subset I$ for primitive $I$, then $A\subset I$ or $B\subset I$. | Supplies a structural test used in reductions. | literature-derived | ai-altered | E757 §18.1, pp.92--93; Stanciu §2, pp.3--5 |
| `prop-a-primitive-ideal-determines-a-central-character` | Proposition: for semisimple $\mathfrak g$, $I\cap Z(U\mathfrak g)$ is the kernel of a central character. | Places every primitive ideal over an HC dot orbit. | literature-derived | ai-altered | E757 §18.1, pp.92--93; Stanciu §2, pp.3--5 |
| `def-central-reduction-of-the-enveloping-algebra` | Definition: $U_\chi=U\mathfrak g/U\mathfrak g\ker\chi$. | Separates the fixed-infinitesimal-character problem. | literature-derived | not-applicable | E757 §18.1, p.93; Stanciu §2, pp.4--5 |
| `prop-verma-annihilator-contains-the-central-character-ideal` | Proposition: $U\mathfrak g\ker\chi_\lambda\subseteq\operatorname{Ann}M(\lambda)\subseteq I(\lambda)$. | Establishes the unavoidable central part before equality. | literature-derived | ai-altered | E757 §18.1, pp.92--94; Duflo pp.108--110 |
| `thm-duflo-annihilator-theorem-for-verma-modules` | Theorem: $\operatorname{Ann}M(\lambda)=U\mathfrak g\ker\chi_\lambda$. | Deep input relating highest-weight induction to the centre. | literature-derived | not-supplied | Duflo pp.107--120; E757 §18.1, pp.93--94 |
| `def-associated-graded-variety-of-a-two-sided-ideal` | Definition: with PBW filtration, $\mathcal V(I)$ is the zero set of $\operatorname{gr}I\subset S(\mathfrak g)$. | Records the geometric invariant used by the full proof. | literature-derived | not-applicable | Stanciu §3, pp.5--9; Fadeev §§2.6--2.7, pp.22--24 |
| `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant` | Proposition: $\mathcal V(I)$ is a closed conical coadjoint-invariant subset of $\mathfrak g^*$. | Explains why nilpotent geometry enters Duflo/Joseph theory. | literature-derived | ai-altered | Stanciu §§3--4, pp.5--14; E757 §18.2, pp.94--95 |
| `lem-duflo-reduction-to-a-regular-integral-central-character` | Lemma/proof architecture: translation and coherent-family arguments reduce the surjectivity problem to a regular integral infinitesimal character. | Names the first deep reduction without pretending to prove translation theory again. | literature-derived | not-supplied | Duflo pp.110--115; E757 §§22--25, pp.110--128 |
| `lem-localization-identifies-simple-modules-with-highest-weight-annihilators` | Lemma/proof architecture: in the regular integral reduction, localisation and orbit/support analysis produce a highest-weight simple with the same annihilator. | Pinpoints the missing geometric engine. | literature-derived | not-supplied | Stanciu §§4--7, pp.9--29; Duflo pp.115--120 |
| `thm-duflo-every-primitive-ideal-is-highest-weight` | Duflo theorem: every primitive ideal of $U(\mathfrak g)$ is $\operatorname{Ann}L(\lambda)$ for some $\lambda\in\mathfrak h^*$. | Requested classification/surjectivity statement. | literature-derived | not-supplied | Duflo pp.107--120; Stanciu §7, pp.26--29 |
| `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character` | Corollary: every primitive ideal lies over a unique dot orbit under the HC isomorphism. | Connects Duflo back to RL-1 without claiming injectivity in $\lambda$. | literature-derived | ai-altered | Duflo theorem; RL-1 HC theorem |
| `rem-highest-weights-can-have-the-same-primitive-ideal` | Remark: $\lambda\mapsto\operatorname{Ann}L(\lambda)$ is generally not injective; classifying fibres requires Joseph/Kazhdan--Lusztig theory. | Prevents overstatement of Duflo as a bijection. | literature-derived | not-applicable | E757 §§18, 22, pp.92--95, 110--113 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-primitive-ideals-of-usl2-at-a-generic-central-character` | Example: the generic central reduction has the Verma/simple annihilator generated by the Casimir value. | Smallest Duflo-annihilator case. | literature-derived | ai-altered | E757 §18.1, pp.92--94; Duflo pp.107--110 |
| `ex-annihilator-of-the-trivial-sl2-module` | Example: compute the ideal generated by $e,f,h$ and its central character. | Checks a finite-dimensional primitive ideal. | ai-altered | ai-altered | Direct enveloping-algebra action; E757 §18.1 |
| `ex-associated-variety-of-a-finite-dimensional-simple-annihilator` | Example: its associated variety is the origin. | Contrasts finite-dimensional and Verma behaviour. | literature-derived | ai-altered | Stanciu §3, pp.5--9; Fadeev §§2.6--2.7 |
| `cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive` | Counterexample using two distinct simple central characters. | Shows “primitive” is not closed under intersection. | ai-generated | ai-generated | Central-character quotient check; no dependency may cite this row |
| `cex-the-central-character-does-not-determine-the-primitive-ideal` | Counterexample at a regular integral $\mathfrak{sl}_2$ character. | Shows a central fibre can contain more than one primitive ideal. | literature-derived | ai-altered | E757 §18.1, pp.92--95 |

---

## RL-11 — Lie algebra cohomology and Kostant's nilradical theorem

**A-page role.** Consume, rather than re-mint, DG-29's Chevalley--Eilenberg
complex/signs and Whitehead lemmas; use cohomology as a representation tool,
culminating in Kostant's multiplicity-free $\mathfrak n^+$-cohomology theorem.
HA supplies derived-functor and spectral-sequence language. Full treatments:
the OWTU thesis chapter 3 §§3.2--3.5, printed pp.64--84 (PDF pp.70--90) and
Woit pp.1--7; Etingof 18.755 §§45, 48, pp.245--249, 260--264 independently
checks CE/Ext and reductive consequences.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `prop-lie-algebra-cohomology-is-derived-invariants` | Proposition: $H^k(\mathfrak a,V)\cong\operatorname{Ext}_{U\mathfrak a}^k(\mathbb C,V)$, using DG-29's CE complex and HA-6/HA-8. | Explains the functorial role without rebuilding Ext. | literature-derived | ai-altered | E755 §45, pp.245--249; OWTU §3.2, pp.64--68 |
| `prop-h-zero-is-the-invariant-subspace` | Proposition: $H^0(\mathfrak a,V)=V^{\mathfrak a}$. | Fixes the degree-zero boundary. | literature-derived | ai-altered | E755 §45.1, pp.245--246; Woit p.1 |
| `prop-a-normalizer-acts-on-lie-algebra-cohomology` | Proposition: if $\mathfrak a\triangleleft\mathfrak p$, the quotient normalizer action descends from cochains to $H^\bullet(\mathfrak a,V)$. | Gives $H^k(\mathfrak n^+,L(\lambda))$ its $\mathfrak h$-weights. | literature-derived | ai-altered | OWTU §3.2, pp.64--70; Woit pp.1--2 |
| `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra` | Lemma: the $Z(U\mathfrak g)$ action on $H^\bullet(\mathfrak n^+,V)$ agrees with the shifted $U\mathfrak h$ action dictated by HC projection. | Casselman--Osborne constraint on possible cohomology weights. | literature-derived | ai-altered | OWTU §3.3, pp.69--75; RL-1 |
| `thm-casselman-osborne-nilradical-cohomology-constraint` | Theorem: every $\mathfrak h$-weight $\mu$ in $H^\bullet(\mathfrak n^+,L(\lambda))$ has $\chi_\mu=\chi_\lambda$, hence lies in $W\cdot\lambda$. | Cuts the candidate weights to the dot orbit. | literature-derived | ai-altered | OWTU §3.3, pp.69--75; Woit pp.2--3 |
| `def-inversion-set-of-a-weyl-group-element` | Definition: $\Phi_w=\{\alpha>0:w^{-1}\alpha<0\}$ and $\lvert\Phi_w\rvert=\ell(w)$. | Indexes the exterior cochain representing $w$. | literature-derived | not-applicable | Woit pp.2--3; DG-31 |
| `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` | Lemma: the extremal vector tensored with root covectors for $\Phi_w$ gives a closed cochain of degree $\ell(w)$ and weight $w(\lambda+\rho)-\rho$. | Constructs every asserted Kostant summand. | literature-derived | ai-altered | Woit pp.2--4; OWTU §3.4, pp.75--80 |
| `lem-kostant-laplacian-is-scalar-on-weight-components` | Lemma: the CE Laplacian/Casimir comparison has a nonnegative scalar on each weight component and vanishes exactly at dot-orbit extremal weights. | Proof-sized exclusion of all other classes. | literature-derived | ai-altered | OWTU §3.4, pp.75--81; Woit pp.3--5 |
| `lem-each-kostant-extremal-harmonic-space-is-one-dimensional` | Lemma: the zero-eigenspace at $w\cdot\lambda$ is the line generated by the extremal cochain. | Establishes multiplicity one rather than mere support. | literature-derived | ai-altered | OWTU §3.4, pp.78--82; Woit pp.3--5 |
| `thm-kostant-nilradical-cohomology-theorem` | Theorem: $H^k(\mathfrak n^+,L(\lambda))\cong\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot\lambda}$ as $\mathfrak h$-modules. | Requested representation-theoretic cohomology theorem. | literature-derived | ai-altered | OWTU §3.4, pp.75--82; Woit pp.2--5 |
| `cor-kostant-cohomology-in-degrees-zero-and-top` | Corollary: degree zero is the highest-weight line and top degree is the $w_0\cdot\lambda$ line. | Checks both endpoints, including $\mathfrak n^+=0$. | literature-derived | ai-altered | Kostant theorem; Woit pp.4--5 |
| `cor-kostant-euler-character-recovers-the-weyl-numerator` | Corollary: the alternating cohomology character is $\sum_w(-1)^{\ell(w)}e^{w\cdot\lambda}$. | Independent cohomological bridge to RL-7. | literature-derived | ai-altered | Woit pp.4--6; OWTU §3.5, pp.82--84 |
| `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class` | Proposition: applying $\mathfrak n^+$-cohomology/Euler characteristic to the BGG resolution yields the same Weyl alternating sum. | Relates the two proof technologies without rebuilding a spectral sequence. | literature-derived | ai-altered | Woit pp.4--6; HA-15/HA-16; RL-6 |
| `cor-kostants-theorem-feeds-borel-weil-bott` | Corollary/proof interface: relative Lie algebra cohomology on Bruhat cells supplies the weight/degree pattern in BWB. | Explains the geometry link while leaving sheaf machinery in AV/RL-9. | literature-derived | not-supplied | OWTU §3.5, pp.82--84; Woit pp.5--7 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-kostant-n-cohomology-for-sl2` | Example: compute the two one-dimensional groups in degrees zero and one. | Checks signs, dot shift, and top degree. | literature-derived | ai-altered | Woit pp.2--5 |
| `ex-kostant-n-cohomology-for-the-trivial-sl3-module` | Example: list the six weights by Weyl length. | First rank-two full theorem check. | literature-derived | ai-altered | OWTU §3.4, pp.75--82; Woit pp.2--5 |
| `ex-degree-one-kostant-classes-correspond-to-simple-reflections` | Example: identify one class for each simple root. | Connects cohomology to the beginning of BGG. | ai-altered | ai-altered | Kostant theorem; direct $A_2$ calculation |
| `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` | Counterexample: $H^1(\mathfrak n^+,\mathbb C)$ is nonzero. | Prevents misuse of DG-29's semisimple hypothesis. | literature-derived | ai-altered | Woit pp.1--3 |
| `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight` | Finite countercheck in $\mathfrak{sl}_2$. | Shows where the $\rho$ shift enters cohomology. | ai-generated | ai-generated | Direct cochain-weight check; no dependency may cite this row |

---

## RL-12 — Kac--Moody algebras from generalised Cartan matrices

**A-page role.** Restart only where finite-dimensional DG structure theory no
longer applies: construct a contragredient algebra from a finite generalised
Cartan matrix, quotient by the maximal triangularly disjoint ideal, state the
Serre presentation, and develop real/imaginary roots and the Weyl action. Full
treatments: Kleshchev §§1--5, pp.10--76 and Perrin §§4--9, pp.29--84.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-generalized-cartan-matrix` | Definition: $A=(a_{ij})$ has $a_{ii}=2$, $a_{ij}\in\mathbb Z_{\le0}$ for $i\ne j$, and $a_{ij}=0$ iff $a_{ji}=0$. | Sets the finite index and degenerate/off-diagonal cases. | literature-derived | not-applicable | Kleshchev §1.2, pp.10--12; Perrin §4.1, pp.29--31 |
| `def-realization-of-a-generalized-cartan-matrix` | Definition: a realisation $(\mathfrak h,\Pi,\Pi^\vee)$ has linearly independent simple roots/coroots and $\alpha_j(h_i)=a_{ij}$, with minimal dimension $2n-\operatorname{rank}A$. | Handles singular matrices without collapsing the Cartan. | literature-derived | not-applicable | Kleshchev §1.3, pp.13--15; Perrin §4.1, pp.29--32 |
| `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism` | Proposition: every GCM has a minimal realisation, unique by an isomorphism respecting root/coroot data. | Closes the construction's first well-definedness obligation. | literature-derived | ai-altered | Kleshchev §1.3, pp.13--15; Perrin §4.1, pp.31--32 |
| `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient` | Definition: $\widetilde{\mathfrak g}(A)$ is generated by $\mathfrak h,e_i,f_i$ with Cartan and $[e_i,f_j]=\delta_{ij}h_i$ relations. | Separates universal contragredient algebra from its Kac--Moody quotient. | literature-derived | not-applicable | Kleshchev §1.3, pp.13--16; Perrin §4.2, pp.32--35 |
| `prop-contragredient-algebra-has-a-triangular-decomposition` | Proposition: $\widetilde{\mathfrak g}=\widetilde{\mathfrak n}^-\oplus\mathfrak h\oplus\widetilde{\mathfrak n}^+$ and is root-graded. | Makes the quotient ideal condition meaningful. | literature-derived | ai-altered | Kleshchev §1.3, pp.14--16; Perrin §4.2, pp.33--35 |
| `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h` | Lemma: ideals meeting $\mathfrak h$ trivially are closed under sums and their sum remains disjoint from $\mathfrak h$. | Constructs the unique maximal ideal rather than assuming it. | literature-derived | ai-altered | Kleshchev §1.4, pp.16--18; Perrin §4.3, pp.35--37 |
| `def-kac-moody-algebra-associated-to-a-gcm` | Definition: $\mathfrak g(A)=\widetilde{\mathfrak g}(A)/\mathfrak r$, where $\mathfrak r$ is the maximal graded ideal meeting $\mathfrak h$ trivially. | Canonical algebra used by all later infinite-dimensional pairs. | literature-derived | not-applicable | Kleshchev §1.4, pp.16--19; Perrin §4.3, pp.35--38 |
| `thm-serre-presentation-of-a-kac-moody-algebra` | Theorem: $\mathfrak r$ is generated by $(\operatorname{ad}e_i)^{1-a_{ij}}e_j$ and the analogous $f$ relations. | Replaces the abstract maximal ideal by usable relations. | literature-derived | ai-altered | Kleshchev §§1.4--1.5, pp.16--25; Perrin §4.3, pp.35--38 |
| `prop-kac-moody-root-spaces-are-finite-dimensional` | Proposition: $\mathfrak g(A)=\mathfrak h\oplus\bigoplus_{\alpha\in\Delta}\mathfrak g_\alpha$ with finite-dimensional nonzero root spaces. | Makes formal denominator multiplicities coefficientwise finite. | literature-derived | ai-altered | Kleshchev §5.1, pp.68--70; Perrin §9.1, pp.79--81 |
| `def-simple-reflections-and-the-kac-moody-weyl-group` | Definition: $s_i(\lambda)=\lambda-\lambda(h_i)\alpha_i$ and $W=\langle s_i\rangle$. | Extends the DG Weyl notation to possibly infinite $W$. | literature-derived | not-applicable | Kleshchev §3.2, pp.40--45; Perrin §5, pp.39--47 |
| `prop-the-weyl-group-preserves-roots-and-root-multiplicities` | Proposition: $W$ permutes $\Delta$ and preserves $\dim\mathfrak g_\alpha$. | Supports real-root conjugacy and the denominator product. | literature-derived | ai-altered | Kleshchev §§3.2, 5, pp.40--49, 68--76; Perrin §§5, 9 |
| `def-real-and-imaginary-kac-moody-roots` | Definition: real roots are $W\Pi$; all other roots are imaginary, with positive/negative sign inherited from $Q^+$. | Names the genuinely new root phenomenon. | literature-derived | not-applicable | Kleshchev §5.2, pp.70--73; Perrin §9.2, pp.81--84 |
| `prop-real-root-spaces-are-one-dimensional-sl2-roots` | Proposition: each real root has multiplicity one and an associated $\mathfrak{sl}_2$ triple. | Supplies rank-one integrability arguments in RL-14. | literature-derived | ai-altered | Kleshchev §5.2, pp.70--74; Perrin §9.2, pp.81--84 |
| `def-symmetrizable-generalized-cartan-matrix` | Definition: $A$ is symmetrisable if $DA$ is symmetric for a positive diagonal $D$. | Exact hypothesis for invariant forms and Weyl--Kac. | literature-derived | not-applicable | Kleshchev §2.1, pp.26--29; Perrin §7.1, pp.57--59 |
| `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra` | Theorem: a symmetrisable $\mathfrak g(A)$ has the standard nondegenerate invariant form after the necessary Cartan extension. | Infinite-dimensional Casimir/denominator supplier. | literature-derived | ai-altered | Kleshchev §2, pp.26--36; Perrin §7, pp.57--62 |
| `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms` | Theorem: an indecomposable GCM is of finite, affine, or indefinite type according to the sign behaviour of its symmetrisation/positive vectors. | Locates the affine pair without repeating finite Dynkin classification. | literature-derived | ai-altered | Kleshchev §4, pp.50--67; Perrin §8, pp.63--78 |
| `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras` | Proposition: finite-type $A$ gives the finite-dimensional semisimple algebra classified by DG-31. | Closes the interface and prevents duplicate finite theory. | literature-derived | ai-altered | Kleshchev §§1.5, 4, pp.20--25, 50--67; DG-31 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-rank-one-gcm-recovers-sl2` | Example: $A=(2)$ gives $\mathfrak{sl}_2$. | Checks the no-off-diagonal boundary. | literature-derived | ai-altered | Kleshchev §1.5, pp.20--21 |
| `ex-the-a2-serre-relations` | Example: write the two quadratic Serre relations and recover the finite roots. | Checks row/coroot indexing. | literature-derived | ai-altered | Kleshchev §1.5, pp.20--25 |
| `ex-the-affine-a1-gcm-has-singular-rank-one-realization-data` | Example: $\begin{psmallmatrix}2&-2\\-2&2\end{psmallmatrix}$ requires a Cartan of dimension three. | Shows why $h_i$ alone are insufficient. | literature-derived | ai-altered | Kleshchev §§1.3, 4, pp.13--15, 50--67 |
| `ex-a-symmetrizable-indefinite-rank-two-gcm` | Example: $\begin{psmallmatrix}2&-3\\-3&2\end{psmallmatrix}$ has imaginary roots. | Separates indefinite from affine. | literature-derived | ai-altered | Perrin §§8--9, pp.63--84 |
| `cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm` | Counterexample violating $a_{ij}=0\Leftrightarrow a_{ji}=0$. | Tests the asymmetric-zero axiom. | ai-generated | ai-generated | Finite matrix check; no dependency may cite this row |
| `cex-imaginary-root-spaces-need-not-have-multiplicity-one` | Counterexample in affine type: multiples of $\delta$ have rank-sized multiplicity. | Shows the real-root theorem cannot be extended. | literature-derived | ai-altered | Kleshchev §§5--6, pp.68--90 |

---

## RL-13 — Affine Lie algebras and loop central extensions

**A-page role.** Build untwisted affine algebras from loop algebras, prove the
residue cocycle, add the degree derivation, and match the construction to the
affine GCM/root system. Twisted types are stated with their finite-order
automorphism construction but not classified again. Full treatments:
Kleshchev §§6--8, pp.77--115 and Perrin §§12, 14, pp.101--110, 121--126.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-loop-algebra-of-a-simple-lie-algebra` | Definition: $L\mathfrak g=\mathfrak g\otimes\mathbb C[t,t^{-1}]$ with pointwise bracket. | Algebraic, not analytic, loop object. | literature-derived | not-applicable | Kleshchev §7.1, pp.91--92; Perrin §12.1, pp.101--102 |
| `def-residue-two-cocycle-on-a-loop-algebra` | Definition: $\omega(x\otimes f,y\otimes g)=(x,y)\operatorname{Res}(f' g\,dt)$. | Fixes the invariant-form and sign normalisation. | literature-derived | not-applicable | Kleshchev §7.1, pp.91--94; Perrin §12.1, pp.101--103 |
| `lem-the-loop-residue-form-is-alternating` | Lemma: residue of an exact Laurent differential is zero, so $\omega(u,v)=-\omega(v,u)$. | First central-extension well-definedness check. | literature-derived | ai-altered | Kleshchev §7.1, pp.92--94; Perrin §12.1, pp.102--103 |
| `lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity` | Lemma: invariance of $(\ ,\ )$ and the residue product rule give the cyclic cocycle identity. | Second well-definedness check. | literature-derived | ai-altered | Kleshchev §7.1, pp.92--94; Perrin §12.1, pp.102--103 |
| `def-untwisted-affine-central-extension` | Definition: $\widehat{L\mathfrak g}=L\mathfrak g\oplus\mathbb Cc$ with $[x_m,y_n]=[x,y]_{m+n}+m\delta_{m,-n}(x,y)c$. | Core affine bracket with all indices explicit. | literature-derived | not-applicable | Kleshchev §7.1, pp.91--95; Perrin §12.1, pp.101--104 |
| `prop-the-loop-central-extension-is-universal-for-simple-g` | Proposition: this one-dimensional extension is the universal central extension of $L\mathfrak g$. | Explains why the central term is canonical up to form normalisation. | literature-derived | not-supplied | Kleshchev §7.1, pp.94--95; Perrin §12.1, pp.103--104 |
| `def-degree-derivation-and-full-untwisted-affine-algebra` | Definition: adjoin $d$ with $[d,x\otimes t^m]=m x\otimes t^m$ and $[d,c]=0$. | Supplies energy grading and the full Cartan. | literature-derived | not-applicable | Kleshchev §7.2, pp.95--98; Perrin §12.1, pp.103--105 |
| `prop-the-derived-affine-algebra-omits-only-the-degree-derivation` | Proposition: $[\widehat{\mathfrak g},\widehat{\mathfrak g}]=L\mathfrak g\oplus\mathbb Cc$. | Distinguishes full and derived conventions. | literature-derived | ai-altered | Kleshchev §7.2, pp.95--98; Perrin §12.1, pp.104--105 |
| `def-null-root-central-coroot-and-affine-level` | Definition: $\delta$ vanishes on finite Cartan and $c$ but has $\delta(d)=1$; the level of weight $\Lambda$ is $\Lambda(c)$. | Names imaginary direction and representation parameter. | literature-derived | not-applicable | Kleshchev §6.1, pp.77--82; Perrin §12.2, pp.105--107 |
| `prop-roots-of-an-untwisted-affine-lie-algebra` | Proposition: real roots are $\alpha+n\delta$ and nonzero imaginary roots are $n\delta$, with multiplicities $1$ and $\operatorname{rank}\mathfrak g$. | Complete untwisted root list used by Weyl--Kac products. | literature-derived | ai-altered | Kleshchev §§6--7, pp.77--98; Perrin §12.2, pp.105--109 |
| `lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root` | Lemma: $\alpha_0=\delta-\theta$ with coroot determined by $c-\theta^\vee$ in the untwisted normalisation. | Matches loop and GCM presentations. | literature-derived | ai-altered | Kleshchev §6.1, pp.77--83; Perrin §12.2, pp.105--108 |
| `thm-loop-and-affine-gcm-presentations-are-isomorphic` | Theorem: with $e_0=f_\theta\otimes t$, $f_0=e_\theta\otimes t^{-1}$ and the finite simple generators, the loop extension satisfies the untwisted affine GCM presentation. | Closes the two-construction seam. | literature-derived | ai-altered | Kleshchev §§6--7, pp.77--98; Perrin §12, pp.101--110 |
| `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product` | Proposition: $W_{\mathrm{aff}}\cong W_0\ltimes Q^\vee$ with translations realised by affine reflections. | Supplies orbit geometry for affine weights. | literature-derived | ai-altered | Kleshchev §6.2, pp.83--90; Perrin §12.3, pp.108--110 |
| `def-evaluation-module-at-nonzero-loop-parameter` | Definition: pull a finite-dimensional $\mathfrak g$-module back along $x\otimes f\mapsto f(a)x$, with $c$ acting zero. | Supplies an important level-zero module family. | literature-derived | not-applicable | Kleshchev §7.2, pp.96--98; Perrin §12.1, pp.103--105 |
| `prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d` | Proposition: the central cocycle vanishes under evaluation, while a compatible degree action is not canonical. | Marks exact limits of the construction. | literature-derived | ai-altered | Kleshchev §7.2, pp.96--98 |
| `def-twisted-loop-algebra-from-a-diagram-automorphism` | Definition: take fixed points of the combined finite-order diagram automorphism and loop rotation. | Introduces twisted affine algebras without an analytic loop group. | literature-derived | not-applicable | Kleshchev §8, pp.99--115; Perrin §14, pp.121--126 |
| `thm-twisted-loop-central-extensions-give-the-twisted-affine-types` | Theorem: after the residue extension and derivation, these fixed-point algebras realise the twisted affine GCMs (with the standard exceptional folding convention). | States the supported classification bridge. | literature-derived | not-supplied | Kleshchev §8, pp.99--115; Perrin §14, pp.121--126 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-affine-sl2-mode-brackets` | Example: compute $[e_m,f_n]$, $[h_m,h_n]$, and $[d,e_m]$. | Checks cocycle coefficient and Kronecker index. | literature-derived | ai-altered | Kleshchev §7, pp.91--98 |
| `ex-the-heisenberg-subalgebra-of-an-affine-lie-algebra` | Example: Cartan modes plus $c$ form a Heisenberg algebra. | Makes imaginary-root multiplicity and level visible. | literature-derived | ai-altered | Kleshchev §§6--7, pp.77--98 |
| `ex-the-affine-a1-simple-roots-and-gcm` | Example: recover the double edges from $\alpha_0=\delta-\alpha_1$. | Matches loop and GCM indices. | literature-derived | ai-altered | Kleshchev §6.1, pp.77--83 |
| `ex-an-evaluation-module-for-affine-sl2` | Example: write the action at $a\ne0$ and verify $c=0$. | Concrete level-zero representation. | literature-derived | ai-altered | Kleshchev §7.2, pp.96--98 |
| `cex-omitting-the-central-term-breaks-the-affine-gcm-bracket` | Countercheck: $[e_0,f_0]$ misses the central coroot in the loop presentation. | Shows the extension is load-bearing. | ai-altered | ai-altered | Kleshchev §§6--7, pp.77--98 |
| `cex-the-residue-cocycle-depends-on-invariant-form-normalization` | Example: rescaling the form rescales $c$ and numerical level. | Prevents unannounced level normalisations. | literature-derived | ai-altered | Perrin §12.1, pp.101--104 |

---

## RL-14 — Integrable highest-weight Kac--Moody modules

**A-page role.** Generalise induction and highest weights to $\mathfrak g(A)$,
then isolate the local-$\mathfrak{sl}_2$ criterion that makes dominant simples
integrable and proves Weyl invariance/complete reducibility. This is not a
duplicate of RL-2: infinite $W$, imaginary roots, formal support, and
integrability are new. Full treatments: Kleshchev §§9--11, pp.116--154 and
Perrin §§10--11, pp.85--100.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-kac-moody-category-o` | Definition: weight modules with finite-dimensional weight spaces and support in finitely many downward cones form the Kac--Moody version of $\mathcal O$. | Gives a character domain without asserting finite length. | literature-derived | not-applicable | Kleshchev §9.1, pp.116--118; Perrin §10.1, pp.85--87 |
| `def-kac-moody-verma-module` | Definition: $M_A(\lambda)=U\mathfrak g(A)\otimes_{U\mathfrak b}\mathbb C_\lambda$. | Infinite-dimensional standard module. | literature-derived | not-applicable | Kleshchev §9.2, pp.118--121; Perrin §10.1, pp.85--88 |
| `thm-universal-property-and-pbw-character-of-kac-moody-verma-modules` | Theorem: $M_A(\lambda)$ is universal highest weight and has character $e^\lambda\prod_{\alpha>0}(1-e^{-\alpha})^{-\mathrm{mult}\alpha}$. | Extends RL-2 with root multiplicities. | literature-derived | ai-altered | Kleshchev §9.2, pp.118--123; Perrin §10.1, pp.86--89 |
| `thm-kac-moody-verma-module-has-a-unique-simple-quotient` | Theorem: $M_A(\lambda)$ has a unique maximal proper submodule and quotient $L_A(\lambda)$. | Defines irreducible highest-weight modules for arbitrary weights. | literature-derived | ai-altered | Kleshchev §9.2, pp.120--123; Perrin §10.1, pp.87--89 |
| `def-integrable-kac-moody-module` | Definition: a weight module is integrable when each $e_i$ and $f_i$ acts locally nilpotently. | Fixes the algebraic convention; the zero module is integrable. | literature-derived | not-applicable | Kleshchev §3.1, pp.37--40; Perrin §10.2, pp.89--90 |
| `lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras` | Lemma: a weight module is integrable exactly when its restrictions to all simple-root $\mathfrak{sl}_2$ subalgebras are locally finite. | Reduces the infinite algebra to finitely many rank-one checks. | literature-derived | ai-altered | Kleshchev §3.1, pp.37--40; Perrin §10.2, pp.89--90 |
| `lem-dominance-is-necessary-for-an-integrable-highest-weight-module` | Lemma: if $L_A(\lambda)$ is integrable, then $\lambda(h_i)\in\mathbb Z_{\ge0}$ for every $i$. | Rank-one necessity, including the zero label. | literature-derived | ai-altered | Kleshchev §10.1, pp.127--130; Perrin §10.2, pp.89--91 |
| `lem-simple-root-power-relations-generate-the-integrable-quotient` | Lemma: quotienting $M_A(\lambda)$ by submodules generated by $f_i^{\lambda(h_i)+1}v_\lambda$ produces an integrable module for dominant integral $\lambda$. | Constructive sufficiency engine. | literature-derived | ai-altered | Kleshchev §10.1, pp.127--131; Perrin §10.2, pp.90--92 |
| `thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules` | Theorem: $L_A(\lambda)$ is integrable iff $\lambda$ is dominant integral. | Classifies the requested integrable highest-weight simples. | literature-derived | ai-altered | Kleshchev §10.1, pp.127--132; Perrin §10.2, pp.89--92 |
| `prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant` | Proposition: $W$ preserves the weights and their multiplicities in an integrable module. | Load-bearing symmetry for Weyl--Kac. | literature-derived | ai-altered | Kleshchev §3.2, pp.40--49; Perrin §10.2, pp.89--92 |
| `prop-every-integrable-weight-is-weyl-conjugate-toward-the-dominant-chamber` | Proposition: repeated simple reflections move a weight to a dominant representative when its orbit meets the chamber, with stabiliser boundary handled. | Controls maximal weights in decompositions. | literature-derived | ai-altered | Kleshchev §§3.2, 10, pp.40--49, 127--143; Perrin §§5, 10 |
| `lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights` | Lemma: maximal support weights are dominant and their generated submodules are integrable highest-weight quotients. | Starts complete reducibility. | literature-derived | ai-altered | Kleshchev §10.4, pp.139--142; Perrin §10.2, pp.91--92 |
| `thm-complete-reducibility-of-integrable-kac-moody-o-modules` | Theorem: an integrable object in Kac--Moody $\mathcal O$ is a direct sum of $L_A(\lambda)$ for dominant integral $\lambda$. | Infinite-dimensional analogue within the stated support category. | literature-derived | ai-altered | Kleshchev §10.4, pp.139--143; Perrin §10.2, pp.91--92 |
| `cor-tensor-products-of-integrable-highest-weight-modules-decompose` | Corollary: $L_A(\lambda)\otimes L_A(\mu)$ is integrable and decomposes into dominant highest-weight simples with finite weightwise multiplicities. | Extends tensor decomposition without claiming a closed LR rule. | literature-derived | ai-altered | Kleshchev §10.4, pp.139--143; Perrin §10.2, pp.91--92 |
| `prop-integrable-affine-highest-weights-have-nonnegative-integral-level` | Proposition: for affine type, dominant integral $\Lambda$ has level $\Lambda(c)\in\mathbb Z_{\ge0}$; positive-level simples are infinite dimensional. | Connects RL-13 level to highest-weight integrability. | literature-derived | ai-altered | Kleshchev §11, pp.144--154; Perrin §12, pp.101--110 |
| `prop-level-zero-integrable-affine-highest-weight-simples-are-one-dimensional` | Proposition: an irreducible integrable affine highest-weight module of level zero is trivial on the derived algebra. | Handles the degenerate level endpoint distinctly from evaluation modules. | literature-derived | ai-altered | Kleshchev §11, pp.144--154 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-integrable-highest-weight-modules-for-rank-one-gcm` | Example: recover the finite $\mathfrak{sl}_2$ modules. | Checks the construction at finite type. | literature-derived | ai-altered | Kleshchev §10.1, pp.127--132 |
| `ex-the-basic-level-one-weight-of-affine-sl2` | Example: verify dominance and level for $\Lambda_0$. | First genuinely affine integrable label. | literature-derived | ai-altered | Kleshchev §11, pp.144--154 |
| `ex-simple-root-string-in-an-integrable-kac-moody-module` | Example: display the finite $i$-string and reflection symmetry. | Makes local nilpotence/Weyl invariance concrete. | literature-derived | ai-altered | Kleshchev §3.1--2, pp.37--49 |
| `cex-a-kac-moody-verma-module-is-not-integrable-in-general` | Counterexample: $f_i$ acts without a terminal vector. | Separates highest weight from integrable. | literature-derived | ai-altered | Kleshchev §§9--10, pp.116--143 |
| `cex-local-nilpotence-of-only-the-ei-does-not-imply-integrability` | Counterexample: a Verma module has locally nilpotent raising operators but not lowering operators. | Tests both halves of the definition. | ai-altered | ai-altered | Kleshchev §§9--10, pp.116--143 |
| `cex-an-integrable-module-outside-kac-moody-o-need-not-have-the-stated-decomposition` | Counterexample/interface warning using unrestricted sums/support. | Enforces the $\mathcal O$ hypothesis in complete reducibility. | literature-derived | not-supplied | Kleshchev §10.4, pp.139--143 |

---

## RL-15 — The Weyl--Kac character formula

**A-page role.** Prove the symmetrisable Kac--Moody denominator and character
formula in the formal completion, keeping imaginary-root multiplicities and
infinite Weyl sums honest. Full treatments: Kleshchev §§9.3, 10.2--10.3,
pp.123--139 and Perrin §§10--11, pp.85--100.

| id | kind and mathematical content | for / dependency role | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `def-kac-moody-formal-character-completion` | Definition: use formal sums supported in a finite union of downward cones, with coefficientwise finite multiplication. | Gives algebraic meaning to infinite root products and Weyl sums. | literature-derived | not-applicable | Kleshchev §9.3, pp.123--126; Perrin §10.3, pp.91--92 |
| `def-kac-moody-weyl-vector` | Definition: choose $\rho\in\mathfrak h^*$ with $\rho(h_i)=1$ for every simple coroot; its values on complementary Cartan directions are conventional. | Handles nonuniqueness when the Cartan exceeds the coroot span. | literature-derived | not-applicable | Kleshchev §10.2, pp.132--133; Perrin §11.1, pp.93--94 |
| `def-kac-moody-denominator-product-with-root-multiplicities` | Definition: $R=e^\rho\prod_{\alpha>0}(1-e^{-\alpha})^{\mathrm{mult}\alpha}$. | Records the imaginary-root exponents missing in finite type. | literature-derived | not-applicable | Kleshchev §10.2, pp.132--134; Perrin §11.2, pp.94--96 |
| `lem-the-kac-moody-denominator-is-weyl-skew` | Lemma: simple reflections send $R$ to $-R$, using real-root permutation and the single sign-changing simple root. | Denominator proof's first key joint. | literature-derived | ai-altered | Kleshchev §10.2, pp.132--135; Perrin §11.2, pp.94--96 |
| `lem-the-denominator-quotient-has-only-imaginary-cone-support` | Lemma: dividing the skew denominator by $\sum_w(-1)^{\ell(w)}e^{w\rho}$ leaves a $W$-invariant series supported in the positive imaginary cone. | Isolates the possible correction terms. | literature-derived | ai-altered | Kleshchev §10.2, pp.133--136; Perrin §11.2, pp.94--97 |
| `lem-casimir-norm-excludes-nonzero-denominator-corrections` | Lemma: the invariant-form norm inequality forces every nonconstant correction coefficient to vanish. | Proof-sized role of symmetrisability/Casimir. | literature-derived | ai-altered | Kleshchev §§2.3, 10.2, pp.32--36, 133--136; Perrin §11.2 |
| `thm-kac-moody-denominator-identity` | Theorem: $e^\rho\prod_{\alpha>0}(1-e^{-\alpha})^{\mathrm{mult}\alpha}=\sum_{w\in W}(-1)^{\ell(w)}e^{w\rho}$. | Infinite-root analogue of RL-7's denominator. | literature-derived | ai-altered | Kleshchev §10.2, pp.132--136; Perrin §11.2, pp.94--97 |
| `lem-the-shifted-integrable-character-numerator-is-weyl-skew` | Lemma: $R\operatorname{ch}L_A(\lambda)$ is skew under every simple reflection. | Uses RL-14's Weyl invariance to form the numerator. | literature-derived | ai-altered | Kleshchev §10.3, pp.136--138; Perrin §11.3, pp.97--99 |
| `lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator` | Lemma: Casimir eigenvalue and dominance force numerator support to the orbit $W(\lambda+\rho)$; the highest coefficient is one. | Excludes spurious lower skew summands. | literature-derived | ai-altered | Kleshchev §10.3, pp.136--139; Perrin §11.3, pp.97--100 |
| `thm-weyl-kac-character-formula` | Theorem: $\operatorname{ch}L_A(\lambda)=\frac{\sum_w(-1)^{\ell(w)}e^{w(\lambda+\rho)-\rho}}{\prod_{\alpha>0}(1-e^{-\alpha})^{\mathrm{mult}\alpha}}$ for dominant integral $\lambda$. | Requested character theorem with all hypotheses. | literature-derived | ai-altered | Kleshchev §10.3, pp.136--139; Perrin §11.3, pp.97--100 |
| `def-generalized-kostant-partition-function` | Definition: $P_A(\beta)$ is the coefficient in $\prod_{\alpha>0}(1-e^{-\alpha})^{-\mathrm{mult}\alpha}$. | Counts coloured root partitions by multiplicity. | literature-derived | not-applicable | Kleshchev §§9.3, 10.3, pp.123--126, 136--139 |
| `cor-kac-moody-kostant-multiplicity-formula` | Corollary: weight multiplicities are the alternating $W$-sum of $P_A(w(\lambda+\rho)-(\mu+\rho))$. | Extracts a coefficientwise finite algorithm. | literature-derived | ai-altered | Kleshchev §10.3, pp.136--139; Perrin §11.3, pp.97--100 |
| `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula` | Corollary: in finite type all root multiplicities are one and $W$ is finite, recovering RL-7. | Closes the extension boundary. | literature-derived | ai-altered | Kleshchev §§4, 10, pp.50--67, 127--143; RL-7 |
| `prop-affine-denominator-separates-real-and-imaginary-root-factors` | Proposition: in untwisted affine type the product splits into factors for $\alpha+n\delta$ and rank-many factors for $n\delta$. | Prepares explicit affine specialisations without analytic convergence. | literature-derived | ai-altered | Kleshchev §§6, 10, pp.77--90, 132--139; Perrin §§12, 11 |
| `rem-weyl-kac-products-are-formal-not-analytic-identities-here` | Remark: all equality is coefficientwise in the completion; specialisation to $q$-series needs separate convergence hypotheses. | Prevents an algebraic/analytic seam leak into RG. | literature-derived | not-applicable | Kleshchev §9.3, pp.123--126; Perrin §10.3, pp.91--92 |

**B companion — finite checks and hypothesis tests.**

| id | kind and mathematical content | for | statement provenance | proof provenance | source locator |
|---|---|---|---|---|---|
| `ex-finite-a1-specialization-of-weyl-kac` | Example: recover the ordinary $\mathfrak{sl}_2$ character quotient. | Checks the finite-type boundary. | literature-derived | ai-altered | Kleshchev §10.3, pp.136--139 |
| `ex-real-and-imaginary-factors-in-the-affine-sl2-denominator` | Example: write the first factors for $\alpha+n\delta$, $-\alpha+(n+1)\delta$, and $n\delta$. | Makes root multiplicities visible. | literature-derived | ai-altered | Kleshchev §§6, 10, pp.77--90, 132--139 |
| `ex-first-weight-layers-of-the-basic-affine-sl2-character` | Example: compute the first formal layers from the Weyl--Kac quotient. | Finite coefficient check at level one. | literature-derived | ai-altered | Kleshchev §§10--11, pp.127--154 |
| `cex-using-multiplicity-one-for-imaginary-roots-gives-the-wrong-affine-denominator` | Counterexample in affine rank greater than one. | Tests the exponent $\mathrm{mult}\alpha$. | literature-derived | ai-altered | Kleshchev §§6, 10, pp.77--90, 132--139 |
| `cex-weyl-kac-is-not-asserted-for-nonsymmetrizable-gcms` | Counter-scope example: the invariant-form/Casimir proof has no supplied input. | Enforces symmetrisability rather than inventing an extension. | literature-derived | not-supplied | Kleshchev §§2, 10, pp.26--36, 127--143 |
| `cex-formal-character-equality-does-not-imply-q-series-convergence` | Counterexample/interface warning: coefficientwise products may have divergent numerical specialisations. | Keeps analytic statements out of RL. | literature-derived | not-supplied | Kleshchev §9.3, pp.123--126 |

---

## Source registry and per-pair source matrix

The following are the full texts actually read, not publisher snippets or
passing citations. Page numbers are the source's printed pagination unless a
PDF offset is stated. “Full” in the matrix means a sustained construction or
proof treatment of the pair's load-bearing material; a short source is full
when it proves the whole theorem it addresses (for example Lurie and
Stembridge), not merely because it mentions it.

| key | full treatment obtained; exact range read | URL |
|---|---|---|
| E755 | Pavel Etingof, *Lie Groups and Lie Algebras II* (2024): §25 pp.133--137; §26 pp.138--144; §§27--30 pp.145--164; §45 pp.245--249; §48 pp.260--264; §51 pp.275--280. | [MIT OCW full notes](https://live.ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf) |
| E757 | Pavel Etingof, *Representations of Lie Groups* (2023): §8 pp.41--47; §§13--16 pp.71--87; §18 pp.92--95; §§20--25 pp.100--128; §27.1 pp.133--134. | [MIT OCW full notes](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf) |
| Sak | Yiannis Sakellaridis, *Verma Modules and the Category O*: §§1--3 pp.1--5; §4 pp.5--7; §5 pp.7--9; §6 pp.9--11; §7 pp.11--17; §8 p.17. | [JHU notes](https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf) |
| Lin | Lin Chen, *Category O* lectures: L2 pp.1--6; L4--L7 pp.1--7 each; L8 pp.1--10; L9 pp.1--7. | [course page and lecture PDFs](https://windshower.github.io/linchen/teaching/s2024.html) |
| Liu | Henry Liu seminar notes, *Shapovalov Form*: §§1--5 pp.1--5. Section 6 p.6 was read and rejected because it records the historical false Verma claim. | [IPMU notes](https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf) |
| Zhou | Fan Zhou, *The BGG Resolution and the Weyl Character Formula*: §§1--5 pp.2--37, including Three Lemmas pp.12--27 and weak BGG pp.28--37. | [Harvard PDF](https://scholar.harvard.edu/files/fanzhou/files/expository_paper_-_bgg_1.pdf) |
| BGG | J. Bernstein, I. Gelfand, S. Gelfand, *Differential Operators on the Principal Affine Space and Study of $\mathfrak g$-Modules*: complete pp.21--64. | [author-hosted full PDF](https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/BGG-differ-operators.pdf) |
| HumphO | James E. Humphreys, *Representations of Semisimple Lie Algebras in the BGG Category O*: ch.6 §§6.1--6.8 pp.108--134. | [AMS publisher record for the full text read](https://bookstore.ams.org/gsm-94/) |
| HumphI | James E. Humphreys, *Introduction to Lie Algebras and Representation Theory*: §§22--24 pp.119--143 (Freudenthal, formal characters, Weyl, Kostant, Steinberg). | [full text read](https://djvu.online/file/Xw7ovfkTWqu21) |
| Eld | Alberto Elduque, *Lie Algebras* notes: ch.3 §5 pp.74--89 (Casimir comparison and Freudenthal recursion). | [MSU-hosted notes](https://users.math.msu.edu/users/halljo/classes/MTH914_F15/LA_Elduque_2015-08-20.pdf) |
| Weber | Brian Weber, *Weyl Dimension Formula II*: pp.1--4 (Kostant extraction and regularised dimension limit). | [Penn notes](https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf) |
| Sey | Tim Seynnaeve, *Representation Theory*: §§9--12.1 pp.51--60 (polynomial/rational $GL(V)$, Schur modules, Schur--Weyl). | [Bern notes](https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf) |
| Stem | John Stembridge, *A Concise Proof of the Littlewood--Richardson Rule*: complete pp.1--4. | [EJC PDF](https://www.kurims.kyoto-u.ac.jp/EMIS/journals/EJC/Volume_9/PDF/v9i1n5.pdf) |
| Rui | Xiong Rui, *Borel--Weil--Bott* lecture 1: pp.2--7. | [lecture notes](https://cubicbear.github.io/doc/BorelWeil.pdf) |
| Ng | Joshua Ng, *The Borel--Weil--Bott Theorem*: §§3--6 pp.6--14. | [Chicago REU PDF](https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf) |
| Lurie | Jacob Lurie, *A Proof of the Borel--Weil--Bott Theorem*: complete pp.1--3. | [MIT PDF](https://math.mit.edu/~lurie/papers/bwb.pdf) |
| BP | George Boxer and Vincent Pilloni, Montreal notes: §§1.1.2--1.1.3 pp.2--6 (BWB and Cousin/fibration proof). | [Paris-Saclay PDF](https://www.imo.universite-paris-saclay.fr/~vincent.pilloni/montrealnotes.pdf) |
| Duflo | Michel Duflo, *Sur la classification des idéaux primitifs dans l'algèbre enveloppante d'une algèbre de Lie semi-simple*: complete pp.107--120. | [Annals article](https://annals.math.princeton.edu/1977/105-1/p05) |
| Stanciu | Iordan Stanciu, *A Geometric Proof of Duflo's Theorem*: introduction pp.1--3; §§2--6 pp.3--25; §7 pp.26--29. | [arXiv PDF](https://arxiv.org/pdf/2103.16890) |
| OWTU | *Lie Algebra Cohomology and Representation Theory* thesis: ch.3 §§3.2--3.5 printed pp.64--84, PDF pp.70--90. | [Library and Archives Canada PDF](https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf) |
| Woit | Peter Woit, *Lie Algebra Cohomology and the Borel--Weil--Bott Theorem*: complete pp.1--7. | [Columbia notes](https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf) |
| Klesh | Alexander Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*: §§1.2--1.5 pp.10--25; §2 pp.26--36; §3 pp.37--49; §§4--5 pp.50--76; §§6--8 pp.77--115; §§9--11 pp.116--154. | [Oregon notes](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf) |
| Perrin | Nicolas Perrin, *Kac--Moody Groups and Algebras*: §§4--5 pp.29--47; §§7--9 pp.57--84; §§10--11 pp.85--100; §12 pp.101--110; §14 pp.121--126. | [CNRS/LMV notes](https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf) |
| JKK | K. Jeong, S.-J. Kang, M. Kashiwara, *Crystal Bases for Quantum Generalized Kac--Moody Algebras*: complete journal pp.395--438 (quantum $\mathcal O_{int}$, crystal tensor/existence theorems, global bases). | [Cambridge Core PDF](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B38D5430A05ED852F551DBA929DB52F9/S0024611504015023a.pdf/crystal-bases-for-quantum-generalized-kacmoody-algebras.pdf) |

### Per-pair matrix

| pair | independent full treatment 1 | independent full treatment 2 | further proof check |
|---|---|---|---|
| RL-1 | E757 §§13--14, pp.71--78 | Sak §§4--5, pp.5--9 | Klesh §2, pp.26--36 for invariant-form/Casimir conventions |
| RL-2 | E755 §25, pp.133--137 | Liu §§1--5, pp.1--5 | E757 §8, pp.41--47 |
| RL-3 | E757 §15, pp.79--83 | Sak §§1--3, pp.1--5 | Lin L2 and L4, pp.1--6 and pp.1--7 |
| RL-4 | E757 §§15--16, pp.79--87 | Lin L4 pp.1--7, L6 pp.1--7, L8 pp.1--10 | Sak §§1,6, pp.1--2, 9--11 |
| RL-5 | E757 §§16,20, pp.84--87, 100--105 | Lin L8--L9, pp.1--10, 1--7 | HumphO, category-$\mathcal O$ projective chapters |
| RL-6 | Zhou §§2--5, pp.3--37 | BGG complete pp.21--64 | HumphO ch.6 §§6.1--6.8, pp.108--134; E757 §20.3, pp.104--105 |
| RL-7 | E755 §26, pp.138--144 | HumphI §§22--24, pp.119--143 | Eld ch.3 §5, pp.74--89; Weber pp.1--4 |
| RL-8 | E755 §§27--30, pp.145--164 | HumphI §24.4 plus Stem pp.1--4 and Sey §§9--12.1, pp.51--60 (general and type-$A$ halves) | -- |
| RL-9 | Rui L1, pp.2--7 | Ng §§3--6, pp.6--14 | Lurie pp.1--3; BP §§1.1.2--1.1.3, pp.2--6 |
| RL-10 | Duflo complete pp.107--120 | Stanciu §§2--7, pp.3--29 | E757 §§18,22, pp.92--95, 110--113 |
| RL-11 | OWTU ch.3 §§3.2--3.5, pp.64--84 | Woit complete pp.1--7 | E755 §§45,48, pp.245--249, 260--264 |
| RL-12 | Klesh §§1--5, pp.10--76 | Perrin §§4--9, pp.29--84 | -- |
| RL-13 | Klesh §§6--8, pp.77--115 | Perrin §§12,14, pp.101--110, 121--126 | -- |
| RL-14 | Klesh §§9--11, pp.116--154 | Perrin §§10--11, pp.85--100 | -- |
| RL-15 | Klesh §§9.3,10.2--10.3, pp.123--139 | Perrin §§10--11, pp.85--100 | -- |

Every pair has two independent full treatments. The dashes occur only in the
optional “further proof check” column, never in either required treatment
column. Etingof's two courses share an author and are therefore never counted
as the two independent treatments in a row. RL-8's second treatment is stated
honestly as the conjunction of Humphreys' general Steinberg formula,
Stembridge's complete self-contained LR proof, and Seynnaeve's complete
$GL_r$/Schur-module interface; no one of those three sources alone covers both
halves of that deliberately composite pair.

---

## Canonical-coverage harvest: included heading → item crosswalk

The denominator used below is the number of rows in this table whose explicit
disposition is `included`: **75 source headings or named-result clusters**.
Closely coupled named subresults under one printed section are kept in one row;
that is a countable convention, unlike counting every displayed equation or
unnamed exercise. Parallel-source headings that merely verify an existing row
are recorded as `inline` in the deliberately-not-decomposed table and do not
inflate this denominator. Every `included` row names the exact item ids it
produced.

### RL-1 through RL-5

| harvest id | source's heading / named-result cluster | disposition | proposed item ids produced |
|---|---|---|---|
| I01 | E757 §13.1 “The Casimir element” | included | `def-quadratic-casimir-element`, `lem-the-casimir-element-is-independent-of-dual-bases`, `prop-the-quadratic-casimir-element-is-central`, `prop-casimir-eigenvalue-on-a-highest-weight-module`, `ex-sl2-casimir-and-its-highest-weight-eigenvalue` |
| I02 | E757 §14.1 “Harish-Chandra homomorphism” (projection stage) | included | `def-harish-chandra-projection`, `lem-central-elements-have-weight-zero`, `prop-harish-chandra-projection-is-multiplicative-on-the-center`, `lem-harish-chandra-projection-computes-highest-weight-scalars` |
| I03 | E757 §14.2 “Harish-Chandra isomorphism” | included | `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions`, `prop-harish-chandra-map-is-injective`, `lem-associated-graded-symbol-of-a-central-element-is-invariant`, `thm-harish-chandra-isomorphism-for-the-center` |
| I04 | Sak §5 “The center and infinitesimal characters” | included | `def-central-character-of-a-lie-algebra-module`, `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, `cor-central-characters-are-dot-weyl-orbits`, `cex-unshifted-weyl-orbits-do-not-classify-central-characters`, `ex-the-zero-weight-singular-central-character` |
| I05 | E757 §13.2 invariant-polynomial restriction and harmonic freeness theorems | included | `lem-regular-semisimple-elements-form-a-dense-open-subset`, `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction`, `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants`, `thm-symmetric-invariants-restrict-to-weyl-invariants`, `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`, `thm-enveloping-algebra-is-free-over-its-center`, `ex-sl3-harish-chandra-center-generators` |
| I06 | E755 §25.1 “Verma modules” | included | `def-one-dimensional-borel-module-of-weight-lambda`, `def-verma-module`, `thm-universal-property-of-verma-modules`, `thm-pbw-model-of-a-verma-module`, `prop-weights-of-a-verma-module-lie-below-lambda`, `prop-formal-character-of-a-verma-module`, `lem-a-proper-verma-submodule-misses-the-highest-weight-line`, `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper`, `thm-verma-module-has-a-unique-simple-quotient` |
| I07 | E755 §25.2 $\mathfrak{sl}_2$ singular-vector calculation | included | `lem-every-nonzero-verma-submodule-contains-a-singular-vector`, `ex-sl2-verma-action-in-the-pbw-basis`, `ex-sl2-reducible-and-generic-verma-modules`, `ex-finite-dimensional-sl2-quotient-of-a-verma-module` |
| I08 | Liu §3 “Contravariant/Shapovalov form” | included | `def-chevalley-contravariant-form`, `thm-existence-and-uniqueness-of-the-shapovalov-form`, `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal`, `ex-sl2-shapovalov-norm-product` |
| I09 | Liu §4 “Radical of the Shapovalov form” | included | `prop-the-shapovalov-radical-is-the-maximal-submodule` |
| I10 | E757 §8.3 “Shapovalov determinant formula” | included | `def-shapovalov-determinant-on-a-weight-space`, `thm-shapovalov-determinant-formula`, `cor-verma-irreducibility-criterion-from-shapovalov-determinants` |
| I11 | E757 §15.1 homomorphisms between Verma modules | included | `prop-verma-homomorphisms-are-singular-vectors`, `lem-a-nonzero-verma-homomorphism-is-injective`, `thm-verma-homomorphism-spaces-have-dimension-at-most-one`, `lem-simple-root-singular-vector-in-a-verma-module`, `prop-simple-reflection-embedding-of-verma-modules` |
| I12 | E757 §15.2 “Verma's theorem” | included | `thm-verma-embedding-for-an-arbitrary-positive-root`, `def-strong-linkage-order-on-weights`, `lem-verma-embedding-implies-strong-linkage`, `thm-bgg-verma-homomorphism-criterion` |
| I13 | E757 §15.3 linkage and composition factors | included | `lem-a-verma-composition-factor-has-the-same-central-character`, `thm-strong-linkage-principle-for-verma-modules`, `cor-generic-verma-modules-are-simple`, `cor-antidominant-verma-modules-are-simple` |
| I14 | Sak §3 “Linkage” examples and directed order | included | `ex-sl2-verma-embedding-chain`, `ex-a2-regular-dominant-verma-embedding-poset`, `ex-a2-singular-dot-orbit-collapses`, `cex-equal-central-character-does-not-give-every-verma-embedding-direction` |
| I15 | Lin L6 finite-composition-series result | included | `prop-verma-composition-multiplicities-are-finite` |
| I16 | E757 §15.3 definition and equivalent description of category $\mathcal O$ | included | `def-bgg-category-o`, `prop-equivalent-support-description-of-category-o`, `prop-verma-and-finite-dimensional-modules-lie-in-category-o`, `thm-category-o-is-abelian-and-extension-closed` |
| I17 | Lin L6 “Finite length” | included | `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `thm-simple-objects-of-category-o-are-highest-weight-modules`, `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`, `thm-every-category-o-object-has-finite-length`, `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` |
| I18 | E757 §20.1 “Duality” | included | `def-restricted-dual-of-a-weight-module`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-standard-and-costandard-objects-in-category-o`, `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o` |
| I19 | Lin L4 central-character decomposition | included | `lem-generalized-central-character-submodules-are-direct-summands`, `thm-category-o-decomposes-by-generalized-central-character`, `ex-a-singular-a2-central-character-summand` |
| I20 | Sak §6 “Blocks” / integral linkage refinement | included | `def-integral-weyl-group-of-a-weight`, `thm-central-character-summands-split-into-linkage-blocks`, `ex-the-regular-integral-sl2-block-of-category-o`, `ex-a-generic-sl2-block-is-semisimple` |
| I21 | E757 §16 “Projective objects in category $\mathcal O$” | included | `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`, `def-truncated-category-o-at-a-finite-weight-ideal`, `lem-a-sufficiently-antidominant-verma-is-projective-in-a-truncation`, `lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective`, `lem-block-projection-preserves-projectives`, `thm-category-o-has-enough-projectives`, `prop-projective-covers-in-o-are-indecomposable-and-unique` |
| I22 | E757 §20.2 “Standard filtrations” | included | `def-verma-flag-and-its-multiplicities`, `lem-verma-flag-multiplicities-are-independent-of-the-flag`, `thm-projectives-in-category-o-have-verma-flags`, `lem-hom-from-projectives-counts-simple-composition-factors` |
| I23 | Lin L9 §2 “BGG reciprocity” | included | `lem-standard-costandard-hom-and-ext-vanishing`, `thm-bgg-reciprocity`, `cor-injectives-have-costandard-filtrations`, `ex-projective-covers-in-the-regular-sl2-block`, `ex-bgg-reciprocity-matrix-for-sl2` |
| I24 | E757 §23 “Translation functors” | included | `def-translation-functor-between-o-blocks`, `prop-translation-functors-are-exact-and-biadjoint-across-a-wall` |
| I25 | E757 §24 “Translation to/from a wall” | included | `thm-translation-to-and-from-a-wall-on-standard-modules`, `ex-translation-through-the-sl2-wall`, `cex-a-verma-module-need-not-be-projective-in-the-whole-block`, `cex-a-projective-verma-flag-need-not-split` |

---

### RL-6 through RL-10

| harvest id | source's heading / named-result cluster | disposition | proposed item ids produced |
|---|---|---|---|
| I26 | Zhou §3 construction of the BGG complex | included | `def-bgg-bruhat-verma-sum-in-degree-k`, `lem-bruhat-covers-give-unique-verma-embeddings`, `def-bgg-differential-from-signed-verma-maps` |
| I27 | Zhou §4.1 Bruhat diamonds | included | `lem-bruhat-rank-two-intervals-are-diamonds` |
| I28 | Zhou §4.2 compatible edge signs | included | `lem-compatible-signs-exist-on-the-bruhat-graph`, `prop-the-bgg-differential-squares-to-zero`, `ex-sign-cancellation-in-an-a2-bruhat-diamond` |
| I29 | Zhou §§4.3--4.4 augmentation and kernel generators | included | `lem-the-bgg-augmentation-has-image-the-simple-module`, `lem-kernel-generators-for-the-weak-bgg-complex` |
| I30 | Zhou §5 “Weak BGG resolution” and passage to full BGG | included | `thm-weak-bgg-resolution`, `thm-bgg-resolution-of-a-finite-dimensional-simple-module`, `cor-bgg-euler-character-identity`, `cor-bgg-resolution-has-length-the-number-of-positive-roots`, `ex-the-sl2-bgg-resolution`, `ex-the-a2-bgg-resolution-with-six-verma-summands`, `cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight` |
| I31 | E755 §26.1 “Formal characters” | included | `def-completed-formal-character-ring-for-downward-cones`, `def-formal-character-of-a-finite-dimensional-weight-module`, `prop-formal-characters-are-additive-and-multiplicative`, `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` |
| I32 | E755 §26.2 “Weyl denominator and character formulas” | included | `def-weyl-alternation-operator`, `lem-weyl-alternants-are-skew-invariant`, `thm-weyl-denominator-identity`, `lem-bgg-euler-character-gives-the-weyl-numerator`, `thm-weyl-character-formula`, `ex-weyl-character-and-dimension-formulas-for-sl2`, `ex-a2-weyl-denominator-expansion` |
| I33 | E755 §26.3 “Kostant multiplicity formula” | included | `def-kostant-partition-function`, `thm-kostant-weight-multiplicity-formula`, `ex-kostant-multiplicity-in-the-sl3-adjoint-module` |
| I34 | HumphI §22 “Multiplicity formula” / Freudenthal | included | `lem-casimir-comparison-on-a-weight-vector`, `lem-positive-root-strings-sum-the-freudenthal-correction`, `thm-freudenthal-weight-multiplicity-recursion`, `cor-freudenthal-recursion-terminates-from-the-highest-weight`, `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` |
| I35 | E755 §26.4 “Weyl dimension formula” | included | `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one`, `thm-weyl-dimension-formula`, `ex-weyl-dimension-formula-for-a-fundamental-sl3-module` |
| I36 | E755 §27 “Tensor products and the Racah--Speiser/Steinberg formula” | included | `def-tensor-product-multiplicity-for-highest-weight-modules`, `prop-tensor-product-multiplicities-are-character-structure-constants`, `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`, `thm-steinberg-tensor-product-multiplicity-formula`, `cor-racah-speiser-tensor-product-algorithm`, `ex-clebsch-gordan-decomposition-for-sl2`, `ex-three-tensor-three-for-sl3` |
| I37 | E755 §28 “Minuscule representations” tensor rule | included | `cor-minuscule-tensor-product-rule` |
| I38 | Sey §§9--12.1 polynomial/rational $GL(V)$ and Schur modules | included | `def-polynomial-glr-highest-weights-as-partitions`, `def-schur-module-and-schur-polynomial-character`, `prop-determinant-twists-translate-glr-highest-weights`, `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` |
| I39 | Stem “The Details” and sign-reversing involution | included | `prop-semistandard-tableaux-expand-schur-characters`, `def-littlewood-richardson-tableau-and-coefficient`, `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`, `thm-littlewood-richardson-tensor-product-rule` |
| I40 | E755 §30 “Littlewood--Richardson rule” / Pieri specialisations | included | `cor-horizontal-pieri-rule`, `cor-vertical-pieri-rule`, `prop-littlewood-richardson-coefficients-stabilize-with-rank`, `ex-littlewood-richardson-product-s21-times-s1`, `ex-a-littlewood-richardson-coefficient-greater-than-one` |
| I41 | Rui L1 flag variety and associated line bundles | included | `def-flag-variety-and-borel-character-line-bundle-interface`, `lem-sections-of-an-associated-line-bundle-as-equivariant-functions`, `prop-left-translation-makes-line-bundle-cohomology-a-g-module`, `cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer` |
| I42 | Ng §§4--5 “Borel--Weil theorem” | included | `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell`, `thm-borel-weil` |
| I43 | Lurie rank-one $G/B\to G/P_i$ proof step | included | `lem-minimal-parabolic-projection-has-p1-fibers`, `lem-rank-one-cohomology-shifts-across-a-simple-wall` |
| I44 | Lurie “Borel--Weil--Bott theorem” regular/singular cases | included | `lem-singular-dot-weights-have-zero-line-bundle-cohomology`, `lem-a-regular-weight-has-a-unique-dominant-dot-translate`, `thm-borel-weil-bott`, `ex-borel-weil-bott-on-p1-for-sl2`, `ex-the-sl2-singular-weight-has-no-cohomology`, `ex-an-sl3-weight-with-cohomology-in-degree-one` |
| I45 | BP §1.1.2 canonical bundle/Serre duality check | included | `prop-the-canonical-line-bundle-of-g-over-b-has-weight-minus-two-rho`, `prop-borel-weil-bott-is-compatible-with-serre-duality`, `cor-borel-weil-bott-euler-character-is-the-weyl-character`, `ex-the-top-degree-bwb-case-and-serre-duality` |
| I46 | E757 §18.1 “Primitive ideals” | included | `def-annihilator-ideal-of-a-lie-algebra-module`, `def-primitive-ideal-of-an-enveloping-algebra`, `prop-annihilators-of-simple-highest-weight-modules-are-primitive`, `prop-primitive-ideals-are-prime-in-the-noncommutative-sense`, `prop-a-primitive-ideal-determines-a-central-character`, `def-central-reduction-of-the-enveloping-algebra`, `prop-verma-annihilator-contains-the-central-character-ideal` |
| I47 | Duflo annihilator theorem for Verma modules | included | `thm-duflo-annihilator-theorem-for-verma-modules`, `ex-primitive-ideals-of-usl2-at-a-generic-central-character`, `ex-annihilator-of-the-trivial-sl2-module` |
| I48 | Stanciu §3 associated varieties | included | `def-associated-graded-variety-of-a-two-sided-ideal`, `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant`, `ex-associated-variety-of-a-finite-dimensional-simple-annihilator` |
| I49 | Stanciu §§4--6 geometric reduction architecture | included | `lem-duflo-reduction-to-a-regular-integral-central-character`, `lem-localization-identifies-simple-modules-with-highest-weight-annihilators` |
| I50 | Stanciu §7 / Duflo primitive-ideal theorem | included | `thm-duflo-every-primitive-ideal-is-highest-weight`, `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character`, `rem-highest-weights-can-have-the-same-primitive-ideal`, `cex-the-central-character-does-not-determine-the-primitive-ideal` |

---

### RL-11 through RL-15

| harvest id | source's heading / named-result cluster | disposition | proposed item ids produced |
|---|---|---|---|
| I51 | E755 §45 “Lie algebra cohomology” / derived invariants | included | `prop-lie-algebra-cohomology-is-derived-invariants`, `prop-h-zero-is-the-invariant-subspace` |
| I52 | OWTU §3.2 Chevalley--Eilenberg cohomology as a representation tool | included | `prop-a-normalizer-acts-on-lie-algebra-cohomology` |
| I53 | OWTU §3.3 “Casselman--Osborne theorem” | included | `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra`, `thm-casselman-osborne-nilradical-cohomology-constraint` |
| I54 | OWTU §3.4 “Kostant's theorem” / harmonic proof | included | `def-inversion-set-of-a-weyl-group-element`, `lem-extremal-weight-cochain-for-a-weyl-element-is-closed`, `lem-kostant-laplacian-is-scalar-on-weight-components`, `lem-each-kostant-extremal-harmonic-space-is-one-dimensional`, `thm-kostant-nilradical-cohomology-theorem`, `cor-kostant-cohomology-in-degrees-zero-and-top`, `ex-kostant-n-cohomology-for-sl2`, `ex-kostant-n-cohomology-for-the-trivial-sl3-module` |
| I55 | OWTU §3.5 applications of Kostant cohomology / Woit BWB bridge | included | `cor-kostant-euler-character-recovers-the-weyl-numerator`, `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class`, `cor-kostants-theorem-feeds-borel-weil-bott`, `ex-degree-one-kostant-classes-correspond-to-simple-reflections`, `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` |
| I56 | Klesh §1.2 “Generalized Cartan matrices” | included | `def-generalized-cartan-matrix` |
| I57 | Klesh §1.3 “Realizations and the contragredient algebra” | included | `def-realization-of-a-generalized-cartan-matrix`, `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism`, `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient`, `prop-contragredient-algebra-has-a-triangular-decomposition` |
| I58 | Klesh §§1.4--1.5 Kac--Moody quotient and Serre relations | included | `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h`, `def-kac-moody-algebra-associated-to-a-gcm`, `thm-serre-presentation-of-a-kac-moody-algebra`, `ex-rank-one-gcm-recovers-sl2`, `ex-the-a2-serre-relations` |
| I59 | Klesh §§3.2,5 “Weyl group and roots” | included | `prop-kac-moody-root-spaces-are-finite-dimensional`, `def-simple-reflections-and-the-kac-moody-weyl-group`, `prop-the-weyl-group-preserves-roots-and-root-multiplicities`, `def-real-and-imaginary-kac-moody-roots`, `prop-real-root-spaces-are-one-dimensional-sl2-roots`, `cex-imaginary-root-spaces-need-not-have-multiplicity-one` |
| I60 | Klesh §§2,4 symmetrisability and finite/affine/indefinite type | included | `def-symmetrizable-generalized-cartan-matrix`, `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`, `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms`, `prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras`, `ex-the-affine-a1-gcm-has-singular-rank-one-realization-data`, `ex-a-symmetrizable-indefinite-rank-two-gcm` |
| I61 | Klesh §7.1 “Central extensions of loop algebras” | included | `def-loop-algebra-of-a-simple-lie-algebra`, `def-residue-two-cocycle-on-a-loop-algebra`, `lem-the-loop-residue-form-is-alternating`, `lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity`, `def-untwisted-affine-central-extension`, `prop-the-loop-central-extension-is-universal-for-simple-g`, `cex-the-residue-cocycle-depends-on-invariant-form-normalization` |
| I62 | Klesh §7.2 derivation and loop representations | included | `def-degree-derivation-and-full-untwisted-affine-algebra`, `prop-the-derived-affine-algebra-omits-only-the-degree-derivation`, `def-evaluation-module-at-nonzero-loop-parameter`, `prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d`, `ex-an-evaluation-module-for-affine-sl2` |
| I63 | Klesh §6 “Affine root systems” | included | `def-null-root-central-coroot-and-affine-level`, `prop-roots-of-an-untwisted-affine-lie-algebra`, `lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root`, `ex-affine-sl2-mode-brackets`, `ex-the-heisenberg-subalgebra-of-an-affine-lie-algebra`, `ex-the-affine-a1-simple-roots-and-gcm` |
| I64 | Perrin §12 untwisted affine construction and affine Weyl group | included | `thm-loop-and-affine-gcm-presentations-are-isomorphic`, `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product`, `cex-omitting-the-central-term-breaks-the-affine-gcm-bracket` |
| I65 | Klesh §8 / Perrin §14 “Twisted affine algebras” | included | `def-twisted-loop-algebra-from-a-diagram-automorphism`, `thm-twisted-loop-central-extensions-give-the-twisted-affine-types` |
| I66 | Klesh §9 “Highest weight modules and category $\mathcal O$” | included | `def-kac-moody-category-o`, `def-kac-moody-verma-module`, `thm-universal-property-and-pbw-character-of-kac-moody-verma-modules`, `thm-kac-moody-verma-module-has-a-unique-simple-quotient` |
| I67 | Klesh §10.1 “Integrable highest weight modules” | included | `def-integrable-kac-moody-module`, `lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras`, `lem-dominance-is-necessary-for-an-integrable-highest-weight-module`, `lem-simple-root-power-relations-generate-the-integrable-quotient`, `thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules`, `ex-integrable-highest-weight-modules-for-rank-one-gcm`, `cex-a-kac-moody-verma-module-is-not-integrable-in-general`, `cex-local-nilpotence-of-only-the-ei-does-not-imply-integrability` |
| I68 | Klesh §3 integrable modules and Weyl action | included | `prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant`, `prop-every-integrable-weight-is-weyl-conjugate-toward-the-dominant-chamber`, `ex-simple-root-string-in-an-integrable-kac-moody-module` |
| I69 | Klesh §10.4 “Complete reducibility” | included | `lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights`, `thm-complete-reducibility-of-integrable-kac-moody-o-modules`, `cor-tensor-products-of-integrable-highest-weight-modules-decompose`, `cex-an-integrable-module-outside-kac-moody-o-need-not-have-the-stated-decomposition` |
| I70 | Klesh §11 “Integrable modules for affine algebras” | included | `prop-integrable-affine-highest-weights-have-nonnegative-integral-level`, `prop-level-zero-integrable-affine-highest-weight-simples-are-one-dimensional`, `ex-the-basic-level-one-weight-of-affine-sl2` |
| I71 | Klesh §9.3 “Formal characters” | included | `def-kac-moody-formal-character-completion`, `rem-weyl-kac-products-are-formal-not-analytic-identities-here`, `cex-formal-character-equality-does-not-imply-q-series-convergence` |
| I72 | Klesh §10.2 “Denominator identity” | included | `def-kac-moody-weyl-vector`, `def-kac-moody-denominator-product-with-root-multiplicities`, `lem-the-kac-moody-denominator-is-weyl-skew`, `lem-the-denominator-quotient-has-only-imaginary-cone-support`, `lem-casimir-norm-excludes-nonzero-denominator-corrections`, `thm-kac-moody-denominator-identity`, `cex-weyl-kac-is-not-asserted-for-nonsymmetrizable-gcms` |
| I73 | Klesh §10.3 “Weyl--Kac character formula” | included | `lem-the-shifted-integrable-character-numerator-is-weyl-skew`, `lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator`, `thm-weyl-kac-character-formula`, `def-generalized-kostant-partition-function`, `cor-kac-moody-kostant-multiplicity-formula`, `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula`, `ex-finite-a1-specialization-of-weyl-kac` |
| I74 | Perrin §11 “Casimir operator and character formula” | included | `lem-casimir-norm-excludes-nonzero-denominator-corrections`, `lem-only-the-highest-dot-orbit-can-occur-in-the-integrable-numerator` |
| I75 | Klesh §§6,10 affine denominator specialisation | included | `prop-affine-denominator-separates-real-and-imaginary-root-factors`, `ex-real-and-imaginary-factors-in-the-affine-sl2-denominator`, `ex-first-weight-layers-of-the-basic-affine-sl2-character`, `cex-using-multiplicity-one-for-imaginary-roots-gives-the-wrong-affine-denominator` |

---

## Deliberately not decomposed

This is the no-padding record. It includes parallel headings read for proof
checking as well as genuinely denied topics. `inline` means the source supplies
part of the proof of the named item but does not warrant a duplicate item.
`already-published` names the owning planned DG/HA interface because the live
pages themselves are still empty. No row below contributes to the 75-heading
decomposition denominator.

| source heading read but not made a standalone item | disposition and heading-specific reason |
|---|---|
| E755 §45 definition and sign formula for the Chevalley--Eilenberg differential | already-published at planned DG-29; RL-11 uses its signs verbatim and only adds `prop-lie-algebra-cohomology-is-derived-invariants`. |
| E755 §48 Whitehead lemmas and semisimple-cohomology vanishing | already-published at planned DG-29; the commission expressly forbids re-minting Whitehead. |
| E755 §51 Bruhat decomposition and geometry of the flag variety | deferred to the future AV suppliers named in RL-9. Only the representation-theoretic line-bundle interface is included; rebuilding varieties and sheaf cohomology here would violate ownership. |
| E757 §8 Shapovalov-form construction outside the determinant named in I10 | inline in `thm-existence-and-uniqueness-of-the-shapovalov-form` and `prop-the-shapovalov-radical-is-the-maximal-submodule`; Liu is the item-level source, E757 is the independent proof check. |
| E757 §13 harmonic-polynomial decomposition details | inline in `thm-enveloping-algebra-is-free-over-its-center`; individual harmonic-basis choices are proof machinery, not canonical representation-theory statements. |
| E757 §20.3 BGG resolution statement | inline in `thm-bgg-resolution-of-a-finite-dimensional-simple-module`; Zhou/HumphO supply the decomposed proof, so a second theorem row would be transcription padding. |
| E757 §21 Kazhdan--Lusztig conjecture/theorem and character formula | out-of-scope: a proof-quality treatment needs Hecke algebras plus geometric/Soergel or perverse-sheaf machinery not supplied by the library. It is not used by any RL dependency. |
| E757 §§22,25 projective functors, Duflo involutions, and Kazhdan--Lusztig applications | inline only where they support `lem-duflo-reduction-to-a-regular-integral-central-character`; the cell/KL classification of fibres is out-of-scope for the same missing prerequisites as §21. |
| E757 §27.1 Borel--Weil | inline in `thm-borel-weil`; it is a two-page independent check, while Rui/Ng provide the full geometric treatment. |
| Sak §4 “Chevalley theorem” | inline in `thm-symmetric-invariants-restrict-to-weyl-invariants`; the general root/invariant setup belongs to DG-31. |
| Sak §7 Schur--Weyl duality and symmetric-group calculations | inline in `def-schur-module-and-schur-polynomial-character`; the symmetric-group representation theory itself belongs to RG, while RL-8 retains only the $GL_r$ tensor consequence it needs. |
| Sak §8 Kazhdan--Lusztig formula | out-of-scope for the E757 §21 prerequisite reason; its one-page synopsis is not promoted into a treatment. |
| Lin L5 Harish--Chandra proof | inline across `prop-harish-chandra-map-is-injective` and `thm-harish-chandra-isomorphism-for-the-center`; it corroborates rather than enlarges E757/Sak. |
| Lin L7 Verma--BGG theorem | inline across `thm-bgg-verma-homomorphism-criterion` and `thm-strong-linkage-principle-for-verma-modules`. |
| Lin L8 projective construction details already represented by I21 | inline in `thm-category-o-has-enough-projectives`; no second projective-cover item is minted. |
| Liu §6 claim that every Verma submodule is generated by maximal vectors | out-of-scope because false: the notes themselves flag Verma's historical error. It was rejected, not weakened or “corrected” into an AI claim. |
| Zhou §§1--2 root systems, Weyl groups, and finite-dimensional highest weights | already-published at planned DG-31/DG-32. Only Bruhat facts consumed by RL-6 are cited. |
| Zhou §5 relative standard resolution before block projection | inline in `thm-weak-bgg-resolution`; abstract complexes and induction exactness are supplied by HA/DG-27. |
| HumphO ch.6 parallel weak/full BGG construction | inline across I26--I30; it is the required independent treatment and does not generate duplicate theorem ids. |
| HumphI §§22--24 duplicate Freudenthal/Weyl/Kostant/Steinberg statements | inline in the corresponding I32--I36 items except I34, where HumphI is the primary heading. Parallel formulas are evidence, not extra results. |
| Elduque ch.3 §5 calculations beyond the isolated Casimir/string lemmas | inline in `thm-freudenthal-weight-multiplicity-recursion`; no algorithmic trace identity is split merely to raise the ratio. |
| Weber pp.1--4 second derivation of Kostant/dimension formulas | inline in `thm-kostant-weight-multiplicity-formula` and `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one`. |
| Sey §12.1 restriction from rational $GL(V)$ representations to $SL(V)$ | inline in `prop-determinant-twists-translate-glr-highest-weights`; the finite-dimensional classification itself remains DG-32's. |
| Stembridge bi-alternant formula | inline in `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` and `thm-littlewood-richardson-tensor-product-rule`; RL-7 already owns the general Weyl alternant. |
| Rui L1, Ng §§3--6, Lurie pp.1--3, and BP §§1.1.2--1.1.3 descriptions of quotient varieties, coherent cohomology, and Serre duality | deferred to AV as foundations, with only the exact representation statements and rank-one proof interfaces minted in RL-9. |
| Duflo pp.110--120 and Stanciu §§4--7 localisation/D-module machinery | deferred as proof content, not theorem statement: `thm-duflo-every-primitive-ideal-is-highest-weight` is retained with proof `not-supplied`, and the exact missing engine is named by `lem-localization-identifies-simple-modules-with-highest-weight-annihilators`. |
| E757 §18.2 Joseph's classification of primitive-ideal fibres/cells | out-of-scope: it consumes Kazhdan--Lusztig cells and associated-cycle theory absent from the library; Duflo surjectivity remains. |
| OWTU §3.2 spectral-sequence constructions | inline via HA-15/HA-16 in `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class`; RL does not rebuild abstract spectral sequences. |
| Woit's repetition of CE signs and Borel--Weil setup | already-published/deferred respectively at DG-29 and AV; its Kostant-to-BWB argument is retained only as `cor-kostants-theorem-feeds-borel-weil-bott`. |
| Klesh §1.1 elementary finite-dimensional Lie-algebra review | already-published across DG-27--DG-32 and outside the registry's counted read range. |
| Klesh §4 and Perrin §8 detailed finite Dynkin tables | already-published at DG-31. Their finite/affine/indefinite criterion alone becomes `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms`. |
| Klesh §5 / Perrin §9 finite-type root-system repetitions | already-published at DG-31; only real-versus-imaginary Kac--Moody phenomena survive in RL-12. |
| Klesh §8 and Perrin §14 case-by-case twisted affine diagrams | peripheral to the requested representation superstructure. RL-13 states the folding/central-extension theorem but does not mint one page item per diagram. |
| Klesh §11 detailed affine weight diagrams and theta-function hints | out-of-scope beyond the level boundary: modular/theta analysis belongs to analytic/vertex-algebra tracks; RL retains level and the first formal character layers only. |
| Perrin §§4--5 parallel GCM/Weyl construction | inline across `def-generalized-cartan-matrix` through `prop-the-weyl-group-preserves-roots-and-root-multiplicities`; it supplies the second treatment. |
| Perrin §§7--9 parallel invariant-form, type, and root treatments | inline across I59--I60; finite classification remains DG-31-owned. |
| Perrin §10 parallel Kac--Moody $\mathcal O$, Verma, and integrability treatment | inline across I66--I69. |
| Perrin §§11--12 parallel Casimir/character and affine-loop treatment | inline across I64 and I72--I75. |
| JKK $U_q(\mathfrak g)$, quantum $\mathcal O_{int}$, crystal-basis tensor/existence theorems, and global-basis construction, pp.395--438 | out-of-scope because every construction is for a quantised enveloping algebra and uses quantum-group integral forms/operators the library has not developed. This is why the optional crystal/canonical-basis clause was not exercised; no classical shadow was promoted into an unsupported dependency. |
| Grinberg's §§4.8--4.15 Kac--Moody draft encountered during discovery | not counted as a treatment and not harvested: the author marks the material unfinished/unusable. It supplied no claim. |
| Steven Sam's Math 207A notes encountered during discovery | not counted or harvested: the full text returned HTTP 502 and was never read. No passing search snippet was promoted into a treatment. |
| Unitary real-reductive representations, analytic Harish--Chandra modules, Langlands classification, Plancherel, and analytic globalisations | out-of-scope by seam §4: these belong to concurrent RG. No `RG-n` theorem is load-bearing here, so no fabricated relative number is cited. |
| Virasoro algebras, vertex/operator algebras, conformal blocks, modular tensor categories, and modular/positive-characteristic Lie representation theory | out-of-scope: each needs an unbuilt subject foundation and none is necessary for Weyl--Kac. |

---

## Amendments owed; no other file edited

1. **DG-32 ownership correction.** When the differential-geometry scaffold is
   next revised, remove/rehome these unbuilt proposals to RL: the seven Verma
   ids `def-one-dimensional-borel-module-of-weight-lambda`,
   `def-verma-module`, `thm-universal-property-of-verma-modules`,
   `thm-pbw-model-of-a-verma-module`,
   `prop-weights-of-a-verma-module-lie-below-lambda`,
   `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper`, and
   `thm-verma-module-has-a-unique-simple-quotient`; and the seven character ids
   `def-formal-character-of-a-finite-dimensional-weight-module`,
   `prop-formal-characters-are-additive-and-multiplicative`,
   `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
   `thm-weyl-denominator-identity`, `thm-weyl-character-formula`,
   `thm-weyl-dimension-formula`, and
   `thm-kostant-weight-multiplicity-formula`. Their ids are deliberately reused
   here because no live item owns them.
2. **DG-32 retained boundary.** DG-32 should retain the finite-dimensional
   highest-weight classification, its definition of $\rho$, dominant/integral
   weights, root strings, and the extremal-weight theorem. RL cites rather than
   duplicates its proposals
   `thm-simple-highest-weight-modules-are-classified-by-their-highest-weight`,
   `def-weyl-vector-rho`, and
   `prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`.
3. **DG-29 dependency.** Its CE differential/sign, Whitehead, Weyl, and
   invariant-form rows must be authored before RL-1/RL-11; no id amendment is
   requested. RL's Casimir element is algebraic centre material, not a duplicate
   of DG-29's Casimir-operator proof of complete reducibility.
4. **Future AV contract.** The algebraic-geometry track owes page ids for
   $G/B$, associated equivariant line bundles, coherent sheaf cohomology, and
   Serre duality. Once assigned, replace the descriptive AV interface in RL-9
   with those exact page ids; do not move Borel--Weil--Bott out of RL.
5. **Concurrent RG seam.** RG may consume RL-1's algebraic HC-centre and
   infinitesimal-character results. RL consumes no analytic RG theorem, so no
   guessed `RG-n` reference appears. If RG later requests an analytic bridge,
   record its actual relative label before authoring; the unitary/real-reductive
   theorem remains RG-owned.
6. **HA interfaces.** Preserve the exact HA-1/5/6/8/9/15/16 page ids named in
   the authority table. RL instantiates their machinery but owes HA no new
   algebra-level item.

## Forward references

| consumer | future supplier that closes it | why the forward reference is retained |
|---|---|---|
| RL-9 Borel--Weil/Borel--Weil--Bott | future AV pages for the quotient variety $G/B$, equivariant line bundles, coherent/sheaf cohomology, projective-space fibres, and Serre duality | Geometry is essential to the requested theorem and belongs to AV under seam §4; dropping BWB to avoid a forward edge is forbidden. |
| RL-10 geometric proof architecture for Duflo | future AV localisation/$D$-module pages if that track reaches them; otherwise the cited Duflo/Stanciu sources remain the explicit leaf interface | The theorem is a requested landmark, but its localisation proof is not used by later RL items and is therefore honestly retained as `not-supplied`. |

There is no forward reference to RG: analytic representation theory is outside
RL, and no RL proof needs it. All other cross-track requirements point backward
to the named DG/HA scaffold pages, though those pages still have empty live
inventories.

## Unresolved seams and build holds

- There is no scaffold blocker. There are two future build holds: the ten DG
  Lie pairs are still empty planned suppliers, and RL-9 awaits the named AV
  suppliers. These are recorded rather than used as permission prompts.
- Duflo's final theorem is retained at the depth honestly supported by this
  track: its algebraic reductions are scaffolded, while the localisation step
  and final proof are `not-supplied`. No later item depends on that theorem.
- The universal loop-extension and twisted-affine realisation proofs are also
  source-cited leaves with `not-supplied` proofs; all later untwisted character
  theory depends only on the explicitly proved bracket/root construction.
- The source convention for Borel--Weil line bundles must be reconciled with
  the future AV quotient convention at build time. The adopted
  $G\times_B\mathbb C_{-\lambda}$ convention is fixed above, so reconciliation
  is a sign translation, not an open mathematical choice.

## Verified measurements

These figures were re-derived from the finished file, not copied from the
dispatch (which supplied no numeric item estimate):

| measurement | verified value | method / denominator |
|---|---:|---|
| before → after proposed item ids | **0 → 321** | the owned file did not exist and all live splice pages had empty `items[]`; after is the distinct-id count over inventory rows. |
| duplicate proposed item ids | **0** | sorted duplicate scan of all 321 inventory ids. |
| collisions with live `items/` or `research/plan-spec.json` item ids | **0** | exact-id intersection; the deliberately rehomed DG-32 ids exist only in prose, not as live objects. |
| cross-scaffold prose id overlaps | **14, all intentional** | exactly the DG-32 Verma/character proposals enumerated in amendment 1; no other scaffold overlap. |
| `included` heading dispositions | **75** | rows I01--I75 under the explicit grouped-heading counting convention above. |
| decomposition ratio | **4.28×** | $321\div75=4.28$; B leaves count as proposed items, as in the commission's calibration. |
| pair / page count | **15 A/B pairs; 30 page ids** | RL-1 through RL-15, each with one examples companion. |
| largest A page | **RL-1, 21 items** | per-pair inventory scan; far below the mandatory split threshold of 60, so no split was required. |
| largest B page | **6 items** | RL-1, RL-2, RL-4, RL-7, RL-8, and RL-12--RL-15 tie. |
| independent full-treatment failures | **0 pairs** | both required treatment columns in the pair matrix are populated; dashes occur only in optional checks. |
| independent source hosts | **24** | distinct URL hostnames in the source registry; mirrors and discovery-only inaccessible pages are excluded. |
| invalid provenance values | **0** | statement/proof cell scan against exactly the SCHEMA §3 vocabulary. |
| AI-generated item ids | **13, all B-page leaves** | these are exactly the inventory ids absent from the source-heading crosswalk; zero occurs on an A page or as a dependency target. |
| A pages over 60 | **0** | maximum is 21; nothing was dropped or shifted to B to meet the ceiling. |

The 4.28× ratio is a consequence of decomposing proof architecture, not a
target filled with generated theorems. The 13 generated ids are finite B-page
checks, finite counterexamples, or convention stress tests; none is an A-page
statement or dependency target.

---
