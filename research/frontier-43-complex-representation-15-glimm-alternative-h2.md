# Alternative H2: a local pure-state category and ideal-coding route

Run `frontier-43-complex-representation-15`, 2026-10-07. One bounded alternative-source/proof pass. This file supplies an integration-ready **authoring proof plan**, not accepted items, gate evidence or an applied exception. No stable manifest, shared direction, published item or engine record was edited. All approved type-I/standard-dual/countably-separated/primitive-homeomorphism claims are retained. H1's factor-type-I ⇒ GCR implication remains separately unclosed; the alternative H2 below does not depend on the CAR trace-extension inference that failed.

## Source evidence and what actually changed

Found and read Ilijas Farah, *Combinatorial Set Theory of C*-algebras* (2019), the complete author upload:

https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf

535 PDF pages; SHA-256 `7000d7d842da12d5b934b013d3a346c1ffe52e04c6a3d8cedb72f23c251fb073`. The helper found it through the author's public WordPress media index, not a publisher preview. Full relevant arguments read: Theorem 3.1.9 (Kaplansky, printed84/PDF113), Theorem3.4.2, Lemmas3.4.3–4 and Theorem3.4.5 (finite-vector transitivity, printed97–99/PDF126–128), Proposition1.10.3 (GNS, printed35/PDF64), Lemma3.6.4 and Proposition3.6.5 (dominated forms and pure-state kernel decomposition, printed104–105/PDF133–134), Proposition3.8.1 and Lemmas3.8.2–3 (spatial equivalence, printed110–111/PDF139–140), and Theorem5.2.1/Lemma5.2.2/Lemma5.2.5 (excision and faithful essential orbit density, printed141–143/PDF170–172). Also read §5.5's actual CAR product-state argument, printed156–158/PDF185–187. These source proofs contain minor errors/shortcuts corrected below; no source stamp substitutes for the local arguments.

Farah's §3.7.1 states the full algebraic classification equivalence but refers its proof to Arveson. §5.5 proves an E0 embedding **for CAR**, not a Borel reduction to every non-type-I algebra. Arbitrary pure-state extensions of CAR states need not preserve equivalence of E0-related states. That tempting reduction was rejected. The category argument below instead uses the fully written excision/essential-orbit passages.

Read the complete seven-page Farah paper *A dichotomy for the Mackey Borel structure*, https://arxiv.org/pdf/0908.1943v2, SHA-256 `fa7d23b3c2b481e824e05573e5502041b0fa168f044c298edb2b8189b4394d66`. Proposition3 relies on Glimm1960; the final smooth⇔type-I assertion is again referenced, so the paper alone does not close H1/H2. Its Proposition7's F-sigma orbit idea is repaired and used locally below.

Read David Marker, *Descriptive Set Theory* notes, full PDF https://homepages.math.uic.edu/~marker/math512/dst.pdf, 105 pages, SHA-256 `b67ccda708a8e985c37e1b6efcb0dbce1927bd766f0f1f714c515c40534507f4`: Lemma4.2 and the relevant closure arguments, printed/PDF34–35, and full Theorem4.13/Corollary4.14 proof, printed/PDF37. The analytic separation argument is repeated locally below; no later-page item is imported as a dependency.

Two primary AMS retrieval attempts for Glimm's *Locally compact transformation groups* returned403, at the canonical `/tran/1961-101-01/S0002-9947-1961-0136681-X/…pdf` URL and the `/journals/tran/…` variant. Stopped that source after these two attempts; no proof reading claimed. Sakai and the successful author-book recovery are recorded by the disjoint H1 helper.

## Exact local supplier order

The logical chain is:

1. Bounded self-adjoint density, finite-vector transitivity, and pure-state norm/spatial equivalence.
2. Pure-state excision, its weak-star neighborhood basis, and faithful essential orbit density outside arbitrary finite-dimensional subspaces.
3. Polish faithful-pure-state spaces and the category zero-one obstruction.
4. GCR ⇔ injective primitive-kernel map ⇔ countably separated Mackey dual.
5. Standard coding of primitive ideals and local analytic separation; GCR ⇒ standard Mackey dual with its Borel structure equal to topology-generated Borel.
6. GCR ⇒ all factor representations type I by the already recorded elementary-ideal/amplification chain.
7. The remaining independent H1 implication **all factor representations type I ⇒ GCR** is required to connect these conclusions to the approved definition of a type-I group. None of steps1–6 pretends to prove step7.

Suggested local IDs, consolidated if preferable without omitting the arguments:

- `lem-c-star-state-gns-purity-and-polish-state-space`
- `lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations`
- `lem-pure-state-excision-and-essential-orbit-density`
- `lem-faithful-essential-pure-state-orbits-obstruct-countable-separation`
- `lem-primitive-ideals-have-standard-borel-quotient-norm-codings`
- `lem-local-analytic-separation-and-saturated-borel-quotients`
- `lem-gcr-kernel-and-mackey-borel-characterizations`

Verified existing earlier suppliers include `thm-baire-category-for-complete-metric-spaces`, `thm-banach-alaoglu`, `thm-complex-hahn-banach-norm-preserving-extension`, `def-state-on-a-c-star-algebra`, `lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra`, `def-strong-and-weak-operator-topologies`, and `lem-borel-subspaces-admit-polish-presentations` (Probability A `standard-borel-real-codings-and-determining-classes`, order572). Use actual earlier Hilbert projections/C*-functional calculus/GNS-purity and existing RG-25 kernel/weak-containment suppliers; verify their exact IDs in the integration contract. Reuse the commissioned compact zero-set selectors and local closed-witness coding, corrected field Gram–Schmidt and single-fibre amplification suppliers. No new pair or scope extension is needed: these are proof suppliers for the existing equivalence theorem. Exact published IDs must be verified when integrating; the names above are proposed local additions, not claims that items already exist.

## 1. Bounded density and transitivity: fill source shortcuts

Before transitivity, author the generic C*-state GNS interface rather than misusing the earlier group-positive-function theorem. For a positive norm-one functional phi, quotient A by L_phi under <a,b>=phi(b*a), complete, and let pi(a)[b]=[ab]. Positivity of ||a||²I−a*a gives ||pi(a)[b]||≤||a||||[b]||, so this is a bounded star representation; the class of I is cyclic in the unital case, and unitization/approximate units treat the nonunital case. For any positive functional psi≤phi, the form psi(b*a) is bounded on the GNS space by Cauchy–Schwarz and determines a positive contraction T in pi(A)' with psi(a)=<pi(a)Txi,xi>. Conversely each such T produces psi≤phi because T commutes with positive pi(a). Therefore phi is extreme iff that commutant is scalar iff its GNS representation is irreducible. The proof uses positive subfunctionals of norm≤1; it does not repeat the source's imprecise use of the normalized state notation for every dominated functional. This supplies the algebra-state version of purity required throughout the alternative, with separability following from the dense algebra's countable GNS classes.


Let D be a nondegenerate C*-algebra of operators and M=D''. The existing bicommutant finite-tuple argument gives strong density of D in M. Self-adjoint strong density follows as follows: self-adjointization gives weak density of D_sa in M_sa; on finitely many vectors the image is a convex subset of a finite Hilbert product, whose weak and norm closures coincide by real Hahn–Banach separation. Thus D_sa is strongly dense in M_sa.

To obtain contractions, take self-adjoint a_lambda→a strongly. The resolvent identity gives strong convergence of (a_lambda±i)^-1 to (a±i)^-1, since these resolvents have norm≤1 and the remaining error is (a−a_lambda) applied to one fixed vector. Products/sums of the uniformly bounded resolvents also converge strongly. Stone–Weierstrass then gives f(a_lambda)→f(a) strongly for f∈C0(R). For bounded continuous clipping g(t)=max(-1,min(t,1)), choose h_R∈C0 equal to g on [-R,R], with |h_R|≤1. For each fixed xi, spectral-tail estimates bound ||(g−h_R)(a_lambda)xi|| by 2||a_lambda xi||/R; the latter norms are eventually bounded by strong convergence. First choose R large, then take lambda large. This proves the clipping convergence **without assuming a globally bounded approximating net**. If ||a||≤1, g(a)=a and g(a_lambda) are contractions in D. The 2-by-2 self-adjoint block trick gives bounded density for arbitrary contractions, including strong-star approximation where needed.

For exact finite-vector self-adjoint transitivity it is enough to use a simple bounded extension, not the book's full matrix-completion lemma. With p a finite-rank projection and self-adjoint c, the self-adjoint operator

b=pcp+(1−p)cp+pc(1−p)

agrees with c on pH and has norm≤3||cp||. Bounded density approximates b on pH. Repeat for the residual with errors eta_n decaying geometrically: choose self-adjoint a_n∈D matching the residual on pH to eta_n and norm≤3eta_{n-1}+eta_n (the first term has a finite bound). Their norm-convergent sum belongs to D_sa and matches c exactly on pH. If its values on selected vectors are prescribed eigenvalues, functional calculus can clip the final sum while preserving those eigenvalues. Thus for orthogonal vectors xi,eta there is a self-adjoint contraction sending xi to xi and eta to -eta; and a self-adjoint h whose exponential sends any one unit vector to any other up to a phase, using eigenvalues0 and pi on the orthogonal combinations xi±z eta. This proves the internal-unitary equivalence of pure vector states. It also supplies the pure-state left-ideal decomposition used next.

Inequivalent irreducible representations have zero intertwiner spaces by Schur. Their direct-sum commutant has only scalar diagonal blocks, so its bicommutant is B(H0)⊕B(H1). Bounded self-adjoint density approximates the operator I⊕(-I) on their cyclic vectors, proving norm distance2 between the corresponding pure states. For two orthogonal vector states in one irreducible representation use the same bounded-density argument with the two opposite eigenvectors. Therefore pure states at norm distance<2 have equivalent GNS representations. Combining this with the exact internal unitary above gives the equivalence criterion used in the F-sigma orbit formula.

These arguments repair the source's abbreviated “linear combinations” step in bounded density, the need to justify clipping on unbounded nets, and the residual-index typographical errors in its iterative transitivity proof. No Glimm classification theorem is used.

## 2. Excision and faithful essential orbit density

Work first with a unital A. For a pure state phi let L={a:phi(a*a)=0}. Purity/GNS irreducibility gives ker(phi)=L+L*: for a in ker(phi), eta=pi(a)xi is orthogonal to xi; exact self-adjoint transitivity gives b with bxi=0 and beta=eta, so a=(a−ba)+ba, the first summand in L and the second in L*. The reverse inclusion is Cauchy–Schwarz.

Let J=L∩L*, a hereditary subalgebra, and e_lambda its positive contractive approximate identity. Put a_lambda=1−e_lambda. Then phi(a_lambda)=1, ||a_lambda||=1. If phi(b)1−b=c+d* with c,d∈L, then c*c and d*d lie in J; the approximate-unit estimate gives ||ca_lambda||→0 and ||a_lambda d*||→0. Hence

||a_lambda b a_lambda−phi(b)a_lambda²||→0.

The same proof can use the approximate identity on a directed finite-test index; no countability of its entire net is assumed. These positive contractions excise phi. For finitely many norm-one b, replacing a_lambda by its square (so its square root is the original a_lambda) and using state Cauchy–Schwarz shows that psi(a_lambda²)>1−epsilon forces psi(b) close to phi(b). Thus neighborhoods U_{a,epsilon}={psi:psi(a)>1−epsilon}, a positive norm-one with phi(a)=1, form a weak-star local basis at phi.

Let pi be faithful irreducible with pi(A)∩K(H)=0. Given a nonempty pure-state neighborhood choose such a positive a and epsilon. The spectral projection E_a((1−epsilon,1]) has infinite-dimensional range: otherwise (a−(1−epsilon))_+ is nonzero finite rank in pi(A), contradiction. For any specified finite-dimensional H0 choose a unit vector zeta in that spectral range orthogonal to H0. Its vector state belongs to the neighborhood. Thus the orbit of pi's vector states is weak-star dense in P(A), and remains dense while avoiding any finite-dimensional subspace of its carrier.

For nonunital A use the unique unital extension of a nondegenerate irreducible representation. If pi(A) has no compacts, neither does its unitization: a nonzero compact a+cI with c≠0 would make the injective Calkin image of A unital, so A itself would have a unit whose nondegenerate image is I, a contradiction. Pure states of A identify with the pure states of its unitization except the augmentation character. The needed neighborhood and orbit claims transfer. This avoids the source's noncyclic scalar spectral-model shortcut: only spectral projections and the finite-rank obstruction are needed.

## 3. Polish faithful states and the category obstruction

Suppose B is separable primitive and has a faithful irreducible representation with no compacts. All faithful irreducible representations of B then have no compacts: if one had a nonzero compact, its preimage would be a nonzero elementary ideal; restriction of any other faithful irreducible to this ideal is irreducible and nonzero, hence its image contains compacts by the elementary-ideal amplification supplier. This contradicts the assumed essential representation.

The pure-state space of a separable unital algebra is Polish. Its state space is compact metrizable by Banach–Alaoglu and a countable norm-dense test family. Non-extreme points form an F-sigma set: for each n take the compact set of pairs of states with metric distance≥1/n, map it by averaging, and take the union. Every nontrivial convex decomposition can be recentered as a midpoint of two distinct states. The pure states are the complementary G-delta. For nonunital algebras remove the augmentation character as above.

A countable family of nonzero ideals is cofinal among the nonzero ideals of B. Choose a countable dense family of positive contractions a_n and rational r>0; take nonzero c=(a_n−r)_+ and the ideals they generate. Given nonzero ideal J, approximate a positive norm-one element of J by a_n within epsilon<1/4 and take epsilon<r<1/2. Its quotient image has norm<r, so c∈J, while c≠0. Enumerate these nonzero c as c_k. For a pure state phi, its GNS representation is faithful iff for each k some b in a fixed countable norm-dense algebra has phi(b*c_k²b)>0. This is a countable intersection of open unions, so the faithful-pure-state subspace F is G-delta, nonempty and Polish. It contains every vector state of a faithful irreducible, and the preceding orbit-density argument shows that **every unitary orbit in F is dense**.

Each such orbit is F-sigma and meager in F. Fix its state phi and a countable norm-dense unitary family (u_j) in the unitization. It equals

union_j {psi∈F:||psi−phi∘Ad u_j||≤1}.

The closed balls are weak-star closed: the norm is the supremum of absolute evaluations on a countable dense unit ball. They lie inside the orbit by norm distance<2; every state in the orbit lies in some ball by approximation of its implementing unitary. Each ball has empty interior in F: in any nonempty neighborhood, the essential-orbit lemma chooses a pure vector state in the faithful representation of its center, orthogonal to the center's vector; its norm distance is2. Hence all balls are nowhere dense and the orbit is meager.

For any invariant Borel subset D of F, if D is nonmeager, its Baire property makes it comeager in some nonempty open U. Every orbit is dense, so the translates of U cover F; a countable subcover exists by second countability. Invariance and the homeomorphism action imply D is comeager on each translated U, hence on F. Thus every invariant Borel set is either meager or comeager.

If a countable invariant Borel family separated the orbits, choose for each member its comeager side (the set or its complement). Their intersection is comeager and nonempty by Baire, and all points in it have the same membership code, so it lies in one orbit. That orbit would be comeager, contradicting meagerness. Therefore the faithful-irreducible classes are not countably separated. Also they cannot comprise a single orbit, proving there are inequivalent **faithful** irreducibles of B.

Consequently, for any separable A failing GCR, choose an irreducible quotient B=A/J whose faithful image contains no compact operators. Pulling back the preceding conclusion proves both:

- the primitive-kernel map for A is not injective;
- its Mackey dual is not countably separated (restrict the assumed separating family to representations factoring through B and then to its faithful pure states).

This proves countably separated ⇒ GCR and injective-kernel ⇒ GCR without the omitted CAR-supported-state construction.

## 4. GCR, primitive ideal coding, and standard Borel topology

GCR ⇒ injective kernel is the proved compact-ideal route: for primitive J, A/J contains an elementary essential ideal. Every faithful irreducible restricts to its unique irreducible representation and has the unique nondegenerate extension, so their unitary classes coincide. The reverse has just been proved in section3. The kernel map is always surjective by definition of primitive ideal and the GNS correspondence.

Its topology is the approved hull-kernel/Fell topology. The map from pure states to primitive kernels is continuous and open. Continuity of a basic quotient-norm superlevel follows from

||pi_phi(a)||² = sup_b phi(b*a*a b)/phi(b*b),

where b ranges over a countable dense algebra and zero denominators are omitted. Each strict ratio inequality is open. Openness follows from excision: for any pure-state open neighborhood and any point in it, a smaller U_{a,epsilon} sits inside it; its kernel image is exactly {J:||a+J||>1−epsilon}, since any irreducible realizing J has pure vector states attaining the positive operator norm arbitrarily closely. Thus any open image is a union of basic kernel opens. The pure-state quotient induces the Fell/weak-containment topology by the existing RG-25 kernel convention, with the same quotient-norm basic opens. In particular, when the kernel map is bijective it is a homeomorphism, not merely a continuous bijection.

For completeness, primitive=prime for separable A can be proved here without citing Choquet. The pure-state space is Polish and its kernel map is open continuous surjective, so Prim(A) is Baire (pull back each dense open set). If A is prime, all opens corresponding to nonzero ideals are dense because any two nonzero ideals intersect nontrivially. The countably cofinal nonzero ideals from section3 give a countable collection of dense opens; a primitive kernel avoiding all of them must be zero. Baire supplies such a kernel. Apply this argument to A/J to obtain closed prime ⇒ primitive. The converse follows from the factor-kernel proof using approximate units and the impossibility of two orthogonal nonzero central supports in an irreducible representation.

Code all closed ideals by the quotient seminorms q_J(a_n)=||a_n+J|| on a fixed countable rational-complex dense star algebra. The space of bounded C*-seminorms (including q(a*)=q(a)) on this algebra is a closed subset of the product of the intervals [0,||a_n||]: rational seminorm inequalities, product inequality and q(a*a)=q(a)² are countable closed conditions. Such a seminorm extends continuously to A. Its kernel is a closed ideal, and the induced injective star map from A/J to its seminorm completion is isometric, so it is exactly the quotient norm. Injective-star isometry follows directly from continuous functional calculus: a positive element whose image norm were smaller admits a nonzero spectral cutoff killed by the map. Thus the code space really parametrizes closed ideals and is compact metrizable.

Primitive codes form a **Borel** subset. Let a,b range over the countable dense algebra, and c over a countable norm-dense unit ball. A code is prime iff for every a,b,

sup_c q(a c b)=q(a)q(b).

If the quotient is primitive, bounded density in its faithful irreducible proves this equality by approximating the appropriate rank-one linker. Conversely a nonprime quotient has nonzero ideals with zero product; choose nonzero a,b from them and the equality fails. Continuity in a,b extends the countable tests to these arbitrary elements. The quotient image of the original unit ball is dense in the quotient unit ball by the definition of quotient norm, so the bounded linker tests genuinely exhaust all quotient contractions. The supremum condition is Borel by countability. Exclude the improper zero quotient. Thus Prim(A), using its quotient-norm coordinates, is standard Borel.

These coordinates generate exactly the topology-generated Borel structure: the superlevels {q_J(a)>r} are basic hull-kernel opens (use a positive cutoff), and other coordinate inverse intervals are countable Boolean combinations of superlevels. Conversely the basic hull-kernel opens are unions of these norm-test opens. This gives a genuine standard Borel model for Prim(A), not an assertion that every second-countable T0 space is automatically standard Borel.

## 5. Mackey quotient equality: local analytic separation

The pure-state quotient and the usual irreducible-representation Mackey quotient have the same Borel structure. In one direction, a Borel field of irreducible representations with one fixed unit vector gives a Borel field of pure vector states. In the other, the GNS construction on a countable dense algebra has Gram coefficients phi(b*a), and the already proved measurable Gram–Schmidt/least-active-index construction produces Borel representation matrices on dimension strata. Therefore a class set has Borel inverse image in all representation spaces iff it has Borel inverse image in P(A). This is an explicit coefficient construction, not use of a global selector of irreducible classes.

The local closed-witness coding already commissioned on RG-26 makes images of Borel sets under Borel maps analytic by coding their Borel graphs. Repeat the following short separation proof rather than depending on the later analytic-separation page. Every nonempty analytic set is a continuous image of N^N: a closed witness is Polish, and nested complete-metric open covers give a continuous surjection from N^N onto any nonempty Polish space. For disjoint analytic A,B take such continuous parametrizations f,g. For prefixes s,t put A_s=f[N_s], B_t=g[N_t]. If all child pairs admit Borel separators C_nm, then union_n intersection_m C_nm separates their parents. If the original pair were inseparable, recursively choose a least inseparable child pair. Its two limit branches have distinct image points. Continuity gives disjoint open neighborhoods eventually containing their prefix images, a Borel separator, contradiction. AC chooses the countable family of child separators. Hence disjoint analytic sets have a Borel separator; analytic plus coanalytic implies Borel.

When GCR holds, the map P(A)→Prim(A) is a Borel surjection and its fibres are exactly the pure-state equivalence classes. For any saturated Borel E⊆P(A), its image and complementary image are analytic in the standard code model for Prim(A); they are disjoint complements because the fibres are full equivalence classes. Separation makes the image Borel. Conversely every Borel subset of Prim(A) has Borel preimage. Thus the Mackey Borel structure is exactly the standard topology-generated Borel structure of Prim(A), transported by the kernel homeomorphism. In particular it is standard and countably separated.

Combining sections3–5 gives the exact H2 conclusions:

GCR ⇔ injective primitive-kernel/homeomorphism criterion ⇔ countably separated Mackey dual ⇔ standard Mackey dual,

and in this case Mackey Borel equals Fell-topology Borel. Standard ⇒ countably separated uses a countable separating base in a Polish presentation. No global Borel section of the irreducible-class map is claimed.

## Integration boundary and last-resort recommendation

The above replaces the old H2 source gap by a concrete, source-backed local route with the essential intermediate arguments written out. It still needs authoring, exact dependency contracts and focused review before any readiness or item acceptance changes. The pure-state/kernel coding clauses are strengthened supplier proofs for the already approved theorem, not new user-facing A/B scope.

The remaining algebraic H1 clause is **factor type I ⇒ GCR**. GCR ⇒ factor type I has the compact-ideal/amplification proof already recorded: a separable factor kernel is prime, hence primitive; its elementary essential ideal restricts the factor representation to an amplification, with the same generated algebra. Conversely, Farah's actual CAR subquotient and trace proofs do not ensure a non-type-I factor representation of the ambient algebra; a supported-compression extension is still missing, as the H1 receipt demonstrates with a concrete counterexample. Blackadar omits the corresponding construction; Farah's §3.7.1 refers it out; the tested primary Sakai URLs were inaccessible. This is an evidence-based remaining gap after actual new source/proof progress, not unchanged uncertainty.

If root determines this bounded alternative pass has exhausted feasible full-proof routes, the owner's explicit last-resort citation authorization can therefore be applied **only to that algebraic Glimm implication**, citing the original classification theorem honestly. Original Glimm/Dixmier full text has not been read; no local proof of this implication has been supplied. Root must own the concrete run-local exception, metadata and gate treatment. I have applied none.

The existing full equivalence criterion can then be derived from this one honestly cited algebraic clause plus the locally proved GCR/Borel/kernel chain above. Its four downstream existing claims must have actual local conditional derivations, rather than be converted into independent cited-original leaves: equivalence assembly; disintegration using central/type-I splitting and standard-dual parametrization; uniqueness through central transport and fibre multiplicity; nonsmoothness by the contrapositive category result. Additional details of measured pushforward/base identification still must be proved in those authoring items, not inferred from this receipt.


## Conditional local derivations of the four existing consumers

These are the actual downstream routes if root invokes the precise residual algebraic Glimm clause, or later obtains its proof. They must be authored and checked; no conditional theorem is certified by this receipt.

1. **Equivalent-characterizations theorem.** Apply RG-25's nondegenerate group/C*(G) correspondence and its preservation of commutants and kernels; C*(G) is separable by the existing supplier. The one residual implication factor-type-I ⇒ GCR, plus the locally proved converse and sections3–5, assembles exactly type I, standard/Fell Borel, countably separated, and primitive-homeomorphism equivalences. The original source is needed only for that implication, not independently for each equivalence.

2. **Irreducible disintegration over the dual.** Central decomposition and corrected measurable type-I splitting first give pi over X as sigma_x tensor I_{l2(m_x)}. Measurable Gram–Schmidt and the GNS/representation class coding make f(x)=[sigma_x] Borel into the now-standard dual. Normalize the sigma-finite scalar measure to an equivalent probability measure, keeping the same representation via the square-root Radon–Nikodym unitary. Its pushforward nu is a Borel probability on the standard dual, hence a standard measure.

   One must not silently assume that f is a base isomorphism or that its image is Borel. Its analytic image has full nu measure; local measured-projection/Borel-version arguments give a conull Borel subset B of that image. The existing conull Borel uniformization selects a representative x_b with f(x_b)=b, and sigma_b=sigma_{x_b} is a measurable field on B. On the original base select measurable unitaries intertwining sigma_x with sigma_{f(x)}: the relation is Borel using countably many integrated algebra generators, unitary equations and constant-dimension strata, and its fibres are nonempty by equality of classes. The field selector thus gives pi ≅ integral_X sigma_{f(x)} tensor I_{l2(m_x)}.

   Use the actual earlier scalar standard-Borel disintegration supplier `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` for the joint law of (f(x),x). Its conditional kernels nu_b are supported on f^{-1}(b) almost everywhere: apply the conditional identities to a countable separating generating algebra of the dual, then remove the countable exceptional set. Put L_b=L2(X,nu_b;l2(m_x)). This is a measurable Hilbert field: a countable generating algebra of X, tensored with the coordinate indicator sections for m_x, gives a countable fundamental family whose Gram coefficients are conditional integrals and therefore Borel. Density follows from scalar simple-function approximation and finite-coordinate truncation. Conditional scalar Fubini on these elementary sections, followed by density, gives a unitary regrouping into integral_B sigma_b tensor I_{L_b}. This explicitly supplies the required Hilbert-field Fubini interface; it is not a citation replacing it. Its multiplicity dim(L_b) is Borel by the already proved dimension-strata construction.

   This regrouped representation is central. For each closed ideal J in C*(G), the support projection of pi(J)H is a central projection in M=pi(C*(G))'': it is the strong limit of an approximate identity of J and its range is reducing. On the b fibre it equals I iff J is not contained in ker(sigma_b), and zero otherwise. The countably many basic hull-kernel opens separate b and generate its Borel sigma-algebra, so these projections generate the full diagonal algebra D_B. Hence D_B⊆M⊆D_B'. The proved fibre-commutant/center supplier identifies M with its fibre integral and its center with D_B, since each fibre is a type-I factor. This proves the preserved dual disintegration with honest measure/multiplicity bookkeeping, without claiming a global selector for every point of the dual.

3. **Essential uniqueness of dual irreducible disintegration.** Both dual models are central by the ideal-support projection argument. The proved central-transport supplier gives a conull base isomorphism c and fibre factor unitaries. These preserve every ideal-support projection, since they intertwine the representation of the same algebra. Membership in each countable basic hull-kernel open therefore agrees for b and c(b). The base is standard and that family separates classes, so c(b)=b almost everywhere. Thus the two measures on the same dual are equivalent, and the corrected single-fibre multiplicity uniqueness gives identical multiplicities almost everywhere. This supplies the requested canonical measure-class/multiplicity claim rather than merely asserting uniqueness on arbitrary differently labelled bases.

4. **Nonsmooth non-type-I consequence.** The locally proved GCR ⇒ factor-type-I direction already gives non-type-I ⇒ non-GCR by contraposition. Section3 then proves the dual is not countably separated. Hence it is not standard and cannot have the preceding standard-Borel canonical irreducible parameterization. Central factor decomposition remains locally supplied; existence of some irreducible decompositions is not denied. This consequence does not itself require the residual factor-type-I ⇒ GCR citation.

The conditional measure/regrouping route and the category/coding lemmas may be kept within their existing theorem proofs or factored into sufficient local suppliers. They add no page, global representative selection, or generic source citation masquerading as local proof. Exact available measure/Hilbert assumptions and AC qualifications must be printed in their contracts.
